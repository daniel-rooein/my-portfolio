import React from 'react';

import './header.styles.scss';

import Navbar from '../navbar/navbar.component';

const Header = () => {
    return (
        <div className="header">
            <div className="header__container">
                <Navbar />
                <div className="intro">
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
                    <a href="#about-me">
                        <div class="intro__learn-more__container">
                            <div class="intro__learn-more__container__center">
                                <button class="intro__learn-more__container__center__btn">
                                    <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
                                        <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
                                        <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
                                    </svg>
                                    <span>learn more!</span>
                                </button>
                            </div>
                        </div>
                    </a> 
                </div>
            </div>
        </div>
    )
}

export default Header;