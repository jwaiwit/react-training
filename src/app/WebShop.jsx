import React from 'react';
import MyComp from './Includes/MyComp.jsx';

import ProductList from './Product/ProductList.jsx';

class WebShop extends MyComp {

  constructor(props) {
    super(props);
  }

  render() {

    let PRODUCTS = [

        {productnu: '123', text: 'test 1'},
        {productnu: '456', text: 'test 2'},
        {productnu: '789', text: 'test 3'}
    ];

    return (
    <div>
        <div className="WebShop">
            <ProductList products={PRODUCTS}/>
        </div>
            <hr/>
    todo : 
    <pre>
    WebShop
    Basket
        BasketLine
    ProductList
        Product
    </pre>
    </div>
    );
  }

}

export default WebShop;
