import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';

const ProductContext = React.createContext();
//Provider  
//Consumer

class ProductProvider extends Component {
state = {
    products: [], 
    detailProduct: detailProduct,
    shoppingBag: [],
    modalOpen: false,
    modalProduct: detailProduct, 
    shoppingBagSubTotal: 0,
    shoppingBagshipping: 0,
    shoppingBagTotal: 0,
};

componentDidMount() {
    this.setProducts();
}

setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
        const singleItem = {...item};
        tempProducts = [...tempProducts, singleItem];
    })
    this.setState(()=>{
        return {products:tempProducts}
    })
}

getItem = (id) => {
    const product = this.state.products.find(item => item.id === id);
    return product;
}

handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
        return {detailProduct:product};
    });
};

addToShoppingBag = id =>{
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inShoppingBag = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
    () => {
        return { products:tempProducts, 
            shoppingBag: [...this.state.shoppingBag,
            product] };
    }, 
    () => {
        this.addTotals();
    });
};

openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
        return {modalProduct:product, modalOpen:true}
    });
};

closeModal = () => {
    this.setState(() => {
        return {modalOpen:false}
    });
};

increment = (id) => {
    let tempShoppingBag = [...this.state.shoppingBag];
    const selectedProduct = tempShoppingBag.find(item=>item.id === id);
 
    const index = tempShoppingBag.indexOf(selectedProduct);
    const product = tempShoppingBag[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(()=>
    {return{shoppingBag:[...tempShoppingBag]}},
    ()=>{this.addTotals()})
};

decrement = (id) => {
    let tempShoppingBag = [...this.state.shoppingBag];
    const selectedProduct = tempShoppingBag.find(item=>item.id === id);
 
    const index = tempShoppingBag.indexOf(selectedProduct);
    const product = tempShoppingBag[index];

    product.count = product.count - 1;

    if (product.count === 0) {
        this.removeItem(id)
    }
    else {
        product.total = product.count * product.price;
        this.setState(()=>
        {return{shoppingBag:[...tempShoppingBag]}},
        ()=>{this.addTotals()})
    }
};

removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempShoppingBag = [...this.state.shoppingBag];
    
    tempShoppingBag = tempShoppingBag.filter(item => item.id !== id);

    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inShoppingBag = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    
    this.setState(()=>{
        return {
            shoppingBag:[...tempShoppingBag],
            products:[...tempProducts]
        }
    },()=>{
        this.addTotals();
    })
};

clearShoppingBag = () => {
    this.setState(() => {
        return { shoppingBag : [] }
    },()=>{
        this.setProducts();
        this.addTotals();
    });
};

// handleChange = e => {
    //     this.setState({ [e.target.email]: e.target.value })
    // }

    // handleSubmit(e) {
    //     e.preventDefault()
    //     const { email, whatsapp, viber } = this.state
    // }

addTotals = () => {
    let subTotal = 0;
    this.state.shoppingBag.map(item => (subTotal += item.total));
    let tempshipping = 15;
    // if (this.subtotal > 200) {
    //     tempshipping = 0;
    // } 
    // else {
    //     tempshipping = 15;
    // } 
    const shipping = parseFloat(tempshipping.toFixed(2));
    const total = subTotal + shipping;
    
    this.setState(() => {
        return {
            shoppingBagSubTotal:subTotal,
            shoppingBagshipping:shipping,
            shoppingBagTotal:total,
        }
    })
}


    render() {
        return (
            <ProductContext.Provider 
            value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToShoppingBag:this.addToShoppingBag,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearShoppingBag: this.clearShoppingBag,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };