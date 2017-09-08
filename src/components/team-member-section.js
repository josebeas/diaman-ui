import React, { Component } from 'react';

import StartLinksBar from './start-link-bar';
import TeamMember from './team-member';

class TeamMemberSection extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="team-member-section">
        <div className="team-member-description">
          <h3>About us</h3>
          <div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.
            </p>
          </div>
        </div>
        <ul>
          <li>
            <TeamMember />
          </li>

          <li>
            <TeamMember />
          </li>

          <li>
            <TeamMember />
          </li>

        </ul>
      </div>
    );
  }
}

export default TeamMemberSection;
