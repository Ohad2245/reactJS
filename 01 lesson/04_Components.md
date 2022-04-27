# Components

Components are independent and reusable bits of code.

- We use components to build a website.
- componenets in reactJS can be created in 2 ways:
  - class
  - function

* when we create component in react it must start with `uppercase` letter.
  `about` -> `About`

- any website has:

  - navigation - logo and links
  - header - with short description
  - body - content of the page
  - footer - links etc..

- we divide the app to small pieces of code:
  - easy to maintain
  - reusable

### function component:

```js
let Header = (props) => {
  return <h1>This is header</h1>;
};

export default Header;
```

### class component:

- A class component must extend `React.Component`
- We wrap the returned values in `render()` function

```js
import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>class component...</h1>
      </div>
    );
  }
}

export default Header;
```

## components inside other components:

- note: the file `Header.js` is imported to `App.js`

```js
import React from "react";

class SubHeader extends React.Component {
  render() {
    return <h4>This is a short description about the app</h4>;
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>class component...</h1>
        <SubHeader />
      </div>
    );
  }
}

export default Header;
```

## props

- header.js

```js
import React from "react";

function Header(props) {
  return <h1>{props.headerTxt}</h1>;
}

export default Header;
```

- App.js

```js
import "./App.css";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header headerTxt="my header 1" />
      <Header headerTxt="my header 2" />
      <Header headerTxt="my header 3" />
      <Header headerTxt="my header 4" />
    </div>
  );
}

export default App;
```
