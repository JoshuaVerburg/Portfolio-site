import React from 'react'
import {NavLink} from 'react-router-dom'


const Header = () => (
    <header className="header">
    <div className="container">
        <div className="header__content">
            <NavLink to="/" exact={true} activeClassName="is-active" className="header__title"><h1>Joshua Verburg</h1></NavLink>
            <NavLink to="/portfolio" activeClassName="is-active" className="header__subtitle">Portfolio</NavLink>
            <NavLink to="/contact" activeClassName="is-active" className="header__subtitle">Contact</NavLink>
        </div>
    </div>

    </header>
);
export default Header;