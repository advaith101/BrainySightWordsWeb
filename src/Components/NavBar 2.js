import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from "./Button";
import home_icon from '../images/home1.png';
import quiz_icon from '../images/quiz2.png';
import rewards_icon from '../images/rewards1.png';
import list_icon from '../images/list_icon.png';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Overlay } from 'react-bootstrap';
import Sidebar from "react-sidebar";
import questionMark_icon from '../images/questionMark.jpg';
export default class NavBar extends Component {
    
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       sidebarOpen: true
    //     };
    //     this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    //   }
    //   onSetSidebarOpen(open) {
    //     this.setState({ sidebarOpen: open });
    //   }
    render(){
        return (

            <Sidebar
            sidebar={<div className="col ">
                <div className="Aligner-Top">
                    <Link to='/'>
                        <ButtonContainer>
                            <img src={home_icon} alt="WordList" />
                        </ButtonContainer>
                    </Link>
                </div >
                <div className="Aligner">
                    <Link to='/Prek'>
                        <ButtonContainer>
                            <img src={list_icon} alt="WordList" />
                        </ButtonContainer>
                    </Link>
                </div>
                <div className="Aligner">
                    <Link to='/Quiz'>
                        <ButtonContainer>
                            <img src={quiz_icon} alt="WordList" />
                        </ButtonContainer>
                    </Link>
                </div>
                <div className="Aligner">
                    <Link to="/QuizEachWord">
                        <ButtonContainer>
                            <img className="nav-img"
                                src={questionMark_icon} alt="WordList"
                            />
                        </ButtonContainer>
                    </Link>
                </div>
                <div className="Aligner">
                    <Link to='/reward'>
                        <ButtonContainer>
                            <img src={rewards_icon} alt="WordList" />
                        </ButtonContainer>
                    </Link>
                </div>
                </div>
                
            
            }
            docked={true}
            styles={{ sidebar: { background: "#6cf0bb", position: "fixed"}}}
        >
        </Sidebar>
        );
    }
}
const NavWrapper = styled.nav`
background: var(--mainwhite);
.nav-link{
    color: var(--mainWhite) !important;
    font-size: 1.3rem; //1rem = 16px(pixels)
    text-transform: capitalize;
}
`