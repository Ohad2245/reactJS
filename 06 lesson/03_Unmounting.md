# Unmounting - פירוק

Remove components / elements from the DOM.

- React has only 1 built-in metohd for unmounting.

## ComponentWillUnmount()

- App.js

```js
import React, { Component } from "react";
import Example from "./Example";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  render() {
    return (
      <div className="container">
        {this.state.show && <Example />}

        <button
          onClick={() => this.setState({ show: false })}
          className="btn btn-primary"
        >
          Remove component
        </button>
      </div>
    );
  }
}
```

- Example.js

```js
import React, { Component } from "react";

export default class Example extends Component {
  // will run before component is removed from the DOM:
  componentWillUnmount() {
    alert("removing Example");
  }

  render() {
    return (
      <div>
        <h2>In Example</h2>
      </div>
    );
  }
}
```

