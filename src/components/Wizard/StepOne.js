import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { STEP_ONE } from "../../ducks/store";

class StepOne extends Component {
  state = {
    itemName: "",
    category: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submit = () => {
    store.dispatch({
      type: STEP_ONE,
      payload: this.state
    });
  };
  render() {
    return (
      <div className="wiz-container">
          <h1>Step One</h1>
          <span>
            Item Name:
          </span>
            <input
              onChange={e => this.handleChange(e)}
              name="itemName"
              type="text"
            />
          <span>
            Category:
          </span>
            <input
              onChange={e => this.handleChange(e)}
              name="category"
              type="text"
            />
        <div className="buttons">
          <Link to="/">
            <button>Go Back</button>
          </Link>
          <Link to="/wizard/step2">
            <button onClick={this.submit}>Next</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default StepOne;
