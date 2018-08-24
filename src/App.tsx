import * as React from "react";
import "./App.css";

import beerMug from "./beermug.svg";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={beerMug} className="App-logo" alt="logo" />
          <h1 className="App-title">
            Welcome to Engineering on tap Jeopardy!
          </h1>
        </header>
      </div>
    );
  }
}

export default App;
