import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'
import "./App.css";
import Inventory from "./components/Inventory";
import Wizard from "./components/Wizard";

class App extends Component {
 

  render() {
    return (
    <div className="App">
      <header>
        <h1>THE GAS STAND CONVENIENCE STORE</h1>
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
