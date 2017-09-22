import React, { Component } from 'react';

class PatientBar extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="patient-bar row align-items-center">
        <div className="search-box">
          <label>Search:</label>
          <input></input>
        </div>
        <div className="col">
          <label>Patient Name</label>
        </div>
        <div className="col">
          <label>Blood level</label>
          <img src="../../../../img/sangrexhdpi.png" width="20px" height="20px"></img>
        </div>
        <div className="col">
          <label>Weight</label>
          <img src="../../../../img/basculaxhdpi.png" width="20px" height="20px"></img>
        </div>
        <div className="col">
          <label>Pressure</label>
          <img src="../../../../img/presionxxhdpi.png" width="20px" height="20px"></img>
        </div>
      </div>
    );
  }

}

export default PatientBar;
