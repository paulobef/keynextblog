import React from 'react';


const Navbar = props => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
               <img src={props.logo} width="30" height="30" className="d-inline-block align-top mr-3" alt="" />
                {props.name}
            </a>
        </nav>
    )
}

export default Navbar;