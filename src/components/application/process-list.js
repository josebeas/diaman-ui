import React, { Component } from 'react';

class ProcessList extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <div className="process-item">
          <img src="../../../../img/allergiesxxhdpi.png" width="100px" height="100px"></img>
          <span href="#" >Allergies</span>
        </div>
        <div className="process-item">
          <img src="../../../../img/diagnosticxxhdpi.png" width="100px" height="100px"></img>
          <span href="#" >Diagnosis</span>
        </div>
        <div className="process-item">
          <img src="../../../../img/Antecedentesxxhdpi.png" width="100px" height="100px"></img>
          <span href="#" >History</span>
        </div>
        <div className="process-item">
          <img src="../../../../img/oscultaxxhdpi.png" width="100px" height="100px"></img>
          <span href="#" >Physical Exam</span>
        </div>
        <div className="process-item">
          <img src="../../../../img/notasxxhdpi.png" width="100px" height="100px"></img>
          <span href="#" >Prescriptions</span>
        </div>
        <div className="process-item">
          <img src="../../../../img/testxxhdpi.png" width="100px" height="100px"></img>
          <span href="#" >Laboratory</span>
        </div>
        <div className="process-item">
          <img src="../../../../img/correxxhdpi.png" width="100px" height="100px"></img>
          <span href="#" >Physical Activities</span>
        </div>
        <div className="process-item">
          <img src="../../../../img/Applexxhdpi.png" width="100px" height="100px"></img>
          <span>Nutritional Therapy</span>
        </div>
        <div className="process-item">
          <img src="../../../../img/goalsxxhdpi.png" width="100px" height="100px"></img>
          <span href="#" >Goals</span>
        </div>
        <div className="process-item">
          <img src="../../../../img/surveyxxhdpi.png" width="100px" height="100px"></img>
          <span href="#" >Surveys</span>
        </div>
        <div className="process-item">
          <img src="../../../../img/citasxxhdpi.png" width="100px" height="100px"></img>
          <span href="#" >Appointments</span>
        </div>
      </div>
    );
  }

}

export default ProcessList;
