import React, { Component } from 'react';
// import styles from './styles.css';

export default class Packages extends Component {
    render() {
      return (
        <section id="packages" className={"container"}>
          <h2 className={"display-1"}>Premade Vacation Bundles</h2>
          <div className={"row"}>
            <div className={"col"}>
              <img src="https://media-cdn.tripadvisor.com/media/photo-s/07/d5/68/86/spider-house-resort.jpg"/>
              <h3>Sink or Swim...</h3>
            </div>

            <div className={"col"}>
              <img src="https://www.outsideonline.com/sites/default/files/styles/img_1400x800/public/2016/07/18/skull-stake-main_h.jpg?itok=Kez5UUEA"/>
              <h3>Welcome to the Jungle...</h3>
            </div>
          </div>
          <div className={"row"}>
            <div className={"col"}>
              <img src="http://i.imgur.com/AqmgJsw.png"/>
              <h3>On the Beach ...</h3>
            </div>

            <div className={"col"}>
              <img src="https://c8.alamy.com/comp/BPM5NA/deserted-treasure-island-with-empty-treasure-chest-laying-on-the-shore-BPM5NA.jpg"/>
              <h3>Cliff Hanger...</h3>
            </div>
          </div>
        </section>
      );
    }
}