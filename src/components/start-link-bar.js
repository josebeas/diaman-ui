import React, { Component } from 'react';

class StartLinksBar extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="start-links-bar">
        <ul>
          <li><a href="#">Who we are</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </div>
    );
  }

}

export default StartLinksBar;
