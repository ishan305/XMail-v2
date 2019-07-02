import React, { Component } from "react";

class EmailSelector extends Component {
  render() {
    return (
      <div className="emailSelector">
        <h4>Select Group</h4>
        <select id="groupDropDown" name="">
          <option value="default">default</option>
        </select>
      </div>
    );
  }
}
export default EmailSelector;
