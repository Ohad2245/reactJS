# basic app in reactJS

in cmd/terminal:

- Create new website

```
npm init react-app my-app
// or
yarn create react-app my-app
```

- enter the folder

```
cd my-app
```

- activate the app

```
npm start
// or
yarn start
```

- The app will open in the browser automatically in address: `http://localhost:3000`
- The page will reload automatically after changes in the code.

> note: to add yarn: npm install --global yarn

### Go to `src/App.js`

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

- and delete all css in `App.css`

```css
.App {
  text-align: center;
}
```
