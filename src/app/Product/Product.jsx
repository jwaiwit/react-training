import React  from 'react';
import MyComp from '../Includes/MyComp.jsx';

class Product extends MyComp {

  constructor(props) {
    super(props);
    this.state = { totalBuy:0 };
    this.onBuy = this.onBuy.bind(this);
  }

  onBuy () {
    let totalBuy = this.state.totalBuy + 1;
    this.setState({totalBuy: totalBuy});
  }

  render() {
    return (
      <div className="Product">
        <div className="image">  </div>
        <div className="info">  
          {this.props.productnu} - {this.props.text} 
          <button onClick={this.onBuy}>Buy</button></div>
      </div>
    );
  }

}

export default Product;
