import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Nav,
    NavItem,
    NavLink,
    NavbarBrand

} from 'reactstrap';

const Header = () => {
    return (
        <>
        <Nav className="d-flex justify-content-between" id="main-title" >
         <NavItem>
         <div>Some Barn Name</div>
         </NavItem>
            <NavbarBrand>
                <img 
                    src={require("../assets/demoLogo.png")} 
                    alt="" 
                    style={{ height: 70, width: 70}}
                /> 
                </NavbarBrand>
            
        </Nav>

        <Nav className="d-flex justify-content-end second-nav">
            <div>
                <NavItem>
                    <NavLink id="nav-link" href="/Sales"> Sales </NavLink>
                </NavItem>
            </div>

            <div>
                <NavItem>
                    <NavLink id="nav-link" href="/About"> About the Team </NavLink>
                </NavItem>
            </div>

            <div> 

                <NavItem >
                    <NavLink id="nav-link" href="/Facility"> Facility </NavLink>
                </NavItem>
            </div>
        </Nav>
        </>
    );
};

export default Header;