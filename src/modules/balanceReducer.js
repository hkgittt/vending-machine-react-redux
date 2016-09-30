const BALANCE_ADD = 'BALANCE_ADD'
const BALANCE_SUBTRACT = 'BALANCE_SUBTRACT'

export const balanceAdd = amount => (
  {
    type: BALANCE_ADD,
    payload: amount
  }
)

export const balanceSubtract = amount => (
  {
    type: BALANCE_SUBTRACT,
    payload: amount
  }
)

export default function balanceReducer (state = 0, action) {
  switch (action.type) {
    case BALANCE_ADD:
      return state + action.payload
    case BALANCE_SUBTRACT:
      return state - action.payload
    default:
      return state
  }
}
