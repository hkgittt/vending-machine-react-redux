import { List, Record } from 'immutable'

const CART_ADD = 'CART_ADD'

const CartItemsRecord = Record({
  items: new List([])
})

export const cartAdd = name => (
  {
    type: CART_ADD,
    payload: name
  }
)

export default function cartReducer (state = new CartItemsRecord(), action) {
  switch (action.type) {
    case CART_ADD:
      return state.updateIn(['items'], items => items.push(action.payload))
    default:
      return state
  }
}
