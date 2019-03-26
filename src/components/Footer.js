import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

class Footer extends Component {
    render() {
        return (
            <FooterWrapper className="navbar navbar-expand-sm bg-pink navbar-light px-sm-5">                
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <span className="footerstuff">Help us keep serving our community and friends by donating to our BTC wallet at:     1JeNnzkHowzsD9guTvSfztQqifpTiniud8</span>
                    </li>
                </ul>                 
            </FooterWrapper>
        );
    }
}

const FooterWrapper = styled.nav`
    background: var(--mainPink);
    .footerstuff{
        text-align: center
        font-size: 1.5rem;
        text-transform: capitalize;
    }
    border-top:0.20rem solid var(--hotPink);
`
//color:var(--mainWhite) !important;
export default Footer;