(function(e){function t(t){for(var n,r,s=t[0],c=t[1],d=t[2],f=0,u=[];f<s.length;f++)r=s[f],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&u.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(u.length)u.shift()();return i.push.apply(i,d||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,r=1;r<a.length;r++){var s=a[r];0!==o[s]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={"app~2bc5b870":0},o={"app~2bc5b870":0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-59dd0a07":"6335663e"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={"chunk-59dd0a07":1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({}[e]||e)+"."+{"chunk-59dd0a07":"45969ce4"}[e]+".css",o=c.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var d=i[s],f=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(f===n||f===o))return t()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){d=u[s],f=d.getAttribute("data-href");if(f===n||f===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[e],l.parentNode.removeChild(l),a(i)},l.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){r[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=i);var d,f=document.createElement("script");f.charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.src=s(e);var u=new Error;d=function(t){f.onerror=f.onload=null,clearTimeout(l);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",u.name="ChunkLoadError",u.type=n,u.request=r,a[1](u)}o[e]=void 0}};var l=setTimeout((function(){d({type:"timeout",target:f})}),12e4);f.onerror=f.onload=d,document.head.appendChild(f)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vis-homepage/",c.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],f=d.push.bind(d);d.push=t,d=d.slice();for(var u=0;u<d.length;u++)t(d[u]);var l=f;i.push([0,"three~52589227","three~70166b35","three~f43591b8","three~5ee2e9fb","vis-three~f12e8e7e","vis-three~660dd648","element-ui~9ad0f35b","element-ui~6f62f68e","vue~daa565d3","chunk-vendors~253ae210"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1628:function(e,t,a){},"1dd2":function(e,t,a){},"2a8e":function(e,t,a){},3244:function(e,t,a){},"35bb":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("2209");const r=(new n["b"]).install(n["c"].CSS3DRENDERER);r.loaderManager.getLoader("glb").dracoLoader.setDecoderPath("plugins/draco/gltf/"),r.eventManager.recursive=!0,window.VIS={},window.VIS.engine=r},"4c7e":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("be4f"),a("450d");var n=a("896a"),r=a.n(n),o=(a("0fae"),a("4c7e"),a("1dd2"),a("ee40"),a("3244"),a("323e")),i=a.n(o),s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"icon-container",style:{"font-size":e.size,color:e.color}},[t("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[t("use",{attrs:{"xlink:href":e.code}})])])},c=[],d={name:"vis-icon",props:{code:{type:String},size:{type:String},color:{type:String}},data(){return{}},mounted(){},beforeDestroy(){}},f=d,u=(a("9a1d"),a("2877")),l=Object(u["a"])(f,s,c,!1,null,null,null),p=l.exports,g=e=>{e.component(p.name,p)},m=(a("0fb7"),a("f529")),h=a.n(m),b=a("bc3a"),v=a.n(b),y=a("852e"),x=a.n(y);let S={baseURL:"/",Headers:{Authorization:"Bearer"}};const w=v.a.create(S);w.interceptors.request.use((function(e){const t=x.a.get("accessToken");return t&&(e.headers.Authorization="Bearer "+t),e}),(function(e){return h.a.error(JSON.stringify(e)),Promise.reject(e)})),w.interceptors.response.use((function(e){if(200===e.status)return e.data;h.a.error(e.data.message)}),(function(e){const t=e.response;if(404!==t.status)if(401!==t.status){if(400!==t.status)return h.a.error(t.data.message||e.message),Promise.reject(e);h()({type:"error",message:t.data.message})}else h()({type:"error",message:t.data.message,onClose:()=>{window.location.href="/login.html"}});else h()({type:"error",message:t.data.message,onClose:()=>{}})})),w.upload=function(e,t){const a=t.get("file"),n=a?a.name:"",r=h()({message:`正在上传${n}：0%`,duration:0,type:"info"});return new Promise((a,o)=>{w.post(e,t,{"Content-type":"multipart/form-data",onUploadProgress:e=>{r.message=`正在上传${n}：${Math.round(e.loaded/e.total*100)}% `}}).then(e=>{200===e.status?(r.type="success",r.message="上传成功！",a(e)):(r.type="error",r.message="上传失败:"+e.message,o(e))}).catch(e=>{r.type="error",r.message="上传失败:"+e.message,o(e)}).finally(()=>{setTimeout(()=>{r.close()},1e3)})})};const C={install(e,t){e.axios=w,window.axios=w,Object.defineProperties(e.prototype,{axios:{get(){return w}},$axios:{get(){return w}}})}};a("46a1");var T=a("e5f2"),E=a.n(T),L=a("6c0f"),j=Object(L["a"])(a("f529")).default;j.loading=function(e){return j("string"===typeof e?{type:"info",message:e,duration:0,iconClass:"el-icon-loading"}:{type:"info",message:"正在加载...",duration:0,iconClass:"el-icon-loading",...e})},E.a.loading=function(e){return"string"===typeof e?E()({message:e,duration:0,iconClass:"el-icon-loading"}):E()({message:"正在加载...",duration:0,iconClass:"el-icon-loading",...e})};var z=a("a026"),M=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("render-window"),t("loading-manager")],1)},O=[],A=function(){var e=this,t=e._self._c;return t("div",{staticClass:"renderWindow-container"},[t("iframe",{ref:"renderMask",staticClass:"render-mask",attrs:{width:"100%",height:"100%",scrolling:"no"}}),t("div",{ref:"renderElement",staticClass:"render-window"})])},D=[],k=a("35bb"),P=a("aca9"),_=(a("a8a4"),a("2209")),N={data(){return{timer:"",canResize:!0,throttleTime:1e3/60}},async mounted(){k["a"].setDom(this.$refs.renderElement).setSize().play();const e=this.$refs.renderMask;e.contentWindow.addEventListener("resize",t=>{if(!this.canResize)return!1;this.canResize=!1,this.timer=setTimeout(()=>{k["a"].setSize(e.offsetWidth,e.offsetHeight),this.canResize=!0},this.throttleTime)});const t=this.$loading({text:"正在加载项目...",background:"rgba(0, 0, 0, 0.3)"}),a=_["d"].handler(P,e=>Object(_["e"])(e.type,e,{strict:!1}));await k["a"].loadConfigAsync(a),k["a"].setScene(Object(_["f"])(_["a"].SCENE)),t.close()}},R=N,U=(a("93ee"),Object(u["a"])(R,A,D,!1,null,"2e9977c7",null)),F=U.exports;const $=()=>a.e("chunk-59dd0a07").then(a.bind(null,"92c4"));var G={components:{renderWindow:F,loadingManager:$}},W=G,B=(a("d01b"),Object(u["a"])(W,M,O,!1,null,"d011af7c",null)),I=B.exports;i.a.start(),z["default"].use(r.a),z["default"].use(g),z["default"].use(C),z["default"].config.productionTip=!1;new z["default"]({render:e=>e(I),created(){},mounted(){i.a.done()}}).$mount("#app")},"63af":function(e,t,a){},"93ee":function(e,t,a){"use strict";a("63af")},"9a1d":function(e,t,a){"use strict";a("1628")},a8a4:function(e){e.exports=JSON.parse("{}")},aca9:function(e){e.exports=JSON.parse('{"assets":["/vis-homepage/model/vis-1669255321030/vis.obj","/vis-homepage/texture/nx-1669254807434.png","/vis-homepage/texture/px-1669254820166.png","/vis-homepage/texture/py-1669254822649.png","/vis-homepage/texture/ny-1669254809885.png","/vis-homepage/model/three-1669255317488/three.obj","/vis-homepage/texture/pz-1669254825200.png","/vis-homepage/texture/vis-color-map-1669254797679.png","/vis-homepage/texture/nz-1669254812328.png"],"object3D":[],"camera":[],"light":[],"geometry":[{"vid":"8f20ea8d-5f29-45a0-a20a-cab7446f691c","type":"LoadGeometry","position":{"x":-0.17871186193577404,"z":0.13114928379509186},"rotation":{"x":1.5707963267948966},"url":"/vis-homepage/model/three-1669255317488/three.obj.children.0.geometry"},{"vid":"c7cb3921-d73a-426d-84ef-e58ff4f24a6f","type":"LoadGeometry","position":{"x":0.03853263046418975,"y":0.06207702192810319,"z":-0.08647157189875437},"url":"/vis-homepage/model/vis-1669255321030/vis.obj.children.0.geometry"}],"texture":[{"vid":"064e8403-27f1-4b01-997d-46dd0c1595fb","type":"CubeTexture","name":"盒状贴图-fb","cube":{"nx":"/vis-homepage/texture/nx-1669254807434.png","ny":"/vis-homepage/texture/ny-1669254809885.png","nz":"/vis-homepage/texture/nz-1669254812328.png","px":"/vis-homepage/texture/px-1669254820166.png","py":"/vis-homepage/texture/py-1669254822649.png","pz":"/vis-homepage/texture/pz-1669254825200.png"}},{"vid":"a012c84e-a0fc-4981-9ad4-cb684ccda8c3","type":"ImageTexture","name":"vis-color-mapc3","url":"/vis-homepage/texture/vis-color-map-1669254797679.png"}],"material":[{"vid":"7b67f095-b74d-473b-8052-92a61c077efd","type":"MeshPhongMaterial","name":"None","flatShading":true},{"vid":"2a3a9443-c49c-450d-94a9-a3daa55255c9","type":"MeshPhongMaterial","name":"None","flatShading":true},{"vid":"cf454bb0-22f1-4a18-95fd-faa3ac11935f","type":"MeshStandardMaterial","name":"vis","opacity":0.8,"transparent":true,"metalness":1,"roughness":0,"map":"a012c84e-a0fc-4981-9ad4-cb684ccda8c3"},{"vid":"44fbb408-8997-4860-b84f-16f0e974d1de","type":"MeshStandardMaterial","name":"three","envMapIntensity":0.8,"metalness":1,"roughness":0}],"renderer":[{"vid":"DEFUALT-WebGLRenderer","type":"WebGLRenderer","clearColor":"rgba(15, 15, 15, 1)","physicallyCorrectLights":true,"shadowMap":{"enabled":true,"type":1},"toneMapping":2,"toneMappingExposure":3}],"scene":[{"vid":"DEFUALT-Scene","name":"默认场景","type":"Scene","children":["5f117337-1798-49d8-b8f4-2764668f37ac","ed3006dd-a48c-46dd-b424-ac947cd7fe10","6eda0210-9f70-4057-89b9-9d28cfd9f294","8cc67939-a4d3-4dae-b4c8-932470362eea","e11de793-4a5c-495c-9b6f-dfe8696fb9dd"],"background":"064e8403-27f1-4b01-997d-46dd0c1595fb","environment":"064e8403-27f1-4b01-997d-46dd0c1595fb","fog":{"type":""}}],"controls":[{"vid":"DEFUALT-TransformControls","type":"TransformControls","mode":"scale"},{"vid":"DEFUALT-OrbitControls","type":"OrbitControls","autoRotate":true,"autoRotateSpeed":0.2}],"sprite":[],"line":[],"mesh":[{"vid":"e52282f1-0ef9-401d-8211-633957f44fb8","name":"圆环","type":"Mesh","castShadow":false,"receiveShadow":false,"parent":"5f117337-1798-49d8-b8f4-2764668f37ac","material":"44fbb408-8997-4860-b84f-16f0e974d1de","geometry":"8f20ea8d-5f29-45a0-a20a-cab7446f691c"},{"vid":"ed3006dd-a48c-46dd-b424-ac947cd7fe10","name":"环境光-10","type":"AmbientLight","parent":"DEFUALT-Scene","icon":"#icondengpao"},{"vid":"9c53b672-eacf-46b7-a362-b382ba818367","name":"vis_平面.004","type":"Mesh","castShadow":false,"receiveShadow":false,"scale":{"x":6.673253156618664,"y":6.673253156618664,"z":6.673253156618664},"parent":"6eda0210-9f70-4057-89b9-9d28cfd9f294","material":"cf454bb0-22f1-4a18-95fd-faa3ac11935f","geometry":"c7cb3921-d73a-426d-84ef-e58ff4f24a6f"},{"vid":"8cc67939-a4d3-4dae-b4c8-932470362eea","name":"平行光-ea","type":"DirectionalLight","position":{"x":44.79399000195638,"y":21.670377943517007,"z":36.81196042516757},"parent":"DEFUALT-Scene","intensity":12000,"icon":"#icondengpao"},{"vid":"e11de793-4a5c-495c-9b6f-dfe8696fb9dd","name":"平行光-dd","type":"DirectionalLight","position":{"x":-32.92454733482155,"y":33.96716914317635,"z":-38.57111779145576},"parent":"DEFUALT-Scene","intensity":12000,"icon":"#icondengpao"}],"points":[],"group":[{"vid":"5f117337-1798-49d8-b8f4-2764668f37ac","name":"three","type":"Group","castShadow":false,"receiveShadow":false,"scale":{"x":80,"y":80,"z":80},"parent":"DEFUALT-Scene","children":["e52282f1-0ef9-401d-8211-633957f44fb8"]},{"vid":"6eda0210-9f70-4057-89b9-9d28cfd9f294","name":"vis","type":"Group","castShadow":false,"receiveShadow":false,"parent":"DEFUALT-Scene","children":["9c53b672-eacf-46b7-a362-b382ba818367"]}],"css3D":[],"css2D":[],"pass":[],"animation":[{"vid":"d74c0190-1da9-4c2f-ab08-621f57de89be","type":"ScriptAnimation","target":"6eda0210-9f70-4057-89b9-9d28cfd9f294","attribute":".rotation.y","script":{"name":"linearTime","multiply":0.2}},{"vid":"b5eb031e-fa72-47b0-9e87-75a44a3c497d","type":"ScriptAnimation","target":"5f117337-1798-49d8-b8f4-2764668f37ac","attribute":".rotation.z","script":{"name":"linearTime","multiply":0.2}}]}')},d01b:function(e,t,a){"use strict";a("2a8e")},ee40:function(e,t,a){}});