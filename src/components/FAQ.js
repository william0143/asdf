import React, { Component } from 'react';

class FAQ extends Component {
    render() {
        return (
            <div>
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
                            <a href="#">A: We accept cryptocurrency (Bitcoin and Ethereum). Contact us for other options.</a>
                        </div>
                    </li>

                    <li class="item" id='question3'>
                        <a href="#question3" class="question">Q: Why is everything priced at €1?</a>
                        <div class="smenu">
                            <a href="#">A: This website is not transactional and is used soley for viewing purposes. 
                            Once you add items to your shopping bag, please leave either your email, Viber, or WhatsApp 
                            number then place your order and we'll get back to you with prices.
                            </a>
                        </div>
                    </li>

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
                            Bicalutamide or Spironolactone 50mg/day.
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

                    <li class="item" id='question7'>
                        <a href="#question7" class="question">Q: Do you do price matching?</a>
                        <div class="smenu">
                            <a href="#">A: We will honor price matching - if we can. Once we get in touch, send us the link to the website you'd 
                            like us to price match. Thank you!</a>
                        </div>
                    </li>

                </div>
            </div>
        );
    }
}

export default FAQ;
