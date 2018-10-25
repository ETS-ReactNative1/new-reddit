(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e){e.exports={name:"new-reddit",version:"0.1.0",private:!0,dependencies:{"gh-pages":"^2.0.1",moment:"^2.22.2",react:"^16.5.2","react-dom":"^16.5.2","react-router-dom":"^4.3.1","react-scripts":"2.0.5"},scripts:{start:"react-scripts start",build:"react-scripts build",test:"react-scripts test",eject:"react-scripts eject",predeploy:"npm run build",deploy:"gh-pages -d build"},eslintConfig:{extends:"react-app"},homepage:"https://vyper248.github.io/new-reddit",startPoint:"",browserslist:[">0.2%","not dead","not ie <= 11","not op_mini all"]}},20:function(e,t,a){e.exports=a(46)},25:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){},37:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),s=a.n(o),c=(a(25),a(5)),i=a.n(c),l=a(14),m=a(6),d=a(7),u=a(11),p=a(8),h=a(12),g=a(50),v=a(47),f=a(49),b=a(48),E=(a(29),a(17)),k=function(e){var t=E.startPoint;return r.a.createElement("div",{className:"subLinks"},["PSVR","PS4","Apple","iPhone","NoMansSkyTheGame","Minecraft","PS4Deals"].map(function(e,a){var n=t+"/"+e;return r.a.createElement(b.a,{className:"navLink",activeClassName:"active",key:a,to:n},e)}))},y=(a(35),function(){return r.a.createElement("div",{className:"loadingSpinner"})}),w=a(34),N=(a(37),a(13)),L=a.n(N),S={getTimeString:function(e){var t=L()(e),a=L()(),n=L.a.duration(a.diff(t));return 1===n.years()?n.years()+" year ago":n.years()>1?n.years()+" years ago":1===n.months()?n.months()+" month ago":n.months()>1?n.months()+" months ago":1===n.days()?n.days()+" day ago":n.days()>1?n.days()+" days ago":1===n.hours()?n.hours()+" hour ago":n.hours()>1?n.hours()+" hours ago":1===n.minutes()?n.minutes()+" minute ago":n.minutes()>1?n.minutes()+" minutes ago":"Now"}},C=function(e){var t=e.post,a=S.getTimeString(1e3*t.created),n=r.a.createElement("div",{className:"postThumbnail"},r.a.createElement("img",{src:t.thumbnail,alt:"Thumbnail for post"}));!1===/(.jpg|.png|.bmp|.jpeg)/.test(t.thumbnail)&&(n=r.a.createElement("span",null)),t.body=t.body.replace(/<a/g,'<a target="_blank" rel="noopener noreferrer"');var o=r.a.createElement("div",{className:"postLinkBody",dangerouslySetInnerHTML:{__html:t.body}}),s=!1;t.url.match(/.jpg$/)&&(o=r.a.createElement("div",{className:"postLinkBody"},r.a.createElement("img",{src:t.url,alt:"Preview user linked to"})),s=!0),t.media.length>0&&(t.body.length>0&&(t.media+="<br/>"+t.body),o=r.a.createElement("div",{className:"postLinkBody",dangerouslySetInnerHTML:{__html:t.media}}),s=!0);var c=r.a.createElement("span",null," - ",r.a.createElement("span",{className:"postLinkOpen",onClick:function(e){e.preventDefault();var t=e.target.parentNode.parentNode.parentNode.querySelector(".postLinkBody");t.classList.toggle("open"),t.classList.contains("open")?e.target.innerText="[ - ] ":e.target.innerText="[ + ] "}},"[ + ] "));0===t.body.length&&!1===s&&(c=r.a.createElement("span",null));var i="postLink";return t.stickied&&(i+=" stickied"),r.a.createElement("div",{className:i},n,r.a.createElement("div",{className:"postLinkContent"},r.a.createElement(w.a,{to:"".concat(t.subreddit,"/").concat(t.id),className:"postLinkTitle"},t.title),r.a.createElement("div",{className:"postLinkMiddle"},r.a.createElement("a",{className:"postLinkDomain",href:t.url,target:"_blank",rel:"noopener noreferrer"},t.domain," - "),r.a.createElement("span",{className:"postLinkTime"},a," - "),r.a.createElement("span",{className:"postLinkAuthor"},t.author),c),o,r.a.createElement("div",{className:"postLinkFooter"},r.a.createElement(w.a,{to:"".concat(t.subreddit,"/").concat(t.id),className:"postLinkComments"},t.num_comments," Comments "),"- ",r.a.createElement("a",{className:"postLinkReddit",href:"https://www.reddit.com"+t.permalink,target:"_blank",rel:"noopener noreferrer"},"Open on Reddit"))))},x=(a(40),function(e){var t=e.posts;return t&&0===t.length?r.a.createElement(y,null):t?r.a.createElement("div",{className:"postListDiv"},t.map(function(e){return r.a.createElement(C,{key:e.id,post:e})})):r.a.createElement("div",{className:"postListDiv"},"No Posts Found")}),T=(a(42),function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.comment,a=e.author,n="";return t.replies.length>0&&(n=r.a.createElement(M,{comments:t.replies,author:a})),r.a.createElement("div",{className:"commentDiv"},r.a.createElement("div",{className:"commentHeader"},r.a.createElement("span",{className:"commentClose",onClick:function(e){e.preventDefault();var t=e.target.parentNode.parentNode;t.classList.toggle("closed"),t.classList.contains("closed")?e.target.innerText="[ + ] ":e.target.innerText="[ - ] "}},"[ - ] "),r.a.createElement("span",{className:t.author===a?"commentAuthor OP":"commentAuthor"},t.author),r.a.createElement("span",{className:"commentScore"}," | ",t.score)),r.a.createElement("div",{className:"commentText",dangerouslySetInnerHTML:{__html:t.body_html}}),r.a.createElement("div",{className:"commentFooter"},r.a.createElement("a",{className:"commentPermalink",target:"_blank",rel:"noopener noreferrer",href:"http://www.reddit.com"+t.permalink},"Permalink")),n)}}]),t}(n.Component)),M=function(e){var t=e.comments,a=e.author;return t&&t.length>0?r.a.createElement("div",{className:"comments"},t.map(function(e){return e.author?r.a.createElement(T,{key:e.id,comment:e,author:a}):null})):t?r.a.createElement("div",null):t?void 0:r.a.createElement(y,null)},j=function(e){var t=e.onClick,a=e.currentSort,n={1:["Hot","New","Rising","Controversial","Top"],2:["Best","New","Top","Controversial","Old","Q&A"]}[e.sortList];return r.a.createElement("div",{className:"sortButtons"},n.map(function(e,n){var o="sortButton";return e.toLowerCase()===a?o+=" active":"best"===e.toLowerCase()&&"confidence"===a?o+=" active":"q&a"===e.toLowerCase()&&"qa"===a&&(o+=" active"),r.a.createElement("span",{key:n,className:o,onClick:t},e.toLowerCase())}))},_=(a(44),function(e){var t=e.postDetails,a=t.title,n=t.body,o=t.comments,s=t.url,c=t.media,i=t.author,l=t.created,m=e.currentSort,d=e.commentSortMethod,u=S.getTimeString(1e3*l);n=n.replace(/<a/g,'<a target="_blank" rel="noopener noreferrer"');var p=r.a.createElement("div",{dangerouslySetInnerHTML:{__html:n},className:"postDivBody"});/.(png|jpg|jpeg|bmp)$/.test(s)&&(p=r.a.createElement("img",{src:s,alt:"Preview of content"}));var h=s||"";return h.length>40&&(h=h.substr(0,40)+"..."),c&&c.length>0&&(n.length>0&&(c+="<br/>"+n),p=r.a.createElement("div",{dangerouslySetInnerHTML:{__html:c},className:"postDivBody"})),r.a.createElement("div",null,0===a.length?r.a.createElement("h1",{className:"loading"},"Loading..."):r.a.createElement("div",{className:"postDiv"},r.a.createElement("h1",null,a),r.a.createElement("div",{className:"postMiddle"},r.a.createElement("span",null,i),r.a.createElement("span",{className:"postTime"}," | ",u),r.a.createElement("a",{className:"postGoToURL",href:s,target:"_blank",rel:"noopener noreferrer"}," | Go to URL (",h,")")),p,r.a.createElement(j,{onClick:d,currentSort:m,sortList:2}),r.a.createElement("hr",null),r.a.createElement(M,{comments:o,author:i})))}),D=function(e){var t=e.heading,a=e.onReload;return r.a.createElement("h1",{className:"subHeader"},t," ",r.a.createElement("span",{className:"reloadButton",onClick:a},"\u21bb"))},B=a(17),O=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).onReload=function(){e.checkUrlAndUpdate(!0)},e.onChangeSortMethod=function(t){var a=t.target.innerText.toLowerCase();e.setState({sortMethod:a})},e.onChangeCommentSortMethod=function(t){var a=t.target.innerText.toLowerCase();switch(a){case"best":e.setState({commentSortMethod:"confidence"});break;case"q&a":e.setState({commentSortMethod:"qa"});break;default:e.setState({commentSortMethod:a})}},e.getPostList=function(){var t=Object(l.a)(i.a.mark(function t(a){var n,r,o,s;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.length>0&&(a="r/"+a),t.prev=1,n="https://www.reddit.com/"+a+"/"+e.state.sortMethod+"/.json",0===a.length&&(n="https://www.reddit.com/.json"),t.next=6,fetch(n);case 6:return r=t.sent,t.next=9,r.json();case 9:(o=t.sent).error?e.setState({posts:null}):o&&o.data&&o.data.children&&(0===(s=o.data.children.map(function(t){var a=t.data,n=a.media;return n=n&&n.oembed?e.parseBodyText(n.oembed.html):"",{created:a.created_utc,author:a.author,domain:a.domain,title:e.parseBodyText(a.title),id:a.id,body:e.parseBodyText(a.selftext_html),num_comments:a.num_comments,score:a.score,subreddit:a.subreddit,stickied:a.stickied,url:a.url,thumbnail:a.thumbnail,permalink:a.permalink,media:n}})).length&&(s=null),e.setState({posts:s})),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(1),console.log(t.t0),e.setState({posts:null});case 17:case"end":return t.stop()}},t,this,[[1,13]])}));return function(e){return t.apply(this,arguments)}}(),e.getPostDetails=function(){var t=Object(l.a)(i.a.mark(function t(a){var n,r,o,s,c,l,m,d,u,p,h;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://www.reddit.com/r/"+a+".json?sort="+e.state.commentSortMethod);case 3:return n=t.sent,t.next=6,n.json();case 6:(r=t.sent).error?e.setState({postDetails:{title:"Not Found",body:"",id:""}}):(o=r[0].data.children[0].data,s=o.title,c=o.selftext_html,l=o.id,m=o.url,d=o.media,u=o.author,p=o.created_utc,h=r[1].data.children.map(function(t){return e.parseComment(t.data)}),d=d&&d.oembed?e.parseBodyText(d.oembed.html):"",c=e.parseBodyText(c),e.setState({postDetails:{title:s,body:c,id:l,url:m,media:d,comments:h,author:u,created:p}})),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}},t,this,[[0,10]])}));return function(e){return t.apply(this,arguments)}}(),e.state={sub:"",postId:"",sortMethod:"hot",commentSortMethod:"new",posts:[],postDetails:{title:"",body:"",id:"",comments:[]}},e}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=B.startPoint;return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement(D,{heading:this.state.sub,onReload:this.onReload}),r.a.createElement(j,{onClick:this.onChangeSortMethod,currentSort:this.state.sortMethod,sortList:1}),r.a.createElement("hr",null),r.a.createElement(g.a,null,r.a.createElement(v.a,{exact:!0,path:t+"/",render:function(t){return r.a.createElement(x,Object.assign({},t,{posts:e.state.posts}))}}),r.a.createElement(v.a,{exact:!0,path:t+"/:sub",render:function(t){return r.a.createElement(x,Object.assign({},t,{posts:e.state.posts}))}}),r.a.createElement(v.a,{exact:!0,path:t+"/:sub/:post",render:function(t){return r.a.createElement(_,Object.assign({},t,{postDetails:e.state.postDetails,commentSortMethod:e.onChangeCommentSortMethod,currentSort:e.state.commentSortMethod}))}})))}},{key:"parseBodyText",value:function(e){return e=e?e.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;#39;/g,"'").replace(/&amp;quot;/g,'"').replace(/&amp;/g,"&").replace(/&#x200B;/g," "):""}},{key:"parseComment",value:function(e){var t=this,a=e.body_html,n=e.id,r=e.author,o=e.permalink,s=e.replies,c=e.score;return{body_html:a=this.parseBodyText(a),id:n,author:r,permalink:o,replies:s=(s="object"===typeof s?s.data.children:[]).map(function(e){return t.parseComment(e.data)}),score:c}}},{key:"checkUrlAndUpdate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=B.startPoint,a=this.props.location.pathname.replace(t,"").replace("/",""),n=a.split("/");if(1===n.length){var r=n[0];(r.toLowerCase()!==this.state.sub.toLowerCase()||e)&&(this.setState({sub:r,posts:[]}),this.getPostList(a))}else if(2===n.length){var o=n[0],s=n[1];if((o.toLowerCase()!==this.state.sub.toLowerCase()||e)&&(this.setState({sub:o,posts:[]}),this.getPostList(o)),s.toLowerCase()!==this.state.postId.toLowerCase()||e){var c=(this.state.posts||[]).find(function(e){return e.id===s});c?this.setState({sub:o,postId:s,postDetails:c}):this.setState({sub:o,postId:s,postDetails:{title:"",body:"",id:""}}),this.getPostDetails("".concat(o,"/").concat(s))}}}},{key:"componentDidUpdate",value:function(e,t){var a=!1;t.sortMethod!==this.state.sortMethod&&(a=!0),t.commentSortMethod!==this.state.commentSortMethod&&(a=!0),this.checkUrlAndUpdate(a)}},{key:"componentDidMount",value:function(){this.checkUrlAndUpdate(!0)}}]),t}(n.Component),P=function(){return r.a.createElement(f.a,null,r.a.createElement(v.a,{path:"/",component:O}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.1954ea8e.chunk.js.map