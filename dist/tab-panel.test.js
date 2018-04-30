'use strict';

var _tabPanel = require('./tab-panel');

var _tabs = require('./tabs');

var _reactTestingLibrary = require('react-testing-library');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('TabPanel', function () {
  it('renders the result of calling the children prop', function () {
    var _render = (0, _reactTestingLibrary.render)(_react2.default.createElement(
      _tabPanel.TabPanel,
      { tab: 'foo' },
      function () {
        return 'bar';
      }
    )),
        container = _render.container;

    expect(container).toHaveTextContent('bar');
  });

  it('calls children with true if the tab is selected', function () {
    (0, _reactTestingLibrary.render)(_react2.default.createElement(
      _tabs.Tabs,
      {
        onSelect: function onSelect() {},
        selectedTab: 'foo'
      },
      _react2.default.createElement(
        _tabPanel.TabPanel,
        { tab: 'foo' },
        function (isSelected) {
          return expect(isSelected).toBe(true);
        }
      )
    ));
  });

  it('calls children with false if the tab is not selected', function () {
    (0, _reactTestingLibrary.render)(_react2.default.createElement(
      _tabs.Tabs,
      {
        onSelect: function onSelect() {},
        selectedTab: 'foo'
      },
      _react2.default.createElement(
        _tabPanel.TabPanel,
        { tab: 'bar' },
        function (isSelected) {
          return expect(isSelected).toBe(false);
        }
      )
    ));
  });
});