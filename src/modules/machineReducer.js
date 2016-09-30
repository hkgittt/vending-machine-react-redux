import { Record, List } from 'immutable'

const MachineRecord = Record({
  items: new List([])
})

const ItemRecord = Record({
  name: 'Product Name',
  itemSize: 'Product Size',
  price: 'Product Price',
  quantity: 'Quantity in the Machine',
  currentlyAffordable: false
})

const INITIAL_STATE = new MachineRecord({
  items: new List([
    new ItemRecord({ name: 'Fanta', itemSize: '700ml', price: '1250', quantity: '20' }),
    new ItemRecord({ name: 'Salad', itemSize: '500g', price: '3000', quantity: '20' }),
    new ItemRecord({ name: 'Rubber Duckie', itemSize: 'NA', price: '500', quantity: '20' }),
    new ItemRecord({ name: 'Ice Wine', itemSize: '800ml', price: '9000', quantity: '20' }),
    new ItemRecord({ name: 'Ginger Ale', itemSize: '600ml', price: '800', quantity: '20' }),
    new ItemRecord({ name: 'James McAvoy', itemSize: '170cm', price: '50', quantity: '1' })
  ])
})

const QUANTITY_SUBTRACT = 'QUANTITY_SUBTRACT'

export const quantitySubtract = itemName => (
  {
    type: QUANTITY_SUBTRACT,
    payload: itemName
  }
)

export default function machineReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case QUANTITY_SUBTRACT:
      return state.updateIn(
          ['items', state.items.findIndex(item => item.name === action.payload)],
          item => item.set('quantity', item.quantity - 1)
        )
    default:
      return state
  }
}
