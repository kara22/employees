import React from "react";
import ReactDOM from "react-dom";
import EmployeeList from "./components/employee-list";

//After meteor loads in the browser, render my app to the dom

const App = () => {
  return (
  <div>
    <EmployeeList/>
  </div>
  );
}


Meteor.startup(() => {
//React render call
  ReactDOM.render(<App/>, document.querySelector(".container"))
});
