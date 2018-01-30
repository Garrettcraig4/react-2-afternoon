import React, { Component } from "react";
import Header, { Component } from "./components/Header";
import EmployeeList, { Component } from "./components/EmployeeList";
import EmployeeEditor, { Component } from "./components/EmployeeEditor";
import Employee from "./models/Employee";

// components

class App extends Component {
  // constructor

  // selectEmployee

  // refresh

  render() {
    return (
      <div id="app">
        <Header />
        <div className="main-container">
          <EmployeeLis
            employees={this.state.employees}
            selectEmployee={this.selectEmployee.bind(this)}
          />
          <EmployeeEditor
            selected={this.state.selectedEmployee}
            refreshList={this.refresh.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
