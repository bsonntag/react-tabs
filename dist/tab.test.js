'use strict';

var _reactTestingLibrary = require('react-testing-library');

var _tab = require('./tab');

var _tabs = require('./tabs');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('TabPanel', function () {
  it('renders the result of calling the children prop', function () {
    var _render = (0, _reactTestingLibrary.render)(_react2.default.createElement(
      _tab.Tab,
      { tab: 'foo' },
      function () {
        return 'bar';
      }
    )),
        container = _render.container;

    expect(container).toHaveTextContent('bar');
  });

  it('calls children with a `isSelected` property set to true if the tab is selected', function () {
    (0, _reactTestingLibrary.render)(_react2.default.createElement(
      _tabs.Tabs,
      {
        onSelect: function onSelect() {},
        selectedTab: 'foo'
      },
      _react2.default.createElement(
        _tab.Tab,
        { tab: 'foo' },
        function (_ref) {
          var isSelected = _ref.isSelected;
          return expect(isSelected).toBe(true);
        }
      )
    ));
  });

  it('calls children with a `isSelected` property set to false if the tab is not selected', function () {
    (0, _reactTestingLibrary.render)(_react2.default.createElement(
      _tabs.Tabs,
      {
        onSelect: function onSelect() {},
        selectedTab: 'foo'
      },
      _react2.default.createElement(
        _tab.Tab,
        { tab: 'bar' },
        function (_ref2) {
          var isSelected = _ref2.isSelected;
          return expect(isSelected).toBe(false);
        }
      )
    ));
  });

  it('calls the `onSelect` prop of the Tabs component when calling the `select` property passed to children', function () {
    var onSelect = jest.fn();

    var _render2 = (0, _reactTestingLibrary.render)(_react2.default.createElement(
      _tabs.Tabs,
      {
        onSelect: onSelect,
        selectedTab: 'foo'
      },
      _react2.default.createElement(
        _tab.Tab,
        { tab: 'bar' },
        function (_ref3) {
          var select = _ref3.select;
          return _react2.default.createElement(
            'button',
            { onClick: select },
            'test button'
          );
        }
      )
    )),
        getByText = _render2.getByText;

    _reactTestingLibrary.Simulate.click(getByText('test button'));

    expect(onSelect).toHaveBeenCalled();
  });
});