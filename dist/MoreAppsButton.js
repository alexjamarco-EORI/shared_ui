function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useState } from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import { IconButton, Menu, MenuItem } from '@mui/material';
import ICS2Logo from '../src/assets/images/cabie-ics2-logo.png';
import ENSLogo from '../src/assets/images/CABIE-ENS.png';
import logo360Pay from '../src/assets/images/360pay-grey-logo.png';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
var MoreAppsButton = function MoreAppsButton() {
  var _useState = useState(null),
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
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(IconButton, {
      onClick: handleClick,
      "aria-controls": openMenu ? 'apps-menu' : undefined,
      "aria-haspopup": "true",
      "aria-expanded": openMenu ? 'true' : undefined,
      children: /*#__PURE__*/_jsx(AppsIcon, {
        sx: {
          color: '#00395d',
          height: '40px',
          width: '40px'
        }
      })
    }), /*#__PURE__*/_jsxs(Menu, {
      id: "apps-menu",
      anchorEl: openMenu,
      open: !!openMenu,
      onClose: handleClose,
      MenuListProps: {
        'aria-labelledby': 'apps-button'
      },
      children: [/*#__PURE__*/_jsx("div", {
        style: {
          display: 'flex',
          justifyContent: 'center',
          borderBottom: '1px solid #eee'
        },
        children: /*#__PURE__*/_jsx("img", {
          src: logo360Pay,
          alt: "CABIE 360Pay Logo",
          style: {
            height: '35px',
            width: 'auto',
            marginTop: 22,
            marginBottom: 22,
            marginLeft: 10
          }
        })
      }), /*#__PURE__*/_jsx(MenuItem, {
        onClick: function onClick() {
          return handleMenuItemClick('test1');
        },
        children: /*#__PURE__*/_jsx("img", {
          src: ICS2Logo,
          alt: "CABIE ICS2 Logo",
          style: {
            height: '35px',
            width: 'auto',
            marginTop: 22,
            marginBottom: 22
          }
        })
      }), /*#__PURE__*/_jsx(MenuItem, {
        onClick: function onClick() {
          return handleMenuItemClick('test2');
        },
        children: /*#__PURE__*/_jsx("img", {
          src: ENSLogo,
          alt: "CABIE ENS Logo",
          style: {
            height: '47px',
            width: 'auto',
            marginTop: 22,
            marginBottom: 22
          }
        })
      })]
    })]
  });
};
export default MoreAppsButton;