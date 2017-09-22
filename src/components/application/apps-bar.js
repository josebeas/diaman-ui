import React, { Component } from 'react';


class AppsBar extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="row justify-content-md-center apps-bar">
        <div className="col">
          Diaman Icon
        </div>
        <div className="col">
          <a href="#">Calendar</a>
        </div>
        <div className="col">
          <a href="#">Patients</a>
        </div>
        <div className="col">
          <a href="#">Education</a>
        </div>
        <div className="col">
          <a href="#">Config</a>
        </div>
        <div className="col">
          <img src="../../../../img/testxxhdpi.png" width="100px" height="100px"></img>
        </div>
      </div>
    );
  }

}

export default AppsBar;
