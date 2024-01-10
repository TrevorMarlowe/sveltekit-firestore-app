import{s as J,v as Y,p as F,g as b,c as w,e as G,h as g,z as x,d as S,k as y,w as $,l as W,i as K,m as I}from"../chunks/scheduler.279f2f81.js";import{S as M,i as Q,d as T,v as V,a as h,e as f,g as v,q as L,n as j,s as X}from"../chunks/index.dfd36af1.js";import{b as P,u as N,G as A,k as D,s as H}from"../chunks/firebase.441e80f6.js";const C="src/routes/login/+page.svelte";function U(c){let t,d="Sign in with Google",o,l;const p={c:function(){t=b("button"),t.textContent=d,this.h()},l:function(n){t=g(n,"BUTTON",{class:!0,"data-svelte-h":!0}),x(t)!=="svelte-1qx8cp0"&&(t.textContent=d),this.h()},h:function(){v(t,"class","btn btn-primary"),y(t,C,41,4,1058)},m:function(n,m){h(n,t,m),o||(l=L(t,"click",c[1],!1,!1,!1,!1),o=!0)},p:$,d:function(n){n&&f(t),o=!1,l()}};return T("SvelteRegisterBlock",{block:p,id:U.name,type:"else",source:"(35:2) {:else}",ctx:c}),p}function z(c){let t,d,o=c[0].displayName+"",l,p,s,n="You are logged in",m,e,a="Sign out",r,_,E="Choose a username",O,R;const q={c:function(){t=b("h2"),d=W("Welcome, "),l=W(o),p=w(),s=b("p"),s.textContent=n,m=w(),e=b("button"),e.textContent=a,r=w(),_=b("a"),_.textContent=E,this.h()},l:function(i){t=g(i,"H2",{class:!0});var u=K(t);d=I(u,"Welcome, "),l=I(u,o),u.forEach(f),p=S(i),s=g(i,"P",{class:!0,"data-svelte-h":!0}),x(s)!=="svelte-1958qcl"&&(s.textContent=n),m=S(i),e=g(i,"BUTTON",{class:!0,"data-svelte-h":!0}),x(e)!=="svelte-iuh9xu"&&(e.textContent=a),r=S(i),_=g(i,"A",{class:!0,href:!0,"data-svelte-h":!0}),x(_)!=="svelte-1fefe1d"&&(_.textContent=E),this.h()},h:function(){v(t,"class","card-title"),y(t,C,34,4,761),v(s,"class","text-center text-success"),y(s,C,35,4,822),v(e,"class","btn btn-warning"),y(e,C,36,4,884),v(_,"class","btn btn-primary"),v(_,"href","/login/username"),y(_,C,39,4,972)},m:function(i,u){h(i,t,u),j(t,d),j(t,l),h(i,p,u),h(i,s,u),h(i,m,u),h(i,e,u),h(i,r,u),h(i,_,u),O||(R=L(e,"click",c[2],!1,!1,!1,!1),O=!0)},p:function(i,u){u&1&&o!==(o=i[0].displayName+"")&&X(l,o)},d:function(i){i&&(f(t),f(p),f(s),f(m),f(e),f(r),f(_)),O=!1,R()}};return T("SvelteRegisterBlock",{block:q,id:z.name,type:"if",source:"(28:2) {#if $user}",ctx:c}),q}function B(c){let t,d="Login",o,l;function p(e,a){return e[0]?z:U}let s=p(c),n=s(c);const m={c:function(){t=b("h2"),t.textContent=d,o=w(),n.c(),l=G(),this.h()},l:function(a){t=g(a,"H2",{"data-svelte-h":!0}),x(t)!=="svelte-bhb3ah"&&(t.textContent=d),o=S(a),n.l(a),l=G(),this.h()},h:function(){y(t,C,31,2,725)},m:function(a,r){h(a,t,r),h(a,o,r),n.m(a,r),h(a,l,r)},p:function(a,[r]){s===(s=p(a))&&n?n.p(a,r):(n.d(1),n=s(a),n&&(n.c(),n.m(l.parentNode,l)))},i:$,o:$,d:function(a){a&&(f(t),f(o),f(l)),n.d(a)}};return T("SvelteRegisterBlock",{block:m,id:B.name,type:"component",source:"",ctx:c}),m}function Z(c,t,d){let o;Y(N,"user"),F(c,N,e=>d(0,o=e));let{$$slots:l={},$$scope:p}=t;V("Page",l,[]);async function s(){const e=new A,r=await(await D(P,e)).user.getIdToken();await fetch("/api/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idToken:r})})}async function n(){await fetch("/api/signin",{method:"DELETE"}),await H(P)}const m=[];return Object.keys(t).forEach(e=>{!~m.indexOf(e)&&e.slice(0,2)!=="$$"&&e!=="slot"&&console.warn(`<Page> was created with unknown prop '${e}'`)}),c.$capture_state=()=>({auth:P,user:N,GoogleAuthProvider:A,signInWithPopup:D,signOut:H,signInWithGoogle:s,signOutSSR:n,$user:o}),[o,s,n]}class st extends M{constructor(t){super(t),Q(this,t,Z,B,J,{}),T("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:B.name})}}export{st as component};
