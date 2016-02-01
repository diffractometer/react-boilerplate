import React from 'react';
import { render } from 'react-dom';
//import { Provider } from 'react-redux';
//import configureStore from './store/configureStore';
import './styles/styles.scss';

class HelloMessage extends React.Component {
  render() {
    return (
      <h1>hello world</h1>
    );
  }
}

render(
  <HelloMessage />, document.getElementById('app')
);
