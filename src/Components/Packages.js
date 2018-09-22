import React, { Component } from 'react';
// import styles from './styles.css';

export default class Packages extends Component {
    render() {
      return (
        <section id="packages" className={"container"}>
          <marquee><h2 className={"display-1"}>Preplanned Vacation Bundles</h2></marquee>
          <div className={"row"}>
            <div className={"col"}>
              <img src="https://media-cdn.tripadvisor.com/media/photo-s/07/d5/68/86/spider-house-resort.jpg"/>
              <h3>Sink or Swim...</h3>
            </div>

            <div className={"col"}>
              <img src="https://www.outsideonline.com/sites/default/files/styles/img_1400x800/public/2016/07/18/skull-stake-main_h.jpg?itok=Kez5UUEA"/>
              <h3>Welcome to the Jungle...</h3>
            </div>

            <div className={"col"}>
              <img src="https://c8.alamy.com/comp/BPM5NA/deserted-treasure-island-with-empty-treasure-chest-laying-on-the-shore-BPM5NA.jpg"/>
              <h3>X Marks the Spot...</h3>
            </div>
          </div>
          <div className={"row"}>
            <div className={"col"}>
              <img src="https://media.istockphoto.com/photos/pristine-tioman-island-beach-in-malaysia-picture-id696104932"/>
              <h3>On the Beach ...</h3>
            </div>

            <div className={"col"}>
              <img src="http://i.imgur.com/AqmgJsw.png"/>
              <h3>Cliff Hanger...</h3>
            </div>

            <div className={"col"}>
              <img src="https://cdn.cnn.com/cnnnext/dam/assets/180128025828-kiribati-ferry-rescue-01-exlarge-169.jpg"/>
              <h3>Die Another Day...</h3>
            </div>
          </div>
          <div className={"row"}>
            <div className={"col"}>
              <img src="https://www.greenpeace.org/usa/wp-content/uploads/2016/05/GP0STPU67_Web_size_with_credit_line-1.jpg"/>
              <h3>Exxon Adventure ...</h3>
            </div>

            <div className={"col"}>
              <img src="https://media.istockphoto.com/photos/cannibal-chick-picture-id173678965"/>
              <h3>Dinner with the Donners...</h3>
            </div>

            <div className={"col"}>
              <img src="https://i.kym-cdn.com/photos/images/original/000/084/761/whtevan.jpg"/>
              <h3>Kidnap...</h3>
            </div>
          </div>
        </section>
      );
    }
}