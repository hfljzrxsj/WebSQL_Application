!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,c=[],l=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(c.push(r.value),c.length!==t);l=!0);}catch(e){u=!0,a=e}finally{try{if(!l&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw a}}return c}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./react-router-legacy-vwidVOdW.js","./@remix-run-legacy-ZSCQcTu_.js"],(function(t,n){"use strict";var r,a,o,i,c,l,u,s,f,v;return{setters:[function(e){r=e.R,a=e.u,o=e.a,i=e.D,c=e.N,l=e.b,u=e.c},function(e){s=e.c,f=e.s,v=e.d}],execute:function(){
/**
       * React Router DOM v6.14.1
       *
       * Copyright (c) Remix Software Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.md file in the root directory of this source tree.
       *
       * @license MIT
       */
function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}t("H",(function(t){var n=t.basename,a=t.children,o=t.future,i=t.window,c=React.useRef();null==c.current&&(c.current=s({window:i,v5Compat:!0}));var l=c.current,u=e(React.useState({action:l.action,location:l.location}),2),f=u[0],v=u[1],d=(o||{}).v7_startTransition,h=React.useCallback((function(e){d&&y?y((function(){return v(e)})):v(e)}),[v,d]);return React.useLayoutEffect((function(){return l.listen(h)}),[l,h]),React.createElement(r,{basename:n,children:a,location:f.location,navigationType:f.action,navigator:l})}));var h=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],p=["aria-current","caseSensitive","className","end","style","to","children"],y=React.startTransition;var m,g,R,b,w="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,S=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,C=React.forwardRef((function(e,t){var r,i=e.onClick,s=e.relative,p=e.reloadDocument,y=e.replace,m=e.state,g=e.target,R=e.to,b=e.preventScrollReset,C=d(e,h),j=React.useContext(c).basename,A=!1;if("string"==typeof R&&S.test(R)&&(r=R,w))try{var O=new URL(window.location.href),U=R.startsWith("//")?new URL(O.protocol+R):new URL(R),L=f(U.pathname,j);U.origin===O.origin&&null!=L?R=L+U.search+U.hash:A=!0}catch(E){}var x=l(R,{relative:s}),k=function(e,t){var n=void 0===t?{}:t,r=n.target,i=n.replace,c=n.state,l=n.preventScrollReset,s=n.relative,f=u(),d=o(),h=a(e,{relative:s});return React.useCallback((function(t){if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,r)){t.preventDefault();var n=void 0!==i?i:v(d)===v(h);f(e,{replace:n,state:c,preventScrollReset:l,relative:s})}}),[d,f,h,i,c,r,e,l,s])}(R,{replace:y,state:m,target:g,preventScrollReset:b,relative:s});return React.createElement("a",n({},C,{href:r||x,onClick:A||p?i:function(e){i&&i(e),e.defaultPrevented||k(e)},ref:t,target:g}))}));t("N",React.forwardRef((function(e,t){var r=e["aria-current"],l=void 0===r?"page":r,u=e.caseSensitive,s=void 0!==u&&u,f=e.className,v=void 0===f?"":f,h=e.end,y=void 0!==h&&h,m=e.style,g=e.to,R=e.children,b=d(e,p),w=a(g,{relative:b.relative}),S=o(),j=React.useContext(i),A=React.useContext(c).navigator,O=A.encodeLocation?A.encodeLocation(w).pathname:w.pathname,U=S.pathname,L=j&&j.navigation&&j.navigation.location?j.navigation.location.pathname:null;s||(U=U.toLowerCase(),L=L?L.toLowerCase():null,O=O.toLowerCase());var x,k=U===O||!y&&U.startsWith(O)&&"/"===U.charAt(O.length),E=null!=L&&(L===O||!y&&L.startsWith(O)&&"/"===L.charAt(O.length)),F=k?l:void 0;x="function"==typeof v?v({isActive:k,isPending:E}):[v,k?"active":null,E?"pending":null].filter(Boolean).join(" ");var N="function"==typeof m?m({isActive:k,isPending:E}):m;return React.createElement(C,n({},b,{"aria-current":F,className:x,ref:t,style:N,to:g}),"function"==typeof R?R({isActive:k,isPending:E}):R)})));(g=m||(m={})).UseScrollRestoration="useScrollRestoration",g.UseSubmit="useSubmit",g.UseSubmitFetcher="useSubmitFetcher",g.UseFetcher="useFetcher",(b=R||(R={})).UseFetchers="useFetchers",b.UseScrollRestoration="useScrollRestoration"}}}))}();
