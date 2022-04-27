# Class component

We can create components in reactJS in 2 ways(it is exacly the same for the compiler):

1. function (regular, anonymous, arrow)
2. class

### A class must have:

1. extend from `React.Component` interface
2. The function `render()` - that returns all the HTML code.

### Create a class

- Create new file `EncryptMSG.js` (starts with uppercase)
- write `rcc` (react-class-component) shortcut

```js
import React, { Component } from "react";

export default class EncryptMSG extends Component {
  render() {
    return <div>EncryptMSG</div>;
  }
}
```

### props - data sent from parent class/function

props:

1. We define props in the constrcutor.
2. They must be sent to the super() function
3. To call a prop - we use the prefix - `this`

```js
import React, { Component } from "react";

export default class EncryptMSG extends Component {
  // function x(props){}

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.header}</h1>
      </div>
    );
  }
}
```

## state - internal data

- We use state to store our values in class componets
- in class - `state`. in function - `useState()`
- Every time the state changes - react re-renders the component in the browser.
- Changes in state - can happen:
  - user action
  - change in component
- The state object is initialized in the constructor.
- To update values in the state object - we must use `this.setState()`. (cannot update explicitly).
  The function `this.setState()` - merges between the previous data and the new data.

#### Create & show state

```js
import React, { Component } from "react";

export default class EncryptMSG extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Jon Doe",
      password: "12345678",
    };
  }

  render() {
    return (
      <div>
        <h1>{this.props.header}</h1>
        <h4>userName: {this.state.userName}</h4>
        <p>password: {this.state.password}</p>
      </div>
    );
  }
}
```

#### Update state:

```js
import React, { Component } from "react";

export default class EncryptMSG extends Component {
  constructor(props) {
    super(props);
    // here we define our state values
    this.state = { password: "12345678" };
  }

  render() {
    return (
      <div>
        <h1>{this.props.header}</h1>
        <p>password: {this.state.password}</p>
        <button onClick={() => this.setState({ password: "34444" })}>
          Change password
        </button>
      </div>
    );
  }
}
```

- Store the function outside the `onClick`

```js
import React, { Component } from "react";

export default class EncryptMSG extends Component {
  constructor(props) {
    super(props);
    this.state = { password: "12345678" };
  }

  updatePass = () => this.setState({ password: "34444" });

  render() {
    return (
      <div>
        <h1>{this.props.header}</h1>
        <p>password: {this.state.password}</p>
        <button onClick={() => this.updatePass()}>Change password</button>
      </div>
    );
  }
}
```

> Note: We do not call a function directly - that will run the function automatically.

```js
<button onClick={this.updatePass()}>Change password</button>
```

We must define a scope for the function to run - only when user - presses the button

```js
<button onClick={() => this.updatePass()}>Change password</button>
```

## props vs state:

- **props** - we get from parent component, **state** - internal data
- **props** - are immutable. **state** - is mutable. (can be changed in component).
- **props** - are used in both function & class component, **state** - is only for a class component. (in function - we use the hook - useState)
