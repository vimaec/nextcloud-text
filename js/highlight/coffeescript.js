(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[32],{486:function(e,n,a){"use strict";var t=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],r=["true","false","null","undefined","NaN","Infinity"],i=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"]);e.exports=function(e){var n,a={keyword:t.concat(["then","unless","until","loop","by","when","and","or","is","isnt","not"]).filter((n=["var","const","let","function","static"],function(e){return!n.includes(e)})).join(" "),literal:r.concat(["yes","no","on","off"]).join(" "),built_in:i.concat(["npm","print"]).join(" ")},s="[A-Za-z$_][0-9A-Za-z$_]*",o={className:"subst",begin:/#\{/,end:/\}/,keywords:a},c=[e.BINARY_NUMBER_MODE,e.inherit(e.C_NUMBER_MODE,{starts:{end:"(\\s*/)?",relevance:0}}),{className:"string",variants:[{begin:/'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE]},{begin:/'/,end:/'/,contains:[e.BACKSLASH_ESCAPE]},{begin:/"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,o]},{begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,o]}]},{className:"regexp",variants:[{begin:"///",end:"///",contains:[o,e.HASH_COMMENT_MODE]},{begin:"//[gim]{0,3}(?=\\W)",relevance:0},{begin:/\/(?![ *]).*?(?![\\]).\/[gim]{0,3}(?=\W)/}]},{begin:"@"+s},{subLanguage:"javascript",excludeBegin:!0,excludeEnd:!0,variants:[{begin:"```",end:"```"},{begin:"`",end:"`"}]}];o.contains=c;var l=e.inherit(e.TITLE_MODE,{begin:s}),d={className:"params",begin:"\\([^\\(]",returnBegin:!0,contains:[{begin:/\(/,end:/\)/,keywords:a,contains:["self"].concat(c)}]};return{name:"CoffeeScript",aliases:["coffee","cson","iced"],keywords:a,illegal:/\/\*/,contains:c.concat([e.COMMENT("###","###"),e.HASH_COMMENT_MODE,{className:"function",begin:"^\\s*"+s+"\\s*=\\s*(\\(.*\\)\\s*)?\\B[-=]>",end:"[-=]>",returnBegin:!0,contains:[l,d]},{begin:/[:\(,=]\s*/,relevance:0,contains:[{className:"function",begin:"(\\(.*\\)\\s*)?\\B[-=]>",end:"[-=]>",returnBegin:!0,contains:[d]}]},{className:"class",beginKeywords:"class",end:"$",illegal:/[:="\[\]]/,contains:[{beginKeywords:"extends",endsWithParent:!0,illegal:/[:="\[\]]/,contains:[l]},l]},{begin:s+":",end:":",returnBegin:!0,returnEnd:!0,relevance:0}])}}}}]);
//# sourceMappingURL=coffeescript.js.map?v=8abf51a3d5c9e496c9d8