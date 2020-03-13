(this["webpackJsonpnew-reddit"]=this["webpackJsonpnew-reddit"]||[]).push([[0],{39:function(e,n,t){e.exports=t(52)},44:function(e,n,t){},52:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),c=t(20),o=t.n(c),l=(t(44),t(8)),i=t(15),u=t(7),s=t(21),d=t(2),m=t(3),p=t(4),b=t(16),f=t(10);function h(){var e=Object(m.a)(["\n    display: flex;\n\n    & > a {\n        flex-grow: 1;\n    }\n\n    & > a.selected, & > button.selected {\n        background-color: gray;\n    }\n\n    & > label {\n        border-left: 1px solid gray;\n    }\n\n    & > *:last-child {\n        border-left: 1px solid gray;\n    }\n\n    & > *:first-child {\n        border-left: none;\n    }\n"]);return h=function(){return e},e}var g=p.a.div(h());function E(){var e=Object(m.a)(["\n    text-align: center;\n    position: relative;\n\n    & *:focus {\n        outline: none;\n    }\n\n    & * {\n        color: white;\n    }\n\n    & a, & label {\n        width: 100%;\n        display: block;\n        padding: 5px;\n        min-height: 29px;\n        border-top: 1px solid gray;\n    }\n\n    & a:hover {\n        background-color: gray;\n    }\n\n    & a.active, & > a.selected {\n        background-color: gray;\n    }\n\n    & > a:last-of-type, & > button:last-of-type {\n        border-bottom: 1px solid gray;\n    }\n\n    & > div:last-child > * {\n        border-bottom: 1px solid gray;\n    }\n\n    @media screen and (max-device-width: 600px){\n        & div:last-child > * {\n            border-bottom: none;\n        }   \n    }\n"]);return E=function(){return e},e}var S=p.a.div(E());function v(){var e=Object(m.a)(['\n    cursor: text;\n    padding: 5px 10px;\n    flex-grow: 1;\n    width: 100%;\n    margin: 0px;\n    background-color: black;\n    border: none;\n    font-size: 1em;\n    text-align: center;\n    border-top: 1px solid gray;\n    border-radius: 0px;\n\n    &[type="checkbox"] {\n        -webkit-appearance:none;\n        appearance: none;\n        width:30px;\n        height:30px;\n        background:white;\n        border-radius:0px;\n        border:1px solid gray;\n        border-right: none;\n        border-left: none;\n\n        :checked {\n            background-color: green;\n        }\n\n        :hover {\n            cursor: pointer;\n        }\n    }\n']);return v=function(){return e},e}var O=p.a.input(v());function x(){var e=Object(m.a)(["\n    background-color: black;\n    border: none;\n    text-align: center;\n    padding: 5px;\n    font-size: 1em;\n    width: 100%;\n    margin: 0px;\n    border-top: 1px solid gray;\n\n    ",";\n\n    &:hover {\n        cursor: pointer;\n        background-color: gray;\n    }\n"]);return x=function(){return e},e}var y=p.a.button(x(),(function(e){return e.selected?"background-color: gray;":""}));function j(){var e=Object(m.a)(["\n    border-left: 1px solid gray;\n    min-width: 60px;\n    width: auto;\n"]);return j=function(){return e},e}var k=Object(p.a)(y)(j());function _(){var e=Object(m.a)(["\n    padding: 5px;\n    font-size: 1.3em;\n    position: absolute;\n    right: 10px;\n    top: -5px;\n\n    :hover {\n        cursor: pointer;\n    }\n"]);return _=function(){return e},e}var w=p.a.div(_()),T=function(e,n){return 0===n.length||("Popular"===n||("All"===n||("My Subreddits"===n||!!e.includes(n))))},C=function(){var e=Object(d.c)(),n=Object(d.d)((function(e){return e.currentSub})),t=Object(d.d)((function(e){return e.currentSort})),c=Object(d.d)((function(e){return e.subs})),o=function(n){return e({type:"SET_SUBS",payload:n})},i=Object(r.useState)(!1),s=Object(u.a)(i,2),m=s[0],p=s[1],h=Object(r.useState)(""),E=Object(u.a)(h,2),v=E[0],x=E[1];Object(r.useEffect)((function(){var e=localStorage.getItem("subs");0===(e=e?JSON.parse(e):[]).length&&p(!0),o(e)}),[]);var j=function(e){return function(){var n=c.filter((function(n){return n!==e}));o(n),localStorage.setItem("subs",JSON.stringify(n))}},_=function(e,n){var t=[].concat(Object(b.a)(e),[n]);o(t),x(""),localStorage.setItem("subs",JSON.stringify(t))};return a.a.createElement(S,null,a.a.createElement("h3",null,"General"),a.a.createElement(l.b,{to:"/My Subreddits/".concat(t),className:"My Subreddits"===n?"selected":""},"My Subreddits"),a.a.createElement(l.b,{to:"/Popular/".concat(t),className:"Popular"===n?"selected":""},"Popular"),a.a.createElement(l.b,{to:"/All/".concat(t),className:"All"===n?"selected":""},"All"),a.a.createElement("h3",null,"Subs"),a.a.createElement(w,{onClick:function(){p(!m)}},a.a.createElement(f.c,null)),c.map((function(e){return a.a.createElement(g,{key:"sub-"+e},a.a.createElement(l.b,{to:"/".concat(e,"/").concat(t),className:e===n?"selected":"",style:{textTransform:"capitalize"}},e),m?a.a.createElement(k,{className:"subBtn",onClick:j(e)},a.a.createElement(f.f,null)):null)})),m?a.a.createElement(g,null,a.a.createElement(O,{type:"text",placeholder:"New Sub",onChange:function(e){x(e.target.value)},value:v}),a.a.createElement(k,{onClick:function(){0!==v.length&&_(c,v)}},"Add")):null,T(c,n)?null:a.a.createElement(y,{onClick:function(){_(c,n)}},"Add Current Sub"))},M=function(){var e=Object(d.d)((function(e){return e.currentSub})),n=Object(d.d)((function(e){return e.currentSort}));return a.a.createElement(S,null,a.a.createElement("h3",null,"Sort Posts"),["hot","new","rising","controversial","top"].map((function(t){return a.a.createElement(g,{key:"sort-"+t},a.a.createElement(l.b,{to:"/".concat(e,"/").concat(t),className:t===n?"selected":"",style:{textTransform:"capitalize"}},t))})))},N=function(){var e=Object(d.c)(),n=Object(d.d)((function(e){return e.commentSort})),t=function(n){return function(){e({type:"CLOSE_MENUS"}),function(n){e({type:"SET_COMMENT_SORT",payload:n})}(n)}};return a.a.createElement(S,null,a.a.createElement("h3",null,"Sort Comments"),[{display:"Best",value:"confidence"},{display:"New",value:"new"},{display:"Top",value:"top"},{display:"Controversial",value:"controversial"},{display:"Q&A",value:"qa"}].map((function(e){return a.a.createElement(g,{key:"commentSort-"+e.value},a.a.createElement(y,{className:e.value===n?"selected":"",onClick:t(e.value)},e.display))})))},P=t(27);function R(){var e=Object(m.a)(["\n    display: inline-block;\n    font-size: 1.5em;\n    border-top: 1px solid gray;\n\n    & > svg {\n        position: relative;\n        top: 2px;\n    }\n\n    :hover {\n        cursor: pointer;\n    }\n"]);return R=function(){return e},e}var L=p.a.div(R()),A=function(e){var n=e.checked,t=e.onClick;return a.a.createElement(L,{onClick:t},n?a.a.createElement(P.a,null):a.a.createElement(P.b,null))},I=function(){var e=Object(d.c)(),n=Object(i.e)(),t=function(){return e({type:"CLOSE_MENUS"})},c=Object(d.d)((function(e){return e.currentSub})),o=Object(d.d)((function(e){return e.currentSort})),l=Object(d.d)((function(e){return e.currentSearch})),s=Object(r.useState)(l),m=Object(u.a)(s,2),p=m[0],b=m[1],f=Object(d.d)((function(e){return e.currentSearchSort})),h=Object(r.useState)(f),E=Object(u.a)(h,2),v=E[0],x=E[1],j=Object(d.d)((function(e){return e.currentSearchSub})),_=Object(r.useState)(j),w=Object(u.a)(_,2),T=w[0],C=w[1],M=function(){t(),n.push("/".concat(c,"/").concat(o,"?search=").concat(p,"&searchSort=").concat(v,"&searchSub=").concat(T,"&searchForSubs=",!1))};return a.a.createElement(S,null,a.a.createElement("h3",null,"Search"),a.a.createElement(g,null,a.a.createElement(O,{type:"text",placeholder:"Search",onChange:function(e){return b(e.target.value)},value:p,onKeyPress:function(e){"Enter"===e.key&&M()}}),a.a.createElement(k,{onClick:M},"Search")),a.a.createElement(g,null,a.a.createElement(A,{checked:T,onClick:function(){return C(!T)}}),a.a.createElement("label",{style:{width:"100%"}},"This Sub Only")),a.a.createElement(g,null,a.a.createElement(y,{selected:"new"===v,onClick:function(){return x("new")}},"New"),a.a.createElement(y,{selected:"relevance"===v,onClick:function(){return x("relevance")}},"Relevant")),a.a.createElement(g,null,a.a.createElement(y,{onClick:function(){t(),n.push("/".concat(c,"/").concat(o,"?search=").concat(p,"&searchSort=").concat(v,"&searchSub=").concat(T,"&searchForSubs=",!0))}},"Search Subs"),a.a.createElement(y,{onClick:function(){!(arguments.length>0&&void 0!==arguments[0])||arguments[0];0!==p.length&&(b(""),C(!0),x("relevance"),n.push("/".concat(c,"/").concat(o)))}},"Clear Search")))};function B(){var e=Object(m.a)(["\n    position: fixed;\n    width: 250px;\n    background-color: black;\n    z-index: 5;\n    top: 35px;\n    border-right: 1px solid red;\n    border-bottom: 1px solid red;\n    max-height: calc(100% - 50px);\n    overflow: scroll;\n    ",";\n"]);return B=function(){return e},e}function U(){var e=Object(m.a)(["\n    display: inline-block;\n    padding: 8px;\n    border-right: 1px solid gray;\n    min-width: 50px;\n    text-align: center;\n    background-color: ",";\n"]);return U=function(){return e},e}function z(){var e=Object(m.a)(["\n    border-bottom: 1px solid red;\n    position: fixed;\n    width: 100%;\n    background-color: black;\n    z-index: 6;\n\n    & > div:last-child,  & > div:nth-last-child(2){\n        float: right;\n        border-right: none;\n        border-left: 1px solid gray;\n    }\n"]);return z=function(){return e},e}var H=p.a.div(z()),F=p.a.div(U(),(function(e){return e.selected?"gray":"none"})),D=p.a.div(B(),(function(e){return e.right?"right: 0px; border-left: 1px solid red; border-right: none;":""})),J=function(e){var n=e.onBackClick,t=Object(d.c)(),r=Object(d.d)((function(e){return e.searchMenuOpen})),c=Object(d.d)((function(e){return e.subMenuOpen})),o=Object(d.d)((function(e){return e.sortMenuOpen})),l=Object(d.d)((function(e){return e.currentPostId}));return a.a.createElement(a.a.Fragment,null,a.a.createElement(H,null,a.a.createElement(F,{onClick:function(){return t(c?{type:"CLOSE_SUBS"}:{type:"OPEN_SUBS"})},selected:c},"Subs"),l.length>0?a.a.createElement(F,{onClick:n},"Back"):null,a.a.createElement(F,{onClick:function(){return t(o?{type:"CLOSE_SORT"}:{type:"OPEN_SORT"})},selected:o},"Sort"),a.a.createElement(F,{onClick:function(){return t(r?{type:"CLOSE_SEARCH"}:{type:"OPEN_SEARCH"})},selected:r},"Search")),c?a.a.createElement(D,null,a.a.createElement(C,null)):null,o&&0===l.length?a.a.createElement(D,{right:!0},a.a.createElement(M,null)):null,o&&l.length>0?a.a.createElement(D,{right:!0},a.a.createElement(N,null)):null,r?a.a.createElement(D,{right:!0},a.a.createElement(I,null)):null)},W=t(37),G=t(19),q=t.n(G),Z=t(28),$=t(22),Q=t(6),K={currentSub:"",currentSort:"hot",currentPostId:"",postDetails:{},posts:[],noPosts:!1,noMorePosts:!1,latestPost:"",comments:[],noComments:!1,commentSort:"new",subs:[],sortMenuOpen:!1,searchMenuOpen:!1,subMenuOpen:!1,currentSearch:"",currentSearchSort:"relevance",currentSearchSub:!0,searchForSubs:!1},V=Object($.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.payload;switch(n.type){case"SET_SUB":return Object(Q.a)({},e,{currentSub:t});case"SET_SORT":return Object(Q.a)({},e,{currentSort:t});case"SET_POSTID":return Object(Q.a)({},e,{currentPostId:t});case"SET_POSTS":return Object(Q.a)({},e,{posts:t});case"SET_POST_DETAILS":return Object(Q.a)({},e,{postDetails:t});case"CLEAR_SEARCH":return Object(Q.a)({},e,{currentSearch:"",currentSearchSort:"relevance",currentSearchSub:!0,searchMenuOpen:!1});case"OPEN_SEARCH":return Object(Q.a)({},e,{searchMenuOpen:!0,sortMenuOpen:!1,subMenuOpen:!1});case"CLOSE_SEARCH":return Object(Q.a)({},e,{searchMenuOpen:!1});case"OPEN_SUBS":return Object(Q.a)({},e,{subMenuOpen:!0,sortMenuOpen:!1,searchMenuOpen:!1});case"CLOSE_SUBS":return Object(Q.a)({},e,{subMenuOpen:!1});case"OPEN_SORT":return Object(Q.a)({},e,{sortMenuOpen:!0,subMenuOpen:!1,searchMenuOpen:!1});case"CLOSE_SORT":return Object(Q.a)({},e,{sortMenuOpen:!1});case"CLOSE_MENUS":return Object(Q.a)({},e,{sortMenuOpen:!1,searchMenuOpen:!1,subMenuOpen:!1});case"SET_SUBS":return Object(Q.a)({},e,{subs:t});case"SET_CURRENT_SEARCH":return Object(Q.a)({},e,{currentSearch:t});case"SET_CURRENT_SEARCH_SORT":return Object(Q.a)({},e,{currentSearchSort:t});case"SET_CURRENT_SEARCH_SUB":return Object(Q.a)({},e,{currentSearchSub:t});case"SET_SEARCH_FOR_SUBS":return Object(Q.a)({},e,{searchForSubs:t});case"SET_NO_POSTS":return Object(Q.a)({},e,{noPosts:t});case"SET_LATEST_POST":return Object(Q.a)({},e,{latestPost:t});case"SET_NO_MORE_POSTS":return Object(Q.a)({},e,{noMorePosts:t});case"SET_COMMENTS":return Object(Q.a)({},e,{comments:t});case"SET_NO_COMMENTS":return Object(Q.a)({},e,{noComments:t});case"SET_COMMENT_SORT":return Object(Q.a)({},e,{commentSort:t});default:return e}})),Y=function e(n){var t=n.body_html,r=n.id,a=n.author,c=n.permalink,o=n.replies,l=n.score;return{body_html:t=X(t),id:r,author:a,permalink:c,replies:o=(o="object"===typeof o?o.data.children:[]).map((function(n){return e(n.data)})),score:l}},X=function(e){return e=e?e.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;#39;/g,"'").replace(/&amp;quot;/g,'"').replace(/&amp;/g,"&").replace(/&#x200B;/g," "):""},ee=function(e){return"true"===e},ne=function(e){var n="",t=localStorage.getItem("subs");return n=e+(t=t?JSON.parse(t):[]).join("+"),0===t.length&&(n=e+"All"),n},te=function(){var e=Object(Z.a)(q.a.mark((function e(){var n,t,r,a,c,o,l,i,u,s,m,p,f,h,g,E,S,v,O,x,y=arguments;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=y.length>0&&void 0!==y[0]&&y[0],t=V.getState(),r=t.posts,a=t.currentSub,c=t.currentSort,o=t.currentSearch,l=t.currentSearchSort,i=t.currentSearchSub,u=t.latestPost,s=t.searchForSubs,m=function(e){return V.dispatch({type:"SET_LATEST_POST",payload:e})},p=function(e){return V.dispatch({type:"SET_POSTS",payload:e})},f=function(e){return V.dispatch({type:"SET_NO_POSTS",payload:e})},h=function(e){return V.dispatch({type:"SET_NO_MORE_POSTS",payload:e})},0!==a.length){e.next=9;break}return e.abrupt("return");case 9:return a.length>0&&(a="r/"+a),n||(p([]),f(!1),h(!1)),"r/My Subreddits"===a&&(a=ne("r/")),e.prev=12,g="https://www.reddit.com/".concat(a,"/").concat(c,"/.json"),n&&(g+="?after=t3_".concat(u)),o.length>0&&(E=o.split(" ").join("+"),g=s?"https://www.reddit.com/".concat(a,"/search.json?q=").concat(E,"&include_over_18=on&sort=relevance&type=sr"):"https://www.reddit.com/".concat(a,"/search.json?q=").concat(E).concat(i?"&restrict_sr=on":"","&include_over_18=on&sort=").concat(l),n&&(g+=s?"&after=t5_".concat(u):"&after=t3_".concat(u))),0===a.length&&(g="https://www.reddit.com/.json"),e.next=19,fetch(g);case 19:return S=e.sent,e.next=22,S.json();case 22:(v=e.sent).error?(console.log("Getting Post List - Error: ",v.error),n||Object(d.b)((function(){f(!0),p([])}))):v&&v.data&&v.data.children&&(O=v.data.children.map((function(e){var n=e.data,t=n.media;return t=t&&t.oembed?X(t.oembed.html):"","t5"===e.kind?{id:n.id,type:"sub",title:X(n.title),subName:n.display_name,description:X(n.description_html),created:n.created_utc,subscribers:n.subscribers}:{type:"post",created:n.created_utc,author:n.author,domain:n.domain,title:X(n.title),id:n.id,body:X(n.selftext_html),num_comments:n.num_comments,score:n.score,subreddit:n.subreddit,stickied:n.stickied,url:n.url,thumbnail:n.thumbnail,permalink:n.permalink,media:t}})),x=0===O.length,n&&(O=[].concat(Object(b.a)(r),Object(b.a)(O))),Object(d.b)((function(){x||m(O[O.length-1].id),p(O),x&&h(!0),x&&!n&&f(!0)}))),e.next=30;break;case 26:e.prev=26,e.t0=e.catch(12),console.log("Getting Post List - URL Error: ",e.t0),n||Object(d.b)((function(){f(!0),p([])}));case 30:case"end":return e.stop()}}),e,null,[[12,26]])})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(Z.a)(q.a.mark((function e(){var n,t,r,a,c,o,l,i,u,s,m,p,b,f,h,g,E,S,v,O;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=V.getState(),t=n.currentSub,r=n.currentPostId,a=n.commentSort,c=function(e){return V.dispatch({type:"SET_COMMENTS",payload:e})},o=function(e){return V.dispatch({type:"SET_NO_COMMENTS",payload:e})},l=function(e){return V.dispatch({type:"SET_POST_DETAILS",payload:e})},0!==r.length){e.next=7;break}return e.abrupt("return");case 7:return c([]),o(!1),"My Subreddits"===t&&(t=ne()),i="".concat(t,"/comments/").concat(r,"/"),e.prev=11,e.next=14,fetch("https://www.reddit.com/r/".concat(i,".json?sort=").concat(a));case 14:return u=e.sent,e.next=17,u.json();case 17:(s=e.sent).error?console.log("Getting Comments - Error: ",s.error):(m=s[0].data.children[0].data,p=m.title,b=m.selftext_html,f=m.id,h=m.url,g=m.media,E=m.author,S=m.created_utc,v=m.permalink,O=s[1].data.children.map((function(e){return Y(e.data)})),Object(d.b)((function(){l({id:f,url:h,title:p,author:E,created:S,body:X(b),media:g,permalink:v}),c(O),0===O.length&&o(!0)}))),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(11),console.log("Getting Comments - URL Error: ",e.t0);case 24:case"end":return e.stop()}}),e,null,[[11,21]])})));return function(){return e.apply(this,arguments)}}(),ae=t(53);function ce(){var e=Object(m.a)(["\n    margin-top: 10px;\n    padding-right: 5px;\n\n    & :hover {\n        cursor: pointer;\n    }\n\n    @media screen and (max-device-width: 600px){\n        font-size: 0.9em;\n    }\n"]);return ce=function(){return e},e}var oe=p.a.div(ce());function le(){var e=Object(m.a)(["\n    display: flex;\n    flex-direction: column; \n    height: 100%;\n    align-content: center;\n\n    & > div {\n        margin-top: auto;\n        margin-bottom: auto;\n    }\n"]);return le=function(){return e},e}var ie=p.a.div(le());function ue(){var e=Object(m.a)(["\n    font-size: 0.9em;\n    color: gray;\n    margin-top: 5px;\n    margin-bottom: 5px;\n\n    & a {\n        color: gray;\n    }\n"]);return ue=function(){return e},e}var se=p.a.div(ue());function de(){var e=Object(m.a)(["\n    display: inline-flex;\n    position: relative;\n    float: right;\n    border-bottom: 1px solid ",";\n    border-left: 1px solid ",";\n    color: gray;\n    width: 32px;\n    height: 32px;\n\n    & > svg {\n        margin: auto;\n    }\n\n    &:hover {\n        cursor: pointer;\n        color: white;\n    }\n"]);return de=function(){return e},e}var me=p.a.div(de(),(function(e){return e.stickied?"#50ec11":"red"}),(function(e){return e.stickied?"#50ec11":"red"}));function pe(){var e=Object(m.a)(["\n    padding: 5px;\n    overflow: hidden;\n\n    & img {\n        max-width: 95%;\n        max-height: 900px;\n    }\n\n    & iframe {\n        max-width: 100%;\n        margin: auto;\n        display: block;\n    }\n"]);return pe=function(){return e},e}function be(){var e=Object(m.a)(["\n    font-size: 0.9em;\n    display: inline-block;\n    margin-bottom: 10px;\n    cursor: pointer;\n\n    & > span > svg {\n        position: relative;\n        top: 2px;\n        margin-left: 2px;\n    }\n"]);return be=function(){return e},e}function fe(){var e=Object(m.a)(["\n    min-width: 70px;\n    max-width: 70px;\n    max-height: 70px;\n    overflow: hidden;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-right: 10px;\n    margin-bottom: 10px;\n    margin-top: 10px;\n\n    & > img {\n        height: 70px;\n        width: auto;\n        margin: auto;\n    }\n"]);return fe=function(){return e},e}function he(){var e=Object(m.a)(["\n    border: 1px solid ",";\n    padding: 0px 0px 0px 10px;\n    margin: 5px auto;\n    width: 95%;\n    max-width: 1200px;\n    display: flex;\n    position: relative;\n"]);return he=function(){return e},e}var ge=p.a.div(he(),(function(e){return e.stickied?"#50ec11":"red"})),Ee=p.a.div(fe()),Se=p.a.div(be()),ve=p.a.div(pe()),Oe=a.a.memo((function(e){var n=e.post,t=e.onClickLink,c=e.currentSub,o=e.currentSort,i=Object(r.useState)(!1),s=Object(u.a)(i,2),d=s[0],m=s[1];if(void 0===n)return a.a.createElement("span",null);var p=Object(ae.a)(new Date,1e3*n.created),b=!1;!0===/(.jpg|.png|.bmp|.jpeg)/.test(n.thumbnail)&&(b=!0),n.body=n.body.replace(/<a/g,'<a target="_blank" rel="noopener noreferrer"');var h=a.a.createElement(ve,{dangerouslySetInnerHTML:{__html:n.body}}),g=!1;n.url.match(/.(jpg|png)$/)&&(h=a.a.createElement(ve,null,a.a.createElement("img",{src:n.url,alt:"Preview user linked to"})),g=!0),n.media.length>0&&(n.body.length>0&&(n.media+="<br/>"+n.body),h=a.a.createElement(ve,{dangerouslySetInnerHTML:{__html:n.media}}),g=!0);var E=!0;0===n.body.length&&!1===g&&(E=!1);var S=!!n.stickied;return a.a.createElement(ge,{stickied:S},b?a.a.createElement(Ee,null,a.a.createElement("img",{src:n.thumbnail,alt:"Thumbnail"})):null,a.a.createElement("div",{style:b?{width:"100%",maxWidth:"calc(100% - 80px)"}:{width:"100%",maxWidth:"100%"}},E?a.a.createElement(me,{onClick:function(){m(!d)},stickied:S},d?a.a.createElement(f.b,null):a.a.createElement(f.a,null)):null,a.a.createElement(ie,null,a.a.createElement("div",null,a.a.createElement(oe,null,a.a.createElement("span",{onClick:t("/".concat(c,"/comments/").concat(n.id))},n.title)),a.a.createElement(se,null,a.a.createElement(l.b,{to:"/".concat(n.subreddit,"/").concat(o)},n.subreddit)," - ",a.a.createElement("span",null,a.a.createElement("a",{href:n.url,target:"_blank",rel:"noreferrer noopener"},n.domain))," - ",a.a.createElement("span",null,p)),d?h:null,a.a.createElement("div",null,a.a.createElement(Se,null,a.a.createElement("span",{onClick:t("/".concat(c,"/comments/").concat(n.id))},n.num_comments," ",a.a.createElement(f.e,null))),a.a.createElement("span",{style:{marginLeft:"15px"}},a.a.createElement("a",{href:"https://www.reddit.com/".concat(n.permalink),target:"_blank",rel:"noreferrer noopener"},"Open on Reddit")))))))}),(function(e,n){return e.post.id===n.post.id}));function xe(){var e=Object(m.a)(["\n    width: 45px;\n    height: 45px;\n    margin: 5px 5px 5px -5px;\n    border: 1px solid ",";\n    display: flex;\n    align-items: center;\n\n    & > svg {\n        font-size: 1.5em;\n        margin: auto;\n    }\n\n    :hover {\n        cursor: pointer;\n        background-color: gray;\n    }\n"]);return xe=function(){return e},e}function ye(){var e=Object(m.a)(["\n    border: 1px solid ",";\n    padding: 0px 0px 0px 10px;\n    margin: 5px auto;\n    width: 95%;\n    max-width: 1200px;\n    display: flex;\n    position: relative;\n"]);return ye=function(){return e},e}var je=p.a.div(ye(),(function(e){return e.stickied?"#50ec11":"red"})),ke=p.a.div(xe(),(function(e){return e.stickied?"#50ec11":"red"})),_e=a.a.memo((function(e){var n=e.sub,t=e.currentSort,c=Object(d.c)(),o=Object(r.useState)(!1),i=Object(u.a)(o,2),s=i[0],m=i[1],p=Object(d.d)((function(e){return e.subs}));if(void 0===n)return a.a.createElement("span",null);var h=Object(ae.a)(new Date,1e3*n.created),g=n.description.replace(/<a/g,'<a target="_blank" rel="noopener noreferrer"'),E=!0;0===(g=g.replace(/target="_blank" rel="noopener noreferrer" href="\/r/g,'href="#')).length&&(E=!1);var S=p.reduce((function(e,t){return t.toLowerCase()===n.subName.toLowerCase()&&e++,e}),0);return a.a.createElement(je,{stickied:S},S?null:a.a.createElement(ke,{onClick:function(){var e=[].concat(Object(b.a)(p),[n.subName]);c({type:"SET_SUBS",payload:e}),localStorage.setItem("subs",JSON.stringify(e))},stickied:S},a.a.createElement(f.d,null)),a.a.createElement("div",{style:{width:"100%",maxWidth:"100%"}},E?a.a.createElement(me,{onClick:function(){m(!s)},stickied:S},s?a.a.createElement(f.b,null):a.a.createElement(f.a,null)):null,a.a.createElement(ie,null,a.a.createElement("div",null,a.a.createElement(oe,null,a.a.createElement(l.b,{to:"/".concat(n.subName,"/").concat(t)},n.title)),a.a.createElement(se,null,a.a.createElement("span",null,n.subName)," - ",a.a.createElement("span",null,n.subscribers>0?n.subscribers:0," ",1!==n.subscribers?"members":"member")," - ",a.a.createElement("span",null,h)),s?a.a.createElement("span",{dangerouslySetInnerHTML:{__html:g}}):null))))}),(function(e,n){return e.sub.id===n.sub.id}));function we(){var e=Object(m.a)(["\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    border: 3px solid red;\n    border-top: 0px;\n    border-bottom: 0px;\n    margin: auto;\n    margin-top:40px;\n    position: relative;\n    animation-name: rotate;\n    animation-duration: 1s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n\n    &:after {\n        content:'';\n        display: block;\n        position: absolute;\n        top: 2px;\n        left: 2px;\n        width: 40px;\n        height: 40px;\n        border-radius: 50%;\n        border: 3px solid red;\n        border-left: 0px;\n        border-right: 0px;\n        margin: auto;\n        animation-name: rotate;\n        animation-duration: 0.5s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        animation-direction: reverse;\n    }\n\n    &:before {\n        content:'';\n        display: block;\n        position: absolute;\n        top: 10px;\n        left: 4px;\n        width: 30px;\n        height: 30px;\n        border-radius: 50%;\n        border: 3px solid red;\n        border-top: 0px;\n        border-bottom: 0px;\n        margin: auto;\n        animation-name: rotate;\n        animation-duration: 1s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n    }\n\n    @keyframes rotate {\n        from {\n            transform: rotate(0deg);\n        }\n        \n        to {\n            transform: rotate(360deg);\n        }\n    }\n"]);return we=function(){return e},e}var Te=p.a.div(we()),Ce=function(e){var n=e.onClickLink,t=Object(d.d)((function(e){return e.posts})),r=Object(d.d)((function(e){return e.noPosts})),c=Object(d.d)((function(e){return e.currentSub})),o=Object(d.d)((function(e){return e.currentSort})),l=Object(d.d)((function(e){return e.currentPostId})),i=Object(d.d)((function(e){return e.noMorePosts}));if(r)return a.a.createElement("div",{style:{textAlign:"center"}},"No Posts Found");if(0===t.length&&0===l.length)return a.a.createElement("div",null,a.a.createElement(Te,null));var u=l.length>0,s=u?"absolute":"relative",m=u?"-1000000px":"0px",p=u?"-20000px":"0px",b=!u&&!i;return a.a.createElement("div",{style:{margin:"auto",position:s,top:m,right:p,marginBottom:"20px"}},a.a.createElement(W.a,{dataLength:t.length,next:function(){return te(!0)},hasMore:b,loader:a.a.createElement("div",{style:{textAlign:"center",margin:"10px"}},"Loading More..."),scrollableTarget:"#mainPage",scrollThreshold:"500px"},t.map((function(e){return"sub"===e.type?a.a.createElement(_e,{key:e.id,sub:e,currentSort:o}):a.a.createElement(Oe,{key:e.id,post:e,currentSub:c,currentSort:o,onClickLink:n})})),i?a.a.createElement("div",{style:{textAlign:"center",margin:"10px"}},"No More Posts"):null))};function Me(){var e=Object(m.a)(["\n    font-size: 0.8em;\n    margin-bottom: 5px;\n    \n    & > a {\n        color: gray;\n    }\n"]);return Me=function(){return e},e}function Ne(){var e=Object(m.a)(["\n    ",";\n"]);return Ne=function(){return e},e}function Pe(){var e=Object(m.a)(["\n    :hover {\n        cursor: pointer;\n    }\n"]);return Pe=function(){return e},e}function Re(){var e=Object(m.a)(["\n    padding: 5px;\n    padding-bottom: 0px;\n    border-left: 1px solid red;\n    border-top: 1px solid red;\n    margin-bottom: 0px;\n\n    & a {\n        color: rgb(0, 225, 255);\n    }\n"]);return Re=function(){return e},e}var Le=p.a.div(Re()),Ae=p.a.span(Pe()),Ie=p.a.span(Ne(),(function(e){return e.original?"\n        color: #059afe; \n        font-weight: bold;\n    ":""})),Be=p.a.div(Me()),Ue=function(e){var n=e.replace(/<a/g,'<a target="_blank" rel="noopener noreferrer"'),t=(n=(n=n.replace(/href="\/u/g,'href="https://www.reddit.com/$1')).replace(/target="_blank" rel="noopener noreferrer" href="\/r/g,'href="#')).match(/href="https:\/\/www.reddit.com\/r\/[a-zA-Z0-9]+\/comments\/[a-zA-Z0-9]+/g);return null!==t&&t.forEach((function(e){var t=e.match(/r\/([a-zA-Z0-9]+)/)[1],r=e.match(/comments\/([a-zA-Z0-9]+)/)[1];n=n.replace('target="_blank" rel="noopener noreferrer" '.concat(e),'href="#/'.concat(t,"/comments/").concat(r))})),n},ze=function(e){var n=e.comment,t=e.author,c=Object(r.useState)(!1),o=Object(u.a)(c,2),l=o[0],i=o[1],s="";n.replies.length>0&&(s=a.a.createElement(De,{comments:n.replies,author:t}));var d=Ue(n.body_html);return a.a.createElement(Le,null,a.a.createElement(Ae,{onClick:function(){i(!l)}},l?"[ + ] ":"[ - ] "),a.a.createElement(Ie,{original:n.author===t},n.author),a.a.createElement("span",{style:{color:"gray"}}," | ",n.score),l?null:a.a.createElement("div",{dangerouslySetInnerHTML:{__html:d}}),l?null:a.a.createElement(Be,null,a.a.createElement("a",{href:"https://www.reddit.com/".concat(n.permalink),target:"_blank",rel:"noreferrer noopener"},"Permalink")),l?null:s)};function He(){var e=Object(m.a)(["\n    margin-top: 10px;\n\n    & > div {\n        margin-bottom: 5px;\n    }\n"]);return He=function(){return e},e}var Fe=p.a.div(He()),De=function(e){var n=e.comments,t=e.author;return 0===n.length?null:a.a.createElement(Fe,{id:"commentList"},n.map((function(e){return a.a.createElement(ze,{key:e.id,comment:e,author:t})})))};function Je(){var e=Object(m.a)(["\n    position: fixed;\n    bottom: 10px;\n    right: 10px;\n    width: 50px;\n    height: 50px;\n    border: 1px solid red;\n    background-color: black;\n    border-radius: 50%;\n    text-align: center;\n\n    & > svg {\n        position: relative;\n        top: 10px;\n        font-size: 2em;\n    }\n\n    :hover {\n        cursor: pointer;\n        background-color: gray;\n    }\n"]);return Je=function(){return e},e}function We(){var e=Object(m.a)(["\n    border-bottom: 1px solid gray;\n    margin-bottom: 5px;\n    padding-bottom: 10px;\n\n    & pre {\n        overflow: scroll;\n    }\n\n    & > img {\n        max-width: 100%;\n        margin-top: 10px;\n    }\n    \n    & iframe {\n        max-width: 100%;\n        margin: auto;\n        display: block;\n    }\n\n    & a {\n     color: rgb(0, 225, 255);\n    }\n\n    & h1 {\n        font-size: 1.2em;\n    }\n\n    & h2 {\n        font-size: 1.1em;\n    }\n\n    & h3 {\n        font-size: 1em;\n    }\n"]);return We=function(){return e},e}function Ge(){var e=Object(m.a)(["\n    color: gray;\n    text-align: left;\n    margin-bottom: 5px;\n\n    & a {\n        color: gray;\n    }\n"]);return Ge=function(){return e},e}function qe(){var e=Object(m.a)(["\n    background-color: black;\n    padding: 20px;\n    width: 100%;\n    max-width: 1200px;\n    margin: auto;\n    margin-bottom: 30px;\n\n    & h1 {\n        text-align: left;\n        margin-bottom: 10px;\n    }\n"]);return qe=function(){return e},e}var Ze=p.a.div(qe()),$e=p.a.div(Ge()),Qe=p.a.div(We()),Ke=p.a.div(Je()),Ve=function(e,n,t){e=(e=(e=e.replace(/<a/g,'<a target="_blank" rel="noopener noreferrer"')).replace(/href="\/u/g,'href="https://www.reddit.com/$1')).replace(/target="_blank" rel="noopener noreferrer" href="\/r/g,'href="#');var r=a.a.createElement(Qe,{dangerouslySetInnerHTML:{__html:e},className:"postDivBody"});return/.(png|jpg|jpeg|bmp)$/.test(n)&&(r=a.a.createElement(Qe,null,a.a.createElement("img",{src:n,alt:"Preview of content"}))),t&&t.oembed?(t=X(t.oembed.html),e.length>0&&(t+="<br/>"+e),r=a.a.createElement(Qe,{dangerouslySetInnerHTML:{__html:t},className:"postDivBody"})):t="",r},Ye=function(){var e=Object(d.d)((function(e){return e.comments})),n=Object(d.d)((function(e){return e.noComments})),t=Object(d.d)((function(e){return e.postDetails})),c=Object(d.d)((function(e){return e.currentPostId})),o=Object(d.d)((function(e){return e.commentSort})),l=Object(s.useMediaQuery)({maxWidth:700});if(Object(r.useEffect)((function(){!function(){var e=V.getState().posts,n=V.getState().currentPostId,t=function(e){return V.dispatch({type:"SET_POST_DETAILS",payload:e})},r=void 0;n.length>0&&(r=e.find((function(e){return e.id===n}))),t(void 0===r?{}:r)}(),window.scrollTo(0,0)}),[]),Object(r.useEffect)((function(){re()}),[o,c]),void 0===t.body||t.id!==c)return a.a.createElement("div",{style:{textAlign:"center"}},a.a.createElement(Te,null));var i=t.url,u=t.title,m=t.author,p=t.created,b=t.body,h=t.media,g=t.permalink,E=Ve(b,i,h),S=Object(ae.a)(new Date,1e3*p),v=i||"";v.length>40&&(v=v.substr(0,40)+"...");return a.a.createElement(Ze,null,a.a.createElement("div",null,a.a.createElement("h2",{dangerouslySetInnerHTML:{__html:u}}),a.a.createElement($e,null,m," | ",S," | ",a.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},"Go to URL (",v,")")),a.a.createElement($e,null,a.a.createElement("a",{href:"https://www.reddit.com/".concat(g),target:"_blank",rel:"noopener noreferrer"},"Open on Reddit")),E),0===e.length&&!1===n?a.a.createElement(Te,null):null,n?a.a.createElement("div",null,"No Comments"):null,a.a.createElement(De,{comments:e,author:m}),a.a.createElement(Ke,{onClick:function(){for(var e=document.querySelector("#commentList"),n=0;n<e.children.length;n++){var t=e.children[n],r=t.getBoundingClientRect();if(!(r.top<1||l&&r.top<41)){t.scrollIntoView(),l&&((document.scrollingElement||document.documentElement).scrollTop-=40);break}}}},a.a.createElement(f.a,null)))};function Xe(){var e=Object(m.a)(["\n    color: gray;\n\n    :hover {\n        cursor: pointer;\n        color: white;\n    }\n"]);return Xe=function(){return e},e}var en=p.a.span(Xe()),nn=function(e){var n=e.heading,t=e.onReload;return a.a.createElement("h1",{style:{textAlign:"center"}},n," \xa0",a.a.createElement(en,{onClick:t},"\u21bb"))};function tn(){var e=Object(m.a)(["\n    width: 250px;\n    border-right: 1px solid red;\n    height: 100%;\n    position: fixed;\n    overflow: scroll;\n"]);return tn=function(){return e},e}var rn=p.a.div(tn()),an=function(){var e=Object(d.d)((function(e){return e.currentPostId}));return a.a.createElement(rn,null,a.a.createElement(I,null),e.length>0?a.a.createElement(N,null):a.a.createElement(M,null),a.a.createElement(C,null))},cn=function(e){var n=e.location,t=e.history,c=Object(d.c)(),o=Object(r.useState)(0),l=Object(u.a)(o,2),i=l[0],m=l[1],p=Object(d.d)((function(e){return e.currentSort})),b=Object(d.d)((function(e){return e.currentSub})),f=Object(d.d)((function(e){return e.currentPostId})),h=Object(d.d)((function(e){return e.currentSearch})),g=Object(d.d)((function(e){return e.currentSearchSort})),E=Object(d.d)((function(e){return e.currentSearchSub})),S=Object(d.d)((function(e){return e.searchForSubs})),v=Object(s.useMediaQuery)({maxWidth:700}),O=function(e){var n=e.split("/"),t="",r="",a="";return n.length>0&&(t=void 0!==n[1]?n[1]:"",a="comments"===n[2]&&void 0!==n[3]?n[3]:"",r="comments"!==n[2]&&void 0!==n[2]?n[2]:"","comments"!==n[2]&&void 0===n[2]&&(r="hot")),{sub:t,newSort:r,postId:a}}(n.pathname),x=O.sub,y=O.newSort,j=O.postId,k=function(e){var n=e.match(/search=([a-zA-Z0-9% ]+)/),t=e.match(/searchSort=(relevance|new)/),r=e.match(/searchSub=(true|false)/),a=e.match(/searchForSubs=(true|false)/);return n=null===n?"":n[1],t=null===t?"relevance":t[1],r=null===r||ee(r[1]),a=null!==a&&ee(a[1]),{search:n=n.replace(/%20/g," "),searchSort:t,searchSub:r,searchForSubs:a}}(n.search),_=k.search,w=k.searchSort,T=k.searchSub,C=k.searchForSubs;Object(d.b)((function(){x!==b&&c({type:"SET_SUB",payload:x}),j!==f&&function(e){c({type:"SET_POSTID",payload:e})}(j),y.length>0&&y!==p&&c({type:"SET_SORT",payload:y}),j.length>0||f.length>0||(_!==h&&function(e){c({type:"SET_CURRENT_SEARCH",payload:e})}(_),w!==g&&function(e){c({type:"SET_CURRENT_SEARCH_SORT",payload:e})}(w),T!==E&&function(e){c({type:"SET_CURRENT_SEARCH_SUB",payload:e})}(T),C!==S&&function(e){c({type:"SET_SEARCH_FOR_SUBS",payload:e})}(C))})),Object(r.useEffect)((function(){v&&c({type:"CLOSE_MENUS"}),0!==b.length&&(f.length>0||te())}),[p,b,h,g,E,S]),Object(r.useEffect)((function(){0===f.length&&window.scrollTo(0,i)}),[f]);var M=Object(r.useCallback)((function(e){return function(n){var r=window.pageYOffset||document.documentElement.scrollTop;m((function(e){return r})),t.push(e)}}),[]);if(x!==b||j!==f||y.length>0&&y!==p)return a.a.createElement("div",null);if(0===b.length){var N="",P=localStorage.getItem("subs");return N=(P=P?JSON.parse(P):[]).length>0?P[0]:"Popular",t.push("/".concat(N,"/").concat(p)),a.a.createElement("div",null)}var R=function(){f.length>0?re():te()},L=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(nn,{heading:S?"Searching: ".concat(h):b,onReload:R}),f.length>0?a.a.createElement(Ye,null):null,a.a.createElement(Ce,{onClickLink:M}))};return v?a.a.createElement("div",{style:{height:"100%",overflow:"hidden"}},a.a.createElement(J,{onBackClick:function(){t.goBack()}}),a.a.createElement("div",{style:{marginTop:"50px"}}),L()):a.a.createElement("div",{style:{display:"flex",height:"100%"}},a.a.createElement("div",null,a.a.createElement(an,null)),a.a.createElement("div",{style:{width:"calc(100% - 250px)",height:"100%",overflow:"scroll",marginLeft:"250px",position:"relative"},id:"mainPage"},L()))},on=function(){return a.a.createElement(l.a,null,a.a.createElement(i.a,{path:"/",component:cn}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(d.a,{store:V},a.a.createElement(on,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.227b9a00.chunk.js.map