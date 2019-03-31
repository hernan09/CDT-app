import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {
  render() {
    return (
      <nav style={{ opacity: 0.7 }} className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#top">Home</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#top">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#top">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#top">About</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Nav;
