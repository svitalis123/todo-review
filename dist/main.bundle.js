"use strict";(self.webpackChunktodolist=self.webpackChunktodolist||[]).push([[179],{426:(n,e,r)=>{r.d(e,{Z:()=>l});var t=r(81),o=r.n(t),i=r(645),a=r.n(i)()(o());a.push([n.id,"* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n*,\r\nbody,\r\nhtml {\r\n  margin: 0.01px;\r\n  padding: 0.01px;\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow-y: hidden;\r\n}\r\n\r\nmain {\r\n  width: 100%;\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #f6f6f6;\r\n}\r\n\r\n.thelist {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n  list-style: none;\r\n  width: 60%;\r\n  background-color: #f6f6f6;\r\n  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;\r\n}\r\n\r\n.thelist_lists {\r\n  background-color: #f6f6f6;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n}\r\n\r\n.lists_li {\r\n  display: flex;\r\n}\r\n\r\n.list_li_inputs {\r\n  flex: 1;\r\n  display: flex;\r\n  gap: 1rem;\r\n  background-color: #fff;\r\n  padding: 1rem;\r\n}\r\n\r\n.simple {\r\n  background-color: #fff;\r\n  width: 100%;\r\n  text-transform: capitalize;\r\n  padding: 1rem;\r\n}\r\n\r\n.thelist_input,\r\n.thelist_clear {\r\n  color: #9b9b9b;\r\n}\r\n\r\n.thelist_input {\r\n  display: flex;\r\n  position: relative;\r\n}\r\n\r\n.thelist_clear {\r\n  text-align: center;\r\n  background-color: #f6f6f6;\r\n  cursor: pointer;\r\n}\r\n\r\n.thelist_input > input {\r\n  width: 100%;\r\n  outline: none;\r\n  background-color: transparent;\r\n  border: none;\r\n}\r\n\r\n.make_dots {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 5px;\r\n  width: 20px;\r\n  cursor: pointer;\r\n  padding: 5px;\r\n  background-color: #fff;\r\n}\r\n\r\n.dots {\r\n  height: 3px;\r\n  width: 3px;\r\n  border-radius: 50%;\r\n  background-color: #bdbdbd;\r\n}\r\n\r\n.sumbit_new_item {\r\n  width: 40px;\r\n  height: 30px;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n",""]);const l=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(a[s]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);t&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var i={},a=[],l=0;l<n.length;l++){var s=n[l],c=t.base?s[0]+t.base:s[0],d=i[c]||0,u="".concat(c," ").concat(d);i[c]=d+1;var p=r(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=o(f,t);t.byIndex=l,e.splice(l,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var l=r(i[a]);e[l].references--}for(var s=t(n,o),c=0;c<i.length;c++){var d=r(i[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},308:(n,e,r)=>{var t=r(379),o=r.n(t),i=r(795),a=r.n(i),l=r(569),s=r.n(l),c=r(565),d=r.n(c),u=r(216),p=r.n(u),f=r(589),h=r.n(f),m=r(426),v={};v.styleTagTransform=h(),v.setAttributes=d(),v.insert=s().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=p(),o()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals;let g=JSON.parse(localStorage.getItem("newdata"))?JSON.parse(localStorage.getItem("newdata")):[];const x=()=>{const n=g.sort(((n,e)=>n.index-e.index)).map((n=>`\n    <div class="lists_li">\n      <div class="list_li_inputs"  >\n        <input type="checkbox" name="" id="${n.index}" onchange="handleChange(${n.index})" value="${n.completed}">\n        <label for="${n.index}"id="label${n.index}" >${n.description}</label>\n      </div>\n      <div class="make_dots" onclick="removeBlock(${n.index})">\n        <div class="dots"></div>\n        <div class="dots"></div>\n        <div class="dots"></div>\n      </div>\n    </div>\n  `));document.getElementById("list").innerHTML=n.join("")};document.addEventListener("DOMContentLoaded",x());const b=(n,e)=>{localStorage.setItem(n,JSON.stringify(e))},y=document.getElementById("new_form");y.addEventListener("submit",(n=>{n.preventDefault();const e=g.length;let r=g[e-1]?.index?g[e-1]?.index:0;r+=1;var t;t={index:r,description:y.new_value.value,completed:!1},g.push(t),b("newdata",g),x()})),document.getElementById("clear_all").addEventListener("click",(()=>{const n=g.filter((n=>!0!==n.completed));g=n,b("newdata",n),x()})),window.removeBlock=n=>{const e=g.filter((e=>e.index!==n));g=e,b("newdata",e),x()},window.handleChange=n=>{const e=document.getElementById(`label${n}`);!0===document.getElementById(n).checked?(e.style.textDecoration="line-through",e.style.color="rgba(0,0,0,0.45)",((n,e)=>{for(let r=0;r<n.length;r+=1)n[r].index===e&&(n[r].completed=!0)})(g,n),b("newdata",g)):(e.style.textDecoration="none",e.style.color="rgb(0,0,0)",((n,e)=>{for(let r=0;r<n.length;r+=1)n[r].index===e&&(n[r].completed=!1)})(g,n),b("newdata",g))}}},n=>{n(n.s=308)}]);