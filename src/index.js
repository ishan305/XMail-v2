import React, { Component } from "react";
import ReactDOM from "react-dom";
import FileSelector from "./fileSelector.js";
import EmailSelector from "./emailSelector.js";
import EmailGroup from "./emailGroup.js";

class HelloWorld extends Component {
  constructor(props) {
    super(props);

    this.emailsGrouped = {
      emails: ""
    };
  }

  myCallBack = dataFromChild => {
    console.log(dataFromChild);
  };

  render() {
    return (
      <div className="App">
        <h1 className="Headings">XMail</h1>

        <FileSelector callbackFromParent={this.myCallBack} />
        <br />
        <br />

        <EmailSelector />

        <br />
        <br />
        <br />
        <br />
        <EmailGroup />
      </div>
    );
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
