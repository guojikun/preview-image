(function(e){function t(t){for(var o,n,r=t[0],l=t[1],c=t[2],h=0,p=[];h<r.length;h++)n=r[h],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&p.push(s[n][0]),s[n]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var e,t=0;t<a.length;t++){for(var i=a[t],o=!0,r=1;r<i.length;r++){var l=i[r];0!==s[l]&&(o=!1)}o&&(a.splice(t--,1),e=n(n.s=i[0]))}return e}var o={},s={app:0},a=[];function n(t){if(o[t])return o[t].exports;var i=o[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=o,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/preview-image/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=l;a.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"0554":function(e,t,i){var o=i("96a4");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var s=i("499e").default;s("17611838",o,!0,{sourceMap:!1,shadowMode:!1})},"158c":function(e,t,i){var o=i("24fb");t=o(!1),t.push([e.i,".owl-preview{width:100vw;height:100vh;position:absolute;top:50%;left:50%;background-color:rgba(0,0,0,.5);overflow:hidden;border-radius:4px}.owl-preview-image{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:0 auto;display:block}.owl-preview-image:active{cursor:pointer}.owl-preview-close{position:absolute;top:20px;right:20px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;background-color:rgba(0,0,0,.6);border-radius:50%;font-size:26px;display:flex;height:30px;width:30px;align-content:center;align-items:center;justify-content:center;color:#fff}.owl-preview .owl-preview-utils{position:absolute;bottom:5%;left:50%;transform:translateX(-98px);border-radius:30px;z-index:20;background-color:rgba(0,0,0,.8);display:flex;padding:8px 10px}.owl-preview .owl-preview-utils-item{cursor:pointer;margin:0 10px;color:#fff;font-size:24px}.font-svg{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:18px;display:inline-block;width:1em;height:1em;fill:currentColor;overflow:hidden}",""]),e.exports=t},"2ca7":function(e,t,i){var o=i("158c");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var s=i("499e").default;s("297cad7a",o,!0,{sourceMap:!1,shadowMode:!1})},"376a":function(e,t,i){e.exports=i.p+"img/a.ceff6f19.jpg"},4272:function(e,t,i){"use strict";var o=i("2ca7"),s=i.n(o);s.a},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var o=i("2b0e"),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"preview"},[i("div",{staticClass:"preview-item"},[i("h2",[e._v("基础用法")]),i("div",{staticClass:"preview-item-ctx"},[i("button",{staticClass:"button",on:{click:e.show}},[e._v("点击查看预览界面")]),i("owl-preview-image",{attrs:{src:e.a},model:{value:e.visiable,callback:function(t){e.visiable=t},expression:"visiable"}})],1)]),i("div",{staticClass:"preview-item"},[i("h2",[e._v("基础用法--设置宽高")]),i("div",{staticClass:"preview-item-ctx"},[i("button",{staticClass:"button",on:{click:e.show1}},[e._v("点击查看预览界面")]),i("owl-preview-image",{attrs:{src:e.a,width:"90vw",height:"90vh"},model:{value:e.visiable1,callback:function(t){e.visiable1=t},expression:"visiable1"}})],1)])])])},a=[],n=(i("caad"),i("2532"),i("376a")),r=i.n(n),l=i("cf05"),c=i.n(l),u=(i("b0c0"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"owl-preview",style:{"z-index":e.zIndex,display:e.flag?"block":"none",width:e.width,height:e.height,marginLeft:e.parseMg(e.width),marginTop:e.parseMg(e.height)}},[i("img",{ref:"ref",staticClass:"owl-preview-image",style:{transform:"rotate("+e.angle+"deg) scale("+e.scale+")",left:e.x+"px",top:e.y+"px"},attrs:{src:e.uri,alt:"",draggable:"false"},on:{mousemove:e.move,mouseup:e.mouseup,mousedown:e.mousedown}}),i("div",{staticClass:"owl-preview-close",style:{"z-index":e.zIndex+1},on:{click:e.close}},[i("svg",{staticClass:"font-svg",attrs:{viewBox:"0 0 1024 1024","aria-hidden":"true"}},[i("use",{attrs:{href:"#preview-image-close"}})])]),i("div",{staticClass:"owl-preview-utils",style:{"z-index":e.zIndex+1}},[i("svg",{staticClass:"font-svg owl-preview-utils-item",attrs:{viewBox:"0 0 1024 1024","aria-hidden":"true"},on:{click:e.zoomOut}},[i("use",{attrs:{href:"#preview-image-zoom-out"}})]),i("svg",{staticClass:"font-svg owl-preview-utils-item",attrs:{viewBox:"0 0 1024 1024","aria-hidden":"true"},on:{click:e.enlarge}},[i("use",{attrs:{href:"#preview-image-zoom-in"}})]),i("svg",{staticClass:"font-svg owl-preview-utils-item",attrs:{viewBox:"0 0 1024 1024","aria-hidden":"true"},on:{click:e.clockwiseRotation}},[i("use",{attrs:{href:"#preview-image-refresh-left"}})]),i("svg",{staticClass:"font-svg owl-preview-utils-item",attrs:{viewBox:"0 0 1024 1024","aria-hidden":"true"},on:{click:e.anticlockwiseRotation}},[i("use",{attrs:{href:"#preview-image-refresh-right"}})])]),i("svg",{attrs:{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[i("symbol",{attrs:{id:"preview-image-close",viewBox:"0 0 1024 1024"}},[i("path",{attrs:{d:"M559.78666667 512L853.33333333 218.45333333c13.65333333-13.65333333 13.65333333-34.13333333 0-47.78666666-13.65333333-13.65333333-34.13333333-13.65333333-47.78666666 0L512 464.21333333l-293.54666667-295.82222186c-13.65333333-13.65333333-34.13333333-13.65333333-47.78666666 0-13.65333333 13.65333333-13.65333333 34.13333333 0 47.78666666l293.54666666 295.82222187-295.82222186 293.54666667c-13.65333333 13.65333333-13.65333333 34.13333333 0 47.78666666 6.82666667 6.82666667 15.92888853 9.10222187 25.0311104 9.10222187s18.2044448-2.2755552 25.03111146-9.10222187L512 559.78666667 805.54666667 853.33333333c6.82666667 6.82666667 15.92888853 9.10222187 25.03111146 9.10222187s18.2044448-2.2755552 25.0311104-9.10222187c13.65333333-13.65333333 13.65333333-34.13333333 0-47.78666666L559.78666667 512z"}})]),i("symbol",{attrs:{id:"preview-image-zoom-out",viewBox:"0 0 1024 1024"}},[i("path",{attrs:{d:"M919.264 905.984l-138.912-138.912C851.808 692.32 896 591.328 896 480c0-229.376-186.624-416-416-416S64 250.624 64 480s186.624 416 416 416c95.008 0 182.432-32.384 252.544-86.208l141.44 141.44a31.904 31.904 0 0 0 45.248 0 32 32 0 0 0 0.032-45.248zM128 480C128 285.92 285.92 128 480 128s352 157.92 352 352-157.92 352-352 352S128 674.08 128 480z"}}),i("path",{attrs:{d:"M625.792 448H336a32 32 0 0 0 0 64h289.792a32 32 0 1 0 0-64z"}})]),i("symbol",{attrs:{id:"preview-image-zoom-in",viewBox:"0 0 1024 1024"}},[i("path",{attrs:{d:"M919.264 905.984l-138.912-138.912C851.808 692.32 896 591.328 896 480c0-229.376-186.624-416-416-416S64 250.624 64 480s186.624 416 416 416c95.008 0 182.432-32.384 252.544-86.208l141.44 141.44a31.904 31.904 0 0 0 45.248 0 32 32 0 0 0 0.032-45.248zM128 480C128 285.92 285.92 128 480 128s352 157.92 352 352-157.92 352-352 352S128 674.08 128 480z"}}),i("path",{attrs:{d:"M625.792 448H512v-112a32 32 0 0 0-64 0V448h-112a32 32 0 0 0 0 64H448v112a32 32 0 1 0 64 0V512h113.792a32 32 0 1 0 0-64z"}})]),i("symbol",{attrs:{id:"preview-image-refresh-left",viewBox:"0 0 1024 1024"}},[i("path",{attrs:{d:"M881.6703206 269.97378253a437.96818845 437.96818845 0 0 0-719.14189984-11.18481067V200.37940505a24.44088298 24.44088298 0 0 0-48.93354667 0v144.15978193c0 4.40143053 1.44988327 8.28504534 3.46936176 11.85796975a24.3373191 24.3373191 0 0 0 12.16866016 12.53113128c12.47934934 5.38527881 26.77105186 0 32.31167525-12.37578668a389.70780089 389.70780089 0 0 1 356.25693276-231.2045345 389.70780089 389.70780089 0 0 1 389.75958282 389.75958282c0 214.94513422-174.86622932 389.81136475-389.75958282 389.81136353a389.08642251 389.08642251 0 0 1-383.7011437-320.99370902 24.44088298 24.44088298 0 1 0-48.1568237 8.59573332 437.96818845 437.96818845 0 0 0 431.8579674 361.33152236c241.92331261 0 438.69312948-196.82159882 438.69312948-438.74491019 0-87.82147675-25.89076502-172.58784237-74.8243129-245.13376712"}})]),i("symbol",{attrs:{id:"preview-image-refresh-right",viewBox:"0 0 1024 1024"}},[i("path",{attrs:{d:"M924.39230934 564.14465897a24.3373191 24.3373191 0 0 0-28.37627972 19.78054519A389.08642251 389.08642251 0 0 1 512.2631052 904.91891318c-214.94513422 0-389.81136475-174.86622932-389.81136476-389.81136353a389.70780089 389.70780089 0 0 1 713.03168-217.94846342c12.63469394 18.69313305 23.76772267 38.68080355 32.98483557 59.3934151 5.48884268 12.32400475 19.88410785 17.91641008 32.25989333 12.32400475a24.02662992 24.02662992 0 0 0 12.22044088-12.42756741 24.07841185 24.07841185 0 0 0 3.5211449-11.90975169V200.37940505a24.49266369 24.49266369 0 0 0-48.93354666 0v58.46134754a437.86462459 437.86462459 0 0 0-719.14190105 11.13302994A436.51830518 436.51830518 0 0 0 73.56997572 515.10754965c0 241.92331261 196.82159882 438.69312948 438.69312948 438.69312947a437.96818845 437.96818845 0 0 0 431.90974813-361.27974164 24.49266369 24.49266369 0 0 0-19.78054399-28.37627851"}})])])])}),h=[],p=(i("a9e3"),i("ac1f"),i("466d"),i("5319"),{name:"PreviewImage",model:{event:"change",prop:"visiable"},props:{visiable:{type:Boolean,default:!1},src:String,zIndex:{type:[Number,String],default:9e3},width:{type:String,default:"100vw"},height:{type:String,default:"100vh"}},data:function(){return{flag:!1,uri:"",status:"0",angle:0,scale:1,x:0,y:0,startLocation:{x:0,y:0},cacheX:0,cacheY:0}},mounted:function(){this.init()},methods:{init:function(){var e=document.querySelector("body");e.appendChild(this.$el),this.flag=this.visiable},close:function(){this.flag=!1,this.$emit("change",this.flag)},move:function(e){if(1===this.status){var t=e.x,i=e.y,o=t-this.statusLocation.x,s=i-this.statusLocation.y;this.x=this.x+o-this.cacheX,this.y=this.y+s-this.cacheY,this.cacheX=o,this.cacheY=s}},mouseup:function(){this.status=0,this.cacheX=0,this.cacheY=0},mousedown:function(e){this.status=1,this.statusLocation={x:e.x,y:e.y}},zoomOut:function(){this.scale>.5&&(this.scale-=.1)},enlarge:function(){this.scale<2&&(this.scale+=.1)},clockwiseRotation:function(){this.angle+=90},anticlockwiseRotation:function(){this.angle-=90},parseMg:function(e){var t=/^\d+/g,i=e.match(t),o="";return i.length>0&&(o=i[0]),o=o/2+e.replace(/\d+/,""),"-".concat(o)},getScrollWidth:function(){var e=document.createElement("div"),t=document.createElement("div");e.appendChild(t),e.style.width="100px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var i=t.offsetWidth,o=e.offsetWidth,s=setTimeout((function(){document.body.removeChild(e),clearTimeout(s)}),10);return o-i}},watch:{visiable:{handler:function(e){this.flag=e,e?(document.body.style.paddingRight=this.getScrollWidth()+"px",document.body.style.overflow="hidden"):document.body.setAttribute("style","")},immediate:!0},src:{handler:function(e,t){e!==t?(this.uri=e,this.angle=0,this.scale=1,this.x=0,this.y=0,this.startLocation={x:0,y:0},this.cacheX=0,this.cacheY=0):this.uri=e},immediate:!0}}}),d=p,f=(i("4272"),i("2877")),v=Object(f["a"])(d,u,h,!1,null,null,null),w=v.exports;w.install=function(e){e.component("Owl".concat(w.name),w)};var g=w,m={name:"App",components:{OwlPreviewImage:g},data:function(){return{a:r.a,b:c.a,visiable:!1,visiable1:!1,visiable2:!1}},mounted:function(){this.getScrollWidth()},methods:{show:function(){this.visiable=!0},show1:function(){this.visiable1=!0},show2:function(){this.visiable2=!0},switchImage:function(){var e=this.b,t=e.includes("logo");this.b=t?r.a:c.a,console.log(this.b)}}},b=m,x=(i("5c0b"),Object(f["a"])(b,s,a,!1,null,null,null)),y=x.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(y)}}).$mount("#app")},"5c0b":function(e,t,i){"use strict";var o=i("0554"),s=i.n(o);s.a},"96a4":function(e,t,i){var o=i("24fb");t=o(!1),t.push([e.i,"#app{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#2c3e50;height:150vh}.preview{max-width:1300px;margin:0 auto}.button{background-color:#fff;color:#409eff;border:1px solid #409eff;line-height:1em;padding:8px 20px;font-size:14px;border-radius:4px;outline:none;cursor:pointer}.button:hover{color:#fff;background-color:#409eff}",""]),e.exports=t},cf05:function(e,t,i){e.exports=i.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.29284c96.js.map