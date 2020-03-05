import React, { useEffect, useState, useCallback } from "react";
import { useMediaQuery } from 'react-responsive';
import { useSelector, useDispatch } from 'react-redux';

import TopMenu from './components/TopMenu';
import PostList from './components/PostList';
import Post from './components/Post';
import Header from './components/Header';
import SideMenu from './components/SideMenu';

import { getPostList, getComments, parseURL, updatePostDetails } from './functions/useful';

const Page = ({location, history}) => {
    const dispatch = useDispatch();
    const [scrollPos, setScrollPos] = useState(0);

    const currentSort = useSelector(state => state.currentSort);
    const setCurrentSort = (sort) => dispatch({type: 'SET_SORT', payload: sort});

    const posts = useSelector(state => state.posts);
    const setPosts = (posts) => dispatch({type: 'SET_POSTS', payload: posts});
    
    const clearSearch = () => dispatch({type: 'CLEAR_SEARCH'});
    const closeMenus = () => dispatch({type: 'CLOSE_MENUS'});

    const currentSub = useSelector(state => state.currentSub);
    const setCurrentSub = (val) => dispatch({type: 'SET_SUB', payload: val});

    const currentPostId = useSelector(state => state.currentPostId);
    const setCurrentPostId = (val) => dispatch({type: 'SET_POSTID', payload: val});

    const isMobile = useMediaQuery({ maxWidth: 700 });

    let {sub, newSort, postId} = parseURL(location.pathname);    

    if (sub !== currentSub) setCurrentSub(sub);
    if (postId !== currentPostId) setCurrentPostId(postId);
    if (newSort.length > 0 && newSort !== currentSort) setCurrentSort(newSort);

    useEffect(() => {   
        if (isMobile) closeMenus(); 
        clearSearch(); //comment out if want to change subs while still searching         
        getPostList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentSort, currentSub]);

    useEffect(() => {
        if (currentPostId.length === 0) {
            window.scrollTo(0,scrollPos);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPostId]);

    //get post details for immediate display from existing array, then query server for more details
    useEffect(() => {
        if (currentPostId.length > 0) {            
            getComments();
            window.scrollTo(0,0);  
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPostId]);

    const onClickLink = useCallback((url) => (e) => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setScrollPos(oldVal => scrollTop);
        history.push(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (currentPostId.length > 0 && postId.length > 0) {        
        updatePostDetails(posts, currentPostId);
    }

    if (sub !== currentSub || postId !== currentPostId || (newSort.length > 0 && newSort !== currentSort)) return <div></div>;

    if (currentSub.length === 0) {
        let redirectSub = '';
        let storedSubs = localStorage.getItem('subs');
        storedSubs = storedSubs ? JSON.parse(storedSubs) : [];
        if (storedSubs.length > 0) redirectSub = storedSubs[0];
        else redirectSub = 'Popular';
        history.push(`/${redirectSub}/${currentSort}`);
        return <div></div>;
    }

    const onReload = () => {
        setPosts([]);
        getPostList();
    }

    const onBackClick = () => {
        history.goBack();
    }

    const getMainPage = () => {
        return (
            <React.Fragment>
                <Header heading={currentSub} onReload={onReload}/>
                { currentPostId.length > 0 ? <Post/> : null }
                <PostList onClickLink={onClickLink}/>
            </React.Fragment>
        );
    }

    if (isMobile) {
        return (
            <div style={{height: '100%', overflow: 'hidden'}}>
                <TopMenu onBackClick={onBackClick}/>
                <div style={{marginTop: '50px'}}></div>
                { getMainPage() }
            </div>
        );
    } else {
        return (
            <div style={{display: 'flex', height: '100%'}}>
                <div>
                    <SideMenu/>
                </div>
                <div style={{width: 'calc(100% - 250px)', height: '100%', overflow: 'scroll', marginLeft: '250px', position: 'relative'}} id='mainPage'>
                    { getMainPage() }
                </div>
            </div>
        );
    }
}

export default Page;