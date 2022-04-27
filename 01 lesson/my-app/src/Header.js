import React from "react";

function Header(props) {

    return (
      <div className="App">
          <h1>{props.headerTxt}</h1>
      </div>
    );
  }

export default Header;