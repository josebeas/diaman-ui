import React, { Component } from 'react';

class LocationDetails extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="footer">
        <div className="row" >
          <div className="col center" >
            <span className="">Diaman AS</span>
          </div>
          <div className="col" >
            <span href="#">Category</span>
            <br></br>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Downloads</a></li>
              <li><a href="#">Team</a></li>
            </ul>
          </div>
          <div className="col" >
            <span href="#">Management</span>
            <ul>
              <li><a href="#">Resources</a></li>
              <li><a href="#">Institutions</a></li>
              <li><a href="#">Locations</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="col" >
            <button className="pos-top ">Back to top</button>
            <button className="pos-bottom ">Suscribe</button>
          </div>
          <div className="col" >
            <div>Social media buttons</div>
          </div>
        </div>
      </div>
    );
  }
}

export default LocationDetails;
