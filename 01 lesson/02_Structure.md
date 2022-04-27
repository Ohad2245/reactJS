# ReactJS structure:

- gitignore - for git - do not upload these files
  & folders.
- `package.json` - basic settings for our app.
- `README.md` - documentation for the website

```
# my-app

This is my first website ever in reactJS...
```

### node_modules

A folder containing all the javaScript modules for the project.

### public

In public folder we put assets -> images, fonts etc..

> note: we can remove favicon, logos.

- `index.html`
  change title, remove favicon and logos links.
  in this file we can also add - bootstrap.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <title>my-first-app</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

- `manifiest.json` - basic info about the app
  remove icons array.

```json
{
  "short_name": "React App",
  "name": "Create React App Sample",
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}
```

- `robots.txt` - files and folders we do not allow google crawler to search in.

### src

remove: `logo.svg, index.css`

- `index.js` - this is the entry point of our app.
  Sends to the `index.html` file the components needed.

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// ReactDOM.render() -> this is the most basic function in react
// show the output to the dom
ReactDOM.render(
  <React.StrictMode>
    {/* for now - App.js is the only file outside */}
    <App />
  </React.StrictMode>,
  // goes to the only HTML file in the website: index.html
  document.getElementById("root")
);

reportWebVitals();
```

- `App.js` - this is the main component of our app.

```js
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
```

- `App.css` - this is the css style for `App.js`

```css
.App {
  text-align: center;
}
```
