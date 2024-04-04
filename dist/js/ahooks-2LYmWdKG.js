import{_ as p,a as h,b as R,c as q,d as J,e as N}from"./tslib-g6pQwBLH.js";import{d as K,t as Q}from"./lodash-hv2pLSqc.js";var X=function(e){return function(t,n){var r=React.useRef(!1);e(function(){return function(){r.current=!1}},[]),e(function(){if(!r.current)r.current=!0;else return t()},n)}},z=function(e){return typeof e=="function"};function w(e){var t=React.useRef(e);t.current=React.useMemo(function(){return e},[e]);var n=React.useRef();return n.current||(n.current=function(){for(var r=[],u=0;u<arguments.length;u++)r[u]=arguments[u];return t.current.apply(this,r)}),n.current}const L=X(React.useEffect);var U=function(e,t){var n=t.manual,r=t.ready,u=r===void 0?!0:r,a=t.defaultParams,o=a===void 0?[]:a,s=t.refreshDeps,c=s===void 0?[]:s,i=t.refreshDepsAction,v=React.useRef(!1);return v.current=!1,L(function(){!n&&u&&(v.current=!0,e.run.apply(e,p([],h(o),!1)))},[u]),L(function(){v.current||n||(v.current=!0,i?i():e.refresh())},p([],h(c),!1)),{onBefore:function(){if(!u)return{stopNow:!0}}}};U.onInit=function(e){var t=e.ready,n=t===void 0?!0:t,r=e.manual;return{loading:!r&&n}};const Y=U;function Z(e,t){if(e===t)return!0;for(var n=0;n<e.length;n++)if(!Object.is(e[n],t[n]))return!1;return!0}function G(e,t){var n=React.useRef({deps:t,obj:void 0,initialized:!1}).current;return(n.initialized===!1||!Z(n.deps,t))&&(n.deps=t,n.obj=e(),n.initialized=!0),n.obj}function V(e){var t=React.useRef(e);return t.current=e,t}var j=function(e){var t=V(e);React.useEffect(function(){return function(){t.current()}},[])},O=new Map,k=function(e,t,n){var r=O.get(e);r?.timer&&clearTimeout(r.timer);var u=void 0;t>-1&&(u=setTimeout(function(){O.delete(e)},t)),O.set(e,R(R({},n),{timer:u}))},I=function(e){return O.get(e)},F=new Map,ee=function(e){return F.get(e)},ne=function(e,t){F.set(e,t),t.then(function(n){return F.delete(e),n}).catch(function(){F.delete(e)})},P={},te=function(e,t){P[e]&&P[e].forEach(function(n){return n(t)})},$=function(e,t){return P[e]||(P[e]=[]),P[e].push(t),function(){var r=P[e].indexOf(t);P[e].splice(r,1)}},re=function(e,t){var n=t.cacheKey,r=t.cacheTime,u=r===void 0?5*60*1e3:r,a=t.staleTime,o=a===void 0?0:a,s=t.setCache,c=t.getCache,i=React.useRef(),v=React.useRef(),d=function(f,l){s?s(l):k(f,u,l),te(f,l.data)},m=function(f,l){return l===void 0&&(l=[]),c?c(l):I(f)};return G(function(){if(n){var f=m(n);f&&Object.hasOwnProperty.call(f,"data")&&(e.state.data=f.data,e.state.params=f.params,(o===-1||new Date().getTime()-f.time<=o)&&(e.state.loading=!1)),i.current=$(n,function(l){e.setState({data:l})})}},[]),j(function(){var f;(f=i.current)===null||f===void 0||f.call(i)}),n?{onBefore:function(f){var l=m(n,f);return!l||!Object.hasOwnProperty.call(l,"data")?{}:o===-1||new Date().getTime()-l.time<=o?{loading:!1,data:l?.data,error:void 0,returnNow:!0}:{data:l?.data,error:void 0}},onRequest:function(f,l){var g=ee(n);return g&&g!==v.current?{servicePromise:g}:(g=f.apply(void 0,p([],h(l),!1)),v.current=g,ne(n,g),{servicePromise:g})},onSuccess:function(f,l){var g;n&&((g=i.current)===null||g===void 0||g.call(i),d(n,{data:f,params:l,time:new Date().getTime()}),i.current=$(n,function(E){e.setState({data:E})}))},onMutate:function(f){var l;n&&((l=i.current)===null||l===void 0||l.call(i),d(n,{data:f,params:e.state.params,time:new Date().getTime()}),i.current=$(n,function(g){e.setState({data:g})}))}}:{}};const ue=re;var ie=function(e,t){var n=t.debounceWait,r=t.debounceLeading,u=t.debounceTrailing,a=t.debounceMaxWait,o=React.useRef(),s=React.useMemo(function(){var c={};return r!==void 0&&(c.leading=r),u!==void 0&&(c.trailing=u),a!==void 0&&(c.maxWait=a),c},[r,u,a]);return React.useEffect(function(){if(n){var c=e.runAsync.bind(e);return o.current=K(function(i){i()},n,s),e.runAsync=function(){for(var i=[],v=0;v<arguments.length;v++)i[v]=arguments[v];return new Promise(function(d,m){var f;(f=o.current)===null||f===void 0||f.call(o,function(){c.apply(void 0,p([],h(i),!1)).then(d).catch(m)})})},function(){var i;(i=o.current)===null||i===void 0||i.cancel(),e.runAsync=c}}},[n,s]),n?{onCancel:function(){var c;(c=o.current)===null||c===void 0||c.cancel()}}:{}};const ae=ie;var oe=function(e,t){var n=t.loadingDelay,r=t.ready,u=React.useRef();if(!n)return{};var a=function(){u.current&&clearTimeout(u.current)};return{onBefore:function(){return a(),r!==!1&&(u.current=setTimeout(function(){e.setState({loading:!0})},n)),{loading:!1}},onFinally:function(){a()},onCancel:function(){a()}}};const se=oe;var D=!!(typeof window<"u"&&window.document&&window.document.createElement);function B(){return D?document.visibilityState!=="hidden":!0}var C=[];function ce(e){return C.push(e),function(){var n=C.indexOf(e);C.splice(n,1)}}if(D){var fe=function(){if(B())for(var e=0;e<C.length;e++){var t=C[e];t()}};window.addEventListener("visibilitychange",fe,!1)}var le=function(e,t){var n=t.pollingInterval,r=t.pollingWhenHidden,u=r===void 0?!0:r,a=t.pollingErrorRetryCount,o=a===void 0?-1:a,s=React.useRef(),c=React.useRef(),i=React.useRef(0),v=function(){var d;s.current&&clearTimeout(s.current),(d=c.current)===null||d===void 0||d.call(c)};return L(function(){n||v()},[n]),n?{onBefore:function(){v()},onError:function(){i.current+=1},onSuccess:function(){i.current=0},onFinally:function(){o===-1||o!==-1&&i.current<=o?s.current=setTimeout(function(){!u&&!B()?c.current=ce(function(){e.refresh()}):e.refresh()},n):i.current=0},onCancel:function(){v()}}:{}};const de=le;function ve(e,t){var n=!1;return function(){for(var r=[],u=0;u<arguments.length;u++)r[u]=arguments[u];n||(n=!0,e.apply(void 0,p([],h(r),!1)),setTimeout(function(){n=!1},t))}}function he(){return D&&typeof navigator.onLine<"u"?navigator.onLine:!0}var T=[];function me(e){return T.push(e),function(){var n=T.indexOf(e);n>-1&&T.splice(n,1)}}if(D){var _=function(){if(!(!B()||!he()))for(var e=0;e<T.length;e++){var t=T[e];t()}};window.addEventListener("visibilitychange",_,!1),window.addEventListener("focus",_,!1)}var ge=function(e,t){var n=t.refreshOnWindowFocus,r=t.focusTimespan,u=r===void 0?5e3:r,a=React.useRef(),o=function(){var s;(s=a.current)===null||s===void 0||s.call(a)};return React.useEffect(function(){if(n){var s=ve(e.refresh.bind(e),u);a.current=me(function(){s()})}return function(){o()}},[n,u]),j(function(){o()}),{}};const pe=ge;var Re=function(e,t){var n=t.retryInterval,r=t.retryCount,u=React.useRef(),a=React.useRef(0),o=React.useRef(!1);return r?{onBefore:function(){o.current||(a.current=0),o.current=!1,u.current&&clearTimeout(u.current)},onSuccess:function(){a.current=0},onError:function(){if(a.current+=1,r===-1||a.current<=r){var s=n??Math.min(1e3*Math.pow(2,a.current),3e4);u.current=setTimeout(function(){o.current=!0,e.refresh()},s)}else a.current=0},onCancel:function(){a.current=0,u.current&&clearTimeout(u.current)}}:{}};const be=Re;var ye=function(e,t){var n=t.throttleWait,r=t.throttleLeading,u=t.throttleTrailing,a=React.useRef(),o={};return r!==void 0&&(o.leading=r),u!==void 0&&(o.trailing=u),React.useEffect(function(){if(n){var s=e.runAsync.bind(e);return a.current=Q(function(c){c()},n,o),e.runAsync=function(){for(var c=[],i=0;i<arguments.length;i++)c[i]=arguments[i];return new Promise(function(v,d){var m;(m=a.current)===null||m===void 0||m.call(a,function(){s.apply(void 0,p([],h(c),!1)).then(v).catch(d)})})},function(){var c;e.runAsync=s,(c=a.current)===null||c===void 0||c.cancel()}}},[n,r,u]),n?{onCancel:function(){var s;(s=a.current)===null||s===void 0||s.cancel()}}:{}};const Pe=ye;var we=function(e){React.useEffect(function(){e?.()},[])},Se=function(){var e=h(React.useState({}),2),t=e[1];return React.useCallback(function(){return t({})},[])},Ce=function(){function e(t,n,r,u){u===void 0&&(u={}),this.serviceRef=t,this.options=n,this.subscribe=r,this.initState=u,this.count=0,this.state={loading:!1,params:void 0,data:void 0,error:void 0},this.state=R(R(R({},this.state),{loading:!n.manual}),u)}return e.prototype.setState=function(t){t===void 0&&(t={}),this.state=R(R({},this.state),t),this.subscribe()},e.prototype.runPluginHandler=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var u=this.pluginImpls.map(function(a){var o;return(o=a[t])===null||o===void 0?void 0:o.call.apply(o,p([a],h(n),!1))}).filter(Boolean);return Object.assign.apply(Object,p([{}],h(u),!1))},e.prototype.runAsync=function(){for(var t,n,r,u,a,o,s,c,i,v,d=[],m=0;m<arguments.length;m++)d[m]=arguments[m];return q(this,void 0,void 0,function(){var f,l,g,E,M,H,W,A,b,y,x;return J(this,function(S){switch(S.label){case 0:if(this.count+=1,f=this.count,l=this.runPluginHandler("onBefore",d),g=l.stopNow,E=g===void 0?!1:g,M=l.returnNow,H=M===void 0?!1:M,W=N(l,["stopNow","returnNow"]),E)return[2,new Promise(function(){})];if(this.setState(R({loading:!0,params:d},W)),H)return[2,Promise.resolve(W.data)];(n=(t=this.options).onBefore)===null||n===void 0||n.call(t,d),S.label=1;case 1:return S.trys.push([1,3,,4]),A=this.runPluginHandler("onRequest",this.serviceRef.current,d).servicePromise,A||(A=(x=this.serviceRef).current.apply(x,p([],h(d),!1))),[4,A];case 2:return b=S.sent(),f!==this.count?[2,new Promise(function(){})]:(this.setState({data:b,error:void 0,loading:!1}),(u=(r=this.options).onSuccess)===null||u===void 0||u.call(r,b,d),this.runPluginHandler("onSuccess",b,d),(o=(a=this.options).onFinally)===null||o===void 0||o.call(a,d,b,void 0),f===this.count&&this.runPluginHandler("onFinally",d,b,void 0),[2,b]);case 3:if(y=S.sent(),f!==this.count)return[2,new Promise(function(){})];throw this.setState({error:y,loading:!1}),(c=(s=this.options).onError)===null||c===void 0||c.call(s,y,d),this.runPluginHandler("onError",y,d),(v=(i=this.options).onFinally)===null||v===void 0||v.call(i,d,void 0,y),f===this.count&&this.runPluginHandler("onFinally",d,void 0,y),y;case 4:return[2]}})})},e.prototype.run=function(){for(var t=this,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];this.runAsync.apply(this,p([],h(n),!1)).catch(function(u){t.options.onError})},e.prototype.cancel=function(){this.count+=1,this.setState({loading:!1}),this.runPluginHandler("onCancel")},e.prototype.refresh=function(){this.run.apply(this,p([],h(this.state.params||[]),!1))},e.prototype.refreshAsync=function(){return this.runAsync.apply(this,p([],h(this.state.params||[]),!1))},e.prototype.mutate=function(t){var n=z(t)?t(this.state.data):t;this.runPluginHandler("onMutate",n),this.setState({data:n})},e}();const Te=Ce;function Ee(e,t,n){t===void 0&&(t={}),n===void 0&&(n=[]);var r=t.manual,u=r===void 0?!1:r,a=N(t,["manual"]),o=R({manual:u},a),s=V(e),c=Se(),i=G(function(){var v=n.map(function(d){var m;return(m=d?.onInit)===null||m===void 0?void 0:m.call(d,o)}).filter(Boolean);return new Te(s,o,c,Object.assign.apply(Object,p([{}],h(v),!1)))},[]);return i.options=o,i.pluginImpls=n.map(function(v){return v(i,o)}),we(function(){if(!u){var v=i.state.params||t.defaultParams||[];i.run.apply(i,p([],h(v),!1))}}),j(function(){i.cancel()}),{loading:i.state.loading,data:i.state.data,error:i.state.error,params:i.state.params||[],cancel:w(i.cancel.bind(i)),refresh:w(i.refresh.bind(i)),refreshAsync:w(i.refreshAsync.bind(i)),run:w(i.run.bind(i)),runAsync:w(i.runAsync.bind(i)),mutate:w(i.mutate.bind(i))}}function De(e,t,n){return Ee(e,t,p(p([],h(n||[]),!1),[ae,se,de,pe,Pe,Y,ue,be],!1))}var Ae=function(){var e=React.useRef(!1);return React.useEffect(function(){return e.current=!1,function(){e.current=!0}},[]),e};function Me(e){var t=Ae(),n=h(React.useState(e),2),r=n[0],u=n[1],a=React.useCallback(function(o){t.current||u(o)},[]);return[r,a]}var We=function(e){var t=h(React.useState(e),2),n=t[0],r=t[1],u=React.useCallback(function(a){r(function(o){var s=z(a)?a(o):a;return s?R(R({},o),s):o})},[]);return[n,u]};export{Me as a,We as b,L as c,De as u};