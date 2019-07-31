import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'
import "./App.css";
import Inventory from "./components/Inventory";
import Wizard from "./components/Wizard";

class App extends Component {
  state={
    inventory:[]
  }

  componentDidMount(){
    axios.get('/api/inventory').then( res => {
      this.setState({
        inventory: res.data
      })
    })
  }

  render() {
    return (
    <div className="App">
      <header>
        <h1>THE GAS STAND CONVENIENCE STORE</h1>
      </header>
      <main>
       <Switch>
         <Route exact path="/" component={() => <Inventory inventory={this.state.inventory}/>}/>
         <Route path="/wizard" component={Wizard}/>
       </Switch>
      </main>
    </div>
    )
  }
}

export default App;
