import PropTypes from 'prop-types';
import React from 'react';
import TabContext from './tab-context';

export const Tab = ({ children, tab }) => (
  <TabContext.Consumer>
    {({ selectedTab, setSelectedTab }) => children({
      isSelected: selectedTab === tab,
      select: () => setSelectedTab(tab),
    })}
  </TabContext.Consumer>
);

Tab.propTypes = {
  children: PropTypes.func.isRequired,
  tab: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
