import React, { Component } from "react";
import {Link} from 'react-router-dom'
import axios from 'axios'

class Inventory extends Component {
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
      <div className="Inventory">
        <h1>Inventory</h1>
        {this.state.inventory.map(item => {
          return (
            <div style={{ display: "flex" }}>
              <h1>{item.item_name}</h1>
              <h1>{item.category}</h1>
              <h1>{item.quantity}</h1>
              <h1>{item.price}</h1>
            </div>
          );
        })}
        <Link to="/wizard/step1">
          <button>Add Item</button>
        </Link>
      </div>
    );
  }
}

export default Inventory;
