import React from 'react'
import { Link } from 'react-router-dom';

const Item = (to, name, key) => {
  return (
    <div>
      <Link to={to}>
        <div>{name}</div>
      </Link>
    </div>
  )
}

export default Item
