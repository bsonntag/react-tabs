import { TabPanel } from './tab-panel';
import { Tabs } from './tabs';
import { render } from 'react-testing-library';
import React from 'react';

describe('TabPanel', () => {
  it('renders the result of calling the children prop', () => {
    const { container } = render(
      <TabPanel tab={'foo'}>
        {() => 'bar'}
      </TabPanel>
    );

    expect(container).toHaveTextContent('bar');
  });

  it('calls children with true if the tab is selected', () => {
    render(
      <Tabs
        onSelect={() => {}}
        selectedTab={'foo'}
      >
        <TabPanel tab={'foo'}>
          {isSelected => expect(isSelected).toBe(true)}
        </TabPanel>
      </Tabs>
    );
  });

  it('calls children with false if the tab is not selected', () => {
    render(
      <Tabs
        onSelect={() => {}}
        selectedTab={'foo'}
      >
        <TabPanel tab={'bar'}>
          {isSelected => expect(isSelected).toBe(false)}
        </TabPanel>
      </Tabs>
    );
  });
});
