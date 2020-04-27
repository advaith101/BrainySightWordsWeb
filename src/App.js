import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import './Components/PreKPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import KindergardenPage from './Components/KindergardenPage';
import LandingPage from './Components/LandingPage';

import NavBar from './Components/NavBar 2'
import Viewing from './Components/Viewing'
import PreKPage from './Components/PreKPage'
import Quiz from './Components/Quiz'
import QuizEachWord from './Components/QuizEachWord';
import SingleWord from './Components/SingleWord'
import SingleWord2 from './Components/SingleWord2'
import Reward from './Components/Reward';


// const windowWidth = window.matchMedia(`(min-width: 800px)`);

class App extends Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     sidebarOpen: false,
    //     sidebarDocked: true
    //   };
    //   this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    // }

    // onSetSidebarOpen(open) {
    //   this.setState({ sidebarOpen: open });
    // }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/Prek" component={PreKPage} />
                    {/* <Route path="/Kindergarden" component={KindergardenPage} /> */}
                    <Route path="/viewingWord" component={Viewing} />
                    <Route path="/quiz" component={Quiz} />
                    <Route path="/QuizEachWord" component={QuizEachWord} />
                    <Route path="/singleWord" component={SingleWord} />
                    <Route path="/singleW0rd" component={SingleWord2} />
                    <Route path="/Reward" component={Reward} />
                </Switch>
            </Router>
        );
    }

}

export default App;
