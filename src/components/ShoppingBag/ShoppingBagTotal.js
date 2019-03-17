import React from 'react';
import {Link} from 'react-router-dom';

export default function ShoppingBagTotal({value}) {
const{shoppingBagSubTotal, shoppingBagshipping, 
    shoppingBagTotal, clearShoppingBag} = value; 

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5
                    ml-md-auto col-sm-8 text-capitalize
                    text-right">
                        
                        <h5>
                            <span className="text-title">
                            subtotal : </span>
                            <strong>€ {shoppingBagSubTotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                            shipping : </span>
                            <strong>€ {shoppingBagshipping}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                            total : </span>
                            <strong>€ {shoppingBagTotal}</strong>
                        </h5>
                        <Link to="/">
                            <button className=
                            "btn btn-outline-danger text-uppercase mb-3 px-5"
                            type="button"
                            onClick={() => clearShoppingBag()}
                            >
                            clear shopping bag
                            </button>
                        </Link>
                        
                        
                    </div>
                    
                    
                </div>
            </div>
        </React.Fragment>
    );
}