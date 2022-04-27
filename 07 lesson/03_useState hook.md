# Hooks

Hooks are used with functions - to add built-in methods for a function (same as built-in functions in a class).

- Hooks allow us to use only functions, and classes are no longer needed.

## useState

- Store variables of the function
- useState accepts an initial state and returns 2 values:
  - The current value
  - A function to update the state

## Basic actions:

1. import
2. init the state
3. show the state value to the DOM
4. Update the state using the function `set`

state can be from any value: number, string, boolean, object, array, matrix

```js
// 1. import
import React, { useState } from "react";

function App() {
  // 2. init state
  const [myName, setMyName] = useState("A");

  return (
    <React.Fragment>
      {/* 3. Show the state in the DOM */}
      <h2>my name is: {myName}</h2>

      {/* 4. Update the state */}
      <button onClick={() => setMyName("B")} className="btn btn-primary">
        Change my name
      </button>
    </React.Fragment>
  );
}

export default App;
```

- Another example:

```js
// 1. import
import React, { useState } from "react";

function App() {
  // 2. init state

  const [counter, setConuter] = useState(0);

  return (
    <React.Fragment>
      {/* 3. Show the state in the DOM */}
      <h2>You clicked {counter} times</h2>

      {/* 4. Update the state */}
      <button
        onClick={() => setConuter(counter + 1)}
        className="btn btn-primary"
      >
        Click
      </button>
    </React.Fragment>
  );
}

export default App;
```

### Use objects in useState

```js
// 1. import
import React, { useState } from "react";

function App() {
  // 2. init state
  const [address, setAddress] = useState({
    city: "Jerusalem",
    country: "Israel",
  });

  return (
    <div className="container">
      {/* 3. show state */}
      <h3>
        I live in {address.city}, {address.country}
      </h3>

      {/* 4. update state - will remove previous data */}
      <button
        onClick={() => setAddress({ city: "Ariel" })}
        className="btn btn-danger"
      >
        Update my city
      </button>

      {/* 4. update state - will keep previous data */}
      <button
        onClick={() => setAddress({ ...address, city: "Ariel" })}
        className="btn btn-success"
      >
        Update my city
      </button>
    </div>
  );
}

export default App;
```

### Use arrays in useState

Primary array numbers - `add a function`

```js
// 1. import
import React, { useState } from "react";

const App = () => {
  // 2. init state
  const [primeNumbers, setPrimeNumbers] = useState([1, 2, 3, 5, 7, 11]);

  // function to return true/false if number is prime
  let isPrime = (num) => {
    if (num % 2 == 0 || num % 3 == 0) return false;
    for (let i = 5; i * i < num; i = i + 6)
      if (num % i == 0 || num % (i + 2) == 0) return false;
    return true;
  };

  // function to get last number in array, and put the next prime
  // in the array back.
  let getNextPrime = () => {
    let lastNum = primeNumbers[primeNumbers.length - 1]; // 11

    while (true) {
      lastNum++;
      if (isPrime(lastNum)) break;
    }

    setPrimeNumbers([...primeNumbers, lastNum]);
  };

  return (
    <div className="container">
      {/* 3. show state to the DOM */}
      <h2>Prime numbers - מספרים ראשוניים</h2>
      {primeNumbers.map((num) => (
        <li key={num}>{num}</li>
      ))}

      {/* 4. Update the array - wrong way - will override all the previous data */}
      <button onClick={() => setPrimeNumbers([13])} className="btn btn-danger">
        Add next prime
      </button>

      <br />

      {/* 4. Update the array - right way */}
      {/* ...primeNumbers == 1, 2, 3, 5, 7, 11 */}
      <button
        onClick={() => setPrimeNumbers([...primeNumbers, 13])}
        className="btn btn-success"
      >
        Add next prime
      </button>

      <br />

      {/* 4. Update the array - right way */}
      {/* redirect to external function that will get the next prime number */}
      <button onClick={() => getNextPrime()} className="btn btn-primary">
        Add next prime
      </button>
    </div>
  );
};

export default App;
```
