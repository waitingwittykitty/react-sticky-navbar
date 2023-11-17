"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStickyNavbarStatus = useStickyNavbarStatus;
var _react = require("react");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function useStickyNavbarStatus() {
  var _useState = (0, _react.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    isScrollTop = _useState2[0],
    setScrollTop = _useState2[1];
  var _useState3 = (0, _react.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    isScrollUp = _useState4[0],
    setScrollUp = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isScrollBottom = _useState6[0],
    setScrollBottom = _useState6[1];
  (0, _react.useLayoutEffect)(function () {
    var prevScrollY = window.scrollY;
    var handleScroll = function handleScroll(event) {
      var target = event.target;
      var scrollableHeight = 0;
      if (target instanceof Document) {
        scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      } else {
        scrollableHeight = (target === null || target === void 0 ? void 0 : target.scrollHeight) - (target === null || target === void 0 ? void 0 : target.offsetHeight);
      }
      setScrollTop(window.scrollY <= 0);
      setScrollUp(window.scrollY < prevScrollY);
      setScrollBottom(window.scrollY >= scrollableHeight);
      prevScrollY = window.scrollY;
    };
    document.addEventListener("scroll", handleScroll);
    return function () {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return {
    isScrollTop: isScrollTop,
    isScrollUp: isScrollUp,
    isScrollBottom: isScrollBottom
  };
}
//# sourceMappingURL=hooks.js.map