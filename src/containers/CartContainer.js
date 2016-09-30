import { connect } from 'react-redux'
import Cart from '../components/Cart'

import { createSelector } from 'reselect'

const itemsSelector = state => state.cart.items

const getItemsInCart = createSelector(itemsSelector, items => {
  console.log(items)
  return items.join(', ')
})

const mapStateToProps = state => (
  {
    items: getItemsInCart(state)
  }
)

const mapDispatchToProps = dispatch => (
  {
  }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)
