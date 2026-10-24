var BM=Object.defineProperty;var HM=(o,e,i)=>e in o?BM(o,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[e]=i;var sn=(o,e,i)=>HM(o,typeof e!="symbol"?e+"":e,i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const f of l)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const f={};return l.integrity&&(f.integrity=l.integrity),l.referrerPolicy&&(f.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?f.credentials="include":l.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(l){if(l.ep)return;l.ep=!0;const f=i(l);fetch(l.href,f)}})();function Zx(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var pd={exports:{}},gl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ev;function GM(){if(Ev)return gl;Ev=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,f){var h=null;if(f!==void 0&&(h=""+f),l.key!==void 0&&(h=""+l.key),"key"in l){f={};for(var d in l)d!=="key"&&(f[d]=l[d])}else f=l;return l=f.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:f}}return gl.Fragment=e,gl.jsx=i,gl.jsxs=i,gl}var Tv;function VM(){return Tv||(Tv=1,pd.exports=GM()),pd.exports}var U=VM(),md={exports:{}},he={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Av;function kM(){if(Av)return he;Av=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),x=Symbol.for("react.view_transition"),y=Symbol.iterator;function E(F){return F===null||typeof F!="object"?null:(F=y&&F[y]||F["@@iterator"],typeof F=="function"?F:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,S={};function P(F,rt,Y){this.props=F,this.context=rt,this.refs=S,this.updater=Y||R}P.prototype.isReactComponent={},P.prototype.setState=function(F,rt){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,rt,"setState")},P.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function H(){}H.prototype=P.prototype;function O(F,rt,Y){this.props=F,this.context=rt,this.refs=S,this.updater=Y||R}var I=O.prototype=new H;I.constructor=O,M(I,P.prototype),I.isPureReactComponent=!0;var D=Array.isArray;function N(){}var X={H:null,A:null,T:null,S:null},A=Object.prototype.hasOwnProperty;function w(F,rt,Y){var W=Y.ref;return{$$typeof:o,type:F,key:rt,ref:W!==void 0?W:null,props:Y}}function k(F,rt){return w(F.type,rt,F.props)}function st(F){return typeof F=="object"&&F!==null&&F.$$typeof===o}function it(F){var rt={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Y){return rt[Y]})}var pt=/\/+/g;function dt(F,rt){return typeof F=="object"&&F!==null&&F.key!=null?it(""+F.key):rt.toString(36)}function Z(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(N,N):(F.status="pending",F.then(function(rt){F.status==="pending"&&(F.status="fulfilled",F.value=rt)},function(rt){F.status==="pending"&&(F.status="rejected",F.reason=rt)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function K(F,rt,Y,W,mt){var Tt=typeof F;(Tt==="undefined"||Tt==="boolean")&&(F=null);var yt=!1;if(F===null)yt=!0;else switch(Tt){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(F.$$typeof){case o:case e:yt=!0;break;case _:return yt=F._init,K(yt(F._payload),rt,Y,W,mt)}}if(yt)return mt=mt(F),yt=W===""?"."+dt(F,0):W,D(mt)?(Y="",yt!=null&&(Y=yt.replace(pt,"$&/")+"/"),K(mt,rt,Y,"",function(te){return te})):mt!=null&&(st(mt)&&(mt=k(mt,Y+(mt.key==null||F&&F.key===mt.key?"":(""+mt.key).replace(pt,"$&/")+"/")+yt)),rt.push(mt)),1;yt=0;var St=W===""?".":W+":";if(D(F))for(var Nt=0;Nt<F.length;Nt++)W=F[Nt],Tt=St+dt(W,Nt),yt+=K(W,rt,Y,Tt,mt);else if(Nt=E(F),typeof Nt=="function")for(F=Nt.call(F),Nt=0;!(W=F.next()).done;)W=W.value,Tt=St+dt(W,Nt++),yt+=K(W,rt,Y,Tt,mt);else if(Tt==="object"){if(typeof F.then=="function")return K(Z(F),rt,Y,W,mt);throw rt=String(F),Error("Objects are not valid as a React child (found: "+(rt==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":rt)+"). If you meant to render a collection of children, use an array instead.")}return yt}function ft(F,rt,Y){if(F==null)return F;var W=[],mt=0;return K(F,W,"","",function(Tt){return rt.call(Y,Tt,mt++)}),W}function At(F){if(F._status===-1){var rt=F._result,Y=rt();Y.then(function(W){(F._status===0||F._status===-1)&&(F._status=1,F._result=W,Y.status===void 0&&(Y.status="fulfilled",Y.value=W))},function(W){(F._status===0||F._status===-1)&&(F._status=2,F._result=W,Y.status===void 0&&(Y.status="rejected",Y.reason=W))}),F._status===-1&&(F._status=0,F._result=Y)}if(F._status===1)return F._result.default;throw F._result}var G=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var rt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(rt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)};function z(F){var rt=X.T,Y={};Y.types=rt!==null?rt.types:null,X.T=Y;try{var W=F(),mt=X.S;mt!==null&&mt(Y,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(N,G)}catch(Tt){G(Tt)}finally{rt!==null&&Y.types!==null&&(rt.types=Y.types),X.T=rt}}function Et(F){var rt=X.T;if(rt!==null){var Y=rt.types;Y===null?rt.types=[F]:Y.indexOf(F)===-1&&Y.push(F)}else z(Et.bind(null,F))}var Rt={map:ft,forEach:function(F,rt,Y){ft(F,function(){rt.apply(this,arguments)},Y)},count:function(F){var rt=0;return ft(F,function(){rt++}),rt},toArray:function(F){return ft(F,function(rt){return rt})||[]},only:function(F){if(!st(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return he.Activity=m,he.Children=Rt,he.Component=P,he.Fragment=i,he.Profiler=l,he.PureComponent=O,he.StrictMode=s,he.Suspense=p,he.ViewTransition=x,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,he.__COMPILER_RUNTIME={__proto__:null,c:function(F){return X.H.useMemoCache(F)}},he.addTransitionType=Et,he.cache=function(F){return function(){return F.apply(null,arguments)}},he.cacheSignal=function(){return null},he.cloneElement=function(F,rt,Y){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var W=M({},F.props),mt=F.key;if(rt!=null)for(Tt in rt.key!==void 0&&(mt=""+rt.key),rt)!A.call(rt,Tt)||Tt==="key"||Tt==="__self"||Tt==="__source"||Tt==="ref"&&rt.ref===void 0||(W[Tt]=rt[Tt]);var Tt=arguments.length-2;if(Tt===1)W.children=Y;else if(1<Tt){for(var yt=Array(Tt),St=0;St<Tt;St++)yt[St]=arguments[St+2];W.children=yt}return w(F.type,mt,W)},he.createContext=function(F){return F={$$typeof:h,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:f,_context:F},F},he.createElement=function(F,rt,Y){var W,mt={},Tt=null;if(rt!=null)for(W in rt.key!==void 0&&(Tt=""+rt.key),rt)A.call(rt,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(mt[W]=rt[W]);var yt=arguments.length-2;if(yt===1)mt.children=Y;else if(1<yt){for(var St=Array(yt),Nt=0;Nt<yt;Nt++)St[Nt]=arguments[Nt+2];mt.children=St}if(F&&F.defaultProps)for(W in yt=F.defaultProps,yt)mt[W]===void 0&&(mt[W]=yt[W]);return w(F,Tt,mt)},he.createRef=function(){return{current:null}},he.forwardRef=function(F){return{$$typeof:d,render:F}},he.isValidElement=st,he.lazy=function(F){return{$$typeof:_,_payload:{_status:-1,_result:F},_init:At}},he.memo=function(F,rt){return{$$typeof:g,type:F,compare:rt===void 0?null:rt}},he.startTransition=z,he.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},he.use=function(F){return X.H.use(F)},he.useActionState=function(F,rt,Y){return X.H.useActionState(F,rt,Y)},he.useCallback=function(F,rt){return X.H.useCallback(F,rt)},he.useContext=function(F){return X.H.useContext(F)},he.useDebugValue=function(){},he.useDeferredValue=function(F,rt){return X.H.useDeferredValue(F,rt)},he.useEffect=function(F,rt){return X.H.useEffect(F,rt)},he.useEffectEvent=function(F){return X.H.useEffectEvent(F)},he.useId=function(){return X.H.useId()},he.useImperativeHandle=function(F,rt,Y){return X.H.useImperativeHandle(F,rt,Y)},he.useInsertionEffect=function(F,rt){return X.H.useInsertionEffect(F,rt)},he.useLayoutEffect=function(F,rt){return X.H.useLayoutEffect(F,rt)},he.useMemo=function(F,rt){return X.H.useMemo(F,rt)},he.useOptimistic=function(F,rt){return X.H.useOptimistic(F,rt)},he.useReducer=function(F,rt,Y){return X.H.useReducer(F,rt,Y)},he.useRef=function(F){return X.H.useRef(F)},he.useState=function(F){return X.H.useState(F)},he.useSyncExternalStore=function(F,rt,Y){return X.H.useSyncExternalStore(F,rt,Y)},he.useTransition=function(){return X.H.useTransition()},he.version="19.3.1",he}var Cv;function Jp(){return Cv||(Cv=1,md.exports=kM()),md.exports}var nn=Jp();const XM=Zx(nn);var gd={exports:{}},_l={},_d={exports:{}},vd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wv;function jM(){return wv||(wv=1,(function(o){function e(Z,K){var ft=Z.length;Z.push(K);t:for(;0<ft;){var At=ft-1>>>1,G=Z[At];if(0<l(G,K))Z[At]=K,Z[ft]=G,ft=At;else break t}}function i(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var K=Z[0],ft=Z.pop();if(ft!==K){Z[0]=ft;t:for(var At=0,G=Z.length,z=G>>>1;At<z;){var Et=2*(At+1)-1,Rt=Z[Et],F=Et+1,rt=Z[F];if(0>l(Rt,ft))F<G&&0>l(rt,Rt)?(Z[At]=rt,Z[F]=ft,At=F):(Z[At]=Rt,Z[Et]=ft,At=Et);else if(F<G&&0>l(rt,ft))Z[At]=rt,Z[F]=ft,At=F;else break t}}return K}function l(Z,K){var ft=Z.sortIndex-K.sortIndex;return ft!==0?ft:Z.id-K.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],g=[],_=1,m=null,x=3,y=!1,E=!1,R=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function O(Z){for(var K=i(g);K!==null;){if(K.callback===null)s(g);else if(K.startTime<=Z)s(g),K.sortIndex=K.expirationTime,e(p,K);else break;K=i(g)}}function I(Z){if(R=!1,O(Z),!E)if(i(p)!==null)E=!0,D||(D=!0,st());else{var K=i(g);K!==null&&dt(I,K.startTime-Z)}}var D=!1,N=-1,X=5,A=-1;function w(){return M?!0:!(o.unstable_now()-A<X)}function k(){if(M=!1,D){var Z=o.unstable_now();A=Z;var K=!0;try{t:{E=!1,R&&(R=!1,P(N),N=-1),y=!0;var ft=x;try{e:{for(O(Z),m=i(p);m!==null&&!(m.expirationTime>Z&&w());){var At=m.callback;if(typeof At=="function"){m.callback=null,x=m.priorityLevel;var G=At(m.expirationTime<=Z);if(Z=o.unstable_now(),typeof G=="function"){m.callback=G,O(Z),K=!0;break e}m===i(p)&&s(p),O(Z)}else s(p);m=i(p)}if(m!==null)K=!0;else{var z=i(g);z!==null&&dt(I,z.startTime-Z),K=!1}}break t}finally{m=null,x=ft,y=!1}K=void 0}}finally{K?st():D=!1}}}var st;if(typeof H=="function")st=function(){H(k)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,pt=it.port2;it.port1.onmessage=k,st=function(){pt.postMessage(null)}}else st=function(){S(k,0)};function dt(Z,K){N=S(function(){Z(o.unstable_now())},K)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(Z){Z.callback=null},o.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<Z?Math.floor(1e3/Z):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(Z){switch(x){case 1:case 2:case 3:var K=3;break;default:K=x}var ft=x;x=K;try{return Z()}finally{x=ft}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(Z,K){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var ft=x;x=Z;try{return K()}finally{x=ft}},o.unstable_scheduleCallback=function(Z,K,ft){var At=o.unstable_now();switch(typeof ft=="object"&&ft!==null?(ft=ft.delay,ft=typeof ft=="number"&&0<ft?At+ft:At):ft=At,Z){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=ft+G,Z={id:_++,callback:K,priorityLevel:Z,startTime:ft,expirationTime:G,sortIndex:-1},ft>At?(Z.sortIndex=ft,e(g,Z),i(p)===null&&Z===i(g)&&(R?(P(N),N=-1):R=!0,dt(I,ft-At))):(Z.sortIndex=G,e(p,Z),E||y||(E=!0,D||(D=!0,st()))),Z},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(Z){var K=x;return function(){var ft=x;x=K;try{return Z.apply(this,arguments)}finally{x=ft}}}})(vd)),vd}var Rv;function YM(){return Rv||(Rv=1,_d.exports=jM()),_d.exports}var xd={exports:{}},On={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dv;function qM(){if(Dv)return On;Dv=1;var o=Jp();function e(_){var m="https://react.dev/errors/"+_;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)m+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+_+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(_,m,x){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:y===h?h:""+y,children:_,containerInfo:m,implementation:x}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(_,m){if(_==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,On.browser=function(_){return{$$typeof:f,_reason:_}},On.createPortal=function(_,m){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return d(_,m,null,x)},On.flushSync=function(_){var m=p.T,x=s.p;try{if(p.T=null,s.p=2,_)return _()}finally{p.T=m,s.p=x,s.d.f()}},On.preconnect=function(_,m){typeof _=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(_,m))},On.prefetchDNS=function(_){typeof _=="string"&&s.d.D(_)},On.preinit=function(_,m){if(typeof _=="string"&&m&&typeof m.as=="string"){var x=m.as,y=g(x,m.crossOrigin),E=typeof m.integrity=="string"?m.integrity:void 0,R=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;x==="style"?s.d.S(_,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:y,integrity:E,fetchPriority:R}):x==="script"&&s.d.X(_,{crossOrigin:y,integrity:E,fetchPriority:R,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},On.preinitModule=function(_,m){if(typeof _=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var x=g(m.as,m.crossOrigin);s.d.M(_,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}}else m==null&&s.d.M(_)},On.preload=function(_,m){if(typeof _=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var x=m.as,y=g(x,m.crossOrigin);s.d.L(_,x,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},On.preloadModule=function(_,m){if(typeof _=="string")if(m){var x=g(m.as,m.crossOrigin);s.d.m(_,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}else s.d.m(_)},On.requestFormReset=function(_){s.d.r(_)},On.unstable_batchedUpdates=function(_,m){return _(m)},On.useFormState=function(_,m,x){return p.H.useFormState(_,m,x)},On.useFormStatus=function(){return p.H.useHostTransitionStatus()},On.version="19.3.1",On}var Nv;function WM(){if(Nv)return xd.exports;Nv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),xd.exports=qM(),xd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uv;function ZM(){if(Uv)return _l;Uv=1;var o=YM(),e=Jp(),i=WM();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(f(t)!==t)throw Error(s(188))}function g(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var c=a.return;if(c===null)break;var u=c.alternate;if(u===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===u.child){for(u=c.child;u;){if(u===a)return p(c),t;if(u===r)return p(c),n;u=u.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=u;else{for(var v=!1,T=c.child;T;){if(T===a){v=!0,a=c,r=u;break}if(T===r){v=!0,r=c,a=u;break}T=T.sibling}if(!v){for(T=u.child;T;){if(T===a){v=!0,a=u,r=c;break}if(T===r){v=!0,r=u,a=c;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}function m(t,n,a,r,c,u){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,r,c,u)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&m(t.child,n,a,r,c,u))return!0;t=t.sibling}return!1}function x(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function y(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function E(t){var n=[null,null],a=x(t);return a===null||R(n,t,a.child,{foundSelf:!1}),n}function R(t,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&R(t,n,a.child,r))return!0;a=a.sibling}return!1}function M(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var S=null,P=null;function H(t,n,a){return t===a?!0:t===n?(S=t,!0):!1}function O(t,n,a){return t===a?(P=t,!1):t===n?(P!==null&&(S=t),!0):!1}function I(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function D(t,n,a){for(var r=0,c=t;c;c=a(c))r++;c=0;for(var u=n;u;u=a(u))c++;for(;0<r-c;)t=a(t),r--;for(;0<c-r;)n=a(n),c--;for(;r--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var N=Object.assign,X=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),st=Symbol.for("react.strict_mode"),it=Symbol.for("react.profiler"),pt=Symbol.for("react.consumer"),dt=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),ft=Symbol.for("react.suspense_list"),At=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),Et=Symbol.for("react.legacy_hidden"),Rt=Symbol.for("react.memo_cache_sentinel"),F=Symbol.for("react.view_transition"),rt=Symbol.for("react.recoverable"),Y=Symbol.iterator;function W(t){return t===null||typeof t!="object"?null:(t=Y&&t[Y]||t["@@iterator"],typeof t=="function"?t:null)}var mt=Symbol.for("react.client.reference");function Tt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===mt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case k:return"Fragment";case it:return"Profiler";case st:return"StrictMode";case K:return"Suspense";case ft:return"SuspenseList";case z:return"Activity";case F:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case w:return"Portal";case dt:return t.displayName||"Context";case pt:return(t._context.displayName||"Context")+".Consumer";case Z:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case At:return n=t.displayName||null,n!==null?n:Tt(t.type)||"Memo";case G:n=t._payload,t=t._init;try{return Tt(t(n))}catch{}}return null}var yt=Array.isArray,St=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Nt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},qt=[],le=-1;function $t(t){return{current:t}}function re(t){0>le||(t.current=qt[le],qt[le]=null,le--)}function V(t,n){le++,qt[le]=t.current,t.current=n}var Me=$t(null),ue=$t(null),Te=$t(null),Wt=$t(null);function L(t,n){switch(V(Te,n),V(ue,t),V(Me,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?L_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=L_(n),t=O_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}re(Me),V(Me,t)}function b(){re(Me),re(ue),re(Te)}function J(t){var n=t.memoizedState;n!==null&&(qr._currentValue=n.memoizedState,V(Wt,t)),n=Me.current;var a=O_(n,t.type);n!==a&&(V(ue,t),V(Me,a))}function _t(t){ue.current===t&&(re(Me),re(ue)),Wt.current===t&&(re(Wt),qr._currentValue=te)}var Mt,gt;function kt(t){if(Mt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Mt=n&&n[1]||"",gt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Mt+t+gt}var Ut=!1;function jt(t,n){if(!t||Ut)return"";Ut=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(zt){var Q=zt}Reflect.construct(t,[],xt)}else{try{xt.call()}catch(zt){Q=zt}xt=!1;try{var lt=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),xt=!0,new t}finally{xt&&(lt!==void 0?Object.defineProperty(t.prototype,"props",lt):delete t.prototype.props)}}}else{try{throw Error()}catch(zt){Q=zt}(xt=t())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(zt){if(zt&&Q&&typeof zt.stack=="string")return[zt.stack,Q.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=r.DetermineComponentFrameRoot(),v=u[0],T=u[1];if(v&&T){var B=v.split(`
`),tt=T.split(`
`);for(c=r=0;r<B.length&&!B[r].includes("DetermineComponentFrameRoot");)r++;for(;c<tt.length&&!tt[c].includes("DetermineComponentFrameRoot");)c++;if(r===B.length||c===tt.length)for(r=B.length-1,c=tt.length-1;1<=r&&0<=c&&B[r]!==tt[c];)c--;for(;1<=r&&0<=c;r--,c--)if(B[r]!==tt[c]){if(r!==1||c!==1)do if(r--,c--,0>c||B[r]!==tt[c]){var ut=`
`+B[r].replace(" at new "," at ");return t.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",t.displayName)),ut}while(1<=r&&0<=c);break}}}finally{Ut=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?kt(a):""}function se(t,n){switch(t.tag){case 26:case 27:case 5:return kt(t.type);case 16:return kt("Lazy");case 13:return t.child!==n&&n!==null?kt("Suspense Fallback"):kt("Suspense");case 19:return kt("SuspenseList");case 0:case 15:return jt(t.type,!1);case 11:return jt(t.type.render,!1);case 1:return jt(t.type,!0);case 31:return kt("Activity");case 30:return kt("ViewTransition");default:return""}}function wt(t){try{var n="",a=null;do n+=se(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Pt=Object.prototype.hasOwnProperty,Zt=o.unstable_scheduleCallback,Jt=o.unstable_cancelCallback,It=o.unstable_shouldYield,ve=o.unstable_requestPaint,q=o.unstable_now,Ht=o.unstable_getCurrentPriorityLevel,Dt=o.unstable_ImmediatePriority,Gt=o.unstable_UserBlockingPriority,Ct=o.unstable_NormalPriority,bt=o.unstable_LowPriority,Ot=o.unstable_IdlePriority,fe=o.log,Ye=o.unstable_setDisableYieldValue,Ne=null,tn=null;function Mn(t){if(typeof fe=="function"&&Ye(t),tn&&typeof tn.setStrictMode=="function")try{tn.setStrictMode(Ne,t)}catch{}}var kn=Math.clz32?Math.clz32:Gu,Fl=Math.log,To=Math.LN2;function Gu(t){return t>>>=0,t===0?32:31-(Fl(t)/To|0)|0}var bs=256,Es=262144,Si=4194304;function Ui(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ts(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var c=0,u=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var T=r&134217727;return T!==0?(r=T&~u,r!==0?c=Ui(r):(v&=T,v!==0?c=Ui(v):a||(a=T&~t,a!==0&&(c=Ui(a))))):(T=r&~u,T!==0?c=Ui(T):v!==0?c=Ui(v):a||(a=r&~t,a!==0&&(c=Ui(a)))),c===0?0:n!==0&&n!==c&&(n&u)===0&&(u=c&-c,a=n&-n,u>=a||u===32&&(a&4194048)!==0)?n:c}function Fa(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function As(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var r=31-kn(a),c=1<<r;n|=t[r],a&=~c}return n}function Bl(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cs(){var t=Si;return Si<<=1,(Si&62914560)===0&&(Si=4194304),t}function ur(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ba(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Vu(t,n,a,r,c,u){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,B=t.expirationTimes,tt=t.hiddenUpdates;for(a=v&~a;0<a;){var ut=31-kn(a),xt=1<<ut;T[ut]=0,B[ut]=-1;var Q=tt[ut];if(Q!==null)for(tt[ut]=null,ut=0;ut<Q.length;ut++){var lt=Q[ut];lt!==null&&(lt.lane&=-536870913)}a&=~xt}r!==0&&Hl(t,r,0),u!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=u&~(v&~n))}function Hl(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-kn(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function Gl(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-kn(a),c=1<<r;c&n|t[r]&n&&(t[r]|=n),a&=~c}}function Vl(t,n){var a=n&-n;return a=(a&42)!==0?1:Ao(a),(a&(t.suspendedLanes|n))!==0?0:a}function Ao(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Co(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function C(){var t=Nt.p;return t!==0?t:(t=window.event,t===void 0?32:_v(t.type))}function et(t,n){var a=Nt.p;try{return Nt.p=t,n()}finally{Nt.p=a}}var ht=Math.random().toString(36).slice(2),ot="__reactFiber$"+ht,nt="__reactProps$"+ht,Lt="__reactContainer$"+ht,Xt="__reactEvents$"+ht,Ft="__reactListeners$"+ht,Kt="__reactHandles$"+ht,ee="__reactResources$"+ht,ae="__reactMarker$"+ht,ne="__reactLoad$"+ht;function me(t){delete t[ot],delete t[nt],delete t[Ft],delete t[Kt]}function we(t){var n;if(n=t[ot])return n;for(var a=t.parentNode;a;){if(n=a[Lt]||a[ot]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Q_(t);t!==null;){if(a=t[ot])return a;t=Q_(t)}return n}t=a,a=t.parentNode}return null}function He(t){if(t=t[ot]||t[Lt]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function qe(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Le(t){var n=t[ee];return n||(n=t[ee]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Vt(t){t[ae]=!0}function ze(t){t[ne]=void 0}var Ue=new Set,In={};function Qn(t,n){hn(t,n),hn(t+"Capture",n)}function hn(t,n){for(In[t]=n,t=0;t<n.length;t++)Ue.add(n[t])}var ws=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ge={},Cn={};function Jn(t){return Pt.call(Cn,t)?!0:Pt.call(Ge,t)?!1:ws.test(t)?Cn[t]=!0:(Ge[t]=!0,!1)}var ce=!1;function wn(){var t=ce;return ce=!1,t}function Ha(t,n,a){if(Jn(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function yi(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function fa(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,r)}}function li(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Sm(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function sy(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,u=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(v){a=""+v,u.call(this,v)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function ku(t){if(!t._valueTracker){var n=Sm(t)?"checked":"value";t._valueTracker=sy(t,n,""+t[n])}}function ym(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=Sm(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}var ry=/[\n"\\]/g;function Mi(t){return t.replace(ry,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Xu(t,n,a,r,c,u,v,T){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+li(n)):t.value!==""+li(n)&&(t.value=""+li(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?v==="number"&&t.value==n?ju(t,li(t.value)):ju(t,li(n)):a!=null?ju(t,li(a)):r!=null&&t.removeAttribute("value"),c==null&&u!=null&&(t.defaultChecked=!!u),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+li(T):t.removeAttribute("name")}function Mm(t,n,a,r,c,u,v,T){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),n!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||n!=null)){ku(t);return}a=a!=null?""+li(a):"",n=n!=null?""+li(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=T?t.checked:!!r,t.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),ku(t)}function ju(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function fr(t,n,a,r){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&r&&(t[a].defaultSelected=!0)}else{for(a=""+li(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,r&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function bm(t,n,a){if(n!=null&&(n=""+li(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+li(a):""}function Em(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(yt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=li(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),ku(t)}function hr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var oy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Tm(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||oy.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Am(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",ce=!0);for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&(Tm(t,c,r),ce=!0)}else for(var u in n)n.hasOwnProperty(u)&&Tm(t,u,n[u])}function Yu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ly=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),cy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function kl(t){return cy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Xi(){}var qu=null;function Wu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var dr=null,pr=null;function Cm(t){var n=He(t);if(n&&(t=n.stateNode)){var a=t[nt]||null;t:switch(t=n.stateNode,n.type){case"input":if(Xu(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Mi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var c=r[nt]||null;if(!c)throw Error(s(90));Xu(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&ym(r)}break t;case"textarea":bm(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&fr(t,!!a.multiple,n,!1)}}}var Zu=!1;function wm(t,n,a){if(Zu)return t(n,a);Zu=!0;try{var r=t(n);return r}finally{if(Zu=!1,(dr!==null||pr!==null)&&(kc(),dr&&(n=dr,t=pr,pr=dr=null,Cm(n),t)))for(n=0;n<t.length;n++)Cm(t[n])}}function wo(t,n){var a=t.stateNode;if(a===null)return null;var r=a[nt]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ha=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ku=!1;if(ha)try{var Ro={};Object.defineProperty(Ro,"passive",{get:function(){Ku=!0}}),window.addEventListener("test",Ro,Ro),window.removeEventListener("test",Ro,Ro)}catch{Ku=!1}var Ga=null,Qu=null,Xl=null;function Rm(){if(Xl)return Xl;var t,n=Qu,a=n.length,r,c="value"in Ga?Ga.value:Ga.textContent,u=c.length;for(t=0;t<a&&n[t]===c[t];t++);var v=a-t;for(r=1;r<=v&&n[a-r]===c[u-r];r++);return Xl=c.slice(t,1<r?1-r:void 0)}function jl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Yl(){return!0}function Dm(){return!1}function Xn(t){function n(a,r,c,u,v){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=u,this.target=v,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(u):u[T]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Yl:Dm,this.isPropagationStopped=Dm,this}return N(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Yl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Yl)},persist:function(){},isPersistent:Yl}),n}var Va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ql=Xn(Va),Do=N({},Va,{view:0,detail:0}),uy=Xn(Do),Ju,$u,No,Wl=N({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ef,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==No&&(No&&t.type==="mousemove"?(Ju=t.screenX-No.screenX,$u=t.screenY-No.screenY):$u=Ju=0,No=t),Ju)},movementY:function(t){return"movementY"in t?t.movementY:$u}}),Nm=Xn(Wl),fy=N({},Wl,{dataTransfer:0}),hy=Xn(fy),dy=N({},Do,{relatedTarget:0}),tf=Xn(dy),py=N({},Va,{animationName:0,elapsedTime:0,pseudoElement:0}),my=Xn(py),gy=N({},Va,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_y=Xn(gy),vy=N({},Va,{data:0}),Um=Xn(vy),xy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function My(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=yy[t])?!!n[t]:!1}function ef(){return My}var by=N({},Do,{key:function(t){if(t.key){var n=xy[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=jl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Sy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ef,charCode:function(t){return t.type==="keypress"?jl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?jl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ey=Xn(by),Ty=N({},Wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lm=Xn(Ty),Ay=N({},Va,{submitter:0}),Cy=Xn(Ay),wy=N({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ef}),Ry=Xn(wy),Dy=N({},Va,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ny=Xn(Dy),Uy=N({},Wl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ly=Xn(Uy),Oy=N({},Va,{newState:0,oldState:0,source:0}),Py=Xn(Oy),Iy=[9,13,27,32],nf=ha&&"CompositionEvent"in window,Uo=null;ha&&"documentMode"in document&&(Uo=document.documentMode);var zy=ha&&"TextEvent"in window&&!Uo,Om=ha&&(!nf||Uo&&8<Uo&&11>=Uo),Pm=" ",Im=!1;function zm(t,n){switch(t){case"keyup":return Iy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var mr=!1;function Fy(t,n){switch(t){case"compositionend":return Fm(n);case"keypress":return n.which!==32?null:(Im=!0,Pm);case"textInput":return t=n.data,t===Pm&&Im?null:t;default:return null}}function By(t,n){if(mr)return t==="compositionend"||!nf&&zm(t,n)?(t=Rm(),Xl=Qu=Ga=null,mr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Om&&n.locale!=="ko"?null:n.data;default:return null}}var Hy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Hy[t.type]:n==="textarea"}function Hm(t,n,a,r){dr?pr?pr.push(r):pr=[r]:dr=r,n=Zc(n,"onChange"),0<n.length&&(a=new ql("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Lo=null,Oo=null;function Gy(t){C_(t,0)}function Zl(t){var n=qe(t);if(ym(n))return t}function Gm(t,n){if(t==="change")return n}var Vm=!1;if(ha){var af;if(ha){var sf="oninput"in document;if(!sf){var km=document.createElement("div");km.setAttribute("oninput","return;"),sf=typeof km.oninput=="function"}af=sf}else af=!1;Vm=af&&(!document.documentMode||9<document.documentMode)}function Xm(){Lo&&(Lo.detachEvent("onpropertychange",jm),Oo=Lo=null)}function jm(t){if(t.propertyName==="value"&&Zl(Oo)){var n=[];Hm(n,Oo,t,Wu(t)),wm(Gy,n)}}function Vy(t,n,a){t==="focusin"?(Xm(),Lo=n,Oo=a,Lo.attachEvent("onpropertychange",jm)):t==="focusout"&&Xm()}function ky(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zl(Oo)}function Xy(t,n){if(t==="click")return Zl(n)}function jy(t,n){if(t==="input"||t==="change")return Zl(n)}function Yy(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ci=typeof Object.is=="function"?Object.is:Yy;function Po(t,n){if(ci(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!Pt.call(n,c)||!ci(t[c],n[c]))return!1}return!0}function rf(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ym(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qm(t,n){var a=Ym(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Ym(a)}}function Wm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Wm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Zm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=rf(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=rf(t.document)}return n}function of(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var qy=ha&&"documentMode"in document&&11>=document.documentMode,gr=null,lf=null,Io=null,cf=!1;function Km(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;cf||gr==null||gr!==rf(r)||(r=gr,"selectionStart"in r&&of(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Io&&Po(Io,r)||(Io=r,r=Zc(lf,"onSelect"),0<r.length&&(n=new ql("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=gr)))}function Rs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var _r={animationend:Rs("Animation","AnimationEnd"),animationiteration:Rs("Animation","AnimationIteration"),animationstart:Rs("Animation","AnimationStart"),transitionrun:Rs("Transition","TransitionRun"),transitionstart:Rs("Transition","TransitionStart"),transitioncancel:Rs("Transition","TransitionCancel"),transitionend:Rs("Transition","TransitionEnd")},uf={},Qm={};ha&&(Qm=document.createElement("div").style,"AnimationEvent"in window||(delete _r.animationend.animation,delete _r.animationiteration.animation,delete _r.animationstart.animation),"TransitionEvent"in window||delete _r.transitionend.transition);function Ds(t){if(uf[t])return uf[t];if(!_r[t])return t;var n=_r[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Qm)return uf[t]=n[a];return t}var Jm=Ds("animationend"),$m=Ds("animationiteration"),t0=Ds("animationstart"),Wy=Ds("transitionrun"),Zy=Ds("transitionstart"),Ky=Ds("transitioncancel"),e0=Ds("transitionend"),n0=new Map,ff="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ff.push("scrollEnd");function Li(t,n){n0.set(t,n),Qn(n,[t])}var Qy=0;function da(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=zi.identifierPrefix;var a=Qy++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function i0(t){if(t==null||typeof t=="string")return t;var n=null,a=zr;if(a!==null)for(var r=0;r<a.length;r++){var c=t[a[r]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??t.default}function pa(t,n){return t=i0(t),n=i0(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Kl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},bi=[],vr=0,hf=0;function Ql(){for(var t=vr,n=hf=vr=0;n<t;){var a=bi[n];bi[n++]=null;var r=bi[n];bi[n++]=null;var c=bi[n];bi[n++]=null;var u=bi[n];if(bi[n++]=null,r!==null&&c!==null){var v=r.pending;v===null?c.next=c:(c.next=v.next,v.next=c),r.pending=c}u!==0&&a0(a,c,u)}}function Jl(t,n,a,r){bi[vr++]=t,bi[vr++]=n,bi[vr++]=a,bi[vr++]=r,hf|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function df(t,n,a,r){return Jl(t,n,a,r),$l(t)}function Ns(t,n){return Jl(t,null,null,n),$l(t)}function a0(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var c=!1,u=t.return;u!==null;)u.childLanes|=a,r=u.alternate,r!==null&&(r.childLanes|=a),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(c=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,c&&n!==null&&(c=31-kn(a),t=u.hiddenUpdates,r=t[c],r===null?t[c]=[n]:r.push(n),n.lane=a|536870912),u):null}function $l(t){if(50<al)throw al=0,Vc=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var xr={};function Jy(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(t,n,a,r){return new Jy(t,n,a,r)}function pf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ma(t,n){var a=t.alternate;return a===null?(a=$n(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function s0(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function tc(t,n,a,r,c,u){var v=0;if(r=t,typeof r=="function")pf(r)&&(v=1);else if(typeof r=="string")v=AM(t,a,Me.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case z:return t=$n(31,a,n,c),t.elementType=z,t.lanes=u,t;case k:return Us(a.children,c,u,n);case st:v=8,c|=24;break;case it:return t=$n(12,a,n,c|2),t.elementType=it,t.lanes=u,t;case K:return t=$n(13,a,n,c),t.elementType=K,t.lanes=u,t;case ft:return t=$n(19,a,n,c),t.elementType=ft,t.lanes=u,t;case Et:case F:return t=c|32,t=$n(30,a,n,t),t.elementType=F,t.lanes=u,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case dt:v=10;break t;case pt:v=9;break t;case Z:v=11;break t;case At:v=14;break t;case G:v=16,r=null;break t}v=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=$n(v,a,n,c),n.elementType=t,n.type=r,n.lanes=u,n}function Us(t,n,a,r){return t=$n(7,t,r,n),t.lanes=a,t}function mf(t,n,a){return t=$n(6,t,null,n),t.lanes=a,t}function r0(t){var n=$n(18,null,null,0);return n.stateNode=t,n}function gf(t,n,a){return n=$n(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var o0=new WeakMap;function Ei(t,n){if(typeof t=="object"&&t!==null){var a=o0.get(t);return a!==void 0?a:(n={value:t,source:n,stack:wt(n)},o0.set(t,n),n)}return{value:t,source:n,stack:wt(n)}}var Sr=[],yr=0,ec=null,zo=0,Ti=[],Ai=0,ka=null,ji=1,Yi="";function ga(t,n){Sr[yr++]=zo,Sr[yr++]=ec,ec=t,zo=n}function l0(t,n,a){Ti[Ai++]=ji,Ti[Ai++]=Yi,Ti[Ai++]=ka,ka=t;var r=ji;t=Yi;var c=32-kn(r)-1;r&=~(1<<c),a+=1;var u=32-kn(n)+c;if(30<u){var v=c-c%5;u=(r&(1<<v)-1).toString(32),r>>=v,c-=v,ji=1<<32-kn(n)+c|a<<c|r,Yi=u+t}else ji=1<<u|a<<c|r,Yi=t}function nc(t){t.return!==null&&(ga(t,1),l0(t,1,0))}function _f(t){for(;t===ec;)ec=Sr[--yr],Sr[yr]=null,zo=Sr[--yr],Sr[yr]=null;for(;t===ka;)ka=Ti[--Ai],Ti[Ai]=null,Yi=Ti[--Ai],Ti[Ai]=null,ji=Ti[--Ai],Ti[Ai]=null}function c0(t,n){Ti[Ai++]=ji,Ti[Ai++]=Yi,Ti[Ai++]=ka,ji=n.id,Yi=n.overflow,ka=t}var bn=null,Qe=null,be=!1,Xa=null,Ci=!1,vf=Error(s(519));function ja(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Fo(Ei(n,t)),vf}function u0(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[ot]=t,n[nt]=r,a){case"dialog":Ce("cancel",n),Ce("close",n);break;case"iframe":case"object":case"embed":Ce("load",n);break;case"video":case"audio":for(a=0;a<rl.length;a++)Ce(rl[a],n);break;case"source":Ce("error",n);break;case"img":case"image":case"link":Ce("error",n),Ce("load",n);break;case"details":Ce("toggle",n);break;case"input":Ce("invalid",n),Mm(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ce("invalid",n);break;case"textarea":Ce("invalid",n),Em(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||N_(n.textContent,a)?(r.popover!=null&&(Ce("beforetoggle",n),Ce("toggle",n)),r.onScroll!=null&&Ce("scroll",n),r.onScrollEnd!=null&&Ce("scrollend",n),r.onClick!=null&&(n.onclick=Xi),n=!0):n=!1,n||ja(t,!0)}function ic(t){for(bn=t.return;bn;)switch(bn.tag){case 5:case 31:case 13:Ci=!1;return;case 27:case 3:Ci=!0;return;default:bn=bn.return}}function Mr(t){if(t!==bn)return!1;if(!be)return ic(t),be=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Wh(t.type,t.memoizedProps)),a=!a),a&&Qe&&ja(t),ic(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Qe=K_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Qe=K_(t)}else n===27?(n=Qe,os(t.type)?(t=id,id=null,Qe=t):Qe=n):Qe=bn?Ri(t.stateNode.nextSibling):null;return!0}function Ls(){Qe=bn=null,be=!1}function xf(){var t=Xa;return t!==null&&(ni===null?ni=t:ni.push.apply(ni,t),Xa=null),t}function Fo(t){Xa===null?Xa=[t]:Xa.push(t)}var Sf=$t(null),Os=null,_a=null;function Ya(t,n,a){V(Sf,n._currentValue),n._currentValue=a}function va(t){t._currentValue=Sf.current,re(Sf)}function ac(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function yf(t,n,a,r){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var u=c.dependencies;if(u!==null){var v=c.child;u=u.firstContext;t:for(;u!==null;){var T=u;u=c;for(var B=0;B<n.length;B++)if(T.context===n[B]){u.lanes|=a,T=u.alternate,T!==null&&(T.lanes|=a),ac(u.return,a,t),r||(v=null);break t}u=T.next}}else if(c.tag===18){if(v=c.return,v===null)throw Error(s(341));v.lanes|=a,u=v.alternate,u!==null&&(u.lanes|=a),ac(v,a,t),v=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=a,v=c.alternate,v!==null&&(v.lanes|=a),ac(c.return,a,t),v=c.child,v=v!==null?v.sibling:null):v=c.child;if(v!==null)v.return=c;else for(v=c;v!==null;){if(v===t){v=null;break}if(c=v.sibling,c!==null){c.return=v.return,v=c;break}v=v.return}c=v}}function Ps(t,n,a,r){t=null;for(var c=n,u=!1;c!==null;){if(!u){if((c.flags&524288)!==0)u=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var v=c.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=c.type;ci(c.pendingProps.value,v.value)||(t!==null?t.push(T):t=[T])}}else if(c===Wt.current){if(v=c.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(qr):t=[qr])}c=c.return}return t!==null&&yf(n,t,a,r),n.flags|=262144,t!==null}function sc(t){for(t=t.firstContext;t!==null;){if(!ci(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Is(t){Os=t,_a=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return f0(Os,t)}function rc(t,n){return Os===null&&Is(t),f0(t,n)}function f0(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},_a===null){if(t===null)throw Error(s(308));_a=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else _a=_a.next=n;return a}var $y=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},t1=o.unstable_scheduleCallback,e1=o.unstable_NormalPriority,dn={$$typeof:dt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mf(){return{controller:new $y,data:new Map,refCount:0}}function Bo(t){t.refCount--,t.refCount===0&&t1(e1,function(){t.controller.abort()})}function h0(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var r=n[t];a.indexOf(r)===-1&&a.push(r)}}}var Ho=null;function n1(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Go=null,bf=0,zs=0,br=null;function i1(t,n){if(Go===null){var a=Go=[];bf=0,zs=Bh(),br={status:"pending",value:void 0,then:function(r){a.push(r)}}}return bf++,n.then(d0,d0),n}function d0(){if(--bf===0&&(Ho=null,Go!==null)){br!==null&&(br.status="fulfilled");var t=Go;Go=null,zs=0,br=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function a1(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var p0=St.S;St.S=function(t,n){if(r_=q(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&i1(t,n),Ho!==null)for(var a=Gr;a!==null;)h0(a,Ho),a=a.next;if(a=t.types,a!==null){for(var r=Gr;r!==null;)h0(r,a),r=r.next;if(zs!==0){r=Ho,r===null&&(r=Ho=[]);for(var c=0;c<a.length;c++){var u=a[c];r.indexOf(u)===-1&&r.push(u)}}}p0!==null&&p0(t,n)};var Fs=$t(null);function Ef(){var t=Fs.current;return t!==null?t:Ke.pooledCache}function oc(t,n){n===null?V(Fs,Fs.current):V(Fs,n.pool)}function m0(){var t=Ef();return t===null?null:{parent:dn._currentValue,pool:t}}var Er=Error(s(460)),Tf=Error(s(474)),lc=Error(s(542)),cc={then:function(){}};function g0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function _0(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Xi,Xi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,x0(t),t===void 0&&!("reason"in n)?Error(s(600)):t;default:if(typeof n.status=="string")n.then(Xi,Xi);else{if(t=Ke,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,x0(t),t}throw Hs=n,Er}}function Bs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Hs=a,Er):a}}var Hs=null;function v0(){if(Hs===null)throw Error(s(459));var t=Hs;return Hs=null,t}function x0(t){if(t===Er||t===lc)throw Error(s(483))}var Tr=null,Vo=0;function uc(t){var n=Vo;return Vo+=1,Tr===null&&(Tr=[]),_0(Tr,t,n)}function qa(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function fc(t,n){throw n.$$typeof===X?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function S0(t){function n($,j){if(t){var at=$.deletions;at===null?($.deletions=[j],$.flags|=16):at.push(j)}}function a($,j){if(!t)return null;for(;j!==null;)n($,j),j=j.sibling;return null}function r($){for(var j=new Map;$!==null;)$.key===null?j.set($.index,$):j.set($.key,$),$=$.sibling;return j}function c($,j){return $=ma($,j),$.index=0,$.sibling=null,$}function u($,j,at){return $.index=at,t?(at=$.alternate,at!==null?(at=at.index,at<j?($.flags|=2,j):at):($.flags|=134217730,j)):($.flags|=1048576,j)}function v($){return t&&$.alternate===null&&($.flags|=134217730),$}function T($,j,at,vt){return j===null||j.tag!==6?(j=mf(at,$.mode,vt),j.return=$,j):(j=c(j,at),j.return=$,j)}function B($,j,at,vt){var Yt=at.type;return Yt===k?($=ut($,j,at.props.children,vt,at.key),qa($,at),$):j!==null&&(j.elementType===Yt||typeof Yt=="object"&&Yt!==null&&Yt.$$typeof===G&&Bs(Yt)===j.type)?(j=c(j,at.props),qa(j,at),j.return=$,j):(j=tc(at.type,at.key,at.props,null,$.mode,vt),qa(j,at),j.return=$,j)}function tt($,j,at,vt){return j===null||j.tag!==4||j.stateNode.containerInfo!==at.containerInfo||j.stateNode.implementation!==at.implementation?(j=gf(at,$.mode,vt),j.return=$,j):(j=c(j,at.children||[]),j.return=$,j)}function ut($,j,at,vt,Yt){return j===null||j.tag!==7?(j=Us(at,$.mode,vt,Yt),j.return=$,j):(j=c(j,at),j.return=$,j)}function xt($,j,at){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=mf(""+j,$.mode,at),j.return=$,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case A:return at=tc(j.type,j.key,j.props,null,$.mode,at),qa(at,j),at.return=$,at;case w:return j=gf(j,$.mode,at),j.return=$,j;case G:return j=Bs(j),xt($,j,at)}if(yt(j)||W(j))return j=Us(j,$.mode,at,null),j.return=$,j;if(typeof j.then=="function")return xt($,uc(j),at);if(j.$$typeof===dt)return xt($,rc($,j),at);fc($,j)}return null}function Q($,j,at,vt){var Yt=j!==null?j.key:null;if(typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint")return Yt!==null?null:T($,j,""+at,vt);if(typeof at=="object"&&at!==null){switch(at.$$typeof){case A:return at.key===Yt?B($,j,at,vt):null;case w:return at.key===Yt?tt($,j,at,vt):null;case G:return at=Bs(at),Q($,j,at,vt)}if(yt(at)||W(at))return Yt!==null?null:ut($,j,at,vt,null);if(typeof at.then=="function")return Q($,j,uc(at),vt);if(at.$$typeof===dt)return Q($,j,rc($,at),vt);fc($,at)}return null}function lt($,j,at,vt,Yt){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return $=$.get(at)||null,T(j,$,""+vt,Yt);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case A:return $=$.get(vt.key===null?at:vt.key)||null,B(j,$,vt,Yt);case w:return $=$.get(vt.key===null?at:vt.key)||null,tt(j,$,vt,Yt);case G:return vt=Bs(vt),lt($,j,at,vt,Yt)}if(yt(vt)||W(vt))return $=$.get(at)||null,ut(j,$,vt,Yt,null);if(typeof vt.then=="function")return lt($,j,at,uc(vt),Yt);if(vt.$$typeof===dt)return lt($,j,at,rc(j,vt),Yt);fc(j,vt)}return null}function zt($,j,at,vt){for(var Yt=null,De=null,ie=j,oe=j=0,gn=null;ie!==null&&oe<at.length;oe++){ie.index>oe?(gn=ie,ie=null):gn=ie.sibling;var Oe=Q($,ie,at[oe],vt);if(Oe===null){ie===null&&(ie=gn);break}t&&ie&&Oe.alternate===null&&n($,ie),j=u(Oe,j,oe),De===null?Yt=Oe:De.sibling=Oe,De=Oe,ie=gn}if(oe===at.length)return a($,ie),be&&ga($,oe),Yt;if(ie===null){for(;oe<at.length;oe++)ie=xt($,at[oe],vt),ie!==null&&(j=u(ie,j,oe),De===null?Yt=ie:De.sibling=ie,De=ie);return be&&ga($,oe),Yt}for(ie=r(ie);oe<at.length;oe++)gn=lt(ie,$,oe,at[oe],vt),gn!==null&&(t&&(Oe=gn.alternate,Oe!==null&&ie.delete(Oe.key===null?oe:Oe.key)),j=u(gn,j,oe),De===null?Yt=gn:De.sibling=gn,De=gn);return t&&ie.forEach(function(hs){return n($,hs)}),be&&ga($,oe),Yt}function Qt($,j,at,vt){if(at==null)throw Error(s(151));for(var Yt=null,De=null,ie=j,oe=j=0,gn=null,Oe=at.next();ie!==null&&!Oe.done;oe++,Oe=at.next()){ie.index>oe?(gn=ie,ie=null):gn=ie.sibling;var hs=Q($,ie,Oe.value,vt);if(hs===null){ie===null&&(ie=gn);break}t&&ie&&hs.alternate===null&&n($,ie),j=u(hs,j,oe),De===null?Yt=hs:De.sibling=hs,De=hs,ie=gn}if(Oe.done)return a($,ie),be&&ga($,oe),Yt;if(ie===null){for(;!Oe.done;oe++,Oe=at.next())Oe=xt($,Oe.value,vt),Oe!==null&&(j=u(Oe,j,oe),De===null?Yt=Oe:De.sibling=Oe,De=Oe);return be&&ga($,oe),Yt}for(ie=r(ie);!Oe.done;oe++,Oe=at.next())Oe=lt(ie,$,oe,Oe.value,vt),Oe!==null&&(t&&(gn=Oe.alternate,gn!==null&&ie.delete(gn.key===null?oe:gn.key)),j=u(Oe,j,oe),De===null?Yt=Oe:De.sibling=Oe,De=Oe);return t&&ie.forEach(function(FM){return n($,FM)}),be&&ga($,oe),Yt}function _e($,j,at,vt){if(typeof at=="object"&&at!==null&&at.type===k&&at.key===null&&at.props.ref===void 0&&(at=at.props.children),typeof at=="object"&&at!==null){switch(at.$$typeof){case A:t:{for(var Yt=at.key;j!==null;){if(j.key===Yt){if(Yt=at.type,Yt===k){if(j.tag===7){a($,j.sibling),vt=c(j,at.props.children),qa(vt,at),vt.return=$,$=vt;break t}}else if(j.elementType===Yt||typeof Yt=="object"&&Yt!==null&&Yt.$$typeof===G&&Bs(Yt)===j.type){a($,j.sibling),vt=c(j,at.props),qa(vt,at),vt.return=$,$=vt;break t}a($,j);break}else n($,j);j=j.sibling}at.type===k?(vt=Us(at.props.children,$.mode,vt,at.key),qa(vt,at),vt.return=$,$=vt):(vt=tc(at.type,at.key,at.props,null,$.mode,vt),qa(vt,at),vt.return=$,$=vt)}return v($);case w:t:{for(Yt=at.key;j!==null;){if(j.key===Yt)if(j.tag===4&&j.stateNode.containerInfo===at.containerInfo&&j.stateNode.implementation===at.implementation){a($,j.sibling),vt=c(j,at.children||[]),vt.return=$,$=vt;break t}else{a($,j);break}else n($,j);j=j.sibling}vt=gf(at,$.mode,vt),vt.return=$,$=vt}return v($);case G:return at=Bs(at),_e($,j,at,vt)}if(yt(at))return zt($,j,at,vt);if(W(at)){if(Yt=W(at),typeof Yt!="function")throw Error(s(150));return at=Yt.call(at),Qt($,j,at,vt)}if(typeof at.then=="function")return _e($,j,uc(at),vt);if(at.$$typeof===dt)return _e($,j,rc($,at),vt);fc($,at)}return typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint"?(at=""+at,j!==null&&j.tag===6?(a($,j.sibling),vt=c(j,at),vt.return=$,$=vt):(a($,j),vt=mf(at,$.mode,vt),vt.return=$,$=vt),v($)):a($,j)}return function($,j,at,vt){try{Vo=0;var Yt=_e($,j,at,vt);return Tr=null,Yt}catch(ie){if(ie===Er||ie===lc)throw ie;var De=$n(29,ie,null,$.mode);return De.lanes=vt,De.return=$,De}finally{}}}var Gs=S0(!0),y0=S0(!1),Wa=!1;function Af(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Za(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ka(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Fe&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=$l(t),a0(t,null,a),n}return Jl(t,r,n,a),$l(t)}function ko(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Gl(t,a)}}function wf(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?c=u=v:u=u.next=v,a=a.next}while(a!==null);u===null?c=u=n:u=u.next=n}else c=u=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:u,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Rf=!1;function Xo(){if(Rf){var t=br;if(t!==null)throw t}}function jo(t,n,a,r){Rf=!1;var c=t.updateQueue;Wa=!1;var u=c.firstBaseUpdate,v=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var B=T,tt=B.next;B.next=null,v===null?u=tt:v.next=tt,v=B;var ut=t.alternate;ut!==null&&(ut=ut.updateQueue,T=ut.lastBaseUpdate,T!==v&&(T===null?ut.firstBaseUpdate=tt:T.next=tt,ut.lastBaseUpdate=B))}if(u!==null){var xt=c.baseState;v=0,ut=tt=B=null,T=u;do{var Q=T.lane&-536870913,lt=Q!==T.lane;if(lt?(Re&Q)===Q:(r&Q)===Q){Q!==0&&Q===zs&&(Rf=!0),ut!==null&&(ut=ut.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var zt=t,Qt=T;Q=n;var _e=a;switch(Qt.tag){case 1:if(zt=Qt.payload,typeof zt=="function"){xt=zt.call(_e,xt,Q);break t}xt=zt;break t;case 3:zt.flags=zt.flags&-65537|128;case 0:if(zt=Qt.payload,Q=typeof zt=="function"?zt.call(_e,xt,Q):zt,Q==null)break t;xt=N({},xt,Q);break t;case 2:Wa=!0}}Q=T.callback,Q!==null&&(t.flags|=64,lt&&(t.flags|=8192),lt=c.callbacks,lt===null?c.callbacks=[Q]:lt.push(Q))}else lt={lane:Q,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ut===null?(tt=ut=lt,B=xt):ut=ut.next=lt,v|=Q;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;lt=T,T=lt.next,lt.next=null,c.lastBaseUpdate=lt,c.shared.pending=null}}while(!0);ut===null&&(B=xt),c.baseState=B,c.firstBaseUpdate=tt,c.lastBaseUpdate=ut,u===null&&(c.shared.lanes=0),is|=v,t.lanes=v,t.memoizedState=xt}}function M0(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function b0(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)M0(a[t],n)}var Qa=$t(null),hc=$t(0);function E0(t,n){t=ba,V(hc,t),V(Qa,n),ba=t|n.baseLanes}function Df(){V(hc,ba),V(Qa,Qa.current)}function Nf(){ba=hc.current,re(Qa),re(hc)}var Dn=$t(null),zn=null;function Ja(t){var n=t.alternate;V(Nn,Nn.current&1),V(Dn,t),zn===null&&(n===null||Qa.current!==null||n.memoizedState!==null)&&(zn=t)}function Uf(t){V(Nn,Nn.current),V(Dn,t),zn===null&&(zn=t)}function T0(t){t.tag===22?(V(Nn,Nn.current),V(Dn,t),zn===null&&(zn=t)):$a()}function $a(){V(Nn,Nn.current),V(Dn,Dn.current)}function ui(t){re(Dn),zn===t&&(zn=null),re(Nn)}var Nn=$t(0);function Yo(t,n){V(Dn,Dn.current),V(Nn,n)}function Lf(t){re(Nn),re(Dn),zn===t&&(zn=null)}function dc(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ed(a)||nd(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var xa=0,ge=null,We=null,pn=null,pc=!1,Ar=!1,Vs=!1,mc=0,qo=0,Cr=null,s1=0;function on(){throw Error(s(321))}function Of(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ci(t[a],n[a]))return!1;return!0}function Pf(t,n,a,r,c,u){return xa=u,ge=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,St.H=t===null||t.memoizedState===null?lg:cg,Vs=!1,u=a(r,c),Vs=!1,Ar&&(u=C0(n,a,r,c)),A0(t),u}function A0(t){St.H=Mc;var n=We!==null&&We.next!==null;if(xa=0,pn=We=ge=null,pc=!1,qo=0,Cr=null,n)throw Error(s(300));t===null||mn||(t=t.dependencies,t!==null&&sc(t)&&(mn=!0))}function C0(t,n,a,r){ge=t;var c=0;do{if(Ar&&(Cr=null),qo=0,Ar=!1,25<=c)throw Error(s(301));if(c+=1,pn=We=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}St.H=d1,u=n(a,r)}while(Ar);return u}function r1(){var t=St.H,n=t.useState()[0];return n=typeof n.then=="function"?Wo(n):n,t=t.useState()[0],(We!==null?We.memoizedState:null)!==t&&(ge.flags|=1024),n}function If(){var t=mc!==0;return mc=0,t}function zf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Ff(t){if(pc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}pc=!1}xa=0,pn=We=ge=null,Ar=!1,qo=mc=0,Cr=null}function jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?ge.memoizedState=pn=t:pn=pn.next=t,pn}function fn(){if(We===null){var t=ge.alternate;t=t!==null?t.memoizedState:null}else t=We.next;var n=pn===null?ge.memoizedState:pn.next;if(n!==null)pn=n,We=t;else{if(t===null)throw ge.alternate===null?Error(s(467)):Error(s(310));We=t,t={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},pn===null?ge.memoizedState=pn=t:pn=pn.next=t}return pn}function gc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wo(t){var n=qo;return qo+=1,Cr===null&&(Cr=[]),t=_0(Cr,t,n),n=ge,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,St.H=n===null||n.memoizedState===null?lg:cg),t}function _c(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Wo(t);if(t.$$typeof===rt)return;if(t.$$typeof===dt)return Rn(t)}throw Error(s(438,String(t)))}function Bf(t){var n=null,a=ge.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ge.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=gc(),ge.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=Rt;return n.index++,a}function Sa(t,n){return typeof n=="function"?n(t):n}function vc(t){var n=fn();return Hf(n,We,t)}function Hf(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=t.baseQueue,u=r.pending;if(u!==null){if(c!==null){var v=c.next;c.next=u.next,u.next=v}n.baseQueue=c=u,r.pending=null}if(u=t.baseState,c===null)t.memoizedState=u;else{n=c.next;var T=v=null,B=null,tt=n,ut=!1;do{var xt=tt.lane&-536870913;if(xt!==tt.lane?(Re&xt)===xt:(xa&xt)===xt){var Q=tt.revertLane;if(Q===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),xt===zs&&(ut=!0);else if((xa&Q)===Q){tt=tt.next,Q===zs&&(ut=!0);continue}else xt={lane:0,revertLane:tt.revertLane,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},B===null?(T=B=xt,v=u):B=B.next=xt,ge.lanes|=Q,is|=Q;xt=tt.action,Vs&&a(u,xt),u=tt.hasEagerState?tt.eagerState:a(u,xt)}else Q={lane:xt,revertLane:tt.revertLane,gesture:tt.gesture,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},B===null?(T=B=Q,v=u):B=B.next=Q,ge.lanes|=xt,is|=xt;tt=tt.next}while(tt!==null&&tt!==n);if(B===null?v=u:B.next=T,!ci(u,t.memoizedState)&&(mn=!0,ut&&(a=br,a!==null)))throw a;t.memoizedState=u,t.baseState=v,t.baseQueue=B,r.lastRenderedState=u}return c===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Gf(t){var n=fn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,c=a.pending,u=n.memoizedState;if(c!==null){a.pending=null;var v=c=c.next;do u=t(u,v.action),v=v.next;while(v!==c);ci(u,n.memoizedState)||(mn=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),a.lastRenderedState=u}return[u,r]}function w0(t,n,a){var r=ge,c=fn(),u=be;if(u){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!ci((We||c).memoizedState,a);if(v&&(c.memoizedState=a,mn=!0),c=c.queue,Xf(N0.bind(null,r,c,t),[t]),t=c.getSnapshot!==n||v||pn!==null&&(pn.memoizedState.tag&1)!==0,wr(t?9:8,{destroy:void 0},D0.bind(null,r,c,a,n),null),t){if(r.flags|=2048,Ke===null)throw Error(s(349));u||(xa&127)!==0||R0(r,n,a)}return a}function R0(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ge.updateQueue,n===null?(n=gc(),ge.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function D0(t,n,a,r){n.value=a,n.getSnapshot=r,U0(n)&&L0(t)}function N0(t,n,a){return a(function(){U0(n)&&L0(t)})}function U0(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ci(t,a)}catch{return!0}}function L0(t){var n=Ns(t,2);n!==null&&ii(n,t,2)}function Vf(t){var n=jn();if(typeof t=="function"){var a=t;if(t=a(),Vs){Mn(!0);try{a()}finally{Mn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:t},n}function O0(t,n,a,r){return t.baseState=a,Hf(t,We,typeof r=="function"?r:Sa)}function o1(t,n,a,r,c){if(yc(t))throw Error(s(485));if(t=n.action,t!==null){var u={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){u.listeners.push(v)}};St.T!==null?a(!0):u.isTransition=!1,r(u),a=n.pending,a===null?(u.next=n.pending=u,P0(n,u)):(u.next=a.next,n.pending=a.next=u)}}function P0(t,n){var a=n.action,r=n.payload,c=t.state;if(n.isTransition){var u=St.T,v={};v.types=u!==null?u.types:null,St.T=v;try{var T=a(c,r),B=St.S;B!==null&&B(v,T),I0(t,n,T)}catch(tt){kf(t,n,tt)}finally{u!==null&&v.types!==null&&(u.types=v.types),St.T=u}}else try{u=a(c,r),I0(t,n,u)}catch(tt){kf(t,n,tt)}}function I0(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){z0(t,n,r)},function(r){return kf(t,n,r)}):z0(t,n,a)}function z0(t,n,a){n.status="fulfilled",n.value=a,F0(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,P0(t,a)))}function kf(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,F0(n),n=n.next;while(n!==r)}t.action=null}function F0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function B0(t,n){return n}function H0(t,n){if(be){var a=Ke.formState;if(a!==null){t:{var r=ge;if(be){if(Qe){e:{for(var c=Qe,u=Ci;c.nodeType!==8;){if(!u){c=null;break e}if(c=Ri(c.nextSibling),c===null){c=null;break e}}u=c.data,c=u==="F!"||u==="F"?c:null}if(c){Qe=Ri(c.nextSibling),r=c.data==="F!";break t}}ja(r)}r=!1}r&&(n=a[0])}}return a=jn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:B0,lastRenderedState:n},a.queue=r,a=sg.bind(null,ge,r),r.dispatch=a,r=Vf(!1),u=Zf.bind(null,ge,!1,r.queue),r=jn(),c={state:n,dispatch:null,action:t,pending:null},r.queue=c,a=o1.bind(null,ge,c,u,a),c.dispatch=a,r.memoizedState=t,[n,a,!1]}function G0(t){var n=fn();return V0(n,We,t)}function V0(t,n,a){if(n=Hf(t,n,B0)[0],t=vc(Sa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Wo(n)}catch(v){throw v===Er?lc:v}else r=n;n=fn();var c=n.queue,u=c.dispatch;return a!==n.memoizedState&&(ge.flags|=2048,wr(9,{destroy:void 0},l1.bind(null,c,a),null)),[r,u,t]}function l1(t,n){t.action=n}function k0(t){var n=fn(),a=We;if(a!==null)return V0(n,a,t);fn(),n=n.memoizedState,a=fn();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function wr(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=ge.updateQueue,n===null&&(n=gc(),ge.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function X0(){return fn().memoizedState}function xc(t,n,a,r){var c=jn();ge.flags|=t,c.memoizedState=wr(1|n,{destroy:void 0},a,r===void 0?null:r)}function Sc(t,n,a,r){var c=fn();r=r===void 0?null:r;var u=c.memoizedState.inst;We!==null&&r!==null&&Of(r,We.memoizedState.deps)?c.memoizedState=wr(n,u,a,r):(ge.flags|=t,c.memoizedState=wr(1|n,u,a,r))}function j0(t,n){xc(8390656,8,t,n)}function Xf(t,n){Sc(2048,8,t,n)}function c1(t){ge.flags|=4;var n=ge.updateQueue;if(n===null)n=gc(),ge.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Y0(t){var n=fn().memoizedState;return c1({ref:n,nextImpl:t}),function(){if((Fe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function q0(t,n){return Sc(4,2,t,n)}function W0(t,n){return Sc(4,4,t,n)}function Z0(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function K0(t,n,a){a=a!=null?a.concat([t]):null,Sc(4,4,Z0.bind(null,n,t),a)}function jf(){}function Q0(t,n){var a=fn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Of(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function J0(t,n){var a=fn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Of(n,r[1]))return r[0];if(r=t(),Vs){Mn(!0);try{t()}finally{Mn(!1)}}return a.memoizedState=[r,n],r}function Yf(t,n,a){return a===void 0||(xa&1073741824)!==0&&(Re&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=l_(),ge.lanes|=t,is|=t,a)}function $0(t,n,a,r){return ci(a,n)?a:Qa.current!==null?(t=Yf(t,a,r),ci(t,n)||(mn=!0),t):(xa&106)===0||(xa&1073741824)!==0&&(Re&261930)===0?(mn=!0,t.memoizedState=a):(t=l_(),ge.lanes|=t,is|=t,n)}function tg(t,n,a,r,c){var u=Nt.p;Nt.p=u!==0&&8>u?u:8;var v=St.T,T={};T.types=v!==null?v.types:null,St.T=T,Zf(t,!1,n,a);try{var B=c(),tt=St.S;if(tt!==null&&tt(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ut=a1(B,r);Zo(t,n,ut,pi(t))}else Zo(t,n,r,pi(t))}catch(xt){Zo(t,n,{then:function(){},status:"rejected",reason:xt},pi())}finally{Nt.p=u,v!==null&&T.types!==null&&(v.types=T.types),St.T=v}}function u1(){}function qf(t,n,a,r){if(t.tag!==5)throw Error(s(476));var c=eg(t).queue;tg(t,c,n,te,a===null?u1:function(){return ng(t),a(r)})}function eg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:te},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function ng(t){var n=eg(t);n.next===null&&(n=t.alternate.memoizedState),Zo(t,n.next.queue,{},pi())}function Wf(){return Rn(qr)}function ig(){return fn().memoizedState}function ag(){return fn().memoizedState}function f1(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=pi();t=Za(a);var r=Ka(n,t,a);r!==null&&(ii(r,n,a),ko(r,n,a)),n={cache:Mf()},t.payload=n;return}n=n.return}}function h1(t,n,a){var r=pi();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},yc(t)?rg(n,a):(a=df(t,n,a,r),a!==null&&(ii(a,t,r),og(a,n,r)))}function sg(t,n,a){var r=pi();Zo(t,n,a,r)}function Zo(t,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(yc(t))rg(n,c);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var v=n.lastRenderedState,T=u(v,a);if(c.hasEagerState=!0,c.eagerState=T,ci(T,v))return Jl(t,n,c,0),Ke===null&&Ql(),!1}catch{}finally{}if(a=df(t,n,c,r),a!==null)return ii(a,t,r),og(a,n,r),!0}return!1}function Zf(t,n,a,r){if(r={lane:2,revertLane:Bh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},yc(t)){if(n)throw Error(s(479))}else n=df(t,a,r,2),n!==null&&ii(n,t,2)}function yc(t){var n=t.alternate;return t===ge||n!==null&&n===ge}function rg(t,n){Ar=pc=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function og(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Gl(t,a)}}var Mc={readContext:Rn,use:_c,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on,useEffectEvent:on},lg={readContext:Rn,use:_c,useCallback:function(t,n){return jn().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:j0,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,xc(4194308,4,Z0.bind(null,n,t),a)},useLayoutEffect:function(t,n){return xc(4194308,4,t,n)},useInsertionEffect:function(t,n){xc(4,2,t,n)},useMemo:function(t,n){var a=jn();n=n===void 0?null:n;var r=t();if(Vs){Mn(!0);try{t()}finally{Mn(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=jn();if(a!==void 0){var c=a(n);if(Vs){Mn(!0);try{a(n)}finally{Mn(!1)}}}else c=n;return r.memoizedState=r.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},r.queue=t,t=t.dispatch=h1.bind(null,ge,t),[r.memoizedState,t]},useRef:function(t){var n=jn();return t={current:t},n.memoizedState=t},useState:function(t){t=Vf(t);var n=t.queue,a=sg.bind(null,ge,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:jf,useDeferredValue:function(t,n){var a=jn();return Yf(a,t,n)},useTransition:function(){var t=Vf(!1);return t=tg.bind(null,ge,t.queue,!0,!1),jn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=ge,c=jn();if(be){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ke===null)throw Error(s(349));(Re&127)!==0||R0(r,n,a)}c.memoizedState=a;var u={value:a,getSnapshot:n};return c.queue=u,j0(N0.bind(null,r,u,t),[t]),r.flags|=2048,wr(9,{destroy:void 0},D0.bind(null,r,u,a,n),null),a},useId:function(){var t=jn(),n=Ke.identifierPrefix;if(be){var a=Yi,r=ji;a=(r&~(1<<32-kn(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=mc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=s1++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Wf,useFormState:H0,useActionState:H0,useOptimistic:function(t){var n=jn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Zf.bind(null,ge,!0,a),a.dispatch=n,[t,n]},useMemoCache:Bf,useCacheRefresh:function(){return jn().memoizedState=f1.bind(null,ge)},useEffectEvent:function(t){var n=jn(),a={impl:t};return n.memoizedState=a,function(){if((Fe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},cg={readContext:Rn,use:_c,useCallback:Q0,useContext:Rn,useEffect:Xf,useImperativeHandle:K0,useInsertionEffect:q0,useLayoutEffect:W0,useMemo:J0,useReducer:vc,useRef:X0,useState:function(){return vc(Sa)},useDebugValue:jf,useDeferredValue:function(t,n){var a=fn();return $0(a,We.memoizedState,t,n)},useTransition:function(){var t=vc(Sa)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:Wo(t),n]},useSyncExternalStore:w0,useId:ig,useHostTransitionStatus:Wf,useFormState:G0,useActionState:G0,useOptimistic:function(t,n){var a=fn();return O0(a,We,t,n)},useMemoCache:Bf,useCacheRefresh:ag,useEffectEvent:Y0},d1={readContext:Rn,use:_c,useCallback:Q0,useContext:Rn,useEffect:Xf,useImperativeHandle:K0,useInsertionEffect:q0,useLayoutEffect:W0,useMemo:J0,useReducer:Gf,useRef:X0,useState:function(){return Gf(Sa)},useDebugValue:jf,useDeferredValue:function(t,n){var a=fn();return We===null?Yf(a,t,n):$0(a,We.memoizedState,t,n)},useTransition:function(){var t=Gf(Sa)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:Wo(t),n]},useSyncExternalStore:w0,useId:ig,useHostTransitionStatus:Wf,useFormState:k0,useActionState:k0,useOptimistic:function(t,n){var a=fn();return We!==null?O0(a,We,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Bf,useCacheRefresh:ag,useEffectEvent:Y0};function Kf(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:N({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Qf={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=pi(),c=Za(r);c.payload=n,a!=null&&(c.callback=a),n=Ka(t,c,r),n!==null&&(ii(n,t,r),ko(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=pi(),c=Za(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ka(t,c,r),n!==null&&(ii(n,t,r),ko(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=pi(),r=Za(a);r.tag=2,n!=null&&(r.callback=n),n=Ka(t,r,a),n!==null&&(ii(n,t,a),ko(n,t,a))}};function ug(t,n,a,r,c,u,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,u,v):n.prototype&&n.prototype.isPureReactComponent?!Po(a,r)||!Po(c,u):!0}function fg(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&Qf.enqueueReplaceState(n,n.state,null)}function ks(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=N({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function hg(t){Kl(t)}function dg(t){console.error(t)}function pg(t){Kl(t)}function bc(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function mg(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Jf(t,n,a){return a=Za(a),a.tag=3,a.payload={element:null},a.callback=function(){bc(t,n)},a}function gg(t){return t=Za(t),t.tag=3,t}function _g(t,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var u=r.value;t.payload=function(){return c(u)},t.callback=function(){mg(n,a,r)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){mg(n,a,r),typeof c!="function"&&(as===null?as=new Set([this]):as.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})})}function p1(t,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Ps(n,a,c,!0),a=Dn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return zn===null?Xc():a.alternate===null&&ln===0&&(ln=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===cc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Ih(t,r,c)),!1;case 22:return a.flags|=65536,r===cc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Ih(t,r,c)),!1}throw Error(s(435,a.tag))}return Ih(t,r,c),Xc(),!1}if(be)return n=Dn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==vf&&(t=Error(s(422),{cause:r}),Fo(Ei(t,a)))):(r!==vf&&(n=Error(s(423),{cause:r}),Fo(Ei(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,r=Ei(r,a),c=Jf(t.stateNode,r,c),wf(t,c),ln!==4&&(ln=2)),!1;var u=Error(s(520),{cause:r});if(u=Ei(u,a),il===null?il=[u]:il.push(u),ln!==4&&(ln=2),n===null)return!0;r=Ei(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Jf(a.stateNode,r,t),wf(a,t),!1;case 1:if(n=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(as===null||!as.has(u))))return a.flags|=65536,c&=-c,a.lanes|=c,c=gg(c),_g(c,t,a,r),wf(a,c),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var $f=Error(s(461)),mn=!1;function vn(t,n,a,r){n.child=t===null?y0(n,null,a,r):Gs(n,t.child,a,r)}function vg(t,n,a,r,c){a=a.render;var u=n.ref;if("ref"in r){var v={};for(var T in r)T!=="ref"&&(v[T]=r[T])}else v=r;return Is(n),r=Pf(t,n,a,v,u,c),T=If(),t!==null&&!mn?(zf(t,n,c),ya(t,n,c)):(be&&T&&nc(n),n.flags|=1,vn(t,n,r,c),n.child)}function xg(t,n,a,r,c){if(t===null){var u=a.type;return typeof u=="function"&&!pf(u)&&u.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=u,Sg(t,n,u,r,c)):(t=tc(a.type,null,r,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(u=t.child,!oh(t,c)){var v=u.memoizedProps;if(a=a.compare,a=a!==null?a:Po,a(v,r)&&t.ref===n.ref)return ya(t,n,c)}return n.flags|=1,t=ma(u,r),t.ref=n.ref,t.return=n,n.child=t}function Sg(t,n,a,r,c){if(t!==null){var u=t.memoizedProps;if(Po(u,r)&&t.ref===n.ref)if(mn=!1,n.pendingProps=r=u,oh(t,c))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,ya(t,n,c)}return th(t,n,a,r,c)}function yg(t,n,a,r){var c=r.children,u=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,t!==null){for(r=n.child=t.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~u}else r=0,n.child=null;return Mg(t,n,u,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&oc(n,u!==null?u.cachePool:null),u!==null?E0(n,u):Df(),T0(n);else return r=n.lanes=536870912,Mg(t,n,u!==null?u.baseLanes|a:a,a,r)}else u!==null?(oc(n,u.cachePool),E0(n,u),$a(),n.memoizedState=null):(t!==null&&oc(n,null),Df(),$a());return vn(t,n,c,a),n.child}function Ko(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Mg(t,n,a,r,c){var u=Ef();return u=u===null?null:{parent:dn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&oc(n,null),Df(),T0(n),t!==null&&Ps(t,n,r,!0),n.childLanes=c,null}function Ec(t,n){return n=Tc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function bg(t,n,a){return Gs(n,t.child,null,a),t=Ec(n,n.pendingProps),t.flags|=2,ui(n),n.memoizedState=null,t}function m1(t,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(be){if(r.mode==="hidden")return t=Ec(n,r),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Ko(null,t);if(Uf(n),(t=Qe)?(t=Z_(t,Ci),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ka!==null?{id:ji,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},a=r0(t),a.return=n,n.child=a,bn=n,Qe=null)):t=null,t===null)throw ja(n);return n.lanes=536870912,null}return Ec(n,r)}var u=t.memoizedState;if(u!==null){var v=u.dehydrated;if(Uf(n),c)if(n.flags&256)n.flags&=-257,n=bg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(mn||Ps(t,n,a,!1),c=(a&t.childLanes)!==0,mn||c){if(Qa.current===null){if(r=Ke,r!==null&&(v=Vl(r,a),v!==0&&v!==u.retryLane))throw u.retryLane=v,Ns(t,v),ii(r,t,v),$f;Xc()}n=bg(t,n,a)}else t=u.treeContext,Qe=Ri(v.nextSibling),bn=n,be=!0,Xa=null,Ci=!1,t!==null&&c0(n,t),n=Ec(n,r),n.flags|=134221824;return n}return t=ma(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Rr(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function th(t,n,a,r,c){return Is(n),a=Pf(t,n,a,r,void 0,c),r=If(),t!==null&&!mn?(zf(t,n,c),ya(t,n,c)):(be&&r&&nc(n),n.flags|=1,vn(t,n,a,c),n.child)}function Eg(t,n,a,r,c,u){return Is(n),n.updateQueue=null,a=C0(n,r,a,c),A0(t),r=If(),t!==null&&!mn?(zf(t,n,u),ya(t,n,u)):(be&&r&&nc(n),n.flags|=1,vn(t,n,a,u),n.child)}function Tg(t,n,a,r,c){if(Is(n),n.stateNode===null){var u=xr,v=a.contextType;typeof v=="object"&&v!==null&&(u=Rn(v)),u=new a(r,u),n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Qf,n.stateNode=u,u._reactInternals=n,u=n.stateNode,u.props=r,u.state=n.memoizedState,u.refs={},Af(n),v=a.contextType,u.context=typeof v=="object"&&v!==null?Rn(v):xr,u.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Kf(n,a,v,r),u.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(v=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),v!==u.state&&Qf.enqueueReplaceState(u,u.state,null),jo(n,r,u,c),Xo(),u.state=n.memoizedState),typeof u.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){u=n.stateNode;var T=n.memoizedProps,B=ks(a,T);u.props=B;var tt=u.context,ut=a.contextType;v=xr,typeof ut=="object"&&ut!==null&&(v=Rn(ut));var xt=a.getDerivedStateFromProps;ut=typeof xt=="function"||typeof u.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ut||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(T||tt!==v)&&fg(n,u,r,v),Wa=!1;var Q=n.memoizedState;u.state=Q,jo(n,r,u,c),Xo(),tt=n.memoizedState,T||Q!==tt||Wa?(typeof xt=="function"&&(Kf(n,a,xt,r),tt=n.memoizedState),(B=Wa||ug(n,a,B,r,Q,tt,v))?(ut||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(n.flags|=4194308)):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=tt),u.props=r,u.state=tt,u.context=v,r=B):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{u=n.stateNode,Cf(t,n),v=n.memoizedProps,ut=ks(a,v),u.props=ut,xt=n.pendingProps,Q=u.context,tt=a.contextType,B=xr,typeof tt=="object"&&tt!==null&&(B=Rn(tt)),T=a.getDerivedStateFromProps,(tt=typeof T=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(v!==xt||Q!==B)&&fg(n,u,r,B),Wa=!1,Q=n.memoizedState,u.state=Q,jo(n,r,u,c),Xo();var lt=n.memoizedState;v!==xt||Q!==lt||Wa||t!==null&&t.dependencies!==null&&sc(t.dependencies)?(typeof T=="function"&&(Kf(n,a,T,r),lt=n.memoizedState),(ut=Wa||ug(n,a,ut,r,Q,lt,B)||t!==null&&t.dependencies!==null&&sc(t.dependencies))?(tt||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,lt,B),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,lt,B)),typeof u.componentDidUpdate=="function"&&(n.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof u.componentDidUpdate!="function"||v===t.memoizedProps&&Q===t.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&Q===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=lt),u.props=r,u.state=lt,u.context=B,r=ut):(typeof u.componentDidUpdate!="function"||v===t.memoizedProps&&Q===t.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&Q===t.memoizedState||(n.flags|=1024),r=!1)}return u=r,Rr(t,n),r=(n.flags&128)!==0,u||r?(u=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:u.render(),n.flags|=1,t!==null&&r?(n.child=Gs(n,t.child,null,c),n.child=Gs(n,null,a,c)):vn(t,n,a,c),n.memoizedState=u.state,t=n.child):t=ya(t,n,c),t}function Ag(t,n,a,r){return Ls(),n.flags|=256,vn(t,n,a,r),n.child}var eh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nh(t){return{baseLanes:t,cachePool:m0()}}function ih(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=di),t}function Cg(t,n,a){var r=n.pendingProps,c=!1,u=(n.flags&128)!==0,v;if((v=u)||(v=t!==null&&t.memoizedState===null?!1:(Nn.current&2)!==0),v&&(c=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(be){if(c?Ja(n):$a(),(t=Qe)?(t=Z_(t,Ci),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ka!==null?{id:ji,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},a=r0(t),a.return=n,n.child=a,bn=n,Qe=null)):t=null,t===null)throw ja(n);return nd(t)?n.lanes=32:n.lanes=536870912,null}return u=r.children,r=r.fallback,c?($a(),c=n.mode,u=Tc({mode:"hidden",children:u},c),r=Us(r,c,a,null),u.return=n,r.return=n,u.sibling=r,n.child=u,r=n.child,r.memoizedState=nh(a),r.childLanes=ih(t,v,a),n.memoizedState=eh,Ko(null,r)):(Ja(n),ah(n,u))}var T=t.memoizedState;if(T!==null){var B=T.dehydrated;if(B!==null)return g1(t,n,u,v,r,B,T,a)}return c?($a(),c=r.fallback,u=n.mode,T=t.child,B=T.sibling,r=ma(T,{mode:"hidden",children:r.children}),r.subtreeFlags=T.subtreeFlags&1206910976,B!==null?c=ma(B,c):(c=Us(c,u,a,null),c.flags|=2),c.return=n,r.return=n,r.sibling=c,n.child=r,Ko(null,r),r=n.child,c=t.child.memoizedState,c===null?c=nh(a):(u=c.cachePool,u!==null?(T=dn._currentValue,u=u.parent!==T?{parent:T,pool:T}:u):u=m0(),c={baseLanes:c.baseLanes|a,cachePool:u}),r.memoizedState=c,r.childLanes=ih(t,v,a),n.memoizedState=eh,Ko(t.child,r)):(Ja(n),a=t.child,t=a.sibling,a=ma(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function ah(t,n){return n=Tc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Tc(t,n){return t=$n(22,t,null,n),t.lanes=0,t}function Ac(t,n,a){return Gs(n,t.child,null,a),t=ah(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function g1(t,n,a,r,c,u,v,T){if(a)return n.flags&256?(Ja(n),n.flags&=-257,Ac(t,n,T)):n.memoizedState!==null?($a(),n.child=t.child,n.flags|=128,null):($a(),u=c.fallback,v=n.mode,c=Tc({mode:"visible",children:c.children},v),u=Us(u,v,T,null),u.flags|=2,c.return=n,u.return=n,c.sibling=u,n.child=c,Gs(n,t.child,null,T),c=n.child,c.memoizedState=nh(T),c.childLanes=ih(t,r,T),n.memoizedState=eh,Ko(null,c));if(Ja(n),nd(u)){if(r=u.nextSibling&&u.nextSibling.dataset,r)var B=r.dgst;return r=B,r!==""&&(c=Error(s(419)),c.stack="",c.digest=r,Fo({value:c,source:null,stack:null})),Ac(t,n,T)}if(mn||Ps(t,n,T,!1),r=(T&t.childLanes)!==0,mn||r){if(Qa.current!==null)return Ac(t,n,T);if(r=Ke,r!==null&&(c=Vl(r,T),c!==0&&c!==v.retryLane))throw v.retryLane=c,Ns(t,c),ii(r,t,c),$f;return ed(u)||Xc(),Ac(t,n,T)}return ed(u)?(n.flags|=192,n.child=t.child,null):(t=v.treeContext,Qe=Ri(u.nextSibling),bn=n,be=!0,Xa=null,Ci=!1,t!==null&&c0(n,t),n=ah(n,c.children),n.flags|=134221824,n)}function wg(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),ac(t.return,n,a)}function Rg(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&dc(a)===null&&(n=t),t=t.sibling}return n}function Cc(t,n,a,r,c,u){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:u}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=a,v.tailMode=c,v.treeForkCount=u)}function sh(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function rh(t,n,a){var r=n.pendingProps,c=r.revealOrder,u=r.tail;r=r.children;var v=Nn.current;if(n.flags&128)return Yo(n,v),null;var T=(v&2)!==0;if(T?(v=v&1|2,n.flags|=128):v&=1,Yo(n,v),c==="backwards"&&t!==null?(sh(t),vn(t,n,r,a),sh(t)):vn(t,n,r,a),r=be?zo:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wg(t,a,n);else if(t.tag===19)wg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"backwards":a=Rg(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null,sh(n)),Cc(n,!0,c,null,u,r);break;case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&dc(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Cc(n,!0,a,null,u,r);break;case"together":Cc(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=Rg(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Cc(n,!1,c,a,u,r)}return n.child}function Dg(t,n,a){var r=n.pendingProps;return Ya(n,n.type,r.value),vn(t,n,r.children,a),n.child}function ya(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),is|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ps(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=ma(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ma(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function oh(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&sc(t)))}function _1(t,n,a){switch(n.tag){case 3:L(n,n.stateNode.containerInfo),Ya(n,dn,t.memoizedState.cache),Ls();break;case 27:case 5:J(n);break;case 4:L(n,n.stateNode.containerInfo);break;case 10:Ya(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Uf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return Ja(n),n.flags|=128,null;r=Ps(t,n,a,!1);var c=n.child.childLanes;return r||(a&c)!==0?Cg(t,n,a):(Ja(n),t=ya(t,n,a),t!==null?t.sibling:null)}Ja(n);break;case 19:if(n.flags&128)return rh(t,n,a);if(c=(t.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Ps(t,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return rh(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Yo(n,Nn.current),r)break;return null;case 22:return n.lanes=0,yg(t,n,a,n.pendingProps);case 24:Ya(n,dn,t.memoizedState.cache)}return ya(t,n,a)}function Ng(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!oh(t,a)&&(n.flags&128)===0)return mn=!1,_1(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,be&&(n.flags&1048576)!==0&&l0(n,zo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=Bs(n.elementType),n.type=t,typeof t=="function")pf(t)?(r=ks(t,r),n.tag=1,n=Tg(null,n,t,r,a)):(n.tag=0,n=th(null,n,t,r,a));else{if(t!=null){var c=t.$$typeof;if(c===Z){n.tag=11,n=vg(null,n,t,r,a);break t}else if(c===At){n.tag=14,n=xg(null,n,t,r,a);break t}else if(c===dt){n.tag=10,n.type=t,n=Dg(null,n,a);break t}}throw n=Tt(t)||t,Error(s(306,n,""))}}return n;case 0:return th(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=ks(r,n.pendingProps),Tg(t,n,r,c,a);case 3:t:{if(L(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var u=n.memoizedState;c=u.element,Cf(t,n),jo(n,r,null,a);var v=n.memoizedState;if(r=v.cache,Ya(n,dn,r),r!==u.cache&&yf(n,[dn],a,!0),Xo(),r=v.element,u.isDehydrated)if(u={element:r,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=Ag(t,n,r,a);break t}else if(r!==c){c=Ei(Error(s(424)),n),Fo(c),n=Ag(t,n,r,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Qe=Ri(t.firstChild),bn=n,be=!0,Xa=null,Ci=!0,a=y0(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Ls(),r===c){n=ya(t,n,a);break t}vn(t,n,r,a)}n=n.child}return n;case 26:return Rr(t,n),t===null?(a=nv(n.type,null,n.pendingProps,null))?n.memoizedState=a:be||(n.stateNode=P_(n.type,n.pendingProps,Te.current,n)):n.memoizedState=nv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return J(n),t===null&&be&&(r=n.stateNode=J_(n.type,n.pendingProps,Te.current),bn=n,Ci=!0,c=Qe,os(n.type)?(id=c,Qe=Ri(r.firstChild)):Qe=c),vn(t,n,n.pendingProps.children,a),Rr(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&be&&((c=r=Qe)&&(r=fM(r,n.type,n.pendingProps,Ci),r!==null?(n.stateNode=r,bn=n,Qe=Ri(r.firstChild),Ci=!1,c=!0):c=!1),c||ja(n)),J(n),c=n.type,u=n.pendingProps,v=t!==null?t.memoizedProps:null,r=u.children,Wh(c,u)?r=null:v!==null&&Wh(c,v)&&(n.flags|=32),n.memoizedState!==null&&(c=Pf(t,n,r1,null,null,a),qr._currentValue=c),Rr(t,n),vn(t,n,r,a),n.child;case 6:return t===null&&be&&((t=a=Qe)&&(a=hM(a,n.pendingProps,Ci),a!==null?(n.stateNode=a,bn=n,Qe=null,t=!0):t=!1),t||ja(n)),null;case 13:return Cg(t,n,a);case 4:return L(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=Gs(n,null,r,a):vn(t,n,r,a),n.child;case 11:return vg(t,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,Rr(t,n),vn(t,n,r,a),n.child;case 8:return vn(t,n,n.pendingProps.children,a),n.child;case 12:return vn(t,n,n.pendingProps.children,a),n.child;case 10:return Dg(t,n,a);case 9:return c=n.type._context,r=n.pendingProps.children,Is(n),c=Rn(c),r=r(c),n.flags|=1,vn(t,n,r,a),n.child;case 14:return xg(t,n,n.type,n.pendingProps,a);case 15:return Sg(t,n,n.type,n.pendingProps,a);case 19:return rh(t,n,a);case 31:return m1(t,n,a);case 22:return yg(t,n,a,n.pendingProps);case 24:return Is(n),r=Rn(dn),t===null?(c=Ef(),c===null&&(c=Ke,u=Mf(),c.pooledCache=u,u.refCount++,u!==null&&(c.pooledCacheLanes|=a),c=u),n.memoizedState={parent:r,cache:c},Af(n),Ya(n,dn,c)):((t.lanes&a)!==0&&(Cf(t,n),jo(n,null,null,a),Xo()),c=t.memoizedState,u=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ya(n,dn,r)):(r=u.cache,Ya(n,dn,r),r!==c.cache&&yf(n,[dn],a,!0))),vn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=t===null?18882560:18874368:be&&nc(n),t!==null&&t.memoizedProps.name!==r.name?n.flags|=4194816:Rr(t,n),vn(t,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ma(t){t.flags|=4}function lh(t,n,a,r,c){var u;if((u=(t.mode&32)!==0)&&(u=a===null?rv(n,r):rv(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),u){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(h_())t.flags|=8192;else throw Hs=cc,Tf}else t.flags&=-16777217}function Ug(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!ov(n))if(h_())t.flags|=8192;else throw Hs=cc,Tf}function wc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Cs():536870912,t.lanes|=n,Or|=n)}function Qo(t,n){if(!be)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function Je(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&1206910976,r|=c.flags&1206910976,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function v1(t,n,a){var r=n.pendingProps;switch(_f(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(n),null;case 1:return Je(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),va(dn),b(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Mr(n)?Ma(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,xf())),Je(n),null;case 26:var c=n.type,u=n.memoizedState;return t===null?(Ma(n),u!==null?(Je(n),Ug(n,u)):(Je(n),lh(n,c,null,r,a))):u?u!==t.memoizedState?(Ma(n),Je(n),Ug(n,u)):(Je(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&Ma(n),Je(n),lh(n,c,t,r,a)),null;case 27:if(_t(n),a=Te.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Ma(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Je(n),n.subtreeFlags&=-33554433,null}t=Me.current,Mr(n)?u0(n):(t=J_(c,r,a),n.stateNode=t,Ma(n))}return Je(n),n.subtreeFlags&=-33554433,null;case 5:if(_t(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Ma(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Je(n),n.subtreeFlags&=-33554433,null}if(u=Me.current,Mr(n))u0(n);else{var v=ll(Te.current);switch(u){case 1:u=v.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:u=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":u=v.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":u=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":u=v.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?u.multiple=!0:r.size&&(u.size=r.size);break;default:u=typeof r.is=="string"?v.createElement(c,{is:r.is}):v.createElement(c)}}u[ot]=n,u[nt]=r;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)u.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=u;t:switch(Ln(u,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Ma(n)}}return Je(n),n.subtreeFlags&=-33554433,lh(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&Ma(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=Te.current,Mr(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,c=bn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}t[ot]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||N_(t.nodeValue,a)),t||ja(n,!0)}else t=ll(t).createTextNode(r),t[ot]=n,n.stateNode=t}return Je(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=Mr(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[ot]=n}else Ls(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),t=!1}else a=xf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ui(n),n):(ui(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Je(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Mr(n),r!==null&&r.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[ot]=n}else Ls(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),c=!1}else c=xf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ui(n),n):(ui(n),null)}return ui(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==c&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),wc(n,n.updateQueue),Je(n),null);case 4:return b(),t===null&&kh(n.stateNode.containerInfo),n.flags|=67108864,Je(n),null;case 10:return va(n.type),Je(n),null;case 19:if(Lf(n),r=n.memoizedState,r===null)return Je(n),null;if(c=(n.flags&128)!==0,u=r.rendering,u===null)if(c)Qo(r,!1);else{if(ln!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(u=dc(t),u!==null){for(n.flags|=128,Qo(r,!1),t=u.updateQueue,n.updateQueue=t,wc(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)s0(a,t),a=a.sibling;return Yo(n,Nn.current&1|2),be&&ga(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&q()>Hc&&(n.flags|=128,c=!0,Qo(r,!1),n.lanes=4194304)}else{if(!c)if(t=dc(u),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,wc(n,t),Qo(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!u.alternate&&!be)return Je(n),null}else 2*q()-r.renderingStartTime>Hc&&a!==536870912&&(n.flags|=128,c=!0,Qo(r,!1),n.lanes=4194304);r.isBackwards?(u.sibling=n.child,n.child=u):(t=r.last,t!==null?t.sibling=u:n.child=u,r.last=u)}if(r.tail!==null){t=r.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=q(),t.sibling=null,u=Nn.current,u=c?u&1|2:u&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||be?Yo(n,u):(a=u,V(Dn,n),V(Nn,a),zn===null&&(zn=n)),be&&ga(n,r.treeForkCount),t}return Je(n),null;case 22:case 23:return ui(n),Nf(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Je(n),n.subtreeFlags&6&&(n.flags|=8192)):Je(n),a=n.updateQueue,a!==null&&wc(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&re(Fs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),va(dn),Je(n),null;case 25:return null;case 30:return n.flags|=33554432,Je(n),null}throw Error(s(156,n.tag))}function x1(t,n){switch(_f(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return va(dn),b(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return _t(n),null;case 31:if(n.memoizedState!==null){if(ui(n),n.alternate===null)throw Error(s(340));Ls()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ui(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ls()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Lf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return b(),null;case 10:return va(n.type),null;case 22:case 23:return ui(n),Nf(),t!==null&&re(Fs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return va(dn),null;case 25:return null;default:return null}}function Lg(t,n){switch(_f(n),n.tag){case 3:va(dn),b();break;case 26:case 27:case 5:_t(n);break;case 4:b();break;case 31:n.memoizedState!==null&&ui(n);break;case 13:ui(n);break;case 19:Lf(n);break;case 10:va(n.type);break;case 22:case 23:ui(n),Nf(),t!==null&&re(Fs);break;case 24:va(dn)}}function Jo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&t)===t){r=void 0;var u=a.create,v=a.inst;r=u(),v.destroy=r}a=a.next}while(a!==c)}}catch(T){ke(n,n.return,T)}}function ts(t,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var u=c.next;r=u;do{if((r.tag&t)===t){var v=r.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,c=n;var B=a,tt=T;try{tt()}catch(ut){ke(c,B,ut)}}}r=r.next}while(r!==u)}}catch(ut){ke(n,n.return,ut)}}function Og(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{b0(n,a)}catch(r){ke(t,t.return,r)}}}function Pg(t,n,a){a.props=ks(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){ke(t,n,r)}}function qi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var c=t.stateNode,u=da(t.memoizedProps,c);(c.ref===null||c.ref.name!==u)&&(c.ref=V_(u)),r=c.ref;break;case 7:if(t.stateNode===null){var v=new mi(t);m(t.child,!1,cM,v,void 0,void 0),t.stateNode=v}r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(T){ke(t,n,T)}}function Un(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){ke(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){ke(t,n,c)}else a.current=null}function Rc(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)W_(t.stateNode,n[a])}function Ig(t){for(var n=t.return;n!==null&&(uh(n)&&W_(t.stateNode,n.stateNode),!ch(n));)n=n.return}function $o(t){for(var n=t.return;n!==null&&(uh(n)&&uM(t.stateNode,n.stateNode),!ch(n));)n=n.return}function ch(t){return t.tag===5||t.tag===3||t.tag===27}function uh(t){return t&&t.tag===7&&t.stateNode!==null}function fh(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){ke(t,t.return,c)}}function hh(t,n,a){try{var r=t.stateNode;j1(r,t.type,a,n),r[nt]=n}catch(c){ke(t,t.return,c)}}function zg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&os(t.type)||t.tag===4}function dh(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||zg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&os(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ph(t,n,a,r){var c=t.tag;if(c===5||c===6)c=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(c,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(c),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Xi)),Rc(t,r),ce=!0;else if(c!==4&&(c===27&&(Rc(t,r),r=null,os(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(ph(t,n,a,r),t=t.sibling;t!==null;)ph(t,n,a,r),t=t.sibling}function Dc(t,n,a,r){var c=t.tag;if(c===5||c===6)c=t.stateNode,n?a.insertBefore(c,n):a.appendChild(c),Rc(t,r),ce=!0;else if(c!==4&&(c===27&&(Rc(t,r),r=null,os(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(Dc(t,n,a,r),t=t.sibling;t!==null;)Dc(t,n,a,r),t=t.sibling}function Fg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Ln(n,r,a),n[ot]=t,n[nt]=a}catch(u){ke(t,t.return,u)}}var Nc=!1,fi=null;function Bg(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Nc=!0)}var Wi=null;function Hg(){var t=Wi;return Wi=null,t}var ti=0;function Dr(t,n,a,r,c){return ti=0,Gg(t.child,n,a,r,c)}function Gg(t,n,a,r,c){for(var u=!1;t!==null;){if(t.tag===5){var v=t.stateNode;if(r!==null){var T=Qh(v);r.push(T),T.view&&(u=!0)}else u||Qh(v).view&&(u=!0);Nc=!0,H_(v,ti===0?n:n+"_"+ti,a),ti++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&c||Gg(t.child,n,a,r,c)&&(u=!0));t=t.sibling}return u}function Zi(t,n){for(;t!==null;)t.tag===5?G_(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Zi(t.child,n)),t=t.sibling}function Uc(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Uc(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=pa(n.default,n.share),n!=="none"&&(Dr(t,a,n,null,!1)||Zi(t.child,!1))}t=t.sibling}}function mh(t,n){if(t.tag===30){var a=t.stateNode,r=t.memoizedProps,c=da(r,a),u=pa(r.default,a.paired?r.share:r.enter);u!=="none"?Dr(t,c,u,null,!1)?(Uc(t),a.paired||n||Fr(t,r.onEnter)):Zi(t.child,!1):Uc(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)mh(t,n),t=t.sibling;else Uc(t)}function gh(t){if(fi!==null&&fi.size!==0){var n=fi;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var c=n.get(r);if(c!==void 0){var u=pa(a.default,a.share);if(u!=="none"&&(Dr(t,r,u,null,!1)?(u=t.stateNode,c.paired=u,u.paired=c,Fr(t,a.onShare)):Zi(t.child,!1)),n.delete(r),n.size===0)break}}}gh(t)}t=t.sibling}}}function _h(t){if(t.tag===30){var n=t.memoizedProps,a=da(n,t.stateNode),r=fi!==null?fi.get(a):void 0,c=pa(n.default,r!==void 0?n.share:n.exit);c!=="none"&&(Dr(t,a,c,null,!1)?r!==void 0?(c=t.stateNode,r.paired=c,c.paired=r,fi.delete(a),Fr(t,n.onShare)):Fr(t,n.onExit):Zi(t.child,!1)),fi!==null&&gh(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)_h(t),t=t.sibling;else fi!==null&&gh(t)}function Vg(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=da(n,t.stateNode);n=pa(n.default,n.update),t.flags&=-5,n!=="none"&&Dr(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&Vg(t);t=t.sibling}}function vh(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Zi(t.child,!1))}vh(t)}t=t.sibling}}function Lc(t){if(t.tag===30)t.stateNode.paired=null,Zi(t.child,!1),vh(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Lc(t),t=t.sibling;else vh(t)}function kg(t){for(t=t.child;t!==null;)t.tag===30?Zi(t.child,!1):(t.subtreeFlags&33554432)!==0&&kg(t),t=t.sibling}function xh(t,n,a,r,c,u,v){for(var T=!1;n!==null;){if(n.tag===5){var B=n.stateNode;if(u!==null&&ti<u.length){var tt=u[ti],ut=Qh(B);(tt.view||ut.view)&&(T=!0);var xt;if(xt=(t.flags&4)===0)if(ut.clip)xt=!0;else{xt=tt.rect;var Q=ut.rect;xt=xt.y!==Q.y||xt.x!==Q.x||xt.height!==Q.height||xt.width!==Q.width}xt&&(t.flags|=4),ut.abs?ut=!tt.abs:(tt=tt.rect,ut=ut.rect,ut=tt.height!==ut.height||tt.width!==ut.width),ut&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&H_(B,ti===0?a:a+"_"+ti,c),T&&(t.flags&4)!==0||(Wi===null&&(Wi=[]),Wi.push(B,ti===0?r:r+"_"+ti,n.memoizedProps)),ti++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&v?t.flags|=n.flags&32:xh(t,n.child,a,r,c,u,v)&&(T=!0));n=n.sibling}return T}function Xg(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,r=t.stateNode,c=da(a,r),u=pa(a.default,a.update),v;v=t.memoizedState,t.memoizedState=null,r=t;var T=t.child;ti=0,c=xh(r,T,c,c,u,v,!1),(t.flags&4)!==0&&c&&Fr(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&Xg(t);t=t.sibling}}var En=!1,Be=!1,Ki=!1,Sh=!1,jg=typeof WeakSet=="function"?WeakSet:Set,Tn=null,Qi=!1,tl=!1,Oc=!1,yh=!1;function S1(t,n,a){if(t=t.containerInfo,Yh=Wr,t=Zm(t),of(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var c=r.getSelection&&r.getSelection();if(c&&c.rangeCount!==0){r=c.anchorNode;var u=c.anchorOffset,v=c.focusNode;c=c.focusOffset;try{r.nodeType,v.nodeType}catch{r=null;break t}var T=0,B=-1,tt=-1,ut=0,xt=0,Q=t,lt=null;e:for(;;){for(var zt;Q!==r||u!==0&&Q.nodeType!==3||(B=T+u),Q!==v||c!==0&&Q.nodeType!==3||(tt=T+c),Q.nodeType===3&&(T+=Q.nodeValue.length),(zt=Q.firstChild)!==null;)lt=Q,Q=zt;for(;;){if(Q===t)break e;if(lt===r&&++ut===u&&(B=T),lt===v&&++xt===c&&(tt=T),(zt=Q.nextSibling)!==null)break;Q=lt,lt=Q.parentNode}Q=zt}r=B===-1||tt===-1?null:{start:B,end:tt}}else r=null}r=r||{start:0,end:0}}else r=null;for(qh={focusedElem:t,selectionRange:r},Wr=!1,a=(a&335544064)===a,Tn=n,n=a?9270:1024;Tn!==null;){if(t=Tn,a&&(r=t.deletions,r!==null))for(u=0;u<r.length;u++)a&&_h(r[u]);if(t.alternate===null&&(t.flags&2)!==0)a&&Bg(t),Pc(a);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&_h(r),Pc(a);continue}else if(r!==null&&r.memoizedState!==null){a&&Bg(t),Pc(a);continue}}r=t.child,(t.subtreeFlags&n)!==0&&r!==null?(r.return=t,Tn=r):(a&&Vg(t),Pc(a))}}fi=null}function Pc(t){for(;Tn!==null;){var n=Tn,a=t,r=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&r!==null){a=void 0,c=r.memoizedProps,r=r.memoizedState;var u=n.stateNode;try{var v=ks(n.type,c);a=u.getSnapshotBeforeUpdate(v,r),u.__reactInternalSnapshotBeforeUpdate=a}catch(T){ke(n,n.return,T)}}break;case 3:if((c&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)td(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":td(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=da(r.memoizedProps,r.stateNode),c=n.memoizedProps,c=pa(c.default,c.update),c!=="none"&&Dr(r,a,c,r.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,Tn=r;break}Tn=n.return}}function Yg(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Ji(t,a),r&4&&Jo(5,a);break;case 1:if(Ji(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){ke(a,a.return,v)}else{var c=ks(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){ke(a,a.return,v)}}r&64&&Og(a),r&512&&qi(a,a.return);break;case 3:if(Ji(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{b0(t,n)}catch(v){ke(a,a.return,v)}}break;case 27:n===null&&r&4&&Fg(a);case 26:case 5:Ji(t,a),n===null&&r&4&&fh(a),r&512&&qi(a,a.return);break;case 12:Ji(t,a);break;case 31:Ji(t,a),r&4&&Kg(t,a);break;case 13:Ji(t,a),r&4&&Qg(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=U1.bind(null,a),dM(t,a))));break;case 22:if(r=a.memoizedState!==null||En,!r){var u=n!==null&&n.memoizedState!==null||Be;n=En,c=Be,En=r,(Be=u)&&!c?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Ii(t,a,r)):Ji(t,a),En=n,Be=c}break;case 30:Ji(t,a),r&512&&qi(a,a.return);break;case 7:r&512&&qi(a,a.return);default:Ji(t,a)}}function Mh(t,n){for(t=t.child;t!==null;)qg(t,n),t=t.sibling}function qg(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var c=t.stateNode,u=t.memoizedProps.style,v=u!=null&&u.hasOwnProperty("display")?u.display:null;c.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(B){ke(t,t.return,B)}bh(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,ce=!0}catch(B){ke(t,t.return,B)}break;case 18:try{var T=t.stateNode;n?B_(T,!0):B_(t.stateNode,!1)}catch(B){ke(t,t.return,B)}break;case 22:case 23:t.memoizedState===null&&Mh(t,n);break;default:Mh(t,n)}}function bh(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,r=n;switch(a.tag){case 4:qg(a,r);break t;case 22:a.memoizedState===null&&bh(a,r);break t;default:bh(a,r)}}t=t.sibling}}function Wg(t){var n=t.alternate;n!==null&&(t.alternate=null,Wg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&me(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var en=null,ei=!1;function Oi(t,n,a){for(a=a.child;a!==null;)Zg(t,n,a),a=a.sibling}function Zg(t,n,a){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(Ne,a)}catch{}switch(a.tag){case 26:Be||Un(a,n),Oi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Be&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Be||Un(a,n),$o(a);var r=en,c=ei;os(a.type)&&(en=a.stateNode,ei=!1),Oi(t,n,a),$_(a.stateNode,a.type,a.memoizedProps),en=r,ei=c;break;case 5:Be||Un(a,n),$o(a);case 6:if(a.tag===6&&$o(a),r=en,c=ei,en=null,Oi(t,n,a),en=r,ei=c,en!==null)if(ei)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(a.stateNode),ce=!0}catch(u){ke(a,n,u)}else try{en.removeChild(a.stateNode),ce=!0}catch(u){ke(a,n,u)}break;case 18:en!==null&&(ei?(t=en,F_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Zr(t)):F_(en,a.stateNode));break;case 4:r=en,c=ei,en=a.stateNode.containerInfo,ei=!0,Oi(t,n,a),en=r,ei=c;break;case 0:case 11:case 14:case 15:ts(2,a,n),Be||ts(4,a,n),Oi(t,n,a);break;case 1:Be||(Un(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Pg(a,n,r)),Oi(t,n,a);break;case 21:Oi(t,n,a);break;case 22:Be=(r=Be)||a.memoizedState!==null,Oi(t,n,a),Be=r;break;case 30:Un(a,n),Oi(t,n,a);break;case 7:Be||Un(a,n),Oi(t,n,a);break;default:Oi(t,n,a)}}function Kg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Zr(t)}catch(a){ke(n,n.return,a)}}}function Qg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Zr(t)}catch(a){ke(n,n.return,a)}}function y1(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new jg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new jg),n;default:throw Error(s(435,t.tag))}}function Ic(t,n){var a=y1(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=L1.bind(null,t,r);r.then(c,c)}})}function Yn(t,n,a){var r=n.deletions;if(r!==null)for(var c=0;c<r.length;c++){var u=r[c],v=t,T=n,B=T;t:for(;B!==null;){switch(B.tag){case 27:if(os(B.type)){en=B.stateNode,ei=!1;break t}break;case 5:en=B.stateNode,ei=!1;break t;case 3:case 4:en=B.stateNode.containerInfo,ei=!0;break t}B=B.return}if(en===null)throw Error(s(160));Zg(v,T,u),en=null,ei=!1,v=u.alternate,v!==null&&(v.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Jg(n,t,a),n=n.sibling}var Pi=null;function Jg(t,n,a){var r=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(c&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var u=0;u<r.length;u++){var v=r[u];v.ref.impl=v.nextImpl}Yn(n,t,a),qn(t),c&4&&(ts(3,t,t.return),Jo(3,t),ts(5,t,t.return));break;case 1:Yn(n,t,a),qn(t),c&512&&(Be||r===null||Un(r,r.return)),c&64&&En&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(u=Pi,Yn(n,t,a),qn(t),c&512&&(Be||r===null||Un(r,r.return)),c&4)if(c=r!==null?r.memoizedState:null,a=t.memoizedState,r===null)if(a===null)if(t.stateNode===null)if(En)t.stateNode=P_(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,c=u.ownerDocument||u;e:switch(n){case"title":r=c.getElementsByTagName("title")[0],(!r||r[ae]||r[ot]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=c.createElement(n),c.head.insertBefore(r,c.querySelector("head > title"))),Ln(r,n,a),r[ot]=t,Vt(r),n=r;break t;case"link":if(u=sv("link","href",c).get(n+(a.href||""))){for(v=0;v<u.length;v++)if(r=u[v],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(v,1);break e}}r=c.createElement(n),Ln(r,n,a),c.head.appendChild(r);break;case"meta":if(u=sv("meta","content",c).get(n+(a.content||""))){for(v=0;v<u.length;v++)if(r=u[v],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(v,1);break e}}r=c.createElement(n),Ln(r,n,a),c.head.appendChild(r);break;default:throw Error(s(468,n))}r[ot]=t,Vt(r),n=r}t.stateNode=n}else En||od(u,t.type,t.stateNode);else t.stateNode=av(u,a,t.memoizedProps);else c!==a?(c===null?(n=r.stateNode,n===null||Be||n.parentNode.removeChild(n)):c.count--,a===null?En||od(u,t.type,t.stateNode):av(u,a,t.memoizedProps)):a===null&&t.stateNode!==null&&hh(t,t.memoizedProps,r.memoizedProps);break;case 27:Yn(n,t,a),qn(t),c&512&&(Be||r===null||Un(r,r.return)),r!==null&&c&4&&hh(t,t.memoizedProps,r.memoizedProps);break;case 5:if(u=Ki,Ki=!1,Yn(n,t,a),Ki=u,qn(t),c&512&&(Be||r===null||Un(r,r.return)),t.flags&32){n=t.stateNode;try{hr(n,""),ce=!0}catch(ut){ke(t,t.return,ut)}}c&4&&t.stateNode!=null&&(n=t.memoizedProps,hh(t,n,r!==null?r.memoizedProps:n)),c&1024&&(Sh=!0);break;case 6:if(Yn(n,t,a),qn(t),c&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,ce=!0}catch(ut){ke(t,t.return,ut)}}break;case 3:if(ce=!1,Qc=null,u=Pi,Pi=cl(n.containerInfo),Yn(n,t,a),Pi=u,qn(t),c&4&&r!==null&&r.memoizedState.isDehydrated)try{Zr(n.containerInfo)}catch(ut){ke(t,t.return,ut)}Sh&&(Sh=!1,$g(t)),ce=!1;break;case 4:c=Ki,Ki=En,r=wn(),u=Pi,Pi=cl(t.stateNode.containerInfo),Yn(n,t,a),qn(t),Pi=u,ce&&tl&&(Oc=!0),ce=r,Ki=c;break;case 12:Yn(n,t,a),qn(t);break;case 31:Yn(n,t,a),qn(t),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Ic(t,n)));break;case 13:Yn(n,t,a),qn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Bc=q()),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Ic(t,n)));break;case 22:u=t.memoizedState!==null,v=r!==null&&r.memoizedState!==null;var T=En,B=Be,tt=Ki;En=T||u,Ki=tt||u,Be=B||v,Yn(n,t,a),Be=B,Ki=tt,En=T,qn(t),c&8192&&(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,!u||r===null||v||En||Be||(n=v||Be,a=En,r=Be,En=u||En,Be=n,es(t,2),En=a,Be=r),!u&&Ki||Mh(t,u)),c&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Ic(t,a))));break;case 19:Yn(n,t,a),qn(t),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Ic(t,n)));break;case 30:c&512&&(Be||r===null||Un(r,r.return)),c=wn(),u=tl,v=(a&335544064)===a,T=t.memoizedProps,tl=v&&pa(T.default,T.update)!=="none",Yn(n,t,a),qn(t),v&&r!==null&&ce&&(t.flags|=4),tl=u,ce=c;break;case 21:break;case 7:c&512&&(Be||r===null||Un(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:Yn(n,t,a),qn(t)}}function qn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(zg(r)){a=r;break}r=r.return}r=null;for(var c=t.return;c!==null;){if(uh(c)){var u=c.stateNode;r===null?r=[u]:r.push(u)}if(ch(c))break;c=c.return}var v=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var T=a.stateNode,B=dh(t);Dc(t,B,T,v);break;case 5:var tt=a.stateNode;a.flags&32&&(hr(tt,""),a.flags&=-33);var ut=dh(t);Dc(t,ut,tt,v);break;case 3:case 4:var xt=a.stateNode.containerInfo,Q=dh(t);ph(t,Q,xt,v);break;default:throw Error(s(161))}}catch(lt){ke(t,t.return,lt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function $g(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;$g(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Wr=!0,n.reset(),Wr=!1),t=t.sibling}}function Nr(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)t_(n,t),n=n.sibling;else Xg(n)}function t_(t,n){var a=t.alternate;if(a===null)mh(t,!1);else switch(t.tag){case 3:if(yh=Qi=!1,Hg(),Nr(n,t),!Qi&&!Oc){if(t=Wi,t!==null)for(var r=0;r<t.length;r+=3){a=t[r];var c=t[r+1];G_(a,t[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),yh=!0}Wi=null;break;case 5:Nr(n,t);break;case 4:r=Qi,Qi=!1,Nr(n,t),Qi&&(Oc=!0),Qi=r;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?mh(t,!1):Nr(n,t));break;case 30:r=Qi,c=Hg(),Qi=!1,Nr(n,t),Qi&&(t.flags|=4);var u=t.memoizedProps,v=t.stateNode;n=da(u,v),v=da(a.memoizedProps,v);var T=pa(u.default,u.update);T==="none"?n=!1:(u=a.memoizedState,a.memoizedState=null,a=t.child,ti=0,n=xh(t,a,n,v,T,u,!0),ti!==(u===null?0:u.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Fr(t,t.memoizedProps.onUpdate),Wi=c):c!==null&&(c.push.apply(c,Wi),Wi=c),Qi=(t.flags&32)!==0?!0:r;break;default:Nr(n,t)}}function Ji(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Yg(t,n.alternate,n),n=n.sibling}function es(t,n){for(t=t.child;t!==null;){var a=t,r=n;switch(a.tag){case 0:case 11:case 14:case 15:ts(4,a,a.return),es(a,r);break;case 1:Un(a,a.return);var c=a.stateNode;typeof c.componentWillUnmount=="function"&&Pg(a,a.return,c),es(a,r);break;case 27:(r&2)!==0&&$_(a.stateNode,a.type,a.memoizedProps);case 5:Un(a,a.return),a.tag!==5&&a.tag!==27||$o(a),es(a,r);break;case 6:$o(a);break;case 26:Un(a,a.return),c=a.stateNode,a.memoizedState!==null||c===null||Be||c.parentNode.removeChild(c),es(a,r);break;case 22:a.memoizedState===null&&es(a,r);break;case 30:Un(a,a.return),es(a,r);break;case 7:Un(a,a.return);default:es(a,r)}t=t.sibling}}function Ii(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,c=t,u=n,v=u.flags,T=(a&1)!==0;switch(u.tag){case 0:case 11:case 15:Ii(c,u,a),Jo(4,u);break;case 1:if(Ii(c,u,a),r=u,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(ut){ke(r,r.return,ut)}if(r=u,c=r.updateQueue,c!==null){var B=r.stateNode;try{var tt=c.shared.hiddenCallbacks;if(tt!==null)for(c.shared.hiddenCallbacks=null,c=0;c<tt.length;c++)M0(tt[c],B)}catch(ut){ke(r,r.return,ut)}}T&&v&64&&Og(u),qi(u,u.return);break;case 27:(a&2)!==0&&Fg(u);case 5:u.tag!==5&&u.tag!==27||Ig(u),Ii(c,u,a),T&&r===null&&v&4&&fh(u),qi(u,u.return);break;case 6:Ig(u);break;case 26:B=u.stateNode,u.memoizedState!==null||B===null||En||od(cl(B.ownerDocument),u.type,B),Ii(c,u,a),T&&r===null&&v&4&&fh(u),qi(u,u.return);break;case 12:Ii(c,u,a);break;case 31:Ii(c,u,a),T&&v&4&&Kg(c,u);break;case 13:Ii(c,u,a),T&&v&4&&Qg(c,u);break;case 22:u.memoizedState===null&&Ii(c,u,a),qi(u,u.return);break;case 30:Ii(c,u,a),qi(u,u.return);break;case 7:qi(u,u.return);default:Ii(c,u,a)}n=n.sibling}}function Eh(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Bo(a))}function Th(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Bo(t))}function wi(t,n,a,r){var c=(a&335544064)===a;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)e_(t,n,a,r),n=n.sibling;else c&&kg(n)}function e_(t,n,a,r){var c=(a&335544064)===a;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Lc(n);var u=n.flags;switch(n.tag){case 0:case 11:case 15:wi(t,n,a,r),u&2048&&Jo(9,n);break;case 1:wi(t,n,a,r);break;case 3:wi(t,n,a,r),c&&yh&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),u&2048&&(u=null,n.alternate!==null&&(u=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==u&&(n.refCount++,u!=null&&Bo(u)));break;case 12:if(u&2048){wi(t,n,a,r),u=n.stateNode;try{var v=n.memoizedProps,T=v.id,B=v.onPostCommit;typeof B=="function"&&B(T,n.alternate===null?"mount":"update",u.passiveEffectDuration,-0)}catch(tt){ke(n,n.return,tt)}}else wi(t,n,a,r);break;case 31:wi(t,n,a,r);break;case 13:wi(t,n,a,r);break;case 23:break;case 22:v=n.stateNode,T=n.alternate,n.memoizedState!==null?(c&&T!==null&&T.memoizedState===null&&Lc(T),v._visibility&2?wi(t,n,a,r):el(t,n)):(c&&T!==null&&T.memoizedState!==null&&Lc(n),v._visibility&2?wi(t,n,a,r):(v._visibility|=2,Ur(t,n,a,r,(n.subtreeFlags&10256)!==0||!1))),u&2048&&Eh(T,n);break;case 24:wi(t,n,a,r),u&2048&&Th(n.alternate,n);break;case 30:c&&(u=n.alternate,u!==null&&(Zi(u.child,!0),Zi(n.child,!0))),wi(t,n,a,r);break;default:wi(t,n,a,r)}}function Ur(t,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var u=t,v=n,T=a,B=r,tt=v.flags;switch(v.tag){case 0:case 11:case 15:Ur(u,v,T,B,c),Jo(8,v);break;case 23:break;case 22:var ut=v.stateNode;v.memoizedState!==null?ut._visibility&2?Ur(u,v,T,B,c):el(u,v):(ut._visibility|=2,Ur(u,v,T,B,c)),c&&tt&2048&&Eh(v.alternate,v);break;case 24:Ur(u,v,T,B,c),c&&tt&2048&&Th(v.alternate,v);break;default:Ur(u,v,T,B,c)}n=n.sibling}}function el(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,c=r.flags;switch(r.tag){case 22:el(a,r),c&2048&&Eh(r.alternate,r);break;case 24:el(a,r),c&2048&&Th(r.alternate,r);break;default:el(a,r)}n=n.sibling}}var Xs=8192;function js(t,n,a){if(t.subtreeFlags&Xs)for(t=t.child;t!==null;)n_(t,n,a),t=t.sibling}function n_(t,n,a){switch(t.tag){case 26:js(t,n,a),t.flags&Xs&&(t.memoizedState!==null?CM(a,Pi,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&cv(a,t)));break;case 5:js(t,n,a),t.flags&Xs&&(t=t.stateNode,(n&335544128)===n&&cv(a,t));break;case 3:case 4:var r=Pi;Pi=cl(t.stateNode.containerInfo),js(t,n,a),Pi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Xs,Xs=16777216,js(t,n,a),Xs=r):js(t,n,a));break;case 30:if((t.flags&Xs)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var c=t.stateNode;c.paired=null,fi===null&&(fi=new Map),fi.set(r,c)}js(t,n,a);break;default:js(t,n,a)}}function i_(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function nl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Tn=r,s_(r,t)}i_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)a_(t),t=t.sibling}function a_(t){switch(t.tag){case 0:case 11:case 15:nl(t),t.flags&2048&&ts(9,t,t.return);break;case 3:nl(t);break;case 12:nl(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,zc(t)):nl(t);break;default:nl(t)}}function zc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Tn=r,s_(r,t)}i_(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ts(8,n,n.return),zc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,zc(n));break;default:zc(n)}t=t.sibling}}function s_(t,n){for(;Tn!==null;){var a=Tn;switch(a.tag){case 0:case 11:case 15:ts(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Bo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Tn=r;else t:for(a=t;Tn!==null;){r=Tn;var c=r.sibling,u=r.return;if(Wg(r),r===a){Tn=null;break t}if(c!==null){c.return=u,Tn=c;break t}Tn=u}}}var M1={getCacheForType:function(t){var n=Rn(dn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Rn(dn).controller.signal}},b1=typeof WeakMap=="function"?WeakMap:Map,Fe=0,Ke=null,Ae=null,Re=0,Ve=0,hi=null,ns=!1,Lr=!1,Ah=!1,ba=0,ln=0,is=0,Ys=0,Fc=0,di=0,Or=0,il=null,ni=null,Ch=!1,Bc=0,r_=0,Hc=1/0,Gc=null,as=null,an=0,zi=null,qs=null,$i=0,wh=0,Rh=null,o_=null,Pr=null,Ir=null,zr=null,al=0,Vc=null;function pi(){return(Fe&2)!==0&&Re!==0?Re&-Re:St.T!==null?Bh():C()}function l_(){if(di===0)if((Re&536870912)===0||be){var t=Es;Es<<=1,(Es&3932160)===0&&(Es=262144),di=t}else di=536870912;return t=Dn.current,t!==null&&(t.flags|=32),di}function Fr(t,n){if(n!=null){var a=t.stateNode,r=a.ref;r===null&&(r=a.ref=V_(da(t.memoizedProps,a))),Ir===null&&(Ir=[]),Ir.push(n.bind(null,r))}}function ii(t,n,a){(t===Ke&&(Ve===2||Ve===9)||t.cancelPendingCommit!==null)&&(Br(t,0),ss(t,Re,di,!1)),Ba(t,a),((Fe&2)===0||t!==Ke)&&(t===Ke&&((Fe&2)===0&&(Ys|=a),ln===4&&ss(t,Re,di,!1)),ta(t))}function c_(t,n,a){if((Fe&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Fa(t,n),c=r?A1(t,n):Nh(t,n,!0),u=r;do{if(c===0){Lr&&!r&&ss(t,n,0,!1);break}else{if(a=t.current.alternate,u&&!E1(a)){c=Nh(t,n,!1),u=!1;continue}if(c===2){if(u=n,t.errorRecoveryDisabledLanes&u)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var T=t;c=il;var B=T.current.memoizedState.isDehydrated;if(B&&(Br(T,v).flags|=256),v=Nh(T,v,!1),v!==2&&v!==6){if(Ah&&!B){T.errorRecoveryDisabledLanes|=u,Ys|=u,c=4;break t}u=ni,ni=c,u!==null&&(ni===null?ni=u:ni.push.apply(ni,u))}c=v}if(u=!1,c!==2)continue}}if(c===1){Br(t,0),ss(t,n,0,!0);break}t:{switch(r=t,u=c,u){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:ss(r,n,di,!ns);break t;case 2:ni=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Bc+300-q(),10<c)){if(ss(r,n,di,!ns),Ts(r,0,!0)!==0)break t;$i=n,r.timeoutHandle=Kh(u_.bind(null,r,a,ni,Gc,Ch,n,di,Ys,Or,ns,u,"Throttled",-0,0),c);break t}u_(r,a,ni,Gc,Ch,n,di,Ys,Or,ns,u,null,-0,0)}}break}while(!0);ta(t)}function u_(t,n,a,r,c,u,v,T,B,tt,ut,xt,Q,lt){t.timeoutHandle=-1;var zt=n.subtreeFlags,Qt=(u&335544064)===u;if(xt=null,(Qt||zt&8192||(zt&16785408)===16785408)&&(xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xi},fi=null,n_(n,u,xt),Qt&&(zt=xt,Qt=t.containerInfo,Qt=(Qt.nodeType===9?Qt:Qt.ownerDocument).__reactViewTransition,Qt!=null&&(zt.count++,zt.waitingForViewTransition=!0,zt=hl.bind(zt),Qt.finished.then(zt,zt))),zt=(u&62914560)===u?Bc-q():(u&4194048)===u?r_-q():0,zt=wM(xt,zt),zt!==null)){$i=u,t.cancelPendingCommit=zt(v_.bind(null,t,n,u,a,r,c,v,T,B,tt,ut,xt,null,Q,lt)),ss(t,u,v,!tt);return}v_(t,n,u,a,r,c,v,T,B,tt,ut,xt)}function E1(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],u=c.getSnapshot;c=c.value;try{if(!ci(u(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ss(t,n,a,r){n=As(t,n),n&=~Fc,n&=~Ys,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var c=n;0<c;){var u=31-kn(c),v=1<<u;r[u]=-1,c&=~v}a!==0&&Hl(t,a,n)}function kc(){return(Fe&6)===0?(sl(0),!1):!0}function Dh(){if(Ae!==null){if(Ve===0)var t=Ae.return;else t=Ae,_a=Os=null,Ff(t),Tr=null,Vo=0,t=Ae;for(;t!==null;)Lg(t.alternate,t),t=t.return;Ae=null}}function Br(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,W1(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),$i=0,Dh(),Ke=t,Ae=a=ma(t.current,null),Re=n,Ve=0,hi=null,ns=!1,Lr=Fa(t,n),Ah=!1,Or=di=Fc=Ys=is=ln=0,ni=il=null,Ch=!1,ba=As(t,n),Ql(),a}function f_(t,n){ge=null,St.H=Mc,n===Er||n===lc?(n=v0(),Ve=3):n===Tf?(n=v0(),Ve=4):Ve=n===$f?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,hi=n,Ae===null&&(ln=1,bc(t,Ei(n,t.current)))}function h_(){var t=Dn.current;return t===null?!0:(Re&4194048)===Re?zn===null:(Re&62914560)===Re||(Re&536870912)!==0?t===zn:!1}function d_(){var t=St.H;return St.H=Mc,t===null?Mc:t}function p_(){var t=St.A;return St.A=M1,t}function Xc(){ln=4,ns||(Re&4194048)!==Re&&Dn.current!==null||(Lr=!0),(is&134217727)===0&&(Ys&134217727)===0||Ke===null||ss(Ke,Re,di,!1)}function Nh(t,n,a){var r=Fe;Fe|=2;var c=d_(),u=p_();(Ke!==t||Re!==n)&&(Gc=null,Br(t,n)),n=!1;var v=ln;t:do try{if(Ve!==0&&Ae!==null){var T=Ae,B=hi;switch(Ve){case 8:Dh(),v=6;break t;case 3:case 2:case 9:case 6:Dn.current===null&&(n=!0);var tt=Ve;if(Ve=0,hi=null,Hr(t,T,B,tt),a&&Lr){v=0;break t}break;default:tt=Ve,Ve=0,hi=null,Hr(t,T,B,tt)}}T1(),v=ln;break}catch(ut){f_(t,ut)}while(!0);return n&&t.shellSuspendCounter++,_a=Os=null,Fe=r,St.H=c,St.A=u,Ae===null&&(Ke=null,Re=0,Ql()),v}function T1(){for(;Ae!==null;)m_(Ae)}function A1(t,n){var a=Fe;Fe|=2;var r=d_(),c=p_();Ke!==t||Re!==n?(Gc=null,Hc=q()+500,Br(t,n)):Lr=Fa(t,n);t:do try{if(Ve!==0&&Ae!==null){n=Ae;var u=hi;e:switch(Ve){case 1:Ve=0,hi=null,Hr(t,n,u,1);break;case 2:case 9:if(g0(u)){Ve=0,hi=null,g_(n);break}n=function(){Ve!==2&&Ve!==9||Ke!==t||(Ve=7),ta(t)},u.then(n,n);break t;case 3:Ve=7;break t;case 4:Ve=5;break t;case 7:g0(u)?(Ve=0,hi=null,g_(n)):(Ve=0,hi=null,Hr(t,n,u,7));break;case 5:var v=null;switch(Ae.tag){case 26:v=Ae.memoizedState;case 5:case 27:var T=Ae;if(v?ov(v):T.stateNode.complete){Ve=0,hi=null;var B=T.sibling;if(B!==null)Ae=B;else{var tt=T.return;tt!==null?(Ae=tt,jc(tt)):Ae=null}break e}}Ve=0,hi=null,Hr(t,n,u,5);break;case 6:Ve=0,hi=null,Hr(t,n,u,6);break;case 8:Dh(),ln=6;break t;default:throw Error(s(462))}}C1();break}catch(ut){f_(t,ut)}while(!0);return _a=Os=null,St.H=r,St.A=c,Fe=a,Ae!==null?0:(Ke=null,Re=0,Ql(),ln)}function C1(){for(;Ae!==null&&!It();)m_(Ae)}function m_(t){var n=Ng(t.alternate,t,ba);t.memoizedProps=t.pendingProps,n===null?jc(t):Ae=n}function g_(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Eg(a,n,n.pendingProps,n.type,void 0,Re);break;case 11:n=Eg(a,n,n.pendingProps,n.type.render,n.ref,Re);break;case 5:Ff(n);var r=n;r===bn&&(be?(ic(r),r.tag===5&&r.stateNode!=null&&(Qe=r.stateNode)):(ic(r),be=!0));default:Lg(a,n),n=Ae=s0(n,ba),n=Ng(a,n,ba)}t.memoizedProps=t.pendingProps,n===null?jc(t):Ae=n}function Hr(t,n,a,r){_a=Os=null,Ff(n),Tr=null,Vo=0;var c=n.return;try{if(p1(t,c,n,a,Re)){ln=1,bc(t,Ei(a,t.current)),Ae=null;return}}catch(u){if(c!==null)throw Ae=c,u;ln=1,bc(t,Ei(a,t.current)),Ae=null;return}n.flags&32768?(be||r===1?t=!0:Lr||(Re&536870912)!==0?t=!1:(ns=t=!0,(r===2||r===9||r===3||r===6)&&(r=Dn.current,r!==null&&r.tag===13&&(r.flags|=16384))),__(n,t)):jc(n)}function jc(t){var n=t;do{if((n.flags&32768)!==0){__(n,ns);return}t=n.return;var a=v1(n.alternate,n,ba);if(a!==null){Ae=a;return}if(n=n.sibling,n!==null){Ae=n;return}Ae=n=t}while(n!==null);ln===0&&(ln=5)}function __(t,n){do{var a=x1(t.alternate,t);if(a!==null){a.flags&=32767,Ae=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Ae=t;return}Ae=t=a}while(t!==null);ln=6,Ae=null}function v_(t,n,a,r,c,u,v,T,B,tt,ut,xt){t.cancelPendingCommit=null;do Yc();while(an!==0);if((Fe&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));t===Ke&&(Ae=Ke=null,Re=0),qs=n,zi=t,$i=a,Rh=c,o_=r,w1(t,n,a,v,T,B,xt)}}function w1(t,n,a,r,c,u,v){var T=n.lanes|n.childLanes;if(wh=T,T|=hf,Vu(t,a,T,r,c,u),Ir=null,(a&335544064)===a?(zr=n1(t),r=10262):(zr=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,O1(Ct,function(){return Ph(),null})):(t.callbackNode=null,t.callbackPriority=0),Nc=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=St.T,St.T=null,c=Nt.p,Nt.p=2,u=Fe,Fe|=4;try{S1(t,n,a)}finally{Fe=u,Nt.p=c,St.T=r}}an=1,Nc?Pr=tM(v,t.containerInfo,zr,Uh,Lh,D1,Oh,Ph,R1):(Uh(),Lh(),Oh())}function R1(t){if(an!==0){var n=zi.onRecoverableError;n(t,{componentStack:null})}}function D1(){an===3&&(an=0,t_(qs,zi),an=4)}function Uh(){if(an===1){an=0;var t=zi,n=qs,a=$i,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=St.T,St.T=null;var c=Nt.p;Nt.p=2;var u=Fe;Fe|=4;try{tl=Oc=!1,Jg(n,t,a),a=qh;var v=Zm(t.containerInfo),T=a.focusedElem,B=a.selectionRange;if(v!==T&&T&&T.ownerDocument&&Wm(T.ownerDocument.documentElement,T)){if(B!==null&&of(T)){var tt=B.start,ut=B.end;if(ut===void 0&&(ut=tt),"selectionStart"in T)T.selectionStart=tt,T.selectionEnd=Math.min(ut,T.value.length);else{var xt=T.ownerDocument||document,Q=xt&&xt.defaultView||window;if(Q.getSelection){var lt=Q.getSelection(),zt=T.textContent.length,Qt=Math.min(B.start,zt),_e=B.end===void 0?Qt:Math.min(B.end,zt);!lt.extend&&Qt>_e&&(v=_e,_e=Qt,Qt=v);var $=qm(T,Qt),j=qm(T,_e);if($&&j&&(lt.rangeCount!==1||lt.anchorNode!==$.node||lt.anchorOffset!==$.offset||lt.focusNode!==j.node||lt.focusOffset!==j.offset)){var at=xt.createRange();at.setStart($.node,$.offset),lt.removeAllRanges(),Qt>_e?(lt.addRange(at),lt.extend(j.node,j.offset)):(at.setEnd(j.node,j.offset),lt.addRange(at))}}}}for(xt=[],lt=T;lt=lt.parentNode;)lt.nodeType===1&&xt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<xt.length;T++){var vt=xt[T];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}Wr=!!Yh,qh=Yh=null}finally{Fe=u,Nt.p=c,St.T=r}}t.current=n,an=2}}function Lh(){if(an===2){an=0;var t=zi,n=qs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=St.T,St.T=null;var r=Nt.p;Nt.p=2;var c=Fe;Fe|=4;try{Yg(t,n.alternate,n)}finally{Fe=c,Nt.p=r,St.T=a}}an=3}}function Oh(){if(an===4||an===3){an=0;var t=Pr;Pr=null,ve();var n=zi,a=qs,r=$i,c=o_,u=(r&335544064)===r?10262:10256;if((a.subtreeFlags&u)!==0||(a.flags&u)!==0?an=5:(an=0,qs=zi=null,x_(n,n.pendingLanes)),u=n.pendingLanes,u===0&&(as=null),Co(r),a=a.stateNode,tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(Ne,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=St.T,u=Nt.p,Nt.p=2,St.T=null;try{for(var v=n.onRecoverableError,T=0;T<c.length;T++){var B=c[T];v(B.value,{componentStack:B.stack})}}finally{St.T=a,Nt.p=u}}if(c=Ir,v=zr,zr=null,c!==null&&(Ir=null,v===null&&(v=[]),t!==null))for(B=0;B<c.length;B++)a=(0,c[B])(v),a!==void 0&&t.finished.finally(a);($i&3)!==0&&Yc(),ta(n),u=n.pendingLanes,(r&261930)!==0&&(u&42)!==0?n===Vc?al++:(al=0,Vc=n):(al=0,Vc=null),sl(0)}}function x_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Bo(n)))}function Yc(){return Pr!==null&&(Pr.skipTransition(),Pr=null),Uh(),Lh(),Oh(),Ph()}function Ph(){if(an!==5)return!1;var t=zi,n=wh;wh=0;var a=Co($i),r=St.T,c=Nt.p;try{Nt.p=32>a?32:a,St.T=null,a=Rh,Rh=null;var u=zi,v=$i;if(an=0,qs=zi=null,$i=0,(Fe&6)!==0)throw Error(s(331));var T=Fe;if(Fe|=4,a_(u.current),e_(u,u.current,v,a),Fe=T,sl(0,!1),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(Ne,u)}catch{}return!0}finally{Nt.p=c,St.T=r,x_(t,n)}}function S_(t,n,a){n=Ei(a,n),n=Jf(t.stateNode,n,2),t=Ka(t,n,2),t!==null&&(Ba(t,2),ta(t))}function ke(t,n,a){if(t.tag===3)S_(t,t,a);else for(;n!==null;){if(n.tag===3){S_(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(as===null||!as.has(r))){t=Ei(a,t),a=gg(2),r=Ka(n,a,2),r!==null&&(_g(a,r,n,t),Ba(r,2),ta(r));break}}n=n.return}}function Ih(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new b1;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(Ah=!0,c.add(a),t=N1.bind(null,t,n,a),n.then(t,t))}function N1(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ke===t&&(Re&a)===a&&((ln===4||ln===3&&(Re&62914560)===Re&&300>q()-Bc)&&(Fe&2)===0?Br(t,0):Fc|=a,Or===Re&&(Or=0)),ta(t)}function y_(t,n){n===0&&(n=Cs()),t=Ns(t,n),t!==null&&(Ba(t,n),ta(t))}function U1(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),y_(t,a)}function L1(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),y_(t,a)}function O1(t,n){return Zt(t,n)}var Gr=null,Vr=null,zh=!1,qc=!1,Fh=!1,rs=0;function ta(t){t!==Vr&&t.next===null&&(Vr===null?Gr=Vr=t:Vr=Vr.next=t),qc=!0,zh||(zh=!0,I1())}function sl(t,n){if(!Fh&&qc){Fh=!0;do for(var a=!1,r=Gr;r!==null;){if(t!==0){var c=r.pendingLanes;if(c===0)var u=0;else{var v=r.suspendedLanes,T=r.pingedLanes;u=(1<<31-kn(42|t)+1)-1,u&=c&~(v&~T),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,T_(r,u))}else u=Re,u=Ts(r,r===Ke?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(u&3)===0||Fa(r,u)||(a=!0,T_(r,u));r=r.next}while(a);Fh=!1}}function P1(){M_()}function M_(){qc=zh=!1;var t=0;rs!==0&&q1()&&(t=rs);for(var n=q(),a=null,r=Gr;r!==null;){var c=r.next,u=b_(r,n);u===0?(r.next=null,a===null?Gr=c:a.next=c,c===null&&(Vr=a)):(a=r,(t!==0||(u&3)!==0)&&(qc=!0)),r=c}an!==0&&an!==5||sl(t),rs!==0&&(rs=0)}function b_(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,c=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var v=31-kn(u),T=1<<v,B=c[v];B===-1?((T&a)===0||(T&r)!==0)&&(c[v]=Bl(T,n)):B<=n&&(t.expiredLanes|=T),u&=~T}if(n=Ke,a=Re,a=Ts(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Ve===2||Ve===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Jt(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Fa(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&Jt(r),Co(a)){case 2:case 8:a=Gt;break;case 32:a=Ct;break;case 268435456:a=Ot;break;default:a=Ct}return r=E_.bind(null,t),a=Zt(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&Jt(r),t.callbackPriority=2,t.callbackNode=null,2}function E_(t,n){if(an!==0&&an!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Yc()&&t.callbackNode!==a)return null;var r=Re;return r=Ts(t,t===Ke?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(c_(t,r,n),b_(t,q()),t.callbackNode!=null&&t.callbackNode===a?E_.bind(null,t):null)}function T_(t,n){if(Yc())return null;c_(t,n,!0)}function I1(){Z1(function(){(Fe&6)!==0?Zt(Dt,P1):M_()})}function Bh(){if(rs===0){var t=zs;t===0&&(t=bs,bs<<=1,(bs&261888)===0&&(bs=256)),rs=t}return rs}function A_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:kl(t)}function z1(t,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var u=A_((c[nt]||null).action),v=r.submitter;v&&(n=(n=v[nt]||null)?A_(n.formAction):v.getAttribute("formAction"),n!==null&&(u=n,v=null));var T=new ql("action","action",null,r,c);t.push({event:T,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(rs!==0){var B=new FormData(c,v);qf(a,{pending:!0,data:B,method:c.method,action:u},null,B)}}else typeof u=="function"&&(T.preventDefault(),B=new FormData(c,v),qf(a,{pending:!0,data:B,method:c.method,action:u},u,B))},currentTarget:c}]})}}for(var Hh=0;Hh<ff.length;Hh++){var Gh=ff[Hh],F1=Gh.toLowerCase(),B1=Gh[0].toUpperCase()+Gh.slice(1);Li(F1,"on"+B1)}Li(Jm,"onAnimationEnd"),Li($m,"onAnimationIteration"),Li(t0,"onAnimationStart"),Li("dblclick","onDoubleClick"),Li("focusin","onFocus"),Li("focusout","onBlur"),Li(Wy,"onTransitionRun"),Li(Zy,"onTransitionStart"),Li(Ky,"onTransitionCancel"),Li(e0,"onTransitionEnd"),hn("onMouseEnter",["mouseout","mouseover"]),hn("onMouseLeave",["mouseout","mouseover"]),hn("onPointerEnter",["pointerout","pointerover"]),hn("onPointerLeave",["pointerout","pointerover"]),Qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Qn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),H1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(rl));function C_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],c=r.event;r=r.listeners;t:{var u=void 0;if(n)for(var v=r.length-1;0<=v;v--){var T=r[v],B=T.instance,tt=T.currentTarget;if(T=T.listener,B!==u&&c.isPropagationStopped())break t;u=T,c.currentTarget=tt;try{u(c)}catch(ut){Kl(ut)}c.currentTarget=null,u=B}else for(v=0;v<r.length;v++){if(T=r[v],B=T.instance,tt=T.currentTarget,T=T.listener,B!==u&&c.isPropagationStopped())break t;u=T,c.currentTarget=tt;try{u(c)}catch(ut){Kl(ut)}c.currentTarget=null,u=B}}}}function Ce(t,n){var a=n[Xt];a===void 0&&(a=n[Xt]=new Set);var r=t+"__bubble";a.has(r)||(w_(n,t,2,!1),a.add(r))}function Vh(t,n,a){var r=0;n&&(r|=4),w_(a,t,r,n)}var Wc="_reactListening"+Math.random().toString(36).slice(2);function kh(t){if(!t[Wc]){t[Wc]=!0,Ue.forEach(function(a){a!=="selectionchange"&&(H1.has(a)||Vh(a,!1,t),Vh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Wc]||(n[Wc]=!0,Vh("selectionchange",!1,n))}}function w_(t,n,a,r){switch(_v(n)){case 2:var c=UM;break;case 8:c=LM;break;default:c=cd}a=c.bind(null,n,a,t),c=void 0,!Ku||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Xh(t,n,a,r,c){var u=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var T=r.stateNode.containerInfo;if(T===c)break;if(v===4)for(v=r.return;v!==null;){var B=v.tag;if((B===3||B===4)&&v.stateNode.containerInfo===c)return;v=v.return}for(;T!==null;){if(v=we(T),v===null)return;if(B=v.tag,B===5||B===6||B===26||B===27){r=u=v;continue t}T=T.parentNode}}r=r.return}wm(function(){var tt=u,ut=Wu(a),xt=[];t:{var Q=n0.get(t);if(Q!==void 0){var lt=ql,zt=t;switch(t){case"keypress":if(jl(a)===0)break t;case"keydown":case"keyup":lt=Ey;break;case"focusin":zt="focus",lt=tf;break;case"focusout":zt="blur",lt=tf;break;case"beforeblur":case"afterblur":lt=tf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Nm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=hy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=Ry;break;case Jm:case $m:case t0:lt=my;break;case e0:lt=Ny;break;case"scroll":case"scrollend":lt=uy;break;case"wheel":lt=Ly;break;case"copy":case"cut":case"paste":lt=_y;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=Lm;break;case"submit":lt=Cy;break;case"toggle":case"beforetoggle":lt=Py}var Qt=(n&4)!==0,_e=!Qt&&(t==="scroll"||t==="scrollend"),$=Qt?Q!==null?Q+"Capture":null:Q;Qt=[];for(var j=tt,at;j!==null;){var vt=j;if(at=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||at===null||$===null||(vt=wo(j,$),vt!=null&&Qt.push(ol(j,vt,at))),_e)break;j=j.return}0<Qt.length&&(Q=new lt(Q,zt,null,a,ut),xt.push({event:Q,listeners:Qt}))}}if((n&7)===0){t:{if(lt=t==="mouseover"||t==="pointerover",Q=t==="mouseout"||t==="pointerout",lt&&a!==qu&&(zt=a.relatedTarget||a.fromElement)&&(we(zt)||zt[Lt]))break t;(Q||lt)&&(zt=ut.window===ut?ut:(lt=ut.ownerDocument)?lt.defaultView||lt.parentWindow:window,Q?(lt=a.relatedTarget||a.toElement,Q=tt,lt=lt?we(lt):null,lt!==null&&(_e=f(lt),Qt=lt.tag,lt!==_e||Qt!==5&&Qt!==27&&Qt!==6)&&(lt=null)):(Q=null,lt=tt),Q!==lt&&(Qt=Nm,vt="onMouseLeave",$="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(Qt=Lm,vt="onPointerLeave",$="onPointerEnter",j="pointer"),_e=Q==null?zt:qe(Q),at=lt==null?zt:qe(lt),zt=new Qt(vt,j+"leave",Q,a,ut),zt.target=_e,zt.relatedTarget=at,vt=null,we(ut)===tt&&(Qt=new Qt($,j+"enter",lt,a,ut),Qt.target=at,Qt.relatedTarget=_e,vt=Qt),_e=vt,Qt=Q&&lt?D(Q,lt,G1):null,Q!==null&&R_(xt,zt,Q,Qt,!1),lt!==null&&_e!==null&&R_(xt,_e,lt,Qt,!0)))}t:{if(Q=tt?qe(tt):window,lt=Q.nodeName&&Q.nodeName.toLowerCase(),lt==="select"||lt==="input"&&Q.type==="file")var Yt=Gm;else if(Bm(Q))if(Vm)Yt=jy;else{Yt=ky;var De=Vy}else lt=Q.nodeName,!lt||lt.toLowerCase()!=="input"||Q.type!=="checkbox"&&Q.type!=="radio"?tt&&Yu(tt.elementType)&&(Yt=Gm):Yt=Xy;if(Yt&&(Yt=Yt(t,tt))){Hm(xt,Yt,a,ut);break t}De&&De(t,Q,tt)}switch(De=tt?qe(tt):window,t){case"focusin":(Bm(De)||De.contentEditable==="true")&&(gr=De,lf=tt,Io=null);break;case"focusout":Io=lf=gr=null;break;case"mousedown":cf=!0;break;case"contextmenu":case"mouseup":case"dragend":cf=!1,Km(xt,a,ut);break;case"selectionchange":if(qy)break;case"keydown":case"keyup":Km(xt,a,ut)}var ie;if(nf)t:{switch(t){case"compositionstart":var oe="onCompositionStart";break t;case"compositionend":oe="onCompositionEnd";break t;case"compositionupdate":oe="onCompositionUpdate";break t}oe=void 0}else mr?zm(t,a)&&(oe="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(oe="onCompositionStart");oe&&(Om&&a.locale!=="ko"&&(mr||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&mr&&(ie=Rm()):(Ga=ut,Qu="value"in Ga?Ga.value:Ga.textContent,mr=!0)),De=Zc(tt,oe),0<De.length&&(oe=new Um(oe,t,null,a,ut),xt.push({event:oe,listeners:De}),ie?oe.data=ie:(ie=Fm(a),ie!==null&&(oe.data=ie)))),(ie=zy?Fy(t,a):By(t,a))&&(oe=Zc(tt,"onBeforeInput"),0<oe.length&&(De=new Um("onBeforeInput","beforeinput",null,a,ut),xt.push({event:De,listeners:oe}),De.data=ie)),z1(xt,t,tt,a,ut)}C_(xt,n)})}function ol(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Zc(t,n){for(var a=n+"Capture",r=[];t!==null;){var c=t,u=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||u===null||(c=wo(t,a),c!=null&&r.unshift(ol(t,c,u)),c=wo(t,n),c!=null&&r.push(ol(t,c,u))),t.tag===3)return r;t=t.return}return[]}function G1(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function R_(t,n,a,r,c){for(var u=n._reactName,v=[];a!==null&&a!==r;){var T=a,B=T.alternate,tt=T.stateNode;if(T=T.tag,B!==null&&B===r)break;T!==5&&T!==26&&T!==27||tt===null||(B=tt,c?(tt=wo(a,u),tt!=null&&v.unshift(ol(a,tt,B))):c||(tt=wo(a,u),tt!=null&&v.push(ol(a,tt,B)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var V1=/\r\n?/g,k1=/\u0000|\uFFFD/g;function D_(t){return(typeof t=="string"?t:""+t).replace(V1,`
`).replace(k1,"")}function N_(t,n){return n=D_(n),D_(t)===n}function Xe(t,n,a,r,c,u){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||hr(t,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&hr(t,""+r);else return;break;case"className":yi(t,"class",r);break;case"tabIndex":yi(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":yi(t,a,r);break;case"style":Am(t,r,u);return;case"data":if(n!=="object"){yi(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=kl(r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(n!=="input"&&Xe(t,n,"name",c.name,c,null),Xe(t,n,"formEncType",c.formEncType,c,null),Xe(t,n,"formMethod",c.formMethod,c,null),Xe(t,n,"formTarget",c.formTarget,c,null)):(Xe(t,n,"encType",c.encType,c,null),Xe(t,n,"method",c.method,c,null),Xe(t,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=kl(r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Xi);return;case"onScroll":r!=null&&Ce("scroll",t);return;case"onScrollEnd":r!=null&&Ce("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));(u!=null?u.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=kl(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":Ce("beforetoggle",t),Ce("toggle",t),Ha(t,"popover",r);break;case"xlinkActuate":fa(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":fa(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":fa(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":fa(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":fa(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":fa(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":fa(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":fa(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":fa(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Ha(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=ly.get(a)||a,Ha(t,a,r);else return}ce=!0}function jh(t,n,a,r,c,u){switch(a){case"style":Am(t,r,u);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));(u!=null?u.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"children":if(typeof r=="string")hr(t,r);else if(typeof r=="number"||typeof r=="bigint")hr(t,""+r);else return;break;case"onScroll":r!=null&&Ce("scroll",t);return;case"onScrollEnd":r!=null&&Ce("scrollend",t);return;case"onClick":r!=null&&(t.onclick=Xi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!In.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),u=a.slice(2,c?a.length-7:void 0),n=t[nt]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(u,n,c),typeof r=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(u,r,c);break t}ce=!0,a in t?t[a]=r:r===!0?t.setAttribute(a,""):Ha(t,a,r)}return}ce=!0}function Ln(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ce("error",t),Ce("load",t);var r=!1,c=!1,u;for(u in a)if(a.hasOwnProperty(u)){var v=a[u];if(v!=null)switch(u){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(t,n,u,v,a,null)}}c&&Xe(t,n,"srcSet",a.srcSet,a,null),r&&Xe(t,n,"src",a.src,a,null);return;case"input":Ce("invalid",t);var T=u=v=c=null,B=null,tt=null;for(r in a)if(a.hasOwnProperty(r)){var ut=a[r];if(ut!=null)switch(r){case"name":c=ut;break;case"type":v=ut;break;case"checked":B=ut;break;case"defaultChecked":tt=ut;break;case"value":u=ut;break;case"defaultValue":T=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:Xe(t,n,r,ut,a,null)}}Mm(t,u,T,B,tt,v,c,!1);return;case"select":Ce("invalid",t),r=v=u=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":u=T;break;case"defaultValue":v=T;break;case"multiple":r=T;default:Xe(t,n,c,T,a,null)}n=u,a=v,t.multiple=!!r,n!=null?fr(t,!!r,n,!1):a!=null&&fr(t,!!r,a,!0);return;case"textarea":Ce("invalid",t),u=c=r=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":r=T;break;case"defaultValue":c=T;break;case"children":u=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Xe(t,n,v,T,a,null)}Em(t,r,c,u);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(r=a[B],r!=null))switch(B){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Xe(t,n,B,r,a,null)}return;case"dialog":Ce("beforetoggle",t),Ce("toggle",t),Ce("cancel",t),Ce("close",t);break;case"iframe":case"object":Ce("load",t);break;case"video":case"audio":for(r=0;r<rl.length;r++)Ce(rl[r],t);break;case"image":Ce("error",t),Ce("load",t);break;case"details":Ce("toggle",t);break;case"embed":case"source":case"link":Ce("error",t),Ce("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(r=a[tt],r!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(t,n,tt,r,a,null)}return;default:if(Yu(n)){for(ut in a)a.hasOwnProperty(ut)&&(r=a[ut],r!==void 0&&jh(t,n,ut,r,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(r=a[T],r!=null&&Xe(t,n,T,r,a,null))}var X1={};function j1(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,u=null,v=null,T=null,B=null,tt=null,ut=null;for(lt in a){var xt=a[lt];if(a.hasOwnProperty(lt)&&xt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":B=xt;default:r.hasOwnProperty(lt)||Xe(t,n,lt,null,r,xt)}}for(var Q in r){var lt=r[Q];if(xt=a[Q],r.hasOwnProperty(Q)&&(lt!=null||xt!=null))switch(Q){case"type":lt!==xt&&(ce=!0),u=lt;break;case"name":lt!==xt&&(ce=!0),c=lt;break;case"checked":lt!==xt&&(ce=!0),tt=lt;break;case"defaultChecked":lt!==xt&&(ce=!0),ut=lt;break;case"value":lt!==xt&&(ce=!0),v=lt;break;case"defaultValue":lt!==xt&&(ce=!0),T=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:lt!==xt&&Xe(t,n,Q,lt,r,xt)}}Xu(t,v,T,B,tt,ut,u,c);return;case"select":lt=v=T=Q=null;for(u in a)if(B=a[u],a.hasOwnProperty(u)&&B!=null)switch(u){case"value":break;case"multiple":lt=B;default:r.hasOwnProperty(u)||Xe(t,n,u,null,r,B)}for(c in r)if(u=r[c],B=a[c],r.hasOwnProperty(c)&&(u!=null||B!=null))switch(c){case"value":u!==B&&(ce=!0),Q=u;break;case"defaultValue":u!==B&&(ce=!0),T=u;break;case"multiple":u!==B&&(ce=!0),v=u;default:u!==B&&Xe(t,n,c,u,r,B)}n=T,a=v,r=lt,Q!=null?fr(t,!!a,Q,!1):!!r!=!!a&&(n!=null?fr(t,!!a,n,!0):fr(t,!!a,a?[]:"",!1));return;case"textarea":lt=Q=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!r.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Xe(t,n,T,null,r,c)}for(v in r)if(c=r[v],u=a[v],r.hasOwnProperty(v)&&(c!=null||u!=null))switch(v){case"value":c!==u&&(ce=!0),Q=c;break;case"defaultValue":c!==u&&(ce=!0),lt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==u&&Xe(t,n,v,c,r,u)}bm(t,Q,lt);return;case"option":for(var zt in a)if(Q=a[zt],a.hasOwnProperty(zt)&&Q!=null&&!r.hasOwnProperty(zt))switch(zt){case"selected":t.selected=!1;break;default:Xe(t,n,zt,null,r,Q)}for(B in r)if(Q=r[B],lt=a[B],r.hasOwnProperty(B)&&Q!==lt&&(Q!=null||lt!=null))switch(B){case"selected":Q!==lt&&(ce=!0),t.selected=Q&&typeof Q!="function"&&typeof Q!="symbol";break;default:Xe(t,n,B,Q,r,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qt in a)Q=a[Qt],a.hasOwnProperty(Qt)&&Q!=null&&!r.hasOwnProperty(Qt)&&Xe(t,n,Qt,null,r,Q);for(tt in r)if(Q=r[tt],lt=a[tt],r.hasOwnProperty(tt)&&Q!==lt&&(Q!=null||lt!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(s(137,n));break;default:Xe(t,n,tt,Q,r,lt)}return;default:if(Yu(n)){for(var _e in a)Q=a[_e],a.hasOwnProperty(_e)&&Q!==void 0&&!r.hasOwnProperty(_e)&&jh(t,n,_e,void 0,r,Q);for(ut in r)Q=r[ut],lt=a[ut],!r.hasOwnProperty(ut)||Q===lt||Q===void 0&&lt===void 0||jh(t,n,ut,Q,r,lt);return}}for(var $ in a)Q=a[$],a.hasOwnProperty($)&&Q!=null&&!r.hasOwnProperty($)&&Xe(t,n,$,null,r,Q);for(xt in r)Q=r[xt],lt=a[xt],!r.hasOwnProperty(xt)||Q===lt||Q==null&&lt==null||Xe(t,n,xt,Q,r,lt)}function U_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Y1(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],u=c.transferSize,v=c.initiatorType,T=c.duration;if(u&&T&&U_(v)){for(v=0,T=c.responseEnd,r+=1;r<a.length;r++){var B=a[r],tt=B.startTime;if(tt>T)break;var ut=B.transferSize,xt=B.initiatorType;ut&&U_(xt)&&(B=B.responseEnd,v+=ut*(B<T?1:(T-tt)/(B-tt)))}if(--r,n+=8*(u+v)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Yh=null,qh=null;function ll(t){return t.nodeType===9?t:t.ownerDocument}function L_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function O_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function P_(t,n,a,r){return a=ll(a).createElement(t),a[ot]=r,a[nt]=n,Ln(a,t,n),Vt(a),a}function Wh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Zh=null;function q1(){var t=window.event;return t&&t.type==="popstate"?t===Zh?!1:(Zh=t,!0):(Zh=null,!1)}var Kh=typeof setTimeout=="function"?setTimeout:void 0,W1=typeof clearTimeout=="function"?clearTimeout:void 0,I_=typeof Promise=="function"?Promise:void 0,z_=typeof requestAnimationFrame=="function"?requestAnimationFrame:Kh,Z1=typeof queueMicrotask=="function"?queueMicrotask:typeof I_<"u"?function(t){return I_.resolve(null).then(t).catch(K1)}:Kh;function K1(t){setTimeout(function(){throw t})}function os(t){return t==="head"}function F_(t,n){var a=n,r=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(c),Zr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")ad(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,ad(a);for(var u=a.firstChild;u;){var v=u.nextSibling,T=u.nodeName;u[ae]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=v}}else a==="body"&&ad(t.ownerDocument.body);a=c}while(a);Zr(n)}function B_(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function H_(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var r=1;else for(var c=r=0;c<n.length;c++){var u=n[c];0<u.width&&0<u.height&&r++}r===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function G_(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function Q1(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function Qh(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return Q1(n,a,t)}function J1(t){return t.documentElement.clientHeight}function $1(t){this.addEventListener("load",t),this.addEventListener("error",t)}function tM(t,n,a,r,c,u,v,T,B){var tt=n.nodeType===9?n:n.ownerDocument;try{var ut=tt.startViewTransition({update:function(){var Q=tt.defaultView,lt=Q.navigation&&Q.navigation.transition,zt=tt.fonts.status;r();var Qt=[];if(zt==="loaded"&&(J1(tt),tt.fonts.status==="loading"&&Qt.push(tt.fonts.ready)),zt=Qt.length,t!==null)for(var _e=t.suspenseyImages,$=0,j=0;j<_e.length;j++){var at=_e[j];if(!at.complete){var vt=at.getBoundingClientRect();if(0<vt.bottom&&0<vt.right&&vt.top<Q.innerHeight&&vt.left<Q.innerWidth){if($+=lv(at),$>Jc){Qt.length=zt;break}at=new Promise($1.bind(at)),Qt.push(at)}}}if(0<Qt.length)return Q=Promise.race([Promise.all(Qt),new Promise(function(Yt){return setTimeout(Yt,500)})]).then(c,c),(lt?Promise.allSettled([lt.finished,Q]):Q).then(u,u);if(c(),lt)return lt.finished.then(u,u);u()},types:a});tt.__reactViewTransition=ut;var xt=[];return ut.ready.then(function(){for(var Q=tt.documentElement.getAnimations({subtree:!0}),lt=0;lt<Q.length;lt++){var zt=Q[lt],Qt=zt.effect,_e=Qt.pseudoElement;if(_e!=null&&_e.startsWith("::view-transition")){xt.push(zt),zt=Qt.getKeyframes();for(var $=_e=void 0,j=!0,at=0;at<zt.length;at++){var vt=zt[at],Yt=vt.width;if(_e===void 0)_e=Yt;else if(_e!==Yt){j=!1;break}if(Yt=vt.height,$===void 0)$=Yt;else if($!==Yt){j=!1;break}delete vt.width,delete vt.height,vt.transform==="none"&&delete vt.transform}j&&_e!==void 0&&$!==void 0&&(Qt.setKeyframes(zt),j=getComputedStyle(Qt.target,Qt.pseudoElement),j.width!==_e||j.height!==$)&&(j=zt[0],j.width=_e,j.height=$,j=zt[zt.length-1],j.width=_e,j.height=$,Qt.setKeyframes(zt))}}v()},function(Q){tt.__reactViewTransition===ut&&(tt.__reactViewTransition=null);try{if(typeof Q=="object"&&Q!==null)switch(Q.name){case"InvalidStateError":(Q.message==="View transition was skipped because document visibility state is hidden."||Q.message==="Skipping view transition because document visibility state has become hidden."||Q.message==="Skipping view transition because viewport size changed."||Q.message==="Transition was aborted because of invalid state")&&(Q=null)}Q!==null&&B(Q)}finally{r(),c(),v()}}),ut.finished.finally(function(){for(var Q=0;Q<xt.length;Q++)xt[Q].cancel();tt.__reactViewTransition===ut&&(tt.__reactViewTransition=null),T()}),ut}catch{return r(),c(),v(),null}}function Ws(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Ws.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:N({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Ws.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),r=[],c=0;c<a.length;c++){var u=a[c].effect;u!==null&&u.target===t&&u.pseudoElement===n&&r.push(a[c])}return r},Ws.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function V_(t){return{name:t,group:new Ws("group",t),imagePair:new Ws("image-pair",t),old:new Ws("old",t),new:new Ws("new",t)}}function mi(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}mi.prototype.addEventListener=function(t,n,a){var r=null,c=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var u=this._eventListeners;if(X_(u,t,n,a)===-1){var v=this,T=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(T=function(B){v.removeEventListener(t,n,a),typeof n=="function"?n.call(this,B):n.handleEvent(B)}),r!==null&&(c=v.removeEventListener.bind(v,t,n,a),r.addEventListener("abort",c,{once:!0}),c=r.removeEventListener.bind(r,"abort",c)),r=kr(a),u.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:T,cleanup:c}),m(this._fragmentFiber.child,!1,eM,t,T,r)}this._eventListeners=u}};function eM(t,n,a,r){return M(t).addEventListener(n,a,r),!1}mi.prototype.removeEventListener=function(t,n,a){var r=this._eventListeners;if(r!==null&&(n=X_(r,t,n,a),n!==-1)){var c=r[n];a=c.attachedListener;var u=c.cleanup;c=kr(c.optionsOrUseCapture),m(this._fragmentFiber.child,!1,nM,t,a,c),r.splice(n,1),u!==null&&u()}};function nM(t,n,a,r){return M(t).removeEventListener(n,a,r),!1}function kr(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function k_(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function X_(t,n,a,r){if(t.length===0)return-1;r=k_(r);for(var c=0;c<t.length;c++){var u=t[c];if(u.type===n&&u.listener===a&&k_(u.optionsOrUseCapture)===r)return c}return-1}mi.prototype.dispatchEvent=function(t){var n=x(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var c=0;c<a.length;c++){var u=a[c];r.addEventListener(u.type,u.attachedListener,kr(u.optionsOrUseCapture))}if(n.appendChild(r),t=r.dispatchEvent(t),a)for(c=0;c<a.length;c++)u=a[c],r.removeEventListener(u.type,u.attachedListener,kr(u.optionsOrUseCapture));return n.removeChild(r),t}return n.dispatchEvent(t)},mi.prototype.focus=function(t){m(this._fragmentFiber.child,!0,j_,t,void 0,void 0)};function j_(t,n){return t.tag===6?!1:(t=M(t),pM(t,n))}mi.prototype.focusLast=function(t){var n=[];m(this._fragmentFiber.child,!0,Jh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!j_(n[a],t);a--);};function Jh(t,n){return n.push(t),!1}mi.prototype.blur=function(){var t=x(this._fragmentFiber);t!==null&&(t=M(t),t=ll(t).activeElement,t!==null&&m(this._fragmentFiber.child,!1,iM,t,void 0,void 0))};function iM(t,n){return t.tag===6?!1:(t=M(t),t===n||t.contains(n)?(n.blur(),!0):!1)}mi.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),m(this._fragmentFiber.child,!1,aM,t,void 0,void 0)};function aM(t,n){return t.tag===6||(t=M(t),n.observe(t)),!1}mi.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),m(this._fragmentFiber.child,!1,sM,t,void 0,void 0);for(var a=n=0;a<Fi.length;a++){var r=Fi[a];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Fi[n++]=r}Fi.length=n}};function sM(t,n){return t.tag===6||(t=M(t),n.unobserve(t)),!1}var Fi=[],$h=!1;function rM(t,n,a){Fi.push({fragmentInstance:t,observer:n,instance:a}),$h||($h=!0,mM(function(){$h=!1;var r=Fi;Fi=[];for(var c=0;c<r.length;c++){var u=r[c];u.observer.unobserve(u.instance)}}))}mi.prototype.getClientRects=function(){var t=[];return m(this._fragmentFiber.child,!1,oM,t,void 0,void 0),t};function oM(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=M(t),n.push.apply(n,t.getClientRects());return!1}mi.prototype.getRootNode=function(t){var n=x(this._fragmentFiber);return n===null?this:M(n).getRootNode(t)},mi.prototype.compareDocumentPosition=function(t){var n=x(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];m(this._fragmentFiber.child,!1,Jh,a,void 0,void 0);var r=M(n);if(a.length===0){if(a=r,y(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var c=r=a.compareDocumentPosition(t);return a===t?c=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=E(n)[1],a===null?c=Node.DOCUMENT_POSITION_PRECEDING:(t=M(a).compareDocumentPosition(t),c=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),c=M(a[a.length-1]);var u=y(this._fragmentFiber)?n.parentElement:r;if(u==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=u.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,u=u.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var v=n.compareDocumentPosition(t),T=c.compareDocumentPosition(t),B=v&Node.DOCUMENT_POSITION_CONTAINED_BY||T&Node.DOCUMENT_POSITION_CONTAINED_BY;return T=r&&u&&v&Node.DOCUMENT_POSITION_FOLLOWING&&T&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===t||u&&c===t||B||T?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===t||!u&&c===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:v,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||lM(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function lM(t,n,a,r,c){var u=we(c);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!u)t:{for(;u!==null;){if(u.tag===7&&(u===n||u.alternate===n)){a=!0;break t}u=u.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(u===null)return u=c.ownerDocument,c===u||c===u.documentElement||c===u.body;t:{for(u=n,n=x(n);u!==null;){if(!(u.tag!==5&&u.tag!==3&&u.tag!==27||u!==n&&u.alternate!==n)){u=!0;break t}u=u.return}u=!1}return u}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!u)&&!(n=u===a)&&(n=D(a,u,I),n===null?n=!1:(m(n,!0,H,u,a),u=S,S=null,n=u!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!u)&&!(n=u===r)&&(n=D(r,u,I),n===null?n=!1:(m(n,!0,O,u,r),u=S,P=S=null,n=u!==null)),n):!1}function Y_(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}mi.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var n=[];m(this._fragmentFiber.child,!1,Jh,n,void 0,void 0);var a=t!==!1;if(n.length===0){var r=E(this._fragmentFiber);if(r=a?r[1]||r[0]||x(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=M(r),Y_(t,a);return}if(r=M(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var c=n[r];c.tag===6?(c=M(c),Y_(c,a)):M(c).scrollIntoView(t),r+=a?-1:1}};function cM(t,n){return t=M(t),q_(t,n),!1}function q_(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function W_(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];t.addEventListener(c.type,c.attachedListener,kr(c.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){for(var v=0,T=0;T<Fi.length;T++){var B=Fi[T];(B.fragmentInstance!==n||B.observer!==u||B.instance!==t)&&(Fi[v++]=B)}Fi.length=v,u.observe(t)}),q_(t,n))}function uM(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];t.removeEventListener(c.type,c.attachedListener,kr(c.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){typeof u.rootMargin=="string"?rM(n,u,t):u.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function td(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":td(a),me(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function fM(t,n,a,r){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[ae])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var u=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=Ri(t.nextSibling),t===null)break}return null}function hM(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ri(t.nextSibling),t===null))return null;return t}function Z_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ri(t.nextSibling),t===null))return null;return t}function ed(t){return t.data==="$?"||t.data==="$~"}function nd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function dM(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function Ri(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var id=null;function K_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ri(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Q_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function pM(t,n){function a(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return r}function mM(t){z_(function(){z_(function(n){return t(n)})})}function J_(t,n,a){switch(n=ll(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function $_(t,n,a){for(var r in a){var c=a[r];a.hasOwnProperty(r)&&c!=null&&Xe(t,n,r,null,X1,c)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Xi&&(t.onclick=null),me(t)}function ad(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);me(t)}var Di=new Map,tv=new Set;function cl(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var Ea=Nt.d;Nt.d={f:gM,r:_M,D:vM,C:xM,L:SM,m:yM,X:bM,S:MM,M:EM};function gM(){var t=Ea.f(),n=kc();return t||n}function _M(t){var n=He(t);n!==null&&n.tag===5&&n.type==="form"?ng(n):Ea.r(t)}var Xr=typeof document>"u"?null:document;function ev(t,n,a){var r=Xr;if(r&&typeof n=="string"&&n){var c=Mi(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),tv.has(c)||(tv.add(c),t={rel:t,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),Ln(n,"link",t),Vt(n),r.head.appendChild(n)))}}function vM(t){Ea.D(t),ev("dns-prefetch",t,null)}function xM(t,n){Ea.C(t,n),ev("preconnect",t,n)}function SM(t,n,a){Ea.L(t,n,a);var r=Xr;if(r&&t&&n){var c='link[rel="preload"][as="'+Mi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Mi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Mi(a.imageSizes)+'"]')):c+='[href="'+Mi(t)+'"]';var u=c;switch(n){case"style":u=jr(t);break;case"script":u=Yr(t)}if(!(Di.has(u)||(t=N({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Di.set(u,t),r.querySelector(c)!==null||n==="style"&&r.querySelector(ul(u))||n==="script"&&r.querySelector(fl(u))))){var v=r.createElement("link");Ln(v,"link",t),n==="style"&&(v[ne]=!0,v.onload=v.onerror=function(){ze(v)}),Vt(v),r.head.appendChild(v)}}}function yM(t,n){Ea.m(t,n);var a=Xr;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Mi(r)+'"][href="'+Mi(t)+'"]',u=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Yr(t)}if(!Di.has(u)&&(t=N({rel:"modulepreload",href:t},n),Di.set(u,t),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(fl(u)))return}r=a.createElement("link"),Ln(r,"link",t),Vt(r),a.head.appendChild(r)}}}function MM(t,n,a){Ea.S(t,n,a);var r=Xr;if(r&&t){var c=Le(r).hoistableStyles,u=jr(t);n=n||"default";var v=c.get(u);if(!v){var T={loading:0,preload:null};if(v=r.querySelector(ul(u)))T.loading=5;else{t=N({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Di.get(u))&&sd(t,a);var B=v=r.createElement("link");Vt(B),Ln(B,"link",t),B._p=new Promise(function(tt,ut){B.onload=tt,B.onerror=ut}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Kc(v,n,r)}v={type:"stylesheet",instance:v,count:1,state:T},c.set(u,v)}}}function bM(t,n){Ea.X(t,n);var a=Xr;if(a&&t){var r=Le(a).hoistableScripts,c=Yr(t),u=r.get(c);u||(u=a.querySelector(fl(c)),u||(t=N({src:t,async:!0},n),(n=Di.get(c))&&rd(t,n),u=a.createElement("script"),Vt(u),Ln(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(c,u))}}function EM(t,n){Ea.M(t,n);var a=Xr;if(a&&t){var r=Le(a).hoistableScripts,c=Yr(t),u=r.get(c);u||(u=a.querySelector(fl(c)),u||(t=N({src:t,async:!0,type:"module"},n),(n=Di.get(c))&&rd(t,n),u=a.createElement("script"),Vt(u),Ln(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(c,u))}}function nv(t,n,a,r){var c=(c=Te.current)?cl(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=jr(a.href),n=Le(c).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=jr(a.href);var u=Le(c).hoistableStyles,v=u.get(t);if(v||(c=c.ownerDocument||c,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,v),(u=c.querySelector(ul(t)))?u._p||(v.instance=u,v.state.loading=5):(u=Di.get(t),u||(u={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Di.set(t,u)),TM(c,t,u,v.state))),n&&r===null)throw Error(s(528,""));return v}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Yr(a),n=Le(c).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function jr(t){return'href="'+Mi(t)+'"'}function ul(t){return'link[rel="stylesheet"]['+t+"]"}function iv(t){return N({},t,{"data-precedence":t.precedence,precedence:null})}function TM(t,n,a,r){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[ne]!==!0){r.loading=1;return}}else n=t.createElement("link"),n[ne]=!0,n.onload=n.onerror=ze.bind(null,n),Ln(n,"link",a),Vt(n),t.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Yr(t){return'[src="'+Mi(t)+'"]'}function fl(t){return"script[async]"+t}function av(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+Mi(a.href)+'"]');if(r)return n.instance=r,Vt(r),r;var c=N({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),Vt(r),Ln(r,"style",c),Kc(r,a.precedence,t),n.instance=r;case"stylesheet":c=jr(a.href);var u=t.querySelector(ul(c));if(u)return n.state.loading|=4,n.instance=u,Vt(u),u;r=iv(a),(c=Di.get(c))&&sd(r,c),u=(t.ownerDocument||t).createElement("link"),Vt(u);var v=u;return v._p=new Promise(function(T,B){v.onload=T,v.onerror=B}),Ln(u,"link",r),n.state.loading|=4,Kc(u,a.precedence,t),n.instance=u;case"script":return u=Yr(a.src),(c=t.querySelector(fl(u)))?(n.instance=c,Vt(c),c):(r=a,(c=Di.get(u))&&(r=N({},a),rd(r,c)),t=t.ownerDocument||t,c=t.createElement("script"),Vt(c),Ln(c,"link",r),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Kc(r,a.precedence,t));return n.instance}function Kc(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,u=c,v=0;v<r.length;v++){var T=r[v];if(T.dataset.precedence===n)u=T;else if(u!==c)break}u?u.parentNode.insertBefore(t,u.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function sd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function rd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Qc=null;function sv(t,n,a){if(Qc===null){var r=new Map,c=Qc=new Map;c.set(a,r)}else c=Qc,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var u=a[c];if(!(u[ae]||u[ot]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var v=u.getAttribute(n)||"";v=t+v;var T=r.get(v);T?T.push(u):r.set(v,[u])}}return r}function od(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function AM(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function rv(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function ov(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function lv(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function cv(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=lv(n),t.suspenseyImages.push(n)),t=RM.bind(t),n.decode().then(t,t))}function CM(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=jr(r.href),u=n.querySelector(ul(c));if(u){n=u._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=hl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=u,Vt(u);return}u=n.ownerDocument||n,r=iv(r),(c=Di.get(c))&&sd(r,c),u=u.createElement("link"),Vt(u);var v=u;v._p=new Promise(function(T,B){v.onload=T,v.onerror=B}),Ln(u,"link",r),a.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=hl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Jc=0;function wM(t,n){return t.stylesheets&&t.count===0&&tu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&tu(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+n);0<t.imgBytes&&Jc===0&&(Jc=62500*Y1());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&tu(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>Jc?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function uv(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)tu(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function hl(){this.count--,uv(this)}function RM(){this.imgCount--,uv(this)}var $c=null;function tu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,$c=new Map,n.forEach(DM,t),$c=null,hl.call(t))}function DM(t,n){if(!(n.state.loading&4)){var a=$c.get(t);if(a)var r=a.get(null);else{a=new Map,$c.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<c.length;u++){var v=c[u];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),r=v)}r&&a.set(null,r)}c=n.instance,v=c.getAttribute("data-precedence"),u=a.get(v)||r,u===r&&a.set(null,c),a.set(v,c),this.count++,r=hl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),u?u.parentNode.insertBefore(c,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var qr={$$typeof:dt,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function NM(t,n,a,r,c,u,v,T,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ur(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ur(0),this.hiddenUpdates=ur(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=u,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.transitionTypes=null,this.incompleteTransitions=new Map}function fv(t,n,a,r,c,u,v,T,B,tt,ut,xt){return t=new NM(t,n,a,v,B,tt,ut,xt,T),n=1,u===!0&&(n|=24),u=$n(3,null,null,n),t.current=u,u.stateNode=t,n=Mf(),n.refCount++,t.pooledCache=n,n.refCount++,u.memoizedState={element:r,isDehydrated:a,cache:n},Af(u),t}function hv(t){return t?(t=xr,t):xr}function dv(t,n,a,r,c,u){c=hv(c),r.context===null?r.context=c:r.pendingContext=c,r=Za(n),r.payload={element:a},u=u===void 0?null:u,u!==null&&(r.callback=u),a=Ka(t,r,n),a!==null&&(ii(a,t,n),ko(a,t,n))}function pv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function ld(t,n){pv(t,n),(t=t.alternate)&&pv(t,n)}function mv(t){if(t.tag===13||t.tag===31){var n=Ns(t,67108864);n!==null&&ii(n,t,67108864),ld(t,67108864)}}function gv(t){if(t.tag===13||t.tag===31){var n=pi();n=Ao(n);var a=Ns(t,n);a!==null&&ii(a,t,n),ld(t,n)}}var Wr=!0;function UM(t,n,a,r){var c=St.T;St.T=null;var u=Nt.p;try{Nt.p=2,cd(t,n,a,r)}finally{Nt.p=u,St.T=c}}function LM(t,n,a,r){var c=St.T;St.T=null;var u=Nt.p;try{Nt.p=8,cd(t,n,a,r)}finally{Nt.p=u,St.T=c}}function cd(t,n,a,r){if(Wr){var c=ud(r);if(c===null)Xh(t,n,r,eu,a),vv(t,r);else if(PM(c,t,n,a,r))r.stopPropagation();else if(vv(t,r),n&4&&-1<OM.indexOf(t)){for(;c!==null;){var u=He(c);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var v=Ui(u.pendingLanes);if(v!==0){var T=u;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var B=1<<31-kn(v);T.entanglements[1]|=B,v&=~B}ta(u),(Fe&6)===0&&(Hc=q()+500,sl(0))}}break;case 31:case 13:T=Ns(u,2),T!==null&&ii(T,u,2),kc(),ld(u,2)}if(u=ud(r),u===null&&Xh(t,n,r,eu,a),u===c)break;c=u}c!==null&&r.stopPropagation()}else Xh(t,n,r,null,a)}}function ud(t){return t=Wu(t),fd(t)}var eu=null;function fd(t){if(eu=null,t=we(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return eu=t,null}function _v(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ht()){case Dt:return 2;case Gt:return 8;case Ct:case bt:return 32;case Ot:return 268435456;default:return 32}default:return 32}}var hd=!1,ls=null,cs=null,us=null,dl=new Map,pl=new Map,fs=[],OM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function vv(t,n){switch(t){case"focusin":case"focusout":ls=null;break;case"dragenter":case"dragleave":cs=null;break;case"mouseover":case"mouseout":us=null;break;case"pointerover":case"pointerout":dl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":pl.delete(n.pointerId)}}function ml(t,n,a,r,c,u){return t===null||t.nativeEvent!==u?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:u,targetContainers:[c]},n!==null&&(n=He(n),n!==null&&mv(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function PM(t,n,a,r,c){switch(n){case"focusin":return ls=ml(ls,t,n,a,r,c),!0;case"dragenter":return cs=ml(cs,t,n,a,r,c),!0;case"mouseover":return us=ml(us,t,n,a,r,c),!0;case"pointerover":var u=c.pointerId;return dl.set(u,ml(dl.get(u)||null,t,n,a,r,c)),!0;case"gotpointercapture":return u=c.pointerId,pl.set(u,ml(pl.get(u)||null,t,n,a,r,c)),!0}return!1}function xv(t){var n=we(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,et(t.priority,function(){gv(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,et(t.priority,function(){gv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=ud(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);qu=r,a.target.dispatchEvent(r),qu=null}else return n=He(a),n!==null&&mv(n),t.blockedOn=a,!1;n.shift()}return!0}function Sv(t,n,a){nu(t)&&a.delete(n)}function IM(){hd=!1,ls!==null&&nu(ls)&&(ls=null),cs!==null&&nu(cs)&&(cs=null),us!==null&&nu(us)&&(us=null),dl.forEach(Sv),pl.forEach(Sv)}function iu(t,n){t.blockedOn===n&&(t.blockedOn=null,hd||(hd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,IM)))}var au=null;function yv(t){au!==t&&(au=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){au===t&&(au=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],c=t[n+2];if(typeof r!="function"){if(fd(r||a)===null)continue;break}var u=He(a);u!==null&&(t.splice(n,3),n-=3,qf(u,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function Zr(t){function n(B){return iu(B,t)}ls!==null&&iu(ls,t),cs!==null&&iu(cs,t),us!==null&&iu(us,t),dl.forEach(n),pl.forEach(n);for(var a=0;a<fs.length;a++){var r=fs[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<fs.length&&(a=fs[0],a.blockedOn===null);)xv(a),a.blockedOn===null&&fs.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],u=a[r+1],v=c[nt]||null;if(typeof u=="function")v||yv(a);else if(v){var T=null;if(u&&u.hasAttribute("formAction")){if(c=u,v=u[nt]||null)T=v.formAction;else if(fd(c)!==null)continue}else T=v.action;typeof T=="function"?a[r+1]=T:(a.splice(r,3),r-=3),yv(a)}}}function Mv(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(v){return c=v})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function dd(t){this._internalRoot=t}su.prototype.render=dd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=pi();dv(a,r,t,n,null,null)},su.prototype.unmount=dd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;dv(t.current,2,null,t,null,null),kc(),n[Lt]=null}};function su(t){this._internalRoot=t}su.prototype.unstable_scheduleHydration=function(t){if(t){var n=C();t={blockedOn:null,target:t,priority:n};for(var a=0;a<fs.length&&n!==0&&n<fs[a].priority;a++);fs.splice(a,0,t),a===0&&xv(t)}};var bv=e.version;if(bv!=="19.3.1")throw Error(s(527,bv,"19.3.1"));Nt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=g(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var zM={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:St,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{Ne=ru.inject(zM),tn=ru}catch{}}return _l.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",c=hg,u=dg,v=pg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=fv(t,1,!1,null,null,a,r,null,c,u,v,Mv),t[Lt]=n.current,kh(t),new dd(n)},_l.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,c="",u=hg,v=dg,T=pg,B=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=fv(t,1,!0,n,a??null,r,c,B,u,v,T,Mv),n.context=hv(null),a=n.current,r=pi(),r=Ao(r),c=Za(r),c.callback=null,Ka(a,c,r),a=r,n.current.lanes=a,Ba(n,a),ta(n),t[Lt]=n.current,kh(t),new su(n)},_l.version="19.3.1",_l}var Lv;function KM(){if(Lv)return gd.exports;Lv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),gd.exports=ZM(),gd.exports}var QM=KM();const JM=Zx(QM);var $p={};(function o(e,i,s,l){var f=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),h=typeof Path2D=="function"&&typeof DOMMatrix=="function",d=(function(){if(!e.OffscreenCanvas)return!1;try{var G=new OffscreenCanvas(1,1),z=G.getContext("2d");z.fillRect(0,0,1,1);var Et=G.transferToImageBitmap();z.createPattern(Et,"no-repeat")}catch{return!1}return!0})();function p(){}function g(G){var z=i.exports.Promise,Et=z!==void 0?z:e.Promise;return typeof Et=="function"?new Et(G):(G(p,p),null)}var _=(function(G,z){return{transform:function(Et){if(G)return Et;if(z.has(Et))return z.get(Et);var Rt=new OffscreenCanvas(Et.width,Et.height),F=Rt.getContext("2d");return F.drawImage(Et,0,0),z.set(Et,Rt),Rt},clear:function(){z.clear()}}})(d,new Map),m=(function(){var G=Math.floor(16.666666666666668),z,Et,Rt={},F=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(z=function(rt){var Y=Math.random();return Rt[Y]=requestAnimationFrame(function W(mt){F===mt||F+G-1<mt?(F=mt,delete Rt[Y],rt()):Rt[Y]=requestAnimationFrame(W)}),Y},Et=function(rt){Rt[rt]&&cancelAnimationFrame(Rt[rt])}):(z=function(rt){return setTimeout(rt,G)},Et=function(rt){return clearTimeout(rt)}),{frame:z,cancel:Et}})(),x=(function(){var G,z,Et={};function Rt(F){function rt(Y,W){F.postMessage({options:Y||{},callback:W})}F.init=function(W){var mt=W.transferControlToOffscreen();F.postMessage({canvas:mt},[mt])},F.fire=function(W,mt,Tt){if(z)return rt(W,null),z;var yt=Math.random().toString(36).slice(2);return z=g(function(St){function Nt(te){te.data.callback===yt&&(delete Et[yt],F.removeEventListener("message",Nt),z=null,_.clear(),Tt(),St())}F.addEventListener("message",Nt),rt(W,yt),Et[yt]=Nt.bind(null,{data:{callback:yt}})}),z},F.reset=function(){F.postMessage({reset:!0});for(var W in Et)Et[W](),delete Et[W]}}return function(){if(G)return G;if(!s&&f){var F=["var CONFETTI, SIZE = {}, module = {};","("+o.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{G=new Worker(URL.createObjectURL(new Blob([F])))}catch(rt){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",rt),null}Rt(G)}return G}})(),y={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function E(G,z){return z?z(G):G}function R(G){return G!=null}function M(G,z,Et){return E(G&&R(G[z])?G[z]:y[z],Et)}function S(G){return G<0?0:Math.floor(G)}function P(G,z){return Math.floor(Math.random()*(z-G))+G}function H(G){return parseInt(G,16)}function O(G){return G.map(I)}function I(G){var z=String(G).replace(/[^0-9a-f]/gi,"");return z.length<6&&(z=z[0]+z[0]+z[1]+z[1]+z[2]+z[2]),{r:H(z.substring(0,2)),g:H(z.substring(2,4)),b:H(z.substring(4,6))}}function D(G){var z=M(G,"origin",Object);return z.x=M(z,"x",Number),z.y=M(z,"y",Number),z}function N(G){G.width=document.documentElement.clientWidth,G.height=document.documentElement.clientHeight}function X(G){var z=G.getBoundingClientRect();G.width=z.width,G.height=z.height}function A(G){var z=document.createElement("canvas");return z.style.position="fixed",z.style.top="0px",z.style.left="0px",z.style.pointerEvents="none",z.style.zIndex=G,z}function w(G,z,Et,Rt,F,rt,Y,W,mt){G.save(),G.translate(z,Et),G.rotate(rt),G.scale(Rt,F),G.arc(0,0,1,Y,W,mt),G.restore()}function k(G){var z=G.angle*(Math.PI/180),Et=G.spread*(Math.PI/180);return{x:G.x,y:G.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:G.startVelocity*.5+Math.random()*G.startVelocity,angle2D:-z+(.5*Et-Math.random()*Et),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:G.color,shape:G.shape,tick:0,totalTicks:G.ticks,decay:G.decay,drift:G.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:G.gravity*3,ovalScalar:.6,scalar:G.scalar,flat:G.flat}}function st(G,z){z.x+=Math.cos(z.angle2D)*z.velocity+z.drift,z.y+=Math.sin(z.angle2D)*z.velocity+z.gravity,z.velocity*=z.decay,z.flat?(z.wobble=0,z.wobbleX=z.x+10*z.scalar,z.wobbleY=z.y+10*z.scalar,z.tiltSin=0,z.tiltCos=0,z.random=1):(z.wobble+=z.wobbleSpeed,z.wobbleX=z.x+10*z.scalar*Math.cos(z.wobble),z.wobbleY=z.y+10*z.scalar*Math.sin(z.wobble),z.tiltAngle+=.1,z.tiltSin=Math.sin(z.tiltAngle),z.tiltCos=Math.cos(z.tiltAngle),z.random=Math.random()+2);var Et=z.tick++/z.totalTicks,Rt=z.x+z.random*z.tiltCos,F=z.y+z.random*z.tiltSin,rt=z.wobbleX+z.random*z.tiltCos,Y=z.wobbleY+z.random*z.tiltSin;if(G.fillStyle="rgba("+z.color.r+", "+z.color.g+", "+z.color.b+", "+(1-Et)+")",G.beginPath(),h&&z.shape.type==="path"&&typeof z.shape.path=="string"&&Array.isArray(z.shape.matrix))G.fill(K(z.shape.path,z.shape.matrix,z.x,z.y,Math.abs(rt-Rt)*.1,Math.abs(Y-F)*.1,Math.PI/10*z.wobble));else if(z.shape.type==="bitmap"){var W=Math.PI/10*z.wobble,mt=Math.abs(rt-Rt)*.1,Tt=Math.abs(Y-F)*.1,yt=z.shape.bitmap.width*z.scalar,St=z.shape.bitmap.height*z.scalar,Nt=new DOMMatrix([Math.cos(W)*mt,Math.sin(W)*mt,-Math.sin(W)*Tt,Math.cos(W)*Tt,z.x,z.y]);Nt.multiplySelf(new DOMMatrix(z.shape.matrix));var te=G.createPattern(_.transform(z.shape.bitmap),"no-repeat");te.setTransform(Nt),G.globalAlpha=1-Et,G.fillStyle=te,G.fillRect(z.x-yt/2,z.y-St/2,yt,St),G.globalAlpha=1}else if(z.shape==="circle")G.ellipse?G.ellipse(z.x,z.y,Math.abs(rt-Rt)*z.ovalScalar,Math.abs(Y-F)*z.ovalScalar,Math.PI/10*z.wobble,0,2*Math.PI):w(G,z.x,z.y,Math.abs(rt-Rt)*z.ovalScalar,Math.abs(Y-F)*z.ovalScalar,Math.PI/10*z.wobble,0,2*Math.PI);else if(z.shape==="star")for(var qt=Math.PI/2*3,le=4*z.scalar,$t=8*z.scalar,re=z.x,V=z.y,Me=5,ue=Math.PI/Me;Me--;)re=z.x+Math.cos(qt)*$t,V=z.y+Math.sin(qt)*$t,G.lineTo(re,V),qt+=ue,re=z.x+Math.cos(qt)*le,V=z.y+Math.sin(qt)*le,G.lineTo(re,V),qt+=ue;else G.moveTo(Math.floor(z.x),Math.floor(z.y)),G.lineTo(Math.floor(z.wobbleX),Math.floor(F)),G.lineTo(Math.floor(rt),Math.floor(Y)),G.lineTo(Math.floor(Rt),Math.floor(z.wobbleY));return G.closePath(),G.fill(),z.tick<z.totalTicks}function it(G,z,Et,Rt,F){var rt=z.slice(),Y=G.getContext("2d"),W,mt,Tt=g(function(yt){function St(){W=mt=null,Y.clearRect(0,0,Rt.width,Rt.height),_.clear(),F(),yt()}function Nt(){s&&!(Rt.width===l.width&&Rt.height===l.height)&&(Rt.width=G.width=l.width,Rt.height=G.height=l.height),!Rt.width&&!Rt.height&&(Et(G),Rt.width=G.width,Rt.height=G.height),Y.clearRect(0,0,Rt.width,Rt.height),rt=rt.filter(function(te){return st(Y,te)}),rt.length?W=m.frame(Nt):St()}W=m.frame(Nt),mt=St});return{addFettis:function(yt){return rt=rt.concat(yt),Tt},canvas:G,promise:Tt,reset:function(){W&&m.cancel(W),mt&&mt()}}}function pt(G,z){var Et=!G,Rt=!!M(z||{},"resize"),F=!1,rt=M(z,"disableForReducedMotion",Boolean),Y=f&&!!M(z||{},"useWorker"),W=Y?x():null,mt=Et?N:X,Tt=G&&W?!!G.__confetti_initialized:!1,yt=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,St;function Nt(qt,le,$t){for(var re=M(qt,"particleCount",S),V=M(qt,"angle",Number),Me=M(qt,"spread",Number),ue=M(qt,"startVelocity",Number),Te=M(qt,"decay",Number),Wt=M(qt,"gravity",Number),L=M(qt,"drift",Number),b=M(qt,"colors",O),J=M(qt,"ticks",Number),_t=M(qt,"shapes"),Mt=M(qt,"scalar"),gt=!!M(qt,"flat"),kt=D(qt),Ut=re,jt=[],se=G.width*kt.x,wt=G.height*kt.y;Ut--;)jt.push(k({x:se,y:wt,angle:V,spread:Me,startVelocity:ue,color:b[Ut%b.length],shape:_t[P(0,_t.length)],ticks:J,decay:Te,gravity:Wt,drift:L,scalar:Mt,flat:gt}));return St?St.addFettis(jt):(St=it(G,jt,mt,le,$t),St.promise)}function te(qt){var le=rt||M(qt,"disableForReducedMotion",Boolean),$t=M(qt,"zIndex",Number);if(le&&yt)return g(function(ue){ue()});Et&&St?G=St.canvas:Et&&!G&&(G=A($t),document.body.appendChild(G)),Rt&&!Tt&&mt(G);var re={width:G.width,height:G.height};W&&!Tt&&W.init(G),Tt=!0,W&&(G.__confetti_initialized=!0);function V(){if(W){var ue={getBoundingClientRect:function(){if(!Et)return G.getBoundingClientRect()}};mt(ue),W.postMessage({resize:{width:ue.width,height:ue.height}});return}re.width=re.height=null}function Me(){St=null,Rt&&(F=!1,e.removeEventListener("resize",V)),Et&&G&&(document.body.contains(G)&&document.body.removeChild(G),G=null,Tt=!1)}return Rt&&!F&&(F=!0,e.addEventListener("resize",V,!1)),W?W.fire(qt,re,Me):Nt(qt,re,Me)}return te.reset=function(){W&&W.reset(),St&&St.reset()},te}var dt;function Z(){return dt||(dt=pt(null,{useWorker:!0,resize:!0})),dt}function K(G,z,Et,Rt,F,rt,Y){var W=new Path2D(G),mt=new Path2D;mt.addPath(W,new DOMMatrix(z));var Tt=new Path2D;return Tt.addPath(mt,new DOMMatrix([Math.cos(Y)*F,Math.sin(Y)*F,-Math.sin(Y)*rt,Math.cos(Y)*rt,Et,Rt])),Tt}function ft(G){if(!h)throw new Error("path confetti are not supported in this browser");var z,Et;typeof G=="string"?z=G:(z=G.path,Et=G.matrix);var Rt=new Path2D(z),F=document.createElement("canvas"),rt=F.getContext("2d");if(!Et){for(var Y=1e3,W=Y,mt=Y,Tt=0,yt=0,St,Nt,te=0;te<Y;te+=2)for(var qt=0;qt<Y;qt+=2)rt.isPointInPath(Rt,te,qt,"nonzero")&&(W=Math.min(W,te),mt=Math.min(mt,qt),Tt=Math.max(Tt,te),yt=Math.max(yt,qt));St=Tt-W,Nt=yt-mt;var le=10,$t=Math.min(le/St,le/Nt);Et=[$t,0,0,$t,-Math.round(St/2+W)*$t,-Math.round(Nt/2+mt)*$t]}return{type:"path",path:z,matrix:Et}}function At(G){var z,Et=1,Rt="#000000",F='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof G=="string"?z=G:(z=G.text,Et="scalar"in G?G.scalar:Et,F="fontFamily"in G?G.fontFamily:F,Rt="color"in G?G.color:Rt);var rt=10*Et,Y=""+rt+"px "+F,W=new OffscreenCanvas(rt,rt),mt=W.getContext("2d");mt.font=Y;var Tt=mt.measureText(z),yt=Math.ceil(Tt.actualBoundingBoxRight+Tt.actualBoundingBoxLeft),St=Math.ceil(Tt.actualBoundingBoxAscent+Tt.actualBoundingBoxDescent),Nt=2,te=Tt.actualBoundingBoxLeft+Nt,qt=Tt.actualBoundingBoxAscent+Nt;yt+=Nt+Nt,St+=Nt+Nt,W=new OffscreenCanvas(yt,St),mt=W.getContext("2d"),mt.font=Y,mt.fillStyle=Rt,mt.fillText(z,te,qt);var le=1/Et;return{type:"bitmap",bitmap:W.transferToImageBitmap(),matrix:[le,0,0,le,-yt*le/2,-St*le/2]}}i.exports=function(){return Z().apply(this,arguments)},i.exports.reset=function(){Z().reset()},i.exports.create=pt,i.exports.shapeFromPath=ft,i.exports.shapeFromText=At})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),$p,!1);const Ov=$p.exports;$p.exports.create;const Kx=[{id:"retro-beige",name:"Retro Beige (Classic 9009)",description:"Iconic IBM vintage beige with muted sage green and terracotta accents.",alphas:{bg:"#e6dfd1",text:"#2d2b28"},modifiers:{bg:"#cfc4b2",text:"#2d2b28"},accents:{bg:"#7d9d85",text:"#ffffff"},space:{bg:"#e6dfd1",text:"#2d2b28"},caseColor:"#ded5c5",caseMaterial:"retro-beige"},{id:"cyberpunk",name:"Cyberpunk Neon",description:"High-contrast futuristic aesthetic with radiant neon pink, cyan, and deep purple.",alphas:{bg:"#1c1033",text:"#00f0ff"},modifiers:{bg:"#2b0c4a",text:"#ff007f"},accents:{bg:"#ff007f",text:"#0c061a"},space:{bg:"#00f0ff",text:"#0c061a"},caseColor:"#120824",caseMaterial:"aluminum"},{id:"gmk-dolch",name:"GMK Dolch",description:"Timeless slate and charcoal gray profile with distinctive cyan accent keys.",alphas:{bg:"#54595f",text:"#ffffff"},modifiers:{bg:"#2f343b",text:"#ffffff"},accents:{bg:"#009bb3",text:"#ffffff"},space:{bg:"#54595f",text:"#ffffff"},caseColor:"#1e2024",caseMaterial:"matte"},{id:"olivia",name:"GMK Olivia",description:"Elegant dual-tone dark charcoal, crisp off-white, and soft rose gold.",alphas:{bg:"#f5f3ee",text:"#2e2e2e"},modifiers:{bg:"#2e2e2e",text:"#eed6cc"},accents:{bg:"#e8a598",text:"#2e2e2e"},space:{bg:"#e8a598",text:"#2e2e2e"},caseColor:"#1a1a1a",caseMaterial:"aluminum"},{id:"botanical",name:"GMK Botanical",description:"Soothing organic forest palette with jungle moss, fern green, and crisp mint.",alphas:{bg:"#e7ece8",text:"#314438"},modifiers:{bg:"#506758",text:"#e7ece8"},accents:{bg:"#86a892",text:"#19261f"},space:{bg:"#e7ece8",text:"#314438"},caseColor:"#202c25",caseMaterial:"matte"},{id:"dracula",name:"Dracula Theme",description:"Beloved dark coding theme with purple, cyan, neon green, and pink highlights.",alphas:{bg:"#282a36",text:"#f8f8f2"},modifiers:{bg:"#44475a",text:"#f8f8f2"},accents:{bg:"#ff79c6",text:"#282a36"},space:{bg:"#bd93f9",text:"#282a36"},caseColor:"#1e1f29",caseMaterial:"matte"},{id:"carbon",name:"Carbon Orange",description:"Industrial technical styling with warm gray alphas, bone modifier, and vibrant orange.",alphas:{bg:"#c9beb0",text:"#2b2927"},modifiers:{bg:"#42454b",text:"#ea6d20"},accents:{bg:"#ea6d20",text:"#ffffff"},space:{bg:"#ea6d20",text:"#ffffff"},caseColor:"#2b2d31",caseMaterial:"aluminum"},{id:"red-samurai",name:"Red Samurai",description:"Feudal Japanese grandeur with deep imperial burgundy, dark grey, and rich gold.",alphas:{bg:"#5e1923",text:"#d9a74a"},modifiers:{bg:"#2b2b2e",text:"#d9a74a"},accents:{bg:"#d9a74a",text:"#2b2b2e"},space:{bg:"#5e1923",text:"#d9a74a"},caseColor:"#1b1b1c",caseMaterial:"aluminum"}],$M=[{name:"Anodized Black",hex:"#161719",material:"aluminum"},{name:"Space Gray",hex:"#373a40",material:"aluminum"},{name:"E-White",hex:"#f0f2f5",material:"e-white"},{name:"Midnight Navy",hex:"#162238",material:"aluminum"},{name:"Forest Green",hex:"#1c2e24",material:"matte"},{name:"Rose Gold",hex:"#b77b73",material:"aluminum"},{name:"Vintage Beige",hex:"#ded5c5",material:"retro-beige"},{name:"Frosted Polycarb",hex:"#dce5ed",material:"polycarbonate"}],tb=[{name:"Brushed Brass",hex:"#d4af37"},{name:"Anodized Aluminum (Silver)",hex:"#c5c8cf"},{name:"Matte Black Aluminum",hex:"#1e2024"},{name:"FR4 Black & Gold",hex:"#141414"},{name:"Polycarbonate Clear",hex:"#e8edf2"}],$d=[{id:"cherry-red",name:"Cherry MX Red (Linear)",stemColor:"#d62828",housingColor:"#111111"},{id:"cherry-blue",name:"Cherry MX Blue (Clicky)",stemColor:"#0077b6",housingColor:"#111111"},{id:"cherry-brown",name:"Cherry MX Brown (Tactile)",stemColor:"#8a5a36",housingColor:"#111111"},{id:"gateron-yellow",name:"Gateron Yellow (Smooth Linear)",stemColor:"#ffb703",housingColor:"#2b2d42"},{id:"boba-u4t",name:"Gazzew Boba U4T (Thocky Tactile)",stemColor:"#ffffff",housingColor:"#d8b08c"}],eb=["#f8f9fa","#e9ecef","#dee2e6","#ced4da","#adb5bd","#6c757d","#495057","#343a40","#212529","#0d1117","#ff4d4f","#ff7875","#f5222d","#fa541c","#fa8c16","#faad14","#fadb14","#52c41a","#13c2c2","#1890ff","#2f54eb","#722ed1","#eb2f96","#ff007f","#00f0ff","#ffe600","#e8a598","#86a892","#d4af37","#7d9d85"];function nr(o,e){const i=e==="iso-de",s=[],l=(S,P,H,O,I,D,N,X,A,w,k)=>{s.push({id:S,code:P,label:H,x:O,y:I,w:D,h:N,shape:(k==null?void 0:k.shape)||"normal",zone:X,legends:{"iso-de":{main:A,sub:k==null?void 0:k.deSub,altGr:k==null?void 0:k.deAltGr},"ansi-us":{main:w,sub:k==null?void 0:k.usSub}}})};(o==="100%"||o==="tkl"||o==="75%")&&(l("esc","Escape","ESC",0,0,1,1,"modifiers","ESC","ESC"),o==="75%"?([["f1","F1","F1"],["f2","F2","F2"],["f3","F3","F3"],["f4","F4","F4"],["f5","F5","F5"],["f6","F6","F6"],["f7","F7","F7"],["f8","F8","F8"],["f9","F9","F9"],["f10","F10","F10"],["f11","F11","F11"],["f12","F12","F12"]].forEach(([H,O,I],D)=>{l(H,O,I,1+D,0,1,1,"f_row",I,I)}),l("del_top","Delete","DEL",13,0,1,1,"nav","ENTF","DEL"),l("nav_top_extra","PrintScreen","PRT",14,0,1,1,"nav","DRUCK","PSCR")):(["F1","F2","F3","F4"].forEach((I,D)=>l(`f${D+1}`,I,I,2+D,0,1,1,"f_row",I,I)),["F5","F6","F7","F8"].forEach((I,D)=>l(`f${D+5}`,I,I,6.5+D,0,1,1,"f_row",I,I)),["F9","F10","F11","F12"].forEach((I,D)=>l(`f${D+9}`,I,I,11+D,0,1,1,"f_row",I,I)),l("prt","PrintScreen","PRT",15.25,0,1,1,"nav","DRUCK","PRT"),l("scrl","ScrollLock","SCRL",16.25,0,1,1,"nav","ROLLEN","SCRL"),l("pause","Pause","PAUSE",17.25,0,1,1,"nav","PAUSE","PAUSE")));const d=o==="100%"||o==="tkl"||o==="75%"?o==="75%"?1:1.35:0,p=d+1,g=p+1,_=g+1,m=_+1;if(o==="40%")return l("tab_40","Tab","TAB",0,0,1.25,1,"modifiers","TAB","TAB"),(i?["Q","W","E","R","T","Z","U","I","O","P"]:["Q","W","E","R","T","Y","U","I","O","P"]).forEach((O,I)=>{l(`r1_k${I}`,`Key${O}`,O,1.25+I,0,1,1,"alphas",O,O)}),l("backspace_40","Backspace","BKSP",11.25,0,1.25,1,"modifiers","⌫","⌫"),l("caps_40","CapsLock","CAPS",0,1,1.5,1,"modifiers","CAPS","CAPS"),["A","S","D","F","G","H","J","K","L"].forEach((O,I)=>{l(`r2_k${I}`,`Key${O}`,O,1.5+I,1,1,1,"alphas",O,O)}),i?(l("oe_40","Semicolon","Ö",10.5,1,1,1,"alphas","Ö",";"),l("enter_40","Enter","ENTER",11.5,1,1,1,"modifiers","⏎","⏎")):l("enter_40","Enter","ENTER",10.5,1,2,1,"modifiers","ENTER","ENTER"),l("lshift_40","ShiftLeft","SHIFT",0,2,1.75,1,"modifiers","SHIFT","SHIFT"),(i?["Y","X","C","V","B","N","M"]:["Z","X","C","V","B","N","M"]).forEach((O,I)=>{l(`r3_k${I}`,`Key${O}`,O,1.75+I,2,1,1,"alphas",O,O)}),l("r3_p1_40","Comma",",",8.75,2,1,1,"alphas",",",","),l("r3_p2_40","Period",".",9.75,2,1,1,"alphas",".","."),l("rshift_40","ShiftRight","SHIFT",10.75,2,1.75,1,"modifiers","SHIFT","SHIFT"),l("lctrl_40","ControlLeft","CTRL",0,3,1.25,1,"modifiers","STRG","CTRL"),l("lopt_40","AltLeft","ALT",1.25,3,1.25,1,"modifiers","ALT","ALT"),l("fn1_40","Fn","FN1",2.5,3,1.25,1,"modifiers","FN1","FN1"),l("space_40","Space","SPACE",3.75,3,6.25,1,"space","SPACE","SPACE"),l("fn2_40","Fn2","FN2",10,3,1.25,1,"modifiers","FN2","FN2"),l("rctrl_40","ControlRight","CTRL",11.25,3,1.25,1,"modifiers","STRG","CTRL"),s;i?l("grave","Backquote","^",0,d,1,1,"alphas","^","`",{deSub:"°",usSub:"~"}):l("grave","Backquote","`",0,d,1,1,"alphas","`","`",{deSub:"~",usSub:"~"}),[{num:"1",deSub:"!",usSub:"!",deAltGr:""},{num:"2",deSub:'"',usSub:"@",deAltGr:"²"},{num:"3",deSub:"§",usSub:"#",deAltGr:"³"},{num:"4",deSub:"$",usSub:"$",deAltGr:""},{num:"5",deSub:"%",usSub:"%",deAltGr:""},{num:"6",deSub:"&",usSub:"^",deAltGr:""},{num:"7",deSub:"/",usSub:"&",deAltGr:"{"},{num:"8",deSub:"(",usSub:"*",deAltGr:"["},{num:"9",deSub:")",usSub:"(",deAltGr:"]"},{num:"0",deSub:"=",usSub:")",deAltGr:"}"}].forEach((S,P)=>{l(`num_${S.num}`,`Digit${S.num}`,S.num,1+P,d,1,1,"alphas",S.num,S.num,{deSub:S.deSub,usSub:S.usSub,deAltGr:S.deAltGr})}),i?(l("minus","Minus","ß",11,d,1,1,"alphas","ß","-",{deSub:"?",usSub:"_",deAltGr:"\\"}),l("equal","Equal","´",12,d,1,1,"alphas","´","=",{deSub:"`",usSub:"+"})):(l("minus","Minus","-",11,d,1,1,"alphas","-","-",{deSub:"_",usSub:"_"}),l("equal","Equal","=",12,d,1,1,"alphas","=","=",{deSub:"+",usSub:"+"})),l("bsp","Backspace","BKSP",13,d,2,1,"modifiers","⌫","BACKSPACE"),l("tab","Tab","TAB",0,p,1.5,1,"modifiers","TAB","TAB"),[{de:"Q",us:"Q",altGr:"@"},{de:"W",us:"W"},{de:"E",us:"E",altGr:"€"},{de:"R",us:"R"},{de:"T",us:"T"},{de:"Z",us:"Y"},{de:"U",us:"U"},{de:"I",us:"I"},{de:"O",us:"O"},{de:"P",us:"P"},{de:"Ü",us:"[",usSub:"{"},{de:"+",us:"]",deSub:"*",deAltGr:"~",usSub:"}"}].forEach((S,P)=>{const O=P===5?i?"KeyZ":"KeyY":`Key${S.us}`;l(`r2_k${P}`,O,i?S.de:S.us,1.5+P,p,1,1,"alphas",S.de,S.us,{deSub:S.deSub,usSub:S.usSub,deAltGr:S.altGr})}),i||l("backslash","Backslash","\\",13.5,p,1.5,1,"alphas","\\","\\",{usSub:"|"}),l("caps","CapsLock","CAPS",0,g,1.75,1,"modifiers","CAPS LOCK","CAPS LOCK"),[{de:"A",us:"A"},{de:"S",us:"S"},{de:"D",us:"D"},{de:"F",us:"F"},{de:"G",us:"G"},{de:"H",us:"H"},{de:"J",us:"J"},{de:"K",us:"K"},{de:"L",us:"L"},{de:"Ö",us:";",usSub:":"},{de:"Ä",us:"'",usSub:'"'}].forEach((S,P)=>{l(`r3_k${P}`,`Key${S.us}`,i?S.de:S.us,1.75+P,g,1,1,"alphas",S.de,S.us,{usSub:S.usSub})}),i?(l("hash","Backslash","#",12.75,g,1,1,"alphas","#","#",{deSub:"'"}),l("enter","Enter","ENTER",13.75,p,1.25,2,"modifiers","ENTER","ENTER",{shape:"iso_enter"})):l("enter","Enter","ENTER",12.75,g,2.25,1,"modifiers","ENTER","ENTER"),i?(l("lshift","ShiftLeft","SHIFT",0,_,1.25,1,"modifiers","SHIFT","SHIFT"),l("less_than","IntlBackslash","<",1.25,_,1,1,"alphas","<","<",{deSub:">",deAltGr:"|"})):l("lshift","ShiftLeft","SHIFT",0,_,2.25,1,"modifiers","SHIFT","SHIFT");const R=2.25;return[{de:"Y",us:"Z"},{de:"X",us:"X"},{de:"C",us:"C"},{de:"V",us:"V"},{de:"B",us:"B"},{de:"N",us:"N"},{de:"M",us:"M",altGr:"µ"},{de:",",us:",",deSub:";",usSub:"<"},{de:".",us:".",deSub:":",usSub:">"},{de:"-",us:"/",deSub:"_",usSub:"?"}].forEach((S,P)=>{const O=P===0?i?"KeyY":"KeyZ":`Key${S.us}`;l(`r4_k${P}`,O,i?S.de:S.us,R+P,_,1,1,"alphas",S.de,S.us,{deSub:S.deSub,usSub:S.usSub,deAltGr:S.altGr})}),o==="65%"||o==="75%"?(l("rshift","ShiftRight","SHIFT",12.25,_,1.75,1,"modifiers","SHIFT","SHIFT"),l("up","ArrowUp","↑",14,_,1,1,"arrows","▲","▲")):l("rshift","ShiftRight","SHIFT",12.25,_,2.75,1,"modifiers","SHIFT","SHIFT"),o==="65%"||o==="75%"?(l("lctrl","ControlLeft","CTRL",0,m,1.25,1,"modifiers","STRG","CTRL"),l("lwin","MetaLeft","WIN",1.25,m,1.25,1,"modifiers","WIN","WIN"),l("lalt","AltLeft","ALT",2.5,m,1.25,1,"modifiers","ALT","ALT"),l("space","Space","SPACE",3.75,m,6.25,1,"space","SPACE","SPACE"),l("ralt","AltRight","ALT_GR",10,m,1,1,"modifiers","ALT GR","ALT"),l("fn","Fn","FN",11,m,1,1,"modifiers","FN","FN"),l("rctrl","ControlRight","CTRL",12,m,1,1,"modifiers","STRG","CTRL"),l("left","ArrowLeft","←",13,m,1,1,"arrows","◄","◄"),l("down","ArrowDown","↓",14,m,1,1,"arrows","▼","▼"),l("right","ArrowRight","→",15,m,1,1,"arrows","►","►")):(l("lctrl","ControlLeft","CTRL",0,m,1.25,1,"modifiers","STRG","CTRL"),l("lwin","MetaLeft","WIN",1.25,m,1.25,1,"modifiers","WIN","WIN"),l("lalt","AltLeft","ALT",2.5,m,1.25,1,"modifiers","ALT","ALT"),l("space","Space","SPACE",3.75,m,6.25,1,"space","SPACE","SPACE"),l("ralt","AltRight","ALT_GR",10,m,1.25,1,"modifiers","ALT GR","ALT"),l("rwin","MetaRight","WIN",11.25,m,1.25,1,"modifiers","WIN","WIN"),l("menu","ContextMenu","MENU",12.5,m,1.25,1,"modifiers","MENÜ","MENU"),l("rctrl","ControlRight","CTRL",13.75,m,1.25,1,"modifiers","STRG","CTRL")),o==="65%"?(l("nav_del","Delete","DEL",15,d,1,1,"nav","ENTF","DEL"),l("nav_pgup","PageUp","PGUP",15,p,1,1,"nav","BILD ▲","PGUP"),l("nav_pgdn","PageDown","PGDN",15,g,1,1,"nav","BILD ▼","PGDN"),l("nav_end","End","END",15,_,1,1,"nav","ENDE","END")):o==="75%"&&(l("nav_del","Delete","DEL",15,d,1,1,"nav","ENTF","DEL"),l("nav_home","Home","HOME",15,p,1,1,"nav","POS1","HOME"),l("nav_pgup","PageUp","PGUP",15,g,1,1,"nav","BILD ▲","PGUP"),l("nav_pgdn","PageDown","PGDN",15,_,1,1,"nav","BILD ▼","PGDN")),(o==="tkl"||o==="100%")&&(l("ins","Insert","INS",15.25,d,1,1,"nav","EINF","INS"),l("home","Home","HOME",15.25+1,d,1,1,"nav","POS1","HOME"),l("pgup","PageUp","PGUP",15.25+2,d,1,1,"nav","BILD ▲","PGUP"),l("del","Delete","DEL",15.25,p,1,1,"nav","ENTF","DEL"),l("end","End","END",15.25+1,p,1,1,"nav","ENDE","END"),l("pgdn","PageDown","PGDN",15.25+2,p,1,1,"nav","BILD ▼","PGDN"),l("up","ArrowUp","↑",15.25+1,_,1,1,"arrows","▲","▲"),l("left","ArrowLeft","←",15.25,m,1,1,"arrows","◄","◄"),l("down","ArrowDown","↓",15.25+1,m,1,1,"arrows","▼","▼"),l("right","ArrowRight","→",15.25+2,m,1,1,"arrows","►","►")),o==="100%"&&(l("np_calc","LaunchApp2","CALC",18.75,0,1,1,"numpad","CALC","CALC"),l("np_mute","AudioVolumeMute","MUTE",18.75+1,0,1,1,"numpad","MUTE","MUTE"),l("np_vol_dn","AudioVolumeDown","VOL-",18.75+2,0,1,1,"numpad","VOL-","VOL-"),l("np_vol_up","AudioVolumeUp","VOL+",18.75+3,0,1,1,"numpad","VOL+","VOL+"),l("np_lock","NumLock","NUM",18.75,d,1,1,"numpad","NUM","NUM"),l("np_div","NumpadDivide","/",18.75+1,d,1,1,"numpad","/","/"),l("np_mul","NumpadMultiply","*",18.75+2,d,1,1,"numpad","*","*"),l("np_sub","NumpadSubtract","-",18.75+3,d,1,1,"numpad","-","-"),l("np_7","Numpad7","7",18.75,p,1,1,"numpad","7","7"),l("np_8","Numpad8","8",18.75+1,p,1,1,"numpad","8","8"),l("np_9","Numpad9","9",18.75+2,p,1,1,"numpad","9","9"),l("np_add","NumpadAdd","+",18.75+3,p,1,2,"numpad","+","+"),l("np_4","Numpad4","4",18.75,g,1,1,"numpad","4","4"),l("np_5","Numpad5","5",18.75+1,g,1,1,"numpad","5","5"),l("np_6","Numpad6","6",18.75+2,g,1,1,"numpad","6","6"),l("np_1","Numpad1","1",18.75,_,1,1,"numpad","1","1"),l("np_2","Numpad2","2",18.75+1,_,1,1,"numpad","2","2"),l("np_3","Numpad3","3",18.75+2,_,1,1,"numpad","3","3"),l("np_enter","NumpadEnter","ENTER",18.75+3,_,1,2,"numpad","ENTER","ENTER"),l("np_0","Numpad0","0",18.75,m,2,1,"numpad","0","0"),l("np_dec","NumpadDecimal",i?",":".",18.75+2,m,1,1,"numpad",",",".")),s}function tp(o){let e=0,i=0;for(const s of o){const l=s.x+s.w,f=s.y+s.h;l>e&&(e=l),f>i&&(i=f)}return{width:e,height:i}}function ep(o){let e=o.replace("#","");e.length===3&&(e=e.split("").map(s=>s+s).join(""));const i=parseInt(e,16);return{r:i>>16&255,g:i>>8&255,b:i&255}}function nb(o,e,i){const s=l=>Math.max(0,Math.min(255,Math.round(l)));return"#"+[s(o),s(e),s(i)].map(l=>l.toString(16).padStart(2,"0")).join("")}function Qx(o,e,i){const s=ep(o),l=ep(e),f=Math.max(0,Math.min(1,i)),h=s.r+(l.r-s.r)*f,d=s.g+(l.g-s.g)*f,p=s.b+(l.b-s.b)*f;return nb(h,d,p)}function ou(o){const{r:e,g:i,b:s}=ep(o);return .2126*(e/255)+.7152*(i/255)+.0722*(s/255)>.45?"#1a1a1a":"#f8f9fa"}function ib(o,e){return o.toLowerCase().replace("#","")===e.toLowerCase().replace("#","")}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tm="182",mo={ROTATE:0,DOLLY:1,PAN:2},ho={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ab=0,Pv=1,sb=2,Ru=1,Jx=2,El=3,Ms=0,oi=1,Da=2,Ua=0,go=1,Iv=2,zv=3,Fv=4,rb=5,ir=100,ob=101,lb=102,cb=103,ub=104,fb=200,hb=201,db=202,pb=203,np=204,ip=205,mb=206,gb=207,_b=208,vb=209,xb=210,Sb=211,yb=212,Mb=213,bb=214,ap=0,sp=1,rp=2,vo=3,op=4,lp=5,cp=6,up=7,$x=0,Eb=1,Tb=2,sa=0,tS=1,eS=2,nS=3,em=4,iS=5,aS=6,sS=7,rS=300,or=301,xo=302,fp=303,hp=304,Fu=306,dp=1e3,Na=1001,pp=1002,Pn=1003,Ab=1004,lu=1005,Hn=1006,Sd=1007,sr=1008,xi=1009,oS=1010,lS=1011,Rl=1012,nm=1013,la=1014,ia=1015,Pa=1016,im=1017,am=1018,Dl=1020,cS=35902,uS=35899,fS=1021,hS=1022,ki=1023,Ia=1026,rr=1027,dS=1028,sm=1029,So=1030,rm=1031,om=1033,Du=33776,Nu=33777,Uu=33778,Lu=33779,mp=35840,gp=35841,_p=35842,vp=35843,xp=36196,Sp=37492,yp=37496,Mp=37488,bp=37489,Ep=37490,Tp=37491,Ap=37808,Cp=37809,wp=37810,Rp=37811,Dp=37812,Np=37813,Up=37814,Lp=37815,Op=37816,Pp=37817,Ip=37818,zp=37819,Fp=37820,Bp=37821,Hp=36492,Gp=36494,Vp=36495,kp=36283,Xp=36284,jp=36285,Yp=36286,Cb=3200,pS=0,wb=1,Ss="",ri="srgb",yo="srgb-linear",Pu="linear",je="srgb",Kr=7680,Bv=519,Rb=512,Db=513,Nb=514,lm=515,Ub=516,Lb=517,cm=518,Ob=519,Hv=35044,Gv="300 es",aa=2e3,Iu=2001;function mS(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function zu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Pb(){const o=zu("canvas");return o.style.display="block",o}const Vv={};function kv(...o){const e="THREE."+o.shift();console.log(e,...o)}function de(...o){const e="THREE."+o.shift();console.warn(e,...o)}function Pe(...o){const e="THREE."+o.shift();console.error(e,...o)}function Nl(...o){const e=o.join(" ");e in Vv||(Vv[e]=!0,de(...o))}function Ib(o,e,i){return new Promise(function(s,l){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:s()}}setTimeout(f,i)})}class cr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const f=l.indexOf(i);f!==-1&&l.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let f=0,h=l.length;f<h;f++)l[f].call(this,e);e.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xv=1234567;const Al=Math.PI/180,Ul=180/Math.PI;function bo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Fn[o&255]+Fn[o>>8&255]+Fn[o>>16&255]+Fn[o>>24&255]+"-"+Fn[e&255]+Fn[e>>8&255]+"-"+Fn[e>>16&15|64]+Fn[e>>24&255]+"-"+Fn[i&63|128]+Fn[i>>8&255]+"-"+Fn[i>>16&255]+Fn[i>>24&255]+Fn[s&255]+Fn[s>>8&255]+Fn[s>>16&255]+Fn[s>>24&255]).toLowerCase()}function Ee(o,e,i){return Math.max(e,Math.min(i,o))}function um(o,e){return(o%e+e)%e}function zb(o,e,i,s,l){return s+(o-e)*(l-s)/(i-e)}function Fb(o,e,i){return o!==e?(i-o)/(e-o):0}function Cl(o,e,i){return(1-i)*o+i*e}function Bb(o,e,i,s){return Cl(o,e,1-Math.exp(-i*s))}function Hb(o,e=1){return e-Math.abs(um(o,e*2)-e)}function Gb(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*(3-2*o))}function Vb(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*o*(o*(o*6-15)+10))}function kb(o,e){return o+Math.floor(Math.random()*(e-o+1))}function Xb(o,e){return o+Math.random()*(e-o)}function jb(o){return o*(.5-Math.random())}function Yb(o){o!==void 0&&(Xv=o);let e=Xv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qb(o){return o*Al}function Wb(o){return o*Ul}function Zb(o){return(o&o-1)===0&&o!==0}function Kb(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Qb(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Jb(o,e,i,s,l){const f=Math.cos,h=Math.sin,d=f(i/2),p=h(i/2),g=f((e+s)/2),_=h((e+s)/2),m=f((e-s)/2),x=h((e-s)/2),y=f((s-e)/2),E=h((s-e)/2);switch(l){case"XYX":o.set(d*_,p*m,p*x,d*g);break;case"YZY":o.set(p*x,d*_,p*m,d*g);break;case"ZXZ":o.set(p*m,p*x,d*_,d*g);break;case"XZX":o.set(d*_,p*E,p*y,d*g);break;case"YXY":o.set(p*y,d*_,p*E,d*g);break;case"ZYZ":o.set(p*E,p*y,d*_,d*g);break;default:de("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function fo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Wn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const qp={DEG2RAD:Al,RAD2DEG:Ul,generateUUID:bo,clamp:Ee,euclideanModulo:um,mapLinear:zb,inverseLerp:Fb,lerp:Cl,damp:Bb,pingpong:Hb,smoothstep:Gb,smootherstep:Vb,randInt:kb,randFloat:Xb,randFloatSpread:jb,seededRandom:Yb,degToRad:qb,radToDeg:Wb,isPowerOfTwo:Zb,ceilPowerOfTwo:Kb,floorPowerOfTwo:Qb,setQuaternionFromProperEuler:Jb,normalize:Wn,denormalize:fo};class pe{constructor(e=0,i=0){pe.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ee(this.x,e.x,i.x),this.y=Ee(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ee(this.x,e,i),this.y=Ee(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ee(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),f=this.x-e.x,h=this.y-e.y;return this.x=f*s-h*l+e.x,this.y=f*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lr{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,f,h,d){let p=s[l+0],g=s[l+1],_=s[l+2],m=s[l+3],x=f[h+0],y=f[h+1],E=f[h+2],R=f[h+3];if(d<=0){e[i+0]=p,e[i+1]=g,e[i+2]=_,e[i+3]=m;return}if(d>=1){e[i+0]=x,e[i+1]=y,e[i+2]=E,e[i+3]=R;return}if(m!==R||p!==x||g!==y||_!==E){let M=p*x+g*y+_*E+m*R;M<0&&(x=-x,y=-y,E=-E,R=-R,M=-M);let S=1-d;if(M<.9995){const P=Math.acos(M),H=Math.sin(P);S=Math.sin(S*P)/H,d=Math.sin(d*P)/H,p=p*S+x*d,g=g*S+y*d,_=_*S+E*d,m=m*S+R*d}else{p=p*S+x*d,g=g*S+y*d,_=_*S+E*d,m=m*S+R*d;const P=1/Math.sqrt(p*p+g*g+_*_+m*m);p*=P,g*=P,_*=P,m*=P}}e[i]=p,e[i+1]=g,e[i+2]=_,e[i+3]=m}static multiplyQuaternionsFlat(e,i,s,l,f,h){const d=s[l],p=s[l+1],g=s[l+2],_=s[l+3],m=f[h],x=f[h+1],y=f[h+2],E=f[h+3];return e[i]=d*E+_*m+p*y-g*x,e[i+1]=p*E+_*x+g*m-d*y,e[i+2]=g*E+_*y+d*x-p*m,e[i+3]=_*E-d*m-p*x-g*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,f=e._z,h=e._order,d=Math.cos,p=Math.sin,g=d(s/2),_=d(l/2),m=d(f/2),x=p(s/2),y=p(l/2),E=p(f/2);switch(h){case"XYZ":this._x=x*_*m+g*y*E,this._y=g*y*m-x*_*E,this._z=g*_*E+x*y*m,this._w=g*_*m-x*y*E;break;case"YXZ":this._x=x*_*m+g*y*E,this._y=g*y*m-x*_*E,this._z=g*_*E-x*y*m,this._w=g*_*m+x*y*E;break;case"ZXY":this._x=x*_*m-g*y*E,this._y=g*y*m+x*_*E,this._z=g*_*E+x*y*m,this._w=g*_*m-x*y*E;break;case"ZYX":this._x=x*_*m-g*y*E,this._y=g*y*m+x*_*E,this._z=g*_*E-x*y*m,this._w=g*_*m+x*y*E;break;case"YZX":this._x=x*_*m+g*y*E,this._y=g*y*m+x*_*E,this._z=g*_*E-x*y*m,this._w=g*_*m-x*y*E;break;case"XZY":this._x=x*_*m-g*y*E,this._y=g*y*m-x*_*E,this._z=g*_*E+x*y*m,this._w=g*_*m+x*y*E;break;default:de("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],f=i[8],h=i[1],d=i[5],p=i[9],g=i[2],_=i[6],m=i[10],x=s+d+m;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(_-p)*y,this._y=(f-g)*y,this._z=(h-l)*y}else if(s>d&&s>m){const y=2*Math.sqrt(1+s-d-m);this._w=(_-p)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(f+g)/y}else if(d>m){const y=2*Math.sqrt(1+d-s-m);this._w=(f-g)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(p+_)/y}else{const y=2*Math.sqrt(1+m-s-d);this._w=(h-l)/y,this._x=(f+g)/y,this._y=(p+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ee(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,f=e._z,h=e._w,d=i._x,p=i._y,g=i._z,_=i._w;return this._x=s*_+h*d+l*g-f*p,this._y=l*_+h*p+f*d-s*g,this._z=f*_+h*g+s*p-l*d,this._w=h*_-s*d-l*p-f*g,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let s=e._x,l=e._y,f=e._z,h=e._w,d=this.dot(e);d<0&&(s=-s,l=-l,f=-f,h=-h,d=-d);let p=1-i;if(d<.9995){const g=Math.acos(d),_=Math.sin(g);p=Math.sin(p*g)/_,i=Math.sin(i*g)/_,this._x=this._x*p+s*i,this._y=this._y*p+l*i,this._z=this._z*p+f*i,this._w=this._w*p+h*i,this._onChangeCallback()}else this._x=this._x*p+s*i,this._y=this._y*p+l*i,this._z=this._z*p+f*i,this._w=this._w*p+h*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ct{constructor(e=0,i=0,s=0){ct.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(jv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(jv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[3]*s+f[6]*l,this.y=f[1]*i+f[4]*s+f[7]*l,this.z=f[2]*i+f[5]*s+f[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,f=e.elements,h=1/(f[3]*i+f[7]*s+f[11]*l+f[15]);return this.x=(f[0]*i+f[4]*s+f[8]*l+f[12])*h,this.y=(f[1]*i+f[5]*s+f[9]*l+f[13])*h,this.z=(f[2]*i+f[6]*s+f[10]*l+f[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,f=e.x,h=e.y,d=e.z,p=e.w,g=2*(h*l-d*s),_=2*(d*i-f*l),m=2*(f*s-h*i);return this.x=i+p*g+h*m-d*_,this.y=s+p*_+d*g-f*m,this.z=l+p*m+f*_-h*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l,this.y=f[1]*i+f[5]*s+f[9]*l,this.z=f[2]*i+f[6]*s+f[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ee(this.x,e.x,i.x),this.y=Ee(this.y,e.y,i.y),this.z=Ee(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ee(this.x,e,i),this.y=Ee(this.y,e,i),this.z=Ee(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,f=e.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-f*d,this.y=f*h-s*p,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return yd.copy(this).projectOnVector(e),this.sub(yd)}reflect(e){return this.sub(yd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ee(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yd=new ct,jv=new lr;class xe{constructor(e,i,s,l,f,h,d,p,g){xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,f,h,d,p,g)}set(e,i,s,l,f,h,d,p,g){const _=this.elements;return _[0]=e,_[1]=l,_[2]=d,_[3]=i,_[4]=f,_[5]=p,_[6]=s,_[7]=h,_[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,f=this.elements,h=s[0],d=s[3],p=s[6],g=s[1],_=s[4],m=s[7],x=s[2],y=s[5],E=s[8],R=l[0],M=l[3],S=l[6],P=l[1],H=l[4],O=l[7],I=l[2],D=l[5],N=l[8];return f[0]=h*R+d*P+p*I,f[3]=h*M+d*H+p*D,f[6]=h*S+d*O+p*N,f[1]=g*R+_*P+m*I,f[4]=g*M+_*H+m*D,f[7]=g*S+_*O+m*N,f[2]=x*R+y*P+E*I,f[5]=x*M+y*H+E*D,f[8]=x*S+y*O+E*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],f=e[3],h=e[4],d=e[5],p=e[6],g=e[7],_=e[8];return i*h*_-i*d*g-s*f*_+s*d*p+l*f*g-l*h*p}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],f=e[3],h=e[4],d=e[5],p=e[6],g=e[7],_=e[8],m=_*h-d*g,x=d*p-_*f,y=g*f-h*p,E=i*m+s*x+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=m*R,e[1]=(l*g-_*s)*R,e[2]=(d*s-l*h)*R,e[3]=x*R,e[4]=(_*i-l*p)*R,e[5]=(l*f-d*i)*R,e[6]=y*R,e[7]=(s*p-g*i)*R,e[8]=(h*i-s*f)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,f,h,d){const p=Math.cos(f),g=Math.sin(f);return this.set(s*p,s*g,-s*(p*h+g*d)+h+e,-l*g,l*p,-l*(-g*h+p*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Md.makeScale(e,i)),this}rotate(e){return this.premultiply(Md.makeRotation(-e)),this}translate(e,i){return this.premultiply(Md.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Md=new xe,Yv=new xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qv=new xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $b(){const o={enabled:!0,workingColorSpace:yo,spaces:{},convert:function(l,f,h){return this.enabled===!1||f===h||!f||!h||(this.spaces[f].transfer===je&&(l.r=La(l.r),l.g=La(l.g),l.b=La(l.b)),this.spaces[f].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[f].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===je&&(l.r=_o(l.r),l.g=_o(l.g),l.b=_o(l.b))),l},workingToColorSpace:function(l,f){return this.convert(l,this.workingColorSpace,f)},colorSpaceToWorking:function(l,f){return this.convert(l,f,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ss?Pu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,f=this.workingColorSpace){return l.fromArray(this.spaces[f].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,f,h){return l.copy(this.spaces[f].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,f){return Nl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,f)},toWorkingColorSpace:function(l,f){return Nl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,f)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[yo]:{primaries:e,whitePoint:s,transfer:Pu,toXYZ:Yv,fromXYZ:qv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:e,whitePoint:s,transfer:je,toXYZ:Yv,fromXYZ:qv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),o}const Ie=$b();function La(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function _o(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Qr;class tE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Qr===void 0&&(Qr=zu("canvas")),Qr.width=e.width,Qr.height=e.height;const l=Qr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Qr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=zu("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),f=l.data;for(let h=0;h<f.length;h++)f[h]=La(f[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(La(i[s]/255)*255):i[s]=La(i[s]);return{data:i,width:e.width,height:e.height}}else return de("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eE=0;class fm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eE++}),this.uuid=bo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let f;if(Array.isArray(l)){f=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?f.push(bd(l[h].image)):f.push(bd(l[h]))}else f=bd(l);s.url=f}return i||(e.images[this.uuid]=s),s}}function bd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?tE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(de("Texture: Unable to serialize Texture."),{})}let nE=0;const Ed=new ct;class Gn extends cr{constructor(e=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,s=Na,l=Na,f=Hn,h=sr,d=ki,p=xi,g=Gn.DEFAULT_ANISOTROPY,_=Ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nE++}),this.uuid=bo(),this.name="",this.source=new fm(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=f,this.minFilter=h,this.anisotropy=g,this.format=d,this.internalFormat=null,this.type=p,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ed).x}get height(){return this.source.getSize(Ed).y}get depth(){return this.source.getSize(Ed).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){de(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){de(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dp:e.x=e.x-Math.floor(e.x);break;case Na:e.x=e.x<0?0:1;break;case pp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dp:e.y=e.y-Math.floor(e.y);break;case Na:e.y=e.y<0?0:1;break;case pp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=rS;Gn.DEFAULT_ANISOTROPY=1;class un{constructor(e=0,i=0,s=0,l=1){un.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,f=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*f,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*f,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*f,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,f;const p=e.elements,g=p[0],_=p[4],m=p[8],x=p[1],y=p[5],E=p[9],R=p[2],M=p[6],S=p[10];if(Math.abs(_-x)<.01&&Math.abs(m-R)<.01&&Math.abs(E-M)<.01){if(Math.abs(_+x)<.1&&Math.abs(m+R)<.1&&Math.abs(E+M)<.1&&Math.abs(g+y+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const H=(g+1)/2,O=(y+1)/2,I=(S+1)/2,D=(_+x)/4,N=(m+R)/4,X=(E+M)/4;return H>O&&H>I?H<.01?(s=0,l=.707106781,f=.707106781):(s=Math.sqrt(H),l=D/s,f=N/s):O>I?O<.01?(s=.707106781,l=0,f=.707106781):(l=Math.sqrt(O),s=D/l,f=X/l):I<.01?(s=.707106781,l=.707106781,f=0):(f=Math.sqrt(I),s=N/f,l=X/f),this.set(s,l,f,i),this}let P=Math.sqrt((M-E)*(M-E)+(m-R)*(m-R)+(x-_)*(x-_));return Math.abs(P)<.001&&(P=1),this.x=(M-E)/P,this.y=(m-R)/P,this.z=(x-_)/P,this.w=Math.acos((g+y+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ee(this.x,e.x,i.x),this.y=Ee(this.y,e.y,i.y),this.z=Ee(this.z,e.z,i.z),this.w=Ee(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ee(this.x,e,i),this.y=Ee(this.y,e,i),this.z=Ee(this.z,e,i),this.w=Ee(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iE extends cr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new un(0,0,e,i),this.scissorTest=!1,this.viewport=new un(0,0,e,i);const l={width:e,height:i,depth:s.depth},f=new Gn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=f.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,f=this.textures.length;l<f;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new fm(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ra extends iE{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class gS extends Gn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Na,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class aE extends Gn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Na,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pl{constructor(e=new ct(1/0,1/0,1/0),i=new ct(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Bi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Bi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Bi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const f=s.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=f.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Bi):Bi.fromBufferAttribute(f,h),Bi.applyMatrix4(e.matrixWorld),this.expandByPoint(Bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cu.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),cu.copy(s.boundingBox)),cu.applyMatrix4(e.matrixWorld),this.union(cu)}const l=e.children;for(let f=0,h=l.length;f<h;f++)this.expandByObject(l[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vl),uu.subVectors(this.max,vl),Jr.subVectors(e.a,vl),$r.subVectors(e.b,vl),to.subVectors(e.c,vl),ds.subVectors($r,Jr),ps.subVectors(to,$r),Zs.subVectors(Jr,to);let i=[0,-ds.z,ds.y,0,-ps.z,ps.y,0,-Zs.z,Zs.y,ds.z,0,-ds.x,ps.z,0,-ps.x,Zs.z,0,-Zs.x,-ds.y,ds.x,0,-ps.y,ps.x,0,-Zs.y,Zs.x,0];return!Td(i,Jr,$r,to,uu)||(i=[1,0,0,0,1,0,0,0,1],!Td(i,Jr,$r,to,uu))?!1:(fu.crossVectors(ds,ps),i=[fu.x,fu.y,fu.z],Td(i,Jr,$r,to,uu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ta),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ta=[new ct,new ct,new ct,new ct,new ct,new ct,new ct,new ct],Bi=new ct,cu=new Pl,Jr=new ct,$r=new ct,to=new ct,ds=new ct,ps=new ct,Zs=new ct,vl=new ct,uu=new ct,fu=new ct,Ks=new ct;function Td(o,e,i,s,l){for(let f=0,h=o.length-3;f<=h;f+=3){Ks.fromArray(o,f);const d=l.x*Math.abs(Ks.x)+l.y*Math.abs(Ks.y)+l.z*Math.abs(Ks.z),p=e.dot(Ks),g=i.dot(Ks),_=s.dot(Ks);if(Math.max(-Math.max(p,g,_),Math.min(p,g,_))>d)return!1}return!0}const sE=new Pl,xl=new ct,Ad=new ct;class hm{constructor(e=new ct,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):sE.setFromPoints(e).getCenter(s);let l=0;for(let f=0,h=e.length;f<h;f++)l=Math.max(l,s.distanceToSquared(e[f]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xl.subVectors(e,this.center);const i=xl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(xl,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ad.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xl.copy(e.center).add(Ad)),this.expandByPoint(xl.copy(e.center).sub(Ad))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Aa=new ct,Cd=new ct,hu=new ct,ms=new ct,wd=new ct,du=new ct,Rd=new ct;class dm{constructor(e=new ct,i=new ct(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Aa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Aa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Aa.copy(this.origin).addScaledVector(this.direction,i),Aa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Cd.copy(e).add(i).multiplyScalar(.5),hu.copy(i).sub(e).normalize(),ms.copy(this.origin).sub(Cd);const f=e.distanceTo(i)*.5,h=-this.direction.dot(hu),d=ms.dot(this.direction),p=-ms.dot(hu),g=ms.lengthSq(),_=Math.abs(1-h*h);let m,x,y,E;if(_>0)if(m=h*p-d,x=h*d-p,E=f*_,m>=0)if(x>=-E)if(x<=E){const R=1/_;m*=R,x*=R,y=m*(m+h*x+2*d)+x*(h*m+x+2*p)+g}else x=f,m=Math.max(0,-(h*x+d)),y=-m*m+x*(x+2*p)+g;else x=-f,m=Math.max(0,-(h*x+d)),y=-m*m+x*(x+2*p)+g;else x<=-E?(m=Math.max(0,-(-h*f+d)),x=m>0?-f:Math.min(Math.max(-f,-p),f),y=-m*m+x*(x+2*p)+g):x<=E?(m=0,x=Math.min(Math.max(-f,-p),f),y=x*(x+2*p)+g):(m=Math.max(0,-(h*f+d)),x=m>0?f:Math.min(Math.max(-f,-p),f),y=-m*m+x*(x+2*p)+g);else x=h>0?-f:f,m=Math.max(0,-(h*x+d)),y=-m*m+x*(x+2*p)+g;return s&&s.copy(this.origin).addScaledVector(this.direction,m),l&&l.copy(Cd).addScaledVector(hu,x),y}intersectSphere(e,i){Aa.subVectors(e.center,this.origin);const s=Aa.dot(this.direction),l=Aa.dot(Aa)-s*s,f=e.radius*e.radius;if(l>f)return null;const h=Math.sqrt(f-l),d=s-h,p=s+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,f,h,d,p;const g=1/this.direction.x,_=1/this.direction.y,m=1/this.direction.z,x=this.origin;return g>=0?(s=(e.min.x-x.x)*g,l=(e.max.x-x.x)*g):(s=(e.max.x-x.x)*g,l=(e.min.x-x.x)*g),_>=0?(f=(e.min.y-x.y)*_,h=(e.max.y-x.y)*_):(f=(e.max.y-x.y)*_,h=(e.min.y-x.y)*_),s>h||f>l||((f>s||isNaN(s))&&(s=f),(h<l||isNaN(l))&&(l=h),m>=0?(d=(e.min.z-x.z)*m,p=(e.max.z-x.z)*m):(d=(e.max.z-x.z)*m,p=(e.min.z-x.z)*m),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Aa)!==null}intersectTriangle(e,i,s,l,f){wd.subVectors(i,e),du.subVectors(s,e),Rd.crossVectors(wd,du);let h=this.direction.dot(Rd),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;ms.subVectors(this.origin,e);const p=d*this.direction.dot(du.crossVectors(ms,du));if(p<0)return null;const g=d*this.direction.dot(wd.cross(ms));if(g<0||p+g>h)return null;const _=-d*ms.dot(Rd);return _<0?null:this.at(_/h,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn{constructor(e,i,s,l,f,h,d,p,g,_,m,x,y,E,R,M){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,f,h,d,p,g,_,m,x,y,E,R,M)}set(e,i,s,l,f,h,d,p,g,_,m,x,y,E,R,M){const S=this.elements;return S[0]=e,S[4]=i,S[8]=s,S[12]=l,S[1]=f,S[5]=h,S[9]=d,S[13]=p,S[2]=g,S[6]=_,S[10]=m,S[14]=x,S[3]=y,S[7]=E,S[11]=R,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/eo.setFromMatrixColumn(e,0).length(),f=1/eo.setFromMatrixColumn(e,1).length(),h=1/eo.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*f,i[5]=s[5]*f,i[6]=s[6]*f,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,f=e.z,h=Math.cos(s),d=Math.sin(s),p=Math.cos(l),g=Math.sin(l),_=Math.cos(f),m=Math.sin(f);if(e.order==="XYZ"){const x=h*_,y=h*m,E=d*_,R=d*m;i[0]=p*_,i[4]=-p*m,i[8]=g,i[1]=y+E*g,i[5]=x-R*g,i[9]=-d*p,i[2]=R-x*g,i[6]=E+y*g,i[10]=h*p}else if(e.order==="YXZ"){const x=p*_,y=p*m,E=g*_,R=g*m;i[0]=x+R*d,i[4]=E*d-y,i[8]=h*g,i[1]=h*m,i[5]=h*_,i[9]=-d,i[2]=y*d-E,i[6]=R+x*d,i[10]=h*p}else if(e.order==="ZXY"){const x=p*_,y=p*m,E=g*_,R=g*m;i[0]=x-R*d,i[4]=-h*m,i[8]=E+y*d,i[1]=y+E*d,i[5]=h*_,i[9]=R-x*d,i[2]=-h*g,i[6]=d,i[10]=h*p}else if(e.order==="ZYX"){const x=h*_,y=h*m,E=d*_,R=d*m;i[0]=p*_,i[4]=E*g-y,i[8]=x*g+R,i[1]=p*m,i[5]=R*g+x,i[9]=y*g-E,i[2]=-g,i[6]=d*p,i[10]=h*p}else if(e.order==="YZX"){const x=h*p,y=h*g,E=d*p,R=d*g;i[0]=p*_,i[4]=R-x*m,i[8]=E*m+y,i[1]=m,i[5]=h*_,i[9]=-d*_,i[2]=-g*_,i[6]=y*m+E,i[10]=x-R*m}else if(e.order==="XZY"){const x=h*p,y=h*g,E=d*p,R=d*g;i[0]=p*_,i[4]=-m,i[8]=g*_,i[1]=x*m+R,i[5]=h*_,i[9]=y*m-E,i[2]=E*m-y,i[6]=d*_,i[10]=R*m+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rE,e,oE)}lookAt(e,i,s){const l=this.elements;return gi.subVectors(e,i),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),gs.crossVectors(s,gi),gs.lengthSq()===0&&(Math.abs(s.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),gs.crossVectors(s,gi)),gs.normalize(),pu.crossVectors(gi,gs),l[0]=gs.x,l[4]=pu.x,l[8]=gi.x,l[1]=gs.y,l[5]=pu.y,l[9]=gi.y,l[2]=gs.z,l[6]=pu.z,l[10]=gi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,f=this.elements,h=s[0],d=s[4],p=s[8],g=s[12],_=s[1],m=s[5],x=s[9],y=s[13],E=s[2],R=s[6],M=s[10],S=s[14],P=s[3],H=s[7],O=s[11],I=s[15],D=l[0],N=l[4],X=l[8],A=l[12],w=l[1],k=l[5],st=l[9],it=l[13],pt=l[2],dt=l[6],Z=l[10],K=l[14],ft=l[3],At=l[7],G=l[11],z=l[15];return f[0]=h*D+d*w+p*pt+g*ft,f[4]=h*N+d*k+p*dt+g*At,f[8]=h*X+d*st+p*Z+g*G,f[12]=h*A+d*it+p*K+g*z,f[1]=_*D+m*w+x*pt+y*ft,f[5]=_*N+m*k+x*dt+y*At,f[9]=_*X+m*st+x*Z+y*G,f[13]=_*A+m*it+x*K+y*z,f[2]=E*D+R*w+M*pt+S*ft,f[6]=E*N+R*k+M*dt+S*At,f[10]=E*X+R*st+M*Z+S*G,f[14]=E*A+R*it+M*K+S*z,f[3]=P*D+H*w+O*pt+I*ft,f[7]=P*N+H*k+O*dt+I*At,f[11]=P*X+H*st+O*Z+I*G,f[15]=P*A+H*it+O*K+I*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],f=e[12],h=e[1],d=e[5],p=e[9],g=e[13],_=e[2],m=e[6],x=e[10],y=e[14],E=e[3],R=e[7],M=e[11],S=e[15],P=p*y-g*x,H=d*y-g*m,O=d*x-p*m,I=h*y-g*_,D=h*x-p*_,N=h*m-d*_;return i*(R*P-M*H+S*O)-s*(E*P-M*I+S*D)+l*(E*H-R*I+S*N)-f*(E*O-R*D+M*N)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],f=e[3],h=e[4],d=e[5],p=e[6],g=e[7],_=e[8],m=e[9],x=e[10],y=e[11],E=e[12],R=e[13],M=e[14],S=e[15],P=m*M*g-R*x*g+R*p*y-d*M*y-m*p*S+d*x*S,H=E*x*g-_*M*g-E*p*y+h*M*y+_*p*S-h*x*S,O=_*R*g-E*m*g+E*d*y-h*R*y-_*d*S+h*m*S,I=E*m*p-_*R*p-E*d*x+h*R*x+_*d*M-h*m*M,D=i*P+s*H+l*O+f*I;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/D;return e[0]=P*N,e[1]=(R*x*f-m*M*f-R*l*y+s*M*y+m*l*S-s*x*S)*N,e[2]=(d*M*f-R*p*f+R*l*g-s*M*g-d*l*S+s*p*S)*N,e[3]=(m*p*f-d*x*f-m*l*g+s*x*g+d*l*y-s*p*y)*N,e[4]=H*N,e[5]=(_*M*f-E*x*f+E*l*y-i*M*y-_*l*S+i*x*S)*N,e[6]=(E*p*f-h*M*f-E*l*g+i*M*g+h*l*S-i*p*S)*N,e[7]=(h*x*f-_*p*f+_*l*g-i*x*g-h*l*y+i*p*y)*N,e[8]=O*N,e[9]=(E*m*f-_*R*f-E*s*y+i*R*y+_*s*S-i*m*S)*N,e[10]=(h*R*f-E*d*f+E*s*g-i*R*g-h*s*S+i*d*S)*N,e[11]=(_*d*f-h*m*f-_*s*g+i*m*g+h*s*y-i*d*y)*N,e[12]=I*N,e[13]=(_*R*l-E*m*l+E*s*x-i*R*x-_*s*M+i*m*M)*N,e[14]=(E*d*l-h*R*l-E*s*p+i*R*p+h*s*M-i*d*M)*N,e[15]=(h*m*l-_*d*l+_*s*p-i*m*p-h*s*x+i*d*x)*N,this}scale(e){const i=this.elements,s=e.x,l=e.y,f=e.z;return i[0]*=s,i[4]*=l,i[8]*=f,i[1]*=s,i[5]*=l,i[9]*=f,i[2]*=s,i[6]*=l,i[10]*=f,i[3]*=s,i[7]*=l,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),f=1-s,h=e.x,d=e.y,p=e.z,g=f*h,_=f*d;return this.set(g*h+s,g*d-l*p,g*p+l*d,0,g*d+l*p,_*d+s,_*p-l*h,0,g*p-l*d,_*p+l*h,f*p*p+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,f,h){return this.set(1,s,f,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,f=i._x,h=i._y,d=i._z,p=i._w,g=f+f,_=h+h,m=d+d,x=f*g,y=f*_,E=f*m,R=h*_,M=h*m,S=d*m,P=p*g,H=p*_,O=p*m,I=s.x,D=s.y,N=s.z;return l[0]=(1-(R+S))*I,l[1]=(y+O)*I,l[2]=(E-H)*I,l[3]=0,l[4]=(y-O)*D,l[5]=(1-(x+S))*D,l[6]=(M+P)*D,l[7]=0,l[8]=(E+H)*N,l[9]=(M-P)*N,l[10]=(1-(x+R))*N,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let f=eo.set(l[0],l[1],l[2]).length();const h=eo.set(l[4],l[5],l[6]).length(),d=eo.set(l[8],l[9],l[10]).length();this.determinant()<0&&(f=-f),Hi.copy(this);const g=1/f,_=1/h,m=1/d;return Hi.elements[0]*=g,Hi.elements[1]*=g,Hi.elements[2]*=g,Hi.elements[4]*=_,Hi.elements[5]*=_,Hi.elements[6]*=_,Hi.elements[8]*=m,Hi.elements[9]*=m,Hi.elements[10]*=m,i.setFromRotationMatrix(Hi),s.x=f,s.y=h,s.z=d,this}makePerspective(e,i,s,l,f,h,d=aa,p=!1){const g=this.elements,_=2*f/(i-e),m=2*f/(s-l),x=(i+e)/(i-e),y=(s+l)/(s-l);let E,R;if(p)E=f/(h-f),R=h*f/(h-f);else if(d===aa)E=-(h+f)/(h-f),R=-2*h*f/(h-f);else if(d===Iu)E=-h/(h-f),R=-h*f/(h-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return g[0]=_,g[4]=0,g[8]=x,g[12]=0,g[1]=0,g[5]=m,g[9]=y,g[13]=0,g[2]=0,g[6]=0,g[10]=E,g[14]=R,g[3]=0,g[7]=0,g[11]=-1,g[15]=0,this}makeOrthographic(e,i,s,l,f,h,d=aa,p=!1){const g=this.elements,_=2/(i-e),m=2/(s-l),x=-(i+e)/(i-e),y=-(s+l)/(s-l);let E,R;if(p)E=1/(h-f),R=h/(h-f);else if(d===aa)E=-2/(h-f),R=-(h+f)/(h-f);else if(d===Iu)E=-1/(h-f),R=-f/(h-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return g[0]=_,g[4]=0,g[8]=0,g[12]=x,g[1]=0,g[5]=m,g[9]=0,g[13]=y,g[2]=0,g[6]=0,g[10]=E,g[14]=R,g[3]=0,g[7]=0,g[11]=0,g[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const eo=new ct,Hi=new rn,rE=new ct(0,0,0),oE=new ct(1,1,1),gs=new ct,pu=new ct,gi=new ct,Wv=new rn,Zv=new lr;class ca{constructor(e=0,i=0,s=0,l=ca.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,f=l[0],h=l[4],d=l[8],p=l[1],g=l[5],_=l[9],m=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-h,f)):(this._x=Math.atan2(x,g),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,g)):(this._y=Math.atan2(-m,f),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-m,y),this._z=Math.atan2(-h,g)):(this._y=0,this._z=Math.atan2(p,f));break;case"ZYX":this._y=Math.asin(-Ee(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(p,f)):(this._x=0,this._z=Math.atan2(-h,g));break;case"YZX":this._z=Math.asin(Ee(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,g),this._y=Math.atan2(-m,f)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,g),this._y=Math.atan2(d,f)):(this._x=Math.atan2(-_,y),this._y=0);break;default:de("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Wv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Zv.setFromEuler(this),this.setFromQuaternion(Zv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ca.DEFAULT_ORDER="XYZ";let pm=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},lE=0;const Kv=new ct,no=new lr,Ca=new rn,mu=new ct,Sl=new ct,cE=new ct,uE=new lr,Qv=new ct(1,0,0),Jv=new ct(0,1,0),$v=new ct(0,0,1),tx={type:"added"},fE={type:"removed"},io={type:"childadded",child:null},Dd={type:"childremoved",child:null};class Vn extends cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lE++}),this.uuid=bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vn.DEFAULT_UP.clone();const e=new ct,i=new ca,s=new lr,l=new ct(1,1,1);function f(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(f),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new rn},normalMatrix:{value:new xe}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=Vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return no.setFromAxisAngle(e,i),this.quaternion.multiply(no),this}rotateOnWorldAxis(e,i){return no.setFromAxisAngle(e,i),this.quaternion.premultiply(no),this}rotateX(e){return this.rotateOnAxis(Qv,e)}rotateY(e){return this.rotateOnAxis(Jv,e)}rotateZ(e){return this.rotateOnAxis($v,e)}translateOnAxis(e,i){return Kv.copy(e).applyQuaternion(this.quaternion),this.position.add(Kv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Qv,e)}translateY(e){return this.translateOnAxis(Jv,e)}translateZ(e){return this.translateOnAxis($v,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ca.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?mu.copy(e):mu.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Sl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ca.lookAt(Sl,mu,this.up):Ca.lookAt(mu,Sl,this.up),this.quaternion.setFromRotationMatrix(Ca),l&&(Ca.extractRotation(l.matrixWorld),no.setFromRotationMatrix(Ca),this.quaternion.premultiply(no.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Pe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tx),io.child=e,this.dispatchEvent(io),io.child=null):Pe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(fE),Dd.child=e,this.dispatchEvent(Dd),Dd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ca.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ca.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ca),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tx),io.child=e,this.dispatchEvent(io),io.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let f=0,h=l.length;f<h;f++)l[f].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sl,e,cE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sl,uE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let f=0,h=l.length;f<h;f++)l[f].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function f(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=f(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let g=0,_=p.length;g<_;g++){const m=p[g];f(e.shapes,m)}else f(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,g=this.material.length;p<g;p++)d.push(f(e.materials,this.material[p]));l.material=d}else l.material=f(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(f(e.animations,p))}}if(i){const d=h(e.geometries),p=h(e.materials),g=h(e.textures),_=h(e.images),m=h(e.shapes),x=h(e.skeletons),y=h(e.animations),E=h(e.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),g.length>0&&(s.textures=g),_.length>0&&(s.images=_),m.length>0&&(s.shapes=m),x.length>0&&(s.skeletons=x),y.length>0&&(s.animations=y),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const p=[];for(const g in d){const _=d[g];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Vn.DEFAULT_UP=new ct(0,1,0);Vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gi=new ct,wa=new ct,Nd=new ct,Ra=new ct,ao=new ct,so=new ct,ex=new ct,Ud=new ct,Ld=new ct,Od=new ct,Pd=new un,Id=new un,zd=new un;class Vi{constructor(e=new ct,i=new ct,s=new ct){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Gi.subVectors(e,i),l.cross(Gi);const f=l.lengthSq();return f>0?l.multiplyScalar(1/Math.sqrt(f)):l.set(0,0,0)}static getBarycoord(e,i,s,l,f){Gi.subVectors(l,i),wa.subVectors(s,i),Nd.subVectors(e,i);const h=Gi.dot(Gi),d=Gi.dot(wa),p=Gi.dot(Nd),g=wa.dot(wa),_=wa.dot(Nd),m=h*g-d*d;if(m===0)return f.set(0,0,0),null;const x=1/m,y=(g*p-d*_)*x,E=(h*_-d*p)*x;return f.set(1-y-E,E,y)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Ra)===null?!1:Ra.x>=0&&Ra.y>=0&&Ra.x+Ra.y<=1}static getInterpolation(e,i,s,l,f,h,d,p){return this.getBarycoord(e,i,s,l,Ra)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(f,Ra.x),p.addScaledVector(h,Ra.y),p.addScaledVector(d,Ra.z),p)}static getInterpolatedAttribute(e,i,s,l,f,h){return Pd.setScalar(0),Id.setScalar(0),zd.setScalar(0),Pd.fromBufferAttribute(e,i),Id.fromBufferAttribute(e,s),zd.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Pd,f.x),h.addScaledVector(Id,f.y),h.addScaledVector(zd,f.z),h}static isFrontFacing(e,i,s,l){return Gi.subVectors(s,i),wa.subVectors(e,i),Gi.cross(wa).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gi.subVectors(this.c,this.b),wa.subVectors(this.a,this.b),Gi.cross(wa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Vi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,f){return Vi.getInterpolation(e,this.a,this.b,this.c,i,s,l,f)}containsPoint(e){return Vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,f=this.c;let h,d;ao.subVectors(l,s),so.subVectors(f,s),Ud.subVectors(e,s);const p=ao.dot(Ud),g=so.dot(Ud);if(p<=0&&g<=0)return i.copy(s);Ld.subVectors(e,l);const _=ao.dot(Ld),m=so.dot(Ld);if(_>=0&&m<=_)return i.copy(l);const x=p*m-_*g;if(x<=0&&p>=0&&_<=0)return h=p/(p-_),i.copy(s).addScaledVector(ao,h);Od.subVectors(e,f);const y=ao.dot(Od),E=so.dot(Od);if(E>=0&&y<=E)return i.copy(f);const R=y*g-p*E;if(R<=0&&g>=0&&E<=0)return d=g/(g-E),i.copy(s).addScaledVector(so,d);const M=_*E-y*m;if(M<=0&&m-_>=0&&y-E>=0)return ex.subVectors(f,l),d=(m-_)/(m-_+(y-E)),i.copy(l).addScaledVector(ex,d);const S=1/(M+R+x);return h=R*S,d=x*S,i.copy(s).addScaledVector(ao,h).addScaledVector(so,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _S={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_s={h:0,s:0,l:0},gu={h:0,s:0,l:0};function Fd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class ye{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ie.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Ie.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ie.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Ie.workingColorSpace){if(e=um(e,1),i=Ee(i,0,1),s=Ee(s,0,1),i===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+i):s+i-s*i,h=2*s-f;this.r=Fd(h,f,e+1/3),this.g=Fd(h,f,e),this.b=Fd(h,f,e-1/3)}return Ie.colorSpaceToWorking(this,l),this}setStyle(e,i=ri){function s(f){f!==void 0&&parseFloat(f)<1&&de("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:de("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=l[1],h=f.length;if(h===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(f,16),i);de("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ri){const s=_S[e.toLowerCase()];return s!==void 0?this.setHex(s,i):de("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=La(e.r),this.g=La(e.g),this.b=La(e.b),this}copyLinearToSRGB(e){return this.r=_o(e.r),this.g=_o(e.g),this.b=_o(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return Ie.workingToColorSpace(Bn.copy(this),e),Math.round(Ee(Bn.r*255,0,255))*65536+Math.round(Ee(Bn.g*255,0,255))*256+Math.round(Ee(Bn.b*255,0,255))}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ie.workingColorSpace){Ie.workingToColorSpace(Bn.copy(this),i);const s=Bn.r,l=Bn.g,f=Bn.b,h=Math.max(s,l,f),d=Math.min(s,l,f);let p,g;const _=(d+h)/2;if(d===h)p=0,g=0;else{const m=h-d;switch(g=_<=.5?m/(h+d):m/(2-h-d),h){case s:p=(l-f)/m+(l<f?6:0);break;case l:p=(f-s)/m+2;break;case f:p=(s-l)/m+4;break}p/=6}return e.h=p,e.s=g,e.l=_,e}getRGB(e,i=Ie.workingColorSpace){return Ie.workingToColorSpace(Bn.copy(this),i),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=ri){Ie.workingToColorSpace(Bn.copy(this),e);const i=Bn.r,s=Bn.g,l=Bn.b;return e!==ri?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(_s),this.setHSL(_s.h+e,_s.s+i,_s.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(_s),e.getHSL(gu);const s=Cl(_s.h,gu.h,i),l=Cl(_s.s,gu.s,i),f=Cl(_s.l,gu.l,i);return this.setHSL(s,l,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,f=e.elements;return this.r=f[0]*i+f[3]*s+f[6]*l,this.g=f[1]*i+f[4]*s+f[7]*l,this.b=f[2]*i+f[5]*s+f[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new ye;ye.NAMES=_S;let hE=0;class Il extends cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hE++}),this.uuid=bo(),this.name="",this.type="Material",this.blending=go,this.side=Ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=np,this.blendDst=ip,this.blendEquation=ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kr,this.stencilZFail=Kr,this.stencilZPass=Kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){de(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){de(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==go&&(s.blending=this.blending),this.side!==Ms&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==np&&(s.blendSrc=this.blendSrc),this.blendDst!==ip&&(s.blendDst=this.blendDst),this.blendEquation!==ir&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==vo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Kr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Kr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Kr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(f){const h=[];for(const d in f){const p=f[d];delete p.metadata,h.push(p)}return h}if(i){const f=l(e.textures),h=l(e.images);f.length>0&&(s.textures=f),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let f=0;f!==l;++f)s[f]=i[f].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class vS extends Il{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ca,this.combine=$x,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _n=new ct,_u=new pe;let dE=0;class oa{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=Hv,this.updateRanges=[],this.gpuType=ia,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,f=this.itemSize;l<f;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)_u.fromBufferAttribute(this,i),_u.applyMatrix3(e),this.setXY(i,_u.x,_u.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix3(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix4(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyNormalMatrix(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.transformDirection(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=fo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Wn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=fo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=fo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=fo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=fo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array),l=Wn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,f){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array),l=Wn(l,this.array),f=Wn(f,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hv&&(e.usage=this.usage),e}}class xS extends oa{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class SS extends oa{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Oa extends oa{constructor(e,i,s){super(new Float32Array(e),i,s)}}let pE=0;const Ni=new rn,Bd=new Vn,ro=new ct,_i=new Pl,yl=new Pl,An=new ct;class za extends cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pE++}),this.uuid=bo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mS(e)?SS:xS)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new xe().getNormalMatrix(e);s.applyNormalMatrix(f),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ni.makeRotationFromQuaternion(e),this.applyMatrix4(Ni),this}rotateX(e){return Ni.makeRotationX(e),this.applyMatrix4(Ni),this}rotateY(e){return Ni.makeRotationY(e),this.applyMatrix4(Ni),this}rotateZ(e){return Ni.makeRotationZ(e),this.applyMatrix4(Ni),this}translate(e,i,s){return Ni.makeTranslation(e,i,s),this.applyMatrix4(Ni),this}scale(e,i,s){return Ni.makeScale(e,i,s),this.applyMatrix4(Ni),this}lookAt(e){return Bd.lookAt(e),Bd.updateMatrix(),this.applyMatrix4(Bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ro).negate(),this.translate(ro.x,ro.y,ro.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,f=e.length;l<f;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Oa(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const f=e[l];i.setXYZ(l,f.x,f.y,f.z||0)}e.length>i.count&&de("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ct(-1/0,-1/0,-1/0),new ct(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const f=i[s];_i.setFromBufferAttribute(f),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hm);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ct,1/0);return}if(e){const s=this.boundingSphere.center;if(_i.setFromBufferAttribute(e),i)for(let f=0,h=i.length;f<h;f++){const d=i[f];yl.setFromBufferAttribute(d),this.morphTargetsRelative?(An.addVectors(_i.min,yl.min),_i.expandByPoint(An),An.addVectors(_i.max,yl.max),_i.expandByPoint(An)):(_i.expandByPoint(yl.min),_i.expandByPoint(yl.max))}_i.getCenter(s);let l=0;for(let f=0,h=e.count;f<h;f++)An.fromBufferAttribute(e,f),l=Math.max(l,s.distanceToSquared(An));if(i)for(let f=0,h=i.length;f<h;f++){const d=i[f],p=this.morphTargetsRelative;for(let g=0,_=d.count;g<_;g++)An.fromBufferAttribute(d,g),p&&(ro.fromBufferAttribute(e,g),An.add(ro)),l=Math.max(l,s.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,f=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oa(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let X=0;X<s.count;X++)d[X]=new ct,p[X]=new ct;const g=new ct,_=new ct,m=new ct,x=new pe,y=new pe,E=new pe,R=new ct,M=new ct;function S(X,A,w){g.fromBufferAttribute(s,X),_.fromBufferAttribute(s,A),m.fromBufferAttribute(s,w),x.fromBufferAttribute(f,X),y.fromBufferAttribute(f,A),E.fromBufferAttribute(f,w),_.sub(g),m.sub(g),y.sub(x),E.sub(x);const k=1/(y.x*E.y-E.x*y.y);isFinite(k)&&(R.copy(_).multiplyScalar(E.y).addScaledVector(m,-y.y).multiplyScalar(k),M.copy(m).multiplyScalar(y.x).addScaledVector(_,-E.x).multiplyScalar(k),d[X].add(R),d[A].add(R),d[w].add(R),p[X].add(M),p[A].add(M),p[w].add(M))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let X=0,A=P.length;X<A;++X){const w=P[X],k=w.start,st=w.count;for(let it=k,pt=k+st;it<pt;it+=3)S(e.getX(it+0),e.getX(it+1),e.getX(it+2))}const H=new ct,O=new ct,I=new ct,D=new ct;function N(X){I.fromBufferAttribute(l,X),D.copy(I);const A=d[X];H.copy(A),H.sub(I.multiplyScalar(I.dot(A))).normalize(),O.crossVectors(D,A);const k=O.dot(p[X])<0?-1:1;h.setXYZW(X,H.x,H.y,H.z,k)}for(let X=0,A=P.length;X<A;++X){const w=P[X],k=w.start,st=w.count;for(let it=k,pt=k+st;it<pt;it+=3)N(e.getX(it+0)),N(e.getX(it+1)),N(e.getX(it+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new oa(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,y=s.count;x<y;x++)s.setXYZ(x,0,0,0);const l=new ct,f=new ct,h=new ct,d=new ct,p=new ct,g=new ct,_=new ct,m=new ct;if(e)for(let x=0,y=e.count;x<y;x+=3){const E=e.getX(x+0),R=e.getX(x+1),M=e.getX(x+2);l.fromBufferAttribute(i,E),f.fromBufferAttribute(i,R),h.fromBufferAttribute(i,M),_.subVectors(h,f),m.subVectors(l,f),_.cross(m),d.fromBufferAttribute(s,E),p.fromBufferAttribute(s,R),g.fromBufferAttribute(s,M),d.add(_),p.add(_),g.add(_),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(R,p.x,p.y,p.z),s.setXYZ(M,g.x,g.y,g.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),f.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),_.subVectors(h,f),m.subVectors(l,f),_.cross(m),s.setXYZ(x+0,_.x,_.y,_.z),s.setXYZ(x+1,_.x,_.y,_.z),s.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)An.fromBufferAttribute(e,i),An.normalize(),e.setXYZ(i,An.x,An.y,An.z)}toNonIndexed(){function e(d,p){const g=d.array,_=d.itemSize,m=d.normalized,x=new g.constructor(p.length*_);let y=0,E=0;for(let R=0,M=p.length;R<M;R++){d.isInterleavedBufferAttribute?y=p[R]*d.data.stride+d.offset:y=p[R]*_;for(let S=0;S<_;S++)x[E++]=g[y++]}return new oa(x,_,m)}if(this.index===null)return de("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new za,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],g=e(p,s);i.setAttribute(d,g)}const f=this.morphAttributes;for(const d in f){const p=[],g=f[d];for(let _=0,m=g.length;_<m;_++){const x=g[_],y=e(x,s);p.push(y)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const g=h[d];i.addGroup(g.start,g.count,g.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const g in p)p[g]!==void 0&&(e[g]=p[g]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const g=s[p];e.data.attributes[p]=g.toJSON(e.data)}const l={};let f=!1;for(const p in this.morphAttributes){const g=this.morphAttributes[p],_=[];for(let m=0,x=g.length;m<x;m++){const y=g[m];_.push(y.toJSON(e.data))}_.length>0&&(l[p]=_,f=!0)}f&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const g in l){const _=l[g];this.setAttribute(g,_.clone(i))}const f=e.morphAttributes;for(const g in f){const _=[],m=f[g];for(let x=0,y=m.length;x<y;x++)_.push(m[x].clone(i));this.morphAttributes[g]=_}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let g=0,_=h.length;g<_;g++){const m=h[g];this.addGroup(m.start,m.count,m.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nx=new rn,Qs=new dm,vu=new hm,ix=new ct,xu=new ct,Su=new ct,yu=new ct,Hd=new ct,Mu=new ct,ax=new ct,bu=new ct;class cn extends Vn{constructor(e=new za,i=new vS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=l.length;f<h;f++){const d=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,f=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(f&&d){Mu.set(0,0,0);for(let p=0,g=f.length;p<g;p++){const _=d[p],m=f[p];_!==0&&(Hd.fromBufferAttribute(m,e),h?Mu.addScaledVector(Hd,_):Mu.addScaledVector(Hd.sub(i),_))}i.add(Mu)}return i}raycast(e,i){const s=this.geometry,l=this.material,f=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),vu.copy(s.boundingSphere),vu.applyMatrix4(f),Qs.copy(e.ray).recast(e.near),!(vu.containsPoint(Qs.origin)===!1&&(Qs.intersectSphere(vu,ix)===null||Qs.origin.distanceToSquared(ix)>(e.far-e.near)**2))&&(nx.copy(f).invert(),Qs.copy(e.ray).applyMatrix4(nx),!(s.boundingBox!==null&&Qs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Qs)))}_computeIntersections(e,i,s){let l;const f=this.geometry,h=this.material,d=f.index,p=f.attributes.position,g=f.attributes.uv,_=f.attributes.uv1,m=f.attributes.normal,x=f.groups,y=f.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,R=x.length;E<R;E++){const M=x[E],S=h[M.materialIndex],P=Math.max(M.start,y.start),H=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let O=P,I=H;O<I;O+=3){const D=d.getX(O),N=d.getX(O+1),X=d.getX(O+2);l=Eu(this,S,e,s,g,_,m,D,N,X),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),R=Math.min(d.count,y.start+y.count);for(let M=E,S=R;M<S;M+=3){const P=d.getX(M),H=d.getX(M+1),O=d.getX(M+2);l=Eu(this,h,e,s,g,_,m,P,H,O),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let E=0,R=x.length;E<R;E++){const M=x[E],S=h[M.materialIndex],P=Math.max(M.start,y.start),H=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let O=P,I=H;O<I;O+=3){const D=O,N=O+1,X=O+2;l=Eu(this,S,e,s,g,_,m,D,N,X),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),R=Math.min(p.count,y.start+y.count);for(let M=E,S=R;M<S;M+=3){const P=M,H=M+1,O=M+2;l=Eu(this,h,e,s,g,_,m,P,H,O),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function mE(o,e,i,s,l,f,h,d){let p;if(e.side===oi?p=s.intersectTriangle(h,f,l,!0,d):p=s.intersectTriangle(l,f,h,e.side===Ms,d),p===null)return null;bu.copy(d),bu.applyMatrix4(o.matrixWorld);const g=i.ray.origin.distanceTo(bu);return g<i.near||g>i.far?null:{distance:g,point:bu.clone(),object:o}}function Eu(o,e,i,s,l,f,h,d,p,g){o.getVertexPosition(d,xu),o.getVertexPosition(p,Su),o.getVertexPosition(g,yu);const _=mE(o,e,i,s,xu,Su,yu,ax);if(_){const m=new ct;Vi.getBarycoord(ax,xu,Su,yu,m),l&&(_.uv=Vi.getInterpolatedAttribute(l,d,p,g,m,new pe)),f&&(_.uv1=Vi.getInterpolatedAttribute(f,d,p,g,m,new pe)),h&&(_.normal=Vi.getInterpolatedAttribute(h,d,p,g,m,new ct),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:p,c:g,normal:new ct,materialIndex:0};Vi.getNormal(xu,Su,yu,x.normal),_.face=x,_.barycoord=m}return _}class Kn extends za{constructor(e=1,i=1,s=1,l=1,f=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:f,depthSegments:h};const d=this;l=Math.floor(l),f=Math.floor(f),h=Math.floor(h);const p=[],g=[],_=[],m=[];let x=0,y=0;E("z","y","x",-1,-1,s,i,e,h,f,0),E("z","y","x",1,-1,s,i,-e,h,f,1),E("x","z","y",1,1,e,s,i,l,h,2),E("x","z","y",1,-1,e,s,-i,l,h,3),E("x","y","z",1,-1,e,i,s,l,f,4),E("x","y","z",-1,-1,e,i,-s,l,f,5),this.setIndex(p),this.setAttribute("position",new Oa(g,3)),this.setAttribute("normal",new Oa(_,3)),this.setAttribute("uv",new Oa(m,2));function E(R,M,S,P,H,O,I,D,N,X,A){const w=O/N,k=I/X,st=O/2,it=I/2,pt=D/2,dt=N+1,Z=X+1;let K=0,ft=0;const At=new ct;for(let G=0;G<Z;G++){const z=G*k-it;for(let Et=0;Et<dt;Et++){const Rt=Et*w-st;At[R]=Rt*P,At[M]=z*H,At[S]=pt,g.push(At.x,At.y,At.z),At[R]=0,At[M]=0,At[S]=D>0?1:-1,_.push(At.x,At.y,At.z),m.push(Et/N),m.push(1-G/X),K+=1}}for(let G=0;G<X;G++)for(let z=0;z<N;z++){const Et=x+z+dt*G,Rt=x+z+dt*(G+1),F=x+(z+1)+dt*(G+1),rt=x+(z+1)+dt*G;p.push(Et,Rt,rt),p.push(Rt,F,rt),ft+=6}d.addGroup(y,ft,A),y+=ft,x+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Mo(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(de("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Zn(o){const e={};for(let i=0;i<o.length;i++){const s=Mo(o[i]);for(const l in s)e[l]=s[l]}return e}function gE(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function yS(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ie.workingColorSpace}const _E={clone:Mo,merge:Zn};var vE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ua extends Il{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vE,this.fragmentShader=xE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mo(e.uniforms),this.uniformsGroups=gE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}let MS=class extends Vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=aa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const vs=new ct,sx=new pe,rx=new pe;class vi extends MS{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Ul*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Al*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ul*2*Math.atan(Math.tan(Al*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){vs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vs.x,vs.y).multiplyScalar(-e/vs.z),vs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(vs.x,vs.y).multiplyScalar(-e/vs.z)}getViewSize(e,i){return this.getViewBounds(e,sx,rx),i.subVectors(rx,sx)}setViewOffset(e,i,s,l,f,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Al*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,f=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,g=h.fullHeight;f+=h.offsetX*l/p,i-=h.offsetY*s/g,l*=h.width/p,s*=h.height/g}const d=this.filmOffset;d!==0&&(f+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const oo=-90,lo=1;class SE extends Vn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new vi(oo,lo,e,i);l.layers=this.layers,this.add(l);const f=new vi(oo,lo,e,i);f.layers=this.layers,this.add(f);const h=new vi(oo,lo,e,i);h.layers=this.layers,this.add(h);const d=new vi(oo,lo,e,i);d.layers=this.layers,this.add(d);const p=new vi(oo,lo,e,i);p.layers=this.layers,this.add(p);const g=new vi(oo,lo,e,i);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,f,h,d,p]=i;for(const g of i)this.remove(g);if(e===aa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Iu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of i)this.add(g),g.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,h,d,p,g,_]=this.children,m=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,f),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,p),e.setRenderTarget(s,4,l),e.render(i,g),s.texture.generateMipmaps=R,e.setRenderTarget(s,5,l),e.render(i,_),e.setRenderTarget(m,x,y),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class bS extends Gn{constructor(e=[],i=or,s,l,f,h,d,p,g,_){super(e,i,s,l,f,h,d,p,g,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ES extends ra{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new bS(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Kn(5,5,5),f=new ua({name:"CubemapFromEquirect",uniforms:Mo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:oi,blending:Ua});f.uniforms.tEquirect.value=i;const h=new cn(l,f),d=i.minFilter;return i.minFilter===sr&&(i.minFilter=Hn),new SE(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const f=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(f)}}class po extends Vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yE={type:"move"};class Gd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new po,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new po,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ct,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ct),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new po,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ct,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ct),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,f=null,h=null;const d=this._targetRay,p=this._grip,g=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(g&&e.hand){h=!0;for(const R of e.hand.values()){const M=i.getJointPose(R,s),S=this._getHandJoint(g,R);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const _=g.joints["index-finger-tip"],m=g.joints["thumb-tip"],x=_.position.distanceTo(m.position),y=.02,E=.005;g.inputState.pinching&&x>y+E?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&x<=y-E&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,s),f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,f.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(f.linearVelocity)):p.hasLinearVelocity=!1,f.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(f.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&f!==null&&(l=f),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(yE)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=f!==null),g!==null&&(g.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new po;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class ME extends Vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ca,this.environmentIntensity=1,this.environmentRotation=new ca,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class bE extends Gn{constructor(e=null,i=1,s=1,l,f,h,d,p,g=Pn,_=Pn,m,x){super(null,h,d,p,g,_,l,f,m,x),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vd=new ct,EE=new ct,TE=new xe;class xs{constructor(e=new ct(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Vd.subVectors(s,i).cross(EE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Vd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/l;return f<0||f>1?null:i.copy(e.start).addScaledVector(s,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||TE.getNormalMatrix(e),l=this.coplanarPoint(Vd).applyMatrix4(e),f=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Js=new hm,AE=new pe(.5,.5),Tu=new ct;class mm{constructor(e=new xs,i=new xs,s=new xs,l=new xs,f=new xs,h=new xs){this.planes=[e,i,s,l,f,h]}set(e,i,s,l,f,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(f),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=aa,s=!1){const l=this.planes,f=e.elements,h=f[0],d=f[1],p=f[2],g=f[3],_=f[4],m=f[5],x=f[6],y=f[7],E=f[8],R=f[9],M=f[10],S=f[11],P=f[12],H=f[13],O=f[14],I=f[15];if(l[0].setComponents(g-h,y-_,S-E,I-P).normalize(),l[1].setComponents(g+h,y+_,S+E,I+P).normalize(),l[2].setComponents(g+d,y+m,S+R,I+H).normalize(),l[3].setComponents(g-d,y-m,S-R,I-H).normalize(),s)l[4].setComponents(p,x,M,O).normalize(),l[5].setComponents(g-p,y-x,S-M,I-O).normalize();else if(l[4].setComponents(g-p,y-x,S-M,I-O).normalize(),i===aa)l[5].setComponents(g+p,y+x,S+M,I+O).normalize();else if(i===Iu)l[5].setComponents(p,x,M,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Js.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Js.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Js)}intersectsSprite(e){Js.center.set(0,0,0);const i=AE.distanceTo(e.center);return Js.radius=.7071067811865476+i,Js.applyMatrix4(e.matrixWorld),this.intersectsSphere(Js)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Tu.x=l.normal.x>0?e.max.x:e.min.x,Tu.y=l.normal.y>0?e.max.y:e.min.y,Tu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Tu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ox extends Gn{constructor(e,i,s,l,f,h,d,p,g){super(e,i,s,l,f,h,d,p,g),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ll extends Gn{constructor(e,i,s=la,l,f,h,d=Pn,p=Pn,g,_=Ia,m=1){if(_!==Ia&&_!==rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:m};super(x,l,f,h,d,p,_,s,g),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class CE extends Ll{constructor(e,i=la,s=or,l,f,h=Pn,d=Pn,p,g=Ia){const _={width:e,height:e,depth:1},m=[_,_,_,_,_,_];super(e,e,i,s,l,f,h,d,p,g),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class TS extends Gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class zl extends za{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const f=e/2,h=i/2,d=Math.floor(s),p=Math.floor(l),g=d+1,_=p+1,m=e/d,x=i/p,y=[],E=[],R=[],M=[];for(let S=0;S<_;S++){const P=S*x-h;for(let H=0;H<g;H++){const O=H*m-f;E.push(O,-P,0),R.push(0,0,1),M.push(H/d),M.push(1-S/p)}}for(let S=0;S<p;S++)for(let P=0;P<d;P++){const H=P+g*S,O=P+g*(S+1),I=P+1+g*(S+1),D=P+1+g*S;y.push(H,O,D),y.push(O,I,D)}this.setIndex(y),this.setAttribute("position",new Oa(E,3)),this.setAttribute("normal",new Oa(R,3)),this.setAttribute("uv",new Oa(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zl(e.width,e.height,e.widthSegments,e.heightSegments)}}class wE extends ua{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class si extends Il{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pS,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ca,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class RE extends si{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ee(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class DE extends Il{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class NE extends Il{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class gm extends Vn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const kd=new rn,lx=new ct,cx=new ct;class AS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=xi,this.map=null,this.mapPass=null,this.matrix=new rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mm,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new un(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;lx.setFromMatrixPosition(e.matrixWorld),i.position.copy(lx),cx.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(cx),i.updateMatrixWorld(),kd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(kd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class UE extends AS{constructor(){super(new vi(90,1,.5,500)),this.isPointLightShadow=!0}}class LE extends gm{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new UE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class _m extends MS{constructor(e=-1,i=1,s=1,l=-1,f=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=f,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,f,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let f=s-e,h=s+e,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=g*this.view.offsetX,h=f+g*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(f,h,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class OE extends AS{constructor(){super(new _m(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xd extends gm{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vn.DEFAULT_UP),this.updateMatrix(),this.target=new Vn,this.shadow=new OE}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class PE extends gm{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class IE extends vi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class zE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const ux=new rn;class FE{constructor(e,i,s=0,l=1/0){this.ray=new dm(e,i),this.near=s,this.far=l,this.camera=null,this.layers=new pm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Pe("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return ux.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ux),this}intersectObject(e,i=!0,s=[]){return Wp(e,this,s,i),s.sort(fx),s}intersectObjects(e,i=!0,s=[]){for(let l=0,f=e.length;l<f;l++)Wp(e[l],this,s,i);return s.sort(fx),s}}function fx(o,e){return o.distance-e.distance}function Wp(o,e,i,s){let l=!0;if(o.layers.test(e.layers)&&o.raycast(e,i)===!1&&(l=!1),l===!0&&s===!0){const f=o.children;for(let h=0,d=f.length;h<d;h++)Wp(f[h],e,i,!0)}}class hx{constructor(e=1,i=0,s=0){this.radius=e,this.phi=i,this.theta=s}set(e,i,s){return this.radius=e,this.phi=i,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ee(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,s){return this.radius=Math.sqrt(e*e+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(Ee(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class BE extends cr{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){de("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function dx(o,e,i,s){const l=HE(s);switch(i){case fS:return o*e;case dS:return o*e/l.components*l.byteLength;case sm:return o*e/l.components*l.byteLength;case So:return o*e*2/l.components*l.byteLength;case rm:return o*e*2/l.components*l.byteLength;case hS:return o*e*3/l.components*l.byteLength;case ki:return o*e*4/l.components*l.byteLength;case om:return o*e*4/l.components*l.byteLength;case Du:case Nu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Uu:case Lu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case gp:case vp:return Math.max(o,16)*Math.max(e,8)/4;case mp:case _p:return Math.max(o,8)*Math.max(e,8)/2;case xp:case Sp:case Mp:case bp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case yp:case Ep:case Tp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ap:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Cp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case wp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Rp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Dp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Np:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Up:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Lp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Op:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Pp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Ip:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case zp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Fp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Bp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Hp:case Gp:case Vp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case kp:case Xp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case jp:case Yp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function HE(o){switch(o){case xi:case oS:return{byteLength:1,components:1};case Rl:case lS:case Pa:return{byteLength:2,components:1};case im:case am:return{byteLength:2,components:4};case la:case nm:case ia:return{byteLength:4,components:1};case cS:case uS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tm}}));typeof window<"u"&&(window.__THREE__?de("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function CS(){let o=null,e=!1,i=null,s=null;function l(f,h){i(f,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function GE(o){const e=new WeakMap;function i(d,p){const g=d.array,_=d.usage,m=g.byteLength,x=o.createBuffer();o.bindBuffer(p,x),o.bufferData(p,g,_),d.onUploadCallback();let y;if(g instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&g instanceof Float16Array)y=o.HALF_FLOAT;else if(g instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(g instanceof Int16Array)y=o.SHORT;else if(g instanceof Uint32Array)y=o.UNSIGNED_INT;else if(g instanceof Int32Array)y=o.INT;else if(g instanceof Int8Array)y=o.BYTE;else if(g instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:x,type:y,bytesPerElement:g.BYTES_PER_ELEMENT,version:d.version,size:m}}function s(d,p,g){const _=p.array,m=p.updateRanges;if(o.bindBuffer(g,d),m.length===0)o.bufferSubData(g,0,_);else{m.sort((y,E)=>y.start-E.start);let x=0;for(let y=1;y<m.length;y++){const E=m[x],R=m[y];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++x,m[x]=R)}m.length=x+1;for(let y=0,E=m.length;y<E;y++){const R=m[y];o.bufferSubData(g,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function f(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(o.deleteBuffer(p.buffer),e.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const g=e.get(d);if(g===void 0)e.set(d,i(d,p));else if(g.version<d.version){if(g.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(g.buffer,d,p),g.version=d.version}}return{get:l,remove:f,update:h}}var VE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,XE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,WE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ZE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,KE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,QE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,JE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$E=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,eT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,iT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,aT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,fT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_T=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vT="gl_FragColor = linearToOutputTexel( gl_FragColor );",xT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ST=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,MT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ET=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,TT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,RT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,DT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,UT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,LT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,OT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,PT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,BT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,HT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,GT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,VT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,WT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,QT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$T=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,aA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,oA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_A=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,SA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,EA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,TA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,AA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,CA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,RA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,DA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,NA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,LA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,OA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,PA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,IA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,BA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,HA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,WA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ZA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,KA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,QA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$A=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,t2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,n2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,r2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,l2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,c2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,h2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,g2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,x2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,S2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Se={alphahash_fragment:VE,alphahash_pars_fragment:kE,alphamap_fragment:XE,alphamap_pars_fragment:jE,alphatest_fragment:YE,alphatest_pars_fragment:qE,aomap_fragment:WE,aomap_pars_fragment:ZE,batching_pars_vertex:KE,batching_vertex:QE,begin_vertex:JE,beginnormal_vertex:$E,bsdfs:tT,iridescence_fragment:eT,bumpmap_pars_fragment:nT,clipping_planes_fragment:iT,clipping_planes_pars_fragment:aT,clipping_planes_pars_vertex:sT,clipping_planes_vertex:rT,color_fragment:oT,color_pars_fragment:lT,color_pars_vertex:cT,color_vertex:uT,common:fT,cube_uv_reflection_fragment:hT,defaultnormal_vertex:dT,displacementmap_pars_vertex:pT,displacementmap_vertex:mT,emissivemap_fragment:gT,emissivemap_pars_fragment:_T,colorspace_fragment:vT,colorspace_pars_fragment:xT,envmap_fragment:ST,envmap_common_pars_fragment:yT,envmap_pars_fragment:MT,envmap_pars_vertex:bT,envmap_physical_pars_fragment:OT,envmap_vertex:ET,fog_vertex:TT,fog_pars_vertex:AT,fog_fragment:CT,fog_pars_fragment:wT,gradientmap_pars_fragment:RT,lightmap_pars_fragment:DT,lights_lambert_fragment:NT,lights_lambert_pars_fragment:UT,lights_pars_begin:LT,lights_toon_fragment:PT,lights_toon_pars_fragment:IT,lights_phong_fragment:zT,lights_phong_pars_fragment:FT,lights_physical_fragment:BT,lights_physical_pars_fragment:HT,lights_fragment_begin:GT,lights_fragment_maps:VT,lights_fragment_end:kT,logdepthbuf_fragment:XT,logdepthbuf_pars_fragment:jT,logdepthbuf_pars_vertex:YT,logdepthbuf_vertex:qT,map_fragment:WT,map_pars_fragment:ZT,map_particle_fragment:KT,map_particle_pars_fragment:QT,metalnessmap_fragment:JT,metalnessmap_pars_fragment:$T,morphinstance_vertex:tA,morphcolor_vertex:eA,morphnormal_vertex:nA,morphtarget_pars_vertex:iA,morphtarget_vertex:aA,normal_fragment_begin:sA,normal_fragment_maps:rA,normal_pars_fragment:oA,normal_pars_vertex:lA,normal_vertex:cA,normalmap_pars_fragment:uA,clearcoat_normal_fragment_begin:fA,clearcoat_normal_fragment_maps:hA,clearcoat_pars_fragment:dA,iridescence_pars_fragment:pA,opaque_fragment:mA,packing:gA,premultiplied_alpha_fragment:_A,project_vertex:vA,dithering_fragment:xA,dithering_pars_fragment:SA,roughnessmap_fragment:yA,roughnessmap_pars_fragment:MA,shadowmap_pars_fragment:bA,shadowmap_pars_vertex:EA,shadowmap_vertex:TA,shadowmask_pars_fragment:AA,skinbase_vertex:CA,skinning_pars_vertex:wA,skinning_vertex:RA,skinnormal_vertex:DA,specularmap_fragment:NA,specularmap_pars_fragment:UA,tonemapping_fragment:LA,tonemapping_pars_fragment:OA,transmission_fragment:PA,transmission_pars_fragment:IA,uv_pars_fragment:zA,uv_pars_vertex:FA,uv_vertex:BA,worldpos_vertex:HA,background_vert:GA,background_frag:VA,backgroundCube_vert:kA,backgroundCube_frag:XA,cube_vert:jA,cube_frag:YA,depth_vert:qA,depth_frag:WA,distance_vert:ZA,distance_frag:KA,equirect_vert:QA,equirect_frag:JA,linedashed_vert:$A,linedashed_frag:t2,meshbasic_vert:e2,meshbasic_frag:n2,meshlambert_vert:i2,meshlambert_frag:a2,meshmatcap_vert:s2,meshmatcap_frag:r2,meshnormal_vert:o2,meshnormal_frag:l2,meshphong_vert:c2,meshphong_frag:u2,meshphysical_vert:f2,meshphysical_frag:h2,meshtoon_vert:d2,meshtoon_frag:p2,points_vert:m2,points_frag:g2,shadow_vert:_2,shadow_frag:v2,sprite_vert:x2,sprite_frag:S2},Bt={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},na={basic:{uniforms:Zn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:Zn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new ye(0)}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:Zn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:Zn([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:Zn([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new ye(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:Zn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:Zn([Bt.points,Bt.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:Zn([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:Zn([Bt.common,Bt.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:Zn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:Zn([Bt.sprite,Bt.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distance:{uniforms:Zn([Bt.common,Bt.displacementmap,{referencePosition:{value:new ct},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distance_vert,fragmentShader:Se.distance_frag},shadow:{uniforms:Zn([Bt.lights,Bt.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};na.physical={uniforms:Zn([na.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};const Au={r:0,b:0,g:0},$s=new ca,y2=new rn;function M2(o,e,i,s,l,f,h){const d=new ye(0);let p=f===!0?0:1,g,_,m=null,x=0,y=null;function E(H){let O=H.isScene===!0?H.background:null;return O&&O.isTexture&&(O=(H.backgroundBlurriness>0?i:e).get(O)),O}function R(H){let O=!1;const I=E(H);I===null?S(d,p):I&&I.isColor&&(S(I,1),O=!0);const D=o.xr.getEnvironmentBlendMode();D==="additive"?s.buffers.color.setClear(0,0,0,1,h):D==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||O)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(H,O){const I=E(O);I&&(I.isCubeTexture||I.mapping===Fu)?(_===void 0&&(_=new cn(new Kn(1,1,1),new ua({name:"BackgroundCubeMaterial",uniforms:Mo(na.backgroundCube.uniforms),vertexShader:na.backgroundCube.vertexShader,fragmentShader:na.backgroundCube.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(D,N,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),$s.copy(O.backgroundRotation),$s.x*=-1,$s.y*=-1,$s.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&($s.y*=-1,$s.z*=-1),_.material.uniforms.envMap.value=I,_.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(y2.makeRotationFromEuler($s)),_.material.toneMapped=Ie.getTransfer(I.colorSpace)!==je,(m!==I||x!==I.version||y!==o.toneMapping)&&(_.material.needsUpdate=!0,m=I,x=I.version,y=o.toneMapping),_.layers.enableAll(),H.unshift(_,_.geometry,_.material,0,0,null)):I&&I.isTexture&&(g===void 0&&(g=new cn(new zl(2,2),new ua({name:"BackgroundMaterial",uniforms:Mo(na.background.uniforms),vertexShader:na.background.vertexShader,fragmentShader:na.background.fragmentShader,side:Ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(g)),g.material.uniforms.t2D.value=I,g.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,g.material.toneMapped=Ie.getTransfer(I.colorSpace)!==je,I.matrixAutoUpdate===!0&&I.updateMatrix(),g.material.uniforms.uvTransform.value.copy(I.matrix),(m!==I||x!==I.version||y!==o.toneMapping)&&(g.material.needsUpdate=!0,m=I,x=I.version,y=o.toneMapping),g.layers.enableAll(),H.unshift(g,g.geometry,g.material,0,0,null))}function S(H,O){H.getRGB(Au,yS(o)),s.buffers.color.setClear(Au.r,Au.g,Au.b,O,h)}function P(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return d},setClearColor:function(H,O=1){d.set(H),p=O,S(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(H){p=H,S(d,p)},render:R,addToRenderList:M,dispose:P}}function b2(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=x(null);let f=l,h=!1;function d(w,k,st,it,pt){let dt=!1;const Z=m(it,st,k);f!==Z&&(f=Z,g(f.object)),dt=y(w,it,st,pt),dt&&E(w,it,st,pt),pt!==null&&e.update(pt,o.ELEMENT_ARRAY_BUFFER),(dt||h)&&(h=!1,O(w,k,st,it),pt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(pt).buffer))}function p(){return o.createVertexArray()}function g(w){return o.bindVertexArray(w)}function _(w){return o.deleteVertexArray(w)}function m(w,k,st){const it=st.wireframe===!0;let pt=s[w.id];pt===void 0&&(pt={},s[w.id]=pt);let dt=pt[k.id];dt===void 0&&(dt={},pt[k.id]=dt);let Z=dt[it];return Z===void 0&&(Z=x(p()),dt[it]=Z),Z}function x(w){const k=[],st=[],it=[];for(let pt=0;pt<i;pt++)k[pt]=0,st[pt]=0,it[pt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:st,attributeDivisors:it,object:w,attributes:{},index:null}}function y(w,k,st,it){const pt=f.attributes,dt=k.attributes;let Z=0;const K=st.getAttributes();for(const ft in K)if(K[ft].location>=0){const G=pt[ft];let z=dt[ft];if(z===void 0&&(ft==="instanceMatrix"&&w.instanceMatrix&&(z=w.instanceMatrix),ft==="instanceColor"&&w.instanceColor&&(z=w.instanceColor)),G===void 0||G.attribute!==z||z&&G.data!==z.data)return!0;Z++}return f.attributesNum!==Z||f.index!==it}function E(w,k,st,it){const pt={},dt=k.attributes;let Z=0;const K=st.getAttributes();for(const ft in K)if(K[ft].location>=0){let G=dt[ft];G===void 0&&(ft==="instanceMatrix"&&w.instanceMatrix&&(G=w.instanceMatrix),ft==="instanceColor"&&w.instanceColor&&(G=w.instanceColor));const z={};z.attribute=G,G&&G.data&&(z.data=G.data),pt[ft]=z,Z++}f.attributes=pt,f.attributesNum=Z,f.index=it}function R(){const w=f.newAttributes;for(let k=0,st=w.length;k<st;k++)w[k]=0}function M(w){S(w,0)}function S(w,k){const st=f.newAttributes,it=f.enabledAttributes,pt=f.attributeDivisors;st[w]=1,it[w]===0&&(o.enableVertexAttribArray(w),it[w]=1),pt[w]!==k&&(o.vertexAttribDivisor(w,k),pt[w]=k)}function P(){const w=f.newAttributes,k=f.enabledAttributes;for(let st=0,it=k.length;st<it;st++)k[st]!==w[st]&&(o.disableVertexAttribArray(st),k[st]=0)}function H(w,k,st,it,pt,dt,Z){Z===!0?o.vertexAttribIPointer(w,k,st,pt,dt):o.vertexAttribPointer(w,k,st,it,pt,dt)}function O(w,k,st,it){R();const pt=it.attributes,dt=st.getAttributes(),Z=k.defaultAttributeValues;for(const K in dt){const ft=dt[K];if(ft.location>=0){let At=pt[K];if(At===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(At=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(At=w.instanceColor)),At!==void 0){const G=At.normalized,z=At.itemSize,Et=e.get(At);if(Et===void 0)continue;const Rt=Et.buffer,F=Et.type,rt=Et.bytesPerElement,Y=F===o.INT||F===o.UNSIGNED_INT||At.gpuType===nm;if(At.isInterleavedBufferAttribute){const W=At.data,mt=W.stride,Tt=At.offset;if(W.isInstancedInterleavedBuffer){for(let yt=0;yt<ft.locationSize;yt++)S(ft.location+yt,W.meshPerAttribute);w.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let yt=0;yt<ft.locationSize;yt++)M(ft.location+yt);o.bindBuffer(o.ARRAY_BUFFER,Rt);for(let yt=0;yt<ft.locationSize;yt++)H(ft.location+yt,z/ft.locationSize,F,G,mt*rt,(Tt+z/ft.locationSize*yt)*rt,Y)}else{if(At.isInstancedBufferAttribute){for(let W=0;W<ft.locationSize;W++)S(ft.location+W,At.meshPerAttribute);w.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let W=0;W<ft.locationSize;W++)M(ft.location+W);o.bindBuffer(o.ARRAY_BUFFER,Rt);for(let W=0;W<ft.locationSize;W++)H(ft.location+W,z/ft.locationSize,F,G,z*rt,z/ft.locationSize*W*rt,Y)}}else if(Z!==void 0){const G=Z[K];if(G!==void 0)switch(G.length){case 2:o.vertexAttrib2fv(ft.location,G);break;case 3:o.vertexAttrib3fv(ft.location,G);break;case 4:o.vertexAttrib4fv(ft.location,G);break;default:o.vertexAttrib1fv(ft.location,G)}}}}P()}function I(){X();for(const w in s){const k=s[w];for(const st in k){const it=k[st];for(const pt in it)_(it[pt].object),delete it[pt];delete k[st]}delete s[w]}}function D(w){if(s[w.id]===void 0)return;const k=s[w.id];for(const st in k){const it=k[st];for(const pt in it)_(it[pt].object),delete it[pt];delete k[st]}delete s[w.id]}function N(w){for(const k in s){const st=s[k];if(st[w.id]===void 0)continue;const it=st[w.id];for(const pt in it)_(it[pt].object),delete it[pt];delete st[w.id]}}function X(){A(),h=!0,f!==l&&(f=l,g(f.object))}function A(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:A,dispose:I,releaseStatesOfGeometry:D,releaseStatesOfProgram:N,initAttributes:R,enableAttribute:M,disableUnusedAttributes:P}}function E2(o,e,i){let s;function l(g){s=g}function f(g,_){o.drawArrays(s,g,_),i.update(_,s,1)}function h(g,_,m){m!==0&&(o.drawArraysInstanced(s,g,_,m),i.update(_,s,m))}function d(g,_,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,g,0,_,0,m);let y=0;for(let E=0;E<m;E++)y+=_[E];i.update(y,s,1)}function p(g,_,m,x){if(m===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<g.length;E++)h(g[E],_[E],x[E]);else{y.multiDrawArraysInstancedWEBGL(s,g,0,_,0,x,0,m);let E=0;for(let R=0;R<m;R++)E+=_[R]*x[R];i.update(E,s,1)}}this.setMode=l,this.render=f,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function T2(o,e,i,s){let l;function f(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(N){return!(N!==ki&&s.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(N){const X=N===Pa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==xi&&s.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==ia&&!X)}function p(N){if(N==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=i.precision!==void 0?i.precision:"highp";const _=p(g);_!==g&&(de("WebGLRenderer:",g,"not supported, using",_,"instead."),g=_);const m=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),H=o.getParameter(o.MAX_VARYING_VECTORS),O=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),I=o.getParameter(o.MAX_SAMPLES),D=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:g,logarithmicDepthBuffer:m,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:P,maxVaryings:H,maxFragmentUniforms:O,maxSamples:I,samples:D}}function A2(o){const e=this;let i=null,s=0,l=!1,f=!1;const h=new xs,d=new xe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(m,x){const y=m.length!==0||x||s!==0||l;return l=x,s=m.length,y},this.beginShadows=function(){f=!0,_(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(m,x){i=_(m,x,0)},this.setState=function(m,x,y){const E=m.clippingPlanes,R=m.clipIntersection,M=m.clipShadows,S=o.get(m);if(!l||E===null||E.length===0||f&&!M)f?_(null):g();else{const P=f?0:s,H=P*4;let O=S.clippingState||null;p.value=O,O=_(E,x,H,y);for(let I=0;I!==H;++I)O[I]=i[I];S.clippingState=O,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=P}};function g(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(m,x,y,E){const R=m!==null?m.length:0;let M=null;if(R!==0){if(M=p.value,E!==!0||M===null){const S=y+R*4,P=x.matrixWorldInverse;d.getNormalMatrix(P),(M===null||M.length<S)&&(M=new Float32Array(S));for(let H=0,O=y;H!==R;++H,O+=4)h.copy(m[H]).applyMatrix4(P,d),h.normal.toArray(M,O),M[O+3]=h.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,M}}function C2(o){let e=new WeakMap;function i(h,d){return d===fp?h.mapping=or:d===hp&&(h.mapping=xo),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===fp||d===hp)if(e.has(h)){const p=e.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const g=new ES(p.height);return g.fromEquirectangularTexture(o,h),e.set(h,g),h.addEventListener("dispose",l),i(g.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function f(){e=new WeakMap}return{get:s,dispose:f}}const ys=4,px=[.125,.215,.35,.446,.526,.582],ar=20,w2=256,Ml=new _m,mx=new ye;let jd=null,Yd=0,qd=0,Wd=!1;const R2=new ct;class gx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,f={}){const{size:h=256,position:d=R2}=f;jd=this._renderer.getRenderTarget(),Yd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),Wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,s,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(jd,Yd,qd),this._renderer.xr.enabled=Wd,e.scissorTest=!1,co(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===or||e.mapping===xo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jd=this._renderer.getRenderTarget(),Yd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),Wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:Pa,format:ki,colorSpace:yo,depthBuffer:!1},l=_x(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_x(e,i,s);const{_lodMax:f}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=D2(f)),this._blurMaterial=U2(f,e,i),this._ggxMaterial=N2(f,e,i)}return l}_compileMaterial(e){const i=new cn(new za,e);this._renderer.compile(i,Ml)}_sceneToCubeUV(e,i,s,l,f){const p=new vi(90,1,i,s),g=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],m=this._renderer,x=m.autoClear,y=m.toneMapping;m.getClearColor(mx),m.toneMapping=sa,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(l),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new cn(new Kn,new vS({name:"PMREM.Background",side:oi,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,M=R.material;let S=!1;const P=e.background;P?P.isColor&&(M.color.copy(P),e.background=null,S=!0):(M.color.copy(mx),S=!0);for(let H=0;H<6;H++){const O=H%3;O===0?(p.up.set(0,g[H],0),p.position.set(f.x,f.y,f.z),p.lookAt(f.x+_[H],f.y,f.z)):O===1?(p.up.set(0,0,g[H]),p.position.set(f.x,f.y,f.z),p.lookAt(f.x,f.y+_[H],f.z)):(p.up.set(0,g[H],0),p.position.set(f.x,f.y,f.z),p.lookAt(f.x,f.y,f.z+_[H]));const I=this._cubeSize;co(l,O*I,H>2?I:0,I,I),m.setRenderTarget(l),S&&m.render(R,p),m.render(e,p)}m.toneMapping=y,m.autoClear=x,e.background=P}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===or||e.mapping===xo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=xx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vx());const f=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=f;const d=f.uniforms;d.envMap.value=e;const p=this._cubeSize;co(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(h,Ml)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let f=1;f<l;f++)this._applyGGXFilter(e,f-1,f);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,f=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const p=h.uniforms,g=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),m=Math.sqrt(g*g-_*_),x=0+g*1.25,y=m*x,{_lodMax:E}=this,R=this._sizeLods[s],M=3*R*(s>E-ys?s-E+ys:0),S=4*(this._cubeSize-R);p.envMap.value=e.texture,p.roughness.value=y,p.mipInt.value=E-i,co(f,M,S,3*R,2*R),l.setRenderTarget(f),l.render(d,Ml),p.envMap.value=f.texture,p.roughness.value=0,p.mipInt.value=E-s,co(e,M,S,3*R,2*R),l.setRenderTarget(e),l.render(d,Ml)}_blur(e,i,s,l,f){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",f),this._halfBlur(h,e,s,s,l,"longitudinal",f)}_halfBlur(e,i,s,l,f,h,d){const p=this._renderer,g=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Pe("blur direction must be either latitudinal or longitudinal!");const _=3,m=this._lodMeshes[l];m.material=g;const x=g.uniforms,y=this._sizeLods[s]-1,E=isFinite(f)?Math.PI/(2*y):2*Math.PI/(2*ar-1),R=f/E,M=isFinite(f)?1+Math.floor(_*R):ar;M>ar&&de(`sigmaRadians, ${f}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${ar}`);const S=[];let P=0;for(let N=0;N<ar;++N){const X=N/R,A=Math.exp(-X*X/2);S.push(A),N===0?P+=A:N<M&&(P+=2*A)}for(let N=0;N<S.length;N++)S[N]=S[N]/P;x.envMap.value=e.texture,x.samples.value=M,x.weights.value=S,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:H}=this;x.dTheta.value=E,x.mipInt.value=H-s;const O=this._sizeLods[l],I=3*O*(l>H-ys?l-H+ys:0),D=4*(this._cubeSize-O);co(i,I,D,3*O,2*O),p.setRenderTarget(i),p.render(m,Ml)}}function D2(o){const e=[],i=[],s=[];let l=o;const f=o-ys+1+px.length;for(let h=0;h<f;h++){const d=Math.pow(2,l);e.push(d);let p=1/d;h>o-ys?p=px[h-o+ys-1]:h===0&&(p=0),i.push(p);const g=1/(d-2),_=-g,m=1+g,x=[_,_,m,_,m,m,_,_,m,m,_,m],y=6,E=6,R=3,M=2,S=1,P=new Float32Array(R*E*y),H=new Float32Array(M*E*y),O=new Float32Array(S*E*y);for(let D=0;D<y;D++){const N=D%3*2/3-1,X=D>2?0:-1,A=[N,X,0,N+2/3,X,0,N+2/3,X+1,0,N,X,0,N+2/3,X+1,0,N,X+1,0];P.set(A,R*E*D),H.set(x,M*E*D);const w=[D,D,D,D,D,D];O.set(w,S*E*D)}const I=new za;I.setAttribute("position",new oa(P,R)),I.setAttribute("uv",new oa(H,M)),I.setAttribute("faceIndex",new oa(O,S)),s.push(new cn(I,null)),l>ys&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function _x(o,e,i){const s=new ra(o,e,i);return s.texture.mapping=Fu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function co(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function N2(o,e,i){return new ua({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:w2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function U2(o,e,i){const s=new Float32Array(ar),l=new ct(0,1,0);return new ua({name:"SphericalGaussianBlur",defines:{n:ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function vx(){return new ua({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function xx(){return new ua({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function Bu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function L2(o){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const p=d.mapping,g=p===fp||p===hp,_=p===or||p===xo;if(g||_){let m=e.get(d);const x=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new gx(o)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{const y=d.image;return g&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new gx(o)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",f),m.texture):null}}}return d}function l(d){let p=0;const g=6;for(let _=0;_<g;_++)d[_]!==void 0&&p++;return p===g}function f(d){const p=d.target;p.removeEventListener("dispose",f);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function O2(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=o.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Nl("WebGLRenderer: "+s+" extension not supported."),l}}}function P2(o,e,i,s){const l={},f=new WeakMap;function h(m){const x=m.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);x.removeEventListener("dispose",h),delete l[x.id];const y=f.get(x);y&&(e.remove(y),f.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(m,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function p(m){const x=m.attributes;for(const y in x)e.update(x[y],o.ARRAY_BUFFER)}function g(m){const x=[],y=m.index,E=m.attributes.position;let R=0;if(y!==null){const P=y.array;R=y.version;for(let H=0,O=P.length;H<O;H+=3){const I=P[H+0],D=P[H+1],N=P[H+2];x.push(I,D,D,N,N,I)}}else if(E!==void 0){const P=E.array;R=E.version;for(let H=0,O=P.length/3-1;H<O;H+=3){const I=H+0,D=H+1,N=H+2;x.push(I,D,D,N,N,I)}}else return;const M=new(mS(x)?SS:xS)(x,1);M.version=R;const S=f.get(m);S&&e.remove(S),f.set(m,M)}function _(m){const x=f.get(m);if(x){const y=m.index;y!==null&&x.version<y.version&&g(m)}else g(m);return f.get(m)}return{get:d,update:p,getWireframeAttribute:_}}function I2(o,e,i){let s;function l(x){s=x}let f,h;function d(x){f=x.type,h=x.bytesPerElement}function p(x,y){o.drawElements(s,y,f,x*h),i.update(y,s,1)}function g(x,y,E){E!==0&&(o.drawElementsInstanced(s,y,f,x*h,E),i.update(y,s,E))}function _(x,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,f,x,0,E);let M=0;for(let S=0;S<E;S++)M+=y[S];i.update(M,s,1)}function m(x,y,E,R){if(E===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let S=0;S<x.length;S++)g(x[S]/h,y[S],R[S]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,f,x,0,R,0,E);let S=0;for(let P=0;P<E;P++)S+=y[P]*R[P];i.update(S,s,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=g,this.renderMultiDraw=_,this.renderMultiDrawInstances=m}function z2(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(f/3);break;case o.LINES:i.lines+=d*(f/2);break;case o.LINE_STRIP:i.lines+=d*(f-1);break;case o.LINE_LOOP:i.lines+=d*f;break;case o.POINTS:i.points+=d*f;break;default:Pe("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function F2(o,e,i){const s=new WeakMap,l=new un;function f(h,d,p){const g=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,m=_!==void 0?_.length:0;let x=s.get(d);if(x===void 0||x.count!==m){let w=function(){X.dispose(),s.delete(d),d.removeEventListener("dispose",w)};var y=w;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],H=d.morphAttributes.color||[];let O=0;E===!0&&(O=1),R===!0&&(O=2),M===!0&&(O=3);let I=d.attributes.position.count*O,D=1;I>e.maxTextureSize&&(D=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const N=new Float32Array(I*D*4*m),X=new gS(N,I,D,m);X.type=ia,X.needsUpdate=!0;const A=O*4;for(let k=0;k<m;k++){const st=S[k],it=P[k],pt=H[k],dt=I*D*4*k;for(let Z=0;Z<st.count;Z++){const K=Z*A;E===!0&&(l.fromBufferAttribute(st,Z),N[dt+K+0]=l.x,N[dt+K+1]=l.y,N[dt+K+2]=l.z,N[dt+K+3]=0),R===!0&&(l.fromBufferAttribute(it,Z),N[dt+K+4]=l.x,N[dt+K+5]=l.y,N[dt+K+6]=l.z,N[dt+K+7]=0),M===!0&&(l.fromBufferAttribute(pt,Z),N[dt+K+8]=l.x,N[dt+K+9]=l.y,N[dt+K+10]=l.z,N[dt+K+11]=pt.itemSize===4?l.w:1)}}x={count:m,texture:X,size:new pe(I,D)},s.set(d,x),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let E=0;for(let M=0;M<g.length;M++)E+=g[M];const R=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(o,"morphTargetBaseInfluence",R),p.getUniforms().setValue(o,"morphTargetInfluences",g)}p.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:f}}function B2(o,e,i,s){let l=new WeakMap;function f(p){const g=s.render.frame,_=p.geometry,m=e.get(p,_);if(l.get(m)!==g&&(e.update(m),l.set(m,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==g&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,g))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==g&&(x.update(),l.set(x,g))}return m}function h(){l=new WeakMap}function d(p){const g=p.target;g.removeEventListener("dispose",d),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:f,dispose:h}}const H2={[tS]:"LINEAR_TONE_MAPPING",[eS]:"REINHARD_TONE_MAPPING",[nS]:"CINEON_TONE_MAPPING",[em]:"ACES_FILMIC_TONE_MAPPING",[aS]:"AGX_TONE_MAPPING",[sS]:"NEUTRAL_TONE_MAPPING",[iS]:"CUSTOM_TONE_MAPPING"};function G2(o,e,i,s,l){const f=new ra(e,i,{type:o,depthBuffer:s,stencilBuffer:l}),h=new ra(e,i,{type:Pa,depthBuffer:!1,stencilBuffer:!1}),d=new za;d.setAttribute("position",new Oa([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Oa([0,2,0,0,2,0],2));const p=new wE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),g=new cn(d,p),_=new _m(-1,1,1,-1,0,1);let m=null,x=null,y=!1,E,R=null,M=[],S=!1;this.setSize=function(P,H){f.setSize(P,H),h.setSize(P,H);for(let O=0;O<M.length;O++){const I=M[O];I.setSize&&I.setSize(P,H)}},this.setEffects=function(P){M=P,S=M.length>0&&M[0].isRenderPass===!0;const H=f.width,O=f.height;for(let I=0;I<M.length;I++){const D=M[I];D.setSize&&D.setSize(H,O)}},this.begin=function(P,H){if(y||P.toneMapping===sa&&M.length===0)return!1;if(R=H,H!==null){const O=H.width,I=H.height;(f.width!==O||f.height!==I)&&this.setSize(O,I)}return S===!1&&P.setRenderTarget(f),E=P.toneMapping,P.toneMapping=sa,!0},this.hasRenderPass=function(){return S},this.end=function(P,H){P.toneMapping=E,y=!0;let O=f,I=h;for(let D=0;D<M.length;D++){const N=M[D];if(N.enabled!==!1&&(N.render(P,I,O,H),N.needsSwap!==!1)){const X=O;O=I,I=X}}if(m!==P.outputColorSpace||x!==P.toneMapping){m=P.outputColorSpace,x=P.toneMapping,p.defines={},Ie.getTransfer(m)===je&&(p.defines.SRGB_TRANSFER="");const D=H2[x];D&&(p.defines[D]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=O.texture,P.setRenderTarget(R),P.render(g,_),R=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){f.dispose(),h.dispose(),d.dispose(),p.dispose()}}const wS=new Gn,Zp=new Ll(1,1),RS=new gS,DS=new aE,NS=new bS,Sx=[],yx=[],Mx=new Float32Array(16),bx=new Float32Array(9),Ex=new Float32Array(4);function Eo(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let f=Sx[l];if(f===void 0&&(f=new Float32Array(l),Sx[l]=f),e!==0){s.toArray(f,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(f,d)}return f}function Sn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function yn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Hu(o,e){let i=yx[e];i===void 0&&(i=new Int32Array(e),yx[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function V2(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function k2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2fv(this.addr,e),yn(i,e)}}function X2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Sn(i,e))return;o.uniform3fv(this.addr,e),yn(i,e)}}function j2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4fv(this.addr,e),yn(i,e)}}function Y2(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),yn(i,e)}else{if(Sn(i,s))return;Ex.set(s),o.uniformMatrix2fv(this.addr,!1,Ex),yn(i,s)}}function q2(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),yn(i,e)}else{if(Sn(i,s))return;bx.set(s),o.uniformMatrix3fv(this.addr,!1,bx),yn(i,s)}}function W2(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),yn(i,e)}else{if(Sn(i,s))return;Mx.set(s),o.uniformMatrix4fv(this.addr,!1,Mx),yn(i,s)}}function Z2(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function K2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2iv(this.addr,e),yn(i,e)}}function Q2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;o.uniform3iv(this.addr,e),yn(i,e)}}function J2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4iv(this.addr,e),yn(i,e)}}function $2(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function tC(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2uiv(this.addr,e),yn(i,e)}}function eC(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;o.uniform3uiv(this.addr,e),yn(i,e)}}function nC(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4uiv(this.addr,e),yn(i,e)}}function iC(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let f;this.type===o.SAMPLER_2D_SHADOW?(Zp.compareFunction=i.isReversedDepthBuffer()?cm:lm,f=Zp):f=wS,i.setTexture2D(e||f,l)}function aC(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||DS,l)}function sC(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||NS,l)}function rC(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||RS,l)}function oC(o){switch(o){case 5126:return V2;case 35664:return k2;case 35665:return X2;case 35666:return j2;case 35674:return Y2;case 35675:return q2;case 35676:return W2;case 5124:case 35670:return Z2;case 35667:case 35671:return K2;case 35668:case 35672:return Q2;case 35669:case 35673:return J2;case 5125:return $2;case 36294:return tC;case 36295:return eC;case 36296:return nC;case 35678:case 36198:case 36298:case 36306:case 35682:return iC;case 35679:case 36299:case 36307:return aC;case 35680:case 36300:case 36308:case 36293:return sC;case 36289:case 36303:case 36311:case 36292:return rC}}function lC(o,e){o.uniform1fv(this.addr,e)}function cC(o,e){const i=Eo(e,this.size,2);o.uniform2fv(this.addr,i)}function uC(o,e){const i=Eo(e,this.size,3);o.uniform3fv(this.addr,i)}function fC(o,e){const i=Eo(e,this.size,4);o.uniform4fv(this.addr,i)}function hC(o,e){const i=Eo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function dC(o,e){const i=Eo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function pC(o,e){const i=Eo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function mC(o,e){o.uniform1iv(this.addr,e)}function gC(o,e){o.uniform2iv(this.addr,e)}function _C(o,e){o.uniform3iv(this.addr,e)}function vC(o,e){o.uniform4iv(this.addr,e)}function xC(o,e){o.uniform1uiv(this.addr,e)}function SC(o,e){o.uniform2uiv(this.addr,e)}function yC(o,e){o.uniform3uiv(this.addr,e)}function MC(o,e){o.uniform4uiv(this.addr,e)}function bC(o,e,i){const s=this.cache,l=e.length,f=Hu(i,l);Sn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));let h;this.type===o.SAMPLER_2D_SHADOW?h=Zp:h=wS;for(let d=0;d!==l;++d)i.setTexture2D(e[d]||h,f[d])}function EC(o,e,i){const s=this.cache,l=e.length,f=Hu(i,l);Sn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||DS,f[h])}function TC(o,e,i){const s=this.cache,l=e.length,f=Hu(i,l);Sn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||NS,f[h])}function AC(o,e,i){const s=this.cache,l=e.length,f=Hu(i,l);Sn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||RS,f[h])}function CC(o){switch(o){case 5126:return lC;case 35664:return cC;case 35665:return uC;case 35666:return fC;case 35674:return hC;case 35675:return dC;case 35676:return pC;case 5124:case 35670:return mC;case 35667:case 35671:return gC;case 35668:case 35672:return _C;case 35669:case 35673:return vC;case 5125:return xC;case 36294:return SC;case 36295:return yC;case 36296:return MC;case 35678:case 36198:case 36298:case 36306:case 35682:return bC;case 35679:case 36299:case 36307:return EC;case 35680:case 36300:case 36308:case 36293:return TC;case 36289:case 36303:case 36311:case 36292:return AC}}class wC{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=oC(i.type)}}class RC{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=CC(i.type)}}class DC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let f=0,h=l.length;f!==h;++f){const d=l[f];d.setValue(e,i[d.id],s)}}}const Zd=/(\w+)(\])?(\[|\.)?/g;function Tx(o,e){o.seq.push(e),o.map[e.id]=e}function NC(o,e,i){const s=o.name,l=s.length;for(Zd.lastIndex=0;;){const f=Zd.exec(s),h=Zd.lastIndex;let d=f[1];const p=f[2]==="]",g=f[3];if(p&&(d=d|0),g===void 0||g==="["&&h+2===l){Tx(i,g===void 0?new wC(d,o,e):new RC(d,o,e));break}else{let m=i.map[d];m===void 0&&(m=new DC(d),Tx(i,m)),i=m}}}class Ou{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=e.getActiveUniform(i,h),p=e.getUniformLocation(i,d.name);NC(d,p,this)}const l=[],f=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):f.push(h);l.length>0&&(this.seq=l.concat(f))}setValue(e,i,s,l){const f=this.map[i];f!==void 0&&f.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let f=0,h=i.length;f!==h;++f){const d=i[f],p=s[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,f=e.length;l!==f;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function Ax(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const UC=37297;let LC=0;function OC(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let h=l;h<f;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const Cx=new xe;function PC(o){Ie._getMatrix(Cx,Ie.workingColorSpace,o);const e=`mat3( ${Cx.elements.map(i=>i.toFixed(4))} )`;switch(Ie.getTransfer(o)){case Pu:return[e,"LinearTransferOETF"];case je:return[e,"sRGBTransferOETF"];default:return de("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function wx(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(s&&f==="")return"";const h=/ERROR: 0:(\d+)/.exec(f);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+f+`

`+OC(o.getShaderSource(e),d)}else return f}function IC(o,e){const i=PC(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const zC={[tS]:"Linear",[eS]:"Reinhard",[nS]:"Cineon",[em]:"ACESFilmic",[aS]:"AgX",[sS]:"Neutral",[iS]:"Custom"};function FC(o,e){const i=zC[e];return i===void 0?(de("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Cu=new ct;function BC(){Ie.getLuminanceCoefficients(Cu);const o=Cu.x.toFixed(4),e=Cu.y.toFixed(4),i=Cu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function HC(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tl).join(`
`)}function GC(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function VC(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const f=o.getActiveAttrib(e,l),h=f.name;let d=1;f.type===o.FLOAT_MAT2&&(d=2),f.type===o.FLOAT_MAT3&&(d=3),f.type===o.FLOAT_MAT4&&(d=4),i[h]={type:f.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Tl(o){return o!==""}function Rx(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dx(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kp(o){return o.replace(kC,jC)}const XC=new Map;function jC(o,e){let i=Se[e];if(i===void 0){const s=XC.get(e);if(s!==void 0)i=Se[s],de('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Kp(i)}const YC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nx(o){return o.replace(YC,qC)}function qC(o,e,i,s){let l="";for(let f=parseInt(e);f<parseInt(i);f++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return l}function Ux(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const WC={[Ru]:"SHADOWMAP_TYPE_PCF",[El]:"SHADOWMAP_TYPE_VSM"};function ZC(o){return WC[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const KC={[or]:"ENVMAP_TYPE_CUBE",[xo]:"ENVMAP_TYPE_CUBE",[Fu]:"ENVMAP_TYPE_CUBE_UV"};function QC(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":KC[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const JC={[xo]:"ENVMAP_MODE_REFRACTION"};function $C(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":JC[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const tw={[$x]:"ENVMAP_BLENDING_MULTIPLY",[Eb]:"ENVMAP_BLENDING_MIX",[Tb]:"ENVMAP_BLENDING_ADD"};function ew(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":tw[o.combine]||"ENVMAP_BLENDING_NONE"}function nw(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function iw(o,e,i,s){const l=o.getContext(),f=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=ZC(i),g=QC(i),_=$C(i),m=ew(i),x=nw(i),y=HC(i),E=GC(f),R=l.createProgram();let M,S,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Tl).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Tl).join(`
`),S.length>0&&(S+=`
`)):(M=[Ux(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tl).join(`
`),S=[Ux(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",i.envMap?"#define "+m:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==sa?"#define TONE_MAPPING":"",i.toneMapping!==sa?Se.tonemapping_pars_fragment:"",i.toneMapping!==sa?FC("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Se.colorspace_pars_fragment,IC("linearToOutputTexel",i.outputColorSpace),BC(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Tl).join(`
`)),h=Kp(h),h=Rx(h,i),h=Dx(h,i),d=Kp(d),d=Rx(d,i),d=Dx(d,i),h=Nx(h),d=Nx(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===Gv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Gv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const H=P+M+h,O=P+S+d,I=Ax(l,l.VERTEX_SHADER,H),D=Ax(l,l.FRAGMENT_SHADER,O);l.attachShader(R,I),l.attachShader(R,D),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function N(k){if(o.debug.checkShaderErrors){const st=l.getProgramInfoLog(R)||"",it=l.getShaderInfoLog(I)||"",pt=l.getShaderInfoLog(D)||"",dt=st.trim(),Z=it.trim(),K=pt.trim();let ft=!0,At=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(ft=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,I,D);else{const G=wx(l,I,"vertex"),z=wx(l,D,"fragment");Pe("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+dt+`
`+G+`
`+z)}else dt!==""?de("WebGLProgram: Program Info Log:",dt):(Z===""||K==="")&&(At=!1);At&&(k.diagnostics={runnable:ft,programLog:dt,vertexShader:{log:Z,prefix:M},fragmentShader:{log:K,prefix:S}})}l.deleteShader(I),l.deleteShader(D),X=new Ou(l,R),A=VC(l,R)}let X;this.getUniforms=function(){return X===void 0&&N(this),X};let A;this.getAttributes=function(){return A===void 0&&N(this),A};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(R,UC)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=LC++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=I,this.fragmentShader=D,this}let aw=0;class sw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),f=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(f)===!1&&(h.add(f),f.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new rw(e),i.set(e,s)),s}}class rw{constructor(e){this.id=aw++,this.code=e,this.usedTimes=0}}function ow(o,e,i,s,l,f,h){const d=new pm,p=new sw,g=new Set,_=[],m=new Map,x=l.logarithmicDepthBuffer;let y=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(A){return g.add(A),A===0?"uv":`uv${A}`}function M(A,w,k,st,it){const pt=st.fog,dt=it.geometry,Z=A.isMeshStandardMaterial?st.environment:null,K=(A.isMeshStandardMaterial?i:e).get(A.envMap||Z),ft=K&&K.mapping===Fu?K.image.height:null,At=E[A.type];A.precision!==null&&(y=l.getMaxPrecision(A.precision),y!==A.precision&&de("WebGLProgram.getParameters:",A.precision,"not supported, using",y,"instead."));const G=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,z=G!==void 0?G.length:0;let Et=0;dt.morphAttributes.position!==void 0&&(Et=1),dt.morphAttributes.normal!==void 0&&(Et=2),dt.morphAttributes.color!==void 0&&(Et=3);let Rt,F,rt,Y;if(At){const Ne=na[At];Rt=Ne.vertexShader,F=Ne.fragmentShader}else Rt=A.vertexShader,F=A.fragmentShader,p.update(A),rt=p.getVertexShaderID(A),Y=p.getFragmentShaderID(A);const W=o.getRenderTarget(),mt=o.state.buffers.depth.getReversed(),Tt=it.isInstancedMesh===!0,yt=it.isBatchedMesh===!0,St=!!A.map,Nt=!!A.matcap,te=!!K,qt=!!A.aoMap,le=!!A.lightMap,$t=!!A.bumpMap,re=!!A.normalMap,V=!!A.displacementMap,Me=!!A.emissiveMap,ue=!!A.metalnessMap,Te=!!A.roughnessMap,Wt=A.anisotropy>0,L=A.clearcoat>0,b=A.dispersion>0,J=A.iridescence>0,_t=A.sheen>0,Mt=A.transmission>0,gt=Wt&&!!A.anisotropyMap,kt=L&&!!A.clearcoatMap,Ut=L&&!!A.clearcoatNormalMap,jt=L&&!!A.clearcoatRoughnessMap,se=J&&!!A.iridescenceMap,wt=J&&!!A.iridescenceThicknessMap,Pt=_t&&!!A.sheenColorMap,Zt=_t&&!!A.sheenRoughnessMap,Jt=!!A.specularMap,It=!!A.specularColorMap,ve=!!A.specularIntensityMap,q=Mt&&!!A.transmissionMap,Ht=Mt&&!!A.thicknessMap,Dt=!!A.gradientMap,Gt=!!A.alphaMap,Ct=A.alphaTest>0,bt=!!A.alphaHash,Ot=!!A.extensions;let fe=sa;A.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(fe=o.toneMapping);const Ye={shaderID:At,shaderType:A.type,shaderName:A.name,vertexShader:Rt,fragmentShader:F,defines:A.defines,customVertexShaderID:rt,customFragmentShaderID:Y,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:y,batching:yt,batchingColor:yt&&it._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&it.instanceColor!==null,instancingMorph:Tt&&it.morphTexture!==null,outputColorSpace:W===null?o.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:yo,alphaToCoverage:!!A.alphaToCoverage,map:St,matcap:Nt,envMap:te,envMapMode:te&&K.mapping,envMapCubeUVHeight:ft,aoMap:qt,lightMap:le,bumpMap:$t,normalMap:re,displacementMap:V,emissiveMap:Me,normalMapObjectSpace:re&&A.normalMapType===wb,normalMapTangentSpace:re&&A.normalMapType===pS,metalnessMap:ue,roughnessMap:Te,anisotropy:Wt,anisotropyMap:gt,clearcoat:L,clearcoatMap:kt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:jt,dispersion:b,iridescence:J,iridescenceMap:se,iridescenceThicknessMap:wt,sheen:_t,sheenColorMap:Pt,sheenRoughnessMap:Zt,specularMap:Jt,specularColorMap:It,specularIntensityMap:ve,transmission:Mt,transmissionMap:q,thicknessMap:Ht,gradientMap:Dt,opaque:A.transparent===!1&&A.blending===go&&A.alphaToCoverage===!1,alphaMap:Gt,alphaTest:Ct,alphaHash:bt,combine:A.combine,mapUv:St&&R(A.map.channel),aoMapUv:qt&&R(A.aoMap.channel),lightMapUv:le&&R(A.lightMap.channel),bumpMapUv:$t&&R(A.bumpMap.channel),normalMapUv:re&&R(A.normalMap.channel),displacementMapUv:V&&R(A.displacementMap.channel),emissiveMapUv:Me&&R(A.emissiveMap.channel),metalnessMapUv:ue&&R(A.metalnessMap.channel),roughnessMapUv:Te&&R(A.roughnessMap.channel),anisotropyMapUv:gt&&R(A.anisotropyMap.channel),clearcoatMapUv:kt&&R(A.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&R(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:jt&&R(A.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&R(A.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&R(A.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&R(A.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&R(A.sheenRoughnessMap.channel),specularMapUv:Jt&&R(A.specularMap.channel),specularColorMapUv:It&&R(A.specularColorMap.channel),specularIntensityMapUv:ve&&R(A.specularIntensityMap.channel),transmissionMapUv:q&&R(A.transmissionMap.channel),thicknessMapUv:Ht&&R(A.thicknessMap.channel),alphaMapUv:Gt&&R(A.alphaMap.channel),vertexTangents:!!dt.attributes.tangent&&(re||Wt),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pointsUvs:it.isPoints===!0&&!!dt.attributes.uv&&(St||Gt),fog:!!pt,useFog:A.fog===!0,fogExp2:!!pt&&pt.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:mt,skinning:it.isSkinnedMesh===!0,morphTargets:dt.morphAttributes.position!==void 0,morphNormals:dt.morphAttributes.normal!==void 0,morphColors:dt.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:Et,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:A.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:fe,decodeVideoTexture:St&&A.map.isVideoTexture===!0&&Ie.getTransfer(A.map.colorSpace)===je,decodeVideoTextureEmissive:Me&&A.emissiveMap.isVideoTexture===!0&&Ie.getTransfer(A.emissiveMap.colorSpace)===je,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Da,flipSided:A.side===oi,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ot&&A.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&A.extensions.multiDraw===!0||yt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ye.vertexUv1s=g.has(1),Ye.vertexUv2s=g.has(2),Ye.vertexUv3s=g.has(3),g.clear(),Ye}function S(A){const w=[];if(A.shaderID?w.push(A.shaderID):(w.push(A.customVertexShaderID),w.push(A.customFragmentShaderID)),A.defines!==void 0)for(const k in A.defines)w.push(k),w.push(A.defines[k]);return A.isRawShaderMaterial===!1&&(P(w,A),H(w,A),w.push(o.outputColorSpace)),w.push(A.customProgramCacheKey),w.join()}function P(A,w){A.push(w.precision),A.push(w.outputColorSpace),A.push(w.envMapMode),A.push(w.envMapCubeUVHeight),A.push(w.mapUv),A.push(w.alphaMapUv),A.push(w.lightMapUv),A.push(w.aoMapUv),A.push(w.bumpMapUv),A.push(w.normalMapUv),A.push(w.displacementMapUv),A.push(w.emissiveMapUv),A.push(w.metalnessMapUv),A.push(w.roughnessMapUv),A.push(w.anisotropyMapUv),A.push(w.clearcoatMapUv),A.push(w.clearcoatNormalMapUv),A.push(w.clearcoatRoughnessMapUv),A.push(w.iridescenceMapUv),A.push(w.iridescenceThicknessMapUv),A.push(w.sheenColorMapUv),A.push(w.sheenRoughnessMapUv),A.push(w.specularMapUv),A.push(w.specularColorMapUv),A.push(w.specularIntensityMapUv),A.push(w.transmissionMapUv),A.push(w.thicknessMapUv),A.push(w.combine),A.push(w.fogExp2),A.push(w.sizeAttenuation),A.push(w.morphTargetsCount),A.push(w.morphAttributeCount),A.push(w.numDirLights),A.push(w.numPointLights),A.push(w.numSpotLights),A.push(w.numSpotLightMaps),A.push(w.numHemiLights),A.push(w.numRectAreaLights),A.push(w.numDirLightShadows),A.push(w.numPointLightShadows),A.push(w.numSpotLightShadows),A.push(w.numSpotLightShadowsWithMaps),A.push(w.numLightProbes),A.push(w.shadowMapType),A.push(w.toneMapping),A.push(w.numClippingPlanes),A.push(w.numClipIntersection),A.push(w.depthPacking)}function H(A,w){d.disableAll(),w.instancing&&d.enable(0),w.instancingColor&&d.enable(1),w.instancingMorph&&d.enable(2),w.matcap&&d.enable(3),w.envMap&&d.enable(4),w.normalMapObjectSpace&&d.enable(5),w.normalMapTangentSpace&&d.enable(6),w.clearcoat&&d.enable(7),w.iridescence&&d.enable(8),w.alphaTest&&d.enable(9),w.vertexColors&&d.enable(10),w.vertexAlphas&&d.enable(11),w.vertexUv1s&&d.enable(12),w.vertexUv2s&&d.enable(13),w.vertexUv3s&&d.enable(14),w.vertexTangents&&d.enable(15),w.anisotropy&&d.enable(16),w.alphaHash&&d.enable(17),w.batching&&d.enable(18),w.dispersion&&d.enable(19),w.batchingColor&&d.enable(20),w.gradientMap&&d.enable(21),A.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),A.push(d.mask)}function O(A){const w=E[A.type];let k;if(w){const st=na[w];k=_E.clone(st.uniforms)}else k=A.uniforms;return k}function I(A,w){let k=m.get(w);return k!==void 0?++k.usedTimes:(k=new iw(o,w,A,f),_.push(k),m.set(w,k)),k}function D(A){if(--A.usedTimes===0){const w=_.indexOf(A);_[w]=_[_.length-1],_.pop(),m.delete(A.cacheKey),A.destroy()}}function N(A){p.remove(A)}function X(){p.dispose()}return{getParameters:M,getProgramCacheKey:S,getUniforms:O,acquireProgram:I,releaseProgram:D,releaseShaderCache:N,programs:_,dispose:X}}function lw(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,p){o.get(h)[d]=p}function f(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:f}}function cw(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Lx(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Ox(){const o=[];let e=0;const i=[],s=[],l=[];function f(){e=0,i.length=0,s.length=0,l.length=0}function h(m,x,y,E,R,M){let S=o[e];return S===void 0?(S={id:m.id,object:m,geometry:x,material:y,groupOrder:E,renderOrder:m.renderOrder,z:R,group:M},o[e]=S):(S.id=m.id,S.object=m,S.geometry=x,S.material=y,S.groupOrder=E,S.renderOrder=m.renderOrder,S.z=R,S.group=M),e++,S}function d(m,x,y,E,R,M){const S=h(m,x,y,E,R,M);y.transmission>0?s.push(S):y.transparent===!0?l.push(S):i.push(S)}function p(m,x,y,E,R,M){const S=h(m,x,y,E,R,M);y.transmission>0?s.unshift(S):y.transparent===!0?l.unshift(S):i.unshift(S)}function g(m,x){i.length>1&&i.sort(m||cw),s.length>1&&s.sort(x||Lx),l.length>1&&l.sort(x||Lx)}function _(){for(let m=e,x=o.length;m<x;m++){const y=o[m];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:f,push:d,unshift:p,finish:_,sort:g}}function uw(){let o=new WeakMap;function e(s,l){const f=o.get(s);let h;return f===void 0?(h=new Ox,o.set(s,[h])):l>=f.length?(h=new Ox,f.push(h)):h=f[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function fw(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ct,color:new ye};break;case"SpotLight":i={position:new ct,direction:new ct,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ct,color:new ye,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ct,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":i={color:new ye,position:new ct,halfWidth:new ct,halfHeight:new ct};break}return o[e.id]=i,i}}}function hw(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let dw=0;function pw(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function mw(o){const e=new fw,i=hw(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)s.probe.push(new ct);const l=new ct,f=new rn,h=new rn;function d(g){let _=0,m=0,x=0;for(let A=0;A<9;A++)s.probe[A].set(0,0,0);let y=0,E=0,R=0,M=0,S=0,P=0,H=0,O=0,I=0,D=0,N=0;g.sort(pw);for(let A=0,w=g.length;A<w;A++){const k=g[A],st=k.color,it=k.intensity,pt=k.distance;let dt=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===So?dt=k.shadow.map.texture:dt=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)_+=st.r*it,m+=st.g*it,x+=st.b*it;else if(k.isLightProbe){for(let Z=0;Z<9;Z++)s.probe[Z].addScaledVector(k.sh.coefficients[Z],it);N++}else if(k.isDirectionalLight){const Z=e.get(k);if(Z.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const K=k.shadow,ft=i.get(k);ft.shadowIntensity=K.intensity,ft.shadowBias=K.bias,ft.shadowNormalBias=K.normalBias,ft.shadowRadius=K.radius,ft.shadowMapSize=K.mapSize,s.directionalShadow[y]=ft,s.directionalShadowMap[y]=dt,s.directionalShadowMatrix[y]=k.shadow.matrix,P++}s.directional[y]=Z,y++}else if(k.isSpotLight){const Z=e.get(k);Z.position.setFromMatrixPosition(k.matrixWorld),Z.color.copy(st).multiplyScalar(it),Z.distance=pt,Z.coneCos=Math.cos(k.angle),Z.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),Z.decay=k.decay,s.spot[R]=Z;const K=k.shadow;if(k.map&&(s.spotLightMap[I]=k.map,I++,K.updateMatrices(k),k.castShadow&&D++),s.spotLightMatrix[R]=K.matrix,k.castShadow){const ft=i.get(k);ft.shadowIntensity=K.intensity,ft.shadowBias=K.bias,ft.shadowNormalBias=K.normalBias,ft.shadowRadius=K.radius,ft.shadowMapSize=K.mapSize,s.spotShadow[R]=ft,s.spotShadowMap[R]=dt,O++}R++}else if(k.isRectAreaLight){const Z=e.get(k);Z.color.copy(st).multiplyScalar(it),Z.halfWidth.set(k.width*.5,0,0),Z.halfHeight.set(0,k.height*.5,0),s.rectArea[M]=Z,M++}else if(k.isPointLight){const Z=e.get(k);if(Z.color.copy(k.color).multiplyScalar(k.intensity),Z.distance=k.distance,Z.decay=k.decay,k.castShadow){const K=k.shadow,ft=i.get(k);ft.shadowIntensity=K.intensity,ft.shadowBias=K.bias,ft.shadowNormalBias=K.normalBias,ft.shadowRadius=K.radius,ft.shadowMapSize=K.mapSize,ft.shadowCameraNear=K.camera.near,ft.shadowCameraFar=K.camera.far,s.pointShadow[E]=ft,s.pointShadowMap[E]=dt,s.pointShadowMatrix[E]=k.shadow.matrix,H++}s.point[E]=Z,E++}else if(k.isHemisphereLight){const Z=e.get(k);Z.skyColor.copy(k.color).multiplyScalar(it),Z.groundColor.copy(k.groundColor).multiplyScalar(it),s.hemi[S]=Z,S++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Bt.LTC_FLOAT_1,s.rectAreaLTC2=Bt.LTC_FLOAT_2):(s.rectAreaLTC1=Bt.LTC_HALF_1,s.rectAreaLTC2=Bt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=m,s.ambient[2]=x;const X=s.hash;(X.directionalLength!==y||X.pointLength!==E||X.spotLength!==R||X.rectAreaLength!==M||X.hemiLength!==S||X.numDirectionalShadows!==P||X.numPointShadows!==H||X.numSpotShadows!==O||X.numSpotMaps!==I||X.numLightProbes!==N)&&(s.directional.length=y,s.spot.length=R,s.rectArea.length=M,s.point.length=E,s.hemi.length=S,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=H,s.pointShadowMap.length=H,s.spotShadow.length=O,s.spotShadowMap.length=O,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=H,s.spotLightMatrix.length=O+I-D,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=N,X.directionalLength=y,X.pointLength=E,X.spotLength=R,X.rectAreaLength=M,X.hemiLength=S,X.numDirectionalShadows=P,X.numPointShadows=H,X.numSpotShadows=O,X.numSpotMaps=I,X.numLightProbes=N,s.version=dw++)}function p(g,_){let m=0,x=0,y=0,E=0,R=0;const M=_.matrixWorldInverse;for(let S=0,P=g.length;S<P;S++){const H=g[S];if(H.isDirectionalLight){const O=s.directional[m];O.direction.setFromMatrixPosition(H.matrixWorld),l.setFromMatrixPosition(H.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(M),m++}else if(H.isSpotLight){const O=s.spot[y];O.position.setFromMatrixPosition(H.matrixWorld),O.position.applyMatrix4(M),O.direction.setFromMatrixPosition(H.matrixWorld),l.setFromMatrixPosition(H.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(M),y++}else if(H.isRectAreaLight){const O=s.rectArea[E];O.position.setFromMatrixPosition(H.matrixWorld),O.position.applyMatrix4(M),h.identity(),f.copy(H.matrixWorld),f.premultiply(M),h.extractRotation(f),O.halfWidth.set(H.width*.5,0,0),O.halfHeight.set(0,H.height*.5,0),O.halfWidth.applyMatrix4(h),O.halfHeight.applyMatrix4(h),E++}else if(H.isPointLight){const O=s.point[x];O.position.setFromMatrixPosition(H.matrixWorld),O.position.applyMatrix4(M),x++}else if(H.isHemisphereLight){const O=s.hemi[R];O.direction.setFromMatrixPosition(H.matrixWorld),O.direction.transformDirection(M),R++}}}return{setup:d,setupView:p,state:s}}function Px(o){const e=new mw(o),i=[],s=[];function l(_){g.camera=_,i.length=0,s.length=0}function f(_){i.push(_)}function h(_){s.push(_)}function d(){e.setup(i)}function p(_){e.setupView(i,_)}const g={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:g,setupLights:d,setupLightsView:p,pushLight:f,pushShadow:h}}function gw(o){let e=new WeakMap;function i(l,f=0){const h=e.get(l);let d;return h===void 0?(d=new Px(o),e.set(l,[d])):f>=h.length?(d=new Px(o),h.push(d)):d=h[f],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const _w=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,xw=[new ct(1,0,0),new ct(-1,0,0),new ct(0,1,0),new ct(0,-1,0),new ct(0,0,1),new ct(0,0,-1)],Sw=[new ct(0,-1,0),new ct(0,-1,0),new ct(0,0,1),new ct(0,0,-1),new ct(0,-1,0),new ct(0,-1,0)],Ix=new rn,bl=new ct,Kd=new ct;function yw(o,e,i){let s=new mm;const l=new pe,f=new pe,h=new un,d=new DE,p=new NE,g={},_=i.maxTextureSize,m={[Ms]:oi,[oi]:Ms,[Da]:Da},x=new ua({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:_w,fragmentShader:vw}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const E=new za;E.setAttribute("position",new oa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new cn(E,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ru;let S=this.type;this.render=function(D,N,X){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||D.length===0)return;D.type===Jx&&(de("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),D.type=Ru);const A=o.getRenderTarget(),w=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),st=o.state;st.setBlending(Ua),st.buffers.depth.getReversed()===!0?st.buffers.color.setClear(0,0,0,0):st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const it=S!==this.type;it&&N.traverse(function(pt){pt.material&&(Array.isArray(pt.material)?pt.material.forEach(dt=>dt.needsUpdate=!0):pt.material.needsUpdate=!0)});for(let pt=0,dt=D.length;pt<dt;pt++){const Z=D[pt],K=Z.shadow;if(K===void 0){de("WebGLShadowMap:",Z,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;l.copy(K.mapSize);const ft=K.getFrameExtents();if(l.multiply(ft),f.copy(K.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(f.x=Math.floor(_/ft.x),l.x=f.x*ft.x,K.mapSize.x=f.x),l.y>_&&(f.y=Math.floor(_/ft.y),l.y=f.y*ft.y,K.mapSize.y=f.y)),K.map===null||it===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===El){if(Z.isPointLight){de("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new ra(l.x,l.y,{format:So,type:Pa,minFilter:Hn,magFilter:Hn,generateMipmaps:!1}),K.map.texture.name=Z.name+".shadowMap",K.map.depthTexture=new Ll(l.x,l.y,ia),K.map.depthTexture.name=Z.name+".shadowMapDepth",K.map.depthTexture.format=Ia,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Pn,K.map.depthTexture.magFilter=Pn}else{Z.isPointLight?(K.map=new ES(l.x),K.map.depthTexture=new CE(l.x,la)):(K.map=new ra(l.x,l.y),K.map.depthTexture=new Ll(l.x,l.y,la)),K.map.depthTexture.name=Z.name+".shadowMap",K.map.depthTexture.format=Ia;const G=o.state.buffers.depth.getReversed();this.type===Ru?(K.map.depthTexture.compareFunction=G?cm:lm,K.map.depthTexture.minFilter=Hn,K.map.depthTexture.magFilter=Hn):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Pn,K.map.depthTexture.magFilter=Pn)}K.camera.updateProjectionMatrix()}const At=K.map.isWebGLCubeRenderTarget?6:1;for(let G=0;G<At;G++){if(K.map.isWebGLCubeRenderTarget)o.setRenderTarget(K.map,G),o.clear();else{G===0&&(o.setRenderTarget(K.map),o.clear());const z=K.getViewport(G);h.set(f.x*z.x,f.y*z.y,f.x*z.z,f.y*z.w),st.viewport(h)}if(Z.isPointLight){const z=K.camera,Et=K.matrix,Rt=Z.distance||z.far;Rt!==z.far&&(z.far=Rt,z.updateProjectionMatrix()),bl.setFromMatrixPosition(Z.matrixWorld),z.position.copy(bl),Kd.copy(z.position),Kd.add(xw[G]),z.up.copy(Sw[G]),z.lookAt(Kd),z.updateMatrixWorld(),Et.makeTranslation(-bl.x,-bl.y,-bl.z),Ix.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Ix,z.coordinateSystem,z.reversedDepth)}else K.updateMatrices(Z);s=K.getFrustum(),O(N,X,K.camera,Z,this.type)}K.isPointLightShadow!==!0&&this.type===El&&P(K,X),K.needsUpdate=!1}S=this.type,M.needsUpdate=!1,o.setRenderTarget(A,w,k)};function P(D,N){const X=e.update(R);x.defines.VSM_SAMPLES!==D.blurSamples&&(x.defines.VSM_SAMPLES=D.blurSamples,y.defines.VSM_SAMPLES=D.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new ra(l.x,l.y,{format:So,type:Pa})),x.uniforms.shadow_pass.value=D.map.depthTexture,x.uniforms.resolution.value=D.mapSize,x.uniforms.radius.value=D.radius,o.setRenderTarget(D.mapPass),o.clear(),o.renderBufferDirect(N,null,X,x,R,null),y.uniforms.shadow_pass.value=D.mapPass.texture,y.uniforms.resolution.value=D.mapSize,y.uniforms.radius.value=D.radius,o.setRenderTarget(D.map),o.clear(),o.renderBufferDirect(N,null,X,y,R,null)}function H(D,N,X,A){let w=null;const k=X.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(k!==void 0)w=k;else if(w=X.isPointLight===!0?p:d,o.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const st=w.uuid,it=N.uuid;let pt=g[st];pt===void 0&&(pt={},g[st]=pt);let dt=pt[it];dt===void 0&&(dt=w.clone(),pt[it]=dt,N.addEventListener("dispose",I)),w=dt}if(w.visible=N.visible,w.wireframe=N.wireframe,A===El?w.side=N.shadowSide!==null?N.shadowSide:N.side:w.side=N.shadowSide!==null?N.shadowSide:m[N.side],w.alphaMap=N.alphaMap,w.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,w.map=N.map,w.clipShadows=N.clipShadows,w.clippingPlanes=N.clippingPlanes,w.clipIntersection=N.clipIntersection,w.displacementMap=N.displacementMap,w.displacementScale=N.displacementScale,w.displacementBias=N.displacementBias,w.wireframeLinewidth=N.wireframeLinewidth,w.linewidth=N.linewidth,X.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const st=o.properties.get(w);st.light=X}return w}function O(D,N,X,A,w){if(D.visible===!1)return;if(D.layers.test(N.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&w===El)&&(!D.frustumCulled||s.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,D.matrixWorld);const it=e.update(D),pt=D.material;if(Array.isArray(pt)){const dt=it.groups;for(let Z=0,K=dt.length;Z<K;Z++){const ft=dt[Z],At=pt[ft.materialIndex];if(At&&At.visible){const G=H(D,At,A,w);D.onBeforeShadow(o,D,N,X,it,G,ft),o.renderBufferDirect(X,null,it,G,D,ft),D.onAfterShadow(o,D,N,X,it,G,ft)}}}else if(pt.visible){const dt=H(D,pt,A,w);D.onBeforeShadow(o,D,N,X,it,dt,null),o.renderBufferDirect(X,null,it,dt,D,null),D.onAfterShadow(o,D,N,X,it,dt,null)}}const st=D.children;for(let it=0,pt=st.length;it<pt;it++)O(st[it],N,X,A,w)}function I(D){D.target.removeEventListener("dispose",I);for(const X in g){const A=g[X],w=D.target.uuid;w in A&&(A[w].dispose(),delete A[w])}}}const Mw={[ap]:sp,[rp]:cp,[op]:up,[vo]:lp,[sp]:ap,[cp]:rp,[up]:op,[lp]:vo};function bw(o,e){function i(){let q=!1;const Ht=new un;let Dt=null;const Gt=new un(0,0,0,0);return{setMask:function(Ct){Dt!==Ct&&!q&&(o.colorMask(Ct,Ct,Ct,Ct),Dt=Ct)},setLocked:function(Ct){q=Ct},setClear:function(Ct,bt,Ot,fe,Ye){Ye===!0&&(Ct*=fe,bt*=fe,Ot*=fe),Ht.set(Ct,bt,Ot,fe),Gt.equals(Ht)===!1&&(o.clearColor(Ct,bt,Ot,fe),Gt.copy(Ht))},reset:function(){q=!1,Dt=null,Gt.set(-1,0,0,0)}}}function s(){let q=!1,Ht=!1,Dt=null,Gt=null,Ct=null;return{setReversed:function(bt){if(Ht!==bt){const Ot=e.get("EXT_clip_control");bt?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),Ht=bt;const fe=Ct;Ct=null,this.setClear(fe)}},getReversed:function(){return Ht},setTest:function(bt){bt?W(o.DEPTH_TEST):mt(o.DEPTH_TEST)},setMask:function(bt){Dt!==bt&&!q&&(o.depthMask(bt),Dt=bt)},setFunc:function(bt){if(Ht&&(bt=Mw[bt]),Gt!==bt){switch(bt){case ap:o.depthFunc(o.NEVER);break;case sp:o.depthFunc(o.ALWAYS);break;case rp:o.depthFunc(o.LESS);break;case vo:o.depthFunc(o.LEQUAL);break;case op:o.depthFunc(o.EQUAL);break;case lp:o.depthFunc(o.GEQUAL);break;case cp:o.depthFunc(o.GREATER);break;case up:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Gt=bt}},setLocked:function(bt){q=bt},setClear:function(bt){Ct!==bt&&(Ht&&(bt=1-bt),o.clearDepth(bt),Ct=bt)},reset:function(){q=!1,Dt=null,Gt=null,Ct=null,Ht=!1}}}function l(){let q=!1,Ht=null,Dt=null,Gt=null,Ct=null,bt=null,Ot=null,fe=null,Ye=null;return{setTest:function(Ne){q||(Ne?W(o.STENCIL_TEST):mt(o.STENCIL_TEST))},setMask:function(Ne){Ht!==Ne&&!q&&(o.stencilMask(Ne),Ht=Ne)},setFunc:function(Ne,tn,Mn){(Dt!==Ne||Gt!==tn||Ct!==Mn)&&(o.stencilFunc(Ne,tn,Mn),Dt=Ne,Gt=tn,Ct=Mn)},setOp:function(Ne,tn,Mn){(bt!==Ne||Ot!==tn||fe!==Mn)&&(o.stencilOp(Ne,tn,Mn),bt=Ne,Ot=tn,fe=Mn)},setLocked:function(Ne){q=Ne},setClear:function(Ne){Ye!==Ne&&(o.clearStencil(Ne),Ye=Ne)},reset:function(){q=!1,Ht=null,Dt=null,Gt=null,Ct=null,bt=null,Ot=null,fe=null,Ye=null}}}const f=new i,h=new s,d=new l,p=new WeakMap,g=new WeakMap;let _={},m={},x=new WeakMap,y=[],E=null,R=!1,M=null,S=null,P=null,H=null,O=null,I=null,D=null,N=new ye(0,0,0),X=0,A=!1,w=null,k=null,st=null,it=null,pt=null;const dt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,K=0;const ft=o.getParameter(o.VERSION);ft.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(ft)[1]),Z=K>=1):ft.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(ft)[1]),Z=K>=2);let At=null,G={};const z=o.getParameter(o.SCISSOR_BOX),Et=o.getParameter(o.VIEWPORT),Rt=new un().fromArray(z),F=new un().fromArray(Et);function rt(q,Ht,Dt,Gt){const Ct=new Uint8Array(4),bt=o.createTexture();o.bindTexture(q,bt),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ot=0;Ot<Dt;Ot++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(Ht,0,o.RGBA,1,1,Gt,0,o.RGBA,o.UNSIGNED_BYTE,Ct):o.texImage2D(Ht+Ot,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ct);return bt}const Y={};Y[o.TEXTURE_2D]=rt(o.TEXTURE_2D,o.TEXTURE_2D,1),Y[o.TEXTURE_CUBE_MAP]=rt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[o.TEXTURE_2D_ARRAY]=rt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Y[o.TEXTURE_3D]=rt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),h.setClear(1),d.setClear(0),W(o.DEPTH_TEST),h.setFunc(vo),$t(!1),re(Pv),W(o.CULL_FACE),qt(Ua);function W(q){_[q]!==!0&&(o.enable(q),_[q]=!0)}function mt(q){_[q]!==!1&&(o.disable(q),_[q]=!1)}function Tt(q,Ht){return m[q]!==Ht?(o.bindFramebuffer(q,Ht),m[q]=Ht,q===o.DRAW_FRAMEBUFFER&&(m[o.FRAMEBUFFER]=Ht),q===o.FRAMEBUFFER&&(m[o.DRAW_FRAMEBUFFER]=Ht),!0):!1}function yt(q,Ht){let Dt=y,Gt=!1;if(q){Dt=x.get(Ht),Dt===void 0&&(Dt=[],x.set(Ht,Dt));const Ct=q.textures;if(Dt.length!==Ct.length||Dt[0]!==o.COLOR_ATTACHMENT0){for(let bt=0,Ot=Ct.length;bt<Ot;bt++)Dt[bt]=o.COLOR_ATTACHMENT0+bt;Dt.length=Ct.length,Gt=!0}}else Dt[0]!==o.BACK&&(Dt[0]=o.BACK,Gt=!0);Gt&&o.drawBuffers(Dt)}function St(q){return E!==q?(o.useProgram(q),E=q,!0):!1}const Nt={[ir]:o.FUNC_ADD,[ob]:o.FUNC_SUBTRACT,[lb]:o.FUNC_REVERSE_SUBTRACT};Nt[cb]=o.MIN,Nt[ub]=o.MAX;const te={[fb]:o.ZERO,[hb]:o.ONE,[db]:o.SRC_COLOR,[np]:o.SRC_ALPHA,[xb]:o.SRC_ALPHA_SATURATE,[_b]:o.DST_COLOR,[mb]:o.DST_ALPHA,[pb]:o.ONE_MINUS_SRC_COLOR,[ip]:o.ONE_MINUS_SRC_ALPHA,[vb]:o.ONE_MINUS_DST_COLOR,[gb]:o.ONE_MINUS_DST_ALPHA,[Sb]:o.CONSTANT_COLOR,[yb]:o.ONE_MINUS_CONSTANT_COLOR,[Mb]:o.CONSTANT_ALPHA,[bb]:o.ONE_MINUS_CONSTANT_ALPHA};function qt(q,Ht,Dt,Gt,Ct,bt,Ot,fe,Ye,Ne){if(q===Ua){R===!0&&(mt(o.BLEND),R=!1);return}if(R===!1&&(W(o.BLEND),R=!0),q!==rb){if(q!==M||Ne!==A){if((S!==ir||O!==ir)&&(o.blendEquation(o.FUNC_ADD),S=ir,O=ir),Ne)switch(q){case go:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Iv:o.blendFunc(o.ONE,o.ONE);break;case zv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Fv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Pe("WebGLState: Invalid blending: ",q);break}else switch(q){case go:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Iv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case zv:Pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fv:Pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pe("WebGLState: Invalid blending: ",q);break}P=null,H=null,I=null,D=null,N.set(0,0,0),X=0,M=q,A=Ne}return}Ct=Ct||Ht,bt=bt||Dt,Ot=Ot||Gt,(Ht!==S||Ct!==O)&&(o.blendEquationSeparate(Nt[Ht],Nt[Ct]),S=Ht,O=Ct),(Dt!==P||Gt!==H||bt!==I||Ot!==D)&&(o.blendFuncSeparate(te[Dt],te[Gt],te[bt],te[Ot]),P=Dt,H=Gt,I=bt,D=Ot),(fe.equals(N)===!1||Ye!==X)&&(o.blendColor(fe.r,fe.g,fe.b,Ye),N.copy(fe),X=Ye),M=q,A=!1}function le(q,Ht){q.side===Da?mt(o.CULL_FACE):W(o.CULL_FACE);let Dt=q.side===oi;Ht&&(Dt=!Dt),$t(Dt),q.blending===go&&q.transparent===!1?qt(Ua):qt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),h.setFunc(q.depthFunc),h.setTest(q.depthTest),h.setMask(q.depthWrite),f.setMask(q.colorWrite);const Gt=q.stencilWrite;d.setTest(Gt),Gt&&(d.setMask(q.stencilWriteMask),d.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),d.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Me(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?W(o.SAMPLE_ALPHA_TO_COVERAGE):mt(o.SAMPLE_ALPHA_TO_COVERAGE)}function $t(q){w!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),w=q)}function re(q){q!==ab?(W(o.CULL_FACE),q!==k&&(q===Pv?o.cullFace(o.BACK):q===sb?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):mt(o.CULL_FACE),k=q}function V(q){q!==st&&(Z&&o.lineWidth(q),st=q)}function Me(q,Ht,Dt){q?(W(o.POLYGON_OFFSET_FILL),(it!==Ht||pt!==Dt)&&(o.polygonOffset(Ht,Dt),it=Ht,pt=Dt)):mt(o.POLYGON_OFFSET_FILL)}function ue(q){q?W(o.SCISSOR_TEST):mt(o.SCISSOR_TEST)}function Te(q){q===void 0&&(q=o.TEXTURE0+dt-1),At!==q&&(o.activeTexture(q),At=q)}function Wt(q,Ht,Dt){Dt===void 0&&(At===null?Dt=o.TEXTURE0+dt-1:Dt=At);let Gt=G[Dt];Gt===void 0&&(Gt={type:void 0,texture:void 0},G[Dt]=Gt),(Gt.type!==q||Gt.texture!==Ht)&&(At!==Dt&&(o.activeTexture(Dt),At=Dt),o.bindTexture(q,Ht||Y[q]),Gt.type=q,Gt.texture=Ht)}function L(){const q=G[At];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(q){Pe("WebGLState:",q)}}function J(){try{o.compressedTexImage3D(...arguments)}catch(q){Pe("WebGLState:",q)}}function _t(){try{o.texSubImage2D(...arguments)}catch(q){Pe("WebGLState:",q)}}function Mt(){try{o.texSubImage3D(...arguments)}catch(q){Pe("WebGLState:",q)}}function gt(){try{o.compressedTexSubImage2D(...arguments)}catch(q){Pe("WebGLState:",q)}}function kt(){try{o.compressedTexSubImage3D(...arguments)}catch(q){Pe("WebGLState:",q)}}function Ut(){try{o.texStorage2D(...arguments)}catch(q){Pe("WebGLState:",q)}}function jt(){try{o.texStorage3D(...arguments)}catch(q){Pe("WebGLState:",q)}}function se(){try{o.texImage2D(...arguments)}catch(q){Pe("WebGLState:",q)}}function wt(){try{o.texImage3D(...arguments)}catch(q){Pe("WebGLState:",q)}}function Pt(q){Rt.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),Rt.copy(q))}function Zt(q){F.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),F.copy(q))}function Jt(q,Ht){let Dt=g.get(Ht);Dt===void 0&&(Dt=new WeakMap,g.set(Ht,Dt));let Gt=Dt.get(q);Gt===void 0&&(Gt=o.getUniformBlockIndex(Ht,q.name),Dt.set(q,Gt))}function It(q,Ht){const Gt=g.get(Ht).get(q);p.get(Ht)!==Gt&&(o.uniformBlockBinding(Ht,Gt,q.__bindingPointIndex),p.set(Ht,Gt))}function ve(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},At=null,G={},m={},x=new WeakMap,y=[],E=null,R=!1,M=null,S=null,P=null,H=null,O=null,I=null,D=null,N=new ye(0,0,0),X=0,A=!1,w=null,k=null,st=null,it=null,pt=null,Rt.set(0,0,o.canvas.width,o.canvas.height),F.set(0,0,o.canvas.width,o.canvas.height),f.reset(),h.reset(),d.reset()}return{buffers:{color:f,depth:h,stencil:d},enable:W,disable:mt,bindFramebuffer:Tt,drawBuffers:yt,useProgram:St,setBlending:qt,setMaterial:le,setFlipSided:$t,setCullFace:re,setLineWidth:V,setPolygonOffset:Me,setScissorTest:ue,activeTexture:Te,bindTexture:Wt,unbindTexture:L,compressedTexImage2D:b,compressedTexImage3D:J,texImage2D:se,texImage3D:wt,updateUBOMapping:Jt,uniformBlockBinding:It,texStorage2D:Ut,texStorage3D:jt,texSubImage2D:_t,texSubImage3D:Mt,compressedTexSubImage2D:gt,compressedTexSubImage3D:kt,scissor:Pt,viewport:Zt,reset:ve}}function Ew(o,e,i,s,l,f,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new pe,_=new WeakMap;let m;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,b){return y?new OffscreenCanvas(L,b):zu("canvas")}function R(L,b,J){let _t=1;const Mt=Wt(L);if((Mt.width>J||Mt.height>J)&&(_t=J/Math.max(Mt.width,Mt.height)),_t<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const gt=Math.floor(_t*Mt.width),kt=Math.floor(_t*Mt.height);m===void 0&&(m=E(gt,kt));const Ut=b?E(gt,kt):m;return Ut.width=gt,Ut.height=kt,Ut.getContext("2d").drawImage(L,0,0,gt,kt),de("WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+gt+"x"+kt+")."),Ut}else return"data"in L&&de("WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),L;return L}function M(L){return L.generateMipmaps}function S(L){o.generateMipmap(L)}function P(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function H(L,b,J,_t,Mt=!1){if(L!==null){if(o[L]!==void 0)return o[L];de("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let gt=b;if(b===o.RED&&(J===o.FLOAT&&(gt=o.R32F),J===o.HALF_FLOAT&&(gt=o.R16F),J===o.UNSIGNED_BYTE&&(gt=o.R8)),b===o.RED_INTEGER&&(J===o.UNSIGNED_BYTE&&(gt=o.R8UI),J===o.UNSIGNED_SHORT&&(gt=o.R16UI),J===o.UNSIGNED_INT&&(gt=o.R32UI),J===o.BYTE&&(gt=o.R8I),J===o.SHORT&&(gt=o.R16I),J===o.INT&&(gt=o.R32I)),b===o.RG&&(J===o.FLOAT&&(gt=o.RG32F),J===o.HALF_FLOAT&&(gt=o.RG16F),J===o.UNSIGNED_BYTE&&(gt=o.RG8)),b===o.RG_INTEGER&&(J===o.UNSIGNED_BYTE&&(gt=o.RG8UI),J===o.UNSIGNED_SHORT&&(gt=o.RG16UI),J===o.UNSIGNED_INT&&(gt=o.RG32UI),J===o.BYTE&&(gt=o.RG8I),J===o.SHORT&&(gt=o.RG16I),J===o.INT&&(gt=o.RG32I)),b===o.RGB_INTEGER&&(J===o.UNSIGNED_BYTE&&(gt=o.RGB8UI),J===o.UNSIGNED_SHORT&&(gt=o.RGB16UI),J===o.UNSIGNED_INT&&(gt=o.RGB32UI),J===o.BYTE&&(gt=o.RGB8I),J===o.SHORT&&(gt=o.RGB16I),J===o.INT&&(gt=o.RGB32I)),b===o.RGBA_INTEGER&&(J===o.UNSIGNED_BYTE&&(gt=o.RGBA8UI),J===o.UNSIGNED_SHORT&&(gt=o.RGBA16UI),J===o.UNSIGNED_INT&&(gt=o.RGBA32UI),J===o.BYTE&&(gt=o.RGBA8I),J===o.SHORT&&(gt=o.RGBA16I),J===o.INT&&(gt=o.RGBA32I)),b===o.RGB&&(J===o.UNSIGNED_INT_5_9_9_9_REV&&(gt=o.RGB9_E5),J===o.UNSIGNED_INT_10F_11F_11F_REV&&(gt=o.R11F_G11F_B10F)),b===o.RGBA){const kt=Mt?Pu:Ie.getTransfer(_t);J===o.FLOAT&&(gt=o.RGBA32F),J===o.HALF_FLOAT&&(gt=o.RGBA16F),J===o.UNSIGNED_BYTE&&(gt=kt===je?o.SRGB8_ALPHA8:o.RGBA8),J===o.UNSIGNED_SHORT_4_4_4_4&&(gt=o.RGBA4),J===o.UNSIGNED_SHORT_5_5_5_1&&(gt=o.RGB5_A1)}return(gt===o.R16F||gt===o.R32F||gt===o.RG16F||gt===o.RG32F||gt===o.RGBA16F||gt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),gt}function O(L,b){let J;return L?b===null||b===la||b===Dl?J=o.DEPTH24_STENCIL8:b===ia?J=o.DEPTH32F_STENCIL8:b===Rl&&(J=o.DEPTH24_STENCIL8,de("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===la||b===Dl?J=o.DEPTH_COMPONENT24:b===ia?J=o.DEPTH_COMPONENT32F:b===Rl&&(J=o.DEPTH_COMPONENT16),J}function I(L,b){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==Pn&&L.minFilter!==Hn?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function D(L){const b=L.target;b.removeEventListener("dispose",D),X(b),b.isVideoTexture&&_.delete(b)}function N(L){const b=L.target;b.removeEventListener("dispose",N),w(b)}function X(L){const b=s.get(L);if(b.__webglInit===void 0)return;const J=L.source,_t=x.get(J);if(_t){const Mt=_t[b.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&A(L),Object.keys(_t).length===0&&x.delete(J)}s.remove(L)}function A(L){const b=s.get(L);o.deleteTexture(b.__webglTexture);const J=L.source,_t=x.get(J);delete _t[b.__cacheKey],h.memory.textures--}function w(L){const b=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(b.__webglFramebuffer[_t]))for(let Mt=0;Mt<b.__webglFramebuffer[_t].length;Mt++)o.deleteFramebuffer(b.__webglFramebuffer[_t][Mt]);else o.deleteFramebuffer(b.__webglFramebuffer[_t]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[_t])}else{if(Array.isArray(b.__webglFramebuffer))for(let _t=0;_t<b.__webglFramebuffer.length;_t++)o.deleteFramebuffer(b.__webglFramebuffer[_t]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let _t=0;_t<b.__webglColorRenderbuffer.length;_t++)b.__webglColorRenderbuffer[_t]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[_t]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const J=L.textures;for(let _t=0,Mt=J.length;_t<Mt;_t++){const gt=s.get(J[_t]);gt.__webglTexture&&(o.deleteTexture(gt.__webglTexture),h.memory.textures--),s.remove(J[_t])}s.remove(L)}let k=0;function st(){k=0}function it(){const L=k;return L>=l.maxTextures&&de("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),k+=1,L}function pt(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function dt(L,b){const J=s.get(L);if(L.isVideoTexture&&ue(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&J.__version!==L.version){const _t=L.image;if(_t===null)de("WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)de("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(J,L,b);return}}else L.isExternalTexture&&(J.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,J.__webglTexture,o.TEXTURE0+b)}function Z(L,b){const J=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){Y(J,L,b);return}else L.isExternalTexture&&(J.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,J.__webglTexture,o.TEXTURE0+b)}function K(L,b){const J=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){Y(J,L,b);return}i.bindTexture(o.TEXTURE_3D,J.__webglTexture,o.TEXTURE0+b)}function ft(L,b){const J=s.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&J.__version!==L.version){W(J,L,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,J.__webglTexture,o.TEXTURE0+b)}const At={[dp]:o.REPEAT,[Na]:o.CLAMP_TO_EDGE,[pp]:o.MIRRORED_REPEAT},G={[Pn]:o.NEAREST,[Ab]:o.NEAREST_MIPMAP_NEAREST,[lu]:o.NEAREST_MIPMAP_LINEAR,[Hn]:o.LINEAR,[Sd]:o.LINEAR_MIPMAP_NEAREST,[sr]:o.LINEAR_MIPMAP_LINEAR},z={[Rb]:o.NEVER,[Ob]:o.ALWAYS,[Db]:o.LESS,[lm]:o.LEQUAL,[Nb]:o.EQUAL,[cm]:o.GEQUAL,[Ub]:o.GREATER,[Lb]:o.NOTEQUAL};function Et(L,b){if(b.type===ia&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Hn||b.magFilter===Sd||b.magFilter===lu||b.magFilter===sr||b.minFilter===Hn||b.minFilter===Sd||b.minFilter===lu||b.minFilter===sr)&&de("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,At[b.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,At[b.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,At[b.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,G[b.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,G[b.minFilter]),b.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,z[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Pn||b.minFilter!==lu&&b.minFilter!==sr||b.type===ia&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");o.texParameterf(L,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function Rt(L,b){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",D));const _t=b.source;let Mt=x.get(_t);Mt===void 0&&(Mt={},x.set(_t,Mt));const gt=pt(b);if(gt!==L.__cacheKey){Mt[gt]===void 0&&(Mt[gt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,J=!0),Mt[gt].usedTimes++;const kt=Mt[L.__cacheKey];kt!==void 0&&(Mt[L.__cacheKey].usedTimes--,kt.usedTimes===0&&A(b)),L.__cacheKey=gt,L.__webglTexture=Mt[gt].texture}return J}function F(L,b,J){return Math.floor(Math.floor(L/J)/b)}function rt(L,b,J,_t){const gt=L.updateRanges;if(gt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,J,_t,b.data);else{gt.sort((wt,Pt)=>wt.start-Pt.start);let kt=0;for(let wt=1;wt<gt.length;wt++){const Pt=gt[kt],Zt=gt[wt],Jt=Pt.start+Pt.count,It=F(Zt.start,b.width,4),ve=F(Pt.start,b.width,4);Zt.start<=Jt+1&&It===ve&&F(Zt.start+Zt.count-1,b.width,4)===It?Pt.count=Math.max(Pt.count,Zt.start+Zt.count-Pt.start):(++kt,gt[kt]=Zt)}gt.length=kt+1;const Ut=o.getParameter(o.UNPACK_ROW_LENGTH),jt=o.getParameter(o.UNPACK_SKIP_PIXELS),se=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let wt=0,Pt=gt.length;wt<Pt;wt++){const Zt=gt[wt],Jt=Math.floor(Zt.start/4),It=Math.ceil(Zt.count/4),ve=Jt%b.width,q=Math.floor(Jt/b.width),Ht=It,Dt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ve),o.pixelStorei(o.UNPACK_SKIP_ROWS,q),i.texSubImage2D(o.TEXTURE_2D,0,ve,q,Ht,Dt,J,_t,b.data)}L.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ut),o.pixelStorei(o.UNPACK_SKIP_PIXELS,jt),o.pixelStorei(o.UNPACK_SKIP_ROWS,se)}}function Y(L,b,J){let _t=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(_t=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(_t=o.TEXTURE_3D);const Mt=Rt(L,b),gt=b.source;i.bindTexture(_t,L.__webglTexture,o.TEXTURE0+J);const kt=s.get(gt);if(gt.version!==kt.__version||Mt===!0){i.activeTexture(o.TEXTURE0+J);const Ut=Ie.getPrimaries(Ie.workingColorSpace),jt=b.colorSpace===Ss?null:Ie.getPrimaries(b.colorSpace),se=b.colorSpace===Ss||Ut===jt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let wt=R(b.image,!1,l.maxTextureSize);wt=Te(b,wt);const Pt=f.convert(b.format,b.colorSpace),Zt=f.convert(b.type);let Jt=H(b.internalFormat,Pt,Zt,b.colorSpace,b.isVideoTexture);Et(_t,b);let It;const ve=b.mipmaps,q=b.isVideoTexture!==!0,Ht=kt.__version===void 0||Mt===!0,Dt=gt.dataReady,Gt=I(b,wt);if(b.isDepthTexture)Jt=O(b.format===rr,b.type),Ht&&(q?i.texStorage2D(o.TEXTURE_2D,1,Jt,wt.width,wt.height):i.texImage2D(o.TEXTURE_2D,0,Jt,wt.width,wt.height,0,Pt,Zt,null));else if(b.isDataTexture)if(ve.length>0){q&&Ht&&i.texStorage2D(o.TEXTURE_2D,Gt,Jt,ve[0].width,ve[0].height);for(let Ct=0,bt=ve.length;Ct<bt;Ct++)It=ve[Ct],q?Dt&&i.texSubImage2D(o.TEXTURE_2D,Ct,0,0,It.width,It.height,Pt,Zt,It.data):i.texImage2D(o.TEXTURE_2D,Ct,Jt,It.width,It.height,0,Pt,Zt,It.data);b.generateMipmaps=!1}else q?(Ht&&i.texStorage2D(o.TEXTURE_2D,Gt,Jt,wt.width,wt.height),Dt&&rt(b,wt,Pt,Zt)):i.texImage2D(o.TEXTURE_2D,0,Jt,wt.width,wt.height,0,Pt,Zt,wt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){q&&Ht&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Gt,Jt,ve[0].width,ve[0].height,wt.depth);for(let Ct=0,bt=ve.length;Ct<bt;Ct++)if(It=ve[Ct],b.format!==ki)if(Pt!==null)if(q){if(Dt)if(b.layerUpdates.size>0){const Ot=dx(It.width,It.height,b.format,b.type);for(const fe of b.layerUpdates){const Ye=It.data.subarray(fe*Ot/It.data.BYTES_PER_ELEMENT,(fe+1)*Ot/It.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ct,0,0,fe,It.width,It.height,1,Pt,Ye)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ct,0,0,0,It.width,It.height,wt.depth,Pt,It.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Ct,Jt,It.width,It.height,wt.depth,0,It.data,0,0);else de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Dt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Ct,0,0,0,It.width,It.height,wt.depth,Pt,Zt,It.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Ct,Jt,It.width,It.height,wt.depth,0,Pt,Zt,It.data)}else{q&&Ht&&i.texStorage2D(o.TEXTURE_2D,Gt,Jt,ve[0].width,ve[0].height);for(let Ct=0,bt=ve.length;Ct<bt;Ct++)It=ve[Ct],b.format!==ki?Pt!==null?q?Dt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Ct,0,0,It.width,It.height,Pt,It.data):i.compressedTexImage2D(o.TEXTURE_2D,Ct,Jt,It.width,It.height,0,It.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Dt&&i.texSubImage2D(o.TEXTURE_2D,Ct,0,0,It.width,It.height,Pt,Zt,It.data):i.texImage2D(o.TEXTURE_2D,Ct,Jt,It.width,It.height,0,Pt,Zt,It.data)}else if(b.isDataArrayTexture)if(q){if(Ht&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Gt,Jt,wt.width,wt.height,wt.depth),Dt)if(b.layerUpdates.size>0){const Ct=dx(wt.width,wt.height,b.format,b.type);for(const bt of b.layerUpdates){const Ot=wt.data.subarray(bt*Ct/wt.data.BYTES_PER_ELEMENT,(bt+1)*Ct/wt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,bt,wt.width,wt.height,1,Pt,Zt,Ot)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,wt.width,wt.height,wt.depth,Pt,Zt,wt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Jt,wt.width,wt.height,wt.depth,0,Pt,Zt,wt.data);else if(b.isData3DTexture)q?(Ht&&i.texStorage3D(o.TEXTURE_3D,Gt,Jt,wt.width,wt.height,wt.depth),Dt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,wt.width,wt.height,wt.depth,Pt,Zt,wt.data)):i.texImage3D(o.TEXTURE_3D,0,Jt,wt.width,wt.height,wt.depth,0,Pt,Zt,wt.data);else if(b.isFramebufferTexture){if(Ht)if(q)i.texStorage2D(o.TEXTURE_2D,Gt,Jt,wt.width,wt.height);else{let Ct=wt.width,bt=wt.height;for(let Ot=0;Ot<Gt;Ot++)i.texImage2D(o.TEXTURE_2D,Ot,Jt,Ct,bt,0,Pt,Zt,null),Ct>>=1,bt>>=1}}else if(ve.length>0){if(q&&Ht){const Ct=Wt(ve[0]);i.texStorage2D(o.TEXTURE_2D,Gt,Jt,Ct.width,Ct.height)}for(let Ct=0,bt=ve.length;Ct<bt;Ct++)It=ve[Ct],q?Dt&&i.texSubImage2D(o.TEXTURE_2D,Ct,0,0,Pt,Zt,It):i.texImage2D(o.TEXTURE_2D,Ct,Jt,Pt,Zt,It);b.generateMipmaps=!1}else if(q){if(Ht){const Ct=Wt(wt);i.texStorage2D(o.TEXTURE_2D,Gt,Jt,Ct.width,Ct.height)}Dt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Pt,Zt,wt)}else i.texImage2D(o.TEXTURE_2D,0,Jt,Pt,Zt,wt);M(b)&&S(_t),kt.__version=gt.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function W(L,b,J){if(b.image.length!==6)return;const _t=Rt(L,b),Mt=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+J);const gt=s.get(Mt);if(Mt.version!==gt.__version||_t===!0){i.activeTexture(o.TEXTURE0+J);const kt=Ie.getPrimaries(Ie.workingColorSpace),Ut=b.colorSpace===Ss?null:Ie.getPrimaries(b.colorSpace),jt=b.colorSpace===Ss||kt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);const se=b.isCompressedTexture||b.image[0].isCompressedTexture,wt=b.image[0]&&b.image[0].isDataTexture,Pt=[];for(let bt=0;bt<6;bt++)!se&&!wt?Pt[bt]=R(b.image[bt],!0,l.maxCubemapSize):Pt[bt]=wt?b.image[bt].image:b.image[bt],Pt[bt]=Te(b,Pt[bt]);const Zt=Pt[0],Jt=f.convert(b.format,b.colorSpace),It=f.convert(b.type),ve=H(b.internalFormat,Jt,It,b.colorSpace),q=b.isVideoTexture!==!0,Ht=gt.__version===void 0||_t===!0,Dt=Mt.dataReady;let Gt=I(b,Zt);Et(o.TEXTURE_CUBE_MAP,b);let Ct;if(se){q&&Ht&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Gt,ve,Zt.width,Zt.height);for(let bt=0;bt<6;bt++){Ct=Pt[bt].mipmaps;for(let Ot=0;Ot<Ct.length;Ot++){const fe=Ct[Ot];b.format!==ki?Jt!==null?q?Dt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Ot,0,0,fe.width,fe.height,Jt,fe.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Ot,ve,fe.width,fe.height,0,fe.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Ot,0,0,fe.width,fe.height,Jt,It,fe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Ot,ve,fe.width,fe.height,0,Jt,It,fe.data)}}}else{if(Ct=b.mipmaps,q&&Ht){Ct.length>0&&Gt++;const bt=Wt(Pt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Gt,ve,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(wt){q?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Pt[bt].width,Pt[bt].height,Jt,It,Pt[bt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ve,Pt[bt].width,Pt[bt].height,0,Jt,It,Pt[bt].data);for(let Ot=0;Ot<Ct.length;Ot++){const Ye=Ct[Ot].image[bt].image;q?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Ot+1,0,0,Ye.width,Ye.height,Jt,It,Ye.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Ot+1,ve,Ye.width,Ye.height,0,Jt,It,Ye.data)}}else{q?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Jt,It,Pt[bt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ve,Jt,It,Pt[bt]);for(let Ot=0;Ot<Ct.length;Ot++){const fe=Ct[Ot];q?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Ot+1,0,0,Jt,It,fe.image[bt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Ot+1,ve,Jt,It,fe.image[bt])}}}M(b)&&S(o.TEXTURE_CUBE_MAP),gt.__version=Mt.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function mt(L,b,J,_t,Mt,gt){const kt=f.convert(J.format,J.colorSpace),Ut=f.convert(J.type),jt=H(J.internalFormat,kt,Ut,J.colorSpace),se=s.get(b),wt=s.get(J);if(wt.__renderTarget=b,!se.__hasExternalTextures){const Pt=Math.max(1,b.width>>gt),Zt=Math.max(1,b.height>>gt);Mt===o.TEXTURE_3D||Mt===o.TEXTURE_2D_ARRAY?i.texImage3D(Mt,gt,jt,Pt,Zt,b.depth,0,kt,Ut,null):i.texImage2D(Mt,gt,jt,Pt,Zt,0,kt,Ut,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),Me(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,_t,Mt,wt.__webglTexture,0,V(b)):(Mt===o.TEXTURE_2D||Mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,_t,Mt,wt.__webglTexture,gt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Tt(L,b,J){if(o.bindRenderbuffer(o.RENDERBUFFER,L),b.depthBuffer){const _t=b.depthTexture,Mt=_t&&_t.isDepthTexture?_t.type:null,gt=O(b.stencilBuffer,Mt),kt=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Me(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(b),gt,b.width,b.height):J?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(b),gt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,gt,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,kt,o.RENDERBUFFER,L)}else{const _t=b.textures;for(let Mt=0;Mt<_t.length;Mt++){const gt=_t[Mt],kt=f.convert(gt.format,gt.colorSpace),Ut=f.convert(gt.type),jt=H(gt.internalFormat,kt,Ut,gt.colorSpace);Me(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(b),jt,b.width,b.height):J?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(b),jt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,jt,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function yt(L,b,J){const _t=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Mt=s.get(b.depthTexture);if(Mt.__renderTarget=b,(!Mt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),_t){if(Mt.__webglInit===void 0&&(Mt.__webglInit=!0,b.depthTexture.addEventListener("dispose",D)),Mt.__webglTexture===void 0){Mt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,Mt.__webglTexture),Et(o.TEXTURE_CUBE_MAP,b.depthTexture);const se=f.convert(b.depthTexture.format),wt=f.convert(b.depthTexture.type);let Pt;b.depthTexture.format===Ia?Pt=o.DEPTH_COMPONENT24:b.depthTexture.format===rr&&(Pt=o.DEPTH24_STENCIL8);for(let Zt=0;Zt<6;Zt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Zt,0,Pt,b.width,b.height,0,se,wt,null)}}else dt(b.depthTexture,0);const gt=Mt.__webglTexture,kt=V(b),Ut=_t?o.TEXTURE_CUBE_MAP_POSITIVE_X+J:o.TEXTURE_2D,jt=b.depthTexture.format===rr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ia)Me(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,jt,Ut,gt,0,kt):o.framebufferTexture2D(o.FRAMEBUFFER,jt,Ut,gt,0);else if(b.depthTexture.format===rr)Me(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,jt,Ut,gt,0,kt):o.framebufferTexture2D(o.FRAMEBUFFER,jt,Ut,gt,0);else throw new Error("Unknown depthTexture format")}function St(L){const b=s.get(L),J=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const _t=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),_t){const Mt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,_t.removeEventListener("dispose",Mt)};_t.addEventListener("dispose",Mt),b.__depthDisposeCallback=Mt}b.__boundDepthTexture=_t}if(L.depthTexture&&!b.__autoAllocateDepthBuffer)if(J)for(let _t=0;_t<6;_t++)yt(b.__webglFramebuffer[_t],L,_t);else{const _t=L.texture.mipmaps;_t&&_t.length>0?yt(b.__webglFramebuffer[0],L,0):yt(b.__webglFramebuffer,L,0)}else if(J){b.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[_t]),b.__webglDepthbuffer[_t]===void 0)b.__webglDepthbuffer[_t]=o.createRenderbuffer(),Tt(b.__webglDepthbuffer[_t],L,!1);else{const Mt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,gt=b.__webglDepthbuffer[_t];o.bindRenderbuffer(o.RENDERBUFFER,gt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,gt)}}else{const _t=L.texture.mipmaps;if(_t&&_t.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),Tt(b.__webglDepthbuffer,L,!1);else{const Mt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,gt=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,gt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,gt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Nt(L,b,J){const _t=s.get(L);b!==void 0&&mt(_t.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),J!==void 0&&St(L)}function te(L){const b=L.texture,J=s.get(L),_t=s.get(b);L.addEventListener("dispose",N);const Mt=L.textures,gt=L.isWebGLCubeRenderTarget===!0,kt=Mt.length>1;if(kt||(_t.__webglTexture===void 0&&(_t.__webglTexture=o.createTexture()),_t.__version=b.version,h.memory.textures++),gt){J.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer[Ut]=[];for(let jt=0;jt<b.mipmaps.length;jt++)J.__webglFramebuffer[Ut][jt]=o.createFramebuffer()}else J.__webglFramebuffer[Ut]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer=[];for(let Ut=0;Ut<b.mipmaps.length;Ut++)J.__webglFramebuffer[Ut]=o.createFramebuffer()}else J.__webglFramebuffer=o.createFramebuffer();if(kt)for(let Ut=0,jt=Mt.length;Ut<jt;Ut++){const se=s.get(Mt[Ut]);se.__webglTexture===void 0&&(se.__webglTexture=o.createTexture(),h.memory.textures++)}if(L.samples>0&&Me(L)===!1){J.__webglMultisampledFramebuffer=o.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Ut=0;Ut<Mt.length;Ut++){const jt=Mt[Ut];J.__webglColorRenderbuffer[Ut]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,J.__webglColorRenderbuffer[Ut]);const se=f.convert(jt.format,jt.colorSpace),wt=f.convert(jt.type),Pt=H(jt.internalFormat,se,wt,jt.colorSpace,L.isXRRenderTarget===!0),Zt=V(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Zt,Pt,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,J.__webglColorRenderbuffer[Ut])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=o.createRenderbuffer(),Tt(J.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(gt){i.bindTexture(o.TEXTURE_CUBE_MAP,_t.__webglTexture),Et(o.TEXTURE_CUBE_MAP,b);for(let Ut=0;Ut<6;Ut++)if(b.mipmaps&&b.mipmaps.length>0)for(let jt=0;jt<b.mipmaps.length;jt++)mt(J.__webglFramebuffer[Ut][jt],L,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,jt);else mt(J.__webglFramebuffer[Ut],L,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);M(b)&&S(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(kt){for(let Ut=0,jt=Mt.length;Ut<jt;Ut++){const se=Mt[Ut],wt=s.get(se);let Pt=o.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Pt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Pt,wt.__webglTexture),Et(Pt,se),mt(J.__webglFramebuffer,L,se,o.COLOR_ATTACHMENT0+Ut,Pt,0),M(se)&&S(Pt)}i.unbindTexture()}else{let Ut=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ut=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ut,_t.__webglTexture),Et(Ut,b),b.mipmaps&&b.mipmaps.length>0)for(let jt=0;jt<b.mipmaps.length;jt++)mt(J.__webglFramebuffer[jt],L,b,o.COLOR_ATTACHMENT0,Ut,jt);else mt(J.__webglFramebuffer,L,b,o.COLOR_ATTACHMENT0,Ut,0);M(b)&&S(Ut),i.unbindTexture()}L.depthBuffer&&St(L)}function qt(L){const b=L.textures;for(let J=0,_t=b.length;J<_t;J++){const Mt=b[J];if(M(Mt)){const gt=P(L),kt=s.get(Mt).__webglTexture;i.bindTexture(gt,kt),S(gt),i.unbindTexture()}}}const le=[],$t=[];function re(L){if(L.samples>0){if(Me(L)===!1){const b=L.textures,J=L.width,_t=L.height;let Mt=o.COLOR_BUFFER_BIT;const gt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,kt=s.get(L),Ut=b.length>1;if(Ut)for(let se=0;se<b.length;se++)i.bindFramebuffer(o.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+se,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+se,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer);const jt=L.texture.mipmaps;jt&&jt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let se=0;se<b.length;se++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Mt|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Mt|=o.STENCIL_BUFFER_BIT)),Ut){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,kt.__webglColorRenderbuffer[se]);const wt=s.get(b[se]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,wt,0)}o.blitFramebuffer(0,0,J,_t,0,0,J,_t,Mt,o.NEAREST),p===!0&&(le.length=0,$t.length=0,le.push(o.COLOR_ATTACHMENT0+se),L.depthBuffer&&L.resolveDepthBuffer===!1&&(le.push(gt),$t.push(gt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,$t)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,le))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ut)for(let se=0;se<b.length;se++){i.bindFramebuffer(o.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+se,o.RENDERBUFFER,kt.__webglColorRenderbuffer[se]);const wt=s.get(b[se]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+se,o.TEXTURE_2D,wt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const b=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function V(L){return Math.min(l.maxSamples,L.samples)}function Me(L){const b=s.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ue(L){const b=h.render.frame;_.get(L)!==b&&(_.set(L,b),L.update())}function Te(L,b){const J=L.colorSpace,_t=L.format,Mt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||J!==yo&&J!==Ss&&(Ie.getTransfer(J)===je?(_t!==ki||Mt!==xi)&&de("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pe("WebGLTextures: Unsupported texture color space:",J)),b}function Wt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(g.width=L.naturalWidth||L.width,g.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(g.width=L.displayWidth,g.height=L.displayHeight):(g.width=L.width,g.height=L.height),g}this.allocateTextureUnit=it,this.resetTextureUnits=st,this.setTexture2D=dt,this.setTexture2DArray=Z,this.setTexture3D=K,this.setTextureCube=ft,this.rebindTextures=Nt,this.setupRenderTarget=te,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=Me,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Tw(o,e){function i(s,l=Ss){let f;const h=Ie.getTransfer(l);if(s===xi)return o.UNSIGNED_BYTE;if(s===im)return o.UNSIGNED_SHORT_4_4_4_4;if(s===am)return o.UNSIGNED_SHORT_5_5_5_1;if(s===cS)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===uS)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===oS)return o.BYTE;if(s===lS)return o.SHORT;if(s===Rl)return o.UNSIGNED_SHORT;if(s===nm)return o.INT;if(s===la)return o.UNSIGNED_INT;if(s===ia)return o.FLOAT;if(s===Pa)return o.HALF_FLOAT;if(s===fS)return o.ALPHA;if(s===hS)return o.RGB;if(s===ki)return o.RGBA;if(s===Ia)return o.DEPTH_COMPONENT;if(s===rr)return o.DEPTH_STENCIL;if(s===dS)return o.RED;if(s===sm)return o.RED_INTEGER;if(s===So)return o.RG;if(s===rm)return o.RG_INTEGER;if(s===om)return o.RGBA_INTEGER;if(s===Du||s===Nu||s===Uu||s===Lu)if(h===je)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===Du)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Nu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Uu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Lu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===Du)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Nu)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Uu)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Lu)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===mp||s===gp||s===_p||s===vp)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===mp)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===gp)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===_p)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===vp)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===xp||s===Sp||s===yp||s===Mp||s===bp||s===Ep||s===Tp)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(s===xp||s===Sp)return h===je?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===yp)return h===je?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC;if(s===Mp)return f.COMPRESSED_R11_EAC;if(s===bp)return f.COMPRESSED_SIGNED_R11_EAC;if(s===Ep)return f.COMPRESSED_RG11_EAC;if(s===Tp)return f.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Ap||s===Cp||s===wp||s===Rp||s===Dp||s===Np||s===Up||s===Lp||s===Op||s===Pp||s===Ip||s===zp||s===Fp||s===Bp)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(s===Ap)return h===je?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Cp)return h===je?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===wp)return h===je?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Rp)return h===je?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Dp)return h===je?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Np)return h===je?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Up)return h===je?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Lp)return h===je?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Op)return h===je?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Pp)return h===je?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ip)return h===je?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===zp)return h===je?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Fp)return h===je?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Bp)return h===je?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Hp||s===Gp||s===Vp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(s===Hp)return h===je?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Gp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Vp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===kp||s===Xp||s===jp||s===Yp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(s===kp)return f.COMPRESSED_RED_RGTC1_EXT;if(s===Xp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===jp)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Yp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Dl?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const Aw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ww{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new TS(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ua({vertexShader:Aw,fragmentShader:Cw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new cn(new zl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Rw extends cr{constructor(e,i){super();const s=this;let l=null,f=1,h=null,d="local-floor",p=1,g=null,_=null,m=null,x=null,y=null,E=null;const R=typeof XRWebGLBinding<"u",M=new ww,S={},P=i.getContextAttributes();let H=null,O=null;const I=[],D=[],N=new pe;let X=null;const A=new vi;A.viewport=new un;const w=new vi;w.viewport=new un;const k=[A,w],st=new IE;let it=null,pt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let W=I[Y];return W===void 0&&(W=new Gd,I[Y]=W),W.getTargetRaySpace()},this.getControllerGrip=function(Y){let W=I[Y];return W===void 0&&(W=new Gd,I[Y]=W),W.getGripSpace()},this.getHand=function(Y){let W=I[Y];return W===void 0&&(W=new Gd,I[Y]=W),W.getHandSpace()};function dt(Y){const W=D.indexOf(Y.inputSource);if(W===-1)return;const mt=I[W];mt!==void 0&&(mt.update(Y.inputSource,Y.frame,g||h),mt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function Z(){l.removeEventListener("select",dt),l.removeEventListener("selectstart",dt),l.removeEventListener("selectend",dt),l.removeEventListener("squeeze",dt),l.removeEventListener("squeezestart",dt),l.removeEventListener("squeezeend",dt),l.removeEventListener("end",Z),l.removeEventListener("inputsourceschange",K);for(let Y=0;Y<I.length;Y++){const W=D[Y];W!==null&&(D[Y]=null,I[Y].disconnect(W))}it=null,pt=null,M.reset();for(const Y in S)delete S[Y];e.setRenderTarget(H),y=null,x=null,m=null,l=null,O=null,rt.stop(),s.isPresenting=!1,e.setPixelRatio(X),e.setSize(N.width,N.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){f=Y,s.isPresenting===!0&&de("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){d=Y,s.isPresenting===!0&&de("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||h},this.setReferenceSpace=function(Y){g=Y},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return m===null&&R&&(m=new XRWebGLBinding(l,i)),m},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(Y){if(l=Y,l!==null){if(H=e.getRenderTarget(),l.addEventListener("select",dt),l.addEventListener("selectstart",dt),l.addEventListener("selectend",dt),l.addEventListener("squeeze",dt),l.addEventListener("squeezestart",dt),l.addEventListener("squeezeend",dt),l.addEventListener("end",Z),l.addEventListener("inputsourceschange",K),P.xrCompatible!==!0&&await i.makeXRCompatible(),X=e.getPixelRatio(),e.getSize(N),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,Tt=null,yt=null;P.depth&&(yt=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,mt=P.stencil?rr:Ia,Tt=P.stencil?Dl:la);const St={colorFormat:i.RGBA8,depthFormat:yt,scaleFactor:f};m=this.getBinding(),x=m.createProjectionLayer(St),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),O=new ra(x.textureWidth,x.textureHeight,{format:ki,type:xi,depthTexture:new Ll(x.textureWidth,x.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const mt={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:f};y=new XRWebGLLayer(l,i,mt),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),O=new ra(y.framebufferWidth,y.framebufferHeight,{format:ki,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(p),g=null,h=await l.requestReferenceSpace(d),rt.setContext(l),rt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function K(Y){for(let W=0;W<Y.removed.length;W++){const mt=Y.removed[W],Tt=D.indexOf(mt);Tt>=0&&(D[Tt]=null,I[Tt].disconnect(mt))}for(let W=0;W<Y.added.length;W++){const mt=Y.added[W];let Tt=D.indexOf(mt);if(Tt===-1){for(let St=0;St<I.length;St++)if(St>=D.length){D.push(mt),Tt=St;break}else if(D[St]===null){D[St]=mt,Tt=St;break}if(Tt===-1)break}const yt=I[Tt];yt&&yt.connect(mt)}}const ft=new ct,At=new ct;function G(Y,W,mt){ft.setFromMatrixPosition(W.matrixWorld),At.setFromMatrixPosition(mt.matrixWorld);const Tt=ft.distanceTo(At),yt=W.projectionMatrix.elements,St=mt.projectionMatrix.elements,Nt=yt[14]/(yt[10]-1),te=yt[14]/(yt[10]+1),qt=(yt[9]+1)/yt[5],le=(yt[9]-1)/yt[5],$t=(yt[8]-1)/yt[0],re=(St[8]+1)/St[0],V=Nt*$t,Me=Nt*re,ue=Tt/(-$t+re),Te=ue*-$t;if(W.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Te),Y.translateZ(ue),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),yt[10]===-1)Y.projectionMatrix.copy(W.projectionMatrix),Y.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{const Wt=Nt+ue,L=te+ue,b=V-Te,J=Me+(Tt-Te),_t=qt*te/L*Wt,Mt=le*te/L*Wt;Y.projectionMatrix.makePerspective(b,J,_t,Mt,Wt,L),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function z(Y,W){W===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(W.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(l===null)return;let W=Y.near,mt=Y.far;M.texture!==null&&(M.depthNear>0&&(W=M.depthNear),M.depthFar>0&&(mt=M.depthFar)),st.near=w.near=A.near=W,st.far=w.far=A.far=mt,(it!==st.near||pt!==st.far)&&(l.updateRenderState({depthNear:st.near,depthFar:st.far}),it=st.near,pt=st.far),st.layers.mask=Y.layers.mask|6,A.layers.mask=st.layers.mask&3,w.layers.mask=st.layers.mask&5;const Tt=Y.parent,yt=st.cameras;z(st,Tt);for(let St=0;St<yt.length;St++)z(yt[St],Tt);yt.length===2?G(st,A,w):st.projectionMatrix.copy(A.projectionMatrix),Et(Y,st,Tt)};function Et(Y,W,mt){mt===null?Y.matrix.copy(W.matrixWorld):(Y.matrix.copy(mt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(W.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(W.projectionMatrix),Y.projectionMatrixInverse.copy(W.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ul*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return st},this.getFoveation=function(){if(!(x===null&&y===null))return p},this.setFoveation=function(Y){p=Y,x!==null&&(x.fixedFoveation=Y),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Y)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(st)},this.getCameraTexture=function(Y){return S[Y]};let Rt=null;function F(Y,W){if(_=W.getViewerPose(g||h),E=W,_!==null){const mt=_.views;y!==null&&(e.setRenderTargetFramebuffer(O,y.framebuffer),e.setRenderTarget(O));let Tt=!1;mt.length!==st.cameras.length&&(st.cameras.length=0,Tt=!0);for(let te=0;te<mt.length;te++){const qt=mt[te];let le=null;if(y!==null)le=y.getViewport(qt);else{const re=m.getViewSubImage(x,qt);le=re.viewport,te===0&&(e.setRenderTargetTextures(O,re.colorTexture,re.depthStencilTexture),e.setRenderTarget(O))}let $t=k[te];$t===void 0&&($t=new vi,$t.layers.enable(te),$t.viewport=new un,k[te]=$t),$t.matrix.fromArray(qt.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(qt.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(le.x,le.y,le.width,le.height),te===0&&(st.matrix.copy($t.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale)),Tt===!0&&st.cameras.push($t)}const yt=l.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){m=s.getBinding();const te=m.getDepthInformation(mt[0]);te&&te.isValid&&te.texture&&M.init(te,l.renderState)}if(yt&&yt.includes("camera-access")&&R){e.state.unbindTexture(),m=s.getBinding();for(let te=0;te<mt.length;te++){const qt=mt[te].camera;if(qt){let le=S[qt];le||(le=new TS,S[qt]=le);const $t=m.getCameraImage(qt);le.sourceTexture=$t}}}}for(let mt=0;mt<I.length;mt++){const Tt=D[mt],yt=I[mt];Tt!==null&&yt!==void 0&&yt.update(Tt,W,g||h)}Rt&&Rt(Y,W),W.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:W}),E=null}const rt=new CS;rt.setAnimationLoop(F),this.setAnimationLoop=function(Y){Rt=Y},this.dispose=function(){}}}const tr=new ca,Dw=new rn;function Nw(o,e){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function s(M,S){S.color.getRGB(M.fogColor.value,yS(o)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,P,H,O){S.isMeshBasicMaterial||S.isMeshLambertMaterial?f(M,S):S.isMeshToonMaterial?(f(M,S),m(M,S)):S.isMeshPhongMaterial?(f(M,S),_(M,S)):S.isMeshStandardMaterial?(f(M,S),x(M,S),S.isMeshPhysicalMaterial&&y(M,S,O)):S.isMeshMatcapMaterial?(f(M,S),E(M,S)):S.isMeshDepthMaterial?f(M,S):S.isMeshDistanceMaterial?(f(M,S),R(M,S)):S.isMeshNormalMaterial?f(M,S):S.isLineBasicMaterial?(h(M,S),S.isLineDashedMaterial&&d(M,S)):S.isPointsMaterial?p(M,S,P,H):S.isSpriteMaterial?g(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function f(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===oi&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===oi&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const P=e.get(S),H=P.envMap,O=P.envMapRotation;H&&(M.envMap.value=H,tr.copy(O),tr.x*=-1,tr.y*=-1,tr.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),M.envMapRotation.value.setFromMatrix4(Dw.makeRotationFromEuler(tr)),M.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function h(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function d(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function p(M,S,P,H){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*P,M.scale.value=H*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function g(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function _(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function m(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function x(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function y(M,S,P){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===oi&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=P.texture,M.transmissionSamplerSize.value.set(P.width,P.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,S){S.matcap&&(M.matcap.value=S.matcap)}function R(M,S){const P=e.get(S).light;M.referencePosition.value.setFromMatrixPosition(P.matrixWorld),M.nearDistance.value=P.shadow.camera.near,M.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function Uw(o,e,i,s){let l={},f={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(P,H){const O=H.program;s.uniformBlockBinding(P,O)}function g(P,H){let O=l[P.id];O===void 0&&(E(P),O=_(P),l[P.id]=O,P.addEventListener("dispose",M));const I=H.program;s.updateUBOMapping(P,I);const D=e.render.frame;f[P.id]!==D&&(x(P),f[P.id]=D)}function _(P){const H=m();P.__bindingPointIndex=H;const O=o.createBuffer(),I=P.__size,D=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,O),o.bufferData(o.UNIFORM_BUFFER,I,D),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,H,O),O}function m(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return Pe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(P){const H=l[P.id],O=P.uniforms,I=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,H);for(let D=0,N=O.length;D<N;D++){const X=Array.isArray(O[D])?O[D]:[O[D]];for(let A=0,w=X.length;A<w;A++){const k=X[A];if(y(k,D,A,I)===!0){const st=k.__offset,it=Array.isArray(k.value)?k.value:[k.value];let pt=0;for(let dt=0;dt<it.length;dt++){const Z=it[dt],K=R(Z);typeof Z=="number"||typeof Z=="boolean"?(k.__data[0]=Z,o.bufferSubData(o.UNIFORM_BUFFER,st+pt,k.__data)):Z.isMatrix3?(k.__data[0]=Z.elements[0],k.__data[1]=Z.elements[1],k.__data[2]=Z.elements[2],k.__data[3]=0,k.__data[4]=Z.elements[3],k.__data[5]=Z.elements[4],k.__data[6]=Z.elements[5],k.__data[7]=0,k.__data[8]=Z.elements[6],k.__data[9]=Z.elements[7],k.__data[10]=Z.elements[8],k.__data[11]=0):(Z.toArray(k.__data,pt),pt+=K.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,st,k.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(P,H,O,I){const D=P.value,N=H+"_"+O;if(I[N]===void 0)return typeof D=="number"||typeof D=="boolean"?I[N]=D:I[N]=D.clone(),!0;{const X=I[N];if(typeof D=="number"||typeof D=="boolean"){if(X!==D)return I[N]=D,!0}else if(X.equals(D)===!1)return X.copy(D),!0}return!1}function E(P){const H=P.uniforms;let O=0;const I=16;for(let N=0,X=H.length;N<X;N++){const A=Array.isArray(H[N])?H[N]:[H[N]];for(let w=0,k=A.length;w<k;w++){const st=A[w],it=Array.isArray(st.value)?st.value:[st.value];for(let pt=0,dt=it.length;pt<dt;pt++){const Z=it[pt],K=R(Z),ft=O%I,At=ft%K.boundary,G=ft+At;O+=At,G!==0&&I-G<K.storage&&(O+=I-G),st.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=O,O+=K.storage}}}const D=O%I;return D>0&&(O+=I-D),P.__size=O,P.__cache={},this}function R(P){const H={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(H.boundary=4,H.storage=4):P.isVector2?(H.boundary=8,H.storage=8):P.isVector3||P.isColor?(H.boundary=16,H.storage=12):P.isVector4?(H.boundary=16,H.storage=16):P.isMatrix3?(H.boundary=48,H.storage=48):P.isMatrix4?(H.boundary=64,H.storage=64):P.isTexture?de("WebGLRenderer: Texture samplers can not be part of an uniforms group."):de("WebGLRenderer: Unsupported uniform value type.",P),H}function M(P){const H=P.target;H.removeEventListener("dispose",M);const O=h.indexOf(H.__bindingPointIndex);h.splice(O,1),o.deleteBuffer(l[H.id]),delete l[H.id],delete f[H.id]}function S(){for(const P in l)o.deleteBuffer(l[P]);h=[],l={},f={}}return{bind:p,update:g,dispose:S}}const Lw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ea=null;function Ow(){return ea===null&&(ea=new bE(Lw,16,16,So,Pa),ea.name="DFG_LUT",ea.minFilter=Hn,ea.magFilter=Hn,ea.wrapS=Na,ea.wrapT=Na,ea.generateMipmaps=!1,ea.needsUpdate=!0),ea}class Pw{constructor(e={}){const{canvas:i=Pb(),context:s=null,depth:l=!0,stencil:f=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:g=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:x=!1,outputBufferType:y=xi}=e;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=h;const R=y,M=new Set([om,rm,sm]),S=new Set([xi,la,Rl,Dl,im,am]),P=new Uint32Array(4),H=new Int32Array(4);let O=null,I=null;const D=[],N=[];let X=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=sa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let w=!1;this._outputColorSpace=ri;let k=0,st=0,it=null,pt=-1,dt=null;const Z=new un,K=new un;let ft=null;const At=new ye(0);let G=0,z=i.width,Et=i.height,Rt=1,F=null,rt=null;const Y=new un(0,0,z,Et),W=new un(0,0,z,Et);let mt=!1;const Tt=new mm;let yt=!1,St=!1;const Nt=new rn,te=new ct,qt=new un,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $t=!1;function re(){return it===null?Rt:1}let V=s;function Me(C,et){return i.getContext(C,et)}try{const C={alpha:!0,depth:l,stencil:f,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:g,powerPreference:_,failIfMajorPerformanceCaveat:m};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${tm}`),i.addEventListener("webglcontextlost",fe,!1),i.addEventListener("webglcontextrestored",Ye,!1),i.addEventListener("webglcontextcreationerror",Ne,!1),V===null){const et="webgl2";if(V=Me(et,C),V===null)throw Me(et)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Pe("WebGLRenderer: "+C.message),C}let ue,Te,Wt,L,b,J,_t,Mt,gt,kt,Ut,jt,se,wt,Pt,Zt,Jt,It,ve,q,Ht,Dt,Gt,Ct;function bt(){ue=new O2(V),ue.init(),Dt=new Tw(V,ue),Te=new T2(V,ue,e,Dt),Wt=new bw(V,ue),Te.reversedDepthBuffer&&x&&Wt.buffers.depth.setReversed(!0),L=new z2(V),b=new lw,J=new Ew(V,ue,Wt,b,Te,Dt,L),_t=new C2(A),Mt=new L2(A),gt=new GE(V),Gt=new b2(V,gt),kt=new P2(V,gt,L,Gt),Ut=new B2(V,kt,gt,L),ve=new F2(V,Te,J),Zt=new A2(b),jt=new ow(A,_t,Mt,ue,Te,Gt,Zt),se=new Nw(A,b),wt=new uw,Pt=new gw(ue),It=new M2(A,_t,Mt,Wt,Ut,E,p),Jt=new yw(A,Ut,Te),Ct=new Uw(V,L,Te,Wt),q=new E2(V,ue,L),Ht=new I2(V,ue,L),L.programs=jt.programs,A.capabilities=Te,A.extensions=ue,A.properties=b,A.renderLists=wt,A.shadowMap=Jt,A.state=Wt,A.info=L}bt(),R!==xi&&(X=new G2(R,i.width,i.height,l,f));const Ot=new Rw(A,V);this.xr=Ot,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const C=ue.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ue.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Rt},this.setPixelRatio=function(C){C!==void 0&&(Rt=C,this.setSize(z,Et,!1))},this.getSize=function(C){return C.set(z,Et)},this.setSize=function(C,et,ht=!0){if(Ot.isPresenting){de("WebGLRenderer: Can't change size while VR device is presenting.");return}z=C,Et=et,i.width=Math.floor(C*Rt),i.height=Math.floor(et*Rt),ht===!0&&(i.style.width=C+"px",i.style.height=et+"px"),X!==null&&X.setSize(i.width,i.height),this.setViewport(0,0,C,et)},this.getDrawingBufferSize=function(C){return C.set(z*Rt,Et*Rt).floor()},this.setDrawingBufferSize=function(C,et,ht){z=C,Et=et,Rt=ht,i.width=Math.floor(C*ht),i.height=Math.floor(et*ht),this.setViewport(0,0,C,et)},this.setEffects=function(C){if(R===xi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let et=0;et<C.length;et++)if(C[et].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}X.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(Z)},this.getViewport=function(C){return C.copy(Y)},this.setViewport=function(C,et,ht,ot){C.isVector4?Y.set(C.x,C.y,C.z,C.w):Y.set(C,et,ht,ot),Wt.viewport(Z.copy(Y).multiplyScalar(Rt).round())},this.getScissor=function(C){return C.copy(W)},this.setScissor=function(C,et,ht,ot){C.isVector4?W.set(C.x,C.y,C.z,C.w):W.set(C,et,ht,ot),Wt.scissor(K.copy(W).multiplyScalar(Rt).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(C){Wt.setScissorTest(mt=C)},this.setOpaqueSort=function(C){F=C},this.setTransparentSort=function(C){rt=C},this.getClearColor=function(C){return C.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor(...arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha(...arguments)},this.clear=function(C=!0,et=!0,ht=!0){let ot=0;if(C){let nt=!1;if(it!==null){const Lt=it.texture.format;nt=M.has(Lt)}if(nt){const Lt=it.texture.type,Xt=S.has(Lt),Ft=It.getClearColor(),Kt=It.getClearAlpha(),ee=Ft.r,ae=Ft.g,ne=Ft.b;Xt?(P[0]=ee,P[1]=ae,P[2]=ne,P[3]=Kt,V.clearBufferuiv(V.COLOR,0,P)):(H[0]=ee,H[1]=ae,H[2]=ne,H[3]=Kt,V.clearBufferiv(V.COLOR,0,H))}else ot|=V.COLOR_BUFFER_BIT}et&&(ot|=V.DEPTH_BUFFER_BIT),ht&&(ot|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",fe,!1),i.removeEventListener("webglcontextrestored",Ye,!1),i.removeEventListener("webglcontextcreationerror",Ne,!1),It.dispose(),wt.dispose(),Pt.dispose(),b.dispose(),_t.dispose(),Mt.dispose(),Ut.dispose(),Gt.dispose(),Ct.dispose(),jt.dispose(),Ot.dispose(),Ot.removeEventListener("sessionstart",bs),Ot.removeEventListener("sessionend",Es),Si.stop()};function fe(C){C.preventDefault(),kv("WebGLRenderer: Context Lost."),w=!0}function Ye(){kv("WebGLRenderer: Context Restored."),w=!1;const C=L.autoReset,et=Jt.enabled,ht=Jt.autoUpdate,ot=Jt.needsUpdate,nt=Jt.type;bt(),L.autoReset=C,Jt.enabled=et,Jt.autoUpdate=ht,Jt.needsUpdate=ot,Jt.type=nt}function Ne(C){Pe("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function tn(C){const et=C.target;et.removeEventListener("dispose",tn),Mn(et)}function Mn(C){kn(C),b.remove(C)}function kn(C){const et=b.get(C).programs;et!==void 0&&(et.forEach(function(ht){jt.releaseProgram(ht)}),C.isShaderMaterial&&jt.releaseShaderCache(C))}this.renderBufferDirect=function(C,et,ht,ot,nt,Lt){et===null&&(et=le);const Xt=nt.isMesh&&nt.matrixWorld.determinant()<0,Ft=Vu(C,et,ht,ot,nt);Wt.setMaterial(ot,Xt);let Kt=ht.index,ee=1;if(ot.wireframe===!0){if(Kt=kt.getWireframeAttribute(ht),Kt===void 0)return;ee=2}const ae=ht.drawRange,ne=ht.attributes.position;let me=ae.start*ee,we=(ae.start+ae.count)*ee;Lt!==null&&(me=Math.max(me,Lt.start*ee),we=Math.min(we,(Lt.start+Lt.count)*ee)),Kt!==null?(me=Math.max(me,0),we=Math.min(we,Kt.count)):ne!=null&&(me=Math.max(me,0),we=Math.min(we,ne.count));const He=we-me;if(He<0||He===1/0)return;Gt.setup(nt,ot,Ft,ht,Kt);let qe,Le=q;if(Kt!==null&&(qe=gt.get(Kt),Le=Ht,Le.setIndex(qe)),nt.isMesh)ot.wireframe===!0?(Wt.setLineWidth(ot.wireframeLinewidth*re()),Le.setMode(V.LINES)):Le.setMode(V.TRIANGLES);else if(nt.isLine){let Vt=ot.linewidth;Vt===void 0&&(Vt=1),Wt.setLineWidth(Vt*re()),nt.isLineSegments?Le.setMode(V.LINES):nt.isLineLoop?Le.setMode(V.LINE_LOOP):Le.setMode(V.LINE_STRIP)}else nt.isPoints?Le.setMode(V.POINTS):nt.isSprite&&Le.setMode(V.TRIANGLES);if(nt.isBatchedMesh)if(nt._multiDrawInstances!==null)Nl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Le.renderMultiDrawInstances(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount,nt._multiDrawInstances);else if(ue.get("WEBGL_multi_draw"))Le.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{const Vt=nt._multiDrawStarts,ze=nt._multiDrawCounts,Ue=nt._multiDrawCount,In=Kt?gt.get(Kt).bytesPerElement:1,Qn=b.get(ot).currentProgram.getUniforms();for(let hn=0;hn<Ue;hn++)Qn.setValue(V,"_gl_DrawID",hn),Le.render(Vt[hn]/In,ze[hn])}else if(nt.isInstancedMesh)Le.renderInstances(me,He,nt.count);else if(ht.isInstancedBufferGeometry){const Vt=ht._maxInstanceCount!==void 0?ht._maxInstanceCount:1/0,ze=Math.min(ht.instanceCount,Vt);Le.renderInstances(me,He,ze)}else Le.render(me,He)};function Fl(C,et,ht){C.transparent===!0&&C.side===Da&&C.forceSinglePass===!1?(C.side=oi,C.needsUpdate=!0,Cs(C,et,ht),C.side=Ms,C.needsUpdate=!0,Cs(C,et,ht),C.side=Da):Cs(C,et,ht)}this.compile=function(C,et,ht=null){ht===null&&(ht=C),I=Pt.get(ht),I.init(et),N.push(I),ht.traverseVisible(function(nt){nt.isLight&&nt.layers.test(et.layers)&&(I.pushLight(nt),nt.castShadow&&I.pushShadow(nt))}),C!==ht&&C.traverseVisible(function(nt){nt.isLight&&nt.layers.test(et.layers)&&(I.pushLight(nt),nt.castShadow&&I.pushShadow(nt))}),I.setupLights();const ot=new Set;return C.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;const Lt=nt.material;if(Lt)if(Array.isArray(Lt))for(let Xt=0;Xt<Lt.length;Xt++){const Ft=Lt[Xt];Fl(Ft,ht,nt),ot.add(Ft)}else Fl(Lt,ht,nt),ot.add(Lt)}),I=N.pop(),ot},this.compileAsync=function(C,et,ht=null){const ot=this.compile(C,et,ht);return new Promise(nt=>{function Lt(){if(ot.forEach(function(Xt){b.get(Xt).currentProgram.isReady()&&ot.delete(Xt)}),ot.size===0){nt(C);return}setTimeout(Lt,10)}ue.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let To=null;function Gu(C){To&&To(C)}function bs(){Si.stop()}function Es(){Si.start()}const Si=new CS;Si.setAnimationLoop(Gu),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(C){To=C,Ot.setAnimationLoop(C),C===null?Si.stop():Si.start()},Ot.addEventListener("sessionstart",bs),Ot.addEventListener("sessionend",Es),this.render=function(C,et){if(et!==void 0&&et.isCamera!==!0){Pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const ht=Ot.enabled===!0&&Ot.isPresenting===!0,ot=X!==null&&(it===null||ht)&&X.begin(A,it);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),et.parent===null&&et.matrixWorldAutoUpdate===!0&&et.updateMatrixWorld(),Ot.enabled===!0&&Ot.isPresenting===!0&&(X===null||X.isCompositing()===!1)&&(Ot.cameraAutoUpdate===!0&&Ot.updateCamera(et),et=Ot.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,et,it),I=Pt.get(C,N.length),I.init(et),N.push(I),Nt.multiplyMatrices(et.projectionMatrix,et.matrixWorldInverse),Tt.setFromProjectionMatrix(Nt,aa,et.reversedDepth),St=this.localClippingEnabled,yt=Zt.init(this.clippingPlanes,St),O=wt.get(C,D.length),O.init(),D.push(O),Ot.enabled===!0&&Ot.isPresenting===!0){const Xt=A.xr.getDepthSensingMesh();Xt!==null&&Ui(Xt,et,-1/0,A.sortObjects)}Ui(C,et,0,A.sortObjects),O.finish(),A.sortObjects===!0&&O.sort(F,rt),$t=Ot.enabled===!1||Ot.isPresenting===!1||Ot.hasDepthSensing()===!1,$t&&It.addToRenderList(O,C),this.info.render.frame++,yt===!0&&Zt.beginShadows();const nt=I.state.shadowsArray;if(Jt.render(nt,C,et),yt===!0&&Zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ot&&X.hasRenderPass())===!1){const Xt=O.opaque,Ft=O.transmissive;if(I.setupLights(),et.isArrayCamera){const Kt=et.cameras;if(Ft.length>0)for(let ee=0,ae=Kt.length;ee<ae;ee++){const ne=Kt[ee];Fa(Xt,Ft,C,ne)}$t&&It.render(C);for(let ee=0,ae=Kt.length;ee<ae;ee++){const ne=Kt[ee];Ts(O,C,ne,ne.viewport)}}else Ft.length>0&&Fa(Xt,Ft,C,et),$t&&It.render(C),Ts(O,C,et)}it!==null&&st===0&&(J.updateMultisampleRenderTarget(it),J.updateRenderTargetMipmap(it)),ot&&X.end(A),C.isScene===!0&&C.onAfterRender(A,C,et),Gt.resetDefaultState(),pt=-1,dt=null,N.pop(),N.length>0?(I=N[N.length-1],yt===!0&&Zt.setGlobalState(A.clippingPlanes,I.state.camera)):I=null,D.pop(),D.length>0?O=D[D.length-1]:O=null};function Ui(C,et,ht,ot){if(C.visible===!1)return;if(C.layers.test(et.layers)){if(C.isGroup)ht=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(et);else if(C.isLight)I.pushLight(C),C.castShadow&&I.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Tt.intersectsSprite(C)){ot&&qt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Nt);const Xt=Ut.update(C),Ft=C.material;Ft.visible&&O.push(C,Xt,Ft,ht,qt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Tt.intersectsObject(C))){const Xt=Ut.update(C),Ft=C.material;if(ot&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),qt.copy(C.boundingSphere.center)):(Xt.boundingSphere===null&&Xt.computeBoundingSphere(),qt.copy(Xt.boundingSphere.center)),qt.applyMatrix4(C.matrixWorld).applyMatrix4(Nt)),Array.isArray(Ft)){const Kt=Xt.groups;for(let ee=0,ae=Kt.length;ee<ae;ee++){const ne=Kt[ee],me=Ft[ne.materialIndex];me&&me.visible&&O.push(C,Xt,me,ht,qt.z,ne)}}else Ft.visible&&O.push(C,Xt,Ft,ht,qt.z,null)}}const Lt=C.children;for(let Xt=0,Ft=Lt.length;Xt<Ft;Xt++)Ui(Lt[Xt],et,ht,ot)}function Ts(C,et,ht,ot){const{opaque:nt,transmissive:Lt,transparent:Xt}=C;I.setupLightsView(ht),yt===!0&&Zt.setGlobalState(A.clippingPlanes,ht),ot&&Wt.viewport(Z.copy(ot)),nt.length>0&&As(nt,et,ht),Lt.length>0&&As(Lt,et,ht),Xt.length>0&&As(Xt,et,ht),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function Fa(C,et,ht,ot){if((ht.isScene===!0?ht.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[ot.id]===void 0){const me=ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[ot.id]=new ra(1,1,{generateMipmaps:!0,type:me?Pa:xi,minFilter:sr,samples:Te.samples,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ie.workingColorSpace})}const Lt=I.state.transmissionRenderTarget[ot.id],Xt=ot.viewport||Z;Lt.setSize(Xt.z*A.transmissionResolutionScale,Xt.w*A.transmissionResolutionScale);const Ft=A.getRenderTarget(),Kt=A.getActiveCubeFace(),ee=A.getActiveMipmapLevel();A.setRenderTarget(Lt),A.getClearColor(At),G=A.getClearAlpha(),G<1&&A.setClearColor(16777215,.5),A.clear(),$t&&It.render(ht);const ae=A.toneMapping;A.toneMapping=sa;const ne=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),I.setupLightsView(ot),yt===!0&&Zt.setGlobalState(A.clippingPlanes,ot),As(C,ht,ot),J.updateMultisampleRenderTarget(Lt),J.updateRenderTargetMipmap(Lt),ue.has("WEBGL_multisampled_render_to_texture")===!1){let me=!1;for(let we=0,He=et.length;we<He;we++){const qe=et[we],{object:Le,geometry:Vt,material:ze,group:Ue}=qe;if(ze.side===Da&&Le.layers.test(ot.layers)){const In=ze.side;ze.side=oi,ze.needsUpdate=!0,Bl(Le,ht,ot,Vt,ze,Ue),ze.side=In,ze.needsUpdate=!0,me=!0}}me===!0&&(J.updateMultisampleRenderTarget(Lt),J.updateRenderTargetMipmap(Lt))}A.setRenderTarget(Ft,Kt,ee),A.setClearColor(At,G),ne!==void 0&&(ot.viewport=ne),A.toneMapping=ae}function As(C,et,ht){const ot=et.isScene===!0?et.overrideMaterial:null;for(let nt=0,Lt=C.length;nt<Lt;nt++){const Xt=C[nt],{object:Ft,geometry:Kt,group:ee}=Xt;let ae=Xt.material;ae.allowOverride===!0&&ot!==null&&(ae=ot),Ft.layers.test(ht.layers)&&Bl(Ft,et,ht,Kt,ae,ee)}}function Bl(C,et,ht,ot,nt,Lt){C.onBeforeRender(A,et,ht,ot,nt,Lt),C.modelViewMatrix.multiplyMatrices(ht.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),nt.onBeforeRender(A,et,ht,ot,C,Lt),nt.transparent===!0&&nt.side===Da&&nt.forceSinglePass===!1?(nt.side=oi,nt.needsUpdate=!0,A.renderBufferDirect(ht,et,ot,nt,C,Lt),nt.side=Ms,nt.needsUpdate=!0,A.renderBufferDirect(ht,et,ot,nt,C,Lt),nt.side=Da):A.renderBufferDirect(ht,et,ot,nt,C,Lt),C.onAfterRender(A,et,ht,ot,nt,Lt)}function Cs(C,et,ht){et.isScene!==!0&&(et=le);const ot=b.get(C),nt=I.state.lights,Lt=I.state.shadowsArray,Xt=nt.state.version,Ft=jt.getParameters(C,nt.state,Lt,et,ht),Kt=jt.getProgramCacheKey(Ft);let ee=ot.programs;ot.environment=C.isMeshStandardMaterial?et.environment:null,ot.fog=et.fog,ot.envMap=(C.isMeshStandardMaterial?Mt:_t).get(C.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&C.envMap===null?et.environmentRotation:C.envMapRotation,ee===void 0&&(C.addEventListener("dispose",tn),ee=new Map,ot.programs=ee);let ae=ee.get(Kt);if(ae!==void 0){if(ot.currentProgram===ae&&ot.lightsStateVersion===Xt)return Ba(C,Ft),ae}else Ft.uniforms=jt.getUniforms(C),C.onBeforeCompile(Ft,A),ae=jt.acquireProgram(Ft,Kt),ee.set(Kt,ae),ot.uniforms=Ft.uniforms;const ne=ot.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ne.clippingPlanes=Zt.uniform),Ba(C,Ft),ot.needsLights=Gl(C),ot.lightsStateVersion=Xt,ot.needsLights&&(ne.ambientLightColor.value=nt.state.ambient,ne.lightProbe.value=nt.state.probe,ne.directionalLights.value=nt.state.directional,ne.directionalLightShadows.value=nt.state.directionalShadow,ne.spotLights.value=nt.state.spot,ne.spotLightShadows.value=nt.state.spotShadow,ne.rectAreaLights.value=nt.state.rectArea,ne.ltc_1.value=nt.state.rectAreaLTC1,ne.ltc_2.value=nt.state.rectAreaLTC2,ne.pointLights.value=nt.state.point,ne.pointLightShadows.value=nt.state.pointShadow,ne.hemisphereLights.value=nt.state.hemi,ne.directionalShadowMap.value=nt.state.directionalShadowMap,ne.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,ne.spotShadowMap.value=nt.state.spotShadowMap,ne.spotLightMatrix.value=nt.state.spotLightMatrix,ne.spotLightMap.value=nt.state.spotLightMap,ne.pointShadowMap.value=nt.state.pointShadowMap,ne.pointShadowMatrix.value=nt.state.pointShadowMatrix),ot.currentProgram=ae,ot.uniformsList=null,ae}function ur(C){if(C.uniformsList===null){const et=C.currentProgram.getUniforms();C.uniformsList=Ou.seqWithValue(et.seq,C.uniforms)}return C.uniformsList}function Ba(C,et){const ht=b.get(C);ht.outputColorSpace=et.outputColorSpace,ht.batching=et.batching,ht.batchingColor=et.batchingColor,ht.instancing=et.instancing,ht.instancingColor=et.instancingColor,ht.instancingMorph=et.instancingMorph,ht.skinning=et.skinning,ht.morphTargets=et.morphTargets,ht.morphNormals=et.morphNormals,ht.morphColors=et.morphColors,ht.morphTargetsCount=et.morphTargetsCount,ht.numClippingPlanes=et.numClippingPlanes,ht.numIntersection=et.numClipIntersection,ht.vertexAlphas=et.vertexAlphas,ht.vertexTangents=et.vertexTangents,ht.toneMapping=et.toneMapping}function Vu(C,et,ht,ot,nt){et.isScene!==!0&&(et=le),J.resetTextureUnits();const Lt=et.fog,Xt=ot.isMeshStandardMaterial?et.environment:null,Ft=it===null?A.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:yo,Kt=(ot.isMeshStandardMaterial?Mt:_t).get(ot.envMap||Xt),ee=ot.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,ae=!!ht.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),ne=!!ht.morphAttributes.position,me=!!ht.morphAttributes.normal,we=!!ht.morphAttributes.color;let He=sa;ot.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(He=A.toneMapping);const qe=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,Le=qe!==void 0?qe.length:0,Vt=b.get(ot),ze=I.state.lights;if(yt===!0&&(St===!0||C!==dt)){const ce=C===dt&&ot.id===pt;Zt.setState(ot,C,ce)}let Ue=!1;ot.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==ze.state.version||Vt.outputColorSpace!==Ft||nt.isBatchedMesh&&Vt.batching===!1||!nt.isBatchedMesh&&Vt.batching===!0||nt.isBatchedMesh&&Vt.batchingColor===!0&&nt.colorTexture===null||nt.isBatchedMesh&&Vt.batchingColor===!1&&nt.colorTexture!==null||nt.isInstancedMesh&&Vt.instancing===!1||!nt.isInstancedMesh&&Vt.instancing===!0||nt.isSkinnedMesh&&Vt.skinning===!1||!nt.isSkinnedMesh&&Vt.skinning===!0||nt.isInstancedMesh&&Vt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&Vt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&Vt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&Vt.instancingMorph===!1&&nt.morphTexture!==null||Vt.envMap!==Kt||ot.fog===!0&&Vt.fog!==Lt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Zt.numPlanes||Vt.numIntersection!==Zt.numIntersection)||Vt.vertexAlphas!==ee||Vt.vertexTangents!==ae||Vt.morphTargets!==ne||Vt.morphNormals!==me||Vt.morphColors!==we||Vt.toneMapping!==He||Vt.morphTargetsCount!==Le)&&(Ue=!0):(Ue=!0,Vt.__version=ot.version);let In=Vt.currentProgram;Ue===!0&&(In=Cs(ot,et,nt));let Qn=!1,hn=!1,ws=!1;const Ge=In.getUniforms(),Cn=Vt.uniforms;if(Wt.useProgram(In.program)&&(Qn=!0,hn=!0,ws=!0),ot.id!==pt&&(pt=ot.id,hn=!0),Qn||dt!==C){Wt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ge.setValue(V,"projectionMatrix",C.projectionMatrix),Ge.setValue(V,"viewMatrix",C.matrixWorldInverse);const wn=Ge.map.cameraPosition;wn!==void 0&&wn.setValue(V,te.setFromMatrixPosition(C.matrixWorld)),Te.logarithmicDepthBuffer&&Ge.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Ge.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),dt!==C&&(dt=C,hn=!0,ws=!0)}if(Vt.needsLights&&(ze.state.directionalShadowMap.length>0&&Ge.setValue(V,"directionalShadowMap",ze.state.directionalShadowMap,J),ze.state.spotShadowMap.length>0&&Ge.setValue(V,"spotShadowMap",ze.state.spotShadowMap,J),ze.state.pointShadowMap.length>0&&Ge.setValue(V,"pointShadowMap",ze.state.pointShadowMap,J)),nt.isSkinnedMesh){Ge.setOptional(V,nt,"bindMatrix"),Ge.setOptional(V,nt,"bindMatrixInverse");const ce=nt.skeleton;ce&&(ce.boneTexture===null&&ce.computeBoneTexture(),Ge.setValue(V,"boneTexture",ce.boneTexture,J))}nt.isBatchedMesh&&(Ge.setOptional(V,nt,"batchingTexture"),Ge.setValue(V,"batchingTexture",nt._matricesTexture,J),Ge.setOptional(V,nt,"batchingIdTexture"),Ge.setValue(V,"batchingIdTexture",nt._indirectTexture,J),Ge.setOptional(V,nt,"batchingColorTexture"),nt._colorsTexture!==null&&Ge.setValue(V,"batchingColorTexture",nt._colorsTexture,J));const Jn=ht.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0)&&ve.update(nt,ht,In),(hn||Vt.receiveShadow!==nt.receiveShadow)&&(Vt.receiveShadow=nt.receiveShadow,Ge.setValue(V,"receiveShadow",nt.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Cn.envMap.value=Kt,Cn.flipEnvMap.value=Kt.isCubeTexture&&Kt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&et.environment!==null&&(Cn.envMapIntensity.value=et.environmentIntensity),Cn.dfgLUT!==void 0&&(Cn.dfgLUT.value=Ow()),hn&&(Ge.setValue(V,"toneMappingExposure",A.toneMappingExposure),Vt.needsLights&&Hl(Cn,ws),Lt&&ot.fog===!0&&se.refreshFogUniforms(Cn,Lt),se.refreshMaterialUniforms(Cn,ot,Rt,Et,I.state.transmissionRenderTarget[C.id]),Ou.upload(V,ur(Vt),Cn,J)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Ou.upload(V,ur(Vt),Cn,J),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Ge.setValue(V,"center",nt.center),Ge.setValue(V,"modelViewMatrix",nt.modelViewMatrix),Ge.setValue(V,"normalMatrix",nt.normalMatrix),Ge.setValue(V,"modelMatrix",nt.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const ce=ot.uniformsGroups;for(let wn=0,Ha=ce.length;wn<Ha;wn++){const yi=ce[wn];Ct.update(yi,In),Ct.bind(yi,In)}}return In}function Hl(C,et){C.ambientLightColor.needsUpdate=et,C.lightProbe.needsUpdate=et,C.directionalLights.needsUpdate=et,C.directionalLightShadows.needsUpdate=et,C.pointLights.needsUpdate=et,C.pointLightShadows.needsUpdate=et,C.spotLights.needsUpdate=et,C.spotLightShadows.needsUpdate=et,C.rectAreaLights.needsUpdate=et,C.hemisphereLights.needsUpdate=et}function Gl(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return st},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(C,et,ht){const ot=b.get(C);ot.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),b.get(C.texture).__webglTexture=et,b.get(C.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:ht,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,et){const ht=b.get(C);ht.__webglFramebuffer=et,ht.__useDefaultFramebuffer=et===void 0};const Vl=V.createFramebuffer();this.setRenderTarget=function(C,et=0,ht=0){it=C,k=et,st=ht;let ot=null,nt=!1,Lt=!1;if(C){const Ft=b.get(C);if(Ft.__useDefaultFramebuffer!==void 0){Wt.bindFramebuffer(V.FRAMEBUFFER,Ft.__webglFramebuffer),Z.copy(C.viewport),K.copy(C.scissor),ft=C.scissorTest,Wt.viewport(Z),Wt.scissor(K),Wt.setScissorTest(ft),pt=-1;return}else if(Ft.__webglFramebuffer===void 0)J.setupRenderTarget(C);else if(Ft.__hasExternalTextures)J.rebindTextures(C,b.get(C.texture).__webglTexture,b.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ae=C.depthTexture;if(Ft.__boundDepthTexture!==ae){if(ae!==null&&b.has(ae)&&(C.width!==ae.image.width||C.height!==ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(C)}}const Kt=C.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Lt=!0);const ee=b.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ee[et])?ot=ee[et][ht]:ot=ee[et],nt=!0):C.samples>0&&J.useMultisampledRTT(C)===!1?ot=b.get(C).__webglMultisampledFramebuffer:Array.isArray(ee)?ot=ee[ht]:ot=ee,Z.copy(C.viewport),K.copy(C.scissor),ft=C.scissorTest}else Z.copy(Y).multiplyScalar(Rt).floor(),K.copy(W).multiplyScalar(Rt).floor(),ft=mt;if(ht!==0&&(ot=Vl),Wt.bindFramebuffer(V.FRAMEBUFFER,ot)&&Wt.drawBuffers(C,ot),Wt.viewport(Z),Wt.scissor(K),Wt.setScissorTest(ft),nt){const Ft=b.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ft.__webglTexture,ht)}else if(Lt){const Ft=et;for(let Kt=0;Kt<C.textures.length;Kt++){const ee=b.get(C.textures[Kt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Kt,ee.__webglTexture,ht,Ft)}}else if(C!==null&&ht!==0){const Ft=b.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ft.__webglTexture,ht)}pt=-1},this.readRenderTargetPixels=function(C,et,ht,ot,nt,Lt,Xt,Ft=0){if(!(C&&C.isWebGLRenderTarget)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Kt=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Xt!==void 0&&(Kt=Kt[Xt]),Kt){Wt.bindFramebuffer(V.FRAMEBUFFER,Kt);try{const ee=C.textures[Ft],ae=ee.format,ne=ee.type;if(!Te.textureFormatReadable(ae)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Te.textureTypeReadable(ne)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}et>=0&&et<=C.width-ot&&ht>=0&&ht<=C.height-nt&&(C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ft),V.readPixels(et,ht,ot,nt,Dt.convert(ae),Dt.convert(ne),Lt))}finally{const ee=it!==null?b.get(it).__webglFramebuffer:null;Wt.bindFramebuffer(V.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(C,et,ht,ot,nt,Lt,Xt,Ft=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Kt=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Xt!==void 0&&(Kt=Kt[Xt]),Kt)if(et>=0&&et<=C.width-ot&&ht>=0&&ht<=C.height-nt){Wt.bindFramebuffer(V.FRAMEBUFFER,Kt);const ee=C.textures[Ft],ae=ee.format,ne=ee.type;if(!Te.textureFormatReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Te.textureTypeReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const me=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,me),V.bufferData(V.PIXEL_PACK_BUFFER,Lt.byteLength,V.STREAM_READ),C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ft),V.readPixels(et,ht,ot,nt,Dt.convert(ae),Dt.convert(ne),0);const we=it!==null?b.get(it).__webglFramebuffer:null;Wt.bindFramebuffer(V.FRAMEBUFFER,we);const He=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Ib(V,He,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,me),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Lt),V.deleteBuffer(me),V.deleteSync(He),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,et=null,ht=0){const ot=Math.pow(2,-ht),nt=Math.floor(C.image.width*ot),Lt=Math.floor(C.image.height*ot),Xt=et!==null?et.x:0,Ft=et!==null?et.y:0;J.setTexture2D(C,0),V.copyTexSubImage2D(V.TEXTURE_2D,ht,0,0,Xt,Ft,nt,Lt),Wt.unbindTexture()};const Ao=V.createFramebuffer(),Co=V.createFramebuffer();this.copyTextureToTexture=function(C,et,ht=null,ot=null,nt=0,Lt=null){Lt===null&&(nt!==0?(Nl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Lt=nt,nt=0):Lt=0);let Xt,Ft,Kt,ee,ae,ne,me,we,He;const qe=C.isCompressedTexture?C.mipmaps[Lt]:C.image;if(ht!==null)Xt=ht.max.x-ht.min.x,Ft=ht.max.y-ht.min.y,Kt=ht.isBox3?ht.max.z-ht.min.z:1,ee=ht.min.x,ae=ht.min.y,ne=ht.isBox3?ht.min.z:0;else{const Jn=Math.pow(2,-nt);Xt=Math.floor(qe.width*Jn),Ft=Math.floor(qe.height*Jn),C.isDataArrayTexture?Kt=qe.depth:C.isData3DTexture?Kt=Math.floor(qe.depth*Jn):Kt=1,ee=0,ae=0,ne=0}ot!==null?(me=ot.x,we=ot.y,He=ot.z):(me=0,we=0,He=0);const Le=Dt.convert(et.format),Vt=Dt.convert(et.type);let ze;et.isData3DTexture?(J.setTexture3D(et,0),ze=V.TEXTURE_3D):et.isDataArrayTexture||et.isCompressedArrayTexture?(J.setTexture2DArray(et,0),ze=V.TEXTURE_2D_ARRAY):(J.setTexture2D(et,0),ze=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,et.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,et.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,et.unpackAlignment);const Ue=V.getParameter(V.UNPACK_ROW_LENGTH),In=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Qn=V.getParameter(V.UNPACK_SKIP_PIXELS),hn=V.getParameter(V.UNPACK_SKIP_ROWS),ws=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,qe.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,qe.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ee),V.pixelStorei(V.UNPACK_SKIP_ROWS,ae),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ne);const Ge=C.isDataArrayTexture||C.isData3DTexture,Cn=et.isDataArrayTexture||et.isData3DTexture;if(C.isDepthTexture){const Jn=b.get(C),ce=b.get(et),wn=b.get(Jn.__renderTarget),Ha=b.get(ce.__renderTarget);Wt.bindFramebuffer(V.READ_FRAMEBUFFER,wn.__webglFramebuffer),Wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ha.__webglFramebuffer);for(let yi=0;yi<Kt;yi++)Ge&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,b.get(C).__webglTexture,nt,ne+yi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,b.get(et).__webglTexture,Lt,He+yi)),V.blitFramebuffer(ee,ae,Xt,Ft,me,we,Xt,Ft,V.DEPTH_BUFFER_BIT,V.NEAREST);Wt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(nt!==0||C.isRenderTargetTexture||b.has(C)){const Jn=b.get(C),ce=b.get(et);Wt.bindFramebuffer(V.READ_FRAMEBUFFER,Ao),Wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Co);for(let wn=0;wn<Kt;wn++)Ge?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Jn.__webglTexture,nt,ne+wn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Jn.__webglTexture,nt),Cn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ce.__webglTexture,Lt,He+wn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ce.__webglTexture,Lt),nt!==0?V.blitFramebuffer(ee,ae,Xt,Ft,me,we,Xt,Ft,V.COLOR_BUFFER_BIT,V.NEAREST):Cn?V.copyTexSubImage3D(ze,Lt,me,we,He+wn,ee,ae,Xt,Ft):V.copyTexSubImage2D(ze,Lt,me,we,ee,ae,Xt,Ft);Wt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Cn?C.isDataTexture||C.isData3DTexture?V.texSubImage3D(ze,Lt,me,we,He,Xt,Ft,Kt,Le,Vt,qe.data):et.isCompressedArrayTexture?V.compressedTexSubImage3D(ze,Lt,me,we,He,Xt,Ft,Kt,Le,qe.data):V.texSubImage3D(ze,Lt,me,we,He,Xt,Ft,Kt,Le,Vt,qe):C.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Lt,me,we,Xt,Ft,Le,Vt,qe.data):C.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Lt,me,we,qe.width,qe.height,Le,qe.data):V.texSubImage2D(V.TEXTURE_2D,Lt,me,we,Xt,Ft,Le,Vt,qe);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ue),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,In),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Qn),V.pixelStorei(V.UNPACK_SKIP_ROWS,hn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ws),Lt===0&&et.generateMipmaps&&V.generateMipmap(ze),Wt.unbindTexture()},this.initRenderTarget=function(C){b.get(C).__webglFramebuffer===void 0&&J.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?J.setTextureCube(C,0):C.isData3DTexture?J.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?J.setTexture2DArray(C,0):J.setTexture2D(C,0),Wt.unbindTexture()},this.resetState=function(){k=0,st=0,it=null,Wt.reset(),Gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return aa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ie._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ie._getUnpackColorSpace()}}const zx={type:"change"},vm={type:"start"},US={type:"end"},wu=new dm,Fx=new xs,Iw=Math.cos(70*qp.DEG2RAD),xn=new ct,ai=2*Math.PI,Ze={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Qd=1e-6;class zw extends BE{constructor(e,i=null){super(e,i),this.state=Ze.NONE,this.target=new ct,this.cursor=new ct,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:mo.ROTATE,MIDDLE:mo.DOLLY,RIGHT:mo.PAN},this.touches={ONE:ho.ROTATE,TWO:ho.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new ct,this._lastQuaternion=new lr,this._lastTargetPosition=new ct,this._quat=new lr().setFromUnitVectors(e.up,new ct(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new hx,this._sphericalDelta=new hx,this._scale=1,this._panOffset=new ct,this._rotateStart=new pe,this._rotateEnd=new pe,this._rotateDelta=new pe,this._panStart=new pe,this._panEnd=new pe,this._panDelta=new pe,this._dollyStart=new pe,this._dollyEnd=new pe,this._dollyDelta=new pe,this._dollyDirection=new ct,this._mouse=new pe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Bw.bind(this),this._onPointerDown=Fw.bind(this),this._onPointerUp=Hw.bind(this),this._onContextMenu=qw.bind(this),this._onMouseWheel=kw.bind(this),this._onKeyDown=Xw.bind(this),this._onTouchStart=jw.bind(this),this._onTouchMove=Yw.bind(this),this._onMouseDown=Gw.bind(this),this._onMouseMove=Vw.bind(this),this._interceptControlDown=Ww.bind(this),this._interceptControlUp=Zw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(zx),this.update(),this.state=Ze.NONE}update(e=null){const i=this.object.position;xn.copy(i).sub(this.target),xn.applyQuaternion(this._quat),this._spherical.setFromVector3(xn),this.autoRotate&&this.state===Ze.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=ai:s>Math.PI&&(s-=ai),l<-Math.PI?l+=ai:l>Math.PI&&(l-=ai),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let f=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),f=h!=this._spherical.radius}if(xn.setFromSpherical(this._spherical),xn.applyQuaternion(this._quatInverse),i.copy(this.target).add(xn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=xn.length();h=this._clampDistance(d*this._scale);const p=d-h;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),f=!!p}else if(this.object.isOrthographicCamera){const d=new ct(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),f=p!==this.object.zoom;const g=new ct(this._mouse.x,this._mouse.y,0);g.unproject(this.object),this.object.position.sub(g).add(d),this.object.updateMatrixWorld(),h=xn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(wu.origin.copy(this.object.position),wu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(wu.direction))<Iw?this.object.lookAt(this.target):(Fx.setFromNormalAndCoplanarPoint(this.object.up,this.target),wu.intersectPlane(Fx,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),f=!0)}return this._scale=1,this._performCursorZoom=!1,f||this._lastPosition.distanceToSquared(this.object.position)>Qd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Qd||this._lastTargetPosition.distanceToSquared(this.target)>Qd?(this.dispatchEvent(zx),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ai/60*this.autoRotateSpeed*e:ai/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){xn.setFromMatrixColumn(i,0),xn.multiplyScalar(-e),this._panOffset.add(xn)}_panUp(e,i){this.screenSpacePanning===!0?xn.setFromMatrixColumn(i,1):(xn.setFromMatrixColumn(i,0),xn.crossVectors(this.object.up,xn)),xn.multiplyScalar(e),this._panOffset.add(xn)}_pan(e,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;xn.copy(l).sub(this.target);let f=xn.length();f*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*f/s.clientHeight,this.object.matrix),this._panUp(2*i*f/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=e-s.left,f=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(f/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ai*this._rotateDelta.x/i.clientHeight),this._rotateUp(ai*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ai*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ai*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ai*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ai*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,f=Math.sqrt(s*s+l*l);this._dollyStart.set(0,f)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),l=.5*(e.pageX+s.x),f=.5*(e.pageY+s.y);this._rotateEnd.set(l,f)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ai*this._rotateDelta.x/i.clientHeight),this._rotateUp(ai*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,f=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,f),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(e.pageX+i.x)*.5,d=(e.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new pe,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function Fw(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function Bw(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function Hw(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(US),this.state=Ze.NONE;break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function Gw(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case mo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=Ze.DOLLY;break;case mo.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ze.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ze.ROTATE}break;case mo.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ze.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ze.PAN}break;default:this.state=Ze.NONE}this.state!==Ze.NONE&&this.dispatchEvent(vm)}function Vw(o){switch(this.state){case Ze.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case Ze.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case Ze.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function kw(o){this.enabled===!1||this.enableZoom===!1||this.state!==Ze.NONE||(o.preventDefault(),this.dispatchEvent(vm),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(US))}function Xw(o){this.enabled!==!1&&this._handleKeyDown(o)}function jw(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case ho.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=Ze.TOUCH_ROTATE;break;case ho.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=Ze.TOUCH_PAN;break;default:this.state=Ze.NONE}break;case 2:switch(this.touches.TWO){case ho.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=Ze.TOUCH_DOLLY_PAN;break;case ho.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=Ze.TOUCH_DOLLY_ROTATE;break;default:this.state=Ze.NONE}break;default:this.state=Ze.NONE}this.state!==Ze.NONE&&this.dispatchEvent(vm)}function Yw(o){switch(this._trackPointer(o),this.state){case Ze.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case Ze.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case Ze.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case Ze.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=Ze.NONE}}function qw(o){this.enabled!==!1&&o.preventDefault()}function Ww(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Zw(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const wl=new Map;function Bx(o,e,i,s,l){const f=`${o}_${e}_${l?`${i.main}_${i.sub||""}_${i.altGr||""}`:"blank"}`;if(wl.has(f))return wl.get(f);const h=512,d=document.createElement("canvas");d.width=h,d.height=h;const p=d.getContext("2d");if(!p)return new ox(d);p.fillStyle=o,p.fillRect(0,0,h,h);const g=p.createRadialGradient(h/2,h/2,20,h/2,h/2,h*.7);if(g.addColorStop(0,"rgba(255, 255, 255, 0.08)"),g.addColorStop(.7,"rgba(0, 0, 0, 0.0)"),g.addColorStop(1,"rgba(0, 0, 0, 0.18)"),p.fillStyle=g,p.fillRect(0,0,h,h),l){p.fillStyle=e,p.textBaseline="middle";const m=i.main||s,x=i.sub,y=i.altGr;if(m.length>2){p.textAlign="center";const R=m.length>7?40:m.length>4?50:64;p.font=`600 ${R}px "JetBrains Mono", Inter, sans-serif`,p.fillText(m,h/2,h/2)}else x?(p.textAlign="left",p.font='600 58px "JetBrains Mono", Inter, sans-serif',p.fillText(x,64,120),p.font='700 78px "JetBrains Mono", Inter, sans-serif',p.fillText(m,64,340),y&&(p.fillStyle=e,p.globalAlpha=.85,p.textAlign="right",p.font='600 58px "JetBrains Mono", Inter, sans-serif',p.fillText(y,h-64,340),p.globalAlpha=1)):(p.textAlign="left",p.font='700 95px "JetBrains Mono", Inter, sans-serif',p.fillText(m,70,150),y&&(p.fillStyle=e,p.globalAlpha=.85,p.textAlign="right",p.font='600 65px "JetBrains Mono", Inter, sans-serif',p.fillText(y,h-64,340),p.globalAlpha=1))}const _=new ox(d);return _.colorSpace=ri,_.needsUpdate=!0,wl.set(f,_),_}function Hx(){wl.forEach(o=>o.dispose()),wl.clear()}let uo=null;function Kw(){if(typeof window>"u")return null;if(!uo){const o=window.AudioContext||window.webkitAudioContext;o&&(uo=new o)}return uo&&uo.state==="suspended"&&uo.resume(),uo}function Qw(o=!1,e="cherry-red"){try{const i=Kw();if(!i)return;const s=i.currentTime,l=i.createOscillator(),f=i.createGain(),h=o?140:e==="cherry-blue"?320:220;l.type=o?"triangle":"sine",l.frequency.setValueAtTime(h*(.95+Math.random()*.1),s),l.frequency.exponentialRampToValueAtTime(o?45:70,s+.08),f.gain.setValueAtTime(o?.35:.25,s),f.gain.exponentialRampToValueAtTime(.001,s+(o?.12:.07)),l.connect(f),f.connect(i.destination),l.start(s),l.stop(s+(o?.13:.08));const d=i.sampleRate*.03,p=i.createBuffer(1,d,i.sampleRate),g=p.getChannelData(0);for(let E=0;E<d;E++)g[E]=Math.random()*2-1;const _=i.createBufferSource();_.buffer=p;const m=i.createBiquadFilter();m.type=e==="cherry-blue"?"highpass":"bandpass",m.frequency.value=e==="cherry-blue"?3200:o?1200:2100,m.Q.value=e==="cherry-blue"?4:2;const x=i.createGain(),y=e==="cherry-blue"?.28:o?.18:.14;x.gain.setValueAtTime(y,s),x.gain.exponentialRampToValueAtTime(.001,s+.025),_.connect(m),m.connect(x),x.connect(i.destination),_.start(s),_.stop(s+.03)}catch{}}class Jw{constructor(e,i,s={}){sn(this,"container");sn(this,"scene");sn(this,"camera");sn(this,"renderer");sn(this,"controls");sn(this,"keyboardGroup");sn(this,"keycapMeshes",new Map);sn(this,"keycapGroups",new Map);sn(this,"keyDefinitions",new Map);sn(this,"hoveredMesh",null);sn(this,"pressedKeys",new Set);sn(this,"raycaster");sn(this,"mouse");sn(this,"animationFrameId",null);sn(this,"clock");sn(this,"currentState");sn(this,"callbacks");sn(this,"rgbLights",[]);sn(this,"pointerStartX",0);sn(this,"pointerStartY",0);sn(this,"pointerStartTime",0);sn(this,"onWindowResize",()=>{if(!this.container)return;const e=this.container.clientWidth,i=this.container.clientHeight;e===0||i===0||(this.camera.aspect=e/i,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,i),this.adjustCameraForScreen())});this.container=e,this.currentState=i,this.callbacks=s,this.scene=new ME,this.scene.background=new ye("#0c0f17");const l=e.clientWidth||800,f=e.clientHeight||600;this.camera=new vi(38,l/f,.1,100),this.camera.position.set(0,16,20),this.renderer=new Pw({antialias:!0,alpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0}),this.renderer.setSize(l,f),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Jx,this.renderer.toneMapping=em,this.renderer.toneMappingExposure=1.1,this.renderer.outputColorSpace=ri,e.appendChild(this.renderer.domElement),this.controls=new zw(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.maxPolarAngle=Math.PI/2-.05,this.controls.minDistance=6,this.controls.maxDistance=45,this.controls.target.set(0,0,0),this.keyboardGroup=new po,this.scene.add(this.keyboardGroup),this.raycaster=new FE,this.mouse=new pe(-999,-999),this.clock=new zE,this.setupLighting(),this.setupFloor(),this.buildKeyboard(),this.bindEvents(),this.animate=this.animate.bind(this),this.animate()}setupLighting(){const e=new PE(16777215,.65);this.scene.add(e);const i=new Xd(16775917,2);i.position.set(10,18,12),i.castShadow=!0,i.shadow.mapSize.width=2048,i.shadow.mapSize.height=2048,i.shadow.camera.near=.5,i.shadow.camera.far=50,i.shadow.camera.left=-15,i.shadow.camera.right=15,i.shadow.camera.top=15,i.shadow.camera.bottom=-15,i.shadow.bias=-2e-4,i.shadow.radius=3,this.scene.add(i);const s=new Xd(9483470,.9);s.position.set(-14,12,10),this.scene.add(s);const l=new Xd(13621468,1.2);l.position.set(0,12,-16),this.scene.add(l);for(let f=0;f<4;f++){const h=new LE(61695,0,8);h.position.set((f-1.5)*4,.2,0),this.keyboardGroup.add(h),this.rgbLights.push(h)}}setupFloor(){const e=new zl(80,80),i=new si({color:592914,roughness:.85,metalness:.1}),s=new cn(e,i);s.rotation.x=-Math.PI/2,s.position.y=-.05,s.receiveShadow=!0,this.scene.add(s);const l=new Kn(26,.08,14),f=new si({color:1251106,roughness:.9,metalness:.05}),h=new cn(l,f);h.position.set(0,-.01,.5),h.receiveShadow=!0,this.scene.add(h);const d=new Kn(26.15,.04,14.15),p=new si({color:2370877,roughness:.7}),g=new cn(d,p);g.position.set(0,-.03,.5),this.scene.add(g)}buildKeyboard(){for(;this.keyboardGroup.children.length>0;){const _=this.keyboardGroup.children[0];this.keyboardGroup.remove(_),_ instanceof cn&&(_.geometry.dispose(),Array.isArray(_.material)?_.material.forEach(m=>m.dispose()):_.material.dispose())}this.keycapMeshes.clear(),this.keycapGroups.clear(),this.keyDefinitions.clear(),Hx(),this.rgbLights.forEach(_=>this.keyboardGroup.add(_));const e=nr(this.currentState.size,this.currentState.layout),i=tp(e);e.forEach(_=>this.keyDefinitions.set(_.id,_));const s=-i.width/2,l=-i.height/2;this.buildCaseAndPlate(i);const f=$d.find(_=>_.id===this.currentState.switchType)||$d[0],h=new Kn(.24,.32,.24),d=new si({color:f.stemColor,roughness:.35}),p=new Kn(.74,.25,.74),g=new si({color:f.housingColor,roughness:.5});e.forEach(_=>{const m=new po,x=_.x+_.w/2+s,y=_.y+_.h/2+l;m.position.set(x,.55,y);const R=new cn(p,g);R.position.y=.12,R.castShadow=!0,m.add(R);const M=new cn(h,d);M.position.y=.32,m.add(M);const S=this.createKeycapMesh(_);S.position.y=.45,S.userData={keyId:_.id},m.add(S),this.keycapMeshes.set(_.id,S),this.keycapGroups.set(_.id,m),this.keyboardGroup.add(m)}),this.keyboardGroup.rotation.x=qp.degToRad(5.5),this.adjustCameraForScreen(i)}adjustCameraForScreen(e){const i=e||tp(nr(this.currentState.size,this.currentState.layout)),s=this.container.clientWidth||800,l=this.container.clientHeight||600,f=s/l,h=s<768||f<1,d=i.width+1.6,p=i.height+1.6;if(h){const g=qp.degToRad(this.camera.fov),_=2*Math.atan(Math.tan(g/2)*f),m=d/2/Math.tan(_/2),x=p/2/Math.tan(g/2),y=Math.max(m,x)*1.32;this.camera.position.set(0,y*.9,y*.85),this.controls.minDistance=4,this.controls.maxDistance=y*2.5}else this.camera.position.set(0,16,20),this.controls.minDistance=6,this.controls.maxDistance=45;this.controls.target.set(0,0,0),this.controls.update()}createKeycapMesh(e){const i=e.shape==="iso_enter",s=Math.max(.7,e.w-.05),l=Math.max(.7,e.h-.05),f=.52,h=this.currentState.keyColors[e.id]||"#d1d5db",d=this.currentState.legendColors[e.id]||"#1f2937",p=e.legends[this.currentState.layout],g=Bx(h,d,p,e.label,this.currentState.showLegends),_=new si({color:new ye(h),roughness:.48,metalness:.02,wireframe:this.currentState.wireframe}),m=new si({map:g,roughness:.42,metalness:.02,wireframe:this.currentState.wireframe});let x;i?x=this.createIsoEnterGeometry():x=this.createTaperedKeycapGeometry(s,l,f);const y=[_,_,m,_,_,_],E=new cn(x,y);return E.castShadow=!0,E.receiveShadow=!0,E}createTaperedKeycapGeometry(e,i,s){const f=Math.max(.4,e-.14),h=Math.max(.4,i-.14),d=e/2,p=i/2,g=f/2,_=h/2,m=new Kn(e,s,i,1,1,1),x=m.attributes.position;for(let y=0;y<x.count;y++)if(x.getY(y)>0){const R=x.getX(y),M=x.getZ(y);x.setX(y,R/d*g),x.setZ(y,M/p*_)}return m.computeVertexNormals(),m}createIsoEnterGeometry(){const e=new Kn(1.22,.52,1.95),i=e.attributes.position;for(let s=0;s<i.count;s++)if(i.getY(s)>0){const f=i.getX(s),h=i.getZ(s);i.setX(s,f*.88),i.setZ(s,h*.92)}return e.computeVertexNormals(),e}buildCaseAndPlate(e){const l=e.width+.9,f=e.height+.45*2,h=1,d=new ye(this.currentState.caseColor);let p;switch(this.currentState.caseMaterial){case"aluminum":p=new si({color:d,metalness:.88,roughness:.28});break;case"polycarbonate":p=new RE({color:d,roughness:.22,transmission:.65,thickness:1.2,transparent:!0,opacity:.92});break;case"e-white":p=new si({color:d,metalness:.05,roughness:.25});break;case"retro-beige":p=new si({color:d,metalness:.05,roughness:.65});break;case"matte":default:p=new si({color:d,metalness:.15,roughness:.6});break}const g=new Kn(l,h,f),_=new cn(g,p);_.position.set(0,0,0),_.castShadow=!0,_.receiveShadow=!0,this.keyboardGroup.add(_);const m=new Kn(l+.12,.35,f+.12),x=new cn(m,p);x.position.set(0,.45,0),x.castShadow=!0,this.keyboardGroup.add(x);const y=new si({color:new ye(this.currentState.plateColor),metalness:.75,roughness:.35}),E=new Kn(e.width+.1,.08,e.height+.1),R=new cn(E,y);R.position.set(0,.52,0),R.receiveShadow=!0,this.keyboardGroup.add(R);const M=new Kn(.9,.3,.2),S=new si({color:328965,roughness:.9}),P=new cn(M,S);P.position.set(0,.35,-f/2),this.keyboardGroup.add(P)}updateKeyColor(e,i,s){const l=this.keycapMeshes.get(e),f=this.keyDefinitions.get(e);if(!l||!f)return;const h=s||this.currentState.legendColors[e]||"#1f2937",d=f.legends[this.currentState.layout],p=Bx(i,h,d,f.label,this.currentState.showLegends);if(Array.isArray(l.material)){const g=l.material[2];g.map=p,g.needsUpdate=!0;const _=l.material[0];_.color.set(i),_.needsUpdate=!0}}updateAllKeyColors(e,i){this.currentState.keyColors=e,this.currentState.legendColors=i,this.keyDefinitions.forEach((s,l)=>{const f=e[l]||"#d1d5db",h=i[l]||"#1f2937";this.updateKeyColor(l,f,h)})}updateState(e){const i=e.size&&e.size!==this.currentState.size,s=e.layout&&e.layout!==this.currentState.layout,l=e.switchType&&e.switchType!==this.currentState.switchType,f=e.caseColor&&e.caseColor!==this.currentState.caseColor||e.caseMaterial&&e.caseMaterial!==this.currentState.caseMaterial||e.plateColor&&e.plateColor!==this.currentState.plateColor,h=e.wireframe!==void 0&&e.wireframe!==this.currentState.wireframe,d=e.showLegends!==void 0&&e.showLegends!==this.currentState.showLegends;this.currentState={...this.currentState,...e},i||s||l||f||h||d?this.buildKeyboard():(e.keyColors||e.legendColors)&&this.updateAllKeyColors(this.currentState.keyColors,this.currentState.legendColors)}triggerKeyPress(e){let i=null;if(this.keyDefinitions.has(e))i=e;else for(const[h,d]of this.keyDefinitions.entries())if(d.code&&d.code.toLowerCase()===e.toLowerCase()){i=h;break}if(!i)return;const s=this.keycapGroups.get(i);if(!s)return;this.currentState.soundEnabled&&Qw(i==="space",this.currentState.switchType);const l=.55,f=.38;s.position.y=f,setTimeout(()=>{s.position.y=l},90)}handleTapAt(e,i){var g,_,m,x;const l=this.renderer.domElement.getBoundingClientRect(),f=(e-l.left)/l.width*2-1,h=-((i-l.top)/l.height)*2+1;this.raycaster.setFromCamera(new pe(f,h),this.camera);const d=Array.from(this.keycapMeshes.values()),p=this.raycaster.intersectObjects(d,!0);if(p.length>0){let y=null;for(const E of p)if(E.object instanceof cn&&((g=E.object.userData)!=null&&g.keyId)){y=E.object;break}if(y&&((_=y.userData)!=null&&_.keyId)){const E=y.userData.keyId,R=this.keyDefinitions.get(E);if(R){this.triggerKeyPress(E);const M=this.currentState.keyColors[E]||"#d1d5db";(x=(m=this.callbacks).onKeyClick)==null||x.call(m,R,M)}}}}bindEvents(){const e=this.renderer.domElement,i=h=>{if(h.pointerType==="touch")return;const d=e.getBoundingClientRect();this.mouse.x=(h.clientX-d.left)/d.width*2-1,this.mouse.y=-((h.clientY-d.top)/d.height)*2+1,this.checkHover(h)},s=h=>{this.pointerStartX=h.clientX,this.pointerStartY=h.clientY,this.pointerStartTime=performance.now()},l=h=>{if(h.button!==0&&h.pointerType==="mouse")return;const d=Math.hypot(h.clientX-this.pointerStartX,h.clientY-this.pointerStartY),p=performance.now()-this.pointerStartTime;d<12&&p<350&&this.handleTapAt(h.clientX,h.clientY)},f=h=>{var d,p;((d=document.activeElement)==null?void 0:d.tagName)==="INPUT"||((p=document.activeElement)==null?void 0:p.tagName)==="TEXTAREA"||this.triggerKeyPress(h.code)};e.addEventListener("pointermove",i),e.addEventListener("pointerdown",s),e.addEventListener("pointerup",l),window.addEventListener("keydown",f),window.addEventListener("resize",this.onWindowResize),e._cleanup=()=>{e.removeEventListener("pointermove",i),e.removeEventListener("pointerdown",s),e.removeEventListener("pointerup",l),window.removeEventListener("keydown",f),window.removeEventListener("resize",this.onWindowResize)}}checkHover(e){var h,d,p;this.raycaster.setFromCamera(this.mouse,this.camera);const i=Array.from(this.keycapMeshes.values()),s=this.raycaster.intersectObjects(i,!0);let l=null,f=null;if(s.length>0){for(const g of s)if(g.object instanceof cn&&((h=g.object.userData)!=null&&h.keyId)){l=g.object,f=this.keyDefinitions.get(l.userData.keyId)||null;break}}this.hoveredMesh!==l&&(this.hoveredMesh&&Array.isArray(this.hoveredMesh.material)&&this.hoveredMesh.material[2].emissive.setHex(0),this.hoveredMesh=l,this.hoveredMesh&&Array.isArray(this.hoveredMesh.material)&&this.hoveredMesh.material[2].emissive.setHex(3094080),(p=(d=this.callbacks).onKeyHover)==null||p.call(d,f,e))}animate(){this.animationFrameId=requestAnimationFrame(this.animate);const e=this.clock.getElapsedTime();if(this.currentState.autoRotate?this.keyboardGroup.rotation.y=e*.25:this.keyboardGroup.rotation.y=0,this.currentState.rgbMode==="rainbow")this.rgbLights.forEach((i,s)=>{i.intensity=2.5;const l=(e*.15+s*.25)%1;i.color.setHSL(l,1,.5)});else if(this.currentState.rgbMode==="static"){const i=new ye(this.currentState.rgbColor);this.rgbLights.forEach(s=>{s.intensity=2,s.color.copy(i)})}else if(this.currentState.rgbMode==="pulse"){const i=(Math.sin(e*3)+1)*1.5,s=new ye(this.currentState.rgbColor);this.rgbLights.forEach(l=>{l.intensity=i,l.color.copy(s)})}else this.rgbLights.forEach(i=>{i.intensity=0});this.controls.update(),this.renderer.render(this.scene,this.camera)}captureScreenshot(){return this.renderer.render(this.scene,this.camera),this.renderer.domElement.toDataURL("image/png")}resetCamera(){this.adjustCameraForScreen()}dispose(){this.animationFrameId!==null&&cancelAnimationFrame(this.animationFrameId);const e=this.renderer.domElement;e._cleanup&&e._cleanup(),this.controls.dispose(),this.renderer.dispose(),Hx(),this.container.contains(e)&&this.container.removeChild(e)}}const $w=({state:o,onKeyClick:e,keyboardRef:i})=>{const s=nn.useRef(null),[l,f]=nn.useState(null),[h,d]=nn.useState({x:0,y:0});nn.useEffect(()=>{if(!s.current)return;const _=new Jw(s.current,o,{onKeyClick:e,onKeyHover:(m,x)=>{f(m),x&&d({x:x.clientX,y:x.clientY})}});return i.current=_,()=>{_.dispose(),i.current=null}},[]),nn.useEffect(()=>{i.current&&i.current.updateState(o)},[o]);const p=l?o.keyColors[l.id]||"#d1d5db":"",g=l?l.legends[o.layout]:null;return U.jsxs("div",{className:"relative w-full h-full select-none overflow-hidden",children:[U.jsx("div",{ref:s,className:"w-full h-full cursor-grab active:cursor-grabbing"}),l&&g&&U.jsxs("div",{className:"fixed pointer-events-none z-50 px-3 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-slate-700/80 shadow-2xl flex items-center gap-2.5 text-xs transform -translate-x-1/2 -translate-y-12 transition-all duration-75",style:{left:h.x,top:h.y},children:[U.jsx("div",{className:"w-3.5 h-3.5 rounded-md border border-white/20 shadow-inner flex-shrink-0",style:{backgroundColor:p}}),U.jsxs("div",{className:"flex flex-col",children:[U.jsxs("span",{className:"font-semibold text-slate-100 flex items-center gap-1.5",children:[U.jsx("span",{children:l.label}),U.jsxs("span",{className:"text-[10px] text-slate-400 font-mono",children:["(",l.zone,")"]})]}),U.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:p.toUpperCase()})]})]}),U.jsxs("div",{className:"absolute bottom-4 left-4 z-10 hidden sm:flex items-center gap-3 px-3 py-1.5 rounded-full bg-slate-900/60 backdrop-blur-md border border-slate-800 text-[11px] text-slate-400",children:[U.jsx("span",{children:"🖱️ Drehen: Linksklick + Ziehen"}),U.jsx("span",{children:"•"}),U.jsx("span",{children:"🔍 Zoom: Scrollrad"}),U.jsx("span",{children:"•"}),U.jsx("span",{children:"⌨️ Physische Tasten drücken zum Testen"})]})]})};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tR=o=>o==null?void 0:o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function eR(o,e,i=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:tR(o),size:24,node:e,...i.length>0?{aliases:i}:{}}}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nR=o=>{let e="",i=!1;for(const s of o){if(s==="-"||s==="_"||s<=" "){i=e.length>0;continue}e.length===0?e+=s.toLowerCase():e+=i?s.toUpperCase():s,i=!1}return e};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iR=o=>{const e=nR(o);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=(...o)=>o.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Jd(o){return o!=null}function aR(o,e={}){var x,y;const i=e.attributeNames??{},s=E=>i[E]??E,l=o.size??o.width??er.width,f=o.size??o.height??er.height,h=((x=o.aliases)==null?void 0:x.filter(E=>typeof E=="string"&&E.trim()!=="").map(E=>`lucide-${E}`))??[],d=[...o.name?[`lucide-${o.name}`]:[],...h],p=((y=e.className)==null?void 0:y.split(" ").filter(Boolean))??[],g=e.includeDefaultClasses===!1?Qp(...p):Qp("lucide",...d,...p),_=e.absoluteStrokeWidth?Number(e.strokeWidth??er["stroke-width"])*Number(o.size??o.width??er.width)/Number(e.size??e.width??er.width):e.strokeWidth??er["stroke-width"];return["svg",{...Object.entries(er).reduce((E,[R,M])=>(E[s(R)]=M,E),{}),..."color"in e&&e.color&&{[s("stroke")]:e.color},..."size"in e&&Jd(e.size)&&{[s("width")]:e.size,[s("height")]:e.size},..."width"in e&&Jd(e.width)&&{[s("width")]:e.width},..."height"in e&&Jd(e.height)&&{[s("height")]:e.height},[s("stroke-width")]:_,...g&&{[s("class")]:g},[s("viewBox")]:`0 0 ${l} ${f}`,...e.hasA11yProp===!1?{[s("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},o.node.map(E=>{const[R,M,S]=E,P=e.nonScalingStroke?{[s("vector-effect")]:"non-scaling-stroke",...M}:M;return S?[R,P,S]:[R,P]})]}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function sR(o,e={}){return aR(o,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rR=o=>{for(const e in o)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},oR=nn.createContext({}),lR=()=>nn.useContext(oR),cR=nn.forwardRef(({color:o,size:e,width:i,height:s,strokeWidth:l,absoluteStrokeWidth:f,nonScalingStroke:h,className:d="",children:p,iconNode:g=[],icon:_={node:g,aliases:[],size:24},...m},x)=>{const{size:y=24,strokeWidth:E=2,absoluteStrokeWidth:R=!1,nonScalingStroke:M=!1,color:S="currentColor",className:P=""}=lR()??{},H=!!p||rR(m),[O,I,D=[]]=sR(_,{color:o??S,width:i??e??y,height:s??e??y,strokeWidth:l??E,absoluteStrokeWidth:f??R,nonScalingStroke:h??M,className:Qp(P,d),hasA11yProp:H,attributes:m});return nn.createElement(O,{ref:x,...I},[...D.map(([N,X])=>nn.createElement(N,X)),...Array.isArray(p)?p:[p]])});/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function $e(o,e=[],i=[]){const s=typeof o=="string"?eR(o,e,i):o,l=nn.forwardRef(({className:f,...h},d)=>nn.createElement(cR,{ref:d,icon:s,className:f,...h}));return s.name&&(l.displayName=iR(s.name)),l}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS={name:"arrow-down-right",size:24,node:[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]};LS.node;const uR=$e(LS);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS={name:"arrow-down",size:24,node:[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]};OS.node;const fR=$e(OS);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};PS.node;const hR=$e(PS);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]};IS.node;const dR=$e(IS);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS={name:"camera",size:24,node:[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]};zS.node;const Gx=$e(zS);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};FS.node;const Vx=$e(FS);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]};BS.node;const pR=$e(BS);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};HS.node;const mR=$e(HS);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS={name:"download",size:24,node:[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]};GS.node;const kx=$e(GS);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};VS.node;const gR=$e(VS);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS={name:"keyboard",size:24,node:[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]]};kS.node;const _R=$e(kS);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};XS.node;const vR=$e(XS);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS={name:"menu",size:24,node:[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]};jS.node;const xR=$e(jS);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS={name:"paint-bucket",size:24,node:[["path",{d:"M11 7 6 2",key:"1jwth8"}],["path",{d:"M18.992 12H2.041",key:"xw1gg"}],["path",{d:"M21.145 18.38A3.34 3.34 0 0 1 20 16.5a3.3 3.3 0 0 1-1.145 1.88c-.575.46-.855 1.02-.855 1.595A2 2 0 0 0 20 22a2 2 0 0 0 2-2.025c0-.58-.285-1.13-.855-1.595",key:"1nkol4"}],["path",{d:"m8.5 4.5 2.148-2.148a1.205 1.205 0 0 1 1.704 0l7.296 7.296a1.205 1.205 0 0 1 0 1.704l-7.592 7.592a3.615 3.615 0 0 1-5.112 0l-3.888-3.888a3.615 3.615 0 0 1 0-5.112L5.67 7.33",key:"1nk1rd"}]]};YS.node;const SR=$e(YS);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS={name:"paintbrush",size:24,node:[["path",{d:"m14.622 17.897-10.68-2.913",key:"vj2p1u"}],["path",{d:"M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z",key:"18tc5c"}],["path",{d:"M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15",key:"ytzfxy"}]]};qS.node;const yR=$e(qS);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS={name:"palette",size:24,node:[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]]};WS.node;const MR=$e(WS);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS={name:"pipette",size:24,node:[["path",{d:"m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12",key:"1y3wsu"}],["path",{d:"m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z",key:"110lr1"}],["path",{d:"m2 22 .414-.414",key:"jhxm08"}]]};ZS.node;const bR=$e(ZS);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS={name:"rotate-cw",size:24,node:[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]};KS.node;const Xx=$e(KS);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS={name:"sliders-horizontal",size:24,node:[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]]};QS.node;const ER=$e(QS);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS={name:"sliders-vertical",size:24,node:[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],aliases:["sliders"]};JS.node;const TR=$e(JS);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};$S.node;const Ol=$e($S);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]};ty.node;const AR=$e(ty);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey={name:"upload",size:24,node:[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]]};ey.node;const jx=$e(ey);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};ny.node;const Yx=$e(ny);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};iy.node;const qx=$e(iy);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};ay.node;const xm=$e(ay),Wx=[{label:"100%",value:"100%",desc:"Full-Size mit NumPad"},{label:"TKL",value:"tkl",desc:"80% Tenkeyless"},{label:"75%",value:"75%",desc:"Kompakt mit F-Reihe"},{label:"65%",value:"65%",desc:"Kompakt mit Pfeiltasten"},{label:"60%",value:"60%",desc:"Standard 60%"},{label:"40%",value:"40%",desc:"Ultra-kompakt"}],CR=({size:o,layout:e,soundEnabled:i,autoRotate:s,onSizeChange:l,onLayoutChange:f,onToggleSound:h,onToggleAutoRotate:d,onResetCamera:p,onExportScreenshot:g,onExportJSON:_,onImportJSON:m})=>{const[x,y]=nn.useState(!1);return U.jsxs(U.Fragment,{children:[U.jsxs("header",{className:"h-14 sm:h-16 px-3 sm:px-4 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md flex items-center justify-between z-30 select-none",children:[U.jsxs("div",{className:"flex items-center gap-2.5",children:[U.jsx("div",{className:"w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/20 text-white flex-shrink-0",children:U.jsx(_R,{className:"w-4 h-4 sm:w-5 sm:h-5"})}),U.jsxs("div",{children:[U.jsxs("div",{className:"flex items-center gap-1.5",children:[U.jsx("h1",{className:"text-sm sm:text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-slate-200 to-indigo-300",children:"KB-Sim 3D"}),U.jsx("span",{className:"hidden lg:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20",children:"Pro Studio"})]}),U.jsx("p",{className:"text-[10px] sm:text-[11px] text-slate-400 hidden sm:block",children:"Mechanical Keyboard 3D Simulator & Keycap Designer"})]})]}),U.jsxs("div",{className:"hidden md:flex items-center gap-2",children:[U.jsx("div",{className:"flex bg-slate-900/90 border border-slate-800 rounded-lg p-1 text-xs",children:Wx.map(E=>U.jsx("button",{onClick:()=>l(E.value),title:E.desc,className:`px-2.5 py-1 rounded-md font-medium transition-all duration-150 ${o===E.value?"bg-indigo-600 text-white shadow-sm shadow-indigo-500/30":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"}`,children:E.label},E.value))}),U.jsxs("div",{className:"flex bg-slate-900/90 border border-slate-800 rounded-lg p-1 text-xs",children:[U.jsx("button",{onClick:()=>f("iso-de"),title:"ISO Deutsch (Große Enter, kurze Shift, Umlaute)",className:`px-2.5 py-1 rounded-md font-medium transition-all ${e==="iso-de"?"bg-indigo-600 text-white shadow-sm":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"}`,children:"ISO-DE"}),U.jsx("button",{onClick:()=>f("ansi-us"),title:"ANSI US (Flache Enter, breite Shift)",className:`px-2.5 py-1 rounded-md font-medium transition-all ${e==="ansi-us"?"bg-indigo-600 text-white shadow-sm":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"}`,children:"ANSI-US"})]})]}),U.jsxs("div",{className:"flex md:hidden items-center gap-1.5",children:[U.jsx("select",{value:o,onChange:E=>l(E.target.value),className:"bg-slate-900 border border-slate-700/80 text-xs font-semibold text-slate-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-indigo-500",children:Wx.map(E=>U.jsx("option",{value:E.value,children:E.label},E.value))}),U.jsx("button",{onClick:()=>f(e==="iso-de"?"ansi-us":"iso-de"),className:"px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 text-[11px] font-semibold text-indigo-300",children:e==="iso-de"?"ISO":"ANSI"})]}),U.jsxs("div",{className:"hidden sm:flex items-center gap-1.5",children:[U.jsx("button",{onClick:h,title:i?"Thocky Audio An":"Thocky Audio Aus",className:`p-2 rounded-lg border transition-all ${i?"bg-slate-800 border-slate-700 text-indigo-400":"bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300"}`,children:i?U.jsx(Yx,{className:"w-4 h-4"}):U.jsx(qx,{className:"w-4 h-4"})}),U.jsx("button",{onClick:d,title:s?"Auto-Drehung stoppen":"Auto-Drehung starten",className:`p-2 rounded-lg border transition-all ${s?"bg-indigo-600/20 border-indigo-500/40 text-indigo-300 animate-spin":"bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:U.jsx(Xx,{className:"w-4 h-4"})}),U.jsx("button",{onClick:p,title:"Kamera-Perspektive zurücksetzen",className:"p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-all",children:U.jsx(Gx,{className:"w-4 h-4"})}),U.jsx("div",{className:"h-5 w-px bg-slate-800 mx-1"}),U.jsx("button",{onClick:m,title:"Design laden (JSON Import)",className:"p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-all",children:U.jsx(jx,{className:"w-4 h-4"})}),U.jsx("button",{onClick:_,title:"Design speichern (JSON Export)",className:"p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-all",children:U.jsx(kx,{className:"w-4 h-4"})}),U.jsxs("button",{onClick:g,className:"hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white text-xs font-semibold shadow-md shadow-indigo-600/30 transition-all active:scale-95",children:[U.jsx(Ol,{className:"w-3.5 h-3.5"}),U.jsx("span",{children:"Screenshot"})]})]}),U.jsx("div",{className:"flex sm:hidden items-center gap-1",children:U.jsx("button",{onClick:()=>y(!x),className:"p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white",children:x?U.jsx(xm,{className:"w-5 h-5"}):U.jsx(xR,{className:"w-5 h-5"})})})]}),x&&U.jsxs("div",{className:"fixed inset-x-0 top-14 z-40 bg-slate-950/95 border-b border-slate-800/90 backdrop-blur-2xl p-4 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-2 sm:hidden",children:[U.jsxs("div",{className:"space-y-1.5",children:[U.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-slate-400",children:"Sprachlayout"}),U.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[U.jsx("button",{onClick:()=>{f("iso-de"),y(!1)},className:`py-2 rounded-lg text-xs font-semibold border ${e==="iso-de"?"bg-indigo-600 text-white border-indigo-500":"bg-slate-900 border-slate-800 text-slate-300"}`,children:"ISO Deutsch"}),U.jsx("button",{onClick:()=>{f("ansi-us"),y(!1)},className:`py-2 rounded-lg text-xs font-semibold border ${e==="ansi-us"?"bg-indigo-600 text-white border-indigo-500":"bg-slate-900 border-slate-800 text-slate-300"}`,children:"ANSI US"})]})]}),U.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[U.jsxs("button",{onClick:()=>{h()},className:`p-2.5 rounded-xl border text-center flex flex-col items-center gap-1 text-xs ${i?"bg-indigo-600/20 border-indigo-500 text-indigo-300":"bg-slate-900 border-slate-800 text-slate-400"}`,children:[i?U.jsx(Yx,{className:"w-4 h-4"}):U.jsx(qx,{className:"w-4 h-4"}),U.jsx("span",{children:"Audio"})]}),U.jsxs("button",{onClick:()=>{d()},className:`p-2.5 rounded-xl border text-center flex flex-col items-center gap-1 text-xs ${s?"bg-indigo-600/20 border-indigo-500 text-indigo-300":"bg-slate-900 border-slate-800 text-slate-400"}`,children:[U.jsx(Xx,{className:"w-4 h-4"}),U.jsx("span",{children:"Drehung"})]}),U.jsxs("button",{onClick:()=>{p(),y(!1)},className:"p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 text-center flex flex-col items-center gap-1 text-xs",children:[U.jsx(Gx,{className:"w-4 h-4"}),U.jsx("span",{children:"Zentrieren"})]})]}),U.jsxs("div",{className:"grid grid-cols-3 gap-2 pt-2 border-t border-slate-800",children:[U.jsxs("button",{onClick:()=>{m(),y(!1)},className:"p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-center gap-1.5 text-xs",children:[U.jsx(jx,{className:"w-4 h-4"}),U.jsx("span",{children:"Import"})]}),U.jsxs("button",{onClick:()=>{_(),y(!1)},className:"p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-center gap-1.5 text-xs",children:[U.jsx(kx,{className:"w-4 h-4"}),U.jsx("span",{children:"Export"})]}),U.jsxs("button",{onClick:()=>{g(),y(!1)},className:"p-2.5 rounded-xl bg-indigo-600 text-white font-medium flex items-center justify-center gap-1.5 text-xs",children:[U.jsx(Ol,{className:"w-4 h-4"}),U.jsx("span",{children:"Foto"})]})]})]})]})},wR=({activeTool:o,bucketMode:e,targetZone:i,activeColor:s,onSelectTool:l,onSelectBucketMode:f,onSelectTargetZone:h,onOpenGradientModal:d,onToggleCustomizer:p,isCustomizerOpen:g})=>U.jsx(U.Fragment,{children:U.jsxs("div",{className:"fixed sm:absolute bottom-3 sm:bottom-auto sm:top-20 left-1/2 -translate-x-1/2 sm:left-4 sm:translate-x-0 z-30 flex flex-col items-center sm:items-start gap-2",children:[U.jsxs("div",{className:"flex sm:flex-col items-center gap-1.5 p-1.5 sm:p-2 rounded-2xl bg-slate-900/95 backdrop-blur-2xl border border-slate-800/90 shadow-2xl",children:[U.jsx("button",{onClick:p,className:"p-1 flex items-center justify-center group",title:"Farbe & Palette öffnen",children:U.jsx("div",{className:"w-7 h-7 sm:w-8 sm:h-8 rounded-xl shadow-md border-2 border-white/20 transition-transform group-hover:scale-105 active:scale-95",style:{backgroundColor:s}})}),U.jsx("div",{className:"w-px h-5 sm:w-full sm:h-px bg-slate-800 my-0.5"}),U.jsx("button",{onClick:()=>l("brush"),title:"Pinsel: Klicke auf eine einzelne Taste zum Einfärben",className:`p-2.5 rounded-xl transition-all duration-150 flex items-center justify-center ${o==="brush"?"bg-indigo-600 text-white shadow-md shadow-indigo-500/30 ring-2 ring-indigo-400/40":"text-slate-400 hover:text-slate-100 hover:bg-slate-800/60"}`,children:U.jsx(yR,{className:"w-4 h-4 sm:w-5 sm:h-5"})}),U.jsx("button",{onClick:()=>l("bucket"),title:"Füllwerkzeug: Bereichs- oder Gesamtfüllung",className:`p-2.5 rounded-xl transition-all duration-150 flex items-center justify-center ${o==="bucket"?"bg-indigo-600 text-white shadow-md shadow-indigo-500/30 ring-2 ring-indigo-400/40":"text-slate-400 hover:text-slate-100 hover:bg-slate-800/60"}`,children:U.jsx(SR,{className:"w-4 h-4 sm:w-5 sm:h-5"})}),U.jsx("button",{onClick:()=>l("picker"),title:"Pipette: Farbe von einer Taste aufnehmen",className:`p-2.5 rounded-xl transition-all duration-150 flex items-center justify-center ${o==="picker"?"bg-indigo-600 text-white shadow-md shadow-indigo-500/30 ring-2 ring-indigo-400/40":"text-slate-400 hover:text-slate-100 hover:bg-slate-800/60"}`,children:U.jsx(bR,{className:"w-4 h-4 sm:w-5 sm:h-5"})}),U.jsx("button",{onClick:()=>{l("gradient"),d()},title:"Farbverlauf-Generator: Linearer Farbverlauf über alle Tasten",className:`p-2.5 rounded-xl transition-all duration-150 flex items-center justify-center ${o==="gradient"?"bg-indigo-600 text-white shadow-md shadow-indigo-500/30 ring-2 ring-indigo-400/40":"text-slate-400 hover:text-slate-100 hover:bg-slate-800/60"}`,children:U.jsx(Ol,{className:"w-4 h-4 sm:w-5 sm:h-5"})}),U.jsxs("div",{className:"flex sm:hidden items-center",children:[U.jsx("div",{className:"w-px h-5 bg-slate-800 mx-0.5"}),U.jsx("button",{onClick:p,title:"Design & Hardware Einstellungen",className:`p-2.5 rounded-xl transition-all ${g?"bg-indigo-600 text-white shadow-md":"text-slate-400 hover:text-slate-200"}`,children:U.jsx(ER,{className:"w-4 h-4"})})]})]}),o==="bucket"&&U.jsxs("div",{className:"fixed sm:absolute bottom-16 sm:bottom-auto sm:top-24 left-1/2 -translate-x-1/2 sm:left-14 sm:translate-x-0 p-3 rounded-2xl bg-slate-900/95 backdrop-blur-2xl border border-slate-800/90 shadow-2xl flex flex-col gap-2 w-64 max-w-[90vw] animate-in fade-in",children:[U.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-slate-400 px-1",children:"Füllmodus"}),U.jsxs("div",{className:"flex flex-col gap-1",children:[U.jsxs("button",{onClick:()=>f("all"),className:`px-2.5 py-1.5 rounded-lg text-xs font-medium text-left flex items-center justify-between ${e==="all"?"bg-indigo-600 text-white":"text-slate-300 hover:bg-slate-800"}`,children:[U.jsx("span",{children:"Alle Tasten füllen"}),U.jsx(vR,{className:"w-3.5 h-3.5 opacity-70"})]}),U.jsxs("button",{onClick:()=>f("same_color"),className:`px-2.5 py-1.5 rounded-lg text-xs font-medium text-left flex items-center justify-between ${e==="same_color"?"bg-indigo-600 text-white":"text-slate-300 hover:bg-slate-800"}`,children:[U.jsx("span",{children:"Gleiche Farbe ersetzen"}),U.jsx("span",{className:"text-[10px] opacity-60",children:"Flood Fill"})]}),U.jsxs("button",{onClick:()=>f("zone"),className:`px-2.5 py-1.5 rounded-lg text-xs font-medium text-left flex items-center justify-between ${e==="zone"?"bg-indigo-600 text-white":"text-slate-300 hover:bg-slate-800"}`,children:[U.jsx("span",{children:"Zonen-Füllung"}),U.jsx("span",{className:"text-[10px] opacity-60",children:"Bereich"})]})]}),e==="zone"&&U.jsxs("div",{className:"pt-2 border-t border-slate-800 flex flex-col gap-1",children:[U.jsx("span",{className:"text-[10px] font-semibold text-slate-400 px-1",children:"Ziel-Zone:"}),U.jsx("div",{className:"grid grid-cols-2 gap-1 text-[11px]",children:[{id:"alphas",label:"Alphas"},{id:"modifiers",label:"Modifier"},{id:"f_row",label:"F-Reihe"},{id:"arrows",label:"Pfeiltasten"},{id:"numpad",label:"NumPad"},{id:"space",label:"Leertaste"}].map(_=>U.jsx("button",{onClick:()=>h(_.id),className:`px-2 py-1.5 rounded text-center truncate ${i===_.id?"bg-indigo-500/20 text-indigo-300 border border-indigo-500/40":"bg-slate-800/60 text-slate-400 hover:text-slate-200"}`,children:_.label},_.id))})]})]})]})}),RR=({state:o,isOpen:e,onToggleOpen:i,onColorChange:s,onApplyPreset:l,onCaseChange:f,onPlateChange:h,onSwitchChange:d,onRgbChange:p,onToggleLegends:g,onToggleWireframe:_})=>{const[m,x]=nn.useState("colors");return U.jsxs(U.Fragment,{children:[e&&U.jsx("div",{onClick:i,className:"fixed inset-0 bg-black/40 backdrop-blur-xs z-30 sm:hidden animate-in fade-in"}),U.jsxs("aside",{className:`fixed sm:absolute bottom-0 sm:bottom-auto sm:top-20 inset-x-0 sm:inset-x-auto sm:right-4 z-40 sm:z-20 transition-transform duration-300 ease-out flex ${e?"translate-y-0 sm:translate-x-0":"translate-y-full sm:translate-y-0 sm:translate-x-[calc(100%+1.5rem)]"}`,children:[U.jsx("button",{onClick:i,className:"hidden sm:flex absolute -left-9 top-4 w-9 h-10 rounded-l-xl bg-slate-900/90 border-l border-y border-slate-800 backdrop-blur-md items-center justify-center text-slate-400 hover:text-white shadow-xl",title:e?"Panel einklappen":"Panel ausklappen",children:e?U.jsx(mR,{className:"w-5 h-5"}):U.jsx(pR,{className:"w-5 h-5"})}),U.jsxs("div",{className:"w-full sm:w-80 max-h-[65vh] sm:max-h-[calc(100vh-6.5rem)] bg-slate-900/95 backdrop-blur-2xl border-t sm:border border-slate-800/90 rounded-t-3xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden pb-4 sm:pb-0",children:[U.jsxs("div",{className:"sm:hidden w-full flex items-center justify-between px-4 pt-3 pb-1 border-b border-slate-800/60",children:[U.jsx("div",{className:"w-10 h-1 bg-slate-700/80 rounded-full mx-auto"}),U.jsx("button",{onClick:i,className:"p-1 rounded-lg text-slate-400 hover:text-slate-200",children:U.jsx(xm,{className:"w-5 h-5"})})]}),U.jsxs("div",{className:"flex border-b border-slate-800 p-1.5 bg-slate-950/40",children:[U.jsxs("button",{onClick:()=>x("colors"),className:`flex-1 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${m==="colors"?"bg-indigo-600 text-white shadow-md shadow-indigo-600/30":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"}`,children:[U.jsx(MR,{className:"w-3.5 h-3.5"}),U.jsx("span",{children:"Farben"})]}),U.jsxs("button",{onClick:()=>x("hardware"),className:`flex-1 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${m==="hardware"?"bg-indigo-600 text-white shadow-md shadow-indigo-600/30":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"}`,children:[U.jsx(TR,{className:"w-3.5 h-3.5"}),U.jsx("span",{children:"Hardware"})]}),U.jsxs("button",{onClick:()=>x("lighting"),className:`flex-1 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${m==="lighting"?"bg-indigo-600 text-white shadow-md shadow-indigo-600/30":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"}`,children:[U.jsx(AR,{className:"w-3.5 h-3.5"}),U.jsx("span",{children:"Effekte"})]})]}),U.jsxs("div",{className:"p-4 overflow-y-auto space-y-4 sm:space-y-5 text-slate-200 scrollbar-thin scrollbar-thumb-slate-700",children:[m==="colors"&&U.jsxs(U.Fragment,{children:[U.jsxs("div",{className:"space-y-2",children:[U.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider text-slate-400",children:"Aktive Pinselfarbe"}),U.jsxs("div",{className:"flex items-center gap-3 p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60",children:[U.jsxs("div",{className:"relative",children:[U.jsx("input",{type:"color",value:o.activeColor,onChange:y=>s(y.target.value),className:"w-10 h-10 rounded-xl cursor-pointer bg-transparent border-0 opacity-0 absolute inset-0"}),U.jsx("div",{className:"w-10 h-10 rounded-xl shadow-inner border border-white/20",style:{backgroundColor:o.activeColor}})]}),U.jsx("div",{className:"flex-1",children:U.jsx("input",{type:"text",value:o.activeColor.toUpperCase(),onChange:y=>s(y.target.value),className:"w-full bg-slate-900 border border-slate-700 px-2.5 py-1.5 rounded-lg text-xs font-mono uppercase text-slate-200 focus:outline-none focus:border-indigo-500"})})]})]}),o.recentColors.length>0&&U.jsxs("div",{className:"space-y-1.5",children:[U.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider text-slate-400",children:"Zuletzt verwendet"}),U.jsx("div",{className:"flex flex-wrap gap-2",children:o.recentColors.map((y,E)=>U.jsx("button",{onClick:()=>s(y),title:y,className:`w-7 h-7 sm:w-6 sm:h-6 rounded-md shadow border transition-transform hover:scale-110 active:scale-95 ${o.activeColor.toLowerCase()===y.toLowerCase()?"ring-2 ring-indigo-400 border-white scale-105":"border-white/10"}`,style:{backgroundColor:y}},`${y}-${E}`))})]}),U.jsxs("div",{className:"space-y-1.5",children:[U.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider text-slate-400",children:"Farbpalette"}),U.jsx("div",{className:"grid grid-cols-10 gap-1.5 sm:gap-1",children:eb.map(y=>U.jsx("button",{onClick:()=>s(y),title:y,className:`h-6 sm:h-5 rounded shadow-sm transition-transform hover:scale-125 active:scale-95 ${o.activeColor.toLowerCase()===y.toLowerCase()?"ring-2 ring-indigo-400 z-10 scale-110":"border border-white/5"}`,style:{backgroundColor:y}},y))})]}),U.jsxs("div",{className:"space-y-2 pt-2 border-t border-slate-800",children:[U.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider text-slate-400",children:"Keycap Set Presets"}),U.jsx("div",{className:"space-y-2",children:Kx.map(y=>U.jsxs("button",{onClick:()=>l(y),className:"w-full p-2.5 rounded-xl bg-slate-800/40 hover:bg-slate-800/80 active:bg-slate-850 border border-slate-800 hover:border-slate-700 transition-all text-left flex flex-col gap-1.5 group",children:[U.jsxs("div",{className:"flex items-center justify-between",children:[U.jsx("span",{className:"text-xs font-semibold text-slate-200 group-hover:text-indigo-300",children:y.name}),U.jsxs("div",{className:"flex items-center gap-1",children:[U.jsx("div",{className:"w-3.5 h-3.5 rounded-full border border-black/20",style:{backgroundColor:y.alphas.bg},title:"Alphas"}),U.jsx("div",{className:"w-3.5 h-3.5 rounded-full border border-black/20",style:{backgroundColor:y.modifiers.bg},title:"Modifiers"}),U.jsx("div",{className:"w-3.5 h-3.5 rounded-full border border-black/20",style:{backgroundColor:y.accents.bg},title:"Accents"})]})]}),U.jsx("p",{className:"text-[10px] text-slate-400 line-clamp-1",children:y.description})]},y.id))})]})]}),m==="hardware"&&U.jsxs(U.Fragment,{children:[U.jsxs("div",{className:"space-y-2",children:[U.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider text-slate-400",children:"Gehäuse (Case)"}),U.jsx("div",{className:"grid grid-cols-2 gap-2",children:$M.map(y=>U.jsxs("button",{onClick:()=>f(y.hex,y.material),className:`p-2.5 sm:p-2 rounded-xl border text-left flex items-center gap-2 transition-all ${o.caseColor.toLowerCase()===y.hex.toLowerCase()?"bg-indigo-600/20 border-indigo-500 text-indigo-300":"bg-slate-800/40 border-slate-800 text-slate-400 hover:text-slate-200"}`,children:[U.jsx("div",{className:"w-4 h-4 rounded-full border border-white/20 flex-shrink-0",style:{backgroundColor:y.hex}}),U.jsx("span",{className:"text-xs truncate",children:y.name})]},y.name))})]}),U.jsxs("div",{className:"space-y-2 pt-2 border-t border-slate-800",children:[U.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider text-slate-400",children:"Montageplatte (Plate)"}),U.jsx("div",{className:"space-y-1.5",children:tb.map(y=>U.jsxs("button",{onClick:()=>h(y.hex),className:`w-full p-2.5 sm:p-2 rounded-xl border text-left flex items-center justify-between transition-all ${o.plateColor.toLowerCase()===y.hex.toLowerCase()?"bg-indigo-600/20 border-indigo-500 text-indigo-300":"bg-slate-800/40 border-slate-800 text-slate-400 hover:text-slate-200"}`,children:[U.jsxs("div",{className:"flex items-center gap-2",children:[U.jsx("div",{className:"w-4 h-4 rounded-full border border-white/20",style:{backgroundColor:y.hex}}),U.jsx("span",{className:"text-xs",children:y.name})]}),o.plateColor.toLowerCase()===y.hex.toLowerCase()&&U.jsx(Vx,{className:"w-3.5 h-3.5 text-indigo-400"})]},y.name))})]}),U.jsxs("div",{className:"space-y-2 pt-2 border-t border-slate-800",children:[U.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider text-slate-400",children:"Switches"}),U.jsx("div",{className:"space-y-1.5",children:$d.map(y=>U.jsxs("button",{onClick:()=>d(y.id),className:`w-full p-2.5 sm:p-2 rounded-xl border text-left flex items-center justify-between transition-all ${o.switchType===y.id?"bg-indigo-600/20 border-indigo-500 text-indigo-300":"bg-slate-800/40 border-slate-800 text-slate-400 hover:text-slate-200"}`,children:[U.jsxs("div",{className:"flex items-center gap-2",children:[U.jsx("div",{className:"w-4 h-4 rounded-sm shadow-sm",style:{backgroundColor:y.stemColor}}),U.jsx("span",{className:"text-xs",children:y.name})]}),o.switchType===y.id&&U.jsx(Vx,{className:"w-3.5 h-3.5 text-indigo-400"})]},y.id))})]})]}),m==="lighting"&&U.jsxs(U.Fragment,{children:[U.jsxs("div",{className:"space-y-2",children:[U.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider text-slate-400",children:"RGB Unterbodenbeleuchtung"}),U.jsx("div",{className:"grid grid-cols-2 gap-2",children:["off","rainbow","static","pulse"].map(y=>U.jsx("button",{onClick:()=>p(y),className:`p-2.5 rounded-xl border text-center text-xs font-medium capitalize transition-all ${o.rgbMode===y?"bg-indigo-600/20 border-indigo-500 text-indigo-300":"bg-slate-800/40 border-slate-800 text-slate-400 hover:text-slate-200"}`,children:y==="off"?"Aus":y},y))}),o.rgbMode!=="off"&&o.rgbMode!=="rainbow"&&U.jsxs("div",{className:"flex items-center gap-2 pt-2",children:[U.jsx("span",{className:"text-xs text-slate-400",children:"LED-Farbe:"}),U.jsx("input",{type:"color",value:o.rgbColor,onChange:y=>p(o.rgbMode,y.target.value),className:"w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0"})]})]}),U.jsxs("div",{className:"space-y-2 pt-3 border-t border-slate-800",children:[U.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider text-slate-400",children:"Ansichtsoptionen"}),U.jsxs("button",{onClick:g,className:`w-full p-2.5 rounded-xl border text-left flex items-center justify-between transition-all ${o.showLegends?"bg-indigo-600/20 border-indigo-500 text-indigo-300":"bg-slate-800/40 border-slate-800 text-slate-400"}`,children:[U.jsxs("div",{className:"flex items-center gap-2",children:[U.jsx(gR,{className:"w-4 h-4"}),U.jsx("span",{className:"text-xs",children:"Tastenbeschriftung (Legends)"})]}),U.jsx("span",{className:"text-xs font-mono",children:o.showLegends?"AN":"AUS"})]}),U.jsxs("button",{onClick:_,className:`w-full p-2.5 rounded-xl border text-left flex items-center justify-between transition-all ${o.wireframe?"bg-indigo-600/20 border-indigo-500 text-indigo-300":"bg-slate-800/40 border-slate-800 text-slate-400"}`,children:[U.jsxs("div",{className:"flex items-center gap-2",children:[U.jsx(dR,{className:"w-4 h-4"}),U.jsx("span",{className:"text-xs",children:"Drahtgitter-Modus (Wireframe)"})]}),U.jsx("span",{className:"text-xs font-mono",children:o.wireframe?"AN":"AUS"})]})]})]})]})]})]})]})},DR=({isOpen:o,onClose:e,onApplyGradient:i,initialStartColor:s})=>{const[l,f]=nn.useState(s||"#ff007f"),[h,d]=nn.useState("#00f0ff"),[p,g]=nn.useState("horizontal");if(!o)return null;const _=()=>{i(l,h,p),e()},m=12,x=Array.from({length:m},(y,E)=>Qx(l,h,E/(m-1)));return U.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in",children:U.jsxs("div",{className:"relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-y-auto max-h-[92vh] p-4 sm:p-6",children:[U.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800",children:[U.jsxs("div",{className:"flex items-center gap-2.5",children:[U.jsx("div",{className:"p-2 rounded-xl bg-indigo-500/10 text-indigo-400",children:U.jsx(Ol,{className:"w-5 h-5"})}),U.jsxs("div",{children:[U.jsx("h3",{className:"text-base font-semibold text-slate-100",children:"Farbverlauf-Generator"}),U.jsx("p",{className:"text-xs text-slate-400",children:"Lineare Farbinterpolation über alle Tasten"})]})]}),U.jsx("button",{onClick:e,className:"p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors",children:U.jsx(xm,{className:"w-4 h-4"})})]}),U.jsxs("div",{className:"py-5 space-y-5",children:[U.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[U.jsxs("div",{className:"flex flex-col gap-1.5",children:[U.jsx("label",{className:"text-xs font-medium text-slate-300",children:"Startfarbe"}),U.jsxs("div",{className:"flex items-center gap-2 p-2 rounded-xl bg-slate-800/80 border border-slate-700",children:[U.jsx("input",{type:"color",value:l,onChange:y=>f(y.target.value),className:"w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0"}),U.jsx("input",{type:"text",value:l,onChange:y=>f(y.target.value),className:"w-full bg-transparent font-mono text-xs uppercase text-slate-200 focus:outline-none"})]})]}),U.jsxs("div",{className:"flex flex-col gap-1.5",children:[U.jsx("label",{className:"text-xs font-medium text-slate-300",children:"Endfarbe"}),U.jsxs("div",{className:"flex items-center gap-2 p-2 rounded-xl bg-slate-800/80 border border-slate-700",children:[U.jsx("input",{type:"color",value:h,onChange:y=>d(y.target.value),className:"w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0"}),U.jsx("input",{type:"text",value:h,onChange:y=>d(y.target.value),className:"w-full bg-transparent font-mono text-xs uppercase text-slate-200 focus:outline-none"})]})]})]}),U.jsxs("div",{className:"space-y-2",children:[U.jsx("label",{className:"text-xs font-medium text-slate-300",children:"Richtung des Verlaufs"}),U.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[U.jsxs("button",{onClick:()=>g("horizontal"),className:`flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl border transition-all ${p==="horizontal"?"bg-indigo-600/20 border-indigo-500 text-indigo-300 shadow-sm":"bg-slate-800/50 border-slate-700/60 text-slate-400 hover:text-slate-200"}`,children:[U.jsx(hR,{className:"w-5 h-5"}),U.jsx("span",{className:"text-xs font-medium",children:"Horizontal"}),U.jsx("span",{className:"text-[10px] text-slate-500",children:"Links → Rechts"})]}),U.jsxs("button",{onClick:()=>g("vertical"),className:`flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl border transition-all ${p==="vertical"?"bg-indigo-600/20 border-indigo-500 text-indigo-300 shadow-sm":"bg-slate-800/50 border-slate-700/60 text-slate-400 hover:text-slate-200"}`,children:[U.jsx(fR,{className:"w-5 h-5"}),U.jsx("span",{className:"text-xs font-medium",children:"Vertikal"}),U.jsx("span",{className:"text-[10px] text-slate-500",children:"Oben → Unten"})]}),U.jsxs("button",{onClick:()=>g("diagonal-down"),className:`flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl border transition-all ${p==="diagonal-down"?"bg-indigo-600/20 border-indigo-500 text-indigo-300 shadow-sm":"bg-slate-800/50 border-slate-700/60 text-slate-400 hover:text-slate-200"}`,children:[U.jsx(uR,{className:"w-5 h-5"}),U.jsx("span",{className:"text-xs font-medium",children:"Diagonal"}),U.jsx("span",{className:"text-[10px] text-slate-500",children:"Links oben → Rechts unten"})]})]})]}),U.jsxs("div",{className:"space-y-1.5",children:[U.jsxs("div",{className:"flex justify-between text-[11px] text-slate-400",children:[U.jsx("span",{children:"Vorschau-Verlauf"}),U.jsxs("span",{className:"font-mono",children:[l.toUpperCase()," → ",h.toUpperCase()]})]}),U.jsx("div",{className:"h-6 rounded-lg overflow-hidden flex border border-slate-700/80 shadow-inner",children:x.map((y,E)=>U.jsx("div",{className:"flex-1 h-full",style:{backgroundColor:y}},E))})]})]}),U.jsxs("div",{className:"flex items-center justify-end gap-3 pt-4 border-t border-slate-800",children:[U.jsx("button",{onClick:e,className:"px-4 py-2 rounded-xl text-xs font-medium text-slate-300 hover:bg-slate-800 transition-colors",children:"Abbrechen"}),U.jsxs("button",{onClick:_,className:"px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/30 transition-all active:scale-95 flex items-center gap-2",children:[U.jsx(Ol,{className:"w-3.5 h-3.5"}),U.jsx("span",{children:"Verlauf anwenden"})]})]})]})})};function NR(o){const e={appName:"Mechanical Keyboard 3D Simulator & Keycap Designer",version:"1.0.0",exportDate:new Date().toISOString(),configuration:{size:o.size,layout:o.layout,caseColor:o.caseColor,caseMaterial:o.caseMaterial,plateColor:o.plateColor,switchType:o.switchType,rgbMode:o.rgbMode,rgbColor:o.rgbColor,keyColors:o.keyColors,legendColors:o.legendColors}},i=JSON.stringify(e,null,2),s=new Blob([i],{type:"application/json"}),l=URL.createObjectURL(s),f=document.createElement("a");f.href=l,f.download=`keyboard-design-${o.size}-${Date.now()}.json`,document.body.appendChild(f),f.click(),document.body.removeChild(f),URL.revokeObjectURL(l)}function UR(o){return new Promise((e,i)=>{const s=new FileReader;s.onload=l=>{var f;try{const h=(f=l.target)==null?void 0:f.result,d=JSON.parse(h);d.configuration?e(d.configuration):d.keyColors?e(d):i(new Error("Ungültiges Format: Keine Tastaturkonfiguration gefunden."))}catch{i(new Error("Fehler beim Parsen der JSON-Datei."))}},s.onerror=()=>i(new Error("Datei konnte nicht gelesen werden.")),s.readAsText(o)})}function LR(o,e){const i=document.createElement("a");i.href=o,i.download=e||`keyboard-snapshot-${Date.now()}.png`,document.body.appendChild(i),i.click(),document.body.removeChild(i)}const OR=()=>{const o=nn.useRef(null),e=nn.useRef(null),i=Kx[0],[s,l]=nn.useState(()=>{const D=nr("75%","iso-de"),N={},X={};return D.forEach(A=>{let w=i.alphas.bg,k=i.alphas.text;(A.zone==="modifiers"||A.zone==="f_row"||A.zone==="nav")&&(w=i.modifiers.bg,k=i.modifiers.text),(A.id==="esc"||A.id==="enter"||A.zone==="arrows")&&(w=i.accents.bg,k=i.accents.text),A.zone==="space"&&i.space&&(w=i.space.bg,k=i.space.text),N[A.id]=w,X[A.id]=k}),{size:"75%",layout:"iso-de",keyColors:N,legendColors:X,activeColor:"#7d9d85",activeLegendColor:"#ffffff",activeTool:"brush",bucketMode:"all",targetZone:"alphas",gradientStart:"#ff007f",gradientEnd:"#00f0ff",gradientDirection:"horizontal",recentColors:["#7d9d85","#e6dfd1","#cfc4b2","#ff007f","#00f0ff","#e8a598"],caseColor:i.caseColor,caseMaterial:i.caseMaterial,plateColor:"#d4af37",switchType:"cherry-red",rgbMode:"off",rgbColor:"#00f0ff",soundEnabled:!0,autoRotate:!1,wireframe:!1,showLegends:!0}}),[f,h]=nn.useState(!1),[d,p]=nn.useState(typeof window<"u"?window.innerWidth>=640:!0),[g,_]=nn.useState(null),m=D=>{_(D),setTimeout(()=>{_(N=>N===D?null:N)},2800)},x=D=>{l(N=>{const X=N.recentColors.filter(A=>A.toLowerCase()!==D.toLowerCase());return{...N,recentColors:[D,...X].slice(0,16)}})},y=D=>{const N=nr(D,s.layout),X={...s.keyColors},A={...s.legendColors};N.forEach(w=>{X[w.id]||(X[w.id]=w.zone==="alphas"?i.alphas.bg:i.modifiers.bg,A[w.id]=ou(X[w.id]))}),l(w=>({...w,size:D,keyColors:X,legendColors:A})),m(`Formfaktor geändert zu ${D}`)},E=D=>{l(N=>({...N,layout:D})),m(`Sprachlayout gewechselt zu ${D==="iso-de"?"ISO Deutsch":"ANSI US"}`)},R=(D,N)=>{if(s.activeTool==="brush"){const X=ou(s.activeColor);l(A=>({...A,keyColors:{...A.keyColors,[D.id]:A.activeColor},legendColors:{...A.legendColors,[D.id]:X}})),x(s.activeColor)}else if(s.activeTool==="picker")l(X=>({...X,activeColor:N})),x(N),m(`Farbe aufgenommen: ${N.toUpperCase()}`);else if(s.activeTool==="bucket"){const X=nr(s.size,s.layout),A={...s.keyColors},w={...s.legendColors},k=ou(s.activeColor);if(s.bucketMode==="all")X.forEach(st=>{A[st.id]=s.activeColor,w[st.id]=k}),m("Alle Tasten eingefärbt");else if(s.bucketMode==="same_color"){const st=N;let it=0;X.forEach(pt=>{const dt=s.keyColors[pt.id]||"#d1d5db";ib(dt,st)&&(A[pt.id]=s.activeColor,w[pt.id]=k,it++)}),m(`${it} Tasten mit gleicher Farbe ersetzt`)}else if(s.bucketMode==="zone"){const st=s.targetZone||D.zone;let it=0;X.forEach(pt=>{pt.zone===st&&(A[pt.id]=s.activeColor,w[pt.id]=k,it++)}),m(`Zone "${st}" gefüllt (${it} Tasten)`)}l(st=>({...st,keyColors:A,legendColors:w})),x(s.activeColor)}},M=(D,N,X)=>{const A=nr(s.size,s.layout),w=tp(A),k={...s.keyColors},st={...s.legendColors};A.forEach(it=>{let pt=0;if(X==="horizontal")pt=(it.x+it.w/2)/w.width;else if(X==="vertical")pt=(it.y+it.h/2)/w.height;else if(X==="diagonal-down"){const Z=(it.x+it.w/2)/w.width,K=(it.y+it.h/2)/w.height;pt=(Z+K)/2}else{const Z=(it.x+it.w/2)/w.width,K=1-(it.y+it.h/2)/w.height;pt=(Z+K)/2}const dt=Qx(D,N,pt);k[it.id]=dt,st[it.id]=ou(dt)}),l(it=>({...it,keyColors:k,legendColors:st})),x(D),x(N),Ov({particleCount:45,spread:60,origin:{y:.8}}),m("Farbverlauf erfolgreich angewendet!")},S=D=>{const N=nr(s.size,s.layout),X={},A={};N.forEach(w=>{let k=D.alphas.bg,st=D.alphas.text;(w.zone==="modifiers"||w.zone==="f_row"||w.zone==="nav")&&(k=D.modifiers.bg,st=D.modifiers.text),(w.id==="esc"||w.id==="enter"||w.zone==="arrows")&&(k=D.accents.bg,st=D.accents.text),w.zone==="space"&&D.space&&(k=D.space.bg,st=D.space.text),X[w.id]=k,A[w.id]=st}),l(w=>({...w,keyColors:X,legendColors:A,caseColor:D.caseColor,caseMaterial:D.caseMaterial,activeColor:D.accents.bg})),x(D.alphas.bg),x(D.modifiers.bg),x(D.accents.bg),Ov({particleCount:50,spread:70,origin:{y:.7}}),m(`Preset "${D.name}" geladen!`)},P=()=>{if(!o.current)return;const D=o.current.captureScreenshot();LR(D,`mechanical-keyboard-${s.size}-${s.layout}.png`),m("High-Res Screenshot exportiert!")},H=()=>{NR(s),m("Design als JSON exportiert!")},O=()=>{var D;(D=e.current)==null||D.click()},I=async D=>{var X;const N=(X=D.target.files)==null?void 0:X[0];if(N)try{const A=await UR(N);l(w=>({...w,...A})),m("Design erfolgreich importiert!")}catch(A){m(`Fehler: ${A.message||"Import fehlgeschlagen"}`)}finally{e.current&&(e.current.value="")}};return U.jsxs("div",{className:"relative w-screen h-screen overflow-hidden bg-[#0c0f17] flex flex-col font-sans select-none",children:[U.jsx("input",{ref:e,type:"file",accept:".json",onChange:I,className:"hidden"}),U.jsx(CR,{size:s.size,layout:s.layout,soundEnabled:s.soundEnabled,autoRotate:s.autoRotate,onSizeChange:y,onLayoutChange:E,onToggleSound:()=>l(D=>({...D,soundEnabled:!D.soundEnabled})),onToggleAutoRotate:()=>l(D=>({...D,autoRotate:!D.autoRotate})),onResetCamera:()=>{var D;return(D=o.current)==null?void 0:D.resetCamera()},onExportScreenshot:P,onExportJSON:H,onImportJSON:O}),U.jsxs("main",{className:"relative flex-1 w-full h-[calc(100vh-4rem)]",children:[U.jsx($w,{state:s,onKeyClick:R,keyboardRef:o}),U.jsx(wR,{activeTool:s.activeTool,bucketMode:s.bucketMode,targetZone:s.targetZone,activeColor:s.activeColor,onSelectTool:D=>l(N=>({...N,activeTool:D})),onSelectBucketMode:D=>l(N=>({...N,bucketMode:D})),onSelectTargetZone:D=>l(N=>({...N,targetZone:D})),onOpenGradientModal:()=>h(!0),onToggleCustomizer:()=>p(D=>!D),isCustomizerOpen:d}),U.jsx(RR,{state:s,isOpen:d,onToggleOpen:()=>p(D=>!D),onColorChange:D=>{l(N=>({...N,activeColor:D})),x(D)},onApplyPreset:S,onCaseChange:(D,N)=>l(X=>({...X,caseColor:D,caseMaterial:N})),onPlateChange:D=>l(N=>({...N,plateColor:D})),onSwitchChange:D=>l(N=>({...N,switchType:D})),onRgbChange:(D,N)=>l(X=>({...X,rgbMode:D,...N?{rgbColor:N}:{}})),onToggleLegends:()=>l(D=>({...D,showLegends:!D.showLegends})),onToggleWireframe:()=>l(D=>({...D,wireframe:!D.wireframe}))})]}),U.jsx(DR,{isOpen:f,onClose:()=>h(!1),onApplyGradient:M,initialStartColor:s.activeColor}),g&&U.jsxs("div",{className:"fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-xl bg-slate-900/95 border border-indigo-500/50 text-indigo-300 text-xs font-semibold shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 flex items-center gap-2",children:[U.jsx("div",{className:"w-2 h-2 rounded-full bg-indigo-400 animate-ping"}),U.jsx("span",{children:g})]})]})};JM.createRoot(document.getElementById("root")).render(U.jsx(XM.StrictMode,{children:U.jsx(OR,{})}));
