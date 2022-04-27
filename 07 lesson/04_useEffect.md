# useEffect hook

- Will be used only in a function

- Allow us to preform side effects in fuctions.

- in React classes, we put side effects into componentDidMount and componentDidUpdate.

##### side effects:

- fetch data - from database, API
- timers
- directly update the DOM

useEffect gets 2 parameters:

- fuction
- dependencies (optional)

### Example - timer

1. Simple timer in useEffect hook - will update the variable counter each second in 1:

- There is no calling for the function - run automatically
- Without dependencies - runs on every render
- With dependencies - runs only on the first render, and when the dependency changes

```js
// 1. import
import React, { useState, useEffect } from "react";

export default function Timer() {
  // 2. define variable counter
  const [counter, setCounter] = useState(0);

  // 3. add side-effect - we do not call useEffect
  useEffect(() => {
    setTimeout(() => {
      setCounter(counter + 1);
    }, 1000);
  });

  return (
    <>
      <h2>Counter: {counter}</h2>
    </>
  );
}
```

- Stop the counter:

```js
// 1. import
import React, { useState, useEffect } from "react";

export default function Timer() {
  // 2. define variable counter
  const [counter, setCounter] = useState(0);

  // 3. stop the timeout when counter = 5
  useEffect(() => {
    let timer = setTimeout(() => {
      setCounter(counter + 1);
    }, 1000);
    // we can use it to stop the timer
    if (counter === 5) clearTimeout(timer);
  });

  return (
    <>
      <h2>Counter: {counter}</h2>
    </>
  );
}
```

2. Use empty array in dependencies - it will run only in the first render:

```js
// 1. import
import React, { useState, useEffect } from "react";

export default function Timer() {
  // 2. define variable counter
  const [counter, setCounter] = useState(0);

  // 3. Added empty [] for dependencies
  // Will run only in the first render
  useEffect(() => {
    setTimeout(() => {
      setCounter(counter + 1);
    }, 1000);
  }, []);

  return (
    <>
      <h2>Counter: {counter}</h2>
    </>
  );
}
```

3. Add dependency:

```js
// 1. import
import React, { useState, useEffect } from "react";

export default function Timer() {
  // 2. define variable counter
  const [counter, setCounter] = useState(0);
  const [res, setRes] = useState([]);

  // 3. it will run once in the first render,
  // and each time the conuter changes
  useEffect(() => {
    setRes([...res, "x"]);
  }, [counter]);

  return (
    <>
      <h2>Counter: {counter}</h2>
      <h2>Result: {res}</h2>
      <button onClick={() => setCounter(counter + 1)}>Click me</button>
    </>
  );
}
```

### Fetch data:

```js
// 1. import useState, useEffect
import React, { useState, useEffect } from "react";
// 2. external library to call URL's
import axios from "axios";

function App() {
  // 3. state to hold the array of todos from URL
  const [todos, setTodos] = useState([]);

  // 5. the function wil wait(async-await) for data to come from URL, and store in `todos` state
  let fetchData = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    setTodos(data);
  };

  // 4. useEffect will call the function fetchData only once - when page is rendered
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>To-do list</h1>

      {/* If there is data in todos: loop over the array and show the todo-list */}
      {todos.length > 0 &&
        todos.map((todo) => (
          <div key={todo.id}>
            {todo.completed === true ? (
              <li className="alert alert-success">{todo.title}</li>
            ) : (
              <li className="alert alert-danger">{todo.title}</li>
            )}
          </div>
        ))}
    </div>
  );
}
export default App;
```
