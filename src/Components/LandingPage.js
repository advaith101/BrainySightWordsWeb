import React, {Component} from 'react';
import './LandingPage.css';
import {Link} from 'react-router-dom';
import left_img from '../images/kittenBlocks-final.png';
import right_img from '../images/PuppyBlocks-final.png';

class LandingPage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="transparentBox"></div>
                <Link to="/Prek">
                    <img src={right_img} alt="Kindergarden" />
                </Link>
                <Link to="/Kindergarden">
                    <img src={left_img} alt="Kindergarden" />
                </Link>
            </React.Fragment>
        );
    }
}

// const Sidebar = () => (
//   <Router>
//     <SplitPane
//       split="vertical"
//       minSize={100}
//       defaultSize={100}
//       // resizerStyle={styles}
//     >
//       <menu>
//         <div><Link to="/">Home</Link></div>
//         <div><Link to="/topics">Topics</Link></div>
//       </menu>
//       <div>
//         <Route exact path="/" component={KindergardenPage} />
//         <Route path="/topics" component={LandingPage} />
//       </div>
//     </SplitPane>
//   </Router>
// );

export default LandingPage;
