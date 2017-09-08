import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Start from './components/start';



class App extends Component {

  constructor(props){
    super(props);
  }

  render () {
      return (
          <Start />
      );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
