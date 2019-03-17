import React from 'react';
import ShoppingBagItem from './ShoppingBagItem';

export default function ShoppingBagList({value}) {
    const { shoppingBag } = value;
    return (
        <div className="container-fluid">
            {shoppingBag.map(item => {
                return <ShoppingBagItem key={item.id} 
                item={item} value={value} />
            })}
            
        </div>
    );
}