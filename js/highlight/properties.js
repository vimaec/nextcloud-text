(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[137],{591:function(e,n,t){"use strict";e.exports=function(e){var n="[ \\t\\f]*",t="([ \\t\\f]*[:=][ \\t\\f]*|[ \\t\\f]+)",a="([^\\\\:= \\t\\f\\n]|\\\\.)+",s={end:t,relevance:0,starts:{className:"string",end:/$/,relevance:0,contains:[{begin:"\\\\\\n"}]}};return{name:".properties",case_insensitive:!0,illegal:/\S/,contains:[e.COMMENT("^\\s*[!#]","$"),{returnBegin:!0,variants:[{begin:"([^\\\\\\W:= \\t\\f\\n]|\\\\.)+[ \\t\\f]*[:=][ \\t\\f]*",relevance:1},{begin:"([^\\\\\\W:= \\t\\f\\n]|\\\\.)+[ \\t\\f]+",relevance:0}],contains:[{className:"attr",begin:"([^\\\\\\W:= \\t\\f\\n]|\\\\.)+",endsParent:!0,relevance:0}],starts:s},{begin:a+t,returnBegin:!0,relevance:0,contains:[{className:"meta",begin:a,endsParent:!0,relevance:0}],starts:s},{className:"attr",relevance:0,begin:a+n+"$"}]}}}}]);
//# sourceMappingURL=properties.js.map?v=6fb5c8967a1ef6a5ecc7