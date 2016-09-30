import { createSelector } from 'reselect'

const getBalance = state => state.balance
const getItems = state => state.machine.items

export const getItemsWithAffordability = createSelector(
  [getBalance, getItems],
  (balance, items) => {
    return items.map(item => {
      return item.set('currentlyAffordable', item.price <= balance)
    })
  }
)
