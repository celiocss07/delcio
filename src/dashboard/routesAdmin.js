import React from 'react';
import  { Switch, Route } from 'react-router-dom';
import Home from './index';




export default function Routes() {

    return(
        <Switch>
            <Route path="/dashboard" exact component={Home} />
            
        </Switch>
    )
}