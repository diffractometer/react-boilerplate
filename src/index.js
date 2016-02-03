import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, Link } from 'react-router'
import { syncHistory, routeReducer, routeActions } from 'react-router-redux'
// import reducers from '<project-path>/reducers'

const reducer = combineReducers(Object.assign({}, {
  routing: routeReducer
}))


// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(browserHistory)
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore)

const store = createStoreWithMiddleware(reducer)

// Required for replaying actions from devtools to work
reduxRouterMiddleware.listenForReplays(store)

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Link onClick={() => push('/foo')} to="/foo">Foo</Link>
        <Link onClick={() => push('/bar')} to="/bar">Bar</Link>
      </div>
    );
  }
}

class Foo extends React.Component {
  render() {
    return (
      <h1>Foo</h1>
    );
  }
}

class Bar extends React.Component {
  render() {
    return (
      <h1>Bar</h1>
    );
  }
}


render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={HelloMessage}>
        <Route path="foo" component={Foo}/>
        <Route path="bar" component={Bar}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
