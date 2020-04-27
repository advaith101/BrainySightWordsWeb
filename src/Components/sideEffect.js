import React from 'react';
import {Slide} from 'react-slideshow-image';
import React, {Component, useRef} from 'react';
import Word from './Word';
import {WordUsers} from '../context';
import {Link} from 'react-router-dom';
import NavBar from './NavBar';
import '../App.css';
import AudioPlayer from 'react-h5-audio-player';

const slideImages = ['img/02a_top_hat.png', '07big_boxer.png'];

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    },
};

const Slideshow = () => {
    return (
        <div className="slide-container">
            <Slide {...properties}>
                <div className="each-slide">
                    <div style={{backgroundImage: `url(${slideImages[0]})`}}>
                        <span>Slide 1</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{backgroundImage: `url(${slideImages[1]})`}}>
                        <span>Slide 2</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{backgroundImage: `url(${slideImages[2]})`}}>
                        <span>Slide 3</span>
                    </div>
                </div>
            </Slide>
        </div>
    );
};
