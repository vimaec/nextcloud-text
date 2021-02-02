(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[196],{143:function(n,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.FILE_ACTION_IDENTIFIER=e.FilesWorkspacePlugin=e.registerFileCreate=e.registerFileActionFallback=e.optimalPath=void 0;var o=i(76),r=l(i(152)),a=i(48),c=l(i(70));function l(n){return n&&n.__esModule?n:{default:n}}
/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */e.FILE_ACTION_IDENTIFIER="Edit with text app";e.optimalPath=function(n,t){var e=n.split("/"),i=t.split("/");for(e.pop();e[0]===i[0];)e.shift(),i.shift();var o=e.fill("..").concat(i),r=t.split("/");return o.length<r.length?o.join("/"):t};e.registerFileCreate=function(){var n={attach:function(n){var e=n.fileList;"files"!==e.id&&"files.public"!==e.id||n.addMenuEntry({id:"file",displayName:t("text","New text document"),templateName:t("text","New text document")+".md",iconClass:"icon-filetype-text",fileType:"file",actionHandler:function(n){e.createFile(n).then((function(n,t){var i=new OCA.Files.FileInfoModel(t);void 0!==OCA.Viewer?OCA.Files.fileActions.triggerAction("view",i,e):void 0===OCA.Viewer&&OCA.Files.fileActions.triggerAction("Edit with text app",i,e)}))}})}};OC.Plugins.register("OCA.Files.NewFileMenu",n)};e.registerFileActionFallback=function(){var n,e=document.getElementById("sharingToken")?document.getElementById("sharingToken").value:null,r=document.getElementById("dir").value;if(!e||""!==r){var c=document.createElement("div");c.id="text-viewer-fallback",document.body.appendChild(c);for(var l=0;l<o.openMimetypes.length;l++)n=o.openMimetypes[l],OCA.Files.fileActions.register(n,"Edit with text app",OC.PERMISSION_UPDATE|OC.PERMISSION_READ,(0,a.imagePath)("core","actions/rename"),(function(n){var t=window.FileList.findFile(n);Promise.all([Promise.resolve().then(i.t.bind(null,19,7)),Promise.all([i.e(0),i.e(192),i.e(203),i.e(198)]).then(i.bind(null,193))]).then((function(i){var o=window.FileList.getCurrentDirectory()+"/"+n,r=i[0].default;r.prototype.t=window.t,r.prototype.n=window.n,r.prototype.OCA=window.OCA;var a=i[1].default;new r({render:function(n){return n(a,{props:{fileId:t?t.id:null,active:!0,shareToken:e,relativePath:o,mimeType:t.mimetype}})}}).$mount(c)}))}),t("text","Edit")),OCA.Files.fileActions.setDefault(o.openMimetypes[l],"Edit with text app")}};var s={el:null,attach:function(n){"files"!==n.id&&"files.public"!==n.id||(this.el=document.createElement("div"),n.registerHeader({id:"workspace",el:this.el,render:this.render.bind(this),priority:10}))},render:function(n){var t=this;"files"!==n.id&&"files.public"!==n.id||Promise.resolve().then(i.t.bind(null,19,7)).then((function(e){var i=e.default;t.el.id="files-workspace-wrapper",i.prototype.t=window.t,i.prototype.n=window.n,i.prototype.OCA=window.OCA;var o=new(i.extend(r.default))({propsData:{path:n.getCurrentDirectory()},store:c.default}).$mount(t.el);n.$el.on("urlChanged",(function(n){o.path=n.dir.toString()})),n.$el.on("changeDirectory",(function(n){o.path=n.dir.toString()}))}))}};e.FilesWorkspacePlugin=s},152:function(n,t,e){"use strict";e.r(t);var i=e(74),o=e(43);for(var r in o)["default"].indexOf(r)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(r);e(188);var a=e(32),c=Object(a.a)(o.default,i.a,i.b,!1,null,"374052d2",null);t.default=c.exports},188:function(n,t,e){"use strict";var i=e(45),o=e.n(i),r=e(73),a={insert:"head",singleton:!1};o()(r.a,a),r.a.locals},244:function(n,t,e){"use strict";e.r(t);var i=e(245),o=e.n(i);for(var r in i)["default"].indexOf(r)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(r);t.default=o.a},245:function(n,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(207),r=p(i(211)),a=p(i(701)),c=i(143),l=p(i(702)),s=p(i(703)),u=p(i(704)),d=p(i(705)),A=i(135);function p(n){return n&&n.__esModule?n:{default:n}}function f(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var e=[],i=!0,o=!1,r=void 0;try{for(var a,c=n[Symbol.iterator]();!(i=(a=c.next()).done)&&(e.push(a.value),!t||e.length!==t);i=!0);}catch(n){o=!0,r=n}finally{try{i||null==c.return||c.return()}finally{if(o)throw r}}return e}(n,t)||b(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(n){return function(n){if(Array.isArray(n))return C(n)}(n)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||b(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(n,t){if(n){if("string"==typeof n)return C(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?C(n,t):void 0}}function C(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,i=new Array(t);e<t;e++)i[e]=n[e];return i}var m={name:"MenuBar",components:{EditorMenuBar:o.EditorMenuBar,ActionButton:s.default,PopoverMenu:u.default,Actions:l.default},directives:{Tooltip:r.default,ClickOutside:d.default},props:{editor:{type:Object,required:!1,default:null},isRichEditor:{type:Boolean,default:!0},autohide:{type:Boolean,default:!1},isPublic:{type:Boolean,default:!1},filePath:{type:String,required:!1,default:""}},data:function(){return{windowWidth:0,windowHeight:0,forceRecompute:0,submenuVisibility:{},lastImagePath:null,icons:h(a.default)}},computed:{isHiddenInMenu:function(){var n=this;return function(t){return t-n.iconCount>=0}},getIconClasses:function(){return function(n,t){var e={"is-active":"function"==typeof t.isActive&&t.isActive(n)};return e[t.class]=!0,e}},disabled:function(){return function(n,t){return!1}},isChildMenuVisible:function(){var n=this;return function(t){return!!Object.prototype.hasOwnProperty.call(n.submenuVisibility,t.label)&&n.submenuVisibility[t.label]}},allIcons:function(){var n=this;return this.isPublic?this.icons:[].concat(h(this.icons),[{label:t("text","Insert image"),class:"icon-image",isActive:function(){},action:function(t){n.showImagePrompt(t.image)}}])},childPopoverMenu:function(){var n=this;return function(t,e,i,o){var r=[],a=function(a){r.push({text:i[a].label,icon:i[a].class,action:function(){i[a].action(e),n.hideChildMenu(o)},active:i[a].isActive(t)})};for(var c in i)a(c);return r}},childIconClasses:function(){var n=this;return function(t,e){var i=n.childIcon(t,e);return n.getIconClasses(t,i)}},childIcon:function(){return function(n,t){for(var e in t){var i=t[e];if(i.isActive(n))return i}return t[0]}},iconCount:function(){this.forceRecompute,this.windowWidth;var n=this.$refs.menubar&&this.$refs.menubar.clientWidth>200?this.$refs.menubar.clientWidth:200,t=Math.max(Math.floor(n/44)-2,0);return t},imagePath:function(){return this.lastImagePath||this.filePath.split("/").slice(0,-1).join("/")}},mounted:function(){var n=this;window.addEventListener("resize",this.getWindowWidth),this.checkInterval=setInterval((function(){var t=n.$refs.menubar&&n.$refs.menubar.clientWidth>0;n.isRichEditor&&t&&n.redrawMenuBar(),n.isRichEditor&&!t||clearInterval(n.checkInterval)}),100)},beforeDestroy:function(){window.removeEventListener("resize",this.getWindowWidth)},methods:{redrawMenuBar:function(){var n=this;this.$nextTick((function(){n.getWindowWidth(),n.forceRecompute++}))},clickIcon:function(n,t){return t.action(n)},getWindowWidth:function(n){this.windowWidth=document.documentElement.clientWidth},getWindowHeight:function(n){this.windowHeight=document.documentElement.clientHeight},hideChildMenu:function(n){this.$set(this.submenuVisibility,n.label,!1)},toggleChildMenu:function(n){var t=!!Object.prototype.hasOwnProperty.call(this.submenuVisibility,n.label)&&this.submenuVisibility[n.label];this.$set(this.submenuVisibility,n.label,!t)},showImagePrompt:function(n){var e=this;if((0,A.getCurrentUser)()){var i=n;OC.dialogs.filepicker(t("text","Insert an image"),(function(n){OC.Files.getClient().getFileInfo(n).then((function(n,t){e.lastImagePath=t.path;var o={mimetype:t.mimetype,hasPreview:t.hasPreview},r=(0,c.optimalPath)(e.filePath,"".concat(t.path,"/").concat(t.name)).split("/").map(encodeURIComponent).join("/"),a=Object.entries(o).map((function(n){var t=f(n,2),e=t[0],i=t[1];return"".concat(e,"=").concat(encodeURIComponent(i))})).join("&"),l="".concat(r,"?fileId=").concat(t.id,"#").concat(a);i({src:l,alt:t.name})}))}),!1,[],!0,void 0,this.imagePath)}},showLinkPrompt:function(n){var t=this;if(OC.getCurrentUser()){var e=n;OC.dialogs.filepicker("Insert a link",(function(n){OC.Files.getClient().getFileInfo(n).then((function(n,i){t.lastLinkPath=i.path;var o=t.optimalPathTo("".concat(i.path,"/").concat(i.name)).split("/").map(encodeURIComponent).join("/"),r="".concat(o,"?fileId=").concat(i.id);e({href:r})}))}),!1,[],!0,void 0,this.linkPath)}},optimalPathTo:function(n){var t=n.split("/"),e=this.relativePathTo(n).split("/");return e.length<t.length?e.join("/"):n},relativePathTo:function(n){var t=this.filePath.split("/"),e=n.split("/");for(t.pop();t[0]===e[0];)t.shift(),e.shift();return t.fill("..").concat(e).join("/")}}};e.default=m},246:function(n,t,e){"use strict";e.r(t);var i=e(247),o=e.n(i);for(var r in i)["default"].indexOf(r)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(r);t.default=o.a},247:function(n,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,r=i(207),a=(o=i(211))&&o.__esModule?o:{default:o},c=i(143);var l={name:"MenuBubble",components:{EditorMenuBubble:r.EditorMenuBubble},directives:{tooltip:a.default},props:{editor:{type:Object,required:!1,default:null},filePath:{type:String,required:!1,default:""}},data:function(){return{linkUrl:null,linkMenuIsActive:!1}},methods:{showLinkMenu:function(n){var t=this;this.linkUrl=n.href,this.linkMenuIsActive=!0,this.$nextTick((function(){t.$refs.linkInput.focus()}))},hideLinkMenu:function(){this.linkUrl=null,this.linkMenuIsActive=!1},selectFile:function(n){var e=this;if(OC.getCurrentUser()){var i=this.filePath.split("/").slice(0,-1).join("/");OC.dialogs.filepicker(t("text","Select file to link to"),(function(t){OC.Files.getClient().getFileInfo(t).then((function(t,i){var o=(0,c.optimalPath)(e.filePath,"".concat(i.path,"/").concat(i.name)).split("/").map(encodeURIComponent).join("/");n({href:"".concat(o,"?fileId=").concat(i.id)}),e.hideLinkMenu()}))}),!1,[],!0,void 0,i)}},setLinkUrl:function(n,t){t&&![/^[a-zA-Z]+:/,/^\//,/\?fileId=/,/^\.\.?\//,/^[^.]*[/$]/,/^#/].find((function(n){return t.match(n)}))&&(t="https://"+t),n({href:t}),this.hideLinkMenu()}}};e.default=l},43:function(n,t,e){"use strict";e.r(t);var i=e(44),o=e.n(i);for(var r in i)["default"].indexOf(r)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(r);t.default=o.a},44:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,o=(i=e(123))&&i.__esModule?i:{default:i},r=e(48),a=e(75);function c(n,t,e,i,o,r,a){try{var c=n[r](a),l=c.value}catch(n){return void e(n)}c.done?t(l):Promise.resolve(l).then(i,o)}var l=!!document.getElementById("isPublic"),s=(0,r.generateOcsUrl)("apps/text"+(l?"/public":""),2)+"workspace",u={name:"RichWorkspace",components:{EditorWrapper:function(){return Promise.all([e.e(192),e.e(201),e.e(193)]).then(e.bind(null,142))}},props:{path:{type:String,required:!0}},data:function(){return{focus:!1,folder:null,file:null,loaded:!1,ready:!1,autofocus:!1,darkTheme:OCA.Accessibility&&"dark"===OCA.Accessibility.theme,enabled:OCA.Text.RichWorkspaceEnabled}},computed:{shareToken:function(){return document.getElementById("sharingToken")?document.getElementById("sharingToken").value:null},canCreate:function(){return!!(this.folder&&this.folder.permissions&OC.PERMISSION_CREATE)},showEmptyWorkspace:function(){return(!this.file||this.autofocus&&!this.ready)&&this.canCreate}},watch:{path:function(){this.getFileInfo()},focus:function(n){n||document.querySelector("#editor").scrollTo(0,0)}},mounted:function(){var n,t=this;return(n=regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.enabled&&t.getFileInfo(),(0,a.subscribe)("Text::showRichWorkspace",(function(){t.enabled=!0,t.getFileInfo()})),(0,a.subscribe)("Text::hideRichWorkspace",(function(){t.enabled=!1}));case 3:case"end":return n.stop()}}),n)})),function(){var t=this,e=arguments;return new Promise((function(i,o){var r=n.apply(t,e);function a(n){c(r,i,o,a,l,"next",n)}function l(n){c(r,i,o,a,l,"throw",n)}a(void 0)}))})()},methods:{unfocus:function(){},reset:function(){var n=this;this.file=null,this.focus=!1,this.$nextTick((function(){n.creating=!1,n.getFileInfo()}))},getFileInfo:function(){var n=this;this.loaded=!1,this.autofocus=!1,this.ready=!1;var t={path:this.path};return l&&(t.shareToken=this.shareToken),o.default.get(s,{params:t}).then((function(t){var e=t.data.ocs.data;return n.folder=e.folder||null,n.file=e.file,n.editing=!0,n.loaded=!0,!0})).catch((function(t){return t.response.data.ocs&&t.response.data.ocs.data.folder?n.folder=t.response.data.ocs.data.folder:n.folder=null,n.file=null,n.loaded=!0,n.ready=!0,n.creating=!1,!1}))},createNew:function(){var n=this;this.creating||(this.creating=!0,this.getFileInfo().then((function(t){n.autofocus=!0,t||window.FileList.createFile("Readme.md",{scrollTo:!1,animate:!1}).then((function(t,e){n.getFileInfo()}))})))}}};t.default=u},700:function(n,t,e){"use strict";e.r(t);var i=e(748),o=e(244);for(var r in o)["default"].indexOf(r)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(r);e(749);var a=e(32),c=Object(a.a)(o.default,i.a,i.b,!1,null,"0bb95566",null);t.default=c.exports},701:function(n,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;
/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
var o=[{label:t("text","Undo"),class:"icon-undo",isActive:function(n){return!1},isDisabled:function(n){return 0===n.undoDepth()},action:function(n){return n.undo()}},{label:t("text","Redo"),class:"icon-redo",isActive:function(n){return!1},isDisabled:function(n){return 0===n.redoDepth()},action:function(n){return n.redo()}},{label:t("text","Bold"),class:"icon-bold",isActive:function(n){return n.strong()},action:function(n){return n.strong()}},{label:t("text","Italic"),class:"icon-italic",isActive:function(n){return n.em()},action:function(n){return n.em()}},{label:t("text","Strikethrough"),class:"icon-strike",isActive:function(n){return n.strike()},action:function(n){return n.strike()}},{label:t("text","Headings"),visible:!1,children:[{label:t("text","Heading 1"),class:"icon-h1",isActive:function(n){return n.heading({level:1})},action:function(n){return n.heading({level:1})}},{label:t("text","Heading 2"),class:"icon-h2",isActive:function(n){return n.heading({level:2})},action:function(n){return n.heading({level:2})}},{label:t("text","Heading 3"),class:"icon-h3",isActive:function(n){return n.heading({level:3})},action:function(n){return n.heading({level:3})}},{label:t("text","Heading 4"),class:"icon-h4",isActive:function(n){return n.heading({level:4})},action:function(n){return n.heading({level:4})}},{label:t("text","Heading 5"),class:"icon-h5",isActive:function(n){return n.heading({level:5})},action:function(n){return n.heading({level:5})}},{label:t("text","Heading 6"),class:"icon-h6",isActive:function(n){return n.heading({level:6})},action:function(n){return n.heading({level:6})}}]},{label:t("text","Unordered list"),class:"icon-ul",isActive:function(n){return n.bullet_list()},action:function(n){return n.bullet_list_item()}},{label:t("text","Ordered list"),class:"icon-ol",isActive:function(n){return n.ordered_list()},action:function(n){return n.ordered_list()}},{label:t("text","ToDo list"),class:"icon-checkmark",isActive:function(n){return!1},action:function(n){return n.todo_item()}},{label:t("text","Blockquote"),class:"icon-quote",isActive:function(n){return n.blockquote()},action:function(n){return n.blockquote()}},{label:t("text","Code block"),class:"icon-code",isActive:function(n){return n.code_block()},action:function(n){return n.code_block()}}];e.default=o},706:function(n,t,e){"use strict";var i=e(46),o=e.n(i),r=e(47),a=e.n(r)()(o.a);a.push([n.i,".menubar[data-v-0bb95566]{--background-blur: blur(10px);position:fixed;position:-webkit-sticky;position:sticky;top:0;display:flex;z-index:10010;background-color:var(--color-main-background-translucent);-webkit-backdrop-filter:var(--background-blur);backdrop-filter:var(--background-blur);height:50px;padding-top:3px;padding-bottom:3px}.menubar.autohide[data-v-0bb95566]{visibility:hidden;opacity:0;transition:visibility 0.2s 0.4s, opacity 0.2s 0.4s}.menubar.autohide.is-focused[data-v-0bb95566]{visibility:visible;opacity:1}.menubar .menubar-icons[data-v-0bb95566]{flex-grow:1;margin-left:calc((100% - 660px) / 2)}@media (max-width: 660px){.menubar .menubar-icons[data-v-0bb95566]{margin-left:0}}.menubar[data-v-0bb95566] .action-item__menu ul{max-height:calc(100vh - 88px);overflow:scroll}.menubar button[data-v-0bb95566]{position:relative;width:44px;height:44px;margin:0;background-size:16px;border:0;background-color:transparent;opacity:.5;color:var(--color-main-text);background-position:center center;vertical-align:top}.menubar button[data-v-0bb95566]:hover,.menubar button[data-v-0bb95566]:focus,.menubar button[data-v-0bb95566]:active{background-color:var(--color-background-dark)}.menubar button.is-active[data-v-0bb95566]::before{transform:translateX(-50%);border-radius:100%;position:absolute;background:var(--color-primary-element);bottom:3px;height:6px;width:6px;content:'';left:50%}.menubar button.is-active[data-v-0bb95566],.menubar button[data-v-0bb95566]:hover,.menubar button[data-v-0bb95566]:focus{opacity:1}.menubar button.icon-undo[data-v-0bb95566],.menubar button.icon-redo[data-v-0bb95566]{opacity:.8}.menubar button.icon-undo[data-v-0bb95566]:disabled,.menubar button.icon-redo[data-v-0bb95566]:disabled{opacity:.4}.menubar button.icon-redo[data-v-0bb95566]{margin-right:22px}.menubar button.icon-ul[data-v-0bb95566]{margin-left:22px}.menubar .submenu[data-v-0bb95566]{display:inline-block;width:44px;height:44px;position:relative;vertical-align:top}\n","",{version:3,sources:["webpack://./src/components/MenuBar.vue"],names:[],mappings:"AAqUA,0BACC,6BAAkB,CAClB,cAAe,CACf,uBAAwB,CACxB,eAAgB,CAChB,KAAM,CACN,YAAa,CACb,aAAc,CACd,yDAA0D,CAC1D,8CAA+C,CAC/C,sCAAuC,CACvC,WAAY,CACZ,eAAe,CACf,kBAAmB,CAbpB,mCAgBE,iBAAkB,CAClB,SAAU,CACV,kDAAmD,CAlBrD,8CAoBG,kBAAmB,CACnB,SAAU,CArBb,yCAyBE,WAAY,CACZ,oCAAqC,CACrC,0BA3BF,yCA8BG,aAAc,CACd,CA/BH,gDAkCE,6BAA8B,CAC9B,eAAgB,CAChB,iCAID,iBAAkB,CAClB,UAAW,CACX,WAAY,CACZ,QAAS,CACT,oBAAqB,CACrB,QAAS,CACT,4BAA6B,CAC7B,UAAW,CACX,4BAA6B,CAC7B,iCAAkC,CAClC,kBAAmB,CAXpB,sHAaE,6CAA8C,CAbhD,mDAiBE,0BAA2B,CAC3B,kBAAmB,CACnB,iBAAkB,CAClB,uCAAwC,CACxC,UAAW,CACX,UAAW,CACX,SAAU,CACV,UAAW,CACX,QAAS,CAzBX,yHA+BE,SAAU,CA/BZ,sFAoCE,UAAW,CApCb,wGAuCG,UAAW,CAvCd,2CA4CE,iBAAkB,CA5CpB,yCAgDE,gBAAiB,CACjB,mCAID,oBAAqB,CACrB,UAAW,CACX,WAAY,CACZ,iBAAkB,CAClB,kBAAmB",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.menubar {\n\t--background-blur: blur(10px);\n\tposition: fixed;\n\tposition: -webkit-sticky;\n\tposition: sticky;\n\ttop: 0;\n\tdisplay: flex;\n\tz-index: 10010; // above modal-header so buttons are clickable\n\tbackground-color: var(--color-main-background-translucent);\n\t-webkit-backdrop-filter: var(--background-blur);\n\tbackdrop-filter: var(--background-blur);\n\theight: 50px;\n\tpadding-top:3px;\n\tpadding-bottom: 3px;\n\n\t&.autohide {\n\t\tvisibility: hidden;\n\t\topacity: 0;\n\t\ttransition: visibility 0.2s 0.4s, opacity 0.2s 0.4s;\n\t\t&.is-focused {\n\t\t\tvisibility: visible;\n\t\t\topacity: 1;\n\t\t}\n\t}\n\t.menubar-icons {\n\t\tflex-grow: 1;\n\t\tmargin-left: calc((100% - 660px) / 2);\n\t}\n\t@media (max-width: 660px) {\n\t\t.menubar-icons {\n\t\t\tmargin-left: 0;\n\t\t}\n\t}\n\t&::v-deep .action-item__menu ul {\n\t\tmax-height: calc(100vh - 88px);\n\t\toverflow: scroll;\n\t}\n}\n\n.menubar button {\n\tposition: relative;\n\twidth: 44px;\n\theight: 44px;\n\tmargin: 0;\n\tbackground-size: 16px;\n\tborder: 0;\n\tbackground-color: transparent;\n\topacity: .5;\n\tcolor: var(--color-main-text);\n\tbackground-position: center center;\n\tvertical-align: top;\n\t&:hover, &:focus, &:active {\n\t\tbackground-color: var(--color-background-dark);\n\t}\n\n\t&.is-active::before {\n\t\ttransform: translateX(-50%);\n\t\tborder-radius: 100%;\n\t\tposition: absolute;\n\t\tbackground: var(--color-primary-element);\n\t\tbottom: 3px;\n\t\theight: 6px;\n\t\twidth: 6px;\n\t\tcontent: '';\n\t\tleft: 50%;\n\n\t}\n\t&.is-active,\n\t&:hover,\n\t&:focus {\n\t\topacity: 1;\n\t}\n\n\t&.icon-undo,\n\t&.icon-redo {\n\t\topacity: .8;\n\n\t\t&:disabled {\n\t\t\topacity: .4;\n\t\t}\n\t}\n\n\t&.icon-redo {\n\t\tmargin-right: 22px;\n\t}\n\n\t&.icon-ul {\n\t\tmargin-left: 22px;\n\t}\n}\n\n.menubar .submenu {\n\tdisplay: inline-block;\n\twidth: 44px;\n\theight: 44px;\n\tposition: relative;\n\tvertical-align: top;\n}\n"],sourceRoot:""}]),t.a=a},707:function(n,t,e){"use strict";e.r(t);var i=e(750),o=e(246);for(var r in o)["default"].indexOf(r)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(r);e(751);var a=e(32),c=Object(a.a)(o.default,i.a,i.b,!1,null,"7a686b54",null);t.default=c.exports},708:function(n,t,e){"use strict";var i=e(46),o=e.n(i),r=e(47),a=e.n(r)()(o.a);a.push([n.i,".menububble[data-v-7a686b54]{position:absolute;display:flex;z-index:10020;background:var(--color-main-background-translucent);box-shadow:0 1px 5px var(--color-box-shadow);border-radius:var(--border-radius-large);overflow:hidden;padding:0;margin-bottom:-3px;margin-left:10px;visibility:hidden;opacity:0;transform:translateX(-50%);transition:opacity 0.2s, visibility 0.2s;height:44px}.menububble.is-active[data-v-7a686b54]{opacity:1;visibility:visible}.menububble__button[data-v-7a686b54]{display:block;flex-grow:1;border:0;padding:0.9rem 0.7rem;margin:0;border-radius:0;cursor:pointer;background-color:var(--color-main-background);border-right:1px solid var(--color-border)}.menububble__button[data-v-7a686b54]:focus,.menububble__button[data-v-7a686b54]:hover{background-color:var(--color-background-hover);border:0;border-right:1px solid var(--color-border) !important}.menububble__button[data-v-7a686b54]:last-child{border:0 !important}.menububble__buttontext[data-v-7a686b54]{padding:0.4rem;padding-right:0}.menububble__form[data-v-7a686b54]{display:flex;align-items:center}.menububble__input[data-v-7a686b54]{font:inherit;border:none;background:transparent;min-width:150px}\n","",{version:3,sources:["webpack://./src/components/MenuBubble.vue"],names:[],mappings:"AA+IA,6BACC,iBAAkB,CAClB,YAAa,CACb,aAAc,CACd,mDAAoD,CACpD,4CAA6C,CAC7C,wCAAyC,CACzC,eAAgB,CAChB,SAAU,CACV,kBAAmB,CACnB,gBAAiB,CACjB,iBAAkB,CAClB,SAAU,CACV,0BAA2B,CAC3B,wCAAyC,CACzC,WAAY,CAfb,uCAkBE,SAAU,CACV,kBAAmB,CACnB,qCAGA,aAAc,CACd,WAAY,CACZ,QAAS,CACT,qBAAsB,CACtB,QAAS,CACT,eAAgB,CAChB,cAAe,CACf,6CAA8C,CAC9C,0CAA2C,CAT3C,sFAaC,8CAA+C,CAC/C,QAAS,CACT,qDAAsD,CAfvD,gDAmBC,mBAAoB,CACpB,yCAID,cAAe,CACf,eAAgB,CAChB,mCAGA,YAAa,CACb,kBAAmB,CACnB,oCAGA,YAAa,CACb,WAAY,CACZ,sBAAuB,CACvB,eAAgB",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.menububble {\n\tposition: absolute;\n\tdisplay: flex;\n\tz-index: 10020;\n\tbackground: var(--color-main-background-translucent);\n\tbox-shadow: 0 1px 5px var(--color-box-shadow);\n\tborder-radius: var(--border-radius-large);\n\toverflow: hidden;\n\tpadding: 0;\n\tmargin-bottom: -3px;\n\tmargin-left: 10px;\n\tvisibility: hidden;\n\topacity: 0;\n\ttransform: translateX(-50%);\n\ttransition: opacity 0.2s, visibility 0.2s;\n\theight: 44px;\n\n\t&.is-active {\n\t\topacity: 1;\n\t\tvisibility: visible;\n\t}\n\n\t&__button {\n\t\tdisplay: block;\n\t\tflex-grow: 1;\n\t\tborder: 0;\n\t\tpadding: 0.9rem 0.7rem;\n\t\tmargin: 0;\n\t\tborder-radius: 0;\n\t\tcursor: pointer;\n\t\tbackground-color: var(--color-main-background);\n\t\tborder-right: 1px solid var(--color-border);\n\n\t\t&:focus,\n\t\t&:hover {\n\t\t\tbackground-color: var(--color-background-hover);\n\t\t\tborder: 0;\n\t\t\tborder-right: 1px solid var(--color-border) !important;\n\t\t}\n\n\t\t&:last-child {\n\t\t\tborder: 0 !important;\n\t\t}\n\t}\n\n\t&__buttontext {\n\t\tpadding: 0.4rem;\n\t\tpadding-right: 0;\n\t}\n\n\t&__form {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\n\t&__input {\n\t\tfont: inherit;\n\t\tborder: none;\n\t\tbackground: transparent;\n\t\tmin-width: 150px;\n\t}\n}\n"],sourceRoot:""}]),t.a=a},73:function(n,t,e){"use strict";var i=e(46),o=e.n(i),r=e(47),a=e.n(r)()(o.a);a.push([n.i,"#rich-workspace[data-v-374052d2]{padding:0 50px;margin-bottom:-24px;text-align:left;max-height:0;transition:max-height 0.5s cubic-bezier(0, 1, 0, 1)}#rich-workspace.creatable[data-v-374052d2]{min-height:90px}#rich-workspace[data-v-374052d2]:only-child{margin-bottom:0}.empty-workspace[data-v-374052d2]{padding-top:43px;color:var(--color-text-maxcontrast);height:0}#rich-workspace[data-v-374052d2] div[contenteditable=false]{width:100%;padding:0px;background-color:var(--color-main-background);opacity:1;border:none}#rich-workspace[data-v-374052d2] #editor-container{height:100%;position:unset !important;top:auto !important}#rich-workspace[data-v-374052d2] #editor-wrapper{position:unset !important;overflow:visible}#rich-workspace[data-v-374052d2] #editor{overflow:scroll !important;max-height:50vh;padding-left:10px}#rich-workspace[data-v-374052d2] #editor-wrapper .ProseMirror{padding:0px;margin:0}#rich-workspace[data-v-374052d2] .menubar{z-index:50;margin-bottom:-10px}#rich-workspace[data-v-374052d2] .menubar .menubar-icons{margin-left:0}#rich-workspace[data-v-374052d2] .editor__content{margin:0}#rich-workspace.focus[data-v-374052d2]{max-height:50vh}#rich-workspace[data-v-374052d2]:not(.focus){max-height:30vh;position:relative;overflow:hidden}#rich-workspace[data-v-374052d2]:not(.focus):not(.icon-loading):after{content:'';position:absolute;z-index:1;bottom:0;left:0;pointer-events:none;background-image:linear-gradient(to bottom, rgba(255,255,255,0), var(--color-main-background));width:100%;height:4em}#rich-workspace.dark[data-v-374052d2]:not(.focus):not(.icon-loading):after{background-image:linear-gradient(to bottom, rgba(0,0,0,0), var(--color-main-background))}@media only screen and (max-width: 1024px){#rich-workspace[data-v-374052d2]:not(.focus){max-height:30vh}}html.ie #rich-workspace[data-v-374052d2] #editor-container{position:initial}html.ie #rich-workspace[data-v-374052d2] #editor-wrapper{position:relative !important;top:auto !important}html.ie #rich-workspace[data-v-374052d2] #editor{display:flex;flex-direction:column;overflow:hidden !important}html.ie #rich-workspace[data-v-374052d2] .menubar{position:relative;overflow:hidden;flex-shrink:0;height:44px;top:auto}html.ie #rich-workspace[data-v-374052d2] #editor>div:nth-child(2){min-height:44px;overflow-x:hidden;overflow-y:auto;flex-shrink:1}\n","",{version:3,sources:["webpack://./src/views/RichWorkspace.vue"],names:[],mappings:"AA0KA,iCACC,cAAe,CAEf,mBAAoB,CACpB,eAAgB,CAChB,YAAa,CACb,mDAAoD,CANrD,2CAQE,eAAgB,CAChB,4CAKD,eAAgB,CAChB,kCAGA,gBAAiB,CACjB,mCAAoC,CACpC,QAAS,CACT,4DAGA,UAAW,CACX,WAAY,CACZ,6CAA8C,CAC9C,SAAU,CACV,WAAY,CACZ,mDAGA,WAAY,CACZ,yBAA0B,CAC1B,mBAAoB,CACpB,iDAGA,yBAA0B,CAC1B,gBAAiB,CACjB,yCAGA,0BAA2B,CAC3B,eAAgB,CAChB,iBAAkB,CAClB,8DAGA,WAAY,CACZ,QAAS,CACT,0CAGA,UAAW,CAEX,mBAAoB,CACpB,yDAGA,aAAc,CACd,kDAGA,QAAS,CACT,uCAGA,eAAgB,CAChB,6CAGA,eAAgB,CAChB,iBAAkB,CAClB,eAAgB,CAChB,sEAGA,UAAW,CACX,iBAAkB,CAClB,SAAU,CACV,QAAS,CACT,MAAO,CACP,mBAAoB,CACpB,8FAAkG,CAClG,UAAW,CACX,UAAW,CACX,2EAGA,wFAA4F,CAC5F,2CAGA,6CACC,eAAgB,CAChB,CAGF,2DAGG,gBAAiB,CAHpB,yDAOG,4BAA6B,CAC7B,mBAAoB,CARvB,iDAYG,YAAa,CACb,qBAAsB,CACtB,0BAA2B,CAd9B,kDAkBG,iBAAkB,CAClB,eAAgB,CAChB,aAAc,CACd,WAAY,CACZ,QAAS,CAtBZ,kEA0BG,eAAgB,CAChB,iBAAkB,CAClB,eAAgB,CAChB,aAAc",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n#rich-workspace {\n\tpadding: 0 50px;\n\t/* Slightly reduce vertical space */\n\tmargin-bottom: -24px;\n\ttext-align: left;\n\tmax-height: 0;\n\ttransition: max-height 0.5s cubic-bezier(0, 1, 0, 1);\n\t&.creatable {\n\t\tmin-height: 90px;\n\t}\n}\n\n/* For subfolders, where there are no Recommendations */\n#rich-workspace:only-child {\n\tmargin-bottom: 0;\n}\n\n.empty-workspace {\n\tpadding-top: 43px;\n\tcolor: var(--color-text-maxcontrast);\n\theight: 0;\n}\n\n#rich-workspace::v-deep div[contenteditable=false] {\n\twidth: 100%;\n\tpadding: 0px;\n\tbackground-color: var(--color-main-background);\n\topacity: 1;\n\tborder: none;\n}\n\n#rich-workspace::v-deep #editor-container {\n\theight: 100%;\n\tposition: unset !important;\n\ttop: auto !important;\n}\n\n#rich-workspace::v-deep #editor-wrapper {\n\tposition: unset !important;\n\toverflow: visible;\n}\n\n#rich-workspace::v-deep #editor {\n\toverflow: scroll !important;\n\tmax-height: 50vh;\n\tpadding-left: 10px;\n}\n\n#rich-workspace::v-deep #editor-wrapper .ProseMirror {\n\tpadding: 0px;\n\tmargin: 0;\n}\n\n#rich-workspace::v-deep .menubar {\n\tz-index: 50;\n\t/* Slightly reduce vertical space */\n\tmargin-bottom: -10px;\n}\n\n#rich-workspace::v-deep .menubar .menubar-icons {\n\tmargin-left: 0;\n}\n\n#rich-workspace::v-deep .editor__content {\n\tmargin: 0;\n}\n\n#rich-workspace.focus {\n\tmax-height: 50vh;\n}\n\n#rich-workspace:not(.focus) {\n\tmax-height: 30vh;\n\tposition: relative;\n\toverflow: hidden;\n}\n\n#rich-workspace:not(.focus):not(.icon-loading):after {\n\tcontent: '';\n\tposition: absolute;\n\tz-index: 1;\n\tbottom: 0;\n\tleft: 0;\n\tpointer-events: none;\n\tbackground-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), var(--color-main-background));\n\twidth: 100%;\n\theight: 4em;\n}\n\n#rich-workspace.dark:not(.focus):not(.icon-loading):after {\n\tbackground-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), var(--color-main-background));\n}\n\n@media only screen and (max-width: 1024px) {\n\t#rich-workspace:not(.focus) {\n\t\tmax-height: 30vh;\n\t}\n}\n\nhtml.ie {\n\t#rich-workspace::v-deep {\n\t\t#editor-container {\n\t\t\tposition: initial;\n\t\t}\n\n\t\t#editor-wrapper {\n\t\t\tposition: relative !important;\n\t\t\ttop: auto !important;\n\t\t}\n\n\t\t#editor {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\toverflow: hidden !important;\n\t\t}\n\n\t\t.menubar {\n\t\t\tposition: relative;\n\t\t\toverflow: hidden;\n\t\t\tflex-shrink: 0;\n\t\t\theight: 44px;\n\t\t\ttop: auto;\n\t\t}\n\n\t\t#editor > div:nth-child(2) {\n\t\t\tmin-height: 44px;\n\t\t\toverflow-x: hidden;\n\t\t\toverflow-y: auto;\n\t\t\tflex-shrink: 1;\n\t\t}\n\t}\n}\n\n"],sourceRoot:""}]),t.a=a},74:function(n,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return o}));var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.enabled?e("div",{class:{"icon-loading":!n.loaded||!n.ready,focus:n.focus,dark:n.darkTheme,creatable:n.canCreate},attrs:{id:"rich-workspace"}},[n.showEmptyWorkspace?e("div",{staticClass:"empty-workspace",on:{click:n.createNew}},[e("p",{staticClass:"placeholder"},[n._v("\n\t\t\t"+n._s(n.t("text","Add notes, lists or links …"))+"\n\t\t")])]):n._e(),n._v(" "),n.file?e("EditorWrapper",{directives:[{name:"show",rawName:"v-show",value:n.ready,expression:"ready"}],key:n.file.id,attrs:{"file-id":n.file.id,"relative-path":n.file.path,"share-token":n.shareToken,active:!0,autohide:!0,mime:n.file.mimetype,autofocus:n.autofocus},on:{ready:function(t){n.ready=!0},focus:function(t){n.focus=!0},blur:n.unfocus,error:n.reset}}):n._e()],1):n._e()},o=[]},748:function(n,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return o}));var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("EditorMenuBar",{attrs:{editor:n.editor},scopedSlots:n._u([{key:"default",fn:function(t){var i=t.commands,o=t.isActive,r=t.focused;return[e("div",{staticClass:"menubar",class:{"is-focused":r,autohide:n.autohide}},[n.isRichEditor?e("div",{ref:"menubar",staticClass:"menubar-icons"},[n._l(n.allIcons,(function(t,r){return[t.class?e("button",{directives:[{name:"show",rawName:"v-show",value:r<n.iconCount,expression:"$index < iconCount"}],key:t.label,class:n.getIconClasses(o,t),attrs:{title:t.label,disabled:n.disabled(i,t)},on:{click:function(e){return n.clickIcon(i,t)}}}):[e("div",{directives:[{name:"show",rawName:"v-show",value:r<n.iconCount||!t.class,expression:"$index < iconCount || !icon.class"},{name:"click-outside",rawName:"v-click-outside",value:function(){return n.hideChildMenu(t)},expression:"() => hideChildMenu(icon)"}],key:t.label,staticClass:"submenu"},[e("button",{class:n.childIconClasses(o,t.children),attrs:{title:t.label},on:{click:function(e){return e.preventDefault(),n.toggleChildMenu(t)}}}),n._v(" "),e("div",{staticClass:"popovermenu menu-center",class:{open:n.isChildMenuVisible(t)}},[e("PopoverMenu",{attrs:{menu:n.childPopoverMenu(o,i,t.children,t)}})],1)])]]})),n._v(" "),e("Actions",[n._l(n.allIcons,(function(t,o){return[t.class&&n.isHiddenInMenu(o)?e("ActionButton",{key:t.class,attrs:{icon:t.class},on:{click:function(e){return n.clickIcon(i,t)}}},[n._v("\n\t\t\t\t\t\t"+n._s(t.label)+"\n\t\t\t\t\t")]):n._e()]}))],2)],2):n._e(),n._v(" "),n._t("default",[n._v("\n\t\t\tLeft side\n\t\t")])],2)]}}],null,!0)})},o=[]},749:function(n,t,e){"use strict";var i=e(45),o=e.n(i),r=e(706),a={insert:"head",singleton:!1};o()(r.a,a),r.a.locals},750:function(n,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return o}));var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("EditorMenuBubble",{staticClass:"menububble",attrs:{editor:n.editor},on:{hide:n.hideLinkMenu},scopedSlots:n._u([{key:"default",fn:function(t){var i=t.commands,o=t.isActive,r=t.getMarkAttrs,a=t.menu;return[e("div",{staticClass:"menububble",class:{"is-active":a.isActive},style:"left: "+a.left+"px; bottom: "+a.bottom+"px;"},[n.linkMenuIsActive?e("form",{staticClass:"menububble__form",on:{submit:function(t){return t.preventDefault(),n.setLinkUrl(i.link,n.linkUrl)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:n.linkUrl,expression:"linkUrl"}],ref:"linkInput",staticClass:"menububble__input",attrs:{type:"text",placeholder:"https://"},domProps:{value:n.linkUrl},on:{keydown:function(t){return!t.type.indexOf("key")&&n._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:n.hideLinkMenu(t)},input:function(t){t.target.composing||(n.linkUrl=t.target.value)}}}),n._v(" "),e("button",{staticClass:"menububble__button icon-confirm",attrs:{type:"button",tabindex:"0"},on:{click:function(t){return n.setLinkUrl(i.link,n.linkUrl)}}})]):[e("button",{staticClass:"menububble__button",class:{"is-active":o.link()},on:{click:function(t){n.showLinkMenu(r("link"))}}},[e("span",{staticClass:"icon-link"}),n._v(" "),e("span",{staticClass:"menububble__buttontext"},[n._v("\n\t\t\t\t\t"+n._s(n.t("text",o.link()?"Update Link":"Add Link"))+"\n\t\t\t\t")])]),n._v(" "),e("button",{staticClass:"menububble__button",class:{"is-active":o.link()},on:{click:function(t){return n.selectFile(i.link)}}},[e("span",{staticClass:"icon-file"}),n._v(" "),e("span",{staticClass:"menububble__buttontext"},[n._v(n._s(n.t("text","Link file")))])])]],2)]}}])})},o=[]},751:function(n,t,e){"use strict";var i=e(45),o=e.n(i),r=e(708),a={insert:"head",singleton:!1};o()(r.a,a),r.a.locals},76:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.openMimetypesPlainText=t.openMimetypesMarkdown=t.openMimetypes=void 0;
/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
var i=["text/markdown"];t.openMimetypesMarkdown=i;var o=["text/plain","application/cmd","application/x-empty","application/x-msdos-program","application/javascript","application/json","application/x-perl","application/x-php","application/x-tex","application/xml","application/yaml","text/css","text/csv","text/html","text/org","text/x-c","text/x-c++src","text/x-h","text/x-java-source","text/x-ldif","text/x-python","text/x-shellscript"];t.openMimetypesPlainText=o;var r=[].concat(i,o);t.openMimetypes=r}}]);
//# sourceMappingURL=editor-rich.js.map?v=849aa1dad7b7665a1649