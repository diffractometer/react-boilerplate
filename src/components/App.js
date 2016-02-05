import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';

function App({ push, children }) {
  return (
    <div>
      <Link to="/">R2act Boilerplate</Link>
      <ul>
        <li>
          <button onClick={() => push('/foo')}>Go to /foo</button>
        </li>
        <li>
          <button onClick={() => push('/bar')}>Go to /bar</button>
        </li>
        <li>
          <button onClick={() => push('/yaz')}>Go to /yaz</button>
        </li>
      </ul>
      {children}
    </div>
  );
}

export default connect(
  null,
  routeActions
)(App);
