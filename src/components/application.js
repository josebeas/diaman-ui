import React, { Component } from 'react';

import NavBar from './application/nav-bar';
import AppsBar from './application/apps-bar';
import PatientBar from './application/patient-bar';
import ProcessMenu from './application/process-menu';
import ProcessList from './application/process-list';

class Application extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <div>
          <AppsBar />
        </div>
        <div>
          <PatientBar />
        </div>
        <div>
          <ProcessMenu />
        </div>
        <div>
          <ProcessList />
        </div>
      </div>
    );
  }

}

export default Application;
