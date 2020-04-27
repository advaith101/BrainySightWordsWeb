import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { WordUsers } from '../context';
import PropTypes from 'prop-types';
import { Zoom } from 'react-slideshow-image';
import Delay from './Delay';
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
export default class DisplayWord extends Component {
    render() {
        const { id, name, img, img1,info,info1, sound, sound1, used } = this.props.word;
        return (
        //side bar
                    <WordUsers>
                    {value => (
                        <div>
                            <div className="slide-container">
                  <Zoom {...zoomOutProperties}>
                    <div className="col Margin-Top">
                        <div className="Fix-Row">
                            <img style={{width: "55%"}} src={img} />
                        </div>
                    
                        <p className="Text-Info">{info}</p>
                    </div>
                    <div className="col Margin-Top">
                        <div className="Fix-Row">
                            <img style={{width: "55%"}} src={img1} />
                        </div>
                    
                        <p className="Text-Info">{info1}</p>
                    </div>
                    <div>
                    <Link to="/singleWord" >
                        <img  style={{width: "40%"}} src={img} onClick={() => value.setSingle(img, info, sound) }/>
                        
                    </Link>
                    
                    <Link to="/singleWord">
                        <img  style={{width: "40%"}} src={img1} onClick={() => value.setSingle(img1, info1, sound1) }/>      
                    </Link>
                    </div>
                  </Zoom>
                  <audio ref={this.myRef} src={sound} autoPlay />
                  <Delay wait={4000}>
                    <audio ref={this.myRef} src={sound1} autoPlay />
                  </Delay>
                </div>
                        </div>

                    )}
                    </WordUsers>
        );
    }
}


//Checking types
  