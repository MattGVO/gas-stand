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

  sellInventory = id =>{
    axios.delete(`/api/inventory/${id}`)
      .then(res =>{
        this.setState({
          inventory: res.data
        })
      })
  }
  render() {
    return (
      <div className="Inventory">
        <div className="inv-header">
          <h1>Inventory</h1>
        </div>
        <table>
          <tbody>

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
              <tr key={item.id}>
                <td>{item.item_name}</td>
                <td>{item.category}</td>
                <td>{item.quantity}</td>
                <td>$ {price} <button onClick={() => this.sellInventory(item.id)}>Sell</button></td>
              </tr>
            );
          })}
          </tbody>
        </table>
        <Link to="/wizard/step1">
          <button>Add Item</button>
        </Link>
      </div>
    );
  }
}

export default Inventory;
