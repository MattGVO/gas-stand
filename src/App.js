import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom'
import "./App.css";
import Inventory from "./components/Inventory/Inventory";
import Wizard from "./components/Wizard/Wizard";

class App extends Component {
  render() {
    return (
    <div className="App">
      <header>
        <div className="Check"></div>
        <h1>THE GAS STAND CONVENIENCE STORE</h1>
        <div className="Check"></div>
      </header>
      <main>
       <Switch>
         <Route exact path="/" component={Inventory}/>
         <Route path="/wizard" component={Wizard}/>
       </Switch>
      </main>
    </div>
    )
  }
}

export default App;
