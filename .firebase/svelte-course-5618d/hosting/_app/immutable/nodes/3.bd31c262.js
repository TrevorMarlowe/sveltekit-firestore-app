import{s as G,v as H,p as J,g as m,c as D,B as K,h as p,d as P,i as w,z as S,k as v,w as I,l as Y,m as F}from"../chunks/scheduler.279f2f81.js";import{S as L,i as Q,d as $,v as U,e as r,g as l,n as b,a as k}from"../chunks/index.dfd36af1.js";import{a as B}from"../chunks/firebase.40f557c4.js";const _="src/routes/+page.svelte";function N(c){let e,i="Get Started",s,a,o="Example Profile";const n={c:function(){e=m("a"),e.textContent=i,s=D(),a=m("a"),a.textContent=o,this.h()},l:function(u){e=p(u,"A",{href:!0,class:!0,"data-svelte-h":!0}),S(e)!=="svelte-izohf9"&&(e.textContent=i),s=P(u),a=p(u,"A",{href:!0,class:!0,"data-svelte-h":!0}),S(a)!=="svelte-dp34eg"&&(a.textContent=o),this.h()},h:function(){l(e,"href","/login"),l(e,"class","btn btn-primary"),v(e,_,20,5,597),l(a,"href","/TJOPepsi"),l(a,"class","btn btn-secondary"),v(a,_,21,5,659)},m:function(u,y){k(u,e,y),k(u,s,y),k(u,a,y)},p:I,d:function(u){u&&(r(e),r(s),r(a))}};return $("SvelteRegisterBlock",{block:n,id:N.name,type:"else",source:"(20:4) {:else}",ctx:c}),n}function T(c){let e,i,s;const a={c:function(){e=m("a"),i=Y("Edit Profile"),this.h()},l:function(n){e=p(n,"A",{href:!0,class:!0});var t=w(e);i=F(t,"Edit Profile"),t.forEach(r),this.h()},h:function(){l(e,"href",s="/"+c[0].username+"/edit"),l(e,"class","btn btn-primary"),v(e,_,18,5,502)},m:function(n,t){k(n,e,t),b(e,i)},p:function(n,t){t&1&&s!==(s="/"+n[0].username+"/edit")&&l(e,"href",s)},d:function(n){n&&r(e)}};return $("SvelteRegisterBlock",{block:a,id:T.name,type:"if",source:"(18:4) {#if $userData?.username}",ctx:c}),a}function R(c){let e,i,s,a,o,n,t,u="tipi.media",y,x,z="Your links to the world!",A;function O(g,d){var h;return(h=g[0])!=null&&h.username?T:N}let E=O(c),f=E(c);const V={c:function(){e=m("meta"),i=D(),s=m("main"),a=m("div"),o=m("div"),n=m("div"),t=m("h1"),t.textContent=u,y=D(),x=m("p"),x.textContent=z,A=D(),f.c(),this.h()},l:function(d){const h=K("svelte-56xiyp",document.head);e=p(h,"META",{name:!0,content:!0}),h.forEach(r),i=P(d),s=p(d,"MAIN",{class:!0});var j=w(s);a=p(j,"DIV",{class:!0});var q=w(a);o=p(q,"DIV",{class:!0});var M=w(o);n=p(M,"DIV",{class:!0});var C=w(n);t=p(C,"H1",{class:!0,"data-svelte-h":!0}),S(t)!=="svelte-14tvzib"&&(t.textContent=u),y=P(C),x=p(C,"P",{class:!0,"data-svelte-h":!0}),S(x)!=="svelte-l4bhqc"&&(x.textContent=z),A=P(C),f.l(C),C.forEach(r),M.forEach(r),q.forEach(r),j.forEach(r),this.h()},h:function(){document.title="tipi.media - your links to the world",l(e,"name","description"),l(e,"content","Demo project showcasing SvelteKit"),v(e,_,7,1,132),l(t,"class","text-7xl font-bold"),v(t,_,15,4,362),l(x,"class","py-6 text-2xl"),v(x,_,16,4,413),l(n,"class","w-full"),v(n,_,14,3,337),l(o,"class","hero-content text-center"),v(o,_,13,2,295),l(a,"class","hero bg-base-200"),v(a,_,12,1,262),l(s,"class","flex w-full min-h-screen"),v(s,_,10,0,220)},m:function(d,h){b(document.head,e),k(d,i,h),k(d,s,h),b(s,a),b(a,o),b(o,n),b(n,t),b(n,y),b(n,x),b(n,A),f.m(n,null)},p:function(d,[h]){E===(E=O(d))&&f?f.p(d,h):(f.d(1),f=E(d),f&&(f.c(),f.m(n,null)))},i:I,o:I,d:function(d){d&&(r(i),r(s)),r(e),f.d()}};return $("SvelteRegisterBlock",{block:V,id:R.name,type:"component",source:"",ctx:c}),V}function W(c,e,i){let s;H(B,"userData"),J(c,B,t=>i(0,s=t));let{$$slots:a={},$$scope:o}=e;U("Page",a,[]);const n=[];return Object.keys(e).forEach(t=>{!~n.indexOf(t)&&t.slice(0,2)!=="$$"&&t!=="slot"&&console.warn(`<Page> was created with unknown prop '${t}'`)}),c.$capture_state=()=>({userData:B,$userData:s}),[s]}class te extends L{constructor(e){super(e),Q(this,e,W,R,G,{}),$("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:R.name})}}export{te as component};
