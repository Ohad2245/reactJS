# Inheritance & composition in react

- Inheritance - הורשה. class B inherits all properties & methods of class A

```js
class A {}
class B extends A {}
```

- real example:

```js
class Fruit {}
class Apple extends Fruit {}
```

- Composition - הכלה. Class A is a property in class B

```ts
class A {}
class B {
  myValue: A;
}
```

- real example:

```ts
class Engine {}
class Car {
  myEngine: Engine;
}
```

## In react

In react - we do not need to use - inheritance.

1. There is only 1 inheritance we can use for a class, and there is a built-in inheritance for `Component` class.
2. When we want to bring another class - it is composition:

(we can use a class multiple times).

```js
import React, { Component } from "react";
import Example from "./Example";

export default class App extends Component {
  render() {
    return (
      <div>
        <Example />
        <Example />
        <Example />
      </div>
    );
  }
}
```

#### We can send 2 values from `App` to `Example`:

- props - Any value sent inside the component name: ` <Example name="John" />`
- children - Any element of HTML sent inside the component - between its two tags:

```js
<Example>
  <h2 style={{ color: "blue" }}>I am a child prop</h2>
</Example>
```

- App.js

```js
import React, { Component } from "react";
import Example from "./Example";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        {/* props */}
        <Example name="John" />
        <Example name="Alex" />
        {/* props.children */}
        <Example>
          <h2 style={{ color: "blue" }}>I am a child prop</h2>
        </Example>
      </div>
    );
  }
}
```

- Example.js

```js
import React, { Component } from "react";

export default class Example extends Component {
  // When we use props we must add a constructor
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {/* Show the header only if props.name exists */}
        {this.props.name && <h3>My name is: {this.props.name}</h3>}

        {this.props.children}
      </div>
    );
  }
}
```
