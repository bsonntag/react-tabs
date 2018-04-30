'use strict';

var _tabs = require('./tabs');

var _reactTestingLibrary = require('react-testing-library');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tabContext = require('./tab-context');

var _tabContext2 = _interopRequireDefault(_tabContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Tabs', function () {
  it('renders the children prop', function () {
    var _render = (0, _reactTestingLibrary.render)(_react2.default.createElement(
      _tabs.Tabs,
      {
        onSelect: function onSelect() {},
        selectedTab: 'foo'
      },
      'bar'
    )),
        container = _render.container;

    expect(container).toHaveTextContent('bar');
  });

  it('passes the `selectedTab` and `onSelect` props to the tab context', function () {
    var onSelect = jest.fn();

    (0, _reactTestingLibrary.render)(_react2.default.createElement(
      _tabs.Tabs,
      {
        onSelect: onSelect,
        selectedTab: 'foo'
      },
      _react2.default.createElement(
        _tabContext2.default.Consumer,
        null,
        function (_ref) {
          var selectedTab = _ref.selectedTab,
              setSelectedTab = _ref.setSelectedTab;

          expect(selectedTab).toBe('foo');
          expect(setSelectedTab).toBe(onSelect);
        }
      )
    ));
  });
});