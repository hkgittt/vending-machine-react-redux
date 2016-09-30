import { createSelector } from 'reselect'

const getBalance = state => state.balance
const getItems = state => state.machine.items

export const getItemsWithAffordability = createSelector(
  [getBalance, getItems],
  (balance, items) => (
    items.map(item => Object.assign(item, { currentlyAffordable: item.price <= balance }))
  )
)
