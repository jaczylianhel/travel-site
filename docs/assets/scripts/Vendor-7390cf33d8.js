!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=8)}({10:function(e,t){!function(t,n){var r=function(e,t){"use strict";if(!t.getElementsByClassName)return;var n,r,i=t.documentElement,s=e.Date,a=e.HTMLPictureElement,c="addEventListener",o="getAttribute",u=e[c],l=e.setTimeout,d=e.requestAnimationFrame||l,f=e.requestIdleCallback,p=/^picture$/i,m=["load","error","lazyincluded","_lazyloaded"],h={},A=Array.prototype.forEach,g=function(e,t){return h[t]||(h[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),h[t].test(e[o]("class")||"")&&h[t]},v=function(e,t){g(e,t)||e.setAttribute("class",(e[o]("class")||"").trim()+" "+t)},y=function(e,t){var n;(n=g(e,t))&&e.setAttribute("class",(e[o]("class")||"").replace(n," "))},z=function(e,t,n){var r=n?c:"removeEventListener";n&&z(e,t),m.forEach(function(n){e[r](n,t)})},w=function(e,r,i,s,a){var c=t.createEvent("CustomEvent");return i||(i={}),i.instance=n,c.initCustomEvent(r,!s,!a,i),e.dispatchEvent(c),c},b=function(t,n){var i;!a&&(i=e.picturefill||r.pf)?i({reevaluate:!0,elements:[t]}):n&&n.src&&(t.src=n.src)},C=function(e,t){return(getComputedStyle(e,null)||{})[t]},E=function(e,t,n){for(n=n||e.offsetWidth;n<r.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},x=function(){var e,n,r=[],i=[],s=r,a=function(){var t=s;for(s=r.length?i:r,e=!0,n=!1;t.length;)t.shift()();e=!1},c=function(r,i){e&&!i?r.apply(this,arguments):(s.push(r),n||(n=!0,(t.hidden?l:d)(a)))};return c._lsFlush=a,c}(),S=function(e,t){return t?function(){x(e)}:function(){var t=this,n=arguments;x(function(){e.apply(t,n)})}},T=function(e){var t,n,r=function(){t=null,e()},i=function(){var e=s.now()-n;e<99?l(i,99-e):(f||r)(r)};return function(){n=s.now(),t||(t=l(i,99))}};!function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:300};r=e.lazySizesConfig||e.lazysizesConfig||{};for(t in n)t in r||(r[t]=n[t]);e.lazySizesConfig=r,l(function(){r.init&&L()})}();var M=function(){var a,d,m,h,E,M,L,P,B,W,D,k,N,$,_=/^img$/i,I=/^iframe$/i,F="onscroll"in e&&!/glebot/.test(navigator.userAgent),U=0,H=0,O=-1,Q=function(e){H--,e&&e.target&&z(e.target,Q),(!e||H<0||!e.target)&&(H=0)},G=function(e,n){var r,s=e,a="hidden"==C(t.body,"visibility")||"hidden"!=C(e,"visibility");for(P-=n,D+=n,B-=n,W+=n;a&&(s=s.offsetParent)&&s!=t.body&&s!=i;)(a=(C(s,"opacity")||1)>0)&&"visible"!=C(s,"overflow")&&(r=s.getBoundingClientRect(),a=W>r.left&&B<r.right&&D>r.top-1&&P<r.bottom+1);return a},j=function(){var e,s,c,u,l,f,p,m,A,g=n.elements;if((h=r.loadMode)&&H<8&&(e=g.length)){s=0,O++,null==N&&("expand"in r||(r.expand=i.clientHeight>500&&i.clientWidth>500?500:370),k=r.expand,N=k*r.expFactor),U<N&&H<1&&O>2&&h>2&&!t.hidden?(U=N,O=0):U=h>1&&O>1&&H<6?k:0;for(;s<e;s++)if(g[s]&&!g[s]._lazyRace)if(F)if((m=g[s][o]("data-expand"))&&(f=1*m)||(f=U),A!==f&&(M=innerWidth+f*$,L=innerHeight+f,p=-1*f,A=f),c=g[s].getBoundingClientRect(),(D=c.bottom)>=p&&(P=c.top)<=L&&(W=c.right)>=p*$&&(B=c.left)<=M&&(D||W||B||P)&&(r.loadHidden||"hidden"!=C(g[s],"visibility"))&&(d&&H<3&&!m&&(h<3||O<4)||G(g[s],f))){if(Z(g[s]),l=!0,H>9)break}else!l&&d&&!u&&H<4&&O<4&&h>2&&(a[0]||r.preloadAfterLoad)&&(a[0]||!m&&(D||W||B||P||"auto"!=g[s][o](r.sizesAttr)))&&(u=a[0]||g[s]);else Z(g[s]);u&&!l&&Z(u)}},q=function(e){var t,n=0,i=r.ricTimeout,a=function(){t=!1,n=s.now(),e()},c=f&&r.ricTimeout?function(){f(a,{timeout:i}),i!==r.ricTimeout&&(i=r.ricTimeout)}:S(function(){l(a)},!0);return function(e){var r;(e=!0===e)&&(i=33),t||(t=!0,(r=125-(s.now()-n))<0&&(r=0),e||r<9&&f?c():l(c,r))}}(j),V=function(e){v(e.target,r.loadedClass),y(e.target,r.loadingClass),z(e.target,J),w(e.target,"lazyloaded")},K=S(V),J=function(e){K({target:e.target})},X=function(e){var t,n=e[o](r.srcsetAttr);(t=r.customMedia[e[o]("data-media")||e[o]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},Y=S(function(e,t,n,i,s){var a,c,u,d,f,h;(f=w(e,"lazybeforeunveil",t)).defaultPrevented||(i&&(n?v(e,r.autosizesClass):e.setAttribute("sizes",i)),c=e[o](r.srcsetAttr),a=e[o](r.srcAttr),s&&(u=e.parentNode,d=u&&p.test(u.nodeName||"")),h=t.firesLoad||"src"in e&&(c||a||d),f={target:e},h&&(z(e,Q,!0),clearTimeout(m),m=l(Q,2500),v(e,r.loadingClass),z(e,J,!0)),d&&A.call(u.getElementsByTagName("source"),X),c?e.setAttribute("srcset",c):a&&!d&&(I.test(e.nodeName)?function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}}(e,a):e.src=a),s&&(c||d)&&b(e,{src:a})),e._lazyRace&&delete e._lazyRace,y(e,r.lazyClass),x(function(){(!h||e.complete&&e.naturalWidth>1)&&(h?Q(f):H--,V(f))},!0)}),Z=function(e){var t,n=_.test(e.nodeName),i=n&&(e[o](r.sizesAttr)||e[o]("sizes")),s="auto"==i;(!s&&d||!n||!e[o]("src")&&!e.srcset||e.complete||g(e,r.errorClass)||!g(e,r.lazyClass))&&(t=w(e,"lazyunveilread").detail,s&&R.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,H++,Y(e,t,s,i,n))},ee=function(){if(!d)if(s.now()-E<999)l(ee,999);else{var e=T(function(){r.loadMode=3,q()});d=!0,r.loadMode=3,q(),u("scroll",function(){3==r.loadMode&&(r.loadMode=2),e()},!0)}};return{_:function(){E=s.now(),n.elements=t.getElementsByClassName(r.lazyClass),a=t.getElementsByClassName(r.lazyClass+" "+r.preloadClass),$=r.hFac,u("scroll",q,!0),u("resize",q,!0),e.MutationObserver?new MutationObserver(q).observe(i,{childList:!0,subtree:!0,attributes:!0}):(i[c]("DOMNodeInserted",q,!0),i[c]("DOMAttrModified",q,!0),setInterval(q,999)),u("hashchange",q,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){t[c](e,q,!0)}),/d$|^c/.test(t.readyState)?ee():(u("load",ee),t[c]("DOMContentLoaded",q),l(ee,2e4)),n.elements.length?(j(),x._lsFlush()):q()},checkElems:q,unveil:Z}}(),R=function(){var e,n=S(function(e,t,n,r){var i,s,a;if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),p.test(t.nodeName||""))for(i=t.getElementsByTagName("source"),s=0,a=i.length;s<a;s++)i[s].setAttribute("sizes",r);n.detail.dataAttr||b(e,n.detail)}),i=function(e,t,r){var i,s=e.parentNode;s&&(r=E(e,s,r),(i=w(e,"lazybeforesizes",{width:r,dataAttr:!!t})).defaultPrevented||(r=i.detail.width)&&r!==e._lazysizesWidth&&n(e,s,i,r))},s=T(function(){var t,n=e.length;if(n)for(t=0;t<n;t++)i(e[t])});return{_:function(){e=t.getElementsByClassName(r.autosizesClass),u("resize",s)},checkElems:s,updateElem:i}}(),L=function(){L.i||(L.i=!0,R._(),M._())};return n={cfg:r,autoSizer:R,loader:M,init:L,uP:b,aC:v,rC:y,hC:g,fire:w,gW:E,rAF:x}}(t,t.document);t.lazySizes=r,"object"==typeof e&&e.exports&&(e.exports=r)}(window)},8:function(e,t,n){"use strict";n(9),n(10)},9:function(e,t,n){var r;!function(e){var t=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(t)&&t.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var t,n=document.createElement("source"),r=function(e){var t,r,i=e.parentNode;"PICTURE"===i.nodeName.toUpperCase()?(t=n.cloneNode(),i.insertBefore(t,i.firstElementChild),setTimeout(function(){i.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,r=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=r}))},i=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)r(t[e])},s=function(){clearTimeout(t),t=setTimeout(i,99)},a=e.matchMedia&&matchMedia("(orientation: landscape)"),c=function(){s(),a&&a.addListener&&a.addListener(s)};return n.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?c():document.addEventListener("DOMContentLoaded",c),s}())}(window),function(i,s,a){"use strict";function c(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}function o(e,t,n,r){var i,s,a;return"saveData"===C.algorithm?e>2.7?a=n+1:(s=(t-n)*(i=Math.pow(e-.6,1.5)),r&&(s+=.1*i),a=e+s):a=n>1?Math.sqrt(e*t):e,a>n}function u(e,t){return e.res-t.res}function l(e,t){var n,r,i;if(e&&t)for(i=m.parseSet(t),e=m.makeUrl(e),n=0;n<i.length;n++)if(e===m.makeUrl(i[n].url)){r=i[n];break}return r}s.createElement("picture");var d,f,p,m={},h=!1,A=function(){},g=s.createElement("img"),v=g.getAttribute,y=g.setAttribute,z=g.removeAttribute,w=s.documentElement,b={},C={algorithm:""},E="data-pfsrc",x=E+"set",S=navigator.userAgent,T=/rident/.test(S)||/ecko/.test(S)&&S.match(/rv\:(\d+)/)&&RegExp.$1>35,M="currentSrc",R=/\s+\+?\d+(e\d+)?w/,L=/(\([^)]+\))?\s*(.+)/,P=i.picturefillCFG,B="font-size:100%!important;",W=!0,D={},k={},N=i.devicePixelRatio,$={px:1,in:96},_=s.createElement("a"),I=!1,F=/^[ \t\n\r\u000c]+/,U=/^[, \t\n\r\u000c]+/,H=/^[^ \t\n\r\u000c]+/,O=/[,]+$/,Q=/^\d+$/,G=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,j=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},q=function(e){var t={};return function(n){return n in t||(t[n]=e(n)),t[n]}},V=function(){var e=/^([\d\.]+)(em|vw|px)$/,t=q(function(e){return"return "+function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(n,r){var i;if(!(n in D))if(D[n]=!1,r&&(i=n.match(e)))D[n]=i[1]*$[i[2]];else try{D[n]=new Function("e",t(n))($)}catch(e){}return D[n]}}(),K=function(e,t){return e.w?(e.cWidth=m.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},J=function(e){if(h){var t,n,r,i=e||{};if(i.elements&&1===i.elements.nodeType&&("IMG"===i.elements.nodeName.toUpperCase()?i.elements=[i.elements]:(i.context=i.elements,i.elements=null)),t=i.elements||m.qsa(i.context||s,i.reevaluate||i.reselect?m.sel:m.selShort),r=t.length){for(m.setupRun(i),I=!0,n=0;n<r;n++)m.fillImg(t[n],i);m.teardownRun(i)}}};i.console&&console.warn,M in g||(M="src"),b["image/jpeg"]=!0,b["image/gif"]=!0,b["image/png"]=!0,b["image/svg+xml"]=s.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),m.ns=("pf"+(new Date).getTime()).substr(0,9),m.supSrcset="srcset"in g,m.supSizes="sizes"in g,m.supPicture=!!i.HTMLPictureElement,m.supSrcset&&m.supPicture&&!m.supSizes&&function(e){g.srcset="data:,a",e.src="data:,a",m.supSrcset=g.complete===e.complete,m.supPicture=m.supSrcset&&m.supPicture}(s.createElement("img")),m.supSrcset&&!m.supSizes?function(){var e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",t=s.createElement("img"),n=function(){2===t.width&&(m.supSizes=!0),f=m.supSrcset&&!m.supSizes,h=!0,setTimeout(J)};t.onload=n,t.onerror=n,t.setAttribute("sizes","9px"),t.srcset=e+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",t.src=e}():h=!0,m.selShort="picture>img,img[srcset]",m.sel=m.selShort,m.cfg=C,m.DPR=N||1,m.u=$,m.types=b,m.setSize=A,m.makeUrl=q(function(e){return _.href=e,_.href}),m.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},m.matchesMedia=function(){return i.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?m.matchesMedia=function(e){return!e||matchMedia(e).matches}:m.matchesMedia=m.mMQ,m.matchesMedia.apply(this,arguments)},m.mMQ=function(e){return!e||V(e)},m.calcLength=function(e){var t=V(e,!0)||!1;return t<0&&(t=!1),t},m.supportsType=function(e){return!e||b[e]},m.parseSize=q(function(e){var t=(e||"").match(L);return{media:t&&t[1],length:t&&t[2]}}),m.parseSet=function(e){return e.cands||(e.cands=function(e,t){function n(t){var n,r=t.exec(e.substring(f));if(r)return n=r[0],f+=n.length,n}function r(){var e,n,r,i,c,o,u,l,d,f=!1,m={};for(i=0;i<a.length;i++)o=(c=a[i])[c.length-1],u=c.substring(0,c.length-1),l=parseInt(u,10),d=parseFloat(u),Q.test(u)&&"w"===o?((e||n)&&(f=!0),0===l?f=!0:e=l):G.test(u)&&"x"===o?((e||n||r)&&(f=!0),d<0?f=!0:n=d):Q.test(u)&&"h"===o?((r||n)&&(f=!0),0===l?f=!0:r=l):f=!0;f||(m.url=s,e&&(m.w=e),n&&(m.d=n),r&&(m.h=r),r||n||e||(m.d=1),1===m.d&&(t.has1x=!0),m.set=t,p.push(m))}function i(){for(n(F),o="",u="in descriptor";;){if(l=e.charAt(f),"in descriptor"===u)if(c(l))o&&(a.push(o),o="",u="after descriptor");else{if(","===l)return f+=1,o&&a.push(o),void r();if("("===l)o+=l,u="in parens";else{if(""===l)return o&&a.push(o),void r();o+=l}}else if("in parens"===u)if(")"===l)o+=l,u="in descriptor";else{if(""===l)return a.push(o),void r();o+=l}else if("after descriptor"===u)if(c(l));else{if(""===l)return void r();u="in descriptor",f-=1}f+=1}}for(var s,a,o,u,l,d=e.length,f=0,p=[];;){if(n(U),f>=d)return p;s=n(H),a=[],","===s.slice(-1)?(s=s.replace(O,""),r()):i()}}(e.srcset,e)),e.cands},m.getEmValue=function(){var e;if(!d&&(e=s.body)){var t=s.createElement("div"),n=w.style.cssText,r=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",w.style.cssText=B,e.style.cssText=B,e.appendChild(t),d=t.offsetWidth,e.removeChild(t),d=parseFloat(d,10),w.style.cssText=n,e.style.cssText=r}return d||16},m.calcListLength=function(e){if(!(e in k)||C.uT){var t=m.calcLength(function(e){function t(e){return!!(u.test(e)&&parseFloat(e)>=0)||!!l.test(e)||"0"===e||"-0"===e||"+0"===e}var n,r,i,s,a,o,u=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(i=(r=function(e){function t(){i&&(s.push(i),i="")}function n(){s[0]&&(a.push(s),s=[])}for(var r,i="",s=[],a=[],o=0,u=0,l=!1;;){if(""===(r=e.charAt(u)))return t(),n(),a;if(l){if("*"===r&&"/"===e[u+1]){l=!1,u+=2,t();continue}u+=1}else{if(c(r)){if(e.charAt(u-1)&&c(e.charAt(u-1))||!i){u+=1;continue}if(0===o){t(),u+=1;continue}r=" "}else if("("===r)o+=1;else if(")"===r)o-=1;else{if(","===r){t(),n(),u+=1;continue}if("/"===r&&"*"===e.charAt(u+1)){l=!0,u+=2;continue}}i+=r,u+=1}}}(e)).length,n=0;n<i;n++)if(s=r[n],a=s[s.length-1],t(a)){if(o=a,s.pop(),0===s.length)return o;if(s=s.join(" "),m.matchesMedia(s))return o}return"100vw"}(e));k[e]=t||$.width}return k[e]},m.setRes=function(e){var t;if(e)for(var n=0,r=(t=m.parseSet(e)).length;n<r;n++)K(t[n],e.sizes);return t},m.setRes.res=K,m.applySetCandidate=function(e,t){if(e.length){var n,r,i,s,a,c,d,f,p,h=t[m.ns],A=m.DPR;if(c=h.curSrc||t[M],(d=h.curCan||function(e,t,n){var r;return!n&&t&&(n=(n=e[m.ns].sets)&&n[n.length-1]),(r=l(t,n))&&(t=m.makeUrl(t),e[m.ns].curSrc=t,e[m.ns].curCan=r,r.res||K(r,r.set.sizes)),r}(t,c,e[0].set))&&d.set===e[0].set&&((p=T&&!t.complete&&d.res-.1>A)||(d.cached=!0,d.res>=A&&(a=d))),!a)for(e.sort(u),a=e[(s=e.length)-1],r=0;r<s;r++)if((n=e[r]).res>=A){a=e[i=r-1]&&(p||c!==m.makeUrl(n.url))&&o(e[i].res,n.res,A,e[i].cached)?e[i]:n;break}a&&(f=m.makeUrl(a.url),h.curSrc=f,h.curCan=a,f!==c&&m.setSrc(t,a),m.setSize(t))}},m.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},m.getSet=function(e){var t,n,r,i=!1,s=e[m.ns].sets;for(t=0;t<s.length&&!i;t++)if((n=s[t]).srcset&&m.matchesMedia(n.media)&&(r=m.supportsType(n.type))){"pending"===r&&(n=r),i=n;break}return i},m.parseSets=function(e,t,n){var r,i,s,a,c=t&&"PICTURE"===t.nodeName.toUpperCase(),o=e[m.ns];(void 0===o.src||n.src)&&(o.src=v.call(e,"src"),o.src?y.call(e,E,o.src):z.call(e,E)),(void 0===o.srcset||n.srcset||!m.supSrcset||e.srcset)&&(r=v.call(e,"srcset"),o.srcset=r,a=!0),o.sets=[],c&&(o.pic=!0,function(e,t){var n,r,i,s,a=e.getElementsByTagName("source");for(n=0,r=a.length;n<r;n++)(i=a[n])[m.ns]=!0,(s=i.getAttribute("srcset"))&&t.push({srcset:s,media:i.getAttribute("media"),type:i.getAttribute("type"),sizes:i.getAttribute("sizes")})}(t,o.sets)),o.srcset?(i={srcset:o.srcset,sizes:v.call(e,"sizes")},o.sets.push(i),(s=(f||o.src)&&R.test(o.srcset||""))||!o.src||l(o.src,i)||i.has1x||(i.srcset+=", "+o.src,i.cands.push({url:o.src,d:1,set:i}))):o.src&&o.sets.push({srcset:o.src,sizes:null}),o.curCan=null,o.curSrc=void 0,o.supported=!(c||i&&!m.supSrcset||s&&!m.supSizes),a&&m.supSrcset&&!o.supported&&(r?(y.call(e,x,r),e.srcset=""):z.call(e,x)),o.supported&&!o.srcset&&(!o.src&&e.src||e.src!==m.makeUrl(o.src))&&(null===o.src?e.removeAttribute("src"):e.src=o.src),o.parsed=!0},m.fillImg=function(e,t){var n,r=t.reselect||t.reevaluate;e[m.ns]||(e[m.ns]={}),n=e[m.ns],(r||n.evaled!==p)&&(n.parsed&&!t.reevaluate||m.parseSets(e,e.parentNode,t),n.supported?n.evaled=p:function(e){var t,n=m.getSet(e),r=!1;"pending"!==n&&(r=p,n&&(t=m.setRes(n),m.applySetCandidate(t,e))),e[m.ns].evaled=r}(e))},m.setupRun=function(){I&&!W&&N===i.devicePixelRatio||(W=!1,N=i.devicePixelRatio,D={},k={},m.DPR=N||1,$.width=Math.max(i.innerWidth||0,w.clientWidth),$.height=Math.max(i.innerHeight||0,w.clientHeight),$.vw=$.width/100,$.vh=$.height/100,p=[$.height,$.width,N].join("-"),$.em=m.getEmValue(),$.rem=$.em)},m.supPicture?(J=A,m.fillImg=A):function(){var e,t=i.attachEvent?/d$|^c/:/d$|^c|^i/,n=function(){var i=s.readyState||"";r=setTimeout(n,"loading"===i?200:999),s.body&&(m.fillImgs(),(e=e||t.test(i))&&clearTimeout(r))},r=setTimeout(n,s.body?9:99),a=w.clientHeight;j(i,"resize",function(e,t){var n,r,i=function(){var s=new Date-r;s<t?n=setTimeout(i,t-s):(n=null,e())};return function(){r=new Date,n||(n=setTimeout(i,t))}}(function(){W=Math.max(i.innerWidth||0,w.clientWidth)!==$.width||w.clientHeight!==a,a=w.clientHeight,W&&m.fillImgs()},99)),j(s,"readystatechange",n)}(),m.picturefill=J,m.fillImgs=J,m.teardownRun=A,J._=m,i.picturefillCFG={pf:m,push:function(e){var t=e.shift();"function"==typeof m[t]?m[t].apply(m,e):(C[t]=e[0],I&&m.fillImgs({reselect:!0}))}};for(;P&&P.length;)i.picturefillCFG.push(P.shift());i.picturefill=J,"object"==typeof e&&"object"==typeof e.exports?e.exports=J:void 0===(r=function(){return J}.call(t,n,t,e))||(e.exports=r),m.supPicture||(b["image/webp"]=function(e,t){var n=new i.Image;return n.onerror=function(){b[e]=!1,J()},n.onload=function(){b[e]=1===n.width,J()},n.src=t,"pending"}("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document)}});