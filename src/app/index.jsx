import React from 'react';
import {render} from 'react-dom';


import WebShop from './WebShop.jsx';

class App extends React.Component {
  render () {
    return <WebShop/>;
  }
}

render(<App/>, document.getElementById('app'));