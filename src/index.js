import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

import './styles/styles.scss';
import App from './components/App.js';
import Foo from './components/Foo.js';
import Bar from './components/Bar.js';
import Yaz from './components/Yaz.js';



const store = configureStore();

render((
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={App}>
        <IndexRoute component={Foo} />
        <Route path="foo" component={Foo} />
        <Route path="bar" component={Bar} />
        <Route path="yaz" component={Yaz} />
      </Route>
    </Router>
  </Provider>
  ), document.getElementById('app')
);
