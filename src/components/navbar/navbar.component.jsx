import React from 'react';
import './navbar.styles.scss';

import { ReactComponent as ReactLogo } from './../../assets/custom/logo/logo.svg';

const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="navbar__links">
                <li><a href="./" class="active">about</a></li>
                <li><a href="./projects">portfolio</a></li>
                <li><a href="./blog">resume</a></li>
            </ul>
            <div className="navbar__logo-box">
                <ReactLogo className="navbar__logo"/>
            </div>
        </div>
    )
}

export default Navbar;