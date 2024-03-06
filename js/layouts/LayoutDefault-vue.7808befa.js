"use strict";(self["webpackChunkhieu_ttn"]=self["webpackChunkhieu_ttn"]||[]).push([[123],{1723:function(e,t,r){r.d(t,{A:function(){return l}});var i=r(599),s=r(2737),n=r(3610),a=r(6819),o=r(9488),l=(0,a.A)(s.A,n.A,i.A).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...n.A.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...i.A.options.computed.classes.call(this)}},styles(){const e={...i.A.options.computed.styles.call(this)};return this.img&&(e.background=`url("${this.img}") center center / cover no-repeat`),e}},methods:{genProgress(){const e=s.A.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render(e){const{tag:t,data:r}=this.generateRouteLink();return r.style=this.styles,this.isClickable&&(r.attrs=r.attrs||{},r.attrs.tabindex=0),e(t,this.setBackgroundColor(this.color,r),[this.genProgress(),(0,o.$c)(this)])}})},9139:function(e,t,r){r.d(t,{Qo:function(){return u},SM:function(){return h},mM:function(){return c},vt:function(){return d}});var i=r(8273);function s(e=[],...t){return Array().concat(e,...t)}function n(e,t="top center 0",r){return{name:e,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:r},origin:{type:String,default:t}},render(t,r){const n="transition"+(r.props.group?"-group":""),a={props:{name:e,mode:r.props.mode},on:{beforeEnter(e){e.style.transformOrigin=r.props.origin,e.style.webkitTransformOrigin=r.props.origin}}};return r.props.leaveAbsolute&&(a.on.leave=s(a.on.leave,(e=>{const{offsetTop:t,offsetLeft:r,offsetWidth:i,offsetHeight:s}=e;e._transitionInitialStyles={position:e.style.position,top:e.style.top,left:e.style.left,width:e.style.width,height:e.style.height},e.style.position="absolute",e.style.top=t+"px",e.style.left=r+"px",e.style.width=i+"px",e.style.height=s+"px"})),a.on.afterLeave=s(a.on.afterLeave,(e=>{if(e&&e._transitionInitialStyles){const{position:t,top:r,left:i,width:s,height:n}=e._transitionInitialStyles;delete e._transitionInitialStyles,e.style.position=t||"",e.style.top=r||"",e.style.left=i||"",e.style.width=s||"",e.style.height=n||""}}))),r.props.hideOnLeave&&(a.on.leave=s(a.on.leave,(e=>{e.style.setProperty("display","none","important")}))),t(n,(0,i.Ay)(r.data,a),r.children)}}}function a(e,t,r="in-out"){return{name:e,functional:!0,props:{mode:{type:String,default:r}},render(r,s){return r("transition",(0,i.Ay)(s.data,{props:{name:e},on:t}),s.children)}}}var o=r(9488);function l(e="",t=!1){const r=t?"width":"height",i=`offset${(0,o.Zb)(r)}`;return{beforeEnter(e){e._parent=e.parentNode,e._initialStyle={transition:e.style.transition,overflow:e.style.overflow,[r]:e.style[r]}},enter(t){const s=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const n=`${t[i]}px`;t.style[r]="0",t.offsetHeight,t.style.transition=s.transition,e&&t._parent&&t._parent.classList.add(e),requestAnimationFrame((()=>{t.style[r]=n}))},afterEnter:n,enterCancelled:n,leave(e){e._initialStyle={transition:"",overflow:e.style.overflow,[r]:e.style[r]},e.style.overflow="hidden",e.style[r]=`${e[i]}px`,e.offsetHeight,requestAnimationFrame((()=>e.style[r]="0"))},afterLeave:s,leaveCancelled:s};function s(t){e&&t._parent&&t._parent.classList.remove(e),n(t)}function n(e){const t=e._initialStyle[r];e.style.overflow=e._initialStyle.overflow,null!=t&&(e.style[r]=t),delete e._initialStyle}}n("carousel-transition"),n("carousel-reverse-transition"),n("tab-transition"),n("tab-reverse-transition"),n("menu-transition"),n("fab-transition","center center","out-in"),n("dialog-transition"),n("dialog-bottom-transition"),n("dialog-top-transition");const c=n("fade-transition"),d=(n("scale-transition"),n("scroll-x-transition"),n("scroll-x-reverse-transition"),n("scroll-y-transition"),n("scroll-y-reverse-transition"),n("slide-x-transition")),u=(n("slide-x-reverse-transition"),n("slide-y-transition"),n("slide-y-reverse-transition"),a("expand-transition",l())),h=a("expand-x-transition",l("",!0))},2737:function(e,t,r){r.d(t,{A:function(){return f}});var i=r(2893),s=r(9139),n=r(309),a=r(8511),o=r(3971),l=r(7872),c=r(1741),d=r(9488),u=r(6819);const h=(0,u.A)(a.A,(0,o.P)(["absolute","fixed","top","bottom"]),l.A,c.A);var p=h.extend({name:"v-progress-linear",directives:{intersect:n.A},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:(0,d.Dg)(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:(0,d.Dg)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:e,[this.isReversed?"right":"left"]:(0,d.Dg)(this.normalizedValue,"%"),width:(0,d.Dg)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible,...this.themeClasses}},computedTransition(){return this.indeterminate?s.mM:s.vt},isReversed(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=(0,d.Dg)(this.normalizedBuffer,"%")),e}},methods:{genContent(){const e=(0,d.$c)(this,"default",{value:this.internalLazyValue});return e?this.$createElement("div",{staticClass:"v-progress-linear__content"},e):null},genListeners(){const e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[e]:!0}}))},onClick(e){if(!this.reactive)return;const{width:t}=this.$el.getBoundingClientRect();this.internalValue=e.offsetX/t*100},onObserve(e,t,r){this.isVisible=r},normalize(e){return e<0?0:e>100?100:parseFloat(e)}},render(e){const t={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?(0,d.Dg)(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return e("div",t,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),g=p,f=i["default"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:(0,d.$c)(this,"progress")||this.$createElement(g,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},7872:function(e,t,r){var i=r(2893);function s(e="value",t="change"){return i["default"].extend({name:"proxyable",model:{prop:e,event:t},props:{[e]:{required:!1}},data(){return{internalLazyValue:this[e]}},computed:{internalValue:{get(){return this.internalLazyValue},set(e){e!==this.internalLazyValue&&(this.internalLazyValue=e,this.$emit(t,e))}}},watch:{[e](e){this.internalLazyValue=e}}})}const n=s();t.A=n},3385:function(e,t,r){r.d(t,{s:function(){return i}});const i=[{title:"Home",id:"#home"},{title:"About",id:"#about"},{title:"Skills",id:"#skill"},{title:"Projects",id:"#project"},{title:"Experience",id:"#experience"},{title:"Contact",id:"#contact"}]},2381:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var i=r(393),s=r(1723),n=r(1146),a=function(){var e=this,t=e._self._c;e._self._setupProxy;return t(i.A,{attrs:{id:"app"}},[t(s.A,[t("TheHeader",{attrs:{drawer:e.drawer},on:{toggle:e.toggle}}),t(n.A,{staticClass:"overflow-y-auto ctn-wrp",attrs:{id:"scrolling-techniques-7"}},[t("div",{staticClass:"s-wrapper"},[t("router-view")],1),t("div"),t("TheFooter")],1),t("div",{attrs:{id:"scroll-top"}},[t("a",{attrs:{href:"#"},on:{click:e.scrollTotop}},[t("span",{staticClass:"text"},[e._v("TO TOP")])]),t("div",{staticClass:"line-container"},[t("span",{staticClass:"line-bar"})])])],1)],1)},o=[],l=r(1635),c=r(9603),d=r(7835),u=r(3385);let h=class extends c.lD{drawer=null;menu=u.s;progress=0;mounted(){window.addEventListener("scroll",(function(e){setTimeout((()=>{const e=document.querySelector("#scrolling-techniques-7"),t=document.querySelector(".header"),r=document.querySelector(".line-bar"),i=document.querySelector("#scroll-top"),s=e.scrollHeight-e.clientHeight,n=e.scrollTop/s*100;r.style.height=n+"%",e.scrollTop>64?(t.classList.add("header-animate"),i.style.right="25px"):i.style.right="-10px"}),0)}),!0)}toggle(e){this.drawer=e}scrollTotop(){const e=document.querySelector("#scrolling-techniques-7");e.scrollTop=0}};h=(0,l.Cg)([(0,c.uA)({name:"LayoutDefault",components:{TheHeader:d.A.loadComponent("TheHeader"),TheFooter:d.A.loadComponent("TheFooter")}})],h);var p=h,g=p,f=r(845),v=(0,f.A)(g,a,o,!1,null,null,null),m=v.exports}}]);
//# sourceMappingURL=LayoutDefault-vue.7808befa.js.map