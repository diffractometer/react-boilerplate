import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './styles/styles.scss';
import { Router, Route, Link, hashHistory } from 'react-router';
import Foo from './components/Foo.js';
import Bar from './components/Bar.js';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React Boilerplate</h1>
        <ul>
          <li><Link to="/foo">Foo</Link></li>
          <li><Link to="/bar">Bar</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

render((
  <Router history={hashHistory} >
    <Route path="/" component={App}>
      <Route path="foo" component={Foo} />
      <Route path="bar" component={Bar} />
    </Route>
  </Router>), document.getElementById('app')
);
