import React, { Component } from 'react';
// import styles from './styles.css';

export default class Packages extends Component {
    render() {
      return (
        <section id="packages">
          <h2>Premade Vacation Bundles</h2>
          <ul>
            <li>
              <img src="https://via.placeholder.com/350x250"/>
              <h3>Sink or Swim...</h3>
            </li>
            <li>
              <img src="https://via.placeholder.com/350x250"/>
              <h3>Welcome to the Jungle...</h3>
            </li>
            <li>
              <img src="https://via.placeholder.com/350x250"/>
              <h3>On the Beach...</h3>
            </li>
            <li>
              <img src="https://via.placeholder.com/350x250"/>
              <h3>Cliff Hanger...</h3>
            </li>
          </ul>
        </section>
      );
    }
}