import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'

function Foo({ push, children }) {
  return (
    <div>
      Links:
      {' '}
      <Link to="/">Home</Link>
      {' '}
      <div>
        <button onClick={() => push('/bar')}>Go to /bar</button>
      </div>
      <div>
        <button onClick={() => push('/yaz')}>Go to /yaz</button>
      </div>
    </div>
  )
}

export default connect(
  null,
  routeActions
)(Foo)
