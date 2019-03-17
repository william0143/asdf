import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm bg-pink navbar-light px-sm-5">
                {/* <Link to='/' className="nav-link">
                    Contact
                </Link> */}
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Products
                        </Link>
                    </li>
                </ul>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/faq" className="nav-link">
                            FAQ
                        </Link>
                    </li>
                </ul>                
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/currencyconverter" className="nav-link">
                            € -> $
                        </Link>
                    </li>
                </ul> 
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
    background: var(--mainPink);
    .nav-link{
        
        font-size: 1.3rem;
        text-transform: capitalize;
    }
    border-bottom:0.25rem solid var(--hotPink);
`
//color:var(--mainWhite) !important;
export default Navbar;