(self["webpackChunkhieu_ttn"]=self["webpackChunkhieu_ttn"]||[]).push([[552],{1990:function(e,t,n){"use strict";n(3766);var s=n(2893),i=n(8273),r=n(9488);const a=["sm","md","lg","xl"],l=(()=>a.reduce(((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e)),{}))(),o=(()=>a.reduce(((e,t)=>(e["offset"+(0,r.Zb)(t)]={type:[String,Number],default:null},e)),{}))(),u=(()=>a.reduce(((e,t)=>(e["order"+(0,r.Zb)(t)]={type:[String,Number],default:null},e)),{}))(),c={col:Object.keys(l),offset:Object.keys(o),order:Object.keys(u)};function f(e,t,n){let s=e;if(null!=n&&!1!==n){if(t){const n=t.replace(e,"");s+=`-${n}`}return"col"!==e||""!==n&&!0!==n?(s+=`-${n}`,s.toLowerCase()):s.toLowerCase()}}const d=new Map;t.A=s["default"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...l,offset:{type:[String,Number],default:null},...o,order:{type:[String,Number],default:null},...u,alignSelf:{type:String,default:null,validator:e=>["auto","start","end","center","baseline","stretch"].includes(e)},tag:{type:String,default:"div"}},render(e,{props:t,data:n,children:s,parent:r}){let a="";for(const i in t)a+=String(t[i]);let l=d.get(a);if(!l){let e;for(e in l=[],c)c[e].forEach((n=>{const s=t[n],i=f(e,n,s);i&&l.push(i)}));const n=l.some((e=>e.startsWith("col-")));l.push({col:!n||!t.cols,[`col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),d.set(a,l)}return e(t.tag,(0,i.Ay)(n,{class:l}),s)}})},5820:function(e,t,n){"use strict";n(3766);var s=n(2893),i=n(8273),r=n(9488);const a=["sm","md","lg","xl"],l=["start","end","center"];function o(e,t){return a.reduce(((n,s)=>(n[e+(0,r.Zb)(s)]=t(),n)),{})}const u=e=>[...l,"baseline","stretch"].includes(e),c=o("align",(()=>({type:String,default:null,validator:u}))),f=e=>[...l,"space-between","space-around"].includes(e),d=o("justify",(()=>({type:String,default:null,validator:f}))),p=e=>[...l,"space-between","space-around","stretch"].includes(e),g=o("alignContent",(()=>({type:String,default:null,validator:p}))),m={align:Object.keys(c),justify:Object.keys(d),alignContent:Object.keys(g)},v={align:"align",justify:"justify",alignContent:"align-content"};function h(e,t,n){let s=v[e];if(null!=n){if(t){const n=t.replace(e,"");s+=`-${n}`}return s+=`-${n}`,s.toLowerCase()}}const y=new Map;t.A=s["default"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u},...c,justify:{type:String,default:null,validator:f},...d,alignContent:{type:String,default:null,validator:p},...g},render(e,{props:t,data:n,children:s}){let r="";for(const i in t)r+=String(t[i]);let a=y.get(r);if(!a){let e;for(e in a=[],m)m[e].forEach((n=>{const s=t[n],i=h(e,n,s);i&&a.push(i)}));a.push({"no-gutters":t.noGutters,"row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),y.set(r,a)}return e(t.tag,(0,i.Ay)(n,{staticClass:"row",class:a}),s)}})},8273:function(e,t,n){"use strict";n.d(t,{Ay:function(){return a}});var s=n(9488);const i={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function r(e){const t={};for(const n of e.split(i.styleList)){let[e,r]=n.split(i.styleProp);e=e.trim(),e&&("string"===typeof r&&(r=r.trim()),t[(0,s.PT)(e)]=r)}return t}function a(){const e={};let t,n=arguments.length;while(n--)for(t of Object.keys(arguments[n]))switch(t){case"class":case"directives":arguments[n][t]&&(e[t]=o(e[t],arguments[n][t]));break;case"style":arguments[n][t]&&(e[t]=l(e[t],arguments[n][t]));break;case"staticClass":if(!arguments[n][t])break;void 0===e[t]&&(e[t]=""),e[t]&&(e[t]+=" "),e[t]+=arguments[n][t].trim();break;case"on":case"nativeOn":arguments[n][t]&&(e[t]=u(e[t],arguments[n][t]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[n][t])break;e[t]||(e[t]={}),e[t]={...arguments[n][t],...e[t]};break;default:e[t]||(e[t]=arguments[n][t])}return e}function l(e,t){return e?t?(e=(0,s.BN)("string"===typeof e?r(e):e),e.concat("string"===typeof t?r(t):t)):e:t}function o(e,t){return t?e&&e?(0,s.BN)(e).concat(t):t:e}function u(...e){if(!e[0])return e[1];if(!e[1])return e[0];const t={};for(let n=2;n--;){const s=e[n];for(const e in s)s[e]&&(t[e]?t[e]=[].concat(s[e],t[e]):t[e]=s[e])}return t}},3828:function(e,t,n){"use strict";n.d(t,{Y:function(){return i}});class s{id;name="";deserialize(e){return Object.assign(this,e),this}}class i{id;name="";fee;image_url="";category=new s;get imagePath(){return n(8199)(`${this.image_url}.jpg`)}deserialize(e){return Object.assign(this,e),this}}},1154:function(e,t,n){"use strict";n.d(t,{zx:function(){return r},iH:function(){return i}});var s=n(2893);new s["default"];function i(e,t){return e.slice(0,t)}function r(e){let t=0;const n=[t];for(let s=1;s<e;s++)t+=50,n.push(t);return n}},9076:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var s=n(1990),i=n(5820),r=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"home-skills s-container px-0 pt-0",attrs:{id:"skill"}},[t("div",{staticClass:"page-highlight s-container--spacing px-lg-16 px-0"},[t("HeaderPageHorizontal",{attrs:{title:"Our Services",subTitle:"What Can I Do",description:"Fusce sollicitudin eros id ex maximus gravida non vitae ante. Cras ac mi a dolor suscipit rutrum ut vitae mi."}}),t(i.A,{staticClass:"home-skills__list",attrs:{"no-gutters":""}},e._l(e.products,(function(n,i){return t(s.A,{key:n.id,staticClass:"px-4 mb-10 mb-lg-0 home-skills__item",attrs:{sm:"6",lg:"3",cols:"12","data-aos":"fade-up","data-aos-delay":e.aosDelayTime(i),"data-aos-duration":1e3}},[t("img",{attrs:{src:n.image_url,alt:""}}),t("div",{staticClass:"home-skills__item-title mb-8"},[t("h3",[e._v("UI/UX Designer")]),t("span",[e._v("Work At Envato")])]),t("p",{staticClass:"home-skills__text mb-0"},[e._v(" Nunc hendrerit, justo vel ultricieselei fen pretium leo, ac finibus nulla eros consect viverra neque rutrum. ")])])})),1),e._m(0)],1)])},a=[function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"shape"},[t("img",{attrs:{src:n(8642),alt:""}})])}],l=n(1635),o=n(9603),u=n(7835),c=n(3828),f=n(1154);let d=class extends o.lD{pageTitle="Popular Products";products=[];data=[{id:1,name:"UI/UX Designer",description:"WORK AT ENVATO",content:"Nunc hendrerit, justo vel ultricieselei fen pretium leo, ac finibus nulla eros consect viverra neque rutrum.",image_url:n(6542)},{id:2,name:"Graphic Design",description:"WORK AT FREEPIC",content:"Nunc hendrerit, justo vel ultricieselei fen pretium leo, ac finibus nulla eros consect viverra neque rutrum.",image_url:n(8881)},{id:3,name:"Digital Marketing",description:"WORK AT FIVERR",content:"Nunc hendrerit, justo vel ultricieselei fen pretium leo, ac finibus nulla eros consect viverra neque rutrum.",image_url:n(5137)},{id:4,name:"Mobile Application",description:"WORK AT APPLE",content:"Nunc hendrerit, justo vel ultricieselei fen pretium leo, ac finibus nulla eros consect viverra neque rutrum.",image_url:n(5147)}];time=1e3;aosDuration(e){return 500*e}aosDelayTime(e){const t=(0,f.zx)(this.products.length);return t[e]}created(){const e=this.data.map((e=>(new c.Y).deserialize(e)));this.products=(0,f.iH)(e,4)}};d=(0,l.Cg)([(0,o.uA)({name:"SkillsComponent",components:{HeaderPageHorizontal:u.A.loadComponent("HeaderPageHorizontal")}})],d);var p=d,g=p,m=n(845),v=(0,m.A)(g,r,a,!1,null,null,null),h=v.exports},3766:function(){},8199:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=8199,e.exports=t},5147:function(e,t,n){"use strict";e.exports=n.p+"img/apps.e39ca959.svg"},8881:function(e,t,n){"use strict";e.exports=n.p+"img/design.ec21a6c2.svg"},6542:function(e,t,n){"use strict";e.exports=n.p+"img/layer.d8f75ec9.svg"},5137:function(e,t,n){"use strict";e.exports=n.p+"img/marketing.b916df0e.svg"},8642:function(e,t,n){"use strict";e.exports=n.p+"img/vector4.8346c8e7.svg"}}]);
//# sourceMappingURL=skills-Skills-vue.58c0a928.js.map