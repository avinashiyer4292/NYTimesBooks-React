import React from 'react';

const Header =() => {

    const headerStyle={
        backgroundColor: 'rgb(77,86,103)',
        width: '100%',
        height: '50px',
        color: 'rgb(247,247,247, 0.5)'
    };

    const spanStyle={
        lineHeight: '50px',
        marginLeft: '20px'
    }
    return(
        <div style={headerStyle}>
            <span style={spanStyle}>Aera React/Redux Challenge - NYTimes Books App</span>
        </div>
    )
}

export default Header;