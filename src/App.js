import React, { Component } from 'react';
import './App.css';
import ContactDetails from './components/ContactDetails';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import ShoppingBag from './components/ShoppingBag/ShoppingBag';
import Default from './components/Default';
import Modal from './components/Modal';
import CurrencyConverter from './components/CurrencyConverter';
import FAQ from './components/FAQ';
import OrderComplete from './components/OrderComplete';

class App extends Component {
  render() {
    return (
      <React.Fragment>
         <Navbar />
         <Switch>
           <Route exact  path="/" component={ProductList} />
           <Route path="/details" component={Details} />
           {/* <Route path="/shoppingbag" component={ShoppingBag} /> */}
           <Route path="/faq" component={FAQ} />
           <Route path="/currencyconverter" component={CurrencyConverter} />           
           <Route component={Default} />
         </Switch>
         <Modal />
         <div className="divider"/>
      <div className="App">        
        <ContactDetails env={this.props.env} />
      </div>
      </React.Fragment>
      
    );
  }
}

App.propTypes = {
  env: PropTypes.object.isRequired
};

export default App;
