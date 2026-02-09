(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function ag(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Iu={exports:{}},Ua={},Uu={exports:{}},ht={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function M_(){if(jp)return ht;jp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function v(U){return U===null||typeof U!="object"?null:(U=_&&U[_]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,T={};function S(U,ae,Re){this.props=U,this.context=ae,this.refs=T,this.updater=Re||y}S.prototype.isReactComponent={},S.prototype.setState=function(U,ae){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ae,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function x(){}x.prototype=S.prototype;function L(U,ae,Re){this.props=U,this.context=ae,this.refs=T,this.updater=Re||y}var N=L.prototype=new x;N.constructor=L,w(N,S.prototype),N.isPureReactComponent=!0;var P=Array.isArray,I=Object.prototype.hasOwnProperty,F={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function q(U,ae,Re){var Ye,Ke={},te=null,ue=null;if(ae!=null)for(Ye in ae.ref!==void 0&&(ue=ae.ref),ae.key!==void 0&&(te=""+ae.key),ae)I.call(ae,Ye)&&!O.hasOwnProperty(Ye)&&(Ke[Ye]=ae[Ye]);var ye=arguments.length-2;if(ye===1)Ke.children=Re;else if(1<ye){for(var ke=Array(ye),Ie=0;Ie<ye;Ie++)ke[Ie]=arguments[Ie+2];Ke.children=ke}if(U&&U.defaultProps)for(Ye in ye=U.defaultProps,ye)Ke[Ye]===void 0&&(Ke[Ye]=ye[Ye]);return{$$typeof:s,type:U,key:te,ref:ue,props:Ke,_owner:F.current}}function C(U,ae){return{$$typeof:s,type:U.type,key:ae,ref:U.ref,props:U.props,_owner:U._owner}}function b(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function V(U){var ae={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Re){return ae[Re]})}var se=/\/+/g;function J(U,ae){return typeof U=="object"&&U!==null&&U.key!=null?V(""+U.key):ae.toString(36)}function fe(U,ae,Re,Ye,Ke){var te=typeof U;(te==="undefined"||te==="boolean")&&(U=null);var ue=!1;if(U===null)ue=!0;else switch(te){case"string":case"number":ue=!0;break;case"object":switch(U.$$typeof){case s:case e:ue=!0}}if(ue)return ue=U,Ke=Ke(ue),U=Ye===""?"."+J(ue,0):Ye,P(Ke)?(Re="",U!=null&&(Re=U.replace(se,"$&/")+"/"),fe(Ke,ae,Re,"",function(Ie){return Ie})):Ke!=null&&(b(Ke)&&(Ke=C(Ke,Re+(!Ke.key||ue&&ue.key===Ke.key?"":(""+Ke.key).replace(se,"$&/")+"/")+U)),ae.push(Ke)),1;if(ue=0,Ye=Ye===""?".":Ye+":",P(U))for(var ye=0;ye<U.length;ye++){te=U[ye];var ke=Ye+J(te,ye);ue+=fe(te,ae,Re,ke,Ke)}else if(ke=v(U),typeof ke=="function")for(U=ke.call(U),ye=0;!(te=U.next()).done;)te=te.value,ke=Ye+J(te,ye++),ue+=fe(te,ae,Re,ke,Ke);else if(te==="object")throw ae=String(U),Error("Objects are not valid as a React child (found: "+(ae==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ae)+"). If you meant to render a collection of children, use an array instead.");return ue}function ce(U,ae,Re){if(U==null)return U;var Ye=[],Ke=0;return fe(U,Ye,"","",function(te){return ae.call(Re,te,Ke++)}),Ye}function oe(U){if(U._status===-1){var ae=U._result;ae=ae(),ae.then(function(Re){(U._status===0||U._status===-1)&&(U._status=1,U._result=Re)},function(Re){(U._status===0||U._status===-1)&&(U._status=2,U._result=Re)}),U._status===-1&&(U._status=0,U._result=ae)}if(U._status===1)return U._result.default;throw U._result}var K={current:null},Y={transition:null},he={ReactCurrentDispatcher:K,ReactCurrentBatchConfig:Y,ReactCurrentOwner:F};function re(){throw Error("act(...) is not supported in production builds of React.")}return ht.Children={map:ce,forEach:function(U,ae,Re){ce(U,function(){ae.apply(this,arguments)},Re)},count:function(U){var ae=0;return ce(U,function(){ae++}),ae},toArray:function(U){return ce(U,function(ae){return ae})||[]},only:function(U){if(!b(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},ht.Component=S,ht.Fragment=n,ht.Profiler=o,ht.PureComponent=L,ht.StrictMode=r,ht.Suspense=p,ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=he,ht.act=re,ht.cloneElement=function(U,ae,Re){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Ye=w({},U.props),Ke=U.key,te=U.ref,ue=U._owner;if(ae!=null){if(ae.ref!==void 0&&(te=ae.ref,ue=F.current),ae.key!==void 0&&(Ke=""+ae.key),U.type&&U.type.defaultProps)var ye=U.type.defaultProps;for(ke in ae)I.call(ae,ke)&&!O.hasOwnProperty(ke)&&(Ye[ke]=ae[ke]===void 0&&ye!==void 0?ye[ke]:ae[ke])}var ke=arguments.length-2;if(ke===1)Ye.children=Re;else if(1<ke){ye=Array(ke);for(var Ie=0;Ie<ke;Ie++)ye[Ie]=arguments[Ie+2];Ye.children=ye}return{$$typeof:s,type:U.type,key:Ke,ref:te,props:Ye,_owner:ue}},ht.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:c,_context:U},U.Consumer=U},ht.createElement=q,ht.createFactory=function(U){var ae=q.bind(null,U);return ae.type=U,ae},ht.createRef=function(){return{current:null}},ht.forwardRef=function(U){return{$$typeof:f,render:U}},ht.isValidElement=b,ht.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:oe}},ht.memo=function(U,ae){return{$$typeof:h,type:U,compare:ae===void 0?null:ae}},ht.startTransition=function(U){var ae=Y.transition;Y.transition={};try{U()}finally{Y.transition=ae}},ht.unstable_act=re,ht.useCallback=function(U,ae){return K.current.useCallback(U,ae)},ht.useContext=function(U){return K.current.useContext(U)},ht.useDebugValue=function(){},ht.useDeferredValue=function(U){return K.current.useDeferredValue(U)},ht.useEffect=function(U,ae){return K.current.useEffect(U,ae)},ht.useId=function(){return K.current.useId()},ht.useImperativeHandle=function(U,ae,Re){return K.current.useImperativeHandle(U,ae,Re)},ht.useInsertionEffect=function(U,ae){return K.current.useInsertionEffect(U,ae)},ht.useLayoutEffect=function(U,ae){return K.current.useLayoutEffect(U,ae)},ht.useMemo=function(U,ae){return K.current.useMemo(U,ae)},ht.useReducer=function(U,ae,Re){return K.current.useReducer(U,ae,Re)},ht.useRef=function(U){return K.current.useRef(U)},ht.useState=function(U){return K.current.useState(U)},ht.useSyncExternalStore=function(U,ae,Re){return K.current.useSyncExternalStore(U,ae,Re)},ht.useTransition=function(){return K.current.useTransition()},ht.version="18.3.1",ht}var Yp;function hf(){return Yp||(Yp=1,Uu.exports=M_()),Uu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp;function E_(){if(qp)return Ua;qp=1;var s=hf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(f,p,h){var g,_={},v=null,y=null;h!==void 0&&(v=""+h),p.key!==void 0&&(v=""+p.key),p.ref!==void 0&&(y=p.ref);for(g in p)r.call(p,g)&&!c.hasOwnProperty(g)&&(_[g]=p[g]);if(f&&f.defaultProps)for(g in p=f.defaultProps,p)_[g]===void 0&&(_[g]=p[g]);return{$$typeof:e,type:f,key:v,ref:y,props:_,_owner:o.current}}return Ua.Fragment=n,Ua.jsx=u,Ua.jsxs=u,Ua}var $p;function w_(){return $p||($p=1,Iu.exports=E_()),Iu.exports}var z=w_(),ji=hf();const T_=ag(ji);var ul={},Fu={exports:{}},Fn={},Ou={exports:{}},ku={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function A_(){return Kp||(Kp=1,(function(s){function e(Y,he){var re=Y.length;Y.push(he);e:for(;0<re;){var U=re-1>>>1,ae=Y[U];if(0<o(ae,he))Y[U]=he,Y[re]=ae,re=U;else break e}}function n(Y){return Y.length===0?null:Y[0]}function r(Y){if(Y.length===0)return null;var he=Y[0],re=Y.pop();if(re!==he){Y[0]=re;e:for(var U=0,ae=Y.length,Re=ae>>>1;U<Re;){var Ye=2*(U+1)-1,Ke=Y[Ye],te=Ye+1,ue=Y[te];if(0>o(Ke,re))te<ae&&0>o(ue,Ke)?(Y[U]=ue,Y[te]=re,U=te):(Y[U]=Ke,Y[Ye]=re,U=Ye);else if(te<ae&&0>o(ue,re))Y[U]=ue,Y[te]=re,U=te;else break e}}return he}function o(Y,he){var re=Y.sortIndex-he.sortIndex;return re!==0?re:Y.id-he.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var p=[],h=[],g=1,_=null,v=3,y=!1,w=!1,T=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(Y){for(var he=n(h);he!==null;){if(he.callback===null)r(h);else if(he.startTime<=Y)r(h),he.sortIndex=he.expirationTime,e(p,he);else break;he=n(h)}}function P(Y){if(T=!1,N(Y),!w)if(n(p)!==null)w=!0,oe(I);else{var he=n(h);he!==null&&K(P,he.startTime-Y)}}function I(Y,he){w=!1,T&&(T=!1,x(q),q=-1),y=!0;var re=v;try{for(N(he),_=n(p);_!==null&&(!(_.expirationTime>he)||Y&&!V());){var U=_.callback;if(typeof U=="function"){_.callback=null,v=_.priorityLevel;var ae=U(_.expirationTime<=he);he=s.unstable_now(),typeof ae=="function"?_.callback=ae:_===n(p)&&r(p),N(he)}else r(p);_=n(p)}if(_!==null)var Re=!0;else{var Ye=n(h);Ye!==null&&K(P,Ye.startTime-he),Re=!1}return Re}finally{_=null,v=re,y=!1}}var F=!1,O=null,q=-1,C=5,b=-1;function V(){return!(s.unstable_now()-b<C)}function se(){if(O!==null){var Y=s.unstable_now();b=Y;var he=!0;try{he=O(!0,Y)}finally{he?J():(F=!1,O=null)}}else F=!1}var J;if(typeof L=="function")J=function(){L(se)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,ce=fe.port2;fe.port1.onmessage=se,J=function(){ce.postMessage(null)}}else J=function(){S(se,0)};function oe(Y){O=Y,F||(F=!0,J())}function K(Y,he){q=S(function(){Y(s.unstable_now())},he)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Y){Y.callback=null},s.unstable_continueExecution=function(){w||y||(w=!0,oe(I))},s.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<Y?Math.floor(1e3/Y):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(Y){switch(v){case 1:case 2:case 3:var he=3;break;default:he=v}var re=v;v=he;try{return Y()}finally{v=re}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Y,he){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var re=v;v=Y;try{return he()}finally{v=re}},s.unstable_scheduleCallback=function(Y,he,re){var U=s.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?U+re:U):re=U,Y){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=re+ae,Y={id:g++,callback:he,priorityLevel:Y,startTime:re,expirationTime:ae,sortIndex:-1},re>U?(Y.sortIndex=re,e(h,Y),n(p)===null&&Y===n(h)&&(T?(x(q),q=-1):T=!0,K(P,re-U))):(Y.sortIndex=ae,e(p,Y),w||y||(w=!0,oe(I))),Y},s.unstable_shouldYield=V,s.unstable_wrapCallback=function(Y){var he=v;return function(){var re=v;v=he;try{return Y.apply(this,arguments)}finally{v=re}}}})(ku)),ku}var Zp;function C_(){return Zp||(Zp=1,Ou.exports=A_()),Ou.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function b_(){if(Qp)return Fn;Qp=1;var s=hf(),e=C_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function c(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},_={};function v(t){return p.call(_,t)?!0:p.call(g,t)?!1:h.test(t)?_[t]=!0:(g[t]=!0,!1)}function y(t,i,a,l){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,a,l){if(i===null||typeof i>"u"||y(t,i,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(t,i,a,l,d,m,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=m,this.removeEmptyString=E}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){S[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];S[i]=new T(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){S[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){S[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){S[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){S[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){S[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){S[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){S[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function L(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(x,L);S[i]=new T(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(x,L);S[i]=new T(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(x,L);S[i]=new T(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){S[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),S.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){S[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function N(t,i,a,l){var d=S.hasOwnProperty(i)?S[i]:null;(d!==null?d.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,a,d,l)&&(a=null),l||d===null?v(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):d.mustUseProperty?t[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,l=d.attributeNamespace,a===null?t.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,l?t.setAttributeNS(l,i,a):t.setAttribute(i,a))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),F=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),V=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),K=Symbol.for("react.offscreen"),Y=Symbol.iterator;function he(t){return t===null||typeof t!="object"?null:(t=Y&&t[Y]||t["@@iterator"],typeof t=="function"?t:null)}var re=Object.assign,U;function ae(t){if(U===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+t}var Re=!1;function Ye(t,i){if(!t||Re)return"";Re=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ne){var l=ne}Reflect.construct(t,[],i)}else{try{i.call()}catch(ne){l=ne}t.call(i.prototype)}else{try{throw Error()}catch(ne){l=ne}t()}}catch(ne){if(ne&&l&&typeof ne.stack=="string"){for(var d=ne.stack.split(`
`),m=l.stack.split(`
`),E=d.length-1,D=m.length-1;1<=E&&0<=D&&d[E]!==m[D];)D--;for(;1<=E&&0<=D;E--,D--)if(d[E]!==m[D]){if(E!==1||D!==1)do if(E--,D--,0>D||d[E]!==m[D]){var k=`
`+d[E].replace(" at new "," at ");return t.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",t.displayName)),k}while(1<=E&&0<=D);break}}}finally{Re=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?ae(t):""}function Ke(t){switch(t.tag){case 5:return ae(t.type);case 16:return ae("Lazy");case 13:return ae("Suspense");case 19:return ae("SuspenseList");case 0:case 2:case 15:return t=Ye(t.type,!1),t;case 11:return t=Ye(t.type.render,!1),t;case 1:return t=Ye(t.type,!0),t;default:return""}}function te(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case F:return"Portal";case C:return"Profiler";case q:return"StrictMode";case J:return"Suspense";case fe:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case V:return(t.displayName||"Context")+".Consumer";case b:return(t._context.displayName||"Context")+".Provider";case se:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ce:return i=t.displayName||null,i!==null?i:te(t.type)||"Memo";case oe:i=t._payload,t=t._init;try{return te(t(i))}catch{}}return null}function ue(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(i);case 8:return i===q?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ye(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ke(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ie(t){var i=ke(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(E){l=""+E,m.call(this,E)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function pt(t){t._valueTracker||(t._valueTracker=Ie(t))}function $t(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=ke(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function ft(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xt(t,i){var a=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function Pt(t,i){var a=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;a=ye(i.value!=null?i.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function lt(t,i){i=i.checked,i!=null&&N(t,"checked",i,!1)}function zt(t,i){lt(t,i);var a=ye(i.value),l=i.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Vt(t,i.type,a):i.hasOwnProperty("defaultValue")&&Vt(t,i.type,ye(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function B(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Vt(t,i,a){(i!=="number"||ft(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var gt=Array.isArray;function St(t,i,a,l){if(t=t.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<t.length;a++)d=i.hasOwnProperty("$"+t[a].value),t[a].selected!==d&&(t[a].selected=d),d&&l&&(t[a].defaultSelected=!0)}else{for(a=""+ye(a),i=null,d=0;d<t.length;d++){if(t[d].value===a){t[d].selected=!0,l&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function We(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function R(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(gt(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:ye(a)}}function M(t,i){var a=ye(i.value),l=ye(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function W(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function de(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function me(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?de(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var le,qe=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,l,d){MSApp.execUnsafeLocalFunction(function(){return t(i,a,l,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(le=le||document.createElement("div"),le.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=le.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function we(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Be={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nt=["Webkit","ms","Moz","O"];Object.keys(Be).forEach(function(t){nt.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Be[i]=Be[t]})});function Se(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Be.hasOwnProperty(t)&&Be[t]?(""+i).trim():i+"px"}function be(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var l=a.indexOf("--")===0,d=Se(a,i[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,d):t[a]=d}}var Ge=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xe(t,i){if(i){if(Ge[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Ae(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ot=null;function G(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Le=null,Me=null,De=null;function ve(t){if(t=Sa(t)){if(typeof Le!="function")throw Error(n(280));var i=t.stateNode;i&&(i=To(i),Le(t.stateNode,t.type,i))}}function pe(t){Me?De?De.push(t):De=[t]:Me=t}function Ce(){if(Me){var t=Me,i=De;if(De=Me=null,ve(t),i)for(t=0;t<i.length;t++)ve(i[t])}}function it(t,i){return t(i)}function Nt(){}var yt=!1;function Bn(t,i,a){if(yt)return t(i,a);yt=!0;try{return it(t,i,a)}finally{yt=!1,(Me!==null||De!==null)&&(Nt(),Ce())}}function Tn(t,i){var a=t.stateNode;if(a===null)return null;var l=To(a);if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var Js=!1;if(f)try{var tr={};Object.defineProperty(tr,"passive",{get:function(){Js=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{Js=!1}function ea(t,i,a,l,d,m,E,D,k){var ne=Array.prototype.slice.call(arguments,3);try{i.apply(a,ne)}catch(_e){this.onError(_e)}}var Pr=!1,Lr=null,Dr=!1,si=null,ta={onError:function(t){Pr=!0,Lr=t}};function io(t,i,a,l,d,m,E,D,k){Pr=!1,Lr=null,ea.apply(ta,arguments)}function ro(t,i,a,l,d,m,E,D,k){if(io.apply(this,arguments),Pr){if(Pr){var ne=Lr;Pr=!1,Lr=null}else throw Error(n(198));Dr||(Dr=!0,si=ne)}}function Yn(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function na(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Nr(t){if(Yn(t)!==t)throw Error(n(188))}function so(t){var i=t.alternate;if(!i){if(i=Yn(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,l=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(l=d.return,l!==null){a=l;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return Nr(d),t;if(m===l)return Nr(d),i;m=m.sibling}throw Error(n(188))}if(a.return!==l.return)a=d,l=m;else{for(var E=!1,D=d.child;D;){if(D===a){E=!0,a=d,l=m;break}if(D===l){E=!0,l=d,a=m;break}D=D.sibling}if(!E){for(D=m.child;D;){if(D===a){E=!0,a=m,l=d;break}if(D===l){E=!0,l=m,a=d;break}D=D.sibling}if(!E)throw Error(n(189))}}if(a.alternate!==l)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function ia(t){return t=so(t),t!==null?ao(t):null}function ao(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=ao(t);if(i!==null)return i;t=t.sibling}return null}var oo=e.unstable_scheduleCallback,lo=e.unstable_cancelCallback,ic=e.unstable_shouldYield,rc=e.unstable_requestPaint,Ht=e.unstable_now,A=e.unstable_getCurrentPriorityLevel,X=e.unstable_ImmediatePriority,ie=e.unstable_UserBlockingPriority,ee=e.unstable_NormalPriority,Z=e.unstable_LowPriority,Pe=e.unstable_IdlePriority,Ue=null,Te=null;function Ve(t){if(Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(Ue,t,void 0,(t.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:ut,tt=Math.log,Ze=Math.LN2;function ut(t){return t>>>=0,t===0?32:31-(tt(t)/Ze|0)|0}var Mt=64,Ft=4194304;function Ut(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Tt(t,i){var a=t.pendingLanes;if(a===0)return 0;var l=0,d=t.suspendedLanes,m=t.pingedLanes,E=a&268435455;if(E!==0){var D=E&~d;D!==0?l=Ut(D):(m&=E,m!==0&&(l=Ut(m)))}else E=a&~d,E!==0?l=Ut(E):m!==0&&(l=Ut(m));if(l===0)return 0;if(i!==0&&i!==l&&(i&d)===0&&(d=l&-l,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((l&4)!==0&&(l|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)a=31-Oe(i),d=1<<a,l|=t[a],i&=~d;return l}function Qe(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bt(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,d=t.expirationTimes,m=t.pendingLanes;0<m;){var E=31-Oe(m),D=1<<E,k=d[E];k===-1?((D&a)===0||(D&l)!==0)&&(d[E]=Qe(D,i)):k<=i&&(t.expiredLanes|=D),m&=~D}}function _t(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function gn(){var t=Mt;return Mt<<=1,(Mt&4194240)===0&&(Mt=64),t}function _i(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function Jt(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Oe(i),t[i]=a}function Ir(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var d=31-Oe(a),m=1<<d;i[d]=0,l[d]=-1,t[d]=-1,a&=~m}}function Lt(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-Oe(a),d=1<<l;d&i|t[l]&i&&(t[l]|=i),a&=~d}}var at=0;function An(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var sn,an,ss,vi,bf,sc=!1,co=[],nr=null,ir=null,rr=null,ra=new Map,sa=new Map,sr=[],Wg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rf(t,i){switch(t){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":ra.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":sa.delete(i.pointerId)}}function aa(t,i,a,l,d,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Sa(i),i!==null&&an(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function Xg(t,i,a,l,d){switch(i){case"focusin":return nr=aa(nr,t,i,a,l,d),!0;case"dragenter":return ir=aa(ir,t,i,a,l,d),!0;case"mouseover":return rr=aa(rr,t,i,a,l,d),!0;case"pointerover":var m=d.pointerId;return ra.set(m,aa(ra.get(m)||null,t,i,a,l,d)),!0;case"gotpointercapture":return m=d.pointerId,sa.set(m,aa(sa.get(m)||null,t,i,a,l,d)),!0}return!1}function Pf(t){var i=Ur(t.target);if(i!==null){var a=Yn(i);if(a!==null){if(i=a.tag,i===13){if(i=na(a),i!==null){t.blockedOn=i,bf(t.priority,function(){ss(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function uo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=oc(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);ot=l,a.target.dispatchEvent(l),ot=null}else return i=Sa(a),i!==null&&an(i),t.blockedOn=a,!1;i.shift()}return!0}function Lf(t,i,a){uo(t)&&a.delete(i)}function jg(){sc=!1,nr!==null&&uo(nr)&&(nr=null),ir!==null&&uo(ir)&&(ir=null),rr!==null&&uo(rr)&&(rr=null),ra.forEach(Lf),sa.forEach(Lf)}function oa(t,i){t.blockedOn===i&&(t.blockedOn=null,sc||(sc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,jg)))}function la(t){function i(d){return oa(d,t)}if(0<co.length){oa(co[0],t);for(var a=1;a<co.length;a++){var l=co[a];l.blockedOn===t&&(l.blockedOn=null)}}for(nr!==null&&oa(nr,t),ir!==null&&oa(ir,t),rr!==null&&oa(rr,t),ra.forEach(i),sa.forEach(i),a=0;a<sr.length;a++)l=sr[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<sr.length&&(a=sr[0],a.blockedOn===null);)Pf(a),a.blockedOn===null&&sr.shift()}var as=P.ReactCurrentBatchConfig,fo=!0;function Yg(t,i,a,l){var d=at,m=as.transition;as.transition=null;try{at=1,ac(t,i,a,l)}finally{at=d,as.transition=m}}function qg(t,i,a,l){var d=at,m=as.transition;as.transition=null;try{at=4,ac(t,i,a,l)}finally{at=d,as.transition=m}}function ac(t,i,a,l){if(fo){var d=oc(t,i,a,l);if(d===null)wc(t,i,l,ho,a),Rf(t,l);else if(Xg(d,t,i,a,l))l.stopPropagation();else if(Rf(t,l),i&4&&-1<Wg.indexOf(t)){for(;d!==null;){var m=Sa(d);if(m!==null&&sn(m),m=oc(t,i,a,l),m===null&&wc(t,i,l,ho,a),m===d)break;d=m}d!==null&&l.stopPropagation()}else wc(t,i,l,null,a)}}var ho=null;function oc(t,i,a,l){if(ho=null,t=G(l),t=Ur(t),t!==null)if(i=Yn(t),i===null)t=null;else if(a=i.tag,a===13){if(t=na(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ho=t,null}function Df(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(A()){case X:return 1;case ie:return 4;case ee:case Z:return 16;case Pe:return 536870912;default:return 16}default:return 16}}var ar=null,lc=null,po=null;function Nf(){if(po)return po;var t,i=lc,a=i.length,l,d="value"in ar?ar.value:ar.textContent,m=d.length;for(t=0;t<a&&i[t]===d[t];t++);var E=a-t;for(l=1;l<=E&&i[a-l]===d[m-l];l++);return po=d.slice(t,1<l?1-l:void 0)}function mo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function go(){return!0}function If(){return!1}function zn(t){function i(a,l,d,m,E){this._reactName=a,this._targetInst=d,this.type=l,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(a=t[D],this[D]=a?a(m):m[D]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?go:If,this.isPropagationStopped=If,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=go)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=go)},persist:function(){},isPersistent:go}),i}var os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cc=zn(os),ca=re({},os,{view:0,detail:0}),$g=zn(ca),uc,dc,ua,_o=re({},ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ua&&(ua&&t.type==="mousemove"?(uc=t.screenX-ua.screenX,dc=t.screenY-ua.screenY):dc=uc=0,ua=t),uc)},movementY:function(t){return"movementY"in t?t.movementY:dc}}),Uf=zn(_o),Kg=re({},_o,{dataTransfer:0}),Zg=zn(Kg),Qg=re({},ca,{relatedTarget:0}),fc=zn(Qg),Jg=re({},os,{animationName:0,elapsedTime:0,pseudoElement:0}),e0=zn(Jg),t0=re({},os,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),n0=zn(t0),i0=re({},os,{data:0}),Ff=zn(i0),r0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},s0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},a0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function o0(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=a0[t])?!!i[t]:!1}function hc(){return o0}var l0=re({},ca,{key:function(t){if(t.key){var i=r0[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=mo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?s0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hc,charCode:function(t){return t.type==="keypress"?mo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?mo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),c0=zn(l0),u0=re({},_o,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Of=zn(u0),d0=re({},ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hc}),f0=zn(d0),h0=re({},os,{propertyName:0,elapsedTime:0,pseudoElement:0}),p0=zn(h0),m0=re({},_o,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),g0=zn(m0),_0=[9,13,27,32],pc=f&&"CompositionEvent"in window,da=null;f&&"documentMode"in document&&(da=document.documentMode);var v0=f&&"TextEvent"in window&&!da,kf=f&&(!pc||da&&8<da&&11>=da),Bf=" ",zf=!1;function Vf(t,i){switch(t){case"keyup":return _0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ls=!1;function x0(t,i){switch(t){case"compositionend":return Gf(i);case"keypress":return i.which!==32?null:(zf=!0,Bf);case"textInput":return t=i.data,t===Bf&&zf?null:t;default:return null}}function S0(t,i){if(ls)return t==="compositionend"||!pc&&Vf(t,i)?(t=Nf(),po=lc=ar=null,ls=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return kf&&i.locale!=="ko"?null:i.data;default:return null}}var y0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!y0[t.type]:i==="textarea"}function Wf(t,i,a,l){pe(l),i=Mo(i,"onChange"),0<i.length&&(a=new cc("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var fa=null,ha=null;function M0(t){lh(t,0)}function vo(t){var i=hs(t);if($t(i))return t}function E0(t,i){if(t==="change")return i}var Xf=!1;if(f){var mc;if(f){var gc="oninput"in document;if(!gc){var jf=document.createElement("div");jf.setAttribute("oninput","return;"),gc=typeof jf.oninput=="function"}mc=gc}else mc=!1;Xf=mc&&(!document.documentMode||9<document.documentMode)}function Yf(){fa&&(fa.detachEvent("onpropertychange",qf),ha=fa=null)}function qf(t){if(t.propertyName==="value"&&vo(ha)){var i=[];Wf(i,ha,t,G(t)),Bn(M0,i)}}function w0(t,i,a){t==="focusin"?(Yf(),fa=i,ha=a,fa.attachEvent("onpropertychange",qf)):t==="focusout"&&Yf()}function T0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vo(ha)}function A0(t,i){if(t==="click")return vo(i)}function C0(t,i){if(t==="input"||t==="change")return vo(i)}function b0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ai=typeof Object.is=="function"?Object.is:b0;function pa(t,i){if(ai(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var d=a[l];if(!p.call(i,d)||!ai(t[d],i[d]))return!1}return!0}function $f(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kf(t,i){var a=$f(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=$f(a)}}function Zf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Zf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Qf(){for(var t=window,i=ft();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=ft(t.document)}return i}function _c(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function R0(t){var i=Qf(),a=t.focusedElem,l=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&Zf(a.ownerDocument.documentElement,a)){if(l!==null&&_c(a)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=a.textContent.length,m=Math.min(l.start,d);l=l.end===void 0?m:Math.min(l.end,d),!t.extend&&m>l&&(d=l,l=m,m=d),d=Kf(a,m);var E=Kf(a,l);d&&E&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),m>l?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var P0=f&&"documentMode"in document&&11>=document.documentMode,cs=null,vc=null,ma=null,xc=!1;function Jf(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;xc||cs==null||cs!==ft(l)||(l=cs,"selectionStart"in l&&_c(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ma&&pa(ma,l)||(ma=l,l=Mo(vc,"onSelect"),0<l.length&&(i=new cc("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=cs)))}function xo(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var us={animationend:xo("Animation","AnimationEnd"),animationiteration:xo("Animation","AnimationIteration"),animationstart:xo("Animation","AnimationStart"),transitionend:xo("Transition","TransitionEnd")},Sc={},eh={};f&&(eh=document.createElement("div").style,"AnimationEvent"in window||(delete us.animationend.animation,delete us.animationiteration.animation,delete us.animationstart.animation),"TransitionEvent"in window||delete us.transitionend.transition);function So(t){if(Sc[t])return Sc[t];if(!us[t])return t;var i=us[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in eh)return Sc[t]=i[a];return t}var th=So("animationend"),nh=So("animationiteration"),ih=So("animationstart"),rh=So("transitionend"),sh=new Map,ah="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(t,i){sh.set(t,i),c(i,[t])}for(var yc=0;yc<ah.length;yc++){var Mc=ah[yc],L0=Mc.toLowerCase(),D0=Mc[0].toUpperCase()+Mc.slice(1);or(L0,"on"+D0)}or(th,"onAnimationEnd"),or(nh,"onAnimationIteration"),or(ih,"onAnimationStart"),or("dblclick","onDoubleClick"),or("focusin","onFocus"),or("focusout","onBlur"),or(rh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ga="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),N0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ga));function oh(t,i,a){var l=t.type||"unknown-event";t.currentTarget=a,ro(l,i,void 0,t),t.currentTarget=null}function lh(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],d=l.event;l=l.listeners;e:{var m=void 0;if(i)for(var E=l.length-1;0<=E;E--){var D=l[E],k=D.instance,ne=D.currentTarget;if(D=D.listener,k!==m&&d.isPropagationStopped())break e;oh(d,D,ne),m=k}else for(E=0;E<l.length;E++){if(D=l[E],k=D.instance,ne=D.currentTarget,D=D.listener,k!==m&&d.isPropagationStopped())break e;oh(d,D,ne),m=k}}}if(Dr)throw t=si,Dr=!1,si=null,t}function kt(t,i){var a=i[Pc];a===void 0&&(a=i[Pc]=new Set);var l=t+"__bubble";a.has(l)||(ch(i,t,2,!1),a.add(l))}function Ec(t,i,a){var l=0;i&&(l|=4),ch(a,t,l,i)}var yo="_reactListening"+Math.random().toString(36).slice(2);function _a(t){if(!t[yo]){t[yo]=!0,r.forEach(function(a){a!=="selectionchange"&&(N0.has(a)||Ec(a,!1,t),Ec(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[yo]||(i[yo]=!0,Ec("selectionchange",!1,i))}}function ch(t,i,a,l){switch(Df(i)){case 1:var d=Yg;break;case 4:d=qg;break;default:d=ac}a=d.bind(null,i,a,t),d=void 0,!Js||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),l?d!==void 0?t.addEventListener(i,a,{capture:!0,passive:d}):t.addEventListener(i,a,!0):d!==void 0?t.addEventListener(i,a,{passive:d}):t.addEventListener(i,a,!1)}function wc(t,i,a,l,d){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var D=l.stateNode.containerInfo;if(D===d||D.nodeType===8&&D.parentNode===d)break;if(E===4)for(E=l.return;E!==null;){var k=E.tag;if((k===3||k===4)&&(k=E.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;E=E.return}for(;D!==null;){if(E=Ur(D),E===null)return;if(k=E.tag,k===5||k===6){l=m=E;continue e}D=D.parentNode}}l=l.return}Bn(function(){var ne=m,_e=G(a),xe=[];e:{var ge=sh.get(t);if(ge!==void 0){var Fe=cc,He=t;switch(t){case"keypress":if(mo(a)===0)break e;case"keydown":case"keyup":Fe=c0;break;case"focusin":He="focus",Fe=fc;break;case"focusout":He="blur",Fe=fc;break;case"beforeblur":case"afterblur":Fe=fc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Fe=Uf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Fe=Zg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Fe=f0;break;case th:case nh:case ih:Fe=e0;break;case rh:Fe=p0;break;case"scroll":Fe=$g;break;case"wheel":Fe=g0;break;case"copy":case"cut":case"paste":Fe=n0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Fe=Of}var je=(i&4)!==0,Kt=!je&&t==="scroll",$=je?ge!==null?ge+"Capture":null:ge;je=[];for(var H=ne,Q;H!==null;){Q=H;var Ee=Q.stateNode;if(Q.tag===5&&Ee!==null&&(Q=Ee,$!==null&&(Ee=Tn(H,$),Ee!=null&&je.push(va(H,Ee,Q)))),Kt)break;H=H.return}0<je.length&&(ge=new Fe(ge,He,null,a,_e),xe.push({event:ge,listeners:je}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",Fe=t==="mouseout"||t==="pointerout",ge&&a!==ot&&(He=a.relatedTarget||a.fromElement)&&(Ur(He)||He[Ni]))break e;if((Fe||ge)&&(ge=_e.window===_e?_e:(ge=_e.ownerDocument)?ge.defaultView||ge.parentWindow:window,Fe?(He=a.relatedTarget||a.toElement,Fe=ne,He=He?Ur(He):null,He!==null&&(Kt=Yn(He),He!==Kt||He.tag!==5&&He.tag!==6)&&(He=null)):(Fe=null,He=ne),Fe!==He)){if(je=Uf,Ee="onMouseLeave",$="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(je=Of,Ee="onPointerLeave",$="onPointerEnter",H="pointer"),Kt=Fe==null?ge:hs(Fe),Q=He==null?ge:hs(He),ge=new je(Ee,H+"leave",Fe,a,_e),ge.target=Kt,ge.relatedTarget=Q,Ee=null,Ur(_e)===ne&&(je=new je($,H+"enter",He,a,_e),je.target=Q,je.relatedTarget=Kt,Ee=je),Kt=Ee,Fe&&He)t:{for(je=Fe,$=He,H=0,Q=je;Q;Q=ds(Q))H++;for(Q=0,Ee=$;Ee;Ee=ds(Ee))Q++;for(;0<H-Q;)je=ds(je),H--;for(;0<Q-H;)$=ds($),Q--;for(;H--;){if(je===$||$!==null&&je===$.alternate)break t;je=ds(je),$=ds($)}je=null}else je=null;Fe!==null&&uh(xe,ge,Fe,je,!1),He!==null&&Kt!==null&&uh(xe,Kt,He,je,!0)}}e:{if(ge=ne?hs(ne):window,Fe=ge.nodeName&&ge.nodeName.toLowerCase(),Fe==="select"||Fe==="input"&&ge.type==="file")var $e=E0;else if(Hf(ge))if(Xf)$e=C0;else{$e=T0;var Je=w0}else(Fe=ge.nodeName)&&Fe.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&($e=A0);if($e&&($e=$e(t,ne))){Wf(xe,$e,a,_e);break e}Je&&Je(t,ge,ne),t==="focusout"&&(Je=ge._wrapperState)&&Je.controlled&&ge.type==="number"&&Vt(ge,"number",ge.value)}switch(Je=ne?hs(ne):window,t){case"focusin":(Hf(Je)||Je.contentEditable==="true")&&(cs=Je,vc=ne,ma=null);break;case"focusout":ma=vc=cs=null;break;case"mousedown":xc=!0;break;case"contextmenu":case"mouseup":case"dragend":xc=!1,Jf(xe,a,_e);break;case"selectionchange":if(P0)break;case"keydown":case"keyup":Jf(xe,a,_e)}var et;if(pc)e:{switch(t){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else ls?Vf(t,a)&&(rt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(rt="onCompositionStart");rt&&(kf&&a.locale!=="ko"&&(ls||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&ls&&(et=Nf()):(ar=_e,lc="value"in ar?ar.value:ar.textContent,ls=!0)),Je=Mo(ne,rt),0<Je.length&&(rt=new Ff(rt,t,null,a,_e),xe.push({event:rt,listeners:Je}),et?rt.data=et:(et=Gf(a),et!==null&&(rt.data=et)))),(et=v0?x0(t,a):S0(t,a))&&(ne=Mo(ne,"onBeforeInput"),0<ne.length&&(_e=new Ff("onBeforeInput","beforeinput",null,a,_e),xe.push({event:_e,listeners:ne}),_e.data=et))}lh(xe,i)})}function va(t,i,a){return{instance:t,listener:i,currentTarget:a}}function Mo(t,i){for(var a=i+"Capture",l=[];t!==null;){var d=t,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=Tn(t,a),m!=null&&l.unshift(va(t,m,d)),m=Tn(t,i),m!=null&&l.push(va(t,m,d))),t=t.return}return l}function ds(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function uh(t,i,a,l,d){for(var m=i._reactName,E=[];a!==null&&a!==l;){var D=a,k=D.alternate,ne=D.stateNode;if(k!==null&&k===l)break;D.tag===5&&ne!==null&&(D=ne,d?(k=Tn(a,m),k!=null&&E.unshift(va(a,k,D))):d||(k=Tn(a,m),k!=null&&E.push(va(a,k,D)))),a=a.return}E.length!==0&&t.push({event:i,listeners:E})}var I0=/\r\n?/g,U0=/\u0000|\uFFFD/g;function dh(t){return(typeof t=="string"?t:""+t).replace(I0,`
`).replace(U0,"")}function Eo(t,i,a){if(i=dh(i),dh(t)!==i&&a)throw Error(n(425))}function wo(){}var Tc=null,Ac=null;function Cc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var bc=typeof setTimeout=="function"?setTimeout:void 0,F0=typeof clearTimeout=="function"?clearTimeout:void 0,fh=typeof Promise=="function"?Promise:void 0,O0=typeof queueMicrotask=="function"?queueMicrotask:typeof fh<"u"?function(t){return fh.resolve(null).then(t).catch(k0)}:bc;function k0(t){setTimeout(function(){throw t})}function Rc(t,i){var a=i,l=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(l===0){t.removeChild(d),la(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=d}while(a);la(i)}function lr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function hh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var fs=Math.random().toString(36).slice(2),xi="__reactFiber$"+fs,xa="__reactProps$"+fs,Ni="__reactContainer$"+fs,Pc="__reactEvents$"+fs,B0="__reactListeners$"+fs,z0="__reactHandles$"+fs;function Ur(t){var i=t[xi];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Ni]||a[xi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=hh(t);t!==null;){if(a=t[xi])return a;t=hh(t)}return i}t=a,a=t.parentNode}return null}function Sa(t){return t=t[xi]||t[Ni],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function hs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function To(t){return t[xa]||null}var Lc=[],ps=-1;function cr(t){return{current:t}}function Bt(t){0>ps||(t.current=Lc[ps],Lc[ps]=null,ps--)}function Ot(t,i){ps++,Lc[ps]=t.current,t.current=i}var ur={},_n=cr(ur),Ln=cr(!1),Fr=ur;function ms(t,i){var a=t.type.contextTypes;if(!a)return ur;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function Dn(t){return t=t.childContextTypes,t!=null}function Ao(){Bt(Ln),Bt(_n)}function ph(t,i,a){if(_n.current!==ur)throw Error(n(168));Ot(_n,i),Ot(Ln,a)}function mh(t,i,a){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var d in l)if(!(d in i))throw Error(n(108,ue(t)||"Unknown",d));return re({},a,l)}function Co(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ur,Fr=_n.current,Ot(_n,t),Ot(Ln,Ln.current),!0}function gh(t,i,a){var l=t.stateNode;if(!l)throw Error(n(169));a?(t=mh(t,i,Fr),l.__reactInternalMemoizedMergedChildContext=t,Bt(Ln),Bt(_n),Ot(_n,t)):Bt(Ln),Ot(Ln,a)}var Ii=null,bo=!1,Dc=!1;function _h(t){Ii===null?Ii=[t]:Ii.push(t)}function V0(t){bo=!0,_h(t)}function dr(){if(!Dc&&Ii!==null){Dc=!0;var t=0,i=at;try{var a=Ii;for(at=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}Ii=null,bo=!1}catch(d){throw Ii!==null&&(Ii=Ii.slice(t+1)),oo(X,dr),d}finally{at=i,Dc=!1}}return null}var gs=[],_s=0,Ro=null,Po=0,qn=[],$n=0,Or=null,Ui=1,Fi="";function kr(t,i){gs[_s++]=Po,gs[_s++]=Ro,Ro=t,Po=i}function vh(t,i,a){qn[$n++]=Ui,qn[$n++]=Fi,qn[$n++]=Or,Or=t;var l=Ui;t=Fi;var d=32-Oe(l)-1;l&=~(1<<d),a+=1;var m=32-Oe(i)+d;if(30<m){var E=d-d%5;m=(l&(1<<E)-1).toString(32),l>>=E,d-=E,Ui=1<<32-Oe(i)+d|a<<d|l,Fi=m+t}else Ui=1<<m|a<<d|l,Fi=t}function Nc(t){t.return!==null&&(kr(t,1),vh(t,1,0))}function Ic(t){for(;t===Ro;)Ro=gs[--_s],gs[_s]=null,Po=gs[--_s],gs[_s]=null;for(;t===Or;)Or=qn[--$n],qn[$n]=null,Fi=qn[--$n],qn[$n]=null,Ui=qn[--$n],qn[$n]=null}var Vn=null,Gn=null,Gt=!1,oi=null;function xh(t,i){var a=Jn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function Sh(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Vn=t,Gn=lr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Vn=t,Gn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Or!==null?{id:Ui,overflow:Fi}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Jn(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,Vn=t,Gn=null,!0):!1;default:return!1}}function Uc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Fc(t){if(Gt){var i=Gn;if(i){var a=i;if(!Sh(t,i)){if(Uc(t))throw Error(n(418));i=lr(a.nextSibling);var l=Vn;i&&Sh(t,i)?xh(l,a):(t.flags=t.flags&-4097|2,Gt=!1,Vn=t)}}else{if(Uc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Gt=!1,Vn=t}}}function yh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Vn=t}function Lo(t){if(t!==Vn)return!1;if(!Gt)return yh(t),Gt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Cc(t.type,t.memoizedProps)),i&&(i=Gn)){if(Uc(t))throw Mh(),Error(n(418));for(;i;)xh(t,i),i=lr(i.nextSibling)}if(yh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){Gn=lr(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}Gn=null}}else Gn=Vn?lr(t.stateNode.nextSibling):null;return!0}function Mh(){for(var t=Gn;t;)t=lr(t.nextSibling)}function vs(){Gn=Vn=null,Gt=!1}function Oc(t){oi===null?oi=[t]:oi.push(t)}var G0=P.ReactCurrentBatchConfig;function ya(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var l=a.stateNode}if(!l)throw Error(n(147,t));var d=l,m=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(E){var D=d.refs;E===null?delete D[m]:D[m]=E},i._stringRef=m,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function Do(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Eh(t){var i=t._init;return i(t._payload)}function wh(t){function i($,H){if(t){var Q=$.deletions;Q===null?($.deletions=[H],$.flags|=16):Q.push(H)}}function a($,H){if(!t)return null;for(;H!==null;)i($,H),H=H.sibling;return null}function l($,H){for($=new Map;H!==null;)H.key!==null?$.set(H.key,H):$.set(H.index,H),H=H.sibling;return $}function d($,H){return $=xr($,H),$.index=0,$.sibling=null,$}function m($,H,Q){return $.index=Q,t?(Q=$.alternate,Q!==null?(Q=Q.index,Q<H?($.flags|=2,H):Q):($.flags|=2,H)):($.flags|=1048576,H)}function E($){return t&&$.alternate===null&&($.flags|=2),$}function D($,H,Q,Ee){return H===null||H.tag!==6?(H=bu(Q,$.mode,Ee),H.return=$,H):(H=d(H,Q),H.return=$,H)}function k($,H,Q,Ee){var $e=Q.type;return $e===O?_e($,H,Q.props.children,Ee,Q.key):H!==null&&(H.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===oe&&Eh($e)===H.type)?(Ee=d(H,Q.props),Ee.ref=ya($,H,Q),Ee.return=$,Ee):(Ee=nl(Q.type,Q.key,Q.props,null,$.mode,Ee),Ee.ref=ya($,H,Q),Ee.return=$,Ee)}function ne($,H,Q,Ee){return H===null||H.tag!==4||H.stateNode.containerInfo!==Q.containerInfo||H.stateNode.implementation!==Q.implementation?(H=Ru(Q,$.mode,Ee),H.return=$,H):(H=d(H,Q.children||[]),H.return=$,H)}function _e($,H,Q,Ee,$e){return H===null||H.tag!==7?(H=jr(Q,$.mode,Ee,$e),H.return=$,H):(H=d(H,Q),H.return=$,H)}function xe($,H,Q){if(typeof H=="string"&&H!==""||typeof H=="number")return H=bu(""+H,$.mode,Q),H.return=$,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case I:return Q=nl(H.type,H.key,H.props,null,$.mode,Q),Q.ref=ya($,null,H),Q.return=$,Q;case F:return H=Ru(H,$.mode,Q),H.return=$,H;case oe:var Ee=H._init;return xe($,Ee(H._payload),Q)}if(gt(H)||he(H))return H=jr(H,$.mode,Q,null),H.return=$,H;Do($,H)}return null}function ge($,H,Q,Ee){var $e=H!==null?H.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number")return $e!==null?null:D($,H,""+Q,Ee);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case I:return Q.key===$e?k($,H,Q,Ee):null;case F:return Q.key===$e?ne($,H,Q,Ee):null;case oe:return $e=Q._init,ge($,H,$e(Q._payload),Ee)}if(gt(Q)||he(Q))return $e!==null?null:_e($,H,Q,Ee,null);Do($,Q)}return null}function Fe($,H,Q,Ee,$e){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return $=$.get(Q)||null,D(H,$,""+Ee,$e);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case I:return $=$.get(Ee.key===null?Q:Ee.key)||null,k(H,$,Ee,$e);case F:return $=$.get(Ee.key===null?Q:Ee.key)||null,ne(H,$,Ee,$e);case oe:var Je=Ee._init;return Fe($,H,Q,Je(Ee._payload),$e)}if(gt(Ee)||he(Ee))return $=$.get(Q)||null,_e(H,$,Ee,$e,null);Do(H,Ee)}return null}function He($,H,Q,Ee){for(var $e=null,Je=null,et=H,rt=H=0,cn=null;et!==null&&rt<Q.length;rt++){et.index>rt?(cn=et,et=null):cn=et.sibling;var At=ge($,et,Q[rt],Ee);if(At===null){et===null&&(et=cn);break}t&&et&&At.alternate===null&&i($,et),H=m(At,H,rt),Je===null?$e=At:Je.sibling=At,Je=At,et=cn}if(rt===Q.length)return a($,et),Gt&&kr($,rt),$e;if(et===null){for(;rt<Q.length;rt++)et=xe($,Q[rt],Ee),et!==null&&(H=m(et,H,rt),Je===null?$e=et:Je.sibling=et,Je=et);return Gt&&kr($,rt),$e}for(et=l($,et);rt<Q.length;rt++)cn=Fe(et,$,rt,Q[rt],Ee),cn!==null&&(t&&cn.alternate!==null&&et.delete(cn.key===null?rt:cn.key),H=m(cn,H,rt),Je===null?$e=cn:Je.sibling=cn,Je=cn);return t&&et.forEach(function(Sr){return i($,Sr)}),Gt&&kr($,rt),$e}function je($,H,Q,Ee){var $e=he(Q);if(typeof $e!="function")throw Error(n(150));if(Q=$e.call(Q),Q==null)throw Error(n(151));for(var Je=$e=null,et=H,rt=H=0,cn=null,At=Q.next();et!==null&&!At.done;rt++,At=Q.next()){et.index>rt?(cn=et,et=null):cn=et.sibling;var Sr=ge($,et,At.value,Ee);if(Sr===null){et===null&&(et=cn);break}t&&et&&Sr.alternate===null&&i($,et),H=m(Sr,H,rt),Je===null?$e=Sr:Je.sibling=Sr,Je=Sr,et=cn}if(At.done)return a($,et),Gt&&kr($,rt),$e;if(et===null){for(;!At.done;rt++,At=Q.next())At=xe($,At.value,Ee),At!==null&&(H=m(At,H,rt),Je===null?$e=At:Je.sibling=At,Je=At);return Gt&&kr($,rt),$e}for(et=l($,et);!At.done;rt++,At=Q.next())At=Fe(et,$,rt,At.value,Ee),At!==null&&(t&&At.alternate!==null&&et.delete(At.key===null?rt:At.key),H=m(At,H,rt),Je===null?$e=At:Je.sibling=At,Je=At);return t&&et.forEach(function(y_){return i($,y_)}),Gt&&kr($,rt),$e}function Kt($,H,Q,Ee){if(typeof Q=="object"&&Q!==null&&Q.type===O&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case I:e:{for(var $e=Q.key,Je=H;Je!==null;){if(Je.key===$e){if($e=Q.type,$e===O){if(Je.tag===7){a($,Je.sibling),H=d(Je,Q.props.children),H.return=$,$=H;break e}}else if(Je.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===oe&&Eh($e)===Je.type){a($,Je.sibling),H=d(Je,Q.props),H.ref=ya($,Je,Q),H.return=$,$=H;break e}a($,Je);break}else i($,Je);Je=Je.sibling}Q.type===O?(H=jr(Q.props.children,$.mode,Ee,Q.key),H.return=$,$=H):(Ee=nl(Q.type,Q.key,Q.props,null,$.mode,Ee),Ee.ref=ya($,H,Q),Ee.return=$,$=Ee)}return E($);case F:e:{for(Je=Q.key;H!==null;){if(H.key===Je)if(H.tag===4&&H.stateNode.containerInfo===Q.containerInfo&&H.stateNode.implementation===Q.implementation){a($,H.sibling),H=d(H,Q.children||[]),H.return=$,$=H;break e}else{a($,H);break}else i($,H);H=H.sibling}H=Ru(Q,$.mode,Ee),H.return=$,$=H}return E($);case oe:return Je=Q._init,Kt($,H,Je(Q._payload),Ee)}if(gt(Q))return He($,H,Q,Ee);if(he(Q))return je($,H,Q,Ee);Do($,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"?(Q=""+Q,H!==null&&H.tag===6?(a($,H.sibling),H=d(H,Q),H.return=$,$=H):(a($,H),H=bu(Q,$.mode,Ee),H.return=$,$=H),E($)):a($,H)}return Kt}var xs=wh(!0),Th=wh(!1),No=cr(null),Io=null,Ss=null,kc=null;function Bc(){kc=Ss=Io=null}function zc(t){var i=No.current;Bt(No),t._currentValue=i}function Vc(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function ys(t,i){Io=t,kc=Ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Nn=!0),t.firstContext=null)}function Kn(t){var i=t._currentValue;if(kc!==t)if(t={context:t,memoizedValue:i,next:null},Ss===null){if(Io===null)throw Error(n(308));Ss=t,Io.dependencies={lanes:0,firstContext:t}}else Ss=Ss.next=t;return i}var Br=null;function Gc(t){Br===null?Br=[t]:Br.push(t)}function Ah(t,i,a,l){var d=i.interleaved;return d===null?(a.next=a,Gc(i)):(a.next=d.next,d.next=a),i.interleaved=a,Oi(t,l)}function Oi(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var fr=!1;function Hc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ch(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ki(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function hr(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Et&2)!==0){var d=l.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),l.pending=i,Oi(t,a)}return d=l.interleaved,d===null?(i.next=i,Gc(l)):(i.next=d.next,d.next=i),l.interleaved=i,Oi(t,a)}function Uo(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Lt(t,a)}}function bh(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=E:m=m.next=E,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function Fo(t,i,a,l){var d=t.updateQueue;fr=!1;var m=d.firstBaseUpdate,E=d.lastBaseUpdate,D=d.shared.pending;if(D!==null){d.shared.pending=null;var k=D,ne=k.next;k.next=null,E===null?m=ne:E.next=ne,E=k;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,D=_e.lastBaseUpdate,D!==E&&(D===null?_e.firstBaseUpdate=ne:D.next=ne,_e.lastBaseUpdate=k))}if(m!==null){var xe=d.baseState;E=0,_e=ne=k=null,D=m;do{var ge=D.lane,Fe=D.eventTime;if((l&ge)===ge){_e!==null&&(_e=_e.next={eventTime:Fe,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var He=t,je=D;switch(ge=i,Fe=a,je.tag){case 1:if(He=je.payload,typeof He=="function"){xe=He.call(Fe,xe,ge);break e}xe=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=je.payload,ge=typeof He=="function"?He.call(Fe,xe,ge):He,ge==null)break e;xe=re({},xe,ge);break e;case 2:fr=!0}}D.callback!==null&&D.lane!==0&&(t.flags|=64,ge=d.effects,ge===null?d.effects=[D]:ge.push(D))}else Fe={eventTime:Fe,lane:ge,tag:D.tag,payload:D.payload,callback:D.callback,next:null},_e===null?(ne=_e=Fe,k=xe):_e=_e.next=Fe,E|=ge;if(D=D.next,D===null){if(D=d.shared.pending,D===null)break;ge=D,D=ge.next,ge.next=null,d.lastBaseUpdate=ge,d.shared.pending=null}}while(!0);if(_e===null&&(k=xe),d.baseState=k,d.firstBaseUpdate=ne,d.lastBaseUpdate=_e,i=d.shared.interleaved,i!==null){d=i;do E|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Gr|=E,t.lanes=E,t.memoizedState=xe}}function Rh(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],d=l.callback;if(d!==null){if(l.callback=null,l=a,typeof d!="function")throw Error(n(191,d));d.call(l)}}}var Ma={},Si=cr(Ma),Ea=cr(Ma),wa=cr(Ma);function zr(t){if(t===Ma)throw Error(n(174));return t}function Wc(t,i){switch(Ot(wa,i),Ot(Ea,t),Ot(Si,Ma),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:me(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=me(i,t)}Bt(Si),Ot(Si,i)}function Ms(){Bt(Si),Bt(Ea),Bt(wa)}function Ph(t){zr(wa.current);var i=zr(Si.current),a=me(i,t.type);i!==a&&(Ot(Ea,t),Ot(Si,a))}function Xc(t){Ea.current===t&&(Bt(Si),Bt(Ea))}var Wt=cr(0);function Oo(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var jc=[];function Yc(){for(var t=0;t<jc.length;t++)jc[t]._workInProgressVersionPrimary=null;jc.length=0}var ko=P.ReactCurrentDispatcher,qc=P.ReactCurrentBatchConfig,Vr=0,Xt=null,en=null,on=null,Bo=!1,Ta=!1,Aa=0,H0=0;function vn(){throw Error(n(321))}function $c(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!ai(t[a],i[a]))return!1;return!0}function Kc(t,i,a,l,d,m){if(Vr=m,Xt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ko.current=t===null||t.memoizedState===null?Y0:q0,t=a(l,d),Ta){m=0;do{if(Ta=!1,Aa=0,25<=m)throw Error(n(301));m+=1,on=en=null,i.updateQueue=null,ko.current=$0,t=a(l,d)}while(Ta)}if(ko.current=Go,i=en!==null&&en.next!==null,Vr=0,on=en=Xt=null,Bo=!1,i)throw Error(n(300));return t}function Zc(){var t=Aa!==0;return Aa=0,t}function yi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?Xt.memoizedState=on=t:on=on.next=t,on}function Zn(){if(en===null){var t=Xt.alternate;t=t!==null?t.memoizedState:null}else t=en.next;var i=on===null?Xt.memoizedState:on.next;if(i!==null)on=i,en=t;else{if(t===null)throw Error(n(310));en=t,t={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},on===null?Xt.memoizedState=on=t:on=on.next=t}return on}function Ca(t,i){return typeof i=="function"?i(t):i}function Qc(t){var i=Zn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=en,d=l.baseQueue,m=a.pending;if(m!==null){if(d!==null){var E=d.next;d.next=m.next,m.next=E}l.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,l=l.baseState;var D=E=null,k=null,ne=m;do{var _e=ne.lane;if((Vr&_e)===_e)k!==null&&(k=k.next={lane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),l=ne.hasEagerState?ne.eagerState:t(l,ne.action);else{var xe={lane:_e,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null};k===null?(D=k=xe,E=l):k=k.next=xe,Xt.lanes|=_e,Gr|=_e}ne=ne.next}while(ne!==null&&ne!==m);k===null?E=l:k.next=D,ai(l,i.memoizedState)||(Nn=!0),i.memoizedState=l,i.baseState=E,i.baseQueue=k,a.lastRenderedState=l}if(t=a.interleaved,t!==null){d=t;do m=d.lane,Xt.lanes|=m,Gr|=m,d=d.next;while(d!==t)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Jc(t){var i=Zn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var E=d=d.next;do m=t(m,E.action),E=E.next;while(E!==d);ai(m,i.memoizedState)||(Nn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,l]}function Lh(){}function Dh(t,i){var a=Xt,l=Zn(),d=i(),m=!ai(l.memoizedState,d);if(m&&(l.memoizedState=d,Nn=!0),l=l.queue,eu(Uh.bind(null,a,l,t),[t]),l.getSnapshot!==i||m||on!==null&&on.memoizedState.tag&1){if(a.flags|=2048,ba(9,Ih.bind(null,a,l,d,i),void 0,null),ln===null)throw Error(n(349));(Vr&30)!==0||Nh(a,i,d)}return d}function Nh(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Xt.updateQueue,i===null?(i={lastEffect:null,stores:null},Xt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Ih(t,i,a,l){i.value=a,i.getSnapshot=l,Fh(i)&&Oh(t)}function Uh(t,i,a){return a(function(){Fh(i)&&Oh(t)})}function Fh(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!ai(t,a)}catch{return!0}}function Oh(t){var i=Oi(t,1);i!==null&&di(i,t,1,-1)}function kh(t){var i=yi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:t},i.queue=t,t=t.dispatch=j0.bind(null,Xt,t),[i.memoizedState,t]}function ba(t,i,a,l){return t={tag:t,create:i,destroy:a,deps:l,next:null},i=Xt.updateQueue,i===null?(i={lastEffect:null,stores:null},Xt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t)),t}function Bh(){return Zn().memoizedState}function zo(t,i,a,l){var d=yi();Xt.flags|=t,d.memoizedState=ba(1|i,a,void 0,l===void 0?null:l)}function Vo(t,i,a,l){var d=Zn();l=l===void 0?null:l;var m=void 0;if(en!==null){var E=en.memoizedState;if(m=E.destroy,l!==null&&$c(l,E.deps)){d.memoizedState=ba(i,a,m,l);return}}Xt.flags|=t,d.memoizedState=ba(1|i,a,m,l)}function zh(t,i){return zo(8390656,8,t,i)}function eu(t,i){return Vo(2048,8,t,i)}function Vh(t,i){return Vo(4,2,t,i)}function Gh(t,i){return Vo(4,4,t,i)}function Hh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Wh(t,i,a){return a=a!=null?a.concat([t]):null,Vo(4,4,Hh.bind(null,i,t),a)}function tu(){}function Xh(t,i){var a=Zn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&$c(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function jh(t,i){var a=Zn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&$c(i,l[1])?l[0]:(t=t(),a.memoizedState=[t,i],t)}function Yh(t,i,a){return(Vr&21)===0?(t.baseState&&(t.baseState=!1,Nn=!0),t.memoizedState=a):(ai(a,i)||(a=gn(),Xt.lanes|=a,Gr|=a,t.baseState=!0),i)}function W0(t,i){var a=at;at=a!==0&&4>a?a:4,t(!0);var l=qc.transition;qc.transition={};try{t(!1),i()}finally{at=a,qc.transition=l}}function qh(){return Zn().memoizedState}function X0(t,i,a){var l=_r(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},$h(t))Kh(i,a);else if(a=Ah(t,i,a,l),a!==null){var d=bn();di(a,t,l,d),Zh(a,i,l)}}function j0(t,i,a){var l=_r(t),d={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if($h(t))Kh(i,d);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,D=m(E,a);if(d.hasEagerState=!0,d.eagerState=D,ai(D,E)){var k=i.interleaved;k===null?(d.next=d,Gc(i)):(d.next=k.next,k.next=d),i.interleaved=d;return}}catch{}finally{}a=Ah(t,i,d,l),a!==null&&(d=bn(),di(a,t,l,d),Zh(a,i,l))}}function $h(t){var i=t.alternate;return t===Xt||i!==null&&i===Xt}function Kh(t,i){Ta=Bo=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Zh(t,i,a){if((a&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Lt(t,a)}}var Go={readContext:Kn,useCallback:vn,useContext:vn,useEffect:vn,useImperativeHandle:vn,useInsertionEffect:vn,useLayoutEffect:vn,useMemo:vn,useReducer:vn,useRef:vn,useState:vn,useDebugValue:vn,useDeferredValue:vn,useTransition:vn,useMutableSource:vn,useSyncExternalStore:vn,useId:vn,unstable_isNewReconciler:!1},Y0={readContext:Kn,useCallback:function(t,i){return yi().memoizedState=[t,i===void 0?null:i],t},useContext:Kn,useEffect:zh,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,zo(4194308,4,Hh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return zo(4194308,4,t,i)},useInsertionEffect:function(t,i){return zo(4,2,t,i)},useMemo:function(t,i){var a=yi();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var l=yi();return i=a!==void 0?a(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=X0.bind(null,Xt,t),[l.memoizedState,t]},useRef:function(t){var i=yi();return t={current:t},i.memoizedState=t},useState:kh,useDebugValue:tu,useDeferredValue:function(t){return yi().memoizedState=t},useTransition:function(){var t=kh(!1),i=t[0];return t=W0.bind(null,t[1]),yi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var l=Xt,d=yi();if(Gt){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),ln===null)throw Error(n(349));(Vr&30)!==0||Nh(l,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,zh(Uh.bind(null,l,m,t),[t]),l.flags|=2048,ba(9,Ih.bind(null,l,m,a,i),void 0,null),a},useId:function(){var t=yi(),i=ln.identifierPrefix;if(Gt){var a=Fi,l=Ui;a=(l&~(1<<32-Oe(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=Aa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=H0++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},q0={readContext:Kn,useCallback:Xh,useContext:Kn,useEffect:eu,useImperativeHandle:Wh,useInsertionEffect:Vh,useLayoutEffect:Gh,useMemo:jh,useReducer:Qc,useRef:Bh,useState:function(){return Qc(Ca)},useDebugValue:tu,useDeferredValue:function(t){var i=Zn();return Yh(i,en.memoizedState,t)},useTransition:function(){var t=Qc(Ca)[0],i=Zn().memoizedState;return[t,i]},useMutableSource:Lh,useSyncExternalStore:Dh,useId:qh,unstable_isNewReconciler:!1},$0={readContext:Kn,useCallback:Xh,useContext:Kn,useEffect:eu,useImperativeHandle:Wh,useInsertionEffect:Vh,useLayoutEffect:Gh,useMemo:jh,useReducer:Jc,useRef:Bh,useState:function(){return Jc(Ca)},useDebugValue:tu,useDeferredValue:function(t){var i=Zn();return en===null?i.memoizedState=t:Yh(i,en.memoizedState,t)},useTransition:function(){var t=Jc(Ca)[0],i=Zn().memoizedState;return[t,i]},useMutableSource:Lh,useSyncExternalStore:Dh,useId:qh,unstable_isNewReconciler:!1};function li(t,i){if(t&&t.defaultProps){i=re({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function nu(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:re({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ho={isMounted:function(t){return(t=t._reactInternals)?Yn(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var l=bn(),d=_r(t),m=ki(l,d);m.payload=i,a!=null&&(m.callback=a),i=hr(t,m,d),i!==null&&(di(i,t,d,l),Uo(i,t,d))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=bn(),d=_r(t),m=ki(l,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=hr(t,m,d),i!==null&&(di(i,t,d,l),Uo(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=bn(),l=_r(t),d=ki(a,l);d.tag=2,i!=null&&(d.callback=i),i=hr(t,d,l),i!==null&&(di(i,t,l,a),Uo(i,t,l))}};function Qh(t,i,a,l,d,m,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,m,E):i.prototype&&i.prototype.isPureReactComponent?!pa(a,l)||!pa(d,m):!0}function Jh(t,i,a){var l=!1,d=ur,m=i.contextType;return typeof m=="object"&&m!==null?m=Kn(m):(d=Dn(i)?Fr:_n.current,l=i.contextTypes,m=(l=l!=null)?ms(t,d):ur),i=new i(a,m),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ho,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=m),i}function ep(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&Ho.enqueueReplaceState(i,i.state,null)}function iu(t,i,a,l){var d=t.stateNode;d.props=a,d.state=t.memoizedState,d.refs={},Hc(t);var m=i.contextType;typeof m=="object"&&m!==null?d.context=Kn(m):(m=Dn(i)?Fr:_n.current,d.context=ms(t,m)),d.state=t.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(nu(t,i,m,a),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Ho.enqueueReplaceState(d,d.state,null),Fo(t,a,d,l),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function Es(t,i){try{var a="",l=i;do a+=Ke(l),l=l.return;while(l);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:t,source:i,stack:d,digest:null}}function ru(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function su(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var K0=typeof WeakMap=="function"?WeakMap:Map;function tp(t,i,a){a=ki(-1,a),a.tag=3,a.payload={element:null};var l=i.value;return a.callback=function(){Ko||(Ko=!0,Su=l),su(t,i)},a}function np(t,i,a){a=ki(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var d=i.value;a.payload=function(){return l(d)},a.callback=function(){su(t,i)}}var m=t.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){su(t,i),typeof l!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function ip(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new K0;var d=new Set;l.set(i,d)}else d=l.get(i),d===void 0&&(d=new Set,l.set(i,d));d.has(a)||(d.add(a),t=u_.bind(null,t,i,a),i.then(t,t))}function rp(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function sp(t,i,a,l,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=ki(-1,1),i.tag=2,hr(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var Z0=P.ReactCurrentOwner,Nn=!1;function Cn(t,i,a,l){i.child=t===null?Th(i,null,a,l):xs(i,t.child,a,l)}function ap(t,i,a,l,d){a=a.render;var m=i.ref;return ys(i,d),l=Kc(t,i,a,l,m,d),a=Zc(),t!==null&&!Nn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Bi(t,i,d)):(Gt&&a&&Nc(i),i.flags|=1,Cn(t,i,l,d),i.child)}function op(t,i,a,l,d){if(t===null){var m=a.type;return typeof m=="function"&&!Cu(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,lp(t,i,m,l,d)):(t=nl(a.type,null,l,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,(t.lanes&d)===0){var E=m.memoizedProps;if(a=a.compare,a=a!==null?a:pa,a(E,l)&&t.ref===i.ref)return Bi(t,i,d)}return i.flags|=1,t=xr(m,l),t.ref=i.ref,t.return=i,i.child=t}function lp(t,i,a,l,d){if(t!==null){var m=t.memoizedProps;if(pa(m,l)&&t.ref===i.ref)if(Nn=!1,i.pendingProps=l=m,(t.lanes&d)!==0)(t.flags&131072)!==0&&(Nn=!0);else return i.lanes=t.lanes,Bi(t,i,d)}return au(t,i,a,l,d)}function cp(t,i,a){var l=i.pendingProps,d=l.children,m=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ot(Ts,Hn),Hn|=a;else{if((a&1073741824)===0)return t=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Ot(Ts,Hn),Hn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=m!==null?m.baseLanes:a,Ot(Ts,Hn),Hn|=l}else m!==null?(l=m.baseLanes|a,i.memoizedState=null):l=a,Ot(Ts,Hn),Hn|=l;return Cn(t,i,d,a),i.child}function up(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function au(t,i,a,l,d){var m=Dn(a)?Fr:_n.current;return m=ms(i,m),ys(i,d),a=Kc(t,i,a,l,m,d),l=Zc(),t!==null&&!Nn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Bi(t,i,d)):(Gt&&l&&Nc(i),i.flags|=1,Cn(t,i,a,d),i.child)}function dp(t,i,a,l,d){if(Dn(a)){var m=!0;Co(i)}else m=!1;if(ys(i,d),i.stateNode===null)Xo(t,i),Jh(i,a,l),iu(i,a,l,d),l=!0;else if(t===null){var E=i.stateNode,D=i.memoizedProps;E.props=D;var k=E.context,ne=a.contextType;typeof ne=="object"&&ne!==null?ne=Kn(ne):(ne=Dn(a)?Fr:_n.current,ne=ms(i,ne));var _e=a.getDerivedStateFromProps,xe=typeof _e=="function"||typeof E.getSnapshotBeforeUpdate=="function";xe||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(D!==l||k!==ne)&&ep(i,E,l,ne),fr=!1;var ge=i.memoizedState;E.state=ge,Fo(i,l,E,d),k=i.memoizedState,D!==l||ge!==k||Ln.current||fr?(typeof _e=="function"&&(nu(i,a,_e,l),k=i.memoizedState),(D=fr||Qh(i,a,D,l,ge,k,ne))?(xe||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=k),E.props=l,E.state=k,E.context=ne,l=D):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{E=i.stateNode,Ch(t,i),D=i.memoizedProps,ne=i.type===i.elementType?D:li(i.type,D),E.props=ne,xe=i.pendingProps,ge=E.context,k=a.contextType,typeof k=="object"&&k!==null?k=Kn(k):(k=Dn(a)?Fr:_n.current,k=ms(i,k));var Fe=a.getDerivedStateFromProps;(_e=typeof Fe=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(D!==xe||ge!==k)&&ep(i,E,l,k),fr=!1,ge=i.memoizedState,E.state=ge,Fo(i,l,E,d);var He=i.memoizedState;D!==xe||ge!==He||Ln.current||fr?(typeof Fe=="function"&&(nu(i,a,Fe,l),He=i.memoizedState),(ne=fr||Qh(i,a,ne,l,ge,He,k)||!1)?(_e||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(l,He,k),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(l,He,k)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=He),E.props=l,E.state=He,E.context=k,l=ne):(typeof E.componentDidUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),l=!1)}return ou(t,i,a,l,m,d)}function ou(t,i,a,l,d,m){up(t,i);var E=(i.flags&128)!==0;if(!l&&!E)return d&&gh(i,a,!1),Bi(t,i,m);l=i.stateNode,Z0.current=i;var D=E&&typeof a.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&E?(i.child=xs(i,t.child,null,m),i.child=xs(i,null,D,m)):Cn(t,i,D,m),i.memoizedState=l.state,d&&gh(i,a,!0),i.child}function fp(t){var i=t.stateNode;i.pendingContext?ph(t,i.pendingContext,i.pendingContext!==i.context):i.context&&ph(t,i.context,!1),Wc(t,i.containerInfo)}function hp(t,i,a,l,d){return vs(),Oc(d),i.flags|=256,Cn(t,i,a,l),i.child}var lu={dehydrated:null,treeContext:null,retryLane:0};function cu(t){return{baseLanes:t,cachePool:null,transitions:null}}function pp(t,i,a){var l=i.pendingProps,d=Wt.current,m=!1,E=(i.flags&128)!==0,D;if((D=E)||(D=t!==null&&t.memoizedState===null?!1:(d&2)!==0),D?(m=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Ot(Wt,d&1),t===null)return Fc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=l.children,t=l.fallback,m?(l=i.mode,m=i.child,E={mode:"hidden",children:E},(l&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=E):m=il(E,l,0,null),t=jr(t,l,a,null),m.return=i,t.return=i,m.sibling=t,i.child=m,i.child.memoizedState=cu(a),i.memoizedState=lu,t):uu(i,E));if(d=t.memoizedState,d!==null&&(D=d.dehydrated,D!==null))return Q0(t,i,E,l,D,d,a);if(m){m=l.fallback,E=i.mode,d=t.child,D=d.sibling;var k={mode:"hidden",children:l.children};return(E&1)===0&&i.child!==d?(l=i.child,l.childLanes=0,l.pendingProps=k,i.deletions=null):(l=xr(d,k),l.subtreeFlags=d.subtreeFlags&14680064),D!==null?m=xr(D,m):(m=jr(m,E,a,null),m.flags|=2),m.return=i,l.return=i,l.sibling=m,i.child=l,l=m,m=i.child,E=t.child.memoizedState,E=E===null?cu(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},m.memoizedState=E,m.childLanes=t.childLanes&~a,i.memoizedState=lu,l}return m=t.child,t=m.sibling,l=xr(m,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=a),l.return=i,l.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=l,i.memoizedState=null,l}function uu(t,i){return i=il({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Wo(t,i,a,l){return l!==null&&Oc(l),xs(i,t.child,null,a),t=uu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Q0(t,i,a,l,d,m,E){if(a)return i.flags&256?(i.flags&=-257,l=ru(Error(n(422))),Wo(t,i,E,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(m=l.fallback,d=i.mode,l=il({mode:"visible",children:l.children},d,0,null),m=jr(m,d,E,null),m.flags|=2,l.return=i,m.return=i,l.sibling=m,i.child=l,(i.mode&1)!==0&&xs(i,t.child,null,E),i.child.memoizedState=cu(E),i.memoizedState=lu,m);if((i.mode&1)===0)return Wo(t,i,E,null);if(d.data==="$!"){if(l=d.nextSibling&&d.nextSibling.dataset,l)var D=l.dgst;return l=D,m=Error(n(419)),l=ru(m,l,void 0),Wo(t,i,E,l)}if(D=(E&t.childLanes)!==0,Nn||D){if(l=ln,l!==null){switch(E&-E){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(l.suspendedLanes|E))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Oi(t,d),di(l,t,d,-1))}return Au(),l=ru(Error(n(421))),Wo(t,i,E,l)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=d_.bind(null,t),d._reactRetry=i,null):(t=m.treeContext,Gn=lr(d.nextSibling),Vn=i,Gt=!0,oi=null,t!==null&&(qn[$n++]=Ui,qn[$n++]=Fi,qn[$n++]=Or,Ui=t.id,Fi=t.overflow,Or=i),i=uu(i,l.children),i.flags|=4096,i)}function mp(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Vc(t.return,i,a)}function du(t,i,a,l,d){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=a,m.tailMode=d)}function gp(t,i,a){var l=i.pendingProps,d=l.revealOrder,m=l.tail;if(Cn(t,i,l.children,a),l=Wt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&mp(t,a,i);else if(t.tag===19)mp(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Ot(Wt,l),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)t=a.alternate,t!==null&&Oo(t)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),du(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Oo(t)===null){i.child=d;break}t=d.sibling,d.sibling=a,a=d,d=t}du(i,!0,a,null,m);break;case"together":du(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Xo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Bi(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Gr|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=xr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=xr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function J0(t,i,a){switch(i.tag){case 3:fp(i),vs();break;case 5:Ph(i);break;case 1:Dn(i.type)&&Co(i);break;case 4:Wc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,d=i.memoizedProps.value;Ot(No,l._currentValue),l._currentValue=d;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Ot(Wt,Wt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?pp(t,i,a):(Ot(Wt,Wt.current&1),t=Bi(t,i,a),t!==null?t.sibling:null);Ot(Wt,Wt.current&1);break;case 19:if(l=(a&i.childLanes)!==0,(t.flags&128)!==0){if(l)return gp(t,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ot(Wt,Wt.current),l)break;return null;case 22:case 23:return i.lanes=0,cp(t,i,a)}return Bi(t,i,a)}var _p,fu,vp,xp;_p=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},fu=function(){},vp=function(t,i,a,l){var d=t.memoizedProps;if(d!==l){t=i.stateNode,zr(Si.current);var m=null;switch(a){case"input":d=xt(t,d),l=xt(t,l),m=[];break;case"select":d=re({},d,{value:void 0}),l=re({},l,{value:void 0}),m=[];break;case"textarea":d=We(t,d),l=We(t,l),m=[];break;default:typeof d.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=wo)}Xe(a,l);var E;a=null;for(ne in d)if(!l.hasOwnProperty(ne)&&d.hasOwnProperty(ne)&&d[ne]!=null)if(ne==="style"){var D=d[ne];for(E in D)D.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else ne!=="dangerouslySetInnerHTML"&&ne!=="children"&&ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&ne!=="autoFocus"&&(o.hasOwnProperty(ne)?m||(m=[]):(m=m||[]).push(ne,null));for(ne in l){var k=l[ne];if(D=d!=null?d[ne]:void 0,l.hasOwnProperty(ne)&&k!==D&&(k!=null||D!=null))if(ne==="style")if(D){for(E in D)!D.hasOwnProperty(E)||k&&k.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in k)k.hasOwnProperty(E)&&D[E]!==k[E]&&(a||(a={}),a[E]=k[E])}else a||(m||(m=[]),m.push(ne,a)),a=k;else ne==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,D=D?D.__html:void 0,k!=null&&D!==k&&(m=m||[]).push(ne,k)):ne==="children"?typeof k!="string"&&typeof k!="number"||(m=m||[]).push(ne,""+k):ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&(o.hasOwnProperty(ne)?(k!=null&&ne==="onScroll"&&kt("scroll",t),m||D===k||(m=[])):(m=m||[]).push(ne,k))}a&&(m=m||[]).push("style",a);var ne=m;(i.updateQueue=ne)&&(i.flags|=4)}},xp=function(t,i,a,l){a!==l&&(i.flags|=4)};function Ra(t,i){if(!Gt)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function xn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var d=t.child;d!==null;)a|=d.lanes|d.childLanes,l|=d.subtreeFlags&14680064,l|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)a|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function e_(t,i,a){var l=i.pendingProps;switch(Ic(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xn(i),null;case 1:return Dn(i.type)&&Ao(),xn(i),null;case 3:return l=i.stateNode,Ms(),Bt(Ln),Bt(_n),Yc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Lo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,oi!==null&&(Eu(oi),oi=null))),fu(t,i),xn(i),null;case 5:Xc(i);var d=zr(wa.current);if(a=i.type,t!==null&&i.stateNode!=null)vp(t,i,a,l,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return xn(i),null}if(t=zr(Si.current),Lo(i)){l=i.stateNode,a=i.type;var m=i.memoizedProps;switch(l[xi]=i,l[xa]=m,t=(i.mode&1)!==0,a){case"dialog":kt("cancel",l),kt("close",l);break;case"iframe":case"object":case"embed":kt("load",l);break;case"video":case"audio":for(d=0;d<ga.length;d++)kt(ga[d],l);break;case"source":kt("error",l);break;case"img":case"image":case"link":kt("error",l),kt("load",l);break;case"details":kt("toggle",l);break;case"input":Pt(l,m),kt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!m.multiple},kt("invalid",l);break;case"textarea":R(l,m),kt("invalid",l)}Xe(a,m),d=null;for(var E in m)if(m.hasOwnProperty(E)){var D=m[E];E==="children"?typeof D=="string"?l.textContent!==D&&(m.suppressHydrationWarning!==!0&&Eo(l.textContent,D,t),d=["children",D]):typeof D=="number"&&l.textContent!==""+D&&(m.suppressHydrationWarning!==!0&&Eo(l.textContent,D,t),d=["children",""+D]):o.hasOwnProperty(E)&&D!=null&&E==="onScroll"&&kt("scroll",l)}switch(a){case"input":pt(l),B(l,m,!0);break;case"textarea":pt(l),W(l);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(l.onclick=wo)}l=d,i.updateQueue=l,l!==null&&(i.flags|=4)}else{E=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=de(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=E.createElement(a,{is:l.is}):(t=E.createElement(a),a==="select"&&(E=t,l.multiple?E.multiple=!0:l.size&&(E.size=l.size))):t=E.createElementNS(t,a),t[xi]=i,t[xa]=l,_p(t,i,!1,!1),i.stateNode=t;e:{switch(E=Ae(a,l),a){case"dialog":kt("cancel",t),kt("close",t),d=l;break;case"iframe":case"object":case"embed":kt("load",t),d=l;break;case"video":case"audio":for(d=0;d<ga.length;d++)kt(ga[d],t);d=l;break;case"source":kt("error",t),d=l;break;case"img":case"image":case"link":kt("error",t),kt("load",t),d=l;break;case"details":kt("toggle",t),d=l;break;case"input":Pt(t,l),d=xt(t,l),kt("invalid",t);break;case"option":d=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},d=re({},l,{value:void 0}),kt("invalid",t);break;case"textarea":R(t,l),d=We(t,l),kt("invalid",t);break;default:d=l}Xe(a,d),D=d;for(m in D)if(D.hasOwnProperty(m)){var k=D[m];m==="style"?be(t,k):m==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&qe(t,k)):m==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&we(t,k):typeof k=="number"&&we(t,""+k):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?k!=null&&m==="onScroll"&&kt("scroll",t):k!=null&&N(t,m,k,E))}switch(a){case"input":pt(t),B(t,l,!1);break;case"textarea":pt(t),W(t);break;case"option":l.value!=null&&t.setAttribute("value",""+ye(l.value));break;case"select":t.multiple=!!l.multiple,m=l.value,m!=null?St(t,!!l.multiple,m,!1):l.defaultValue!=null&&St(t,!!l.multiple,l.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=wo)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return xn(i),null;case 6:if(t&&i.stateNode!=null)xp(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(a=zr(wa.current),zr(Si.current),Lo(i)){if(l=i.stateNode,a=i.memoizedProps,l[xi]=i,(m=l.nodeValue!==a)&&(t=Vn,t!==null))switch(t.tag){case 3:Eo(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Eo(l.nodeValue,a,(t.mode&1)!==0)}m&&(i.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[xi]=i,i.stateNode=l}return xn(i),null;case 13:if(Bt(Wt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Gt&&Gn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Mh(),vs(),i.flags|=98560,m=!1;else if(m=Lo(i),l!==null&&l.dehydrated!==null){if(t===null){if(!m)throw Error(n(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(n(317));m[xi]=i}else vs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;xn(i),m=!1}else oi!==null&&(Eu(oi),oi=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Wt.current&1)!==0?tn===0&&(tn=3):Au())),i.updateQueue!==null&&(i.flags|=4),xn(i),null);case 4:return Ms(),fu(t,i),t===null&&_a(i.stateNode.containerInfo),xn(i),null;case 10:return zc(i.type._context),xn(i),null;case 17:return Dn(i.type)&&Ao(),xn(i),null;case 19:if(Bt(Wt),m=i.memoizedState,m===null)return xn(i),null;if(l=(i.flags&128)!==0,E=m.rendering,E===null)if(l)Ra(m,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=Oo(t),E!==null){for(i.flags|=128,Ra(m,!1),l=E.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=a,a=i.child;a!==null;)m=a,t=l,m.flags&=14680066,E=m.alternate,E===null?(m.childLanes=0,m.lanes=t,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=E.childLanes,m.lanes=E.lanes,m.child=E.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=E.memoizedProps,m.memoizedState=E.memoizedState,m.updateQueue=E.updateQueue,m.type=E.type,t=E.dependencies,m.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Ot(Wt,Wt.current&1|2),i.child}t=t.sibling}m.tail!==null&&Ht()>As&&(i.flags|=128,l=!0,Ra(m,!1),i.lanes=4194304)}else{if(!l)if(t=Oo(E),t!==null){if(i.flags|=128,l=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ra(m,!0),m.tail===null&&m.tailMode==="hidden"&&!E.alternate&&!Gt)return xn(i),null}else 2*Ht()-m.renderingStartTime>As&&a!==1073741824&&(i.flags|=128,l=!0,Ra(m,!1),i.lanes=4194304);m.isBackwards?(E.sibling=i.child,i.child=E):(a=m.last,a!==null?a.sibling=E:i.child=E,m.last=E)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Ht(),i.sibling=null,a=Wt.current,Ot(Wt,l?a&1|2:a&1),i):(xn(i),null);case 22:case 23:return Tu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Hn&1073741824)!==0&&(xn(i),i.subtreeFlags&6&&(i.flags|=8192)):xn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function t_(t,i){switch(Ic(i),i.tag){case 1:return Dn(i.type)&&Ao(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ms(),Bt(Ln),Bt(_n),Yc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Xc(i),null;case 13:if(Bt(Wt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));vs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Bt(Wt),null;case 4:return Ms(),null;case 10:return zc(i.type._context),null;case 22:case 23:return Tu(),null;case 24:return null;default:return null}}var jo=!1,Sn=!1,n_=typeof WeakSet=="function"?WeakSet:Set,ze=null;function ws(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){Yt(t,i,l)}else a.current=null}function hu(t,i,a){try{a()}catch(l){Yt(t,i,l)}}var Sp=!1;function i_(t,i){if(Tc=fo,t=Qf(),_c(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var d=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var E=0,D=-1,k=-1,ne=0,_e=0,xe=t,ge=null;t:for(;;){for(var Fe;xe!==a||d!==0&&xe.nodeType!==3||(D=E+d),xe!==m||l!==0&&xe.nodeType!==3||(k=E+l),xe.nodeType===3&&(E+=xe.nodeValue.length),(Fe=xe.firstChild)!==null;)ge=xe,xe=Fe;for(;;){if(xe===t)break t;if(ge===a&&++ne===d&&(D=E),ge===m&&++_e===l&&(k=E),(Fe=xe.nextSibling)!==null)break;xe=ge,ge=xe.parentNode}xe=Fe}a=D===-1||k===-1?null:{start:D,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ac={focusedElem:t,selectionRange:a},fo=!1,ze=i;ze!==null;)if(i=ze,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,ze=t;else for(;ze!==null;){i=ze;try{var He=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var je=He.memoizedProps,Kt=He.memoizedState,$=i.stateNode,H=$.getSnapshotBeforeUpdate(i.elementType===i.type?je:li(i.type,je),Kt);$.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var Q=i.stateNode.containerInfo;Q.nodeType===1?Q.textContent="":Q.nodeType===9&&Q.documentElement&&Q.removeChild(Q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){Yt(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,ze=t;break}ze=i.return}return He=Sp,Sp=!1,He}function Pa(t,i,a){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var d=l=l.next;do{if((d.tag&t)===t){var m=d.destroy;d.destroy=void 0,m!==void 0&&hu(i,a,m)}d=d.next}while(d!==l)}}function Yo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==i)}}function pu(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function yp(t){var i=t.alternate;i!==null&&(t.alternate=null,yp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[xi],delete i[xa],delete i[Pc],delete i[B0],delete i[z0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Mp(t){return t.tag===5||t.tag===3||t.tag===4}function Ep(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Mp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function mu(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=wo));else if(l!==4&&(t=t.child,t!==null))for(mu(t,i,a),t=t.sibling;t!==null;)mu(t,i,a),t=t.sibling}function gu(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(gu(t,i,a),t=t.sibling;t!==null;)gu(t,i,a),t=t.sibling}var dn=null,ci=!1;function pr(t,i,a){for(a=a.child;a!==null;)wp(t,i,a),a=a.sibling}function wp(t,i,a){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(Ue,a)}catch{}switch(a.tag){case 5:Sn||ws(a,i);case 6:var l=dn,d=ci;dn=null,pr(t,i,a),dn=l,ci=d,dn!==null&&(ci?(t=dn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):dn.removeChild(a.stateNode));break;case 18:dn!==null&&(ci?(t=dn,a=a.stateNode,t.nodeType===8?Rc(t.parentNode,a):t.nodeType===1&&Rc(t,a),la(t)):Rc(dn,a.stateNode));break;case 4:l=dn,d=ci,dn=a.stateNode.containerInfo,ci=!0,pr(t,i,a),dn=l,ci=d;break;case 0:case 11:case 14:case 15:if(!Sn&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){d=l=l.next;do{var m=d,E=m.destroy;m=m.tag,E!==void 0&&((m&2)!==0||(m&4)!==0)&&hu(a,i,E),d=d.next}while(d!==l)}pr(t,i,a);break;case 1:if(!Sn&&(ws(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(D){Yt(a,i,D)}pr(t,i,a);break;case 21:pr(t,i,a);break;case 22:a.mode&1?(Sn=(l=Sn)||a.memoizedState!==null,pr(t,i,a),Sn=l):pr(t,i,a);break;default:pr(t,i,a)}}function Tp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new n_),i.forEach(function(l){var d=f_.bind(null,t,l);a.has(l)||(a.add(l),l.then(d,d))})}}function ui(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var d=a[l];try{var m=t,E=i,D=E;e:for(;D!==null;){switch(D.tag){case 5:dn=D.stateNode,ci=!1;break e;case 3:dn=D.stateNode.containerInfo,ci=!0;break e;case 4:dn=D.stateNode.containerInfo,ci=!0;break e}D=D.return}if(dn===null)throw Error(n(160));wp(m,E,d),dn=null,ci=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(ne){Yt(d,i,ne)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Ap(i,t),i=i.sibling}function Ap(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ui(i,t),Mi(t),l&4){try{Pa(3,t,t.return),Yo(3,t)}catch(je){Yt(t,t.return,je)}try{Pa(5,t,t.return)}catch(je){Yt(t,t.return,je)}}break;case 1:ui(i,t),Mi(t),l&512&&a!==null&&ws(a,a.return);break;case 5:if(ui(i,t),Mi(t),l&512&&a!==null&&ws(a,a.return),t.flags&32){var d=t.stateNode;try{we(d,"")}catch(je){Yt(t,t.return,je)}}if(l&4&&(d=t.stateNode,d!=null)){var m=t.memoizedProps,E=a!==null?a.memoizedProps:m,D=t.type,k=t.updateQueue;if(t.updateQueue=null,k!==null)try{D==="input"&&m.type==="radio"&&m.name!=null&&lt(d,m),Ae(D,E);var ne=Ae(D,m);for(E=0;E<k.length;E+=2){var _e=k[E],xe=k[E+1];_e==="style"?be(d,xe):_e==="dangerouslySetInnerHTML"?qe(d,xe):_e==="children"?we(d,xe):N(d,_e,xe,ne)}switch(D){case"input":zt(d,m);break;case"textarea":M(d,m);break;case"select":var ge=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Fe=m.value;Fe!=null?St(d,!!m.multiple,Fe,!1):ge!==!!m.multiple&&(m.defaultValue!=null?St(d,!!m.multiple,m.defaultValue,!0):St(d,!!m.multiple,m.multiple?[]:"",!1))}d[xa]=m}catch(je){Yt(t,t.return,je)}}break;case 6:if(ui(i,t),Mi(t),l&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,m=t.memoizedProps;try{d.nodeValue=m}catch(je){Yt(t,t.return,je)}}break;case 3:if(ui(i,t),Mi(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{la(i.containerInfo)}catch(je){Yt(t,t.return,je)}break;case 4:ui(i,t),Mi(t);break;case 13:ui(i,t),Mi(t),d=t.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(xu=Ht())),l&4&&Tp(t);break;case 22:if(_e=a!==null&&a.memoizedState!==null,t.mode&1?(Sn=(ne=Sn)||_e,ui(i,t),Sn=ne):ui(i,t),Mi(t),l&8192){if(ne=t.memoizedState!==null,(t.stateNode.isHidden=ne)&&!_e&&(t.mode&1)!==0)for(ze=t,_e=t.child;_e!==null;){for(xe=ze=_e;ze!==null;){switch(ge=ze,Fe=ge.child,ge.tag){case 0:case 11:case 14:case 15:Pa(4,ge,ge.return);break;case 1:ws(ge,ge.return);var He=ge.stateNode;if(typeof He.componentWillUnmount=="function"){l=ge,a=ge.return;try{i=l,He.props=i.memoizedProps,He.state=i.memoizedState,He.componentWillUnmount()}catch(je){Yt(l,a,je)}}break;case 5:ws(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Rp(xe);continue}}Fe!==null?(Fe.return=ge,ze=Fe):Rp(xe)}_e=_e.sibling}e:for(_e=null,xe=t;;){if(xe.tag===5){if(_e===null){_e=xe;try{d=xe.stateNode,ne?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(D=xe.stateNode,k=xe.memoizedProps.style,E=k!=null&&k.hasOwnProperty("display")?k.display:null,D.style.display=Se("display",E))}catch(je){Yt(t,t.return,je)}}}else if(xe.tag===6){if(_e===null)try{xe.stateNode.nodeValue=ne?"":xe.memoizedProps}catch(je){Yt(t,t.return,je)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===t)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===t)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===t)break e;_e===xe&&(_e=null),xe=xe.return}_e===xe&&(_e=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:ui(i,t),Mi(t),l&4&&Tp(t);break;case 21:break;default:ui(i,t),Mi(t)}}function Mi(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(Mp(a)){var l=a;break e}a=a.return}throw Error(n(160))}switch(l.tag){case 5:var d=l.stateNode;l.flags&32&&(we(d,""),l.flags&=-33);var m=Ep(t);gu(t,m,d);break;case 3:case 4:var E=l.stateNode.containerInfo,D=Ep(t);mu(t,D,E);break;default:throw Error(n(161))}}catch(k){Yt(t,t.return,k)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function r_(t,i,a){ze=t,Cp(t)}function Cp(t,i,a){for(var l=(t.mode&1)!==0;ze!==null;){var d=ze,m=d.child;if(d.tag===22&&l){var E=d.memoizedState!==null||jo;if(!E){var D=d.alternate,k=D!==null&&D.memoizedState!==null||Sn;D=jo;var ne=Sn;if(jo=E,(Sn=k)&&!ne)for(ze=d;ze!==null;)E=ze,k=E.child,E.tag===22&&E.memoizedState!==null?Pp(d):k!==null?(k.return=E,ze=k):Pp(d);for(;m!==null;)ze=m,Cp(m),m=m.sibling;ze=d,jo=D,Sn=ne}bp(t)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,ze=m):bp(t)}}function bp(t){for(;ze!==null;){var i=ze;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Sn||Yo(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!Sn)if(a===null)l.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:li(i.type,a.memoizedProps);l.componentDidUpdate(d,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Rh(i,m,l);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Rh(i,E,a)}break;case 5:var D=i.stateNode;if(a===null&&i.flags&4){a=D;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ne=i.alternate;if(ne!==null){var _e=ne.memoizedState;if(_e!==null){var xe=_e.dehydrated;xe!==null&&la(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Sn||i.flags&512&&pu(i)}catch(ge){Yt(i,i.return,ge)}}if(i===t){ze=null;break}if(a=i.sibling,a!==null){a.return=i.return,ze=a;break}ze=i.return}}function Rp(t){for(;ze!==null;){var i=ze;if(i===t){ze=null;break}var a=i.sibling;if(a!==null){a.return=i.return,ze=a;break}ze=i.return}}function Pp(t){for(;ze!==null;){var i=ze;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Yo(4,i)}catch(k){Yt(i,a,k)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var d=i.return;try{l.componentDidMount()}catch(k){Yt(i,d,k)}}var m=i.return;try{pu(i)}catch(k){Yt(i,m,k)}break;case 5:var E=i.return;try{pu(i)}catch(k){Yt(i,E,k)}}}catch(k){Yt(i,i.return,k)}if(i===t){ze=null;break}var D=i.sibling;if(D!==null){D.return=i.return,ze=D;break}ze=i.return}}var s_=Math.ceil,qo=P.ReactCurrentDispatcher,_u=P.ReactCurrentOwner,Qn=P.ReactCurrentBatchConfig,Et=0,ln=null,Zt=null,fn=0,Hn=0,Ts=cr(0),tn=0,La=null,Gr=0,$o=0,vu=0,Da=null,In=null,xu=0,As=1/0,zi=null,Ko=!1,Su=null,mr=null,Zo=!1,gr=null,Qo=0,Na=0,yu=null,Jo=-1,el=0;function bn(){return(Et&6)!==0?Ht():Jo!==-1?Jo:Jo=Ht()}function _r(t){return(t.mode&1)===0?1:(Et&2)!==0&&fn!==0?fn&-fn:G0.transition!==null?(el===0&&(el=gn()),el):(t=at,t!==0||(t=window.event,t=t===void 0?16:Df(t.type)),t)}function di(t,i,a,l){if(50<Na)throw Na=0,yu=null,Error(n(185));Jt(t,a,l),((Et&2)===0||t!==ln)&&(t===ln&&((Et&2)===0&&($o|=a),tn===4&&vr(t,fn)),Un(t,l),a===1&&Et===0&&(i.mode&1)===0&&(As=Ht()+500,bo&&dr()))}function Un(t,i){var a=t.callbackNode;bt(t,i);var l=Tt(t,t===ln?fn:0);if(l===0)a!==null&&lo(a),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(a!=null&&lo(a),i===1)t.tag===0?V0(Dp.bind(null,t)):_h(Dp.bind(null,t)),O0(function(){(Et&6)===0&&dr()}),a=null;else{switch(An(l)){case 1:a=X;break;case 4:a=ie;break;case 16:a=ee;break;case 536870912:a=Pe;break;default:a=ee}a=zp(a,Lp.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function Lp(t,i){if(Jo=-1,el=0,(Et&6)!==0)throw Error(n(327));var a=t.callbackNode;if(Cs()&&t.callbackNode!==a)return null;var l=Tt(t,t===ln?fn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=tl(t,l);else{i=l;var d=Et;Et|=2;var m=Ip();(ln!==t||fn!==i)&&(zi=null,As=Ht()+500,Wr(t,i));do try{l_();break}catch(D){Np(t,D)}while(!0);Bc(),qo.current=m,Et=d,Zt!==null?i=0:(ln=null,fn=0,i=tn)}if(i!==0){if(i===2&&(d=_t(t),d!==0&&(l=d,i=Mu(t,d))),i===1)throw a=La,Wr(t,0),vr(t,l),Un(t,Ht()),a;if(i===6)vr(t,l);else{if(d=t.current.alternate,(l&30)===0&&!a_(d)&&(i=tl(t,l),i===2&&(m=_t(t),m!==0&&(l=m,i=Mu(t,m))),i===1))throw a=La,Wr(t,0),vr(t,l),Un(t,Ht()),a;switch(t.finishedWork=d,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Xr(t,In,zi);break;case 3:if(vr(t,l),(l&130023424)===l&&(i=xu+500-Ht(),10<i)){if(Tt(t,0)!==0)break;if(d=t.suspendedLanes,(d&l)!==l){bn(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=bc(Xr.bind(null,t,In,zi),i);break}Xr(t,In,zi);break;case 4:if(vr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,d=-1;0<l;){var E=31-Oe(l);m=1<<E,E=i[E],E>d&&(d=E),l&=~m}if(l=d,l=Ht()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*s_(l/1960))-l,10<l){t.timeoutHandle=bc(Xr.bind(null,t,In,zi),l);break}Xr(t,In,zi);break;case 5:Xr(t,In,zi);break;default:throw Error(n(329))}}}return Un(t,Ht()),t.callbackNode===a?Lp.bind(null,t):null}function Mu(t,i){var a=Da;return t.current.memoizedState.isDehydrated&&(Wr(t,i).flags|=256),t=tl(t,i),t!==2&&(i=In,In=a,i!==null&&Eu(i)),t}function Eu(t){In===null?In=t:In.push.apply(In,t)}function a_(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var d=a[l],m=d.getSnapshot;d=d.value;try{if(!ai(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function vr(t,i){for(i&=~vu,i&=~$o,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-Oe(i),l=1<<a;t[a]=-1,i&=~l}}function Dp(t){if((Et&6)!==0)throw Error(n(327));Cs();var i=Tt(t,0);if((i&1)===0)return Un(t,Ht()),null;var a=tl(t,i);if(t.tag!==0&&a===2){var l=_t(t);l!==0&&(i=l,a=Mu(t,l))}if(a===1)throw a=La,Wr(t,0),vr(t,i),Un(t,Ht()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Xr(t,In,zi),Un(t,Ht()),null}function wu(t,i){var a=Et;Et|=1;try{return t(i)}finally{Et=a,Et===0&&(As=Ht()+500,bo&&dr())}}function Hr(t){gr!==null&&gr.tag===0&&(Et&6)===0&&Cs();var i=Et;Et|=1;var a=Qn.transition,l=at;try{if(Qn.transition=null,at=1,t)return t()}finally{at=l,Qn.transition=a,Et=i,(Et&6)===0&&dr()}}function Tu(){Hn=Ts.current,Bt(Ts)}function Wr(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,F0(a)),Zt!==null)for(a=Zt.return;a!==null;){var l=a;switch(Ic(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Ao();break;case 3:Ms(),Bt(Ln),Bt(_n),Yc();break;case 5:Xc(l);break;case 4:Ms();break;case 13:Bt(Wt);break;case 19:Bt(Wt);break;case 10:zc(l.type._context);break;case 22:case 23:Tu()}a=a.return}if(ln=t,Zt=t=xr(t.current,null),fn=Hn=i,tn=0,La=null,vu=$o=Gr=0,In=Da=null,Br!==null){for(i=0;i<Br.length;i++)if(a=Br[i],l=a.interleaved,l!==null){a.interleaved=null;var d=l.next,m=a.pending;if(m!==null){var E=m.next;m.next=d,l.next=E}a.pending=l}Br=null}return t}function Np(t,i){do{var a=Zt;try{if(Bc(),ko.current=Go,Bo){for(var l=Xt.memoizedState;l!==null;){var d=l.queue;d!==null&&(d.pending=null),l=l.next}Bo=!1}if(Vr=0,on=en=Xt=null,Ta=!1,Aa=0,_u.current=null,a===null||a.return===null){tn=1,La=i,Zt=null;break}e:{var m=t,E=a.return,D=a,k=i;if(i=fn,D.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var ne=k,_e=D,xe=_e.tag;if((_e.mode&1)===0&&(xe===0||xe===11||xe===15)){var ge=_e.alternate;ge?(_e.updateQueue=ge.updateQueue,_e.memoizedState=ge.memoizedState,_e.lanes=ge.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Fe=rp(E);if(Fe!==null){Fe.flags&=-257,sp(Fe,E,D,m,i),Fe.mode&1&&ip(m,ne,i),i=Fe,k=ne;var He=i.updateQueue;if(He===null){var je=new Set;je.add(k),i.updateQueue=je}else He.add(k);break e}else{if((i&1)===0){ip(m,ne,i),Au();break e}k=Error(n(426))}}else if(Gt&&D.mode&1){var Kt=rp(E);if(Kt!==null){(Kt.flags&65536)===0&&(Kt.flags|=256),sp(Kt,E,D,m,i),Oc(Es(k,D));break e}}m=k=Es(k,D),tn!==4&&(tn=2),Da===null?Da=[m]:Da.push(m),m=E;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var $=tp(m,k,i);bh(m,$);break e;case 1:D=k;var H=m.type,Q=m.stateNode;if((m.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||Q!==null&&typeof Q.componentDidCatch=="function"&&(mr===null||!mr.has(Q)))){m.flags|=65536,i&=-i,m.lanes|=i;var Ee=np(m,D,i);bh(m,Ee);break e}}m=m.return}while(m!==null)}Fp(a)}catch($e){i=$e,Zt===a&&a!==null&&(Zt=a=a.return);continue}break}while(!0)}function Ip(){var t=qo.current;return qo.current=Go,t===null?Go:t}function Au(){(tn===0||tn===3||tn===2)&&(tn=4),ln===null||(Gr&268435455)===0&&($o&268435455)===0||vr(ln,fn)}function tl(t,i){var a=Et;Et|=2;var l=Ip();(ln!==t||fn!==i)&&(zi=null,Wr(t,i));do try{o_();break}catch(d){Np(t,d)}while(!0);if(Bc(),Et=a,qo.current=l,Zt!==null)throw Error(n(261));return ln=null,fn=0,tn}function o_(){for(;Zt!==null;)Up(Zt)}function l_(){for(;Zt!==null&&!ic();)Up(Zt)}function Up(t){var i=Bp(t.alternate,t,Hn);t.memoizedProps=t.pendingProps,i===null?Fp(t):Zt=i,_u.current=null}function Fp(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=e_(a,i,Hn),a!==null){Zt=a;return}}else{if(a=t_(a,i),a!==null){a.flags&=32767,Zt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{tn=6,Zt=null;return}}if(i=i.sibling,i!==null){Zt=i;return}Zt=i=t}while(i!==null);tn===0&&(tn=5)}function Xr(t,i,a){var l=at,d=Qn.transition;try{Qn.transition=null,at=1,c_(t,i,a,l)}finally{Qn.transition=d,at=l}return null}function c_(t,i,a,l){do Cs();while(gr!==null);if((Et&6)!==0)throw Error(n(327));a=t.finishedWork;var d=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var m=a.lanes|a.childLanes;if(Ir(t,m),t===ln&&(Zt=ln=null,fn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Zo||(Zo=!0,zp(ee,function(){return Cs(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Qn.transition,Qn.transition=null;var E=at;at=1;var D=Et;Et|=4,_u.current=null,i_(t,a),Ap(a,t),R0(Ac),fo=!!Tc,Ac=Tc=null,t.current=a,r_(a),rc(),Et=D,at=E,Qn.transition=m}else t.current=a;if(Zo&&(Zo=!1,gr=t,Qo=d),m=t.pendingLanes,m===0&&(mr=null),Ve(a.stateNode),Un(t,Ht()),i!==null)for(l=t.onRecoverableError,a=0;a<i.length;a++)d=i[a],l(d.value,{componentStack:d.stack,digest:d.digest});if(Ko)throw Ko=!1,t=Su,Su=null,t;return(Qo&1)!==0&&t.tag!==0&&Cs(),m=t.pendingLanes,(m&1)!==0?t===yu?Na++:(Na=0,yu=t):Na=0,dr(),null}function Cs(){if(gr!==null){var t=An(Qo),i=Qn.transition,a=at;try{if(Qn.transition=null,at=16>t?16:t,gr===null)var l=!1;else{if(t=gr,gr=null,Qo=0,(Et&6)!==0)throw Error(n(331));var d=Et;for(Et|=4,ze=t.current;ze!==null;){var m=ze,E=m.child;if((ze.flags&16)!==0){var D=m.deletions;if(D!==null){for(var k=0;k<D.length;k++){var ne=D[k];for(ze=ne;ze!==null;){var _e=ze;switch(_e.tag){case 0:case 11:case 15:Pa(8,_e,m)}var xe=_e.child;if(xe!==null)xe.return=_e,ze=xe;else for(;ze!==null;){_e=ze;var ge=_e.sibling,Fe=_e.return;if(yp(_e),_e===ne){ze=null;break}if(ge!==null){ge.return=Fe,ze=ge;break}ze=Fe}}}var He=m.alternate;if(He!==null){var je=He.child;if(je!==null){He.child=null;do{var Kt=je.sibling;je.sibling=null,je=Kt}while(je!==null)}}ze=m}}if((m.subtreeFlags&2064)!==0&&E!==null)E.return=m,ze=E;else e:for(;ze!==null;){if(m=ze,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Pa(9,m,m.return)}var $=m.sibling;if($!==null){$.return=m.return,ze=$;break e}ze=m.return}}var H=t.current;for(ze=H;ze!==null;){E=ze;var Q=E.child;if((E.subtreeFlags&2064)!==0&&Q!==null)Q.return=E,ze=Q;else e:for(E=H;ze!==null;){if(D=ze,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:Yo(9,D)}}catch($e){Yt(D,D.return,$e)}if(D===E){ze=null;break e}var Ee=D.sibling;if(Ee!==null){Ee.return=D.return,ze=Ee;break e}ze=D.return}}if(Et=d,dr(),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(Ue,t)}catch{}l=!0}return l}finally{at=a,Qn.transition=i}}return!1}function Op(t,i,a){i=Es(a,i),i=tp(t,i,1),t=hr(t,i,1),i=bn(),t!==null&&(Jt(t,1,i),Un(t,i))}function Yt(t,i,a){if(t.tag===3)Op(t,t,a);else for(;i!==null;){if(i.tag===3){Op(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(mr===null||!mr.has(l))){t=Es(a,t),t=np(i,t,1),i=hr(i,t,1),t=bn(),i!==null&&(Jt(i,1,t),Un(i,t));break}}i=i.return}}function u_(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),i=bn(),t.pingedLanes|=t.suspendedLanes&a,ln===t&&(fn&a)===a&&(tn===4||tn===3&&(fn&130023424)===fn&&500>Ht()-xu?Wr(t,0):vu|=a),Un(t,i)}function kp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Ft,Ft<<=1,(Ft&130023424)===0&&(Ft=4194304)));var a=bn();t=Oi(t,i),t!==null&&(Jt(t,i,a),Un(t,a))}function d_(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),kp(t,a)}function f_(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,d=t.memoizedState;d!==null&&(a=d.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),kp(t,a)}var Bp;Bp=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||Ln.current)Nn=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return Nn=!1,J0(t,i,a);Nn=(t.flags&131072)!==0}else Nn=!1,Gt&&(i.flags&1048576)!==0&&vh(i,Po,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Xo(t,i),t=i.pendingProps;var d=ms(i,_n.current);ys(i,a),d=Kc(null,i,l,t,d,a);var m=Zc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Dn(l)?(m=!0,Co(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Hc(i),d.updater=Ho,i.stateNode=d,d._reactInternals=i,iu(i,l,t,a),i=ou(null,i,l,!0,m,a)):(i.tag=0,Gt&&m&&Nc(i),Cn(null,i,d,a),i=i.child),i;case 16:l=i.elementType;e:{switch(Xo(t,i),t=i.pendingProps,d=l._init,l=d(l._payload),i.type=l,d=i.tag=p_(l),t=li(l,t),d){case 0:i=au(null,i,l,t,a);break e;case 1:i=dp(null,i,l,t,a);break e;case 11:i=ap(null,i,l,t,a);break e;case 14:i=op(null,i,l,li(l.type,t),a);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:li(l,d),au(t,i,l,d,a);case 1:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:li(l,d),dp(t,i,l,d,a);case 3:e:{if(fp(i),t===null)throw Error(n(387));l=i.pendingProps,m=i.memoizedState,d=m.element,Ch(t,i),Fo(i,l,null,a);var E=i.memoizedState;if(l=E.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Es(Error(n(423)),i),i=hp(t,i,l,a,d);break e}else if(l!==d){d=Es(Error(n(424)),i),i=hp(t,i,l,a,d);break e}else for(Gn=lr(i.stateNode.containerInfo.firstChild),Vn=i,Gt=!0,oi=null,a=Th(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(vs(),l===d){i=Bi(t,i,a);break e}Cn(t,i,l,a)}i=i.child}return i;case 5:return Ph(i),t===null&&Fc(i),l=i.type,d=i.pendingProps,m=t!==null?t.memoizedProps:null,E=d.children,Cc(l,d)?E=null:m!==null&&Cc(l,m)&&(i.flags|=32),up(t,i),Cn(t,i,E,a),i.child;case 6:return t===null&&Fc(i),null;case 13:return pp(t,i,a);case 4:return Wc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=xs(i,null,l,a):Cn(t,i,l,a),i.child;case 11:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:li(l,d),ap(t,i,l,d,a);case 7:return Cn(t,i,i.pendingProps,a),i.child;case 8:return Cn(t,i,i.pendingProps.children,a),i.child;case 12:return Cn(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(l=i.type._context,d=i.pendingProps,m=i.memoizedProps,E=d.value,Ot(No,l._currentValue),l._currentValue=E,m!==null)if(ai(m.value,E)){if(m.children===d.children&&!Ln.current){i=Bi(t,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var D=m.dependencies;if(D!==null){E=m.child;for(var k=D.firstContext;k!==null;){if(k.context===l){if(m.tag===1){k=ki(-1,a&-a),k.tag=2;var ne=m.updateQueue;if(ne!==null){ne=ne.shared;var _e=ne.pending;_e===null?k.next=k:(k.next=_e.next,_e.next=k),ne.pending=k}}m.lanes|=a,k=m.alternate,k!==null&&(k.lanes|=a),Vc(m.return,a,i),D.lanes|=a;break}k=k.next}}else if(m.tag===10)E=m.type===i.type?null:m.child;else if(m.tag===18){if(E=m.return,E===null)throw Error(n(341));E.lanes|=a,D=E.alternate,D!==null&&(D.lanes|=a),Vc(E,a,i),E=m.sibling}else E=m.child;if(E!==null)E.return=m;else for(E=m;E!==null;){if(E===i){E=null;break}if(m=E.sibling,m!==null){m.return=E.return,E=m;break}E=E.return}m=E}Cn(t,i,d.children,a),i=i.child}return i;case 9:return d=i.type,l=i.pendingProps.children,ys(i,a),d=Kn(d),l=l(d),i.flags|=1,Cn(t,i,l,a),i.child;case 14:return l=i.type,d=li(l,i.pendingProps),d=li(l.type,d),op(t,i,l,d,a);case 15:return lp(t,i,i.type,i.pendingProps,a);case 17:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:li(l,d),Xo(t,i),i.tag=1,Dn(l)?(t=!0,Co(i)):t=!1,ys(i,a),Jh(i,l,d),iu(i,l,d,a),ou(null,i,l,!0,t,a);case 19:return gp(t,i,a);case 22:return cp(t,i,a)}throw Error(n(156,i.tag))};function zp(t,i){return oo(t,i)}function h_(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(t,i,a,l){return new h_(t,i,a,l)}function Cu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function p_(t){if(typeof t=="function")return Cu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===se)return 11;if(t===ce)return 14}return 2}function xr(t,i){var a=t.alternate;return a===null?(a=Jn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function nl(t,i,a,l,d,m){var E=2;if(l=t,typeof t=="function")Cu(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case O:return jr(a.children,d,m,i);case q:E=8,d|=8;break;case C:return t=Jn(12,a,i,d|2),t.elementType=C,t.lanes=m,t;case J:return t=Jn(13,a,i,d),t.elementType=J,t.lanes=m,t;case fe:return t=Jn(19,a,i,d),t.elementType=fe,t.lanes=m,t;case K:return il(a,d,m,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case b:E=10;break e;case V:E=9;break e;case se:E=11;break e;case ce:E=14;break e;case oe:E=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Jn(E,a,i,d),i.elementType=t,i.type=l,i.lanes=m,i}function jr(t,i,a,l){return t=Jn(7,t,l,i),t.lanes=a,t}function il(t,i,a,l){return t=Jn(22,t,l,i),t.elementType=K,t.lanes=a,t.stateNode={isHidden:!1},t}function bu(t,i,a){return t=Jn(6,t,null,i),t.lanes=a,t}function Ru(t,i,a){return i=Jn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function m_(t,i,a,l,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_i(0),this.expirationTimes=_i(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_i(0),this.identifierPrefix=l,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Pu(t,i,a,l,d,m,E,D,k){return t=new m_(t,i,a,D,k),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Jn(3,null,null,i),t.current=m,m.stateNode=t,m.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hc(m),t}function g_(t,i,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:l==null?null:""+l,children:t,containerInfo:i,implementation:a}}function Vp(t){if(!t)return ur;t=t._reactInternals;e:{if(Yn(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Dn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(Dn(a))return mh(t,a,i)}return i}function Gp(t,i,a,l,d,m,E,D,k){return t=Pu(a,l,!0,t,d,m,E,D,k),t.context=Vp(null),a=t.current,l=bn(),d=_r(a),m=ki(l,d),m.callback=i??null,hr(a,m,d),t.current.lanes=d,Jt(t,d,l),Un(t,l),t}function rl(t,i,a,l){var d=i.current,m=bn(),E=_r(d);return a=Vp(a),i.context===null?i.context=a:i.pendingContext=a,i=ki(m,E),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=hr(d,i,E),t!==null&&(di(t,d,E,m),Uo(t,d,E)),E}function sl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Hp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function Lu(t,i){Hp(t,i),(t=t.alternate)&&Hp(t,i)}function __(){return null}var Wp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Du(t){this._internalRoot=t}al.prototype.render=Du.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));rl(t,i,null,null)},al.prototype.unmount=Du.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Hr(function(){rl(null,t,null,null)}),i[Ni]=null}};function al(t){this._internalRoot=t}al.prototype.unstable_scheduleHydration=function(t){if(t){var i=vi();t={blockedOn:null,target:t,priority:i};for(var a=0;a<sr.length&&i!==0&&i<sr[a].priority;a++);sr.splice(a,0,t),a===0&&Pf(t)}};function Nu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ol(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Xp(){}function v_(t,i,a,l,d){if(d){if(typeof l=="function"){var m=l;l=function(){var ne=sl(E);m.call(ne)}}var E=Gp(i,l,t,0,null,!1,!1,"",Xp);return t._reactRootContainer=E,t[Ni]=E.current,_a(t.nodeType===8?t.parentNode:t),Hr(),E}for(;d=t.lastChild;)t.removeChild(d);if(typeof l=="function"){var D=l;l=function(){var ne=sl(k);D.call(ne)}}var k=Pu(t,0,!1,null,null,!1,!1,"",Xp);return t._reactRootContainer=k,t[Ni]=k.current,_a(t.nodeType===8?t.parentNode:t),Hr(function(){rl(i,k,a,l)}),k}function ll(t,i,a,l,d){var m=a._reactRootContainer;if(m){var E=m;if(typeof d=="function"){var D=d;d=function(){var k=sl(E);D.call(k)}}rl(i,E,t,d)}else E=v_(a,i,t,d,l);return sl(E)}sn=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=Ut(i.pendingLanes);a!==0&&(Lt(i,a|1),Un(i,Ht()),(Et&6)===0&&(As=Ht()+500,dr()))}break;case 13:Hr(function(){var l=Oi(t,1);if(l!==null){var d=bn();di(l,t,1,d)}}),Lu(t,1)}},an=function(t){if(t.tag===13){var i=Oi(t,134217728);if(i!==null){var a=bn();di(i,t,134217728,a)}Lu(t,134217728)}},ss=function(t){if(t.tag===13){var i=_r(t),a=Oi(t,i);if(a!==null){var l=bn();di(a,t,i,l)}Lu(t,i)}},vi=function(){return at},bf=function(t,i){var a=at;try{return at=t,i()}finally{at=a}},Le=function(t,i,a){switch(i){case"input":if(zt(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var d=To(l);if(!d)throw Error(n(90));$t(l),zt(l,d)}}}break;case"textarea":M(t,a);break;case"select":i=a.value,i!=null&&St(t,!!a.multiple,i,!1)}},it=wu,Nt=Hr;var x_={usingClientEntryPoint:!1,Events:[Sa,hs,To,pe,Ce,wu]},Ia={findFiberByHostInstance:Ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},S_={bundleType:Ia.bundleType,version:Ia.version,rendererPackageName:Ia.rendererPackageName,rendererConfig:Ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ia(t),t===null?null:t.stateNode},findFiberByHostInstance:Ia.findFiberByHostInstance||__,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cl.isDisabled&&cl.supportsFiber)try{Ue=cl.inject(S_),Te=cl}catch{}}return Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x_,Fn.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nu(i))throw Error(n(200));return g_(t,i,null,a)},Fn.createRoot=function(t,i){if(!Nu(t))throw Error(n(299));var a=!1,l="",d=Wp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Pu(t,1,!1,null,null,a,!1,l,d),t[Ni]=i.current,_a(t.nodeType===8?t.parentNode:t),new Du(i)},Fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=ia(i),t=t===null?null:t.stateNode,t},Fn.flushSync=function(t){return Hr(t)},Fn.hydrate=function(t,i,a){if(!ol(i))throw Error(n(200));return ll(null,t,i,!0,a)},Fn.hydrateRoot=function(t,i,a){if(!Nu(t))throw Error(n(405));var l=a!=null&&a.hydratedSources||null,d=!1,m="",E=Wp;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=Gp(i,null,t,1,a??null,d,!1,m,E),t[Ni]=i.current,_a(t),l)for(t=0;t<l.length;t++)a=l[t],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new al(i)},Fn.render=function(t,i,a){if(!ol(i))throw Error(n(200));return ll(null,t,i,!1,a)},Fn.unmountComponentAtNode=function(t){if(!ol(t))throw Error(n(40));return t._reactRootContainer?(Hr(function(){ll(null,null,t,!1,function(){t._reactRootContainer=null,t[Ni]=null})}),!0):!1},Fn.unstable_batchedUpdates=wu,Fn.unstable_renderSubtreeIntoContainer=function(t,i,a,l){if(!ol(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return ll(t,i,a,!1,l)},Fn.version="18.3.1-next-f1338f8080-20240426",Fn}var Jp;function R_(){if(Jp)return Fu.exports;Jp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Fu.exports=b_(),Fu.exports}var em;function P_(){if(em)return ul;em=1;var s=R_();return ul.createRoot=s.createRoot,ul.hydrateRoot=s.hydrateRoot,ul}var L_=P_();const D_=ag(L_),Fa=[{id:1,block:0,blockTitle:"Opening",type:"title",title:"Life Engineering",subtitle:"Workshop #4",meta:"AI Mindset Lab · W26 · 2026",note:"Примеры деплоя и публикации проектов. Подготовка к Demo Day: превратить замысел в работающее решение.",voxel:"/voxels/slide1-builder.html"},{id:2,block:0,blockTitle:"Opening",type:"agenda",title:"Сегодня",voxel:"/voxels/slide2-compass.html",items:[{label:"01",text:"Где мы — recap трех недель"},{label:"02",text:"Mindset Shift — самое сложное не инструменты"},{label:"03",text:"Friction Auditing — где искать идеи"},{label:"04",text:"PRD — от идеи к спецификации"},{label:"05",text:"Vibe Coding Stack 2026"},{label:"06",text:"Creative Toolkit — картинки, видео, звук"},{label:"07",text:"Agent Economy & Second Mind"},{label:"08",text:"Workshop + Demo Day Prep"}]},{id:3,block:0,blockTitle:"Opening",type:"timeline",title:"Где мы находимся",voxel:"/voxels/slide3-steps.html",items:[{week:"W1",label:"Prompt Engineering",done:!0},{week:"W2",label:"Context Engineering",done:!0},{week:"W3",label:"Models & Creative",done:!0},{week:"W4",label:"Life Engineering",active:!0},{week:"→",label:"Demo Day",upcoming:!0}],note:"Prompt → Context → Mind → Life"},{id:4,block:1,blockTitle:"Recap",type:"section",title:"Где мы были",subtitle:"Три недели пути",voxel:"/voxels/slide4-archive.html"},{id:5,block:1,blockTitle:"Recap",type:"recap",title:"WS01: Prompt Engineering",speaker:"Александр Поваляев",items:["Модели — это не магия, а интерфейсы с ограничениями","Каждая модель видит мир по-своему (GPT, Claude, Gemini, DeepSeek)","Голос быстрее текста — голосовые интерфейсы меняют привычки","Эта презентация — не PowerPoint, а сайт, созданный за день","Контекст важнее промпта для ежедневных задач"],quote:"Поведение важнее технологий. То, как мы пользуемся чем-то, важнее, чем сама технология."},{id:6,block:1,blockTitle:"Recap",type:"recap",title:"WS02: Context Engineering",speaker:"Сергей Хабаров",items:["Контекст — это всё, что нужно знать, чтобы помочь именно тебе","Контекст-алхимия: смешивай ингредиенты и смотри, что получится","Целевое состояние: не «собираю контекст», а «прихожу подготовленным»","Папки в Claude/GPT Projects — твоё золото, которое можно таскать между агентами","Кривая обучения: энтузиазм → кризис реальности → интеграция"],quote:"Если у кого-то есть «зачем», тот выдержит почти любое «как»."},{id:7,block:1,blockTitle:"Recap",type:"recap",title:"Bonus: Воркшоп для новичков",speaker:"Сергей, Антон, Даник, Александр",items:["Мы используем точно такой же ChatGPT и Claude — просто готовим его по-другому","Системный промпт + контекст = папочка-советник (коуч, терапевт, копирайтер)","NotebookLM — недооцененный инструмент, всеядный и с огромным контекстом","Гонять черновик промпта между нейронками: GPT → Claude → Gemini → и обратно","Контекст о себе — это процесс, он становится лучше со временем"]},{id:8,block:1,blockTitle:"Recap",type:"voices",title:"Что вы сказали",subtitle:"Голоса участников",items:[{text:"Cursor/Windsurf не только для кода, но и для текста.",tag:"WS01"},{text:"Понимание роли контекста. Я даже стал активнее слушать людей, поняв, как контекст работает.",tag:"WS01"},{text:"Способность представить ситуацию не фактологически, а чувственно.",tag:"Creative"},{text:"Вернул чувство цифровой свободы. Никаких ограничений нету.",tag:"Tools"},{text:"Это лаборатория, где расширяется представление. Майндсет накапливается.",tag:"WS01"}]},{id:9,block:2,blockTitle:"Mindset Shift",type:"section",title:"Самое сложное",subtitle:"Не инструменты",voxel:"/voxels/slide9-mindshift.html"},{id:10,block:2,blockTitle:"Mindset Shift",type:"bigquote",quote:"Самое сложное — это не написать промпт, а заметить момент, когда ты можешь его написать."},{id:11,block:2,blockTitle:"Mindset Shift",type:"content",title:"AI Mindset — это переключение",content:"Мы, услышав проблему или найдя идею, практически сразу переключаем голову на искусственный интеллект. На то, каким образом с его помощью можно решить эту проблему.",items:["Это НЕ «с каждым вопросом идти в ChatGPT»","Это находить переплетения в жизни, которые можно автоматизировать, навайбкодить, улучшить","Создавая инструменты под себя с помощью AI — переходишь на следующий уровень"]},{id:12,block:2,blockTitle:"Mindset Shift",type:"levels",title:"Уровни погружения",items:[{level:"01",name:"Awareness",desc:"Что-то знать, почитать, послушать. Первые часы.",hours:"0–5 ч"},{level:"02",name:"Usage",desc:"Попробовать разные чаты. Понять, что модели отличаются. Больше контекста = лучше ответ.",hours:"5–50 ч"},{level:"03",name:"Building",desc:"GPT Canvas → Google AI Studio → Cursor/Windsurf. Создание своих инструментов.",hours:"50–200 ч"},{level:"04",name:"Engineering",desc:"Агенты, MCP, терминал, сложные workflow. Кросс-опыление идей.",hours:"200+ ч"}]},{id:13,block:2,blockTitle:"Mindset Shift",type:"content",title:"Разные модели = разные мировоззрения",content:"У разных компаний разные safety filters, разные данные, разное понимание того, как разговаривать с человеком.",items:["DeepSeek, GPT, Claude — попробуйте одни и те же каверзные вопросы","Это больше не касание всего знания человечества — а сильно отфильтрованный кусочек","Классный навык: чувствовать детерминированность каждой модели","Если хочется увидеть картину шире — смотри с разных сторон"]},{id:14,block:2,blockTitle:"Mindset Shift",type:"bigquote",quote:"Твоя способность описывать мир — это и есть твоя способность его кодить."},{id:15,block:2,blockTitle:"Mindset Shift",type:"content",title:"Два ключевых навыка",items:["Уметь находить идеи — замечать трения в жизни","Уметь объяснять задачи — превращать боль в спецификацию"],note:"В этом помогают: (1) насмотренность — community, чатик, шеринг; (2) просто брать, делать и пробовать бесконечно."},{id:16,block:3,blockTitle:"Friction Auditing",type:"section",title:"Где искать идеи",subtitle:"Friction Auditing"},{id:17,block:3,blockTitle:"Friction Auditing",type:"content",title:"Life Engineering = Design Thinking + AI",content:"На прошлой лабе мы говорили про design thinking framework: как найти идею того, что создать.",items:["Заметить трение → Понаблюдать → Побрейнштормить → Попробовать → Снова понаблюдать","Прежде чем писать код — нужны догадки, не данные","Наблюдаем за собой или за другими: ищем что не так","Цель: получить не мнения, а инсайты о скрытых потребностях"]},{id:18,block:3,blockTitle:"Friction Auditing",type:"definition",title:"Friction",definition:"Любое когнитивное, эмоциональное или процедурное сопротивление, которое замедляет намерение. Разрыв между «хочу сделать X» и «сделал X».",note:"Цель friction audit — сделать невидимое сопротивление видимым, измеримым и решаемым через AI."},{id:19,block:3,blockTitle:"Friction Auditing",type:"frameworks",title:"Фреймворки поиска идей",items:[{name:"Pain-to-Prompt",desc:"Записывай голосовое, как только чувствуешь раздражение от задачи. «Меня бесит, что я вручную переношу эти данные...» — это уже начало спецификации."},{name:"Правило Второго Раза",desc:"Если ты делаешь что-то второй раз (или объясняешь второй раз) — подумай об автоматизации через AI."},{name:"Inventory of Sighs",desc:"Каждый раз, когда ты издаешь «Эх...» или «Опять...» — это точка входа для AI."}]},{id:20,block:3,blockTitle:"Friction Auditing",type:"content",title:"The Annoyance Pyramid",content:"Самые живучие проекты рождаются на стыке личного раздражения и того, что ты любишь.",items:["Основание: вещи, которые делаю каждый день (проверка почты, готовка)","Вершина: вещи, которые бесят, но случаются раз в месяц","Идеи всегда ищи в основании — маленькое улучшение ежедневного действия дает больший накопительный эффект"],note:"Stop brainstorming ideas — start auditing friction."},{id:21,block:3,blockTitle:"Friction Auditing",type:"content",title:"Micro-SaaS of One",content:"Если решение нужно только мне и экономит 5 минут в неделю — оно достойно реализации.",items:["Бот проверяет наличие кроссовок твоего размера на 5 сайтах → пишет в Telegram","Фото полки холодильника → AI распознает продукты → пуш когда срок годности","Расширение для Finder: по клику запускает Claude в выбранной папке","Даже интерфейс Finder — не такая уж и твердая материя"]},{id:22,block:3,blockTitle:"Friction Auditing",type:"content",title:"Где искать идеи",items:["Поиск по жалобам: «I hate when...», «Why is there no...» в тематических сообществах","Поиск по стыкам: [твоя сфера] + AI workflow","Поиск по инструментам: Community Showcases в Cursor, Windsurf, Bolt.new","#vibe-coding на X (Twitter) — люди выкладывают life-hacks","Product Hunt → Side Projects, Hacker News → Show HN"]},{id:23,block:3,blockTitle:"Friction Auditing",type:"table",title:"Value-Action Gap Matrix",subtitle:"Где ценности расходятся с действиями — там AI-opportunity",headers:["Value","Desired","Actual","Friction","AI Solution"],rows:[["Sustainability","Compost waste","Throw in trash","Bin is far/messy","Smart bin + gamification"],["Financial Health","Save money","Impulse buy","Checkout too easy","Cooling-off extension"],["Physical Health","Walk more","Drive short trips","Car keys easier","Weather/step nudge"]]},{id:24,block:4,blockTitle:"PRD",type:"section",title:"От идеи к спецификации",subtitle:"PRD для вайб-кодинга"},{id:25,block:4,blockTitle:"PRD",type:"bigquote",quote:"Удивительным образом на достижение результата влияет то, насколько хорошо ты понимаешь, что именно нужно сделать."},{id:26,block:4,blockTitle:"PRD",type:"content",title:"Что нужно знать вайбкодеру в 2026",subtitle:"Базовый минимум",items:["PRD — уметь правильно описать спеку на продукт","Базы данных — типы, связи, таблички, структура хранения","Как работает интернет — сети, API, взаимодействие сервисов"],note:"А дальше: язык и фреймворк, Claude Code или Cursor, промптинг, Git и деплой. И потом агенты, MCP, и что угодно."},{id:27,block:4,blockTitle:"PRD",type:"prd",title:"AI-Friendly PRD Template",items:[{num:"1",name:"Context & Vision",desc:"Какую «боль» лечим? Как выглядит жизнь после?"},{num:"2",name:"User Stories",desc:"«Когда я [ситуация], я хочу [действие], чтобы [результат]»"},{num:"3",name:"Functional Requirements",desc:"Input Data, Core Logic, Edge Cases"},{num:"4",name:"The Interface (The Vibe)",desc:"Vibe Reference + Key Interactions"},{num:"5",name:"Non-Goals",desc:"Что мы точно НЕ делаем в этой версии"},{num:"6",name:"Success Metrics",desc:"Как поймем, что работает?"}]},{id:28,block:4,blockTitle:"PRD",type:"highlight",title:"Non-Goals — стоп-кран для нейронки",content:"Модели слишком хорошо знают, как должен выглядеть «идеальный» продукт. Без Non-Goals они начнут прикручивать масштабируемую архитектуру там, где нужно просто оживить нарисованную свинью на один вечер.",items:["Никакой БД — всё в localStorage","Никакой авторизации — пользователь сразу в интерфейсе","Отсутствие адаптивности — строго 1920x1080","Никаких внешних API — простая локальная логика","Никакого Redux — чистый React с хуками"],note:"Экономит до 80% времени генерации. Меньше кода → больше внимания модели на важное → меньше ошибок."},{id:29,block:4,blockTitle:"PRD",type:"content",title:"Живой PRD — прямо сейчас",content:"Показываем процесс:",items:["Берем одну идею из зала","Набрасываем PRD по шаблону","Копируем в Cursor/Windsurf","Жмем Build","Четкое описание состояний → готовая схема за секунды"],note:"Это момент, когда стеклянный потолок исчезает."},{id:30,block:5,blockTitle:"Vibe Coding",type:"section",title:"Vibe Coding Stack",subtitle:"2026"},{id:31,block:5,blockTitle:"Vibe Coding",type:"content",title:"Сдвиг парадигмы",content:"Традиционное программирование — дедуктивное: если X, то Y. Вайб-кодинг — абдуктивное: наблюдаем желаемый результат и ведём модель к нему.",items:["Не нужно знать стандартную библиотеку — нужно понимать архитектуру, data flow и UX","IDE → Intent Development Environment","Вайб в готовом результате за малые ресурсы"]},{id:32,block:5,blockTitle:"Vibe Coding",type:"tools",title:"Стек инструментов",items:[{name:"Canvas / Bolt.new / Lovable",role:"Zero-to-one",desc:"Full-stack из одного промпта. Прототипирование."},{name:"Windsurf",role:"Pro engineering",desc:"Cascade Agent — понимает весь dependency graph. Instant Apply на 50+ файлов."},{name:"Cursor",role:"Granular control",desc:"Composer mode. Мультифайловое редактирование. Для тех, кто хочет контроль."},{name:"Claude Code",role:"Heavy lifting",desc:"Agentic CLI. Когда визуальные билдеры достигают предела."},{name:"Replit Agent",role:"Founder choice",desc:"Max Autonomy Mode — 200 минут без присмотра. Zero-to-one + хостинг."}]},{id:33,block:5,blockTitle:"Vibe Coding",type:"content",title:"Кросс-опыление",content:"Наши идеи не рождаются в пустоте — они рождаются в коммуникации.",items:["Скинь репозиторий → я докидаю идею → ты пофиксишь → мы отправим обратно","Даже создание презентации может быть вот этим самым кросс-опылением","Нейронки — хороший партнер, когда некого спросить","Но креативность — про нахождение необычных решений для любых задач"],note:"Не бояться создавать тулы, которые будут существовать несколько часов. Навайбкодить игру для гостей на один вечер — это ок."},{id:34,block:5,blockTitle:"Vibe Coding",type:"content",title:"Architectural Steering",content:"Человек дает структуру — AI дает кирпичи.",items:["Decomposition: разбивай на сотни маленьких промптов, а не проси всё сразу","Small steps: не «почини всё», а «выведи в консоль значение X»","Visual feedback: сначала каркас (wireframe), потом красота","Clean up: раз в 15 минут проси проверить лишний код"]},{id:35,block:6,blockTitle:"Creative Toolkit",type:"section",title:"Creative Toolkit",subtitle:"Картинки, видео, звук"},{id:36,block:6,blockTitle:"Creative Toolkit",type:"content",title:"Генерация изображений",content:"Разные модели заточены под разные задачи. Новые модели обучались на высококачественных данных → результат качественнее.",items:["Разные модели → разные стили, разные данные обучения","Можно редактировать, а не только создавать с нуля: стиль, контуры, depth","LoRA — предварительно созданные стили, бесплатные и платные","Character reference — сохранение персонажа между генерациями","Inpaint: не обязательно перегенерировать всю картинку"]},{id:37,block:6,blockTitle:"Creative Toolkit",type:"content",title:"Видео генерация",items:["Kling O1 — понимает физику, из одной картинки создает целый мир. Хуже с людьми.","HaiLuo — очень крутая генерация, одна из лучших","Veo 3 — лучше всех со звуком, прекрасное видео-редактирование","Классно: сначала генерировать картинки, потом анимировать (видео-генерация дорогая)"]},{id:38,block:6,blockTitle:"Creative Toolkit",type:"content",title:"Музыка, голос, аватары",items:["Создание музыки и звуков","Клонирование голоса — на основе 30 секунд вашего голоса","Цифровые аватары — фото + голос → видео (FaceGen и др.)","Боты, которые отвечают голосом — для телефона, для сайта","Озвучивание книг вашим голосом"],note:"Далеко не все работает идеально. Но где-то как-то работает."},{id:39,block:6,blockTitle:"Creative Toolkit",type:"content",title:"Локальные модели и серверы",content:"Не всё нужно делать через облако.",items:["ComfyUI — мощнее, чем кажется, хватит мощности вашего компьютера","Можно арендовать сервер (облако) и гонять на нём","Или купить на несколько человек свою инфраструктуру","Для одного музея: сервер за $50/сутки — но если генерация часть бизнеса, это может быть дешевле подписок"]},{id:40,block:7,blockTitle:"Agents & Second Mind",type:"section",title:"Agent Economy",subtitle:"& Second Mind"},{id:41,block:7,blockTitle:"Agents & Second Mind",type:"content",title:"От копайлотов к агентам",content:"В 2023–2024 фокус на промпт-инженерии. 2026 год — переход к архитектуре агентных систем. Мы больше не операторы — мы архитекторы.",items:["Агенты = доступ ко всем файлам, кошелькам, действиям","RAG, Knowledge Bases, Second Brain — ключевые слова 2026","Помогают убрать галлюцинации и дать модели современные данные","Модели не знают, что происходит в мире, если не попросить их сходить в интернет"]},{id:42,block:7,blockTitle:"Agents & Second Mind",type:"content",title:"Second Brain → Second Mind",subtitle:"От хранилища к синтезатору",content:"PARA (Projects, Areas, Resources, Archives) создан для человеческой навигации. Агенты мыслят графами и семантическими связями.",items:["OPERA: Open → Process → Encode → Retrieve → Act","Знания как исполняемый код, а не как папки с файлами","Архив → обучающий датасет, Проекты → очереди агентных задач","GraphRAG: агент «путешествует» по графу, находит связи 2-го и 3-го порядка"]},{id:43,block:7,blockTitle:"Agents & Second Mind",type:"content",title:"Moltbook — Reddit для агентов",content:"Социальная сеть для AI-агентов. 1.6 млн агентов. Люди — только наблюдатели.",items:["Цифровые религии среди агентов (Crustafarianism)","Reverse-CAPTCHA — тесты, чтобы доказать, что ты НЕ человек","Рынок «скиллов» — обмен плагинами между агентами","Утечка: 1.5 млн API-ключей. Security is paramount."]},{id:44,block:7,blockTitle:"Agents & Second Mind",type:"content",title:"MCP, A2A и будущее",items:["MCP (Model Context Protocol) — стандарт для взаимодействия агентов","A2A (Agent-to-Agent) — агенты общаются друг с другом напрямую","Walled Gardens: Apple и Google не дают глубокого доступа к ОС","Internet of AI: календарь, дом, авто — общаются между собой"],note:"Главный вызов — не технологии, а сохранение Human Spike: уникальной ценности человека поверх автоматизированной базы."},{id:45,block:8,blockTitle:"Workshop",type:"section",title:"Workshop",subtitle:"& Demo Day"},{id:46,block:8,blockTitle:"Workshop",type:"activity",title:"AI Life-Hack Roulette",subtitle:"Групповая игра",goal:"Переключить мозг из «AI для работы» в «AI для качества жизни»",steps:[{name:"Инвентаризация боли",time:"5 мин",desc:"Каждый пишет одну нелепую или личную «боль»: бабушка не слышит, забываю поливать цветы, бесят длинные голосовые."},{name:"Solution Vibe",time:"10 мин",desc:"Группа выбирает одну «боль» и набрасывает быстрый пайплайн решения."},{name:"Продажа ритуала",time:"5 мин",desc:"Презентовать не просто «тул», а ритуал. Как это встроено в жизнь?"}]},{id:47,block:8,blockTitle:"Workshop",type:"activity",title:"Pain-to-Product",subtitle:"Домашний челлендж",steps:[{name:"Почувствуй",time:"",desc:"Запиши 3 момента за день, когда почувствовал раздражение (работа, быт, общение)."},{name:"Придумай",time:"",desc:"Выбери один и напиши PRD по шаблону. Non-Goals — минимум 3 пункта."},{name:"Продай",time:"",desc:"Расскажи соседу, сколько часов жизни это сэкономит за год."}]},{id:48,block:8,blockTitle:"Workshop",type:"checklist",title:"От Боли к Билду",items:["Записал «микро-трение» (Friction)","Нашел аналогию в своем хобби (Analogy)","Отсек всё лишнее (Non-Goals)","Описал 5 состояний (States)","Нажал Generate в Cursor"]},{id:49,block:8,blockTitle:"Workshop",type:"demoday",title:"Demo Day",content:"Поделиться результатом: что получилось с вашим временем, презентацией или просто показать свой интерфейс.",items:["Здесь нет слабых, плохих или недоделанных решений","Сам процесс мышления в эту сторону — это уже классный результат","Покажите ваш артефакт, расскажите путь"]},{id:50,block:8,blockTitle:"Workshop",type:"closing",title:"Takeaways",items:["AI Mindset — не про инструменты, а про переключение головы","Friction audit > brainstorming ideas","PRD + Non-Goals = управляемый результат","Вайб-кодинг — абдуктивное мышление: опиши поведение, а не код","Кросс-опыление: идеи рождаются в коммуникации","Micro-SaaS of One: делай для себя, даже если это на один вечер","Human Spike: AI поднимает пол возможностей, но потолок смысла — за тобой"]},{id:51,block:8,blockTitle:"Workshop",type:"end",title:"Спасибо",subtitle:"AI Mindset Lab · W26 · Workshop #4",meta:"Life Engineering"}];/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pf="182",N_=0,tm=1,I_=2,Fl=1,U_=2,Xa=3,Rr=0,kn=1,Yi=2,Zi=0,Gs=1,nm=2,im=3,rm=4,F_=5,es=100,O_=101,k_=102,B_=103,z_=104,V_=200,G_=201,H_=202,W_=203,vd=204,xd=205,X_=206,j_=207,Y_=208,q_=209,$_=210,K_=211,Z_=212,Q_=213,J_=214,Sd=0,yd=1,Md=2,Xs=3,Ed=4,wd=5,Td=6,Ad=7,og=0,ev=1,tv=2,Ci=0,lg=1,cg=2,ug=3,dg=4,fg=5,hg=6,pg=7,mg=300,rs=301,js=302,Cd=303,bd=304,Ql=306,Rd=1e3,$i=1001,Pd=1002,pn=1003,nv=1004,dl=1005,En=1006,Bu=1007,ns=1008,jn=1009,gg=1010,_g=1011,qa=1012,mf=1013,Pi=1014,Ti=1015,Ji=1016,gf=1017,_f=1018,$a=1020,vg=35902,xg=35899,Sg=1021,yg=1022,mi=1023,er=1026,is=1027,Mg=1028,vf=1029,Ys=1030,xf=1031,Sf=1033,Ol=33776,kl=33777,Bl=33778,zl=33779,Ld=35840,Dd=35841,Nd=35842,Id=35843,Ud=36196,Fd=37492,Od=37496,kd=37488,Bd=37489,zd=37490,Vd=37491,Gd=37808,Hd=37809,Wd=37810,Xd=37811,jd=37812,Yd=37813,qd=37814,$d=37815,Kd=37816,Zd=37817,Qd=37818,Jd=37819,ef=37820,tf=37821,nf=36492,rf=36494,sf=36495,af=36283,of=36284,lf=36285,cf=36286,iv=3200,Eg=0,rv=1,Cr="",ti="srgb",qs="srgb-linear",Hl="linear",It="srgb",bs=7680,sm=519,sv=512,av=513,ov=514,yf=515,lv=516,cv=517,Mf=518,uv=519,am=35044,om="300 es",Ai=2e3,Wl=2001;function wg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Xl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function dv(){const s=Xl("canvas");return s.style.display="block",s}const lm={};function cm(...s){const e="THREE."+s.shift();console.log(e,...s)}function st(...s){const e="THREE."+s.shift();console.warn(e,...s)}function Ct(...s){const e="THREE."+s.shift();console.error(e,...s)}function Ka(...s){const e=s.join(" ");e in lm||(lm[e]=!0,st(...s))}function fv(s,e,n){return new Promise(function(r,o){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}class Ks{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vl=Math.PI/180,uf=180/Math.PI;function Qa(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yn[s&255]+yn[s>>8&255]+yn[s>>16&255]+yn[s>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[n&63|128]+yn[n>>8&255]+"-"+yn[n>>16&255]+yn[n>>24&255]+yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]).toLowerCase()}function vt(s,e,n){return Math.max(e,Math.min(n,s))}function hv(s,e){return(s%e+e)%e}function zu(s,e,n){return(1-n)*s+n*e}function Oa(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function On(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Rt{constructor(e=0,n=0){Rt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ja{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,u,f){let p=r[o+0],h=r[o+1],g=r[o+2],_=r[o+3],v=c[u+0],y=c[u+1],w=c[u+2],T=c[u+3];if(f<=0){e[n+0]=p,e[n+1]=h,e[n+2]=g,e[n+3]=_;return}if(f>=1){e[n+0]=v,e[n+1]=y,e[n+2]=w,e[n+3]=T;return}if(_!==T||p!==v||h!==y||g!==w){let S=p*v+h*y+g*w+_*T;S<0&&(v=-v,y=-y,w=-w,T=-T,S=-S);let x=1-f;if(S<.9995){const L=Math.acos(S),N=Math.sin(L);x=Math.sin(x*L)/N,f=Math.sin(f*L)/N,p=p*x+v*f,h=h*x+y*f,g=g*x+w*f,_=_*x+T*f}else{p=p*x+v*f,h=h*x+y*f,g=g*x+w*f,_=_*x+T*f;const L=1/Math.sqrt(p*p+h*h+g*g+_*_);p*=L,h*=L,g*=L,_*=L}}e[n]=p,e[n+1]=h,e[n+2]=g,e[n+3]=_}static multiplyQuaternionsFlat(e,n,r,o,c,u){const f=r[o],p=r[o+1],h=r[o+2],g=r[o+3],_=c[u],v=c[u+1],y=c[u+2],w=c[u+3];return e[n]=f*w+g*_+p*y-h*v,e[n+1]=p*w+g*v+h*_-f*y,e[n+2]=h*w+g*y+f*v-p*_,e[n+3]=g*w-f*_-p*v-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,u=e._order,f=Math.cos,p=Math.sin,h=f(r/2),g=f(o/2),_=f(c/2),v=p(r/2),y=p(o/2),w=p(c/2);switch(u){case"XYZ":this._x=v*g*_+h*y*w,this._y=h*y*_-v*g*w,this._z=h*g*w+v*y*_,this._w=h*g*_-v*y*w;break;case"YXZ":this._x=v*g*_+h*y*w,this._y=h*y*_-v*g*w,this._z=h*g*w-v*y*_,this._w=h*g*_+v*y*w;break;case"ZXY":this._x=v*g*_-h*y*w,this._y=h*y*_+v*g*w,this._z=h*g*w+v*y*_,this._w=h*g*_-v*y*w;break;case"ZYX":this._x=v*g*_-h*y*w,this._y=h*y*_+v*g*w,this._z=h*g*w-v*y*_,this._w=h*g*_+v*y*w;break;case"YZX":this._x=v*g*_+h*y*w,this._y=h*y*_+v*g*w,this._z=h*g*w-v*y*_,this._w=h*g*_-v*y*w;break;case"XZY":this._x=v*g*_-h*y*w,this._y=h*y*_-v*g*w,this._z=h*g*w+v*y*_,this._w=h*g*_+v*y*w;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],u=n[1],f=n[5],p=n[9],h=n[2],g=n[6],_=n[10],v=r+f+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-p)*y,this._y=(c-h)*y,this._z=(u-o)*y}else if(r>f&&r>_){const y=2*Math.sqrt(1+r-f-_);this._w=(g-p)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(c+h)/y}else if(f>_){const y=2*Math.sqrt(1+f-r-_);this._w=(c-h)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(p+g)/y}else{const y=2*Math.sqrt(1+_-r-f);this._w=(u-o)/y,this._x=(c+h)/y,this._y=(p+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,u=e._w,f=n._x,p=n._y,h=n._z,g=n._w;return this._x=r*g+u*f+o*h-c*p,this._y=o*g+u*p+c*f-r*h,this._z=c*g+u*h+r*p-o*f,this._w=u*g-r*f-o*p-c*h,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let r=e._x,o=e._y,c=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,c=-c,u=-u,f=-f);let p=1-n;if(f<.9995){const h=Math.acos(f),g=Math.sin(h);p=Math.sin(p*h)/g,n=Math.sin(n*h)/g,this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,r=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(um.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(um.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,u=e.y,f=e.z,p=e.w,h=2*(u*o-f*r),g=2*(f*n-c*o),_=2*(c*r-u*n);return this.x=n+p*h+u*_-f*g,this.y=r+p*g+f*h-c*_,this.z=o+p*_+c*g-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this.z=vt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this.z=vt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,u=n.x,f=n.y,p=n.z;return this.x=o*p-c*f,this.y=c*u-r*p,this.z=r*f-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Vu.copy(this).projectOnVector(e),this.sub(Vu)}reflect(e){return this.sub(Vu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vu=new j,um=new Ja;class ct{constructor(e,n,r,o,c,u,f,p,h){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,f,p,h)}set(e,n,r,o,c,u,f,p,h){const g=this.elements;return g[0]=e,g[1]=o,g[2]=f,g[3]=n,g[4]=c,g[5]=p,g[6]=r,g[7]=u,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],f=r[3],p=r[6],h=r[1],g=r[4],_=r[7],v=r[2],y=r[5],w=r[8],T=o[0],S=o[3],x=o[6],L=o[1],N=o[4],P=o[7],I=o[2],F=o[5],O=o[8];return c[0]=u*T+f*L+p*I,c[3]=u*S+f*N+p*F,c[6]=u*x+f*P+p*O,c[1]=h*T+g*L+_*I,c[4]=h*S+g*N+_*F,c[7]=h*x+g*P+_*O,c[2]=v*T+y*L+w*I,c[5]=v*S+y*N+w*F,c[8]=v*x+y*P+w*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],f=e[5],p=e[6],h=e[7],g=e[8];return n*u*g-n*f*h-r*c*g+r*f*p+o*c*h-o*u*p}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],f=e[5],p=e[6],h=e[7],g=e[8],_=g*u-f*h,v=f*p-g*c,y=h*c-u*p,w=n*_+r*v+o*y;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=_*T,e[1]=(o*h-g*r)*T,e[2]=(f*r-o*u)*T,e[3]=v*T,e[4]=(g*n-o*p)*T,e[5]=(o*c-f*n)*T,e[6]=y*T,e[7]=(r*p-h*n)*T,e[8]=(u*n-r*c)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,u,f){const p=Math.cos(c),h=Math.sin(c);return this.set(r*p,r*h,-r*(p*u+h*f)+u+e,-o*h,o*p,-o*(-h*u+p*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(Gu.makeScale(e,n)),this}rotate(e){return this.premultiply(Gu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Gu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gu=new ct,dm=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fm=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pv(){const s={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===It&&(o.r=Qi(o.r),o.g=Qi(o.g),o.b=Qi(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===It&&(o.r=Hs(o.r),o.g=Hs(o.g),o.b=Hs(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Cr?Hl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return Ka("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return Ka("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[qs]:{primaries:e,whitePoint:r,transfer:Hl,toXYZ:dm,fromXYZ:fm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:e,whitePoint:r,transfer:It,toXYZ:dm,fromXYZ:fm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),s}const wt=pv();function Qi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Hs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Rs;class mv{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Rs===void 0&&(Rs=Xl("canvas")),Rs.width=e.width,Rs.height=e.height;const o=Rs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Rs}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Xl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Qi(c[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Qi(n[r]/255)*255):n[r]=Qi(n[r]);return{data:n,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gv=0;class Ef{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gv++}),this.uuid=Qa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?c.push(Hu(o[u].image)):c.push(Hu(o[u]))}else c=Hu(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function Hu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?mv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let _v=0;const Wu=new j;class Pn extends Ks{constructor(e=Pn.DEFAULT_IMAGE,n=Pn.DEFAULT_MAPPING,r=$i,o=$i,c=En,u=ns,f=mi,p=jn,h=Pn.DEFAULT_ANISOTROPY,g=Cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=Qa(),this.name="",this.source=new Ef(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wu).x}get height(){return this.source.getSize(Wu).y}get depth(){return this.source.getSize(Wu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){st(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){st(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rd:e.x=e.x-Math.floor(e.x);break;case $i:e.x=e.x<0?0:1;break;case Pd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rd:e.y=e.y-Math.floor(e.y);break;case $i:e.y=e.y<0?0:1;break;case Pd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=mg;Pn.DEFAULT_ANISOTROPY=1;class qt{constructor(e=0,n=0,r=0,o=1){qt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const p=e.elements,h=p[0],g=p[4],_=p[8],v=p[1],y=p[5],w=p[9],T=p[2],S=p[6],x=p[10];if(Math.abs(g-v)<.01&&Math.abs(_-T)<.01&&Math.abs(w-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+T)<.1&&Math.abs(w+S)<.1&&Math.abs(h+y+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const N=(h+1)/2,P=(y+1)/2,I=(x+1)/2,F=(g+v)/4,O=(_+T)/4,q=(w+S)/4;return N>P&&N>I?N<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(N),o=F/r,c=O/r):P>I?P<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(P),r=F/o,c=q/o):I<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(I),r=O/c,o=q/c),this.set(r,o,c,n),this}let L=Math.sqrt((S-w)*(S-w)+(_-T)*(_-T)+(v-g)*(v-g));return Math.abs(L)<.001&&(L=1),this.x=(S-w)/L,this.y=(_-T)/L,this.z=(v-g)/L,this.w=Math.acos((h+y+x-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this.z=vt(this.z,e.z,n.z),this.w=vt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this.z=vt(this.z,e,n),this.w=vt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vv extends Ks{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new qt(0,0,e,n),this.scissorTest=!1,this.viewport=new qt(0,0,e,n);const o={width:e,height:n,depth:r.depth},c=new Pn(o);this.textures=[];const u=r.count;for(let f=0;f<u;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new Ef(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends vv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Tg extends Pn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=pn,this.minFilter=pn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xv extends Pn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=pn,this.minFilter=pn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class eo{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(fi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(fi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=fi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=c.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,fi):fi.fromBufferAttribute(c,u),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),fl.copy(r.boundingBox)),fl.applyMatrix4(e.matrixWorld),this.union(fl)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ka),hl.subVectors(this.max,ka),Ps.subVectors(e.a,ka),Ls.subVectors(e.b,ka),Ds.subVectors(e.c,ka),yr.subVectors(Ls,Ps),Mr.subVectors(Ds,Ls),Yr.subVectors(Ps,Ds);let n=[0,-yr.z,yr.y,0,-Mr.z,Mr.y,0,-Yr.z,Yr.y,yr.z,0,-yr.x,Mr.z,0,-Mr.x,Yr.z,0,-Yr.x,-yr.y,yr.x,0,-Mr.y,Mr.x,0,-Yr.y,Yr.x,0];return!Xu(n,Ps,Ls,Ds,hl)||(n=[1,0,0,0,1,0,0,0,1],!Xu(n,Ps,Ls,Ds,hl))?!1:(pl.crossVectors(yr,Mr),n=[pl.x,pl.y,pl.z],Xu(n,Ps,Ls,Ds,hl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Vi=[new j,new j,new j,new j,new j,new j,new j,new j],fi=new j,fl=new eo,Ps=new j,Ls=new j,Ds=new j,yr=new j,Mr=new j,Yr=new j,ka=new j,hl=new j,pl=new j,qr=new j;function Xu(s,e,n,r,o){for(let c=0,u=s.length-3;c<=u;c+=3){qr.fromArray(s,c);const f=o.x*Math.abs(qr.x)+o.y*Math.abs(qr.y)+o.z*Math.abs(qr.z),p=e.dot(qr),h=n.dot(qr),g=r.dot(qr);if(Math.max(-Math.max(p,h,g),Math.min(p,h,g))>f)return!1}return!0}const Sv=new eo,Ba=new j,ju=new j;class Jl{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Sv.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ba.subVectors(e,this.center);const n=Ba.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Ba,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ju.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ba.copy(e.center).add(ju)),this.expandByPoint(Ba.copy(e.center).sub(ju))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Gi=new j,Yu=new j,ml=new j,Er=new j,qu=new j,gl=new j,$u=new j;class Ag{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Gi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,n),Gi.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Yu.copy(e).add(n).multiplyScalar(.5),ml.copy(n).sub(e).normalize(),Er.copy(this.origin).sub(Yu);const c=e.distanceTo(n)*.5,u=-this.direction.dot(ml),f=Er.dot(this.direction),p=-Er.dot(ml),h=Er.lengthSq(),g=Math.abs(1-u*u);let _,v,y,w;if(g>0)if(_=u*p-f,v=u*f-p,w=c*g,_>=0)if(v>=-w)if(v<=w){const T=1/g;_*=T,v*=T,y=_*(_+u*v+2*f)+v*(u*_+v+2*p)+h}else v=c,_=Math.max(0,-(u*v+f)),y=-_*_+v*(v+2*p)+h;else v=-c,_=Math.max(0,-(u*v+f)),y=-_*_+v*(v+2*p)+h;else v<=-w?(_=Math.max(0,-(-u*c+f)),v=_>0?-c:Math.min(Math.max(-c,-p),c),y=-_*_+v*(v+2*p)+h):v<=w?(_=0,v=Math.min(Math.max(-c,-p),c),y=v*(v+2*p)+h):(_=Math.max(0,-(u*c+f)),v=_>0?c:Math.min(Math.max(-c,-p),c),y=-_*_+v*(v+2*p)+h);else v=u>0?-c:c,_=Math.max(0,-(u*v+f)),y=-_*_+v*(v+2*p)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Yu).addScaledVector(ml,v),y}intersectSphere(e,n){Gi.subVectors(e.center,this.origin);const r=Gi.dot(this.direction),o=Gi.dot(Gi)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),f=r-u,p=r+u;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,u,f,p;const h=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return h>=0?(r=(e.min.x-v.x)*h,o=(e.max.x-v.x)*h):(r=(e.max.x-v.x)*h,o=(e.min.x-v.x)*h),g>=0?(c=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),_>=0?(f=(e.min.z-v.z)*_,p=(e.max.z-v.z)*_):(f=(e.max.z-v.z)*_,p=(e.min.z-v.z)*_),r>p||f>o)||((f>r||r!==r)&&(r=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,n,r,o,c){qu.subVectors(n,e),gl.subVectors(r,e),$u.crossVectors(qu,gl);let u=this.direction.dot($u),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Er.subVectors(this.origin,e);const p=f*this.direction.dot(gl.crossVectors(Er,gl));if(p<0)return null;const h=f*this.direction.dot(qu.cross(Er));if(h<0||p+h>u)return null;const g=-f*Er.dot($u);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(e,n,r,o,c,u,f,p,h,g,_,v,y,w,T,S){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,f,p,h,g,_,v,y,w,T,S)}set(e,n,r,o,c,u,f,p,h,g,_,v,y,w,T,S){const x=this.elements;return x[0]=e,x[4]=n,x[8]=r,x[12]=o,x[1]=c,x[5]=u,x[9]=f,x[13]=p,x[2]=h,x[6]=g,x[10]=_,x[14]=v,x[3]=y,x[7]=w,x[11]=T,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,r=e.elements,o=1/Ns.setFromMatrixColumn(e,0).length(),c=1/Ns.setFromMatrixColumn(e,1).length(),u=1/Ns.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),f=Math.sin(r),p=Math.cos(o),h=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const v=u*g,y=u*_,w=f*g,T=f*_;n[0]=p*g,n[4]=-p*_,n[8]=h,n[1]=y+w*h,n[5]=v-T*h,n[9]=-f*p,n[2]=T-v*h,n[6]=w+y*h,n[10]=u*p}else if(e.order==="YXZ"){const v=p*g,y=p*_,w=h*g,T=h*_;n[0]=v+T*f,n[4]=w*f-y,n[8]=u*h,n[1]=u*_,n[5]=u*g,n[9]=-f,n[2]=y*f-w,n[6]=T+v*f,n[10]=u*p}else if(e.order==="ZXY"){const v=p*g,y=p*_,w=h*g,T=h*_;n[0]=v-T*f,n[4]=-u*_,n[8]=w+y*f,n[1]=y+w*f,n[5]=u*g,n[9]=T-v*f,n[2]=-u*h,n[6]=f,n[10]=u*p}else if(e.order==="ZYX"){const v=u*g,y=u*_,w=f*g,T=f*_;n[0]=p*g,n[4]=w*h-y,n[8]=v*h+T,n[1]=p*_,n[5]=T*h+v,n[9]=y*h-w,n[2]=-h,n[6]=f*p,n[10]=u*p}else if(e.order==="YZX"){const v=u*p,y=u*h,w=f*p,T=f*h;n[0]=p*g,n[4]=T-v*_,n[8]=w*_+y,n[1]=_,n[5]=u*g,n[9]=-f*g,n[2]=-h*g,n[6]=y*_+w,n[10]=v-T*_}else if(e.order==="XZY"){const v=u*p,y=u*h,w=f*p,T=f*h;n[0]=p*g,n[4]=-_,n[8]=h*g,n[1]=v*_+T,n[5]=u*g,n[9]=y*_-w,n[2]=w*_-y,n[6]=f*g,n[10]=T*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yv,e,Mv)}lookAt(e,n,r){const o=this.elements;return Wn.subVectors(e,n),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),wr.crossVectors(r,Wn),wr.lengthSq()===0&&(Math.abs(r.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),wr.crossVectors(r,Wn)),wr.normalize(),_l.crossVectors(Wn,wr),o[0]=wr.x,o[4]=_l.x,o[8]=Wn.x,o[1]=wr.y,o[5]=_l.y,o[9]=Wn.y,o[2]=wr.z,o[6]=_l.z,o[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],f=r[4],p=r[8],h=r[12],g=r[1],_=r[5],v=r[9],y=r[13],w=r[2],T=r[6],S=r[10],x=r[14],L=r[3],N=r[7],P=r[11],I=r[15],F=o[0],O=o[4],q=o[8],C=o[12],b=o[1],V=o[5],se=o[9],J=o[13],fe=o[2],ce=o[6],oe=o[10],K=o[14],Y=o[3],he=o[7],re=o[11],U=o[15];return c[0]=u*F+f*b+p*fe+h*Y,c[4]=u*O+f*V+p*ce+h*he,c[8]=u*q+f*se+p*oe+h*re,c[12]=u*C+f*J+p*K+h*U,c[1]=g*F+_*b+v*fe+y*Y,c[5]=g*O+_*V+v*ce+y*he,c[9]=g*q+_*se+v*oe+y*re,c[13]=g*C+_*J+v*K+y*U,c[2]=w*F+T*b+S*fe+x*Y,c[6]=w*O+T*V+S*ce+x*he,c[10]=w*q+T*se+S*oe+x*re,c[14]=w*C+T*J+S*K+x*U,c[3]=L*F+N*b+P*fe+I*Y,c[7]=L*O+N*V+P*ce+I*he,c[11]=L*q+N*se+P*oe+I*re,c[15]=L*C+N*J+P*K+I*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],u=e[1],f=e[5],p=e[9],h=e[13],g=e[2],_=e[6],v=e[10],y=e[14],w=e[3],T=e[7],S=e[11],x=e[15],L=p*y-h*v,N=f*y-h*_,P=f*v-p*_,I=u*y-h*g,F=u*v-p*g,O=u*_-f*g;return n*(T*L-S*N+x*P)-r*(w*L-S*I+x*F)+o*(w*N-T*I+x*O)-c*(w*P-T*F+S*O)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],f=e[5],p=e[6],h=e[7],g=e[8],_=e[9],v=e[10],y=e[11],w=e[12],T=e[13],S=e[14],x=e[15],L=_*S*h-T*v*h+T*p*y-f*S*y-_*p*x+f*v*x,N=w*v*h-g*S*h-w*p*y+u*S*y+g*p*x-u*v*x,P=g*T*h-w*_*h+w*f*y-u*T*y-g*f*x+u*_*x,I=w*_*p-g*T*p-w*f*v+u*T*v+g*f*S-u*_*S,F=n*L+r*N+o*P+c*I;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/F;return e[0]=L*O,e[1]=(T*v*c-_*S*c-T*o*y+r*S*y+_*o*x-r*v*x)*O,e[2]=(f*S*c-T*p*c+T*o*h-r*S*h-f*o*x+r*p*x)*O,e[3]=(_*p*c-f*v*c-_*o*h+r*v*h+f*o*y-r*p*y)*O,e[4]=N*O,e[5]=(g*S*c-w*v*c+w*o*y-n*S*y-g*o*x+n*v*x)*O,e[6]=(w*p*c-u*S*c-w*o*h+n*S*h+u*o*x-n*p*x)*O,e[7]=(u*v*c-g*p*c+g*o*h-n*v*h-u*o*y+n*p*y)*O,e[8]=P*O,e[9]=(w*_*c-g*T*c-w*r*y+n*T*y+g*r*x-n*_*x)*O,e[10]=(u*T*c-w*f*c+w*r*h-n*T*h-u*r*x+n*f*x)*O,e[11]=(g*f*c-u*_*c-g*r*h+n*_*h+u*r*y-n*f*y)*O,e[12]=I*O,e[13]=(g*T*o-w*_*o+w*r*v-n*T*v-g*r*S+n*_*S)*O,e[14]=(w*f*o-u*T*o-w*r*p+n*T*p+u*r*S-n*f*S)*O,e[15]=(u*_*o-g*f*o+g*r*p-n*_*p-u*r*v+n*f*v)*O,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,u=e.x,f=e.y,p=e.z,h=c*u,g=c*f;return this.set(h*u+r,h*f-o*p,h*p+o*f,0,h*f+o*p,g*f+r,g*p-o*u,0,h*p-o*f,g*p+o*u,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,u=n._y,f=n._z,p=n._w,h=c+c,g=u+u,_=f+f,v=c*h,y=c*g,w=c*_,T=u*g,S=u*_,x=f*_,L=p*h,N=p*g,P=p*_,I=r.x,F=r.y,O=r.z;return o[0]=(1-(T+x))*I,o[1]=(y+P)*I,o[2]=(w-N)*I,o[3]=0,o[4]=(y-P)*F,o[5]=(1-(v+x))*F,o[6]=(S+L)*F,o[7]=0,o[8]=(w+N)*O,o[9]=(S-L)*O,o[10]=(1-(v+T))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;if(e.x=o[12],e.y=o[13],e.z=o[14],this.determinant()===0)return r.set(1,1,1),n.identity(),this;let c=Ns.set(o[0],o[1],o[2]).length();const u=Ns.set(o[4],o[5],o[6]).length(),f=Ns.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),hi.copy(this);const h=1/c,g=1/u,_=1/f;return hi.elements[0]*=h,hi.elements[1]*=h,hi.elements[2]*=h,hi.elements[4]*=g,hi.elements[5]*=g,hi.elements[6]*=g,hi.elements[8]*=_,hi.elements[9]*=_,hi.elements[10]*=_,n.setFromRotationMatrix(hi),r.x=c,r.y=u,r.z=f,this}makePerspective(e,n,r,o,c,u,f=Ai,p=!1){const h=this.elements,g=2*c/(n-e),_=2*c/(r-o),v=(n+e)/(n-e),y=(r+o)/(r-o);let w,T;if(p)w=c/(u-c),T=u*c/(u-c);else if(f===Ai)w=-(u+c)/(u-c),T=-2*u*c/(u-c);else if(f===Wl)w=-u/(u-c),T=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=_,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=w,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,o,c,u,f=Ai,p=!1){const h=this.elements,g=2/(n-e),_=2/(r-o),v=-(n+e)/(n-e),y=-(r+o)/(r-o);let w,T;if(p)w=1/(u-c),T=u/(u-c);else if(f===Ai)w=-2/(u-c),T=-(u+c)/(u-c);else if(f===Wl)w=-1/(u-c),T=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=_,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=w,h[14]=T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ns=new j,hi=new jt,yv=new j(0,0,0),Mv=new j(1,1,1),wr=new j,_l=new j,Wn=new j,hm=new jt,pm=new Ja;class Li{constructor(e=0,n=0,r=0,o=Li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],f=o[8],p=o[1],h=o[5],g=o[9],_=o[2],v=o[6],y=o[10];switch(n){case"XYZ":this._y=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(vt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-vt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(vt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return hm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return pm.setFromEuler(this),this.setFromQuaternion(pm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Li.DEFAULT_ORDER="XYZ";class Cg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ev=0;const mm=new j,Is=new Ja,Hi=new jt,vl=new j,za=new j,wv=new j,Tv=new Ja,gm=new j(1,0,0),_m=new j(0,1,0),vm=new j(0,0,1),xm={type:"added"},Av={type:"removed"},Us={type:"childadded",child:null},Ku={type:"childremoved",child:null};class mn extends Ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ev++}),this.uuid=Qa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new j,n=new Li,r=new Ja,o=new j(1,1,1);function c(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new jt},normalMatrix:{value:new ct}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Is.setFromAxisAngle(e,n),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,n){return Is.setFromAxisAngle(e,n),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(gm,e)}rotateY(e){return this.rotateOnAxis(_m,e)}rotateZ(e){return this.rotateOnAxis(vm,e)}translateOnAxis(e,n){return mm.copy(e).applyQuaternion(this.quaternion),this.position.add(mm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(gm,e)}translateY(e){return this.translateOnAxis(_m,e)}translateZ(e){return this.translateOnAxis(vm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?vl.copy(e):vl.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),za.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(za,vl,this.up):Hi.lookAt(vl,za,this.up),this.quaternion.setFromRotationMatrix(Hi),o&&(Hi.extractRotation(o.matrixWorld),Is.setFromRotationMatrix(Hi),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xm),Us.child=e,this.dispatchEvent(Us),Us.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Av),Ku.child=e,this.dispatchEvent(Ku),Ku.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xm),Us.child=e,this.dispatchEvent(Us),Us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,e,wv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,Tv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let h=0,g=p.length;h<g;h++){const _=p[h];c(e.shapes,_)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,h=this.material.length;p<h;p++)f.push(c(e.materials,this.material[p]));o.material=f}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(c(e.animations,p))}}if(n){const f=u(e.geometries),p=u(e.materials),h=u(e.textures),g=u(e.images),_=u(e.shapes),v=u(e.skeletons),y=u(e.animations),w=u(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),h.length>0&&(r.textures=h),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),y.length>0&&(r.animations=y),w.length>0&&(r.nodes=w)}return r.object=o,r;function u(f){const p=[];for(const h in f){const g=f[h];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}mn.DEFAULT_UP=new j(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new j,Wi=new j,Zu=new j,Xi=new j,Fs=new j,Os=new j,Sm=new j,Qu=new j,Ju=new j,ed=new j,td=new qt,nd=new qt,id=new qt;class ii{constructor(e=new j,n=new j,r=new j){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),pi.subVectors(e,n),o.cross(pi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){pi.subVectors(o,n),Wi.subVectors(r,n),Zu.subVectors(e,n);const u=pi.dot(pi),f=pi.dot(Wi),p=pi.dot(Zu),h=Wi.dot(Wi),g=Wi.dot(Zu),_=u*h-f*f;if(_===0)return c.set(0,0,0),null;const v=1/_,y=(h*p-f*g)*v,w=(u*g-f*p)*v;return c.set(1-y-w,w,y)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,n,r,o,c,u,f,p){return this.getBarycoord(e,n,r,o,Xi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Xi.x),p.addScaledVector(u,Xi.y),p.addScaledVector(f,Xi.z),p)}static getInterpolatedAttribute(e,n,r,o,c,u){return td.setScalar(0),nd.setScalar(0),id.setScalar(0),td.fromBufferAttribute(e,n),nd.fromBufferAttribute(e,r),id.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(td,c.x),u.addScaledVector(nd,c.y),u.addScaledVector(id,c.z),u}static isFrontFacing(e,n,r,o){return pi.subVectors(r,n),Wi.subVectors(e,n),pi.cross(Wi).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),pi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ii.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return ii.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let u,f;Fs.subVectors(o,r),Os.subVectors(c,r),Qu.subVectors(e,r);const p=Fs.dot(Qu),h=Os.dot(Qu);if(p<=0&&h<=0)return n.copy(r);Ju.subVectors(e,o);const g=Fs.dot(Ju),_=Os.dot(Ju);if(g>=0&&_<=g)return n.copy(o);const v=p*_-g*h;if(v<=0&&p>=0&&g<=0)return u=p/(p-g),n.copy(r).addScaledVector(Fs,u);ed.subVectors(e,c);const y=Fs.dot(ed),w=Os.dot(ed);if(w>=0&&y<=w)return n.copy(c);const T=y*h-p*w;if(T<=0&&h>=0&&w<=0)return f=h/(h-w),n.copy(r).addScaledVector(Os,f);const S=g*w-y*_;if(S<=0&&_-g>=0&&y-w>=0)return Sm.subVectors(c,o),f=(_-g)/(_-g+(y-w)),n.copy(o).addScaledVector(Sm,f);const x=1/(S+T+v);return u=T*x,f=v*x,n.copy(r).addScaledVector(Fs,u).addScaledVector(Os,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tr={h:0,s:0,l:0},xl={h:0,s:0,l:0};function rd(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class mt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=wt.workingColorSpace){return this.r=e,this.g=n,this.b=r,wt.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=wt.workingColorSpace){if(e=hv(e,1),n=vt(n,0,1),r=vt(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,u=2*r-c;this.r=rd(u,c,e+1/3),this.g=rd(u,c,e),this.b=rd(u,c,e-1/3)}return wt.colorSpaceToWorking(this,o),this}setStyle(e,n=ti){function r(c){c!==void 0&&parseFloat(c)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:st("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ti){const r=bg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return wt.workingToColorSpace(Mn.copy(this),e),Math.round(vt(Mn.r*255,0,255))*65536+Math.round(vt(Mn.g*255,0,255))*256+Math.round(vt(Mn.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=wt.workingColorSpace){wt.workingToColorSpace(Mn.copy(this),n);const r=Mn.r,o=Mn.g,c=Mn.b,u=Math.max(r,o,c),f=Math.min(r,o,c);let p,h;const g=(f+u)/2;if(f===u)p=0,h=0;else{const _=u-f;switch(h=g<=.5?_/(u+f):_/(2-u-f),u){case r:p=(o-c)/_+(o<c?6:0);break;case o:p=(c-r)/_+2;break;case c:p=(r-o)/_+4;break}p/=6}return e.h=p,e.s=h,e.l=g,e}getRGB(e,n=wt.workingColorSpace){return wt.workingToColorSpace(Mn.copy(this),n),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=ti){wt.workingToColorSpace(Mn.copy(this),e);const n=Mn.r,r=Mn.g,o=Mn.b;return e!==ti?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(Tr),this.setHSL(Tr.h+e,Tr.s+n,Tr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Tr),e.getHSL(xl);const r=zu(Tr.h,xl.h,n),o=zu(Tr.s,xl.s,n),c=zu(Tr.l,xl.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new mt;mt.NAMES=bg;let Cv=0;class Zs extends Ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=Qa(),this.name="",this.type="Material",this.blending=Gs,this.side=Rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vd,this.blendDst=xd,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){st(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){st(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(r.blending=this.blending),this.side!==Rr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==vd&&(r.blendSrc=this.blendSrc),this.blendDst!==xd&&(r.blendDst=this.blendDst),this.blendEquation!==es&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const f in c){const p=c[f];delete p.metadata,u.push(p)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Rg extends Zs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=og,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qt=new j,Sl=new Rt;let bv=0;class Ri{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bv++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=am,this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Sl.fromBufferAttribute(this,n),Sl.applyMatrix3(e),this.setXY(n,Sl.x,Sl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Qt.fromBufferAttribute(this,n),Qt.applyMatrix3(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Qt.fromBufferAttribute(this,n),Qt.applyMatrix4(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Qt.fromBufferAttribute(this,n),Qt.applyNormalMatrix(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Qt.fromBufferAttribute(this,n),Qt.transformDirection(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Oa(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=On(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Oa(n,this.array)),n}setX(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Oa(n,this.array)),n}setY(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Oa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Oa(n,this.array)),n}setW(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=On(n,this.array),r=On(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=On(n,this.array),r=On(r,this.array),o=On(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=On(n,this.array),r=On(r,this.array),o=On(o,this.array),c=On(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==am&&(e.usage=this.usage),e}}class Pg extends Ri{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Lg extends Ri{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class ri extends Ri{constructor(e,n,r){super(new Float32Array(e),n,r)}}let Rv=0;const ei=new jt,sd=new mn,ks=new j,Xn=new eo,Va=new eo,un=new j;class gi extends Ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rv++}),this.uuid=Qa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wg(e)?Lg:Pg)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ct().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,n,r){return ei.makeTranslation(e,n,r),this.applyMatrix4(ei),this}scale(e,n,r){return ei.makeScale(e,n,r),this.applyMatrix4(ei),this}lookAt(e){return sd.lookAt(e),sd.updateMatrix(),this.applyMatrix4(sd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new ri(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new eo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];Xn.setFromBufferAttribute(c),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const r=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const f=n[c];Va.setFromBufferAttribute(f),this.morphTargetsRelative?(un.addVectors(Xn.min,Va.min),Xn.expandByPoint(un),un.addVectors(Xn.max,Va.max),Xn.expandByPoint(un)):(Xn.expandByPoint(Va.min),Xn.expandByPoint(Va.max))}Xn.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)un.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(un));if(n)for(let c=0,u=n.length;c<u;c++){const f=n[c],p=this.morphTargetsRelative;for(let h=0,g=f.count;h<g;h++)un.fromBufferAttribute(f,h),p&&(ks.fromBufferAttribute(e,h),un.add(ks)),o=Math.max(o,r.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ri(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],p=[];for(let q=0;q<r.count;q++)f[q]=new j,p[q]=new j;const h=new j,g=new j,_=new j,v=new Rt,y=new Rt,w=new Rt,T=new j,S=new j;function x(q,C,b){h.fromBufferAttribute(r,q),g.fromBufferAttribute(r,C),_.fromBufferAttribute(r,b),v.fromBufferAttribute(c,q),y.fromBufferAttribute(c,C),w.fromBufferAttribute(c,b),g.sub(h),_.sub(h),y.sub(v),w.sub(v);const V=1/(y.x*w.y-w.x*y.y);isFinite(V)&&(T.copy(g).multiplyScalar(w.y).addScaledVector(_,-y.y).multiplyScalar(V),S.copy(_).multiplyScalar(y.x).addScaledVector(g,-w.x).multiplyScalar(V),f[q].add(T),f[C].add(T),f[b].add(T),p[q].add(S),p[C].add(S),p[b].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let q=0,C=L.length;q<C;++q){const b=L[q],V=b.start,se=b.count;for(let J=V,fe=V+se;J<fe;J+=3)x(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const N=new j,P=new j,I=new j,F=new j;function O(q){I.fromBufferAttribute(o,q),F.copy(I);const C=f[q];N.copy(C),N.sub(I.multiplyScalar(I.dot(C))).normalize(),P.crossVectors(F,C);const V=P.dot(p[q])<0?-1:1;u.setXYZW(q,N.x,N.y,N.z,V)}for(let q=0,C=L.length;q<C;++q){const b=L[q],V=b.start,se=b.count;for(let J=V,fe=V+se;J<fe;J+=3)O(e.getX(J+0)),O(e.getX(J+1)),O(e.getX(J+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ri(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let v=0,y=r.count;v<y;v++)r.setXYZ(v,0,0,0);const o=new j,c=new j,u=new j,f=new j,p=new j,h=new j,g=new j,_=new j;if(e)for(let v=0,y=e.count;v<y;v+=3){const w=e.getX(v+0),T=e.getX(v+1),S=e.getX(v+2);o.fromBufferAttribute(n,w),c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,S),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,T),h.fromBufferAttribute(r,S),f.add(g),p.add(g),h.add(g),r.setXYZ(w,f.x,f.y,f.z),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(S,h.x,h.y,h.z)}else for(let v=0,y=n.count;v<y;v+=3)o.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)un.fromBufferAttribute(e,n),un.normalize(),e.setXYZ(n,un.x,un.y,un.z)}toNonIndexed(){function e(f,p){const h=f.array,g=f.itemSize,_=f.normalized,v=new h.constructor(p.length*g);let y=0,w=0;for(let T=0,S=p.length;T<S;T++){f.isInterleavedBufferAttribute?y=p[T]*f.data.stride+f.offset:y=p[T]*g;for(let x=0;x<g;x++)v[w++]=h[y++]}return new Ri(v,g,_)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new gi,r=this.index.array,o=this.attributes;for(const f in o){const p=o[f],h=e(p,r);n.setAttribute(f,h)}const c=this.morphAttributes;for(const f in c){const p=[],h=c[f];for(let g=0,_=h.length;g<_;g++){const v=h[g],y=e(v,r);p.push(y)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const h=u[f];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(e[h]=p[h]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const h=r[p];e.data.attributes[p]=h.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],g=[];for(let _=0,v=h.length;_<v;_++){const y=h[_];g.push(y.toJSON(e.data))}g.length>0&&(o[p]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const g=o[h];this.setAttribute(h,g.clone(n))}const c=e.morphAttributes;for(const h in c){const g=[],_=c[h];for(let v=0,y=_.length;v<y;v++)g.push(_[v].clone(n));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,g=u.length;h<g;h++){const _=u[h];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ym=new jt,$r=new Ag,yl=new Jl,Mm=new j,Ml=new j,El=new j,wl=new j,ad=new j,Tl=new j,Em=new j,Al=new j;class Dt extends mn{constructor(e=new gi,n=new Rg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(c&&f){Tl.set(0,0,0);for(let p=0,h=c.length;p<h;p++){const g=f[p],_=c[p];g!==0&&(ad.fromBufferAttribute(_,e),u?Tl.addScaledVector(ad,g):Tl.addScaledVector(ad.sub(n),g))}n.add(Tl)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),yl.copy(r.boundingSphere),yl.applyMatrix4(c),$r.copy(e.ray).recast(e.near),!(yl.containsPoint($r.origin)===!1&&($r.intersectSphere(yl,Mm)===null||$r.origin.distanceToSquared(Mm)>(e.far-e.near)**2))&&(ym.copy(c).invert(),$r.copy(e.ray).applyMatrix4(ym),!(r.boundingBox!==null&&$r.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,$r)))}_computeIntersections(e,n,r){let o;const c=this.geometry,u=this.material,f=c.index,p=c.attributes.position,h=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,y=c.drawRange;if(f!==null)if(Array.isArray(u))for(let w=0,T=v.length;w<T;w++){const S=v[w],x=u[S.materialIndex],L=Math.max(S.start,y.start),N=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let P=L,I=N;P<I;P+=3){const F=f.getX(P),O=f.getX(P+1),q=f.getX(P+2);o=Cl(this,x,e,r,h,g,_,F,O,q),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const w=Math.max(0,y.start),T=Math.min(f.count,y.start+y.count);for(let S=w,x=T;S<x;S+=3){const L=f.getX(S),N=f.getX(S+1),P=f.getX(S+2);o=Cl(this,u,e,r,h,g,_,L,N,P),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let w=0,T=v.length;w<T;w++){const S=v[w],x=u[S.materialIndex],L=Math.max(S.start,y.start),N=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let P=L,I=N;P<I;P+=3){const F=P,O=P+1,q=P+2;o=Cl(this,x,e,r,h,g,_,F,O,q),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const w=Math.max(0,y.start),T=Math.min(p.count,y.start+y.count);for(let S=w,x=T;S<x;S+=3){const L=S,N=S+1,P=S+2;o=Cl(this,u,e,r,h,g,_,L,N,P),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function Pv(s,e,n,r,o,c,u,f){let p;if(e.side===kn?p=r.intersectTriangle(u,c,o,!0,f):p=r.intersectTriangle(o,c,u,e.side===Rr,f),p===null)return null;Al.copy(f),Al.applyMatrix4(s.matrixWorld);const h=n.ray.origin.distanceTo(Al);return h<n.near||h>n.far?null:{distance:h,point:Al.clone(),object:s}}function Cl(s,e,n,r,o,c,u,f,p,h){s.getVertexPosition(f,Ml),s.getVertexPosition(p,El),s.getVertexPosition(h,wl);const g=Pv(s,e,n,r,Ml,El,wl,Em);if(g){const _=new j;ii.getBarycoord(Em,Ml,El,wl,_),o&&(g.uv=ii.getInterpolatedAttribute(o,f,p,h,_,new Rt)),c&&(g.uv1=ii.getInterpolatedAttribute(c,f,p,h,_,new Rt)),u&&(g.normal=ii.getInterpolatedAttribute(u,f,p,h,_,new j),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:f,b:p,c:h,normal:new j,materialIndex:0};ii.getNormal(Ml,El,wl,v.normal),g.face=v,g.barycoord=_}return g}class wn extends gi{constructor(e=1,n=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const f=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const p=[],h=[],g=[],_=[];let v=0,y=0;w("z","y","x",-1,-1,r,n,e,u,c,0),w("z","y","x",1,-1,r,n,-e,u,c,1),w("x","z","y",1,1,e,r,n,o,u,2),w("x","z","y",1,-1,e,r,-n,o,u,3),w("x","y","z",1,-1,e,n,r,o,c,4),w("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(p),this.setAttribute("position",new ri(h,3)),this.setAttribute("normal",new ri(g,3)),this.setAttribute("uv",new ri(_,2));function w(T,S,x,L,N,P,I,F,O,q,C){const b=P/O,V=I/q,se=P/2,J=I/2,fe=F/2,ce=O+1,oe=q+1;let K=0,Y=0;const he=new j;for(let re=0;re<oe;re++){const U=re*V-J;for(let ae=0;ae<ce;ae++){const Re=ae*b-se;he[T]=Re*L,he[S]=U*N,he[x]=fe,h.push(he.x,he.y,he.z),he[T]=0,he[S]=0,he[x]=F>0?1:-1,g.push(he.x,he.y,he.z),_.push(ae/O),_.push(1-re/q),K+=1}}for(let re=0;re<q;re++)for(let U=0;U<O;U++){const ae=v+U+ce*re,Re=v+U+ce*(re+1),Ye=v+(U+1)+ce*(re+1),Ke=v+(U+1)+ce*re;p.push(ae,Re,Ke),p.push(Re,Ye,Ke),Y+=6}f.addGroup(y,Y,C),y+=Y,v+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $s(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function Rn(s){const e={};for(let n=0;n<s.length;n++){const r=$s(s[n]);for(const o in r)e[o]=r[o]}return e}function Lv(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Dg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const Dv={clone:$s,merge:Rn};var Nv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Iv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends Zs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nv,this.fragmentShader=Iv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=Lv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Ng extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ar=new j,wm=new Rt,Tm=new Rt;class hn extends Ng{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=uf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return uf*2*Math.atan(Math.tan(Vl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z),Ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z)}getViewSize(e,n){return this.getViewBounds(e,wm,Tm),n.subVectors(Tm,wm)}setViewOffset(e,n,r,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Vl*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,h=u.fullHeight;c+=u.offsetX*o/p,n-=u.offsetY*r/h,o*=u.width/p,r*=u.height/h}const f=this.filmOffset;f!==0&&(c+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Bs=-90,zs=1;class Uv extends mn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new hn(Bs,zs,e,n);o.layers=this.layers,this.add(o);const c=new hn(Bs,zs,e,n);c.layers=this.layers,this.add(c);const u=new hn(Bs,zs,e,n);u.layers=this.layers,this.add(u);const f=new hn(Bs,zs,e,n);f.layers=this.layers,this.add(f);const p=new hn(Bs,zs,e,n);p.layers=this.layers,this.add(p);const h=new hn(Bs,zs,e,n);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,u,f,p]=n;for(const h of n)this.remove(h);if(e===Ai)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Wl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of n)this.add(h),h.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,f,p,h,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,c),e.setRenderTarget(r,1,o),e.render(n,u),e.setRenderTarget(r,2,o),e.render(n,f),e.setRenderTarget(r,3,o),e.render(n,p),e.setRenderTarget(r,4,o),e.render(n,h),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,o),e.render(n,g),e.setRenderTarget(_,v,y),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class Ig extends Pn{constructor(e=[],n=rs,r,o,c,u,f,p,h,g){super(e,n,r,o,c,u,f,p,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ug extends bi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Ig(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new wn(5,5,5),c=new Di({name:"CubemapFromEquirect",uniforms:$s(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:Zi});c.uniforms.tEquirect.value=n;const u=new Dt(o,c),f=n.minFilter;return n.minFilter===ns&&(n.minFilter=En),new Uv(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(c)}}class Ki extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fv={type:"move"};class od{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ki,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ki,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ki,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,u=null;const f=this._targetRay,p=this._grip,h=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const T of e.hand.values()){const S=n.getJointPose(T,r),x=this._getHandJoint(h,T);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const g=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],v=g.position.distanceTo(_.position),y=.02,w=.005;h.inputState.pinching&&v>y+w?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=y-w&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Fv)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=c!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Ki;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class to extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Ov extends Pn{constructor(e=null,n=1,r=1,o,c,u,f,p,h=pn,g=pn,_,v){super(null,u,f,p,h,g,o,c,_,v),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ld=new j,kv=new j,Bv=new ct;class Jr{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=ld.subVectors(r,n).cross(kv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(ld),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Bv.getNormalMatrix(e),o=this.coplanarPoint(ld).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kr=new Jl,zv=new Rt(.5,.5),bl=new j;class wf{constructor(e=new Jr,n=new Jr,r=new Jr,o=new Jr,c=new Jr,u=new Jr){this.planes=[e,n,r,o,c,u]}set(e,n,r,o,c,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(o),f[4].copy(c),f[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Ai,r=!1){const o=this.planes,c=e.elements,u=c[0],f=c[1],p=c[2],h=c[3],g=c[4],_=c[5],v=c[6],y=c[7],w=c[8],T=c[9],S=c[10],x=c[11],L=c[12],N=c[13],P=c[14],I=c[15];if(o[0].setComponents(h-u,y-g,x-w,I-L).normalize(),o[1].setComponents(h+u,y+g,x+w,I+L).normalize(),o[2].setComponents(h+f,y+_,x+T,I+N).normalize(),o[3].setComponents(h-f,y-_,x-T,I-N).normalize(),r)o[4].setComponents(p,v,S,P).normalize(),o[5].setComponents(h-p,y-v,x-S,I-P).normalize();else if(o[4].setComponents(h-p,y-v,x-S,I-P).normalize(),n===Ai)o[5].setComponents(h+p,y+v,x+S,I+P).normalize();else if(n===Wl)o[5].setComponents(p,v,S,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kr)}intersectsSprite(e){Kr.center.set(0,0,0);const n=zv.distanceTo(e.center);return Kr.radius=.7071067811865476+n,Kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(bl.x=o.normal.x>0?e.max.x:e.min.x,bl.y=o.normal.y>0?e.max.y:e.min.y,bl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(bl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fg extends Zs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const jl=new j,Yl=new j,Am=new jt,Ga=new Ag,Rl=new Jl,cd=new j,Cm=new j;class Vv extends mn{constructor(e=new gi,n=new Fg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let o=1,c=n.count;o<c;o++)jl.fromBufferAttribute(n,o-1),Yl.fromBufferAttribute(n,o),r[o]=r[o-1],r[o]+=jl.distanceTo(Yl);e.setAttribute("lineDistance",new ri(r,1))}else st("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Rl.copy(r.boundingSphere),Rl.applyMatrix4(o),Rl.radius+=c,e.ray.intersectsSphere(Rl)===!1)return;Am.copy(o).invert(),Ga.copy(e.ray).applyMatrix4(Am);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,h=this.isLineSegments?2:1,g=r.index,v=r.attributes.position;if(g!==null){const y=Math.max(0,u.start),w=Math.min(g.count,u.start+u.count);for(let T=y,S=w-1;T<S;T+=h){const x=g.getX(T),L=g.getX(T+1),N=Pl(this,e,Ga,p,x,L,T);N&&n.push(N)}if(this.isLineLoop){const T=g.getX(w-1),S=g.getX(y),x=Pl(this,e,Ga,p,T,S,w-1);x&&n.push(x)}}else{const y=Math.max(0,u.start),w=Math.min(v.count,u.start+u.count);for(let T=y,S=w-1;T<S;T+=h){const x=Pl(this,e,Ga,p,T,T+1,T);x&&n.push(x)}if(this.isLineLoop){const T=Pl(this,e,Ga,p,w-1,y,w-1);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function Pl(s,e,n,r,o,c,u){const f=s.geometry.attributes.position;if(jl.fromBufferAttribute(f,o),Yl.fromBufferAttribute(f,c),n.distanceSqToSegment(jl,Yl,cd,Cm)>r)return;cd.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(cd);if(!(h<e.near||h>e.far))return{distance:h,point:Cm.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}const bm=new j,Rm=new j;class Gv extends Vv{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let o=0,c=n.count;o<c;o+=2)bm.fromBufferAttribute(n,o),Rm.fromBufferAttribute(n,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+bm.distanceTo(Rm);e.setAttribute("lineDistance",new ri(r,1))}else st("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Za extends Pn{constructor(e,n,r=Pi,o,c,u,f=pn,p=pn,h,g=er,_=1){if(g!==er&&g!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:n,depth:_};super(v,o,c,u,f,p,g,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ef(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Hv extends Za{constructor(e,n=Pi,r=rs,o,c,u=pn,f=pn,p,h=er){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,n,r,o,c,u,f,p,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Og extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}const Ll=new j,Dl=new j,ud=new j,Nl=new ii;class Wv extends gi{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const o=Math.pow(10,4),c=Math.cos(Vl*n),u=e.getIndex(),f=e.getAttribute("position"),p=u?u.count:f.count,h=[0,0,0],g=["a","b","c"],_=new Array(3),v={},y=[];for(let w=0;w<p;w+=3){u?(h[0]=u.getX(w),h[1]=u.getX(w+1),h[2]=u.getX(w+2)):(h[0]=w,h[1]=w+1,h[2]=w+2);const{a:T,b:S,c:x}=Nl;if(T.fromBufferAttribute(f,h[0]),S.fromBufferAttribute(f,h[1]),x.fromBufferAttribute(f,h[2]),Nl.getNormal(ud),_[0]=`${Math.round(T.x*o)},${Math.round(T.y*o)},${Math.round(T.z*o)}`,_[1]=`${Math.round(S.x*o)},${Math.round(S.y*o)},${Math.round(S.z*o)}`,_[2]=`${Math.round(x.x*o)},${Math.round(x.y*o)},${Math.round(x.z*o)}`,!(_[0]===_[1]||_[1]===_[2]||_[2]===_[0]))for(let L=0;L<3;L++){const N=(L+1)%3,P=_[L],I=_[N],F=Nl[g[L]],O=Nl[g[N]],q=`${P}_${I}`,C=`${I}_${P}`;C in v&&v[C]?(ud.dot(v[C].normal)<=c&&(y.push(F.x,F.y,F.z),y.push(O.x,O.y,O.z)),v[C]=null):q in v||(v[q]={index0:h[L],index1:h[N],normal:ud.clone()})}}for(const w in v)if(v[w]){const{index0:T,index1:S}=v[w];Ll.fromBufferAttribute(f,T),Dl.fromBufferAttribute(f,S),y.push(Ll.x,Ll.y,Ll.z),y.push(Dl.x,Dl.y,Dl.z)}this.setAttribute("position",new ri(y,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ec extends gi{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,u=n/2,f=Math.floor(r),p=Math.floor(o),h=f+1,g=p+1,_=e/f,v=n/p,y=[],w=[],T=[],S=[];for(let x=0;x<g;x++){const L=x*v-u;for(let N=0;N<h;N++){const P=N*_-c;w.push(P,-L,0),T.push(0,0,1),S.push(N/f),S.push(1-x/p)}}for(let x=0;x<p;x++)for(let L=0;L<f;L++){const N=L+h*x,P=L+h*(x+1),I=L+1+h*(x+1),F=L+1+h*x;y.push(N,P,F),y.push(P,I,F)}this.setIndex(y),this.setAttribute("position",new ri(w,3)),this.setAttribute("normal",new ri(T,3)),this.setAttribute("uv",new ri(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ec(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xv extends Di{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ql extends Zs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eg,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jv extends Zs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Yv extends Zs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Tf extends mn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const dd=new jt,Pm=new j,Lm=new j;class kg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.mapType=jn,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wf,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Pm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Pm),Lm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Lm),n.updateMatrixWorld(),dd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dd,n.coordinateSystem,n.reversedDepth),n.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(dd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class qv extends kg{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0}}class Dm extends Tf{constructor(e,n,r=0,o=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new qv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Af extends Ng{constructor(e=-1,n=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,f=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,u=c+h*this.view.width,f-=g*this.view.offsetY,p=f-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class $v extends kg{constructor(){super(new Af(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nm extends Tf{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.shadow=new $v}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class Kv extends Tf{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Zv extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Qv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Im(s,e,n,r){const o=Jv(r);switch(n){case Sg:return s*e;case Mg:return s*e/o.components*o.byteLength;case vf:return s*e/o.components*o.byteLength;case Ys:return s*e*2/o.components*o.byteLength;case xf:return s*e*2/o.components*o.byteLength;case yg:return s*e*3/o.components*o.byteLength;case mi:return s*e*4/o.components*o.byteLength;case Sf:return s*e*4/o.components*o.byteLength;case Ol:case kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Bl:case zl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Dd:case Id:return Math.max(s,16)*Math.max(e,8)/4;case Ld:case Nd:return Math.max(s,8)*Math.max(e,8)/2;case Ud:case Fd:case kd:case Bd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Od:case zd:case Vd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Gd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Hd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Wd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case jd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Yd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case qd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case $d:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Kd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Qd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Jd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ef:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case tf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case nf:case rf:case sf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case af:case of:return Math.ceil(s/4)*Math.ceil(e/4)*8;case lf:case cf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Jv(s){switch(s){case jn:case gg:return{byteLength:1,components:1};case qa:case _g:case Ji:return{byteLength:2,components:1};case gf:case _f:return{byteLength:2,components:4};case Pi:case mf:case Ti:return{byteLength:4,components:1};case vg:case xg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pf}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Bg(){let s=null,e=!1,n=null,r=null;function o(c,u){n(c,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function ex(s){const e=new WeakMap;function n(f,p){const h=f.array,g=f.usage,_=h.byteLength,v=s.createBuffer();s.bindBuffer(p,v),s.bufferData(p,h,g),f.onUploadCallback();let y;if(h instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=s.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=s.SHORT;else if(h instanceof Uint32Array)y=s.UNSIGNED_INT;else if(h instanceof Int32Array)y=s.INT;else if(h instanceof Int8Array)y=s.BYTE;else if(h instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:_}}function r(f,p,h){const g=p.array,_=p.updateRanges;if(s.bindBuffer(h,f),_.length===0)s.bufferSubData(h,0,g);else{_.sort((y,w)=>y.start-w.start);let v=0;for(let y=1;y<_.length;y++){const w=_[v],T=_[y];T.start<=w.start+w.count+1?w.count=Math.max(w.count,T.start+T.count-w.start):(++v,_[v]=T)}_.length=v+1;for(let y=0,w=_.length;y<w;y++){const T=_[y];s.bufferSubData(h,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(s.deleteBuffer(p.buffer),e.delete(f))}function u(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,n(f,p));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,f,p),h.version=f.version}}return{get:o,remove:c,update:u}}var tx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nx=`#ifdef USE_ALPHAHASH
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
#endif`,ix=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ax=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ox=`#ifdef USE_AOMAP
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
#endif`,lx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cx=`#ifdef USE_BATCHING
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
#endif`,ux=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,px=`#ifdef USE_IRIDESCENCE
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
#endif`,mx=`#ifdef USE_BUMPMAP
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
#endif`,gx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_x=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ex=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wx=`#define PI 3.141592653589793
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
} // validated`,Tx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ax=`vec3 transformedNormal = objectNormal;
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
#endif`,Cx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Px=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nx=`#ifdef USE_ENVMAP
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
#endif`,Ix=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ux=`#ifdef USE_ENVMAP
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
#endif`,Fx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ox=`#ifdef USE_ENVMAP
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
#endif`,kx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gx=`#ifdef USE_GRADIENTMAP
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
}`,Hx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jx=`uniform bool receiveShadow;
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
#endif`,Yx=`#ifdef USE_ENVMAP
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
#endif`,qx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qx=`PhysicalMaterial material;
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
#endif`,Jx=`uniform sampler2D dfgLUT;
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
}`,eS=`
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
#endif`,tS=`#if defined( RE_IndirectDiffuse )
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
#endif`,nS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uS=`#if defined( USE_POINTS_UV )
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
#endif`,dS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gS=`#ifdef USE_MORPHTARGETS
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
#endif`,_S=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,SS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ES=`#ifdef USE_NORMALMAP
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
#endif`,wS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,TS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,AS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,CS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,PS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,LS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,IS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,US=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,FS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,BS=`float getShadowMask() {
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
}`,zS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,VS=`#ifdef USE_SKINNING
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
#endif`,GS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,HS=`#ifdef USE_SKINNING
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
#endif`,WS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,XS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,YS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qS=`#ifdef USE_TRANSMISSION
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
#endif`,$S=`#ifdef USE_TRANSMISSION
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
#endif`,KS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ey=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ty=`uniform sampler2D t2D;
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
}`,ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ay=`#include <common>
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
}`,oy=`#if DEPTH_PACKING == 3200
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
}`,ly=`#define DISTANCE
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
}`,cy=`#define DISTANCE
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
}`,uy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fy=`uniform float scale;
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
}`,hy=`uniform vec3 diffuse;
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
}`,py=`#include <common>
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
}`,my=`uniform vec3 diffuse;
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
}`,gy=`#define LAMBERT
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
}`,_y=`#define LAMBERT
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
}`,vy=`#define MATCAP
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
}`,xy=`#define MATCAP
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
}`,Sy=`#define NORMAL
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
}`,yy=`#define NORMAL
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
}`,My=`#define PHONG
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
}`,Ey=`#define PHONG
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
}`,wy=`#define STANDARD
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
}`,Ty=`#define STANDARD
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
}`,Ay=`#define TOON
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
}`,Cy=`#define TOON
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
}`,by=`uniform float size;
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
}`,Ry=`uniform vec3 diffuse;
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
}`,Py=`#include <common>
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
}`,Ly=`uniform vec3 color;
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
}`,Dy=`uniform float rotation;
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
}`,Ny=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:tx,alphahash_pars_fragment:nx,alphamap_fragment:ix,alphamap_pars_fragment:rx,alphatest_fragment:sx,alphatest_pars_fragment:ax,aomap_fragment:ox,aomap_pars_fragment:lx,batching_pars_vertex:cx,batching_vertex:ux,begin_vertex:dx,beginnormal_vertex:fx,bsdfs:hx,iridescence_fragment:px,bumpmap_pars_fragment:mx,clipping_planes_fragment:gx,clipping_planes_pars_fragment:_x,clipping_planes_pars_vertex:vx,clipping_planes_vertex:xx,color_fragment:Sx,color_pars_fragment:yx,color_pars_vertex:Mx,color_vertex:Ex,common:wx,cube_uv_reflection_fragment:Tx,defaultnormal_vertex:Ax,displacementmap_pars_vertex:Cx,displacementmap_vertex:bx,emissivemap_fragment:Rx,emissivemap_pars_fragment:Px,colorspace_fragment:Lx,colorspace_pars_fragment:Dx,envmap_fragment:Nx,envmap_common_pars_fragment:Ix,envmap_pars_fragment:Ux,envmap_pars_vertex:Fx,envmap_physical_pars_fragment:Yx,envmap_vertex:Ox,fog_vertex:kx,fog_pars_vertex:Bx,fog_fragment:zx,fog_pars_fragment:Vx,gradientmap_pars_fragment:Gx,lightmap_pars_fragment:Hx,lights_lambert_fragment:Wx,lights_lambert_pars_fragment:Xx,lights_pars_begin:jx,lights_toon_fragment:qx,lights_toon_pars_fragment:$x,lights_phong_fragment:Kx,lights_phong_pars_fragment:Zx,lights_physical_fragment:Qx,lights_physical_pars_fragment:Jx,lights_fragment_begin:eS,lights_fragment_maps:tS,lights_fragment_end:nS,logdepthbuf_fragment:iS,logdepthbuf_pars_fragment:rS,logdepthbuf_pars_vertex:sS,logdepthbuf_vertex:aS,map_fragment:oS,map_pars_fragment:lS,map_particle_fragment:cS,map_particle_pars_fragment:uS,metalnessmap_fragment:dS,metalnessmap_pars_fragment:fS,morphinstance_vertex:hS,morphcolor_vertex:pS,morphnormal_vertex:mS,morphtarget_pars_vertex:gS,morphtarget_vertex:_S,normal_fragment_begin:vS,normal_fragment_maps:xS,normal_pars_fragment:SS,normal_pars_vertex:yS,normal_vertex:MS,normalmap_pars_fragment:ES,clearcoat_normal_fragment_begin:wS,clearcoat_normal_fragment_maps:TS,clearcoat_pars_fragment:AS,iridescence_pars_fragment:CS,opaque_fragment:bS,packing:RS,premultiplied_alpha_fragment:PS,project_vertex:LS,dithering_fragment:DS,dithering_pars_fragment:NS,roughnessmap_fragment:IS,roughnessmap_pars_fragment:US,shadowmap_pars_fragment:FS,shadowmap_pars_vertex:OS,shadowmap_vertex:kS,shadowmask_pars_fragment:BS,skinbase_vertex:zS,skinning_pars_vertex:VS,skinning_vertex:GS,skinnormal_vertex:HS,specularmap_fragment:WS,specularmap_pars_fragment:XS,tonemapping_fragment:jS,tonemapping_pars_fragment:YS,transmission_fragment:qS,transmission_pars_fragment:$S,uv_pars_fragment:KS,uv_pars_vertex:ZS,uv_vertex:QS,worldpos_vertex:JS,background_vert:ey,background_frag:ty,backgroundCube_vert:ny,backgroundCube_frag:iy,cube_vert:ry,cube_frag:sy,depth_vert:ay,depth_frag:oy,distance_vert:ly,distance_frag:cy,equirect_vert:uy,equirect_frag:dy,linedashed_vert:fy,linedashed_frag:hy,meshbasic_vert:py,meshbasic_frag:my,meshlambert_vert:gy,meshlambert_frag:_y,meshmatcap_vert:vy,meshmatcap_frag:xy,meshnormal_vert:Sy,meshnormal_frag:yy,meshphong_vert:My,meshphong_frag:Ey,meshphysical_vert:wy,meshphysical_frag:Ty,meshtoon_vert:Ay,meshtoon_frag:Cy,points_vert:by,points_frag:Ry,shadow_vert:Py,shadow_frag:Ly,sprite_vert:Dy,sprite_frag:Ny},Ne={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},wi={basic:{uniforms:Rn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Rn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new mt(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Rn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Rn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Rn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new mt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Rn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Rn([Ne.points,Ne.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Rn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Rn([Ne.common,Ne.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Rn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Rn([Ne.sprite,Ne.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:Rn([Ne.common,Ne.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:Rn([Ne.lights,Ne.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};wi.physical={uniforms:Rn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Il={r:0,b:0,g:0},Zr=new Li,Iy=new jt;function Uy(s,e,n,r,o,c,u){const f=new mt(0);let p=c===!0?0:1,h,g,_=null,v=0,y=null;function w(N){let P=N.isScene===!0?N.background:null;return P&&P.isTexture&&(P=(N.backgroundBlurriness>0?n:e).get(P)),P}function T(N){let P=!1;const I=w(N);I===null?x(f,p):I&&I.isColor&&(x(I,1),P=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,u):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(N,P){const I=w(P);I&&(I.isCubeTexture||I.mapping===Ql)?(g===void 0&&(g=new Dt(new wn(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:$s(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,O,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Zr.copy(P.backgroundRotation),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),g.material.uniforms.envMap.value=I,g.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(Iy.makeRotationFromEuler(Zr)),g.material.toneMapped=wt.getTransfer(I.colorSpace)!==It,(_!==I||v!==I.version||y!==s.toneMapping)&&(g.material.needsUpdate=!0,_=I,v=I.version,y=s.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):I&&I.isTexture&&(h===void 0&&(h=new Dt(new ec(2,2),new Di({name:"BackgroundMaterial",uniforms:$s(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(h)),h.material.uniforms.t2D.value=I,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.toneMapped=wt.getTransfer(I.colorSpace)!==It,I.matrixAutoUpdate===!0&&I.updateMatrix(),h.material.uniforms.uvTransform.value.copy(I.matrix),(_!==I||v!==I.version||y!==s.toneMapping)&&(h.material.needsUpdate=!0,_=I,v=I.version,y=s.toneMapping),h.layers.enableAll(),N.unshift(h,h.geometry,h.material,0,0,null))}function x(N,P){N.getRGB(Il,Dg(s)),r.buffers.color.setClear(Il.r,Il.g,Il.b,P,u)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return f},setClearColor:function(N,P=1){f.set(N),p=P,x(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(N){p=N,x(f,p)},render:T,addToRenderList:S,dispose:L}}function Fy(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=v(null);let c=o,u=!1;function f(b,V,se,J,fe){let ce=!1;const oe=_(J,se,V);c!==oe&&(c=oe,h(c.object)),ce=y(b,J,se,fe),ce&&w(b,J,se,fe),fe!==null&&e.update(fe,s.ELEMENT_ARRAY_BUFFER),(ce||u)&&(u=!1,P(b,V,se,J),fe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function p(){return s.createVertexArray()}function h(b){return s.bindVertexArray(b)}function g(b){return s.deleteVertexArray(b)}function _(b,V,se){const J=se.wireframe===!0;let fe=r[b.id];fe===void 0&&(fe={},r[b.id]=fe);let ce=fe[V.id];ce===void 0&&(ce={},fe[V.id]=ce);let oe=ce[J];return oe===void 0&&(oe=v(p()),ce[J]=oe),oe}function v(b){const V=[],se=[],J=[];for(let fe=0;fe<n;fe++)V[fe]=0,se[fe]=0,J[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:se,attributeDivisors:J,object:b,attributes:{},index:null}}function y(b,V,se,J){const fe=c.attributes,ce=V.attributes;let oe=0;const K=se.getAttributes();for(const Y in K)if(K[Y].location>=0){const re=fe[Y];let U=ce[Y];if(U===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(U=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(U=b.instanceColor)),re===void 0||re.attribute!==U||U&&re.data!==U.data)return!0;oe++}return c.attributesNum!==oe||c.index!==J}function w(b,V,se,J){const fe={},ce=V.attributes;let oe=0;const K=se.getAttributes();for(const Y in K)if(K[Y].location>=0){let re=ce[Y];re===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(re=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(re=b.instanceColor));const U={};U.attribute=re,re&&re.data&&(U.data=re.data),fe[Y]=U,oe++}c.attributes=fe,c.attributesNum=oe,c.index=J}function T(){const b=c.newAttributes;for(let V=0,se=b.length;V<se;V++)b[V]=0}function S(b){x(b,0)}function x(b,V){const se=c.newAttributes,J=c.enabledAttributes,fe=c.attributeDivisors;se[b]=1,J[b]===0&&(s.enableVertexAttribArray(b),J[b]=1),fe[b]!==V&&(s.vertexAttribDivisor(b,V),fe[b]=V)}function L(){const b=c.newAttributes,V=c.enabledAttributes;for(let se=0,J=V.length;se<J;se++)V[se]!==b[se]&&(s.disableVertexAttribArray(se),V[se]=0)}function N(b,V,se,J,fe,ce,oe){oe===!0?s.vertexAttribIPointer(b,V,se,fe,ce):s.vertexAttribPointer(b,V,se,J,fe,ce)}function P(b,V,se,J){T();const fe=J.attributes,ce=se.getAttributes(),oe=V.defaultAttributeValues;for(const K in ce){const Y=ce[K];if(Y.location>=0){let he=fe[K];if(he===void 0&&(K==="instanceMatrix"&&b.instanceMatrix&&(he=b.instanceMatrix),K==="instanceColor"&&b.instanceColor&&(he=b.instanceColor)),he!==void 0){const re=he.normalized,U=he.itemSize,ae=e.get(he);if(ae===void 0)continue;const Re=ae.buffer,Ye=ae.type,Ke=ae.bytesPerElement,te=Ye===s.INT||Ye===s.UNSIGNED_INT||he.gpuType===mf;if(he.isInterleavedBufferAttribute){const ue=he.data,ye=ue.stride,ke=he.offset;if(ue.isInstancedInterleavedBuffer){for(let Ie=0;Ie<Y.locationSize;Ie++)x(Y.location+Ie,ue.meshPerAttribute);b.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ie=0;Ie<Y.locationSize;Ie++)S(Y.location+Ie);s.bindBuffer(s.ARRAY_BUFFER,Re);for(let Ie=0;Ie<Y.locationSize;Ie++)N(Y.location+Ie,U/Y.locationSize,Ye,re,ye*Ke,(ke+U/Y.locationSize*Ie)*Ke,te)}else{if(he.isInstancedBufferAttribute){for(let ue=0;ue<Y.locationSize;ue++)x(Y.location+ue,he.meshPerAttribute);b.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ue=0;ue<Y.locationSize;ue++)S(Y.location+ue);s.bindBuffer(s.ARRAY_BUFFER,Re);for(let ue=0;ue<Y.locationSize;ue++)N(Y.location+ue,U/Y.locationSize,Ye,re,U*Ke,U/Y.locationSize*ue*Ke,te)}}else if(oe!==void 0){const re=oe[K];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(Y.location,re);break;case 3:s.vertexAttrib3fv(Y.location,re);break;case 4:s.vertexAttrib4fv(Y.location,re);break;default:s.vertexAttrib1fv(Y.location,re)}}}}L()}function I(){q();for(const b in r){const V=r[b];for(const se in V){const J=V[se];for(const fe in J)g(J[fe].object),delete J[fe];delete V[se]}delete r[b]}}function F(b){if(r[b.id]===void 0)return;const V=r[b.id];for(const se in V){const J=V[se];for(const fe in J)g(J[fe].object),delete J[fe];delete V[se]}delete r[b.id]}function O(b){for(const V in r){const se=r[V];if(se[b.id]===void 0)continue;const J=se[b.id];for(const fe in J)g(J[fe].object),delete J[fe];delete se[b.id]}}function q(){C(),u=!0,c!==o&&(c=o,h(c.object))}function C(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:q,resetDefaultState:C,dispose:I,releaseStatesOfGeometry:F,releaseStatesOfProgram:O,initAttributes:T,enableAttribute:S,disableUnusedAttributes:L}}function Oy(s,e,n){let r;function o(h){r=h}function c(h,g){s.drawArrays(r,h,g),n.update(g,r,1)}function u(h,g,_){_!==0&&(s.drawArraysInstanced(r,h,g,_),n.update(g,r,_))}function f(h,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,g,0,_);let y=0;for(let w=0;w<_;w++)y+=g[w];n.update(y,r,1)}function p(h,g,_,v){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let w=0;w<h.length;w++)u(h[w],g[w],v[w]);else{y.multiDrawArraysInstancedWEBGL(r,h,0,g,0,v,0,_);let w=0;for(let T=0;T<_;T++)w+=g[T]*v[T];n.update(w,r,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function ky(s,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==mi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const q=O===Ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==jn&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Ti&&!q)}function p(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=n.precision!==void 0?n.precision:"highp";const g=p(h);g!==h&&(st("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const _=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=s.getParameter(s.MAX_SAMPLES),F=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:w,maxTextureSize:T,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:L,maxVaryings:N,maxFragmentUniforms:P,maxSamples:I,samples:F}}function By(s){const e=this;let n=null,r=0,o=!1,c=!1;const u=new Jr,f=new ct,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const y=_.length!==0||v||r!==0||o;return o=v,r=_.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,y){const w=_.clippingPlanes,T=_.clipIntersection,S=_.clipShadows,x=s.get(_);if(!o||w===null||w.length===0||c&&!S)c?g(null):h();else{const L=c?0:r,N=L*4;let P=x.clippingState||null;p.value=P,P=g(w,v,N,y);for(let I=0;I!==N;++I)P[I]=n[I];x.clippingState=P,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=L}};function h(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,v,y,w){const T=_!==null?_.length:0;let S=null;if(T!==0){if(S=p.value,w!==!0||S===null){const x=y+T*4,L=v.matrixWorldInverse;f.getNormalMatrix(L),(S===null||S.length<x)&&(S=new Float32Array(x));for(let N=0,P=y;N!==T;++N,P+=4)u.copy(_[N]).applyMatrix4(L,f),u.normal.toArray(S,P),S[P+3]=u.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function zy(s){let e=new WeakMap;function n(u,f){return f===Cd?u.mapping=rs:f===bd&&(u.mapping=js),u}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===Cd||f===bd)if(e.has(u)){const p=e.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const h=new Ug(p.height);return h.fromEquirectangularTexture(s,u),e.set(u,h),u.addEventListener("dispose",o),n(h.texture,u.mapping)}else return null}}return u}function o(u){const f=u.target;f.removeEventListener("dispose",o);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const br=4,Um=[.125,.215,.35,.446,.526,.582],ts=20,Vy=256,Ha=new Af,Fm=new mt;let fd=null,hd=0,pd=0,md=!1;const Gy=new j;class Om{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,c={}){const{size:u=256,position:f=Gy}=c;fd=this._renderer.getRenderTarget(),hd=this._renderer.getActiveCubeFace(),pd=this._renderer.getActiveMipmapLevel(),md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(fd,hd,pd),this._renderer.xr.enabled=md,e.scissorTest=!1,Vs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===rs||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fd=this._renderer.getRenderTarget(),hd=this._renderer.getActiveCubeFace(),pd=this._renderer.getActiveMipmapLevel(),md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:En,minFilter:En,generateMipmaps:!1,type:Ji,format:mi,colorSpace:qs,depthBuffer:!1},o=km(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=km(e,n,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Hy(c)),this._blurMaterial=Xy(c,e,n),this._ggxMaterial=Wy(c,e,n)}return o}_compileMaterial(e){const n=new Dt(new gi,e);this._renderer.compile(n,Ha)}_sceneToCubeUV(e,n,r,o,c){const p=new hn(90,1,n,r),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,y=_.toneMapping;_.getClearColor(Fm),_.toneMapping=Ci,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Dt(new wn,new Rg({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,S=T.material;let x=!1;const L=e.background;L?L.isColor&&(S.color.copy(L),e.background=null,x=!0):(S.color.copy(Fm),x=!0);for(let N=0;N<6;N++){const P=N%3;P===0?(p.up.set(0,h[N],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[N],c.y,c.z)):P===1?(p.up.set(0,0,h[N]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[N],c.z)):(p.up.set(0,h[N],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[N]));const I=this._cubeSize;Vs(o,P*I,N>2?I:0,I,I),_.setRenderTarget(o),x&&_.render(T,p),_.render(e,p)}_.toneMapping=y,_.autoClear=v,e.background=L}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===rs||e.mapping===js;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=zm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bm());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const f=c.uniforms;f.envMap.value=e;const p=this._cubeSize;Vs(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(u,Ha)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const p=u.uniforms,h=r/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(h*h-g*g),v=0+h*1.25,y=_*v,{_lodMax:w}=this,T=this._sizeLods[r],S=3*T*(r>w-br?r-w+br:0),x=4*(this._cubeSize-T);p.envMap.value=e.texture,p.roughness.value=y,p.mipInt.value=w-n,Vs(c,S,x,3*T,2*T),o.setRenderTarget(c),o.render(f,Ha),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=w-r,Vs(e,S,x,3*T,2*T),o.setRenderTarget(e),o.render(f,Ha)}_blur(e,n,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,u,f){const p=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Ct("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=h;const v=h.uniforms,y=this._sizeLods[r]-1,w=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*ts-1),T=c/w,S=isFinite(c)?1+Math.floor(g*T):ts;S>ts&&st(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ts}`);const x=[];let L=0;for(let O=0;O<ts;++O){const q=O/T,C=Math.exp(-q*q/2);x.push(C),O===0?L+=C:O<S&&(L+=2*C)}for(let O=0;O<x.length;O++)x[O]=x[O]/L;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=x,v.latitudinal.value=u==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:N}=this;v.dTheta.value=w,v.mipInt.value=N-r;const P=this._sizeLods[o],I=3*P*(o>N-br?o-N+br:0),F=4*(this._cubeSize-P);Vs(n,I,F,3*P,2*P),p.setRenderTarget(n),p.render(_,Ha)}}function Hy(s){const e=[],n=[],r=[];let o=s;const c=s-br+1+Um.length;for(let u=0;u<c;u++){const f=Math.pow(2,o);e.push(f);let p=1/f;u>s-br?p=Um[u-s+br-1]:u===0&&(p=0),n.push(p);const h=1/(f-2),g=-h,_=1+h,v=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,w=6,T=3,S=2,x=1,L=new Float32Array(T*w*y),N=new Float32Array(S*w*y),P=new Float32Array(x*w*y);for(let F=0;F<y;F++){const O=F%3*2/3-1,q=F>2?0:-1,C=[O,q,0,O+2/3,q,0,O+2/3,q+1,0,O,q,0,O+2/3,q+1,0,O,q+1,0];L.set(C,T*w*F),N.set(v,S*w*F);const b=[F,F,F,F,F,F];P.set(b,x*w*F)}const I=new gi;I.setAttribute("position",new Ri(L,T)),I.setAttribute("uv",new Ri(N,S)),I.setAttribute("faceIndex",new Ri(P,x)),r.push(new Dt(I,null)),o>br&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function km(s,e,n){const r=new bi(s,e,n);return r.texture.mapping=Ql,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Vs(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function Wy(s,e,n){return new Di({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Vy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tc(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Xy(s,e,n){const r=new Float32Array(ts),o=new j(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:tc(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Bm(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tc(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function zm(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function tc(){return`

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
	`}function jy(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const p=f.mapping,h=p===Cd||p===bd,g=p===rs||p===js;if(h||g){let _=e.get(f);const v=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return n===null&&(n=new Om(s)),_=h?n.fromEquirectangular(f,_):n.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),_.texture;if(_!==void 0)return _.texture;{const y=f.image;return h&&y&&y.height>0||g&&y&&o(y)?(n===null&&(n=new Om(s)),_=h?n.fromEquirectangular(f):n.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),f.addEventListener("dispose",c),_.texture):null}}}return f}function o(f){let p=0;const h=6;for(let g=0;g<h;g++)f[g]!==void 0&&p++;return p===h}function c(f){const p=f.target;p.removeEventListener("dispose",c);const h=e.get(p);h!==void 0&&(e.delete(p),h.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function Yy(s){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Ka("WebGLRenderer: "+r+" extension not supported."),o}}}function qy(s,e,n,r){const o={},c=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const w in v.attributes)e.remove(v.attributes[w]);v.removeEventListener("dispose",u),delete o[v.id];const y=c.get(v);y&&(e.remove(y),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,n.memory.geometries++),v}function p(_){const v=_.attributes;for(const y in v)e.update(v[y],s.ARRAY_BUFFER)}function h(_){const v=[],y=_.index,w=_.attributes.position;let T=0;if(y!==null){const L=y.array;T=y.version;for(let N=0,P=L.length;N<P;N+=3){const I=L[N+0],F=L[N+1],O=L[N+2];v.push(I,F,F,O,O,I)}}else if(w!==void 0){const L=w.array;T=w.version;for(let N=0,P=L.length/3-1;N<P;N+=3){const I=N+0,F=N+1,O=N+2;v.push(I,F,F,O,O,I)}}else return;const S=new(wg(v)?Lg:Pg)(v,1);S.version=T;const x=c.get(_);x&&e.remove(x),c.set(_,S)}function g(_){const v=c.get(_);if(v){const y=_.index;y!==null&&v.version<y.version&&h(_)}else h(_);return c.get(_)}return{get:f,update:p,getWireframeAttribute:g}}function $y(s,e,n){let r;function o(v){r=v}let c,u;function f(v){c=v.type,u=v.bytesPerElement}function p(v,y){s.drawElements(r,y,c,v*u),n.update(y,r,1)}function h(v,y,w){w!==0&&(s.drawElementsInstanced(r,y,c,v*u,w),n.update(y,r,w))}function g(v,y,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,v,0,w);let S=0;for(let x=0;x<w;x++)S+=y[x];n.update(S,r,1)}function _(v,y,w,T){if(w===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<v.length;x++)h(v[x]/u,y[x],T[x]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,c,v,0,T,0,w);let x=0;for(let L=0;L<w;L++)x+=y[L]*T[L];n.update(x,r,1)}}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=h,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function Ky(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,f){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=f*(c/3);break;case s.LINES:n.lines+=f*(c/2);break;case s.LINE_STRIP:n.lines+=f*(c-1);break;case s.LINE_LOOP:n.lines+=f*c;break;case s.POINTS:n.points+=f*c;break;default:Ct("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function Zy(s,e,n){const r=new WeakMap,o=new qt;function c(u,f,p){const h=u.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=g!==void 0?g.length:0;let v=r.get(f);if(v===void 0||v.count!==_){let b=function(){q.dispose(),r.delete(f),f.removeEventListener("dispose",b)};var y=b;v!==void 0&&v.texture.dispose();const w=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],N=f.morphAttributes.color||[];let P=0;w===!0&&(P=1),T===!0&&(P=2),S===!0&&(P=3);let I=f.attributes.position.count*P,F=1;I>e.maxTextureSize&&(F=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const O=new Float32Array(I*F*4*_),q=new Tg(O,I,F,_);q.type=Ti,q.needsUpdate=!0;const C=P*4;for(let V=0;V<_;V++){const se=x[V],J=L[V],fe=N[V],ce=I*F*4*V;for(let oe=0;oe<se.count;oe++){const K=oe*C;w===!0&&(o.fromBufferAttribute(se,oe),O[ce+K+0]=o.x,O[ce+K+1]=o.y,O[ce+K+2]=o.z,O[ce+K+3]=0),T===!0&&(o.fromBufferAttribute(J,oe),O[ce+K+4]=o.x,O[ce+K+5]=o.y,O[ce+K+6]=o.z,O[ce+K+7]=0),S===!0&&(o.fromBufferAttribute(fe,oe),O[ce+K+8]=o.x,O[ce+K+9]=o.y,O[ce+K+10]=o.z,O[ce+K+11]=fe.itemSize===4?o.w:1)}}v={count:_,texture:q,size:new Rt(I,F)},r.set(f,v),f.addEventListener("dispose",b)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let w=0;for(let S=0;S<h.length;S++)w+=h[S];const T=f.morphTargetsRelative?1:1-w;p.getUniforms().setValue(s,"morphTargetBaseInfluence",T),p.getUniforms().setValue(s,"morphTargetInfluences",h)}p.getUniforms().setValue(s,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:c}}function Qy(s,e,n,r){let o=new WeakMap;function c(p){const h=r.render.frame,g=p.geometry,_=e.get(p,g);if(o.get(_)!==h&&(e.update(_),o.set(_,h)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),o.get(p)!==h&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,h))),p.isSkinnedMesh){const v=p.skeleton;o.get(v)!==h&&(v.update(),o.set(v,h))}return _}function u(){o=new WeakMap}function f(p){const h=p.target;h.removeEventListener("dispose",f),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:c,dispose:u}}const Jy={[lg]:"LINEAR_TONE_MAPPING",[cg]:"REINHARD_TONE_MAPPING",[ug]:"CINEON_TONE_MAPPING",[dg]:"ACES_FILMIC_TONE_MAPPING",[hg]:"AGX_TONE_MAPPING",[pg]:"NEUTRAL_TONE_MAPPING",[fg]:"CUSTOM_TONE_MAPPING"};function eM(s,e,n,r,o){const c=new bi(e,n,{type:s,depthBuffer:r,stencilBuffer:o}),u=new bi(e,n,{type:Ji,depthBuffer:!1,stencilBuffer:!1}),f=new gi;f.setAttribute("position",new ri([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new ri([0,2,0,0,2,0],2));const p=new Xv({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Dt(f,p),g=new Af(-1,1,1,-1,0,1);let _=null,v=null,y=!1,w,T=null,S=[],x=!1;this.setSize=function(L,N){c.setSize(L,N),u.setSize(L,N);for(let P=0;P<S.length;P++){const I=S[P];I.setSize&&I.setSize(L,N)}},this.setEffects=function(L){S=L,x=S.length>0&&S[0].isRenderPass===!0;const N=c.width,P=c.height;for(let I=0;I<S.length;I++){const F=S[I];F.setSize&&F.setSize(N,P)}},this.begin=function(L,N){if(y||L.toneMapping===Ci&&S.length===0)return!1;if(T=N,N!==null){const P=N.width,I=N.height;(c.width!==P||c.height!==I)&&this.setSize(P,I)}return x===!1&&L.setRenderTarget(c),w=L.toneMapping,L.toneMapping=Ci,!0},this.hasRenderPass=function(){return x},this.end=function(L,N){L.toneMapping=w,y=!0;let P=c,I=u;for(let F=0;F<S.length;F++){const O=S[F];if(O.enabled!==!1&&(O.render(L,I,P,N),O.needsSwap!==!1)){const q=P;P=I,I=q}}if(_!==L.outputColorSpace||v!==L.toneMapping){_=L.outputColorSpace,v=L.toneMapping,p.defines={},wt.getTransfer(_)===It&&(p.defines.SRGB_TRANSFER="");const F=Jy[v];F&&(p.defines[F]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=P.texture,L.setRenderTarget(T),L.render(h,g),T=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),u.dispose(),f.dispose(),p.dispose()}}const zg=new Pn,df=new Za(1,1),Vg=new Tg,Gg=new xv,Hg=new Ig,Vm=[],Gm=[],Hm=new Float32Array(16),Wm=new Float32Array(9),Xm=new Float32Array(4);function Qs(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let c=Vm[o];if(c===void 0&&(c=new Float32Array(o),Vm[o]=c),e!==0){r.toArray(c,0);for(let u=1,f=0;u!==e;++u)f+=n,s[u].toArray(c,f)}return c}function nn(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function rn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function nc(s,e){let n=Gm[e];n===void 0&&(n=new Int32Array(e),Gm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function tM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function nM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;s.uniform2fv(this.addr,e),rn(n,e)}}function iM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(nn(n,e))return;s.uniform3fv(this.addr,e),rn(n,e)}}function rM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;s.uniform4fv(this.addr,e),rn(n,e)}}function sM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(nn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,r))return;Xm.set(r),s.uniformMatrix2fv(this.addr,!1,Xm),rn(n,r)}}function aM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(nn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,r))return;Wm.set(r),s.uniformMatrix3fv(this.addr,!1,Wm),rn(n,r)}}function oM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(nn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,r))return;Hm.set(r),s.uniformMatrix4fv(this.addr,!1,Hm),rn(n,r)}}function lM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function cM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;s.uniform2iv(this.addr,e),rn(n,e)}}function uM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(nn(n,e))return;s.uniform3iv(this.addr,e),rn(n,e)}}function dM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;s.uniform4iv(this.addr,e),rn(n,e)}}function fM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function hM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;s.uniform2uiv(this.addr,e),rn(n,e)}}function pM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(nn(n,e))return;s.uniform3uiv(this.addr,e),rn(n,e)}}function mM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;s.uniform4uiv(this.addr,e),rn(n,e)}}function gM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(df.compareFunction=n.isReversedDepthBuffer()?Mf:yf,c=df):c=zg,n.setTexture2D(e||c,o)}function _M(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||Gg,o)}function vM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||Hg,o)}function xM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||Vg,o)}function SM(s){switch(s){case 5126:return tM;case 35664:return nM;case 35665:return iM;case 35666:return rM;case 35674:return sM;case 35675:return aM;case 35676:return oM;case 5124:case 35670:return lM;case 35667:case 35671:return cM;case 35668:case 35672:return uM;case 35669:case 35673:return dM;case 5125:return fM;case 36294:return hM;case 36295:return pM;case 36296:return mM;case 35678:case 36198:case 36298:case 36306:case 35682:return gM;case 35679:case 36299:case 36307:return _M;case 35680:case 36300:case 36308:case 36293:return vM;case 36289:case 36303:case 36311:case 36292:return xM}}function yM(s,e){s.uniform1fv(this.addr,e)}function MM(s,e){const n=Qs(e,this.size,2);s.uniform2fv(this.addr,n)}function EM(s,e){const n=Qs(e,this.size,3);s.uniform3fv(this.addr,n)}function wM(s,e){const n=Qs(e,this.size,4);s.uniform4fv(this.addr,n)}function TM(s,e){const n=Qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function AM(s,e){const n=Qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function CM(s,e){const n=Qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function bM(s,e){s.uniform1iv(this.addr,e)}function RM(s,e){s.uniform2iv(this.addr,e)}function PM(s,e){s.uniform3iv(this.addr,e)}function LM(s,e){s.uniform4iv(this.addr,e)}function DM(s,e){s.uniform1uiv(this.addr,e)}function NM(s,e){s.uniform2uiv(this.addr,e)}function IM(s,e){s.uniform3uiv(this.addr,e)}function UM(s,e){s.uniform4uiv(this.addr,e)}function FM(s,e,n){const r=this.cache,o=e.length,c=nc(n,o);nn(r,c)||(s.uniform1iv(this.addr,c),rn(r,c));let u;this.type===s.SAMPLER_2D_SHADOW?u=df:u=zg;for(let f=0;f!==o;++f)n.setTexture2D(e[f]||u,c[f])}function OM(s,e,n){const r=this.cache,o=e.length,c=nc(n,o);nn(r,c)||(s.uniform1iv(this.addr,c),rn(r,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||Gg,c[u])}function kM(s,e,n){const r=this.cache,o=e.length,c=nc(n,o);nn(r,c)||(s.uniform1iv(this.addr,c),rn(r,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||Hg,c[u])}function BM(s,e,n){const r=this.cache,o=e.length,c=nc(n,o);nn(r,c)||(s.uniform1iv(this.addr,c),rn(r,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||Vg,c[u])}function zM(s){switch(s){case 5126:return yM;case 35664:return MM;case 35665:return EM;case 35666:return wM;case 35674:return TM;case 35675:return AM;case 35676:return CM;case 5124:case 35670:return bM;case 35667:case 35671:return RM;case 35668:case 35672:return PM;case 35669:case 35673:return LM;case 5125:return DM;case 36294:return NM;case 36295:return IM;case 36296:return UM;case 35678:case 36198:case 36298:case 36306:case 35682:return FM;case 35679:case 36299:case 36307:return OM;case 35680:case 36300:case 36308:case 36293:return kM;case 36289:case 36303:case 36311:case 36292:return BM}}class VM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=SM(n.type)}}class GM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=zM(n.type)}}class HM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const f=o[c];f.setValue(e,n[f.id],r)}}}const gd=/(\w+)(\])?(\[|\.)?/g;function jm(s,e){s.seq.push(e),s.map[e.id]=e}function WM(s,e,n){const r=s.name,o=r.length;for(gd.lastIndex=0;;){const c=gd.exec(r),u=gd.lastIndex;let f=c[1];const p=c[2]==="]",h=c[3];if(p&&(f=f|0),h===void 0||h==="["&&u+2===o){jm(n,h===void 0?new VM(f,s,e):new GM(f,s,e));break}else{let _=n.map[f];_===void 0&&(_=new HM(f),jm(n,_)),n=_}}}class Gl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(n,u),p=e.getUniformLocation(n,f.name);WM(f,p,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,u=n.length;c!==u;++c){const f=n[c],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function Ym(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const XM=37297;let jM=0;function YM(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return r.join(`
`)}const qm=new ct;function qM(s){wt._getMatrix(qm,wt.workingColorSpace,s);const e=`mat3( ${qm.elements.map(n=>n.toFixed(4))} )`;switch(wt.getTransfer(s)){case Hl:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function $m(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+YM(s.getShaderSource(e),f)}else return c}function $M(s,e){const n=qM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const KM={[lg]:"Linear",[cg]:"Reinhard",[ug]:"Cineon",[dg]:"ACESFilmic",[hg]:"AgX",[pg]:"Neutral",[fg]:"Custom"};function ZM(s,e){const n=KM[e];return n===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ul=new j;function QM(){wt.getLuminanceCoefficients(Ul);const s=Ul.x.toFixed(4),e=Ul.y.toFixed(4),n=Ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function JM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ja).join(`
`)}function eE(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function tE(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=s.getActiveAttrib(e,o),u=c.name;let f=1;c.type===s.FLOAT_MAT2&&(f=2),c.type===s.FLOAT_MAT3&&(f=3),c.type===s.FLOAT_MAT4&&(f=4),n[u]={type:c.type,location:s.getAttribLocation(e,u),locationSize:f}}return n}function ja(s){return s!==""}function Km(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nE=/^[ \t]*#include +<([\w\d./]+)>/gm;function ff(s){return s.replace(nE,rE)}const iE=new Map;function rE(s,e){let n=dt[e];if(n===void 0){const r=iE.get(e);if(r!==void 0)n=dt[r],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return ff(n)}const sE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qm(s){return s.replace(sE,aE)}function aE(s,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Jm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const oE={[Fl]:"SHADOWMAP_TYPE_PCF",[Xa]:"SHADOWMAP_TYPE_VSM"};function lE(s){return oE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const cE={[rs]:"ENVMAP_TYPE_CUBE",[js]:"ENVMAP_TYPE_CUBE",[Ql]:"ENVMAP_TYPE_CUBE_UV"};function uE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":cE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const dE={[js]:"ENVMAP_MODE_REFRACTION"};function fE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":dE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const hE={[og]:"ENVMAP_BLENDING_MULTIPLY",[ev]:"ENVMAP_BLENDING_MIX",[tv]:"ENVMAP_BLENDING_ADD"};function pE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":hE[s.combine]||"ENVMAP_BLENDING_NONE"}function mE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function gE(s,e,n,r){const o=s.getContext(),c=n.defines;let u=n.vertexShader,f=n.fragmentShader;const p=lE(n),h=uE(n),g=fE(n),_=pE(n),v=mE(n),y=JM(n),w=eE(c),T=o.createProgram();let S,x,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(ja).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(ja).join(`
`),x.length>0&&(x+=`
`)):(S=[Jm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ja).join(`
`),x=[Jm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ci?"#define TONE_MAPPING":"",n.toneMapping!==Ci?dt.tonemapping_pars_fragment:"",n.toneMapping!==Ci?ZM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,$M("linearToOutputTexel",n.outputColorSpace),QM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ja).join(`
`)),u=ff(u),u=Km(u,n),u=Zm(u,n),f=ff(f),f=Km(f,n),f=Zm(f,n),u=Qm(u),f=Qm(f),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",n.glslVersion===om?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===om?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const N=L+S+u,P=L+x+f,I=Ym(o,o.VERTEX_SHADER,N),F=Ym(o,o.FRAGMENT_SHADER,P);o.attachShader(T,I),o.attachShader(T,F),n.index0AttributeName!==void 0?o.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function O(V){if(s.debug.checkShaderErrors){const se=o.getProgramInfoLog(T)||"",J=o.getShaderInfoLog(I)||"",fe=o.getShaderInfoLog(F)||"",ce=se.trim(),oe=J.trim(),K=fe.trim();let Y=!0,he=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,T,I,F);else{const re=$m(o,I,"vertex"),U=$m(o,F,"fragment");Ct("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ce+`
`+re+`
`+U)}else ce!==""?st("WebGLProgram: Program Info Log:",ce):(oe===""||K==="")&&(he=!1);he&&(V.diagnostics={runnable:Y,programLog:ce,vertexShader:{log:oe,prefix:S},fragmentShader:{log:K,prefix:x}})}o.deleteShader(I),o.deleteShader(F),q=new Gl(o,T),C=tE(o,T)}let q;this.getUniforms=function(){return q===void 0&&O(this),q};let C;this.getAttributes=function(){return C===void 0&&O(this),C};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=o.getProgramParameter(T,XM)),b},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=jM++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=I,this.fragmentShader=F,this}let _E=0;class vE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new xE(e),n.set(e,r)),r}}class xE{constructor(e){this.id=_E++,this.code=e,this.usedTimes=0}}function SE(s,e,n,r,o,c,u){const f=new Cg,p=new vE,h=new Set,g=[],_=new Map,v=o.logarithmicDepthBuffer;let y=o.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return h.add(C),C===0?"uv":`uv${C}`}function S(C,b,V,se,J){const fe=se.fog,ce=J.geometry,oe=C.isMeshStandardMaterial?se.environment:null,K=(C.isMeshStandardMaterial?n:e).get(C.envMap||oe),Y=K&&K.mapping===Ql?K.image.height:null,he=w[C.type];C.precision!==null&&(y=o.getMaxPrecision(C.precision),y!==C.precision&&st("WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const re=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,U=re!==void 0?re.length:0;let ae=0;ce.morphAttributes.position!==void 0&&(ae=1),ce.morphAttributes.normal!==void 0&&(ae=2),ce.morphAttributes.color!==void 0&&(ae=3);let Re,Ye,Ke,te;if(he){const yt=wi[he];Re=yt.vertexShader,Ye=yt.fragmentShader}else Re=C.vertexShader,Ye=C.fragmentShader,p.update(C),Ke=p.getVertexShaderID(C),te=p.getFragmentShaderID(C);const ue=s.getRenderTarget(),ye=s.state.buffers.depth.getReversed(),ke=J.isInstancedMesh===!0,Ie=J.isBatchedMesh===!0,pt=!!C.map,$t=!!C.matcap,ft=!!K,xt=!!C.aoMap,Pt=!!C.lightMap,lt=!!C.bumpMap,zt=!!C.normalMap,B=!!C.displacementMap,Vt=!!C.emissiveMap,gt=!!C.metalnessMap,St=!!C.roughnessMap,We=C.anisotropy>0,R=C.clearcoat>0,M=C.dispersion>0,W=C.iridescence>0,de=C.sheen>0,me=C.transmission>0,le=We&&!!C.anisotropyMap,qe=R&&!!C.clearcoatMap,we=R&&!!C.clearcoatNormalMap,Be=R&&!!C.clearcoatRoughnessMap,nt=W&&!!C.iridescenceMap,Se=W&&!!C.iridescenceThicknessMap,be=de&&!!C.sheenColorMap,Ge=de&&!!C.sheenRoughnessMap,Xe=!!C.specularMap,Ae=!!C.specularColorMap,ot=!!C.specularIntensityMap,G=me&&!!C.transmissionMap,Le=me&&!!C.thicknessMap,Me=!!C.gradientMap,De=!!C.alphaMap,ve=C.alphaTest>0,pe=!!C.alphaHash,Ce=!!C.extensions;let it=Ci;C.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(it=s.toneMapping);const Nt={shaderID:he,shaderType:C.type,shaderName:C.name,vertexShader:Re,fragmentShader:Ye,defines:C.defines,customVertexShaderID:Ke,customFragmentShaderID:te,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:Ie,batchingColor:Ie&&J._colorsTexture!==null,instancing:ke,instancingColor:ke&&J.instanceColor!==null,instancingMorph:ke&&J.morphTexture!==null,outputColorSpace:ue===null?s.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:qs,alphaToCoverage:!!C.alphaToCoverage,map:pt,matcap:$t,envMap:ft,envMapMode:ft&&K.mapping,envMapCubeUVHeight:Y,aoMap:xt,lightMap:Pt,bumpMap:lt,normalMap:zt,displacementMap:B,emissiveMap:Vt,normalMapObjectSpace:zt&&C.normalMapType===rv,normalMapTangentSpace:zt&&C.normalMapType===Eg,metalnessMap:gt,roughnessMap:St,anisotropy:We,anisotropyMap:le,clearcoat:R,clearcoatMap:qe,clearcoatNormalMap:we,clearcoatRoughnessMap:Be,dispersion:M,iridescence:W,iridescenceMap:nt,iridescenceThicknessMap:Se,sheen:de,sheenColorMap:be,sheenRoughnessMap:Ge,specularMap:Xe,specularColorMap:Ae,specularIntensityMap:ot,transmission:me,transmissionMap:G,thicknessMap:Le,gradientMap:Me,opaque:C.transparent===!1&&C.blending===Gs&&C.alphaToCoverage===!1,alphaMap:De,alphaTest:ve,alphaHash:pe,combine:C.combine,mapUv:pt&&T(C.map.channel),aoMapUv:xt&&T(C.aoMap.channel),lightMapUv:Pt&&T(C.lightMap.channel),bumpMapUv:lt&&T(C.bumpMap.channel),normalMapUv:zt&&T(C.normalMap.channel),displacementMapUv:B&&T(C.displacementMap.channel),emissiveMapUv:Vt&&T(C.emissiveMap.channel),metalnessMapUv:gt&&T(C.metalnessMap.channel),roughnessMapUv:St&&T(C.roughnessMap.channel),anisotropyMapUv:le&&T(C.anisotropyMap.channel),clearcoatMapUv:qe&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:we&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:be&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&T(C.sheenRoughnessMap.channel),specularMapUv:Xe&&T(C.specularMap.channel),specularColorMapUv:Ae&&T(C.specularColorMap.channel),specularIntensityMapUv:ot&&T(C.specularIntensityMap.channel),transmissionMapUv:G&&T(C.transmissionMap.channel),thicknessMapUv:Le&&T(C.thicknessMap.channel),alphaMapUv:De&&T(C.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(zt||We),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!ce.attributes.uv&&(pt||De),fog:!!fe,useFog:C.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:ye,skinning:J.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ae,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:it,decodeVideoTexture:pt&&C.map.isVideoTexture===!0&&wt.getTransfer(C.map.colorSpace)===It,decodeVideoTextureEmissive:Vt&&C.emissiveMap.isVideoTexture===!0&&wt.getTransfer(C.emissiveMap.colorSpace)===It,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Yi,flipSided:C.side===kn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ce&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&C.extensions.multiDraw===!0||Ie)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Nt.vertexUv1s=h.has(1),Nt.vertexUv2s=h.has(2),Nt.vertexUv3s=h.has(3),h.clear(),Nt}function x(C){const b=[];if(C.shaderID?b.push(C.shaderID):(b.push(C.customVertexShaderID),b.push(C.customFragmentShaderID)),C.defines!==void 0)for(const V in C.defines)b.push(V),b.push(C.defines[V]);return C.isRawShaderMaterial===!1&&(L(b,C),N(b,C),b.push(s.outputColorSpace)),b.push(C.customProgramCacheKey),b.join()}function L(C,b){C.push(b.precision),C.push(b.outputColorSpace),C.push(b.envMapMode),C.push(b.envMapCubeUVHeight),C.push(b.mapUv),C.push(b.alphaMapUv),C.push(b.lightMapUv),C.push(b.aoMapUv),C.push(b.bumpMapUv),C.push(b.normalMapUv),C.push(b.displacementMapUv),C.push(b.emissiveMapUv),C.push(b.metalnessMapUv),C.push(b.roughnessMapUv),C.push(b.anisotropyMapUv),C.push(b.clearcoatMapUv),C.push(b.clearcoatNormalMapUv),C.push(b.clearcoatRoughnessMapUv),C.push(b.iridescenceMapUv),C.push(b.iridescenceThicknessMapUv),C.push(b.sheenColorMapUv),C.push(b.sheenRoughnessMapUv),C.push(b.specularMapUv),C.push(b.specularColorMapUv),C.push(b.specularIntensityMapUv),C.push(b.transmissionMapUv),C.push(b.thicknessMapUv),C.push(b.combine),C.push(b.fogExp2),C.push(b.sizeAttenuation),C.push(b.morphTargetsCount),C.push(b.morphAttributeCount),C.push(b.numDirLights),C.push(b.numPointLights),C.push(b.numSpotLights),C.push(b.numSpotLightMaps),C.push(b.numHemiLights),C.push(b.numRectAreaLights),C.push(b.numDirLightShadows),C.push(b.numPointLightShadows),C.push(b.numSpotLightShadows),C.push(b.numSpotLightShadowsWithMaps),C.push(b.numLightProbes),C.push(b.shadowMapType),C.push(b.toneMapping),C.push(b.numClippingPlanes),C.push(b.numClipIntersection),C.push(b.depthPacking)}function N(C,b){f.disableAll(),b.instancing&&f.enable(0),b.instancingColor&&f.enable(1),b.instancingMorph&&f.enable(2),b.matcap&&f.enable(3),b.envMap&&f.enable(4),b.normalMapObjectSpace&&f.enable(5),b.normalMapTangentSpace&&f.enable(6),b.clearcoat&&f.enable(7),b.iridescence&&f.enable(8),b.alphaTest&&f.enable(9),b.vertexColors&&f.enable(10),b.vertexAlphas&&f.enable(11),b.vertexUv1s&&f.enable(12),b.vertexUv2s&&f.enable(13),b.vertexUv3s&&f.enable(14),b.vertexTangents&&f.enable(15),b.anisotropy&&f.enable(16),b.alphaHash&&f.enable(17),b.batching&&f.enable(18),b.dispersion&&f.enable(19),b.batchingColor&&f.enable(20),b.gradientMap&&f.enable(21),C.push(f.mask),f.disableAll(),b.fog&&f.enable(0),b.useFog&&f.enable(1),b.flatShading&&f.enable(2),b.logarithmicDepthBuffer&&f.enable(3),b.reversedDepthBuffer&&f.enable(4),b.skinning&&f.enable(5),b.morphTargets&&f.enable(6),b.morphNormals&&f.enable(7),b.morphColors&&f.enable(8),b.premultipliedAlpha&&f.enable(9),b.shadowMapEnabled&&f.enable(10),b.doubleSided&&f.enable(11),b.flipSided&&f.enable(12),b.useDepthPacking&&f.enable(13),b.dithering&&f.enable(14),b.transmission&&f.enable(15),b.sheen&&f.enable(16),b.opaque&&f.enable(17),b.pointsUvs&&f.enable(18),b.decodeVideoTexture&&f.enable(19),b.decodeVideoTextureEmissive&&f.enable(20),b.alphaToCoverage&&f.enable(21),C.push(f.mask)}function P(C){const b=w[C.type];let V;if(b){const se=wi[b];V=Dv.clone(se.uniforms)}else V=C.uniforms;return V}function I(C,b){let V=_.get(b);return V!==void 0?++V.usedTimes:(V=new gE(s,b,C,c),g.push(V),_.set(b,V)),V}function F(C){if(--C.usedTimes===0){const b=g.indexOf(C);g[b]=g[g.length-1],g.pop(),_.delete(C.cacheKey),C.destroy()}}function O(C){p.remove(C)}function q(){p.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:P,acquireProgram:I,releaseProgram:F,releaseShaderCache:O,programs:g,dispose:q}}function yE(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,p){s.get(u)[f]=p}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function ME(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function eg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function tg(){const s=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function u(_,v,y,w,T,S){let x=s[e];return x===void 0?(x={id:_.id,object:_,geometry:v,material:y,groupOrder:w,renderOrder:_.renderOrder,z:T,group:S},s[e]=x):(x.id=_.id,x.object=_,x.geometry=v,x.material=y,x.groupOrder=w,x.renderOrder=_.renderOrder,x.z=T,x.group=S),e++,x}function f(_,v,y,w,T,S){const x=u(_,v,y,w,T,S);y.transmission>0?r.push(x):y.transparent===!0?o.push(x):n.push(x)}function p(_,v,y,w,T,S){const x=u(_,v,y,w,T,S);y.transmission>0?r.unshift(x):y.transparent===!0?o.unshift(x):n.unshift(x)}function h(_,v){n.length>1&&n.sort(_||ME),r.length>1&&r.sort(v||eg),o.length>1&&o.sort(v||eg)}function g(){for(let _=e,v=s.length;_<v;_++){const y=s[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:f,unshift:p,finish:g,sort:h}}function EE(){let s=new WeakMap;function e(r,o){const c=s.get(r);let u;return c===void 0?(u=new tg,s.set(r,[u])):o>=c.length?(u=new tg,c.push(u)):u=c[o],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function wE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new mt};break;case"SpotLight":n={position:new j,direction:new j,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new mt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":n={color:new mt,position:new j,halfWidth:new j,halfHeight:new j};break}return s[e.id]=n,n}}}function TE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let AE=0;function CE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function bE(s){const e=new wE,n=TE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new j);const o=new j,c=new jt,u=new jt;function f(h){let g=0,_=0,v=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let y=0,w=0,T=0,S=0,x=0,L=0,N=0,P=0,I=0,F=0,O=0;h.sort(CE);for(let C=0,b=h.length;C<b;C++){const V=h[C],se=V.color,J=V.intensity,fe=V.distance;let ce=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Ys?ce=V.shadow.map.texture:ce=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)g+=se.r*J,_+=se.g*J,v+=se.b*J;else if(V.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(V.sh.coefficients[oe],J);O++}else if(V.isDirectionalLight){const oe=e.get(V);if(oe.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const K=V.shadow,Y=n.get(V);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,r.directionalShadow[y]=Y,r.directionalShadowMap[y]=ce,r.directionalShadowMatrix[y]=V.shadow.matrix,L++}r.directional[y]=oe,y++}else if(V.isSpotLight){const oe=e.get(V);oe.position.setFromMatrixPosition(V.matrixWorld),oe.color.copy(se).multiplyScalar(J),oe.distance=fe,oe.coneCos=Math.cos(V.angle),oe.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),oe.decay=V.decay,r.spot[T]=oe;const K=V.shadow;if(V.map&&(r.spotLightMap[I]=V.map,I++,K.updateMatrices(V),V.castShadow&&F++),r.spotLightMatrix[T]=K.matrix,V.castShadow){const Y=n.get(V);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,r.spotShadow[T]=Y,r.spotShadowMap[T]=ce,P++}T++}else if(V.isRectAreaLight){const oe=e.get(V);oe.color.copy(se).multiplyScalar(J),oe.halfWidth.set(V.width*.5,0,0),oe.halfHeight.set(0,V.height*.5,0),r.rectArea[S]=oe,S++}else if(V.isPointLight){const oe=e.get(V);if(oe.color.copy(V.color).multiplyScalar(V.intensity),oe.distance=V.distance,oe.decay=V.decay,V.castShadow){const K=V.shadow,Y=n.get(V);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,Y.shadowCameraNear=K.camera.near,Y.shadowCameraFar=K.camera.far,r.pointShadow[w]=Y,r.pointShadowMap[w]=ce,r.pointShadowMatrix[w]=V.shadow.matrix,N++}r.point[w]=oe,w++}else if(V.isHemisphereLight){const oe=e.get(V);oe.skyColor.copy(V.color).multiplyScalar(J),oe.groundColor.copy(V.groundColor).multiplyScalar(J),r.hemi[x]=oe,x++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ne.LTC_FLOAT_1,r.rectAreaLTC2=Ne.LTC_FLOAT_2):(r.rectAreaLTC1=Ne.LTC_HALF_1,r.rectAreaLTC2=Ne.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=v;const q=r.hash;(q.directionalLength!==y||q.pointLength!==w||q.spotLength!==T||q.rectAreaLength!==S||q.hemiLength!==x||q.numDirectionalShadows!==L||q.numPointShadows!==N||q.numSpotShadows!==P||q.numSpotMaps!==I||q.numLightProbes!==O)&&(r.directional.length=y,r.spot.length=T,r.rectArea.length=S,r.point.length=w,r.hemi.length=x,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=P+I-F,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=O,q.directionalLength=y,q.pointLength=w,q.spotLength=T,q.rectAreaLength=S,q.hemiLength=x,q.numDirectionalShadows=L,q.numPointShadows=N,q.numSpotShadows=P,q.numSpotMaps=I,q.numLightProbes=O,r.version=AE++)}function p(h,g){let _=0,v=0,y=0,w=0,T=0;const S=g.matrixWorldInverse;for(let x=0,L=h.length;x<L;x++){const N=h[x];if(N.isDirectionalLight){const P=r.directional[_];P.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(S),_++}else if(N.isSpotLight){const P=r.spot[y];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(S),P.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(S),y++}else if(N.isRectAreaLight){const P=r.rectArea[w];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(S),u.identity(),c.copy(N.matrixWorld),c.premultiply(S),u.extractRotation(c),P.halfWidth.set(N.width*.5,0,0),P.halfHeight.set(0,N.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),w++}else if(N.isPointLight){const P=r.point[v];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(S),v++}else if(N.isHemisphereLight){const P=r.hemi[T];P.direction.setFromMatrixPosition(N.matrixWorld),P.direction.transformDirection(S),T++}}}return{setup:f,setupView:p,state:r}}function ng(s){const e=new bE(s),n=[],r=[];function o(g){h.camera=g,n.length=0,r.length=0}function c(g){n.push(g)}function u(g){r.push(g)}function f(){e.setup(n)}function p(g){e.setupView(n,g)}const h={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:f,setupLightsView:p,pushLight:c,pushShadow:u}}function RE(s){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let f;return u===void 0?(f=new ng(s),e.set(o,[f])):c>=u.length?(f=new ng(s),u.push(f)):f=u[c],f}function r(){e=new WeakMap}return{get:n,dispose:r}}const PE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LE=`uniform sampler2D shadow_pass;
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
}`,DE=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],NE=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],ig=new jt,Wa=new j,_d=new j;function IE(s,e,n){let r=new wf;const o=new Rt,c=new Rt,u=new qt,f=new jv,p=new Yv,h={},g=n.maxTextureSize,_={[Rr]:kn,[kn]:Rr,[Yi]:Yi},v=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:PE,fragmentShader:LE}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const w=new gi;w.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Dt(w,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fl;let x=this.type;this.render=function(F,O,q){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;F.type===U_&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),F.type=Fl);const C=s.getRenderTarget(),b=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),se=s.state;se.setBlending(Zi),se.buffers.depth.getReversed()===!0?se.buffers.color.setClear(0,0,0,0):se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const J=x!==this.type;J&&O.traverse(function(fe){fe.material&&(Array.isArray(fe.material)?fe.material.forEach(ce=>ce.needsUpdate=!0):fe.material.needsUpdate=!0)});for(let fe=0,ce=F.length;fe<ce;fe++){const oe=F[fe],K=oe.shadow;if(K===void 0){st("WebGLShadowMap:",oe,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;o.copy(K.mapSize);const Y=K.getFrameExtents();if(o.multiply(Y),c.copy(K.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/Y.x),o.x=c.x*Y.x,K.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/Y.y),o.y=c.y*Y.y,K.mapSize.y=c.y)),K.map===null||J===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===Xa){if(oe.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new bi(o.x,o.y,{format:Ys,type:Ji,minFilter:En,magFilter:En,generateMipmaps:!1}),K.map.texture.name=oe.name+".shadowMap",K.map.depthTexture=new Za(o.x,o.y,Ti),K.map.depthTexture.name=oe.name+".shadowMapDepth",K.map.depthTexture.format=er,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=pn,K.map.depthTexture.magFilter=pn}else{oe.isPointLight?(K.map=new Ug(o.x),K.map.depthTexture=new Hv(o.x,Pi)):(K.map=new bi(o.x,o.y),K.map.depthTexture=new Za(o.x,o.y,Pi)),K.map.depthTexture.name=oe.name+".shadowMap",K.map.depthTexture.format=er;const re=s.state.buffers.depth.getReversed();this.type===Fl?(K.map.depthTexture.compareFunction=re?Mf:yf,K.map.depthTexture.minFilter=En,K.map.depthTexture.magFilter=En):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=pn,K.map.depthTexture.magFilter=pn)}K.camera.updateProjectionMatrix()}const he=K.map.isWebGLCubeRenderTarget?6:1;for(let re=0;re<he;re++){if(K.map.isWebGLCubeRenderTarget)s.setRenderTarget(K.map,re),s.clear();else{re===0&&(s.setRenderTarget(K.map),s.clear());const U=K.getViewport(re);u.set(c.x*U.x,c.y*U.y,c.x*U.z,c.y*U.w),se.viewport(u)}if(oe.isPointLight){const U=K.camera,ae=K.matrix,Re=oe.distance||U.far;Re!==U.far&&(U.far=Re,U.updateProjectionMatrix()),Wa.setFromMatrixPosition(oe.matrixWorld),U.position.copy(Wa),_d.copy(U.position),_d.add(DE[re]),U.up.copy(NE[re]),U.lookAt(_d),U.updateMatrixWorld(),ae.makeTranslation(-Wa.x,-Wa.y,-Wa.z),ig.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),K._frustum.setFromProjectionMatrix(ig,U.coordinateSystem,U.reversedDepth)}else K.updateMatrices(oe);r=K.getFrustum(),P(O,q,K.camera,oe,this.type)}K.isPointLightShadow!==!0&&this.type===Xa&&L(K,q),K.needsUpdate=!1}x=this.type,S.needsUpdate=!1,s.setRenderTarget(C,b,V)};function L(F,O){const q=e.update(T);v.defines.VSM_SAMPLES!==F.blurSamples&&(v.defines.VSM_SAMPLES=F.blurSamples,y.defines.VSM_SAMPLES=F.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new bi(o.x,o.y,{format:Ys,type:Ji})),v.uniforms.shadow_pass.value=F.map.depthTexture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(O,null,q,v,T,null),y.uniforms.shadow_pass.value=F.mapPass.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(O,null,q,y,T,null)}function N(F,O,q,C){let b=null;const V=q.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(V!==void 0)b=V;else if(b=q.isPointLight===!0?p:f,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const se=b.uuid,J=O.uuid;let fe=h[se];fe===void 0&&(fe={},h[se]=fe);let ce=fe[J];ce===void 0&&(ce=b.clone(),fe[J]=ce,O.addEventListener("dispose",I)),b=ce}if(b.visible=O.visible,b.wireframe=O.wireframe,C===Xa?b.side=O.shadowSide!==null?O.shadowSide:O.side:b.side=O.shadowSide!==null?O.shadowSide:_[O.side],b.alphaMap=O.alphaMap,b.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,b.map=O.map,b.clipShadows=O.clipShadows,b.clippingPlanes=O.clippingPlanes,b.clipIntersection=O.clipIntersection,b.displacementMap=O.displacementMap,b.displacementScale=O.displacementScale,b.displacementBias=O.displacementBias,b.wireframeLinewidth=O.wireframeLinewidth,b.linewidth=O.linewidth,q.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const se=s.properties.get(b);se.light=q}return b}function P(F,O,q,C,b){if(F.visible===!1)return;if(F.layers.test(O.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&b===Xa)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,F.matrixWorld);const J=e.update(F),fe=F.material;if(Array.isArray(fe)){const ce=J.groups;for(let oe=0,K=ce.length;oe<K;oe++){const Y=ce[oe],he=fe[Y.materialIndex];if(he&&he.visible){const re=N(F,he,C,b);F.onBeforeShadow(s,F,O,q,J,re,Y),s.renderBufferDirect(q,null,J,re,F,Y),F.onAfterShadow(s,F,O,q,J,re,Y)}}}else if(fe.visible){const ce=N(F,fe,C,b);F.onBeforeShadow(s,F,O,q,J,ce,null),s.renderBufferDirect(q,null,J,ce,F,null),F.onAfterShadow(s,F,O,q,J,ce,null)}}const se=F.children;for(let J=0,fe=se.length;J<fe;J++)P(se[J],O,q,C,b)}function I(F){F.target.removeEventListener("dispose",I);for(const q in h){const C=h[q],b=F.target.uuid;b in C&&(C[b].dispose(),delete C[b])}}}const UE={[Sd]:yd,[Md]:Td,[Ed]:Ad,[Xs]:wd,[yd]:Sd,[Td]:Md,[Ad]:Ed,[wd]:Xs};function FE(s,e){function n(){let G=!1;const Le=new qt;let Me=null;const De=new qt(0,0,0,0);return{setMask:function(ve){Me!==ve&&!G&&(s.colorMask(ve,ve,ve,ve),Me=ve)},setLocked:function(ve){G=ve},setClear:function(ve,pe,Ce,it,Nt){Nt===!0&&(ve*=it,pe*=it,Ce*=it),Le.set(ve,pe,Ce,it),De.equals(Le)===!1&&(s.clearColor(ve,pe,Ce,it),De.copy(Le))},reset:function(){G=!1,Me=null,De.set(-1,0,0,0)}}}function r(){let G=!1,Le=!1,Me=null,De=null,ve=null;return{setReversed:function(pe){if(Le!==pe){const Ce=e.get("EXT_clip_control");pe?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),Le=pe;const it=ve;ve=null,this.setClear(it)}},getReversed:function(){return Le},setTest:function(pe){pe?ue(s.DEPTH_TEST):ye(s.DEPTH_TEST)},setMask:function(pe){Me!==pe&&!G&&(s.depthMask(pe),Me=pe)},setFunc:function(pe){if(Le&&(pe=UE[pe]),De!==pe){switch(pe){case Sd:s.depthFunc(s.NEVER);break;case yd:s.depthFunc(s.ALWAYS);break;case Md:s.depthFunc(s.LESS);break;case Xs:s.depthFunc(s.LEQUAL);break;case Ed:s.depthFunc(s.EQUAL);break;case wd:s.depthFunc(s.GEQUAL);break;case Td:s.depthFunc(s.GREATER);break;case Ad:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}De=pe}},setLocked:function(pe){G=pe},setClear:function(pe){ve!==pe&&(Le&&(pe=1-pe),s.clearDepth(pe),ve=pe)},reset:function(){G=!1,Me=null,De=null,ve=null,Le=!1}}}function o(){let G=!1,Le=null,Me=null,De=null,ve=null,pe=null,Ce=null,it=null,Nt=null;return{setTest:function(yt){G||(yt?ue(s.STENCIL_TEST):ye(s.STENCIL_TEST))},setMask:function(yt){Le!==yt&&!G&&(s.stencilMask(yt),Le=yt)},setFunc:function(yt,Bn,Tn){(Me!==yt||De!==Bn||ve!==Tn)&&(s.stencilFunc(yt,Bn,Tn),Me=yt,De=Bn,ve=Tn)},setOp:function(yt,Bn,Tn){(pe!==yt||Ce!==Bn||it!==Tn)&&(s.stencilOp(yt,Bn,Tn),pe=yt,Ce=Bn,it=Tn)},setLocked:function(yt){G=yt},setClear:function(yt){Nt!==yt&&(s.clearStencil(yt),Nt=yt)},reset:function(){G=!1,Le=null,Me=null,De=null,ve=null,pe=null,Ce=null,it=null,Nt=null}}}const c=new n,u=new r,f=new o,p=new WeakMap,h=new WeakMap;let g={},_={},v=new WeakMap,y=[],w=null,T=!1,S=null,x=null,L=null,N=null,P=null,I=null,F=null,O=new mt(0,0,0),q=0,C=!1,b=null,V=null,se=null,J=null,fe=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,K=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),oe=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),oe=K>=2);let he=null,re={};const U=s.getParameter(s.SCISSOR_BOX),ae=s.getParameter(s.VIEWPORT),Re=new qt().fromArray(U),Ye=new qt().fromArray(ae);function Ke(G,Le,Me,De){const ve=new Uint8Array(4),pe=s.createTexture();s.bindTexture(G,pe),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ce=0;Ce<Me;Ce++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(Le,0,s.RGBA,1,1,De,0,s.RGBA,s.UNSIGNED_BYTE,ve):s.texImage2D(Le+Ce,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ve);return pe}const te={};te[s.TEXTURE_2D]=Ke(s.TEXTURE_2D,s.TEXTURE_2D,1),te[s.TEXTURE_CUBE_MAP]=Ke(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[s.TEXTURE_2D_ARRAY]=Ke(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),te[s.TEXTURE_3D]=Ke(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ue(s.DEPTH_TEST),u.setFunc(Xs),lt(!1),zt(tm),ue(s.CULL_FACE),xt(Zi);function ue(G){g[G]!==!0&&(s.enable(G),g[G]=!0)}function ye(G){g[G]!==!1&&(s.disable(G),g[G]=!1)}function ke(G,Le){return _[G]!==Le?(s.bindFramebuffer(G,Le),_[G]=Le,G===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Le),G===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ie(G,Le){let Me=y,De=!1;if(G){Me=v.get(Le),Me===void 0&&(Me=[],v.set(Le,Me));const ve=G.textures;if(Me.length!==ve.length||Me[0]!==s.COLOR_ATTACHMENT0){for(let pe=0,Ce=ve.length;pe<Ce;pe++)Me[pe]=s.COLOR_ATTACHMENT0+pe;Me.length=ve.length,De=!0}}else Me[0]!==s.BACK&&(Me[0]=s.BACK,De=!0);De&&s.drawBuffers(Me)}function pt(G){return w!==G?(s.useProgram(G),w=G,!0):!1}const $t={[es]:s.FUNC_ADD,[O_]:s.FUNC_SUBTRACT,[k_]:s.FUNC_REVERSE_SUBTRACT};$t[B_]=s.MIN,$t[z_]=s.MAX;const ft={[V_]:s.ZERO,[G_]:s.ONE,[H_]:s.SRC_COLOR,[vd]:s.SRC_ALPHA,[$_]:s.SRC_ALPHA_SATURATE,[Y_]:s.DST_COLOR,[X_]:s.DST_ALPHA,[W_]:s.ONE_MINUS_SRC_COLOR,[xd]:s.ONE_MINUS_SRC_ALPHA,[q_]:s.ONE_MINUS_DST_COLOR,[j_]:s.ONE_MINUS_DST_ALPHA,[K_]:s.CONSTANT_COLOR,[Z_]:s.ONE_MINUS_CONSTANT_COLOR,[Q_]:s.CONSTANT_ALPHA,[J_]:s.ONE_MINUS_CONSTANT_ALPHA};function xt(G,Le,Me,De,ve,pe,Ce,it,Nt,yt){if(G===Zi){T===!0&&(ye(s.BLEND),T=!1);return}if(T===!1&&(ue(s.BLEND),T=!0),G!==F_){if(G!==S||yt!==C){if((x!==es||P!==es)&&(s.blendEquation(s.FUNC_ADD),x=es,P=es),yt)switch(G){case Gs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case nm:s.blendFunc(s.ONE,s.ONE);break;case im:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case rm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ct("WebGLState: Invalid blending: ",G);break}else switch(G){case Gs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case nm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case im:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rm:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",G);break}L=null,N=null,I=null,F=null,O.set(0,0,0),q=0,S=G,C=yt}return}ve=ve||Le,pe=pe||Me,Ce=Ce||De,(Le!==x||ve!==P)&&(s.blendEquationSeparate($t[Le],$t[ve]),x=Le,P=ve),(Me!==L||De!==N||pe!==I||Ce!==F)&&(s.blendFuncSeparate(ft[Me],ft[De],ft[pe],ft[Ce]),L=Me,N=De,I=pe,F=Ce),(it.equals(O)===!1||Nt!==q)&&(s.blendColor(it.r,it.g,it.b,Nt),O.copy(it),q=Nt),S=G,C=!1}function Pt(G,Le){G.side===Yi?ye(s.CULL_FACE):ue(s.CULL_FACE);let Me=G.side===kn;Le&&(Me=!Me),lt(Me),G.blending===Gs&&G.transparent===!1?xt(Zi):xt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),c.setMask(G.colorWrite);const De=G.stencilWrite;f.setTest(De),De&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Vt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ue(s.SAMPLE_ALPHA_TO_COVERAGE):ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function lt(G){b!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),b=G)}function zt(G){G!==N_?(ue(s.CULL_FACE),G!==V&&(G===tm?s.cullFace(s.BACK):G===I_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ye(s.CULL_FACE),V=G}function B(G){G!==se&&(oe&&s.lineWidth(G),se=G)}function Vt(G,Le,Me){G?(ue(s.POLYGON_OFFSET_FILL),(J!==Le||fe!==Me)&&(s.polygonOffset(Le,Me),J=Le,fe=Me)):ye(s.POLYGON_OFFSET_FILL)}function gt(G){G?ue(s.SCISSOR_TEST):ye(s.SCISSOR_TEST)}function St(G){G===void 0&&(G=s.TEXTURE0+ce-1),he!==G&&(s.activeTexture(G),he=G)}function We(G,Le,Me){Me===void 0&&(he===null?Me=s.TEXTURE0+ce-1:Me=he);let De=re[Me];De===void 0&&(De={type:void 0,texture:void 0},re[Me]=De),(De.type!==G||De.texture!==Le)&&(he!==Me&&(s.activeTexture(Me),he=Me),s.bindTexture(G,Le||te[G]),De.type=G,De.texture=Le)}function R(){const G=re[he];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function M(){try{s.compressedTexImage2D(...arguments)}catch(G){Ct("WebGLState:",G)}}function W(){try{s.compressedTexImage3D(...arguments)}catch(G){Ct("WebGLState:",G)}}function de(){try{s.texSubImage2D(...arguments)}catch(G){Ct("WebGLState:",G)}}function me(){try{s.texSubImage3D(...arguments)}catch(G){Ct("WebGLState:",G)}}function le(){try{s.compressedTexSubImage2D(...arguments)}catch(G){Ct("WebGLState:",G)}}function qe(){try{s.compressedTexSubImage3D(...arguments)}catch(G){Ct("WebGLState:",G)}}function we(){try{s.texStorage2D(...arguments)}catch(G){Ct("WebGLState:",G)}}function Be(){try{s.texStorage3D(...arguments)}catch(G){Ct("WebGLState:",G)}}function nt(){try{s.texImage2D(...arguments)}catch(G){Ct("WebGLState:",G)}}function Se(){try{s.texImage3D(...arguments)}catch(G){Ct("WebGLState:",G)}}function be(G){Re.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Re.copy(G))}function Ge(G){Ye.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),Ye.copy(G))}function Xe(G,Le){let Me=h.get(Le);Me===void 0&&(Me=new WeakMap,h.set(Le,Me));let De=Me.get(G);De===void 0&&(De=s.getUniformBlockIndex(Le,G.name),Me.set(G,De))}function Ae(G,Le){const De=h.get(Le).get(G);p.get(Le)!==De&&(s.uniformBlockBinding(Le,De,G.__bindingPointIndex),p.set(Le,De))}function ot(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},he=null,re={},_={},v=new WeakMap,y=[],w=null,T=!1,S=null,x=null,L=null,N=null,P=null,I=null,F=null,O=new mt(0,0,0),q=0,C=!1,b=null,V=null,se=null,J=null,fe=null,Re.set(0,0,s.canvas.width,s.canvas.height),Ye.set(0,0,s.canvas.width,s.canvas.height),c.reset(),u.reset(),f.reset()}return{buffers:{color:c,depth:u,stencil:f},enable:ue,disable:ye,bindFramebuffer:ke,drawBuffers:Ie,useProgram:pt,setBlending:xt,setMaterial:Pt,setFlipSided:lt,setCullFace:zt,setLineWidth:B,setPolygonOffset:Vt,setScissorTest:gt,activeTexture:St,bindTexture:We,unbindTexture:R,compressedTexImage2D:M,compressedTexImage3D:W,texImage2D:nt,texImage3D:Se,updateUBOMapping:Xe,uniformBlockBinding:Ae,texStorage2D:we,texStorage3D:Be,texSubImage2D:de,texSubImage3D:me,compressedTexSubImage2D:le,compressedTexSubImage3D:qe,scissor:be,viewport:Ge,reset:ot}}function OE(s,e,n,r,o,c,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Rt,g=new WeakMap;let _;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(R,M){return y?new OffscreenCanvas(R,M):Xl("canvas")}function T(R,M,W){let de=1;const me=We(R);if((me.width>W||me.height>W)&&(de=W/Math.max(me.width,me.height)),de<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const le=Math.floor(de*me.width),qe=Math.floor(de*me.height);_===void 0&&(_=w(le,qe));const we=M?w(le,qe):_;return we.width=le,we.height=qe,we.getContext("2d").drawImage(R,0,0,le,qe),st("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+le+"x"+qe+")."),we}else return"data"in R&&st("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),R;return R}function S(R){return R.generateMipmaps}function x(R){s.generateMipmap(R)}function L(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(R,M,W,de,me=!1){if(R!==null){if(s[R]!==void 0)return s[R];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let le=M;if(M===s.RED&&(W===s.FLOAT&&(le=s.R32F),W===s.HALF_FLOAT&&(le=s.R16F),W===s.UNSIGNED_BYTE&&(le=s.R8)),M===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(le=s.R8UI),W===s.UNSIGNED_SHORT&&(le=s.R16UI),W===s.UNSIGNED_INT&&(le=s.R32UI),W===s.BYTE&&(le=s.R8I),W===s.SHORT&&(le=s.R16I),W===s.INT&&(le=s.R32I)),M===s.RG&&(W===s.FLOAT&&(le=s.RG32F),W===s.HALF_FLOAT&&(le=s.RG16F),W===s.UNSIGNED_BYTE&&(le=s.RG8)),M===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(le=s.RG8UI),W===s.UNSIGNED_SHORT&&(le=s.RG16UI),W===s.UNSIGNED_INT&&(le=s.RG32UI),W===s.BYTE&&(le=s.RG8I),W===s.SHORT&&(le=s.RG16I),W===s.INT&&(le=s.RG32I)),M===s.RGB_INTEGER&&(W===s.UNSIGNED_BYTE&&(le=s.RGB8UI),W===s.UNSIGNED_SHORT&&(le=s.RGB16UI),W===s.UNSIGNED_INT&&(le=s.RGB32UI),W===s.BYTE&&(le=s.RGB8I),W===s.SHORT&&(le=s.RGB16I),W===s.INT&&(le=s.RGB32I)),M===s.RGBA_INTEGER&&(W===s.UNSIGNED_BYTE&&(le=s.RGBA8UI),W===s.UNSIGNED_SHORT&&(le=s.RGBA16UI),W===s.UNSIGNED_INT&&(le=s.RGBA32UI),W===s.BYTE&&(le=s.RGBA8I),W===s.SHORT&&(le=s.RGBA16I),W===s.INT&&(le=s.RGBA32I)),M===s.RGB&&(W===s.UNSIGNED_INT_5_9_9_9_REV&&(le=s.RGB9_E5),W===s.UNSIGNED_INT_10F_11F_11F_REV&&(le=s.R11F_G11F_B10F)),M===s.RGBA){const qe=me?Hl:wt.getTransfer(de);W===s.FLOAT&&(le=s.RGBA32F),W===s.HALF_FLOAT&&(le=s.RGBA16F),W===s.UNSIGNED_BYTE&&(le=qe===It?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT_4_4_4_4&&(le=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(le=s.RGB5_A1)}return(le===s.R16F||le===s.R32F||le===s.RG16F||le===s.RG32F||le===s.RGBA16F||le===s.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function P(R,M){let W;return R?M===null||M===Pi||M===$a?W=s.DEPTH24_STENCIL8:M===Ti?W=s.DEPTH32F_STENCIL8:M===qa&&(W=s.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Pi||M===$a?W=s.DEPTH_COMPONENT24:M===Ti?W=s.DEPTH_COMPONENT32F:M===qa&&(W=s.DEPTH_COMPONENT16),W}function I(R,M){return S(R)===!0||R.isFramebufferTexture&&R.minFilter!==pn&&R.minFilter!==En?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function F(R){const M=R.target;M.removeEventListener("dispose",F),q(M),M.isVideoTexture&&g.delete(M)}function O(R){const M=R.target;M.removeEventListener("dispose",O),b(M)}function q(R){const M=r.get(R);if(M.__webglInit===void 0)return;const W=R.source,de=v.get(W);if(de){const me=de[M.__cacheKey];me.usedTimes--,me.usedTimes===0&&C(R),Object.keys(de).length===0&&v.delete(W)}r.remove(R)}function C(R){const M=r.get(R);s.deleteTexture(M.__webglTexture);const W=R.source,de=v.get(W);delete de[M.__cacheKey],u.memory.textures--}function b(R){const M=r.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),r.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(M.__webglFramebuffer[de]))for(let me=0;me<M.__webglFramebuffer[de].length;me++)s.deleteFramebuffer(M.__webglFramebuffer[de][me]);else s.deleteFramebuffer(M.__webglFramebuffer[de]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[de])}else{if(Array.isArray(M.__webglFramebuffer))for(let de=0;de<M.__webglFramebuffer.length;de++)s.deleteFramebuffer(M.__webglFramebuffer[de]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let de=0;de<M.__webglColorRenderbuffer.length;de++)M.__webglColorRenderbuffer[de]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[de]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const W=R.textures;for(let de=0,me=W.length;de<me;de++){const le=r.get(W[de]);le.__webglTexture&&(s.deleteTexture(le.__webglTexture),u.memory.textures--),r.remove(W[de])}r.remove(R)}let V=0;function se(){V=0}function J(){const R=V;return R>=o.maxTextures&&st("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+o.maxTextures),V+=1,R}function fe(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function ce(R,M){const W=r.get(R);if(R.isVideoTexture&&gt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&W.__version!==R.version){const de=R.image;if(de===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{te(W,R,M);return}}else R.isExternalTexture&&(W.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+M)}function oe(R,M){const W=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){te(W,R,M);return}else R.isExternalTexture&&(W.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+M)}function K(R,M){const W=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){te(W,R,M);return}n.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+M)}function Y(R,M){const W=r.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&W.__version!==R.version){ue(W,R,M);return}n.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+M)}const he={[Rd]:s.REPEAT,[$i]:s.CLAMP_TO_EDGE,[Pd]:s.MIRRORED_REPEAT},re={[pn]:s.NEAREST,[nv]:s.NEAREST_MIPMAP_NEAREST,[dl]:s.NEAREST_MIPMAP_LINEAR,[En]:s.LINEAR,[Bu]:s.LINEAR_MIPMAP_NEAREST,[ns]:s.LINEAR_MIPMAP_LINEAR},U={[sv]:s.NEVER,[uv]:s.ALWAYS,[av]:s.LESS,[yf]:s.LEQUAL,[ov]:s.EQUAL,[Mf]:s.GEQUAL,[lv]:s.GREATER,[cv]:s.NOTEQUAL};function ae(R,M){if(M.type===Ti&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===En||M.magFilter===Bu||M.magFilter===dl||M.magFilter===ns||M.minFilter===En||M.minFilter===Bu||M.minFilter===dl||M.minFilter===ns)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,he[M.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,he[M.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,he[M.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,re[M.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,re[M.minFilter]),M.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,U[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===pn||M.minFilter!==dl&&M.minFilter!==ns||M.type===Ti&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function Re(R,M){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",F));const de=M.source;let me=v.get(de);me===void 0&&(me={},v.set(de,me));const le=fe(M);if(le!==R.__cacheKey){me[le]===void 0&&(me[le]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,W=!0),me[le].usedTimes++;const qe=me[R.__cacheKey];qe!==void 0&&(me[R.__cacheKey].usedTimes--,qe.usedTimes===0&&C(M)),R.__cacheKey=le,R.__webglTexture=me[le].texture}return W}function Ye(R,M,W){return Math.floor(Math.floor(R/W)/M)}function Ke(R,M,W,de){const le=R.updateRanges;if(le.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,W,de,M.data);else{le.sort((Se,be)=>Se.start-be.start);let qe=0;for(let Se=1;Se<le.length;Se++){const be=le[qe],Ge=le[Se],Xe=be.start+be.count,Ae=Ye(Ge.start,M.width,4),ot=Ye(be.start,M.width,4);Ge.start<=Xe+1&&Ae===ot&&Ye(Ge.start+Ge.count-1,M.width,4)===Ae?be.count=Math.max(be.count,Ge.start+Ge.count-be.start):(++qe,le[qe]=Ge)}le.length=qe+1;const we=s.getParameter(s.UNPACK_ROW_LENGTH),Be=s.getParameter(s.UNPACK_SKIP_PIXELS),nt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let Se=0,be=le.length;Se<be;Se++){const Ge=le[Se],Xe=Math.floor(Ge.start/4),Ae=Math.ceil(Ge.count/4),ot=Xe%M.width,G=Math.floor(Xe/M.width),Le=Ae,Me=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ot),s.pixelStorei(s.UNPACK_SKIP_ROWS,G),n.texSubImage2D(s.TEXTURE_2D,0,ot,G,Le,Me,W,de,M.data)}R.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,we),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Be),s.pixelStorei(s.UNPACK_SKIP_ROWS,nt)}}function te(R,M,W){let de=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(de=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(de=s.TEXTURE_3D);const me=Re(R,M),le=M.source;n.bindTexture(de,R.__webglTexture,s.TEXTURE0+W);const qe=r.get(le);if(le.version!==qe.__version||me===!0){n.activeTexture(s.TEXTURE0+W);const we=wt.getPrimaries(wt.workingColorSpace),Be=M.colorSpace===Cr?null:wt.getPrimaries(M.colorSpace),nt=M.colorSpace===Cr||we===Be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let Se=T(M.image,!1,o.maxTextureSize);Se=St(M,Se);const be=c.convert(M.format,M.colorSpace),Ge=c.convert(M.type);let Xe=N(M.internalFormat,be,Ge,M.colorSpace,M.isVideoTexture);ae(de,M);let Ae;const ot=M.mipmaps,G=M.isVideoTexture!==!0,Le=qe.__version===void 0||me===!0,Me=le.dataReady,De=I(M,Se);if(M.isDepthTexture)Xe=P(M.format===is,M.type),Le&&(G?n.texStorage2D(s.TEXTURE_2D,1,Xe,Se.width,Se.height):n.texImage2D(s.TEXTURE_2D,0,Xe,Se.width,Se.height,0,be,Ge,null));else if(M.isDataTexture)if(ot.length>0){G&&Le&&n.texStorage2D(s.TEXTURE_2D,De,Xe,ot[0].width,ot[0].height);for(let ve=0,pe=ot.length;ve<pe;ve++)Ae=ot[ve],G?Me&&n.texSubImage2D(s.TEXTURE_2D,ve,0,0,Ae.width,Ae.height,be,Ge,Ae.data):n.texImage2D(s.TEXTURE_2D,ve,Xe,Ae.width,Ae.height,0,be,Ge,Ae.data);M.generateMipmaps=!1}else G?(Le&&n.texStorage2D(s.TEXTURE_2D,De,Xe,Se.width,Se.height),Me&&Ke(M,Se,be,Ge)):n.texImage2D(s.TEXTURE_2D,0,Xe,Se.width,Se.height,0,be,Ge,Se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){G&&Le&&n.texStorage3D(s.TEXTURE_2D_ARRAY,De,Xe,ot[0].width,ot[0].height,Se.depth);for(let ve=0,pe=ot.length;ve<pe;ve++)if(Ae=ot[ve],M.format!==mi)if(be!==null)if(G){if(Me)if(M.layerUpdates.size>0){const Ce=Im(Ae.width,Ae.height,M.format,M.type);for(const it of M.layerUpdates){const Nt=Ae.data.subarray(it*Ce/Ae.data.BYTES_PER_ELEMENT,(it+1)*Ce/Ae.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,it,Ae.width,Ae.height,1,be,Nt)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,Ae.width,Ae.height,Se.depth,be,Ae.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ve,Xe,Ae.width,Ae.height,Se.depth,0,Ae.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Me&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,Ae.width,Ae.height,Se.depth,be,Ge,Ae.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ve,Xe,Ae.width,Ae.height,Se.depth,0,be,Ge,Ae.data)}else{G&&Le&&n.texStorage2D(s.TEXTURE_2D,De,Xe,ot[0].width,ot[0].height);for(let ve=0,pe=ot.length;ve<pe;ve++)Ae=ot[ve],M.format!==mi?be!==null?G?Me&&n.compressedTexSubImage2D(s.TEXTURE_2D,ve,0,0,Ae.width,Ae.height,be,Ae.data):n.compressedTexImage2D(s.TEXTURE_2D,ve,Xe,Ae.width,Ae.height,0,Ae.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Me&&n.texSubImage2D(s.TEXTURE_2D,ve,0,0,Ae.width,Ae.height,be,Ge,Ae.data):n.texImage2D(s.TEXTURE_2D,ve,Xe,Ae.width,Ae.height,0,be,Ge,Ae.data)}else if(M.isDataArrayTexture)if(G){if(Le&&n.texStorage3D(s.TEXTURE_2D_ARRAY,De,Xe,Se.width,Se.height,Se.depth),Me)if(M.layerUpdates.size>0){const ve=Im(Se.width,Se.height,M.format,M.type);for(const pe of M.layerUpdates){const Ce=Se.data.subarray(pe*ve/Se.data.BYTES_PER_ELEMENT,(pe+1)*ve/Se.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,Se.width,Se.height,1,be,Ge,Ce)}M.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,be,Ge,Se.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Xe,Se.width,Se.height,Se.depth,0,be,Ge,Se.data);else if(M.isData3DTexture)G?(Le&&n.texStorage3D(s.TEXTURE_3D,De,Xe,Se.width,Se.height,Se.depth),Me&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,be,Ge,Se.data)):n.texImage3D(s.TEXTURE_3D,0,Xe,Se.width,Se.height,Se.depth,0,be,Ge,Se.data);else if(M.isFramebufferTexture){if(Le)if(G)n.texStorage2D(s.TEXTURE_2D,De,Xe,Se.width,Se.height);else{let ve=Se.width,pe=Se.height;for(let Ce=0;Ce<De;Ce++)n.texImage2D(s.TEXTURE_2D,Ce,Xe,ve,pe,0,be,Ge,null),ve>>=1,pe>>=1}}else if(ot.length>0){if(G&&Le){const ve=We(ot[0]);n.texStorage2D(s.TEXTURE_2D,De,Xe,ve.width,ve.height)}for(let ve=0,pe=ot.length;ve<pe;ve++)Ae=ot[ve],G?Me&&n.texSubImage2D(s.TEXTURE_2D,ve,0,0,be,Ge,Ae):n.texImage2D(s.TEXTURE_2D,ve,Xe,be,Ge,Ae);M.generateMipmaps=!1}else if(G){if(Le){const ve=We(Se);n.texStorage2D(s.TEXTURE_2D,De,Xe,ve.width,ve.height)}Me&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,be,Ge,Se)}else n.texImage2D(s.TEXTURE_2D,0,Xe,be,Ge,Se);S(M)&&x(de),qe.__version=le.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ue(R,M,W){if(M.image.length!==6)return;const de=Re(R,M),me=M.source;n.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+W);const le=r.get(me);if(me.version!==le.__version||de===!0){n.activeTexture(s.TEXTURE0+W);const qe=wt.getPrimaries(wt.workingColorSpace),we=M.colorSpace===Cr?null:wt.getPrimaries(M.colorSpace),Be=M.colorSpace===Cr||qe===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const nt=M.isCompressedTexture||M.image[0].isCompressedTexture,Se=M.image[0]&&M.image[0].isDataTexture,be=[];for(let pe=0;pe<6;pe++)!nt&&!Se?be[pe]=T(M.image[pe],!0,o.maxCubemapSize):be[pe]=Se?M.image[pe].image:M.image[pe],be[pe]=St(M,be[pe]);const Ge=be[0],Xe=c.convert(M.format,M.colorSpace),Ae=c.convert(M.type),ot=N(M.internalFormat,Xe,Ae,M.colorSpace),G=M.isVideoTexture!==!0,Le=le.__version===void 0||de===!0,Me=me.dataReady;let De=I(M,Ge);ae(s.TEXTURE_CUBE_MAP,M);let ve;if(nt){G&&Le&&n.texStorage2D(s.TEXTURE_CUBE_MAP,De,ot,Ge.width,Ge.height);for(let pe=0;pe<6;pe++){ve=be[pe].mipmaps;for(let Ce=0;Ce<ve.length;Ce++){const it=ve[Ce];M.format!==mi?Xe!==null?G?Me&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,0,0,it.width,it.height,Xe,it.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,ot,it.width,it.height,0,it.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,0,0,it.width,it.height,Xe,Ae,it.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,ot,it.width,it.height,0,Xe,Ae,it.data)}}}else{if(ve=M.mipmaps,G&&Le){ve.length>0&&De++;const pe=We(be[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,De,ot,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Se){G?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,be[pe].width,be[pe].height,Xe,Ae,be[pe].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ot,be[pe].width,be[pe].height,0,Xe,Ae,be[pe].data);for(let Ce=0;Ce<ve.length;Ce++){const Nt=ve[Ce].image[pe].image;G?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,0,0,Nt.width,Nt.height,Xe,Ae,Nt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,ot,Nt.width,Nt.height,0,Xe,Ae,Nt.data)}}else{G?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Xe,Ae,be[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ot,Xe,Ae,be[pe]);for(let Ce=0;Ce<ve.length;Ce++){const it=ve[Ce];G?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,0,0,Xe,Ae,it.image[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,ot,Xe,Ae,it.image[pe])}}}S(M)&&x(s.TEXTURE_CUBE_MAP),le.__version=me.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ye(R,M,W,de,me,le){const qe=c.convert(W.format,W.colorSpace),we=c.convert(W.type),Be=N(W.internalFormat,qe,we,W.colorSpace),nt=r.get(M),Se=r.get(W);if(Se.__renderTarget=M,!nt.__hasExternalTextures){const be=Math.max(1,M.width>>le),Ge=Math.max(1,M.height>>le);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?n.texImage3D(me,le,Be,be,Ge,M.depth,0,qe,we,null):n.texImage2D(me,le,Be,be,Ge,0,qe,we,null)}n.bindFramebuffer(s.FRAMEBUFFER,R),Vt(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,me,Se.__webglTexture,0,B(M)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,de,me,Se.__webglTexture,le),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ke(R,M,W){if(s.bindRenderbuffer(s.RENDERBUFFER,R),M.depthBuffer){const de=M.depthTexture,me=de&&de.isDepthTexture?de.type:null,le=P(M.stencilBuffer,me),qe=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Vt(M)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,B(M),le,M.width,M.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,B(M),le,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,le,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,qe,s.RENDERBUFFER,R)}else{const de=M.textures;for(let me=0;me<de.length;me++){const le=de[me],qe=c.convert(le.format,le.colorSpace),we=c.convert(le.type),Be=N(le.internalFormat,qe,we,le.colorSpace);Vt(M)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,B(M),Be,M.width,M.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,B(M),Be,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Be,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ie(R,M,W){const de=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(M.depthTexture);if(me.__renderTarget=M,(!me.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),de){if(me.__webglInit===void 0&&(me.__webglInit=!0,M.depthTexture.addEventListener("dispose",F)),me.__webglTexture===void 0){me.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),ae(s.TEXTURE_CUBE_MAP,M.depthTexture);const nt=c.convert(M.depthTexture.format),Se=c.convert(M.depthTexture.type);let be;M.depthTexture.format===er?be=s.DEPTH_COMPONENT24:M.depthTexture.format===is&&(be=s.DEPTH24_STENCIL8);for(let Ge=0;Ge<6;Ge++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,be,M.width,M.height,0,nt,Se,null)}}else ce(M.depthTexture,0);const le=me.__webglTexture,qe=B(M),we=de?s.TEXTURE_CUBE_MAP_POSITIVE_X+W:s.TEXTURE_2D,Be=M.depthTexture.format===is?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===er)Vt(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Be,we,le,0,qe):s.framebufferTexture2D(s.FRAMEBUFFER,Be,we,le,0);else if(M.depthTexture.format===is)Vt(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Be,we,le,0,qe):s.framebufferTexture2D(s.FRAMEBUFFER,Be,we,le,0);else throw new Error("Unknown depthTexture format")}function pt(R){const M=r.get(R),W=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const de=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),de){const me=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,de.removeEventListener("dispose",me)};de.addEventListener("dispose",me),M.__depthDisposeCallback=me}M.__boundDepthTexture=de}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(W)for(let de=0;de<6;de++)Ie(M.__webglFramebuffer[de],R,de);else{const de=R.texture.mipmaps;de&&de.length>0?Ie(M.__webglFramebuffer[0],R,0):Ie(M.__webglFramebuffer,R,0)}else if(W){M.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[de]),M.__webglDepthbuffer[de]===void 0)M.__webglDepthbuffer[de]=s.createRenderbuffer(),ke(M.__webglDepthbuffer[de],R,!1);else{const me=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=M.__webglDepthbuffer[de];s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,le)}}else{const de=R.texture.mipmaps;if(de&&de.length>0?n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),ke(M.__webglDepthbuffer,R,!1);else{const me=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,le)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function $t(R,M,W){const de=r.get(R);M!==void 0&&ye(de.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&pt(R)}function ft(R){const M=R.texture,W=r.get(R),de=r.get(M);R.addEventListener("dispose",O);const me=R.textures,le=R.isWebGLCubeRenderTarget===!0,qe=me.length>1;if(qe||(de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture()),de.__version=M.version,u.memory.textures++),le){W.__webglFramebuffer=[];for(let we=0;we<6;we++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[we]=[];for(let Be=0;Be<M.mipmaps.length;Be++)W.__webglFramebuffer[we][Be]=s.createFramebuffer()}else W.__webglFramebuffer[we]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let we=0;we<M.mipmaps.length;we++)W.__webglFramebuffer[we]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(qe)for(let we=0,Be=me.length;we<Be;we++){const nt=r.get(me[we]);nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture(),u.memory.textures++)}if(R.samples>0&&Vt(R)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let we=0;we<me.length;we++){const Be=me[we];W.__webglColorRenderbuffer[we]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[we]);const nt=c.convert(Be.format,Be.colorSpace),Se=c.convert(Be.type),be=N(Be.internalFormat,nt,Se,Be.colorSpace,R.isXRRenderTarget===!0),Ge=B(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ge,be,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,W.__webglColorRenderbuffer[we])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),ke(W.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(le){n.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),ae(s.TEXTURE_CUBE_MAP,M);for(let we=0;we<6;we++)if(M.mipmaps&&M.mipmaps.length>0)for(let Be=0;Be<M.mipmaps.length;Be++)ye(W.__webglFramebuffer[we][Be],R,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Be);else ye(W.__webglFramebuffer[we],R,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);S(M)&&x(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(qe){for(let we=0,Be=me.length;we<Be;we++){const nt=me[we],Se=r.get(nt);let be=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(be=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(be,Se.__webglTexture),ae(be,nt),ye(W.__webglFramebuffer,R,nt,s.COLOR_ATTACHMENT0+we,be,0),S(nt)&&x(be)}n.unbindTexture()}else{let we=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(we=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(we,de.__webglTexture),ae(we,M),M.mipmaps&&M.mipmaps.length>0)for(let Be=0;Be<M.mipmaps.length;Be++)ye(W.__webglFramebuffer[Be],R,M,s.COLOR_ATTACHMENT0,we,Be);else ye(W.__webglFramebuffer,R,M,s.COLOR_ATTACHMENT0,we,0);S(M)&&x(we),n.unbindTexture()}R.depthBuffer&&pt(R)}function xt(R){const M=R.textures;for(let W=0,de=M.length;W<de;W++){const me=M[W];if(S(me)){const le=L(R),qe=r.get(me).__webglTexture;n.bindTexture(le,qe),x(le),n.unbindTexture()}}}const Pt=[],lt=[];function zt(R){if(R.samples>0){if(Vt(R)===!1){const M=R.textures,W=R.width,de=R.height;let me=s.COLOR_BUFFER_BIT;const le=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,qe=r.get(R),we=M.length>1;if(we)for(let nt=0;nt<M.length;nt++)n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer);const Be=R.texture.mipmaps;Be&&Be.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let nt=0;nt<M.length;nt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),we){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,qe.__webglColorRenderbuffer[nt]);const Se=r.get(M[nt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Se,0)}s.blitFramebuffer(0,0,W,de,0,0,W,de,me,s.NEAREST),p===!0&&(Pt.length=0,lt.length=0,Pt.push(s.COLOR_ATTACHMENT0+nt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Pt.push(le),lt.push(le),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,lt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Pt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),we)for(let nt=0;nt<M.length;nt++){n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.RENDERBUFFER,qe.__webglColorRenderbuffer[nt]);const Se=r.get(M[nt]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.TEXTURE_2D,Se,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&p){const M=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function B(R){return Math.min(o.maxSamples,R.samples)}function Vt(R){const M=r.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function gt(R){const M=u.render.frame;g.get(R)!==M&&(g.set(R,M),R.update())}function St(R,M){const W=R.colorSpace,de=R.format,me=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||W!==qs&&W!==Cr&&(wt.getTransfer(W)===It?(de!==mi||me!==jn)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",W)),M}function We(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(h.width=R.naturalWidth||R.width,h.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(h.width=R.displayWidth,h.height=R.displayHeight):(h.width=R.width,h.height=R.height),h}this.allocateTextureUnit=J,this.resetTextureUnits=se,this.setTexture2D=ce,this.setTexture2DArray=oe,this.setTexture3D=K,this.setTextureCube=Y,this.rebindTextures=$t,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Vt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function kE(s,e){function n(r,o=Cr){let c;const u=wt.getTransfer(o);if(r===jn)return s.UNSIGNED_BYTE;if(r===gf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===_f)return s.UNSIGNED_SHORT_5_5_5_1;if(r===vg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===xg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===gg)return s.BYTE;if(r===_g)return s.SHORT;if(r===qa)return s.UNSIGNED_SHORT;if(r===mf)return s.INT;if(r===Pi)return s.UNSIGNED_INT;if(r===Ti)return s.FLOAT;if(r===Ji)return s.HALF_FLOAT;if(r===Sg)return s.ALPHA;if(r===yg)return s.RGB;if(r===mi)return s.RGBA;if(r===er)return s.DEPTH_COMPONENT;if(r===is)return s.DEPTH_STENCIL;if(r===Mg)return s.RED;if(r===vf)return s.RED_INTEGER;if(r===Ys)return s.RG;if(r===xf)return s.RG_INTEGER;if(r===Sf)return s.RGBA_INTEGER;if(r===Ol||r===kl||r===Bl||r===zl)if(u===It)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Ol)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===kl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Bl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===zl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Ol)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===kl)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Bl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===zl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ld||r===Dd||r===Nd||r===Id)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Ld)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Dd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Nd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Id)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ud||r===Fd||r===Od||r===kd||r===Bd||r===zd||r===Vd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Ud||r===Fd)return u===It?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Od)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===kd)return c.COMPRESSED_R11_EAC;if(r===Bd)return c.COMPRESSED_SIGNED_R11_EAC;if(r===zd)return c.COMPRESSED_RG11_EAC;if(r===Vd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Gd||r===Hd||r===Wd||r===Xd||r===jd||r===Yd||r===qd||r===$d||r===Kd||r===Zd||r===Qd||r===Jd||r===ef||r===tf)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Gd)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Hd)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Wd)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Xd)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===jd)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Yd)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===qd)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===$d)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Kd)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Zd)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Qd)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Jd)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ef)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===tf)return u===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===nf||r===rf||r===sf)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===nf)return u===It?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===rf)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===sf)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===af||r===of||r===lf||r===cf)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===af)return c.COMPRESSED_RED_RGTC1_EXT;if(r===of)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===lf)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===cf)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===$a?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const BE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zE=`
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

}`;class VE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new Og(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Di({vertexShader:BE,fragmentShader:zE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Dt(new ec(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class GE extends Ks{constructor(e,n){super();const r=this;let o=null,c=1,u=null,f="local-floor",p=1,h=null,g=null,_=null,v=null,y=null,w=null;const T=typeof XRWebGLBinding<"u",S=new VE,x={},L=n.getContextAttributes();let N=null,P=null;const I=[],F=[],O=new Rt;let q=null;const C=new hn;C.viewport=new qt;const b=new hn;b.viewport=new qt;const V=[C,b],se=new Zv;let J=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ue=I[te];return ue===void 0&&(ue=new od,I[te]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(te){let ue=I[te];return ue===void 0&&(ue=new od,I[te]=ue),ue.getGripSpace()},this.getHand=function(te){let ue=I[te];return ue===void 0&&(ue=new od,I[te]=ue),ue.getHandSpace()};function ce(te){const ue=F.indexOf(te.inputSource);if(ue===-1)return;const ye=I[ue];ye!==void 0&&(ye.update(te.inputSource,te.frame,h||u),ye.dispatchEvent({type:te.type,data:te.inputSource}))}function oe(){o.removeEventListener("select",ce),o.removeEventListener("selectstart",ce),o.removeEventListener("selectend",ce),o.removeEventListener("squeeze",ce),o.removeEventListener("squeezestart",ce),o.removeEventListener("squeezeend",ce),o.removeEventListener("end",oe),o.removeEventListener("inputsourceschange",K);for(let te=0;te<I.length;te++){const ue=F[te];ue!==null&&(F[te]=null,I[te].disconnect(ue))}J=null,fe=null,S.reset();for(const te in x)delete x[te];e.setRenderTarget(N),y=null,v=null,_=null,o=null,P=null,Ke.stop(),r.isPresenting=!1,e.setPixelRatio(q),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){c=te,r.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){f=te,r.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(te){h=te},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return _===null&&T&&(_=new XRWebGLBinding(o,n)),_},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function(te){if(o=te,o!==null){if(N=e.getRenderTarget(),o.addEventListener("select",ce),o.addEventListener("selectstart",ce),o.addEventListener("selectend",ce),o.addEventListener("squeeze",ce),o.addEventListener("squeezestart",ce),o.addEventListener("squeezeend",ce),o.addEventListener("end",oe),o.addEventListener("inputsourceschange",K),L.xrCompatible!==!0&&await n.makeXRCompatible(),q=e.getPixelRatio(),e.getSize(O),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,ke=null,Ie=null;L.depth&&(Ie=L.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ye=L.stencil?is:er,ke=L.stencil?$a:Pi);const pt={colorFormat:n.RGBA8,depthFormat:Ie,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(pt),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),P=new bi(v.textureWidth,v.textureHeight,{format:mi,type:jn,depthTexture:new Za(v.textureWidth,v.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const ye={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(o,n,ye),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),P=new bi(y.framebufferWidth,y.framebufferHeight,{format:mi,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),h=null,u=await o.requestReferenceSpace(f),Ke.setContext(o),Ke.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function K(te){for(let ue=0;ue<te.removed.length;ue++){const ye=te.removed[ue],ke=F.indexOf(ye);ke>=0&&(F[ke]=null,I[ke].disconnect(ye))}for(let ue=0;ue<te.added.length;ue++){const ye=te.added[ue];let ke=F.indexOf(ye);if(ke===-1){for(let pt=0;pt<I.length;pt++)if(pt>=F.length){F.push(ye),ke=pt;break}else if(F[pt]===null){F[pt]=ye,ke=pt;break}if(ke===-1)break}const Ie=I[ke];Ie&&Ie.connect(ye)}}const Y=new j,he=new j;function re(te,ue,ye){Y.setFromMatrixPosition(ue.matrixWorld),he.setFromMatrixPosition(ye.matrixWorld);const ke=Y.distanceTo(he),Ie=ue.projectionMatrix.elements,pt=ye.projectionMatrix.elements,$t=Ie[14]/(Ie[10]-1),ft=Ie[14]/(Ie[10]+1),xt=(Ie[9]+1)/Ie[5],Pt=(Ie[9]-1)/Ie[5],lt=(Ie[8]-1)/Ie[0],zt=(pt[8]+1)/pt[0],B=$t*lt,Vt=$t*zt,gt=ke/(-lt+zt),St=gt*-lt;if(ue.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(St),te.translateZ(gt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ie[10]===-1)te.projectionMatrix.copy(ue.projectionMatrix),te.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const We=$t+gt,R=ft+gt,M=B-St,W=Vt+(ke-St),de=xt*ft/R*We,me=Pt*ft/R*We;te.projectionMatrix.makePerspective(M,W,de,me,We,R),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function U(te,ue){ue===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ue.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(o===null)return;let ue=te.near,ye=te.far;S.texture!==null&&(S.depthNear>0&&(ue=S.depthNear),S.depthFar>0&&(ye=S.depthFar)),se.near=b.near=C.near=ue,se.far=b.far=C.far=ye,(J!==se.near||fe!==se.far)&&(o.updateRenderState({depthNear:se.near,depthFar:se.far}),J=se.near,fe=se.far),se.layers.mask=te.layers.mask|6,C.layers.mask=se.layers.mask&3,b.layers.mask=se.layers.mask&5;const ke=te.parent,Ie=se.cameras;U(se,ke);for(let pt=0;pt<Ie.length;pt++)U(Ie[pt],ke);Ie.length===2?re(se,C,b):se.projectionMatrix.copy(C.projectionMatrix),ae(te,se,ke)};function ae(te,ue,ye){ye===null?te.matrix.copy(ue.matrixWorld):(te.matrix.copy(ye.matrixWorld),te.matrix.invert(),te.matrix.multiply(ue.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ue.projectionMatrix),te.projectionMatrixInverse.copy(ue.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=uf*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return se},this.getFoveation=function(){if(!(v===null&&y===null))return p},this.setFoveation=function(te){p=te,v!==null&&(v.fixedFoveation=te),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=te)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(se)},this.getCameraTexture=function(te){return x[te]};let Re=null;function Ye(te,ue){if(g=ue.getViewerPose(h||u),w=ue,g!==null){const ye=g.views;y!==null&&(e.setRenderTargetFramebuffer(P,y.framebuffer),e.setRenderTarget(P));let ke=!1;ye.length!==se.cameras.length&&(se.cameras.length=0,ke=!0);for(let ft=0;ft<ye.length;ft++){const xt=ye[ft];let Pt=null;if(y!==null)Pt=y.getViewport(xt);else{const zt=_.getViewSubImage(v,xt);Pt=zt.viewport,ft===0&&(e.setRenderTargetTextures(P,zt.colorTexture,zt.depthStencilTexture),e.setRenderTarget(P))}let lt=V[ft];lt===void 0&&(lt=new hn,lt.layers.enable(ft),lt.viewport=new qt,V[ft]=lt),lt.matrix.fromArray(xt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(xt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),ft===0&&(se.matrix.copy(lt.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale)),ke===!0&&se.cameras.push(lt)}const Ie=o.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){_=r.getBinding();const ft=_.getDepthInformation(ye[0]);ft&&ft.isValid&&ft.texture&&S.init(ft,o.renderState)}if(Ie&&Ie.includes("camera-access")&&T){e.state.unbindTexture(),_=r.getBinding();for(let ft=0;ft<ye.length;ft++){const xt=ye[ft].camera;if(xt){let Pt=x[xt];Pt||(Pt=new Og,x[xt]=Pt);const lt=_.getCameraImage(xt);Pt.sourceTexture=lt}}}}for(let ye=0;ye<I.length;ye++){const ke=F[ye],Ie=I[ye];ke!==null&&Ie!==void 0&&Ie.update(ke,ue,h||u)}Re&&Re(te,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),w=null}const Ke=new Bg;Ke.setAnimationLoop(Ye),this.setAnimationLoop=function(te){Re=te},this.dispose=function(){}}}const Qr=new Li,HE=new jt;function WE(s,e){function n(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function r(S,x){x.color.getRGB(S.fogColor.value,Dg(s)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function o(S,x,L,N,P){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(S,x):x.isMeshToonMaterial?(c(S,x),_(S,x)):x.isMeshPhongMaterial?(c(S,x),g(S,x)):x.isMeshStandardMaterial?(c(S,x),v(S,x),x.isMeshPhysicalMaterial&&y(S,x,P)):x.isMeshMatcapMaterial?(c(S,x),w(S,x)):x.isMeshDepthMaterial?c(S,x):x.isMeshDistanceMaterial?(c(S,x),T(S,x)):x.isMeshNormalMaterial?c(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&f(S,x)):x.isPointsMaterial?p(S,x,L,N):x.isSpriteMaterial?h(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,n(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===kn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,n(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===kn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,n(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,n(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const L=e.get(x),N=L.envMap,P=L.envMapRotation;N&&(S.envMap.value=N,Qr.copy(P),Qr.x*=-1,Qr.y*=-1,Qr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Qr.y*=-1,Qr.z*=-1),S.envMapRotation.value.setFromMatrix4(HE.makeRotationFromEuler(Qr)),S.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform))}function f(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function p(S,x,L,N){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*L,S.scale.value=N*.5,x.map&&(S.map.value=x.map,n(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function _(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,L){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===kn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,S.specularIntensityMapTransform))}function w(S,x){x.matcap&&(S.matcap.value=x.matcap)}function T(S,x){const L=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function XE(s,e,n,r){let o={},c={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(L,N){const P=N.program;r.uniformBlockBinding(L,P)}function h(L,N){let P=o[L.id];P===void 0&&(w(L),P=g(L),o[L.id]=P,L.addEventListener("dispose",S));const I=N.program;r.updateUBOMapping(L,I);const F=e.render.frame;c[L.id]!==F&&(v(L),c[L.id]=F)}function g(L){const N=_();L.__bindingPointIndex=N;const P=s.createBuffer(),I=L.__size,F=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,I,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,P),P}function _(){for(let L=0;L<f;L++)if(u.indexOf(L)===-1)return u.push(L),L;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(L){const N=o[L.id],P=L.uniforms,I=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let F=0,O=P.length;F<O;F++){const q=Array.isArray(P[F])?P[F]:[P[F]];for(let C=0,b=q.length;C<b;C++){const V=q[C];if(y(V,F,C,I)===!0){const se=V.__offset,J=Array.isArray(V.value)?V.value:[V.value];let fe=0;for(let ce=0;ce<J.length;ce++){const oe=J[ce],K=T(oe);typeof oe=="number"||typeof oe=="boolean"?(V.__data[0]=oe,s.bufferSubData(s.UNIFORM_BUFFER,se+fe,V.__data)):oe.isMatrix3?(V.__data[0]=oe.elements[0],V.__data[1]=oe.elements[1],V.__data[2]=oe.elements[2],V.__data[3]=0,V.__data[4]=oe.elements[3],V.__data[5]=oe.elements[4],V.__data[6]=oe.elements[5],V.__data[7]=0,V.__data[8]=oe.elements[6],V.__data[9]=oe.elements[7],V.__data[10]=oe.elements[8],V.__data[11]=0):(oe.toArray(V.__data,fe),fe+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,se,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(L,N,P,I){const F=L.value,O=N+"_"+P;if(I[O]===void 0)return typeof F=="number"||typeof F=="boolean"?I[O]=F:I[O]=F.clone(),!0;{const q=I[O];if(typeof F=="number"||typeof F=="boolean"){if(q!==F)return I[O]=F,!0}else if(q.equals(F)===!1)return q.copy(F),!0}return!1}function w(L){const N=L.uniforms;let P=0;const I=16;for(let O=0,q=N.length;O<q;O++){const C=Array.isArray(N[O])?N[O]:[N[O]];for(let b=0,V=C.length;b<V;b++){const se=C[b],J=Array.isArray(se.value)?se.value:[se.value];for(let fe=0,ce=J.length;fe<ce;fe++){const oe=J[fe],K=T(oe),Y=P%I,he=Y%K.boundary,re=Y+he;P+=he,re!==0&&I-re<K.storage&&(P+=I-re),se.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=P,P+=K.storage}}}const F=P%I;return F>0&&(P+=I-F),L.__size=P,L.__cache={},this}function T(L){const N={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(N.boundary=4,N.storage=4):L.isVector2?(N.boundary=8,N.storage=8):L.isVector3||L.isColor?(N.boundary=16,N.storage=12):L.isVector4?(N.boundary=16,N.storage=16):L.isMatrix3?(N.boundary=48,N.storage=48):L.isMatrix4?(N.boundary=64,N.storage=64):L.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):st("WebGLRenderer: Unsupported uniform value type.",L),N}function S(L){const N=L.target;N.removeEventListener("dispose",S);const P=u.indexOf(N.__bindingPointIndex);u.splice(P,1),s.deleteBuffer(o[N.id]),delete o[N.id],delete c[N.id]}function x(){for(const L in o)s.deleteBuffer(o[L]);u=[],o={},c={}}return{bind:p,update:h,dispose:x}}const jE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ei=null;function YE(){return Ei===null&&(Ei=new Ov(jE,16,16,Ys,Ji),Ei.name="DFG_LUT",Ei.minFilter=En,Ei.magFilter=En,Ei.wrapS=$i,Ei.wrapT=$i,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei}class qE{constructor(e={}){const{canvas:n=dv(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:y=jn}=e;this.isWebGLRenderer=!0;let w;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=r.getContextAttributes().alpha}else w=u;const T=y,S=new Set([Sf,xf,vf]),x=new Set([jn,Pi,qa,$a,gf,_f]),L=new Uint32Array(4),N=new Int32Array(4);let P=null,I=null;const F=[],O=[];let q=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let b=!1;this._outputColorSpace=ti;let V=0,se=0,J=null,fe=-1,ce=null;const oe=new qt,K=new qt;let Y=null;const he=new mt(0);let re=0,U=n.width,ae=n.height,Re=1,Ye=null,Ke=null;const te=new qt(0,0,U,ae),ue=new qt(0,0,U,ae);let ye=!1;const ke=new wf;let Ie=!1,pt=!1;const $t=new jt,ft=new j,xt=new qt,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function zt(){return J===null?Re:1}let B=r;function Vt(A,X){return n.getContext(A,X)}try{const A={alpha:!0,depth:o,stencil:c,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${pf}`),n.addEventListener("webglcontextlost",it,!1),n.addEventListener("webglcontextrestored",Nt,!1),n.addEventListener("webglcontextcreationerror",yt,!1),B===null){const X="webgl2";if(B=Vt(X,A),B===null)throw Vt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Ct("WebGLRenderer: "+A.message),A}let gt,St,We,R,M,W,de,me,le,qe,we,Be,nt,Se,be,Ge,Xe,Ae,ot,G,Le,Me,De,ve;function pe(){gt=new Yy(B),gt.init(),Me=new kE(B,gt),St=new ky(B,gt,e,Me),We=new FE(B,gt),St.reversedDepthBuffer&&v&&We.buffers.depth.setReversed(!0),R=new Ky(B),M=new yE,W=new OE(B,gt,We,M,St,Me,R),de=new zy(C),me=new jy(C),le=new ex(B),De=new Fy(B,le),qe=new qy(B,le,R,De),we=new Qy(B,qe,le,R),ot=new Zy(B,St,W),Ge=new By(M),Be=new SE(C,de,me,gt,St,De,Ge),nt=new WE(C,M),Se=new EE,be=new RE(gt),Ae=new Uy(C,de,me,We,we,w,p),Xe=new IE(C,we,St),ve=new XE(B,R,St,We),G=new Oy(B,gt,R),Le=new $y(B,gt,R),R.programs=Be.programs,C.capabilities=St,C.extensions=gt,C.properties=M,C.renderLists=Se,C.shadowMap=Xe,C.state=We,C.info=R}pe(),T!==jn&&(q=new eM(T,n.width,n.height,o,c));const Ce=new GE(C,B);this.xr=Ce,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=gt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=gt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Re},this.setPixelRatio=function(A){A!==void 0&&(Re=A,this.setSize(U,ae,!1))},this.getSize=function(A){return A.set(U,ae)},this.setSize=function(A,X,ie=!0){if(Ce.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}U=A,ae=X,n.width=Math.floor(A*Re),n.height=Math.floor(X*Re),ie===!0&&(n.style.width=A+"px",n.style.height=X+"px"),q!==null&&q.setSize(n.width,n.height),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(U*Re,ae*Re).floor()},this.setDrawingBufferSize=function(A,X,ie){U=A,ae=X,Re=ie,n.width=Math.floor(A*ie),n.height=Math.floor(X*ie),this.setViewport(0,0,A,X)},this.setEffects=function(A){if(T===jn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let X=0;X<A.length;X++)if(A[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}q.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(oe)},this.getViewport=function(A){return A.copy(te)},this.setViewport=function(A,X,ie,ee){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,X,ie,ee),We.viewport(oe.copy(te).multiplyScalar(Re).round())},this.getScissor=function(A){return A.copy(ue)},this.setScissor=function(A,X,ie,ee){A.isVector4?ue.set(A.x,A.y,A.z,A.w):ue.set(A,X,ie,ee),We.scissor(K.copy(ue).multiplyScalar(Re).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(A){We.setScissorTest(ye=A)},this.setOpaqueSort=function(A){Ye=A},this.setTransparentSort=function(A){Ke=A},this.getClearColor=function(A){return A.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,ie=!0){let ee=0;if(A){let Z=!1;if(J!==null){const Pe=J.texture.format;Z=S.has(Pe)}if(Z){const Pe=J.texture.type,Ue=x.has(Pe),Te=Ae.getClearColor(),Ve=Ae.getClearAlpha(),Oe=Te.r,tt=Te.g,Ze=Te.b;Ue?(L[0]=Oe,L[1]=tt,L[2]=Ze,L[3]=Ve,B.clearBufferuiv(B.COLOR,0,L)):(N[0]=Oe,N[1]=tt,N[2]=Ze,N[3]=Ve,B.clearBufferiv(B.COLOR,0,N))}else ee|=B.COLOR_BUFFER_BIT}X&&(ee|=B.DEPTH_BUFFER_BIT),ie&&(ee|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",it,!1),n.removeEventListener("webglcontextrestored",Nt,!1),n.removeEventListener("webglcontextcreationerror",yt,!1),Ae.dispose(),Se.dispose(),be.dispose(),M.dispose(),de.dispose(),me.dispose(),we.dispose(),De.dispose(),ve.dispose(),Be.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Lr),Ce.removeEventListener("sessionend",Dr),si.stop()};function it(A){A.preventDefault(),cm("WebGLRenderer: Context Lost."),b=!0}function Nt(){cm("WebGLRenderer: Context Restored."),b=!1;const A=R.autoReset,X=Xe.enabled,ie=Xe.autoUpdate,ee=Xe.needsUpdate,Z=Xe.type;pe(),R.autoReset=A,Xe.enabled=X,Xe.autoUpdate=ie,Xe.needsUpdate=ee,Xe.type=Z}function yt(A){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Bn(A){const X=A.target;X.removeEventListener("dispose",Bn),Tn(X)}function Tn(A){Js(A),M.remove(A)}function Js(A){const X=M.get(A).programs;X!==void 0&&(X.forEach(function(ie){Be.releaseProgram(ie)}),A.isShaderMaterial&&Be.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,ie,ee,Z,Pe){X===null&&(X=Pt);const Ue=Z.isMesh&&Z.matrixWorld.determinant()<0,Te=ao(A,X,ie,ee,Z);We.setMaterial(ee,Ue);let Ve=ie.index,Oe=1;if(ee.wireframe===!0){if(Ve=qe.getWireframeAttribute(ie),Ve===void 0)return;Oe=2}const tt=ie.drawRange,Ze=ie.attributes.position;let ut=tt.start*Oe,Mt=(tt.start+tt.count)*Oe;Pe!==null&&(ut=Math.max(ut,Pe.start*Oe),Mt=Math.min(Mt,(Pe.start+Pe.count)*Oe)),Ve!==null?(ut=Math.max(ut,0),Mt=Math.min(Mt,Ve.count)):Ze!=null&&(ut=Math.max(ut,0),Mt=Math.min(Mt,Ze.count));const Ft=Mt-ut;if(Ft<0||Ft===1/0)return;De.setup(Z,ee,Te,ie,Ve);let Ut,Tt=G;if(Ve!==null&&(Ut=le.get(Ve),Tt=Le,Tt.setIndex(Ut)),Z.isMesh)ee.wireframe===!0?(We.setLineWidth(ee.wireframeLinewidth*zt()),Tt.setMode(B.LINES)):Tt.setMode(B.TRIANGLES);else if(Z.isLine){let Qe=ee.linewidth;Qe===void 0&&(Qe=1),We.setLineWidth(Qe*zt()),Z.isLineSegments?Tt.setMode(B.LINES):Z.isLineLoop?Tt.setMode(B.LINE_LOOP):Tt.setMode(B.LINE_STRIP)}else Z.isPoints?Tt.setMode(B.POINTS):Z.isSprite&&Tt.setMode(B.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Ka("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Tt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))Tt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Qe=Z._multiDrawStarts,bt=Z._multiDrawCounts,_t=Z._multiDrawCount,gn=Ve?le.get(Ve).bytesPerElement:1,_i=M.get(ee).currentProgram.getUniforms();for(let Jt=0;Jt<_t;Jt++)_i.setValue(B,"_gl_DrawID",Jt),Tt.render(Qe[Jt]/gn,bt[Jt])}else if(Z.isInstancedMesh)Tt.renderInstances(ut,Ft,Z.count);else if(ie.isInstancedBufferGeometry){const Qe=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,bt=Math.min(ie.instanceCount,Qe);Tt.renderInstances(ut,Ft,bt)}else Tt.render(ut,Ft)};function tr(A,X,ie){A.transparent===!0&&A.side===Yi&&A.forceSinglePass===!1?(A.side=kn,A.needsUpdate=!0,Nr(A,X,ie),A.side=Rr,A.needsUpdate=!0,Nr(A,X,ie),A.side=Yi):Nr(A,X,ie)}this.compile=function(A,X,ie=null){ie===null&&(ie=A),I=be.get(ie),I.init(X),O.push(I),ie.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(I.pushLight(Z),Z.castShadow&&I.pushShadow(Z))}),A!==ie&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(I.pushLight(Z),Z.castShadow&&I.pushShadow(Z))}),I.setupLights();const ee=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Pe=Z.material;if(Pe)if(Array.isArray(Pe))for(let Ue=0;Ue<Pe.length;Ue++){const Te=Pe[Ue];tr(Te,ie,Z),ee.add(Te)}else tr(Pe,ie,Z),ee.add(Pe)}),I=O.pop(),ee},this.compileAsync=function(A,X,ie=null){const ee=this.compile(A,X,ie);return new Promise(Z=>{function Pe(){if(ee.forEach(function(Ue){M.get(Ue).currentProgram.isReady()&&ee.delete(Ue)}),ee.size===0){Z(A);return}setTimeout(Pe,10)}gt.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let ea=null;function Pr(A){ea&&ea(A)}function Lr(){si.stop()}function Dr(){si.start()}const si=new Bg;si.setAnimationLoop(Pr),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(A){ea=A,Ce.setAnimationLoop(A),A===null?si.stop():si.start()},Ce.addEventListener("sessionstart",Lr),Ce.addEventListener("sessionend",Dr),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;const ie=Ce.enabled===!0&&Ce.isPresenting===!0,ee=q!==null&&(J===null||ie)&&q.begin(C,J);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(q===null||q.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(X),X=Ce.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,X,J),I=be.get(A,O.length),I.init(X),O.push(I),$t.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ke.setFromProjectionMatrix($t,Ai,X.reversedDepth),pt=this.localClippingEnabled,Ie=Ge.init(this.clippingPlanes,pt),P=Se.get(A,F.length),P.init(),F.push(P),Ce.enabled===!0&&Ce.isPresenting===!0){const Ue=C.xr.getDepthSensingMesh();Ue!==null&&ta(Ue,X,-1/0,C.sortObjects)}ta(A,X,0,C.sortObjects),P.finish(),C.sortObjects===!0&&P.sort(Ye,Ke),lt=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,lt&&Ae.addToRenderList(P,A),this.info.render.frame++,Ie===!0&&Ge.beginShadows();const Z=I.state.shadowsArray;if(Xe.render(Z,A,X),Ie===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ee&&q.hasRenderPass())===!1){const Ue=P.opaque,Te=P.transmissive;if(I.setupLights(),X.isArrayCamera){const Ve=X.cameras;if(Te.length>0)for(let Oe=0,tt=Ve.length;Oe<tt;Oe++){const Ze=Ve[Oe];ro(Ue,Te,A,Ze)}lt&&Ae.render(A);for(let Oe=0,tt=Ve.length;Oe<tt;Oe++){const Ze=Ve[Oe];io(P,A,Ze,Ze.viewport)}}else Te.length>0&&ro(Ue,Te,A,X),lt&&Ae.render(A),io(P,A,X)}J!==null&&se===0&&(W.updateMultisampleRenderTarget(J),W.updateRenderTargetMipmap(J)),ee&&q.end(C),A.isScene===!0&&A.onAfterRender(C,A,X),De.resetDefaultState(),fe=-1,ce=null,O.pop(),O.length>0?(I=O[O.length-1],Ie===!0&&Ge.setGlobalState(C.clippingPlanes,I.state.camera)):I=null,F.pop(),F.length>0?P=F[F.length-1]:P=null};function ta(A,X,ie,ee){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)ie=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)I.pushLight(A),A.castShadow&&I.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ke.intersectsSprite(A)){ee&&xt.setFromMatrixPosition(A.matrixWorld).applyMatrix4($t);const Ue=we.update(A),Te=A.material;Te.visible&&P.push(A,Ue,Te,ie,xt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ke.intersectsObject(A))){const Ue=we.update(A),Te=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),xt.copy(A.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),xt.copy(Ue.boundingSphere.center)),xt.applyMatrix4(A.matrixWorld).applyMatrix4($t)),Array.isArray(Te)){const Ve=Ue.groups;for(let Oe=0,tt=Ve.length;Oe<tt;Oe++){const Ze=Ve[Oe],ut=Te[Ze.materialIndex];ut&&ut.visible&&P.push(A,Ue,ut,ie,xt.z,Ze)}}else Te.visible&&P.push(A,Ue,Te,ie,xt.z,null)}}const Pe=A.children;for(let Ue=0,Te=Pe.length;Ue<Te;Ue++)ta(Pe[Ue],X,ie,ee)}function io(A,X,ie,ee){const{opaque:Z,transmissive:Pe,transparent:Ue}=A;I.setupLightsView(ie),Ie===!0&&Ge.setGlobalState(C.clippingPlanes,ie),ee&&We.viewport(oe.copy(ee)),Z.length>0&&Yn(Z,X,ie),Pe.length>0&&Yn(Pe,X,ie),Ue.length>0&&Yn(Ue,X,ie),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function ro(A,X,ie,ee){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[ee.id]===void 0){const ut=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[ee.id]=new bi(1,1,{generateMipmaps:!0,type:ut?Ji:jn,minFilter:ns,samples:St.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace})}const Pe=I.state.transmissionRenderTarget[ee.id],Ue=ee.viewport||oe;Pe.setSize(Ue.z*C.transmissionResolutionScale,Ue.w*C.transmissionResolutionScale);const Te=C.getRenderTarget(),Ve=C.getActiveCubeFace(),Oe=C.getActiveMipmapLevel();C.setRenderTarget(Pe),C.getClearColor(he),re=C.getClearAlpha(),re<1&&C.setClearColor(16777215,.5),C.clear(),lt&&Ae.render(ie);const tt=C.toneMapping;C.toneMapping=Ci;const Ze=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),I.setupLightsView(ee),Ie===!0&&Ge.setGlobalState(C.clippingPlanes,ee),Yn(A,ie,ee),W.updateMultisampleRenderTarget(Pe),W.updateRenderTargetMipmap(Pe),gt.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let Mt=0,Ft=X.length;Mt<Ft;Mt++){const Ut=X[Mt],{object:Tt,geometry:Qe,material:bt,group:_t}=Ut;if(bt.side===Yi&&Tt.layers.test(ee.layers)){const gn=bt.side;bt.side=kn,bt.needsUpdate=!0,na(Tt,ie,ee,Qe,bt,_t),bt.side=gn,bt.needsUpdate=!0,ut=!0}}ut===!0&&(W.updateMultisampleRenderTarget(Pe),W.updateRenderTargetMipmap(Pe))}C.setRenderTarget(Te,Ve,Oe),C.setClearColor(he,re),Ze!==void 0&&(ee.viewport=Ze),C.toneMapping=tt}function Yn(A,X,ie){const ee=X.isScene===!0?X.overrideMaterial:null;for(let Z=0,Pe=A.length;Z<Pe;Z++){const Ue=A[Z],{object:Te,geometry:Ve,group:Oe}=Ue;let tt=Ue.material;tt.allowOverride===!0&&ee!==null&&(tt=ee),Te.layers.test(ie.layers)&&na(Te,X,ie,Ve,tt,Oe)}}function na(A,X,ie,ee,Z,Pe){A.onBeforeRender(C,X,ie,ee,Z,Pe),A.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(C,X,ie,ee,A,Pe),Z.transparent===!0&&Z.side===Yi&&Z.forceSinglePass===!1?(Z.side=kn,Z.needsUpdate=!0,C.renderBufferDirect(ie,X,ee,Z,A,Pe),Z.side=Rr,Z.needsUpdate=!0,C.renderBufferDirect(ie,X,ee,Z,A,Pe),Z.side=Yi):C.renderBufferDirect(ie,X,ee,Z,A,Pe),A.onAfterRender(C,X,ie,ee,Z,Pe)}function Nr(A,X,ie){X.isScene!==!0&&(X=Pt);const ee=M.get(A),Z=I.state.lights,Pe=I.state.shadowsArray,Ue=Z.state.version,Te=Be.getParameters(A,Z.state,Pe,X,ie),Ve=Be.getProgramCacheKey(Te);let Oe=ee.programs;ee.environment=A.isMeshStandardMaterial?X.environment:null,ee.fog=X.fog,ee.envMap=(A.isMeshStandardMaterial?me:de).get(A.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,Oe===void 0&&(A.addEventListener("dispose",Bn),Oe=new Map,ee.programs=Oe);let tt=Oe.get(Ve);if(tt!==void 0){if(ee.currentProgram===tt&&ee.lightsStateVersion===Ue)return ia(A,Te),tt}else Te.uniforms=Be.getUniforms(A),A.onBeforeCompile(Te,C),tt=Be.acquireProgram(Te,Ve),Oe.set(Ve,tt),ee.uniforms=Te.uniforms;const Ze=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ze.clippingPlanes=Ge.uniform),ia(A,Te),ee.needsLights=lo(A),ee.lightsStateVersion=Ue,ee.needsLights&&(Ze.ambientLightColor.value=Z.state.ambient,Ze.lightProbe.value=Z.state.probe,Ze.directionalLights.value=Z.state.directional,Ze.directionalLightShadows.value=Z.state.directionalShadow,Ze.spotLights.value=Z.state.spot,Ze.spotLightShadows.value=Z.state.spotShadow,Ze.rectAreaLights.value=Z.state.rectArea,Ze.ltc_1.value=Z.state.rectAreaLTC1,Ze.ltc_2.value=Z.state.rectAreaLTC2,Ze.pointLights.value=Z.state.point,Ze.pointLightShadows.value=Z.state.pointShadow,Ze.hemisphereLights.value=Z.state.hemi,Ze.directionalShadowMap.value=Z.state.directionalShadowMap,Ze.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ze.spotShadowMap.value=Z.state.spotShadowMap,Ze.spotLightMatrix.value=Z.state.spotLightMatrix,Ze.spotLightMap.value=Z.state.spotLightMap,Ze.pointShadowMap.value=Z.state.pointShadowMap,Ze.pointShadowMatrix.value=Z.state.pointShadowMatrix),ee.currentProgram=tt,ee.uniformsList=null,tt}function so(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=Gl.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function ia(A,X){const ie=M.get(A);ie.outputColorSpace=X.outputColorSpace,ie.batching=X.batching,ie.batchingColor=X.batchingColor,ie.instancing=X.instancing,ie.instancingColor=X.instancingColor,ie.instancingMorph=X.instancingMorph,ie.skinning=X.skinning,ie.morphTargets=X.morphTargets,ie.morphNormals=X.morphNormals,ie.morphColors=X.morphColors,ie.morphTargetsCount=X.morphTargetsCount,ie.numClippingPlanes=X.numClippingPlanes,ie.numIntersection=X.numClipIntersection,ie.vertexAlphas=X.vertexAlphas,ie.vertexTangents=X.vertexTangents,ie.toneMapping=X.toneMapping}function ao(A,X,ie,ee,Z){X.isScene!==!0&&(X=Pt),W.resetTextureUnits();const Pe=X.fog,Ue=ee.isMeshStandardMaterial?X.environment:null,Te=J===null?C.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:qs,Ve=(ee.isMeshStandardMaterial?me:de).get(ee.envMap||Ue),Oe=ee.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,tt=!!ie.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Ze=!!ie.morphAttributes.position,ut=!!ie.morphAttributes.normal,Mt=!!ie.morphAttributes.color;let Ft=Ci;ee.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ft=C.toneMapping);const Ut=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Tt=Ut!==void 0?Ut.length:0,Qe=M.get(ee),bt=I.state.lights;if(Ie===!0&&(pt===!0||A!==ce)){const sn=A===ce&&ee.id===fe;Ge.setState(ee,A,sn)}let _t=!1;ee.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==bt.state.version||Qe.outputColorSpace!==Te||Z.isBatchedMesh&&Qe.batching===!1||!Z.isBatchedMesh&&Qe.batching===!0||Z.isBatchedMesh&&Qe.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Qe.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Qe.instancing===!1||!Z.isInstancedMesh&&Qe.instancing===!0||Z.isSkinnedMesh&&Qe.skinning===!1||!Z.isSkinnedMesh&&Qe.skinning===!0||Z.isInstancedMesh&&Qe.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Qe.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Qe.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Qe.instancingMorph===!1&&Z.morphTexture!==null||Qe.envMap!==Ve||ee.fog===!0&&Qe.fog!==Pe||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Ge.numPlanes||Qe.numIntersection!==Ge.numIntersection)||Qe.vertexAlphas!==Oe||Qe.vertexTangents!==tt||Qe.morphTargets!==Ze||Qe.morphNormals!==ut||Qe.morphColors!==Mt||Qe.toneMapping!==Ft||Qe.morphTargetsCount!==Tt)&&(_t=!0):(_t=!0,Qe.__version=ee.version);let gn=Qe.currentProgram;_t===!0&&(gn=Nr(ee,X,Z));let _i=!1,Jt=!1,Ir=!1;const Lt=gn.getUniforms(),at=Qe.uniforms;if(We.useProgram(gn.program)&&(_i=!0,Jt=!0,Ir=!0),ee.id!==fe&&(fe=ee.id,Jt=!0),_i||ce!==A){We.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Lt.setValue(B,"projectionMatrix",A.projectionMatrix),Lt.setValue(B,"viewMatrix",A.matrixWorldInverse);const an=Lt.map.cameraPosition;an!==void 0&&an.setValue(B,ft.setFromMatrixPosition(A.matrixWorld)),St.logarithmicDepthBuffer&&Lt.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Lt.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),ce!==A&&(ce=A,Jt=!0,Ir=!0)}if(Qe.needsLights&&(bt.state.directionalShadowMap.length>0&&Lt.setValue(B,"directionalShadowMap",bt.state.directionalShadowMap,W),bt.state.spotShadowMap.length>0&&Lt.setValue(B,"spotShadowMap",bt.state.spotShadowMap,W),bt.state.pointShadowMap.length>0&&Lt.setValue(B,"pointShadowMap",bt.state.pointShadowMap,W)),Z.isSkinnedMesh){Lt.setOptional(B,Z,"bindMatrix"),Lt.setOptional(B,Z,"bindMatrixInverse");const sn=Z.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Lt.setValue(B,"boneTexture",sn.boneTexture,W))}Z.isBatchedMesh&&(Lt.setOptional(B,Z,"batchingTexture"),Lt.setValue(B,"batchingTexture",Z._matricesTexture,W),Lt.setOptional(B,Z,"batchingIdTexture"),Lt.setValue(B,"batchingIdTexture",Z._indirectTexture,W),Lt.setOptional(B,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Lt.setValue(B,"batchingColorTexture",Z._colorsTexture,W));const An=ie.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&ot.update(Z,ie,gn),(Jt||Qe.receiveShadow!==Z.receiveShadow)&&(Qe.receiveShadow=Z.receiveShadow,Lt.setValue(B,"receiveShadow",Z.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(at.envMap.value=Ve,at.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&X.environment!==null&&(at.envMapIntensity.value=X.environmentIntensity),at.dfgLUT!==void 0&&(at.dfgLUT.value=YE()),Jt&&(Lt.setValue(B,"toneMappingExposure",C.toneMappingExposure),Qe.needsLights&&oo(at,Ir),Pe&&ee.fog===!0&&nt.refreshFogUniforms(at,Pe),nt.refreshMaterialUniforms(at,ee,Re,ae,I.state.transmissionRenderTarget[A.id]),Gl.upload(B,so(Qe),at,W)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Gl.upload(B,so(Qe),at,W),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Lt.setValue(B,"center",Z.center),Lt.setValue(B,"modelViewMatrix",Z.modelViewMatrix),Lt.setValue(B,"normalMatrix",Z.normalMatrix),Lt.setValue(B,"modelMatrix",Z.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const sn=ee.uniformsGroups;for(let an=0,ss=sn.length;an<ss;an++){const vi=sn[an];ve.update(vi,gn),ve.bind(vi,gn)}}return gn}function oo(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function lo(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(A,X,ie){const ee=M.get(A);ee.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),M.get(A.texture).__webglTexture=X,M.get(A.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:ie,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const ie=M.get(A);ie.__webglFramebuffer=X,ie.__useDefaultFramebuffer=X===void 0};const ic=B.createFramebuffer();this.setRenderTarget=function(A,X=0,ie=0){J=A,V=X,se=ie;let ee=null,Z=!1,Pe=!1;if(A){const Te=M.get(A);if(Te.__useDefaultFramebuffer!==void 0){We.bindFramebuffer(B.FRAMEBUFFER,Te.__webglFramebuffer),oe.copy(A.viewport),K.copy(A.scissor),Y=A.scissorTest,We.viewport(oe),We.scissor(K),We.setScissorTest(Y),fe=-1;return}else if(Te.__webglFramebuffer===void 0)W.setupRenderTarget(A);else if(Te.__hasExternalTextures)W.rebindTextures(A,M.get(A.texture).__webglTexture,M.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const tt=A.depthTexture;if(Te.__boundDepthTexture!==tt){if(tt!==null&&M.has(tt)&&(A.width!==tt.image.width||A.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(A)}}const Ve=A.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Pe=!0);const Oe=M.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Oe[X])?ee=Oe[X][ie]:ee=Oe[X],Z=!0):A.samples>0&&W.useMultisampledRTT(A)===!1?ee=M.get(A).__webglMultisampledFramebuffer:Array.isArray(Oe)?ee=Oe[ie]:ee=Oe,oe.copy(A.viewport),K.copy(A.scissor),Y=A.scissorTest}else oe.copy(te).multiplyScalar(Re).floor(),K.copy(ue).multiplyScalar(Re).floor(),Y=ye;if(ie!==0&&(ee=ic),We.bindFramebuffer(B.FRAMEBUFFER,ee)&&We.drawBuffers(A,ee),We.viewport(oe),We.scissor(K),We.setScissorTest(Y),Z){const Te=M.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+X,Te.__webglTexture,ie)}else if(Pe){const Te=X;for(let Ve=0;Ve<A.textures.length;Ve++){const Oe=M.get(A.textures[Ve]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ve,Oe.__webglTexture,ie,Te)}}else if(A!==null&&ie!==0){const Te=M.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Te.__webglTexture,ie)}fe=-1},this.readRenderTargetPixels=function(A,X,ie,ee,Z,Pe,Ue,Te=0){if(!(A&&A.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ve=Ve[Ue]),Ve){We.bindFramebuffer(B.FRAMEBUFFER,Ve);try{const Oe=A.textures[Te],tt=Oe.format,Ze=Oe.type;if(!St.textureFormatReadable(tt)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(Ze)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-ee&&ie>=0&&ie<=A.height-Z&&(A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Te),B.readPixels(X,ie,ee,Z,Me.convert(tt),Me.convert(Ze),Pe))}finally{const Oe=J!==null?M.get(J).__webglFramebuffer:null;We.bindFramebuffer(B.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(A,X,ie,ee,Z,Pe,Ue,Te=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ve=Ve[Ue]),Ve)if(X>=0&&X<=A.width-ee&&ie>=0&&ie<=A.height-Z){We.bindFramebuffer(B.FRAMEBUFFER,Ve);const Oe=A.textures[Te],tt=Oe.format,Ze=Oe.type;if(!St.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ut),B.bufferData(B.PIXEL_PACK_BUFFER,Pe.byteLength,B.STREAM_READ),A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Te),B.readPixels(X,ie,ee,Z,Me.convert(tt),Me.convert(Ze),0);const Mt=J!==null?M.get(J).__webglFramebuffer:null;We.bindFramebuffer(B.FRAMEBUFFER,Mt);const Ft=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await fv(B,Ft,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ut),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Pe),B.deleteBuffer(ut),B.deleteSync(Ft),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,ie=0){const ee=Math.pow(2,-ie),Z=Math.floor(A.image.width*ee),Pe=Math.floor(A.image.height*ee),Ue=X!==null?X.x:0,Te=X!==null?X.y:0;W.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,ie,0,0,Ue,Te,Z,Pe),We.unbindTexture()};const rc=B.createFramebuffer(),Ht=B.createFramebuffer();this.copyTextureToTexture=function(A,X,ie=null,ee=null,Z=0,Pe=null){Pe===null&&(Z!==0?(Ka("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Pe=Z,Z=0):Pe=0);let Ue,Te,Ve,Oe,tt,Ze,ut,Mt,Ft;const Ut=A.isCompressedTexture?A.mipmaps[Pe]:A.image;if(ie!==null)Ue=ie.max.x-ie.min.x,Te=ie.max.y-ie.min.y,Ve=ie.isBox3?ie.max.z-ie.min.z:1,Oe=ie.min.x,tt=ie.min.y,Ze=ie.isBox3?ie.min.z:0;else{const An=Math.pow(2,-Z);Ue=Math.floor(Ut.width*An),Te=Math.floor(Ut.height*An),A.isDataArrayTexture?Ve=Ut.depth:A.isData3DTexture?Ve=Math.floor(Ut.depth*An):Ve=1,Oe=0,tt=0,Ze=0}ee!==null?(ut=ee.x,Mt=ee.y,Ft=ee.z):(ut=0,Mt=0,Ft=0);const Tt=Me.convert(X.format),Qe=Me.convert(X.type);let bt;X.isData3DTexture?(W.setTexture3D(X,0),bt=B.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(W.setTexture2DArray(X,0),bt=B.TEXTURE_2D_ARRAY):(W.setTexture2D(X,0),bt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);const _t=B.getParameter(B.UNPACK_ROW_LENGTH),gn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),_i=B.getParameter(B.UNPACK_SKIP_PIXELS),Jt=B.getParameter(B.UNPACK_SKIP_ROWS),Ir=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ut.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ut.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Oe),B.pixelStorei(B.UNPACK_SKIP_ROWS,tt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ze);const Lt=A.isDataArrayTexture||A.isData3DTexture,at=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const An=M.get(A),sn=M.get(X),an=M.get(An.__renderTarget),ss=M.get(sn.__renderTarget);We.bindFramebuffer(B.READ_FRAMEBUFFER,an.__webglFramebuffer),We.bindFramebuffer(B.DRAW_FRAMEBUFFER,ss.__webglFramebuffer);for(let vi=0;vi<Ve;vi++)Lt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,M.get(A).__webglTexture,Z,Ze+vi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,M.get(X).__webglTexture,Pe,Ft+vi)),B.blitFramebuffer(Oe,tt,Ue,Te,ut,Mt,Ue,Te,B.DEPTH_BUFFER_BIT,B.NEAREST);We.bindFramebuffer(B.READ_FRAMEBUFFER,null),We.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||M.has(A)){const An=M.get(A),sn=M.get(X);We.bindFramebuffer(B.READ_FRAMEBUFFER,rc),We.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ht);for(let an=0;an<Ve;an++)Lt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,An.__webglTexture,Z,Ze+an):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,An.__webglTexture,Z),at?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,sn.__webglTexture,Pe,Ft+an):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,sn.__webglTexture,Pe),Z!==0?B.blitFramebuffer(Oe,tt,Ue,Te,ut,Mt,Ue,Te,B.COLOR_BUFFER_BIT,B.NEAREST):at?B.copyTexSubImage3D(bt,Pe,ut,Mt,Ft+an,Oe,tt,Ue,Te):B.copyTexSubImage2D(bt,Pe,ut,Mt,Oe,tt,Ue,Te);We.bindFramebuffer(B.READ_FRAMEBUFFER,null),We.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else at?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(bt,Pe,ut,Mt,Ft,Ue,Te,Ve,Tt,Qe,Ut.data):X.isCompressedArrayTexture?B.compressedTexSubImage3D(bt,Pe,ut,Mt,Ft,Ue,Te,Ve,Tt,Ut.data):B.texSubImage3D(bt,Pe,ut,Mt,Ft,Ue,Te,Ve,Tt,Qe,Ut):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Pe,ut,Mt,Ue,Te,Tt,Qe,Ut.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Pe,ut,Mt,Ut.width,Ut.height,Tt,Ut.data):B.texSubImage2D(B.TEXTURE_2D,Pe,ut,Mt,Ue,Te,Tt,Qe,Ut);B.pixelStorei(B.UNPACK_ROW_LENGTH,_t),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,gn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,_i),B.pixelStorei(B.UNPACK_SKIP_ROWS,Jt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ir),Pe===0&&X.generateMipmaps&&B.generateMipmap(bt),We.unbindTexture()},this.initRenderTarget=function(A){M.get(A).__webglFramebuffer===void 0&&W.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?W.setTextureCube(A,0):A.isData3DTexture?W.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?W.setTexture2DArray(A,0):W.setTexture2D(A,0),We.unbindTexture()},this.resetState=function(){V=0,se=0,J=null,We.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),n.unpackColorSpace=wt._getUnpackColorSpace()}}function ni(s,e=!1){return new ql({color:s,roughness:e?.3:.6,metalness:e?.1:.05,...e?{emissive:s,emissiveIntensity:.15}:{}})}const Cf=1513239,Ws=14427686,$l=13948116,Ya=7566195,Kl=ni(Cf),qi=ni(Ws,!0),Zl=ni($l),$E=ni(Ya);function KE(){const s=new to;s.background=new mt(16777215);const e=new hn(40,1,.1,500);e.position.set(12,10,16),e.lookAt(0,3,0);const n=new wn(1,1,1),r=new Ki;function o(g,_,v,y=Kl){const w=new Dt(n,y);w.position.set(g,_,v),w.castShadow=!0,r.add(w)}o(-.5,0,0),o(-.5,1,0),o(.5,0,0),o(.5,1,0),o(0,2,0),o(0,3,0),o(0,4,0),o(-1,4,0),o(1,4,0),o(-1,3,0),o(-1,2,.5),o(1,3,0),o(1,2,.5),o(0,5,0),o(0,6,0,qi),s.add(r);const c=[{target:new j(3,0,2),delay:0},{target:new j(4,0,2),delay:.5},{target:new j(3,1,2),delay:1},{target:new j(4,1,2),delay:1.5},{target:new j(3,2,2),delay:2},{target:new j(4,2,2),delay:2.5},{target:new j(3,0,3),delay:.3},{target:new j(4,0,3),delay:.8},{target:new j(3,1,3),delay:1.3},{target:new j(4,1,3),delay:1.8},{target:new j(3.5,3,2.5),delay:3},{target:new j(-3,0,-1),delay:.2},{target:new j(-3,1,-1),delay:.7},{target:new j(-3,0,0),delay:1.1},{target:new j(-3,1,0),delay:1.6},{target:new j(-3,2,-.5),delay:2.2}],u=[];c.forEach(g=>{const _=g.target.y>2?qi:Math.random()>.7?$E:Zl,v=new Dt(n,_);v.castShadow=!0,v.position.set(g.target.x+(Math.random()-.5)*8,g.target.y+15+Math.random()*10,g.target.z+(Math.random()-.5)*8),s.add(v),u.push({mesh:v,target:g.target,delay:g.delay,arrived:!1,speed:.02+Math.random()*.01})});const f=new wn(.15,.15,.15),p=[];for(let g=0;g<40;g++){const _=new Dt(f,qi);_.position.set((Math.random()-.5)*12,Math.random()*12,(Math.random()-.5)*12),s.add(_),p.push({mesh:_,vy:.01+Math.random()*.02,vx:(Math.random()-.5)*.01})}no(s);let h=0;return{scene:s,camera:e,animate(g){h+=6e-4,e.position.x=Math.cos(h)*18,e.position.z=Math.sin(h)*18,e.position.y=10+Math.sin(g*.06),e.lookAt(0,3,0),u.forEach(_=>{if(g<_.delay)return;if(_.arrived){_.mesh.position.y=_.target.y+Math.sin(g*.4+_.delay)*.03;return}const v=new j().subVectors(_.target,_.mesh.position),y=v.length();y<.1?(_.mesh.position.copy(_.target),_.arrived=!0):(v.normalize().multiplyScalar(Math.min(_.speed*.2*(1+g*.06),y)),_.mesh.position.add(v))}),r.position.y=Math.sin(g*.3)*.1,p.forEach(_=>{_.mesh.position.y+=_.vy*.2,_.mesh.position.x+=_.vx*.2,_.mesh.rotation.x+=.004,_.mesh.rotation.z+=.002,_.mesh.position.y>14&&(_.mesh.position.y=-1,_.mesh.position.x=(Math.random()-.5)*12,_.mesh.position.z=(Math.random()-.5)*12)})}}}function ZE(){const s=new to;s.background=new mt(16777215);const e=new hn(40,1,.1,500);e.position.set(0,14,18),e.lookAt(0,0,0);const n=new wn(1,1,1),r=new Ki;for(let p=-1;p<=1;p++)for(let h=-1;h<=1;h++){const g=new Dt(n,qi);g.position.set(p,0,h),g.castShadow=!0,r.add(g)}const o=new Dt(n,qi);o.position.set(0,1,0),r.add(o);const c=[{dx:1,dz:0},{dx:-1,dz:0},{dx:0,dz:1},{dx:0,dz:-1},{dx:1,dz:1},{dx:-1,dz:-1},{dx:1,dz:-1},{dx:-1,dz:1}],u=[6,6,6,6,4,4,4,4];c.forEach((p,h)=>{const g=u[h],_=h<4;for(let v=2;v<=g;v++){const y=v===g?qi:_?Kl:Zl,w=new Dt(n,y);if(w.position.set(p.dx*v,0,p.dz*v),w.castShadow=!0,r.add(w),v===g){const T=new Dt(n,qi);T.position.set(p.dx*v,1,p.dz*v),r.add(T)}}}),s.add(r);const f=[];for(let p=0;p<8;p++){const h=p/8*Math.PI*2,g=9+Math.random()*2,_=2+Math.random()*3,v=new Dt(new wn(.4,.4,.4),p%3===0?qi:ni(10066329));s.add(v),f.push({mesh:v,angle:h,radius:g,height:_,speed:.3+Math.random()*.3})}return no(s),{scene:s,camera:e,animate(p){r.rotation.y=p*.03,r.position.y=Math.sin(p*.16)*.3,f.forEach(h=>{h.angle+=h.speed*.002,h.mesh.position.x=Math.cos(h.angle)*h.radius,h.mesh.position.z=Math.sin(h.angle)*h.radius,h.mesh.position.y=h.height+Math.sin(p*.3+h.angle)*.5,h.mesh.rotation.x+=.004,h.mesh.rotation.y+=.006})}}}function QE(){const s=new to;s.background=new mt(16777215);const e=new hn(40,1,.1,500);e.position.set(16,12,20),e.lookAt(0,3,0);const n=new wn(1,1,1),r=[{x:-8,h:2,w:3,d:3,color:Ya,label:"done"},{x:-4,h:4,w:3,d:3,color:Ya,label:"done"},{x:0,h:6,w:3,d:3,color:Ya,label:"done"},{x:4,h:8,w:3,d:3,color:Ws,label:"active"},{x:8,h:10,w:3,d:3,color:$l,label:"upcoming"}],o=[];r.forEach(h=>{const g=new Ki,_=h.label==="active",v=h.label==="upcoming";for(let y=0;y<h.w;y++)for(let w=0;w<h.d;w++)for(let T=0;T<h.h;T++)if(!(!(y===0||y===h.w-1||w===0||w===h.d-1||T===0||T===h.h-1)&&!_))if(v){const x=new Wv(n),L=new Gv(x,new Fg({color:$l,transparent:!0,opacity:.4}));L.position.set(h.x+y,T,w),g.add(L)}else{let x=h.color;_&&T===h.h-1?x=Ws:_&&(x=T%2===0?Cf:2763306);const L=new ql({color:x,roughness:_?.4:.8,metalness:_?.2:.05}),N=new Dt(n,L);N.position.set(h.x+y,T,w),N.castShadow=!0,g.add(N)}s.add(g),o.push({group:g,config:h})});const c=r[3],u=new wn(.2,.2,.2),f=[];for(let h=0;h<30;h++){const g=new Dt(u,new ql({color:Ws,roughness:.3}));g.position.set(c.x+1+(Math.random()-.5)*3,c.h+Math.random()*5,1+(Math.random()-.5)*3),s.add(g),f.push({mesh:g,vy:.015+Math.random()*.02,baseY:c.h})}no(s);let p=.3;return{scene:s,camera:e,animate(h){p+=4e-4,e.position.x=Math.cos(p)*22,e.position.z=Math.sin(p)*22,e.position.y=12+Math.sin(h*.06),e.lookAt(0,4,0),o[3].group.position.y=Math.sin(h*.4)*.15,f.forEach(g=>{g.mesh.position.y+=g.vy*.2,g.mesh.rotation.x+=.006,g.mesh.rotation.z+=.004,g.mesh.position.y>g.baseY+8&&(g.mesh.position.y=g.baseY,g.mesh.position.x=c.x+1+(Math.random()-.5)*3,g.mesh.position.z=1+(Math.random()-.5)*3)})}}}function JE(){const s=new to;s.background=new mt(16777215);const e=new hn(40,1,.1,500);e.position.set(0,8,18),e.lookAt(0,2,0);const n=new wn(1,1,1),r=new Ki;for(let g=-4;g<=-1;g++)for(let _=0;_<5;_++){const v=g===-4||_===0||_===4;r.add(Object.assign(new Dt(n,v?Kl:Zl),{position:new j(g,_,0),castShadow:!0}))}for(let g=1;g<=4;g++)for(let _=0;_<5;_++){const v=g===4||_===0||_===4;r.add(Object.assign(new Dt(n,v?Kl:Zl),{position:new j(g,_,0),castShadow:!0}))}for(let g=0;g<5;g++)r.add(Object.assign(new Dt(n,qi),{position:new j(0,g,0),castShadow:!0}));const o=new wn(.3,.15,.15),c=ni(Ws,!0);for(let g=1;g<=3;g++)for(let _=0;_<3;_++)r.add(Object.assign(new Dt(o,c),{position:new j(-3+_*.8,g,.55)})),r.add(Object.assign(new Dt(o,c),{position:new j(2+_*.8,g,.55)}));r.position.y=2,s.add(r);const u=new wn(.25,.25,.25),f=[Ws,Cf,Ya,$l],p=[];for(let g=0;g<50;g++){const _=f[Math.floor(Math.random()*f.length)],v=new ql({color:_,roughness:.5,transparent:!0,opacity:.8}),y=new Dt(u,v),w=Math.random()*Math.PI*2,T=1+Math.random()*2;y.position.set(Math.cos(w)*T,2+Math.random()*3,Math.sin(w)*T),s.add(y),p.push({mesh:y,angle:w,radius:T+Math.random()*4,vy:.005+Math.random()*.015,vAngle:.005+Math.random()*.01,maxY:10+Math.random()*5,startY:2+Math.random()*2})}no(s);let h=0;return{scene:s,camera:e,animate(g){h+=6e-4,e.position.x=Math.cos(h)*16,e.position.z=Math.sin(h)*16,e.position.y=8+Math.sin(g*.08),e.lookAt(0,3,0),r.rotation.y=Math.sin(g*.06)*.3,r.position.y=2+Math.sin(g*.16)*.3,p.forEach(_=>{_.angle+=_.vAngle*.2,_.mesh.position.x=Math.cos(_.angle)*_.radius,_.mesh.position.z=Math.sin(_.angle)*_.radius,_.mesh.position.y+=_.vy*.2,_.mesh.rotation.x+=.004,_.mesh.rotation.z+=.003;const v=(_.mesh.position.y-_.startY)/(_.maxY-_.startY);_.mesh.material.opacity=Math.max(0,1-v),_.mesh.position.y>_.maxY&&(_.mesh.position.y=_.startY,_.radius=1+Math.random()*2,_.mesh.material.opacity=.8)})}}}function e1(){const s=new to;s.background=new mt(16777215);const e=new hn(40,1,.1,500);e.position.set(0,12,28),e.lookAt(0,4,0);const n={coral:16739179,amber:16757575,gold:16767293,mint:7064439,teal:5164484,sky:4569041,indigo:7101671,violet:10837738,rose:16611752,warm:16429472,sand:16312737},r=Object.keys(n),o=new wn(1,1,1),c=[];function u(h,g,_,v,y,w){const T=new Ki,S=ni(y,!0),x=ni(w),L=ni(6045747);for(let P=-v;P<=v;P++)for(let I=-v;I<=v;I++){if(Math.sqrt(P*P+I*I)>v)continue;const F=Math.floor(Math.sin(P*.5)*Math.cos(I*.5)*1.5);T.add(Object.assign(new Dt(o,Math.random()>.4?S:x),{position:new j(P,F,I),castShadow:!0}));const O=Math.max(1,Math.floor((v-Math.sqrt(P*P+I*I))*.8));for(let q=1;q<=O;q++)T.add(Object.assign(new Dt(o,L),{position:new j(P,F-q,I)}))}const N=2+Math.floor(Math.random()*3);for(let P=0;P<N;P++){const I=Math.round((Math.random()-.5)*v*1.2),F=Math.round((Math.random()-.5)*v*1.2),O=2+Math.floor(Math.random()*4),q=ni(Math.random()>.5?y:w,!0);for(let b=0;b<O;b++)T.add(Object.assign(new Dt(o,q),{position:new j(I,b+1,F),castShadow:!0}));const C=ni(n[r[Math.floor(Math.random()*r.length)]],!0);for(let b=-1;b<=1;b++)for(let V=-1;V<=1;V++)Math.random()>.4&&T.add(Object.assign(new Dt(o,C),{position:new j(I+b,O+1,F+V),castShadow:!0}))}T.position.set(h,g,_),s.add(T),c.push({group:T,baseY:g,speed:.1+Math.random()*.1,phase:Math.random()*Math.PI*2})}u(0,0,0,5,n.mint,n.teal),u(-10,2,-4,3,n.coral,n.rose),u(9,-1,3,3,n.gold,n.amber),u(3,6,-8,2,n.sky,n.indigo),u(-6,4,6,2,n.violet,n.warm);const f=[];for(let h=0;h<60;h++){const g=n[r[Math.floor(Math.random()*r.length)]],_=.15+Math.random()*.2,v=ni(g,!0),y=new Dt(new wn(_,_,_),v);y.position.set((Math.random()-.5)*30,Math.random()*15-3,(Math.random()-.5)*25),s.add(y),f.push({mesh:y,vy:.002+Math.random()*.004,vx:(Math.random()-.5)*.003,vz:(Math.random()-.5)*.003,rotSpeed:(Math.random()-.5)*.01})}no(s),s.add(new Dm(n.coral,.4,30).translateX(-8).translateY(5)),s.add(new Dm(n.sky,.3,30).translateX(8).translateY(3).translateZ(-5));let p=0;return{scene:s,camera:e,animate(h){p+=4e-4,e.position.x=Math.cos(p)*26,e.position.z=Math.sin(p)*26,e.position.y=12+Math.sin(h*.05)*2,e.lookAt(0,3,0),c.forEach(g=>{g.group.position.y=g.baseY+Math.sin(h*g.speed+g.phase)*.4}),f.forEach(g=>{g.mesh.position.y+=g.vy,g.mesh.position.x+=g.vx,g.mesh.position.z+=g.vz,g.mesh.rotation.x+=g.rotSpeed,g.mesh.rotation.z+=g.rotSpeed*.7,g.mesh.position.y>14&&(g.mesh.position.y=-3,g.mesh.position.x=(Math.random()-.5)*30,g.mesh.position.z=(Math.random()-.5)*25)})}}}function no(s){s.add(new Kv(16777215,.6));const e=new Nm(16777215,1.1);e.position.set(10,20,10),e.castShadow=!0,e.shadow.mapSize.set(512,512),e.shadow.camera.far=50,e.shadow.camera.left=-15,e.shadow.camera.right=15,e.shadow.camera.top=15,e.shadow.camera.bottom=-15,s.add(e),s.add(new Nm(14739711,.3).translateZ(-10))}const t1={"/voxels/slide1-builder.html":KE,"/voxels/slide2-compass.html":ZE,"/voxels/slide3-steps.html":QE,"/voxels/slide4-archive.html":JE,"/voxels/slide9-mindshift.html":e1};function rg({src:s,className:e,style:n}){const r=ji.useRef(null),o=ji.useRef(null);return ji.useEffect(()=>{const c=t1[s];if(!c||!r.current)return;const u=r.current,{scene:f,camera:p,animate:h}=c(),g=new qE({antialias:!0,alpha:!0});g.setPixelRatio(Math.min(window.devicePixelRatio,2)),g.setClearColor(16777215,0),u.appendChild(g.domElement);function _(){const T=u.clientWidth,S=u.clientHeight;T===0||S===0||(p.aspect=T/S,p.updateProjectionMatrix(),g.setSize(T,S))}_(),window.addEventListener("resize",_);const v=new Qv;let y;function w(){y=requestAnimationFrame(w),h(v.getElapsedTime()),g.render(f,p)}return w(),o.current=()=>{cancelAnimationFrame(y),window.removeEventListener("resize",_),g.dispose(),u.contains(g.domElement)&&u.removeChild(g.domElement)},()=>{o.current&&o.current()}},[s]),z.jsx("div",{ref:r,className:e,style:{width:"100%",height:"100%",...n}})}function n1({slide:s,children:e}){if(!s.voxel)return e;const n={maskImage:"radial-gradient(ellipse 70% 60% at center 60%, black 30%, transparent 100%)",WebkitMaskImage:"radial-gradient(ellipse 70% 60% at center 60%, black 30%, transparent 100%)"};if(s.type==="title"||s.type==="section")return z.jsxs("div",{className:"relative w-full h-[75vh]",children:[z.jsx("div",{className:"absolute inset-0 opacity-30",style:n,children:z.jsx(rg,{src:s.voxel})}),z.jsx("div",{className:"relative z-10 flex items-center justify-center h-full",children:e})]});const r={maskImage:"radial-gradient(ellipse 80% 70% at center center, black 20%, transparent 90%)",WebkitMaskImage:"radial-gradient(ellipse 80% 70% at center center, black 20%, transparent 90%)"};return z.jsxs("div",{className:"flex gap-6 items-start w-full",children:[z.jsx("div",{className:"flex-1 min-w-0",children:e}),z.jsx("div",{className:"w-80 h-64 flex-shrink-0 overflow-hidden",style:r,children:z.jsx(rg,{src:s.voxel})})]})}function i1({slide:s}){let e;switch(s.type){case"title":e=z.jsx(r1,{s});break;case"agenda":e=z.jsx(s1,{s});break;case"timeline":e=z.jsx(a1,{s});break;case"section":e=z.jsx(o1,{s});break;case"recap":e=z.jsx(l1,{s});break;case"voices":e=z.jsx(c1,{s});break;case"bigquote":e=z.jsx(u1,{s});break;case"content":e=z.jsx(sg,{s});break;case"levels":e=z.jsx(d1,{s});break;case"definition":e=z.jsx(f1,{s});break;case"frameworks":e=z.jsx(h1,{s});break;case"table":e=z.jsx(p1,{s});break;case"prd":e=z.jsx(m1,{s});break;case"highlight":e=z.jsx(g1,{s});break;case"tools":e=z.jsx(_1,{s});break;case"activity":e=z.jsx(v1,{s});break;case"checklist":e=z.jsx(x1,{s});break;case"demoday":e=z.jsx(S1,{s});break;case"closing":e=z.jsx(y1,{s});break;case"end":e=z.jsx(M1,{s});break;default:e=z.jsx(sg,{s})}return z.jsx(n1,{slide:s,children:e})}function r1({s}){return z.jsxs("div",{className:"flex flex-col items-center justify-center text-center gap-6",children:[z.jsx("div",{className:"text-swiss-muted text-xs tracking-[0.3em] uppercase animate-fade-in",children:s.meta}),z.jsx("h1",{className:"text-5xl md:text-7xl font-extrabold text-swiss-black tracking-tighter animate-fade-in animate-fade-in-delay-1",children:s.title}),z.jsx("div",{className:"text-2xl md:text-3xl text-swiss-red font-light animate-fade-in animate-fade-in-delay-2",children:s.subtitle}),s.note&&z.jsx("p",{className:"text-sm text-swiss-muted max-w-xl mt-4 animate-fade-in animate-fade-in-delay-3",children:s.note})]})}function s1({s}){return z.jsxs("div",{className:"space-y-6",children:[z.jsx("h2",{className:"text-3xl font-extrabold text-swiss-black tracking-tight",children:s.title}),z.jsx("div",{className:"grid gap-2",children:s.items.map((e,n)=>z.jsxs("div",{className:`flex items-baseline gap-4 py-2 px-3 rounded animate-fade-in animate-fade-in-delay-${Math.min(n+1,5)}`,children:[z.jsx("span",{className:"text-swiss-red font-bold text-sm w-8 flex-shrink-0",children:e.label}),z.jsx("span",{className:"text-swiss-black text-base",children:e.text})]},n))})]})}function a1({s}){return z.jsxs("div",{className:"space-y-8",children:[z.jsx("h2",{className:"text-3xl font-extrabold text-swiss-black tracking-tight",children:s.title}),z.jsx("div",{className:"flex items-center justify-center gap-2 md:gap-4 flex-wrap",children:s.items.map((e,n)=>z.jsxs("div",{className:"flex items-center gap-2 md:gap-4",children:[z.jsxs("div",{className:`flex flex-col items-center gap-2 px-4 py-3 rounded-lg border-2 transition-all ${e.active?"border-swiss-red bg-swiss-red/10":e.done?"border-swiss-gray bg-swiss-gray/10":e.upcoming?"border-dashed border-swiss-gray":"border-swiss-gray"}`,children:[z.jsx("span",{className:`text-xs font-bold ${e.active?"text-swiss-red":(e.done,"text-swiss-muted")}`,children:e.week}),z.jsx("span",{className:`text-sm ${e.active?"text-swiss-black font-bold":"text-swiss-black"}`,children:e.label})]}),n<s.items.length-1&&z.jsx("span",{className:"text-swiss-gray text-lg",children:"—"})]},n))}),s.note&&z.jsx("p",{className:"text-center text-swiss-muted text-sm mt-4",children:s.note})]})}function o1({s}){return z.jsxs("div",{className:"flex flex-col items-center justify-center text-center gap-4",children:[z.jsxs("div",{className:"text-swiss-red text-sm tracking-[0.2em] uppercase font-bold animate-fade-in",children:["Block ",String(s.block).padStart(2,"0")]}),z.jsx("h1",{className:"text-4xl md:text-6xl font-extrabold text-swiss-black tracking-tighter animate-fade-in animate-fade-in-delay-1",children:s.title}),s.subtitle&&z.jsx("p",{className:"text-xl text-swiss-muted animate-fade-in animate-fade-in-delay-2",children:s.subtitle})]})}function l1({s}){return z.jsxs("div",{className:"space-y-5",children:[z.jsxs("div",{children:[z.jsx("h2",{className:"text-2xl font-extrabold text-swiss-black tracking-tight",children:s.title}),s.speaker&&z.jsx("p",{className:"text-sm text-swiss-muted mt-1",children:s.speaker})]}),z.jsx("ul",{className:"space-y-2",children:s.items.map((e,n)=>z.jsxs("li",{className:`flex items-start gap-3 text-swiss-black text-sm animate-fade-in animate-fade-in-delay-${Math.min(n+1,5)}`,children:[z.jsx("span",{className:"text-swiss-red mt-0.5 flex-shrink-0",children:"•"}),z.jsx("span",{children:e})]},n))}),s.quote&&z.jsx("blockquote",{className:"border-l-4 border-swiss-red/30 pl-4 mt-4 text-swiss-muted italic text-sm",children:s.quote})]})}function c1({s}){return z.jsxs("div",{className:"space-y-5",children:[z.jsxs("div",{children:[z.jsx("h2",{className:"text-2xl font-extrabold text-swiss-black tracking-tight",children:s.title}),s.subtitle&&z.jsx("p",{className:"text-sm text-swiss-muted mt-1",children:s.subtitle})]}),z.jsx("div",{className:"grid gap-3",children:s.items.map((e,n)=>z.jsxs("div",{className:`flex items-start gap-3 p-3 rounded-lg bg-swiss-gray/10 border border-swiss-gray/50 animate-fade-in animate-fade-in-delay-${Math.min(n+1,5)}`,children:[z.jsx("span",{className:"text-swiss-red/50 text-lg leading-none",children:"“"}),z.jsx("div",{className:"flex-1",children:z.jsx("p",{className:"text-swiss-black text-sm italic",children:e.text})}),e.tag&&z.jsx("span",{className:"text-[10px] text-swiss-muted bg-swiss-gray/30 rounded px-2 py-0.5 flex-shrink-0",children:e.tag})]},n))})]})}function u1({s}){return z.jsxs("div",{className:"flex flex-col items-center justify-center text-center px-8",children:[z.jsx("span",{className:"text-swiss-red/20 text-6xl leading-none mb-4",children:"“"}),z.jsx("blockquote",{className:"text-2xl md:text-4xl font-bold text-swiss-black leading-relaxed max-w-3xl tracking-tight animate-fade-in",children:s.quote}),s.author&&z.jsxs("p",{className:"text-swiss-muted text-sm mt-6 animate-fade-in animate-fade-in-delay-2",children:["— ",s.author]})]})}function sg({s}){return z.jsxs("div",{className:"space-y-5",children:[z.jsxs("div",{children:[z.jsx("h2",{className:"text-2xl font-extrabold text-swiss-black tracking-tight",children:s.title}),s.subtitle&&z.jsx("p",{className:"text-sm text-swiss-red mt-1",children:s.subtitle})]}),s.content&&z.jsx("p",{className:"text-swiss-black text-sm leading-relaxed",children:s.content}),s.items&&z.jsx("ul",{className:"space-y-2",children:s.items.map((e,n)=>z.jsxs("li",{className:`flex items-start gap-3 text-swiss-black text-sm animate-fade-in animate-fade-in-delay-${Math.min(n+1,5)}`,children:[z.jsx("span",{className:"text-swiss-red mt-0.5 flex-shrink-0",children:"•"}),z.jsx("span",{children:e})]},n))}),s.note&&z.jsx("p",{className:"text-swiss-muted text-xs mt-4 border-t border-swiss-gray pt-3",children:s.note})]})}function d1({s}){return z.jsxs("div",{className:"space-y-5",children:[z.jsx("h2",{className:"text-2xl font-extrabold text-swiss-black tracking-tight",children:s.title}),z.jsx("div",{className:"grid gap-3",children:s.items.map((e,n)=>z.jsxs("div",{className:`flex items-start gap-4 p-4 rounded-lg border border-swiss-gray/50 bg-swiss-gray/5 animate-fade-in animate-fade-in-delay-${Math.min(n+1,5)}`,children:[z.jsxs("div",{className:"flex flex-col items-center flex-shrink-0 w-12",children:[z.jsx("span",{className:"text-swiss-red font-bold text-lg",children:e.level}),z.jsx("span",{className:"text-swiss-muted text-[10px]",children:e.hours})]}),z.jsxs("div",{children:[z.jsx("h3",{className:"text-swiss-black font-bold text-sm",children:e.name}),z.jsx("p",{className:"text-swiss-muted text-sm mt-1",children:e.desc})]})]},n))})]})}function f1({s}){return z.jsxs("div",{className:"flex flex-col items-center justify-center text-center px-8 space-y-6",children:[z.jsx("h2",{className:"text-4xl font-extrabold text-swiss-red",children:s.title}),z.jsx("p",{className:"text-xl text-swiss-black max-w-2xl leading-relaxed animate-fade-in animate-fade-in-delay-1",children:s.definition}),s.note&&z.jsx("p",{className:"text-sm text-swiss-muted max-w-xl animate-fade-in animate-fade-in-delay-2",children:s.note})]})}function h1({s}){return z.jsxs("div",{className:"space-y-5",children:[z.jsx("h2",{className:"text-2xl font-extrabold text-swiss-black tracking-tight",children:s.title}),z.jsx("div",{className:"grid gap-4",children:s.items.map((e,n)=>z.jsxs("div",{className:`p-4 rounded-lg border border-swiss-gray/50 bg-swiss-gray/5 animate-fade-in animate-fade-in-delay-${Math.min(n+1,5)}`,children:[z.jsx("h3",{className:"text-swiss-red font-bold text-sm mb-2",children:e.name}),z.jsx("p",{className:"text-swiss-black text-sm",children:e.desc})]},n))})]})}function p1({s}){return z.jsxs("div",{className:"space-y-4",children:[z.jsxs("div",{children:[z.jsx("h2",{className:"text-2xl font-extrabold text-swiss-black tracking-tight",children:s.title}),s.subtitle&&z.jsx("p",{className:"text-sm text-swiss-muted mt-1",children:s.subtitle})]}),z.jsx("div",{className:"overflow-x-auto",children:z.jsxs("table",{className:"w-full text-sm border-collapse",children:[z.jsx("thead",{children:z.jsx("tr",{children:s.headers.map((e,n)=>z.jsx("th",{className:"text-left text-swiss-red font-bold text-xs px-3 py-2 border-b-2 border-swiss-black",children:e},n))})}),z.jsx("tbody",{children:s.rows.map((e,n)=>z.jsx("tr",{className:"border-b border-swiss-gray",children:e.map((r,o)=>z.jsx("td",{className:"px-3 py-2 text-swiss-black text-xs",children:r},o))},n))})]})})]})}function m1({s}){return z.jsxs("div",{className:"space-y-5",children:[z.jsx("h2",{className:"text-2xl font-extrabold text-swiss-black tracking-tight",children:s.title}),z.jsx("div",{className:"grid gap-2",children:s.items.map((e,n)=>z.jsxs("div",{className:`flex items-start gap-4 p-3 rounded-lg border border-swiss-gray/50 animate-fade-in animate-fade-in-delay-${Math.min(n+1,5)}`,children:[z.jsx("span",{className:"text-swiss-red font-bold text-lg w-8 flex-shrink-0 text-right",children:e.num}),z.jsxs("div",{children:[z.jsx("h3",{className:"text-swiss-black font-bold text-sm",children:e.name}),z.jsx("p",{className:"text-swiss-muted text-xs mt-0.5",children:e.desc})]})]},n))})]})}function g1({s}){return z.jsxs("div",{className:"space-y-5",children:[z.jsx("h2",{className:"text-2xl font-extrabold text-swiss-red",children:s.title}),s.content&&z.jsx("p",{className:"text-swiss-black text-sm leading-relaxed",children:s.content}),s.items&&z.jsx("div",{className:"grid gap-2 pl-2",children:s.items.map((e,n)=>z.jsxs("div",{className:`flex items-start gap-3 text-sm animate-fade-in animate-fade-in-delay-${Math.min(n+1,5)}`,children:[z.jsx("span",{className:"text-swiss-red flex-shrink-0",children:"✗"}),z.jsx("span",{className:"text-swiss-black",children:e})]},n))}),s.note&&z.jsx("p",{className:"text-swiss-muted text-xs mt-3 border-t border-swiss-gray pt-3",children:s.note})]})}function _1({s}){return z.jsxs("div",{className:"space-y-5",children:[z.jsx("h2",{className:"text-2xl font-extrabold text-swiss-black tracking-tight",children:s.title}),z.jsx("div",{className:"grid gap-3",children:s.items.map((e,n)=>z.jsx("div",{className:`flex items-start gap-4 p-3 rounded-lg bg-swiss-gray/5 border border-swiss-gray/50 animate-fade-in animate-fade-in-delay-${Math.min(n+1,5)}`,children:z.jsxs("div",{className:"flex-1",children:[z.jsxs("div",{className:"flex items-baseline gap-3",children:[z.jsx("h3",{className:"text-swiss-black font-bold text-sm",children:e.name}),z.jsx("span",{className:"text-swiss-red text-[10px] bg-swiss-red/10 rounded px-2 py-0.5 font-bold",children:e.role})]}),z.jsx("p",{className:"text-swiss-muted text-xs mt-1",children:e.desc})]})},n))})]})}function v1({s}){return z.jsxs("div",{className:"space-y-5",children:[z.jsxs("div",{children:[z.jsx("h2",{className:"text-2xl font-extrabold text-swiss-black tracking-tight",children:s.title}),s.subtitle&&z.jsx("p",{className:"text-sm text-swiss-red font-bold mt-1",children:s.subtitle})]}),s.goal&&z.jsx("p",{className:"text-swiss-black text-sm italic border-l-4 border-swiss-red/30 pl-4",children:s.goal}),z.jsx("div",{className:"grid gap-3",children:s.steps.map((e,n)=>z.jsxs("div",{className:`flex items-start gap-4 p-4 rounded-lg border border-swiss-gray/50 bg-swiss-gray/5 animate-fade-in animate-fade-in-delay-${Math.min(n+1,5)}`,children:[z.jsxs("div",{className:"flex flex-col items-center flex-shrink-0",children:[z.jsx("span",{className:"text-swiss-red font-bold text-lg",children:n+1}),e.time&&z.jsx("span",{className:"text-swiss-muted text-[10px]",children:e.time})]}),z.jsxs("div",{children:[z.jsx("h3",{className:"text-swiss-black font-bold text-sm",children:e.name}),z.jsx("p",{className:"text-swiss-muted text-sm mt-1",children:e.desc})]})]},n))})]})}function x1({s}){return z.jsxs("div",{className:"space-y-6",children:[z.jsx("h2",{className:"text-2xl font-extrabold text-swiss-black tracking-tight",children:s.title}),z.jsx("div",{className:"grid gap-3",children:s.items.map((e,n)=>z.jsxs("div",{className:`flex items-center gap-4 p-3 rounded-lg border border-swiss-gray/50 animate-fade-in animate-fade-in-delay-${Math.min(n+1,5)}`,children:[z.jsx("div",{className:"w-5 h-5 rounded border-2 border-swiss-red/30 flex items-center justify-center flex-shrink-0",children:z.jsx("span",{className:"text-swiss-red/30 text-xs",children:"✓"})}),z.jsx("span",{className:"text-swiss-black text-sm",children:e})]},n))})]})}function S1({s}){return z.jsxs("div",{className:"space-y-5",children:[z.jsx("h2",{className:"text-3xl font-extrabold text-swiss-red",children:s.title}),s.content&&z.jsx("p",{className:"text-swiss-black text-sm leading-relaxed",children:s.content}),s.items&&z.jsx("ul",{className:"space-y-2",children:s.items.map((e,n)=>z.jsxs("li",{className:`flex items-start gap-3 text-swiss-black text-sm animate-fade-in animate-fade-in-delay-${Math.min(n+1,5)}`,children:[z.jsx("span",{className:"text-swiss-red mt-0.5 flex-shrink-0",children:"→"}),z.jsx("span",{children:e})]},n))})]})}function y1({s}){return z.jsxs("div",{className:"space-y-6",children:[z.jsx("h2",{className:"text-2xl font-extrabold text-swiss-black tracking-tight",children:s.title}),z.jsx("div",{className:"grid gap-2",children:s.items.map((e,n)=>z.jsxs("div",{className:`flex items-start gap-3 p-2 animate-fade-in animate-fade-in-delay-${Math.min(n+1,5)}`,children:[z.jsx("span",{className:"text-swiss-red flex-shrink-0 font-bold text-sm",children:String(n+1).padStart(2,"0")}),z.jsx("span",{className:"text-swiss-black text-sm",children:e})]},n))})]})}function M1({s}){return z.jsxs("div",{className:"flex flex-col items-center justify-center text-center gap-6",children:[z.jsx("h1",{className:"text-5xl md:text-7xl font-extrabold text-swiss-black tracking-tighter animate-fade-in",children:s.title}),z.jsx("p",{className:"text-swiss-muted text-lg animate-fade-in animate-fade-in-delay-1",children:s.subtitle}),z.jsx("p",{className:"text-swiss-red text-xl font-bold animate-fade-in animate-fade-in-delay-2",children:s.meta})]})}function E1({current:s,total:e,slide:n}){const r=(s+1)/e*100;return z.jsxs("header",{className:"flex-shrink-0 border-b border-swiss-gray",children:[z.jsxs("div",{className:"px-6 py-2 flex items-center justify-between text-xs font-mono",children:[z.jsx("span",{className:"text-swiss-red font-bold tracking-wider",children:"W26-WS04"}),z.jsx("span",{children:n.blockTitle&&z.jsxs("span",{className:"text-swiss-muted",children:[String(n.block).padStart(2,"0")," — ",n.blockTitle]})})]}),z.jsx("div",{className:"h-1 bg-swiss-gray/30",children:z.jsx("div",{className:"h-full bg-swiss-red transition-all duration-500 ease-out",style:{width:`${r}%`}})})]})}function w1({blocks:s,blockTitles:e,currentBlock:n,slides:r,goTo:o}){return z.jsx("div",{className:"flex items-center gap-1",children:s.map(c=>{const u=r.findIndex(p=>p.block===c),f=c===n;return z.jsx("button",{onClick:()=>o(u),className:`px-2 py-1 rounded text-[10px] transition-colors ${f?"bg-swiss-red/10 text-swiss-red font-bold":"hover:bg-swiss-gray/20 text-swiss-muted hover:text-swiss-black"}`,title:e[c],children:String(c).padStart(2,"0")},c)})})}function T1(){const[s,e]=ji.useState(0),n=Fa.length,r=ji.useCallback(p=>{e(h=>{const g=h+p;return g<0?0:g>=n?n-1:g})},[n]),o=ji.useCallback(p=>{p>=0&&p<n&&e(p)},[n]);ji.useEffect(()=>{const p=h=>{(h.key==="ArrowRight"||h.key==="ArrowDown"||h.key===" ")&&(h.preventDefault(),r(1)),(h.key==="ArrowLeft"||h.key==="ArrowUp")&&(h.preventDefault(),r(-1)),h.key==="Home"&&(h.preventDefault(),o(0)),h.key==="End"&&(h.preventDefault(),o(n-1))};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[r,o,n]),ji.useEffect(()=>{let p=0;const h=_=>{p=_.touches[0].clientX},g=_=>{const v=p-_.changedTouches[0].clientX;Math.abs(v)>50&&r(v>0?1:-1)};return window.addEventListener("touchstart",h),window.addEventListener("touchend",g),()=>{window.removeEventListener("touchstart",h),window.removeEventListener("touchend",g)}},[r]);const c=Fa[s],u=[...new Set(Fa.map(p=>p.block))],f={};return Fa.forEach(p=>{f[p.block]=p.blockTitle}),z.jsxs("div",{className:"h-screen w-screen flex flex-col bg-white overflow-hidden select-none",children:[z.jsx(E1,{current:s,total:n,slide:c}),z.jsx("main",{className:"flex-1 overflow-hidden flex items-center justify-center px-6 md:px-16 lg:px-24",children:z.jsx("div",{className:"w-full max-w-5xl animate-fade-in",children:z.jsx(i1,{slide:c})},c.id)}),z.jsxs("footer",{className:"flex-shrink-0 px-6 py-3 flex items-center justify-between text-xs font-mono text-swiss-muted border-t border-swiss-gray",children:[z.jsx(w1,{blocks:u,blockTitles:f,currentBlock:c.block,slides:Fa,goTo:o}),z.jsxs("div",{className:"flex items-center gap-4",children:[z.jsx("button",{onClick:()=>r(-1),className:"hover:text-swiss-black transition-colors px-2 py-1",children:"←"}),z.jsxs("span",{className:"text-swiss-muted tabular-nums",children:[s+1,"/",n]}),z.jsx("button",{onClick:()=>r(1),className:"hover:text-swiss-black transition-colors px-2 py-1",children:"→"})]})]})]})}D_.createRoot(document.getElementById("root")).render(z.jsx(T_.StrictMode,{children:z.jsx(T1,{})}));
