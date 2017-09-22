import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Application from './components/application';

class App extends Component {

  constructor(props){
    super(props);
  }

  render () {
      return (
          <Application />
      );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
