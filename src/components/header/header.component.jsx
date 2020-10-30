import React from 'react';

import './header.styles.scss';

import Navbar from '../navbar/navbar.component';
import { ReactComponent as LinkedInLogo } from './../../assets/vendor/icons/linkedin.svg';
import { ReactComponent as GitHubLogo } from './../../assets/vendor/icons/github.svg';

const Header = () => {
    return (
        <div className="header">
            <div className="header__container">
                <Navbar />
                <div className="intro">
                    <div className="intro__logos-box">
                        <LinkedInLogo className="intro__logo"/>
                        <GitHubLogo className="intro__logo"/>
                    </div>
                    <h1>
                        {'</>'}Daniel Rooein 
                    </h1>
                    <h2 className="intro__skills-box">
                        <span className="intro__skill">asp .net</span>
                        <span className="intro__skill">c#</span>
                        <span className="intro__skill">sql</span>
                        <span className="intro__skill">angular</span>
                        <span className="intro__skill">react</span>
                    </h2>
                    <div>
                        <a href="#about-me">
                            <button className="intro__learn-more">
                                Learn More!
                            </button>
                        </a> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;