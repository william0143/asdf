import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
            {value => {
                const {
                    id, 
                    company, 
                    img, 
                    info, 
                    price, 
                    title, 
                    inShoppingBag
                } = value.detailProduct;
            return (
                // Title
                <div className="container py-5">
                    <div className="row">
                        <div className="col-10 mx-auto text-center
                        text-slanted text-blue my-5">
                            <h1>{title}</h1>
                        </div>
                    </div>                    
                    {/* Product Info */}
                    <div className="row">
                        <div className="col-10 mx-auto
                        col-md-6 my-3">
                            <img src={img} 
                            className="img-fluid"
                            alt="product"/>
                        </div>
                        <div className="col-10 mx-auto
                        col-md-6 my-3 text-capitalize">
                            <h2> product : {title} </h2>
                            <h4 className="text-blue">
                            made by : <span className="text-blue">
                                {company}
                            </span>
                            </h4>
                            <h4 className="text-blue">
                                <strong>
                                    price : <span>€</span>
                                    {price}
                                </strong>
                            </h4>
                            <p className="text-capitalize
                             font-weight-bold mt-3 mb-0">
                            details :
                            </p>
                            <p className="text-muted lead">
                            {info}
                            </p>
                            {/* {buttons} */}
                            <div>
                                <Link to="/">
                                    <ButtonContainer>
                                        back to products
                                    </ButtonContainer>
                                </Link>
                                <ButtonContainer
                                    shoppingBag
                                    disabled={inShoppingBag?true:false}
                                    onClick={()=>{
                                        value.addToShoppingBag(id);
                                        //value.openModal(id);
                                }}
                                >
                                    {inShoppingBag ? "In Shopping Bag" : "add to shopping bag"}
                                </ButtonContainer>
                            </div>
                        </div>
                    </div>

                </div>
                
            );
                }}
            </ProductConsumer>
        );
    }
}

export default Details;