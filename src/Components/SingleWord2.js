import React, { Component, useRef } from 'react';
import Word from './Word';
import { WordUsers } from '../context';
import { Link } from 'react-router-dom';
import NavBar from './NavBar 2';
import Delay from './Delay';
import AudioPlayer from 'react-h5-audio-player';
import Slideshow from './Slideshow';
import image from '../images/kittenBlocks-final.png';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Sound from 'react-sound';
// import Delay from 'react-delay';
import { wordList, exampleInfo } from '../data';

import { Zoom } from 'react-slideshow-image';
import DisplaySingle2 from './DisplaySingle2';
const zoomOutProperties = {
  duration: 4000,
  transitionDuration: 500,
  infinite: false,
  indicators: false,
  scale: 0.4,
  arrows: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    return 0;
  }
}
const images = [image,image, image];

export default class SingleWord2 extends Component {

  render() {

    return (
      <React.Fragment>
        <NavBar />
        <WordUsers>
          {value => {
            const word = value.wordExample;
            const { id, name, img, img1, info,info1, sound, sound1, used } = value.wordExample;
            const singleWord = value.singleWord;
            return (
              <div className="container py-5">
                <div className="row arrowIcon">
                  <Link to="/viewingWord">
                    <i
                      className="fas fa-arrow-circle-left"
                      onClick={() => value.preWord(id)}
                    ></i>
                  </Link>
                  <p className="TextName">{name}</p>
                  <Link to="/viewingWord">
                    <i
                      className="fas fa-arrow-circle-right"
                      onClick={() => value.nextWord(id)}
                    />
                  </Link>
                  <DisplaySingle2 singleWord={singleWord} word={word}/>
                  
                  
                </div>
                {/* <div className="slide-container">
                  <Zoom {...zoomOutProperties}>
                    <div className="row">
                    <img  style={{width: "55%"}} src={img} />
                    <p className="TextInfo">{info}</p>
                    </div>
                    <div className="row">
                    <img  style={{width: "55%"}} src={img1} />
                    <p className="TextInfo">{info1}</p>
                    </div>
                    <div>
                      <img  style={{width: "40%"}} src={img} />
                      <img  style={{width: "40%"}} src={img1} />
                    </div>
                  </Zoom>
                  <audio ref={this.myRef} src={sound} autoPlay />
                  <Delay wait={4000}>
                    <audio ref={this.myRef} src={sound1} autoPlay />
                  </Delay>
                </div> */}

              </div>
              // <div>
              //   <audio ref={this.myRef} src={sound1} autoPlay />
              // <Delay wait={4000}>
              //   <audio ref={this.myRef} src={sound1} autoPlay />
              //   <p>Hello</p>
              // </Delay>
              // </div>
              
              // <Slider slides={images} autoPlay={2} />
            );
          }}
        </WordUsers>
      </React.Fragment>
    );
  }
}
