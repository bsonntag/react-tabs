import { Tab } from './tab';
import { Tabs } from './tabs';
import { fireEvent, render } from 'react-testing-library';
import React from 'react';

describe('TabPanel', () => {
  it('renders the result of calling the children prop', () => {
    const { container } = render(
      <Tab tab={'foo'}>
        {() => 'bar'}
      </Tab>
    );

    expect(container).toHaveTextContent('bar');
  });

  it('calls children with a `isSelected` property set to true if the tab is selected', () => {
    render(
      <Tabs
        onSelect={() => {}}
        selectedTab={'foo'}
      >
        <Tab tab={'foo'}>
          {({ isSelected }) => expect(isSelected).toBe(true)}
        </Tab>
      </Tabs>
    );
  });

  it('calls children with a `isSelected` property set to false if the tab is not selected', () => {
    render(
      <Tabs
        onSelect={() => {}}
        selectedTab={'foo'}
      >
        <Tab tab={'bar'}>
          {({ isSelected }) => expect(isSelected).toBe(false)}
        </Tab>
      </Tabs>
    );
  });

  it('calls the `onSelect` prop of the Tabs component when calling the `select` property passed to children', () => {
    const onSelect = jest.fn();

    const { getByText } = render(
      <Tabs
        onSelect={onSelect}
        selectedTab={'foo'}
      >
        <Tab tab={'bar'}>
          {({ select }) => (
            <button onClick={select}>
              {'test button'}
            </button>
          )}
        </Tab>
      </Tabs>
    );

    fireEvent.click(getByText('test button'));

    expect(onSelect).toHaveBeenCalled();
  });
});
