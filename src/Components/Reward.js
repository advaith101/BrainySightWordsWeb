import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {ButtonContainer} from './Button';
import QuizEachWord from './QuizEachWord';

import silver from '../images/rewards/silver_coin.png';
import gold from '../images/rewards/coin_gold_new.png';
import stack from '../images/rewards/stack_of_coins_4.png';
import bag from '../images/rewards/money_bag_new.png';
import car from '../images/rewards/armored-car2.png';

import back from '../images/buttons/backward.png';

import './Reward.css';

class Reward extends Component {
    render() {

        // silver = 0.5
        // gold = 1
        // stack = 5
        // bag = 25
        // car = 125

        var score = parseInt(window.localStorage.getItem("coins"));
        // var score = 131.5;
        const names = [];

        for (var i = score; i > 0;) {
            if (i>= 125) {
                names.push(car);
                i = i -125;
            } else if (i >= 25) {
                names.push(bag);
                i = i -25;
            } else if (i >= 5) {
                names.push(stack);
                i = i - 5;
            } else if (i >= 1) {
                names.push(gold);
                i = i - 1;
            } else {
                names.push(silver);
                i = i - 0.5;
            }
        }

        return (
            <div>
                <div >
                    <ButtonContainer className="back">
                        <img
                            src={back}
                            alt="WordList"
                            onClick={this.goBack}
                        />
                    </ButtonContainer>
                </div>

                <p className="paragraph">
                Score: {score}
                </p>

                <div class="wrapper">
                    {names.map(name => (
                        <div>
                        <img
                            src={name}
                        />
                        </div>
                  ))}
                </div>

            </div>
        );
    }
    constructor(props){
       super(props);
       this.goBack = this.goBack.bind(this);
    }

    goBack(){
        this.props.history.goBack();
    }
}

export default Reward;
