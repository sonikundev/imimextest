import { focus, getFirstFocusableElement, getLastFocusableElement, isFocusableElement, createElement, isClient, blockBodyScroll, isAttributeEquals, addClass, unblockBodyScroll, removeClass, find, getAttribute, findSingle, setAttribute } from '@primeuix/utils/dom';
import { ZIndex } from '@primeuix/utils/zindex';
import { B as BaseDirective, s as script$f, a as script$4$1, U as UniqueComponentId, R as Ripple, b as script$5$1 } from './index-CjJ3OlNo.mjs';
import { ref, mergeProps, withCtx, createVNode, createTextVNode, openBlock, createBlock, useSSRContext, createElementBlock, renderSlot, Teleport, createCommentVNode, resolveComponent, resolveDirective, createElementVNode, resolveDynamicComponent, withDirectives, normalizeProps, guardReactiveProps, Transition, normalizeClass, normalizeStyle, Fragment, renderList, toDisplayString } from 'vue';
import { isNotEmpty, localeComparator, sort } from '@primeuix/utils/object';
import { B as BaseStyle } from './server.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
import '@primeuix/utils/uuid';
import '@primeuix/styled';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '@primevue/core/base/style';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@primeuix/utils/eventbus';

var script$e = {
  name: "EyeIcon",
  "extends": script$4$1
};
var _hoisted_1$b = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2$b = [_hoisted_1$b];
function render$d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$b, 16);
}
script$e.render = render$d;
var script$d = {
  name: "RefreshIcon",
  "extends": script$4$1
};
var _hoisted_1$a = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M6.77051 5.96336C6.84324 5.99355 6.92127 6.00891 7.00002 6.00854C7.07877 6.00891 7.1568 5.99355 7.22953 5.96336C7.30226 5.93317 7.36823 5.88876 7.42357 5.83273L9.82101 3.43529C9.93325 3.32291 9.99629 3.17058 9.99629 3.01175C9.99629 2.85292 9.93325 2.70058 9.82101 2.5882L7.42357 0.190763C7.3687 0.131876 7.30253 0.0846451 7.22901 0.0518865C7.15549 0.019128 7.07612 0.00151319 6.99564 9.32772e-05C6.91517 -0.00132663 6.83523 0.0134773 6.7606 0.0436218C6.68597 0.0737664 6.61817 0.118634 6.56126 0.175548C6.50435 0.232462 6.45948 0.300257 6.42933 0.374888C6.39919 0.449519 6.38439 0.529456 6.38581 0.609933C6.38722 0.690409 6.40484 0.769775 6.4376 0.843296C6.47036 0.916817 6.51759 0.982986 6.57647 1.03786L7.95103 2.41241H6.99998C5.46337 2.41241 3.98969 3.02283 2.90314 4.10938C1.81659 5.19593 1.20618 6.66961 1.20618 8.20622C1.20618 9.74283 1.81659 11.2165 2.90314 12.3031C3.98969 13.3896 5.46337 14 6.99998 14C8.53595 13.9979 10.0084 13.3868 11.0945 12.3007C12.1806 11.2146 12.7917 9.74218 12.7938 8.20622C12.7938 8.04726 12.7306 7.89481 12.6182 7.78241C12.5058 7.67001 12.3534 7.60686 12.1944 7.60686C12.0355 7.60686 11.883 7.67001 11.7706 7.78241C11.6582 7.89481 11.5951 8.04726 11.5951 8.20622C11.5951 9.11504 11.3256 10.0035 10.8207 10.7591C10.3157 11.5148 9.59809 12.1037 8.75845 12.4515C7.9188 12.7993 6.99489 12.8903 6.10353 12.713C5.21217 12.5357 4.3934 12.0981 3.75077 11.4554C3.10813 10.8128 2.67049 9.99404 2.49319 9.10268C2.31589 8.21132 2.40688 7.2874 2.75468 6.44776C3.10247 5.60811 3.69143 4.89046 4.44709 4.38554C5.20275 3.88063 6.09116 3.61113 6.99998 3.61113H7.95098L6.57647 4.98564C6.46423 5.09802 6.40119 5.25035 6.40119 5.40918C6.40119 5.56801 6.46423 5.72035 6.57647 5.83273C6.63181 5.88876 6.69778 5.93317 6.77051 5.96336Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2$a = [_hoisted_1$a];
function render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$a, 16);
}
script$d.render = render$c;
var script$c = {
  name: "SearchMinusIcon",
  "extends": script$4$1
};
var _hoisted_1$9 = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M6.0208 12.0411C4.83005 12.0411 3.66604 11.688 2.67596 11.0265C1.68589 10.3649 0.914216 9.42464 0.458534 8.32452C0.00285271 7.22441 -0.116374 6.01388 0.11593 4.84601C0.348235 3.67813 0.921637 2.60537 1.76363 1.76338C2.60562 0.921393 3.67838 0.34799 4.84625 0.115686C6.01412 -0.116618 7.22466 0.00260857 8.32477 0.45829C9.42488 0.913972 10.3652 1.68564 11.0267 2.67572C11.6883 3.66579 12.0414 4.8298 12.0414 6.02056C12.0395 7.41563 11.5542 8.76029 10.6783 9.8305L13.8244 12.9765C13.9367 13.089 13.9997 13.2414 13.9997 13.4003C13.9997 13.5592 13.9367 13.7116 13.8244 13.8241C13.769 13.8801 13.703 13.9245 13.6302 13.9548C13.5575 13.985 13.4794 14.0003 13.4006 14C13.3218 14.0003 13.2437 13.985 13.171 13.9548C13.0982 13.9245 13.0322 13.8801 12.9768 13.8241L9.83082 10.678C8.76059 11.5539 7.4159 12.0393 6.0208 12.0411ZM6.0208 1.20731C5.07199 1.20731 4.14449 1.48867 3.35559 2.0158C2.56669 2.54292 1.95181 3.29215 1.58872 4.16874C1.22562 5.04532 1.13062 6.00989 1.31572 6.94046C1.50083 7.87104 1.95772 8.72583 2.62863 9.39674C3.29954 10.0676 4.15433 10.5245 5.0849 10.7096C6.01548 10.8947 6.98005 10.7997 7.85663 10.4367C8.73322 10.0736 9.48244 9.45868 10.0096 8.66978C10.5367 7.88088 10.8181 6.95337 10.8181 6.00457C10.8181 4.73226 10.3126 3.51206 9.41297 2.6124C8.51331 1.71274 7.29311 1.20731 6.0208 1.20731ZM4.00591 6.60422H8.00362C8.16266 6.60422 8.31518 6.54104 8.42764 6.42859C8.5401 6.31613 8.60328 6.1636 8.60328 6.00456C8.60328 5.84553 8.5401 5.693 8.42764 5.58054C8.31518 5.46809 8.16266 5.40491 8.00362 5.40491H4.00591C3.84687 5.40491 3.69434 5.46809 3.58189 5.58054C3.46943 5.693 3.40625 5.84553 3.40625 6.00456C3.40625 6.1636 3.46943 6.31613 3.58189 6.42859C3.69434 6.54104 3.84687 6.60422 4.00591 6.60422Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2$9 = [_hoisted_1$9];
function render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$9, 16);
}
script$c.render = render$b;
var script$b = {
  name: "SearchPlusIcon",
  "extends": script$4$1
};
var _hoisted_1$8 = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M2.67596 11.0265C3.66604 11.688 4.83005 12.0411 6.0208 12.0411C6.81143 12.0411 7.59432 11.8854 8.32477 11.5828C8.86999 11.357 9.37802 11.0526 9.83311 10.6803L12.9768 13.8241C13.0322 13.8801 13.0982 13.9245 13.171 13.9548C13.2437 13.985 13.3218 14.0003 13.4006 14C13.4794 14.0003 13.5575 13.985 13.6302 13.9548C13.703 13.9245 13.769 13.8801 13.8244 13.8241C13.9367 13.7116 13.9997 13.5592 13.9997 13.4003C13.9997 13.2414 13.9367 13.089 13.8244 12.9765L10.6806 9.8328C11.0529 9.37773 11.3572 8.86972 11.5831 8.32452C11.8856 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0267 2.67572C10.3652 1.68564 9.42488 0.913972 8.32477 0.45829C7.22466 0.00260857 6.01412 -0.116618 4.84625 0.115686C3.67838 0.34799 2.60562 0.921393 1.76363 1.76338C0.921637 2.60537 0.348235 3.67813 0.11593 4.84601C-0.116374 6.01388 0.00285271 7.22441 0.458534 8.32452C0.914216 9.42464 1.68589 10.3649 2.67596 11.0265ZM3.35559 2.0158C4.14449 1.48867 5.07199 1.20731 6.0208 1.20731C7.29311 1.20731 8.51331 1.71274 9.41297 2.6124C10.3126 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5367 7.88088 10.0096 8.66978C9.48244 9.45868 8.73322 10.0736 7.85663 10.4367C6.98005 10.7997 6.01548 10.8947 5.0849 10.7096C4.15433 10.5245 3.29954 10.0676 2.62863 9.39674C1.95772 8.72583 1.50083 7.87104 1.31572 6.94046C1.13062 6.00989 1.22562 5.04532 1.58872 4.16874C1.95181 3.29215 2.56669 2.54292 3.35559 2.0158ZM6.00481 8.60309C5.84641 8.60102 5.69509 8.53718 5.58308 8.42517C5.47107 8.31316 5.40722 8.16183 5.40515 8.00344V6.60422H4.00591C3.84687 6.60422 3.69434 6.54104 3.58189 6.42859C3.46943 6.31613 3.40625 6.1636 3.40625 6.00456C3.40625 5.84553 3.46943 5.693 3.58189 5.58054C3.69434 5.46809 3.84687 5.40491 4.00591 5.40491H5.40515V4.00572C5.40515 3.84668 5.46833 3.69416 5.58079 3.5817C5.69324 3.46924 5.84577 3.40607 6.00481 3.40607C6.16385 3.40607 6.31637 3.46924 6.42883 3.5817C6.54129 3.69416 6.60447 3.84668 6.60447 4.00572V5.40491H8.00362C8.16266 5.40491 8.31518 5.46809 8.42764 5.58054C8.5401 5.693 8.60328 5.84553 8.60328 6.00456C8.60328 6.1636 8.5401 6.31613 8.42764 6.42859C8.31518 6.54104 8.16266 6.60422 8.00362 6.60422H6.60447V8.00344C6.60239 8.16183 6.53855 8.31316 6.42654 8.42517C6.31453 8.53718 6.1632 8.60102 6.00481 8.60309Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2$8 = [_hoisted_1$8];
function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$8, 16);
}
script$b.render = render$a;
var script$a = {
  name: "TimesIcon",
  "extends": script$4$1
};
var _hoisted_1$7 = /* @__PURE__ */ createElementVNode("path", {
  d: "M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2$7 = [_hoisted_1$7];
function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$7, 16);
}
script$a.render = render$9;
var script$9 = {
  name: "UndoIcon",
  "extends": script$4$1
};
var _hoisted_1$6 = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M6.77042 5.96336C6.84315 5.99355 6.92118 6.00891 6.99993 6.00854C7.07868 6.00891 7.15671 5.99355 7.22944 5.96336C7.30217 5.93317 7.36814 5.88876 7.42348 5.83273C7.53572 5.72035 7.59876 5.56801 7.59876 5.40918C7.59876 5.25035 7.53572 5.09802 7.42348 4.98564L6.04897 3.61113H6.99998C7.9088 3.61113 8.79722 3.88063 9.55288 4.38554C10.3085 4.89046 10.8975 5.60811 11.2453 6.44776C11.5931 7.2874 11.6841 8.21132 11.5068 9.10268C11.3295 9.99404 10.8918 10.8128 10.2492 11.4554C9.60657 12.0981 8.7878 12.5357 7.89644 12.713C7.00508 12.8903 6.08116 12.7993 5.24152 12.4515C4.40188 12.1037 3.68422 11.5148 3.17931 10.7591C2.67439 10.0035 2.4049 9.11504 2.4049 8.20622C2.4049 8.04726 2.34175 7.89481 2.22935 7.78241C2.11695 7.67001 1.9645 7.60686 1.80554 7.60686C1.64658 7.60686 1.49413 7.67001 1.38172 7.78241C1.26932 7.89481 1.20618 8.04726 1.20618 8.20622C1.20829 9.74218 1.81939 11.2146 2.90548 12.3007C3.99157 13.3868 5.46402 13.9979 6.99998 14C8.5366 14 10.0103 13.3896 11.0968 12.3031C12.1834 11.2165 12.7938 9.74283 12.7938 8.20622C12.7938 6.66961 12.1834 5.19593 11.0968 4.10938C10.0103 3.02283 8.5366 2.41241 6.99998 2.41241H6.04892L7.42348 1.03786C7.48236 0.982986 7.5296 0.916817 7.56235 0.843296C7.59511 0.769775 7.61273 0.690409 7.61415 0.609933C7.61557 0.529456 7.60076 0.449519 7.57062 0.374888C7.54047 0.300257 7.49561 0.232462 7.43869 0.175548C7.38178 0.118634 7.31398 0.0737664 7.23935 0.0436218C7.16472 0.0134773 7.08478 -0.00132663 7.00431 9.32772e-05C6.92383 0.00151319 6.84447 0.019128 6.77095 0.0518865C6.69742 0.0846451 6.63126 0.131876 6.57638 0.190763L4.17895 2.5882C4.06671 2.70058 4.00366 2.85292 4.00366 3.01175C4.00366 3.17058 4.06671 3.32291 4.17895 3.43529L6.57638 5.83273C6.63172 5.88876 6.69769 5.93317 6.77042 5.96336Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2$6 = [_hoisted_1$6];
function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$6, 16);
}
script$9.render = render$8;
var FocusTrapStyle = BaseStyle.extend({
  name: "focustrap-directive"
});
var BaseFocusTrap = BaseDirective.extend({
  style: FocusTrapStyle
});
function _typeof$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$1(o);
}
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function(r2) {
      _defineProperty$1(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$1(e, r, t) {
  return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$1(t) {
  var i = _toPrimitive$1(t, "string");
  return "symbol" == _typeof$1(i) ? i : i + "";
}
function _toPrimitive$1(t, r) {
  if ("object" != _typeof$1(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof$1(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var FocusTrap = BaseFocusTrap.extend("focustrap", {
  mounted: function mounted(el, binding) {
    var _ref = binding.value || {}, disabled = _ref.disabled;
    if (!disabled) {
      this.createHiddenFocusableElements(el, binding);
      this.bind(el, binding);
      this.autoElementFocus(el, binding);
    }
    el.setAttribute("data-pd-focustrap", true);
    this.$el = el;
  },
  updated: function updated(el, binding) {
    var _ref2 = binding.value || {}, disabled = _ref2.disabled;
    disabled && this.unbind(el);
  },
  unmounted: function unmounted(el) {
    this.unbind(el);
  },
  methods: {
    getComputedSelector: function getComputedSelector(selector) {
      return ':not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])'.concat(selector !== null && selector !== void 0 ? selector : "");
    },
    bind: function bind(el, binding) {
      var _this = this;
      var _ref3 = binding.value || {}, onFocusIn = _ref3.onFocusIn, onFocusOut = _ref3.onFocusOut;
      el.$_pfocustrap_mutationobserver = new MutationObserver(function(mutationList) {
        mutationList.forEach(function(mutation) {
          if (mutation.type === "childList" && !el.contains((void 0).activeElement)) {
            var findNextFocusableElement = function findNextFocusableElement2(_el) {
              var focusableElement = isFocusableElement(_el) ? isFocusableElement(_el, _this.getComputedSelector(el.$_pfocustrap_focusableselector)) ? _el : getFirstFocusableElement(el, _this.getComputedSelector(el.$_pfocustrap_focusableselector)) : getFirstFocusableElement(_el);
              return isNotEmpty(focusableElement) ? focusableElement : _el.nextSibling && findNextFocusableElement2(_el.nextSibling);
            };
            focus(findNextFocusableElement(mutation.nextSibling));
          }
        });
      });
      el.$_pfocustrap_mutationobserver.disconnect();
      el.$_pfocustrap_mutationobserver.observe(el, {
        childList: true
      });
      el.$_pfocustrap_focusinlistener = function(event) {
        return onFocusIn && onFocusIn(event);
      };
      el.$_pfocustrap_focusoutlistener = function(event) {
        return onFocusOut && onFocusOut(event);
      };
      el.addEventListener("focusin", el.$_pfocustrap_focusinlistener);
      el.addEventListener("focusout", el.$_pfocustrap_focusoutlistener);
    },
    unbind: function unbind(el) {
      el.$_pfocustrap_mutationobserver && el.$_pfocustrap_mutationobserver.disconnect();
      el.$_pfocustrap_focusinlistener && el.removeEventListener("focusin", el.$_pfocustrap_focusinlistener) && (el.$_pfocustrap_focusinlistener = null);
      el.$_pfocustrap_focusoutlistener && el.removeEventListener("focusout", el.$_pfocustrap_focusoutlistener) && (el.$_pfocustrap_focusoutlistener = null);
    },
    autoFocus: function autoFocus(options) {
      this.autoElementFocus(this.$el, {
        value: _objectSpread$1(_objectSpread$1({}, options), {}, {
          autoFocus: true
        })
      });
    },
    autoElementFocus: function autoElementFocus(el, binding) {
      var _ref4 = binding.value || {}, _ref4$autoFocusSelect = _ref4.autoFocusSelector, autoFocusSelector = _ref4$autoFocusSelect === void 0 ? "" : _ref4$autoFocusSelect, _ref4$firstFocusableS = _ref4.firstFocusableSelector, firstFocusableSelector = _ref4$firstFocusableS === void 0 ? "" : _ref4$firstFocusableS, _ref4$autoFocus = _ref4.autoFocus, autoFocus2 = _ref4$autoFocus === void 0 ? false : _ref4$autoFocus;
      var focusableElement = getFirstFocusableElement(el, "[autofocus]".concat(this.getComputedSelector(autoFocusSelector)));
      autoFocus2 && !focusableElement && (focusableElement = getFirstFocusableElement(el, this.getComputedSelector(firstFocusableSelector)));
      focus(focusableElement);
    },
    onFirstHiddenElementFocus: function onFirstHiddenElementFocus(event) {
      var _this$$el;
      var currentTarget = event.currentTarget, relatedTarget = event.relatedTarget;
      var focusableElement = relatedTarget === currentTarget.$_pfocustrap_lasthiddenfocusableelement || !((_this$$el = this.$el) !== null && _this$$el !== void 0 && _this$$el.contains(relatedTarget)) ? getFirstFocusableElement(currentTarget.parentElement, this.getComputedSelector(currentTarget.$_pfocustrap_focusableselector)) : currentTarget.$_pfocustrap_lasthiddenfocusableelement;
      focus(focusableElement);
    },
    onLastHiddenElementFocus: function onLastHiddenElementFocus(event) {
      var _this$$el2;
      var currentTarget = event.currentTarget, relatedTarget = event.relatedTarget;
      var focusableElement = relatedTarget === currentTarget.$_pfocustrap_firsthiddenfocusableelement || !((_this$$el2 = this.$el) !== null && _this$$el2 !== void 0 && _this$$el2.contains(relatedTarget)) ? getLastFocusableElement(currentTarget.parentElement, this.getComputedSelector(currentTarget.$_pfocustrap_focusableselector)) : currentTarget.$_pfocustrap_firsthiddenfocusableelement;
      focus(focusableElement);
    },
    createHiddenFocusableElements: function createHiddenFocusableElements(el, binding) {
      var _this2 = this;
      var _ref5 = binding.value || {}, _ref5$tabIndex = _ref5.tabIndex, tabIndex = _ref5$tabIndex === void 0 ? 0 : _ref5$tabIndex, _ref5$firstFocusableS = _ref5.firstFocusableSelector, firstFocusableSelector = _ref5$firstFocusableS === void 0 ? "" : _ref5$firstFocusableS, _ref5$lastFocusableSe = _ref5.lastFocusableSelector, lastFocusableSelector = _ref5$lastFocusableSe === void 0 ? "" : _ref5$lastFocusableSe;
      var createFocusableElement = function createFocusableElement2(onFocus) {
        return createElement("span", {
          "class": "p-hidden-accessible p-hidden-focusable",
          tabIndex,
          role: "presentation",
          "aria-hidden": true,
          "data-p-hidden-accessible": true,
          "data-p-hidden-focusable": true,
          onFocus: onFocus === null || onFocus === void 0 ? void 0 : onFocus.bind(_this2)
        });
      };
      var firstFocusableElement = createFocusableElement(this.onFirstHiddenElementFocus);
      var lastFocusableElement = createFocusableElement(this.onLastHiddenElementFocus);
      firstFocusableElement.$_pfocustrap_lasthiddenfocusableelement = lastFocusableElement;
      firstFocusableElement.$_pfocustrap_focusableselector = firstFocusableSelector;
      firstFocusableElement.setAttribute("data-pc-section", "firstfocusableelement");
      lastFocusableElement.$_pfocustrap_firsthiddenfocusableelement = firstFocusableElement;
      lastFocusableElement.$_pfocustrap_focusableselector = lastFocusableSelector;
      lastFocusableElement.setAttribute("data-pc-section", "lastfocusableelement");
      el.prepend(firstFocusableElement);
      el.append(lastFocusableElement);
    }
  }
});
var script$8 = {
  name: "Portal",
  props: {
    appendTo: {
      type: [String, Object],
      "default": "body"
    },
    disabled: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      mounted: false
    };
  },
  mounted: function mounted2() {
    this.mounted = isClient();
  },
  computed: {
    inline: function inline() {
      return this.disabled || this.appendTo === "self";
    }
  }
};
function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return $options.inline ? renderSlot(_ctx.$slots, "default", {
    key: 0
  }) : $data.mounted ? (openBlock(), createBlock(Teleport, {
    key: 1,
    to: $props.appendTo
  }, [renderSlot(_ctx.$slots, "default")], 8, ["to"])) : createCommentVNode("", true);
}
script$8.render = render$7;
var theme$2 = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-image-mask {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.p-image-preview {\n    position: relative;\n    display: inline-flex;\n    line-height: 0;\n}\n\n.p-image-preview-mask {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    opacity: 0;\n    transition: opacity 0.3s;\n    border: 0 none;\n    padding: 0;\n    cursor: pointer;\n    background: transparent;\n    color: ".concat(dt("image.preview.mask.color"), ";\n    transition: background ").concat(dt("image.transition.duration"), ";\n}\n\n.p-image-preview:hover > .p-image-preview-mask {\n    opacity: 1;\n    cursor: pointer;\n    background: ").concat(dt("image.preview.mask.background"), ";\n}\n\n.p-image-preview-icon {\n    font-size: ").concat(dt("image.preview.icon.size"), ";\n    width: ").concat(dt("image.preview.icon.size"), ";\n    height: ").concat(dt("image.preview.icon.size"), ";\n}\n\n.p-image-toolbar {\n    position: absolute;\n    top: ").concat(dt("image.toolbar.position.top"), ";\n    right: ").concat(dt("image.toolbar.position.right"), ";\n    left: ").concat(dt("image.toolbar.position.left"), ";\n    bottom: ").concat(dt("image.toolbar.position.bottom"), ";\n    display: flex;\n    z-index: 1;\n    padding: ").concat(dt("image.toolbar.padding"), ";\n    background: ").concat(dt("image.toolbar.background"), ";\n    backdrop-filter: blur(").concat(dt("image.toolbar.blur"), ");\n    border-color: ").concat(dt("image.toolbar.border.color"), ";\n    border-style: solid;\n    border-width: ").concat(dt("image.toolbar.border.width"), ";\n    border-radius: ").concat(dt("image.toolbar.border.radius"), ";\n    gap: ").concat(dt("image.toolbar.gap"), ";\n}\n\n.p-image-action {\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    color: ").concat(dt("image.action.color"), ";\n    background: transparent;\n    width: ").concat(dt("image.action.size"), ";\n    height: ").concat(dt("image.action.size"), ";\n    margin: 0;\n    padding: 0;\n    border: 0 none;\n    cursor: pointer;\n    user-select: none;\n    border-radius: ").concat(dt("image.action.border.radius"), ";\n    outline-color: transparent;\n    transition: background ").concat(dt("image.transition.duration"), ", color ").concat(dt("image.transition.duration"), ", outline-color ").concat(dt("image.transition.duration"), ", box-shadow ").concat(dt("image.transition.duration"), ";\n}\n\n.p-image-action:hover {\n    color: ").concat(dt("image.action.hover.color"), ";\n    background: ").concat(dt("image.action.hover.background"), ";\n}\n\n.p-image-action:focus-visible {\n    box-shadow: ").concat(dt("toolbar.action.focus.ring.shadow"), ";\n    outline: ").concat(dt("toolbar.action.focus.ring.width"), " ").concat(dt("toolbar.action.focus.ring.style"), " ").concat(dt("toolbar.action.focus.ring.color"), ";\n    outline-offset: ").concat(dt("toolbar.action.focus.ring.offset"), ";\n}\n\n.p-image-action .p-icon {\n    font-size: ").concat(dt("image.action.icon.size"), ";\n    width: ").concat(dt("image.action.icon.size"), ";\n    height: ").concat(dt("image.action.icon.size"), ";\n}\n\n.p-image-action.p-disabled {\n    pointer-events: auto;\n}\n\n.p-image-original {\n    transition: transform 0.15s;\n    max-width: 100vw;\n    max-height: 100vh;\n}\n\n.p-image-original-enter-active {\n    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.p-image-original-leave-active {\n    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.p-image-original-enter-from,\n.p-image-original-leave-to {\n    opacity: 0;\n    transform: scale(0.7);\n}\n");
};
var classes$2 = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return ["p-image p-component", {
      "p-image-preview": props.preview
    }];
  },
  previewMask: "p-image-preview-mask",
  previewIcon: "p-image-preview-icon",
  mask: "p-image-mask p-overlay-mask p-overlay-mask-enter",
  toolbar: "p-image-toolbar",
  rotateRightButton: "p-image-action p-image-rotate-right-button",
  rotateLeftButton: "p-image-action p-image-rotate-left-button",
  zoomOutButton: function zoomOutButton(_ref3) {
    var instance = _ref3.instance;
    return ["p-image-action p-image-zoom-out-button", {
      "p-disabled": instance.isZoomOutDisabled
    }];
  },
  zoomInButton: function zoomInButton(_ref4) {
    var instance = _ref4.instance;
    return ["p-image-action p-image-zoom-in-button", {
      "p-disabled": instance.isZoomInDisabled
    }];
  },
  closeButton: "p-image-action p-image-close-button",
  original: "p-image-original"
};
var ImageStyle = BaseStyle.extend({
  name: "image",
  theme: theme$2,
  classes: classes$2
});
var script$1$2 = {
  name: "BaseImage",
  "extends": script$5$1,
  props: {
    preview: {
      type: Boolean,
      "default": false
    },
    "class": {
      type: null,
      "default": null
    },
    style: {
      type: null,
      "default": null
    },
    imageStyle: {
      type: null,
      "default": null
    },
    imageClass: {
      type: null,
      "default": null
    },
    previewButtonProps: {
      type: null,
      "default": null
    },
    indicatorIcon: {
      type: String,
      "default": void 0
    },
    previewIcon: {
      type: String,
      "default": void 0
    },
    zoomInDisabled: {
      type: Boolean,
      "default": false
    },
    zoomOutDisabled: {
      type: Boolean,
      "default": false
    }
  },
  style: ImageStyle,
  provide: function provide() {
    return {
      $pcImage: this,
      $parentInstance: this
    };
  }
};
var script$7 = {
  name: "Image",
  "extends": script$1$2,
  inheritAttrs: false,
  emits: ["show", "hide", "error"],
  mask: null,
  data: function data2() {
    return {
      maskVisible: false,
      previewVisible: false,
      rotate: 0,
      scale: 1
    };
  },
  beforeUnmount: function beforeUnmount() {
    if (this.mask) {
      ZIndex.clear(this.container);
    }
  },
  methods: {
    maskRef: function maskRef(el) {
      this.mask = el;
    },
    toolbarRef: function toolbarRef(el) {
      this.toolbarRef = el;
    },
    onImageClick: function onImageClick() {
      var _this = this;
      if (this.preview) {
        blockBodyScroll();
        this.maskVisible = true;
        setTimeout(function() {
          _this.previewVisible = true;
        }, 25);
      }
    },
    onPreviewImageClick: function onPreviewImageClick() {
      this.previewClick = true;
    },
    onMaskClick: function onMaskClick(event) {
      var isBarActionsClicked = isAttributeEquals(event.target, "data-pc-section-group", "action") || event.target.closest('[data-pc-section-group="action"]');
      if (!this.previewClick && !isBarActionsClicked) {
        this.previewVisible = false;
        this.rotate = 0;
        this.scale = 1;
      }
      this.previewClick = false;
    },
    onMaskKeydown: function onMaskKeydown(event) {
      var _this2 = this;
      switch (event.code) {
        case "Escape":
          this.hidePreview();
          setTimeout(function() {
            focus(_this2.$refs.previewButton);
          }, 200);
          event.preventDefault();
          break;
      }
    },
    onError: function onError() {
      this.$emit("error");
    },
    rotateRight: function rotateRight() {
      this.rotate += 90;
      this.previewClick = true;
    },
    rotateLeft: function rotateLeft() {
      this.rotate -= 90;
      this.previewClick = true;
    },
    zoomIn: function zoomIn() {
      this.scale = this.scale + 0.1;
      this.previewClick = true;
    },
    zoomOut: function zoomOut() {
      this.scale = this.scale - 0.1;
      this.previewClick = true;
    },
    onBeforeEnter: function onBeforeEnter() {
      ZIndex.set("modal", this.mask, this.$primevue.config.zIndex.modal);
    },
    onEnter: function onEnter() {
      this.focus();
      this.$emit("show");
    },
    onBeforeLeave: function onBeforeLeave() {
      !this.isUnstyled && addClass(this.mask, "p-overlay-mask-leave");
    },
    onLeave: function onLeave() {
      unblockBodyScroll();
      this.$emit("hide");
    },
    onAfterLeave: function onAfterLeave(el) {
      ZIndex.clear(el);
      this.maskVisible = false;
    },
    focus: function focus2() {
      var focusTarget = this.mask.querySelector("[autofocus]");
      if (focusTarget) {
        focusTarget.focus();
      }
    },
    hidePreview: function hidePreview() {
      this.previewVisible = false;
      this.rotate = 0;
      this.scale = 1;
      unblockBodyScroll();
    }
  },
  computed: {
    containerClass: function containerClass() {
      return [this.cx("root"), this["class"]];
    },
    rotateClass: function rotateClass() {
      return "p-image-preview-rotate-" + this.rotate;
    },
    imagePreviewStyle: function imagePreviewStyle() {
      return {
        transform: "rotate(" + this.rotate + "deg) scale(" + this.scale + ")"
      };
    },
    isZoomInDisabled: function isZoomInDisabled() {
      return this.zoomInDisabled || this.scale >= 1.5;
    },
    isZoomOutDisabled: function isZoomOutDisabled() {
      return this.zoomOutDisabled || this.scale <= 0.5;
    },
    rightAriaLabel: function rightAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.rotateRight : void 0;
    },
    leftAriaLabel: function leftAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.rotateLeft : void 0;
    },
    zoomInAriaLabel: function zoomInAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.zoomIn : void 0;
    },
    zoomOutAriaLabel: function zoomOutAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.zoomOut : void 0;
    },
    zoomImageAriaLabel: function zoomImageAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.zoomImage : void 0;
    },
    closeAriaLabel: function closeAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.close : void 0;
    }
  },
  components: {
    Portal: script$8,
    EyeIcon: script$e,
    RefreshIcon: script$d,
    UndoIcon: script$9,
    SearchMinusIcon: script$c,
    SearchPlusIcon: script$b,
    TimesIcon: script$a
  },
  directives: {
    focustrap: FocusTrap
  }
};
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var _hoisted_1$5 = ["aria-label"];
var _hoisted_2$5 = ["aria-modal"];
var _hoisted_3$1 = ["aria-label"];
var _hoisted_4$1 = ["aria-label"];
var _hoisted_5$1 = ["disabled", "aria-label"];
var _hoisted_6 = ["disabled", "aria-label"];
var _hoisted_7 = ["aria-label"];
var _hoisted_8 = ["src"];
function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_RefreshIcon = resolveComponent("RefreshIcon");
  var _component_UndoIcon = resolveComponent("UndoIcon");
  var _component_SearchMinusIcon = resolveComponent("SearchMinusIcon");
  var _component_SearchPlusIcon = resolveComponent("SearchPlusIcon");
  var _component_TimesIcon = resolveComponent("TimesIcon");
  var _component_Portal = resolveComponent("Portal");
  var _directive_focustrap = resolveDirective("focustrap");
  return openBlock(), createElementBlock("span", mergeProps({
    "class": $options.containerClass,
    style: _ctx.style
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "image", {
    errorCallback: $options.onError
  }, function() {
    return [createElementVNode("img", mergeProps({
      style: _ctx.imageStyle,
      "class": _ctx.imageClass,
      onError: _cache[0] || (_cache[0] = function() {
        return $options.onError && $options.onError.apply($options, arguments);
      })
    }, _objectSpread(_objectSpread({}, _ctx.$attrs), _ctx.ptm("image"))), null, 16)];
  }), _ctx.preview ? (openBlock(), createElementBlock("button", mergeProps({
    key: 0,
    ref: "previewButton",
    "aria-label": $options.zoomImageAriaLabel,
    type: "button",
    "class": _ctx.cx("previewMask"),
    onClick: _cache[1] || (_cache[1] = function() {
      return $options.onImageClick && $options.onImageClick.apply($options, arguments);
    })
  }, _objectSpread(_objectSpread({}, _ctx.previewButtonProps), _ctx.ptm("previewMask"))), [renderSlot(_ctx.$slots, _ctx.$slots.previewicon ? "previewicon" : "indicatoricon", {}, function() {
    return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.previewIcon || _ctx.indicatorIcon ? "i" : "EyeIcon"), mergeProps({
      "class": _ctx.cx("previewIcon")
    }, _ctx.ptm("previewIcon")), null, 16, ["class"]))];
  })], 16, _hoisted_1$5)) : createCommentVNode("", true), createVNode(_component_Portal, null, {
    "default": withCtx(function() {
      return [$data.maskVisible ? withDirectives((openBlock(), createElementBlock("div", mergeProps({
        key: 0,
        ref: $options.maskRef,
        role: "dialog",
        "class": _ctx.cx("mask"),
        "aria-modal": $data.maskVisible,
        onClick: _cache[8] || (_cache[8] = function() {
          return $options.onMaskClick && $options.onMaskClick.apply($options, arguments);
        }),
        onKeydown: _cache[9] || (_cache[9] = function() {
          return $options.onMaskKeydown && $options.onMaskKeydown.apply($options, arguments);
        })
      }, _ctx.ptm("mask")), [createElementVNode("div", mergeProps({
        "class": _ctx.cx("toolbar")
      }, _ctx.ptm("toolbar")), [createElementVNode("button", mergeProps({
        "class": _ctx.cx("rotateRightButton"),
        onClick: _cache[2] || (_cache[2] = function() {
          return $options.rotateRight && $options.rotateRight.apply($options, arguments);
        }),
        type: "button",
        "aria-label": $options.rightAriaLabel
      }, _ctx.ptm("rotateRightButton"), {
        "data-pc-group-section": "action"
      }), [renderSlot(_ctx.$slots, "refresh", {}, function() {
        return [createVNode(_component_RefreshIcon, normalizeProps(guardReactiveProps(_ctx.ptm("rotateRightIcon"))), null, 16)];
      })], 16, _hoisted_3$1), createElementVNode("button", mergeProps({
        "class": _ctx.cx("rotateLeftButton"),
        onClick: _cache[3] || (_cache[3] = function() {
          return $options.rotateLeft && $options.rotateLeft.apply($options, arguments);
        }),
        type: "button",
        "aria-label": $options.leftAriaLabel
      }, _ctx.ptm("rotateLeftButton"), {
        "data-pc-group-section": "action"
      }), [renderSlot(_ctx.$slots, "undo", {}, function() {
        return [createVNode(_component_UndoIcon, normalizeProps(guardReactiveProps(_ctx.ptm("rotateLeftIcon"))), null, 16)];
      })], 16, _hoisted_4$1), createElementVNode("button", mergeProps({
        "class": _ctx.cx("zoomOutButton"),
        onClick: _cache[4] || (_cache[4] = function() {
          return $options.zoomOut && $options.zoomOut.apply($options, arguments);
        }),
        type: "button",
        disabled: $options.isZoomOutDisabled,
        "aria-label": $options.zoomOutAriaLabel
      }, _ctx.ptm("zoomOutButton"), {
        "data-pc-group-section": "action"
      }), [renderSlot(_ctx.$slots, "zoomout", {}, function() {
        return [createVNode(_component_SearchMinusIcon, normalizeProps(guardReactiveProps(_ctx.ptm("zoomOutIcon"))), null, 16)];
      })], 16, _hoisted_5$1), createElementVNode("button", mergeProps({
        "class": _ctx.cx("zoomInButton"),
        onClick: _cache[5] || (_cache[5] = function() {
          return $options.zoomIn && $options.zoomIn.apply($options, arguments);
        }),
        type: "button",
        disabled: $options.isZoomInDisabled,
        "aria-label": $options.zoomInAriaLabel
      }, _ctx.ptm("zoomInButton"), {
        "data-pc-group-section": "action"
      }), [renderSlot(_ctx.$slots, "zoomin", {}, function() {
        return [createVNode(_component_SearchPlusIcon, normalizeProps(guardReactiveProps(_ctx.ptm("zoomInIcon"))), null, 16)];
      })], 16, _hoisted_6), createElementVNode("button", mergeProps({
        "class": _ctx.cx("closeButton"),
        type: "button",
        onClick: _cache[6] || (_cache[6] = function() {
          return $options.hidePreview && $options.hidePreview.apply($options, arguments);
        }),
        "aria-label": $options.closeAriaLabel,
        autofocus: ""
      }, _ctx.ptm("closeButton"), {
        "data-pc-group-section": "action"
      }), [renderSlot(_ctx.$slots, "close", {}, function() {
        return [createVNode(_component_TimesIcon, normalizeProps(guardReactiveProps(_ctx.ptm("closeIcon"))), null, 16)];
      })], 16, _hoisted_7)], 16), createVNode(Transition, mergeProps({
        name: "p-image-original",
        onBeforeEnter: $options.onBeforeEnter,
        onEnter: $options.onEnter,
        onLeave: $options.onLeave,
        onBeforeLeave: $options.onBeforeLeave,
        onAfterLeave: $options.onAfterLeave
      }, _ctx.ptm("transition")), {
        "default": withCtx(function() {
          return [$data.previewVisible ? (openBlock(), createElementBlock("div", normalizeProps(mergeProps({
            key: 0
          }, _ctx.ptm("originalContainer"))), [renderSlot(_ctx.$slots, _ctx.$slots.original ? "original" : "preview", {
            "class": normalizeClass(_ctx.cx("original")),
            style: normalizeStyle($options.imagePreviewStyle),
            previewCallback: $options.onPreviewImageClick
          }, function() {
            return [createElementVNode("img", mergeProps({
              src: _ctx.$attrs.src,
              "class": _ctx.cx("original"),
              style: $options.imagePreviewStyle,
              onClick: _cache[7] || (_cache[7] = function() {
                return $options.onPreviewImageClick && $options.onPreviewImageClick.apply($options, arguments);
              })
            }, _ctx.ptm("original")), null, 16, _hoisted_8)];
          })], 16)) : createCommentVNode("", true)];
        }),
        _: 3
      }, 16, ["onBeforeEnter", "onEnter", "onLeave", "onBeforeLeave", "onAfterLeave"])], 16, _hoisted_2$5)), [[_directive_focustrap]]) : createCommentVNode("", true)];
    }),
    _: 3
  })], 16);
}
script$7.render = render$6;
var script$6 = {
  name: "ChevronDownIcon",
  "extends": script$4$1
};
var _hoisted_1$4 = /* @__PURE__ */ createElementVNode("path", {
  d: "M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2$4 = [_hoisted_1$4];
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$4, 16);
}
script$6.render = render$5;
var script$5 = {
  name: "ChevronLeftIcon",
  "extends": script$4$1
};
var _hoisted_1$3 = /* @__PURE__ */ createElementVNode("path", {
  d: "M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2$3 = [_hoisted_1$3];
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$3, 16);
}
script$5.render = render$4;
var script$4 = {
  name: "ChevronRightIcon",
  "extends": script$4$1
};
var _hoisted_1$2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2$2 = [_hoisted_1$2];
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$2, 16);
}
script$4.render = render$3;
var script$3 = {
  name: "ChevronUpIcon",
  "extends": script$4$1
};
var _hoisted_1$1 = /* @__PURE__ */ createElementVNode("path", {
  d: "M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2$1 = [_hoisted_1$1];
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$1, 16);
}
script$3.render = render$2;
var theme$1 = function theme2(_ref) {
  var dt = _ref.dt;
  return "\n.p-carousel {\n    display: flex;\n    flex-direction: column;\n}\n\n.p-carousel-content-container {\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n}\n\n.p-carousel-content {\n    display: flex;\n    flex-direction: row;\n    gap: ".concat(dt("carousel.content.gap"), ";\n}\n\n.p-carousel-viewport {\n    overflow: hidden;\n    width: 100%;\n}\n\n.p-carousel-item-list {\n    display: flex;\n    flex-direction: row;\n}\n\n.p-carousel-prev-button,\n.p-carousel-next-button {\n    align-self: center;\n}\n\n.p-carousel-indicator-list {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    flex-wrap: wrap;\n    padding: ").concat(dt("carousel.indicator.list.padding"), ";\n    gap: ").concat(dt("carousel.indicator.list.gap"), ";\n    margin: 0;\n    list-style: none;\n}\n\n.p-carousel-indicator-button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: ").concat(dt("carousel.indicator.background"), ";\n    width: ").concat(dt("carousel.indicator.width"), ";\n    height: ").concat(dt("carousel.indicator.height"), ";\n    border: 0 none;\n    transition: background ").concat(dt("carousel.transition.duration"), ", color ").concat(dt("carousel.transition.duration"), ", outline-color ").concat(dt("carousel.transition.duration"), ", box-shadow ").concat(dt("carousel.transition.duration"), ";\n    outline-color: transparent;\n    border-radius: ").concat(dt("carousel.indicator.border.radius"), ";\n    padding: 0;\n    margin: 0;\n    user-select: none;\n    cursor: pointer;\n}\n\n.p-carousel-indicator-button:focus-visible {\n    box-shadow: ").concat(dt("carousel.indicator.focus.ring.shadow"), ";\n    outline: ").concat(dt("carousel.indicator.focus.ring.width"), " ").concat(dt("carousel.indicator.focus.ring.style"), " ").concat(dt("carousel.indicator.focus.ring.color"), ";\n    outline-offset: ").concat(dt("carousel.indicator.focus.ring.offset"), ";\n}\n\n.p-carousel-indicator-button:hover {\n    background: ").concat(dt("carousel.indicator.hover.background"), ";\n}\n\n.p-carousel-indicator-active .p-carousel-indicator-button {\n    background: ").concat(dt("carousel.indicator.active.background"), ";\n}\n\n.p-carousel-vertical .p-carousel-content {\n    flex-direction: column;\n}\n\n.p-carousel-vertical .p-carousel-item-list {\n    flex-direction: column;\n    height: 100%;\n}\n\n.p-items-hidden .p-carousel-item {\n    visibility: hidden;\n}\n\n.p-items-hidden .p-carousel-item.p-carousel-item-active {\n    visibility: visible;\n}\n");
};
var classes$1 = {
  root: function root2(_ref2) {
    var instance = _ref2.instance;
    return ["p-carousel p-component", {
      "p-carousel-vertical": instance.isVertical(),
      "p-carousel-horizontal": !instance.isVertical()
    }];
  },
  header: "p-carousel-header",
  contentContainer: "p-carousel-content-container",
  content: "p-carousel-content",
  pcPrevButton: function pcPrevButton(_ref3) {
    var instance = _ref3.instance;
    return ["p-carousel-prev-button", {
      "p-disabled": instance.backwardIsDisabled
    }];
  },
  viewport: "p-carousel-viewport",
  itemList: "p-carousel-item-list",
  itemClone: function itemClone(_ref4) {
    var index = _ref4.index, value2 = _ref4.value, totalShiftedItems = _ref4.totalShiftedItems, d_numVisible = _ref4.d_numVisible;
    return ["p-carousel-item p-carousel-item-clone", {
      "p-carousel-item-active": totalShiftedItems * -1 === value2.length + d_numVisible,
      "p-carousel-item-start": index === 0,
      "p-carousel-item-end": value2.slice(-1 * d_numVisible).length - 1 === index
    }];
  },
  item: function item(_ref5) {
    var instance = _ref5.instance, index = _ref5.index;
    return ["p-carousel-item", {
      "p-carousel-item-active": instance.firstIndex() <= index && instance.lastIndex() >= index,
      "p-carousel-item-start": instance.firstIndex() === index,
      "p-carousel-item-end": instance.lastIndex() === index
    }];
  },
  pcNextButton: function pcNextButton(_ref6) {
    var instance = _ref6.instance;
    return ["p-carousel-next-button", {
      "p-disabled": instance.forwardIsDisabled
    }];
  },
  indicatorList: "p-carousel-indicator-list",
  indicator: function indicator(_ref7) {
    var instance = _ref7.instance, index = _ref7.index;
    return ["p-carousel-indicator", {
      "p-carousel-indicator-active": instance.d_page === index
    }];
  },
  indicatorButton: "p-carousel-indicator-button",
  footer: "p-carousel-footer"
};
var CarouselStyle = BaseStyle.extend({
  name: "carousel",
  theme: theme$1,
  classes: classes$1
});
var script$1$1 = {
  name: "BaseCarousel",
  "extends": script$5$1,
  props: {
    value: null,
    page: {
      type: Number,
      "default": 0
    },
    numVisible: {
      type: Number,
      "default": 1
    },
    numScroll: {
      type: Number,
      "default": 1
    },
    responsiveOptions: Array,
    orientation: {
      type: String,
      "default": "horizontal"
    },
    verticalViewPortHeight: {
      type: String,
      "default": "300px"
    },
    contentClass: String,
    containerClass: String,
    indicatorsContentClass: String,
    circular: {
      type: Boolean,
      "default": false
    },
    autoplayInterval: {
      type: Number,
      "default": 0
    },
    showNavigators: {
      type: Boolean,
      "default": true
    },
    showIndicators: {
      type: Boolean,
      "default": true
    },
    prevButtonProps: {
      type: Object,
      "default": function _default() {
        return {
          severity: "secondary",
          text: true,
          rounded: true
        };
      }
    },
    nextButtonProps: {
      type: Object,
      "default": function _default2() {
        return {
          severity: "secondary",
          text: true,
          rounded: true
        };
      }
    }
  },
  style: CarouselStyle,
  provide: function provide2() {
    return {
      $pcCarousel: this,
      $parentInstance: this
    };
  }
};
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r)
      return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"])
    return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r))
    return _arrayLikeToArray(r);
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++)
    n[e] = r[e];
  return n;
}
var script$2 = {
  name: "Carousel",
  "extends": script$1$1,
  inheritAttrs: false,
  emits: ["update:page"],
  isRemainingItemsAdded: false,
  data: function data3() {
    return {
      remainingItems: 0,
      d_numVisible: this.numVisible,
      d_numScroll: this.numScroll,
      d_oldNumScroll: 0,
      d_oldNumVisible: 0,
      d_oldValue: null,
      d_page: this.page,
      totalShiftedItems: this.page * this.numScroll * -1,
      allowAutoplay: !!this.autoplayInterval,
      d_circular: this.circular || this.allowAutoplay,
      swipeThreshold: 20
    };
  },
  watch: {
    page: function page(newValue) {
      if (newValue > this.d_page) {
        this.navForward({}, newValue);
      } else if (newValue < this.d_page) {
        this.navBackward({}, newValue);
      }
      this.d_page = newValue;
    },
    circular: function circular(newValue) {
      this.d_circular = newValue;
    },
    numVisible: function numVisible(newValue, oldValue) {
      this.d_numVisible = newValue;
      this.d_oldNumVisible = oldValue;
    },
    numScroll: function numScroll(newValue, oldValue) {
      this.d_oldNumScroll = oldValue;
      this.d_numScroll = newValue;
    },
    value: function value(oldValue) {
      this.d_oldValue = oldValue;
    }
  },
  mounted: function mounted3() {
    var stateChanged = false;
    this.$el.setAttribute(this.attributeSelector, "");
    this.createStyle();
    this.calculatePosition();
    if (this.responsiveOptions) {
      this.bindDocumentListeners();
    }
    if (this.isCircular()) {
      var totalShiftedItems = this.totalShiftedItems;
      if (this.d_page === 0) {
        totalShiftedItems = -1 * this.d_numVisible;
      } else if (totalShiftedItems === 0) {
        totalShiftedItems = -1 * this.value.length;
        if (this.remainingItems > 0) {
          this.isRemainingItemsAdded = true;
        }
      }
      if (totalShiftedItems !== this.totalShiftedItems) {
        this.totalShiftedItems = totalShiftedItems;
        stateChanged = true;
      }
    }
    if (!stateChanged && this.isAutoplay()) {
      this.startAutoplay();
    }
  },
  updated: function updated2() {
    if (!this.empty) {
      var isCircular2 = this.isCircular();
      var stateChanged = false;
      var totalShiftedItems = this.totalShiftedItems;
      if (this.autoplayInterval) {
        this.stopAutoplay();
      }
      if (this.d_oldNumScroll !== this.d_numScroll || this.d_oldNumVisible !== this.d_numVisible || this.d_oldValue.length !== this.value.length) {
        this.remainingItems = (this.value.length - this.d_numVisible) % this.d_numScroll;
        var page2 = this.d_page;
        if (this.totalIndicators !== 0 && page2 >= this.totalIndicators) {
          page2 = this.totalIndicators - 1;
          this.$emit("update:page", page2);
          this.d_page = page2;
          stateChanged = true;
        }
        totalShiftedItems = page2 * this.d_numScroll * -1;
        if (isCircular2) {
          totalShiftedItems -= this.d_numVisible;
        }
        if (page2 === this.totalIndicators - 1 && this.remainingItems > 0) {
          totalShiftedItems += -1 * this.remainingItems + this.d_numScroll;
          this.isRemainingItemsAdded = true;
        } else {
          this.isRemainingItemsAdded = false;
        }
        if (totalShiftedItems !== this.totalShiftedItems) {
          this.totalShiftedItems = totalShiftedItems;
          stateChanged = true;
        }
        this.d_oldNumScroll = this.d_numScroll;
        this.d_oldNumVisible = this.d_numVisible;
        this.d_oldValue = this.value;
        this.$refs.itemsContainer.style.transform = this.isVertical() ? "translate3d(0, ".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0)") : "translate3d(".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0, 0)");
      }
      if (isCircular2) {
        if (this.d_page === 0) {
          totalShiftedItems = -1 * this.d_numVisible;
        } else if (totalShiftedItems === 0) {
          totalShiftedItems = -1 * this.value.length;
          if (this.remainingItems > 0) {
            this.isRemainingItemsAdded = true;
          }
        }
        if (totalShiftedItems !== this.totalShiftedItems) {
          this.totalShiftedItems = totalShiftedItems;
          stateChanged = true;
        }
      }
      if (!stateChanged && this.isAutoplay()) {
        this.startAutoplay();
      }
    }
  },
  beforeUnmount: function beforeUnmount2() {
    if (this.responsiveOptions) {
      this.unbindDocumentListeners();
    }
    if (this.autoplayInterval) {
      this.stopAutoplay();
    }
  },
  methods: {
    getIndicatorPTOptions: function getIndicatorPTOptions(index) {
      return {
        context: {
          highlighted: index === this.d_page
        }
      };
    },
    step: function step(dir, page2) {
      var totalShiftedItems = this.totalShiftedItems;
      var isCircular2 = this.isCircular();
      if (page2 != null) {
        totalShiftedItems = this.d_numScroll * page2 * -1;
        if (isCircular2) {
          totalShiftedItems -= this.d_numVisible;
        }
        this.isRemainingItemsAdded = false;
      } else {
        totalShiftedItems += this.d_numScroll * dir;
        if (this.isRemainingItemsAdded) {
          totalShiftedItems += this.remainingItems - this.d_numScroll * dir;
          this.isRemainingItemsAdded = false;
        }
        var originalShiftedItems = isCircular2 ? totalShiftedItems + this.d_numVisible : totalShiftedItems;
        page2 = Math.abs(Math.floor(originalShiftedItems / this.d_numScroll));
      }
      if (isCircular2 && this.d_page === this.totalIndicators - 1 && dir === -1) {
        totalShiftedItems = -1 * (this.value.length + this.d_numVisible);
        page2 = 0;
      } else if (isCircular2 && this.d_page === 0 && dir === 1) {
        totalShiftedItems = 0;
        page2 = this.totalIndicators - 1;
      } else if (page2 === this.totalIndicators - 1 && this.remainingItems > 0) {
        totalShiftedItems += this.remainingItems * -1 - this.d_numScroll * dir;
        this.isRemainingItemsAdded = true;
      }
      if (this.$refs.itemsContainer) {
        !this.isUnstyled && removeClass(this.$refs.itemsContainer, "p-items-hidden");
        this.$refs.itemsContainer.style.transform = this.isVertical() ? "translate3d(0, ".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0)") : "translate3d(".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0, 0)");
        this.$refs.itemsContainer.style.transition = "transform 500ms ease 0s";
      }
      this.totalShiftedItems = totalShiftedItems;
      this.$emit("update:page", page2);
      this.d_page = page2;
    },
    calculatePosition: function calculatePosition() {
      if (this.$refs.itemsContainer && this.responsiveOptions) {
        var windowWidth = (void 0).innerWidth;
        var matchedResponsiveOptionsData = {
          numVisible: this.numVisible,
          numScroll: this.numScroll
        };
        for (var i = 0; i < this.responsiveOptions.length; i++) {
          var res = this.responsiveOptions[i];
          if (parseInt(res.breakpoint, 10) >= windowWidth) {
            matchedResponsiveOptionsData = res;
          }
        }
        if (this.d_numScroll !== matchedResponsiveOptionsData.numScroll) {
          var page2 = this.d_page;
          page2 = parseInt(page2 * this.d_numScroll / matchedResponsiveOptionsData.numScroll);
          this.totalShiftedItems = matchedResponsiveOptionsData.numScroll * page2 * -1;
          if (this.isCircular()) {
            this.totalShiftedItems -= matchedResponsiveOptionsData.numVisible;
          }
          this.d_numScroll = matchedResponsiveOptionsData.numScroll;
          this.$emit("update:page", page2);
          this.d_page = page2;
        }
        if (this.d_numVisible !== matchedResponsiveOptionsData.numVisible) {
          this.d_numVisible = matchedResponsiveOptionsData.numVisible;
        }
      }
    },
    navBackward: function navBackward(e, index) {
      if (this.d_circular || this.d_page !== 0) {
        this.step(1, index);
      }
      this.allowAutoplay = false;
      if (e.cancelable) {
        e.preventDefault();
      }
    },
    navForward: function navForward(e, index) {
      if (this.d_circular || this.d_page < this.totalIndicators - 1) {
        this.step(-1, index);
      }
      this.allowAutoplay = false;
      if (e.cancelable) {
        e.preventDefault();
      }
    },
    onIndicatorClick: function onIndicatorClick(e, index) {
      var page2 = this.d_page;
      if (index > page2) {
        this.navForward(e, index);
      } else if (index < page2) {
        this.navBackward(e, index);
      }
    },
    onTransitionEnd: function onTransitionEnd() {
      if (this.$refs.itemsContainer) {
        !this.isUnstyled && addClass(this.$refs.itemsContainer, "p-items-hidden");
        this.$refs.itemsContainer.style.transition = "";
        if ((this.d_page === 0 || this.d_page === this.totalIndicators - 1) && this.isCircular()) {
          this.$refs.itemsContainer.style.transform = this.isVertical() ? "translate3d(0, ".concat(this.totalShiftedItems * (100 / this.d_numVisible), "%, 0)") : "translate3d(".concat(this.totalShiftedItems * (100 / this.d_numVisible), "%, 0, 0)");
        }
      }
    },
    onTouchStart: function onTouchStart(e) {
      var touchobj = e.changedTouches[0];
      this.startPos = {
        x: touchobj.pageX,
        y: touchobj.pageY
      };
    },
    onTouchMove: function onTouchMove(e) {
      var touchobj = e.changedTouches[0];
      var diff = this.isVertical() ? touchobj.pageY - this.startPos.y : touchobj.pageX - this.startPos.x;
      if (Math.abs(diff) > this.swipeThreshold && e.cancelable) {
        e.preventDefault();
      }
    },
    onTouchEnd: function onTouchEnd(e) {
      var touchobj = e.changedTouches[0];
      if (this.isVertical()) {
        this.changePageOnTouch(e, touchobj.pageY - this.startPos.y);
      } else {
        this.changePageOnTouch(e, touchobj.pageX - this.startPos.x);
      }
    },
    changePageOnTouch: function changePageOnTouch(e, diff) {
      if (Math.abs(diff) > this.swipeThreshold) {
        if (diff < 0) {
          this.navForward(e);
        } else {
          this.navBackward(e);
        }
      }
    },
    onIndicatorKeydown: function onIndicatorKeydown(event) {
      switch (event.code) {
        case "ArrowRight":
          this.onRightKey();
          break;
        case "ArrowLeft":
          this.onLeftKey();
          break;
        case "Home":
          this.onHomeKey();
          event.preventDefault();
          break;
        case "End":
          this.onEndKey();
          event.preventDefault();
          break;
        case "ArrowUp":
        case "ArrowDown":
        case "PageUp":
        case "PageDown":
          event.preventDefault();
          break;
        case "Tab":
          this.onTabKey();
          break;
      }
    },
    onRightKey: function onRightKey() {
      var indicators = _toConsumableArray(find(this.$refs.indicatorContent, '[data-pc-section="indicator"]'));
      var activeIndex = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex, activeIndex + 1 === indicators.length ? indicators.length - 1 : activeIndex + 1);
    },
    onLeftKey: function onLeftKey() {
      var activeIndex = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex, activeIndex - 1 <= 0 ? 0 : activeIndex - 1);
    },
    onHomeKey: function onHomeKey() {
      var activeIndex = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex, 0);
    },
    onEndKey: function onEndKey() {
      var indicators = _toConsumableArray(find(this.$refs.indicatorContent, '[data-pc-section="indicator"]'));
      var activeIndex = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex, indicators.length - 1);
    },
    onTabKey: function onTabKey() {
      var indicators = _toConsumableArray(find(this.$refs.indicatorContent, '[data-pc-section="indicator"]'));
      var highlightedIndex = indicators.findIndex(function(ind) {
        return getAttribute(ind, "data-p-active") === true;
      });
      var activeIndicator = findSingle(this.$refs.indicatorContent, '[data-pc-section="indicator"] > button[tabindex="0"]');
      var activeIndex = indicators.findIndex(function(ind) {
        return ind === activeIndicator.parentElement;
      });
      indicators[activeIndex].children[0].tabIndex = "-1";
      indicators[highlightedIndex].children[0].tabIndex = "0";
    },
    findFocusedIndicatorIndex: function findFocusedIndicatorIndex() {
      var indicators = _toConsumableArray(find(this.$refs.indicatorContent, '[data-pc-section="indicator"]'));
      var activeIndicator = findSingle(this.$refs.indicatorContent, '[data-pc-section="indicator"] > button[tabindex="0"]');
      return indicators.findIndex(function(ind) {
        return ind === activeIndicator.parentElement;
      });
    },
    changedFocusedIndicator: function changedFocusedIndicator(prevInd, nextInd) {
      var indicators = _toConsumableArray(find(this.$refs.indicatorContent, '[data-pc-section="indicator"]'));
      indicators[prevInd].children[0].tabIndex = "-1";
      indicators[nextInd].children[0].tabIndex = "0";
      indicators[nextInd].children[0].focus();
    },
    bindDocumentListeners: function bindDocumentListeners() {
      var _this = this;
      if (!this.documentResizeListener) {
        this.documentResizeListener = function(e) {
          _this.calculatePosition(e);
        };
        (void 0).addEventListener("resize", this.documentResizeListener);
      }
    },
    unbindDocumentListeners: function unbindDocumentListeners() {
      if (this.documentResizeListener) {
        (void 0).removeEventListener("resize", this.documentResizeListener);
        this.documentResizeListener = null;
      }
    },
    startAutoplay: function startAutoplay() {
      var _this2 = this;
      this.interval = setInterval(function() {
        if (_this2.d_page === _this2.totalIndicators - 1) {
          _this2.step(-1, 0);
        } else {
          _this2.step(-1, _this2.d_page + 1);
        }
      }, this.autoplayInterval);
    },
    stopAutoplay: function stopAutoplay() {
      if (this.interval) {
        clearInterval(this.interval);
      }
    },
    createStyle: function createStyle() {
      if (!this.carouselStyle) {
        var _this$$primevue;
        this.carouselStyle = (void 0).createElement("style");
        this.carouselStyle.type = "text/css";
        setAttribute(this.carouselStyle, "nonce", (_this$$primevue = this.$primevue) === null || _this$$primevue === void 0 || (_this$$primevue = _this$$primevue.config) === null || _this$$primevue === void 0 || (_this$$primevue = _this$$primevue.csp) === null || _this$$primevue === void 0 ? void 0 : _this$$primevue.nonce);
        (void 0).body.appendChild(this.carouselStyle);
      }
      var innerHTML = "\n                .p-carousel[".concat(this.attributeSelector, "] .p-carousel-item {\n                    flex: 1 0 ").concat(100 / this.d_numVisible, "%\n                }\n            ");
      if (this.responsiveOptions && !this.isUnstyled) {
        var _responsiveOptions = _toConsumableArray(this.responsiveOptions);
        var comparer = localeComparator();
        _responsiveOptions.sort(function(data1, data22) {
          var value1 = data1.breakpoint;
          var value2 = data22.breakpoint;
          return sort(value1, value2, -1, comparer);
        });
        for (var i = 0; i < _responsiveOptions.length; i++) {
          var res = _responsiveOptions[i];
          innerHTML += "\n                        @media screen and (max-width: ".concat(res.breakpoint, ") {\n                            .p-carousel[").concat(this.attributeSelector, "] .p-carousel-item {\n                                flex: 1 0 ").concat(100 / res.numVisible, "%\n                            }\n                        }\n                    ");
        }
      }
      this.carouselStyle.innerHTML = innerHTML;
    },
    isVertical: function isVertical() {
      return this.orientation === "vertical";
    },
    isCircular: function isCircular() {
      return this.value && this.d_circular && this.value.length >= this.d_numVisible;
    },
    isAutoplay: function isAutoplay() {
      return this.autoplayInterval && this.allowAutoplay;
    },
    firstIndex: function firstIndex() {
      return this.isCircular() ? -1 * (this.totalShiftedItems + this.d_numVisible) : this.totalShiftedItems * -1;
    },
    lastIndex: function lastIndex() {
      return this.firstIndex() + this.d_numVisible - 1;
    },
    ariaSlideNumber: function ariaSlideNumber(value2) {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g, value2) : void 0;
    },
    ariaPageLabel: function ariaPageLabel(value2) {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g, value2) : void 0;
    }
  },
  computed: {
    totalIndicators: function totalIndicators() {
      return this.value ? Math.max(Math.ceil((this.value.length - this.d_numVisible) / this.d_numScroll) + 1, 0) : 0;
    },
    backwardIsDisabled: function backwardIsDisabled() {
      return this.value && (!this.circular || this.value.length < this.d_numVisible) && this.d_page === 0;
    },
    forwardIsDisabled: function forwardIsDisabled() {
      return this.value && (!this.circular || this.value.length < this.d_numVisible) && (this.d_page === this.totalIndicators - 1 || this.totalIndicators === 0);
    },
    ariaSlideLabel: function ariaSlideLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.slide : void 0;
    },
    ariaPrevButtonLabel: function ariaPrevButtonLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.prevPageLabel : void 0;
    },
    ariaNextButtonLabel: function ariaNextButtonLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.nextPageLabel : void 0;
    },
    attributeSelector: function attributeSelector() {
      return UniqueComponentId();
    },
    empty: function empty() {
      return !this.value || this.value.length === 0;
    },
    emptyMessageText: function emptyMessageText() {
      var _this$$primevue$confi;
      return ((_this$$primevue$confi = this.$primevue.config) === null || _this$$primevue$confi === void 0 || (_this$$primevue$confi = _this$$primevue$confi.locale) === null || _this$$primevue$confi === void 0 ? void 0 : _this$$primevue$confi.emptyMessage) || "";
    }
  },
  components: {
    Button: script$f,
    ChevronRightIcon: script$4,
    ChevronDownIcon: script$6,
    ChevronLeftIcon: script$5,
    ChevronUpIcon: script$3
  },
  directives: {
    ripple: Ripple
  }
};
var _hoisted_1 = ["aria-live"];
var _hoisted_2 = ["data-p-carousel-item-active", "data-p-carousel-item-start", "data-p-carousel-item-end"];
var _hoisted_3 = ["aria-hidden", "aria-label", "aria-roledescription", "data-p-carousel-item-active", "data-p-carousel-item-start", "data-p-carousel-item-end"];
var _hoisted_4 = ["data-p-active"];
var _hoisted_5 = ["tabindex", "aria-label", "aria-current", "onClick"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Button = resolveComponent("Button");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root"),
    role: "region"
  }, _ctx.ptmi("root")), [_ctx.$slots.header ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("header")
  }, _ctx.ptm("header")), [renderSlot(_ctx.$slots, "header")], 16)) : createCommentVNode("", true), !$options.empty ? (openBlock(), createElementBlock("div", mergeProps({
    key: 1,
    "class": [_ctx.cx("contentContainer"), _ctx.containerClass]
  }, _ctx.ptm("contentContainer")), [createElementVNode("div", mergeProps({
    "class": [_ctx.cx("content"), _ctx.contentClass],
    "aria-live": $data.allowAutoplay ? "polite" : "off"
  }, _ctx.ptm("content")), [_ctx.showNavigators ? (openBlock(), createBlock(_component_Button, mergeProps({
    key: 0,
    "class": _ctx.cx("pcPrevButton"),
    disabled: $options.backwardIsDisabled,
    "aria-label": $options.ariaPrevButtonLabel,
    unstyled: _ctx.unstyled,
    onClick: $options.navBackward
  }, _ctx.prevButtonProps, {
    pt: _ctx.ptm("pcPrevButton"),
    "data-pc-group-section": "navigator"
  }), {
    icon: withCtx(function(slotProps) {
      return [renderSlot(_ctx.$slots, "previcon", {}, function() {
        return [(openBlock(), createBlock(resolveDynamicComponent($options.isVertical() ? "ChevronUpIcon" : "ChevronLeftIcon"), mergeProps({
          "class": slotProps.icon
        }, _ctx.ptm("pcPrevButton")["icon"]), null, 16, ["class"]))];
      })];
    }),
    _: 3
  }, 16, ["class", "disabled", "aria-label", "unstyled", "onClick", "pt"])) : createCommentVNode("", true), createElementVNode("div", mergeProps({
    "class": _ctx.cx("viewport"),
    style: [{
      height: $options.isVertical() ? _ctx.verticalViewPortHeight : "auto"
    }],
    onTouchend: _cache[1] || (_cache[1] = function() {
      return $options.onTouchEnd && $options.onTouchEnd.apply($options, arguments);
    }),
    onTouchstart: _cache[2] || (_cache[2] = function() {
      return $options.onTouchStart && $options.onTouchStart.apply($options, arguments);
    }),
    onTouchmove: _cache[3] || (_cache[3] = function() {
      return $options.onTouchMove && $options.onTouchMove.apply($options, arguments);
    })
  }, _ctx.ptm("viewport")), [createElementVNode("div", mergeProps({
    ref: "itemsContainer",
    "class": _ctx.cx("itemList"),
    onTransitionend: _cache[0] || (_cache[0] = function() {
      return $options.onTransitionEnd && $options.onTransitionEnd.apply($options, arguments);
    })
  }, _ctx.ptm("itemList")), [$options.isCircular() ? (openBlock(true), createElementBlock(Fragment, {
    key: 0
  }, renderList(_ctx.value.slice(-1 * $data.d_numVisible), function(item2, index) {
    return openBlock(), createElementBlock("div", mergeProps({
      key: index + "_scloned",
      "class": _ctx.cx("itemClone", {
        index,
        value: _ctx.value,
        totalShiftedItems: $data.totalShiftedItems,
        d_numVisible: $data.d_numVisible
      }),
      ref_for: true
    }, _ctx.ptm("itemClone"), {
      "data-p-carousel-item-active": $data.totalShiftedItems * -1 === _ctx.value.length + $data.d_numVisible,
      "data-p-carousel-item-start": index === 0,
      "data-p-carousel-item-end": _ctx.value.slice(-1 * $data.d_numVisible).length - 1 === index
    }), [renderSlot(_ctx.$slots, "item", {
      data: item2,
      index
    })], 16, _hoisted_2);
  }), 128)) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.value, function(item2, index) {
    return openBlock(), createElementBlock("div", mergeProps({
      key: index,
      "class": _ctx.cx("item", {
        index
      }),
      role: "group",
      "aria-hidden": $options.firstIndex() > index || $options.lastIndex() < index ? true : void 0,
      "aria-label": $options.ariaSlideNumber(index),
      "aria-roledescription": $options.ariaSlideLabel,
      ref_for: true
    }, _ctx.ptm("item"), {
      "data-p-carousel-item-active": $options.firstIndex() <= index && $options.lastIndex() >= index,
      "data-p-carousel-item-start": $options.firstIndex() === index,
      "data-p-carousel-item-end": $options.lastIndex() === index
    }), [renderSlot(_ctx.$slots, "item", {
      data: item2,
      index
    })], 16, _hoisted_3);
  }), 128)), $options.isCircular() ? (openBlock(true), createElementBlock(Fragment, {
    key: 1
  }, renderList(_ctx.value.slice(0, $data.d_numVisible), function(item2, index) {
    return openBlock(), createElementBlock("div", mergeProps({
      key: index + "_fcloned",
      "class": _ctx.cx("itemClone", {
        index,
        value: _ctx.value,
        totalShiftedItems: $data.totalShiftedItems,
        d_numVisible: $data.d_numVisible
      }),
      ref_for: true
    }, _ctx.ptm("itemClone")), [renderSlot(_ctx.$slots, "item", {
      data: item2,
      index
    })], 16);
  }), 128)) : createCommentVNode("", true)], 16)], 16), _ctx.showNavigators ? (openBlock(), createBlock(_component_Button, mergeProps({
    key: 1,
    "class": _ctx.cx("pcNextButton"),
    disabled: $options.forwardIsDisabled,
    "aria-label": $options.ariaNextButtonLabel,
    unstyled: _ctx.unstyled,
    onClick: $options.navForward
  }, _ctx.nextButtonProps, {
    pt: _ctx.ptm("pcNextButton"),
    "data-pc-group-section": "navigator"
  }), {
    icon: withCtx(function(slotProps) {
      return [renderSlot(_ctx.$slots, "nexticon", {}, function() {
        return [(openBlock(), createBlock(resolveDynamicComponent($options.isVertical() ? "ChevronDownIcon" : "ChevronRightIcon"), mergeProps({
          "class": slotProps["class"]
        }, _ctx.ptm("pcNextButton")["icon"]), null, 16, ["class"]))];
      })];
    }),
    _: 3
  }, 16, ["class", "disabled", "aria-label", "unstyled", "onClick", "pt"])) : createCommentVNode("", true)], 16, _hoisted_1), $options.totalIndicators >= 0 && _ctx.showIndicators ? (openBlock(), createElementBlock("ul", mergeProps({
    key: 0,
    ref: "indicatorContent",
    "class": [_ctx.cx("indicatorList"), _ctx.indicatorsContentClass],
    onKeydown: _cache[4] || (_cache[4] = function() {
      return $options.onIndicatorKeydown && $options.onIndicatorKeydown.apply($options, arguments);
    })
  }, _ctx.ptm("indicatorList")), [(openBlock(true), createElementBlock(Fragment, null, renderList($options.totalIndicators, function(indicator2, i) {
    return openBlock(), createElementBlock("li", mergeProps({
      key: "p-carousel-indicator-" + i.toString(),
      "class": _ctx.cx("indicator", {
        index: i
      }),
      ref_for: true
    }, _ctx.ptm("indicator", $options.getIndicatorPTOptions(i)), {
      "data-p-active": $data.d_page === i
    }), [createElementVNode("button", mergeProps({
      "class": _ctx.cx("indicatorButton"),
      type: "button",
      tabindex: $data.d_page === i ? "0" : "-1",
      "aria-label": $options.ariaPageLabel(i + 1),
      "aria-current": $data.d_page === i ? "page" : void 0,
      onClick: function onClick($event) {
        return $options.onIndicatorClick($event, i);
      },
      ref_for: true
    }, _ctx.ptm("indicatorButton", $options.getIndicatorPTOptions(i))), null, 16, _hoisted_5)], 16, _hoisted_4);
  }), 128))], 16)) : createCommentVNode("", true)], 16)) : renderSlot(_ctx.$slots, "empty", {
    key: 2
  }, function() {
    return [createTextVNode(toDisplayString($options.emptyMessageText), 1)];
  }), _ctx.$slots.footer ? (openBlock(), createElementBlock("div", mergeProps({
    key: 3,
    "class": _ctx.cx("footer")
  }, _ctx.ptm("footer")), [renderSlot(_ctx.$slots, "footer")], 16)) : createCommentVNode("", true)], 16);
}
script$2.render = render$1;
var theme3 = function theme4(_ref) {
  var dt = _ref.dt;
  return "\n.p-card {\n    background: ".concat(dt("card.background"), ";\n    color: ").concat(dt("card.color"), ";\n    box-shadow: ").concat(dt("card.shadow"), ";\n    border-radius: ").concat(dt("card.border.radius"), ";\n    display: flex;\n    flex-direction: column;\n}\n\n.p-card-caption {\n    display: flex;\n    flex-direction: column;\n    gap: ").concat(dt("card.caption.gap"), ";\n}\n\n.p-card-body {\n    padding: ").concat(dt("card.body.padding"), ";\n    display: flex;\n    flex-direction: column;\n    gap: ").concat(dt("card.body.gap"), ";\n}\n\n.p-card-title {\n    font-size: ").concat(dt("card.title.font.size"), ";\n    font-weight: ").concat(dt("card.title.font.weight"), ";\n}\n\n.p-card-subtitle {\n    color: ").concat(dt("card.subtitle.color"), ";\n}\n");
};
var classes = {
  root: "p-card p-component",
  header: "p-card-header",
  body: "p-card-body",
  caption: "p-card-caption",
  title: "p-card-title",
  subtitle: "p-card-subtitle",
  content: "p-card-content",
  footer: "p-card-footer"
};
var CardStyle = BaseStyle.extend({
  name: "card",
  theme: theme3,
  classes
});
var script$1 = {
  name: "BaseCard",
  "extends": script$5$1,
  style: CardStyle,
  provide: function provide3() {
    return {
      $pcCard: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "Card",
  "extends": script$1,
  inheritAttrs: false
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [_ctx.$slots.header ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("header")
  }, _ctx.ptm("header")), [renderSlot(_ctx.$slots, "header")], 16)) : createCommentVNode("", true), createElementVNode("div", mergeProps({
    "class": _ctx.cx("body")
  }, _ctx.ptm("body")), [_ctx.$slots.title || _ctx.$slots.subtitle ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("caption")
  }, _ctx.ptm("caption")), [_ctx.$slots.title ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("title")
  }, _ctx.ptm("title")), [renderSlot(_ctx.$slots, "title")], 16)) : createCommentVNode("", true), _ctx.$slots.subtitle ? (openBlock(), createElementBlock("div", mergeProps({
    key: 1,
    "class": _ctx.cx("subtitle")
  }, _ctx.ptm("subtitle")), [renderSlot(_ctx.$slots, "subtitle")], 16)) : createCommentVNode("", true)], 16)) : createCommentVNode("", true), createElementVNode("div", mergeProps({
    "class": _ctx.cx("content")
  }, _ctx.ptm("content")), [renderSlot(_ctx.$slots, "content")], 16), _ctx.$slots.footer ? (openBlock(), createElementBlock("div", mergeProps({
    key: 1,
    "class": _ctx.cx("footer")
  }, _ctx.ptm("footer")), [renderSlot(_ctx.$slots, "footer")], 16)) : createCommentVNode("", true)], 16)], 16);
}
script.render = render;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const products = ref([
      {
        id: "1000",
        code: "f230fh0g3",
        name: "Bamboo Watch",
        description: "Product Description",
        image: "bamboo-watch.jpg",
        price: 65,
        category: "Accessories",
        quantity: 24,
        inventoryStatus: "INSTOCK",
        rating: 5
      },
      {
        id: "1000",
        code: "f230fh0g3",
        name: "Bamboo Watch",
        description: "Product Description",
        image: "bamboo-watch.jpg",
        price: 65,
        category: "Accessories",
        quantity: 24,
        inventoryStatus: "INSTOCK",
        rating: 5
      },
      {
        id: "1000",
        code: "f230fh0g3",
        name: "Bamboo Watch",
        description: "Product Description",
        image: "bamboo-watch.jpg",
        price: 65,
        category: "Accessories",
        quantity: 24,
        inventoryStatus: "INSTOCK",
        rating: 5
      },
      {
        id: "1000",
        code: "f230fh0g3",
        name: "Bamboo Watch",
        description: "Product Description",
        image: "bamboo-watch.jpg",
        price: 65,
        category: "Accessories",
        quantity: 24,
        inventoryStatus: "INSTOCK",
        rating: 5
      },
      {
        id: "1000",
        code: "f230fh0g3",
        name: "Bamboo Watch",
        description: "Product Description",
        image: "bamboo-watch.jpg",
        price: 65,
        category: "Accessories",
        quantity: 24,
        inventoryStatus: "INSTOCK",
        rating: 5
      },
      {
        id: "1000",
        code: "f230fh0g3",
        name: "Bamboo Watch",
        description: "Product Description",
        image: "bamboo-watch.jpg",
        price: 65,
        category: "Accessories",
        quantity: 24,
        inventoryStatus: "INSTOCK",
        rating: 5
      },
      {
        id: "1000",
        code: "f230fh0g3",
        name: "Bamboo Watch",
        description: "Product Description",
        image: "bamboo-watch.jpg",
        price: 65,
        category: "Accessories",
        quantity: 24,
        inventoryStatus: "INSTOCK",
        rating: 5
      },
      {
        id: "1000",
        code: "f230fh0g3",
        name: "Bamboo Watch",
        description: "Product Description",
        image: "bamboo-watch.jpg",
        price: 65,
        category: "Accessories",
        quantity: 24,
        inventoryStatus: "INSTOCK",
        rating: 5
      }
    ]);
    const responsiveOptions = ref([
      {
        breakpoint: "1400px",
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: "1199px",
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: "767px",
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: "575px",
        numVisible: 1,
        numScroll: 1
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = script;
      const _component_Carousel = script$2;
      const _component_Button = script$f;
      const _component_Image = script$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid mx-3 fadein animation-duration-400 animation-iteration-1 mb-5" }, _attrs))}><div class="col-12 sm:col-12 md:col-6 lg:col-6 xl:col-6"><p class="firstBannerTitle"> Innovaci\xF3n y Tecnolog\xEDa </p><p class="firstBannerSubTitle"> &quot;En el coraz\xF3n de nuestra empresa de tecnolog\xEDa, la innovaci\xF3n es el motor que impulsa cada soluci\xF3n.&quot; </p><p class="firstBannerSubTitle2"> -imimex </p></div><div class="col-12 sm:col-12 md:col-6 lg:col-6 xl:col-6 flex align-items-center justify-content-center"><svg class="circleFondo" version="1.1" id="L1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><circle fill="none" stroke="#fff" stroke-width="6" stroke-miterlimit="15" stroke-dasharray="14.2472,14.2472" cx="50" cy="50" r="47"><animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="20s" from="0 50 50" to="360 50 50" repeatCount="indefinite"></animateTransform></circle><circle fill="none" stroke="#fff" stroke-width="1" stroke-miterlimit="10" stroke-dasharray="10,10" cx="50" cy="50" r="39"><animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="10s" from="0 50 50" to="-360 50 50" repeatCount="indefinite"></animateTransform></circle><g fill="#fff"><rect x="30" y="35" width="5" height="30"><animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.1"></animateTransform></rect><rect x="40" y="35" width="5" height="30"><animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.2"></animateTransform></rect><rect x="50" y="35" width="5" height="30"><animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.3"></animateTransform></rect><rect x="60" y="35" width="5" height="30"><animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.4"></animateTransform></rect><rect x="70" y="35" width="5" height="30"><animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.5"></animateTransform></rect></g></svg></div><div class="col-12 sm:col-12 md:col-12 lg:col-12 xl:col-12 flex" style="${ssrRenderStyle({ "height": "200px" })}"><div class="firstBannerNuestrosServicios"><p style="${ssrRenderStyle({ "font-size": "70px" })}">Nuestros Servicios</p></div><div class="fondoSoftware flex"><div class="svg-container s"><svg viewBox="0 0 250 250"><g class="follow"><path d="M99.9569211,56.3259723 C104.100149,53.9337797 108.456573,52.0980932 113.01522,50.8486977 C117.5723,49.5993023 121.651255,49.4441076 125.253653,50.4066281 L116.672485,71.7654908 C114.755282,71.2121199 112.289411,71.2528781 109.295251,71.876792 C106.297956,72.5132469 103.205036,73.7469662 100.011788,75.5904908 C97.7685195,76.8837797 95.8983453,78.2868023 94.3793186,79.8089641 C92.860292,81.331126 91.6312756,82.8360441 90.673458,84.3566383 C89.7140727,85.8772326 89.047833,87.3225809 88.6496568,88.6926834 C88.2530482,90.0737592 88.0555277,91.2698555 88.0586629,92.28254 C88.0649334,94.5712695 88.7107941,96.1341895 89.9868391,96.9524887 C91.27229,97.7754908 92.9371055,98.2206957 94.9734477,98.2771301 C97.0082223,98.3476732 99.2938166,98.1799375 101.808284,97.7754908 C104.324319,97.383585 106.870138,97.0888719 109.425364,96.9038924 C111.580845,96.7534006 113.706542,96.8161055 115.782075,97.0920072 C117.867013,97.350665 119.745026,98.0874477 121.431788,99.2678678 C123.110712,100.463964 124.479247,102.243216 125.527987,104.6213 C126.567321,107.01506 127.097177,110.269446 127.109718,114.398565 C127.136368,123.943821 124.42438,132.927868 118.965917,141.36795 C113.515292,149.790788 106.036163,156.757304 96.5379355,162.240849 C90.4618289,165.74919 85.114667,167.685204 80.4745031,168.070839 C75.8327715,168.447069 71.3916957,167.981485 67.1575461,166.659978 L77.0523822,145.498636 C79.6107428,146.417263 82.6487961,146.702571 86.166542,146.376505 C89.6842879,146.05044 93.2396568,144.838667 96.8436219,142.758431 C101.228263,140.22672 104.187935,137.699712 105.694421,135.171136 C107.210313,132.63629 107.954933,129.869435 107.947095,126.843923 C107.939257,124.359241 107.081767,122.722642 105.355815,121.923155 C103.629862,121.13464 101.532382,120.77879 99.0571055,120.87128 C96.5818289,120.97631 94.0156301,121.236536 91.3804559,121.651956 C88.7452818,122.067376 86.5004457,122.224138 84.6647592,122.08462 C82.4983043,121.95294 80.4619621,121.666065 78.5369211,121.211454 C76.6212859,120.750573 74.9345236,119.869569 73.4970133,118.533954 C72.0485297,117.215583 70.9214088,115.354815 70.1219211,112.97046 C69.3130277,110.592376 68.9038781,107.385019 68.8929047,103.34839 C68.8772285,98.2065871 69.7660707,93.2826834 71.5468904,88.5798145 C73.3386834,83.8706752 75.6822797,79.4985748 78.587085,75.4838924 C81.5044314,71.4613719 84.8324949,67.8119457 88.582249,64.5403166 C92.3320031,61.2702551 96.124083,58.5394559 99.9569211,56.3259723 Z" class="s-follow-d" stroke="#4407F4"></path><polygon class="s-follow-c" stroke="#4407F4" points="173.518882 104.346026 116.672171 71.7645502 125.253339 50.4072551 182.10005 82.9871629"></polygon><polygon class="s-follow-b2" stroke="#4407F4" points="124.002533 199.241454 67.1573893 166.659978 77.0522254 145.498636 133.897369 178.080112"></polygon><path d="M125.253182,50.4069416 C121.652352,49.4444211 117.57183,49.5996158 113.013182,50.8490113 C108.456102,52.0984068 104.099678,53.9340932 99.9564508,56.3262859 C96.1236127,58.5382018 92.3315328,61.2705686 88.5817787,64.5406301 C84.8320246,67.8122592 81.5039611,71.4616855 78.5866148,75.4826383 C75.6818094,79.4988883 73.3382131,83.8709887 71.5464201,88.5801281 C69.7656004,93.2829969 68.8783258,98.2069006 68.8924344,103.347136 C68.9034078,107.385333 69.3125574,110.59269 70.1230184,112.970774 C70.9209385,115.355128 72.049627,117.215897 73.496543,118.5327 C74.9340533,119.869882 76.6208156,120.750886 78.5364508,121.211767 C80.4630594,121.666378 82.4994016,121.953253 84.6642889,122.084933 C86.4999754,122.224452 88.7448115,122.06769 91.3799857,121.652269 C94.0151598,121.236849 96.5813586,120.976624 99.0582029,120.871593 C101.53348,120.779103 103.629391,121.134954 105.356912,121.923468 C107.082865,122.722956 107.938787,124.359554 107.946625,126.844237 C107.954463,129.868181 107.21141,132.636603 105.693951,135.17145 C104.187465,137.700026 101.227793,140.227034 96.8431516,142.758745 C93.2407541,144.838981 89.6853852,146.050753 86.1660717,146.376819 C82.6483258,146.702884 79.6102725,146.417577 77.0519119,145.49895 L133.898623,178.080425 C136.456984,178.999052 139.495037,179.28436 143.012783,178.958294 C146.530529,178.632228 150.085898,177.418888 153.689863,175.338653 C158.074504,172.808509 161.034176,170.281501 162.540662,167.752925 C164.056553,165.218079 164.801174,162.451224 164.793336,159.425712 C164.785498,156.94103 163.928008,155.305999 162.202055,154.504944 C160.476102,153.716429 158.380191,153.359011 155.903346,153.453069 C153.42807,153.558099 150.861871,153.818325 148.226697,154.233745 C145.591523,154.649165 143.346686,154.805927 141.511,154.666409 C139.344545,154.534728 137.308203,154.246286 135.383162,153.791675 C133.465959,153.332362 131.780764,152.451358 130.343254,151.115743 C128.89477,149.795804 127.76765,147.936603 126.968162,145.552249 C126.159268,143.174165 125.748551,139.966808 125.739145,135.930179 C125.723469,130.788376 126.612311,125.864472 128.393131,121.161603 C130.184924,116.452464 132.52852,112.080364 135.433326,108.064114 C138.349105,104.043161 141.677168,100.393735 145.42849,97.1221055 C149.178244,93.8504764 152.970324,91.1212449 156.803162,88.9077613 C160.947957,86.5155686 165.302814,84.6798822 169.859893,83.4304867 C174.416973,82.1826588 178.497496,82.0258965 182.099893,82.988417 L125.253182,50.4069416 Z" class="s-follow-b1" stroke="#4407F4"></path><path d="M156.803162,88.9069775 C160.947957,86.5147848 165.302814,84.6790984 169.859893,83.4312705 C174.416973,82.181875 178.497496,82.0266803 182.099893,82.9876332 L173.518725,104.346496 C171.601523,103.794693 169.135652,103.835451 166.139924,104.459365 C163.144197,105.094252 160.049709,106.327971 156.858029,108.171496 C154.61476,109.464785 152.744586,110.867807 151.225559,112.389969 C149.706533,113.913699 148.477516,115.417049 147.519699,116.937643 C146.560314,118.459805 145.894074,119.903586 145.495898,121.273689 C145.099289,122.654764 144.901768,123.852428 144.904904,124.863545 C144.911174,127.152275 145.557035,128.715195 146.83308,129.533494 C148.118531,130.358064 149.783346,130.801701 151.819689,130.859703 C153.854463,130.928678 156.140057,130.760943 158.656092,130.356496 C161.170559,129.96459 163.714811,129.669877 166.271605,129.484898 C168.427086,129.334406 170.552783,129.398678 172.628316,129.673012 C174.714822,129.93167 176.591266,130.668453 178.278029,131.848873 C179.956953,133.046537 181.325488,134.825789 182.374227,137.202305 C183.413561,139.597633 183.943418,142.850451 183.954391,146.97957 C183.982609,156.524826 181.270621,165.508873 175.81059,173.948955 C170.359965,182.371793 162.882404,189.338309 153.384176,194.821855 C147.30807,198.330195 141.960908,200.266209 137.320744,200.653412 C132.679012,201.028074 128.236369,200.564057 124.002219,199.240984 L133.898623,178.081209 C136.456984,178.999836 139.495037,179.283576 143.012783,178.95751 C146.530529,178.631445 150.085898,177.419672 153.689863,175.339436 C158.074504,172.807725 161.032609,170.282285 162.540662,167.752141 C164.056553,165.218863 164.801174,162.450441 164.793336,159.424928 C164.785498,156.941814 163.928008,155.305215 162.202055,154.50416 C160.476102,153.715645 158.380191,153.359795 155.903346,153.452285 C153.42807,153.557316 150.861871,153.817541 148.226697,154.232961 C145.591523,154.649949 143.346686,154.805143 141.511,154.665625 C139.344545,154.533945 137.308203,154.24707 135.383162,153.792459 C133.465959,153.331578 131.780764,152.450574 130.343254,151.114959 C128.89477,149.796588 127.76765,147.93582 126.968162,145.553033 C126.159268,143.173381 125.750119,139.966025 125.739145,135.929395 C125.723469,130.78916 126.612311,125.863689 128.393131,121.16082 C130.184924,116.45168 132.52852,112.081148 135.433326,108.064898 C138.350672,104.042377 141.677168,100.392951 145.42849,97.1213217 C149.178244,93.8512602 152.970324,91.1204611 156.803162,88.9069775 Z" class="s-follow-a" stroke="#4407F4"></path></g><g class="start"><path d="M99.9569211,56.3259723 C104.100149,53.9337797 108.456573,52.0980932 113.01522,50.8486977 C117.5723,49.5993023 121.651255,49.4441076 125.253653,50.4066281 L116.672485,71.7654908 C114.755282,71.2121199 112.289411,71.2528781 109.295251,71.876792 C106.297956,72.5132469 103.205036,73.7469662 100.011788,75.5904908 C97.7685195,76.8837797 95.8983453,78.2868023 94.3793186,79.8089641 C92.860292,81.331126 91.6312756,82.8360441 90.673458,84.3566383 C89.7140727,85.8772326 89.047833,87.3225809 88.6496568,88.6926834 C88.2530482,90.0737592 88.0555277,91.2698555 88.0586629,92.28254 C88.0649334,94.5712695 88.7107941,96.1341895 89.9868391,96.9524887 C91.27229,97.7754908 92.9371055,98.2206957 94.9734477,98.2771301 C97.0082223,98.3476732 99.2938166,98.1799375 101.808284,97.7754908 C104.324319,97.383585 106.870138,97.0888719 109.425364,96.9038924 C111.580845,96.7534006 113.706542,96.8161055 115.782075,97.0920072 C117.867013,97.350665 119.745026,98.0874477 121.431788,99.2678678 C123.110712,100.463964 124.479247,102.243216 125.527987,104.6213 C126.567321,107.01506 127.097177,110.269446 127.109718,114.398565 C127.136368,123.943821 124.42438,132.927868 118.965917,141.36795 C113.515292,149.790788 106.036163,156.757304 96.5379355,162.240849 C90.4618289,165.74919 85.114667,167.685204 80.4745031,168.070839 C75.8327715,168.447069 71.3916957,167.981485 67.1575461,166.659978 L77.0523822,145.498636 C79.6107428,146.417263 82.6487961,146.702571 86.166542,146.376505 C89.6842879,146.05044 93.2396568,144.838667 96.8436219,142.758431 C101.228263,140.22672 104.187935,137.699712 105.694421,135.171136 C107.210313,132.63629 107.954933,129.869435 107.947095,126.843923 C107.939257,124.359241 107.081767,122.722642 105.355815,121.923155 C103.629862,121.13464 101.532382,120.77879 99.0571055,120.87128 C96.5818289,120.97631 94.0156301,121.236536 91.3804559,121.651956 C88.7452818,122.067376 86.5004457,122.224138 84.6647592,122.08462 C82.4983043,121.95294 80.4619621,121.666065 78.5369211,121.211454 C76.6212859,120.750573 74.9345236,119.869569 73.4970133,118.533954 C72.0485297,117.215583 70.9214088,115.354815 70.1219211,112.97046 C69.3130277,110.592376 68.9038781,107.385019 68.8929047,103.34839 C68.8772285,98.2065871 69.7660707,93.2826834 71.5468904,88.5798145 C73.3386834,83.8706752 75.6822797,79.4985748 78.587085,75.4838924 C81.5044314,71.4613719 84.8324949,67.8119457 88.582249,64.5403166 C92.3320031,61.2702551 96.124083,58.5394559 99.9569211,56.3259723 Z" class="s-start-d" stroke="#8A9EA3"></path><polygon class="s-start-c" stroke="#8A9EA3" points="173.518882 104.346026 116.672171 71.7645502 125.253339 50.4072551 182.10005 82.9871629"></polygon><polygon class="s-start-b2" stroke="#055c9f" points="124.002533 199.241454 67.1573893 166.659978 77.0522254 145.498636 133.897369 178.080112"></polygon><path d="M125.253182,50.4069416 C121.652352,49.4444211 117.57183,49.5996158 113.013182,50.8490113 C108.456102,52.0984068 104.099678,53.9340932 99.9564508,56.3262859 C96.1236127,58.5382018 92.3315328,61.2705686 88.5817787,64.5406301 C84.8320246,67.8122592 81.5039611,71.4616855 78.5866148,75.4826383 C75.6818094,79.4988883 73.3382131,83.8709887 71.5464201,88.5801281 C69.7656004,93.2829969 68.8783258,98.2069006 68.8924344,103.347136 C68.9034078,107.385333 69.3125574,110.59269 70.1230184,112.970774 C70.9209385,115.355128 72.049627,117.215897 73.496543,118.5327 C74.9340533,119.869882 76.6208156,120.750886 78.5364508,121.211767 C80.4630594,121.666378 82.4994016,121.953253 84.6642889,122.084933 C86.4999754,122.224452 88.7448115,122.06769 91.3799857,121.652269 C94.0151598,121.236849 96.5813586,120.976624 99.0582029,120.871593 C101.53348,120.779103 103.629391,121.134954 105.356912,121.923468 C107.082865,122.722956 107.938787,124.359554 107.946625,126.844237 C107.954463,129.868181 107.21141,132.636603 105.693951,135.17145 C104.187465,137.700026 101.227793,140.227034 96.8431516,142.758745 C93.2407541,144.838981 89.6853852,146.050753 86.1660717,146.376819 C82.6483258,146.702884 79.6102725,146.417577 77.0519119,145.49895 L133.898623,178.080425 C136.456984,178.999052 139.495037,179.28436 143.012783,178.958294 C146.530529,178.632228 150.085898,177.418888 153.689863,175.338653 C158.074504,172.808509 161.034176,170.281501 162.540662,167.752925 C164.056553,165.218079 164.801174,162.451224 164.793336,159.425712 C164.785498,156.94103 163.928008,155.305999 162.202055,154.504944 C160.476102,153.716429 158.380191,153.359011 155.903346,153.453069 C153.42807,153.558099 150.861871,153.818325 148.226697,154.233745 C145.591523,154.649165 143.346686,154.805927 141.511,154.666409 C139.344545,154.534728 137.308203,154.246286 135.383162,153.791675 C133.465959,153.332362 131.780764,152.451358 130.343254,151.115743 C128.89477,149.795804 127.76765,147.936603 126.968162,145.552249 C126.159268,143.174165 125.748551,139.966808 125.739145,135.930179 C125.723469,130.788376 126.612311,125.864472 128.393131,121.161603 C130.184924,116.452464 132.52852,112.080364 135.433326,108.064114 C138.349105,104.043161 141.677168,100.393735 145.42849,97.1221055 C149.178244,93.8504764 152.970324,91.1212449 156.803162,88.9077613 C160.947957,86.5155686 165.302814,84.6798822 169.859893,83.4304867 C174.416973,82.1826588 178.497496,82.0258965 182.099893,82.988417 L125.253182,50.4069416 Z" class="s-start-b1" stroke="#055c9f"></path><path d="M156.803162,88.9069775 C160.947957,86.5147848 165.302814,84.6790984 169.859893,83.4312705 C174.416973,82.181875 178.497496,82.0266803 182.099893,82.9876332 L173.518725,104.346496 C171.601523,103.794693 169.135652,103.835451 166.139924,104.459365 C163.144197,105.094252 160.049709,106.327971 156.858029,108.171496 C154.61476,109.464785 152.744586,110.867807 151.225559,112.389969 C149.706533,113.913699 148.477516,115.417049 147.519699,116.937643 C146.560314,118.459805 145.894074,119.903586 145.495898,121.273689 C145.099289,122.654764 144.901768,123.852428 144.904904,124.863545 C144.911174,127.152275 145.557035,128.715195 146.83308,129.533494 C148.118531,130.358064 149.783346,130.801701 151.819689,130.859703 C153.854463,130.928678 156.140057,130.760943 158.656092,130.356496 C161.170559,129.96459 163.714811,129.669877 166.271605,129.484898 C168.427086,129.334406 170.552783,129.398678 172.628316,129.673012 C174.714822,129.93167 176.591266,130.668453 178.278029,131.848873 C179.956953,133.046537 181.325488,134.825789 182.374227,137.202305 C183.413561,139.597633 183.943418,142.850451 183.954391,146.97957 C183.982609,156.524826 181.270621,165.508873 175.81059,173.948955 C170.359965,182.371793 162.882404,189.338309 153.384176,194.821855 C147.30807,198.330195 141.960908,200.266209 137.320744,200.653412 C132.679012,201.028074 128.236369,200.564057 124.002219,199.240984 L133.898623,178.081209 C136.456984,178.999836 139.495037,179.283576 143.012783,178.95751 C146.530529,178.631445 150.085898,177.419672 153.689863,175.339436 C158.074504,172.807725 161.032609,170.282285 162.540662,167.752141 C164.056553,165.218863 164.801174,162.450441 164.793336,159.424928 C164.785498,156.941814 163.928008,155.305215 162.202055,154.50416 C160.476102,153.715645 158.380191,153.359795 155.903346,153.452285 C153.42807,153.557316 150.861871,153.817541 148.226697,154.232961 C145.591523,154.649949 143.346686,154.805143 141.511,154.665625 C139.344545,154.533945 137.308203,154.24707 135.383162,153.792459 C133.465959,153.331578 131.780764,152.450574 130.343254,151.114959 C128.89477,149.796588 127.76765,147.93582 126.968162,145.553033 C126.159268,143.173381 125.750119,139.966025 125.739145,135.929395 C125.723469,130.78916 126.612311,125.863689 128.393131,121.16082 C130.184924,116.45168 132.52852,112.081148 135.433326,108.064898 C138.350672,104.042377 141.677168,100.392951 145.42849,97.1213217 C149.178244,93.8512602 152.970324,91.1204611 156.803162,88.9069775 Z" class="s-start-a" stroke="#055c9f"></path></g></svg></div><div class="svg-container o"><svg viewBox="0 0 250 250"><g class="follow"><path d="M141.20571,80.0760491 C142.62293,87.2443491 142.950215,95.199655 142.195176,103.9237 C141.459927,112.434629 139.721511,120.600006 136.972318,128.407653 C134.223125,136.2016 130.674748,143.161351 126.345454,149.270161 C122.008549,155.378972 116.986629,160.41307 111.310139,164.355711 C105.622994,168.313574 99.4715603,170.744616 92.8801951,171.670147 C86.2796964,172.597201 80.4235804,171.828462 75.3331589,169.333485 C70.2503486,166.850687 66.0276126,163.063316 62.6953959,157.977461 C59.3738349,152.891606 56.9747607,146.769096 55.5255737,139.617541 C54.0702977,132.453808 53.7003896,124.664427 54.4265054,116.258534 C55.1632769,107.747605 56.9047369,99.6476848 59.6402296,92.0135748 C62.3757223,84.3794647 65.9043099,77.5399719 70.2320816,71.5377195 C74.5613755,65.5354671 79.5665507,60.5820485 85.2476073,56.6911641 C90.9286639,52.8002797 97.0679193,50.3981609 103.668418,49.4711075 C110.259783,48.544054 116.134166,49.2047128 121.283956,51.4683063 C126.424612,53.7334221 130.685404,57.2787546 134.040455,62.0966925 C137.397027,66.9146303 139.785446,72.9199272 141.20571,80.0760491 Z M118.733113,80.6558762 C116.875961,77.4697959 114.516466,75.0646327 111.668326,73.4784427 C108.811053,71.8785524 105.483403,71.3472853 101.732566,71.8739857 C98.0395748,72.3930747 94.5612216,73.933597 91.2975063,76.4985971 C88.0627139,79.0590304 85.1795625,82.2664222 82.6754526,86.117728 C80.1743873,89.9568557 78.1147759,94.258749 76.5133634,98.9838293 C74.8997728,103.724132 73.8829063,108.590782 73.4505858,113.585302 C72.9817312,119.006053 73.2024582,124.014272 74.1219004,128.622139 C75.0428648,133.204127 76.4585622,137.110234 78.3887819,140.338937 C80.3190015,143.553941 82.6967642,145.96976 85.5053251,147.574217 C88.3230196,149.178674 91.4299425,149.741908 94.8169604,149.266964 C98.6545659,148.726564 102.231866,147.144941 105.539726,144.509917 C108.824753,141.902294 111.717038,138.602044 114.190703,134.648747 C116.664368,130.696973 118.676789,126.268732 120.217311,121.394471 C121.756311,116.52021 122.741211,111.578969 123.173531,106.59815 C123.621074,101.402693 123.461237,96.5710547 122.690976,92.1123691 C121.908537,87.656728 120.590264,83.8419564 118.733113,80.6558762 Z" class="o-follow-d" stroke="#DD07F4"></path><path d="M85.5053251,147.574217 C82.6967642,145.96976 80.3190015,143.553941 78.3887819,140.338937 C76.4585622,137.110234 75.0428648,133.204127 74.1219004,128.622139 C73.2024582,124.014272 72.9817312,119.006053 73.4505858,113.585302 C73.8829063,108.590782 74.8997728,103.724132 76.5133634,98.9838293 C78.1147759,94.258749 80.1743873,89.9568557 82.6754526,86.117728 C85.1795625,82.2664222 88.0627139,79.0590304 91.2975063,76.4985971 C94.5612216,73.933597 98.0395748,72.3930747 101.732566,71.8739857 C103.409255,71.6385415 105.001381,71.6145051 106.504728,71.8028283 L107.061534,71.8829529 C108.709628,72.1512881 110.247161,72.682681 111.668326,73.4784427 C113.09757,74.2744194 165.723314,103.283048 166.470276,103.701298 C169.316893,105.287488 171.677911,107.692652 173.535062,110.878732 C175.392214,114.064812 176.710487,117.879584 177.491404,122.335225 C178.263187,126.79391 178.423024,131.625548 177.973959,136.821006 C177.543161,141.801825 176.556739,146.743065 175.017739,151.617327 C173.478739,156.491588 171.466318,160.919828 168.992653,164.871603 C166.518988,168.8249 163.626703,172.126671 160.340154,174.732772 C157.032293,177.369319 153.456516,178.949419 149.61891,179.48982 C147.981466,179.71943 146.409485,179.706396 144.904001,179.450546 L142.902491,178.954468 C140.215246,178.445914 86.5913947,148.192648 85.5053251,147.574217 Z" class="o-follow-c" stroke="#DD07F4"></path><path d="M176.086667,81.6919231 L121.283956,51.4683063 C121.283956,51.4683063 110.259783,48.544054 103.668418,49.4711075 C97.0679193,50.3981609 90.9286639,52.8002797 85.2476073,56.6911641 C79.5665507,60.5820485 74.5613755,65.5354671 70.2320816,71.5377195 C65.9043099,77.5399719 62.3757223,84.3794647 59.6402296,92.0135748 C56.9047369,99.6476848 55.1632769,107.747605 54.4265054,116.258534 C53.7003896,124.664427 54.0702977,132.453808 55.5255737,139.617541 C56.9747607,146.769096 59.3738349,152.891606 62.6953959,157.977461 C66.0276126,163.063316 75.3331589,169.333485 75.3331589,169.333485 L127.475432,198.090673 C123.561779,195.669395 120.230966,192.370904 117.498107,188.201078 C114.175024,183.115223 111.775949,176.992713 110.328285,169.841157 C108.871486,162.677424 108.503101,154.886522 109.229216,146.482151 C109.964466,137.971222 111.707448,129.869779 114.441418,122.235669 C117.176911,114.601559 120.705499,107.763589 125.03327,101.761336 C129.362564,95.7575615 134.36774,90.804143 140.048796,86.9147808 C145.729853,83.0238964 151.87063,80.6202554 158.471129,79.6932019 C165.060972,78.7676708 170.936877,79.4283295 176.086667,81.6919231 L176.086667,81.6919231 Z" class="o-follow-b" stroke="#4407F4"></path><path d="M196.006899,110.299666 C197.425641,117.467966 197.751403,125.423272 196.997887,134.147317 C196.262638,142.658246 194.5227,150.823623 191.773507,158.63127 C189.024314,166.425217 185.475937,173.384968 181.148165,179.492256 C176.809738,185.602588 171.787818,190.636686 166.111328,194.579327 C160.424183,198.537191 154.272749,200.968233 147.682906,201.893764 C141.082407,202.820817 135.226291,202.050556 130.134348,199.557102 C125.051537,197.074304 120.830324,193.28541 117.498107,188.201078 C114.175024,183.115223 111.775949,176.992713 110.328285,169.841157 C108.871486,162.677424 108.503101,154.886522 109.229216,146.482151 C109.964466,137.971222 111.707448,129.869779 114.441418,122.235669 C117.176911,114.601559 120.705499,107.763589 125.03327,101.761336 C129.362564,95.7575615 134.36774,90.804143 140.048796,86.9147808 C145.729853,83.0238964 151.87063,80.6202554 158.471129,79.6932019 C165.060972,78.7676708 170.936877,79.4283295 176.086667,81.6919231 C181.2258,83.9555166 185.486593,87.5023713 188.841643,92.3187869 C192.198216,97.138247 194.588157,103.143544 196.006899,110.299666 Z M173.535062,110.878732 C171.677911,107.692652 169.316893,105.287488 166.470276,103.701298 C163.613003,102.101408 160.285353,101.570141 156.534516,102.096841 C152.841525,102.61593 149.363171,104.157975 146.099456,106.721453 C142.864664,109.281886 139.981512,112.489278 137.477403,116.340584 C134.974815,120.179711 132.916726,124.483127 131.315313,129.208207 C129.701723,133.946988 128.684856,138.813638 128.252536,143.808157 C127.783681,149.228908 128.004408,154.237128 128.92385,158.844994 C129.844815,163.426983 131.260512,167.33309 133.190732,170.561793 C135.120951,173.776796 137.498714,176.192615 140.307275,177.798595 C143.124969,179.401529 146.231892,179.964764 149.61891,179.48982 C153.456516,178.949419 157.032293,177.369319 160.340154,174.732772 C163.626703,172.126671 166.518988,168.8249 168.992653,164.871603 C171.466318,160.919828 173.478739,156.491588 175.017739,151.617327 C176.556739,146.743065 177.543161,141.801825 177.973959,136.821006 C178.423024,131.625548 178.263187,126.79391 177.491404,122.335225 C176.710487,117.879584 175.392214,114.064812 173.535062,110.878732 Z" class="o-follow-a" stroke="#4407F4"></path></g><g class="start"><path d="M141.20571,80.0760491 C142.62293,87.2443491 142.950215,95.199655 142.195176,103.9237 C141.459927,112.434629 139.721511,120.600006 136.972318,128.407653 C134.223125,136.2016 130.674748,143.161351 126.345454,149.270161 C122.008549,155.378972 116.986629,160.41307 111.310139,164.355711 C105.622994,168.313574 99.4715603,170.744616 92.8801951,171.670147 C86.2796964,172.597201 80.4235804,171.828462 75.3331589,169.333485 C70.2503486,166.850687 66.0276126,163.063316 62.6953959,157.977461 C59.3738349,152.891606 56.9747607,146.769096 55.5255737,139.617541 C54.0702977,132.453808 53.7003896,124.664427 54.4265054,116.258534 C55.1632769,107.747605 56.9047369,99.6476848 59.6402296,92.0135748 C62.3757223,84.3794647 65.9043099,77.5399719 70.2320816,71.5377195 C74.5613755,65.5354671 79.5665507,60.5820485 85.2476073,56.6911641 C90.9286639,52.8002797 97.0679193,50.3981609 103.668418,49.4711075 C110.259783,48.544054 116.134166,49.2047128 121.283956,51.4683063 C126.424612,53.7334221 130.685404,57.2787546 134.040455,62.0966925 C137.397027,66.9146303 139.785446,72.9199272 141.20571,80.0760491 Z M118.733113,80.6558762 C116.875961,77.4697959 114.516466,75.0646327 111.668326,73.4784427 C108.811053,71.8785524 105.483403,71.3472853 101.732566,71.8739857 C98.0395748,72.3930747 94.5612216,73.933597 91.2975063,76.4985971 C88.0627139,79.0590304 85.1795625,82.2664222 82.6754526,86.117728 C80.1743873,89.9568557 78.1147759,94.258749 76.5133634,98.9838293 C74.8997728,103.724132 73.8829063,108.590782 73.4505858,113.585302 C72.9817312,119.006053 73.2024582,124.014272 74.1219004,128.622139 C75.0428648,133.204127 76.4585622,137.110234 78.3887819,140.338937 C80.3190015,143.553941 82.6967642,145.96976 85.5053251,147.574217 C88.3230196,149.178674 91.4299425,149.741908 94.8169604,149.266964 C98.6545659,148.726564 102.231866,147.144941 105.539726,144.509917 C108.824753,141.902294 111.717038,138.602044 114.190703,134.648747 C116.664368,130.696973 118.676789,126.268732 120.217311,121.394471 C121.756311,116.52021 122.741211,111.578969 123.173531,106.59815 C123.621074,101.402693 123.461237,96.5710547 122.690976,92.1123691 C121.908537,87.656728 120.590264,83.8419564 118.733113,80.6558762 Z" class="o-start-d" stroke="#8A9EA3"></path><path d="M85.5053251,147.574217 C82.6967642,145.96976 80.3190015,143.553941 78.3887819,140.338937 C76.4585622,137.110234 75.0428648,133.204127 74.1219004,128.622139 C73.2024582,124.014272 72.9817312,119.006053 73.4505858,113.585302 C73.8829063,108.590782 74.8997728,103.724132 76.5133634,98.9838293 C78.1147759,94.258749 80.1743873,89.9568557 82.6754526,86.117728 C85.1795625,82.2664222 88.0627139,79.0590304 91.2975063,76.4985971 C94.5612216,73.933597 98.0395748,72.3930747 101.732566,71.8739857 C103.409255,71.6385415 105.001381,71.6145051 106.504728,71.8028283 L107.061534,71.8829529 C108.709628,72.1512881 110.247161,72.682681 111.668326,73.4784427 C113.09757,74.2744194 165.723314,103.283048 166.470276,103.701298 C169.316893,105.287488 171.677911,107.692652 173.535062,110.878732 C175.392214,114.064812 176.710487,117.879584 177.491404,122.335225 C178.263187,126.79391 178.423024,131.625548 177.973959,136.821006 C177.543161,141.801825 176.556739,146.743065 175.017739,151.617327 C173.478739,156.491588 171.466318,160.919828 168.992653,164.871603 C166.518988,168.8249 163.626703,172.126671 160.340154,174.732772 C157.032293,177.369319 153.456516,178.949419 149.61891,179.48982 C147.981466,179.71943 146.409485,179.706396 144.904001,179.450546 L142.902491,178.954468 C140.215246,178.445914 86.5913947,148.192648 85.5053251,147.574217 Z" class="o-start-c" stroke="#8A9EA3"></path><path d="M176.086667,81.6919231 L121.283956,51.4683063 C121.283956,51.4683063 110.259783,48.544054 103.668418,49.4711075 C97.0679193,50.3981609 90.9286639,52.8002797 85.2476073,56.6911641 C79.5665507,60.5820485 74.5613755,65.5354671 70.2320816,71.5377195 C65.9043099,77.5399719 62.3757223,84.3794647 59.6402296,92.0135748 C56.9047369,99.6476848 55.1632769,107.747605 54.4265054,116.258534 C53.7003896,124.664427 54.0702977,132.453808 55.5255737,139.617541 C56.9747607,146.769096 59.3738349,152.891606 62.6953959,157.977461 C66.0276126,163.063316 75.3331589,169.333485 75.3331589,169.333485 L127.475432,198.090673 C123.561779,195.669395 120.230966,192.370904 117.498107,188.201078 C114.175024,183.115223 111.775949,176.992713 110.328285,169.841157 C108.871486,162.677424 108.503101,154.886522 109.229216,146.482151 C109.964466,137.971222 111.707448,129.869779 114.441418,122.235669 C117.176911,114.601559 120.705499,107.763589 125.03327,101.761336 C129.362564,95.7575615 134.36774,90.804143 140.048796,86.9147808 C145.729853,83.0238964 151.87063,80.6202554 158.471129,79.6932019 C165.060972,78.7676708 170.936877,79.4283295 176.086667,81.6919231 L176.086667,81.6919231 Z" class="o-start-b" stroke="#055c9f"></path><path d="M196.006899,110.299666 C197.425641,117.467966 197.751403,125.423272 196.997887,134.147317 C196.262638,142.658246 194.5227,150.823623 191.773507,158.63127 C189.024314,166.425217 185.475937,173.384968 181.148165,179.492256 C176.809738,185.602588 171.787818,190.636686 166.111328,194.579327 C160.424183,198.537191 154.272749,200.968233 147.682906,201.893764 C141.082407,202.820817 135.226291,202.050556 130.134348,199.557102 C125.051537,197.074304 120.830324,193.28541 117.498107,188.201078 C114.175024,183.115223 111.775949,176.992713 110.328285,169.841157 C108.871486,162.677424 108.503101,154.886522 109.229216,146.482151 C109.964466,137.971222 111.707448,129.869779 114.441418,122.235669 C117.176911,114.601559 120.705499,107.763589 125.03327,101.761336 C129.362564,95.7575615 134.36774,90.804143 140.048796,86.9147808 C145.729853,83.0238964 151.87063,80.6202554 158.471129,79.6932019 C165.060972,78.7676708 170.936877,79.4283295 176.086667,81.6919231 C181.2258,83.9555166 185.486593,87.5023713 188.841643,92.3187869 C192.198216,97.138247 194.588157,103.143544 196.006899,110.299666 Z M173.535062,110.878732 C171.677911,107.692652 169.316893,105.287488 166.470276,103.701298 C163.613003,102.101408 160.285353,101.570141 156.534516,102.096841 C152.841525,102.61593 149.363171,104.157975 146.099456,106.721453 C142.864664,109.281886 139.981512,112.489278 137.477403,116.340584 C134.974815,120.179711 132.916726,124.483127 131.315313,129.208207 C129.701723,133.946988 128.684856,138.813638 128.252536,143.808157 C127.783681,149.228908 128.004408,154.237128 128.92385,158.844994 C129.844815,163.426983 131.260512,167.33309 133.190732,170.561793 C135.120951,173.776796 137.498714,176.192615 140.307275,177.798595 C143.124969,179.401529 146.231892,179.964764 149.61891,179.48982 C153.456516,178.949419 157.032293,177.369319 160.340154,174.732772 C163.626703,172.126671 166.518988,168.8249 168.992653,164.871603 C171.466318,160.919828 173.478739,156.491588 175.017739,151.617327 C176.556739,146.743065 177.543161,141.801825 177.973959,136.821006 C178.423024,131.625548 178.263187,126.79391 177.491404,122.335225 C176.710487,117.879584 175.392214,114.064812 173.535062,110.878732 Z" class="o-start-a" stroke="#055c9f"></path></g></svg></div><div class="svg-container f"><svg viewBox="0 0 250 250"><g class="follow"><polygon class="f-follow-c" stroke="#DD07F4" points="70 183.75 70 80 137.5 40 137.5 58.75 92.5 85 92.5 110 125 91.25 125 108.75 92.5 127.5 92.5 171.25"></polygon><polygon class="f-follow-b8" stroke="#DD07F4" points="137.50375 152.5 92.5 127.5 125 108.75 170 133.75"></polygon><polygon class="f-follow-b7" stroke="#DD07F4" points="137.5 136.25 92.5 110 125 91.25 170 117.5"></polygon><polygon class="f-follow-b6" stroke="#DD07F4" points="170 133.75 125 108.75 125 91.25 170 117.5"></polygon><polygon class="f-follow-b5" stroke="#DD07F4" points="137.5 196.25 92.5 171.25 70 183.75 115 208.75"></polygon><polygon class="f-follow-b4" stroke="#DD07F4" points="182.5 84.156901 137.50125 58.577026 137.5 40 182.5 66.25"></polygon><polygon class="f-follow-b3" stroke="#4407F4" points="137.5 136.25 92.5 110 92.5 85 137.5 110"></polygon><polygon class="f-follow-b2" stroke="#4407F4" points="115 105 70 80 137.5 40 182.5 66.25"></polygon><polygon class="f-start-b6" stroke="#8A9EA3" points="170 133.75 125 108.75 125 91.25 170 117.5"></polygon><polygon class="f-follow-b1" stroke="#4407F4" points="115.00375 105 70 80 70.00375 183.75 115.005 208.75"></polygon><polygon class="f-follow-a" stroke="#4407F4" points="115.00375 208.75 115 105 182.50375 66.25 182.50125 84.3475 137.50125 110 137.50375 136.25 170.00375 117.5 170.00375 133.75 137.50125 152.5 137.50375 196.25"></polygon></g><g class="start"><polygon class="f-start-c" stroke="#8A9EA3" points="70 183.75 70 80 137.5 40 137.5 58.75 92.5 85 92.5 110 125 91.25 125 108.75 92.5 127.5 92.5 171.25"></polygon><polygon class="f-start-b8" stroke="#8A9EA3" points="137.50375 152.5 92.5 127.5 125 108.75 170 133.75"></polygon><polygon class="f-start-b7" stroke="#8A9EA3" points="137.5 136.25 92.5 110 125 91.25 170 117.5"></polygon><polygon class="f-start-b5" stroke="#8A9EA3" points="137.5 196.25 92.5 171.25 70 183.75 115 208.75"></polygon><polygon class="f-start-b4" stroke="#8A9EA3" points="182.5 84.156901 137.50125 58.577026 137.5 40 182.5 66.25"></polygon><polygon class="f-start-b3" stroke="#8A9EA3" points="137.5 136.25 92.5 110 92.5 85 137.5 110"></polygon><polygon class="f-start-b2" stroke="#055c9f" points="115 105 70 80 137.5 40 182.5 66.25"></polygon><polygon class="f-start-b1" stroke="#055c9f" points="115.00375 105 70 80 70.00375 183.75 115.005 208.75"></polygon><polygon class="f-start-a" stroke="#055c9f" points="115.00375 208.75 115 105 182.50375 66.25 182.50125 84.3475 137.50125 110 137.50375 136.25 170.00375 117.5 170.00375 133.75 137.50125 152.5 137.50375 196.25"></polygon></g></svg></div><div class="svg-container t"><svg viewBox="0 0 250 250"><g class="follow"><polygon class="t-follow-c2" stroke="#DD07F4" points="115 86 115 164.050007 92.5 177.007625 92.5 100 69.999 113.5 69.999 86 137.49775 47 137.49525 73.136375"></polygon><polygon class="t-follow-c1" stroke="#DD07F4" points="160 112.148498 115 86 115 164.087505 160 190.015998"></polygon><polygon class="t-follow-b3" stroke="#4407F4" points="137.497375 125.196126 92.5 100 92.5 177.047376 137.497375 203.162376"></polygon><polygon class="t-follow-b2" stroke="#4407F4" points="115 112.090875 69.998625 86.127125 69.998625 113.5 115 138.095001"></polygon><polygon class="t-follow-b1" stroke="#4407F4" points="115 112 70 86 137.5 47 182.5 73"></polygon><polygon class="t-follow-a" stroke="#4407F4" points="160 112.111 160 189.9785 137.497625 203.12225 137.497625 125.156 115 138.09475 115 112.091 182.497625 73.13725 182.497625 98.93475"></polygon></g><g class="start"><polygon class="t-start-c2" stroke="#8A9EA3" points="115 86 115 164.050007 92.5 177.007625 92.5 100 69.999 113.5 69.999 86 137.49775 47 137.49525 73.136375"></polygon><polygon class="t-start-c1" stroke="#8A9EA3" points="160 112.148498 115 86 115 164.087505 160 190.015998"></polygon><polygon class="t-start-b3" stroke="#055c9f" points="137.497375 125.196126 92.5 100 92.5 177.047376 137.497375 203.162376"></polygon><polygon class="t-start-b2" stroke="#055c9f" points="115 112.090875 69.998625 86.127125 69.998625 113.5 115 138.095001"></polygon><polygon class="t-start-b1" stroke="#055c9f" points="115 112 70 86 137.5 47 182.5 73"></polygon><polygon class="t-start-a" stroke="#055c9f" points="160 112.111 160 189.9785 137.497625 203.12225 137.497625 125.156 115 138.09475 115 112.091 182.497625 73.13725 182.497625 98.93475"></polygon></g></svg></div><div class="svg-container w"><svg viewBox="0 0 250 250"><g class="follow"><polygon class="w-follow-c8" stroke="#DD07F4" points="139.367375 149.2935 117.622375 161.8485 106.266125 116.441 97.912375 173.22725 73.648625 187.236 49.374875 97.326 71.867375 84.341 86.538625 153.7035 91.626125 72.9335 108.473625 63.206 128.191125 129.92225 131.603625 49.85225 153.963625 36.94225"></polygon><polygon class="w-follow-c7" stroke="#DD07F4" points="200.295125 61.874625 185.617625 174.293375 139.367625 149.293375 154.045125 36.874625"></polygon><polygon class="w-follow-c6" stroke="#DD07F4" points="144.16225 198.868632 119.8985 213.2365 73.66475 187.23921 97.91225 173.22775"></polygon><polygon class="w-follow-c5" stroke="#DD07F4" points="163.87175 187.848375 185.61675 174.959065 139.36675 149.293375 117.62175 162.182685"></polygon><polygon class="w-follow-c4" stroke="#DD07F4" points="118.117375 109.341 132.788625 178.7035 86.538625 153.7035 71.867375 84.341"></polygon><polygon class="w-follow-c3" stroke="#DD07F4" points="132.789 178.703875 137.8615 97.967625 91.6115 72.967625 86.539 153.703875"></polygon><polygon class="w-follow-c2" stroke="#DD07F4" points="154.723125 88.20575 174.440625 154.922 128.190625 129.922 108.473125 63.20575"></polygon><polygon class="w-follow-c1" stroke="#DD07F4" points="174.440625 154.922125 177.803125 74.859625 131.553125 49.859625 128.190625 129.922125"></polygon><polygon class="w-follow-b4" stroke="#4407F4" points="118.117375 109.341 95.624875 122.326 49.374875 97.326 71.867375 84.341"></polygon><polygon class="w-follow-b3" stroke="#4407F4" points="154.723125 88.20575 137.861875 97.96825 91.611875 72.96825 108.473125 63.20575"></polygon><polygon class="w-follow-b2" stroke="#4407F4" points="200.295125 61.874625 177.802625 74.859625 131.552625 49.859625 154.045125 36.874625"></polygon><polygon class="w-follow-b1" stroke="#4407F4" points="119.899 212.2365 95.62525 122.32525 49.37525 97.32525 73.649 187.2365"></polygon><polygon class="w-follow-a" stroke="#4407F4" points="185.617375 174.2935 163.872375 186.8485 152.516125 141.441 144.162375 198.22725 119.898625 212.236 95.624875 122.326 118.117375 109.341 132.788625 178.7035 137.876125 97.93225 154.723625 88.206 174.441125 154.92225 177.853625 74.85225 200.213625 61.94225"></polygon></g><g class="start"><polygon class="w-start-c8" stroke="#8A9EA3" points="139.367375 149.2935 117.622375 161.8485 106.266125 116.441 97.912375 173.22725 73.648625 187.236 49.374875 97.326 71.867375 84.341 86.538625 153.7035 91.626125 72.9335 108.473625 63.206 128.191125 129.92225 131.603625 49.85225 153.963625 36.94225"></polygon><polygon class="w-start-c7" stroke="#8A9EA3" points="200.295125 61.874625 185.617625 174.293375 139.367625 149.293375 154.045125 36.874625"></polygon><polygon class="w-start-c6" stroke="#8A9EA3" points="144.16225 198.868632 119.8985 213.2365 73.66475 187.23921 97.91225 173.22775"></polygon><polygon class="w-start-c5" stroke="#8A9EA3" points="163.87175 187.848375 185.61675 174.959065 139.36675 149.293375 117.62175 162.182685"></polygon><polygon class="w-start-c4" stroke="#8A9EA3" points="118.117375 109.341 132.788625 178.7035 86.538625 153.7035 71.867375 84.341"></polygon><polygon class="w-start-c3" stroke="#8A9EA3" points="132.789 178.703875 137.8615 97.967625 91.6115 72.967625 86.539 153.703875"></polygon><polygon class="w-start-c2" stroke="#8A9EA3" points="154.723125 88.20575 174.440625 154.922 128.190625 129.922 108.473125 63.20575"></polygon><polygon class="w-start-c1" stroke="#8A9EA3" points="174.440625 154.922125 177.803125 74.859625 131.553125 49.859625 128.190625 129.922125"></polygon><polygon class="w-start-b4" stroke="#055c9f" points="118.117375 109.341 95.624875 122.326 49.374875 97.326 71.867375 84.341"></polygon><polygon class="w-start-b3" stroke="#055c9f" points="154.723125 88.20575 137.861875 97.96825 91.611875 72.96825 108.473125 63.20575"></polygon><polygon class="w-start-b2" stroke="#055c9f" points="200.295125 61.874625 177.802625 74.859625 131.552625 49.859625 154.045125 36.874625"></polygon><polygon class="w-start-b1" stroke="#055c9f" points="119.899 212.2365 95.62525 122.32525 49.37525 97.32525 73.649 187.2365"></polygon><polygon class="w-start-a" stroke="#055c9f" points="185.617375 174.2935 163.872375 186.8485 152.516125 141.441 144.162375 198.22725 119.898625 212.236 95.624875 122.326 118.117375 109.341 132.788625 178.7035 137.876125 97.93225 154.723625 88.206 174.441125 154.92225 177.853625 74.85225 200.213625 61.94225"></polygon></g></svg></div><div class="svg-container a"><svg viewBox="0 0 250 250"><g class="follow"><polygon class="a-follow-c2" stroke="#DD07F4" points="105 47 79 62 68.947 175.0025 94 160 95.80825 132.8575 120.882 118.03875 132 137 150 126"></polygon><polygon class="a-follow-c1" stroke="#DD07F4" points="95.4795 115.125 99 77 114.93325 103.6275"></polygon><polygon class="a-follow-b7" stroke="#DD07F4" points="194 152 175 162 132 136.998047 150 126"></polygon><polygon class="a-follow-b6" stroke="#DD07F4" points="137.017578 185.025391 94 160 69 175.0025 111 200"></polygon><polygon class="a-follow-b5" stroke="#DD07F4" points="105 47 150.353516 125.401367 194 152 150 74"></polygon><polygon class="a-follow-b4" stroke="#DD07F4" points="95.4795 115.125 139 140 158 130 114.93325 103.6275"></polygon><polygon class="a-follow-b3" stroke="#DD07F4" points="99 77 143 103 158 130 114.93325 103.6275"></polygon><polygon class="a-follow-b2" stroke="#4407F4" points="105 47 79 62 123 89 150 74"></polygon><polygon class="a-follow-b1" stroke="#4407F4" points="123 89 79 62 69 175.0025 111 200"></polygon><polygon class="a-follow-a2" stroke="#4407F4" points="150 74 123 89 111 200 137 185 140 158 164 143 175 162 194 152"></polygon><polygon class="a-follow-a1" stroke="#4407F4" points="143 103 158 130 139 140"></polygon></g><g class="start"><polygon class="a-start-c2" stroke="#8A9EA3" points="105 47 79 62 68.947 175.0025 94 160 95.80825 132.8575 120.882 118.03875 132 137 150 126"></polygon><polygon class="a-start-c1" stroke="#8A9EA3" points="95.4795 115.125 99 77 114.93325 103.6275"></polygon><polygon class="a-start-b7" stroke="#8A9EA3" points="194 152 175 162 132 136.998047 150 126"></polygon><polygon class="a-start-b6" stroke="#8A9EA3" points="137.017578 185.025391 94 160 69 175.0025 111 200"></polygon><polygon class="a-start-b5" stroke="#8A9EA3" points="105 47 150.353516 125.401367 194 152 150 74"></polygon><polygon class="a-start-b4" stroke="#8A9EA3" points="95.4795 115.125 139 140 158 130 114.93325 103.6275"></polygon><polygon class="a-start-b3" stroke="#8A9EA3" points="99 77 143 103 158 130 114.93325 103.6275"></polygon><polygon class="a-start-b2" stroke="#055c9f" points="105 47 79 62 123 89 150 74"></polygon><polygon class="a-start-b1" stroke="#055c9f" points="123 89 79 62 69 175.0025 111 200"></polygon><polygon class="a-start-a2" stroke="#055c9f" points="150 74 123 89 111 200 137 185 140 158 164 143 175 162 194 152"></polygon><polygon class="a-start-a1" stroke="#055c9f" points="143 103 158 130 139 140"></polygon></g></svg></div><div class="svg-container r"><svg viewBox="0 0 250 250"><g class="follow"><path d="M90.624875,81.453625 L104.823625,73.676125 C111.169875,70.201125 115.937375,76.278625 115.937375,83.229875 L115.937375,85.629875 C115.937375,91.626125 112.566125,97.166125 107.092375,100.163625 L90.624875,109.183625 L90.624875,81.453625 Z M122.463625,145.459875 L138.138625,136.409875 L117.559875,112.309875 C117.991125,112.061125 135.624875,102.829875 135.624875,76.472375 L135.624875,76.471125 C135.624875,57.604875 121.629875,42.044875 105.279875,51.457375 L68.124875,72.911125 L68.124875,176.863625 L90.639875,163.851125 L90.624875,127.861125 L102.772375,120.847375 L122.463625,145.459875 Z" class="r-follow-d" stroke="#DD07F4"></path><polygon class="r-follow-c4" stroke="#DD07F4" points="135.641375 189.841125 135.626375 153.849875 90.702625 127.881125 90.627625 163.852375"></polygon><path d="M122.463875,145.46 L138.138875,136.41 L183.141375,162.4 C183.572625,162.15125 167.465125,171.45 167.465125,171.45 L122.463875,145.46 Z" class="r-follow-c3" stroke="#DD07F4"></path><path d="M122.463875,145.46 L102.772625,120.8475 L147.773875,146.8375 C148.205125,146.5875 167.465125,171.45 167.465125,171.45 L122.463875,145.46 Z" class="r-follow-c2" stroke="#DD07F4"></path><path d="M117.560375,112.31 L138.139125,136.41 L183.141625,162.4 C183.572875,162.15125 162.561625,138.3 162.561625,138.3 L117.560375,112.31 Z" class="r-follow-c1" stroke="#DD07F4"></path><polygon class="r-follow-b2" stroke="#4407F4" points="113.14075 98.906625 113.127 202.854125 68.20325 176.882875 68.127 72.917875"></polygon><path d="M150.28125,77.44675 C162.2325,70.568 172.915,77.03425 177.805,88.37675 C166.68125,60.43675 125.47125,39.8105 105.34875,51.42925 L68.12625,72.918 L68.12625,176.843 L113.12625,202.85425 L113.12625,98.9005 L150.28125,77.44675 Z" class="r-follow-b1" stroke="#4407F4"></path><path d="M135.62675,107.443625 L149.8255,99.666125 C156.17175,96.191125 160.93925,102.267375 160.93925,109.218625 L160.93925,111.619875 C160.93925,117.614875 157.568,123.154875 152.09425,126.153625 L135.62675,135.173625 L135.62675,107.443625 Z M167.4655,171.449875 L183.14175,162.399875 L162.56175,138.299875 C162.993,138.049875 180.6255,128.819875 180.6255,102.461125 C180.62675,83.594875 166.633,68.034875 150.28175,77.446125 L113.12675,98.899875 L113.12675,202.853625 L135.64175,189.841125 L135.62675,153.849875 L147.77425,146.837375 L167.4655,171.449875 Z" class="r-follow-a" stroke="#4407F4"></path></g><g class="start"><path d="M90.624875,81.453625 L104.823625,73.676125 C111.169875,70.201125 115.937375,76.278625 115.937375,83.229875 L115.937375,85.629875 C115.937375,91.626125 112.566125,97.166125 107.092375,100.163625 L90.624875,109.183625 L90.624875,81.453625 Z M122.463625,145.459875 L138.138625,136.409875 L117.559875,112.309875 C117.991125,112.061125 135.624875,102.829875 135.624875,76.472375 L135.624875,76.471125 C135.624875,57.604875 121.629875,42.044875 105.279875,51.457375 L68.124875,72.911125 L68.124875,176.863625 L90.639875,163.851125 L90.624875,127.861125 L102.772375,120.847375 L122.463625,145.459875 Z" class="r-start-d" stroke="#8A9EA3"></path><polygon class="r-start-c4" stroke="#8A9EA3" points="135.641375 189.841125 135.626375 153.849875 90.702625 127.881125 90.627625 163.852375"></polygon><path d="M122.463875,145.46 L138.138875,136.41 L183.141375,162.4 C183.572625,162.15125 167.465125,171.45 167.465125,171.45 L122.463875,145.46 Z" class="r-start-c3" stroke="#8A9EA3"></path><path d="M122.463875,145.46 L102.772625,120.8475 L147.773875,146.8375 C148.205125,146.5875 167.465125,171.45 167.465125,171.45 L122.463875,145.46 Z" class="r-start-c2" stroke="#8A9EA3"></path><path d="M117.560375,112.31 L138.139125,136.41 L183.141625,162.4 C183.572875,162.15125 162.561625,138.3 162.561625,138.3 L117.560375,112.31 Z" class="r-start-c1" stroke="#8A9EA3"></path><polygon class="r-start-b2" stroke="#055c9f" points="113.14075 98.906625 113.127 202.854125 68.20325 176.882875 68.127 72.917875"></polygon><path d="M150.28125,77.44675 C162.2325,70.568 172.915,77.03425 177.805,88.37675 C166.68125,60.43675 125.47125,39.8105 105.34875,51.42925 L68.12625,72.918 L68.12625,176.843 L113.12625,202.85425 L113.12625,98.9005 L150.28125,77.44675 Z" class="r-start-b1" stroke="#055c9f"></path><path d="M135.62675,107.443625 L149.8255,99.666125 C156.17175,96.191125 160.93925,102.267375 160.93925,109.218625 L160.93925,111.619875 C160.93925,117.614875 157.568,123.154875 152.09425,126.153625 L135.62675,135.173625 L135.62675,107.443625 Z M167.4655,171.449875 L183.14175,162.399875 L162.56175,138.299875 C162.993,138.049875 180.6255,128.819875 180.6255,102.461125 C180.62675,83.594875 166.633,68.034875 150.28175,77.446125 L113.12675,98.899875 L113.12675,202.853625 L135.64175,189.841125 L135.62675,153.849875 L147.77425,146.837375 L167.4655,171.449875 Z" class="r-start-a" stroke="#055c9f"></path></g></svg></div><div class="svg-container e"><svg viewBox="0 0 250 250"><g class="follow"><polygon class="e-follow-c" stroke="#DD07F4" points="69.379 183.538875 69.37525 79.598875 136.879 40.625125 136.8765 58.721375 91.8765 84.781375 91.879 109.735125 124.379 91.045125 124.379 108.550003 91.8765 127.281375 91.879 149.861375 136.879 123.837625 136.88025 144.471375"></polygon><polygon class="e-follow-b7" stroke="#DD07F4" points="181.882625 170.317383 136.878875 144.336133 136.878875 123.838 181.882625 149.8805"></polygon><polygon class="e-follow-b6" stroke="#DD07F4" points="136.882625 175.76425 91.878875 149.783 136.878875 123.838 181.882625 149.8805"></polygon><polygon class="e-follow-b5" stroke="#DD07F4" points="169.340125 134.589996 124.367625 108.550003 124.367625 91.0255 169.340125 117.0155"></polygon><polygon class="e-follow-b4" stroke="#DD07F4" points="136.882625 135.76425 91.878875 109.783 124.367625 91.0255 169.340125 117.0155"></polygon><polygon class="e-follow-b3" stroke="#DD07F4" points="181.88025 84.7600021 136.879 58.7200012 136.879 40.624875 181.88025 66.588625"></polygon><polygon class="e-follow-b2" stroke="#4407F4" points="114.379 105.579875 69.37525 79.598625 69.379 183.538625 114.38025 209.503625"></polygon><polygon class="e-follow-b1" stroke="#4407F4" points="114.379 105.579875 69.37525 79.598625 136.879 40.624875 181.88025 66.588625"></polygon><polygon class="e-follow-a" stroke="#4407F4" points="114.382625 209.581375 114.378875 105.640125 181.882625 66.666375 181.880005 84.763875 136.880125 110.823875 136.882625 135.777625 169.382625 117.087625 169.382625 134.589996 136.880125 153.323875 136.882625 175.902625 181.882625 149.880125 181.883875 170.512625"></polygon><polygon class="e-start-c" stroke="#8A9EA3" points="69.379 183.538875 69.37525 79.598875 136.879 40.625125 136.8765 58.721375 91.8765 84.781375 91.879 109.735125 124.379 91.045125 124.379 108.550003 91.8765 127.281375 91.879 149.861375 136.879 123.837625 136.88025 144.471375"></polygon></g><g class="start"><polygon class="e-start-c" stroke="#8A9EA3" points="69.379 183.538875 69.37525 79.598875 136.879 40.625125 136.8765 58.721375 91.8765 84.781375 91.879 109.735125 124.379 91.045125 124.379 108.550003 91.8765 127.281375 91.879 149.861375 136.879 123.837625 136.88025 144.471375"></polygon><polygon class="e-start-b7" stroke="#8A9EA3" points="181.882625 170.317383 136.878875 144.336133 136.878875 123.838 181.882625 149.8805"></polygon><polygon class="e-start-b6" stroke="#8A9EA3" points="136.882625 175.76425 91.878875 149.783 136.878875 123.838 181.882625 149.8805"></polygon><polygon class="e-start-b5" stroke="#8A9EA3" points="169.340125 134.589996 124.367625 108.550003 124.367625 91.0255 169.340125 117.0155"></polygon><polygon class="e-start-b4" stroke="#8A9EA3" points="136.882625 135.76425 91.878875 109.783 124.367625 91.0255 169.340125 117.0155"></polygon><polygon class="e-start-b3" stroke="#8A9EA3" points="181.88025 84.7600021 136.879 58.7200012 136.879 40.624875 181.88025 66.588625"></polygon><polygon class="e-start-b2" stroke="#055c9f" points="114.379 105.579875 69.37525 79.598625 69.379 183.538625 114.38025 209.503625"></polygon><polygon class="e-start-b1" stroke="#055c9f" points="114.379 105.579875 69.37525 79.598625 136.879 40.624875 181.88025 66.588625"></polygon><polygon class="e-start-a" stroke="#055c9f" points="114.382625 209.581375 114.378875 105.640125 181.882625 66.666375 181.880005 84.763875 136.880125 110.823875 136.882625 135.777625 169.382625 117.087625 169.382625 134.589996 136.880125 153.323875 136.882625 175.902625 181.882625 149.880125 181.883875 170.512625"></polygon></g></svg></div></div></div><div class="col-12 sm:col-12 md:col-12 lg:col-12 xl:col-12" style="${ssrRenderStyle({ "padding": "0px" })}">`);
      _push(ssrRenderComponent(_component_Card, { style: { "width": "100%" } }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid"${_scopeId}><div class="col-12 flex align-items-center justify-content-center" style="${ssrRenderStyle({ "padding": "0px" })}"${_scopeId}><i class="pi pi-spin pi-cog mr-2" style="${ssrRenderStyle({ "font-size": "2.4rem" })}"${_scopeId}></i><p class="secondBannerTitle"${_scopeId}> Control &amp; Instrumentaci\xF3n </p></div><div class="col-12" style="${ssrRenderStyle({ "padding": "0px" })}"${_scopeId}><div class="card"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Carousel, {
              value: products.value,
              numVisible: 3,
              numScroll: 1,
              responsiveOptions: responsiveOptions.value,
              circular: "",
              autoplayInterval: 6e3
            }, {
              item: withCtx((slotProps, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Card, { style: { "width": "25rem", "overflow": "hidden" } }, {
                    header: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png"${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            alt: "user header",
                            src: "https://primefaces.org/cdn/primevue/images/usercard.png"
                          })
                        ];
                      }
                    }),
                    title: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Proyecto`);
                      } else {
                        return [
                          createTextVNode("Proyecto")
                        ];
                      }
                    }),
                    subtitle: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Descripci\xF3n`);
                      } else {
                        return [
                          createTextVNode("Descripci\xF3n")
                        ];
                      }
                    }),
                    content: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p class="m-0"${_scopeId3}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea consectetur iure iste, reprehenderit aliquam aperiam doloribus nostrum quibusdam, accusamus adipisci similique, soluta dolores vitae dolorem deserunt eaque odit excepturi. Maxime? </p>`);
                      } else {
                        return [
                          createVNode("p", { class: "m-0" }, " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea consectetur iure iste, reprehenderit aliquam aperiam doloribus nostrum quibusdam, accusamus adipisci similique, soluta dolores vitae dolorem deserunt eaque odit excepturi. Maxime? ")
                        ];
                      }
                    }),
                    footer: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex gap-4 mt-1"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Button, {
                          label: "M\xE1s informaci\xF3n",
                          class: "w-full"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex gap-4 mt-1" }, [
                            createVNode(_component_Button, {
                              label: "M\xE1s informaci\xF3n",
                              class: "w-full"
                            })
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Card, { style: { "width": "25rem", "overflow": "hidden" } }, {
                      header: withCtx(() => [
                        createVNode("img", {
                          alt: "user header",
                          src: "https://primefaces.org/cdn/primevue/images/usercard.png"
                        })
                      ]),
                      title: withCtx(() => [
                        createTextVNode("Proyecto")
                      ]),
                      subtitle: withCtx(() => [
                        createTextVNode("Descripci\xF3n")
                      ]),
                      content: withCtx(() => [
                        createVNode("p", { class: "m-0" }, " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea consectetur iure iste, reprehenderit aliquam aperiam doloribus nostrum quibusdam, accusamus adipisci similique, soluta dolores vitae dolorem deserunt eaque odit excepturi. Maxime? ")
                      ]),
                      footer: withCtx(() => [
                        createVNode("div", { class: "flex gap-4 mt-1" }, [
                          createVNode(_component_Button, {
                            label: "M\xE1s informaci\xF3n",
                            class: "w-full"
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid" }, [
                createVNode("div", {
                  class: "col-12 flex align-items-center justify-content-center",
                  style: { "padding": "0px" }
                }, [
                  createVNode("i", {
                    class: "pi pi-spin pi-cog mr-2",
                    style: { "font-size": "2.4rem" }
                  }),
                  createVNode("p", { class: "secondBannerTitle" }, " Control & Instrumentaci\xF3n ")
                ]),
                createVNode("div", {
                  class: "col-12",
                  style: { "padding": "0px" }
                }, [
                  createVNode("div", { class: "card" }, [
                    createVNode(_component_Carousel, {
                      value: products.value,
                      numVisible: 3,
                      numScroll: 1,
                      responsiveOptions: responsiveOptions.value,
                      circular: "",
                      autoplayInterval: 6e3
                    }, {
                      item: withCtx((slotProps) => [
                        createVNode(_component_Card, { style: { "width": "25rem", "overflow": "hidden" } }, {
                          header: withCtx(() => [
                            createVNode("img", {
                              alt: "user header",
                              src: "https://primefaces.org/cdn/primevue/images/usercard.png"
                            })
                          ]),
                          title: withCtx(() => [
                            createTextVNode("Proyecto")
                          ]),
                          subtitle: withCtx(() => [
                            createTextVNode("Descripci\xF3n")
                          ]),
                          content: withCtx(() => [
                            createVNode("p", { class: "m-0" }, " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea consectetur iure iste, reprehenderit aliquam aperiam doloribus nostrum quibusdam, accusamus adipisci similique, soluta dolores vitae dolorem deserunt eaque odit excepturi. Maxime? ")
                          ]),
                          footer: withCtx(() => [
                            createVNode("div", { class: "flex gap-4 mt-1" }, [
                              createVNode(_component_Button, {
                                label: "M\xE1s informaci\xF3n",
                                class: "w-full"
                              })
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["value", "responsiveOptions"])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-12 sm:col-12 md:col-12 lg:col-12 xl:col-12" style="${ssrRenderStyle({ "padding": "0px" })}">`);
      _push(ssrRenderComponent(_component_Card, { style: { "width": "100%" } }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid"${_scopeId}><div class="col-12 flex align-items-center justify-content-center" style="${ssrRenderStyle({ "padding": "0px" })}"${_scopeId}><p${_scopeId}><svg class="controlInstrumentacion" version="1.1" id="L6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"${_scopeId}><rect fill="none" stroke="black" stroke-width="4" x="25" y="25" width="50" height="50"${_scopeId}><animateTransform attributeName="transform" dur="1.5s" from="0 50 50" to="180 50 50" type="rotate" id="strokeBox" attributeType="XML" begin="rectBox.end"${_scopeId}></animateTransform></rect><rect x="27" y="27" fill="#black" width="46" height="50"${_scopeId}><animate attributeName="height" dur="2.3s" attributeType="XML" from="50" to="0" id="rectBox" fill="freeze" begin="0s;strokeBox.end"${_scopeId}></animate></rect></svg></p><p style="${ssrRenderStyle({ "font-size": "40px" })}"${_scopeId}> Consultoria en Desarrollo de Software </p></div><div class="col-12" style="${ssrRenderStyle({ "padding": "0px" })}"${_scopeId}><div class="card"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Carousel, {
              value: products.value,
              numVisible: 3,
              numScroll: 1,
              responsiveOptions: responsiveOptions.value,
              circular: "",
              autoplayInterval: 6e3
            }, {
              item: withCtx((slotProps, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Card, { style: { "width": "25rem", "overflow": "hidden" } }, {
                    header: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png"${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            alt: "user header",
                            src: "https://primefaces.org/cdn/primevue/images/usercard.png"
                          })
                        ];
                      }
                    }),
                    title: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Proyecto`);
                      } else {
                        return [
                          createTextVNode("Proyecto")
                        ];
                      }
                    }),
                    subtitle: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Descripci\xF3n`);
                      } else {
                        return [
                          createTextVNode("Descripci\xF3n")
                        ];
                      }
                    }),
                    content: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p class="m-0"${_scopeId3}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea consectetur iure iste, reprehenderit aliquam aperiam doloribus nostrum quibusdam, accusamus adipisci similique, soluta dolores vitae dolorem deserunt eaque odit excepturi. Maxime? </p>`);
                      } else {
                        return [
                          createVNode("p", { class: "m-0" }, " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea consectetur iure iste, reprehenderit aliquam aperiam doloribus nostrum quibusdam, accusamus adipisci similique, soluta dolores vitae dolorem deserunt eaque odit excepturi. Maxime? ")
                        ];
                      }
                    }),
                    footer: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex gap-4 mt-1"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Button, {
                          label: "M\xE1s informaci\xF3n",
                          class: "w-full"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex gap-4 mt-1" }, [
                            createVNode(_component_Button, {
                              label: "M\xE1s informaci\xF3n",
                              class: "w-full"
                            })
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Card, { style: { "width": "25rem", "overflow": "hidden" } }, {
                      header: withCtx(() => [
                        createVNode("img", {
                          alt: "user header",
                          src: "https://primefaces.org/cdn/primevue/images/usercard.png"
                        })
                      ]),
                      title: withCtx(() => [
                        createTextVNode("Proyecto")
                      ]),
                      subtitle: withCtx(() => [
                        createTextVNode("Descripci\xF3n")
                      ]),
                      content: withCtx(() => [
                        createVNode("p", { class: "m-0" }, " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea consectetur iure iste, reprehenderit aliquam aperiam doloribus nostrum quibusdam, accusamus adipisci similique, soluta dolores vitae dolorem deserunt eaque odit excepturi. Maxime? ")
                      ]),
                      footer: withCtx(() => [
                        createVNode("div", { class: "flex gap-4 mt-1" }, [
                          createVNode(_component_Button, {
                            label: "M\xE1s informaci\xF3n",
                            class: "w-full"
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid" }, [
                createVNode("div", {
                  class: "col-12 flex align-items-center justify-content-center",
                  style: { "padding": "0px" }
                }, [
                  createVNode("p", null, [
                    (openBlock(), createBlock("svg", {
                      class: "controlInstrumentacion",
                      version: "1.1",
                      id: "L6",
                      xmlns: "http://www.w3.org/2000/svg",
                      "xmlns:xlink": "http://www.w3.org/1999/xlink",
                      x: "0px",
                      y: "0px",
                      viewBox: "0 0 100 100",
                      "enable-background": "new 0 0 100 100",
                      "xml:space": "preserve"
                    }, [
                      createVNode("rect", {
                        fill: "none",
                        stroke: "black",
                        "stroke-width": "4",
                        x: "25",
                        y: "25",
                        width: "50",
                        height: "50"
                      }, [
                        createVNode("animateTransform", {
                          attributeName: "transform",
                          dur: "1.5s",
                          from: "0 50 50",
                          to: "180 50 50",
                          type: "rotate",
                          id: "strokeBox",
                          attributeType: "XML",
                          begin: "rectBox.end"
                        })
                      ]),
                      createVNode("rect", {
                        x: "27",
                        y: "27",
                        fill: "#black",
                        width: "46",
                        height: "50"
                      }, [
                        createVNode("animate", {
                          attributeName: "height",
                          dur: "2.3s",
                          attributeType: "XML",
                          from: "50",
                          to: "0",
                          id: "rectBox",
                          fill: "freeze",
                          begin: "0s;strokeBox.end"
                        })
                      ])
                    ]))
                  ]),
                  createVNode("p", { style: { "font-size": "40px" } }, " Consultoria en Desarrollo de Software ")
                ]),
                createVNode("div", {
                  class: "col-12",
                  style: { "padding": "0px" }
                }, [
                  createVNode("div", { class: "card" }, [
                    createVNode(_component_Carousel, {
                      value: products.value,
                      numVisible: 3,
                      numScroll: 1,
                      responsiveOptions: responsiveOptions.value,
                      circular: "",
                      autoplayInterval: 6e3
                    }, {
                      item: withCtx((slotProps) => [
                        createVNode(_component_Card, { style: { "width": "25rem", "overflow": "hidden" } }, {
                          header: withCtx(() => [
                            createVNode("img", {
                              alt: "user header",
                              src: "https://primefaces.org/cdn/primevue/images/usercard.png"
                            })
                          ]),
                          title: withCtx(() => [
                            createTextVNode("Proyecto")
                          ]),
                          subtitle: withCtx(() => [
                            createTextVNode("Descripci\xF3n")
                          ]),
                          content: withCtx(() => [
                            createVNode("p", { class: "m-0" }, " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea consectetur iure iste, reprehenderit aliquam aperiam doloribus nostrum quibusdam, accusamus adipisci similique, soluta dolores vitae dolorem deserunt eaque odit excepturi. Maxime? ")
                          ]),
                          footer: withCtx(() => [
                            createVNode("div", { class: "flex gap-4 mt-1" }, [
                              createVNode(_component_Button, {
                                label: "M\xE1s informaci\xF3n",
                                class: "w-full"
                              })
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["value", "responsiveOptions"])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-12 sm:col-12 md:col-12 lg:col-12 xl:col-12" style="${ssrRenderStyle({ "padding": "0px" })}">`);
      _push(ssrRenderComponent(_component_Card, { style: { "width": "100%" } }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid"${_scopeId}><div class="col-12 flex align-items-center justify-content-center" style="${ssrRenderStyle({ "padding": "0px" })}"${_scopeId}><p${_scopeId}><svg class="controlInstrumentacion" version="1.1" id="L6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"${_scopeId}><rect fill="none" stroke="black" stroke-width="4" x="25" y="25" width="50" height="50"${_scopeId}><animateTransform attributeName="transform" dur="1.5s" from="0 50 50" to="180 50 50" type="rotate" id="strokeBox" attributeType="XML" begin="rectBox.end"${_scopeId}></animateTransform></rect><rect x="27" y="27" fill="#black" width="46" height="50"${_scopeId}><animate attributeName="height" dur="2.3s" attributeType="XML" from="50" to="0" id="rectBox" fill="freeze" begin="0s;strokeBox.end"${_scopeId}></animate></rect></svg></p><p style="${ssrRenderStyle({ "font-size": "40px" })}"${_scopeId}> Software Propietario </p></div><div class="col-12" style="${ssrRenderStyle({ "padding": "0px" })}"${_scopeId}><div class="card"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Carousel, {
              value: products.value,
              numVisible: 3,
              numScroll: 1,
              responsiveOptions: responsiveOptions.value,
              circular: "",
              autoplayInterval: 6e3
            }, {
              item: withCtx((slotProps, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Card, { style: { "width": "25rem", "overflow": "hidden" } }, {
                    header: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png"${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            alt: "user header",
                            src: "https://primefaces.org/cdn/primevue/images/usercard.png"
                          })
                        ];
                      }
                    }),
                    title: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Proyecto`);
                      } else {
                        return [
                          createTextVNode("Proyecto")
                        ];
                      }
                    }),
                    subtitle: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Descripci\xF3n`);
                      } else {
                        return [
                          createTextVNode("Descripci\xF3n")
                        ];
                      }
                    }),
                    content: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p class="m-0"${_scopeId3}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea consectetur iure iste, reprehenderit aliquam aperiam doloribus nostrum quibusdam, accusamus adipisci similique, soluta dolores vitae dolorem deserunt eaque odit excepturi. Maxime? </p>`);
                      } else {
                        return [
                          createVNode("p", { class: "m-0" }, " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea consectetur iure iste, reprehenderit aliquam aperiam doloribus nostrum quibusdam, accusamus adipisci similique, soluta dolores vitae dolorem deserunt eaque odit excepturi. Maxime? ")
                        ];
                      }
                    }),
                    footer: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex gap-4 mt-1"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Button, {
                          label: "M\xE1s informaci\xF3n",
                          class: "w-full"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex gap-4 mt-1" }, [
                            createVNode(_component_Button, {
                              label: "M\xE1s informaci\xF3n",
                              class: "w-full"
                            })
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Card, { style: { "width": "25rem", "overflow": "hidden" } }, {
                      header: withCtx(() => [
                        createVNode("img", {
                          alt: "user header",
                          src: "https://primefaces.org/cdn/primevue/images/usercard.png"
                        })
                      ]),
                      title: withCtx(() => [
                        createTextVNode("Proyecto")
                      ]),
                      subtitle: withCtx(() => [
                        createTextVNode("Descripci\xF3n")
                      ]),
                      content: withCtx(() => [
                        createVNode("p", { class: "m-0" }, " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea consectetur iure iste, reprehenderit aliquam aperiam doloribus nostrum quibusdam, accusamus adipisci similique, soluta dolores vitae dolorem deserunt eaque odit excepturi. Maxime? ")
                      ]),
                      footer: withCtx(() => [
                        createVNode("div", { class: "flex gap-4 mt-1" }, [
                          createVNode(_component_Button, {
                            label: "M\xE1s informaci\xF3n",
                            class: "w-full"
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid" }, [
                createVNode("div", {
                  class: "col-12 flex align-items-center justify-content-center",
                  style: { "padding": "0px" }
                }, [
                  createVNode("p", null, [
                    (openBlock(), createBlock("svg", {
                      class: "controlInstrumentacion",
                      version: "1.1",
                      id: "L6",
                      xmlns: "http://www.w3.org/2000/svg",
                      "xmlns:xlink": "http://www.w3.org/1999/xlink",
                      x: "0px",
                      y: "0px",
                      viewBox: "0 0 100 100",
                      "enable-background": "new 0 0 100 100",
                      "xml:space": "preserve"
                    }, [
                      createVNode("rect", {
                        fill: "none",
                        stroke: "black",
                        "stroke-width": "4",
                        x: "25",
                        y: "25",
                        width: "50",
                        height: "50"
                      }, [
                        createVNode("animateTransform", {
                          attributeName: "transform",
                          dur: "1.5s",
                          from: "0 50 50",
                          to: "180 50 50",
                          type: "rotate",
                          id: "strokeBox",
                          attributeType: "XML",
                          begin: "rectBox.end"
                        })
                      ]),
                      createVNode("rect", {
                        x: "27",
                        y: "27",
                        fill: "#black",
                        width: "46",
                        height: "50"
                      }, [
                        createVNode("animate", {
                          attributeName: "height",
                          dur: "2.3s",
                          attributeType: "XML",
                          from: "50",
                          to: "0",
                          id: "rectBox",
                          fill: "freeze",
                          begin: "0s;strokeBox.end"
                        })
                      ])
                    ]))
                  ]),
                  createVNode("p", { style: { "font-size": "40px" } }, " Software Propietario ")
                ]),
                createVNode("div", {
                  class: "col-12",
                  style: { "padding": "0px" }
                }, [
                  createVNode("div", { class: "card" }, [
                    createVNode(_component_Carousel, {
                      value: products.value,
                      numVisible: 3,
                      numScroll: 1,
                      responsiveOptions: responsiveOptions.value,
                      circular: "",
                      autoplayInterval: 6e3
                    }, {
                      item: withCtx((slotProps) => [
                        createVNode(_component_Card, { style: { "width": "25rem", "overflow": "hidden" } }, {
                          header: withCtx(() => [
                            createVNode("img", {
                              alt: "user header",
                              src: "https://primefaces.org/cdn/primevue/images/usercard.png"
                            })
                          ]),
                          title: withCtx(() => [
                            createTextVNode("Proyecto")
                          ]),
                          subtitle: withCtx(() => [
                            createTextVNode("Descripci\xF3n")
                          ]),
                          content: withCtx(() => [
                            createVNode("p", { class: "m-0" }, " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea consectetur iure iste, reprehenderit aliquam aperiam doloribus nostrum quibusdam, accusamus adipisci similique, soluta dolores vitae dolorem deserunt eaque odit excepturi. Maxime? ")
                          ]),
                          footer: withCtx(() => [
                            createVNode("div", { class: "flex gap-4 mt-1" }, [
                              createVNode(_component_Button, {
                                label: "M\xE1s informaci\xF3n",
                                class: "w-full"
                              })
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["value", "responsiveOptions"])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-12 sm:col-12 md:col-12 lg:col-12 xl:col-12" style="${ssrRenderStyle({ "padding": "0px" })}">`);
      _push(ssrRenderComponent(_component_Card, { style: { "width": "100%" } }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid"${_scopeId}><div class="col-12 flex align-items-center justify-content-center" style="${ssrRenderStyle({ "padding": "0px" })}"${_scopeId}><p${_scopeId}></p><p style="${ssrRenderStyle({ "font-size": "40px" })}"${_scopeId}> Testimonios </p></div><div class="col-12" style="${ssrRenderStyle({ "padding": "0px" })}"${_scopeId}><div class="card"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Carousel, {
              value: products.value,
              numVisible: 3,
              numScroll: 1,
              responsiveOptions: responsiveOptions.value,
              circular: "",
              autoplayInterval: 1e4
            }, {
              item: withCtx((slotProps, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Card, { style: { "width": "25rem", "overflow": "hidden" } }, {
                    header: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4)
                        ;
                      else {
                        return [];
                      }
                    }),
                    title: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="pi pi-file-check"${_scopeId3}></span> Proyecto `);
                      } else {
                        return [
                          createVNode("span", { class: "pi pi-file-check" }),
                          createTextVNode(" Proyecto ")
                        ];
                      }
                    }),
                    content: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p class="m-0"${_scopeId3}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea consectetur iure iste, reprehenderit aliquam aperiam doloribus nostrum quibusdam, accusamus adipisci similique, soluta dolores vitae dolorem deserunt eaque odit excepturi. Maxime? </p>`);
                      } else {
                        return [
                          createVNode("p", { class: "m-0" }, " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea consectetur iure iste, reprehenderit aliquam aperiam doloribus nostrum quibusdam, accusamus adipisci similique, soluta dolores vitae dolorem deserunt eaque odit excepturi. Maxime? ")
                        ];
                      }
                    }),
                    footer: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="" style="${ssrRenderStyle({ "color": "gray" })}"${_scopeId3}><p${_scopeId3}>-Persona</p></div>`);
                      } else {
                        return [
                          createVNode("div", {
                            class: "",
                            style: { "color": "gray" }
                          }, [
                            createVNode("p", null, "-Persona")
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Card, { style: { "width": "25rem", "overflow": "hidden" } }, {
                      header: withCtx(() => []),
                      title: withCtx(() => [
                        createVNode("span", { class: "pi pi-file-check" }),
                        createTextVNode(" Proyecto ")
                      ]),
                      content: withCtx(() => [
                        createVNode("p", { class: "m-0" }, " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea consectetur iure iste, reprehenderit aliquam aperiam doloribus nostrum quibusdam, accusamus adipisci similique, soluta dolores vitae dolorem deserunt eaque odit excepturi. Maxime? ")
                      ]),
                      footer: withCtx(() => [
                        createVNode("div", {
                          class: "",
                          style: { "color": "gray" }
                        }, [
                          createVNode("p", null, "-Persona")
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid" }, [
                createVNode("div", {
                  class: "col-12 flex align-items-center justify-content-center",
                  style: { "padding": "0px" }
                }, [
                  createVNode("p"),
                  createVNode("p", { style: { "font-size": "40px" } }, " Testimonios ")
                ]),
                createVNode("div", {
                  class: "col-12",
                  style: { "padding": "0px" }
                }, [
                  createVNode("div", { class: "card" }, [
                    createVNode(_component_Carousel, {
                      value: products.value,
                      numVisible: 3,
                      numScroll: 1,
                      responsiveOptions: responsiveOptions.value,
                      circular: "",
                      autoplayInterval: 1e4
                    }, {
                      item: withCtx((slotProps) => [
                        createVNode(_component_Card, { style: { "width": "25rem", "overflow": "hidden" } }, {
                          header: withCtx(() => []),
                          title: withCtx(() => [
                            createVNode("span", { class: "pi pi-file-check" }),
                            createTextVNode(" Proyecto ")
                          ]),
                          content: withCtx(() => [
                            createVNode("p", { class: "m-0" }, " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea consectetur iure iste, reprehenderit aliquam aperiam doloribus nostrum quibusdam, accusamus adipisci similique, soluta dolores vitae dolorem deserunt eaque odit excepturi. Maxime? ")
                          ]),
                          footer: withCtx(() => [
                            createVNode("div", {
                              class: "",
                              style: { "color": "gray" }
                            }, [
                              createVNode("p", null, "-Persona")
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["value", "responsiveOptions"])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-12 sm:col-12 md:col-12 lg:col-12 xl:col-12 flex" style="${ssrRenderStyle({ "height": "200px" })}"><div class="firstBanner"><p style="${ssrRenderStyle({ "font-size": "70px" })}">Nuestros Clientes</p></div><div class="fondoSoftware flex"><div class="svg-container i"><svg viewBox="0 0 250 250"><g class="follow"><polygon class="i-follow-c2" stroke="#DD07F4" points="136.658875 196.711 91.625125 170.696 114.126375 157.62475 159.150125 183.6935"></polygon><polygon class="i-follow-c1" stroke="#DD07F4" points="91.6299973 170.639999 91.625125 66.696 114.126375 53.62475 114.126375 157.570312"></polygon><polygon class="i-follow-b2" stroke="#4407F4" points="136.658875 92.711 91.625125 66.696 114.126375 53.62475 159.150125 79.6935"></polygon><polygon class="i-follow-b1" stroke="#4407F4" points="136.658875 92.711 91.625125 66.696 91.635125 170.372656 136.658875 196.441406"></polygon><polygon class="i-follow-a" stroke="#4407F4" points="136.652875 196.705125 136.649125 92.763875 159.150375 79.693875 159.152875 163.026375 159.130375 183.695125"></polygon></g><g class="start"><polygon class="i-start-c2" stroke="#8A9EA3" points="136.658875 196.711 91.625125 170.696 114.126375 157.62475 159.150125 183.6935"></polygon><polygon class="i-start-c1" stroke="#8A9EA3" points="91.6299973 170.639999 91.625125 66.696 114.126375 53.62475 114.126375 157.570312"></polygon><polygon class="i-start-b2" stroke="#055c9f" points="136.658875 92.711 91.625125 66.696 114.126375 53.62475 159.150125 79.6935"></polygon><polygon class="i-start-b1" stroke="#055c9f" points="136.658875 92.711 91.625125 66.696 91.635125 170.372656 136.658875 196.441406"></polygon><polygon class="i-start-a" stroke="#055c9f" points="136.652875 196.705125 136.649125 92.763875 159.150375 79.693875 159.152875 163.026375 159.130375 183.695125"></polygon></g></svg></div><div class="svg-container m"><svg viewBox="0 0 250 250"><g class="follow"><polygon class="m-follow-d" stroke="#DD07F4" points="125.617375 151.270004 125.617375 84.25575 110.719875 141.119995 99.387375 147.660004 80.617375 114.040001 80.617375 177.32825 58.1300011 190.089996 58.124875 86.3445 80.617375 73.327 103.121125 119.25825 125.617375 47.3445 148.082375 34.3745 148.117375 137.970001"></polygon><polygon class="m-follow-c9" stroke="#DD07F4" points="193.082 164 148.117 137.970001 148.082 34.37475 193.082 60.38975"></polygon><polygon class="m-follow-c8" stroke="#DD07F4" points="170.619995 177.220001 125.617 151.270004 148.119995 137.970001 193.119995 164"></polygon><polygon class="m-follow-c7" stroke="#DD07F4" points="170.619995 177.220001 125.617 151.270004 125.619995 84.3717064 170.619995 110.401705"></polygon><polygon class="m-follow-c6" stroke="#DD07F4" points="110.679771 141.119995 155.720001 167.139999 144.389999 173.679993 99.3899994 147.660004"></polygon><polygon class="m-follow-c5" stroke="#DD07F4" points="110.679771 141.119995 155.720001 167.139999 170.619995 110.269997 125.491211 84.2759094"></polygon><polygon class="m-follow-c4" stroke="#DD07F4" points="80.6200027 114.040001 125.620003 140.050003 144.389999 173.679993 99.3899994 147.660004"></polygon><polygon class="m-follow-c3" stroke="#DD07F4" points="125.582 203.4925 103.0895 216.40375 58.1300011 190.089996 80.617 177.07625"></polygon><polygon class="m-follow-c2" stroke="#DD07F4" points="170.582 73.6835 125.617 47.34475 103.12075 119.25725 148.12075 145.27225"></polygon><polygon class="m-follow-c1" stroke="#DD07F4" points="125.582 99.7425 148.12075 145.2725 103.157 118.96125 80.617 73.32625"></polygon><polygon class="m-follow-b3" stroke="#4407F4" points="103.0895 112.771196 103.0895 216.40375 58.12575 190.089996 58.1245 86.3549456"></polygon><polygon class="m-follow-b2" stroke="#4407F4" points="125.582 99.7425 103.0895 112.65375 58.12575 86.34375 80.617 73.32625"></polygon><polygon class="m-follow-b1" stroke="#4407F4" points="170.582 73.6835 125.617 47.34475 148.082 34.37475 193.082 60.38975"></polygon><polygon class="m-follow-a" stroke="#4407F4" points="170.619995 177.284 170.617375 110.269997 155.720001 167.13525 144.389999 173.679993 125.620003 140.0515 125.617375 203.34275 103.124875 216.25525 103.124875 112.359 125.617375 99.3415 148.121125 145.27275 170.617375 73.359 193.082375 60.389 193.119995 164"></polygon></g><g class="start"><polygon class="m-start-d" stroke="#8A9EA3" points="125.617375 151.270004 125.617375 84.25575 110.719875 141.119995 99.387375 147.660004 80.617375 114.040001 80.617375 177.32825 58.1300011 190.089996 58.124875 86.3445 80.617375 73.327 103.121125 119.25825 125.617375 47.3445 148.082375 34.3745 148.117375 137.970001"></polygon><polygon class="m-start-c9" stroke="#8A9EA3" points="193.082 164 148.117 137.970001 148.082 34.37475 193.082 60.38975"></polygon><polygon class="m-start-c8" stroke="#8A9EA3" points="170.619995 177.220001 125.617 151.270004 148.119995 137.970001 193.119995 164"></polygon><polygon class="m-start-c7" stroke="#8A9EA3" points="170.619995 177.220001 125.617 151.270004 125.619995 84.3717064 170.619995 110.401705"></polygon><polygon class="m-start-c6" stroke="#8A9EA3" points="110.679771 141.119995 155.720001 167.139999 144.389999 173.679993 99.3899994 147.660004"></polygon><polygon class="m-start-c5" stroke="#8A9EA3" points="110.679771 141.119995 155.720001 167.139999 170.619995 110.269997 125.491211 84.2759094"></polygon><polygon class="m-start-c4" stroke="#8A9EA3" points="80.6200027 114.040001 125.620003 140.050003 144.389999 173.679993 99.3899994 147.660004"></polygon><polygon class="m-start-c3" stroke="#8A9EA3" points="125.582 203.4925 103.0895 216.40375 58.1300011 190.089996 80.617 177.07625"></polygon><polygon class="m-start-c2" stroke="#8A9EA3" points="170.582 73.6835 125.617 47.34475 103.12075 119.25725 148.12075 145.27225"></polygon><polygon class="m-start-c1" stroke="#8A9EA3" points="125.582 99.7425 148.12075 145.2725 103.157 118.96125 80.617 73.32625"></polygon><polygon class="m-start-b3" stroke="#055c9f" points="103.0895 112.771196 103.0895 216.40375 58.12575 190.089996 58.1245 86.3549456"></polygon><polygon class="m-start-b2" stroke="#055c9f" points="125.582 99.7425 103.0895 112.65375 58.12575 86.34375 80.617 73.32625"></polygon><polygon class="m-start-b1" stroke="#055c9f" points="170.582 73.6835 125.617 47.34475 148.082 34.37475 193.082 60.38975"></polygon><polygon class="m-start-a" stroke="#055c9f" points="170.619995 177.284 170.617375 110.269997 155.720001 167.13525 144.389999 173.679993 125.620003 140.0515 125.617375 203.34275 103.124875 216.25525 103.124875 112.359 125.617375 99.3415 148.121125 145.27275 170.617375 73.359 193.082375 60.389 193.119995 164"></polygon></g></svg></div><div class="svg-container i"><svg viewBox="0 0 250 250"><g class="follow"><polygon class="i-follow-c2" stroke="#DD07F4" points="136.658875 196.711 91.625125 170.696 114.126375 157.62475 159.150125 183.6935"></polygon><polygon class="i-follow-c1" stroke="#DD07F4" points="91.6299973 170.639999 91.625125 66.696 114.126375 53.62475 114.126375 157.570312"></polygon><polygon class="i-follow-b2" stroke="#4407F4" points="136.658875 92.711 91.625125 66.696 114.126375 53.62475 159.150125 79.6935"></polygon><polygon class="i-follow-b1" stroke="#4407F4" points="136.658875 92.711 91.625125 66.696 91.635125 170.372656 136.658875 196.441406"></polygon><polygon class="i-follow-a" stroke="#4407F4" points="136.652875 196.705125 136.649125 92.763875 159.150375 79.693875 159.152875 163.026375 159.130375 183.695125"></polygon></g><g class="start"><polygon class="i-start-c2" stroke="#8A9EA3" points="136.658875 196.711 91.625125 170.696 114.126375 157.62475 159.150125 183.6935"></polygon><polygon class="i-start-c1" stroke="#8A9EA3" points="91.6299973 170.639999 91.625125 66.696 114.126375 53.62475 114.126375 157.570312"></polygon><polygon class="i-start-b2" stroke="#055c9f" points="136.658875 92.711 91.625125 66.696 114.126375 53.62475 159.150125 79.6935"></polygon><polygon class="i-start-b1" stroke="#055c9f" points="136.658875 92.711 91.625125 66.696 91.635125 170.372656 136.658875 196.441406"></polygon><polygon class="i-start-a" stroke="#055c9f" points="136.652875 196.705125 136.649125 92.763875 159.150375 79.693875 159.152875 163.026375 159.130375 183.695125"></polygon></g></svg></div><div class="svg-container m"><svg viewBox="0 0 250 250"><g class="follow"><polygon class="m-follow-d" stroke="#DD07F4" points="125.617375 151.270004 125.617375 84.25575 110.719875 141.119995 99.387375 147.660004 80.617375 114.040001 80.617375 177.32825 58.1300011 190.089996 58.124875 86.3445 80.617375 73.327 103.121125 119.25825 125.617375 47.3445 148.082375 34.3745 148.117375 137.970001"></polygon><polygon class="m-follow-c9" stroke="#DD07F4" points="193.082 164 148.117 137.970001 148.082 34.37475 193.082 60.38975"></polygon><polygon class="m-follow-c8" stroke="#DD07F4" points="170.619995 177.220001 125.617 151.270004 148.119995 137.970001 193.119995 164"></polygon><polygon class="m-follow-c7" stroke="#DD07F4" points="170.619995 177.220001 125.617 151.270004 125.619995 84.3717064 170.619995 110.401705"></polygon><polygon class="m-follow-c6" stroke="#DD07F4" points="110.679771 141.119995 155.720001 167.139999 144.389999 173.679993 99.3899994 147.660004"></polygon><polygon class="m-follow-c5" stroke="#DD07F4" points="110.679771 141.119995 155.720001 167.139999 170.619995 110.269997 125.491211 84.2759094"></polygon><polygon class="m-follow-c4" stroke="#DD07F4" points="80.6200027 114.040001 125.620003 140.050003 144.389999 173.679993 99.3899994 147.660004"></polygon><polygon class="m-follow-c3" stroke="#DD07F4" points="125.582 203.4925 103.0895 216.40375 58.1300011 190.089996 80.617 177.07625"></polygon><polygon class="m-follow-c2" stroke="#DD07F4" points="170.582 73.6835 125.617 47.34475 103.12075 119.25725 148.12075 145.27225"></polygon><polygon class="m-follow-c1" stroke="#DD07F4" points="125.582 99.7425 148.12075 145.2725 103.157 118.96125 80.617 73.32625"></polygon><polygon class="m-follow-b3" stroke="#4407F4" points="103.0895 112.771196 103.0895 216.40375 58.12575 190.089996 58.1245 86.3549456"></polygon><polygon class="m-follow-b2" stroke="#4407F4" points="125.582 99.7425 103.0895 112.65375 58.12575 86.34375 80.617 73.32625"></polygon><polygon class="m-follow-b1" stroke="#4407F4" points="170.582 73.6835 125.617 47.34475 148.082 34.37475 193.082 60.38975"></polygon><polygon class="m-follow-a" stroke="#4407F4" points="170.619995 177.284 170.617375 110.269997 155.720001 167.13525 144.389999 173.679993 125.620003 140.0515 125.617375 203.34275 103.124875 216.25525 103.124875 112.359 125.617375 99.3415 148.121125 145.27275 170.617375 73.359 193.082375 60.389 193.119995 164"></polygon></g><g class="start"><polygon class="m-start-d" stroke="#8A9EA3" points="125.617375 151.270004 125.617375 84.25575 110.719875 141.119995 99.387375 147.660004 80.617375 114.040001 80.617375 177.32825 58.1300011 190.089996 58.124875 86.3445 80.617375 73.327 103.121125 119.25825 125.617375 47.3445 148.082375 34.3745 148.117375 137.970001"></polygon><polygon class="m-start-c9" stroke="#8A9EA3" points="193.082 164 148.117 137.970001 148.082 34.37475 193.082 60.38975"></polygon><polygon class="m-start-c8" stroke="#8A9EA3" points="170.619995 177.220001 125.617 151.270004 148.119995 137.970001 193.119995 164"></polygon><polygon class="m-start-c7" stroke="#8A9EA3" points="170.619995 177.220001 125.617 151.270004 125.619995 84.3717064 170.619995 110.401705"></polygon><polygon class="m-start-c6" stroke="#8A9EA3" points="110.679771 141.119995 155.720001 167.139999 144.389999 173.679993 99.3899994 147.660004"></polygon><polygon class="m-start-c5" stroke="#8A9EA3" points="110.679771 141.119995 155.720001 167.139999 170.619995 110.269997 125.491211 84.2759094"></polygon><polygon class="m-start-c4" stroke="#8A9EA3" points="80.6200027 114.040001 125.620003 140.050003 144.389999 173.679993 99.3899994 147.660004"></polygon><polygon class="m-start-c3" stroke="#8A9EA3" points="125.582 203.4925 103.0895 216.40375 58.1300011 190.089996 80.617 177.07625"></polygon><polygon class="m-start-c2" stroke="#8A9EA3" points="170.582 73.6835 125.617 47.34475 103.12075 119.25725 148.12075 145.27225"></polygon><polygon class="m-start-c1" stroke="#8A9EA3" points="125.582 99.7425 148.12075 145.2725 103.157 118.96125 80.617 73.32625"></polygon><polygon class="m-start-b3" stroke="#055c9f" points="103.0895 112.771196 103.0895 216.40375 58.12575 190.089996 58.1245 86.3549456"></polygon><polygon class="m-start-b2" stroke="#055c9f" points="125.582 99.7425 103.0895 112.65375 58.12575 86.34375 80.617 73.32625"></polygon><polygon class="m-start-b1" stroke="#055c9f" points="170.582 73.6835 125.617 47.34475 148.082 34.37475 193.082 60.38975"></polygon><polygon class="m-start-a" stroke="#055c9f" points="170.619995 177.284 170.617375 110.269997 155.720001 167.13525 144.389999 173.679993 125.620003 140.0515 125.617375 203.34275 103.124875 216.25525 103.124875 112.359 125.617375 99.3415 148.121125 145.27275 170.617375 73.359 193.082375 60.389 193.119995 164"></polygon></g></svg></div><div class="svg-container e"><svg viewBox="0 0 250 250"><g class="follow"><polygon class="e-follow-c" stroke="#DD07F4" points="69.379 183.538875 69.37525 79.598875 136.879 40.625125 136.8765 58.721375 91.8765 84.781375 91.879 109.735125 124.379 91.045125 124.379 108.550003 91.8765 127.281375 91.879 149.861375 136.879 123.837625 136.88025 144.471375"></polygon><polygon class="e-follow-b7" stroke="#DD07F4" points="181.882625 170.317383 136.878875 144.336133 136.878875 123.838 181.882625 149.8805"></polygon><polygon class="e-follow-b6" stroke="#DD07F4" points="136.882625 175.76425 91.878875 149.783 136.878875 123.838 181.882625 149.8805"></polygon><polygon class="e-follow-b5" stroke="#DD07F4" points="169.340125 134.589996 124.367625 108.550003 124.367625 91.0255 169.340125 117.0155"></polygon><polygon class="e-follow-b4" stroke="#DD07F4" points="136.882625 135.76425 91.878875 109.783 124.367625 91.0255 169.340125 117.0155"></polygon><polygon class="e-follow-b3" stroke="#DD07F4" points="181.88025 84.7600021 136.879 58.7200012 136.879 40.624875 181.88025 66.588625"></polygon><polygon class="e-follow-b2" stroke="#4407F4" points="114.379 105.579875 69.37525 79.598625 69.379 183.538625 114.38025 209.503625"></polygon><polygon class="e-follow-b1" stroke="#4407F4" points="114.379 105.579875 69.37525 79.598625 136.879 40.624875 181.88025 66.588625"></polygon><polygon class="e-follow-a" stroke="#4407F4" points="114.382625 209.581375 114.378875 105.640125 181.882625 66.666375 181.880005 84.763875 136.880125 110.823875 136.882625 135.777625 169.382625 117.087625 169.382625 134.589996 136.880125 153.323875 136.882625 175.902625 181.882625 149.880125 181.883875 170.512625"></polygon><polygon class="e-start-c" stroke="#8A9EA3" points="69.379 183.538875 69.37525 79.598875 136.879 40.625125 136.8765 58.721375 91.8765 84.781375 91.879 109.735125 124.379 91.045125 124.379 108.550003 91.8765 127.281375 91.879 149.861375 136.879 123.837625 136.88025 144.471375"></polygon></g><g class="start"><polygon class="e-start-c" stroke="#8A9EA3" points="69.379 183.538875 69.37525 79.598875 136.879 40.625125 136.8765 58.721375 91.8765 84.781375 91.879 109.735125 124.379 91.045125 124.379 108.550003 91.8765 127.281375 91.879 149.861375 136.879 123.837625 136.88025 144.471375"></polygon><polygon class="e-start-b7" stroke="#8A9EA3" points="181.882625 170.317383 136.878875 144.336133 136.878875 123.838 181.882625 149.8805"></polygon><polygon class="e-start-b6" stroke="#8A9EA3" points="136.882625 175.76425 91.878875 149.783 136.878875 123.838 181.882625 149.8805"></polygon><polygon class="e-start-b5" stroke="#8A9EA3" points="169.340125 134.589996 124.367625 108.550003 124.367625 91.0255 169.340125 117.0155"></polygon><polygon class="e-start-b4" stroke="#8A9EA3" points="136.882625 135.76425 91.878875 109.783 124.367625 91.0255 169.340125 117.0155"></polygon><polygon class="e-start-b3" stroke="#8A9EA3" points="181.88025 84.7600021 136.879 58.7200012 136.879 40.624875 181.88025 66.588625"></polygon><polygon class="e-start-b2" stroke="#055c9f" points="114.379 105.579875 69.37525 79.598625 69.379 183.538625 114.38025 209.503625"></polygon><polygon class="e-start-b1" stroke="#055c9f" points="114.379 105.579875 69.37525 79.598625 136.879 40.624875 181.88025 66.588625"></polygon><polygon class="e-start-a" stroke="#055c9f" points="114.382625 209.581375 114.378875 105.640125 181.882625 66.666375 181.880005 84.763875 136.880125 110.823875 136.882625 135.777625 169.382625 117.087625 169.382625 134.589996 136.880125 153.323875 136.882625 175.902625 181.882625 149.880125 181.883875 170.512625"></polygon></g></svg></div><div class="svg-container x"><svg viewBox="0 0 250 250"><g class="follow"><polygon class="x-follow-c6" stroke="#DD07F4" points="119.87925 154.92225 101.0205 131.34725 86.1555 173.37475 63.658 186.34225 90.70175 118.7885 63.658 82.4435 86.158 69.47475 101.0205 104.08225 113.1855 53.8435 135.6855 40.87475 111.7455 106.63975 142.378 141.93225"></polygon><polygon class="x-follow-c5" stroke="#DD07F4" points="108.625 211.818 63.625 186.193 86.125 173.22425 131.125 198.84925"></polygon><polygon class="x-follow-c4" stroke="#DD07F4" points="164.911 179.495 119.8785 154.90125 142.3785 141.9325 187.34475 166.5425"></polygon><polygon class="x-follow-c3" stroke="#DD07F4" points="164.911 179.495 119.8785 154.90125 101.01975 131.34625 145.98725 155.9575"></polygon><polygon class="x-follow-c2" stroke="#DD07F4" points="131.123125 198.999375 86.155625 173.374375 101.019375 131.346875 145.986875 155.956875"></polygon><polygon class="x-follow-c1" stroke="#DD07F4" points="158.152625 79.468125 113.152625 53.843125 101.436523 103.730469 146.436523 129.355469"></polygon><polygon class="x-follow-b3" stroke="#4407F4" points="108.625 108.068 63.625 82.443 86.125 69.47425 131.125 95.09925"></polygon><polygon class="x-follow-b2" stroke="#4407F4" points="158.152625 79.468125 113.152625 53.843125 135.652625 40.874375 180.652625 66.499375"></polygon><polygon class="x-follow-b1" stroke="#4407F4" points="108.625 108.068 63.625 82.443 90.67 119.41425 63.625 186.193 108.625 211.818 135.67 144.413"></polygon><polygon class="x-follow-a" stroke="#4407F4" points="164.911 179.495 145.98725 155.9575 131.1235 199 108.62475 211.9675 135.66975 144.41375 108.62475 108.0675 131.12475 95.09875 145.98725 129.7075 158.15225 79.46875 180.65225 66.5 156.71225 132.265 187.34475 166.5425"></polygon></g><g class="start"><polygon class="x-start-c6" stroke="#8A9EA3" points="119.87925 154.92225 101.0205 131.34725 86.1555 173.37475 63.658 186.34225 90.70175 118.7885 63.658 82.4435 86.158 69.47475 101.0205 104.08225 113.1855 53.8435 135.6855 40.87475 111.7455 106.63975 142.378 141.93225"></polygon><polygon class="x-start-c5" stroke="#8A9EA3" points="108.625 211.818 63.625 186.193 86.125 173.22425 131.125 198.84925"></polygon><polygon class="x-start-c4" stroke="#8A9EA3" points="164.911 179.495 119.8785 154.90125 142.3785 141.9325 187.34475 166.5425"></polygon><polygon class="x-start-c3" stroke="#8A9EA3" points="164.911 179.495 119.8785 154.90125 101.01975 131.34625 145.98725 155.9575"></polygon><polygon class="x-start-c2" stroke="#8A9EA3" points="131.123125 198.999375 86.155625 173.374375 101.019375 131.346875 145.986875 155.956875"></polygon><polygon class="x-start-c1" stroke="#8A9EA3" points="158.152625 79.468125 113.152625 53.843125 101.436523 103.730469 146.436523 129.355469"></polygon><polygon class="x-start-b3" stroke="#055c9f" points="108.625 108.068 63.625 82.443 86.125 69.47425 131.125 95.09925"></polygon><polygon class="x-start-b2" stroke="#055c9f" points="158.152625 79.468125 113.152625 53.843125 135.652625 40.874375 180.652625 66.499375"></polygon><polygon class="x-start-b1" stroke="#055c9f" points="108.625 108.068 63.625 82.443 90.67 119.41425 63.625 186.193 108.625 211.818 135.67 144.413"></polygon><polygon class="x-start-a" stroke="#055c9f" points="164.911 179.495 145.98725 155.9575 131.1235 199 108.62475 211.9675 135.66975 144.41375 108.62475 108.0675 131.12475 95.09875 145.98725 129.7075 158.15225 79.46875 180.65225 66.5 156.71225 132.265 187.34475 166.5425"></polygon></g></svg></div></div></div><div class="col-12 sm:col-12 md:col-12 lg:col-12 xl:col-12 flex align-items-center justify-content-center" style="${ssrRenderStyle({})}">`);
      _push(ssrRenderComponent(_component_Card, { style: { "width": "100%" } }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid"${_scopeId}><div class="col-2 flex align-items-center justify-content-center" style="${ssrRenderStyle({})}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Image, {
              src: "https://logodownload.org/wp-content/uploads/2018/06/pemex-logo.png",
              alt: "Image",
              width: "100",
              preview: ""
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-2 flex align-items-center justify-content-center" style="${ssrRenderStyle({})}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Image, {
              src: "https://4.bp.blogspot.com/-IGIk9K1sSLA/U432dqxhpkI/AAAAAAAABpY/VCFVvIu6xhw/s1600/Asa_logo.jpg",
              alt: "Image",
              width: "240",
              preview: ""
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid" }, [
                createVNode("div", {
                  class: "col-2 flex align-items-center justify-content-center",
                  style: {}
                }, [
                  createVNode(_component_Image, {
                    src: "https://logodownload.org/wp-content/uploads/2018/06/pemex-logo.png",
                    alt: "Image",
                    width: "100",
                    preview: ""
                  })
                ]),
                createVNode("div", {
                  class: "col-2 flex align-items-center justify-content-center",
                  style: {}
                }, [
                  createVNode(_component_Image, {
                    src: "https://4.bp.blogspot.com/-IGIk9K1sSLA/U432dqxhpkI/AAAAAAAABpY/VCFVvIu6xhw/s1600/Asa_logo.jpg",
                    alt: "Image",
                    width: "240",
                    preview: ""
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BwBgXPJy.mjs.map
