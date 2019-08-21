import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./Image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={"https://www.aboutfijitravel.com/wp-content/uploads/2017/10/Fiji-Private-Island-Beach-Club-1.jpg"} />
      </div>
    );
  }
}

export default App;
