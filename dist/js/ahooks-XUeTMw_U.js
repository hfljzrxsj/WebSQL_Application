import{_ as p,a as m,b as R,c as q,d as J,e as _}from"./tslib-g6pQwBLH.js";import{d as K,t as Q}from"./lodash-JD0k9kaZ.js";var X=function(e){return function(n,r){var t=React.useRef(!1);e(function(){return function(){t.current=!1}},[]),e(function(){if(!t.current)t.current=!0;else return n()},r)}},z=function(e){return typeof e=="function"};function w(e){var n=React.useRef(e);n.current=React.useMemo(function(){return e},[e]);var r=React.useRef();return r.current||(r.current=function(){for(var t=[],u=0;u<arguments.length;u++)t[u]=arguments[u];return n.current.apply(this,t)}),r.current}const L=X(React.useEffect);var U=function(e,n){var r=n.manual,t=n.ready,u=t===void 0?!0:t,a=n.defaultParams,o=a===void 0?[]:a,s=n.refreshDeps,c=s===void 0?[]:s,i=n.refreshDepsAction,v=React.useRef(!1);return v.current=!1,L(function(){!r&&u&&(v.current=!0,e.run.apply(e,p([],m(o),!1)))},[u]),L(function(){v.current||r||(v.current=!0,i?i():e.refresh())},p([],m(c),!1)),{onBefore:function(){if(!u)return{stopNow:!0}}}};U.onInit=function(e){var n=e.ready,r=n===void 0?!0:n,t=e.manual;return{loading:!t&&r}};const Y=U;function Z(e,n){if(e===n)return!0;for(var r=0;r<e.length;r++)if(!Object.is(e[r],n[r]))return!1;return!0}function G(e,n){var r=React.useRef({deps:n,obj:void 0,initialized:!1}).current;return(r.initialized===!1||!Z(r.deps,n))&&(r.deps=n,r.obj=e(),r.initialized=!0),r.obj}function V(e){var n=React.useRef(e);return n.current=e,n}var j=function(e){var n=V(e);React.useEffect(function(){return function(){n.current()}},[])},O=new Map,k=function(e,n,r){var t=O.get(e);t!=null&&t.timer&&clearTimeout(t.timer);var u=void 0;n>-1&&(u=setTimeout(function(){O.delete(e)},n)),O.set(e,R(R({},r),{timer:u}))},I=function(e){return O.get(e)},F=new Map,ee=function(e){return F.get(e)},ne=function(e,n){F.set(e,n),n.then(function(r){return F.delete(e),r}).catch(function(){F.delete(e)})},P={},re=function(e,n){P[e]&&P[e].forEach(function(r){return r(n)})},W=function(e,n){return P[e]||(P[e]=[]),P[e].push(n),function(){var t=P[e].indexOf(n);P[e].splice(t,1)}},te=function(e,n){var r=n.cacheKey,t=n.cacheTime,u=t===void 0?5*60*1e3:t,a=n.staleTime,o=a===void 0?0:a,s=n.setCache,c=n.getCache,i=React.useRef(),v=React.useRef(),d=function(f,l){s?s(l):k(f,u,l),re(f,l.data)},h=function(f,l){return l===void 0&&(l=[]),c?c(l):I(f)};return G(function(){if(r){var f=h(r);f&&Object.hasOwnProperty.call(f,"data")&&(e.state.data=f.data,e.state.params=f.params,(o===-1||new Date().getTime()-f.time<=o)&&(e.state.loading=!1)),i.current=W(r,function(l){e.setState({data:l})})}},[]),j(function(){var f;(f=i.current)===null||f===void 0||f.call(i)}),r?{onBefore:function(f){var l=h(r,f);return!l||!Object.hasOwnProperty.call(l,"data")?{}:o===-1||new Date().getTime()-l.time<=o?{loading:!1,data:l==null?void 0:l.data,error:void 0,returnNow:!0}:{data:l==null?void 0:l.data,error:void 0}},onRequest:function(f,l){var g=ee(r);return g&&g!==v.current?{servicePromise:g}:(g=f.apply(void 0,p([],m(l),!1)),v.current=g,ne(r,g),{servicePromise:g})},onSuccess:function(f,l){var g;r&&((g=i.current)===null||g===void 0||g.call(i),d(r,{data:f,params:l,time:new Date().getTime()}),i.current=W(r,function(E){e.setState({data:E})}))},onMutate:function(f){var l;r&&((l=i.current)===null||l===void 0||l.call(i),d(r,{data:f,params:e.state.params,time:new Date().getTime()}),i.current=W(r,function(g){e.setState({data:g})}))}}:{}};const ue=te;var ie=function(e,n){var r=n.debounceWait,t=n.debounceLeading,u=n.debounceTrailing,a=n.debounceMaxWait,o=React.useRef(),s=React.useMemo(function(){var c={};return t!==void 0&&(c.leading=t),u!==void 0&&(c.trailing=u),a!==void 0&&(c.maxWait=a),c},[t,u,a]);return React.useEffect(function(){if(r){var c=e.runAsync.bind(e);return o.current=K(function(i){i()},r,s),e.runAsync=function(){for(var i=[],v=0;v<arguments.length;v++)i[v]=arguments[v];return new Promise(function(d,h){var f;(f=o.current)===null||f===void 0||f.call(o,function(){c.apply(void 0,p([],m(i),!1)).then(d).catch(h)})})},function(){var i;(i=o.current)===null||i===void 0||i.cancel(),e.runAsync=c}}},[r,s]),r?{onCancel:function(){var c;(c=o.current)===null||c===void 0||c.cancel()}}:{}};const ae=ie;var oe=function(e,n){var r=n.loadingDelay,t=n.ready,u=React.useRef();if(!r)return{};var a=function(){u.current&&clearTimeout(u.current)};return{onBefore:function(){return a(),t!==!1&&(u.current=setTimeout(function(){e.setState({loading:!0})},r)),{loading:!1}},onFinally:function(){a()},onCancel:function(){a()}}};const se=oe;var D=!!(typeof window<"u"&&window.document&&window.document.createElement);function B(){return D?document.visibilityState!=="hidden":!0}var S=[];function ce(e){return S.push(e),function(){var r=S.indexOf(e);S.splice(r,1)}}if(D){var fe=function(){if(B())for(var e=0;e<S.length;e++){var n=S[e];n()}};window.addEventListener("visibilitychange",fe,!1)}var le=function(e,n){var r=n.pollingInterval,t=n.pollingWhenHidden,u=t===void 0?!0:t,a=n.pollingErrorRetryCount,o=a===void 0?-1:a,s=React.useRef(),c=React.useRef(),i=React.useRef(0),v=function(){var d;s.current&&clearTimeout(s.current),(d=c.current)===null||d===void 0||d.call(c)};return L(function(){r||v()},[r]),r?{onBefore:function(){v()},onError:function(){i.current+=1},onSuccess:function(){i.current=0},onFinally:function(){o===-1||o!==-1&&i.current<=o?s.current=setTimeout(function(){!u&&!B()?c.current=ce(function(){e.refresh()}):e.refresh()},r):i.current=0},onCancel:function(){v()}}:{}};const de=le;function ve(e,n){var r=!1;return function(){for(var t=[],u=0;u<arguments.length;u++)t[u]=arguments[u];r||(r=!0,e.apply(void 0,p([],m(t),!1)),setTimeout(function(){r=!1},n))}}function he(){return D&&typeof navigator.onLine<"u"?navigator.onLine:!0}var T=[];function ge(e){return T.push(e),function(){var r=T.indexOf(e);r>-1&&T.splice(r,1)}}if(D){var N=function(){if(!(!B()||!he()))for(var e=0;e<T.length;e++){var n=T[e];n()}};window.addEventListener("visibilitychange",N,!1),window.addEventListener("focus",N,!1)}var me=function(e,n){var r=n.refreshOnWindowFocus,t=n.focusTimespan,u=t===void 0?5e3:t,a=React.useRef(),o=function(){var s;(s=a.current)===null||s===void 0||s.call(a)};return React.useEffect(function(){if(r){var s=ve(e.refresh.bind(e),u);a.current=ge(function(){s()})}return function(){o()}},[r,u]),j(function(){o()}),{}};const pe=me;var Re=function(e,n){var r=n.retryInterval,t=n.retryCount,u=React.useRef(),a=React.useRef(0),o=React.useRef(!1);return t?{onBefore:function(){o.current||(a.current=0),o.current=!1,u.current&&clearTimeout(u.current)},onSuccess:function(){a.current=0},onError:function(){if(a.current+=1,t===-1||a.current<=t){var s=r!=null?r:Math.min(1e3*Math.pow(2,a.current),3e4);u.current=setTimeout(function(){o.current=!0,e.refresh()},s)}else a.current=0},onCancel:function(){a.current=0,u.current&&clearTimeout(u.current)}}:{}};const be=Re;var ye=function(e,n){var r=n.throttleWait,t=n.throttleLeading,u=n.throttleTrailing,a=React.useRef(),o={};return t!==void 0&&(o.leading=t),u!==void 0&&(o.trailing=u),React.useEffect(function(){if(r){var s=e.runAsync.bind(e);return a.current=Q(function(c){c()},r,o),e.runAsync=function(){for(var c=[],i=0;i<arguments.length;i++)c[i]=arguments[i];return new Promise(function(v,d){var h;(h=a.current)===null||h===void 0||h.call(a,function(){s.apply(void 0,p([],m(c),!1)).then(v).catch(d)})})},function(){var c;e.runAsync=s,(c=a.current)===null||c===void 0||c.cancel()}}},[r,t,u]),r?{onCancel:function(){var s;(s=a.current)===null||s===void 0||s.cancel()}}:{}};const Pe=ye;var we=function(e){React.useEffect(function(){e==null||e()},[])},Ce=function(){var e=m(React.useState({}),2),n=e[1];return React.useCallback(function(){return n({})},[])},Se=function(){function e(n,r,t,u){u===void 0&&(u={}),this.serviceRef=n,this.options=r,this.subscribe=t,this.initState=u,this.count=0,this.state={loading:!1,params:void 0,data:void 0,error:void 0},this.state=R(R(R({},this.state),{loading:!r.manual}),u)}return e.prototype.setState=function(n){n===void 0&&(n={}),this.state=R(R({},this.state),n),this.subscribe()},e.prototype.runPluginHandler=function(n){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];var u=this.pluginImpls.map(function(a){var o;return(o=a[n])===null||o===void 0?void 0:o.call.apply(o,p([a],m(r),!1))}).filter(Boolean);return Object.assign.apply(Object,p([{}],m(u),!1))},e.prototype.runAsync=function(){for(var n,r,t,u,a,o,s,c,i,v,d=[],h=0;h<arguments.length;h++)d[h]=arguments[h];return q(this,void 0,void 0,function(){var f,l,g,E,M,H,$,A,b,y,x;return J(this,function(C){switch(C.label){case 0:if(this.count+=1,f=this.count,l=this.runPluginHandler("onBefore",d),g=l.stopNow,E=g===void 0?!1:g,M=l.returnNow,H=M===void 0?!1:M,$=_(l,["stopNow","returnNow"]),E)return[2,new Promise(function(){})];if(this.setState(R({loading:!0,params:d},$)),H)return[2,Promise.resolve($.data)];(r=(n=this.options).onBefore)===null||r===void 0||r.call(n,d),C.label=1;case 1:return C.trys.push([1,3,,4]),A=this.runPluginHandler("onRequest",this.serviceRef.current,d).servicePromise,A||(A=(x=this.serviceRef).current.apply(x,p([],m(d),!1))),[4,A];case 2:return b=C.sent(),f!==this.count?[2,new Promise(function(){})]:(this.setState({data:b,error:void 0,loading:!1}),(u=(t=this.options).onSuccess)===null||u===void 0||u.call(t,b,d),this.runPluginHandler("onSuccess",b,d),(o=(a=this.options).onFinally)===null||o===void 0||o.call(a,d,b,void 0),f===this.count&&this.runPluginHandler("onFinally",d,b,void 0),[2,b]);case 3:if(y=C.sent(),f!==this.count)return[2,new Promise(function(){})];throw this.setState({error:y,loading:!1}),(c=(s=this.options).onError)===null||c===void 0||c.call(s,y,d),this.runPluginHandler("onError",y,d),(v=(i=this.options).onFinally)===null||v===void 0||v.call(i,d,void 0,y),f===this.count&&this.runPluginHandler("onFinally",d,void 0,y),y;case 4:return[2]}})})},e.prototype.run=function(){for(var n=this,r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];this.runAsync.apply(this,p([],m(r),!1)).catch(function(u){n.options.onError})},e.prototype.cancel=function(){this.count+=1,this.setState({loading:!1}),this.runPluginHandler("onCancel")},e.prototype.refresh=function(){this.run.apply(this,p([],m(this.state.params||[]),!1))},e.prototype.refreshAsync=function(){return this.runAsync.apply(this,p([],m(this.state.params||[]),!1))},e.prototype.mutate=function(n){var r=z(n)?n(this.state.data):n;this.runPluginHandler("onMutate",r),this.setState({data:r})},e}();const Te=Se;function Ee(e,n,r){n===void 0&&(n={}),r===void 0&&(r=[]);var t=n.manual,u=t===void 0?!1:t,a=_(n,["manual"]),o=R({manual:u},a),s=V(e),c=Ce(),i=G(function(){var v=r.map(function(d){var h;return(h=d==null?void 0:d.onInit)===null||h===void 0?void 0:h.call(d,o)}).filter(Boolean);return new Te(s,o,c,Object.assign.apply(Object,p([{}],m(v),!1)))},[]);return i.options=o,i.pluginImpls=r.map(function(v){return v(i,o)}),we(function(){if(!u){var v=i.state.params||n.defaultParams||[];i.run.apply(i,p([],m(v),!1))}}),j(function(){i.cancel()}),{loading:i.state.loading,data:i.state.data,error:i.state.error,params:i.state.params||[],cancel:w(i.cancel.bind(i)),refresh:w(i.refresh.bind(i)),refreshAsync:w(i.refreshAsync.bind(i)),run:w(i.run.bind(i)),runAsync:w(i.runAsync.bind(i)),mutate:w(i.mutate.bind(i))}}function De(e,n,r){return Ee(e,n,p(p([],m(r||[]),!1),[ae,se,de,pe,Pe,Y,ue,be],!1))}var Ae=function(e){var n=m(React.useState(e),2),r=n[0],t=n[1],u=React.useCallback(function(a){t(function(o){var s=z(a)?a(o):a;return s?R(R({},o),s):o})},[]);return[r,u]};const Me=Ae;export{we as a,De as b,L as c,Me as u};
