# Mounting - הרכבה

Mounting - putting elements in the DOM. First stage.

We have 4 functions for mounting in react class, in that order:

1. constructor()
2. getderivedStateFromProps()
3. render()
4. componentDidMount()

The render() metohd os a must.

## 1. constructor() - בנאי

- constructor() is the first method to run in a component.
- We init the state(inner data) and props(outer data) in constructor().
- constructor is the only place to define `this.state`. To update the state - we only can use `setState()` method.

```js
 constructor(props){
    // get props, send them to the super method
    super(props);
    // define class variables - using state
    this.state = {
      name: 'John'
    }
    // bind event handler methods to a variable.
    this.handleClick = this.handleClick.bind(this);
  }
```

```js
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "John" };
  }

  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <button onClick={() => this.setState({ name: "Alex" })}>
          Click me
        </button>
      </div>
    );
  }
}
```

## 2. getderivedStateFromProps()

Called before render() method. (before rendering elements to the DOM). Rarely used.

- Update the state from props

- Example.js

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
    state.name = props.myName;
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
      <div>
        <Example myName="Alex" />
      </div>
    );
  }
}
```

## render()

Is the only must method in react class.

- In render() - we must change the state only with `setState()`
- It returns the HTML elements to the DOM.

```js
render() {
    return (
      <div>
      <h1>Hello</h1>
      </div>
    )
  }
```

## componentDidMount()

- componentDidMount() is a good lifecycle to fetch data. It will run only once.
- Other functions - can run multiple times - and when we want to get data from db or api, there is no need to call more than 1 time.

* In that method - we can use `async - await`, because it will run only once.

```js
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWin: true,
    };
  }

  componentDidMount() {
    console.log("In componentDidMount");
    this.setState({ isWin: false });
  }

  render() {
    return (
      <div className="container">
        {(this.state.isWin && <h3 className="alert alert-success">WIN</h3>) || (
          <h3 className="alert alert-danger">LOSE</h3>
        )}
      </div>
    );
  }
}
```

- fetch data from API:

```js
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    try {
      const result = await fetch(`https://jsonplaceholder.typicode.com/users`); // array of objects
      this.setState({ users: await result.json() });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log(this.state.users);
    return (
      <div className="container">
        {this.state.users &&
          this.state.users.map((user) => (
            <div key={user.id}>
              <h5>{user.name}</h5>
              <p>phone number: {user.phone}</p>
            </div>
          ))}
      </div>
    );
  }
}
```

### Example using real api of nasa:

```js
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    try {
      const result = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`
      );
      this.setState({ imgOfTheDay: await result.json() });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="container">
        {this.state.imgOfTheDay && (
          <div>
            <p>date: {this.state.imgOfTheDay.date}</p>
            <h3>{this.state.imgOfTheDay.title}</h3>
            <p>{this.state.imgOfTheDay.explanation}</p>

            <img src={this.state.imgOfTheDay.url} height={300} />
          </div>
        )}
      </div>
    );
  }
}
```
