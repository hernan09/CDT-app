import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      hour: 0
    };
    this.update = this.update.bind(this);
  }

  update(event) {
    const date = new Date().toLocaleTimeString();
    this.setState({
      hour: date
    });
  }

  componentWillMount() {
    setInterval(this.update, 1000);
    this.update();
  }

  render() {
    return (
      <nav style={{ width: '90%', margin: 'auto' }} className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#top"><span className="icon-home"></span> Home</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#top"><div className="clock-face">
                <h1 style={{ color: 'white' }}>{this.state.hour}</h1>
              </div></a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Nav;
