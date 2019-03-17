import React, { Component } from 'react';

class FAQ extends Component {
    render() {
        return (
            <div>
                {/* <body>                     */}
                    {/* <div class="middle"> */}
                        <div class="menu">
                        <li class="item" id='question1'>
                                <a href="#question1" class="question">Q: How do I buy stuff?</a>
                                <div class="smenu">
                                    <a href="#">A: Add products to your shopping bag which should appear after adding items then leave at least either your email, WhatsApp number, or Viber number and one of our
                                    representatives will contact you shortly to complete the payment and get your shipping info after you place your order.</a>
                                </div>
                            </li>

                            <li class="item" id='question2'>
                                <a href="#question2" class="question">Q: Which forms of payment do you accept?</a>
                                <div class="smenu">
                                    <a href="#">A: We accept cryptocurrency (Bitcoin and Ether), bank transfer, and Skrill transfer.</a>
                                </div>
                            </li>

                            {/* <li class="item" id='question3'>
                                <a href="#question3" class="question">Q: How do I pay using cryptocurrency?</a>
                                <div class="smenu">
                                    <a href="#">A: First, you need to exchange your money for a form of cryptocurrency at a cryptocurrency market
                                    like Coinrush. You then send your order's price in Bitcoin to a cryptocurrency wallet which one of our
                                     representatives will send you. Please note that virtually all cryptocurrency market's require that the user
                                     submit photo-ID prior to opening an account and that there are buy and send fees.
                                    </a>
                                </div>
                            </li> */}

                            <li class="item" id='question4'>
                                <a href="#question4" class="question">Q: Where do you ship?</a>
                                <div class="smenu">
                                    <a href="#">A: We ship internationally and discreetly -- even to Canada.</a>
                                </div>
                            </li>

                            <li class="item" id='question5'>
                                <a href="#question5" class="question">Q: What should I get if I'm just starting out?</a>
                                <div class="smenu">
                                    <a href="#">A:  
                                    It's best recommended that you do some research on the TransDIY Reddit as lots of estrogen, anti-androgen, 
                                    and even progestrone cycles are outlined there. Anyway, usually people start with Estrofem 2mg/12hours and 
                                    Bicalutamide 50mg/day.
                                    </a>
                                </div>
                            </li>

                            <li class="item" id='question6'>
                                <a href="#question6" class="question">Q: Do I have to enter my email, WhatsApp, AND Viber numbers before placing an order?</a>
                                <div class="smenu">
                                    <a href="#">A: No, we just need AT LEAST ONE of them. WhatsApp would be easier though because it's
                                     real-time communication.</a>
                                </div>
                            </li>

                        </div>
                    {/* </div> */}
                {/* </body> */}
            </div>
        );
    }
}

export default FAQ;