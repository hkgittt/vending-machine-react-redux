import React, { PropTypes } from 'react'

export const Cart = ({ items }) => (
  <div className='mid-gray tracked-tight f3-ns f4 pa4-ns pa3 mv3'>
    {items}
  </div>
)

Cart.propTypes = {
  items: PropTypes.string
}

export default Cart
