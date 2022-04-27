# `event` object

The **event** keyword - is SyntheticBaseEvent - an object. We can use it to get elements and change them in HTML.

```js
import React, { Component } from "react";

export default class MyEvent extends Component {
  render() {
    return (
      <div>
        <button onClick={(event) => console.log(event)}>Click me</button>
      </div>
    );
  }
}

// we got a very big object
```

### Change style with event.target

- Every time we activate the function (by changing the value in the input), the function `changeColor()` will run, and change the style of the input.

- target - is the element type
- in target - we have access to the element's style

```js
import React, { Component } from "react";
import "./App.css";

export default class MyEvent extends Component {
  changeColor(event) {
    event.target.style.backgroundColor = "orange";
    event.target.style.color = "white";
  }

  render() {
    return (
      <form>
        <input
          type="text"
          onChange={(e) => this.changeColor(e)}
          style={{ backgroundColor: "red" }}
        />
      </form>
    );
  }
}
```

## Change style from CSS class:

1. App.css

Define 2 classes: for the initial state and for after the change.

```css
.App {
  text-align: center;
}

.myFirstStyle {
  background-color: blue;
}

.mySecondStyle {
  background-color: olive;
  color: antiquewhite;
}
```

2. Define in class `MyEvent.js` input element.
   When the user changes any value in the input - it will change the style of the input.

```js
import React, { Component } from "react";
// 1. import the CSS file
import "./App.css";

export default class MyEvent extends Component {
  // the function will use the CSS class from `App.css`,
  // and will change the color & bgColor for the input.
  changeColor(event) {
    event.target.className = "mySecondStyle";
    // console.log(event.target.style)
  }

  render() {
    return (
      <form>
        {/* In the input - define an event and send the event 
                object to the function */}
        <input
          type="text"
          onChange={(e) => this.changeColor(e)}
          className="myFirstStyle"
        />
      </form>
    );
  }
}
```
