/*! For license information please see 6.760b3f46.chunk.js.LICENSE.txt */
(this.webpackJsonpworkproject=this.webpackJsonpworkproject||[]).push([[6],{267:function(e,n,t){"use strict";n.a=t.p+"static/media/51f6fb256629fc755b8870c801092942.22c31152.png"},343:function(e,n,t){e.exports={selectedPage:"Paginator_selectedPage__1niP5",paginator:"Paginator_paginator__3WUIh",pageNumber:"Paginator_pageNumber__1ctyn",btn:"Paginator_btn__18qU9"}},344:function(e,n,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function i(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)){if(r.length){var a=i.apply(null,r);a&&e.push(a)}}else if("object"===c)if(r.toString===Object.prototype.toString)for(var o in r)t.call(r,o)&&r[o]&&e.push(o);else e.push(r.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(n,[]))||(e.exports=r)}()},345:function(e,n,t){e.exports={img:"UsersApiComponent_img__hQbIU"}},346:function(e,n,t){"use strict";n.decode=n.parse=t(347),n.encode=n.stringify=t(348)},347:function(e,n,t){"use strict";function r(e,n){return Object.prototype.hasOwnProperty.call(e,n)}e.exports=function(e,n,t,c){n=n||"&",t=t||"=";var a={};if("string"!==typeof e||0===e.length)return a;var o=/\+/g;e=e.split(n);var s=1e3;c&&"number"===typeof c.maxKeys&&(s=c.maxKeys);var u=e.length;s>0&&u>s&&(u=s);for(var l=0;l<u;++l){var j,b,d,p,f=e[l].replace(o,"%20"),h=f.indexOf(t);h>=0?(j=f.substr(0,h),b=f.substr(h+1)):(j=f,b=""),d=decodeURIComponent(j),p=decodeURIComponent(b),r(a,d)?i(a[d])?a[d].push(p):a[d]=[a[d],p]:a[d]=p}return a};var i=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},348:function(e,n,t){"use strict";var r=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,n,t,o){return n=n||"&",t=t||"=",null===e&&(e=void 0),"object"===typeof e?c(a(e),(function(a){var o=encodeURIComponent(r(a))+t;return i(e[a])?c(e[a],(function(e){return o+encodeURIComponent(r(e))})).join(n):o+encodeURIComponent(r(e[a]))})).join(n):o?encodeURIComponent(r(o))+t+encodeURIComponent(r(e)):""};var i=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function c(e,n){if(e.map)return e.map(n);for(var t=[],r=0;r<e.length;r++)t.push(n(e[r],r));return t}var a=Object.keys||function(e){var n=[];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.push(t);return n}},377:function(e,n,t){"use strict";t.r(n);var r=t(0),i=t.n(r),c=t(25),a=t(3),o=t(69),s=t(271),u=t(343),l=t.n(u),j=t(344),b=t.n(j),d=t(2),p=function(e){for(var n=e.onPageChanged,t=e.totalItemsCount,i=e.pageCount,c=e.currentPage,a=e.portionSize,u=Math.ceil(t/i),j=[],p=1;p<=u;p++)j.push(p);var f=Math.ceil(u/a),h=Object(r.useState)(1),g=Object(s.a)(h,2),O=g[0],m=g[1],v=(O-1)*a+1,x=O*a;return Object(d.jsx)("div",{className:l.a.paginator,children:Object(d.jsxs)("div",{children:[O>1&&Object(d.jsx)("button",{className:l.a.btn,onClick:function(){return m(O-1)},children:" PREV"}),j.filter((function(e){return e>=v&&e<=x})).map((function(e,t){return Object(d.jsx)("span",{className:b()(Object(o.a)({},l.a.selectedPage,c===e),l.a.pageNumber),children:Object(d.jsx)("button",{className:c===e?l.a.selectedPage:"",onClick:function(){return n(e)},children:e})},t)})),f>O&&Object(d.jsx)("button",{className:l.a.btn,onClick:function(){return m(O+1)},children:"NEXT"})]})})},f=t(345),h=t.n(f),g=t(13),O=t(267),m=i.a.memo((function(e){var n=e.user,t=e.UnFollowFriend,r=e.FollowFriend,i=e.isFollowing;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("span",{children:[Object(d.jsx)("div",{children:Object(d.jsx)(g.b,{to:"/profile/"+n.id,children:Object(d.jsx)("img",{className:h.a.img,src:null!=n.photos.small?n.photos.small:O.a,alt:""})})}),Object(d.jsx)("div",{children:n.followed?Object(d.jsx)("button",{disabled:i.some((function(e){return e==n.id})),onClick:function(){t(n.id)},children:"unfollow"}):Object(d.jsx)("button",{disabled:i.some((function(e){return e==e})),onClick:function(){r(n.id)},children:"follow"})})]}),Object(d.jsx)("span",{children:Object(d.jsxs)("span",{children:[Object(d.jsx)("div",{children:n.name}),Object(d.jsx)("div",{children:n.status})]})})]})})),v=t(87),x=t(8),F=t(346),y=t(294),C=i.a.memo((function(e){var n=Object(c.d)((function(e){return e.usersPage.filter})),t={searchingName:n.searchingName,isFriend:String(n.isFriend)},r=Object(y.a)({enableReinitialize:!0,initialValues:t,onSubmit:function(n){var t={searchingName:n.searchingName,isFriend:"null"===n.isFriend?null:"true"===n.isFriend};e.onFilterChanged(t)}});return console.log(n.searchingName,"isFriend",n.isFriend),Object(d.jsx)("form",{onSubmit:r.handleSubmit,children:Object(d.jsx)("div",{children:Object(d.jsxs)("span",{children:[Object(d.jsx)("button",{type:"submit",children:"Search"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{defaultValue:n.searchingName,name:"searchingName",onChange:r.handleChange}),Object(d.jsxs)("select",{value:String(n.isFriend),name:"isFriend",onChange:r.handleChange,children:[Object(d.jsx)("option",{value:"null",children:"All"}),Object(d.jsx)("option",{value:"true",children:"Followers"}),Object(d.jsx)("option",{value:"false",children:"Not Followers"})]})]})]})})})})),w=i.a.memo((function(e){var n=Object(c.d)((function(e){return e.usersPage})),t=n.totalUsersCount,i=n.pageCount,o=n.currentPage,s=n.isFollowing,u=n.filter,l=n.users,j=Object(c.c)(),b=Object(x.g)();Object(r.useEffect)((function(){var e=F.parse(b.location.search.substr(1)),n=o,t=u;switch(e.page&&(n=Number(e.page)),e.term&&(t=Object(a.a)(Object(a.a)({},t),{},{searchingName:e.term})),e.friend){case"null":t=Object(a.a)(Object(a.a)({},t),{},{isFriend:null});break;case"false":t=Object(a.a)(Object(a.a)({},t),{},{isFriend:!1});break;case"true":t=Object(a.a)(Object(a.a)({},t),{},{isFriend:!0})}j(Object(v.d)(n,i,t))}),[]),Object(r.useEffect)((function(){b.push({pathname:"/users",search:"?term=".concat(u.searchingName,"&friend=").concat(u.isFriend,"&page=").concat(o)})}),[u,o]);var f=function(e){j(Object(v.a)(e))},h=function(e){j(Object(v.b)(e))};return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:e.title}),Object(d.jsx)("span",{children:Object(d.jsx)(C,{onFilterChanged:function(e){j(Object(v.d)(o,i,e))}})}),Object(d.jsx)(p,{currentPage:o,pageCount:i,totalItemsCount:t,onPageChanged:function(e){j(Object(v.d)(e,i,u))},portionSize:10}),l.map((function(e){return Object(d.jsx)(m,{user:e,FollowFriend:f,UnFollowFriend:h,isFollowing:s},e.id)}))]})})),N=t(62);n.default=function(e){var n=Object(c.d)((function(e){return e.usersPage.isFetching}));return Object(d.jsxs)("div",{children:[n?Object(d.jsx)(N.a,{}):null,Object(d.jsx)(w,{title:e.title})]})}}}]);
//# sourceMappingURL=6.760b3f46.chunk.js.map