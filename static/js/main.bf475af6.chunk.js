(this.webpackJsonpworkproject=this.webpackJsonpworkproject||[]).push([[0],{18:function(e,s,t){e.exports={dialogs:"Dialogs_dialogs__2-Sg2",messages:"Dialogs_messages__bRGYr",message:"Dialogs_message__3VBPp"}},19:function(e,s,t){e.exports={dialogsItems:"DialogItems_dialogsItems__1-icN",active:"DialogItems_active__1YM7J",img:"DialogItems_img__3mM_w"}},24:function(e,s,t){e.exports={postsBLock:"MyPosts_postsBLock__21aF9",posts:"MyPosts_posts__1Xedv"}},25:function(e,s,t){},3:function(e,s,t){e.exports={nav:"Navbar_nav__3dKQv",item:"Navbar_item__2oB40",activeLink:"Navbar_activeLink__2zl4L",itemFriends:"Navbar_itemFriends__XZia7"}},35:function(e,s,t){e.exports={header:"Header_header__1Al15"}},36:function(e,s,t){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__2y6KL"}},37:function(e,s,t){e.exports={item:"Post_item__2Cx6j"}},40:function(e,s,t){e.exports={img:"Users_img__3yc2o"}},48:function(e,s,t){},55:function(e,s,t){},74:function(e,s,t){"use strict";t.r(s);var n=t(1),a=t.n(n),c=t(16),i=t.n(c),r=(t(48),t(35)),o=t.n(r),d=t(0);var j=function(){return Object(d.jsx)("header",{className:o.a.header,children:Object(d.jsx)("img",{src:"https://www.freelogodesign.org/Content/img/logo-ex-7.png",alt:""})})},l=t(6),u=t(3),b=t.n(u),m=function(){return Object(d.jsxs)("nav",{className:b.a.nav,children:[Object(d.jsx)("div",{className:"".concat(b.a.item," ").concat(b.a.active),children:Object(d.jsx)(l.b,{to:"/profile",activeClassName:b.a.activeLink,children:"Profile"})}),Object(d.jsx)("div",{className:b.a.item,children:Object(d.jsx)(l.b,{to:"/dialogs",activeClassName:b.a.activeLink,children:"Messages"})}),Object(d.jsx)("div",{className:b.a.item,children:Object(d.jsx)(l.b,{to:"/news",activeClassName:b.a.activeLink,children:"News"})}),Object(d.jsx)("div",{className:b.a.item,children:Object(d.jsx)(l.b,{to:"/music",activeClassName:b.a.activeLink,children:"Music"})}),Object(d.jsx)("div",{className:b.a.item,children:Object(d.jsx)(l.b,{to:"/settings",activeClassName:b.a.activeLink,children:"Settings"})}),Object(d.jsx)("div",{className:b.a.item,children:Object(d.jsx)(l.b,{to:"/users",activeClassName:b.a.activeLink,children:"Users"})}),Object(d.jsx)("div",{className:b.a.itemFriends,children:Object(d.jsx)(l.b,{to:"/friends",activeClassName:b.a.activeLink,children:"Friends"})}),Object(d.jsx)("span",{className:b.a.itemFriends,children:Object(d.jsx)(l.b,{to:"/Abay",activeClassName:b.a.activeLink,children:" Abay "})}),Object(d.jsx)("span",{className:b.a.itemFriends,children:Object(d.jsx)(l.b,{to:"/Salta",activeClassName:b.a.activeLink,children:" Salta "})}),Object(d.jsx)("span",{className:b.a.itemFriends,children:Object(d.jsx)(l.b,{to:"/Samal",activeClassName:b.a.activeLink,children:" Samal "})})]})},O=t(36),h=t.n(O);var v=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:e.pic})}),Object(d.jsx)("div",{className:h.a.descriptionBlock,children:"ava + description"})]})},x=t(24),g=t.n(x),p=t(37),f=t.n(p);var w=function(e){return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:f.a.item,children:[Object(d.jsx)("img",{src:"https://lwlies.com/wp-content/uploads/2017/04/avatar-2009.jpg",alt:""}),e.message,Object(d.jsx)("div",{children:Object(d.jsxs)("span",{children:[e.like,Object(d.jsx)("button",{children:"like"})]})})]})})};var N=function(e){var s=e.message.map((function(e){return Object(d.jsx)(w,{message:e.message,like:e.likeCount})}));return Object(d.jsxs)("div",{className:g.a.postsBLock,children:[Object(d.jsx)("h3",{children:"My posts"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:Object(d.jsx)("textarea",{value:e.newPostText,onChange:function(s){e.changeNewText(s.currentTarget.value)}})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:function(){e.addPost()},children:"add new post"})})]}),Object(d.jsx)("div",{className:g.a.posts,children:s})]})},_=t(12),y=t(13),k=t(5),P="ADD-POST",C="CHANGE-NEW-POST-TEXT",L={message:[{id:1,message:"Hi, how are you?",likeCount:22},{id:2,message:"It is my first post",likeCount:11}],newPostText:""},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case P:var t={id:3,message:e.newPostText,likeCount:0};return Object(k.a)(Object(k.a)({},e),{},{message:[].concat(Object(y.a)(e.message),[t]),newPostText:""});case C:return Object(k.a)(Object(k.a)({},e),{},{newPostText:s.newPost});default:return e}},S=Object(_.b)((function(e){return{message:e.profilePage.message,newPostText:e.profilePage.newPostText}}),(function(e){return{changeNewText:function(s){e({type:C,newPost:s})},addPost:function(){e({type:P})}}}))(N);var B=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(v,{pic:"https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"}),Object(d.jsx)(S,{})]})},T=(t(55),t(4));var E=function(e){return Object(d.jsx)("div",{children:"News"})};var F=function(e){return Object(d.jsx)("div",{children:"Music"})};var I=function(e){return Object(d.jsx)("div",{children:"Settings"})};var D=function(e){return Object(d.jsx)("div",{children:"Friends"})},A=t(18),U=t.n(A),W=t(19),H=t.n(W);var K=function(e){return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"".concat(H.a.dialog," ").concat(H.a.active),children:[Object(d.jsx)("img",{className:H.a.img,src:"https://media.vanityfair.com/photos/5c5325d3cec32271820c6fc1/master/w_1600%2Cc_limit/ava-max-interview.jpg",alt:""}),Object(d.jsx)(l.b,{to:"/dialogs/"+e.id,children:e.name})]})})},G=t(25),J=t.n(G);var R=function(e){return Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:J.a.message,children:Object(d.jsx)("div",{className:J.a.chat,children:e.messages})})})};var X=function(e){var s=e.users.map((function(e){return Object(d.jsx)(K,{name:e.name,id:e.id})})),t=e.messages.map((function(e){return Object(d.jsx)(R,{messages:e.messages,id:e.id})})),n=e.newMessageBody;return Object(d.jsxs)("div",{className:U.a.dialogs,children:[Object(d.jsx)("div",{className:U.a.dialogsItems,children:s}),Object(d.jsxs)("div",{className:U.a.messages,children:[Object(d.jsxs)("div",{children:[" ",t]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:Object(d.jsx)("textarea",{value:n,placeholder:"Enter your message",onChange:function(s){e.updatedMessageBody(s.currentTarget.value)}})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:function(){e.sendMessage()},children:"Send"})})]})]})]})},Y="NEW-MESSAGE-BODY",z="SEND-MESSAGE",Q={users:[{id:"1",name:"Damir"},{id:"2",name:"Abay"},{id:"3",name:"Kyama"},{id:"4",name:"Kaidar"},{id:"5",name:"Aday"}],messages:[{id:1,messages:"Hi"},{id:2,messages:"What's up?"},{id:3,messages:"How's it going?"}],newMessageBody:""},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case Y:return Object(k.a)(Object(k.a)({},e),{},{newMessageBody:s.body});case z:var t=e.newMessageBody;return Object(k.a)(Object(k.a)({},e),{},{messages:[].concat(Object(y.a)(e.messages),[{id:6,messages:t}]),newMessageBody:""});default:return e}},Z=Object(_.b)((function(e){return{users:e.dialogPage.users,messages:e.dialogPage.messages,newMessageBody:e.dialogPage.newMessageBody}}),(function(e){return{updatedMessageBody:function(s){e({type:Y,body:s})},sendMessage:function(){e({type:z})}}}))(X),q={users:[]},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case"FOLLOW":return Object(k.a)(Object(k.a)({},e),{},{users:e.users.map((function(e){return e.id===s.userId?Object(k.a)(Object(k.a)({},e),{},{followed:!1}):e}))});case"UNFOLLOW":return Object(k.a)(Object(k.a)({},e),{},{users:e.users.map((function(e){return e.id===s.userId?Object(k.a)(Object(k.a)({},e),{},{followed:!0}):e}))});case"SET-USERS":return Object(k.a)(Object(k.a)({},e),{},{users:[].concat(Object(y.a)(e.users),Object(y.a)(s.user))});default:return e}},ee=t(38),se=t(39),te=t(43),ne=t(42),ae=t(40),ce=t.n(ae),ie=t(41),re=t.n(ie),oe=function(e){Object(te.a)(t,e);var s=Object(ne.a)(t);function t(){return Object(ee.a)(this,t),s.apply(this,arguments)}return Object(se.a)(t,[{key:"componentDidMount",value:function(){var e=this;re.a.get("https://social-network.samuraijs.com/api/1.0/users").then((function(s){e.props.setUser(s.data.items)}))}},{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{children:this.props.users.map((function(s){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("span",{children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{className:ce.a.img,src:null!=s.photoUrl?s.photoUrl:"https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",alt:""})}),Object(d.jsx)("div",{children:s.followed?Object(d.jsx)("button",{onClick:function(){e.props.follow(s.id)},children:"follow"}):Object(d.jsx)("button",{onClick:function(){e.props.unfollow(s.id)},children:"unfollow"})})]}),Object(d.jsxs)("span",{children:[Object(d.jsxs)("span",{children:[Object(d.jsx)("div",{children:s.fullName}),Object(d.jsx)("div",{children:s.status})]}),Object(d.jsxs)("span",{children:[Object(d.jsx)("div",{children:"el.location.country"}),Object(d.jsx)("div",{children:"el.location.city"})]})]})]},s.id)}))})}}]),t}(a.a.Component),de=Object(_.b)((function(e){return{users:e.usersPage.users}}),(function(e){return{follow:function(s){e(function(e){return{type:"FOLLOW",userId:e}}(s))},unfollow:function(s){e(function(e){return{type:"UNFOLLOW",userId:e}}(s))},setUser:function(s){e(function(e){return{type:"SET-USERS",user:e}}(s))}}}))(oe);var je=function(){return Object(d.jsx)(l.a,{children:Object(d.jsxs)("div",{className:"app-wrapper",children:[Object(d.jsx)(j,{}),Object(d.jsx)(m,{}),Object(d.jsxs)("div",{className:"app-wrapper-content",children:[Object(d.jsx)(T.a,{path:"/dialogs",render:function(){return Object(d.jsx)(Z,{})}}),Object(d.jsx)(T.a,{path:"/profile",render:function(){return Object(d.jsx)(B,{})}}),Object(d.jsx)(T.a,{path:"/news",component:E}),Object(d.jsx)(T.a,{path:"/music",component:F}),Object(d.jsx)(T.a,{path:"/settings",component:I}),Object(d.jsx)(T.a,{path:"/friends",render:function(){return Object(d.jsx)(D,{})}}),Object(d.jsx)(T.a,{path:"/users",render:function(){return Object(d.jsx)(de,{})}})]})]})})},le=t(26),ue={friends:[{id:1,name:"Abay"},{id:2,name:"Karik"},{id:3,name:"Samal"}]},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue;return e},me=Object(le.a)({profilePage:M,dialogPage:V,sideBarPage:be,usersPage:$}),Oe=Object(le.b)(me);window.store=window.store||{};var he=Oe;i.a.render(Object(d.jsx)(l.a,{children:Object(d.jsx)(_.a,{store:he,children:Object(d.jsx)(je,{})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.bf475af6.chunk.js.map