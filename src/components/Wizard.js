import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import StepOne from "./StepOne"
import StepTwo from './StepTwo';

class Wizard extends Component {
render() {
    return (
        <div className="Wizard">
            <h1>Wizard</h1>
            <Switch>
                <Route path="/wizard/step1" component={StepOne}/>
                <Route path="/wizard/step2" component={StepTwo}/>
            </Switch>
        </div>
    );
}
}

export default Wizard;