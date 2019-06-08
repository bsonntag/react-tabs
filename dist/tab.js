"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tab = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _tabContext = _interopRequireDefault(require("./tab-context"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Tab = function Tab(_ref) {
  var children = _ref.children,
      tab = _ref.tab;
  return _react["default"].createElement(_tabContext["default"].Consumer, null, function (_ref2) {
    var selectedTab = _ref2.selectedTab,
        setSelectedTab = _ref2.setSelectedTab;
    return children({
      isSelected: selectedTab === tab,
      select: function select() {
        return setSelectedTab(tab);
      }
    });
  });
};

exports.Tab = Tab;
Tab.propTypes = {
  children: _propTypes["default"].func.isRequired,
  tab: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired
};