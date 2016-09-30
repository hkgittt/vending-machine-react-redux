import { combineReducers } from 'redux'
import locationReducer from './location'
import { balanceReducer, machineReducer, cartReducer } from '../modules'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    balance: balanceReducer,
    machine: machineReducer,
    cart: cartReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
