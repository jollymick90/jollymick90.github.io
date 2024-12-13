var sc=Object.defineProperty;var oc=(i,e,t)=>e in i?sc(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Ve=(i,e,t)=>oc(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();/*! jQuery v1.7.2 jquery.com | jquery.org/license */(function(i,e){function t(s){return c.isWindow(s)?s:s.nodeType===9?s.defaultView||s.parentWindow:!1}function n(s){if(!qt[s]){var a=X.body,f=c("<"+s+">").appendTo(a),m=f.css("display");f.remove(),(m==="none"||m==="")&&(gt||(gt=X.createElement("iframe"),gt.frameBorder=gt.width=gt.height=0),a.appendChild(gt),(!nn||!gt.createElement)&&(nn=(gt.contentWindow||gt.contentDocument).document,nn.write((c.support.boxModel?"<!doctype html>":"")+"<html><body>"),nn.close()),f=nn.createElement(s),nn.body.appendChild(f),m=c.css(f,"display"),a.removeChild(gt)),qt[s]=m}return qt[s]}function r(s,a){var f={};return c.each(It.concat.apply([],It.slice(0,a)),function(){f[this]=s}),f}function o(){sn=e}function l(){return setTimeout(o,0),sn=c.now()}function u(){try{return new i.ActiveXObject("Microsoft.XMLHTTP")}catch{}}function h(){try{return new i.XMLHttpRequest}catch{}}function p(s,a){s.dataFilter&&(a=s.dataFilter(a,s.dataType));var f=s.dataTypes,m={},y,E,L=f.length,N,j=f[0],q,ae,V,ye,ie;for(y=1;y<L;y++){if(y===1)for(E in s.converters)typeof E=="string"&&(m[E.toLowerCase()]=s.converters[E]);if(q=j,j=f[y],j==="*")j=q;else if(q!=="*"&&q!==j){if(ae=q+" "+j,V=m[ae]||m["* "+j],!V){ie=e;for(ye in m)if(N=ye.split(" "),(N[0]===q||N[0]==="*")&&(ie=m[N[1]+" "+j],ie)){ye=m[ye],ye===!0?V=ie:ie===!0&&(V=ye);break}}!V&&!ie&&c.error("No conversion from "+ae.replace(" "," to ")),V!==!0&&(a=V?V(a):ie(ye(a)))}}return a}function d(s,a,f){var m=s.contents,y=s.dataTypes,E=s.responseFields,L,N,j,q;for(N in E)N in f&&(a[E[N]]=f[N]);for(;y[0]==="*";)y.shift(),L===e&&(L=s.mimeType||a.getResponseHeader("content-type"));if(L){for(N in m)if(m[N]&&m[N].test(L)){y.unshift(N);break}}if(y[0]in f)j=y[0];else{for(N in f){if(!y[0]||s.converters[N+" "+y[0]]){j=N;break}q||(q=N)}j=j||q}if(j)return j!==y[0]&&y.unshift(j),f[j]}function _(s,a,f,m){if(c.isArray(a))c.each(a,function(E,L){f||Or.test(s)?m(s,L):_(s+"["+(typeof L=="object"?E:"")+"]",L,f,m)});else if(!f&&c.type(a)==="object")for(var y in a)_(s+"["+y+"]",a[y],f,m);else m(s,a)}function v(s,a){var f,m,y=c.ajaxSettings.flatOptions||{};for(f in a)a[f]!==e&&((y[f]?s:m||(m={}))[f]=a[f]);m&&c.extend(!0,s,m)}function x(s,a,f,m,y,E){y=y||a.dataTypes[0],E=E||{},E[y]=!0;for(var L=s[y],N=0,j=L?L.length:0,q=s===$e,ae;N<j&&(q||!ae);N++)ae=L[N](a,f,m),typeof ae=="string"&&(!q||E[ae]?ae=e:(a.dataTypes.unshift(ae),ae=x(s,a,f,m,ae,E)));return(q||!ae)&&!E["*"]&&(ae=x(s,a,f,m,"*",E)),ae}function S(s){return function(a,f){if(typeof a!="string"&&(f=a,a="*"),c.isFunction(f))for(var m=a.toLowerCase().split(J),y=0,E=m.length,L,N,j;y<E;y++)L=m[y],j=/^\+/.test(L),j&&(L=L.substr(1)||"*"),N=s[L]=s[L]||[],N[j?"unshift":"push"](f)}}function w(s,a,f){var m=a==="width"?s.offsetWidth:s.offsetHeight,y=a==="width"?1:0,E=4;if(m>0){if(f!=="border")for(;y<E;y+=2)f||(m-=parseFloat(c.css(s,"padding"+On[y]))||0),f==="margin"?m+=parseFloat(c.css(s,f+On[y]))||0:m-=parseFloat(c.css(s,"border"+On[y]+"Width"))||0;return m+"px"}if(m=Xn(s,a),(m<0||m==null)&&(m=s.style[a]),Fi.test(m))return m;if(m=parseFloat(m)||0,f)for(;y<E;y+=2)m+=parseFloat(c.css(s,"padding"+On[y]))||0,f!=="padding"&&(m+=parseFloat(c.css(s,"border"+On[y]+"Width"))||0),f==="margin"&&(m+=parseFloat(c.css(s,f+On[y]))||0);return m+"px"}function M(s){var a=X.createElement("div");return Ht.appendChild(a),a.innerHTML=s.outerHTML,a.firstChild}function g(s){var a=(s.nodeName||"").toLowerCase();a==="input"?I(s):a!=="script"&&typeof s.getElementsByTagName<"u"&&c.grep(s.getElementsByTagName("input"),I)}function I(s){(s.type==="checkbox"||s.type==="radio")&&(s.defaultChecked=s.checked)}function D(s){return typeof s.getElementsByTagName<"u"?s.getElementsByTagName("*"):typeof s.querySelectorAll<"u"?s.querySelectorAll("*"):[]}function A(s,a){var f;a.nodeType===1&&(a.clearAttributes&&a.clearAttributes(),a.mergeAttributes&&a.mergeAttributes(s),f=a.nodeName.toLowerCase(),f==="object"?a.outerHTML=s.outerHTML:f!=="input"||s.type!=="checkbox"&&s.type!=="radio"?f==="option"?a.selected=s.defaultSelected:f==="input"||f==="textarea"?a.defaultValue=s.defaultValue:f==="script"&&a.text!==s.text&&(a.text=s.text):(s.checked&&(a.defaultChecked=a.checked=s.checked),a.value!==s.value&&(a.value=s.value)),a.removeAttribute(c.expando),a.removeAttribute("_submit_attached"),a.removeAttribute("_change_attached"))}function B(s,a){if(a.nodeType===1&&c.hasData(s)){var f,m,y,E=c._data(s),L=c._data(a,E),N=E.events;if(N){delete L.handle,L.events={};for(f in N)for(m=0,y=N[f].length;m<y;m++)c.event.add(a,f,N[f][m])}L.data&&(L.data=c.extend({},L.data))}}function z(s,a){return c.nodeName(s,"table")?s.getElementsByTagName("tbody")[0]||s.appendChild(s.ownerDocument.createElement("tbody")):s}function U(s){var a=He.split("|"),f=s.createDocumentFragment();if(f.createElement)for(;a.length;)f.createElement(a.pop());return f}function O(s,a,f){if(a=a||0,c.isFunction(a))return c.grep(s,function(y,E){var L=!!a.call(y,E,y);return L===f});if(a.nodeType)return c.grep(s,function(y,E){return y===a===f});if(typeof a=="string"){var m=c.grep(s,function(y){return y.nodeType===1});if(Le.test(a))return c.filter(a,m,!f);a=c.filter(a,m)}return c.grep(s,function(y,E){return c.inArray(y,a)>=0===f})}function C(s){return!s||!s.parentNode||s.parentNode.nodeType===11}function b(){return!0}function k(){return!1}function ee(s,a,f){var m=a+"defer",y=a+"queue",E=a+"mark",L=c._data(s,m);L&&(f==="queue"||!c._data(s,y))&&(f==="mark"||!c._data(s,E))&&setTimeout(function(){!c._data(s,y)&&!c._data(s,E)&&(c.removeData(s,m,!0),L.fire())},0)}function Q(s){for(var a in s)if(!(a==="data"&&c.isEmptyObject(s[a]))&&a!=="toJSON")return!1;return!0}function ue(s,a,f){if(f===e&&s.nodeType===1){var m="data-"+a.replace(Ct,"-$1").toLowerCase();if(f=s.getAttribute(m),typeof f=="string"){try{f=f==="true"?!0:f==="false"?!1:f==="null"?null:c.isNumeric(f)?+f:rt.test(f)?c.parseJSON(f):f}catch{}c.data(s,a,f)}else f=e}return f}function ve(s){var a=Ue[s]={},f,m;for(s=s.split(/\s+/),f=0,m=s.length;f<m;f++)a[s[f]]=!0;return a}var X=i.document,Me=i.navigator,he=i.location,c=function(){function s(){if(!a.isReady){try{X.documentElement.doScroll("left")}catch{setTimeout(s,1);return}a.ready()}}var a=function(H,de){return new a.fn.init(H,de,y)},f=i.jQuery,m=i.$,y,E=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,L=/\S/,N=/^\s+/,j=/\s+$/,q=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,ae=/^[\],:{}\s]*$/,V=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,ye=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,ie=/(?:^|:|,)(?:\s*\[)+/g,Be=/(webkit)[ \/]([\w.]+)/,ze=/(opera)(?:.*version)?[ \/]([\w.]+)/,it=/(msie) ([\w.]+)/,Je=/(mozilla)(?:.*? rv:([\w.]+))?/,Wt=/-([a-z]|[0-9])/ig,Xt=/^-ms-/,ft=function(H,de){return(de+"").toUpperCase()},P=Me.userAgent,G,ne,re,_e=Object.prototype.toString,pe=Object.prototype.hasOwnProperty,Se=Array.prototype.push,Ae=Array.prototype.slice,De=String.prototype.trim,je=Array.prototype.indexOf,ln={};return a.fn=a.prototype={constructor:a,init:function(H,de,Ce){var we,ke,St,Ut;if(!H)return this;if(H.nodeType)return this.context=this[0]=H,this.length=1,this;if(H==="body"&&!de&&X.body)return this.context=X,this[0]=X.body,this.selector=H,this.length=1,this;if(typeof H=="string"){if(H.charAt(0)!=="<"||H.charAt(H.length-1)!==">"||H.length<3?we=E.exec(H):we=[null,H,null],we&&(we[1]||!de)){if(we[1])return de=de instanceof a?de[0]:de,Ut=de?de.ownerDocument||de:X,St=q.exec(H),St?a.isPlainObject(de)?(H=[X.createElement(St[1])],a.fn.attr.call(H,de,!0)):H=[Ut.createElement(St[1])]:(St=a.buildFragment([we[1]],[Ut]),H=(St.cacheable?a.clone(St.fragment):St.fragment).childNodes),a.merge(this,H);if(ke=X.getElementById(we[2]),ke&&ke.parentNode){if(ke.id!==we[2])return Ce.find(H);this.length=1,this[0]=ke}return this.context=X,this.selector=H,this}return!de||de.jquery?(de||Ce).find(H):this.constructor(de).find(H)}return a.isFunction(H)?Ce.ready(H):(H.selector!==e&&(this.selector=H.selector,this.context=H.context),a.makeArray(H,this))},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return Ae.call(this,0)},get:function(H){return H==null?this.toArray():H<0?this[this.length+H]:this[H]},pushStack:function(H,de,Ce){var we=this.constructor();return a.isArray(H)?Se.apply(we,H):a.merge(we,H),we.prevObject=this,we.context=this.context,de==="find"?we.selector=this.selector+(this.selector?" ":"")+Ce:de&&(we.selector=this.selector+"."+de+"("+Ce+")"),we},each:function(H,de){return a.each(this,H,de)},ready:function(H){return a.bindReady(),ne.add(H),this},eq:function(H){return H=+H,H===-1?this.slice(H):this.slice(H,H+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(Ae.apply(this,arguments),"slice",Ae.call(arguments).join(","))},map:function(H){return this.pushStack(a.map(this,function(de,Ce){return H.call(de,Ce,de)}))},end:function(){return this.prevObject||this.constructor(null)},push:Se,sort:[].sort,splice:[].splice},a.fn.init.prototype=a.fn,a.extend=a.fn.extend=function(){var H,de,Ce,we,ke,St,Ut=arguments[0]||{},Zt=1,yi=arguments.length,yn=!1;for(typeof Ut=="boolean"&&(yn=Ut,Ut=arguments[1]||{},Zt=2),typeof Ut!="object"&&!a.isFunction(Ut)&&(Ut={}),yi===Zt&&(Ut=this,--Zt);Zt<yi;Zt++)if((H=arguments[Zt])!=null)for(de in H)Ce=Ut[de],we=H[de],Ut!==we&&(yn&&we&&(a.isPlainObject(we)||(ke=a.isArray(we)))?(ke?(ke=!1,St=Ce&&a.isArray(Ce)?Ce:[]):St=Ce&&a.isPlainObject(Ce)?Ce:{},Ut[de]=a.extend(yn,St,we)):we!==e&&(Ut[de]=we));return Ut},a.extend({noConflict:function(H){return i.$===a&&(i.$=m),H&&i.jQuery===a&&(i.jQuery=f),a},isReady:!1,readyWait:1,holdReady:function(H){H?a.readyWait++:a.ready(!0)},ready:function(H){if(H===!0&&!--a.readyWait||H!==!0&&!a.isReady){if(!X.body)return setTimeout(a.ready,1);if(a.isReady=!0,H!==!0&&--a.readyWait>0)return;ne.fireWith(X,[a]),a.fn.trigger&&a(X).trigger("ready").off("ready")}},bindReady:function(){if(!ne){if(ne=a.Callbacks("once memory"),X.readyState==="complete")return setTimeout(a.ready,1);if(X.addEventListener)X.addEventListener("DOMContentLoaded",re,!1),i.addEventListener("load",a.ready,!1);else if(X.attachEvent){X.attachEvent("onreadystatechange",re),i.attachEvent("onload",a.ready);var H=!1;try{H=i.frameElement==null}catch{}X.documentElement.doScroll&&H&&s()}}},isFunction:function(H){return a.type(H)==="function"},isArray:Array.isArray||function(H){return a.type(H)==="array"},isWindow:function(H){return H!=null&&H==H.window},isNumeric:function(H){return!isNaN(parseFloat(H))&&isFinite(H)},type:function(H){return H==null?String(H):ln[_e.call(H)]||"object"},isPlainObject:function(H){if(!H||a.type(H)!=="object"||H.nodeType||a.isWindow(H))return!1;try{if(H.constructor&&!pe.call(H,"constructor")&&!pe.call(H.constructor.prototype,"isPrototypeOf"))return!1}catch{return!1}var de;for(de in H);return de===e||pe.call(H,de)},isEmptyObject:function(H){for(var de in H)return!1;return!0},error:function(H){throw new Error(H)},parseJSON:function(H){if(typeof H!="string"||!H)return null;if(H=a.trim(H),i.JSON&&i.JSON.parse)return i.JSON.parse(H);if(ae.test(H.replace(V,"@").replace(ye,"]").replace(ie,"")))return new Function("return "+H)();a.error("Invalid JSON: "+H)},parseXML:function(H){if(typeof H!="string"||!H)return null;var de,Ce;try{i.DOMParser?(Ce=new DOMParser,de=Ce.parseFromString(H,"text/xml")):(de=new ActiveXObject("Microsoft.XMLDOM"),de.async="false",de.loadXML(H))}catch{de=e}return(!de||!de.documentElement||de.getElementsByTagName("parsererror").length)&&a.error("Invalid XML: "+H),de},noop:function(){},globalEval:function(H){H&&L.test(H)&&(i.execScript||function(de){i.eval.call(i,de)})(H)},camelCase:function(H){return H.replace(Xt,"ms-").replace(Wt,ft)},nodeName:function(H,de){return H.nodeName&&H.nodeName.toUpperCase()===de.toUpperCase()},each:function(H,de,Ce){var we,ke=0,St=H.length,Ut=St===e||a.isFunction(H);if(Ce)if(Ut){for(we in H)if(de.apply(H[we],Ce)===!1)break}else for(;ke<St&&de.apply(H[ke++],Ce)!==!1;);else if(Ut){for(we in H)if(de.call(H[we],we,H[we])===!1)break}else for(;ke<St&&de.call(H[ke],ke,H[ke++])!==!1;);return H},trim:De?function(H){return H==null?"":De.call(H)}:function(H){return H==null?"":(H+"").replace(N,"").replace(j,"")},makeArray:function(H,de){var Ce=de||[];if(H!=null){var we=a.type(H);H.length==null||we==="string"||we==="function"||we==="regexp"||a.isWindow(H)?Se.call(Ce,H):a.merge(Ce,H)}return Ce},inArray:function(H,de,Ce){var we;if(de){if(je)return je.call(de,H,Ce);for(we=de.length,Ce=Ce?Ce<0?Math.max(0,we+Ce):Ce:0;Ce<we;Ce++)if(Ce in de&&de[Ce]===H)return Ce}return-1},merge:function(H,de){var Ce=H.length,we=0;if(typeof de.length=="number")for(var ke=de.length;we<ke;we++)H[Ce++]=de[we];else for(;de[we]!==e;)H[Ce++]=de[we++];return H.length=Ce,H},grep:function(H,de,Ce){var we=[],ke;Ce=!!Ce;for(var St=0,Ut=H.length;St<Ut;St++)ke=!!de(H[St],St),Ce!==ke&&we.push(H[St]);return we},map:function(H,de,Ce){var we,ke,St=[],Ut=0,Zt=H.length,yi=H instanceof a||Zt!==e&&typeof Zt=="number"&&(Zt>0&&H[0]&&H[Zt-1]||Zt===0||a.isArray(H));if(yi)for(;Ut<Zt;Ut++)we=de(H[Ut],Ut,Ce),we!=null&&(St[St.length]=we);else for(ke in H)we=de(H[ke],ke,Ce),we!=null&&(St[St.length]=we);return St.concat.apply([],St)},guid:1,proxy:function(H,de){if(typeof de=="string"){var Ce=H[de];de=H,H=Ce}if(!a.isFunction(H))return e;var we=Ae.call(arguments,2),ke=function(){return H.apply(de,we.concat(Ae.call(arguments)))};return ke.guid=H.guid=H.guid||ke.guid||a.guid++,ke},access:function(H,de,Ce,we,ke,St,Ut){var Zt,yi=Ce==null,yn=0,ga=H.length;if(Ce&&typeof Ce=="object"){for(yn in Ce)a.access(H,de,yn,Ce[yn],1,St,we);ke=1}else if(we!==e){if(Zt=Ut===e&&a.isFunction(we),yi&&(Zt?(Zt=de,de=function(ic,Nm,rc){return Zt.call(a(ic),rc)}):(de.call(H,we),de=null)),de)for(;yn<ga;yn++)de(H[yn],Ce,Zt?we.call(H[yn],yn,de(H[yn],Ce)):we,Ut);ke=1}return ke?H:yi?de.call(H):ga?de(H[0],Ce):St},now:function(){return new Date().getTime()},uaMatch:function(H){H=H.toLowerCase();var de=Be.exec(H)||ze.exec(H)||it.exec(H)||H.indexOf("compatible")<0&&Je.exec(H)||[];return{browser:de[1]||"",version:de[2]||"0"}},sub:function(){function H(Ce,we){return new H.fn.init(Ce,we)}a.extend(!0,H,this),H.superclass=this,H.fn=H.prototype=this(),H.fn.constructor=H,H.sub=this.sub,H.fn.init=function(Ce,we){return we&&we instanceof a&&!(we instanceof H)&&(we=H(we)),a.fn.init.call(this,Ce,we,de)},H.fn.init.prototype=H.fn;var de=H(X);return H},browser:{}}),a.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(H,de){ln["[object "+de+"]"]=de.toLowerCase()}),G=a.uaMatch(P),G.browser&&(a.browser[G.browser]=!0,a.browser.version=G.version),a.browser.webkit&&(a.browser.safari=!0),L.test(" ")&&(N=/^[\s\xA0]+/,j=/[\s\xA0]+$/),y=a(X),X.addEventListener?re=function(){X.removeEventListener("DOMContentLoaded",re,!1),a.ready()}:X.attachEvent&&(re=function(){X.readyState==="complete"&&(X.detachEvent("onreadystatechange",re),a.ready())}),a}(),Ue={};c.Callbacks=function(s){s=s?Ue[s]||ve(s):{};var a=[],f=[],m,y,E,L,N,j,q=function(ye){var ie,Be,ze,it;for(ie=0,Be=ye.length;ie<Be;ie++)ze=ye[ie],it=c.type(ze),it==="array"?q(ze):it==="function"&&(!s.unique||!V.has(ze))&&a.push(ze)},ae=function(ye,ie){for(ie=ie||[],m=!s.memory||[ye,ie],y=!0,E=!0,j=L||0,L=0,N=a.length;a&&j<N;j++)if(a[j].apply(ye,ie)===!1&&s.stopOnFalse){m=!0;break}E=!1,a&&(s.once?m===!0?V.disable():a=[]:f&&f.length&&(m=f.shift(),V.fireWith(m[0],m[1])))},V={add:function(){if(a){var ye=a.length;q(arguments),E?N=a.length:m&&m!==!0&&(L=ye,ae(m[0],m[1]))}return this},remove:function(){if(a)for(var ye=arguments,ie=0,Be=ye.length;ie<Be;ie++)for(var ze=0;ze<a.length&&!(ye[ie]===a[ze]&&(E&&ze<=N&&(N--,ze<=j&&j--),a.splice(ze--,1),s.unique));ze++);return this},has:function(ye){if(a){for(var ie=0,Be=a.length;ie<Be;ie++)if(ye===a[ie])return!0}return!1},empty:function(){return a=[],this},disable:function(){return a=f=m=e,this},disabled:function(){return!a},lock:function(){return f=e,(!m||m===!0)&&V.disable(),this},locked:function(){return!f},fireWith:function(ye,ie){return f&&(E?s.once||f.push([ye,ie]):(!s.once||!m)&&ae(ye,ie)),this},fire:function(){return V.fireWith(this,arguments),this},fired:function(){return!!y}};return V};var We=[].slice;c.extend({Deferred:function(s){var a=c.Callbacks("once memory"),f=c.Callbacks("once memory"),m=c.Callbacks("memory"),y="pending",E={resolve:a,reject:f,notify:m},L={done:a.add,fail:f.add,progress:m.add,state:function(){return y},isResolved:a.fired,isRejected:f.fired,then:function(q,ae,V){return N.done(q).fail(ae).progress(V),this},always:function(){return N.done.apply(N,arguments).fail.apply(N,arguments),this},pipe:function(q,ae,V){return c.Deferred(function(ye){c.each({done:[q,"resolve"],fail:[ae,"reject"],progress:[V,"notify"]},function(ie,Be){var ze=Be[0],it=Be[1],Je;c.isFunction(ze)?N[ie](function(){Je=ze.apply(this,arguments),Je&&c.isFunction(Je.promise)?Je.promise().then(ye.resolve,ye.reject,ye.notify):ye[it+"With"](this===N?ye:this,[Je])}):N[ie](ye[it])})}).promise()},promise:function(q){if(q==null)q=L;else for(var ae in L)q[ae]=L[ae];return q}},N=L.promise({}),j;for(j in E)N[j]=E[j].fire,N[j+"With"]=E[j].fireWith;return N.done(function(){y="resolved"},f.disable,m.lock).fail(function(){y="rejected"},a.disable,m.lock),s&&s.call(N,N),N},when:function(s){function a(ae){return function(V){L[ae]=arguments.length>1?We.call(arguments,0):V,j.notifyWith(q,L)}}function f(ae){return function(V){m[ae]=arguments.length>1?We.call(arguments,0):V,--N||j.resolveWith(j,m)}}var m=We.call(arguments,0),y=0,E=m.length,L=Array(E),N=E,j=E<=1&&s&&c.isFunction(s.promise)?s:c.Deferred(),q=j.promise();if(E>1){for(;y<E;y++)m[y]&&m[y].promise&&c.isFunction(m[y].promise)?m[y].promise().then(f(y),j.reject,a(y)):--N;N||j.resolveWith(j,m)}else j!==s&&j.resolveWith(j,E?[s]:[]);return q}}),c.support=function(){var s,a,f,m,y,E,L,N,j,q,ae,V=X.createElement("div");if(V.setAttribute("className","t"),V.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",a=V.getElementsByTagName("*"),f=V.getElementsByTagName("a")[0],!a||!a.length||!f)return{};m=X.createElement("select"),y=m.appendChild(X.createElement("option")),E=V.getElementsByTagName("input")[0],s={leadingWhitespace:V.firstChild.nodeType===3,tbody:!V.getElementsByTagName("tbody").length,htmlSerialize:!!V.getElementsByTagName("link").length,style:/top/.test(f.getAttribute("style")),hrefNormalized:f.getAttribute("href")==="/a",opacity:/^0.55/.test(f.style.opacity),cssFloat:!!f.style.cssFloat,checkOn:E.value==="on",optSelected:y.selected,getSetAttribute:V.className!=="t",enctype:!!X.createElement("form").enctype,html5Clone:X.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},c.boxModel=s.boxModel=X.compatMode==="CSS1Compat",E.checked=!0,s.noCloneChecked=E.cloneNode(!0).checked,m.disabled=!0,s.optDisabled=!y.disabled;try{delete V.test}catch{s.deleteExpando=!1}if(!V.addEventListener&&V.attachEvent&&V.fireEvent&&(V.attachEvent("onclick",function(){s.noCloneEvent=!1}),V.cloneNode(!0).fireEvent("onclick")),E=X.createElement("input"),E.value="t",E.setAttribute("type","radio"),s.radioValue=E.value==="t",E.setAttribute("checked","checked"),E.setAttribute("name","t"),V.appendChild(E),L=X.createDocumentFragment(),L.appendChild(V.lastChild),s.checkClone=L.cloneNode(!0).cloneNode(!0).lastChild.checked,s.appendChecked=E.checked,L.removeChild(E),L.appendChild(V),V.attachEvent)for(q in{submit:1,change:1,focusin:1})j="on"+q,ae=j in V,ae||(V.setAttribute(j,"return;"),ae=typeof V[j]=="function"),s[q+"Bubbles"]=ae;return L.removeChild(V),L=m=y=V=E=null,c(function(){var ye,ie,Be,ze,it,Je,Wt,Xt,ft,P,G,ne,re=X.getElementsByTagName("body")[0];!re||(Wt=1,ne="padding:0;margin:0;border:",P="position:absolute;top:0;left:0;width:1px;height:1px;",G=ne+"0;visibility:hidden;",Xt="style='"+P+ne+"5px solid #000;",ft="<div "+Xt+"display:block;'><div style='"+ne+"0;display:block;overflow:hidden;'></div></div><table "+Xt+"' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>",ye=X.createElement("div"),ye.style.cssText=G+"width:0;height:0;position:static;top:0;margin-top:"+Wt+"px",re.insertBefore(ye,re.firstChild),V=X.createElement("div"),ye.appendChild(V),V.innerHTML="<table><tr><td style='"+ne+"0;display:none'></td><td>t</td></tr></table>",N=V.getElementsByTagName("td"),ae=N[0].offsetHeight===0,N[0].style.display="",N[1].style.display="none",s.reliableHiddenOffsets=ae&&N[0].offsetHeight===0,i.getComputedStyle&&(V.innerHTML="",Je=X.createElement("div"),Je.style.width="0",Je.style.marginRight="0",V.style.width="2px",V.appendChild(Je),s.reliableMarginRight=(parseInt((i.getComputedStyle(Je,null)||{marginRight:0}).marginRight,10)||0)===0),typeof V.style.zoom<"u"&&(V.innerHTML="",V.style.width=V.style.padding="1px",V.style.border=0,V.style.overflow="hidden",V.style.display="inline",V.style.zoom=1,s.inlineBlockNeedsLayout=V.offsetWidth===3,V.style.display="block",V.style.overflow="visible",V.innerHTML="<div style='width:5px;'></div>",s.shrinkWrapBlocks=V.offsetWidth!==3),V.style.cssText=P+G,V.innerHTML=ft,ie=V.firstChild,Be=ie.firstChild,ze=ie.nextSibling.firstChild.firstChild,it={doesNotAddBorder:Be.offsetTop!==5,doesAddBorderForTableAndCells:ze.offsetTop===5},Be.style.position="fixed",Be.style.top="20px",it.fixedPosition=Be.offsetTop===20||Be.offsetTop===15,Be.style.position=Be.style.top="",ie.style.overflow="hidden",ie.style.position="relative",it.subtractsBorderForOverflowNotVisible=Be.offsetTop===-5,it.doesNotIncludeMarginInBodyOffset=re.offsetTop!==Wt,i.getComputedStyle&&(V.style.marginTop="1%",s.pixelMargin=(i.getComputedStyle(V,null)||{marginTop:0}).marginTop!=="1%"),typeof ye.style.zoom<"u"&&(ye.style.zoom=1),re.removeChild(ye),Je=V=ye=null,c.extend(s,it))}),s}();var rt=/^(?:\{.*\}|\[.*\])$/,Ct=/([A-Z])/g;c.extend({cache:{},uuid:0,expando:"jQuery"+(c.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(s){return s=s.nodeType?c.cache[s[c.expando]]:s[c.expando],!!s&&!Q(s)},data:function(s,a,f,m){if(c.acceptData(s)){var y,E,L,N=c.expando,j=typeof a=="string",q=s.nodeType,ae=q?c.cache:s,V=q?s[N]:s[N]&&N,ye=a==="events";return(!V||!ae[V]||!ye&&!m&&!ae[V].data)&&j&&f===e?void 0:(V||(q?s[N]=V=++c.uuid:V=N),ae[V]||(ae[V]={},q||(ae[V].toJSON=c.noop)),(typeof a=="object"||typeof a=="function")&&(m?ae[V]=c.extend(ae[V],a):ae[V].data=c.extend(ae[V].data,a)),y=E=ae[V],m||(E.data||(E.data={}),E=E.data),f!==e&&(E[c.camelCase(a)]=f),ye&&!E[a]?y.events:(j?(L=E[a],L==null&&(L=E[c.camelCase(a)])):L=E,L))}},removeData:function(s,a,f){if(c.acceptData(s)){var m,y,E,L=c.expando,N=s.nodeType,j=N?c.cache:s,q=N?s[L]:L;if(!j[q])return;if(a&&(m=f?j[q]:j[q].data,m)){for(c.isArray(a)||(a in m?a=[a]:(a=c.camelCase(a),a in m?a=[a]:a=a.split(" "))),y=0,E=a.length;y<E;y++)delete m[a[y]];if(!(f?Q:c.isEmptyObject)(m))return}if(!f&&(delete j[q].data,!Q(j[q])))return;c.support.deleteExpando||!j.setInterval?delete j[q]:j[q]=null,N&&(c.support.deleteExpando?delete s[L]:s.removeAttribute?s.removeAttribute(L):s[L]=null)}},_data:function(s,a,f){return c.data(s,a,f,!0)},acceptData:function(s){if(s.nodeName){var a=c.noData[s.nodeName.toLowerCase()];if(a)return a!==!0&&s.getAttribute("classid")===a}return!0}}),c.fn.extend({data:function(s,a){var f,m,y,E,L,N=this[0],j=0,q=null;if(s===e){if(this.length&&(q=c.data(N),N.nodeType===1&&!c._data(N,"parsedAttrs"))){for(y=N.attributes,L=y.length;j<L;j++)E=y[j].name,E.indexOf("data-")===0&&(E=c.camelCase(E.substring(5)),ue(N,E,q[E]));c._data(N,"parsedAttrs",!0)}return q}return typeof s=="object"?this.each(function(){c.data(this,s)}):(f=s.split(".",2),f[1]=f[1]?"."+f[1]:"",m=f[1]+"!",c.access(this,function(ae){if(ae===e)return q=this.triggerHandler("getData"+m,[f[0]]),q===e&&N&&(q=c.data(N,s),q=ue(N,s,q)),q===e&&f[1]?this.data(f[0]):q;f[1]=ae,this.each(function(){var V=c(this);V.triggerHandler("setData"+m,f),c.data(this,s,ae),V.triggerHandler("changeData"+m,f)})},null,a,arguments.length>1,null,!1))},removeData:function(s){return this.each(function(){c.removeData(this,s)})}}),c.extend({_mark:function(s,a){s&&(a=(a||"fx")+"mark",c._data(s,a,(c._data(s,a)||0)+1))},_unmark:function(s,a,f){if(s!==!0&&(f=a,a=s,s=!1),a){f=f||"fx";var m=f+"mark",y=s?0:(c._data(a,m)||1)-1;y?c._data(a,m,y):(c.removeData(a,m,!0),ee(a,f,"mark"))}},queue:function(s,a,f){var m;if(s)return a=(a||"fx")+"queue",m=c._data(s,a),f&&(!m||c.isArray(f)?m=c._data(s,a,c.makeArray(f)):m.push(f)),m||[]},dequeue:function(s,a){a=a||"fx";var f=c.queue(s,a),m=f.shift(),y={};m==="inprogress"&&(m=f.shift()),m&&(a==="fx"&&f.unshift("inprogress"),c._data(s,a+".run",y),m.call(s,function(){c.dequeue(s,a)},y)),f.length||(c.removeData(s,a+"queue "+a+".run",!0),ee(s,a,"queue"))}}),c.fn.extend({queue:function(s,a){var f=2;return typeof s!="string"&&(a=s,s="fx",f--),arguments.length<f?c.queue(this[0],s):a===e?this:this.each(function(){var m=c.queue(this,s,a);s==="fx"&&m[0]!=="inprogress"&&c.dequeue(this,s)})},dequeue:function(s){return this.each(function(){c.dequeue(this,s)})},delay:function(s,a){return s=c.fx&&c.fx.speeds[s]||s,a=a||"fx",this.queue(a,function(f,m){var y=setTimeout(f,s);m.stop=function(){clearTimeout(y)}})},clearQueue:function(s){return this.queue(s||"fx",[])},promise:function(s,a){function f(){--L||m.resolveWith(y,[y])}typeof s!="string"&&(a=s,s=e),s=s||"fx";for(var m=c.Deferred(),y=this,E=y.length,L=1,N=s+"defer",j=s+"queue",q=s+"mark",ae;E--;)(ae=c.data(y[E],N,e,!0)||(c.data(y[E],j,e,!0)||c.data(y[E],q,e,!0))&&c.data(y[E],N,c.Callbacks("once memory"),!0))&&(L++,ae.add(f));return f(),m.promise(a)}});var ge=/[\n\t\r]/g,be=/\s+/,Ke=/\r/g,Re=/^(?:button|input)$/i,ot=/^(?:button|input|object|select|textarea)$/i,ut=/^a(?:rea)?$/i,dt=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,Nt=c.support.getSetAttribute,ht,zt,W;c.fn.extend({attr:function(s,a){return c.access(this,c.attr,s,a,arguments.length>1)},removeAttr:function(s){return this.each(function(){c.removeAttr(this,s)})},prop:function(s,a){return c.access(this,c.prop,s,a,arguments.length>1)},removeProp:function(s){return s=c.propFix[s]||s,this.each(function(){try{this[s]=e,delete this[s]}catch{}})},addClass:function(s){var a,f,m,y,E,L,N;if(c.isFunction(s))return this.each(function(j){c(this).addClass(s.call(this,j,this.className))});if(s&&typeof s=="string"){for(a=s.split(be),f=0,m=this.length;f<m;f++)if(y=this[f],y.nodeType===1)if(!y.className&&a.length===1)y.className=s;else{for(E=" "+y.className+" ",L=0,N=a.length;L<N;L++)~E.indexOf(" "+a[L]+" ")||(E+=a[L]+" ");y.className=c.trim(E)}}return this},removeClass:function(s){var a,f,m,y,E,L,N;if(c.isFunction(s))return this.each(function(j){c(this).removeClass(s.call(this,j,this.className))});if(s&&typeof s=="string"||s===e){for(a=(s||"").split(be),f=0,m=this.length;f<m;f++)if(y=this[f],y.nodeType===1&&y.className)if(s){for(E=(" "+y.className+" ").replace(ge," "),L=0,N=a.length;L<N;L++)E=E.replace(" "+a[L]+" "," ");y.className=c.trim(E)}else y.className=""}return this},toggleClass:function(s,a){var f=typeof s,m=typeof a=="boolean";return c.isFunction(s)?this.each(function(y){c(this).toggleClass(s.call(this,y,this.className,a),a)}):this.each(function(){if(f==="string")for(var y,E=0,L=c(this),N=a,j=s.split(be);y=j[E++];)N=m?N:!L.hasClass(y),L[N?"addClass":"removeClass"](y);else(f==="undefined"||f==="boolean")&&(this.className&&c._data(this,"__className__",this.className),this.className=this.className||s===!1?"":c._data(this,"__className__")||"")})},hasClass:function(s){for(var a=" "+s+" ",f=0,m=this.length;f<m;f++)if(this[f].nodeType===1&&(" "+this[f].className+" ").replace(ge," ").indexOf(a)>-1)return!0;return!1},val:function(s){var a,f,m,y=this[0];{if(arguments.length)return m=c.isFunction(s),this.each(function(E){var L=c(this),N;this.nodeType===1&&(m?N=s.call(this,E,L.val()):N=s,N==null?N="":typeof N=="number"?N+="":c.isArray(N)&&(N=c.map(N,function(j){return j==null?"":j+""})),a=c.valHooks[this.type]||c.valHooks[this.nodeName.toLowerCase()],(!a||!("set"in a)||a.set(this,N,"value")===e)&&(this.value=N))});if(y)return a=c.valHooks[y.type]||c.valHooks[y.nodeName.toLowerCase()],a&&"get"in a&&(f=a.get(y,"value"))!==e?f:(f=y.value,typeof f=="string"?f.replace(Ke,""):f??"")}}}),c.extend({valHooks:{option:{get:function(s){var a=s.attributes.value;return!a||a.specified?s.value:s.text}},select:{get:function(s){var a,f,m,y,E=s.selectedIndex,L=[],N=s.options,j=s.type==="select-one";if(E<0)return null;for(f=j?E:0,m=j?E+1:N.length;f<m;f++)if(y=N[f],y.selected&&(c.support.optDisabled?!y.disabled:y.getAttribute("disabled")===null)&&(!y.parentNode.disabled||!c.nodeName(y.parentNode,"optgroup"))){if(a=c(y).val(),j)return a;L.push(a)}return j&&!L.length&&N.length?c(N[E]).val():L},set:function(s,a){var f=c.makeArray(a);return c(s).find("option").each(function(){this.selected=c.inArray(c(this).val(),f)>=0}),f.length||(s.selectedIndex=-1),f}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(s,a,f,m){var y,E,L,N=s.nodeType;if(s&&N!==3&&N!==8&&N!==2){if(m&&a in c.attrFn)return c(s)[a](f);if(typeof s.getAttribute>"u")return c.prop(s,a,f);if(L=N!==1||!c.isXMLDoc(s),L&&(a=a.toLowerCase(),E=c.attrHooks[a]||(dt.test(a)?zt:ht)),f!==e){if(f===null){c.removeAttr(s,a);return}return E&&"set"in E&&L&&(y=E.set(s,f,a))!==e?y:(s.setAttribute(a,""+f),f)}return E&&"get"in E&&L&&(y=E.get(s,a))!==null?y:(y=s.getAttribute(a),y===null?e:y)}},removeAttr:function(s,a){var f,m,y,E,L,N=0;if(a&&s.nodeType===1)for(m=a.toLowerCase().split(be),E=m.length;N<E;N++)y=m[N],y&&(f=c.propFix[y]||y,L=dt.test(y),L||c.attr(s,y,""),s.removeAttribute(Nt?y:f),L&&f in s&&(s[f]=!1))},attrHooks:{type:{set:function(s,a){if(Re.test(s.nodeName)&&s.parentNode)c.error("type property can't be changed");else if(!c.support.radioValue&&a==="radio"&&c.nodeName(s,"input")){var f=s.value;return s.setAttribute("type",a),f&&(s.value=f),a}}},value:{get:function(s,a){return ht&&c.nodeName(s,"button")?ht.get(s,a):a in s?s.value:null},set:function(s,a,f){if(ht&&c.nodeName(s,"button"))return ht.set(s,a,f);s.value=a}}},propFix:{tabindex:"tabIndex",readonly:"readOnly",for:"htmlFor",class:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(s,a,f){var m,y,E,L=s.nodeType;if(s&&L!==3&&L!==8&&L!==2)return E=L!==1||!c.isXMLDoc(s),E&&(a=c.propFix[a]||a,y=c.propHooks[a]),f!==e?y&&"set"in y&&(m=y.set(s,f,a))!==e?m:s[a]=f:y&&"get"in y&&(m=y.get(s,a))!==null?m:s[a]},propHooks:{tabIndex:{get:function(s){var a=s.getAttributeNode("tabindex");return a&&a.specified?parseInt(a.value,10):ot.test(s.nodeName)||ut.test(s.nodeName)&&s.href?0:e}}}}),c.attrHooks.tabindex=c.propHooks.tabIndex,zt={get:function(s,a){var f,m=c.prop(s,a);return m===!0||typeof m!="boolean"&&(f=s.getAttributeNode(a))&&f.nodeValue!==!1?a.toLowerCase():e},set:function(s,a,f){var m;return a===!1?c.removeAttr(s,f):(m=c.propFix[f]||f,m in s&&(s[m]=!0),s.setAttribute(f,f.toLowerCase())),f}},Nt||(W={name:!0,id:!0,coords:!0},ht=c.valHooks.button={get:function(s,a){var f;return f=s.getAttributeNode(a),f&&(W[a]?f.nodeValue!=="":f.specified)?f.nodeValue:e},set:function(s,a,f){var m=s.getAttributeNode(f);return m||(m=X.createAttribute(f),s.setAttributeNode(m)),m.nodeValue=a+""}},c.attrHooks.tabindex.set=ht.set,c.each(["width","height"],function(s,a){c.attrHooks[a]=c.extend(c.attrHooks[a],{set:function(f,m){if(m==="")return f.setAttribute(a,"auto"),m}})}),c.attrHooks.contenteditable={get:ht.get,set:function(s,a,f){a===""&&(a="false"),ht.set(s,a,f)}}),c.support.hrefNormalized||c.each(["href","src","width","height"],function(s,a){c.attrHooks[a]=c.extend(c.attrHooks[a],{get:function(f){var m=f.getAttribute(a,2);return m===null?e:m}})}),c.support.style||(c.attrHooks.style={get:function(s){return s.style.cssText.toLowerCase()||e},set:function(s,a){return s.style.cssText=""+a}}),c.support.optSelected||(c.propHooks.selected=c.extend(c.propHooks.selected,{get:function(s){var a=s.parentNode;return a&&(a.selectedIndex,a.parentNode&&a.parentNode.selectedIndex),null}})),c.support.enctype||(c.propFix.enctype="encoding"),c.support.checkOn||c.each(["radio","checkbox"],function(){c.valHooks[this]={get:function(s){return s.getAttribute("value")===null?"on":s.value}}}),c.each(["radio","checkbox"],function(){c.valHooks[this]=c.extend(c.valHooks[this],{set:function(s,a){if(c.isArray(a))return s.checked=c.inArray(c(s).val(),a)>=0}})});var Kt=/^(?:textarea|input|select)$/i,xt=/^([^\.]*)?(?:\.(.+))?$/,yt=/(?:^|\s)hover(\.\S+)?\b/,tt=/^key/,Dt=/^(?:mouse|contextmenu)|click/,Qe=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,T=function(s){var a=F.exec(s);return a&&(a[1]=(a[1]||"").toLowerCase(),a[3]=a[3]&&new RegExp("(?:^|\\s)"+a[3]+"(?:\\s|$)")),a},te=function(s,a){var f=s.attributes||{};return(!a[1]||s.nodeName.toLowerCase()===a[1])&&(!a[2]||(f.id||{}).value===a[2])&&(!a[3]||a[3].test((f.class||{}).value))},le=function(s){return c.event.special.hover?s:s.replace(yt,"mouseenter$1 mouseleave$1")};c.event={add:function(s,a,f,m,y){var E,L,N,j,q,ae,V,ye,ie,Be,ze;if(!(s.nodeType===3||s.nodeType===8||!a||!f||!(E=c._data(s)))){for(f.handler&&(ie=f,f=ie.handler,y=ie.selector),f.guid||(f.guid=c.guid++),N=E.events,N||(E.events=N={}),L=E.handle,L||(E.handle=L=function(it){return typeof c<"u"&&(!it||c.event.triggered!==it.type)?c.event.dispatch.apply(L.elem,arguments):e},L.elem=s),a=c.trim(le(a)).split(" "),j=0;j<a.length;j++)q=xt.exec(a[j])||[],ae=q[1],V=(q[2]||"").split(".").sort(),ze=c.event.special[ae]||{},ae=(y?ze.delegateType:ze.bindType)||ae,ze=c.event.special[ae]||{},ye=c.extend({type:ae,origType:q[1],data:m,handler:f,guid:f.guid,selector:y,quick:y&&T(y),namespace:V.join(".")},ie),Be=N[ae],Be||(Be=N[ae]=[],Be.delegateCount=0,(!ze.setup||ze.setup.call(s,m,V,L)===!1)&&(s.addEventListener?s.addEventListener(ae,L,!1):s.attachEvent&&s.attachEvent("on"+ae,L))),ze.add&&(ze.add.call(s,ye),ye.handler.guid||(ye.handler.guid=f.guid)),y?Be.splice(Be.delegateCount++,0,ye):Be.push(ye),c.event.global[ae]=!0;s=null}},global:{},remove:function(s,a,f,m,y){var E=c.hasData(s)&&c._data(s),L,N,j,q,ae,V,ye,ie,Be,ze,it,Je;if(E&&(ie=E.events)){for(a=c.trim(le(a||"")).split(" "),L=0;L<a.length;L++){if(N=xt.exec(a[L])||[],j=q=N[1],ae=N[2],!j){for(j in ie)c.event.remove(s,j+a[L],f,m,!0);continue}for(Be=c.event.special[j]||{},j=(m?Be.delegateType:Be.bindType)||j,it=ie[j]||[],V=it.length,ae=ae?new RegExp("(^|\\.)"+ae.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null,ye=0;ye<it.length;ye++)Je=it[ye],(y||q===Je.origType)&&(!f||f.guid===Je.guid)&&(!ae||ae.test(Je.namespace))&&(!m||m===Je.selector||m==="**"&&Je.selector)&&(it.splice(ye--,1),Je.selector&&it.delegateCount--,Be.remove&&Be.remove.call(s,Je));it.length===0&&V!==it.length&&((!Be.teardown||Be.teardown.call(s,ae)===!1)&&c.removeEvent(s,j,E.handle),delete ie[j])}c.isEmptyObject(ie)&&(ze=E.handle,ze&&(ze.elem=null),c.removeData(s,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(s,a,f,m){if(!f||f.nodeType!==3&&f.nodeType!==8){var y=s.type||s,E=[],L,N,j,q,ae,V,ye,ie,Be,ze;if(Qe.test(y+c.event.triggered)||(y.indexOf("!")>=0&&(y=y.slice(0,-1),N=!0),y.indexOf(".")>=0&&(E=y.split("."),y=E.shift(),E.sort()),(!f||c.event.customEvent[y])&&!c.event.global[y]))return;if(s=typeof s=="object"?s[c.expando]?s:new c.Event(y,s):new c.Event(y),s.type=y,s.isTrigger=!0,s.exclusive=N,s.namespace=E.join("."),s.namespace_re=s.namespace?new RegExp("(^|\\.)"+E.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,V=y.indexOf(":")<0?"on"+y:"",!f){L=c.cache;for(j in L)L[j].events&&L[j].events[y]&&c.event.trigger(s,a,L[j].handle.elem,!0);return}if(s.result=e,s.target||(s.target=f),a=a!=null?c.makeArray(a):[],a.unshift(s),ye=c.event.special[y]||{},ye.trigger&&ye.trigger.apply(f,a)===!1)return;if(Be=[[f,ye.bindType||y]],!m&&!ye.noBubble&&!c.isWindow(f)){for(ze=ye.delegateType||y,q=Qe.test(ze+y)?f:f.parentNode,ae=null;q;q=q.parentNode)Be.push([q,ze]),ae=q;ae&&ae===f.ownerDocument&&Be.push([ae.defaultView||ae.parentWindow||i,ze])}for(j=0;j<Be.length&&!s.isPropagationStopped();j++)q=Be[j][0],s.type=Be[j][1],ie=(c._data(q,"events")||{})[s.type]&&c._data(q,"handle"),ie&&ie.apply(q,a),ie=V&&q[V],ie&&c.acceptData(q)&&ie.apply(q,a)===!1&&s.preventDefault();return s.type=y,!m&&!s.isDefaultPrevented()&&(!ye._default||ye._default.apply(f.ownerDocument,a)===!1)&&(y!=="click"||!c.nodeName(f,"a"))&&c.acceptData(f)&&V&&f[y]&&(y!=="focus"&&y!=="blur"||s.target.offsetWidth!==0)&&!c.isWindow(f)&&(ae=f[V],ae&&(f[V]=null),c.event.triggered=y,f[y](),c.event.triggered=e,ae&&(f[V]=ae)),s.result}},dispatch:function(s){s=c.event.fix(s||i.event);var a=(c._data(this,"events")||{})[s.type]||[],f=a.delegateCount,m=[].slice.call(arguments,0),y=!s.exclusive&&!s.namespace,E=c.event.special[s.type]||{},L=[],N,j,q,ae,V,ye,ie,Be,ze,it;if(m[0]=s,s.delegateTarget=this,!E.preDispatch||E.preDispatch.call(this,s)!==!1){if(f&&(!s.button||s.type!=="click")){for(ae=c(this),ae.context=this.ownerDocument||this,q=s.target;q!=this;q=q.parentNode||this)if(q.disabled!==!0){for(ye={},Be=[],ae[0]=q,N=0;N<f;N++)ze=a[N],it=ze.selector,ye[it]===e&&(ye[it]=ze.quick?te(q,ze.quick):ae.is(it)),ye[it]&&Be.push(ze);Be.length&&L.push({elem:q,matches:Be})}}for(a.length>f&&L.push({elem:this,matches:a.slice(f)}),N=0;N<L.length&&!s.isPropagationStopped();N++)for(ie=L[N],s.currentTarget=ie.elem,j=0;j<ie.matches.length&&!s.isImmediatePropagationStopped();j++)ze=ie.matches[j],(y||!s.namespace&&!ze.namespace||s.namespace_re&&s.namespace_re.test(ze.namespace))&&(s.data=ze.data,s.handleObj=ze,V=((c.event.special[ze.origType]||{}).handle||ze.handler).apply(ie.elem,m),V!==e&&(s.result=V,V===!1&&(s.preventDefault(),s.stopPropagation())));return E.postDispatch&&E.postDispatch.call(this,s),s.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(s,a){return s.which==null&&(s.which=a.charCode!=null?a.charCode:a.keyCode),s}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(s,a){var f,m,y,E=a.button,L=a.fromElement;return s.pageX==null&&a.clientX!=null&&(f=s.target.ownerDocument||X,m=f.documentElement,y=f.body,s.pageX=a.clientX+(m&&m.scrollLeft||y&&y.scrollLeft||0)-(m&&m.clientLeft||y&&y.clientLeft||0),s.pageY=a.clientY+(m&&m.scrollTop||y&&y.scrollTop||0)-(m&&m.clientTop||y&&y.clientTop||0)),!s.relatedTarget&&L&&(s.relatedTarget=L===s.target?a.toElement:L),!s.which&&E!==e&&(s.which=E&1?1:E&2?3:E&4?2:0),s}},fix:function(s){if(s[c.expando])return s;var a,f,m=s,y=c.event.fixHooks[s.type]||{},E=y.props?this.props.concat(y.props):this.props;for(s=c.Event(m),a=E.length;a;)f=E[--a],s[f]=m[f];return s.target||(s.target=m.srcElement||X),s.target.nodeType===3&&(s.target=s.target.parentNode),s.metaKey===e&&(s.metaKey=s.ctrlKey),y.filter?y.filter(s,m):s},special:{ready:{setup:c.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(s,a,f){c.isWindow(this)&&(this.onbeforeunload=f)},teardown:function(s,a){this.onbeforeunload===a&&(this.onbeforeunload=null)}}},simulate:function(s,a,f,m){var y=c.extend(new c.Event,f,{type:s,isSimulated:!0,originalEvent:{}});m?c.event.trigger(y,null,a):c.event.dispatch.call(a,y),y.isDefaultPrevented()&&f.preventDefault()}},c.event.handle=c.event.dispatch,c.removeEvent=X.removeEventListener?function(s,a,f){s.removeEventListener&&s.removeEventListener(a,f,!1)}:function(s,a,f){s.detachEvent&&s.detachEvent("on"+a,f)},c.Event=function(s,a){if(!(this instanceof c.Event))return new c.Event(s,a);s&&s.type?(this.originalEvent=s,this.type=s.type,this.isDefaultPrevented=s.defaultPrevented||s.returnValue===!1||s.getPreventDefault&&s.getPreventDefault()?b:k):this.type=s,a&&c.extend(this,a),this.timeStamp=s&&s.timeStamp||c.now(),this[c.expando]=!0},c.Event.prototype={preventDefault:function(){this.isDefaultPrevented=b;var s=this.originalEvent;!s||(s.preventDefault?s.preventDefault():s.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=b;var s=this.originalEvent;!s||(s.stopPropagation&&s.stopPropagation(),s.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=b,this.stopPropagation()},isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k},c.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(s,a){c.event.special[s]={delegateType:a,bindType:a,handle:function(f){var m=this,y=f.relatedTarget,E=f.handleObj;E.selector;var L;return(!y||y!==m&&!c.contains(m,y))&&(f.type=E.origType,L=E.handler.apply(this,arguments),f.type=a),L}}}),c.support.submitBubbles||(c.event.special.submit={setup:function(){if(c.nodeName(this,"form"))return!1;c.event.add(this,"click._submit keypress._submit",function(s){var a=s.target,f=c.nodeName(a,"input")||c.nodeName(a,"button")?a.form:e;f&&!f._submit_attached&&(c.event.add(f,"submit._submit",function(m){m._submit_bubble=!0}),f._submit_attached=!0)})},postDispatch:function(s){s._submit_bubble&&(delete s._submit_bubble,this.parentNode&&!s.isTrigger&&c.event.simulate("submit",this.parentNode,s,!0))},teardown:function(){if(c.nodeName(this,"form"))return!1;c.event.remove(this,"._submit")}}),c.support.changeBubbles||(c.event.special.change={setup:function(){if(Kt.test(this.nodeName))return(this.type==="checkbox"||this.type==="radio")&&(c.event.add(this,"propertychange._change",function(s){s.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),c.event.add(this,"click._change",function(s){this._just_changed&&!s.isTrigger&&(this._just_changed=!1,c.event.simulate("change",this,s,!0))})),!1;c.event.add(this,"beforeactivate._change",function(s){var a=s.target;Kt.test(a.nodeName)&&!a._change_attached&&(c.event.add(a,"change._change",function(f){this.parentNode&&!f.isSimulated&&!f.isTrigger&&c.event.simulate("change",this.parentNode,f,!0)}),a._change_attached=!0)})},handle:function(s){var a=s.target;if(this!==a||s.isSimulated||s.isTrigger||a.type!=="radio"&&a.type!=="checkbox")return s.handleObj.handler.apply(this,arguments)},teardown:function(){return c.event.remove(this,"._change"),Kt.test(this.nodeName)}}),c.support.focusinBubbles||c.each({focus:"focusin",blur:"focusout"},function(s,a){var f=0,m=function(y){c.event.simulate(a,y.target,c.event.fix(y),!0)};c.event.special[a]={setup:function(){f++===0&&X.addEventListener(s,m,!0)},teardown:function(){--f===0&&X.removeEventListener(s,m,!0)}}}),c.fn.extend({on:function(s,a,f,m,y){var E,L;if(typeof s=="object"){typeof a!="string"&&(f=f||a,a=e);for(L in s)this.on(L,a,f,s[L],y);return this}if(f==null&&m==null?(m=a,f=a=e):m==null&&(typeof a=="string"?(m=f,f=e):(m=f,f=a,a=e)),m===!1)m=k;else if(!m)return this;return y===1&&(E=m,m=function(N){return c().off(N),E.apply(this,arguments)},m.guid=E.guid||(E.guid=c.guid++)),this.each(function(){c.event.add(this,s,m,f,a)})},one:function(s,a,f,m){return this.on(s,a,f,m,1)},off:function(s,a,f){if(s&&s.preventDefault&&s.handleObj){var m=s.handleObj;return c(s.delegateTarget).off(m.namespace?m.origType+"."+m.namespace:m.origType,m.selector,m.handler),this}if(typeof s=="object"){for(var y in s)this.off(y,a,s[y]);return this}return(a===!1||typeof a=="function")&&(f=a,a=e),f===!1&&(f=k),this.each(function(){c.event.remove(this,s,f,a)})},bind:function(s,a,f){return this.on(s,null,a,f)},unbind:function(s,a){return this.off(s,null,a)},live:function(s,a,f){return c(this.context).on(s,this.selector,a,f),this},die:function(s,a){return c(this.context).off(s,this.selector||"**",a),this},delegate:function(s,a,f,m){return this.on(a,s,f,m)},undelegate:function(s,a,f){return arguments.length==1?this.off(s,"**"):this.off(a,s,f)},trigger:function(s,a){return this.each(function(){c.event.trigger(s,a,this)})},triggerHandler:function(s,a){if(this[0])return c.event.trigger(s,a,this[0],!0)},toggle:function(s){var a=arguments,f=s.guid||c.guid++,m=0,y=function(E){var L=(c._data(this,"lastToggle"+s.guid)||0)%m;return c._data(this,"lastToggle"+s.guid,L+1),E.preventDefault(),a[L].apply(this,arguments)||!1};for(y.guid=f;m<a.length;)a[m++].guid=f;return this.click(y)},hover:function(s,a){return this.mouseenter(s).mouseleave(a||s)}}),c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(s,a){c.fn[a]=function(f,m){return m==null&&(m=f,f=null),arguments.length>0?this.on(a,null,f,m):this.trigger(a)},c.attrFn&&(c.attrFn[a]=!0),tt.test(a)&&(c.event.fixHooks[a]=c.event.keyHooks),Dt.test(a)&&(c.event.fixHooks[a]=c.event.mouseHooks)}),function(){function s(P,G,ne,re,_e,pe){for(var Se=0,Ae=re.length;Se<Ae;Se++){var De=re[Se];if(De){var je=!1;for(De=De[P];De;){if(De[m]===ne){je=re[De.sizset];break}if(De.nodeType===1){if(pe||(De[m]=ne,De.sizset=Se),typeof G!="string"){if(De===G){je=!0;break}}else if(V.filter(G,[De]).length>0){je=De;break}}De=De[P]}re[Se]=je}}}function a(P,G,ne,re,_e,pe){for(var Se=0,Ae=re.length;Se<Ae;Se++){var De=re[Se];if(De){var je=!1;for(De=De[P];De;){if(De[m]===ne){je=re[De.sizset];break}if(De.nodeType===1&&!pe&&(De[m]=ne,De.sizset=Se),De.nodeName.toLowerCase()===G){je=De;break}De=De[P]}re[Se]=je}}}var f=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,m="sizcache"+(Math.random()+"").replace(".",""),y=0,E=Object.prototype.toString,L=!1,N=!0,j=/\\/g,q=/\r\n/g,ae=/\W/;[0,0].sort(function(){return N=!1,0});var V=function(P,G,ne,re){ne=ne||[],G=G||X;var _e=G;if(G.nodeType!==1&&G.nodeType!==9)return[];if(!P||typeof P!="string")return ne;var pe,Se,Ae,De,je,ln,H,de,Ce=!0,we=V.isXML(G),ke=[],St=P;do if(f.exec(""),pe=f.exec(St),pe&&(St=pe[3],ke.push(pe[1]),pe[2])){De=pe[3];break}while(pe);if(ke.length>1&&Be.exec(P))if(ke.length===2&&ie.relative[ke[0]])Se=ft(ke[0]+ke[1],G,re);else for(Se=ie.relative[ke[0]]?[G]:V(ke.shift(),G);ke.length;)P=ke.shift(),ie.relative[P]&&(P+=ke.shift()),Se=ft(P,Se,re);else if(!re&&ke.length>1&&G.nodeType===9&&!we&&ie.match.ID.test(ke[0])&&!ie.match.ID.test(ke[ke.length-1])&&(je=V.find(ke.shift(),G,we),G=je.expr?V.filter(je.expr,je.set)[0]:je.set[0]),G)for(je=re?{expr:ke.pop(),set:Je(re)}:V.find(ke.pop(),ke.length===1&&(ke[0]==="~"||ke[0]==="+")&&G.parentNode?G.parentNode:G,we),Se=je.expr?V.filter(je.expr,je.set):je.set,ke.length>0?Ae=Je(Se):Ce=!1;ke.length;)ln=ke.pop(),H=ln,ie.relative[ln]?H=ke.pop():ln="",H==null&&(H=G),ie.relative[ln](Ae,H,we);else Ae=ke=[];if(Ae||(Ae=Se),Ae||V.error(ln||P),E.call(Ae)==="[object Array]")if(!Ce)ne.push.apply(ne,Ae);else if(G&&G.nodeType===1)for(de=0;Ae[de]!=null;de++)Ae[de]&&(Ae[de]===!0||Ae[de].nodeType===1&&V.contains(G,Ae[de]))&&ne.push(Se[de]);else for(de=0;Ae[de]!=null;de++)Ae[de]&&Ae[de].nodeType===1&&ne.push(Se[de]);else Je(Ae,ne);return De&&(V(De,_e,ne,re),V.uniqueSort(ne)),ne};V.uniqueSort=function(P){if(Wt&&(L=N,P.sort(Wt),L))for(var G=1;G<P.length;G++)P[G]===P[G-1]&&P.splice(G--,1);return P},V.matches=function(P,G){return V(P,null,null,G)},V.matchesSelector=function(P,G){return V(G,null,null,[P]).length>0},V.find=function(P,G,ne){var re,_e,pe,Se,Ae,De;if(!P)return[];for(_e=0,pe=ie.order.length;_e<pe;_e++)if(Ae=ie.order[_e],(Se=ie.leftMatch[Ae].exec(P))&&(De=Se[1],Se.splice(1,1),De.substr(De.length-1)!=="\\"&&(Se[1]=(Se[1]||"").replace(j,""),re=ie.find[Ae](Se,G,ne),re!=null))){P=P.replace(ie.match[Ae],"");break}return re||(re=typeof G.getElementsByTagName<"u"?G.getElementsByTagName("*"):[]),{set:re,expr:P}},V.filter=function(P,G,ne,re){for(var _e,pe,Se,Ae,De,je,ln,H,de,Ce=P,we=[],ke=G,St=G&&G[0]&&V.isXML(G[0]);P&&G.length;){for(Se in ie.filter)if((_e=ie.leftMatch[Se].exec(P))!=null&&_e[2]){if(je=ie.filter[Se],ln=_e[1],pe=!1,_e.splice(1,1),ln.substr(ln.length-1)==="\\")continue;if(ke===we&&(we=[]),ie.preFilter[Se]){if(_e=ie.preFilter[Se](_e,ke,ne,we,re,St),!_e)pe=Ae=!0;else if(_e===!0)continue}if(_e)for(H=0;(De=ke[H])!=null;H++)De&&(Ae=je(De,_e,H,ke),de=re^Ae,ne&&Ae!=null?de?pe=!0:ke[H]=!1:de&&(we.push(De),pe=!0));if(Ae!==e){if(ne||(ke=we),P=P.replace(ie.match[Se],""),!pe)return[];break}}if(P===Ce)if(pe==null)V.error(P);else break;Ce=P}return ke},V.error=function(P){throw new Error("Syntax error, unrecognized expression: "+P)};var ye=V.getText=function(P){var G,ne,re=P.nodeType,_e="";if(re){if(re===1||re===9||re===11){if(typeof P.textContent=="string")return P.textContent;if(typeof P.innerText=="string")return P.innerText.replace(q,"");for(P=P.firstChild;P;P=P.nextSibling)_e+=ye(P)}else if(re===3||re===4)return P.nodeValue}else for(G=0;ne=P[G];G++)ne.nodeType!==8&&(_e+=ye(ne));return _e},ie=V.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{class:"className",for:"htmlFor"},attrHandle:{href:function(P){return P.getAttribute("href")},type:function(P){return P.getAttribute("type")}},relative:{"+":function(P,G){var ne=typeof G=="string",re=ne&&!ae.test(G),_e=ne&&!re;re&&(G=G.toLowerCase());for(var pe=0,Se=P.length,Ae;pe<Se;pe++)if(Ae=P[pe]){for(;(Ae=Ae.previousSibling)&&Ae.nodeType!==1;);P[pe]=_e||Ae&&Ae.nodeName.toLowerCase()===G?Ae||!1:Ae===G}_e&&V.filter(G,P,!0)},">":function(P,G){var ne,re=typeof G=="string",_e=0,pe=P.length;if(re&&!ae.test(G)){for(G=G.toLowerCase();_e<pe;_e++)if(ne=P[_e],ne){var Se=ne.parentNode;P[_e]=Se.nodeName.toLowerCase()===G?Se:!1}}else{for(;_e<pe;_e++)ne=P[_e],ne&&(P[_e]=re?ne.parentNode:ne.parentNode===G);re&&V.filter(G,P,!0)}},"":function(P,G,ne){var re,_e=y++,pe=s;typeof G=="string"&&!ae.test(G)&&(G=G.toLowerCase(),re=G,pe=a),pe("parentNode",G,_e,P,re,ne)},"~":function(P,G,ne){var re,_e=y++,pe=s;typeof G=="string"&&!ae.test(G)&&(G=G.toLowerCase(),re=G,pe=a),pe("previousSibling",G,_e,P,re,ne)}},find:{ID:function(P,G,ne){if(typeof G.getElementById<"u"&&!ne){var re=G.getElementById(P[1]);return re&&re.parentNode?[re]:[]}},NAME:function(P,G){if(typeof G.getElementsByName<"u"){for(var ne=[],re=G.getElementsByName(P[1]),_e=0,pe=re.length;_e<pe;_e++)re[_e].getAttribute("name")===P[1]&&ne.push(re[_e]);return ne.length===0?null:ne}},TAG:function(P,G){if(typeof G.getElementsByTagName<"u")return G.getElementsByTagName(P[1])}},preFilter:{CLASS:function(P,G,ne,re,_e,pe){if(P=" "+P[1].replace(j,"")+" ",pe)return P;for(var Se=0,Ae;(Ae=G[Se])!=null;Se++)Ae&&(_e^(Ae.className&&(" "+Ae.className+" ").replace(/[\t\n\r]/g," ").indexOf(P)>=0)?ne||re.push(Ae):ne&&(G[Se]=!1));return!1},ID:function(P){return P[1].replace(j,"")},TAG:function(P,G){return P[1].replace(j,"").toLowerCase()},CHILD:function(P){if(P[1]==="nth"){P[2]||V.error(P[0]),P[2]=P[2].replace(/^\+|\s*/g,"");var G=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(P[2]==="even"&&"2n"||P[2]==="odd"&&"2n+1"||!/\D/.test(P[2])&&"0n+"+P[2]||P[2]);P[2]=G[1]+(G[2]||1)-0,P[3]=G[3]-0}else P[2]&&V.error(P[0]);return P[0]=y++,P},ATTR:function(P,G,ne,re,_e,pe){var Se=P[1]=P[1].replace(j,"");return!pe&&ie.attrMap[Se]&&(P[1]=ie.attrMap[Se]),P[4]=(P[4]||P[5]||"").replace(j,""),P[2]==="~="&&(P[4]=" "+P[4]+" "),P},PSEUDO:function(P,G,ne,re,_e){if(P[1]==="not")if((f.exec(P[3])||"").length>1||/^\w/.test(P[3]))P[3]=V(P[3],null,null,G);else{var pe=V.filter(P[3],G,ne,!0^_e);return ne||re.push.apply(re,pe),!1}else if(ie.match.POS.test(P[0])||ie.match.CHILD.test(P[0]))return!0;return P},POS:function(P){return P.unshift(!0),P}},filters:{enabled:function(P){return P.disabled===!1&&P.type!=="hidden"},disabled:function(P){return P.disabled===!0},checked:function(P){return P.checked===!0},selected:function(P){return P.parentNode&&P.parentNode.selectedIndex,P.selected===!0},parent:function(P){return!!P.firstChild},empty:function(P){return!P.firstChild},has:function(P,G,ne){return!!V(ne[3],P).length},header:function(P){return/h\d/i.test(P.nodeName)},text:function(P){var G=P.getAttribute("type"),ne=P.type;return P.nodeName.toLowerCase()==="input"&&ne==="text"&&(G===ne||G===null)},radio:function(P){return P.nodeName.toLowerCase()==="input"&&P.type==="radio"},checkbox:function(P){return P.nodeName.toLowerCase()==="input"&&P.type==="checkbox"},file:function(P){return P.nodeName.toLowerCase()==="input"&&P.type==="file"},password:function(P){return P.nodeName.toLowerCase()==="input"&&P.type==="password"},submit:function(P){var G=P.nodeName.toLowerCase();return(G==="input"||G==="button")&&P.type==="submit"},image:function(P){return P.nodeName.toLowerCase()==="input"&&P.type==="image"},reset:function(P){var G=P.nodeName.toLowerCase();return(G==="input"||G==="button")&&P.type==="reset"},button:function(P){var G=P.nodeName.toLowerCase();return G==="input"&&P.type==="button"||G==="button"},input:function(P){return/input|select|textarea|button/i.test(P.nodeName)},focus:function(P){return P===P.ownerDocument.activeElement}},setFilters:{first:function(P,G){return G===0},last:function(P,G,ne,re){return G===re.length-1},even:function(P,G){return G%2===0},odd:function(P,G){return G%2===1},lt:function(P,G,ne){return G<ne[3]-0},gt:function(P,G,ne){return G>ne[3]-0},nth:function(P,G,ne){return ne[3]-0===G},eq:function(P,G,ne){return ne[3]-0===G}},filter:{PSEUDO:function(P,G,ne,re){var _e=G[1],pe=ie.filters[_e];if(pe)return pe(P,ne,G,re);if(_e==="contains")return(P.textContent||P.innerText||ye([P])||"").indexOf(G[3])>=0;if(_e==="not"){for(var Se=G[3],Ae=0,De=Se.length;Ae<De;Ae++)if(Se[Ae]===P)return!1;return!0}V.error(_e)},CHILD:function(P,G){var ne,re,_e,pe,Se,Ae,De=G[1],je=P;switch(De){case"only":case"first":for(;je=je.previousSibling;)if(je.nodeType===1)return!1;if(De==="first")return!0;je=P;case"last":for(;je=je.nextSibling;)if(je.nodeType===1)return!1;return!0;case"nth":if(ne=G[2],re=G[3],ne===1&&re===0)return!0;if(_e=G[0],pe=P.parentNode,pe&&(pe[m]!==_e||!P.nodeIndex)){for(Se=0,je=pe.firstChild;je;je=je.nextSibling)je.nodeType===1&&(je.nodeIndex=++Se);pe[m]=_e}return Ae=P.nodeIndex-re,ne===0?Ae===0:Ae%ne===0&&Ae/ne>=0}},ID:function(P,G){return P.nodeType===1&&P.getAttribute("id")===G},TAG:function(P,G){return G==="*"&&P.nodeType===1||!!P.nodeName&&P.nodeName.toLowerCase()===G},CLASS:function(P,G){return(" "+(P.className||P.getAttribute("class"))+" ").indexOf(G)>-1},ATTR:function(P,G){var ne=G[1],re=V.attr?V.attr(P,ne):ie.attrHandle[ne]?ie.attrHandle[ne](P):P[ne]!=null?P[ne]:P.getAttribute(ne),_e=re+"",pe=G[2],Se=G[4];return re==null?pe==="!=":!pe&&V.attr?re!=null:pe==="="?_e===Se:pe==="*="?_e.indexOf(Se)>=0:pe==="~="?(" "+_e+" ").indexOf(Se)>=0:Se?pe==="!="?_e!==Se:pe==="^="?_e.indexOf(Se)===0:pe==="$="?_e.substr(_e.length-Se.length)===Se:pe==="|="?_e===Se||_e.substr(0,Se.length+1)===Se+"-":!1:_e&&re!==!1},POS:function(P,G,ne,re){var _e=G[2],pe=ie.setFilters[_e];if(pe)return pe(P,ne,G,re)}}},Be=ie.match.POS,ze=function(P,G){return"\\"+(G-0+1)};for(var it in ie.match)ie.match[it]=new RegExp(ie.match[it].source+/(?![^\[]*\])(?![^\(]*\))/.source),ie.leftMatch[it]=new RegExp(/(^(?:.|\r|\n)*?)/.source+ie.match[it].source.replace(/\\(\d+)/g,ze));ie.match.globalPOS=Be;var Je=function(P,G){return P=Array.prototype.slice.call(P,0),G?(G.push.apply(G,P),G):P};try{Array.prototype.slice.call(X.documentElement.childNodes,0)[0].nodeType}catch{Je=function(G,ne){var re=0,_e=ne||[];if(E.call(G)==="[object Array]")Array.prototype.push.apply(_e,G);else if(typeof G.length=="number")for(var pe=G.length;re<pe;re++)_e.push(G[re]);else for(;G[re];re++)_e.push(G[re]);return _e}}var Wt,Xt;X.documentElement.compareDocumentPosition?Wt=function(P,G){return P===G?(L=!0,0):!P.compareDocumentPosition||!G.compareDocumentPosition?P.compareDocumentPosition?-1:1:P.compareDocumentPosition(G)&4?-1:1}:(Wt=function(P,G){if(P===G)return L=!0,0;if(P.sourceIndex&&G.sourceIndex)return P.sourceIndex-G.sourceIndex;var ne,re,_e=[],pe=[],Se=P.parentNode,Ae=G.parentNode,De=Se;if(Se===Ae)return Xt(P,G);if(!Se)return-1;if(!Ae)return 1;for(;De;)_e.unshift(De),De=De.parentNode;for(De=Ae;De;)pe.unshift(De),De=De.parentNode;ne=_e.length,re=pe.length;for(var je=0;je<ne&&je<re;je++)if(_e[je]!==pe[je])return Xt(_e[je],pe[je]);return je===ne?Xt(P,pe[je],-1):Xt(_e[je],G,1)},Xt=function(P,G,ne){if(P===G)return ne;for(var re=P.nextSibling;re;){if(re===G)return-1;re=re.nextSibling}return 1}),function(){var P=X.createElement("div"),G="script"+new Date().getTime(),ne=X.documentElement;P.innerHTML="<a name='"+G+"'/>",ne.insertBefore(P,ne.firstChild),X.getElementById(G)&&(ie.find.ID=function(re,_e,pe){if(typeof _e.getElementById<"u"&&!pe){var Se=_e.getElementById(re[1]);return Se?Se.id===re[1]||typeof Se.getAttributeNode<"u"&&Se.getAttributeNode("id").nodeValue===re[1]?[Se]:e:[]}},ie.filter.ID=function(re,_e){var pe=typeof re.getAttributeNode<"u"&&re.getAttributeNode("id");return re.nodeType===1&&pe&&pe.nodeValue===_e}),ne.removeChild(P),ne=P=null}(),function(){var P=X.createElement("div");P.appendChild(X.createComment("")),P.getElementsByTagName("*").length>0&&(ie.find.TAG=function(G,ne){var re=ne.getElementsByTagName(G[1]);if(G[1]==="*"){for(var _e=[],pe=0;re[pe];pe++)re[pe].nodeType===1&&_e.push(re[pe]);re=_e}return re}),P.innerHTML="<a href='#'></a>",P.firstChild&&typeof P.firstChild.getAttribute<"u"&&P.firstChild.getAttribute("href")!=="#"&&(ie.attrHandle.href=function(G){return G.getAttribute("href",2)}),P=null}(),X.querySelectorAll&&function(){var P=V,G=X.createElement("div"),ne="__sizzle__";if(G.innerHTML="<p class='TEST'></p>",!G.querySelectorAll||G.querySelectorAll(".TEST").length!==0){V=function(_e,pe,Se,Ae){if(pe=pe||X,!Ae&&!V.isXML(pe)){var De=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(_e);if(De&&(pe.nodeType===1||pe.nodeType===9)){if(De[1])return Je(pe.getElementsByTagName(_e),Se);if(De[2]&&ie.find.CLASS&&pe.getElementsByClassName)return Je(pe.getElementsByClassName(De[2]),Se)}if(pe.nodeType===9){if(_e==="body"&&pe.body)return Je([pe.body],Se);if(De&&De[3]){var je=pe.getElementById(De[3]);if(!je||!je.parentNode)return Je([],Se);if(je.id===De[3])return Je([je],Se)}try{return Je(pe.querySelectorAll(_e),Se)}catch{}}else if(pe.nodeType===1&&pe.nodeName.toLowerCase()!=="object"){var ln=pe,H=pe.getAttribute("id"),de=H||ne,Ce=pe.parentNode,we=/^\s*[+~]/.test(_e);H?de=de.replace(/'/g,"\\$&"):pe.setAttribute("id",de),we&&Ce&&(pe=pe.parentNode);try{if(!we||Ce)return Je(pe.querySelectorAll("[id='"+de+"'] "+_e),Se)}catch{}finally{H||ln.removeAttribute("id")}}}return P(_e,pe,Se,Ae)};for(var re in P)V[re]=P[re];G=null}}(),function(){var P=X.documentElement,G=P.matchesSelector||P.mozMatchesSelector||P.webkitMatchesSelector||P.msMatchesSelector;if(G){var ne=!G.call(X.createElement("div"),"div"),re=!1;try{G.call(X.documentElement,"[test!='']:sizzle")}catch{re=!0}V.matchesSelector=function(_e,pe){if(pe=pe.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']"),!V.isXML(_e))try{if(re||!ie.match.PSEUDO.test(pe)&&!/!=/.test(pe)){var Se=G.call(_e,pe);if(Se||!ne||_e.document&&_e.document.nodeType!==11)return Se}}catch{}return V(pe,null,null,[_e]).length>0}}}(),function(){var P=X.createElement("div");if(P.innerHTML="<div class='test e'></div><div class='test'></div>",P.getElementsByClassName&&P.getElementsByClassName("e").length!==0){if(P.lastChild.className="e",P.getElementsByClassName("e").length===1)return;ie.order.splice(1,0,"CLASS"),ie.find.CLASS=function(G,ne,re){if(typeof ne.getElementsByClassName<"u"&&!re)return ne.getElementsByClassName(G[1])},P=null}}(),X.documentElement.contains?V.contains=function(P,G){return P!==G&&(P.contains?P.contains(G):!0)}:X.documentElement.compareDocumentPosition?V.contains=function(P,G){return!!(P.compareDocumentPosition(G)&16)}:V.contains=function(){return!1},V.isXML=function(P){var G=(P?P.ownerDocument||P:0).documentElement;return G?G.nodeName!=="HTML":!1};var ft=function(P,G,ne){for(var re,_e=[],pe="",Se=G.nodeType?[G]:G;re=ie.match.PSEUDO.exec(P);)pe+=re[0],P=P.replace(ie.match.PSEUDO,"");P=ie.relative[P]?P+"*":P;for(var Ae=0,De=Se.length;Ae<De;Ae++)V(P,Se[Ae],_e,ne);return V.filter(pe,_e)};V.attr=c.attr,V.selectors.attrMap={},c.find=V,c.expr=V.selectors,c.expr[":"]=c.expr.filters,c.unique=V.uniqueSort,c.text=V.getText,c.isXMLDoc=V.isXML,c.contains=V.contains}();var me=/Until$/,ce=/^(?:parents|prevUntil|prevAll)/,Ye=/,/,Le=/^.[^:#\[\.,]*$/,Xe=Array.prototype.slice,mt=c.expr.match.globalPOS,Ee={children:!0,contents:!0,next:!0,prev:!0};c.fn.extend({find:function(s){var a=this,f,m;if(typeof s!="string")return c(s).filter(function(){for(f=0,m=a.length;f<m;f++)if(c.contains(a[f],this))return!0});var y=this.pushStack("","find",s),E,L,N;for(f=0,m=this.length;f<m;f++)if(E=y.length,c.find(s,this[f],y),f>0){for(L=E;L<y.length;L++)for(N=0;N<E;N++)if(y[N]===y[L]){y.splice(L--,1);break}}return y},has:function(s){var a=c(s);return this.filter(function(){for(var f=0,m=a.length;f<m;f++)if(c.contains(this,a[f]))return!0})},not:function(s){return this.pushStack(O(this,s,!1),"not",s)},filter:function(s){return this.pushStack(O(this,s,!0),"filter",s)},is:function(s){return!!s&&(typeof s=="string"?mt.test(s)?c(s,this.context).index(this[0])>=0:c.filter(s,this).length>0:this.filter(s).length>0)},closest:function(s,a){var f=[],m,y,E=this[0];if(c.isArray(s)){for(var L=1;E&&E.ownerDocument&&E!==a;){for(m=0;m<s.length;m++)c(E).is(s[m])&&f.push({selector:s[m],elem:E,level:L});E=E.parentNode,L++}return f}var N=mt.test(s)||typeof s!="string"?c(s,a||this.context):0;for(m=0,y=this.length;m<y;m++)for(E=this[m];E;){if(N?N.index(E)>-1:c.find.matchesSelector(E,s)){f.push(E);break}if(E=E.parentNode,!E||!E.ownerDocument||E===a||E.nodeType===11)break}return f=f.length>1?c.unique(f):f,this.pushStack(f,"closest",s)},index:function(s){return s?typeof s=="string"?c.inArray(this[0],c(s)):c.inArray(s.jquery?s[0]:s,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(s,a){var f=typeof s=="string"?c(s,a):c.makeArray(s&&s.nodeType?[s]:s),m=c.merge(this.get(),f);return this.pushStack(C(f[0])||C(m[0])?m:c.unique(m))},andSelf:function(){return this.add(this.prevObject)}}),c.each({parent:function(s){var a=s.parentNode;return a&&a.nodeType!==11?a:null},parents:function(s){return c.dir(s,"parentNode")},parentsUntil:function(s,a,f){return c.dir(s,"parentNode",f)},next:function(s){return c.nth(s,2,"nextSibling")},prev:function(s){return c.nth(s,2,"previousSibling")},nextAll:function(s){return c.dir(s,"nextSibling")},prevAll:function(s){return c.dir(s,"previousSibling")},nextUntil:function(s,a,f){return c.dir(s,"nextSibling",f)},prevUntil:function(s,a,f){return c.dir(s,"previousSibling",f)},siblings:function(s){return c.sibling((s.parentNode||{}).firstChild,s)},children:function(s){return c.sibling(s.firstChild)},contents:function(s){return c.nodeName(s,"iframe")?s.contentDocument||s.contentWindow.document:c.makeArray(s.childNodes)}},function(s,a){c.fn[s]=function(f,m){var y=c.map(this,a,f);return me.test(s)||(m=f),m&&typeof m=="string"&&(y=c.filter(m,y)),y=this.length>1&&!Ee[s]?c.unique(y):y,(this.length>1||Ye.test(m))&&ce.test(s)&&(y=y.reverse()),this.pushStack(y,s,Xe.call(arguments).join(","))}}),c.extend({filter:function(s,a,f){return f&&(s=":not("+s+")"),a.length===1?c.find.matchesSelector(a[0],s)?[a[0]]:[]:c.find.matches(s,a)},dir:function(s,a,f){for(var m=[],y=s[a];y&&y.nodeType!==9&&(f===e||y.nodeType!==1||!c(y).is(f));)y.nodeType===1&&m.push(y),y=y[a];return m},nth:function(s,a,f,m){a=a||1;for(var y=0;s&&!(s.nodeType===1&&++y===a);s=s[f]);return s},sibling:function(s,a){for(var f=[];s;s=s.nextSibling)s.nodeType===1&&s!==a&&f.push(s);return f}});var He="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",st=/ jQuery\d+="(?:\d+|null)"/g,lt=/^\s+/,qe=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Mt=/<([\w:]+)/,pt=/<tbody/i,Ft=/<|&#?\w+;/,Y=/<(?:script|style)/i,Ne=/<(?:script|object|embed|option|style)/i,fe=new RegExp("<(?:"+He+")[\\s/>]","i"),xe=/checked\s*(?:[^=]|=\s*.checked.)/i,Fe=/\/(java|ecma)script/i,Oe=/^\s*<!(?:\[CDATA\[|\-\-)/,nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ht=U(X);nt.optgroup=nt.option,nt.tbody=nt.tfoot=nt.colgroup=nt.caption=nt.thead,nt.th=nt.td,c.support.htmlSerialize||(nt._default=[1,"div<div>","</div>"]),c.fn.extend({text:function(s){return c.access(this,function(a){return a===e?c.text(this):this.empty().append((this[0]&&this[0].ownerDocument||X).createTextNode(a))},null,s,arguments.length)},wrapAll:function(s){if(c.isFunction(s))return this.each(function(f){c(this).wrapAll(s.call(this,f))});if(this[0]){var a=c(s,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&a.insertBefore(this[0]),a.map(function(){for(var f=this;f.firstChild&&f.firstChild.nodeType===1;)f=f.firstChild;return f}).append(this)}return this},wrapInner:function(s){return c.isFunction(s)?this.each(function(a){c(this).wrapInner(s.call(this,a))}):this.each(function(){var a=c(this),f=a.contents();f.length?f.wrapAll(s):a.append(s)})},wrap:function(s){var a=c.isFunction(s);return this.each(function(f){c(this).wrapAll(a?s.call(this,f):s)})},unwrap:function(){return this.parent().each(function(){c.nodeName(this,"body")||c(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(s){this.nodeType===1&&this.appendChild(s)})},prepend:function(){return this.domManip(arguments,!0,function(s){this.nodeType===1&&this.insertBefore(s,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var s=c.clean(arguments);return s.push.apply(s,this.toArray()),this.pushStack(s,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var s=this.pushStack(this,"after",arguments);return s.push.apply(s,c.clean(arguments)),s}},remove:function(s,a){for(var f=0,m;(m=this[f])!=null;f++)(!s||c.filter(s,[m]).length)&&(!a&&m.nodeType===1&&(c.cleanData(m.getElementsByTagName("*")),c.cleanData([m])),m.parentNode&&m.parentNode.removeChild(m));return this},empty:function(){for(var s=0,a;(a=this[s])!=null;s++)for(a.nodeType===1&&c.cleanData(a.getElementsByTagName("*"));a.firstChild;)a.removeChild(a.firstChild);return this},clone:function(s,a){return s=s??!1,a=a??s,this.map(function(){return c.clone(this,s,a)})},html:function(s){return c.access(this,function(a){var f=this[0]||{},m=0,y=this.length;if(a===e)return f.nodeType===1?f.innerHTML.replace(st,""):null;if(typeof a=="string"&&!Y.test(a)&&(c.support.leadingWhitespace||!lt.test(a))&&!nt[(Mt.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(qe,"<$1></$2>");try{for(;m<y;m++)f=this[m]||{},f.nodeType===1&&(c.cleanData(f.getElementsByTagName("*")),f.innerHTML=a);f=0}catch{}}f&&this.empty().append(a)},null,s,arguments.length)},replaceWith:function(s){return this[0]&&this[0].parentNode?c.isFunction(s)?this.each(function(a){var f=c(this),m=f.html();f.replaceWith(s.call(this,a,m))}):(typeof s!="string"&&(s=c(s).detach()),this.each(function(){var a=this.nextSibling,f=this.parentNode;c(this).remove(),a?c(a).before(s):c(f).append(s)})):this.length?this.pushStack(c(c.isFunction(s)?s():s),"replaceWith",s):this},detach:function(s){return this.remove(s,!0)},domManip:function(s,a,f){var m,y,E,L,N=s[0],j=[];if(!c.support.checkClone&&arguments.length===3&&typeof N=="string"&&xe.test(N))return this.each(function(){c(this).domManip(s,a,f,!0)});if(c.isFunction(N))return this.each(function(ye){var ie=c(this);s[0]=N.call(this,ye,a?ie.html():e),ie.domManip(s,a,f)});if(this[0]){if(L=N&&N.parentNode,c.support.parentNode&&L&&L.nodeType===11&&L.childNodes.length===this.length?m={fragment:L}:m=c.buildFragment(s,this,j),E=m.fragment,E.childNodes.length===1?y=E=E.firstChild:y=E.firstChild,y){a=a&&c.nodeName(y,"tr");for(var q=0,ae=this.length,V=ae-1;q<ae;q++)f.call(a?z(this[q]):this[q],m.cacheable||ae>1&&q<V?c.clone(E,!0,!0):E)}j.length&&c.each(j,function(ye,ie){ie.src?c.ajax({type:"GET",global:!1,url:ie.src,async:!1,dataType:"script"}):c.globalEval((ie.text||ie.textContent||ie.innerHTML||"").replace(Oe,"/*$0*/")),ie.parentNode&&ie.parentNode.removeChild(ie)})}return this}}),c.buildFragment=function(s,a,f){var m,y,E,L,N=s[0];return a&&a[0]&&(L=a[0].ownerDocument||a[0]),L.createDocumentFragment||(L=X),s.length===1&&typeof N=="string"&&N.length<512&&L===X&&N.charAt(0)==="<"&&!Ne.test(N)&&(c.support.checkClone||!xe.test(N))&&(c.support.html5Clone||!fe.test(N))&&(y=!0,E=c.fragments[N],E&&E!==1&&(m=E)),m||(m=L.createDocumentFragment(),c.clean(s,L,m,f)),y&&(c.fragments[N]=E?m:1),{fragment:m,cacheable:y}},c.fragments={},c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(s,a){c.fn[s]=function(f){var m=[],y=c(f),E=this.length===1&&this[0].parentNode;if(E&&E.nodeType===11&&E.childNodes.length===1&&y.length===1)return y[a](this[0]),this;for(var L=0,N=y.length;L<N;L++){var j=(L>0?this.clone(!0):this).get();c(y[L])[a](j),m=m.concat(j)}return this.pushStack(m,s,y.selector)}}),c.extend({clone:function(s,a,f){var m,y,E,L=c.support.html5Clone||c.isXMLDoc(s)||!fe.test("<"+s.nodeName+">")?s.cloneNode(!0):M(s);if((!c.support.noCloneEvent||!c.support.noCloneChecked)&&(s.nodeType===1||s.nodeType===11)&&!c.isXMLDoc(s))for(A(s,L),m=D(s),y=D(L),E=0;m[E];++E)y[E]&&A(m[E],y[E]);if(a&&(B(s,L),f))for(m=D(s),y=D(L),E=0;m[E];++E)B(m[E],y[E]);return m=y=null,L},clean:function(s,a,f,m){var y,E,L,N=[];a=a||X,typeof a.createElement>"u"&&(a=a.ownerDocument||a[0]&&a[0].ownerDocument||X);for(var j=0,q;(q=s[j])!=null;j++)if(typeof q=="number"&&(q+=""),!!q){if(typeof q=="string")if(!Ft.test(q))q=a.createTextNode(q);else{q=q.replace(qe,"<$1></$2>");var ae=(Mt.exec(q)||["",""])[1].toLowerCase(),V=nt[ae]||nt._default,ye=V[0],ie=a.createElement("div"),Be=Ht.childNodes,ze;for(a===X?Ht.appendChild(ie):U(a).appendChild(ie),ie.innerHTML=V[1]+q+V[2];ye--;)ie=ie.lastChild;if(!c.support.tbody){var it=pt.test(q),Je=ae==="table"&&!it?ie.firstChild&&ie.firstChild.childNodes:V[1]==="<table>"&&!it?ie.childNodes:[];for(L=Je.length-1;L>=0;--L)c.nodeName(Je[L],"tbody")&&!Je[L].childNodes.length&&Je[L].parentNode.removeChild(Je[L])}!c.support.leadingWhitespace&&lt.test(q)&&ie.insertBefore(a.createTextNode(lt.exec(q)[0]),ie.firstChild),q=ie.childNodes,ie&&(ie.parentNode.removeChild(ie),Be.length>0&&(ze=Be[Be.length-1],ze&&ze.parentNode&&ze.parentNode.removeChild(ze)))}var Wt;if(!c.support.appendChecked)if(q[0]&&typeof(Wt=q.length)=="number")for(L=0;L<Wt;L++)g(q[L]);else g(q);q.nodeType?N.push(q):N=c.merge(N,q)}if(f)for(y=function(ft){return!ft.type||Fe.test(ft.type)},j=0;N[j];j++)if(E=N[j],m&&c.nodeName(E,"script")&&(!E.type||Fe.test(E.type)))m.push(E.parentNode?E.parentNode.removeChild(E):E);else{if(E.nodeType===1){var Xt=c.grep(E.getElementsByTagName("script"),y);N.splice.apply(N,[j+1,0].concat(Xt))}f.appendChild(E)}return N},cleanData:function(s){for(var a,f,m=c.cache,y=c.event.special,E=c.support.deleteExpando,L=0,N;(N=s[L])!=null;L++)if(!(N.nodeName&&c.noData[N.nodeName.toLowerCase()])&&(f=N[c.expando],f)){if(a=m[f],a&&a.events){for(var j in a.events)y[j]?c.event.remove(N,j):c.removeEvent(N,j,a.handle);a.handle&&(a.handle.elem=null)}E?delete N[c.expando]:N.removeAttribute&&N.removeAttribute(c.expando),delete m[f]}}});var Yt=/alpha\([^)]*\)/i,Pt=/opacity=([^)]*)/,xn=/([A-Z]|^ms)/g,Rn=/^[\-+]?(?:\d*\.)?\d+$/i,Fi=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,Fr=/^([\-+])=([\-+.\de]+)/,Wn=/^margin/,pr={position:"absolute",visibility:"hidden",display:"block"},On=["Top","Right","Bottom","Left"],Xn,xi,mr;c.fn.css=function(s,a){return c.access(this,function(f,m,y){return y!==e?c.style(f,m,y):c.css(f,m)},s,a,arguments.length>1)},c.extend({cssHooks:{opacity:{get:function(s,a){if(a){var f=Xn(s,"opacity");return f===""?"1":f}return s.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:c.support.cssFloat?"cssFloat":"styleFloat"},style:function(s,a,f,m){if(s&&s.nodeType!==3&&s.nodeType!==8&&s.style){var y,E,L=c.camelCase(a),N=s.style,j=c.cssHooks[L];if(a=c.cssProps[L]||L,f===e)return j&&"get"in j&&(y=j.get(s,!1,m))!==e?y:N[a];if(E=typeof f,E==="string"&&(y=Fr.exec(f))&&(f=+(y[1]+1)*+y[2]+parseFloat(c.css(s,a)),E="number"),f==null||E==="number"&&isNaN(f))return;if(E==="number"&&!c.cssNumber[L]&&(f+="px"),!j||!("set"in j)||(f=j.set(s,f))!==e)try{N[a]=f}catch{}}},css:function(s,a,f){var m,y;if(a=c.camelCase(a),y=c.cssHooks[a],a=c.cssProps[a]||a,a==="cssFloat"&&(a="float"),y&&"get"in y&&(m=y.get(s,!0,f))!==e)return m;if(Xn)return Xn(s,a)},swap:function(s,a,f){var m={},y,E;for(E in a)m[E]=s.style[E],s.style[E]=a[E];y=f.call(s);for(E in a)s.style[E]=m[E];return y}}),c.curCSS=c.css,X.defaultView&&X.defaultView.getComputedStyle&&(xi=function(s,a){var f,m,y,E,L=s.style;return a=a.replace(xn,"-$1").toLowerCase(),(m=s.ownerDocument.defaultView)&&(y=m.getComputedStyle(s,null))&&(f=y.getPropertyValue(a),f===""&&!c.contains(s.ownerDocument.documentElement,s)&&(f=c.style(s,a))),!c.support.pixelMargin&&y&&Wn.test(a)&&Fi.test(f)&&(E=L.width,L.width=f,f=y.width,L.width=E),f}),X.documentElement.currentStyle&&(mr=function(s,a){var f,m,y,E=s.currentStyle&&s.currentStyle[a],L=s.style;return E==null&&L&&(y=L[a])&&(E=y),Fi.test(E)&&(f=L.left,m=s.runtimeStyle&&s.runtimeStyle.left,m&&(s.runtimeStyle.left=s.currentStyle.left),L.left=a==="fontSize"?"1em":E,E=L.pixelLeft+"px",L.left=f,m&&(s.runtimeStyle.left=m)),E===""?"auto":E}),Xn=xi||mr,c.each(["height","width"],function(s,a){c.cssHooks[a]={get:function(f,m,y){if(m)return f.offsetWidth!==0?w(f,a,y):c.swap(f,pr,function(){return w(f,a,y)})},set:function(f,m){return Rn.test(m)?m+"px":m}}}),c.support.opacity||(c.cssHooks.opacity={get:function(s,a){return Pt.test((a&&s.currentStyle?s.currentStyle.filter:s.style.filter)||"")?parseFloat(RegExp.$1)/100+"":a?"1":""},set:function(s,a){var f=s.style,m=s.currentStyle,y=c.isNumeric(a)?"alpha(opacity="+a*100+")":"",E=m&&m.filter||f.filter||"";f.zoom=1,!(a>=1&&c.trim(E.replace(Yt,""))===""&&(f.removeAttribute("filter"),m&&!m.filter))&&(f.filter=Yt.test(E)?E.replace(Yt,y):E+" "+y)}}),c(function(){c.support.reliableMarginRight||(c.cssHooks.marginRight={get:function(s,a){return c.swap(s,{display:"inline-block"},function(){return a?Xn(s,"margin-right"):s.style.marginRight})}})}),c.expr&&c.expr.filters&&(c.expr.filters.hidden=function(s){var a=s.offsetWidth,f=s.offsetHeight;return a===0&&f===0||!c.support.reliableHiddenOffsets&&(s.style&&s.style.display||c.css(s,"display"))==="none"},c.expr.filters.visible=function(s){return!c.expr.filters.hidden(s)}),c.each({margin:"",padding:"",border:"Width"},function(s,a){c.cssHooks[s+a]={expand:function(f){var m,y=typeof f=="string"?f.split(" "):[f],E={};for(m=0;m<4;m++)E[s+On[m]+a]=y[m]||y[m-2]||y[0];return E}}});var Oi=/%20/g,Or=/\[\]$/,gr=/\r?\n/g,bs=/#.*$/,ws=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,As=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,Cs=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,Rs=/^(?:GET|HEAD)$/,R=/^\/\//,K=/\?/,se=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,oe=/^(?:select|textarea)/i,J=/\s+/,Te=/([?&])_=[^&]*/,Pe=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,Ge=c.fn.load,$e={},ct={},at,Ze,Et="*/*";try{at=he.href}catch{at=X.createElement("a"),at.href="",at=at.href}Ze=Pe.exec(at.toLowerCase())||[],c.fn.extend({load:function(s,a,f){if(typeof s!="string"&&Ge)return Ge.apply(this,arguments);if(!this.length)return this;var m=s.indexOf(" ");if(m>=0){var y=s.slice(m,s.length);s=s.slice(0,m)}var E="GET";a&&(c.isFunction(a)?(f=a,a=e):typeof a=="object"&&(a=c.param(a,c.ajaxSettings.traditional),E="POST"));var L=this;return c.ajax({url:s,type:E,dataType:"html",data:a,complete:function(N,j,q){q=N.responseText,N.isResolved()&&(N.done(function(ae){q=ae}),L.html(y?c("<div>").append(q.replace(se,"")).find(y):q)),f&&L.each(f,[q,j,N])}}),this},serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?c.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||oe.test(this.nodeName)||As.test(this.type))}).map(function(s,a){var f=c(this).val();return f==null?null:c.isArray(f)?c.map(f,function(m,y){return{name:a.name,value:m.replace(gr,`\r
`)}}):{name:a.name,value:f.replace(gr,`\r
`)}}).get()}}),c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(s,a){c.fn[a]=function(f){return this.on(a,f)}}),c.each(["get","post"],function(s,a){c[a]=function(f,m,y,E){return c.isFunction(m)&&(E=E||y,y=m,m=e),c.ajax({type:a,url:f,data:m,success:y,dataType:E})}}),c.extend({getScript:function(s,a){return c.get(s,e,a,"script")},getJSON:function(s,a,f){return c.get(s,a,f,"json")},ajaxSetup:function(s,a){return a?v(s,c.ajaxSettings):(a=s,s=c.ajaxSettings),v(s,a),s},ajaxSettings:{url:at,isLocal:Cs.test(Ze[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Et},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":i.String,"text html":!0,"text json":c.parseJSON,"text xml":c.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:S($e),ajaxTransport:S(ct),ajax:function(s,a){function f(ne,re,_e,pe){if(Je!==2){Je=2,ze&&clearTimeout(ze),Be=e,ye=pe||"",ft.readyState=ne>0?4:0;var Se,Ae,De,je=re,ln=_e?d(m,ft,_e):e,H,de;if(ne>=200&&ne<300||ne===304)if(m.ifModified&&((H=ft.getResponseHeader("Last-Modified"))&&(c.lastModified[q]=H),(de=ft.getResponseHeader("Etag"))&&(c.etag[q]=de)),ne===304)je="notmodified",Se=!0;else try{Ae=p(m,ln),je="success",Se=!0}catch(Ce){je="parsererror",De=Ce}else De=je,(!je||ne)&&(je="error",ne<0&&(ne=0));ft.status=ne,ft.statusText=""+(re||je),Se?L.resolveWith(y,[Ae,je,ft]):L.rejectWith(y,[ft,je,De]),ft.statusCode(j),j=e,Wt&&E.trigger("ajax"+(Se?"Success":"Error"),[ft,m,Se?Ae:De]),N.fireWith(y,[ft,je]),Wt&&(E.trigger("ajaxComplete",[ft,m]),--c.active||c.event.trigger("ajaxStop"))}}typeof s=="object"&&(a=s,s=e),a=a||{};var m=c.ajaxSetup({},a),y=m.context||m,E=y!==m&&(y.nodeType||y instanceof c)?c(y):c.event,L=c.Deferred(),N=c.Callbacks("once memory"),j=m.statusCode||{},q,ae={},V={},ye,ie,Be,ze,it,Je=0,Wt,Xt,ft={readyState:0,setRequestHeader:function(ne,re){if(!Je){var _e=ne.toLowerCase();ne=V[_e]=V[_e]||ne,ae[ne]=re}return this},getAllResponseHeaders:function(){return Je===2?ye:null},getResponseHeader:function(ne){var re;if(Je===2){if(!ie)for(ie={};re=ws.exec(ye);)ie[re[1].toLowerCase()]=re[2];re=ie[ne.toLowerCase()]}return re===e?null:re},overrideMimeType:function(ne){return Je||(m.mimeType=ne),this},abort:function(ne){return ne=ne||"abort",Be&&Be.abort(ne),f(0,ne),this}};if(L.promise(ft),ft.success=ft.done,ft.error=ft.fail,ft.complete=N.add,ft.statusCode=function(ne){if(ne){var re;if(Je<2)for(re in ne)j[re]=[j[re],ne[re]];else re=ne[ft.status],ft.then(re,re)}return this},m.url=((s||m.url)+"").replace(bs,"").replace(R,Ze[1]+"//"),m.dataTypes=c.trim(m.dataType||"*").toLowerCase().split(J),m.crossDomain==null&&(it=Pe.exec(m.url.toLowerCase()),m.crossDomain=!(!it||it[1]==Ze[1]&&it[2]==Ze[2]&&(it[3]||(it[1]==="http:"?80:443))==(Ze[3]||(Ze[1]==="http:"?80:443)))),m.data&&m.processData&&typeof m.data!="string"&&(m.data=c.param(m.data,m.traditional)),x($e,m,a,ft),Je===2)return!1;if(Wt=m.global,m.type=m.type.toUpperCase(),m.hasContent=!Rs.test(m.type),Wt&&c.active++===0&&c.event.trigger("ajaxStart"),!m.hasContent&&(m.data&&(m.url+=(K.test(m.url)?"&":"?")+m.data,delete m.data),q=m.url,m.cache===!1)){var P=c.now(),G=m.url.replace(Te,"$1_="+P);m.url=G+(G===m.url?(K.test(m.url)?"&":"?")+"_="+P:"")}(m.data&&m.hasContent&&m.contentType!==!1||a.contentType)&&ft.setRequestHeader("Content-Type",m.contentType),m.ifModified&&(q=q||m.url,c.lastModified[q]&&ft.setRequestHeader("If-Modified-Since",c.lastModified[q]),c.etag[q]&&ft.setRequestHeader("If-None-Match",c.etag[q])),ft.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+(m.dataTypes[0]!=="*"?", "+Et+"; q=0.01":""):m.accepts["*"]);for(Xt in m.headers)ft.setRequestHeader(Xt,m.headers[Xt]);if(m.beforeSend&&(m.beforeSend.call(y,ft,m)===!1||Je===2))return ft.abort(),!1;for(Xt in{success:1,error:1,complete:1})ft[Xt](m[Xt]);if(Be=x(ct,m,a,ft),!Be)f(-1,"No Transport");else{ft.readyState=1,Wt&&E.trigger("ajaxSend",[ft,m]),m.async&&m.timeout>0&&(ze=setTimeout(function(){ft.abort("timeout")},m.timeout));try{Je=1,Be.send(ae,f)}catch(ne){if(Je<2)f(-1,ne);else throw ne}}return ft},param:function(s,a){var f=[],m=function(E,L){L=c.isFunction(L)?L():L,f[f.length]=encodeURIComponent(E)+"="+encodeURIComponent(L)};if(a===e&&(a=c.ajaxSettings.traditional),c.isArray(s)||s.jquery&&!c.isPlainObject(s))c.each(s,function(){m(this.name,this.value)});else for(var y in s)_(y,s[y],a,m);return f.join("&").replace(Oi,"+")}}),c.extend({active:0,lastModified:{},etag:{}});var Rt=c.now(),Vt=/(\=)\?(&|$)|\?\?/i;c.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return c.expando+"_"+Rt++}}),c.ajaxPrefilter("json jsonp",function(s,a,f){var m=typeof s.data=="string"&&/^application\/x\-www\-form\-urlencoded/.test(s.contentType);if(s.dataTypes[0]==="jsonp"||s.jsonp!==!1&&(Vt.test(s.url)||m&&Vt.test(s.data))){var y,E=s.jsonpCallback=c.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback,L=i[E],N=s.url,j=s.data,q="$1"+E+"$2";return s.jsonp!==!1&&(N=N.replace(Vt,q),s.url===N&&(m&&(j=j.replace(Vt,q)),s.data===j&&(N+=(/\?/.test(N)?"&":"?")+s.jsonp+"="+E))),s.url=N,s.data=j,i[E]=function(ae){y=[ae]},f.always(function(){i[E]=L,y&&c.isFunction(L)&&i[E](y[0])}),s.converters["script json"]=function(){return y||c.error(E+" was not called"),y[0]},s.dataTypes[0]="json","script"}}),c.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(s){return c.globalEval(s),s}}}),c.ajaxPrefilter("script",function(s){s.cache===e&&(s.cache=!1),s.crossDomain&&(s.type="GET",s.global=!1)}),c.ajaxTransport("script",function(s){if(s.crossDomain){var a,f=X.head||X.getElementsByTagName("head")[0]||X.documentElement;return{send:function(m,y){a=X.createElement("script"),a.async="async",s.scriptCharset&&(a.charset=s.scriptCharset),a.src=s.url,a.onload=a.onreadystatechange=function(E,L){(L||!a.readyState||/loaded|complete/.test(a.readyState))&&(a.onload=a.onreadystatechange=null,f&&a.parentNode&&f.removeChild(a),a=e,L||y(200,"success"))},f.insertBefore(a,f.firstChild)},abort:function(){a&&a.onload(0,1)}}}});var Gt=i.ActiveXObject?function(){for(var s in et)et[s](0,1)}:!1,At=0,et;c.ajaxSettings.xhr=i.ActiveXObject?function(){return!this.isLocal&&h()||u()}:h,function(s){c.extend(c.support,{ajax:!!s,cors:!!s&&"withCredentials"in s})}(c.ajaxSettings.xhr()),c.support.ajax&&c.ajaxTransport(function(s){if(!s.crossDomain||c.support.cors){var a;return{send:function(f,m){var y=s.xhr(),E,L;if(s.username?y.open(s.type,s.url,s.async,s.username,s.password):y.open(s.type,s.url,s.async),s.xhrFields)for(L in s.xhrFields)y[L]=s.xhrFields[L];s.mimeType&&y.overrideMimeType&&y.overrideMimeType(s.mimeType),!s.crossDomain&&!f["X-Requested-With"]&&(f["X-Requested-With"]="XMLHttpRequest");try{for(L in f)y.setRequestHeader(L,f[L])}catch{}y.send(s.hasContent&&s.data||null),a=function(N,j){var q,ae,V,ye,ie;try{if(a&&(j||y.readyState===4))if(a=e,E&&(y.onreadystatechange=c.noop,Gt&&delete et[E]),j)y.readyState!==4&&y.abort();else{q=y.status,V=y.getAllResponseHeaders(),ye={},ie=y.responseXML,ie&&ie.documentElement&&(ye.xml=ie);try{ye.text=y.responseText}catch{}try{ae=y.statusText}catch{ae=""}!q&&s.isLocal&&!s.crossDomain?q=ye.text?200:404:q===1223&&(q=204)}}catch(Be){j||m(-1,Be)}ye&&m(q,ae,ye,V)},!s.async||y.readyState===4?a():(E=++At,Gt&&(et||(et={},c(i).unload(Gt)),et[E]=a),y.onreadystatechange=a)},abort:function(){a&&a(0,1)}}}});var qt={},gt,nn,ri=/^(?:toggle|show|hide)$/,dn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,Bn,It=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],sn;c.fn.extend({show:function(s,a,f){var m,y;if(s||s===0)return this.animate(r("show",3),s,a,f);for(var E=0,L=this.length;E<L;E++)m=this[E],m.style&&(y=m.style.display,!c._data(m,"olddisplay")&&y==="none"&&(y=m.style.display=""),(y===""&&c.css(m,"display")==="none"||!c.contains(m.ownerDocument.documentElement,m))&&c._data(m,"olddisplay",n(m.nodeName)));for(E=0;E<L;E++)m=this[E],m.style&&(y=m.style.display,(y===""||y==="none")&&(m.style.display=c._data(m,"olddisplay")||""));return this},hide:function(s,a,f){if(s||s===0)return this.animate(r("hide",3),s,a,f);for(var m,y,E=0,L=this.length;E<L;E++)m=this[E],m.style&&(y=c.css(m,"display"),y!=="none"&&!c._data(m,"olddisplay")&&c._data(m,"olddisplay",y));for(E=0;E<L;E++)this[E].style&&(this[E].style.display="none");return this},_toggle:c.fn.toggle,toggle:function(s,a,f){var m=typeof s=="boolean";return c.isFunction(s)&&c.isFunction(a)?this._toggle.apply(this,arguments):s==null||m?this.each(function(){var y=m?s:c(this).is(":hidden");c(this)[y?"show":"hide"]()}):this.animate(r("toggle",3),s,a,f),this},fadeTo:function(s,a,f,m){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:a},s,f,m)},animate:function(s,a,f,m){function y(){E.queue===!1&&c._mark(this);var L=c.extend({},E),N=this.nodeType===1,j=N&&c(this).is(":hidden"),q,ae,V,ye,ie,Be,ze,it,Je,Wt,Xt;L.animatedProperties={};for(V in s)if(q=c.camelCase(V),V!==q&&(s[q]=s[V],delete s[V]),(ie=c.cssHooks[q])&&"expand"in ie){Be=ie.expand(s[q]),delete s[q];for(V in Be)V in s||(s[V]=Be[V])}for(q in s){if(ae=s[q],c.isArray(ae)?(L.animatedProperties[q]=ae[1],ae=s[q]=ae[0]):L.animatedProperties[q]=L.specialEasing&&L.specialEasing[q]||L.easing||"swing",ae==="hide"&&j||ae==="show"&&!j)return L.complete.call(this);N&&(q==="height"||q==="width")&&(L.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],c.css(this,"display")==="inline"&&c.css(this,"float")==="none"&&(!c.support.inlineBlockNeedsLayout||n(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}L.overflow!=null&&(this.style.overflow="hidden");for(V in s)ye=new c.fx(this,L,V),ae=s[V],ri.test(ae)?(Xt=c._data(this,"toggle"+V)||(ae==="toggle"?j?"show":"hide":0),Xt?(c._data(this,"toggle"+V,Xt==="show"?"hide":"show"),ye[Xt]()):ye[ae]()):(ze=dn.exec(ae),it=ye.cur(),ze?(Je=parseFloat(ze[2]),Wt=ze[3]||(c.cssNumber[V]?"":"px"),Wt!=="px"&&(c.style(this,V,(Je||1)+Wt),it=(Je||1)/ye.cur()*it,c.style(this,V,it+Wt)),ze[1]&&(Je=(ze[1]==="-="?-1:1)*Je+it),ye.custom(it,Je,Wt)):ye.custom(it,ae,""));return!0}var E=c.speed(a,f,m);return c.isEmptyObject(s)?this.each(E.complete,[!1]):(s=c.extend({},s),E.queue===!1?this.each(y):this.queue(E.queue,y))},stop:function(s,a,f){return typeof s!="string"&&(f=a,a=s,s=e),a&&s!==!1&&this.queue(s||"fx",[]),this.each(function(){function m(j,q,ae){var V=q[ae];c.removeData(j,ae,!0),V.stop(f)}var y,E=!1,L=c.timers,N=c._data(this);if(f||c._unmark(!0,this),s==null)for(y in N)N[y]&&N[y].stop&&y.indexOf(".run")===y.length-4&&m(this,N,y);else N[y=s+".run"]&&N[y].stop&&m(this,N,y);for(y=L.length;y--;)L[y].elem===this&&(s==null||L[y].queue===s)&&(f?L[y](!0):L[y].saveState(),E=!0,L.splice(y,1));(!f||!E)&&c.dequeue(this,s)})}}),c.each({slideDown:r("show",1),slideUp:r("hide",1),slideToggle:r("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(s,a){c.fn[s]=function(f,m,y){return this.animate(a,f,m,y)}}),c.extend({speed:function(s,a,f){var m=s&&typeof s=="object"?c.extend({},s):{complete:f||!f&&a||c.isFunction(s)&&s,duration:s,easing:f&&a||a&&!c.isFunction(a)&&a};return m.duration=c.fx.off?0:typeof m.duration=="number"?m.duration:m.duration in c.fx.speeds?c.fx.speeds[m.duration]:c.fx.speeds._default,(m.queue==null||m.queue===!0)&&(m.queue="fx"),m.old=m.complete,m.complete=function(y){c.isFunction(m.old)&&m.old.call(this),m.queue?c.dequeue(this,m.queue):y!==!1&&c._unmark(this)},m},easing:{linear:function(s){return s},swing:function(s){return-Math.cos(s*Math.PI)/2+.5}},timers:[],fx:function(s,a,f){this.options=a,this.elem=s,this.prop=f,a.orig=a.orig||{}}}),c.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(c.fx.step[this.prop]||c.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var s,a=c.css(this.elem,this.prop);return isNaN(s=parseFloat(a))?!a||a==="auto"?0:a:s},custom:function(s,a,f){function m(L){return y.step(L)}var y=this,E=c.fx;this.startTime=sn||l(),this.end=a,this.now=this.start=s,this.pos=this.state=0,this.unit=f||this.unit||(c.cssNumber[this.prop]?"":"px"),m.queue=this.options.queue,m.elem=this.elem,m.saveState=function(){c._data(y.elem,"fxshow"+y.prop)===e&&(y.options.hide?c._data(y.elem,"fxshow"+y.prop,y.start):y.options.show&&c._data(y.elem,"fxshow"+y.prop,y.end))},m()&&c.timers.push(m)&&!Bn&&(Bn=setInterval(E.tick,E.interval))},show:function(){var s=c._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=s||c.style(this.elem,this.prop),this.options.show=!0,s!==e?this.custom(this.cur(),s):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),c(this.elem).show()},hide:function(){this.options.orig[this.prop]=c._data(this.elem,"fxshow"+this.prop)||c.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(s){var a,f,m,y=sn||l(),E=!0,L=this.elem,N=this.options;if(s||y>=N.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),N.animatedProperties[this.prop]=!0;for(a in N.animatedProperties)N.animatedProperties[a]!==!0&&(E=!1);if(E){if(N.overflow!=null&&!c.support.shrinkWrapBlocks&&c.each(["","X","Y"],function(j,q){L.style["overflow"+q]=N.overflow[j]}),N.hide&&c(L).hide(),N.hide||N.show)for(a in N.animatedProperties)c.style(L,a,N.orig[a]),c.removeData(L,"fxshow"+a,!0),c.removeData(L,"toggle"+a,!0);m=N.complete,m&&(N.complete=!1,m.call(L))}return!1}return N.duration==1/0?this.now=y:(f=y-this.startTime,this.state=f/N.duration,this.pos=c.easing[N.animatedProperties[this.prop]](this.state,f,0,1,N.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update(),!0}},c.extend(c.fx,{tick:function(){for(var s,a=c.timers,f=0;f<a.length;f++)s=a[f],!s()&&a[f]===s&&a.splice(f--,1);a.length||c.fx.stop()},interval:13,stop:function(){clearInterval(Bn),Bn=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(s){c.style(s.elem,"opacity",s.now)},_default:function(s){s.elem.style&&s.elem.style[s.prop]!=null?s.elem.style[s.prop]=s.now+s.unit:s.elem[s.prop]=s.now}}}),c.each(It.concat.apply([],It),function(s,a){a.indexOf("margin")&&(c.fx.step[a]=function(f){c.style(f.elem,a,Math.max(0,f.now)+f.unit)})}),c.expr&&c.expr.filters&&(c.expr.filters.animated=function(s){return c.grep(c.timers,function(a){return s===a.elem}).length});var cn,on=/^t(?:able|d|h)$/i,an=/^(?:body|html)$/i;"getBoundingClientRect"in X.documentElement?cn=function(s,a,f,m){try{m=s.getBoundingClientRect()}catch{}if(!m||!c.contains(f,s))return m?{top:m.top,left:m.left}:{top:0,left:0};var y=a.body,E=t(a),L=f.clientTop||y.clientTop||0,N=f.clientLeft||y.clientLeft||0,j=E.pageYOffset||c.support.boxModel&&f.scrollTop||y.scrollTop,q=E.pageXOffset||c.support.boxModel&&f.scrollLeft||y.scrollLeft,ae=m.top+j-L,V=m.left+q-N;return{top:ae,left:V}}:cn=function(s,a,f){for(var m,y=s.offsetParent,E=a.body,L=a.defaultView,N=L?L.getComputedStyle(s,null):s.currentStyle,j=s.offsetTop,q=s.offsetLeft;(s=s.parentNode)&&s!==E&&s!==f&&!(c.support.fixedPosition&&N.position==="fixed");)m=L?L.getComputedStyle(s,null):s.currentStyle,j-=s.scrollTop,q-=s.scrollLeft,s===y&&(j+=s.offsetTop,q+=s.offsetLeft,c.support.doesNotAddBorder&&(!c.support.doesAddBorderForTableAndCells||!on.test(s.nodeName))&&(j+=parseFloat(m.borderTopWidth)||0,q+=parseFloat(m.borderLeftWidth)||0),y=s.offsetParent),c.support.subtractsBorderForOverflowNotVisible&&m.overflow!=="visible"&&(j+=parseFloat(m.borderTopWidth)||0,q+=parseFloat(m.borderLeftWidth)||0),N=m;return(N.position==="relative"||N.position==="static")&&(j+=E.offsetTop,q+=E.offsetLeft),c.support.fixedPosition&&N.position==="fixed"&&(j+=Math.max(f.scrollTop,E.scrollTop),q+=Math.max(f.scrollLeft,E.scrollLeft)),{top:j,left:q}},c.fn.offset=function(s){if(arguments.length)return s===e?this:this.each(function(m){c.offset.setOffset(this,s,m)});var a=this[0],f=a&&a.ownerDocument;return f?a===f.body?c.offset.bodyOffset(a):cn(a,f,f.documentElement):null},c.offset={bodyOffset:function(s){var a=s.offsetTop,f=s.offsetLeft;return c.support.doesNotIncludeMarginInBodyOffset&&(a+=parseFloat(c.css(s,"marginTop"))||0,f+=parseFloat(c.css(s,"marginLeft"))||0),{top:a,left:f}},setOffset:function(s,a,f){var m=c.css(s,"position");m==="static"&&(s.style.position="relative");var y=c(s),E=y.offset(),L=c.css(s,"top"),N=c.css(s,"left"),j=(m==="absolute"||m==="fixed")&&c.inArray("auto",[L,N])>-1,q={},ae={},V,ye;j?(ae=y.position(),V=ae.top,ye=ae.left):(V=parseFloat(L)||0,ye=parseFloat(N)||0),c.isFunction(a)&&(a=a.call(s,f,E)),a.top!=null&&(q.top=a.top-E.top+V),a.left!=null&&(q.left=a.left-E.left+ye),"using"in a?a.using.call(s,q):y.css(q)}},c.fn.extend({position:function(){if(!this[0])return null;var s=this[0],a=this.offsetParent(),f=this.offset(),m=an.test(a[0].nodeName)?{top:0,left:0}:a.offset();return f.top-=parseFloat(c.css(s,"marginTop"))||0,f.left-=parseFloat(c.css(s,"marginLeft"))||0,m.top+=parseFloat(c.css(a[0],"borderTopWidth"))||0,m.left+=parseFloat(c.css(a[0],"borderLeftWidth"))||0,{top:f.top-m.top,left:f.left-m.left}},offsetParent:function(){return this.map(function(){for(var s=this.offsetParent||X.body;s&&!an.test(s.nodeName)&&c.css(s,"position")==="static";)s=s.offsetParent;return s})}}),c.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(s,a){var f=/Y/.test(a);c.fn[s]=function(m){return c.access(this,function(y,E,L){var N=t(y);if(L===e)return N?a in N?N[a]:c.support.boxModel&&N.document.documentElement[E]||N.document.body[E]:y[E];N?N.scrollTo(f?c(N).scrollLeft():L,f?L:c(N).scrollTop()):y[E]=L},s,m,arguments.length,null)}}),c.each({Height:"height",Width:"width"},function(s,a){var f="client"+s,m="scroll"+s,y="offset"+s;c.fn["inner"+s]=function(){var E=this[0];return E?E.style?parseFloat(c.css(E,a,"padding")):this[a]():null},c.fn["outer"+s]=function(E){var L=this[0];return L?L.style?parseFloat(c.css(L,a,E?"margin":"border")):this[a]():null},c.fn[a]=function(E){return c.access(this,function(L,N,j){var q,ae,V,ye;if(c.isWindow(L))return q=L.document,ae=q.documentElement[f],c.support.boxModel&&ae||q.body&&q.body[f]||ae;if(L.nodeType===9)return q=L.documentElement,q[f]>=q[m]?q[f]:Math.max(L.body[m],q[m],L.body[y],q[y]);if(j===e)return V=c.css(L,N),ye=parseFloat(V),c.isNumeric(ye)?ye:V;c(L).css(N,j)},a,E,arguments.length,null)}}),i.jQuery=i.$=c,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return c})})(window);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ta="171",ac=0,_a=1,lc=2,El=1,cc=2,Zn=3,gi=0,vn=1,Jn=2,di=0,tr=1,va=2,xa=3,ya=4,uc=5,Ri=100,hc=101,fc=102,dc=103,pc=104,mc=200,gc=201,_c=202,vc=203,po=204,mo=205,xc=206,yc=207,Mc=208,Sc=209,Ec=210,Tc=211,bc=212,wc=213,Ac=214,go=0,_o=1,vo=2,rr=3,xo=4,yo=5,Mo=6,So=7,na=0,Cc=1,Rc=2,pi=0,Lc=1,Pc=2,Dc=3,Ic=4,Uc=5,Nc=6,Fc=7,Tl=300,sr=301,or=302,Eo=303,To=304,vs=306,ms=1e3,Di=1001,bo=1002,Nn=1003,Oc=1004,Br=1005,Gn=1006,Ls=1007,Ii=1008,ii=1009,bl=1010,wl=1011,Cr=1012,ia=1013,Ui=1014,Qn=1015,Lr=1016,ra=1017,sa=1018,ar=1020,Al=35902,Cl=1021,Rl=1022,Un=1023,Ll=1024,Pl=1025,nr=1026,lr=1027,Dl=1028,oa=1029,Il=1030,aa=1031,la=1033,cs=33776,us=33777,hs=33778,fs=33779,wo=35840,Ao=35841,Co=35842,Ro=35843,Lo=36196,Po=37492,Do=37496,Io=37808,Uo=37809,No=37810,Fo=37811,Oo=37812,Bo=37813,zo=37814,ko=37815,Ho=37816,Go=37817,Vo=37818,Wo=37819,Xo=37820,qo=37821,ds=36492,jo=36494,Yo=36495,Ul=36283,$o=36284,Ko=36285,Zo=36286,Bc=3200,zc=3201,Nl=0,kc=1,fi="",An="srgb",cr="srgb-linear",gs="linear",Ot="srgb",Bi=7680,Ma=519,Hc=512,Gc=513,Vc=514,Fl=515,Wc=516,Xc=517,qc=518,jc=519,Sa=35044,Ea="300 es",ei=2e3,_s=2001;class hr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let o=0,l=r.length;o<l;o++)r[o].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ps=Math.PI/180,Jo=180/Math.PI;function Pr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function Tt(i,e,t){return Math.max(e,Math.min(t,i))}function Yc(i,e){return(i%e+e)%e}function Ds(i,e,t){return(1-t)*i+t*e}function _r(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _n(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class wt{constructor(e=0,t=0){wt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,l=this.y-e.y;return this.x=o*n-l*r+e.x,this.y=o*r+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _t{constructor(e,t,n,r,o,l,u,h,p){_t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,l,u,h,p)}set(e,t,n,r,o,l,u,h,p){const d=this.elements;return d[0]=e,d[1]=r,d[2]=u,d[3]=t,d[4]=o,d[5]=h,d[6]=n,d[7]=l,d[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,l=n[0],u=n[3],h=n[6],p=n[1],d=n[4],_=n[7],v=n[2],x=n[5],S=n[8],w=r[0],M=r[3],g=r[6],I=r[1],D=r[4],A=r[7],B=r[2],z=r[5],U=r[8];return o[0]=l*w+u*I+h*B,o[3]=l*M+u*D+h*z,o[6]=l*g+u*A+h*U,o[1]=p*w+d*I+_*B,o[4]=p*M+d*D+_*z,o[7]=p*g+d*A+_*U,o[2]=v*w+x*I+S*B,o[5]=v*M+x*D+S*z,o[8]=v*g+x*A+S*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],l=e[4],u=e[5],h=e[6],p=e[7],d=e[8];return t*l*d-t*u*p-n*o*d+n*u*h+r*o*p-r*l*h}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],l=e[4],u=e[5],h=e[6],p=e[7],d=e[8],_=d*l-u*p,v=u*h-d*o,x=p*o-l*h,S=t*_+n*v+r*x;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/S;return e[0]=_*w,e[1]=(r*p-d*n)*w,e[2]=(u*n-r*l)*w,e[3]=v*w,e[4]=(d*t-r*h)*w,e[5]=(r*o-u*t)*w,e[6]=x*w,e[7]=(n*h-p*t)*w,e[8]=(l*t-n*o)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,l,u){const h=Math.cos(o),p=Math.sin(o);return this.set(n*h,n*p,-n*(h*l+p*u)+l+e,-r*p,r*h,-r*(-p*l+h*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(Is.makeScale(e,t)),this}rotate(e){return this.premultiply(Is.makeRotation(-e)),this}translate(e,t){return this.premultiply(Is.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Is=new _t;function Ol(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Rr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $c(){const i=Rr("canvas");return i.style.display="block",i}const Ta={};function Ji(i){i in Ta||(Ta[i]=!0,console.warn(i))}function Kc(i,e,t){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}function Zc(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Jc(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ba=new _t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wa=new _t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qc(){const i={enabled:!0,workingColorSpace:cr,spaces:{},convert:function(r,o,l){return this.enabled===!1||o===l||!o||!l||(this.spaces[o].transfer===Ot&&(r.r=ni(r.r),r.g=ni(r.g),r.b=ni(r.b)),this.spaces[o].primaries!==this.spaces[l].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Ot&&(r.r=ir(r.r),r.g=ir(r.g),r.b=ir(r.b))),r},fromWorkingColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},toWorkingColorSpace:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===fi?gs:this.spaces[r].transfer},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,l){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[cr]:{primaries:e,whitePoint:n,transfer:gs,toXYZ:ba,fromXYZ:wa,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:e,whitePoint:n,transfer:Ot,toXYZ:ba,fromXYZ:wa,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),i}const Lt=Qc();function ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ir(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let zi;class eu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zi===void 0&&(zi=Rr("canvas")),zi.width=e.width,zi.height=e.height;const n=zi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=zi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let l=0;l<o.length;l++)o[l]=ni(o[l]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ni(t[n]/255)*255):t[n]=ni(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tu=0;class Bl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=Pr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let l=0,u=r.length;l<u;l++)r[l].isDataTexture?o.push(Us(r[l].image)):o.push(Us(r[l]))}else o=Us(r);n.url=o}return t||(e.images[this.uuid]=n),n}}function Us(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?eu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nu=0;class mn extends hr{constructor(e=mn.DEFAULT_IMAGE,t=mn.DEFAULT_MAPPING,n=Di,r=Di,o=Gn,l=Ii,u=Un,h=ii,p=mn.DEFAULT_ANISOTROPY,d=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=Pr(),this.name="",this.source=new Bl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=l,this.anisotropy=p,this.format=u,this.internalFormat=null,this.type=h,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ms:e.x=e.x-Math.floor(e.x);break;case Di:e.x=e.x<0?0:1;break;case bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ms:e.y=e.y-Math.floor(e.y);break;case Di:e.y=e.y<0?0:1;break;case bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=Tl;mn.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,t=0,n=0,r=1){Bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*r+l[12]*o,this.y=l[1]*t+l[5]*n+l[9]*r+l[13]*o,this.z=l[2]*t+l[6]*n+l[10]*r+l[14]*o,this.w=l[3]*t+l[7]*n+l[11]*r+l[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o;const h=e.elements,p=h[0],d=h[4],_=h[8],v=h[1],x=h[5],S=h[9],w=h[2],M=h[6],g=h[10];if(Math.abs(d-v)<.01&&Math.abs(_-w)<.01&&Math.abs(S-M)<.01){if(Math.abs(d+v)<.1&&Math.abs(_+w)<.1&&Math.abs(S+M)<.1&&Math.abs(p+x+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(p+1)/2,A=(x+1)/2,B=(g+1)/2,z=(d+v)/4,U=(_+w)/4,O=(S+M)/4;return D>A&&D>B?D<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(D),r=z/n,o=U/n):A>B?A<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(A),n=z/r,o=O/r):B<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(B),n=U/o,r=O/o),this.set(n,r,o,t),this}let I=Math.sqrt((M-S)*(M-S)+(_-w)*(_-w)+(v-d)*(v-d));return Math.abs(I)<.001&&(I=1),this.x=(M-S)/I,this.y=(_-w)/I,this.z=(v-d)/I,this.w=Math.acos((p+x+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this.w=Tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this.w=Tt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iu extends hr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new mn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const l=n.count;for(let u=0;u<l;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Bl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends iu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class zl extends mn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ru extends mn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,l,u){let h=n[r+0],p=n[r+1],d=n[r+2],_=n[r+3];const v=o[l+0],x=o[l+1],S=o[l+2],w=o[l+3];if(u===0){e[t+0]=h,e[t+1]=p,e[t+2]=d,e[t+3]=_;return}if(u===1){e[t+0]=v,e[t+1]=x,e[t+2]=S,e[t+3]=w;return}if(_!==w||h!==v||p!==x||d!==S){let M=1-u;const g=h*v+p*x+d*S+_*w,I=g>=0?1:-1,D=1-g*g;if(D>Number.EPSILON){const B=Math.sqrt(D),z=Math.atan2(B,g*I);M=Math.sin(M*z)/B,u=Math.sin(u*z)/B}const A=u*I;if(h=h*M+v*A,p=p*M+x*A,d=d*M+S*A,_=_*M+w*A,M===1-u){const B=1/Math.sqrt(h*h+p*p+d*d+_*_);h*=B,p*=B,d*=B,_*=B}}e[t]=h,e[t+1]=p,e[t+2]=d,e[t+3]=_}static multiplyQuaternionsFlat(e,t,n,r,o,l){const u=n[r],h=n[r+1],p=n[r+2],d=n[r+3],_=o[l],v=o[l+1],x=o[l+2],S=o[l+3];return e[t]=u*S+d*_+h*x-p*v,e[t+1]=h*S+d*v+p*_-u*x,e[t+2]=p*S+d*x+u*v-h*_,e[t+3]=d*S-u*_-h*v-p*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,o=e._z,l=e._order,u=Math.cos,h=Math.sin,p=u(n/2),d=u(r/2),_=u(o/2),v=h(n/2),x=h(r/2),S=h(o/2);switch(l){case"XYZ":this._x=v*d*_+p*x*S,this._y=p*x*_-v*d*S,this._z=p*d*S+v*x*_,this._w=p*d*_-v*x*S;break;case"YXZ":this._x=v*d*_+p*x*S,this._y=p*x*_-v*d*S,this._z=p*d*S-v*x*_,this._w=p*d*_+v*x*S;break;case"ZXY":this._x=v*d*_-p*x*S,this._y=p*x*_+v*d*S,this._z=p*d*S+v*x*_,this._w=p*d*_-v*x*S;break;case"ZYX":this._x=v*d*_-p*x*S,this._y=p*x*_+v*d*S,this._z=p*d*S-v*x*_,this._w=p*d*_+v*x*S;break;case"YZX":this._x=v*d*_+p*x*S,this._y=p*x*_+v*d*S,this._z=p*d*S-v*x*_,this._w=p*d*_-v*x*S;break;case"XZY":this._x=v*d*_-p*x*S,this._y=p*x*_-v*d*S,this._z=p*d*S+v*x*_,this._w=p*d*_+v*x*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],o=t[8],l=t[1],u=t[5],h=t[9],p=t[2],d=t[6],_=t[10],v=n+u+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(d-h)*x,this._y=(o-p)*x,this._z=(l-r)*x}else if(n>u&&n>_){const x=2*Math.sqrt(1+n-u-_);this._w=(d-h)/x,this._x=.25*x,this._y=(r+l)/x,this._z=(o+p)/x}else if(u>_){const x=2*Math.sqrt(1+u-n-_);this._w=(o-p)/x,this._x=(r+l)/x,this._y=.25*x,this._z=(h+d)/x}else{const x=2*Math.sqrt(1+_-n-u);this._w=(l-r)/x,this._x=(o+p)/x,this._y=(h+d)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,o=e._z,l=e._w,u=t._x,h=t._y,p=t._z,d=t._w;return this._x=n*d+l*u+r*p-o*h,this._y=r*d+l*h+o*u-n*p,this._z=o*d+l*p+n*h-r*u,this._w=l*d-n*u-r*h-o*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,o=this._z,l=this._w;let u=l*e._w+n*e._x+r*e._y+o*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=l,this._x=n,this._y=r,this._z=o,this;const h=1-u*u;if(h<=Number.EPSILON){const x=1-t;return this._w=x*l+t*this._w,this._x=x*n+t*this._x,this._y=x*r+t*this._y,this._z=x*o+t*this._z,this.normalize(),this}const p=Math.sqrt(h),d=Math.atan2(p,u),_=Math.sin((1-t)*d)/p,v=Math.sin(t*d)/p;return this._w=l*_+this._w*v,this._x=n*_+this._x*v,this._y=r*_+this._y*v,this._z=o*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,t=0,n=0){Z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Aa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Aa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=e.elements,l=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*l,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*l,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,o=e.x,l=e.y,u=e.z,h=e.w,p=2*(l*r-u*n),d=2*(u*t-o*r),_=2*(o*n-l*t);return this.x=t+h*p+l*_-u*d,this.y=n+h*d+u*p-o*_,this.z=r+h*_+o*d-l*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,o=e.z,l=t.x,u=t.y,h=t.z;return this.x=r*h-o*u,this.y=o*l-n*h,this.z=n*u-r*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ns.copy(this).projectOnVector(e),this.sub(Ns)}reflect(e){return this.sub(Ns.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ns=new Z,Aa=new Dr;class Ir{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let l=0,u=o.count;l<u;l++)e.isMesh===!0?e.getVertexPosition(l,Ln):Ln.fromBufferAttribute(o,l),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zr.copy(n.boundingBox)),zr.applyMatrix4(e.matrixWorld),this.union(zr)}const r=e.children;for(let o=0,l=r.length;o<l;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vr),kr.subVectors(this.max,vr),ki.subVectors(e.a,vr),Hi.subVectors(e.b,vr),Gi.subVectors(e.c,vr),si.subVectors(Hi,ki),oi.subVectors(Gi,Hi),Mi.subVectors(ki,Gi);let t=[0,-si.z,si.y,0,-oi.z,oi.y,0,-Mi.z,Mi.y,si.z,0,-si.x,oi.z,0,-oi.x,Mi.z,0,-Mi.x,-si.y,si.x,0,-oi.y,oi.x,0,-Mi.y,Mi.x,0];return!Fs(t,ki,Hi,Gi,kr)||(t=[1,0,0,0,1,0,0,0,1],!Fs(t,ki,Hi,Gi,kr))?!1:(Hr.crossVectors(si,oi),t=[Hr.x,Hr.y,Hr.z],Fs(t,ki,Hi,Gi,kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qn=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Ln=new Z,zr=new Ir,ki=new Z,Hi=new Z,Gi=new Z,si=new Z,oi=new Z,Mi=new Z,vr=new Z,kr=new Z,Hr=new Z,Si=new Z;function Fs(i,e,t,n,r){for(let o=0,l=i.length-3;o<=l;o+=3){Si.fromArray(i,o);const u=r.x*Math.abs(Si.x)+r.y*Math.abs(Si.y)+r.z*Math.abs(Si.z),h=e.dot(Si),p=t.dot(Si),d=n.dot(Si);if(Math.max(-Math.max(h,p,d),Math.min(h,p,d))>u)return!1}return!0}const su=new Ir,xr=new Z,Os=new Z;class xs{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):su.setFromPoints(e).getCenter(n);let r=0;for(let o=0,l=e.length;o<l;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xr.subVectors(e,this.center);const t=xr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(xr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Os.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xr.copy(e.center).add(Os)),this.expandByPoint(xr.copy(e.center).sub(Os))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jn=new Z,Bs=new Z,Gr=new Z,ai=new Z,zs=new Z,Vr=new Z,ks=new Z;class kl{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Bs.copy(e).add(t).multiplyScalar(.5),Gr.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(Bs);const o=e.distanceTo(t)*.5,l=-this.direction.dot(Gr),u=ai.dot(this.direction),h=-ai.dot(Gr),p=ai.lengthSq(),d=Math.abs(1-l*l);let _,v,x,S;if(d>0)if(_=l*h-u,v=l*u-h,S=o*d,_>=0)if(v>=-S)if(v<=S){const w=1/d;_*=w,v*=w,x=_*(_+l*v+2*u)+v*(l*_+v+2*h)+p}else v=o,_=Math.max(0,-(l*v+u)),x=-_*_+v*(v+2*h)+p;else v=-o,_=Math.max(0,-(l*v+u)),x=-_*_+v*(v+2*h)+p;else v<=-S?(_=Math.max(0,-(-l*o+u)),v=_>0?-o:Math.min(Math.max(-o,-h),o),x=-_*_+v*(v+2*h)+p):v<=S?(_=0,v=Math.min(Math.max(-o,-h),o),x=v*(v+2*h)+p):(_=Math.max(0,-(l*o+u)),v=_>0?o:Math.min(Math.max(-o,-h),o),x=-_*_+v*(v+2*h)+p);else v=l>0?-o:o,_=Math.max(0,-(l*v+u)),x=-_*_+v*(v+2*h)+p;return n&&n.copy(this.origin).addScaledVector(this.direction,_),r&&r.copy(Bs).addScaledVector(Gr,v),x}intersectSphere(e,t){jn.subVectors(e.center,this.origin);const n=jn.dot(this.direction),r=jn.dot(jn)-n*n,o=e.radius*e.radius;if(r>o)return null;const l=Math.sqrt(o-r),u=n-l,h=n+l;return h<0?null:u<0?this.at(h,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,l,u,h;const p=1/this.direction.x,d=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(n=(e.min.x-v.x)*p,r=(e.max.x-v.x)*p):(n=(e.max.x-v.x)*p,r=(e.min.x-v.x)*p),d>=0?(o=(e.min.y-v.y)*d,l=(e.max.y-v.y)*d):(o=(e.max.y-v.y)*d,l=(e.min.y-v.y)*d),n>l||o>r||((o>n||isNaN(n))&&(n=o),(l<r||isNaN(r))&&(r=l),_>=0?(u=(e.min.z-v.z)*_,h=(e.max.z-v.z)*_):(u=(e.max.z-v.z)*_,h=(e.min.z-v.z)*_),n>h||u>r)||((u>n||n!==n)&&(n=u),(h<r||r!==r)&&(r=h),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,n,r,o){zs.subVectors(t,e),Vr.subVectors(n,e),ks.crossVectors(zs,Vr);let l=this.direction.dot(ks),u;if(l>0){if(r)return null;u=1}else if(l<0)u=-1,l=-l;else return null;ai.subVectors(this.origin,e);const h=u*this.direction.dot(Vr.crossVectors(ai,Vr));if(h<0)return null;const p=u*this.direction.dot(zs.cross(ai));if(p<0||h+p>l)return null;const d=-u*ai.dot(ks);return d<0?null:this.at(d/l,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kt{constructor(e,t,n,r,o,l,u,h,p,d,_,v,x,S,w,M){kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,l,u,h,p,d,_,v,x,S,w,M)}set(e,t,n,r,o,l,u,h,p,d,_,v,x,S,w,M){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=o,g[5]=l,g[9]=u,g[13]=h,g[2]=p,g[6]=d,g[10]=_,g[14]=v,g[3]=x,g[7]=S,g[11]=w,g[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Vi.setFromMatrixColumn(e,0).length(),o=1/Vi.setFromMatrixColumn(e,1).length(),l=1/Vi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,o=e.z,l=Math.cos(n),u=Math.sin(n),h=Math.cos(r),p=Math.sin(r),d=Math.cos(o),_=Math.sin(o);if(e.order==="XYZ"){const v=l*d,x=l*_,S=u*d,w=u*_;t[0]=h*d,t[4]=-h*_,t[8]=p,t[1]=x+S*p,t[5]=v-w*p,t[9]=-u*h,t[2]=w-v*p,t[6]=S+x*p,t[10]=l*h}else if(e.order==="YXZ"){const v=h*d,x=h*_,S=p*d,w=p*_;t[0]=v+w*u,t[4]=S*u-x,t[8]=l*p,t[1]=l*_,t[5]=l*d,t[9]=-u,t[2]=x*u-S,t[6]=w+v*u,t[10]=l*h}else if(e.order==="ZXY"){const v=h*d,x=h*_,S=p*d,w=p*_;t[0]=v-w*u,t[4]=-l*_,t[8]=S+x*u,t[1]=x+S*u,t[5]=l*d,t[9]=w-v*u,t[2]=-l*p,t[6]=u,t[10]=l*h}else if(e.order==="ZYX"){const v=l*d,x=l*_,S=u*d,w=u*_;t[0]=h*d,t[4]=S*p-x,t[8]=v*p+w,t[1]=h*_,t[5]=w*p+v,t[9]=x*p-S,t[2]=-p,t[6]=u*h,t[10]=l*h}else if(e.order==="YZX"){const v=l*h,x=l*p,S=u*h,w=u*p;t[0]=h*d,t[4]=w-v*_,t[8]=S*_+x,t[1]=_,t[5]=l*d,t[9]=-u*d,t[2]=-p*d,t[6]=x*_+S,t[10]=v-w*_}else if(e.order==="XZY"){const v=l*h,x=l*p,S=u*h,w=u*p;t[0]=h*d,t[4]=-_,t[8]=p*d,t[1]=v*_+w,t[5]=l*d,t[9]=x*_-S,t[2]=S*_-x,t[6]=u*d,t[10]=w*_+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ou,e,au)}lookAt(e,t,n){const r=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),li.crossVectors(n,Mn),li.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),li.crossVectors(n,Mn)),li.normalize(),Wr.crossVectors(Mn,li),r[0]=li.x,r[4]=Wr.x,r[8]=Mn.x,r[1]=li.y,r[5]=Wr.y,r[9]=Mn.y,r[2]=li.z,r[6]=Wr.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,l=n[0],u=n[4],h=n[8],p=n[12],d=n[1],_=n[5],v=n[9],x=n[13],S=n[2],w=n[6],M=n[10],g=n[14],I=n[3],D=n[7],A=n[11],B=n[15],z=r[0],U=r[4],O=r[8],C=r[12],b=r[1],k=r[5],ee=r[9],Q=r[13],ue=r[2],ve=r[6],X=r[10],Me=r[14],he=r[3],c=r[7],Ue=r[11],We=r[15];return o[0]=l*z+u*b+h*ue+p*he,o[4]=l*U+u*k+h*ve+p*c,o[8]=l*O+u*ee+h*X+p*Ue,o[12]=l*C+u*Q+h*Me+p*We,o[1]=d*z+_*b+v*ue+x*he,o[5]=d*U+_*k+v*ve+x*c,o[9]=d*O+_*ee+v*X+x*Ue,o[13]=d*C+_*Q+v*Me+x*We,o[2]=S*z+w*b+M*ue+g*he,o[6]=S*U+w*k+M*ve+g*c,o[10]=S*O+w*ee+M*X+g*Ue,o[14]=S*C+w*Q+M*Me+g*We,o[3]=I*z+D*b+A*ue+B*he,o[7]=I*U+D*k+A*ve+B*c,o[11]=I*O+D*ee+A*X+B*Ue,o[15]=I*C+D*Q+A*Me+B*We,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],l=e[1],u=e[5],h=e[9],p=e[13],d=e[2],_=e[6],v=e[10],x=e[14],S=e[3],w=e[7],M=e[11],g=e[15];return S*(+o*h*_-r*p*_-o*u*v+n*p*v+r*u*x-n*h*x)+w*(+t*h*x-t*p*v+o*l*v-r*l*x+r*p*d-o*h*d)+M*(+t*p*_-t*u*x-o*l*_+n*l*x+o*u*d-n*p*d)+g*(-r*u*d-t*h*_+t*u*v+r*l*_-n*l*v+n*h*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],l=e[4],u=e[5],h=e[6],p=e[7],d=e[8],_=e[9],v=e[10],x=e[11],S=e[12],w=e[13],M=e[14],g=e[15],I=_*M*p-w*v*p+w*h*x-u*M*x-_*h*g+u*v*g,D=S*v*p-d*M*p-S*h*x+l*M*x+d*h*g-l*v*g,A=d*w*p-S*_*p+S*u*x-l*w*x-d*u*g+l*_*g,B=S*_*h-d*w*h-S*u*v+l*w*v+d*u*M-l*_*M,z=t*I+n*D+r*A+o*B;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/z;return e[0]=I*U,e[1]=(w*v*o-_*M*o-w*r*x+n*M*x+_*r*g-n*v*g)*U,e[2]=(u*M*o-w*h*o+w*r*p-n*M*p-u*r*g+n*h*g)*U,e[3]=(_*h*o-u*v*o-_*r*p+n*v*p+u*r*x-n*h*x)*U,e[4]=D*U,e[5]=(d*M*o-S*v*o+S*r*x-t*M*x-d*r*g+t*v*g)*U,e[6]=(S*h*o-l*M*o-S*r*p+t*M*p+l*r*g-t*h*g)*U,e[7]=(l*v*o-d*h*o+d*r*p-t*v*p-l*r*x+t*h*x)*U,e[8]=A*U,e[9]=(S*_*o-d*w*o-S*n*x+t*w*x+d*n*g-t*_*g)*U,e[10]=(l*w*o-S*u*o+S*n*p-t*w*p-l*n*g+t*u*g)*U,e[11]=(d*u*o-l*_*o-d*n*p+t*_*p+l*n*x-t*u*x)*U,e[12]=B*U,e[13]=(d*w*r-S*_*r+S*n*v-t*w*v-d*n*M+t*_*M)*U,e[14]=(S*u*r-l*w*r-S*n*h+t*w*h+l*n*M-t*u*M)*U,e[15]=(l*_*r-d*u*r+d*n*h-t*_*h-l*n*v+t*u*v)*U,this}scale(e){const t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),o=1-n,l=e.x,u=e.y,h=e.z,p=o*l,d=o*u;return this.set(p*l+n,p*u-r*h,p*h+r*u,0,p*u+r*h,d*u+n,d*h-r*l,0,p*h-r*u,d*h+r*l,o*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,l){return this.set(1,n,o,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,o=t._x,l=t._y,u=t._z,h=t._w,p=o+o,d=l+l,_=u+u,v=o*p,x=o*d,S=o*_,w=l*d,M=l*_,g=u*_,I=h*p,D=h*d,A=h*_,B=n.x,z=n.y,U=n.z;return r[0]=(1-(w+g))*B,r[1]=(x+A)*B,r[2]=(S-D)*B,r[3]=0,r[4]=(x-A)*z,r[5]=(1-(v+g))*z,r[6]=(M+I)*z,r[7]=0,r[8]=(S+D)*U,r[9]=(M-I)*U,r[10]=(1-(v+w))*U,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let o=Vi.set(r[0],r[1],r[2]).length();const l=Vi.set(r[4],r[5],r[6]).length(),u=Vi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Pn.copy(this);const p=1/o,d=1/l,_=1/u;return Pn.elements[0]*=p,Pn.elements[1]*=p,Pn.elements[2]*=p,Pn.elements[4]*=d,Pn.elements[5]*=d,Pn.elements[6]*=d,Pn.elements[8]*=_,Pn.elements[9]*=_,Pn.elements[10]*=_,t.setFromRotationMatrix(Pn),n.x=o,n.y=l,n.z=u,this}makePerspective(e,t,n,r,o,l,u=ei){const h=this.elements,p=2*o/(t-e),d=2*o/(n-r),_=(t+e)/(t-e),v=(n+r)/(n-r);let x,S;if(u===ei)x=-(l+o)/(l-o),S=-2*l*o/(l-o);else if(u===_s)x=-l/(l-o),S=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=d,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=x,h[14]=S,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,r,o,l,u=ei){const h=this.elements,p=1/(t-e),d=1/(n-r),_=1/(l-o),v=(t+e)*p,x=(n+r)*d;let S,w;if(u===ei)S=(l+o)*_,w=-2*_;else if(u===_s)S=o*_,w=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-v,h[1]=0,h[5]=2*d,h[9]=0,h[13]=-x,h[2]=0,h[6]=0,h[10]=w,h[14]=-S,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Vi=new Z,Pn=new kt,ou=new Z(0,0,0),au=new Z(1,1,1),li=new Z,Wr=new Z,Mn=new Z,Ca=new kt,Ra=new Dr;class Vn{constructor(e=0,t=0,n=0,r=Vn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,o=r[0],l=r[4],u=r[8],h=r[1],p=r[5],d=r[9],_=r[2],v=r[6],x=r[10];switch(t){case"XYZ":this._y=Math.asin(Tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-d,x),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(u,x),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-_,o),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-l,p)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-Tt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-l,p));break;case"YZX":this._z=Math.asin(Tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-d,p),this._y=Math.atan2(-_,o)):(this._x=0,this._y=Math.atan2(u,x));break;case"XZY":this._z=Math.asin(-Tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-d,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ca.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ca,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ra.setFromEuler(this),this.setFromQuaternion(Ra,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vn.DEFAULT_ORDER="XYZ";class Hl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lu=0;const La=new Z,Wi=new Dr,Yn=new kt,Xr=new Z,yr=new Z,cu=new Z,uu=new Dr,Pa=new Z(1,0,0),Da=new Z(0,1,0),Ia=new Z(0,0,1),Ua={type:"added"},hu={type:"removed"},Xi={type:"childadded",child:null},Hs={type:"childremoved",child:null};class Qt extends hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=Pr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const e=new Z,t=new Vn,n=new Dr,r=new Z(1,1,1);function o(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new kt},normalMatrix:{value:new _t}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.premultiply(Wi),this}rotateX(e){return this.rotateOnAxis(Pa,e)}rotateY(e){return this.rotateOnAxis(Da,e)}rotateZ(e){return this.rotateOnAxis(Ia,e)}translateOnAxis(e,t){return La.copy(e).applyQuaternion(this.quaternion),this.position.add(La.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pa,e)}translateY(e){return this.translateOnAxis(Da,e)}translateZ(e){return this.translateOnAxis(Ia,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xr.copy(e):Xr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(yr,Xr,this.up):Yn.lookAt(Xr,yr,this.up),this.quaternion.setFromRotationMatrix(Yn),r&&(Yn.extractRotation(r.matrixWorld),Wi.setFromRotationMatrix(Yn),this.quaternion.premultiply(Wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ua),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hu),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ua),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,e,cu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,uu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(u,h){return u[h.uuid]===void 0&&(u[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const h=u.shapes;if(Array.isArray(h))for(let p=0,d=h.length;p<d;p++){const _=h[p];o(e.shapes,_)}else o(e.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let h=0,p=this.material.length;h<p;h++)u.push(o(e.materials,this.material[h]));r.material=u}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let u=0;u<this.children.length;u++)r.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let u=0;u<this.animations.length;u++){const h=this.animations[u];r.animations.push(o(e.animations,h))}}if(t){const u=l(e.geometries),h=l(e.materials),p=l(e.textures),d=l(e.images),_=l(e.shapes),v=l(e.skeletons),x=l(e.animations),S=l(e.nodes);u.length>0&&(n.geometries=u),h.length>0&&(n.materials=h),p.length>0&&(n.textures=p),d.length>0&&(n.images=d),_.length>0&&(n.shapes=_),v.length>0&&(n.skeletons=v),x.length>0&&(n.animations=x),S.length>0&&(n.nodes=S)}return n.object=r,n;function l(u){const h=[];for(const p in u){const d=u[p];delete d.metadata,h.push(d)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Qt.DEFAULT_UP=new Z(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new Z,$n=new Z,Gs=new Z,Kn=new Z,qi=new Z,ji=new Z,Na=new Z,Vs=new Z,Ws=new Z,Xs=new Z,qs=new Bt,js=new Bt,Ys=new Bt;class In{constructor(e=new Z,t=new Z,n=new Z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Dn.subVectors(e,t),r.cross(Dn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){Dn.subVectors(r,t),$n.subVectors(n,t),Gs.subVectors(e,t);const l=Dn.dot(Dn),u=Dn.dot($n),h=Dn.dot(Gs),p=$n.dot($n),d=$n.dot(Gs),_=l*p-u*u;if(_===0)return o.set(0,0,0),null;const v=1/_,x=(p*h-u*d)*v,S=(l*d-u*h)*v;return o.set(1-x-S,S,x)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,n,r,o,l,u,h){return this.getBarycoord(e,t,n,r,Kn)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(o,Kn.x),h.addScaledVector(l,Kn.y),h.addScaledVector(u,Kn.z),h)}static getInterpolatedAttribute(e,t,n,r,o,l){return qs.setScalar(0),js.setScalar(0),Ys.setScalar(0),qs.fromBufferAttribute(e,t),js.fromBufferAttribute(e,n),Ys.fromBufferAttribute(e,r),l.setScalar(0),l.addScaledVector(qs,o.x),l.addScaledVector(js,o.y),l.addScaledVector(Ys,o.z),l}static isFrontFacing(e,t,n,r){return Dn.subVectors(n,t),$n.subVectors(e,t),Dn.cross($n).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),Dn.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return In.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,o){return In.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,o=this.c;let l,u;qi.subVectors(r,n),ji.subVectors(o,n),Vs.subVectors(e,n);const h=qi.dot(Vs),p=ji.dot(Vs);if(h<=0&&p<=0)return t.copy(n);Ws.subVectors(e,r);const d=qi.dot(Ws),_=ji.dot(Ws);if(d>=0&&_<=d)return t.copy(r);const v=h*_-d*p;if(v<=0&&h>=0&&d<=0)return l=h/(h-d),t.copy(n).addScaledVector(qi,l);Xs.subVectors(e,o);const x=qi.dot(Xs),S=ji.dot(Xs);if(S>=0&&x<=S)return t.copy(o);const w=x*p-h*S;if(w<=0&&p>=0&&S<=0)return u=p/(p-S),t.copy(n).addScaledVector(ji,u);const M=d*S-x*_;if(M<=0&&_-d>=0&&x-S>=0)return Na.subVectors(o,r),u=(_-d)/(_-d+(x-S)),t.copy(r).addScaledVector(Na,u);const g=1/(M+w+v);return l=w*g,u=v*g,t.copy(n).addScaledVector(qi,l).addScaledVector(ji,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},qr={h:0,s:0,l:0};function $s(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class bt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Lt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Lt.workingColorSpace){if(e=Yc(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,l=2*n-o;this.r=$s(l,o,e+1/3),this.g=$s(l,o,e),this.b=$s(l,o,e-1/3)}return Lt.toWorkingColorSpace(this,r),this}setStyle(e,t=An){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const l=r[1],u=r[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=An){const n=Gl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ni(e.r),this.g=ni(e.g),this.b=ni(e.b),this}copyLinearToSRGB(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return Lt.fromWorkingColorSpace(hn.copy(this),e),Math.round(Tt(hn.r*255,0,255))*65536+Math.round(Tt(hn.g*255,0,255))*256+Math.round(Tt(hn.b*255,0,255))}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.fromWorkingColorSpace(hn.copy(this),t);const n=hn.r,r=hn.g,o=hn.b,l=Math.max(n,r,o),u=Math.min(n,r,o);let h,p;const d=(u+l)/2;if(u===l)h=0,p=0;else{const _=l-u;switch(p=d<=.5?_/(l+u):_/(2-l-u),l){case n:h=(r-o)/_+(r<o?6:0);break;case r:h=(o-n)/_+2;break;case o:h=(n-r)/_+4;break}h/=6}return e.h=h,e.s=p,e.l=d,e}getRGB(e,t=Lt.workingColorSpace){return Lt.fromWorkingColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=An){Lt.fromWorkingColorSpace(hn.copy(this),e);const t=hn.r,n=hn.g,r=hn.b;return e!==An?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+t,ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(qr);const n=Ds(ci.h,qr.h,t),r=Ds(ci.s,qr.s,t),o=Ds(ci.l,qr.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new bt;bt.NAMES=Gl;let fu=0;class fr extends hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=Pr(),this.name="",this.type="Material",this.blending=tr,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=po,this.blendDst=mo,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ma,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==tr&&(n.blending=this.blending),this.side!==gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==po&&(n.blendSrc=this.blendSrc),this.blendDst!==mo&&(n.blendDst=this.blendDst),this.blendEquation!==Ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ma&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){const l=[];for(const u in o){const h=o[u];delete h.metadata,l.push(h)}return l}if(t){const o=r(e.textures),l=r(e.images);o.length>0&&(n.textures=o),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ar extends fr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new Z,jr=new wt;class Fn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Sa,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)jr.fromBufferAttribute(this,t),jr.applyMatrix3(e),this.setXY(t,jr.x,jr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_r(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_r(t,this.array)),t}setX(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_r(t,this.array)),t}setY(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_r(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_r(t,this.array)),t}setW(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array),r=_n(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array),r=_n(r,this.array),o=_n(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sa&&(e.usage=this.usage),e}}class Vl extends Fn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Wl extends Fn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class jt extends Fn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let du=0;const En=new kt,Ks=new Qt,Yi=new Z,Sn=new Ir,Mr=new Ir,rn=new Z;class gn extends hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=Pr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ol(e)?Wl:Vl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new _t().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,n){return En.makeTranslation(e,t,n),this.applyMatrix4(En),this}scale(e,t,n){return En.makeScale(e,t,n),this.applyMatrix4(En),this}lookAt(e){return Ks.lookAt(e),Ks.updateMatrix(),this.applyMatrix4(Ks.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,o=e.length;r<o;r++){const l=e[r];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new jt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const o=e[r];t.setXYZ(r,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ir);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const o=t[n];Sn.setFromBufferAttribute(o),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let o=0,l=t.length;o<l;o++){const u=t[o];Mr.setFromBufferAttribute(u),this.morphTargetsRelative?(rn.addVectors(Sn.min,Mr.min),Sn.expandByPoint(rn),rn.addVectors(Sn.max,Mr.max),Sn.expandByPoint(rn)):(Sn.expandByPoint(Mr.min),Sn.expandByPoint(Mr.max))}Sn.getCenter(n);let r=0;for(let o=0,l=e.count;o<l;o++)rn.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared(rn));if(t)for(let o=0,l=t.length;o<l;o++){const u=t[o],h=this.morphTargetsRelative;for(let p=0,d=u.count;p<d;p++)rn.fromBufferAttribute(u,p),h&&(Yi.fromBufferAttribute(e,p),rn.add(Yi)),r=Math.max(r,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*n.count),4));const l=this.getAttribute("tangent"),u=[],h=[];for(let O=0;O<n.count;O++)u[O]=new Z,h[O]=new Z;const p=new Z,d=new Z,_=new Z,v=new wt,x=new wt,S=new wt,w=new Z,M=new Z;function g(O,C,b){p.fromBufferAttribute(n,O),d.fromBufferAttribute(n,C),_.fromBufferAttribute(n,b),v.fromBufferAttribute(o,O),x.fromBufferAttribute(o,C),S.fromBufferAttribute(o,b),d.sub(p),_.sub(p),x.sub(v),S.sub(v);const k=1/(x.x*S.y-S.x*x.y);isFinite(k)&&(w.copy(d).multiplyScalar(S.y).addScaledVector(_,-x.y).multiplyScalar(k),M.copy(_).multiplyScalar(x.x).addScaledVector(d,-S.x).multiplyScalar(k),u[O].add(w),u[C].add(w),u[b].add(w),h[O].add(M),h[C].add(M),h[b].add(M))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let O=0,C=I.length;O<C;++O){const b=I[O],k=b.start,ee=b.count;for(let Q=k,ue=k+ee;Q<ue;Q+=3)g(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const D=new Z,A=new Z,B=new Z,z=new Z;function U(O){B.fromBufferAttribute(r,O),z.copy(B);const C=u[O];D.copy(C),D.sub(B.multiplyScalar(B.dot(C))).normalize(),A.crossVectors(z,C);const k=A.dot(h[O])<0?-1:1;l.setXYZW(O,D.x,D.y,D.z,k)}for(let O=0,C=I.length;O<C;++O){const b=I[O],k=b.start,ee=b.count;for(let Q=k,ue=k+ee;Q<ue;Q+=3)U(e.getX(Q+0)),U(e.getX(Q+1)),U(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let v=0,x=n.count;v<x;v++)n.setXYZ(v,0,0,0);const r=new Z,o=new Z,l=new Z,u=new Z,h=new Z,p=new Z,d=new Z,_=new Z;if(e)for(let v=0,x=e.count;v<x;v+=3){const S=e.getX(v+0),w=e.getX(v+1),M=e.getX(v+2);r.fromBufferAttribute(t,S),o.fromBufferAttribute(t,w),l.fromBufferAttribute(t,M),d.subVectors(l,o),_.subVectors(r,o),d.cross(_),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,w),p.fromBufferAttribute(n,M),u.add(d),h.add(d),p.add(d),n.setXYZ(S,u.x,u.y,u.z),n.setXYZ(w,h.x,h.y,h.z),n.setXYZ(M,p.x,p.y,p.z)}else for(let v=0,x=t.count;v<x;v+=3)r.fromBufferAttribute(t,v+0),o.fromBufferAttribute(t,v+1),l.fromBufferAttribute(t,v+2),d.subVectors(l,o),_.subVectors(r,o),d.cross(_),n.setXYZ(v+0,d.x,d.y,d.z),n.setXYZ(v+1,d.x,d.y,d.z),n.setXYZ(v+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(u,h){const p=u.array,d=u.itemSize,_=u.normalized,v=new p.constructor(h.length*d);let x=0,S=0;for(let w=0,M=h.length;w<M;w++){u.isInterleavedBufferAttribute?x=h[w]*u.data.stride+u.offset:x=h[w]*d;for(let g=0;g<d;g++)v[S++]=p[x++]}return new Fn(v,d,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gn,n=this.index.array,r=this.attributes;for(const u in r){const h=r[u],p=e(h,n);t.setAttribute(u,p)}const o=this.morphAttributes;for(const u in o){const h=[],p=o[u];for(let d=0,_=p.length;d<_;d++){const v=p[d],x=e(v,n);h.push(x)}t.morphAttributes[u]=h}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let u=0,h=l.length;u<h;u++){const p=l[u];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const p=n[h];e.data.attributes[h]=p.toJSON(e.data)}const r={};let o=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],d=[];for(let _=0,v=p.length;_<v;_++){const x=p[_];d.push(x.toJSON(e.data))}d.length>0&&(r[h]=d,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const p in r){const d=r[p];this.setAttribute(p,d.clone(t))}const o=e.morphAttributes;for(const p in o){const d=[],_=o[p];for(let v=0,x=_.length;v<x;v++)d.push(_[v].clone(t));this.morphAttributes[p]=d}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let p=0,d=l.length;p<d;p++){const _=l[p];this.addGroup(_.start,_.count,_.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fa=new kt,Ei=new kl,Yr=new xs,Oa=new Z,$r=new Z,Kr=new Z,Zr=new Z,Zs=new Z,Jr=new Z,Ba=new Z,Qr=new Z;class Jt extends Qt{constructor(e=new gn,t=new Ar){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){const u=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const u=this.morphTargetInfluences;if(o&&u){Jr.set(0,0,0);for(let h=0,p=o.length;h<p;h++){const d=u[h],_=o[h];d!==0&&(Zs.fromBufferAttribute(_,e),l?Jr.addScaledVector(Zs,d):Jr.addScaledVector(Zs.sub(t),d))}t.add(Jr)}return t}raycast(e,t){const n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(o),Ei.copy(e.ray).recast(e.near),!(Yr.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Yr,Oa)===null||Ei.origin.distanceToSquared(Oa)>(e.far-e.near)**2))&&(Fa.copy(o).invert(),Ei.copy(e.ray).applyMatrix4(Fa),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ei)))}_computeIntersections(e,t,n){let r;const o=this.geometry,l=this.material,u=o.index,h=o.attributes.position,p=o.attributes.uv,d=o.attributes.uv1,_=o.attributes.normal,v=o.groups,x=o.drawRange;if(u!==null)if(Array.isArray(l))for(let S=0,w=v.length;S<w;S++){const M=v[S],g=l[M.materialIndex],I=Math.max(M.start,x.start),D=Math.min(u.count,Math.min(M.start+M.count,x.start+x.count));for(let A=I,B=D;A<B;A+=3){const z=u.getX(A),U=u.getX(A+1),O=u.getX(A+2);r=es(this,g,e,n,p,d,_,z,U,O),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=M.materialIndex,t.push(r))}}else{const S=Math.max(0,x.start),w=Math.min(u.count,x.start+x.count);for(let M=S,g=w;M<g;M+=3){const I=u.getX(M),D=u.getX(M+1),A=u.getX(M+2);r=es(this,l,e,n,p,d,_,I,D,A),r&&(r.faceIndex=Math.floor(M/3),t.push(r))}}else if(h!==void 0)if(Array.isArray(l))for(let S=0,w=v.length;S<w;S++){const M=v[S],g=l[M.materialIndex],I=Math.max(M.start,x.start),D=Math.min(h.count,Math.min(M.start+M.count,x.start+x.count));for(let A=I,B=D;A<B;A+=3){const z=A,U=A+1,O=A+2;r=es(this,g,e,n,p,d,_,z,U,O),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=M.materialIndex,t.push(r))}}else{const S=Math.max(0,x.start),w=Math.min(h.count,x.start+x.count);for(let M=S,g=w;M<g;M+=3){const I=M,D=M+1,A=M+2;r=es(this,l,e,n,p,d,_,I,D,A),r&&(r.faceIndex=Math.floor(M/3),t.push(r))}}}}function pu(i,e,t,n,r,o,l,u){let h;if(e.side===vn?h=n.intersectTriangle(l,o,r,!0,u):h=n.intersectTriangle(r,o,l,e.side===gi,u),h===null)return null;Qr.copy(u),Qr.applyMatrix4(i.matrixWorld);const p=t.ray.origin.distanceTo(Qr);return p<t.near||p>t.far?null:{distance:p,point:Qr.clone(),object:i}}function es(i,e,t,n,r,o,l,u,h,p){i.getVertexPosition(u,$r),i.getVertexPosition(h,Kr),i.getVertexPosition(p,Zr);const d=pu(i,e,t,n,$r,Kr,Zr,Ba);if(d){const _=new Z;In.getBarycoord(Ba,$r,Kr,Zr,_),r&&(d.uv=In.getInterpolatedAttribute(r,u,h,p,_,new wt)),o&&(d.uv1=In.getInterpolatedAttribute(o,u,h,p,_,new wt)),l&&(d.normal=In.getInterpolatedAttribute(l,u,h,p,_,new Z),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const v={a:u,b:h,c:p,normal:new Z,materialIndex:0};In.getNormal($r,Kr,Zr,v.normal),d.face=v,d.barycoord=_}return d}class vi extends gn{constructor(e=1,t=1,n=1,r=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:l};const u=this;r=Math.floor(r),o=Math.floor(o),l=Math.floor(l);const h=[],p=[],d=[],_=[];let v=0,x=0;S("z","y","x",-1,-1,n,t,e,l,o,0),S("z","y","x",1,-1,n,t,-e,l,o,1),S("x","z","y",1,1,e,n,t,r,l,2),S("x","z","y",1,-1,e,n,-t,r,l,3),S("x","y","z",1,-1,e,t,n,r,o,4),S("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(h),this.setAttribute("position",new jt(p,3)),this.setAttribute("normal",new jt(d,3)),this.setAttribute("uv",new jt(_,2));function S(w,M,g,I,D,A,B,z,U,O,C){const b=A/U,k=B/O,ee=A/2,Q=B/2,ue=z/2,ve=U+1,X=O+1;let Me=0,he=0;const c=new Z;for(let Ue=0;Ue<X;Ue++){const We=Ue*k-Q;for(let rt=0;rt<ve;rt++){const Ct=rt*b-ee;c[w]=Ct*I,c[M]=We*D,c[g]=ue,p.push(c.x,c.y,c.z),c[w]=0,c[M]=0,c[g]=z>0?1:-1,d.push(c.x,c.y,c.z),_.push(rt/U),_.push(1-Ue/O),Me+=1}}for(let Ue=0;Ue<O;Ue++)for(let We=0;We<U;We++){const rt=v+We+ve*Ue,Ct=v+We+ve*(Ue+1),ge=v+(We+1)+ve*(Ue+1),be=v+(We+1)+ve*Ue;h.push(rt,Ct,be),h.push(Ct,ge,be),he+=6}u.addGroup(x,he,C),x+=he,v+=Me}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ur(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function pn(i){const e={};for(let t=0;t<i.length;t++){const n=ur(i[t]);for(const r in n)e[r]=n[r]}return e}function mu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Xl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const gu={clone:ur,merge:pn};var _u=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends fr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_u,this.fragmentShader=vu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ur(e.uniforms),this.uniformsGroups=mu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?t.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[r]={type:"m4",value:l.toArray()}:t.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ql extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ui=new Z,za=new wt,ka=new wt;class fn extends ql{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Jo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jo*2*Math.atan(Math.tan(Ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ui.x,ui.y).multiplyScalar(-e/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-e/ui.z)}getViewSize(e,t){return this.getViewBounds(e,za,ka),t.subVectors(ka,za)}setViewOffset(e,t,n,r,o,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ps*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const h=l.fullWidth,p=l.fullHeight;o+=l.offsetX*r/h,t-=l.offsetY*n/p,r*=l.width/h,n*=l.height/p}const u=this.filmOffset;u!==0&&(o+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $i=-90,Ki=1;class xu extends Qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new fn($i,Ki,e,t);r.layers=this.layers,this.add(r);const o=new fn($i,Ki,e,t);o.layers=this.layers,this.add(o);const l=new fn($i,Ki,e,t);l.layers=this.layers,this.add(l);const u=new fn($i,Ki,e,t);u.layers=this.layers,this.add(u);const h=new fn($i,Ki,e,t);h.layers=this.layers,this.add(h);const p=new fn($i,Ki,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,o,l,u,h]=t;for(const p of t)this.remove(p);if(e===ei)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===_s)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,l,u,h,p,d]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const w=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,o),e.setRenderTarget(n,1,r),e.render(t,l),e.setRenderTarget(n,2,r),e.render(t,u),e.setRenderTarget(n,3,r),e.render(t,h),e.setRenderTarget(n,4,r),e.render(t,p),n.texture.generateMipmaps=w,e.setRenderTarget(n,5,r),e.render(t,d),e.setRenderTarget(_,v,x),e.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class jl extends mn{constructor(e,t,n,r,o,l,u,h,p,d){e=e!==void 0?e:[],t=t!==void 0?t:sr,super(e,t,n,r,o,l,u,h,p,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yu extends Ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new jl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new vi(5,5,5),o=new _i({name:"CubemapFromEquirect",uniforms:ur(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vn,blending:di});o.uniforms.tEquirect.value=t;const l=new Jt(r,o),u=t.minFilter;return t.minFilter===Ii&&(t.minFilter=Gn),new xu(1,10,this).update(e,l),t.minFilter=u,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,n,r){const o=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,r);e.setRenderTarget(o)}}class ys{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new bt(e),this.near=t,this.far=n}clone(){return new ys(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ms extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Js=new Z,Mu=new Z,Su=new _t;class Ai{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Js.subVectors(n,t).cross(Mu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Js),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Su.getNormalMatrix(e),r=this.coplanarPoint(Js).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new xs,ts=new Z;class ca{constructor(e=new Ai,t=new Ai,n=new Ai,r=new Ai,o=new Ai,l=new Ai){this.planes=[e,t,n,r,o,l]}set(e,t,n,r,o,l){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(n),u[3].copy(r),u[4].copy(o),u[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ei){const n=this.planes,r=e.elements,o=r[0],l=r[1],u=r[2],h=r[3],p=r[4],d=r[5],_=r[6],v=r[7],x=r[8],S=r[9],w=r[10],M=r[11],g=r[12],I=r[13],D=r[14],A=r[15];if(n[0].setComponents(h-o,v-p,M-x,A-g).normalize(),n[1].setComponents(h+o,v+p,M+x,A+g).normalize(),n[2].setComponents(h+l,v+d,M+S,A+I).normalize(),n[3].setComponents(h-l,v-d,M-S,A-I).normalize(),n[4].setComponents(h-u,v-_,M-w,A-D).normalize(),t===ei)n[5].setComponents(h+u,v+_,M+w,A+D).normalize();else if(t===_s)n[5].setComponents(u,_,w,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ts.x=r.normal.x>0?e.max.x:e.min.x,ts.y=r.normal.y>0?e.max.y:e.min.y,ts.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ts)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ua extends fr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ha=new kt,Qo=new kl,ns=new xs,is=new Z;class Yl extends Qt{constructor(e=new gn,t=new ua){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ns.copy(n.boundingSphere),ns.applyMatrix4(r),ns.radius+=o,e.ray.intersectsSphere(ns)===!1)return;Ha.copy(r).invert(),Qo.copy(e.ray).applyMatrix4(Ha);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,p=n.index,_=n.attributes.position;if(p!==null){const v=Math.max(0,l.start),x=Math.min(p.count,l.start+l.count);for(let S=v,w=x;S<w;S++){const M=p.getX(S);is.fromBufferAttribute(_,M),Ga(is,M,h,r,e,t,this)}}else{const v=Math.max(0,l.start),x=Math.min(_.count,l.start+l.count);for(let S=v,w=x;S<w;S++)is.fromBufferAttribute(_,S),Ga(is,S,h,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){const u=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function Ga(i,e,t,n,r,o,l){const u=Qo.distanceSqToPoint(i);if(u<t){const h=new Z;Qo.closestPointToPoint(i,h),h.applyMatrix4(n);const p=r.ray.origin.distanceTo(h);if(p<r.near||p>r.far)return;o.push({distance:p,distanceToRay:Math.sqrt(u),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:l})}}class Qi extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class $l extends mn{constructor(e,t,n,r,o,l,u,h,p,d=nr){if(d!==nr&&d!==lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===nr&&(n=Ui),n===void 0&&d===lr&&(n=ar),super(null,r,o,l,u,h,d,n,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:Nn,this.minFilter=h!==void 0?h:Nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ur extends gn{constructor(e=1,t=1,n=1,r=32,o=1,l=!1,u=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:h};const p=this;r=Math.floor(r),o=Math.floor(o);const d=[],_=[],v=[],x=[];let S=0;const w=[],M=n/2;let g=0;I(),l===!1&&(e>0&&D(!0),t>0&&D(!1)),this.setIndex(d),this.setAttribute("position",new jt(_,3)),this.setAttribute("normal",new jt(v,3)),this.setAttribute("uv",new jt(x,2));function I(){const A=new Z,B=new Z;let z=0;const U=(t-e)/n;for(let O=0;O<=o;O++){const C=[],b=O/o,k=b*(t-e)+e;for(let ee=0;ee<=r;ee++){const Q=ee/r,ue=Q*h+u,ve=Math.sin(ue),X=Math.cos(ue);B.x=k*ve,B.y=-b*n+M,B.z=k*X,_.push(B.x,B.y,B.z),A.set(ve,U,X).normalize(),v.push(A.x,A.y,A.z),x.push(Q,1-b),C.push(S++)}w.push(C)}for(let O=0;O<r;O++)for(let C=0;C<o;C++){const b=w[C][O],k=w[C+1][O],ee=w[C+1][O+1],Q=w[C][O+1];(e>0||C!==0)&&(d.push(b,k,Q),z+=3),(t>0||C!==o-1)&&(d.push(k,ee,Q),z+=3)}p.addGroup(g,z,0),g+=z}function D(A){const B=S,z=new wt,U=new Z;let O=0;const C=A===!0?e:t,b=A===!0?1:-1;for(let ee=1;ee<=r;ee++)_.push(0,M*b,0),v.push(0,b,0),x.push(.5,.5),S++;const k=S;for(let ee=0;ee<=r;ee++){const ue=ee/r*h+u,ve=Math.cos(ue),X=Math.sin(ue);U.x=C*X,U.y=M*b,U.z=C*ve,_.push(U.x,U.y,U.z),v.push(0,b,0),z.x=ve*.5+.5,z.y=X*.5*b+.5,x.push(z.x,z.y),S++}for(let ee=0;ee<r;ee++){const Q=B+ee,ue=k+ee;A===!0?d.push(ue,ue+1,Q):d.push(ue+1,ue,Q),O+=3}p.addGroup(g,O,A===!0?1:2),g+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ur(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ha extends gn{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const o=[],l=[];u(r),p(n),d(),this.setAttribute("position",new jt(o,3)),this.setAttribute("normal",new jt(o.slice(),3)),this.setAttribute("uv",new jt(l,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function u(I){const D=new Z,A=new Z,B=new Z;for(let z=0;z<t.length;z+=3)x(t[z+0],D),x(t[z+1],A),x(t[z+2],B),h(D,A,B,I)}function h(I,D,A,B){const z=B+1,U=[];for(let O=0;O<=z;O++){U[O]=[];const C=I.clone().lerp(A,O/z),b=D.clone().lerp(A,O/z),k=z-O;for(let ee=0;ee<=k;ee++)ee===0&&O===z?U[O][ee]=C:U[O][ee]=C.clone().lerp(b,ee/k)}for(let O=0;O<z;O++)for(let C=0;C<2*(z-O)-1;C++){const b=Math.floor(C/2);C%2===0?(v(U[O][b+1]),v(U[O+1][b]),v(U[O][b])):(v(U[O][b+1]),v(U[O+1][b+1]),v(U[O+1][b]))}}function p(I){const D=new Z;for(let A=0;A<o.length;A+=3)D.x=o[A+0],D.y=o[A+1],D.z=o[A+2],D.normalize().multiplyScalar(I),o[A+0]=D.x,o[A+1]=D.y,o[A+2]=D.z}function d(){const I=new Z;for(let D=0;D<o.length;D+=3){I.x=o[D+0],I.y=o[D+1],I.z=o[D+2];const A=M(I)/2/Math.PI+.5,B=g(I)/Math.PI+.5;l.push(A,1-B)}S(),_()}function _(){for(let I=0;I<l.length;I+=6){const D=l[I+0],A=l[I+2],B=l[I+4],z=Math.max(D,A,B),U=Math.min(D,A,B);z>.9&&U<.1&&(D<.2&&(l[I+0]+=1),A<.2&&(l[I+2]+=1),B<.2&&(l[I+4]+=1))}}function v(I){o.push(I.x,I.y,I.z)}function x(I,D){const A=I*3;D.x=e[A+0],D.y=e[A+1],D.z=e[A+2]}function S(){const I=new Z,D=new Z,A=new Z,B=new Z,z=new wt,U=new wt,O=new wt;for(let C=0,b=0;C<o.length;C+=9,b+=6){I.set(o[C+0],o[C+1],o[C+2]),D.set(o[C+3],o[C+4],o[C+5]),A.set(o[C+6],o[C+7],o[C+8]),z.set(l[b+0],l[b+1]),U.set(l[b+2],l[b+3]),O.set(l[b+4],l[b+5]),B.copy(I).add(D).add(A).divideScalar(3);const k=M(B);w(z,b+0,I,k),w(U,b+2,D,k),w(O,b+4,A,k)}}function w(I,D,A,B){B<0&&I.x===1&&(l[D]=I.x-1),A.x===0&&A.z===0&&(l[D]=B/2/Math.PI+.5)}function M(I){return Math.atan2(I.z,-I.x)}function g(I){return Math.atan2(-I.y,Math.sqrt(I.x*I.x+I.z*I.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ha(e.vertices,e.indices,e.radius,e.details)}}class fa extends ha{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new fa(e.radius,e.detail)}}class Nr extends gn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const o=e/2,l=t/2,u=Math.floor(n),h=Math.floor(r),p=u+1,d=h+1,_=e/u,v=t/h,x=[],S=[],w=[],M=[];for(let g=0;g<d;g++){const I=g*v-l;for(let D=0;D<p;D++){const A=D*_-o;S.push(A,-I,0),w.push(0,0,1),M.push(D/u),M.push(1-g/h)}}for(let g=0;g<h;g++)for(let I=0;I<u;I++){const D=I+p*g,A=I+p*(g+1),B=I+1+p*(g+1),z=I+1+p*g;x.push(D,A,z),x.push(A,B,z)}this.setIndex(x),this.setAttribute("position",new jt(S,3)),this.setAttribute("normal",new jt(w,3)),this.setAttribute("uv",new jt(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ss extends gn{constructor(e=1,t=32,n=16,r=0,o=Math.PI*2,l=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:o,thetaStart:l,thetaLength:u},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const h=Math.min(l+u,Math.PI);let p=0;const d=[],_=new Z,v=new Z,x=[],S=[],w=[],M=[];for(let g=0;g<=n;g++){const I=[],D=g/n;let A=0;g===0&&l===0?A=.5/t:g===n&&h===Math.PI&&(A=-.5/t);for(let B=0;B<=t;B++){const z=B/t;_.x=-e*Math.cos(r+z*o)*Math.sin(l+D*u),_.y=e*Math.cos(l+D*u),_.z=e*Math.sin(r+z*o)*Math.sin(l+D*u),S.push(_.x,_.y,_.z),v.copy(_).normalize(),w.push(v.x,v.y,v.z),M.push(z+A,1-D),I.push(p++)}d.push(I)}for(let g=0;g<n;g++)for(let I=0;I<t;I++){const D=d[g][I+1],A=d[g][I],B=d[g+1][I],z=d[g+1][I+1];(g!==0||l>0)&&x.push(D,A,z),(g!==n-1||h<Math.PI)&&x.push(A,B,z)}this.setIndex(x),this.setAttribute("position",new jt(S,3)),this.setAttribute("normal",new jt(w,3)),this.setAttribute("uv",new jt(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class da extends gn{constructor(e=1,t=.4,n=12,r=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:o},n=Math.floor(n),r=Math.floor(r);const l=[],u=[],h=[],p=[],d=new Z,_=new Z,v=new Z;for(let x=0;x<=n;x++)for(let S=0;S<=r;S++){const w=S/r*o,M=x/n*Math.PI*2;_.x=(e+t*Math.cos(M))*Math.cos(w),_.y=(e+t*Math.cos(M))*Math.sin(w),_.z=t*Math.sin(M),u.push(_.x,_.y,_.z),d.x=e*Math.cos(w),d.y=e*Math.sin(w),v.subVectors(_,d).normalize(),h.push(v.x,v.y,v.z),p.push(S/r),p.push(x/n)}for(let x=1;x<=n;x++)for(let S=1;S<=r;S++){const w=(r+1)*x+S-1,M=(r+1)*(x-1)+S-1,g=(r+1)*(x-1)+S,I=(r+1)*x+S;l.push(w,M,I),l.push(M,g,I)}this.setIndex(l),this.setAttribute("position",new jt(u,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new da(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class mi extends fr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new bt(16777215),this.specular=new bt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nl,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Eu extends fr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Tu extends fr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Va={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class bu{constructor(e,t,n){const r=this;let o=!1,l=0,u=0,h;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){u++,o===!1&&r.onStart!==void 0&&r.onStart(d,l,u),o=!0},this.itemEnd=function(d){l++,r.onProgress!==void 0&&r.onProgress(d,l,u),l===u&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return h?h(d):d},this.setURLModifier=function(d){return h=d,this},this.addHandler=function(d,_){return p.push(d,_),this},this.removeHandler=function(d){const _=p.indexOf(d);return _!==-1&&p.splice(_,2),this},this.getHandler=function(d){for(let _=0,v=p.length;_<v;_+=2){const x=p[_],S=p[_+1];if(x.global&&(x.lastIndex=0),x.test(d))return S}return null}}}const wu=new bu;class pa{constructor(e){this.manager=e!==void 0?e:wu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,o){n.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}pa.DEFAULT_MATERIAL_NAME="__DEFAULT";class Au extends pa{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,l=Va.get(e);if(l!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(l),o.manager.itemEnd(e)},0),l;const u=Rr("img");function h(){d(),Va.add(e,this),t&&t(this),o.manager.itemEnd(e)}function p(_){d(),r&&r(_),o.manager.itemError(e),o.manager.itemEnd(e)}function d(){u.removeEventListener("load",h,!1),u.removeEventListener("error",p,!1)}return u.addEventListener("load",h,!1),u.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),o.manager.itemStart(e),u.src=e,u}}class Qs extends pa{constructor(e){super(e)}load(e,t,n,r){const o=new mn,l=new Au(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(u){o.image=u,o.needsUpdate=!0,t!==void 0&&t(o)},n,r),o}}class Kl extends Qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Zl extends Kl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new bt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const eo=new kt,Wa=new Z,Xa=new Z;class Cu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.map=null,this.mapPass=null,this.matrix=new kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ca,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Wa.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wa),Xa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xa),t.updateMatrixWorld(),eo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(eo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const qa=new kt,Sr=new Z,to=new Z;class Ru extends Cu{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new wt(4,2),this._viewportCount=6,this._viewports=[new Bt(2,1,1,1),new Bt(0,1,1,1),new Bt(3,1,1,1),new Bt(1,1,1,1),new Bt(3,0,1,1),new Bt(1,0,1,1)],this._cubeDirections=[new Z(1,0,0),new Z(-1,0,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,1,0),new Z(0,-1,0)],this._cubeUps=[new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,0,1),new Z(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,o=e.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Sr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Sr),to.copy(n.position),to.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(to),n.updateMatrixWorld(),r.makeTranslation(-Sr.x,-Sr.y,-Sr.z),qa.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qa)}}class Lu extends Kl{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Ru}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Pu extends ql{constructor(e=-1,t=1,n=1,r=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=n-e,l=n+e,u=r+t,h=r-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=p*this.view.offsetX,l=o+p*this.view.width,u-=d*this.view.offsetY,h=u-d*this.view.height}this.projectionMatrix.makeOrthographic(o,l,u,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Du extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function ja(i,e,t,n){const r=Iu(n);switch(t){case Cl:return i*e;case Ll:return i*e;case Pl:return i*e*2;case Dl:return i*e/r.components*r.byteLength;case oa:return i*e/r.components*r.byteLength;case Il:return i*e*2/r.components*r.byteLength;case aa:return i*e*2/r.components*r.byteLength;case Rl:return i*e*3/r.components*r.byteLength;case Un:return i*e*4/r.components*r.byteLength;case la:return i*e*4/r.components*r.byteLength;case cs:case us:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case hs:case fs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ao:case Ro:return Math.max(i,16)*Math.max(e,8)/4;case wo:case Co:return Math.max(i,8)*Math.max(e,8)/2;case Lo:case Po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Do:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Uo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case No:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Fo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Oo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Bo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case zo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ko:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ho:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Go:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Vo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Xo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case qo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ds:case jo:case Yo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ul:case $o:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ko:case Zo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Iu(i){switch(i){case ii:case bl:return{byteLength:1,components:1};case Cr:case wl:case Lr:return{byteLength:2,components:1};case ra:case sa:return{byteLength:2,components:4};case Ui:case ia:case Qn:return{byteLength:4,components:1};case Al:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ta}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ta);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Jl(){let i=null,e=!1,t=null,n=null;function r(o,l){t(o,l),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function Uu(i){const e=new WeakMap;function t(u,h){const p=u.array,d=u.usage,_=p.byteLength,v=i.createBuffer();i.bindBuffer(h,v),i.bufferData(h,p,d),u.onUploadCallback();let x;if(p instanceof Float32Array)x=i.FLOAT;else if(p instanceof Uint16Array)u.isFloat16BufferAttribute?x=i.HALF_FLOAT:x=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=i.SHORT;else if(p instanceof Uint32Array)x=i.UNSIGNED_INT;else if(p instanceof Int32Array)x=i.INT;else if(p instanceof Int8Array)x=i.BYTE;else if(p instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:u.version,size:_}}function n(u,h,p){const d=h.array,_=h.updateRanges;if(i.bindBuffer(p,u),_.length===0)i.bufferSubData(p,0,d);else{_.sort((x,S)=>x.start-S.start);let v=0;for(let x=1;x<_.length;x++){const S=_[v],w=_[x];w.start<=S.start+S.count+1?S.count=Math.max(S.count,w.start+w.count-S.start):(++v,_[v]=w)}_.length=v+1;for(let x=0,S=_.length;x<S;x++){const w=_[x];i.bufferSubData(p,w.start*d.BYTES_PER_ELEMENT,d,w.start,w.count)}h.clearUpdateRanges()}h.onUploadCallback()}function r(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=e.get(u);h&&(i.deleteBuffer(h.buffer),e.delete(u))}function l(u,h){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const d=e.get(u);(!d||d.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const p=e.get(u);if(p===void 0)e.set(u,t(u,h));else if(p.version<u.version){if(p.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(p.buffer,u,h),p.version=u.version}}return{get:r,remove:o,update:l}}var Nu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fu=`#ifdef USE_ALPHAHASH
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
#endif`,Ou=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ku=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hu=`#ifdef USE_AOMAP
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
#endif`,Gu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vu=`#ifdef USE_BATCHING
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
#endif`,Wu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ju=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yu=`#ifdef USE_IRIDESCENCE
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
#endif`,$u=`#ifdef USE_BUMPMAP
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
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ju=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,th=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ih=`#if defined( USE_COLOR_ALPHA )
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
#endif`,rh=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,sh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,oh=`vec3 transformedNormal = objectNormal;
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
#endif`,ah=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ch=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hh="gl_FragColor = linearToOutputTexel( gl_FragColor );",fh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dh=`#ifdef USE_ENVMAP
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
#endif`,ph=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mh=`#ifdef USE_ENVMAP
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
#endif`,gh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_h=`#ifdef USE_ENVMAP
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
#endif`,vh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sh=`#ifdef USE_GRADIENTMAP
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
}`,Eh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Th=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wh=`uniform bool receiveShadow;
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
#endif`,Ah=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,Ch=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ph=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Ih=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Uh=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif`,Nh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Oh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wh=`#if defined( USE_POINTS_UV )
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
#endif`,Xh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$h=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kh=`#ifdef USE_MORPHTARGETS
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
#endif`,Zh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ef=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rf=`#ifdef USE_NORMALMAP
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
#endif`,sf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,of=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,af=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ff=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,df=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_f=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,vf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yf=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Mf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sf=`#ifdef USE_SKINNING
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
#endif`,Ef=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tf=`#ifdef USE_SKINNING
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
#endif`,bf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Af=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rf=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lf=`#ifdef USE_TRANSMISSION
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
#endif`,Pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,If=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Nf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ff=`uniform sampler2D t2D;
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
}`,Of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hf=`#include <common>
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
}`,Gf=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Vf=`#define DISTANCE
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
}`,Wf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,Xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jf=`uniform float scale;
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
}`,Yf=`uniform vec3 diffuse;
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
}`,$f=`#include <common>
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
}`,Kf=`uniform vec3 diffuse;
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
}`,Zf=`#define LAMBERT
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
}`,Jf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Qf=`#define MATCAP
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
}`,ed=`#define MATCAP
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
}`,td=`#define NORMAL
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
}`,nd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,id=`#define PHONG
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
}`,rd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,sd=`#define STANDARD
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
}`,od=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,ad=`#define TOON
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
}`,ld=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,cd=`uniform float size;
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
}`,ud=`uniform vec3 diffuse;
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
}`,hd=`#include <common>
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
}`,fd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,dd=`uniform float rotation;
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
}`,pd=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:Nu,alphahash_pars_fragment:Fu,alphamap_fragment:Ou,alphamap_pars_fragment:Bu,alphatest_fragment:zu,alphatest_pars_fragment:ku,aomap_fragment:Hu,aomap_pars_fragment:Gu,batching_pars_vertex:Vu,batching_vertex:Wu,begin_vertex:Xu,beginnormal_vertex:qu,bsdfs:ju,iridescence_fragment:Yu,bumpmap_pars_fragment:$u,clipping_planes_fragment:Ku,clipping_planes_pars_fragment:Zu,clipping_planes_pars_vertex:Ju,clipping_planes_vertex:Qu,color_fragment:eh,color_pars_fragment:th,color_pars_vertex:nh,color_vertex:ih,common:rh,cube_uv_reflection_fragment:sh,defaultnormal_vertex:oh,displacementmap_pars_vertex:ah,displacementmap_vertex:lh,emissivemap_fragment:ch,emissivemap_pars_fragment:uh,colorspace_fragment:hh,colorspace_pars_fragment:fh,envmap_fragment:dh,envmap_common_pars_fragment:ph,envmap_pars_fragment:mh,envmap_pars_vertex:gh,envmap_physical_pars_fragment:Ah,envmap_vertex:_h,fog_vertex:vh,fog_pars_vertex:xh,fog_fragment:yh,fog_pars_fragment:Mh,gradientmap_pars_fragment:Sh,lightmap_pars_fragment:Eh,lights_lambert_fragment:Th,lights_lambert_pars_fragment:bh,lights_pars_begin:wh,lights_toon_fragment:Ch,lights_toon_pars_fragment:Rh,lights_phong_fragment:Lh,lights_phong_pars_fragment:Ph,lights_physical_fragment:Dh,lights_physical_pars_fragment:Ih,lights_fragment_begin:Uh,lights_fragment_maps:Nh,lights_fragment_end:Fh,logdepthbuf_fragment:Oh,logdepthbuf_pars_fragment:Bh,logdepthbuf_pars_vertex:zh,logdepthbuf_vertex:kh,map_fragment:Hh,map_pars_fragment:Gh,map_particle_fragment:Vh,map_particle_pars_fragment:Wh,metalnessmap_fragment:Xh,metalnessmap_pars_fragment:qh,morphinstance_vertex:jh,morphcolor_vertex:Yh,morphnormal_vertex:$h,morphtarget_pars_vertex:Kh,morphtarget_vertex:Zh,normal_fragment_begin:Jh,normal_fragment_maps:Qh,normal_pars_fragment:ef,normal_pars_vertex:tf,normal_vertex:nf,normalmap_pars_fragment:rf,clearcoat_normal_fragment_begin:sf,clearcoat_normal_fragment_maps:of,clearcoat_pars_fragment:af,iridescence_pars_fragment:lf,opaque_fragment:cf,packing:uf,premultiplied_alpha_fragment:hf,project_vertex:ff,dithering_fragment:df,dithering_pars_fragment:pf,roughnessmap_fragment:mf,roughnessmap_pars_fragment:gf,shadowmap_pars_fragment:_f,shadowmap_pars_vertex:vf,shadowmap_vertex:xf,shadowmask_pars_fragment:yf,skinbase_vertex:Mf,skinning_pars_vertex:Sf,skinning_vertex:Ef,skinnormal_vertex:Tf,specularmap_fragment:bf,specularmap_pars_fragment:wf,tonemapping_fragment:Af,tonemapping_pars_fragment:Cf,transmission_fragment:Rf,transmission_pars_fragment:Lf,uv_pars_fragment:Pf,uv_pars_vertex:Df,uv_vertex:If,worldpos_vertex:Uf,background_vert:Nf,background_frag:Ff,backgroundCube_vert:Of,backgroundCube_frag:Bf,cube_vert:zf,cube_frag:kf,depth_vert:Hf,depth_frag:Gf,distanceRGBA_vert:Vf,distanceRGBA_frag:Wf,equirect_vert:Xf,equirect_frag:qf,linedashed_vert:jf,linedashed_frag:Yf,meshbasic_vert:$f,meshbasic_frag:Kf,meshlambert_vert:Zf,meshlambert_frag:Jf,meshmatcap_vert:Qf,meshmatcap_frag:ed,meshnormal_vert:td,meshnormal_frag:nd,meshphong_vert:id,meshphong_frag:rd,meshphysical_vert:sd,meshphysical_frag:od,meshtoon_vert:ad,meshtoon_frag:ld,points_vert:cd,points_frag:ud,shadow_vert:hd,shadow_frag:fd,sprite_vert:dd,sprite_frag:pd},Ie={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},Hn={basic:{uniforms:pn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:pn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new bt(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:pn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:pn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:pn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new bt(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:pn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:pn([Ie.points,Ie.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:pn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:pn([Ie.common,Ie.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:pn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:pn([Ie.sprite,Ie.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:pn([Ie.common,Ie.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:pn([Ie.lights,Ie.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Hn.physical={uniforms:pn([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const rs={r:0,b:0,g:0},bi=new Vn,md=new kt;function gd(i,e,t,n,r,o,l){const u=new bt(0);let h=o===!0?0:1,p,d,_=null,v=0,x=null;function S(D){let A=D.isScene===!0?D.background:null;return A&&A.isTexture&&(A=(D.backgroundBlurriness>0?t:e).get(A)),A}function w(D){let A=!1;const B=S(D);B===null?g(u,h):B&&B.isColor&&(g(B,1),A=!0);const z=i.xr.getEnvironmentBlendMode();z==="additive"?n.buffers.color.setClear(0,0,0,1,l):z==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(i.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(D,A){const B=S(A);B&&(B.isCubeTexture||B.mapping===vs)?(d===void 0&&(d=new Jt(new vi(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:ur(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(z,U,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),bi.copy(A.backgroundRotation),bi.x*=-1,bi.y*=-1,bi.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),d.material.uniforms.envMap.value=B,d.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(md.makeRotationFromEuler(bi)),d.material.toneMapped=Lt.getTransfer(B.colorSpace)!==Ot,(_!==B||v!==B.version||x!==i.toneMapping)&&(d.material.needsUpdate=!0,_=B,v=B.version,x=i.toneMapping),d.layers.enableAll(),D.unshift(d,d.geometry,d.material,0,0,null)):B&&B.isTexture&&(p===void 0&&(p=new Jt(new Nr(2,2),new _i({name:"BackgroundMaterial",uniforms:ur(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=B,p.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,p.material.toneMapped=Lt.getTransfer(B.colorSpace)!==Ot,B.matrixAutoUpdate===!0&&B.updateMatrix(),p.material.uniforms.uvTransform.value.copy(B.matrix),(_!==B||v!==B.version||x!==i.toneMapping)&&(p.material.needsUpdate=!0,_=B,v=B.version,x=i.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function g(D,A){D.getRGB(rs,Xl(i)),n.buffers.color.setClear(rs.r,rs.g,rs.b,A,l)}function I(){d!==void 0&&(d.geometry.dispose(),d.material.dispose()),p!==void 0&&(p.geometry.dispose(),p.material.dispose())}return{getClearColor:function(){return u},setClearColor:function(D,A=1){u.set(D),h=A,g(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(D){h=D,g(u,h)},render:w,addToRenderList:M,dispose:I}}function _d(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=v(null);let o=r,l=!1;function u(b,k,ee,Q,ue){let ve=!1;const X=_(Q,ee,k);o!==X&&(o=X,p(o.object)),ve=x(b,Q,ee,ue),ve&&S(b,Q,ee,ue),ue!==null&&e.update(ue,i.ELEMENT_ARRAY_BUFFER),(ve||l)&&(l=!1,A(b,k,ee,Q),ue!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function h(){return i.createVertexArray()}function p(b){return i.bindVertexArray(b)}function d(b){return i.deleteVertexArray(b)}function _(b,k,ee){const Q=ee.wireframe===!0;let ue=n[b.id];ue===void 0&&(ue={},n[b.id]=ue);let ve=ue[k.id];ve===void 0&&(ve={},ue[k.id]=ve);let X=ve[Q];return X===void 0&&(X=v(h()),ve[Q]=X),X}function v(b){const k=[],ee=[],Q=[];for(let ue=0;ue<t;ue++)k[ue]=0,ee[ue]=0,Q[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ee,attributeDivisors:Q,object:b,attributes:{},index:null}}function x(b,k,ee,Q){const ue=o.attributes,ve=k.attributes;let X=0;const Me=ee.getAttributes();for(const he in Me)if(Me[he].location>=0){const Ue=ue[he];let We=ve[he];if(We===void 0&&(he==="instanceMatrix"&&b.instanceMatrix&&(We=b.instanceMatrix),he==="instanceColor"&&b.instanceColor&&(We=b.instanceColor)),Ue===void 0||Ue.attribute!==We||We&&Ue.data!==We.data)return!0;X++}return o.attributesNum!==X||o.index!==Q}function S(b,k,ee,Q){const ue={},ve=k.attributes;let X=0;const Me=ee.getAttributes();for(const he in Me)if(Me[he].location>=0){let Ue=ve[he];Ue===void 0&&(he==="instanceMatrix"&&b.instanceMatrix&&(Ue=b.instanceMatrix),he==="instanceColor"&&b.instanceColor&&(Ue=b.instanceColor));const We={};We.attribute=Ue,Ue&&Ue.data&&(We.data=Ue.data),ue[he]=We,X++}o.attributes=ue,o.attributesNum=X,o.index=Q}function w(){const b=o.newAttributes;for(let k=0,ee=b.length;k<ee;k++)b[k]=0}function M(b){g(b,0)}function g(b,k){const ee=o.newAttributes,Q=o.enabledAttributes,ue=o.attributeDivisors;ee[b]=1,Q[b]===0&&(i.enableVertexAttribArray(b),Q[b]=1),ue[b]!==k&&(i.vertexAttribDivisor(b,k),ue[b]=k)}function I(){const b=o.newAttributes,k=o.enabledAttributes;for(let ee=0,Q=k.length;ee<Q;ee++)k[ee]!==b[ee]&&(i.disableVertexAttribArray(ee),k[ee]=0)}function D(b,k,ee,Q,ue,ve,X){X===!0?i.vertexAttribIPointer(b,k,ee,ue,ve):i.vertexAttribPointer(b,k,ee,Q,ue,ve)}function A(b,k,ee,Q){w();const ue=Q.attributes,ve=ee.getAttributes(),X=k.defaultAttributeValues;for(const Me in ve){const he=ve[Me];if(he.location>=0){let c=ue[Me];if(c===void 0&&(Me==="instanceMatrix"&&b.instanceMatrix&&(c=b.instanceMatrix),Me==="instanceColor"&&b.instanceColor&&(c=b.instanceColor)),c!==void 0){const Ue=c.normalized,We=c.itemSize,rt=e.get(c);if(rt===void 0)continue;const Ct=rt.buffer,ge=rt.type,be=rt.bytesPerElement,Ke=ge===i.INT||ge===i.UNSIGNED_INT||c.gpuType===ia;if(c.isInterleavedBufferAttribute){const Re=c.data,ot=Re.stride,ut=c.offset;if(Re.isInstancedInterleavedBuffer){for(let dt=0;dt<he.locationSize;dt++)g(he.location+dt,Re.meshPerAttribute);b.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let dt=0;dt<he.locationSize;dt++)M(he.location+dt);i.bindBuffer(i.ARRAY_BUFFER,Ct);for(let dt=0;dt<he.locationSize;dt++)D(he.location+dt,We/he.locationSize,ge,Ue,ot*be,(ut+We/he.locationSize*dt)*be,Ke)}else{if(c.isInstancedBufferAttribute){for(let Re=0;Re<he.locationSize;Re++)g(he.location+Re,c.meshPerAttribute);b.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=c.meshPerAttribute*c.count)}else for(let Re=0;Re<he.locationSize;Re++)M(he.location+Re);i.bindBuffer(i.ARRAY_BUFFER,Ct);for(let Re=0;Re<he.locationSize;Re++)D(he.location+Re,We/he.locationSize,ge,Ue,We*be,We/he.locationSize*Re*be,Ke)}}else if(X!==void 0){const Ue=X[Me];if(Ue!==void 0)switch(Ue.length){case 2:i.vertexAttrib2fv(he.location,Ue);break;case 3:i.vertexAttrib3fv(he.location,Ue);break;case 4:i.vertexAttrib4fv(he.location,Ue);break;default:i.vertexAttrib1fv(he.location,Ue)}}}}I()}function B(){O();for(const b in n){const k=n[b];for(const ee in k){const Q=k[ee];for(const ue in Q)d(Q[ue].object),delete Q[ue];delete k[ee]}delete n[b]}}function z(b){if(n[b.id]===void 0)return;const k=n[b.id];for(const ee in k){const Q=k[ee];for(const ue in Q)d(Q[ue].object),delete Q[ue];delete k[ee]}delete n[b.id]}function U(b){for(const k in n){const ee=n[k];if(ee[b.id]===void 0)continue;const Q=ee[b.id];for(const ue in Q)d(Q[ue].object),delete Q[ue];delete ee[b.id]}}function O(){C(),l=!0,o!==r&&(o=r,p(o.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:u,reset:O,resetDefaultState:C,dispose:B,releaseStatesOfGeometry:z,releaseStatesOfProgram:U,initAttributes:w,enableAttribute:M,disableUnusedAttributes:I}}function vd(i,e,t){let n;function r(p){n=p}function o(p,d){i.drawArrays(n,p,d),t.update(d,n,1)}function l(p,d,_){_!==0&&(i.drawArraysInstanced(n,p,d,_),t.update(d,n,_))}function u(p,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,p,0,d,0,_);let x=0;for(let S=0;S<_;S++)x+=d[S];t.update(x,n,1)}function h(p,d,_,v){if(_===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let S=0;S<p.length;S++)l(p[S],d[S],v[S]);else{x.multiDrawArraysInstancedWEBGL(n,p,0,d,0,v,0,_);let S=0;for(let w=0;w<_;w++)S+=d[w]*v[w];t.update(S,n,1)}}this.setMode=r,this.render=o,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function xd(i,e,t,n){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(U){return!(U!==Un&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(U){const O=U===Lr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==ii&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Qn&&!O)}function h(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const d=h(p);d!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",d,"instead."),p=d);const _=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),x=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_TEXTURE_SIZE),M=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),I=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),D=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),B=S>0,z=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:h,textureFormatReadable:l,textureTypeReadable:u,precision:p,logarithmicDepthBuffer:_,reverseDepthBuffer:v,maxTextures:x,maxVertexTextures:S,maxTextureSize:w,maxCubemapSize:M,maxAttributes:g,maxVertexUniforms:I,maxVaryings:D,maxFragmentUniforms:A,vertexTextures:B,maxSamples:z}}function yd(i){const e=this;let t=null,n=0,r=!1,o=!1;const l=new Ai,u=new _t,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||n!==0||r;return r=v,n=_.length,x},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(_,v){t=d(_,v,0)},this.setState=function(_,v,x){const S=_.clippingPlanes,w=_.clipIntersection,M=_.clipShadows,g=i.get(_);if(!r||S===null||S.length===0||o&&!M)o?d(null):p();else{const I=o?0:n,D=I*4;let A=g.clippingState||null;h.value=A,A=d(S,v,D,x);for(let B=0;B!==D;++B)A[B]=t[B];g.clippingState=A,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=I}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(_,v,x,S){const w=_!==null?_.length:0;let M=null;if(w!==0){if(M=h.value,S!==!0||M===null){const g=x+w*4,I=v.matrixWorldInverse;u.getNormalMatrix(I),(M===null||M.length<g)&&(M=new Float32Array(g));for(let D=0,A=x;D!==w;++D,A+=4)l.copy(_[D]).applyMatrix4(I,u),l.normal.toArray(M,A),M[A+3]=l.constant}h.value=M,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,M}}function Md(i){let e=new WeakMap;function t(l,u){return u===Eo?l.mapping=sr:u===To&&(l.mapping=or),l}function n(l){if(l&&l.isTexture){const u=l.mapping;if(u===Eo||u===To)if(e.has(l)){const h=e.get(l).texture;return t(h,l.mapping)}else{const h=l.image;if(h&&h.height>0){const p=new yu(h.height);return p.fromEquirectangularTexture(i,l),e.set(l,p),l.addEventListener("dispose",r),t(p.texture,l.mapping)}else return null}}return l}function r(l){const u=l.target;u.removeEventListener("dispose",r);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}const er=4,Ya=[.125,.215,.35,.446,.526,.582],Li=20,no=new Pu,$a=new bt;let io=null,ro=0,so=0,oo=!1;const Ci=(1+Math.sqrt(5))/2,Zi=1/Ci,Ka=[new Z(-Ci,Zi,0),new Z(Ci,Zi,0),new Z(-Zi,0,Ci),new Z(Zi,0,Ci),new Z(0,Ci,-Zi),new Z(0,Ci,Zi),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)];class Za{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){io=this._renderer.getRenderTarget(),ro=this._renderer.getActiveCubeFace(),so=this._renderer.getActiveMipmapLevel(),oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=el(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(io,ro,so),this._renderer.xr.enabled=oo,e.scissorTest=!1,ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sr||e.mapping===or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),io=this._renderer.getRenderTarget(),ro=this._renderer.getActiveCubeFace(),so=this._renderer.getActiveMipmapLevel(),oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Lr,format:Un,colorSpace:cr,depthBuffer:!1},r=Ja(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ja(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sd(o)),this._blurMaterial=Ed(o,e,t)}return r}_compileMaterial(e){const t=new Jt(this._lodPlanes[0],e);this._renderer.compile(t,no)}_sceneToCubeUV(e,t,n,r){const u=new fn(90,1,t,n),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],d=this._renderer,_=d.autoClear,v=d.toneMapping;d.getClearColor($a),d.toneMapping=pi,d.autoClear=!1;const x=new Ar({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),S=new Jt(new vi,x);let w=!1;const M=e.background;M?M.isColor&&(x.color.copy(M),e.background=null,w=!0):(x.color.copy($a),w=!0);for(let g=0;g<6;g++){const I=g%3;I===0?(u.up.set(0,h[g],0),u.lookAt(p[g],0,0)):I===1?(u.up.set(0,0,h[g]),u.lookAt(0,p[g],0)):(u.up.set(0,h[g],0),u.lookAt(0,0,p[g]));const D=this._cubeSize;ss(r,I*D,g>2?D:0,D,D),d.setRenderTarget(r),w&&d.render(S,u),d.render(e,u)}S.geometry.dispose(),S.material.dispose(),d.toneMapping=v,d.autoClear=_,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===sr||e.mapping===or;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=el()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qa());const o=r?this._cubemapMaterial:this._equirectMaterial,l=new Jt(this._lodPlanes[0],o),u=o.uniforms;u.envMap.value=e;const h=this._cubeSize;ss(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(l,no)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const l=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),u=Ka[(r-o-1)%Ka.length];this._blur(e,o-1,o,l,u)}t.autoClear=n}_blur(e,t,n,r,o){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,r,"latitudinal",o),this._halfBlur(l,e,n,n,r,"longitudinal",o)}_halfBlur(e,t,n,r,o,l,u){const h=this._renderer,p=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,_=new Jt(this._lodPlanes[r],p),v=p.uniforms,x=this._sizeLods[n]-1,S=isFinite(o)?Math.PI/(2*x):2*Math.PI/(2*Li-1),w=o/S,M=isFinite(o)?1+Math.floor(d*w):Li;M>Li&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Li}`);const g=[];let I=0;for(let U=0;U<Li;++U){const O=U/w,C=Math.exp(-O*O/2);g.push(C),U===0?I+=C:U<M&&(I+=2*C)}for(let U=0;U<g.length;U++)g[U]=g[U]/I;v.envMap.value=e.texture,v.samples.value=M,v.weights.value=g,v.latitudinal.value=l==="latitudinal",u&&(v.poleAxis.value=u);const{_lodMax:D}=this;v.dTheta.value=S,v.mipInt.value=D-n;const A=this._sizeLods[r],B=3*A*(r>D-er?r-D+er:0),z=4*(this._cubeSize-A);ss(t,B,z,3*A,2*A),h.setRenderTarget(t),h.render(_,no)}}function Sd(i){const e=[],t=[],n=[];let r=i;const o=i-er+1+Ya.length;for(let l=0;l<o;l++){const u=Math.pow(2,r);t.push(u);let h=1/u;l>i-er?h=Ya[l-i+er-1]:l===0&&(h=0),n.push(h);const p=1/(u-2),d=-p,_=1+p,v=[d,d,_,d,_,_,d,d,_,_,d,_],x=6,S=6,w=3,M=2,g=1,I=new Float32Array(w*S*x),D=new Float32Array(M*S*x),A=new Float32Array(g*S*x);for(let z=0;z<x;z++){const U=z%3*2/3-1,O=z>2?0:-1,C=[U,O,0,U+2/3,O,0,U+2/3,O+1,0,U,O,0,U+2/3,O+1,0,U,O+1,0];I.set(C,w*S*z),D.set(v,M*S*z);const b=[z,z,z,z,z,z];A.set(b,g*S*z)}const B=new gn;B.setAttribute("position",new Fn(I,w)),B.setAttribute("uv",new Fn(D,M)),B.setAttribute("faceIndex",new Fn(A,g)),e.push(B),r>er&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ja(i,e,t){const n=new Ni(i,e,t);return n.texture.mapping=vs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ss(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Ed(i,e,t){const n=new Float32Array(Li),r=new Z(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ma(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Qa(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ma(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function el(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function ma(){return`

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
	`}function Td(i){let e=new WeakMap,t=null;function n(u){if(u&&u.isTexture){const h=u.mapping,p=h===Eo||h===To,d=h===sr||h===or;if(p||d){let _=e.get(u);const v=_!==void 0?_.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==v)return t===null&&(t=new Za(i)),_=p?t.fromEquirectangular(u,_):t.fromCubemap(u,_),_.texture.pmremVersion=u.pmremVersion,e.set(u,_),_.texture;if(_!==void 0)return _.texture;{const x=u.image;return p&&x&&x.height>0||d&&x&&r(x)?(t===null&&(t=new Za(i)),_=p?t.fromEquirectangular(u):t.fromCubemap(u),_.texture.pmremVersion=u.pmremVersion,e.set(u,_),u.addEventListener("dispose",o),_.texture):null}}}return u}function r(u){let h=0;const p=6;for(let d=0;d<p;d++)u[d]!==void 0&&h++;return h===p}function o(u){const h=u.target;h.removeEventListener("dispose",o);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function bd(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Ji("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function wd(i,e,t,n){const r={},o=new WeakMap;function l(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const S in v.attributes)e.remove(v.attributes[S]);v.removeEventListener("dispose",l),delete r[v.id];const x=o.get(v);x&&(e.remove(x),o.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function u(_,v){return r[v.id]===!0||(v.addEventListener("dispose",l),r[v.id]=!0,t.memory.geometries++),v}function h(_){const v=_.attributes;for(const x in v)e.update(v[x],i.ARRAY_BUFFER)}function p(_){const v=[],x=_.index,S=_.attributes.position;let w=0;if(x!==null){const I=x.array;w=x.version;for(let D=0,A=I.length;D<A;D+=3){const B=I[D+0],z=I[D+1],U=I[D+2];v.push(B,z,z,U,U,B)}}else if(S!==void 0){const I=S.array;w=S.version;for(let D=0,A=I.length/3-1;D<A;D+=3){const B=D+0,z=D+1,U=D+2;v.push(B,z,z,U,U,B)}}else return;const M=new(Ol(v)?Wl:Vl)(v,1);M.version=w;const g=o.get(_);g&&e.remove(g),o.set(_,M)}function d(_){const v=o.get(_);if(v){const x=_.index;x!==null&&v.version<x.version&&p(_)}else p(_);return o.get(_)}return{get:u,update:h,getWireframeAttribute:d}}function Ad(i,e,t){let n;function r(v){n=v}let o,l;function u(v){o=v.type,l=v.bytesPerElement}function h(v,x){i.drawElements(n,x,o,v*l),t.update(x,n,1)}function p(v,x,S){S!==0&&(i.drawElementsInstanced(n,x,o,v*l,S),t.update(x,n,S))}function d(v,x,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,x,0,o,v,0,S);let M=0;for(let g=0;g<S;g++)M+=x[g];t.update(M,n,1)}function _(v,x,S,w){if(S===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let g=0;g<v.length;g++)p(v[g]/l,x[g],w[g]);else{M.multiDrawElementsInstancedWEBGL(n,x,0,o,v,0,w,0,S);let g=0;for(let I=0;I<S;I++)g+=x[I]*w[I];t.update(g,n,1)}}this.setMode=r,this.setIndex=u,this.render=h,this.renderInstances=p,this.renderMultiDraw=d,this.renderMultiDrawInstances=_}function Cd(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,l,u){switch(t.calls++,l){case i.TRIANGLES:t.triangles+=u*(o/3);break;case i.LINES:t.lines+=u*(o/2);break;case i.LINE_STRIP:t.lines+=u*(o-1);break;case i.LINE_LOOP:t.lines+=u*o;break;case i.POINTS:t.points+=u*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Rd(i,e,t){const n=new WeakMap,r=new Bt;function o(l,u,h){const p=l.morphTargetInfluences,d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=d!==void 0?d.length:0;let v=n.get(u);if(v===void 0||v.count!==_){let b=function(){O.dispose(),n.delete(u),u.removeEventListener("dispose",b)};var x=b;v!==void 0&&v.texture.dispose();const S=u.morphAttributes.position!==void 0,w=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,g=u.morphAttributes.position||[],I=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let A=0;S===!0&&(A=1),w===!0&&(A=2),M===!0&&(A=3);let B=u.attributes.position.count*A,z=1;B>e.maxTextureSize&&(z=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const U=new Float32Array(B*z*4*_),O=new zl(U,B,z,_);O.type=Qn,O.needsUpdate=!0;const C=A*4;for(let k=0;k<_;k++){const ee=g[k],Q=I[k],ue=D[k],ve=B*z*4*k;for(let X=0;X<ee.count;X++){const Me=X*C;S===!0&&(r.fromBufferAttribute(ee,X),U[ve+Me+0]=r.x,U[ve+Me+1]=r.y,U[ve+Me+2]=r.z,U[ve+Me+3]=0),w===!0&&(r.fromBufferAttribute(Q,X),U[ve+Me+4]=r.x,U[ve+Me+5]=r.y,U[ve+Me+6]=r.z,U[ve+Me+7]=0),M===!0&&(r.fromBufferAttribute(ue,X),U[ve+Me+8]=r.x,U[ve+Me+9]=r.y,U[ve+Me+10]=r.z,U[ve+Me+11]=ue.itemSize===4?r.w:1)}}v={count:_,texture:O,size:new wt(B,z)},n.set(u,v),u.addEventListener("dispose",b)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",l.morphTexture,t);else{let S=0;for(let M=0;M<p.length;M++)S+=p[M];const w=u.morphTargetsRelative?1:1-S;h.getUniforms().setValue(i,"morphTargetBaseInfluence",w),h.getUniforms().setValue(i,"morphTargetInfluences",p)}h.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}return{update:o}}function Ld(i,e,t,n){let r=new WeakMap;function o(h){const p=n.render.frame,d=h.geometry,_=e.get(h,d);if(r.get(_)!==p&&(e.update(_),r.set(_,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),r.get(h)!==p&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,p))),h.isSkinnedMesh){const v=h.skeleton;r.get(v)!==p&&(v.update(),r.set(v,p))}return _}function l(){r=new WeakMap}function u(h){const p=h.target;p.removeEventListener("dispose",u),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:o,dispose:l}}const Ql=new mn,tl=new $l(1,1),ec=new zl,tc=new ru,nc=new jl,nl=[],il=[],rl=new Float32Array(16),sl=new Float32Array(9),ol=new Float32Array(4);function dr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let o=nl[r];if(o===void 0&&(o=new Float32Array(r),nl[r]=o),e!==0){n.toArray(o,0);for(let l=1,u=0;l!==e;++l)u+=t,i[l].toArray(o,u)}return o}function en(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function tn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Es(i,e){let t=il[e];t===void 0&&(t=new Int32Array(e),il[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Pd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Dd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2fv(this.addr,e),tn(t,e)}}function Id(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;i.uniform3fv(this.addr,e),tn(t,e)}}function Ud(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4fv(this.addr,e),tn(t,e)}}function Nd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;ol.set(n),i.uniformMatrix2fv(this.addr,!1,ol),tn(t,n)}}function Fd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;sl.set(n),i.uniformMatrix3fv(this.addr,!1,sl),tn(t,n)}}function Od(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;rl.set(n),i.uniformMatrix4fv(this.addr,!1,rl),tn(t,n)}}function Bd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function zd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2iv(this.addr,e),tn(t,e)}}function kd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;i.uniform3iv(this.addr,e),tn(t,e)}}function Hd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4iv(this.addr,e),tn(t,e)}}function Gd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Vd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2uiv(this.addr,e),tn(t,e)}}function Wd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;i.uniform3uiv(this.addr,e),tn(t,e)}}function Xd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4uiv(this.addr,e),tn(t,e)}}function qd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(tl.compareFunction=Fl,o=tl):o=Ql,t.setTexture2D(e||o,r)}function jd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||tc,r)}function Yd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||nc,r)}function $d(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||ec,r)}function Kd(i){switch(i){case 5126:return Pd;case 35664:return Dd;case 35665:return Id;case 35666:return Ud;case 35674:return Nd;case 35675:return Fd;case 35676:return Od;case 5124:case 35670:return Bd;case 35667:case 35671:return zd;case 35668:case 35672:return kd;case 35669:case 35673:return Hd;case 5125:return Gd;case 36294:return Vd;case 36295:return Wd;case 36296:return Xd;case 35678:case 36198:case 36298:case 36306:case 35682:return qd;case 35679:case 36299:case 36307:return jd;case 35680:case 36300:case 36308:case 36293:return Yd;case 36289:case 36303:case 36311:case 36292:return $d}}function Zd(i,e){i.uniform1fv(this.addr,e)}function Jd(i,e){const t=dr(e,this.size,2);i.uniform2fv(this.addr,t)}function Qd(i,e){const t=dr(e,this.size,3);i.uniform3fv(this.addr,t)}function ep(i,e){const t=dr(e,this.size,4);i.uniform4fv(this.addr,t)}function tp(i,e){const t=dr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function np(i,e){const t=dr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ip(i,e){const t=dr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function rp(i,e){i.uniform1iv(this.addr,e)}function sp(i,e){i.uniform2iv(this.addr,e)}function op(i,e){i.uniform3iv(this.addr,e)}function ap(i,e){i.uniform4iv(this.addr,e)}function lp(i,e){i.uniform1uiv(this.addr,e)}function cp(i,e){i.uniform2uiv(this.addr,e)}function up(i,e){i.uniform3uiv(this.addr,e)}function hp(i,e){i.uniform4uiv(this.addr,e)}function fp(i,e,t){const n=this.cache,r=e.length,o=Es(t,r);en(n,o)||(i.uniform1iv(this.addr,o),tn(n,o));for(let l=0;l!==r;++l)t.setTexture2D(e[l]||Ql,o[l])}function dp(i,e,t){const n=this.cache,r=e.length,o=Es(t,r);en(n,o)||(i.uniform1iv(this.addr,o),tn(n,o));for(let l=0;l!==r;++l)t.setTexture3D(e[l]||tc,o[l])}function pp(i,e,t){const n=this.cache,r=e.length,o=Es(t,r);en(n,o)||(i.uniform1iv(this.addr,o),tn(n,o));for(let l=0;l!==r;++l)t.setTextureCube(e[l]||nc,o[l])}function mp(i,e,t){const n=this.cache,r=e.length,o=Es(t,r);en(n,o)||(i.uniform1iv(this.addr,o),tn(n,o));for(let l=0;l!==r;++l)t.setTexture2DArray(e[l]||ec,o[l])}function gp(i){switch(i){case 5126:return Zd;case 35664:return Jd;case 35665:return Qd;case 35666:return ep;case 35674:return tp;case 35675:return np;case 35676:return ip;case 5124:case 35670:return rp;case 35667:case 35671:return sp;case 35668:case 35672:return op;case 35669:case 35673:return ap;case 5125:return lp;case 36294:return cp;case 36295:return up;case 36296:return hp;case 35678:case 36198:case 36298:case 36306:case 35682:return fp;case 35679:case 36299:case 36307:return dp;case 35680:case 36300:case 36308:case 36293:return pp;case 36289:case 36303:case 36311:case 36292:return mp}}class _p{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Kd(t.type)}}class vp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gp(t.type)}}class xp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let o=0,l=r.length;o!==l;++o){const u=r[o];u.setValue(e,t[u.id],n)}}}const ao=/(\w+)(\])?(\[|\.)?/g;function al(i,e){i.seq.push(e),i.map[e.id]=e}function yp(i,e,t){const n=i.name,r=n.length;for(ao.lastIndex=0;;){const o=ao.exec(n),l=ao.lastIndex;let u=o[1];const h=o[2]==="]",p=o[3];if(h&&(u=u|0),p===void 0||p==="["&&l+2===r){al(t,p===void 0?new _p(u,i,e):new vp(u,i,e));break}else{let _=t.map[u];_===void 0&&(_=new xp(u),al(t,_)),t=_}}}class ps{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),l=e.getUniformLocation(t,o.name);yp(o,l,this)}}setValue(e,t,n,r){const o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,l=t.length;o!==l;++o){const u=t[o],h=n[u.id];h.needsUpdate!==!1&&u.setValue(e,h.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,o=e.length;r!==o;++r){const l=e[r];l.id in t&&n.push(l)}return n}}function ll(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Mp=37297;let Sp=0;function Ep(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let l=r;l<o;l++){const u=l+1;n.push(`${u===e?">":" "} ${u}: ${t[l]}`)}return n.join(`
`)}const cl=new _t;function Tp(i){Lt._getMatrix(cl,Lt.workingColorSpace,i);const e=`mat3( ${cl.elements.map(t=>t.toFixed(4))} )`;switch(Lt.getTransfer(i)){case gs:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ul(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const l=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Ep(i.getShaderSource(e),l)}else return r}function bp(i,e){const t=Tp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function wp(i,e){let t;switch(e){case Lc:t="Linear";break;case Pc:t="Reinhard";break;case Dc:t="Cineon";break;case Ic:t="ACESFilmic";break;case Nc:t="AgX";break;case Fc:t="Neutral";break;case Uc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const os=new Z;function Ap(){Lt.getLuminanceCoefficients(os);const i=os.x.toFixed(4),e=os.y.toFixed(4),t=os.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tr).join(`
`)}function Rp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Lp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const o=i.getActiveAttrib(e,r),l=o.name;let u=1;o.type===i.FLOAT_MAT2&&(u=2),o.type===i.FLOAT_MAT3&&(u=3),o.type===i.FLOAT_MAT4&&(u=4),t[l]={type:o.type,location:i.getAttribLocation(e,l),locationSize:u}}return t}function Tr(i){return i!==""}function hl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Pp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ea(i){return i.replace(Pp,Ip)}const Dp=new Map;function Ip(i,e){let t=vt[e];if(t===void 0){const n=Dp.get(e);if(n!==void 0)t=vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ea(t)}const Up=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dl(i){return i.replace(Up,Np)}function Np(i,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function pl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Fp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===El?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===cc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function Op(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case sr:case or:e="ENVMAP_TYPE_CUBE";break;case vs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Bp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case or:e="ENVMAP_MODE_REFRACTION";break}return e}function zp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case na:e="ENVMAP_BLENDING_MULTIPLY";break;case Cc:e="ENVMAP_BLENDING_MIX";break;case Rc:e="ENVMAP_BLENDING_ADD";break}return e}function kp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Hp(i,e,t,n){const r=i.getContext(),o=t.defines;let l=t.vertexShader,u=t.fragmentShader;const h=Fp(t),p=Op(t),d=Bp(t),_=zp(t),v=kp(t),x=Cp(t),S=Rp(o),w=r.createProgram();let M,g,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Tr).join(`
`),M.length>0&&(M+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Tr).join(`
`),g.length>0&&(g+=`
`)):(M=[pl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tr).join(`
`),g=[pl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+d:"",t.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?vt.tonemapping_pars_fragment:"",t.toneMapping!==pi?wp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,bp("linearToOutputTexel",t.outputColorSpace),Ap(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Tr).join(`
`)),l=ea(l),l=hl(l,t),l=fl(l,t),u=ea(u),u=hl(u,t),u=fl(u,t),l=dl(l),u=dl(u),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,M=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,g=["#define varying in",t.glslVersion===Ea?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ea?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const D=I+M+l,A=I+g+u,B=ll(r,r.VERTEX_SHADER,D),z=ll(r,r.FRAGMENT_SHADER,A);r.attachShader(w,B),r.attachShader(w,z),t.index0AttributeName!==void 0?r.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(w,0,"position"),r.linkProgram(w);function U(k){if(i.debug.checkShaderErrors){const ee=r.getProgramInfoLog(w).trim(),Q=r.getShaderInfoLog(B).trim(),ue=r.getShaderInfoLog(z).trim();let ve=!0,X=!0;if(r.getProgramParameter(w,r.LINK_STATUS)===!1)if(ve=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,w,B,z);else{const Me=ul(r,B,"vertex"),he=ul(r,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(w,r.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ee+`
`+Me+`
`+he)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(Q===""||ue==="")&&(X=!1);X&&(k.diagnostics={runnable:ve,programLog:ee,vertexShader:{log:Q,prefix:M},fragmentShader:{log:ue,prefix:g}})}r.deleteShader(B),r.deleteShader(z),O=new ps(r,w),C=Lp(r,w)}let O;this.getUniforms=function(){return O===void 0&&U(this),O};let C;this.getAttributes=function(){return C===void 0&&U(this),C};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(w,Mp)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Sp++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=B,this.fragmentShader=z,this}let Gp=0;class Vp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(o)===!1&&(l.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Wp(e),t.set(e,n)),n}}class Wp{constructor(e){this.id=Gp++,this.code=e,this.usedTimes=0}}function Xp(i,e,t,n,r,o,l){const u=new Hl,h=new Vp,p=new Set,d=[],_=r.logarithmicDepthBuffer,v=r.vertexTextures;let x=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(C){return p.add(C),C===0?"uv":`uv${C}`}function M(C,b,k,ee,Q){const ue=ee.fog,ve=Q.geometry,X=C.isMeshStandardMaterial?ee.environment:null,Me=(C.isMeshStandardMaterial?t:e).get(C.envMap||X),he=Me&&Me.mapping===vs?Me.image.height:null,c=S[C.type];C.precision!==null&&(x=r.getMaxPrecision(C.precision),x!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",x,"instead."));const Ue=ve.morphAttributes.position||ve.morphAttributes.normal||ve.morphAttributes.color,We=Ue!==void 0?Ue.length:0;let rt=0;ve.morphAttributes.position!==void 0&&(rt=1),ve.morphAttributes.normal!==void 0&&(rt=2),ve.morphAttributes.color!==void 0&&(rt=3);let Ct,ge,be,Ke;if(c){const Pt=Hn[c];Ct=Pt.vertexShader,ge=Pt.fragmentShader}else Ct=C.vertexShader,ge=C.fragmentShader,h.update(C),be=h.getVertexShaderID(C),Ke=h.getFragmentShaderID(C);const Re=i.getRenderTarget(),ot=i.state.buffers.depth.getReversed(),ut=Q.isInstancedMesh===!0,dt=Q.isBatchedMesh===!0,Nt=!!C.map,ht=!!C.matcap,zt=!!Me,W=!!C.aoMap,Kt=!!C.lightMap,xt=!!C.bumpMap,yt=!!C.normalMap,tt=!!C.displacementMap,Dt=!!C.emissiveMap,Qe=!!C.metalnessMap,F=!!C.roughnessMap,T=C.anisotropy>0,te=C.clearcoat>0,le=C.dispersion>0,me=C.iridescence>0,ce=C.sheen>0,Ye=C.transmission>0,Le=T&&!!C.anisotropyMap,Xe=te&&!!C.clearcoatMap,mt=te&&!!C.clearcoatNormalMap,Ee=te&&!!C.clearcoatRoughnessMap,He=me&&!!C.iridescenceMap,st=me&&!!C.iridescenceThicknessMap,lt=ce&&!!C.sheenColorMap,qe=ce&&!!C.sheenRoughnessMap,Mt=!!C.specularMap,pt=!!C.specularColorMap,Ft=!!C.specularIntensityMap,Y=Ye&&!!C.transmissionMap,Ne=Ye&&!!C.thicknessMap,fe=!!C.gradientMap,xe=!!C.alphaMap,Fe=C.alphaTest>0,Oe=!!C.alphaHash,nt=!!C.extensions;let Ht=pi;C.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(Ht=i.toneMapping);const Yt={shaderID:c,shaderType:C.type,shaderName:C.name,vertexShader:Ct,fragmentShader:ge,defines:C.defines,customVertexShaderID:be,customFragmentShaderID:Ke,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:x,batching:dt,batchingColor:dt&&Q._colorsTexture!==null,instancing:ut,instancingColor:ut&&Q.instanceColor!==null,instancingMorph:ut&&Q.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Re===null?i.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:cr,alphaToCoverage:!!C.alphaToCoverage,map:Nt,matcap:ht,envMap:zt,envMapMode:zt&&Me.mapping,envMapCubeUVHeight:he,aoMap:W,lightMap:Kt,bumpMap:xt,normalMap:yt,displacementMap:v&&tt,emissiveMap:Dt,normalMapObjectSpace:yt&&C.normalMapType===kc,normalMapTangentSpace:yt&&C.normalMapType===Nl,metalnessMap:Qe,roughnessMap:F,anisotropy:T,anisotropyMap:Le,clearcoat:te,clearcoatMap:Xe,clearcoatNormalMap:mt,clearcoatRoughnessMap:Ee,dispersion:le,iridescence:me,iridescenceMap:He,iridescenceThicknessMap:st,sheen:ce,sheenColorMap:lt,sheenRoughnessMap:qe,specularMap:Mt,specularColorMap:pt,specularIntensityMap:Ft,transmission:Ye,transmissionMap:Y,thicknessMap:Ne,gradientMap:fe,opaque:C.transparent===!1&&C.blending===tr&&C.alphaToCoverage===!1,alphaMap:xe,alphaTest:Fe,alphaHash:Oe,combine:C.combine,mapUv:Nt&&w(C.map.channel),aoMapUv:W&&w(C.aoMap.channel),lightMapUv:Kt&&w(C.lightMap.channel),bumpMapUv:xt&&w(C.bumpMap.channel),normalMapUv:yt&&w(C.normalMap.channel),displacementMapUv:tt&&w(C.displacementMap.channel),emissiveMapUv:Dt&&w(C.emissiveMap.channel),metalnessMapUv:Qe&&w(C.metalnessMap.channel),roughnessMapUv:F&&w(C.roughnessMap.channel),anisotropyMapUv:Le&&w(C.anisotropyMap.channel),clearcoatMapUv:Xe&&w(C.clearcoatMap.channel),clearcoatNormalMapUv:mt&&w(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&w(C.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&w(C.iridescenceMap.channel),iridescenceThicknessMapUv:st&&w(C.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&w(C.sheenColorMap.channel),sheenRoughnessMapUv:qe&&w(C.sheenRoughnessMap.channel),specularMapUv:Mt&&w(C.specularMap.channel),specularColorMapUv:pt&&w(C.specularColorMap.channel),specularIntensityMapUv:Ft&&w(C.specularIntensityMap.channel),transmissionMapUv:Y&&w(C.transmissionMap.channel),thicknessMapUv:Ne&&w(C.thicknessMap.channel),alphaMapUv:xe&&w(C.alphaMap.channel),vertexTangents:!!ve.attributes.tangent&&(yt||T),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ve.attributes.color&&ve.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!ve.attributes.uv&&(Nt||xe),fog:!!ue,useFog:C.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:ot,skinning:Q.isSkinnedMesh===!0,morphTargets:ve.morphAttributes.position!==void 0,morphNormals:ve.morphAttributes.normal!==void 0,morphColors:ve.morphAttributes.color!==void 0,morphTargetsCount:We,morphTextureStride:rt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:C.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ht,decodeVideoTexture:Nt&&C.map.isVideoTexture===!0&&Lt.getTransfer(C.map.colorSpace)===Ot,decodeVideoTextureEmissive:Dt&&C.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(C.emissiveMap.colorSpace)===Ot,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Jn,flipSided:C.side===vn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:nt&&C.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&C.extensions.multiDraw===!0||dt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Yt.vertexUv1s=p.has(1),Yt.vertexUv2s=p.has(2),Yt.vertexUv3s=p.has(3),p.clear(),Yt}function g(C){const b=[];if(C.shaderID?b.push(C.shaderID):(b.push(C.customVertexShaderID),b.push(C.customFragmentShaderID)),C.defines!==void 0)for(const k in C.defines)b.push(k),b.push(C.defines[k]);return C.isRawShaderMaterial===!1&&(I(b,C),D(b,C),b.push(i.outputColorSpace)),b.push(C.customProgramCacheKey),b.join()}function I(C,b){C.push(b.precision),C.push(b.outputColorSpace),C.push(b.envMapMode),C.push(b.envMapCubeUVHeight),C.push(b.mapUv),C.push(b.alphaMapUv),C.push(b.lightMapUv),C.push(b.aoMapUv),C.push(b.bumpMapUv),C.push(b.normalMapUv),C.push(b.displacementMapUv),C.push(b.emissiveMapUv),C.push(b.metalnessMapUv),C.push(b.roughnessMapUv),C.push(b.anisotropyMapUv),C.push(b.clearcoatMapUv),C.push(b.clearcoatNormalMapUv),C.push(b.clearcoatRoughnessMapUv),C.push(b.iridescenceMapUv),C.push(b.iridescenceThicknessMapUv),C.push(b.sheenColorMapUv),C.push(b.sheenRoughnessMapUv),C.push(b.specularMapUv),C.push(b.specularColorMapUv),C.push(b.specularIntensityMapUv),C.push(b.transmissionMapUv),C.push(b.thicknessMapUv),C.push(b.combine),C.push(b.fogExp2),C.push(b.sizeAttenuation),C.push(b.morphTargetsCount),C.push(b.morphAttributeCount),C.push(b.numDirLights),C.push(b.numPointLights),C.push(b.numSpotLights),C.push(b.numSpotLightMaps),C.push(b.numHemiLights),C.push(b.numRectAreaLights),C.push(b.numDirLightShadows),C.push(b.numPointLightShadows),C.push(b.numSpotLightShadows),C.push(b.numSpotLightShadowsWithMaps),C.push(b.numLightProbes),C.push(b.shadowMapType),C.push(b.toneMapping),C.push(b.numClippingPlanes),C.push(b.numClipIntersection),C.push(b.depthPacking)}function D(C,b){u.disableAll(),b.supportsVertexTextures&&u.enable(0),b.instancing&&u.enable(1),b.instancingColor&&u.enable(2),b.instancingMorph&&u.enable(3),b.matcap&&u.enable(4),b.envMap&&u.enable(5),b.normalMapObjectSpace&&u.enable(6),b.normalMapTangentSpace&&u.enable(7),b.clearcoat&&u.enable(8),b.iridescence&&u.enable(9),b.alphaTest&&u.enable(10),b.vertexColors&&u.enable(11),b.vertexAlphas&&u.enable(12),b.vertexUv1s&&u.enable(13),b.vertexUv2s&&u.enable(14),b.vertexUv3s&&u.enable(15),b.vertexTangents&&u.enable(16),b.anisotropy&&u.enable(17),b.alphaHash&&u.enable(18),b.batching&&u.enable(19),b.dispersion&&u.enable(20),b.batchingColor&&u.enable(21),C.push(u.mask),u.disableAll(),b.fog&&u.enable(0),b.useFog&&u.enable(1),b.flatShading&&u.enable(2),b.logarithmicDepthBuffer&&u.enable(3),b.reverseDepthBuffer&&u.enable(4),b.skinning&&u.enable(5),b.morphTargets&&u.enable(6),b.morphNormals&&u.enable(7),b.morphColors&&u.enable(8),b.premultipliedAlpha&&u.enable(9),b.shadowMapEnabled&&u.enable(10),b.doubleSided&&u.enable(11),b.flipSided&&u.enable(12),b.useDepthPacking&&u.enable(13),b.dithering&&u.enable(14),b.transmission&&u.enable(15),b.sheen&&u.enable(16),b.opaque&&u.enable(17),b.pointsUvs&&u.enable(18),b.decodeVideoTexture&&u.enable(19),b.decodeVideoTextureEmissive&&u.enable(20),b.alphaToCoverage&&u.enable(21),C.push(u.mask)}function A(C){const b=S[C.type];let k;if(b){const ee=Hn[b];k=gu.clone(ee.uniforms)}else k=C.uniforms;return k}function B(C,b){let k;for(let ee=0,Q=d.length;ee<Q;ee++){const ue=d[ee];if(ue.cacheKey===b){k=ue,++k.usedTimes;break}}return k===void 0&&(k=new Hp(i,b,C,o),d.push(k)),k}function z(C){if(--C.usedTimes===0){const b=d.indexOf(C);d[b]=d[d.length-1],d.pop(),C.destroy()}}function U(C){h.remove(C)}function O(){h.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:A,acquireProgram:B,releaseProgram:z,releaseShaderCache:U,programs:d,dispose:O}}function qp(){let i=new WeakMap;function e(l){return i.has(l)}function t(l){let u=i.get(l);return u===void 0&&(u={},i.set(l,u)),u}function n(l){i.delete(l)}function r(l,u,h){i.get(l)[u]=h}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:o}}function jp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ml(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function gl(){const i=[];let e=0;const t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function l(_,v,x,S,w,M){let g=i[e];return g===void 0?(g={id:_.id,object:_,geometry:v,material:x,groupOrder:S,renderOrder:_.renderOrder,z:w,group:M},i[e]=g):(g.id=_.id,g.object=_,g.geometry=v,g.material=x,g.groupOrder=S,g.renderOrder=_.renderOrder,g.z=w,g.group=M),e++,g}function u(_,v,x,S,w,M){const g=l(_,v,x,S,w,M);x.transmission>0?n.push(g):x.transparent===!0?r.push(g):t.push(g)}function h(_,v,x,S,w,M){const g=l(_,v,x,S,w,M);x.transmission>0?n.unshift(g):x.transparent===!0?r.unshift(g):t.unshift(g)}function p(_,v){t.length>1&&t.sort(_||jp),n.length>1&&n.sort(v||ml),r.length>1&&r.sort(v||ml)}function d(){for(let _=e,v=i.length;_<v;_++){const x=i[_];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:u,unshift:h,finish:d,sort:p}}function Yp(){let i=new WeakMap;function e(n,r){const o=i.get(n);let l;return o===void 0?(l=new gl,i.set(n,[l])):r>=o.length?(l=new gl,o.push(l)):l=o[r],l}function t(){i=new WeakMap}return{get:e,dispose:t}}function $p(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new bt};break;case"SpotLight":t={position:new Z,direction:new Z,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":t={color:new bt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return i[e.id]=t,t}}}function Kp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Zp=0;function Jp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Qp(i){const e=new $p,t=Kp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)n.probe.push(new Z);const r=new Z,o=new kt,l=new kt;function u(p){let d=0,_=0,v=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let x=0,S=0,w=0,M=0,g=0,I=0,D=0,A=0,B=0,z=0,U=0;p.sort(Jp);for(let C=0,b=p.length;C<b;C++){const k=p[C],ee=k.color,Q=k.intensity,ue=k.distance,ve=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)d+=ee.r*Q,_+=ee.g*Q,v+=ee.b*Q;else if(k.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(k.sh.coefficients[X],Q);U++}else if(k.isDirectionalLight){const X=e.get(k);if(X.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const Me=k.shadow,he=t.get(k);he.shadowIntensity=Me.intensity,he.shadowBias=Me.bias,he.shadowNormalBias=Me.normalBias,he.shadowRadius=Me.radius,he.shadowMapSize=Me.mapSize,n.directionalShadow[x]=he,n.directionalShadowMap[x]=ve,n.directionalShadowMatrix[x]=k.shadow.matrix,I++}n.directional[x]=X,x++}else if(k.isSpotLight){const X=e.get(k);X.position.setFromMatrixPosition(k.matrixWorld),X.color.copy(ee).multiplyScalar(Q),X.distance=ue,X.coneCos=Math.cos(k.angle),X.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),X.decay=k.decay,n.spot[w]=X;const Me=k.shadow;if(k.map&&(n.spotLightMap[B]=k.map,B++,Me.updateMatrices(k),k.castShadow&&z++),n.spotLightMatrix[w]=Me.matrix,k.castShadow){const he=t.get(k);he.shadowIntensity=Me.intensity,he.shadowBias=Me.bias,he.shadowNormalBias=Me.normalBias,he.shadowRadius=Me.radius,he.shadowMapSize=Me.mapSize,n.spotShadow[w]=he,n.spotShadowMap[w]=ve,A++}w++}else if(k.isRectAreaLight){const X=e.get(k);X.color.copy(ee).multiplyScalar(Q),X.halfWidth.set(k.width*.5,0,0),X.halfHeight.set(0,k.height*.5,0),n.rectArea[M]=X,M++}else if(k.isPointLight){const X=e.get(k);if(X.color.copy(k.color).multiplyScalar(k.intensity),X.distance=k.distance,X.decay=k.decay,k.castShadow){const Me=k.shadow,he=t.get(k);he.shadowIntensity=Me.intensity,he.shadowBias=Me.bias,he.shadowNormalBias=Me.normalBias,he.shadowRadius=Me.radius,he.shadowMapSize=Me.mapSize,he.shadowCameraNear=Me.camera.near,he.shadowCameraFar=Me.camera.far,n.pointShadow[S]=he,n.pointShadowMap[S]=ve,n.pointShadowMatrix[S]=k.shadow.matrix,D++}n.point[S]=X,S++}else if(k.isHemisphereLight){const X=e.get(k);X.skyColor.copy(k.color).multiplyScalar(Q),X.groundColor.copy(k.groundColor).multiplyScalar(Q),n.hemi[g]=X,g++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ie.LTC_FLOAT_1,n.rectAreaLTC2=Ie.LTC_FLOAT_2):(n.rectAreaLTC1=Ie.LTC_HALF_1,n.rectAreaLTC2=Ie.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=_,n.ambient[2]=v;const O=n.hash;(O.directionalLength!==x||O.pointLength!==S||O.spotLength!==w||O.rectAreaLength!==M||O.hemiLength!==g||O.numDirectionalShadows!==I||O.numPointShadows!==D||O.numSpotShadows!==A||O.numSpotMaps!==B||O.numLightProbes!==U)&&(n.directional.length=x,n.spot.length=w,n.rectArea.length=M,n.point.length=S,n.hemi.length=g,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.pointShadow.length=D,n.pointShadowMap.length=D,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=I,n.pointShadowMatrix.length=D,n.spotLightMatrix.length=A+B-z,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=z,n.numLightProbes=U,O.directionalLength=x,O.pointLength=S,O.spotLength=w,O.rectAreaLength=M,O.hemiLength=g,O.numDirectionalShadows=I,O.numPointShadows=D,O.numSpotShadows=A,O.numSpotMaps=B,O.numLightProbes=U,n.version=Zp++)}function h(p,d){let _=0,v=0,x=0,S=0,w=0;const M=d.matrixWorldInverse;for(let g=0,I=p.length;g<I;g++){const D=p[g];if(D.isDirectionalLight){const A=n.directional[_];A.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(M),_++}else if(D.isSpotLight){const A=n.spot[x];A.position.setFromMatrixPosition(D.matrixWorld),A.position.applyMatrix4(M),A.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(M),x++}else if(D.isRectAreaLight){const A=n.rectArea[S];A.position.setFromMatrixPosition(D.matrixWorld),A.position.applyMatrix4(M),l.identity(),o.copy(D.matrixWorld),o.premultiply(M),l.extractRotation(o),A.halfWidth.set(D.width*.5,0,0),A.halfHeight.set(0,D.height*.5,0),A.halfWidth.applyMatrix4(l),A.halfHeight.applyMatrix4(l),S++}else if(D.isPointLight){const A=n.point[v];A.position.setFromMatrixPosition(D.matrixWorld),A.position.applyMatrix4(M),v++}else if(D.isHemisphereLight){const A=n.hemi[w];A.direction.setFromMatrixPosition(D.matrixWorld),A.direction.transformDirection(M),w++}}}return{setup:u,setupView:h,state:n}}function _l(i){const e=new Qp(i),t=[],n=[];function r(d){p.camera=d,t.length=0,n.length=0}function o(d){t.push(d)}function l(d){n.push(d)}function u(){e.setup(t)}function h(d){e.setupView(t,d)}const p={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:p,setupLights:u,setupLightsView:h,pushLight:o,pushShadow:l}}function em(i){let e=new WeakMap;function t(r,o=0){const l=e.get(r);let u;return l===void 0?(u=new _l(i),e.set(r,[u])):o>=l.length?(u=new _l(i),l.push(u)):u=l[o],u}function n(){e=new WeakMap}return{get:t,dispose:n}}const tm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function im(i,e,t){let n=new ca;const r=new wt,o=new wt,l=new Bt,u=new Eu({depthPacking:zc}),h=new Tu,p={},d=t.maxTextureSize,_={[gi]:vn,[vn]:gi,[Jn]:Jn},v=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:tm,fragmentShader:nm}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const S=new gn;S.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Jt(S,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=El;let g=this.type;this.render=function(z,U,O){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;const C=i.getRenderTarget(),b=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),ee=i.state;ee.setBlending(di),ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const Q=g!==Zn&&this.type===Zn,ue=g===Zn&&this.type!==Zn;for(let ve=0,X=z.length;ve<X;ve++){const Me=z[ve],he=Me.shadow;if(he===void 0){console.warn("THREE.WebGLShadowMap:",Me,"has no shadow.");continue}if(he.autoUpdate===!1&&he.needsUpdate===!1)continue;r.copy(he.mapSize);const c=he.getFrameExtents();if(r.multiply(c),o.copy(he.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(o.x=Math.floor(d/c.x),r.x=o.x*c.x,he.mapSize.x=o.x),r.y>d&&(o.y=Math.floor(d/c.y),r.y=o.y*c.y,he.mapSize.y=o.y)),he.map===null||Q===!0||ue===!0){const We=this.type!==Zn?{minFilter:Nn,magFilter:Nn}:{};he.map!==null&&he.map.dispose(),he.map=new Ni(r.x,r.y,We),he.map.texture.name=Me.name+".shadowMap",he.camera.updateProjectionMatrix()}i.setRenderTarget(he.map),i.clear();const Ue=he.getViewportCount();for(let We=0;We<Ue;We++){const rt=he.getViewport(We);l.set(o.x*rt.x,o.y*rt.y,o.x*rt.z,o.y*rt.w),ee.viewport(l),he.updateMatrices(Me,We),n=he.getFrustum(),A(U,O,he.camera,Me,this.type)}he.isPointLightShadow!==!0&&this.type===Zn&&I(he,O),he.needsUpdate=!1}g=this.type,M.needsUpdate=!1,i.setRenderTarget(C,b,k)};function I(z,U){const O=e.update(w);v.defines.VSM_SAMPLES!==z.blurSamples&&(v.defines.VSM_SAMPLES=z.blurSamples,x.defines.VSM_SAMPLES=z.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Ni(r.x,r.y)),v.uniforms.shadow_pass.value=z.map.texture,v.uniforms.resolution.value=z.mapSize,v.uniforms.radius.value=z.radius,i.setRenderTarget(z.mapPass),i.clear(),i.renderBufferDirect(U,null,O,v,w,null),x.uniforms.shadow_pass.value=z.mapPass.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,i.setRenderTarget(z.map),i.clear(),i.renderBufferDirect(U,null,O,x,w,null)}function D(z,U,O,C){let b=null;const k=O.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(k!==void 0)b=k;else if(b=O.isPointLight===!0?h:u,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const ee=b.uuid,Q=U.uuid;let ue=p[ee];ue===void 0&&(ue={},p[ee]=ue);let ve=ue[Q];ve===void 0&&(ve=b.clone(),ue[Q]=ve,U.addEventListener("dispose",B)),b=ve}if(b.visible=U.visible,b.wireframe=U.wireframe,C===Zn?b.side=U.shadowSide!==null?U.shadowSide:U.side:b.side=U.shadowSide!==null?U.shadowSide:_[U.side],b.alphaMap=U.alphaMap,b.alphaTest=U.alphaTest,b.map=U.map,b.clipShadows=U.clipShadows,b.clippingPlanes=U.clippingPlanes,b.clipIntersection=U.clipIntersection,b.displacementMap=U.displacementMap,b.displacementScale=U.displacementScale,b.displacementBias=U.displacementBias,b.wireframeLinewidth=U.wireframeLinewidth,b.linewidth=U.linewidth,O.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const ee=i.properties.get(b);ee.light=O}return b}function A(z,U,O,C,b){if(z.visible===!1)return;if(z.layers.test(U.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&b===Zn)&&(!z.frustumCulled||n.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,z.matrixWorld);const Q=e.update(z),ue=z.material;if(Array.isArray(ue)){const ve=Q.groups;for(let X=0,Me=ve.length;X<Me;X++){const he=ve[X],c=ue[he.materialIndex];if(c&&c.visible){const Ue=D(z,c,C,b);z.onBeforeShadow(i,z,U,O,Q,Ue,he),i.renderBufferDirect(O,null,Q,Ue,z,he),z.onAfterShadow(i,z,U,O,Q,Ue,he)}}}else if(ue.visible){const ve=D(z,ue,C,b);z.onBeforeShadow(i,z,U,O,Q,ve,null),i.renderBufferDirect(O,null,Q,ve,z,null),z.onAfterShadow(i,z,U,O,Q,ve,null)}}const ee=z.children;for(let Q=0,ue=ee.length;Q<ue;Q++)A(ee[Q],U,O,C,b)}function B(z){z.target.removeEventListener("dispose",B);for(const O in p){const C=p[O],b=z.target.uuid;b in C&&(C[b].dispose(),delete C[b])}}}const rm={[go]:_o,[vo]:Mo,[xo]:So,[rr]:yo,[_o]:go,[Mo]:vo,[So]:xo,[yo]:rr};function sm(i,e){function t(){let Y=!1;const Ne=new Bt;let fe=null;const xe=new Bt(0,0,0,0);return{setMask:function(Fe){fe!==Fe&&!Y&&(i.colorMask(Fe,Fe,Fe,Fe),fe=Fe)},setLocked:function(Fe){Y=Fe},setClear:function(Fe,Oe,nt,Ht,Yt){Yt===!0&&(Fe*=Ht,Oe*=Ht,nt*=Ht),Ne.set(Fe,Oe,nt,Ht),xe.equals(Ne)===!1&&(i.clearColor(Fe,Oe,nt,Ht),xe.copy(Ne))},reset:function(){Y=!1,fe=null,xe.set(-1,0,0,0)}}}function n(){let Y=!1,Ne=!1,fe=null,xe=null,Fe=null;return{setReversed:function(Oe){if(Ne!==Oe){const nt=e.get("EXT_clip_control");Ne?nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.ZERO_TO_ONE_EXT):nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.NEGATIVE_ONE_TO_ONE_EXT);const Ht=Fe;Fe=null,this.setClear(Ht)}Ne=Oe},getReversed:function(){return Ne},setTest:function(Oe){Oe?Re(i.DEPTH_TEST):ot(i.DEPTH_TEST)},setMask:function(Oe){fe!==Oe&&!Y&&(i.depthMask(Oe),fe=Oe)},setFunc:function(Oe){if(Ne&&(Oe=rm[Oe]),xe!==Oe){switch(Oe){case go:i.depthFunc(i.NEVER);break;case _o:i.depthFunc(i.ALWAYS);break;case vo:i.depthFunc(i.LESS);break;case rr:i.depthFunc(i.LEQUAL);break;case xo:i.depthFunc(i.EQUAL);break;case yo:i.depthFunc(i.GEQUAL);break;case Mo:i.depthFunc(i.GREATER);break;case So:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=Oe}},setLocked:function(Oe){Y=Oe},setClear:function(Oe){Fe!==Oe&&(Ne&&(Oe=1-Oe),i.clearDepth(Oe),Fe=Oe)},reset:function(){Y=!1,fe=null,xe=null,Fe=null,Ne=!1}}}function r(){let Y=!1,Ne=null,fe=null,xe=null,Fe=null,Oe=null,nt=null,Ht=null,Yt=null;return{setTest:function(Pt){Y||(Pt?Re(i.STENCIL_TEST):ot(i.STENCIL_TEST))},setMask:function(Pt){Ne!==Pt&&!Y&&(i.stencilMask(Pt),Ne=Pt)},setFunc:function(Pt,xn,Rn){(fe!==Pt||xe!==xn||Fe!==Rn)&&(i.stencilFunc(Pt,xn,Rn),fe=Pt,xe=xn,Fe=Rn)},setOp:function(Pt,xn,Rn){(Oe!==Pt||nt!==xn||Ht!==Rn)&&(i.stencilOp(Pt,xn,Rn),Oe=Pt,nt=xn,Ht=Rn)},setLocked:function(Pt){Y=Pt},setClear:function(Pt){Yt!==Pt&&(i.clearStencil(Pt),Yt=Pt)},reset:function(){Y=!1,Ne=null,fe=null,xe=null,Fe=null,Oe=null,nt=null,Ht=null,Yt=null}}}const o=new t,l=new n,u=new r,h=new WeakMap,p=new WeakMap;let d={},_={},v=new WeakMap,x=[],S=null,w=!1,M=null,g=null,I=null,D=null,A=null,B=null,z=null,U=new bt(0,0,0),O=0,C=!1,b=null,k=null,ee=null,Q=null,ue=null;const ve=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Me=0;const he=i.getParameter(i.VERSION);he.indexOf("WebGL")!==-1?(Me=parseFloat(/^WebGL (\d)/.exec(he)[1]),X=Me>=1):he.indexOf("OpenGL ES")!==-1&&(Me=parseFloat(/^OpenGL ES (\d)/.exec(he)[1]),X=Me>=2);let c=null,Ue={};const We=i.getParameter(i.SCISSOR_BOX),rt=i.getParameter(i.VIEWPORT),Ct=new Bt().fromArray(We),ge=new Bt().fromArray(rt);function be(Y,Ne,fe,xe){const Fe=new Uint8Array(4),Oe=i.createTexture();i.bindTexture(Y,Oe),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let nt=0;nt<fe;nt++)Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?i.texImage3D(Ne,0,i.RGBA,1,1,xe,0,i.RGBA,i.UNSIGNED_BYTE,Fe):i.texImage2D(Ne+nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Fe);return Oe}const Ke={};Ke[i.TEXTURE_2D]=be(i.TEXTURE_2D,i.TEXTURE_2D,1),Ke[i.TEXTURE_CUBE_MAP]=be(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ke[i.TEXTURE_2D_ARRAY]=be(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ke[i.TEXTURE_3D]=be(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Re(i.DEPTH_TEST),l.setFunc(rr),xt(!1),yt(_a),Re(i.CULL_FACE),W(di);function Re(Y){d[Y]!==!0&&(i.enable(Y),d[Y]=!0)}function ot(Y){d[Y]!==!1&&(i.disable(Y),d[Y]=!1)}function ut(Y,Ne){return _[Y]!==Ne?(i.bindFramebuffer(Y,Ne),_[Y]=Ne,Y===i.DRAW_FRAMEBUFFER&&(_[i.FRAMEBUFFER]=Ne),Y===i.FRAMEBUFFER&&(_[i.DRAW_FRAMEBUFFER]=Ne),!0):!1}function dt(Y,Ne){let fe=x,xe=!1;if(Y){fe=v.get(Ne),fe===void 0&&(fe=[],v.set(Ne,fe));const Fe=Y.textures;if(fe.length!==Fe.length||fe[0]!==i.COLOR_ATTACHMENT0){for(let Oe=0,nt=Fe.length;Oe<nt;Oe++)fe[Oe]=i.COLOR_ATTACHMENT0+Oe;fe.length=Fe.length,xe=!0}}else fe[0]!==i.BACK&&(fe[0]=i.BACK,xe=!0);xe&&i.drawBuffers(fe)}function Nt(Y){return S!==Y?(i.useProgram(Y),S=Y,!0):!1}const ht={[Ri]:i.FUNC_ADD,[hc]:i.FUNC_SUBTRACT,[fc]:i.FUNC_REVERSE_SUBTRACT};ht[dc]=i.MIN,ht[pc]=i.MAX;const zt={[mc]:i.ZERO,[gc]:i.ONE,[_c]:i.SRC_COLOR,[po]:i.SRC_ALPHA,[Ec]:i.SRC_ALPHA_SATURATE,[Mc]:i.DST_COLOR,[xc]:i.DST_ALPHA,[vc]:i.ONE_MINUS_SRC_COLOR,[mo]:i.ONE_MINUS_SRC_ALPHA,[Sc]:i.ONE_MINUS_DST_COLOR,[yc]:i.ONE_MINUS_DST_ALPHA,[Tc]:i.CONSTANT_COLOR,[bc]:i.ONE_MINUS_CONSTANT_COLOR,[wc]:i.CONSTANT_ALPHA,[Ac]:i.ONE_MINUS_CONSTANT_ALPHA};function W(Y,Ne,fe,xe,Fe,Oe,nt,Ht,Yt,Pt){if(Y===di){w===!0&&(ot(i.BLEND),w=!1);return}if(w===!1&&(Re(i.BLEND),w=!0),Y!==uc){if(Y!==M||Pt!==C){if((g!==Ri||A!==Ri)&&(i.blendEquation(i.FUNC_ADD),g=Ri,A=Ri),Pt)switch(Y){case tr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case va:i.blendFunc(i.ONE,i.ONE);break;case xa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ya:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case tr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case va:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case xa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ya:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}I=null,D=null,B=null,z=null,U.set(0,0,0),O=0,M=Y,C=Pt}return}Fe=Fe||Ne,Oe=Oe||fe,nt=nt||xe,(Ne!==g||Fe!==A)&&(i.blendEquationSeparate(ht[Ne],ht[Fe]),g=Ne,A=Fe),(fe!==I||xe!==D||Oe!==B||nt!==z)&&(i.blendFuncSeparate(zt[fe],zt[xe],zt[Oe],zt[nt]),I=fe,D=xe,B=Oe,z=nt),(Ht.equals(U)===!1||Yt!==O)&&(i.blendColor(Ht.r,Ht.g,Ht.b,Yt),U.copy(Ht),O=Yt),M=Y,C=!1}function Kt(Y,Ne){Y.side===Jn?ot(i.CULL_FACE):Re(i.CULL_FACE);let fe=Y.side===vn;Ne&&(fe=!fe),xt(fe),Y.blending===tr&&Y.transparent===!1?W(di):W(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),l.setFunc(Y.depthFunc),l.setTest(Y.depthTest),l.setMask(Y.depthWrite),o.setMask(Y.colorWrite);const xe=Y.stencilWrite;u.setTest(xe),xe&&(u.setMask(Y.stencilWriteMask),u.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),u.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Dt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?Re(i.SAMPLE_ALPHA_TO_COVERAGE):ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function xt(Y){b!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),b=Y)}function yt(Y){Y!==ac?(Re(i.CULL_FACE),Y!==k&&(Y===_a?i.cullFace(i.BACK):Y===lc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ot(i.CULL_FACE),k=Y}function tt(Y){Y!==ee&&(X&&i.lineWidth(Y),ee=Y)}function Dt(Y,Ne,fe){Y?(Re(i.POLYGON_OFFSET_FILL),(Q!==Ne||ue!==fe)&&(i.polygonOffset(Ne,fe),Q=Ne,ue=fe)):ot(i.POLYGON_OFFSET_FILL)}function Qe(Y){Y?Re(i.SCISSOR_TEST):ot(i.SCISSOR_TEST)}function F(Y){Y===void 0&&(Y=i.TEXTURE0+ve-1),c!==Y&&(i.activeTexture(Y),c=Y)}function T(Y,Ne,fe){fe===void 0&&(c===null?fe=i.TEXTURE0+ve-1:fe=c);let xe=Ue[fe];xe===void 0&&(xe={type:void 0,texture:void 0},Ue[fe]=xe),(xe.type!==Y||xe.texture!==Ne)&&(c!==fe&&(i.activeTexture(fe),c=fe),i.bindTexture(Y,Ne||Ke[Y]),xe.type=Y,xe.texture=Ne)}function te(){const Y=Ue[c];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function le(){try{i.compressedTexImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function me(){try{i.compressedTexImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ce(){try{i.texSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ye(){try{i.texSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Le(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Xe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function mt(){try{i.texStorage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ee(){try{i.texStorage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function He(){try{i.texImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function st(){try{i.texImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function lt(Y){Ct.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),Ct.copy(Y))}function qe(Y){ge.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),ge.copy(Y))}function Mt(Y,Ne){let fe=p.get(Ne);fe===void 0&&(fe=new WeakMap,p.set(Ne,fe));let xe=fe.get(Y);xe===void 0&&(xe=i.getUniformBlockIndex(Ne,Y.name),fe.set(Y,xe))}function pt(Y,Ne){const xe=p.get(Ne).get(Y);h.get(Ne)!==xe&&(i.uniformBlockBinding(Ne,xe,Y.__bindingPointIndex),h.set(Ne,xe))}function Ft(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),l.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},c=null,Ue={},_={},v=new WeakMap,x=[],S=null,w=!1,M=null,g=null,I=null,D=null,A=null,B=null,z=null,U=new bt(0,0,0),O=0,C=!1,b=null,k=null,ee=null,Q=null,ue=null,Ct.set(0,0,i.canvas.width,i.canvas.height),ge.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:Re,disable:ot,bindFramebuffer:ut,drawBuffers:dt,useProgram:Nt,setBlending:W,setMaterial:Kt,setFlipSided:xt,setCullFace:yt,setLineWidth:tt,setPolygonOffset:Dt,setScissorTest:Qe,activeTexture:F,bindTexture:T,unbindTexture:te,compressedTexImage2D:le,compressedTexImage3D:me,texImage2D:He,texImage3D:st,updateUBOMapping:Mt,uniformBlockBinding:pt,texStorage2D:mt,texStorage3D:Ee,texSubImage2D:ce,texSubImage3D:Ye,compressedTexSubImage2D:Le,compressedTexSubImage3D:Xe,scissor:lt,viewport:qe,reset:Ft}}function om(i,e,t,n,r,o,l){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new wt,d=new WeakMap;let _;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(F,T){return x?new OffscreenCanvas(F,T):Rr("canvas")}function w(F,T,te){let le=1;const me=Qe(F);if((me.width>te||me.height>te)&&(le=te/Math.max(me.width,me.height)),le<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const ce=Math.floor(le*me.width),Ye=Math.floor(le*me.height);_===void 0&&(_=S(ce,Ye));const Le=T?S(ce,Ye):_;return Le.width=ce,Le.height=Ye,Le.getContext("2d").drawImage(F,0,0,ce,Ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+ce+"x"+Ye+")."),Le}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),F;return F}function M(F){return F.generateMipmaps}function g(F){i.generateMipmap(F)}function I(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function D(F,T,te,le,me=!1){if(F!==null){if(i[F]!==void 0)return i[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let ce=T;if(T===i.RED&&(te===i.FLOAT&&(ce=i.R32F),te===i.HALF_FLOAT&&(ce=i.R16F),te===i.UNSIGNED_BYTE&&(ce=i.R8)),T===i.RED_INTEGER&&(te===i.UNSIGNED_BYTE&&(ce=i.R8UI),te===i.UNSIGNED_SHORT&&(ce=i.R16UI),te===i.UNSIGNED_INT&&(ce=i.R32UI),te===i.BYTE&&(ce=i.R8I),te===i.SHORT&&(ce=i.R16I),te===i.INT&&(ce=i.R32I)),T===i.RG&&(te===i.FLOAT&&(ce=i.RG32F),te===i.HALF_FLOAT&&(ce=i.RG16F),te===i.UNSIGNED_BYTE&&(ce=i.RG8)),T===i.RG_INTEGER&&(te===i.UNSIGNED_BYTE&&(ce=i.RG8UI),te===i.UNSIGNED_SHORT&&(ce=i.RG16UI),te===i.UNSIGNED_INT&&(ce=i.RG32UI),te===i.BYTE&&(ce=i.RG8I),te===i.SHORT&&(ce=i.RG16I),te===i.INT&&(ce=i.RG32I)),T===i.RGB_INTEGER&&(te===i.UNSIGNED_BYTE&&(ce=i.RGB8UI),te===i.UNSIGNED_SHORT&&(ce=i.RGB16UI),te===i.UNSIGNED_INT&&(ce=i.RGB32UI),te===i.BYTE&&(ce=i.RGB8I),te===i.SHORT&&(ce=i.RGB16I),te===i.INT&&(ce=i.RGB32I)),T===i.RGBA_INTEGER&&(te===i.UNSIGNED_BYTE&&(ce=i.RGBA8UI),te===i.UNSIGNED_SHORT&&(ce=i.RGBA16UI),te===i.UNSIGNED_INT&&(ce=i.RGBA32UI),te===i.BYTE&&(ce=i.RGBA8I),te===i.SHORT&&(ce=i.RGBA16I),te===i.INT&&(ce=i.RGBA32I)),T===i.RGB&&te===i.UNSIGNED_INT_5_9_9_9_REV&&(ce=i.RGB9_E5),T===i.RGBA){const Ye=me?gs:Lt.getTransfer(le);te===i.FLOAT&&(ce=i.RGBA32F),te===i.HALF_FLOAT&&(ce=i.RGBA16F),te===i.UNSIGNED_BYTE&&(ce=Ye===Ot?i.SRGB8_ALPHA8:i.RGBA8),te===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),te===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function A(F,T){let te;return F?T===null||T===Ui||T===ar?te=i.DEPTH24_STENCIL8:T===Qn?te=i.DEPTH32F_STENCIL8:T===Cr&&(te=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ui||T===ar?te=i.DEPTH_COMPONENT24:T===Qn?te=i.DEPTH_COMPONENT32F:T===Cr&&(te=i.DEPTH_COMPONENT16),te}function B(F,T){return M(F)===!0||F.isFramebufferTexture&&F.minFilter!==Nn&&F.minFilter!==Gn?Math.log2(Math.max(T.width,T.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?T.mipmaps.length:1}function z(F){const T=F.target;T.removeEventListener("dispose",z),O(T),T.isVideoTexture&&d.delete(T)}function U(F){const T=F.target;T.removeEventListener("dispose",U),b(T)}function O(F){const T=n.get(F);if(T.__webglInit===void 0)return;const te=F.source,le=v.get(te);if(le){const me=le[T.__cacheKey];me.usedTimes--,me.usedTimes===0&&C(F),Object.keys(le).length===0&&v.delete(te)}n.remove(F)}function C(F){const T=n.get(F);i.deleteTexture(T.__webglTexture);const te=F.source,le=v.get(te);delete le[T.__cacheKey],l.memory.textures--}function b(F){const T=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(T.__webglFramebuffer[le]))for(let me=0;me<T.__webglFramebuffer[le].length;me++)i.deleteFramebuffer(T.__webglFramebuffer[le][me]);else i.deleteFramebuffer(T.__webglFramebuffer[le]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[le])}else{if(Array.isArray(T.__webglFramebuffer))for(let le=0;le<T.__webglFramebuffer.length;le++)i.deleteFramebuffer(T.__webglFramebuffer[le]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let le=0;le<T.__webglColorRenderbuffer.length;le++)T.__webglColorRenderbuffer[le]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[le]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const te=F.textures;for(let le=0,me=te.length;le<me;le++){const ce=n.get(te[le]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),l.memory.textures--),n.remove(te[le])}n.remove(F)}let k=0;function ee(){k=0}function Q(){const F=k;return F>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+r.maxTextures),k+=1,F}function ue(F){const T=[];return T.push(F.wrapS),T.push(F.wrapT),T.push(F.wrapR||0),T.push(F.magFilter),T.push(F.minFilter),T.push(F.anisotropy),T.push(F.internalFormat),T.push(F.format),T.push(F.type),T.push(F.generateMipmaps),T.push(F.premultiplyAlpha),T.push(F.flipY),T.push(F.unpackAlignment),T.push(F.colorSpace),T.join()}function ve(F,T){const te=n.get(F);if(F.isVideoTexture&&tt(F),F.isRenderTargetTexture===!1&&F.version>0&&te.__version!==F.version){const le=F.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(te,F,T);return}}t.bindTexture(i.TEXTURE_2D,te.__webglTexture,i.TEXTURE0+T)}function X(F,T){const te=n.get(F);if(F.version>0&&te.__version!==F.version){ge(te,F,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,te.__webglTexture,i.TEXTURE0+T)}function Me(F,T){const te=n.get(F);if(F.version>0&&te.__version!==F.version){ge(te,F,T);return}t.bindTexture(i.TEXTURE_3D,te.__webglTexture,i.TEXTURE0+T)}function he(F,T){const te=n.get(F);if(F.version>0&&te.__version!==F.version){be(te,F,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture,i.TEXTURE0+T)}const c={[ms]:i.REPEAT,[Di]:i.CLAMP_TO_EDGE,[bo]:i.MIRRORED_REPEAT},Ue={[Nn]:i.NEAREST,[Oc]:i.NEAREST_MIPMAP_NEAREST,[Br]:i.NEAREST_MIPMAP_LINEAR,[Gn]:i.LINEAR,[Ls]:i.LINEAR_MIPMAP_NEAREST,[Ii]:i.LINEAR_MIPMAP_LINEAR},We={[Hc]:i.NEVER,[jc]:i.ALWAYS,[Gc]:i.LESS,[Fl]:i.LEQUAL,[Vc]:i.EQUAL,[qc]:i.GEQUAL,[Wc]:i.GREATER,[Xc]:i.NOTEQUAL};function rt(F,T){if(T.type===Qn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Gn||T.magFilter===Ls||T.magFilter===Br||T.magFilter===Ii||T.minFilter===Gn||T.minFilter===Ls||T.minFilter===Br||T.minFilter===Ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,c[T.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,c[T.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,c[T.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,Ue[T.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,Ue[T.minFilter]),T.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,We[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Nn||T.minFilter!==Br&&T.minFilter!==Ii||T.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");i.texParameterf(F,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Ct(F,T){let te=!1;F.__webglInit===void 0&&(F.__webglInit=!0,T.addEventListener("dispose",z));const le=T.source;let me=v.get(le);me===void 0&&(me={},v.set(le,me));const ce=ue(T);if(ce!==F.__cacheKey){me[ce]===void 0&&(me[ce]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,te=!0),me[ce].usedTimes++;const Ye=me[F.__cacheKey];Ye!==void 0&&(me[F.__cacheKey].usedTimes--,Ye.usedTimes===0&&C(T)),F.__cacheKey=ce,F.__webglTexture=me[ce].texture}return te}function ge(F,T,te){let le=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(le=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(le=i.TEXTURE_3D);const me=Ct(F,T),ce=T.source;t.bindTexture(le,F.__webglTexture,i.TEXTURE0+te);const Ye=n.get(ce);if(ce.version!==Ye.__version||me===!0){t.activeTexture(i.TEXTURE0+te);const Le=Lt.getPrimaries(Lt.workingColorSpace),Xe=T.colorSpace===fi?null:Lt.getPrimaries(T.colorSpace),mt=T.colorSpace===fi||Le===Xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let Ee=w(T.image,!1,r.maxTextureSize);Ee=Dt(T,Ee);const He=o.convert(T.format,T.colorSpace),st=o.convert(T.type);let lt=D(T.internalFormat,He,st,T.colorSpace,T.isVideoTexture);rt(le,T);let qe;const Mt=T.mipmaps,pt=T.isVideoTexture!==!0,Ft=Ye.__version===void 0||me===!0,Y=ce.dataReady,Ne=B(T,Ee);if(T.isDepthTexture)lt=A(T.format===lr,T.type),Ft&&(pt?t.texStorage2D(i.TEXTURE_2D,1,lt,Ee.width,Ee.height):t.texImage2D(i.TEXTURE_2D,0,lt,Ee.width,Ee.height,0,He,st,null));else if(T.isDataTexture)if(Mt.length>0){pt&&Ft&&t.texStorage2D(i.TEXTURE_2D,Ne,lt,Mt[0].width,Mt[0].height);for(let fe=0,xe=Mt.length;fe<xe;fe++)qe=Mt[fe],pt?Y&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,qe.width,qe.height,He,st,qe.data):t.texImage2D(i.TEXTURE_2D,fe,lt,qe.width,qe.height,0,He,st,qe.data);T.generateMipmaps=!1}else pt?(Ft&&t.texStorage2D(i.TEXTURE_2D,Ne,lt,Ee.width,Ee.height),Y&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee.width,Ee.height,He,st,Ee.data)):t.texImage2D(i.TEXTURE_2D,0,lt,Ee.width,Ee.height,0,He,st,Ee.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){pt&&Ft&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,lt,Mt[0].width,Mt[0].height,Ee.depth);for(let fe=0,xe=Mt.length;fe<xe;fe++)if(qe=Mt[fe],T.format!==Un)if(He!==null)if(pt){if(Y)if(T.layerUpdates.size>0){const Fe=ja(qe.width,qe.height,T.format,T.type);for(const Oe of T.layerUpdates){const nt=qe.data.subarray(Oe*Fe/qe.data.BYTES_PER_ELEMENT,(Oe+1)*Fe/qe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,Oe,qe.width,qe.height,1,He,nt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,qe.width,qe.height,Ee.depth,He,qe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,fe,lt,qe.width,qe.height,Ee.depth,0,qe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pt?Y&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,qe.width,qe.height,Ee.depth,He,st,qe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,fe,lt,qe.width,qe.height,Ee.depth,0,He,st,qe.data)}else{pt&&Ft&&t.texStorage2D(i.TEXTURE_2D,Ne,lt,Mt[0].width,Mt[0].height);for(let fe=0,xe=Mt.length;fe<xe;fe++)qe=Mt[fe],T.format!==Un?He!==null?pt?Y&&t.compressedTexSubImage2D(i.TEXTURE_2D,fe,0,0,qe.width,qe.height,He,qe.data):t.compressedTexImage2D(i.TEXTURE_2D,fe,lt,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?Y&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,qe.width,qe.height,He,st,qe.data):t.texImage2D(i.TEXTURE_2D,fe,lt,qe.width,qe.height,0,He,st,qe.data)}else if(T.isDataArrayTexture)if(pt){if(Ft&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,lt,Ee.width,Ee.height,Ee.depth),Y)if(T.layerUpdates.size>0){const fe=ja(Ee.width,Ee.height,T.format,T.type);for(const xe of T.layerUpdates){const Fe=Ee.data.subarray(xe*fe/Ee.data.BYTES_PER_ELEMENT,(xe+1)*fe/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,xe,Ee.width,Ee.height,1,He,st,Fe)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,He,st,Ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,lt,Ee.width,Ee.height,Ee.depth,0,He,st,Ee.data);else if(T.isData3DTexture)pt?(Ft&&t.texStorage3D(i.TEXTURE_3D,Ne,lt,Ee.width,Ee.height,Ee.depth),Y&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,He,st,Ee.data)):t.texImage3D(i.TEXTURE_3D,0,lt,Ee.width,Ee.height,Ee.depth,0,He,st,Ee.data);else if(T.isFramebufferTexture){if(Ft)if(pt)t.texStorage2D(i.TEXTURE_2D,Ne,lt,Ee.width,Ee.height);else{let fe=Ee.width,xe=Ee.height;for(let Fe=0;Fe<Ne;Fe++)t.texImage2D(i.TEXTURE_2D,Fe,lt,fe,xe,0,He,st,null),fe>>=1,xe>>=1}}else if(Mt.length>0){if(pt&&Ft){const fe=Qe(Mt[0]);t.texStorage2D(i.TEXTURE_2D,Ne,lt,fe.width,fe.height)}for(let fe=0,xe=Mt.length;fe<xe;fe++)qe=Mt[fe],pt?Y&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,He,st,qe):t.texImage2D(i.TEXTURE_2D,fe,lt,He,st,qe);T.generateMipmaps=!1}else if(pt){if(Ft){const fe=Qe(Ee);t.texStorage2D(i.TEXTURE_2D,Ne,lt,fe.width,fe.height)}Y&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,He,st,Ee)}else t.texImage2D(i.TEXTURE_2D,0,lt,He,st,Ee);M(T)&&g(le),Ye.__version=ce.version,T.onUpdate&&T.onUpdate(T)}F.__version=T.version}function be(F,T,te){if(T.image.length!==6)return;const le=Ct(F,T),me=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+te);const ce=n.get(me);if(me.version!==ce.__version||le===!0){t.activeTexture(i.TEXTURE0+te);const Ye=Lt.getPrimaries(Lt.workingColorSpace),Le=T.colorSpace===fi?null:Lt.getPrimaries(T.colorSpace),Xe=T.colorSpace===fi||Ye===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);const mt=T.isCompressedTexture||T.image[0].isCompressedTexture,Ee=T.image[0]&&T.image[0].isDataTexture,He=[];for(let xe=0;xe<6;xe++)!mt&&!Ee?He[xe]=w(T.image[xe],!0,r.maxCubemapSize):He[xe]=Ee?T.image[xe].image:T.image[xe],He[xe]=Dt(T,He[xe]);const st=He[0],lt=o.convert(T.format,T.colorSpace),qe=o.convert(T.type),Mt=D(T.internalFormat,lt,qe,T.colorSpace),pt=T.isVideoTexture!==!0,Ft=ce.__version===void 0||le===!0,Y=me.dataReady;let Ne=B(T,st);rt(i.TEXTURE_CUBE_MAP,T);let fe;if(mt){pt&&Ft&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,Mt,st.width,st.height);for(let xe=0;xe<6;xe++){fe=He[xe].mipmaps;for(let Fe=0;Fe<fe.length;Fe++){const Oe=fe[Fe];T.format!==Un?lt!==null?pt?Y&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Fe,0,0,Oe.width,Oe.height,lt,Oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Fe,Mt,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):pt?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Fe,0,0,Oe.width,Oe.height,lt,qe,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Fe,Mt,Oe.width,Oe.height,0,lt,qe,Oe.data)}}}else{if(fe=T.mipmaps,pt&&Ft){fe.length>0&&Ne++;const xe=Qe(He[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,Mt,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Ee){pt?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,He[xe].width,He[xe].height,lt,qe,He[xe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Mt,He[xe].width,He[xe].height,0,lt,qe,He[xe].data);for(let Fe=0;Fe<fe.length;Fe++){const nt=fe[Fe].image[xe].image;pt?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Fe+1,0,0,nt.width,nt.height,lt,qe,nt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Fe+1,Mt,nt.width,nt.height,0,lt,qe,nt.data)}}else{pt?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,lt,qe,He[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Mt,lt,qe,He[xe]);for(let Fe=0;Fe<fe.length;Fe++){const Oe=fe[Fe];pt?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Fe+1,0,0,lt,qe,Oe.image[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Fe+1,Mt,lt,qe,Oe.image[xe])}}}M(T)&&g(i.TEXTURE_CUBE_MAP),ce.__version=me.version,T.onUpdate&&T.onUpdate(T)}F.__version=T.version}function Ke(F,T,te,le,me,ce){const Ye=o.convert(te.format,te.colorSpace),Le=o.convert(te.type),Xe=D(te.internalFormat,Ye,Le,te.colorSpace),mt=n.get(T),Ee=n.get(te);if(Ee.__renderTarget=T,!mt.__hasExternalTextures){const He=Math.max(1,T.width>>ce),st=Math.max(1,T.height>>ce);me===i.TEXTURE_3D||me===i.TEXTURE_2D_ARRAY?t.texImage3D(me,ce,Xe,He,st,T.depth,0,Ye,Le,null):t.texImage2D(me,ce,Xe,He,st,0,Ye,Le,null)}t.bindFramebuffer(i.FRAMEBUFFER,F),yt(T)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,me,Ee.__webglTexture,0,xt(T)):(me===i.TEXTURE_2D||me>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,le,me,Ee.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(F,T,te){if(i.bindRenderbuffer(i.RENDERBUFFER,F),T.depthBuffer){const le=T.depthTexture,me=le&&le.isDepthTexture?le.type:null,ce=A(T.stencilBuffer,me),Ye=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=xt(T);yt(T)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le,ce,T.width,T.height):te?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,ce,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ce,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ye,i.RENDERBUFFER,F)}else{const le=T.textures;for(let me=0;me<le.length;me++){const ce=le[me],Ye=o.convert(ce.format,ce.colorSpace),Le=o.convert(ce.type),Xe=D(ce.internalFormat,Ye,Le,ce.colorSpace),mt=xt(T);te&&yt(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,Xe,T.width,T.height):yt(T)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,Xe,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Xe,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ot(F,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,F),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const le=n.get(T.depthTexture);le.__renderTarget=T,(!le.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ve(T.depthTexture,0);const me=le.__webglTexture,ce=xt(T);if(T.depthTexture.format===nr)yt(T)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,me,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,me,0);else if(T.depthTexture.format===lr)yt(T)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,me,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function ut(F){const T=n.get(F),te=F.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==F.depthTexture){const le=F.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),le){const me=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,le.removeEventListener("dispose",me)};le.addEventListener("dispose",me),T.__depthDisposeCallback=me}T.__boundDepthTexture=le}if(F.depthTexture&&!T.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");ot(T.__webglFramebuffer,F)}else if(te){T.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[le]),T.__webglDepthbuffer[le]===void 0)T.__webglDepthbuffer[le]=i.createRenderbuffer(),Re(T.__webglDepthbuffer[le],F,!1);else{const me=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=T.__webglDepthbuffer[le];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,ce)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Re(T.__webglDepthbuffer,F,!1);else{const le=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,me)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(F,T,te){const le=n.get(F);T!==void 0&&Ke(le.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),te!==void 0&&ut(F)}function Nt(F){const T=F.texture,te=n.get(F),le=n.get(T);F.addEventListener("dispose",U);const me=F.textures,ce=F.isWebGLCubeRenderTarget===!0,Ye=me.length>1;if(Ye||(le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture()),le.__version=T.version,l.memory.textures++),ce){te.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer[Le]=[];for(let Xe=0;Xe<T.mipmaps.length;Xe++)te.__webglFramebuffer[Le][Xe]=i.createFramebuffer()}else te.__webglFramebuffer[Le]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer=[];for(let Le=0;Le<T.mipmaps.length;Le++)te.__webglFramebuffer[Le]=i.createFramebuffer()}else te.__webglFramebuffer=i.createFramebuffer();if(Ye)for(let Le=0,Xe=me.length;Le<Xe;Le++){const mt=n.get(me[Le]);mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture(),l.memory.textures++)}if(F.samples>0&&yt(F)===!1){te.__webglMultisampledFramebuffer=i.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Le=0;Le<me.length;Le++){const Xe=me[Le];te.__webglColorRenderbuffer[Le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,te.__webglColorRenderbuffer[Le]);const mt=o.convert(Xe.format,Xe.colorSpace),Ee=o.convert(Xe.type),He=D(Xe.internalFormat,mt,Ee,Xe.colorSpace,F.isXRRenderTarget===!0),st=xt(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,st,He,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,te.__webglColorRenderbuffer[Le])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(te.__webglDepthRenderbuffer=i.createRenderbuffer(),Re(te.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,le.__webglTexture),rt(i.TEXTURE_CUBE_MAP,T);for(let Le=0;Le<6;Le++)if(T.mipmaps&&T.mipmaps.length>0)for(let Xe=0;Xe<T.mipmaps.length;Xe++)Ke(te.__webglFramebuffer[Le][Xe],F,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Xe);else Ke(te.__webglFramebuffer[Le],F,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);M(T)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ye){for(let Le=0,Xe=me.length;Le<Xe;Le++){const mt=me[Le],Ee=n.get(mt);t.bindTexture(i.TEXTURE_2D,Ee.__webglTexture),rt(i.TEXTURE_2D,mt),Ke(te.__webglFramebuffer,F,mt,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,0),M(mt)&&g(i.TEXTURE_2D)}t.unbindTexture()}else{let Le=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Le=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Le,le.__webglTexture),rt(Le,T),T.mipmaps&&T.mipmaps.length>0)for(let Xe=0;Xe<T.mipmaps.length;Xe++)Ke(te.__webglFramebuffer[Xe],F,T,i.COLOR_ATTACHMENT0,Le,Xe);else Ke(te.__webglFramebuffer,F,T,i.COLOR_ATTACHMENT0,Le,0);M(T)&&g(Le),t.unbindTexture()}F.depthBuffer&&ut(F)}function ht(F){const T=F.textures;for(let te=0,le=T.length;te<le;te++){const me=T[te];if(M(me)){const ce=I(F),Ye=n.get(me).__webglTexture;t.bindTexture(ce,Ye),g(ce),t.unbindTexture()}}}const zt=[],W=[];function Kt(F){if(F.samples>0){if(yt(F)===!1){const T=F.textures,te=F.width,le=F.height;let me=i.COLOR_BUFFER_BIT;const ce=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ye=n.get(F),Le=T.length>1;if(Le)for(let Xe=0;Xe<T.length;Xe++)t.bindFramebuffer(i.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let Xe=0;Xe<T.length;Xe++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(me|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(me|=i.STENCIL_BUFFER_BIT)),Le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ye.__webglColorRenderbuffer[Xe]);const mt=n.get(T[Xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,mt,0)}i.blitFramebuffer(0,0,te,le,0,0,te,le,me,i.NEAREST),h===!0&&(zt.length=0,W.length=0,zt.push(i.COLOR_ATTACHMENT0+Xe),F.depthBuffer&&F.resolveDepthBuffer===!1&&(zt.push(ce),W.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,W)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,zt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Le)for(let Xe=0;Xe<T.length;Xe++){t.bindFramebuffer(i.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.RENDERBUFFER,Ye.__webglColorRenderbuffer[Xe]);const mt=n.get(T[Xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.TEXTURE_2D,mt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&h){const T=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function xt(F){return Math.min(r.maxSamples,F.samples)}function yt(F){const T=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function tt(F){const T=l.render.frame;d.get(F)!==T&&(d.set(F,T),F.update())}function Dt(F,T){const te=F.colorSpace,le=F.format,me=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||te!==cr&&te!==fi&&(Lt.getTransfer(te)===Ot?(le!==Un||me!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),T}function Qe(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(p.width=F.naturalWidth||F.width,p.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(p.width=F.displayWidth,p.height=F.displayHeight):(p.width=F.width,p.height=F.height),p}this.allocateTextureUnit=Q,this.resetTextureUnits=ee,this.setTexture2D=ve,this.setTexture2DArray=X,this.setTexture3D=Me,this.setTextureCube=he,this.rebindTextures=dt,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=Ke,this.useMultisampledRTT=yt}function am(i,e){function t(n,r=fi){let o;const l=Lt.getTransfer(r);if(n===ii)return i.UNSIGNED_BYTE;if(n===ra)return i.UNSIGNED_SHORT_4_4_4_4;if(n===sa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Al)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bl)return i.BYTE;if(n===wl)return i.SHORT;if(n===Cr)return i.UNSIGNED_SHORT;if(n===ia)return i.INT;if(n===Ui)return i.UNSIGNED_INT;if(n===Qn)return i.FLOAT;if(n===Lr)return i.HALF_FLOAT;if(n===Cl)return i.ALPHA;if(n===Rl)return i.RGB;if(n===Un)return i.RGBA;if(n===Ll)return i.LUMINANCE;if(n===Pl)return i.LUMINANCE_ALPHA;if(n===nr)return i.DEPTH_COMPONENT;if(n===lr)return i.DEPTH_STENCIL;if(n===Dl)return i.RED;if(n===oa)return i.RED_INTEGER;if(n===Il)return i.RG;if(n===aa)return i.RG_INTEGER;if(n===la)return i.RGBA_INTEGER;if(n===cs||n===us||n===hs||n===fs)if(l===Ot)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===cs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===us)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===cs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===us)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wo||n===Ao||n===Co||n===Ro)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===wo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ao)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Co)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ro)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Lo||n===Po||n===Do)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Lo||n===Po)return l===Ot?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Do)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Io||n===Uo||n===No||n===Fo||n===Oo||n===Bo||n===zo||n===ko||n===Ho||n===Go||n===Vo||n===Wo||n===Xo||n===qo)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Io)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Uo)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===No)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fo)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oo)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bo)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zo)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ko)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ho)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Go)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vo)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wo)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xo)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qo)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ds||n===jo||n===Yo)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===ds)return l===Ot?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jo)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yo)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ul||n===$o||n===Ko||n===Zo)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===ds)return o.COMPRESSED_RED_RGTC1_EXT;if(n===$o)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ko)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ar?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const lm={type:"move"};class lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,l=null;const u=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){l=!0;for(const w of e.hand.values()){const M=t.getJointPose(w,n),g=this._getHandJoint(p,w);M!==null&&(g.matrix.fromArray(M.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=M.radius),g.visible=M!==null}const d=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=d.position.distanceTo(_.position),x=.02,S=.005;p.inputState.pinching&&v>x+S?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=x-S&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1));u!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(lm)))}return u!==null&&(u.visible=r!==null),h!==null&&(h.visible=o!==null),p!==null&&(p.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Qi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const cm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,um=`
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

}`;class hm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new mn,o=e.properties.get(r);o.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new _i({vertexShader:cm,fragmentShader:um,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Jt(new Nr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fm extends hr{constructor(e,t){super();const n=this;let r=null,o=1,l=null,u="local-floor",h=1,p=null,d=null,_=null,v=null,x=null,S=null;const w=new hm,M=t.getContextAttributes();let g=null,I=null;const D=[],A=[],B=new wt;let z=null;const U=new fn;U.viewport=new Bt;const O=new fn;O.viewport=new Bt;const C=[U,O],b=new Du;let k=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ge){let be=D[ge];return be===void 0&&(be=new lo,D[ge]=be),be.getTargetRaySpace()},this.getControllerGrip=function(ge){let be=D[ge];return be===void 0&&(be=new lo,D[ge]=be),be.getGripSpace()},this.getHand=function(ge){let be=D[ge];return be===void 0&&(be=new lo,D[ge]=be),be.getHandSpace()};function Q(ge){const be=A.indexOf(ge.inputSource);if(be===-1)return;const Ke=D[be];Ke!==void 0&&(Ke.update(ge.inputSource,ge.frame,p||l),Ke.dispatchEvent({type:ge.type,data:ge.inputSource}))}function ue(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",ue),r.removeEventListener("inputsourceschange",ve);for(let ge=0;ge<D.length;ge++){const be=A[ge];be!==null&&(A[ge]=null,D[ge].disconnect(be))}k=null,ee=null,w.reset(),e.setRenderTarget(g),x=null,v=null,_=null,r=null,I=null,Ct.stop(),n.isPresenting=!1,e.setPixelRatio(z),e.setSize(B.width,B.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ge){o=ge,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ge){u=ge,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||l},this.setReferenceSpace=function(ge){p=ge},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(ge){if(r=ge,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",ue),r.addEventListener("inputsourceschange",ve),M.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(B),r.renderState.layers===void 0){const be={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(r,t,be),r.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),I=new Ni(x.framebufferWidth,x.framebufferHeight,{format:Un,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil})}else{let be=null,Ke=null,Re=null;M.depth&&(Re=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=M.stencil?lr:nr,Ke=M.stencil?ar:Ui);const ot={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:o};_=new XRWebGLBinding(r,t),v=_.createProjectionLayer(ot),r.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),I=new Ni(v.textureWidth,v.textureHeight,{format:Un,type:ii,depthTexture:new $l(v.textureWidth,v.textureHeight,Ke,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(h),p=null,l=await r.requestReferenceSpace(u),Ct.setContext(r),Ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function ve(ge){for(let be=0;be<ge.removed.length;be++){const Ke=ge.removed[be],Re=A.indexOf(Ke);Re>=0&&(A[Re]=null,D[Re].disconnect(Ke))}for(let be=0;be<ge.added.length;be++){const Ke=ge.added[be];let Re=A.indexOf(Ke);if(Re===-1){for(let ut=0;ut<D.length;ut++)if(ut>=A.length){A.push(Ke),Re=ut;break}else if(A[ut]===null){A[ut]=Ke,Re=ut;break}if(Re===-1)break}const ot=D[Re];ot&&ot.connect(Ke)}}const X=new Z,Me=new Z;function he(ge,be,Ke){X.setFromMatrixPosition(be.matrixWorld),Me.setFromMatrixPosition(Ke.matrixWorld);const Re=X.distanceTo(Me),ot=be.projectionMatrix.elements,ut=Ke.projectionMatrix.elements,dt=ot[14]/(ot[10]-1),Nt=ot[14]/(ot[10]+1),ht=(ot[9]+1)/ot[5],zt=(ot[9]-1)/ot[5],W=(ot[8]-1)/ot[0],Kt=(ut[8]+1)/ut[0],xt=dt*W,yt=dt*Kt,tt=Re/(-W+Kt),Dt=tt*-W;if(be.matrixWorld.decompose(ge.position,ge.quaternion,ge.scale),ge.translateX(Dt),ge.translateZ(tt),ge.matrixWorld.compose(ge.position,ge.quaternion,ge.scale),ge.matrixWorldInverse.copy(ge.matrixWorld).invert(),ot[10]===-1)ge.projectionMatrix.copy(be.projectionMatrix),ge.projectionMatrixInverse.copy(be.projectionMatrixInverse);else{const Qe=dt+tt,F=Nt+tt,T=xt-Dt,te=yt+(Re-Dt),le=ht*Nt/F*Qe,me=zt*Nt/F*Qe;ge.projectionMatrix.makePerspective(T,te,le,me,Qe,F),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert()}}function c(ge,be){be===null?ge.matrixWorld.copy(ge.matrix):ge.matrixWorld.multiplyMatrices(be.matrixWorld,ge.matrix),ge.matrixWorldInverse.copy(ge.matrixWorld).invert()}this.updateCamera=function(ge){if(r===null)return;let be=ge.near,Ke=ge.far;w.texture!==null&&(w.depthNear>0&&(be=w.depthNear),w.depthFar>0&&(Ke=w.depthFar)),b.near=O.near=U.near=be,b.far=O.far=U.far=Ke,(k!==b.near||ee!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),k=b.near,ee=b.far),U.layers.mask=ge.layers.mask|2,O.layers.mask=ge.layers.mask|4,b.layers.mask=U.layers.mask|O.layers.mask;const Re=ge.parent,ot=b.cameras;c(b,Re);for(let ut=0;ut<ot.length;ut++)c(ot[ut],Re);ot.length===2?he(b,U,O):b.projectionMatrix.copy(U.projectionMatrix),Ue(ge,b,Re)};function Ue(ge,be,Ke){Ke===null?ge.matrix.copy(be.matrixWorld):(ge.matrix.copy(Ke.matrixWorld),ge.matrix.invert(),ge.matrix.multiply(be.matrixWorld)),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.updateMatrixWorld(!0),ge.projectionMatrix.copy(be.projectionMatrix),ge.projectionMatrixInverse.copy(be.projectionMatrixInverse),ge.isPerspectiveCamera&&(ge.fov=Jo*2*Math.atan(1/ge.projectionMatrix.elements[5]),ge.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(v===null&&x===null))return h},this.setFoveation=function(ge){h=ge,v!==null&&(v.fixedFoveation=ge),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ge)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(b)};let We=null;function rt(ge,be){if(d=be.getViewerPose(p||l),S=be,d!==null){const Ke=d.views;x!==null&&(e.setRenderTargetFramebuffer(I,x.framebuffer),e.setRenderTarget(I));let Re=!1;Ke.length!==b.cameras.length&&(b.cameras.length=0,Re=!0);for(let ut=0;ut<Ke.length;ut++){const dt=Ke[ut];let Nt=null;if(x!==null)Nt=x.getViewport(dt);else{const zt=_.getViewSubImage(v,dt);Nt=zt.viewport,ut===0&&(e.setRenderTargetTextures(I,zt.colorTexture,v.ignoreDepthValues?void 0:zt.depthStencilTexture),e.setRenderTarget(I))}let ht=C[ut];ht===void 0&&(ht=new fn,ht.layers.enable(ut),ht.viewport=new Bt,C[ut]=ht),ht.matrix.fromArray(dt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(dt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),ut===0&&(b.matrix.copy(ht.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Re===!0&&b.cameras.push(ht)}const ot=r.enabledFeatures;if(ot&&ot.includes("depth-sensing")){const ut=_.getDepthInformation(Ke[0]);ut&&ut.isValid&&ut.texture&&w.init(e,ut,r.renderState)}}for(let Ke=0;Ke<D.length;Ke++){const Re=A[Ke],ot=D[Ke];Re!==null&&ot!==void 0&&ot.update(Re,be,p||l)}We&&We(ge,be),be.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:be}),S=null}const Ct=new Jl;Ct.setAnimationLoop(rt),this.setAnimationLoop=function(ge){We=ge},this.dispose=function(){}}}const wi=new Vn,dm=new kt;function pm(i,e){function t(M,g){M.matrixAutoUpdate===!0&&M.updateMatrix(),g.value.copy(M.matrix)}function n(M,g){g.color.getRGB(M.fogColor.value,Xl(i)),g.isFog?(M.fogNear.value=g.near,M.fogFar.value=g.far):g.isFogExp2&&(M.fogDensity.value=g.density)}function r(M,g,I,D,A){g.isMeshBasicMaterial||g.isMeshLambertMaterial?o(M,g):g.isMeshToonMaterial?(o(M,g),_(M,g)):g.isMeshPhongMaterial?(o(M,g),d(M,g)):g.isMeshStandardMaterial?(o(M,g),v(M,g),g.isMeshPhysicalMaterial&&x(M,g,A)):g.isMeshMatcapMaterial?(o(M,g),S(M,g)):g.isMeshDepthMaterial?o(M,g):g.isMeshDistanceMaterial?(o(M,g),w(M,g)):g.isMeshNormalMaterial?o(M,g):g.isLineBasicMaterial?(l(M,g),g.isLineDashedMaterial&&u(M,g)):g.isPointsMaterial?h(M,g,I,D):g.isSpriteMaterial?p(M,g):g.isShadowMaterial?(M.color.value.copy(g.color),M.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function o(M,g){M.opacity.value=g.opacity,g.color&&M.diffuse.value.copy(g.color),g.emissive&&M.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(M.map.value=g.map,t(g.map,M.mapTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,t(g.alphaMap,M.alphaMapTransform)),g.bumpMap&&(M.bumpMap.value=g.bumpMap,t(g.bumpMap,M.bumpMapTransform),M.bumpScale.value=g.bumpScale,g.side===vn&&(M.bumpScale.value*=-1)),g.normalMap&&(M.normalMap.value=g.normalMap,t(g.normalMap,M.normalMapTransform),M.normalScale.value.copy(g.normalScale),g.side===vn&&M.normalScale.value.negate()),g.displacementMap&&(M.displacementMap.value=g.displacementMap,t(g.displacementMap,M.displacementMapTransform),M.displacementScale.value=g.displacementScale,M.displacementBias.value=g.displacementBias),g.emissiveMap&&(M.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,M.emissiveMapTransform)),g.specularMap&&(M.specularMap.value=g.specularMap,t(g.specularMap,M.specularMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest);const I=e.get(g),D=I.envMap,A=I.envMapRotation;D&&(M.envMap.value=D,wi.copy(A),wi.x*=-1,wi.y*=-1,wi.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),M.envMapRotation.value.setFromMatrix4(dm.makeRotationFromEuler(wi)),M.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=g.reflectivity,M.ior.value=g.ior,M.refractionRatio.value=g.refractionRatio),g.lightMap&&(M.lightMap.value=g.lightMap,M.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,M.lightMapTransform)),g.aoMap&&(M.aoMap.value=g.aoMap,M.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,M.aoMapTransform))}function l(M,g){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,g.map&&(M.map.value=g.map,t(g.map,M.mapTransform))}function u(M,g){M.dashSize.value=g.dashSize,M.totalSize.value=g.dashSize+g.gapSize,M.scale.value=g.scale}function h(M,g,I,D){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,M.size.value=g.size*I,M.scale.value=D*.5,g.map&&(M.map.value=g.map,t(g.map,M.uvTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,t(g.alphaMap,M.alphaMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest)}function p(M,g){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,M.rotation.value=g.rotation,g.map&&(M.map.value=g.map,t(g.map,M.mapTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,t(g.alphaMap,M.alphaMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest)}function d(M,g){M.specular.value.copy(g.specular),M.shininess.value=Math.max(g.shininess,1e-4)}function _(M,g){g.gradientMap&&(M.gradientMap.value=g.gradientMap)}function v(M,g){M.metalness.value=g.metalness,g.metalnessMap&&(M.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,M.metalnessMapTransform)),M.roughness.value=g.roughness,g.roughnessMap&&(M.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,M.roughnessMapTransform)),g.envMap&&(M.envMapIntensity.value=g.envMapIntensity)}function x(M,g,I){M.ior.value=g.ior,g.sheen>0&&(M.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),M.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(M.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,M.sheenColorMapTransform)),g.sheenRoughnessMap&&(M.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,M.sheenRoughnessMapTransform))),g.clearcoat>0&&(M.clearcoat.value=g.clearcoat,M.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(M.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,M.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(M.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===vn&&M.clearcoatNormalScale.value.negate())),g.dispersion>0&&(M.dispersion.value=g.dispersion),g.iridescence>0&&(M.iridescence.value=g.iridescence,M.iridescenceIOR.value=g.iridescenceIOR,M.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(M.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,M.iridescenceMapTransform)),g.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),g.transmission>0&&(M.transmission.value=g.transmission,M.transmissionSamplerMap.value=I.texture,M.transmissionSamplerSize.value.set(I.width,I.height),g.transmissionMap&&(M.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,M.transmissionMapTransform)),M.thickness.value=g.thickness,g.thicknessMap&&(M.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=g.attenuationDistance,M.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(M.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(M.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=g.specularIntensity,M.specularColor.value.copy(g.specularColor),g.specularColorMap&&(M.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,M.specularColorMapTransform)),g.specularIntensityMap&&(M.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,M.specularIntensityMapTransform))}function S(M,g){g.matcap&&(M.matcap.value=g.matcap)}function w(M,g){const I=e.get(g).light;M.referencePosition.value.setFromMatrixPosition(I.matrixWorld),M.nearDistance.value=I.shadow.camera.near,M.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function mm(i,e,t,n){let r={},o={},l=[];const u=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(I,D){const A=D.program;n.uniformBlockBinding(I,A)}function p(I,D){let A=r[I.id];A===void 0&&(S(I),A=d(I),r[I.id]=A,I.addEventListener("dispose",M));const B=D.program;n.updateUBOMapping(I,B);const z=e.render.frame;o[I.id]!==z&&(v(I),o[I.id]=z)}function d(I){const D=_();I.__bindingPointIndex=D;const A=i.createBuffer(),B=I.__size,z=I.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,B,z),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,D,A),A}function _(){for(let I=0;I<u;I++)if(l.indexOf(I)===-1)return l.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(I){const D=r[I.id],A=I.uniforms,B=I.__cache;i.bindBuffer(i.UNIFORM_BUFFER,D);for(let z=0,U=A.length;z<U;z++){const O=Array.isArray(A[z])?A[z]:[A[z]];for(let C=0,b=O.length;C<b;C++){const k=O[C];if(x(k,z,C,B)===!0){const ee=k.__offset,Q=Array.isArray(k.value)?k.value:[k.value];let ue=0;for(let ve=0;ve<Q.length;ve++){const X=Q[ve],Me=w(X);typeof X=="number"||typeof X=="boolean"?(k.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,ee+ue,k.__data)):X.isMatrix3?(k.__data[0]=X.elements[0],k.__data[1]=X.elements[1],k.__data[2]=X.elements[2],k.__data[3]=0,k.__data[4]=X.elements[3],k.__data[5]=X.elements[4],k.__data[6]=X.elements[5],k.__data[7]=0,k.__data[8]=X.elements[6],k.__data[9]=X.elements[7],k.__data[10]=X.elements[8],k.__data[11]=0):(X.toArray(k.__data,ue),ue+=Me.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ee,k.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(I,D,A,B){const z=I.value,U=D+"_"+A;if(B[U]===void 0)return typeof z=="number"||typeof z=="boolean"?B[U]=z:B[U]=z.clone(),!0;{const O=B[U];if(typeof z=="number"||typeof z=="boolean"){if(O!==z)return B[U]=z,!0}else if(O.equals(z)===!1)return O.copy(z),!0}return!1}function S(I){const D=I.uniforms;let A=0;const B=16;for(let U=0,O=D.length;U<O;U++){const C=Array.isArray(D[U])?D[U]:[D[U]];for(let b=0,k=C.length;b<k;b++){const ee=C[b],Q=Array.isArray(ee.value)?ee.value:[ee.value];for(let ue=0,ve=Q.length;ue<ve;ue++){const X=Q[ue],Me=w(X),he=A%B,c=he%Me.boundary,Ue=he+c;A+=c,Ue!==0&&B-Ue<Me.storage&&(A+=B-Ue),ee.__data=new Float32Array(Me.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=A,A+=Me.storage}}}const z=A%B;return z>0&&(A+=B-z),I.__size=A,I.__cache={},this}function w(I){const D={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(D.boundary=4,D.storage=4):I.isVector2?(D.boundary=8,D.storage=8):I.isVector3||I.isColor?(D.boundary=16,D.storage=12):I.isVector4?(D.boundary=16,D.storage=16):I.isMatrix3?(D.boundary=48,D.storage=48):I.isMatrix4?(D.boundary=64,D.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),D}function M(I){const D=I.target;D.removeEventListener("dispose",M);const A=l.indexOf(D.__bindingPointIndex);l.splice(A,1),i.deleteBuffer(r[D.id]),delete r[D.id],delete o[D.id]}function g(){for(const I in r)i.deleteBuffer(r[I]);l=[],r={},o={}}return{bind:h,update:p,dispose:g}}class Ts{constructor(e={}){const{canvas:t=$c(),context:n=null,depth:r=!0,stencil:o=!1,alpha:l=!1,antialias:u=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=l;const S=new Uint32Array(4),w=new Int32Array(4);let M=null,g=null;const I=[],D=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=An,this.toneMapping=pi,this.toneMappingExposure=1;const A=this;let B=!1,z=0,U=0,O=null,C=-1,b=null;const k=new Bt,ee=new Bt;let Q=null;const ue=new bt(0);let ve=0,X=t.width,Me=t.height,he=1,c=null,Ue=null;const We=new Bt(0,0,X,Me),rt=new Bt(0,0,X,Me);let Ct=!1;const ge=new ca;let be=!1,Ke=!1;const Re=new kt,ot=new kt,ut=new Z,dt=new Bt,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function zt(){return O===null?he:1}let W=n;function Kt(R,K){return t.getContext(R,K)}try{const R={alpha:!0,depth:r,stencil:o,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:d,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ta}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",Fe,!1),t.addEventListener("webglcontextcreationerror",Oe,!1),W===null){const K="webgl2";if(W=Kt(K,R),W===null)throw Kt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let xt,yt,tt,Dt,Qe,F,T,te,le,me,ce,Ye,Le,Xe,mt,Ee,He,st,lt,qe,Mt,pt,Ft,Y;function Ne(){xt=new bd(W),xt.init(),pt=new am(W,xt),yt=new xd(W,xt,e,pt),tt=new sm(W,xt),yt.reverseDepthBuffer&&v&&tt.buffers.depth.setReversed(!0),Dt=new Cd(W),Qe=new qp,F=new om(W,xt,tt,Qe,yt,pt,Dt),T=new Md(A),te=new Td(A),le=new Uu(W),Ft=new _d(W,le),me=new wd(W,le,Dt,Ft),ce=new Ld(W,me,le,Dt),lt=new Rd(W,yt,F),Ee=new yd(Qe),Ye=new Xp(A,T,te,xt,yt,Ft,Ee),Le=new pm(A,Qe),Xe=new Yp,mt=new em(xt),st=new gd(A,T,te,tt,ce,x,h),He=new im(A,ce,yt),Y=new mm(W,Dt,yt,tt),qe=new vd(W,xt,Dt),Mt=new Ad(W,xt,Dt),Dt.programs=Ye.programs,A.capabilities=yt,A.extensions=xt,A.properties=Qe,A.renderLists=Xe,A.shadowMap=He,A.state=tt,A.info=Dt}Ne();const fe=new fm(A,W);this.xr=fe,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const R=xt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=xt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(R){R!==void 0&&(he=R,this.setSize(X,Me,!1))},this.getSize=function(R){return R.set(X,Me)},this.setSize=function(R,K,se=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=R,Me=K,t.width=Math.floor(R*he),t.height=Math.floor(K*he),se===!0&&(t.style.width=R+"px",t.style.height=K+"px"),this.setViewport(0,0,R,K)},this.getDrawingBufferSize=function(R){return R.set(X*he,Me*he).floor()},this.setDrawingBufferSize=function(R,K,se){X=R,Me=K,he=se,t.width=Math.floor(R*se),t.height=Math.floor(K*se),this.setViewport(0,0,R,K)},this.getCurrentViewport=function(R){return R.copy(k)},this.getViewport=function(R){return R.copy(We)},this.setViewport=function(R,K,se,oe){R.isVector4?We.set(R.x,R.y,R.z,R.w):We.set(R,K,se,oe),tt.viewport(k.copy(We).multiplyScalar(he).round())},this.getScissor=function(R){return R.copy(rt)},this.setScissor=function(R,K,se,oe){R.isVector4?rt.set(R.x,R.y,R.z,R.w):rt.set(R,K,se,oe),tt.scissor(ee.copy(rt).multiplyScalar(he).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(R){tt.setScissorTest(Ct=R)},this.setOpaqueSort=function(R){c=R},this.setTransparentSort=function(R){Ue=R},this.getClearColor=function(R){return R.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor.apply(st,arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha.apply(st,arguments)},this.clear=function(R=!0,K=!0,se=!0){let oe=0;if(R){let J=!1;if(O!==null){const Te=O.texture.format;J=Te===la||Te===aa||Te===oa}if(J){const Te=O.texture.type,Pe=Te===ii||Te===Ui||Te===Cr||Te===ar||Te===ra||Te===sa,Ge=st.getClearColor(),$e=st.getClearAlpha(),ct=Ge.r,at=Ge.g,Ze=Ge.b;Pe?(S[0]=ct,S[1]=at,S[2]=Ze,S[3]=$e,W.clearBufferuiv(W.COLOR,0,S)):(w[0]=ct,w[1]=at,w[2]=Ze,w[3]=$e,W.clearBufferiv(W.COLOR,0,w))}else oe|=W.COLOR_BUFFER_BIT}K&&(oe|=W.DEPTH_BUFFER_BIT),se&&(oe|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",Fe,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),st.dispose(),Xe.dispose(),mt.dispose(),Qe.dispose(),T.dispose(),te.dispose(),ce.dispose(),Ft.dispose(),Y.dispose(),Ye.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Fi),fe.removeEventListener("sessionend",Fr),Wn.stop()};function xe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const R=Dt.autoReset,K=He.enabled,se=He.autoUpdate,oe=He.needsUpdate,J=He.type;Ne(),Dt.autoReset=R,He.enabled=K,He.autoUpdate=se,He.needsUpdate=oe,He.type=J}function Oe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function nt(R){const K=R.target;K.removeEventListener("dispose",nt),Ht(K)}function Ht(R){Yt(R),Qe.remove(R)}function Yt(R){const K=Qe.get(R).programs;K!==void 0&&(K.forEach(function(se){Ye.releaseProgram(se)}),R.isShaderMaterial&&Ye.releaseShaderCache(R))}this.renderBufferDirect=function(R,K,se,oe,J,Te){K===null&&(K=Nt);const Pe=J.isMesh&&J.matrixWorld.determinant()<0,Ge=bs(R,K,se,oe,J);tt.setMaterial(oe,Pe);let $e=se.index,ct=1;if(oe.wireframe===!0){if($e=me.getWireframeAttribute(se),$e===void 0)return;ct=2}const at=se.drawRange,Ze=se.attributes.position;let Et=at.start*ct,Rt=(at.start+at.count)*ct;Te!==null&&(Et=Math.max(Et,Te.start*ct),Rt=Math.min(Rt,(Te.start+Te.count)*ct)),$e!==null?(Et=Math.max(Et,0),Rt=Math.min(Rt,$e.count)):Ze!=null&&(Et=Math.max(Et,0),Rt=Math.min(Rt,Ze.count));const Vt=Rt-Et;if(Vt<0||Vt===1/0)return;Ft.setup(J,oe,Ge,se,$e);let Gt,At=qe;if($e!==null&&(Gt=le.get($e),At=Mt,At.setIndex(Gt)),J.isMesh)oe.wireframe===!0?(tt.setLineWidth(oe.wireframeLinewidth*zt()),At.setMode(W.LINES)):At.setMode(W.TRIANGLES);else if(J.isLine){let et=oe.linewidth;et===void 0&&(et=1),tt.setLineWidth(et*zt()),J.isLineSegments?At.setMode(W.LINES):J.isLineLoop?At.setMode(W.LINE_LOOP):At.setMode(W.LINE_STRIP)}else J.isPoints?At.setMode(W.POINTS):J.isSprite&&At.setMode(W.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)At.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(xt.get("WEBGL_multi_draw"))At.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const et=J._multiDrawStarts,qt=J._multiDrawCounts,gt=J._multiDrawCount,nn=$e?le.get($e).bytesPerElement:1,ri=Qe.get(oe).currentProgram.getUniforms();for(let dn=0;dn<gt;dn++)ri.setValue(W,"_gl_DrawID",dn),At.render(et[dn]/nn,qt[dn])}else if(J.isInstancedMesh)At.renderInstances(Et,Vt,J.count);else if(se.isInstancedBufferGeometry){const et=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,qt=Math.min(se.instanceCount,et);At.renderInstances(Et,Vt,qt)}else At.render(Et,Vt)};function Pt(R,K,se){R.transparent===!0&&R.side===Jn&&R.forceSinglePass===!1?(R.side=vn,R.needsUpdate=!0,Oi(R,K,se),R.side=gi,R.needsUpdate=!0,Oi(R,K,se),R.side=Jn):Oi(R,K,se)}this.compile=function(R,K,se=null){se===null&&(se=R),g=mt.get(se),g.init(K),D.push(g),se.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(g.pushLight(J),J.castShadow&&g.pushShadow(J))}),R!==se&&R.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(g.pushLight(J),J.castShadow&&g.pushShadow(J))}),g.setupLights();const oe=new Set;return R.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Te=J.material;if(Te)if(Array.isArray(Te))for(let Pe=0;Pe<Te.length;Pe++){const Ge=Te[Pe];Pt(Ge,se,J),oe.add(Ge)}else Pt(Te,se,J),oe.add(Te)}),D.pop(),g=null,oe},this.compileAsync=function(R,K,se=null){const oe=this.compile(R,K,se);return new Promise(J=>{function Te(){if(oe.forEach(function(Pe){Qe.get(Pe).currentProgram.isReady()&&oe.delete(Pe)}),oe.size===0){J(R);return}setTimeout(Te,10)}xt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let xn=null;function Rn(R){xn&&xn(R)}function Fi(){Wn.stop()}function Fr(){Wn.start()}const Wn=new Jl;Wn.setAnimationLoop(Rn),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(R){xn=R,fe.setAnimationLoop(R),R===null?Wn.stop():Wn.start()},fe.addEventListener("sessionstart",Fi),fe.addEventListener("sessionend",Fr),this.render=function(R,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(K),K=fe.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,K,O),g=mt.get(R,D.length),g.init(K),D.push(g),ot.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),ge.setFromProjectionMatrix(ot),Ke=this.localClippingEnabled,be=Ee.init(this.clippingPlanes,Ke),M=Xe.get(R,I.length),M.init(),I.push(M),fe.enabled===!0&&fe.isPresenting===!0){const Te=A.xr.getDepthSensingMesh();Te!==null&&pr(Te,K,-1/0,A.sortObjects)}pr(R,K,0,A.sortObjects),M.finish(),A.sortObjects===!0&&M.sort(c,Ue),ht=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,ht&&st.addToRenderList(M,R),this.info.render.frame++,be===!0&&Ee.beginShadows();const se=g.state.shadowsArray;He.render(se,R,K),be===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const oe=M.opaque,J=M.transmissive;if(g.setupLights(),K.isArrayCamera){const Te=K.cameras;if(J.length>0)for(let Pe=0,Ge=Te.length;Pe<Ge;Pe++){const $e=Te[Pe];Xn(oe,J,R,$e)}ht&&st.render(R);for(let Pe=0,Ge=Te.length;Pe<Ge;Pe++){const $e=Te[Pe];On(M,R,$e,$e.viewport)}}else J.length>0&&Xn(oe,J,R,K),ht&&st.render(R),On(M,R,K);O!==null&&(F.updateMultisampleRenderTarget(O),F.updateRenderTargetMipmap(O)),R.isScene===!0&&R.onAfterRender(A,R,K),Ft.resetDefaultState(),C=-1,b=null,D.pop(),D.length>0?(g=D[D.length-1],be===!0&&Ee.setGlobalState(A.clippingPlanes,g.state.camera)):g=null,I.pop(),I.length>0?M=I[I.length-1]:M=null};function pr(R,K,se,oe){if(R.visible===!1)return;if(R.layers.test(K.layers)){if(R.isGroup)se=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(K);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ge.intersectsSprite(R)){oe&&dt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ot);const Pe=ce.update(R),Ge=R.material;Ge.visible&&M.push(R,Pe,Ge,se,dt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ge.intersectsObject(R))){const Pe=ce.update(R),Ge=R.material;if(oe&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),dt.copy(R.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),dt.copy(Pe.boundingSphere.center)),dt.applyMatrix4(R.matrixWorld).applyMatrix4(ot)),Array.isArray(Ge)){const $e=Pe.groups;for(let ct=0,at=$e.length;ct<at;ct++){const Ze=$e[ct],Et=Ge[Ze.materialIndex];Et&&Et.visible&&M.push(R,Pe,Et,se,dt.z,Ze)}}else Ge.visible&&M.push(R,Pe,Ge,se,dt.z,null)}}const Te=R.children;for(let Pe=0,Ge=Te.length;Pe<Ge;Pe++)pr(Te[Pe],K,se,oe)}function On(R,K,se,oe){const J=R.opaque,Te=R.transmissive,Pe=R.transparent;g.setupLightsView(se),be===!0&&Ee.setGlobalState(A.clippingPlanes,se),oe&&tt.viewport(k.copy(oe)),J.length>0&&xi(J,K,se),Te.length>0&&xi(Te,K,se),Pe.length>0&&xi(Pe,K,se),tt.buffers.depth.setTest(!0),tt.buffers.depth.setMask(!0),tt.buffers.color.setMask(!0),tt.setPolygonOffset(!1)}function Xn(R,K,se,oe){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[oe.id]===void 0&&(g.state.transmissionRenderTarget[oe.id]=new Ni(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float")?Lr:ii,minFilter:Ii,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace}));const Te=g.state.transmissionRenderTarget[oe.id],Pe=oe.viewport||k;Te.setSize(Pe.z,Pe.w);const Ge=A.getRenderTarget();A.setRenderTarget(Te),A.getClearColor(ue),ve=A.getClearAlpha(),ve<1&&A.setClearColor(16777215,.5),A.clear(),ht&&st.render(se);const $e=A.toneMapping;A.toneMapping=pi;const ct=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),g.setupLightsView(oe),be===!0&&Ee.setGlobalState(A.clippingPlanes,oe),xi(R,se,oe),F.updateMultisampleRenderTarget(Te),F.updateRenderTargetMipmap(Te),xt.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Ze=0,Et=K.length;Ze<Et;Ze++){const Rt=K[Ze],Vt=Rt.object,Gt=Rt.geometry,At=Rt.material,et=Rt.group;if(At.side===Jn&&Vt.layers.test(oe.layers)){const qt=At.side;At.side=vn,At.needsUpdate=!0,mr(Vt,se,oe,Gt,At,et),At.side=qt,At.needsUpdate=!0,at=!0}}at===!0&&(F.updateMultisampleRenderTarget(Te),F.updateRenderTargetMipmap(Te))}A.setRenderTarget(Ge),A.setClearColor(ue,ve),ct!==void 0&&(oe.viewport=ct),A.toneMapping=$e}function xi(R,K,se){const oe=K.isScene===!0?K.overrideMaterial:null;for(let J=0,Te=R.length;J<Te;J++){const Pe=R[J],Ge=Pe.object,$e=Pe.geometry,ct=oe===null?Pe.material:oe,at=Pe.group;Ge.layers.test(se.layers)&&mr(Ge,K,se,$e,ct,at)}}function mr(R,K,se,oe,J,Te){R.onBeforeRender(A,K,se,oe,J,Te),R.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),J.onBeforeRender(A,K,se,oe,R,Te),J.transparent===!0&&J.side===Jn&&J.forceSinglePass===!1?(J.side=vn,J.needsUpdate=!0,A.renderBufferDirect(se,K,oe,J,R,Te),J.side=gi,J.needsUpdate=!0,A.renderBufferDirect(se,K,oe,J,R,Te),J.side=Jn):A.renderBufferDirect(se,K,oe,J,R,Te),R.onAfterRender(A,K,se,oe,J,Te)}function Oi(R,K,se){K.isScene!==!0&&(K=Nt);const oe=Qe.get(R),J=g.state.lights,Te=g.state.shadowsArray,Pe=J.state.version,Ge=Ye.getParameters(R,J.state,Te,K,se),$e=Ye.getProgramCacheKey(Ge);let ct=oe.programs;oe.environment=R.isMeshStandardMaterial?K.environment:null,oe.fog=K.fog,oe.envMap=(R.isMeshStandardMaterial?te:T).get(R.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&R.envMap===null?K.environmentRotation:R.envMapRotation,ct===void 0&&(R.addEventListener("dispose",nt),ct=new Map,oe.programs=ct);let at=ct.get($e);if(at!==void 0){if(oe.currentProgram===at&&oe.lightsStateVersion===Pe)return gr(R,Ge),at}else Ge.uniforms=Ye.getUniforms(R),R.onBeforeCompile(Ge,A),at=Ye.acquireProgram(Ge,$e),ct.set($e,at),oe.uniforms=Ge.uniforms;const Ze=oe.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ze.clippingPlanes=Ee.uniform),gr(R,Ge),oe.needsLights=As(R),oe.lightsStateVersion=Pe,oe.needsLights&&(Ze.ambientLightColor.value=J.state.ambient,Ze.lightProbe.value=J.state.probe,Ze.directionalLights.value=J.state.directional,Ze.directionalLightShadows.value=J.state.directionalShadow,Ze.spotLights.value=J.state.spot,Ze.spotLightShadows.value=J.state.spotShadow,Ze.rectAreaLights.value=J.state.rectArea,Ze.ltc_1.value=J.state.rectAreaLTC1,Ze.ltc_2.value=J.state.rectAreaLTC2,Ze.pointLights.value=J.state.point,Ze.pointLightShadows.value=J.state.pointShadow,Ze.hemisphereLights.value=J.state.hemi,Ze.directionalShadowMap.value=J.state.directionalShadowMap,Ze.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ze.spotShadowMap.value=J.state.spotShadowMap,Ze.spotLightMatrix.value=J.state.spotLightMatrix,Ze.spotLightMap.value=J.state.spotLightMap,Ze.pointShadowMap.value=J.state.pointShadowMap,Ze.pointShadowMatrix.value=J.state.pointShadowMatrix),oe.currentProgram=at,oe.uniformsList=null,at}function Or(R){if(R.uniformsList===null){const K=R.currentProgram.getUniforms();R.uniformsList=ps.seqWithValue(K.seq,R.uniforms)}return R.uniformsList}function gr(R,K){const se=Qe.get(R);se.outputColorSpace=K.outputColorSpace,se.batching=K.batching,se.batchingColor=K.batchingColor,se.instancing=K.instancing,se.instancingColor=K.instancingColor,se.instancingMorph=K.instancingMorph,se.skinning=K.skinning,se.morphTargets=K.morphTargets,se.morphNormals=K.morphNormals,se.morphColors=K.morphColors,se.morphTargetsCount=K.morphTargetsCount,se.numClippingPlanes=K.numClippingPlanes,se.numIntersection=K.numClipIntersection,se.vertexAlphas=K.vertexAlphas,se.vertexTangents=K.vertexTangents,se.toneMapping=K.toneMapping}function bs(R,K,se,oe,J){K.isScene!==!0&&(K=Nt),F.resetTextureUnits();const Te=K.fog,Pe=oe.isMeshStandardMaterial?K.environment:null,Ge=O===null?A.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:cr,$e=(oe.isMeshStandardMaterial?te:T).get(oe.envMap||Pe),ct=oe.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,at=!!se.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Ze=!!se.morphAttributes.position,Et=!!se.morphAttributes.normal,Rt=!!se.morphAttributes.color;let Vt=pi;oe.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Vt=A.toneMapping);const Gt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,At=Gt!==void 0?Gt.length:0,et=Qe.get(oe),qt=g.state.lights;if(be===!0&&(Ke===!0||R!==b)){const on=R===b&&oe.id===C;Ee.setState(oe,R,on)}let gt=!1;oe.version===et.__version?(et.needsLights&&et.lightsStateVersion!==qt.state.version||et.outputColorSpace!==Ge||J.isBatchedMesh&&et.batching===!1||!J.isBatchedMesh&&et.batching===!0||J.isBatchedMesh&&et.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&et.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&et.instancing===!1||!J.isInstancedMesh&&et.instancing===!0||J.isSkinnedMesh&&et.skinning===!1||!J.isSkinnedMesh&&et.skinning===!0||J.isInstancedMesh&&et.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&et.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&et.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&et.instancingMorph===!1&&J.morphTexture!==null||et.envMap!==$e||oe.fog===!0&&et.fog!==Te||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==Ee.numPlanes||et.numIntersection!==Ee.numIntersection)||et.vertexAlphas!==ct||et.vertexTangents!==at||et.morphTargets!==Ze||et.morphNormals!==Et||et.morphColors!==Rt||et.toneMapping!==Vt||et.morphTargetsCount!==At)&&(gt=!0):(gt=!0,et.__version=oe.version);let nn=et.currentProgram;gt===!0&&(nn=Oi(oe,K,J));let ri=!1,dn=!1,Bn=!1;const It=nn.getUniforms(),sn=et.uniforms;if(tt.useProgram(nn.program)&&(ri=!0,dn=!0,Bn=!0),oe.id!==C&&(C=oe.id,dn=!0),ri||b!==R){tt.buffers.depth.getReversed()?(Re.copy(R.projectionMatrix),Zc(Re),Jc(Re),It.setValue(W,"projectionMatrix",Re)):It.setValue(W,"projectionMatrix",R.projectionMatrix),It.setValue(W,"viewMatrix",R.matrixWorldInverse);const an=It.map.cameraPosition;an!==void 0&&an.setValue(W,ut.setFromMatrixPosition(R.matrixWorld)),yt.logarithmicDepthBuffer&&It.setValue(W,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&It.setValue(W,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,dn=!0,Bn=!0)}if(J.isSkinnedMesh){It.setOptional(W,J,"bindMatrix"),It.setOptional(W,J,"bindMatrixInverse");const on=J.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),It.setValue(W,"boneTexture",on.boneTexture,F))}J.isBatchedMesh&&(It.setOptional(W,J,"batchingTexture"),It.setValue(W,"batchingTexture",J._matricesTexture,F),It.setOptional(W,J,"batchingIdTexture"),It.setValue(W,"batchingIdTexture",J._indirectTexture,F),It.setOptional(W,J,"batchingColorTexture"),J._colorsTexture!==null&&It.setValue(W,"batchingColorTexture",J._colorsTexture,F));const cn=se.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&lt.update(J,se,nn),(dn||et.receiveShadow!==J.receiveShadow)&&(et.receiveShadow=J.receiveShadow,It.setValue(W,"receiveShadow",J.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(sn.envMap.value=$e,sn.flipEnvMap.value=$e.isCubeTexture&&$e.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&K.environment!==null&&(sn.envMapIntensity.value=K.environmentIntensity),dn&&(It.setValue(W,"toneMappingExposure",A.toneMappingExposure),et.needsLights&&ws(sn,Bn),Te&&oe.fog===!0&&Le.refreshFogUniforms(sn,Te),Le.refreshMaterialUniforms(sn,oe,he,Me,g.state.transmissionRenderTarget[R.id]),ps.upload(W,Or(et),sn,F)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(ps.upload(W,Or(et),sn,F),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&It.setValue(W,"center",J.center),It.setValue(W,"modelViewMatrix",J.modelViewMatrix),It.setValue(W,"normalMatrix",J.normalMatrix),It.setValue(W,"modelMatrix",J.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const on=oe.uniformsGroups;for(let an=0,s=on.length;an<s;an++){const a=on[an];Y.update(a,nn),Y.bind(a,nn)}}return nn}function ws(R,K){R.ambientLightColor.needsUpdate=K,R.lightProbe.needsUpdate=K,R.directionalLights.needsUpdate=K,R.directionalLightShadows.needsUpdate=K,R.pointLights.needsUpdate=K,R.pointLightShadows.needsUpdate=K,R.spotLights.needsUpdate=K,R.spotLightShadows.needsUpdate=K,R.rectAreaLights.needsUpdate=K,R.hemisphereLights.needsUpdate=K}function As(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(R,K,se){Qe.get(R.texture).__webglTexture=K,Qe.get(R.depthTexture).__webglTexture=se;const oe=Qe.get(R);oe.__hasExternalTextures=!0,oe.__autoAllocateDepthBuffer=se===void 0,oe.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,K){const se=Qe.get(R);se.__webglFramebuffer=K,se.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(R,K=0,se=0){O=R,z=K,U=se;let oe=!0,J=null,Te=!1,Pe=!1;if(R){const $e=Qe.get(R);if($e.__useDefaultFramebuffer!==void 0)tt.bindFramebuffer(W.FRAMEBUFFER,null),oe=!1;else if($e.__webglFramebuffer===void 0)F.setupRenderTarget(R);else if($e.__hasExternalTextures)F.rebindTextures(R,Qe.get(R.texture).__webglTexture,Qe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ze=R.depthTexture;if($e.__boundDepthTexture!==Ze){if(Ze!==null&&Qe.has(Ze)&&(R.width!==Ze.image.width||R.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(R)}}const ct=R.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(Pe=!0);const at=Qe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(at[K])?J=at[K][se]:J=at[K],Te=!0):R.samples>0&&F.useMultisampledRTT(R)===!1?J=Qe.get(R).__webglMultisampledFramebuffer:Array.isArray(at)?J=at[se]:J=at,k.copy(R.viewport),ee.copy(R.scissor),Q=R.scissorTest}else k.copy(We).multiplyScalar(he).floor(),ee.copy(rt).multiplyScalar(he).floor(),Q=Ct;if(tt.bindFramebuffer(W.FRAMEBUFFER,J)&&oe&&tt.drawBuffers(R,J),tt.viewport(k),tt.scissor(ee),tt.setScissorTest(Q),Te){const $e=Qe.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+K,$e.__webglTexture,se)}else if(Pe){const $e=Qe.get(R.texture),ct=K||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,$e.__webglTexture,se||0,ct)}C=-1},this.readRenderTargetPixels=function(R,K,se,oe,J,Te,Pe){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Qe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ge=Ge[Pe]),Ge){tt.bindFramebuffer(W.FRAMEBUFFER,Ge);try{const $e=R.texture,ct=$e.format,at=$e.type;if(!yt.textureFormatReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=R.width-oe&&se>=0&&se<=R.height-J&&W.readPixels(K,se,oe,J,pt.convert(ct),pt.convert(at),Te)}finally{const $e=O!==null?Qe.get(O).__webglFramebuffer:null;tt.bindFramebuffer(W.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(R,K,se,oe,J,Te,Pe){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=Qe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ge=Ge[Pe]),Ge){const $e=R.texture,ct=$e.format,at=$e.type;if(!yt.textureFormatReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=R.width-oe&&se>=0&&se<=R.height-J){tt.bindFramebuffer(W.FRAMEBUFFER,Ge);const Ze=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Ze),W.bufferData(W.PIXEL_PACK_BUFFER,Te.byteLength,W.STREAM_READ),W.readPixels(K,se,oe,J,pt.convert(ct),pt.convert(at),0);const Et=O!==null?Qe.get(O).__webglFramebuffer:null;tt.bindFramebuffer(W.FRAMEBUFFER,Et);const Rt=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await Kc(W,Rt,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Ze),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Te),W.deleteBuffer(Ze),W.deleteSync(Rt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,K=null,se=0){R.isTexture!==!0&&(Ji("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,R=arguments[1]);const oe=Math.pow(2,-se),J=Math.floor(R.image.width*oe),Te=Math.floor(R.image.height*oe),Pe=K!==null?K.x:0,Ge=K!==null?K.y:0;F.setTexture2D(R,0),W.copyTexSubImage2D(W.TEXTURE_2D,se,0,0,Pe,Ge,J,Te),tt.unbindTexture()};const Cs=W.createFramebuffer(),Rs=W.createFramebuffer();this.copyTextureToTexture=function(R,K,se=null,oe=null,J=0,Te=null){R.isTexture!==!0&&(Ji("WebGLRenderer: copyTextureToTexture function signature has changed."),oe=arguments[0]||null,R=arguments[1],K=arguments[2],Te=arguments[3]||0,se=null),Te===null&&(J!==0?(Ji("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=J,J=0):Te=0);let Pe,Ge,$e,ct,at,Ze,Et,Rt,Vt;const Gt=R.isCompressedTexture?R.mipmaps[Te]:R.image;if(se!==null)Pe=se.max.x-se.min.x,Ge=se.max.y-se.min.y,$e=se.isBox3?se.max.z-se.min.z:1,ct=se.min.x,at=se.min.y,Ze=se.isBox3?se.min.z:0;else{const cn=Math.pow(2,-J);Pe=Math.floor(Gt.width*cn),Ge=Math.floor(Gt.height*cn),R.isDataArrayTexture?$e=Gt.depth:R.isData3DTexture?$e=Math.floor(Gt.depth*cn):$e=1,ct=0,at=0,Ze=0}oe!==null?(Et=oe.x,Rt=oe.y,Vt=oe.z):(Et=0,Rt=0,Vt=0);const At=pt.convert(K.format),et=pt.convert(K.type);let qt;K.isData3DTexture?(F.setTexture3D(K,0),qt=W.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(F.setTexture2DArray(K,0),qt=W.TEXTURE_2D_ARRAY):(F.setTexture2D(K,0),qt=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,K.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,K.unpackAlignment);const gt=W.getParameter(W.UNPACK_ROW_LENGTH),nn=W.getParameter(W.UNPACK_IMAGE_HEIGHT),ri=W.getParameter(W.UNPACK_SKIP_PIXELS),dn=W.getParameter(W.UNPACK_SKIP_ROWS),Bn=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,Gt.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Gt.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,ct),W.pixelStorei(W.UNPACK_SKIP_ROWS,at),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Ze);const It=R.isDataArrayTexture||R.isData3DTexture,sn=K.isDataArrayTexture||K.isData3DTexture;if(R.isDepthTexture){const cn=Qe.get(R),on=Qe.get(K),an=Qe.get(cn.__renderTarget),s=Qe.get(on.__renderTarget);tt.bindFramebuffer(W.READ_FRAMEBUFFER,an.__webglFramebuffer),tt.bindFramebuffer(W.DRAW_FRAMEBUFFER,s.__webglFramebuffer);for(let a=0;a<$e;a++)It&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Qe.get(R).__webglTexture,J,Ze+a),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Qe.get(K).__webglTexture,Te,Vt+a)),W.blitFramebuffer(ct,at,Pe,Ge,Et,Rt,Pe,Ge,W.DEPTH_BUFFER_BIT,W.NEAREST);tt.bindFramebuffer(W.READ_FRAMEBUFFER,null),tt.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(J!==0||R.isRenderTargetTexture||Qe.has(R)){const cn=Qe.get(R),on=Qe.get(K);tt.bindFramebuffer(W.READ_FRAMEBUFFER,Cs),tt.bindFramebuffer(W.DRAW_FRAMEBUFFER,Rs);for(let an=0;an<$e;an++)It?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,cn.__webglTexture,J,Ze+an):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,cn.__webglTexture,J),sn?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,on.__webglTexture,Te,Vt+an):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,on.__webglTexture,Te),J!==0?W.blitFramebuffer(ct,at,Pe,Ge,Et,Rt,Pe,Ge,W.COLOR_BUFFER_BIT,W.NEAREST):sn?W.copyTexSubImage3D(qt,Te,Et,Rt,Vt+an,ct,at,Pe,Ge):W.copyTexSubImage2D(qt,Te,Et,Rt,ct,at,Pe,Ge);tt.bindFramebuffer(W.READ_FRAMEBUFFER,null),tt.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else sn?R.isDataTexture||R.isData3DTexture?W.texSubImage3D(qt,Te,Et,Rt,Vt,Pe,Ge,$e,At,et,Gt.data):K.isCompressedArrayTexture?W.compressedTexSubImage3D(qt,Te,Et,Rt,Vt,Pe,Ge,$e,At,Gt.data):W.texSubImage3D(qt,Te,Et,Rt,Vt,Pe,Ge,$e,At,et,Gt):R.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Te,Et,Rt,Pe,Ge,At,et,Gt.data):R.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Te,Et,Rt,Gt.width,Gt.height,At,Gt.data):W.texSubImage2D(W.TEXTURE_2D,Te,Et,Rt,Pe,Ge,At,et,Gt);W.pixelStorei(W.UNPACK_ROW_LENGTH,gt),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,nn),W.pixelStorei(W.UNPACK_SKIP_PIXELS,ri),W.pixelStorei(W.UNPACK_SKIP_ROWS,dn),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Bn),Te===0&&K.generateMipmaps&&W.generateMipmap(qt),tt.unbindTexture()},this.copyTextureToTexture3D=function(R,K,se=null,oe=null,J=0){return R.isTexture!==!0&&(Ji("WebGLRenderer: copyTextureToTexture3D function signature has changed."),se=arguments[0]||null,oe=arguments[1]||null,R=arguments[2],K=arguments[3],J=arguments[4]||0),Ji('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,K,se,oe,J)},this.initRenderTarget=function(R){Qe.get(R).__webglFramebuffer===void 0&&F.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?F.setTextureCube(R,0):R.isData3DTexture?F.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?F.setTexture2DArray(R,0):F.setTexture2D(R,0),tt.unbindTexture()},this.resetState=function(){z=0,U=0,O=null,tt.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Lt._getUnpackColorSpace()}}var ti={cherry:14900586,blue:1401021,white:14209233,black:0,brown:5845806,peach:16767673,yellow:16776960,olive:5597999,grey:6908265,sand:12759680,brownDark:2300175,green:6723840},zn=Math.PI/180;function gm(i){var e,t,n,r,o,l,u,h,p,d,_,v,x,S,w;M();function M(){e=i._element,o=new Ts({alpha:!0,antialias:!0}),o.setSize(e.clientWidth,e.clientHeight),o.shadowMap.enabled=!0,e.appendChild(o.domElement),t=new Ms,S=4e4,t.fog=new ys(12245988,1,S),n=new fn(60,e.clientWidth/e.clientHeight,1,12e4),n.position.set(0,1500,-2e3),n.lookAt(new Z(0,600,-5e3)),window.camera=n,window.addEventListener("resize",I,!1),l=new Zl(16777215,16777215,1),t.add(l),r=new _m,t.add(r.element);var B=br(3e3,20,12e4,ti.sand,0,-400,-6e4);t.add(B),u=[],v=.2,x=.5;for(var z=10;z<40;z++)D(z*-3e3,v,.5,x);w=!1,h=!0;var U=37,O=38,C=39,b=80;const k=document.getElementById("btnLeft"),ee=document.getElementById("btnRight");k==null||k.addEventListener("click",function(){console.log("clickleft"),h&&!A()&&(h=!1,r.onUnpause()),h||r.onLeftKeyPressed()}),ee==null||ee.addEventListener("click",function(){console.log("clicRight"),h&&!A()&&(h=!1,r.onUnpause()),h||r.onRightKeyPressed()}),p={},document.addEventListener("keydown",function(Q){if(!w){var ue=Q.keyCode;if(p[ue]===!1)return;p[ue]=!1,h&&!A()&&ue>18?(h=!1,r.onUnpause()):(ue==b&&(h=!0,r.onPause(),i.output({msg:"Game is paused. Press any key to resume."})),ue==O&&!h&&r.onUpKeyPressed(),ue==U&&!h&&r.onLeftKeyPressed(),ue==C&&!h&&r.onRightKeyPressed())}}),document.addEventListener("keyup",function(Q){p[Q.keyCode]=!0}),document.addEventListener("focus",function(Q){p={}}),d=0,_=0,document.getElementById("score").innerHTML=d,g()}function g(){if(!h){if(u[u.length-1].mesh.position.z%3e3==0){_+=1;var B=30;if(_%B==0){var z=_/B;switch(z){case 1:v=.35,x=.5;break;case 2:v=.35,x=.85;break;case 3:v=.5,x=.85;break;case 4:v=.5,x=1.1;break;case 5:v=.5,x=1.1;break;case 6:v=.55,x=1.1;break;default:v=.55,x=1.25}}_>=5*B&&_<6*B?S-=25e3/B:_>=8*B&&_<9*B&&(S-=5e3/B),D(-12e4,v,.5,x),t.fog.far=S}if(u.forEach(function(Q){Q.mesh.position.z+=100}),u=u.filter(function(Q){return Q.mesh.position.z<0}),r.update(),A()){w=!0,h=!0,document.addEventListener("keydown",function(ue){ue.keyCode==40&&document.location.reload(!0)});let Q="Game over!";var U=["Typical Engineer","Couch Potato","Weekend Jogger","Daily Runner","Local Prospect","Regional Star","National Champ","Second Mo Farah"],O=Math.floor(d/15e3),C="";C=O<=6?"".concat(O*15,"k-",(O+1)*15,"k").bold():d<124e3?"105k-124k".bold():"124k+".bold();var b=O<=6?"Congrats! You're a ".concat(U[O],"!").bold():d<124e3?"Congrats! You're a ".concat(U[7],"!").bold():"Congrats! You exceeded the creator's high score of 123790 and beat the game!".bold();C=C+" "+b,d>=12e4&&(O=7);for(var k="",ee=0;ee<O;ee++)k=k+" "+"".concat(ee*15,"k-",(ee+1)*15,"k"),k=k+" "+U[ee];d>124e3&&(k=k+" 105k-124k",k=k+" "+U[7]),i.output({score:d,msg:[Q,C,k]})}d+=10,i.output({score:d})}o.render(t,n),requestAnimationFrame(g)}function I(){o.setSize(e.clientWidth,e.clientHeight),n.aspect=e.clientWidth/e.clientHeight,n.updateProjectionMatrix()}function D(B,z,U,O){for(var C=-1;C<2;C++){var b=Math.random();if(b<z){var k=U+(O-U)*Math.random(),ee=new vm(C*800,-400,B,k);u.push(ee),t.add(ee.mesh)}}}function A(){for(var B=r.element.position.x-115,z=r.element.position.x+115,U=r.element.position.y-310,O=r.element.position.y+320,C=r.element.position.z-40,b=r.element.position.z+40,k=0;k<u.length;k++)if(u[k].collides(B,z,U,O,C,b))return!0;return!1}}function _m(){var i=this;this.skinColor=ti.brown,this.hairColor=ti.black,this.shirtColor=ti.yellow,this.shortsColor=ti.olive,this.jumpDuration=.6,this.jumpHeight=2e3,e();function e(){i.face=br(100,100,60,i.skinColor,0,0,0),i.hair=br(105,20,65,i.hairColor,0,50,0),i.head=co(0,260,-25),i.head.add(i.face),i.head.add(i.hair),i.torso=br(150,190,40,i.shirtColor,0,100,0),i.leftLowerArm=t(20,120,30,i.skinColor,0,-170,0),i.leftArm=t(30,140,40,i.skinColor,-100,190,-10),i.leftArm.add(i.leftLowerArm),i.rightLowerArm=t(20,120,30,i.skinColor,0,-170,0),i.rightArm=t(30,140,40,i.skinColor,100,190,-10),i.rightArm.add(i.rightLowerArm),i.leftLowerLeg=t(40,200,40,i.skinColor,0,-200,0),i.leftLeg=t(50,170,50,i.shortsColor,-50,-10,30),i.leftLeg.add(i.leftLowerLeg),i.rightLowerLeg=t(40,200,40,i.skinColor,0,-200,0),i.rightLeg=t(50,170,50,i.shortsColor,50,-10,30),i.rightLeg.add(i.rightLowerLeg),i.element=co(0,0,-4e3),i.element.add(i.head),i.element.add(i.torso),i.element.add(i.leftArm),i.element.add(i.rightArm),i.element.add(i.leftLeg),i.element.add(i.rightLeg),i.isJumping=!1,i.isSwitchingLeft=!1,i.isSwitchingRight=!1,i.currentLane=0,i.runningStartTime=new Date/1e3,i.pauseStartTime=new Date/1e3,i.stepFreq=2,i.queuedActions=[]}function t(n,r,o,l,u,h,p){var d=co(u,h,p),_=-1*(Math.max(n,o)/2+r/2),v=br(n,r,o,l,0,_,0);return d.add(v),d}this.update=function(){var n=new Date/1e3;if(!i.isJumping&&!i.isSwitchingLeft&&!i.isSwitchingRight&&i.queuedActions.length>0)switch(i.queuedActions.shift()){case"up":i.isJumping=!0,i.jumpStartTime=new Date/1e3;break;case"left":i.currentLane!=-1&&(i.isSwitchingLeft=!0);break;case"right":i.currentLane!=1&&(i.isSwitchingRight=!0);break}if(i.isJumping){var r=n-i.jumpStartTime;i.element.position.y=i.jumpHeight*Math.sin(1/i.jumpDuration*Math.PI*r)+Tn(2*i.stepFreq,0,20,0,i.jumpStartTime-i.runningStartTime),r>i.jumpDuration&&(i.isJumping=!1,i.runningStartTime+=i.jumpDuration)}else{var o=n-i.runningStartTime;if(i.element.position.y=Tn(2*i.stepFreq,0,20,0,o),i.head.rotation.x=Tn(2*i.stepFreq,-10,-5,0,o)*zn,i.torso.rotation.x=Tn(2*i.stepFreq,-10,-5,180,o)*zn,i.leftArm.rotation.x=Tn(i.stepFreq,-70,50,180,o)*zn,i.rightArm.rotation.x=Tn(i.stepFreq,-70,50,0,o)*zn,i.leftLowerArm.rotation.x=Tn(i.stepFreq,70,140,180,o)*zn,i.rightLowerArm.rotation.x=Tn(i.stepFreq,70,140,0,o)*zn,i.leftLeg.rotation.x=Tn(i.stepFreq,-20,80,0,o)*zn,i.rightLeg.rotation.x=Tn(i.stepFreq,-20,80,180,o)*zn,i.leftLowerLeg.rotation.x=Tn(i.stepFreq,-130,5,240,o)*zn,i.rightLowerLeg.rotation.x=Tn(i.stepFreq,-130,5,60,o)*zn,i.isSwitchingLeft){i.element.position.x-=200;var l=i.currentLane*800-i.element.position.x;l>800&&(i.currentLane-=1,i.element.position.x=i.currentLane*800,i.isSwitchingLeft=!1)}if(i.isSwitchingRight){i.element.position.x+=200;var l=i.element.position.x-i.currentLane*800;l>800&&(i.currentLane+=1,i.element.position.x=i.currentLane*800,i.isSwitchingRight=!1)}}},this.onLeftKeyPressed=function(){i.queuedActions.push("left")},this.onUpKeyPressed=function(){i.queuedActions.push("up")},this.onRightKeyPressed=function(){i.queuedActions.push("right")},this.onPause=function(){i.pauseStartTime=new Date/1e3},this.onUnpause=function(){var n=new Date/1e3,r=n-i.pauseStartTime;i.runningStartTime+=r,i.isJumping&&(i.jumpStartTime+=r)}}function vm(i,e,t,n){var r=this;this.mesh=new Qt;var o=as(1,300,300,4,ti.green,0,1e3,0),l=as(1,400,400,4,ti.green,0,800,0),u=as(1,500,500,4,ti.green,0,500,0),h=as(100,100,250,32,ti.brownDark,0,125,0);this.mesh.add(o),this.mesh.add(l),this.mesh.add(u),this.mesh.add(h),this.mesh.position.set(i,e,t),this.mesh.scale.set(n,n,n),this.scale=n,this.collides=function(p,d,_,v,x,S){var w=r.mesh.position.x-this.scale*250,M=r.mesh.position.x+this.scale*250,g=r.mesh.position.y,I=r.mesh.position.y+this.scale*1150,D=r.mesh.position.z-this.scale*250,A=r.mesh.position.z+this.scale*250;return w<=d&&M>=p&&g<=v&&I>=_&&D<=S&&A>=x}}function Tn(i,e,t,n,r){var o=.5*(t-e),l=2*Math.PI*i,u=n*Math.PI/180,h=o*Math.sin(l*r+u),p=(e+t)/2;return p+h}function co(i,e,t){var n=new Qi;return n.position.set(i,e,t),n}function br(i,e,t,n,r,o,l,u){var h=new vi(i,e,t),p=new mi({color:n,flatShading:u!=!0}),d=new Jt(h,p);return d.castShadow=!0,d.receiveShadow=!0,d.position.set(r,o,l),d}function as(i,e,t,n,r,o,l,u){var h=new Ur(i,e,t,n),p=new mi({color:r,flatShading:!0}),d=new Jt(h,p);return d.castShadow=!0,d.receiveShadow=!0,d.position.set(o,l,u),d}function xm({_element:i,output:e}){const t=i;let n=0,r=new Ms,o=new fn(75,t.clientWidth/t.clientHeight,.1,1e3),l=new Ts;l.setSize(t.clientWidth,t.clientHeight),t.appendChild(l.domElement);const u=new gn,h=new ua({color:16777215}),p=[];for(let c=0;c<1e3;c++){const Ue=(Math.random()-.5)*200,We=(Math.random()-.5)*200,rt=(Math.random()-.5)*200;p.push(Ue,We,rt)}u.setAttribute("position",new jt(p,3));const d=new Yl(u,h);r.add(d);const _=new da(2,.5,16,100),v=new Ar({color:65280}),x=new Jt(_,v);r.add(x),new Ur(1,1,.1,32),new Ar({color:255});const S=new Ss(1.5,32,32),w=new Ar({color:255}),M=new Jt(S,w);M.rotation.x=Math.PI/2,M.position.z=-10,r.add(M),o.position.z=5;let g=!1,I=!1,D=!1,A=5,B=5;e({score:0,msg:[`Speed: ${B}`]});const z=new Hands({locateFile:c=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${c}`});z.setOptions({maxNumHands:1,modelComplexity:1,minDetectionConfidence:.5,minTrackingConfidence:.5}),z.onResults(U);function U(c){if(c.multiHandLandmarks&&c.multiHandLandmarks.length>0){const We=c.multiHandLandmarks[0][0],rt=(We.x-.5)*20,Ct=(.5-We.y)*20;M.position.x=rt,M.position.y=Ct}}const O=()=>{const c=document.querySelector("#speed");c&&(c.innerHTML=`speed is ${B}`)},C=c=>(n=c,e({score:c,msg:[`Speed: ${B}`]}),n);function b(){x.position.z=-50,D?(x.position.x=0,x.position.y=0,D=!1):(x.position.x=(Math.random()-.5)*10,x.position.y=(Math.random()-.5)*10)}function k(){const c=Math.sqrt(Math.pow(M.position.x-x.position.x,2)+Math.pow(M.position.y-x.position.y,2));Math.abs(M.position.z-x.position.z)<.1&&c<1.5&&(console.log("Il disco è passato attraverso la ciambella!"),I||(B=B+A,C(n+1),I=!0))}function ee(){return B/100}window.addEventListener("resize",()=>{o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)});function Q(c){c==="KeyS"?(g=!g,console.log("s",g)):c==="KeyA"?(B=B+A,O()):c==="KeyD"?(B=B-A,O()):c==="KeyR"?D=!0:c==="ArrowLeft"?M.position.x-=1:c==="ArrowRight"?M.position.x+=1:c==="ArrowUp"?M.position.y+=1:c==="ArrowDown"&&(M.position.y-=1)}function ue(){requestAnimationFrame(ue),g||(x.position.z+=ee()),k(),x.position.z>o.position.z+5&&(I=!1,b()),d.position.z+=.1,d.position.z>50&&(d.position.z=-50),l.render(r,o)}function ve(){Q("ArrowLeft")}function X(){Q("ArrowRight")}function Me(){Q("ArrowUp")}function he(){Q("ArrowDown")}return{animate:ue,clickLeft:ve,clickRight:X,clickUp:Me,clickDown:he}}function ym(i){const e=document.createElement("script");e.src=window.location.href+"/assets/js/Box2dWeb.min.js",e.onload=i,document.head.appendChild(e)}function Mm(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),o={},l={},u=i[0].morphTargetsRelative,h=new gn;let p=0;for(let d=0;d<i.length;++d){const _=i[d];let v=0;if(t!==(_.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const x in _.attributes){if(!n.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+x+'" attribute exists among all geometries, or in none of them.'),null;o[x]===void 0&&(o[x]=[]),o[x].push(_.attributes[x]),v++}if(v!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(u!==_.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const x in _.morphAttributes){if(!r.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;l[x]===void 0&&(l[x]=[]),l[x].push(_.morphAttributes[x])}if(e){let x;if(t)x=_.index.count;else if(_.attributes.position!==void 0)x=_.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;h.addGroup(p,x,d),p+=x}}if(t){let d=0;const _=[];for(let v=0;v<i.length;++v){const x=i[v].index;for(let S=0;S<x.count;++S)_.push(x.getX(S)+d);d+=i[v].attributes.position.count}h.setIndex(_)}for(const d in o){const _=vl(o[d]);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;h.setAttribute(d,_)}for(const d in l){const _=l[d][0].length;if(_===0)break;h.morphAttributes=h.morphAttributes||{},h.morphAttributes[d]=[];for(let v=0;v<_;++v){const x=[];for(let w=0;w<l[d].length;++w)x.push(l[d][w][v]);const S=vl(x);if(!S)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;h.morphAttributes[d].push(S)}}return h}function vl(i){let e,t,n,r=-1,o=0;for(let p=0;p<i.length;++p){const d=i[p];if(e===void 0&&(e=d.array.constructor),e!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=d.itemSize),t!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=d.normalized),n!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=d.gpuType),r!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=d.count*t}const l=new e(o),u=new Fn(l,t,n);let h=0;for(let p=0;p<i.length;++p){const d=i[p];if(d.isInterleavedBufferAttribute){const _=h/t;for(let v=0,x=d.count;v<x;v++)for(let S=0;S<t;S++){const w=d.getComponent(v,S);u.setComponent(v+_,S,w)}}else l.set(d.array,h);h+=d.count*t}return r!==void 0&&(u.gpuType=r),u}const Sm="/assets/ball-C-u-DUMM.png",Em="/assets/brick-BH4AW7an.png",Tm="/assets/concrete-BPIsGCxW.png";let hi,Er;function bm(i){function e(o,l,u){for(o[l][u]=!1;;){if(hi=[],l>1&&o[l-2][u]==!0&&hi.push([-1,0]),l<o.dimension-2&&o[l+2][u]==!0&&hi.push([1,0]),u>1&&o[l][u-2]==!0&&hi.push([0,-1]),u<o.dimension-2&&o[l][u+2]==!0&&hi.push([0,1]),hi.length==0)return o;Er=hi[Math.floor(Math.random()*hi.length)],o[l+Er[0]][u+Er[1]]=!1,o=e(o,l+Er[0]*2,u+Er[1]*2)}}var t=new Array(i);t.dimension=i;for(var n=0;n<i;n++){t[n]=new Array(i);for(var r=0;r<i;r++)t[n][r]=!0}return t=e(t,1,1),t}function wm(i,e){let t=0;const n=10,r=i;let o,l,u,h,p,d,_=!1,v=!1,x=!1,S=!1;var w=void 0,M=void 0,g=void 0,I=void 0,D=void 0,A=void 0,B=11,z=void 0,U=void 0,O=.25,C=[0,0],b=new Qs().load(window.location.href+Sm),k=new Qs().load(window.location.href+Tm),ee=new Qs().load(window.location.href+Em),Q=void 0,ue=Box2D.Dynamics.b2World,ve=Box2D.Dynamics.b2FixtureDef,X=Box2D.Dynamics.b2BodyDef,Me=Box2D.Dynamics.b2Body,he=Box2D.Collision.Shapes.b2CircleShape,c=Box2D.Collision.Shapes.b2PolygonShape;Box2D.Common.b2Settings;var Ue=Box2D.Common.Math.b2Vec2,We=void 0,rt=void 0;function Ct(){We=new ue(new Ue(0,0),!0);var le=new X;le.type=Me.b2_dynamicBody,le.position.Set(1,1),rt=We.CreateBody(le);var me=new ve;me.density=1,me.friction=0,me.restitution=.25,me.shape=new he(O),rt.CreateFixture(me),le.type=Me.b2_staticBody,me.shape=new c,me.shape.SetAsBox(.5,.5);for(var ce=0;ce<D.dimension;ce++)for(var Ye=0;Ye<D.dimension;Ye++)D[ce][Ye]&&(le.position.x=ce,le.position.y=Ye,We.CreateBody(le).CreateFixture(me))}function ge(le){const me=[],ce=new vi(1,1,1);for(let mt=0;mt<le.dimension;mt++)for(let Ee=0;Ee<le.dimension;Ee++)if(le[mt][Ee]){const He=new kt;He.makeTranslation(mt,Ee,.5);const st=ce.clone();st.applyMatrix4(He),me.push(st)}const Ye=Mm(me),Le=new mi({map:ee});return new Jt(Ye,Le)}function be(){M=new Ms,I=new Lu(16777215,1),I.position.set(1,1,1.3),M.add(I),o=new Ss(O,32,16),l=new mi({map:b}),U=new Jt(o,l),U.position.set(1,1,O),M.add(U);var le=window.innerWidth/window.innerHeight;w=new fn(60,le,1,1e3),w.position.set(1,1,5),M.add(w),A=ge(D),M.add(A),o=new Nr(B*10,B*10,B,B),k.wrapS=k.wrapT=ms,k.repeat.set(B*5,B*5),l=new mi({map:k}),z=new Jt(o,l),z.position.set((B-1)/2,(B-1)/2,0),z.rotation.set(Math.PI/2,0,0),M.add(z)}function Ke(){var le=rt.GetLinearVelocity();le.Multiply(.95),rt.SetLinearVelocity(le);var me=new Ue(C[0]*rt.GetMass()*.25*8,C[1]*rt.GetMass()*.25*8);rt.ApplyImpulse(me,rt.GetPosition()),C=[0,0],We.Step(1/60,8,3)}function Re(){var le=rt.GetPosition().x-U.position.x,me=rt.GetPosition().y-U.position.y;U.position.x+=le,U.position.y+=me;var ce=new kt;ce.makeRotationAxis(new Z(0,1,0),le/O),ce.multiply(U.matrix),U.matrix=ce,ce=new kt,ce.makeRotationAxis(new Z(1,0,0),-me/O),ce.multiply(U.matrix),U.matrix=ce,U.rotation.setFromRotationMatrix(U.matrix),w.position.x+=(U.position.x-w.position.x)*.1,w.position.y+=(U.position.y-w.position.y)*.1,w.position.z+=(5-w.position.z)*.1,I.position.x=w.position.x,I.position.y=w.position.y,I.position.z=w.position.z-3.7}function ot(){switch(Q){case"initialize":D=bm(B),D[B-1][B-2]=!1,Ct(),be(),w.position.set(1,1,5),I.position.set(1,1,1.3),I.intensity=0;var le=Math.floor((B-1)/2-4);e({msg:["Level "+le]}),Q="fade in";break;case"fade in":I.intensity+=.1*(1-I.intensity),g.render(M,w),Math.abs(I.intensity-1)<.05&&(I.intensity=1,Q="play");break;case"play":Ke(),Re(),g.render(M,w);var me=Math.floor(U.position.x+.5),ce=Math.floor(U.position.y+.5);me==B&&ce==B-2&&(B+=2,Q="fade out");break;case"fade out":Ke(),Re(),I.intensity+=.1*(0-I.intensity),g.render(M,w),Math.abs(I.intensity-0)<.1&&(I.intensity=0,g.render(M,w),Q="initialize");break}t++,t%n===0&&x&&zt(),t%n===0&&S&&ht(),t%n===0&&_&&W(),t%n===0&&v&&Kt(),requestAnimationFrame(ot)}function ut(){g.setSize(window.innerWidth,window.innerHeight),w.aspect=window.innerWidth/window.innerHeight,w.updateProjectionMatrix()}function dt(le){C=le.slice(0)}jQuery.fn.centerv=function(){return u=window.innerHeight,h=this.outerHeight(),this.css("position","absolute"),this.css("top",Math.max(0,(u-h)/2)+"px"),this},jQuery.fn.centerh=function(){return p=window.innerWidth,d=this.outerWidth(),this.css("position","absolute"),this.css("left",Math.max(0,(p-d)/2)+"px"),this},jQuery.fn.center=function(){return this.centerv(),this.centerh(),this};function Nt(){g=new Ts,g.setSize(r.clientWidth,r.clientHeight),r.appendChild(g.domElement),$(window).resize(ut),Q="initialize",requestAnimationFrame(ot)}function ht(){dt([-1,0])}function zt(){dt([1,0])}function W(){dt([0,1])}function Kt(){dt([0,-1])}function xt(){S=!0}function yt(){x=!0}function tt(){_=!0}function Dt(){v=!0}function Qe(){S=!1}function F(){x=!1}function T(){_=!1}function te(){v=!1}return{start:Nt,clickLeft:ht,clickRight:zt,clickUp:W,clickDown:Kt,touchStartLeft:xt,touchStartight:yt,touchStartckUp:tt,touchStartDown:Dt,touchEndLeft:Qe,touchEndight:F,touchEndckUp:T,touchEndDown:te}}const Cn={cherry:14900586,blue:1401021,white:14209233,black:0,brown:5845806,peach:16767673,yellow:16776960,olive:5597999,grey:6908265,sand:12759680,brownDark:2300175,green:6723840,grayDark:6908265},kn=Math.PI/180;class uo{constructor(e,t,n,r){Ve(this,"mesh");Ve(this,"scale");this.x=e,this.y=t,this.z=n,this.s=r,this.mesh=new Qt;const o=new fa(600,1),l=o.attributes.position.array;for(let p=0;p<l.length;p+=3)l[p]+=Math.random()*50-25,l[p+1]+=Math.random()*50-25,l[p+2]+=Math.random()*50-25;o.computeVertexNormals();const u=new mi({color:Cn.blue,flatShading:!0}),h=new Jt(o,u);h.castShadow=!0,h.receiveShadow=!0,this.mesh.add(h),this.mesh.position.set(e,t,n),this.mesh.scale.set(r,r,r),this.scale=r}collides(e,t,n,r,o,l){const u=this.mesh.position.x-this.scale*250,h=this.mesh.position.x+this.scale*250,p=this.mesh.position.y,d=this.mesh.position.y+this.scale*1150,_=this.mesh.position.z-this.scale*250,v=this.mesh.position.z+this.scale*250;return u<=t&&h>=e&&p<=r&&d>=n&&_<=l&&v>=o}}function bn(i,e,t,n,r){const o=.5*(t-e),l=2*Math.PI*i,u=n*Math.PI/180,h=o*Math.sin(l*r+u);return(e+t)/2+h}function ho(i,e,t){const n=new Qi;return n.position.set(i,e,t),n}function wr(i,e,t,n,r,o,l,u){const h=new vi(i,e,t),p=new mi({color:n,flatShading:u!=!0}),d=new Jt(h,p);return d.castShadow=!0,d.receiveShadow=!0,d.position.set(r,o,l),d}function ls(i,e,t,n,r,o,l,u){const h=new Ur(i,e,t,n),p=new mi({color:r,flatShading:!0}),d=new Jt(h,p);return d.castShadow=!0,d.receiveShadow=!0,d.position.set(o,l,u),d}class Am{constructor(){Ve(this,"skinColor");Ve(this,"hairColor");Ve(this,"shirtColor");Ve(this,"shortsColor");Ve(this,"jumpDuration");Ve(this,"jumpHeight");Ve(this,"face");Ve(this,"hair");Ve(this,"head");Ve(this,"torso");Ve(this,"leftLowerArm");Ve(this,"leftArm");Ve(this,"rightLowerArm");Ve(this,"rightArm");Ve(this,"leftLowerLeg");Ve(this,"leftLeg");Ve(this,"rightLowerLeg");Ve(this,"rightLeg");Ve(this,"element");Ve(this,"isJumping",!1);Ve(this,"isSwitchingLeft",!1);Ve(this,"isSwitchingRight",!1);Ve(this,"currentLane",0);Ve(this,"runningStartTime",0);Ve(this,"pauseStartTime",0);Ve(this,"stepFreq",0);Ve(this,"queuedActions",[]);Ve(this,"jumpStartTime",0);this.skinColor=Math.random()>.4?Cn.brown:Cn.white,this.hairColor=Cn.black,this.shirtColor=Math.random()>.4?Cn.blue:Cn.yellow,this.shortsColor=Cn.olive,this.jumpDuration=.6,this.jumpHeight=2e3}init(){this.face=wr(100,100,60,this.skinColor,0,0,0),this.hair=wr(105,20,65,this.hairColor,0,50,0),this.head=ho(0,260,-25),this.head.add(this.face),this.head.add(this.hair),this.torso=wr(150,190,40,this.shirtColor,0,100,0),this.leftLowerArm=this.createLimb(20,120,30,this.skinColor,0,-170,0),this.leftArm=this.createLimb(30,140,40,this.skinColor,-100,190,-10),this.leftArm.add(this.leftLowerArm),this.rightLowerArm=this.createLimb(20,120,30,this.skinColor,0,-170,0),this.rightArm=this.createLimb(30,140,40,this.skinColor,100,190,-10),this.rightArm.add(this.rightLowerArm),this.leftLowerLeg=this.createLimb(40,200,40,this.skinColor,0,-200,0),this.leftLeg=this.createLimb(50,170,50,this.shortsColor,-50,-10,30),this.leftLeg.add(this.leftLowerLeg),this.rightLowerLeg=this.createLimb(40,200,40,this.skinColor,0,-200,0),this.rightLeg=this.createLimb(50,170,50,this.shortsColor,50,-10,30),this.rightLeg.add(this.rightLowerLeg),this.element=ho(0,0,-4e3),this.element.add(this.head),this.element.add(this.torso),this.element.add(this.leftArm),this.element.add(this.rightArm),this.element.add(this.leftLeg),this.element.add(this.rightLeg),this.isJumping=!1,this.isSwitchingLeft=!1,this.isSwitchingRight=!1,this.currentLane=0,this.runningStartTime=new Date().getTime()/1e3,this.pauseStartTime=new Date().getTime()/1e3,this.stepFreq=2,this.queuedActions=[]}createLimb(e,t,n,r,o,l,u){var h=ho(o,l,u),p=-1*(Math.max(e,n)/2+t/2),d=wr(e,t,n,r,0,p,0);return h.add(d),h}update(){const e=new Date().getTime()/1e3;if(!this.isJumping&&!this.isSwitchingLeft&&!this.isSwitchingRight&&this.queuedActions.length>0)switch(this.queuedActions.shift()){case"up":this.isJumping=!0,this.jumpStartTime=new Date().getTime()/1e3;break;case"left":this.currentLane!=-1&&(this.isSwitchingLeft=!0);break;case"right":this.currentLane!=1&&(this.isSwitchingRight=!0);break}if(this.isJumping){var t=e-this.jumpStartTime;this.element.position.y=this.jumpHeight*Math.sin(1/this.jumpDuration*Math.PI*t)+bn(2*this.stepFreq,0,20,0,this.jumpStartTime-this.runningStartTime),t>this.jumpDuration&&(this.isJumping=!1,this.runningStartTime+=this.jumpDuration)}else{var n=e-this.runningStartTime;if(this.element.position.y=bn(2*this.stepFreq,0,20,0,n),this.head.rotation.x=bn(2*this.stepFreq,-10,-5,0,n)*kn,this.torso.rotation.x=bn(2*this.stepFreq,-10,-5,180,n)*kn,this.leftArm.rotation.x=bn(this.stepFreq,-70,50,180,n)*kn,this.rightArm.rotation.x=bn(this.stepFreq,-70,50,0,n)*kn,this.leftLowerArm.rotation.x=bn(this.stepFreq,70,140,180,n)*kn,this.rightLowerArm.rotation.x=bn(this.stepFreq,70,140,0,n)*kn,this.leftLeg.rotation.x=bn(this.stepFreq,-20,80,0,n)*kn,this.rightLeg.rotation.x=bn(this.stepFreq,-20,80,180,n)*kn,this.leftLowerLeg.rotation.x=bn(this.stepFreq,-130,5,240,n)*kn,this.rightLowerLeg.rotation.x=bn(this.stepFreq,-130,5,60,n)*kn,this.isSwitchingLeft){this.element.position.x-=200;var r=this.currentLane*800-this.element.position.x;r>800&&(this.currentLane-=1,this.element.position.x=this.currentLane*800,this.isSwitchingLeft=!1)}if(this.isSwitchingRight){this.element.position.x+=200;var r=this.element.position.x-this.currentLane*800;r>800&&(this.currentLane+=1,this.element.position.x=this.currentLane*800,this.isSwitchingRight=!1)}}}onLeftKeyPressed(){this.queuedActions.push("left")}onUpKeyPressed(){this.queuedActions.push("up")}onRightKeyPressed(){this.queuedActions.push("right")}onPause(){this.pauseStartTime=new Date().getTime()/1e3}onUnpause(){var e=new Date().getTime()/1e3,t=e-this.pauseStartTime;this.runningStartTime+=t,this.isJumping&&(this.jumpStartTime+=t)}}class xl{constructor(e,t,n,r){Ve(this,"mesh");Ve(this,"scale");this.x=e,this.y=t,this.z=n,this.s=r,this.mesh=new Qt;const o=ls(1,300,300,4,Cn.green,0,1e3,0),l=ls(1,400,400,4,Cn.green,0,800,0),u=ls(1,500,500,4,Cn.green,0,500,0),h=ls(100,100,250,32,Cn.brownDark,0,125,0);this.mesh.add(o),this.mesh.add(l),this.mesh.add(u),this.mesh.add(h),this.mesh.position.set(e,t,n),this.mesh.scale.set(r,r,r),this.scale=r}collides(e,t,n,r,o,l){const u=this.mesh.position.x-this.scale*250,h=this.mesh.position.x+this.scale*250,p=this.mesh.position.y,d=this.mesh.position.y+this.scale*1150,_=this.mesh.position.z-this.scale*250,v=this.mesh.position.z+this.scale*250;return u<=t&&h>=e&&p<=r&&d>=n&&_<=l&&v>=o}}const Cm="We thank Wan Fung Chui for the inspiration.",yl=37,Ml=38,Sl=39,Rm=80,Pi=1500,Lm=60,fo=20,Pm=.15;class Dm{constructor(e,t,n){Ve(this,"mesh");Ve(this,"x");Ve(this,"y");Ve(this,"z");Ve(this,"s");this.mesh=wr(3e3,20,Pi,Cn.cherry,e,t,n)}collides(e,t,n,r,o,l){let u=this.mesh.position.x-Pi/2,h=this.mesh.position.x+Pi/2,p=this.mesh.position.z-Pi/2,d=this.mesh.position.z+Pi/2;return t>u&&e<h&&l>p&&o<d}}class Im{constructor(e){Ve(this,"isFallIntoGap",!1);Ve(this,"element");Ve(this,"scene");Ve(this,"camera");Ve(this,"character");Ve(this,"renderer");Ve(this,"light");Ve(this,"stars");Ve(this,"objects",[]);Ve(this,"grounds",[]);Ve(this,"paused",!1);Ve(this,"keysAllowed",{});Ve(this,"score");Ve(this,"difficulty");Ve(this,"treePresenceProb");Ve(this,"maxTreeSize");Ve(this,"gameOver");Ve(this,"fogDistance");Ve(this,"holePositions",{});Ve(this,"obstacolePosition",{});Ve(this,"typeOfObstacole","ast");Ve(this,"_output");Ve(this,"timer",0);Ve(this,"onPause",()=>{console.warn("noPauseDefined")});Ve(this,"onResume",()=>{console.warn("noResumeDefined")});Ve(this,"onCollisionDetected",e=>{console.warn("onCollisionDetected")});Ve(this,"onScoreChanged",e=>{console.warn("onCollisionDetected")});Ve(this,"keyUp",e=>{this.keysAllowed[e.keyCode]=!0});Ve(this,"onFocus",()=>{this.keysAllowed={}});Ve(this,"onKeyDown",e=>{console.log("onKeyDownPressed",e);const t=e.keyCode;this.handleKeyPress(t)});this.element=e._element,this._output=e.output,this.renderer=new Ts({alpha:!0,antialias:!0}),this.renderer.setSize(this.element.clientWidth,this.element.clientHeight),this.renderer.shadowMap.enabled=!0,this.element.appendChild(this.renderer.domElement),this.scene=new Ms,this.fogDistance=4e4,this.scene.fog=new ys(16777215,1,this.fogDistance),this.camera=new fn(60,this.element.clientWidth/this.element.clientHeight,1,12e4),this.camera.position.set(0,1500,-2e3),this.camera.lookAt(new Z(0,600,-5e3)),window.addEventListener("resize",this.handleWindowResize.bind(this),!1),this.light=new Zl(16777215,16777215,1),this.scene.add(this.light),this.addPlayer(this.scene),this.updateStreets(0),this.addStarsBackground(this.scene),this.objects=[],this.treePresenceProb=.2,this.maxTreeSize=.5,this.createInitialCollisionObject(),this.gameOver=!1,this.paused=!0,this.keysAllowed={},this.score=0,this.difficulty=0,document.addEventListener("keydown",this.onKeyDown),document.addEventListener("keyup",this.keyUp),document.addEventListener("focus",this.onFocus)}updateStreets(e){let t=fo;for(let n=0;n<=Lm;n++){const r=e-Pi*n;let o=Math.random()<Pm,l;n>fo&&o&&t>=fo?(l=!1,t=0):(l=!0,t++),this.createRowOfGround(r,l),this.holePositions[r]=!l}}createRowOfGround(e,t){if(!t)return;const n=new Dm(0,-700,e);this.grounds.push(n),this.scene.add(n.mesh)}addPlayer(e){this.character=new Am,this.character.init(),e.add(this.character.element)}addStarsBackground(e){const t=new gn,n=new ua({color:16777215,size:5}),r=[];for(let o=0;o<1e4;o++){const l=(Math.random()-.5)*2e5,u=(Math.random()-.5)*2e5,h=(Math.random()-.5)*2e5;r.push(l,u,h)}t.setAttribute("position",new jt(r,3)),this.stars=new Yl(t,n),e.add(this.stars)}setOnPause(e){this.onPause=e}setOnResume(e){this.onResume=e}setOnCollisionDetected(e){this.onCollisionDetected=e}setOnScoreChanged(e){this.onScoreChanged=e}init(){this.loop()}moveStars(){this.stars.position.z+=.1,this.stars.position.z>50&&(this.stars.position.z=-50)}loop(){if(this.timer++,this.timer>50&&this.timer<100&&this._output({msg:[Cm]}),!this.paused){if(this.objects.length>0&&this.objects[this.objects.length-1].mesh.position.z%Pi===0&&(this.difficulty+=1,this.calculateFogDistance(),this.createRowOfAsteroid({position:-12e4,probability:this.treePresenceProb,minScale:.5,maxScale:this.maxTreeSize}),this.scene.fog.far=this.fogDistance),this.objects.forEach(function(t){t.mesh.position.z+=100}),this.objects=this.objects.filter(function(t){return t.mesh.position.z<0}),this.grounds.forEach(function(t){t.mesh.position.z+=100}),this.grounds=this.grounds.filter(function(t){return t.mesh.position.z<0}),this.grounds.length<20){const n=this.grounds[this.grounds.length-1].mesh.position.z;this.updateStreets(n)}this.character.update(),this.checkFallIntoGap()?(this.isFallIntoGap=!0,this.onCollisionDetected({score:this.score,msg:["Saresti caduto... ma sei superman"]})):this.collisionsDetected()&&(this.gameOver=!0,this.paused=!0,this.printInfo()),!this.isFallIntoGap&&this.timer%150===0&&this.printInfo(!1),this.score+=10,this.onScoreChanged(this.score)}this.moveStars(),this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.loop.bind(this))}printInfo(e=!0){const t=e?"Game over!":"";let n=["Typical Engineer","Couch Potato","Weekend Jogger","Daily Runner","Local Prospect","Regional Star","National Champ","Second Mo Farah"],r=Math.floor(this.score/15e3);this.score<124e3;var o="";o=r<=6?"".concat(r*15+"","k-",(r+1)*15+"","k").bold():this.score<124e3?"105k-124k".bold():"124k+".bold();var l=r<=6?"Congrats! You're a ".concat(n[r],"!").bold():this.score<124e3?"Congrats! You're a ".concat(n[7],"!").bold():"Congrats! You exceeded the creator's high score of 123790 and beat the game!".bold();o=o+" "+l,this.score>=12e4&&(r=7);for(var u="",h=0;h<r;h++)u=u+" "+"".concat(h*15+"","k-",(h+1)*15+"","k"),u=u+" "+n[h];this.score>124e3&&(u=u+" 105k-124k",u=u+" "+n[7]),this.onCollisionDetected({score:this.score/15e3,msg:[t,o,u]})}calculateFogDistance(){if(this.difficulty%30==0)switch(this.difficulty/30){case 1:this.treePresenceProb=.35,this.maxTreeSize=.5;break;case 2:this.treePresenceProb=.35,this.maxTreeSize=.85;break;case 3:this.treePresenceProb=.5,this.maxTreeSize=.85;break;case 4:this.treePresenceProb=.5,this.maxTreeSize=1.1;break;case 5:this.treePresenceProb=.5,this.maxTreeSize=1.1;break;case 6:this.treePresenceProb=.55,this.maxTreeSize=1.1;break;default:this.treePresenceProb=.55,this.maxTreeSize=1.15}this.difficulty>=5*30&&this.difficulty<6*30?this.fogDistance-=25e3/30:this.difficulty>=8*30&&this.difficulty<9*30&&(this.fogDistance-=5e3/30)}createInitialCollisionObject(){for(let e=0;e<60;e++){const t=e*-3e3;this.createRowOfAsteroid({position:t,probability:this.treePresenceProb,minScale:.5,maxScale:this.maxTreeSize})}}handleWindowResize(){this.renderer.setSize(this.element.clientWidth,this.element.clientHeight),this.camera.aspect=this.element.clientWidth/this.element.clientHeight,this.camera.updateProjectionMatrix()}createRowOfAsteroid(e){const{position:t,probability:n,minScale:r,maxScale:o}=e;this.typeOfObstacole==="tree"?this.typeOfObstacole="ast":this.typeOfObstacole="tree";let l=0;for(let u=-1;u<2;u++)if(Math.random()<n){if(this.score<124e3&&l>0)continue;const p=r+(o-r)*Math.random();l++;let d;d=new uo(u*800,0,t,p),this.typeOfObstacole==="tree"?d=new uo(u*800,0,t,p):d=new xl(u*800,-400,t,p),this.objects.push(d),this.scene.add(d.mesh),this.obstacolePosition[t]=!0}}createRowOfAsteroidOld(e){const{position:t,probability:n,minScale:r,maxScale:o}=e;for(let l=-1;l<2;l++)if(Math.random()<n){const h=r+(o-r)*Math.random(),p=new uo(l*800,0,t,h);this.objects.push(p),this.scene.add(p.mesh),this.obstacolePosition[t]=!0}}collisionsDetected(){const e=this.character.element.position.x-115,t=this.character.element.position.x+115,n=this.character.element.position.y-310,r=this.character.element.position.y+320,o=this.character.element.position.z-40,l=this.character.element.position.z+40;for(let u=0;u<this.objects.length;u++)if(this.objects[u].collides(e,t,n,r,o,l))return!0;return!1}checkFallIntoGap(){const e=this.character.element.position.x-115,t=this.character.element.position.x+115,n=this.character.element.position.y-310,r=this.character.element.position.y+320,o=this.character.element.position.z-40,l=this.character.element.position.z+40;let u=!1;for(let h=0;h<this.grounds.length;h++)if(this.grounds[h].collides(e,t,n,r,o,l)){u=!0;break}return!u&&this.character.element.position.y<=400?(console.log("caduto"),!0):!1}clickLeft(){console.log("clickLeft"),this.handleKeyPress(yl)}clickRight(){console.log("clickRight"),this.handleKeyPress(Sl)}clickUp(){console.log("clickUp"),this.handleKeyPress(Ml)}handleKeyPress(e){if(console.log("key",e),!this.gameOver){if(this.paused&&!this.collisionsDetected()&&e>18){this.paused=!1,this.character.onUnpause(),this.onResume();return}if(e===Rm){this.paused=!0,this.character.onPause(),this.onPause();return}if(e===Ml&&!this.paused){this.character.onUpKeyPressed();return}if(e===yl&&!this.paused){this.character.onLeftKeyPressed();return}if(e===Sl&&!this.paused){this.character.onRightKeyPressed();return}}}createRowOfTrees(e){const{position:t,probability:n,minScale:r,maxScale:o}=e;for(let l=-1;l<2;l++)if(Math.random()<n){const h=r+(o-r)*Math.random(),p=new xl(l*800,-400,t,h);this.objects.push(p),this.scene.add(p.mesh)}}}let wn=null;function Um(){const i=document.getElementById("arcade-area"),e=document==null?void 0:document.getElementById("gameOneBtn"),t=document==null?void 0:document.getElementById("gameSpaceRunBtn"),n=document==null?void 0:document.getElementById("gameDoughnutBtn"),r=document==null?void 0:document.getElementById("gameMazeBtn"),o=document.getElementById("home-controls"),l=document.getElementById("game-controls"),u=document.getElementById("world"),h=document.getElementById("spacerun"),p=document.getElementById("doughnut"),d=document.getElementById("maze"),_=document.getElementById("btnStop"),v=document.getElementById("score"),x=document.getElementById("msg"),S=document.getElementById("info-point");function w(){console.log("click game 1"),o==null||o.classList.add("hidden"),l==null||l.classList.remove("hidden"),u==null||u.classList.remove("hidden"),S==null||S.classList.remove("hidden"),i==null||i.classList.add("hidden"),p==null||p.classList.add("hidden"),d==null||d.classList.add("hidden"),new gm({_element:document.getElementById("world"),output:D=>{v&&D.score&&(v.innerHTML=D.score),x&&D.msg&&(x.innerHTML=D.msg.join(" - "))}}),_.addEventListener("click",()=>{location.reload()})}function M(){console.log("click game 2"),o==null||o.classList.add("hidden"),l==null||l.classList.remove("hidden"),i==null||i.classList.add("hidden"),S==null||S.classList.remove("hidden"),h==null||h.classList.remove("hidden"),p==null||p.classList.add("hidden"),d==null||d.classList.add("hidden");const D=document.getElementById("spacerun"),A=document.getElementById("btnLeft"),B=document.getElementById("btnRight"),z=document.getElementById("btnUp");D?(wn=new Im({_element:D,output:U=>{console.log("prop",U),v&&U.score&&(v.innerHTML=`${U.score}`),x&&U.msg&&(x.innerHTML=U.msg.join(" - "))}}),wn.init(),wn.setOnPause(()=>{}),wn.setOnResume(()=>{}),wn.setOnCollisionDetected(U=>{v&&U.score&&(v.innerHTML=`${U.score}`),x&&U.msg&&(x.innerHTML=U.msg.join(" - "))}),wn.setOnScoreChanged(U=>{v&&U&&(v.innerHTML=`${U}`)}),A==null||A.addEventListener("click",wn.clickLeft.bind(wn)),B==null||B.addEventListener("click",wn.clickRight.bind(wn)),z==null||z.addEventListener("click",wn.clickUp.bind(wn)),_.addEventListener("click",()=>{location.reload()})):_.addEventListener("click",()=>{location.reload()})}function g(){console.log("click game maze"),o==null||o.classList.add("hidden"),l==null||l.classList.remove("hidden"),d==null||d.classList.remove("hidden"),S==null||S.classList.remove("hidden"),i==null||i.classList.add("hidden"),h==null||h.classList.add("hidden"),p==null||p.classList.add("hidden");const D=document.getElementById("btnLeft"),A=document.getElementById("btnRight"),B=document.getElementById("btnUp"),z=document.getElementById("btnDown"),U=document.getElementById("maze");U?(x.innerHTML="caricamento",ym(()=>{x.innerHTML="pronto",console.log("Box2D caricato"),console.log("run ");const O=wm(U,C=>{x&&C.msg&&(x.innerHTML=C.msg.join(" - "))});D==null||D.addEventListener("click",O.clickLeft.bind(O)),A==null||A.addEventListener("click",O.clickRight.bind(O)),B==null||B.addEventListener("click",O.clickUp.bind(O)),z==null||z.addEventListener("click",O.clickDown.bind(O)),D==null||D.addEventListener("touchstart",O.touchStartLeft.bind(O)),A==null||A.addEventListener("touchstart",O.touchStartight.bind(O)),B==null||B.addEventListener("touchstart",O.touchStartckUp.bind(O)),z==null||z.addEventListener("touchstart",O.touchStartDown.bind(O)),D==null||D.addEventListener("touchend",O.touchEndLeft.bind(O)),A==null||A.addEventListener("touchend",O.touchEndight.bind(O)),B==null||B.addEventListener("touchend",O.touchEndckUp.bind(O)),z==null||z.addEventListener("touchend",O.touchEndDown.bind(O)),O.start()}),_.addEventListener("click",()=>{location.reload()})):_.addEventListener("click",()=>{location.reload()})}function I(){console.log("click game Doughnut"),o==null||o.classList.add("hidden"),l==null||l.classList.remove("hidden"),p==null||p.classList.remove("hidden"),S==null||S.classList.remove("hidden"),d==null||d.classList.add("hidden"),i==null||i.classList.add("hidden"),h==null||h.classList.add("hidden");const D=document.getElementById("btnLeft"),A=document.getElementById("btnRight"),B=document.getElementById("btnUp"),z=document.getElementById("btnDown"),U=document.getElementById("doughnut");if(U){console.log("run ");const O=xm({_element:U,output:C=>{v&&C.score&&(v.innerHTML=`${C.score}`),x&&C.msg&&(x.innerHTML=C.msg.join(" - "))}});D==null||D.addEventListener("click",O.clickLeft.bind(O)),A==null||A.addEventListener("click",O.clickRight.bind(O)),B==null||B.addEventListener("click",O.clickUp.bind(O)),z==null||z.addEventListener("click",O.clickDown.bind(O)),O.animate(),_.addEventListener("click",()=>{location.reload()})}else _.addEventListener("click",()=>{location.reload()})}e==null||e.addEventListener("click",w),t==null||t.addEventListener("click",M),n==null||n.addEventListener("click",I),r==null||r.addEventListener("click",g)}window.addEventListener("load",function(){Um()});
