!function(){function e(e,t,a,n,o,r,i){try{var l=e[r](i),s=l.value}catch(c){return void a(c)}l.done?t(s):Promise.resolve(s).then(n,o)}function t(t){return function(){var a=this,n=arguments;return new Promise((function(o,r){var i=t.apply(a,n);function l(t){e(i,o,r,l,s,"next",t)}function s(t){e(i,o,r,l,s,"throw",t)}l(void 0)}))}}function a(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,a){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:n+"")in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}System.register(["./node/pnpm-legacy-aUv3HA1V.js","./index-legacy-Dhav_4_2.js"],(function(e,a){"use strict";var r,i,l,s,c,u,p,d,f,m,y,v,g,h,b,w,O,_,k,M,E,C,j,P;return{setters:[e=>{r=e.M,i=e.O,l=e.P,s=e.Q,c=e.a,u=e.r,p=e.R,d=e.U,f=e.V,m=e.u,y=e.o,v=e.D,g=e.G,h=e.W,b=e.X,w=e.f,O=e.e,_=e.T,k=e.c,M=e.v,E=e.Y,C=e.H,j=e.Z},e=>{P=e._}],execute:function(){var a=document.createElement("style");a.textContent=".a-map[data-v-979dc56a]{width:100%;height:100%;-webkit-transition-duration:1s;transition-duration:1s}.a-map[data-v-979dc56a] .amap-logo,.a-map[data-v-979dc56a] .amap-copyright{display:none!important}\n",document.head.appendChild(a);const R="67608d5cddbb31f46fc0d758745e6415",x="1dfc90c406278777a8387b407b17bfdb";var L=(e=>(e.NORMAL="amap://styles/normal",e.DARK="amap://styles/dark",e.LIGHT="amap://styles/light",e.WHITESMOKE="amap://styles/whitesmoke",e.FRESH="amap://styles/fresh",e.GREY="amap://styles/grey",e.GRAFFITI="amap://styles/graffiti",e.MACARON="amap://styles/macaron",e.BLUE="amap://styles/blue",e.DARKBLUE="amap://styles/darkblue",e.WINE="amap://styles/wine",e))(L||{});const S=new class{constructor(){o(this,"loading",null)}show(e){this.close();let t={};e&&("string"==typeof e?t.text=e:t=e),this.loading=s.service(n({lock:!0,fullscreen:!0,background:"rgba(0, 0, 0, 0.7)",target:"#app-box",customClass:"pointer-events-auto"},t))}setText(e){this.loading&&this.loading.setText(e)}close(){this.loading&&this.loading.close(),this.loading=null}},A={ElMessage:r,ElMessageBox:i,ElNotification:l,ElLoading:S},D={"element-loading-text":"地图加载中...",class:"wh-full overflow-hidden"},T=c({__name:"index",props:{viewMode:{default:"3D"},center:{default:()=>[120.30811,30.060291]},zoom:{default:11},pitch:{default:0},mapStyle:{default:L.GREY},plugins:{default:()=>[]},showLabel:{type:Boolean,default:!0},terrain:{type:Boolean,default:!1}},emits:["mapCallback"],setup(e,{expose:a,emit:n}){const o=e,r=n;let i=null,l=null;const s=u(null),c=u("opacity-0"),w=u(!1);function O(){return(O=t((function*(){var e;if(s.value){null===(e=i)||void 0===e||e.destroy(),c.value="opacity-0",w.value=!0;try{window._AMapSecurityConfig={securityJsCode:x};const{center:e,viewMode:t,zoom:a,pitch:n,mapStyle:u,plugins:p,showLabel:d,terrain:f}=o;if(l=yield h.load({key:R,version:"2.0",plugins:p,Loca:{version:"2.0"}}),!l)return;i=new l.Map(s.value,{viewMode:t,center:e,zoom:a,pitch:n,showLabel:d,mapStyle:u,layers:f?[new l.TileLayer.Satellite]:[]}),i.on("complete",(()=>{c.value="opacity-100",w.value=!1,i&&l&&r("mapCallback",i,l)}))}catch(t){w.value=!1,A.ElMessage.error("地图加载失败"),console.error(t)}}}))).apply(this,arguments)}return p((()=>{!function(){O.apply(this,arguments)}()})),d((()=>{var e;null===(e=i)||void 0===e||e.destroy()})),a({useMap:function(e){i&&l&&e(i,l)},getMap:function(){return i},getMapLoader:function(){return l}}),(e,t)=>{const a=b;return f((y(),v("div",D,[g("div",{ref_key:"mapRef",ref:s,class:"a-map"},null,512)])),[[a,m(w)]])}}}),I=P(T,[["__scopeId","data-v-979dc56a"]]),F={class:"relative size-full"},N={key:0,class:"absolute bottom-20px right-20px"},B=c({name:"home"});e("default",c(n(n({},B),{},{setup(e){let a=null,n=null,o=null,r=null;const i=[120.264366,30.186776],l=u(!1),s=u(!1);function c(e,t){return p.apply(this,arguments)}function p(){return(p=t((function*(e,t){a=e,n=t,l.value=!0,A.ElNotification.success({message:"请选择旅游范围",duration:5e3})}))).apply(this,arguments)}function d(){var e,t;a&&(s.value?a&&(null===(e=r)||void 0===e||e.close(),r=null,o&&a.remove(o),null===(t=o)||void 0===t||t.destroy(),o=null,s.value=!1):(A.ElMessage.success("点击地图选取中心点, 拖拽绘制圆形范围"),a.on("click",(e=>{var t;t=e.lnglat,a&&n&&(o=new n.Circle({center:t,radius:6e3,strokeColor:"#FF33FF",strokeWeight:6,strokeOpacity:.2,fillOpacity:.4,strokeStyle:"dashed",strokeDasharray:[10,10],fillColor:"#1791fc"}),a.add(o),r=new n.CircleEditor(a,o),r.open(),s.value=!0)}),void 0,!0)))}let f=null;function g(){var e;if(!a||!n||!r)return;const t=r.getTarget();if(!t)return;const o=t.getCenter(),i=t.getBounds(),l=null!==(e=null==i?void 0:i.getHeight())&&void 0!==e?e:0;function s(){return[o.getLng()+Math.random()*l-l/2,o.getLat()+Math.random()*l-l/2]}let c=s();if(i)for(;!i.contains(c);)c=s();f?f.setPosition(c):(f=new n.Marker({position:c}),f.on("click",(()=>{var e;null===(e=f)||void 0===e||e.getPosition()})),a.add(f))}return(e,t)=>{const a=I,n=j;return y(),v("div",F,[w(a,{center:i,zoom:13,plugins:["AMap.CircleEditor"],"map-style":m(L).NORMAL,onMapCallback:c},null,8,["plugins","map-style"]),w(_,{appear:!0,"enter-active-class":"animate__animated animate__bounceInRight","leave-to-class":"animate__animated animate__bounceOutRight"},{default:O((()=>[m(l)?(y(),v("div",N,[w(_,{appear:!0,"enter-active-class":"animate__animated animate__bounceInRight","leave-to-class":"animate__animated animate__bounceOutRight"},{default:O((()=>[m(s)?(y(),k(n,{key:0,type:"success",onClick:g},{default:O((()=>[M(" 随机生成点位 ")])),_:1})):E("",!0)])),_:1}),w(n,{type:"primary",onClick:d},{default:O((()=>[M(C(m(s)?"取消范围":"选择范围"),1)])),_:1})])):E("",!0)])),_:1})])}}})))}}}))}();
