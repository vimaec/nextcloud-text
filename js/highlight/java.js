(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[85],{539:function(e,n,a){"use strict";var c="\\.(".concat("[0-9](_*[0-9])*",")"),s="[0-9a-fA-F](_*[0-9a-fA-F])*",t={className:"number",variants:[{begin:"(\\b(".concat("[0-9](_*[0-9])*",")((").concat(c,")|\\.)?|(").concat(c,"))")+"[eE][+-]?(".concat("[0-9](_*[0-9])*",")[fFdD]?\\b")},{begin:"\\b(".concat("[0-9](_*[0-9])*",")((").concat(c,")[fFdD]?\\b|\\.([fFdD]\\b)?)")},{begin:"(".concat(c,")[fFdD]?\\b")},{begin:"\\b(".concat("[0-9](_*[0-9])*",")[fFdD]\\b")},{begin:"\\b0[xX]((".concat(s,")\\.?|(").concat(s,")?\\.(").concat(s,"))")+"[pP][+-]?(".concat("[0-9](_*[0-9])*",")[fFdD]?\\b")},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:"\\b0[xX](".concat(s,")[lL]?\\b")},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};e.exports=function(e){var n="[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*",a="false synchronized int abstract float private char boolean var static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do",c={className:"meta",begin:"@"+n,contains:[{begin:/\(/,end:/\)/,contains:["self"]}]},s=t;return{name:"Java",aliases:["jsp"],keywords:a,illegal:/<\/|#/,contains:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),{begin:/import java\.[a-z]+\./,keywords:"import",relevance:2},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{className:"class",beginKeywords:"class interface enum",end:/[{;=]/,excludeEnd:!0,keywords:"class interface enum",illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"new throw return else",relevance:0},{className:"class",begin:"record\\s+"+e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,excludeEnd:!0,end:/[{;=]/,keywords:a,contains:[{beginKeywords:"record"},{begin:e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,relevance:0,contains:[e.UNDERSCORE_TITLE_MODE]},{className:"params",begin:/\(/,end:/\)/,keywords:a,relevance:0,contains:[e.C_BLOCK_COMMENT_MODE]},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{className:"function",begin:"([À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*(<[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*(\\s*,\\s*[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*)*>)?\\s+)+"+e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:a,contains:[{begin:e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,relevance:0,contains:[e.UNDERSCORE_TITLE_MODE]},{className:"params",begin:/\(/,end:/\)/,keywords:a,relevance:0,contains:[c,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,s,e.C_BLOCK_COMMENT_MODE]},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},s,c]}}}}]);
//# sourceMappingURL=java.js.map?v=9150eefec18f43e31b44