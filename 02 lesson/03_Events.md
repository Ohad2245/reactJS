# Events

There are many events(something the user does in the browser, that can affect the code) in ReactJS(html).

### Syntax

In react - we use uppercase in a new word

```
in html: onclick, onmousehover, oncopy, onpaste
in react: onClick, onMouseHover, onCopy
```

In react - we use `{}`, and call the function from another funtion

```js
// in html
<button onclick="func()"></button>
// in react
<button onClick={() => func()}></button>
```

## Events list (partial)

1. Clipboard Events - onCopy, onCut, onPaste
2. Keyboard Events - onKeyDown onKeyPress onKeyUp
3. Focus Events - onFocus onBlur
4. Form Events - onChange onInput onInvalid onReset onSubmit
5. Generic Events - onError onLoad
6. Mouse Events - onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp
7. Media Events - onAbort onCanPlay onCanPlayThrough onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting

## Example:

- basic - onClick:

```js
import React, { Component } from "react";

export default class EncryptMSG extends Component {
  render() {
    return (
      <div>
        <button onClick={() => alert("Clicked the button")}>Click me</button>
      </div>
    );
  }
}
```

- input:

```js
import React, { Component } from "react";

export default class MyEvent extends Component {
  func = () => {
    let userName = document.getElementById("userName").value;
    alert(`Your username: ${userName}`);
  };

  render() {
    return (
      <div>
        <input placeholder="Enter your user name..." id="userName" />
        <button onClick={() => this.func()}>Click me</button>
      </div>
    );
  }
}

// create 3 square divs, 100/100, with different bg color,
// add h3 with number: 1, 2, 3 to each div
// when user focus the div - print the color in alert
// when user stops focusing - print the div number in alert
```

- use onMouseEnter, onMouseLeave:

```js
import React, { Component } from "react";

export default class MyEvent extends Component {
  render() {
    return (
      <div
        style={{
          textAlign: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <div
          style={{ height: 100, width: 100, backgroundColor: "pink" }}
          onMouseEnter={() => alert("pink")}
          onMouseLeave={() => alert("1")}
        >
          <h3>1</h3>
        </div>
        <div
          style={{ height: 100, width: 100, backgroundColor: "orange" }}
          onMouseEnter={() => alert("orange")}
          onMouseLeave={() => alert("2")}
        >
          <h3>2</h3>
        </div>
        <div
          style={{ height: 100, width: 100, backgroundColor: "red" }}
          onMouseEnter={() => alert("red")}
          onMouseLeave={() => alert("3")}
        >
          <h3>3</h3>
        </div>
      </div>
    );
  }
}

// create 3 square divs, 100/100, with different bg color,
// add h3 with number: 1, 2, 3 to each div
// use the events: onMouseEnter, onMouseLeave
// when user enters the div - print the color in alert
// when user exits - print the div number in alert
```

### `event` keyword

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
```
