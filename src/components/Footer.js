import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

class Footer extends Component {
    render() {
        return (
            // <FooterWrapper className="footer bg-pink px-sm-5">                
                
            //         <li className="nav-item ml-5">
            //             <span className="footerstuff">Help us keep serving our community and friends by donating to our BTC wallet at:     1JeNnzkHowzsD9guTvSfztQqifpTiniud8</span>
            //         </li>
                             
            // </FooterWrapper>
            <div>
                <div class="menu">
                <li class="item">
                        <a class="donation">Help us keep serving our community and friends by donating to our BTC wallet at:    14gQGCEniiRTJDbWj959wGPuHkdsa8KwZM<br/> Thank You!</a>
                    </li>
                </div>
            </div>
        );
    }
}

const FooterWrapper = styled.nav`
    background: var(--mainPink);
    .footerstuff{
        text-align: center
        font-size: 1.5rem;
        text-transform: capitalize;
        bottom: -50px;
        height: 50px;
        left: 0;                
        right: 0;
    };   
    border-top:0.20rem solid var(--hotPink);
`
//color:var(--mainWhite) !important;
export default Footer;
