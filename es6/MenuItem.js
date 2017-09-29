var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import assign from 'object-assign';

import { hideMenu } from './actions';
import { callIfExists, cssClasses, store } from './helpers';

var MenuItem = function (_Component) {
    _inherits(MenuItem, _Component);

    function MenuItem() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, MenuItem);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call.apply(_ref, [this].concat(args))), _this), _this.setItem = function () {
            var _this$props = _this.props,
                index = _this$props.index,
                setActiveItem = _this$props.setActiveItem;

            setActiveItem(index);
        }, _this.handleClick = function (event) {
            event.preventDefault();

            var _this$props2 = _this.props,
                disabled = _this$props2.disabled,
                divider = _this$props2.divider,
                onClick = _this$props2.onClick,
                data = _this$props2.data,
                preventClose = _this$props2.preventClose,
                trackSelection = _this$props2.trackSelection;


            if (disabled || divider) return;

            if (trackSelection) _this.setItem();

            if (disabled || divider) return;

            callIfExists(onClick, event, assign({}, data, store.data), store.target);

            if (preventClose) return;

            hideMenu();
        }, _this.renderSelectedDot = function () {
            var trackedItemClass = cx(cssClasses.trackedItem);
            return React.createElement(
                'span',
                { className: trackedItemClass },
                '\u2022'
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(MenuItem, [{
        key: 'render',
        value: function render() {
            var _cx,
                _this2 = this;

            var _props = this.props,
                disabled = _props.disabled,
                divider = _props.divider,
                children = _props.children,
                attributes = _props.attributes,
                selected = _props.selected,
                isActive = _props.isActive;


            var menuItemClassNames = cx(cssClasses.menuItem, attributes && attributes.className, (_cx = {}, _defineProperty(_cx, cssClasses.menuItemDisabled, disabled), _defineProperty(_cx, cssClasses.menuItemDivider, divider), _defineProperty(_cx, cssClasses.menuItemSelected, selected), _cx));

            return React.createElement(
                'div',
                _extends({}, attributes, { className: menuItemClassNames,
                    role: 'menuitem', tabIndex: '-1', 'aria-disabled': disabled ? 'true' : 'false',
                    'aria-orientation': divider ? 'horizontal' : null,
                    ref: function ref(_ref2) {
                        _this2.ref = _ref2;
                    },
                    onMouseMove: this.props.onMouseMove, onMouseLeave: this.props.onMouseLeave,
                    onTouchEnd: this.handleClick, onClick: this.handleClick }),
                divider ? null : children,
                isActive ? this.renderSelectedDot() : null
            );
        }
    }]);

    return MenuItem;
}(Component);

MenuItem.propTypes = {
    children: PropTypes.node,
    attributes: PropTypes.object,
    data: PropTypes.object,
    disabled: PropTypes.bool,
    divider: PropTypes.bool,
    preventClose: PropTypes.bool,
    onClick: PropTypes.func,
    selected: PropTypes.bool,
    onMouseMove: PropTypes.func,
    onMouseLeave: PropTypes.func,
    isActive: PropTypes.bool,
    setActiveItem: PropTypes.func,
    index: PropTypes.number,
    trackSelection: PropTypes.bool
};
MenuItem.defaultProps = {
    disabled: false,
    data: {},
    divider: false,
    attributes: {},
    preventClose: false,
    onClick: function onClick() {
        return null;
    },

    children: null,
    isActive: false,
    selected: false,
    onMouseMove: function onMouseMove() {
        return null;
    },
    onMouseLeave: function onMouseLeave() {
        return null;
    },
    setActiveItem: function setActiveItem() {
        return null;
    },
    index: 0,
    trackSelection: false
};
export default MenuItem;