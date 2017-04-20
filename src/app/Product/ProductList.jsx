import React  from 'react';
import MyComp from '../Includes/MyComp.jsx';
import Product from './Product.jsx';

class ProductList extends MyComp {

  constructor(props) {
    super(props);
  }

  render() {
    let productList = [];
    
    this.props.products.forEach(
        (product) => {
            productList.push(<Product key={product.productnu} productnu={product.productnu} text={product.text} />);
        }
    );
    



    return (
      <div className="productList">
      {productList}
      </div>
    );
  }

}

export default ProductList;
