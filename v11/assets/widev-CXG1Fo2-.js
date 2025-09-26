(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();function od(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var so={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */var ad=so.exports,nc;function ud(){return nc||(nc=1,(function(n){(function(e,t){n.exports=e.document?t(e,!0):function(r){if(!r.document)throw new Error("jQuery requires a window with a document");return t(r)}})(typeof window<"u"?window:ad,function(e,t){var r=[],i=Object.getPrototypeOf,a=r.slice,c=r.flat?function(s){return r.flat.call(s)}:function(s){return r.concat.apply([],s)},p=r.push,_=r.indexOf,T={},I=T.toString,D=T.hasOwnProperty,x=D.toString,G=x.call(Object),$={},K=function(u){return typeof u=="function"&&typeof u.nodeType!="number"&&typeof u.item!="function"},Y=function(u){return u!=null&&u===u.window},Z=e.document,ve={type:!0,src:!0,nonce:!0,noModule:!0};function Te(s,u,h){h=h||Z;var d,m,y=h.createElement("script");if(y.text=s,u)for(d in ve)m=u[d]||u.getAttribute&&u.getAttribute(d),m&&y.setAttribute(d,m);h.head.appendChild(y).parentNode.removeChild(y)}function je(s){return s==null?s+"":typeof s=="object"||typeof s=="function"?T[I.call(s)]||"object":typeof s}var Ct="3.7.1",et=/HTML$/i,l=function(s,u){return new l.fn.init(s,u)};l.fn=l.prototype={jquery:Ct,constructor:l,length:0,toArray:function(){return a.call(this)},get:function(s){return s==null?a.call(this):s<0?this[s+this.length]:this[s]},pushStack:function(s){var u=l.merge(this.constructor(),s);return u.prevObject=this,u},each:function(s){return l.each(this,s)},map:function(s){return this.pushStack(l.map(this,function(u,h){return s.call(u,h,u)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(l.grep(this,function(s,u){return(u+1)%2}))},odd:function(){return this.pushStack(l.grep(this,function(s,u){return u%2}))},eq:function(s){var u=this.length,h=+s+(s<0?u:0);return this.pushStack(h>=0&&h<u?[this[h]]:[])},end:function(){return this.prevObject||this.constructor()},push:p,sort:r.sort,splice:r.splice},l.extend=l.fn.extend=function(){var s,u,h,d,m,y,v=arguments[0]||{},R=1,A=arguments.length,k=!1;for(typeof v=="boolean"&&(k=v,v=arguments[R]||{},R++),typeof v!="object"&&!K(v)&&(v={}),R===A&&(v=this,R--);R<A;R++)if((s=arguments[R])!=null)for(u in s)d=s[u],!(u==="__proto__"||v===d)&&(k&&d&&(l.isPlainObject(d)||(m=Array.isArray(d)))?(h=v[u],m&&!Array.isArray(h)?y=[]:!m&&!l.isPlainObject(h)?y={}:y=h,m=!1,v[u]=l.extend(k,y,d)):d!==void 0&&(v[u]=d));return v},l.extend({expando:"jQuery"+(Ct+Math.random()).replace(/\D/g,""),isReady:!0,error:function(s){throw new Error(s)},noop:function(){},isPlainObject:function(s){var u,h;return!s||I.call(s)!=="[object Object]"?!1:(u=i(s),u?(h=D.call(u,"constructor")&&u.constructor,typeof h=="function"&&x.call(h)===G):!0)},isEmptyObject:function(s){var u;for(u in s)return!1;return!0},globalEval:function(s,u,h){Te(s,{nonce:u&&u.nonce},h)},each:function(s,u){var h,d=0;if(C(s))for(h=s.length;d<h&&u.call(s[d],d,s[d])!==!1;d++);else for(d in s)if(u.call(s[d],d,s[d])===!1)break;return s},text:function(s){var u,h="",d=0,m=s.nodeType;if(!m)for(;u=s[d++];)h+=l.text(u);return m===1||m===11?s.textContent:m===9?s.documentElement.textContent:m===3||m===4?s.nodeValue:h},makeArray:function(s,u){var h=u||[];return s!=null&&(C(Object(s))?l.merge(h,typeof s=="string"?[s]:s):p.call(h,s)),h},inArray:function(s,u,h){return u==null?-1:_.call(u,s,h)},isXMLDoc:function(s){var u=s&&s.namespaceURI,h=s&&(s.ownerDocument||s).documentElement;return!et.test(u||h&&h.nodeName||"HTML")},merge:function(s,u){for(var h=+u.length,d=0,m=s.length;d<h;d++)s[m++]=u[d];return s.length=m,s},grep:function(s,u,h){for(var d,m=[],y=0,v=s.length,R=!h;y<v;y++)d=!u(s[y],y),d!==R&&m.push(s[y]);return m},map:function(s,u,h){var d,m,y=0,v=[];if(C(s))for(d=s.length;y<d;y++)m=u(s[y],y,h),m!=null&&v.push(m);else for(y in s)m=u(s[y],y,h),m!=null&&v.push(m);return c(v)},guid:1,support:$}),typeof Symbol=="function"&&(l.fn[Symbol.iterator]=r[Symbol.iterator]),l.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(s,u){T["[object "+u+"]"]=u.toLowerCase()});function C(s){var u=!!s&&"length"in s&&s.length,h=je(s);return K(s)||Y(s)?!1:h==="array"||u===0||typeof u=="number"&&u>0&&u-1 in s}function S(s,u){return s.nodeName&&s.nodeName.toLowerCase()===u.toLowerCase()}var N=r.pop,V=r.sort,M=r.splice,b="[\\x20\\t\\r\\n\\f]",gt=new RegExp("^"+b+"+|((?:^|[^\\\\])(?:\\\\.)*)"+b+"+$","g");l.contains=function(s,u){var h=u&&u.parentNode;return s===h||!!(h&&h.nodeType===1&&(s.contains?s.contains(h):s.compareDocumentPosition&&s.compareDocumentPosition(h)&16))};var ur=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function sa(s,u){return u?s==="\0"?"�":s.slice(0,-1)+"\\"+s.charCodeAt(s.length-1).toString(16)+" ":"\\"+s}l.escapeSelector=function(s){return(s+"").replace(ur,sa)};var mt=Z,dn=p;(function(){var s,u,h,d,m,y=dn,v,R,A,k,q,B=l.expando,F=0,Q=0,ue=An(),Ee=An(),le=An(),We=An(),Be=function(w,P){return w===P&&(m=!0),0},Pt="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",kt="(?:\\\\[\\da-fA-F]{1,6}"+b+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",ye="\\["+b+"*("+kt+")(?:"+b+"*([*^$|!~]?=)"+b+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+kt+"))|)"+b+"*\\]",$e=":("+kt+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+ye+")*)|.*)\\)|)",Ae=new RegExp(b+"+","g"),Fe=new RegExp("^"+b+"*,"+b+"*"),Ft=new RegExp("^"+b+"*([>+~]|"+b+")"+b+"*"),o=new RegExp(b+"|>"),f=new RegExp($e),g=new RegExp("^"+kt+"$"),E={ID:new RegExp("^#("+kt+")"),CLASS:new RegExp("^\\.("+kt+")"),TAG:new RegExp("^("+kt+"|[*])"),ATTR:new RegExp("^"+ye),PSEUDO:new RegExp("^"+$e),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+b+"*(even|odd|(([+-]|)(\\d*)n|)"+b+"*(?:([+-]|)"+b+"*(\\d+)|))"+b+"*\\)|)","i"),bool:new RegExp("^(?:"+Pt+")$","i"),needsContext:new RegExp("^"+b+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+b+"*((?:-\\d)?\\d*)"+b+"*\\)|)(?=[^-]|$)","i")},O=/^(?:input|select|textarea|button)$/i,U=/^h\d$/i,X=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,De=/[+~]/,Ve=new RegExp("\\\\[\\da-fA-F]{1,6}"+b+"?|\\\\([^\\r\\n\\f])","g"),me=function(w,P){var L="0x"+w.slice(1)-65536;return P||(L<0?String.fromCharCode(L+65536):String.fromCharCode(L>>10|55296,L&1023|56320))},nt=function(){qn()},rt=Xs(function(w){return w.disabled===!0&&S(w,"fieldset")},{dir:"parentNode",next:"legend"});function jn(){try{return v.activeElement}catch{}}try{y.apply(r=a.call(mt.childNodes),mt.childNodes),r[mt.childNodes.length].nodeType}catch{y={apply:function(P,L){dn.apply(P,a.call(L))},call:function(P){dn.apply(P,a.call(arguments,1))}}}function _e(w,P,L,j){var H,J,te,se,ne,we,he,de=P&&P.ownerDocument,Ie=P?P.nodeType:9;if(L=L||[],typeof w!="string"||!w||Ie!==1&&Ie!==9&&Ie!==11)return L;if(!j&&(qn(P),P=P||v,A)){if(Ie!==11&&(ne=X.exec(w)))if(H=ne[1]){if(Ie===9)if(te=P.getElementById(H)){if(te.id===H)return y.call(L,te),L}else return L;else if(de&&(te=de.getElementById(H))&&_e.contains(P,te)&&te.id===H)return y.call(L,te),L}else{if(ne[2])return y.apply(L,P.getElementsByTagName(w)),L;if((H=ne[3])&&P.getElementsByClassName)return y.apply(L,P.getElementsByClassName(H)),L}if(!We[w+" "]&&(!k||!k.test(w))){if(he=w,de=P,Ie===1&&(o.test(w)||Ft.test(w))){for(de=De.test(w)&&va(P.parentNode)||P,(de!=P||!$.scope)&&((se=P.getAttribute("id"))?se=l.escapeSelector(se):P.setAttribute("id",se=B)),we=Qi(w),J=we.length;J--;)we[J]=(se?"#"+se:":scope")+" "+Qs(we[J]);he=we.join(",")}try{return y.apply(L,de.querySelectorAll(he)),L}catch{We(w,!0)}finally{se===B&&P.removeAttribute("id")}}}return tc(w.replace(gt,"$1"),P,L,j)}function An(){var w=[];function P(L,j){return w.push(L+" ")>u.cacheLength&&delete P[w.shift()],P[L+" "]=j}return P}function Tt(w){return w[B]=!0,w}function ni(w){var P=v.createElement("fieldset");try{return!!w(P)}catch{return!1}finally{P.parentNode&&P.parentNode.removeChild(P),P=null}}function nd(w){return function(P){return S(P,"input")&&P.type===w}}function rd(w){return function(P){return(S(P,"input")||S(P,"button"))&&P.type===w}}function Zu(w){return function(P){return"form"in P?P.parentNode&&P.disabled===!1?"label"in P?"label"in P.parentNode?P.parentNode.disabled===w:P.disabled===w:P.isDisabled===w||P.isDisabled!==!w&&rt(P)===w:P.disabled===w:"label"in P?P.disabled===w:!1}}function Er(w){return Tt(function(P){return P=+P,Tt(function(L,j){for(var H,J=w([],L.length,P),te=J.length;te--;)L[H=J[te]]&&(L[H]=!(j[H]=L[H]))})})}function va(w){return w&&typeof w.getElementsByTagName<"u"&&w}function qn(w){var P,L=w?w.ownerDocument||w:mt;return L==v||L.nodeType!==9||!L.documentElement||(v=L,R=v.documentElement,A=!l.isXMLDoc(v),q=R.matches||R.webkitMatchesSelector||R.msMatchesSelector,R.msMatchesSelector&&mt!=v&&(P=v.defaultView)&&P.top!==P&&P.addEventListener("unload",nt),$.getById=ni(function(j){return R.appendChild(j).id=l.expando,!v.getElementsByName||!v.getElementsByName(l.expando).length}),$.disconnectedMatch=ni(function(j){return q.call(j,"*")}),$.scope=ni(function(){return v.querySelectorAll(":scope")}),$.cssHas=ni(function(){try{return v.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),$.getById?(u.filter.ID=function(j){var H=j.replace(Ve,me);return function(J){return J.getAttribute("id")===H}},u.find.ID=function(j,H){if(typeof H.getElementById<"u"&&A){var J=H.getElementById(j);return J?[J]:[]}}):(u.filter.ID=function(j){var H=j.replace(Ve,me);return function(J){var te=typeof J.getAttributeNode<"u"&&J.getAttributeNode("id");return te&&te.value===H}},u.find.ID=function(j,H){if(typeof H.getElementById<"u"&&A){var J,te,se,ne=H.getElementById(j);if(ne){if(J=ne.getAttributeNode("id"),J&&J.value===j)return[ne];for(se=H.getElementsByName(j),te=0;ne=se[te++];)if(J=ne.getAttributeNode("id"),J&&J.value===j)return[ne]}return[]}}),u.find.TAG=function(j,H){return typeof H.getElementsByTagName<"u"?H.getElementsByTagName(j):H.querySelectorAll(j)},u.find.CLASS=function(j,H){if(typeof H.getElementsByClassName<"u"&&A)return H.getElementsByClassName(j)},k=[],ni(function(j){var H;R.appendChild(j).innerHTML="<a id='"+B+"' href='' disabled='disabled'></a><select id='"+B+"-\r\\' disabled='disabled'><option selected=''></option></select>",j.querySelectorAll("[selected]").length||k.push("\\["+b+"*(?:value|"+Pt+")"),j.querySelectorAll("[id~="+B+"-]").length||k.push("~="),j.querySelectorAll("a#"+B+"+*").length||k.push(".#.+[+~]"),j.querySelectorAll(":checked").length||k.push(":checked"),H=v.createElement("input"),H.setAttribute("type","hidden"),j.appendChild(H).setAttribute("name","D"),R.appendChild(j).disabled=!0,j.querySelectorAll(":disabled").length!==2&&k.push(":enabled",":disabled"),H=v.createElement("input"),H.setAttribute("name",""),j.appendChild(H),j.querySelectorAll("[name='']").length||k.push("\\["+b+"*name"+b+"*="+b+`*(?:''|"")`)}),$.cssHas||k.push(":has"),k=k.length&&new RegExp(k.join("|")),Be=function(j,H){if(j===H)return m=!0,0;var J=!j.compareDocumentPosition-!H.compareDocumentPosition;return J||(J=(j.ownerDocument||j)==(H.ownerDocument||H)?j.compareDocumentPosition(H):1,J&1||!$.sortDetached&&H.compareDocumentPosition(j)===J?j===v||j.ownerDocument==mt&&_e.contains(mt,j)?-1:H===v||H.ownerDocument==mt&&_e.contains(mt,H)?1:d?_.call(d,j)-_.call(d,H):0:J&4?-1:1)}),v}_e.matches=function(w,P){return _e(w,null,null,P)},_e.matchesSelector=function(w,P){if(qn(w),A&&!We[P+" "]&&(!k||!k.test(P)))try{var L=q.call(w,P);if(L||$.disconnectedMatch||w.document&&w.document.nodeType!==11)return L}catch{We(P,!0)}return _e(P,v,null,[w]).length>0},_e.contains=function(w,P){return(w.ownerDocument||w)!=v&&qn(w),l.contains(w,P)},_e.attr=function(w,P){(w.ownerDocument||w)!=v&&qn(w);var L=u.attrHandle[P.toLowerCase()],j=L&&D.call(u.attrHandle,P.toLowerCase())?L(w,P,!A):void 0;return j!==void 0?j:w.getAttribute(P)},_e.error=function(w){throw new Error("Syntax error, unrecognized expression: "+w)},l.uniqueSort=function(w){var P,L=[],j=0,H=0;if(m=!$.sortStable,d=!$.sortStable&&a.call(w,0),V.call(w,Be),m){for(;P=w[H++];)P===w[H]&&(j=L.push(H));for(;j--;)M.call(w,L[j],1)}return d=null,w},l.fn.uniqueSort=function(){return this.pushStack(l.uniqueSort(a.apply(this)))},u=l.expr={cacheLength:50,createPseudo:Tt,match:E,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(w){return w[1]=w[1].replace(Ve,me),w[3]=(w[3]||w[4]||w[5]||"").replace(Ve,me),w[2]==="~="&&(w[3]=" "+w[3]+" "),w.slice(0,4)},CHILD:function(w){return w[1]=w[1].toLowerCase(),w[1].slice(0,3)==="nth"?(w[3]||_e.error(w[0]),w[4]=+(w[4]?w[5]+(w[6]||1):2*(w[3]==="even"||w[3]==="odd")),w[5]=+(w[7]+w[8]||w[3]==="odd")):w[3]&&_e.error(w[0]),w},PSEUDO:function(w){var P,L=!w[6]&&w[2];return E.CHILD.test(w[0])?null:(w[3]?w[2]=w[4]||w[5]||"":L&&f.test(L)&&(P=Qi(L,!0))&&(P=L.indexOf(")",L.length-P)-L.length)&&(w[0]=w[0].slice(0,P),w[2]=L.slice(0,P)),w.slice(0,3))}},filter:{TAG:function(w){var P=w.replace(Ve,me).toLowerCase();return w==="*"?function(){return!0}:function(L){return S(L,P)}},CLASS:function(w){var P=ue[w+" "];return P||(P=new RegExp("(^|"+b+")"+w+"("+b+"|$)"))&&ue(w,function(L){return P.test(typeof L.className=="string"&&L.className||typeof L.getAttribute<"u"&&L.getAttribute("class")||"")})},ATTR:function(w,P,L){return function(j){var H=_e.attr(j,w);return H==null?P==="!=":P?(H+="",P==="="?H===L:P==="!="?H!==L:P==="^="?L&&H.indexOf(L)===0:P==="*="?L&&H.indexOf(L)>-1:P==="$="?L&&H.slice(-L.length)===L:P==="~="?(" "+H.replace(Ae," ")+" ").indexOf(L)>-1:P==="|="?H===L||H.slice(0,L.length+1)===L+"-":!1):!0}},CHILD:function(w,P,L,j,H){var J=w.slice(0,3)!=="nth",te=w.slice(-4)!=="last",se=P==="of-type";return j===1&&H===0?function(ne){return!!ne.parentNode}:function(ne,we,he){var de,Ie,ae,Oe,It,lt=J!==te?"nextSibling":"previousSibling",Ut=ne.parentNode,nn=se&&ne.nodeName.toLowerCase(),ri=!he&&!se,Et=!1;if(Ut){if(J){for(;lt;){for(ae=ne;ae=ae[lt];)if(se?S(ae,nn):ae.nodeType===1)return!1;It=lt=w==="only"&&!It&&"nextSibling"}return!0}if(It=[te?Ut.firstChild:Ut.lastChild],te&&ri){for(Ie=Ut[B]||(Ut[B]={}),de=Ie[w]||[],Oe=de[0]===F&&de[1],Et=Oe&&de[2],ae=Oe&&Ut.childNodes[Oe];ae=++Oe&&ae&&ae[lt]||(Et=Oe=0)||It.pop();)if(ae.nodeType===1&&++Et&&ae===ne){Ie[w]=[F,Oe,Et];break}}else if(ri&&(Ie=ne[B]||(ne[B]={}),de=Ie[w]||[],Oe=de[0]===F&&de[1],Et=Oe),Et===!1)for(;(ae=++Oe&&ae&&ae[lt]||(Et=Oe=0)||It.pop())&&!((se?S(ae,nn):ae.nodeType===1)&&++Et&&(ri&&(Ie=ae[B]||(ae[B]={}),Ie[w]=[F,Et]),ae===ne)););return Et-=H,Et===j||Et%j===0&&Et/j>=0}}},PSEUDO:function(w,P){var L,j=u.pseudos[w]||u.setFilters[w.toLowerCase()]||_e.error("unsupported pseudo: "+w);return j[B]?j(P):j.length>1?(L=[w,w,"",P],u.setFilters.hasOwnProperty(w.toLowerCase())?Tt(function(H,J){for(var te,se=j(H,P),ne=se.length;ne--;)te=_.call(H,se[ne]),H[te]=!(J[te]=se[ne])}):function(H){return j(H,0,L)}):j}},pseudos:{not:Tt(function(w){var P=[],L=[],j=Ia(w.replace(gt,"$1"));return j[B]?Tt(function(H,J,te,se){for(var ne,we=j(H,null,se,[]),he=H.length;he--;)(ne=we[he])&&(H[he]=!(J[he]=ne))}):function(H,J,te){return P[0]=H,j(P,null,te,L),P[0]=null,!L.pop()}}),has:Tt(function(w){return function(P){return _e(w,P).length>0}}),contains:Tt(function(w){return w=w.replace(Ve,me),function(P){return(P.textContent||l.text(P)).indexOf(w)>-1}}),lang:Tt(function(w){return g.test(w||"")||_e.error("unsupported lang: "+w),w=w.replace(Ve,me).toLowerCase(),function(P){var L;do if(L=A?P.lang:P.getAttribute("xml:lang")||P.getAttribute("lang"))return L=L.toLowerCase(),L===w||L.indexOf(w+"-")===0;while((P=P.parentNode)&&P.nodeType===1);return!1}}),target:function(w){var P=e.location&&e.location.hash;return P&&P.slice(1)===w.id},root:function(w){return w===R},focus:function(w){return w===jn()&&v.hasFocus()&&!!(w.type||w.href||~w.tabIndex)},enabled:Zu(!1),disabled:Zu(!0),checked:function(w){return S(w,"input")&&!!w.checked||S(w,"option")&&!!w.selected},selected:function(w){return w.parentNode&&w.parentNode.selectedIndex,w.selected===!0},empty:function(w){for(w=w.firstChild;w;w=w.nextSibling)if(w.nodeType<6)return!1;return!0},parent:function(w){return!u.pseudos.empty(w)},header:function(w){return U.test(w.nodeName)},input:function(w){return O.test(w.nodeName)},button:function(w){return S(w,"input")&&w.type==="button"||S(w,"button")},text:function(w){var P;return S(w,"input")&&w.type==="text"&&((P=w.getAttribute("type"))==null||P.toLowerCase()==="text")},first:Er(function(){return[0]}),last:Er(function(w,P){return[P-1]}),eq:Er(function(w,P,L){return[L<0?L+P:L]}),even:Er(function(w,P){for(var L=0;L<P;L+=2)w.push(L);return w}),odd:Er(function(w,P){for(var L=1;L<P;L+=2)w.push(L);return w}),lt:Er(function(w,P,L){var j;for(L<0?j=L+P:L>P?j=P:j=L;--j>=0;)w.push(j);return w}),gt:Er(function(w,P,L){for(var j=L<0?L+P:L;++j<P;)w.push(j);return w})}},u.pseudos.nth=u.pseudos.eq;for(s in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})u.pseudos[s]=nd(s);for(s in{submit:!0,reset:!0})u.pseudos[s]=rd(s);function ec(){}ec.prototype=u.filters=u.pseudos,u.setFilters=new ec;function Qi(w,P){var L,j,H,J,te,se,ne,we=Ee[w+" "];if(we)return P?0:we.slice(0);for(te=w,se=[],ne=u.preFilter;te;){(!L||(j=Fe.exec(te)))&&(j&&(te=te.slice(j[0].length)||te),se.push(H=[])),L=!1,(j=Ft.exec(te))&&(L=j.shift(),H.push({value:L,type:j[0].replace(gt," ")}),te=te.slice(L.length));for(J in u.filter)(j=E[J].exec(te))&&(!ne[J]||(j=ne[J](j)))&&(L=j.shift(),H.push({value:L,type:J,matches:j}),te=te.slice(L.length));if(!L)break}return P?te.length:te?_e.error(w):Ee(w,se).slice(0)}function Qs(w){for(var P=0,L=w.length,j="";P<L;P++)j+=w[P].value;return j}function Xs(w,P,L){var j=P.dir,H=P.next,J=H||j,te=L&&J==="parentNode",se=Q++;return P.first?function(ne,we,he){for(;ne=ne[j];)if(ne.nodeType===1||te)return w(ne,we,he);return!1}:function(ne,we,he){var de,Ie,ae=[F,se];if(he){for(;ne=ne[j];)if((ne.nodeType===1||te)&&w(ne,we,he))return!0}else for(;ne=ne[j];)if(ne.nodeType===1||te)if(Ie=ne[B]||(ne[B]={}),H&&S(ne,H))ne=ne[j]||ne;else{if((de=Ie[J])&&de[0]===F&&de[1]===se)return ae[2]=de[2];if(Ie[J]=ae,ae[2]=w(ne,we,he))return!0}return!1}}function Ta(w){return w.length>1?function(P,L,j){for(var H=w.length;H--;)if(!w[H](P,L,j))return!1;return!0}:w[0]}function id(w,P,L){for(var j=0,H=P.length;j<H;j++)_e(w,P[j],L);return L}function Js(w,P,L,j,H){for(var J,te=[],se=0,ne=w.length,we=P!=null;se<ne;se++)(J=w[se])&&(!L||L(J,j,H))&&(te.push(J),we&&P.push(se));return te}function Ea(w,P,L,j,H,J){return j&&!j[B]&&(j=Ea(j)),H&&!H[B]&&(H=Ea(H,J)),Tt(function(te,se,ne,we){var he,de,Ie,ae,Oe=[],It=[],lt=se.length,Ut=te||id(P||"*",ne.nodeType?[ne]:ne,[]),nn=w&&(te||!P)?Js(Ut,Oe,w,ne,we):Ut;if(L?(ae=H||(te?w:lt||j)?[]:se,L(nn,ae,ne,we)):ae=nn,j)for(he=Js(ae,It),j(he,[],ne,we),de=he.length;de--;)(Ie=he[de])&&(ae[It[de]]=!(nn[It[de]]=Ie));if(te){if(H||w){if(H){for(he=[],de=ae.length;de--;)(Ie=ae[de])&&he.push(nn[de]=Ie);H(null,ae=[],he,we)}for(de=ae.length;de--;)(Ie=ae[de])&&(he=H?_.call(te,Ie):Oe[de])>-1&&(te[he]=!(se[he]=Ie))}}else ae=Js(ae===se?ae.splice(lt,ae.length):ae),H?H(null,se,ae,we):y.apply(se,ae)})}function wa(w){for(var P,L,j,H=w.length,J=u.relative[w[0].type],te=J||u.relative[" "],se=J?1:0,ne=Xs(function(de){return de===P},te,!0),we=Xs(function(de){return _.call(P,de)>-1},te,!0),he=[function(de,Ie,ae){var Oe=!J&&(ae||Ie!=h)||((P=Ie).nodeType?ne(de,Ie,ae):we(de,Ie,ae));return P=null,Oe}];se<H;se++)if(L=u.relative[w[se].type])he=[Xs(Ta(he),L)];else{if(L=u.filter[w[se].type].apply(null,w[se].matches),L[B]){for(j=++se;j<H&&!u.relative[w[j].type];j++);return Ea(se>1&&Ta(he),se>1&&Qs(w.slice(0,se-1).concat({value:w[se-2].type===" "?"*":""})).replace(gt,"$1"),L,se<j&&wa(w.slice(se,j)),j<H&&wa(w=w.slice(j)),j<H&&Qs(w))}he.push(L)}return Ta(he)}function sd(w,P){var L=P.length>0,j=w.length>0,H=function(J,te,se,ne,we){var he,de,Ie,ae=0,Oe="0",It=J&&[],lt=[],Ut=h,nn=J||j&&u.find.TAG("*",we),ri=F+=Ut==null?1:Math.random()||.1,Et=nn.length;for(we&&(h=te==v||te||we);Oe!==Et&&(he=nn[Oe])!=null;Oe++){if(j&&he){for(de=0,!te&&he.ownerDocument!=v&&(qn(he),se=!A);Ie=w[de++];)if(Ie(he,te||v,se)){y.call(ne,he);break}we&&(F=ri)}L&&((he=!Ie&&he)&&ae--,J&&It.push(he))}if(ae+=Oe,L&&Oe!==ae){for(de=0;Ie=P[de++];)Ie(It,lt,te,se);if(J){if(ae>0)for(;Oe--;)It[Oe]||lt[Oe]||(lt[Oe]=N.call(ne));lt=Js(lt)}y.apply(ne,lt),we&&!J&&lt.length>0&&ae+P.length>1&&l.uniqueSort(ne)}return we&&(F=ri,h=Ut),It};return L?Tt(H):H}function Ia(w,P){var L,j=[],H=[],J=le[w+" "];if(!J){for(P||(P=Qi(w)),L=P.length;L--;)J=wa(P[L]),J[B]?j.push(J):H.push(J);J=le(w,sd(H,j)),J.selector=w}return J}function tc(w,P,L,j){var H,J,te,se,ne,we=typeof w=="function"&&w,he=!j&&Qi(w=we.selector||w);if(L=L||[],he.length===1){if(J=he[0]=he[0].slice(0),J.length>2&&(te=J[0]).type==="ID"&&P.nodeType===9&&A&&u.relative[J[1].type]){if(P=(u.find.ID(te.matches[0].replace(Ve,me),P)||[])[0],P)we&&(P=P.parentNode);else return L;w=w.slice(J.shift().value.length)}for(H=E.needsContext.test(w)?0:J.length;H--&&(te=J[H],!u.relative[se=te.type]);)if((ne=u.find[se])&&(j=ne(te.matches[0].replace(Ve,me),De.test(J[0].type)&&va(P.parentNode)||P))){if(J.splice(H,1),w=j.length&&Qs(J),!w)return y.apply(L,j),L;break}}return(we||Ia(w,he))(j,P,!A,L,!P||De.test(w)&&va(P.parentNode)||P),L}$.sortStable=B.split("").sort(Be).join("")===B,qn(),$.sortDetached=ni(function(w){return w.compareDocumentPosition(v.createElement("fieldset"))&1}),l.find=_e,l.expr[":"]=l.expr.pseudos,l.unique=l.uniqueSort,_e.compile=Ia,_e.select=tc,_e.setDocument=qn,_e.tokenize=Qi,_e.escape=l.escapeSelector,_e.getText=l.text,_e.isXML=l.isXMLDoc,_e.selectors=l.expr,_e.support=l.support,_e.uniqueSort=l.uniqueSort})();var Gt=function(s,u,h){for(var d=[],m=h!==void 0;(s=s[u])&&s.nodeType!==9;)if(s.nodeType===1){if(m&&l(s).is(h))break;d.push(s)}return d},Di=function(s,u){for(var h=[];s;s=s.nextSibling)s.nodeType===1&&s!==u&&h.push(s);return h},Cs=l.expr.match.needsContext,qt=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function ze(s,u,h){return K(u)?l.grep(s,function(d,m){return!!u.call(d,m,d)!==h}):u.nodeType?l.grep(s,function(d){return d===u!==h}):typeof u!="string"?l.grep(s,function(d){return _.call(u,d)>-1!==h}):l.filter(u,s,h)}l.filter=function(s,u,h){var d=u[0];return h&&(s=":not("+s+")"),u.length===1&&d.nodeType===1?l.find.matchesSelector(d,s)?[d]:[]:l.find.matches(s,l.grep(u,function(m){return m.nodeType===1}))},l.fn.extend({find:function(s){var u,h,d=this.length,m=this;if(typeof s!="string")return this.pushStack(l(s).filter(function(){for(u=0;u<d;u++)if(l.contains(m[u],this))return!0}));for(h=this.pushStack([]),u=0;u<d;u++)l.find(s,m[u],h);return d>1?l.uniqueSort(h):h},filter:function(s){return this.pushStack(ze(this,s||[],!1))},not:function(s){return this.pushStack(ze(this,s||[],!0))},is:function(s){return!!ze(this,typeof s=="string"&&Cs.test(s)?l(s):s||[],!1).length}});var Rs,cr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,oa=l.fn.init=function(s,u,h){var d,m;if(!s)return this;if(h=h||Rs,typeof s=="string")if(s[0]==="<"&&s[s.length-1]===">"&&s.length>=3?d=[null,s,null]:d=cr.exec(s),d&&(d[1]||!u))if(d[1]){if(u=u instanceof l?u[0]:u,l.merge(this,l.parseHTML(d[1],u&&u.nodeType?u.ownerDocument||u:Z,!0)),qt.test(d[1])&&l.isPlainObject(u))for(d in u)K(this[d])?this[d](u[d]):this.attr(d,u[d]);return this}else return m=Z.getElementById(d[2]),m&&(this[0]=m,this.length=1),this;else return!u||u.jquery?(u||h).find(s):this.constructor(u).find(s);else{if(s.nodeType)return this[0]=s,this.length=1,this;if(K(s))return h.ready!==void 0?h.ready(s):s(l)}return l.makeArray(s,this)};oa.prototype=l.fn,Rs=l(Z);var xr=/^(?:parents|prev(?:Until|All))/,aa={children:!0,contents:!0,next:!0,prev:!0};l.fn.extend({has:function(s){var u=l(s,this),h=u.length;return this.filter(function(){for(var d=0;d<h;d++)if(l.contains(this,u[d]))return!0})},closest:function(s,u){var h,d=0,m=this.length,y=[],v=typeof s!="string"&&l(s);if(!Cs.test(s)){for(;d<m;d++)for(h=this[d];h&&h!==u;h=h.parentNode)if(h.nodeType<11&&(v?v.index(h)>-1:h.nodeType===1&&l.find.matchesSelector(h,s))){y.push(h);break}}return this.pushStack(y.length>1?l.uniqueSort(y):y)},index:function(s){return s?typeof s=="string"?_.call(l(s),this[0]):_.call(this,s.jquery?s[0]:s):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(s,u){return this.pushStack(l.uniqueSort(l.merge(this.get(),l(s,u))))},addBack:function(s){return this.add(s==null?this.prevObject:this.prevObject.filter(s))}});function Ps(s,u){for(;(s=s[u])&&s.nodeType!==1;);return s}l.each({parent:function(s){var u=s.parentNode;return u&&u.nodeType!==11?u:null},parents:function(s){return Gt(s,"parentNode")},parentsUntil:function(s,u,h){return Gt(s,"parentNode",h)},next:function(s){return Ps(s,"nextSibling")},prev:function(s){return Ps(s,"previousSibling")},nextAll:function(s){return Gt(s,"nextSibling")},prevAll:function(s){return Gt(s,"previousSibling")},nextUntil:function(s,u,h){return Gt(s,"nextSibling",h)},prevUntil:function(s,u,h){return Gt(s,"previousSibling",h)},siblings:function(s){return Di((s.parentNode||{}).firstChild,s)},children:function(s){return Di(s.firstChild)},contents:function(s){return s.contentDocument!=null&&i(s.contentDocument)?s.contentDocument:(S(s,"template")&&(s=s.content||s),l.merge([],s.childNodes))}},function(s,u){l.fn[s]=function(h,d){var m=l.map(this,u,h);return s.slice(-5)!=="Until"&&(d=h),d&&typeof d=="string"&&(m=l.filter(d,m)),this.length>1&&(aa[s]||l.uniqueSort(m),xr.test(s)&&m.reverse()),this.pushStack(m)}});var yt=/[^\x20\t\r\n\f]+/g;function Vr(s){var u={};return l.each(s.match(yt)||[],function(h,d){u[d]=!0}),u}l.Callbacks=function(s){s=typeof s=="string"?Vr(s):l.extend({},s);var u,h,d,m,y=[],v=[],R=-1,A=function(){for(m=m||s.once,d=u=!0;v.length;R=-1)for(h=v.shift();++R<y.length;)y[R].apply(h[0],h[1])===!1&&s.stopOnFalse&&(R=y.length,h=!1);s.memory||(h=!1),u=!1,m&&(h?y=[]:y="")},k={add:function(){return y&&(h&&!u&&(R=y.length-1,v.push(h)),(function q(B){l.each(B,function(F,Q){K(Q)?(!s.unique||!k.has(Q))&&y.push(Q):Q&&Q.length&&je(Q)!=="string"&&q(Q)})})(arguments),h&&!u&&A()),this},remove:function(){return l.each(arguments,function(q,B){for(var F;(F=l.inArray(B,y,F))>-1;)y.splice(F,1),F<=R&&R--}),this},has:function(q){return q?l.inArray(q,y)>-1:y.length>0},empty:function(){return y&&(y=[]),this},disable:function(){return m=v=[],y=h="",this},disabled:function(){return!y},lock:function(){return m=v=[],!h&&!u&&(y=h=""),this},locked:function(){return!!m},fireWith:function(q,B){return m||(B=B||[],B=[q,B.slice?B.slice():B],v.push(B),u||A()),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k};function Kt(s){return s}function Vn(s){throw s}function Or(s,u,h,d){var m;try{s&&K(m=s.promise)?m.call(s).done(u).fail(h):s&&K(m=s.then)?m.call(s,u,h):u.apply(void 0,[s].slice(d))}catch(y){h.apply(void 0,[y])}}l.extend({Deferred:function(s){var u=[["notify","progress",l.Callbacks("memory"),l.Callbacks("memory"),2],["resolve","done",l.Callbacks("once memory"),l.Callbacks("once memory"),0,"resolved"],["reject","fail",l.Callbacks("once memory"),l.Callbacks("once memory"),1,"rejected"]],h="pending",d={state:function(){return h},always:function(){return m.done(arguments).fail(arguments),this},catch:function(y){return d.then(null,y)},pipe:function(){var y=arguments;return l.Deferred(function(v){l.each(u,function(R,A){var k=K(y[A[4]])&&y[A[4]];m[A[1]](function(){var q=k&&k.apply(this,arguments);q&&K(q.promise)?q.promise().progress(v.notify).done(v.resolve).fail(v.reject):v[A[0]+"With"](this,k?[q]:arguments)})}),y=null}).promise()},then:function(y,v,R){var A=0;function k(q,B,F,Q){return function(){var ue=this,Ee=arguments,le=function(){var Be,Pt;if(!(q<A)){if(Be=F.apply(ue,Ee),Be===B.promise())throw new TypeError("Thenable self-resolution");Pt=Be&&(typeof Be=="object"||typeof Be=="function")&&Be.then,K(Pt)?Q?Pt.call(Be,k(A,B,Kt,Q),k(A,B,Vn,Q)):(A++,Pt.call(Be,k(A,B,Kt,Q),k(A,B,Vn,Q),k(A,B,Kt,B.notifyWith))):(F!==Kt&&(ue=void 0,Ee=[Be]),(Q||B.resolveWith)(ue,Ee))}},We=Q?le:function(){try{le()}catch(Be){l.Deferred.exceptionHook&&l.Deferred.exceptionHook(Be,We.error),q+1>=A&&(F!==Vn&&(ue=void 0,Ee=[Be]),B.rejectWith(ue,Ee))}};q?We():(l.Deferred.getErrorHook?We.error=l.Deferred.getErrorHook():l.Deferred.getStackHook&&(We.error=l.Deferred.getStackHook()),e.setTimeout(We))}}return l.Deferred(function(q){u[0][3].add(k(0,q,K(R)?R:Kt,q.notifyWith)),u[1][3].add(k(0,q,K(y)?y:Kt)),u[2][3].add(k(0,q,K(v)?v:Vn))}).promise()},promise:function(y){return y!=null?l.extend(y,d):d}},m={};return l.each(u,function(y,v){var R=v[2],A=v[5];d[v[1]]=R.add,A&&R.add(function(){h=A},u[3-y][2].disable,u[3-y][3].disable,u[0][2].lock,u[0][3].lock),R.add(v[3].fire),m[v[0]]=function(){return m[v[0]+"With"](this===m?void 0:this,arguments),this},m[v[0]+"With"]=R.fireWith}),d.promise(m),s&&s.call(m,m),m},when:function(s){var u=arguments.length,h=u,d=Array(h),m=a.call(arguments),y=l.Deferred(),v=function(R){return function(A){d[R]=this,m[R]=arguments.length>1?a.call(arguments):A,--u||y.resolveWith(d,m)}};if(u<=1&&(Or(s,y.done(v(h)).resolve,y.reject,!u),y.state()==="pending"||K(m[h]&&m[h].then)))return y.then();for(;h--;)Or(m[h],v(h),y.reject);return y.promise()}});var Ni=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;l.Deferred.exceptionHook=function(s,u){e.console&&e.console.warn&&s&&Ni.test(s.name)&&e.console.warn("jQuery.Deferred exception: "+s.message,s.stack,u)},l.readyException=function(s){e.setTimeout(function(){throw s})};var Mr=l.Deferred();l.fn.ready=function(s){return Mr.then(s).catch(function(u){l.readyException(u)}),this},l.extend({isReady:!1,readyWait:1,ready:function(s){(s===!0?--l.readyWait:l.isReady)||(l.isReady=!0,!(s!==!0&&--l.readyWait>0)&&Mr.resolveWith(Z,[l]))}}),l.ready.then=Mr.then;function Lr(){Z.removeEventListener("DOMContentLoaded",Lr),e.removeEventListener("load",Lr),l.ready()}Z.readyState==="complete"||Z.readyState!=="loading"&&!Z.documentElement.doScroll?e.setTimeout(l.ready):(Z.addEventListener("DOMContentLoaded",Lr),e.addEventListener("load",Lr));var Bt=function(s,u,h,d,m,y,v){var R=0,A=s.length,k=h==null;if(je(h)==="object"){m=!0;for(R in h)Bt(s,u,R,h[R],!0,y,v)}else if(d!==void 0&&(m=!0,K(d)||(v=!0),k&&(v?(u.call(s,d),u=null):(k=u,u=function(q,B,F){return k.call(l(q),F)})),u))for(;R<A;R++)u(s[R],h,v?d:d.call(s[R],R,u(s[R],h)));return m?s:k?u.call(s):A?u(s[0],h):y},ks=/^-ms-/,xi=/-([a-z])/g;function Ds(s,u){return u.toUpperCase()}function Nt(s){return s.replace(ks,"ms-").replace(xi,Ds)}var pn=function(s){return s.nodeType===1||s.nodeType===9||!+s.nodeType};function gn(){this.expando=l.expando+gn.uid++}gn.uid=1,gn.prototype={cache:function(s){var u=s[this.expando];return u||(u={},pn(s)&&(s.nodeType?s[this.expando]=u:Object.defineProperty(s,this.expando,{value:u,configurable:!0}))),u},set:function(s,u,h){var d,m=this.cache(s);if(typeof u=="string")m[Nt(u)]=h;else for(d in u)m[Nt(d)]=u[d];return m},get:function(s,u){return u===void 0?this.cache(s):s[this.expando]&&s[this.expando][Nt(u)]},access:function(s,u,h){return u===void 0||u&&typeof u=="string"&&h===void 0?this.get(s,u):(this.set(s,u,h),h!==void 0?h:u)},remove:function(s,u){var h,d=s[this.expando];if(d!==void 0){if(u!==void 0)for(Array.isArray(u)?u=u.map(Nt):(u=Nt(u),u=u in d?[u]:u.match(yt)||[]),h=u.length;h--;)delete d[u[h]];(u===void 0||l.isEmptyObject(d))&&(s.nodeType?s[this.expando]=void 0:delete s[this.expando])}},hasData:function(s){var u=s[this.expando];return u!==void 0&&!l.isEmptyObject(u)}};var ie=new gn,ke=new gn,st=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Fr=/[A-Z]/g;function Ns(s){return s==="true"?!0:s==="false"?!1:s==="null"?null:s===+s+""?+s:st.test(s)?JSON.parse(s):s}function Vi(s,u,h){var d;if(h===void 0&&s.nodeType===1)if(d="data-"+u.replace(Fr,"-$&").toLowerCase(),h=s.getAttribute(d),typeof h=="string"){try{h=Ns(h)}catch{}ke.set(s,u,h)}else h=void 0;return h}l.extend({hasData:function(s){return ke.hasData(s)||ie.hasData(s)},data:function(s,u,h){return ke.access(s,u,h)},removeData:function(s,u){ke.remove(s,u)},_data:function(s,u,h){return ie.access(s,u,h)},_removeData:function(s,u){ie.remove(s,u)}}),l.fn.extend({data:function(s,u){var h,d,m,y=this[0],v=y&&y.attributes;if(s===void 0){if(this.length&&(m=ke.get(y),y.nodeType===1&&!ie.get(y,"hasDataAttrs"))){for(h=v.length;h--;)v[h]&&(d=v[h].name,d.indexOf("data-")===0&&(d=Nt(d.slice(5)),Vi(y,d,m[d])));ie.set(y,"hasDataAttrs",!0)}return m}return typeof s=="object"?this.each(function(){ke.set(this,s)}):Bt(this,function(R){var A;if(y&&R===void 0)return A=ke.get(y,s),A!==void 0||(A=Vi(y,s),A!==void 0)?A:void 0;this.each(function(){ke.set(this,s,R)})},null,u,arguments.length>1,null,!0)},removeData:function(s){return this.each(function(){ke.remove(this,s)})}}),l.extend({queue:function(s,u,h){var d;if(s)return u=(u||"fx")+"queue",d=ie.get(s,u),h&&(!d||Array.isArray(h)?d=ie.access(s,u,l.makeArray(h)):d.push(h)),d||[]},dequeue:function(s,u){u=u||"fx";var h=l.queue(s,u),d=h.length,m=h.shift(),y=l._queueHooks(s,u),v=function(){l.dequeue(s,u)};m==="inprogress"&&(m=h.shift(),d--),m&&(u==="fx"&&h.unshift("inprogress"),delete y.stop,m.call(s,v,y)),!d&&y&&y.empty.fire()},_queueHooks:function(s,u){var h=u+"queueHooks";return ie.get(s,h)||ie.access(s,h,{empty:l.Callbacks("once memory").add(function(){ie.remove(s,[u+"queue",h])})})}}),l.fn.extend({queue:function(s,u){var h=2;return typeof s!="string"&&(u=s,s="fx",h--),arguments.length<h?l.queue(this[0],s):u===void 0?this:this.each(function(){var d=l.queue(this,s,u);l._queueHooks(this,s),s==="fx"&&d[0]!=="inprogress"&&l.dequeue(this,s)})},dequeue:function(s){return this.each(function(){l.dequeue(this,s)})},clearQueue:function(s){return this.queue(s||"fx",[])},promise:function(s,u){var h,d=1,m=l.Deferred(),y=this,v=this.length,R=function(){--d||m.resolveWith(y,[y])};for(typeof s!="string"&&(u=s,s=void 0),s=s||"fx";v--;)h=ie.get(y[v],s+"queueHooks"),h&&h.empty&&(d++,h.empty.add(R));return R(),m.promise(u)}});var xs=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,$t=new RegExp("^(?:([+-])=|)("+xs+")([a-z%]*)$","i"),xt=["Top","Right","Bottom","Left"],Qt=Z.documentElement,Xt=function(s){return l.contains(s.ownerDocument,s)},ua={composed:!0};Qt.getRootNode&&(Xt=function(s){return l.contains(s.ownerDocument,s)||s.getRootNode(ua)===s.ownerDocument});var Ur=function(s,u){return s=u||s,s.style.display==="none"||s.style.display===""&&Xt(s)&&l.css(s,"display")==="none"};function jr(s,u,h,d){var m,y,v=20,R=d?function(){return d.cur()}:function(){return l.css(s,u,"")},A=R(),k=h&&h[3]||(l.cssNumber[u]?"":"px"),q=s.nodeType&&(l.cssNumber[u]||k!=="px"&&+A)&&$t.exec(l.css(s,u));if(q&&q[3]!==k){for(A=A/2,k=k||q[3],q=+A||1;v--;)l.style(s,u,q+k),(1-y)*(1-(y=R()/A||.5))<=0&&(v=0),q=q/y;q=q*2,l.style(s,u,q+k),h=h||[]}return h&&(q=+q||+A||0,m=h[1]?q+(h[1]+1)*h[2]:+h[2],d&&(d.unit=k,d.start=q,d.end=m)),m}var Oi={};function Vs(s){var u,h=s.ownerDocument,d=s.nodeName,m=Oi[d];return m||(u=h.body.appendChild(h.createElement(d)),m=l.css(u,"display"),u.parentNode.removeChild(u),m==="none"&&(m="block"),Oi[d]=m,m)}function Vt(s,u){for(var h,d,m=[],y=0,v=s.length;y<v;y++)d=s[y],d.style&&(h=d.style.display,u?(h==="none"&&(m[y]=ie.get(d,"display")||null,m[y]||(d.style.display="")),d.style.display===""&&Ur(d)&&(m[y]=Vs(d))):h!=="none"&&(m[y]="none",ie.set(d,"display",h)));for(y=0;y<v;y++)m[y]!=null&&(s[y].style.display=m[y]);return s}l.fn.extend({show:function(){return Vt(this,!0)},hide:function(){return Vt(this)},toggle:function(s){return typeof s=="boolean"?s?this.show():this.hide():this.each(function(){Ur(this)?l(this).show():l(this).hide()})}});var mn=/^(?:checkbox|radio)$/i,qr=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Jt=/^$|^module$|\/(?:java|ecma)script/i;(function(){var s=Z.createDocumentFragment(),u=s.appendChild(Z.createElement("div")),h=Z.createElement("input");h.setAttribute("type","radio"),h.setAttribute("checked","checked"),h.setAttribute("name","t"),u.appendChild(h),$.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,u.innerHTML="<textarea>x</textarea>",$.noCloneChecked=!!u.cloneNode(!0).lastChild.defaultValue,u.innerHTML="<option></option>",$.option=!!u.lastChild})();var _t={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};_t.tbody=_t.tfoot=_t.colgroup=_t.caption=_t.thead,_t.th=_t.td,$.option||(_t.optgroup=_t.option=[1,"<select multiple='multiple'>","</select>"]);function Je(s,u){var h;return typeof s.getElementsByTagName<"u"?h=s.getElementsByTagName(u||"*"):typeof s.querySelectorAll<"u"?h=s.querySelectorAll(u||"*"):h=[],u===void 0||u&&S(s,u)?l.merge([s],h):h}function Br(s,u){for(var h=0,d=s.length;h<d;h++)ie.set(s[h],"globalEval",!u||ie.get(u[h],"globalEval"))}var lr=/<|&#?\w+;/;function Mi(s,u,h,d,m){for(var y,v,R,A,k,q,B=u.createDocumentFragment(),F=[],Q=0,ue=s.length;Q<ue;Q++)if(y=s[Q],y||y===0)if(je(y)==="object")l.merge(F,y.nodeType?[y]:y);else if(!lr.test(y))F.push(u.createTextNode(y));else{for(v=v||B.appendChild(u.createElement("div")),R=(qr.exec(y)||["",""])[1].toLowerCase(),A=_t[R]||_t._default,v.innerHTML=A[1]+l.htmlPrefilter(y)+A[2],q=A[0];q--;)v=v.lastChild;l.merge(F,v.childNodes),v=B.firstChild,v.textContent=""}for(B.textContent="",Q=0;y=F[Q++];){if(d&&l.inArray(y,d)>-1){m&&m.push(y);continue}if(k=Xt(y),v=Je(B.appendChild(y),"script"),k&&Br(v),h)for(q=0;y=v[q++];)Jt.test(y.type||"")&&h.push(y)}return B}var tt=/^([^.]*)(?:\.(.+)|)/;function yn(){return!0}function Ot(){return!1}function _n(s,u,h,d,m,y){var v,R;if(typeof u=="object"){typeof h!="string"&&(d=d||h,h=void 0);for(R in u)_n(s,R,h,d,u[R],y);return s}if(d==null&&m==null?(m=h,d=h=void 0):m==null&&(typeof h=="string"?(m=d,d=void 0):(m=d,d=h,h=void 0)),m===!1)m=Ot;else if(!m)return s;return y===1&&(v=m,m=function(A){return l().off(A),v.apply(this,arguments)},m.guid=v.guid||(v.guid=l.guid++)),s.each(function(){l.event.add(this,u,m,d,h)})}l.event={global:{},add:function(s,u,h,d,m){var y,v,R,A,k,q,B,F,Q,ue,Ee,le=ie.get(s);if(pn(s))for(h.handler&&(y=h,h=y.handler,m=y.selector),m&&l.find.matchesSelector(Qt,m),h.guid||(h.guid=l.guid++),(A=le.events)||(A=le.events=Object.create(null)),(v=le.handle)||(v=le.handle=function(We){return typeof l<"u"&&l.event.triggered!==We.type?l.event.dispatch.apply(s,arguments):void 0}),u=(u||"").match(yt)||[""],k=u.length;k--;)R=tt.exec(u[k])||[],Q=Ee=R[1],ue=(R[2]||"").split(".").sort(),Q&&(B=l.event.special[Q]||{},Q=(m?B.delegateType:B.bindType)||Q,B=l.event.special[Q]||{},q=l.extend({type:Q,origType:Ee,data:d,handler:h,guid:h.guid,selector:m,needsContext:m&&l.expr.match.needsContext.test(m),namespace:ue.join(".")},y),(F=A[Q])||(F=A[Q]=[],F.delegateCount=0,(!B.setup||B.setup.call(s,d,ue,v)===!1)&&s.addEventListener&&s.addEventListener(Q,v)),B.add&&(B.add.call(s,q),q.handler.guid||(q.handler.guid=h.guid)),m?F.splice(F.delegateCount++,0,q):F.push(q),l.event.global[Q]=!0)},remove:function(s,u,h,d,m){var y,v,R,A,k,q,B,F,Q,ue,Ee,le=ie.hasData(s)&&ie.get(s);if(!(!le||!(A=le.events))){for(u=(u||"").match(yt)||[""],k=u.length;k--;){if(R=tt.exec(u[k])||[],Q=Ee=R[1],ue=(R[2]||"").split(".").sort(),!Q){for(Q in A)l.event.remove(s,Q+u[k],h,d,!0);continue}for(B=l.event.special[Q]||{},Q=(d?B.delegateType:B.bindType)||Q,F=A[Q]||[],R=R[2]&&new RegExp("(^|\\.)"+ue.join("\\.(?:.*\\.|)")+"(\\.|$)"),v=y=F.length;y--;)q=F[y],(m||Ee===q.origType)&&(!h||h.guid===q.guid)&&(!R||R.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(F.splice(y,1),q.selector&&F.delegateCount--,B.remove&&B.remove.call(s,q));v&&!F.length&&((!B.teardown||B.teardown.call(s,ue,le.handle)===!1)&&l.removeEvent(s,Q,le.handle),delete A[Q])}l.isEmptyObject(A)&&ie.remove(s,"handle events")}},dispatch:function(s){var u,h,d,m,y,v,R=new Array(arguments.length),A=l.event.fix(s),k=(ie.get(this,"events")||Object.create(null))[A.type]||[],q=l.event.special[A.type]||{};for(R[0]=A,u=1;u<arguments.length;u++)R[u]=arguments[u];if(A.delegateTarget=this,!(q.preDispatch&&q.preDispatch.call(this,A)===!1)){for(v=l.event.handlers.call(this,A,k),u=0;(m=v[u++])&&!A.isPropagationStopped();)for(A.currentTarget=m.elem,h=0;(y=m.handlers[h++])&&!A.isImmediatePropagationStopped();)(!A.rnamespace||y.namespace===!1||A.rnamespace.test(y.namespace))&&(A.handleObj=y,A.data=y.data,d=((l.event.special[y.origType]||{}).handle||y.handler).apply(m.elem,R),d!==void 0&&(A.result=d)===!1&&(A.preventDefault(),A.stopPropagation()));return q.postDispatch&&q.postDispatch.call(this,A),A.result}},handlers:function(s,u){var h,d,m,y,v,R=[],A=u.delegateCount,k=s.target;if(A&&k.nodeType&&!(s.type==="click"&&s.button>=1)){for(;k!==this;k=k.parentNode||this)if(k.nodeType===1&&!(s.type==="click"&&k.disabled===!0)){for(y=[],v={},h=0;h<A;h++)d=u[h],m=d.selector+" ",v[m]===void 0&&(v[m]=d.needsContext?l(m,this).index(k)>-1:l.find(m,this,null,[k]).length),v[m]&&y.push(d);y.length&&R.push({elem:k,handlers:y})}}return k=this,A<u.length&&R.push({elem:k,handlers:u.slice(A)}),R},addProp:function(s,u){Object.defineProperty(l.Event.prototype,s,{enumerable:!0,configurable:!0,get:K(u)?function(){if(this.originalEvent)return u(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[s]},set:function(h){Object.defineProperty(this,s,{enumerable:!0,configurable:!0,writable:!0,value:h})}})},fix:function(s){return s[l.expando]?s:new l.Event(s)},special:{load:{noBubble:!0},click:{setup:function(s){var u=this||s;return mn.test(u.type)&&u.click&&S(u,"input")&&$r(u,"click",!0),!1},trigger:function(s){var u=this||s;return mn.test(u.type)&&u.click&&S(u,"input")&&$r(u,"click"),!0},_default:function(s){var u=s.target;return mn.test(u.type)&&u.click&&S(u,"input")&&ie.get(u,"click")||S(u,"a")}},beforeunload:{postDispatch:function(s){s.result!==void 0&&s.originalEvent&&(s.originalEvent.returnValue=s.result)}}}};function $r(s,u,h){if(!h){ie.get(s,u)===void 0&&l.event.add(s,u,yn);return}ie.set(s,u,!1),l.event.add(s,u,{namespace:!1,handler:function(d){var m,y=ie.get(this,u);if(d.isTrigger&1&&this[u]){if(y)(l.event.special[u]||{}).delegateType&&d.stopPropagation();else if(y=a.call(arguments),ie.set(this,u,y),this[u](),m=ie.get(this,u),ie.set(this,u,!1),y!==m)return d.stopImmediatePropagation(),d.preventDefault(),m}else y&&(ie.set(this,u,l.event.trigger(y[0],y.slice(1),this)),d.stopPropagation(),d.isImmediatePropagationStopped=yn)}})}l.removeEvent=function(s,u,h){s.removeEventListener&&s.removeEventListener(u,h)},l.Event=function(s,u){if(!(this instanceof l.Event))return new l.Event(s,u);s&&s.type?(this.originalEvent=s,this.type=s.type,this.isDefaultPrevented=s.defaultPrevented||s.defaultPrevented===void 0&&s.returnValue===!1?yn:Ot,this.target=s.target&&s.target.nodeType===3?s.target.parentNode:s.target,this.currentTarget=s.currentTarget,this.relatedTarget=s.relatedTarget):this.type=s,u&&l.extend(this,u),this.timeStamp=s&&s.timeStamp||Date.now(),this[l.expando]=!0},l.Event.prototype={constructor:l.Event,isDefaultPrevented:Ot,isPropagationStopped:Ot,isImmediatePropagationStopped:Ot,isSimulated:!1,preventDefault:function(){var s=this.originalEvent;this.isDefaultPrevented=yn,s&&!this.isSimulated&&s.preventDefault()},stopPropagation:function(){var s=this.originalEvent;this.isPropagationStopped=yn,s&&!this.isSimulated&&s.stopPropagation()},stopImmediatePropagation:function(){var s=this.originalEvent;this.isImmediatePropagationStopped=yn,s&&!this.isSimulated&&s.stopImmediatePropagation(),this.stopPropagation()}},l.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},l.event.addProp),l.each({focus:"focusin",blur:"focusout"},function(s,u){function h(d){if(Z.documentMode){var m=ie.get(this,"handle"),y=l.event.fix(d);y.type=d.type==="focusin"?"focus":"blur",y.isSimulated=!0,m(d),y.target===y.currentTarget&&m(y)}else l.event.simulate(u,d.target,l.event.fix(d))}l.event.special[s]={setup:function(){var d;if($r(this,s,!0),Z.documentMode)d=ie.get(this,u),d||this.addEventListener(u,h),ie.set(this,u,(d||0)+1);else return!1},trigger:function(){return $r(this,s),!0},teardown:function(){var d;if(Z.documentMode)d=ie.get(this,u)-1,d?ie.set(this,u,d):(this.removeEventListener(u,h),ie.remove(this,u));else return!1},_default:function(d){return ie.get(d.target,s)},delegateType:u},l.event.special[u]={setup:function(){var d=this.ownerDocument||this.document||this,m=Z.documentMode?this:d,y=ie.get(m,u);y||(Z.documentMode?this.addEventListener(u,h):d.addEventListener(s,h,!0)),ie.set(m,u,(y||0)+1)},teardown:function(){var d=this.ownerDocument||this.document||this,m=Z.documentMode?this:d,y=ie.get(m,u)-1;y?ie.set(m,u,y):(Z.documentMode?this.removeEventListener(u,h):d.removeEventListener(s,h,!0),ie.remove(m,u))}}}),l.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(s,u){l.event.special[s]={delegateType:u,bindType:u,handle:function(h){var d,m=this,y=h.relatedTarget,v=h.handleObj;return(!y||y!==m&&!l.contains(m,y))&&(h.type=v.origType,d=v.handler.apply(this,arguments),h.type=u),d}}}),l.fn.extend({on:function(s,u,h,d){return _n(this,s,u,h,d)},one:function(s,u,h,d){return _n(this,s,u,h,d,1)},off:function(s,u,h){var d,m;if(s&&s.preventDefault&&s.handleObj)return d=s.handleObj,l(s.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if(typeof s=="object"){for(m in s)this.off(m,u,s[m]);return this}return(u===!1||typeof u=="function")&&(h=u,u=void 0),h===!1&&(h=Ot),this.each(function(){l.event.remove(this,s,h,u)})}});var ca=/<script|<style|<link/i,On=/checked\s*(?:[^=]|=\s*.checked.)/i,la=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Os(s,u){return S(s,"table")&&S(u.nodeType!==11?u:u.firstChild,"tr")&&l(s).children("tbody")[0]||s}function Hr(s){return s.type=(s.getAttribute("type")!==null)+"/"+s.type,s}function Ms(s){return(s.type||"").slice(0,5)==="true/"?s.type=s.type.slice(5):s.removeAttribute("type"),s}function zr(s,u){var h,d,m,y,v,R,A;if(u.nodeType===1){if(ie.hasData(s)&&(y=ie.get(s),A=y.events,A)){ie.remove(u,"handle events");for(m in A)for(h=0,d=A[m].length;h<d;h++)l.event.add(u,m,A[m][h])}ke.hasData(s)&&(v=ke.access(s),R=l.extend({},v),ke.set(u,R))}}function Wr(s,u){var h=u.nodeName.toLowerCase();h==="input"&&mn.test(s.type)?u.checked=s.checked:(h==="input"||h==="textarea")&&(u.defaultValue=s.defaultValue)}function vt(s,u,h,d){u=c(u);var m,y,v,R,A,k,q=0,B=s.length,F=B-1,Q=u[0],ue=K(Q);if(ue||B>1&&typeof Q=="string"&&!$.checkClone&&On.test(Q))return s.each(function(Ee){var le=s.eq(Ee);ue&&(u[0]=Q.call(this,Ee,le.html())),vt(le,u,h,d)});if(B&&(m=Mi(u,s[0].ownerDocument,!1,s,d),y=m.firstChild,m.childNodes.length===1&&(m=y),y||d)){for(v=l.map(Je(m,"script"),Hr),R=v.length;q<B;q++)A=m,q!==F&&(A=l.clone(A,!0,!0),R&&l.merge(v,Je(A,"script"))),h.call(s[q],A,q);if(R)for(k=v[v.length-1].ownerDocument,l.map(v,Ms),q=0;q<R;q++)A=v[q],Jt.test(A.type||"")&&!ie.access(A,"globalEval")&&l.contains(k,A)&&(A.src&&(A.type||"").toLowerCase()!=="module"?l._evalUrl&&!A.noModule&&l._evalUrl(A.src,{nonce:A.nonce||A.getAttribute("nonce")},k):Te(A.textContent.replace(la,""),A,k))}return s}function Li(s,u,h){for(var d,m=u?l.filter(u,s):s,y=0;(d=m[y])!=null;y++)!h&&d.nodeType===1&&l.cleanData(Je(d)),d.parentNode&&(h&&Xt(d)&&Br(Je(d,"script")),d.parentNode.removeChild(d));return s}l.extend({htmlPrefilter:function(s){return s},clone:function(s,u,h){var d,m,y,v,R=s.cloneNode(!0),A=Xt(s);if(!$.noCloneChecked&&(s.nodeType===1||s.nodeType===11)&&!l.isXMLDoc(s))for(v=Je(R),y=Je(s),d=0,m=y.length;d<m;d++)Wr(y[d],v[d]);if(u)if(h)for(y=y||Je(s),v=v||Je(R),d=0,m=y.length;d<m;d++)zr(y[d],v[d]);else zr(s,R);return v=Je(R,"script"),v.length>0&&Br(v,!A&&Je(s,"script")),R},cleanData:function(s){for(var u,h,d,m=l.event.special,y=0;(h=s[y])!==void 0;y++)if(pn(h)){if(u=h[ie.expando]){if(u.events)for(d in u.events)m[d]?l.event.remove(h,d):l.removeEvent(h,d,u.handle);h[ie.expando]=void 0}h[ke.expando]&&(h[ke.expando]=void 0)}}}),l.fn.extend({detach:function(s){return Li(this,s,!0)},remove:function(s){return Li(this,s)},text:function(s){return Bt(this,function(u){return u===void 0?l.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=u)})},null,s,arguments.length)},append:function(){return vt(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var u=Os(this,s);u.appendChild(s)}})},prepend:function(){return vt(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var u=Os(this,s);u.insertBefore(s,u.firstChild)}})},before:function(){return vt(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this)})},after:function(){return vt(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this.nextSibling)})},empty:function(){for(var s,u=0;(s=this[u])!=null;u++)s.nodeType===1&&(l.cleanData(Je(s,!1)),s.textContent="");return this},clone:function(s,u){return s=s??!1,u=u??s,this.map(function(){return l.clone(this,s,u)})},html:function(s){return Bt(this,function(u){var h=this[0]||{},d=0,m=this.length;if(u===void 0&&h.nodeType===1)return h.innerHTML;if(typeof u=="string"&&!ca.test(u)&&!_t[(qr.exec(u)||["",""])[1].toLowerCase()]){u=l.htmlPrefilter(u);try{for(;d<m;d++)h=this[d]||{},h.nodeType===1&&(l.cleanData(Je(h,!1)),h.innerHTML=u);h=0}catch{}}h&&this.empty().append(u)},null,s,arguments.length)},replaceWith:function(){var s=[];return vt(this,arguments,function(u){var h=this.parentNode;l.inArray(this,s)<0&&(l.cleanData(Je(this)),h&&h.replaceChild(u,this))},s)}}),l.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(s,u){l.fn[s]=function(h){for(var d,m=[],y=l(h),v=y.length-1,R=0;R<=v;R++)d=R===v?this:this.clone(!0),l(y[R])[u](d),p.apply(m,d.get());return this.pushStack(m)}});var Gr=new RegExp("^("+xs+")(?!px)[a-z%]+$","i"),hr=/^--/,Mn=function(s){var u=s.ownerDocument.defaultView;return(!u||!u.opener)&&(u=e),u.getComputedStyle(s)},Fi=function(s,u,h){var d,m,y={};for(m in u)y[m]=s.style[m],s.style[m]=u[m];d=h.call(s);for(m in u)s.style[m]=y[m];return d},Ls=new RegExp(xt.join("|"),"i");(function(){function s(){if(k){A.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",k.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Qt.appendChild(A).appendChild(k);var q=e.getComputedStyle(k);h=q.top!=="1%",R=u(q.marginLeft)===12,k.style.right="60%",y=u(q.right)===36,d=u(q.width)===36,k.style.position="absolute",m=u(k.offsetWidth/3)===12,Qt.removeChild(A),k=null}}function u(q){return Math.round(parseFloat(q))}var h,d,m,y,v,R,A=Z.createElement("div"),k=Z.createElement("div");k.style&&(k.style.backgroundClip="content-box",k.cloneNode(!0).style.backgroundClip="",$.clearCloneStyle=k.style.backgroundClip==="content-box",l.extend($,{boxSizingReliable:function(){return s(),d},pixelBoxStyles:function(){return s(),y},pixelPosition:function(){return s(),h},reliableMarginLeft:function(){return s(),R},scrollboxSize:function(){return s(),m},reliableTrDimensions:function(){var q,B,F,Q;return v==null&&(q=Z.createElement("table"),B=Z.createElement("tr"),F=Z.createElement("div"),q.style.cssText="position:absolute;left:-11111px;border-collapse:separate",B.style.cssText="box-sizing:content-box;border:1px solid",B.style.height="1px",F.style.height="9px",F.style.display="block",Qt.appendChild(q).appendChild(B).appendChild(F),Q=e.getComputedStyle(B),v=parseInt(Q.height,10)+parseInt(Q.borderTopWidth,10)+parseInt(Q.borderBottomWidth,10)===B.offsetHeight,Qt.removeChild(q)),v}}))})();function fr(s,u,h){var d,m,y,v,R=hr.test(u),A=s.style;return h=h||Mn(s),h&&(v=h.getPropertyValue(u)||h[u],R&&v&&(v=v.replace(gt,"$1")||void 0),v===""&&!Xt(s)&&(v=l.style(s,u)),!$.pixelBoxStyles()&&Gr.test(v)&&Ls.test(u)&&(d=A.width,m=A.minWidth,y=A.maxWidth,A.minWidth=A.maxWidth=A.width=v,v=h.width,A.width=d,A.minWidth=m,A.maxWidth=y)),v!==void 0?v+"":v}function dr(s,u){return{get:function(){if(s()){delete this.get;return}return(this.get=u).apply(this,arguments)}}}var Ui=["Webkit","Moz","ms"],Kr=Z.createElement("div").style,Ln={};function vn(s){for(var u=s[0].toUpperCase()+s.slice(1),h=Ui.length;h--;)if(s=Ui[h]+u,s in Kr)return s}function pr(s){var u=l.cssProps[s]||Ln[s];return u||(s in Kr?s:Ln[s]=vn(s)||s)}var ha=/^(none|table(?!-c[ea]).+)/,Fs={position:"absolute",visibility:"hidden",display:"block"},ji={letterSpacing:"0",fontWeight:"400"};function qi(s,u,h){var d=$t.exec(u);return d?Math.max(0,d[2]-(h||0))+(d[3]||"px"):u}function gr(s,u,h,d,m,y){var v=u==="width"?1:0,R=0,A=0,k=0;if(h===(d?"border":"content"))return 0;for(;v<4;v+=2)h==="margin"&&(k+=l.css(s,h+xt[v],!0,m)),d?(h==="content"&&(A-=l.css(s,"padding"+xt[v],!0,m)),h!=="margin"&&(A-=l.css(s,"border"+xt[v]+"Width",!0,m))):(A+=l.css(s,"padding"+xt[v],!0,m),h!=="padding"?A+=l.css(s,"border"+xt[v]+"Width",!0,m):R+=l.css(s,"border"+xt[v]+"Width",!0,m));return!d&&y>=0&&(A+=Math.max(0,Math.ceil(s["offset"+u[0].toUpperCase()+u.slice(1)]-y-A-R-.5))||0),A+k}function Qr(s,u,h){var d=Mn(s),m=!$.boxSizingReliable()||h,y=m&&l.css(s,"boxSizing",!1,d)==="border-box",v=y,R=fr(s,u,d),A="offset"+u[0].toUpperCase()+u.slice(1);if(Gr.test(R)){if(!h)return R;R="auto"}return(!$.boxSizingReliable()&&y||!$.reliableTrDimensions()&&S(s,"tr")||R==="auto"||!parseFloat(R)&&l.css(s,"display",!1,d)==="inline")&&s.getClientRects().length&&(y=l.css(s,"boxSizing",!1,d)==="border-box",v=A in s,v&&(R=s[A])),R=parseFloat(R)||0,R+gr(s,u,h||(y?"border":"content"),v,d,R)+"px"}l.extend({cssHooks:{opacity:{get:function(s,u){if(u){var h=fr(s,"opacity");return h===""?"1":h}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(s,u,h,d){if(!(!s||s.nodeType===3||s.nodeType===8||!s.style)){var m,y,v,R=Nt(u),A=hr.test(u),k=s.style;if(A||(u=pr(R)),v=l.cssHooks[u]||l.cssHooks[R],h!==void 0){if(y=typeof h,y==="string"&&(m=$t.exec(h))&&m[1]&&(h=jr(s,u,m),y="number"),h==null||h!==h)return;y==="number"&&!A&&(h+=m&&m[3]||(l.cssNumber[R]?"":"px")),!$.clearCloneStyle&&h===""&&u.indexOf("background")===0&&(k[u]="inherit"),(!v||!("set"in v)||(h=v.set(s,h,d))!==void 0)&&(A?k.setProperty(u,h):k[u]=h)}else return v&&"get"in v&&(m=v.get(s,!1,d))!==void 0?m:k[u]}},css:function(s,u,h,d){var m,y,v,R=Nt(u),A=hr.test(u);return A||(u=pr(R)),v=l.cssHooks[u]||l.cssHooks[R],v&&"get"in v&&(m=v.get(s,!0,h)),m===void 0&&(m=fr(s,u,d)),m==="normal"&&u in ji&&(m=ji[u]),h===""||h?(y=parseFloat(m),h===!0||isFinite(y)?y||0:m):m}}),l.each(["height","width"],function(s,u){l.cssHooks[u]={get:function(h,d,m){if(d)return ha.test(l.css(h,"display"))&&(!h.getClientRects().length||!h.getBoundingClientRect().width)?Fi(h,Fs,function(){return Qr(h,u,m)}):Qr(h,u,m)},set:function(h,d,m){var y,v=Mn(h),R=!$.scrollboxSize()&&v.position==="absolute",A=R||m,k=A&&l.css(h,"boxSizing",!1,v)==="border-box",q=m?gr(h,u,m,k,v):0;return k&&R&&(q-=Math.ceil(h["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(v[u])-gr(h,u,"border",!1,v)-.5)),q&&(y=$t.exec(d))&&(y[3]||"px")!=="px"&&(h.style[u]=d,d=l.css(h,u)),qi(h,d,q)}}}),l.cssHooks.marginLeft=dr($.reliableMarginLeft,function(s,u){if(u)return(parseFloat(fr(s,"marginLeft"))||s.getBoundingClientRect().left-Fi(s,{marginLeft:0},function(){return s.getBoundingClientRect().left}))+"px"}),l.each({margin:"",padding:"",border:"Width"},function(s,u){l.cssHooks[s+u]={expand:function(h){for(var d=0,m={},y=typeof h=="string"?h.split(" "):[h];d<4;d++)m[s+xt[d]+u]=y[d]||y[d-2]||y[0];return m}},s!=="margin"&&(l.cssHooks[s+u].set=qi)}),l.fn.extend({css:function(s,u){return Bt(this,function(h,d,m){var y,v,R={},A=0;if(Array.isArray(d)){for(y=Mn(h),v=d.length;A<v;A++)R[d[A]]=l.css(h,d[A],!1,y);return R}return m!==void 0?l.style(h,d,m):l.css(h,d)},s,u,arguments.length>1)}});function ot(s,u,h,d,m){return new ot.prototype.init(s,u,h,d,m)}l.Tween=ot,ot.prototype={constructor:ot,init:function(s,u,h,d,m,y){this.elem=s,this.prop=h,this.easing=m||l.easing._default,this.options=u,this.start=this.now=this.cur(),this.end=d,this.unit=y||(l.cssNumber[h]?"":"px")},cur:function(){var s=ot.propHooks[this.prop];return s&&s.get?s.get(this):ot.propHooks._default.get(this)},run:function(s){var u,h=ot.propHooks[this.prop];return this.options.duration?this.pos=u=l.easing[this.easing](s,this.options.duration*s,0,1,this.options.duration):this.pos=u=s,this.now=(this.end-this.start)*u+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),h&&h.set?h.set(this):ot.propHooks._default.set(this),this}},ot.prototype.init.prototype=ot.prototype,ot.propHooks={_default:{get:function(s){var u;return s.elem.nodeType!==1||s.elem[s.prop]!=null&&s.elem.style[s.prop]==null?s.elem[s.prop]:(u=l.css(s.elem,s.prop,""),!u||u==="auto"?0:u)},set:function(s){l.fx.step[s.prop]?l.fx.step[s.prop](s):s.elem.nodeType===1&&(l.cssHooks[s.prop]||s.elem.style[pr(s.prop)]!=null)?l.style(s.elem,s.prop,s.now+s.unit):s.elem[s.prop]=s.now}}},ot.propHooks.scrollTop=ot.propHooks.scrollLeft={set:function(s){s.elem.nodeType&&s.elem.parentNode&&(s.elem[s.prop]=s.now)}},l.easing={linear:function(s){return s},swing:function(s){return .5-Math.cos(s*Math.PI)/2},_default:"swing"},l.fx=ot.prototype.init,l.fx.step={};var Tn,Xr,fa=/^(?:toggle|show|hide)$/,Us=/queueHooks$/;function Jr(){Xr&&(Z.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(Jr):e.setTimeout(Jr,l.fx.interval),l.fx.tick())}function js(){return e.setTimeout(function(){Tn=void 0}),Tn=Date.now()}function Mt(s,u){var h,d=0,m={height:s};for(u=u?1:0;d<4;d+=2-u)h=xt[d],m["margin"+h]=m["padding"+h]=s;return u&&(m.opacity=m.width=s),m}function Lt(s,u,h){for(var d,m=(wt.tweeners[u]||[]).concat(wt.tweeners["*"]),y=0,v=m.length;y<v;y++)if(d=m[y].call(h,u,s))return d}function Yr(s,u,h){var d,m,y,v,R,A,k,q,B="width"in u||"height"in u,F=this,Q={},ue=s.style,Ee=s.nodeType&&Ur(s),le=ie.get(s,"fxshow");h.queue||(v=l._queueHooks(s,"fx"),v.unqueued==null&&(v.unqueued=0,R=v.empty.fire,v.empty.fire=function(){v.unqueued||R()}),v.unqueued++,F.always(function(){F.always(function(){v.unqueued--,l.queue(s,"fx").length||v.empty.fire()})}));for(d in u)if(m=u[d],fa.test(m)){if(delete u[d],y=y||m==="toggle",m===(Ee?"hide":"show"))if(m==="show"&&le&&le[d]!==void 0)Ee=!0;else continue;Q[d]=le&&le[d]||l.style(s,d)}if(A=!l.isEmptyObject(u),!(!A&&l.isEmptyObject(Q))){B&&s.nodeType===1&&(h.overflow=[ue.overflow,ue.overflowX,ue.overflowY],k=le&&le.display,k==null&&(k=ie.get(s,"display")),q=l.css(s,"display"),q==="none"&&(k?q=k:(Vt([s],!0),k=s.style.display||k,q=l.css(s,"display"),Vt([s]))),(q==="inline"||q==="inline-block"&&k!=null)&&l.css(s,"float")==="none"&&(A||(F.done(function(){ue.display=k}),k==null&&(q=ue.display,k=q==="none"?"":q)),ue.display="inline-block")),h.overflow&&(ue.overflow="hidden",F.always(function(){ue.overflow=h.overflow[0],ue.overflowX=h.overflow[1],ue.overflowY=h.overflow[2]})),A=!1;for(d in Q)A||(le?"hidden"in le&&(Ee=le.hidden):le=ie.access(s,"fxshow",{display:k}),y&&(le.hidden=!Ee),Ee&&Vt([s],!0),F.done(function(){Ee||Vt([s]),ie.remove(s,"fxshow");for(d in Q)l.style(s,d,Q[d])})),A=Lt(Ee?le[d]:0,d,F),d in le||(le[d]=A.start,Ee&&(A.end=A.start,A.start=0))}}function Zr(s,u){var h,d,m,y,v;for(h in s)if(d=Nt(h),m=u[d],y=s[h],Array.isArray(y)&&(m=y[1],y=s[h]=y[0]),h!==d&&(s[d]=y,delete s[h]),v=l.cssHooks[d],v&&"expand"in v){y=v.expand(y),delete s[d];for(h in y)h in s||(s[h]=y[h],u[h]=m)}else u[d]=m}function wt(s,u,h){var d,m,y=0,v=wt.prefilters.length,R=l.Deferred().always(function(){delete A.elem}),A=function(){if(m)return!1;for(var B=Tn||js(),F=Math.max(0,k.startTime+k.duration-B),Q=F/k.duration||0,ue=1-Q,Ee=0,le=k.tweens.length;Ee<le;Ee++)k.tweens[Ee].run(ue);return R.notifyWith(s,[k,ue,F]),ue<1&&le?F:(le||R.notifyWith(s,[k,1,0]),R.resolveWith(s,[k]),!1)},k=R.promise({elem:s,props:l.extend({},u),opts:l.extend(!0,{specialEasing:{},easing:l.easing._default},h),originalProperties:u,originalOptions:h,startTime:Tn||js(),duration:h.duration,tweens:[],createTween:function(B,F){var Q=l.Tween(s,k.opts,B,F,k.opts.specialEasing[B]||k.opts.easing);return k.tweens.push(Q),Q},stop:function(B){var F=0,Q=B?k.tweens.length:0;if(m)return this;for(m=!0;F<Q;F++)k.tweens[F].run(1);return B?(R.notifyWith(s,[k,1,0]),R.resolveWith(s,[k,B])):R.rejectWith(s,[k,B]),this}}),q=k.props;for(Zr(q,k.opts.specialEasing);y<v;y++)if(d=wt.prefilters[y].call(k,s,q,k.opts),d)return K(d.stop)&&(l._queueHooks(k.elem,k.opts.queue).stop=d.stop.bind(d)),d;return l.map(q,Lt,k),K(k.opts.start)&&k.opts.start.call(s,k),k.progress(k.opts.progress).done(k.opts.done,k.opts.complete).fail(k.opts.fail).always(k.opts.always),l.fx.timer(l.extend(A,{elem:s,anim:k,queue:k.opts.queue})),k}l.Animation=l.extend(wt,{tweeners:{"*":[function(s,u){var h=this.createTween(s,u);return jr(h.elem,s,$t.exec(u),h),h}]},tweener:function(s,u){K(s)?(u=s,s=["*"]):s=s.match(yt);for(var h,d=0,m=s.length;d<m;d++)h=s[d],wt.tweeners[h]=wt.tweeners[h]||[],wt.tweeners[h].unshift(u)},prefilters:[Yr],prefilter:function(s,u){u?wt.prefilters.unshift(s):wt.prefilters.push(s)}}),l.speed=function(s,u,h){var d=s&&typeof s=="object"?l.extend({},s):{complete:h||!h&&u||K(s)&&s,duration:s,easing:h&&u||u&&!K(u)&&u};return l.fx.off?d.duration=0:typeof d.duration!="number"&&(d.duration in l.fx.speeds?d.duration=l.fx.speeds[d.duration]:d.duration=l.fx.speeds._default),(d.queue==null||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){K(d.old)&&d.old.call(this),d.queue&&l.dequeue(this,d.queue)},d},l.fn.extend({fadeTo:function(s,u,h,d){return this.filter(Ur).css("opacity",0).show().end().animate({opacity:u},s,h,d)},animate:function(s,u,h,d){var m=l.isEmptyObject(s),y=l.speed(u,h,d),v=function(){var R=wt(this,l.extend({},s),y);(m||ie.get(this,"finish"))&&R.stop(!0)};return v.finish=v,m||y.queue===!1?this.each(v):this.queue(y.queue,v)},stop:function(s,u,h){var d=function(m){var y=m.stop;delete m.stop,y(h)};return typeof s!="string"&&(h=u,u=s,s=void 0),u&&this.queue(s||"fx",[]),this.each(function(){var m=!0,y=s!=null&&s+"queueHooks",v=l.timers,R=ie.get(this);if(y)R[y]&&R[y].stop&&d(R[y]);else for(y in R)R[y]&&R[y].stop&&Us.test(y)&&d(R[y]);for(y=v.length;y--;)v[y].elem===this&&(s==null||v[y].queue===s)&&(v[y].anim.stop(h),m=!1,v.splice(y,1));(m||!h)&&l.dequeue(this,s)})},finish:function(s){return s!==!1&&(s=s||"fx"),this.each(function(){var u,h=ie.get(this),d=h[s+"queue"],m=h[s+"queueHooks"],y=l.timers,v=d?d.length:0;for(h.finish=!0,l.queue(this,s,[]),m&&m.stop&&m.stop.call(this,!0),u=y.length;u--;)y[u].elem===this&&y[u].queue===s&&(y[u].anim.stop(!0),y.splice(u,1));for(u=0;u<v;u++)d[u]&&d[u].finish&&d[u].finish.call(this);delete h.finish})}}),l.each(["toggle","show","hide"],function(s,u){var h=l.fn[u];l.fn[u]=function(d,m,y){return d==null||typeof d=="boolean"?h.apply(this,arguments):this.animate(Mt(u,!0),d,m,y)}}),l.each({slideDown:Mt("show"),slideUp:Mt("hide"),slideToggle:Mt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(s,u){l.fn[s]=function(h,d,m){return this.animate(u,h,d,m)}}),l.timers=[],l.fx.tick=function(){var s,u=0,h=l.timers;for(Tn=Date.now();u<h.length;u++)s=h[u],!s()&&h[u]===s&&h.splice(u--,1);h.length||l.fx.stop(),Tn=void 0},l.fx.timer=function(s){l.timers.push(s),l.fx.start()},l.fx.interval=13,l.fx.start=function(){Xr||(Xr=!0,Jr())},l.fx.stop=function(){Xr=null},l.fx.speeds={slow:600,fast:200,_default:400},l.fn.delay=function(s,u){return s=l.fx&&l.fx.speeds[s]||s,u=u||"fx",this.queue(u,function(h,d){var m=e.setTimeout(h,s);d.stop=function(){e.clearTimeout(m)}})},(function(){var s=Z.createElement("input"),u=Z.createElement("select"),h=u.appendChild(Z.createElement("option"));s.type="checkbox",$.checkOn=s.value!=="",$.optSelected=h.selected,s=Z.createElement("input"),s.value="t",s.type="radio",$.radioValue=s.value==="t"})();var xe,Yt=l.expr.attrHandle;l.fn.extend({attr:function(s,u){return Bt(this,l.attr,s,u,arguments.length>1)},removeAttr:function(s){return this.each(function(){l.removeAttr(this,s)})}}),l.extend({attr:function(s,u,h){var d,m,y=s.nodeType;if(!(y===3||y===8||y===2)){if(typeof s.getAttribute>"u")return l.prop(s,u,h);if((y!==1||!l.isXMLDoc(s))&&(m=l.attrHooks[u.toLowerCase()]||(l.expr.match.bool.test(u)?xe:void 0)),h!==void 0){if(h===null){l.removeAttr(s,u);return}return m&&"set"in m&&(d=m.set(s,h,u))!==void 0?d:(s.setAttribute(u,h+""),h)}return m&&"get"in m&&(d=m.get(s,u))!==null?d:(d=l.find.attr(s,u),d??void 0)}},attrHooks:{type:{set:function(s,u){if(!$.radioValue&&u==="radio"&&S(s,"input")){var h=s.value;return s.setAttribute("type",u),h&&(s.value=h),u}}}},removeAttr:function(s,u){var h,d=0,m=u&&u.match(yt);if(m&&s.nodeType===1)for(;h=m[d++];)s.removeAttribute(h)}}),xe={set:function(s,u,h){return u===!1?l.removeAttr(s,h):s.setAttribute(h,h),h}},l.each(l.expr.match.bool.source.match(/\w+/g),function(s,u){var h=Yt[u]||l.find.attr;Yt[u]=function(d,m,y){var v,R,A=m.toLowerCase();return y||(R=Yt[A],Yt[A]=v,v=h(d,m,y)!=null?A:null,Yt[A]=R),v}});var mr=/^(?:input|select|textarea|button)$/i,yr=/^(?:a|area)$/i;l.fn.extend({prop:function(s,u){return Bt(this,l.prop,s,u,arguments.length>1)},removeProp:function(s){return this.each(function(){delete this[l.propFix[s]||s]})}}),l.extend({prop:function(s,u,h){var d,m,y=s.nodeType;if(!(y===3||y===8||y===2))return(y!==1||!l.isXMLDoc(s))&&(u=l.propFix[u]||u,m=l.propHooks[u]),h!==void 0?m&&"set"in m&&(d=m.set(s,h,u))!==void 0?d:s[u]=h:m&&"get"in m&&(d=m.get(s,u))!==null?d:s[u]},propHooks:{tabIndex:{get:function(s){var u=l.find.attr(s,"tabindex");return u?parseInt(u,10):mr.test(s.nodeName)||yr.test(s.nodeName)&&s.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),$.optSelected||(l.propHooks.selected={get:function(s){var u=s.parentNode;return u&&u.parentNode&&u.parentNode.selectedIndex,null},set:function(s){var u=s.parentNode;u&&(u.selectedIndex,u.parentNode&&u.parentNode.selectedIndex)}}),l.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){l.propFix[this.toLowerCase()]=this});function En(s){var u=s.match(yt)||[];return u.join(" ")}function Zt(s){return s.getAttribute&&s.getAttribute("class")||""}function Bi(s){return Array.isArray(s)?s:typeof s=="string"?s.match(yt)||[]:[]}l.fn.extend({addClass:function(s){var u,h,d,m,y,v;return K(s)?this.each(function(R){l(this).addClass(s.call(this,R,Zt(this)))}):(u=Bi(s),u.length?this.each(function(){if(d=Zt(this),h=this.nodeType===1&&" "+En(d)+" ",h){for(y=0;y<u.length;y++)m=u[y],h.indexOf(" "+m+" ")<0&&(h+=m+" ");v=En(h),d!==v&&this.setAttribute("class",v)}}):this)},removeClass:function(s){var u,h,d,m,y,v;return K(s)?this.each(function(R){l(this).removeClass(s.call(this,R,Zt(this)))}):arguments.length?(u=Bi(s),u.length?this.each(function(){if(d=Zt(this),h=this.nodeType===1&&" "+En(d)+" ",h){for(y=0;y<u.length;y++)for(m=u[y];h.indexOf(" "+m+" ")>-1;)h=h.replace(" "+m+" "," ");v=En(h),d!==v&&this.setAttribute("class",v)}}):this):this.attr("class","")},toggleClass:function(s,u){var h,d,m,y,v=typeof s,R=v==="string"||Array.isArray(s);return K(s)?this.each(function(A){l(this).toggleClass(s.call(this,A,Zt(this),u),u)}):typeof u=="boolean"&&R?u?this.addClass(s):this.removeClass(s):(h=Bi(s),this.each(function(){if(R)for(y=l(this),m=0;m<h.length;m++)d=h[m],y.hasClass(d)?y.removeClass(d):y.addClass(d);else(s===void 0||v==="boolean")&&(d=Zt(this),d&&ie.set(this,"__className__",d),this.setAttribute&&this.setAttribute("class",d||s===!1?"":ie.get(this,"__className__")||""))}))},hasClass:function(s){var u,h,d=0;for(u=" "+s+" ";h=this[d++];)if(h.nodeType===1&&(" "+En(Zt(h))+" ").indexOf(u)>-1)return!0;return!1}});var da=/\r/g;l.fn.extend({val:function(s){var u,h,d,m=this[0];return arguments.length?(d=K(s),this.each(function(y){var v;this.nodeType===1&&(d?v=s.call(this,y,l(this).val()):v=s,v==null?v="":typeof v=="number"?v+="":Array.isArray(v)&&(v=l.map(v,function(R){return R==null?"":R+""})),u=l.valHooks[this.type]||l.valHooks[this.nodeName.toLowerCase()],(!u||!("set"in u)||u.set(this,v,"value")===void 0)&&(this.value=v))})):m?(u=l.valHooks[m.type]||l.valHooks[m.nodeName.toLowerCase()],u&&"get"in u&&(h=u.get(m,"value"))!==void 0?h:(h=m.value,typeof h=="string"?h.replace(da,""):h??"")):void 0}}),l.extend({valHooks:{option:{get:function(s){var u=l.find.attr(s,"value");return u??En(l.text(s))}},select:{get:function(s){var u,h,d,m=s.options,y=s.selectedIndex,v=s.type==="select-one",R=v?null:[],A=v?y+1:m.length;for(y<0?d=A:d=v?y:0;d<A;d++)if(h=m[d],(h.selected||d===y)&&!h.disabled&&(!h.parentNode.disabled||!S(h.parentNode,"optgroup"))){if(u=l(h).val(),v)return u;R.push(u)}return R},set:function(s,u){for(var h,d,m=s.options,y=l.makeArray(u),v=m.length;v--;)d=m[v],(d.selected=l.inArray(l.valHooks.option.get(d),y)>-1)&&(h=!0);return h||(s.selectedIndex=-1),y}}}}),l.each(["radio","checkbox"],function(){l.valHooks[this]={set:function(s,u){if(Array.isArray(u))return s.checked=l.inArray(l(s).val(),u)>-1}},$.checkOn||(l.valHooks[this].get=function(s){return s.getAttribute("value")===null?"on":s.value})});var _r=e.location,qs={guid:Date.now()},wn=/\?/;l.parseXML=function(s){var u,h;if(!s||typeof s!="string")return null;try{u=new e.DOMParser().parseFromString(s,"text/xml")}catch{}return h=u&&u.getElementsByTagName("parsererror")[0],(!u||h)&&l.error("Invalid XML: "+(h?l.map(h.childNodes,function(d){return d.textContent}).join(`
`):s)),u};var Ht=/^(?:focusinfocus|focusoutblur)$/,$i=function(s){s.stopPropagation()};l.extend(l.event,{trigger:function(s,u,h,d){var m,y,v,R,A,k,q,B,F=[h||Z],Q=D.call(s,"type")?s.type:s,ue=D.call(s,"namespace")?s.namespace.split("."):[];if(y=B=v=h=h||Z,!(h.nodeType===3||h.nodeType===8)&&!Ht.test(Q+l.event.triggered)&&(Q.indexOf(".")>-1&&(ue=Q.split("."),Q=ue.shift(),ue.sort()),A=Q.indexOf(":")<0&&"on"+Q,s=s[l.expando]?s:new l.Event(Q,typeof s=="object"&&s),s.isTrigger=d?2:3,s.namespace=ue.join("."),s.rnamespace=s.namespace?new RegExp("(^|\\.)"+ue.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,s.result=void 0,s.target||(s.target=h),u=u==null?[s]:l.makeArray(u,[s]),q=l.event.special[Q]||{},!(!d&&q.trigger&&q.trigger.apply(h,u)===!1))){if(!d&&!q.noBubble&&!Y(h)){for(R=q.delegateType||Q,Ht.test(R+Q)||(y=y.parentNode);y;y=y.parentNode)F.push(y),v=y;v===(h.ownerDocument||Z)&&F.push(v.defaultView||v.parentWindow||e)}for(m=0;(y=F[m++])&&!s.isPropagationStopped();)B=y,s.type=m>1?R:q.bindType||Q,k=(ie.get(y,"events")||Object.create(null))[s.type]&&ie.get(y,"handle"),k&&k.apply(y,u),k=A&&y[A],k&&k.apply&&pn(y)&&(s.result=k.apply(y,u),s.result===!1&&s.preventDefault());return s.type=Q,!d&&!s.isDefaultPrevented()&&(!q._default||q._default.apply(F.pop(),u)===!1)&&pn(h)&&A&&K(h[Q])&&!Y(h)&&(v=h[A],v&&(h[A]=null),l.event.triggered=Q,s.isPropagationStopped()&&B.addEventListener(Q,$i),h[Q](),s.isPropagationStopped()&&B.removeEventListener(Q,$i),l.event.triggered=void 0,v&&(h[A]=v)),s.result}},simulate:function(s,u,h){var d=l.extend(new l.Event,h,{type:s,isSimulated:!0});l.event.trigger(d,null,u)}}),l.fn.extend({trigger:function(s,u){return this.each(function(){l.event.trigger(s,u,this)})},triggerHandler:function(s,u){var h=this[0];if(h)return l.event.trigger(s,u,h,!0)}});var Bs=/\[\]$/,Hi=/\r?\n/g,Fn=/^(?:submit|button|image|reset|file)$/i,pa=/^(?:input|select|textarea|keygen)/i;function zi(s,u,h,d){var m;if(Array.isArray(u))l.each(u,function(y,v){h||Bs.test(s)?d(s,v):zi(s+"["+(typeof v=="object"&&v!=null?y:"")+"]",v,h,d)});else if(!h&&je(u)==="object")for(m in u)zi(s+"["+m+"]",u[m],h,d);else d(s,u)}l.param=function(s,u){var h,d=[],m=function(y,v){var R=K(v)?v():v;d[d.length]=encodeURIComponent(y)+"="+encodeURIComponent(R??"")};if(s==null)return"";if(Array.isArray(s)||s.jquery&&!l.isPlainObject(s))l.each(s,function(){m(this.name,this.value)});else for(h in s)zi(h,s[h],u,m);return d.join("&")},l.fn.extend({serialize:function(){return l.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var s=l.prop(this,"elements");return s?l.makeArray(s):this}).filter(function(){var s=this.type;return this.name&&!l(this).is(":disabled")&&pa.test(this.nodeName)&&!Fn.test(s)&&(this.checked||!mn.test(s))}).map(function(s,u){var h=l(this).val();return h==null?null:Array.isArray(h)?l.map(h,function(d){return{name:u.name,value:d.replace(Hi,`\r
`)}}):{name:u.name,value:h.replace(Hi,`\r
`)}}).get()}});var ga=/%20/g,en=/#.*$/,ma=/([?&])_=[^&]*/,ya=/^(.*?):[ \t]*([^\r\n]*)$/mg,ei=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ti=/^(?:GET|HEAD)$/,$s=/^\/\//,Un={},In={},Wi="*/".concat("*"),vr=Z.createElement("a");vr.href=_r.href;function Le(s){return function(u,h){typeof u!="string"&&(h=u,u="*");var d,m=0,y=u.toLowerCase().match(yt)||[];if(K(h))for(;d=y[m++];)d[0]==="+"?(d=d.slice(1)||"*",(s[d]=s[d]||[]).unshift(h)):(s[d]=s[d]||[]).push(h)}}function Hs(s,u,h,d){var m={},y=s===In;function v(R){var A;return m[R]=!0,l.each(s[R]||[],function(k,q){var B=q(u,h,d);if(typeof B=="string"&&!y&&!m[B])return u.dataTypes.unshift(B),v(B),!1;if(y)return!(A=B)}),A}return v(u.dataTypes[0])||!m["*"]&&v("*")}function Gi(s,u){var h,d,m=l.ajaxSettings.flatOptions||{};for(h in u)u[h]!==void 0&&((m[h]?s:d||(d={}))[h]=u[h]);return d&&l.extend(!0,s,d),s}function zs(s,u,h){for(var d,m,y,v,R=s.contents,A=s.dataTypes;A[0]==="*";)A.shift(),d===void 0&&(d=s.mimeType||u.getResponseHeader("Content-Type"));if(d){for(m in R)if(R[m]&&R[m].test(d)){A.unshift(m);break}}if(A[0]in h)y=A[0];else{for(m in h){if(!A[0]||s.converters[m+" "+A[0]]){y=m;break}v||(v=m)}y=y||v}if(y)return y!==A[0]&&A.unshift(y),h[y]}function Ws(s,u,h,d){var m,y,v,R,A,k={},q=s.dataTypes.slice();if(q[1])for(v in s.converters)k[v.toLowerCase()]=s.converters[v];for(y=q.shift();y;)if(s.responseFields[y]&&(h[s.responseFields[y]]=u),!A&&d&&s.dataFilter&&(u=s.dataFilter(u,s.dataType)),A=y,y=q.shift(),y){if(y==="*")y=A;else if(A!=="*"&&A!==y){if(v=k[A+" "+y]||k["* "+y],!v){for(m in k)if(R=m.split(" "),R[1]===y&&(v=k[A+" "+R[0]]||k["* "+R[0]],v)){v===!0?v=k[m]:k[m]!==!0&&(y=R[0],q.unshift(R[1]));break}}if(v!==!0)if(v&&s.throws)u=v(u);else try{u=v(u)}catch(B){return{state:"parsererror",error:v?B:"No conversion from "+A+" to "+y}}}}return{state:"success",data:u}}l.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:_r.href,type:"GET",isLocal:ei.test(_r.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Wi,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":l.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(s,u){return u?Gi(Gi(s,l.ajaxSettings),u):Gi(l.ajaxSettings,s)},ajaxPrefilter:Le(Un),ajaxTransport:Le(In),ajax:function(s,u){typeof s=="object"&&(u=s,s=void 0),u=u||{};var h,d,m,y,v,R,A,k,q,B,F=l.ajaxSetup({},u),Q=F.context||F,ue=F.context&&(Q.nodeType||Q.jquery)?l(Q):l.event,Ee=l.Deferred(),le=l.Callbacks("once memory"),We=F.statusCode||{},Be={},Pt={},kt="canceled",ye={readyState:0,getResponseHeader:function(Ae){var Fe;if(A){if(!y)for(y={};Fe=ya.exec(m);)y[Fe[1].toLowerCase()+" "]=(y[Fe[1].toLowerCase()+" "]||[]).concat(Fe[2]);Fe=y[Ae.toLowerCase()+" "]}return Fe==null?null:Fe.join(", ")},getAllResponseHeaders:function(){return A?m:null},setRequestHeader:function(Ae,Fe){return A==null&&(Ae=Pt[Ae.toLowerCase()]=Pt[Ae.toLowerCase()]||Ae,Be[Ae]=Fe),this},overrideMimeType:function(Ae){return A==null&&(F.mimeType=Ae),this},statusCode:function(Ae){var Fe;if(Ae)if(A)ye.always(Ae[ye.status]);else for(Fe in Ae)We[Fe]=[We[Fe],Ae[Fe]];return this},abort:function(Ae){var Fe=Ae||kt;return h&&h.abort(Fe),$e(0,Fe),this}};if(Ee.promise(ye),F.url=((s||F.url||_r.href)+"").replace($s,_r.protocol+"//"),F.type=u.method||u.type||F.method||F.type,F.dataTypes=(F.dataType||"*").toLowerCase().match(yt)||[""],F.crossDomain==null){R=Z.createElement("a");try{R.href=F.url,R.href=R.href,F.crossDomain=vr.protocol+"//"+vr.host!=R.protocol+"//"+R.host}catch{F.crossDomain=!0}}if(F.data&&F.processData&&typeof F.data!="string"&&(F.data=l.param(F.data,F.traditional)),Hs(Un,F,u,ye),A)return ye;k=l.event&&F.global,k&&l.active++===0&&l.event.trigger("ajaxStart"),F.type=F.type.toUpperCase(),F.hasContent=!ti.test(F.type),d=F.url.replace(en,""),F.hasContent?F.data&&F.processData&&(F.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(F.data=F.data.replace(ga,"+")):(B=F.url.slice(d.length),F.data&&(F.processData||typeof F.data=="string")&&(d+=(wn.test(d)?"&":"?")+F.data,delete F.data),F.cache===!1&&(d=d.replace(ma,"$1"),B=(wn.test(d)?"&":"?")+"_="+qs.guid+++B),F.url=d+B),F.ifModified&&(l.lastModified[d]&&ye.setRequestHeader("If-Modified-Since",l.lastModified[d]),l.etag[d]&&ye.setRequestHeader("If-None-Match",l.etag[d])),(F.data&&F.hasContent&&F.contentType!==!1||u.contentType)&&ye.setRequestHeader("Content-Type",F.contentType),ye.setRequestHeader("Accept",F.dataTypes[0]&&F.accepts[F.dataTypes[0]]?F.accepts[F.dataTypes[0]]+(F.dataTypes[0]!=="*"?", "+Wi+"; q=0.01":""):F.accepts["*"]);for(q in F.headers)ye.setRequestHeader(q,F.headers[q]);if(F.beforeSend&&(F.beforeSend.call(Q,ye,F)===!1||A))return ye.abort();if(kt="abort",le.add(F.complete),ye.done(F.success),ye.fail(F.error),h=Hs(In,F,u,ye),!h)$e(-1,"No Transport");else{if(ye.readyState=1,k&&ue.trigger("ajaxSend",[ye,F]),A)return ye;F.async&&F.timeout>0&&(v=e.setTimeout(function(){ye.abort("timeout")},F.timeout));try{A=!1,h.send(Be,$e)}catch(Ae){if(A)throw Ae;$e(-1,Ae)}}function $e(Ae,Fe,Ft,o){var f,g,E,O,U,X=Fe;A||(A=!0,v&&e.clearTimeout(v),h=void 0,m=o||"",ye.readyState=Ae>0?4:0,f=Ae>=200&&Ae<300||Ae===304,Ft&&(O=zs(F,ye,Ft)),!f&&l.inArray("script",F.dataTypes)>-1&&l.inArray("json",F.dataTypes)<0&&(F.converters["text script"]=function(){}),O=Ws(F,O,ye,f),f?(F.ifModified&&(U=ye.getResponseHeader("Last-Modified"),U&&(l.lastModified[d]=U),U=ye.getResponseHeader("etag"),U&&(l.etag[d]=U)),Ae===204||F.type==="HEAD"?X="nocontent":Ae===304?X="notmodified":(X=O.state,g=O.data,E=O.error,f=!E)):(E=X,(Ae||!X)&&(X="error",Ae<0&&(Ae=0))),ye.status=Ae,ye.statusText=(Fe||X)+"",f?Ee.resolveWith(Q,[g,X,ye]):Ee.rejectWith(Q,[ye,X,E]),ye.statusCode(We),We=void 0,k&&ue.trigger(f?"ajaxSuccess":"ajaxError",[ye,F,f?g:E]),le.fireWith(Q,[ye,X]),k&&(ue.trigger("ajaxComplete",[ye,F]),--l.active||l.event.trigger("ajaxStop")))}return ye},getJSON:function(s,u,h){return l.get(s,u,h,"json")},getScript:function(s,u){return l.get(s,void 0,u,"script")}}),l.each(["get","post"],function(s,u){l[u]=function(h,d,m,y){return K(d)&&(y=y||m,m=d,d=void 0),l.ajax(l.extend({url:h,type:u,dataType:y,data:d,success:m},l.isPlainObject(h)&&h))}}),l.ajaxPrefilter(function(s){var u;for(u in s.headers)u.toLowerCase()==="content-type"&&(s.contentType=s.headers[u]||"")}),l._evalUrl=function(s,u,h){return l.ajax({url:s,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(d){l.globalEval(d,u,h)}})},l.fn.extend({wrapAll:function(s){var u;return this[0]&&(K(s)&&(s=s.call(this[0])),u=l(s,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&u.insertBefore(this[0]),u.map(function(){for(var h=this;h.firstElementChild;)h=h.firstElementChild;return h}).append(this)),this},wrapInner:function(s){return K(s)?this.each(function(u){l(this).wrapInner(s.call(this,u))}):this.each(function(){var u=l(this),h=u.contents();h.length?h.wrapAll(s):u.append(s)})},wrap:function(s){var u=K(s);return this.each(function(h){l(this).wrapAll(u?s.call(this,h):s)})},unwrap:function(s){return this.parent(s).not("body").each(function(){l(this).replaceWith(this.childNodes)}),this}}),l.expr.pseudos.hidden=function(s){return!l.expr.pseudos.visible(s)},l.expr.pseudos.visible=function(s){return!!(s.offsetWidth||s.offsetHeight||s.getClientRects().length)},l.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var Gs={0:200,1223:204},tn=l.ajaxSettings.xhr();$.cors=!!tn&&"withCredentials"in tn,$.ajax=tn=!!tn,l.ajaxTransport(function(s){var u,h;if($.cors||tn&&!s.crossDomain)return{send:function(d,m){var y,v=s.xhr();if(v.open(s.type,s.url,s.async,s.username,s.password),s.xhrFields)for(y in s.xhrFields)v[y]=s.xhrFields[y];s.mimeType&&v.overrideMimeType&&v.overrideMimeType(s.mimeType),!s.crossDomain&&!d["X-Requested-With"]&&(d["X-Requested-With"]="XMLHttpRequest");for(y in d)v.setRequestHeader(y,d[y]);u=function(R){return function(){u&&(u=h=v.onload=v.onerror=v.onabort=v.ontimeout=v.onreadystatechange=null,R==="abort"?v.abort():R==="error"?typeof v.status!="number"?m(0,"error"):m(v.status,v.statusText):m(Gs[v.status]||v.status,v.statusText,(v.responseType||"text")!=="text"||typeof v.responseText!="string"?{binary:v.response}:{text:v.responseText},v.getAllResponseHeaders()))}},v.onload=u(),h=v.onerror=v.ontimeout=u("error"),v.onabort!==void 0?v.onabort=h:v.onreadystatechange=function(){v.readyState===4&&e.setTimeout(function(){u&&h()})},u=u("abort");try{v.send(s.hasContent&&s.data||null)}catch(R){if(u)throw R}},abort:function(){u&&u()}}}),l.ajaxPrefilter(function(s){s.crossDomain&&(s.contents.script=!1)}),l.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(s){return l.globalEval(s),s}}}),l.ajaxPrefilter("script",function(s){s.cache===void 0&&(s.cache=!1),s.crossDomain&&(s.type="GET")}),l.ajaxTransport("script",function(s){if(s.crossDomain||s.scriptAttrs){var u,h;return{send:function(d,m){u=l("<script>").attr(s.scriptAttrs||{}).prop({charset:s.scriptCharset,src:s.url}).on("load error",h=function(y){u.remove(),h=null,y&&m(y.type==="error"?404:200,y.type)}),Z.head.appendChild(u[0])},abort:function(){h&&h()}}}});var Ki=[],Rt=/(=)\?(?=&|$)|\?\?/;l.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var s=Ki.pop()||l.expando+"_"+qs.guid++;return this[s]=!0,s}}),l.ajaxPrefilter("json jsonp",function(s,u,h){var d,m,y,v=s.jsonp!==!1&&(Rt.test(s.url)?"url":typeof s.data=="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Rt.test(s.data)&&"data");if(v||s.dataTypes[0]==="jsonp")return d=s.jsonpCallback=K(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback,v?s[v]=s[v].replace(Rt,"$1"+d):s.jsonp!==!1&&(s.url+=(wn.test(s.url)?"&":"?")+s.jsonp+"="+d),s.converters["script json"]=function(){return y||l.error(d+" was not called"),y[0]},s.dataTypes[0]="json",m=e[d],e[d]=function(){y=arguments},h.always(function(){m===void 0?l(e).removeProp(d):e[d]=m,s[d]&&(s.jsonpCallback=u.jsonpCallback,Ki.push(d)),y&&K(m)&&m(y[0]),y=m=void 0}),"script"}),$.createHTMLDocument=(function(){var s=Z.implementation.createHTMLDocument("").body;return s.innerHTML="<form></form><form></form>",s.childNodes.length===2})(),l.parseHTML=function(s,u,h){if(typeof s!="string")return[];typeof u=="boolean"&&(h=u,u=!1);var d,m,y;return u||($.createHTMLDocument?(u=Z.implementation.createHTMLDocument(""),d=u.createElement("base"),d.href=Z.location.href,u.head.appendChild(d)):u=Z),m=qt.exec(s),y=!h&&[],m?[u.createElement(m[1])]:(m=Mi([s],u,y),y&&y.length&&l(y).remove(),l.merge([],m.childNodes))},l.fn.load=function(s,u,h){var d,m,y,v=this,R=s.indexOf(" ");return R>-1&&(d=En(s.slice(R)),s=s.slice(0,R)),K(u)?(h=u,u=void 0):u&&typeof u=="object"&&(m="POST"),v.length>0&&l.ajax({url:s,type:m||"GET",dataType:"html",data:u}).done(function(A){y=arguments,v.html(d?l("<div>").append(l.parseHTML(A)).find(d):A)}).always(h&&function(A,k){v.each(function(){h.apply(this,y||[A.responseText,k,A])})}),this},l.expr.pseudos.animated=function(s){return l.grep(l.timers,function(u){return s===u.elem}).length},l.offset={setOffset:function(s,u,h){var d,m,y,v,R,A,k,q=l.css(s,"position"),B=l(s),F={};q==="static"&&(s.style.position="relative"),R=B.offset(),y=l.css(s,"top"),A=l.css(s,"left"),k=(q==="absolute"||q==="fixed")&&(y+A).indexOf("auto")>-1,k?(d=B.position(),v=d.top,m=d.left):(v=parseFloat(y)||0,m=parseFloat(A)||0),K(u)&&(u=u.call(s,h,l.extend({},R))),u.top!=null&&(F.top=u.top-R.top+v),u.left!=null&&(F.left=u.left-R.left+m),"using"in u?u.using.call(s,F):B.css(F)}},l.fn.extend({offset:function(s){if(arguments.length)return s===void 0?this:this.each(function(m){l.offset.setOffset(this,s,m)});var u,h,d=this[0];if(d)return d.getClientRects().length?(u=d.getBoundingClientRect(),h=d.ownerDocument.defaultView,{top:u.top+h.pageYOffset,left:u.left+h.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var s,u,h,d=this[0],m={top:0,left:0};if(l.css(d,"position")==="fixed")u=d.getBoundingClientRect();else{for(u=this.offset(),h=d.ownerDocument,s=d.offsetParent||h.documentElement;s&&(s===h.body||s===h.documentElement)&&l.css(s,"position")==="static";)s=s.parentNode;s&&s!==d&&s.nodeType===1&&(m=l(s).offset(),m.top+=l.css(s,"borderTopWidth",!0),m.left+=l.css(s,"borderLeftWidth",!0))}return{top:u.top-m.top-l.css(d,"marginTop",!0),left:u.left-m.left-l.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var s=this.offsetParent;s&&l.css(s,"position")==="static";)s=s.offsetParent;return s||Qt})}}),l.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(s,u){var h=u==="pageYOffset";l.fn[s]=function(d){return Bt(this,function(m,y,v){var R;if(Y(m)?R=m:m.nodeType===9&&(R=m.defaultView),v===void 0)return R?R[u]:m[y];R?R.scrollTo(h?R.pageXOffset:v,h?v:R.pageYOffset):m[y]=v},s,d,arguments.length)}}),l.each(["top","left"],function(s,u){l.cssHooks[u]=dr($.pixelPosition,function(h,d){if(d)return d=fr(h,u),Gr.test(d)?l(h).position()[u]+"px":d})}),l.each({Height:"height",Width:"width"},function(s,u){l.each({padding:"inner"+s,content:u,"":"outer"+s},function(h,d){l.fn[d]=function(m,y){var v=arguments.length&&(h||typeof m!="boolean"),R=h||(m===!0||y===!0?"margin":"border");return Bt(this,function(A,k,q){var B;return Y(A)?d.indexOf("outer")===0?A["inner"+s]:A.document.documentElement["client"+s]:A.nodeType===9?(B=A.documentElement,Math.max(A.body["scroll"+s],B["scroll"+s],A.body["offset"+s],B["offset"+s],B["client"+s])):q===void 0?l.css(A,k,R):l.style(A,k,q,R)},u,v?m:void 0,v)}})}),l.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(s,u){l.fn[u]=function(h){return this.on(u,h)}}),l.fn.extend({bind:function(s,u,h){return this.on(s,null,u,h)},unbind:function(s,u){return this.off(s,null,u)},delegate:function(s,u,h,d){return this.on(u,s,h,d)},undelegate:function(s,u,h){return arguments.length===1?this.off(s,"**"):this.off(u,s||"**",h)},hover:function(s,u){return this.on("mouseenter",s).on("mouseleave",u||s)}}),l.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(s,u){l.fn[u]=function(h,d){return arguments.length>0?this.on(u,null,h,d):this.trigger(u)}});var Ks=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;l.proxy=function(s,u){var h,d,m;if(typeof u=="string"&&(h=s[u],u=s,s=h),!!K(s))return d=a.call(arguments,2),m=function(){return s.apply(u||this,d.concat(a.call(arguments)))},m.guid=s.guid=s.guid||l.guid++,m},l.holdReady=function(s){s?l.readyWait++:l.ready(!0)},l.isArray=Array.isArray,l.parseJSON=JSON.parse,l.nodeName=S,l.isFunction=K,l.isWindow=Y,l.camelCase=Nt,l.type=je,l.now=Date.now,l.isNumeric=function(s){var u=l.type(s);return(u==="number"||u==="string")&&!isNaN(s-parseFloat(s))},l.trim=function(s){return s==null?"":(s+"").replace(Ks,"$1")};var _a=e.jQuery,Tr=e.$;return l.noConflict=function(s){return e.$===l&&(e.$=Tr),s&&e.jQuery===l&&(e.jQuery=_a),l},typeof t>"u"&&(e.jQuery=e.$=l),l})})(so)),so.exports}var cd=ud();const Pe=od(cd),ld=()=>{};var rc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},hd=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=n[t++];e[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=n[t++],c=n[t++],p=n[t++],_=((i&7)<<18|(a&63)<<12|(c&63)<<6|p&63)-65536;e[r++]=String.fromCharCode(55296+(_>>10)),e[r++]=String.fromCharCode(56320+(_&1023))}else{const a=n[t++],c=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|c&63)}}return e.join("")},Dl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const a=n[i],c=i+1<n.length,p=c?n[i+1]:0,_=i+2<n.length,T=_?n[i+2]:0,I=a>>2,D=(a&3)<<4|p>>4;let x=(p&15)<<2|T>>6,G=T&63;_||(G=64,c||(x=64)),r.push(t[I],t[D],t[x],t[G])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(kl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):hd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const a=t[n.charAt(i++)],p=i<n.length?t[n.charAt(i)]:0;++i;const T=i<n.length?t[n.charAt(i)]:64;++i;const D=i<n.length?t[n.charAt(i)]:64;if(++i,a==null||p==null||T==null||D==null)throw new fd;const x=a<<2|p>>4;if(r.push(x),T!==64){const G=p<<4&240|T>>2;if(r.push(G),D!==64){const $=T<<6&192|D;r.push($)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class fd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dd=function(n){const e=kl(n);return Dl.encodeByteArray(e,!0)},yo=function(n){return dd(n).replace(/\./g,"")},Nl=function(n){try{return Dl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd=()=>pd().__FIREBASE_DEFAULTS__,md=()=>{if(typeof process>"u"||typeof rc>"u")return;const n=rc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},yd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Nl(n[1]);return e&&JSON.parse(e)},Lo=()=>{try{return ld()||gd()||md()||yd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},xl=n=>Lo()?.emulatorHosts?.[n],_d=n=>{const e=xl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Vl=()=>Lo()?.config,Ol=n=>Lo()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ml(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...n};return[yo(JSON.stringify(t)),yo(JSON.stringify(c)),""].join(".")}const Zi={};function Ed(){const n={prod:[],emulator:[]};for(const e of Object.keys(Zi))Zi[e]?n.emulator.push(e):n.prod.push(e);return n}function wd(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let ic=!1;function Ll(n,e){if(typeof window>"u"||typeof document>"u"||!Ii(window.location.host)||Zi[n]===e||Zi[n]||ic)return;Zi[n]=e;function t(x){return`__firebase__banner__${x}`}const r="__firebase__banner",a=Ed().prod.length>0;function c(){const x=document.getElementById(r);x&&x.remove()}function p(x){x.style.display="flex",x.style.background="#7faaf0",x.style.position="fixed",x.style.bottom="5px",x.style.left="5px",x.style.padding=".5em",x.style.borderRadius="5px",x.style.alignItems="center"}function _(x,G){x.setAttribute("width","24"),x.setAttribute("id",G),x.setAttribute("height","24"),x.setAttribute("viewBox","0 0 24 24"),x.setAttribute("fill","none"),x.style.marginLeft="-6px"}function T(){const x=document.createElement("span");return x.style.cursor="pointer",x.style.marginLeft="16px",x.style.fontSize="24px",x.innerHTML=" &times;",x.onclick=()=>{ic=!0,c()},x}function I(x,G){x.setAttribute("id",G),x.innerText="Learn more",x.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",x.setAttribute("target","__blank"),x.style.paddingLeft="5px",x.style.textDecoration="underline"}function D(){const x=wd(r),G=t("text"),$=document.getElementById(G)||document.createElement("span"),K=t("learnmore"),Y=document.getElementById(K)||document.createElement("a"),Z=t("preprendIcon"),ve=document.getElementById(Z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(x.created){const Te=x.element;p(Te),I(Y,K);const je=T();_(ve,Z),Te.append(ve,$,Y,je),document.body.appendChild(Te)}a?($.innerText="Preview backend disconnected.",ve.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ve.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,$.innerText="Preview backend running in this workspace."),$.setAttribute("id",G)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",D):D()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Id(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function Ad(){const n=Lo()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function bd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Sd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Cd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Rd(){const n=pt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Pd(){return!Ad()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function kd(){try{return typeof indexedDB=="object"}catch{return!1}}function Dd(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd="FirebaseError";class xn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Nd,Object.setPrototypeOf(this,xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ps.prototype.create)}}class ps{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,a=this.errors[e],c=a?xd(a,r):"Error",p=`${this.serviceName}: ${c} (${i}).`;return new xn(i,p,r)}}function xd(n,e){return n.replace(Vd,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Vd=/\{\$([^}]+)}/g;function Od(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function br(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const a=n[i],c=e[i];if(sc(a)&&sc(c)){if(!br(a,c))return!1}else if(a!==c)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function sc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Md(n,e){const t=new Ld(n,e);return t.subscribe.bind(t)}class Ld{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Fd(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Aa),i.error===void 0&&(i.error=Aa),i.complete===void 0&&(i.complete=Aa);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Fd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Aa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(n){return n&&n._delegate?n._delegate:n}class Sr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new vd;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qd(e))try{this.getOrInitializeService({instanceIdentifier:wr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(e=wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wr){return this.instances.has(e)}getOptions(e=wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,c]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(a);r===p&&c.resolve(i)}return i}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jd(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wr){return this.component?this.component.multipleInstances?e:wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jd(n){return n===wr?void 0:n}function qd(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ud(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(be||(be={}));const $d={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},Hd=be.INFO,zd={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},Wd=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=zd[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class uu{constructor(e){this.name=e,this._logLevel=Hd,this._logHandler=Wd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$d[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}const Gd=(n,e)=>e.some(t=>n instanceof t);let oc,ac;function Kd(){return oc||(oc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qd(){return ac||(ac=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fl=new WeakMap,La=new WeakMap,Ul=new WeakMap,ba=new WeakMap,cu=new WeakMap;function Xd(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",a),n.removeEventListener("error",c)},a=()=>{t(Kn(n.result)),i()},c=()=>{r(n.error),i()};n.addEventListener("success",a),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&Fl.set(t,n)}).catch(()=>{}),cu.set(e,n),e}function Jd(n){if(La.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",c),n.removeEventListener("abort",c)},a=()=>{t(),i()},c=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",a),n.addEventListener("error",c),n.addEventListener("abort",c)});La.set(n,e)}let Fa={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return La.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ul.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Kn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Yd(n){Fa=n(Fa)}function Zd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Sa(this),e,...t);return Ul.set(r,e.sort?e.sort():[e]),Kn(r)}:Qd().includes(n)?function(...e){return n.apply(Sa(this),e),Kn(Fl.get(this))}:function(...e){return Kn(n.apply(Sa(this),e))}}function ep(n){return typeof n=="function"?Zd(n):(n instanceof IDBTransaction&&Jd(n),Gd(n,Kd())?new Proxy(n,Fa):n)}function Kn(n){if(n instanceof IDBRequest)return Xd(n);if(ba.has(n))return ba.get(n);const e=ep(n);return e!==n&&(ba.set(n,e),cu.set(e,n)),e}const Sa=n=>cu.get(n);function tp(n,e,{blocked:t,upgrade:r,blocking:i,terminated:a}={}){const c=indexedDB.open(n,e),p=Kn(c);return r&&c.addEventListener("upgradeneeded",_=>{r(Kn(c.result),_.oldVersion,_.newVersion,Kn(c.transaction),_)}),t&&c.addEventListener("blocked",_=>t(_.oldVersion,_.newVersion,_)),p.then(_=>{a&&_.addEventListener("close",()=>a()),i&&_.addEventListener("versionchange",T=>i(T.oldVersion,T.newVersion,T))}).catch(()=>{}),p}const np=["get","getKey","getAll","getAllKeys","count"],rp=["put","add","delete","clear"],Ca=new Map;function uc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ca.get(e))return Ca.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=rp.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||np.includes(t)))return;const a=async function(c,...p){const _=this.transaction(c,i?"readwrite":"readonly");let T=_.store;return r&&(T=T.index(p.shift())),(await Promise.all([T[t](...p),i&&_.done]))[0]};return Ca.set(e,a),a}Yd(n=>({...n,get:(e,t,r)=>uc(e,t)||n.get(e,t,r),has:(e,t)=>!!uc(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(sp(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function sp(n){return n.getComponent()?.type==="VERSION"}const Ua="@firebase/app",cc="0.14.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new uu("@firebase/app"),op="@firebase/app-compat",ap="@firebase/analytics-compat",up="@firebase/analytics",cp="@firebase/app-check-compat",lp="@firebase/app-check",hp="@firebase/auth",fp="@firebase/auth-compat",dp="@firebase/database",pp="@firebase/data-connect",gp="@firebase/database-compat",mp="@firebase/functions",yp="@firebase/functions-compat",_p="@firebase/installations",vp="@firebase/installations-compat",Tp="@firebase/messaging",Ep="@firebase/messaging-compat",wp="@firebase/performance",Ip="@firebase/performance-compat",Ap="@firebase/remote-config",bp="@firebase/remote-config-compat",Sp="@firebase/storage",Cp="@firebase/storage-compat",Rp="@firebase/firestore",Pp="@firebase/ai",kp="@firebase/firestore-compat",Dp="firebase",Np="12.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja="[DEFAULT]",xp={[Ua]:"fire-core",[op]:"fire-core-compat",[up]:"fire-analytics",[ap]:"fire-analytics-compat",[lp]:"fire-app-check",[cp]:"fire-app-check-compat",[hp]:"fire-auth",[fp]:"fire-auth-compat",[dp]:"fire-rtdb",[pp]:"fire-data-connect",[gp]:"fire-rtdb-compat",[mp]:"fire-fn",[yp]:"fire-fn-compat",[_p]:"fire-iid",[vp]:"fire-iid-compat",[Tp]:"fire-fcm",[Ep]:"fire-fcm-compat",[wp]:"fire-perf",[Ip]:"fire-perf-compat",[Ap]:"fire-rc",[bp]:"fire-rc-compat",[Sp]:"fire-gcs",[Cp]:"fire-gcs-compat",[Rp]:"fire-fst",[kp]:"fire-fst-compat",[Pp]:"fire-vertex","fire-js":"fire-js",[Dp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o=new Map,Vp=new Map,qa=new Map;function lc(n,e){try{n.container.addComponent(e)}catch(t){Cn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function gi(n){const e=n.name;if(qa.has(e))return Cn.debug(`There were multiple attempts to register component ${e}.`),!1;qa.set(e,n);for(const t of _o.values())lc(t,n);for(const t of Vp.values())lc(t,n);return!0}function lu(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function sn(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qn=new ps("app","Firebase",Op);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Sr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai=Np;function jl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:ja,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Qn.create("bad-app-name",{appName:String(i)});if(t||(t=Vl()),!t)throw Qn.create("no-options");const a=_o.get(i);if(a){if(br(t,a.options)&&br(r,a.config))return a;throw Qn.create("duplicate-app",{appName:i})}const c=new Bd(i);for(const _ of qa.values())c.addComponent(_);const p=new Mp(t,r,c);return _o.set(i,p),p}function ql(n=ja){const e=_o.get(n);if(!e&&n===ja&&Vl())return jl();if(!e)throw Qn.create("no-app",{appName:n});return e}function Xn(n,e,t){let r=xp[n]??n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${r}" with version "${e}":`];i&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cn.warn(c.join(" "));return}gi(new Sr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp="firebase-heartbeat-database",Fp=1,ss="firebase-heartbeat-store";let Ra=null;function Bl(){return Ra||(Ra=tp(Lp,Fp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ss)}catch(t){console.warn(t)}}}}).catch(n=>{throw Qn.create("idb-open",{originalErrorMessage:n.message})})),Ra}async function Up(n){try{const t=(await Bl()).transaction(ss),r=await t.objectStore(ss).get($l(n));return await t.done,r}catch(e){if(e instanceof xn)Cn.warn(e.message);else{const t=Qn.create("idb-get",{originalErrorMessage:e?.message});Cn.warn(t.message)}}}async function hc(n,e){try{const r=(await Bl()).transaction(ss,"readwrite");await r.objectStore(ss).put(e,$l(n)),await r.done}catch(t){if(t instanceof xn)Cn.warn(t.message);else{const r=Qn.create("idb-set",{originalErrorMessage:t?.message});Cn.warn(r.message)}}}function $l(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp=1024,qp=30;class Bp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Hp(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=fc();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>qp){const i=zp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Cn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=fc(),{heartbeatsToSend:t,unsentEntries:r}=$p(this._heartbeatsCache.heartbeats),i=yo(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return Cn.warn(e),""}}}function fc(){return new Date().toISOString().substring(0,10)}function $p(n,e=jp){const t=[];let r=n.slice();for(const i of n){const a=t.find(c=>c.agent===i.agent);if(a){if(a.dates.push(i.date),dc(t)>e){a.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),dc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Hp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kd()?Dd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Up(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return hc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return hc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function dc(n){return yo(JSON.stringify({version:2,heartbeats:n})).length}function zp(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(n){gi(new Sr("platform-logger",e=>new ip(e),"PRIVATE")),gi(new Sr("heartbeat",e=>new Bp(e),"PRIVATE")),Xn(Ua,cc,n),Xn(Ua,cc,"esm2020"),Xn("fire-js","")}Wp("");var Gp="firebase",Kp="12.2.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xn(Gp,Kp,"app");function Hl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qp=Hl,zl=new ps("auth","Firebase",Hl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo=new uu("@firebase/auth");function Xp(n,...e){vo.logLevel<=be.WARN&&vo.warn(`Auth (${Ai}): ${n}`,...e)}function oo(n,...e){vo.logLevel<=be.ERROR&&vo.error(`Auth (${Ai}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(n,...e){throw hu(n,...e)}function on(n,...e){return hu(n,...e)}function Wl(n,e,t){const r={...Qp(),[e]:t};return new ps("auth","Firebase",r).create(e,{appName:n.name})}function Ar(n){return Wl(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hu(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return zl.create(n,...e)}function fe(n,e,...t){if(!n)throw hu(e,...t)}function bn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw oo(e),new Error(e)}function Pn(n,e){n||bn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(){return typeof self<"u"&&self.location?.href||""}function Jp(){return pc()==="http:"||pc()==="https:"}function pc(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Jp()||Sd()||"connection"in navigator)?navigator.onLine:!0}function Zp(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,t){this.shortDelay=e,this.longDelay=t,Pn(t>e,"Short delay should be less than long delay!"),this.isMobile=Id()||Cd()}get(){return Yp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(n,e){Pn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ng=new ms(3e4,6e4);function du(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function bi(n,e,t,r,i={}){return Kl(n,i,async()=>{let a={},c={};r&&(e==="GET"?c=r:a={body:JSON.stringify(r)});const p=gs({key:n.config.apiKey,...c}).slice(1),_=await n._getAdditionalHeaders();_["Content-Type"]="application/json",n.languageCode&&(_["X-Firebase-Locale"]=n.languageCode);const T={method:e,headers:_,...a};return bd()||(T.referrerPolicy="no-referrer"),n.emulatorConfig&&Ii(n.emulatorConfig.host)&&(T.credentials="include"),Gl.fetch()(await Ql(n,n.config.apiHost,t,p),T)})}async function Kl(n,e,t){n._canInitEmulator=!1;const r={...eg,...e};try{const i=new ig(n),a=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const c=await a.json();if("needConfirmation"in c)throw Ys(n,"account-exists-with-different-credential",c);if(a.ok&&!("errorMessage"in c))return c;{const p=a.ok?c.errorMessage:c.error.message,[_,T]=p.split(" : ");if(_==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ys(n,"credential-already-in-use",c);if(_==="EMAIL_EXISTS")throw Ys(n,"email-already-in-use",c);if(_==="USER_DISABLED")throw Ys(n,"user-disabled",c);const I=r[_]||_.toLowerCase().replace(/[_\s]+/g,"-");if(T)throw Wl(n,I,T);Rn(n,I)}}catch(i){if(i instanceof xn)throw i;Rn(n,"network-request-failed",{message:String(i)})}}async function rg(n,e,t,r,i={}){const a=await bi(n,e,t,r,i);return"mfaPendingCredential"in a&&Rn(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function Ql(n,e,t,r){const i=`${e}${t}?${r}`,a=n,c=a.config.emulator?fu(n.config,i):`${n.config.apiScheme}://${i}`;return tg.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(c).toString():c}class ig{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(on(this.auth,"network-request-failed")),ng.get())})}}function Ys(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=on(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sg(n,e){return bi(n,"POST","/v1/accounts:delete",e)}async function To(n,e){return bi(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function og(n,e=!1){const t=Ze(n),r=await t.getIdToken(e),i=pu(r);fe(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,c=a?.sign_in_provider;return{claims:i,token:r,authTime:es(Pa(i.auth_time)),issuedAtTime:es(Pa(i.iat)),expirationTime:es(Pa(i.exp)),signInProvider:c||null,signInSecondFactor:a?.sign_in_second_factor||null}}function Pa(n){return Number(n)*1e3}function pu(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return oo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Nl(t);return i?JSON.parse(i):(oo("Failed to decode base64 JWT payload"),null)}catch(i){return oo("Caught error parsing JWT payload as JSON",i?.toString()),null}}function gc(n){const e=pu(n);return fe(e,"internal-error"),fe(typeof e.exp<"u","internal-error"),fe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function os(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof xn&&ag(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function ag({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=es(this.lastLoginAt),this.creationTime=es(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eo(n){const e=n.auth,t=await n.getIdToken(),r=await os(n,To(e,{idToken:t}));fe(r?.users.length,e,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const a=i.providerUserInfo?.length?Xl(i.providerUserInfo):[],c=lg(n.providerData,a),p=n.isAnonymous,_=!(n.email&&i.passwordHash)&&!c?.length,T=p?_:!1,I={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new $a(i.createdAt,i.lastLoginAt),isAnonymous:T};Object.assign(n,I)}async function cg(n){const e=Ze(n);await Eo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lg(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Xl(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hg(n,e){const t=await Kl(n,{},async()=>{const r=gs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:a}=n.config,c=await Ql(n,i,"/v1/token",`key=${a}`),p=await n._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const _={method:"POST",headers:p,body:r};return n.emulatorConfig&&Ii(n.emulatorConfig.host)&&(_.credentials="include"),Gl.fetch()(c,_)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function fg(n,e){return bi(n,"POST","/v2/accounts:revokeToken",du(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fe(e.idToken,"internal-error"),fe(typeof e.idToken<"u","internal-error"),fe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){fe(e.length!==0,"internal-error");const t=gc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(fe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:a}=await hg(e,t);this.updateTokensAndExpiration(r,i,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:a}=t,c=new ci;return r&&(fe(typeof r=="string","internal-error",{appName:e}),c.refreshToken=r),i&&(fe(typeof i=="string","internal-error",{appName:e}),c.accessToken=i),a&&(fe(typeof a=="number","internal-error",{appName:e}),c.expirationTime=a),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ci,this.toJSON())}_performRefresh(){return bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(n,e){fe(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class zt{constructor({uid:e,auth:t,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new ug(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new $a(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await os(this,this.stsTokenManager.getToken(this.auth,e));return fe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return og(this,e)}reload(){return cg(this)}_assign(e){this!==e&&(fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new zt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Eo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(sn(this.auth.app))return Promise.reject(Ar(this.auth));const e=await this.getIdToken();return await os(this,sg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,i=t.email??void 0,a=t.phoneNumber??void 0,c=t.photoURL??void 0,p=t.tenantId??void 0,_=t._redirectEventId??void 0,T=t.createdAt??void 0,I=t.lastLoginAt??void 0,{uid:D,emailVerified:x,isAnonymous:G,providerData:$,stsTokenManager:K}=t;fe(D&&K,e,"internal-error");const Y=ci.fromJSON(this.name,K);fe(typeof D=="string",e,"internal-error"),Bn(r,e.name),Bn(i,e.name),fe(typeof x=="boolean",e,"internal-error"),fe(typeof G=="boolean",e,"internal-error"),Bn(a,e.name),Bn(c,e.name),Bn(p,e.name),Bn(_,e.name),Bn(T,e.name),Bn(I,e.name);const Z=new zt({uid:D,auth:e,email:i,emailVerified:x,displayName:r,isAnonymous:G,photoURL:c,phoneNumber:a,tenantId:p,stsTokenManager:Y,createdAt:T,lastLoginAt:I});return $&&Array.isArray($)&&(Z.providerData=$.map(ve=>({...ve}))),_&&(Z._redirectEventId=_),Z}static async _fromIdTokenResponse(e,t,r=!1){const i=new ci;i.updateFromServerResponse(t);const a=new zt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Eo(a),a}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];fe(i.localId!==void 0,"internal-error");const a=i.providerUserInfo!==void 0?Xl(i.providerUserInfo):[],c=!(i.email&&i.passwordHash)&&!a?.length,p=new ci;p.updateFromIdToken(r);const _=new zt({uid:i.localId,auth:e,stsTokenManager:p,isAnonymous:c}),T={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new $a(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!a?.length};return Object.assign(_,T),_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc=new Map;function Sn(n){Pn(n instanceof Function,"Expected a class definition");let e=mc.get(n);return e?(Pn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,mc.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Jl.type="NONE";const yc=Jl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(n,e,t){return`firebase:${n}:${e}:${t}`}class li{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:a}=this.auth;this.fullUserKey=ao(this.userKey,i.apiKey,a),this.fullPersistenceKey=ao("persistence",i.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await To(this.auth,{idToken:e}).catch(()=>{});return t?zt._fromGetAccountInfoResponse(this.auth,t,e):null}return zt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new li(Sn(yc),e,r);const i=(await Promise.all(t.map(async T=>{if(await T._isAvailable())return T}))).filter(T=>T);let a=i[0]||Sn(yc);const c=ao(r,e.config.apiKey,e.name);let p=null;for(const T of t)try{const I=await T._get(c);if(I){let D;if(typeof I=="string"){const x=await To(e,{idToken:I}).catch(()=>{});if(!x)break;D=await zt._fromGetAccountInfoResponse(e,x,I)}else D=zt._fromJSON(e,I);T!==a&&(p=D),a=T;break}}catch{}const _=i.filter(T=>T._shouldAllowMigration);return!a._shouldAllowMigration||!_.length?new li(a,e,r):(a=_[0],p&&await a._set(c,p.toJSON()),await Promise.all(t.map(async T=>{if(T!==a)try{await T._remove(c)}catch{}})),new li(a,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(th(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Yl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rh(e))return"Blackberry";if(ih(e))return"Webos";if(Zl(e))return"Safari";if((e.includes("chrome/")||eh(e))&&!e.includes("edge/"))return"Chrome";if(nh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Yl(n=pt()){return/firefox\//i.test(n)}function Zl(n=pt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function eh(n=pt()){return/crios\//i.test(n)}function th(n=pt()){return/iemobile/i.test(n)}function nh(n=pt()){return/android/i.test(n)}function rh(n=pt()){return/blackberry/i.test(n)}function ih(n=pt()){return/webos/i.test(n)}function gu(n=pt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function dg(n=pt()){return gu(n)&&!!window.navigator?.standalone}function pg(){return Rd()&&document.documentMode===10}function sh(n=pt()){return gu(n)||nh(n)||ih(n)||rh(n)||/windows phone/i.test(n)||th(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(n,e=[]){let t;switch(n){case"Browser":t=_c(pt());break;case"Worker":t=`${_c(pt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ai}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((c,p)=>{try{const _=e(a);c(_)}catch(_){p(_)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mg(n,e={}){return bi(n,"GET","/v2/passwordPolicy",du(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg=6;class _g{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??yg,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vc(this),this.idTokenSubscription=new vc(this),this.beforeStateQueue=new gg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Sn(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await li.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await To(this,{idToken:e}),r=await zt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(sn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=this.redirectUser?._redirectEventId,c=r?._redirectEventId,p=await this.tryRedirectSignIn(e);(!a||a===c)&&p?.user&&(r=p.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Eo(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Zp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(sn(this.app))return Promise.reject(Ar(this));const t=e?Ze(e):null;return t&&fe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return sn(this.app)?Promise.reject(Ar(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return sn(this.app)?Promise.reject(Ar(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Sn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await mg(this),t=new _g(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ps("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await fg(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Sn(e)||this._popupRedirectResolver;fe(t,this,"argument-error"),this.redirectPersistenceManager=await li.create(this,[Sn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let c=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(fe(p,this,"internal-error"),p.then(()=>{c||a(this.currentUser)}),typeof t=="function"){const _=e.addObserver(t,r,i);return()=>{c=!0,_()}}else{const _=e.addObserver(t);return()=>{c=!0,_()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=oh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(sn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Xp(`Error while retrieving App Check token: ${e.error}`),e?.token}}function mu(n){return Ze(n)}class vc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Md(t=>this.observer=t)}get next(){return fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Tg(n){yu=n}function Eg(n){return yu.loadJS(n)}function wg(){return yu.gapiScript}function Ig(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(n,e){const t=lu(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),a=t.getOptions();if(br(a,e??{}))return i;Rn(i,"already-initialized")}return t.initialize({options:e})}function bg(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(Sn);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Sg(n,e,t){const r=mu(n);fe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,a=ah(e),{host:c,port:p}=Cg(e),_=p===null?"":`:${p}`,T={url:`${a}//${c}${_}/`},I=Object.freeze({host:c,port:p,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){fe(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),fe(br(T,r.config.emulator)&&br(I,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=T,r.emulatorConfig=I,r.settings.appVerificationDisabledForTesting=!0,Ii(c)?(Ml(`${a}//${c}${_}`),Ll("Auth",!0)):Rg()}function ah(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Cg(n){const e=ah(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const a=i[1];return{host:a,port:Tc(r.substr(a.length+1))}}else{const[a,c]=r.split(":");return{host:a,port:Tc(c)}}}function Tc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Rg(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return bn("not implemented")}_getIdTokenResponse(e){return bn("not implemented")}_linkToIdToken(e,t){return bn("not implemented")}_getReauthenticationResolver(e){return bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hi(n,e){return rg(n,"POST","/v1/accounts:signInWithIdp",du(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg="http://localhost";class Cr extends uh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Cr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Rn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...a}=t;if(!r||!i)return null;const c=new Cr(r,i);return c.idToken=a.idToken||void 0,c.accessToken=a.accessToken||void 0,c.secret=a.secret,c.nonce=a.nonce,c.pendingToken=a.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return hi(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,hi(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,hi(e,t)}buildRequest(){const e={requestUri:Pg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=gs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys extends ch{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends ys{constructor(){super("facebook.com")}static credential(e){return Cr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.FACEBOOK_SIGN_IN_METHOD="facebook.com";$n.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends ys{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Cr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Hn.credential(t,r)}catch{return null}}}Hn.GOOGLE_SIGN_IN_METHOD="google.com";Hn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends ys{constructor(){super("github.com")}static credential(e){return Cr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.GITHUB_SIGN_IN_METHOD="github.com";zn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends ys{constructor(){super("twitter.com")}static credential(e,t){return Cr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Wn.credential(t,r)}catch{return null}}}Wn.TWITTER_SIGN_IN_METHOD="twitter.com";Wn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const a=await zt._fromIdTokenResponse(e,r,i),c=Ec(r);return new mi({user:a,providerId:c,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Ec(r);return new mi({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Ec(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo extends xn{constructor(e,t,r,i){super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,wo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new wo(e,t,r,i)}}function lh(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?wo._fromErrorAndOperation(n,a,e,r):a})}async function kg(n,e,t=!1){const r=await os(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return mi._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dg(n,e,t=!1){const{auth:r}=n;if(sn(r.app))return Promise.reject(Ar(r));const i="reauthenticate";try{const a=await os(n,lh(r,i,e,n),t);fe(a.idToken,r,"internal-error");const c=pu(a.idToken);fe(c,r,"internal-error");const{sub:p}=c;return fe(n.uid===p,r,"user-mismatch"),mi._forOperation(n,i,a)}catch(a){throw a?.code==="auth/user-not-found"&&Rn(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ng(n,e,t=!1){if(sn(n.app))return Promise.reject(Ar(n));const r="signIn",i=await lh(n,r,e),a=await mi._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(a.user),a}function xg(n,e,t,r){return Ze(n).onIdTokenChanged(e,t,r)}function Vg(n,e,t){return Ze(n).beforeAuthStateChanged(e,t)}function lT(n,e,t,r){return Ze(n).onAuthStateChanged(e,t,r)}function hT(n){return Ze(n).signOut()}const Io="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Io,"1"),this.storage.removeItem(Io),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og=1e3,Mg=10;class fh extends hh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=sh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,p,_)=>{this.notifyListeners(c,_)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const c=this.storage.getItem(r);!t&&this.localCache[r]===c||this.notifyListeners(r,c)},a=this.storage.getItem(r);pg()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Mg):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Og)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}fh.type="LOCAL";const Lg=fh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh extends hh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}dh.type="SESSION";const ph=dh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Fo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:a}=t.data,c=this.handlersMap[i];if(!c?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const p=Array.from(c).map(async T=>T(t.origin,a)),_=await Fg(p);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:_})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,c;return new Promise((p,_)=>{const T=_u("",20);i.port1.start();const I=setTimeout(()=>{_(new Error("unsupported_event"))},r);c={messageChannel:i,onMessage(D){const x=D;if(x.data.eventId===T)switch(x.data.status){case"ack":clearTimeout(I),a=setTimeout(()=>{_(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),p(x.data.response);break;default:clearTimeout(I),clearTimeout(a),_(new Error("invalid_response"));break}}},this.handlers.add(c),i.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:T,data:t},[i.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(){return window}function jg(n){an().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(){return typeof an().WorkerGlobalScope<"u"&&typeof an().importScripts=="function"}async function qg(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Bg(){return navigator?.serviceWorker?.controller||null}function $g(){return gh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh="firebaseLocalStorageDb",Hg=1,Ao="firebaseLocalStorage",yh="fbase_key";class _s{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Uo(n,e){return n.transaction([Ao],e?"readwrite":"readonly").objectStore(Ao)}function zg(){const n=indexedDB.deleteDatabase(mh);return new _s(n).toPromise()}function Ha(){const n=indexedDB.open(mh,Hg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ao,{keyPath:yh})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ao)?e(r):(r.close(),await zg(),e(await Ha()))})})}async function wc(n,e,t){const r=Uo(n,!0).put({[yh]:e,value:t});return new _s(r).toPromise()}async function Wg(n,e){const t=Uo(n,!1).get(e),r=await new _s(t).toPromise();return r===void 0?null:r.value}function Ic(n,e){const t=Uo(n,!0).delete(e);return new _s(t).toPromise()}const Gg=800,Kg=3;class _h{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ha(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Kg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fo._getInstance($g()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await qg(),!this.activeServiceWorker)return;this.sender=new Ug(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Bg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ha();return await wc(e,Io,"1"),await Ic(e,Io),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>wc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Wg(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ic(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const a=Uo(i,!1).getAll();return new _s(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:a}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Gg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_h.type="LOCAL";const Qg=_h;new ms(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(n,e){return e?Sn(e):(fe(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu extends uh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return hi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return hi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Jg(n){return Ng(n.auth,new vu(n),n.bypassAuthState)}function Yg(n){const{auth:e,user:t}=n;return fe(t,e,"internal-error"),Dg(t,new vu(n),n.bypassAuthState)}async function Zg(n){const{auth:e,user:t}=n;return fe(t,e,"internal-error"),kg(t,new vu(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e,t,r,i,a=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:a,error:c,type:p}=e;if(c){this.reject(c);return}const _={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(_))}catch(T){this.reject(T)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Jg;case"linkViaPopup":case"linkViaRedirect":return Zg;case"reauthViaPopup":case"reauthViaRedirect":return Yg;default:Rn(this.auth,"internal-error")}}resolve(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em=new ms(2e3,1e4);class ui extends vh{constructor(e,t,r,i,a){super(e,t,i,a),this.provider=r,this.authWindow=null,this.pollId=null,ui.currentPopupAction&&ui.currentPopupAction.cancel(),ui.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return fe(e,this.auth,"internal-error"),e}async onExecution(){Pn(this.filter.length===1,"Popup operations only handle one event");const e=_u();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(on(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(on(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ui.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(on(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,em.get())};e()}}ui.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm="pendingRedirect",uo=new Map;class nm extends vh{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=uo.get(this.auth._key());if(!e){try{const r=await rm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}uo.set(this.auth._key(),e)}return this.bypassAuthState||uo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rm(n,e){const t=om(e),r=sm(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function im(n,e){uo.set(n._key(),e)}function sm(n){return Sn(n._redirectPersistence)}function om(n){return ao(tm,n.config.apiKey,n.name)}async function am(n,e,t=!1){if(sn(n.app))return Promise.reject(Ar(n));const r=mu(n),i=Xg(r,e),c=await new nm(r,i,t).execute();return c&&!t&&(delete c.user._redirectEventId,await r._persistUserIfCurrent(c.user),await r._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um=600*1e3;class cm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lm(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Th(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(on(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=um&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ac(e))}saveEventToCache(e){this.cachedEventUids.add(Ac(e)),this.lastProcessedEventTime=Date.now()}}function Ac(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Th({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function lm(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Th(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hm(n,e={}){return bi(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dm=/^https?/;async function pm(n){if(n.config.emulator)return;const{authorizedDomains:e}=await hm(n);for(const t of e)try{if(gm(t))return}catch{}Rn(n,"unauthorized-domain")}function gm(n){const e=Ba(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===r}if(!dm.test(t))return!1;if(fm.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm=new ms(3e4,6e4);function bc(){const n=an().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function ym(n){return new Promise((e,t)=>{function r(){bc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bc(),t(on(n,"network-request-failed"))},timeout:mm.get()})}if(an().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(an().gapi?.load)r();else{const i=Ig("iframefcb");return an()[i]=()=>{gapi.load?r():t(on(n,"network-request-failed"))},Eg(`${wg()}?onload=${i}`).catch(a=>t(a))}}).catch(e=>{throw co=null,e})}let co=null;function _m(n){return co=co||ym(n),co}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm=new ms(5e3,15e3),Tm="__/auth/iframe",Em="emulator/auth/iframe",wm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Im=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Am(n){const e=n.config;fe(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?fu(e,Em):`https://${n.config.authDomain}/${Tm}`,r={apiKey:e.apiKey,appName:n.name,v:Ai},i=Im.get(n.config.apiHost);i&&(r.eid=i);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${gs(r).slice(1)}`}async function bm(n){const e=await _m(n),t=an().gapi;return fe(t,n,"internal-error"),e.open({where:document.body,url:Am(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wm,dontclear:!0},r=>new Promise(async(i,a)=>{await r.restyle({setHideOnLeave:!1});const c=on(n,"network-request-failed"),p=an().setTimeout(()=>{a(c)},vm.get());function _(){an().clearTimeout(p),i(r)}r.ping(_).then(_,()=>{a(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Cm=500,Rm=600,Pm="_blank",km="http://localhost";class Sc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Dm(n,e,t,r=Cm,i=Rm){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),c=Math.max((window.screen.availWidth-r)/2,0).toString();let p="";const _={...Sm,width:r.toString(),height:i.toString(),top:a,left:c},T=pt().toLowerCase();t&&(p=eh(T)?Pm:t),Yl(T)&&(e=e||km,_.scrollbars="yes");const I=Object.entries(_).reduce((x,[G,$])=>`${x}${G}=${$},`,"");if(dg(T)&&p!=="_self")return Nm(e||"",p),new Sc(null);const D=window.open(e||"",p,I);fe(D,n,"popup-blocked");try{D.focus()}catch{}return new Sc(D)}function Nm(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm="__/auth/handler",Vm="emulator/auth/handler",Om=encodeURIComponent("fac");async function Cc(n,e,t,r,i,a){fe(n.config.authDomain,n,"auth-domain-config-required"),fe(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Ai,eventId:i};if(e instanceof ch){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",Od(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[I,D]of Object.entries({}))c[I]=D}if(e instanceof ys){const I=e.getScopes().filter(D=>D!=="");I.length>0&&(c.scopes=I.join(","))}n.tenantId&&(c.tid=n.tenantId);const p=c;for(const I of Object.keys(p))p[I]===void 0&&delete p[I];const _=await n._getAppCheckToken(),T=_?`#${Om}=${encodeURIComponent(_)}`:"";return`${Mm(n)}?${gs(p).slice(1)}${T}`}function Mm({config:n}){return n.emulator?fu(n,Vm):`https://${n.authDomain}/${xm}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka="webStorageSupport";class Lm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ph,this._completeRedirectFn=am,this._overrideRedirectResult=im}async _openPopup(e,t,r,i){Pn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const a=await Cc(e,t,r,Ba(),i);return Dm(e,a,_u())}async _openRedirect(e,t,r,i){await this._originValidation(e);const a=await Cc(e,t,r,Ba(),i);return jg(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:a}=this.eventManagers[t];return i?Promise.resolve(i):(Pn(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await bm(e),r=new cm(e);return t.register("authEvent",i=>(fe(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ka,{type:ka},i=>{const a=i?.[0]?.[ka];a!==void 0&&t(!!a),Rn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=pm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return sh()||Zl()||gu()}}const Fm=Lm;var Rc="@firebase/auth",Pc="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qm(n){gi(new Sr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:c,authDomain:p}=r.options;fe(c&&!c.includes(":"),"invalid-api-key",{appName:r.name});const _={apiKey:c,authDomain:p,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:oh(n)},T=new vg(r,i,a,_);return bg(T,t),T},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),gi(new Sr("auth-internal",e=>{const t=mu(e.getProvider("auth").getImmediate());return(r=>new Um(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xn(Rc,Pc,jm(n)),Xn(Rc,Pc,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm=300,$m=Ol("authIdTokenMaxAge")||Bm;let kc=null;const Hm=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>$m)return;const i=t?.token;kc!==i&&(kc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function zm(n=ql()){const e=lu(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Ag(n,{popupRedirectResolver:Fm,persistence:[Qg,Lg,ph]}),r=Ol("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const c=Hm(a.toString());Vg(t,c,()=>c(t.currentUser)),xg(t,p=>c(p))}}const i=xl("auth");return i&&Sg(t,`http://${i}`),t}function Wm(){return document.getElementsByTagName("head")?.[0]??document}Tg({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const a=on("internal-error");a.customData=i,t(a)},r.type="text/javascript",r.charset="UTF-8",Wm().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qm("Browser");var Dc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jn,Eh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(l,C){function S(){}S.prototype=C.prototype,l.D=C.prototype,l.prototype=new S,l.prototype.constructor=l,l.C=function(N,V,M){for(var b=Array(arguments.length-2),gt=2;gt<arguments.length;gt++)b[gt-2]=arguments[gt];return C.prototype[V].apply(N,b)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(l,C,S){S||(S=0);var N=Array(16);if(typeof C=="string")for(var V=0;16>V;++V)N[V]=C.charCodeAt(S++)|C.charCodeAt(S++)<<8|C.charCodeAt(S++)<<16|C.charCodeAt(S++)<<24;else for(V=0;16>V;++V)N[V]=C[S++]|C[S++]<<8|C[S++]<<16|C[S++]<<24;C=l.g[0],S=l.g[1],V=l.g[2];var M=l.g[3],b=C+(M^S&(V^M))+N[0]+3614090360&4294967295;C=S+(b<<7&4294967295|b>>>25),b=M+(V^C&(S^V))+N[1]+3905402710&4294967295,M=C+(b<<12&4294967295|b>>>20),b=V+(S^M&(C^S))+N[2]+606105819&4294967295,V=M+(b<<17&4294967295|b>>>15),b=S+(C^V&(M^C))+N[3]+3250441966&4294967295,S=V+(b<<22&4294967295|b>>>10),b=C+(M^S&(V^M))+N[4]+4118548399&4294967295,C=S+(b<<7&4294967295|b>>>25),b=M+(V^C&(S^V))+N[5]+1200080426&4294967295,M=C+(b<<12&4294967295|b>>>20),b=V+(S^M&(C^S))+N[6]+2821735955&4294967295,V=M+(b<<17&4294967295|b>>>15),b=S+(C^V&(M^C))+N[7]+4249261313&4294967295,S=V+(b<<22&4294967295|b>>>10),b=C+(M^S&(V^M))+N[8]+1770035416&4294967295,C=S+(b<<7&4294967295|b>>>25),b=M+(V^C&(S^V))+N[9]+2336552879&4294967295,M=C+(b<<12&4294967295|b>>>20),b=V+(S^M&(C^S))+N[10]+4294925233&4294967295,V=M+(b<<17&4294967295|b>>>15),b=S+(C^V&(M^C))+N[11]+2304563134&4294967295,S=V+(b<<22&4294967295|b>>>10),b=C+(M^S&(V^M))+N[12]+1804603682&4294967295,C=S+(b<<7&4294967295|b>>>25),b=M+(V^C&(S^V))+N[13]+4254626195&4294967295,M=C+(b<<12&4294967295|b>>>20),b=V+(S^M&(C^S))+N[14]+2792965006&4294967295,V=M+(b<<17&4294967295|b>>>15),b=S+(C^V&(M^C))+N[15]+1236535329&4294967295,S=V+(b<<22&4294967295|b>>>10),b=C+(V^M&(S^V))+N[1]+4129170786&4294967295,C=S+(b<<5&4294967295|b>>>27),b=M+(S^V&(C^S))+N[6]+3225465664&4294967295,M=C+(b<<9&4294967295|b>>>23),b=V+(C^S&(M^C))+N[11]+643717713&4294967295,V=M+(b<<14&4294967295|b>>>18),b=S+(M^C&(V^M))+N[0]+3921069994&4294967295,S=V+(b<<20&4294967295|b>>>12),b=C+(V^M&(S^V))+N[5]+3593408605&4294967295,C=S+(b<<5&4294967295|b>>>27),b=M+(S^V&(C^S))+N[10]+38016083&4294967295,M=C+(b<<9&4294967295|b>>>23),b=V+(C^S&(M^C))+N[15]+3634488961&4294967295,V=M+(b<<14&4294967295|b>>>18),b=S+(M^C&(V^M))+N[4]+3889429448&4294967295,S=V+(b<<20&4294967295|b>>>12),b=C+(V^M&(S^V))+N[9]+568446438&4294967295,C=S+(b<<5&4294967295|b>>>27),b=M+(S^V&(C^S))+N[14]+3275163606&4294967295,M=C+(b<<9&4294967295|b>>>23),b=V+(C^S&(M^C))+N[3]+4107603335&4294967295,V=M+(b<<14&4294967295|b>>>18),b=S+(M^C&(V^M))+N[8]+1163531501&4294967295,S=V+(b<<20&4294967295|b>>>12),b=C+(V^M&(S^V))+N[13]+2850285829&4294967295,C=S+(b<<5&4294967295|b>>>27),b=M+(S^V&(C^S))+N[2]+4243563512&4294967295,M=C+(b<<9&4294967295|b>>>23),b=V+(C^S&(M^C))+N[7]+1735328473&4294967295,V=M+(b<<14&4294967295|b>>>18),b=S+(M^C&(V^M))+N[12]+2368359562&4294967295,S=V+(b<<20&4294967295|b>>>12),b=C+(S^V^M)+N[5]+4294588738&4294967295,C=S+(b<<4&4294967295|b>>>28),b=M+(C^S^V)+N[8]+2272392833&4294967295,M=C+(b<<11&4294967295|b>>>21),b=V+(M^C^S)+N[11]+1839030562&4294967295,V=M+(b<<16&4294967295|b>>>16),b=S+(V^M^C)+N[14]+4259657740&4294967295,S=V+(b<<23&4294967295|b>>>9),b=C+(S^V^M)+N[1]+2763975236&4294967295,C=S+(b<<4&4294967295|b>>>28),b=M+(C^S^V)+N[4]+1272893353&4294967295,M=C+(b<<11&4294967295|b>>>21),b=V+(M^C^S)+N[7]+4139469664&4294967295,V=M+(b<<16&4294967295|b>>>16),b=S+(V^M^C)+N[10]+3200236656&4294967295,S=V+(b<<23&4294967295|b>>>9),b=C+(S^V^M)+N[13]+681279174&4294967295,C=S+(b<<4&4294967295|b>>>28),b=M+(C^S^V)+N[0]+3936430074&4294967295,M=C+(b<<11&4294967295|b>>>21),b=V+(M^C^S)+N[3]+3572445317&4294967295,V=M+(b<<16&4294967295|b>>>16),b=S+(V^M^C)+N[6]+76029189&4294967295,S=V+(b<<23&4294967295|b>>>9),b=C+(S^V^M)+N[9]+3654602809&4294967295,C=S+(b<<4&4294967295|b>>>28),b=M+(C^S^V)+N[12]+3873151461&4294967295,M=C+(b<<11&4294967295|b>>>21),b=V+(M^C^S)+N[15]+530742520&4294967295,V=M+(b<<16&4294967295|b>>>16),b=S+(V^M^C)+N[2]+3299628645&4294967295,S=V+(b<<23&4294967295|b>>>9),b=C+(V^(S|~M))+N[0]+4096336452&4294967295,C=S+(b<<6&4294967295|b>>>26),b=M+(S^(C|~V))+N[7]+1126891415&4294967295,M=C+(b<<10&4294967295|b>>>22),b=V+(C^(M|~S))+N[14]+2878612391&4294967295,V=M+(b<<15&4294967295|b>>>17),b=S+(M^(V|~C))+N[5]+4237533241&4294967295,S=V+(b<<21&4294967295|b>>>11),b=C+(V^(S|~M))+N[12]+1700485571&4294967295,C=S+(b<<6&4294967295|b>>>26),b=M+(S^(C|~V))+N[3]+2399980690&4294967295,M=C+(b<<10&4294967295|b>>>22),b=V+(C^(M|~S))+N[10]+4293915773&4294967295,V=M+(b<<15&4294967295|b>>>17),b=S+(M^(V|~C))+N[1]+2240044497&4294967295,S=V+(b<<21&4294967295|b>>>11),b=C+(V^(S|~M))+N[8]+1873313359&4294967295,C=S+(b<<6&4294967295|b>>>26),b=M+(S^(C|~V))+N[15]+4264355552&4294967295,M=C+(b<<10&4294967295|b>>>22),b=V+(C^(M|~S))+N[6]+2734768916&4294967295,V=M+(b<<15&4294967295|b>>>17),b=S+(M^(V|~C))+N[13]+1309151649&4294967295,S=V+(b<<21&4294967295|b>>>11),b=C+(V^(S|~M))+N[4]+4149444226&4294967295,C=S+(b<<6&4294967295|b>>>26),b=M+(S^(C|~V))+N[11]+3174756917&4294967295,M=C+(b<<10&4294967295|b>>>22),b=V+(C^(M|~S))+N[2]+718787259&4294967295,V=M+(b<<15&4294967295|b>>>17),b=S+(M^(V|~C))+N[9]+3951481745&4294967295,l.g[0]=l.g[0]+C&4294967295,l.g[1]=l.g[1]+(V+(b<<21&4294967295|b>>>11))&4294967295,l.g[2]=l.g[2]+V&4294967295,l.g[3]=l.g[3]+M&4294967295}r.prototype.u=function(l,C){C===void 0&&(C=l.length);for(var S=C-this.blockSize,N=this.B,V=this.h,M=0;M<C;){if(V==0)for(;M<=S;)i(this,l,M),M+=this.blockSize;if(typeof l=="string"){for(;M<C;)if(N[V++]=l.charCodeAt(M++),V==this.blockSize){i(this,N),V=0;break}}else for(;M<C;)if(N[V++]=l[M++],V==this.blockSize){i(this,N),V=0;break}}this.h=V,this.o+=C},r.prototype.v=function(){var l=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);l[0]=128;for(var C=1;C<l.length-8;++C)l[C]=0;var S=8*this.o;for(C=l.length-8;C<l.length;++C)l[C]=S&255,S/=256;for(this.u(l),l=Array(16),C=S=0;4>C;++C)for(var N=0;32>N;N+=8)l[S++]=this.g[C]>>>N&255;return l};function a(l,C){var S=p;return Object.prototype.hasOwnProperty.call(S,l)?S[l]:S[l]=C(l)}function c(l,C){this.h=C;for(var S=[],N=!0,V=l.length-1;0<=V;V--){var M=l[V]|0;N&&M==C||(S[V]=M,N=!1)}this.g=S}var p={};function _(l){return-128<=l&&128>l?a(l,function(C){return new c([C|0],0>C?-1:0)}):new c([l|0],0>l?-1:0)}function T(l){if(isNaN(l)||!isFinite(l))return D;if(0>l)return Y(T(-l));for(var C=[],S=1,N=0;l>=S;N++)C[N]=l/S|0,S*=4294967296;return new c(C,0)}function I(l,C){if(l.length==0)throw Error("number format error: empty string");if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(l.charAt(0)=="-")return Y(I(l.substring(1),C));if(0<=l.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=T(Math.pow(C,8)),N=D,V=0;V<l.length;V+=8){var M=Math.min(8,l.length-V),b=parseInt(l.substring(V,V+M),C);8>M?(M=T(Math.pow(C,M)),N=N.j(M).add(T(b))):(N=N.j(S),N=N.add(T(b)))}return N}var D=_(0),x=_(1),G=_(16777216);n=c.prototype,n.m=function(){if(K(this))return-Y(this).m();for(var l=0,C=1,S=0;S<this.g.length;S++){var N=this.i(S);l+=(0<=N?N:4294967296+N)*C,C*=4294967296}return l},n.toString=function(l){if(l=l||10,2>l||36<l)throw Error("radix out of range: "+l);if($(this))return"0";if(K(this))return"-"+Y(this).toString(l);for(var C=T(Math.pow(l,6)),S=this,N="";;){var V=je(S,C).g;S=Z(S,V.j(C));var M=((0<S.g.length?S.g[0]:S.h)>>>0).toString(l);if(S=V,$(S))return M+N;for(;6>M.length;)M="0"+M;N=M+N}},n.i=function(l){return 0>l?0:l<this.g.length?this.g[l]:this.h};function $(l){if(l.h!=0)return!1;for(var C=0;C<l.g.length;C++)if(l.g[C]!=0)return!1;return!0}function K(l){return l.h==-1}n.l=function(l){return l=Z(this,l),K(l)?-1:$(l)?0:1};function Y(l){for(var C=l.g.length,S=[],N=0;N<C;N++)S[N]=~l.g[N];return new c(S,~l.h).add(x)}n.abs=function(){return K(this)?Y(this):this},n.add=function(l){for(var C=Math.max(this.g.length,l.g.length),S=[],N=0,V=0;V<=C;V++){var M=N+(this.i(V)&65535)+(l.i(V)&65535),b=(M>>>16)+(this.i(V)>>>16)+(l.i(V)>>>16);N=b>>>16,M&=65535,b&=65535,S[V]=b<<16|M}return new c(S,S[S.length-1]&-2147483648?-1:0)};function Z(l,C){return l.add(Y(C))}n.j=function(l){if($(this)||$(l))return D;if(K(this))return K(l)?Y(this).j(Y(l)):Y(Y(this).j(l));if(K(l))return Y(this.j(Y(l)));if(0>this.l(G)&&0>l.l(G))return T(this.m()*l.m());for(var C=this.g.length+l.g.length,S=[],N=0;N<2*C;N++)S[N]=0;for(N=0;N<this.g.length;N++)for(var V=0;V<l.g.length;V++){var M=this.i(N)>>>16,b=this.i(N)&65535,gt=l.i(V)>>>16,ur=l.i(V)&65535;S[2*N+2*V]+=b*ur,ve(S,2*N+2*V),S[2*N+2*V+1]+=M*ur,ve(S,2*N+2*V+1),S[2*N+2*V+1]+=b*gt,ve(S,2*N+2*V+1),S[2*N+2*V+2]+=M*gt,ve(S,2*N+2*V+2)}for(N=0;N<C;N++)S[N]=S[2*N+1]<<16|S[2*N];for(N=C;N<2*C;N++)S[N]=0;return new c(S,0)};function ve(l,C){for(;(l[C]&65535)!=l[C];)l[C+1]+=l[C]>>>16,l[C]&=65535,C++}function Te(l,C){this.g=l,this.h=C}function je(l,C){if($(C))throw Error("division by zero");if($(l))return new Te(D,D);if(K(l))return C=je(Y(l),C),new Te(Y(C.g),Y(C.h));if(K(C))return C=je(l,Y(C)),new Te(Y(C.g),C.h);if(30<l.g.length){if(K(l)||K(C))throw Error("slowDivide_ only works with positive integers.");for(var S=x,N=C;0>=N.l(l);)S=Ct(S),N=Ct(N);var V=et(S,1),M=et(N,1);for(N=et(N,2),S=et(S,2);!$(N);){var b=M.add(N);0>=b.l(l)&&(V=V.add(S),M=b),N=et(N,1),S=et(S,1)}return C=Z(l,V.j(C)),new Te(V,C)}for(V=D;0<=l.l(C);){for(S=Math.max(1,Math.floor(l.m()/C.m())),N=Math.ceil(Math.log(S)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),M=T(S),b=M.j(C);K(b)||0<b.l(l);)S-=N,M=T(S),b=M.j(C);$(M)&&(M=x),V=V.add(M),l=Z(l,b)}return new Te(V,l)}n.A=function(l){return je(this,l).h},n.and=function(l){for(var C=Math.max(this.g.length,l.g.length),S=[],N=0;N<C;N++)S[N]=this.i(N)&l.i(N);return new c(S,this.h&l.h)},n.or=function(l){for(var C=Math.max(this.g.length,l.g.length),S=[],N=0;N<C;N++)S[N]=this.i(N)|l.i(N);return new c(S,this.h|l.h)},n.xor=function(l){for(var C=Math.max(this.g.length,l.g.length),S=[],N=0;N<C;N++)S[N]=this.i(N)^l.i(N);return new c(S,this.h^l.h)};function Ct(l){for(var C=l.g.length+1,S=[],N=0;N<C;N++)S[N]=l.i(N)<<1|l.i(N-1)>>>31;return new c(S,l.h)}function et(l,C){var S=C>>5;C%=32;for(var N=l.g.length-S,V=[],M=0;M<N;M++)V[M]=0<C?l.i(M+S)>>>C|l.i(M+S+1)<<32-C:l.i(M+S);return new c(V,l.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Eh=r,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=T,c.fromString=I,Jn=c}).apply(typeof Dc<"u"?Dc:typeof self<"u"?self:typeof window<"u"?window:{});var Zs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wh,Xi,Ih,lo,za,Ah,bh,Sh;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,f,g){return o==Array.prototype||o==Object.prototype||(o[f]=g.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zs=="object"&&Zs];for(var f=0;f<o.length;++f){var g=o[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=t(this);function i(o,f){if(f)e:{var g=r;o=o.split(".");for(var E=0;E<o.length-1;E++){var O=o[E];if(!(O in g))break e;g=g[O]}o=o[o.length-1],E=g[o],f=f(E),f!=E&&f!=null&&e(g,o,{configurable:!0,writable:!0,value:f})}}function a(o,f){o instanceof String&&(o+="");var g=0,E=!1,O={next:function(){if(!E&&g<o.length){var U=g++;return{value:f(U,o[U]),done:!1}}return E=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(o){return o||function(){return a(this,function(f,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},p=this||self;function _(o){var f=typeof o;return f=f!="object"?f:o?Array.isArray(o)?"array":f:"null",f=="array"||f=="object"&&typeof o.length=="number"}function T(o){var f=typeof o;return f=="object"&&o!=null||f=="function"}function I(o,f,g){return o.call.apply(o.bind,arguments)}function D(o,f,g){if(!o)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,E),o.apply(f,O)}}return function(){return o.apply(f,arguments)}}function x(o,f,g){return x=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?I:D,x.apply(null,arguments)}function G(o,f){var g=Array.prototype.slice.call(arguments,1);return function(){var E=g.slice();return E.push.apply(E,arguments),o.apply(this,E)}}function $(o,f){function g(){}g.prototype=f.prototype,o.aa=f.prototype,o.prototype=new g,o.prototype.constructor=o,o.Qb=function(E,O,U){for(var X=Array(arguments.length-2),De=2;De<arguments.length;De++)X[De-2]=arguments[De];return f.prototype[O].apply(E,X)}}function K(o){const f=o.length;if(0<f){const g=Array(f);for(let E=0;E<f;E++)g[E]=o[E];return g}return[]}function Y(o,f){for(let g=1;g<arguments.length;g++){const E=arguments[g];if(_(E)){const O=o.length||0,U=E.length||0;o.length=O+U;for(let X=0;X<U;X++)o[O+X]=E[X]}else o.push(E)}}class Z{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function ve(o){return/^[\s\xa0]*$/.test(o)}function Te(){var o=p.navigator;return o&&(o=o.userAgent)?o:""}function je(o){return je[" "](o),o}je[" "]=function(){};var Ct=Te().indexOf("Gecko")!=-1&&!(Te().toLowerCase().indexOf("webkit")!=-1&&Te().indexOf("Edge")==-1)&&!(Te().indexOf("Trident")!=-1||Te().indexOf("MSIE")!=-1)&&Te().indexOf("Edge")==-1;function et(o,f,g){for(const E in o)f.call(g,o[E],E,o)}function l(o,f){for(const g in o)f.call(void 0,o[g],g,o)}function C(o){const f={};for(const g in o)f[g]=o[g];return f}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(o,f){let g,E;for(let O=1;O<arguments.length;O++){E=arguments[O];for(g in E)o[g]=E[g];for(let U=0;U<S.length;U++)g=S[U],Object.prototype.hasOwnProperty.call(E,g)&&(o[g]=E[g])}}function V(o){var f=1;o=o.split(":");const g=[];for(;0<f&&o.length;)g.push(o.shift()),f--;return o.length&&g.push(o.join(":")),g}function M(o){p.setTimeout(()=>{throw o},0)}function b(){var o=Gt;let f=null;return o.g&&(f=o.g,o.g=o.g.next,o.g||(o.h=null),f.next=null),f}class gt{constructor(){this.h=this.g=null}add(f,g){const E=ur.get();E.set(f,g),this.h?this.h.next=E:this.g=E,this.h=E}}var ur=new Z(()=>new sa,o=>o.reset());class sa{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let mt,dn=!1,Gt=new gt,Di=()=>{const o=p.Promise.resolve(void 0);mt=()=>{o.then(Cs)}};var Cs=()=>{for(var o;o=b();){try{o.h.call(o.g)}catch(g){M(g)}var f=ur;f.j(o),100>f.h&&(f.h++,o.next=f.g,f.g=o)}dn=!1};function qt(){this.s=this.s,this.C=this.C}qt.prototype.s=!1,qt.prototype.ma=function(){this.s||(this.s=!0,this.N())},qt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ze(o,f){this.type=o,this.g=this.target=f,this.defaultPrevented=!1}ze.prototype.h=function(){this.defaultPrevented=!0};var Rs=(function(){if(!p.addEventListener||!Object.defineProperty)return!1;var o=!1,f=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const g=()=>{};p.addEventListener("test",g,f),p.removeEventListener("test",g,f)}catch{}return o})();function cr(o,f){if(ze.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var g=this.type=o.type,E=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=f,f=o.relatedTarget){if(Ct){e:{try{je(f.nodeName);var O=!0;break e}catch{}O=!1}O||(f=null)}}else g=="mouseover"?f=o.fromElement:g=="mouseout"&&(f=o.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:oa[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&cr.aa.h.call(this)}}$(cr,ze);var oa={2:"touch",3:"pen",4:"mouse"};cr.prototype.h=function(){cr.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var xr="closure_listenable_"+(1e6*Math.random()|0),aa=0;function Ps(o,f,g,E,O){this.listener=o,this.proxy=null,this.src=f,this.type=g,this.capture=!!E,this.ha=O,this.key=++aa,this.da=this.fa=!1}function yt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Vr(o){this.src=o,this.g={},this.h=0}Vr.prototype.add=function(o,f,g,E,O){var U=o.toString();o=this.g[U],o||(o=this.g[U]=[],this.h++);var X=Vn(o,f,E,O);return-1<X?(f=o[X],g||(f.fa=!1)):(f=new Ps(f,this.src,U,!!E,O),f.fa=g,o.push(f)),f};function Kt(o,f){var g=f.type;if(g in o.g){var E=o.g[g],O=Array.prototype.indexOf.call(E,f,void 0),U;(U=0<=O)&&Array.prototype.splice.call(E,O,1),U&&(yt(f),o.g[g].length==0&&(delete o.g[g],o.h--))}}function Vn(o,f,g,E){for(var O=0;O<o.length;++O){var U=o[O];if(!U.da&&U.listener==f&&U.capture==!!g&&U.ha==E)return O}return-1}var Or="closure_lm_"+(1e6*Math.random()|0),Ni={};function Mr(o,f,g,E,O){if(Array.isArray(f)){for(var U=0;U<f.length;U++)Mr(o,f[U],g,E,O);return null}return g=ie(g),o&&o[xr]?o.K(f,g,T(E)?!!E.capture:!1,O):Lr(o,f,g,!1,E,O)}function Lr(o,f,g,E,O,U){if(!f)throw Error("Invalid event type");var X=T(O)?!!O.capture:!!O,De=pn(o);if(De||(o[Or]=De=new Vr(o)),g=De.add(f,g,E,X,U),g.proxy)return g;if(E=Bt(),g.proxy=E,E.src=o,E.listener=g,o.addEventListener)Rs||(O=X),O===void 0&&(O=!1),o.addEventListener(f.toString(),E,O);else if(o.attachEvent)o.attachEvent(Ds(f.toString()),E);else if(o.addListener&&o.removeListener)o.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return g}function Bt(){function o(g){return f.call(o.src,o.listener,g)}const f=Nt;return o}function ks(o,f,g,E,O){if(Array.isArray(f))for(var U=0;U<f.length;U++)ks(o,f[U],g,E,O);else E=T(E)?!!E.capture:!!E,g=ie(g),o&&o[xr]?(o=o.i,f=String(f).toString(),f in o.g&&(U=o.g[f],g=Vn(U,g,E,O),-1<g&&(yt(U[g]),Array.prototype.splice.call(U,g,1),U.length==0&&(delete o.g[f],o.h--)))):o&&(o=pn(o))&&(f=o.g[f.toString()],o=-1,f&&(o=Vn(f,g,E,O)),(g=-1<o?f[o]:null)&&xi(g))}function xi(o){if(typeof o!="number"&&o&&!o.da){var f=o.src;if(f&&f[xr])Kt(f.i,o);else{var g=o.type,E=o.proxy;f.removeEventListener?f.removeEventListener(g,E,o.capture):f.detachEvent?f.detachEvent(Ds(g),E):f.addListener&&f.removeListener&&f.removeListener(E),(g=pn(f))?(Kt(g,o),g.h==0&&(g.src=null,f[Or]=null)):yt(o)}}}function Ds(o){return o in Ni?Ni[o]:Ni[o]="on"+o}function Nt(o,f){if(o.da)o=!0;else{f=new cr(f,this);var g=o.listener,E=o.ha||o.src;o.fa&&xi(o),o=g.call(E,f)}return o}function pn(o){return o=o[Or],o instanceof Vr?o:null}var gn="__closure_events_fn_"+(1e9*Math.random()>>>0);function ie(o){return typeof o=="function"?o:(o[gn]||(o[gn]=function(f){return o.handleEvent(f)}),o[gn])}function ke(){qt.call(this),this.i=new Vr(this),this.M=this,this.F=null}$(ke,qt),ke.prototype[xr]=!0,ke.prototype.removeEventListener=function(o,f,g,E){ks(this,o,f,g,E)};function st(o,f){var g,E=o.F;if(E)for(g=[];E;E=E.F)g.push(E);if(o=o.M,E=f.type||f,typeof f=="string")f=new ze(f,o);else if(f instanceof ze)f.target=f.target||o;else{var O=f;f=new ze(E,o),N(f,O)}if(O=!0,g)for(var U=g.length-1;0<=U;U--){var X=f.g=g[U];O=Fr(X,E,!0,f)&&O}if(X=f.g=o,O=Fr(X,E,!0,f)&&O,O=Fr(X,E,!1,f)&&O,g)for(U=0;U<g.length;U++)X=f.g=g[U],O=Fr(X,E,!1,f)&&O}ke.prototype.N=function(){if(ke.aa.N.call(this),this.i){var o=this.i,f;for(f in o.g){for(var g=o.g[f],E=0;E<g.length;E++)yt(g[E]);delete o.g[f],o.h--}}this.F=null},ke.prototype.K=function(o,f,g,E){return this.i.add(String(o),f,!1,g,E)},ke.prototype.L=function(o,f,g,E){return this.i.add(String(o),f,!0,g,E)};function Fr(o,f,g,E){if(f=o.i.g[String(f)],!f)return!0;f=f.concat();for(var O=!0,U=0;U<f.length;++U){var X=f[U];if(X&&!X.da&&X.capture==g){var De=X.listener,Ve=X.ha||X.src;X.fa&&Kt(o.i,X),O=De.call(Ve,E)!==!1&&O}}return O&&!E.defaultPrevented}function Ns(o,f,g){if(typeof o=="function")g&&(o=x(o,g));else if(o&&typeof o.handleEvent=="function")o=x(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:p.setTimeout(o,f||0)}function Vi(o){o.g=Ns(()=>{o.g=null,o.i&&(o.i=!1,Vi(o))},o.l);const f=o.h;o.h=null,o.m.apply(null,f)}class xs extends qt{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Vi(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $t(o){qt.call(this),this.h=o,this.g={}}$($t,qt);var xt=[];function Qt(o){et(o.g,function(f,g){this.g.hasOwnProperty(g)&&xi(f)},o),o.g={}}$t.prototype.N=function(){$t.aa.N.call(this),Qt(this)},$t.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xt=p.JSON.stringify,ua=p.JSON.parse,Ur=class{stringify(o){return p.JSON.stringify(o,void 0)}parse(o){return p.JSON.parse(o,void 0)}};function jr(){}jr.prototype.h=null;function Oi(o){return o.h||(o.h=o.i())}function Vs(){}var Vt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function mn(){ze.call(this,"d")}$(mn,ze);function qr(){ze.call(this,"c")}$(qr,ze);var Jt={},_t=null;function Je(){return _t=_t||new ke}Jt.La="serverreachability";function Br(o){ze.call(this,Jt.La,o)}$(Br,ze);function lr(o){const f=Je();st(f,new Br(f))}Jt.STAT_EVENT="statevent";function Mi(o,f){ze.call(this,Jt.STAT_EVENT,o),this.stat=f}$(Mi,ze);function tt(o){const f=Je();st(f,new Mi(f,o))}Jt.Ma="timingevent";function yn(o,f){ze.call(this,Jt.Ma,o),this.size=f}$(yn,ze);function Ot(o,f){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){o()},f)}function _n(){this.g=!0}_n.prototype.xa=function(){this.g=!1};function $r(o,f,g,E,O,U){o.info(function(){if(o.g)if(U)for(var X="",De=U.split("&"),Ve=0;Ve<De.length;Ve++){var me=De[Ve].split("=");if(1<me.length){var nt=me[0];me=me[1];var rt=nt.split("_");X=2<=rt.length&&rt[1]=="type"?X+(nt+"="+me+"&"):X+(nt+"=redacted&")}}else X=null;else X=U;return"XMLHTTP REQ ("+E+") [attempt "+O+"]: "+f+`
`+g+`
`+X})}function ca(o,f,g,E,O,U,X){o.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+O+"]: "+f+`
`+g+`
`+U+" "+X})}function On(o,f,g,E){o.info(function(){return"XMLHTTP TEXT ("+f+"): "+Os(o,g)+(E?" "+E:"")})}function la(o,f){o.info(function(){return"TIMEOUT: "+f})}_n.prototype.info=function(){};function Os(o,f){if(!o.g)return f;if(!f)return null;try{var g=JSON.parse(f);if(g){for(o=0;o<g.length;o++)if(Array.isArray(g[o])){var E=g[o];if(!(2>E.length)){var O=E[1];if(Array.isArray(O)&&!(1>O.length)){var U=O[0];if(U!="noop"&&U!="stop"&&U!="close")for(var X=1;X<O.length;X++)O[X]=""}}}}return Xt(g)}catch{return f}}var Hr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ms={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},zr;function Wr(){}$(Wr,jr),Wr.prototype.g=function(){return new XMLHttpRequest},Wr.prototype.i=function(){return{}},zr=new Wr;function vt(o,f,g,E){this.j=o,this.i=f,this.l=g,this.R=E||1,this.U=new $t(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Li}function Li(){this.i=null,this.g="",this.h=!1}var Gr={},hr={};function Mn(o,f,g){o.L=1,o.v=Yt(Lt(f)),o.m=g,o.P=!0,Fi(o,null)}function Fi(o,f){o.F=Date.now(),dr(o),o.A=Lt(o.v);var g=o.A,E=o.R;Array.isArray(E)||(E=[String(E)]),Hi(g.i,"t",E),o.C=0,g=o.j.J,o.h=new Li,o.g=Pt(o.j,g?f:null,!o.m),0<o.O&&(o.M=new xs(x(o.Y,o,o.g),o.O)),f=o.U,g=o.g,E=o.ca;var O="readystatechange";Array.isArray(O)||(O&&(xt[0]=O.toString()),O=xt);for(var U=0;U<O.length;U++){var X=Mr(g,O[U],E||f.handleEvent,!1,f.h||f);if(!X)break;f.g[X.key]=X}f=o.H?C(o.H):{},o.m?(o.u||(o.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,f)):(o.u="GET",o.g.ea(o.A,o.u,null,f)),lr(),$r(o.i,o.u,o.A,o.l,o.R,o.m)}vt.prototype.ca=function(o){o=o.target;const f=this.M;f&&Rt(o)==3?f.j():this.Y(o)},vt.prototype.Y=function(o){try{if(o==this.g)e:{const rt=Rt(this.g);var f=this.g.Ba();const jn=this.g.Z();if(!(3>rt)&&(rt!=3||this.g&&(this.h.h||this.g.oa()||Ks(this.g)))){this.J||rt!=4||f==7||(f==8||0>=jn?lr(3):lr(2)),Kr(this);var g=this.g.Z();this.X=g;t:if(Ls(this)){var E=Ks(this.g);o="";var O=E.length,U=Rt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){vn(this),Ln(this);var X="";break t}this.h.i=new p.TextDecoder}for(f=0;f<O;f++)this.h.h=!0,o+=this.h.i.decode(E[f],{stream:!(U&&f==O-1)});E.length=0,this.h.g+=o,this.C=0,X=this.h.g}else X=this.g.oa();if(this.o=g==200,ca(this.i,this.u,this.A,this.l,this.R,rt,g),this.o){if(this.T&&!this.K){t:{if(this.g){var De,Ve=this.g;if((De=Ve.g?Ve.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ve(De)){var me=De;break t}}me=null}if(g=me)On(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,pr(this,g);else{this.o=!1,this.s=3,tt(12),vn(this),Ln(this);break e}}if(this.P){g=!0;let _e;for(;!this.J&&this.C<X.length;)if(_e=fr(this,X),_e==hr){rt==4&&(this.s=4,tt(14),g=!1),On(this.i,this.l,null,"[Incomplete Response]");break}else if(_e==Gr){this.s=4,tt(15),On(this.i,this.l,X,"[Invalid Chunk]"),g=!1;break}else On(this.i,this.l,_e,null),pr(this,_e);if(Ls(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),rt!=4||X.length!=0||this.h.h||(this.s=1,tt(16),g=!1),this.o=this.o&&g,!g)On(this.i,this.l,X,"[Invalid Chunked Response]"),vn(this),Ln(this);else if(0<X.length&&!this.W){this.W=!0;var nt=this.j;nt.g==this&&nt.ba&&!nt.M&&(nt.j.info("Great, no buffering proxy detected. Bytes received: "+X.length),B(nt),nt.M=!0,tt(11))}}else On(this.i,this.l,X,null),pr(this,X);rt==4&&vn(this),this.o&&!this.J&&(rt==4?ue(this.j,this):(this.o=!1,dr(this)))}else _a(this.g),g==400&&0<X.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),vn(this),Ln(this)}}}catch{}finally{}};function Ls(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function fr(o,f){var g=o.C,E=f.indexOf(`
`,g);return E==-1?hr:(g=Number(f.substring(g,E)),isNaN(g)?Gr:(E+=1,E+g>f.length?hr:(f=f.slice(E,E+g),o.C=E+g,f)))}vt.prototype.cancel=function(){this.J=!0,vn(this)};function dr(o){o.S=Date.now()+o.I,Ui(o,o.I)}function Ui(o,f){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Ot(x(o.ba,o),f)}function Kr(o){o.B&&(p.clearTimeout(o.B),o.B=null)}vt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(la(this.i,this.A),this.L!=2&&(lr(),tt(17)),vn(this),this.s=2,Ln(this)):Ui(this,this.S-o)};function Ln(o){o.j.G==0||o.J||ue(o.j,o)}function vn(o){Kr(o);var f=o.M;f&&typeof f.ma=="function"&&f.ma(),o.M=null,Qt(o.U),o.g&&(f=o.g,o.g=null,f.abort(),f.ma())}function pr(o,f){try{var g=o.j;if(g.G!=0&&(g.g==o||gr(g.h,o))){if(!o.K&&gr(g.h,o)&&g.G==3){try{var E=g.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var O=E;if(O[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<o.F)Q(g),h(g);else break e;q(g),tt(18)}}else g.za=O[1],0<g.za-g.T&&37500>O[2]&&g.F&&g.v==0&&!g.C&&(g.C=Ot(x(g.Za,g),6e3));if(1>=qi(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else le(g,11)}else if((o.K||g.g==o)&&Q(g),!ve(f))for(O=g.Da.g.parse(f),f=0;f<O.length;f++){let me=O[f];if(g.T=me[0],me=me[1],g.G==2)if(me[0]=="c"){g.K=me[1],g.ia=me[2];const nt=me[3];nt!=null&&(g.la=nt,g.j.info("VER="+g.la));const rt=me[4];rt!=null&&(g.Aa=rt,g.j.info("SVER="+g.Aa));const jn=me[5];jn!=null&&typeof jn=="number"&&0<jn&&(E=1.5*jn,g.L=E,g.j.info("backChannelRequestTimeoutMs_="+E)),E=g;const _e=o.g;if(_e){const An=_e.g?_e.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(An){var U=E.h;U.g||An.indexOf("spdy")==-1&&An.indexOf("quic")==-1&&An.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(Qr(U,U.h),U.h=null))}if(E.D){const Tt=_e.g?_e.g.getResponseHeader("X-HTTP-Session-Id"):null;Tt&&(E.ya=Tt,xe(E.I,E.D,Tt))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-o.F,g.j.info("Handshake RTT: "+g.R+"ms")),E=g;var X=o;if(E.qa=Be(E,E.J?E.ia:null,E.W),X.K){ot(E.h,X);var De=X,Ve=E.L;Ve&&(De.I=Ve),De.B&&(Kr(De),dr(De)),E.g=X}else k(E);0<g.i.length&&m(g)}else me[0]!="stop"&&me[0]!="close"||le(g,7);else g.G==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?le(g,7):u(g):me[0]!="noop"&&g.l&&g.l.ta(me),g.v=0)}}lr(4)}catch{}}var ha=class{constructor(o,f){this.g=o,this.map=f}};function Fs(o){this.l=o||10,p.PerformanceNavigationTiming?(o=p.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ji(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function qi(o){return o.h?1:o.g?o.g.size:0}function gr(o,f){return o.h?o.h==f:o.g?o.g.has(f):!1}function Qr(o,f){o.g?o.g.add(f):o.h=f}function ot(o,f){o.h&&o.h==f?o.h=null:o.g&&o.g.has(f)&&o.g.delete(f)}Fs.prototype.cancel=function(){if(this.i=Tn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Tn(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let f=o.i;for(const g of o.g.values())f=f.concat(g.D);return f}return K(o.i)}function Xr(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(_(o)){for(var f=[],g=o.length,E=0;E<g;E++)f.push(o[E]);return f}f=[],g=0;for(E in o)f[g++]=o[E];return f}function fa(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(_(o)||typeof o=="string"){var f=[];o=o.length;for(var g=0;g<o;g++)f.push(g);return f}f=[],g=0;for(const E in o)f[g++]=E;return f}}}function Us(o,f){if(o.forEach&&typeof o.forEach=="function")o.forEach(f,void 0);else if(_(o)||typeof o=="string")Array.prototype.forEach.call(o,f,void 0);else for(var g=fa(o),E=Xr(o),O=E.length,U=0;U<O;U++)f.call(void 0,E[U],g&&g[U],o)}var Jr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function js(o,f){if(o){o=o.split("&");for(var g=0;g<o.length;g++){var E=o[g].indexOf("="),O=null;if(0<=E){var U=o[g].substring(0,E);O=o[g].substring(E+1)}else U=o[g];f(U,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Mt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Mt){this.h=o.h,Yr(this,o.j),this.o=o.o,this.g=o.g,Zr(this,o.s),this.l=o.l;var f=o.i,g=new wn;g.i=f.i,f.g&&(g.g=new Map(f.g),g.h=f.h),wt(this,g),this.m=o.m}else o&&(f=String(o).match(Jr))?(this.h=!1,Yr(this,f[1]||"",!0),this.o=mr(f[2]||""),this.g=mr(f[3]||"",!0),Zr(this,f[4]),this.l=mr(f[5]||"",!0),wt(this,f[6]||"",!0),this.m=mr(f[7]||"")):(this.h=!1,this.i=new wn(null,this.h))}Mt.prototype.toString=function(){var o=[],f=this.j;f&&o.push(yr(f,Zt,!0),":");var g=this.g;return(g||f=="file")&&(o.push("//"),(f=this.o)&&o.push(yr(f,Zt,!0),"@"),o.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&o.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&o.push("/"),o.push(yr(g,g.charAt(0)=="/"?da:Bi,!0))),(g=this.i.toString())&&o.push("?",g),(g=this.m)&&o.push("#",yr(g,qs)),o.join("")};function Lt(o){return new Mt(o)}function Yr(o,f,g){o.j=g?mr(f,!0):f,o.j&&(o.j=o.j.replace(/:$/,""))}function Zr(o,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);o.s=f}else o.s=null}function wt(o,f,g){f instanceof wn?(o.i=f,pa(o.i,o.h)):(g||(f=yr(f,_r)),o.i=new wn(f,o.h))}function xe(o,f,g){o.i.set(f,g)}function Yt(o){return xe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function mr(o,f){return o?f?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function yr(o,f,g){return typeof o=="string"?(o=encodeURI(o).replace(f,En),g&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function En(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Zt=/[#\/\?@]/g,Bi=/[#\?:]/g,da=/[#\?]/g,_r=/[#\?@]/g,qs=/#/g;function wn(o,f){this.h=this.g=null,this.i=o||null,this.j=!!f}function Ht(o){o.g||(o.g=new Map,o.h=0,o.i&&js(o.i,function(f,g){o.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}n=wn.prototype,n.add=function(o,f){Ht(this),this.i=null,o=Fn(this,o);var g=this.g.get(o);return g||this.g.set(o,g=[]),g.push(f),this.h+=1,this};function $i(o,f){Ht(o),f=Fn(o,f),o.g.has(f)&&(o.i=null,o.h-=o.g.get(f).length,o.g.delete(f))}function Bs(o,f){return Ht(o),f=Fn(o,f),o.g.has(f)}n.forEach=function(o,f){Ht(this),this.g.forEach(function(g,E){g.forEach(function(O){o.call(f,O,E,this)},this)},this)},n.na=function(){Ht(this);const o=Array.from(this.g.values()),f=Array.from(this.g.keys()),g=[];for(let E=0;E<f.length;E++){const O=o[E];for(let U=0;U<O.length;U++)g.push(f[E])}return g},n.V=function(o){Ht(this);let f=[];if(typeof o=="string")Bs(this,o)&&(f=f.concat(this.g.get(Fn(this,o))));else{o=Array.from(this.g.values());for(let g=0;g<o.length;g++)f=f.concat(o[g])}return f},n.set=function(o,f){return Ht(this),this.i=null,o=Fn(this,o),Bs(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[f]),this.h+=1,this},n.get=function(o,f){return o?(o=this.V(o),0<o.length?String(o[0]):f):f};function Hi(o,f,g){$i(o,f),0<g.length&&(o.i=null,o.g.set(Fn(o,f),K(g)),o.h+=g.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],f=Array.from(this.g.keys());for(var g=0;g<f.length;g++){var E=f[g];const U=encodeURIComponent(String(E)),X=this.V(E);for(E=0;E<X.length;E++){var O=U;X[E]!==""&&(O+="="+encodeURIComponent(String(X[E]))),o.push(O)}}return this.i=o.join("&")};function Fn(o,f){return f=String(f),o.j&&(f=f.toLowerCase()),f}function pa(o,f){f&&!o.j&&(Ht(o),o.i=null,o.g.forEach(function(g,E){var O=E.toLowerCase();E!=O&&($i(this,E),Hi(this,O,g))},o)),o.j=f}function zi(o,f){const g=new _n;if(p.Image){const E=new Image;E.onload=G(en,g,"TestLoadImage: loaded",!0,f,E),E.onerror=G(en,g,"TestLoadImage: error",!1,f,E),E.onabort=G(en,g,"TestLoadImage: abort",!1,f,E),E.ontimeout=G(en,g,"TestLoadImage: timeout",!1,f,E),p.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=o}else f(!1)}function ga(o,f){const g=new _n,E=new AbortController,O=setTimeout(()=>{E.abort(),en(g,"TestPingServer: timeout",!1,f)},1e4);fetch(o,{signal:E.signal}).then(U=>{clearTimeout(O),U.ok?en(g,"TestPingServer: ok",!0,f):en(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(O),en(g,"TestPingServer: error",!1,f)})}function en(o,f,g,E,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),E(g)}catch{}}function ma(){this.g=new Ur}function ya(o,f,g){const E=g||"";try{Us(o,function(O,U){let X=O;T(O)&&(X=Xt(O)),f.push(E+U+"="+encodeURIComponent(X))})}catch(O){throw f.push(E+"type="+encodeURIComponent("_badmap")),O}}function ei(o){this.l=o.Ub||null,this.j=o.eb||!1}$(ei,jr),ei.prototype.g=function(){return new ti(this.l,this.j)},ei.prototype.i=(function(o){return function(){return o}})({});function ti(o,f){ke.call(this),this.D=o,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}$(ti,ke),n=ti.prototype,n.open=function(o,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=f,this.readyState=1,In(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(f.body=o),(this.D||p).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Un(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,In(this)),this.g&&(this.readyState=3,In(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;$s(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function $s(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var f=o.value?o.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!o.done}))&&(this.response=this.responseText+=f)}o.done?Un(this):In(this),this.readyState==3&&$s(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Un(this))},n.Qa=function(o){this.g&&(this.response=o,Un(this))},n.ga=function(){this.g&&Un(this)};function Un(o){o.readyState=4,o.l=null,o.j=null,o.v=null,In(o)}n.setRequestHeader=function(o,f){this.u.append(o,f)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,o.push(g[0]+": "+g[1]),g=f.next();return o.join(`\r
`)};function In(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ti.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Wi(o){let f="";return et(o,function(g,E){f+=E,f+=":",f+=g,f+=`\r
`}),f}function vr(o,f,g){e:{for(E in g){var E=!1;break e}E=!0}E||(g=Wi(g),typeof o=="string"?g!=null&&encodeURIComponent(String(g)):xe(o,f,g))}function Le(o){ke.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}$(Le,ke);var Hs=/^https?$/i,Gi=["POST","PUT"];n=Le.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,f,g,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);f=f?f.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():zr.g(),this.v=this.o?Oi(this.o):Oi(zr),this.g.onreadystatechange=x(this.Ea,this);try{this.B=!0,this.g.open(f,String(o),!0),this.B=!1}catch(U){zs(this,U);return}if(o=g||"",g=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var O in E)g.set(O,E[O]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const U of E.keys())g.set(U,E.get(U));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(g.keys()).find(U=>U.toLowerCase()=="content-type"),O=p.FormData&&o instanceof p.FormData,!(0<=Array.prototype.indexOf.call(Gi,f,void 0))||E||O||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,X]of g)this.g.setRequestHeader(U,X);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ki(this),this.u=!0,this.g.send(o),this.u=!1}catch(U){zs(this,U)}};function zs(o,f){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=f,o.m=5,Ws(o),tn(o)}function Ws(o){o.A||(o.A=!0,st(o,"complete"),st(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,st(this,"complete"),st(this,"abort"),tn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tn(this,!0)),Le.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Gs(this):this.bb())},n.bb=function(){Gs(this)};function Gs(o){if(o.h&&typeof c<"u"&&(!o.v[1]||Rt(o)!=4||o.Z()!=2)){if(o.u&&Rt(o)==4)Ns(o.Ea,0,o);else if(st(o,"readystatechange"),Rt(o)==4){o.h=!1;try{const X=o.Z();e:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var E;if(E=X===0){var O=String(o.D).match(Jr)[1]||null;!O&&p.self&&p.self.location&&(O=p.self.location.protocol.slice(0,-1)),E=!Hs.test(O?O.toLowerCase():"")}g=E}if(g)st(o,"complete"),st(o,"success");else{o.m=6;try{var U=2<Rt(o)?o.g.statusText:""}catch{U=""}o.l=U+" ["+o.Z()+"]",Ws(o)}}finally{tn(o)}}}}function tn(o,f){if(o.g){Ki(o);const g=o.g,E=o.v[0]?()=>{}:null;o.g=null,o.v=null,f||st(o,"ready");try{g.onreadystatechange=E}catch{}}}function Ki(o){o.I&&(p.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Rt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Rt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var f=this.g.responseText;return o&&f.indexOf(o)==0&&(f=f.substring(o.length)),ua(f)}};function Ks(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function _a(o){const f={};o=(o.g&&2<=Rt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<o.length;E++){if(ve(o[E]))continue;var g=V(o[E]);const O=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const U=f[O]||[];f[O]=U,U.push(g)}l(f,function(E){return E.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Tr(o,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[o]||f}function s(o){this.Aa=0,this.i=[],this.j=new _n,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Tr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Tr("baseRetryDelayMs",5e3,o),this.cb=Tr("retryDelaySeedMs",1e4,o),this.Wa=Tr("forwardChannelMaxRetries",2,o),this.wa=Tr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Fs(o&&o.concurrentRequestLimit),this.Da=new ma,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=s.prototype,n.la=8,n.G=1,n.connect=function(o,f,g,E){tt(0),this.W=o,this.H=f||{},g&&E!==void 0&&(this.H.OSID=g,this.H.OAID=E),this.F=this.X,this.I=Be(this,null,this.W),m(this)};function u(o){if(d(o),o.G==3){var f=o.U++,g=Lt(o.I);if(xe(g,"SID",o.K),xe(g,"RID",f),xe(g,"TYPE","terminate"),R(o,g),f=new vt(o,o.j,f),f.L=2,f.v=Yt(Lt(g)),g=!1,p.navigator&&p.navigator.sendBeacon)try{g=p.navigator.sendBeacon(f.v.toString(),"")}catch{}!g&&p.Image&&(new Image().src=f.v,g=!0),g||(f.g=Pt(f.j,null),f.g.ea(f.v)),f.F=Date.now(),dr(f)}We(o)}function h(o){o.g&&(B(o),o.g.cancel(),o.g=null)}function d(o){h(o),o.u&&(p.clearTimeout(o.u),o.u=null),Q(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&p.clearTimeout(o.s),o.s=null)}function m(o){if(!ji(o.h)&&!o.s){o.s=!0;var f=o.Ga;mt||Di(),dn||(mt(),dn=!0),Gt.add(f,o),o.B=0}}function y(o,f){return qi(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=f.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Ot(x(o.Ga,o,f),Ee(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const O=new vt(this,this.j,o);let U=this.o;if(this.S&&(U?(U=C(U),N(U,this.S)):U=this.S),this.m!==null||this.O||(O.H=U,U=null),this.P)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var E=this.i[g];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=A(this,O,f),g=Lt(this.I),xe(g,"RID",o),xe(g,"CVER",22),this.D&&xe(g,"X-HTTP-Session-Id",this.D),R(this,g),U&&(this.O?f="headers="+encodeURIComponent(String(Wi(U)))+"&"+f:this.m&&vr(g,this.m,U)),Qr(this.h,O),this.Ua&&xe(g,"TYPE","init"),this.P?(xe(g,"$req",f),xe(g,"SID","null"),O.T=!0,Mn(O,g,null)):Mn(O,g,f),this.G=2}}else this.G==3&&(o?v(this,o):this.i.length==0||ji(this.h)||v(this))};function v(o,f){var g;f?g=f.l:g=o.U++;const E=Lt(o.I);xe(E,"SID",o.K),xe(E,"RID",g),xe(E,"AID",o.T),R(o,E),o.m&&o.o&&vr(E,o.m,o.o),g=new vt(o,o.j,g,o.B+1),o.m===null&&(g.H=o.o),f&&(o.i=f.D.concat(o.i)),f=A(o,g,1e3),g.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Qr(o.h,g),Mn(g,E,f)}function R(o,f){o.H&&et(o.H,function(g,E){xe(f,E,g)}),o.l&&Us({},function(g,E){xe(f,E,g)})}function A(o,f,g){g=Math.min(o.i.length,g);var E=o.l?x(o.l.Na,o.l,o):null;e:{var O=o.i;let U=-1;for(;;){const X=["count="+g];U==-1?0<g?(U=O[0].g,X.push("ofs="+U)):U=0:X.push("ofs="+U);let De=!0;for(let Ve=0;Ve<g;Ve++){let me=O[Ve].g;const nt=O[Ve].map;if(me-=U,0>me)U=Math.max(0,O[Ve].g-100),De=!1;else try{ya(nt,X,"req"+me+"_")}catch{E&&E(nt)}}if(De){E=X.join("&");break e}}}return o=o.i.splice(0,g),f.D=o,E}function k(o){if(!o.g&&!o.u){o.Y=1;var f=o.Fa;mt||Di(),dn||(mt(),dn=!0),Gt.add(f,o),o.v=0}}function q(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Ot(x(o.Fa,o),Ee(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,F(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Ot(x(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,tt(10),h(this),F(this))};function B(o){o.A!=null&&(p.clearTimeout(o.A),o.A=null)}function F(o){o.g=new vt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var f=Lt(o.qa);xe(f,"RID","rpc"),xe(f,"SID",o.K),xe(f,"AID",o.T),xe(f,"CI",o.F?"0":"1"),!o.F&&o.ja&&xe(f,"TO",o.ja),xe(f,"TYPE","xmlhttp"),R(o,f),o.m&&o.o&&vr(f,o.m,o.o),o.L&&(o.g.I=o.L);var g=o.g;o=o.ia,g.L=1,g.v=Yt(Lt(f)),g.m=null,g.P=!0,Fi(g,o)}n.Za=function(){this.C!=null&&(this.C=null,h(this),q(this),tt(19))};function Q(o){o.C!=null&&(p.clearTimeout(o.C),o.C=null)}function ue(o,f){var g=null;if(o.g==f){Q(o),B(o),o.g=null;var E=2}else if(gr(o.h,f))g=f.D,ot(o.h,f),E=1;else return;if(o.G!=0){if(f.o)if(E==1){g=f.m?f.m.length:0,f=Date.now()-f.F;var O=o.B;E=Je(),st(E,new yn(E,g)),m(o)}else k(o);else if(O=f.s,O==3||O==0&&0<f.X||!(E==1&&y(o,f)||E==2&&q(o)))switch(g&&0<g.length&&(f=o.h,f.i=f.i.concat(g)),O){case 1:le(o,5);break;case 4:le(o,10);break;case 3:le(o,6);break;default:le(o,2)}}}function Ee(o,f){let g=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(g*=2),g*f}function le(o,f){if(o.j.info("Error code "+f),f==2){var g=x(o.fb,o),E=o.Xa;const O=!E;E=new Mt(E||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||Yr(E,"https"),Yt(E),O?zi(E.toString(),g):ga(E.toString(),g)}else tt(2);o.G=0,o.l&&o.l.sa(f),We(o),d(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function We(o){if(o.G=0,o.ka=[],o.l){const f=Tn(o.h);(f.length!=0||o.i.length!=0)&&(Y(o.ka,f),Y(o.ka,o.i),o.h.i.length=0,K(o.i),o.i.length=0),o.l.ra()}}function Be(o,f,g){var E=g instanceof Mt?Lt(g):new Mt(g);if(E.g!="")f&&(E.g=f+"."+E.g),Zr(E,E.s);else{var O=p.location;E=O.protocol,f=f?f+"."+O.hostname:O.hostname,O=+O.port;var U=new Mt(null);E&&Yr(U,E),f&&(U.g=f),O&&Zr(U,O),g&&(U.l=g),E=U}return g=o.D,f=o.ya,g&&f&&xe(E,g,f),xe(E,"VER",o.la),R(o,E),E}function Pt(o,f,g){if(f&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=o.Ca&&!o.pa?new Le(new ei({eb:g})):new Le(o.pa),f.Ha(o.J),f}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function kt(){}n=kt.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ye(){}ye.prototype.g=function(o,f){return new $e(o,f)};function $e(o,f){ke.call(this),this.g=new s(f),this.l=o,this.h=f&&f.messageUrlParams||null,o=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(o?o["X-WebChannel-Content-Type"]=f.messageContentType:o={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(o?o["X-WebChannel-Client-Profile"]=f.va:o={"X-WebChannel-Client-Profile":f.va}),this.g.S=o,(o=f&&f.Sb)&&!ve(o)&&(this.g.m=o),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!ve(f)&&(this.g.D=f,o=this.h,o!==null&&f in o&&(o=this.h,f in o&&delete o[f])),this.j=new Ft(this)}$($e,ke),$e.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$e.prototype.close=function(){u(this.g)},$e.prototype.o=function(o){var f=this.g;if(typeof o=="string"){var g={};g.__data__=o,o=g}else this.u&&(g={},g.__data__=Xt(o),o=g);f.i.push(new ha(f.Ya++,o)),f.G==3&&m(f)},$e.prototype.N=function(){this.g.l=null,delete this.j,u(this.g),delete this.g,$e.aa.N.call(this)};function Ae(o){mn.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var f=o.__sm__;if(f){e:{for(const g in f){o=g;break e}o=void 0}(this.i=o)&&(o=this.i,f=f!==null&&o in f?f[o]:void 0),this.data=f}else this.data=o}$(Ae,mn);function Fe(){qr.call(this),this.status=1}$(Fe,qr);function Ft(o){this.g=o}$(Ft,kt),Ft.prototype.ua=function(){st(this.g,"a")},Ft.prototype.ta=function(o){st(this.g,new Ae(o))},Ft.prototype.sa=function(o){st(this.g,new Fe)},Ft.prototype.ra=function(){st(this.g,"b")},ye.prototype.createWebChannel=ye.prototype.g,$e.prototype.send=$e.prototype.o,$e.prototype.open=$e.prototype.m,$e.prototype.close=$e.prototype.close,Sh=function(){return new ye},bh=function(){return Je()},Ah=Jt,za={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Hr.NO_ERROR=0,Hr.TIMEOUT=8,Hr.HTTP_ERROR=6,lo=Hr,Ms.COMPLETE="complete",Ih=Ms,Vs.EventType=Vt,Vt.OPEN="a",Vt.CLOSE="b",Vt.ERROR="c",Vt.MESSAGE="d",ke.prototype.listen=ke.prototype.K,Xi=Vs,Le.prototype.listenOnce=Le.prototype.L,Le.prototype.getLastError=Le.prototype.Ka,Le.prototype.getLastErrorCode=Le.prototype.Ba,Le.prototype.getStatus=Le.prototype.Z,Le.prototype.getResponseJson=Le.prototype.Oa,Le.prototype.getResponseText=Le.prototype.oa,Le.prototype.send=Le.prototype.ea,Le.prototype.setWithCredentials=Le.prototype.Ha,wh=Le}).apply(typeof Zs<"u"?Zs:typeof self<"u"?self:typeof window<"u"?window:{});const Nc="@firebase/firestore",xc="4.9.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Si="12.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new uu("@firebase/firestore");function ii(){return Rr.logLevel}function re(n,...e){if(Rr.logLevel<=be.DEBUG){const t=e.map(Tu);Rr.debug(`Firestore (${Si}): ${n}`,...t)}}function kn(n,...e){if(Rr.logLevel<=be.ERROR){const t=e.map(Tu);Rr.error(`Firestore (${Si}): ${n}`,...t)}}function yi(n,...e){if(Rr.logLevel<=be.WARN){const t=e.map(Tu);Rr.warn(`Firestore (${Si}): ${n}`,...t)}}function Tu(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Ch(n,r,t)}function Ch(n,e,t){let r=`FIRESTORE (${Si}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw kn(r),new Error(r)}function Ne(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||Ch(e,i,r)}function ge(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends xn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Gm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ft.UNAUTHENTICATED)))}shutdown(){}}class Km{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Qm{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ne(this.o===void 0,42304);let r=this.i;const i=_=>this.i!==r?(r=this.i,t(_)):Promise.resolve();let a=new Yn;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Yn,e.enqueueRetryable((()=>i(this.currentUser)))};const c=()=>{const _=a;e.enqueueRetryable((async()=>{await _.promise,await i(this.currentUser)}))},p=_=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=_,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((_=>p(_))),setTimeout((()=>{if(!this.auth){const _=this.t.getImmediate({optional:!0});_?p(_):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Yn)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ne(typeof r.accessToken=="string",31837,{l:r}),new Rh(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string",2055,{h:e}),new ft(e)}}class Xm{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Jm{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Xm(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(ft.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Vc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ym{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,sn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ne(this.o===void 0,3512);const r=a=>{a.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const c=a.token!==this.m;return this.m=a.token,re("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>r(a)))};const i=a=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>i(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?i(a):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Vc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ne(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Vc(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Zm(40);for(let a=0;a<i.length;++a)r.length<20&&i[a]<t&&(r+=e.charAt(i[a]%62))}return r}}function Se(n,e){return n<e?-1:n>e?1:0}function Wa(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const i=n.charAt(r),a=e.charAt(r);if(i!==a)return Da(i)===Da(a)?Se(i,a):Da(i)?1:-1}return Se(n.length,e.length)}const ey=55296,ty=57343;function Da(n){const e=n.charCodeAt(0);return e>=ey&&e<=ty}function _i(n,e,t){return n.length===e.length&&n.every(((r,i)=>t(r,e[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc="__name__";class rn{constructor(e,t,r){t===void 0?t=0:t>e.length&&ce(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&ce(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return rn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof rn?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const a=rn.compareSegments(e.get(i),t.get(i));if(a!==0)return a}return Se(e.length,t.length)}static compareSegments(e,t){const r=rn.isNumericId(e),i=rn.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?rn.extractNumericId(e).compare(rn.extractNumericId(t)):Wa(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Jn.fromString(e.substring(4,e.length-2))}}class Me extends rn{construct(e,t,r){return new Me(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new ee(z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((i=>i.length>0)))}return new Me(t)}static emptyPath(){return new Me([])}}const ny=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends rn{construct(e,t,r){return new ut(e,t,r)}static isValidIdentifier(e){return ny.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Oc}static keyField(){return new ut([Oc])}static fromServerFormat(e){const t=[];let r="",i=0;const a=()=>{if(r.length===0)throw new ee(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let c=!1;for(;i<e.length;){const p=e[i];if(p==="\\"){if(i+1===e.length)throw new ee(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const _=e[i+1];if(_!=="\\"&&_!=="."&&_!=="`")throw new ee(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=_,i+=2}else p==="`"?(c=!c,i++):p!=="."||c?(r+=p,i++):(a(),i++)}if(a(),c)throw new ee(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ut(t)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.path=e}static fromPath(e){return new oe(Me.fromString(e))}static fromName(e){return new oe(Me.fromString(e).popFirst(5))}static empty(){return new oe(Me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Me.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oe(new Me(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(n,e,t){if(!t)throw new ee(z.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function ry(n,e,t,r){if(e===!0&&r===!0)throw new ee(z.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Mc(n){if(!oe.isDocumentKey(n))throw new ee(z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Lc(n){if(oe.isDocumentKey(n))throw new ee(z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function kh(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function jo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ce(12329,{type:typeof n})}function Dn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ee(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=jo(n);throw new ee(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function iy(n,e){if(e<=0)throw new ee(z.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(n,e){const t={typeString:n};return e&&(t.value=e),t}function vs(n,e){if(!kh(n))throw new ee(z.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const c=n[r];if(i&&typeof c!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(a!==void 0&&c!==a.value){t=`Expected '${r}' field to equal '${a.value}'`;break}}if(t)throw new ee(z.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc=-62135596800,Uc=1e6;class Ue{static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Uc);return new Ue(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ee(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ee(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Fc)throw new ee(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Uc}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ue._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(vs(e,Ue._jsonSchema))return new Ue(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Fc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ue._jsonSchemaVersion="firestore/timestamp/1.0",Ue._jsonSchema={type:Qe("string",Ue._jsonSchemaVersion),seconds:Qe("number"),nanoseconds:Qe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{static fromTimestamp(e){return new pe(e)}static min(){return new pe(new Ue(0,0))}static max(){return new pe(new Ue(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=-1;function sy(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=pe.fromTimestamp(r===1e9?new Ue(t+1,0):new Ue(t,r));return new er(i,oe.empty(),e)}function oy(n){return new er(n.readTime,n.key,as)}class er{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new er(pe.min(),oe.empty(),as)}static max(){return new er(pe.max(),oe.empty(),as)}}function ay(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=oe.comparator(n.documentKey,e.documentKey),t!==0?t:Se(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ci(n){if(n.code!==z.FAILED_PRECONDITION||n.message!==uy)throw n;re("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ce(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new W(((r,i)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,i)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof W?t:W.resolve(t)}catch(t){return W.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):W.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):W.reject(t)}static resolve(e){return new W(((t,r)=>{t(e)}))}static reject(e){return new W(((t,r)=>{r(e)}))}static waitFor(e){return new W(((t,r)=>{let i=0,a=0,c=!1;e.forEach((p=>{++i,p.next((()=>{++a,c&&a===i&&t()}),(_=>r(_)))})),c=!0,a===i&&t()}))}static or(e){let t=W.resolve(!1);for(const r of e)t=t.next((i=>i?W.resolve(i):r()));return t}static forEach(e,t){const r=[];return e.forEach(((i,a)=>{r.push(t.call(this,i,a))})),this.waitFor(r)}static mapArray(e,t){return new W(((r,i)=>{const a=e.length,c=new Array(a);let p=0;for(let _=0;_<a;_++){const T=_;t(e[T]).next((I=>{c[T]=I,++p,p===a&&r(c)}),(I=>i(I)))}}))}static doWhile(e,t){return new W(((r,i)=>{const a=()=>{e()===!0?t().next((()=>{a()}),i):r()};a()}))}}function ly(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ri(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}qo.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu=-1;function Bo(n){return n==null}function bo(n){return n===0&&1/n==-1/0}function hy(n){return typeof n=="number"&&Number.isInteger(n)&&!bo(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh="";function fy(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=jc(e)),e=dy(n.get(t),e);return jc(e)}function dy(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const a=n.charAt(i);switch(a){case"\0":t+="";break;case Dh:t+="";break;default:t+=a}}return t}function jc(n){return n+Dh+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function or(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Nh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,t){this.comparator=e,this.root=t||at.EMPTY}insert(e,t){return new qe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new eo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new eo(this.root,e,this.comparator,!1)}getReverseIterator(){return new eo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new eo(this.root,e,this.comparator,!0)}}class eo{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&i&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,t,r,i,a){this.key=e,this.value=t,this.color=r??at.RED,this.left=i??at.EMPTY,this.right=a??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,a){return new at(e??this.key,t??this.value,r??this.color,i??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const a=r(e,i.key);return i=a<0?i.copy(null,null,null,i.left.insert(e,t,r),null):a===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return at.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ce(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ce(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ce(27949);return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw ce(57766)}get value(){throw ce(16141)}get color(){throw ce(16727)}get left(){throw ce(29726)}get right(){throw ce(36894)}copy(e,t,r,i,a){return this}insert(e,t,r){return new at(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Bc(this.data.getIterator())}getIteratorFrom(e){return new Bc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof Ye)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,a=r.getNext().key;if(this.comparator(i,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ye(this.comparator);return t.data=e,t}}class Bc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.fields=e,e.sort(ut.comparator)}static empty(){return new Dt([])}unionWith(e){let t=new Ye(ut.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Dt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return _i(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new xh("Invalid base64 string: "+a):a}})(e);return new ct(t)}static fromUint8Array(e){const t=(function(i){let a="";for(let c=0;c<i.length;++c)a+=String.fromCharCode(i[c]);return a})(e);return new ct(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const py=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function tr(n){if(Ne(!!n,39018),typeof n=="string"){let e=0;const t=py.exec(n);if(Ne(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:He(n.seconds),nanos:He(n.nanos)}}function He(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function nr(n){return typeof n=="string"?ct.fromBase64String(n):ct.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh="server_timestamp",Oh="__type__",Mh="__previous_value__",Lh="__local_write_time__";function Iu(n){return(n?.mapValue?.fields||{})[Oh]?.stringValue===Vh}function $o(n){const e=n.mapValue.fields[Mh];return Iu(e)?$o(e):e}function us(n){const e=tr(n.mapValue.fields[Lh].timestampValue);return new Ue(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e,t,r,i,a,c,p,_,T,I){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=a,this.forceLongPolling=c,this.autoDetectLongPolling=p,this.longPollingOptions=_,this.useFetchStreams=T,this.isUsingEmulator=I}}const So="(default)";class cs{constructor(e,t){this.projectId=e,this.database=t||So}static empty(){return new cs("","")}get isDefaultDatabase(){return this.database===So}isEqual(e){return e instanceof cs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh="__type__",my="__max__",to={mapValue:{}},Uh="__vector__",Co="value";function rr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Iu(n)?4:_y(n)?9007199254740991:yy(n)?10:11:ce(28295,{value:n})}function fn(n,e){if(n===e)return!0;const t=rr(n);if(t!==rr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return us(n).isEqual(us(e));case 3:return(function(i,a){if(typeof i.timestampValue=="string"&&typeof a.timestampValue=="string"&&i.timestampValue.length===a.timestampValue.length)return i.timestampValue===a.timestampValue;const c=tr(i.timestampValue),p=tr(a.timestampValue);return c.seconds===p.seconds&&c.nanos===p.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,a){return nr(i.bytesValue).isEqual(nr(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,a){return He(i.geoPointValue.latitude)===He(a.geoPointValue.latitude)&&He(i.geoPointValue.longitude)===He(a.geoPointValue.longitude)})(n,e);case 2:return(function(i,a){if("integerValue"in i&&"integerValue"in a)return He(i.integerValue)===He(a.integerValue);if("doubleValue"in i&&"doubleValue"in a){const c=He(i.doubleValue),p=He(a.doubleValue);return c===p?bo(c)===bo(p):isNaN(c)&&isNaN(p)}return!1})(n,e);case 9:return _i(n.arrayValue.values||[],e.arrayValue.values||[],fn);case 10:case 11:return(function(i,a){const c=i.mapValue.fields||{},p=a.mapValue.fields||{};if(qc(c)!==qc(p))return!1;for(const _ in c)if(c.hasOwnProperty(_)&&(p[_]===void 0||!fn(c[_],p[_])))return!1;return!0})(n,e);default:return ce(52216,{left:n})}}function ls(n,e){return(n.values||[]).find((t=>fn(t,e)))!==void 0}function vi(n,e){if(n===e)return 0;const t=rr(n),r=rr(e);if(t!==r)return Se(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Se(n.booleanValue,e.booleanValue);case 2:return(function(a,c){const p=He(a.integerValue||a.doubleValue),_=He(c.integerValue||c.doubleValue);return p<_?-1:p>_?1:p===_?0:isNaN(p)?isNaN(_)?0:-1:1})(n,e);case 3:return $c(n.timestampValue,e.timestampValue);case 4:return $c(us(n),us(e));case 5:return Wa(n.stringValue,e.stringValue);case 6:return(function(a,c){const p=nr(a),_=nr(c);return p.compareTo(_)})(n.bytesValue,e.bytesValue);case 7:return(function(a,c){const p=a.split("/"),_=c.split("/");for(let T=0;T<p.length&&T<_.length;T++){const I=Se(p[T],_[T]);if(I!==0)return I}return Se(p.length,_.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,c){const p=Se(He(a.latitude),He(c.latitude));return p!==0?p:Se(He(a.longitude),He(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Hc(n.arrayValue,e.arrayValue);case 10:return(function(a,c){const p=a.fields||{},_=c.fields||{},T=p[Co]?.arrayValue,I=_[Co]?.arrayValue,D=Se(T?.values?.length||0,I?.values?.length||0);return D!==0?D:Hc(T,I)})(n.mapValue,e.mapValue);case 11:return(function(a,c){if(a===to.mapValue&&c===to.mapValue)return 0;if(a===to.mapValue)return 1;if(c===to.mapValue)return-1;const p=a.fields||{},_=Object.keys(p),T=c.fields||{},I=Object.keys(T);_.sort(),I.sort();for(let D=0;D<_.length&&D<I.length;++D){const x=Wa(_[D],I[D]);if(x!==0)return x;const G=vi(p[_[D]],T[I[D]]);if(G!==0)return G}return Se(_.length,I.length)})(n.mapValue,e.mapValue);default:throw ce(23264,{he:t})}}function $c(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Se(n,e);const t=tr(n),r=tr(e),i=Se(t.seconds,r.seconds);return i!==0?i:Se(t.nanos,r.nanos)}function Hc(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const a=vi(t[i],r[i]);if(a)return a}return Se(t.length,r.length)}function Ti(n){return Ga(n)}function Ga(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=tr(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return nr(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return oe.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",i=!0;for(const a of t.values||[])i?i=!1:r+=",",r+=Ga(a);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let i="{",a=!0;for(const c of r)a?a=!1:i+=",",i+=`${c}:${Ga(t.fields[c])}`;return i+"}"})(n.mapValue):ce(61005,{value:n})}function ho(n){switch(rr(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=$o(n);return e?16+ho(e):16;case 5:return 2*n.stringValue.length;case 6:return nr(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,a)=>i+ho(a)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return or(r.fields,((a,c)=>{i+=a.length+ho(c)})),i})(n.mapValue);default:throw ce(13486,{value:n})}}function zc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ka(n){return!!n&&"integerValue"in n}function Au(n){return!!n&&"arrayValue"in n}function Wc(n){return!!n&&"nullValue"in n}function Gc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function fo(n){return!!n&&"mapValue"in n}function yy(n){return(n?.mapValue?.fields||{})[Fh]?.stringValue===Uh}function ts(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return or(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=ts(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ts(n.arrayValue.values[t]);return e}return{...n}}function _y(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===my}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.value=e}static empty(){return new bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!fo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ts(t)}setAll(e){let t=ut.emptyPath(),r={},i=[];e.forEach(((c,p)=>{if(!t.isImmediateParentOf(p)){const _=this.getFieldsMap(t);this.applyChanges(_,r,i),r={},i=[],t=p.popLast()}c?r[p.lastSegment()]=ts(c):i.push(p.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,r,i)}delete(e){const t=this.field(e.popLast());fo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return fn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];fo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){or(t,((i,a)=>e[i]=a));for(const i of r)delete e[i]}clone(){return new bt(ts(this.value))}}function jh(n){const e=[];return or(n.fields,((t,r)=>{const i=new ut([t]);if(fo(r)){const a=jh(r.mapValue).fields;if(a.length===0)e.push(i);else for(const c of a)e.push(i.child(c))}else e.push(i)})),new Dt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,t,r,i,a,c,p){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=a,this.data=c,this.documentState=p}static newInvalidDocument(e){return new dt(e,0,pe.min(),pe.min(),pe.min(),bt.empty(),0)}static newFoundDocument(e,t,r,i){return new dt(e,1,t,pe.min(),r,i,0)}static newNoDocument(e,t){return new dt(e,2,t,pe.min(),pe.min(),bt.empty(),0)}static newUnknownDocument(e,t){return new dt(e,3,t,pe.min(),pe.min(),bt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,t){this.position=e,this.inclusive=t}}function Kc(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const a=e[i],c=n.position[i];if(a.field.isKeyField()?r=oe.comparator(oe.fromName(c.referenceValue),t.key):r=vi(c,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function Qc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!fn(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,t="asc"){this.field=e,this.dir=t}}function vy(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{}class Ke extends qh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Ey(e,t,r):t==="array-contains"?new Ay(e,r):t==="in"?new by(e,r):t==="not-in"?new Sy(e,r):t==="array-contains-any"?new Cy(e,r):new Ke(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new wy(e,r):new Iy(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(vi(t,this.value)):t!==null&&rr(this.value)===rr(t)&&this.matchesComparison(vi(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wt extends qh{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Wt(e,t)}matches(e){return Bh(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Bh(n){return n.op==="and"}function $h(n){return Ty(n)&&Bh(n)}function Ty(n){for(const e of n.filters)if(e instanceof Wt)return!1;return!0}function Qa(n){if(n instanceof Ke)return n.field.canonicalString()+n.op.toString()+Ti(n.value);if($h(n))return n.filters.map((e=>Qa(e))).join(",");{const e=n.filters.map((t=>Qa(t))).join(",");return`${n.op}(${e})`}}function Hh(n,e){return n instanceof Ke?(function(r,i){return i instanceof Ke&&r.op===i.op&&r.field.isEqual(i.field)&&fn(r.value,i.value)})(n,e):n instanceof Wt?(function(r,i){return i instanceof Wt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((a,c,p)=>a&&Hh(c,i.filters[p])),!0):!1})(n,e):void ce(19439)}function zh(n){return n instanceof Ke?(function(t){return`${t.field.canonicalString()} ${t.op} ${Ti(t.value)}`})(n):n instanceof Wt?(function(t){return t.op.toString()+" {"+t.getFilters().map(zh).join(" ,")+"}"})(n):"Filter"}class Ey extends Ke{constructor(e,t,r){super(e,t,r),this.key=oe.fromName(r.referenceValue)}matches(e){const t=oe.comparator(e.key,this.key);return this.matchesComparison(t)}}class wy extends Ke{constructor(e,t){super(e,"in",t),this.keys=Wh("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Iy extends Ke{constructor(e,t){super(e,"not-in",t),this.keys=Wh("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Wh(n,e){return(e.arrayValue?.values||[]).map((t=>oe.fromName(t.referenceValue)))}class Ay extends Ke{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Au(t)&&ls(t.arrayValue,this.value)}}class by extends Ke{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ls(this.value.arrayValue,t)}}class Sy extends Ke{constructor(e,t){super(e,"not-in",t)}matches(e){if(ls(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ls(this.value.arrayValue,t)}}class Cy extends Ke{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Au(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>ls(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e,t=null,r=[],i=[],a=null,c=null,p=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=a,this.startAt=c,this.endAt=p,this.Te=null}}function Xc(n,e=null,t=[],r=[],i=null,a=null,c=null){return new Ry(n,e,t,r,i,a,c)}function bu(n){const e=ge(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Qa(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(a){return a.field.canonicalString()+a.dir})(r))).join(","),Bo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>Ti(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>Ti(r))).join(",")),e.Te=t}return e.Te}function Su(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!vy(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Hh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Qc(n.startAt,e.startAt)&&Qc(n.endAt,e.endAt)}function Xa(n){return oe.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,t=null,r=[],i=[],a=null,c="F",p=null,_=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=a,this.limitType=c,this.startAt=p,this.endAt=_,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Py(n,e,t,r,i,a,c,p){return new Ts(n,e,t,r,i,a,c,p)}function Gh(n){return new Ts(n)}function Jc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Kh(n){return n.collectionGroup!==null}function ns(n){const e=ge(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const a of e.explicitOrderBy)e.Ie.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let p=new Ye(ut.comparator);return c.filters.forEach((_=>{_.getFlattenedFilters().forEach((T=>{T.isInequality()&&(p=p.add(T.field))}))})),p})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Ie.push(new Po(a,r))})),t.has(ut.keyField().canonicalString())||e.Ie.push(new Po(ut.keyField(),r))}return e.Ie}function un(n){const e=ge(n);return e.Ee||(e.Ee=ky(e,ns(n))),e.Ee}function ky(n,e){if(n.limitType==="F")return Xc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((i=>{const a=i.dir==="desc"?"asc":"desc";return new Po(i.field,a)}));const t=n.endAt?new Ro(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ro(n.startAt.position,n.startAt.inclusive):null;return Xc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ja(n,e){const t=n.filters.concat([e]);return new Ts(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ko(n,e,t){return new Ts(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ho(n,e){return Su(un(n),un(e))&&n.limitType===e.limitType}function Qh(n){return`${bu(un(n))}|lt:${n.limitType}`}function si(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((i=>zh(i))).join(", ")}]`),Bo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((i=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(i))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((i=>Ti(i))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((i=>Ti(i))).join(",")),`Target(${r})`})(un(n))}; limitType=${n.limitType})`}function zo(n,e){return e.isFoundDocument()&&(function(r,i){const a=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):oe.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)})(n,e)&&(function(r,i){for(const a of ns(r))if(!a.field.isKeyField()&&i.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(r,i){for(const a of r.filters)if(!a.matches(i))return!1;return!0})(n,e)&&(function(r,i){return!(r.startAt&&!(function(c,p,_){const T=Kc(c,p,_);return c.inclusive?T<=0:T<0})(r.startAt,ns(r),i)||r.endAt&&!(function(c,p,_){const T=Kc(c,p,_);return c.inclusive?T>=0:T>0})(r.endAt,ns(r),i))})(n,e)}function Dy(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Xh(n){return(e,t)=>{let r=!1;for(const i of ns(n)){const a=Ny(i,e,t);if(a!==0)return a;r=r||i.field.isKeyField()}return 0}}function Ny(n,e,t){const r=n.field.isKeyField()?oe.comparator(e.key,t.key):(function(a,c,p){const _=c.data.field(a),T=p.data.field(a);return _!==null&&T!==null?vi(_,T):ce(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ce(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,a]of r)if(this.equalsFn(i,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return void(i[a]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){or(this.inner,((t,r)=>{for(const[i,a]of r)e(i,a)}))}isEmpty(){return Nh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy=new qe(oe.comparator);function Nn(){return xy}const Jh=new qe(oe.comparator);function Ji(...n){let e=Jh;for(const t of n)e=e.insert(t.key,t);return e}function Yh(n){let e=Jh;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Ir(){return rs()}function Zh(){return rs()}function rs(){return new kr((n=>n.toString()),((n,e)=>n.isEqual(e)))}const Vy=new qe(oe.comparator),Oy=new Ye(oe.comparator);function Ce(...n){let e=Oy;for(const t of n)e=e.add(t);return e}const My=new Ye(Se);function Ly(){return My}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bo(e)?"-0":e}}function ef(n){return{integerValue:""+n}}function Fy(n,e){return hy(e)?ef(e):Cu(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(){this._=void 0}}function Uy(n,e,t){return n instanceof hs?(function(i,a){const c={fields:{[Oh]:{stringValue:Vh},[Lh]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return a&&Iu(a)&&(a=$o(a)),a&&(c.fields[Mh]=a),{mapValue:c}})(t,e):n instanceof fs?nf(n,e):n instanceof ds?rf(n,e):(function(i,a){const c=tf(i,a),p=Yc(c)+Yc(i.Ae);return Ka(c)&&Ka(i.Ae)?ef(p):Cu(i.serializer,p)})(n,e)}function jy(n,e,t){return n instanceof fs?nf(n,e):n instanceof ds?rf(n,e):t}function tf(n,e){return n instanceof Do?(function(r){return Ka(r)||(function(a){return!!a&&"doubleValue"in a})(r)})(e)?e:{integerValue:0}:null}class hs extends Wo{}class fs extends Wo{constructor(e){super(),this.elements=e}}function nf(n,e){const t=sf(e);for(const r of n.elements)t.some((i=>fn(i,r)))||t.push(r);return{arrayValue:{values:t}}}class ds extends Wo{constructor(e){super(),this.elements=e}}function rf(n,e){let t=sf(e);for(const r of n.elements)t=t.filter((i=>!fn(i,r)));return{arrayValue:{values:t}}}class Do extends Wo{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Yc(n){return He(n.integerValue||n.doubleValue)}function sf(n){return Au(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e,t){this.field=e,this.transform=t}}function By(n,e){return n.field.isEqual(e.field)&&(function(r,i){return r instanceof fs&&i instanceof fs||r instanceof ds&&i instanceof ds?_i(r.elements,i.elements,fn):r instanceof Do&&i instanceof Do?fn(r.Ae,i.Ae):r instanceof hs&&i instanceof hs})(n.transform,e.transform)}class $y{constructor(e,t){this.version=e,this.transformResults=t}}class St{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new St}static exists(e){return new St(void 0,e)}static updateTime(e){return new St(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function po(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Go{}function of(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ko(n.key,St.none()):new Es(n.key,n.data,St.none());{const t=n.data,r=bt.empty();let i=new Ye(ut.comparator);for(let a of e.fields)if(!i.has(a)){let c=t.field(a);c===null&&a.length>1&&(a=a.popLast(),c=t.field(a)),c===null?r.delete(a):r.set(a,c),i=i.add(a)}return new ar(n.key,r,new Dt(i.toArray()),St.none())}}function Hy(n,e,t){n instanceof Es?(function(i,a,c){const p=i.value.clone(),_=el(i.fieldTransforms,a,c.transformResults);p.setAll(_),a.convertToFoundDocument(c.version,p).setHasCommittedMutations()})(n,e,t):n instanceof ar?(function(i,a,c){if(!po(i.precondition,a))return void a.convertToUnknownDocument(c.version);const p=el(i.fieldTransforms,a,c.transformResults),_=a.data;_.setAll(af(i)),_.setAll(p),a.convertToFoundDocument(c.version,_).setHasCommittedMutations()})(n,e,t):(function(i,a,c){a.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function is(n,e,t,r){return n instanceof Es?(function(a,c,p,_){if(!po(a.precondition,c))return p;const T=a.value.clone(),I=tl(a.fieldTransforms,_,c);return T.setAll(I),c.convertToFoundDocument(c.version,T).setHasLocalMutations(),null})(n,e,t,r):n instanceof ar?(function(a,c,p,_){if(!po(a.precondition,c))return p;const T=tl(a.fieldTransforms,_,c),I=c.data;return I.setAll(af(a)),I.setAll(T),c.convertToFoundDocument(c.version,I).setHasLocalMutations(),p===null?null:p.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((D=>D.field)))})(n,e,t,r):(function(a,c,p){return po(a.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):p})(n,e,t)}function zy(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),a=tf(r.transform,i||null);a!=null&&(t===null&&(t=bt.empty()),t.set(r.field,a))}return t||null}function Zc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&_i(r,i,((a,c)=>By(a,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Es extends Go{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ar extends Go{constructor(e,t,r,i,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function af(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function el(n,e,t){const r=new Map;Ne(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let i=0;i<t.length;i++){const a=n[i],c=a.transform,p=e.data.field(a.field);r.set(a.field,jy(c,p,t[i]))}return r}function tl(n,e,t){const r=new Map;for(const i of n){const a=i.transform,c=t.data.field(i.field);r.set(i.field,Uy(a,c,e))}return r}class Ko extends Go{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Wy extends Go{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const a=this.mutations[i];a.key.isEqual(e.key)&&Hy(a,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=is(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=is(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Zh();return this.mutations.forEach((i=>{const a=e.get(i.key),c=a.overlayedDocument;let p=this.applyToLocalView(c,a.mutatedFields);p=t.has(i.key)?null:p;const _=of(c,p);_!==null&&r.set(i.key,_),c.isValidDocument()||c.convertToNoDocument(pe.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ce())}isEqual(e){return this.batchId===e.batchId&&_i(this.mutations,e.mutations,((t,r)=>Zc(t,r)))&&_i(this.baseMutations,e.baseMutations,((t,r)=>Zc(t,r)))}}class Ru{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){Ne(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=(function(){return Vy})();const a=e.mutations;for(let c=0;c<a.length;c++)i=i.insert(a[c].key,r[c].version);return new Ru(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ge,Re;function Xy(n){switch(n){case z.OK:return ce(64938);case z.CANCELLED:case z.UNKNOWN:case z.DEADLINE_EXCEEDED:case z.RESOURCE_EXHAUSTED:case z.INTERNAL:case z.UNAVAILABLE:case z.UNAUTHENTICATED:return!1;case z.INVALID_ARGUMENT:case z.NOT_FOUND:case z.ALREADY_EXISTS:case z.PERMISSION_DENIED:case z.FAILED_PRECONDITION:case z.ABORTED:case z.OUT_OF_RANGE:case z.UNIMPLEMENTED:case z.DATA_LOSS:return!0;default:return ce(15467,{code:n})}}function uf(n){if(n===void 0)return kn("GRPC error has no .code"),z.UNKNOWN;switch(n){case Ge.OK:return z.OK;case Ge.CANCELLED:return z.CANCELLED;case Ge.UNKNOWN:return z.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return z.INTERNAL;case Ge.UNAVAILABLE:return z.UNAVAILABLE;case Ge.UNAUTHENTICATED:return z.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case Ge.NOT_FOUND:return z.NOT_FOUND;case Ge.ALREADY_EXISTS:return z.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return z.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case Ge.ABORTED:return z.ABORTED;case Ge.OUT_OF_RANGE:return z.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return z.UNIMPLEMENTED;case Ge.DATA_LOSS:return z.DATA_LOSS;default:return ce(39323,{code:n})}}(Re=Ge||(Ge={}))[Re.OK=0]="OK",Re[Re.CANCELLED=1]="CANCELLED",Re[Re.UNKNOWN=2]="UNKNOWN",Re[Re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Re[Re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Re[Re.NOT_FOUND=5]="NOT_FOUND",Re[Re.ALREADY_EXISTS=6]="ALREADY_EXISTS",Re[Re.PERMISSION_DENIED=7]="PERMISSION_DENIED",Re[Re.UNAUTHENTICATED=16]="UNAUTHENTICATED",Re[Re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Re[Re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Re[Re.ABORTED=10]="ABORTED",Re[Re.OUT_OF_RANGE=11]="OUT_OF_RANGE",Re[Re.UNIMPLEMENTED=12]="UNIMPLEMENTED",Re[Re.INTERNAL=13]="INTERNAL",Re[Re.UNAVAILABLE=14]="UNAVAILABLE",Re[Re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jy(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy=new Jn([4294967295,4294967295],0);function nl(n){const e=Jy().encode(n),t=new Eh;return t.update(e),new Uint8Array(t.digest())}function rl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new Jn([t,r],0),new Jn([i,a],0)]}class Pu{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Yi(`Invalid padding: ${t}`);if(r<0)throw new Yi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Yi(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Yi(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Jn.fromNumber(this.ge)}ye(e,t,r){let i=e.add(t.multiply(Jn.fromNumber(r)));return i.compare(Yy)===1&&(i=new Jn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=nl(e),[r,i]=rl(t);for(let a=0;a<this.hashCount;a++){const c=this.ye(r,i,a);if(!this.we(c))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),c=new Pu(a,i,t);return r.forEach((p=>c.insert(p))),c}insert(e){if(this.ge===0)return;const t=nl(e),[r,i]=rl(t);for(let a=0;a<this.hashCount;a++){const c=this.ye(r,i,a);this.Se(c)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Yi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,t,r,i,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,ws.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Qo(pe.min(),i,new qe(Se),Nn(),Ce())}}class ws{constructor(e,t,r,i,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ws(r,t,Ce(),Ce(),Ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,t,r,i){this.be=e,this.removedTargetIds=t,this.key=r,this.De=i}}class cf{constructor(e,t){this.targetId=e,this.Ce=t}}class lf{constructor(e,t,r=ct.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class il{constructor(){this.ve=0,this.Fe=sl(),this.Me=ct.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ce(),t=Ce(),r=Ce();return this.Fe.forEach(((i,a)=>{switch(a){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:ce(38017,{changeType:a})}})),new ws(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=sl()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ne(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Zy{constructor(e){this.Ge=e,this.ze=new Map,this.je=Nn(),this.Je=no(),this.He=no(),this.Ye=new qe(Se)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:ce(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,i)=>{this.rt(i)&&t(i)}))}st(e){const t=e.targetId,r=e.Ce.count,i=this.ot(t);if(i){const a=i.target;if(Xa(a))if(r===0){const c=new oe(a.path);this.et(t,c,dt.newNoDocument(c,pe.min()))}else Ne(r===1,20013,{expectedCount:r});else{const c=this._t(t);if(c!==r){const p=this.ut(e),_=p?this.ct(p,e,c):1;if(_!==0){this.it(t);const T=_===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,T)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:a=0}=t;let c,p;try{c=nr(r).toUint8Array()}catch(_){if(_ instanceof xh)return yi("Decoding the base64 bloom filter in existence filter failed ("+_.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw _}try{p=new Pu(c,i,a)}catch(_){return yi(_ instanceof Yi?"BloomFilter error: ":"Applying bloom filter failed: ",_),null}return p.ge===0?null:p}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let i=0;return r.forEach((a=>{const c=this.Ge.ht(),p=`projects/${c.projectId}/databases/${c.database}/documents/${a.path.canonicalString()}`;e.mightContain(p)||(this.et(t,a,null),i++)})),i}Tt(e){const t=new Map;this.ze.forEach(((a,c)=>{const p=this.ot(c);if(p){if(a.current&&Xa(p.target)){const _=new oe(p.target.path);this.It(_).has(c)||this.Et(c,_)||this.et(c,_,dt.newNoDocument(_,e))}a.Be&&(t.set(c,a.ke()),a.qe())}}));let r=Ce();this.He.forEach(((a,c)=>{let p=!0;c.forEachWhile((_=>{const T=this.ot(_);return!T||T.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(r=r.add(a))})),this.je.forEach(((a,c)=>c.setReadTime(e)));const i=new Qo(e,t,this.Ye,this.je,r);return this.je=Nn(),this.Je=no(),this.He=no(),this.Ye=new qe(Se),i}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,t)?i.Qe(t,1):i.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new il,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Ye(Se),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Ye(Se),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||re("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new il),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function no(){return new qe(oe.comparator)}function sl(){return new qe(oe.comparator)}const e_={asc:"ASCENDING",desc:"DESCENDING"},t_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},n_={and:"AND",or:"OR"};class r_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ya(n,e){return n.useProto3Json||Bo(e)?e:{value:e}}function No(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function i_(n,e){return No(n,e.toTimestamp())}function cn(n){return Ne(!!n,49232),pe.fromTimestamp((function(t){const r=tr(t);return new Ue(r.seconds,r.nanos)})(n))}function ku(n,e){return Za(n,e).canonicalString()}function Za(n,e){const t=(function(i){return new Me(["projects",i.projectId,"databases",i.database])})(n).child("documents");return e===void 0?t:t.child(e)}function ff(n){const e=Me.fromString(n);return Ne(yf(e),10190,{key:e.toString()}),e}function eu(n,e){return ku(n.databaseId,e.path)}function Na(n,e){const t=ff(e);if(t.get(1)!==n.databaseId.projectId)throw new ee(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ee(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new oe(pf(t))}function df(n,e){return ku(n.databaseId,e)}function s_(n){const e=ff(n);return e.length===4?Me.emptyPath():pf(e)}function tu(n){return new Me(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function pf(n){return Ne(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function ol(n,e,t){return{name:eu(n,e),fields:t.value.mapValue.fields}}function o_(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(T){return T==="NO_CHANGE"?0:T==="ADD"?1:T==="REMOVE"?2:T==="CURRENT"?3:T==="RESET"?4:ce(39313,{state:T})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],a=(function(T,I){return T.useProto3Json?(Ne(I===void 0||typeof I=="string",58123),ct.fromBase64String(I||"")):(Ne(I===void 0||I instanceof Buffer||I instanceof Uint8Array,16193),ct.fromUint8Array(I||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,p=c&&(function(T){const I=T.code===void 0?z.UNKNOWN:uf(T.code);return new ee(I,T.message||"")})(c);t=new lf(r,i,a,p||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Na(n,r.document.name),a=cn(r.document.updateTime),c=r.document.createTime?cn(r.document.createTime):pe.min(),p=new bt({mapValue:{fields:r.document.fields}}),_=dt.newFoundDocument(i,a,c,p),T=r.targetIds||[],I=r.removedTargetIds||[];t=new go(T,I,_.key,_)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Na(n,r.document),a=r.readTime?cn(r.readTime):pe.min(),c=dt.newNoDocument(i,a),p=r.removedTargetIds||[];t=new go([],p,c.key,c)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Na(n,r.document),a=r.removedTargetIds||[];t=new go([],a,i,null)}else{if(!("filter"in e))return ce(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:a}=r,c=new Qy(i,a),p=r.targetId;t=new cf(p,c)}}return t}function a_(n,e){let t;if(e instanceof Es)t={update:ol(n,e.key,e.value)};else if(e instanceof Ko)t={delete:eu(n,e.key)};else if(e instanceof ar)t={update:ol(n,e.key,e.data),updateMask:m_(e.fieldMask)};else{if(!(e instanceof Wy))return ce(16599,{Vt:e.type});t={verify:eu(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(a,c){const p=c.transform;if(p instanceof hs)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof fs)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof ds)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof Do)return{fieldPath:c.field.canonicalString(),increment:p.Ae};throw ce(20930,{transform:c.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(i,a){return a.updateTime!==void 0?{updateTime:i_(i,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:ce(27497)})(n,e.precondition)),t}function u_(n,e){return n&&n.length>0?(Ne(e!==void 0,14353),n.map((t=>(function(i,a){let c=i.updateTime?cn(i.updateTime):cn(a);return c.isEqual(pe.min())&&(c=cn(a)),new $y(c,i.transformResults||[])})(t,e)))):[]}function c_(n,e){return{documents:[df(n,e.path)]}}function l_(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=df(n,i);const a=(function(T){if(T.length!==0)return mf(Wt.create(T,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const c=(function(T){if(T.length!==0)return T.map((I=>(function(x){return{field:oi(x.field),direction:d_(x.dir)}})(I)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const p=Ya(n,e.limit);return p!==null&&(t.structuredQuery.limit=p),e.startAt&&(t.structuredQuery.startAt=(function(T){return{before:T.inclusive,values:T.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(T){return{before:!T.inclusive,values:T.position}})(e.endAt)),{ft:t,parent:i}}function h_(n){let e=s_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){Ne(r===1,65062);const I=t.from[0];I.allDescendants?i=I.collectionId:e=e.child(I.collectionId)}let a=[];t.where&&(a=(function(D){const x=gf(D);return x instanceof Wt&&$h(x)?x.getFilters():[x]})(t.where));let c=[];t.orderBy&&(c=(function(D){return D.map((x=>(function($){return new Po(ai($.field),(function(Y){switch(Y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})($.direction))})(x)))})(t.orderBy));let p=null;t.limit&&(p=(function(D){let x;return x=typeof D=="object"?D.value:D,Bo(x)?null:x})(t.limit));let _=null;t.startAt&&(_=(function(D){const x=!!D.before,G=D.values||[];return new Ro(G,x)})(t.startAt));let T=null;return t.endAt&&(T=(function(D){const x=!D.before,G=D.values||[];return new Ro(G,x)})(t.endAt)),Py(e,i,c,a,p,"F",_,T)}function f_(n,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ce(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function gf(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=ai(t.unaryFilter.field);return Ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ai(t.unaryFilter.field);return Ke.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=ai(t.unaryFilter.field);return Ke.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=ai(t.unaryFilter.field);return Ke.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ce(61313);default:return ce(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Ke.create(ai(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ce(58110);default:return ce(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Wt.create(t.compositeFilter.filters.map((r=>gf(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ce(1026)}})(t.compositeFilter.op))})(n):ce(30097,{filter:n})}function d_(n){return e_[n]}function p_(n){return t_[n]}function g_(n){return n_[n]}function oi(n){return{fieldPath:n.canonicalString()}}function ai(n){return ut.fromServerFormat(n.fieldPath)}function mf(n){return n instanceof Ke?(function(t){if(t.op==="=="){if(Gc(t.value))return{unaryFilter:{field:oi(t.field),op:"IS_NAN"}};if(Wc(t.value))return{unaryFilter:{field:oi(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Gc(t.value))return{unaryFilter:{field:oi(t.field),op:"IS_NOT_NAN"}};if(Wc(t.value))return{unaryFilter:{field:oi(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:oi(t.field),op:p_(t.op),value:t.value}}})(n):n instanceof Wt?(function(t){const r=t.getFilters().map((i=>mf(i)));return r.length===1?r[0]:{compositeFilter:{op:g_(t.op),filters:r}}})(n):ce(54877,{filter:n})}function m_(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function yf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,t,r,i,a=pe.min(),c=pe.min(),p=ct.EMPTY_BYTE_STRING,_=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=p,this.expectedCount=_}withSequenceNumber(e){return new Gn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e){this.yt=e}}function __(n){const e=h_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ko(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(){this.Cn=new T_}addToCollectionParentIndex(e,t){return this.Cn.add(t),W.resolve()}getCollectionParents(e,t){return W.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return W.resolve()}deleteFieldIndex(e,t){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,t){return W.resolve()}getDocumentsMatchingTarget(e,t){return W.resolve(null)}getIndexType(e,t){return W.resolve(0)}getFieldIndexes(e,t){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,t){return W.resolve(er.min())}getMinOffsetFromCollectionGroup(e,t){return W.resolve(er.min())}updateCollectionGroup(e,t,r){return W.resolve()}updateIndexEntries(e,t){return W.resolve()}}class T_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Ye(Me.comparator),a=!i.has(r);return this.index[t]=i.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ye(Me.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},_f=41943040;class At{static withCacheSize(e){return new At(e,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */At.DEFAULT_COLLECTION_PERCENTILE=10,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,At.DEFAULT=new At(_f,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),At.DISABLED=new At(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Ei(0)}static cr(){return new Ei(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul="LruGarbageCollector",E_=1048576;function cl([n,e],[t,r]){const i=Se(n,t);return i===0?Se(e,r):i}class w_{constructor(e){this.Ir=e,this.buffer=new Ye(cl),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();cl(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class I_{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){re(ul,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ri(t)?re(ul,"Ignoring IndexedDB error during garbage collection: ",t):await Ci(t)}await this.Vr(3e5)}))}}class A_{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return W.resolve(qo.ce);const r=new w_(t);return this.mr.forEachTarget(e,(i=>r.Ar(i.sequenceNumber))).next((()=>this.mr.pr(e,(i=>r.Ar(i))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(al)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),al):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,i,a,c,p,_,T;const I=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((D=>(D>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${D}`),i=this.params.maximumSequenceNumbersToCollect):i=D,c=Date.now(),this.nthSequenceNumber(e,i)))).next((D=>(r=D,p=Date.now(),this.removeTargets(e,r,t)))).next((D=>(a=D,_=Date.now(),this.removeOrphanedDocuments(e,r)))).next((D=>(T=Date.now(),ii()<=be.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-I}ms
	Determined least recently used ${i} in `+(p-c)+`ms
	Removed ${a} targets in `+(_-p)+`ms
	Removed ${D} documents in `+(T-_)+`ms
Total Duration: ${T-I}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:a,documentsRemoved:D}))))}}function b_(n,e){return new A_(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(){this.changes=new kr((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,dt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?W.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(r=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(r!==null&&is(r.mutation,i,Dt.empty(),Ue.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,Ce()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=Ce()){const i=Ir();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,r).next((a=>{let c=Ji();return a.forEach(((p,_)=>{c=c.insert(p,_.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const r=Ir();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,Ce())))}populateOverlays(e,t,r){const i=[];return r.forEach((a=>{t.has(a)||i.push(a)})),this.documentOverlayCache.getOverlays(e,i).next((a=>{a.forEach(((c,p)=>{t.set(c,p)}))}))}computeViews(e,t,r,i){let a=Nn();const c=rs(),p=(function(){return rs()})();return t.forEach(((_,T)=>{const I=r.get(T.key);i.has(T.key)&&(I===void 0||I.mutation instanceof ar)?a=a.insert(T.key,T):I!==void 0?(c.set(T.key,I.mutation.getFieldMask()),is(I.mutation,T,I.mutation.getFieldMask(),Ue.now())):c.set(T.key,Dt.empty())})),this.recalculateAndSaveOverlays(e,a).next((_=>(_.forEach(((T,I)=>c.set(T,I))),t.forEach(((T,I)=>p.set(T,new C_(I,c.get(T)??null)))),p)))}recalculateAndSaveOverlays(e,t){const r=rs();let i=new qe(((c,p)=>c-p)),a=Ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const p of c)p.keys().forEach((_=>{const T=t.get(_);if(T===null)return;let I=r.get(_)||Dt.empty();I=p.applyToLocalView(T,I),r.set(_,I);const D=(i.get(p.batchId)||Ce()).add(_);i=i.insert(p.batchId,D)}))})).next((()=>{const c=[],p=i.getReverseIterator();for(;p.hasNext();){const _=p.getNext(),T=_.key,I=_.value,D=Zh();I.forEach((x=>{if(!a.has(x)){const G=of(t.get(x),r.get(x));G!==null&&D.set(x,G),a=a.add(x)}})),c.push(this.documentOverlayCache.saveOverlays(e,T,D))}return W.waitFor(c)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,i){return(function(c){return oe.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Kh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next((a=>{const c=i-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-a.size):W.resolve(Ir());let p=as,_=a;return c.next((T=>W.forEach(T,((I,D)=>(p<D.largestBatchId&&(p=D.largestBatchId),a.get(I)?W.resolve():this.remoteDocumentCache.getEntry(e,I).next((x=>{_=_.insert(I,x)}))))).next((()=>this.populateOverlays(e,T,a))).next((()=>this.computeViews(e,_,T,Ce()))).next((I=>({batchId:p,changes:Yh(I)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new oe(t)).next((r=>{let i=Ji();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const a=t.collectionGroup;let c=Ji();return this.indexManager.getCollectionParents(e,a).next((p=>W.forEach(p,(_=>{const T=(function(D,x){return new Ts(x,null,D.explicitOrderBy.slice(),D.filters.slice(),D.limit,D.limitType,D.startAt,D.endAt)})(t,_.child(a));return this.getDocumentsMatchingCollectionQuery(e,T,r,i).next((I=>{I.forEach(((D,x)=>{c=c.insert(D,x)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,r,i){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((c=>(a=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,i)))).next((c=>{a.forEach(((_,T)=>{const I=T.getKey();c.get(I)===null&&(c=c.insert(I,dt.newInvalidDocument(I)))}));let p=Ji();return c.forEach(((_,T)=>{const I=a.get(_);I!==void 0&&is(I.mutation,T,Dt.empty(),Ue.now()),zo(t,T)&&(p=p.insert(_,T))})),p}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return W.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:cn(i.createTime)}})(t)),W.resolve()}getNamedQuery(e,t){return W.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(i){return{name:i.name,query:__(i.bundledQuery),readTime:cn(i.readTime)}})(t)),W.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(){this.overlays=new qe(oe.comparator),this.qr=new Map}getOverlay(e,t){return W.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Ir();return W.forEach(t,(i=>this.getOverlay(e,i).next((a=>{a!==null&&r.set(i,a)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((i,a)=>{this.St(e,t,a)})),W.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach((a=>this.overlays=this.overlays.remove(a))),this.qr.delete(r)),W.resolve()}getOverlaysForCollection(e,t,r){const i=Ir(),a=t.length+1,c=new oe(t.child("")),p=this.overlays.getIteratorFrom(c);for(;p.hasNext();){const _=p.getNext().value,T=_.getKey();if(!t.isPrefixOf(T.path))break;T.path.length===a&&_.largestBatchId>r&&i.set(_.getKey(),_)}return W.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let a=new qe(((T,I)=>T-I));const c=this.overlays.getIterator();for(;c.hasNext();){const T=c.getNext().value;if(T.getKey().getCollectionGroup()===t&&T.largestBatchId>r){let I=a.get(T.largestBatchId);I===null&&(I=Ir(),a=a.insert(T.largestBatchId,I)),I.set(T.getKey(),T)}}const p=Ir(),_=a.getIterator();for(;_.hasNext()&&(_.getNext().value.forEach(((T,I)=>p.set(T,I))),!(p.size()>=i)););return W.resolve(p)}St(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const c=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,c)}this.overlays=this.overlays.insert(r.key,new Ky(t,r));let a=this.qr.get(t);a===void 0&&(a=Ce(),this.qr.set(t,a)),this.qr.set(t,a.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(){this.sessionToken=ct.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,W.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(){this.Qr=new Ye(it.$r),this.Ur=new Ye(it.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new it(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Gr(new it(e,t))}zr(e,t){e.forEach((r=>this.removeReference(r,t)))}jr(e){const t=new oe(new Me([])),r=new it(t,e),i=new it(t,e+1),a=[];return this.Ur.forEachInRange([r,i],(c=>{this.Gr(c),a.push(c.key)})),a}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new oe(new Me([])),r=new it(t,e),i=new it(t,e+1);let a=Ce();return this.Ur.forEachInRange([r,i],(c=>{a=a.add(c.key)})),a}containsKey(e){const t=new it(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class it{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return oe.comparator(e.key,t.key)||Se(e.Yr,t.Yr)}static Kr(e,t){return Se(e.Yr,t.Yr)||oe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Ye(it.$r)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const a=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new Gy(a,t,r,i);this.mutationQueue.push(c);for(const p of i)this.Zr=this.Zr.add(new it(p.key,a)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return W.resolve(c)}lookupMutationBatch(e,t){return W.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.ei(r),a=i<0?0:i;return W.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?wu:this.tr-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new it(t,0),i=new it(t,Number.POSITIVE_INFINITY),a=[];return this.Zr.forEachInRange([r,i],(c=>{const p=this.Xr(c.Yr);a.push(p)})),W.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ye(Se);return t.forEach((i=>{const a=new it(i,0),c=new it(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([a,c],(p=>{r=r.add(p.Yr)}))})),W.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let a=r;oe.isDocumentKey(a)||(a=a.child(""));const c=new it(new oe(a),0);let p=new Ye(Se);return this.Zr.forEachWhile((_=>{const T=_.key.path;return!!r.isPrefixOf(T)&&(T.length===i&&(p=p.add(_.Yr)),!0)}),c),W.resolve(this.ti(p))}ti(e){const t=[];return e.forEach((r=>{const i=this.Xr(r);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){Ne(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return W.forEach(t.mutations,(i=>{const a=new it(i.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,t){const r=new it(t,0),i=this.Zr.firstAfterOrEqual(r);return W.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e){this.ri=e,this.docs=(function(){return new qe(oe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),a=i?i.size:0,c=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:c}),this.size+=c-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return W.resolve(r?r.document.mutableCopy():dt.newInvalidDocument(t))}getEntries(e,t){let r=Nn();return t.forEach((i=>{const a=this.docs.get(i);r=r.insert(i,a?a.document.mutableCopy():dt.newInvalidDocument(i))})),W.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let a=Nn();const c=t.path,p=new oe(c.child("__id-9223372036854775808__")),_=this.docs.getIteratorFrom(p);for(;_.hasNext();){const{key:T,value:{document:I}}=_.getNext();if(!c.isPrefixOf(T.path))break;T.path.length>c.length+1||ay(oy(I),r)<=0||(i.has(I.key)||zo(t,I))&&(a=a.insert(I.key,I.mutableCopy()))}return W.resolve(a)}getAllFromCollectionGroup(e,t,r,i){ce(9500)}ii(e,t){return W.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new V_(this)}getSize(e){return W.resolve(this.size)}}class V_ extends S_{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?t.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)})),W.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e){this.persistence=e,this.si=new kr((t=>bu(t)),Su),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.oi=0,this._i=new Du,this.targetCount=0,this.ai=Ei.ur()}forEachTarget(e,t){return this.si.forEach(((r,i)=>t(i))),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),W.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Ei(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,W.resolve()}updateTargetData(e,t){return this.Pr(t),W.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,t,r){let i=0;const a=[];return this.si.forEach(((c,p)=>{p.sequenceNumber<=t&&r.get(p.targetId)===null&&(this.si.delete(c),a.push(this.removeMatchingKeysForTargetId(e,p.targetId)),i++)})),W.waitFor(a).next((()=>i))}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return W.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),W.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const i=this.persistence.referenceDelegate,a=[];return i&&t.forEach((c=>{a.push(i.markPotentiallyOrphaned(e,c))})),W.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),W.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return W.resolve(r)}containsKey(e,t){return W.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e,t){this.ui={},this.overlays={},this.ci=new qo(0),this.li=!1,this.li=!0,this.hi=new D_,this.referenceDelegate=e(this),this.Pi=new O_(this),this.indexManager=new v_,this.remoteDocumentCache=(function(i){return new x_(i)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new y_(t),this.Ii=new P_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new k_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new N_(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){re("MemoryPersistence","Starting transaction:",e);const i=new M_(this.ci.next());return this.referenceDelegate.Ei(),r(i).next((a=>this.referenceDelegate.di(i).next((()=>a)))).toPromise().then((a=>(i.raiseOnCommittedEvent(),a)))}Ai(e,t){return W.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,t))))}}class M_ extends cy{constructor(e){super(),this.currentSequenceNumber=e}}class Nu{constructor(e){this.persistence=e,this.Ri=new Du,this.Vi=null}static mi(e){return new Nu(e)}get fi(){if(this.Vi)return this.Vi;throw ce(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),W.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),W.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),W.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((i=>this.fi.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((a=>this.fi.add(a.toString())))})).next((()=>r.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.fi,(r=>{const i=oe.fromPath(r);return this.gi(e,i).next((a=>{a||t.removeEntry(i,pe.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return W.or([()=>W.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class xo{constructor(e,t){this.persistence=e,this.pi=new kr((r=>fy(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=b_(this,t)}static mi(e,t){return new xo(e,t)}Ei(){}di(e){return W.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((i=>r+i))))}wr(e){let t=0;return this.pr(e,(r=>{t++})).next((()=>t))}pr(e,t){return W.forEach(this.pi,((r,i)=>this.br(e,r,i).next((a=>a?W.resolve():t(i)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),a=i.newChangeBuffer();return i.ii(e,(c=>this.br(e,c,t).next((p=>{p||(r++,a.removeEntry(c,pe.min()))})))).next((()=>a.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),W.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),W.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),W.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),W.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ho(e.data.value)),t}br(e,t,r){return W.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.pi.get(t);return W.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=i}static As(e,t){let r=Ce(),i=Ce();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:i=i.add(a.doc.key)}return new xu(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Pd()?8:ly(pt())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,i){const a={result:null};return this.ys(e,t).next((c=>{a.result=c})).next((()=>{if(!a.result)return this.ws(e,t,i,r).next((c=>{a.result=c}))})).next((()=>{if(a.result)return;const c=new L_;return this.Ss(e,t,c).next((p=>{if(a.result=p,this.Vs)return this.bs(e,t,c,p.size)}))})).next((()=>a.result))}bs(e,t,r,i){return r.documentReadCount<this.fs?(ii()<=be.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",si(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),W.resolve()):(ii()<=be.DEBUG&&re("QueryEngine","Query:",si(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(ii()<=be.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",si(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,un(t))):W.resolve())}ys(e,t){if(Jc(t))return W.resolve(null);let r=un(t);return this.indexManager.getIndexType(e,r).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=ko(t,null,"F"),r=un(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((a=>{const c=Ce(...a);return this.ps.getDocuments(e,c).next((p=>this.indexManager.getMinOffset(e,r).next((_=>{const T=this.Ds(t,p);return this.Cs(t,T,c,_.readTime)?this.ys(e,ko(t,null,"F")):this.vs(e,T,t,_)}))))})))))}ws(e,t,r,i){return Jc(t)||i.isEqual(pe.min())?W.resolve(null):this.ps.getDocuments(e,r).next((a=>{const c=this.Ds(t,a);return this.Cs(t,c,r,i)?W.resolve(null):(ii()<=be.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),si(t)),this.vs(e,c,t,sy(i,as)).next((p=>p)))}))}Ds(e,t){let r=new Ye(Xh(e));return t.forEach(((i,a)=>{zo(e,a)&&(r=r.add(a))})),r}Cs(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(i)>0)}Ss(e,t,r){return ii()<=be.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",si(t)),this.ps.getDocumentsMatchingQuery(e,t,er.min(),r)}vs(e,t,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next((a=>(t.forEach((c=>{a=a.insert(c.key,c)})),a)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu="LocalStore",U_=3e8;class j_{constructor(e,t,r,i){this.persistence=e,this.Fs=t,this.serializer=i,this.Ms=new qe(Se),this.xs=new kr((a=>bu(a)),Su),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new R_(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function q_(n,e,t,r){return new j_(n,e,t,r)}async function Tf(n,e){const t=ge(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next((a=>(i=a,t.Bs(e),t.mutationQueue.getAllMutationBatches(r)))).next((a=>{const c=[],p=[];let _=Ce();for(const T of i){c.push(T.batchId);for(const I of T.mutations)_=_.add(I.key)}for(const T of a){p.push(T.batchId);for(const I of T.mutations)_=_.add(I.key)}return t.localDocuments.getDocuments(r,_).next((T=>({Ls:T,removedBatchIds:c,addedBatchIds:p})))}))}))}function B_(n,e){const t=ge(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const i=e.batch.keys(),a=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(p,_,T,I){const D=T.batch,x=D.keys();let G=W.resolve();return x.forEach(($=>{G=G.next((()=>I.getEntry(_,$))).next((K=>{const Y=T.docVersions.get($);Ne(Y!==null,48541),K.version.compareTo(Y)<0&&(D.applyToRemoteDocument(K,T),K.isValidDocument()&&(K.setReadTime(T.commitVersion),I.addEntry(K)))}))})),G.next((()=>p.mutationQueue.removeMutationBatch(_,D)))})(t,r,e,a).next((()=>a.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(p){let _=Ce();for(let T=0;T<p.mutationResults.length;++T)p.mutationResults[T].transformResults.length>0&&(_=_.add(p.batch.mutations[T].key));return _})(e)))).next((()=>t.localDocuments.getDocuments(r,i)))}))}function Ef(n){const e=ge(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function $_(n,e){const t=ge(n),r=e.snapshotVersion;let i=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const c=t.Ns.newChangeBuffer({trackRemovals:!0});i=t.Ms;const p=[];e.targetChanges.forEach(((I,D)=>{const x=i.get(D);if(!x)return;p.push(t.Pi.removeMatchingKeys(a,I.removedDocuments,D).next((()=>t.Pi.addMatchingKeys(a,I.addedDocuments,D))));let G=x.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(D)!==null?G=G.withResumeToken(ct.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):I.resumeToken.approximateByteSize()>0&&(G=G.withResumeToken(I.resumeToken,r)),i=i.insert(D,G),(function(K,Y,Z){return K.resumeToken.approximateByteSize()===0||Y.snapshotVersion.toMicroseconds()-K.snapshotVersion.toMicroseconds()>=U_?!0:Z.addedDocuments.size+Z.modifiedDocuments.size+Z.removedDocuments.size>0})(x,G,I)&&p.push(t.Pi.updateTargetData(a,G))}));let _=Nn(),T=Ce();if(e.documentUpdates.forEach((I=>{e.resolvedLimboDocuments.has(I)&&p.push(t.persistence.referenceDelegate.updateLimboDocument(a,I))})),p.push(H_(a,c,e.documentUpdates).next((I=>{_=I.ks,T=I.qs}))),!r.isEqual(pe.min())){const I=t.Pi.getLastRemoteSnapshotVersion(a).next((D=>t.Pi.setTargetsMetadata(a,a.currentSequenceNumber,r)));p.push(I)}return W.waitFor(p).next((()=>c.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,_,T))).next((()=>_))})).then((a=>(t.Ms=i,a)))}function H_(n,e,t){let r=Ce(),i=Ce();return t.forEach((a=>r=r.add(a))),e.getEntries(n,r).next((a=>{let c=Nn();return t.forEach(((p,_)=>{const T=a.get(p);_.isFoundDocument()!==T.isFoundDocument()&&(i=i.add(p)),_.isNoDocument()&&_.version.isEqual(pe.min())?(e.removeEntry(p,_.readTime),c=c.insert(p,_)):!T.isValidDocument()||_.version.compareTo(T.version)>0||_.version.compareTo(T.version)===0&&T.hasPendingWrites?(e.addEntry(_),c=c.insert(p,_)):re(Vu,"Ignoring outdated watch update for ",p,". Current version:",T.version," Watch version:",_.version)})),{ks:c,qs:i}}))}function z_(n,e){const t=ge(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=wu),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function W_(n,e){const t=ge(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let i;return t.Pi.getTargetData(r,e).next((a=>a?(i=a,W.resolve(i)):t.Pi.allocateTargetId(r).next((c=>(i=new Gn(e,c,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,i).next((()=>i)))))))})).then((r=>{const i=t.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r}))}async function nu(n,e,t){const r=ge(n),i=r.Ms.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,(c=>r.persistence.referenceDelegate.removeTarget(c,i)))}catch(c){if(!Ri(c))throw c;re(Vu,`Failed to update sequence numbers for target ${e}: ${c}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function ll(n,e,t){const r=ge(n);let i=pe.min(),a=Ce();return r.persistence.runTransaction("Execute query","readwrite",(c=>(function(_,T,I){const D=ge(_),x=D.xs.get(I);return x!==void 0?W.resolve(D.Ms.get(x)):D.Pi.getTargetData(T,I)})(r,c,un(e)).next((p=>{if(p)return i=p.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(c,p.targetId).next((_=>{a=_}))})).next((()=>r.Fs.getDocumentsMatchingQuery(c,e,t?i:pe.min(),t?a:Ce()))).next((p=>(G_(r,Dy(e),p),{documents:p,Qs:a})))))}function G_(n,e,t){let r=n.Os.get(e)||pe.min();t.forEach(((i,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)})),n.Os.set(e,r)}class hl{constructor(){this.activeTargetIds=Ly()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class K_{constructor(){this.Mo=new hl,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new hl,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl="ConnectivityMonitor";class dl{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){re(fl,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){re(fl,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ro=null;function ru(){return ro===null?ro=(function(){return 268435456+Math.round(2147483648*Math.random())})():ro++,"0x"+ro.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa="RestConnection",X_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class J_{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===So?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,t,r,i,a){const c=ru(),p=this.zo(e,t.toUriEncodedString());re(xa,`Sending RPC '${e}' ${c}:`,p,r);const _={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(_,i,a);const{host:T}=new URL(p),I=Ii(T);return this.Jo(e,p,_,r,I).then((D=>(re(xa,`Received RPC '${e}' ${c}: `,D),D)),(D=>{throw yi(xa,`RPC '${e}' ${c} failed with error: `,D,"url: ",p,"request:",r),D}))}Ho(e,t,r,i,a,c){return this.Go(e,t,r,i,a)}jo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Si})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,a)=>e[a]=i)),r&&r.headers.forEach(((i,a)=>e[a]=i))}zo(e,t){const r=X_[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="WebChannelConnection";class Z_ extends J_{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,i,a){const c=ru();return new Promise(((p,_)=>{const T=new wh;T.setWithCredentials(!0),T.listenOnce(Ih.COMPLETE,(()=>{try{switch(T.getLastErrorCode()){case lo.NO_ERROR:const D=T.getResponseJson();re(ht,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(D)),p(D);break;case lo.TIMEOUT:re(ht,`RPC '${e}' ${c} timed out`),_(new ee(z.DEADLINE_EXCEEDED,"Request time out"));break;case lo.HTTP_ERROR:const x=T.getStatus();if(re(ht,`RPC '${e}' ${c} failed with status:`,x,"response text:",T.getResponseText()),x>0){let G=T.getResponseJson();Array.isArray(G)&&(G=G[0]);const $=G?.error;if($&&$.status&&$.message){const K=(function(Z){const ve=Z.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(ve)>=0?ve:z.UNKNOWN})($.status);_(new ee(K,$.message))}else _(new ee(z.UNKNOWN,"Server responded with status "+T.getStatus()))}else _(new ee(z.UNAVAILABLE,"Connection failed."));break;default:ce(9055,{l_:e,streamId:c,h_:T.getLastErrorCode(),P_:T.getLastError()})}}finally{re(ht,`RPC '${e}' ${c} completed.`)}}));const I=JSON.stringify(i);re(ht,`RPC '${e}' ${c} sending request:`,i),T.send(t,"POST",I,r,15)}))}T_(e,t,r){const i=ru(),a=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=Sh(),p=bh(),_={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},T=this.longPollingOptions.timeoutSeconds;T!==void 0&&(_.longPollingTimeout=Math.round(1e3*T)),this.useFetchStreams&&(_.useFetchStreams=!0),this.jo(_.initMessageHeaders,t,r),_.encodeInitMessageHeaders=!0;const I=a.join("");re(ht,`Creating RPC '${e}' stream ${i}: ${I}`,_);const D=c.createWebChannel(I,_);this.I_(D);let x=!1,G=!1;const $=new Y_({Yo:Y=>{G?re(ht,`Not sending because RPC '${e}' stream ${i} is closed:`,Y):(x||(re(ht,`Opening RPC '${e}' stream ${i} transport.`),D.open(),x=!0),re(ht,`RPC '${e}' stream ${i} sending:`,Y),D.send(Y))},Zo:()=>D.close()}),K=(Y,Z,ve)=>{Y.listen(Z,(Te=>{try{ve(Te)}catch(je){setTimeout((()=>{throw je}),0)}}))};return K(D,Xi.EventType.OPEN,(()=>{G||(re(ht,`RPC '${e}' stream ${i} transport opened.`),$.o_())})),K(D,Xi.EventType.CLOSE,(()=>{G||(G=!0,re(ht,`RPC '${e}' stream ${i} transport closed`),$.a_(),this.E_(D))})),K(D,Xi.EventType.ERROR,(Y=>{G||(G=!0,yi(ht,`RPC '${e}' stream ${i} transport errored. Name:`,Y.name,"Message:",Y.message),$.a_(new ee(z.UNAVAILABLE,"The operation could not be completed")))})),K(D,Xi.EventType.MESSAGE,(Y=>{if(!G){const Z=Y.data[0];Ne(!!Z,16349);const ve=Z,Te=ve?.error||ve[0]?.error;if(Te){re(ht,`RPC '${e}' stream ${i} received error:`,Te);const je=Te.status;let Ct=(function(C){const S=Ge[C];if(S!==void 0)return uf(S)})(je),et=Te.message;Ct===void 0&&(Ct=z.INTERNAL,et="Unknown error status: "+je+" with message "+Te.message),G=!0,$.a_(new ee(Ct,et)),D.close()}else re(ht,`RPC '${e}' stream ${i} received:`,Z),$.u_(Z)}})),K(p,Ah.STAT_EVENT,(Y=>{Y.stat===za.PROXY?re(ht,`RPC '${e}' stream ${i} detected buffering proxy`):Y.stat===za.NOPROXY&&re(ht,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{$.__()}),0),$}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function Va(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(n){return new r_(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,t,r=1e3,i=1.5,a=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=i,this.R_=a,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-r);i>0&&re("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl="PersistentStream";class If{constructor(e,t,r,i,a,c,p,_){this.Mi=e,this.S_=r,this.b_=i,this.connection=a,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=p,this.listener=_,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new wf(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===z.RESOURCE_EXHAUSTED?(kn(t.toString()),kn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.D_===t&&this.G_(r,i)}),(r=>{e((()=>{const i=new ee(z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)}))}))}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{r((()=>this.z_(i)))})),this.stream.onMessage((i=>{r((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return re(pl,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(re(pl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class ev extends If{constructor(e,t,r,i,a,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,c),this.serializer=a}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=o_(this.serializer,e),r=(function(a){if(!("targetChange"in a))return pe.min();const c=a.targetChange;return c.targetIds&&c.targetIds.length?pe.min():c.readTime?cn(c.readTime):pe.min()})(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=tu(this.serializer),t.addTarget=(function(a,c){let p;const _=c.target;if(p=Xa(_)?{documents:c_(a,_)}:{query:l_(a,_).ft},p.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){p.resumeToken=hf(a,c.resumeToken);const T=Ya(a,c.expectedCount);T!==null&&(p.expectedCount=T)}else if(c.snapshotVersion.compareTo(pe.min())>0){p.readTime=No(a,c.snapshotVersion.toTimestamp());const T=Ya(a,c.expectedCount);T!==null&&(p.expectedCount=T)}return p})(this.serializer,e);const r=f_(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=tu(this.serializer),t.removeTarget=e,this.q_(t)}}class tv extends If{constructor(e,t,r,i,a,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,c),this.serializer=a}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Ne(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ne(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ne(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=u_(e.writeResults,e.commitTime),r=cn(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=tu(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>a_(this.serializer,r)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{}class rv extends nv{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new ee(z.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Go(e,Za(t,r),i,a,c))).catch((a=>{throw a.name==="FirebaseError"?(a.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ee(z.UNKNOWN,a.toString())}))}Ho(e,t,r,i,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,p])=>this.connection.Ho(e,Za(t,r),i,c,p,a))).catch((c=>{throw c.name==="FirebaseError"?(c.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ee(z.UNKNOWN,c.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class iv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(kn(t),this.aa=!1):re("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr="RemoteStore";class sv{constructor(e,t,r,i,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=a,this.Aa.Oo((c=>{r.enqueueAndForget((async()=>{Dr(this)&&(re(Pr,"Restarting streams for network reachability change."),await(async function(_){const T=ge(_);T.Ea.add(4),await Is(T),T.Ra.set("Unknown"),T.Ea.delete(4),await Jo(T)})(this))}))})),this.Ra=new iv(r,i)}}async function Jo(n){if(Dr(n))for(const e of n.da)await e(!0)}async function Is(n){for(const e of n.da)await e(!1)}function Af(n,e){const t=ge(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Fu(t)?Lu(t):Pi(t).O_()&&Mu(t,e))}function Ou(n,e){const t=ge(n),r=Pi(t);t.Ia.delete(e),r.O_()&&bf(t,e),t.Ia.size===0&&(r.O_()?r.L_():Dr(t)&&t.Ra.set("Unknown"))}function Mu(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Pi(n).Y_(e)}function bf(n,e){n.Va.Ue(e),Pi(n).Z_(e)}function Lu(n){n.Va=new Zy({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Pi(n).start(),n.Ra.ua()}function Fu(n){return Dr(n)&&!Pi(n).x_()&&n.Ia.size>0}function Dr(n){return ge(n).Ea.size===0}function Sf(n){n.Va=void 0}async function ov(n){n.Ra.set("Online")}async function av(n){n.Ia.forEach(((e,t)=>{Mu(n,e)}))}async function uv(n,e){Sf(n),Fu(n)?(n.Ra.ha(e),Lu(n)):n.Ra.set("Unknown")}async function cv(n,e,t){if(n.Ra.set("Online"),e instanceof lf&&e.state===2&&e.cause)try{await(async function(i,a){const c=a.cause;for(const p of a.targetIds)i.Ia.has(p)&&(await i.remoteSyncer.rejectListen(p,c),i.Ia.delete(p),i.Va.removeTarget(p))})(n,e)}catch(r){re(Pr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Vo(n,r)}else if(e instanceof go?n.Va.Ze(e):e instanceof cf?n.Va.st(e):n.Va.tt(e),!t.isEqual(pe.min()))try{const r=await Ef(n.localStore);t.compareTo(r)>=0&&await(function(a,c){const p=a.Va.Tt(c);return p.targetChanges.forEach(((_,T)=>{if(_.resumeToken.approximateByteSize()>0){const I=a.Ia.get(T);I&&a.Ia.set(T,I.withResumeToken(_.resumeToken,c))}})),p.targetMismatches.forEach(((_,T)=>{const I=a.Ia.get(_);if(!I)return;a.Ia.set(_,I.withResumeToken(ct.EMPTY_BYTE_STRING,I.snapshotVersion)),bf(a,_);const D=new Gn(I.target,_,T,I.sequenceNumber);Mu(a,D)})),a.remoteSyncer.applyRemoteEvent(p)})(n,t)}catch(r){re(Pr,"Failed to raise snapshot:",r),await Vo(n,r)}}async function Vo(n,e,t){if(!Ri(e))throw e;n.Ea.add(1),await Is(n),n.Ra.set("Offline"),t||(t=()=>Ef(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{re(Pr,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Jo(n)}))}function Cf(n,e){return e().catch((t=>Vo(n,t,e)))}async function Yo(n){const e=ge(n),t=ir(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:wu;for(;lv(e);)try{const i=await z_(e.localStore,r);if(i===null){e.Ta.length===0&&t.L_();break}r=i.batchId,hv(e,i)}catch(i){await Vo(e,i)}Rf(e)&&Pf(e)}function lv(n){return Dr(n)&&n.Ta.length<10}function hv(n,e){n.Ta.push(e);const t=ir(n);t.O_()&&t.X_&&t.ea(e.mutations)}function Rf(n){return Dr(n)&&!ir(n).x_()&&n.Ta.length>0}function Pf(n){ir(n).start()}async function fv(n){ir(n).ra()}async function dv(n){const e=ir(n);for(const t of n.Ta)e.ea(t.mutations)}async function pv(n,e,t){const r=n.Ta.shift(),i=Ru.from(r,e,t);await Cf(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),await Yo(n)}async function gv(n,e){e&&ir(n).X_&&await(async function(r,i){if((function(c){return Xy(c)&&c!==z.ABORTED})(i.code)){const a=r.Ta.shift();ir(r).B_(),await Cf(r,(()=>r.remoteSyncer.rejectFailedWrite(a.batchId,i))),await Yo(r)}})(n,e),Rf(n)&&Pf(n)}async function gl(n,e){const t=ge(n);t.asyncQueue.verifyOperationInProgress(),re(Pr,"RemoteStore received new credentials");const r=Dr(t);t.Ea.add(3),await Is(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Jo(t)}async function mv(n,e){const t=ge(n);e?(t.Ea.delete(2),await Jo(t)):e||(t.Ea.add(2),await Is(t),t.Ra.set("Unknown"))}function Pi(n){return n.ma||(n.ma=(function(t,r,i){const a=ge(t);return a.sa(),new ev(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,i)})(n.datastore,n.asyncQueue,{Xo:ov.bind(null,n),t_:av.bind(null,n),r_:uv.bind(null,n),H_:cv.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),Fu(n)?Lu(n):n.Ra.set("Unknown")):(await n.ma.stop(),Sf(n))}))),n.ma}function ir(n){return n.fa||(n.fa=(function(t,r,i){const a=ge(t);return a.sa(),new tv(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,i)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:fv.bind(null,n),r_:gv.bind(null,n),ta:dv.bind(null,n),na:pv.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await Yo(n)):(await n.fa.stop(),n.Ta.length>0&&(re(Pr,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,t,r,i,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=a,this.deferred=new Yn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,a){const c=Date.now()+r,p=new Uu(e,t,c,i,a);return p.start(r),p}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ju(n,e){if(kn("AsyncQueue",`${e}: ${n}`),Ri(n))return new ee(z.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{static emptySet(e){return new fi(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||oe.comparator(t.key,r.key):(t,r)=>oe.comparator(t.key,r.key),this.keyedMap=Ji(),this.sortedSet=new qe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof fi)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,a=r.getNext().key;if(!i.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new fi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(){this.ga=new qe(oe.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):ce(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class wi{constructor(e,t,r,i,a,c,p,_,T){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=a,this.fromCache=c,this.syncStateChanged=p,this.excludesMetadataChanges=_,this.hasCachedResults=T}static fromInitialDocuments(e,t,r,i,a){const c=[];return t.forEach((p=>{c.push({type:0,doc:p})})),new wi(e,t,fi.emptySet(t),c,r,i,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ho(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class _v{constructor(){this.queries=yl(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const i=ge(t),a=i.queries;i.queries=yl(),a.forEach(((c,p)=>{for(const _ of p.Sa)_.onError(r)}))})(this,new ee(z.ABORTED,"Firestore shutting down"))}}function yl(){return new kr((n=>Qh(n)),Ho)}async function vv(n,e){const t=ge(n);let r=3;const i=e.query;let a=t.queries.get(i);a?!a.ba()&&e.Da()&&(r=2):(a=new yv,r=e.Da()?0:1);try{switch(r){case 0:a.wa=await t.onListen(i,!0);break;case 1:a.wa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(c){const p=ju(c,`Initialization of query '${si(e.query)}' failed`);return void e.onError(p)}t.queries.set(i,a),a.Sa.push(e),e.va(t.onlineState),a.wa&&e.Fa(a.wa)&&qu(t)}async function Tv(n,e){const t=ge(n),r=e.query;let i=3;const a=t.queries.get(r);if(a){const c=a.Sa.indexOf(e);c>=0&&(a.Sa.splice(c,1),a.Sa.length===0?i=e.Da()?0:1:!a.ba()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Ev(n,e){const t=ge(n);let r=!1;for(const i of e){const a=i.query,c=t.queries.get(a);if(c){for(const p of c.Sa)p.Fa(i)&&(r=!0);c.wa=i}}r&&qu(t)}function wv(n,e,t){const r=ge(n),i=r.queries.get(e);if(i)for(const a of i.Sa)a.onError(t);r.queries.delete(e)}function qu(n){n.Ca.forEach((e=>{e.next()}))}var iu,_l;(_l=iu||(iu={})).Ma="default",_l.Cache="cache";class Iv{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new wi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=wi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==iu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e){this.key=e}}class Df{constructor(e){this.key=e}}class Av{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ce(),this.mutatedKeys=Ce(),this.eu=Xh(e),this.tu=new fi(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new ml,i=t?t.tu:this.tu;let a=t?t.mutatedKeys:this.mutatedKeys,c=i,p=!1;const _=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,T=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((I,D)=>{const x=i.get(I),G=zo(this.query,D)?D:null,$=!!x&&this.mutatedKeys.has(x.key),K=!!G&&(G.hasLocalMutations||this.mutatedKeys.has(G.key)&&G.hasCommittedMutations);let Y=!1;x&&G?x.data.isEqual(G.data)?$!==K&&(r.track({type:3,doc:G}),Y=!0):this.su(x,G)||(r.track({type:2,doc:G}),Y=!0,(_&&this.eu(G,_)>0||T&&this.eu(G,T)<0)&&(p=!0)):!x&&G?(r.track({type:0,doc:G}),Y=!0):x&&!G&&(r.track({type:1,doc:x}),Y=!0,(_||T)&&(p=!0)),Y&&(G?(c=c.add(G),a=K?a.add(I):a.delete(I)):(c=c.delete(I),a=a.delete(I)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const I=this.query.limitType==="F"?c.last():c.first();c=c.delete(I.key),a=a.delete(I.key),r.track({type:1,doc:I})}return{tu:c,iu:r,Cs:p,mutatedKeys:a}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const a=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort(((I,D)=>(function(G,$){const K=Y=>{switch(Y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce(20277,{Rt:Y})}};return K(G)-K($)})(I.type,D.type)||this.eu(I.doc,D.doc))),this.ou(r),i=i??!1;const p=t&&!i?this._u():[],_=this.Xa.size===0&&this.current&&!i?1:0,T=_!==this.Za;return this.Za=_,c.length!==0||T?{snapshot:new wi(this.query,e.tu,a,c,e.mutatedKeys,_===0,T,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ml,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ce(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const t=[];return e.forEach((r=>{this.Xa.has(r)||t.push(new Df(r))})),this.Xa.forEach((r=>{e.has(r)||t.push(new kf(r))})),t}cu(e){this.Ya=e.Qs,this.Xa=Ce();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return wi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Bu="SyncEngine";class bv{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Sv{constructor(e){this.key=e,this.hu=!1}}class Cv{constructor(e,t,r,i,a,c){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=a,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new kr((p=>Qh(p)),Ho),this.Iu=new Map,this.Eu=new Set,this.du=new qe(oe.comparator),this.Au=new Map,this.Ru=new Du,this.Vu={},this.mu=new Map,this.fu=Ei.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Rv(n,e,t=!0){const r=Lf(n);let i;const a=r.Tu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),i=a.view.lu()):i=await Nf(r,e,t,!0),i}async function Pv(n,e){const t=Lf(n);await Nf(t,e,!0,!1)}async function Nf(n,e,t,r){const i=await W_(n.localStore,un(e)),a=i.targetId,c=n.sharedClientState.addLocalQueryTarget(a,t);let p;return r&&(p=await kv(n,e,a,c==="current",i.resumeToken)),n.isPrimaryClient&&t&&Af(n.remoteStore,i),p}async function kv(n,e,t,r,i){n.pu=(D,x,G)=>(async function(K,Y,Z,ve){let Te=Y.view.ru(Z);Te.Cs&&(Te=await ll(K.localStore,Y.query,!1).then((({documents:l})=>Y.view.ru(l,Te))));const je=ve&&ve.targetChanges.get(Y.targetId),Ct=ve&&ve.targetMismatches.get(Y.targetId)!=null,et=Y.view.applyChanges(Te,K.isPrimaryClient,je,Ct);return Tl(K,Y.targetId,et.au),et.snapshot})(n,D,x,G);const a=await ll(n.localStore,e,!0),c=new Av(e,a.Qs),p=c.ru(a.documents),_=ws.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),T=c.applyChanges(p,n.isPrimaryClient,_);Tl(n,t,T.au);const I=new bv(e,t,c);return n.Tu.set(e,I),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),T.snapshot}async function Dv(n,e,t){const r=ge(n),i=r.Tu.get(e),a=r.Iu.get(i.targetId);if(a.length>1)return r.Iu.set(i.targetId,a.filter((c=>!Ho(c,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await nu(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Ou(r.remoteStore,i.targetId),su(r,i.targetId)})).catch(Ci)):(su(r,i.targetId),await nu(r.localStore,i.targetId,!0))}async function Nv(n,e){const t=ge(n),r=t.Tu.get(e),i=t.Iu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Ou(t.remoteStore,r.targetId))}async function xv(n,e,t){const r=jv(n);try{const i=await(function(c,p){const _=ge(c),T=Ue.now(),I=p.reduce(((G,$)=>G.add($.key)),Ce());let D,x;return _.persistence.runTransaction("Locally write mutations","readwrite",(G=>{let $=Nn(),K=Ce();return _.Ns.getEntries(G,I).next((Y=>{$=Y,$.forEach(((Z,ve)=>{ve.isValidDocument()||(K=K.add(Z))}))})).next((()=>_.localDocuments.getOverlayedDocuments(G,$))).next((Y=>{D=Y;const Z=[];for(const ve of p){const Te=zy(ve,D.get(ve.key).overlayedDocument);Te!=null&&Z.push(new ar(ve.key,Te,jh(Te.value.mapValue),St.exists(!0)))}return _.mutationQueue.addMutationBatch(G,T,Z,p)})).next((Y=>{x=Y;const Z=Y.applyToLocalDocumentSet(D,K);return _.documentOverlayCache.saveOverlays(G,Y.batchId,Z)}))})).then((()=>({batchId:x.batchId,changes:Yh(D)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),(function(c,p,_){let T=c.Vu[c.currentUser.toKey()];T||(T=new qe(Se)),T=T.insert(p,_),c.Vu[c.currentUser.toKey()]=T})(r,i.batchId,t),await As(r,i.changes),await Yo(r.remoteStore)}catch(i){const a=ju(i,"Failed to persist write");t.reject(a)}}async function xf(n,e){const t=ge(n);try{const r=await $_(t.localStore,e);e.targetChanges.forEach(((i,a)=>{const c=t.Au.get(a);c&&(Ne(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?c.hu=!0:i.modifiedDocuments.size>0?Ne(c.hu,14607):i.removedDocuments.size>0&&(Ne(c.hu,42227),c.hu=!1))})),await As(t,r,e)}catch(r){await Ci(r)}}function vl(n,e,t){const r=ge(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Tu.forEach(((a,c)=>{const p=c.view.va(e);p.snapshot&&i.push(p.snapshot)})),(function(c,p){const _=ge(c);_.onlineState=p;let T=!1;_.queries.forEach(((I,D)=>{for(const x of D.Sa)x.va(p)&&(T=!0)})),T&&qu(_)})(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Vv(n,e,t){const r=ge(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Au.get(e),a=i&&i.key;if(a){let c=new qe(oe.comparator);c=c.insert(a,dt.newNoDocument(a,pe.min()));const p=Ce().add(a),_=new Qo(pe.min(),new Map,new qe(Se),c,p);await xf(r,_),r.du=r.du.remove(a),r.Au.delete(e),$u(r)}else await nu(r.localStore,e,!1).then((()=>su(r,e,t))).catch(Ci)}async function Ov(n,e){const t=ge(n),r=e.batch.batchId;try{const i=await B_(t.localStore,e);Of(t,r,null),Vf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await As(t,i)}catch(i){await Ci(i)}}async function Mv(n,e,t){const r=ge(n);try{const i=await(function(c,p){const _=ge(c);return _.persistence.runTransaction("Reject batch","readwrite-primary",(T=>{let I;return _.mutationQueue.lookupMutationBatch(T,p).next((D=>(Ne(D!==null,37113),I=D.keys(),_.mutationQueue.removeMutationBatch(T,D)))).next((()=>_.mutationQueue.performConsistencyCheck(T))).next((()=>_.documentOverlayCache.removeOverlaysForBatchId(T,I,p))).next((()=>_.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(T,I))).next((()=>_.localDocuments.getDocuments(T,I)))}))})(r.localStore,e);Of(r,e,t),Vf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await As(r,i)}catch(i){await Ci(i)}}function Vf(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function Of(n,e,t){const r=ge(n);let i=r.Vu[r.currentUser.toKey()];if(i){const a=i.get(e);a&&(t?a.reject(t):a.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function su(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((r=>{n.Ru.containsKey(r)||Mf(n,r)}))}function Mf(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Ou(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),$u(n))}function Tl(n,e,t){for(const r of t)r instanceof kf?(n.Ru.addReference(r.key,e),Lv(n,r)):r instanceof Df?(re(Bu,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||Mf(n,r.key)):ce(19791,{wu:r})}function Lv(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(re(Bu,"New document in limbo: "+t),n.Eu.add(r),$u(n))}function $u(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new oe(Me.fromString(e)),r=n.fu.next();n.Au.set(r,new Sv(t)),n.du=n.du.insert(t,r),Af(n.remoteStore,new Gn(un(Gh(t.path)),r,"TargetPurposeLimboResolution",qo.ce))}}async function As(n,e,t){const r=ge(n),i=[],a=[],c=[];r.Tu.isEmpty()||(r.Tu.forEach(((p,_)=>{c.push(r.pu(_,e,t).then((T=>{if((T||t)&&r.isPrimaryClient){const I=T?!T.fromCache:t?.targetChanges.get(_.targetId)?.current;r.sharedClientState.updateQueryState(_.targetId,I?"current":"not-current")}if(T){i.push(T);const I=xu.As(_.targetId,T);a.push(I)}})))})),await Promise.all(c),r.Pu.H_(i),await(async function(_,T){const I=ge(_);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",(D=>W.forEach(T,(x=>W.forEach(x.Es,(G=>I.persistence.referenceDelegate.addReference(D,x.targetId,G))).next((()=>W.forEach(x.ds,(G=>I.persistence.referenceDelegate.removeReference(D,x.targetId,G)))))))))}catch(D){if(!Ri(D))throw D;re(Vu,"Failed to update sequence numbers: "+D)}for(const D of T){const x=D.targetId;if(!D.fromCache){const G=I.Ms.get(x),$=G.snapshotVersion,K=G.withLastLimboFreeSnapshotVersion($);I.Ms=I.Ms.insert(x,K)}}})(r.localStore,a))}async function Fv(n,e){const t=ge(n);if(!t.currentUser.isEqual(e)){re(Bu,"User change. New user:",e.toKey());const r=await Tf(t.localStore,e);t.currentUser=e,(function(a,c){a.mu.forEach((p=>{p.forEach((_=>{_.reject(new ee(z.CANCELLED,c))}))})),a.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await As(t,r.Ls)}}function Uv(n,e){const t=ge(n),r=t.Au.get(e);if(r&&r.hu)return Ce().add(r.key);{let i=Ce();const a=t.Iu.get(e);if(!a)return i;for(const c of a){const p=t.Tu.get(c);i=i.unionWith(p.view.nu)}return i}}function Lf(n){const e=ge(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=xf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Uv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Vv.bind(null,e),e.Pu.H_=Ev.bind(null,e.eventManager),e.Pu.yu=wv.bind(null,e.eventManager),e}function jv(n){const e=ge(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ov.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Mv.bind(null,e),e}class Oo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Xo(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return q_(this.persistence,new F_,e.initialUser,this.serializer)}Cu(e){return new vf(Nu.mi,this.serializer)}Du(e){return new K_}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Oo.provider={build:()=>new Oo};class qv extends Oo{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Ne(this.persistence.referenceDelegate instanceof xo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new I_(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?At.withCacheSize(this.cacheSizeBytes):At.DEFAULT;return new vf((r=>xo.mi(r,t)),this.serializer)}}class ou{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>vl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Fv.bind(null,this.syncEngine),await mv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new _v})()}createDatastore(e){const t=Xo(e.databaseInfo.databaseId),r=(function(a){return new Z_(a)})(e.databaseInfo);return(function(a,c,p,_){return new rv(a,c,p,_)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,i,a,c,p){return new sv(r,i,a,c,p)})(this.localStore,this.datastore,e.asyncQueue,(t=>vl(this.syncEngine,t,0)),(function(){return dl.v()?new dl:new Q_})())}createSyncEngine(e,t){return(function(i,a,c,p,_,T,I){const D=new Cv(i,a,c,p,_,T);return I&&(D.gu=!0),D})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const r=ge(t);re(Pr,"RemoteStore shutting down."),r.Ea.add(5),await Is(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}ou.provider={build:()=>new ou};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):kn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr="FirestoreClient";class $v{constructor(e,t,r,i,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=ft.UNAUTHENTICATED,this.clientId=Eu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,(async c=>{re(sr,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(r,(c=>(re(sr,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Yn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ju(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Oa(n,e){n.asyncQueue.verifyOperationInProgress(),re(sr,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await Tf(e.localStore,i),r=i)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function El(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Hv(n);re(sr,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>gl(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>gl(e.remoteStore,i))),n._onlineComponents=e}async function Hv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){re(sr,"Using user provided OfflineComponentProvider");try{await Oa(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===z.FAILED_PRECONDITION||i.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;yi("Error using user provided cache. Falling back to memory cache: "+t),await Oa(n,new Oo)}}else re(sr,"Using default OfflineComponentProvider"),await Oa(n,new qv(void 0));return n._offlineComponents}async function Ff(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(re(sr,"Using user provided OnlineComponentProvider"),await El(n,n._uninitializedComponentsProvider._online)):(re(sr,"Using default OnlineComponentProvider"),await El(n,new ou))),n._onlineComponents}function zv(n){return Ff(n).then((e=>e.syncEngine))}async function Wv(n){const e=await Ff(n),t=e.eventManager;return t.onListen=Rv.bind(null,e.syncEngine),t.onUnlisten=Dv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Pv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Nv.bind(null,e.syncEngine),t}function Gv(n,e,t={}){const r=new Yn;return n.asyncQueue.enqueueAndForget((async()=>(function(a,c,p,_,T){const I=new Bv({next:x=>{I.Nu(),c.enqueueAndForget((()=>Tv(a,D))),x.fromCache&&_.source==="server"?T.reject(new ee(z.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):T.resolve(x)},error:x=>T.reject(x)}),D=new Iv(p,I,{includeMetadataChanges:!0,qa:!0});return vv(a,D)})(await Wv(n),n.asyncQueue,e,t,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf="firestore.googleapis.com",Il=!0;class Al{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ee(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=jf,this.ssl=Il}else this.host=e.host,this.ssl=e.ssl??Il;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=_f;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<E_)throw new ee(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ry("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Uf(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ee(z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ee(z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ee(z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zo{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Al({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Al(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Gm;switch(r.type){case"firstParty":return new Jm(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ee(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=wl.get(t);r&&(re("ComponentProvider","Removing Datastore"),wl.delete(t),r.terminate())})(this),Promise.resolve()}}function Kv(n,e,t,r={}){n=Dn(n,Zo);const i=Ii(e),a=n._getSettings(),c={...a,emulatorOptions:n._getEmulatorOptions()},p=`${e}:${t}`;i&&(Ml(`https://${p}`),Ll("Firestore",!0)),a.host!==jf&&a.host!==p&&yi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _={...a,host:p,ssl:i,emulatorOptions:r};if(!br(_,c)&&(n._setSettings(_),r.mockUserToken)){let T,I;if(typeof r.mockUserToken=="string")T=r.mockUserToken,I=ft.MOCK_USER;else{T=Td(r.mockUserToken,n._app?.options.projectId);const D=r.mockUserToken.sub||r.mockUserToken.user_id;if(!D)throw new ee(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new ft(D)}n._authCredentials=new Km(new Rh(T,I))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Nr(this.firestore,e,this._query)}}class Xe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Xe(this.firestore,e,this._key)}toJSON(){return{type:Xe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(vs(t,Xe._jsonSchema))return new Xe(e,r||null,new oe(Me.fromString(t.referencePath)))}}Xe._jsonSchemaVersion="firestore/documentReference/1.0",Xe._jsonSchema={type:Qe("string",Xe._jsonSchemaVersion),referencePath:Qe("string")};class Zn extends Nr{constructor(e,t,r){super(e,t,Gh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Xe(this.firestore,null,new oe(e))}withConverter(e){return new Zn(this.firestore,e,this._path)}}function dT(n,e,...t){if(n=Ze(n),Ph("collection","path",e),n instanceof Zo){const r=Me.fromString(e,...t);return Lc(r),new Zn(n,null,r)}{if(!(n instanceof Xe||n instanceof Zn))throw new ee(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Me.fromString(e,...t));return Lc(r),new Zn(n.firestore,null,r)}}function pT(n,e,...t){if(n=Ze(n),arguments.length===1&&(e=Eu.newId()),Ph("doc","path",e),n instanceof Zo){const r=Me.fromString(e,...t);return Mc(r),new Xe(n,null,new oe(r))}{if(!(n instanceof Xe||n instanceof Zn))throw new ee(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Me.fromString(e,...t));return Mc(r),new Xe(n.firestore,n instanceof Zn?n.converter:null,new oe(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl="AsyncQueue";class Sl{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new wf(this,"async_queue_retry"),this._c=()=>{const r=Va();r&&re(bl,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Va();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Va();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Yn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ri(e))throw e;re(bl,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,kn("INTERNAL UNHANDLED ERROR: ",Cl(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=Uu.createAndSchedule(this,e,t,r,(a=>this.hc(a)));return this.tc.push(i),i}uc(){this.nc&&ce(47125,{Pc:Cl(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Cl(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class ki extends Zo{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Sl,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Sl(e),this._firestoreClient=void 0,await e}}}function Qv(n,e){const t=typeof n=="object"?n:ql(),r=typeof n=="string"?n:So,i=lu(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const a=_d("firestore");a&&Kv(i,...a)}return i}function Hu(n){if(n._terminated)throw new ee(z.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Xv(n),n._firestoreClient}function Xv(n){const e=n._freezeSettings(),t=(function(i,a,c,p){return new gy(i,a,c,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Uf(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new $v(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(i){const a=i?._online.build();return{_offline:i?._offline.build(a),_online:a}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new jt(ct.fromBase64String(e))}catch(t){throw new ee(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new jt(ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:jt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(vs(e,jt._jsonSchema))return jt.fromBase64String(e.bytes)}}jt._jsonSchemaVersion="firestore/bytes/1.0",jt._jsonSchema={type:Qe("string",jt._jsonSchemaVersion),bytes:Qe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ee(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ee(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ee(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ln._jsonSchemaVersion}}static fromJSON(e){if(vs(e,ln._jsonSchema))return new ln(e.latitude,e.longitude)}}ln._jsonSchemaVersion="firestore/geoPoint/1.0",ln._jsonSchema={type:Qe("string",ln._jsonSchemaVersion),latitude:Qe("number"),longitude:Qe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,i){if(r.length!==i.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==i[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:hn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(vs(e,hn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new hn(e.vectorValues);throw new ee(z.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}hn._jsonSchemaVersion="firestore/vectorValue/1.0",hn._jsonSchema={type:Qe("string",hn._jsonSchemaVersion),vectorValues:Qe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv=/^__.*__$/;class Yv{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new ar(e,this.data,this.fieldMask,t,this.fieldTransforms):new Es(e,this.data,t,this.fieldTransforms)}}class qf{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new ar(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Bf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ce(40011,{Ac:n})}}class zu{constructor(e,t,r,i,a,c){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,a===void 0&&this.Rc(),this.fieldTransforms=a||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new zu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Mo(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Bf(this.Ac)&&Jv.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Zv{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Xo(e)}Cc(e,t,r,i=!1){return new zu({Ac:e,methodName:t,Dc:r,path:ut.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ta(n){const e=n._freezeSettings(),t=Xo(n._databaseId);return new Zv(n._databaseId,!!e.ignoreUndefinedProperties,t)}function $f(n,e,t,r,i,a={}){const c=n.Cc(a.merge||a.mergeFields?2:0,e,t,i);Gu("Data must be an object, but it was:",c,r);const p=Wf(r,c);let _,T;if(a.merge)_=new Dt(c.fieldMask),T=c.fieldTransforms;else if(a.mergeFields){const I=[];for(const D of a.mergeFields){const x=au(e,D,t);if(!c.contains(x))throw new ee(z.INVALID_ARGUMENT,`Field '${x}' is specified in your field mask but missing from your input data.`);Kf(I,x)||I.push(x)}_=new Dt(I),T=c.fieldTransforms.filter((D=>_.covers(D.field)))}else _=null,T=c.fieldTransforms;return new Yv(new bt(p),_,T)}class na extends ea{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof na}}class Wu extends ea{_toFieldTransform(e){return new qy(e.path,new hs)}isEqual(e){return e instanceof Wu}}function Hf(n,e,t,r){const i=n.Cc(1,e,t);Gu("Data must be an object, but it was:",i,r);const a=[],c=bt.empty();or(r,((_,T)=>{const I=Ku(e,_,t);T=Ze(T);const D=i.yc(I);if(T instanceof na)a.push(I);else{const x=Ss(T,D);x!=null&&(a.push(I),c.set(I,x))}}));const p=new Dt(a);return new qf(c,p,i.fieldTransforms)}function zf(n,e,t,r,i,a){const c=n.Cc(1,e,t),p=[au(e,r,t)],_=[i];if(a.length%2!=0)throw new ee(z.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let x=0;x<a.length;x+=2)p.push(au(e,a[x])),_.push(a[x+1]);const T=[],I=bt.empty();for(let x=p.length-1;x>=0;--x)if(!Kf(T,p[x])){const G=p[x];let $=_[x];$=Ze($);const K=c.yc(G);if($ instanceof na)T.push(G);else{const Y=Ss($,K);Y!=null&&(T.push(G),I.set(G,Y))}}const D=new Dt(T);return new qf(I,D,c.fieldTransforms)}function eT(n,e,t,r=!1){return Ss(t,n.Cc(r?4:3,e))}function Ss(n,e){if(Gf(n=Ze(n)))return Gu("Unsupported field value:",e,n),Wf(n,e);if(n instanceof ea)return(function(r,i){if(!Bf(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(i);a&&i.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,i){const a=[];let c=0;for(const p of r){let _=Ss(p,i.wc(c));_==null&&(_={nullValue:"NULL_VALUE"}),a.push(_),c++}return{arrayValue:{values:a}}})(n,e)}return(function(r,i){if((r=Ze(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Fy(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=Ue.fromDate(r);return{timestampValue:No(i.serializer,a)}}if(r instanceof Ue){const a=new Ue(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:No(i.serializer,a)}}if(r instanceof ln)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof jt)return{bytesValue:hf(i.serializer,r._byteString)};if(r instanceof Xe){const a=i.databaseId,c=r.firestore._databaseId;if(!c.isEqual(a))throw i.Sc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:ku(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof hn)return(function(c,p){return{mapValue:{fields:{[Fh]:{stringValue:Uh},[Co]:{arrayValue:{values:c.toArray().map((T=>{if(typeof T!="number")throw p.Sc("VectorValues must only contain numeric values.");return Cu(p.serializer,T)}))}}}}}})(r,i);throw i.Sc(`Unsupported field value: ${jo(r)}`)})(n,e)}function Wf(n,e){const t={};return Nh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):or(n,((r,i)=>{const a=Ss(i,e.mc(r));a!=null&&(t[r]=a)})),{mapValue:{fields:t}}}function Gf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ue||n instanceof ln||n instanceof jt||n instanceof Xe||n instanceof ea||n instanceof hn)}function Gu(n,e,t){if(!Gf(t)||!kh(t)){const r=jo(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function au(n,e,t){if((e=Ze(e))instanceof bs)return e._internalPath;if(typeof e=="string")return Ku(n,e);throw Mo("Field path arguments must be of type string or ",n,!1,void 0,t)}const tT=new RegExp("[~\\*/\\[\\]]");function Ku(n,e,t){if(e.search(tT)>=0)throw Mo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new bs(...e.split("."))._internalPath}catch{throw Mo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Mo(n,e,t,r,i){const a=r&&!r.isEmpty(),c=i!==void 0;let p=`Function ${e}() called with invalid data`;t&&(p+=" (via `toFirestore()`)"),p+=". ";let _="";return(a||c)&&(_+=" (found",a&&(_+=` in field ${r}`),c&&(_+=` in document ${i}`),_+=")"),new ee(z.INVALID_ARGUMENT,p+n+_)}function Kf(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e,t,r,i,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Xe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Qu("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class nT extends Qf{data(){return super.data()}}function Qu(n,e){return typeof e=="string"?Ku(n,e):e instanceof bs?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ee(z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xu{}class Xf extends Xu{}function gT(n,e,...t){let r=[];e instanceof Xu&&r.push(e),r=r.concat(t),(function(a){const c=a.filter((_=>_ instanceof Ju)).length,p=a.filter((_=>_ instanceof ra)).length;if(c>1||c>0&&p>0)throw new ee(z.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const i of r)n=i._apply(n);return n}class ra extends Xf{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ra(e,t,r)}_apply(e){const t=this._parse(e);return Jf(e._query,t),new Nr(e.firestore,e.converter,Ja(e._query,t))}_parse(e){const t=ta(e.firestore);return(function(a,c,p,_,T,I,D){let x;if(T.isKeyField()){if(I==="array-contains"||I==="array-contains-any")throw new ee(z.INVALID_ARGUMENT,`Invalid Query. You can't perform '${I}' queries on documentId().`);if(I==="in"||I==="not-in"){Pl(D,I);const $=[];for(const K of D)$.push(Rl(_,a,K));x={arrayValue:{values:$}}}else x=Rl(_,a,D)}else I!=="in"&&I!=="not-in"&&I!=="array-contains-any"||Pl(D,I),x=eT(p,c,D,I==="in"||I==="not-in");return Ke.create(T,I,x)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function mT(n,e,t){const r=e,i=Qu("where",n);return ra._create(i,r,t)}class Ju extends Xu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ju(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Wt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(i,a){let c=i;const p=a.getFlattenedFilters();for(const _ of p)Jf(c,_),c=Ja(c,_)})(e._query,t),new Nr(e.firestore,e.converter,Ja(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Yu extends Xf{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Yu(e,t,r)}_apply(e){return new Nr(e.firestore,e.converter,ko(e._query,this._limit,this._limitType))}}function yT(n){return iy("limit",n),Yu._create("limit",n,"F")}function Rl(n,e,t){if(typeof(t=Ze(t))=="string"){if(t==="")throw new ee(z.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Kh(e)&&t.indexOf("/")!==-1)throw new ee(z.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Me.fromString(t));if(!oe.isDocumentKey(r))throw new ee(z.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return zc(n,new oe(r))}if(t instanceof Xe)return zc(n,t._key);throw new ee(z.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${jo(t)}.`)}function Pl(n,e){if(!Array.isArray(n)||n.length===0)throw new ee(z.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Jf(n,e){const t=(function(i,a){for(const c of i)for(const p of c.getFlattenedFilters())if(a.indexOf(p.op)>=0)return p.op;return null})(n.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ee(z.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ee(z.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class iT{convertValue(e,t="none"){switch(rr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(nr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ce(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return or(e,((i,a)=>{r[i]=this.convertValue(a,t)})),r}convertVectorValue(e){const t=e.fields?.[Co].arrayValue?.values?.map((r=>He(r.doubleValue)));return new hn(t)}convertGeoPoint(e){return new ln(He(e.latitude),He(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=$o(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(us(e));default:return null}}convertTimestamp(e){const t=tr(e);return new Ue(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Me.fromString(e);Ne(yf(r),9688,{name:e});const i=new cs(r.get(1),r.get(3)),a=new oe(r.popFirst(5));return i.isEqual(t)||kn(`Document ${a} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class io{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class di extends Qf{constructor(e,t,r,i,a,c){super(e,t,r,i,c),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new mo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Qu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(z.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=di._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}di._jsonSchemaVersion="firestore/documentSnapshot/1.0",di._jsonSchema={type:Qe("string",di._jsonSchemaVersion),bundleSource:Qe("string","DocumentSnapshot"),bundleName:Qe("string"),bundle:Qe("string")};class mo extends di{data(e={}){return super.data(e)}}class pi{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new io(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new mo(this._firestore,this._userDataWriter,r.key,r,new io(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ee(z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,a){if(i._snapshot.oldDocs.isEmpty()){let c=0;return i._snapshot.docChanges.map((p=>{const _=new mo(i._firestore,i._userDataWriter,p.doc.key,p.doc,new io(i._snapshot.mutatedKeys.has(p.doc.key),i._snapshot.fromCache),i.query.converter);return p.doc,{type:"added",doc:_,oldIndex:-1,newIndex:c++}}))}{let c=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((p=>a||p.type!==3)).map((p=>{const _=new mo(i._firestore,i._userDataWriter,p.doc.key,p.doc,new io(i._snapshot.mutatedKeys.has(p.doc.key),i._snapshot.fromCache),i.query.converter);let T=-1,I=-1;return p.type!==0&&(T=c.indexOf(p.doc.key),c=c.delete(p.doc.key)),p.type!==1&&(c=c.add(p.doc),I=c.indexOf(p.doc.key)),{type:sT(p.type),doc:_,oldIndex:T,newIndex:I}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(z.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=pi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Eu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),i.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function sT(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce(61501,{type:n})}}pi._jsonSchemaVersion="firestore/querySnapshot/1.0",pi._jsonSchema={type:Qe("string",pi._jsonSchemaVersion),bundleSource:Qe("string","QuerySnapshot"),bundleName:Qe("string"),bundle:Qe("string")};class oT extends iT{constructor(e){super(),this.firestore=e}convertBytes(e){return new jt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Xe(this.firestore,null,t)}}function _T(n){n=Dn(n,Nr);const e=Dn(n.firestore,ki),t=Hu(e),r=new oT(e);return rT(n._query),Gv(t,n._query).then((i=>new pi(e,r,n,i)))}function vT(n,e,t){n=Dn(n,Xe);const r=Dn(n.firestore,ki),i=Yf(n.converter,e,t);return ia(r,[$f(ta(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,St.none())])}function TT(n,e,t,...r){n=Dn(n,Xe);const i=Dn(n.firestore,ki),a=ta(i);let c;return c=typeof(e=Ze(e))=="string"||e instanceof bs?zf(a,"updateDoc",n._key,e,t,r):Hf(a,"updateDoc",n._key,e),ia(i,[c.toMutation(n._key,St.exists(!0))])}function ET(n){return ia(Dn(n.firestore,ki),[new Ko(n._key,St.none())])}function ia(n,e){return(function(r,i){const a=new Yn;return r.asyncQueue.enqueueAndForget((async()=>xv(await zv(r),i,a))),a.promise})(Hu(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=ta(e)}set(e,t,r){this._verifyNotCommitted();const i=Ma(e,this._firestore),a=Yf(i.converter,t,r),c=$f(this._dataReader,"WriteBatch.set",i._key,a,i.converter!==null,r);return this._mutations.push(c.toMutation(i._key,St.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const a=Ma(e,this._firestore);let c;return c=typeof(t=Ze(t))=="string"||t instanceof bs?zf(this._dataReader,"WriteBatch.update",a._key,t,r,i):Hf(this._dataReader,"WriteBatch.update",a._key,t),this._mutations.push(c.toMutation(a._key,St.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Ma(e,this._firestore);return this._mutations=this._mutations.concat(new Ko(t._key,St.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ee(z.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ma(n,e){if((n=Ze(n)).firestore!==e)throw new ee(z.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function wT(){return new Wu("serverTimestamp")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(n){return Hu(n=Dn(n,ki)),new aT(n,(e=>ia(n,e)))}(function(e,t=!0){(function(i){Si=i})(Ai),gi(new Sr("firestore",((r,{instanceIdentifier:i,options:a})=>{const c=r.getProvider("app").getImmediate(),p=new ki(new Qm(r.getProvider("auth-internal")),new Ym(c,r.getProvider("app-check-internal")),(function(T,I){if(!Object.prototype.hasOwnProperty.apply(T.options,["projectId"]))throw new ee(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new cs(T.options.projectId,I)})(c,i),c);return a={useFetchStreams:t,...a},p._setSettings(a),p}),"PUBLIC").setMultipleInstances(!0)),Xn(Nc,xc,e),Xn(Nc,xc,"esm2020")})();const uT={apiKey:"AIzaSyAjFh7_M6N8DsVoUJFTrjLm8Wb9Lpoa_KM",authDomain:"cartadehawka.firebaseapp.com",projectId:"cartadehawka",storageBucket:"cartadehawka.firebasestorage.app",messagingSenderId:"761905516316",appId:"1:761905516316:web:884ced2e71f3b142f6b4d9"},Zf=jl(uT),AT=zm(Zf),bT=Qv(Zf);(()=>{const n=[["Cielo","#0EBEFF"],["Dulce","#FF5C69"],["Paz","#29C72E"],["Mora","#7000FF"],["Futuro","#21273B"]],e=r=>{const[i,a]=Pe(r).data("tema").split("|");Pe("html").attr("data-theme",i),Pe('meta[name="theme-color"]').length?Pe('meta[name="theme-color"]').attr("content",a):Pe("<meta>",{name:"theme-color",content:a}).appendTo("head"),ed("witema",`${i}|${a}`,720),Pe(".mtha").removeClass("mtha"),Pe(r).addClass("mtha")},t=()=>{Pe(".witemas").html(n.map(([a,c])=>`<div class="tema" data-tema="${a}|${c}" style="background:${c}"></div>`).join(""));const r=td("witema"),i=Pe(`[data-tema="${r}"]`)[0]||Pe(".mtha")[0]||Pe("[data-tema]").first()[0];i&&e(i),Pe(document).off("click.witema").on("click.witema","[data-tema]",a=>e(a.currentTarget))};return Pe(".witemas").length?t():new MutationObserver(r=>r.some(({addedNodes:i})=>[...i].some(a=>a.querySelector?.(".witemas")))&&(t(),!0)).observe(document.body,{childList:!0,subtree:!0}),{set:e}})();const ST=(()=>{const n=()=>{const e=new Date;Pe(".wty").text(e.getFullYear()),Pe(".wtu").text(e.toLocaleString()),Pe(document).off("click.infoo",".abw,.abwok").on("click.infoo",".abw,.abwok",function(){const t=this.id||"";navigator.clipboard&&t&&navigator.clipboard.writeText(t).catch(()=>{}),Pe(".abwc").toggleClass("dpn")})};return Pe(".wty,.wtu,.abw,.abwok").length?n():new MutationObserver(e=>e.some(({addedNodes:t})=>[...t].some(r=>r.querySelector?.(".wty,.wtu,.abw,.abwok")))&&(n(),!0)).observe(document.body,{childList:!0,subtree:!0}),n})(),CT=n=>{Pe("#loading-style").length||Pe("head").append('<style id="loading-style">.loading{height:1vh;background:linear-gradient(to right,#fdd835,#43a047,#fdd835);background-size:200% 100%;animation:l 1.5s infinite;border-radius:3px;width:100%;position:fixed;top:0;left:0;z-index:9999}@keyframes l{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}</style>'),Pe(".loading").length||Pe("body").append('<div class="loading" style="display:none"></div>'),Pe(".loading").toggle(!!n)};function RT(n,e="error",t=3e3){const r={success:"fa-check-circle",error:"fa-times-circle",warning:"fa-exclamation-triangle",info:"fa-info-circle"},i={success:"#2E7D32",error:"#D32F2F",warning:"#F9A825",info:"#0288D1"};Pe("#notificationsContainer").length||Pe("body").append('<div id="notificationsContainer" style="position:fixed;top:1rem;right:1rem;z-index:9999;display:flex;flex-direction:column;gap:.5rem;"></div>');const a=Pe(`
    <div class="notification" style="background:#fff;border-left:4px solid ${i[e]};box-shadow:0 4px 12px rgba(0,0,0,.1);border-radius:8px;padding:1rem;display:flex;align-items:center;gap:.5rem;opacity:0;transform:translateX(20px);transition:all .3s ease;">
      <i class="fas ${r[e]}" style="color:${i[e]};"></i>
      <span style="flex:1">${n}</span>
      <button style="background:none;border:none;font-size:1.2rem;cursor:pointer;">&times;</button>
    </div>
  `);Pe("#notificationsContainer").append(a),requestAnimationFrame(()=>a.css({opacity:1,transform:"translateX(0)"})),a.find("button").on("click",()=>{a.css({opacity:0,transform:"translateX(20px)"}),setTimeout(()=>a.remove(),300)}),setTimeout(()=>{a.css({opacity:0,transform:"translateX(20px)"}),setTimeout(()=>a.remove(),300)},t)}const PT=(n,e="success")=>{Pe(".alert-box").remove();const t={error:{bg:"#FFE8E6",txt:"#D32F2F",border:"#FFCDD2",icon:"fa-circle-exclamation"},success:{bg:"#E8F5E9",txt:"#2E7D32",border:"#C8E6C9",icon:"fa-circle-check"}},{bg:r,txt:i,border:a,icon:c}=t[e]||t.error,p=Pe(`
        <div class="alert-box" style="
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            padding: 15px 20px;
            border-radius: 8px;
            background: ${r};
            color: ${i};
            border-left: 4px solid ${a};
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            z-index: 1000;
            display: flex;
            align-items: center;
            gap: 10px;
            min-width: 300px;
            max-width: 90%;
            
        ">
            <i class="fas ${c}"></i>
            <span>${n}</span>
        </div>
    `).appendTo("body").hide().fadeIn(300);setTimeout(()=>p.fadeOut(300,()=>p.remove()),3e3)};function ed(n,e,t){try{localStorage.setItem(n,JSON.stringify({value:e,expiry:Date.now()+t*36e5,type:typeof e,isArray:Array.isArray(e)}))}catch(r){console.error("Error savels",r)}}function td(n){try{const e=localStorage.getItem(n);if(!e)return null;const t=JSON.parse(e);return!t||Date.now()>t.expiry?(localStorage.removeItem(n),null):t.value}catch(e){return console.error("Error getls:",e),cT(n),null}}function cT(...n){n.forEach(e=>{e&&typeof e=="string"&&localStorage.removeItem(e)})}function kT(n,e,t){Pe(window).on("beforeunload",function(){Pe(n).each(function(){const r=Pe(this),i=r.attr(e);i&&ed(i,t(r),168)})})}function DT(n,e,t){Pe(n).each(function(){const r=Pe(this),i=r.attr(e),a=td(i);i&&a!=null&&t(r,a)})}export{Pe as $,PT as M,RT as N,_T as a,hT as b,dT as c,bT as d,AT as e,wT as f,td as g,vT as h,ST as i,pT as j,CT as k,yT as l,ET as m,IT as n,lT as o,kT as p,gT as q,cT as r,ed as s,DT as t,TT as u,mT as w};
