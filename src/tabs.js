import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TabContext from './tab-context';

export class Tabs extends Component {
  static propTypes = {
    children: PropTypes.node,
    onSelect: PropTypes.func.isRequired,
    selectedTab: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  static getDerivedStateFromProps(props, state) {
    if (props.selectedTab === state.selectedTab) {
      return null;
    }

    return {
      selectedTab: props.selectedTab,
      setSelectedTab: props.onSelect,
    };
  }

  state = {};

  render() {
    return (
      <TabContext.Provider value={this.state}>
        {this.props.children}
      </TabContext.Provider>
    );
  }
}
