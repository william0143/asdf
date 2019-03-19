import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ShoppingBagList from './ShoppingBag/ShoppingBagList';
import {ProductConsumer} from '../context';
import ShoppingBagColumns from './ShoppingBag/ShoppingBagColumns.js';
import ShoppingBagTotal from './ShoppingBag/ShoppingBagTotal';
import Title from './Title';

export default class ContactDetails extends Component {
  state = {
    inputemail: '',
    formSubmitted: false,
    details: {}
  };

  handleCancel = this.handleCancel.bind(this);
  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);

  static sender = 'fsdahfbasjdcn@gfdsgds.com';

  handleCancel() {
    this.setState({
      inputemail: '',
      details: {}
    });
  }

  myCallback = () => {

  };

  handleChange(event) {
    this.setState({
      inputemail: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const {
      REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      REACT_APP_EMAILJS_TEMPLATEID: template
    } = this.props.env;

    this.sendEmail(
      "template_rpabrNps",
      this.sender,
      receiverEmail,
      this.state.inputemail,
      JSON.stringify(this.state.details)
    );
    
    this.setState({
      formSubmitted: true
    });
    
  }

  sendEmail(templateId, senderEmail, receiverEmail, inputemail, details) {
    window.emailjs
      .send('smtp_server', "template_rpabrNps", {
        senderEmail,
        receiverEmail,
        inputemail,
        details
      })
      .then(res => {
        this.setState({
          formEmailSent: true
        });
      })     
      .catch(err => console.error('Failed to send data. Error: ', err));
  }

  render() {
    let formSubmitted = this.state.formSubmitted;

    let popup;

    if (formSubmitted)
    {
        popup = <div>
                  Your order has been placed! <br />
                  A representative will be in touch with you shortly!
                </div>
    }
    else
    {
      popup = [];
    } 
    
    console.log(this.props.env);    

    return (
      <ProductConsumer>
          {value => {
              const { shoppingBag } = value;
              this.state.details = value.shoppingBag;
              if (shoppingBag.length > 0) {
                  return (
                      <React.Fragment>
                          <Title name="your" title="shopping bag"/>
                          <ShoppingBagColumns />
                          <ShoppingBagList 
                          value={value} />
                          <ShoppingBagTotal value={value}/> 
                          <form className="col-10 mx-auto 
                          text-left text-title" onSubmit={this.handleSubmit}>
                            
                            {popup}
                    
                            <h10>Contact us: Contactshapeshifter@protonmail.com<br/>Leave your contact info below!</h10>
                    
                            <div className="row">
                            <p>
                              <input
                                  className="text-input"
                                  id="feedback-entry"
                                  name="feedback-entry"
                                  onChange={this.handleChange}
                                  placeholder="Email, WhatsApp, Viber"
                                  required
                                  style={{ width:'100%'}}
                                  position="center"
                                  value={this.state.inputemail}                          
                                  className="form-control form-control-lg mx-3"
                                />  
                            </p>
                            <div className="divider"/> 
                            <div className="divider"/> 
                            <div className="divider"/> 
                            <div className="divider"/> 
                            <div className="divider"/> 
                            
                            <p>
                            <div className="btn-group">
                                <button 
                                className="btn btn-outline-danger text-uppercase mx-3"
                                type="button"
                                onClick={this.handleCancel}
                                >
                                  Clear
                                </button>
                                                                
                                
                                <input type="submit"
                                value="Place Order"  
                                disabled={formSubmitted}                        
                                className="btn btn-outline-danger text-uppercase mx-3" 
                                />
                                          
                              </div>
                            </p>                                         
                                                  
                            </div>         
                              
                          </form>;                                  
                      </React.Fragment>
                  );
              }
              else{
                  return <form className="col-10 mx-auto 
                          text-left text-title" onSubmit={this.handleSubmit}>
                            
                            {popup}
                    
                            <h10>Contact us: Contactshapeshifter@protonmail.com<br/>Leave your contact info below!</h10>
                    
                            <div className="row">
                            <p>
                              <input
                                  className="text-input"
                                  id="feedback-entry"
                                  name="feedback-entry"
                                  onChange={this.handleChange}
                                  placeholder="Email, WhatsApp, Viber"
                                  required
                                  style={{ width:'100%'}}
                                  position="center"
                                  value={this.state.inputemail}                          
                                  className="form-control form-control-lg mx-3"
                                />  
                            </p>
                            <div className="divider"/> 
                            <div className="divider"/> 
                            <div className="divider"/> 
                            <div className="divider"/> 
                            <div className="divider"/> 
                            
                            <p>
                            <div className="btn-group">
                                <button 
                                className="btn btn-outline-danger text-uppercase mx-3"
                                type="button"
                                onClick={this.handleCancel}
                                >
                                  Clear
                                </button>
                                                                
                                
                                <input type="submit"
                                value="Place Order"   
                                disabled={formSubmitted}                     
                                className="btn btn-outline-danger text-uppercase mx-3" 
                                />
                                          
                              </div>
                            </p>                                         
                                                  
                            </div>         
                              
                          </form>;
              }
          }}     
                                             
      </ProductConsumer>                  
    );
  }
}

ContactDetails.propTypes = {
  env: PropTypes.object.isRequired
};
