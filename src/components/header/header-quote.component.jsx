import React from 'react';
import './header-quote.styles.scss';

const HeaderQuote = ({ message }) => {
    return (
        <div className="headerquote">
            {message}
        </div>
    )
}

export default HeaderQuote;