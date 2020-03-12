import store from '../redux/store';
import { batch } from 'react-redux';

const parseComment = (comment) => {
    let {body_html, id, author, permalink, replies, score} = comment;
    body_html = parseBodyText(body_html);
    
    replies = typeof replies === 'object' ? replies.data.children : [];
    
    replies = replies.map(comment => {
        //console.log(comment);
        return parseComment(comment.data);
    });
    
    return {body_html, id, author, permalink, replies, score};
}

const parseBodyText = (text) => {
    text ? text = text
                    .replace(/&lt;/g,'<')
                    .replace(/&gt;/g,'>')
                    .replace(/&amp;#39;/g,"'")
                    .replace(/&amp;quot;/g,'"')
                    .replace(/&amp;/g,"&")
                    .replace(/&#x200B;/g,' ')
                        : text = '';
    return text;
}

const parseURL = (url) => {
    let parts = url.split('/');
    let sub = '';
    let newSort = 'hot';
    let postId = '';

    if (parts.length > 0) {
        parts[1] !== undefined ? sub = parts[1] : sub = '';
        parts[2] === 'comments' && parts[3] !== undefined ? postId = parts[3] : postId = '';
        parts[2] !== 'comments' && parts[2] !== undefined ? newSort = parts[2] : newSort = 'hot';
    }    

    return {sub, newSort, postId};
}

const parseBool = (str) => {
    return str === 'true' ? true : false;
}

const parseSearch = (searchStr) => {
    let search = searchStr.match(/search=([a-zA-Z0-9% ]+)/);
    let searchSort = searchStr.match(/searchSort=(relevance|new)/);
    let searchSub = searchStr.match(/searchSub=(true|false)/);
    let searchForSubs = searchStr.match(/searchForSubs=(true|false)/);
    
    search = search === null ? '' : search[1];
    searchSort = searchSort === null ? 'relevance' : searchSort[1];
    searchSub = searchSub === null ? true : parseBool(searchSub[1]);
    searchForSubs = searchForSubs === null ? false : parseBool(searchForSubs[1]);

    search = search.replace(/%20/g, ' ');
    
    return {search, searchSort, searchSub, searchForSubs};
}

const getMySubs = (prepend) => {
    let currentSub = '';
    let storedSubs = localStorage.getItem('subs');
    storedSubs = storedSubs ? JSON.parse(storedSubs) : [];
    currentSub = prepend+storedSubs.join('+');
    if (storedSubs.length === 0) currentSub = prepend+'All';
    return currentSub;
}

const getPostList = async (loadMore=false) => {
    const state = store.getState();
    let { posts, currentSub, currentSort, currentSearch, currentSearchSort, currentSearchSub, latestPost, searchForSubs } = state;
    const setLatestPost = (val) => store.dispatch({type: 'SET_LATEST_POST', payload: val});
    const setPosts = (val) => store.dispatch({type: 'SET_POSTS', payload: val});
    const setNoPosts = (val) => store.dispatch({type: 'SET_NO_POSTS', payload: val});
    const setNoMorePosts = (val) => store.dispatch({type: 'SET_NO_MORE_POSTS', payload: val});

    //if no sub, then don't get anything
    if (currentSub.length === 0) return;

    if (currentSub.length > 0) currentSub = 'r/'+currentSub;    

    if (!loadMore) {
        setPosts([]);
        setNoPosts(false);
        setNoMorePosts(false);
    }

    if (currentSub === 'r/My Subreddits') currentSub = getMySubs('r/');
    
    try {
        let url = `https://www.reddit.com/${currentSub}/${currentSort}/.json`;
        if (loadMore) url += `?after=t3_${latestPost}`;

        if (currentSearch.length > 0) {
            let parsedStr = currentSearch.split(' ').join('+');
            if (searchForSubs) url = `https://www.reddit.com/${currentSub}/search.json?q=${parsedStr}&include_over_18=on&sort=relevance&type=sr`;
            else url = `https://www.reddit.com/${currentSub}/search.json?q=${parsedStr}${currentSearchSub ? '&restrict_sr=on' : ''}&include_over_18=on&sort=${currentSearchSort}`;

            if (loadMore) {
                if (searchForSubs) url += `&after=t5_${latestPost}`;
                else url += `&after=t3_${latestPost}`;
            }
        }

        if (currentSub.length === 0) url = 'https://www.reddit.com/.json';        

        let response = await fetch(url);
        let data = await response.json();

        if (data.error){
            console.log('Getting Post List - Error: ', data.error);
            if (!loadMore) {
                batch(() => {
                    setNoPosts(true);
                    setPosts([]);
                });
            }
        } else {
            if (data && data.data && data.data.children){
                let newPosts = data.data.children.map(post => {                    
                    const data = post.data;

                    let media = data.media;
                    if (media && media.oembed){
                        media = parseBodyText(media.oembed.html);
                    } else {
                        media = '';
                    }

                    if (post.kind === 't5') return {
                        id: data.id,
                        type: 'sub',
                        title: parseBodyText(data.title),
                        subName: data.display_name,
                        description: parseBodyText(data.description_html),
                        created: data.created_utc,
                        subscribers: data.subscribers,
                    }
                    
                    return {
                        type: 'post',
                        created: data.created_utc,
                        author: data.author,
                        domain: data.domain,
                        title: parseBodyText(data.title),
                        id: data.id,
                        body: parseBodyText(data.selftext_html),
                        num_comments: data.num_comments,
                        score: data.score,
                        subreddit: data.subreddit,
                        stickied: data.stickied,
                        url: data.url,
                        thumbnail: data.thumbnail, //if no thumbnail - "self"
                        permalink: data.permalink,
                        media: media
                    };
                });

                let noMore = newPosts.length === 0 ? true : false;
                if (loadMore) newPosts = [...posts, ...newPosts];

                batch(() => {
                    if (!noMore) setLatestPost(newPosts[newPosts.length-1].id);                                
                    setPosts(newPosts);
                    if (noMore) setNoMorePosts(true);
                    if (noMore && !loadMore) setNoPosts(true);
                });
            }
        }
    } catch (error) {
        console.log('Getting Post List - URL Error: ', error);
        if (!loadMore) {
            batch(() => {
                setNoPosts(true);
                setPosts([]);
            });
        }
    }
};

const getComments = async () => {
    const state = store.getState();
    let { currentSub, currentPostId, commentSort } = state;
    const setComments = (val) => store.dispatch({type: 'SET_COMMENTS', payload: val});
    const setNoComments = (val) => store.dispatch({type: 'SET_NO_COMMENTS', payload: val});
    const setPostDetails = (val) => store.dispatch({type: 'SET_POST_DETAILS', payload: val});

    if (currentPostId.length === 0) return;

    setComments([]);
    setNoComments(false);
    
    if (currentSub === 'My Subreddits') currentSub = getMySubs();

    let url = `${currentSub}/comments/${currentPostId}/`;
    
    try {        
        let response = await fetch(`https://www.reddit.com/r/${url}.json?sort=${commentSort}`);
        let data = await response.json();
        
        if (data.error){
            console.log('Getting Comments - Error: ', data.error);
        } else {
            let {title, selftext_html, id, url, media, author, created_utc, permalink} = data[0].data.children[0].data;

            let comments = data[1].data.children.map(obj => {
                return parseComment(obj.data);
            });

            batch(() => {
                setPostDetails({id, url, title, author, created:created_utc, body: parseBodyText(selftext_html), media, permalink});
                setComments(comments);
                if (comments.length === 0) setNoComments(true);
            });
        }
    } catch (error) {
        console.log('Getting Comments - URL Error: ', error);
    }
};

const updatePostDetails = () => {
    const posts = store.getState().posts;
    const currentPostId = store.getState().currentPostId;
    const setPostDetails = (val) => store.dispatch({type: 'SET_POST_DETAILS', payload: val});

    let post = undefined;
    if (currentPostId.length > 0) post = posts.find(post => post.id === currentPostId);
    if (post === undefined) setPostDetails({});
    else setPostDetails(post);  
}

export {
    parseComment, 
    parseBodyText,
    parseURL,
    parseSearch,
    getPostList,
    getComments,
    updatePostDetails
}