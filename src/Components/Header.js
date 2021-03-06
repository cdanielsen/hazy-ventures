import React, { Component } from 'react';
import smoke from '../images/smoke.jpg';
import logo from '../images/hazy-skull.png';

function scrollToPackages () {
    window.scrollTo(0, 1000)
}

export default class Header extends Component {
    render() {
      return (
        <div id="header-container">
            <h1 id="splash-text"><img src={logo} alt="Hazy Ventures" /></h1>
            <img src={smoke} id="splash" />
            <button id="book-trip" onClick={scrollToPackages}>Book Your Trip</button>
            <button id="feeling-unlucky">I'm Feeling Unlucky</button>
        </div>
      );
    }
}
