import React, {Component} from "react";
import {createContainer} from "meteor/react-meteor-data";
import {Employees} from '../../imports/collections/employees';
import EmployeeDetail from './employee-detail';

const PER_PAGE = 20;

class  EmployeeList extends Component {

    componentWillMount() {
      this.page = 1;
    }

    handleButtonClick() {
      Meteor.subscribe('employees', PER_PAGE * this.page + 1);
      this.page += 1;

    }

    render () {
      return(
        <div>
          <div className='employee-list'>
            {this.props.employees.map(employee=>
              <EmployeeDetail key={employee._id} employee={employee}/>)}
          </div>
          <button className="btn btn-primary"
          onClick={this.handleButtonClick.bind(this) }>Load more</button>
        </div>


        );
      }

}

export default createContainer(() => {
// set up subscription
Meteor.subscribe('employees', PER_PAGE);

//return an object. whatever we return will be sent
// to employee list as props
return {employees: Employees.find({}).fetch()};

}, EmployeeList);
