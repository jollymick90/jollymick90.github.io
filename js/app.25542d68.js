(function(e){function t(t){for(var a,r,c=t[0],s=t[1],l=t[2],p=0,v=[];p<c.length;p++)r=c[p],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&v.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(v.length)v.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},o={app:0},i=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"037b":function(e,t,n){"use strict";var a=n("896f"),o=n.n(a);o.a},"1b93":function(e,t,n){"use strict";var a=n("7400"),o=n.n(a);o.a},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),o=n.n(a);o.a},"5f83":function(e,t,n){},7400:function(e,t,n){},"796a":function(e,t,n){},"896f":function(e,t,n){},"9c0c":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"nav",attrs:{id:"nav"}},[n("NavAnimation")],1),n("div",{staticClass:"content"},[n("router-view")],1),n("br"),n("br")])},i=[],r=n("d4ec"),c=n("262e"),s=n("2caf"),l=n("9ab4"),u=n("60a3"),p=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("h1",[e._v("Chi siamo?")]),n("br"),n("br"),n("br"),n("p",[e._v(" Nessuno Affascinati dai codici e dalla letteratura. Questo è un pezzo della nostra isola ")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("span",[e._v(" Ciao, "),n("br"),e._v("M&M. ")])])}],d=function(e){Object(c["a"])(n,e);var t=Object(s["a"])(n);function n(){return Object(r["a"])(this,n),t.apply(this,arguments)}return n}(u["c"]);d=Object(l["a"])([u["a"]],d);var b=d,f=b,m=(n("f26d"),n("2877")),h=Object(m["a"])(f,p,v,!1,null,null,null),g=h.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},O=[],j=n("bee2"),y=function(e){Object(c["a"])(n,e);var t=Object(s["a"])(n);function n(){return Object(r["a"])(this,n),t.apply(this,arguments)}return Object(j["a"])(n,[{key:"mounted",value:function(){console.log("Empty mounted")}}]),n}(u["c"]);y=Object(l["a"])([u["a"]],y);var C=y,S=C,k=Object(m["a"])(S,_,O,!1,null,null,null),z=k.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{attrs:{role:"navigation"}},[n("div",{staticClass:"menu-hamb-container",class:e.openMenu?"menu-hamb-container-open":"menu-hamb-container-close"},[n("div",{class:e.openMenu?"menu-container-open":"menu-container-close"},[n("img",{class:e.openMenu?"icon-menu-open":"icon-menu-close",on:{click:e.menuClick}})]),n("ul",{staticClass:"menu",class:e.openMenu?"menu-open":"menu-close"},[n("li",[n("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),n("li",[n("router-link",{attrs:{to:"/Reader"}},[e._v("Reader")])],1),n("li",[n("router-link",{attrs:{to:"/About"}},[e._v("About")])],1)])])])},w=[],x=function(e){Object(c["a"])(n,e);var t=Object(s["a"])(n);function n(){var e;return Object(r["a"])(this,n),e=t.apply(this,arguments),e.openMenu=!1,e}return Object(j["a"])(n,[{key:"created",value:function(){console.log("App VUE Created")}},{key:"mounted",value:function(){console.log("Nav mounted")}},{key:"menuClick",value:function(){console.log("menu click"),this.openMenu=!this.openMenu}}]),n}(u["c"]);x=Object(l["a"])([u["a"]],x);var E=x,q=E,P=(n("d46a"),Object(m["a"])(q,M,w,!1,null,null,null)),A=P.exports,$=function(e){Object(c["a"])(n,e);var t=Object(s["a"])(n);function n(){return Object(r["a"])(this,n),t.apply(this,arguments)}return n}(u["c"]);$=Object(l["a"])([Object(u["a"])({components:{About:g,NavAnimation:A,EmptyRouterView:z}})],$);var T=$,N=T,L=(n("5c0b"),Object(m["a"])(N,o,i,!1,null,null,null)),R=L.exports,H=n("8c4f"),I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("button",{staticClass:"button",on:{click:e.clickHanlder}},[e._v("Shot")]),n("h1",[e._v(e._s(e.msg))])])},Q=[],B=function(e){Object(c["a"])(n,e);var t=Object(s["a"])(n);function n(){var e;return Object(r["a"])(this,n),e=t.call(this),e.listSentences=[],e.nSentences=e.listSentences.length,e.listSentences=["Ti Amano tutti, perché hai un cuore grande","I grandi sognatori non dormono mai","Ottimo! Siete aperti al nuovo","Non è vero che ogni verità può andare bene","Custodiamo ciò che la Natura ci ha donato","Il lavoro che mi attende è ancora tutto da fare","Tu sei una persona di quelle che si incontrano quando la vita decide di farti un regalo"],e.nSentences=e.listSentences.length,e}return Object(j["a"])(n,[{key:"created",value:function(){this.msg=this.listSentences[this.nextSentence()]}},{key:"nextSentence",value:function(){return Math.floor(Math.random()*this.nSentences)}},{key:"clickHanlder",value:function(){this.msg=this.listSentences[this.nextSentence()],console.log("click "+this.msg)}}]),n}(u["c"]);Object(l["a"])([Object(u["b"])()],B.prototype,"msg",void 0),B=Object(l["a"])([u["a"]],B);var F=B,J=F,V=(n("1b93"),Object(m["a"])(J,I,Q,!1,null,null,null)),D=V.exports,K=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},U=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"reader"},[n("h2",{staticClass:"title-post-page"},[e._v("L'insostenibile leggerezza dell'essere")]),n("div",{staticClass:"post-container"},[n("h3",{staticClass:"post-title"},[e._v("Due Punti")]),n("p",{staticClass:"post-body"},[e._v(" Per due punti, nascita e morte, passano infinite rette. O forse no, ne passa solo una, quella che appare, quella che vediamo, la vita. Ma allora, per il punto A - nascita passano infinite linee rette e per il punto B - morte ne passano altrettante. Quella che ciascuno di noi traccia dal punto A al Punto B, quella è la nostra vita. "),n("br"),n("br"),e._v("Ed io qui, ora sto tracciando la mia. "),n("br"),n("br"),e._v("Tu, ovunque tu sia, stai tracciando la tu. Ed è bello sapere che abbiamo almeno due punti in comune. ")])]),n("hr"),n("div",{staticClass:"post-container"},[n("h3",{staticClass:"post-title"},[e._v("Il filo delle parche")]),n("div",{staticClass:"post-body"},[n("p",{staticClass:"sub-body"},[e._v(" Secondo l'antico mito la vita degli uomini è governata dalle Parche, figlie della Notte e dee del Fato. "),n("br"),e._v(" Cloto tesse il filo della vita. "),n("br"),e._v(" Lachesi lo misura. "),n("br"),e._v(" Atropo, infine, lo recide con sacre forbici. "),n("br"),e._v(' Il loro dominio è assoluto e neppure Zeus, in persona, può disporre del nascer e del morire in modo difforme da quanto viene "tessuto", vagliato e tagliato dalle Parche. ')]),n("br"),n("p",[e._v(" Continuava a ritornarmi in mente questo incipit, tratto da un mio vecchio libro universitario, rimbobava nella mia testa con intensità sempre maggiore e più frequente, un rumore fastidioso del quale non riuscivo ad individuarne la ratio. Ma era lì, era sempre stata lì davanti al mio naso ed io continuavo ad ignorarla. Poi ubna notte tutto mi apparse più chiaro che mai. Milan Kundera, l'autore, è insieme Cloto, Lachesi ed Atropo. L'insostenibile leggerezza dell'essere è il suo filo delle Parche. Tesse, misure e recide il filo di ciascuno dei suoi personaggi, conscio di essere l'unico a poterne disporre a suo piacimento. Egli accompagna Tereza, Sabina, Tomas e Franz nel loro viaggio, chiamato vita, verso la fine inevitabile, la morte. Seguire il filo da lui tracciato per ciascuno di loro è tanto affascinante quanto asfissiante. IN alcuni punti ti senti mancare l'aria, le parole ti assorbono, eppure continui a trascinare gli occhi, parola dopo parola, verso la fine. "),n("br"),e._v(" La prima volta che lessi questo libro non ne capii veramente l'essenza, forse non l'ho colta nemmeno adesso. Quello che so di sicuro è che è pesante come la vita e leggero come i sogni, che la leggerezza in alcuni punti si trasforma in pesantezza ed in altri tutto quello che potrebbe apparirci pesante rende i personaggi leggeri come se, gettata via la zavorra dell'es muss sein, in un colpo solo siano capaci di volare ")])])])])}],Z=function(e){Object(c["a"])(n,e);var t=Object(s["a"])(n);function n(){return Object(r["a"])(this,n),t.apply(this,arguments)}return Object(j["a"])(n,[{key:"mounted",value:function(){console.log("Reader mounted")}}]),n}(u["c"]);Z=Object(l["a"])([u["a"]],Z);var G=Z,W=G,X=(n("037b"),Object(m["a"])(W,K,U,!1,null,null,null)),Y=X.exports,ee=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},te=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("h1",[e._v("Leggerezza")]),n("p",[n("span",[e._v(" Ciao, "),n("br"),e._v("Questo è un pezzo della nostra isola. ")]),n("br"),e._v("Tutto è iniziato con questa frase: "),n("br"),n("br"),n("span",[n("b",[n("i",[e._v("L'insostenibile leggerezza dell'essere")])])]),n("br"),n("br"),n("span",[e._v(" Ciao, "),n("br"),e._v("M&M. ")])])])}],ne=function(e){Object(c["a"])(n,e);var t=Object(s["a"])(n);function n(){return Object(r["a"])(this,n),t.apply(this,arguments)}return n}(u["c"]);ne=Object(l["a"])([u["a"]],ne);var ae=ne,oe=ae,ie=Object(m["a"])(oe,ee,te,!1,null,null,null),re=ie.exports;a["a"].use(H["a"]);var ce=[{path:"/About",name:"About",component:g},{path:"/cp",name:"CarouselPosts",component:D},{path:"/",name:"Home",component:re},{path:"/Reader",name:"Reader",component:Y},{path:"/*",name:"Home",component:re}],se=new H["a"]({mode:"history",base:"",routes:ce}),le=se,ue=n("2f62");a["a"].use(ue["a"]);var pe=new ue["a"].Store({state:{},mutations:{},actions:{},modules:{}});a["a"].config.productionTip=!1,new a["a"]({router:le,store:pe,render:function(e){return e(R)}}).$mount("#app")},d46a:function(e,t,n){"use strict";var a=n("796a"),o=n.n(a);o.a},f26d:function(e,t,n){"use strict";var a=n("5f83"),o=n.n(a);o.a}});
//# sourceMappingURL=app.25542d68.js.map