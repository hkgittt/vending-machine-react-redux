import React, { PropTypes } from 'react'

export const Cart = ({ items }) => (
  <div className='mid-gray tracked-tight f1-ns f2 pa4-ns pa3 mv3'>
    {items}
  </div>
)

Cart.propTypes = {
  items: PropTypes.string
}

export default Cart
