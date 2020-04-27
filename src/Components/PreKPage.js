import React, { Component } from 'react';
import Word from "./Word";
import {WordUsers} from '../context';
import { Link } from 'react-router-dom';
import NavBar from './NavBar 2'


export default class ProductList extends Component {
    
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <div className="py-5">
                    
                    <div className="container">
                        
                        <div className="row">
                            <WordUsers>
                                {value => {
                                    return value.words.map( word => {
                                        return <Word key={word.id} word={word}/>
                                    })
                                }}
                            </WordUsers>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}