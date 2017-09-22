import React, { Component } from 'react';

class StartLinksBar extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="row justify-content-md-center align-items-center">
          <div className="col-md-auto"><a href="#">Who we are</a></div>
          <div className="col-md-auto"><a href="#">Contact</a></div>
          <div className="col-md-auto"><a href="#">Login</a></div>
      </div>
    );
  }

}

export default StartLinksBar;
