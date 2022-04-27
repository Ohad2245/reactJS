# JSX - JavaScript XML.

- JSX is HTML inside JavaScript files.
- We put JSX inside `return()`
- Inside HTML we can also inject JavaScript.
- JSX prevents injection attacs on our website. It converts each value to string before it renders it.

##### JSX must send always only 1 element

In return function - we can only send 1 element of HTML. If we want to return more - we can wrap them with 1 parent block `div`.

App.js:

```js
import "./App.css";

function App() {
  let str = "Hello world";

  return (
    <div className="App">
      <h1>{str}</h1>
    </div>
  );
}

export default App;
```

- with object:

```js
import "./App.css";

function App() {
  let flower = {
    fType: "my flower",
    fImg: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2021%2F10%2F22%2Fpink-camellias.jpg",
  };

  return (
    <div className="App">
      <h1>{flower.fType}</h1>
      <img src={flower.fImg} height={300} />
    </div>
  );
}

// Create an array with 5 countries objects.
// each country will have: name, capital, flag(url)
// show the details in the browser.

export default App;
```

### Solution - hard-coded:

```js
import "./App.css";

function App() {
  let countries = [
    {
      name: "Israel",
      capital: "Jerusalem",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/640px-Flag_of_Israel.svg.png",
    },
    {
      name: "France",
      capital: "Paris",
      flag: "https://upload.wikimedia.org/wikipedia/commons/6/62/Flag_of_France.png",
    },
    {
      name: "Australia",
      capital: "canabra",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/640px-Flag_of_Australia_%28converted%29.svg.png",
    },
    {
      name: "Canada",
      capital: "ottawa",
      flag: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg",
    },
    {
      name: "Greece",
      capital: "athens",
      flag: "https://cdn.britannica.com/49/1049-004-AE4BAD3E/Flag-Greece.jpg",
    },
  ];

  return (
    <div className="App">
      <h1>{countries[0].name}</h1>
      <h3>{countries[0].capital}</h3>
      <img src={countries[0].flag} height={100} />

      <h1>{countries[1].name}</h1>
      <h3>{countries[1].capital}</h3>
      <img src={countries[1].flag} height={100} />

      <h1>{countries[2].name}</h1>
      <h3>{countries[2].capital}</h3>
      <img src={countries[2].flag} height={100} />

      <h1>{countries[3].name}</h1>
      <h3>{countries[3].capital}</h3>
      <img src={countries[3].flag} height={100} />

      <h1>{countries[4].name}</h1>
      <h3>{countries[4].capital}</h3>
      <img src={countries[4].flag} height={100} />
    </div>
  );
}

// Create an array with 5 countries objects.
// each country will have: name, capital, flag(url)
// show the details in the browser.

export default App;
```

## Solution - programming way:

```js
import "./App.css";

function App() {
  // array of objects:
  let countries = [
    {
      name: "Israel",
      capital: "Jerusalem",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/640px-Flag_of_Israel.svg.png",
    },
    {
      name: "France",
      capital: "Paris",
      flag: "https://upload.wikimedia.org/wikipedia/commons/6/62/Flag_of_France.png",
    },
    {
      name: "Australia",
      capital: "canabra",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/640px-Flag_of_Australia_%28converted%29.svg.png",
    },
    {
      name: "Canada",
      capital: "ottawa",
      flag: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg",
    },
    {
      name: "Greece",
      capital: "athens",
      flag: "https://cdn.britannica.com/49/1049-004-AE4BAD3E/Flag-Greece.jpg",
    },
  ];

  return (
    <div className="App">
      {/* Loop over the array with `map()` function */}
      {countries.map((country) => (
        <div>
          <h1>{country.name}</h1>
          <h3>{country.capital}</h3>
          <img src={country.flag} height={100} />
        </div>
      ))}
      {/* Add to each country array of borders. Show the borders in a list */}
    </div>
  );
}

// Create an array with 5 countries objects.
// each country will have: name, capital, flag(url)
// show the details in the browser.

export default App;
```

## Wrap elements in empty element:

when we want to have many elements and not to return them in a div.

- In the DOM - it removes the div nodes.

```js
<>
  <h1>{country.name}</h1>
  <h3>{country.capital}</h3>
  <img src={country.flag} height={100} />
</>
```

## ClassName instead of class:

In html we define css class this way:

```html
<div class="App"></div>
```

But, since we are in JS file - class keyword is also used to create a class(OOP). Therefore - css classes are `className` in react.

```html
<div className="App"></div>
```
