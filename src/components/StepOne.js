import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import store, { STEP_ONE } from '../ducks/store'


class StepOne extends Component {
    state={
        itemName:"",
        category: "",
    }

    handleChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit = () =>{
        store.dispatch({
            type: STEP_ONE,
            payload: this.state
        })
    }
render() {
    return (
        <div className="StepOne">
            <span>Item Name:<input onChange={e => this.handleChange(e)} name="itemName" type="text"/></span>
            <span>Category:<input onChange={e => this.handleChange(e)} name="category" type="text"/></span>
            <div>
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