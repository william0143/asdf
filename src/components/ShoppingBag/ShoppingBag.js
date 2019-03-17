import React, { Component } from 'react';
import Title from '../Title';
import ShoppingBagColumns from './ShoppingBagColumns.js';
import EmptyShoppingBag from './EmptyShoppingBag';
import {ProductConsumer} from '../../context';
import ShoppingBagList from './ShoppingBagList';
import ShoppingBagTotal from './ShoppingBagTotal';
import CurrencyConverter from '../CurrencyConverter';
import {Link} from 'react-router-dom';

class ShoppingBag extends Component {        

    constructor() {
        super();
    
        this.state = {
            items: ''
        };       
    }

    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const { shoppingBag } = value;
                        this.state.items = value;
                        if (shoppingBag.length > 0) {
                            return (
                                <React.Fragment>
                                    <Title name="your" title="shopping bag"/>
                                    <ShoppingBagColumns />
                                    <ShoppingBagList 
                                    value={value} />
                                    <ShoppingBagTotal value={value}/>                                    
                                </React.Fragment>
                            );
                        }
                        else{
                            return <EmptyShoppingBag />;
                        }
                    }}                                        
                </ProductConsumer>                                              
                <CurrencyConverter/>                                
            </section>
        );
    }
}

export default ShoppingBag;