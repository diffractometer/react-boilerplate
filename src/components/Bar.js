import React from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';

function Bar({ push, children }) {
  return (
    <div>
      <h1>Bar</h1>
      <button onClick={() => push('/bar/yaz')}>Go to /bar/yaz</button>
    </div>
  );
}

export default connect(
  null,
  routeActions
)(Bar);
