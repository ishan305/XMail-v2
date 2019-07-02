import CSVReader from "react-csv-reader";

class fileHandler {
  handleForce(data) {
    console.log(data);
  }

  reader = (
    <div className="container">
      <CSVReader
        cssClass="react-csv-input"
        label="Select CSV with secret Death Star statistics"
        onFileLoaded={event => this.handleForce(event.target.value)}
      />
    </div>
  );
}
export default fileHandler;
