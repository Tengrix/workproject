(this.webpackJsonpworkproject=this.webpackJsonpworkproject||[]).push([[5],{261:function(e,t,o){e.exports={formControl:"FormControl_formControl__3bI51",error:"FormControl_error__2p-ba",formSummaryError:"FormControl_formSummaryError__2aYFp"}},263:function(e,t,o){"use strict";o.d(t,"b",(function(){return a})),o.d(t,"a",(function(){return l}));var r=o(3),c=o(262),s=(o(0),o(261)),i=o.n(s),n=o(2),a=function(e){var t=e.input,o=e.meta,s=Object(c.a)(e,["input","meta"]),a=o.touched&&o.error;return Object(n.jsxs)("div",{className:i.a.formControl+""+(a?i.a.error:""),children:[Object(n.jsx)("div",{children:Object(n.jsx)("textarea",Object(r.a)(Object(r.a)({},t),s))}),a&&Object(n.jsxs)("span",{children:[" ",o.error," "]})]})},l=function(e){var t=e.input,o=e.meta,s=Object(c.a)(e,["input","meta"]),a=o.touched&&o.error;return Object(n.jsxs)("div",{className:i.a.formControl+""+(a?i.a.error:""),children:[Object(n.jsx)("input",Object(r.a)(Object(r.a)({},t),s)),a&&Object(n.jsxs)("span",{className:i.a.error,children:[" ",o.error," "]})]})}},264:function(e,t,o){"use strict";o.d(t,"b",(function(){return r})),o.d(t,"a",(function(){return c}));var r=function(e){if(!e)return"Field is required"},c=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},274:function(e,t,o){"use strict";t.a=o.p+"static/media/51f6fb256629fc755b8870c801092942.22c31152.png"},292:function(e,t,o){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__2Y1mw",contacts:"ProfileInfo_contacts__1ifIm"}},357:function(e,t,o){e.exports={postsBLock:"MyPosts_postsBLock__2XgTU",posts:"MyPosts_posts__2c1oP"}},358:function(e,t,o){e.exports={item:"Post_item__12Fn7"}},381:function(e,t,o){"use strict";o.r(t);var r=o(3),c=o(0),s=o.n(c),i=o(292),n=o.n(i),a=o(69),l=o(268),b=o(2);var j=function(e){var t=Object(c.useState)(!1),o=Object(l.a)(t,2),r=o[0],s=o[1],i=Object(c.useState)(e.status),n=Object(l.a)(i,2),a=n[0],j=n[1];return Object(b.jsx)("div",{children:r?Object(b.jsx)("div",{children:Object(b.jsx)("input",{onChange:function(e){j(e.currentTarget.value)},autoFocus:!0,onBlur:function(){s(!1),e.updateProfileStatus(a)},type:"text",value:a})}):Object(b.jsx)("div",{children:Object(b.jsx)("span",{onDoubleClick:function(){e.isOwner&&(s(!0),j(e.status))},children:e.status||"no status"})})})},u=o(274),d=o(5),p=o.n(d),f=o(8),O=o(359),h=o(61),x=o(28),m=o(377),v=o(379),g=o(380);function k(){return Math.round(20*Math.random())-10}function P(){var e=50+k(),t=50+k();return{top:"".concat(e,"%"),left:"".concat(t,"%"),transform:"translate(-".concat(e,"%, -").concat(t,"%)")}}var y=Object(m.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),w=function(e){var t=Object(x.c)(),o=Object(x.d)((function(e){return e.profilePage.error})),s=Object(c.useState)(o),i=Object(l.a)(s,2),a=i[0],j=i[1],u=y(),d=Object(c.useState)(P),m=Object(l.a)(d,1)[0],k=Object(c.useState)(!1),w=Object(l.a)(k,2),N=w[0],F=w[1],S=function(){F(!1)},_=Object(O.a)({enableReinitialize:!0,initialValues:{userId:e.profile.userId,aboutMe:e.profile.aboutMe,fullName:e.profile.fullName,lookingForAJob:e.profile.lookingForAJob,lookingForAJobDescription:e.profile.lookingForAJobDescription,contacts:{vk:e.profile.contacts.vk,github:e.profile.contacts.github,instagram:e.profile.contacts.instagram,facebook:e.profile.contacts.facebook,twitter:e.profile.contacts.twitter,website:e.profile.contacts.website,youtube:e.profile.contacts.youtube,mainLink:e.profile.contacts.mainLink},photos:{small:"",large:""}},validate:function(e){var t={};return e.aboutMe||(t.aboutMe="Required"),e.fullName||(t.fullName="Required"),e.lookingForAJobDescription||(t.lookingForAJobDescription="Required"),t},onSubmit:function(){var e=Object(f.a)(p.a.mark((function e(o){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t(Object(h.f)(o));case 3:S(),j(""),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),Object(h.g)(e.t0),j(e.t0);case 11:_.resetForm();case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}),A=Object(b.jsx)("div",{style:m,className:u.paper,children:Object(b.jsxs)("form",{onSubmit:_.handleSubmit,children:[a&&Object(b.jsx)("div",{style:{border:"1px solid red",color:"darkred",padding:"10px"},children:a}),Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:"About Me:"}),Object(b.jsx)(v.a,Object(r.a)({type:"aboutMe"},_.getFieldProps("aboutMe"))),_.touched.aboutMe&&_.errors.aboutMe&&Object(b.jsx)("div",{style:{color:"red"},children:_.errors.aboutMe})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:"Full name:"}),Object(b.jsx)("input",Object(r.a)({type:"fullName"},_.getFieldProps("fullName"))),_.touched.fullName&&_.errors.fullName&&Object(b.jsx)("div",{style:{color:"red"},children:_.errors.fullName})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:"Looking for job:"}),Object(b.jsx)("input",{type:"checkbox"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:"My skills:"}),Object(b.jsx)("input",Object(r.a)({type:"lookingForAJobDescription"},_.getFieldProps("lookingForAJobDescription"))),_.touched.lookingForAJobDescription&&_.errors.lookingForAJobDescription&&Object(b.jsx)("div",{style:{color:"red"},children:_.errors.lookingForAJobDescription})]}),Object(b.jsx)("b",{children:"Contacts:"}),Object.keys(e.profile.contacts).map((function(e,t){return Object(b.jsxs)("div",{className:n.a.contacts,children:[Object(b.jsxs)("b",{children:[e,":"]}),Object(b.jsx)("div",{children:Object(b.jsx)("input",Object(r.a)({type:"contacts.".concat(e)},_.getFieldProps("contacts.".concat(e))))})]},t)})),Object(b.jsx)("button",{disabled:!_.isValid,type:"submit",color:"primary",children:"save"})]})});return Object(b.jsxs)("div",{children:[e.isOwner&&Object(b.jsx)("button",{type:"button",onClick:function(){F(!0)},children:"update profile"}),Object(b.jsx)(g.a,{open:N,onClose:S,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:A}),Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:"About me:"})," ",e.profile.aboutMe]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:"Name:"})," ",e.profile.fullName]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:"Looking for a job:"})," ",e.profile.lookingForAJob?"yes":"no"]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:"My Skills:"})," ",e.profile.lookingForAJobDescription]}),Object(b.jsx)("b",{children:" Contacts:"}),Object(b.jsxs)("div",{className:n.a.contacts,children:[Object(b.jsx)("b",{children:"vk:"})," ",e.profile.contacts.vk]}),Object(b.jsxs)("div",{className:n.a.contacts,children:[Object(b.jsx)("b",{children:"github:"})," ",e.profile.contacts.github]}),Object(b.jsxs)("div",{className:n.a.contacts,children:[Object(b.jsx)("b",{children:"youtube:"})," ",e.profile.contacts.youtube]}),Object(b.jsxs)("div",{className:n.a.contacts,children:[Object(b.jsx)("b",{children:"facebook:"})," ",e.profile.contacts.facebook]}),Object(b.jsxs)("div",{className:n.a.contacts,children:[Object(b.jsx)("b",{children:"website:"})," ",e.profile.contacts.website]}),Object(b.jsxs)("div",{className:n.a.contacts,children:[Object(b.jsx)("b",{children:"mainLink:"})," ",e.profile.contacts.mainLink]}),Object(b.jsxs)("div",{className:n.a.contacts,children:[Object(b.jsx)("b",{children:"instagram:"})," ",e.profile.contacts.instagram]}),Object(b.jsxs)("div",{className:n.a.contacts,children:[Object(b.jsx)("b",{children:"twitter:"})," ",e.profile.contacts.twitter]})]})};var N=function(e){return e.profile?Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:n.a.descriptionBlock,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{src:e.photos.large||u.a,alt:"profile pic"}),e.isOwner&&Object(b.jsx)("input",{type:"file",onChange:function(t){t.target.files&&e.saveUserPhoto(t.target.files[0])}}),Object(b.jsx)(j,{status:e.status,updateProfileStatus:e.updateProfileStatus,isOwner:e.isOwner})]}),Object(b.jsx)(w,{isOwner:e.isOwner,profile:e.profile})]})}):Object(b.jsx)(a.a,{})},F=o(357),S=o.n(F),_=o(358),A=o.n(_);var M=function(e){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:A.a.item,children:[Object(b.jsx)("img",{src:"https://lwlies.com/wp-content/uploads/2017/04/avatar-2009.jpg",alt:""}),e.message,Object(b.jsx)("div",{children:Object(b.jsxs)("span",{children:[e.like,Object(b.jsx)("button",{children:"like"})]})})]})})},C=o(117),J=o(118),D=o(264),I=o(263),U=Object(D.a)(99),L=s.a.memo((function(e){var t=e.message.map((function(e,t){return Object(b.jsx)(M,{message:e.message,like:e.likeCount},t)}));return Object(b.jsxs)("div",{className:S.a.postsBLock,children:[Object(b.jsx)("h3",{children:"My posts"}),Object(b.jsx)("div",{children:Object(b.jsx)(B,{onSubmit:function(t){e.addPost(t.posts)}})}),Object(b.jsx)("div",{className:S.a.posts,children:t})]})})),B=Object(J.a)({form:"posts"})((function(e){return Object(b.jsxs)("form",{action:"",onSubmit:e.handleSubmit,children:[Object(b.jsx)("div",{children:Object(b.jsx)(C.a,{component:I.b,name:"posts",placeholder:"Enter some posts",validate:[D.b,U]})}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{children:"add new post"})})]})})),G=Object(x.b)((function(e){return{message:e.profilePage.message}}),(function(e){return{addPost:function(t){e(Object(h.b)(t))}}}))(L);var q=function(e){var t=e.profile,o=e.updateProfileStatus,r=e.photos,c=e.saveUserPhoto,s=e.status,i=e.isOwner;return Object(b.jsxs)("div",{children:[Object(b.jsx)(N,{status:s,profile:t,updateProfileStatus:o,photos:r,saveUserPhoto:c,isOwner:i}),Object(b.jsx)(G,{})]})},z=o(37),E=o(7);t.default=Object(z.compose)(Object(x.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,isAuth:e.auth.data.isAuth,authorizedUserId:e.auth.data.id,photos:e.profilePage.profile.photos}}),{GetProfile:h.a,getProfileStatus:h.d,updateProfileStatus:h.h,saveUserPhoto:h.e}),E.g)((function(e){var t=Object(x.d)((function(e){return e.auth.data.id})),o=parseInt(e.match.params.userId);return Object(c.useEffect)((function(){o||null==t?e.GetProfile(o):e.GetProfile(t)}),[o,t]),Object(b.jsx)(q,Object(r.a)(Object(r.a)({},e),{},{profile:e.profile,GetProfile:e.GetProfile,status:e.status,getProfileStatus:e.getProfileStatus,updateProfileStatus:e.updateProfileStatus,isAuth:e.isAuth,authorizedUserId:e.authorizedUserId,photos:e.photos,saveUserPhoto:e.saveUserPhoto,isOwner:!o}))}))}}]);
//# sourceMappingURL=5.cbdb4381.chunk.js.map