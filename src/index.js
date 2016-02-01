import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './styles/styles.scss';

const store = configureStore();

class HelloMessage extends React.Component {
  render() {
    return (
      <h1>Hello world</h1>
    );
  }
}

render(
  <HelloMessage />, document.getElementById('app')
);
