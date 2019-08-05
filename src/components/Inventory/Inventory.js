import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './Inventory.css'

class Inventory extends Component {
  state = {
    inventory: []
  };

  componentDidMount() {
    axios.get("/api/inventory").then(res => {
      this.setState({
        inventory: res.data
      });
    });
  }
  render() {
    return (
      <div className="Inventory">
        <h1>Inventory</h1>
        <table>
          <tr>
            <th>Item Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>

          {this.state.inventory.map(item => {
            let price = String(item.price)
            price = `${price.slice(0,price.length -2)}.${price.slice(price.length -2)}`
           
            return (
              <tr>
                <td>{item.item_name}</td>
                <td>{item.category}</td>
                <td>{item.quantity}</td>
                <td>$ {price}</td>
              </tr>
            );
          })}
        </table>
        <Link to="/wizard/step1">
          <button>Add Item</button>
        </Link>
      </div>
    );
  }
}

export default Inventory;
