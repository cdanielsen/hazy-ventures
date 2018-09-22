import React, { Component } from 'react';
import smoke from '../images/smoke.jpg';

export default class Header extends Component {
    render() {
      return (
        <div id="header-container">
            <h1 id="splash-text">Hazy Ventures</h1>
            <img src={smoke} id="splash" />
        </div>
      );
    }
}