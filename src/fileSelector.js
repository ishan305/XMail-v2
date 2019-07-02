import React, { Component } from "react";
import CSVReader from "react-csv-reader";

class FileSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filename: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(data) {
    this.setState({
      filename: data
    });
    var emailsGrouped = {};
    for (var i = 0; i < data.length; i++) {
      let group = data[i];
      if (group.length > 1) {
        var temp = [];
        for (var j = 1; j < group.length; j++) {
          if (group[j] !== "") {
            temp.push(group[j]);
          }
        }
        emailsGrouped[group[0]] = temp;
      }
    }
    // console.log(emailsGrouped);
    this.props.callbackFromParent(emailsGrouped);
  }
  render() {
    return (
      <div className="fileSelector">
        <CSVReader
          label="Upload CSV file"
          onFileLoaded={event => this.handleChange(event)}
        />
      </div>
    );
  }
}
export default FileSelector;
