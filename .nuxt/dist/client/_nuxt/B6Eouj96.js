import{_ as se}from"./Q3fdnSrt.js";import{B as le,o as l,c as p,m as c,a as n,g as F,h as ce,i as Q,j as w,k as Y,l as O,n as $,q as x,s as f,v as y,x as m,F as J,y as ee,z as H,A as de,C as ue,D as pe,E as T,b,w as I,T as he,_ as me,f as _,r as ve,u as fe,d as h}from"./D596Mi9W.js";import{s as E,Z as N}from"./DShFD3cN.js";import{s as ge,F as be,a as ye}from"./EatKWT9A.js";import{s as q,U as V}from"./c22H8laI.js";import{R as K}from"./BHUgKBh0.js";import{u as Ie,_ as we,a as xe}from"./DNi1RFSW.js";import{_ as Se,a as Ce}from"./BDaexoIX.js";var ke=function(t){var a=t.dt;return`
.p-galleria {
    overflow: hidden;
    border-style: solid;
    border-width: `.concat(a("galleria.border.width"),`;
    border-color: `).concat(a("galleria.border.color"),`;
    border-radius: `).concat(a("galleria.border.radius"),`;
}

.p-galleria-content {
    display: flex;
    flex-direction: column;
}

.p-galleria-items-container {
    display: flex;
    flex-direction: column;
    position: relative;
}

.p-galleria-items {
    position: relative;
    display: flex;
    height: 100%;
}

.p-galleria-nav-button {
    position: absolute;
    top: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: `).concat(a("galleria.nav.button.background"),`;
    color: `).concat(a("galleria.nav.button.color"),`;
    width: `).concat(a("galleria.nav.button.size"),`;
    height: `).concat(a("galleria.nav.button.size"),`;
    transition: background `).concat(a("galleria.transition.duration"),", color ").concat(a("galleria.transition.duration"),", outline-color ").concat(a("galleria.transition.duration"),", box-shadow ").concat(a("galleria.transition.duration"),`;
    margin: calc(-1 * calc(`).concat(a("galleria.nav.button.size"),") / 2) ").concat(a("galleria.nav.button.gutter")," 0 ").concat(a("galleria.nav.button.gutter"),`;
    padding: 0;
    user-select: none;
    border: 0 none;
    cursor: pointer;
    outline-color: transparent;
}

.p-galleria-nav-button:not(.p-disabled):hover {
    background: `).concat(a("galleria.nav.button.hover.background"),`;
    color: `).concat(a("galleria.nav.button.hover.color"),`;
}

.p-galleria-nav-button:not(.p-disabled):focus-visible {
    box-shadow: `).concat(a("galleria.nav.button.focus.ring.shadow"),`;
    outline: `).concat(a("galleria.nav.button.focus.ring.width")," ").concat(a("galleria.nav.button.focus.ring.style")," ").concat(a("galleria.nav.button.focus.ring.color"),`;
    outline-offset: `).concat(a("galleria.nav.button.focus.ring.offset"),`;
}

.p-galleria-next-icon,
.p-galleria-prev-icon {
    font-size: `).concat(a("galleria.nav.icon.size"),`;
    width: `).concat(a("galleria.nav.icon.size"),`;
    height: `).concat(a("galleria.nav.icon.size"),`;
}

.p-galleria-prev-button {
    border-radius: `).concat(a("galleria.nav.button.prev.border.radius"),`;
    left: 0;
}

.p-galleria-next-button {
    border-radius: `).concat(a("galleria.nav.button.next.border.radius"),`;
    right: 0;
}

.p-galleria-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

.p-galleria-hover-navigators .p-galleria-nav-button {
    pointer-events: none;
    opacity: 0;
    transition: opacity `).concat(a("galleria.transition.duration"),` ease-in-out;
}

.p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button {
    pointer-events: all;
    opacity: 1;
}

.p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button.p-disabled {
    pointer-events: none;
}

.p-galleria-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: `).concat(a("galleria.caption.background"),`;
    color: `).concat(a("galleria.caption.color"),`;
    padding: `).concat(a("galleria.caption.padding"),`;
}

.p-galleria-thumbnails {
    display: flex;
    flex-direction: column;
    overflow: auto;
    flex-shrink: 0;
}

.p-galleria-thumbnail-nav-button {
    align-self: center;
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    margin: 0 `).concat(a("galleria.thumbnail.nav.button.gutter"),`;
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
    background: transparent;
    color: `).concat(a("galleria.thumbnail.nav.button.color"),`;
    width: `).concat(a("galleria.thumbnail.nav.button.size"),`;
    height: `).concat(a("galleria.thumbnail.nav.button.size"),`;
    transition: background `).concat(a("galleria.transition.duration"),", color ").concat(a("galleria.transition.duration"),", outline-color ").concat(a("galleria.transition.duration"),`;
    outline-color: transparent;
    border-radius: `).concat(a("galleria.thumbnail.nav.button.border.radius"),`;
}

.p-galleria-thumbnail-nav-button:hover {
    background: `).concat(a("galleria.thumbnail.nav.button.hover.background"),`;
    color: `).concat(a("galleria.thumbnail.nav.button.hover.color"),`;
}

.p-galleria-thumbnail-nav-button:focus-visible {
    box-shadow: `).concat(a("galleria.thumbnail.nav.button.focus.ring.shadow"),`;
    outline: `).concat(a("galleria.thumbnail.nav.button.focus.ring.width")," ").concat(a("galleria.thumbnail.nav.button.focus.ring.style")," ").concat(a("galleria.thumbnail.nav.button.focus.ring.color"),`;
    outline-offset: `).concat(a("galleria.thumbnail.nav.button.focus.ring.offset"),`;
}

.p-galleria-thumbnail-nav-button .p-galleria-thumbnail-next-icon,
.p-galleria-thumbnail-nav-button .p-galleria-thumbnail-prev-icon {
    font-size: `).concat(a("galleria.thumbnail.nav.button.icon.size"),`;
    width: `).concat(a("galleria.thumbnail.nav.button.icon.size"),`;
    height: `).concat(a("galleria.thumbnail.nav.button.icon.size"),`;
}

.p-galleria-thumbnails-content {
    display: flex;
    flex-direction: row;
    background: `).concat(a("galleria.thumbnails.content.background"),`;
    padding: `).concat(a("galleria.thumbnails.content.padding"),`;
}

.p-galleria-thumbnails-viewport {
    overflow: hidden;
    width: 100%;
}

.p-galleria-thumbnail-items {
    display: flex;
}

.p-galleria-thumbnail-item {
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.5;
}

.p-galleria-thumbnail {
    outline-color: transparent;
}

.p-galleria-thumbnail-item:hover {
    opacity: 1;
    transition: opacity 0.3s;
}

.p-galleria-thumbnail-item-current {
    opacity: 1;
}

.p-galleria-thumbnails-left .p-galleria-content,
.p-galleria-thumbnails-right .p-galleria-content {
    flex-direction: row;
}

.p-galleria-thumbnails-left .p-galleria-items-container,
.p-galleria-thumbnails-right .p-galleria-items-container {
    flex-direction: row;
}

.p-galleria-thumbnails-left .p-galleria-items-container,
.p-galleria-thumbnails-top .p-galleria-items-container {
    order: 2;
}

.p-galleria-thumbnails-left .p-galleria-thumbnails,
.p-galleria-thumbnails-top .p-galleria-thumbnails {
    order: 1;
}

.p-galleria-thumbnails-left .p-galleria-thumbnails-content,
.p-galleria-thumbnails-right .p-galleria-thumbnails-content {
    flex-direction: column;
    flex-grow: 1;
}

.p-galleria-thumbnails-left .p-galleria-thumbnail-items,
.p-galleria-thumbnails-right .p-galleria-thumbnail-items {
    flex-direction: column;
    height: 100%;
}

.p-galleria-indicator-list {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: `).concat(a("galleria.indicator.list.padding"),`;
    gap: `).concat(a("galleria.indicator.list.gap"),`;
    margin: 0;
    list-style: none;
}

.p-galleria-indicator-button {
    display: inline-flex;
    align-items: center;
    background: `).concat(a("galleria.indicator.button.background"),`;
    width: `).concat(a("galleria.indicator.button.width"),`;
    height: `).concat(a("galleria.indicator.button.height"),`;
    transition: background `).concat(a("galleria.transition.duration"),", color ").concat(a("galleria.transition.duration"),", outline-color ").concat(a("galleria.transition.duration"),", box-shadow ").concat(a("galleria.transition.duration"),`;
    outline-color: transparent;
    border-radius: `).concat(a("galleria.indicator.button.border.radius"),`;
    margin: 0;
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
}

.p-galleria-indicator-button:hover {
    background: `).concat(a("galleria.indicator.button.hover.background"),`;
}

.p-galleria-indicator-button:focus-visible {
    box-shadow: `).concat(a("galleria.indicator.button.focus.ring.shadow"),`;
    outline: `).concat(a("galleria.indicator.button.focus.ring.width")," ").concat(a("galleria.indicator.button.focus.ring.style")," ").concat(a("galleria.indicator.button.focus.ring.color"),`;
    outline-offset: `).concat(a("galleria.indicator.button.focus.ring.offset"),`;
}

.p-galleria-indicator-active .p-galleria-indicator-button {
    background: `).concat(a("galleria.indicator.button.active.background"),`;
}

.p-galleria-indicators-left .p-galleria-items-container,
.p-galleria-indicators-right .p-galleria-items-container {
    flex-direction: row;
    align-items: center;
}

.p-galleria-indicators-left .p-galleria-items,
.p-galleria-indicators-top .p-galleria-items {
    order: 2;
}

.p-galleria-indicators-left .p-galleria-indicator-list,
.p-galleria-indicators-top .p-galleria-indicator-list {
    order: 1;
}

.p-galleria-indicators-left .p-galleria-indicator-list,
.p-galleria-indicators-right .p-galleria-indicator-list {
    flex-direction: column;
}

.p-galleria-inset-indicators .p-galleria-indicator-list {
    position: absolute;
    display: flex;
    z-index: 1;
    background: `).concat(a("galleria.inset.indicator.list.background"),`;
}

.p-galleria-inset-indicators .p-galleria-indicator-button {
    background: `).concat(a("galleria.inset.indicator.button.background"),`;
}

.p-galleria-inset-indicators .p-galleria-indicator-button:hover {
    background: `).concat(a("galleria.inset.indicator.button.hover.background"),`;
}

.p-galleria-inset-indicators .p-galleria-indicator-active .p-galleria-indicator-button {
    background: `).concat(a("galleria.inset.indicator.button.active.background"),`;
}

.p-galleria-inset-indicators.p-galleria-indicators-top .p-galleria-indicator-list {
    top: 0;
    left: 0;
    width: 100%;
    align-items: flex-start;
}

.p-galleria-inset-indicators.p-galleria-indicators-right .p-galleria-indicator-list {
    right: 0;
    top: 0;
    height: 100%;
    align-items: flex-end;
}

.p-galleria-inset-indicators.p-galleria-indicators-bottom .p-galleria-indicator-list {
    bottom: 0;
    left: 0;
    width: 100%;
    align-items: flex-end;
}

.p-galleria-inset-indicators.p-galleria-indicators-left .p-galleria-indicator-list {
    left: 0;
    top: 0;
    height: 100%;
    align-items: flex-start;
}

.p-galleria-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-galleria-close-button {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: `).concat(a("galleria.close.button.gutter"),`;
    background: `).concat(a("galleria.close.button.background"),`;
    color: `).concat(a("galleria.close.button.color"),`;
    width: `).concat(a("galleria.close.button.size"),`;
    height: `).concat(a("galleria.close.button.size"),`;
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
    border-radius: `).concat(a("galleria.close.button.border.radius"),`;
    outline-color: transparent;
    transition: background `).concat(a("galleria.transition.duration"),", color ").concat(a("galleria.transition.duration"),", outline-color ").concat(a("galleria.transition.duration"),`;
}

.p-galleria-close-icon {
    font-size: `).concat(a("galleria.close.button.icon.size"),`;
    width: `).concat(a("galleria.close.button.icon.size"),`;
    height: `).concat(a("galleria.close.button.icon.size"),`;
}

.p-galleria-close-button:hover {
    background: `).concat(a("galleria.close.button.hover.background"),`;
    color: `).concat(a("galleria.close.button.hover.color"),`;
}

.p-galleria-close-button:focus-visible {
    box-shadow: `).concat(a("galleria.close.button.focus.ring.shadow"),`;
    outline: `).concat(a("galleria.close.button.focus.ring.width")," ").concat(a("galleria.close.button.focus.ring.style")," ").concat(a("galleria.close.button.focus.ring.color"),`;
    outline-offset: `).concat(a("galleria.close.button.focus.ring.offset"),`;
}

.p-galleria-mask .p-galleria-nav-button {
    position: fixed;
    top: 50%;
}

.p-galleria-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}

.p-galleria-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.p-galleria-enter-from,
.p-galleria-leave-to {
    opacity: 0;
    transform: scale(0.7);
}

.p-galleria-enter-active .p-galleria-nav-button {
    opacity: 0;
}

.p-items-hidden .p-galleria-thumbnail-item {
    visibility: hidden;
}

.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active {
    visibility: visible;
}
`)},Pe={mask:"p-galleria-mask p-overlay-mask p-overlay-mask-enter",root:function(t){var a=t.instance,i=a.$attrs.showThumbnails&&a.getPositionClass("p-galleria-thumbnails",a.$attrs.thumbnailsPosition),r=a.$attrs.showIndicators&&a.getPositionClass("p-galleria-indicators",a.$attrs.indicatorsPosition);return["p-galleria p-component",{"p-galleria-fullscreen":a.$attrs.fullScreen,"p-galleria-inset-indicators":a.$attrs.showIndicatorsOnItem,"p-galleria-hover-navigators":a.$attrs.showItemNavigatorsOnHover&&!a.$attrs.fullScreen},i,r]},closeButton:"p-galleria-close-button",closeIcon:"p-galleria-close-icon",header:"p-galleria-header",content:"p-galleria-content",footer:"p-galleria-footer",itemsContainer:"p-galleria-items-container",items:"p-galleria-items",previousItemButton:function(t){var a=t.instance;return["p-galleria-prev-button p-galleria-nav-button",{"p-disabled":a.isNavBackwardDisabled()}]},previousItemIcon:"p-galleria-prev-icon",item:"p-galleria-item",nextItemButton:function(t){var a=t.instance;return["p-galleria-next-button p-galleria-nav-button",{"p-disabled":a.isNavForwardDisabled()}]},nextItemIcon:"p-galleria-next-icon",caption:"p-galleria-caption",indicatorList:"p-galleria-indicator-list",indicator:function(t){var a=t.instance,i=t.index;return["p-galleria-indicator",{"p-galleria-indicator-active":a.isIndicatorItemActive(i)}]},indicatorButton:"p-galleria-indicator-button",thumbnails:"p-galleria-thumbnails",thumbnailContent:"p-galleria-thumbnails-content",previousThumbnailButton:function(t){var a=t.instance;return["p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button",{"p-disabled":a.isNavBackwardDisabled()}]},previousThumbnailIcon:"p-galleria-thumbnail-prev-icon",thumbnailsViewport:"p-galleria-thumbnails-viewport",thumbnailItems:"p-galleria-thumbnail-items",thumbnailItem:function(t){var a=t.instance,i=t.index,r=t.activeIndex;return["p-galleria-thumbnail-item",{"p-galleria-thumbnail-item-current":r===i,"p-galleria-thumbnail-item-active":a.isItemActive(i),"p-galleria-thumbnail-item-start":a.firstItemAciveIndex()===i,"p-galleria-thumbnail-item-end":a.lastItemActiveIndex()===i}]},thumbnail:"p-galleria-thumbnail",nextThumbnailButton:function(t){var a=t.instance;return["p-galleria-thumbnail-next-button  p-galleria-thumbnail-nav-button",{"p-disabled":a.isNavForwardDisabled()}]},nextThumbnailIcon:"p-galleria-thumbnail-next-icon"},Ae=le.extend({name:"galleria",theme:ke,classes:Pe}),z={name:"ChevronLeftIcon",extends:E},_e=n("path",{d:"M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z",fill:"currentColor"},null,-1),Le=[_e];function Be(e,t,a,i,r,o){return l(),p("svg",c({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),Le,16)}z.render=Be;var R={name:"ChevronRightIcon",extends:E},Oe=n("path",{d:"M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z",fill:"currentColor"},null,-1),Te=[Oe];function $e(e,t,a,i,r,o){return l(),p("svg",c({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),Te,16)}R.render=$e;var te={name:"ChevronDownIcon",extends:E},Ee=n("path",{d:"M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z",fill:"currentColor"},null,-1),qe=[Ee];function Ne(e,t,a,i,r,o){return l(),p("svg",c({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),qe,16)}te.render=Ne;var ae={name:"ChevronUpIcon",extends:E},Ve=n("path",{d:"M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z",fill:"currentColor"},null,-1),De=[Ve];function je(e,t,a,i,r,o){return l(),p("svg",c({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),De,16)}ae.render=je;var Me={name:"BaseGalleria",extends:q,props:{id:{type:String,default:null},value:{type:Array,default:null},activeIndex:{type:Number,default:0},fullScreen:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},numVisible:{type:Number,default:3},responsiveOptions:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!1},showThumbnailNavigators:{type:Boolean,default:!0},showItemNavigatorsOnHover:{type:Boolean,default:!1},changeItemOnIndicatorHover:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},autoPlay:{type:Boolean,default:!1},transitionInterval:{type:Number,default:4e3},showThumbnails:{type:Boolean,default:!0},thumbnailsPosition:{type:String,default:"bottom"},verticalThumbnailViewPortHeight:{type:String,default:"300px"},showIndicators:{type:Boolean,default:!1},showIndicatorsOnItem:{type:Boolean,default:!1},indicatorsPosition:{type:String,default:"bottom"},baseZIndex:{type:Number,default:0},maskClass:{type:String,default:null},containerStyle:{type:null,default:null},containerClass:{type:null,default:null},containerProps:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null},ariaLabel:{type:String,default:null},ariaRoledescription:{type:String,default:null}},style:Ae,provide:function(){return{$pcGalleria:this,$parentInstance:this}}};function C(e){return Fe(e)||Re(e)||ze(e)||Ke()}function Ke(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ze(e,t){if(e){if(typeof e=="string")return j(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?j(e,t):void 0}}function Re(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Fe(e){if(Array.isArray(e))return j(e)}function j(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,i=Array(t);a<t;a++)i[a]=e[a];return i}var ne={name:"GalleriaItem",hostName:"Galleria",extends:q,emits:["start-slideshow","stop-slideshow","update:activeIndex"],props:{circular:{type:Boolean,default:!1},activeIndex:{type:Number,default:0},value:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},slideShowActive:{type:Boolean,default:!0},changeItemOnIndicatorHover:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!1},templates:{type:null,default:null},id:{type:String,default:null}},mounted:function(){this.autoPlay&&this.$emit("start-slideshow")},methods:{getIndicatorPTOptions:function(t){return{context:{highlighted:this.activeIndex===t}}},next:function(){var t=this.activeIndex+1,a=this.circular&&this.value.length-1===this.activeIndex?0:t;this.$emit("update:activeIndex",a)},prev:function(){var t=this.activeIndex!==0?this.activeIndex-1:0,a=this.circular&&this.activeIndex===0?this.value.length-1:t;this.$emit("update:activeIndex",a)},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit("stop-slideshow")},navBackward:function(t){this.stopSlideShow(),this.prev(),t&&t.cancelable&&t.preventDefault()},navForward:function(t){this.stopSlideShow(),this.next(),t&&t.cancelable&&t.preventDefault()},onIndicatorClick:function(t){this.stopSlideShow(),this.$emit("update:activeIndex",t)},onIndicatorMouseEnter:function(t){this.changeItemOnIndicatorHover&&(this.stopSlideShow(),this.$emit("update:activeIndex",t))},onIndicatorKeyDown:function(t,a){switch(t.code){case"Enter":case"NumpadEnter":case"Space":this.stopSlideShow(),this.$emit("update:activeIndex",a),t.preventDefault();break;case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),t.preventDefault();break;case"End":this.onEndKey(),t.preventDefault();break;case"Tab":this.onTabKey();break;case"ArrowDown":case"ArrowUp":case"PageUp":case"PageDown":t.preventDefault();break}},onRightKey:function(){var t=C(w(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),a=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(a,a+1===t.length?t.length-1:a+1)},onLeftKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t-1<=0?0:t-1)},onHomeKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,0)},onEndKey:function(){var t=C(w(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),a=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(a,t.length-1)},onTabKey:function(){var t=C(w(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),a=t.findIndex(function(o){return Y(o,"data-p-active")===!0}),i=O(this.$refs.indicatorContent,'[data-pc-section="indicator"] > button[tabindex="0"]'),r=t.findIndex(function(o){return o===i.parentElement});t[r].children[0].tabIndex="-1",t[a].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var t=C(w(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),a=O(this.$refs.indicatorContent,'[data-pc-section="indicator"] > button[tabindex="0"]');return t.findIndex(function(i){return i===a.parentElement})},changedFocusedIndicator:function(t,a){var i=C(w(this.$refs.indicatorContent,'[data-pc-section="indicator"]'));i[t].children[0].tabIndex="-1",i[a].children[0].tabIndex="0",i[a].children[0].focus()},isIndicatorItemActive:function(t){return this.activeIndex===t},isNavBackwardDisabled:function(){return!this.circular&&this.activeIndex===0},isNavForwardDisabled:function(){return!this.circular&&this.activeIndex===this.value.length-1},ariaSlideNumber:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g,t):void 0},ariaPageLabel:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,t):void 0}},computed:{activeItem:function(){return this.value[this.activeIndex]},ariaSlideLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slide:void 0}},components:{ChevronLeftIcon:z,ChevronRightIcon:R},directives:{ripple:K}},He=["disabled"],Ue=["id","aria-label","aria-roledescription"],Ge=["disabled"],Ze=["aria-label","aria-selected","aria-controls","onClick","onMouseenter","onKeydown","data-p-active"],Xe=["tabindex"];function We(e,t,a,i,r,o){var v=$("ripple");return l(),p("div",c({class:e.cx("itemsContainer")},e.ptm("itemsContainer")),[n("div",c({class:e.cx("items")},e.ptm("items")),[a.showItemNavigators?x((l(),p("button",c({key:0,type:"button",class:e.cx("previousItemButton"),onClick:t[0]||(t[0]=function(u){return o.navBackward(u)}),disabled:o.isNavBackwardDisabled()},e.ptm("previousItemButton"),{"data-pc-group-section":"itemnavigator"}),[(l(),f(y(a.templates.previousitemicon||"ChevronLeftIcon"),c({class:e.cx("previousItemIcon")},e.ptm("previousItemIcon")),null,16,["class"]))],16,He)),[[v]]):m("",!0),n("div",c({id:a.id+"_item_"+a.activeIndex,class:e.cx("item"),role:"group","aria-label":o.ariaSlideNumber(a.activeIndex+1),"aria-roledescription":o.ariaSlideLabel},e.ptm("item")),[a.templates.item?(l(),f(y(a.templates.item),{key:0,item:o.activeItem},null,8,["item"])):m("",!0)],16,Ue),a.showItemNavigators?x((l(),p("button",c({key:1,type:"button",class:e.cx("nextItemButton"),onClick:t[1]||(t[1]=function(u){return o.navForward(u)}),disabled:o.isNavForwardDisabled()},e.ptm("nextItemButton"),{"data-pc-group-section":"itemnavigator"}),[(l(),f(y(a.templates.nextitemicon||"ChevronRightIcon"),c({class:e.cx("nextItemIcon")},e.ptm("nextItemIcon")),null,16,["class"]))],16,Ge)),[[v]]):m("",!0),a.templates.caption?(l(),p("div",c({key:2,class:e.cx("caption")},e.ptm("caption")),[a.templates.caption?(l(),f(y(a.templates.caption),{key:0,item:o.activeItem},null,8,["item"])):m("",!0)],16)):m("",!0)],16),a.showIndicators?(l(),p("ul",c({key:0,ref:"indicatorContent",class:e.cx("indicatorList")},e.ptm("indicatorList")),[(l(!0),p(J,null,ee(a.value,function(u,s){return l(),p("li",c({key:"p-galleria-indicator-".concat(s),class:e.cx("indicator",{index:s}),"aria-label":o.ariaPageLabel(s+1),"aria-selected":a.activeIndex===s,"aria-controls":a.id+"_item_"+s,onClick:function(g){return o.onIndicatorClick(s)},onMouseenter:function(g){return o.onIndicatorMouseEnter(s)},onKeydown:function(g){return o.onIndicatorKeyDown(g,s)},ref_for:!0},e.ptm("indicator",o.getIndicatorPTOptions(s)),{"data-p-active":o.isIndicatorItemActive(s)}),[a.templates.indicator?m("",!0):(l(),p("button",c({key:0,type:"button",tabindex:a.activeIndex===s?"0":"-1",class:e.cx("indicatorButton"),ref_for:!0},e.ptm("indicatorButton",o.getIndicatorPTOptions(s))),null,16,Xe)),a.templates.indicator?(l(),f(y(a.templates.indicator),{key:1,index:s},null,8,["index"])):m("",!0)],16,Ze)}),128))],16)):m("",!0)],16)}ne.render=We;function D(e){return et(e)||Je(e)||Ye(e)||Qe()}function Qe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ye(e,t){if(e){if(typeof e=="string")return M(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?M(e,t):void 0}}function Je(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function et(e){if(Array.isArray(e))return M(e)}function M(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,i=Array(t);a<t;a++)i[a]=e[a];return i}var ie={name:"GalleriaThumbnails",hostName:"Galleria",extends:q,emits:["stop-slideshow","update:activeIndex"],props:{containerId:{type:String,default:null},value:{type:Array,default:null},numVisible:{type:Number,default:3},activeIndex:{type:Number,default:0},isVertical:{type:Boolean,default:!1},slideShowActive:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},responsiveOptions:{type:Array,default:null},contentHeight:{type:String,default:"300px"},showThumbnailNavigators:{type:Boolean,default:!0},templates:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null}},startPos:null,thumbnailsStyle:null,sortedResponsiveOptions:null,data:function(){return{d_numVisible:this.numVisible,d_oldNumVisible:this.numVisible,d_activeIndex:this.activeIndex,d_oldActiveItemIndex:this.activeIndex,totalShiftedItems:0,page:0}},watch:{numVisible:function(t,a){this.d_numVisible=t,this.d_oldNumVisible=a},activeIndex:function(t,a){this.d_activeIndex=t,this.d_oldActiveItemIndex=a}},mounted:function(){this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners()},updated:function(){var t=this.totalShiftedItems;(this.d_oldNumVisible!==this.d_numVisible||this.d_oldActiveItemIndex!==this.d_activeIndex)&&(this.d_activeIndex<=this.getMedianItemIndex()?t=0:this.value.length-this.d_numVisible+this.getMedianItemIndex()<this.d_activeIndex?t=this.d_numVisible-this.value.length:this.value.length-this.d_numVisible<this.d_activeIndex&&this.d_numVisible%2===0?t=this.d_activeIndex*-1+this.getMedianItemIndex()+1:t=this.d_activeIndex*-1+this.getMedianItemIndex(),t!==this.totalShiftedItems&&(this.totalShiftedItems=t),this.$refs.itemsContainer.style.transform=this.isVertical?"translate3d(0, ".concat(t*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(t*(100/this.d_numVisible),"%, 0, 0)"),this.d_oldActiveItemIndex!==this.d_activeIndex&&(document.body.setAttribute("data-p-items-hidden","false"),!this.isUnstyled&&H(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.d_oldActiveItemIndex=this.d_activeIndex,this.d_oldNumVisible=this.d_numVisible)},beforeUnmount:function(){this.responsiveOptions&&this.unbindDocumentListeners(),this.thumbnailsStyle&&this.thumbnailsStyle.parentNode.removeChild(this.thumbnailsStyle)},methods:{step:function(t){var a=this.totalShiftedItems+t;t<0&&-1*a+this.d_numVisible>this.value.length-1?a=this.d_numVisible-this.value.length:t>0&&a>0&&(a=0),this.circular&&(t<0&&this.value.length-1===this.d_activeIndex?a=0:t>0&&this.d_activeIndex===0&&(a=this.d_numVisible-this.value.length)),this.$refs.itemsContainer&&(document.body.setAttribute("data-p-items-hidden","false"),!this.isUnstyled&&H(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transform=this.isVertical?"translate3d(0, ".concat(a*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(a*(100/this.d_numVisible),"%, 0, 0)"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=a},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit("stop-slideshow")},getMedianItemIndex:function(){var t=Math.floor(this.d_numVisible/2);return this.d_numVisible%2?t:t-1},navBackward:function(t){this.stopSlideShow();var a=this.d_activeIndex!==0?this.d_activeIndex-1:0,i=a+this.totalShiftedItems;this.d_numVisible-i-1>this.getMedianItemIndex()&&(-1*this.totalShiftedItems!==0||this.circular)&&this.step(1);var r=this.circular&&this.d_activeIndex===0?this.value.length-1:a;this.$emit("update:activeIndex",r),t.cancelable&&t.preventDefault()},navForward:function(t){this.stopSlideShow();var a=this.d_activeIndex===this.value.length-1?this.value.length-1:this.d_activeIndex+1;a+this.totalShiftedItems>this.getMedianItemIndex()&&(-1*this.totalShiftedItems<this.getTotalPageNumber()-1||this.circular)&&this.step(-1);var i=this.circular&&this.value.length-1===this.d_activeIndex?0:a;this.$emit("update:activeIndex",i),t.cancelable&&t.preventDefault()},onItemClick:function(t){this.stopSlideShow();var a=t;if(a!==this.d_activeIndex){var i=a+this.totalShiftedItems,r=0;a<this.d_activeIndex?(r=this.d_numVisible-i-1-this.getMedianItemIndex(),r>0&&-1*this.totalShiftedItems!==0&&this.step(r)):(r=this.getMedianItemIndex()-i,r<0&&-1*this.totalShiftedItems<this.getTotalPageNumber()-1&&this.step(r)),this.$emit("update:activeIndex",a)}},onThumbnailKeydown:function(t,a){switch((t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.onItemClick(a),t.preventDefault()),t.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),t.preventDefault();break;case"End":this.onEndKey(),t.preventDefault();break;case"ArrowUp":case"ArrowDown":t.preventDefault();break;case"Tab":this.onTabKey();break}},onRightKey:function(){var t=w(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]'),a=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(a,a+1===t.length?t.length-1:a+1)},onLeftKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t-1<=0?0:t-1)},onHomeKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,0)},onEndKey:function(){var t=w(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]'),a=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(a,t.length-1)},onTabKey:function(){var t=D(w(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]')),a=t.findIndex(function(o){return Y(o,"data-p-active")===!0}),i=O(this.$refs.itemsContainer,'[tabindex="0"]'),r=t.findIndex(function(o){return o===i.parentElement});t[r].children[0].tabIndex="-1",t[a].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var t=D(w(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]')),a=O(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"] > [tabindex="0"]');return t.findIndex(function(i){return i===a.parentElement})},changedFocusedIndicator:function(t,a){var i=w(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]');i[t].children[0].tabIndex="-1",i[a].children[0].tabIndex="0",i[a].children[0].focus()},onTransitionEnd:function(t){this.$refs.itemsContainer&&t.propertyName==="transform"&&(document.body.setAttribute("data-p-items-hidden","true"),!this.isUnstyled&&Q(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="")},onTouchStart:function(t){var a=t.changedTouches[0];this.startPos={x:a.pageX,y:a.pageY}},onTouchMove:function(t){t.cancelable&&t.preventDefault()},onTouchEnd:function(t){var a=t.changedTouches[0];this.isVertical?this.changePageOnTouch(t,a.pageY-this.startPos.y):this.changePageOnTouch(t,a.pageX-this.startPos.x)},changePageOnTouch:function(t,a){a<0?this.navForward(t):this.navBackward(t)},getTotalPageNumber:function(){return this.value.length>this.d_numVisible?this.value.length-this.d_numVisible+1:0},createStyle:function(){if(!this.thumbnailsStyle){var t;this.thumbnailsStyle=document.createElement("style"),this.thumbnailsStyle.type="text/css",de(this.thumbnailsStyle,"nonce",(t=this.$primevue)===null||t===void 0||(t=t.config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce),document.body.appendChild(this.thumbnailsStyle)}var a=`
                #`.concat(this.containerId,` [data-pc-section="thumbnailitem"] {
                    flex: 1 0 `).concat(100/this.d_numVisible,`%
                }
            `);if(this.responsiveOptions&&!this.isUnstyled){this.sortedResponsiveOptions=D(this.responsiveOptions);var i=ue();this.sortedResponsiveOptions.sort(function(v,u){var s=v.breakpoint,d=u.breakpoint;return pe(s,d,-1,i)});for(var r=0;r<this.sortedResponsiveOptions.length;r++){var o=this.sortedResponsiveOptions[r];a+=`
                        @media screen and (max-width: `.concat(o.breakpoint,`) {
                            #`).concat(this.containerId,` .p-galleria-thumbnail-item {
                                flex: 1 0 `).concat(100/o.numVisible,`%
                            }
                        }
                    `)}}this.thumbnailsStyle.innerHTML=a},calculatePosition:function(){if(this.$refs.itemsContainer&&this.sortedResponsiveOptions){for(var t=window.innerWidth,a={numVisible:this.numVisible},i=0;i<this.sortedResponsiveOptions.length;i++){var r=this.sortedResponsiveOptions[i];parseInt(r.breakpoint,10)>=t&&(a=r)}this.d_numVisible!==a.numVisible&&(this.d_numVisible=a.numVisible)}},bindDocumentListeners:function(){var t=this;this.documentResizeListener||(this.documentResizeListener=function(){t.calculatePosition()},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentListeners:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)},isNavBackwardDisabled:function(){return!this.circular&&this.d_activeIndex===0||this.value.length<=this.d_numVisible},isNavForwardDisabled:function(){return!this.circular&&this.d_activeIndex===this.value.length-1||this.value.length<=this.d_numVisible},firstItemAciveIndex:function(){return this.totalShiftedItems*-1},lastItemActiveIndex:function(){return this.firstItemAciveIndex()+this.d_numVisible-1},isItemActive:function(t){return this.firstItemAciveIndex()<=t&&this.lastItemActiveIndex()>=t},ariaPageLabel:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,t):void 0}},computed:{ariaPrevButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.prevPageLabel:void 0},ariaNextButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.nextPageLabel:void 0}},components:{ChevronLeftIcon:z,ChevronRightIcon:R,ChevronUpIcon:ae,ChevronDownIcon:te},directives:{ripple:K}};function k(e){"@babel/helpers - typeof";return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(e)}function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,i)}return a}function B(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?U(Object(a),!0).forEach(function(i){tt(e,i,a[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(Object(a)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(a,i))})}return e}function tt(e,t,a){return(t=at(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function at(e){var t=nt(e,"string");return k(t)=="symbol"?t:t+""}function nt(e,t){if(k(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var i=a.call(e,t||"default");if(k(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var it=["disabled","aria-label"],ot=["data-p-active","aria-selected","aria-controls","onKeydown","data-p-galleria-thumbnail-item-current","data-p-galleria-thumbnail-item-active","data-p-galleria-thumbnail-item-start","data-p-galleria-thumbnail-item-end"],rt=["tabindex","aria-label","aria-current","onClick"],st=["disabled","aria-label"];function lt(e,t,a,i,r,o){var v=$("ripple");return l(),p("div",c({class:e.cx("thumbnails")},e.ptm("thumbnails")),[n("div",c({class:e.cx("thumbnailContent")},e.ptm("thumbnailContent")),[a.showThumbnailNavigators?x((l(),p("button",c({key:0,class:e.cx("previousThumbnailButton"),disabled:o.isNavBackwardDisabled(),type:"button","aria-label":o.ariaPrevButtonLabel,onClick:t[0]||(t[0]=function(u){return o.navBackward(u)})},B(B({},a.prevButtonProps),e.ptm("previousThumbnailButton")),{"data-pc-group-section":"thumbnailnavigator"}),[(l(),f(y(a.templates.previousthumbnailicon||(a.isVertical?"ChevronUpIcon":"ChevronLeftIcon")),c({class:e.cx("previousThumbnailIcon")},e.ptm("previousThumbnailIcon")),null,16,["class"]))],16,it)),[[v]]):m("",!0),n("div",c({class:e.cx("thumbnailsViewport"),style:{height:a.isVertical?a.contentHeight:""}},e.ptm("thumbnailsViewport")),[n("div",c({ref:"itemsContainer",class:e.cx("thumbnailItems"),role:"tablist",onTransitionend:t[1]||(t[1]=function(u){return o.onTransitionEnd(u)}),onTouchstart:t[2]||(t[2]=function(u){return o.onTouchStart(u)}),onTouchmove:t[3]||(t[3]=function(u){return o.onTouchMove(u)}),onTouchend:t[4]||(t[4]=function(u){return o.onTouchEnd(u)})},e.ptm("thumbnailItems")),[(l(!0),p(J,null,ee(a.value,function(u,s){return l(),p("div",c({key:"p-galleria-thumbnail-item-".concat(s),class:e.cx("thumbnailItem",{index:s,activeIndex:a.activeIndex}),role:"tab","data-p-active":a.activeIndex===s,"aria-selected":a.activeIndex===s,"aria-controls":a.containerId+"_item_"+s,onKeydown:function(g){return o.onThumbnailKeydown(g,s)},ref_for:!0},e.ptm("thumbnailItem"),{"data-p-galleria-thumbnail-item-current":a.activeIndex===s,"data-p-galleria-thumbnail-item-active":o.isItemActive(s),"data-p-galleria-thumbnail-item-start":o.firstItemAciveIndex()===s,"data-p-galleria-thumbnail-item-end":o.lastItemActiveIndex()===s}),[n("div",c({class:e.cx("thumbnail"),tabindex:a.activeIndex===s?"0":"-1","aria-label":o.ariaPageLabel(s+1),"aria-current":a.activeIndex===s?"page":void 0,onClick:function(g){return o.onItemClick(s)},ref_for:!0},e.ptm("thumbnail")),[a.templates.thumbnail?(l(),f(y(a.templates.thumbnail),{key:0,item:u},null,8,["item"])):m("",!0)],16,rt)],16,ot)}),128))],16)],16),a.showThumbnailNavigators?x((l(),p("button",c({key:1,class:e.cx("nextThumbnailButton"),disabled:o.isNavForwardDisabled(),type:"button","aria-label":o.ariaNextButtonLabel,onClick:t[5]||(t[5]=function(u){return o.navForward(u)})},B(B({},a.nextButtonProps),e.ptm("nextThumbnailButton")),{"data-pc-group-section":"thumbnailnavigator"}),[(l(),f(y(a.templates.nextthumbnailicon||(a.isVertical?"ChevronDownIcon":"ChevronRightIcon")),c({class:e.cx("nextThumbnailIcon")},e.ptm("nextThumbnailIcon")),null,16,["class"]))],16,st)),[[v]]):m("",!0)],16)],16)}ie.render=lt;function P(e){"@babel/helpers - typeof";return P=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(e)}function G(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,i)}return a}function Z(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?G(Object(a),!0).forEach(function(i){ct(e,i,a[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):G(Object(a)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(a,i))})}return e}function ct(e,t,a){return(t=dt(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function dt(e){var t=ut(e,"string");return P(t)=="symbol"?t:t+""}function ut(e,t){if(P(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var i=a.call(e,t||"default");if(P(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var oe={name:"GalleriaContent",hostName:"Galleria",extends:q,inheritAttrs:!1,interval:null,emits:["activeitem-change","mask-hide"],data:function(){return{id:this.$attrs.id||V(),activeIndex:this.$attrs.activeIndex,numVisible:this.$attrs.numVisible,slideShowActive:!1}},watch:{"$attrs.id":function(t){this.id=t||V()},"$attrs.value":function(t){t&&t.length<this.numVisible&&(this.numVisible=t.length)},"$attrs.activeIndex":function(t){this.activeIndex=t},"$attrs.numVisible":function(t){this.numVisible=t},"$attrs.autoPlay":function(t){t?this.startSlideShow():this.stopSlideShow()}},mounted:function(){this.id=this.id||V()},updated:function(){this.$emit("activeitem-change",this.activeIndex)},beforeUnmount:function(){this.slideShowActive&&this.stopSlideShow()},methods:{getPTOptions:function(t){return this.ptm(t,{props:Z(Z({},this.$attrs),{},{pt:this.pt,unstyled:this.unstyled})})},isAutoPlayActive:function(){return this.slideShowActive},startSlideShow:function(){var t=this;this.interval=setInterval(function(){var a=t.$attrs.circular&&t.$attrs.value.length-1===t.activeIndex?0:t.activeIndex+1;t.activeIndex=a},this.$attrs.transitionInterval),this.slideShowActive=!0},stopSlideShow:function(){this.interval&&clearInterval(this.interval),this.slideShowActive=!1},getPositionClass:function(t,a){var i=["top","left","bottom","right"],r=i.find(function(o){return o===a});return r?"".concat(t,"-").concat(r):""},isVertical:function(){return this.$attrs.thumbnailsPosition==="left"||this.$attrs.thumbnailsPosition==="right"}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{GalleriaItem:ne,GalleriaThumbnails:ie,TimesIcon:ye},directives:{ripple:K}};function A(e){"@babel/helpers - typeof";return A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(e)}function X(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,i)}return a}function W(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?X(Object(a),!0).forEach(function(i){pt(e,i,a[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):X(Object(a)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(a,i))})}return e}function pt(e,t,a){return(t=ht(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function ht(e){var t=mt(e,"string");return A(t)=="symbol"?t:t+""}function mt(e,t){if(A(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var i=a.call(e,t||"default");if(A(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var vt=["id","aria-label","aria-roledescription"],ft=["aria-label"],gt=["aria-live"];function bt(e,t,a,i,r,o){var v=T("GalleriaItem"),u=T("GalleriaThumbnails"),s=$("ripple");return e.$attrs.value&&e.$attrs.value.length>0?(l(),p("div",c({key:0,id:r.id,role:"region",class:[e.cx("root"),e.$attrs.containerClass],style:e.$attrs.containerStyle,"aria-label":e.$attrs.ariaLabel,"aria-roledescription":e.$attrs.ariaRoledescription},W(W({},e.$attrs.containerProps),o.getPTOptions("root"))),[e.$attrs.fullScreen?x((l(),p("button",c({key:0,autofocus:"",type:"button",class:e.cx("closeButton"),"aria-label":o.closeAriaLabel,onClick:t[0]||(t[0]=function(d){return e.$emit("mask-hide")})},o.getPTOptions("closeButton")),[(l(),f(y(e.$attrs.templates.closeicon||"TimesIcon"),c({class:e.cx("closeIcon")},o.getPTOptions("closeIcon")),null,16,["class"]))],16,ft)),[[s]]):m("",!0),e.$attrs.templates&&e.$attrs.templates.header?(l(),p("div",c({key:1,class:e.cx("header")},o.getPTOptions("header")),[(l(),f(y(e.$attrs.templates.header)))],16)):m("",!0),n("div",c({class:e.cx("content"),"aria-live":e.$attrs.autoPlay?"polite":"off"},o.getPTOptions("content")),[b(v,{id:r.id,activeIndex:r.activeIndex,"onUpdate:activeIndex":t[1]||(t[1]=function(d){return r.activeIndex=d}),slideShowActive:r.slideShowActive,"onUpdate:slideShowActive":t[2]||(t[2]=function(d){return r.slideShowActive=d}),value:e.$attrs.value,circular:e.$attrs.circular,templates:e.$attrs.templates,showIndicators:e.$attrs.showIndicators,changeItemOnIndicatorHover:e.$attrs.changeItemOnIndicatorHover,showItemNavigators:e.$attrs.showItemNavigators,autoPlay:e.$attrs.autoPlay,onStartSlideshow:o.startSlideShow,onStopSlideshow:o.stopSlideShow,pt:e.pt,unstyled:e.unstyled},null,8,["id","activeIndex","slideShowActive","value","circular","templates","showIndicators","changeItemOnIndicatorHover","showItemNavigators","autoPlay","onStartSlideshow","onStopSlideshow","pt","unstyled"]),e.$attrs.showThumbnails?(l(),f(u,{key:0,activeIndex:r.activeIndex,"onUpdate:activeIndex":t[3]||(t[3]=function(d){return r.activeIndex=d}),slideShowActive:r.slideShowActive,"onUpdate:slideShowActive":t[4]||(t[4]=function(d){return r.slideShowActive=d}),containerId:r.id,value:e.$attrs.value,templates:e.$attrs.templates,numVisible:r.numVisible,responsiveOptions:e.$attrs.responsiveOptions,circular:e.$attrs.circular,isVertical:o.isVertical(),contentHeight:e.$attrs.verticalThumbnailViewPortHeight,showThumbnailNavigators:e.$attrs.showThumbnailNavigators,prevButtonProps:e.$attrs.prevButtonProps,nextButtonProps:e.$attrs.nextButtonProps,onStopSlideshow:o.stopSlideShow,pt:e.pt,unstyled:e.unstyled},null,8,["activeIndex","slideShowActive","containerId","value","templates","numVisible","responsiveOptions","circular","isVertical","contentHeight","showThumbnailNavigators","prevButtonProps","nextButtonProps","onStopSlideshow","pt","unstyled"])):m("",!0)],16,gt),e.$attrs.templates&&e.$attrs.templates.footer?(l(),p("div",c({key:2,class:e.cx("footer")},o.getPTOptions("footer")),[(l(),f(y(e.$attrs.templates.footer)))],16)):m("",!0)],16,vt)):m("",!0)}oe.render=bt;var re={name:"Galleria",extends:Me,inheritAttrs:!1,emits:["update:activeIndex","update:visible"],container:null,mask:null,data:function(){return{containerVisible:this.visible}},updated:function(){this.fullScreen&&this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.fullScreen&&F(),this.mask=null,this.container&&(N.clear(this.container),this.container=null)},methods:{onBeforeEnter:function(t){N.set("modal",t,this.baseZIndex||this.$primevue.config.zIndex.modal)},onEnter:function(t){this.mask.style.zIndex=String(parseInt(t.style.zIndex,10)-1),ce(),this.focus()},onBeforeLeave:function(){!this.isUnstyled&&Q(this.mask,"p-overlay-mask-leave")},onAfterLeave:function(t){N.clear(t),this.containerVisible=!1,F()},onActiveItemChange:function(t){this.activeIndex!==t&&this.$emit("update:activeIndex",t)},maskHide:function(){this.$emit("update:visible",!1)},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},focus:function(){var t=this.container.$el.querySelector("[autofocus]");t&&t.focus()}},components:{GalleriaContent:oe,Portal:ge},directives:{focustrap:be}},yt=["aria-modal"];function It(e,t,a,i,r,o){var v=T("GalleriaContent"),u=T("Portal"),s=$("focustrap");return e.fullScreen?(l(),f(u,{key:0},{default:I(function(){return[r.containerVisible?(l(),p("div",c({key:0,ref:o.maskRef,class:[e.cx("mask"),e.maskClass],role:"dialog","aria-modal":e.fullScreen?"true":void 0},e.ptm("mask")),[b(he,c({name:"p-galleria",onBeforeEnter:o.onBeforeEnter,onEnter:o.onEnter,onBeforeLeave:o.onBeforeLeave,onAfterLeave:o.onAfterLeave,appear:""},e.ptm("transition")),{default:I(function(){return[e.visible?x((l(),f(v,c({key:0,ref:o.containerRef,onMaskHide:o.maskHide,templates:e.$slots,onActiveitemChange:o.onActiveItemChange,pt:e.pt,unstyled:e.unstyled},e.$props),null,16,["onMaskHide","templates","onActiveitemChange","pt","unstyled"])),[[s]]):m("",!0)]}),_:1},16,["onBeforeEnter","onEnter","onBeforeLeave","onAfterLeave"])],16,yt)):m("",!0)]}),_:1})):(l(),f(v,c({key:1,templates:e.$slots,onActiveitemChange:o.onActiveItemChange,pt:e.pt,unstyled:e.unstyled},e.$props),null,16,["templates","onActiveitemChange","pt","unstyled"]))}re.render=It;const wt={class:"industry-product","aria-labelledby":"industry-product-title"},xt={class:"wrap product-layout"},St=_('<div class="product-copy" data-v-ff8db7a3><p class="product-eyebrow" data-v-ff8db7a3>SOFTWARE PARA OPERACIONES ENERGÉTICAS</p><h2 id="industry-product-title" data-v-ff8db7a3>SKTERMINAL: control volumétrico y cumplimiento.</h2><p class="product-description" data-v-ff8db7a3>Plataforma especializada para la gestión, el monitoreo y el cumplimiento regulatorio en operaciones energéticas.</p><a href="https://www.skterminal.com.mx" target="_blank" rel="noopener noreferrer" class="product-link" data-v-ff8db7a3>Conocer SKTERMINAL <span aria-hidden="true" data-v-ff8db7a3>↗</span></a></div>',1),Ct={class:"product-gallery"},kt=["src","alt"],Pt={__name:"IndustryProductCarousel",setup(e){const t=[{itemImageSrc:"/assets/img/banner/sk1.jpeg",alt:"SKTERMINAL: información del producto"},{itemImageSrc:"/assets/img/banner/sk2.jpeg",alt:"SKTERMINAL: soluciones para operaciones energéticas"},{itemImageSrc:"/assets/img/banner/sk3.jpg",alt:"SKTERMINAL: servicios y novedades"}];return(a,i)=>{const r=re;return l(),p("section",wt,[n("div",xt,[St,n("div",Ct,[b(r,{value:t,numVisible:3,showThumbnails:!1,showIndicators:!0,changeItemOnIndicatorHover:!0,containerStyle:"width: 100%; max-width: 360px"},{item:I(o=>[n("img",{src:o.item.itemImageSrc,alt:o.item.alt,class:"product-image"},null,8,kt)]),_:1})])])])}}},At=me(Pt,[["__scopeId","data-v-ff8db7a3"]]);function _t(e,t){var a=Array.prototype.slice.call(e.querySelectorAll(".qa-tab"));function i(s){a.forEach(function(d){var g=d===s;d.setAttribute("aria-selected",g?"true":"false"),d.tabIndex=g?0:-1,e.getElementById(d.getAttribute("aria-controls")).hidden=!g})}a.forEach(function(s,d){s.addEventListener("click",function(){i(s)}),s.addEventListener("keydown",function(g){var L=g.key,S=null;(L==="ArrowDown"||L==="ArrowRight")&&(S=a[(d+1)%a.length]),(L==="ArrowUp"||L==="ArrowLeft")&&(S=a[(d-1+a.length)%a.length]),S&&(g.preventDefault(),i(S),S.focus())})});var r=e.getElementById("toast"),o;function v(s){r.textContent=s,r.classList.add("show"),t.clearTimeout(o),o=t.setTimeout(function(){r.classList.remove("show")},2600)}if(e.querySelectorAll(".proximamente").forEach(function(s){s.addEventListener("click",function(d){d.preventDefault(),v("Esta página se construye en la siguiente etapa.")})}),!window.matchMedia("(prefers-reduced-motion: reduce)").matches){var u={temp:{v:31.2,min:30.4,max:32,step:.2,dec:1},thd:{v:6.4,min:5.8,max:7.1,step:.2,dec:1},fp:{v:.88,min:.86,max:.89,step:.01,dec:2}};Object.keys(u).forEach(function(s){u[s].el=e.querySelector('[data-live="'+s+'"]')}),t.setInterval(function(){Object.keys(u).forEach(function(s){var d=u[s];d.v=Math.min(d.max,Math.max(d.min,d.v+(Math.random()-.5)*2*d.step)),d.el.textContent=d.v.toFixed(d.dec)})},2400)}}const Lt=_('<div class="section-navigation"><div class="wrap"><nav aria-label="En esta página" class="nav"><a href="#retos">Retos</a><a href="#areas">Por área</a><a href="#indicadores">Indicadores</a><a href="#proceso">Cómo trabajamos</a><a href="#preguntas">Preguntas</a></nav></div></div>',1),Bt=n("section",{class:"hero",id:"inicio"},[n("svg",{class:"wm",viewBox:"425 687 682 786","aria-hidden":"true"},[n("path",{d:"m483.45,876.25l.77.95,4.39,5.42.49.61.55.56c7,7.06,16.98,10.65,29.64,10.65,27.78,0,61.84-17.3,62.17-17.47l193.6-105.21,235.07,129.67-157.86,85.9c-.4.22-40.18,23.27-47.54,49.88-2.35,8.48-1.38,16.73,2.8,23.87l3.06,5.28c4.28,7.38,12.3,11.97,20.91,11.97,4.04,0,8.06-1.02,11.61-2.95l220.49-119.98c20.24-11.01,32.36-31.1,32.43-53.72.07-22.63-11.94-42.78-32.11-53.9l-257.72-142.16c-9.43-5.2-20.18-7.95-31.1-7.95h0c-10.78,0-21.41,2.68-30.74,7.76l-252.21,137.06c-5.74,3.12-9.86,8.27-11.61,14.5-1.74,6.19-.92,12.66,2.31,18.23l.61,1.05Zm348.06,186.43c-.16,0-.32-.02-.48-.03.43.02.86.02,1.29-.02-.27.03-.54.05-.81.05Zm248.89-161.06h0c-.02,5.26-.91,10.33-2.6,15.08,1.69-4.75,2.58-9.82,2.6-15.08Zm-302.89-146.38l257.72,142.16-257.72-142.16c-.37-.2-.76-.36-1.16-.46.4.1.79.25,1.16.46Zm-2.4-41.95s.05,0,.08,0c-.53,0-1.07.03-1.6.04.51-.02,1.02-.05,1.52-.05Zm-201.11,149.93l198.73-108s.09-.03.14-.05c-.04.02-.09.03-.14.05l-198.73,108c-.11.06-.28.15-.47.24.19-.1.35-.18.47-.24Zm-52.51,15.53c-.74.03-1.47.05-2.19.05-.09,0-.17,0-.26,0,.81,0,1.62,0,2.45-.04Z"}),n("path",{d:"m1069.61,1021.28h-6.17c-9.88,0-18.71,3.66-25.56,10.58-11.83,11.96-17.33,33.45-16.33,63.86.01.39.02.68.03.88v171.02s-244.64,124.04-244.64,124.04c-4.73,2.4-10.16,3.67-15.72,3.67s-11.2-1.32-16-3.81l-.23-.12-.24-.11c-1.53-.73-154.04-73.75-202.64-100.45-36.24-19.91-35.86-33.38-35.28-53.77.08-2.67.16-5.42.16-8.26v-219.74c.01-.22.03-.5.05-.83.48-7.81,1.94-31.58-12.71-46.81-5.2-5.4-14.58-11.84-29.77-11.84h-5.61c-13.17,0-23.89,10.19-23.89,22.72v303.27c0,19.54,11.5,37.64,30.01,47.26l245.1,127.25c15.45,8.02,33.1,12.26,51.02,12.26s34.9-4.08,50.13-11.8l251.63-127.59c18.83-9.55,30.53-27.76,30.53-47.52v-231.44c0-12.53-10.72-22.72-23.89-22.72Zm-578.59,207.53c0,3.1-.1,6.17-.19,9.24.08-3.07.19-6.14.19-9.24h0Zm270.19,217.9c-.82,0-1.63-.05-2.45-.07.82.02,1.64.07,2.46.07h0Zm276.34-350.21c0-.37-.03-1.19-.07-2.38.04,1.19.07,2.01.07,2.38h0Z"}),n("path",{d:"m722.95,1129.25v149.81c-.21,8.91-.26,51.31,17.22,69.25,5.84,5.99,13.15,9.16,21.14,9.16h5.96c12.53,0,22.72-10.19,22.72-22.72v-243.48c0-19.56-10.58-37.68-27.62-47.29l-213.38-120.39c-3.4-1.92-7.26-2.93-11.16-2.93h0c-8.19,0-15.77,4.43-19.79,11.56l-3.36,5.96-.68,1.2-.46,1.3c-3.23,9.18-5.25,27.49,17.43,47.05,9.5,8.19,19.58,13.44,21.98,14.64l142.47,78.67c26.89,16,27.54,44.86,27.52,48.11v.04s0,.09,0,.09Zm-185.51-192.93c.13,0,.26-.03.4-.03.23,0,.46.02.7.04-.36-.04-.73-.04-1.09-.02Zm3.87.89c-.38-.21-.77-.38-1.17-.51.4.14.79.3,1.17.51l213.38,120.39-213.38-120.39Z"})]),n("div",{class:"wrap"},[n("div",null,[n("p",{class:"hero-kicker"}," Edificios inteligentes y energía para la industria "),n("h1",null,"Que su línea solo se detenga cuando usted lo decida."),n("p",{class:"lead"}," Integramos Power Automation y Building Automation para vigilar la calidad de la energía, los servicios auxiliares y las condiciones de sus naves, y para que cada paro tenga una causa clara. "),n("div",{class:"hero-actions"},[n("a",{class:"btn btn-primary",href:"#contacto"},"Solicitar un diagnóstico"),n("a",{class:"btn btn-ghost",href:"#areas"},"Ver cómo funciona por área")]),n("div",{class:"trust"},[n("span",null,"Certificación EcoXpert en Building Automation y Power Automation"),n("span",null,"Convive con su SCADA y sus PLC"),n("span",null,"Instalación en paros programados")])]),n("figure",{class:"hero-art",style:{margin:"0"}},[n("svg",{viewBox:"0 0 560 500",role:"img","aria-labelledby":"art-t"},[n("title",{id:"art-t"}," Ilustración de una planta industrial con lecturas de temperatura de una nave, distorsión armónica de un centro de control de motores y factor de potencia "),n("line",{class:"ground",x1:"20",y1:"470",x2:"540",y2:"470"}),n("path",{class:"bldg",d:"M60 470 V250 L120 205 V250 L180 205 V250 L240 205 V250 L300 205 V250 H360 V470"}),n("path",{class:"bldg-thin",d:"M60 300 H360"}),n("path",{class:"bldg",d:"M150 470 V400 a8 8 0 0 1 8 -8 H222 a8 8 0 0 1 8 8 V470"}),n("path",{class:"bldg-thin",d:"M150 431 H230"}),n("path",{class:"bldg",d:"M360 470 V360 a10 10 0 0 1 10 -10 H470 a10 10 0 0 1 10 10 V470"}),n("path",{class:"bldg-thin",d:"M390 385 h22 M440 385 h22 M390 420 h22 M440 420 h22"}),n("circle",{class:"bldg-thin",cx:"290",cy:"350",r:"18"}),n("text",{class:"t-label",x:"290",y:"355","text-anchor":"middle",style:{"font-weight":"700"}}," M "),n("path",{class:"wire",d:"M120 330 C100 330 72 300 72 154"}),n("path",{class:"wire",d:"M308 350 C390 350 440 310 470 264"}),n("path",{class:"wire",d:"M425 350 C385 300 380 150 400 100"}),n("circle",{class:"node",cx:"120",cy:"330",r:"9"}),n("circle",{class:"node-core",cx:"120",cy:"330",r:"3.5"}),n("circle",{class:"node",cx:"425",cy:"350",r:"9"}),n("circle",{class:"node-core",cx:"425",cy:"350",r:"3.5"}),n("g",{class:"tag",transform:"translate(0 90)"},[n("rect",{width:"150",height:"64",rx:"12"}),n("text",{class:"t-label",x:"14",y:"24"},"Temperatura, nave 3"),n("text",{class:"t-val",x:"14",y:"50"},[n("tspan",{"data-live":"temp"},"31.2"),h(" °C ")])]),n("g",{class:"tag",transform:"translate(415 200)"},[n("rect",{width:"140",height:"64",rx:"12"}),n("text",{class:"t-label",x:"14",y:"24"},"THD-I, CCM 2"),n("text",{class:"t-val",x:"14",y:"50"},[n("tspan",{"data-live":"thd"},"6.4"),h(" % ")])]),n("g",{class:"tag",transform:"translate(400 60)"},[n("rect",{width:"150",height:"64",rx:"12"}),n("text",{class:"t-label",x:"14",y:"24"},"Factor de potencia"),n("text",{class:"t-val t-warn",x:"14",y:"50"},[n("tspan",{"data-live":"fp"},"0.88")])])]),n("figcaption",null,"Lecturas ilustrativas")])])],-1),Ot=_('<section class="risks" id="retos"><div class="wrap"><h2>Lo que detiene una planta casi nunca aparece en el recibo.</h2><div class="risk-grid"><article class="risk"><h3>Paros sin explicación</h3><p> Un variador que se dispara o un motor que se protege, y nadie sabe si la causa vino de la red o de la propia planta. </p></article><article class="risk"><h3>Armónicos y sobrecargas</h3><p> Variadores, hornos y rectificadores que distorsionan la energía y desgastan transformadores, motores y capacitores. </p></article><article class="risk"><h3>Cargos en la factura</h3><p> Picos de demanda y bajo factor de potencia que se pagan cada mes sin saber qué los provoca. </p></article><article class="risk"><h3>Servicios auxiliares a ciegas</h3><p> Agua, gas, vapor y aire comprimido que se consumen sin medición por área o por línea. </p></article><article class="risk"><h3>Naves calurosas</h3><p> Condiciones térmicas que afectan a las personas y a la productividad, y que la NOM-015-STPS-2001 pide vigilar. </p></article><article class="risk"><h3>Sin costo por unidad producida</h3><p> Se conoce el gasto total de energía, pero no cuánto cuesta producir cada pieza o tonelada. </p></article></div></div></section>',1),Tt=n("section",{class:"areas",id:"areas"},[n("div",{class:"wrap"},[n("h2",null,"Cómo trabajamos en cada área de su planta."),n("p",{class:"lead"}," De la subestación a las oficinas. Elija un área para ver qué vigilamos. "),n("div",{class:"qa-box"},[n("div",{class:"qa-tabs",role:"tablist","aria-label":"Por área"},[n("button",{class:"qa-tab",role:"tab",id:"t0","aria-controls":"p0","aria-selected":"true"}," Subestación y acometida"),n("button",{class:"qa-tab",role:"tab",id:"t1","aria-controls":"p1","aria-selected":"false",tabindex:"-1"}," CCM y variadores"),n("button",{class:"qa-tab",role:"tab",id:"t2","aria-controls":"p2","aria-selected":"false",tabindex:"-1"}," Líneas de proceso"),n("button",{class:"qa-tab",role:"tab",id:"t3","aria-controls":"p3","aria-selected":"false",tabindex:"-1"}," Naves y almacenes"),n("button",{class:"qa-tab",role:"tab",id:"t4","aria-controls":"p4","aria-selected":"false",tabindex:"-1"}," Servicios auxiliares"),n("button",{class:"qa-tab",role:"tab",id:"t5","aria-controls":"p5","aria-selected":"false",tabindex:"-1"}," Oficinas y servicios ")]),n("div",{class:"qa-panel",role:"tabpanel",id:"p0","aria-labelledby":"t0"},[n("h3",null,"Subestación y acometida"),n("div",{class:"ap k1"},[n("h4",null,"Lo que pasa hoy"),n("p",null," Eventos de la red, demanda y factor de potencia que solo se conocen cuando llega el recibo. ")]),n("div",{class:"ap k2"},[n("h4",null,"Lo que hacemos"),n("p",null," Medición de calidad de energía, demanda y factor de potencia, con eventos registrados con fecha y hora. ")]),n("div",{class:"ap k3"},[n("h4",null,"Lo que gana"),n("p",null," Sabe qué le cobran y por qué, y tiene evidencia cuando el problema viene de la red. ")]),n("span",{class:"ap-tag"},"Plataforma: Power Automation")]),n("div",{class:"qa-panel",role:"tabpanel",id:"p1","aria-labelledby":"t1",hidden:""},[n("h3",null,"Centros de control de motores y variadores"),n("div",{class:"ap k1"},[n("h4",null,"Lo que pasa hoy"),n("p",null," Armónicos, desbalances y sobrecargas que desgastan equipos sin que nadie lo vea. ")]),n("div",{class:"ap k2"},[n("h4",null,"Lo que hacemos"),n("p",null," Monitoreo de corriente, distorsión armónica y desbalance por CCM y alimentador, con alarmas por umbral. ")]),n("div",{class:"ap k3"},[n("h4",null,"Lo que gana"),n("p",null," Corrige a tiempo con filtros, balanceo o ajustes, antes de perder un equipo. ")]),n("span",{class:"ap-tag"},"Plataforma: Power Automation")]),n("div",{class:"qa-panel",role:"tabpanel",id:"p2","aria-labelledby":"t2",hidden:""},[n("h3",null,"Líneas de proceso críticas"),n("div",{class:"ap k1"},[n("h4",null,"Lo que pasa hoy"),n("p",null," Paros por eventos eléctricos que se investigan con suposiciones. ")]),n("div",{class:"ap k2"},[n("h4",null,"Lo que hacemos"),n("p",null," Registro de eventos sincronizado en los puntos clave, con formas de onda para analizar cada paro. ")]),n("div",{class:"ap k3"},[n("h4",null,"Lo que gana"),n("p",null," Cada paro con una causa clara y una acción para que no se repita. ")]),n("span",{class:"ap-tag"},"Plataforma: Power Automation")]),n("div",{class:"qa-panel",role:"tabpanel",id:"p3","aria-labelledby":"t3",hidden:""},[n("h3",null,"Naves y almacenes"),n("div",{class:"ap k1"},[n("h4",null,"Lo que pasa hoy"),n("p",null," Temperatura y ventilación que dependen de abrir puertas o encender extractores a mano. ")]),n("div",{class:"ap k2"},[n("h4",null,"Lo que hacemos"),n("p",null," Monitoreo de temperatura y humedad por zona, control de ventilación y extracción, y registro para la NOM-015-STPS-2001. ")]),n("div",{class:"ap k3"},[n("h4",null,"Lo que gana"),n("p",null," Personas en mejores condiciones y evidencia para su programa de seguridad e higiene. ")]),n("span",{class:"ap-tag"},"Plataforma: Building Automation")]),n("div",{class:"qa-panel",role:"tabpanel",id:"p4","aria-labelledby":"t4",hidden:""},[n("h3",null,"Agua, gas, vapor y aire comprimido"),n("div",{class:"ap k1"},[n("h4",null,"Lo que pasa hoy"),n("p",null," Consumos que se reparten por estimación entre áreas y líneas. ")]),n("div",{class:"ap k2"},[n("h4",null,"Lo que hacemos"),n("p",null," Integración de medidores de agua, gas, vapor y aire comprimido junto con la energía eléctrica. ")]),n("div",{class:"ap k3"},[n("h4",null,"Lo que gana"),n("p",null," Costo real de cada servicio por área y por línea, y fugas detectadas a tiempo. ")]),n("span",{class:"ap-tag"},"Plataforma: Power Automation y Building Automation")]),n("div",{class:"qa-panel",role:"tabpanel",id:"p5","aria-labelledby":"t5",hidden:""},[n("h3",null,"Oficinas, comedores y servicios"),n("div",{class:"ap k1"},[n("h4",null,"Lo que pasa hoy"),n("p",null," Clima e iluminación encendidos en áreas administrativas fuera de turno. ")]),n("div",{class:"ap k2"},[n("h4",null,"Lo que hacemos"),n("p",null,"Horarios y control por zona según ocupación y turnos.")]),n("div",{class:"ap k3"},[n("h4",null,"Lo que gana"),n("p",null," Ahorro en las áreas que no producen, sin afectar a quienes las usan. ")]),n("span",{class:"ap-tag"},"Plataforma: Building Automation")])])])],-1),$t={class:"together",id:"destacado"},Et={class:"wrap"},qt=n("h2",null,"Convive con su SCADA y sus PLC.",-1),Nt=n("p",null," Nuestra experiencia nace en la automatización industrial: SCADA, PLC y medición en procesos donde la disponibilidad no se negocia. ",-1),Vt=n("p",null," Power Automation y Building Automation no sustituyen el control de su proceso. Se integran con él por protocolos abiertos, para que energía, servicios y producción se vean en el mismo contexto. ",-1),Dt={class:"links"},jt=_('<section class="kpis" id="indicadores"><div class="wrap"><h2>Indicadores que hablan el idioma de producción.</h2><div class="kpi-grid"><article class="kpi"><span class="big">kWh/u</span><h3>Energía por unidad producida</h3><p> Con datos de producción integrados, cuánto cuesta en energía cada pieza o tonelada, por línea y por turno. </p></article><article class="kpi"><span class="big">FP</span><h3>Demanda y factor de potencia</h3><p> Seguimiento continuo para evitar cargos y planear la corrección del factor de potencia. </p></article><article class="kpi"><span class="big">ISO</span><h3>Base para la gestión de la energía</h3><p> La medición que necesita si trabaja hacia un sistema de gestión de la energía como ISO 50001. </p></article></div></div></section><section class="process" id="proceso"><div class="wrap"><h2>Sin detener su producción.</h2><p class="lead" style="margin-top:1.25rem;"> Trabajamos con su área de mantenimiento y respetamos su programa de producción. </p><ol class="steps"><li><h3>Diagnóstico</h3><p> Levantamos su diagrama unifilar, sus cargas críticas, sus servicios auxiliares y sus recibos de energía. </p></li><li><h3>Ingeniería</h3><p> Definimos puntos de medición, integración con su SCADA y PLC, arquitectura de red y presupuesto. </p></li><li><h3>Instalación en paros</h3><p> Ejecutamos los trabajos críticos en paros programados, con procedimientos de seguridad aprobados por usted. </p></li><li><h3>Puesta en marcha</h3><p> Configuramos alarmas, tableros y reportes por área y línea, y capacitamos a su equipo. </p></li><li><h3>Acompañamiento</h3><p> Revisión periódica de indicadores, mantenimiento y soporte 24x7. </p></li></ol></div></section><section class="why" id="por-que"><div class="wrap"><div><h2>Venimos de la industria.</h2><div class="badge-row"><img src="'+Se+'" alt="EcoXpert Building Automation, certificado por Schneider Electric" width="280" height="282"><img src="'+Ce+'" alt="EcoXpert Power Automation, certificado por Schneider Electric" width="280" height="282"></div><p class="badge-cap"> Competencias EcoXpert de IMIMEX, certificadas por Schneider Electric. </p></div><div class="why-points"><div><h3>Certificados en Building Automation y Power Automation.</h3><p> Somos EcoXpert de Schneider Electric en ambas plataformas, con el respaldo técnico y de garantía del fabricante. </p></div><div><h3>Instrumentación y control en nuestro ADN.</h3><p> Medición, SCADA y PLC en terminales de hidrocarburos y procesos industriales. Hablamos el idioma de su planta. </p></div><div><h3>Seguridad primero.</h3><p> Cada trabajo se ejecuta con procedimientos y permisos, porque en una planta la seguridad de las personas va antes que todo. </p></div><div><h3>Con usted después del arranque.</h3><p> Mesa de ayuda 24x7, mantenimiento por personal autorizado y soporte en sitio en 24 horas en el corredor Querétaro–CDMX–Bajío. </p></div></div></div></section>',3),Mt={class:"contact",id:"contacto",style:{background:"var(--surface)"}},Kt={class:"wrap"},zt=n("div",null,[n("h2",null,"Hablemos de su planta."),n("p",{class:"lead"}," Un ingeniero especialista le contactará para entender su caso y proponerle el siguiente paso. "),n("div",{class:"contact-note",style:{background:"var(--bg)"}}," Si cuenta con su diagrama unifilar y sus últimos recibos de energía, téngalos a la mano: aceleran el diagnóstico. ")],-1),Rt=n("div",{class:"field"},[n("label",{for:"f-giro"},[h("Giro "),n("span",{class:"req"},"*")]),n("select",{id:"f-giro",name:"giro",required:""},[n("option",{value:""},"Seleccione una opción"),n("option",null,"Automotriz y autopartes"),n("option",null,"Alimentos y bebidas"),n("option",null,"Química y farmacéutica"),n("option",null,"Metalmecánica"),n("option",null,"Plásticos y empaque"),n("option",null,"Otro")])],-1),Ft=n("div",{class:"field"},[n("label",{for:"f-demanda"},[h("Demanda aproximada "),n("span",{class:"req"},"*")]),n("select",{id:"f-demanda",name:"demanda",required:""},[n("option",{value:""},"Seleccione una opción"),n("option",null,"Menos de 500 kW"),n("option",null,"De 500 kW a 2 MW"),n("option",null,"Más de 2 MW"),n("option",null,"No lo sé")])],-1),Ht=n("div",{class:"field full"},[n("label",{for:"f-automatizacion"},[h("¿Cuenta con SCADA o sistema de supervisión? "),n("span",{class:"req"},"*")]),n("select",{id:"f-automatizacion",name:"automatizacion",required:""},[n("option",{value:""},"Seleccione una opción"),n("option",null,"Sí, de proceso, sin medición de energía"),n("option",null,"Sí, con algo de medición de energía"),n("option",null,"No"),n("option",null,"No lo sé")])],-1),Ut=n("fieldset",null,[n("span",{class:"legend"},"¿Qué le interesa?"),n("div",{class:"chips"},[n("label",null,[n("input",{type:"checkbox",name:"interes",value:"Calidad de energía"}),h("Calidad de energía")]),n("label",null,[n("input",{type:"checkbox",name:"interes",value:"Paros por eventos eléctricos"}),h("Paros por eventos eléctricos")]),n("label",null,[n("input",{type:"checkbox",name:"interes",value:"Demanda y factor de potencia"}),h("Demanda y factor de potencia")]),n("label",null,[n("input",{type:"checkbox",name:"interes",value:"Servicios auxiliares"}),h("Servicios auxiliares")]),n("label",null,[n("input",{type:"checkbox",name:"interes",value:"Condiciones en naves"}),h("Condiciones en naves")]),n("label",null,[n("input",{type:"checkbox",name:"interes",value:"ISO 50001"}),h("ISO 50001")])])],-1),Gt=n("div",{class:"field full"},[n("label",{for:"f-com"},"Comentarios"),n("textarea",{id:"f-com",name:"comentarios"})],-1),Zt={class:"faq",id:"preguntas"},Xt={class:"wrap"},Wt=n("h2",null,"Preguntas frecuentes",-1),Qt={class:"faq-list"},Yt=_("<details><summary>¿Se integra con mi SCADA y mis PLC?</summary><p> Sí, en la mayoría de los casos, por protocolos abiertos como Modbus o BACnet. Definimos en la ingeniería qué información se comparte y en qué sentido. </p></details><details><summary>¿Pueden instalar sin parar la producción?</summary><p> Los trabajos que lo requieren se ejecutan en paros programados, con procedimientos de seguridad aprobados por su planta. Muchas actividades no requieren detener el proceso. </p></details><details><summary> ¿Puedo medir agua, gas, vapor y aire comprimido? </summary><p> Sí, con los medidores adecuados para cada servicio. Los integramos en la misma plataforma que la energía eléctrica. </p></details><details><summary>¿Me ayuda con ISO 50001?</summary><p> Power Automation le da la medición, los indicadores y los históricos que un sistema de gestión de la energía necesita. La implementación de la norma la lleva su organización o su consultor. </p></details><details><summary>¿Cuánto voy a ahorrar?</summary><p> Depende de su planta y de las decisiones que tome con la información. No prometemos una cifra antes de medir: le damos los datos para identificar oportunidades y comprobar el resultado. </p></details>",5),Jt=n("summary",null," Ya tengo un sistema que no funciona. ¿Pueden ayudarme? ",-1),ea={class:"others","aria-label":"Otros sectores"},ta={class:"wrap"},aa=n("strong",null,"Otros sectores",-1),na=n("div",{class:"toast",id:"toast",role:"status","aria-live":"polite"},null,-1),pa={__name:"industria",setup(e){const t=ve(null);return Ie(t,_t),fe({title:"Monitoreo de energía y edificios para la industria | IMIMEX",meta:[{name:"description",content:"Producción sin interrupciones y menor costo de energía con Power Automation y Building Automation de Schneider Electric. Calidad de energía, servicios auxiliares y naves en una sola plataforma."}]}),(a,i)=>{const r=se,o=At,v=xe,u=we;return l(),p("div",{ref_key:"pageRoot",ref:t,class:"intelligent-page bms-industria"},[Lt,n("main",null,[Bt,Ot,Tt,n("section",$t,[n("div",Et,[qt,n("div",null,[Nt,Vt,n("div",Dt,[b(r,{class:"btn",to:"/edificios-inteligentes/power-automation","data-pme":""},{default:I(()=>[h("Conocer Power Automation")]),_:1}),b(r,{class:"btn btn-ghost",to:"/edificios-inteligentes/building-automation","data-ebo":""},{default:I(()=>[h("Conocer Building Automation")]),_:1})])])])]),b(o),jt,n("section",Mt,[n("div",Kt,[zt,b(u,{subject:"Monitoreo de energía y edificios para la industria | IMIMEX"},{default:I(()=>[b(v,{"company-label":"Empresa o planta"}),Rt,Ft,Ht,Ut,Gt]),_:1})])]),n("section",Zt,[n("div",Xt,[Wt,n("div",Qt,[Yt,n("details",null,[Jt,n("p",null,[h(" Sí. Nuestro "),b(r,{to:"/edificios-inteligentes/mantenimiento-bms","data-mant":""},{default:I(()=>[h("servicio de mantenimiento")]),_:1}),h(" empieza con un diagnóstico para recuperar lo que ya tiene. ")])])])])]),n("section",ea,[n("div",ta,[aa,n("nav",null,[b(r,{to:"/edificios-inteligentes/sectores/hoteles","data-hot":""},{default:I(()=>[h("Hoteles")]),_:1}),b(r,{to:"/edificios-inteligentes/sectores/hospitales","data-hos":""},{default:I(()=>[h("Hospitales")]),_:1}),b(r,{to:"/edificios-inteligentes/sectores/data-centers","data-dc":""},{default:I(()=>[h("Data centers")]),_:1})])])])]),na],512)}}};export{pa as default};
