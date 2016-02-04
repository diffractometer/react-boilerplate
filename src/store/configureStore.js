import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { browserHistory } from 'react-router';
import { syncHistory } from 'react-router-redux';

// Sync dispatched route actions to the history
const reduxRouterMiddleWare = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleWare)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
