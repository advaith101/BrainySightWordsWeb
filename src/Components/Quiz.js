import React, {Component, Fragment} from 'react';
import NavBar from './NavBar 2';
import './Quiz.css';
import questions from '../questions.json';
import replay from '../images/replay.png';
import {ButtonContainer} from './Button';
import {WordUsers} from '../context';
import {wordList, quizSoundEffect} from '../data';

class Quiz extends Component {
    constructor(props) {
        super(props);
        const tmp = this.displayQuestions(wordList);
        const currentQuestion = tmp.currentQuestion;
        const nextQuestion = tmp.nextQuestion;
        const answer = tmp.answer;
        const answerList = tmp.answerList;

        // const correctAnswerAudio = new Audio(this.quizSoundEffect[0].sound);
        // const inCorrectAnswerAudio = new Audio(this.quizSoundEffect[1].sound);

        this.state = {
            WordUsers: {},
            wordList,
            answerList,
            currentWordList: '',

            currentQuestion,
            currentQuestionIndex: 0,
            answer,
            nextQuestion,
            prevQuestion: {},

            score: 0,
            numTry: 0,
            locked: false,
            isButtonDisabled: [false, false, false, false],
        };
    }

    delay = ms => new Promise(res => setTimeout(res, ms));

    displayQuestions = (questions, currentQuestion, nextQuestion) => {
        //undefined=False -> !underfined=True -> !!undefined = false
        const isFirstCall = !currentQuestion;

        let {currentQuestionIndex} = this.state || 0;
        if (!currentQuestionIndex) {
            currentQuestionIndex = 0;
        }
        questions = questions || this.state.wordList;
        currentQuestion = questions[currentQuestionIndex];
        nextQuestion = questions[currentQuestionIndex + 1];
        const answer = currentQuestion.name;
        const answerList = this.allAnswer(questions);

        const audio = new Audio(currentQuestion.sound2);
        audio.play();
        //first time calling, initialize the answer
        if (isFirstCall) {
            return {
                currentQuestion,
                nextQuestion,
                answer,
                answerList,
            };
            //the times after the first time, generate answer
        } else {
            this.setState({
                currentQuestion,
                nextQuestion,
                answer,
                answerList,
            });
        }
    };

    handleOnClick = e => {
        const currentWord = this.state.wordList[this.state.currentQuestionIndex];
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
        var scoreToAdd;
        this.setState(
            prevState => ({
                score: prevState.score + scoreToAdd,
                currentQuestionIndex: prevState.currentQuestionIndex + 1,
                isButtonDisabled: newButtonDisable,
                numTry: 0
            }),
            () => {
                this.displayQuestions(this.state.questions, this.state.currentQuestion, this.state.nextQuestion);
            },
        );
        var tries = window.localStorage.getItem("tries")
        console.log('tries ' + tries)
        window.localStorage.setItem("coins", Math.ceil(parseInt(window.localStorage.getItem("coins")) - 0.5 * tries))
        window.localStorage.setItem("tries", 0);
    };

    wrongAnswer = id => {
        const newButtonDisable = Array.from(this.state.isButtonDisabled);
        newButtonDisable[parseInt(id)] = true;
        this.setState(prevState => ({
            score: prevState.score + 1,
            isButtonDisabled: newButtonDisable,
            numTry: prevState.numTry + 1
        }));
        window.localStorage.setItem("tries", parseInt(window.localStorage.getItem("tries")) + 1); //temporary fix, does the job
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
        const correct = this.state? this.state.currentQuestionIndex : 0;
        console.log(this.state)
        window.localStorage.setItem("coins", correct)
        console.log(window.localStorage.getItem("coins")) //checking if local storage works.. looks like it does!
        console.log('---Correct Answer is: ' + correct);
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
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    render() {
        const num = this.state.answerList;

        return (
            <Fragment>
                <NavBar />
                <WordUsers>
                    {value => {
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

export default Quiz;
