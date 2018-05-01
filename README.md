# @bsonntag/react-tabs

> Flexible tab components for react.

## Installation

Using npm:

```sh
$ npm install --save @bsonntag/react-tabs
```

Using yarn:

```sh
$ yarn add @bsonntag/react-tabs
```

This module uses react's `createContext` API,
so make sure you have at least version 16.3.0 installed.

## Example usage

```js
import { Tab, TabPanel, Tabs } from '@bsonntag/react-tabs';
import React, { Component } from 'react';

class App extends Component {

  state = {
    selectedTab: 0
  };

  handleSelect = selectedTab => this.setState({ selectedTab });

  render() {
    return (
      <Tabs
        onSelect={this.handleSelect}
        selectedTab={this.state.selectedTab}
      >
        <ul>
          <Tab tab={0}>
            {({ select }) => (
              <li onClick={select}>
                {'First tab'}
              </li>
            )}
          </Tab>

          <Tab tab={1}>
            {({ select }) => (
              <li onClick={select}>
                {'Second tab'}
              </li>
            )}
          </Tab>
        </ul>

        <TabPanel tab={0}>
          {isSelected => isSelected && (
            <div>
              {'First tab content'}
            </div>
          )}
        </TabPanel>

        <TabPanel tab={1}>
          {isSelected => isSelected && (
            <div>
              {'Second tab content'}
            </div>
          )}
        </TabPanel>
      </Tabs>
    );
  }

}
```

## Components

This module contains three components.

### &lt;Tabs /&gt;

Works mainly as a provider. It only renders its children.

This is a
[controlled component](https://reactjs.org/docs/forms.html#controlled-components),
so you'll have to save the selected tab on another component's state.

#### children: `React$Node`

This component only renders its children.

#### onSelect: `(tab: string | number) => void`

The event handler that is called when a tab is selected.
This is called with the selected tab.

#### selectedTab: `string | number`

The currently selected tab.

### &lt;Tab /&gt;

#### children: `(args: { isSelected: boolean, select: () => void }) => React$Node`

This component receives a function as its children.
It calls the children function with an object with two properties:

- `isSelected`: this will be true if the tab is selected.
- `select`: a function to call when this tab is selected.

This component will render the result of calling its children.

#### tab: `string | number`

This tab's identifier.

### &lt;TabPanel /&gt;

#### children: `(isSelected: boolean) => React$Node`

This component receives a function as its children.
It calls the children function with an a boolean
that will be true if the tab is selected.

This component will render the result of calling its children.

#### tab: `string | number`

This tab's identifier.

## Contributing

Please feel free to submit any issues or pull requests.

## License

MIT
