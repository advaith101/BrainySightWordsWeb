import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { WordUsers } from '../context';
import PropTypes from 'prop-types';
import '../App.css';
import {setSelectedWord} from '../redux/actions/wordActions';
import {connect} from 'react-redux';

class Word extends Component {
  onBoxClick = id => {
    console.log('onboxclick', id);
    this.props.setSelectedWord(id);
};
  render() {
    const { id, name, img, img1, sound, used } = this.props.word;
    return (
      //side bar

      <WordWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card img-dis" onClick={() => this.onBoxClick(id)}>
          <WordUsers>
            {value => (
              <div
                className="img-container p-5 img-dis"
                onClick={() => value.handleViewing(id)}
              >
                <h3>{name}</h3>
                <Link to="/viewingWord">
                  <img src={img} alt="word" className="card-img-top" />
                  <img src={img1} alt="word" className="card-img-top" />
                </Link>
              </div>
            )}
          </WordUsers>
        </div>
      </WordWrapper>
    );
  }
}

//Checking types
Word.propTypes = {
  word: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    used: PropTypes.bool
  }).isRequired
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {setSelectedWord})(Word);

const WordWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
    max-width: 100%;
    height: auto;
    border-radius: 30px;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &: hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
    max-width: 50%;
    height: 12.5pc;
  }
  .img-container: hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s linear;
  }
  .img-container: hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn: hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
  .img-dis: border-radius: 100px;
`;