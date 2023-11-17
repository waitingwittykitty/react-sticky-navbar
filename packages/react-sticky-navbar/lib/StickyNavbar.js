"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireDefault(require("react"));
var _hooks = require("./hooks");
require("./styles.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var StickyNavbar = function StickyNavbar(_ref) {
  var children = _ref.children,
    classNames = _ref.classNames,
    _ref$showOnTop = _ref.showOnTop,
    showOnTop = _ref$showOnTop === void 0 ? true : _ref$showOnTop,
    _ref$showOnBottom = _ref.showOnBottom,
    showOnBottom = _ref$showOnBottom === void 0 ? true : _ref$showOnBottom,
    _ref$showOnScrollUp = _ref.showOnScrollUp,
    showOnScrollUp = _ref$showOnScrollUp === void 0 ? true : _ref$showOnScrollUp,
    _ref$showOnScrollDown = _ref.showOnScrollDown,
    showOnScrollDown = _ref$showOnScrollDown === void 0 ? false : _ref$showOnScrollDown,
    _ref$zIndex = _ref.zIndex,
    zIndex = _ref$zIndex === void 0 ? 100 : _ref$zIndex,
    _ref$stickyBackground = _ref.stickyBackground,
    stickyBackground = _ref$stickyBackground === void 0 ? "transparent" : _ref$stickyBackground,
    _ref$duration = _ref.duration,
    duration = _ref$duration === void 0 ? 500 : _ref$duration;
  var _useStickyNavbarStatu = (0, _hooks.useStickyNavbarStatus)(),
    isScrollTop = _useStickyNavbarStatu.isScrollTop,
    isScrollUp = _useStickyNavbarStatu.isScrollUp,
    isScrollBottom = _useStickyNavbarStatu.isScrollBottom;
  return /*#__PURE__*/_react["default"].createElement("nav", {
    className: (0, _classnames["default"])("sticky-navbar-nav", {
      "sticky-navbar-middle": !isScrollTop && !isScrollBottom,
      "sticky-navbar-hidden": !showOnTop && isScrollTop || !(showOnTop && isScrollTop) && !(showOnBottom && isScrollBottom) && (!isScrollUp && !showOnScrollDown || isScrollUp && !showOnScrollUp) || !(showOnTop && isScrollTop) && !showOnBottom && isScrollBottom
    }, isScrollTop && (classNames === null || classNames === void 0 ? void 0 : classNames.scrollTop), !isScrollTop && !isScrollBottom && (classNames === null || classNames === void 0 ? void 0 : classNames.scrollMiddle), isScrollBottom && (classNames === null || classNames === void 0 ? void 0 : classNames.scrollBottom), isScrollUp && (classNames === null || classNames === void 0 ? void 0 : classNames.scrollUp), !isScrollUp && (classNames === null || classNames === void 0 ? void 0 : classNames.scrollDown)),
    style: {
      zIndex: zIndex,
      background: !isScrollTop ? stickyBackground : "transparent",
      transitionDuration: "".concat(duration, "ms")
    }
  }, children);
};
var _default = exports["default"] = StickyNavbar;
//# sourceMappingURL=StickyNavbar.js.map