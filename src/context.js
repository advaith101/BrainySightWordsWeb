import React, { Component } from 'react';
import { wordList, exampleInfo, exampleSingle } from './data';


const WordContext = React.createContext();


//Provider
//Consumer
class WordProvider extends Component {
  state = {
    words: [],
    wordExample: exampleInfo,
    singleWord: exampleSingle,
  };
  componentDidMount() {
    this.setProducts();
  }
  setProducts = () => {
    let tempWords = [];
    wordList.forEach(item => {
      const singleItem = { ...item };
      tempWords = [...tempWords, singleItem];
    });
    this.setState(() => {
      return { words: tempWords };
    });
  };
  setSingle = (img, info, sound) => {
    this.setState(() => {
      return { singleWord: {img, info, sound} };
    });
  };

  getLength = () => {
    return this.state.words.length;
  };

  getItem = id => {
    const word = this.state.words.find(item => item.id === id);
    return word;
  };
  
  setExampleWord = (value) => {
    return {exampleWord: value}
  };
  
    setExampleWord = value => {
        return {exampleWord: value};
    };

    handleViewing = id => {
        console.log('handle viewing');
        const word = this.getItem(id);
        this.setState(() => {
            return {wordExample: word};
        });
    };

    nextWord = id => {
        if (id >= this.getLength()) {
            return {};
        }
        const word = this.getItem(id + 1);
        this.setState(() => {
            return {wordExample: word};
        });
    };

  render() {
    return (
      <WordContext.Provider
        value={{
          ...this.state,
          setExampleWord: this.setExampleWord,
          getItem: this.getItem,
          handleViewing: this.handleViewing,
          nextWord: this.nextWord,
          preWord: this.preWord,
          setSingle : this.setSingle,
        }}
      >
        {this.props.children}
      </WordContext.Provider>
    );
  }
}

const WordUsers = WordContext.Consumer;

export {WordProvider, WordUsers};
