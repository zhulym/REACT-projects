(this["webpackJsonpbase-react"]=this["webpackJsonpbase-react"]||[]).push([[0],{21:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(14),i=a.n(n),r=(a(21),a(0)),j=function(){return Object(r.jsxs)("div",{className:"instructions",children:[Object(r.jsx)("h3",{children:"To compress jpeg and png images:"}),Object(r.jsxs)("div",{className:"instruction__steps",children:[Object(r.jsx)("p",{children:"1. Upload Image"}),Object(r.jsx)("p",{children:"2. Set Options"}),Object(r.jsx)("p",{children:"3. Compress and download image"})]})]})},o=a(12),l=a.n(o),b=a(15),d=a(6),u=a(16),m=a(9),O=a(10),p=(a(24),function(e){return Object(r.jsx)("div",{className:"preview",children:Object(r.jsx)("img",{src:e.srcData,id:"preview__image",width:600})})}),h=(a(25),function(e){return Object(r.jsxs)("div",{className:"options-item",children:[Object(r.jsx)("label",{className:"image-label",htmlFor:e.htmlFor,children:e.label}),Object(r.jsx)("input",{id:e.id,className:e.className,type:e.type,name:e.name,value:e.value,onChange:e.onChange})]})}),x=(a(26),function(){var e=Object(c.useState)({upload:"https://user-images.githubusercontent.com/75386560/127773454-71dc5095-3694-4940-a4da-ee81c8d41243.png",compressed:"https://user-images.githubusercontent.com/75386560/127773885-f7297dc5-38b4-48ec-93f7-c275f654f5d0.png"}),t=Object(d.a)(e,2),a=t[0],s=(t[1],Object(c.useState)("")),n=Object(d.a)(s,2),i=n[0],j=n[1],o=Object(c.useState)(""),x=Object(d.a)(o,2),g=x[0],f=x[1],v=Object(c.useState)(""),w=Object(d.a)(v,2),N=w[0],S=w[1],C=Object(c.useState)(""),F=Object(d.a)(C,2),y=F[0],z=F[1],k=Object(c.useState)(""),D=Object(d.a)(k,2),L=D[0],M=D[1],R=Object(c.useState)(""),U=Object(d.a)(R,2),B=U[0],I=U[1],P=Object(c.useState)(!1),_=Object(d.a)(P,2),T=_[0],W=_[1],J=Object(c.useState)(!1),A=Object(d.a)(J,2),E=A[0],G=A[1],H=Object(c.useState)(1),X=Object(d.a)(H,2),q=X[0],K=X[1],Q=Object(c.useState)(1366),V=Object(d.a)(Q,2),Y=V[0],Z=V[1],$=function(){var e=Object(b.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={maxSizeMB:q,maxWidthOrHeight:Y,useWebWorker:!0},e.prev=1,e.next=4,Object(u.a)(N,t);case 4:a=e.sent,I("".concat((a.size/1024/1024).toFixed(2)," mb")),f(URL.createObjectURL(a)),W(!0),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"options",children:[Object(r.jsx)("p",{children:"Options"}),Object(r.jsxs)("div",{className:"options-container",children:[Object(r.jsx)(h,{id:"image-size",htmlFor:"image-size",label:"Max size MB:",className:"image-size",name:"image-size",type:"number",value:q,onChange:function(e){return K(e.target.value)}}),Object(r.jsx)(h,{id:"image-width",htmlFor:"image-width",label:"Max width PX:",className:"image-width",name:"image-width",type:"number",value:Y,onChange:function(e){return Z(e.target.value)}})]}),Object(r.jsxs)("div",{className:"items-wrapper d-flex justify-content-between",children:[Object(r.jsxs)(m.a.Group,{controlId:"formFile",className:"mb-3",children:[Object(r.jsx)(m.a.Label,{children:"Download image"}),Object(r.jsx)(m.a.Control,{type:"file",accept:"image/*",onChange:function(e){return function(e){var t=e.target.files[0];S(t),z(t.name),M("".concat((t.size/1024/1024).toFixed(2)," mb")),j(URL.createObjectURL(t)),G(!0)}(e)}})]}),T&&Object(r.jsxs)("div",{className:"parameters d-flex justify-content-between align-items-end",children:[Object(r.jsxs)("p",{children:["Size before: ",Object(r.jsx)("span",{className:"parameters-value",children:L})]}),Object(r.jsxs)("p",{children:["Size after: ",Object(r.jsx)("span",{className:"parameters-value",children:B})]}),Object(r.jsx)("span",{children:Object(r.jsx)(O.a,{className:"preview-btn",variant:"success",onClick:function(){window.open(g)},children:"Preview"})})]})]}),Object(r.jsxs)("div",{className:"images-wrapper d-flex justify-content-between align-items-center",children:[E?Object(r.jsx)(p,{srcData:i}):Object(r.jsx)(p,{srcData:a.upload}),Object(r.jsxs)("div",{className:"buttons-wrapper",children:[y&&Object(r.jsx)(O.a,{className:"compressed-button",variant:"primary",onClick:function(){return $()},children:"Compress"}),T&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("a",{href:g,download:y,className:"compressed-button btn btn-success line-height",variant:"info",children:"Download"}),Object(r.jsx)(O.a,{className:"compressed-button",variant:"danger",onClick:function(){window.location.reload()},children:"Repeat"})]})]}),g?Object(r.jsx)(p,{srcData:g}):Object(r.jsx)(p,{srcData:a.compressed})]})]})}),g=(a(29),function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(j,{}),Object(r.jsx)(x,{})]})}),f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(g,{})}),document.getElementById("root")),f()}},[[30,1,2]]]);
//# sourceMappingURL=main.c13542f3.chunk.js.map