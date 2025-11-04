"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _Apps = _interopRequireDefault(require("@mui/icons-material/Apps"));
var _material = require("@mui/material");
var _cabieIcs2Logo = _interopRequireDefault(require("./assets/images/cabie-ics2-logo.png"));
var _CABIEENS = _interopRequireDefault(require("./assets/images/CABIE-ENS.png"));
var _payGreyLogo = _interopRequireDefault(require("./assets/images/360pay-grey-logo.png"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const BUTTONS = [{
  logo: _cabieIcs2Logo.default,
  alt: "CABIE ICS2 Logo",
  style: {
    height: "35px",
    width: "auto",
    marginTop: 22,
    marginBottom: 22
  },
  onClickURL: "https://ics2.cabie.uk/"
}, {
  logo: _CABIEENS.default,
  alt: "CABIE ENS Logo",
  style: {
    height: "47px",
    width: "auto",
    marginTop: 22,
    marginBottom: 22
  },
  onClickURL: "https://ensgb.cabie.uk/"
}];
const MoreAppsButton = () => {
  const [openMenu, setOpenMenu] = (0, _react.useState)(null);
  const handleClick = event => {
    console.log("Clicked More Apps", event.currentTarget);
    setOpenMenu(event.currentTarget);
  };
  const handleClose = () => {
    setOpenMenu(null);
  };
  const handleMenuItemClick = url => {
    //open the URL in a new tab
    window.open(url, "_blank");
    handleClose();
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_material.IconButton, {
    onClick: handleClick,
    "aria-controls": openMenu ? "apps-menu" : undefined,
    "aria-haspopup": "true",
    "aria-expanded": openMenu ? "true" : undefined
  }, /*#__PURE__*/_react.default.createElement(_Apps.default, {
    sx: {
      color: "#00395d",
      height: "40px",
      width: "40px"
    }
  })), /*#__PURE__*/_react.default.createElement(_material.Menu, {
    id: "apps-menu",
    anchorEl: openMenu,
    open: !!openMenu,
    onClose: handleClose,
    MenuListProps: {
      "aria-labelledby": "apps-button"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      borderBottom: "1px solid #eee"
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _payGreyLogo.default,
    alt: "CABIE 360Pay Logo",
    style: {
      height: "35px",
      width: "auto",
      marginTop: 22,
      marginBottom: 22,
      marginLeft: 10
    }
  })), BUTTONS.map((button, index) => /*#__PURE__*/_react.default.createElement(_material.MenuItem, {
    key: index,
    onClick: () => handleMenuItemClick(button.onClickURL)
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: button.logo,
    alt: button.alt,
    style: button.style
  })))));
};
var _default = exports.default = MoreAppsButton;