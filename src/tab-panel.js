import PropTypes from 'prop-types';
import React from 'react';
import TabContext from './tab-context';

export const TabPanel = ({ children, tab }) => (
  <TabContext.Consumer>
    {({ selectedTab }) => children(selectedTab === tab)}
  </TabContext.Consumer>
);

TabPanel.propTypes = {
  children: PropTypes.func.isRequired,
  tab: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
