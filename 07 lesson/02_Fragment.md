# Fragment - שבריר

In the return we must always return only 1 HTML element.
Therefore - we usually use `div`. It can cause too many divs in the DOM, and can be a propblem to understand the code and debug.

- We can use Fragment: `React.Fragment` or `empty element`

```js
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1></h1>
        <h1></h1>
      </React.Fragment>
    );
  }
}
```

```js
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <>
        <h1></h1>
        <h1></h1>
      </>
    );
  }
}
```
