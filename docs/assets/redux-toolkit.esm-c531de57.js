import{r as $,a as qt}from"./index-6d58bef0.js";var mt={exports:{}},gt={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K=$;function zt(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Vt=typeof Object.is=="function"?Object.is:zt,Ut=K.useState,Kt=K.useEffect,Bt=K.useLayoutEffect,Gt=K.useDebugValue;function Xt(e,t){var r=t(),n=Ut({inst:{value:r,getSnapshot:t}}),o=n[0].inst,u=n[1];return Bt(function(){o.value=r,o.getSnapshot=t,je(o)&&u({inst:o})},[e,r,t]),Kt(function(){return je(o)&&u({inst:o}),e(function(){je(o)&&u({inst:o})})},[e]),Gt(r),r}function je(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Vt(e,r)}catch{return!0}}function Ht(e,t){return t()}var Yt=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Ht:Xt;gt.useSyncExternalStore=K.useSyncExternalStore!==void 0?K.useSyncExternalStore:Yt;mt.exports=gt;var Jt=mt.exports,wt={exports:{}},St={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ie=$,Qt=Jt;function Zt(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var er=typeof Object.is=="function"?Object.is:Zt,tr=Qt.useSyncExternalStore,rr=ie.useRef,nr=ie.useEffect,or=ie.useMemo,ur=ie.useDebugValue;St.useSyncExternalStoreWithSelector=function(e,t,r,n,o){var u=rr(null);if(u.current===null){var a={hasValue:!1,value:null};u.current=a}else a=u.current;u=or(function(){function f(d){if(!i){if(i=!0,s=d,d=n(d),o!==void 0&&a.hasValue){var y=a.value;if(o(y,d))return p=y}return p=d}if(y=p,er(s,d))return y;var v=n(d);return o!==void 0&&o(y,v)?y:(s=d,p=v)}var i=!1,s,p,l=r===void 0?null:r;return[function(){return f(t())},l===null?void 0:function(){return f(l())}]},[t,r,n,o]);var c=tr(e,u[0],u[1]);return nr(function(){a.hasValue=!0,a.value=c},[c]),ur(c),c};wt.exports=St;var ir=wt.exports;function ar(e){e()}let Ot=ar;const cr=e=>Ot=e,fr=()=>Ot,et=Symbol.for("react-redux-context"),tt=typeof globalThis<"u"?globalThis:{};function sr(){var e;if(!$.createContext)return{};const t=(e=tt[et])!=null?e:tt[et]=new Map;let r=t.get($.createContext);return r||(r=$.createContext(null),t.set($.createContext,r)),r}const L=sr();function Fe(e=L){return function(){return $.useContext(e)}}const Pt=Fe(),lr=()=>{throw new Error("uSES not initialized!")};let Et=lr;const dr=e=>{Et=e},pr=(e,t)=>e===t;function yr(e=L){const t=e===L?Pt:Fe(e);return function(n,o={}){const{equalityFn:u=pr,stabilityCheck:a=void 0,noopCheck:c=void 0}=typeof o=="function"?{equalityFn:o}:o,{store:f,subscription:i,getServerState:s,stabilityCheck:p,noopCheck:l}=t();$.useRef(!0);const d=$.useCallback({[n.name](v){return n(v)}}[n.name],[n,p,a]),y=Et(i.addNestedSub,f.getState,s||f.getState,d,u);return $.useDebugValue(y),y}}const wn=yr();var $t={exports:{}},g={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P=typeof Symbol=="function"&&Symbol.for,qe=P?Symbol.for("react.element"):60103,ze=P?Symbol.for("react.portal"):60106,ae=P?Symbol.for("react.fragment"):60107,ce=P?Symbol.for("react.strict_mode"):60108,fe=P?Symbol.for("react.profiler"):60114,se=P?Symbol.for("react.provider"):60109,le=P?Symbol.for("react.context"):60110,Ve=P?Symbol.for("react.async_mode"):60111,de=P?Symbol.for("react.concurrent_mode"):60111,pe=P?Symbol.for("react.forward_ref"):60112,ye=P?Symbol.for("react.suspense"):60113,vr=P?Symbol.for("react.suspense_list"):60120,ve=P?Symbol.for("react.memo"):60115,he=P?Symbol.for("react.lazy"):60116,hr=P?Symbol.for("react.block"):60121,br=P?Symbol.for("react.fundamental"):60117,mr=P?Symbol.for("react.responder"):60118,gr=P?Symbol.for("react.scope"):60119;function C(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case qe:switch(e=e.type,e){case Ve:case de:case ae:case fe:case ce:case ye:return e;default:switch(e=e&&e.$$typeof,e){case le:case pe:case he:case ve:case se:return e;default:return t}}case ze:return t}}}function xt(e){return C(e)===de}g.AsyncMode=Ve;g.ConcurrentMode=de;g.ContextConsumer=le;g.ContextProvider=se;g.Element=qe;g.ForwardRef=pe;g.Fragment=ae;g.Lazy=he;g.Memo=ve;g.Portal=ze;g.Profiler=fe;g.StrictMode=ce;g.Suspense=ye;g.isAsyncMode=function(e){return xt(e)||C(e)===Ve};g.isConcurrentMode=xt;g.isContextConsumer=function(e){return C(e)===le};g.isContextProvider=function(e){return C(e)===se};g.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===qe};g.isForwardRef=function(e){return C(e)===pe};g.isFragment=function(e){return C(e)===ae};g.isLazy=function(e){return C(e)===he};g.isMemo=function(e){return C(e)===ve};g.isPortal=function(e){return C(e)===ze};g.isProfiler=function(e){return C(e)===fe};g.isStrictMode=function(e){return C(e)===ce};g.isSuspense=function(e){return C(e)===ye};g.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ae||e===de||e===fe||e===ce||e===ye||e===vr||typeof e=="object"&&e!==null&&(e.$$typeof===he||e.$$typeof===ve||e.$$typeof===se||e.$$typeof===le||e.$$typeof===pe||e.$$typeof===br||e.$$typeof===mr||e.$$typeof===gr||e.$$typeof===hr)};g.typeOf=C;$t.exports=g;var wr=$t.exports,jt=wr,Sr={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Or={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ct={};Ct[jt.ForwardRef]=Sr;Ct[jt.Memo]=Or;var w={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ue=Symbol.for("react.element"),Ke=Symbol.for("react.portal"),be=Symbol.for("react.fragment"),me=Symbol.for("react.strict_mode"),ge=Symbol.for("react.profiler"),we=Symbol.for("react.provider"),Se=Symbol.for("react.context"),Pr=Symbol.for("react.server_context"),Oe=Symbol.for("react.forward_ref"),Pe=Symbol.for("react.suspense"),Ee=Symbol.for("react.suspense_list"),$e=Symbol.for("react.memo"),xe=Symbol.for("react.lazy"),Er=Symbol.for("react.offscreen"),At;At=Symbol.for("react.module.reference");function A(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ue:switch(e=e.type,e){case be:case ge:case me:case Pe:case Ee:return e;default:switch(e=e&&e.$$typeof,e){case Pr:case Se:case Oe:case xe:case $e:case we:return e;default:return t}}case Ke:return t}}}w.ContextConsumer=Se;w.ContextProvider=we;w.Element=Ue;w.ForwardRef=Oe;w.Fragment=be;w.Lazy=xe;w.Memo=$e;w.Portal=Ke;w.Profiler=ge;w.StrictMode=me;w.Suspense=Pe;w.SuspenseList=Ee;w.isAsyncMode=function(){return!1};w.isConcurrentMode=function(){return!1};w.isContextConsumer=function(e){return A(e)===Se};w.isContextProvider=function(e){return A(e)===we};w.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ue};w.isForwardRef=function(e){return A(e)===Oe};w.isFragment=function(e){return A(e)===be};w.isLazy=function(e){return A(e)===xe};w.isMemo=function(e){return A(e)===$e};w.isPortal=function(e){return A(e)===Ke};w.isProfiler=function(e){return A(e)===ge};w.isStrictMode=function(e){return A(e)===me};w.isSuspense=function(e){return A(e)===Pe};w.isSuspenseList=function(e){return A(e)===Ee};w.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===be||e===ge||e===me||e===Pe||e===Ee||e===Er||typeof e=="object"&&e!==null&&(e.$$typeof===xe||e.$$typeof===$e||e.$$typeof===we||e.$$typeof===Se||e.$$typeof===Oe||e.$$typeof===At||e.getModuleId!==void 0)};w.typeOf=A;function $r(){const e=fr();let t=null,r=null;return{clear(){t=null,r=null},notify(){e(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){let n=[],o=t;for(;o;)n.push(o),o=o.next;return n},subscribe(n){let o=!0,u=r={callback:n,next:null,prev:r};return u.prev?u.prev.next=u:t=u,function(){!o||t===null||(o=!1,u.next?u.next.prev=u.prev:r=u.prev,u.prev?u.prev.next=u.next:t=u.next)}}}}const rt={notify(){},get:()=>[]};function xr(e,t){let r,n=rt,o=0,u=!1;function a(v){s();const h=n.subscribe(v);let b=!1;return()=>{b||(b=!0,h(),p())}}function c(){n.notify()}function f(){y.onStateChange&&y.onStateChange()}function i(){return u}function s(){o++,r||(r=t?t.addNestedSub(f):e.subscribe(f),n=$r())}function p(){o--,r&&o===0&&(r(),r=void 0,n.clear(),n=rt)}function l(){u||(u=!0,s())}function d(){u&&(u=!1,p())}const y={addNestedSub:a,notifyNestedSubs:c,handleChangeWrapper:f,isSubscribed:i,trySubscribe:l,tryUnsubscribe:d,getListeners:()=>n};return y}const jr=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Cr=jr?$.useLayoutEffect:$.useEffect;function Sn({store:e,context:t,children:r,serverState:n,stabilityCheck:o="once",noopCheck:u="once"}){const a=$.useMemo(()=>{const i=xr(e);return{store:e,subscription:i,getServerState:n?()=>n:void 0,stabilityCheck:o,noopCheck:u}},[e,n,o,u]),c=$.useMemo(()=>e.getState(),[e]);Cr(()=>{const{subscription:i}=a;return i.onStateChange=i.notifyNestedSubs,i.trySubscribe(),c!==e.getState()&&i.notifyNestedSubs(),()=>{i.tryUnsubscribe(),i.onStateChange=void 0}},[a,c]);const f=t||L;return $.createElement(f.Provider,{value:a},r)}function _t(e=L){const t=e===L?Pt:Fe(e);return function(){const{store:n}=t();return n}}const Ar=_t();function _r(e=L){const t=e===L?Ar:_t(e);return function(){return t().dispatch}}const On=_r();dr(ir.useSyncExternalStoreWithSelector);cr(qt.unstable_batchedUpdates);function M(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+e+(r.length?" "+r.map(function(o){return"'"+o+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function W(e){return!!e&&!!e[O]}function T(e){var t;return!!e&&(function(r){if(!r||typeof r!="object")return!1;var n=Object.getPrototypeOf(r);if(n===null)return!0;var o=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return o===Object||typeof o=="function"&&Function.toString.call(o)===Wr}(e)||Array.isArray(e)||!!e[ft]||!!(!((t=e.constructor)===null||t===void 0)&&t[ft])||Be(e)||Ge(e))}function q(e,t,r){r===void 0&&(r=!1),G(e)===0?(r?Object.keys:U)(e).forEach(function(n){r&&typeof n=="symbol"||t(n,e[n],e)}):e.forEach(function(n,o){return t(o,n,e)})}function G(e){var t=e[O];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Be(e)?2:Ge(e)?3:0}function V(e,t){return G(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Rr(e,t){return G(e)===2?e.get(t):e[t]}function Rt(e,t,r){var n=G(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function Mt(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Be(e){return kr&&e instanceof Map}function Ge(e){return Lr&&e instanceof Set}function F(e){return e.o||e.t}function Xe(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Tt(e);delete t[O];for(var r=U(t),n=0;n<r.length;n++){var o=r[n],u=t[o];u.writable===!1&&(u.writable=!0,u.configurable=!0),(u.get||u.set)&&(t[o]={configurable:!0,writable:!0,enumerable:u.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function He(e,t){return t===void 0&&(t=!1),Ye(e)||W(e)||!T(e)||(G(e)>1&&(e.set=e.add=e.clear=e.delete=Mr),Object.freeze(e),t&&q(e,function(r,n){return He(n,!0)},!0)),e}function Mr(){M(2)}function Ye(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function I(e){var t=Le[e];return t||M(18,e),t}function Ir(e,t){Le[e]||(Le[e]=t)}function De(){return Q}function Ce(e,t){t&&(I("Patches"),e.u=[],e.s=[],e.v=t)}function te(e){Ne(e),e.p.forEach(Tr),e.p=null}function Ne(e){e===Q&&(Q=e.l)}function nt(e){return Q={p:[],l:Q,h:e,m:!0,_:0}}function Tr(e){var t=e[O];t.i===0||t.i===1?t.j():t.g=!0}function Ae(e,t){t._=t.p.length;var r=t.p[0],n=e!==void 0&&e!==r;return t.h.O||I("ES5").S(t,e,n),n?(r[O].P&&(te(t),M(4)),T(e)&&(e=re(t,e),t.l||ne(t,e)),t.u&&I("Patches").M(r[O].t,e,t.u,t.s)):e=re(t,r,[]),te(t),t.u&&t.v(t.u,t.s),e!==It?e:void 0}function re(e,t,r){if(Ye(t))return t;var n=t[O];if(!n)return q(t,function(c,f){return ot(e,n,t,c,f,r)},!0),t;if(n.A!==e)return t;if(!n.P)return ne(e,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=n.i===4||n.i===5?n.o=Xe(n.k):n.o,u=o,a=!1;n.i===3&&(u=new Set(o),o.clear(),a=!0),q(u,function(c,f){return ot(e,n,o,c,f,r,a)}),ne(e,o,!1),r&&e.u&&I("Patches").N(n,r,e.u,e.s)}return n.o}function ot(e,t,r,n,o,u,a){if(W(o)){var c=re(e,o,u&&t&&t.i!==3&&!V(t.R,n)?u.concat(n):void 0);if(Rt(r,n,c),!W(c))return;e.m=!1}else a&&r.add(o);if(T(o)&&!Ye(o)){if(!e.h.D&&e._<1)return;re(e,o),t&&t.A.l||ne(e,o)}}function ne(e,t,r){r===void 0&&(r=!1),!e.l&&e.h.D&&e.m&&He(t,r)}function _e(e,t){var r=e[O];return(r?F(r):e)[t]}function ut(e,t){if(t in e)for(var r=Object.getPrototypeOf(e);r;){var n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=Object.getPrototypeOf(r)}}function D(e){e.P||(e.P=!0,e.l&&D(e.l))}function Re(e){e.o||(e.o=Xe(e.t))}function ke(e,t,r){var n=Be(t)?I("MapSet").F(t,r):Ge(t)?I("MapSet").T(t,r):e.O?function(o,u){var a=Array.isArray(o),c={i:a?1:0,A:u?u.A:De(),P:!1,I:!1,R:{},l:u,t:o,k:null,o:null,j:null,C:!1},f=c,i=Z;a&&(f=[c],i=J);var s=Proxy.revocable(f,i),p=s.revoke,l=s.proxy;return c.k=l,c.j=p,l}(t,r):I("ES5").J(t,r);return(r?r.A:De()).p.push(n),n}function Dr(e){return W(e)||M(22,e),function t(r){if(!T(r))return r;var n,o=r[O],u=G(r);if(o){if(!o.P&&(o.i<4||!I("ES5").K(o)))return o.t;o.I=!0,n=it(r,u),o.I=!1}else n=it(r,u);return q(n,function(a,c){o&&Rr(o.t,a)===c||Rt(n,a,t(c))}),u===3?new Set(n):n}(e)}function it(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Xe(e)}function Nr(){function e(u,a){var c=o[u];return c?c.enumerable=a:o[u]=c={configurable:!0,enumerable:a,get:function(){var f=this[O];return Z.get(f,u)},set:function(f){var i=this[O];Z.set(i,u,f)}},c}function t(u){for(var a=u.length-1;a>=0;a--){var c=u[a][O];if(!c.P)switch(c.i){case 5:n(c)&&D(c);break;case 4:r(c)&&D(c)}}}function r(u){for(var a=u.t,c=u.k,f=U(c),i=f.length-1;i>=0;i--){var s=f[i];if(s!==O){var p=a[s];if(p===void 0&&!V(a,s))return!0;var l=c[s],d=l&&l[O];if(d?d.t!==p:!Mt(l,p))return!0}}var y=!!a[O];return f.length!==U(a).length+(y?0:1)}function n(u){var a=u.k;if(a.length!==u.t.length)return!0;var c=Object.getOwnPropertyDescriptor(a,a.length-1);if(c&&!c.get)return!0;for(var f=0;f<a.length;f++)if(!a.hasOwnProperty(f))return!0;return!1}var o={};Ir("ES5",{J:function(u,a){var c=Array.isArray(u),f=function(s,p){if(s){for(var l=Array(p.length),d=0;d<p.length;d++)Object.defineProperty(l,""+d,e(d,!0));return l}var y=Tt(p);delete y[O];for(var v=U(y),h=0;h<v.length;h++){var b=v[h];y[b]=e(b,s||!!y[b].enumerable)}return Object.create(Object.getPrototypeOf(p),y)}(c,u),i={i:c?5:4,A:a?a.A:De(),P:!1,I:!1,R:{},l:a,t:u,k:f,o:null,g:!1,C:!1};return Object.defineProperty(f,O,{value:i,writable:!0}),f},S:function(u,a,c){c?W(a)&&a[O].A===u&&t(u.p):(u.u&&function f(i){if(i&&typeof i=="object"){var s=i[O];if(s){var p=s.t,l=s.k,d=s.R,y=s.i;if(y===4)q(l,function(S){S!==O&&(p[S]!==void 0||V(p,S)?d[S]||f(l[S]):(d[S]=!0,D(s)))}),q(p,function(S){l[S]!==void 0||V(l,S)||(d[S]=!1,D(s))});else if(y===5){if(n(s)&&(D(s),d.length=!0),l.length<p.length)for(var v=l.length;v<p.length;v++)d[v]=!1;else for(var h=p.length;h<l.length;h++)d[h]=!0;for(var b=Math.min(l.length,p.length),m=0;m<b;m++)l.hasOwnProperty(m)||(d[m]=!0),d[m]===void 0&&f(l[m])}}}}(u.p[0]),t(u.p))},K:function(u){return u.i===4?r(u):n(u)}})}var at,Q,Je=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",kr=typeof Map<"u",Lr=typeof Set<"u",ct=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",It=Je?Symbol.for("immer-nothing"):((at={})["immer-nothing"]=!0,at),ft=Je?Symbol.for("immer-draftable"):"__$immer_draftable",O=Je?Symbol.for("immer-state"):"__$immer_state",Wr=""+Object.prototype.constructor,U=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Tt=Object.getOwnPropertyDescriptors||function(e){var t={};return U(e).forEach(function(r){t[r]=Object.getOwnPropertyDescriptor(e,r)}),t},Le={},Z={get:function(e,t){if(t===O)return e;var r=F(e);if(!V(r,t))return function(o,u,a){var c,f=ut(u,a);return f?"value"in f?f.value:(c=f.get)===null||c===void 0?void 0:c.call(o.k):void 0}(e,r,t);var n=r[t];return e.I||!T(n)?n:n===_e(e.t,t)?(Re(e),e.o[t]=ke(e.A.h,n,e)):n},has:function(e,t){return t in F(e)},ownKeys:function(e){return Reflect.ownKeys(F(e))},set:function(e,t,r){var n=ut(F(e),t);if(n!=null&&n.set)return n.set.call(e.k,r),!0;if(!e.P){var o=_e(F(e),t),u=o==null?void 0:o[O];if(u&&u.t===r)return e.o[t]=r,e.R[t]=!1,!0;if(Mt(r,o)&&(r!==void 0||V(e.t,t)))return!0;Re(e),D(e)}return e.o[t]===r&&(r!==void 0||t in e.o)||Number.isNaN(r)&&Number.isNaN(e.o[t])||(e.o[t]=r,e.R[t]=!0),!0},deleteProperty:function(e,t){return _e(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,Re(e),D(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var r=F(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty:function(){M(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){M(12)}},J={};q(Z,function(e,t){J[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),J.deleteProperty=function(e,t){return J.set.call(this,e,t,void 0)},J.set=function(e,t,r){return Z.set.call(this,e[0],t,r,e[0])};var Fr=function(){function e(r){var n=this;this.O=ct,this.D=!0,this.produce=function(o,u,a){if(typeof o=="function"&&typeof u!="function"){var c=u;u=o;var f=n;return function(v){var h=this;v===void 0&&(v=c);for(var b=arguments.length,m=Array(b>1?b-1:0),S=1;S<b;S++)m[S-1]=arguments[S];return f.produce(v,function(x){var _;return(_=u).call.apply(_,[h,x].concat(m))})}}var i;if(typeof u!="function"&&M(6),a!==void 0&&typeof a!="function"&&M(7),T(o)){var s=nt(n),p=ke(n,o,void 0),l=!0;try{i=u(p),l=!1}finally{l?te(s):Ne(s)}return typeof Promise<"u"&&i instanceof Promise?i.then(function(v){return Ce(s,a),Ae(v,s)},function(v){throw te(s),v}):(Ce(s,a),Ae(i,s))}if(!o||typeof o!="object"){if((i=u(o))===void 0&&(i=o),i===It&&(i=void 0),n.D&&He(i,!0),a){var d=[],y=[];I("Patches").M(o,i,d,y),a(d,y)}return i}M(21,o)},this.produceWithPatches=function(o,u){if(typeof o=="function")return function(i){for(var s=arguments.length,p=Array(s>1?s-1:0),l=1;l<s;l++)p[l-1]=arguments[l];return n.produceWithPatches(i,function(d){return o.apply(void 0,[d].concat(p))})};var a,c,f=n.produce(o,u,function(i,s){a=i,c=s});return typeof Promise<"u"&&f instanceof Promise?f.then(function(i){return[i,a,c]}):[f,a,c]},typeof(r==null?void 0:r.useProxies)=="boolean"&&this.setUseProxies(r.useProxies),typeof(r==null?void 0:r.autoFreeze)=="boolean"&&this.setAutoFreeze(r.autoFreeze)}var t=e.prototype;return t.createDraft=function(r){T(r)||M(8),W(r)&&(r=Dr(r));var n=nt(this),o=ke(this,r,void 0);return o[O].C=!0,Ne(n),o},t.finishDraft=function(r,n){var o=r&&r[O],u=o.A;return Ce(u,n),Ae(void 0,u)},t.setAutoFreeze=function(r){this.D=r},t.setUseProxies=function(r){r&&!ct&&M(20),this.O=r},t.applyPatches=function(r,n){var o;for(o=n.length-1;o>=0;o--){var u=n[o];if(u.path.length===0&&u.op==="replace"){r=u.value;break}}o>-1&&(n=n.slice(o+1));var a=I("Patches").$;return W(r)?a(r,n):this.produce(r,function(c){return a(c,n)})},e}(),j=new Fr,Dt=j.produce;j.produceWithPatches.bind(j);j.setAutoFreeze.bind(j);j.setUseProxies.bind(j);j.applyPatches.bind(j);j.createDraft.bind(j);j.finishDraft.bind(j);function ee(e){"@babel/helpers - typeof";return ee=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ee(e)}function qr(e,t){if(ee(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(ee(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function zr(e){var t=qr(e,"string");return ee(t)==="symbol"?t:String(t)}function Vr(e,t,r){return t=zr(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function st(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function lt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?st(Object(r),!0).forEach(function(n){Vr(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):st(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function E(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var dt=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Me=function(){return Math.random().toString(36).substring(7).split("").join(".")},oe={INIT:"@@redux/INIT"+Me(),REPLACE:"@@redux/REPLACE"+Me(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Me()}};function Ur(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Nt(e,t,r){var n;if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(E(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(E(1));return r(Nt)(e,t)}if(typeof e!="function")throw new Error(E(2));var o=e,u=t,a=[],c=a,f=!1;function i(){c===a&&(c=a.slice())}function s(){if(f)throw new Error(E(3));return u}function p(v){if(typeof v!="function")throw new Error(E(4));if(f)throw new Error(E(5));var h=!0;return i(),c.push(v),function(){if(h){if(f)throw new Error(E(6));h=!1,i();var m=c.indexOf(v);c.splice(m,1),a=null}}}function l(v){if(!Ur(v))throw new Error(E(7));if(typeof v.type>"u")throw new Error(E(8));if(f)throw new Error(E(9));try{f=!0,u=o(u,v)}finally{f=!1}for(var h=a=c,b=0;b<h.length;b++){var m=h[b];m()}return v}function d(v){if(typeof v!="function")throw new Error(E(10));o=v,l({type:oe.REPLACE})}function y(){var v,h=p;return v={subscribe:function(m){if(typeof m!="object"||m===null)throw new Error(E(11));function S(){m.next&&m.next(s())}S();var x=h(S);return{unsubscribe:x}}},v[dt]=function(){return this},v}return l({type:oe.INIT}),n={dispatch:l,subscribe:p,getState:s,replaceReducer:d},n[dt]=y,n}function Kr(e){Object.keys(e).forEach(function(t){var r=e[t],n=r(void 0,{type:oe.INIT});if(typeof n>"u")throw new Error(E(12));if(typeof r(void 0,{type:oe.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(E(13))})}function Br(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var o=t[n];typeof e[o]=="function"&&(r[o]=e[o])}var u=Object.keys(r),a;try{Kr(r)}catch(c){a=c}return function(f,i){if(f===void 0&&(f={}),a)throw a;for(var s=!1,p={},l=0;l<u.length;l++){var d=u[l],y=r[d],v=f[d],h=y(v,i);if(typeof h>"u")throw i&&i.type,new Error(E(14));p[d]=h,s=s||h!==v}return s=s||u.length!==Object.keys(f).length,s?p:f}}function ue(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.length===0?function(n){return n}:t.length===1?t[0]:t.reduce(function(n,o){return function(){return n(o.apply(void 0,arguments))}})}function Gr(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(n){return function(){var o=n.apply(void 0,arguments),u=function(){throw new Error(E(15))},a={getState:o.getState,dispatch:function(){return u.apply(void 0,arguments)}},c=t.map(function(f){return f(a)});return u=ue.apply(void 0,c)(o.dispatch),lt(lt({},o),{},{dispatch:u})}}}function kt(e){var t=function(n){var o=n.dispatch,u=n.getState;return function(a){return function(c){return typeof c=="function"?c(o,u,e):a(c)}}};return t}var Lt=kt();Lt.withExtraArgument=kt;const pt=Lt;var Wt=globalThis&&globalThis.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,o){n.__proto__=o}||function(n,o){for(var u in o)Object.prototype.hasOwnProperty.call(o,u)&&(n[u]=o[u])},e(t,r)};return function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),Xr=globalThis&&globalThis.__generator||function(e,t){var r={label:0,sent:function(){if(u[0]&1)throw u[1];return u[1]},trys:[],ops:[]},n,o,u,a;return a={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function c(i){return function(s){return f([i,s])}}function f(i){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,o&&(u=i[0]&2?o.return:i[0]?o.throw||((u=o.return)&&u.call(o),0):o.next)&&!(u=u.call(o,i[1])).done)return u;switch(o=0,u&&(i=[i[0]&2,u.value]),i[0]){case 0:case 1:u=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,o=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(u=r.trys,!(u=u.length>0&&u[u.length-1])&&(i[0]===6||i[0]===2)){r=0;continue}if(i[0]===3&&(!u||i[1]>u[0]&&i[1]<u[3])){r.label=i[1];break}if(i[0]===6&&r.label<u[1]){r.label=u[1],u=i;break}if(u&&r.label<u[2]){r.label=u[2],r.ops.push(i);break}u[2]&&r.ops.pop(),r.trys.pop();continue}i=t.call(e,r)}catch(s){i=[6,s],o=0}finally{n=u=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},B=globalThis&&globalThis.__spreadArray||function(e,t){for(var r=0,n=t.length,o=e.length;r<n;r++,o++)e[o]=t[r];return e},Hr=Object.defineProperty,Yr=Object.defineProperties,Jr=Object.getOwnPropertyDescriptors,yt=Object.getOwnPropertySymbols,Qr=Object.prototype.hasOwnProperty,Zr=Object.prototype.propertyIsEnumerable,vt=function(e,t,r){return t in e?Hr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},N=function(e,t){for(var r in t||(t={}))Qr.call(t,r)&&vt(e,r,t[r]);if(yt)for(var n=0,o=yt(t);n<o.length;n++){var r=o[n];Zr.call(t,r)&&vt(e,r,t[r])}return e},Ie=function(e,t){return Yr(e,Jr(t))},en=function(e,t,r){return new Promise(function(n,o){var u=function(f){try{c(r.next(f))}catch(i){o(i)}},a=function(f){try{c(r.throw(f))}catch(i){o(i)}},c=function(f){return f.done?n(f.value):Promise.resolve(f.value).then(u,a)};c((r=r.apply(e,t)).next())})},tn=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?ue:ue.apply(null,arguments)};function rn(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var r=t;Object.getPrototypeOf(r)!==null;)r=Object.getPrototypeOf(r);return t===r}function k(e,t){function r(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];if(t){var u=t.apply(void 0,n);if(!u)throw new Error("prepareAction did not return an object");return N(N({type:e,payload:u.payload},"meta"in u&&{meta:u.meta}),"error"in u&&{error:u.error})}return{type:e,payload:n[0]}}return r.toString=function(){return""+e},r.type=e,r.match=function(n){return n.type===e},r}var nn=function(e){Wt(t,e);function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=e.apply(this,r)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return e.prototype.concat.apply(this,r)},t.prototype.prepend=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return r.length===1&&Array.isArray(r[0])?new(t.bind.apply(t,B([void 0],r[0].concat(this)))):new(t.bind.apply(t,B([void 0],r.concat(this))))},t}(Array),on=function(e){Wt(t,e);function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=e.apply(this,r)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return e.prototype.concat.apply(this,r)},t.prototype.prepend=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return r.length===1&&Array.isArray(r[0])?new(t.bind.apply(t,B([void 0],r[0].concat(this)))):new(t.bind.apply(t,B([void 0],r.concat(this))))},t}(Array);function We(e){return T(e)?Dt(e,function(){}):e}function un(e){return typeof e=="boolean"}function an(){return function(t){return cn(t)}}function cn(e){e===void 0&&(e={});var t=e.thunk,r=t===void 0?!0:t;e.immutableCheck,e.serializableCheck,e.actionCreatorCheck;var n=new nn;return r&&(un(r)?n.push(pt):n.push(pt.withExtraArgument(r.extraArgument))),n}var fn=!0;function Pn(e){var t=an(),r=e||{},n=r.reducer,o=n===void 0?void 0:n,u=r.middleware,a=u===void 0?t():u,c=r.devTools,f=c===void 0?!0:c,i=r.preloadedState,s=i===void 0?void 0:i,p=r.enhancers,l=p===void 0?void 0:p,d;if(typeof o=="function")d=o;else if(rn(o))d=Br(o);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var y=a;typeof y=="function"&&(y=y(t));var v=Gr.apply(void 0,y),h=ue;f&&(h=tn(N({trace:!fn},typeof f=="object"&&f)));var b=new on(v),m=b;Array.isArray(l)?m=B([v],l):typeof l=="function"&&(m=l(b));var S=h.apply(void 0,m);return Nt(d,s,S)}function Ft(e){var t={},r=[],n,o={addCase:function(u,a){var c=typeof u=="string"?u:u.type;if(!c)throw new Error("`builder.addCase` cannot be called with an empty action type");if(c in t)throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");return t[c]=a,o},addMatcher:function(u,a){return r.push({matcher:u,reducer:a}),o},addDefaultCase:function(u){return n=u,o}};return e(o),[t,r,n]}function sn(e){return typeof e=="function"}function ln(e,t,r,n){r===void 0&&(r=[]);var o=typeof t=="function"?Ft(t):[t,r,n],u=o[0],a=o[1],c=o[2],f;if(sn(e))f=function(){return We(e())};else{var i=We(e);f=function(){return i}}function s(p,l){p===void 0&&(p=f());var d=B([u[l.type]],a.filter(function(y){var v=y.matcher;return v(l)}).map(function(y){var v=y.reducer;return v}));return d.filter(function(y){return!!y}).length===0&&(d=[c]),d.reduce(function(y,v){if(v)if(W(y)){var h=y,b=v(h,l);return b===void 0?y:b}else{if(T(y))return Dt(y,function(m){return v(m,l)});var b=v(y,l);if(b===void 0){if(y===null)return y;throw Error("A case reducer on a non-draftable value must not return undefined")}return b}return y},p)}return s.getInitialState=f,s}function dn(e,t){return e+"/"+t}function En(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var r=typeof e.initialState=="function"?e.initialState:We(e.initialState),n=e.reducers||{},o=Object.keys(n),u={},a={},c={};o.forEach(function(s){var p=n[s],l=dn(t,s),d,y;"reducer"in p?(d=p.reducer,y=p.prepare):d=p,u[s]=d,a[l]=d,c[s]=y?k(l,y):k(l)});function f(){var s=typeof e.extraReducers=="function"?Ft(e.extraReducers):[e.extraReducers],p=s[0],l=p===void 0?{}:p,d=s[1],y=d===void 0?[]:d,v=s[2],h=v===void 0?void 0:v,b=N(N({},l),a);return ln(r,function(m){for(var S in b)m.addCase(S,b[S]);for(var x=0,_=y;x<_.length;x++){var X=_[x];m.addMatcher(X.matcher,X.reducer)}h&&m.addDefaultCase(h)})}var i;return{name:t,reducer:function(s,p){return i||(i=f()),i(s,p)},actions:c,caseReducers:u,getInitialState:function(){return i||(i=f()),i.getInitialState()}}}var pn="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",yn=function(e){e===void 0&&(e=21);for(var t="",r=e;r--;)t+=pn[Math.random()*64|0];return t},vn=["name","message","stack","code"],Te=function(){function e(t,r){this.payload=t,this.meta=r}return e}(),ht=function(){function e(t,r){this.payload=t,this.meta=r}return e}(),hn=function(e){if(typeof e=="object"&&e!==null){for(var t={},r=0,n=vn;r<n.length;r++){var o=n[r];typeof e[o]=="string"&&(t[o]=e[o])}return t}return{message:String(e)}};(function(){function e(t,r,n){var o=k(t+"/fulfilled",function(i,s,p,l){return{payload:i,meta:Ie(N({},l||{}),{arg:p,requestId:s,requestStatus:"fulfilled"})}}),u=k(t+"/pending",function(i,s,p){return{payload:void 0,meta:Ie(N({},p||{}),{arg:s,requestId:i,requestStatus:"pending"})}}),a=k(t+"/rejected",function(i,s,p,l,d){return{payload:l,error:(n&&n.serializeError||hn)(i||"Rejected"),meta:Ie(N({},d||{}),{arg:p,requestId:s,rejectedWithValue:!!l,requestStatus:"rejected",aborted:(i==null?void 0:i.name)==="AbortError",condition:(i==null?void 0:i.name)==="ConditionError"})}}),c=typeof AbortController<"u"?AbortController:function(){function i(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return i.prototype.abort=function(){},i}();function f(i){return function(s,p,l){var d=n!=null&&n.idGenerator?n.idGenerator(i):yn(),y=new c,v;function h(m){v=m,y.abort()}var b=function(){return en(this,null,function(){var m,S,x,_,X,H,Ze;return Xr(this,function(z){switch(z.label){case 0:return z.trys.push([0,4,,5]),_=(m=n==null?void 0:n.condition)==null?void 0:m.call(n,i,{getState:p,extra:l}),mn(_)?[4,_]:[3,2];case 1:_=z.sent(),z.label=2;case 2:if(_===!1||y.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return X=new Promise(function(R,Y){return y.signal.addEventListener("abort",function(){return Y({name:"AbortError",message:v||"Aborted"})})}),s(u(d,i,(S=n==null?void 0:n.getPendingMeta)==null?void 0:S.call(n,{requestId:d,arg:i},{getState:p,extra:l}))),[4,Promise.race([X,Promise.resolve(r(i,{dispatch:s,getState:p,extra:l,requestId:d,signal:y.signal,abort:h,rejectWithValue:function(R,Y){return new Te(R,Y)},fulfillWithValue:function(R,Y){return new ht(R,Y)}})).then(function(R){if(R instanceof Te)throw R;return R instanceof ht?o(R.payload,d,i,R.meta):o(R,d,i)})])];case 3:return x=z.sent(),[3,5];case 4:return H=z.sent(),x=H instanceof Te?a(null,d,i,H.payload,H.meta):a(H,d,i),[3,5];case 5:return Ze=n&&!n.dispatchConditionRejection&&a.match(x)&&x.meta.condition,Ze||s(x),[2,x]}})})}();return Object.assign(b,{abort:h,requestId:d,arg:i,unwrap:function(){return b.then(bn)}})}}return Object.assign(f,{pending:u,rejected:a,fulfilled:o,typePrefix:t})}return e.withTypes=function(){return e},e})();function bn(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function mn(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Qe="listenerMiddleware";k(Qe+"/add");k(Qe+"/removeAll");k(Qe+"/remove");var bt;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);Nr();export{Sn as P,Pn as a,On as b,En as c,wn as u};
