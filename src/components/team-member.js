import React, { Component } from 'react';


class TeamMember extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="team-member">
        <div className="team-member-image">
          <img src="..." alt="..." />
        </div>
        <div>
          <h4>Jane Doe</h4>
          <small>Chief HR</small>
          <p>
          <br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate
          </p>
        </div>
      </div>
    );
  }

}

export default TeamMember;
