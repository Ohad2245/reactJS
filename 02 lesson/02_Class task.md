## Class task - props & state & setState

1. Install crypto-js from npm
2. import to `EncryptMSG` and use.
3. In state - define a message string
4. add header from props - `Encrypted message`
5. in html - encrypt the message using any encryption you'd like, and show to the user
6. color the encrypted message in red.
   > note: style={{}}
7. Add a button that changes the message to something else.


### Solution:

```js
import React, { Component } from "react";
import md5 from "crypto-js/md5";

// import the entire library:
// const CryptoJS = require('crypto-js')

import sha256 from "crypto-js/sha256";
import hmacSHA512 from "crypto-js/hmac-sha512";
import Base64 from "crypto-js/enc-base64";

export default class EncryptMSG extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "this is my secret code...",
    };
  }

  render() {
    return (
      <div>
        <h1>{this.props.header}</h1>
        <h4>
          <label style={{ color: "red" }}>MD5: </label>
          {md5.apply(this.state.message).toString()}
        </h4>

        <h4>
          <label style={{ color: "red" }}>SHA256: </label>
          {Base64.stringify(
            hmacSHA512(sha256("12" + this.state.message), "123")
          )}
        </h4>
      </div>
    );
  }
}
```
