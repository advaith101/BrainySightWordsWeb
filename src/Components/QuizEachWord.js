import React, {Component, Fragment} from 'react';
import NavBar from './NavBar 2';
import replay from '../images/replay.png';
import {ButtonContainer} from './Button';
import {WordUsers} from '../context';
import {wordList, quizSoundEffect} from '../data';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class QuizEachWord extends Component {
    constructor(props) {
        super(props);
        const tmp = this.displayQuestions(wordList);
        const currentQuestion = tmp.currentQuestion;
        const answer = tmp.answer;
        const answerList = tmp.answerList;

        this.state = {
            WordUsers: {},
            wordList,
            answerList,
            currentWordList: '',

            currentQuestion,
            currentQuestionIndex: 0,
            answer,
            prevQuestion: {},

            score: 0,
            numTry: 0,
            locked: false,
            isButtonDisabled: [false, false, false, false],
        };
    }

    delay = (ms) => new Promise((res) => setTimeout(res, ms));

    displayQuestions = (questions, currentQuestion) => {
        const isFirstCall = !currentQuestion;

        let {currentQuestionIndex} = this.state || 0;
        currentQuestionIndex = this.props.selectedWordID - 1;
        console.log('---currentQuestionIndex: ' + currentQuestionIndex);
        questions = questions || this.state.wordList;
        currentQuestion = questions[currentQuestionIndex];

        const answer = currentQuestion.name;
        const answerList = this.allAnswer(questions);
        const audio = new Audio(currentQuestion.sound2);
        audio.play();

        if (isFirstCall) {
            return {
                currentQuestion,
                answer,
                answerList,
            };
        } else {
            this.setState({
                currentQuestion,
                answer,
                answerList,
            });
        }
    };

    handleOnClick = (e) => {
        const currentWord = this.state.wordList[this.props.selectedWordID - 1];
        const audio = new Audio(this.state.currentQuestion.sound2);
        const inCorrectAnswerAudio = new Audio(quizSoundEffect[0].sound);
        const correctAnswerAudio = new Audio(quizSoundEffect[1].sound);

        if (e.target.innerHTML.toLowerCase() === currentWord.name.toLowerCase()) {
            correctAnswerAudio.play();
            this.sleep(1500).then(() => {
                this.correctAnswer();
            });
        } else {
            inCorrectAnswerAudio.play();
            this.sleep(1000).then(() => {
                audio.play();
            });
            this.wrongAnswer(e.target.id);
        }
    };

    correctAnswer = async () => {
        const newButtonDisable = [false, false, false, false];
        this.setState(
            (prevState) => ({
                score: prevState.score + 2,
                currentQuestionIndex: this.props.selectedWordID - 1,
                isButtonDisabled: newButtonDisable,
            }),
            () => {
                this.displayQuestions(this.state.questions, this.state.currentQuestion);
            },
        );
    };

    wrongAnswer = (id) => {
        const newButtonDisable = Array.from(this.state.isButtonDisabled);
        newButtonDisable[parseInt(id)] = true;
        this.setState((prevState) => ({
            score: prevState.score + 1,
            isButtonDisabled: newButtonDisable,
        }));
    };

    generateRandomNumber(wordList) {
        return Math.round(Math.random() * (wordList.length - 1));
    }

    shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    allAnswer(wordList) {
        const set = new Set();
        const correct = this.props.selectedWordID - 1;
        set.add(correct);
        while (set.size <= 3) {
            const num = this.generateRandomNumber(wordList);
            if (set.has(num)) {
                continue;
            } else {
                set.add(num);
            }
        }
        return this.shuffle(Array.from(set));
    }

    playSound = () => {
        console.log('workingggg');

        const audio = new Audio(this.state.currentQuestion.sound2);
        audio.play();
    };

    sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    render() {
        const num = this.state.answerList;

        return (
            <Fragment>
                <NavBar />
                <WordUsers>
                    {(value) => {
                        return (
                            <div>
                                <div className="replay">
                                    <ButtonContainer>
                                        <img
                                            src={replay}
                                            alt="WordList"
                                            className="Navbar-brand ml-2"
                                            onClick={this.playSound}
                                        />
                                    </ButtonContainer>
                                </div>
                                <div className="container-box">
                                    <div class="row">
                                        <div class="col-sm">
                                            <button
                                                id="0"
                                                onClick={this.handleOnClick}
                                                type="button"
                                                class="btn btn-primary btn-lg"
                                                disabled={this.state.isButtonDisabled[0]}>
                                                {wordList[num[0]].name}
                                            </button>
                                        </div>
                                        <div class="col-sm">
                                            <button
                                                id="1"
                                                onClick={this.handleOnClick}
                                                type="button"
                                                class="btn btn-primary btn-lg"
                                                disabled={this.state.isButtonDisabled[1]}>
                                                {wordList[num[1]].name}
                                            </button>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm">
                                            <button
                                                id="2"
                                                onClick={this.handleOnClick}
                                                type="button"
                                                class="btn btn-primary btn-lg"
                                                disabled={this.state.isButtonDisabled[2]}>
                                                {wordList[num[2]].name}
                                            </button>
                                        </div>
                                        <div class="col-sm">
                                            <button
                                                id="3"
                                                onClick={this.handleOnClick}
                                                type="button"
                                                class="btn btn-primary btn-lg"
                                                disabled={this.state.isButtonDisabled[3]}>
                                                {wordList[num[3]].name}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }}
                </WordUsers>
            </Fragment>
        );
    }
}

QuizEachWord.propTypes = {
    selectedWordID: PropTypes.number,
};

const mapStateToProps = (state) => ({
    selectedWordID: state.word.selectedWordID,
});
export default connect(mapStateToProps, {})(QuizEachWord);
