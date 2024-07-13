import { _ as __nuxt_component_0 } from './nuxt-link-2X8I7ISh.mjs';
import { c as script$2$1, s as script$6, R as Ripple, a as script$4$1, b as script$5$1, U as UniqueComponentId } from './index-CjJ3OlNo.mjs';
import { focus, findSingle, isTouchDevice } from '@primeuix/utils/dom';
import { resolve, isNotEmpty, isPrintableCharacter, isEmpty, findLastIndex } from '@primeuix/utils/object';
import { ZIndex } from '@primeuix/utils/zindex';
import { useSSRContext, ref, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, withDirectives, createElementBlock, resolveComponent, resolveDirective, Fragment, renderList, createElementVNode, resolveDynamicComponent, normalizeClass, normalizeStyle, renderSlot, normalizeProps, guardReactiveProps } from 'vue';
import { B as BaseStyle, _ as _export_sfc } from './server.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrGetDirectiveProps, ssrRenderSlot } from 'vue/server-renderer';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '@primevue/core/base/style';
import '@primeuix/styled';
import 'node:fs';
import 'node:url';
import '@primeuix/utils/uuid';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@primeuix/utils/eventbus';

var script$5 = {
  name: "BarsIcon",
  "extends": script$4$1
};
var _hoisted_1$4 = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2$3 = [_hoisted_1$4];
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
var theme = function theme2(_ref) {
  var dt = _ref.dt;
  return "\n.p-menubar {\n    display: flex;\n    align-items: center;\n    background: ".concat(dt("menubar.background"), ";\n    border: 1px solid ").concat(dt("menubar.border.color"), ";\n    border-radius: ").concat(dt("menubar.border.radius"), ";\n    color: ").concat(dt("menubar.color"), ";\n    padding: ").concat(dt("menubar.padding"), ";\n    gap: ").concat(dt("menubar.gap"), ";\n}\n\n.p-menubar-start,\n.p-megamenu-end {\n    display: flex;\n    align-items: center;\n}\n\n.p-menubar-root-list,\n.p-menubar-submenu {\n    display: flex;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    outline: 0 none;\n}\n\n.p-menubar-root-list {\n    align-items: center;\n    flex-wrap: wrap;\n    gap: ").concat(dt("menubar.gap"), ";\n}\n\n.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {\n    border-radius: ").concat(dt("menubar.base.item.border.radius"), ";\n}\n\n.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {\n    padding: ").concat(dt("menubar.base.item.padding"), ";\n}\n\n.p-menubar-item-content {\n    transition: background ").concat(dt("menubar.transition.duration"), ", color ").concat(dt("menubar.transition.duration"), ";\n    border-radius: ").concat(dt("menubar.item.border.radius"), ";\n    color: ").concat(dt("menubar.item.color"), ";\n}\n\n.p-menubar-item-link {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    overflow: hidden;\n    position: relative;\n    color: inherit;\n    padding: ").concat(dt("menubar.item.padding"), ";\n    gap: ").concat(dt("menubar.item.gap"), ";\n    user-select: none;\n    outline: 0 none;\n}\n\n.p-menubar-item-label {\n    line-height: 1;\n}\n\n.p-menubar-item-icon {\n    color: ").concat(dt("menubar.item.icon.color"), ";\n}\n\n.p-menubar-submenu-icon {\n    color: ").concat(dt("menubar.submenu.icon.color"), ";\n    margin-left: auto;\n    font-size: ").concat(dt("menubar.submenu.icon.size"), ";\n    width: ").concat(dt("menubar.submenu.icon.size"), ";\n    height: ").concat(dt("menubar.submenu.icon.size"), ";\n}\n\n.p-menubar-item.p-focus > .p-menubar-item-content {\n    color: ").concat(dt("menubar.item.focus.color"), ";\n    background: ").concat(dt("menubar.item.focus.background"), ";\n}\n\n.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon {\n    color: ").concat(dt("menubar.item.icon.focus.color"), ";\n}\n\n.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {\n    color: ").concat(dt("menubar.submenu.icon.focus.color"), ";\n}\n\n.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {\n    color: ").concat(dt("menubar.item.focus.color"), ";\n    background: ").concat(dt("menubar.item.focus.background"), ";\n}\n\n.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {\n    color: ").concat(dt("menubar.item.icon.focus.color"), ";\n}\n\n.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {\n    color: ").concat(dt("menubar.submenu.icon.focus.color"), ";\n}\n\n.p-menubar-item-active > .p-menubar-item-content {\n    color: ").concat(dt("menubar.item.active.color"), ";\n    background: ").concat(dt("menubar.item.active.background"), ";\n}\n\n.p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon {\n    color: ").concat(dt("menubar.item.icon.active.color"), ";\n}\n\n.p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {\n    color: ").concat(dt("menubar.submenu.icon.active.color"), ";\n}\n\n.p-menubar-submenu {\n    display: none;\n    position: absolute;\n    min-width: 12.5rem;\n    z-index: 1;\n    background: ").concat(dt("menubar.submenu.background"), ";\n    border: 1px solid ").concat(dt("menubar.submenu.border.color"), ";\n    border-radius: ").concat(dt("menubar.border.radius"), ";\n    box-shadow: ").concat(dt("menubar.submenu.shadow"), ";\n    color: ").concat(dt("menubar.submenu.color"), ";\n    flex-direction: column;\n    padding: ").concat(dt("menubar.submenu.padding"), ";\n    gap: ").concat(dt("menubar.submenu.gap"), ";\n}\n\n.p-menubar-submenu .p-menubar-separator {\n    border-top: 1px solid ").concat(dt("menubar.separator.border.color"), ";\n}\n\n.p-menubar-submenu .p-menubar-item {\n    position: relative;\n}\n\n .p-menubar-submenu > .p-menubar-item-active > .p-menubar-submenu {\n    display: block;\n    left: 100%;\n    top: 0;\n}\n\n.p-menubar-end {\n    margin-left: auto;\n    align-self: center;\n}\n\n.p-menubar-button {\n    display: none;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    width: ").concat(dt("menubar.mobile.button.size"), ";\n    height: ").concat(dt("menubar.mobile.button.size"), ";\n    position: relative;\n    color: ").concat(dt("menubar.mobile.button.color"), ";\n    border: 0 none;\n    background: transparent;\n    border-radius: ").concat(dt("menubar.mobile.button.border.radius"), ";\n    transition: background ").concat(dt("menubar.transition.duration"), ", color ").concat(dt("menubar.transition.duration"), ", outline-color ").concat(dt("menubar.transition.duration"), ";\n    outline-color: transparent;\n}\n\n.p-menubar-button:hover {\n    color: ").concat(dt("menubar.mobile.button.hover.color"), ";\n    background: ").concat(dt("menubar.mobile.button.hover.background"), ";\n}\n\n.p-menubar-button:focus-visible {\n    box-shadow: ").concat(dt("menubar.mobile.button.focus.ring.shadow"), ";\n    outline: ").concat(dt("menubar.mobile.button.focus.ring.width"), " ").concat(dt("menubar.mobile.button.focus.ring.style"), " ").concat(dt("menubar.mobile.button.focus.ring.color"), ";\n    outline-offset: ").concat(dt("menubar.mobile.button.focus.ring.offset"), ";\n}\n\n.p-menubar-mobile {\n    position: relative;\n}\n\n.p-menubar-mobile .p-menubar-button {\n    display: flex;\n}\n\n.p-menubar-mobile .p-menubar-root-list {\n    position: absolute;\n    display: none;\n    width: 100%;\n    padding: ").concat(dt("menubar.submenu.padding"), ";\n    background: ").concat(dt("menubar.submenu.background"), ";\n    border: 1px solid ").concat(dt("menubar.submenu.border.color"), ";\n    box-shadow: ").concat(dt("menubar.submenu.shadow"), ";\n}\n\n.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {\n    border-radius: ").concat(dt("menubar.item.border.radius"), ";\n}\n\n.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {\n    padding: ").concat(dt("menubar.item.padding"), ";\n}\n\n.p-menubar-mobile-active .p-menubar-root-list {\n    display: flex;\n    flex-direction: column;\n    top: 100%;\n    left: 0;\n    z-index: 1;\n}\n\n.p-menubar-mobile .p-menubar-root-list .p-menubar-item {\n    width: 100%;\n    position: static;\n}\n\n.p-menubar-mobile .p-menubar-root-list .p-menubar-separator {\n    border-top: 1px solid ").concat(dt("menubar.separator.border.color"), ";\n}\n\n.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon {\n    margin-left: auto;\n    transition: transform 0.2s;\n}\n\n.p-menubar-mobile .p-menubar-root-list > .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {\n    transform: rotate(-180deg);\n}\n\n.p-menubar-mobile .p-menubar-submenu .p-menubar-submenu-icon {\n    transition: transform 0.2s;\n    transform: rotate(90deg);\n}\n\n.p-menubar-mobile  .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {\n    transform: rotate(-90deg);\n}\n\n.p-menubar-mobile .p-menubar-submenu {\n    width: 100%;\n    position: static;\n    box-shadow: none;\n    border: 0 none;\n    padding-left: ").concat(dt("menubar.submenu.mobile.indent"), ";\n}\n");
};
var inlineStyles = {
  submenu: function submenu(_ref2) {
    var instance = _ref2.instance, processedItem = _ref2.processedItem;
    return {
      display: instance.isItemActive(processedItem) ? "flex" : "none"
    };
  }
};
var classes = {
  root: function root(_ref3) {
    var instance = _ref3.instance;
    return ["p-menubar p-component", {
      "p-menubar-mobile": instance.queryMatches,
      "p-menubar-mobile-active": instance.mobileActive
    }];
  },
  start: "p-menubar-start",
  button: "p-menubar-button",
  rootList: "p-menubar-root-list",
  item: function item(_ref4) {
    var instance = _ref4.instance, processedItem = _ref4.processedItem;
    return ["p-menubar-item", {
      "p-menubar-item-active": instance.isItemActive(processedItem),
      "p-focus": instance.isItemFocused(processedItem),
      "p-disabled": instance.isItemDisabled(processedItem)
    }];
  },
  itemContent: "p-menubar-item-content",
  itemLink: "p-menubar-item-link",
  itemIcon: "p-menubar-item-icon",
  itemLabel: "p-menubar-item-label",
  submenuIcon: "p-menubar-submenu-icon",
  submenu: "p-menubar-submenu",
  separator: "p-menubar-separator",
  end: "p-menubar-end"
};
var MenubarStyle = BaseStyle.extend({
  name: "menubar",
  theme,
  classes,
  inlineStyles
});
var script$4 = {
  name: "AngleDownIcon",
  "extends": script$4$1
};
var _hoisted_1$3 = /* @__PURE__ */ createElementVNode("path", {
  d: "M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2$2 = [_hoisted_1$3];
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
  name: "AngleRightIcon",
  "extends": script$4$1
};
var _hoisted_1$2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2$1 = [_hoisted_1$2];
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
var script$2 = {
  name: "BaseMenubar",
  "extends": script$5$1,
  props: {
    model: {
      type: Array,
      "default": null
    },
    buttonProps: {
      type: null,
      "default": null
    },
    breakpoint: {
      type: String,
      "default": "960px"
    },
    ariaLabelledby: {
      type: String,
      "default": null
    },
    ariaLabel: {
      type: String,
      "default": null
    }
  },
  style: MenubarStyle,
  provide: function provide() {
    return {
      $pcMenubar: this,
      $parentInstance: this
    };
  }
};
var script$1 = {
  name: "MenubarSub",
  hostName: "Menubar",
  "extends": script$5$1,
  emits: ["item-mouseenter", "item-click", "item-mousemove"],
  props: {
    items: {
      type: Array,
      "default": null
    },
    root: {
      type: Boolean,
      "default": false
    },
    popup: {
      type: Boolean,
      "default": false
    },
    mobileActive: {
      type: Boolean,
      "default": false
    },
    templates: {
      type: Object,
      "default": null
    },
    level: {
      type: Number,
      "default": 0
    },
    menuId: {
      type: String,
      "default": null
    },
    focusedItemId: {
      type: String,
      "default": null
    },
    activeItemPath: {
      type: Object,
      "default": null
    }
  },
  list: null,
  methods: {
    getItemId: function getItemId(processedItem) {
      return "".concat(this.menuId, "_").concat(processedItem.key);
    },
    getItemKey: function getItemKey(processedItem) {
      return this.getItemId(processedItem);
    },
    getItemProp: function getItemProp(processedItem, name, params) {
      return processedItem && processedItem.item ? resolve(processedItem.item[name], params) : void 0;
    },
    getItemLabel: function getItemLabel(processedItem) {
      return this.getItemProp(processedItem, "label");
    },
    getItemLabelId: function getItemLabelId(processedItem) {
      return "".concat(this.menuId, "_").concat(processedItem.key, "_label");
    },
    getPTOptions: function getPTOptions(processedItem, index, key) {
      return this.ptm(key, {
        context: {
          item: processedItem,
          index,
          active: this.isItemActive(processedItem),
          focused: this.isItemFocused(processedItem),
          disabled: this.isItemDisabled(processedItem),
          level: this.level
        }
      });
    },
    isItemActive: function isItemActive(processedItem) {
      return this.activeItemPath.some(function(path) {
        return path.key === processedItem.key;
      });
    },
    isItemVisible: function isItemVisible(processedItem) {
      return this.getItemProp(processedItem, "visible") !== false;
    },
    isItemDisabled: function isItemDisabled(processedItem) {
      return this.getItemProp(processedItem, "disabled");
    },
    isItemFocused: function isItemFocused(processedItem) {
      return this.focusedItemId === this.getItemId(processedItem);
    },
    isItemGroup: function isItemGroup(processedItem) {
      return isNotEmpty(processedItem.items);
    },
    onItemClick: function onItemClick(event, processedItem) {
      this.getItemProp(processedItem, "command", {
        originalEvent: event,
        item: processedItem.item
      });
      this.$emit("item-click", {
        originalEvent: event,
        processedItem,
        isFocus: true
      });
    },
    onItemMouseEnter: function onItemMouseEnter(event, processedItem) {
      this.$emit("item-mouseenter", {
        originalEvent: event,
        processedItem
      });
    },
    onItemMouseMove: function onItemMouseMove(event, processedItem) {
      this.$emit("item-mousemove", {
        originalEvent: event,
        processedItem
      });
    },
    getAriaSetSize: function getAriaSetSize() {
      var _this = this;
      return this.items.filter(function(processedItem) {
        return _this.isItemVisible(processedItem) && !_this.getItemProp(processedItem, "separator");
      }).length;
    },
    getAriaPosInset: function getAriaPosInset(index) {
      var _this2 = this;
      return index - this.items.slice(0, index).filter(function(processedItem) {
        return _this2.isItemVisible(processedItem) && _this2.getItemProp(processedItem, "separator");
      }).length + 1;
    },
    getMenuItemProps: function getMenuItemProps(processedItem, index) {
      return {
        action: mergeProps({
          "class": this.cx("itemLink"),
          tabindex: -1,
          "aria-hidden": true
        }, this.getPTOptions(processedItem, index, "itemLink")),
        icon: mergeProps({
          "class": [this.cx("itemIcon"), this.getItemProp(processedItem, "icon")]
        }, this.getPTOptions(processedItem, index, "itemIcon")),
        label: mergeProps({
          "class": this.cx("itemLabel")
        }, this.getPTOptions(processedItem, index, "itemLabel")),
        submenuicon: mergeProps({
          "class": this.cx("submenuIcon")
        }, this.getPTOptions(processedItem, index, "submenuIcon"))
      };
    }
  },
  components: {
    AngleRightIcon: script$3,
    AngleDownIcon: script$4
  },
  directives: {
    ripple: Ripple
  }
};
var _hoisted_1$1 = ["id", "aria-label", "aria-disabled", "aria-expanded", "aria-haspopup", "aria-level", "aria-setsize", "aria-posinset", "data-p-active", "data-p-focused", "data-p-disabled"];
var _hoisted_2 = ["onClick", "onMouseenter", "onMousemove"];
var _hoisted_3 = ["href", "target"];
var _hoisted_4 = ["id"];
var _hoisted_5 = ["id"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_MenubarSub = resolveComponent("MenubarSub", true);
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("ul", mergeProps({
    "class": $props.level === 0 ? _ctx.cx("rootList") : _ctx.cx("submenu")
  }, $props.level === 0 ? _ctx.ptm("rootList") : _ctx.ptm("submenu")), [(openBlock(true), createElementBlock(Fragment, null, renderList($props.items, function(processedItem, index) {
    return openBlock(), createElementBlock(Fragment, {
      key: $options.getItemKey(processedItem)
    }, [$options.isItemVisible(processedItem) && !$options.getItemProp(processedItem, "separator") ? (openBlock(), createElementBlock("li", mergeProps({
      key: 0,
      id: $options.getItemId(processedItem),
      style: $options.getItemProp(processedItem, "style"),
      "class": [_ctx.cx("item", {
        processedItem
      }), $options.getItemProp(processedItem, "class")],
      role: "menuitem",
      "aria-label": $options.getItemLabel(processedItem),
      "aria-disabled": $options.isItemDisabled(processedItem) || void 0,
      "aria-expanded": $options.isItemGroup(processedItem) ? $options.isItemActive(processedItem) : void 0,
      "aria-haspopup": $options.isItemGroup(processedItem) && !$options.getItemProp(processedItem, "to") ? "menu" : void 0,
      "aria-level": $props.level + 1,
      "aria-setsize": $options.getAriaSetSize(),
      "aria-posinset": $options.getAriaPosInset(index),
      ref_for: true
    }, $options.getPTOptions(processedItem, index, "item"), {
      "data-p-active": $options.isItemActive(processedItem),
      "data-p-focused": $options.isItemFocused(processedItem),
      "data-p-disabled": $options.isItemDisabled(processedItem)
    }), [createElementVNode("div", mergeProps({
      "class": _ctx.cx("itemContent"),
      onClick: function onClick($event) {
        return $options.onItemClick($event, processedItem);
      },
      onMouseenter: function onMouseenter($event) {
        return $options.onItemMouseEnter($event, processedItem);
      },
      onMousemove: function onMousemove($event) {
        return $options.onItemMouseMove($event, processedItem);
      },
      ref_for: true
    }, $options.getPTOptions(processedItem, index, "itemContent")), [!$props.templates.item ? withDirectives((openBlock(), createElementBlock("a", mergeProps({
      key: 0,
      href: $options.getItemProp(processedItem, "url"),
      "class": _ctx.cx("itemLink"),
      target: $options.getItemProp(processedItem, "target"),
      tabindex: "-1",
      "aria-hidden": "true",
      ref_for: true
    }, $options.getPTOptions(processedItem, index, "itemLink")), [$props.templates.itemicon ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.itemicon), {
      key: 0,
      item: processedItem.item,
      "class": normalizeClass(_ctx.cx("itemIcon"))
    }, null, 8, ["item", "class"])) : $options.getItemProp(processedItem, "icon") ? (openBlock(), createElementBlock("span", mergeProps({
      key: 1,
      "class": [_ctx.cx("itemIcon"), $options.getItemProp(processedItem, "icon")],
      ref_for: true
    }, $options.getPTOptions(processedItem, index, "itemIcon")), null, 16)) : createCommentVNode("", true), createElementVNode("span", mergeProps({
      id: $options.getItemLabelId(processedItem),
      "class": _ctx.cx("itemLabel"),
      ref_for: true
    }, $options.getPTOptions(processedItem, index, "itemLabel")), toDisplayString($options.getItemLabel(processedItem)), 17, _hoisted_4), $options.getItemProp(processedItem, "items") ? (openBlock(), createElementBlock(Fragment, {
      key: 2
    }, [$props.templates.submenuicon ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.submenuicon), {
      key: 0,
      root: $props.root,
      active: $options.isItemActive(processedItem),
      "class": normalizeClass(_ctx.cx("submenuIcon"))
    }, null, 8, ["root", "active", "class"])) : (openBlock(), createBlock(resolveDynamicComponent($props.root ? "AngleDownIcon" : "AngleRightIcon"), mergeProps({
      key: 1,
      "class": _ctx.cx("submenuIcon"),
      ref_for: true
    }, $options.getPTOptions(processedItem, index, "submenuIcon")), null, 16, ["class"]))], 64)) : createCommentVNode("", true)], 16, _hoisted_3)), [[_directive_ripple]]) : (openBlock(), createBlock(resolveDynamicComponent($props.templates.item), {
      key: 1,
      item: processedItem.item,
      root: $props.root,
      hasSubmenu: $options.getItemProp(processedItem, "items"),
      label: $options.getItemLabel(processedItem),
      props: $options.getMenuItemProps(processedItem, index)
    }, null, 8, ["item", "root", "hasSubmenu", "label", "props"]))], 16, _hoisted_2), $options.isItemVisible(processedItem) && $options.isItemGroup(processedItem) ? (openBlock(), createBlock(_component_MenubarSub, {
      key: 0,
      id: $options.getItemId(processedItem) + "_list",
      menuId: $props.menuId,
      role: "menu",
      style: normalizeStyle(_ctx.sx("submenu", true, {
        processedItem
      })),
      focusedItemId: $props.focusedItemId,
      items: processedItem.items,
      mobileActive: $props.mobileActive,
      activeItemPath: $props.activeItemPath,
      templates: $props.templates,
      level: $props.level + 1,
      "aria-labelledby": $options.getItemLabelId(processedItem),
      pt: _ctx.pt,
      unstyled: _ctx.unstyled,
      onItemClick: _cache[0] || (_cache[0] = function($event) {
        return _ctx.$emit("item-click", $event);
      }),
      onItemMouseenter: _cache[1] || (_cache[1] = function($event) {
        return _ctx.$emit("item-mouseenter", $event);
      }),
      onItemMousemove: _cache[2] || (_cache[2] = function($event) {
        return _ctx.$emit("item-mousemove", $event);
      })
    }, null, 8, ["id", "menuId", "style", "focusedItemId", "items", "mobileActive", "activeItemPath", "templates", "level", "aria-labelledby", "pt", "unstyled"])) : createCommentVNode("", true)], 16, _hoisted_1$1)) : createCommentVNode("", true), $options.isItemVisible(processedItem) && $options.getItemProp(processedItem, "separator") ? (openBlock(), createElementBlock("li", mergeProps({
      key: 1,
      id: $options.getItemId(processedItem),
      "class": [_ctx.cx("separator"), $options.getItemProp(processedItem, "class")],
      style: $options.getItemProp(processedItem, "style"),
      role: "separator",
      ref_for: true
    }, _ctx.ptm("separator")), null, 16, _hoisted_5)) : createCommentVNode("", true)], 64);
  }), 128))], 16);
}
script$1.render = render$1;
var script = {
  name: "Menubar",
  "extends": script$2,
  inheritAttrs: false,
  emits: ["focus", "blur"],
  matchMediaListener: null,
  data: function data() {
    return {
      id: this.$attrs.id,
      mobileActive: false,
      focused: false,
      focusedItemInfo: {
        index: -1,
        level: 0,
        parentKey: ""
      },
      activeItemPath: [],
      dirty: false,
      query: null,
      queryMatches: false
    };
  },
  watch: {
    "$attrs.id": function $attrsId(newValue) {
      this.id = newValue || UniqueComponentId();
    },
    activeItemPath: function activeItemPath(newPath) {
      if (isNotEmpty(newPath)) {
        this.bindOutsideClickListener();
        this.bindResizeListener();
      } else {
        this.unbindOutsideClickListener();
        this.unbindResizeListener();
      }
    }
  },
  outsideClickListener: null,
  container: null,
  menubar: null,
  mounted: function mounted() {
    this.id = this.id || UniqueComponentId();
    this.bindMatchMediaListener();
  },
  beforeUnmount: function beforeUnmount() {
    this.mobileActive = false;
    this.unbindOutsideClickListener();
    this.unbindResizeListener();
    this.unbindMatchMediaListener();
    if (this.container) {
      ZIndex.clear(this.container);
    }
    this.container = null;
  },
  methods: {
    getItemProp: function getItemProp2(item2, name) {
      return item2 ? resolve(item2[name]) : void 0;
    },
    getItemLabel: function getItemLabel2(item2) {
      return this.getItemProp(item2, "label");
    },
    isItemDisabled: function isItemDisabled2(item2) {
      return this.getItemProp(item2, "disabled");
    },
    isItemVisible: function isItemVisible2(item2) {
      return this.getItemProp(item2, "visible") !== false;
    },
    isItemGroup: function isItemGroup2(item2) {
      return isNotEmpty(this.getItemProp(item2, "items"));
    },
    isItemSeparator: function isItemSeparator(item2) {
      return this.getItemProp(item2, "separator");
    },
    getProccessedItemLabel: function getProccessedItemLabel(processedItem) {
      return processedItem ? this.getItemLabel(processedItem.item) : void 0;
    },
    isProccessedItemGroup: function isProccessedItemGroup(processedItem) {
      return processedItem && isNotEmpty(processedItem.items);
    },
    toggle: function toggle(event) {
      var _this = this;
      if (this.mobileActive) {
        this.mobileActive = false;
        ZIndex.clear(this.menubar);
        this.hide();
      } else {
        this.mobileActive = true;
        ZIndex.set("menu", this.menubar, this.$primevue.config.zIndex.menu);
        setTimeout(function() {
          _this.show();
        }, 1);
      }
      this.bindOutsideClickListener();
      event.preventDefault();
    },
    show: function show() {
      focus(this.menubar);
    },
    hide: function hide(event, isFocus) {
      var _this2 = this;
      if (this.mobileActive) {
        this.mobileActive = false;
        setTimeout(function() {
          focus(_this2.$refs.menubutton);
        }, 0);
      }
      this.activeItemPath = [];
      this.focusedItemInfo = {
        index: -1,
        level: 0,
        parentKey: ""
      };
      isFocus && focus(this.menubar);
      this.dirty = false;
    },
    onFocus: function onFocus(event) {
      this.focused = true;
      this.focusedItemInfo = this.focusedItemInfo.index !== -1 ? this.focusedItemInfo : {
        index: this.findFirstFocusedItemIndex(),
        level: 0,
        parentKey: ""
      };
      this.$emit("focus", event);
    },
    onBlur: function onBlur(event) {
      this.focused = false;
      this.focusedItemInfo = {
        index: -1,
        level: 0,
        parentKey: ""
      };
      this.searchValue = "";
      this.dirty = false;
      this.$emit("blur", event);
    },
    onKeyDown: function onKeyDown(event) {
      var metaKey = event.metaKey || event.ctrlKey;
      switch (event.code) {
        case "ArrowDown":
          this.onArrowDownKey(event);
          break;
        case "ArrowUp":
          this.onArrowUpKey(event);
          break;
        case "ArrowLeft":
          this.onArrowLeftKey(event);
          break;
        case "ArrowRight":
          this.onArrowRightKey(event);
          break;
        case "Home":
          this.onHomeKey(event);
          break;
        case "End":
          this.onEndKey(event);
          break;
        case "Space":
          this.onSpaceKey(event);
          break;
        case "Enter":
        case "NumpadEnter":
          this.onEnterKey(event);
          break;
        case "Escape":
          this.onEscapeKey(event);
          break;
        case "Tab":
          this.onTabKey(event);
          break;
        case "PageDown":
        case "PageUp":
        case "Backspace":
        case "ShiftLeft":
        case "ShiftRight":
          break;
        default:
          if (!metaKey && isPrintableCharacter(event.key)) {
            this.searchItems(event, event.key);
          }
          break;
      }
    },
    onItemChange: function onItemChange(event) {
      var processedItem = event.processedItem, isFocus = event.isFocus;
      if (isEmpty(processedItem))
        return;
      var index = processedItem.index, key = processedItem.key, level = processedItem.level, parentKey = processedItem.parentKey, items = processedItem.items;
      var grouped = isNotEmpty(items);
      var activeItemPath2 = this.activeItemPath.filter(function(p) {
        return p.parentKey !== parentKey && p.parentKey !== key;
      });
      grouped && activeItemPath2.push(processedItem);
      this.focusedItemInfo = {
        index,
        level,
        parentKey
      };
      this.activeItemPath = activeItemPath2;
      grouped && (this.dirty = true);
      isFocus && focus(this.menubar);
    },
    onItemClick: function onItemClick2(event) {
      var originalEvent = event.originalEvent, processedItem = event.processedItem;
      var grouped = this.isProccessedItemGroup(processedItem);
      var root2 = isEmpty(processedItem.parent);
      var selected = this.isSelected(processedItem);
      if (selected) {
        var index = processedItem.index, key = processedItem.key, level = processedItem.level, parentKey = processedItem.parentKey;
        this.activeItemPath = this.activeItemPath.filter(function(p) {
          return key !== p.key && key.startsWith(p.key);
        });
        this.focusedItemInfo = {
          index,
          level,
          parentKey
        };
        this.dirty = !root2;
        focus(this.menubar);
      } else {
        if (grouped) {
          this.onItemChange(event);
        } else {
          var rootProcessedItem = root2 ? processedItem : this.activeItemPath.find(function(p) {
            return p.parentKey === "";
          });
          this.hide(originalEvent);
          this.changeFocusedItemIndex(originalEvent, rootProcessedItem ? rootProcessedItem.index : -1);
          this.mobileActive = false;
          focus(this.menubar);
        }
      }
    },
    onItemMouseEnter: function onItemMouseEnter2(event) {
      if (this.dirty) {
        this.onItemChange(event);
      }
    },
    onItemMouseMove: function onItemMouseMove2(event) {
      if (this.focused) {
        this.changeFocusedItemIndex(event, event.processedItem.index);
      }
    },
    menuButtonClick: function menuButtonClick(event) {
      this.toggle(event);
    },
    menuButtonKeydown: function menuButtonKeydown(event) {
      (event.code === "Enter" || event.code === "NumpadEnter" || event.code === "Space") && this.menuButtonClick(event);
    },
    onArrowDownKey: function onArrowDownKey(event) {
      var processedItem = this.visibleItems[this.focusedItemInfo.index];
      var root2 = processedItem ? isEmpty(processedItem.parent) : null;
      if (root2) {
        var grouped = this.isProccessedItemGroup(processedItem);
        if (grouped) {
          this.onItemChange({
            originalEvent: event,
            processedItem
          });
          this.focusedItemInfo = {
            index: -1,
            parentKey: processedItem.key
          };
          this.onArrowRightKey(event);
        }
      } else {
        var itemIndex = this.focusedItemInfo.index !== -1 ? this.findNextItemIndex(this.focusedItemInfo.index) : this.findFirstFocusedItemIndex();
        this.changeFocusedItemIndex(event, itemIndex);
      }
      event.preventDefault();
    },
    onArrowUpKey: function onArrowUpKey(event) {
      var _this3 = this;
      var processedItem = this.visibleItems[this.focusedItemInfo.index];
      var root2 = isEmpty(processedItem.parent);
      if (root2) {
        var grouped = this.isProccessedItemGroup(processedItem);
        if (grouped) {
          this.onItemChange({
            originalEvent: event,
            processedItem
          });
          this.focusedItemInfo = {
            index: -1,
            parentKey: processedItem.key
          };
          var itemIndex = this.findLastItemIndex();
          this.changeFocusedItemIndex(event, itemIndex);
        }
      } else {
        var parentItem = this.activeItemPath.find(function(p) {
          return p.key === processedItem.parentKey;
        });
        if (this.focusedItemInfo.index === 0) {
          this.focusedItemInfo = {
            index: -1,
            parentKey: parentItem ? parentItem.parentKey : ""
          };
          this.searchValue = "";
          this.onArrowLeftKey(event);
          this.activeItemPath = this.activeItemPath.filter(function(p) {
            return p.parentKey !== _this3.focusedItemInfo.parentKey;
          });
        } else {
          var _itemIndex = this.focusedItemInfo.index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo.index) : this.findLastFocusedItemIndex();
          this.changeFocusedItemIndex(event, _itemIndex);
        }
      }
      event.preventDefault();
    },
    onArrowLeftKey: function onArrowLeftKey(event) {
      var _this4 = this;
      var processedItem = this.visibleItems[this.focusedItemInfo.index];
      var parentItem = processedItem ? this.activeItemPath.find(function(p) {
        return p.key === processedItem.parentKey;
      }) : null;
      if (parentItem) {
        this.onItemChange({
          originalEvent: event,
          processedItem: parentItem
        });
        this.activeItemPath = this.activeItemPath.filter(function(p) {
          return p.parentKey !== _this4.focusedItemInfo.parentKey;
        });
        event.preventDefault();
      } else {
        var itemIndex = this.focusedItemInfo.index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo.index) : this.findLastFocusedItemIndex();
        this.changeFocusedItemIndex(event, itemIndex);
        event.preventDefault();
      }
    },
    onArrowRightKey: function onArrowRightKey(event) {
      var processedItem = this.visibleItems[this.focusedItemInfo.index];
      var parentItem = processedItem ? this.activeItemPath.find(function(p) {
        return p.key === processedItem.parentKey;
      }) : null;
      if (parentItem) {
        var grouped = this.isProccessedItemGroup(processedItem);
        if (grouped) {
          this.onItemChange({
            originalEvent: event,
            processedItem
          });
          this.focusedItemInfo = {
            index: -1,
            parentKey: processedItem.key
          };
          this.onArrowDownKey(event);
        }
      } else {
        var itemIndex = this.focusedItemInfo.index !== -1 ? this.findNextItemIndex(this.focusedItemInfo.index) : this.findFirstFocusedItemIndex();
        this.changeFocusedItemIndex(event, itemIndex);
        event.preventDefault();
      }
    },
    onHomeKey: function onHomeKey(event) {
      this.changeFocusedItemIndex(event, this.findFirstItemIndex());
      event.preventDefault();
    },
    onEndKey: function onEndKey(event) {
      this.changeFocusedItemIndex(event, this.findLastItemIndex());
      event.preventDefault();
    },
    onEnterKey: function onEnterKey(event) {
      if (this.focusedItemInfo.index !== -1) {
        var element = findSingle(this.menubar, 'li[id="'.concat("".concat(this.focusedItemId), '"]'));
        var anchorElement = element && findSingle(element, 'a[data-pc-section="itemlink"]');
        anchorElement ? anchorElement.click() : element && element.click();
        var processedItem = this.visibleItems[this.focusedItemInfo.index];
        var grouped = this.isProccessedItemGroup(processedItem);
        !grouped && (this.focusedItemInfo.index = this.findFirstFocusedItemIndex());
      }
      event.preventDefault();
    },
    onSpaceKey: function onSpaceKey(event) {
      this.onEnterKey(event);
    },
    onEscapeKey: function onEscapeKey(event) {
      if (this.focusedItemInfo.level !== 0) {
        var _focusedItemInfo = this.focusedItemInfo;
        this.hide(event, false);
        this.focusedItemInfo = {
          index: Number(_focusedItemInfo.parentKey.split("_")[0]),
          level: 0,
          parentKey: ""
        };
      }
      event.preventDefault();
    },
    onTabKey: function onTabKey(event) {
      if (this.focusedItemInfo.index !== -1) {
        var processedItem = this.visibleItems[this.focusedItemInfo.index];
        var grouped = this.isProccessedItemGroup(processedItem);
        !grouped && this.onItemChange({
          originalEvent: event,
          processedItem
        });
      }
      this.hide();
    },
    bindOutsideClickListener: function bindOutsideClickListener() {
      var _this5 = this;
      if (!this.outsideClickListener) {
        this.outsideClickListener = function(event) {
          var isOutsideContainer = _this5.container && !_this5.container.contains(event.target);
          var isOutsideTarget = !(_this5.target && (_this5.target === event.target || _this5.target.contains(event.target)));
          if (isOutsideContainer && isOutsideTarget) {
            _this5.hide();
          }
        };
        (void 0).addEventListener("click", this.outsideClickListener);
      }
    },
    unbindOutsideClickListener: function unbindOutsideClickListener() {
      if (this.outsideClickListener) {
        (void 0).removeEventListener("click", this.outsideClickListener);
        this.outsideClickListener = null;
      }
    },
    bindResizeListener: function bindResizeListener() {
      var _this6 = this;
      if (!this.resizeListener) {
        this.resizeListener = function(event) {
          if (!isTouchDevice()) {
            _this6.hide(event, true);
          }
          _this6.mobileActive = false;
        };
        (void 0).addEventListener("resize", this.resizeListener);
      }
    },
    unbindResizeListener: function unbindResizeListener() {
      if (this.resizeListener) {
        (void 0).removeEventListener("resize", this.resizeListener);
        this.resizeListener = null;
      }
    },
    bindMatchMediaListener: function bindMatchMediaListener() {
      var _this7 = this;
      if (!this.matchMediaListener) {
        var query = matchMedia("(max-width: ".concat(this.breakpoint, ")"));
        this.query = query;
        this.queryMatches = query.matches;
        this.matchMediaListener = function() {
          _this7.queryMatches = query.matches;
          _this7.mobileActive = false;
        };
        this.query.addEventListener("change", this.matchMediaListener);
      }
    },
    unbindMatchMediaListener: function unbindMatchMediaListener() {
      if (this.matchMediaListener) {
        this.query.removeEventListener("change", this.matchMediaListener);
        this.matchMediaListener = null;
      }
    },
    isItemMatched: function isItemMatched(processedItem) {
      var _this$getProccessedIt;
      return this.isValidItem(processedItem) && ((_this$getProccessedIt = this.getProccessedItemLabel(processedItem)) === null || _this$getProccessedIt === void 0 ? void 0 : _this$getProccessedIt.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()));
    },
    isValidItem: function isValidItem(processedItem) {
      return !!processedItem && !this.isItemDisabled(processedItem.item) && !this.isItemSeparator(processedItem.item) && this.isItemVisible(processedItem.item);
    },
    isValidSelectedItem: function isValidSelectedItem(processedItem) {
      return this.isValidItem(processedItem) && this.isSelected(processedItem);
    },
    isSelected: function isSelected(processedItem) {
      return this.activeItemPath.some(function(p) {
        return p.key === processedItem.key;
      });
    },
    findFirstItemIndex: function findFirstItemIndex() {
      var _this8 = this;
      return this.visibleItems.findIndex(function(processedItem) {
        return _this8.isValidItem(processedItem);
      });
    },
    findLastItemIndex: function findLastItemIndex() {
      var _this9 = this;
      return findLastIndex(this.visibleItems, function(processedItem) {
        return _this9.isValidItem(processedItem);
      });
    },
    findNextItemIndex: function findNextItemIndex(index) {
      var _this10 = this;
      var matchedItemIndex = index < this.visibleItems.length - 1 ? this.visibleItems.slice(index + 1).findIndex(function(processedItem) {
        return _this10.isValidItem(processedItem);
      }) : -1;
      return matchedItemIndex > -1 ? matchedItemIndex + index + 1 : index;
    },
    findPrevItemIndex: function findPrevItemIndex(index) {
      var _this11 = this;
      var matchedItemIndex = index > 0 ? findLastIndex(this.visibleItems.slice(0, index), function(processedItem) {
        return _this11.isValidItem(processedItem);
      }) : -1;
      return matchedItemIndex > -1 ? matchedItemIndex : index;
    },
    findSelectedItemIndex: function findSelectedItemIndex() {
      var _this12 = this;
      return this.visibleItems.findIndex(function(processedItem) {
        return _this12.isValidSelectedItem(processedItem);
      });
    },
    findFirstFocusedItemIndex: function findFirstFocusedItemIndex() {
      var selectedIndex = this.findSelectedItemIndex();
      return selectedIndex < 0 ? this.findFirstItemIndex() : selectedIndex;
    },
    findLastFocusedItemIndex: function findLastFocusedItemIndex() {
      var selectedIndex = this.findSelectedItemIndex();
      return selectedIndex < 0 ? this.findLastItemIndex() : selectedIndex;
    },
    searchItems: function searchItems(event, _char) {
      var _this13 = this;
      this.searchValue = (this.searchValue || "") + _char;
      var itemIndex = -1;
      var matched = false;
      if (this.focusedItemInfo.index !== -1) {
        itemIndex = this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(processedItem) {
          return _this13.isItemMatched(processedItem);
        });
        itemIndex = itemIndex === -1 ? this.visibleItems.slice(0, this.focusedItemInfo.index).findIndex(function(processedItem) {
          return _this13.isItemMatched(processedItem);
        }) : itemIndex + this.focusedItemInfo.index;
      } else {
        itemIndex = this.visibleItems.findIndex(function(processedItem) {
          return _this13.isItemMatched(processedItem);
        });
      }
      if (itemIndex !== -1) {
        matched = true;
      }
      if (itemIndex === -1 && this.focusedItemInfo.index === -1) {
        itemIndex = this.findFirstFocusedItemIndex();
      }
      if (itemIndex !== -1) {
        this.changeFocusedItemIndex(event, itemIndex);
      }
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
      this.searchTimeout = setTimeout(function() {
        _this13.searchValue = "";
        _this13.searchTimeout = null;
      }, 500);
      return matched;
    },
    changeFocusedItemIndex: function changeFocusedItemIndex(event, index) {
      if (this.focusedItemInfo.index !== index) {
        this.focusedItemInfo.index = index;
        this.scrollInView();
      }
    },
    scrollInView: function scrollInView() {
      var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1;
      var id = index !== -1 ? "".concat(this.id, "_").concat(index) : this.focusedItemId;
      var element = findSingle(this.menubar, 'li[id="'.concat(id, '"]'));
      if (element) {
        element.scrollIntoView && element.scrollIntoView({
          block: "nearest",
          inline: "start"
        });
      }
    },
    createProcessedItems: function createProcessedItems(items) {
      var _this14 = this;
      var level = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      var parent = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var parentKey = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "";
      var processedItems2 = [];
      items && items.forEach(function(item2, index) {
        var key = (parentKey !== "" ? parentKey + "_" : "") + index;
        var newItem = {
          item: item2,
          index,
          level,
          key,
          parent,
          parentKey
        };
        newItem["items"] = _this14.createProcessedItems(item2.items, level + 1, newItem, key);
        processedItems2.push(newItem);
      });
      return processedItems2;
    },
    containerRef: function containerRef(el) {
      this.container = el;
    },
    menubarRef: function menubarRef(el) {
      this.menubar = el ? el.$el : void 0;
    }
  },
  computed: {
    processedItems: function processedItems() {
      return this.createProcessedItems(this.model || []);
    },
    visibleItems: function visibleItems() {
      var _this15 = this;
      var processedItem = this.activeItemPath.find(function(p) {
        return p.key === _this15.focusedItemInfo.parentKey;
      });
      return processedItem ? processedItem.items : this.processedItems;
    },
    focusedItemId: function focusedItemId() {
      return this.focusedItemInfo.index !== -1 ? "".concat(this.id).concat(isNotEmpty(this.focusedItemInfo.parentKey) ? "_" + this.focusedItemInfo.parentKey : "", "_").concat(this.focusedItemInfo.index) : null;
    }
  },
  components: {
    MenubarSub: script$1,
    BarsIcon: script$5
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
var _hoisted_1 = ["aria-haspopup", "aria-expanded", "aria-controls", "aria-label"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_BarsIcon = resolveComponent("BarsIcon");
  var _component_MenubarSub = resolveComponent("MenubarSub");
  return openBlock(), createElementBlock("div", mergeProps({
    ref: $options.containerRef,
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [_ctx.$slots.start ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("start")
  }, _ctx.ptm("start")), [renderSlot(_ctx.$slots, "start")], 16)) : createCommentVNode("", true), renderSlot(_ctx.$slots, _ctx.$slots.button ? "button" : "menubutton", {
    id: $data.id,
    "class": normalizeClass(_ctx.cx("button")),
    toggleCallback: function toggleCallback(event) {
      return $options.menuButtonClick(event);
    }
  }, function() {
    var _ctx$$primevue$config;
    return [_ctx.model && _ctx.model.length > 0 ? (openBlock(), createElementBlock("a", mergeProps({
      key: 0,
      ref: "menubutton",
      role: "button",
      tabindex: "0",
      "class": _ctx.cx("button"),
      "aria-haspopup": _ctx.model.length && _ctx.model.length > 0 ? true : false,
      "aria-expanded": $data.mobileActive,
      "aria-controls": $data.id,
      "aria-label": (_ctx$$primevue$config = _ctx.$primevue.config.locale.aria) === null || _ctx$$primevue$config === void 0 ? void 0 : _ctx$$primevue$config.navigation,
      onClick: _cache[0] || (_cache[0] = function($event) {
        return $options.menuButtonClick($event);
      }),
      onKeydown: _cache[1] || (_cache[1] = function($event) {
        return $options.menuButtonKeydown($event);
      })
    }, _objectSpread(_objectSpread({}, _ctx.buttonProps), _ctx.ptm("button"))), [renderSlot(_ctx.$slots, _ctx.$slots.buttonicon ? "buttonicon" : "menubuttonicon", {}, function() {
      return [createVNode(_component_BarsIcon, normalizeProps(guardReactiveProps(_ctx.ptm("buttonicon"))), null, 16)];
    })], 16, _hoisted_1)) : createCommentVNode("", true)];
  }), createVNode(_component_MenubarSub, {
    ref: $options.menubarRef,
    id: $data.id + "_list",
    role: "menubar",
    items: $options.processedItems,
    templates: _ctx.$slots,
    root: true,
    mobileActive: $data.mobileActive,
    tabindex: "0",
    "aria-activedescendant": $data.focused ? $options.focusedItemId : void 0,
    menuId: $data.id,
    focusedItemId: $data.focused ? $options.focusedItemId : void 0,
    activeItemPath: $data.activeItemPath,
    level: 0,
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-label": _ctx.ariaLabel,
    pt: _ctx.pt,
    unstyled: _ctx.unstyled,
    onFocus: $options.onFocus,
    onBlur: $options.onBlur,
    onKeydown: $options.onKeyDown,
    onItemClick: $options.onItemClick,
    onItemMouseenter: $options.onItemMouseEnter,
    onItemMousemove: $options.onItemMouseMove
  }, null, 8, ["id", "items", "templates", "mobileActive", "aria-activedescendant", "menuId", "focusedItemId", "activeItemPath", "aria-labelledby", "aria-label", "pt", "unstyled", "onFocus", "onBlur", "onKeydown", "onItemClick", "onItemMouseenter", "onItemMousemove"]), _ctx.$slots.end ? (openBlock(), createElementBlock("div", mergeProps({
    key: 1,
    "class": _ctx.cx("end")
  }, _ctx.ptm("end")), [renderSlot(_ctx.$slots, "end")], 16)) : createCommentVNode("", true)], 16);
}
script.render = render;
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    id: "Capa_1",
    class: "logoImi",
    "data-name": "Capa 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 3840 2160"
  }, _attrs))}><g><g><path class="cls-1" d="m1289.14,747.99h-.71c-26.98.35-49.63,21.71-51.56,48.62-1.04,14.48,3.81,28.27,13.65,38.85,9.86,10.59,23.93,16.66,38.62,16.66,29.28,0,53.1-23.2,53.1-51.72s-23.82-52.41-53.09-52.41Zm-.56,11.78c.18,0,.37,0,.55,0,.65,0,1.28.07,1.92.09-.82-.04-1.64-.1-2.47-.09Z"></path><path class="cls-1" d="m1287.52,895.37h-21.87c-9.88,0-17.91,8.03-17.91,17.91v334.83c0,9.88,8.03,17.91,17.91,17.91h46.96c9.88,0,17.91-8.03,17.91-17.91v-309.73c0-23.71-19.29-43-43-43Zm-24.25,358.39c.73.31,1.54.48,2.39.48-.85,0-1.65-.17-2.39-.48Zm0-346.13c.73-.31,1.54-.48,2.39-.48-.85,0-1.65.17-2.39.48Z"></path><path class="cls-1" d="m1784.29,887.79c-44.18,0-79.03,17.97-103.73,53.45-21.42-35.47-55.75-53.45-102.19-53.45-34.88,0-66.53,12.92-88.56,35.81-6.12-16.51-22.09-28.23-40.46-28.23h-17.74c-9.88,0-17.91,8.03-17.91,17.91v334.83c0,9.88,8.03,17.91,17.91,17.91h46.96c9.88,0,17.91-8.03,17.91-17.91v-179.81c0-60.2,26.74-99.1,68.11-99.1,45.48,0,55.02,38.16,55.02,70.18v208.73c0,9.88,8.03,17.91,17.91,17.91h46.96c9.88,0,17.91-8.03,17.91-17.91v-184.57c.62-57.31,27.35-94.34,68.11-94.34,45.48,0,55.02,38.16,55.02,70.18v208.73c0,9.88,8.03,17.91,17.91,17.91h46.96c9.88,0,17.91-8.03,17.91-17.91v-218.37c0-42.23-10.99-77.62-31.77-102.36-21.76-25.89-53.66-39.58-92.26-39.58Zm-94.71,363.74c.66-.98,1.05-2.16,1.05-3.43,0,1.27-.39,2.45-1.05,3.43Zm1.27-195.69c.37-7.51,1.18-14.64,2.39-21.39-1.21,6.75-2.02,13.89-2.39,21.39Zm77.76-155.41c5.07-.58,10.29-.87,15.67-.87-5.38,0-10.6.29-15.67.87Z"></path><path class="cls-1" d="m2027.39,852.12c29.28,0,53.1-23.2,53.1-51.72s-23.82-52.41-53.09-52.41h-.71c-26.98.35-49.63,21.71-51.56,48.62-1.04,14.48,3.81,28.27,13.65,38.84,9.86,10.59,23.93,16.66,38.63,16.66Zm0-92.35c.65,0,1.29.07,1.94.09-.83-.04-1.65-.1-2.49-.09.19,0,.37,0,.56,0Z"></path><path class="cls-1" d="m2031.91,895.37h-28c-9.88,0-17.91,8.03-17.91,17.91v334.83c0,9.88,8.03,17.91,17.91,17.91h46.96c9.88,0,17.91-8.03,17.91-17.91v-315.87c0-20.33-16.54-36.87-36.87-36.87Z"></path></g><g><path class="cls-2" d="m2522.54,887.79c-44.18,0-79.03,17.97-103.73,53.45-21.42-35.47-55.75-53.45-102.19-53.45-34.88,0-66.53,12.92-88.56,35.81-6.12-16.51-22.09-28.23-40.46-28.23h-17.74c-9.88,0-17.91,8.03-17.91,17.91v334.83c0,9.88,8.03,17.91,17.91,17.91h46.96c9.88,0,17.91-8.03,17.91-17.91v-179.81c0-60.2,26.73-99.1,68.11-99.1,45.48,0,55.02,38.16,55.02,70.18v208.73c0,9.88,8.03,17.91,17.91,17.91h46.96c9.88,0,17.91-8.03,17.91-17.91v-184.57c.62-57.31,27.35-94.34,68.11-94.34,45.48,0,55.02,38.16,55.02,70.18v208.73c0,9.88,8.03,17.91,17.91,17.91h46.96c9.88,0,17.91-8.03,17.91-17.91v-218.37c0-42.23-10.99-77.62-31.77-102.36-21.76-25.89-53.66-39.58-92.26-39.58Zm-334.93,19.35c3.82,0,7.49.69,10.89,1.95-3.4-1.26-7.07-1.95-10.89-1.95Zm42.3,32.29c2.63-3.38,5.5-6.6,8.59-9.63-3.09,3.03-5.96,6.25-8.59,9.63Zm84.3,18.74c24.95,3.47,42.46,18.76,50.49,44.6-8.03-25.83-25.54-41.13-50.49-44.6Zm149.19,15.37c12.61-10.51,28.07-16.12,45.37-16.12-17.3,0-32.77,5.62-45.37,16.12Z"></path><path class="cls-2" d="m2873.07,887.79c-53.04,0-96.75,18.68-129.92,55.51-32.65,35.57-49.21,82.03-49.21,138.08s16.83,103.5,50.02,138.9c33.16,35.37,76.59,53.31,129.11,53.31,72.6,0,128.06-33.82,156.18-95.22,4-8.74,3.28-18.79-1.92-26.89-5.23-8.14-14.12-13-23.78-13h-24.73c-10.75,0-20.44,6.03-25.29,15.74-13.68,27.4-39.54,40.73-79.08,40.73-47.96,0-82.73-27.41-92.99-73.33-.43-1.93.39-3.33.92-3.99.52-.65,1.69-1.75,3.63-1.75h228.33c15.56,0,28.21-12.66,28.21-28.21v-11.8c0-116.01-64.94-188.08-169.48-188.08Zm91,271.68c-1.98,3.96-4.17,7.67-6.58,11.12,2.41-3.46,4.6-7.16,6.58-11.12Zm-89.62,47.24h0c-4.37,0-8.65-.21-12.83-.62,4.18.41,8.46.62,12.83.62Zm-104.43-90.01c-.29,1.18-.44,2.41-.46,3.66.01-1.25.17-2.48.46-3.66Zm-.05,7.48c2.16,9.65,5.3,18.58,9.35,26.73-4.04-8.15-7.19-17.08-9.35-26.73Zm126-167.39c-4.35-.84-8.84-1.44-13.47-1.79,4.63.34,9.12.94,13.47,1.79Zm-111.8,80.61c-.52-.69-1.3-2.14-.73-4.04,12.62-42.53,45.29-66.93,89.63-66.93s77.21,25.21,84.47,67.44c.31,1.83-.51,3.13-1.03,3.75-.53.62-1.69,1.67-3.59,1.67h-164.98c-2.05,0-3.24-1.19-3.77-1.9Zm168.75,13.67h0c3.82,0,7.29-1.29,10.06-3.43-2.77,2.14-6.24,3.43-10.06,3.43Z"></path><path class="cls-2" d="m3401.87,1238.1l-109.66-162.93,102.1-151.91c3.7-5.5,4.06-12.56.94-18.41-3.12-5.85-9.17-9.49-15.81-9.49h-55.49c-5.93,0-11.46,2.92-14.8,7.82l-71.04,104.2-70.41-104.14c-3.33-4.93-8.88-7.88-14.84-7.88h-55.52c-6.62,0-12.67,3.63-15.79,9.47s-2.78,12.89.9,18.39l101.51,151.95-109.06,162.97c-3.68,5.51-4.03,12.55-.91,18.4,3.12,5.84,9.17,9.47,15.8,9.47h55.51c5.95,0,11.49-2.94,14.83-7.87l77.99-115.18,78.63,115.24c3.34,4.89,8.87,7.82,14.79,7.82h55.48c6.63,0,12.69-3.64,15.81-9.49,3.12-5.86,2.75-12.91-.95-18.42Zm-16.28-324.62c-.03,1.09-.37,2.19-1.05,3.21.68-1.02,1.02-2.12,1.05-3.21Z"></path></g><g><path class="cls-2" d="m483.45,876.25l.77.95,4.39,5.42.49.61.55.56c7,7.06,16.98,10.65,29.64,10.65,27.78,0,61.84-17.3,62.17-17.47l193.6-105.21,235.07,129.67-157.86,85.9c-.4.22-40.18,23.27-47.54,49.88-2.35,8.48-1.38,16.73,2.8,23.87l3.06,5.28c4.28,7.38,12.3,11.97,20.91,11.97,4.04,0,8.06-1.02,11.61-2.95l220.49-119.98c20.24-11.01,32.36-31.1,32.43-53.72.07-22.63-11.94-42.78-32.11-53.9l-257.72-142.16c-9.43-5.2-20.18-7.95-31.1-7.95h0c-10.78,0-21.41,2.68-30.74,7.76l-252.21,137.06c-5.74,3.12-9.86,8.27-11.61,14.5-1.74,6.19-.92,12.66,2.31,18.23l.61,1.05Zm348.06,186.43c-.16,0-.32-.02-.48-.03.43.02.86.02,1.29-.02-.27.03-.54.05-.81.05Zm248.89-161.06h0c-.02,5.26-.91,10.33-2.6,15.08,1.69-4.75,2.58-9.82,2.6-15.08Zm-302.89-146.38l257.72,142.16-257.72-142.16c-.37-.2-.76-.36-1.16-.46.4.1.79.25,1.16.46Zm-2.4-41.95s.05,0,.08,0c-.53,0-1.07.03-1.6.04.51-.02,1.02-.05,1.52-.05Zm-201.11,149.93l198.73-108s.09-.03.14-.05c-.04.02-.09.03-.14.05l-198.73,108c-.11.06-.28.15-.47.24.19-.1.35-.18.47-.24Zm-52.51,15.53c-.74.03-1.47.05-2.19.05-.09,0-.17,0-.26,0,.81,0,1.62,0,2.45-.04Z"></path><path class="cls-2" d="m1069.61,1021.28h-6.17c-9.88,0-18.71,3.66-25.56,10.58-11.83,11.96-17.33,33.45-16.33,63.86.01.39.02.68.03.88v171.02s-244.64,124.04-244.64,124.04c-4.73,2.4-10.16,3.67-15.72,3.67s-11.2-1.32-16-3.81l-.23-.12-.24-.11c-1.53-.73-154.04-73.75-202.64-100.45-36.24-19.91-35.86-33.38-35.28-53.77.08-2.67.16-5.42.16-8.26v-219.74c.01-.22.03-.5.05-.83.48-7.81,1.94-31.58-12.71-46.81-5.2-5.4-14.58-11.84-29.77-11.84h-5.61c-13.17,0-23.89,10.19-23.89,22.72v303.27c0,19.54,11.5,37.64,30.01,47.26l245.1,127.25c15.45,8.02,33.1,12.26,51.02,12.26s34.9-4.08,50.13-11.8l251.63-127.59c18.83-9.55,30.53-27.76,30.53-47.52v-231.44c0-12.53-10.72-22.72-23.89-22.72Zm-578.59,207.53c0,3.1-.1,6.17-.19,9.24.08-3.07.19-6.14.19-9.24h0Zm270.19,217.9c-.82,0-1.63-.05-2.45-.07.82.02,1.64.07,2.46.07h0Zm276.34-350.21c0-.37-.03-1.19-.07-2.38.04,1.19.07,2.01.07,2.38h0Z"></path><path class="cls-2" d="m722.95,1129.25v149.81c-.21,8.91-.26,51.31,17.22,69.25,5.84,5.99,13.15,9.16,21.14,9.16h5.96c12.53,0,22.72-10.19,22.72-22.72v-243.48c0-19.56-10.58-37.68-27.62-47.29l-213.38-120.39c-3.4-1.92-7.26-2.93-11.16-2.93h0c-8.19,0-15.77,4.43-19.79,11.56l-3.36,5.96-.68,1.2-.46,1.3c-3.23,9.18-5.25,27.49,17.43,47.05,9.5,8.19,19.58,13.44,21.98,14.64l142.47,78.67c26.89,16,27.54,44.86,27.52,48.11v.04s0,.09,0,.09Zm-185.51-192.93c.13,0,.26-.03.4-.03.23,0,.46.02.7.04-.36-.04-.73-.04-1.09-.02Zm3.87.89c-.38-.21-.77-.38-1.17-.51.4.14.79.3,1.17.51l213.38,120.39-213.38-120.39Z"></path></g></g><g><path class="cls-1" d="m1490.01,1386.34h-9.69v-73.39h9.69v73.39Z"></path><path class="cls-1" d="m1520.83,1341.39c4.4-6.46,10.45-9.69,18.14-9.69,6.25,0,10.77,1.63,13.56,4.9,2.78,3.26,4.17,8.06,4.17,14.38v35.36h-8.76v-31.34c0-2.61-.09-4.66-.26-6.13s-.6-3.06-1.29-4.74c-.69-1.68-1.86-2.9-3.5-3.66-1.65-.76-3.78-1.13-6.39-1.13-10.1,0-15.15,6.39-15.15,19.17v27.83h-8.76v-53.19h8.25v8.25Z"></path><path class="cls-1" d="m1585.66,1341.39c4.4-6.46,10.45-9.69,18.14-9.69,6.25,0,10.77,1.63,13.56,4.9s4.17,8.06,4.17,14.38v35.36h-8.76v-31.34c0-2.61-.09-4.66-.26-6.13s-.6-3.06-1.29-4.74c-.69-1.68-1.86-2.9-3.51-3.66-1.65-.76-3.78-1.13-6.39-1.13-10.1,0-15.15,6.39-15.15,19.17v27.83h-8.76v-53.19h8.25v8.25Z"></path><path class="cls-1" d="m1684.3,1338.92c4.47,4.88,6.7,11.72,6.7,20.51s-2.23,16.01-6.7,21.03c-4.47,5.02-10.76,7.52-18.86,7.52s-14.47-2.47-19.07-7.42c-4.6-4.95-6.91-11.82-6.91-20.62s2.34-15.63,7.01-20.72c4.67-5.08,11.03-7.63,19.07-7.63s14.29,2.44,18.76,7.32Zm-31.23,5.67c-3.02,3.78-4.54,8.83-4.54,15.15s1.5,11.63,4.48,15.31,7.16,5.51,12.52,5.51,9.19-1.86,12.11-5.57c2.92-3.71,4.38-8.83,4.38-15.36s-1.49-11.36-4.48-15.1c-2.99-3.75-7.06-5.62-12.22-5.62s-9.24,1.89-12.27,5.67Z"></path><path class="cls-1" d="m1713.56,1333.15l15.05,44.63,14.64-44.63h9.17l-19.48,53.19h-9.38l-19.79-53.19h9.79Z"></path><path class="cls-1" d="m1815.09,1386.13c-1.79.69-3.78,1.03-5.98,1.03-5.02,0-7.59-2.61-7.73-7.83-5.02,5.63-11.44,8.45-19.28,8.45-5.22,0-9.36-1.34-12.42-4.02-3.06-2.68-4.59-6.36-4.59-11.03,0-9.48,6.29-15.02,18.86-16.6.83-.14,2.03-.28,3.61-.41,5.98-.69,9.66-1.48,11.03-2.37,1.58-1.1,2.37-2.99,2.37-5.67,0-5.84-4.02-8.76-12.06-8.76-4.12,0-7.25.84-9.38,2.52-2.13,1.68-3.4,4.45-3.81,8.3h-8.56c.14-5.7,2.16-10.14,6.08-13.3,3.92-3.16,9.31-4.74,16.18-4.74,7.49,0,13.06,1.72,16.7,5.15,1.17,1.1,2.03,2.54,2.58,4.33s.86,3.25.93,4.38c.07,1.13.1,2.84.1,5.1,0,2.61-.07,6.56-.21,11.85-.14,5.29-.21,9.24-.21,11.85,0,1.93.26,3.28.77,4.07s1.46,1.19,2.83,1.19c.55,0,1.27-.1,2.16-.31v6.8Zm-16.08-26.18c-.69.34-1.56.62-2.63.82-1.07.21-1.79.36-2.16.46s-1.29.24-2.73.41c-1.44.17-2.2.26-2.27.26-2.13.28-3.52.46-4.17.57-.65.1-1.89.39-3.71.87-1.82.48-3.11,1.03-3.87,1.65s-1.49,1.53-2.22,2.73c-.72,1.2-1.08,2.63-1.08,4.28,0,2.75.94,4.91,2.83,6.49,1.89,1.58,4.48,2.37,7.78,2.37,4.19,0,7.94-1.24,11.24-3.71s4.95-5.4,4.95-8.76v-9.69c-.62.48-1.27.89-1.96,1.24Z"></path><path class="cls-1" d="m1869.36,1382.21c-4.09,3.78-9.4,5.67-15.93,5.67-8.04,0-14.26-2.49-18.66-7.47-4.4-4.98-6.6-11.63-6.6-19.95,0-8.86,2.3-15.89,6.91-21.08,4.6-5.19,10.82-7.78,18.66-7.78,6.53,0,11.75,1.63,15.67,4.9,3.92,3.26,6.22,7.92,6.91,13.97h-9.07c-1.58-7.7-6.05-11.54-13.4-11.54-5.08,0-9.1,1.87-12.06,5.62-2.96,3.74-4.43,8.81-4.43,15.2s1.41,11.54,4.23,15.25c2.82,3.71,6.7,5.57,11.65,5.57,3.99,0,7.23-1.17,9.74-3.5,2.51-2.34,4.11-5.7,4.79-10.1h8.87c-.76,6.39-3.18,11.48-7.27,15.26Z"></path><path class="cls-1" d="m1903,1323.66h-8.87v-10.72h8.87v10.72Zm0,62.67h-8.87v-53.19h8.87v53.19Z"></path><path class="cls-1" d="m1921.24,1359.74c0-3.92.55-7.58,1.65-10.98s2.75-6.36,4.95-8.86c2.2-2.51,4.91-4.48,8.14-5.93,3.23-1.44,6.94-2.16,11.13-2.16s7.99.72,11.18,2.16c3.2,1.44,5.89,3.42,8.09,5.93,2.2,2.51,3.85,5.46,4.95,8.86,1.1,3.4,1.65,7.06,1.65,10.98s-.55,7.56-1.65,10.93c-1.1,3.37-2.75,6.31-4.95,8.81-2.2,2.51-4.9,4.47-8.09,5.88-3.2,1.41-6.92,2.11-11.18,2.11s-7.9-.7-11.13-2.11c-3.23-1.41-5.94-3.37-8.14-5.88-2.2-2.51-3.85-5.45-4.95-8.81-1.1-3.37-1.65-7.01-1.65-10.93Zm9.28,0c0,3.23.43,6.1,1.29,8.61.86,2.51,2.04,4.6,3.56,6.29,1.51,1.68,3.28,2.97,5.31,3.87,2.03.89,4.17,1.34,6.44,1.34s4.42-.45,6.44-1.34c2.03-.89,3.8-2.18,5.31-3.87,1.51-1.68,2.7-3.78,3.56-6.29.86-2.51,1.29-5.38,1.29-8.61s-.43-6.1-1.29-8.61c-.86-2.51-2.04-4.62-3.56-6.34-1.51-1.72-3.28-3.02-5.31-3.92s-4.17-1.34-6.44-1.34-4.42.45-6.44,1.34-3.8,2.2-5.31,3.92c-1.51,1.72-2.7,3.83-3.56,6.34-.86,2.51-1.29,5.38-1.29,8.61Zm30.82-52.78h-11.24l-9.9,16.7h6.6l14.53-16.7Z"></path><path class="cls-1" d="m1999.06,1341.39c4.4-6.46,10.45-9.69,18.14-9.69,6.25,0,10.77,1.63,13.56,4.9,2.78,3.26,4.17,8.06,4.17,14.38v35.36h-8.76v-31.34c0-2.61-.09-4.66-.26-6.13s-.6-3.06-1.29-4.74c-.69-1.68-1.86-2.9-3.51-3.66-1.65-.76-3.78-1.13-6.39-1.13-10.1,0-15.15,6.39-15.15,19.17v27.83h-8.76v-53.19h8.25v8.25Z"></path><path class="cls-1" d="m2113.06,1393.14c-.89,2.4-1.67,4.28-2.32,5.62-.65,1.34-1.58,2.82-2.78,4.43-1.2,1.62-2.65,2.78-4.33,3.51-1.68.72-3.66,1.08-5.93,1.08-1.72,0-3.88-.31-6.49-.93v-7.83c2.54.76,4.43,1.13,5.67,1.13,2.89,0,4.95-1.48,6.18-4.43l4.12-9.69-21.13-52.88h9.9l15.77,42.37,14.95-42.37h9.17l-22.78,59.99Z"></path><path class="cls-1" d="m2239.52,1321.39h-24.64v64.94h-9.69v-64.94h-24.64v-8.45h58.96v8.45Z"></path><path class="cls-1" d="m2264.57,1388.09c-7.83,0-13.97-2.44-18.4-7.32-4.43-4.88-6.65-11.65-6.65-20.31s2.29-15.55,6.85-20.87c4.57-5.33,10.53-7.99,17.88-7.99,8.18,0,14.24,2.77,18.19,8.3,3.95,5.53,5.93,12.52,5.93,20.98v1.24h-40l-.1.62c0,5.63,1.48,10.07,4.43,13.3,2.95,3.23,7.01,4.84,12.16,4.84,3.85,0,6.89-.89,9.12-2.68s3.97-4.67,5.21-8.66h8.56c-2.68,12.37-10.41,18.56-23.19,18.56Zm10.1-44.99c-2.68-2.85-6.22-4.28-10.62-4.28s-7.8,1.44-10.62,4.33c-2.82,2.89-4.5,6.84-5.05,11.85h30.92c-.41-5.08-1.96-9.05-4.64-11.9Z"></path><path class="cls-1" d="m2343.67,1382.21c-4.09,3.78-9.4,5.67-15.93,5.67-8.04,0-14.26-2.49-18.66-7.47-4.4-4.98-6.6-11.63-6.6-19.95,0-8.86,2.3-15.89,6.91-21.08,4.6-5.19,10.82-7.78,18.66-7.78,6.53,0,11.75,1.63,15.67,4.9,3.92,3.26,6.22,7.92,6.91,13.97h-9.07c-1.58-7.7-6.05-11.54-13.4-11.54-5.08,0-9.1,1.87-12.06,5.62-2.96,3.74-4.43,8.81-4.43,15.2s1.41,11.54,4.23,15.25c2.82,3.71,6.7,5.57,11.65,5.57,3.99,0,7.23-1.17,9.74-3.5,2.51-2.34,4.11-5.7,4.79-10.1h8.87c-.76,6.39-3.18,11.48-7.27,15.26Z"></path><path class="cls-1" d="m2376.29,1341.39c4.4-6.46,10.45-9.69,18.14-9.69,6.25,0,10.77,1.63,13.55,4.9,2.78,3.26,4.17,8.06,4.17,14.38v35.36h-8.76v-31.34c0-2.61-.09-4.66-.26-6.13-.17-1.48-.6-3.06-1.29-4.74-.69-1.68-1.86-2.9-3.51-3.66-1.65-.76-3.78-1.13-6.39-1.13-10.1,0-15.15,6.39-15.15,19.17v27.83h-8.76v-53.19h8.25v8.25Z"></path><path class="cls-1" d="m2474.93,1338.92c4.47,4.88,6.7,11.72,6.7,20.51s-2.23,16.01-6.7,21.03c-4.47,5.02-10.76,7.52-18.86,7.52s-14.46-2.47-19.07-7.42c-4.6-4.95-6.91-11.82-6.91-20.62s2.34-15.63,7.01-20.72c4.67-5.08,11.03-7.63,19.07-7.63s14.29,2.44,18.76,7.32Zm-31.23,5.67c-3.02,3.78-4.54,8.83-4.54,15.15s1.5,11.63,4.48,15.31c2.99,3.68,7.16,5.51,12.52,5.51s9.19-1.86,12.11-5.57c2.92-3.71,4.38-8.83,4.38-15.36s-1.5-11.36-4.48-15.1c-2.99-3.75-7.06-5.62-12.22-5.62s-9.24,1.89-12.27,5.67Z"></path><path class="cls-1" d="m2508.83,1386.34h-8.86v-73.39h8.86v73.39Z"></path><path class="cls-1" d="m2572.02,1338.92c4.47,4.88,6.7,11.72,6.7,20.51s-2.23,16.01-6.7,21.03-10.76,7.52-18.86,7.52-14.46-2.47-19.07-7.42c-4.6-4.95-6.91-11.82-6.91-20.62s2.34-15.63,7.01-20.72c4.67-5.08,11.03-7.63,19.07-7.63s14.29,2.44,18.76,7.32Zm-31.23,5.67c-3.02,3.78-4.54,8.83-4.54,15.15s1.5,11.63,4.48,15.31c2.99,3.68,7.16,5.51,12.52,5.51s9.19-1.86,12.11-5.57c2.92-3.71,4.38-8.83,4.38-15.36s-1.5-11.36-4.48-15.1c-2.99-3.75-7.06-5.62-12.22-5.62s-9.24,1.89-12.27,5.67Z"></path><path class="cls-1" d="m2642.72,1380.56c0,4.6-.24,8.16-.72,10.67-.48,2.51-1.37,4.86-2.68,7.06-3.92,6.46-10.93,9.69-21.03,9.69-5.98,0-11.03-1.22-15.15-3.66-4.12-2.44-6.53-6.44-7.22-12.01h8.97c1.03,5.91,5.6,8.86,13.71,8.86,5.43,0,9.36-1.37,11.8-4.12,2.44-2.75,3.73-7.18,3.87-13.3l.1-6.49c-3.37,6.46-9,9.69-16.91,9.69-7.15,0-12.83-2.44-17.06-7.32-4.23-4.88-6.34-11.44-6.34-19.69,0-7.77,2.1-14.41,6.29-19.95,4.19-5.53,10.03-8.3,17.52-8.3,3.71,0,7.03.79,9.95,2.37,2.92,1.58,5.2,3.85,6.85,6.8v-7.73h8.04v47.42Zm-35.61-35.72c-2.71,3.68-4.07,8.75-4.07,15.2,0,5.84,1.41,10.53,4.23,14.07,2.82,3.54,6.56,5.31,11.24,5.31s8.71-1.86,11.49-5.57c2.78-3.71,4.17-8.8,4.17-15.26,0-6.05-1.39-10.77-4.17-14.17-2.78-3.4-6.68-5.1-11.7-5.1-4.74,0-8.47,1.84-11.18,5.51Z"></path><path class="cls-1" d="m2668.48,1323.66h-6.6l9.9-16.7h11.24l-14.53,16.7Zm4.12,62.67v-53.29h-8.76v53.29h8.76Z"></path><path class="cls-1" d="m2740.84,1386.13c-1.79.69-3.78,1.03-5.98,1.03-5.02,0-7.59-2.61-7.73-7.83-5.02,5.63-11.44,8.45-19.28,8.45-5.22,0-9.36-1.34-12.42-4.02-3.06-2.68-4.59-6.36-4.59-11.03,0-9.48,6.29-15.02,18.86-16.6.82-.14,2.03-.28,3.61-.41,5.98-.69,9.65-1.48,11.03-2.37,1.58-1.1,2.37-2.99,2.37-5.67,0-5.84-4.02-8.76-12.06-8.76-4.12,0-7.25.84-9.38,2.52-2.13,1.68-3.4,4.45-3.81,8.3h-8.56c.14-5.7,2.16-10.14,6.08-13.3,3.92-3.16,9.31-4.74,16.19-4.74,7.49,0,13.06,1.72,16.7,5.15,1.17,1.1,2.03,2.54,2.58,4.33.55,1.79.86,3.25.93,4.38.07,1.13.1,2.84.1,5.1,0,2.61-.07,6.56-.21,11.85-.14,5.29-.21,9.24-.21,11.85,0,1.93.26,3.28.77,4.07.52.79,1.46,1.19,2.84,1.19.55,0,1.27-.1,2.16-.31v6.8Zm-16.08-26.18c-.69.34-1.56.62-2.63.82-1.07.21-1.79.36-2.16.46s-1.29.24-2.73.41c-1.44.17-2.2.26-2.27.26-2.13.28-3.52.46-4.17.57-.65.1-1.89.39-3.71.87-1.82.48-3.11,1.03-3.87,1.65s-1.5,1.53-2.22,2.73-1.08,2.63-1.08,4.28c0,2.75.94,4.91,2.83,6.49,1.89,1.58,4.48,2.37,7.78,2.37,4.19,0,7.94-1.24,11.24-3.71,3.3-2.47,4.95-5.4,4.95-8.76v-9.69c-.62.48-1.27.89-1.96,1.24Z"></path></g></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/svg/imimexLogo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SvgImimexLogo = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const items = ref([
      {
        label: "Servicios",
        icon: "pi pi-search",
        items: [
          {
            label: "Control e",
            icon: "pi pi-bolt"
          },
          {
            label: "Instrumentaci\xF3n",
            icon: "pi pi-th-large"
          },
          {
            separator: true
          },
          {
            label: "Software",
            icon: "pi pi-server",
            items: [
              {
                label: "SK Terminal",
                icon: "pi pi-qrcode"
              },
              {
                label: "SK Docs",
                icon: "pi pi-wallet"
              }
            ]
          }
        ]
      },
      {
        label: "Nosotros",
        icon: "pi pi-building",
        to: "/about"
      },
      {
        label: "Contacto",
        icon: "pi pi-address-book",
        to: "/contact"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Menubar = script;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Badge = script$2$1;
      const _component_Button = script$6;
      const _directive_ripple = Ripple;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout-wrapper fadein animation-duration-400 animation-iteration-1" }, _attrs))} data-v-371d8d18><div class="content" data-v-371d8d18><div style="${ssrRenderStyle({ "padding": "0px" })}" data-v-371d8d18>`);
      _push(ssrRenderComponent(_component_Menubar, {
        model: items.value,
        style: { "height": "80px" }
      }, {
        start: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(SvgImimexLogo, { style: { "width": "150px", "margin-right": "20px" } }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(SvgImimexLogo, { style: { "width": "150px", "margin-right": "20px" } })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLink, { to: "/" }, {
                default: withCtx(() => [
                  createVNode(SvgImimexLogo, { style: { "width": "150px", "margin-right": "20px" } })
                ]),
                _: 1
              })
            ];
          }
        }),
        item: withCtx(({ item: item2, props, hasSubmenu, root: root2 }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (item2.to) {
              _push2(ssrRenderComponent(_component_NuxtLink, mergeProps({
                to: item2.to
              }, props.action, {
                class: "flex items-center",
                exact: ""
              }), {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="${ssrRenderClass(item2.icon)}" data-v-371d8d18${_scopeId2}></span><span class="ml-2" data-v-371d8d18${_scopeId2}>${ssrInterpolate(item2.label)}</span>`);
                    if (item2.badge) {
                      _push3(ssrRenderComponent(_component_Badge, {
                        class: { "ml-auto": !root2, "ml-2": root2 },
                        value: item2.badge
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (item2.shortcut) {
                      _push3(`<span class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1" data-v-371d8d18${_scopeId2}>${ssrInterpolate(item2.shortcut)}</span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (hasSubmenu) {
                      _push3(`<i class="${ssrRenderClass(["pi pi-angle-down", { "pi-angle-down ml-2": root2, "pi-angle-right ml-auto": !root2 }])}" data-v-371d8d18${_scopeId2}></i>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      createVNode("span", {
                        class: item2.icon
                      }, null, 2),
                      createVNode("span", { class: "ml-2" }, toDisplayString(item2.label), 1),
                      item2.badge ? (openBlock(), createBlock(_component_Badge, {
                        key: 0,
                        class: { "ml-auto": !root2, "ml-2": root2 },
                        value: item2.badge
                      }, null, 8, ["class", "value"])) : createCommentVNode("", true),
                      item2.shortcut ? (openBlock(), createBlock("span", {
                        key: 1,
                        class: "ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1"
                      }, toDisplayString(item2.shortcut), 1)) : createCommentVNode("", true),
                      hasSubmenu ? (openBlock(), createBlock("i", {
                        key: 2,
                        class: ["pi pi-angle-down", { "pi-angle-down ml-2": root2, "pi-angle-right ml-auto": !root2 }]
                      }, null, 2)) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<a${ssrRenderAttrs(mergeProps({ class: "flex items-center" }, props.action, ssrGetDirectiveProps(_ctx, _directive_ripple)))} data-v-371d8d18${_scopeId}><span class="${ssrRenderClass(item2.icon)}" data-v-371d8d18${_scopeId}></span><span class="ml-2" data-v-371d8d18${_scopeId}>${ssrInterpolate(item2.label)}</span>`);
              if (item2.badge) {
                _push2(ssrRenderComponent(_component_Badge, {
                  class: { "ml-auto": !root2, "ml-2": root2 },
                  value: item2.badge
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (item2.shortcut) {
                _push2(`<span class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1" data-v-371d8d18${_scopeId}>${ssrInterpolate(item2.shortcut)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              if (hasSubmenu) {
                _push2(`<i class="${ssrRenderClass(["pi pi-angle-down", { "pi-angle-down ml-2": root2, "pi-angle-right ml-auto": !root2 }])}" data-v-371d8d18${_scopeId}></i>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</a>`);
            }
          } else {
            return [
              item2.to ? (openBlock(), createBlock(_component_NuxtLink, mergeProps({
                key: 0,
                to: item2.to
              }, props.action, {
                class: "flex items-center",
                exact: ""
              }), {
                default: withCtx(() => [
                  createVNode("span", {
                    class: item2.icon
                  }, null, 2),
                  createVNode("span", { class: "ml-2" }, toDisplayString(item2.label), 1),
                  item2.badge ? (openBlock(), createBlock(_component_Badge, {
                    key: 0,
                    class: { "ml-auto": !root2, "ml-2": root2 },
                    value: item2.badge
                  }, null, 8, ["class", "value"])) : createCommentVNode("", true),
                  item2.shortcut ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: "ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1"
                  }, toDisplayString(item2.shortcut), 1)) : createCommentVNode("", true),
                  hasSubmenu ? (openBlock(), createBlock("i", {
                    key: 2,
                    class: ["pi pi-angle-down", { "pi-angle-down ml-2": root2, "pi-angle-right ml-auto": !root2 }]
                  }, null, 2)) : createCommentVNode("", true)
                ]),
                _: 2
              }, 1040, ["to"])) : withDirectives((openBlock(), createBlock("a", mergeProps({
                key: 1,
                class: "flex items-center"
              }, props.action), [
                createVNode("span", {
                  class: item2.icon
                }, null, 2),
                createVNode("span", { class: "ml-2" }, toDisplayString(item2.label), 1),
                item2.badge ? (openBlock(), createBlock(_component_Badge, {
                  key: 0,
                  class: { "ml-auto": !root2, "ml-2": root2 },
                  value: item2.badge
                }, null, 8, ["class", "value"])) : createCommentVNode("", true),
                item2.shortcut ? (openBlock(), createBlock("span", {
                  key: 1,
                  class: "ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1"
                }, toDisplayString(item2.shortcut), 1)) : createCommentVNode("", true),
                hasSubmenu ? (openBlock(), createBlock("i", {
                  key: 2,
                  class: ["pi pi-angle-down", { "pi-angle-down ml-2": root2, "pi-angle-right ml-auto": !root2 }]
                }, null, 2)) : createCommentVNode("", true)
              ], 16)), [
                [_directive_ripple]
              ])
            ];
          }
        }),
        end: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Button, {
              label: "Cont\xE1ctanos",
              severity: "info",
              raised: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Button, {
                label: "Cont\xE1ctanos",
                severity: "info",
                raised: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="backgroundContent" data-v-371d8d18>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div><div class="footer grid" data-v-371d8d18><div class="col-12 sm:col-12 md:col-2 lg:col-2 xl:col-2" data-v-371d8d18>`);
      _push(ssrRenderComponent(_component_Button, {
        label: "Cont\xE1ctanos",
        severity: "info",
        raised: ""
      }, null, _parent));
      _push(`</div><div class="col-12 sm:col-12 md:col-2 lg:col-2 xl:col-2" data-v-371d8d18><span class="pi pi-map-marker" data-v-371d8d18></span> Queretaro Mx. </div><div class="col-12 sm:col-12 md:col-2 lg:col-2 xl:col-2" data-v-371d8d18><span class="pi pi-envelope" data-v-371d8d18></span> correoimimex@imimex.com </div><div class="col-12 sm:col-12 md:col-2 lg:col-2 xl:col-2" data-v-371d8d18><span class="pi pi-phone" data-v-371d8d18></span> +52 4422 33 405 </div><div class="col-12 sm:col-12 md:col-6 lg:col-6 xl:col-6 flex align-items-center justify-content-end" data-v-371d8d18><span class="pi pi-linkedin pr-5" data-v-371d8d18></span></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-371d8d18"]]);

export { _default as default };
//# sourceMappingURL=default-BpFYTeSs.mjs.map
