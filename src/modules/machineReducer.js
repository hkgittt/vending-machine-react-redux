const INITIAL_STATE = {
  items: [
    { name: 'Fanta', size: '700ml', price: '1250', quantity: '20' },
    { name: 'Salad', size: '500g', price: '3000', quantity: '20' },
    { name: 'Rubber Duckie', size: 'NA', price: '500', quantity: '20' },
    { name: 'Ice Wine', size: '800ml', price: '9000', quantity: '20' },
    { name: 'Ginger Ale', size: '600ml', price: '800', quantity: '20' },
    { name: 'James McAvoy', size: '170cm', price: '50', quantity: '1' }
  ]
}

export default function machineReducer (state = INITIAL_STATE) {
  return state
}
