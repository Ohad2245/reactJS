# Class task - calculate Area and circumference

#### Create 3 blocks:

1. Square
2. Triangle
3. Circle

#### For each one:

1. Add image of the shape & a header
2. Add inputs to calculate area and circumference from user.
   > note: use bind for area and arrow function for circumference
3. Design the elements in CSS - initial style
   - color
   - bg-color
4. after calculation - change the style to be a different:
   - color
   - bg-color

> note: You can separate the data to 3 different files. Not must

### Goodluck!

## Solution:

```js
import React, { Component } from "react";
import "../App.css";

export default class Square extends Component {
  calculateArea(event) {
    let height = document.getElementById("hs1").value;
    let width = document.getElementById("ws1").value;

    event.target.className = "mySecondStyle";
    alert(`${height * width}`);
  }

  calculateCirc(event) {
    let height = document.getElementById("hs2").value;
    let width = document.getElementById("ws2").value;

    event.target.className = "mySecondStyle";
    alert(`${height * 2 + width * 2}`);
  }

  render() {
    return (
      <div>
        <h2>Square</h2>
        <hr />
        <h4 id="resArea">Area:</h4>
        <input
          type="number"
          placeholder="height"
          required
          id="hs1"
          className="myFirstStyle"
        />
        <input
          type="number"
          placeholder="width"
          required
          id="ws1"
          className="myFirstStyle"
        />
        <button onClick={(event) => this.calculateArea(event)}>
          Calculate
        </button>
        <h4 id="resArea">Circumference:</h4>
        <input
          type="number"
          placeholder="height"
          required
          id="hs2"
          className="myFirstStyle"
        />
        <input
          type="number"
          placeholder="width"
          required
          id="ws2"
          className="myFirstStyle"
        />
        <button onClick={(event) => this.calculateCirc(event)}>
          Calculate
        </button>
      </div>
    );
  }
}
```
