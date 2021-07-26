import React from 'react';
import { NavLink } from 'react-router-dom';

import './MainNavigation.css';

const MainNavigation = props => {
    return (
    <header className="main-navigation">
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Products</NavLink>
                </li>
                <li>
                    <NavLink to="/UserCard">Cart ({props.cartItemNumber})</NavLink>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default MainNavigation;