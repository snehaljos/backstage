/*! For license information please see 1cf7795a.b8e4c855.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[708886],{107808:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var t=n(824246),o=n(511151);const i={id:"plugin-permission-common.permissionevaluator",title:"PermissionEvaluator",description:"API reference for PermissionEvaluator"},s=void 0,c={unversionedId:"reference/plugin-permission-common.permissionevaluator",id:"reference/plugin-permission-common.permissionevaluator",title:"PermissionEvaluator",description:"API reference for PermissionEvaluator",source:"@site/../docs/reference/plugin-permission-common.permissionevaluator.md",sourceDirName:"reference",slug:"/reference/plugin-permission-common.permissionevaluator",permalink:"/docs/reference/plugin-permission-common.permissionevaluator",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-permission-common.permissionevaluator.md",tags:[],version:"current",frontMatter:{id:"plugin-permission-common.permissionevaluator",title:"PermissionEvaluator",description:"API reference for PermissionEvaluator"}},a={},u=[{value:"Methods",id:"methods",level:2}];function l(e){const r=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-common",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-permission-common"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.permissionevaluator",children:(0,t.jsx)(r.code,{children:"PermissionEvaluator"})})]}),"\n",(0,t.jsx)(r.p,{children:"A client interacting with the permission backend can implement this evaluator interface."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"export interface PermissionEvaluator \n"})}),"\n",(0,t.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Method"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.permissionevaluator.authorize",children:"authorize(requests, options)"})}),(0,t.jsxs)(r.td,{children:["Evaluates ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.permission",children:"Permissions"})," and returns a definitive decision."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.permissionevaluator.authorizeconditional",children:"authorizeConditional(requests, options)"})}),(0,t.jsxs)(r.td,{children:["Evaluates ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.resourcepermission",children:"ResourcePermissions"})," and returns both definitive and conditional decisions, depending on the configured ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-node.permissionpolicy",children:"PermissionPolicy"}),". This method is useful when the caller needs more control over the processing of conditional decisions. For example, a plugin backend may want to use ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.permissioncriteria",children:"conditions"})," in a database query instead of evaluating each resource in memory."]})]})]})]})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},n=0;n<10;n++)r["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,s,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var u in i=Object(arguments[a]))n.call(i,u)&&(c[u]=i[u]);if(r){s=r(i);for(var l=0;l<s.length;l++)t.call(i,s[l])&&(c[s[l]]=i[s[l]])}}return c}},371426:(e,r,n)=>{n(862525);var t=n(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),r.Fragment=i("react.fragment")}var s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,n){var t,i={},u=null,l=null;for(t in void 0!==n&&(u=""+n),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(l=r.ref),r)c.call(r,t)&&!a.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===i[t]&&(i[t]=r[t]);return{$$typeof:o,type:e,key:u,ref:l,props:i,_owner:s.current}}r.jsx=u,r.jsxs=u},541535:(e,r,n)=>{var t=n(862525),o=60103,i=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var s=60109,c=60110,a=60112;r.Suspense=60113;var u=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),i=f("react.portal"),r.Fragment=f("react.fragment"),r.StrictMode=f("react.strict_mode"),r.Profiler=f("react.profiler"),s=f("react.provider"),c=f("react.context"),a=f("react.forward_ref"),r.Suspense=f("react.suspense"),u=f("react.memo"),l=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function y(e,r,n){this.props=e,this.context=r,this.refs=h,this.updater=n||m}function v(){}function g(e,r,n){this.props=e,this.context=r,this.refs=h,this.updater=n||m}y.prototype.isReactComponent={},y.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=y.prototype;var j=g.prototype=new v;j.constructor=g,t(j,y.prototype),j.isPureReactComponent=!0;var b={current:null},_=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,n){var t,i={},s=null,c=null;if(null!=r)for(t in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(s=""+r.key),r)_.call(r,t)&&!x.hasOwnProperty(t)&&(i[t]=r[t]);var a=arguments.length-2;if(1===a)i.children=n;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];i.children=u}if(e&&e.defaultProps)for(t in a=e.defaultProps)void 0===i[t]&&(i[t]=a[t]);return{$$typeof:o,type:e,key:s,ref:c,props:i,_owner:b.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var E=/\/+/g;function O(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function P(e,r,n,t,s){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var a=!1;if(null===e)a=!0;else switch(c){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case o:case i:a=!0}}if(a)return s=s(a=e),e=""===t?"."+O(a,0):t,Array.isArray(s)?(n="",null!=e&&(n=e.replace(E,"$&/")+"/"),P(s,r,n,"",(function(e){return e}))):null!=s&&(k(s)&&(s=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(s,n+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(E,"$&/")+"/")+e)),r.push(s)),1;if(a=0,t=""===t?".":t+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=t+O(c=e[u],u);a+=P(c,r,n,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(c=e.next()).done;)a+=P(c=c.value,r,n,l=t+O(c,u++),s);else if("object"===c)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return a}function S(e,r,n){if(null==e)return e;var t=[],o=0;return P(e,t,"","",(function(e){return r.call(n,e,o++)})),t}function C(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function $(){var e=R.current;if(null===e)throw Error(d(321));return e}var I={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:t};r.Children={map:S,forEach:function(e,r,n){S(e,(function(){r.apply(this,arguments)}),n)},count:function(e){var r=0;return S(e,(function(){r++})),r},toArray:function(e){return S(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error(d(143));return e}},r.Component=y,r.PureComponent=g,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,r.cloneElement=function(e,r,n){if(null==e)throw Error(d(267,e));var i=t({},e.props),s=e.key,c=e.ref,a=e._owner;if(null!=r){if(void 0!==r.ref&&(c=r.ref,a=b.current),void 0!==r.key&&(s=""+r.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in r)_.call(r,l)&&!x.hasOwnProperty(l)&&(i[l]=void 0===r[l]&&void 0!==u?u[l]:r[l])}var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){u=Array(l);for(var f=0;f<l;f++)u[f]=arguments[f+2];i.children=u}return{$$typeof:o,type:e.type,key:s,ref:c,props:i,_owner:a}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:c,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},r.createElement=w,r.createFactory=function(e){var r=w.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:a,render:e}},r.isValidElement=k,r.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:C}},r.memo=function(e,r){return{$$typeof:u,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return $().useCallback(e,r)},r.useContext=function(e,r){return $().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return $().useEffect(e,r)},r.useImperativeHandle=function(e,r,n){return $().useImperativeHandle(e,r,n)},r.useLayoutEffect=function(e,r){return $().useLayoutEffect(e,r)},r.useMemo=function(e,r){return $().useMemo(e,r)},r.useReducer=function(e,r,n){return $().useReducer(e,r,n)},r.useRef=function(e){return $().useRef(e)},r.useState=function(e){return $().useState(e)},r.version="17.0.2"},827378:(e,r,n)=>{e.exports=n(541535)},824246:(e,r,n)=>{e.exports=n(371426)},511151:(e,r,n)=>{n.d(r,{Zo:()=>c,ah:()=>i});var t=n(667294);const o=t.createContext({});function i(e){const r=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const s={};function c({components:e,children:r,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||s:i(e),t.createElement(o.Provider,{value:c},r)}}}]);