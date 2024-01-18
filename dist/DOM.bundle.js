(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(537),r=n.n(o),i=n(645),a=n.n(i)()(r());a.push([e.id,":root {\n    --main-bg-color: #19181a;\n    --priority-low-color: #479761;\n    --priority-med-color: #cebc81;\n    --priority-high-color: #a16e83;\n    --secondary-color: #b19f9e;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    background-color: var(--main-bg-color);\n    height: 100vh;\n}\n\n#header-div {\n    background-color: var(--priority-low-color);\n    height: 10%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.1);\n    position: relative;\n    z-index: 2;\n}\n\n#header-text {\n    color: var(--secondary-color);\n}\n\n#menu-div {\n    background-color: var(--priority-low-color);\n    opacity: .9;\n    height: 15%;\n    display: flex;\n    align-items: space-around;\n    font-size: 1.3rem;\n}\n\n#menu-div button {\n    font-size: 1.2rem;\n    width: 5rem;\n    background-color: rgba(255, 255, 255, .2);\n    border-radius: .4rem;\n    border: none;\n    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;\n}\n\n#project-menu-div {\n    height: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 55%;\n}\n\n#project-menu-list-form {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    gap: 10px;\n    width: fit-content;\n}\n\n#project-menu-list-select {\n    background-color: rgba(255, 255, 255, .2);\n    border: none;\n    border-radius: .4rem;\n    font-size: 1.1rem;\n}\n\n/* #view-by-date-buttons-text {\n    font-size: 1rem;\n} */","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;IACI,wBAAwB;IACxB,6BAA6B;IAC7B,6BAA6B;IAC7B,8BAA8B;IAC9B,0BAA0B;AAC9B;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,sCAAsC;IACtC,aAAa;AACjB;;AAEA;IACI,2CAA2C;IAC3C,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,wHAAwH;IACxH,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,2CAA2C;IAC3C,WAAW;IACX,WAAW;IACX,aAAa;IACb,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,WAAW;IACX,yCAAyC;IACzC,oBAAoB;IACpB,YAAY;IACZ,yFAAyF;AAC7F;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,yCAAyC;IACzC,YAAY;IACZ,oBAAoB;IACpB,iBAAiB;AACrB;;AAEA;;GAEG",sourcesContent:[":root {\n    --main-bg-color: #19181a;\n    --priority-low-color: #479761;\n    --priority-med-color: #cebc81;\n    --priority-high-color: #a16e83;\n    --secondary-color: #b19f9e;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    background-color: var(--main-bg-color);\n    height: 100vh;\n}\n\n#header-div {\n    background-color: var(--priority-low-color);\n    height: 10%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.1);\n    position: relative;\n    z-index: 2;\n}\n\n#header-text {\n    color: var(--secondary-color);\n}\n\n#menu-div {\n    background-color: var(--priority-low-color);\n    opacity: .9;\n    height: 15%;\n    display: flex;\n    align-items: space-around;\n    font-size: 1.3rem;\n}\n\n#menu-div button {\n    font-size: 1.2rem;\n    width: 5rem;\n    background-color: rgba(255, 255, 255, .2);\n    border-radius: .4rem;\n    border: none;\n    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;\n}\n\n#project-menu-div {\n    height: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 55%;\n}\n\n#project-menu-list-form {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    gap: 10px;\n    width: fit-content;\n}\n\n#project-menu-list-select {\n    background-color: rgba(255, 255, 255, .2);\n    border: none;\n    border-radius: .4rem;\n    font-size: 1.1rem;\n}\n\n/* #view-by-date-buttons-text {\n    font-size: 1rem;\n} */"],sourceRoot:""}]);const c=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);o&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},537:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),i="/*# ".concat(r," */");return[t].concat([i]).join("\n")}return[t].join("\n")}},654:(e,t,n)=>{var o=n(379),r=n.n(o),i=n(795),a=n.n(i),c=n(569),d=n.n(c),s=n(565),u=n.n(s),p=n(216),A=n.n(p),l=n(589),m=n.n(l),b=n(426),f={};f.styleTagTransform=m(),f.setAttributes=u(),f.insert=d().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=A(),r()(b.Z,f),b.Z&&b.Z.locals&&b.Z.locals},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],c=0;c<e.length;c++){var d=e[c],s=o.base?d[0]+o.base:d[0],u=i[s]||0,p="".concat(s," ").concat(u);i[s]=u+1;var A=n(p),l={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==A)t[A].references++,t[A].updater(l);else{var m=r(l,o);o.byIndex=c,t.splice(c,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var d=o(e,r),s=0;s<i.length;s++){var u=n(i[s]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},340:(e,t,n)=>{n.d(t,{E:()=>r}),n(654);var o=n(138);function r(){!function(){for(;document.body.firstChild;)document.body.removeChild(document.body.firstChild)}(),function(){const e=document.createElement("div");e.setAttribute("id","header-div");const t=document.createElement("h1");t.setAttribute("id","header-text"),t.textContent="Task Master",e.appendChild(t),document.body.appendChild(e)}(),function(){const e=document.createElement("div");e.setAttribute("id","menu-div"),function(e){const t=document.createElement("div");t.setAttribute("id","project-menu-div"),document.createElement("div").setAttribute("id","project-menu-list-div");const n=function(){const e=document.createElement("form");e.setAttribute("id","project-menu-list-form");const t=document.createElement("label");t.setAttribute("id","project-menu-list-label"),t.setAttribute("for","project-menu-list"),t.textContent="Project";const n=document.createElement("select");return n.setAttribute("id","project-menu-list-select"),n.setAttribute("name","project-menu-list-select"),o.d.forEach((e=>{!function(e,t){const n=document.createElement("option");n.setAttribute("value",e),n.textContent=e,t.appendChild(n)}(e,n),console.log(`option built: ${e}`)})),e.appendChild(t),e.appendChild(n),e}(),r=document.createElement("div");r.setAttribute("id","create-new-project-button-div");const i=function(){const e=document.createElement("button");return e.setAttribute("type","button"),e.setAttribute("id","create-new-project-button"),e.textContent="New Project",e}();t.appendChild(n),r.appendChild(i),t.appendChild(r),e.appendChild(t),document.body.appendChild(e)}(e);const t=function(){const e=document.createElement("div");e.setAttribute("id","view-by-date-div");const t=document.createElement("p");t.setAttribute("id","view-by-date-buttons-text"),t.textContent="View By Due Date",e.appendChild(t);const n=document.createElement("div");n.setAttribute("id","view-by-date-buttons-div"),e.appendChild(n);const o=document.createElement("button");o.setAttribute("id","view-by-date-button-all"),o.textContent="All",n.appendChild(o);const r=document.createElement("button");r.setAttribute("id","view-by-date-button-today"),r.textContent="Today",n.appendChild(r);const i=document.createElement("button");return i.setAttribute("id","view-by-date-button-week"),i.textContent="7 Days",n.appendChild(i),e}();e.appendChild(t)}()}},138:(e,t,n)=>{n.d(t,{d:()=>i}),n(654);var o=n(340);let r=[{name:"Beer",due:new Date(2021),project:"Booze",complete:!1},{name:"Wine",due:new Date(2021),project:"Booze",complete:!1},{name:"Whiskey",due:new Date(2006),project:"Booze",complete:!1},{name:"Bread",due:new Date(2021),project:"Groceries",complete:!1},{name:"Milk",due:new Date(2006),project:"Groceries",complete:!1},{name:"Cheese",due:new Date(2021),project:"Groceries",complete:!1}],i=["Default"];document.addEventListener("DOMContentLoaded",(function(){r.forEach((e=>{i.includes(e.project)||i.push(e.project)})),(0,o.E)()}))}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,n(340)})();
//# sourceMappingURL=DOM.bundle.js.map