import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super();
    this.state = {
      words: ["this", "doesnt", "make", "any", "sense"]
    };
  }
  render() {
    let wordsToDisplay = this.state.words.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });
    return <div className="App">{wordsToDisplay}</div>
  }
}

export default App;
