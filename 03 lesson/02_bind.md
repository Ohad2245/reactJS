# `bind` keyword

Calling functions:

1. If we call a function without `()` - it will work fine.

The problem: We cannot add parameters to the function

```js
import React, { Component } from "react";

export default class MyEvent extends Component {
  myFunc() {
    alert("hello");
  }

  render() {
    return (
      <div>
        <button onClick={this.myFunc}>Click me</button>
      </div>
    );
  }
}
```

2. When we add `()` - it will activate the function automatically. - Error!!

```js
<button onClick={this.myFunc()}>Click me</button>
```

### first solution - wrap with arrow function:

```js
import React, { Component } from "react";

export default class MyEvent extends Component {
  myFunc(num) {
    alert(`My value is = ${num}`);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.myFunc(12)}>Click me</button>
      </div>
    );
  }
}
```

### Second solution - using `bind` keyword

* no need to add arrow function
* bind will always get as first parameter `this`
```js
import React, { Component } from "react";

export default class MyEvent extends Component {
  myFunc(num) {
    alert(`My value is = ${num}`);
  }

  render() {
    return (
      <div>
        <button onClick={this.myFunc.bind(this, 12)}>Click me</button>
      </div>
    );
  }
}
```
