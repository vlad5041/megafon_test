import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Welcome from "./welcome";
import NotFound from "./404";
import MainComponent from "./main";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/main" component={MainComponent} />
        <Route path="*" component={NotFound}/>
    </Switch>
);

export default Routes;