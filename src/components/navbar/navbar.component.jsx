import React from 'react';
import './navbar.styles.scss';

const Navbar = () => {
    return (
        <div className="vertical-menu">
            <a href="./test" class="active">Home</a>
            <a href="./projects">Projects</a>
            <a href="./blog">Blog</a>
        </div>
    )
}

export default Navbar;