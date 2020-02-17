(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
function ba(a){a=["object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,a];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}return globalThis}
var ca=ba(this);function ea(a,b){if(b){for(var c=ca,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&aa(c,d,{configurable:!0,writable:!0,value:f})}}
var fa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}return a};
ea("Object.assign",function(a){return a||fa});
var h=this||self;function k(a){a=a.split(".");for(var b=h,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function ha(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
;var ia=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ja=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var l=f[g];
b.call(void 0,l,g,a)&&(d[e++]=l)}return d};
function ka(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c],e=ha(d);if("array"==e||"object"==e&&"number"==typeof d.length){e=a.length||0;var f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;var m;a:{var la=h.navigator;if(la){var ma=la.userAgent;if(ma){m=ma;break a}}m=""};var na="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function oa(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<na.length;f++)c=na[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var pa=-1!=m.indexOf("Trident")||-1!=m.indexOf("MSIE"),qa=-1!=m.toLowerCase().indexOf("webkit")&&-1==m.indexOf("Edge");function p(a,b){this.width=a;this.height=b}
p.prototype.aspectRatio=function(){return this.width/this.height};
p.prototype.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
p.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
p.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var r=window,t=document,ra=r.location;function sa(){}
var ta=/\[native code\]/;function w(a,b,c){return a[b]=a[b]||c}
function ua(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function x(){var a;if((a=Object.create)&&ta.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var z=w(r,"gapi",{});var A;A=w(r,"___jsl",x());w(A,"I",0);w(A,"hel",10);function va(){var a=ra.href;if(A.dpo)var b=A.h;else{b=A.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function wa(a){var b=w(A,"PQ",[]);A.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function xa(a){return w(w(A,"H",x()),a,x())}
;var B=w(A,"perf",x());w(B,"g",x());var ya=w(B,"i",x());w(B,"r",[]);x();x();function C(a,b,c){b&&0<b.length&&(b=za(b),c&&0<c.length&&(b+="___"+za(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=w(ya,"_p",x()),w(b,c,x())[a]=(new Date).getTime(),b=B.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function za(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/,/g,"_")}
;var Aa=x(),D=[];function E(a){throw Error("Bad hint"+(a?": "+a:""));}
D.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?A[b]=w(A,b,[]).concat(c):w(A,b,c)}if(b=a.u)a=w(A,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var Ba=/^(\/[a-zA-Z0-9_\-]+)+$/,Ca=[/\/amp\//,/\/amp$/,/^\/amp$/],Da=/^[a-zA-Z0-9\-_\.,!]+$/,Ea=/^gapi\.loaded_[0-9]+$/,Fa=/^[a-zA-Z0-9,._-]+$/;function Ga(a,b,c,d){var e=a.split(";"),f=e.shift(),g=Aa[f],l=null;g?l=g(e,b,c,d):E("no hint processor for: "+f);l||E("failed to generate load url");b=l;c=b.match(Ha);(d=b.match(Ia))&&1===d.length&&Ja.test(b)&&c&&1===c.length||E("failed sanity: "+a);return l}
function Ka(a,b,c,d){function e(f){return encodeURIComponent(f).replace(/%2C/g,",")}
a=La(a);Ea.test(c)||E("invalid_callback");b=Ma(b);d=d&&d.length?Ma(d):null;return[encodeURIComponent(a.pathPrefix).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.a?"/am="+e(a.a):"",a.f?"/rs="+e(a.f):"",a.g?"/t="+e(a.g):"","/cb=",e(c)].join("")}
function La(a){"/"!==a.charAt(0)&&E("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))E("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),l=decodeURIComponent(f[1]);2==f.length&&g&&l&&(a[g]=a[g]||l)}b="/"+c.join("/");Ba.test(b)||E("invalid_prefix");c=0;for(d=Ca.length;c<d;++c)Ca[c].test(b)&&E("invalid_prefix");c=I(a,"k",
!0);d=I(a,"am");e=I(a,"rs");a=I(a,"t");return{pathPrefix:b,version:c,a:d,f:e,g:a}}
function Ma(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");Fa.test(e)&&b.push(e)}return b.join(",")}
function I(a,b,c){a=a[b];!a&&c&&E("missing: "+b);if(a){if(Da.test(a))return a;E("invalid: "+b)}return null}
var Ja=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Ia=/\/cb=/g,Ha=/\/\//g;function Na(){var a=va();if(!a)throw Error("Bad hint");return a}
Aa.m=function(a,b,c,d){(a=a[0])||E("missing_hint");return"https://apis.google.com"+Ka(a,b,c,d)};
var J=decodeURI("%73cript"),Oa=/^[-+_0-9\/A-Za-z]+={0,2}$/;function Pa(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c}
function Qa(){var a=A.nonce;return void 0!==a?a&&a===String(a)&&a.match(Oa)?a:A.nonce=null:t.querySelector?(a=t.querySelector("script[nonce]"))?(a=a.nonce||a.getAttribute("nonce")||"",a&&a===String(a)&&a.match(Oa)?A.nonce=a:A.nonce=null):null:null}
function Ra(a){if("loading"!=t.readyState)Sa(a);else{var b=Qa(),c="";null!==b&&(c=' nonce="'+b+'"');a="<"+J+' src="'+encodeURI(a)+'"'+c+"></"+J+">";t.write(a)}}
function Sa(a){var b=t.createElement(J);b.setAttribute("src",a);a=Qa();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=t.getElementsByTagName(J)[0])?a.parentNode.insertBefore(b,a):(t.head||t.body||t.documentElement).appendChild(b)}
function Ta(a,b){var c=b&&b._c;if(c)for(var d=0;d<D.length;d++){var e=D[d][0],f=D[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function Ua(a,b,c){Va(function(){var d=b===va()?w(z,"_",x()):x();d=w(xa(b),"_",d);a(d)},c)}
function Wa(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Ta(a,c);var d=a?a.split(":"):[],e=c.h||Na(),f=w(A,"ah",x());if(f["::"]&&d.length){for(var g=[],l=null;l=d.shift();){var n=l.split(".");n=f[l]||f[n[1]&&"ns:"+n[0]||""]||e;var F=g.length&&g[g.length-1]||null,G=F;F&&F.hint==n||(G={hint:n,b:[]},g.push(G));G.b.push(l)}var K=g.length;if(1<K){var H=c.callback;H&&(c.callback=function(){0==--K&&H()})}for(;d=g.shift();)Xa(d.b,c,d.hint)}else Xa(d||[],c,e)}
function Xa(a,b,c){function d(y,L){if(K)return 0;r.clearTimeout(G);H.push.apply(H,q);var M=((z||{}).config||{}).update;M?M(f):f&&w(A,"cu",[]).push(f);if(L){C("me0",y,U);try{Ua(L,c,F)}finally{C("me1",y,U)}}return 1}
a=ua(a)||[];var e=b.callback,f=b.config,g=b.timeout,l=b.ontimeout,n=b.onerror,F=void 0;"function"==typeof n&&(F=n);var G=null,K=!1;if(g&&!l||!g&&l)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";n=w(xa(c),"r",[]).sort();var H=w(xa(c),"L",[]).sort(),U=[].concat(n);0<g&&(G=r.setTimeout(function(){K=!0;l()},g));
var q=Pa(a,H);if(q.length){q=Pa(a,n);var u=w(A,"CP",[]),v=u.length;u[v]=function(y){function L(){var V=u[v+1];V&&V()}
function M(V){u[v]=null;d(q,y)&&wa(function(){e&&e();V()})}
if(!y)return 0;C("ml1",q,U);0<v&&u[v-1]?u[v]=function(){M(L)}:M(L)};
if(q.length){var da="loaded_"+A.I++;z[da]=function(y){u[v](y);z[da]=null};
a=Ga(c,q,"gapi."+da,n);n.push.apply(n,q);C("ml0",q,U);b.sync||r.___gapisync?Ra(a):Sa(a)}else u[v](sa)}else d(q)&&e&&e()}
function Va(a,b){if(A.hee&&0<A.hel)try{return a()}catch(c){b&&b(c),A.hel--,Wa("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
z.load=function(a,b){return Va(function(){return Wa(a,b)})};function Ya(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Za(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function $a(a,b){if(a.classList)var c=a.classList.contains(b);else c=a.classList?a.classList:Ya(a).match(/\S+/g)||[],c=0<=ia(c,b);return c}
function ab(a,b){if(a.classList)a.classList.add(b);else if(!$a(a,b)){var c=Ya(a);Za(a,c+(0<c.length?" "+b:b))}}
function bb(a,b){a.classList?a.classList.remove(b):$a(a,b)&&Za(a,ja(a.classList?a.classList:Ya(a).match(/\S+/g)||[],function(c){return c!=b}).join(" "))}
;function cb(a){var b=a.offsetWidth,c=a.offsetHeight,d=qa&&!b&&!c;if((void 0===b||d)&&a.getBoundingClientRect){a:{try{var e=a.getBoundingClientRect()}catch(f){e={left:0,top:0,right:0,bottom:0};break a}pa&&a.ownerDocument.body&&(a=a.ownerDocument,e.left-=a.documentElement.clientLeft+a.body.clientLeft,e.top-=a.documentElement.clientTop+a.body.clientTop)}return new p(e.right-e.left,e.bottom-e.top)}return new p(b,c)}
;var N=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{},O=["yt","config_"],P=h;O[0]in P||"undefined"==typeof P.execScript||P.execScript("var "+O[0]);for(var Q;O.length&&(Q=O.shift());)O.length||void 0===N?P[Q]&&P[Q]!==Object.prototype[Q]?P=P[Q]:P=P[Q]={}:P[Q]=N;function db(a){var b=arguments;1<b.length?N[b[0]]=b[1]:1===b.length&&Object.assign(N,b[0])}
;function eb(){return k("gapi.iframes.getContext")()}
function fb(){return k("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER")}
;function gb(a){try{a.register("msg-hovercard-subscription",hb,fb())}catch(b){}}
function hb(a){if(a){a=!!a.isSubscribed;var b=document.getElementById("yt-subscribe-card");a?bb(b,"subscribe"):ab(b,"subscribe");a?ab(b,"subscribed"):bb(b,"subscribed")}}
;function R(){var a=document.getElementById("yt-subscribe-card");b:{var b=9==a.nodeType?a:a.ownerDocument||a.document;if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,null))){b=b.display||b.getPropertyValue("display")||"";break b}b=""}if("none"!=(b||(a.currentStyle?a.currentStyle.display:null)||a.style&&a.style.display))a=cb(a);else{b=a.style;var c=b.display,d=b.visibility,e=b.position;b.visibility="hidden";b.position="absolute";b.display="inline";a=cb(a);b.display=
c;b.position=e;b.visibility=d}a={width:a.width,height:a.height};eb().ready(a,null,void 0);a=fb();eb().addOnOpenerHandler(gb,null,a)}
var S=R;S=void 0===S?{}:S;"function"==ha(S)&&(S={callback:S});R=S;var ib;(ib=R.gapiHintOverride)||(ib="GAPI_HINT_OVERRIDE"in N?N.GAPI_HINT_OVERRIDE:void 0);
if(ib){var jb;var T=document.location.href;if(-1!=T.indexOf("?")){T=(T||"").split("#")[0];var kb=T.split("?",2),W=1<kb.length?kb[1]:kb[0];"?"==W.charAt(0)&&(W=W.substr(1));for(var lb=W.split("&"),X={},mb=0,nb=lb.length;mb<nb;mb++){var Y=lb[mb].split("=");if(1==Y.length&&Y[0]||2==Y.length)try{var Z=decodeURIComponent((Y[0]||"").replace(/\+/g," ")),ob=decodeURIComponent((Y[1]||"").replace(/\+/g," "));Z in X?"array"==ha(X[Z])?ka(X[Z],ob):X[Z]=[X[Z],ob]:X[Z]=ob}catch(a){if("q"!=Y[0]){var pb=Error("Error decoding URL component");
pb.params={key:Y[0],value:Y[1]};var qb=k("yt.logging.errors.log");if(qb)qb(pb,"ERROR",void 0,void 0,void 0);else{var rb,sb=[];rb="ERRORS"in N?N.ERRORS:sb;rb.push([pb,"ERROR",void 0,void 0,void 0]);db("ERRORS",rb)}}}}jb=X}else jb={};var tb=jb.gapi_jsh;tb&&oa(R,{_c:{jsl:{h:tb}}})}Wa("gapi.iframes:gapi.iframes.style.common",R);}).call(this);
