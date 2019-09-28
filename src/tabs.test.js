import { Tabs } from './tabs';
import { render } from '@testing-library/react';
import React from 'react';
import TabContext from './tab-context';

describe('Tabs', () => {
  it('renders the children prop', () => {
    const { container } = render(
      <Tabs onSelect={() => {}} selectedTab={'foo'}>
        {'bar'}
      </Tabs>
    );

    expect(container).toHaveTextContent('bar');
  });

  it('passes the `selectedTab` and `onSelect` props to the tab context', () => {
    const onSelect = jest.fn();

    render(
      <Tabs onSelect={onSelect} selectedTab={'foo'}>
        <TabContext.Consumer>
          {({ selectedTab, setSelectedTab }) => {
            expect(selectedTab).toBe('foo');
            expect(setSelectedTab).toBe(onSelect);
          }}
        </TabContext.Consumer>
      </Tabs>
    );
  });
});
