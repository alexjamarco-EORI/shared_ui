"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _Apps = _interopRequireDefault(require("@mui/icons-material/Apps"));
var _material = require("@mui/material");
var _cabieIcs2Logo = _interopRequireDefault(require("../src/assets/images/cabie-ics2-logo.png"));
var _CABIEENS = _interopRequireDefault(require("../src/assets/images/CABIE-ENS.png"));
var _payGreyLogo = _interopRequireDefault(require("../src/assets/images/360pay-grey-logo.png"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var MoreAppsButton = function MoreAppsButton() {
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    openMenu = _useState2[0],
    setOpenMenu = _useState2[1];
  var handleClick = function handleClick(event) {
    console.log('Clicked More Apps', event.currentTarget);
    setOpenMenu(event.currentTarget);
  };
  var handleClose = function handleClose() {
    setOpenMenu(null);
  };
  var handleMenuItemClick = function handleMenuItemClick(option) {
    handleClose();
    // Add logic for clicking on each app option here
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_material.IconButton, {
    onClick: handleClick,
    "aria-controls": openMenu ? 'apps-menu' : undefined,
    "aria-haspopup": "true",
    "aria-expanded": openMenu ? 'true' : undefined
  }, /*#__PURE__*/React.createElement(_Apps["default"], {
    sx: {
      color: '#00395d',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/React.createElement(_material.Menu, {
    id: "apps-menu",
    anchorEl: openMenu,
    open: !!openMenu,
    onClose: handleClose,
    MenuListProps: {
      'aria-labelledby': 'apps-button'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      borderBottom: '1px solid #eee'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: _payGreyLogo["default"],
    alt: "CABIE 360Pay Logo",
    style: {
      height: '35px',
      width: 'auto',
      marginTop: 22,
      marginBottom: 22,
      marginLeft: 10
    }
  })), /*#__PURE__*/React.createElement(_material.MenuItem, {
    onClick: function onClick() {
      return handleMenuItemClick('test1');
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: _cabieIcs2Logo["default"],
    alt: "CABIE ICS2 Logo",
    style: {
      height: '35px',
      width: 'auto',
      marginTop: 22,
      marginBottom: 22
    }
  })), /*#__PURE__*/React.createElement(_material.MenuItem, {
    onClick: function onClick() {
      return handleMenuItemClick('test2');
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: _CABIEENS["default"],
    alt: "CABIE ENS Logo",
    style: {
      height: '47px',
      width: 'auto',
      marginTop: 22,
      marginBottom: 22
    }
  }))));
};
var _default = exports["default"] = MoreAppsButton;