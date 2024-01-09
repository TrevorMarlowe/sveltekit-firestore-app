import{d as id,w as ns}from"./index.e90833d3.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},sd=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},kc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,u=c?e[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(n[l],n[h],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(bc(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):sd(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new od;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class od extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ad=function(e){const t=bc(e);return kc.encodeByteArray(t,!0)},Pr=function(e){return ad(e).replace(/\./g,"")},Dc=function(e){try{return kc.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud=()=>cd().__FIREBASE_DEFAULTS__,ld=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},hd=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Dc(e[1]);return t&&JSON.parse(t)},Yr=()=>{try{return ud()||ld()||hd()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Nc=e=>{var t,n;return(n=(t=Yr())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Vc=e=>{const t=Nc(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Oc=()=>{var e;return(e=Yr())===null||e===void 0?void 0:e.config},Mc=e=>{var t;return(t=Yr())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Pr(JSON.stringify(n)),Pr(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function pd(){var e;const t=(e=Yr())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function md(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function gd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _d(){const e=ut();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function yd(){try{return typeof indexedDB=="object"}catch{return!1}}function vd(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed="FirebaseError";class Ot extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Ed,Object.setPrototypeOf(this,Ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ln.prototype.create)}}class Ln{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Td(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ot(i,a,r)}}function Td(e,t){return e.replace(Id,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Id=/\{\$([^}]+)}/g;function wd(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Sr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(na(s)&&na(o)){if(!Sr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function na(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Ad(e,t){const n=new Rd(e,t);return n.subscribe.bind(n)}class Rd{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Pd(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Oi),i.error===void 0&&(i.error=Oi),i.complete===void 0&&(i.complete=Oi);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Pd(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Oi(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(e){return e&&e._delegate?e._delegate:e}class te{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new dd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(bd(t))try{this.getOrInitializeService({instanceIdentifier:le})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=le){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=le){return this.instances.has(t)}getOptions(t=le){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Cd(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=le){return this.component?this.component.multipleInstances?t:le:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cd(e){return e===le?void 0:e}function bd(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Sd(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var D;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(D||(D={}));const Dd={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},Nd=D.INFO,Vd={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},Od=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Vd[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ls{constructor(t){this.name=t,this._logLevel=Nd,this._logHandler=Od,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in D))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Dd[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...t),this._logHandler(this,D.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...t),this._logHandler(this,D.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,D.INFO,...t),this._logHandler(this,D.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,D.WARN,...t),this._logHandler(this,D.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...t),this._logHandler(this,D.ERROR,...t)}}const Md=(e,t)=>t.some(n=>e instanceof n);let ra,ia;function Ld(){return ra||(ra=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xd(){return ia||(ia=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xc=new WeakMap,rs=new WeakMap,Uc=new WeakMap,Mi=new WeakMap,xs=new WeakMap;function Ud(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Xt(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&xc.set(n,e)}).catch(()=>{}),xs.set(t,e),t}function Fd(e){if(rs.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});rs.set(e,t)}let is={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return rs.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Uc.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Bd(e){is=e(is)}function $d(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Li(this),t,...n);return Uc.set(r,t.sort?t.sort():[t]),Xt(r)}:xd().includes(e)?function(...t){return e.apply(Li(this),t),Xt(xc.get(this))}:function(...t){return Xt(e.apply(Li(this),t))}}function qd(e){return typeof e=="function"?$d(e):(e instanceof IDBTransaction&&Fd(e),Md(e,Ld())?new Proxy(e,is):e)}function Xt(e){if(e instanceof IDBRequest)return Ud(e);if(Mi.has(e))return Mi.get(e);const t=qd(e);return t!==e&&(Mi.set(e,t),xs.set(t,e)),t}const Li=e=>xs.get(e);function jd(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Xt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Xt(o.result),c.oldVersion,c.newVersion,Xt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const zd=["get","getKey","getAll","getAllKeys","count"],Hd=["put","add","delete","clear"],xi=new Map;function sa(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(xi.get(t))return xi.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Hd.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||zd.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return xi.set(t,s),s}Bd(e=>({...e,get:(t,n,r)=>sa(t,n)||e.get(t,n,r),has:(t,n)=>!!sa(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Kd(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Kd(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ss="@firebase/app",oa="0.9.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye=new Ls("@firebase/app"),Gd="@firebase/app-compat",Qd="@firebase/analytics-compat",Yd="@firebase/analytics",Xd="@firebase/app-check-compat",Jd="@firebase/app-check",Zd="@firebase/auth",tf="@firebase/auth-compat",ef="@firebase/database",nf="@firebase/database-compat",rf="@firebase/functions",sf="@firebase/functions-compat",of="@firebase/installations",af="@firebase/installations-compat",cf="@firebase/messaging",uf="@firebase/messaging-compat",lf="@firebase/performance",hf="@firebase/performance-compat",df="@firebase/remote-config",ff="@firebase/remote-config-compat",pf="@firebase/storage",mf="@firebase/storage-compat",gf="@firebase/firestore",_f="@firebase/firestore-compat",yf="firebase",vf="10.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os="[DEFAULT]",Ef={[ss]:"fire-core",[Gd]:"fire-core-compat",[Yd]:"fire-analytics",[Qd]:"fire-analytics-compat",[Jd]:"fire-app-check",[Xd]:"fire-app-check-compat",[Zd]:"fire-auth",[tf]:"fire-auth-compat",[ef]:"fire-rtdb",[nf]:"fire-rtdb-compat",[rf]:"fire-fn",[sf]:"fire-fn-compat",[of]:"fire-iid",[af]:"fire-iid-compat",[cf]:"fire-fcm",[uf]:"fire-fcm-compat",[lf]:"fire-perf",[hf]:"fire-perf-compat",[df]:"fire-rc",[ff]:"fire-rc-compat",[pf]:"fire-gcs",[mf]:"fire-gcs-compat",[gf]:"fire-fst",[_f]:"fire-fst-compat","fire-js":"fire-js",[yf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=new Map,as=new Map;function Tf(e,t){try{e.container.addComponent(t)}catch(n){ye.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ve(e){const t=e.name;if(as.has(t))return ye.debug(`There were multiple attempts to register component ${t}.`),!1;as.set(t,e);for(const n of Cr.values())Tf(n,e);return!0}function Xr(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Jt=new Ln("app","Firebase",If);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new te("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Jt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re=vf;function Fc(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:os,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Jt.create("bad-app-name",{appName:String(i)});if(n||(n=Oc()),!n)throw Jt.create("no-options");const s=Cr.get(i);if(s){if(Sr(n,s.options)&&Sr(r,s.config))return s;throw Jt.create("duplicate-app",{appName:i})}const o=new kd(i);for(const c of as.values())o.addComponent(c);const a=new wf(n,r,o);return Cr.set(i,a),a}function Us(e=os){const t=Cr.get(e);if(!t&&e===os&&Oc())return Fc();if(!t)throw Jt.create("no-app",{appName:e});return t}function Ct(e,t,n){var r;let i=(r=Ef[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ye.warn(a.join(" "));return}ve(new te(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af="firebase-heartbeat-database",Rf=1,Tn="firebase-heartbeat-store";let Ui=null;function Bc(){return Ui||(Ui=jd(Af,Rf,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Tn)}}}).catch(e=>{throw Jt.create("idb-open",{originalErrorMessage:e.message})})),Ui}async function Pf(e){try{return await(await Bc()).transaction(Tn).objectStore(Tn).get($c(e))}catch(t){if(t instanceof Ot)ye.warn(t.message);else{const n=Jt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ye.warn(n.message)}}}async function aa(e,t){try{const r=(await Bc()).transaction(Tn,"readwrite");await r.objectStore(Tn).put(t,$c(e)),await r.done}catch(n){if(n instanceof Ot)ye.warn(n.message);else{const r=Jt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ye.warn(r.message)}}}function $c(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf=1024,Cf=30*24*60*60*1e3;class bf{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Df(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ca();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Cf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ca(),{heartbeatsToSend:n,unsentEntries:r}=kf(this._heartbeatsCache.heartbeats),i=Pr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ca(){return new Date().toISOString().substring(0,10)}function kf(e,t=Sf){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ua(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ua(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Df{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yd()?vd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Pf(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return aa(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return aa(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function ua(e){return Pr(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(e){ve(new te("platform-logger",t=>new Wd(t),"PRIVATE")),ve(new te("heartbeat",t=>new bf(t),"PRIVATE")),Ct(ss,oa,e),Ct(ss,oa,"esm2017"),Ct("fire-js","")}Nf("");var Vf="firebase",Of="10.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ct(Vf,Of,"app");var Mf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},g,Fs=Fs||{},A=Mf||self;function Jr(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Un(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Lf(e){return Object.prototype.hasOwnProperty.call(e,Fi)&&e[Fi]||(e[Fi]=++xf)}var Fi="closure_uid_"+(1e9*Math.random()>>>0),xf=0;function Uf(e,t,n){return e.call.apply(e.bind,arguments)}function Ff(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function st(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?st=Uf:st=Ff,st.apply(null,arguments)}function ar(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function X(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function se(){this.s=this.s,this.o=this.o}var Bf=0;se.prototype.s=!1;se.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Bf!=0)&&Lf(this)};se.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const qc=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Bs(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function la(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Jr(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function ot(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}ot.prototype.h=function(){this.defaultPrevented=!0};var $f=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{A.addEventListener("test",()=>{},t),A.removeEventListener("test",()=>{},t)}catch{}return e}();function In(e){return/^[\s\xa0]*$/.test(e)}function Zr(){var e=A.navigator;return e&&(e=e.userAgent)?e:""}function At(e){return Zr().indexOf(e)!=-1}function $s(e){return $s[" "](e),e}$s[" "]=function(){};function qf(e,t){var n=Op;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var jf=At("Opera"),Be=At("Trident")||At("MSIE"),jc=At("Edge"),cs=jc||Be,zc=At("Gecko")&&!(Zr().toLowerCase().indexOf("webkit")!=-1&&!At("Edge"))&&!(At("Trident")||At("MSIE"))&&!At("Edge"),zf=Zr().toLowerCase().indexOf("webkit")!=-1&&!At("Edge");function Hc(){var e=A.document;return e?e.documentMode:void 0}var us;t:{var Bi="",$i=function(){var e=Zr();if(zc)return/rv:([^\);]+)(\)|;)/.exec(e);if(jc)return/Edge\/([\d\.]+)/.exec(e);if(Be)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(zf)return/WebKit\/(\S+)/.exec(e);if(jf)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if($i&&(Bi=$i?$i[1]:""),Be){var qi=Hc();if(qi!=null&&qi>parseFloat(Bi)){us=String(qi);break t}}us=Bi}var ls;if(A.document&&Be){var ha=Hc();ls=ha||parseInt(us,10)||void 0}else ls=void 0;var Hf=ls;function wn(e,t){if(ot.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(zc){t:{try{$s(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Wf[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&wn.$.h.call(this)}}X(wn,ot);var Wf={2:"touch",3:"pen",4:"mouse"};wn.prototype.h=function(){wn.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Fn="closure_listenable_"+(1e6*Math.random()|0),Kf=0;function Gf(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++Kf,this.fa=this.ia=!1}function ti(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function qs(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Qf(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Wc(e){const t={};for(const n in e)t[n]=e[n];return t}const da="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Kc(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<da.length;s++)n=da[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function ei(e){this.src=e,this.g={},this.h=0}ei.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=ds(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Gf(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function hs(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=qc(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ti(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function ds(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var js="closure_lm_"+(1e6*Math.random()|0),ji={};function Gc(e,t,n,r,i){if(r&&r.once)return Yc(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Gc(e,t[s],n,r,i);return null}return n=Ws(n),e&&e[Fn]?e.O(t,n,Un(r)?!!r.capture:!!r,i):Qc(e,t,n,!1,r,i)}function Qc(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Un(i)?!!i.capture:!!i,a=Hs(e);if(a||(e[js]=a=new ei(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=Yf(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)$f||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Jc(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Yf(){function e(n){return t.call(e.src,e.listener,n)}const t=Xf;return e}function Yc(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Yc(e,t[s],n,r,i);return null}return n=Ws(n),e&&e[Fn]?e.P(t,n,Un(r)?!!r.capture:!!r,i):Qc(e,t,n,!0,r,i)}function Xc(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Xc(e,t[s],n,r,i);else r=Un(r)?!!r.capture:!!r,n=Ws(n),e&&e[Fn]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=ds(s,n,r,i),-1<n&&(ti(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=Hs(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ds(t,n,r,i)),(n=-1<e?t[e]:null)&&zs(n))}function zs(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Fn])hs(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Jc(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Hs(t))?(hs(n,e),n.h==0&&(n.src=null,t[js]=null)):ti(e)}}}function Jc(e){return e in ji?ji[e]:ji[e]="on"+e}function Xf(e,t){if(e.fa)e=!0;else{t=new wn(t,this);var n=e.listener,r=e.la||e.src;e.ia&&zs(e),e=n.call(r,t)}return e}function Hs(e){return e=e[js],e instanceof ei?e:null}var zi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ws(e){return typeof e=="function"?e:(e[zi]||(e[zi]=function(t){return e.handleEvent(t)}),e[zi])}function Y(){se.call(this),this.i=new ei(this),this.S=this,this.J=null}X(Y,se);Y.prototype[Fn]=!0;Y.prototype.removeEventListener=function(e,t,n,r){Xc(this,e,t,n,r)};function tt(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new ot(t,e);else if(t instanceof ot)t.target=t.target||e;else{var i=t;t=new ot(r,e),Kc(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=cr(o,r,!0,t)&&i}if(o=t.g=e,i=cr(o,r,!0,t)&&i,i=cr(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=cr(o,r,!1,t)&&i}Y.prototype.N=function(){if(Y.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ti(n[r]);delete e.g[t],e.h--}}this.J=null};Y.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};Y.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function cr(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&hs(e.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Ks=A.JSON.stringify;class Jf{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Zf(){var e=Gs;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class tp{constructor(){this.h=this.g=null}add(t,n){const r=Zc.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Zc=new Jf(()=>new ep,e=>e.reset());class ep{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function np(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function rp(e){A.setTimeout(()=>{throw e},0)}let An,Rn=!1,Gs=new tp,tu=()=>{const e=A.Promise.resolve(void 0);An=()=>{e.then(ip)}};var ip=()=>{for(var e;e=Zf();){try{e.h.call(e.g)}catch(n){rp(n)}var t=Zc;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Rn=!1};function ni(e,t){Y.call(this),this.h=e||1,this.g=t||A,this.j=st(this.qb,this),this.l=Date.now()}X(ni,Y);g=ni.prototype;g.ga=!1;g.T=null;g.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),tt(this,"tick"),this.ga&&(Qs(this),this.start()))}};g.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Qs(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}g.N=function(){ni.$.N.call(this),Qs(this),delete this.g};function Ys(e,t,n){if(typeof e=="function")n&&(e=st(e,n));else if(e&&typeof e.handleEvent=="function")e=st(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:A.setTimeout(e,t||0)}function eu(e){e.g=Ys(()=>{e.g=null,e.i&&(e.i=!1,eu(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class sp extends se{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:eu(this)}N(){super.N(),this.g&&(A.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pn(e){se.call(this),this.h=e,this.g={}}X(Pn,se);var fa=[];function nu(e,t,n,r){Array.isArray(n)||(n&&(fa[0]=n.toString()),n=fa);for(var i=0;i<n.length;i++){var s=Gc(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function ru(e){qs(e.g,function(t,n){this.g.hasOwnProperty(n)&&zs(t)},e),e.g={}}Pn.prototype.N=function(){Pn.$.N.call(this),ru(this)};Pn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ri(){this.g=!0}ri.prototype.Ea=function(){this.g=!1};function op(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function ap(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function Oe(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+up(e,n)+(r?" "+r:"")})}function cp(e,t){e.info(function(){return"TIMEOUT: "+t})}ri.prototype.info=function(){};function up(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ks(n)}catch{return t}}var Pe={},pa=null;function ii(){return pa=pa||new Y}Pe.Ta="serverreachability";function iu(e){ot.call(this,Pe.Ta,e)}X(iu,ot);function Sn(e){const t=ii();tt(t,new iu(t))}Pe.STAT_EVENT="statevent";function su(e,t){ot.call(this,Pe.STAT_EVENT,e),this.stat=t}X(su,ot);function dt(e){const t=ii();tt(t,new su(t,e))}Pe.Ua="timingevent";function ou(e,t){ot.call(this,Pe.Ua,e),this.size=t}X(ou,ot);function Bn(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return A.setTimeout(function(){e()},t)}var si={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},au={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Xs(){}Xs.prototype.h=null;function ma(e){return e.h||(e.h=e.i())}function cu(){}var $n={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Js(){ot.call(this,"d")}X(Js,ot);function Zs(){ot.call(this,"c")}X(Zs,ot);var fs;function oi(){}X(oi,Xs);oi.prototype.g=function(){return new XMLHttpRequest};oi.prototype.i=function(){return{}};fs=new oi;function qn(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Pn(this),this.P=lp,e=cs?125:void 0,this.V=new ni(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new uu}function uu(){this.i=null,this.g="",this.h=!1}var lp=45e3,ps={},br={};g=qn.prototype;g.setTimeout=function(e){this.P=e};function ms(e,t,n){e.L=1,e.v=ci(Ft(t)),e.s=n,e.S=!0,lu(e,null)}function lu(e,t){e.G=Date.now(),jn(e),e.A=Ft(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),yu(n.i,"t",r),e.C=0,n=e.l.J,e.h=new uu,e.g=Fu(e.l,n?t:null,!e.s),0<e.O&&(e.M=new sp(st(e.Pa,e,e.g),e.O)),nu(e.U,e.g,"readystatechange",e.nb),t=e.I?Wc(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Sn(),op(e.j,e.u,e.A,e.m,e.W,e.s)}g.nb=function(e){e=e.target;const t=this.M;t&&Rt(e)==3?t.l():this.Pa(e)};g.Pa=function(e){try{if(e==this.g)t:{const l=Rt(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||cs||this.g&&(this.h.h||this.g.ja()||va(this.g)))){this.J||l!=4||t==7||(t==8||0>=h?Sn(3):Sn(2)),ai(this);var n=this.g.da();this.ca=n;e:if(hu(this)){var r=va(this.g);e="";var i=r.length,s=Rt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){he(this),fn(this);var o="";break e}this.h.i=new A.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,ap(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!In(a)){var u=a;break e}}u=null}if(n=u)Oe(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gs(this,n);else{this.i=!1,this.o=3,dt(12),he(this),fn(this);break t}}this.S?(du(this,l,o),cs&&this.i&&l==3&&(nu(this.U,this.V,"tick",this.mb),this.V.start())):(Oe(this.j,this.m,o,null),gs(this,o)),l==4&&he(this),this.i&&!this.J&&(l==4?Mu(this.l,this):(this.i=!1,jn(this)))}else Dp(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,dt(12)):(this.o=0,dt(13)),he(this),fn(this)}}}catch{}finally{}};function hu(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function du(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=hp(e,n),i==br){t==4&&(e.o=4,dt(14),r=!1),Oe(e.j,e.m,null,"[Incomplete Response]");break}else if(i==ps){e.o=4,dt(15),Oe(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else Oe(e.j,e.m,i,null),gs(e,i);hu(e)&&i!=br&&i!=ps&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,dt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),so(t),t.M=!0,dt(11))):(Oe(e.j,e.m,n,"[Invalid Chunked Response]"),he(e),fn(e))}g.mb=function(){if(this.g){var e=Rt(this.g),t=this.g.ja();this.C<t.length&&(ai(this),du(this,e,t),this.i&&e!=4&&jn(this))}};function hp(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?br:(n=Number(t.substring(n,r)),isNaN(n)?ps:(r+=1,r+n>t.length?br:(t=t.slice(r,r+n),e.C=r+n,t)))}g.cancel=function(){this.J=!0,he(this)};function jn(e){e.Y=Date.now()+e.P,fu(e,e.P)}function fu(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Bn(st(e.lb,e),t)}function ai(e){e.B&&(A.clearTimeout(e.B),e.B=null)}g.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(cp(this.j,this.A),this.L!=2&&(Sn(),dt(17)),he(this),this.o=2,fn(this)):fu(this,this.Y-e)};function fn(e){e.l.H==0||e.J||Mu(e.l,e)}function he(e){ai(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Qs(e.V),ru(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function gs(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||_s(n.i,e))){if(!e.K&&_s(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Nr(n),di(n);else break t;io(n),dt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Bn(st(n.ib,n),6e3));if(1>=Tu(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else de(n,11)}else if((e.K||n.g==e)&&Nr(n),!In(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const l=u[3];l!=null&&(n.ra=l,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=e.g;if(f){const v=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(to(s,s.h),s.h=null))}if(r.F){const I=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(r.Da=I,x(r.I,r.F,I))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Uu(r,r.J?r.pa:null,r.Y),o.K){Iu(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(ai(a),jn(a)),r.g=o}else Vu(r);0<n.j.length&&fi(n)}else u[0]!="stop"&&u[0]!="close"||de(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?de(n,7):ro(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Sn(4)}catch{}}function dp(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Jr(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function fp(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Jr(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function pu(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Jr(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=fp(e),r=dp(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var mu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pp(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function me(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof me){this.h=e.h,kr(this,e.j),this.s=e.s,this.g=e.g,Dr(this,e.m),this.l=e.l;var t=e.i,n=new Cn;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),ga(this,n),this.o=e.o}else e&&(t=String(e).match(mu))?(this.h=!1,kr(this,t[1]||"",!0),this.s=cn(t[2]||""),this.g=cn(t[3]||"",!0),Dr(this,t[4]),this.l=cn(t[5]||"",!0),ga(this,t[6]||"",!0),this.o=cn(t[7]||"")):(this.h=!1,this.i=new Cn(null,this.h))}me.prototype.toString=function(){var e=[],t=this.j;t&&e.push(un(t,_a,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(un(t,_a,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(un(n,n.charAt(0)=="/"?_p:gp,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",un(n,vp)),e.join("")};function Ft(e){return new me(e)}function kr(e,t,n){e.j=n?cn(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Dr(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function ga(e,t,n){t instanceof Cn?(e.i=t,Ep(e.i,e.h)):(n||(t=un(t,yp)),e.i=new Cn(t,e.h))}function x(e,t,n){e.i.set(t,n)}function ci(e){return x(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function cn(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function un(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,mp),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function mp(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var _a=/[#\/\?@]/g,gp=/[#\?:]/g,_p=/[#\?]/g,yp=/[#\?@]/g,vp=/#/g;function Cn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function oe(e){e.g||(e.g=new Map,e.h=0,e.i&&pp(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}g=Cn.prototype;g.add=function(e,t){oe(this),this.i=null,e=Xe(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function gu(e,t){oe(e),t=Xe(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function _u(e,t){return oe(e),t=Xe(e,t),e.g.has(t)}g.forEach=function(e,t){oe(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};g.ta=function(){oe(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};g.Z=function(e){oe(this);let t=[];if(typeof e=="string")_u(this,e)&&(t=t.concat(this.g.get(Xe(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};g.set=function(e,t){return oe(this),this.i=null,e=Xe(this,e),_u(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};g.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function yu(e,t,n){gu(e,t),0<n.length&&(e.i=null,e.g.set(Xe(e,t),Bs(n)),e.h+=n.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function Xe(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Ep(e,t){t&&!e.j&&(oe(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(gu(this,r),yu(this,i,n))},e)),e.j=t}var Tp=class{constructor(e,t){this.g=e,this.map=t}};function vu(e){this.l=e||Ip,A.PerformanceNavigationTiming?(e=A.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(A.g&&A.g.Ka&&A.g.Ka()&&A.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ip=10;function Eu(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Tu(e){return e.h?1:e.g?e.g.size:0}function _s(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function to(e,t){e.g?e.g.add(t):e.h=t}function Iu(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}vu.prototype.cancel=function(){if(this.i=wu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function wu(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Bs(e.i)}var wp=class{stringify(e){return A.JSON.stringify(e,void 0)}parse(e){return A.JSON.parse(e,void 0)}};function Ap(){this.g=new wp}function Rp(e,t,n){const r=n||"";try{pu(e,function(i,s){let o=i;Un(i)&&(o=Ks(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Pp(e,t){const n=new ri;if(A.Image){const r=new Image;r.onload=ar(ur,n,r,"TestLoadImage: loaded",!0,t),r.onerror=ar(ur,n,r,"TestLoadImage: error",!1,t),r.onabort=ar(ur,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=ar(ur,n,r,"TestLoadImage: timeout",!1,t),A.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function ur(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function ui(e){this.l=e.fc||null,this.j=e.ob||!1}X(ui,Xs);ui.prototype.g=function(){return new li(this.l,this.j)};ui.prototype.i=function(e){return function(){return e}}({});function li(e,t){Y.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=eo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}X(li,Y);var eo=0;g=li.prototype;g.open=function(e,t){if(this.readyState!=eo)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,bn(this)};g.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||A).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,zn(this)),this.readyState=eo};g.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,bn(this)),this.g&&(this.readyState=3,bn(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof A.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Au(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Au(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}g.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?zn(this):bn(this),this.readyState==3&&Au(this)}};g.Za=function(e){this.g&&(this.response=this.responseText=e,zn(this))};g.Ya=function(e){this.g&&(this.response=e,zn(this))};g.ka=function(){this.g&&zn(this)};function zn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,bn(e)}g.setRequestHeader=function(e,t){this.v.append(e,t)};g.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function bn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(li.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Sp=A.JSON.parse;function q(e){Y.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Ru,this.L=this.M=!1}X(q,Y);var Ru="",Cp=/^https?$/i,bp=["POST","PUT"];g=q.prototype;g.Oa=function(e){this.M=e};g.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():fs.g(),this.C=this.u?ma(this.u):ma(fs),this.g.onreadystatechange=st(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){ya(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=A.FormData&&e instanceof A.FormData,!(0<=qc(bp,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Cu(this),0<this.B&&((this.L=kp(this.g))?(this.g.timeout=this.B,this.g.ontimeout=st(this.ua,this)):this.A=Ys(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){ya(this,s)}};function kp(e){return Be&&typeof e.timeout=="number"&&e.ontimeout!==void 0}g.ua=function(){typeof Fs<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,tt(this,"timeout"),this.abort(8))};function ya(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Pu(e),hi(e)}function Pu(e){e.F||(e.F=!0,tt(e,"complete"),tt(e,"error"))}g.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,tt(this,"complete"),tt(this,"abort"),hi(this))};g.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),hi(this,!0)),q.$.N.call(this)};g.La=function(){this.s||(this.G||this.v||this.l?Su(this):this.kb())};g.kb=function(){Su(this)};function Su(e){if(e.h&&typeof Fs<"u"&&(!e.C[1]||Rt(e)!=4||e.da()!=2)){if(e.v&&Rt(e)==4)Ys(e.La,0,e);else if(tt(e,"readystatechange"),Rt(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(mu)[1]||null;!i&&A.self&&A.self.location&&(i=A.self.location.protocol.slice(0,-1)),r=!Cp.test(i?i.toLowerCase():"")}n=r}if(n)tt(e,"complete"),tt(e,"success");else{e.m=6;try{var s=2<Rt(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",Pu(e)}}finally{hi(e)}}}}function hi(e,t){if(e.g){Cu(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||tt(e,"ready");try{n.onreadystatechange=r}catch{}}}function Cu(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(A.clearTimeout(e.A),e.A=null)}g.isActive=function(){return!!this.g};function Rt(e){return e.g?e.g.readyState:0}g.da=function(){try{return 2<Rt(this)?this.g.status:-1}catch{return-1}};g.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Sp(t)}};function va(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Ru:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function Dp(e){const t={};e=(e.g&&2<=Rt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(In(e[r]))continue;var n=np(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}Qf(t,function(r){return r.join(", ")})}g.Ia=function(){return this.m};g.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function bu(e){let t="";return qs(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function no(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=bu(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):x(e,t,n))}function rn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function ku(e){this.Ga=0,this.j=[],this.l=new ri,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=rn("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=rn("baseRetryDelayMs",5e3,e),this.hb=rn("retryDelaySeedMs",1e4,e),this.eb=rn("forwardChannelMaxRetries",2,e),this.xa=rn("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new vu(e&&e.concurrentRequestLimit),this.Ja=new Ap,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}g=ku.prototype;g.ra=8;g.H=1;function ro(e){if(Du(e),e.H==3){var t=e.W++,n=Ft(e.I);if(x(n,"SID",e.K),x(n,"RID",t),x(n,"TYPE","terminate"),Hn(e,n),t=new qn(e,e.l,t),t.L=2,t.v=ci(Ft(n)),n=!1,A.navigator&&A.navigator.sendBeacon)try{n=A.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&A.Image&&(new Image().src=t.v,n=!0),n||(t.g=Fu(t.l,null),t.g.ha(t.v)),t.G=Date.now(),jn(t)}xu(e)}function di(e){e.g&&(so(e),e.g.cancel(),e.g=null)}function Du(e){di(e),e.u&&(A.clearTimeout(e.u),e.u=null),Nr(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&A.clearTimeout(e.m),e.m=null)}function fi(e){if(!Eu(e.i)&&!e.m){e.m=!0;var t=e.Na;An||tu(),Rn||(An(),Rn=!0),Gs.add(t,e),e.C=0}}function Np(e,t){return Tu(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Bn(st(e.Na,e,t),Lu(e,e.C)),e.C++,!0)}g.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new qn(this,this.l,e);let s=this.s;if(this.U&&(s?(s=Wc(s),Kc(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Nu(this,i,t),n=Ft(this.I),x(n,"RID",e),x(n,"CVER",22),this.F&&x(n,"X-HTTP-Session-Id",this.F),Hn(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(bu(s)))+"&"+t:this.o&&no(n,this.o,s)),to(this.i,i),this.bb&&x(n,"TYPE","init"),this.P?(x(n,"$req",t),x(n,"SID","null"),i.aa=!0,ms(i,n,null)):ms(i,n,t),this.H=2}}else this.H==3&&(e?Ea(this,e):this.j.length==0||Eu(this.i)||Ea(this))};function Ea(e,t){var n;t?n=t.m:n=e.W++;const r=Ft(e.I);x(r,"SID",e.K),x(r,"RID",n),x(r,"AID",e.V),Hn(e,r),e.o&&e.s&&no(r,e.o,e.s),n=new qn(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Nu(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),to(e.i,n),ms(n,r,t)}function Hn(e,t){e.na&&qs(e.na,function(n,r){x(t,r,n)}),e.h&&pu({},function(n,r){x(t,r,n)})}function Nu(e,t,n){n=Math.min(e.j.length,n);var r=e.h?st(e.h.Va,e.h,e):null;t:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let u=i[c].g;const l=i[c].map;if(u-=s,0>u)s=Math.max(0,i[c].g-100),a=!1;else try{Rp(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function Vu(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;An||tu(),Rn||(An(),Rn=!0),Gs.add(t,e),e.A=0}}function io(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Bn(st(e.Ma,e),Lu(e,e.A)),e.A++,!0)}g.Ma=function(){if(this.u=null,Ou(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Bn(st(this.jb,this),e)}};g.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,dt(10),di(this),Ou(this))};function so(e){e.B!=null&&(A.clearTimeout(e.B),e.B=null)}function Ou(e){e.g=new qn(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Ft(e.wa);x(t,"RID","rpc"),x(t,"SID",e.K),x(t,"AID",e.V),x(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&x(t,"TO",e.qa),x(t,"TYPE","xmlhttp"),Hn(e,t),e.o&&e.s&&no(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=ci(Ft(t)),n.s=null,n.S=!0,lu(n,e)}g.ib=function(){this.v!=null&&(this.v=null,di(this),io(this),dt(19))};function Nr(e){e.v!=null&&(A.clearTimeout(e.v),e.v=null)}function Mu(e,t){var n=null;if(e.g==t){Nr(e),so(e),e.g=null;var r=2}else if(_s(e.i,t))n=t.F,Iu(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=ii(),tt(r,new ou(r,n)),fi(e)}else Vu(e);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&Np(e,t)||r==2&&io(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:de(e,5);break;case 4:de(e,10);break;case 3:de(e,6);break;default:de(e,2)}}}function Lu(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function de(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=st(e.pb,e);n||(n=new me("//www.google.com/images/cleardot.gif"),A.location&&A.location.protocol=="http"||kr(n,"https"),ci(n)),Pp(n.toString(),r)}else dt(2);e.H=0,e.h&&e.h.za(t),xu(e),Du(e)}g.pb=function(e){e?(this.l.info("Successfully pinged google.com"),dt(2)):(this.l.info("Failed to ping google.com"),dt(1))};function xu(e){if(e.H=0,e.ma=[],e.h){const t=wu(e.i);(t.length!=0||e.j.length!=0)&&(la(e.ma,t),la(e.ma,e.j),e.i.i.length=0,Bs(e.j),e.j.length=0),e.h.ya()}}function Uu(e,t,n){var r=n instanceof me?Ft(n):new me(n);if(r.g!="")t&&(r.g=t+"."+r.g),Dr(r,r.m);else{var i=A.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new me(null);r&&kr(s,r),t&&(s.g=t),i&&Dr(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&x(r,n,t),x(r,"VER",e.ra),Hn(e,r),r}function Fu(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new q(new ui({ob:!0})):new q(e.va),t.Oa(e.J),t}g.isActive=function(){return!!this.h&&this.h.isActive(this)};function Bu(){}g=Bu.prototype;g.Ba=function(){};g.Aa=function(){};g.za=function(){};g.ya=function(){};g.isActive=function(){return!0};g.Va=function(){};function Vr(){if(Be&&!(10<=Number(Hf)))throw Error("Environmental error: no available transport.")}Vr.prototype.g=function(e,t){return new Et(e,t)};function Et(e,t){Y.call(this),this.g=new ku(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!In(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!In(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Je(this)}X(Et,Y);Et.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;dt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Uu(e,null,e.Y),fi(e)};Et.prototype.close=function(){ro(this.g)};Et.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ks(e),e=n);t.j.push(new Tp(t.fb++,e)),t.H==3&&fi(t)};Et.prototype.N=function(){this.g.h=null,delete this.j,ro(this.g),delete this.g,Et.$.N.call(this)};function $u(e){Js.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}X($u,Js);function qu(){Zs.call(this),this.status=1}X(qu,Zs);function Je(e){this.g=e}X(Je,Bu);Je.prototype.Ba=function(){tt(this.g,"a")};Je.prototype.Aa=function(e){tt(this.g,new $u(e))};Je.prototype.za=function(e){tt(this.g,new qu)};Je.prototype.ya=function(){tt(this.g,"b")};function Vp(){this.blockSize=-1}function It(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}X(It,Vp);It.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Hi(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}It.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)Hi(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){Hi(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){Hi(this,r),i=0;break}}this.h=i,this.i+=t};It.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function V(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var Op={};function oo(e){return-128<=e&&128>e?qf(e,function(t){return new V([t|0],0>t?-1:0)}):new V([e|0],0>e?-1:0)}function Pt(e){if(isNaN(e)||!isFinite(e))return Me;if(0>e)return Z(Pt(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=ys;return new V(t,0)}function ju(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return Z(ju(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Pt(Math.pow(t,8)),r=Me,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=Pt(Math.pow(t,s)),r=r.R(s).add(Pt(o))):(r=r.R(n),r=r.add(Pt(o)))}return r}var ys=4294967296,Me=oo(0),vs=oo(1),Ta=oo(16777216);g=V.prototype;g.ea=function(){if(Tt(this))return-Z(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:ys+r)*t,t*=ys}return e};g.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Mt(this))return"0";if(Tt(this))return"-"+Z(this).toString(e);for(var t=Pt(Math.pow(e,6)),n=this,r="";;){var i=Mr(n,t).g;n=Or(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Mt(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};g.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Mt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function Tt(e){return e.h==-1}g.X=function(e){return e=Or(this,e),Tt(e)?-1:Mt(e)?0:1};function Z(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new V(n,~e.h).add(vs)}g.abs=function(){return Tt(this)?Z(this):this};g.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new V(n,n[n.length-1]&-2147483648?-1:0)};function Or(e,t){return e.add(Z(t))}g.R=function(e){if(Mt(this)||Mt(e))return Me;if(Tt(this))return Tt(e)?Z(this).R(Z(e)):Z(Z(this).R(e));if(Tt(e))return Z(this.R(Z(e)));if(0>this.X(Ta)&&0>e.X(Ta))return Pt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,c=e.D(i)&65535;n[2*r+2*i]+=o*c,lr(n,2*r+2*i),n[2*r+2*i+1]+=s*c,lr(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,lr(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,lr(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new V(n,0)};function lr(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function sn(e,t){this.g=e,this.h=t}function Mr(e,t){if(Mt(t))throw Error("division by zero");if(Mt(e))return new sn(Me,Me);if(Tt(e))return t=Mr(Z(e),t),new sn(Z(t.g),Z(t.h));if(Tt(t))return t=Mr(e,Z(t)),new sn(Z(t.g),t.h);if(30<e.g.length){if(Tt(e)||Tt(t))throw Error("slowDivide_ only works with positive integers.");for(var n=vs,r=t;0>=r.X(e);)n=Ia(n),r=Ia(r);var i=De(n,1),s=De(r,1);for(r=De(r,2),n=De(n,2);!Mt(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=De(r,1),n=De(n,1)}return t=Or(e,i.R(t)),new sn(i,t)}for(i=Me;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Pt(n),o=s.R(t);Tt(o)||0<o.X(e);)n-=r,s=Pt(n),o=s.R(t);Mt(s)&&(s=vs),i=i.add(s),e=Or(e,o)}return new sn(i,e)}g.gb=function(e){return Mr(this,e).h};g.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new V(n,this.h&e.h)};g.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new V(n,this.h|e.h)};g.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new V(n,this.h^e.h)};function Ia(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new V(n,e.h)}function De(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new V(i,e.h)}Vr.prototype.createWebChannel=Vr.prototype.g;Et.prototype.send=Et.prototype.u;Et.prototype.open=Et.prototype.m;Et.prototype.close=Et.prototype.close;si.NO_ERROR=0;si.TIMEOUT=8;si.HTTP_ERROR=6;au.COMPLETE="complete";cu.EventType=$n;$n.OPEN="a";$n.CLOSE="b";$n.ERROR="c";$n.MESSAGE="d";Y.prototype.listen=Y.prototype.O;q.prototype.listenOnce=q.prototype.P;q.prototype.getLastError=q.prototype.Sa;q.prototype.getLastErrorCode=q.prototype.Ia;q.prototype.getStatus=q.prototype.da;q.prototype.getResponseJson=q.prototype.Wa;q.prototype.getResponseText=q.prototype.ja;q.prototype.send=q.prototype.ha;q.prototype.setWithCredentials=q.prototype.Oa;It.prototype.digest=It.prototype.l;It.prototype.reset=It.prototype.reset;It.prototype.update=It.prototype.j;V.prototype.add=V.prototype.add;V.prototype.multiply=V.prototype.R;V.prototype.modulo=V.prototype.gb;V.prototype.compare=V.prototype.X;V.prototype.toNumber=V.prototype.ea;V.prototype.toString=V.prototype.toString;V.prototype.getBits=V.prototype.D;V.fromNumber=Pt;V.fromString=ju;var Mp=function(){return new Vr},Lp=function(){return ii()},Wi=si,xp=au,Up=Pe,wa={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},hr=cu,Fp=q,Bp=It,Le=V;const Aa="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ze="10.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee=new Ls("@firebase/firestore");function Ra(){return Ee.logLevel}function E(e,...t){if(Ee.logLevel<=D.DEBUG){const n=t.map(ao);Ee.debug(`Firestore (${Ze}): ${e}`,...n)}}function Bt(e,...t){if(Ee.logLevel<=D.ERROR){const n=t.map(ao);Ee.error(`Firestore (${Ze}): ${e}`,...n)}}function $e(e,...t){if(Ee.logLevel<=D.WARN){const n=t.map(ao);Ee.warn(`Firestore (${Ze}): ${e}`,...n)}}function ao(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e="Unexpected state"){const t=`FIRESTORE (${Ze}) INTERNAL ASSERTION FAILED: `+e;throw Bt(t),new Error(t)}function F(e,t){e||w()}function S(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _ extends Ot{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class $p{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class qp{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class jp{constructor(t){this.t=t,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new Ut;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ut,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{E("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(E("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ut)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(E("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(F(typeof r.accessToken=="string"),new zu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return F(t===null||typeof t=="string"),new nt(t)}}class zp{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Hp{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new zp(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wp{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Kp{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&E("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,E("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{E("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):E("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(F(typeof n.token=="string"),this.R=n.token,new Wp(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Gp(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function N(e,t){return e<t?-1:e>t?1:0}function qe(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new _(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new _(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new _(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new _(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return G.fromMillis(Date.now())}static fromDate(t){return G.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new G(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?N(this.nanoseconds,t.nanoseconds):N(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.timestamp=t}static fromTimestamp(t){return new R(t)}static min(){return new R(new G(0,0))}static max(){return new R(new G(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(t,n,r){n===void 0?n=0:n>t.length&&w(),r===void 0?r=t.length-n:r>t.length-n&&w(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return kn.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof kn?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class U extends kn{construct(t,n,r){return new U(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new _(p.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new U(n)}static emptyPath(){return new U([])}}const Qp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends kn{construct(t,n,r){return new it(t,n,r)}static isValidIdentifier(t){return Qp.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new _(p.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new _(p.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new _(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new _(p.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new it(n)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t){this.path=t}static fromPath(t){return new T(U.fromString(t))}static fromName(t){return new T(U.fromString(t).popFirst(5))}static empty(){return new T(U.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&U.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return U.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new T(new U(t.slice()))}}function Yp(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=R.fromTimestamp(r===1e9?new G(n+1,0):new G(n,r));return new ee(i,T.empty(),t)}function Xp(e){return new ee(e.readTime,e.key,-1)}class ee{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new ee(R.min(),T.empty(),-1)}static max(){return new ee(R.max(),T.empty(),-1)}}function Jp(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=T.comparator(e.documentKey,t.documentKey),n!==0?n:N(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wn(e){if(e.code!==p.FAILED_PRECONDITION||e.message!==Zp)throw e;E("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&w(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new m((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof m?n:m.resolve(n)}catch(n){return m.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):m.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):m.reject(n)}static resolve(t){return new m((n,r)=>{n(t)})}static reject(t){return new m((n,r)=>{r(t)})}static waitFor(t){return new m((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(t){let n=m.resolve(!1);for(const r of t)n=n.next(i=>i?m.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new m((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;n(t[u]).next(l=>{o[u]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(t,n){return new m((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function Kn(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}co.ae=-1;function pi(e){return e==null}function Lr(e){return e===0&&1/e==-1/0}function em(e){return typeof e=="number"&&Number.isInteger(e)&&!Lr(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Se(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Wu(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t,n){this.comparator=t,this.root=n||J.EMPTY}insert(t,n){return new $(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,J.BLACK,null,null))}remove(t){return new $(this.comparator,this.root.remove(t,this.comparator).copy(null,null,J.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new dr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new dr(this.root,t,this.comparator,!1)}getReverseIterator(){return new dr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new dr(this.root,t,this.comparator,!0)}}class dr{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class J{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??J.RED,this.left=i??J.EMPTY,this.right=s??J.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new J(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return J.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return J.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,J.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,J.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw w();const t=this.left.check();if(t!==this.right.check())throw w();return t+(this.isRed()?0:1)}}J.EMPTY=null,J.RED=!0,J.BLACK=!1;J.EMPTY=new class{constructor(){this.size=0}get key(){throw w()}get value(){throw w()}get color(){throw w()}get left(){throw w()}get right(){throw w()}copy(t,n,r,i,s){return this}insert(t,n,r){return new J(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t){this.comparator=t,this.data=new $(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Sa(this.data.getIterator())}getIteratorFrom(t){return new Sa(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof at)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new at(this.comparator);return n.data=t,n}}class Sa{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.fields=t,t.sort(it.comparator)}static empty(){return new gt([])}unionWith(t){let n=new at(it.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new gt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return qe(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Ku("Invalid base64 string: "+s):s}}(t);return new lt(n)}static fromUint8Array(t){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new lt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return N(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const nm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ne(e){if(F(!!e),typeof e=="string"){let t=0;const n=nm.exec(e);if(F(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:W(e.seconds),nanos:W(e.nanos)}}function W(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Te(e){return typeof e=="string"?lt.fromBase64String(e):lt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function lo(e){const t=e.mapValue.fields.__previous_value__;return uo(t)?lo(t):t}function Dn(e){const t=ne(e.mapValue.fields.__local_write_time__.timestampValue);return new G(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(t,n,r,i,s,o,a,c,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class Nn{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Nn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Nn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ie(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?uo(e)?4:im(e)?9007199254740991:10:w()}function Nt(e,t){if(e===t)return!0;const n=Ie(e);if(n!==Ie(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Dn(e).isEqual(Dn(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ne(i.timestampValue),a=ne(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return Te(i.bytesValue).isEqual(Te(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return W(i.geoPointValue.latitude)===W(s.geoPointValue.latitude)&&W(i.geoPointValue.longitude)===W(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return W(i.integerValue)===W(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=W(i.doubleValue),a=W(s.doubleValue);return o===a?Lr(o)===Lr(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return qe(e.arrayValue.values||[],t.arrayValue.values||[],Nt);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Pa(o)!==Pa(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Nt(o[c],a[c])))return!1;return!0}(e,t);default:return w()}}function Vn(e,t){return(e.values||[]).find(n=>Nt(n,t))!==void 0}function je(e,t){if(e===t)return 0;const n=Ie(e),r=Ie(t);if(n!==r)return N(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return N(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=W(s.integerValue||s.doubleValue),c=W(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(e,t);case 3:return Ca(e.timestampValue,t.timestampValue);case 4:return Ca(Dn(e),Dn(t));case 5:return N(e.stringValue,t.stringValue);case 6:return function(s,o){const a=Te(s),c=Te(o);return a.compareTo(c)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const l=N(a[u],c[u]);if(l!==0)return l}return N(a.length,c.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=N(W(s.latitude),W(o.latitude));return a!==0?a:N(W(s.longitude),W(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let u=0;u<a.length&&u<c.length;++u){const l=je(a[u],c[u]);if(l)return l}return N(a.length,c.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===fr.mapValue&&o===fr.mapValue)return 0;if(s===fr.mapValue)return 1;if(o===fr.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),u=o.fields||{},l=Object.keys(u);c.sort(),l.sort();for(let h=0;h<c.length&&h<l.length;++h){const d=N(c[h],l[h]);if(d!==0)return d;const f=je(a[c[h]],u[l[h]]);if(f!==0)return f}return N(c.length,l.length)}(e.mapValue,t.mapValue);default:throw w()}}function Ca(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return N(e,t);const n=ne(e),r=ne(t),i=N(n.seconds,r.seconds);return i!==0?i:N(n.nanos,r.nanos)}function ze(e){return Es(e)}function Es(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=ne(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Te(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return T.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Es(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Es(n.fields[o])}`;return i+"}"}(e.mapValue):w()}function ba(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Ts(e){return!!e&&"integerValue"in e}function ho(e){return!!e&&"arrayValue"in e}function ka(e){return!!e&&"nullValue"in e}function Da(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function yr(e){return!!e&&"mapValue"in e}function pn(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Se(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=pn(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=pn(e.arrayValue.values[n]);return t}return Object.assign({},e)}function im(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(t){this.value=t}static empty(){return new ft({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!yr(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=pn(n)}setAll(t){let n=it.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=pn(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());yr(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Nt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];yr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){Se(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new ft(pn(this.value))}}function Gu(e){const t=[];return Se(e.fields,(n,r)=>{const i=new it([n]);if(yr(r)){const s=Gu(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new gt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new rt(t,0,R.min(),R.min(),R.min(),ft.empty(),0)}static newFoundDocument(t,n,r,i){return new rt(t,1,n,R.min(),r,i,0)}static newNoDocument(t,n){return new rt(t,2,n,R.min(),R.min(),ft.empty(),0)}static newUnknownDocument(t,n){return new rt(t,3,n,R.min(),R.min(),ft.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(R.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ft.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=R.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof rt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(t,n){this.position=t,this.inclusive=n}}function Na(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=T.comparator(T.fromName(o.referenceValue),n.key):r=je(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Va(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Nt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(t,n="asc"){this.field=t,this.dir=n}}function sm(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{}class K extends Qu{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new am(t,n,r):n==="array-contains"?new lm(t,r):n==="in"?new hm(t,r):n==="not-in"?new dm(t,r):n==="array-contains-any"?new fm(t,r):new K(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new cm(t,r):new um(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(je(n,this.value)):n!==null&&Ie(this.value)===Ie(n)&&this.matchesComparison(je(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return w()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class wt extends Qu{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new wt(t,n)}matches(t){return Yu(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le(n=>n.isInequality());return t!==null?t.field:null}le(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function Yu(e){return e.op==="and"}function Xu(e){return om(e)&&Yu(e)}function om(e){for(const t of e.filters)if(t instanceof wt)return!1;return!0}function Is(e){if(e instanceof K)return e.field.canonicalString()+e.op.toString()+ze(e.value);if(Xu(e))return e.filters.map(t=>Is(t)).join(",");{const t=e.filters.map(n=>Is(n)).join(",");return`${e.op}(${t})`}}function Ju(e,t){return e instanceof K?function(r,i){return i instanceof K&&r.op===i.op&&r.field.isEqual(i.field)&&Nt(r.value,i.value)}(e,t):e instanceof wt?function(r,i){return i instanceof wt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Ju(o,i.filters[a]),!0):!1}(e,t):void w()}function Zu(e){return e instanceof K?function(n){return`${n.field.canonicalString()} ${n.op} ${ze(n.value)}`}(e):e instanceof wt?function(n){return n.op.toString()+" {"+n.getFilters().map(Zu).join(" ,")+"}"}(e):"Filter"}class am extends K{constructor(t,n,r){super(t,n,r),this.key=T.fromName(r.referenceValue)}matches(t){const n=T.comparator(t.key,this.key);return this.matchesComparison(n)}}class cm extends K{constructor(t,n){super(t,"in",n),this.keys=tl("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class um extends K{constructor(t,n){super(t,"not-in",n),this.keys=tl("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function tl(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>T.fromName(r.referenceValue))}class lm extends K{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return ho(n)&&Vn(n.arrayValue,this.value)}}class hm extends K{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Vn(this.value.arrayValue,n)}}class dm extends K{constructor(t,n){super(t,"not-in",n)}matches(t){if(Vn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Vn(this.value.arrayValue,n)}}class fm extends K{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!ho(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Vn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function Oa(e,t=null,n=[],r=[],i=null,s=null,o=null){return new pm(e,t,n,r,i,s,o)}function fo(e){const t=S(e);if(t.he===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Is(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),pi(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>ze(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>ze(r)).join(",")),t.he=n}return t.he}function po(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!sm(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Ju(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Va(e.startAt,t.startAt)&&Va(e.endAt,t.endAt)}function ws(e){return T.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.Te=null,this.startAt,this.endAt}}function mm(e,t,n,r,i,s,o,a){return new Gn(e,t,n,r,i,s,o,a)}function mi(e){return new Gn(e)}function Ma(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function el(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function mo(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function nl(e){return e.collectionGroup!==null}function gn(e){const t=S(e);if(t.Pe===null){t.Pe=[];const n=mo(t),r=el(t);if(n!==null&&r===null)n.isKeyField()||t.Pe.push(new mn(n)),t.Pe.push(new mn(it.keyField(),"asc"));else{let i=!1;for(const s of t.explicitOrderBy)t.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new mn(it.keyField(),s))}}}return t.Pe}function $t(e){const t=S(e);return t.Ie||(t.Ie=gm(t,gn(e))),t.Ie}function gm(e,t){if(e.limitType==="F")return Oa(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new mn(i.field,s)});const n=e.endAt?new xr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new xr(e.startAt.position,e.startAt.inclusive):null;return Oa(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function As(e,t){t.getFirstInequalityField(),mo(e);const n=e.filters.concat([t]);return new Gn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Ur(e,t,n){return new Gn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function gi(e,t){return po($t(e),$t(t))&&e.limitType===t.limitType}function rl(e){return`${fo($t(e))}|lt:${e.limitType}`}function Rs(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Zu(i)).join(", ")}]`),pi(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ze(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ze(i)).join(",")),`Target(${r})`}($t(e))}; limitType=${e.limitType})`}function _i(e,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):T.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(const s of gn(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(o,a,c){const u=Na(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,gn(r),i)||r.endAt&&!function(o,a,c){const u=Na(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,gn(r),i))}(e,t)}function _m(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function il(e){return(t,n)=>{let r=!1;for(const i of gn(e)){const s=ym(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function ym(e,t,n){const r=e.field.isKeyField()?T.comparator(t.key,n.key):function(s,o,a){const c=o.data.field(s),u=a.data.field(s);return c!==null&&u!==null?je(c,u):w()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return w()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Se(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return Wu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm=new $(T.comparator);function qt(){return vm}const sl=new $(T.comparator);function ln(...e){let t=sl;for(const n of e)t=t.insert(n.key,n);return t}function ol(e){let t=sl;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function fe(){return _n()}function al(){return _n()}function _n(){return new tn(e=>e.toString(),(e,t)=>e.isEqual(t))}const Em=new $(T.comparator),Tm=new at(T.comparator);function C(...e){let t=Tm;for(const n of e)t=t.add(n);return t}const Im=new at(N);function wm(){return Im}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Lr(t)?"-0":t}}function ul(e){return{integerValue:""+e}}function Am(e,t){return em(t)?ul(t):cl(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(){this._=void 0}}function Rm(e,t,n){return e instanceof Fr?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&uo(s)&&(s=lo(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof He?hl(e,t):e instanceof We?dl(e,t):function(i,s){const o=ll(i,s),a=La(o)+La(i.Ee);return Ts(o)&&Ts(i.Ee)?ul(a):cl(i.serializer,a)}(e,t)}function Pm(e,t,n){return e instanceof He?hl(e,t):e instanceof We?dl(e,t):n}function ll(e,t){return e instanceof Br?function(r){return Ts(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class Fr extends yi{}class He extends yi{constructor(t){super(),this.elements=t}}function hl(e,t){const n=fl(t);for(const r of e.elements)n.some(i=>Nt(i,r))||n.push(r);return{arrayValue:{values:n}}}class We extends yi{constructor(t){super(),this.elements=t}}function dl(e,t){let n=fl(t);for(const r of e.elements)n=n.filter(i=>!Nt(i,r));return{arrayValue:{values:n}}}class Br extends yi{constructor(t,n){super(),this.serializer=t,this.Ee=n}}function La(e){return W(e.integerValue||e.doubleValue)}function fl(e){return ho(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(t,n){this.field=t,this.transform=n}}function Sm(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof He&&i instanceof He||r instanceof We&&i instanceof We?qe(r.elements,i.elements,Nt):r instanceof Br&&i instanceof Br?Nt(r.Ee,i.Ee):r instanceof Fr&&i instanceof Fr}(e.transform,t.transform)}class Cm{constructor(t,n){this.version=t,this.transformResults=n}}class yt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new yt}static exists(t){return new yt(void 0,t)}static updateTime(t){return new yt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function vr(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class vi{}function ml(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new go(e.key,yt.none()):new Qn(e.key,e.data,yt.none());{const n=e.data,r=ft.empty();let i=new at(it.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ae(e.key,r,new gt(i.toArray()),yt.none())}}function bm(e,t,n){e instanceof Qn?function(i,s,o){const a=i.value.clone(),c=Ua(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof ae?function(i,s,o){if(!vr(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Ua(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(gl(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(e,t,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function yn(e,t,n,r){return e instanceof Qn?function(s,o,a,c){if(!vr(s.precondition,o))return a;const u=s.value.clone(),l=Fa(s.fieldTransforms,c,o);return u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(e,t,n,r):e instanceof ae?function(s,o,a,c){if(!vr(s.precondition,o))return a;const u=Fa(s.fieldTransforms,c,o),l=o.data;return l.setAll(gl(s)),l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(s,o,a){return vr(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function km(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=ll(r.transform,i||null);s!=null&&(n===null&&(n=ft.empty()),n.set(r.field,s))}return n||null}function xa(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&qe(r,i,(s,o)=>Sm(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Qn extends vi{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ae extends vi{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function gl(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Ua(e,t,n){const r=new Map;F(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Pm(o,a,n[i]))}return r}function Fa(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Rm(s,o,t))}return r}class go extends vi{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Dm extends vi{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&bm(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=yn(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=yn(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=al();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=ml(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(R.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),C())}isEqual(t){return this.batchId===t.batchId&&qe(this.mutations,t.mutations,(n,r)=>xa(n,r))&&qe(this.baseMutations,t.baseMutations,(n,r)=>xa(n,r))}}class _o{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){F(t.mutations.length===r.length);let i=function(){return Em}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new _o(t,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H,k;function Mm(e){switch(e){default:return w();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function _l(e){if(e===void 0)return Bt("GRPC error has no .code"),p.UNKNOWN;switch(e){case H.OK:return p.OK;case H.CANCELLED:return p.CANCELLED;case H.UNKNOWN:return p.UNKNOWN;case H.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case H.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case H.INTERNAL:return p.INTERNAL;case H.UNAVAILABLE:return p.UNAVAILABLE;case H.UNAUTHENTICATED:return p.UNAUTHENTICATED;case H.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case H.NOT_FOUND:return p.NOT_FOUND;case H.ALREADY_EXISTS:return p.ALREADY_EXISTS;case H.PERMISSION_DENIED:return p.PERMISSION_DENIED;case H.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case H.ABORTED:return p.ABORTED;case H.OUT_OF_RANGE:return p.OUT_OF_RANGE;case H.UNIMPLEMENTED:return p.UNIMPLEMENTED;case H.DATA_LOSS:return p.DATA_LOSS;default:return w()}}(k=H||(H={}))[k.OK=0]="OK",k[k.CANCELLED=1]="CANCELLED",k[k.UNKNOWN=2]="UNKNOWN",k[k.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",k[k.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",k[k.NOT_FOUND=5]="NOT_FOUND",k[k.ALREADY_EXISTS=6]="ALREADY_EXISTS",k[k.PERMISSION_DENIED=7]="PERMISSION_DENIED",k[k.UNAUTHENTICATED=16]="UNAUTHENTICATED",k[k.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",k[k.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",k[k.ABORTED=10]="ABORTED",k[k.OUT_OF_RANGE=11]="OUT_OF_RANGE",k[k.UNIMPLEMENTED=12]="UNIMPLEMENTED",k[k.INTERNAL=13]="INTERNAL",k[k.UNAVAILABLE=14]="UNAVAILABLE",k[k.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm=new Le([4294967295,4294967295],0);function Ba(e){const t=Lm().encode(e),n=new Bp;return n.update(t),new Uint8Array(n.digest())}function $a(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Le([n,r],0),new Le([i,s],0)]}class yo{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new hn(`Invalid padding: ${n}`);if(r<0)throw new hn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new hn(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new hn(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*t.length-n,this.Re=Le.fromNumber(this.Ae)}Ve(t,n,r){let i=t.add(n.multiply(Le.fromNumber(r)));return i.compare(xm)===1&&(i=new Le([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Re).toNumber()}me(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ae===0)return!1;const n=Ba(t),[r,i]=$a(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);if(!this.me(o))return!1}return!0}static create(t,n,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new yo(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Ae===0)return;const n=Ba(t),[r,i]=$a(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);this.fe(o)}}fe(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class hn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,Yn.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Ei(R.min(),i,new $(N),qt(),C())}}class Yn{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Yn(r,n,C(),C(),C())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(t,n,r,i){this.ge=t,this.removedTargetIds=n,this.key=r,this.pe=i}}class yl{constructor(t,n){this.targetId=t,this.ye=n}}class vl{constructor(t,n,r=lt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class qa{constructor(){this.we=0,this.Se=za(),this.be=lt.EMPTY_BYTE_STRING,this.De=!1,this.ve=!0}get current(){return this.De}get resumeToken(){return this.be}get Ce(){return this.we!==0}get Fe(){return this.ve}Me(t){t.approximateByteSize()>0&&(this.ve=!0,this.be=t)}xe(){let t=C(),n=C(),r=C();return this.Se.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:w()}}),new Yn(this.be,this.De,t,n,r)}Oe(){this.ve=!1,this.Se=za()}Ne(t,n){this.ve=!0,this.Se=this.Se.insert(t,n)}Be(t){this.ve=!0,this.Se=this.Se.remove(t)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.ve=!0,this.De=!0}}class Um{constructor(t){this.Qe=t,this.Ke=new Map,this.$e=qt(),this.Ue=ja(),this.We=new $(N)}Ge(t){for(const n of t.ge)t.pe&&t.pe.isFoundDocument()?this.ze(n,t.pe):this.je(n,t.key,t.pe);for(const n of t.removedTargetIds)this.je(n,t.key,t.pe)}He(t){this.forEachTarget(t,n=>{const r=this.Je(n);switch(t.state){case 0:this.Ye(n)&&r.Me(t.resumeToken);break;case 1:r.ke(),r.Ce||r.Oe(),r.Me(t.resumeToken);break;case 2:r.ke(),r.Ce||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(t.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(t.resumeToken));break;default:w()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Ke.forEach((r,i)=>{this.Ye(i)&&n(i)})}Xe(t){const n=t.targetId,r=t.ye.count,i=this.et(n);if(i){const s=i.target;if(ws(s))if(r===0){const o=new T(s.path);this.je(n,o,rt.newNoDocument(o,R.min()))}else F(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(t),c=a?this.rt(a,t,o):1;if(c!==0){this.Ze(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,u)}}}}}nt(t){const n=t.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Te(r).toUint8Array()}catch(c){if(c instanceof Ku)return $e("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new yo(o,i,s)}catch(c){return $e(c instanceof hn?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ae===0?null:a}rt(t,n,r){return n.ye.count===r-this.ot(t,n.targetId)?0:2}ot(t,n){const r=this.Qe.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.je(n,s,null),i++)}),i}_t(t){const n=new Map;this.Ke.forEach((s,o)=>{const a=this.et(o);if(a){if(s.current&&ws(a.target)){const c=new T(a.target.path);this.$e.get(c)!==null||this.ut(o,c)||this.je(o,c,rt.newNoDocument(c,t))}s.Fe&&(n.set(o,s.xe()),s.Oe())}});let r=C();this.Ue.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.et(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.$e.forEach((s,o)=>o.setReadTime(t));const i=new Ei(t,n,this.We,this.$e,r);return this.$e=qt(),this.Ue=ja(),this.We=new $(N),i}ze(t,n){if(!this.Ye(t))return;const r=this.ut(t,n.key)?2:0;this.Je(t).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(t))}je(t,n,r){if(!this.Ye(t))return;const i=this.Je(t);this.ut(t,n)?i.Ne(n,1):i.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(t)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(t){this.Ke.delete(t)}tt(t){const n=this.Je(t).xe();return this.Qe.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Le(t){this.Je(t).Le()}Je(t){let n=this.Ke.get(t);return n||(n=new qa,this.Ke.set(t,n)),n}ct(t){let n=this.Ue.get(t);return n||(n=new at(N),this.Ue=this.Ue.insert(t,n)),n}Ye(t){const n=this.et(t)!==null;return n||E("WatchChangeAggregator","Detected inactive target",t),n}et(t){const n=this.Ke.get(t);return n&&n.Ce?null:this.Qe.lt(t)}Ze(t){this.Ke.set(t,new qa),this.Qe.getRemoteKeysForTarget(t).forEach(n=>{this.je(t,n,null)})}ut(t,n){return this.Qe.getRemoteKeysForTarget(t).has(n)}}function ja(){return new $(T.comparator)}function za(){return new $(T.comparator)}const Fm=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Bm=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),$m=(()=>({and:"AND",or:"OR"}))();class qm{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Ps(e,t){return e.useProto3Json||pi(t)?t:{value:t}}function $r(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function El(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function jm(e,t){return $r(e,t.toTimestamp())}function bt(e){return F(!!e),R.fromTimestamp(function(n){const r=ne(n);return new G(r.seconds,r.nanos)}(e))}function vo(e,t){return function(r){return new U(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function Tl(e){const t=U.fromString(e);return F(Rl(t)),t}function Ss(e,t){return vo(e.databaseId,t.path)}function Ki(e,t){const n=Tl(t);if(n.get(1)!==e.databaseId.projectId)throw new _(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new _(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new T(Il(n))}function Cs(e,t){return vo(e.databaseId,t)}function zm(e){const t=Tl(e);return t.length===4?U.emptyPath():Il(t)}function bs(e){return new U(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Il(e){return F(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Ha(e,t,n){return{name:Ss(e,t),fields:n.value.mapValue.fields}}function Hm(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:w()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(u,l){return u.useProto3Json?(F(l===void 0||typeof l=="string"),lt.fromBase64String(l||"")):(F(l===void 0||l instanceof Uint8Array),lt.fromUint8Array(l||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const l=u.code===void 0?p.UNKNOWN:_l(u.code);return new _(l,u.message||"")}(o);n=new vl(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ki(e,r.document.name),s=bt(r.document.updateTime),o=r.document.createTime?bt(r.document.createTime):R.min(),a=new ft({mapValue:{fields:r.document.fields}}),c=rt.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Er(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Ki(e,r.document),s=r.readTime?bt(r.readTime):R.min(),o=rt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Er([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Ki(e,r.document),s=r.removedTargetIds||[];n=new Er([],s,i,null)}else{if(!("filter"in t))return w();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Om(i,s),a=r.targetId;n=new yl(a,o)}}return n}function Wm(e,t){let n;if(t instanceof Qn)n={update:Ha(e,t.key,t.value)};else if(t instanceof go)n={delete:Ss(e,t.key)};else if(t instanceof ae)n={update:Ha(e,t.key,t.data),updateMask:eg(t.fieldMask)};else{if(!(t instanceof Dm))return w();n={verify:Ss(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Fr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof He)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof We)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Br)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw w()}(0,r))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:jm(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:w()}(e,t.precondition)),n}function Km(e,t){return e&&e.length>0?(F(t!==void 0),e.map(n=>function(i,s){let o=i.updateTime?bt(i.updateTime):bt(s);return o.isEqual(R.min())&&(o=bt(s)),new Cm(o,i.transformResults||[])}(n,t))):[]}function Gm(e,t){return{documents:[Cs(e,t.path)]}}function Qm(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=Cs(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Cs(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return Al(wt.create(c,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:Ne(h.field),direction:Jm(h.dir)}}(u))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Ps(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function Ym(e){let t=zm(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){F(r===1);const l=n.from[0];l.allDescendants?i=l.collectionId:t=t.child(l.collectionId)}let s=[];n.where&&(s=function(h){const d=wl(h);return d instanceof wt&&Xu(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(v){return new mn(Ve(v.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,pi(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new xr(f,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new xr(f,d)}(n.endAt)),mm(t,i,o,s,a,"F",c,u)}function Xm(e,t){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return w()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function wl(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ve(n.unaryFilter.field);return K.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ve(n.unaryFilter.field);return K.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ve(n.unaryFilter.field);return K.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ve(n.unaryFilter.field);return K.create(o,"!=",{nullValue:"NULL_VALUE"});default:return w()}}(e):e.fieldFilter!==void 0?function(n){return K.create(Ve(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return w()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return wt.create(n.compositeFilter.filters.map(r=>wl(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return w()}}(n.compositeFilter.op))}(e):w()}function Jm(e){return Fm[e]}function Zm(e){return Bm[e]}function tg(e){return $m[e]}function Ne(e){return{fieldPath:e.canonicalString()}}function Ve(e){return it.fromServerFormat(e.fieldPath)}function Al(e){return e instanceof K?function(n){if(n.op==="=="){if(Da(n.value))return{unaryFilter:{field:Ne(n.field),op:"IS_NAN"}};if(ka(n.value))return{unaryFilter:{field:Ne(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Da(n.value))return{unaryFilter:{field:Ne(n.field),op:"IS_NOT_NAN"}};if(ka(n.value))return{unaryFilter:{field:Ne(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ne(n.field),op:Zm(n.op),value:n.value}}}(e):e instanceof wt?function(n){const r=n.getFilters().map(i=>Al(i));return r.length===1?r[0]:{compositeFilter:{op:tg(n.op),filters:r}}}(e):w()}function eg(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Rl(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(t,n,r,i,s=R.min(),o=R.min(),a=lt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new Yt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(t){this.ht=t}}function rg(e){const t=Ym({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Ur(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(){this._n=new sg}addToCollectionParentIndex(t,n){return this._n.add(n),m.resolve()}getCollectionParents(t,n){return m.resolve(this._n.getEntries(n))}addFieldIndex(t,n){return m.resolve()}deleteFieldIndex(t,n){return m.resolve()}getDocumentsMatchingTarget(t,n){return m.resolve(null)}getIndexType(t,n){return m.resolve(0)}getFieldIndexes(t,n){return m.resolve([])}getNextCollectionGroupToUpdate(t){return m.resolve(null)}getMinOffset(t,n){return m.resolve(ee.min())}getMinOffsetFromCollectionGroup(t,n){return m.resolve(ee.min())}updateCollectionGroup(t,n,r){return m.resolve()}updateIndexEntries(t,n){return m.resolve()}}class sg{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new at(U.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new at(U.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Ke(0)}static Bn(){return new Ke(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(){this.changes=new tn(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,rt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?m.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&yn(r.mutation,i,gt.empty(),G.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,C()).next(()=>r))}getLocalViewOfDocuments(t,n,r=C()){const i=fe();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=ln();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=fe();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,C()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=qt();const o=_n(),a=function(){return _n()}();return n.forEach((c,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof ae)?s=s.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),yn(l.mutation,u,l.mutation.getFieldMask(),G.now())):o.set(u.key,gt.empty())}),this.recalculateAndSaveOverlays(t,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new ag(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=_n();let i=new $((o,a)=>o-a),s=C();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=r.get(c)||gt.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(i.get(a.batchId)||C()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=al();l.forEach(d=>{if(!s.has(d)){const f=ml(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return m.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r){return function(s){return T.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):nl(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r):this.getDocumentsMatchingCollectionQuery(t,n,r)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):m.resolve(fe());let a=-1,c=s;return o.next(u=>m.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?m.resolve():this.remoteDocumentCache.getEntry(t,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,c,u,C())).next(l=>({batchId:a,changes:ol(l)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new T(n)).next(r=>{let i=ln();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r){const i=n.collectionGroup;let s=ln();return this.indexManager.getCollectionParents(t,i).next(o=>m.forEach(o,a=>{const c=function(l,h){return new Gn(h,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,r).next(u=>{u.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i))).next(s=>{i.forEach((a,c)=>{const u=c.getKey();s.get(u)===null&&(s=s.insert(u,rt.newInvalidDocument(u)))});let o=ln();return s.forEach((a,c)=>{const u=i.get(a);u!==void 0&&yn(u.mutation,c,gt.empty(),G.now()),_i(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,n){return m.resolve(this.cr.get(n))}saveBundleMetadata(t,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:bt(i.createTime)}}(n)),m.resolve()}getNamedQuery(t,n){return m.resolve(this.lr.get(n))}saveNamedQuery(t,n){return this.lr.set(n.name,function(i){return{name:i.name,query:rg(i.bundledQuery),readTime:bt(i.readTime)}}(n)),m.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(){this.overlays=new $(T.comparator),this.hr=new Map}getOverlay(t,n){return m.resolve(this.overlays.get(n))}getOverlays(t,n){const r=fe();return m.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.It(t,n,s)}),m.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),m.resolve()}getOverlaysForCollection(t,n,r){const i=fe(),s=n.length+1,o=new T(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return m.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new $((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=fe(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=fe(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return m.resolve(a)}It(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Vm(n,r));let s=this.hr.get(n);s===void 0&&(s=C(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(){this.Pr=new at(Q.Ir),this.Tr=new at(Q.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,n){const r=new Q(t,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Ar(new Q(t,n))}Rr(t,n){t.forEach(r=>this.removeReference(r,n))}Vr(t){const n=new T(new U([])),r=new Q(n,t),i=new Q(n,t+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const n=new T(new U([])),r=new Q(n,t),i=new Q(n,t+1);let s=C();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new Q(t,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Q{constructor(t,n){this.key=t,this.pr=n}static Ir(t,n){return T.comparator(t.key,n.key)||N(t.pr,n.pr)}static Er(t,n){return N(t.pr,n.pr)||T.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new at(Q.Ir)}checkEmpty(t){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Nm(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new Q(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(t,n){return m.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.br(r),s=i<0?0:i;return m.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Q(n,0),i=new Q(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),m.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new at(N);return n.forEach(i=>{const s=new Q(i,0),o=new Q(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),m.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;T.isDocumentKey(s)||(s=s.child(""));const o=new Q(new T(s),0);let a=new at(N);return this.wr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.pr)),!0)},o),m.resolve(this.Dr(a))}Dr(t){const n=[];return t.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){F(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return m.forEach(n.mutations,i=>{const s=new Q(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,n){const r=new Q(n,0),i=this.wr.firstAfterOrEqual(r);return m.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,m.resolve()}vr(t,n){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const n=this.br(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(t){this.Cr=t,this.docs=function(){return new $(T.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return m.resolve(r?r.document.mutableCopy():rt.newInvalidDocument(n))}getEntries(t,n){let r=qt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():rt.newInvalidDocument(i))}),m.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=qt();const o=n.path,a=new T(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Jp(Xp(l),r)<=0||(i.has(l.key)||_i(n,l))&&(s=s.insert(l.key,l.mutableCopy()))}return m.resolve(s)}getAllFromCollectionGroup(t,n,r,i){w()}Fr(t,n){return m.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new fg(this)}getSize(t){return m.resolve(this.size)}}class fg extends og{constructor(t){super(),this.ar=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(t,i)):this.ar.removeEntry(r)}),m.waitFor(n)}getFromCache(t,n){return this.ar.getEntry(t,n)}getAllFromCache(t,n){return this.ar.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(t){this.persistence=t,this.Mr=new tn(n=>fo(n),po),this.lastRemoteSnapshotVersion=R.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Eo,this.targetCount=0,this.Br=Ke.Nn()}forEachTarget(t,n){return this.Mr.forEach((r,i)=>n(i)),m.resolve()}getLastRemoteSnapshotVersion(t){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return m.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),m.resolve()}qn(t){this.Mr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Br=new Ke(n),this.highestTargetId=n),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,n){return this.qn(n),this.targetCount+=1,m.resolve()}updateTargetData(t,n){return this.qn(n),m.resolve()}removeTargetData(t,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,m.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),m.waitFor(s).next(()=>i)}getTargetCount(t){return m.resolve(this.targetCount)}getTargetData(t,n){const r=this.Mr.get(n)||null;return m.resolve(r)}addMatchingKeys(t,n,r){return this.Nr.dr(n,r),m.resolve()}removeMatchingKeys(t,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),m.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Nr.Vr(n),m.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Nr.gr(n);return m.resolve(r)}containsKey(t,n){return m.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(t,n){this.Lr={},this.overlays={},this.kr=new co(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new pg(this),this.indexManager=new ig,this.remoteDocumentCache=function(i){return new dg(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new ng(n),this.$r=new ug(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new lg,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Lr[t.toKey()];return r||(r=new hg(n,this.referenceDelegate),this.Lr[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,n,r){E("MemoryPersistence","Starting transaction:",t);const i=new gg(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(t,n){return m.or(Object.values(this.Lr).map(r=>()=>r.containsKey(t,n)))}}class gg extends tm{constructor(t){super(),this.currentSequenceNumber=t}}class To{constructor(t){this.persistence=t,this.zr=new Eo,this.jr=null}static Hr(t){return new To(t)}get Jr(){if(this.jr)return this.jr;throw w()}addReference(t,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),m.resolve()}removeReference(t,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),m.resolve()}markPotentiallyOrphaned(t,n){return this.Jr.add(n.toString()),m.resolve()}removeTarget(t,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}Ur(){this.jr=new Set}Wr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.Jr,r=>{const i=T.fromPath(r);return this.Yr(t,i).next(s=>{s||n.removeEntry(i,R.min())})}).next(()=>(this.jr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Yr(t,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(t){return 0}Yr(t,n){return m.or([()=>m.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(t,n){let r=C(),i=C();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Io(t,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(){this.$i=!1}initialize(t,n){this.Ui=t,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(t,n,r,i){return this.Wi(t,n).next(s=>s||this.Gi(t,n,i,r)).next(s=>s||this.zi(t,n))}Wi(t,n){if(Ma(n))return m.resolve(null);let r=$t(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ur(n,null,"F"),r=$t(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=C(...s);return this.Ui.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(c=>{const u=this.ji(n,a);return this.Hi(n,u,o,c.readTime)?this.Wi(t,Ur(n,null,"F")):this.Ji(t,u,n,c)}))})))}Gi(t,n,r,i){return Ma(n)||i.isEqual(R.min())?this.zi(t,n):this.Ui.getDocuments(t,r).next(s=>{const o=this.ji(n,s);return this.Hi(n,o,r,i)?this.zi(t,n):(Ra()<=D.DEBUG&&E("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Rs(n)),this.Ji(t,o,n,Yp(i,-1)))})}ji(t,n){let r=new at(il(t));return n.forEach((i,s)=>{_i(t,s)&&(r=r.add(s))}),r}Hi(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}zi(t,n){return Ra()<=D.DEBUG&&E("QueryEngine","Using full collection scan to execute query:",Rs(n)),this.Ui.getDocumentsMatchingQuery(t,n,ee.min())}Ji(t,n,r,i){return this.Ui.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(t,n,r,i){this.persistence=t,this.Yi=n,this.serializer=i,this.Zi=new $(N),this.Xi=new tn(s=>fo(s),po),this.es=new Map,this.ts=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this.ns(r)}ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new cg(this.ts,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ts.setIndexManager(this.indexManager),this.Yi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Zi))}}function vg(e,t,n,r){return new yg(e,t,n,r)}async function Pl(e,t){const n=S(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ns(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=C();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(r,c).next(u=>({rs:u,removedBatchIds:o,addedBatchIds:a}))})})}function Eg(e,t){const n=S(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.ts.newChangeBuffer({trackRemovals:!0});return function(a,c,u,l){const h=u.batch,d=h.keys();let f=m.resolve();return d.forEach(v=>{f=f.next(()=>l.getEntry(c,v)).next(I=>{const y=u.docVersions.get(v);F(y!==null),I.version.compareTo(y)<0&&(h.applyToRemoteDocument(I,u),I.isValidDocument()&&(I.setReadTime(u.commitVersion),l.addEntry(I)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=C();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function Sl(e){const t=S(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Qr.getLastRemoteSnapshotVersion(n))}function Tg(e,t){const n=S(e),r=t.snapshotVersion;let i=n.Zi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ts.newChangeBuffer({trackRemovals:!0});i=n.Zi;const a=[];t.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(s,l.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(s,l.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(h)!==null?f=f.withResumeToken(lt.EMPTY_BYTE_STRING,R.min()).withLastLimboFreeSnapshotVersion(R.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),i=i.insert(h,f),function(I,y,b){return I.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(d,f,l)&&a.push(n.Qr.updateTargetData(s,f))});let c=qt(),u=C();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(Ig(s,o,t.documentUpdates).next(l=>{c=l.ss,u=l.os})),!r.isEqual(R.min())){const l=n.Qr.getLastRemoteSnapshotVersion(s).next(h=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return m.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(n.Zi=i,s))}function Ig(e,t,n){let r=C(),i=C();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let o=qt();return n.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(R.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):E("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{ss:o,os:i}})}function wg(e,t){const n=S(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Ag(e,t){const n=S(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,t).next(s=>s?(i=s,m.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new Yt(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Zi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Zi=n.Zi.insert(r.targetId,r),n.Xi.set(t,r.targetId)),r})}async function ks(e,t,n){const r=S(e),i=r.Zi.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Kn(o))throw o;E("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.Zi=r.Zi.remove(t),r.Xi.delete(i.target)}function Wa(e,t,n){const r=S(e);let i=R.min(),s=C();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,u,l){const h=S(c),d=h.Xi.get(l);return d!==void 0?m.resolve(h.Zi.get(d)):h.Qr.getTargetData(u,l)}(r,o,$t(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Yi.getDocumentsMatchingQuery(o,t,n?i:R.min(),n?s:C())).next(a=>(Rg(r,_m(t),a),{documents:a,_s:s})))}function Rg(e,t,n){let r=e.es.get(t)||R.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.es.set(t,r)}class Ka{constructor(){this.activeTargetIds=wm()}Is(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ts(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ps(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Pg{constructor(){this.Ys=new Ka,this.Zs={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.Ys.Is(t),this.Zs[t]||"not-current"}updateQueryState(t,n,r){this.Zs[t]=n}removeLocalQueryTarget(t){this.Ys.Ts(t)}isLocalQueryTarget(t){return this.Ys.activeTargetIds.has(t)}clearQueryState(t){delete this.Zs[t]}getAllActiveQueryTargets(){return this.Ys.activeTargetIds}isActiveQueryTarget(t){return this.Ys.activeTargetIds.has(t)}start(){return this.Ys=new Ka,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{Xs(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(){this.eo=()=>this.no(),this.ro=()=>this.io(),this.so=[],this.oo()}Xs(t){this.so.push(t)}shutdown(){window.removeEventListener("online",this.eo),window.removeEventListener("offline",this.ro)}oo(){window.addEventListener("online",this.eo),window.addEventListener("offline",this.ro)}no(){E("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.so)t(0)}io(){E("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.so)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pr=null;function Gi(){return pr===null?pr=function(){return 268435456+Math.round(2147483648*Math.random())}():pr++,"0x"+pr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(t){this._o=t._o,this.ao=t.ao}uo(t){this.co=t}lo(t){this.ho=t}onMessage(t){this.Po=t}close(){this.ao()}send(t){this._o(t)}Io(){this.co()}To(t){this.ho(t)}Eo(t){this.Po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="WebChannelConnection";class kg extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ao=r+"://"+n.host,this.Ro=`projects/${i}/databases/${s}`,this.Vo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get mo(){return!1}fo(n,r,i,s,o){const a=Gi(),c=this.po(n,r);E("RestConnection",`Sending RPC '${n}' ${a}:`,c,i);const u={"google-cloud-resource-prefix":this.Ro,"x-goog-request-params":this.Vo};return this.yo(u,s,o),this.wo(n,c,u,i).then(l=>(E("RestConnection",`Received RPC '${n}' ${a}: `,l),l),l=>{throw $e("RestConnection",`RPC '${n}' ${a} failed with error: `,l,"url: ",c,"request:",i),l})}So(n,r,i,s,o,a){return this.fo(n,r,i,s,o)}yo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ze}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}po(n,r){const i=Cg[n];return`${this.Ao}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}wo(t,n,r,i){const s=Gi();return new Promise((o,a)=>{const c=new Fp;c.setWithCredentials(!0),c.listenOnce(xp.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Wi.NO_ERROR:const l=c.getResponseJson();E(et,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(l)),o(l);break;case Wi.TIMEOUT:E(et,`RPC '${t}' ${s} timed out`),a(new _(p.DEADLINE_EXCEEDED,"Request time out"));break;case Wi.HTTP_ERROR:const h=c.getStatus();if(E(et,`RPC '${t}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const v=function(y){const b=y.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(b)>=0?b:p.UNKNOWN}(f.status);a(new _(v,f.message))}else a(new _(p.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new _(p.UNAVAILABLE,"Connection failed."));break;default:w()}}finally{E(et,`RPC '${t}' ${s} completed.`)}});const u=JSON.stringify(i);E(et,`RPC '${t}' ${s} sending request:`,i),c.send(n,"POST",u,r,15)})}bo(t,n,r){const i=Gi(),s=[this.Ao,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Mp(),a=Lp(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.yo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const l=s.join("");E(et,`Creating RPC '${t}' stream ${i}: ${l}`,c);const h=o.createWebChannel(l,c);let d=!1,f=!1;const v=new bg({_o:y=>{f?E(et,`Not sending because RPC '${t}' stream ${i} is closed:`,y):(d||(E(et,`Opening RPC '${t}' stream ${i} transport.`),h.open(),d=!0),E(et,`RPC '${t}' stream ${i} sending:`,y),h.send(y))},ao:()=>h.close()}),I=(y,b,L)=>{y.listen(b,O=>{try{L(O)}catch(M){setTimeout(()=>{throw M},0)}})};return I(h,hr.EventType.OPEN,()=>{f||E(et,`RPC '${t}' stream ${i} transport opened.`)}),I(h,hr.EventType.CLOSE,()=>{f||(f=!0,E(et,`RPC '${t}' stream ${i} transport closed`),v.To())}),I(h,hr.EventType.ERROR,y=>{f||(f=!0,$e(et,`RPC '${t}' stream ${i} transport errored:`,y),v.To(new _(p.UNAVAILABLE,"The operation could not be completed")))}),I(h,hr.EventType.MESSAGE,y=>{var b;if(!f){const L=y.data[0];F(!!L);const O=L,M=O.error||((b=O[0])===null||b===void 0?void 0:b.error);if(M){E(et,`RPC '${t}' stream ${i} received error:`,M);const pt=M.status;let mt=function(nn){const or=H[nn];if(or!==void 0)return _l(or)}(pt),ue=M.message;mt===void 0&&(mt=p.INTERNAL,ue="Unknown error status: "+pt+" with message "+M.message),f=!0,v.To(new _(mt,ue)),h.close()}else E(et,`RPC '${t}' stream ${i} received:`,L),v.Eo(L)}}),I(a,Up.STAT_EVENT,y=>{y.stat===wa.PROXY?E(et,`RPC '${t}' stream ${i} detected buffering proxy`):y.stat===wa.NOPROXY&&E(et,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.Io()},0),v}}function Qi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(e){return new qm(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(t,n,r=1e3,i=1.5,s=6e4){this.oi=t,this.timerId=n,this.Do=r,this.vo=i,this.Co=s,this.Fo=0,this.Mo=null,this.xo=Date.now(),this.reset()}reset(){this.Fo=0}Oo(){this.Fo=this.Co}No(t){this.cancel();const n=Math.floor(this.Fo+this.Bo()),r=Math.max(0,Date.now()-this.xo),i=Math.max(0,n-r);i>0&&E("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Fo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Mo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.xo=Date.now(),t())),this.Fo*=this.vo,this.Fo<this.Do&&(this.Fo=this.Do),this.Fo>this.Co&&(this.Fo=this.Co)}Lo(){this.Mo!==null&&(this.Mo.skipDelay(),this.Mo=null)}cancel(){this.Mo!==null&&(this.Mo.cancel(),this.Mo=null)}Bo(){return(Math.random()-.5)*this.Fo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(t,n,r,i,s,o,a,c){this.oi=t,this.ko=r,this.qo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Qo=0,this.Ko=null,this.$o=null,this.stream=null,this.Uo=new Cl(t,n)}Wo(){return this.state===1||this.state===5||this.Go()}Go(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.zo()}async stop(){this.Wo()&&await this.close(0)}jo(){this.state=0,this.Uo.reset()}Ho(){this.Go()&&this.Ko===null&&(this.Ko=this.oi.enqueueAfterDelay(this.ko,6e4,()=>this.Jo()))}Yo(t){this.Zo(),this.stream.send(t)}async Jo(){if(this.Go())return this.close(0)}Zo(){this.Ko&&(this.Ko.cancel(),this.Ko=null)}Xo(){this.$o&&(this.$o.cancel(),this.$o=null)}async close(t,n){this.Zo(),this.Xo(),this.Uo.cancel(),this.Qo++,t!==4?this.Uo.reset():n&&n.code===p.RESOURCE_EXHAUSTED?(Bt(n.toString()),Bt("Using maximum backoff delay to prevent overloading the backend."),this.Uo.Oo()):n&&n.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.e_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.lo(n)}e_(){}auth(){this.state=1;const t=this.t_(this.Qo),n=this.Qo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Qo===n&&this.n_(r,i)},r=>{t(()=>{const i=new _(p.UNKNOWN,"Fetching auth token failed: "+r.message);return this.r_(i)})})}n_(t,n){const r=this.t_(this.Qo);this.stream=this.i_(t,n),this.stream.uo(()=>{r(()=>(this.state=2,this.$o=this.oi.enqueueAfterDelay(this.qo,1e4,()=>(this.Go()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.lo(i=>{r(()=>this.r_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}zo(){this.state=5,this.Uo.No(async()=>{this.state=0,this.start()})}r_(t){return E("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}t_(t){return n=>{this.oi.enqueueAndForget(()=>this.Qo===t?n():(E("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Dg extends bl{constructor(t,n,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}i_(t,n){return this.connection.bo("Listen",t,n)}onMessage(t){this.Uo.reset();const n=Hm(this.serializer,t),r=function(s){if(!("targetChange"in s))return R.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?R.min():o.readTime?bt(o.readTime):R.min()}(t);return this.listener.s_(n,r)}o_(t){const n={};n.database=bs(this.serializer),n.addTarget=function(s,o){let a;const c=o.target;if(a=ws(c)?{documents:Gm(s,c)}:{query:Qm(s,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=El(s,o.resumeToken);const u=Ps(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(R.min())>0){a.readTime=$r(s,o.snapshotVersion.toTimestamp());const u=Ps(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const r=Xm(this.serializer,t);r&&(n.labels=r),this.Yo(n)}__(t){const n={};n.database=bs(this.serializer),n.removeTarget=t,this.Yo(n)}}class Ng extends bl{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.a_=!1}get u_(){return this.a_}start(){this.a_=!1,this.lastStreamToken=void 0,super.start()}e_(){this.a_&&this.c_([])}i_(t,n){return this.connection.bo("Write",t,n)}onMessage(t){if(F(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_){this.Uo.reset();const n=Km(t.writeResults,t.commitTime),r=bt(t.commitTime);return this.listener.l_(r,n)}return F(!t.writeResults||t.writeResults.length===0),this.a_=!0,this.listener.h_()}P_(){const t={};t.database=bs(this.serializer),this.Yo(t)}c_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>Wm(this.serializer,r))};this.Yo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.I_=!1}T_(){if(this.I_)throw new _(p.FAILED_PRECONDITION,"The client has already been terminated.")}fo(t,n,r){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.fo(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new _(p.UNKNOWN,i.toString())})}So(t,n,r,i){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new _(p.UNKNOWN,s.toString())})}terminate(){this.I_=!0}}class Og{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.d_=0,this.A_=null,this.R_=!0}V_(){this.d_===0&&(this.m_("Unknown"),this.A_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.A_=null,this.f_("Backend didn't respond within 10 seconds."),this.m_("Offline"),Promise.resolve())))}g_(t){this.state==="Online"?this.m_("Unknown"):(this.d_++,this.d_>=1&&(this.p_(),this.f_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.m_("Offline")))}set(t){this.p_(),this.d_=0,t==="Online"&&(this.R_=!1),this.m_(t)}m_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}f_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.R_?(Bt(n),this.R_=!1):E("OnlineStateTracker",n)}p_(){this.A_!==null&&(this.A_.cancel(),this.A_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.y_=[],this.w_=new Map,this.S_=new Set,this.b_=[],this.D_=s,this.D_.Xs(o=>{r.enqueueAndForget(async()=>{Ce(this)&&(E("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=S(c);u.S_.add(4),await Xn(u),u.v_.set("Unknown"),u.S_.delete(4),await Ii(u)}(this))})}),this.v_=new Og(r,i)}}async function Ii(e){if(Ce(e))for(const t of e.b_)await t(!0)}async function Xn(e){for(const t of e.b_)await t(!1)}function kl(e,t){const n=S(e);n.w_.has(t.targetId)||(n.w_.set(t.targetId,t),Ro(n)?Ao(n):en(n).Go()&&wo(n,t))}function Dl(e,t){const n=S(e),r=en(n);n.w_.delete(t),r.Go()&&Nl(n,t),n.w_.size===0&&(r.Go()?r.Ho():Ce(n)&&n.v_.set("Unknown"))}function wo(e,t){if(e.C_.Le(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(R.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}en(e).o_(t)}function Nl(e,t){e.C_.Le(t),en(e).__(t)}function Ao(e){e.C_=new Um({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>e.w_.get(t)||null,st:()=>e.datastore.serializer.databaseId}),en(e).start(),e.v_.V_()}function Ro(e){return Ce(e)&&!en(e).Wo()&&e.w_.size>0}function Ce(e){return S(e).S_.size===0}function Vl(e){e.C_=void 0}async function Lg(e){e.w_.forEach((t,n)=>{wo(e,t)})}async function xg(e,t){Vl(e),Ro(e)?(e.v_.g_(t),Ao(e)):e.v_.set("Unknown")}async function Ug(e,t,n){if(e.v_.set("Online"),t instanceof vl&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.w_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.w_.delete(a),i.C_.removeTarget(a))}(e,t)}catch(r){E("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await qr(e,r)}else if(t instanceof Er?e.C_.Ge(t):t instanceof yl?e.C_.Xe(t):e.C_.He(t),!n.isEqual(R.min()))try{const r=await Sl(e.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.C_._t(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const l=s.w_.get(u);l&&s.w_.set(u,l.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const l=s.w_.get(c);if(!l)return;s.w_.set(c,l.withResumeToken(lt.EMPTY_BYTE_STRING,l.snapshotVersion)),Nl(s,c);const h=new Yt(l.target,c,u,l.sequenceNumber);wo(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){E("RemoteStore","Failed to raise snapshot:",r),await qr(e,r)}}async function qr(e,t,n){if(!Kn(t))throw t;e.S_.add(1),await Xn(e),e.v_.set("Offline"),n||(n=()=>Sl(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{E("RemoteStore","Retrying IndexedDB access"),await n(),e.S_.delete(1),await Ii(e)})}function Ol(e,t){return t().catch(n=>qr(e,n,t))}async function wi(e){const t=S(e),n=re(t);let r=t.y_.length>0?t.y_[t.y_.length-1].batchId:-1;for(;Fg(t);)try{const i=await wg(t.localStore,r);if(i===null){t.y_.length===0&&n.Ho();break}r=i.batchId,Bg(t,i)}catch(i){await qr(t,i)}Ml(t)&&Ll(t)}function Fg(e){return Ce(e)&&e.y_.length<10}function Bg(e,t){e.y_.push(t);const n=re(e);n.Go()&&n.u_&&n.c_(t.mutations)}function Ml(e){return Ce(e)&&!re(e).Wo()&&e.y_.length>0}function Ll(e){re(e).start()}async function $g(e){re(e).P_()}async function qg(e){const t=re(e);for(const n of e.y_)t.c_(n.mutations)}async function jg(e,t,n){const r=e.y_.shift(),i=_o.from(r,t,n);await Ol(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await wi(e)}async function zg(e,t){t&&re(e).u_&&await async function(r,i){if(function(o){return Mm(o)&&o!==p.ABORTED}(i.code)){const s=r.y_.shift();re(r).jo(),await Ol(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await wi(r)}}(e,t),Ml(e)&&Ll(e)}async function Qa(e,t){const n=S(e);n.asyncQueue.verifyOperationInProgress(),E("RemoteStore","RemoteStore received new credentials");const r=Ce(n);n.S_.add(3),await Xn(n),r&&n.v_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.S_.delete(3),await Ii(n)}async function Hg(e,t){const n=S(e);t?(n.S_.delete(2),await Ii(n)):t||(n.S_.add(2),await Xn(n),n.v_.set("Unknown"))}function en(e){return e.F_||(e.F_=function(n,r,i){const s=S(n);return s.T_(),new Dg(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{uo:Lg.bind(null,e),lo:xg.bind(null,e),s_:Ug.bind(null,e)}),e.b_.push(async t=>{t?(e.F_.jo(),Ro(e)?Ao(e):e.v_.set("Unknown")):(await e.F_.stop(),Vl(e))})),e.F_}function re(e){return e.M_||(e.M_=function(n,r,i){const s=S(n);return s.T_(),new Ng(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{uo:$g.bind(null,e),lo:zg.bind(null,e),h_:qg.bind(null,e),l_:jg.bind(null,e)}),e.b_.push(async t=>{t?(e.M_.jo(),await wi(e)):(await e.M_.stop(),e.y_.length>0&&(E("RemoteStore",`Stopping write stream with ${e.y_.length} pending writes`),e.y_=[]))})),e.M_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ut,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new Po(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _(p.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function So(e,t){if(Bt("AsyncQueue",`${t}: ${e}`),Kn(e))return new _(p.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(t){this.comparator=t?(n,r)=>t(n,r)||T.comparator(n.key,r.key):(n,r)=>T.comparator(n.key,r.key),this.keyedMap=ln(),this.sortedSet=new $(this.comparator)}static emptySet(t){return new xe(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof xe)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new xe;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(){this.x_=new $(T.comparator)}track(t){const n=t.doc.key,r=this.x_.get(n);r?t.type!==0&&r.type===3?this.x_=this.x_.insert(n,t):t.type===3&&r.type!==1?this.x_=this.x_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.x_=this.x_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.x_=this.x_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.x_=this.x_.remove(n):t.type===1&&r.type===2?this.x_=this.x_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.x_=this.x_.insert(n,{type:2,doc:t.doc}):w():this.x_=this.x_.insert(n,t)}O_(){const t=[];return this.x_.inorderTraversal((n,r)=>{t.push(r)}),t}}class Ge{constructor(t,n,r,i,s,o,a,c,u){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ge(t,n,xe.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&gi(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(){this.N_=void 0,this.listeners=[]}}class Kg{constructor(){this.queries=new tn(t=>rl(t),gi),this.onlineState="Unknown",this.B_=new Set}}async function Co(e,t){const n=S(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Wg),i)try{s.N_=await n.onListen(r)}catch(o){const a=So(o,`Initialization of query '${Rs(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,s),s.listeners.push(t),t.L_(n.onlineState),s.N_&&t.k_(s.N_)&&ko(n)}async function bo(e,t){const n=S(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Gg(e,t){const n=S(e);let r=!1;for(const i of t){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.k_(i)&&(r=!0);o.N_=i}}r&&ko(n)}function Qg(e,t,n){const r=S(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function ko(e){e.B_.forEach(t=>{t.next()})}class Do{constructor(t,n,r){this.query=t,this.q_=n,this.Q_=!1,this.K_=null,this.onlineState="Unknown",this.options=r||{}}k_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Ge(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Q_?this.U_(t)&&(this.q_.next(t),n=!0):this.W_(t,this.onlineState)&&(this.G_(t),n=!0),this.K_=t,n}onError(t){this.q_.error(t)}L_(t){this.onlineState=t;let n=!1;return this.K_&&!this.Q_&&this.W_(this.K_,t)&&(this.G_(this.K_),n=!0),n}W_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.z_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}U_(t){if(t.docChanges.length>0)return!0;const n=this.K_&&this.K_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}G_(t){t=Ge.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Q_=!0,this.q_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(t){this.key=t}}class Ul{constructor(t){this.key=t}}class Yg{constructor(t,n){this.query=t,this.ta=n,this.na=null,this.hasCachedResults=!1,this.current=!1,this.ra=C(),this.mutatedKeys=C(),this.ia=il(t),this.sa=new xe(this.ia)}get oa(){return this.ta}_a(t,n){const r=n?n.aa:new Ya,i=n?n.sa:this.sa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((l,h)=>{const d=i.get(l),f=_i(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),I=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let y=!1;d&&f?d.data.isEqual(f.data)?v!==I&&(r.track({type:3,doc:f}),y=!0):this.ua(d,f)||(r.track({type:2,doc:f}),y=!0,(c&&this.ia(f,c)>0||u&&this.ia(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),y=!0):d&&!f&&(r.track({type:1,doc:d}),y=!0,(c||u)&&(a=!0)),y&&(f?(o=o.add(f),s=I?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{sa:o,aa:r,Hi:a,mutatedKeys:s}}ua(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){const i=this.sa;this.sa=t.sa,this.mutatedKeys=t.mutatedKeys;const s=t.aa.O_();s.sort((u,l)=>function(d,f){const v=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return w()}};return v(d)-v(f)}(u.type,l.type)||this.ia(u.doc,l.doc)),this.ca(r);const o=n?this.la():[],a=this.ra.size===0&&this.current?1:0,c=a!==this.na;return this.na=a,s.length!==0||c?{snapshot:new Ge(this.query,t.sa,i,s,t.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ha:o}:{ha:o}}L_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({sa:this.sa,aa:new Ya,mutatedKeys:this.mutatedKeys,Hi:!1},!1)):{ha:[]}}Pa(t){return!this.ta.has(t)&&!!this.sa.has(t)&&!this.sa.get(t).hasLocalMutations}ca(t){t&&(t.addedDocuments.forEach(n=>this.ta=this.ta.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.ta=this.ta.delete(n)),this.current=t.current)}la(){if(!this.current)return[];const t=this.ra;this.ra=C(),this.sa.forEach(r=>{this.Pa(r.key)&&(this.ra=this.ra.add(r.key))});const n=[];return t.forEach(r=>{this.ra.has(r)||n.push(new Ul(r))}),this.ra.forEach(r=>{t.has(r)||n.push(new xl(r))}),n}Ia(t){this.ta=t._s,this.ra=C();const n=this._a(t.documents);return this.applyChanges(n,!0)}Ta(){return Ge.fromInitialDocuments(this.query,this.sa,this.mutatedKeys,this.na===0,this.hasCachedResults)}}class Xg{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class Jg{constructor(t){this.key=t,this.Ea=!1}}class Zg{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.da={},this.Aa=new tn(a=>rl(a),gi),this.Ra=new Map,this.Va=new Set,this.ma=new $(T.comparator),this.fa=new Map,this.ga=new Eo,this.pa={},this.ya=new Map,this.wa=Ke.Bn(),this.onlineState="Unknown",this.Sa=void 0}get isPrimaryClient(){return this.Sa===!0}}async function t_(e,t){const n=l_(e);let r,i;const s=n.Aa.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Ta();else{const o=await Ag(n.localStore,$t(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await e_(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&kl(n.remoteStore,o)}return i}async function e_(e,t,n,r,i){e.ba=(h,d,f)=>async function(I,y,b,L){let O=y.view._a(b);O.Hi&&(O=await Wa(I.localStore,y.query,!1).then(({documents:mt})=>y.view._a(mt,O)));const M=L&&L.targetChanges.get(y.targetId),pt=y.view.applyChanges(O,I.isPrimaryClient,M);return Ja(I,y.targetId,pt.ha),pt.snapshot}(e,h,d,f);const s=await Wa(e.localStore,t,!0),o=new Yg(t,s._s),a=o._a(s.documents),c=Yn.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),u=o.applyChanges(a,e.isPrimaryClient,c);Ja(e,n,u.ha);const l=new Xg(t,n,o);return e.Aa.set(t,l),e.Ra.has(n)?e.Ra.get(n).push(t):e.Ra.set(n,[t]),u.snapshot}async function n_(e,t){const n=S(e),r=n.Aa.get(t),i=n.Ra.get(r.targetId);if(i.length>1)return n.Ra.set(r.targetId,i.filter(s=>!gi(s,t))),void n.Aa.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ks(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Dl(n.remoteStore,r.targetId),Ds(n,r.targetId)}).catch(Wn)):(Ds(n,r.targetId),await ks(n.localStore,r.targetId,!0))}async function r_(e,t,n){const r=h_(e);try{const i=await function(o,a){const c=S(o),u=G.now(),l=a.reduce((f,v)=>f.add(v.key),C());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let v=qt(),I=C();return c.ts.getEntries(f,l).next(y=>{v=y,v.forEach((b,L)=>{L.isValidDocument()||(I=I.add(b))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,v)).next(y=>{h=y;const b=[];for(const L of a){const O=km(L,h.get(L.key).overlayedDocument);O!=null&&b.push(new ae(L.key,O,Gu(O.value.mapValue),yt.exists(!0)))}return c.mutationQueue.addMutationBatch(f,u,b,a)}).next(y=>{d=y;const b=y.applyToLocalDocumentSet(h,I);return c.documentOverlayCache.saveOverlays(f,y.batchId,b)})}).then(()=>({batchId:d.batchId,changes:ol(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.pa[o.currentUser.toKey()];u||(u=new $(N)),u=u.insert(a,c),o.pa[o.currentUser.toKey()]=u}(r,i.batchId,n),await Jn(r,i.changes),await wi(r.remoteStore)}catch(i){const s=So(i,"Failed to persist write");n.reject(s)}}async function Fl(e,t){const n=S(e);try{const r=await Tg(n.localStore,t);t.targetChanges.forEach((i,s)=>{const o=n.fa.get(s);o&&(F(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ea=!0:i.modifiedDocuments.size>0?F(o.Ea):i.removedDocuments.size>0&&(F(o.Ea),o.Ea=!1))}),await Jn(n,r,t)}catch(r){await Wn(r)}}function Xa(e,t,n){const r=S(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Aa.forEach((s,o)=>{const a=o.view.L_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=S(o);c.onlineState=a;let u=!1;c.queries.forEach((l,h)=>{for(const d of h.listeners)d.L_(a)&&(u=!0)}),u&&ko(c)}(r.eventManager,t),i.length&&r.da.s_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function i_(e,t,n){const r=S(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.fa.get(t),s=i&&i.key;if(s){let o=new $(T.comparator);o=o.insert(s,rt.newNoDocument(s,R.min()));const a=C().add(s),c=new Ei(R.min(),new Map,new $(N),o,a);await Fl(r,c),r.ma=r.ma.remove(s),r.fa.delete(t),No(r)}else await ks(r.localStore,t,!1).then(()=>Ds(r,t,n)).catch(Wn)}async function s_(e,t){const n=S(e),r=t.batch.batchId;try{const i=await Eg(n.localStore,t);$l(n,r,null),Bl(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Jn(n,i)}catch(i){await Wn(i)}}async function o_(e,t,n){const r=S(e);try{const i=await function(o,a){const c=S(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(F(h!==null),l=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,l,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>c.localDocuments.getDocuments(u,l))})}(r.localStore,t);$l(r,t,n),Bl(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Jn(r,i)}catch(i){await Wn(i)}}function Bl(e,t){(e.ya.get(t)||[]).forEach(n=>{n.resolve()}),e.ya.delete(t)}function $l(e,t,n){const r=S(e);let i=r.pa[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.pa[r.currentUser.toKey()]=i}}function Ds(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Ra.get(t))e.Aa.delete(r),n&&e.da.Da(r,n);e.Ra.delete(t),e.isPrimaryClient&&e.ga.Vr(t).forEach(r=>{e.ga.containsKey(r)||ql(e,r)})}function ql(e,t){e.Va.delete(t.path.canonicalString());const n=e.ma.get(t);n!==null&&(Dl(e.remoteStore,n),e.ma=e.ma.remove(t),e.fa.delete(n),No(e))}function Ja(e,t,n){for(const r of n)r instanceof xl?(e.ga.addReference(r.key,t),a_(e,r)):r instanceof Ul?(E("SyncEngine","Document no longer in limbo: "+r.key),e.ga.removeReference(r.key,t),e.ga.containsKey(r.key)||ql(e,r.key)):w()}function a_(e,t){const n=t.key,r=n.path.canonicalString();e.ma.get(n)||e.Va.has(r)||(E("SyncEngine","New document in limbo: "+n),e.Va.add(r),No(e))}function No(e){for(;e.Va.size>0&&e.ma.size<e.maxConcurrentLimboResolutions;){const t=e.Va.values().next().value;e.Va.delete(t);const n=new T(U.fromString(t)),r=e.wa.next();e.fa.set(r,new Jg(n)),e.ma=e.ma.insert(n,r),kl(e.remoteStore,new Yt($t(mi(n.path)),r,"TargetPurposeLimboResolution",co.ae))}}async function Jn(e,t,n){const r=S(e),i=[],s=[],o=[];r.Aa.isEmpty()||(r.Aa.forEach((a,c)=>{o.push(r.ba(c,t,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=Io.Ki(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.da.s_(i),await async function(c,u){const l=S(c);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>m.forEach(u,d=>m.forEach(d.qi,f=>l.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>m.forEach(d.Qi,f=>l.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Kn(h))throw h;E("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=l.Zi.get(d),v=f.snapshotVersion,I=f.withLastLimboFreeSnapshotVersion(v);l.Zi=l.Zi.insert(d,I)}}}(r.localStore,s))}async function c_(e,t){const n=S(e);if(!n.currentUser.isEqual(t)){E("SyncEngine","User change. New user:",t.toKey());const r=await Pl(n.localStore,t);n.currentUser=t,function(s,o){s.ya.forEach(a=>{a.forEach(c=>{c.reject(new _(p.CANCELLED,o))})}),s.ya.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Jn(n,r.rs)}}function u_(e,t){const n=S(e),r=n.fa.get(t);if(r&&r.Ea)return C().add(r.key);{let i=C();const s=n.Ra.get(t);if(!s)return i;for(const o of s){const a=n.Aa.get(o);i=i.unionWith(a.view.oa)}return i}}function l_(e){const t=S(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Fl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=u_.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=i_.bind(null,t),t.da.s_=Gg.bind(null,t.eventManager),t.da.Da=Qg.bind(null,t.eventManager),t}function h_(e){const t=S(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=s_.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=o_.bind(null,t),t}class Za{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Ti(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return vg(this.persistence,new _g,t.initialUser,this.serializer)}createPersistence(t){return new mg(To.Hr,this.serializer)}createSharedClientState(t){return new Pg}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class d_{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xa(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=c_.bind(null,this.syncEngine),await Hg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Kg}()}createDatastore(t){const n=Ti(t.databaseInfo.databaseId),r=function(s){return new kg(s)}(t.databaseInfo);return function(s,o,a,c){return new Vg(s,o,a,c)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,o,a){return new Mg(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>Xa(this.syncEngine,n,0),function(){return Ga.v()?new Ga:new Sg}())}createSyncEngine(t,n){return function(i,s,o,a,c,u,l){const h=new Zg(i,s,o,a,c,u);return l&&(h.Sa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=S(n);E("RemoteStore","RemoteStore shutting down."),r.S_.add(5),await Xn(r),r.D_.shutdown(),r.v_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Fa(this.observer.next,t)}error(t){this.observer.error?this.Fa(this.observer.error,t):Bt("Uncaught Error in snapshot listener:",t.toString())}Ma(){this.muted=!0}Fa(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=nt.UNAUTHENTICATED,this.clientId=Hu.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{E("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(E("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ut;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=So(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Yi(e,t){e.asyncQueue.verifyOperationInProgress(),E("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Pl(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function tc(e,t){e.asyncQueue.verifyOperationInProgress();const n=await m_(e);E("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>Qa(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>Qa(t.remoteStore,s)),e._onlineComponents=t}function p_(e){return e.name==="FirebaseError"?e.code===p.FAILED_PRECONDITION||e.code===p.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function m_(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){E("FirestoreClient","Using user provided OfflineComponentProvider");try{await Yi(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!p_(n))throw n;$e("Error using user provided cache. Falling back to memory cache: "+n),await Yi(e,new Za)}}else E("FirestoreClient","Using default OfflineComponentProvider"),await Yi(e,new Za);return e._offlineComponents}async function jl(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(E("FirestoreClient","Using user provided OnlineComponentProvider"),await tc(e,e._uninitializedComponentsProvider._online)):(E("FirestoreClient","Using default OnlineComponentProvider"),await tc(e,new d_))),e._onlineComponents}function g_(e){return jl(e).then(t=>t.syncEngine)}async function jr(e){const t=await jl(e),n=t.eventManager;return n.onListen=t_.bind(null,t.syncEngine),n.onUnlisten=n_.bind(null,t.syncEngine),n}function __(e,t,n={}){const r=new Ut;return e.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const l=new Vo({next:d=>{o.enqueueAndForget(()=>bo(s,h));const f=d.docs.has(a);!f&&d.fromCache?u.reject(new _(p.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&c&&c.source==="server"?u.reject(new _(p.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Do(mi(a.path),l,{includeMetadataChanges:!0,z_:!0});return Co(s,h)}(await jr(e),e.asyncQueue,t,n,r)),r.promise}function y_(e,t,n={}){const r=new Ut;return e.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const l=new Vo({next:d=>{o.enqueueAndForget(()=>bo(s,h)),d.fromCache&&c.source==="server"?u.reject(new _(p.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Do(a,l,{includeMetadataChanges:!0,z_:!0});return Co(s,h)}(await jr(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(e,t,n){if(!n)throw new _(p.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function v_(e,t,n,r){if(t===!0&&r===!0)throw new _(p.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function nc(e){if(!T.isDocumentKey(e))throw new _(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function rc(e){if(T.isDocumentKey(e))throw new _(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Ai(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":w()}function vt(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new _(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ai(e);throw new _(p.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function E_(e,t){if(t<=0)throw new _(p.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new _(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new _(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}v_("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zl((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new _(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new _(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new _(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ri{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ic({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new _(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new _(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ic(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new $p;switch(r.type){case"firstParty":return new Hp(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new _(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ec.get(n);r&&(E("ComponentProvider","Removing Datastore"),ec.delete(n),r.terminate())}(this),Promise.resolve()}}function T_(e,t,n,r={}){var i;const s=(e=vt(e,Ri))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&$e("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=nt.MOCK_USER;else{a=Lc(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new _(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new nt(u)}e._authCredentials=new qp(new zu(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ce(this.firestore,t,this._query)}}class ct{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ct(this.firestore,t,this._key)}}class Zt extends ce{constructor(t,n,r){super(t,n,mi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ct(this.firestore,null,new T(t))}withConverter(t){return new Zt(this.firestore,t,this._path)}}function iT(e,t,...n){if(e=B(e),Hl("collection","path",t),e instanceof Ri){const r=U.fromString(t,...n);return rc(r),new Zt(e,null,r)}{if(!(e instanceof ct||e instanceof Zt))throw new _(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(U.fromString(t,...n));return rc(r),new Zt(e.firestore,null,r)}}function I_(e,t,...n){if(e=B(e),arguments.length===1&&(t=Hu.V()),Hl("doc","path",t),e instanceof Ri){const r=U.fromString(t,...n);return nc(r),new ct(e,null,new T(r))}{if(!(e instanceof ct||e instanceof Zt))throw new _(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(U.fromString(t,...n));return nc(r),new ct(e.firestore,e instanceof Zt?e.converter:null,new T(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(){this.za=Promise.resolve(),this.ja=[],this.Ha=!1,this.Ja=[],this.Ya=null,this.Za=!1,this.Xa=!1,this.eu=[],this.Uo=new Cl(this,"async_queue_retry"),this.tu=()=>{const n=Qi();n&&E("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Uo.Lo()};const t=Qi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.tu)}get isShuttingDown(){return this.Ha}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.nu(),this.ru(t)}enterRestrictedMode(t){if(!this.Ha){this.Ha=!0,this.Xa=t||!1;const n=Qi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.tu)}}enqueue(t){if(this.nu(),this.Ha)return new Promise(()=>{});const n=new Ut;return this.ru(()=>this.Ha&&this.Xa?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ja.push(t),this.iu()))}async iu(){if(this.ja.length!==0){try{await this.ja[0](),this.ja.shift(),this.Uo.reset()}catch(t){if(!Kn(t))throw t;E("AsyncQueue","Operation failed with retryable error: "+t)}this.ja.length>0&&this.Uo.No(()=>this.iu())}}ru(t){const n=this.za.then(()=>(this.Za=!0,t().catch(r=>{this.Ya=r,this.Za=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Bt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Za=!1,r))));return this.za=n,n}enqueueAfterDelay(t,n,r){this.nu(),this.eu.indexOf(t)>-1&&(n=0);const i=Po.createAndSchedule(this,t,n,r,s=>this.su(s));return this.Ja.push(i),i}nu(){this.Ya&&w()}verifyOperationInProgress(){}async ou(){let t;do t=this.za,await t;while(t!==this.za)}_u(t){for(const n of this.Ja)if(n.timerId===t)return!0;return!1}au(t){return this.ou().then(()=>{this.Ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Ja)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.ou()})}uu(t){this.eu.push(t)}su(t){const n=this.Ja.indexOf(t);this.Ja.splice(n,1)}}function sc(e){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(e,["next","error","complete"])}class ie extends Ri{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new w_}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Wl(this),this._firestoreClient.terminate()}}function A_(e,t){const n=typeof e=="object"?e:Us(),r=typeof e=="string"?e:t||"(default)",i=Xr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Vc("firestore");s&&T_(i,...s)}return i}function Zn(e){return e._firestoreClient||Wl(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Wl(e){var t,n,r;const i=e._freezeSettings(),s=function(a,c,u,l){return new rm(a,c,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,zl(l.experimentalLongPollingOptions),l.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new f_(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Qe(lt.fromBase64String(t))}catch(n){throw new _(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Qe(lt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new _(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new _(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new _(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return N(this._lat,t._lat)||N(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_=/^__.*__$/;class P_{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new ae(t,this.data,this.fieldMask,n,this.fieldTransforms):new Qn(t,this.data,n,this.fieldTransforms)}}class Kl{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new ae(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function Gl(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw w()}}class Pi{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.cu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get lu(){return this.settings.lu}hu(t){return new Pi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Pu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.hu({path:r,Iu:!1});return i.Tu(t),i}Eu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.hu({path:r,Iu:!1});return i.cu(),i}du(t){return this.hu({path:void 0,Iu:!0})}Au(t){return zr(t,this.settings.methodName,this.settings.Ru||!1,this.path,this.settings.Vu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}cu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Tu(this.path.get(t))}Tu(t){if(t.length===0)throw this.Au("Document fields must not be empty");if(Gl(this.lu)&&R_.test(t))throw this.Au('Document fields cannot begin and end with "__"')}}class S_{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Ti(t)}mu(t,n,r,i=!1){return new Pi({lu:t,methodName:n,Vu:r,path:it.emptyPath(),Iu:!1,Ru:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Si(e){const t=e._freezeSettings(),n=Ti(e._databaseId);return new S_(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Ql(e,t,n,r,i,s={}){const o=e.mu(s.merge||s.mergeFields?2:0,t,n,i);Mo("Data must be an object, but it was:",o,r);const a=Zl(r,o);let c,u;if(s.merge)c=new gt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=Ns(t,h,n);if(!o.contains(d))throw new _(p.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);eh(l,d)||l.push(d)}c=new gt(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new P_(new ft(a),c,u)}class Ci extends er{_toFieldTransform(t){if(t.lu!==2)throw t.lu===1?t.Au(`${this._methodName}() can only appear at the top level of your update data`):t.Au(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ci}}function Yl(e,t,n){return new Pi({lu:3,Vu:t.settings.Vu,methodName:e._methodName,Iu:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class C_ extends er{constructor(t,n){super(t),this.fu=n}_toFieldTransform(t){const n=Yl(this,t,!0),r=this.fu.map(s=>be(s,n)),i=new He(r);return new pl(t.path,i)}isEqual(t){return this===t}}class b_ extends er{constructor(t,n){super(t),this.fu=n}_toFieldTransform(t){const n=Yl(this,t,!0),r=this.fu.map(s=>be(s,n)),i=new We(r);return new pl(t.path,i)}isEqual(t){return this===t}}function Xl(e,t,n,r){const i=e.mu(1,t,n);Mo("Data must be an object, but it was:",i,r);const s=[],o=ft.empty();Se(r,(c,u)=>{const l=Lo(t,c,n);u=B(u);const h=i.Eu(l);if(u instanceof Ci)s.push(l);else{const d=be(u,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new gt(s);return new Kl(o,a,i.fieldTransforms)}function Jl(e,t,n,r,i,s){const o=e.mu(1,t,n),a=[Ns(t,r,n)],c=[i];if(s.length%2!=0)throw new _(p.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Ns(t,s[d])),c.push(s[d+1]);const u=[],l=ft.empty();for(let d=a.length-1;d>=0;--d)if(!eh(u,a[d])){const f=a[d];let v=c[d];v=B(v);const I=o.Eu(f);if(v instanceof Ci)u.push(f);else{const y=be(v,I);y!=null&&(u.push(f),l.set(f,y))}}const h=new gt(u);return new Kl(l,h,o.fieldTransforms)}function k_(e,t,n,r=!1){return be(n,e.mu(r?4:3,t))}function be(e,t){if(th(e=B(e)))return Mo("Unsupported field value:",t,e),Zl(e,t);if(e instanceof er)return function(r,i){if(!Gl(i.lu))throw i.Au(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Au(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Iu&&t.lu!==4)throw t.Au("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=be(a,i.du(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(e,t)}return function(r,i){if((r=B(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Am(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=G.fromDate(r);return{timestampValue:$r(i.serializer,s)}}if(r instanceof G){const s=new G(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:$r(i.serializer,s)}}if(r instanceof Oo)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Qe)return{bytesValue:El(i.serializer,r._byteString)};if(r instanceof ct){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Au(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:vo(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Au(`Unsupported field value: ${Ai(r)}`)}(e,t)}function Zl(e,t){const n={};return Wu(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Se(e,(r,i)=>{const s=be(i,t.Pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function th(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof G||e instanceof Oo||e instanceof Qe||e instanceof ct||e instanceof er)}function Mo(e,t,n){if(!th(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Ai(n);throw r==="an object"?t.Au(e+" a custom object"):t.Au(e+" "+r)}}function Ns(e,t,n){if((t=B(t))instanceof tr)return t._internalPath;if(typeof t=="string")return Lo(e,t);throw zr("Field path arguments must be of type string or ",e,!1,void 0,n)}const D_=new RegExp("[~\\*/\\[\\]]");function Lo(e,t,n){if(t.search(D_)>=0)throw zr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new tr(...t.split("."))._internalPath}catch{throw zr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function zr(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new _(p.INVALID_ARGUMENT,a+e+c)}function eh(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new N_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(xo("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class N_ extends nh{data(){return super.data()}}function xo(e,t){return typeof t=="string"?Lo(e,t):t instanceof tr?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new _(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Uo{}class ih extends Uo{}function sT(e,t,...n){let r=[];t instanceof Uo&&r.push(t),r=r.concat(n),function(s){const o=s.filter(c=>c instanceof Fo).length,a=s.filter(c=>c instanceof bi).length;if(o>1||o>0&&a>0)throw new _(p.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)e=i._apply(e);return e}class bi extends ih{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new bi(t,n,r)}_apply(t){const n=this._parse(t);return sh(t._query,n),new ce(t.firestore,t.converter,As(t._query,n))}_parse(t){const n=Si(t.firestore);return function(s,o,a,c,u,l,h){let d;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new _(p.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){ac(h,l);const f=[];for(const v of h)f.push(oc(c,s,v));d={arrayValue:{values:f}}}else d=oc(c,s,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||ac(h,l),d=k_(a,o,h,l==="in"||l==="not-in");return K.create(u,l,d)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function oT(e,t,n){const r=t,i=xo("where",e);return bi._create(i,r,n)}class Fo extends Uo{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new Fo(t,n)}_parse(t){const n=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:wt.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const c of a)sh(o,c),o=As(o,c)}(t._query,n),new ce(t.firestore,t.converter,As(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Bo extends ih{constructor(t,n,r){super(),this.type=t,this._limit=n,this._limitType=r}static _create(t,n,r){return new Bo(t,n,r)}_apply(t){return new ce(t.firestore,t.converter,Ur(t._query,this._limit,this._limitType))}}function aT(e){return E_("limit",e),Bo._create("limit",e,"F")}function oc(e,t,n){if(typeof(n=B(n))=="string"){if(n==="")throw new _(p.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!nl(t)&&n.indexOf("/")!==-1)throw new _(p.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(U.fromString(n));if(!T.isDocumentKey(r))throw new _(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ba(e,new T(r))}if(n instanceof ct)return ba(e,n._key);throw new _(p.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ai(n)}.`)}function ac(e,t){if(!Array.isArray(e)||e.length===0)throw new _(p.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function sh(e,t){if(t.isInequality()){const r=mo(e),i=t.field;if(r!==null&&!r.isEqual(i))throw new _(p.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=el(e);s!==null&&V_(e,i,s)}const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(e.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new _(p.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new _(p.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function V_(e,t,n){if(!n.isEqual(t))throw new _(p.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class O_{convertValue(t,n="none"){switch(Ie(t)){case 0:return null;case 1:return t.booleanValue;case 2:return W(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Te(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw w()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return Se(t,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new Oo(W(t.latitude),W(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=lo(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Dn(t));default:return null}}convertTimestamp(t){const n=ne(t);return new G(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=U.fromString(t);F(Rl(r));const i=new Nn(r.get(1),r.get(3)),s=new T(r.popFirst(5));return i.isEqual(n)||Bt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ah extends nh{constructor(t,n,r,i,s,o){super(t,n,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Tr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(xo("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Tr extends ah{data(t={}){return super.data(t)}}class ch{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new dn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Tr(this._firestore,this._userDataWriter,r.key,r,new dn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new _(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new Tr(i._firestore,i._userDataWriter,a.doc.key,a.doc,new dn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new Tr(i._firestore,i._userDataWriter,a.doc.key,a.doc,new dn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,l=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:M_(a.type),doc:c,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function M_(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return w()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cT(e){e=vt(e,ct);const t=vt(e.firestore,ie);return __(Zn(t),e._key).then(n=>uh(t,e,n))}class $o extends O_{constructor(t){super(),this.firestore=t}convertBytes(t){return new Qe(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new ct(this.firestore,null,n)}}function uT(e){e=vt(e,ce);const t=vt(e.firestore,ie),n=Zn(t),r=new $o(t);return rh(e._query),y_(n,e._query).then(i=>new ch(t,r,e,i))}function lT(e,t,n){e=vt(e,ct);const r=vt(e.firestore,ie),i=oh(e.converter,t,n);return qo(r,[Ql(Si(r),"setDoc",e._key,i,e.converter!==null,n).toMutation(e._key,yt.none())])}function hT(e,t,n,...r){e=vt(e,ct);const i=vt(e.firestore,ie),s=Si(i);let o;return o=typeof(t=B(t))=="string"||t instanceof tr?Jl(s,"updateDoc",e._key,t,n,r):Xl(s,"updateDoc",e._key,t),qo(i,[o.toMutation(e._key,yt.exists(!0))])}function L_(e,...t){var n,r,i;e=B(e);let s={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||sc(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(sc(t[o])){const h=t[o];t[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),t[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),t[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(e instanceof ct)u=vt(e.firestore,ie),l=mi(e._key.path),c={next:h=>{t[o]&&t[o](uh(u,e,h))},error:t[o+1],complete:t[o+2]};else{const h=vt(e,ce);u=vt(h.firestore,ie),l=h._query;const d=new $o(u);c={next:f=>{t[o]&&t[o](new ch(u,d,h,f))},error:t[o+1],complete:t[o+2]},rh(e._query)}return function(d,f,v,I){const y=new Vo(I),b=new Do(f,y,v);return d.asyncQueue.enqueueAndForget(async()=>Co(await jr(d),b)),()=>{y.Ma(),d.asyncQueue.enqueueAndForget(async()=>bo(await jr(d),b))}}(Zn(u),l,a,c)}function qo(e,t){return function(r,i){const s=new Ut;return r.asyncQueue.enqueueAndForget(async()=>r_(await g_(r),i,s)),s.promise}(Zn(e),t)}function uh(e,t,n){const r=n.docs.get(t._key),i=new $o(e);return new ah(e,i,t._key,r,new dn(n.hasPendingWrites,n.fromCache),t.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(t,n){this._firestore=t,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Si(t)}set(t,n,r){this._verifyNotCommitted();const i=Xi(t,this._firestore),s=oh(i.converter,n,r),o=Ql(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,yt.none())),this}update(t,n,r,...i){this._verifyNotCommitted();const s=Xi(t,this._firestore);let o;return o=typeof(n=B(n))=="string"||n instanceof tr?Jl(this._dataReader,"WriteBatch.update",s._key,n,r,i):Xl(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,yt.exists(!0))),this}delete(t){this._verifyNotCommitted();const n=Xi(t,this._firestore);return this._mutations=this._mutations.concat(new go(n._key,yt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new _(p.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Xi(e,t){if((e=B(e)).firestore!==t)throw new _(p.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}function dT(...e){return new C_("arrayUnion",e)}function fT(...e){return new b_("arrayRemove",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pT(e){return Zn(e=vt(e,ie)),new x_(e,t=>qo(e,t))}(function(t,n=!0){(function(i){Ze=i})(Re),ve(new te("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new ie(new jp(r.getProvider("auth-internal")),new Kp(r.getProvider("app-check-internal")),function(u,l){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new _(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Nn(u.options.projectId,l)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Ct(Aa,"4.1.2",t),Ct(Aa,"4.1.2","esm2017")})();function jo(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function lh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const U_=lh,hh=new Ln("auth","Firebase",lh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=new Ls("@firebase/auth");function F_(e,...t){Hr.logLevel<=D.WARN&&Hr.warn(`Auth (${Re}): ${e}`,...t)}function Ir(e,...t){Hr.logLevel<=D.ERROR&&Hr.error(`Auth (${Re}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(e,...t){throw zo(e,...t)}function kt(e,...t){return zo(e,...t)}function dh(e,t,n){const r=Object.assign(Object.assign({},U_()),{[t]:n});return new Ln("auth","Firebase",r).create(t,{appName:e.name})}function B_(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Vt(e,"argument-error"),dh(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function zo(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return hh.create(e,...t)}function P(e,t,...n){if(!e)throw zo(t,...n)}function Lt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ir(t),new Error(t)}function jt(e,t){e||Lt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function $_(){return cc()==="http:"||cc()==="https:"}function cc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($_()||md()||"connection"in navigator)?navigator.onLine:!0}function j_(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t,n){this.shortDelay=t,this.longDelay=n,jt(n>t,"Short delay should be less than long delay!"),this.isMobile=fd()||gd()}get(){return q_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(e,t){jt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_=new nr(3e4,6e4);function ph(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function rr(e,t,n,r,i={}){return mh(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=xn(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),fh.fetch()(gh(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function mh(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},z_),t);try{const i=new K_(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw mr(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw mr(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw mr(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw mr(e,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw dh(e,l,u);Vt(e,l)}}catch(i){if(i instanceof Ot)throw i;Vt(e,"network-request-failed",{message:String(i)})}}async function W_(e,t,n,r,i={}){const s=await rr(e,t,n,r,i);return"mfaPendingCredential"in s&&Vt(e,"multi-factor-auth-required",{_serverResponse:s}),s}function gh(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Ho(e.config,i):`${e.config.apiScheme}://${i}`}class K_{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(kt(this.auth,"network-request-failed")),H_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function mr(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=kt(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G_(e,t){return rr(e,"POST","/v1/accounts:delete",t)}async function Q_(e,t){return rr(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Y_(e,t=!1){const n=B(e),r=await n.getIdToken(t),i=Wo(r);P(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:vn(Ji(i.auth_time)),issuedAtTime:vn(Ji(i.iat)),expirationTime:vn(Ji(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ji(e){return Number(e)*1e3}function Wo(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Ir("JWT malformed, contained fewer than 3 sections"),null;try{const i=Dc(n);return i?JSON.parse(i):(Ir("Failed to decode base64 JWT payload"),null)}catch(i){return Ir("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function X_(e){const t=Wo(e);return P(t,"internal-error"),P(typeof t.exp<"u","internal-error"),P(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function On(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Ot&&J_(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function J_({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vn(this.lastLoginAt),this.creationTime=vn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wr(e){var t;const n=e.auth,r=await e.getIdToken(),i=await On(e,Q_(n,{idToken:r}));P(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?ny(s.providerUserInfo):[],a=ey(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new _h(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function ty(e){const t=B(e);await Wr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ey(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function ny(e){return e.map(t=>{var{providerId:n}=t,r=jo(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ry(e,t){const n=await mh(e,{},async()=>{const r=xn({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=gh(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",fh.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){P(t.idToken,"internal-error"),P(typeof t.idToken<"u","internal-error"),P(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):X_(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return P(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await ry(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Mn;return r&&(P(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(P(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(P(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Mn,this.toJSON())}_performRefresh(){return Lt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(e,t){P(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class ge{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=jo(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Z_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new _h(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await On(this,this.stsTokenManager.getToken(this.auth,t));return P(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Y_(this,t)}reload(){return ty(this)}_assign(t){this!==t&&(P(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new ge(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Wr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await On(this,G_(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,c,u,l;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,b=(u=n.createdAt)!==null&&u!==void 0?u:void 0,L=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:O,emailVerified:M,isAnonymous:pt,providerData:mt,stsTokenManager:ue}=n;P(O&&ue,t,"internal-error");const ke=Mn.fromJSON(this.name,ue);P(typeof O=="string",t,"internal-error"),zt(h,t.name),zt(d,t.name),P(typeof M=="boolean",t,"internal-error"),P(typeof pt=="boolean",t,"internal-error"),zt(f,t.name),zt(v,t.name),zt(I,t.name),zt(y,t.name),zt(b,t.name),zt(L,t.name);const nn=new ge({uid:O,auth:t,email:d,emailVerified:M,displayName:h,isAnonymous:pt,photoURL:v,phoneNumber:f,tenantId:I,stsTokenManager:ke,createdAt:b,lastLoginAt:L});return mt&&Array.isArray(mt)&&(nn.providerData=mt.map(or=>Object.assign({},or))),y&&(nn._redirectEventId=y),nn}static async _fromIdTokenResponse(t,n,r=!1){const i=new Mn;i.updateFromServerResponse(n);const s=new ge({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Wr(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc=new Map;function xt(e){jt(e instanceof Function,"Expected a class definition");let t=uc.get(e);return t?(jt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,uc.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}yh.type="NONE";const lc=yh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(e,t,n){return`firebase:${e}:${t}:${n}`}class Ue{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=wr(this.userKey,i.apiKey,s),this.fullPersistenceKey=wr("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ge._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Ue(xt(lc),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||xt(lc);const o=wr(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=ge._fromJSON(t,l);u!==s&&(a=h),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Ue(s,t,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ue(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Th(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(vh(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(wh(t))return"Blackberry";if(Ah(t))return"Webos";if(Ko(t))return"Safari";if((t.includes("chrome/")||Eh(t))&&!t.includes("edge/"))return"Chrome";if(Ih(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function vh(e=ut()){return/firefox\//i.test(e)}function Ko(e=ut()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Eh(e=ut()){return/crios\//i.test(e)}function Th(e=ut()){return/iemobile/i.test(e)}function Ih(e=ut()){return/android/i.test(e)}function wh(e=ut()){return/blackberry/i.test(e)}function Ah(e=ut()){return/webos/i.test(e)}function ki(e=ut()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function iy(e=ut()){var t;return ki(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function sy(){return _d()&&document.documentMode===10}function Rh(e=ut()){return ki(e)||Ih(e)||Ah(e)||wh(e)||/windows phone/i.test(e)||Th(e)}function oy(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(e,t=[]){let n;switch(e){case"Browser":n=hc(ut());break;case"Worker":n=`${hc(ut())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Re}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const c=t(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cy(e,t={}){return rr(e,"GET","/v2/passwordPolicy",ph(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy=6;class ly{constructor(t){var n,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:uy,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dc(this),this.idTokenSubscription=new dc(this),this.beforeStateQueue=new ay(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=xt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ue.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Wr(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=j_()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?B(t):null;return n&&P(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&P(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(xt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await cy(this),n=new ly(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Ln("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&xt(t)||this._popupRedirectResolver;P(n,this,"argument-error"),this.redirectPersistenceManager=await Ue.create(this,[xt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(P(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=t.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ph(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&F_(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Di(e){return B(e)}class dc{constructor(t){this.auth=t,this.observer=null,this.addObserver=Ad(n=>this.observer=n)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function fy(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=kt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",dy().appendChild(r)})}function py(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(e,t){const n=Xr(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Sr(s,t??{}))return i;Vt(i,"already-initialized")}return n.initialize({options:t})}function gy(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(xt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function _y(e,t,n){const r=Di(e);P(r._canInitEmulator,r,"emulator-config-failed"),P(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Sh(t),{host:o,port:a}=yy(t),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||vy()}function Sh(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function yy(e){const t=Sh(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:fc(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:fc(o)}}}function fc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function vy(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Lt("not implemented")}_getIdTokenResponse(t){return Lt("not implemented")}_linkToIdToken(t,n){return Lt("not implemented")}_getReauthenticationResolver(t){return Lt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fe(e,t){return W_(e,"POST","/v1/accounts:signInWithIdp",ph(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey="http://localhost";class we extends Ch{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new we(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Vt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=jo(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new we(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Fe(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Fe(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Fe(t,n)}buildRequest(){const t={requestUri:Ey,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=xn(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends Go{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends ir{constructor(){super("facebook.com")}static credential(t){return we._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ht.credentialFromTaggedObject(t)}static credentialFromError(t){return Ht.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ht.credential(t.oauthAccessToken)}catch{return null}}}Ht.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ht.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends ir{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return we._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Wt.credentialFromTaggedObject(t)}static credentialFromError(t){return Wt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Wt.credential(n,r)}catch{return null}}}Wt.GOOGLE_SIGN_IN_METHOD="google.com";Wt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends ir{constructor(){super("github.com")}static credential(t){return we._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Kt.credentialFromTaggedObject(t)}static credentialFromError(t){return Kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Kt.credential(t.oauthAccessToken)}catch{return null}}}Kt.GITHUB_SIGN_IN_METHOD="github.com";Kt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends ir{constructor(){super("twitter.com")}static credential(t,n){return we._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Gt.credentialFromTaggedObject(t)}static credentialFromError(t){return Gt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Gt.credential(n,r)}catch{return null}}}Gt.TWITTER_SIGN_IN_METHOD="twitter.com";Gt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await ge._fromIdTokenResponse(t,r,i),o=pc(r);return new Ye({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=pc(r);return new Ye({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function pc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr extends Ot{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Kr.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Kr(t,n,r,i)}}function bh(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Kr._fromErrorAndOperation(e,s,t,r):s})}async function Ty(e,t,n=!1){const r=await On(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ye._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iy(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await On(e,bh(r,i,t,e),n);P(s.idToken,r,"internal-error");const o=Wo(s.idToken);P(o,r,"internal-error");const{sub:a}=o;return P(e.uid===a,r,"user-mismatch"),Ye._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Vt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wy(e,t,n=!1){const r="signIn",i=await bh(e,r,t),s=await Ye._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}function Ay(e,t,n,r){return B(e).onIdTokenChanged(t,n,r)}function Ry(e,t,n){return B(e).beforeAuthStateChanged(t,n)}function Py(e,t,n,r){return B(e).onAuthStateChanged(t,n,r)}function mT(e){return B(e).signOut()}const Gr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Gr,"1"),this.storage.removeItem(Gr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(){const e=ut();return Ko(e)||ki(e)}const Cy=1e3,by=10;class Dh extends kh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Sy()&&oy(),this.fallbackToPolling=Rh(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);sy()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,by):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Cy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Dh.type="LOCAL";const ky=Dh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh extends kh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Nh.type="SESSION";const Vh=Nh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dy(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Ni(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),c=await Dy(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ni.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=Qo("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(){return window}function Vy(e){Dt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(){return typeof Dt().WorkerGlobalScope<"u"&&typeof Dt().importScripts=="function"}async function Oy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function My(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Ly(){return Oh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh="firebaseLocalStorageDb",xy=1,Qr="firebaseLocalStorage",Lh="fbase_key";class sr{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vi(e,t){return e.transaction([Qr],t?"readwrite":"readonly").objectStore(Qr)}function Uy(){const e=indexedDB.deleteDatabase(Mh);return new sr(e).toPromise()}function Os(){const e=indexedDB.open(Mh,xy);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Qr,{keyPath:Lh})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Qr)?t(r):(r.close(),await Uy(),t(await Os()))})})}async function mc(e,t,n){const r=Vi(e,!0).put({[Lh]:t,value:n});return new sr(r).toPromise()}async function Fy(e,t){const n=Vi(e,!1).get(t),r=await new sr(n).toPromise();return r===void 0?null:r.value}function gc(e,t){const n=Vi(e,!0).delete(t);return new sr(n).toPromise()}const By=800,$y=3;class xh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Os(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>$y)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Oh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ni._getInstance(Ly()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Oy(),!this.activeServiceWorker)return;this.sender=new Ny(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||My()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Os();return await mc(t,Gr,"1"),await gc(t,Gr),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>mc(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Fy(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>gc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Vi(i,!1).getAll();return new sr(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),By)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xh.type="LOCAL";const qy=xh;new nr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(e,t){return t?xt(t):(P(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo extends Ch{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Fe(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Fe(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Fe(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function jy(e){return wy(e.auth,new Yo(e),e.bypassAuthState)}function zy(e){const{auth:t,user:n}=e;return P(n,t,"internal-error"),Iy(n,new Yo(e),e.bypassAuthState)}async function Hy(e){const{auth:t,user:n}=e;return P(n,t,"internal-error"),Ty(n,new Yo(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return jy;case"linkViaPopup":case"linkViaRedirect":return Hy;case"reauthViaPopup":case"reauthViaRedirect":return zy;default:Vt(this.auth,"internal-error")}}resolve(t){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy=new nr(2e3,1e4);async function gT(e,t,n){const r=Di(e);B_(e,t,Go);const i=Uh(r,n);return new pe(r,"signInViaPopup",t,i).executeNotNull()}class pe extends Fh{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,pe.currentPopupAction&&pe.currentPopupAction.cancel(),pe.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return P(t,this.auth,"internal-error"),t}async onExecution(){jt(this.filter.length===1,"Popup operations only handle one event");const t=Qo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pe.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Wy.get())};t()}}pe.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky="pendingRedirect",Ar=new Map;class Gy extends Fh{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Ar.get(this.auth._key());if(!t){try{const r=await Qy(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Ar.set(this.auth._key(),t)}return this.bypassAuthState||Ar.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Qy(e,t){const n=Jy(t),r=Xy(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Yy(e,t){Ar.set(e._key(),t)}function Xy(e){return xt(e._redirectPersistence)}function Jy(e){return wr(Ky,e.config.apiKey,e.name)}async function Zy(e,t,n=!1){const r=Di(e),i=Uh(r,t),o=await new Gy(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv=10*60*1e3;class ev{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!nv(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Bh(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(kt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=tv&&this.cachedEventUids.clear(),this.cachedEventUids.has(_c(t))}saveEventToCache(t){this.cachedEventUids.add(_c(t)),this.lastProcessedEventTime=Date.now()}}function _c(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Bh({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function nv(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bh(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rv(e,t={}){return rr(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sv=/^https?/;async function ov(e){if(e.config.emulator)return;const{authorizedDomains:t}=await rv(e);for(const n of t)try{if(av(n))return}catch{}Vt(e,"unauthorized-domain")}function av(e){const t=Vs(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!sv.test(n))return!1;if(iv.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv=new nr(3e4,6e4);function yc(){const e=Dt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function uv(e){return new Promise((t,n)=>{var r,i,s;function o(){yc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{yc(),n(kt(e,"network-request-failed"))},timeout:cv.get()})}if(!((i=(r=Dt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=Dt().gapi)===null||s===void 0)&&s.load)o();else{const a=py("iframefcb");return Dt()[a]=()=>{gapi.load?o():n(kt(e,"network-request-failed"))},fy(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw Rr=null,t})}let Rr=null;function lv(e){return Rr=Rr||uv(e),Rr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv=new nr(5e3,15e3),dv="__/auth/iframe",fv="emulator/auth/iframe",pv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gv(e){const t=e.config;P(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Ho(t,fv):`https://${e.config.authDomain}/${dv}`,r={apiKey:t.apiKey,appName:e.name,v:Re},i=mv.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${xn(r).slice(1)}`}async function _v(e){const t=await lv(e),n=Dt().gapi;return P(n,e,"internal-error"),t.open({where:document.body,url:gv(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pv,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=kt(e,"network-request-failed"),a=Dt().setTimeout(()=>{s(o)},hv.get());function c(){Dt().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vv=500,Ev=600,Tv="_blank",Iv="http://localhost";class vc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wv(e,t,n,r=vv,i=Ev){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},yv),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ut().toLowerCase();n&&(a=Eh(u)?Tv:n),vh(u)&&(t=t||Iv,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[f,v])=>`${d}${f}=${v},`,"");if(iy(u)&&a!=="_self")return Av(t||"",a),new vc(null);const h=window.open(t||"",a,l);P(h,e,"popup-blocked");try{h.focus()}catch{}return new vc(h)}function Av(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv="__/auth/handler",Pv="emulator/auth/handler",Sv=encodeURIComponent("fac");async function Ec(e,t,n,r,i,s){P(e.config.authDomain,e,"auth-domain-config-required"),P(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Re,eventId:i};if(t instanceof Go){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",wd(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,h]of Object.entries(s||{}))o[l]=h}if(t instanceof ir){const l=t.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await e._getAppCheckToken(),u=c?`#${Sv}=${encodeURIComponent(c)}`:"";return`${Cv(e)}?${xn(a).slice(1)}${u}`}function Cv({config:e}){return e.emulator?Ho(e,Pv):`https://${e.authDomain}/${Rv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi="webStorageSupport";class bv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vh,this._completeRedirectFn=Zy,this._overrideRedirectResult=Yy}async _openPopup(t,n,r,i){var s;jt((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ec(t,n,r,Vs(),i);return wv(t,o,Qo())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await Ec(t,n,r,Vs(),i);return Vy(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(jt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await _v(t),r=new ev(t);return n.register("authEvent",i=>(P(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Zi,{type:Zi},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Zi];o!==void 0&&n(!!o),Vt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ov(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Rh()||Ko()||ki()}}const kv=bv;var Tc="@firebase/auth",Ic="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Vv(e){ve(new te("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;P(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ph(e)},u=new hy(r,i,s,c);return gy(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),ve(new te("auth-internal",t=>{const n=Di(t.getProvider("auth").getImmediate());return(r=>new Dv(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ct(Tc,Ic,Nv(e)),Ct(Tc,Ic,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov=5*60,Mv=Mc("authIdTokenMaxAge")||Ov;let wc=null;const Lv=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Mv)return;const i=n==null?void 0:n.token;wc!==i&&(wc=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function xv(e=Us()){const t=Xr(e,"auth");if(t.isInitialized())return t.getImmediate();const n=my(e,{popupRedirectResolver:kv,persistence:[qy,ky,Vh]}),r=Mc("authTokenSyncURL");if(r){const s=Lv(r);Ry(n,s,()=>s(n.currentUser)),Ay(n,o=>s(o))}const i=Nc("auth");return i&&_y(n,`http://${i}`),n}Vv("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h="firebasestorage.googleapis.com",qh="storageBucket",Uv=2*60*1e3,Fv=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z extends Ot{constructor(t,n,r=0){super(ts(t),`Firebase Storage: ${n} (${ts(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,z.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return ts(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var j;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(j||(j={}));function ts(e){return"storage/"+e}function Xo(){const e="An unknown error occurred, please check the error payload for server response.";return new z(j.UNKNOWN,e)}function Bv(e){return new z(j.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function $v(e){return new z(j.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function qv(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new z(j.UNAUTHENTICATED,e)}function jv(){return new z(j.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function zv(e){return new z(j.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function Hv(){return new z(j.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Wv(){return new z(j.CANCELED,"User canceled the upload/download.")}function Kv(e){return new z(j.INVALID_URL,"Invalid URL '"+e+"'.")}function Gv(e){return new z(j.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Qv(){return new z(j.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+qh+"' property when initializing the app?")}function Yv(){return new z(j.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Xv(){return new z(j.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Jv(e){return new z(j.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ms(e){return new z(j.INVALID_ARGUMENT,e)}function jh(){return new z(j.APP_DELETED,"The Firebase app was deleted.")}function Zv(e){return new z(j.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function En(e,t){return new z(j.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function on(e){throw new z(j.INTERNAL_ERROR,"Internal error: "+e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=_t.makeFromUrl(t,n)}catch{return new _t(t,"")}if(r.path==="")return r;throw Gv(t)}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(M){M.path.charAt(M.path.length-1)==="/"&&(M.path_=M.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(M){M.path_=decodeURIComponent(M.path)}const l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${l}/b/${i}/o${d}`,"i"),v={bucket:1,path:3},I=n===$h?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",b=new RegExp(`^https?://${I}/${i}/${y}`,"i"),O=[{regex:a,indices:c,postModify:s},{regex:f,indices:v,postModify:u},{regex:b,indices:{bucket:1,path:2},postModify:u}];for(let M=0;M<O.length;M++){const pt=O[M],mt=pt.regex.exec(t);if(mt){const ue=mt[pt.indices.bucket];let ke=mt[pt.indices.path];ke||(ke=""),r=new _t(ue,ke),pt.postModify(r);break}}if(r==null)throw Kv(t);return r}}class tE{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eE(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...y){u||(u=!0,t.apply(null,y))}function h(y){i=setTimeout(()=>{i=null,e(f,c())},y)}function d(){s&&clearTimeout(s)}function f(y,...b){if(u){d();return}if(y){d(),l.call(null,y,...b);return}if(c()||o){d(),l.call(null,y,...b);return}r<64&&(r*=2);let O;a===1?(a=2,O=0):O=(r+Math.random())*1e3,h(O)}let v=!1;function I(y){v||(v=!0,d(),!u&&(i!==null?(y||(a=2),clearTimeout(i),h(0)):y||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,I(!0)},n),I}function nE(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(e){return e!==void 0}function iE(e){return typeof e=="object"&&!Array.isArray(e)}function Jo(e){return typeof e=="string"||e instanceof String}function Ac(e){return Zo()&&e instanceof Blob}function Zo(){return typeof Blob<"u"&&!pd()}function Rc(e,t,n,r){if(r<t)throw Ms(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw Ms(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(e,t,n){let r=t;return n==null&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function zh(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(_e||(_e={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=t.indexOf(e)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(t,n,r,i,s,o,a,c,u,l,h,d=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,v)=>{this.resolve_=f,this.reject_=v,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new gr(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===_e.NO_ERROR,c=s.getStatus();if(!a||sE(c,this.additionalRetryCodes_)&&this.retry){const l=s.getErrorCode()===_e.ABORT;r(!1,new gr(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new gr(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());rE(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=Xo();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?jh():Wv();o(c)}else{const c=Hv();o(c)}};this.canceled_?n(!1,new gr(!1,null,!0)):this.backoffId_=eE(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&nE(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class gr{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function aE(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function cE(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function uE(e,t){t&&(e["X-Firebase-GMPID"]=t)}function lE(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function hE(e,t,n,r,i,s,o=!0){const a=zh(e.urlParams),c=e.url+a,u=Object.assign({},e.headers);return uE(u,t),aE(u,n),cE(u,s),lE(u,r),new oE(c,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function fE(...e){const t=dE();if(t!==void 0){const n=new t;for(let r=0;r<e.length;r++)n.append(e[r]);return n.getBlob()}else{if(Zo())return new Blob(e);throw new z(j.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function pE(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(e){if(typeof atob>"u")throw Jv("base-64");return atob(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class es{constructor(t,n){this.data=t,this.contentType=n||null}}function gE(e,t){switch(e){case St.RAW:return new es(Hh(t));case St.BASE64:case St.BASE64URL:return new es(Wh(e,t));case St.DATA_URL:return new es(yE(t),vE(t))}throw Xo()}function Hh(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const s=r,o=e.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function _E(e){let t;try{t=decodeURIComponent(e)}catch{throw En(St.DATA_URL,"Malformed data URL.")}return Hh(t)}function Wh(e,t){switch(e){case St.BASE64:{const i=t.indexOf("-")!==-1,s=t.indexOf("_")!==-1;if(i||s)throw En(e,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case St.BASE64URL:{const i=t.indexOf("+")!==-1,s=t.indexOf("/")!==-1;if(i||s)throw En(e,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=mE(t)}catch(i){throw i.message.includes("polyfill")?i:En(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class Kh{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw En(St.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=EE(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function yE(e){const t=new Kh(e);return t.base64?Wh(St.BASE64,t.rest):_E(t.rest)}function vE(e){return new Kh(e).contentType}function EE(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(t,n){let r=0,i="";Ac(t)?(this.data_=t,r=t.size,i=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,n){if(Ac(this.data_)){const r=this.data_,i=pE(r,t,n);return i===null?null:new Qt(i)}else{const r=new Uint8Array(this.data_.buffer,t,n-t);return new Qt(r,!0)}}static getBlob(...t){if(Zo()){const n=t.map(r=>r instanceof Qt?r.data_:r);return new Qt(fE.apply(null,n))}else{const n=t.map(o=>Jo(o)?gE(St.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Qt(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(e){let t;try{t=JSON.parse(e)}catch{return null}return iE(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function IE(e,t){const n=t.split("/").filter(r=>r.length>0).join("/");return e.length===0?n:e+"/"+n}function Qh(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wE(e,t){return t}class ht{constructor(t,n,r,i){this.server=t,this.local=n||t,this.writable=!!r,this.xform=i||wE}}let _r=null;function AE(e){return!Jo(e)||e.length<2?e:Qh(e)}function Yh(){if(_r)return _r;const e=[];e.push(new ht("bucket")),e.push(new ht("generation")),e.push(new ht("metageneration")),e.push(new ht("name","fullPath",!0));function t(s,o){return AE(o)}const n=new ht("name");n.xform=t,e.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new ht("size");return i.xform=r,e.push(i),e.push(new ht("timeCreated")),e.push(new ht("updated")),e.push(new ht("md5Hash",null,!0)),e.push(new ht("cacheControl",null,!0)),e.push(new ht("contentDisposition",null,!0)),e.push(new ht("contentEncoding",null,!0)),e.push(new ht("contentLanguage",null,!0)),e.push(new ht("contentType",null,!0)),e.push(new ht("metadata","customMetadata",!0)),_r=e,_r}function RE(e,t){function n(){const r=e.bucket,i=e.fullPath,s=new _t(r,i);return t._makeStorageReference(s)}Object.defineProperty(e,"ref",{get:n})}function PE(e,t,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,t[o.server])}return RE(r,e),r}function Xh(e,t,n){const r=Gh(t);return r===null?null:PE(e,r,n)}function SE(e,t,n,r){const i=Gh(t);if(i===null||!Jo(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const l=e.bucket,h=e.fullPath,d="/b/"+o(l)+"/o/"+o(h),f=ta(d,n,r),v=zh({alt:"media",token:u});return f+v})[0]}function CE(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const s=t[i];s.writable&&(n[s.server]=e[s.local])}return JSON.stringify(n)}class Jh{constructor(t,n,r,i){this.url=t,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zh(e){if(!e)throw Xo()}function bE(e,t){function n(r,i){const s=Xh(e,i,t);return Zh(s!==null),s}return n}function kE(e,t){function n(r,i){const s=Xh(e,i,t);return Zh(s!==null),SE(s,i,e.host,e._protocol)}return n}function td(e){function t(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=jv():i=qv():n.getStatus()===402?i=$v(e.bucket):n.getStatus()===403?i=zv(e.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return t}function DE(e){const t=td(e);function n(r,i){let s=t(r,i);return r.getStatus()===404&&(s=Bv(e.path)),s.serverResponse=i.serverResponse,s}return n}function NE(e,t,n){const r=t.fullServerUrl(),i=ta(r,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new Jh(i,s,kE(e,n),o);return a.errorHandler=DE(t),a}function VE(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function OE(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=VE(null,t)),r}function ME(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let O="";for(let M=0;M<2;M++)O=O+Math.random().toString().slice(2);return O}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=OE(t,r,i),l=CE(u,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+c+"--",f=Qt.getBlob(h,r,d);if(f===null)throw Yv();const v={name:u.fullPath},I=ta(s,e.host,e._protocol),y="POST",b=e.maxUploadRetryTime,L=new Jh(I,y,bE(e,n),b);return L.urlParams=v,L.headers=o,L.body=f.uploadData(),L.errorHandler=td(t),L}class LE{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=_e.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=_e.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=_e.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,r,i){if(this.sent_)throw on("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw on("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw on("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw on("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw on("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class xE extends LE{initXhr(){this.xhr_.responseType="text"}}function ed(){return new xE}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(t,n){this._service=t,n instanceof _t?this._location=n:this._location=_t.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new Ae(t,n)}get root(){const t=new _t(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Qh(this._location.path)}get storage(){return this._service}get parent(){const t=TE(this._location.path);if(t===null)return null;const n=new _t(this._location.bucket,t);return new Ae(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw Zv(t)}}function UE(e,t,n){e._throwIfRoot("uploadBytes");const r=ME(e.storage,e._location,Yh(),new Qt(t,!0),n);return e.storage.makeRequestWithTokens(r,ed).then(i=>({metadata:i,ref:e}))}function FE(e){e._throwIfRoot("getDownloadURL");const t=NE(e.storage,e._location,Yh());return e.storage.makeRequestWithTokens(t,ed).then(n=>{if(n===null)throw Xv();return n})}function BE(e,t){const n=IE(e._location.path,t),r=new _t(e._location.bucket,n);return new Ae(e.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(e){return/^[A-Za-z]+:\/\//.test(e)}function qE(e,t){return new Ae(e,t)}function nd(e,t){if(e instanceof ea){const n=e;if(n._bucket==null)throw Qv();const r=new Ae(n,n._bucket);return t!=null?nd(r,t):r}else return t!==void 0?BE(e,t):e}function jE(e,t){if(t&&$E(t)){if(e instanceof ea)return qE(e,t);throw Ms("To use ref(service, url), the first argument must be a Storage instance.")}else return nd(e,t)}function Pc(e,t){const n=t==null?void 0:t[qh];return n==null?null:_t.makeFromBucketSpec(n,e)}function zE(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken=typeof i=="string"?i:Lc(i,e.app.options.projectId))}class ea{constructor(t,n,r,i,s){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=$h,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Uv,this._maxUploadRetryTime=Fv,this._requests=new Set,i!=null?this._bucket=_t.makeFromBucketSpec(i,this._host):this._bucket=Pc(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=_t.makeFromBucketSpec(this._url,t):this._bucket=Pc(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Rc("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Rc("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Ae(this,t)}_makeRequest(t,n,r,i,s=!0){if(this._deleted)return new tE(jh());{const o=hE(t,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,i).getPromise()}}const Sc="@firebase/storage",Cc="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd="storage";function _T(e,t,n){return e=B(e),UE(e,t,n)}function yT(e){return e=B(e),FE(e)}function vT(e,t){return e=B(e),jE(e,t)}function HE(e=Us(),t){e=B(e);const r=Xr(e,rd).getImmediate({identifier:t}),i=Vc("storage");return i&&WE(r,...i),r}function WE(e,t,n,r={}){zE(e,t,n,r)}function KE(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new ea(n,r,i,t,Re)}function GE(){ve(new te(rd,KE,"PUBLIC").setMultipleInstances(!0)),Ct(Sc,Cc,""),Ct(Sc,Cc,"esm2017")}GE();const QE={apiKey:"AIzaSyCH8Kp160gg11O1nBR0Onb0vKK2mWPO-bM",authDomain:"svelte-course-5618d.firebaseapp.com",projectId:"svelte-course-5618d",storageBucket:"svelte-course-5618d.appspot.com",messagingSenderId:"976032270730",appId:"1:976032270730:web:cfa5ba7d374084577ce073",measurementId:"G-BER1T1Z907"};Fc(QE);const YE=A_(),an=xv(),ET=HE();function XE(){let e;if(!an||!globalThis.window){console.warn("Auth is not initialized or not in browser");const{subscribe:n}=ns(null);return{subscribe:n}}const{subscribe:t}=ns((an==null?void 0:an.currentUser)??null,n=>(e=Py(an,r=>{n(r)}),()=>e()));return{subscribe:t}}const JE=XE();function ZE(e){let t;const n=I_(YE,e),{subscribe:r}=ns(null,i=>(t=L_(n,s=>{i(s.data()??null)}),()=>t()));return{subscribe:r,ref:n,id:n.id}}const TT=id(JE,(e,t)=>{if(e)return ZE(`users/${e.uid}`).subscribe(t);t(null)});export{Wt as G,TT as a,fT as b,iT as c,YE as d,dT as e,I_ as f,uT as g,hT as h,an as i,gT as j,mT as k,aT as l,ET as m,yT as n,_T as o,cT as p,sT as q,vT as r,lT as s,pT as t,JE as u,oT as w};
