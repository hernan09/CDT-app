import React, { Component } from 'react';
import Zoom from 'react-reveal/Reveal';


import './foter.css';

class Footer extends Component {
  render() {
    return (
      <Zoom top cascade><div id='foter'>
        <ul>
          <li><a href="http://www.cdt.com.ar/"><span className="icon-facebook" /> Facebook</a></li>
          <li><a href="http://www.cdt.com.ar/"><span className="icon-instagram" /> Instagram</a></li>
          <li><a href="http://www.cdt.com.ar/"><span className="icon-twitter" /> Twiter</a></li>
          <li><a href="http://www.cdt.com.ar/"><span className="icon-linkedin" /> Linkeding</a></li>
          <li><a href="http://www.cdt.com.ar/"><span className="icon-github" /> GitHub</a></li>
        </ul>
        <blockquote style={{ marginTop: 50 }} className="blockquote text-center">
          <footer className="blockquote-footer">Amazing <cite title="Source Title">Sunrise</cite></footer>
        </blockquote>
            </div>
      </Zoom>
    );
  }
}
export default Footer;
