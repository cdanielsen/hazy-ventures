import React, { Component } from 'react';
// import styles from './styles.css';

export default class Packages extends Component {
    render() {
      return (
        <section id="packages" className={"container"}>
          <h2>Premade Vacation Bundles</h2>
          <div className={"row"}>
            <div className={"col"}>
              <img src="https://via.placeholder.com/350x250"/>
              <h3>Sink or Swim...</h3>
            </div>

            <div className={"col"}>
              <img src="https://via.placeholder.com/350x250"/>
              <h3>Welcome to the Jungle...</h3>
            </div>
          </div>
          <div className={"row"}>
            <div className={"col"}>
              <img src="https://via.placeholder.com/350x250"/>
              <h3>On the Beach ...</h3>
            </div>

            <div className={"col"}>
              <img src="https://via.placeholder.com/350x250"/>
              <h3>Cliff Hanger...</h3>
            </div>
          </div>
        </section>
      );
    }
}