import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store, { STEP_TWO } from '../ducks/store';
import axios from 'axios';
import { red } from 'ansi-colors';

class StepTwo extends Component {
    state={
        quantity:0,
        price: 0,
    }

    handleChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit = () =>{
        store.dispatch({
            type: STEP_TWO,
            payload: this.state
        })
        let reduxState = store.getState()
        console.log(reduxState)
        axios.post('/api/inventory',reduxState).catch(err => alert(err))
    }
render() {
    return (
        <div className="StepTwo">
            <span>Quantity: <input onClick={e => this.handleChange(e)} name="quantity" type="number"/></span>
            <span>Price: <input onClick={e => this.handleChange(e)} name="price" type="number"/></span>
            <div>
                <Link to="/wizard/step1">
                    <button>Go Back</button>
                </Link>
                <Link to="/">
                    <button onClick={this.submit}>Submit</button>
                </Link>
            </div>
        </div>
    );
}
}

export default StepTwo;