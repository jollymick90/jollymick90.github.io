var tc=Object.defineProperty;var nc=(i,e,t)=>e in i?tc(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var nt=(i,e,t)=>nc(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();/*! jQuery v1.7.2 jquery.com | jquery.org/license */(function(i,e){function t(s){return c.isWindow(s)?s:s.nodeType===9?s.defaultView||s.parentWindow:!1}function n(s){if(!jt[s]){var a=X.body,f=c("<"+s+">").appendTo(a),m=f.css("display");f.remove(),(m==="none"||m==="")&&(_t||(_t=X.createElement("iframe"),_t.frameBorder=_t.width=_t.height=0),a.appendChild(_t),(!nn||!_t.createElement)&&(nn=(_t.contentWindow||_t.contentDocument).document,nn.write((c.support.boxModel?"<!doctype html>":"")+"<html><body>"),nn.close()),f=nn.createElement(s),nn.body.appendChild(f),m=c.css(f,"display"),a.removeChild(_t)),jt[s]=m}return jt[s]}function r(s,a){var f={};return c.each(Ut.concat.apply([],Ut.slice(0,a)),function(){f[this]=s}),f}function o(){sn=e}function l(){return setTimeout(o,0),sn=c.now()}function u(){try{return new i.ActiveXObject("Microsoft.XMLHTTP")}catch{}}function h(){try{return new i.XMLHttpRequest}catch{}}function d(s,a){s.dataFilter&&(a=s.dataFilter(a,s.dataType));var f=s.dataTypes,m={},M,E,L=f.length,I,j=f[0],q,ae,V,xe,ie;for(M=1;M<L;M++){if(M===1)for(E in s.converters)typeof E=="string"&&(m[E.toLowerCase()]=s.converters[E]);if(q=j,j=f[M],j==="*")j=q;else if(q!=="*"&&q!==j){if(ae=q+" "+j,V=m[ae]||m["* "+j],!V){ie=e;for(xe in m)if(I=xe.split(" "),(I[0]===q||I[0]==="*")&&(ie=m[I[1]+" "+j],ie)){xe=m[xe],xe===!0?V=ie:ie===!0&&(V=xe);break}}!V&&!ie&&c.error("No conversion from "+ae.replace(" "," to ")),V!==!0&&(a=V?V(a):ie(xe(a)))}}return a}function p(s,a,f){var m=s.contents,M=s.dataTypes,E=s.responseFields,L,I,j,q;for(I in E)I in f&&(a[E[I]]=f[I]);for(;M[0]==="*";)M.shift(),L===e&&(L=s.mimeType||a.getResponseHeader("content-type"));if(L){for(I in m)if(m[I]&&m[I].test(L)){M.unshift(I);break}}if(M[0]in f)j=M[0];else{for(I in f){if(!M[0]||s.converters[I+" "+M[0]]){j=I;break}q||(q=I)}j=j||q}if(j)return j!==M[0]&&M.unshift(j),f[j]}function g(s,a,f,m){if(c.isArray(a))c.each(a,function(E,L){f||Fr.test(s)?m(s,L):g(s+"["+(typeof L=="object"?E:"")+"]",L,f,m)});else if(!f&&c.type(a)==="object")for(var M in a)g(s+"["+M+"]",a[M],f,m);else m(s,a)}function v(s,a){var f,m,M=c.ajaxSettings.flatOptions||{};for(f in a)a[f]!==e&&((M[f]?s:m||(m={}))[f]=a[f]);m&&c.extend(!0,s,m)}function x(s,a,f,m,M,E){M=M||a.dataTypes[0],E=E||{},E[M]=!0;for(var L=s[M],I=0,j=L?L.length:0,q=s===Ye,ae;I<j&&(q||!ae);I++)ae=L[I](a,f,m),typeof ae=="string"&&(!q||E[ae]?ae=e:(a.dataTypes.unshift(ae),ae=x(s,a,f,m,ae,E)));return(q||!ae)&&!E["*"]&&(ae=x(s,a,f,m,"*",E)),ae}function S(s){return function(a,f){if(typeof a!="string"&&(f=a,a="*"),c.isFunction(f))for(var m=a.toLowerCase().split(J),M=0,E=m.length,L,I,j;M<E;M++)L=m[M],j=/^\+/.test(L),j&&(L=L.substr(1)||"*"),I=s[L]=s[L]||[],I[j?"unshift":"push"](f)}}function C(s,a,f){var m=a==="width"?s.offsetWidth:s.offsetHeight,M=a==="width"?1:0,E=4;if(m>0){if(f!=="border")for(;M<E;M+=2)f||(m-=parseFloat(c.css(s,"padding"+Fn[M]))||0),f==="margin"?m+=parseFloat(c.css(s,f+Fn[M]))||0:m-=parseFloat(c.css(s,"border"+Fn[M]+"Width"))||0;return m+"px"}if(m=Xn(s,a),(m<0||m==null)&&(m=s.style[a]),Ni.test(m))return m;if(m=parseFloat(m)||0,f)for(;M<E;M+=2)m+=parseFloat(c.css(s,"padding"+Fn[M]))||0,f!=="padding"&&(m+=parseFloat(c.css(s,"border"+Fn[M]+"Width"))||0),f==="margin"&&(m+=parseFloat(c.css(s,f+Fn[M]))||0);return m+"px"}function y(s){var a=X.createElement("div");return Ht.appendChild(a),a.innerHTML=s.outerHTML,a.firstChild}function _(s){var a=(s.nodeName||"").toLowerCase();a==="input"?U(s):a!=="script"&&typeof s.getElementsByTagName<"u"&&c.grep(s.getElementsByTagName("input"),U)}function U(s){(s.type==="checkbox"||s.type==="radio")&&(s.defaultChecked=s.checked)}function D(s){return typeof s.getElementsByTagName<"u"?s.getElementsByTagName("*"):typeof s.querySelectorAll<"u"?s.querySelectorAll("*"):[]}function w(s,a){var f;a.nodeType===1&&(a.clearAttributes&&a.clearAttributes(),a.mergeAttributes&&a.mergeAttributes(s),f=a.nodeName.toLowerCase(),f==="object"?a.outerHTML=s.outerHTML:f!=="input"||s.type!=="checkbox"&&s.type!=="radio"?f==="option"?a.selected=s.defaultSelected:f==="input"||f==="textarea"?a.defaultValue=s.defaultValue:f==="script"&&a.text!==s.text&&(a.text=s.text):(s.checked&&(a.defaultChecked=a.checked=s.checked),a.value!==s.value&&(a.value=s.value)),a.removeAttribute(c.expando),a.removeAttribute("_submit_attached"),a.removeAttribute("_change_attached"))}function B(s,a){if(a.nodeType===1&&c.hasData(s)){var f,m,M,E=c._data(s),L=c._data(a,E),I=E.events;if(I){delete L.handle,L.events={};for(f in I)for(m=0,M=I[f].length;m<M;m++)c.event.add(a,f,I[f][m])}L.data&&(L.data=c.extend({},L.data))}}function F(s,a){return c.nodeName(s,"table")?s.getElementsByTagName("tbody")[0]||s.appendChild(s.ownerDocument.createElement("tbody")):s}function O(s){var a=We.split("|"),f=s.createDocumentFragment();if(f.createElement)for(;a.length;)f.createElement(a.pop());return f}function G(s,a,f){if(a=a||0,c.isFunction(a))return c.grep(s,function(M,E){var L=!!a.call(M,E,M);return L===f});if(a.nodeType)return c.grep(s,function(M,E){return M===a===f});if(typeof a=="string"){var m=c.grep(s,function(M){return M.nodeType===1});if(Ne.test(a))return c.filter(a,m,!f);a=c.filter(a,m)}return c.grep(s,function(M,E){return c.inArray(M,a)>=0===f})}function R(s){return!s||!s.parentNode||s.parentNode.nodeType===11}function T(){return!0}function z(){return!1}function ee(s,a,f){var m=a+"defer",M=a+"queue",E=a+"mark",L=c._data(s,m);L&&(f==="queue"||!c._data(s,M))&&(f==="mark"||!c._data(s,E))&&setTimeout(function(){!c._data(s,M)&&!c._data(s,E)&&(c.removeData(s,m,!0),L.fire())},0)}function Q(s){for(var a in s)if(!(a==="data"&&c.isEmptyObject(s[a]))&&a!=="toJSON")return!1;return!0}function le(s,a,f){if(f===e&&s.nodeType===1){var m="data-"+a.replace(Et,"-$1").toLowerCase();if(f=s.getAttribute(m),typeof f=="string"){try{f=f==="true"?!0:f==="false"?!1:f==="null"?null:c.isNumeric(f)?+f:dt.test(f)?c.parseJSON(f):f}catch{}c.data(s,a,f)}else f=e}return f}function de(s){var a=Ue[s]={},f,m;for(s=s.split(/\s+/),f=0,m=s.length;f<m;f++)a[s[f]]=!0;return a}var X=i.document,ye=i.navigator,ce=i.location,c=function(){function s(){if(!a.isReady){try{X.documentElement.doScroll("left")}catch{setTimeout(s,1);return}a.ready()}}var a=function(k,he){return new a.fn.init(k,he,M)},f=i.jQuery,m=i.$,M,E=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,L=/\S/,I=/^\s+/,j=/\s+$/,q=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,ae=/^[\],:{}\s]*$/,V=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,xe=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,ie=/(?:^|:|,)(?:\s*\[)+/g,Be=/(webkit)[ \/]([\w.]+)/,ze=/(opera)(?:.*version)?[ \/]([\w.]+)/,st=/(msie) ([\w.]+)/,Ze=/(mozilla)(?:.*? rv:([\w.]+))?/,Wt=/-([a-z]|[0-9])/ig,Xt=/^-ms-/,ft=function(k,he){return(he+"").toUpperCase()},P=ye.userAgent,H,te,re,me=Object.prototype.toString,fe=Object.prototype.hasOwnProperty,Se=Array.prototype.push,Ae=Array.prototype.slice,Pe=String.prototype.trim,qe=Array.prototype.indexOf,ln={};return a.fn=a.prototype={constructor:a,init:function(k,he,Ce){var be,ke,St,It;if(!k)return this;if(k.nodeType)return this.context=this[0]=k,this.length=1,this;if(k==="body"&&!he&&X.body)return this.context=X,this[0]=X.body,this.selector=k,this.length=1,this;if(typeof k=="string"){if(k.charAt(0)!=="<"||k.charAt(k.length-1)!==">"||k.length<3?be=E.exec(k):be=[null,k,null],be&&(be[1]||!he)){if(be[1])return he=he instanceof a?he[0]:he,It=he?he.ownerDocument||he:X,St=q.exec(k),St?a.isPlainObject(he)?(k=[X.createElement(St[1])],a.fn.attr.call(k,he,!0)):k=[It.createElement(St[1])]:(St=a.buildFragment([be[1]],[It]),k=(St.cacheable?a.clone(St.fragment):St.fragment).childNodes),a.merge(this,k);if(ke=X.getElementById(be[2]),ke&&ke.parentNode){if(ke.id!==be[2])return Ce.find(k);this.length=1,this[0]=ke}return this.context=X,this.selector=k,this}return!he||he.jquery?(he||Ce).find(k):this.constructor(he).find(k)}return a.isFunction(k)?Ce.ready(k):(k.selector!==e&&(this.selector=k.selector,this.context=k.context),a.makeArray(k,this))},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return Ae.call(this,0)},get:function(k){return k==null?this.toArray():k<0?this[this.length+k]:this[k]},pushStack:function(k,he,Ce){var be=this.constructor();return a.isArray(k)?Se.apply(be,k):a.merge(be,k),be.prevObject=this,be.context=this.context,he==="find"?be.selector=this.selector+(this.selector?" ":"")+Ce:he&&(be.selector=this.selector+"."+he+"("+Ce+")"),be},each:function(k,he){return a.each(this,k,he)},ready:function(k){return a.bindReady(),te.add(k),this},eq:function(k){return k=+k,k===-1?this.slice(k):this.slice(k,k+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(Ae.apply(this,arguments),"slice",Ae.call(arguments).join(","))},map:function(k){return this.pushStack(a.map(this,function(he,Ce){return k.call(he,Ce,he)}))},end:function(){return this.prevObject||this.constructor(null)},push:Se,sort:[].sort,splice:[].splice},a.fn.init.prototype=a.fn,a.extend=a.fn.extend=function(){var k,he,Ce,be,ke,St,It=arguments[0]||{},Zt=1,yi=arguments.length,yn=!1;for(typeof It=="boolean"&&(yn=It,It=arguments[1]||{},Zt=2),typeof It!="object"&&!a.isFunction(It)&&(It={}),yi===Zt&&(It=this,--Zt);Zt<yi;Zt++)if((k=arguments[Zt])!=null)for(he in k)Ce=It[he],be=k[he],It!==be&&(yn&&be&&(a.isPlainObject(be)||(ke=a.isArray(be)))?(ke?(ke=!1,St=Ce&&a.isArray(Ce)?Ce:[]):St=Ce&&a.isPlainObject(Ce)?Ce:{},It[he]=a.extend(yn,St,be)):be!==e&&(It[he]=be));return It},a.extend({noConflict:function(k){return i.$===a&&(i.$=m),k&&i.jQuery===a&&(i.jQuery=f),a},isReady:!1,readyWait:1,holdReady:function(k){k?a.readyWait++:a.ready(!0)},ready:function(k){if(k===!0&&!--a.readyWait||k!==!0&&!a.isReady){if(!X.body)return setTimeout(a.ready,1);if(a.isReady=!0,k!==!0&&--a.readyWait>0)return;te.fireWith(X,[a]),a.fn.trigger&&a(X).trigger("ready").off("ready")}},bindReady:function(){if(!te){if(te=a.Callbacks("once memory"),X.readyState==="complete")return setTimeout(a.ready,1);if(X.addEventListener)X.addEventListener("DOMContentLoaded",re,!1),i.addEventListener("load",a.ready,!1);else if(X.attachEvent){X.attachEvent("onreadystatechange",re),i.attachEvent("onload",a.ready);var k=!1;try{k=i.frameElement==null}catch{}X.documentElement.doScroll&&k&&s()}}},isFunction:function(k){return a.type(k)==="function"},isArray:Array.isArray||function(k){return a.type(k)==="array"},isWindow:function(k){return k!=null&&k==k.window},isNumeric:function(k){return!isNaN(parseFloat(k))&&isFinite(k)},type:function(k){return k==null?String(k):ln[me.call(k)]||"object"},isPlainObject:function(k){if(!k||a.type(k)!=="object"||k.nodeType||a.isWindow(k))return!1;try{if(k.constructor&&!fe.call(k,"constructor")&&!fe.call(k.constructor.prototype,"isPrototypeOf"))return!1}catch{return!1}var he;for(he in k);return he===e||fe.call(k,he)},isEmptyObject:function(k){for(var he in k)return!1;return!0},error:function(k){throw new Error(k)},parseJSON:function(k){if(typeof k!="string"||!k)return null;if(k=a.trim(k),i.JSON&&i.JSON.parse)return i.JSON.parse(k);if(ae.test(k.replace(V,"@").replace(xe,"]").replace(ie,"")))return new Function("return "+k)();a.error("Invalid JSON: "+k)},parseXML:function(k){if(typeof k!="string"||!k)return null;var he,Ce;try{i.DOMParser?(Ce=new DOMParser,he=Ce.parseFromString(k,"text/xml")):(he=new ActiveXObject("Microsoft.XMLDOM"),he.async="false",he.loadXML(k))}catch{he=e}return(!he||!he.documentElement||he.getElementsByTagName("parsererror").length)&&a.error("Invalid XML: "+k),he},noop:function(){},globalEval:function(k){k&&L.test(k)&&(i.execScript||function(he){i.eval.call(i,he)})(k)},camelCase:function(k){return k.replace(Xt,"ms-").replace(Wt,ft)},nodeName:function(k,he){return k.nodeName&&k.nodeName.toUpperCase()===he.toUpperCase()},each:function(k,he,Ce){var be,ke=0,St=k.length,It=St===e||a.isFunction(k);if(Ce)if(It){for(be in k)if(he.apply(k[be],Ce)===!1)break}else for(;ke<St&&he.apply(k[ke++],Ce)!==!1;);else if(It){for(be in k)if(he.call(k[be],be,k[be])===!1)break}else for(;ke<St&&he.call(k[ke],ke,k[ke++])!==!1;);return k},trim:Pe?function(k){return k==null?"":Pe.call(k)}:function(k){return k==null?"":(k+"").replace(I,"").replace(j,"")},makeArray:function(k,he){var Ce=he||[];if(k!=null){var be=a.type(k);k.length==null||be==="string"||be==="function"||be==="regexp"||a.isWindow(k)?Se.call(Ce,k):a.merge(Ce,k)}return Ce},inArray:function(k,he,Ce){var be;if(he){if(qe)return qe.call(he,k,Ce);for(be=he.length,Ce=Ce?Ce<0?Math.max(0,be+Ce):Ce:0;Ce<be;Ce++)if(Ce in he&&he[Ce]===k)return Ce}return-1},merge:function(k,he){var Ce=k.length,be=0;if(typeof he.length=="number")for(var ke=he.length;be<ke;be++)k[Ce++]=he[be];else for(;he[be]!==e;)k[Ce++]=he[be++];return k.length=Ce,k},grep:function(k,he,Ce){var be=[],ke;Ce=!!Ce;for(var St=0,It=k.length;St<It;St++)ke=!!he(k[St],St),Ce!==ke&&be.push(k[St]);return be},map:function(k,he,Ce){var be,ke,St=[],It=0,Zt=k.length,yi=k instanceof a||Zt!==e&&typeof Zt=="number"&&(Zt>0&&k[0]&&k[Zt-1]||Zt===0||a.isArray(k));if(yi)for(;It<Zt;It++)be=he(k[It],It,Ce),be!=null&&(St[St.length]=be);else for(ke in k)be=he(k[ke],ke,Ce),be!=null&&(St[St.length]=be);return St.concat.apply([],St)},guid:1,proxy:function(k,he){if(typeof he=="string"){var Ce=k[he];he=k,k=Ce}if(!a.isFunction(k))return e;var be=Ae.call(arguments,2),ke=function(){return k.apply(he,be.concat(Ae.call(arguments)))};return ke.guid=k.guid=k.guid||ke.guid||a.guid++,ke},access:function(k,he,Ce,be,ke,St,It){var Zt,yi=Ce==null,yn=0,da=k.length;if(Ce&&typeof Ce=="object"){for(yn in Ce)a.access(k,he,yn,Ce[yn],1,St,be);ke=1}else if(be!==e){if(Zt=It===e&&a.isFunction(be),yi&&(Zt?(Zt=he,he=function(Ql,Rm,ec){return Zt.call(a(Ql),ec)}):(he.call(k,be),he=null)),he)for(;yn<da;yn++)he(k[yn],Ce,Zt?be.call(k[yn],yn,he(k[yn],Ce)):be,It);ke=1}return ke?k:yi?he.call(k):da?he(k[0],Ce):St},now:function(){return new Date().getTime()},uaMatch:function(k){k=k.toLowerCase();var he=Be.exec(k)||ze.exec(k)||st.exec(k)||k.indexOf("compatible")<0&&Ze.exec(k)||[];return{browser:he[1]||"",version:he[2]||"0"}},sub:function(){function k(Ce,be){return new k.fn.init(Ce,be)}a.extend(!0,k,this),k.superclass=this,k.fn=k.prototype=this(),k.fn.constructor=k,k.sub=this.sub,k.fn.init=function(Ce,be){return be&&be instanceof a&&!(be instanceof k)&&(be=k(be)),a.fn.init.call(this,Ce,be,he)},k.fn.init.prototype=k.fn;var he=k(X);return k},browser:{}}),a.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(k,he){ln["[object "+he+"]"]=he.toLowerCase()}),H=a.uaMatch(P),H.browser&&(a.browser[H.browser]=!0,a.browser.version=H.version),a.browser.webkit&&(a.browser.safari=!0),L.test(" ")&&(I=/^[\s\xA0]+/,j=/[\s\xA0]+$/),M=a(X),X.addEventListener?re=function(){X.removeEventListener("DOMContentLoaded",re,!1),a.ready()}:X.attachEvent&&(re=function(){X.readyState==="complete"&&(X.detachEvent("onreadystatechange",re),a.ready())}),a}(),Ue={};c.Callbacks=function(s){s=s?Ue[s]||de(s):{};var a=[],f=[],m,M,E,L,I,j,q=function(xe){var ie,Be,ze,st;for(ie=0,Be=xe.length;ie<Be;ie++)ze=xe[ie],st=c.type(ze),st==="array"?q(ze):st==="function"&&(!s.unique||!V.has(ze))&&a.push(ze)},ae=function(xe,ie){for(ie=ie||[],m=!s.memory||[xe,ie],M=!0,E=!0,j=L||0,L=0,I=a.length;a&&j<I;j++)if(a[j].apply(xe,ie)===!1&&s.stopOnFalse){m=!0;break}E=!1,a&&(s.once?m===!0?V.disable():a=[]:f&&f.length&&(m=f.shift(),V.fireWith(m[0],m[1])))},V={add:function(){if(a){var xe=a.length;q(arguments),E?I=a.length:m&&m!==!0&&(L=xe,ae(m[0],m[1]))}return this},remove:function(){if(a)for(var xe=arguments,ie=0,Be=xe.length;ie<Be;ie++)for(var ze=0;ze<a.length&&!(xe[ie]===a[ze]&&(E&&ze<=I&&(I--,ze<=j&&j--),a.splice(ze--,1),s.unique));ze++);return this},has:function(xe){if(a){for(var ie=0,Be=a.length;ie<Be;ie++)if(xe===a[ie])return!0}return!1},empty:function(){return a=[],this},disable:function(){return a=f=m=e,this},disabled:function(){return!a},lock:function(){return f=e,(!m||m===!0)&&V.disable(),this},locked:function(){return!f},fireWith:function(xe,ie){return f&&(E?s.once||f.push([xe,ie]):(!s.once||!m)&&ae(xe,ie)),this},fire:function(){return V.fireWith(this,arguments),this},fired:function(){return!!M}};return V};var je=[].slice;c.extend({Deferred:function(s){var a=c.Callbacks("once memory"),f=c.Callbacks("once memory"),m=c.Callbacks("memory"),M="pending",E={resolve:a,reject:f,notify:m},L={done:a.add,fail:f.add,progress:m.add,state:function(){return M},isResolved:a.fired,isRejected:f.fired,then:function(q,ae,V){return I.done(q).fail(ae).progress(V),this},always:function(){return I.done.apply(I,arguments).fail.apply(I,arguments),this},pipe:function(q,ae,V){return c.Deferred(function(xe){c.each({done:[q,"resolve"],fail:[ae,"reject"],progress:[V,"notify"]},function(ie,Be){var ze=Be[0],st=Be[1],Ze;c.isFunction(ze)?I[ie](function(){Ze=ze.apply(this,arguments),Ze&&c.isFunction(Ze.promise)?Ze.promise().then(xe.resolve,xe.reject,xe.notify):xe[st+"With"](this===I?xe:this,[Ze])}):I[ie](xe[st])})}).promise()},promise:function(q){if(q==null)q=L;else for(var ae in L)q[ae]=L[ae];return q}},I=L.promise({}),j;for(j in E)I[j]=E[j].fire,I[j+"With"]=E[j].fireWith;return I.done(function(){M="resolved"},f.disable,m.lock).fail(function(){M="rejected"},a.disable,m.lock),s&&s.call(I,I),I},when:function(s){function a(ae){return function(V){L[ae]=arguments.length>1?je.call(arguments,0):V,j.notifyWith(q,L)}}function f(ae){return function(V){m[ae]=arguments.length>1?je.call(arguments,0):V,--I||j.resolveWith(j,m)}}var m=je.call(arguments,0),M=0,E=m.length,L=Array(E),I=E,j=E<=1&&s&&c.isFunction(s.promise)?s:c.Deferred(),q=j.promise();if(E>1){for(;M<E;M++)m[M]&&m[M].promise&&c.isFunction(m[M].promise)?m[M].promise().then(f(M),j.reject,a(M)):--I;I||j.resolveWith(j,m)}else j!==s&&j.resolveWith(j,E?[s]:[]);return q}}),c.support=function(){var s,a,f,m,M,E,L,I,j,q,ae,V=X.createElement("div");if(V.setAttribute("className","t"),V.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",a=V.getElementsByTagName("*"),f=V.getElementsByTagName("a")[0],!a||!a.length||!f)return{};m=X.createElement("select"),M=m.appendChild(X.createElement("option")),E=V.getElementsByTagName("input")[0],s={leadingWhitespace:V.firstChild.nodeType===3,tbody:!V.getElementsByTagName("tbody").length,htmlSerialize:!!V.getElementsByTagName("link").length,style:/top/.test(f.getAttribute("style")),hrefNormalized:f.getAttribute("href")==="/a",opacity:/^0.55/.test(f.style.opacity),cssFloat:!!f.style.cssFloat,checkOn:E.value==="on",optSelected:M.selected,getSetAttribute:V.className!=="t",enctype:!!X.createElement("form").enctype,html5Clone:X.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},c.boxModel=s.boxModel=X.compatMode==="CSS1Compat",E.checked=!0,s.noCloneChecked=E.cloneNode(!0).checked,m.disabled=!0,s.optDisabled=!M.disabled;try{delete V.test}catch{s.deleteExpando=!1}if(!V.addEventListener&&V.attachEvent&&V.fireEvent&&(V.attachEvent("onclick",function(){s.noCloneEvent=!1}),V.cloneNode(!0).fireEvent("onclick")),E=X.createElement("input"),E.value="t",E.setAttribute("type","radio"),s.radioValue=E.value==="t",E.setAttribute("checked","checked"),E.setAttribute("name","t"),V.appendChild(E),L=X.createDocumentFragment(),L.appendChild(V.lastChild),s.checkClone=L.cloneNode(!0).cloneNode(!0).lastChild.checked,s.appendChecked=E.checked,L.removeChild(E),L.appendChild(V),V.attachEvent)for(q in{submit:1,change:1,focusin:1})j="on"+q,ae=j in V,ae||(V.setAttribute(j,"return;"),ae=typeof V[j]=="function"),s[q+"Bubbles"]=ae;return L.removeChild(V),L=m=M=V=E=null,c(function(){var xe,ie,Be,ze,st,Ze,Wt,Xt,ft,P,H,te,re=X.getElementsByTagName("body")[0];!re||(Wt=1,te="padding:0;margin:0;border:",P="position:absolute;top:0;left:0;width:1px;height:1px;",H=te+"0;visibility:hidden;",Xt="style='"+P+te+"5px solid #000;",ft="<div "+Xt+"display:block;'><div style='"+te+"0;display:block;overflow:hidden;'></div></div><table "+Xt+"' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>",xe=X.createElement("div"),xe.style.cssText=H+"width:0;height:0;position:static;top:0;margin-top:"+Wt+"px",re.insertBefore(xe,re.firstChild),V=X.createElement("div"),xe.appendChild(V),V.innerHTML="<table><tr><td style='"+te+"0;display:none'></td><td>t</td></tr></table>",I=V.getElementsByTagName("td"),ae=I[0].offsetHeight===0,I[0].style.display="",I[1].style.display="none",s.reliableHiddenOffsets=ae&&I[0].offsetHeight===0,i.getComputedStyle&&(V.innerHTML="",Ze=X.createElement("div"),Ze.style.width="0",Ze.style.marginRight="0",V.style.width="2px",V.appendChild(Ze),s.reliableMarginRight=(parseInt((i.getComputedStyle(Ze,null)||{marginRight:0}).marginRight,10)||0)===0),typeof V.style.zoom<"u"&&(V.innerHTML="",V.style.width=V.style.padding="1px",V.style.border=0,V.style.overflow="hidden",V.style.display="inline",V.style.zoom=1,s.inlineBlockNeedsLayout=V.offsetWidth===3,V.style.display="block",V.style.overflow="visible",V.innerHTML="<div style='width:5px;'></div>",s.shrinkWrapBlocks=V.offsetWidth!==3),V.style.cssText=P+H,V.innerHTML=ft,ie=V.firstChild,Be=ie.firstChild,ze=ie.nextSibling.firstChild.firstChild,st={doesNotAddBorder:Be.offsetTop!==5,doesAddBorderForTableAndCells:ze.offsetTop===5},Be.style.position="fixed",Be.style.top="20px",st.fixedPosition=Be.offsetTop===20||Be.offsetTop===15,Be.style.position=Be.style.top="",ie.style.overflow="hidden",ie.style.position="relative",st.subtractsBorderForOverflowNotVisible=Be.offsetTop===-5,st.doesNotIncludeMarginInBodyOffset=re.offsetTop!==Wt,i.getComputedStyle&&(V.style.marginTop="1%",s.pixelMargin=(i.getComputedStyle(V,null)||{marginTop:0}).marginTop!=="1%"),typeof xe.style.zoom<"u"&&(xe.style.zoom=1),re.removeChild(xe),Ze=V=xe=null,c.extend(s,st))}),s}();var dt=/^(?:\{.*\}|\[.*\])$/,Et=/([A-Z])/g;c.extend({cache:{},uuid:0,expando:"jQuery"+(c.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(s){return s=s.nodeType?c.cache[s[c.expando]]:s[c.expando],!!s&&!Q(s)},data:function(s,a,f,m){if(c.acceptData(s)){var M,E,L,I=c.expando,j=typeof a=="string",q=s.nodeType,ae=q?c.cache:s,V=q?s[I]:s[I]&&I,xe=a==="events";return(!V||!ae[V]||!xe&&!m&&!ae[V].data)&&j&&f===e?void 0:(V||(q?s[I]=V=++c.uuid:V=I),ae[V]||(ae[V]={},q||(ae[V].toJSON=c.noop)),(typeof a=="object"||typeof a=="function")&&(m?ae[V]=c.extend(ae[V],a):ae[V].data=c.extend(ae[V].data,a)),M=E=ae[V],m||(E.data||(E.data={}),E=E.data),f!==e&&(E[c.camelCase(a)]=f),xe&&!E[a]?M.events:(j?(L=E[a],L==null&&(L=E[c.camelCase(a)])):L=E,L))}},removeData:function(s,a,f){if(c.acceptData(s)){var m,M,E,L=c.expando,I=s.nodeType,j=I?c.cache:s,q=I?s[L]:L;if(!j[q])return;if(a&&(m=f?j[q]:j[q].data,m)){for(c.isArray(a)||(a in m?a=[a]:(a=c.camelCase(a),a in m?a=[a]:a=a.split(" "))),M=0,E=a.length;M<E;M++)delete m[a[M]];if(!(f?Q:c.isEmptyObject)(m))return}if(!f&&(delete j[q].data,!Q(j[q])))return;c.support.deleteExpando||!j.setInterval?delete j[q]:j[q]=null,I&&(c.support.deleteExpando?delete s[L]:s.removeAttribute?s.removeAttribute(L):s[L]=null)}},_data:function(s,a,f){return c.data(s,a,f,!0)},acceptData:function(s){if(s.nodeName){var a=c.noData[s.nodeName.toLowerCase()];if(a)return a!==!0&&s.getAttribute("classid")===a}return!0}}),c.fn.extend({data:function(s,a){var f,m,M,E,L,I=this[0],j=0,q=null;if(s===e){if(this.length&&(q=c.data(I),I.nodeType===1&&!c._data(I,"parsedAttrs"))){for(M=I.attributes,L=M.length;j<L;j++)E=M[j].name,E.indexOf("data-")===0&&(E=c.camelCase(E.substring(5)),le(I,E,q[E]));c._data(I,"parsedAttrs",!0)}return q}return typeof s=="object"?this.each(function(){c.data(this,s)}):(f=s.split(".",2),f[1]=f[1]?"."+f[1]:"",m=f[1]+"!",c.access(this,function(ae){if(ae===e)return q=this.triggerHandler("getData"+m,[f[0]]),q===e&&I&&(q=c.data(I,s),q=le(I,s,q)),q===e&&f[1]?this.data(f[0]):q;f[1]=ae,this.each(function(){var V=c(this);V.triggerHandler("setData"+m,f),c.data(this,s,ae),V.triggerHandler("changeData"+m,f)})},null,a,arguments.length>1,null,!1))},removeData:function(s){return this.each(function(){c.removeData(this,s)})}}),c.extend({_mark:function(s,a){s&&(a=(a||"fx")+"mark",c._data(s,a,(c._data(s,a)||0)+1))},_unmark:function(s,a,f){if(s!==!0&&(f=a,a=s,s=!1),a){f=f||"fx";var m=f+"mark",M=s?0:(c._data(a,m)||1)-1;M?c._data(a,m,M):(c.removeData(a,m,!0),ee(a,f,"mark"))}},queue:function(s,a,f){var m;if(s)return a=(a||"fx")+"queue",m=c._data(s,a),f&&(!m||c.isArray(f)?m=c._data(s,a,c.makeArray(f)):m.push(f)),m||[]},dequeue:function(s,a){a=a||"fx";var f=c.queue(s,a),m=f.shift(),M={};m==="inprogress"&&(m=f.shift()),m&&(a==="fx"&&f.unshift("inprogress"),c._data(s,a+".run",M),m.call(s,function(){c.dequeue(s,a)},M)),f.length||(c.removeData(s,a+"queue "+a+".run",!0),ee(s,a,"queue"))}}),c.fn.extend({queue:function(s,a){var f=2;return typeof s!="string"&&(a=s,s="fx",f--),arguments.length<f?c.queue(this[0],s):a===e?this:this.each(function(){var m=c.queue(this,s,a);s==="fx"&&m[0]!=="inprogress"&&c.dequeue(this,s)})},dequeue:function(s){return this.each(function(){c.dequeue(this,s)})},delay:function(s,a){return s=c.fx&&c.fx.speeds[s]||s,a=a||"fx",this.queue(a,function(f,m){var M=setTimeout(f,s);m.stop=function(){clearTimeout(M)}})},clearQueue:function(s){return this.queue(s||"fx",[])},promise:function(s,a){function f(){--L||m.resolveWith(M,[M])}typeof s!="string"&&(a=s,s=e),s=s||"fx";for(var m=c.Deferred(),M=this,E=M.length,L=1,I=s+"defer",j=s+"queue",q=s+"mark",ae;E--;)(ae=c.data(M[E],I,e,!0)||(c.data(M[E],j,e,!0)||c.data(M[E],q,e,!0))&&c.data(M[E],I,c.Callbacks("once memory"),!0))&&(L++,ae.add(f));return f(),m.promise(a)}});var pe=/[\n\t\r]/g,Te=/\s+/,$e=/\r/g,Re=/^(?:button|input)$/i,at=/^(?:button|input|object|select|textarea)$/i,He=/^a(?:rea)?$/i,Je=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,gt=c.support.getSetAttribute,ct,kt,W;c.fn.extend({attr:function(s,a){return c.access(this,c.attr,s,a,arguments.length>1)},removeAttr:function(s){return this.each(function(){c.removeAttr(this,s)})},prop:function(s,a){return c.access(this,c.prop,s,a,arguments.length>1)},removeProp:function(s){return s=c.propFix[s]||s,this.each(function(){try{this[s]=e,delete this[s]}catch{}})},addClass:function(s){var a,f,m,M,E,L,I;if(c.isFunction(s))return this.each(function(j){c(this).addClass(s.call(this,j,this.className))});if(s&&typeof s=="string"){for(a=s.split(Te),f=0,m=this.length;f<m;f++)if(M=this[f],M.nodeType===1)if(!M.className&&a.length===1)M.className=s;else{for(E=" "+M.className+" ",L=0,I=a.length;L<I;L++)~E.indexOf(" "+a[L]+" ")||(E+=a[L]+" ");M.className=c.trim(E)}}return this},removeClass:function(s){var a,f,m,M,E,L,I;if(c.isFunction(s))return this.each(function(j){c(this).removeClass(s.call(this,j,this.className))});if(s&&typeof s=="string"||s===e){for(a=(s||"").split(Te),f=0,m=this.length;f<m;f++)if(M=this[f],M.nodeType===1&&M.className)if(s){for(E=(" "+M.className+" ").replace(pe," "),L=0,I=a.length;L<I;L++)E=E.replace(" "+a[L]+" "," ");M.className=c.trim(E)}else M.className=""}return this},toggleClass:function(s,a){var f=typeof s,m=typeof a=="boolean";return c.isFunction(s)?this.each(function(M){c(this).toggleClass(s.call(this,M,this.className,a),a)}):this.each(function(){if(f==="string")for(var M,E=0,L=c(this),I=a,j=s.split(Te);M=j[E++];)I=m?I:!L.hasClass(M),L[I?"addClass":"removeClass"](M);else(f==="undefined"||f==="boolean")&&(this.className&&c._data(this,"__className__",this.className),this.className=this.className||s===!1?"":c._data(this,"__className__")||"")})},hasClass:function(s){for(var a=" "+s+" ",f=0,m=this.length;f<m;f++)if(this[f].nodeType===1&&(" "+this[f].className+" ").replace(pe," ").indexOf(a)>-1)return!0;return!1},val:function(s){var a,f,m,M=this[0];{if(arguments.length)return m=c.isFunction(s),this.each(function(E){var L=c(this),I;this.nodeType===1&&(m?I=s.call(this,E,L.val()):I=s,I==null?I="":typeof I=="number"?I+="":c.isArray(I)&&(I=c.map(I,function(j){return j==null?"":j+""})),a=c.valHooks[this.type]||c.valHooks[this.nodeName.toLowerCase()],(!a||!("set"in a)||a.set(this,I,"value")===e)&&(this.value=I))});if(M)return a=c.valHooks[M.type]||c.valHooks[M.nodeName.toLowerCase()],a&&"get"in a&&(f=a.get(M,"value"))!==e?f:(f=M.value,typeof f=="string"?f.replace($e,""):f??"")}}}),c.extend({valHooks:{option:{get:function(s){var a=s.attributes.value;return!a||a.specified?s.value:s.text}},select:{get:function(s){var a,f,m,M,E=s.selectedIndex,L=[],I=s.options,j=s.type==="select-one";if(E<0)return null;for(f=j?E:0,m=j?E+1:I.length;f<m;f++)if(M=I[f],M.selected&&(c.support.optDisabled?!M.disabled:M.getAttribute("disabled")===null)&&(!M.parentNode.disabled||!c.nodeName(M.parentNode,"optgroup"))){if(a=c(M).val(),j)return a;L.push(a)}return j&&!L.length&&I.length?c(I[E]).val():L},set:function(s,a){var f=c.makeArray(a);return c(s).find("option").each(function(){this.selected=c.inArray(c(this).val(),f)>=0}),f.length||(s.selectedIndex=-1),f}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(s,a,f,m){var M,E,L,I=s.nodeType;if(s&&I!==3&&I!==8&&I!==2){if(m&&a in c.attrFn)return c(s)[a](f);if(typeof s.getAttribute>"u")return c.prop(s,a,f);if(L=I!==1||!c.isXMLDoc(s),L&&(a=a.toLowerCase(),E=c.attrHooks[a]||(Je.test(a)?kt:ct)),f!==e){if(f===null){c.removeAttr(s,a);return}return E&&"set"in E&&L&&(M=E.set(s,f,a))!==e?M:(s.setAttribute(a,""+f),f)}return E&&"get"in E&&L&&(M=E.get(s,a))!==null?M:(M=s.getAttribute(a),M===null?e:M)}},removeAttr:function(s,a){var f,m,M,E,L,I=0;if(a&&s.nodeType===1)for(m=a.toLowerCase().split(Te),E=m.length;I<E;I++)M=m[I],M&&(f=c.propFix[M]||M,L=Je.test(M),L||c.attr(s,M,""),s.removeAttribute(gt?M:f),L&&f in s&&(s[f]=!1))},attrHooks:{type:{set:function(s,a){if(Re.test(s.nodeName)&&s.parentNode)c.error("type property can't be changed");else if(!c.support.radioValue&&a==="radio"&&c.nodeName(s,"input")){var f=s.value;return s.setAttribute("type",a),f&&(s.value=f),a}}},value:{get:function(s,a){return ct&&c.nodeName(s,"button")?ct.get(s,a):a in s?s.value:null},set:function(s,a,f){if(ct&&c.nodeName(s,"button"))return ct.set(s,a,f);s.value=a}}},propFix:{tabindex:"tabIndex",readonly:"readOnly",for:"htmlFor",class:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(s,a,f){var m,M,E,L=s.nodeType;if(s&&L!==3&&L!==8&&L!==2)return E=L!==1||!c.isXMLDoc(s),E&&(a=c.propFix[a]||a,M=c.propHooks[a]),f!==e?M&&"set"in M&&(m=M.set(s,f,a))!==e?m:s[a]=f:M&&"get"in M&&(m=M.get(s,a))!==null?m:s[a]},propHooks:{tabIndex:{get:function(s){var a=s.getAttributeNode("tabindex");return a&&a.specified?parseInt(a.value,10):at.test(s.nodeName)||He.test(s.nodeName)&&s.href?0:e}}}}),c.attrHooks.tabindex=c.propHooks.tabIndex,kt={get:function(s,a){var f,m=c.prop(s,a);return m===!0||typeof m!="boolean"&&(f=s.getAttributeNode(a))&&f.nodeValue!==!1?a.toLowerCase():e},set:function(s,a,f){var m;return a===!1?c.removeAttr(s,f):(m=c.propFix[f]||f,m in s&&(s[m]=!0),s.setAttribute(f,f.toLowerCase())),f}},gt||(W={name:!0,id:!0,coords:!0},ct=c.valHooks.button={get:function(s,a){var f;return f=s.getAttributeNode(a),f&&(W[a]?f.nodeValue!=="":f.specified)?f.nodeValue:e},set:function(s,a,f){var m=s.getAttributeNode(f);return m||(m=X.createAttribute(f),s.setAttributeNode(m)),m.nodeValue=a+""}},c.attrHooks.tabindex.set=ct.set,c.each(["width","height"],function(s,a){c.attrHooks[a]=c.extend(c.attrHooks[a],{set:function(f,m){if(m==="")return f.setAttribute(a,"auto"),m}})}),c.attrHooks.contenteditable={get:ct.get,set:function(s,a,f){a===""&&(a="false"),ct.set(s,a,f)}}),c.support.hrefNormalized||c.each(["href","src","width","height"],function(s,a){c.attrHooks[a]=c.extend(c.attrHooks[a],{get:function(f){var m=f.getAttribute(a,2);return m===null?e:m}})}),c.support.style||(c.attrHooks.style={get:function(s){return s.style.cssText.toLowerCase()||e},set:function(s,a){return s.style.cssText=""+a}}),c.support.optSelected||(c.propHooks.selected=c.extend(c.propHooks.selected,{get:function(s){var a=s.parentNode;return a&&(a.selectedIndex,a.parentNode&&a.parentNode.selectedIndex),null}})),c.support.enctype||(c.propFix.enctype="encoding"),c.support.checkOn||c.each(["radio","checkbox"],function(){c.valHooks[this]={get:function(s){return s.getAttribute("value")===null?"on":s.value}}}),c.each(["radio","checkbox"],function(){c.valHooks[this]=c.extend(c.valHooks[this],{set:function(s,a){if(c.isArray(a))return s.checked=c.inArray(c(s).val(),a)>=0}})});var qt=/^(?:textarea|input|select)$/i,pt=/^([^\.]*)?(?:\.(.+))?$/,yt=/(?:^|\s)hover(\.\S+)?\b/,Qe=/^key/,Bt=/^(?:mouse|contextmenu)|click/,it=/^(?:focusinfocus|focusoutblur)$/,N=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,b=function(s){var a=N.exec(s);return a&&(a[1]=(a[1]||"").toLowerCase(),a[3]=a[3]&&new RegExp("(?:^|\\s)"+a[3]+"(?:\\s|$)")),a},ne=function(s,a){var f=s.attributes||{};return(!a[1]||s.nodeName.toLowerCase()===a[1])&&(!a[2]||(f.id||{}).value===a[2])&&(!a[3]||a[3].test((f.class||{}).value))},_e=function(s){return c.event.special.hover?s:s.replace(yt,"mouseenter$1 mouseleave$1")};c.event={add:function(s,a,f,m,M){var E,L,I,j,q,ae,V,xe,ie,Be,ze;if(!(s.nodeType===3||s.nodeType===8||!a||!f||!(E=c._data(s)))){for(f.handler&&(ie=f,f=ie.handler,M=ie.selector),f.guid||(f.guid=c.guid++),I=E.events,I||(E.events=I={}),L=E.handle,L||(E.handle=L=function(st){return typeof c<"u"&&(!st||c.event.triggered!==st.type)?c.event.dispatch.apply(L.elem,arguments):e},L.elem=s),a=c.trim(_e(a)).split(" "),j=0;j<a.length;j++)q=pt.exec(a[j])||[],ae=q[1],V=(q[2]||"").split(".").sort(),ze=c.event.special[ae]||{},ae=(M?ze.delegateType:ze.bindType)||ae,ze=c.event.special[ae]||{},xe=c.extend({type:ae,origType:q[1],data:m,handler:f,guid:f.guid,selector:M,quick:M&&b(M),namespace:V.join(".")},ie),Be=I[ae],Be||(Be=I[ae]=[],Be.delegateCount=0,(!ze.setup||ze.setup.call(s,m,V,L)===!1)&&(s.addEventListener?s.addEventListener(ae,L,!1):s.attachEvent&&s.attachEvent("on"+ae,L))),ze.add&&(ze.add.call(s,xe),xe.handler.guid||(xe.handler.guid=f.guid)),M?Be.splice(Be.delegateCount++,0,xe):Be.push(xe),c.event.global[ae]=!0;s=null}},global:{},remove:function(s,a,f,m,M){var E=c.hasData(s)&&c._data(s),L,I,j,q,ae,V,xe,ie,Be,ze,st,Ze;if(E&&(ie=E.events)){for(a=c.trim(_e(a||"")).split(" "),L=0;L<a.length;L++){if(I=pt.exec(a[L])||[],j=q=I[1],ae=I[2],!j){for(j in ie)c.event.remove(s,j+a[L],f,m,!0);continue}for(Be=c.event.special[j]||{},j=(m?Be.delegateType:Be.bindType)||j,st=ie[j]||[],V=st.length,ae=ae?new RegExp("(^|\\.)"+ae.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null,xe=0;xe<st.length;xe++)Ze=st[xe],(M||q===Ze.origType)&&(!f||f.guid===Ze.guid)&&(!ae||ae.test(Ze.namespace))&&(!m||m===Ze.selector||m==="**"&&Ze.selector)&&(st.splice(xe--,1),Ze.selector&&st.delegateCount--,Be.remove&&Be.remove.call(s,Ze));st.length===0&&V!==st.length&&((!Be.teardown||Be.teardown.call(s,ae)===!1)&&c.removeEvent(s,j,E.handle),delete ie[j])}c.isEmptyObject(ie)&&(ze=E.handle,ze&&(ze.elem=null),c.removeData(s,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(s,a,f,m){if(!f||f.nodeType!==3&&f.nodeType!==8){var M=s.type||s,E=[],L,I,j,q,ae,V,xe,ie,Be,ze;if(it.test(M+c.event.triggered)||(M.indexOf("!")>=0&&(M=M.slice(0,-1),I=!0),M.indexOf(".")>=0&&(E=M.split("."),M=E.shift(),E.sort()),(!f||c.event.customEvent[M])&&!c.event.global[M]))return;if(s=typeof s=="object"?s[c.expando]?s:new c.Event(M,s):new c.Event(M),s.type=M,s.isTrigger=!0,s.exclusive=I,s.namespace=E.join("."),s.namespace_re=s.namespace?new RegExp("(^|\\.)"+E.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,V=M.indexOf(":")<0?"on"+M:"",!f){L=c.cache;for(j in L)L[j].events&&L[j].events[M]&&c.event.trigger(s,a,L[j].handle.elem,!0);return}if(s.result=e,s.target||(s.target=f),a=a!=null?c.makeArray(a):[],a.unshift(s),xe=c.event.special[M]||{},xe.trigger&&xe.trigger.apply(f,a)===!1)return;if(Be=[[f,xe.bindType||M]],!m&&!xe.noBubble&&!c.isWindow(f)){for(ze=xe.delegateType||M,q=it.test(ze+M)?f:f.parentNode,ae=null;q;q=q.parentNode)Be.push([q,ze]),ae=q;ae&&ae===f.ownerDocument&&Be.push([ae.defaultView||ae.parentWindow||i,ze])}for(j=0;j<Be.length&&!s.isPropagationStopped();j++)q=Be[j][0],s.type=Be[j][1],ie=(c._data(q,"events")||{})[s.type]&&c._data(q,"handle"),ie&&ie.apply(q,a),ie=V&&q[V],ie&&c.acceptData(q)&&ie.apply(q,a)===!1&&s.preventDefault();return s.type=M,!m&&!s.isDefaultPrevented()&&(!xe._default||xe._default.apply(f.ownerDocument,a)===!1)&&(M!=="click"||!c.nodeName(f,"a"))&&c.acceptData(f)&&V&&f[M]&&(M!=="focus"&&M!=="blur"||s.target.offsetWidth!==0)&&!c.isWindow(f)&&(ae=f[V],ae&&(f[V]=null),c.event.triggered=M,f[M](),c.event.triggered=e,ae&&(f[V]=ae)),s.result}},dispatch:function(s){s=c.event.fix(s||i.event);var a=(c._data(this,"events")||{})[s.type]||[],f=a.delegateCount,m=[].slice.call(arguments,0),M=!s.exclusive&&!s.namespace,E=c.event.special[s.type]||{},L=[],I,j,q,ae,V,xe,ie,Be,ze,st;if(m[0]=s,s.delegateTarget=this,!E.preDispatch||E.preDispatch.call(this,s)!==!1){if(f&&(!s.button||s.type!=="click")){for(ae=c(this),ae.context=this.ownerDocument||this,q=s.target;q!=this;q=q.parentNode||this)if(q.disabled!==!0){for(xe={},Be=[],ae[0]=q,I=0;I<f;I++)ze=a[I],st=ze.selector,xe[st]===e&&(xe[st]=ze.quick?ne(q,ze.quick):ae.is(st)),xe[st]&&Be.push(ze);Be.length&&L.push({elem:q,matches:Be})}}for(a.length>f&&L.push({elem:this,matches:a.slice(f)}),I=0;I<L.length&&!s.isPropagationStopped();I++)for(ie=L[I],s.currentTarget=ie.elem,j=0;j<ie.matches.length&&!s.isImmediatePropagationStopped();j++)ze=ie.matches[j],(M||!s.namespace&&!ze.namespace||s.namespace_re&&s.namespace_re.test(ze.namespace))&&(s.data=ze.data,s.handleObj=ze,V=((c.event.special[ze.origType]||{}).handle||ze.handler).apply(ie.elem,m),V!==e&&(s.result=V,V===!1&&(s.preventDefault(),s.stopPropagation())));return E.postDispatch&&E.postDispatch.call(this,s),s.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(s,a){return s.which==null&&(s.which=a.charCode!=null?a.charCode:a.keyCode),s}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(s,a){var f,m,M,E=a.button,L=a.fromElement;return s.pageX==null&&a.clientX!=null&&(f=s.target.ownerDocument||X,m=f.documentElement,M=f.body,s.pageX=a.clientX+(m&&m.scrollLeft||M&&M.scrollLeft||0)-(m&&m.clientLeft||M&&M.clientLeft||0),s.pageY=a.clientY+(m&&m.scrollTop||M&&M.scrollTop||0)-(m&&m.clientTop||M&&M.clientTop||0)),!s.relatedTarget&&L&&(s.relatedTarget=L===s.target?a.toElement:L),!s.which&&E!==e&&(s.which=E&1?1:E&2?3:E&4?2:0),s}},fix:function(s){if(s[c.expando])return s;var a,f,m=s,M=c.event.fixHooks[s.type]||{},E=M.props?this.props.concat(M.props):this.props;for(s=c.Event(m),a=E.length;a;)f=E[--a],s[f]=m[f];return s.target||(s.target=m.srcElement||X),s.target.nodeType===3&&(s.target=s.target.parentNode),s.metaKey===e&&(s.metaKey=s.ctrlKey),M.filter?M.filter(s,m):s},special:{ready:{setup:c.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(s,a,f){c.isWindow(this)&&(this.onbeforeunload=f)},teardown:function(s,a){this.onbeforeunload===a&&(this.onbeforeunload=null)}}},simulate:function(s,a,f,m){var M=c.extend(new c.Event,f,{type:s,isSimulated:!0,originalEvent:{}});m?c.event.trigger(M,null,a):c.event.dispatch.call(a,M),M.isDefaultPrevented()&&f.preventDefault()}},c.event.handle=c.event.dispatch,c.removeEvent=X.removeEventListener?function(s,a,f){s.removeEventListener&&s.removeEventListener(a,f,!1)}:function(s,a,f){s.detachEvent&&s.detachEvent("on"+a,f)},c.Event=function(s,a){if(!(this instanceof c.Event))return new c.Event(s,a);s&&s.type?(this.originalEvent=s,this.type=s.type,this.isDefaultPrevented=s.defaultPrevented||s.returnValue===!1||s.getPreventDefault&&s.getPreventDefault()?T:z):this.type=s,a&&c.extend(this,a),this.timeStamp=s&&s.timeStamp||c.now(),this[c.expando]=!0},c.Event.prototype={preventDefault:function(){this.isDefaultPrevented=T;var s=this.originalEvent;!s||(s.preventDefault?s.preventDefault():s.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=T;var s=this.originalEvent;!s||(s.stopPropagation&&s.stopPropagation(),s.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=T,this.stopPropagation()},isDefaultPrevented:z,isPropagationStopped:z,isImmediatePropagationStopped:z},c.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(s,a){c.event.special[s]={delegateType:a,bindType:a,handle:function(f){var m=this,M=f.relatedTarget,E=f.handleObj;E.selector;var L;return(!M||M!==m&&!c.contains(m,M))&&(f.type=E.origType,L=E.handler.apply(this,arguments),f.type=a),L}}}),c.support.submitBubbles||(c.event.special.submit={setup:function(){if(c.nodeName(this,"form"))return!1;c.event.add(this,"click._submit keypress._submit",function(s){var a=s.target,f=c.nodeName(a,"input")||c.nodeName(a,"button")?a.form:e;f&&!f._submit_attached&&(c.event.add(f,"submit._submit",function(m){m._submit_bubble=!0}),f._submit_attached=!0)})},postDispatch:function(s){s._submit_bubble&&(delete s._submit_bubble,this.parentNode&&!s.isTrigger&&c.event.simulate("submit",this.parentNode,s,!0))},teardown:function(){if(c.nodeName(this,"form"))return!1;c.event.remove(this,"._submit")}}),c.support.changeBubbles||(c.event.special.change={setup:function(){if(qt.test(this.nodeName))return(this.type==="checkbox"||this.type==="radio")&&(c.event.add(this,"propertychange._change",function(s){s.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),c.event.add(this,"click._change",function(s){this._just_changed&&!s.isTrigger&&(this._just_changed=!1,c.event.simulate("change",this,s,!0))})),!1;c.event.add(this,"beforeactivate._change",function(s){var a=s.target;qt.test(a.nodeName)&&!a._change_attached&&(c.event.add(a,"change._change",function(f){this.parentNode&&!f.isSimulated&&!f.isTrigger&&c.event.simulate("change",this.parentNode,f,!0)}),a._change_attached=!0)})},handle:function(s){var a=s.target;if(this!==a||s.isSimulated||s.isTrigger||a.type!=="radio"&&a.type!=="checkbox")return s.handleObj.handler.apply(this,arguments)},teardown:function(){return c.event.remove(this,"._change"),qt.test(this.nodeName)}}),c.support.focusinBubbles||c.each({focus:"focusin",blur:"focusout"},function(s,a){var f=0,m=function(M){c.event.simulate(a,M.target,c.event.fix(M),!0)};c.event.special[a]={setup:function(){f++===0&&X.addEventListener(s,m,!0)},teardown:function(){--f===0&&X.removeEventListener(s,m,!0)}}}),c.fn.extend({on:function(s,a,f,m,M){var E,L;if(typeof s=="object"){typeof a!="string"&&(f=f||a,a=e);for(L in s)this.on(L,a,f,s[L],M);return this}if(f==null&&m==null?(m=a,f=a=e):m==null&&(typeof a=="string"?(m=f,f=e):(m=f,f=a,a=e)),m===!1)m=z;else if(!m)return this;return M===1&&(E=m,m=function(I){return c().off(I),E.apply(this,arguments)},m.guid=E.guid||(E.guid=c.guid++)),this.each(function(){c.event.add(this,s,m,f,a)})},one:function(s,a,f,m){return this.on(s,a,f,m,1)},off:function(s,a,f){if(s&&s.preventDefault&&s.handleObj){var m=s.handleObj;return c(s.delegateTarget).off(m.namespace?m.origType+"."+m.namespace:m.origType,m.selector,m.handler),this}if(typeof s=="object"){for(var M in s)this.off(M,a,s[M]);return this}return(a===!1||typeof a=="function")&&(f=a,a=e),f===!1&&(f=z),this.each(function(){c.event.remove(this,s,f,a)})},bind:function(s,a,f){return this.on(s,null,a,f)},unbind:function(s,a){return this.off(s,null,a)},live:function(s,a,f){return c(this.context).on(s,this.selector,a,f),this},die:function(s,a){return c(this.context).off(s,this.selector||"**",a),this},delegate:function(s,a,f,m){return this.on(a,s,f,m)},undelegate:function(s,a,f){return arguments.length==1?this.off(s,"**"):this.off(a,s,f)},trigger:function(s,a){return this.each(function(){c.event.trigger(s,a,this)})},triggerHandler:function(s,a){if(this[0])return c.event.trigger(s,a,this[0],!0)},toggle:function(s){var a=arguments,f=s.guid||c.guid++,m=0,M=function(E){var L=(c._data(this,"lastToggle"+s.guid)||0)%m;return c._data(this,"lastToggle"+s.guid,L+1),E.preventDefault(),a[L].apply(this,arguments)||!1};for(M.guid=f;m<a.length;)a[m++].guid=f;return this.click(M)},hover:function(s,a){return this.mouseenter(s).mouseleave(a||s)}}),c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(s,a){c.fn[a]=function(f,m){return m==null&&(m=f,f=null),arguments.length>0?this.on(a,null,f,m):this.trigger(a)},c.attrFn&&(c.attrFn[a]=!0),Qe.test(a)&&(c.event.fixHooks[a]=c.event.keyHooks),Bt.test(a)&&(c.event.fixHooks[a]=c.event.mouseHooks)}),function(){function s(P,H,te,re,me,fe){for(var Se=0,Ae=re.length;Se<Ae;Se++){var Pe=re[Se];if(Pe){var qe=!1;for(Pe=Pe[P];Pe;){if(Pe[m]===te){qe=re[Pe.sizset];break}if(Pe.nodeType===1){if(fe||(Pe[m]=te,Pe.sizset=Se),typeof H!="string"){if(Pe===H){qe=!0;break}}else if(V.filter(H,[Pe]).length>0){qe=Pe;break}}Pe=Pe[P]}re[Se]=qe}}}function a(P,H,te,re,me,fe){for(var Se=0,Ae=re.length;Se<Ae;Se++){var Pe=re[Se];if(Pe){var qe=!1;for(Pe=Pe[P];Pe;){if(Pe[m]===te){qe=re[Pe.sizset];break}if(Pe.nodeType===1&&!fe&&(Pe[m]=te,Pe.sizset=Se),Pe.nodeName.toLowerCase()===H){qe=Pe;break}Pe=Pe[P]}re[Se]=qe}}}var f=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,m="sizcache"+(Math.random()+"").replace(".",""),M=0,E=Object.prototype.toString,L=!1,I=!0,j=/\\/g,q=/\r\n/g,ae=/\W/;[0,0].sort(function(){return I=!1,0});var V=function(P,H,te,re){te=te||[],H=H||X;var me=H;if(H.nodeType!==1&&H.nodeType!==9)return[];if(!P||typeof P!="string")return te;var fe,Se,Ae,Pe,qe,ln,k,he,Ce=!0,be=V.isXML(H),ke=[],St=P;do if(f.exec(""),fe=f.exec(St),fe&&(St=fe[3],ke.push(fe[1]),fe[2])){Pe=fe[3];break}while(fe);if(ke.length>1&&Be.exec(P))if(ke.length===2&&ie.relative[ke[0]])Se=ft(ke[0]+ke[1],H,re);else for(Se=ie.relative[ke[0]]?[H]:V(ke.shift(),H);ke.length;)P=ke.shift(),ie.relative[P]&&(P+=ke.shift()),Se=ft(P,Se,re);else if(!re&&ke.length>1&&H.nodeType===9&&!be&&ie.match.ID.test(ke[0])&&!ie.match.ID.test(ke[ke.length-1])&&(qe=V.find(ke.shift(),H,be),H=qe.expr?V.filter(qe.expr,qe.set)[0]:qe.set[0]),H)for(qe=re?{expr:ke.pop(),set:Ze(re)}:V.find(ke.pop(),ke.length===1&&(ke[0]==="~"||ke[0]==="+")&&H.parentNode?H.parentNode:H,be),Se=qe.expr?V.filter(qe.expr,qe.set):qe.set,ke.length>0?Ae=Ze(Se):Ce=!1;ke.length;)ln=ke.pop(),k=ln,ie.relative[ln]?k=ke.pop():ln="",k==null&&(k=H),ie.relative[ln](Ae,k,be);else Ae=ke=[];if(Ae||(Ae=Se),Ae||V.error(ln||P),E.call(Ae)==="[object Array]")if(!Ce)te.push.apply(te,Ae);else if(H&&H.nodeType===1)for(he=0;Ae[he]!=null;he++)Ae[he]&&(Ae[he]===!0||Ae[he].nodeType===1&&V.contains(H,Ae[he]))&&te.push(Se[he]);else for(he=0;Ae[he]!=null;he++)Ae[he]&&Ae[he].nodeType===1&&te.push(Se[he]);else Ze(Ae,te);return Pe&&(V(Pe,me,te,re),V.uniqueSort(te)),te};V.uniqueSort=function(P){if(Wt&&(L=I,P.sort(Wt),L))for(var H=1;H<P.length;H++)P[H]===P[H-1]&&P.splice(H--,1);return P},V.matches=function(P,H){return V(P,null,null,H)},V.matchesSelector=function(P,H){return V(H,null,null,[P]).length>0},V.find=function(P,H,te){var re,me,fe,Se,Ae,Pe;if(!P)return[];for(me=0,fe=ie.order.length;me<fe;me++)if(Ae=ie.order[me],(Se=ie.leftMatch[Ae].exec(P))&&(Pe=Se[1],Se.splice(1,1),Pe.substr(Pe.length-1)!=="\\"&&(Se[1]=(Se[1]||"").replace(j,""),re=ie.find[Ae](Se,H,te),re!=null))){P=P.replace(ie.match[Ae],"");break}return re||(re=typeof H.getElementsByTagName<"u"?H.getElementsByTagName("*"):[]),{set:re,expr:P}},V.filter=function(P,H,te,re){for(var me,fe,Se,Ae,Pe,qe,ln,k,he,Ce=P,be=[],ke=H,St=H&&H[0]&&V.isXML(H[0]);P&&H.length;){for(Se in ie.filter)if((me=ie.leftMatch[Se].exec(P))!=null&&me[2]){if(qe=ie.filter[Se],ln=me[1],fe=!1,me.splice(1,1),ln.substr(ln.length-1)==="\\")continue;if(ke===be&&(be=[]),ie.preFilter[Se]){if(me=ie.preFilter[Se](me,ke,te,be,re,St),!me)fe=Ae=!0;else if(me===!0)continue}if(me)for(k=0;(Pe=ke[k])!=null;k++)Pe&&(Ae=qe(Pe,me,k,ke),he=re^Ae,te&&Ae!=null?he?fe=!0:ke[k]=!1:he&&(be.push(Pe),fe=!0));if(Ae!==e){if(te||(ke=be),P=P.replace(ie.match[Se],""),!fe)return[];break}}if(P===Ce)if(fe==null)V.error(P);else break;Ce=P}return ke},V.error=function(P){throw new Error("Syntax error, unrecognized expression: "+P)};var xe=V.getText=function(P){var H,te,re=P.nodeType,me="";if(re){if(re===1||re===9||re===11){if(typeof P.textContent=="string")return P.textContent;if(typeof P.innerText=="string")return P.innerText.replace(q,"");for(P=P.firstChild;P;P=P.nextSibling)me+=xe(P)}else if(re===3||re===4)return P.nodeValue}else for(H=0;te=P[H];H++)te.nodeType!==8&&(me+=xe(te));return me},ie=V.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{class:"className",for:"htmlFor"},attrHandle:{href:function(P){return P.getAttribute("href")},type:function(P){return P.getAttribute("type")}},relative:{"+":function(P,H){var te=typeof H=="string",re=te&&!ae.test(H),me=te&&!re;re&&(H=H.toLowerCase());for(var fe=0,Se=P.length,Ae;fe<Se;fe++)if(Ae=P[fe]){for(;(Ae=Ae.previousSibling)&&Ae.nodeType!==1;);P[fe]=me||Ae&&Ae.nodeName.toLowerCase()===H?Ae||!1:Ae===H}me&&V.filter(H,P,!0)},">":function(P,H){var te,re=typeof H=="string",me=0,fe=P.length;if(re&&!ae.test(H)){for(H=H.toLowerCase();me<fe;me++)if(te=P[me],te){var Se=te.parentNode;P[me]=Se.nodeName.toLowerCase()===H?Se:!1}}else{for(;me<fe;me++)te=P[me],te&&(P[me]=re?te.parentNode:te.parentNode===H);re&&V.filter(H,P,!0)}},"":function(P,H,te){var re,me=M++,fe=s;typeof H=="string"&&!ae.test(H)&&(H=H.toLowerCase(),re=H,fe=a),fe("parentNode",H,me,P,re,te)},"~":function(P,H,te){var re,me=M++,fe=s;typeof H=="string"&&!ae.test(H)&&(H=H.toLowerCase(),re=H,fe=a),fe("previousSibling",H,me,P,re,te)}},find:{ID:function(P,H,te){if(typeof H.getElementById<"u"&&!te){var re=H.getElementById(P[1]);return re&&re.parentNode?[re]:[]}},NAME:function(P,H){if(typeof H.getElementsByName<"u"){for(var te=[],re=H.getElementsByName(P[1]),me=0,fe=re.length;me<fe;me++)re[me].getAttribute("name")===P[1]&&te.push(re[me]);return te.length===0?null:te}},TAG:function(P,H){if(typeof H.getElementsByTagName<"u")return H.getElementsByTagName(P[1])}},preFilter:{CLASS:function(P,H,te,re,me,fe){if(P=" "+P[1].replace(j,"")+" ",fe)return P;for(var Se=0,Ae;(Ae=H[Se])!=null;Se++)Ae&&(me^(Ae.className&&(" "+Ae.className+" ").replace(/[\t\n\r]/g," ").indexOf(P)>=0)?te||re.push(Ae):te&&(H[Se]=!1));return!1},ID:function(P){return P[1].replace(j,"")},TAG:function(P,H){return P[1].replace(j,"").toLowerCase()},CHILD:function(P){if(P[1]==="nth"){P[2]||V.error(P[0]),P[2]=P[2].replace(/^\+|\s*/g,"");var H=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(P[2]==="even"&&"2n"||P[2]==="odd"&&"2n+1"||!/\D/.test(P[2])&&"0n+"+P[2]||P[2]);P[2]=H[1]+(H[2]||1)-0,P[3]=H[3]-0}else P[2]&&V.error(P[0]);return P[0]=M++,P},ATTR:function(P,H,te,re,me,fe){var Se=P[1]=P[1].replace(j,"");return!fe&&ie.attrMap[Se]&&(P[1]=ie.attrMap[Se]),P[4]=(P[4]||P[5]||"").replace(j,""),P[2]==="~="&&(P[4]=" "+P[4]+" "),P},PSEUDO:function(P,H,te,re,me){if(P[1]==="not")if((f.exec(P[3])||"").length>1||/^\w/.test(P[3]))P[3]=V(P[3],null,null,H);else{var fe=V.filter(P[3],H,te,!0^me);return te||re.push.apply(re,fe),!1}else if(ie.match.POS.test(P[0])||ie.match.CHILD.test(P[0]))return!0;return P},POS:function(P){return P.unshift(!0),P}},filters:{enabled:function(P){return P.disabled===!1&&P.type!=="hidden"},disabled:function(P){return P.disabled===!0},checked:function(P){return P.checked===!0},selected:function(P){return P.parentNode&&P.parentNode.selectedIndex,P.selected===!0},parent:function(P){return!!P.firstChild},empty:function(P){return!P.firstChild},has:function(P,H,te){return!!V(te[3],P).length},header:function(P){return/h\d/i.test(P.nodeName)},text:function(P){var H=P.getAttribute("type"),te=P.type;return P.nodeName.toLowerCase()==="input"&&te==="text"&&(H===te||H===null)},radio:function(P){return P.nodeName.toLowerCase()==="input"&&P.type==="radio"},checkbox:function(P){return P.nodeName.toLowerCase()==="input"&&P.type==="checkbox"},file:function(P){return P.nodeName.toLowerCase()==="input"&&P.type==="file"},password:function(P){return P.nodeName.toLowerCase()==="input"&&P.type==="password"},submit:function(P){var H=P.nodeName.toLowerCase();return(H==="input"||H==="button")&&P.type==="submit"},image:function(P){return P.nodeName.toLowerCase()==="input"&&P.type==="image"},reset:function(P){var H=P.nodeName.toLowerCase();return(H==="input"||H==="button")&&P.type==="reset"},button:function(P){var H=P.nodeName.toLowerCase();return H==="input"&&P.type==="button"||H==="button"},input:function(P){return/input|select|textarea|button/i.test(P.nodeName)},focus:function(P){return P===P.ownerDocument.activeElement}},setFilters:{first:function(P,H){return H===0},last:function(P,H,te,re){return H===re.length-1},even:function(P,H){return H%2===0},odd:function(P,H){return H%2===1},lt:function(P,H,te){return H<te[3]-0},gt:function(P,H,te){return H>te[3]-0},nth:function(P,H,te){return te[3]-0===H},eq:function(P,H,te){return te[3]-0===H}},filter:{PSEUDO:function(P,H,te,re){var me=H[1],fe=ie.filters[me];if(fe)return fe(P,te,H,re);if(me==="contains")return(P.textContent||P.innerText||xe([P])||"").indexOf(H[3])>=0;if(me==="not"){for(var Se=H[3],Ae=0,Pe=Se.length;Ae<Pe;Ae++)if(Se[Ae]===P)return!1;return!0}V.error(me)},CHILD:function(P,H){var te,re,me,fe,Se,Ae,Pe=H[1],qe=P;switch(Pe){case"only":case"first":for(;qe=qe.previousSibling;)if(qe.nodeType===1)return!1;if(Pe==="first")return!0;qe=P;case"last":for(;qe=qe.nextSibling;)if(qe.nodeType===1)return!1;return!0;case"nth":if(te=H[2],re=H[3],te===1&&re===0)return!0;if(me=H[0],fe=P.parentNode,fe&&(fe[m]!==me||!P.nodeIndex)){for(Se=0,qe=fe.firstChild;qe;qe=qe.nextSibling)qe.nodeType===1&&(qe.nodeIndex=++Se);fe[m]=me}return Ae=P.nodeIndex-re,te===0?Ae===0:Ae%te===0&&Ae/te>=0}},ID:function(P,H){return P.nodeType===1&&P.getAttribute("id")===H},TAG:function(P,H){return H==="*"&&P.nodeType===1||!!P.nodeName&&P.nodeName.toLowerCase()===H},CLASS:function(P,H){return(" "+(P.className||P.getAttribute("class"))+" ").indexOf(H)>-1},ATTR:function(P,H){var te=H[1],re=V.attr?V.attr(P,te):ie.attrHandle[te]?ie.attrHandle[te](P):P[te]!=null?P[te]:P.getAttribute(te),me=re+"",fe=H[2],Se=H[4];return re==null?fe==="!=":!fe&&V.attr?re!=null:fe==="="?me===Se:fe==="*="?me.indexOf(Se)>=0:fe==="~="?(" "+me+" ").indexOf(Se)>=0:Se?fe==="!="?me!==Se:fe==="^="?me.indexOf(Se)===0:fe==="$="?me.substr(me.length-Se.length)===Se:fe==="|="?me===Se||me.substr(0,Se.length+1)===Se+"-":!1:me&&re!==!1},POS:function(P,H,te,re){var me=H[2],fe=ie.setFilters[me];if(fe)return fe(P,te,H,re)}}},Be=ie.match.POS,ze=function(P,H){return"\\"+(H-0+1)};for(var st in ie.match)ie.match[st]=new RegExp(ie.match[st].source+/(?![^\[]*\])(?![^\(]*\))/.source),ie.leftMatch[st]=new RegExp(/(^(?:.|\r|\n)*?)/.source+ie.match[st].source.replace(/\\(\d+)/g,ze));ie.match.globalPOS=Be;var Ze=function(P,H){return P=Array.prototype.slice.call(P,0),H?(H.push.apply(H,P),H):P};try{Array.prototype.slice.call(X.documentElement.childNodes,0)[0].nodeType}catch{Ze=function(H,te){var re=0,me=te||[];if(E.call(H)==="[object Array]")Array.prototype.push.apply(me,H);else if(typeof H.length=="number")for(var fe=H.length;re<fe;re++)me.push(H[re]);else for(;H[re];re++)me.push(H[re]);return me}}var Wt,Xt;X.documentElement.compareDocumentPosition?Wt=function(P,H){return P===H?(L=!0,0):!P.compareDocumentPosition||!H.compareDocumentPosition?P.compareDocumentPosition?-1:1:P.compareDocumentPosition(H)&4?-1:1}:(Wt=function(P,H){if(P===H)return L=!0,0;if(P.sourceIndex&&H.sourceIndex)return P.sourceIndex-H.sourceIndex;var te,re,me=[],fe=[],Se=P.parentNode,Ae=H.parentNode,Pe=Se;if(Se===Ae)return Xt(P,H);if(!Se)return-1;if(!Ae)return 1;for(;Pe;)me.unshift(Pe),Pe=Pe.parentNode;for(Pe=Ae;Pe;)fe.unshift(Pe),Pe=Pe.parentNode;te=me.length,re=fe.length;for(var qe=0;qe<te&&qe<re;qe++)if(me[qe]!==fe[qe])return Xt(me[qe],fe[qe]);return qe===te?Xt(P,fe[qe],-1):Xt(me[qe],H,1)},Xt=function(P,H,te){if(P===H)return te;for(var re=P.nextSibling;re;){if(re===H)return-1;re=re.nextSibling}return 1}),function(){var P=X.createElement("div"),H="script"+new Date().getTime(),te=X.documentElement;P.innerHTML="<a name='"+H+"'/>",te.insertBefore(P,te.firstChild),X.getElementById(H)&&(ie.find.ID=function(re,me,fe){if(typeof me.getElementById<"u"&&!fe){var Se=me.getElementById(re[1]);return Se?Se.id===re[1]||typeof Se.getAttributeNode<"u"&&Se.getAttributeNode("id").nodeValue===re[1]?[Se]:e:[]}},ie.filter.ID=function(re,me){var fe=typeof re.getAttributeNode<"u"&&re.getAttributeNode("id");return re.nodeType===1&&fe&&fe.nodeValue===me}),te.removeChild(P),te=P=null}(),function(){var P=X.createElement("div");P.appendChild(X.createComment("")),P.getElementsByTagName("*").length>0&&(ie.find.TAG=function(H,te){var re=te.getElementsByTagName(H[1]);if(H[1]==="*"){for(var me=[],fe=0;re[fe];fe++)re[fe].nodeType===1&&me.push(re[fe]);re=me}return re}),P.innerHTML="<a href='#'></a>",P.firstChild&&typeof P.firstChild.getAttribute<"u"&&P.firstChild.getAttribute("href")!=="#"&&(ie.attrHandle.href=function(H){return H.getAttribute("href",2)}),P=null}(),X.querySelectorAll&&function(){var P=V,H=X.createElement("div"),te="__sizzle__";if(H.innerHTML="<p class='TEST'></p>",!H.querySelectorAll||H.querySelectorAll(".TEST").length!==0){V=function(me,fe,Se,Ae){if(fe=fe||X,!Ae&&!V.isXML(fe)){var Pe=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(me);if(Pe&&(fe.nodeType===1||fe.nodeType===9)){if(Pe[1])return Ze(fe.getElementsByTagName(me),Se);if(Pe[2]&&ie.find.CLASS&&fe.getElementsByClassName)return Ze(fe.getElementsByClassName(Pe[2]),Se)}if(fe.nodeType===9){if(me==="body"&&fe.body)return Ze([fe.body],Se);if(Pe&&Pe[3]){var qe=fe.getElementById(Pe[3]);if(!qe||!qe.parentNode)return Ze([],Se);if(qe.id===Pe[3])return Ze([qe],Se)}try{return Ze(fe.querySelectorAll(me),Se)}catch{}}else if(fe.nodeType===1&&fe.nodeName.toLowerCase()!=="object"){var ln=fe,k=fe.getAttribute("id"),he=k||te,Ce=fe.parentNode,be=/^\s*[+~]/.test(me);k?he=he.replace(/'/g,"\\$&"):fe.setAttribute("id",he),be&&Ce&&(fe=fe.parentNode);try{if(!be||Ce)return Ze(fe.querySelectorAll("[id='"+he+"'] "+me),Se)}catch{}finally{k||ln.removeAttribute("id")}}}return P(me,fe,Se,Ae)};for(var re in P)V[re]=P[re];H=null}}(),function(){var P=X.documentElement,H=P.matchesSelector||P.mozMatchesSelector||P.webkitMatchesSelector||P.msMatchesSelector;if(H){var te=!H.call(X.createElement("div"),"div"),re=!1;try{H.call(X.documentElement,"[test!='']:sizzle")}catch{re=!0}V.matchesSelector=function(me,fe){if(fe=fe.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']"),!V.isXML(me))try{if(re||!ie.match.PSEUDO.test(fe)&&!/!=/.test(fe)){var Se=H.call(me,fe);if(Se||!te||me.document&&me.document.nodeType!==11)return Se}}catch{}return V(fe,null,null,[me]).length>0}}}(),function(){var P=X.createElement("div");if(P.innerHTML="<div class='test e'></div><div class='test'></div>",P.getElementsByClassName&&P.getElementsByClassName("e").length!==0){if(P.lastChild.className="e",P.getElementsByClassName("e").length===1)return;ie.order.splice(1,0,"CLASS"),ie.find.CLASS=function(H,te,re){if(typeof te.getElementsByClassName<"u"&&!re)return te.getElementsByClassName(H[1])},P=null}}(),X.documentElement.contains?V.contains=function(P,H){return P!==H&&(P.contains?P.contains(H):!0)}:X.documentElement.compareDocumentPosition?V.contains=function(P,H){return!!(P.compareDocumentPosition(H)&16)}:V.contains=function(){return!1},V.isXML=function(P){var H=(P?P.ownerDocument||P:0).documentElement;return H?H.nodeName!=="HTML":!1};var ft=function(P,H,te){for(var re,me=[],fe="",Se=H.nodeType?[H]:H;re=ie.match.PSEUDO.exec(P);)fe+=re[0],P=P.replace(ie.match.PSEUDO,"");P=ie.relative[P]?P+"*":P;for(var Ae=0,Pe=Se.length;Ae<Pe;Ae++)V(P,Se[Ae],me,te);return V.filter(fe,me)};V.attr=c.attr,V.selectors.attrMap={},c.find=V,c.expr=V.selectors,c.expr[":"]=c.expr.filters,c.unique=V.uniqueSort,c.text=V.getText,c.isXMLDoc=V.isXML,c.contains=V.contains}();var Me=/Until$/,ge=/^(?:parents|prevUntil|prevAll)/,et=/,/,Ne=/^.[^:#\[\.,]*$/,Ve=Array.prototype.slice,Tt=c.expr.match.globalPOS,we={children:!0,contents:!0,next:!0,prev:!0};c.fn.extend({find:function(s){var a=this,f,m;if(typeof s!="string")return c(s).filter(function(){for(f=0,m=a.length;f<m;f++)if(c.contains(a[f],this))return!0});var M=this.pushStack("","find",s),E,L,I;for(f=0,m=this.length;f<m;f++)if(E=M.length,c.find(s,this[f],M),f>0){for(L=E;L<M.length;L++)for(I=0;I<E;I++)if(M[I]===M[L]){M.splice(L--,1);break}}return M},has:function(s){var a=c(s);return this.filter(function(){for(var f=0,m=a.length;f<m;f++)if(c.contains(this,a[f]))return!0})},not:function(s){return this.pushStack(G(this,s,!1),"not",s)},filter:function(s){return this.pushStack(G(this,s,!0),"filter",s)},is:function(s){return!!s&&(typeof s=="string"?Tt.test(s)?c(s,this.context).index(this[0])>=0:c.filter(s,this).length>0:this.filter(s).length>0)},closest:function(s,a){var f=[],m,M,E=this[0];if(c.isArray(s)){for(var L=1;E&&E.ownerDocument&&E!==a;){for(m=0;m<s.length;m++)c(E).is(s[m])&&f.push({selector:s[m],elem:E,level:L});E=E.parentNode,L++}return f}var I=Tt.test(s)||typeof s!="string"?c(s,a||this.context):0;for(m=0,M=this.length;m<M;m++)for(E=this[m];E;){if(I?I.index(E)>-1:c.find.matchesSelector(E,s)){f.push(E);break}if(E=E.parentNode,!E||!E.ownerDocument||E===a||E.nodeType===11)break}return f=f.length>1?c.unique(f):f,this.pushStack(f,"closest",s)},index:function(s){return s?typeof s=="string"?c.inArray(this[0],c(s)):c.inArray(s.jquery?s[0]:s,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(s,a){var f=typeof s=="string"?c(s,a):c.makeArray(s&&s.nodeType?[s]:s),m=c.merge(this.get(),f);return this.pushStack(R(f[0])||R(m[0])?m:c.unique(m))},andSelf:function(){return this.add(this.prevObject)}}),c.each({parent:function(s){var a=s.parentNode;return a&&a.nodeType!==11?a:null},parents:function(s){return c.dir(s,"parentNode")},parentsUntil:function(s,a,f){return c.dir(s,"parentNode",f)},next:function(s){return c.nth(s,2,"nextSibling")},prev:function(s){return c.nth(s,2,"previousSibling")},nextAll:function(s){return c.dir(s,"nextSibling")},prevAll:function(s){return c.dir(s,"previousSibling")},nextUntil:function(s,a,f){return c.dir(s,"nextSibling",f)},prevUntil:function(s,a,f){return c.dir(s,"previousSibling",f)},siblings:function(s){return c.sibling((s.parentNode||{}).firstChild,s)},children:function(s){return c.sibling(s.firstChild)},contents:function(s){return c.nodeName(s,"iframe")?s.contentDocument||s.contentWindow.document:c.makeArray(s.childNodes)}},function(s,a){c.fn[s]=function(f,m){var M=c.map(this,a,f);return Me.test(s)||(m=f),m&&typeof m=="string"&&(M=c.filter(m,M)),M=this.length>1&&!we[s]?c.unique(M):M,(this.length>1||et.test(m))&&ge.test(s)&&(M=M.reverse()),this.pushStack(M,s,Ve.call(arguments).join(","))}}),c.extend({filter:function(s,a,f){return f&&(s=":not("+s+")"),a.length===1?c.find.matchesSelector(a[0],s)?[a[0]]:[]:c.find.matches(s,a)},dir:function(s,a,f){for(var m=[],M=s[a];M&&M.nodeType!==9&&(f===e||M.nodeType!==1||!c(M).is(f));)M.nodeType===1&&m.push(M),M=M[a];return m},nth:function(s,a,f,m){a=a||1;for(var M=0;s&&!(s.nodeType===1&&++M===a);s=s[f]);return s},sibling:function(s,a){for(var f=[];s;s=s.nextSibling)s.nodeType===1&&s!==a&&f.push(s);return f}});var We="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",lt=/ jQuery\d+="(?:\d+|null)"/g,ut=/^\s+/,Xe=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Mt=/<([\w:]+)/,mt=/<tbody/i,Nt=/<|&#?\w+;/,Y=/<(?:script|style)/i,Ie=/<(?:script|object|embed|option|style)/i,ue=new RegExp("<(?:"+We+")[\\s/>]","i"),ve=/checked\s*(?:[^=]|=\s*.checked.)/i,Fe=/\/(java|ecma)script/i,Oe=/^\s*<!(?:\[CDATA\[|\-\-)/,rt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ht=O(X);rt.optgroup=rt.option,rt.tbody=rt.tfoot=rt.colgroup=rt.caption=rt.thead,rt.th=rt.td,c.support.htmlSerialize||(rt._default=[1,"div<div>","</div>"]),c.fn.extend({text:function(s){return c.access(this,function(a){return a===e?c.text(this):this.empty().append((this[0]&&this[0].ownerDocument||X).createTextNode(a))},null,s,arguments.length)},wrapAll:function(s){if(c.isFunction(s))return this.each(function(f){c(this).wrapAll(s.call(this,f))});if(this[0]){var a=c(s,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&a.insertBefore(this[0]),a.map(function(){for(var f=this;f.firstChild&&f.firstChild.nodeType===1;)f=f.firstChild;return f}).append(this)}return this},wrapInner:function(s){return c.isFunction(s)?this.each(function(a){c(this).wrapInner(s.call(this,a))}):this.each(function(){var a=c(this),f=a.contents();f.length?f.wrapAll(s):a.append(s)})},wrap:function(s){var a=c.isFunction(s);return this.each(function(f){c(this).wrapAll(a?s.call(this,f):s)})},unwrap:function(){return this.parent().each(function(){c.nodeName(this,"body")||c(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(s){this.nodeType===1&&this.appendChild(s)})},prepend:function(){return this.domManip(arguments,!0,function(s){this.nodeType===1&&this.insertBefore(s,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var s=c.clean(arguments);return s.push.apply(s,this.toArray()),this.pushStack(s,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var s=this.pushStack(this,"after",arguments);return s.push.apply(s,c.clean(arguments)),s}},remove:function(s,a){for(var f=0,m;(m=this[f])!=null;f++)(!s||c.filter(s,[m]).length)&&(!a&&m.nodeType===1&&(c.cleanData(m.getElementsByTagName("*")),c.cleanData([m])),m.parentNode&&m.parentNode.removeChild(m));return this},empty:function(){for(var s=0,a;(a=this[s])!=null;s++)for(a.nodeType===1&&c.cleanData(a.getElementsByTagName("*"));a.firstChild;)a.removeChild(a.firstChild);return this},clone:function(s,a){return s=s??!1,a=a??s,this.map(function(){return c.clone(this,s,a)})},html:function(s){return c.access(this,function(a){var f=this[0]||{},m=0,M=this.length;if(a===e)return f.nodeType===1?f.innerHTML.replace(lt,""):null;if(typeof a=="string"&&!Y.test(a)&&(c.support.leadingWhitespace||!ut.test(a))&&!rt[(Mt.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Xe,"<$1></$2>");try{for(;m<M;m++)f=this[m]||{},f.nodeType===1&&(c.cleanData(f.getElementsByTagName("*")),f.innerHTML=a);f=0}catch{}}f&&this.empty().append(a)},null,s,arguments.length)},replaceWith:function(s){return this[0]&&this[0].parentNode?c.isFunction(s)?this.each(function(a){var f=c(this),m=f.html();f.replaceWith(s.call(this,a,m))}):(typeof s!="string"&&(s=c(s).detach()),this.each(function(){var a=this.nextSibling,f=this.parentNode;c(this).remove(),a?c(a).before(s):c(f).append(s)})):this.length?this.pushStack(c(c.isFunction(s)?s():s),"replaceWith",s):this},detach:function(s){return this.remove(s,!0)},domManip:function(s,a,f){var m,M,E,L,I=s[0],j=[];if(!c.support.checkClone&&arguments.length===3&&typeof I=="string"&&ve.test(I))return this.each(function(){c(this).domManip(s,a,f,!0)});if(c.isFunction(I))return this.each(function(xe){var ie=c(this);s[0]=I.call(this,xe,a?ie.html():e),ie.domManip(s,a,f)});if(this[0]){if(L=I&&I.parentNode,c.support.parentNode&&L&&L.nodeType===11&&L.childNodes.length===this.length?m={fragment:L}:m=c.buildFragment(s,this,j),E=m.fragment,E.childNodes.length===1?M=E=E.firstChild:M=E.firstChild,M){a=a&&c.nodeName(M,"tr");for(var q=0,ae=this.length,V=ae-1;q<ae;q++)f.call(a?F(this[q]):this[q],m.cacheable||ae>1&&q<V?c.clone(E,!0,!0):E)}j.length&&c.each(j,function(xe,ie){ie.src?c.ajax({type:"GET",global:!1,url:ie.src,async:!1,dataType:"script"}):c.globalEval((ie.text||ie.textContent||ie.innerHTML||"").replace(Oe,"/*$0*/")),ie.parentNode&&ie.parentNode.removeChild(ie)})}return this}}),c.buildFragment=function(s,a,f){var m,M,E,L,I=s[0];return a&&a[0]&&(L=a[0].ownerDocument||a[0]),L.createDocumentFragment||(L=X),s.length===1&&typeof I=="string"&&I.length<512&&L===X&&I.charAt(0)==="<"&&!Ie.test(I)&&(c.support.checkClone||!ve.test(I))&&(c.support.html5Clone||!ue.test(I))&&(M=!0,E=c.fragments[I],E&&E!==1&&(m=E)),m||(m=L.createDocumentFragment(),c.clean(s,L,m,f)),M&&(c.fragments[I]=E?m:1),{fragment:m,cacheable:M}},c.fragments={},c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(s,a){c.fn[s]=function(f){var m=[],M=c(f),E=this.length===1&&this[0].parentNode;if(E&&E.nodeType===11&&E.childNodes.length===1&&M.length===1)return M[a](this[0]),this;for(var L=0,I=M.length;L<I;L++){var j=(L>0?this.clone(!0):this).get();c(M[L])[a](j),m=m.concat(j)}return this.pushStack(m,s,M.selector)}}),c.extend({clone:function(s,a,f){var m,M,E,L=c.support.html5Clone||c.isXMLDoc(s)||!ue.test("<"+s.nodeName+">")?s.cloneNode(!0):y(s);if((!c.support.noCloneEvent||!c.support.noCloneChecked)&&(s.nodeType===1||s.nodeType===11)&&!c.isXMLDoc(s))for(w(s,L),m=D(s),M=D(L),E=0;m[E];++E)M[E]&&w(m[E],M[E]);if(a&&(B(s,L),f))for(m=D(s),M=D(L),E=0;m[E];++E)B(m[E],M[E]);return m=M=null,L},clean:function(s,a,f,m){var M,E,L,I=[];a=a||X,typeof a.createElement>"u"&&(a=a.ownerDocument||a[0]&&a[0].ownerDocument||X);for(var j=0,q;(q=s[j])!=null;j++)if(typeof q=="number"&&(q+=""),!!q){if(typeof q=="string")if(!Nt.test(q))q=a.createTextNode(q);else{q=q.replace(Xe,"<$1></$2>");var ae=(Mt.exec(q)||["",""])[1].toLowerCase(),V=rt[ae]||rt._default,xe=V[0],ie=a.createElement("div"),Be=Ht.childNodes,ze;for(a===X?Ht.appendChild(ie):O(a).appendChild(ie),ie.innerHTML=V[1]+q+V[2];xe--;)ie=ie.lastChild;if(!c.support.tbody){var st=mt.test(q),Ze=ae==="table"&&!st?ie.firstChild&&ie.firstChild.childNodes:V[1]==="<table>"&&!st?ie.childNodes:[];for(L=Ze.length-1;L>=0;--L)c.nodeName(Ze[L],"tbody")&&!Ze[L].childNodes.length&&Ze[L].parentNode.removeChild(Ze[L])}!c.support.leadingWhitespace&&ut.test(q)&&ie.insertBefore(a.createTextNode(ut.exec(q)[0]),ie.firstChild),q=ie.childNodes,ie&&(ie.parentNode.removeChild(ie),Be.length>0&&(ze=Be[Be.length-1],ze&&ze.parentNode&&ze.parentNode.removeChild(ze)))}var Wt;if(!c.support.appendChecked)if(q[0]&&typeof(Wt=q.length)=="number")for(L=0;L<Wt;L++)_(q[L]);else _(q);q.nodeType?I.push(q):I=c.merge(I,q)}if(f)for(M=function(ft){return!ft.type||Fe.test(ft.type)},j=0;I[j];j++)if(E=I[j],m&&c.nodeName(E,"script")&&(!E.type||Fe.test(E.type)))m.push(E.parentNode?E.parentNode.removeChild(E):E);else{if(E.nodeType===1){var Xt=c.grep(E.getElementsByTagName("script"),M);I.splice.apply(I,[j+1,0].concat(Xt))}f.appendChild(E)}return I},cleanData:function(s){for(var a,f,m=c.cache,M=c.event.special,E=c.support.deleteExpando,L=0,I;(I=s[L])!=null;L++)if(!(I.nodeName&&c.noData[I.nodeName.toLowerCase()])&&(f=I[c.expando],f)){if(a=m[f],a&&a.events){for(var j in a.events)M[j]?c.event.remove(I,j):c.removeEvent(I,j,a.handle);a.handle&&(a.handle.elem=null)}E?delete I[c.expando]:I.removeAttribute&&I.removeAttribute(c.expando),delete m[f]}}});var $t=/alpha\([^)]*\)/i,Dt=/opacity=([^)]*)/,xn=/([A-Z]|^ms)/g,Cn=/^[\-+]?(?:\d*\.)?\d+$/i,Ni=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,Nr=/^([\-+])=([\-+.\de]+)/,Wn=/^margin/,dr={position:"absolute",visibility:"hidden",display:"block"},Fn=["Top","Right","Bottom","Left"],Xn,xi,pr;c.fn.css=function(s,a){return c.access(this,function(f,m,M){return M!==e?c.style(f,m,M):c.css(f,m)},s,a,arguments.length>1)},c.extend({cssHooks:{opacity:{get:function(s,a){if(a){var f=Xn(s,"opacity");return f===""?"1":f}return s.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:c.support.cssFloat?"cssFloat":"styleFloat"},style:function(s,a,f,m){if(s&&s.nodeType!==3&&s.nodeType!==8&&s.style){var M,E,L=c.camelCase(a),I=s.style,j=c.cssHooks[L];if(a=c.cssProps[L]||L,f===e)return j&&"get"in j&&(M=j.get(s,!1,m))!==e?M:I[a];if(E=typeof f,E==="string"&&(M=Nr.exec(f))&&(f=+(M[1]+1)*+M[2]+parseFloat(c.css(s,a)),E="number"),f==null||E==="number"&&isNaN(f))return;if(E==="number"&&!c.cssNumber[L]&&(f+="px"),!j||!("set"in j)||(f=j.set(s,f))!==e)try{I[a]=f}catch{}}},css:function(s,a,f){var m,M;if(a=c.camelCase(a),M=c.cssHooks[a],a=c.cssProps[a]||a,a==="cssFloat"&&(a="float"),M&&"get"in M&&(m=M.get(s,!0,f))!==e)return m;if(Xn)return Xn(s,a)},swap:function(s,a,f){var m={},M,E;for(E in a)m[E]=s.style[E],s.style[E]=a[E];M=f.call(s);for(E in a)s.style[E]=m[E];return M}}),c.curCSS=c.css,X.defaultView&&X.defaultView.getComputedStyle&&(xi=function(s,a){var f,m,M,E,L=s.style;return a=a.replace(xn,"-$1").toLowerCase(),(m=s.ownerDocument.defaultView)&&(M=m.getComputedStyle(s,null))&&(f=M.getPropertyValue(a),f===""&&!c.contains(s.ownerDocument.documentElement,s)&&(f=c.style(s,a))),!c.support.pixelMargin&&M&&Wn.test(a)&&Ni.test(f)&&(E=L.width,L.width=f,f=M.width,L.width=E),f}),X.documentElement.currentStyle&&(pr=function(s,a){var f,m,M,E=s.currentStyle&&s.currentStyle[a],L=s.style;return E==null&&L&&(M=L[a])&&(E=M),Ni.test(E)&&(f=L.left,m=s.runtimeStyle&&s.runtimeStyle.left,m&&(s.runtimeStyle.left=s.currentStyle.left),L.left=a==="fontSize"?"1em":E,E=L.pixelLeft+"px",L.left=f,m&&(s.runtimeStyle.left=m)),E===""?"auto":E}),Xn=xi||pr,c.each(["height","width"],function(s,a){c.cssHooks[a]={get:function(f,m,M){if(m)return f.offsetWidth!==0?C(f,a,M):c.swap(f,dr,function(){return C(f,a,M)})},set:function(f,m){return Cn.test(m)?m+"px":m}}}),c.support.opacity||(c.cssHooks.opacity={get:function(s,a){return Dt.test((a&&s.currentStyle?s.currentStyle.filter:s.style.filter)||"")?parseFloat(RegExp.$1)/100+"":a?"1":""},set:function(s,a){var f=s.style,m=s.currentStyle,M=c.isNumeric(a)?"alpha(opacity="+a*100+")":"",E=m&&m.filter||f.filter||"";f.zoom=1,!(a>=1&&c.trim(E.replace($t,""))===""&&(f.removeAttribute("filter"),m&&!m.filter))&&(f.filter=$t.test(E)?E.replace($t,M):E+" "+M)}}),c(function(){c.support.reliableMarginRight||(c.cssHooks.marginRight={get:function(s,a){return c.swap(s,{display:"inline-block"},function(){return a?Xn(s,"margin-right"):s.style.marginRight})}})}),c.expr&&c.expr.filters&&(c.expr.filters.hidden=function(s){var a=s.offsetWidth,f=s.offsetHeight;return a===0&&f===0||!c.support.reliableHiddenOffsets&&(s.style&&s.style.display||c.css(s,"display"))==="none"},c.expr.filters.visible=function(s){return!c.expr.filters.hidden(s)}),c.each({margin:"",padding:"",border:"Width"},function(s,a){c.cssHooks[s+a]={expand:function(f){var m,M=typeof f=="string"?f.split(" "):[f],E={};for(m=0;m<4;m++)E[s+Fn[m]+a]=M[m]||M[m-2]||M[0];return E}}});var Fi=/%20/g,Fr=/\[\]$/,mr=/\r?\n/g,Ts=/#.*$/,bs=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,ws=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,As=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,Cs=/^(?:GET|HEAD)$/,A=/^\/\//,K=/\?/,se=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,oe=/^(?:select|textarea)/i,J=/\s+/,Ee=/([?&])_=[^&]*/,Le=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,Ge=c.fn.load,Ye={},ht={},ot,Ke,bt="*/*";try{ot=ce.href}catch{ot=X.createElement("a"),ot.href="",ot=ot.href}Ke=Le.exec(ot.toLowerCase())||[],c.fn.extend({load:function(s,a,f){if(typeof s!="string"&&Ge)return Ge.apply(this,arguments);if(!this.length)return this;var m=s.indexOf(" ");if(m>=0){var M=s.slice(m,s.length);s=s.slice(0,m)}var E="GET";a&&(c.isFunction(a)?(f=a,a=e):typeof a=="object"&&(a=c.param(a,c.ajaxSettings.traditional),E="POST"));var L=this;return c.ajax({url:s,type:E,dataType:"html",data:a,complete:function(I,j,q){q=I.responseText,I.isResolved()&&(I.done(function(ae){q=ae}),L.html(M?c("<div>").append(q.replace(se,"")).find(M):q)),f&&L.each(f,[q,j,I])}}),this},serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?c.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||oe.test(this.nodeName)||ws.test(this.type))}).map(function(s,a){var f=c(this).val();return f==null?null:c.isArray(f)?c.map(f,function(m,M){return{name:a.name,value:m.replace(mr,`\r
`)}}):{name:a.name,value:f.replace(mr,`\r
`)}}).get()}}),c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(s,a){c.fn[a]=function(f){return this.on(a,f)}}),c.each(["get","post"],function(s,a){c[a]=function(f,m,M,E){return c.isFunction(m)&&(E=E||M,M=m,m=e),c.ajax({type:a,url:f,data:m,success:M,dataType:E})}}),c.extend({getScript:function(s,a){return c.get(s,e,a,"script")},getJSON:function(s,a,f){return c.get(s,a,f,"json")},ajaxSetup:function(s,a){return a?v(s,c.ajaxSettings):(a=s,s=c.ajaxSettings),v(s,a),s},ajaxSettings:{url:ot,isLocal:As.test(Ke[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bt},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":i.String,"text html":!0,"text json":c.parseJSON,"text xml":c.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:S(Ye),ajaxTransport:S(ht),ajax:function(s,a){function f(te,re,me,fe){if(Ze!==2){Ze=2,ze&&clearTimeout(ze),Be=e,xe=fe||"",ft.readyState=te>0?4:0;var Se,Ae,Pe,qe=re,ln=me?p(m,ft,me):e,k,he;if(te>=200&&te<300||te===304)if(m.ifModified&&((k=ft.getResponseHeader("Last-Modified"))&&(c.lastModified[q]=k),(he=ft.getResponseHeader("Etag"))&&(c.etag[q]=he)),te===304)qe="notmodified",Se=!0;else try{Ae=d(m,ln),qe="success",Se=!0}catch(Ce){qe="parsererror",Pe=Ce}else Pe=qe,(!qe||te)&&(qe="error",te<0&&(te=0));ft.status=te,ft.statusText=""+(re||qe),Se?L.resolveWith(M,[Ae,qe,ft]):L.rejectWith(M,[ft,qe,Pe]),ft.statusCode(j),j=e,Wt&&E.trigger("ajax"+(Se?"Success":"Error"),[ft,m,Se?Ae:Pe]),I.fireWith(M,[ft,qe]),Wt&&(E.trigger("ajaxComplete",[ft,m]),--c.active||c.event.trigger("ajaxStop"))}}typeof s=="object"&&(a=s,s=e),a=a||{};var m=c.ajaxSetup({},a),M=m.context||m,E=M!==m&&(M.nodeType||M instanceof c)?c(M):c.event,L=c.Deferred(),I=c.Callbacks("once memory"),j=m.statusCode||{},q,ae={},V={},xe,ie,Be,ze,st,Ze=0,Wt,Xt,ft={readyState:0,setRequestHeader:function(te,re){if(!Ze){var me=te.toLowerCase();te=V[me]=V[me]||te,ae[te]=re}return this},getAllResponseHeaders:function(){return Ze===2?xe:null},getResponseHeader:function(te){var re;if(Ze===2){if(!ie)for(ie={};re=bs.exec(xe);)ie[re[1].toLowerCase()]=re[2];re=ie[te.toLowerCase()]}return re===e?null:re},overrideMimeType:function(te){return Ze||(m.mimeType=te),this},abort:function(te){return te=te||"abort",Be&&Be.abort(te),f(0,te),this}};if(L.promise(ft),ft.success=ft.done,ft.error=ft.fail,ft.complete=I.add,ft.statusCode=function(te){if(te){var re;if(Ze<2)for(re in te)j[re]=[j[re],te[re]];else re=te[ft.status],ft.then(re,re)}return this},m.url=((s||m.url)+"").replace(Ts,"").replace(A,Ke[1]+"//"),m.dataTypes=c.trim(m.dataType||"*").toLowerCase().split(J),m.crossDomain==null&&(st=Le.exec(m.url.toLowerCase()),m.crossDomain=!(!st||st[1]==Ke[1]&&st[2]==Ke[2]&&(st[3]||(st[1]==="http:"?80:443))==(Ke[3]||(Ke[1]==="http:"?80:443)))),m.data&&m.processData&&typeof m.data!="string"&&(m.data=c.param(m.data,m.traditional)),x(Ye,m,a,ft),Ze===2)return!1;if(Wt=m.global,m.type=m.type.toUpperCase(),m.hasContent=!Cs.test(m.type),Wt&&c.active++===0&&c.event.trigger("ajaxStart"),!m.hasContent&&(m.data&&(m.url+=(K.test(m.url)?"&":"?")+m.data,delete m.data),q=m.url,m.cache===!1)){var P=c.now(),H=m.url.replace(Ee,"$1_="+P);m.url=H+(H===m.url?(K.test(m.url)?"&":"?")+"_="+P:"")}(m.data&&m.hasContent&&m.contentType!==!1||a.contentType)&&ft.setRequestHeader("Content-Type",m.contentType),m.ifModified&&(q=q||m.url,c.lastModified[q]&&ft.setRequestHeader("If-Modified-Since",c.lastModified[q]),c.etag[q]&&ft.setRequestHeader("If-None-Match",c.etag[q])),ft.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+(m.dataTypes[0]!=="*"?", "+bt+"; q=0.01":""):m.accepts["*"]);for(Xt in m.headers)ft.setRequestHeader(Xt,m.headers[Xt]);if(m.beforeSend&&(m.beforeSend.call(M,ft,m)===!1||Ze===2))return ft.abort(),!1;for(Xt in{success:1,error:1,complete:1})ft[Xt](m[Xt]);if(Be=x(ht,m,a,ft),!Be)f(-1,"No Transport");else{ft.readyState=1,Wt&&E.trigger("ajaxSend",[ft,m]),m.async&&m.timeout>0&&(ze=setTimeout(function(){ft.abort("timeout")},m.timeout));try{Ze=1,Be.send(ae,f)}catch(te){if(Ze<2)f(-1,te);else throw te}}return ft},param:function(s,a){var f=[],m=function(E,L){L=c.isFunction(L)?L():L,f[f.length]=encodeURIComponent(E)+"="+encodeURIComponent(L)};if(a===e&&(a=c.ajaxSettings.traditional),c.isArray(s)||s.jquery&&!c.isPlainObject(s))c.each(s,function(){m(this.name,this.value)});else for(var M in s)g(M,s[M],a,m);return f.join("&").replace(Fi,"+")}}),c.extend({active:0,lastModified:{},etag:{}});var Lt=c.now(),Vt=/(\=)\?(&|$)|\?\?/i;c.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return c.expando+"_"+Lt++}}),c.ajaxPrefilter("json jsonp",function(s,a,f){var m=typeof s.data=="string"&&/^application\/x\-www\-form\-urlencoded/.test(s.contentType);if(s.dataTypes[0]==="jsonp"||s.jsonp!==!1&&(Vt.test(s.url)||m&&Vt.test(s.data))){var M,E=s.jsonpCallback=c.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback,L=i[E],I=s.url,j=s.data,q="$1"+E+"$2";return s.jsonp!==!1&&(I=I.replace(Vt,q),s.url===I&&(m&&(j=j.replace(Vt,q)),s.data===j&&(I+=(/\?/.test(I)?"&":"?")+s.jsonp+"="+E))),s.url=I,s.data=j,i[E]=function(ae){M=[ae]},f.always(function(){i[E]=L,M&&c.isFunction(L)&&i[E](M[0])}),s.converters["script json"]=function(){return M||c.error(E+" was not called"),M[0]},s.dataTypes[0]="json","script"}}),c.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(s){return c.globalEval(s),s}}}),c.ajaxPrefilter("script",function(s){s.cache===e&&(s.cache=!1),s.crossDomain&&(s.type="GET",s.global=!1)}),c.ajaxTransport("script",function(s){if(s.crossDomain){var a,f=X.head||X.getElementsByTagName("head")[0]||X.documentElement;return{send:function(m,M){a=X.createElement("script"),a.async="async",s.scriptCharset&&(a.charset=s.scriptCharset),a.src=s.url,a.onload=a.onreadystatechange=function(E,L){(L||!a.readyState||/loaded|complete/.test(a.readyState))&&(a.onload=a.onreadystatechange=null,f&&a.parentNode&&f.removeChild(a),a=e,L||M(200,"success"))},f.insertBefore(a,f.firstChild)},abort:function(){a&&a.onload(0,1)}}}});var Gt=i.ActiveXObject?function(){for(var s in tt)tt[s](0,1)}:!1,Rt=0,tt;c.ajaxSettings.xhr=i.ActiveXObject?function(){return!this.isLocal&&h()||u()}:h,function(s){c.extend(c.support,{ajax:!!s,cors:!!s&&"withCredentials"in s})}(c.ajaxSettings.xhr()),c.support.ajax&&c.ajaxTransport(function(s){if(!s.crossDomain||c.support.cors){var a;return{send:function(f,m){var M=s.xhr(),E,L;if(s.username?M.open(s.type,s.url,s.async,s.username,s.password):M.open(s.type,s.url,s.async),s.xhrFields)for(L in s.xhrFields)M[L]=s.xhrFields[L];s.mimeType&&M.overrideMimeType&&M.overrideMimeType(s.mimeType),!s.crossDomain&&!f["X-Requested-With"]&&(f["X-Requested-With"]="XMLHttpRequest");try{for(L in f)M.setRequestHeader(L,f[L])}catch{}M.send(s.hasContent&&s.data||null),a=function(I,j){var q,ae,V,xe,ie;try{if(a&&(j||M.readyState===4))if(a=e,E&&(M.onreadystatechange=c.noop,Gt&&delete tt[E]),j)M.readyState!==4&&M.abort();else{q=M.status,V=M.getAllResponseHeaders(),xe={},ie=M.responseXML,ie&&ie.documentElement&&(xe.xml=ie);try{xe.text=M.responseText}catch{}try{ae=M.statusText}catch{ae=""}!q&&s.isLocal&&!s.crossDomain?q=xe.text?200:404:q===1223&&(q=204)}}catch(Be){j||m(-1,Be)}xe&&m(q,ae,xe,V)},!s.async||M.readyState===4?a():(E=++Rt,Gt&&(tt||(tt={},c(i).unload(Gt)),tt[E]=a),M.onreadystatechange=a)},abort:function(){a&&a(0,1)}}}});var jt={},_t,nn,ri=/^(?:toggle|show|hide)$/,dn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,On,Ut=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],sn;c.fn.extend({show:function(s,a,f){var m,M;if(s||s===0)return this.animate(r("show",3),s,a,f);for(var E=0,L=this.length;E<L;E++)m=this[E],m.style&&(M=m.style.display,!c._data(m,"olddisplay")&&M==="none"&&(M=m.style.display=""),(M===""&&c.css(m,"display")==="none"||!c.contains(m.ownerDocument.documentElement,m))&&c._data(m,"olddisplay",n(m.nodeName)));for(E=0;E<L;E++)m=this[E],m.style&&(M=m.style.display,(M===""||M==="none")&&(m.style.display=c._data(m,"olddisplay")||""));return this},hide:function(s,a,f){if(s||s===0)return this.animate(r("hide",3),s,a,f);for(var m,M,E=0,L=this.length;E<L;E++)m=this[E],m.style&&(M=c.css(m,"display"),M!=="none"&&!c._data(m,"olddisplay")&&c._data(m,"olddisplay",M));for(E=0;E<L;E++)this[E].style&&(this[E].style.display="none");return this},_toggle:c.fn.toggle,toggle:function(s,a,f){var m=typeof s=="boolean";return c.isFunction(s)&&c.isFunction(a)?this._toggle.apply(this,arguments):s==null||m?this.each(function(){var M=m?s:c(this).is(":hidden");c(this)[M?"show":"hide"]()}):this.animate(r("toggle",3),s,a,f),this},fadeTo:function(s,a,f,m){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:a},s,f,m)},animate:function(s,a,f,m){function M(){E.queue===!1&&c._mark(this);var L=c.extend({},E),I=this.nodeType===1,j=I&&c(this).is(":hidden"),q,ae,V,xe,ie,Be,ze,st,Ze,Wt,Xt;L.animatedProperties={};for(V in s)if(q=c.camelCase(V),V!==q&&(s[q]=s[V],delete s[V]),(ie=c.cssHooks[q])&&"expand"in ie){Be=ie.expand(s[q]),delete s[q];for(V in Be)V in s||(s[V]=Be[V])}for(q in s){if(ae=s[q],c.isArray(ae)?(L.animatedProperties[q]=ae[1],ae=s[q]=ae[0]):L.animatedProperties[q]=L.specialEasing&&L.specialEasing[q]||L.easing||"swing",ae==="hide"&&j||ae==="show"&&!j)return L.complete.call(this);I&&(q==="height"||q==="width")&&(L.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],c.css(this,"display")==="inline"&&c.css(this,"float")==="none"&&(!c.support.inlineBlockNeedsLayout||n(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}L.overflow!=null&&(this.style.overflow="hidden");for(V in s)xe=new c.fx(this,L,V),ae=s[V],ri.test(ae)?(Xt=c._data(this,"toggle"+V)||(ae==="toggle"?j?"show":"hide":0),Xt?(c._data(this,"toggle"+V,Xt==="show"?"hide":"show"),xe[Xt]()):xe[ae]()):(ze=dn.exec(ae),st=xe.cur(),ze?(Ze=parseFloat(ze[2]),Wt=ze[3]||(c.cssNumber[V]?"":"px"),Wt!=="px"&&(c.style(this,V,(Ze||1)+Wt),st=(Ze||1)/xe.cur()*st,c.style(this,V,st+Wt)),ze[1]&&(Ze=(ze[1]==="-="?-1:1)*Ze+st),xe.custom(st,Ze,Wt)):xe.custom(st,ae,""));return!0}var E=c.speed(a,f,m);return c.isEmptyObject(s)?this.each(E.complete,[!1]):(s=c.extend({},s),E.queue===!1?this.each(M):this.queue(E.queue,M))},stop:function(s,a,f){return typeof s!="string"&&(f=a,a=s,s=e),a&&s!==!1&&this.queue(s||"fx",[]),this.each(function(){function m(j,q,ae){var V=q[ae];c.removeData(j,ae,!0),V.stop(f)}var M,E=!1,L=c.timers,I=c._data(this);if(f||c._unmark(!0,this),s==null)for(M in I)I[M]&&I[M].stop&&M.indexOf(".run")===M.length-4&&m(this,I,M);else I[M=s+".run"]&&I[M].stop&&m(this,I,M);for(M=L.length;M--;)L[M].elem===this&&(s==null||L[M].queue===s)&&(f?L[M](!0):L[M].saveState(),E=!0,L.splice(M,1));(!f||!E)&&c.dequeue(this,s)})}}),c.each({slideDown:r("show",1),slideUp:r("hide",1),slideToggle:r("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(s,a){c.fn[s]=function(f,m,M){return this.animate(a,f,m,M)}}),c.extend({speed:function(s,a,f){var m=s&&typeof s=="object"?c.extend({},s):{complete:f||!f&&a||c.isFunction(s)&&s,duration:s,easing:f&&a||a&&!c.isFunction(a)&&a};return m.duration=c.fx.off?0:typeof m.duration=="number"?m.duration:m.duration in c.fx.speeds?c.fx.speeds[m.duration]:c.fx.speeds._default,(m.queue==null||m.queue===!0)&&(m.queue="fx"),m.old=m.complete,m.complete=function(M){c.isFunction(m.old)&&m.old.call(this),m.queue?c.dequeue(this,m.queue):M!==!1&&c._unmark(this)},m},easing:{linear:function(s){return s},swing:function(s){return-Math.cos(s*Math.PI)/2+.5}},timers:[],fx:function(s,a,f){this.options=a,this.elem=s,this.prop=f,a.orig=a.orig||{}}}),c.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(c.fx.step[this.prop]||c.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var s,a=c.css(this.elem,this.prop);return isNaN(s=parseFloat(a))?!a||a==="auto"?0:a:s},custom:function(s,a,f){function m(L){return M.step(L)}var M=this,E=c.fx;this.startTime=sn||l(),this.end=a,this.now=this.start=s,this.pos=this.state=0,this.unit=f||this.unit||(c.cssNumber[this.prop]?"":"px"),m.queue=this.options.queue,m.elem=this.elem,m.saveState=function(){c._data(M.elem,"fxshow"+M.prop)===e&&(M.options.hide?c._data(M.elem,"fxshow"+M.prop,M.start):M.options.show&&c._data(M.elem,"fxshow"+M.prop,M.end))},m()&&c.timers.push(m)&&!On&&(On=setInterval(E.tick,E.interval))},show:function(){var s=c._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=s||c.style(this.elem,this.prop),this.options.show=!0,s!==e?this.custom(this.cur(),s):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),c(this.elem).show()},hide:function(){this.options.orig[this.prop]=c._data(this.elem,"fxshow"+this.prop)||c.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(s){var a,f,m,M=sn||l(),E=!0,L=this.elem,I=this.options;if(s||M>=I.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),I.animatedProperties[this.prop]=!0;for(a in I.animatedProperties)I.animatedProperties[a]!==!0&&(E=!1);if(E){if(I.overflow!=null&&!c.support.shrinkWrapBlocks&&c.each(["","X","Y"],function(j,q){L.style["overflow"+q]=I.overflow[j]}),I.hide&&c(L).hide(),I.hide||I.show)for(a in I.animatedProperties)c.style(L,a,I.orig[a]),c.removeData(L,"fxshow"+a,!0),c.removeData(L,"toggle"+a,!0);m=I.complete,m&&(I.complete=!1,m.call(L))}return!1}return I.duration==1/0?this.now=M:(f=M-this.startTime,this.state=f/I.duration,this.pos=c.easing[I.animatedProperties[this.prop]](this.state,f,0,1,I.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update(),!0}},c.extend(c.fx,{tick:function(){for(var s,a=c.timers,f=0;f<a.length;f++)s=a[f],!s()&&a[f]===s&&a.splice(f--,1);a.length||c.fx.stop()},interval:13,stop:function(){clearInterval(On),On=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(s){c.style(s.elem,"opacity",s.now)},_default:function(s){s.elem.style&&s.elem.style[s.prop]!=null?s.elem.style[s.prop]=s.now+s.unit:s.elem[s.prop]=s.now}}}),c.each(Ut.concat.apply([],Ut),function(s,a){a.indexOf("margin")&&(c.fx.step[a]=function(f){c.style(f.elem,a,Math.max(0,f.now)+f.unit)})}),c.expr&&c.expr.filters&&(c.expr.filters.animated=function(s){return c.grep(c.timers,function(a){return s===a.elem}).length});var cn,on=/^t(?:able|d|h)$/i,an=/^(?:body|html)$/i;"getBoundingClientRect"in X.documentElement?cn=function(s,a,f,m){try{m=s.getBoundingClientRect()}catch{}if(!m||!c.contains(f,s))return m?{top:m.top,left:m.left}:{top:0,left:0};var M=a.body,E=t(a),L=f.clientTop||M.clientTop||0,I=f.clientLeft||M.clientLeft||0,j=E.pageYOffset||c.support.boxModel&&f.scrollTop||M.scrollTop,q=E.pageXOffset||c.support.boxModel&&f.scrollLeft||M.scrollLeft,ae=m.top+j-L,V=m.left+q-I;return{top:ae,left:V}}:cn=function(s,a,f){for(var m,M=s.offsetParent,E=a.body,L=a.defaultView,I=L?L.getComputedStyle(s,null):s.currentStyle,j=s.offsetTop,q=s.offsetLeft;(s=s.parentNode)&&s!==E&&s!==f&&!(c.support.fixedPosition&&I.position==="fixed");)m=L?L.getComputedStyle(s,null):s.currentStyle,j-=s.scrollTop,q-=s.scrollLeft,s===M&&(j+=s.offsetTop,q+=s.offsetLeft,c.support.doesNotAddBorder&&(!c.support.doesAddBorderForTableAndCells||!on.test(s.nodeName))&&(j+=parseFloat(m.borderTopWidth)||0,q+=parseFloat(m.borderLeftWidth)||0),M=s.offsetParent),c.support.subtractsBorderForOverflowNotVisible&&m.overflow!=="visible"&&(j+=parseFloat(m.borderTopWidth)||0,q+=parseFloat(m.borderLeftWidth)||0),I=m;return(I.position==="relative"||I.position==="static")&&(j+=E.offsetTop,q+=E.offsetLeft),c.support.fixedPosition&&I.position==="fixed"&&(j+=Math.max(f.scrollTop,E.scrollTop),q+=Math.max(f.scrollLeft,E.scrollLeft)),{top:j,left:q}},c.fn.offset=function(s){if(arguments.length)return s===e?this:this.each(function(m){c.offset.setOffset(this,s,m)});var a=this[0],f=a&&a.ownerDocument;return f?a===f.body?c.offset.bodyOffset(a):cn(a,f,f.documentElement):null},c.offset={bodyOffset:function(s){var a=s.offsetTop,f=s.offsetLeft;return c.support.doesNotIncludeMarginInBodyOffset&&(a+=parseFloat(c.css(s,"marginTop"))||0,f+=parseFloat(c.css(s,"marginLeft"))||0),{top:a,left:f}},setOffset:function(s,a,f){var m=c.css(s,"position");m==="static"&&(s.style.position="relative");var M=c(s),E=M.offset(),L=c.css(s,"top"),I=c.css(s,"left"),j=(m==="absolute"||m==="fixed")&&c.inArray("auto",[L,I])>-1,q={},ae={},V,xe;j?(ae=M.position(),V=ae.top,xe=ae.left):(V=parseFloat(L)||0,xe=parseFloat(I)||0),c.isFunction(a)&&(a=a.call(s,f,E)),a.top!=null&&(q.top=a.top-E.top+V),a.left!=null&&(q.left=a.left-E.left+xe),"using"in a?a.using.call(s,q):M.css(q)}},c.fn.extend({position:function(){if(!this[0])return null;var s=this[0],a=this.offsetParent(),f=this.offset(),m=an.test(a[0].nodeName)?{top:0,left:0}:a.offset();return f.top-=parseFloat(c.css(s,"marginTop"))||0,f.left-=parseFloat(c.css(s,"marginLeft"))||0,m.top+=parseFloat(c.css(a[0],"borderTopWidth"))||0,m.left+=parseFloat(c.css(a[0],"borderLeftWidth"))||0,{top:f.top-m.top,left:f.left-m.left}},offsetParent:function(){return this.map(function(){for(var s=this.offsetParent||X.body;s&&!an.test(s.nodeName)&&c.css(s,"position")==="static";)s=s.offsetParent;return s})}}),c.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(s,a){var f=/Y/.test(a);c.fn[s]=function(m){return c.access(this,function(M,E,L){var I=t(M);if(L===e)return I?a in I?I[a]:c.support.boxModel&&I.document.documentElement[E]||I.document.body[E]:M[E];I?I.scrollTo(f?c(I).scrollLeft():L,f?L:c(I).scrollTop()):M[E]=L},s,m,arguments.length,null)}}),c.each({Height:"height",Width:"width"},function(s,a){var f="client"+s,m="scroll"+s,M="offset"+s;c.fn["inner"+s]=function(){var E=this[0];return E?E.style?parseFloat(c.css(E,a,"padding")):this[a]():null},c.fn["outer"+s]=function(E){var L=this[0];return L?L.style?parseFloat(c.css(L,a,E?"margin":"border")):this[a]():null},c.fn[a]=function(E){return c.access(this,function(L,I,j){var q,ae,V,xe;if(c.isWindow(L))return q=L.document,ae=q.documentElement[f],c.support.boxModel&&ae||q.body&&q.body[f]||ae;if(L.nodeType===9)return q=L.documentElement,q[f]>=q[m]?q[f]:Math.max(L.body[m],q[m],L.body[M],q[M]);if(j===e)return V=c.css(L,I),xe=parseFloat(V),c.isNumeric(xe)?xe:V;c(L).css(I,j)},a,E,arguments.length,null)}}),i.jQuery=i.$=c,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return c})})(window);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jo="171",ic=0,pa=1,rc=2,xl=1,sc=2,Zn=3,gi=0,vn=1,Jn=2,di=0,er=1,ma=2,ga=3,_a=4,oc=5,Ri=100,ac=101,lc=102,cc=103,uc=104,hc=200,fc=201,dc=202,pc=203,uo=204,ho=205,mc=206,gc=207,_c=208,vc=209,xc=210,yc=211,Mc=212,Sc=213,Ec=214,fo=0,po=1,mo=2,ir=3,go=4,_o=5,vo=6,xo=7,Qo=0,Tc=1,bc=2,pi=0,wc=1,Ac=2,Cc=3,Rc=4,Lc=5,Pc=6,Dc=7,yl=300,rr=301,sr=302,yo=303,Mo=304,_s=306,ps=1e3,Pi=1001,So=1002,In=1003,Uc=1004,Or=1005,Hn=1006,Rs=1007,Di=1008,ii=1009,Ml=1010,Sl=1011,Ar=1012,ea=1013,Ui=1014,Qn=1015,Rr=1016,ta=1017,na=1018,or=1020,El=35902,Tl=1021,bl=1022,Un=1023,wl=1024,Al=1025,tr=1026,ar=1027,Cl=1028,ia=1029,Rl=1030,ra=1031,sa=1033,ls=33776,cs=33777,us=33778,hs=33779,Eo=35840,To=35841,bo=35842,wo=35843,Ao=36196,Co=37492,Ro=37496,Lo=37808,Po=37809,Do=37810,Uo=37811,Io=37812,No=37813,Fo=37814,Oo=37815,Bo=37816,zo=37817,ko=37818,Ho=37819,Go=37820,Vo=37821,fs=36492,Wo=36494,Xo=36495,Ll=36283,qo=36284,jo=36285,Yo=36286,Ic=3200,Nc=3201,Pl=0,Fc=1,fi="",An="srgb",lr="srgb-linear",ms="linear",Ft="srgb",Oi=7680,va=519,Oc=512,Bc=513,zc=514,Dl=515,kc=516,Hc=517,Gc=518,Vc=519,xa=35044,ya="300 es",ei=2e3,gs=2001;class ur{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let o=0,l=r.length;o<l;o++)r[o].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ls=Math.PI/180,$o=180/Math.PI;function Lr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function wt(i,e,t){return Math.max(e,Math.min(t,i))}function Wc(i,e){return(i%e+e)%e}function Ps(i,e,t){return(1-t)*i+t*e}function gr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _n(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ct{constructor(e=0,t=0){Ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(wt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,l=this.y-e.y;return this.x=o*n-l*r+e.x,this.y=o*r+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vt{constructor(e,t,n,r,o,l,u,h,d){vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,l,u,h,d)}set(e,t,n,r,o,l,u,h,d){const p=this.elements;return p[0]=e,p[1]=r,p[2]=u,p[3]=t,p[4]=o,p[5]=h,p[6]=n,p[7]=l,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,l=n[0],u=n[3],h=n[6],d=n[1],p=n[4],g=n[7],v=n[2],x=n[5],S=n[8],C=r[0],y=r[3],_=r[6],U=r[1],D=r[4],w=r[7],B=r[2],F=r[5],O=r[8];return o[0]=l*C+u*U+h*B,o[3]=l*y+u*D+h*F,o[6]=l*_+u*w+h*O,o[1]=d*C+p*U+g*B,o[4]=d*y+p*D+g*F,o[7]=d*_+p*w+g*O,o[2]=v*C+x*U+S*B,o[5]=v*y+x*D+S*F,o[8]=v*_+x*w+S*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],l=e[4],u=e[5],h=e[6],d=e[7],p=e[8];return t*l*p-t*u*d-n*o*p+n*u*h+r*o*d-r*l*h}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],l=e[4],u=e[5],h=e[6],d=e[7],p=e[8],g=p*l-u*d,v=u*h-p*o,x=d*o-l*h,S=t*g+n*v+r*x;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/S;return e[0]=g*C,e[1]=(r*d-p*n)*C,e[2]=(u*n-r*l)*C,e[3]=v*C,e[4]=(p*t-r*h)*C,e[5]=(r*o-u*t)*C,e[6]=x*C,e[7]=(n*h-d*t)*C,e[8]=(l*t-n*o)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,l,u){const h=Math.cos(o),d=Math.sin(o);return this.set(n*h,n*d,-n*(h*l+d*u)+l+e,-r*d,r*h,-r*(-d*l+h*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(Ds.makeScale(e,t)),this}rotate(e){return this.premultiply(Ds.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ds.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ds=new vt;function Ul(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Cr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Xc(){const i=Cr("canvas");return i.style.display="block",i}const Ma={};function Zi(i){i in Ma||(Ma[i]=!0,console.warn(i))}function qc(i,e,t){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}function jc(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Yc(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Sa=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ea=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $c(){const i={enabled:!0,workingColorSpace:lr,spaces:{},convert:function(r,o,l){return this.enabled===!1||o===l||!o||!l||(this.spaces[o].transfer===Ft&&(r.r=ni(r.r),r.g=ni(r.g),r.b=ni(r.b)),this.spaces[o].primaries!==this.spaces[l].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Ft&&(r.r=nr(r.r),r.g=nr(r.g),r.b=nr(r.b))),r},fromWorkingColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},toWorkingColorSpace:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===fi?ms:this.spaces[r].transfer},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,l){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[lr]:{primaries:e,whitePoint:n,transfer:ms,toXYZ:Sa,fromXYZ:Ea,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:e,whitePoint:n,transfer:Ft,toXYZ:Sa,fromXYZ:Ea,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),i}const Pt=$c();function ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function nr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Bi;class Kc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bi===void 0&&(Bi=Cr("canvas")),Bi.width=e.width,Bi.height=e.height;const n=Bi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Bi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Cr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let l=0;l<o.length;l++)o[l]=ni(o[l]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ni(t[n]/255)*255):t[n]=ni(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zc=0;class Il{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zc++}),this.uuid=Lr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let l=0,u=r.length;l<u;l++)r[l].isDataTexture?o.push(Us(r[l].image)):o.push(Us(r[l]))}else o=Us(r);n.url=o}return t||(e.images[this.uuid]=n),n}}function Us(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Kc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jc=0;class mn extends ur{constructor(e=mn.DEFAULT_IMAGE,t=mn.DEFAULT_MAPPING,n=Pi,r=Pi,o=Hn,l=Di,u=Un,h=ii,d=mn.DEFAULT_ANISOTROPY,p=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jc++}),this.uuid=Lr(),this.name="",this.source=new Il(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=l,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=h,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ps:e.x=e.x-Math.floor(e.x);break;case Pi:e.x=e.x<0?0:1;break;case So:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ps:e.y=e.y-Math.floor(e.y);break;case Pi:e.y=e.y<0?0:1;break;case So:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=yl;mn.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,t=0,n=0,r=1){Ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*r+l[12]*o,this.y=l[1]*t+l[5]*n+l[9]*r+l[13]*o,this.z=l[2]*t+l[6]*n+l[10]*r+l[14]*o,this.w=l[3]*t+l[7]*n+l[11]*r+l[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o;const h=e.elements,d=h[0],p=h[4],g=h[8],v=h[1],x=h[5],S=h[9],C=h[2],y=h[6],_=h[10];if(Math.abs(p-v)<.01&&Math.abs(g-C)<.01&&Math.abs(S-y)<.01){if(Math.abs(p+v)<.1&&Math.abs(g+C)<.1&&Math.abs(S+y)<.1&&Math.abs(d+x+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(d+1)/2,w=(x+1)/2,B=(_+1)/2,F=(p+v)/4,O=(g+C)/4,G=(S+y)/4;return D>w&&D>B?D<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(D),r=F/n,o=O/n):w>B?w<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(w),n=F/r,o=G/r):B<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(B),n=O/o,r=G/o),this.set(n,r,o,t),this}let U=Math.sqrt((y-S)*(y-S)+(g-C)*(g-C)+(v-p)*(v-p));return Math.abs(U)<.001&&(U=1),this.x=(y-S)/U,this.y=(g-C)/U,this.z=(v-p)/U,this.w=Math.acos((d+x+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this.w=wt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this.w=wt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(wt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qc extends ur{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new mn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const l=n.count;for(let u=0;u<l;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Il(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends Qc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Nl extends mn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=In,this.minFilter=In,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class eu extends mn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=In,this.minFilter=In,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,l,u){let h=n[r+0],d=n[r+1],p=n[r+2],g=n[r+3];const v=o[l+0],x=o[l+1],S=o[l+2],C=o[l+3];if(u===0){e[t+0]=h,e[t+1]=d,e[t+2]=p,e[t+3]=g;return}if(u===1){e[t+0]=v,e[t+1]=x,e[t+2]=S,e[t+3]=C;return}if(g!==C||h!==v||d!==x||p!==S){let y=1-u;const _=h*v+d*x+p*S+g*C,U=_>=0?1:-1,D=1-_*_;if(D>Number.EPSILON){const B=Math.sqrt(D),F=Math.atan2(B,_*U);y=Math.sin(y*F)/B,u=Math.sin(u*F)/B}const w=u*U;if(h=h*y+v*w,d=d*y+x*w,p=p*y+S*w,g=g*y+C*w,y===1-u){const B=1/Math.sqrt(h*h+d*d+p*p+g*g);h*=B,d*=B,p*=B,g*=B}}e[t]=h,e[t+1]=d,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,r,o,l){const u=n[r],h=n[r+1],d=n[r+2],p=n[r+3],g=o[l],v=o[l+1],x=o[l+2],S=o[l+3];return e[t]=u*S+p*g+h*x-d*v,e[t+1]=h*S+p*v+d*g-u*x,e[t+2]=d*S+p*x+u*v-h*g,e[t+3]=p*S-u*g-h*v-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,o=e._z,l=e._order,u=Math.cos,h=Math.sin,d=u(n/2),p=u(r/2),g=u(o/2),v=h(n/2),x=h(r/2),S=h(o/2);switch(l){case"XYZ":this._x=v*p*g+d*x*S,this._y=d*x*g-v*p*S,this._z=d*p*S+v*x*g,this._w=d*p*g-v*x*S;break;case"YXZ":this._x=v*p*g+d*x*S,this._y=d*x*g-v*p*S,this._z=d*p*S-v*x*g,this._w=d*p*g+v*x*S;break;case"ZXY":this._x=v*p*g-d*x*S,this._y=d*x*g+v*p*S,this._z=d*p*S+v*x*g,this._w=d*p*g-v*x*S;break;case"ZYX":this._x=v*p*g-d*x*S,this._y=d*x*g+v*p*S,this._z=d*p*S-v*x*g,this._w=d*p*g+v*x*S;break;case"YZX":this._x=v*p*g+d*x*S,this._y=d*x*g+v*p*S,this._z=d*p*S-v*x*g,this._w=d*p*g-v*x*S;break;case"XZY":this._x=v*p*g-d*x*S,this._y=d*x*g-v*p*S,this._z=d*p*S+v*x*g,this._w=d*p*g+v*x*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],o=t[8],l=t[1],u=t[5],h=t[9],d=t[2],p=t[6],g=t[10],v=n+u+g;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(p-h)*x,this._y=(o-d)*x,this._z=(l-r)*x}else if(n>u&&n>g){const x=2*Math.sqrt(1+n-u-g);this._w=(p-h)/x,this._x=.25*x,this._y=(r+l)/x,this._z=(o+d)/x}else if(u>g){const x=2*Math.sqrt(1+u-n-g);this._w=(o-d)/x,this._x=(r+l)/x,this._y=.25*x,this._z=(h+p)/x}else{const x=2*Math.sqrt(1+g-n-u);this._w=(l-r)/x,this._x=(o+d)/x,this._y=(h+p)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,o=e._z,l=e._w,u=t._x,h=t._y,d=t._z,p=t._w;return this._x=n*p+l*u+r*d-o*h,this._y=r*p+l*h+o*u-n*d,this._z=o*p+l*d+n*h-r*u,this._w=l*p-n*u-r*h-o*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,o=this._z,l=this._w;let u=l*e._w+n*e._x+r*e._y+o*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=l,this._x=n,this._y=r,this._z=o,this;const h=1-u*u;if(h<=Number.EPSILON){const x=1-t;return this._w=x*l+t*this._w,this._x=x*n+t*this._x,this._y=x*r+t*this._y,this._z=x*o+t*this._z,this.normalize(),this}const d=Math.sqrt(h),p=Math.atan2(d,u),g=Math.sin((1-t)*p)/d,v=Math.sin(t*p)/d;return this._w=l*g+this._w*v,this._x=n*g+this._x*v,this._y=r*g+this._y*v,this._z=o*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,t=0,n=0){Z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ta.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ta.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=e.elements,l=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*l,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*l,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,o=e.x,l=e.y,u=e.z,h=e.w,d=2*(l*r-u*n),p=2*(u*t-o*r),g=2*(o*n-l*t);return this.x=t+h*d+l*g-u*p,this.y=n+h*p+u*d-o*g,this.z=r+h*g+o*p-l*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(wt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,o=e.z,l=t.x,u=t.y,h=t.z;return this.x=r*h-o*u,this.y=o*l-n*h,this.z=n*u-r*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Is.copy(this).projectOnVector(e),this.sub(Is)}reflect(e){return this.sub(Is.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Is=new Z,Ta=new Pr;class Dr{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let l=0,u=o.count;l<u;l++)e.isMesh===!0?e.getVertexPosition(l,Rn):Rn.fromBufferAttribute(o,l),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Br.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Br.copy(n.boundingBox)),Br.applyMatrix4(e.matrixWorld),this.union(Br)}const r=e.children;for(let o=0,l=r.length;o<l;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_r),zr.subVectors(this.max,_r),zi.subVectors(e.a,_r),ki.subVectors(e.b,_r),Hi.subVectors(e.c,_r),si.subVectors(ki,zi),oi.subVectors(Hi,ki),Mi.subVectors(zi,Hi);let t=[0,-si.z,si.y,0,-oi.z,oi.y,0,-Mi.z,Mi.y,si.z,0,-si.x,oi.z,0,-oi.x,Mi.z,0,-Mi.x,-si.y,si.x,0,-oi.y,oi.x,0,-Mi.y,Mi.x,0];return!Ns(t,zi,ki,Hi,zr)||(t=[1,0,0,0,1,0,0,0,1],!Ns(t,zi,ki,Hi,zr))?!1:(kr.crossVectors(si,oi),t=[kr.x,kr.y,kr.z],Ns(t,zi,ki,Hi,zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qn=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Rn=new Z,Br=new Dr,zi=new Z,ki=new Z,Hi=new Z,si=new Z,oi=new Z,Mi=new Z,_r=new Z,zr=new Z,kr=new Z,Si=new Z;function Ns(i,e,t,n,r){for(let o=0,l=i.length-3;o<=l;o+=3){Si.fromArray(i,o);const u=r.x*Math.abs(Si.x)+r.y*Math.abs(Si.y)+r.z*Math.abs(Si.z),h=e.dot(Si),d=t.dot(Si),p=n.dot(Si);if(Math.max(-Math.max(h,d,p),Math.min(h,d,p))>u)return!1}return!0}const tu=new Dr,vr=new Z,Fs=new Z;class vs{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):tu.setFromPoints(e).getCenter(n);let r=0;for(let o=0,l=e.length;o<l;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vr.subVectors(e,this.center);const t=vr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(vr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vr.copy(e.center).add(Fs)),this.expandByPoint(vr.copy(e.center).sub(Fs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jn=new Z,Os=new Z,Hr=new Z,ai=new Z,Bs=new Z,Gr=new Z,zs=new Z;class Fl{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Os.copy(e).add(t).multiplyScalar(.5),Hr.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(Os);const o=e.distanceTo(t)*.5,l=-this.direction.dot(Hr),u=ai.dot(this.direction),h=-ai.dot(Hr),d=ai.lengthSq(),p=Math.abs(1-l*l);let g,v,x,S;if(p>0)if(g=l*h-u,v=l*u-h,S=o*p,g>=0)if(v>=-S)if(v<=S){const C=1/p;g*=C,v*=C,x=g*(g+l*v+2*u)+v*(l*g+v+2*h)+d}else v=o,g=Math.max(0,-(l*v+u)),x=-g*g+v*(v+2*h)+d;else v=-o,g=Math.max(0,-(l*v+u)),x=-g*g+v*(v+2*h)+d;else v<=-S?(g=Math.max(0,-(-l*o+u)),v=g>0?-o:Math.min(Math.max(-o,-h),o),x=-g*g+v*(v+2*h)+d):v<=S?(g=0,v=Math.min(Math.max(-o,-h),o),x=v*(v+2*h)+d):(g=Math.max(0,-(l*o+u)),v=g>0?o:Math.min(Math.max(-o,-h),o),x=-g*g+v*(v+2*h)+d);else v=l>0?-o:o,g=Math.max(0,-(l*v+u)),x=-g*g+v*(v+2*h)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(Os).addScaledVector(Hr,v),x}intersectSphere(e,t){jn.subVectors(e.center,this.origin);const n=jn.dot(this.direction),r=jn.dot(jn)-n*n,o=e.radius*e.radius;if(r>o)return null;const l=Math.sqrt(o-r),u=n-l,h=n+l;return h<0?null:u<0?this.at(h,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,l,u,h;const d=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,v=this.origin;return d>=0?(n=(e.min.x-v.x)*d,r=(e.max.x-v.x)*d):(n=(e.max.x-v.x)*d,r=(e.min.x-v.x)*d),p>=0?(o=(e.min.y-v.y)*p,l=(e.max.y-v.y)*p):(o=(e.max.y-v.y)*p,l=(e.min.y-v.y)*p),n>l||o>r||((o>n||isNaN(n))&&(n=o),(l<r||isNaN(r))&&(r=l),g>=0?(u=(e.min.z-v.z)*g,h=(e.max.z-v.z)*g):(u=(e.max.z-v.z)*g,h=(e.min.z-v.z)*g),n>h||u>r)||((u>n||n!==n)&&(n=u),(h<r||r!==r)&&(r=h),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,n,r,o){Bs.subVectors(t,e),Gr.subVectors(n,e),zs.crossVectors(Bs,Gr);let l=this.direction.dot(zs),u;if(l>0){if(r)return null;u=1}else if(l<0)u=-1,l=-l;else return null;ai.subVectors(this.origin,e);const h=u*this.direction.dot(Gr.crossVectors(ai,Gr));if(h<0)return null;const d=u*this.direction.dot(Bs.cross(ai));if(d<0||h+d>l)return null;const p=-u*ai.dot(zs);return p<0?null:this.at(p/l,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(e,t,n,r,o,l,u,h,d,p,g,v,x,S,C,y){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,l,u,h,d,p,g,v,x,S,C,y)}set(e,t,n,r,o,l,u,h,d,p,g,v,x,S,C,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=o,_[5]=l,_[9]=u,_[13]=h,_[2]=d,_[6]=p,_[10]=g,_[14]=v,_[3]=x,_[7]=S,_[11]=C,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Gi.setFromMatrixColumn(e,0).length(),o=1/Gi.setFromMatrixColumn(e,1).length(),l=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,o=e.z,l=Math.cos(n),u=Math.sin(n),h=Math.cos(r),d=Math.sin(r),p=Math.cos(o),g=Math.sin(o);if(e.order==="XYZ"){const v=l*p,x=l*g,S=u*p,C=u*g;t[0]=h*p,t[4]=-h*g,t[8]=d,t[1]=x+S*d,t[5]=v-C*d,t[9]=-u*h,t[2]=C-v*d,t[6]=S+x*d,t[10]=l*h}else if(e.order==="YXZ"){const v=h*p,x=h*g,S=d*p,C=d*g;t[0]=v+C*u,t[4]=S*u-x,t[8]=l*d,t[1]=l*g,t[5]=l*p,t[9]=-u,t[2]=x*u-S,t[6]=C+v*u,t[10]=l*h}else if(e.order==="ZXY"){const v=h*p,x=h*g,S=d*p,C=d*g;t[0]=v-C*u,t[4]=-l*g,t[8]=S+x*u,t[1]=x+S*u,t[5]=l*p,t[9]=C-v*u,t[2]=-l*d,t[6]=u,t[10]=l*h}else if(e.order==="ZYX"){const v=l*p,x=l*g,S=u*p,C=u*g;t[0]=h*p,t[4]=S*d-x,t[8]=v*d+C,t[1]=h*g,t[5]=C*d+v,t[9]=x*d-S,t[2]=-d,t[6]=u*h,t[10]=l*h}else if(e.order==="YZX"){const v=l*h,x=l*d,S=u*h,C=u*d;t[0]=h*p,t[4]=C-v*g,t[8]=S*g+x,t[1]=g,t[5]=l*p,t[9]=-u*p,t[2]=-d*p,t[6]=x*g+S,t[10]=v-C*g}else if(e.order==="XZY"){const v=l*h,x=l*d,S=u*h,C=u*d;t[0]=h*p,t[4]=-g,t[8]=d*p,t[1]=v*g+C,t[5]=l*p,t[9]=x*g-S,t[2]=S*g-x,t[6]=u*p,t[10]=C*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nu,e,iu)}lookAt(e,t,n){const r=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),li.crossVectors(n,Mn),li.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),li.crossVectors(n,Mn)),li.normalize(),Vr.crossVectors(Mn,li),r[0]=li.x,r[4]=Vr.x,r[8]=Mn.x,r[1]=li.y,r[5]=Vr.y,r[9]=Mn.y,r[2]=li.z,r[6]=Vr.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,l=n[0],u=n[4],h=n[8],d=n[12],p=n[1],g=n[5],v=n[9],x=n[13],S=n[2],C=n[6],y=n[10],_=n[14],U=n[3],D=n[7],w=n[11],B=n[15],F=r[0],O=r[4],G=r[8],R=r[12],T=r[1],z=r[5],ee=r[9],Q=r[13],le=r[2],de=r[6],X=r[10],ye=r[14],ce=r[3],c=r[7],Ue=r[11],je=r[15];return o[0]=l*F+u*T+h*le+d*ce,o[4]=l*O+u*z+h*de+d*c,o[8]=l*G+u*ee+h*X+d*Ue,o[12]=l*R+u*Q+h*ye+d*je,o[1]=p*F+g*T+v*le+x*ce,o[5]=p*O+g*z+v*de+x*c,o[9]=p*G+g*ee+v*X+x*Ue,o[13]=p*R+g*Q+v*ye+x*je,o[2]=S*F+C*T+y*le+_*ce,o[6]=S*O+C*z+y*de+_*c,o[10]=S*G+C*ee+y*X+_*Ue,o[14]=S*R+C*Q+y*ye+_*je,o[3]=U*F+D*T+w*le+B*ce,o[7]=U*O+D*z+w*de+B*c,o[11]=U*G+D*ee+w*X+B*Ue,o[15]=U*R+D*Q+w*ye+B*je,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],l=e[1],u=e[5],h=e[9],d=e[13],p=e[2],g=e[6],v=e[10],x=e[14],S=e[3],C=e[7],y=e[11],_=e[15];return S*(+o*h*g-r*d*g-o*u*v+n*d*v+r*u*x-n*h*x)+C*(+t*h*x-t*d*v+o*l*v-r*l*x+r*d*p-o*h*p)+y*(+t*d*g-t*u*x-o*l*g+n*l*x+o*u*p-n*d*p)+_*(-r*u*p-t*h*g+t*u*v+r*l*g-n*l*v+n*h*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],l=e[4],u=e[5],h=e[6],d=e[7],p=e[8],g=e[9],v=e[10],x=e[11],S=e[12],C=e[13],y=e[14],_=e[15],U=g*y*d-C*v*d+C*h*x-u*y*x-g*h*_+u*v*_,D=S*v*d-p*y*d-S*h*x+l*y*x+p*h*_-l*v*_,w=p*C*d-S*g*d+S*u*x-l*C*x-p*u*_+l*g*_,B=S*g*h-p*C*h-S*u*v+l*C*v+p*u*y-l*g*y,F=t*U+n*D+r*w+o*B;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/F;return e[0]=U*O,e[1]=(C*v*o-g*y*o-C*r*x+n*y*x+g*r*_-n*v*_)*O,e[2]=(u*y*o-C*h*o+C*r*d-n*y*d-u*r*_+n*h*_)*O,e[3]=(g*h*o-u*v*o-g*r*d+n*v*d+u*r*x-n*h*x)*O,e[4]=D*O,e[5]=(p*y*o-S*v*o+S*r*x-t*y*x-p*r*_+t*v*_)*O,e[6]=(S*h*o-l*y*o-S*r*d+t*y*d+l*r*_-t*h*_)*O,e[7]=(l*v*o-p*h*o+p*r*d-t*v*d-l*r*x+t*h*x)*O,e[8]=w*O,e[9]=(S*g*o-p*C*o-S*n*x+t*C*x+p*n*_-t*g*_)*O,e[10]=(l*C*o-S*u*o+S*n*d-t*C*d-l*n*_+t*u*_)*O,e[11]=(p*u*o-l*g*o-p*n*d+t*g*d+l*n*x-t*u*x)*O,e[12]=B*O,e[13]=(p*C*r-S*g*r+S*n*v-t*C*v-p*n*y+t*g*y)*O,e[14]=(S*u*r-l*C*r-S*n*h+t*C*h+l*n*y-t*u*y)*O,e[15]=(l*g*r-p*u*r+p*n*h-t*g*h-l*n*v+t*u*v)*O,this}scale(e){const t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),o=1-n,l=e.x,u=e.y,h=e.z,d=o*l,p=o*u;return this.set(d*l+n,d*u-r*h,d*h+r*u,0,d*u+r*h,p*u+n,p*h-r*l,0,d*h-r*u,p*h+r*l,o*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,l){return this.set(1,n,o,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,o=t._x,l=t._y,u=t._z,h=t._w,d=o+o,p=l+l,g=u+u,v=o*d,x=o*p,S=o*g,C=l*p,y=l*g,_=u*g,U=h*d,D=h*p,w=h*g,B=n.x,F=n.y,O=n.z;return r[0]=(1-(C+_))*B,r[1]=(x+w)*B,r[2]=(S-D)*B,r[3]=0,r[4]=(x-w)*F,r[5]=(1-(v+_))*F,r[6]=(y+U)*F,r[7]=0,r[8]=(S+D)*O,r[9]=(y-U)*O,r[10]=(1-(v+C))*O,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let o=Gi.set(r[0],r[1],r[2]).length();const l=Gi.set(r[4],r[5],r[6]).length(),u=Gi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Ln.copy(this);const d=1/o,p=1/l,g=1/u;return Ln.elements[0]*=d,Ln.elements[1]*=d,Ln.elements[2]*=d,Ln.elements[4]*=p,Ln.elements[5]*=p,Ln.elements[6]*=p,Ln.elements[8]*=g,Ln.elements[9]*=g,Ln.elements[10]*=g,t.setFromRotationMatrix(Ln),n.x=o,n.y=l,n.z=u,this}makePerspective(e,t,n,r,o,l,u=ei){const h=this.elements,d=2*o/(t-e),p=2*o/(n-r),g=(t+e)/(t-e),v=(n+r)/(n-r);let x,S;if(u===ei)x=-(l+o)/(l-o),S=-2*l*o/(l-o);else if(u===gs)x=-l/(l-o),S=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=d,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=p,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=x,h[14]=S,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,r,o,l,u=ei){const h=this.elements,d=1/(t-e),p=1/(n-r),g=1/(l-o),v=(t+e)*d,x=(n+r)*p;let S,C;if(u===ei)S=(l+o)*g,C=-2*g;else if(u===gs)S=o*g,C=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=2*d,h[4]=0,h[8]=0,h[12]=-v,h[1]=0,h[5]=2*p,h[9]=0,h[13]=-x,h[2]=0,h[6]=0,h[10]=C,h[14]=-S,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Gi=new Z,Ln=new zt,nu=new Z(0,0,0),iu=new Z(1,1,1),li=new Z,Vr=new Z,Mn=new Z,ba=new zt,wa=new Pr;class Vn{constructor(e=0,t=0,n=0,r=Vn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,o=r[0],l=r[4],u=r[8],h=r[1],d=r[5],p=r[9],g=r[2],v=r[6],x=r[10];switch(t){case"XYZ":this._y=Math.asin(wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,x),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,x),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-g,o),this._z=0);break;case"ZXY":this._x=Math.asin(wt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-l,d)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-wt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-l,d));break;case"YZX":this._z=Math.asin(wt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-g,o)):(this._x=0,this._y=Math.atan2(u,x));break;case"XZY":this._z=Math.asin(-wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-p,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ba.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ba,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wa.setFromEuler(this),this.setFromQuaternion(wa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vn.DEFAULT_ORDER="XYZ";class Ol{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ru=0;const Aa=new Z,Vi=new Pr,Yn=new zt,Wr=new Z,xr=new Z,su=new Z,ou=new Pr,Ca=new Z(1,0,0),Ra=new Z(0,1,0),La=new Z(0,0,1),Pa={type:"added"},au={type:"removed"},Wi={type:"childadded",child:null},ks={type:"childremoved",child:null};class Qt extends ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=Lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const e=new Z,t=new Vn,n=new Pr,r=new Z(1,1,1);function o(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new zt},normalMatrix:{value:new vt}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ol,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.premultiply(Vi),this}rotateX(e){return this.rotateOnAxis(Ca,e)}rotateY(e){return this.rotateOnAxis(Ra,e)}rotateZ(e){return this.rotateOnAxis(La,e)}translateOnAxis(e,t){return Aa.copy(e).applyQuaternion(this.quaternion),this.position.add(Aa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ca,e)}translateY(e){return this.translateOnAxis(Ra,e)}translateZ(e){return this.translateOnAxis(La,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wr.copy(e):Wr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(xr,Wr,this.up):Yn.lookAt(Wr,xr,this.up),this.quaternion.setFromRotationMatrix(Yn),r&&(Yn.extractRotation(r.matrixWorld),Vi.setFromRotationMatrix(Yn),this.quaternion.premultiply(Vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pa),Wi.child=e,this.dispatchEvent(Wi),Wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(au),ks.child=e,this.dispatchEvent(ks),ks.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pa),Wi.child=e,this.dispatchEvent(Wi),Wi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,e,su),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,ou,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(u,h){return u[h.uuid]===void 0&&(u[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const h=u.shapes;if(Array.isArray(h))for(let d=0,p=h.length;d<p;d++){const g=h[d];o(e.shapes,g)}else o(e.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let h=0,d=this.material.length;h<d;h++)u.push(o(e.materials,this.material[h]));r.material=u}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let u=0;u<this.children.length;u++)r.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let u=0;u<this.animations.length;u++){const h=this.animations[u];r.animations.push(o(e.animations,h))}}if(t){const u=l(e.geometries),h=l(e.materials),d=l(e.textures),p=l(e.images),g=l(e.shapes),v=l(e.skeletons),x=l(e.animations),S=l(e.nodes);u.length>0&&(n.geometries=u),h.length>0&&(n.materials=h),d.length>0&&(n.textures=d),p.length>0&&(n.images=p),g.length>0&&(n.shapes=g),v.length>0&&(n.skeletons=v),x.length>0&&(n.animations=x),S.length>0&&(n.nodes=S)}return n.object=r,n;function l(u){const h=[];for(const d in u){const p=u[d];delete p.metadata,h.push(p)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Qt.DEFAULT_UP=new Z(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new Z,$n=new Z,Hs=new Z,Kn=new Z,Xi=new Z,qi=new Z,Da=new Z,Gs=new Z,Vs=new Z,Ws=new Z,Xs=new Ot,qs=new Ot,js=new Ot;class Dn{constructor(e=new Z,t=new Z,n=new Z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Pn.subVectors(e,t),r.cross(Pn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){Pn.subVectors(r,t),$n.subVectors(n,t),Hs.subVectors(e,t);const l=Pn.dot(Pn),u=Pn.dot($n),h=Pn.dot(Hs),d=$n.dot($n),p=$n.dot(Hs),g=l*d-u*u;if(g===0)return o.set(0,0,0),null;const v=1/g,x=(d*h-u*p)*v,S=(l*p-u*h)*v;return o.set(1-x-S,S,x)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,n,r,o,l,u,h){return this.getBarycoord(e,t,n,r,Kn)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(o,Kn.x),h.addScaledVector(l,Kn.y),h.addScaledVector(u,Kn.z),h)}static getInterpolatedAttribute(e,t,n,r,o,l){return Xs.setScalar(0),qs.setScalar(0),js.setScalar(0),Xs.fromBufferAttribute(e,t),qs.fromBufferAttribute(e,n),js.fromBufferAttribute(e,r),l.setScalar(0),l.addScaledVector(Xs,o.x),l.addScaledVector(qs,o.y),l.addScaledVector(js,o.z),l}static isFrontFacing(e,t,n,r){return Pn.subVectors(n,t),$n.subVectors(e,t),Pn.cross($n).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),Pn.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,o){return Dn.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,o=this.c;let l,u;Xi.subVectors(r,n),qi.subVectors(o,n),Gs.subVectors(e,n);const h=Xi.dot(Gs),d=qi.dot(Gs);if(h<=0&&d<=0)return t.copy(n);Vs.subVectors(e,r);const p=Xi.dot(Vs),g=qi.dot(Vs);if(p>=0&&g<=p)return t.copy(r);const v=h*g-p*d;if(v<=0&&h>=0&&p<=0)return l=h/(h-p),t.copy(n).addScaledVector(Xi,l);Ws.subVectors(e,o);const x=Xi.dot(Ws),S=qi.dot(Ws);if(S>=0&&x<=S)return t.copy(o);const C=x*d-h*S;if(C<=0&&d>=0&&S<=0)return u=d/(d-S),t.copy(n).addScaledVector(qi,u);const y=p*S-x*g;if(y<=0&&g-p>=0&&x-S>=0)return Da.subVectors(o,r),u=(g-p)/(g-p+(x-S)),t.copy(r).addScaledVector(Da,u);const _=1/(y+C+v);return l=C*_,u=v*_,t.copy(n).addScaledVector(Xi,l).addScaledVector(qi,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Bl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Xr={h:0,s:0,l:0};function Ys(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class At{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Pt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Pt.workingColorSpace){if(e=Wc(e,1),t=wt(t,0,1),n=wt(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,l=2*n-o;this.r=Ys(l,o,e+1/3),this.g=Ys(l,o,e),this.b=Ys(l,o,e-1/3)}return Pt.toWorkingColorSpace(this,r),this}setStyle(e,t=An){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const l=r[1],u=r[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=An){const n=Bl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ni(e.r),this.g=ni(e.g),this.b=ni(e.b),this}copyLinearToSRGB(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return Pt.fromWorkingColorSpace(hn.copy(this),e),Math.round(wt(hn.r*255,0,255))*65536+Math.round(wt(hn.g*255,0,255))*256+Math.round(wt(hn.b*255,0,255))}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.fromWorkingColorSpace(hn.copy(this),t);const n=hn.r,r=hn.g,o=hn.b,l=Math.max(n,r,o),u=Math.min(n,r,o);let h,d;const p=(u+l)/2;if(u===l)h=0,d=0;else{const g=l-u;switch(d=p<=.5?g/(l+u):g/(2-l-u),l){case n:h=(r-o)/g+(r<o?6:0);break;case r:h=(o-n)/g+2;break;case o:h=(n-r)/g+4;break}h/=6}return e.h=h,e.s=d,e.l=p,e}getRGB(e,t=Pt.workingColorSpace){return Pt.fromWorkingColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=An){Pt.fromWorkingColorSpace(hn.copy(this),e);const t=hn.r,n=hn.g,r=hn.b;return e!==An?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+t,ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(Xr);const n=Ps(ci.h,Xr.h,t),r=Ps(ci.s,Xr.s,t),o=Ps(ci.l,Xr.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new At;At.NAMES=Bl;let lu=0;class hr extends ur{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=Lr(),this.name="",this.type="Material",this.blending=er,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uo,this.blendDst=ho,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=va,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==er&&(n.blending=this.blending),this.side!==gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==uo&&(n.blendSrc=this.blendSrc),this.blendDst!==ho&&(n.blendDst=this.blendDst),this.blendEquation!==Ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ir&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==va&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){const l=[];for(const u in o){const h=o[u];delete h.metadata,l.push(h)}return l}if(t){const o=r(e.textures),l=r(e.images);o.length>0&&(n.textures=o),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class wr extends hr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=Qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new Z,qr=new Ct;class Nn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=xa,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qr.fromBufferAttribute(this,t),qr.applyMatrix3(e),this.setXY(t,qr.x,qr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=gr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gr(t,this.array)),t}setX(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gr(t,this.array)),t}setY(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gr(t,this.array)),t}setW(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array),r=_n(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array),r=_n(r,this.array),o=_n(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xa&&(e.usage=this.usage),e}}class zl extends Nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class kl extends Nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Yt extends Nn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let cu=0;const En=new zt,$s=new Qt,ji=new Z,Sn=new Dr,yr=new Dr,rn=new Z;class gn extends ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=Lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ul(e)?kl:zl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new vt().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,n){return En.makeTranslation(e,t,n),this.applyMatrix4(En),this}scale(e,t,n){return En.makeScale(e,t,n),this.applyMatrix4(En),this}lookAt(e){return $s.lookAt(e),$s.updateMatrix(),this.applyMatrix4($s.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,o=e.length;r<o;r++){const l=e[r];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new Yt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const o=e[r];t.setXYZ(r,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const o=t[n];Sn.setFromBufferAttribute(o),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let o=0,l=t.length;o<l;o++){const u=t[o];yr.setFromBufferAttribute(u),this.morphTargetsRelative?(rn.addVectors(Sn.min,yr.min),Sn.expandByPoint(rn),rn.addVectors(Sn.max,yr.max),Sn.expandByPoint(rn)):(Sn.expandByPoint(yr.min),Sn.expandByPoint(yr.max))}Sn.getCenter(n);let r=0;for(let o=0,l=e.count;o<l;o++)rn.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared(rn));if(t)for(let o=0,l=t.length;o<l;o++){const u=t[o],h=this.morphTargetsRelative;for(let d=0,p=u.count;d<p;d++)rn.fromBufferAttribute(u,d),h&&(ji.fromBufferAttribute(e,d),rn.add(ji)),r=Math.max(r,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*n.count),4));const l=this.getAttribute("tangent"),u=[],h=[];for(let G=0;G<n.count;G++)u[G]=new Z,h[G]=new Z;const d=new Z,p=new Z,g=new Z,v=new Ct,x=new Ct,S=new Ct,C=new Z,y=new Z;function _(G,R,T){d.fromBufferAttribute(n,G),p.fromBufferAttribute(n,R),g.fromBufferAttribute(n,T),v.fromBufferAttribute(o,G),x.fromBufferAttribute(o,R),S.fromBufferAttribute(o,T),p.sub(d),g.sub(d),x.sub(v),S.sub(v);const z=1/(x.x*S.y-S.x*x.y);isFinite(z)&&(C.copy(p).multiplyScalar(S.y).addScaledVector(g,-x.y).multiplyScalar(z),y.copy(g).multiplyScalar(x.x).addScaledVector(p,-S.x).multiplyScalar(z),u[G].add(C),u[R].add(C),u[T].add(C),h[G].add(y),h[R].add(y),h[T].add(y))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let G=0,R=U.length;G<R;++G){const T=U[G],z=T.start,ee=T.count;for(let Q=z,le=z+ee;Q<le;Q+=3)_(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const D=new Z,w=new Z,B=new Z,F=new Z;function O(G){B.fromBufferAttribute(r,G),F.copy(B);const R=u[G];D.copy(R),D.sub(B.multiplyScalar(B.dot(R))).normalize(),w.crossVectors(F,R);const z=w.dot(h[G])<0?-1:1;l.setXYZW(G,D.x,D.y,D.z,z)}for(let G=0,R=U.length;G<R;++G){const T=U[G],z=T.start,ee=T.count;for(let Q=z,le=z+ee;Q<le;Q+=3)O(e.getX(Q+0)),O(e.getX(Q+1)),O(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let v=0,x=n.count;v<x;v++)n.setXYZ(v,0,0,0);const r=new Z,o=new Z,l=new Z,u=new Z,h=new Z,d=new Z,p=new Z,g=new Z;if(e)for(let v=0,x=e.count;v<x;v+=3){const S=e.getX(v+0),C=e.getX(v+1),y=e.getX(v+2);r.fromBufferAttribute(t,S),o.fromBufferAttribute(t,C),l.fromBufferAttribute(t,y),p.subVectors(l,o),g.subVectors(r,o),p.cross(g),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,C),d.fromBufferAttribute(n,y),u.add(p),h.add(p),d.add(p),n.setXYZ(S,u.x,u.y,u.z),n.setXYZ(C,h.x,h.y,h.z),n.setXYZ(y,d.x,d.y,d.z)}else for(let v=0,x=t.count;v<x;v+=3)r.fromBufferAttribute(t,v+0),o.fromBufferAttribute(t,v+1),l.fromBufferAttribute(t,v+2),p.subVectors(l,o),g.subVectors(r,o),p.cross(g),n.setXYZ(v+0,p.x,p.y,p.z),n.setXYZ(v+1,p.x,p.y,p.z),n.setXYZ(v+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(u,h){const d=u.array,p=u.itemSize,g=u.normalized,v=new d.constructor(h.length*p);let x=0,S=0;for(let C=0,y=h.length;C<y;C++){u.isInterleavedBufferAttribute?x=h[C]*u.data.stride+u.offset:x=h[C]*p;for(let _=0;_<p;_++)v[S++]=d[x++]}return new Nn(v,p,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gn,n=this.index.array,r=this.attributes;for(const u in r){const h=r[u],d=e(h,n);t.setAttribute(u,d)}const o=this.morphAttributes;for(const u in o){const h=[],d=o[u];for(let p=0,g=d.length;p<g;p++){const v=d[p],x=e(v,n);h.push(x)}t.morphAttributes[u]=h}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let u=0,h=l.length;u<h;u++){const d=l[u];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const d=n[h];e.data.attributes[h]=d.toJSON(e.data)}const r={};let o=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],p=[];for(let g=0,v=d.length;g<v;g++){const x=d[g];p.push(x.toJSON(e.data))}p.length>0&&(r[h]=p,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const d in r){const p=r[d];this.setAttribute(d,p.clone(t))}const o=e.morphAttributes;for(const d in o){const p=[],g=o[d];for(let v=0,x=g.length;v<x;v++)p.push(g[v].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let d=0,p=l.length;d<p;d++){const g=l[d];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ua=new zt,Ei=new Fl,jr=new vs,Ia=new Z,Yr=new Z,$r=new Z,Kr=new Z,Ks=new Z,Zr=new Z,Na=new Z,Jr=new Z;class Jt extends Qt{constructor(e=new gn,t=new wr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){const u=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const u=this.morphTargetInfluences;if(o&&u){Zr.set(0,0,0);for(let h=0,d=o.length;h<d;h++){const p=u[h],g=o[h];p!==0&&(Ks.fromBufferAttribute(g,e),l?Zr.addScaledVector(Ks,p):Zr.addScaledVector(Ks.sub(t),p))}t.add(Zr)}return t}raycast(e,t){const n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(o),Ei.copy(e.ray).recast(e.near),!(jr.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(jr,Ia)===null||Ei.origin.distanceToSquared(Ia)>(e.far-e.near)**2))&&(Ua.copy(o).invert(),Ei.copy(e.ray).applyMatrix4(Ua),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ei)))}_computeIntersections(e,t,n){let r;const o=this.geometry,l=this.material,u=o.index,h=o.attributes.position,d=o.attributes.uv,p=o.attributes.uv1,g=o.attributes.normal,v=o.groups,x=o.drawRange;if(u!==null)if(Array.isArray(l))for(let S=0,C=v.length;S<C;S++){const y=v[S],_=l[y.materialIndex],U=Math.max(y.start,x.start),D=Math.min(u.count,Math.min(y.start+y.count,x.start+x.count));for(let w=U,B=D;w<B;w+=3){const F=u.getX(w),O=u.getX(w+1),G=u.getX(w+2);r=Qr(this,_,e,n,d,p,g,F,O,G),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{const S=Math.max(0,x.start),C=Math.min(u.count,x.start+x.count);for(let y=S,_=C;y<_;y+=3){const U=u.getX(y),D=u.getX(y+1),w=u.getX(y+2);r=Qr(this,l,e,n,d,p,g,U,D,w),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}else if(h!==void 0)if(Array.isArray(l))for(let S=0,C=v.length;S<C;S++){const y=v[S],_=l[y.materialIndex],U=Math.max(y.start,x.start),D=Math.min(h.count,Math.min(y.start+y.count,x.start+x.count));for(let w=U,B=D;w<B;w+=3){const F=w,O=w+1,G=w+2;r=Qr(this,_,e,n,d,p,g,F,O,G),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{const S=Math.max(0,x.start),C=Math.min(h.count,x.start+x.count);for(let y=S,_=C;y<_;y+=3){const U=y,D=y+1,w=y+2;r=Qr(this,l,e,n,d,p,g,U,D,w),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}}}function uu(i,e,t,n,r,o,l,u){let h;if(e.side===vn?h=n.intersectTriangle(l,o,r,!0,u):h=n.intersectTriangle(r,o,l,e.side===gi,u),h===null)return null;Jr.copy(u),Jr.applyMatrix4(i.matrixWorld);const d=t.ray.origin.distanceTo(Jr);return d<t.near||d>t.far?null:{distance:d,point:Jr.clone(),object:i}}function Qr(i,e,t,n,r,o,l,u,h,d){i.getVertexPosition(u,Yr),i.getVertexPosition(h,$r),i.getVertexPosition(d,Kr);const p=uu(i,e,t,n,Yr,$r,Kr,Na);if(p){const g=new Z;Dn.getBarycoord(Na,Yr,$r,Kr,g),r&&(p.uv=Dn.getInterpolatedAttribute(r,u,h,d,g,new Ct)),o&&(p.uv1=Dn.getInterpolatedAttribute(o,u,h,d,g,new Ct)),l&&(p.normal=Dn.getInterpolatedAttribute(l,u,h,d,g,new Z),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const v={a:u,b:h,c:d,normal:new Z,materialIndex:0};Dn.getNormal(Yr,$r,Kr,v.normal),p.face=v,p.barycoord=g}return p}class vi extends gn{constructor(e=1,t=1,n=1,r=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:l};const u=this;r=Math.floor(r),o=Math.floor(o),l=Math.floor(l);const h=[],d=[],p=[],g=[];let v=0,x=0;S("z","y","x",-1,-1,n,t,e,l,o,0),S("z","y","x",1,-1,n,t,-e,l,o,1),S("x","z","y",1,1,e,n,t,r,l,2),S("x","z","y",1,-1,e,n,-t,r,l,3),S("x","y","z",1,-1,e,t,n,r,o,4),S("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(h),this.setAttribute("position",new Yt(d,3)),this.setAttribute("normal",new Yt(p,3)),this.setAttribute("uv",new Yt(g,2));function S(C,y,_,U,D,w,B,F,O,G,R){const T=w/O,z=B/G,ee=w/2,Q=B/2,le=F/2,de=O+1,X=G+1;let ye=0,ce=0;const c=new Z;for(let Ue=0;Ue<X;Ue++){const je=Ue*z-Q;for(let dt=0;dt<de;dt++){const Et=dt*T-ee;c[C]=Et*U,c[y]=je*D,c[_]=le,d.push(c.x,c.y,c.z),c[C]=0,c[y]=0,c[_]=F>0?1:-1,p.push(c.x,c.y,c.z),g.push(dt/O),g.push(1-Ue/G),ye+=1}}for(let Ue=0;Ue<G;Ue++)for(let je=0;je<O;je++){const dt=v+je+de*Ue,Et=v+je+de*(Ue+1),pe=v+(je+1)+de*(Ue+1),Te=v+(je+1)+de*Ue;h.push(dt,Et,Te),h.push(Et,pe,Te),ce+=6}u.addGroup(x,ce,R),x+=ce,v+=ye}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function pn(i){const e={};for(let t=0;t<i.length;t++){const n=cr(i[t]);for(const r in n)e[r]=n[r]}return e}function hu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Hl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const fu={clone:cr,merge:pn};var du=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends hr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=du,this.fragmentShader=pu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cr(e.uniforms),this.uniformsGroups=hu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?t.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[r]={type:"m4",value:l.toArray()}:t.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Gl extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ui=new Z,Fa=new Ct,Oa=new Ct;class fn extends Gl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$o*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ls*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $o*2*Math.atan(Math.tan(Ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ui.x,ui.y).multiplyScalar(-e/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-e/ui.z)}getViewSize(e,t){return this.getViewBounds(e,Fa,Oa),t.subVectors(Oa,Fa)}setViewOffset(e,t,n,r,o,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ls*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const h=l.fullWidth,d=l.fullHeight;o+=l.offsetX*r/h,t-=l.offsetY*n/d,r*=l.width/h,n*=l.height/d}const u=this.filmOffset;u!==0&&(o+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Yi=-90,$i=1;class mu extends Qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new fn(Yi,$i,e,t);r.layers=this.layers,this.add(r);const o=new fn(Yi,$i,e,t);o.layers=this.layers,this.add(o);const l=new fn(Yi,$i,e,t);l.layers=this.layers,this.add(l);const u=new fn(Yi,$i,e,t);u.layers=this.layers,this.add(u);const h=new fn(Yi,$i,e,t);h.layers=this.layers,this.add(h);const d=new fn(Yi,$i,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,o,l,u,h]=t;for(const d of t)this.remove(d);if(e===ei)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===gs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,l,u,h,d,p]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const C=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,o),e.setRenderTarget(n,1,r),e.render(t,l),e.setRenderTarget(n,2,r),e.render(t,u),e.setRenderTarget(n,3,r),e.render(t,h),e.setRenderTarget(n,4,r),e.render(t,d),n.texture.generateMipmaps=C,e.setRenderTarget(n,5,r),e.render(t,p),e.setRenderTarget(g,v,x),e.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class Vl extends mn{constructor(e,t,n,r,o,l,u,h,d,p){e=e!==void 0?e:[],t=t!==void 0?t:rr,super(e,t,n,r,o,l,u,h,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gu extends Ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Vl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Hn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new vi(5,5,5),o=new _i({name:"CubemapFromEquirect",uniforms:cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vn,blending:di});o.uniforms.tEquirect.value=t;const l=new Jt(r,o),u=t.minFilter;return t.minFilter===Di&&(t.minFilter=Hn),new mu(1,10,this).update(e,l),t.minFilter=u,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,n,r){const o=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,r);e.setRenderTarget(o)}}class xs{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new At(e),this.near=t,this.far=n}clone(){return new xs(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ys extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Zs=new Z,_u=new Z,vu=new vt;class Ai{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Zs.subVectors(n,t).cross(_u.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Zs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||vu.getNormalMatrix(e),r=this.coplanarPoint(Zs).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new vs,es=new Z;class oa{constructor(e=new Ai,t=new Ai,n=new Ai,r=new Ai,o=new Ai,l=new Ai){this.planes=[e,t,n,r,o,l]}set(e,t,n,r,o,l){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(n),u[3].copy(r),u[4].copy(o),u[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ei){const n=this.planes,r=e.elements,o=r[0],l=r[1],u=r[2],h=r[3],d=r[4],p=r[5],g=r[6],v=r[7],x=r[8],S=r[9],C=r[10],y=r[11],_=r[12],U=r[13],D=r[14],w=r[15];if(n[0].setComponents(h-o,v-d,y-x,w-_).normalize(),n[1].setComponents(h+o,v+d,y+x,w+_).normalize(),n[2].setComponents(h+l,v+p,y+S,w+U).normalize(),n[3].setComponents(h-l,v-p,y-S,w-U).normalize(),n[4].setComponents(h-u,v-g,y-C,w-D).normalize(),t===ei)n[5].setComponents(h+u,v+g,y+C,w+D).normalize();else if(t===gs)n[5].setComponents(u,g,C,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(es.x=r.normal.x>0?e.max.x:e.min.x,es.y=r.normal.y>0?e.max.y:e.min.y,es.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(es)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class aa extends hr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ba=new zt,Ko=new Fl,ts=new vs,ns=new Z;class Wl extends Qt{constructor(e=new gn,t=new aa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere),ts.applyMatrix4(r),ts.radius+=o,e.ray.intersectsSphere(ts)===!1)return;Ba.copy(r).invert(),Ko.copy(e.ray).applyMatrix4(Ba);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,d=n.index,g=n.attributes.position;if(d!==null){const v=Math.max(0,l.start),x=Math.min(d.count,l.start+l.count);for(let S=v,C=x;S<C;S++){const y=d.getX(S);ns.fromBufferAttribute(g,y),za(ns,y,h,r,e,t,this)}}else{const v=Math.max(0,l.start),x=Math.min(g.count,l.start+l.count);for(let S=v,C=x;S<C;S++)ns.fromBufferAttribute(g,S),za(ns,S,h,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){const u=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function za(i,e,t,n,r,o,l){const u=Ko.distanceSqToPoint(i);if(u<t){const h=new Z;Ko.closestPointToPoint(i,h),h.applyMatrix4(n);const d=r.ray.origin.distanceTo(h);if(d<r.near||d>r.far)return;o.push({distance:d,distanceToRay:Math.sqrt(u),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:l})}}class Ji extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Xl extends mn{constructor(e,t,n,r,o,l,u,h,d,p=tr){if(p!==tr&&p!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===tr&&(n=Ui),n===void 0&&p===ar&&(n=or),super(null,r,o,l,u,h,p,n,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:In,this.minFilter=h!==void 0?h:In,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ur extends gn{constructor(e=1,t=1,n=1,r=32,o=1,l=!1,u=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:h};const d=this;r=Math.floor(r),o=Math.floor(o);const p=[],g=[],v=[],x=[];let S=0;const C=[],y=n/2;let _=0;U(),l===!1&&(e>0&&D(!0),t>0&&D(!1)),this.setIndex(p),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(v,3)),this.setAttribute("uv",new Yt(x,2));function U(){const w=new Z,B=new Z;let F=0;const O=(t-e)/n;for(let G=0;G<=o;G++){const R=[],T=G/o,z=T*(t-e)+e;for(let ee=0;ee<=r;ee++){const Q=ee/r,le=Q*h+u,de=Math.sin(le),X=Math.cos(le);B.x=z*de,B.y=-T*n+y,B.z=z*X,g.push(B.x,B.y,B.z),w.set(de,O,X).normalize(),v.push(w.x,w.y,w.z),x.push(Q,1-T),R.push(S++)}C.push(R)}for(let G=0;G<r;G++)for(let R=0;R<o;R++){const T=C[R][G],z=C[R+1][G],ee=C[R+1][G+1],Q=C[R][G+1];(e>0||R!==0)&&(p.push(T,z,Q),F+=3),(t>0||R!==o-1)&&(p.push(z,ee,Q),F+=3)}d.addGroup(_,F,0),_+=F}function D(w){const B=S,F=new Ct,O=new Z;let G=0;const R=w===!0?e:t,T=w===!0?1:-1;for(let ee=1;ee<=r;ee++)g.push(0,y*T,0),v.push(0,T,0),x.push(.5,.5),S++;const z=S;for(let ee=0;ee<=r;ee++){const le=ee/r*h+u,de=Math.cos(le),X=Math.sin(le);O.x=R*X,O.y=y*T,O.z=R*de,g.push(O.x,O.y,O.z),v.push(0,T,0),F.x=de*.5+.5,F.y=X*.5*T+.5,x.push(F.x,F.y),S++}for(let ee=0;ee<r;ee++){const Q=B+ee,le=z+ee;w===!0?p.push(le,le+1,Q):p.push(le+1,le,Q),G+=3}d.addGroup(_,G,w===!0?1:2),_+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ur(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class la extends gn{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const o=[],l=[];u(r),d(n),p(),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(o.slice(),3)),this.setAttribute("uv",new Yt(l,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function u(U){const D=new Z,w=new Z,B=new Z;for(let F=0;F<t.length;F+=3)x(t[F+0],D),x(t[F+1],w),x(t[F+2],B),h(D,w,B,U)}function h(U,D,w,B){const F=B+1,O=[];for(let G=0;G<=F;G++){O[G]=[];const R=U.clone().lerp(w,G/F),T=D.clone().lerp(w,G/F),z=F-G;for(let ee=0;ee<=z;ee++)ee===0&&G===F?O[G][ee]=R:O[G][ee]=R.clone().lerp(T,ee/z)}for(let G=0;G<F;G++)for(let R=0;R<2*(F-G)-1;R++){const T=Math.floor(R/2);R%2===0?(v(O[G][T+1]),v(O[G+1][T]),v(O[G][T])):(v(O[G][T+1]),v(O[G+1][T+1]),v(O[G+1][T]))}}function d(U){const D=new Z;for(let w=0;w<o.length;w+=3)D.x=o[w+0],D.y=o[w+1],D.z=o[w+2],D.normalize().multiplyScalar(U),o[w+0]=D.x,o[w+1]=D.y,o[w+2]=D.z}function p(){const U=new Z;for(let D=0;D<o.length;D+=3){U.x=o[D+0],U.y=o[D+1],U.z=o[D+2];const w=y(U)/2/Math.PI+.5,B=_(U)/Math.PI+.5;l.push(w,1-B)}S(),g()}function g(){for(let U=0;U<l.length;U+=6){const D=l[U+0],w=l[U+2],B=l[U+4],F=Math.max(D,w,B),O=Math.min(D,w,B);F>.9&&O<.1&&(D<.2&&(l[U+0]+=1),w<.2&&(l[U+2]+=1),B<.2&&(l[U+4]+=1))}}function v(U){o.push(U.x,U.y,U.z)}function x(U,D){const w=U*3;D.x=e[w+0],D.y=e[w+1],D.z=e[w+2]}function S(){const U=new Z,D=new Z,w=new Z,B=new Z,F=new Ct,O=new Ct,G=new Ct;for(let R=0,T=0;R<o.length;R+=9,T+=6){U.set(o[R+0],o[R+1],o[R+2]),D.set(o[R+3],o[R+4],o[R+5]),w.set(o[R+6],o[R+7],o[R+8]),F.set(l[T+0],l[T+1]),O.set(l[T+2],l[T+3]),G.set(l[T+4],l[T+5]),B.copy(U).add(D).add(w).divideScalar(3);const z=y(B);C(F,T+0,U,z),C(O,T+2,D,z),C(G,T+4,w,z)}}function C(U,D,w,B){B<0&&U.x===1&&(l[D]=U.x-1),w.x===0&&w.z===0&&(l[D]=B/2/Math.PI+.5)}function y(U){return Math.atan2(U.z,-U.x)}function _(U){return Math.atan2(-U.y,Math.sqrt(U.x*U.x+U.z*U.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new la(e.vertices,e.indices,e.radius,e.details)}}class ca extends la{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ca(e.radius,e.detail)}}class Ir extends gn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const o=e/2,l=t/2,u=Math.floor(n),h=Math.floor(r),d=u+1,p=h+1,g=e/u,v=t/h,x=[],S=[],C=[],y=[];for(let _=0;_<p;_++){const U=_*v-l;for(let D=0;D<d;D++){const w=D*g-o;S.push(w,-U,0),C.push(0,0,1),y.push(D/u),y.push(1-_/h)}}for(let _=0;_<h;_++)for(let U=0;U<u;U++){const D=U+d*_,w=U+d*(_+1),B=U+1+d*(_+1),F=U+1+d*_;x.push(D,w,F),x.push(w,B,F)}this.setIndex(x),this.setAttribute("position",new Yt(S,3)),this.setAttribute("normal",new Yt(C,3)),this.setAttribute("uv",new Yt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ir(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ms extends gn{constructor(e=1,t=32,n=16,r=0,o=Math.PI*2,l=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:o,thetaStart:l,thetaLength:u},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const h=Math.min(l+u,Math.PI);let d=0;const p=[],g=new Z,v=new Z,x=[],S=[],C=[],y=[];for(let _=0;_<=n;_++){const U=[],D=_/n;let w=0;_===0&&l===0?w=.5/t:_===n&&h===Math.PI&&(w=-.5/t);for(let B=0;B<=t;B++){const F=B/t;g.x=-e*Math.cos(r+F*o)*Math.sin(l+D*u),g.y=e*Math.cos(l+D*u),g.z=e*Math.sin(r+F*o)*Math.sin(l+D*u),S.push(g.x,g.y,g.z),v.copy(g).normalize(),C.push(v.x,v.y,v.z),y.push(F+w,1-D),U.push(d++)}p.push(U)}for(let _=0;_<n;_++)for(let U=0;U<t;U++){const D=p[_][U+1],w=p[_][U],B=p[_+1][U],F=p[_+1][U+1];(_!==0||l>0)&&x.push(D,w,F),(_!==n-1||h<Math.PI)&&x.push(w,B,F)}this.setIndex(x),this.setAttribute("position",new Yt(S,3)),this.setAttribute("normal",new Yt(C,3)),this.setAttribute("uv",new Yt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ms(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ua extends gn{constructor(e=1,t=.4,n=12,r=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:o},n=Math.floor(n),r=Math.floor(r);const l=[],u=[],h=[],d=[],p=new Z,g=new Z,v=new Z;for(let x=0;x<=n;x++)for(let S=0;S<=r;S++){const C=S/r*o,y=x/n*Math.PI*2;g.x=(e+t*Math.cos(y))*Math.cos(C),g.y=(e+t*Math.cos(y))*Math.sin(C),g.z=t*Math.sin(y),u.push(g.x,g.y,g.z),p.x=e*Math.cos(C),p.y=e*Math.sin(C),v.subVectors(g,p).normalize(),h.push(v.x,v.y,v.z),d.push(S/r),d.push(x/n)}for(let x=1;x<=n;x++)for(let S=1;S<=r;S++){const C=(r+1)*x+S-1,y=(r+1)*(x-1)+S-1,_=(r+1)*(x-1)+S,U=(r+1)*x+S;l.push(C,y,U),l.push(y,_,U)}this.setIndex(l),this.setAttribute("position",new Yt(u,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class mi extends hr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new At(16777215),this.specular=new At(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pl,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=Qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xu extends hr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ic,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yu extends hr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ka={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Mu{constructor(e,t,n){const r=this;let o=!1,l=0,u=0,h;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(p){u++,o===!1&&r.onStart!==void 0&&r.onStart(p,l,u),o=!0},this.itemEnd=function(p){l++,r.onProgress!==void 0&&r.onProgress(p,l,u),l===u&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(p){r.onError!==void 0&&r.onError(p)},this.resolveURL=function(p){return h?h(p):p},this.setURLModifier=function(p){return h=p,this},this.addHandler=function(p,g){return d.push(p,g),this},this.removeHandler=function(p){const g=d.indexOf(p);return g!==-1&&d.splice(g,2),this},this.getHandler=function(p){for(let g=0,v=d.length;g<v;g+=2){const x=d[g],S=d[g+1];if(x.global&&(x.lastIndex=0),x.test(p))return S}return null}}}const Su=new Mu;class ha{constructor(e){this.manager=e!==void 0?e:Su,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,o){n.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ha.DEFAULT_MATERIAL_NAME="__DEFAULT";class Eu extends ha{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,l=ka.get(e);if(l!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(l),o.manager.itemEnd(e)},0),l;const u=Cr("img");function h(){p(),ka.add(e,this),t&&t(this),o.manager.itemEnd(e)}function d(g){p(),r&&r(g),o.manager.itemError(e),o.manager.itemEnd(e)}function p(){u.removeEventListener("load",h,!1),u.removeEventListener("error",d,!1)}return u.addEventListener("load",h,!1),u.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),o.manager.itemStart(e),u.src=e,u}}class Js extends ha{constructor(e){super(e)}load(e,t,n,r){const o=new mn,l=new Eu(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(u){o.image=u,o.needsUpdate=!0,t!==void 0&&t(o)},n,r),o}}class ql extends Qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new At(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class jl extends ql{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Qs=new zt,Ha=new Z,Ga=new Z;class Tu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oa,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ha.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ha),Ga.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ga),t.updateMatrixWorld(),Qs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Va=new zt,Mr=new Z,eo=new Z;class bu extends Tu{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ct(4,2),this._viewportCount=6,this._viewports=[new Ot(2,1,1,1),new Ot(0,1,1,1),new Ot(3,1,1,1),new Ot(1,1,1,1),new Ot(3,0,1,1),new Ot(1,0,1,1)],this._cubeDirections=[new Z(1,0,0),new Z(-1,0,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,1,0),new Z(0,-1,0)],this._cubeUps=[new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,0,1),new Z(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,o=e.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Mr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Mr),eo.copy(n.position),eo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(eo),n.updateMatrixWorld(),r.makeTranslation(-Mr.x,-Mr.y,-Mr.z),Va.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Va)}}class wu extends ql{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new bu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Au extends Gl{constructor(e=-1,t=1,n=1,r=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=n-e,l=n+e,u=r+t,h=r-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,l=o+d*this.view.width,u-=p*this.view.offsetY,h=u-p*this.view.height}this.projectionMatrix.makeOrthographic(o,l,u,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Cu extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function Wa(i,e,t,n){const r=Ru(n);switch(t){case Tl:return i*e;case wl:return i*e;case Al:return i*e*2;case Cl:return i*e/r.components*r.byteLength;case ia:return i*e/r.components*r.byteLength;case Rl:return i*e*2/r.components*r.byteLength;case ra:return i*e*2/r.components*r.byteLength;case bl:return i*e*3/r.components*r.byteLength;case Un:return i*e*4/r.components*r.byteLength;case sa:return i*e*4/r.components*r.byteLength;case ls:case cs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case us:case hs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case To:case wo:return Math.max(i,16)*Math.max(e,8)/4;case Eo:case bo:return Math.max(i,8)*Math.max(e,8)/2;case Ao:case Co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Po:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Do:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Uo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Io:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case No:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Fo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Oo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case zo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ko:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ho:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Go:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Vo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case fs:case Wo:case Xo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ll:case qo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case jo:case Yo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ru(i){switch(i){case ii:case Ml:return{byteLength:1,components:1};case Ar:case Sl:case Rr:return{byteLength:2,components:1};case ta:case na:return{byteLength:2,components:4};case Ui:case ea:case Qn:return{byteLength:4,components:1};case El:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jo);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Yl(){let i=null,e=!1,t=null,n=null;function r(o,l){t(o,l),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function Lu(i){const e=new WeakMap;function t(u,h){const d=u.array,p=u.usage,g=d.byteLength,v=i.createBuffer();i.bindBuffer(h,v),i.bufferData(h,d,p),u.onUploadCallback();let x;if(d instanceof Float32Array)x=i.FLOAT;else if(d instanceof Uint16Array)u.isFloat16BufferAttribute?x=i.HALF_FLOAT:x=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=i.SHORT;else if(d instanceof Uint32Array)x=i.UNSIGNED_INT;else if(d instanceof Int32Array)x=i.INT;else if(d instanceof Int8Array)x=i.BYTE;else if(d instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:g}}function n(u,h,d){const p=h.array,g=h.updateRanges;if(i.bindBuffer(d,u),g.length===0)i.bufferSubData(d,0,p);else{g.sort((x,S)=>x.start-S.start);let v=0;for(let x=1;x<g.length;x++){const S=g[v],C=g[x];C.start<=S.start+S.count+1?S.count=Math.max(S.count,C.start+C.count-S.start):(++v,g[v]=C)}g.length=v+1;for(let x=0,S=g.length;x<S;x++){const C=g[x];i.bufferSubData(d,C.start*p.BYTES_PER_ELEMENT,p,C.start,C.count)}h.clearUpdateRanges()}h.onUploadCallback()}function r(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=e.get(u);h&&(i.deleteBuffer(h.buffer),e.delete(u))}function l(u,h){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const d=e.get(u);if(d===void 0)e.set(u,t(u,h));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,u,h),d.version=u.version}}return{get:r,remove:o,update:l}}var Pu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Du=`#ifdef USE_ALPHAHASH
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
#endif`,Uu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Iu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ou=`#ifdef USE_AOMAP
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
#endif`,Bu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zu=`#ifdef USE_BATCHING
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
#endif`,ku=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wu=`#ifdef USE_IRIDESCENCE
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
#endif`,Xu=`#ifdef USE_BUMPMAP
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
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ju=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ku=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,eh=`#define PI 3.141592653589793
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
} // validated`,th=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nh=`vec3 transformedNormal = objectNormal;
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
#endif`,ih=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ah="gl_FragColor = linearToOutputTexel( gl_FragColor );",lh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ch=`#ifdef USE_ENVMAP
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
#endif`,uh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hh=`#ifdef USE_ENVMAP
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
#endif`,fh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dh=`#ifdef USE_ENVMAP
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
#endif`,ph=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_h=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vh=`#ifdef USE_GRADIENTMAP
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
}`,xh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sh=`uniform bool receiveShadow;
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
#endif`,Eh=`#ifdef USE_ENVMAP
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
#endif`,Th=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ah=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ch=`PhysicalMaterial material;
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
#endif`,Rh=`struct PhysicalMaterial {
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
}`,Lh=`
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
#endif`,Ph=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Uh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ih=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Oh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kh=`#if defined( USE_POINTS_UV )
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
#endif`,Hh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qh=`#ifdef USE_MORPHTARGETS
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
#endif`,jh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$h=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Kh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qh=`#ifdef USE_NORMALMAP
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
#endif`,ef=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,of=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,af=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ff=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,df=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gf=`float getShadowMask() {
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
}`,_f=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vf=`#ifdef USE_SKINNING
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
#endif`,xf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yf=`#ifdef USE_SKINNING
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
#endif`,Mf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ef=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bf=`#ifdef USE_TRANSMISSION
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
#endif`,wf=`#ifdef USE_TRANSMISSION
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
#endif`,Af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Df=`uniform sampler2D t2D;
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
}`,Uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,If=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ff=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Of=`#include <common>
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
}`,Bf=`#if DEPTH_PACKING == 3200
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
}`,zf=`#define DISTANCE
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
}`,kf=`#define DISTANCE
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
}`,Hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vf=`uniform float scale;
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
}`,Wf=`uniform vec3 diffuse;
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
}`,Xf=`#include <common>
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
}`,qf=`uniform vec3 diffuse;
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
}`,jf=`#define LAMBERT
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
}`,Yf=`#define LAMBERT
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
}`,$f=`#define MATCAP
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
}`,Kf=`#define MATCAP
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
}`,Zf=`#define NORMAL
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
}`,Jf=`#define NORMAL
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
}`,Qf=`#define PHONG
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
}`,ed=`#define PHONG
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
}`,td=`#define STANDARD
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
}`,nd=`#define STANDARD
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
}`,id=`#define TOON
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
}`,rd=`#define TOON
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
}`,sd=`uniform float size;
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
}`,od=`uniform vec3 diffuse;
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
}`,ad=`#include <common>
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
}`,ld=`uniform vec3 color;
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
}`,cd=`uniform float rotation;
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
}`,ud=`uniform vec3 diffuse;
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
}`,xt={alphahash_fragment:Pu,alphahash_pars_fragment:Du,alphamap_fragment:Uu,alphamap_pars_fragment:Iu,alphatest_fragment:Nu,alphatest_pars_fragment:Fu,aomap_fragment:Ou,aomap_pars_fragment:Bu,batching_pars_vertex:zu,batching_vertex:ku,begin_vertex:Hu,beginnormal_vertex:Gu,bsdfs:Vu,iridescence_fragment:Wu,bumpmap_pars_fragment:Xu,clipping_planes_fragment:qu,clipping_planes_pars_fragment:ju,clipping_planes_pars_vertex:Yu,clipping_planes_vertex:$u,color_fragment:Ku,color_pars_fragment:Zu,color_pars_vertex:Ju,color_vertex:Qu,common:eh,cube_uv_reflection_fragment:th,defaultnormal_vertex:nh,displacementmap_pars_vertex:ih,displacementmap_vertex:rh,emissivemap_fragment:sh,emissivemap_pars_fragment:oh,colorspace_fragment:ah,colorspace_pars_fragment:lh,envmap_fragment:ch,envmap_common_pars_fragment:uh,envmap_pars_fragment:hh,envmap_pars_vertex:fh,envmap_physical_pars_fragment:Eh,envmap_vertex:dh,fog_vertex:ph,fog_pars_vertex:mh,fog_fragment:gh,fog_pars_fragment:_h,gradientmap_pars_fragment:vh,lightmap_pars_fragment:xh,lights_lambert_fragment:yh,lights_lambert_pars_fragment:Mh,lights_pars_begin:Sh,lights_toon_fragment:Th,lights_toon_pars_fragment:bh,lights_phong_fragment:wh,lights_phong_pars_fragment:Ah,lights_physical_fragment:Ch,lights_physical_pars_fragment:Rh,lights_fragment_begin:Lh,lights_fragment_maps:Ph,lights_fragment_end:Dh,logdepthbuf_fragment:Uh,logdepthbuf_pars_fragment:Ih,logdepthbuf_pars_vertex:Nh,logdepthbuf_vertex:Fh,map_fragment:Oh,map_pars_fragment:Bh,map_particle_fragment:zh,map_particle_pars_fragment:kh,metalnessmap_fragment:Hh,metalnessmap_pars_fragment:Gh,morphinstance_vertex:Vh,morphcolor_vertex:Wh,morphnormal_vertex:Xh,morphtarget_pars_vertex:qh,morphtarget_vertex:jh,normal_fragment_begin:Yh,normal_fragment_maps:$h,normal_pars_fragment:Kh,normal_pars_vertex:Zh,normal_vertex:Jh,normalmap_pars_fragment:Qh,clearcoat_normal_fragment_begin:ef,clearcoat_normal_fragment_maps:tf,clearcoat_pars_fragment:nf,iridescence_pars_fragment:rf,opaque_fragment:sf,packing:of,premultiplied_alpha_fragment:af,project_vertex:lf,dithering_fragment:cf,dithering_pars_fragment:uf,roughnessmap_fragment:hf,roughnessmap_pars_fragment:ff,shadowmap_pars_fragment:df,shadowmap_pars_vertex:pf,shadowmap_vertex:mf,shadowmask_pars_fragment:gf,skinbase_vertex:_f,skinning_pars_vertex:vf,skinning_vertex:xf,skinnormal_vertex:yf,specularmap_fragment:Mf,specularmap_pars_fragment:Sf,tonemapping_fragment:Ef,tonemapping_pars_fragment:Tf,transmission_fragment:bf,transmission_pars_fragment:wf,uv_pars_fragment:Af,uv_pars_vertex:Cf,uv_vertex:Rf,worldpos_vertex:Lf,background_vert:Pf,background_frag:Df,backgroundCube_vert:Uf,backgroundCube_frag:If,cube_vert:Nf,cube_frag:Ff,depth_vert:Of,depth_frag:Bf,distanceRGBA_vert:zf,distanceRGBA_frag:kf,equirect_vert:Hf,equirect_frag:Gf,linedashed_vert:Vf,linedashed_frag:Wf,meshbasic_vert:Xf,meshbasic_frag:qf,meshlambert_vert:jf,meshlambert_frag:Yf,meshmatcap_vert:$f,meshmatcap_frag:Kf,meshnormal_vert:Zf,meshnormal_frag:Jf,meshphong_vert:Qf,meshphong_frag:ed,meshphysical_vert:td,meshphysical_frag:nd,meshtoon_vert:id,meshtoon_frag:rd,points_vert:sd,points_frag:od,shadow_vert:ad,shadow_frag:ld,sprite_vert:cd,sprite_frag:ud},De={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},kn={basic:{uniforms:pn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:pn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new At(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:pn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:pn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:pn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new At(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:pn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:pn([De.points,De.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:pn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:pn([De.common,De.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:pn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:pn([De.sprite,De.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distanceRGBA:{uniforms:pn([De.common,De.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distanceRGBA_vert,fragmentShader:xt.distanceRGBA_frag},shadow:{uniforms:pn([De.lights,De.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};kn.physical={uniforms:pn([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const is={r:0,b:0,g:0},bi=new Vn,hd=new zt;function fd(i,e,t,n,r,o,l){const u=new At(0);let h=o===!0?0:1,d,p,g=null,v=0,x=null;function S(D){let w=D.isScene===!0?D.background:null;return w&&w.isTexture&&(w=(D.backgroundBlurriness>0?t:e).get(w)),w}function C(D){let w=!1;const B=S(D);B===null?_(u,h):B&&B.isColor&&(_(B,1),w=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,l):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(D,w){const B=S(w);B&&(B.isCubeTexture||B.mapping===_s)?(p===void 0&&(p=new Jt(new vi(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:cr(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(F,O,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),bi.copy(w.backgroundRotation),bi.x*=-1,bi.y*=-1,bi.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),p.material.uniforms.envMap.value=B,p.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(hd.makeRotationFromEuler(bi)),p.material.toneMapped=Pt.getTransfer(B.colorSpace)!==Ft,(g!==B||v!==B.version||x!==i.toneMapping)&&(p.material.needsUpdate=!0,g=B,v=B.version,x=i.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null)):B&&B.isTexture&&(d===void 0&&(d=new Jt(new Ir(2,2),new _i({name:"BackgroundMaterial",uniforms:cr(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=B,d.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,d.material.toneMapped=Pt.getTransfer(B.colorSpace)!==Ft,B.matrixAutoUpdate===!0&&B.updateMatrix(),d.material.uniforms.uvTransform.value.copy(B.matrix),(g!==B||v!==B.version||x!==i.toneMapping)&&(d.material.needsUpdate=!0,g=B,v=B.version,x=i.toneMapping),d.layers.enableAll(),D.unshift(d,d.geometry,d.material,0,0,null))}function _(D,w){D.getRGB(is,Hl(i)),n.buffers.color.setClear(is.r,is.g,is.b,w,l)}function U(){p!==void 0&&(p.geometry.dispose(),p.material.dispose()),d!==void 0&&(d.geometry.dispose(),d.material.dispose())}return{getClearColor:function(){return u},setClearColor:function(D,w=1){u.set(D),h=w,_(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(D){h=D,_(u,h)},render:C,addToRenderList:y,dispose:U}}function dd(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=v(null);let o=r,l=!1;function u(T,z,ee,Q,le){let de=!1;const X=g(Q,ee,z);o!==X&&(o=X,d(o.object)),de=x(T,Q,ee,le),de&&S(T,Q,ee,le),le!==null&&e.update(le,i.ELEMENT_ARRAY_BUFFER),(de||l)&&(l=!1,w(T,z,ee,Q),le!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(le).buffer))}function h(){return i.createVertexArray()}function d(T){return i.bindVertexArray(T)}function p(T){return i.deleteVertexArray(T)}function g(T,z,ee){const Q=ee.wireframe===!0;let le=n[T.id];le===void 0&&(le={},n[T.id]=le);let de=le[z.id];de===void 0&&(de={},le[z.id]=de);let X=de[Q];return X===void 0&&(X=v(h()),de[Q]=X),X}function v(T){const z=[],ee=[],Q=[];for(let le=0;le<t;le++)z[le]=0,ee[le]=0,Q[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:ee,attributeDivisors:Q,object:T,attributes:{},index:null}}function x(T,z,ee,Q){const le=o.attributes,de=z.attributes;let X=0;const ye=ee.getAttributes();for(const ce in ye)if(ye[ce].location>=0){const Ue=le[ce];let je=de[ce];if(je===void 0&&(ce==="instanceMatrix"&&T.instanceMatrix&&(je=T.instanceMatrix),ce==="instanceColor"&&T.instanceColor&&(je=T.instanceColor)),Ue===void 0||Ue.attribute!==je||je&&Ue.data!==je.data)return!0;X++}return o.attributesNum!==X||o.index!==Q}function S(T,z,ee,Q){const le={},de=z.attributes;let X=0;const ye=ee.getAttributes();for(const ce in ye)if(ye[ce].location>=0){let Ue=de[ce];Ue===void 0&&(ce==="instanceMatrix"&&T.instanceMatrix&&(Ue=T.instanceMatrix),ce==="instanceColor"&&T.instanceColor&&(Ue=T.instanceColor));const je={};je.attribute=Ue,Ue&&Ue.data&&(je.data=Ue.data),le[ce]=je,X++}o.attributes=le,o.attributesNum=X,o.index=Q}function C(){const T=o.newAttributes;for(let z=0,ee=T.length;z<ee;z++)T[z]=0}function y(T){_(T,0)}function _(T,z){const ee=o.newAttributes,Q=o.enabledAttributes,le=o.attributeDivisors;ee[T]=1,Q[T]===0&&(i.enableVertexAttribArray(T),Q[T]=1),le[T]!==z&&(i.vertexAttribDivisor(T,z),le[T]=z)}function U(){const T=o.newAttributes,z=o.enabledAttributes;for(let ee=0,Q=z.length;ee<Q;ee++)z[ee]!==T[ee]&&(i.disableVertexAttribArray(ee),z[ee]=0)}function D(T,z,ee,Q,le,de,X){X===!0?i.vertexAttribIPointer(T,z,ee,le,de):i.vertexAttribPointer(T,z,ee,Q,le,de)}function w(T,z,ee,Q){C();const le=Q.attributes,de=ee.getAttributes(),X=z.defaultAttributeValues;for(const ye in de){const ce=de[ye];if(ce.location>=0){let c=le[ye];if(c===void 0&&(ye==="instanceMatrix"&&T.instanceMatrix&&(c=T.instanceMatrix),ye==="instanceColor"&&T.instanceColor&&(c=T.instanceColor)),c!==void 0){const Ue=c.normalized,je=c.itemSize,dt=e.get(c);if(dt===void 0)continue;const Et=dt.buffer,pe=dt.type,Te=dt.bytesPerElement,$e=pe===i.INT||pe===i.UNSIGNED_INT||c.gpuType===ea;if(c.isInterleavedBufferAttribute){const Re=c.data,at=Re.stride,He=c.offset;if(Re.isInstancedInterleavedBuffer){for(let Je=0;Je<ce.locationSize;Je++)_(ce.location+Je,Re.meshPerAttribute);T.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let Je=0;Je<ce.locationSize;Je++)y(ce.location+Je);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let Je=0;Je<ce.locationSize;Je++)D(ce.location+Je,je/ce.locationSize,pe,Ue,at*Te,(He+je/ce.locationSize*Je)*Te,$e)}else{if(c.isInstancedBufferAttribute){for(let Re=0;Re<ce.locationSize;Re++)_(ce.location+Re,c.meshPerAttribute);T.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=c.meshPerAttribute*c.count)}else for(let Re=0;Re<ce.locationSize;Re++)y(ce.location+Re);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let Re=0;Re<ce.locationSize;Re++)D(ce.location+Re,je/ce.locationSize,pe,Ue,je*Te,je/ce.locationSize*Re*Te,$e)}}else if(X!==void 0){const Ue=X[ye];if(Ue!==void 0)switch(Ue.length){case 2:i.vertexAttrib2fv(ce.location,Ue);break;case 3:i.vertexAttrib3fv(ce.location,Ue);break;case 4:i.vertexAttrib4fv(ce.location,Ue);break;default:i.vertexAttrib1fv(ce.location,Ue)}}}}U()}function B(){G();for(const T in n){const z=n[T];for(const ee in z){const Q=z[ee];for(const le in Q)p(Q[le].object),delete Q[le];delete z[ee]}delete n[T]}}function F(T){if(n[T.id]===void 0)return;const z=n[T.id];for(const ee in z){const Q=z[ee];for(const le in Q)p(Q[le].object),delete Q[le];delete z[ee]}delete n[T.id]}function O(T){for(const z in n){const ee=n[z];if(ee[T.id]===void 0)continue;const Q=ee[T.id];for(const le in Q)p(Q[le].object),delete Q[le];delete ee[T.id]}}function G(){R(),l=!0,o!==r&&(o=r,d(o.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:u,reset:G,resetDefaultState:R,dispose:B,releaseStatesOfGeometry:F,releaseStatesOfProgram:O,initAttributes:C,enableAttribute:y,disableUnusedAttributes:U}}function pd(i,e,t){let n;function r(d){n=d}function o(d,p){i.drawArrays(n,d,p),t.update(p,n,1)}function l(d,p,g){g!==0&&(i.drawArraysInstanced(n,d,p,g),t.update(p,n,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,p,0,g);let x=0;for(let S=0;S<g;S++)x+=p[S];t.update(x,n,1)}function h(d,p,g,v){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let S=0;S<d.length;S++)l(d[S],p[S],v[S]);else{x.multiDrawArraysInstancedWEBGL(n,d,0,p,0,v,0,g);let S=0;for(let C=0;C<g;C++)S+=p[C]*v[C];t.update(S,n,1)}}this.setMode=r,this.render=o,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function md(i,e,t,n){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(O){return!(O!==Un&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(O){const G=O===Rr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==ii&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Qn&&!G)}function h(O){if(O==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const p=h(d);p!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const g=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),x=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),U=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),D=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),B=S>0,F=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:h,textureFormatReadable:l,textureTypeReadable:u,precision:d,logarithmicDepthBuffer:g,reverseDepthBuffer:v,maxTextures:x,maxVertexTextures:S,maxTextureSize:C,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:U,maxVaryings:D,maxFragmentUniforms:w,vertexTextures:B,maxSamples:F}}function gd(i){const e=this;let t=null,n=0,r=!1,o=!1;const l=new Ai,u=new vt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const x=g.length!==0||v||n!==0||r;return r=v,n=g.length,x},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(g,v){t=p(g,v,0)},this.setState=function(g,v,x){const S=g.clippingPlanes,C=g.clipIntersection,y=g.clipShadows,_=i.get(g);if(!r||S===null||S.length===0||o&&!y)o?p(null):d();else{const U=o?0:n,D=U*4;let w=_.clippingState||null;h.value=w,w=p(S,v,D,x);for(let B=0;B!==D;++B)w[B]=t[B];_.clippingState=w,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=U}};function d(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(g,v,x,S){const C=g!==null?g.length:0;let y=null;if(C!==0){if(y=h.value,S!==!0||y===null){const _=x+C*4,U=v.matrixWorldInverse;u.getNormalMatrix(U),(y===null||y.length<_)&&(y=new Float32Array(_));for(let D=0,w=x;D!==C;++D,w+=4)l.copy(g[D]).applyMatrix4(U,u),l.normal.toArray(y,w),y[w+3]=l.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}function _d(i){let e=new WeakMap;function t(l,u){return u===yo?l.mapping=rr:u===Mo&&(l.mapping=sr),l}function n(l){if(l&&l.isTexture){const u=l.mapping;if(u===yo||u===Mo)if(e.has(l)){const h=e.get(l).texture;return t(h,l.mapping)}else{const h=l.image;if(h&&h.height>0){const d=new gu(h.height);return d.fromEquirectangularTexture(i,l),e.set(l,d),l.addEventListener("dispose",r),t(d.texture,l.mapping)}else return null}}return l}function r(l){const u=l.target;u.removeEventListener("dispose",r);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}const Qi=4,Xa=[.125,.215,.35,.446,.526,.582],Li=20,to=new Au,qa=new At;let no=null,io=0,ro=0,so=!1;const Ci=(1+Math.sqrt(5))/2,Ki=1/Ci,ja=[new Z(-Ci,Ki,0),new Z(Ci,Ki,0),new Z(-Ki,0,Ci),new Z(Ki,0,Ci),new Z(0,Ci,-Ki),new Z(0,Ci,Ki),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)];class Ya{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){no=this._renderer.getRenderTarget(),io=this._renderer.getActiveCubeFace(),ro=this._renderer.getActiveMipmapLevel(),so=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Za(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ka(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(no,io,ro),this._renderer.xr.enabled=so,e.scissorTest=!1,rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rr||e.mapping===sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),no=this._renderer.getRenderTarget(),io=this._renderer.getActiveCubeFace(),ro=this._renderer.getActiveMipmapLevel(),so=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:Rr,format:Un,colorSpace:lr,depthBuffer:!1},r=$a(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$a(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vd(o)),this._blurMaterial=xd(o,e,t)}return r}_compileMaterial(e){const t=new Jt(this._lodPlanes[0],e);this._renderer.compile(t,to)}_sceneToCubeUV(e,t,n,r){const u=new fn(90,1,t,n),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,v=p.toneMapping;p.getClearColor(qa),p.toneMapping=pi,p.autoClear=!1;const x=new wr({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),S=new Jt(new vi,x);let C=!1;const y=e.background;y?y.isColor&&(x.color.copy(y),e.background=null,C=!0):(x.color.copy(qa),C=!0);for(let _=0;_<6;_++){const U=_%3;U===0?(u.up.set(0,h[_],0),u.lookAt(d[_],0,0)):U===1?(u.up.set(0,0,h[_]),u.lookAt(0,d[_],0)):(u.up.set(0,h[_],0),u.lookAt(0,0,d[_]));const D=this._cubeSize;rs(r,U*D,_>2?D:0,D,D),p.setRenderTarget(r),C&&p.render(S,u),p.render(e,u)}S.geometry.dispose(),S.material.dispose(),p.toneMapping=v,p.autoClear=g,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===rr||e.mapping===sr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Za()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ka());const o=r?this._cubemapMaterial:this._equirectMaterial,l=new Jt(this._lodPlanes[0],o),u=o.uniforms;u.envMap.value=e;const h=this._cubeSize;rs(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(l,to)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const l=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),u=ja[(r-o-1)%ja.length];this._blur(e,o-1,o,l,u)}t.autoClear=n}_blur(e,t,n,r,o){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,r,"latitudinal",o),this._halfBlur(l,e,n,n,r,"longitudinal",o)}_halfBlur(e,t,n,r,o,l,u){const h=this._renderer,d=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,g=new Jt(this._lodPlanes[r],d),v=d.uniforms,x=this._sizeLods[n]-1,S=isFinite(o)?Math.PI/(2*x):2*Math.PI/(2*Li-1),C=o/S,y=isFinite(o)?1+Math.floor(p*C):Li;y>Li&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Li}`);const _=[];let U=0;for(let O=0;O<Li;++O){const G=O/C,R=Math.exp(-G*G/2);_.push(R),O===0?U+=R:O<y&&(U+=2*R)}for(let O=0;O<_.length;O++)_[O]=_[O]/U;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=_,v.latitudinal.value=l==="latitudinal",u&&(v.poleAxis.value=u);const{_lodMax:D}=this;v.dTheta.value=S,v.mipInt.value=D-n;const w=this._sizeLods[r],B=3*w*(r>D-Qi?r-D+Qi:0),F=4*(this._cubeSize-w);rs(t,B,F,3*w,2*w),h.setRenderTarget(t),h.render(g,to)}}function vd(i){const e=[],t=[],n=[];let r=i;const o=i-Qi+1+Xa.length;for(let l=0;l<o;l++){const u=Math.pow(2,r);t.push(u);let h=1/u;l>i-Qi?h=Xa[l-i+Qi-1]:l===0&&(h=0),n.push(h);const d=1/(u-2),p=-d,g=1+d,v=[p,p,g,p,g,g,p,p,g,g,p,g],x=6,S=6,C=3,y=2,_=1,U=new Float32Array(C*S*x),D=new Float32Array(y*S*x),w=new Float32Array(_*S*x);for(let F=0;F<x;F++){const O=F%3*2/3-1,G=F>2?0:-1,R=[O,G,0,O+2/3,G,0,O+2/3,G+1,0,O,G,0,O+2/3,G+1,0,O,G+1,0];U.set(R,C*S*F),D.set(v,y*S*F);const T=[F,F,F,F,F,F];w.set(T,_*S*F)}const B=new gn;B.setAttribute("position",new Nn(U,C)),B.setAttribute("uv",new Nn(D,y)),B.setAttribute("faceIndex",new Nn(w,_)),e.push(B),r>Qi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function $a(i,e,t){const n=new Ii(i,e,t);return n.texture.mapping=_s,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function xd(i,e,t){const n=new Float32Array(Li),r=new Z(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:fa(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Ka(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fa(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Za(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function fa(){return`

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
	`}function yd(i){let e=new WeakMap,t=null;function n(u){if(u&&u.isTexture){const h=u.mapping,d=h===yo||h===Mo,p=h===rr||h===sr;if(d||p){let g=e.get(u);const v=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==v)return t===null&&(t=new Ya(i)),g=d?t.fromEquirectangular(u,g):t.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const x=u.image;return d&&x&&x.height>0||p&&x&&r(x)?(t===null&&(t=new Ya(i)),g=d?t.fromEquirectangular(u):t.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",o),g.texture):null}}}return u}function r(u){let h=0;const d=6;for(let p=0;p<d;p++)u[p]!==void 0&&h++;return h===d}function o(u){const h=u.target;h.removeEventListener("dispose",o);const d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function Md(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Zi("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Sd(i,e,t,n){const r={},o=new WeakMap;function l(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const S in v.attributes)e.remove(v.attributes[S]);v.removeEventListener("dispose",l),delete r[v.id];const x=o.get(v);x&&(e.remove(x),o.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function u(g,v){return r[v.id]===!0||(v.addEventListener("dispose",l),r[v.id]=!0,t.memory.geometries++),v}function h(g){const v=g.attributes;for(const x in v)e.update(v[x],i.ARRAY_BUFFER)}function d(g){const v=[],x=g.index,S=g.attributes.position;let C=0;if(x!==null){const U=x.array;C=x.version;for(let D=0,w=U.length;D<w;D+=3){const B=U[D+0],F=U[D+1],O=U[D+2];v.push(B,F,F,O,O,B)}}else if(S!==void 0){const U=S.array;C=S.version;for(let D=0,w=U.length/3-1;D<w;D+=3){const B=D+0,F=D+1,O=D+2;v.push(B,F,F,O,O,B)}}else return;const y=new(Ul(v)?kl:zl)(v,1);y.version=C;const _=o.get(g);_&&e.remove(_),o.set(g,y)}function p(g){const v=o.get(g);if(v){const x=g.index;x!==null&&v.version<x.version&&d(g)}else d(g);return o.get(g)}return{get:u,update:h,getWireframeAttribute:p}}function Ed(i,e,t){let n;function r(v){n=v}let o,l;function u(v){o=v.type,l=v.bytesPerElement}function h(v,x){i.drawElements(n,x,o,v*l),t.update(x,n,1)}function d(v,x,S){S!==0&&(i.drawElementsInstanced(n,x,o,v*l,S),t.update(x,n,S))}function p(v,x,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,x,0,o,v,0,S);let y=0;for(let _=0;_<S;_++)y+=x[_];t.update(y,n,1)}function g(v,x,S,C){if(S===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<v.length;_++)d(v[_]/l,x[_],C[_]);else{y.multiDrawElementsInstancedWEBGL(n,x,0,o,v,0,C,0,S);let _=0;for(let U=0;U<S;U++)_+=x[U]*C[U];t.update(_,n,1)}}this.setMode=r,this.setIndex=u,this.render=h,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=g}function Td(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,l,u){switch(t.calls++,l){case i.TRIANGLES:t.triangles+=u*(o/3);break;case i.LINES:t.lines+=u*(o/2);break;case i.LINE_STRIP:t.lines+=u*(o-1);break;case i.LINE_LOOP:t.lines+=u*o;break;case i.POINTS:t.points+=u*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function bd(i,e,t){const n=new WeakMap,r=new Ot;function o(l,u,h){const d=l.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let v=n.get(u);if(v===void 0||v.count!==g){let T=function(){G.dispose(),n.delete(u),u.removeEventListener("dispose",T)};var x=T;v!==void 0&&v.texture.dispose();const S=u.morphAttributes.position!==void 0,C=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,_=u.morphAttributes.position||[],U=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let w=0;S===!0&&(w=1),C===!0&&(w=2),y===!0&&(w=3);let B=u.attributes.position.count*w,F=1;B>e.maxTextureSize&&(F=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const O=new Float32Array(B*F*4*g),G=new Nl(O,B,F,g);G.type=Qn,G.needsUpdate=!0;const R=w*4;for(let z=0;z<g;z++){const ee=_[z],Q=U[z],le=D[z],de=B*F*4*z;for(let X=0;X<ee.count;X++){const ye=X*R;S===!0&&(r.fromBufferAttribute(ee,X),O[de+ye+0]=r.x,O[de+ye+1]=r.y,O[de+ye+2]=r.z,O[de+ye+3]=0),C===!0&&(r.fromBufferAttribute(Q,X),O[de+ye+4]=r.x,O[de+ye+5]=r.y,O[de+ye+6]=r.z,O[de+ye+7]=0),y===!0&&(r.fromBufferAttribute(le,X),O[de+ye+8]=r.x,O[de+ye+9]=r.y,O[de+ye+10]=r.z,O[de+ye+11]=le.itemSize===4?r.w:1)}}v={count:g,texture:G,size:new Ct(B,F)},n.set(u,v),u.addEventListener("dispose",T)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",l.morphTexture,t);else{let S=0;for(let y=0;y<d.length;y++)S+=d[y];const C=u.morphTargetsRelative?1:1-S;h.getUniforms().setValue(i,"morphTargetBaseInfluence",C),h.getUniforms().setValue(i,"morphTargetInfluences",d)}h.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}return{update:o}}function wd(i,e,t,n){let r=new WeakMap;function o(h){const d=n.render.frame,p=h.geometry,g=e.get(h,p);if(r.get(g)!==d&&(e.update(g),r.set(g,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),r.get(h)!==d&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,d))),h.isSkinnedMesh){const v=h.skeleton;r.get(v)!==d&&(v.update(),r.set(v,d))}return g}function l(){r=new WeakMap}function u(h){const d=h.target;d.removeEventListener("dispose",u),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:l}}const $l=new mn,Ja=new Xl(1,1),Kl=new Nl,Zl=new eu,Jl=new Vl,Qa=[],el=[],tl=new Float32Array(16),nl=new Float32Array(9),il=new Float32Array(4);function fr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let o=Qa[r];if(o===void 0&&(o=new Float32Array(r),Qa[r]=o),e!==0){n.toArray(o,0);for(let l=1,u=0;l!==e;++l)u+=t,i[l].toArray(o,u)}return o}function en(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function tn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ss(i,e){let t=el[e];t===void 0&&(t=new Int32Array(e),el[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ad(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Cd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2fv(this.addr,e),tn(t,e)}}function Rd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;i.uniform3fv(this.addr,e),tn(t,e)}}function Ld(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4fv(this.addr,e),tn(t,e)}}function Pd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;il.set(n),i.uniformMatrix2fv(this.addr,!1,il),tn(t,n)}}function Dd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;nl.set(n),i.uniformMatrix3fv(this.addr,!1,nl),tn(t,n)}}function Ud(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;tl.set(n),i.uniformMatrix4fv(this.addr,!1,tl),tn(t,n)}}function Id(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Nd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2iv(this.addr,e),tn(t,e)}}function Fd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;i.uniform3iv(this.addr,e),tn(t,e)}}function Od(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4iv(this.addr,e),tn(t,e)}}function Bd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function zd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2uiv(this.addr,e),tn(t,e)}}function kd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;i.uniform3uiv(this.addr,e),tn(t,e)}}function Hd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4uiv(this.addr,e),tn(t,e)}}function Gd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(Ja.compareFunction=Dl,o=Ja):o=$l,t.setTexture2D(e||o,r)}function Vd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Zl,r)}function Wd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Jl,r)}function Xd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Kl,r)}function qd(i){switch(i){case 5126:return Ad;case 35664:return Cd;case 35665:return Rd;case 35666:return Ld;case 35674:return Pd;case 35675:return Dd;case 35676:return Ud;case 5124:case 35670:return Id;case 35667:case 35671:return Nd;case 35668:case 35672:return Fd;case 35669:case 35673:return Od;case 5125:return Bd;case 36294:return zd;case 36295:return kd;case 36296:return Hd;case 35678:case 36198:case 36298:case 36306:case 35682:return Gd;case 35679:case 36299:case 36307:return Vd;case 35680:case 36300:case 36308:case 36293:return Wd;case 36289:case 36303:case 36311:case 36292:return Xd}}function jd(i,e){i.uniform1fv(this.addr,e)}function Yd(i,e){const t=fr(e,this.size,2);i.uniform2fv(this.addr,t)}function $d(i,e){const t=fr(e,this.size,3);i.uniform3fv(this.addr,t)}function Kd(i,e){const t=fr(e,this.size,4);i.uniform4fv(this.addr,t)}function Zd(i,e){const t=fr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Jd(i,e){const t=fr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Qd(i,e){const t=fr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ep(i,e){i.uniform1iv(this.addr,e)}function tp(i,e){i.uniform2iv(this.addr,e)}function np(i,e){i.uniform3iv(this.addr,e)}function ip(i,e){i.uniform4iv(this.addr,e)}function rp(i,e){i.uniform1uiv(this.addr,e)}function sp(i,e){i.uniform2uiv(this.addr,e)}function op(i,e){i.uniform3uiv(this.addr,e)}function ap(i,e){i.uniform4uiv(this.addr,e)}function lp(i,e,t){const n=this.cache,r=e.length,o=Ss(t,r);en(n,o)||(i.uniform1iv(this.addr,o),tn(n,o));for(let l=0;l!==r;++l)t.setTexture2D(e[l]||$l,o[l])}function cp(i,e,t){const n=this.cache,r=e.length,o=Ss(t,r);en(n,o)||(i.uniform1iv(this.addr,o),tn(n,o));for(let l=0;l!==r;++l)t.setTexture3D(e[l]||Zl,o[l])}function up(i,e,t){const n=this.cache,r=e.length,o=Ss(t,r);en(n,o)||(i.uniform1iv(this.addr,o),tn(n,o));for(let l=0;l!==r;++l)t.setTextureCube(e[l]||Jl,o[l])}function hp(i,e,t){const n=this.cache,r=e.length,o=Ss(t,r);en(n,o)||(i.uniform1iv(this.addr,o),tn(n,o));for(let l=0;l!==r;++l)t.setTexture2DArray(e[l]||Kl,o[l])}function fp(i){switch(i){case 5126:return jd;case 35664:return Yd;case 35665:return $d;case 35666:return Kd;case 35674:return Zd;case 35675:return Jd;case 35676:return Qd;case 5124:case 35670:return ep;case 35667:case 35671:return tp;case 35668:case 35672:return np;case 35669:case 35673:return ip;case 5125:return rp;case 36294:return sp;case 36295:return op;case 36296:return ap;case 35678:case 36198:case 36298:case 36306:case 35682:return lp;case 35679:case 36299:case 36307:return cp;case 35680:case 36300:case 36308:case 36293:return up;case 36289:case 36303:case 36311:case 36292:return hp}}class dp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=qd(t.type)}}class pp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fp(t.type)}}class mp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let o=0,l=r.length;o!==l;++o){const u=r[o];u.setValue(e,t[u.id],n)}}}const oo=/(\w+)(\])?(\[|\.)?/g;function rl(i,e){i.seq.push(e),i.map[e.id]=e}function gp(i,e,t){const n=i.name,r=n.length;for(oo.lastIndex=0;;){const o=oo.exec(n),l=oo.lastIndex;let u=o[1];const h=o[2]==="]",d=o[3];if(h&&(u=u|0),d===void 0||d==="["&&l+2===r){rl(t,d===void 0?new dp(u,i,e):new pp(u,i,e));break}else{let g=t.map[u];g===void 0&&(g=new mp(u),rl(t,g)),t=g}}}class ds{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),l=e.getUniformLocation(t,o.name);gp(o,l,this)}}setValue(e,t,n,r){const o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,l=t.length;o!==l;++o){const u=t[o],h=n[u.id];h.needsUpdate!==!1&&u.setValue(e,h.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,o=e.length;r!==o;++r){const l=e[r];l.id in t&&n.push(l)}return n}}function sl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const _p=37297;let vp=0;function xp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let l=r;l<o;l++){const u=l+1;n.push(`${u===e?">":" "} ${u}: ${t[l]}`)}return n.join(`
`)}const ol=new vt;function yp(i){Pt._getMatrix(ol,Pt.workingColorSpace,i);const e=`mat3( ${ol.elements.map(t=>t.toFixed(4))} )`;switch(Pt.getTransfer(i)){case ms:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function al(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const l=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+xp(i.getShaderSource(e),l)}else return r}function Mp(i,e){const t=yp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Sp(i,e){let t;switch(e){case wc:t="Linear";break;case Ac:t="Reinhard";break;case Cc:t="Cineon";break;case Rc:t="ACESFilmic";break;case Pc:t="AgX";break;case Dc:t="Neutral";break;case Lc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ss=new Z;function Ep(){Pt.getLuminanceCoefficients(ss);const i=ss.x.toFixed(4),e=ss.y.toFixed(4),t=ss.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Er).join(`
`)}function bp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function wp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const o=i.getActiveAttrib(e,r),l=o.name;let u=1;o.type===i.FLOAT_MAT2&&(u=2),o.type===i.FLOAT_MAT3&&(u=3),o.type===i.FLOAT_MAT4&&(u=4),t[l]={type:o.type,location:i.getAttribLocation(e,l),locationSize:u}}return t}function Er(i){return i!==""}function ll(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ap=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zo(i){return i.replace(Ap,Rp)}const Cp=new Map;function Rp(i,e){let t=xt[e];if(t===void 0){const n=Cp.get(e);if(n!==void 0)t=xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Zo(t)}const Lp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ul(i){return i.replace(Lp,Pp)}function Pp(i,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function hl(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Dp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===xl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===sc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function Up(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case rr:case sr:e="ENVMAP_TYPE_CUBE";break;case _s:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ip(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case sr:e="ENVMAP_MODE_REFRACTION";break}return e}function Np(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Qo:e="ENVMAP_BLENDING_MULTIPLY";break;case Tc:e="ENVMAP_BLENDING_MIX";break;case bc:e="ENVMAP_BLENDING_ADD";break}return e}function Fp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Op(i,e,t,n){const r=i.getContext(),o=t.defines;let l=t.vertexShader,u=t.fragmentShader;const h=Dp(t),d=Up(t),p=Ip(t),g=Np(t),v=Fp(t),x=Tp(t),S=bp(o),C=r.createProgram();let y,_,U=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Er).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Er).join(`
`),_.length>0&&(_+=`
`)):(y=[hl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Er).join(`
`),_=[hl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?xt.tonemapping_pars_fragment:"",t.toneMapping!==pi?Sp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,Mp("linearToOutputTexel",t.outputColorSpace),Ep(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Er).join(`
`)),l=Zo(l),l=ll(l,t),l=cl(l,t),u=Zo(u),u=ll(u,t),u=cl(u,t),l=ul(l),u=ul(u),t.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===ya?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ya?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const D=U+y+l,w=U+_+u,B=sl(r,r.VERTEX_SHADER,D),F=sl(r,r.FRAGMENT_SHADER,w);r.attachShader(C,B),r.attachShader(C,F),t.index0AttributeName!==void 0?r.bindAttribLocation(C,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(C,0,"position"),r.linkProgram(C);function O(z){if(i.debug.checkShaderErrors){const ee=r.getProgramInfoLog(C).trim(),Q=r.getShaderInfoLog(B).trim(),le=r.getShaderInfoLog(F).trim();let de=!0,X=!0;if(r.getProgramParameter(C,r.LINK_STATUS)===!1)if(de=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,C,B,F);else{const ye=al(r,B,"vertex"),ce=al(r,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(C,r.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+ee+`
`+ye+`
`+ce)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(Q===""||le==="")&&(X=!1);X&&(z.diagnostics={runnable:de,programLog:ee,vertexShader:{log:Q,prefix:y},fragmentShader:{log:le,prefix:_}})}r.deleteShader(B),r.deleteShader(F),G=new ds(r,C),R=wp(r,C)}let G;this.getUniforms=function(){return G===void 0&&O(this),G};let R;this.getAttributes=function(){return R===void 0&&O(this),R};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(C,_p)),T},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vp++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=B,this.fragmentShader=F,this}let Bp=0;class zp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(o)===!1&&(l.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new kp(e),t.set(e,n)),n}}class kp{constructor(e){this.id=Bp++,this.code=e,this.usedTimes=0}}function Hp(i,e,t,n,r,o,l){const u=new Ol,h=new zp,d=new Set,p=[],g=r.logarithmicDepthBuffer,v=r.vertexTextures;let x=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(R){return d.add(R),R===0?"uv":`uv${R}`}function y(R,T,z,ee,Q){const le=ee.fog,de=Q.geometry,X=R.isMeshStandardMaterial?ee.environment:null,ye=(R.isMeshStandardMaterial?t:e).get(R.envMap||X),ce=ye&&ye.mapping===_s?ye.image.height:null,c=S[R.type];R.precision!==null&&(x=r.getMaxPrecision(R.precision),x!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",x,"instead."));const Ue=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,je=Ue!==void 0?Ue.length:0;let dt=0;de.morphAttributes.position!==void 0&&(dt=1),de.morphAttributes.normal!==void 0&&(dt=2),de.morphAttributes.color!==void 0&&(dt=3);let Et,pe,Te,$e;if(c){const Dt=kn[c];Et=Dt.vertexShader,pe=Dt.fragmentShader}else Et=R.vertexShader,pe=R.fragmentShader,h.update(R),Te=h.getVertexShaderID(R),$e=h.getFragmentShaderID(R);const Re=i.getRenderTarget(),at=i.state.buffers.depth.getReversed(),He=Q.isInstancedMesh===!0,Je=Q.isBatchedMesh===!0,gt=!!R.map,ct=!!R.matcap,kt=!!ye,W=!!R.aoMap,qt=!!R.lightMap,pt=!!R.bumpMap,yt=!!R.normalMap,Qe=!!R.displacementMap,Bt=!!R.emissiveMap,it=!!R.metalnessMap,N=!!R.roughnessMap,b=R.anisotropy>0,ne=R.clearcoat>0,_e=R.dispersion>0,Me=R.iridescence>0,ge=R.sheen>0,et=R.transmission>0,Ne=b&&!!R.anisotropyMap,Ve=ne&&!!R.clearcoatMap,Tt=ne&&!!R.clearcoatNormalMap,we=ne&&!!R.clearcoatRoughnessMap,We=Me&&!!R.iridescenceMap,lt=Me&&!!R.iridescenceThicknessMap,ut=ge&&!!R.sheenColorMap,Xe=ge&&!!R.sheenRoughnessMap,Mt=!!R.specularMap,mt=!!R.specularColorMap,Nt=!!R.specularIntensityMap,Y=et&&!!R.transmissionMap,Ie=et&&!!R.thicknessMap,ue=!!R.gradientMap,ve=!!R.alphaMap,Fe=R.alphaTest>0,Oe=!!R.alphaHash,rt=!!R.extensions;let Ht=pi;R.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(Ht=i.toneMapping);const $t={shaderID:c,shaderType:R.type,shaderName:R.name,vertexShader:Et,fragmentShader:pe,defines:R.defines,customVertexShaderID:Te,customFragmentShaderID:$e,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:x,batching:Je,batchingColor:Je&&Q._colorsTexture!==null,instancing:He,instancingColor:He&&Q.instanceColor!==null,instancingMorph:He&&Q.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Re===null?i.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:lr,alphaToCoverage:!!R.alphaToCoverage,map:gt,matcap:ct,envMap:kt,envMapMode:kt&&ye.mapping,envMapCubeUVHeight:ce,aoMap:W,lightMap:qt,bumpMap:pt,normalMap:yt,displacementMap:v&&Qe,emissiveMap:Bt,normalMapObjectSpace:yt&&R.normalMapType===Fc,normalMapTangentSpace:yt&&R.normalMapType===Pl,metalnessMap:it,roughnessMap:N,anisotropy:b,anisotropyMap:Ne,clearcoat:ne,clearcoatMap:Ve,clearcoatNormalMap:Tt,clearcoatRoughnessMap:we,dispersion:_e,iridescence:Me,iridescenceMap:We,iridescenceThicknessMap:lt,sheen:ge,sheenColorMap:ut,sheenRoughnessMap:Xe,specularMap:Mt,specularColorMap:mt,specularIntensityMap:Nt,transmission:et,transmissionMap:Y,thicknessMap:Ie,gradientMap:ue,opaque:R.transparent===!1&&R.blending===er&&R.alphaToCoverage===!1,alphaMap:ve,alphaTest:Fe,alphaHash:Oe,combine:R.combine,mapUv:gt&&C(R.map.channel),aoMapUv:W&&C(R.aoMap.channel),lightMapUv:qt&&C(R.lightMap.channel),bumpMapUv:pt&&C(R.bumpMap.channel),normalMapUv:yt&&C(R.normalMap.channel),displacementMapUv:Qe&&C(R.displacementMap.channel),emissiveMapUv:Bt&&C(R.emissiveMap.channel),metalnessMapUv:it&&C(R.metalnessMap.channel),roughnessMapUv:N&&C(R.roughnessMap.channel),anisotropyMapUv:Ne&&C(R.anisotropyMap.channel),clearcoatMapUv:Ve&&C(R.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&C(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&C(R.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&C(R.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&C(R.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&C(R.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&C(R.sheenRoughnessMap.channel),specularMapUv:Mt&&C(R.specularMap.channel),specularColorMapUv:mt&&C(R.specularColorMap.channel),specularIntensityMapUv:Nt&&C(R.specularIntensityMap.channel),transmissionMapUv:Y&&C(R.transmissionMap.channel),thicknessMapUv:Ie&&C(R.thicknessMap.channel),alphaMapUv:ve&&C(R.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(yt||b),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!de.attributes.uv&&(gt||ve),fog:!!le,useFog:R.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:at,skinning:Q.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:je,morphTextureStride:dt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:R.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ht,decodeVideoTexture:gt&&R.map.isVideoTexture===!0&&Pt.getTransfer(R.map.colorSpace)===Ft,decodeVideoTextureEmissive:Bt&&R.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(R.emissiveMap.colorSpace)===Ft,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Jn,flipSided:R.side===vn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:rt&&R.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&R.extensions.multiDraw===!0||Je)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return $t.vertexUv1s=d.has(1),$t.vertexUv2s=d.has(2),$t.vertexUv3s=d.has(3),d.clear(),$t}function _(R){const T=[];if(R.shaderID?T.push(R.shaderID):(T.push(R.customVertexShaderID),T.push(R.customFragmentShaderID)),R.defines!==void 0)for(const z in R.defines)T.push(z),T.push(R.defines[z]);return R.isRawShaderMaterial===!1&&(U(T,R),D(T,R),T.push(i.outputColorSpace)),T.push(R.customProgramCacheKey),T.join()}function U(R,T){R.push(T.precision),R.push(T.outputColorSpace),R.push(T.envMapMode),R.push(T.envMapCubeUVHeight),R.push(T.mapUv),R.push(T.alphaMapUv),R.push(T.lightMapUv),R.push(T.aoMapUv),R.push(T.bumpMapUv),R.push(T.normalMapUv),R.push(T.displacementMapUv),R.push(T.emissiveMapUv),R.push(T.metalnessMapUv),R.push(T.roughnessMapUv),R.push(T.anisotropyMapUv),R.push(T.clearcoatMapUv),R.push(T.clearcoatNormalMapUv),R.push(T.clearcoatRoughnessMapUv),R.push(T.iridescenceMapUv),R.push(T.iridescenceThicknessMapUv),R.push(T.sheenColorMapUv),R.push(T.sheenRoughnessMapUv),R.push(T.specularMapUv),R.push(T.specularColorMapUv),R.push(T.specularIntensityMapUv),R.push(T.transmissionMapUv),R.push(T.thicknessMapUv),R.push(T.combine),R.push(T.fogExp2),R.push(T.sizeAttenuation),R.push(T.morphTargetsCount),R.push(T.morphAttributeCount),R.push(T.numDirLights),R.push(T.numPointLights),R.push(T.numSpotLights),R.push(T.numSpotLightMaps),R.push(T.numHemiLights),R.push(T.numRectAreaLights),R.push(T.numDirLightShadows),R.push(T.numPointLightShadows),R.push(T.numSpotLightShadows),R.push(T.numSpotLightShadowsWithMaps),R.push(T.numLightProbes),R.push(T.shadowMapType),R.push(T.toneMapping),R.push(T.numClippingPlanes),R.push(T.numClipIntersection),R.push(T.depthPacking)}function D(R,T){u.disableAll(),T.supportsVertexTextures&&u.enable(0),T.instancing&&u.enable(1),T.instancingColor&&u.enable(2),T.instancingMorph&&u.enable(3),T.matcap&&u.enable(4),T.envMap&&u.enable(5),T.normalMapObjectSpace&&u.enable(6),T.normalMapTangentSpace&&u.enable(7),T.clearcoat&&u.enable(8),T.iridescence&&u.enable(9),T.alphaTest&&u.enable(10),T.vertexColors&&u.enable(11),T.vertexAlphas&&u.enable(12),T.vertexUv1s&&u.enable(13),T.vertexUv2s&&u.enable(14),T.vertexUv3s&&u.enable(15),T.vertexTangents&&u.enable(16),T.anisotropy&&u.enable(17),T.alphaHash&&u.enable(18),T.batching&&u.enable(19),T.dispersion&&u.enable(20),T.batchingColor&&u.enable(21),R.push(u.mask),u.disableAll(),T.fog&&u.enable(0),T.useFog&&u.enable(1),T.flatShading&&u.enable(2),T.logarithmicDepthBuffer&&u.enable(3),T.reverseDepthBuffer&&u.enable(4),T.skinning&&u.enable(5),T.morphTargets&&u.enable(6),T.morphNormals&&u.enable(7),T.morphColors&&u.enable(8),T.premultipliedAlpha&&u.enable(9),T.shadowMapEnabled&&u.enable(10),T.doubleSided&&u.enable(11),T.flipSided&&u.enable(12),T.useDepthPacking&&u.enable(13),T.dithering&&u.enable(14),T.transmission&&u.enable(15),T.sheen&&u.enable(16),T.opaque&&u.enable(17),T.pointsUvs&&u.enable(18),T.decodeVideoTexture&&u.enable(19),T.decodeVideoTextureEmissive&&u.enable(20),T.alphaToCoverage&&u.enable(21),R.push(u.mask)}function w(R){const T=S[R.type];let z;if(T){const ee=kn[T];z=fu.clone(ee.uniforms)}else z=R.uniforms;return z}function B(R,T){let z;for(let ee=0,Q=p.length;ee<Q;ee++){const le=p[ee];if(le.cacheKey===T){z=le,++z.usedTimes;break}}return z===void 0&&(z=new Op(i,T,R,o),p.push(z)),z}function F(R){if(--R.usedTimes===0){const T=p.indexOf(R);p[T]=p[p.length-1],p.pop(),R.destroy()}}function O(R){h.remove(R)}function G(){h.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:w,acquireProgram:B,releaseProgram:F,releaseShaderCache:O,programs:p,dispose:G}}function Gp(){let i=new WeakMap;function e(l){return i.has(l)}function t(l){let u=i.get(l);return u===void 0&&(u={},i.set(l,u)),u}function n(l){i.delete(l)}function r(l,u,h){i.get(l)[u]=h}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:o}}function Vp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function fl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function dl(){const i=[];let e=0;const t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function l(g,v,x,S,C,y){let _=i[e];return _===void 0?(_={id:g.id,object:g,geometry:v,material:x,groupOrder:S,renderOrder:g.renderOrder,z:C,group:y},i[e]=_):(_.id=g.id,_.object=g,_.geometry=v,_.material=x,_.groupOrder=S,_.renderOrder=g.renderOrder,_.z=C,_.group=y),e++,_}function u(g,v,x,S,C,y){const _=l(g,v,x,S,C,y);x.transmission>0?n.push(_):x.transparent===!0?r.push(_):t.push(_)}function h(g,v,x,S,C,y){const _=l(g,v,x,S,C,y);x.transmission>0?n.unshift(_):x.transparent===!0?r.unshift(_):t.unshift(_)}function d(g,v){t.length>1&&t.sort(g||Vp),n.length>1&&n.sort(v||fl),r.length>1&&r.sort(v||fl)}function p(){for(let g=e,v=i.length;g<v;g++){const x=i[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:u,unshift:h,finish:p,sort:d}}function Wp(){let i=new WeakMap;function e(n,r){const o=i.get(n);let l;return o===void 0?(l=new dl,i.set(n,[l])):r>=o.length?(l=new dl,o.push(l)):l=o[r],l}function t(){i=new WeakMap}return{get:e,dispose:t}}function Xp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new At};break;case"SpotLight":t={position:new Z,direction:new Z,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new At,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new At,groundColor:new At};break;case"RectAreaLight":t={color:new At,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return i[e.id]=t,t}}}function qp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let jp=0;function Yp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function $p(i){const e=new Xp,t=qp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new Z);const r=new Z,o=new zt,l=new zt;function u(d){let p=0,g=0,v=0;for(let R=0;R<9;R++)n.probe[R].set(0,0,0);let x=0,S=0,C=0,y=0,_=0,U=0,D=0,w=0,B=0,F=0,O=0;d.sort(Yp);for(let R=0,T=d.length;R<T;R++){const z=d[R],ee=z.color,Q=z.intensity,le=z.distance,de=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)p+=ee.r*Q,g+=ee.g*Q,v+=ee.b*Q;else if(z.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(z.sh.coefficients[X],Q);O++}else if(z.isDirectionalLight){const X=e.get(z);if(X.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const ye=z.shadow,ce=t.get(z);ce.shadowIntensity=ye.intensity,ce.shadowBias=ye.bias,ce.shadowNormalBias=ye.normalBias,ce.shadowRadius=ye.radius,ce.shadowMapSize=ye.mapSize,n.directionalShadow[x]=ce,n.directionalShadowMap[x]=de,n.directionalShadowMatrix[x]=z.shadow.matrix,U++}n.directional[x]=X,x++}else if(z.isSpotLight){const X=e.get(z);X.position.setFromMatrixPosition(z.matrixWorld),X.color.copy(ee).multiplyScalar(Q),X.distance=le,X.coneCos=Math.cos(z.angle),X.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),X.decay=z.decay,n.spot[C]=X;const ye=z.shadow;if(z.map&&(n.spotLightMap[B]=z.map,B++,ye.updateMatrices(z),z.castShadow&&F++),n.spotLightMatrix[C]=ye.matrix,z.castShadow){const ce=t.get(z);ce.shadowIntensity=ye.intensity,ce.shadowBias=ye.bias,ce.shadowNormalBias=ye.normalBias,ce.shadowRadius=ye.radius,ce.shadowMapSize=ye.mapSize,n.spotShadow[C]=ce,n.spotShadowMap[C]=de,w++}C++}else if(z.isRectAreaLight){const X=e.get(z);X.color.copy(ee).multiplyScalar(Q),X.halfWidth.set(z.width*.5,0,0),X.halfHeight.set(0,z.height*.5,0),n.rectArea[y]=X,y++}else if(z.isPointLight){const X=e.get(z);if(X.color.copy(z.color).multiplyScalar(z.intensity),X.distance=z.distance,X.decay=z.decay,z.castShadow){const ye=z.shadow,ce=t.get(z);ce.shadowIntensity=ye.intensity,ce.shadowBias=ye.bias,ce.shadowNormalBias=ye.normalBias,ce.shadowRadius=ye.radius,ce.shadowMapSize=ye.mapSize,ce.shadowCameraNear=ye.camera.near,ce.shadowCameraFar=ye.camera.far,n.pointShadow[S]=ce,n.pointShadowMap[S]=de,n.pointShadowMatrix[S]=z.shadow.matrix,D++}n.point[S]=X,S++}else if(z.isHemisphereLight){const X=e.get(z);X.skyColor.copy(z.color).multiplyScalar(Q),X.groundColor.copy(z.groundColor).multiplyScalar(Q),n.hemi[_]=X,_++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=De.LTC_FLOAT_1,n.rectAreaLTC2=De.LTC_FLOAT_2):(n.rectAreaLTC1=De.LTC_HALF_1,n.rectAreaLTC2=De.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=g,n.ambient[2]=v;const G=n.hash;(G.directionalLength!==x||G.pointLength!==S||G.spotLength!==C||G.rectAreaLength!==y||G.hemiLength!==_||G.numDirectionalShadows!==U||G.numPointShadows!==D||G.numSpotShadows!==w||G.numSpotMaps!==B||G.numLightProbes!==O)&&(n.directional.length=x,n.spot.length=C,n.rectArea.length=y,n.point.length=S,n.hemi.length=_,n.directionalShadow.length=U,n.directionalShadowMap.length=U,n.pointShadow.length=D,n.pointShadowMap.length=D,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=U,n.pointShadowMatrix.length=D,n.spotLightMatrix.length=w+B-F,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=O,G.directionalLength=x,G.pointLength=S,G.spotLength=C,G.rectAreaLength=y,G.hemiLength=_,G.numDirectionalShadows=U,G.numPointShadows=D,G.numSpotShadows=w,G.numSpotMaps=B,G.numLightProbes=O,n.version=jp++)}function h(d,p){let g=0,v=0,x=0,S=0,C=0;const y=p.matrixWorldInverse;for(let _=0,U=d.length;_<U;_++){const D=d[_];if(D.isDirectionalLight){const w=n.directional[g];w.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(y),g++}else if(D.isSpotLight){const w=n.spot[x];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(y),w.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(y),x++}else if(D.isRectAreaLight){const w=n.rectArea[S];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(y),l.identity(),o.copy(D.matrixWorld),o.premultiply(y),l.extractRotation(o),w.halfWidth.set(D.width*.5,0,0),w.halfHeight.set(0,D.height*.5,0),w.halfWidth.applyMatrix4(l),w.halfHeight.applyMatrix4(l),S++}else if(D.isPointLight){const w=n.point[v];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(y),v++}else if(D.isHemisphereLight){const w=n.hemi[C];w.direction.setFromMatrixPosition(D.matrixWorld),w.direction.transformDirection(y),C++}}}return{setup:u,setupView:h,state:n}}function pl(i){const e=new $p(i),t=[],n=[];function r(p){d.camera=p,t.length=0,n.length=0}function o(p){t.push(p)}function l(p){n.push(p)}function u(){e.setup(t)}function h(p){e.setupView(t,p)}const d={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:d,setupLights:u,setupLightsView:h,pushLight:o,pushShadow:l}}function Kp(i){let e=new WeakMap;function t(r,o=0){const l=e.get(r);let u;return l===void 0?(u=new pl(i),e.set(r,[u])):o>=l.length?(u=new pl(i),l.push(u)):u=l[o],u}function n(){e=new WeakMap}return{get:t,dispose:n}}const Zp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jp=`uniform sampler2D shadow_pass;
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
}`;function Qp(i,e,t){let n=new oa;const r=new Ct,o=new Ct,l=new Ot,u=new xu({depthPacking:Nc}),h=new yu,d={},p=t.maxTextureSize,g={[gi]:vn,[vn]:gi,[Jn]:Jn},v=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:Zp,fragmentShader:Jp}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const S=new gn;S.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Jt(S,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xl;let _=this.type;this.render=function(F,O,G){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const R=i.getRenderTarget(),T=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),ee=i.state;ee.setBlending(di),ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const Q=_!==Zn&&this.type===Zn,le=_===Zn&&this.type!==Zn;for(let de=0,X=F.length;de<X;de++){const ye=F[de],ce=ye.shadow;if(ce===void 0){console.warn("THREE.WebGLShadowMap:",ye,"has no shadow.");continue}if(ce.autoUpdate===!1&&ce.needsUpdate===!1)continue;r.copy(ce.mapSize);const c=ce.getFrameExtents();if(r.multiply(c),o.copy(ce.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(o.x=Math.floor(p/c.x),r.x=o.x*c.x,ce.mapSize.x=o.x),r.y>p&&(o.y=Math.floor(p/c.y),r.y=o.y*c.y,ce.mapSize.y=o.y)),ce.map===null||Q===!0||le===!0){const je=this.type!==Zn?{minFilter:In,magFilter:In}:{};ce.map!==null&&ce.map.dispose(),ce.map=new Ii(r.x,r.y,je),ce.map.texture.name=ye.name+".shadowMap",ce.camera.updateProjectionMatrix()}i.setRenderTarget(ce.map),i.clear();const Ue=ce.getViewportCount();for(let je=0;je<Ue;je++){const dt=ce.getViewport(je);l.set(o.x*dt.x,o.y*dt.y,o.x*dt.z,o.y*dt.w),ee.viewport(l),ce.updateMatrices(ye,je),n=ce.getFrustum(),w(O,G,ce.camera,ye,this.type)}ce.isPointLightShadow!==!0&&this.type===Zn&&U(ce,G),ce.needsUpdate=!1}_=this.type,y.needsUpdate=!1,i.setRenderTarget(R,T,z)};function U(F,O){const G=e.update(C);v.defines.VSM_SAMPLES!==F.blurSamples&&(v.defines.VSM_SAMPLES=F.blurSamples,x.defines.VSM_SAMPLES=F.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Ii(r.x,r.y)),v.uniforms.shadow_pass.value=F.map.texture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,i.setRenderTarget(F.mapPass),i.clear(),i.renderBufferDirect(O,null,G,v,C,null),x.uniforms.shadow_pass.value=F.mapPass.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,i.setRenderTarget(F.map),i.clear(),i.renderBufferDirect(O,null,G,x,C,null)}function D(F,O,G,R){let T=null;const z=G.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(z!==void 0)T=z;else if(T=G.isPointLight===!0?h:u,i.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const ee=T.uuid,Q=O.uuid;let le=d[ee];le===void 0&&(le={},d[ee]=le);let de=le[Q];de===void 0&&(de=T.clone(),le[Q]=de,O.addEventListener("dispose",B)),T=de}if(T.visible=O.visible,T.wireframe=O.wireframe,R===Zn?T.side=O.shadowSide!==null?O.shadowSide:O.side:T.side=O.shadowSide!==null?O.shadowSide:g[O.side],T.alphaMap=O.alphaMap,T.alphaTest=O.alphaTest,T.map=O.map,T.clipShadows=O.clipShadows,T.clippingPlanes=O.clippingPlanes,T.clipIntersection=O.clipIntersection,T.displacementMap=O.displacementMap,T.displacementScale=O.displacementScale,T.displacementBias=O.displacementBias,T.wireframeLinewidth=O.wireframeLinewidth,T.linewidth=O.linewidth,G.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const ee=i.properties.get(T);ee.light=G}return T}function w(F,O,G,R,T){if(F.visible===!1)return;if(F.layers.test(O.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&T===Zn)&&(!F.frustumCulled||n.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,F.matrixWorld);const Q=e.update(F),le=F.material;if(Array.isArray(le)){const de=Q.groups;for(let X=0,ye=de.length;X<ye;X++){const ce=de[X],c=le[ce.materialIndex];if(c&&c.visible){const Ue=D(F,c,R,T);F.onBeforeShadow(i,F,O,G,Q,Ue,ce),i.renderBufferDirect(G,null,Q,Ue,F,ce),F.onAfterShadow(i,F,O,G,Q,Ue,ce)}}}else if(le.visible){const de=D(F,le,R,T);F.onBeforeShadow(i,F,O,G,Q,de,null),i.renderBufferDirect(G,null,Q,de,F,null),F.onAfterShadow(i,F,O,G,Q,de,null)}}const ee=F.children;for(let Q=0,le=ee.length;Q<le;Q++)w(ee[Q],O,G,R,T)}function B(F){F.target.removeEventListener("dispose",B);for(const G in d){const R=d[G],T=F.target.uuid;T in R&&(R[T].dispose(),delete R[T])}}}const em={[fo]:po,[mo]:vo,[go]:xo,[ir]:_o,[po]:fo,[vo]:mo,[xo]:go,[_o]:ir};function tm(i,e){function t(){let Y=!1;const Ie=new Ot;let ue=null;const ve=new Ot(0,0,0,0);return{setMask:function(Fe){ue!==Fe&&!Y&&(i.colorMask(Fe,Fe,Fe,Fe),ue=Fe)},setLocked:function(Fe){Y=Fe},setClear:function(Fe,Oe,rt,Ht,$t){$t===!0&&(Fe*=Ht,Oe*=Ht,rt*=Ht),Ie.set(Fe,Oe,rt,Ht),ve.equals(Ie)===!1&&(i.clearColor(Fe,Oe,rt,Ht),ve.copy(Ie))},reset:function(){Y=!1,ue=null,ve.set(-1,0,0,0)}}}function n(){let Y=!1,Ie=!1,ue=null,ve=null,Fe=null;return{setReversed:function(Oe){if(Ie!==Oe){const rt=e.get("EXT_clip_control");Ie?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);const Ht=Fe;Fe=null,this.setClear(Ht)}Ie=Oe},getReversed:function(){return Ie},setTest:function(Oe){Oe?Re(i.DEPTH_TEST):at(i.DEPTH_TEST)},setMask:function(Oe){ue!==Oe&&!Y&&(i.depthMask(Oe),ue=Oe)},setFunc:function(Oe){if(Ie&&(Oe=em[Oe]),ve!==Oe){switch(Oe){case fo:i.depthFunc(i.NEVER);break;case po:i.depthFunc(i.ALWAYS);break;case mo:i.depthFunc(i.LESS);break;case ir:i.depthFunc(i.LEQUAL);break;case go:i.depthFunc(i.EQUAL);break;case _o:i.depthFunc(i.GEQUAL);break;case vo:i.depthFunc(i.GREATER);break;case xo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=Oe}},setLocked:function(Oe){Y=Oe},setClear:function(Oe){Fe!==Oe&&(Ie&&(Oe=1-Oe),i.clearDepth(Oe),Fe=Oe)},reset:function(){Y=!1,ue=null,ve=null,Fe=null,Ie=!1}}}function r(){let Y=!1,Ie=null,ue=null,ve=null,Fe=null,Oe=null,rt=null,Ht=null,$t=null;return{setTest:function(Dt){Y||(Dt?Re(i.STENCIL_TEST):at(i.STENCIL_TEST))},setMask:function(Dt){Ie!==Dt&&!Y&&(i.stencilMask(Dt),Ie=Dt)},setFunc:function(Dt,xn,Cn){(ue!==Dt||ve!==xn||Fe!==Cn)&&(i.stencilFunc(Dt,xn,Cn),ue=Dt,ve=xn,Fe=Cn)},setOp:function(Dt,xn,Cn){(Oe!==Dt||rt!==xn||Ht!==Cn)&&(i.stencilOp(Dt,xn,Cn),Oe=Dt,rt=xn,Ht=Cn)},setLocked:function(Dt){Y=Dt},setClear:function(Dt){$t!==Dt&&(i.clearStencil(Dt),$t=Dt)},reset:function(){Y=!1,Ie=null,ue=null,ve=null,Fe=null,Oe=null,rt=null,Ht=null,$t=null}}}const o=new t,l=new n,u=new r,h=new WeakMap,d=new WeakMap;let p={},g={},v=new WeakMap,x=[],S=null,C=!1,y=null,_=null,U=null,D=null,w=null,B=null,F=null,O=new At(0,0,0),G=0,R=!1,T=null,z=null,ee=null,Q=null,le=null;const de=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ye=0;const ce=i.getParameter(i.VERSION);ce.indexOf("WebGL")!==-1?(ye=parseFloat(/^WebGL (\d)/.exec(ce)[1]),X=ye>=1):ce.indexOf("OpenGL ES")!==-1&&(ye=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),X=ye>=2);let c=null,Ue={};const je=i.getParameter(i.SCISSOR_BOX),dt=i.getParameter(i.VIEWPORT),Et=new Ot().fromArray(je),pe=new Ot().fromArray(dt);function Te(Y,Ie,ue,ve){const Fe=new Uint8Array(4),Oe=i.createTexture();i.bindTexture(Y,Oe),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let rt=0;rt<ue;rt++)Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?i.texImage3D(Ie,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,Fe):i.texImage2D(Ie+rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Fe);return Oe}const $e={};$e[i.TEXTURE_2D]=Te(i.TEXTURE_2D,i.TEXTURE_2D,1),$e[i.TEXTURE_CUBE_MAP]=Te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$e[i.TEXTURE_2D_ARRAY]=Te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$e[i.TEXTURE_3D]=Te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Re(i.DEPTH_TEST),l.setFunc(ir),pt(!1),yt(pa),Re(i.CULL_FACE),W(di);function Re(Y){p[Y]!==!0&&(i.enable(Y),p[Y]=!0)}function at(Y){p[Y]!==!1&&(i.disable(Y),p[Y]=!1)}function He(Y,Ie){return g[Y]!==Ie?(i.bindFramebuffer(Y,Ie),g[Y]=Ie,Y===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=Ie),Y===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=Ie),!0):!1}function Je(Y,Ie){let ue=x,ve=!1;if(Y){ue=v.get(Ie),ue===void 0&&(ue=[],v.set(Ie,ue));const Fe=Y.textures;if(ue.length!==Fe.length||ue[0]!==i.COLOR_ATTACHMENT0){for(let Oe=0,rt=Fe.length;Oe<rt;Oe++)ue[Oe]=i.COLOR_ATTACHMENT0+Oe;ue.length=Fe.length,ve=!0}}else ue[0]!==i.BACK&&(ue[0]=i.BACK,ve=!0);ve&&i.drawBuffers(ue)}function gt(Y){return S!==Y?(i.useProgram(Y),S=Y,!0):!1}const ct={[Ri]:i.FUNC_ADD,[ac]:i.FUNC_SUBTRACT,[lc]:i.FUNC_REVERSE_SUBTRACT};ct[cc]=i.MIN,ct[uc]=i.MAX;const kt={[hc]:i.ZERO,[fc]:i.ONE,[dc]:i.SRC_COLOR,[uo]:i.SRC_ALPHA,[xc]:i.SRC_ALPHA_SATURATE,[_c]:i.DST_COLOR,[mc]:i.DST_ALPHA,[pc]:i.ONE_MINUS_SRC_COLOR,[ho]:i.ONE_MINUS_SRC_ALPHA,[vc]:i.ONE_MINUS_DST_COLOR,[gc]:i.ONE_MINUS_DST_ALPHA,[yc]:i.CONSTANT_COLOR,[Mc]:i.ONE_MINUS_CONSTANT_COLOR,[Sc]:i.CONSTANT_ALPHA,[Ec]:i.ONE_MINUS_CONSTANT_ALPHA};function W(Y,Ie,ue,ve,Fe,Oe,rt,Ht,$t,Dt){if(Y===di){C===!0&&(at(i.BLEND),C=!1);return}if(C===!1&&(Re(i.BLEND),C=!0),Y!==oc){if(Y!==y||Dt!==R){if((_!==Ri||w!==Ri)&&(i.blendEquation(i.FUNC_ADD),_=Ri,w=Ri),Dt)switch(Y){case er:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ma:i.blendFunc(i.ONE,i.ONE);break;case ga:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _a:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case er:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ma:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ga:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _a:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}U=null,D=null,B=null,F=null,O.set(0,0,0),G=0,y=Y,R=Dt}return}Fe=Fe||Ie,Oe=Oe||ue,rt=rt||ve,(Ie!==_||Fe!==w)&&(i.blendEquationSeparate(ct[Ie],ct[Fe]),_=Ie,w=Fe),(ue!==U||ve!==D||Oe!==B||rt!==F)&&(i.blendFuncSeparate(kt[ue],kt[ve],kt[Oe],kt[rt]),U=ue,D=ve,B=Oe,F=rt),(Ht.equals(O)===!1||$t!==G)&&(i.blendColor(Ht.r,Ht.g,Ht.b,$t),O.copy(Ht),G=$t),y=Y,R=!1}function qt(Y,Ie){Y.side===Jn?at(i.CULL_FACE):Re(i.CULL_FACE);let ue=Y.side===vn;Ie&&(ue=!ue),pt(ue),Y.blending===er&&Y.transparent===!1?W(di):W(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),l.setFunc(Y.depthFunc),l.setTest(Y.depthTest),l.setMask(Y.depthWrite),o.setMask(Y.colorWrite);const ve=Y.stencilWrite;u.setTest(ve),ve&&(u.setMask(Y.stencilWriteMask),u.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),u.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Bt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?Re(i.SAMPLE_ALPHA_TO_COVERAGE):at(i.SAMPLE_ALPHA_TO_COVERAGE)}function pt(Y){T!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),T=Y)}function yt(Y){Y!==ic?(Re(i.CULL_FACE),Y!==z&&(Y===pa?i.cullFace(i.BACK):Y===rc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):at(i.CULL_FACE),z=Y}function Qe(Y){Y!==ee&&(X&&i.lineWidth(Y),ee=Y)}function Bt(Y,Ie,ue){Y?(Re(i.POLYGON_OFFSET_FILL),(Q!==Ie||le!==ue)&&(i.polygonOffset(Ie,ue),Q=Ie,le=ue)):at(i.POLYGON_OFFSET_FILL)}function it(Y){Y?Re(i.SCISSOR_TEST):at(i.SCISSOR_TEST)}function N(Y){Y===void 0&&(Y=i.TEXTURE0+de-1),c!==Y&&(i.activeTexture(Y),c=Y)}function b(Y,Ie,ue){ue===void 0&&(c===null?ue=i.TEXTURE0+de-1:ue=c);let ve=Ue[ue];ve===void 0&&(ve={type:void 0,texture:void 0},Ue[ue]=ve),(ve.type!==Y||ve.texture!==Ie)&&(c!==ue&&(i.activeTexture(ue),c=ue),i.bindTexture(Y,Ie||$e[Y]),ve.type=Y,ve.texture=Ie)}function ne(){const Y=Ue[c];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function _e(){try{i.compressedTexImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Me(){try{i.compressedTexImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ge(){try{i.texSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function et(){try{i.texSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ne(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ve(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Tt(){try{i.texStorage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function we(){try{i.texStorage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function We(){try{i.texImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function lt(){try{i.texImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ut(Y){Et.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),Et.copy(Y))}function Xe(Y){pe.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),pe.copy(Y))}function Mt(Y,Ie){let ue=d.get(Ie);ue===void 0&&(ue=new WeakMap,d.set(Ie,ue));let ve=ue.get(Y);ve===void 0&&(ve=i.getUniformBlockIndex(Ie,Y.name),ue.set(Y,ve))}function mt(Y,Ie){const ve=d.get(Ie).get(Y);h.get(Ie)!==ve&&(i.uniformBlockBinding(Ie,ve,Y.__bindingPointIndex),h.set(Ie,ve))}function Nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),l.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},c=null,Ue={},g={},v=new WeakMap,x=[],S=null,C=!1,y=null,_=null,U=null,D=null,w=null,B=null,F=null,O=new At(0,0,0),G=0,R=!1,T=null,z=null,ee=null,Q=null,le=null,Et.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:Re,disable:at,bindFramebuffer:He,drawBuffers:Je,useProgram:gt,setBlending:W,setMaterial:qt,setFlipSided:pt,setCullFace:yt,setLineWidth:Qe,setPolygonOffset:Bt,setScissorTest:it,activeTexture:N,bindTexture:b,unbindTexture:ne,compressedTexImage2D:_e,compressedTexImage3D:Me,texImage2D:We,texImage3D:lt,updateUBOMapping:Mt,uniformBlockBinding:mt,texStorage2D:Tt,texStorage3D:we,texSubImage2D:ge,texSubImage3D:et,compressedTexSubImage2D:Ne,compressedTexSubImage3D:Ve,scissor:ut,viewport:Xe,reset:Nt}}function nm(i,e,t,n,r,o,l){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ct,p=new WeakMap;let g;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(N,b){return x?new OffscreenCanvas(N,b):Cr("canvas")}function C(N,b,ne){let _e=1;const Me=it(N);if((Me.width>ne||Me.height>ne)&&(_e=ne/Math.max(Me.width,Me.height)),_e<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ge=Math.floor(_e*Me.width),et=Math.floor(_e*Me.height);g===void 0&&(g=S(ge,et));const Ne=b?S(ge,et):g;return Ne.width=ge,Ne.height=et,Ne.getContext("2d").drawImage(N,0,0,ge,et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+ge+"x"+et+")."),Ne}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),N;return N}function y(N){return N.generateMipmaps}function _(N){i.generateMipmap(N)}function U(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function D(N,b,ne,_e,Me=!1){if(N!==null){if(i[N]!==void 0)return i[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ge=b;if(b===i.RED&&(ne===i.FLOAT&&(ge=i.R32F),ne===i.HALF_FLOAT&&(ge=i.R16F),ne===i.UNSIGNED_BYTE&&(ge=i.R8)),b===i.RED_INTEGER&&(ne===i.UNSIGNED_BYTE&&(ge=i.R8UI),ne===i.UNSIGNED_SHORT&&(ge=i.R16UI),ne===i.UNSIGNED_INT&&(ge=i.R32UI),ne===i.BYTE&&(ge=i.R8I),ne===i.SHORT&&(ge=i.R16I),ne===i.INT&&(ge=i.R32I)),b===i.RG&&(ne===i.FLOAT&&(ge=i.RG32F),ne===i.HALF_FLOAT&&(ge=i.RG16F),ne===i.UNSIGNED_BYTE&&(ge=i.RG8)),b===i.RG_INTEGER&&(ne===i.UNSIGNED_BYTE&&(ge=i.RG8UI),ne===i.UNSIGNED_SHORT&&(ge=i.RG16UI),ne===i.UNSIGNED_INT&&(ge=i.RG32UI),ne===i.BYTE&&(ge=i.RG8I),ne===i.SHORT&&(ge=i.RG16I),ne===i.INT&&(ge=i.RG32I)),b===i.RGB_INTEGER&&(ne===i.UNSIGNED_BYTE&&(ge=i.RGB8UI),ne===i.UNSIGNED_SHORT&&(ge=i.RGB16UI),ne===i.UNSIGNED_INT&&(ge=i.RGB32UI),ne===i.BYTE&&(ge=i.RGB8I),ne===i.SHORT&&(ge=i.RGB16I),ne===i.INT&&(ge=i.RGB32I)),b===i.RGBA_INTEGER&&(ne===i.UNSIGNED_BYTE&&(ge=i.RGBA8UI),ne===i.UNSIGNED_SHORT&&(ge=i.RGBA16UI),ne===i.UNSIGNED_INT&&(ge=i.RGBA32UI),ne===i.BYTE&&(ge=i.RGBA8I),ne===i.SHORT&&(ge=i.RGBA16I),ne===i.INT&&(ge=i.RGBA32I)),b===i.RGB&&ne===i.UNSIGNED_INT_5_9_9_9_REV&&(ge=i.RGB9_E5),b===i.RGBA){const et=Me?ms:Pt.getTransfer(_e);ne===i.FLOAT&&(ge=i.RGBA32F),ne===i.HALF_FLOAT&&(ge=i.RGBA16F),ne===i.UNSIGNED_BYTE&&(ge=et===Ft?i.SRGB8_ALPHA8:i.RGBA8),ne===i.UNSIGNED_SHORT_4_4_4_4&&(ge=i.RGBA4),ne===i.UNSIGNED_SHORT_5_5_5_1&&(ge=i.RGB5_A1)}return(ge===i.R16F||ge===i.R32F||ge===i.RG16F||ge===i.RG32F||ge===i.RGBA16F||ge===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function w(N,b){let ne;return N?b===null||b===Ui||b===or?ne=i.DEPTH24_STENCIL8:b===Qn?ne=i.DEPTH32F_STENCIL8:b===Ar&&(ne=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ui||b===or?ne=i.DEPTH_COMPONENT24:b===Qn?ne=i.DEPTH_COMPONENT32F:b===Ar&&(ne=i.DEPTH_COMPONENT16),ne}function B(N,b){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==In&&N.minFilter!==Hn?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function F(N){const b=N.target;b.removeEventListener("dispose",F),G(b),b.isVideoTexture&&p.delete(b)}function O(N){const b=N.target;b.removeEventListener("dispose",O),T(b)}function G(N){const b=n.get(N);if(b.__webglInit===void 0)return;const ne=N.source,_e=v.get(ne);if(_e){const Me=_e[b.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&R(N),Object.keys(_e).length===0&&v.delete(ne)}n.remove(N)}function R(N){const b=n.get(N);i.deleteTexture(b.__webglTexture);const ne=N.source,_e=v.get(ne);delete _e[b.__cacheKey],l.memory.textures--}function T(N){const b=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(b.__webglFramebuffer[_e]))for(let Me=0;Me<b.__webglFramebuffer[_e].length;Me++)i.deleteFramebuffer(b.__webglFramebuffer[_e][Me]);else i.deleteFramebuffer(b.__webglFramebuffer[_e]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[_e])}else{if(Array.isArray(b.__webglFramebuffer))for(let _e=0;_e<b.__webglFramebuffer.length;_e++)i.deleteFramebuffer(b.__webglFramebuffer[_e]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let _e=0;_e<b.__webglColorRenderbuffer.length;_e++)b.__webglColorRenderbuffer[_e]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[_e]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const ne=N.textures;for(let _e=0,Me=ne.length;_e<Me;_e++){const ge=n.get(ne[_e]);ge.__webglTexture&&(i.deleteTexture(ge.__webglTexture),l.memory.textures--),n.remove(ne[_e])}n.remove(N)}let z=0;function ee(){z=0}function Q(){const N=z;return N>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),z+=1,N}function le(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function de(N,b){const ne=n.get(N);if(N.isVideoTexture&&Qe(N),N.isRenderTargetTexture===!1&&N.version>0&&ne.__version!==N.version){const _e=N.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(ne,N,b);return}}t.bindTexture(i.TEXTURE_2D,ne.__webglTexture,i.TEXTURE0+b)}function X(N,b){const ne=n.get(N);if(N.version>0&&ne.__version!==N.version){pe(ne,N,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ne.__webglTexture,i.TEXTURE0+b)}function ye(N,b){const ne=n.get(N);if(N.version>0&&ne.__version!==N.version){pe(ne,N,b);return}t.bindTexture(i.TEXTURE_3D,ne.__webglTexture,i.TEXTURE0+b)}function ce(N,b){const ne=n.get(N);if(N.version>0&&ne.__version!==N.version){Te(ne,N,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture,i.TEXTURE0+b)}const c={[ps]:i.REPEAT,[Pi]:i.CLAMP_TO_EDGE,[So]:i.MIRRORED_REPEAT},Ue={[In]:i.NEAREST,[Uc]:i.NEAREST_MIPMAP_NEAREST,[Or]:i.NEAREST_MIPMAP_LINEAR,[Hn]:i.LINEAR,[Rs]:i.LINEAR_MIPMAP_NEAREST,[Di]:i.LINEAR_MIPMAP_LINEAR},je={[Oc]:i.NEVER,[Vc]:i.ALWAYS,[Bc]:i.LESS,[Dl]:i.LEQUAL,[zc]:i.EQUAL,[Gc]:i.GEQUAL,[kc]:i.GREATER,[Hc]:i.NOTEQUAL};function dt(N,b){if(b.type===Qn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Hn||b.magFilter===Rs||b.magFilter===Or||b.magFilter===Di||b.minFilter===Hn||b.minFilter===Rs||b.minFilter===Or||b.minFilter===Di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,c[b.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,c[b.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,c[b.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,Ue[b.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,Ue[b.minFilter]),b.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,je[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===In||b.minFilter!==Or&&b.minFilter!==Di||b.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Et(N,b){let ne=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",F));const _e=b.source;let Me=v.get(_e);Me===void 0&&(Me={},v.set(_e,Me));const ge=le(b);if(ge!==N.__cacheKey){Me[ge]===void 0&&(Me[ge]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,ne=!0),Me[ge].usedTimes++;const et=Me[N.__cacheKey];et!==void 0&&(Me[N.__cacheKey].usedTimes--,et.usedTimes===0&&R(b)),N.__cacheKey=ge,N.__webglTexture=Me[ge].texture}return ne}function pe(N,b,ne){let _e=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(_e=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(_e=i.TEXTURE_3D);const Me=Et(N,b),ge=b.source;t.bindTexture(_e,N.__webglTexture,i.TEXTURE0+ne);const et=n.get(ge);if(ge.version!==et.__version||Me===!0){t.activeTexture(i.TEXTURE0+ne);const Ne=Pt.getPrimaries(Pt.workingColorSpace),Ve=b.colorSpace===fi?null:Pt.getPrimaries(b.colorSpace),Tt=b.colorSpace===fi||Ne===Ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let we=C(b.image,!1,r.maxTextureSize);we=Bt(b,we);const We=o.convert(b.format,b.colorSpace),lt=o.convert(b.type);let ut=D(b.internalFormat,We,lt,b.colorSpace,b.isVideoTexture);dt(_e,b);let Xe;const Mt=b.mipmaps,mt=b.isVideoTexture!==!0,Nt=et.__version===void 0||Me===!0,Y=ge.dataReady,Ie=B(b,we);if(b.isDepthTexture)ut=w(b.format===ar,b.type),Nt&&(mt?t.texStorage2D(i.TEXTURE_2D,1,ut,we.width,we.height):t.texImage2D(i.TEXTURE_2D,0,ut,we.width,we.height,0,We,lt,null));else if(b.isDataTexture)if(Mt.length>0){mt&&Nt&&t.texStorage2D(i.TEXTURE_2D,Ie,ut,Mt[0].width,Mt[0].height);for(let ue=0,ve=Mt.length;ue<ve;ue++)Xe=Mt[ue],mt?Y&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Xe.width,Xe.height,We,lt,Xe.data):t.texImage2D(i.TEXTURE_2D,ue,ut,Xe.width,Xe.height,0,We,lt,Xe.data);b.generateMipmaps=!1}else mt?(Nt&&t.texStorage2D(i.TEXTURE_2D,Ie,ut,we.width,we.height),Y&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we.width,we.height,We,lt,we.data)):t.texImage2D(i.TEXTURE_2D,0,ut,we.width,we.height,0,We,lt,we.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){mt&&Nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,ut,Mt[0].width,Mt[0].height,we.depth);for(let ue=0,ve=Mt.length;ue<ve;ue++)if(Xe=Mt[ue],b.format!==Un)if(We!==null)if(mt){if(Y)if(b.layerUpdates.size>0){const Fe=Wa(Xe.width,Xe.height,b.format,b.type);for(const Oe of b.layerUpdates){const rt=Xe.data.subarray(Oe*Fe/Xe.data.BYTES_PER_ELEMENT,(Oe+1)*Fe/Xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,Oe,Xe.width,Xe.height,1,We,rt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Xe.width,Xe.height,we.depth,We,Xe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,ut,Xe.width,Xe.height,we.depth,0,Xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else mt?Y&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Xe.width,Xe.height,we.depth,We,lt,Xe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,ut,Xe.width,Xe.height,we.depth,0,We,lt,Xe.data)}else{mt&&Nt&&t.texStorage2D(i.TEXTURE_2D,Ie,ut,Mt[0].width,Mt[0].height);for(let ue=0,ve=Mt.length;ue<ve;ue++)Xe=Mt[ue],b.format!==Un?We!==null?mt?Y&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,Xe.width,Xe.height,We,Xe.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,ut,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):mt?Y&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Xe.width,Xe.height,We,lt,Xe.data):t.texImage2D(i.TEXTURE_2D,ue,ut,Xe.width,Xe.height,0,We,lt,Xe.data)}else if(b.isDataArrayTexture)if(mt){if(Nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,ut,we.width,we.height,we.depth),Y)if(b.layerUpdates.size>0){const ue=Wa(we.width,we.height,b.format,b.type);for(const ve of b.layerUpdates){const Fe=we.data.subarray(ve*ue/we.data.BYTES_PER_ELEMENT,(ve+1)*ue/we.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ve,we.width,we.height,1,We,lt,Fe)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,We,lt,we.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ut,we.width,we.height,we.depth,0,We,lt,we.data);else if(b.isData3DTexture)mt?(Nt&&t.texStorage3D(i.TEXTURE_3D,Ie,ut,we.width,we.height,we.depth),Y&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,We,lt,we.data)):t.texImage3D(i.TEXTURE_3D,0,ut,we.width,we.height,we.depth,0,We,lt,we.data);else if(b.isFramebufferTexture){if(Nt)if(mt)t.texStorage2D(i.TEXTURE_2D,Ie,ut,we.width,we.height);else{let ue=we.width,ve=we.height;for(let Fe=0;Fe<Ie;Fe++)t.texImage2D(i.TEXTURE_2D,Fe,ut,ue,ve,0,We,lt,null),ue>>=1,ve>>=1}}else if(Mt.length>0){if(mt&&Nt){const ue=it(Mt[0]);t.texStorage2D(i.TEXTURE_2D,Ie,ut,ue.width,ue.height)}for(let ue=0,ve=Mt.length;ue<ve;ue++)Xe=Mt[ue],mt?Y&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,We,lt,Xe):t.texImage2D(i.TEXTURE_2D,ue,ut,We,lt,Xe);b.generateMipmaps=!1}else if(mt){if(Nt){const ue=it(we);t.texStorage2D(i.TEXTURE_2D,Ie,ut,ue.width,ue.height)}Y&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,We,lt,we)}else t.texImage2D(i.TEXTURE_2D,0,ut,We,lt,we);y(b)&&_(_e),et.__version=ge.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function Te(N,b,ne){if(b.image.length!==6)return;const _e=Et(N,b),Me=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+ne);const ge=n.get(Me);if(Me.version!==ge.__version||_e===!0){t.activeTexture(i.TEXTURE0+ne);const et=Pt.getPrimaries(Pt.workingColorSpace),Ne=b.colorSpace===fi?null:Pt.getPrimaries(b.colorSpace),Ve=b.colorSpace===fi||et===Ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const Tt=b.isCompressedTexture||b.image[0].isCompressedTexture,we=b.image[0]&&b.image[0].isDataTexture,We=[];for(let ve=0;ve<6;ve++)!Tt&&!we?We[ve]=C(b.image[ve],!0,r.maxCubemapSize):We[ve]=we?b.image[ve].image:b.image[ve],We[ve]=Bt(b,We[ve]);const lt=We[0],ut=o.convert(b.format,b.colorSpace),Xe=o.convert(b.type),Mt=D(b.internalFormat,ut,Xe,b.colorSpace),mt=b.isVideoTexture!==!0,Nt=ge.__version===void 0||_e===!0,Y=Me.dataReady;let Ie=B(b,lt);dt(i.TEXTURE_CUBE_MAP,b);let ue;if(Tt){mt&&Nt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,Mt,lt.width,lt.height);for(let ve=0;ve<6;ve++){ue=We[ve].mipmaps;for(let Fe=0;Fe<ue.length;Fe++){const Oe=ue[Fe];b.format!==Un?ut!==null?mt?Y&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,0,0,Oe.width,Oe.height,ut,Oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,Mt,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):mt?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,0,0,Oe.width,Oe.height,ut,Xe,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,Mt,Oe.width,Oe.height,0,ut,Xe,Oe.data)}}}else{if(ue=b.mipmaps,mt&&Nt){ue.length>0&&Ie++;const ve=it(We[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,Mt,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(we){mt?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,We[ve].width,We[ve].height,ut,Xe,We[ve].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Mt,We[ve].width,We[ve].height,0,ut,Xe,We[ve].data);for(let Fe=0;Fe<ue.length;Fe++){const rt=ue[Fe].image[ve].image;mt?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,0,0,rt.width,rt.height,ut,Xe,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,Mt,rt.width,rt.height,0,ut,Xe,rt.data)}}else{mt?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,ut,Xe,We[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Mt,ut,Xe,We[ve]);for(let Fe=0;Fe<ue.length;Fe++){const Oe=ue[Fe];mt?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,0,0,ut,Xe,Oe.image[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,Mt,ut,Xe,Oe.image[ve])}}}y(b)&&_(i.TEXTURE_CUBE_MAP),ge.__version=Me.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function $e(N,b,ne,_e,Me,ge){const et=o.convert(ne.format,ne.colorSpace),Ne=o.convert(ne.type),Ve=D(ne.internalFormat,et,Ne,ne.colorSpace),Tt=n.get(b),we=n.get(ne);if(we.__renderTarget=b,!Tt.__hasExternalTextures){const We=Math.max(1,b.width>>ge),lt=Math.max(1,b.height>>ge);Me===i.TEXTURE_3D||Me===i.TEXTURE_2D_ARRAY?t.texImage3D(Me,ge,Ve,We,lt,b.depth,0,et,Ne,null):t.texImage2D(Me,ge,Ve,We,lt,0,et,Ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),yt(b)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_e,Me,we.__webglTexture,0,pt(b)):(Me===i.TEXTURE_2D||Me>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,_e,Me,we.__webglTexture,ge),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(N,b,ne){if(i.bindRenderbuffer(i.RENDERBUFFER,N),b.depthBuffer){const _e=b.depthTexture,Me=_e&&_e.isDepthTexture?_e.type:null,ge=w(b.stencilBuffer,Me),et=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ne=pt(b);yt(b)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ne,ge,b.width,b.height):ne?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,ge,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ge,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,N)}else{const _e=b.textures;for(let Me=0;Me<_e.length;Me++){const ge=_e[Me],et=o.convert(ge.format,ge.colorSpace),Ne=o.convert(ge.type),Ve=D(ge.internalFormat,et,Ne,ge.colorSpace),Tt=pt(b);ne&&yt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,Ve,b.width,b.height):yt(b)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt,Ve,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Ve,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function at(N,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _e=n.get(b.depthTexture);_e.__renderTarget=b,(!_e.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),de(b.depthTexture,0);const Me=_e.__webglTexture,ge=pt(b);if(b.depthTexture.format===tr)yt(b)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Me,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Me,0);else if(b.depthTexture.format===ar)yt(b)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Me,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Me,0);else throw new Error("Unknown depthTexture format")}function He(N){const b=n.get(N),ne=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const _e=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),_e){const Me=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,_e.removeEventListener("dispose",Me)};_e.addEventListener("dispose",Me),b.__depthDisposeCallback=Me}b.__boundDepthTexture=_e}if(N.depthTexture&&!b.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");at(b.__webglFramebuffer,N)}else if(ne){b.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[_e]),b.__webglDepthbuffer[_e]===void 0)b.__webglDepthbuffer[_e]=i.createRenderbuffer(),Re(b.__webglDepthbuffer[_e],N,!1);else{const Me=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=b.__webglDepthbuffer[_e];i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,ge)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Re(b.__webglDepthbuffer,N,!1);else{const _e=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Me),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,Me)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(N,b,ne){const _e=n.get(N);b!==void 0&&$e(_e.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ne!==void 0&&He(N)}function gt(N){const b=N.texture,ne=n.get(N),_e=n.get(b);N.addEventListener("dispose",O);const Me=N.textures,ge=N.isWebGLCubeRenderTarget===!0,et=Me.length>1;if(et||(_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture()),_e.__version=b.version,l.memory.textures++),ge){ne.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(b.mipmaps&&b.mipmaps.length>0){ne.__webglFramebuffer[Ne]=[];for(let Ve=0;Ve<b.mipmaps.length;Ve++)ne.__webglFramebuffer[Ne][Ve]=i.createFramebuffer()}else ne.__webglFramebuffer[Ne]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){ne.__webglFramebuffer=[];for(let Ne=0;Ne<b.mipmaps.length;Ne++)ne.__webglFramebuffer[Ne]=i.createFramebuffer()}else ne.__webglFramebuffer=i.createFramebuffer();if(et)for(let Ne=0,Ve=Me.length;Ne<Ve;Ne++){const Tt=n.get(Me[Ne]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=i.createTexture(),l.memory.textures++)}if(N.samples>0&&yt(N)===!1){ne.__webglMultisampledFramebuffer=i.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let Ne=0;Ne<Me.length;Ne++){const Ve=Me[Ne];ne.__webglColorRenderbuffer[Ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ne.__webglColorRenderbuffer[Ne]);const Tt=o.convert(Ve.format,Ve.colorSpace),we=o.convert(Ve.type),We=D(Ve.internalFormat,Tt,we,Ve.colorSpace,N.isXRRenderTarget===!0),lt=pt(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,We,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,ne.__webglColorRenderbuffer[Ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(ne.__webglDepthRenderbuffer=i.createRenderbuffer(),Re(ne.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ge){t.bindTexture(i.TEXTURE_CUBE_MAP,_e.__webglTexture),dt(i.TEXTURE_CUBE_MAP,b);for(let Ne=0;Ne<6;Ne++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ve=0;Ve<b.mipmaps.length;Ve++)$e(ne.__webglFramebuffer[Ne][Ve],N,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ve);else $e(ne.__webglFramebuffer[Ne],N,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);y(b)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(et){for(let Ne=0,Ve=Me.length;Ne<Ve;Ne++){const Tt=Me[Ne],we=n.get(Tt);t.bindTexture(i.TEXTURE_2D,we.__webglTexture),dt(i.TEXTURE_2D,Tt),$e(ne.__webglFramebuffer,N,Tt,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,0),y(Tt)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let Ne=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ne=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ne,_e.__webglTexture),dt(Ne,b),b.mipmaps&&b.mipmaps.length>0)for(let Ve=0;Ve<b.mipmaps.length;Ve++)$e(ne.__webglFramebuffer[Ve],N,b,i.COLOR_ATTACHMENT0,Ne,Ve);else $e(ne.__webglFramebuffer,N,b,i.COLOR_ATTACHMENT0,Ne,0);y(b)&&_(Ne),t.unbindTexture()}N.depthBuffer&&He(N)}function ct(N){const b=N.textures;for(let ne=0,_e=b.length;ne<_e;ne++){const Me=b[ne];if(y(Me)){const ge=U(N),et=n.get(Me).__webglTexture;t.bindTexture(ge,et),_(ge),t.unbindTexture()}}}const kt=[],W=[];function qt(N){if(N.samples>0){if(yt(N)===!1){const b=N.textures,ne=N.width,_e=N.height;let Me=i.COLOR_BUFFER_BIT;const ge=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=n.get(N),Ne=b.length>1;if(Ne)for(let Ve=0;Ve<b.length;Ve++)t.bindFramebuffer(i.FRAMEBUFFER,et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,et.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,et.__webglFramebuffer);for(let Ve=0;Ve<b.length;Ve++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Me|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Me|=i.STENCIL_BUFFER_BIT)),Ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,et.__webglColorRenderbuffer[Ve]);const Tt=n.get(b[Ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Tt,0)}i.blitFramebuffer(0,0,ne,_e,0,0,ne,_e,Me,i.NEAREST),h===!0&&(kt.length=0,W.length=0,kt.push(i.COLOR_ATTACHMENT0+Ve),N.depthBuffer&&N.resolveDepthBuffer===!1&&(kt.push(ge),W.push(ge),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,W)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,kt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ne)for(let Ve=0;Ve<b.length;Ve++){t.bindFramebuffer(i.FRAMEBUFFER,et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.RENDERBUFFER,et.__webglColorRenderbuffer[Ve]);const Tt=n.get(b[Ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.TEXTURE_2D,Tt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,et.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&h){const b=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function pt(N){return Math.min(r.maxSamples,N.samples)}function yt(N){const b=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Qe(N){const b=l.render.frame;p.get(N)!==b&&(p.set(N,b),N.update())}function Bt(N,b){const ne=N.colorSpace,_e=N.format,Me=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||ne!==lr&&ne!==fi&&(Pt.getTransfer(ne)===Ft?(_e!==Un||Me!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),b}function it(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(d.width=N.naturalWidth||N.width,d.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(d.width=N.displayWidth,d.height=N.displayHeight):(d.width=N.width,d.height=N.height),d}this.allocateTextureUnit=Q,this.resetTextureUnits=ee,this.setTexture2D=de,this.setTexture2DArray=X,this.setTexture3D=ye,this.setTextureCube=ce,this.rebindTextures=Je,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=$e,this.useMultisampledRTT=yt}function im(i,e){function t(n,r=fi){let o;const l=Pt.getTransfer(r);if(n===ii)return i.UNSIGNED_BYTE;if(n===ta)return i.UNSIGNED_SHORT_4_4_4_4;if(n===na)return i.UNSIGNED_SHORT_5_5_5_1;if(n===El)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ml)return i.BYTE;if(n===Sl)return i.SHORT;if(n===Ar)return i.UNSIGNED_SHORT;if(n===ea)return i.INT;if(n===Ui)return i.UNSIGNED_INT;if(n===Qn)return i.FLOAT;if(n===Rr)return i.HALF_FLOAT;if(n===Tl)return i.ALPHA;if(n===bl)return i.RGB;if(n===Un)return i.RGBA;if(n===wl)return i.LUMINANCE;if(n===Al)return i.LUMINANCE_ALPHA;if(n===tr)return i.DEPTH_COMPONENT;if(n===ar)return i.DEPTH_STENCIL;if(n===Cl)return i.RED;if(n===ia)return i.RED_INTEGER;if(n===Rl)return i.RG;if(n===ra)return i.RG_INTEGER;if(n===sa)return i.RGBA_INTEGER;if(n===ls||n===cs||n===us||n===hs)if(l===Ft)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===ls)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===cs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===us)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===hs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===ls)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===cs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===us)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===hs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Eo||n===To||n===bo||n===wo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Eo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===To)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ao||n===Co||n===Ro)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Ao||n===Co)return l===Ft?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Ro)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Lo||n===Po||n===Do||n===Uo||n===Io||n===No||n===Fo||n===Oo||n===Bo||n===zo||n===ko||n===Ho||n===Go||n===Vo)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Lo)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Po)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Do)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uo)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Io)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===No)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fo)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oo)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bo)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zo)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ko)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ho)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Go)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vo)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fs||n===Wo||n===Xo)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===fs)return l===Ft?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wo)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xo)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ll||n===qo||n===jo||n===Yo)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===fs)return o.COMPRESSED_RED_RGTC1_EXT;if(n===qo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===jo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===or?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const rm={type:"move"};class ao{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,l=null;const u=this._targetRay,h=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){l=!0;for(const C of e.hand.values()){const y=t.getJointPose(C,n),_=this._getHandJoint(d,C);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const p=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],v=p.position.distanceTo(g.position),x=.02,S=.005;d.inputState.pinching&&v>x+S?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=x-S&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1));u!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(rm)))}return u!==null&&(u.visible=r!==null),h!==null&&(h.visible=o!==null),d!==null&&(d.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ji;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const sm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,om=`
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

}`;class am{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new mn,o=e.properties.get(r);o.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new _i({vertexShader:sm,fragmentShader:om,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Jt(new Ir(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lm extends ur{constructor(e,t){super();const n=this;let r=null,o=1,l=null,u="local-floor",h=1,d=null,p=null,g=null,v=null,x=null,S=null;const C=new am,y=t.getContextAttributes();let _=null,U=null;const D=[],w=[],B=new Ct;let F=null;const O=new fn;O.viewport=new Ot;const G=new fn;G.viewport=new Ot;const R=[O,G],T=new Cu;let z=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(pe){let Te=D[pe];return Te===void 0&&(Te=new ao,D[pe]=Te),Te.getTargetRaySpace()},this.getControllerGrip=function(pe){let Te=D[pe];return Te===void 0&&(Te=new ao,D[pe]=Te),Te.getGripSpace()},this.getHand=function(pe){let Te=D[pe];return Te===void 0&&(Te=new ao,D[pe]=Te),Te.getHandSpace()};function Q(pe){const Te=w.indexOf(pe.inputSource);if(Te===-1)return;const $e=D[Te];$e!==void 0&&($e.update(pe.inputSource,pe.frame,d||l),$e.dispatchEvent({type:pe.type,data:pe.inputSource}))}function le(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",le),r.removeEventListener("inputsourceschange",de);for(let pe=0;pe<D.length;pe++){const Te=w[pe];Te!==null&&(w[pe]=null,D[pe].disconnect(Te))}z=null,ee=null,C.reset(),e.setRenderTarget(_),x=null,v=null,g=null,r=null,U=null,Et.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(B.width,B.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(pe){o=pe,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(pe){u=pe,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||l},this.setReferenceSpace=function(pe){d=pe},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return g},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(pe){if(r=pe,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",le),r.addEventListener("inputsourceschange",de),y.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(B),r.renderState.layers===void 0){const Te={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(r,t,Te),r.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),U=new Ii(x.framebufferWidth,x.framebufferHeight,{format:Un,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let Te=null,$e=null,Re=null;y.depth&&(Re=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=y.stencil?ar:tr,$e=y.stencil?or:Ui);const at={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:o};g=new XRWebGLBinding(r,t),v=g.createProjectionLayer(at),r.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),U=new Ii(v.textureWidth,v.textureHeight,{format:Un,type:ii,depthTexture:new Xl(v.textureWidth,v.textureHeight,$e,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(h),d=null,l=await r.requestReferenceSpace(u),Et.setContext(r),Et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function de(pe){for(let Te=0;Te<pe.removed.length;Te++){const $e=pe.removed[Te],Re=w.indexOf($e);Re>=0&&(w[Re]=null,D[Re].disconnect($e))}for(let Te=0;Te<pe.added.length;Te++){const $e=pe.added[Te];let Re=w.indexOf($e);if(Re===-1){for(let He=0;He<D.length;He++)if(He>=w.length){w.push($e),Re=He;break}else if(w[He]===null){w[He]=$e,Re=He;break}if(Re===-1)break}const at=D[Re];at&&at.connect($e)}}const X=new Z,ye=new Z;function ce(pe,Te,$e){X.setFromMatrixPosition(Te.matrixWorld),ye.setFromMatrixPosition($e.matrixWorld);const Re=X.distanceTo(ye),at=Te.projectionMatrix.elements,He=$e.projectionMatrix.elements,Je=at[14]/(at[10]-1),gt=at[14]/(at[10]+1),ct=(at[9]+1)/at[5],kt=(at[9]-1)/at[5],W=(at[8]-1)/at[0],qt=(He[8]+1)/He[0],pt=Je*W,yt=Je*qt,Qe=Re/(-W+qt),Bt=Qe*-W;if(Te.matrixWorld.decompose(pe.position,pe.quaternion,pe.scale),pe.translateX(Bt),pe.translateZ(Qe),pe.matrixWorld.compose(pe.position,pe.quaternion,pe.scale),pe.matrixWorldInverse.copy(pe.matrixWorld).invert(),at[10]===-1)pe.projectionMatrix.copy(Te.projectionMatrix),pe.projectionMatrixInverse.copy(Te.projectionMatrixInverse);else{const it=Je+Qe,N=gt+Qe,b=pt-Bt,ne=yt+(Re-Bt),_e=ct*gt/N*it,Me=kt*gt/N*it;pe.projectionMatrix.makePerspective(b,ne,_e,Me,it,N),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert()}}function c(pe,Te){Te===null?pe.matrixWorld.copy(pe.matrix):pe.matrixWorld.multiplyMatrices(Te.matrixWorld,pe.matrix),pe.matrixWorldInverse.copy(pe.matrixWorld).invert()}this.updateCamera=function(pe){if(r===null)return;let Te=pe.near,$e=pe.far;C.texture!==null&&(C.depthNear>0&&(Te=C.depthNear),C.depthFar>0&&($e=C.depthFar)),T.near=G.near=O.near=Te,T.far=G.far=O.far=$e,(z!==T.near||ee!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),z=T.near,ee=T.far),O.layers.mask=pe.layers.mask|2,G.layers.mask=pe.layers.mask|4,T.layers.mask=O.layers.mask|G.layers.mask;const Re=pe.parent,at=T.cameras;c(T,Re);for(let He=0;He<at.length;He++)c(at[He],Re);at.length===2?ce(T,O,G):T.projectionMatrix.copy(O.projectionMatrix),Ue(pe,T,Re)};function Ue(pe,Te,$e){$e===null?pe.matrix.copy(Te.matrixWorld):(pe.matrix.copy($e.matrixWorld),pe.matrix.invert(),pe.matrix.multiply(Te.matrixWorld)),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.updateMatrixWorld(!0),pe.projectionMatrix.copy(Te.projectionMatrix),pe.projectionMatrixInverse.copy(Te.projectionMatrixInverse),pe.isPerspectiveCamera&&(pe.fov=$o*2*Math.atan(1/pe.projectionMatrix.elements[5]),pe.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(v===null&&x===null))return h},this.setFoveation=function(pe){h=pe,v!==null&&(v.fixedFoveation=pe),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=pe)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(T)};let je=null;function dt(pe,Te){if(p=Te.getViewerPose(d||l),S=Te,p!==null){const $e=p.views;x!==null&&(e.setRenderTargetFramebuffer(U,x.framebuffer),e.setRenderTarget(U));let Re=!1;$e.length!==T.cameras.length&&(T.cameras.length=0,Re=!0);for(let He=0;He<$e.length;He++){const Je=$e[He];let gt=null;if(x!==null)gt=x.getViewport(Je);else{const kt=g.getViewSubImage(v,Je);gt=kt.viewport,He===0&&(e.setRenderTargetTextures(U,kt.colorTexture,v.ignoreDepthValues?void 0:kt.depthStencilTexture),e.setRenderTarget(U))}let ct=R[He];ct===void 0&&(ct=new fn,ct.layers.enable(He),ct.viewport=new Ot,R[He]=ct),ct.matrix.fromArray(Je.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(Je.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(gt.x,gt.y,gt.width,gt.height),He===0&&(T.matrix.copy(ct.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Re===!0&&T.cameras.push(ct)}const at=r.enabledFeatures;if(at&&at.includes("depth-sensing")){const He=g.getDepthInformation($e[0]);He&&He.isValid&&He.texture&&C.init(e,He,r.renderState)}}for(let $e=0;$e<D.length;$e++){const Re=w[$e],at=D[$e];Re!==null&&at!==void 0&&at.update(Re,Te,d||l)}je&&je(pe,Te),Te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Te}),S=null}const Et=new Yl;Et.setAnimationLoop(dt),this.setAnimationLoop=function(pe){je=pe},this.dispose=function(){}}}const wi=new Vn,cm=new zt;function um(i,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function n(y,_){_.color.getRGB(y.fogColor.value,Hl(i)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function r(y,_,U,D,w){_.isMeshBasicMaterial||_.isMeshLambertMaterial?o(y,_):_.isMeshToonMaterial?(o(y,_),g(y,_)):_.isMeshPhongMaterial?(o(y,_),p(y,_)):_.isMeshStandardMaterial?(o(y,_),v(y,_),_.isMeshPhysicalMaterial&&x(y,_,w)):_.isMeshMatcapMaterial?(o(y,_),S(y,_)):_.isMeshDepthMaterial?o(y,_):_.isMeshDistanceMaterial?(o(y,_),C(y,_)):_.isMeshNormalMaterial?o(y,_):_.isLineBasicMaterial?(l(y,_),_.isLineDashedMaterial&&u(y,_)):_.isPointsMaterial?h(y,_,U,D):_.isSpriteMaterial?d(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function o(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===vn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===vn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const U=e.get(_),D=U.envMap,w=U.envMapRotation;D&&(y.envMap.value=D,wi.copy(w),wi.x*=-1,wi.y*=-1,wi.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),y.envMapRotation.value.setFromMatrix4(cm.makeRotationFromEuler(wi)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function l(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function u(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function h(y,_,U,D){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*U,y.scale.value=D*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function d(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function g(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function v(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function x(y,_,U){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===vn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=U.texture,y.transmissionSamplerSize.value.set(U.width,U.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function S(y,_){_.matcap&&(y.matcap.value=_.matcap)}function C(y,_){const U=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(U.matrixWorld),y.nearDistance.value=U.shadow.camera.near,y.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function hm(i,e,t,n){let r={},o={},l=[];const u=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(U,D){const w=D.program;n.uniformBlockBinding(U,w)}function d(U,D){let w=r[U.id];w===void 0&&(S(U),w=p(U),r[U.id]=w,U.addEventListener("dispose",y));const B=D.program;n.updateUBOMapping(U,B);const F=e.render.frame;o[U.id]!==F&&(v(U),o[U.id]=F)}function p(U){const D=g();U.__bindingPointIndex=D;const w=i.createBuffer(),B=U.__size,F=U.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,B,F),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,D,w),w}function g(){for(let U=0;U<u;U++)if(l.indexOf(U)===-1)return l.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(U){const D=r[U.id],w=U.uniforms,B=U.__cache;i.bindBuffer(i.UNIFORM_BUFFER,D);for(let F=0,O=w.length;F<O;F++){const G=Array.isArray(w[F])?w[F]:[w[F]];for(let R=0,T=G.length;R<T;R++){const z=G[R];if(x(z,F,R,B)===!0){const ee=z.__offset,Q=Array.isArray(z.value)?z.value:[z.value];let le=0;for(let de=0;de<Q.length;de++){const X=Q[de],ye=C(X);typeof X=="number"||typeof X=="boolean"?(z.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,ee+le,z.__data)):X.isMatrix3?(z.__data[0]=X.elements[0],z.__data[1]=X.elements[1],z.__data[2]=X.elements[2],z.__data[3]=0,z.__data[4]=X.elements[3],z.__data[5]=X.elements[4],z.__data[6]=X.elements[5],z.__data[7]=0,z.__data[8]=X.elements[6],z.__data[9]=X.elements[7],z.__data[10]=X.elements[8],z.__data[11]=0):(X.toArray(z.__data,le),le+=ye.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ee,z.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(U,D,w,B){const F=U.value,O=D+"_"+w;if(B[O]===void 0)return typeof F=="number"||typeof F=="boolean"?B[O]=F:B[O]=F.clone(),!0;{const G=B[O];if(typeof F=="number"||typeof F=="boolean"){if(G!==F)return B[O]=F,!0}else if(G.equals(F)===!1)return G.copy(F),!0}return!1}function S(U){const D=U.uniforms;let w=0;const B=16;for(let O=0,G=D.length;O<G;O++){const R=Array.isArray(D[O])?D[O]:[D[O]];for(let T=0,z=R.length;T<z;T++){const ee=R[T],Q=Array.isArray(ee.value)?ee.value:[ee.value];for(let le=0,de=Q.length;le<de;le++){const X=Q[le],ye=C(X),ce=w%B,c=ce%ye.boundary,Ue=ce+c;w+=c,Ue!==0&&B-Ue<ye.storage&&(w+=B-Ue),ee.__data=new Float32Array(ye.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=w,w+=ye.storage}}}const F=w%B;return F>0&&(w+=B-F),U.__size=w,U.__cache={},this}function C(U){const D={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(D.boundary=4,D.storage=4):U.isVector2?(D.boundary=8,D.storage=8):U.isVector3||U.isColor?(D.boundary=16,D.storage=12):U.isVector4?(D.boundary=16,D.storage=16):U.isMatrix3?(D.boundary=48,D.storage=48):U.isMatrix4?(D.boundary=64,D.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),D}function y(U){const D=U.target;D.removeEventListener("dispose",y);const w=l.indexOf(D.__bindingPointIndex);l.splice(w,1),i.deleteBuffer(r[D.id]),delete r[D.id],delete o[D.id]}function _(){for(const U in r)i.deleteBuffer(r[U]);l=[],r={},o={}}return{bind:h,update:d,dispose:_}}class Es{constructor(e={}){const{canvas:t=Xc(),context:n=null,depth:r=!0,stencil:o=!1,alpha:l=!1,antialias:u=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=l;const S=new Uint32Array(4),C=new Int32Array(4);let y=null,_=null;const U=[],D=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=An,this.toneMapping=pi,this.toneMappingExposure=1;const w=this;let B=!1,F=0,O=0,G=null,R=-1,T=null;const z=new Ot,ee=new Ot;let Q=null;const le=new At(0);let de=0,X=t.width,ye=t.height,ce=1,c=null,Ue=null;const je=new Ot(0,0,X,ye),dt=new Ot(0,0,X,ye);let Et=!1;const pe=new oa;let Te=!1,$e=!1;const Re=new zt,at=new zt,He=new Z,Je=new Ot,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function kt(){return G===null?ce:1}let W=n;function qt(A,K){return t.getContext(A,K)}try{const A={alpha:!0,depth:r,stencil:o,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jo}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Fe,!1),t.addEventListener("webglcontextcreationerror",Oe,!1),W===null){const K="webgl2";if(W=qt(K,A),W===null)throw qt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let pt,yt,Qe,Bt,it,N,b,ne,_e,Me,ge,et,Ne,Ve,Tt,we,We,lt,ut,Xe,Mt,mt,Nt,Y;function Ie(){pt=new Md(W),pt.init(),mt=new im(W,pt),yt=new md(W,pt,e,mt),Qe=new tm(W,pt),yt.reverseDepthBuffer&&v&&Qe.buffers.depth.setReversed(!0),Bt=new Td(W),it=new Gp,N=new nm(W,pt,Qe,it,yt,mt,Bt),b=new _d(w),ne=new yd(w),_e=new Lu(W),Nt=new dd(W,_e),Me=new Sd(W,_e,Bt,Nt),ge=new wd(W,Me,_e,Bt),ut=new bd(W,yt,N),we=new gd(it),et=new Hp(w,b,ne,pt,yt,Nt,we),Ne=new um(w,it),Ve=new Wp,Tt=new Kp(pt),lt=new fd(w,b,ne,Qe,ge,x,h),We=new Qp(w,ge,yt),Y=new hm(W,Bt,yt,Qe),Xe=new pd(W,pt,Bt),Mt=new Ed(W,pt,Bt),Bt.programs=et.programs,w.capabilities=yt,w.extensions=pt,w.properties=it,w.renderLists=Ve,w.shadowMap=We,w.state=Qe,w.info=Bt}Ie();const ue=new lm(w,W);this.xr=ue,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const A=pt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=pt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(A){A!==void 0&&(ce=A,this.setSize(X,ye,!1))},this.getSize=function(A){return A.set(X,ye)},this.setSize=function(A,K,se=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=A,ye=K,t.width=Math.floor(A*ce),t.height=Math.floor(K*ce),se===!0&&(t.style.width=A+"px",t.style.height=K+"px"),this.setViewport(0,0,A,K)},this.getDrawingBufferSize=function(A){return A.set(X*ce,ye*ce).floor()},this.setDrawingBufferSize=function(A,K,se){X=A,ye=K,ce=se,t.width=Math.floor(A*se),t.height=Math.floor(K*se),this.setViewport(0,0,A,K)},this.getCurrentViewport=function(A){return A.copy(z)},this.getViewport=function(A){return A.copy(je)},this.setViewport=function(A,K,se,oe){A.isVector4?je.set(A.x,A.y,A.z,A.w):je.set(A,K,se,oe),Qe.viewport(z.copy(je).multiplyScalar(ce).round())},this.getScissor=function(A){return A.copy(dt)},this.setScissor=function(A,K,se,oe){A.isVector4?dt.set(A.x,A.y,A.z,A.w):dt.set(A,K,se,oe),Qe.scissor(ee.copy(dt).multiplyScalar(ce).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(A){Qe.setScissorTest(Et=A)},this.setOpaqueSort=function(A){c=A},this.setTransparentSort=function(A){Ue=A},this.getClearColor=function(A){return A.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor.apply(lt,arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha.apply(lt,arguments)},this.clear=function(A=!0,K=!0,se=!0){let oe=0;if(A){let J=!1;if(G!==null){const Ee=G.texture.format;J=Ee===sa||Ee===ra||Ee===ia}if(J){const Ee=G.texture.type,Le=Ee===ii||Ee===Ui||Ee===Ar||Ee===or||Ee===ta||Ee===na,Ge=lt.getClearColor(),Ye=lt.getClearAlpha(),ht=Ge.r,ot=Ge.g,Ke=Ge.b;Le?(S[0]=ht,S[1]=ot,S[2]=Ke,S[3]=Ye,W.clearBufferuiv(W.COLOR,0,S)):(C[0]=ht,C[1]=ot,C[2]=Ke,C[3]=Ye,W.clearBufferiv(W.COLOR,0,C))}else oe|=W.COLOR_BUFFER_BIT}K&&(oe|=W.DEPTH_BUFFER_BIT),se&&(oe|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Fe,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),lt.dispose(),Ve.dispose(),Tt.dispose(),it.dispose(),b.dispose(),ne.dispose(),ge.dispose(),Nt.dispose(),Y.dispose(),et.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Ni),ue.removeEventListener("sessionend",Nr),Wn.stop()};function ve(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const A=Bt.autoReset,K=We.enabled,se=We.autoUpdate,oe=We.needsUpdate,J=We.type;Ie(),Bt.autoReset=A,We.enabled=K,We.autoUpdate=se,We.needsUpdate=oe,We.type=J}function Oe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function rt(A){const K=A.target;K.removeEventListener("dispose",rt),Ht(K)}function Ht(A){$t(A),it.remove(A)}function $t(A){const K=it.get(A).programs;K!==void 0&&(K.forEach(function(se){et.releaseProgram(se)}),A.isShaderMaterial&&et.releaseShaderCache(A))}this.renderBufferDirect=function(A,K,se,oe,J,Ee){K===null&&(K=gt);const Le=J.isMesh&&J.matrixWorld.determinant()<0,Ge=Ts(A,K,se,oe,J);Qe.setMaterial(oe,Le);let Ye=se.index,ht=1;if(oe.wireframe===!0){if(Ye=Me.getWireframeAttribute(se),Ye===void 0)return;ht=2}const ot=se.drawRange,Ke=se.attributes.position;let bt=ot.start*ht,Lt=(ot.start+ot.count)*ht;Ee!==null&&(bt=Math.max(bt,Ee.start*ht),Lt=Math.min(Lt,(Ee.start+Ee.count)*ht)),Ye!==null?(bt=Math.max(bt,0),Lt=Math.min(Lt,Ye.count)):Ke!=null&&(bt=Math.max(bt,0),Lt=Math.min(Lt,Ke.count));const Vt=Lt-bt;if(Vt<0||Vt===1/0)return;Nt.setup(J,oe,Ge,se,Ye);let Gt,Rt=Xe;if(Ye!==null&&(Gt=_e.get(Ye),Rt=Mt,Rt.setIndex(Gt)),J.isMesh)oe.wireframe===!0?(Qe.setLineWidth(oe.wireframeLinewidth*kt()),Rt.setMode(W.LINES)):Rt.setMode(W.TRIANGLES);else if(J.isLine){let tt=oe.linewidth;tt===void 0&&(tt=1),Qe.setLineWidth(tt*kt()),J.isLineSegments?Rt.setMode(W.LINES):J.isLineLoop?Rt.setMode(W.LINE_LOOP):Rt.setMode(W.LINE_STRIP)}else J.isPoints?Rt.setMode(W.POINTS):J.isSprite&&Rt.setMode(W.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Rt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))Rt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const tt=J._multiDrawStarts,jt=J._multiDrawCounts,_t=J._multiDrawCount,nn=Ye?_e.get(Ye).bytesPerElement:1,ri=it.get(oe).currentProgram.getUniforms();for(let dn=0;dn<_t;dn++)ri.setValue(W,"_gl_DrawID",dn),Rt.render(tt[dn]/nn,jt[dn])}else if(J.isInstancedMesh)Rt.renderInstances(bt,Vt,J.count);else if(se.isInstancedBufferGeometry){const tt=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,jt=Math.min(se.instanceCount,tt);Rt.renderInstances(bt,Vt,jt)}else Rt.render(bt,Vt)};function Dt(A,K,se){A.transparent===!0&&A.side===Jn&&A.forceSinglePass===!1?(A.side=vn,A.needsUpdate=!0,Fi(A,K,se),A.side=gi,A.needsUpdate=!0,Fi(A,K,se),A.side=Jn):Fi(A,K,se)}this.compile=function(A,K,se=null){se===null&&(se=A),_=Tt.get(se),_.init(K),D.push(_),se.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(_.pushLight(J),J.castShadow&&_.pushShadow(J))}),A!==se&&A.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(_.pushLight(J),J.castShadow&&_.pushShadow(J))}),_.setupLights();const oe=new Set;return A.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Ee=J.material;if(Ee)if(Array.isArray(Ee))for(let Le=0;Le<Ee.length;Le++){const Ge=Ee[Le];Dt(Ge,se,J),oe.add(Ge)}else Dt(Ee,se,J),oe.add(Ee)}),D.pop(),_=null,oe},this.compileAsync=function(A,K,se=null){const oe=this.compile(A,K,se);return new Promise(J=>{function Ee(){if(oe.forEach(function(Le){it.get(Le).currentProgram.isReady()&&oe.delete(Le)}),oe.size===0){J(A);return}setTimeout(Ee,10)}pt.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let xn=null;function Cn(A){xn&&xn(A)}function Ni(){Wn.stop()}function Nr(){Wn.start()}const Wn=new Yl;Wn.setAnimationLoop(Cn),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(A){xn=A,ue.setAnimationLoop(A),A===null?Wn.stop():Wn.start()},ue.addEventListener("sessionstart",Ni),ue.addEventListener("sessionend",Nr),this.render=function(A,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(K),K=ue.getCamera()),A.isScene===!0&&A.onBeforeRender(w,A,K,G),_=Tt.get(A,D.length),_.init(K),D.push(_),at.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),pe.setFromProjectionMatrix(at),$e=this.localClippingEnabled,Te=we.init(this.clippingPlanes,$e),y=Ve.get(A,U.length),y.init(),U.push(y),ue.enabled===!0&&ue.isPresenting===!0){const Ee=w.xr.getDepthSensingMesh();Ee!==null&&dr(Ee,K,-1/0,w.sortObjects)}dr(A,K,0,w.sortObjects),y.finish(),w.sortObjects===!0&&y.sort(c,Ue),ct=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,ct&&lt.addToRenderList(y,A),this.info.render.frame++,Te===!0&&we.beginShadows();const se=_.state.shadowsArray;We.render(se,A,K),Te===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const oe=y.opaque,J=y.transmissive;if(_.setupLights(),K.isArrayCamera){const Ee=K.cameras;if(J.length>0)for(let Le=0,Ge=Ee.length;Le<Ge;Le++){const Ye=Ee[Le];Xn(oe,J,A,Ye)}ct&&lt.render(A);for(let Le=0,Ge=Ee.length;Le<Ge;Le++){const Ye=Ee[Le];Fn(y,A,Ye,Ye.viewport)}}else J.length>0&&Xn(oe,J,A,K),ct&&lt.render(A),Fn(y,A,K);G!==null&&(N.updateMultisampleRenderTarget(G),N.updateRenderTargetMipmap(G)),A.isScene===!0&&A.onAfterRender(w,A,K),Nt.resetDefaultState(),R=-1,T=null,D.pop(),D.length>0?(_=D[D.length-1],Te===!0&&we.setGlobalState(w.clippingPlanes,_.state.camera)):_=null,U.pop(),U.length>0?y=U[U.length-1]:y=null};function dr(A,K,se,oe){if(A.visible===!1)return;if(A.layers.test(K.layers)){if(A.isGroup)se=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(K);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||pe.intersectsSprite(A)){oe&&Je.setFromMatrixPosition(A.matrixWorld).applyMatrix4(at);const Le=ge.update(A),Ge=A.material;Ge.visible&&y.push(A,Le,Ge,se,Je.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||pe.intersectsObject(A))){const Le=ge.update(A),Ge=A.material;if(oe&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Je.copy(A.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Je.copy(Le.boundingSphere.center)),Je.applyMatrix4(A.matrixWorld).applyMatrix4(at)),Array.isArray(Ge)){const Ye=Le.groups;for(let ht=0,ot=Ye.length;ht<ot;ht++){const Ke=Ye[ht],bt=Ge[Ke.materialIndex];bt&&bt.visible&&y.push(A,Le,bt,se,Je.z,Ke)}}else Ge.visible&&y.push(A,Le,Ge,se,Je.z,null)}}const Ee=A.children;for(let Le=0,Ge=Ee.length;Le<Ge;Le++)dr(Ee[Le],K,se,oe)}function Fn(A,K,se,oe){const J=A.opaque,Ee=A.transmissive,Le=A.transparent;_.setupLightsView(se),Te===!0&&we.setGlobalState(w.clippingPlanes,se),oe&&Qe.viewport(z.copy(oe)),J.length>0&&xi(J,K,se),Ee.length>0&&xi(Ee,K,se),Le.length>0&&xi(Le,K,se),Qe.buffers.depth.setTest(!0),Qe.buffers.depth.setMask(!0),Qe.buffers.color.setMask(!0),Qe.setPolygonOffset(!1)}function Xn(A,K,se,oe){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[oe.id]===void 0&&(_.state.transmissionRenderTarget[oe.id]=new Ii(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?Rr:ii,minFilter:Di,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace}));const Ee=_.state.transmissionRenderTarget[oe.id],Le=oe.viewport||z;Ee.setSize(Le.z,Le.w);const Ge=w.getRenderTarget();w.setRenderTarget(Ee),w.getClearColor(le),de=w.getClearAlpha(),de<1&&w.setClearColor(16777215,.5),w.clear(),ct&&lt.render(se);const Ye=w.toneMapping;w.toneMapping=pi;const ht=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),_.setupLightsView(oe),Te===!0&&we.setGlobalState(w.clippingPlanes,oe),xi(A,se,oe),N.updateMultisampleRenderTarget(Ee),N.updateRenderTargetMipmap(Ee),pt.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let Ke=0,bt=K.length;Ke<bt;Ke++){const Lt=K[Ke],Vt=Lt.object,Gt=Lt.geometry,Rt=Lt.material,tt=Lt.group;if(Rt.side===Jn&&Vt.layers.test(oe.layers)){const jt=Rt.side;Rt.side=vn,Rt.needsUpdate=!0,pr(Vt,se,oe,Gt,Rt,tt),Rt.side=jt,Rt.needsUpdate=!0,ot=!0}}ot===!0&&(N.updateMultisampleRenderTarget(Ee),N.updateRenderTargetMipmap(Ee))}w.setRenderTarget(Ge),w.setClearColor(le,de),ht!==void 0&&(oe.viewport=ht),w.toneMapping=Ye}function xi(A,K,se){const oe=K.isScene===!0?K.overrideMaterial:null;for(let J=0,Ee=A.length;J<Ee;J++){const Le=A[J],Ge=Le.object,Ye=Le.geometry,ht=oe===null?Le.material:oe,ot=Le.group;Ge.layers.test(se.layers)&&pr(Ge,K,se,Ye,ht,ot)}}function pr(A,K,se,oe,J,Ee){A.onBeforeRender(w,K,se,oe,J,Ee),A.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),J.onBeforeRender(w,K,se,oe,A,Ee),J.transparent===!0&&J.side===Jn&&J.forceSinglePass===!1?(J.side=vn,J.needsUpdate=!0,w.renderBufferDirect(se,K,oe,J,A,Ee),J.side=gi,J.needsUpdate=!0,w.renderBufferDirect(se,K,oe,J,A,Ee),J.side=Jn):w.renderBufferDirect(se,K,oe,J,A,Ee),A.onAfterRender(w,K,se,oe,J,Ee)}function Fi(A,K,se){K.isScene!==!0&&(K=gt);const oe=it.get(A),J=_.state.lights,Ee=_.state.shadowsArray,Le=J.state.version,Ge=et.getParameters(A,J.state,Ee,K,se),Ye=et.getProgramCacheKey(Ge);let ht=oe.programs;oe.environment=A.isMeshStandardMaterial?K.environment:null,oe.fog=K.fog,oe.envMap=(A.isMeshStandardMaterial?ne:b).get(A.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&A.envMap===null?K.environmentRotation:A.envMapRotation,ht===void 0&&(A.addEventListener("dispose",rt),ht=new Map,oe.programs=ht);let ot=ht.get(Ye);if(ot!==void 0){if(oe.currentProgram===ot&&oe.lightsStateVersion===Le)return mr(A,Ge),ot}else Ge.uniforms=et.getUniforms(A),A.onBeforeCompile(Ge,w),ot=et.acquireProgram(Ge,Ye),ht.set(Ye,ot),oe.uniforms=Ge.uniforms;const Ke=oe.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ke.clippingPlanes=we.uniform),mr(A,Ge),oe.needsLights=ws(A),oe.lightsStateVersion=Le,oe.needsLights&&(Ke.ambientLightColor.value=J.state.ambient,Ke.lightProbe.value=J.state.probe,Ke.directionalLights.value=J.state.directional,Ke.directionalLightShadows.value=J.state.directionalShadow,Ke.spotLights.value=J.state.spot,Ke.spotLightShadows.value=J.state.spotShadow,Ke.rectAreaLights.value=J.state.rectArea,Ke.ltc_1.value=J.state.rectAreaLTC1,Ke.ltc_2.value=J.state.rectAreaLTC2,Ke.pointLights.value=J.state.point,Ke.pointLightShadows.value=J.state.pointShadow,Ke.hemisphereLights.value=J.state.hemi,Ke.directionalShadowMap.value=J.state.directionalShadowMap,Ke.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ke.spotShadowMap.value=J.state.spotShadowMap,Ke.spotLightMatrix.value=J.state.spotLightMatrix,Ke.spotLightMap.value=J.state.spotLightMap,Ke.pointShadowMap.value=J.state.pointShadowMap,Ke.pointShadowMatrix.value=J.state.pointShadowMatrix),oe.currentProgram=ot,oe.uniformsList=null,ot}function Fr(A){if(A.uniformsList===null){const K=A.currentProgram.getUniforms();A.uniformsList=ds.seqWithValue(K.seq,A.uniforms)}return A.uniformsList}function mr(A,K){const se=it.get(A);se.outputColorSpace=K.outputColorSpace,se.batching=K.batching,se.batchingColor=K.batchingColor,se.instancing=K.instancing,se.instancingColor=K.instancingColor,se.instancingMorph=K.instancingMorph,se.skinning=K.skinning,se.morphTargets=K.morphTargets,se.morphNormals=K.morphNormals,se.morphColors=K.morphColors,se.morphTargetsCount=K.morphTargetsCount,se.numClippingPlanes=K.numClippingPlanes,se.numIntersection=K.numClipIntersection,se.vertexAlphas=K.vertexAlphas,se.vertexTangents=K.vertexTangents,se.toneMapping=K.toneMapping}function Ts(A,K,se,oe,J){K.isScene!==!0&&(K=gt),N.resetTextureUnits();const Ee=K.fog,Le=oe.isMeshStandardMaterial?K.environment:null,Ge=G===null?w.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:lr,Ye=(oe.isMeshStandardMaterial?ne:b).get(oe.envMap||Le),ht=oe.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,ot=!!se.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Ke=!!se.morphAttributes.position,bt=!!se.morphAttributes.normal,Lt=!!se.morphAttributes.color;let Vt=pi;oe.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Vt=w.toneMapping);const Gt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Rt=Gt!==void 0?Gt.length:0,tt=it.get(oe),jt=_.state.lights;if(Te===!0&&($e===!0||A!==T)){const on=A===T&&oe.id===R;we.setState(oe,A,on)}let _t=!1;oe.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==jt.state.version||tt.outputColorSpace!==Ge||J.isBatchedMesh&&tt.batching===!1||!J.isBatchedMesh&&tt.batching===!0||J.isBatchedMesh&&tt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&tt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&tt.instancing===!1||!J.isInstancedMesh&&tt.instancing===!0||J.isSkinnedMesh&&tt.skinning===!1||!J.isSkinnedMesh&&tt.skinning===!0||J.isInstancedMesh&&tt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&tt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&tt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&tt.instancingMorph===!1&&J.morphTexture!==null||tt.envMap!==Ye||oe.fog===!0&&tt.fog!==Ee||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==we.numPlanes||tt.numIntersection!==we.numIntersection)||tt.vertexAlphas!==ht||tt.vertexTangents!==ot||tt.morphTargets!==Ke||tt.morphNormals!==bt||tt.morphColors!==Lt||tt.toneMapping!==Vt||tt.morphTargetsCount!==Rt)&&(_t=!0):(_t=!0,tt.__version=oe.version);let nn=tt.currentProgram;_t===!0&&(nn=Fi(oe,K,J));let ri=!1,dn=!1,On=!1;const Ut=nn.getUniforms(),sn=tt.uniforms;if(Qe.useProgram(nn.program)&&(ri=!0,dn=!0,On=!0),oe.id!==R&&(R=oe.id,dn=!0),ri||T!==A){Qe.buffers.depth.getReversed()?(Re.copy(A.projectionMatrix),jc(Re),Yc(Re),Ut.setValue(W,"projectionMatrix",Re)):Ut.setValue(W,"projectionMatrix",A.projectionMatrix),Ut.setValue(W,"viewMatrix",A.matrixWorldInverse);const an=Ut.map.cameraPosition;an!==void 0&&an.setValue(W,He.setFromMatrixPosition(A.matrixWorld)),yt.logarithmicDepthBuffer&&Ut.setValue(W,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Ut.setValue(W,"isOrthographic",A.isOrthographicCamera===!0),T!==A&&(T=A,dn=!0,On=!0)}if(J.isSkinnedMesh){Ut.setOptional(W,J,"bindMatrix"),Ut.setOptional(W,J,"bindMatrixInverse");const on=J.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Ut.setValue(W,"boneTexture",on.boneTexture,N))}J.isBatchedMesh&&(Ut.setOptional(W,J,"batchingTexture"),Ut.setValue(W,"batchingTexture",J._matricesTexture,N),Ut.setOptional(W,J,"batchingIdTexture"),Ut.setValue(W,"batchingIdTexture",J._indirectTexture,N),Ut.setOptional(W,J,"batchingColorTexture"),J._colorsTexture!==null&&Ut.setValue(W,"batchingColorTexture",J._colorsTexture,N));const cn=se.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&ut.update(J,se,nn),(dn||tt.receiveShadow!==J.receiveShadow)&&(tt.receiveShadow=J.receiveShadow,Ut.setValue(W,"receiveShadow",J.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(sn.envMap.value=Ye,sn.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&K.environment!==null&&(sn.envMapIntensity.value=K.environmentIntensity),dn&&(Ut.setValue(W,"toneMappingExposure",w.toneMappingExposure),tt.needsLights&&bs(sn,On),Ee&&oe.fog===!0&&Ne.refreshFogUniforms(sn,Ee),Ne.refreshMaterialUniforms(sn,oe,ce,ye,_.state.transmissionRenderTarget[A.id]),ds.upload(W,Fr(tt),sn,N)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(ds.upload(W,Fr(tt),sn,N),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Ut.setValue(W,"center",J.center),Ut.setValue(W,"modelViewMatrix",J.modelViewMatrix),Ut.setValue(W,"normalMatrix",J.normalMatrix),Ut.setValue(W,"modelMatrix",J.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const on=oe.uniformsGroups;for(let an=0,s=on.length;an<s;an++){const a=on[an];Y.update(a,nn),Y.bind(a,nn)}}return nn}function bs(A,K){A.ambientLightColor.needsUpdate=K,A.lightProbe.needsUpdate=K,A.directionalLights.needsUpdate=K,A.directionalLightShadows.needsUpdate=K,A.pointLights.needsUpdate=K,A.pointLightShadows.needsUpdate=K,A.spotLights.needsUpdate=K,A.spotLightShadows.needsUpdate=K,A.rectAreaLights.needsUpdate=K,A.hemisphereLights.needsUpdate=K}function ws(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(A,K,se){it.get(A.texture).__webglTexture=K,it.get(A.depthTexture).__webglTexture=se;const oe=it.get(A);oe.__hasExternalTextures=!0,oe.__autoAllocateDepthBuffer=se===void 0,oe.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,K){const se=it.get(A);se.__webglFramebuffer=K,se.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(A,K=0,se=0){G=A,F=K,O=se;let oe=!0,J=null,Ee=!1,Le=!1;if(A){const Ye=it.get(A);if(Ye.__useDefaultFramebuffer!==void 0)Qe.bindFramebuffer(W.FRAMEBUFFER,null),oe=!1;else if(Ye.__webglFramebuffer===void 0)N.setupRenderTarget(A);else if(Ye.__hasExternalTextures)N.rebindTextures(A,it.get(A.texture).__webglTexture,it.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ke=A.depthTexture;if(Ye.__boundDepthTexture!==Ke){if(Ke!==null&&it.has(Ke)&&(A.width!==Ke.image.width||A.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(A)}}const ht=A.texture;(ht.isData3DTexture||ht.isDataArrayTexture||ht.isCompressedArrayTexture)&&(Le=!0);const ot=it.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ot[K])?J=ot[K][se]:J=ot[K],Ee=!0):A.samples>0&&N.useMultisampledRTT(A)===!1?J=it.get(A).__webglMultisampledFramebuffer:Array.isArray(ot)?J=ot[se]:J=ot,z.copy(A.viewport),ee.copy(A.scissor),Q=A.scissorTest}else z.copy(je).multiplyScalar(ce).floor(),ee.copy(dt).multiplyScalar(ce).floor(),Q=Et;if(Qe.bindFramebuffer(W.FRAMEBUFFER,J)&&oe&&Qe.drawBuffers(A,J),Qe.viewport(z),Qe.scissor(ee),Qe.setScissorTest(Q),Ee){const Ye=it.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ye.__webglTexture,se)}else if(Le){const Ye=it.get(A.texture),ht=K||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ye.__webglTexture,se||0,ht)}R=-1},this.readRenderTargetPixels=function(A,K,se,oe,J,Ee,Le){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=it.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Ge=Ge[Le]),Ge){Qe.bindFramebuffer(W.FRAMEBUFFER,Ge);try{const Ye=A.texture,ht=Ye.format,ot=Ye.type;if(!yt.textureFormatReadable(ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=A.width-oe&&se>=0&&se<=A.height-J&&W.readPixels(K,se,oe,J,mt.convert(ht),mt.convert(ot),Ee)}finally{const Ye=G!==null?it.get(G).__webglFramebuffer:null;Qe.bindFramebuffer(W.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(A,K,se,oe,J,Ee,Le){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=it.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Ge=Ge[Le]),Ge){const Ye=A.texture,ht=Ye.format,ot=Ye.type;if(!yt.textureFormatReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=A.width-oe&&se>=0&&se<=A.height-J){Qe.bindFramebuffer(W.FRAMEBUFFER,Ge);const Ke=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Ke),W.bufferData(W.PIXEL_PACK_BUFFER,Ee.byteLength,W.STREAM_READ),W.readPixels(K,se,oe,J,mt.convert(ht),mt.convert(ot),0);const bt=G!==null?it.get(G).__webglFramebuffer:null;Qe.bindFramebuffer(W.FRAMEBUFFER,bt);const Lt=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await qc(W,Lt,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Ke),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Ee),W.deleteBuffer(Ke),W.deleteSync(Lt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,K=null,se=0){A.isTexture!==!0&&(Zi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,A=arguments[1]);const oe=Math.pow(2,-se),J=Math.floor(A.image.width*oe),Ee=Math.floor(A.image.height*oe),Le=K!==null?K.x:0,Ge=K!==null?K.y:0;N.setTexture2D(A,0),W.copyTexSubImage2D(W.TEXTURE_2D,se,0,0,Le,Ge,J,Ee),Qe.unbindTexture()};const As=W.createFramebuffer(),Cs=W.createFramebuffer();this.copyTextureToTexture=function(A,K,se=null,oe=null,J=0,Ee=null){A.isTexture!==!0&&(Zi("WebGLRenderer: copyTextureToTexture function signature has changed."),oe=arguments[0]||null,A=arguments[1],K=arguments[2],Ee=arguments[3]||0,se=null),Ee===null&&(J!==0?(Zi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=J,J=0):Ee=0);let Le,Ge,Ye,ht,ot,Ke,bt,Lt,Vt;const Gt=A.isCompressedTexture?A.mipmaps[Ee]:A.image;if(se!==null)Le=se.max.x-se.min.x,Ge=se.max.y-se.min.y,Ye=se.isBox3?se.max.z-se.min.z:1,ht=se.min.x,ot=se.min.y,Ke=se.isBox3?se.min.z:0;else{const cn=Math.pow(2,-J);Le=Math.floor(Gt.width*cn),Ge=Math.floor(Gt.height*cn),A.isDataArrayTexture?Ye=Gt.depth:A.isData3DTexture?Ye=Math.floor(Gt.depth*cn):Ye=1,ht=0,ot=0,Ke=0}oe!==null?(bt=oe.x,Lt=oe.y,Vt=oe.z):(bt=0,Lt=0,Vt=0);const Rt=mt.convert(K.format),tt=mt.convert(K.type);let jt;K.isData3DTexture?(N.setTexture3D(K,0),jt=W.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(N.setTexture2DArray(K,0),jt=W.TEXTURE_2D_ARRAY):(N.setTexture2D(K,0),jt=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,K.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,K.unpackAlignment);const _t=W.getParameter(W.UNPACK_ROW_LENGTH),nn=W.getParameter(W.UNPACK_IMAGE_HEIGHT),ri=W.getParameter(W.UNPACK_SKIP_PIXELS),dn=W.getParameter(W.UNPACK_SKIP_ROWS),On=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,Gt.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Gt.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,ht),W.pixelStorei(W.UNPACK_SKIP_ROWS,ot),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Ke);const Ut=A.isDataArrayTexture||A.isData3DTexture,sn=K.isDataArrayTexture||K.isData3DTexture;if(A.isDepthTexture){const cn=it.get(A),on=it.get(K),an=it.get(cn.__renderTarget),s=it.get(on.__renderTarget);Qe.bindFramebuffer(W.READ_FRAMEBUFFER,an.__webglFramebuffer),Qe.bindFramebuffer(W.DRAW_FRAMEBUFFER,s.__webglFramebuffer);for(let a=0;a<Ye;a++)Ut&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,it.get(A).__webglTexture,J,Ke+a),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,it.get(K).__webglTexture,Ee,Vt+a)),W.blitFramebuffer(ht,ot,Le,Ge,bt,Lt,Le,Ge,W.DEPTH_BUFFER_BIT,W.NEAREST);Qe.bindFramebuffer(W.READ_FRAMEBUFFER,null),Qe.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(J!==0||A.isRenderTargetTexture||it.has(A)){const cn=it.get(A),on=it.get(K);Qe.bindFramebuffer(W.READ_FRAMEBUFFER,As),Qe.bindFramebuffer(W.DRAW_FRAMEBUFFER,Cs);for(let an=0;an<Ye;an++)Ut?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,cn.__webglTexture,J,Ke+an):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,cn.__webglTexture,J),sn?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,on.__webglTexture,Ee,Vt+an):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,on.__webglTexture,Ee),J!==0?W.blitFramebuffer(ht,ot,Le,Ge,bt,Lt,Le,Ge,W.COLOR_BUFFER_BIT,W.NEAREST):sn?W.copyTexSubImage3D(jt,Ee,bt,Lt,Vt+an,ht,ot,Le,Ge):W.copyTexSubImage2D(jt,Ee,bt,Lt,ht,ot,Le,Ge);Qe.bindFramebuffer(W.READ_FRAMEBUFFER,null),Qe.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else sn?A.isDataTexture||A.isData3DTexture?W.texSubImage3D(jt,Ee,bt,Lt,Vt,Le,Ge,Ye,Rt,tt,Gt.data):K.isCompressedArrayTexture?W.compressedTexSubImage3D(jt,Ee,bt,Lt,Vt,Le,Ge,Ye,Rt,Gt.data):W.texSubImage3D(jt,Ee,bt,Lt,Vt,Le,Ge,Ye,Rt,tt,Gt):A.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Ee,bt,Lt,Le,Ge,Rt,tt,Gt.data):A.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Ee,bt,Lt,Gt.width,Gt.height,Rt,Gt.data):W.texSubImage2D(W.TEXTURE_2D,Ee,bt,Lt,Le,Ge,Rt,tt,Gt);W.pixelStorei(W.UNPACK_ROW_LENGTH,_t),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,nn),W.pixelStorei(W.UNPACK_SKIP_PIXELS,ri),W.pixelStorei(W.UNPACK_SKIP_ROWS,dn),W.pixelStorei(W.UNPACK_SKIP_IMAGES,On),Ee===0&&K.generateMipmaps&&W.generateMipmap(jt),Qe.unbindTexture()},this.copyTextureToTexture3D=function(A,K,se=null,oe=null,J=0){return A.isTexture!==!0&&(Zi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),se=arguments[0]||null,oe=arguments[1]||null,A=arguments[2],K=arguments[3],J=arguments[4]||0),Zi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,K,se,oe,J)},this.initRenderTarget=function(A){it.get(A).__webglFramebuffer===void 0&&N.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?N.setTextureCube(A,0):A.isData3DTexture?N.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?N.setTexture2DArray(A,0):N.setTexture2D(A,0),Qe.unbindTexture()},this.resetState=function(){F=0,O=0,G=null,Qe.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Pt._getUnpackColorSpace()}}var ti={cherry:14900586,blue:1401021,white:14209233,black:0,brown:5845806,peach:16767673,yellow:16776960,olive:5597999,grey:6908265,sand:12759680,brownDark:2300175,green:6723840},Bn=Math.PI/180;function fm(i){var e,t,n,r,o,l,u,h,d,p,g,v,x,S,C;y();function y(){e=i._element,o=new Es({alpha:!0,antialias:!0}),o.setSize(e.clientWidth,e.clientHeight),o.shadowMap.enabled=!0,e.appendChild(o.domElement),t=new ys,S=4e4,t.fog=new xs(12245988,1,S),n=new fn(60,e.clientWidth/e.clientHeight,1,12e4),n.position.set(0,1500,-2e3),n.lookAt(new Z(0,600,-5e3)),window.camera=n,window.addEventListener("resize",U,!1),l=new jl(16777215,16777215,1),t.add(l),r=new dm,t.add(r.element);var B=Tr(3e3,20,12e4,ti.sand,0,-400,-6e4);t.add(B),u=[],v=.2,x=.5;for(var F=10;F<40;F++)D(F*-3e3,v,.5,x);C=!1,h=!0;var O=37,G=38,R=39,T=80;const z=document.getElementById("btnLeft"),ee=document.getElementById("btnRight");z==null||z.addEventListener("click",function(){console.log("clickleft"),h&&!w()&&(h=!1,r.onUnpause()),h||r.onLeftKeyPressed()}),ee==null||ee.addEventListener("click",function(){console.log("clicRight"),h&&!w()&&(h=!1,r.onUnpause()),h||r.onRightKeyPressed()}),d={},document.addEventListener("keydown",function(Q){if(!C){var le=Q.keyCode;if(d[le]===!1)return;d[le]=!1,h&&!w()&&le>18?(h=!1,r.onUnpause()):(le==T&&(h=!0,r.onPause(),i.output({msg:"Game is paused. Press any key to resume."})),le==G&&!h&&r.onUpKeyPressed(),le==O&&!h&&r.onLeftKeyPressed(),le==R&&!h&&r.onRightKeyPressed())}}),document.addEventListener("keyup",function(Q){d[Q.keyCode]=!0}),document.addEventListener("focus",function(Q){d={}}),p=0,g=0,document.getElementById("score").innerHTML=p,_()}function _(){if(!h){if(u[u.length-1].mesh.position.z%3e3==0){g+=1;var B=30;if(g%B==0){var F=g/B;switch(F){case 1:v=.35,x=.5;break;case 2:v=.35,x=.85;break;case 3:v=.5,x=.85;break;case 4:v=.5,x=1.1;break;case 5:v=.5,x=1.1;break;case 6:v=.55,x=1.1;break;default:v=.55,x=1.25}}g>=5*B&&g<6*B?S-=25e3/B:g>=8*B&&g<9*B&&(S-=5e3/B),D(-12e4,v,.5,x),t.fog.far=S}if(u.forEach(function(Q){Q.mesh.position.z+=100}),u=u.filter(function(Q){return Q.mesh.position.z<0}),r.update(),w()){C=!0,h=!0,document.addEventListener("keydown",function(le){le.keyCode==40&&document.location.reload(!0)});let Q="Game over!";var O=["Typical Engineer","Couch Potato","Weekend Jogger","Daily Runner","Local Prospect","Regional Star","National Champ","Second Mo Farah"],G=Math.floor(p/15e3),R="";R=G<=6?"".concat(G*15,"k-",(G+1)*15,"k").bold():p<124e3?"105k-124k".bold():"124k+".bold();var T=G<=6?"Congrats! You're a ".concat(O[G],"!").bold():p<124e3?"Congrats! You're a ".concat(O[7],"!").bold():"Congrats! You exceeded the creator's high score of 123790 and beat the game!".bold();R=R+" "+T,p>=12e4&&(G=7);for(var z="",ee=0;ee<G;ee++)z=z+" "+"".concat(ee*15,"k-",(ee+1)*15,"k"),z=z+" "+O[ee];p>124e3&&(z=z+" 105k-124k",z=z+" "+O[7]),i.output({score:p,msg:[Q,R,z]})}p+=10,i.output({score:p})}o.render(t,n),requestAnimationFrame(_)}function U(){o.setSize(e.clientWidth,e.clientHeight),n.aspect=e.clientWidth/e.clientHeight,n.updateProjectionMatrix()}function D(B,F,O,G){for(var R=-1;R<2;R++){var T=Math.random();if(T<F){var z=O+(G-O)*Math.random(),ee=new pm(R*800,-400,B,z);u.push(ee),t.add(ee.mesh)}}}function w(){for(var B=r.element.position.x-115,F=r.element.position.x+115,O=r.element.position.y-310,G=r.element.position.y+320,R=r.element.position.z-40,T=r.element.position.z+40,z=0;z<u.length;z++)if(u[z].collides(B,F,O,G,R,T))return!0;return!1}}function dm(){var i=this;this.skinColor=ti.brown,this.hairColor=ti.black,this.shirtColor=ti.yellow,this.shortsColor=ti.olive,this.jumpDuration=.6,this.jumpHeight=2e3,e();function e(){i.face=Tr(100,100,60,i.skinColor,0,0,0),i.hair=Tr(105,20,65,i.hairColor,0,50,0),i.head=lo(0,260,-25),i.head.add(i.face),i.head.add(i.hair),i.torso=Tr(150,190,40,i.shirtColor,0,100,0),i.leftLowerArm=t(20,120,30,i.skinColor,0,-170,0),i.leftArm=t(30,140,40,i.skinColor,-100,190,-10),i.leftArm.add(i.leftLowerArm),i.rightLowerArm=t(20,120,30,i.skinColor,0,-170,0),i.rightArm=t(30,140,40,i.skinColor,100,190,-10),i.rightArm.add(i.rightLowerArm),i.leftLowerLeg=t(40,200,40,i.skinColor,0,-200,0),i.leftLeg=t(50,170,50,i.shortsColor,-50,-10,30),i.leftLeg.add(i.leftLowerLeg),i.rightLowerLeg=t(40,200,40,i.skinColor,0,-200,0),i.rightLeg=t(50,170,50,i.shortsColor,50,-10,30),i.rightLeg.add(i.rightLowerLeg),i.element=lo(0,0,-4e3),i.element.add(i.head),i.element.add(i.torso),i.element.add(i.leftArm),i.element.add(i.rightArm),i.element.add(i.leftLeg),i.element.add(i.rightLeg),i.isJumping=!1,i.isSwitchingLeft=!1,i.isSwitchingRight=!1,i.currentLane=0,i.runningStartTime=new Date/1e3,i.pauseStartTime=new Date/1e3,i.stepFreq=2,i.queuedActions=[]}function t(n,r,o,l,u,h,d){var p=lo(u,h,d),g=-1*(Math.max(n,o)/2+r/2),v=Tr(n,r,o,l,0,g,0);return p.add(v),p}this.update=function(){var n=new Date/1e3;if(!i.isJumping&&!i.isSwitchingLeft&&!i.isSwitchingRight&&i.queuedActions.length>0)switch(i.queuedActions.shift()){case"up":i.isJumping=!0,i.jumpStartTime=new Date/1e3;break;case"left":i.currentLane!=-1&&(i.isSwitchingLeft=!0);break;case"right":i.currentLane!=1&&(i.isSwitchingRight=!0);break}if(i.isJumping){var r=n-i.jumpStartTime;i.element.position.y=i.jumpHeight*Math.sin(1/i.jumpDuration*Math.PI*r)+Tn(2*i.stepFreq,0,20,0,i.jumpStartTime-i.runningStartTime),r>i.jumpDuration&&(i.isJumping=!1,i.runningStartTime+=i.jumpDuration)}else{var o=n-i.runningStartTime;if(i.element.position.y=Tn(2*i.stepFreq,0,20,0,o),i.head.rotation.x=Tn(2*i.stepFreq,-10,-5,0,o)*Bn,i.torso.rotation.x=Tn(2*i.stepFreq,-10,-5,180,o)*Bn,i.leftArm.rotation.x=Tn(i.stepFreq,-70,50,180,o)*Bn,i.rightArm.rotation.x=Tn(i.stepFreq,-70,50,0,o)*Bn,i.leftLowerArm.rotation.x=Tn(i.stepFreq,70,140,180,o)*Bn,i.rightLowerArm.rotation.x=Tn(i.stepFreq,70,140,0,o)*Bn,i.leftLeg.rotation.x=Tn(i.stepFreq,-20,80,0,o)*Bn,i.rightLeg.rotation.x=Tn(i.stepFreq,-20,80,180,o)*Bn,i.leftLowerLeg.rotation.x=Tn(i.stepFreq,-130,5,240,o)*Bn,i.rightLowerLeg.rotation.x=Tn(i.stepFreq,-130,5,60,o)*Bn,i.isSwitchingLeft){i.element.position.x-=200;var l=i.currentLane*800-i.element.position.x;l>800&&(i.currentLane-=1,i.element.position.x=i.currentLane*800,i.isSwitchingLeft=!1)}if(i.isSwitchingRight){i.element.position.x+=200;var l=i.element.position.x-i.currentLane*800;l>800&&(i.currentLane+=1,i.element.position.x=i.currentLane*800,i.isSwitchingRight=!1)}}},this.onLeftKeyPressed=function(){i.queuedActions.push("left")},this.onUpKeyPressed=function(){i.queuedActions.push("up")},this.onRightKeyPressed=function(){i.queuedActions.push("right")},this.onPause=function(){i.pauseStartTime=new Date/1e3},this.onUnpause=function(){var n=new Date/1e3,r=n-i.pauseStartTime;i.runningStartTime+=r,i.isJumping&&(i.jumpStartTime+=r)}}function pm(i,e,t,n){var r=this;this.mesh=new Qt;var o=os(1,300,300,4,ti.green,0,1e3,0),l=os(1,400,400,4,ti.green,0,800,0),u=os(1,500,500,4,ti.green,0,500,0),h=os(100,100,250,32,ti.brownDark,0,125,0);this.mesh.add(o),this.mesh.add(l),this.mesh.add(u),this.mesh.add(h),this.mesh.position.set(i,e,t),this.mesh.scale.set(n,n,n),this.scale=n,this.collides=function(d,p,g,v,x,S){var C=r.mesh.position.x-this.scale*250,y=r.mesh.position.x+this.scale*250,_=r.mesh.position.y,U=r.mesh.position.y+this.scale*1150,D=r.mesh.position.z-this.scale*250,w=r.mesh.position.z+this.scale*250;return C<=p&&y>=d&&_<=v&&U>=g&&D<=S&&w>=x}}function Tn(i,e,t,n,r){var o=.5*(t-e),l=2*Math.PI*i,u=n*Math.PI/180,h=o*Math.sin(l*r+u),d=(e+t)/2;return d+h}function lo(i,e,t){var n=new Ji;return n.position.set(i,e,t),n}function Tr(i,e,t,n,r,o,l,u){var h=new vi(i,e,t),d=new mi({color:n,flatShading:u!=!0}),p=new Jt(h,d);return p.castShadow=!0,p.receiveShadow=!0,p.position.set(r,o,l),p}function os(i,e,t,n,r,o,l,u){var h=new Ur(i,e,t,n),d=new mi({color:r,flatShading:!0}),p=new Jt(h,d);return p.castShadow=!0,p.receiveShadow=!0,p.position.set(o,l,u),p}function mm({_element:i,output:e}){const t=i;let n=0,r=new ys,o=new fn(75,t.clientWidth/t.clientHeight,.1,1e3),l=new Es;l.setSize(t.clientWidth,t.clientHeight),t.appendChild(l.domElement);const u=new gn,h=new aa({color:16777215}),d=[];for(let c=0;c<1e3;c++){const Ue=(Math.random()-.5)*200,je=(Math.random()-.5)*200,dt=(Math.random()-.5)*200;d.push(Ue,je,dt)}u.setAttribute("position",new Yt(d,3));const p=new Wl(u,h);r.add(p);const g=new ua(2,.5,16,100),v=new wr({color:65280}),x=new Jt(g,v);r.add(x),new Ur(1,1,.1,32),new wr({color:255});const S=new Ms(1.5,32,32),C=new wr({color:255}),y=new Jt(S,C);y.rotation.x=Math.PI/2,y.position.z=-10,r.add(y),o.position.z=5;let _=!1,U=!1,D=!1,w=5,B=5;e({score:0,msg:[`Speed: ${B}`]});const F=new Hands({locateFile:c=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${c}`});F.setOptions({maxNumHands:1,modelComplexity:1,minDetectionConfidence:.5,minTrackingConfidence:.5}),F.onResults(O);function O(c){if(c.multiHandLandmarks&&c.multiHandLandmarks.length>0){const je=c.multiHandLandmarks[0][0],dt=(je.x-.5)*20,Et=(.5-je.y)*20;y.position.x=dt,y.position.y=Et}}const G=()=>{const c=document.querySelector("#speed");c&&(c.innerHTML=`speed is ${B}`)},R=c=>(n=c,e({score:c,msg:[`Speed: ${B}`]}),n);function T(){x.position.z=-50,D?(x.position.x=0,x.position.y=0,D=!1):(x.position.x=(Math.random()-.5)*10,x.position.y=(Math.random()-.5)*10)}function z(){const c=Math.sqrt(Math.pow(y.position.x-x.position.x,2)+Math.pow(y.position.y-x.position.y,2));Math.abs(y.position.z-x.position.z)<.1&&c<1.5&&(console.log("Il disco è passato attraverso la ciambella!"),U||(B=B+w,R(n+1),U=!0))}function ee(){return B/100}window.addEventListener("resize",()=>{o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)});function Q(c){c==="KeyS"?(_=!_,console.log("s",_)):c==="KeyA"?(B=B+w,G()):c==="KeyD"?(B=B-w,G()):c==="KeyR"?D=!0:c==="ArrowLeft"?y.position.x-=1:c==="ArrowRight"?y.position.x+=1:c==="ArrowUp"?y.position.y+=1:c==="ArrowDown"&&(y.position.y-=1)}function le(){requestAnimationFrame(le),_||(x.position.z+=ee()),z(),x.position.z>o.position.z+5&&(U=!1,T()),p.position.z+=.1,p.position.z>50&&(p.position.z=-50),l.render(r,o)}function de(){Q("ArrowLeft")}function X(){Q("ArrowRight")}function ye(){Q("ArrowUp")}function ce(){Q("ArrowDown")}return{animate:le,clickLeft:de,clickRight:X,clickUp:ye,clickDown:ce}}function gm(i){const e=document.createElement("script");e.src="/assets/js/Box2dWeb.min.js",e.onload=i,document.head.appendChild(e)}function _m(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),o={},l={},u=i[0].morphTargetsRelative,h=new gn;let d=0;for(let p=0;p<i.length;++p){const g=i[p];let v=0;if(t!==(g.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const x in g.attributes){if(!n.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+'. All geometries must have compatible attributes; make sure "'+x+'" attribute exists among all geometries, or in none of them.'),null;o[x]===void 0&&(o[x]=[]),o[x].push(g.attributes[x]),v++}if(v!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". Make sure all geometries have the same number of attributes."),null;if(u!==g.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const x in g.morphAttributes){if(!r.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+".  .morphAttributes must be consistent throughout all geometries."),null;l[x]===void 0&&(l[x]=[]),l[x].push(g.morphAttributes[x])}if(e){let x;if(t)x=g.index.count;else if(g.attributes.position!==void 0)x=g.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". The geometry must have either an index or a position attribute"),null;h.addGroup(d,x,p),d+=x}}if(t){let p=0;const g=[];for(let v=0;v<i.length;++v){const x=i[v].index;for(let S=0;S<x.count;++S)g.push(x.getX(S)+p);p+=i[v].attributes.position.count}h.setIndex(g)}for(const p in o){const g=ml(o[p]);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+p+" attribute."),null;h.setAttribute(p,g)}for(const p in l){const g=l[p][0].length;if(g===0)break;h.morphAttributes=h.morphAttributes||{},h.morphAttributes[p]=[];for(let v=0;v<g;++v){const x=[];for(let C=0;C<l[p].length;++C)x.push(l[p][C][v]);const S=ml(x);if(!S)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+p+" morphAttribute."),null;h.morphAttributes[p].push(S)}}return h}function ml(i){let e,t,n,r=-1,o=0;for(let d=0;d<i.length;++d){const p=i[d];if(e===void 0&&(e=p.array.constructor),e!==p.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=p.itemSize),t!==p.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=p.normalized),n!==p.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=p.gpuType),r!==p.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=p.count*t}const l=new e(o),u=new Nn(l,t,n);let h=0;for(let d=0;d<i.length;++d){const p=i[d];if(p.isInterleavedBufferAttribute){const g=h/t;for(let v=0,x=p.count;v<x;v++)for(let S=0;S<t;S++){const C=p.getComponent(v,S);u.setComponent(v+g,S,C)}}else l.set(p.array,h);h+=p.count*t}return r!==void 0&&(u.gpuType=r),u}const vm="/assets/ball-C-u-DUMM.png",xm="/assets/brick-BH4AW7an.png",ym="/assets/concrete-BPIsGCxW.png";let hi,Sr;function Mm(i){function e(o,l,u){for(o[l][u]=!1;;){if(hi=[],l>1&&o[l-2][u]==!0&&hi.push([-1,0]),l<o.dimension-2&&o[l+2][u]==!0&&hi.push([1,0]),u>1&&o[l][u-2]==!0&&hi.push([0,-1]),u<o.dimension-2&&o[l][u+2]==!0&&hi.push([0,1]),hi.length==0)return o;Sr=hi[Math.floor(Math.random()*hi.length)],o[l+Sr[0]][u+Sr[1]]=!1,o=e(o,l+Sr[0]*2,u+Sr[1]*2)}}var t=new Array(i);t.dimension=i;for(var n=0;n<i;n++){t[n]=new Array(i);for(var r=0;r<i;r++)t[n][r]=!0}return t=e(t,1,1),t}function Sm(i){const e=i;let t,n,r,o,l,u;var h=void 0,d=void 0,p=void 0,g=void 0,v=void 0,x=void 0,S=11,C=void 0,y=void 0,_=.25,U=[0,0],D=new Js().load(vm),w=new Js().load(ym),B=new Js().load(xm),F=void 0,O=Box2D.Dynamics.b2World,G=Box2D.Dynamics.b2FixtureDef,R=Box2D.Dynamics.b2BodyDef,T=Box2D.Dynamics.b2Body,z=Box2D.Collision.Shapes.b2CircleShape,ee=Box2D.Collision.Shapes.b2PolygonShape;Box2D.Common.b2Settings;var Q=Box2D.Common.Math.b2Vec2,le=void 0,de=void 0;function X(){le=new O(new Q(0,0),!0);var He=new R;He.type=T.b2_dynamicBody,He.position.Set(1,1),de=le.CreateBody(He);var Je=new G;Je.density=1,Je.friction=0,Je.restitution=.25,Je.shape=new z(_),de.CreateFixture(Je),He.type=T.b2_staticBody,Je.shape=new ee,Je.shape.SetAsBox(.5,.5);for(var gt=0;gt<v.dimension;gt++)for(var ct=0;ct<v.dimension;ct++)v[gt][ct]&&(He.position.x=gt,He.position.y=ct,le.CreateBody(He).CreateFixture(Je))}function ye(He){const Je=[],gt=new vi(1,1,1);for(let qt=0;qt<He.dimension;qt++)for(let pt=0;pt<He.dimension;pt++)if(He[qt][pt]){const yt=new zt;yt.makeTranslation(qt,pt,.5);const Qe=gt.clone();Qe.applyMatrix4(yt),Je.push(Qe)}const ct=_m(Je),kt=new mi({map:B});return new Jt(ct,kt)}function ce(){d=new ys,g=new wu(16777215,1),g.position.set(1,1,1.3),d.add(g),t=new Ms(_,32,16),n=new mi({map:D}),y=new Jt(t,n),y.position.set(1,1,_),d.add(y);var He=window.innerWidth/window.innerHeight;h=new fn(60,He,1,1e3),h.position.set(1,1,5),d.add(h),x=ye(v),d.add(x),t=new Ir(S*10,S*10,S,S),w.wrapS=w.wrapT=ps,w.repeat.set(S*5,S*5),n=new mi({map:w}),C=new Jt(t,n),C.position.set((S-1)/2,(S-1)/2,0),C.rotation.set(Math.PI/2,0,0),d.add(C)}function c(){var He=de.GetLinearVelocity();He.Multiply(.95),de.SetLinearVelocity(He);var Je=new Q(U[0]*de.GetMass()*.25*8,U[1]*de.GetMass()*.25*8);de.ApplyImpulse(Je,de.GetPosition()),U=[0,0],le.Step(1/60,8,3)}function Ue(){var He=de.GetPosition().x-y.position.x,Je=de.GetPosition().y-y.position.y;y.position.x+=He,y.position.y+=Je;var gt=new zt;gt.makeRotationAxis(new Z(0,1,0),He/_),gt.multiply(y.matrix),y.matrix=gt,gt=new zt,gt.makeRotationAxis(new Z(1,0,0),-Je/_),gt.multiply(y.matrix),y.matrix=gt,y.rotation.setFromRotationMatrix(y.matrix),h.position.x+=(y.position.x-h.position.x)*.1,h.position.y+=(y.position.y-h.position.y)*.1,h.position.z+=(5-h.position.z)*.1,g.position.x=h.position.x,g.position.y=h.position.y,g.position.z=h.position.z-3.7}function je(){switch(F){case"initialize":v=Mm(S),v[S-1][S-2]=!1,X(),ce(),h.position.set(1,1,5),g.position.set(1,1,1.3),g.intensity=0,F="fade in";break;case"fade in":g.intensity+=.1*(1-g.intensity),p.render(d,h),Math.abs(g.intensity-1)<.05&&(g.intensity=1,F="play");break;case"play":c(),Ue(),p.render(d,h);var He=Math.floor(y.position.x+.5),Je=Math.floor(y.position.y+.5);He==S&&Je==S-2&&(S+=2,F="fade out");break;case"fade out":c(),Ue(),g.intensity+=.1*(0-g.intensity),p.render(d,h),Math.abs(g.intensity-0)<.1&&(g.intensity=0,p.render(d,h),F="initialize");break}requestAnimationFrame(je)}function dt(){p.setSize(window.innerWidth,window.innerHeight),h.aspect=window.innerWidth/window.innerHeight,h.updateProjectionMatrix()}function Et(He){U=He.slice(0)}jQuery.fn.centerv=function(){return r=window.innerHeight,o=this.outerHeight(),this.css("position","absolute"),this.css("top",Math.max(0,(r-o)/2)+"px"),this},jQuery.fn.centerh=function(){return l=window.innerWidth,u=this.outerWidth(),this.css("position","absolute"),this.css("left",Math.max(0,(l-u)/2)+"px"),this},jQuery.fn.center=function(){return this.centerv(),this.centerh(),this};function pe(){p=new Es,p.setSize(e.clientWidth,e.clientHeight),e.appendChild(p.domElement),$(window).resize(dt),F="initialize",requestAnimationFrame(je)}function Te(){Et([-1,0])}function $e(){Et([1,0])}function Re(){Et([0,1])}function at(){Et([0,-1])}return{start:pe,clickLeft:Te,clickRight:$e,clickUp:Re,clickDown:at}}const Gn={cherry:14900586,blue:1401021,white:14209233,black:0,brown:5845806,peach:16767673,yellow:16776960,olive:5597999,grey:6908265,sand:12759680,brownDark:2300175,green:6723840,grayDark:6908265},zn=Math.PI/180;class Em{constructor(e,t,n,r){nt(this,"mesh");nt(this,"scale");this.x=e,this.y=t,this.z=n,this.s=r,this.mesh=new Qt;const o=new ca(600,1),l=o.attributes.position.array;for(let d=0;d<l.length;d+=3)l[d]+=Math.random()*50-25,l[d+1]+=Math.random()*50-25,l[d+2]+=Math.random()*50-25;o.computeVertexNormals();const u=new mi({color:Gn.blue,flatShading:!0}),h=new Jt(o,u);h.castShadow=!0,h.receiveShadow=!0,this.mesh.add(h),this.mesh.position.set(e,t,n),this.mesh.scale.set(r,r,r),this.scale=r}collides(e,t,n,r,o,l){const u=this.mesh.position.x-this.scale*250,h=this.mesh.position.x+this.scale*250,d=this.mesh.position.y,p=this.mesh.position.y+this.scale*1150,g=this.mesh.position.z-this.scale*250,v=this.mesh.position.z+this.scale*250;return u<=t&&h>=e&&d<=r&&p>=n&&g<=l&&v>=o}}function bn(i,e,t,n,r){const o=.5*(t-e),l=2*Math.PI*i,u=n*Math.PI/180,h=o*Math.sin(l*r+u);return(e+t)/2+h}function co(i,e,t){const n=new Ji;return n.position.set(i,e,t),n}function br(i,e,t,n,r,o,l,u){const h=new vi(i,e,t),d=new mi({color:n,flatShading:u!=!0}),p=new Jt(h,d);return p.castShadow=!0,p.receiveShadow=!0,p.position.set(r,o,l),p}function as(i,e,t,n,r,o,l,u){const h=new Ur(i,e,t,n),d=new mi({color:r,flatShading:!0}),p=new Jt(h,d);return p.castShadow=!0,p.receiveShadow=!0,p.position.set(o,l,u),p}class Tm{constructor(){nt(this,"skinColor");nt(this,"hairColor");nt(this,"shirtColor");nt(this,"shortsColor");nt(this,"jumpDuration");nt(this,"jumpHeight");nt(this,"face");nt(this,"hair");nt(this,"head");nt(this,"torso");nt(this,"leftLowerArm");nt(this,"leftArm");nt(this,"rightLowerArm");nt(this,"rightArm");nt(this,"leftLowerLeg");nt(this,"leftLeg");nt(this,"rightLowerLeg");nt(this,"rightLeg");nt(this,"element");nt(this,"isJumping",!1);nt(this,"isSwitchingLeft",!1);nt(this,"isSwitchingRight",!1);nt(this,"currentLane",0);nt(this,"runningStartTime",0);nt(this,"pauseStartTime",0);nt(this,"stepFreq",0);nt(this,"queuedActions",[]);nt(this,"jumpStartTime",0);this.skinColor=Gn.brown,this.hairColor=Gn.black,this.shirtColor=Gn.yellow,this.shortsColor=Gn.olive,this.jumpDuration=.6,this.jumpHeight=2e3}init(){this.face=br(100,100,60,this.skinColor,0,0,0),this.hair=br(105,20,65,this.hairColor,0,50,0),this.head=co(0,260,-25),this.head.add(this.face),this.head.add(this.hair),this.torso=br(150,190,40,this.shirtColor,0,100,0),this.leftLowerArm=this.createLimb(20,120,30,this.skinColor,0,-170,0),this.leftArm=this.createLimb(30,140,40,this.skinColor,-100,190,-10),this.leftArm.add(this.leftLowerArm),this.rightLowerArm=this.createLimb(20,120,30,this.skinColor,0,-170,0),this.rightArm=this.createLimb(30,140,40,this.skinColor,100,190,-10),this.rightArm.add(this.rightLowerArm),this.leftLowerLeg=this.createLimb(40,200,40,this.skinColor,0,-200,0),this.leftLeg=this.createLimb(50,170,50,this.shortsColor,-50,-10,30),this.leftLeg.add(this.leftLowerLeg),this.rightLowerLeg=this.createLimb(40,200,40,this.skinColor,0,-200,0),this.rightLeg=this.createLimb(50,170,50,this.shortsColor,50,-10,30),this.rightLeg.add(this.rightLowerLeg),this.element=co(0,0,-4e3),this.element.add(this.head),this.element.add(this.torso),this.element.add(this.leftArm),this.element.add(this.rightArm),this.element.add(this.leftLeg),this.element.add(this.rightLeg),this.isJumping=!1,this.isSwitchingLeft=!1,this.isSwitchingRight=!1,this.currentLane=0,this.runningStartTime=new Date().getTime()/1e3,this.pauseStartTime=new Date().getTime()/1e3,this.stepFreq=2,this.queuedActions=[]}createLimb(e,t,n,r,o,l,u){var h=co(o,l,u),d=-1*(Math.max(e,n)/2+t/2),p=br(e,t,n,r,0,d,0);return h.add(p),h}update(){const e=new Date().getTime()/1e3;if(!this.isJumping&&!this.isSwitchingLeft&&!this.isSwitchingRight&&this.queuedActions.length>0)switch(this.queuedActions.shift()){case"up":this.isJumping=!0,this.jumpStartTime=new Date().getTime()/1e3;break;case"left":this.currentLane!=-1&&(this.isSwitchingLeft=!0);break;case"right":this.currentLane!=1&&(this.isSwitchingRight=!0);break}if(this.isJumping){var t=e-this.jumpStartTime;this.element.position.y=this.jumpHeight*Math.sin(1/this.jumpDuration*Math.PI*t)+bn(2*this.stepFreq,0,20,0,this.jumpStartTime-this.runningStartTime),t>this.jumpDuration&&(this.isJumping=!1,this.runningStartTime+=this.jumpDuration)}else{var n=e-this.runningStartTime;if(this.element.position.y=bn(2*this.stepFreq,0,20,0,n),this.head.rotation.x=bn(2*this.stepFreq,-10,-5,0,n)*zn,this.torso.rotation.x=bn(2*this.stepFreq,-10,-5,180,n)*zn,this.leftArm.rotation.x=bn(this.stepFreq,-70,50,180,n)*zn,this.rightArm.rotation.x=bn(this.stepFreq,-70,50,0,n)*zn,this.leftLowerArm.rotation.x=bn(this.stepFreq,70,140,180,n)*zn,this.rightLowerArm.rotation.x=bn(this.stepFreq,70,140,0,n)*zn,this.leftLeg.rotation.x=bn(this.stepFreq,-20,80,0,n)*zn,this.rightLeg.rotation.x=bn(this.stepFreq,-20,80,180,n)*zn,this.leftLowerLeg.rotation.x=bn(this.stepFreq,-130,5,240,n)*zn,this.rightLowerLeg.rotation.x=bn(this.stepFreq,-130,5,60,n)*zn,this.isSwitchingLeft){this.element.position.x-=200;var r=this.currentLane*800-this.element.position.x;r>800&&(this.currentLane-=1,this.element.position.x=this.currentLane*800,this.isSwitchingLeft=!1)}if(this.isSwitchingRight){this.element.position.x+=200;var r=this.element.position.x-this.currentLane*800;r>800&&(this.currentLane+=1,this.element.position.x=this.currentLane*800,this.isSwitchingRight=!1)}}}onLeftKeyPressed(){this.queuedActions.push("left")}onUpKeyPressed(){this.queuedActions.push("up")}onRightKeyPressed(){this.queuedActions.push("right")}onPause(){this.pauseStartTime=new Date().getTime()/1e3}onUnpause(){var e=new Date().getTime()/1e3,t=e-this.pauseStartTime;this.runningStartTime+=t,this.isJumping&&(this.jumpStartTime+=t)}}class bm{constructor(e,t,n,r){nt(this,"mesh");nt(this,"scale");this.x=e,this.y=t,this.z=n,this.s=r,this.mesh=new Qt;const o=as(1,300,300,4,Gn.green,0,1e3,0),l=as(1,400,400,4,Gn.green,0,800,0),u=as(1,500,500,4,Gn.green,0,500,0),h=as(100,100,250,32,Gn.brownDark,0,125,0);this.mesh.add(o),this.mesh.add(l),this.mesh.add(u),this.mesh.add(h),this.mesh.position.set(e,t,n),this.mesh.scale.set(r,r,r),this.scale=r}collides(e,t,n,r,o,l){const u=this.mesh.position.x-this.scale*250,h=this.mesh.position.x+this.scale*250,d=this.mesh.position.y,p=this.mesh.position.y+this.scale*1150,g=this.mesh.position.z-this.scale*250,v=this.mesh.position.z+this.scale*250;return u<=t&&h>=e&&d<=r&&p>=n&&g<=l&&v>=o}}const gl=37,_l=38,vl=39,wm=80;class Am{constructor(e){nt(this,"element");nt(this,"scene");nt(this,"camera");nt(this,"character");nt(this,"renderer");nt(this,"light");nt(this,"stars");nt(this,"objects",[]);nt(this,"paused",!1);nt(this,"keysAllowed",{});nt(this,"score");nt(this,"difficulty");nt(this,"treePresenceProb");nt(this,"maxTreeSize");nt(this,"gameOver");nt(this,"fogDistance");nt(this,"_output");nt(this,"onPause",()=>{console.warn("noPauseDefined")});nt(this,"onResume",()=>{console.warn("noResumeDefined")});nt(this,"onCollisionDetected",e=>{console.warn("onCollisionDetected")});nt(this,"onScoreChanged",e=>{console.warn("onCollisionDetected")});nt(this,"keyUp",e=>{console.log("keyUp",e.keyCode),this.keysAllowed[e.keyCode]=!0});nt(this,"onFocus",()=>{console.log("onFocus"),this.keysAllowed={}});nt(this,"onKeyDown",e=>{console.log("onKeyDownPressed",e);const t=e.keyCode;this.handleKeyPress(t)});this.element=e._element,this._output=e.output,this.renderer=new Es({alpha:!0,antialias:!0}),this.renderer.setSize(this.element.clientWidth,this.element.clientHeight),this.renderer.shadowMap.enabled=!0,this.element.appendChild(this.renderer.domElement),this.scene=new ys,this.fogDistance=4e4,this.scene.fog=new xs(16777215,1,this.fogDistance),this.camera=new fn(60,this.element.clientWidth/this.element.clientHeight,1,12e4),this.camera.position.set(0,1500,-2e3),this.camera.lookAt(new Z(0,600,-5e3)),window.addEventListener("resize",this.handleWindowResize.bind(this),!1),this.light=new jl(16777215,16777215,1),this.scene.add(this.light),this.addPlayer(this.scene),this.addStreet(this.scene),this.addStarsBackground(this.scene),this.objects=[],this.treePresenceProb=.2,this.maxTreeSize=.5,this.createInitialCollisionObject(),this.gameOver=!1,this.paused=!0,this.keysAllowed={},this.score=0,this.difficulty=0,document.addEventListener("keydown",this.onKeyDown),document.addEventListener("keyup",this.keyUp),document.addEventListener("focus",this.onFocus)}addStreet(e){let t=br(3e3,20,12e4,Gn.cherry,0,-400,-6e4);e.add(t)}addPlayer(e){this.character=new Tm,this.character.init(),e.add(this.character.element)}addStarsBackground(e){const t=new gn,n=new aa({color:16777215,size:5}),r=[];for(let o=0;o<1e4;o++){const l=(Math.random()-.5)*2e5,u=(Math.random()-.5)*2e5,h=(Math.random()-.5)*2e5;r.push(l,u,h)}t.setAttribute("position",new Yt(r,3)),this.stars=new Wl(t,n),e.add(this.stars)}setOnPause(e){this.onPause=e}setOnResume(e){this.onResume=e}setOnCollisionDetected(e){this.onCollisionDetected=e}setOnScoreChanged(e){this.onScoreChanged=e}init(){this.loop()}moveStars(){this.stars.position.z+=.1,this.stars.position.z>50&&(this.stars.position.z=-50)}loop(){if(!this.paused){if(this.objects.length>0&&this.objects[this.objects.length-1].mesh.position.z%3e3===0){this.difficulty+=1;const l=30;if(this.difficulty%l==0)switch(this.difficulty/l){case 1:this.treePresenceProb=.35,this.maxTreeSize=.5;break;case 2:this.treePresenceProb=.35,this.maxTreeSize=.85;break;case 3:this.treePresenceProb=.5,this.maxTreeSize=.85;break;case 4:this.treePresenceProb=.5,this.maxTreeSize=1.1;break;case 5:this.treePresenceProb=.5,this.maxTreeSize=1.1;break;case 6:this.treePresenceProb=.55,this.maxTreeSize=1.1;break;default:this.treePresenceProb=.55,this.maxTreeSize=1.25}this.difficulty>=5*l&&this.difficulty<6*l?this.fogDistance-=25e3/l:this.difficulty>=8*l&&this.difficulty<9*l&&(this.fogDistance-=5e3/l),this.createRowOfAsteroid({position:-12e4,probability:this.treePresenceProb,minScale:.5,maxScale:this.maxTreeSize}),this.scene.fog.far=this.fogDistance}if(this.objects.forEach(function(l){l.mesh.position.z+=100}),this.objects=this.objects.filter(function(l){return l.mesh.position.z<0}),this.character.update(),this.collisionsDetected()){this.gameOver=!0,this.paused=!0;const l="Game over!";let u=["Typical Engineer","Couch Potato","Weekend Jogger","Daily Runner","Local Prospect","Regional Star","National Champ","Second Mo Farah"],h=Math.floor(this.score/15e3);this.score<124e3;var e="";e=h<=6?"".concat(h*15+"","k-",(h+1)*15+"","k").bold():this.score<124e3?"105k-124k".bold():"124k+".bold();var t=h<=6?"Congrats! You're a ".concat(u[h],"!").bold():this.score<124e3?"Congrats! You're a ".concat(u[7],"!").bold():"Congrats! You exceeded the creator's high score of 123790 and beat the game!".bold();e=e+" "+t,this.score>=12e4&&(h=7);for(var n="",r=0;r<h;r++)n=n+" "+"".concat(r*15+"","k-",(r+1)*15+"","k"),n=n+" "+u[r];this.score>124e3&&(n=n+" 105k-124k",n=n+" "+u[7]),this.onCollisionDetected({score:this.score/15e3,msg:[l,e,n]})}this.score+=10,this.onScoreChanged(this.score)}this.moveStars(),this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.loop.bind(this))}createInitialCollisionObject(){for(let e=10;e<40;e++)this.createRowOfAsteroid({position:e*-3e3,probability:this.treePresenceProb,minScale:.5,maxScale:this.maxTreeSize})}handleWindowResize(){this.renderer.setSize(this.element.clientWidth,this.element.clientHeight),this.camera.aspect=this.element.clientWidth/this.element.clientHeight,this.camera.updateProjectionMatrix()}createRowOfTrees(e){const{position:t,probability:n,minScale:r,maxScale:o}=e;for(let l=-1;l<2;l++)if(Math.random()<n){const h=r+(o-r)*Math.random(),d=new bm(l*800,-400,t,h);this.objects.push(d),this.scene.add(d.mesh)}}createRowOfAsteroid(e){const{position:t,probability:n,minScale:r,maxScale:o}=e;for(let l=-1;l<2;l++)if(Math.random()<n){const h=r+(o-r)*Math.random(),d=new Em(l*800,0,t,h);this.objects.push(d),this.scene.add(d.mesh)}}collisionsDetected(){const e=this.character.element.position.x-115,t=this.character.element.position.x+115,n=this.character.element.position.y-310,r=this.character.element.position.y+320,o=this.character.element.position.z-40,l=this.character.element.position.z+40;for(let u=0;u<this.objects.length;u++)if(this.objects[u].collides(e,t,n,r,o,l))return!0;return!1}clickLeft(){console.log("clickLeft"),this.handleKeyPress(gl)}clickRight(){console.log("clickRight"),this.handleKeyPress(vl)}clickUp(){console.log("clickUp"),this.handleKeyPress(_l)}handleKeyPress(e){if(console.log("key",e),!this.gameOver){if(this.paused&&!this.collisionsDetected()&&e>18){this.paused=!1,this.character.onUnpause(),this.onResume();return}if(e===wm){this.paused=!0,this.character.onPause(),this.onPause();return}if(e===_l&&!this.paused){this.character.onUpKeyPressed();return}if(e===gl&&!this.paused){this.character.onLeftKeyPressed();return}if(e===vl&&!this.paused){this.character.onRightKeyPressed();return}}}}let wn=null;function Cm(){const i=document.getElementById("arcade-area"),e=document==null?void 0:document.getElementById("gameOneBtn"),t=document==null?void 0:document.getElementById("gameSpaceRunBtn"),n=document==null?void 0:document.getElementById("gameDoughnutBtn"),r=document==null?void 0:document.getElementById("gameMazeBtn"),o=document.getElementById("home-controls"),l=document.getElementById("game-controls"),u=document.getElementById("world"),h=document.getElementById("spacerun"),d=document.getElementById("doughnut"),p=document.getElementById("maze"),g=document.getElementById("btnStop"),v=document.getElementById("score"),x=document.getElementById("msg");function S(){console.log("click game 1"),o==null||o.classList.add("hidden"),l==null||l.classList.remove("hidden"),u==null||u.classList.remove("hidden"),i==null||i.classList.add("hidden"),d==null||d.classList.add("hidden"),p==null||p.classList.add("hidden"),new fm({_element:document.getElementById("world"),output:U=>{v&&U.score&&(v.innerHTML=U.score),x&&U.msg&&(x.innerHTML=U.msg.join(" - "))}}),g.addEventListener("click",()=>{location.reload()})}function C(){console.log("click game 2"),o==null||o.classList.add("hidden"),l==null||l.classList.remove("hidden"),i==null||i.classList.add("hidden"),h==null||h.classList.remove("hidden"),d==null||d.classList.add("hidden"),p==null||p.classList.add("hidden");const U=document.getElementById("spacerun"),D=document.getElementById("btnLeft"),w=document.getElementById("btnRight"),B=document.getElementById("btnUp");U?(wn=new Am({_element:U,output:F=>{console.log("prop",F),v&&F.score&&(v.innerHTML=`${F.score}`),x&&F.msg&&(x.innerHTML=F.msg.join(" - "))}}),wn.init(),wn.setOnPause(()=>{}),wn.setOnResume(()=>{}),wn.setOnCollisionDetected(F=>{v&&F.score&&(v.innerHTML=`${F.score}`),x&&F.msg&&(x.innerHTML=F.msg.join(" - "))}),wn.setOnScoreChanged(F=>{v&&F&&(v.innerHTML=`${F}`)}),D==null||D.addEventListener("click",wn.clickLeft.bind(wn)),w==null||w.addEventListener("click",wn.clickRight.bind(wn)),B==null||B.addEventListener("click",wn.clickUp.bind(wn)),g.addEventListener("click",()=>{location.reload()})):g.addEventListener("click",()=>{location.reload()})}function y(){console.log("click game maze"),o==null||o.classList.add("hidden"),l==null||l.classList.remove("hidden"),p==null||p.classList.remove("hidden"),i==null||i.classList.add("hidden"),h==null||h.classList.add("hidden"),d==null||d.classList.add("hidden");const U=document.getElementById("btnLeft"),D=document.getElementById("btnRight"),w=document.getElementById("btnUp"),B=document.getElementById("btnDown"),F=document.getElementById("maze");F?(gm(()=>{console.log("Box2D caricato"),console.log("run ");const O=Sm(F);U==null||U.addEventListener("click",O.clickLeft.bind(O)),D==null||D.addEventListener("click",O.clickRight.bind(O)),w==null||w.addEventListener("click",O.clickUp.bind(O)),B==null||B.addEventListener("click",O.clickDown.bind(O)),O.start()}),g.addEventListener("click",()=>{location.reload()})):g.addEventListener("click",()=>{location.reload()})}function _(){console.log("click game Doughnut"),o==null||o.classList.add("hidden"),l==null||l.classList.remove("hidden"),d==null||d.classList.remove("hidden"),p==null||p.classList.add("hidden"),i==null||i.classList.add("hidden"),h==null||h.classList.add("hidden");const U=document.getElementById("btnLeft"),D=document.getElementById("btnRight"),w=document.getElementById("btnUp"),B=document.getElementById("btnDown"),F=document.getElementById("doughnut");if(F){console.log("run ");const O=mm({_element:F,output:G=>{v&&G.score&&(v.innerHTML=`${G.score}`),x&&G.msg&&(x.innerHTML=G.msg.join(" - "))}});U==null||U.addEventListener("click",O.clickLeft.bind(O)),D==null||D.addEventListener("click",O.clickRight.bind(O)),w==null||w.addEventListener("click",O.clickUp.bind(O)),B==null||B.addEventListener("click",O.clickDown.bind(O)),O.animate(),g.addEventListener("click",()=>{location.reload()})}else g.addEventListener("click",()=>{location.reload()})}e==null||e.addEventListener("click",S),t==null||t.addEventListener("click",C),n==null||n.addEventListener("click",_),r==null||r.addEventListener("click",y)}window.addEventListener("load",function(){Cm()});
