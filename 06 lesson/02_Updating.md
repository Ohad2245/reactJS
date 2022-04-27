# Updating

The second step - is updating.

- When variable is changed - what happens?

The render() method - required! will always run after an update.

React has 5 build-in methods for updating(in that oreder):

1. getDerivedStateFromProps()
2. shouldComponentUpdate()
3. render()
4. getSnapshotBeforeUpdate()
5. componentDidUpdate()

## 1. getDerivedStateFromProps()

same as in mounting. rarely used.
This is a static method that gets props and state. It will update the state from props.

- Example

```js
import React, { Component } from "react";

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "John",
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.name !== state.name)
      return {
        name: props.name,
      };
    return null; // no change in the state
  }

  render() {
    return (
      <div>
        <h2>My name: {this.state.name}</h2>
      </div>
    );
  }
}
```

- App.js

```js
import React, { Component } from "react";
import Example from "./Example";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Example name="John" />
      </div>
    );
  }
}
```

## 2. shouldComponentUpdate()

This method will return boolean value of true/false.
(The default is true).
If true - will update the component, else - will not update the component.

```js
import React, { Component } from "react";

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "John",
    };
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <h2>My name: {this.state.name}</h2>
        <button onClick={() => this.setState({ name: "Alex" })}>
          Change name
        </button>
      </div>
    );
  }
}
```

## 4. getSnapshotBeforeUpdate() 5. componentDidUpdate()

getSnapshotBeforeUpdate() - store the previous value in state & props.
It must come with componentDidUpdate() method.

componentDidUpdate() - it is the final metohd for updating. We can send the final value,
the data to database.

```js
import React, { Component } from "react";

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { myCity: "Jerusalem" };
  }

  // belong to mounting
  // Will update the myCity variable after 1 second
  componentDidMount() {
    setTimeout(() => this.setState({ myCity: "Ariel" }), 10000);
  }

  // store the previous value in state:
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById(
      "div1"
    ).innerHTML = `My city was: ${prevState.myCity}`;
  }

  // must come with getSnapshotBeforeUpdate
  componentDidUpdate() {
    document.getElementById(
      "div2"
    ).innerHTML = `My city is: ${this.state.myCity}`;
  }

  render() {
    return (
      <div>
        <h2>I live in {this.state.myCity}</h2>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}
```
