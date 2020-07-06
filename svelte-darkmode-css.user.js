// ==UserScript==
// @name         svelte-darkmode-css
// @namespace    https://github.com/subz390/svelte-darkmode-css
// @version      0.200705-200404.1-200706-070923
// @description  Development project for Svelte darkmode css
// @author       SubZ390
// @run-at       document-body
// @grant        none
// @include      /svelte.dev\/(docs|tutorial)/
// ==/UserScript==

function k(d,f=!1,e=document){try{if("string"==typeof d){if("string"==typeof e){let b=document.querySelector(e);if(null==b)return f&&console.error(`getNode:68 '${e}' not found`),null;e=b}let g=e.querySelector(d);return null==g?(f&&console.error(`getNode:81 '${d}' not found`),null):g}return d}catch(g){console.error(g)}}
function l(d,f=!0){if("object"!==typeof d)return typeof d;if(null===d)return"null";d=Object.prototype.toString.call(d).match(/\[object\s(\w+)\]/)[1];return!0===f?d.toLowerCase():d}
function m(d,f,e){function g(a,b,c={}){return"function"===typeof b?b(a,c):a}let b=d?d.hasOwnProperty("warn")?d.warn:!1:!1;let h;if("object"===l(d)){e=(a,b)=>{b=b.find(b=>a.hasOwnProperty(b));if("undefined"!==typeof b)return a[b]};h=e(d,["option","options","property","props","properties"]);var a=e(d,["object"]);f=e(d,["default"]);d=e(d,["action","callback"])}else h=d,d=e;if(void 0===h)return b&&console.warn(`undefined options, returning default ${f}`),f;if("string"===typeof d&&"set"===d)return f;if("object"===
l(a))if("array"===l(h))for(e=0;e<h.length;e++){if(a.hasOwnProperty(h[e])){var c=g(a[h[e]],d,a);if(void 0!==c)return c}}else{if("string"===typeof h&&a.hasOwnProperty(h)&&(a=g(a[h],d,a),void 0!==a))return a}else if("array"===l(h))for(e=0;e<h.length;e++){if(void 0!==h[e]&&(c=g(h[e],d,a),void 0!==c))return c}else if(a=g(h,d,a),void 0!==a)return a;b&&console.warn(`no valid options found, returning default ${f}`);return f}
function n(d){try{if(void 0===d)return console.error("qs15: options is undefined"),null;if("string"===typeof d&&""==d)return console.error("qs21: options is an empty string"),null;"string"===typeof d&&(d={se:d});let f="",e=document,g=!1,b=!1,h=!1;f=m({object:d,properties:["se","selector","selectors"],default:"*"});e=m({object:d,properties:["sc","scope"],default:document});if(e!==document){let a=k(e);null!==a?e=a:(console.warn("qs53: scope not found, using document instead"),e=document)}g=m({object:d,
properties:["ar","array"],default:!1});b=m({object:d,property:"all",default:!1});if((h=m({object:d,property:"unittest",default:!1}))&&"returnOptions"===h)return{selector:f,scope:e,array:g,all:b,debug:!1,unittest:h};if(!0===b){let a=e.querySelectorAll(f);return 0===a.length?null:!0===g?Array.from(a):a}{let a=e.querySelector(f);return null===a?null:!0===g?(d=[],d.push(a),d):a}}catch(f){console.error(f)}}
if("undefined"!==typeof document){var r=document.head||document.getElementsByTagName("head")[0],u=document.createElement("style");u.type="text/css";u.className="injected007";r.appendChild(u);u.styleSheet?u.styleSheet.cssText='.theme-default{--back:#1b1b1b;--back-light:#25292c;--back-api:#252628;--prime:#ff3e00;--second:#111;--flash:#6ab2ff;--heading:#dfdfdf;--text:#c5c5c5;--sidebar-text:#d0d0d0}::selection{background:#e34b1d!important;color:var(--back)!important;text-shadow:none}header{background-color:#3e3e3e!important;box-shadow:-.4rem .9rem .7rem #000!important;transition:unset!important}.home,ul.open{background-color:transparent!important}li:before{background-color:var(--text)!important}blockquote{color:#5bbdff;border:2px solid #144b86!important}#sapper blockquote code,code{color:#dddbdb!important;background:var(--back-api)!important}h3>code,h4>code{background:unset!important}aside:after{background:none!important}.active,.section:hover,.subsection:hover,a:hover{color:var(--prime)!important}a{transition:none!important}a.anchor{background:url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNkZmRmZGYiPjxwYXRoIGQ9Im05IDdoLTNhMiAyIDAgMCAwIDAgMTBoMyIvPjxwYXRoIGQ9Im0xNSA3aDNhMiAyIDAgMCAxIDAgMTBoLTMiLz48cGF0aCBkPSJtNyAxMmgxMCIvPjwvZz48L3N2Zz4=") 0 50% no-repeat!important}h4>.anchor{position:absolute!important;top:0}h1,h2,h3,h4,h5,h6{color:var(--heading)!important}code[class*=language-],pre[class*=language-]{color:#f2f4f8;background:none;text-shadow:1px 1px 2px rgba(0,0,0,.7)}:not(pre)>code[class*=language-],pre[class*=language-]{background:var(--back-api)!important;box-shadow:1px 1px 0 #4b4b4b!important}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#53ce48}.token.punctuation{color:#fff}.namespace{opacity:.7}.token.constant,.token.deleted,.token.property,.token.symbol,.token.tag{color:#ff4c12}.token.boolean,.token.number{color:#ffd739}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#ffa600}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url,.token.variable{color:#f8f8f2}.token.atrule,.token.attr-value,.token.class-name,.token.function{color:#ff5ea2}.token.keyword{color:#76cef9}.token.important,.token.regex{color:#fd971f}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}':
u.appendChild(document.createTextNode('.theme-default{--back:#1b1b1b;--back-light:#25292c;--back-api:#252628;--prime:#ff3e00;--second:#111;--flash:#6ab2ff;--heading:#dfdfdf;--text:#c5c5c5;--sidebar-text:#d0d0d0}::selection{background:#e34b1d!important;color:var(--back)!important;text-shadow:none}header{background-color:#3e3e3e!important;box-shadow:-.4rem .9rem .7rem #000!important;transition:unset!important}.home,ul.open{background-color:transparent!important}li:before{background-color:var(--text)!important}blockquote{color:#5bbdff;border:2px solid #144b86!important}#sapper blockquote code,code{color:#dddbdb!important;background:var(--back-api)!important}h3>code,h4>code{background:unset!important}aside:after{background:none!important}.active,.section:hover,.subsection:hover,a:hover{color:var(--prime)!important}a{transition:none!important}a.anchor{background:url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNkZmRmZGYiPjxwYXRoIGQ9Im05IDdoLTNhMiAyIDAgMCAwIDAgMTBoMyIvPjxwYXRoIGQ9Im0xNSA3aDNhMiAyIDAgMCAxIDAgMTBoLTMiLz48cGF0aCBkPSJtNyAxMmgxMCIvPjwvZz48L3N2Zz4=") 0 50% no-repeat!important}h4>.anchor{position:absolute!important;top:0}h1,h2,h3,h4,h5,h6{color:var(--heading)!important}code[class*=language-],pre[class*=language-]{color:#f2f4f8;background:none;text-shadow:1px 1px 2px rgba(0,0,0,.7)}:not(pre)>code[class*=language-],pre[class*=language-]{background:var(--back-api)!important;box-shadow:1px 1px 0 #4b4b4b!important}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#53ce48}.token.punctuation{color:#fff}.namespace{opacity:.7}.token.constant,.token.deleted,.token.property,.token.symbol,.token.tag{color:#ff4c12}.token.boolean,.token.number{color:#ffd739}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#ffa600}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url,.token.variable{color:#f8f8f2}.token.atrule,.token.attr-value,.token.class-name,.token.function{color:#ff5ea2}.token.keyword{color:#76cef9}.token.important,.token.regex{color:#fd971f}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}'))}
(function(d){function f(b,d){if("object"!==l(b))return g&&console.warn(`makeHTML: ${l(b)} should be an Object`),null;for(let c in b)if("debug"!==c&&null!==b[c]&&!1!==b[c])if("function"===l(b[c])&&b.hasOwnProperty(c)&&(b[c]=b[c]()),"object"===l(b[c])&&b.hasOwnProperty(c)){b[c].textNode=b[c].textNode||null;b[c].appendNode=b[c].appendNode||null;d&&(b[c].parentNode=d);if(b[c].tagName){var a=b[c];if("undefined"===typeof a.tagName)throw Error("makeHTML227: tagName undefined");a.el=document.createElement(a.tagName);
for(let b in a)if(a.hasOwnProperty(b)&&null!==a[b]&&!1!==a[b])try{switch(b){case "textNode":case "textContent":a.el.appendChild(document.createTextNode(a[b]));break;case "selectOptions":a.selectOptions=a.selectOptions||null;a.selectOptions.optionList=a.selectOptions.optionList||null;for(let b in a.selectOptions.optionList)if(a.selectOptions.optionList.hasOwnProperty(b)){let c=document.createElement("option");c.appendChild(document.createTextNode(b));b===a.selectOptions.selected&&(c.selected="selected");
a.el.appendChild(c)}break;case "innerHTML":a.el.insertAdjacentHTML("beforeend",a.innerHTML);break;case "insertAdjacentHTML":e(a.el,a.insertAdjacentHTML);break;case "checked":a.el.checked=a.checked;break;case "class":case "className":a.el.setAttribute("class",a[b]);break;default:-1===b.search(/(addEventListener|appendNodes?|childNodes|el|insert(Before|AdjacentHTML|After)|parentNode|replace(Child|Node)|tagName)/)&&a.el.setAttribute(b,a[b])}}catch(p){throw Error(`makeHTML: ${p}`);}if(a.addEventListener)if("array"===
l(a.addEventListener))a.el.addEventListener(a.addEventListener[0],a.addEventListener[1],a.addEventListener[2]);else if("object"===l(a.addEventListener))for(let b in a.addEventListener)a.addEventListener.hasOwnProperty(b)&&a.el.addEventListener(a.addEventListener[b][0],a.addEventListener[b][1],a.addEventListener[b][2]);a.parentNode?(a.parentNode=k(a.parentNode),a.parentNode.appendChild(a.el)):a.insertBefore?(a.insertBefore=k(a.insertBefore),a.insertBefore.parentNode.insertBefore(a.el,a.insertBefore)):
a.insertAfter?(a.insertAfter=k(a.insertAfter),a.insertAfter.parentNode.insertBefore(a.el,a.insertAfter.nextSibling)):a.replaceChild?(a.replaceChild=k(a.replaceChild),a.replaceChild.parentNode.replaceChild(a.el,a.replaceChild)):a.replaceNode&&(a.replaceNode=k(a.replaceNode),a.replaceNode.parentNode.replaceChild(a.el,a.replaceNode));b[c].childNodes&&f("function"===l(b[c].childNodes)?b[c].childNodes():b[c].childNodes,b[c].el)}else b[c].textNode&&b[c].parentNode?b[c].parentNode.appendChild(document.createTextNode(b[c].textNode)):
b[c].insertAdjacentHTML&&(b[c].parentNode||b[c].el)&&e(b[c].parentNode||b[c].el,b[c].insertAdjacentHTML);if(b[c].appendNode&&(b[c].parentNode||b[c].el))a=l(b[c].appendNode),"array"===a||"htmlcollection"===a?g&&console.warn("Use appendNodes (plural) to append more than one node"):("object"===a&&(a=Object.keys(b[c].appendNode),a[0]&&b[c].appendNode[a[0]].el&&(b[c].appendNode=b[c].appendNode[a[0]].el)),b[c].el?b[c].el.appendChild(b[c].appendNode):b[c].parentNode&&b[c].parentNode.appendChild(b[c].appendNode));
else if(b[c].appendNodes&&(b[c].parentNode||b[c].el))if("function"===typeof b[c].appendNodes&&(b[c].appendNodes=b[c].appendNodes()),a=l(b[c].appendNodes),"array"===a||"htmlcollection"===a)for(a=0;b[c].appendNodes[a];a++)if(-1!==l(b[c].appendNodes[a]).search("element"))b[c].el?b[c].el.appendChild(b[c].appendNodes[a]):b[c].parentNode&&b[c].parentNode.appendChild(b[c].appendNodes[a]);else{if("object"===l(b[c].appendNodes[a]))for(let d in b[c].appendNodes[a])b[c].appendNodes[a].hasOwnProperty(d)&&(b[c].appendNodes[a][d].el&&
b[c].el?b[c].el.appendChild(b[c].appendNodes[a][d].el):b[c].appendNodes[a][d].el&&b[c].parentNode&&b[c].parentNode.appendChild(b[c].appendNodes[a][d].el))}else if("object"===a)for(let a in b[c].appendNodes)if("object"===l(b[c].appendNodes[a])&&b[c].appendNodes.hasOwnProperty(a))if(b[c].appendNodes[a].el)b[c].el?b[c].el.appendChild(b[c].appendNodes[a].el):b[c].parentNode&&b[c].parentNode.appendChild(b[c].appendNodes[a].el);else for(let d in b[c].appendNodes[a])b[c].appendNodes[a].hasOwnProperty(d)&&
(b[c].appendNodes[a][d].el&&b[c].el?b[c].el.appendChild(b[c].appendNodes[a][d].el):b[c].appendNodes[a][d].el&&b[c].parentNode&&b[c].parentNode.appendChild(b[c].appendNodes[a][d].el))}else g&&console.warn(`makeHTML196: ${l(b[c])} must be an Object`);return b}function e(b,d){"string"===typeof d?b.insertAdjacentHTML("beforeend",d):"array"===l(d)&&b.insertAdjacentHTML(d[0],d[1])}let g=m({object:d,property:"warn",default:!0});return"undefined"===typeof d?(g&&console.warn("makeHTML: options undefined"),
null):"object"!==l(d)?(g&&console.warn("makeHTML: options is not an object"),null):f(d,null)})({myNode:{tagName:"div",id:"dark-mode-button",parentNode:"body",style:"cursor:pointer; position:fixed; z-index:200; left:14px; top:16px; width:25px;",addEventListener:["click",()=>{{let d=n(".injected007");null!==d&&(d.disabled=d.disabled?!1:!0)}},!0],innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 578.4 578.4"><path d="M289.2 0C129.7 0 0 129.7 0 289.2 0 448.7 129.7 578.4 289.2 578.4c159.5 0 289.2-129.7 289.2-289.2C578.4 129.7 448.7 0 289.2 0zM28.6 289.2C28.6 145.5 145.5 28.6 289.2 28.6l0 0v521.3l0 0C145.5 549.8 28.6 432.9 28.6 289.2z" fill="#b2b2b2"/></svg>'}});
(function(d){function f(){return new Promise((d,q)=>{e.iterations=c;e.result=null;let p="function"===typeof g?g(e):g;"undefined"===typeof p?e.result=!1:"boolean"===typeof p&&(e.result=p);!1===e.result?0>h?(c++,setTimeout(()=>{f().then(d,q)},b)):c<a?(c++,setTimeout(()=>{f().then(d,q)},b)):(e.message="Timeout expired",t?d(e):q(e)):d(e)})}if("undefined"===typeof d)return Promise.reject(Error("Options undefined"));"number"===typeof d&&(d={delay:d,count:1,leading:!1,test:a=>{if(a.iterations===a.count)return a.result=
!0,a}});let e={delay:250,limit:3,debug:!1,test:()=>!1,count:0,leading:!0,expireThen:!0,unittest:!1};for(let a in e)e.hasOwnProperty(a)&&(e[a]=m(d[a],e[a]));for(let a in d)d.hasOwnProperty(a)&&!e[a]&&(e[a]=d[a]);if((d=m(e.unittest,!1))&&"returnOptions"===d)return Promise.resolve(e);let g=e.test,b=e.delay,h=0<e.count?0:e.limit,a=0<e.count?e.count:Math.floor(1E3/b*h),c=!0===e.leading?1:0,t=e.expireThen;return d&&"returnCalcs"===d?Promise.resolve({limit:h,count:a,debug:!1,debugPrefix:""}):f()})(2E3).then(()=>
{let d=n(".home[title=Homepage]");null!==d&&(d.style.backgroundImage='url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyBpZD0ic3ZlbHRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTkiIGhlaWdodD0iMTM5IiB2aWV3Qm94PSIwIDAgNTE5IDEzOSI+PHBhdGggaWQ9ImxvZ290eXBlIiBmaWxsPSIjZGZkZmRmIiBkPSJNMTcyLjM5LDEwMC40MWEyNC4xLDI0LjEsMCwwLDEtMTMuNzItMy44NywxOS44NiwxOS44NiwwLDAsMS04LTEwLjYxTDE1OSw4Mi44NmExNS40LDE1LjQsMCwwLDAsNS40NSw2LjYsMTQuMzcsMTQuMzcsMCwwLDAsOC4yNywyLjQzLDEyLjE0LDEyLjE0LDAsMCwwLDcuODgtMi4zOCw4LjI5LDguMjksMCwwLDAsMi45NC02LjgyLDcuNDMsNy40MywwLDAsMC0uODEtMy40NSwxMC4zMiwxMC4zMiwwLDAsMC0xLjgzLTIuNiwxMi4zNiwxMi4zNiwwLDAsMC0zLjE2LTIuMDljLTEuNDItLjcxLTIuNTktMS4yNS0zLjUzLTEuNjJzLTIuMzItLjg3LTQuMTMtMS40OWMtMi4yOC0uOC00LTEuNDItNS4xMi0xLjg4YTM3Ljg2LDM3Ljg2LDAsMCwxLTQuNDctMi4yNSwxNi4zNywxNi4zNywwLDAsMS00LjE4LTMuMTZBMTUuNDMsMTUuNDMsMCwwLDEsMTUzLjgxLDYwYTE0Ljc3LDE0Ljc3LDAsMCwxLDQtMTYuNzlxNS4xMi00LjUxLDEzLjg5LTQuNTEsNy4zNCwwLDEyLjA2LDMuMjNhMTUuNjMsMTUuNjMsMCwwLDEsNi4zNSw4LjYxbC04LjE4LDIuNzNhOS41Nyw5LjU3LDAsMCwwLTQtNC4zOUExMy4zLDEzLjMsMCwwLDAsMTcxLDQ3LjI0YTEwLjcsMTAuNywwLDAsMC02LjY5LDEuODcsNi4yOCw2LjI4LDAsMCwwLTIuNDIsNS4yOSw1LjUyLDUuNTIsMCwwLDAsMS44Nyw0LjA5LDEzLDEzLDAsMCwwLDMuOTIsMi42NGMxLjM2LjU3LDMuNDQsMS4zMyw2LjIyLDIuMywxLjcuNjMsMywxLjA5LDMuNzksMS40MXMyLC44MywzLjYyLDEuNTdhMjUuNzksMjUuNzksMCwwLDEsMy42NywyLDM0LjM2LDM0LjM2LDAsMCwxLDMsMi40MywxMi44NiwxMi44NiwwLDAsMSwyLjYsMy4xMSwxNy4wNiwxNy4wNiwwLDAsMSwxLjUzLDMuODQsMTcuNDIsMTcuNDIsMCwwLDEsLjY0LDQuODFxMCw4LjM2LTUuNzEsMTMuMDhUMTcyLjM5LDEwMC40MVptNTQuNjItMUwyMDYuNTYsMzkuNzRoOS41NGwxMy41NSw0MS41OGE2Ni4xOSw2Ni4xOSwwLDAsMSwxLjg4LDYuODIsNjMuNDMsNjMuNDMsMCwwLDEsMS44Ny02LjgybDEzLjM4LTQxLjU4aDkuNDZMMjM1Ljg3LDk5LjM5Wm00Ny4yOSwwVjM5Ljc0aDM3djguMzVIMjgzLjE3VjY0LjQ1aDE4LjE1VjcyLjhIMjgzLjE3VjkxaDMwdjguMzVabTYxLjQ0LDBWMzkuNzRoOC44N1Y5MC44N2gyOS4xNHY4LjUyWm03MS40MS01MS4xM1Y5OS4zOWgtOC44NlY0OC4yNkgzODEuNDJWMzkuNzRINDI0djguNTJabTM1LjIsNTEuMTNWMzkuNzRoMzd2OC4zNUg0NTEuMjFWNjQuNDVoMTguMTVWNzIuOEg0NTEuMjFWOTFoMzB2OC4zNVoiLz4NCjxwYXRoIGlkPSJiYWNrIiBmaWxsPSIjZmYzZTAwIiBkPSJNMTEwLjIzLDI4LjM5Qzk5LjgzLDEzLjUxLDc5LjI5LDkuMSw2NC40NCwxOC41NkwzOC4zNiwzNS4xOGEyOS45LDI5LjksMCwwLDAtMTMuNTIsMjAsMzEuNTMsMzEuNTMsMCwwLDAsMy4xLDIwLjI0LDI5Ljk0LDI5Ljk0LDAsMCwwLTQuNDcsMTEuMTgsMzEuODYsMzEuODYsMCwwLDAsNS40NSwyNC4xMmMxMC40LDE0Ljg4LDMwLjk0LDE5LjI5LDQ1Ljc5LDkuODNMMTAwLjc5LDEwNGEzMCwzMCwwLDAsMCwxMy41Mi0yMCwzMS41MiwzMS41MiwwLDAsMC0zLjExLTIwLjIzLDMwLjEzLDMwLjEzLDAsMCwwLDQuNDgtMTEuMTgsMzEuOSwzMS45LDAsMCwwLTUuNDUtMjQuMTIiLz4NCjxwYXRoIGlkPSJmcm9udCIgZmlsbD0iI2ZmZiIgZD0iTTYxLjg5LDExMi4xNmEyMC43MywyMC43MywwLDAsMS0yMi4yNC04LjI1LDE5LjE0LDE5LjE0LDAsMCwxLTMuMjctMTQuNUExNywxNywwLDAsMSwzNyw4N2wuNDktMS41LDEuMzQsMUEzMy43OCwzMy43OCwwLDAsMCw0OSw5MS41NmwxLC4yOS0uMDksMUE1LjksNS45LDAsMCwwLDUxLDk2LjdhNi4yNSw2LjI1LDAsMCwwLDYuNywyLjQ4LDUuODUsNS44NSwwLDAsMCwxLjYtLjdMODUuMzQsODEuODZhNS40Miw1LjQyLDAsMCwwLDIuNDUtMy42NCw1Ljc3LDUuNzcsMCwwLDAtMS00LjM3LDYuMjUsNi4yNSwwLDAsMC02LjctMi40OCw1LjcyLDUuNzIsMCwwLDAtMS42LjdsLTEwLDYuMzVhMTkuMSwxOS4xLDAsMCwxLTUuMjksMi4zMkEyMC43MiwyMC43MiwwLDAsMSw0MSw3Mi41LDE5LjE2LDE5LjE2LDAsMCwxLDM3Ljc1LDU4YTE4LDE4LDAsMCwxLDguMTMtMTIuMDZMNzIsMjkuMzJBMTkuMDUsMTkuMDUsMCwwLDEsNzcuMjYsMjdhMjAuNzEsMjAuNzEsMCwwLDEsMjIuMjMsOC4yNSwxOS4xNCwxOS4xNCwwLDAsMSwzLjI4LDE0LjUsMjAuMTUsMjAuMTUsMCwwLDEtLjYyLDIuNDNsLS41LDEuNS0xLjMzLTFhMzMuNzgsMzMuNzgsMCwwLDAtMTAuMi01LjFsLTEtLjI5LjA5LTFhNS44Niw1Ljg2LDAsMCwwLTEuMDYtMy44OEE2LjIzLDYuMjMsMCwwLDAsODEuNDksNDBhNS43Miw1LjcyLDAsMCwwLTEuNi43TDUzLjgsNTcuMjlhNS40NSw1LjQ1LDAsMCwwLTIuNDUsMy42Myw1Ljg0LDUuODQsMCwwLDAsMSw0LjM4QTYuMjUsNi4yNSwwLDAsMCw1OSw2Ny43OGE2LDYsMCwwLDAsMS42LS43bDEwLTYuMzRhMTguNjEsMTguNjEsMCwwLDEsNS4zLTIuMzMsMjAuNywyMC43LDAsMCwxLDIyLjIzLDguMjQsMTkuMTYsMTkuMTYsMCwwLDEsMy4yOCwxNC41LDE4LDE4LDAsMCwxLTguMTMsMTIuMDZMNjcuMTksMTA5LjgzYTE5LjE4LDE5LjE4LDAsMCwxLTUuMywyLjMzIi8+PC9zdmc+")')}).catch(d=>
{console.error(d)})
