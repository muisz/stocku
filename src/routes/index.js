import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from '../components/views/dashboard';

export default function(props){
    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <Dashboard />
                </Route>
            </Switch>
        </Router>
    );
}