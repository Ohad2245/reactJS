# Conditional rendering

### First eample:

Show win / lose alert for the user.

- We use the state to choose which alert to show
- We create a function inside the `render` function - no need to use the prefix `this`.
- We call the function directly! - it will run the function automatically.

```js
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWin: true,
    };
  }

  render() {
    // When function / values are inside the render() - no need to use `this`
    let gameState = () => {
      if (this.state.isWin) return <h3 className="alert alert-success">WIN</h3>;
      else return <h3 className="alert alert-danger">LOSE</h3>;
    };

    return (
      <div className="container">
        <br />
        {gameState()}
      </div>
    );
  }
}
```

## With switch-case:

```js
let gameState = () => {
  switch (this.state.isWin) {
    case true:
      return <h3 className="alert alert-success">WIN</h3>;
    default:
      return <h3 className="alert alert-danger">LOSE</h3>;
  }
};
```

## With short-if:

Short if - can work directly in the return JSX.

```js
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWin: true,
    };
  }

  render() {
    return (
      <div className="container">
        <br />
        {this.state.isWin ? (
          <h3 className="alert alert-success">WIN</h3>
        ) : (
          <h3 className="alert alert-danger">LOSE</h3>
        )}
      </div>
    );
  }
}
```

## Use variable:

```js
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWin: true,
    };
  }

  render() {
    let gameState = this.state.isWin ? (
      <h3 className="alert alert-success">WIN</h3>
    ) : (
      <h3 className="alert alert-danger">LOSE</h3>
    );

    return (
      <div className="container">
        <br />
        {gameState}
      </div>
    );
  }
}
```

## Change state - change presentation:

- We add a button - that will change the state - to false.
- After clicking the button - the presentation will change.

```js
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWin: true,
    };
  }

  render() {
    let gameState = this.state.isWin ? (
      <h3 className="alert alert-success">WIN</h3>
    ) : (
      <h3 className="alert alert-danger">LOSE</h3>
    );

    return (
      <div className="container">
        <br />
        {gameState}

        <button
          onClick={() => this.setState({ isWin: false })}
          className="btn btn-primary"
        >
          Click me
        </button>
      </div>
    );
  }
}
```

## Using `&&` and `||` operators:

We can use `&&` and `||` operators - in a very similar way to `if-else`. (short-if).

- The elements will always return true, but the variable - will be able to be : true / false.

```
true/false && true || true

true && true
false || true
```

```js
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWin: true,
    };
  }

  render() {
    return (
      <div className="container">
        <br />

        {/* && || */}

        {(this.state.isWin && <h3 className="alert alert-success">WIN</h3>) || (
          <h3 className="alert alert-danger">LOSE</h3>
        )}

        {/* 
        
        true/false && true || true
        
        */}

        {/* 
        &&: true & true
        ||: true & true, true & false

        */}
      </div>
    );
  }
}
```
