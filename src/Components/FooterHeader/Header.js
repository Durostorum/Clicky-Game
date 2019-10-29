import React from 'react';

const Header = (props) => {
    const headStyle={
        textAlign:'right',
        fontSize: '30px',
        paddingRight:'50px',
        opacity: '0.7'
    }
    return (<div>
        <nav  className="navbar navbar-light bg-dark">
            <div style={headStyle} className="navbar-brand">Click Game</div>
        </nav>
        <span><h5 style={headStyle}>{props.children}</h5></span>
        </div>
     )
}

export default Header;