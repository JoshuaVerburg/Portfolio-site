import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'
import HomePage from '../components/HomePage'
import Contact from '../components/Contact'
import Portfolio from '../components/Portfolio'
import PortfolioItem from '../components/Expensify'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route component={HomePage} path="/" exact={true}/>
                <Route component={Portfolio} path="/portfolio" exact={true}/>
                <Route component={PortfolioItem} path="/portfolio/:id" exact={true}/>
                <Route component={Contact} path="/contact"/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);
export default AppRouter;