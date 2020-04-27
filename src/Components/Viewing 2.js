import React, { Component, useRef} from 'react';
import Word from "./Word";
import {WordUsers} from '../context';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
// import '../App.css'
import AudioPlayer from "react-h5-audio-player";
import Slideshow from './Slideshow'
import image from '../images/kittenBlocks-final.png'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Sound from 'react-sound'
import Delay from 'react-delay'

const s = {
    container: "screenW screenH dGray col",
    header: "flex1 fCenter fSize2",
    main: "flex8 white",
    footer: "flex1 fCenter"
};
const slides = [image, image,image];
export default class Viewing extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                
                <WordUsers>
                    {value => {
                        const {id, name, img, info, sound, used} = value.wordExample;
                        
                        return (
                            
                            
                            <div className="container py-5">
                                
                                <div className="arrowIcon">
                                    <i className="fas fa-arrow-circle-left" onClick={() => value.preWord(id)}/> {"      "}
                                    <i className="fas fa-arrow-circle-right"onClick={() => value.nextWord(id)}/> 
                                    
                                </div>
                                {/* <div className={s.container}>
                                    <div className={s.main}>
                                        <Slideshow slides={[img, image]} />
                                        <AudioPlayer autoPlay src={sound} />
                                    </div>
                                </div> */}

                                {/* <Carousel
                                    autoPlay
                                    transitionTime={1000}
                                    showIndicators={false}
                                    showStatus={false}
                                    showThumbs={false}
                                    interval={2000}
                                >
                                    <div>
                                        <img src={img} />
                                        
                                    </div>
                                    <div>
                                        <img src={image} /> 
                                                                                  
                                    </div>
                                </Carousel> */}
                                <audio ref={this.myRef} src={sound} autoPlay />
                            <Delay
                                wait={5000}
                            >
                                <div>
                                <audio ref={this.myRef} src={sound} autoPlay />
                                </div>
                            </Delay>
                            
                            
                            



                                {/* <div className="col-10 mx-auto text-center
                                text-slanted text-blue my-5">
                                    <h1 className="title">{name}</h1>
                                </div>
                                <img src={img} className="img-fluid" alt="product"/>
                                <h1>{info}</h1>
                                <AudioPlayer autoPlay src={sound} /> */}
                                
                                {/* <div>
                                    <audio ref="and1" src={hi} controls autoPlay/>
                                </div> */}
                            </div>
                            
                        )
                    }}
                </WordUsers>

            </React.Fragment>
        )
    }
}