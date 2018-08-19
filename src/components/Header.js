import React from 'react';

const Header =() => {

    const headerStyle={
        backgroundColor: 'rgb(83, 140, 39)',
        width: '100%',
        height: '50px',
        color: 'rgb(247,247,247)'
    };

    const spanStyle={
        lineHeight: '50px',
        marginLeft: '20px'
    }
    return(
        <div style={headerStyle}>
            <span style={spanStyle}>NYTimes Books App Using React / Redux</span>
        </div>
    )
}

export default Header;