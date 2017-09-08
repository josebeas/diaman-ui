import React, { Component } from 'react';

class Login extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="login-form">

        <label>Welcome</label>

        <div className="form-group">
          <input placeholder="Username" className="form-control" ></input>
        </div>

        <div className="form-group">
          <input type="password" placeholder="Password" className="form-control" />
        </div>

        <div className="form-group">
          <button type="button" className="btn btn-default">
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
