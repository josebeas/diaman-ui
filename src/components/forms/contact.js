import React, { Component } from 'react';

class ContactForm extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label>Contact</label>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Password"></input>
        </div>
        <div className="form-group">
          <input type="email" className="form-control"  placeholder="Email"></input>
        </div>
        <div className="form-group">
          <textarea rows="10" className="form-control" placeholder="Your message here..."></textarea>
        </div>
        <div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    );
  }
}

export default ContactForm;
