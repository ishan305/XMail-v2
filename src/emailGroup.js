import React, { Component } from "react";

class EmailGroup extends Component {
  render() {
    return (
      <form id="emailGrouped">
        Emails:
        <input type="text" name="emails" value="" />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default EmailGroup;
