import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import PokemonSearch from "../components/PokemonSearch";
import HomePage from "../components/HomePage";

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div className="App">
            <Switch>
                <Route exact path='/' component={PokemonSearch} />
                <Route path='/x1' component={HomePage} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter