'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabPanel = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tabContext = require('./tab-context');

var _tabContext2 = _interopRequireDefault(_tabContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabPanel = exports.TabPanel = function TabPanel(_ref) {
  var children = _ref.children,
      tab = _ref.tab;
  return _react2.default.createElement(
    _tabContext2.default.Consumer,
    null,
    function (_ref2) {
      var selectedTab = _ref2.selectedTab;
      return children(selectedTab === tab);
    }
  );
};

TabPanel.propTypes = {
  children: _propTypes2.default.func.isRequired,
  tab: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired
};