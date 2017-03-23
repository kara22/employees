import React from "react";




const EmployeeDetail = ({employee}) => {

const { name, email, phone, avatar} = employee;

  return (

    <div className="thumbnail">

      <img src={avatar} className="img-circle" />
      <div className="caption">
        <h3 className="text-center">{name}</h3>
        <ul className="list-group">
          <li className="list-group-item text-center">Email: {email}</li>
          <li className="list-group-item text-center">Phone: {phone}</li>
        </ul>
      </div>
    </div>

    );

};

export default EmployeeDetail;
