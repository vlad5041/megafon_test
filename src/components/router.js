import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Welcome from "./welcome";
import NotFound from "./404";
import MainComponent from "./main";

let loggedIn = localStorage.getItem('isAuth');

const Routes = () => (
    <Switch>
        <Route strict path="/">
            <MainComponent />
            {loggedIn ? <Redirect to="/profile/" /> : <Redirect to="/books/"/>}
        </Route>
        <Route path="/auth" component={Welcome} />
        <Route path="*" component={NotFound}/>
    </Switch>
);

export default Routes;