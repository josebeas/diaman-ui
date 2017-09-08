import React, { Component } from 'react';

import StartLinksBar from './start-link-bar';
import TeamMemberSection from './team-member-section';

class Start extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <div>
          <StartLinksBar />
        </div>
        <div>
          <TeamMemberSection />
        </div>
      </div>
    );
  }
}

export default Start;
