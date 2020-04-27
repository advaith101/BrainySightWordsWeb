// import React, {Component} from 'react';
// import './LandingPage.css';
// import './KindergardenPage.css';
// import { Link } from 'react-router-dom';

// // side bar icons
// const home_icon = require('../img/home1.png');
// const quiz_icon = require('../img/quiz2.png');
// const rewards_icon = require('../img/rewards1.png');
// const list_icon = require('../img/list_icon.png');

// // word images
// const a = require('../img/02a_top_hat.png');
// const and = require('../img/03and_lady_with_stroller.png');
// const away = require('../img/05away_suitcase_or_luggage.png');
// const big = require('../img/07big_boxer.png');
// const blue = require('../img/09blue_dancing_woman.png');
// const can = require('../img/11can_balance_beam.png');
// const come = require('../img/13come_girl_with_a_doll.png');
// const down = require('../img/15down_see-saw.png');
// const find = require('../img/17find_hiding.png');

// class KindergardenPage extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         {/* <nav class="rectangle navbar-default navbar-fixed-left"> */}
//         <div class="rectangle" id="sidebar">
//                 <div>
//                     <Link to="./"><img id="icon1" src={ home_icon } alt="LandingPage"/></Link>
//                     <Link to="./KinderGarden"><img id="icon2" src={ list_icon } alt="HomePage"></img></Link>
//                     <img id="icon3" src={ rewards_icon } alt="LandingPage"/>
//                     <img id="icon4" src={ quiz_icon } alt="LandingPage"/>
//                 </div>
//         {/* </nav> */}
//         </div>
//         <div className="py-2">
//           <div className="container">
//             <div className="row">
//               <div className="col-sm-4 kinder-garden-image">
//                 <div className="tile">
//                   <div className="a">a</div>
//                   <img src={a} alt="Kindergarden" />
//                 </div>
//                 <div className="tile">
//                   <div className="a">big</div>
//                   <img src={big} alt="Kindergarden" />
//                 </div>
//                 <div className="tile">
//                   <div className="a">come</div>
//                   <img src={come} alt="Kindergarden" />
//                 </div>
//               </div>

//               <div className="col-sm-4 kinder-garden-image">
//                 <div className="tile">
//                   <div className="a">and</div>
//                   <Link to="/andWord">
//                     <img src={and} alt="and word" />
//                   </Link>
//                 </div>
//                 <div className="tile">
//                   <div className="a">blue</div>
//                   <img src={blue} alt="Kindergarden" />
//                 </div>
//                 <div className="tile">
//                   <div className="a">down</div>
//                   <img src={down} alt="Kindergarden" />
//                 </div>
//               </div>
//               <div className="col-sm-4 kinder-garden-image">
//                 <div className="tile">
//                   <div className="a">away</div>
//                   <Link to="/awayWord">
//                     <img src={away} alt="away word" />
//                   </Link>
//                 </div>
//                 <div className="tile">
//                   <div className="a">can</div>
//                   <img src={can} alt="Kindergarden" />
//                 </div>
//                 <div className="tile">
//                   <div className="a">find</div>
//                   <img src={find} alt="Kindergarden" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </React.Fragment>
//     );
//   }
// }
// export default KindergardenPage;
