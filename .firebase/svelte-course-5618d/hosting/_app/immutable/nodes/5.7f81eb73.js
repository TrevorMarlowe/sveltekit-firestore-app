import{s as vt,v as ft,p as dt,g as _,l as R,c as F,h as g,i as P,m as B,d as O,z as mt,k as w,F as _t,w as pt}from"../chunks/scheduler.279f2f81.js";import{S as gt,i as wt,d as at,v as yt,e as E,g as p,a as ht,n as r,s as W,r as Et}from"../chunks/index.dfd36af1.js";import{p as Z}from"../chunks/stores.f5676e6b.js";import{p as Pt}from"../chunks/parse.bee59afc.js";import{j as kt,k as At}from"../chunks/singletons.008c99c6.js";import{a as $,u as xt}from"../chunks/firebase.441e80f6.js";const Ct=kt("invalidate_all");function St(e){return At.apply_action(e)}function Tt(e){const t=JSON.parse(e);return t.data&&(t.data=Pt(t.data)),t}function q(e,t,s){console.warn(`\`${e}\` has been deprecated in favor of \`${t}\`. \`${e}\` will be removed in a future version. (Called from ${s})`)}function J(e){return HTMLElement.prototype.cloneNode.call(e)}function bt(e,t=()=>{}){if(J(e).method!=="post")throw new Error('use:enhance can only be used on <form> fields with method="POST"');const s=async({action:a,result:c,reset:l})=>{c.type==="success"&&(l!==!1&&HTMLFormElement.prototype.reset.call(e),await Ct()),(location.origin+location.pathname===a.origin+a.pathname||c.type==="redirect"||c.type==="error")&&St(c)};async function d(a){var x,D,L,h;if(((x=a.submitter)!=null&&x.hasAttribute("formmethod")?a.submitter.formMethod:J(e).method)!=="post")return;a.preventDefault();const l=new URL((D=a.submitter)!=null&&D.hasAttribute("formaction")?a.submitter.formAction:J(e).action),n=new FormData(e);if(J(e).enctype!=="multipart/form-data"){for(const o of n.values())if(o instanceof File){console.warn('Your form contains <input type="file"> fields, but is missing the `enctype="multipart/form-data"` attribute. This will lead to inconsistent behavior between enhanced and native forms. For more details, see https://github.com/sveltejs/kit/issues/9819. This will be upgraded to an error in v2.0.');break}}const v=(L=a.submitter)==null?void 0:L.getAttribute("name");v&&n.append(v,((h=a.submitter)==null?void 0:h.getAttribute("value"))??"");const i=new AbortController;let A=!1;const N=await t({action:l,cancel:()=>A=!0,controller:i,get data(){return q("data","formData","use:enhance submit function"),n},formData:n,get form(){return q("form","formElement","use:enhance submit function"),e},formElement:e,submitter:a.submitter})??s;if(A)return;let m;try{const o=await fetch(l,{method:"POST",headers:{accept:"application/json","x-sveltekit-action":"true"},cache:"no-store",body:n,signal:i.signal});m=Tt(await o.text()),m.type==="error"&&(m.status=o.status)}catch(o){if((o==null?void 0:o.name)==="AbortError")return;m={type:"error",error:o}}N({action:l,get data(){return q("data","formData","callback returned from use:enhance submit function"),n},formData:n,get form(){return q("form","formElement","callback returned from use:enhance submit function"),e},formElement:e,update:o=>s({action:l,result:m,reset:o==null?void 0:o.reset}),result:m})}return HTMLFormElement.prototype.addEventListener.call(e,"submit",d),{destroy(){HTMLFormElement.prototype.removeEventListener.call(e,"submit",d)}}}const y="src/routes/[username]/bio/+page.svelte";function tt(e){let t,s,d;const a={c:function(){t=_("a"),s=R("Return to Profile"),this.h()},l:function(l){t=g(l,"A",{href:!0,class:!0});var n=P(t);s=B(n,"Return to Profile"),n.forEach(E),this.h()},h:function(){p(t,"href",d="/"+e[2].username),p(t,"class","btn btn-primary"),w(t,y,29,6,859)},m:function(l,n){ht(l,t,n),r(t,s)},p:function(l,n){n&4&&d!==(d="/"+l[2].username)&&p(t,"href",d)},d:function(l){l&&E(t)}};return at("SvelteRegisterBlock",{block:a,id:tt.name,type:"if",source:"(26:4) {#if $userData?.username}",ctx:e}),a}function et(e){var it,lt;let t,s,d,a,c=e[0].bio+"",l,n,v,i,A=e[1].status+"",M,N,m,x=(((it=e[1].form)==null?void 0:it.problem)??"")+"",D,L,h,o,C,S,nt="Your bio",V,k,z,X,T,ot="Update Bio",G,K,rt,f=((lt=e[2])==null?void 0:lt.username)&&tt(e);const st={c:function(){t=_("main"),s=_("p"),d=R("Current Bio: "),a=_("span"),l=R(c),n=F(),v=_("p"),i=R("Status Code: "),M=R(A),N=F(),m=_("p"),D=R(x),L=F(),h=_("form"),o=_("div"),C=_("label"),S=_("span"),S.textContent=nt,V=F(),k=_("textarea"),X=F(),T=_("button"),T.textContent=ot,G=F(),f&&f.c(),this.h()},l:function(b){t=g(b,"MAIN",{class:!0});var u=P(t);s=g(u,"P",{});var j=P(s);d=B(j,"Current Bio: "),a=g(j,"SPAN",{class:!0});var U=P(a);l=B(U,c),U.forEach(E),j.forEach(E),n=O(u),v=g(u,"P",{});var Q=P(v);i=B(Q,"Status Code: "),M=B(Q,A),Q.forEach(E),N=O(u),m=g(u,"P",{class:!0});var ct=P(m);D=B(ct,x),ct.forEach(E),L=O(u),h=g(u,"FORM",{method:!0});var I=P(h);o=g(I,"DIV",{class:!0});var Y=P(o);C=g(Y,"LABEL",{for:!0,class:!0});var ut=P(C);S=g(ut,"SPAN",{class:!0,"data-svelte-h":!0}),mt(S)!=="svelte-270kv4"&&(S.textContent=nt),ut.forEach(E),V=O(Y),k=g(Y,"TEXTAREA",{name:!0,class:!0}),P(k).forEach(E),Y.forEach(E),X=O(I),T=g(I,"BUTTON",{class:!0,"data-svelte-h":!0}),mt(T)!=="svelte-ubuy9h"&&(T.textContent=ot),I.forEach(E),G=O(u),f&&f.l(u),u.forEach(E),this.h()},h:function(){p(a,"class","text-info"),w(a,y,10,20,247),w(s,y,10,4,231),w(v,y,12,4,300),p(m,"class","text-error"),w(m,y,13,4,339),p(S,"class","label-text"),w(S,y,18,10,516),p(C,"for","bio"),p(C,"class","label"),w(C,y,17,8,474),p(k,"name","bio"),p(k,"class","textarea textarea-bordered textarea-accent"),k.value=z=e[0].bio,w(k,y,20,8,582),p(o,"class","form-control"),w(o,y,16,6,439),p(T,"class","btn btn-outline btn-info block mx-auto my-4"),w(T,y,26,6,731),p(h,"method","POST"),w(h,y,15,4,400),p(t,"class","max-w-lg prose text-center mx-auto my-6"),w(t,y,9,2,172)},m:function(b,u){ht(b,t,u),r(t,s),r(s,d),r(s,a),r(a,l),r(t,n),r(t,v),r(v,i),r(v,M),r(t,N),r(t,m),r(m,D),r(t,L),r(t,h),r(h,o),r(o,C),r(C,S),r(o,V),r(o,k),r(h,X),r(h,T),r(t,G),f&&f.m(t,null),K||(rt=_t(bt.call(null,h)),K=!0)},p:function(b,[u]){var j,U;u&1&&c!==(c=b[0].bio+"")&&W(l,c),u&2&&A!==(A=b[1].status+"")&&W(M,A),u&2&&x!==(x=(((j=b[1].form)==null?void 0:j.problem)??"")+"")&&W(D,x),u&1&&z!==(z=b[0].bio)&&Et(k,"value",z),(U=b[2])!=null&&U.username?f?f.p(b,u):(f=tt(b),f.c(),f.m(t,null)):f&&(f.d(1),f=null)},i:pt,o:pt,d:function(b){b&&E(t),f&&f.d(),K=!1,rt()}};return at("SvelteRegisterBlock",{block:st,id:et.name,type:"component",source:"",ctx:e}),st}function Dt(e,t,s){let d,a;ft(Z,"page"),dt(e,Z,i=>s(1,d=i)),ft($,"userData"),dt(e,$,i=>s(2,a=i));let{$$slots:c={},$$scope:l}=t;yt("Page",c,[]);let{data:n}=t;e.$$.on_mount.push(function(){n===void 0&&!("data"in t||e.$$.bound[e.$$.props.data])&&console.warn("<Page> was created without expected prop 'data'")});const v=["data"];return Object.keys(t).forEach(i=>{!~v.indexOf(i)&&i.slice(0,2)!=="$$"&&i!=="slot"&&console.warn(`<Page> was created with unknown prop '${i}'`)}),e.$$set=i=>{"data"in i&&s(0,n=i.data)},e.$capture_state=()=>({page:Z,enhance:bt,userData:$,user:xt,data:n,$page:d,$userData:a}),e.$inject_state=i=>{"data"in i&&s(0,n=i.data)},t&&"$$inject"in t&&e.$inject_state(t.$$inject),[n,d,a]}class Mt extends gt{constructor(t){super(t),wt(this,t,Dt,et,vt,{data:0}),at("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:et.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(t){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Mt as component};