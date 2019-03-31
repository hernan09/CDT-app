import React, { Component } from 'react';

import './foter.css';

class Footer extends Component {
  render() {
    return (
      <div id='foter'>
        <ul>
          <li><a href="http://www.cdt.com.ar/"><span className="icon-facebook" /> Facebook</a></li>
          <li><a href="http://www.cdt.com.ar/"><span className="icon-instagram" /> Instagram</a></li>
          <li><a href="http://www.cdt.com.ar/"><span className="icon-twitter" /> Twiter</a></li>
          <li><a href="http://www.cdt.com.ar/"><span className="icon-linkedin" /> Linkeding</a></li>
          <li><a href="http://www.cdt.com.ar/"><span className="icon-github" /> GitHub</a></li>
        </ul>
        <blockquote style={{ marginTop: 100 }} className="blockquote text-center">
          <footer className="blockquote-footer">Amazing <cite title="Source Title">Sunrise</cite></footer>
        </blockquote>
      </div>
    );
  }
}
export default Footer;
