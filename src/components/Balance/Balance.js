import React, { PropTypes } from 'react'
import { formatMoney } from 'accounting'

export const Balance = ({ balance, balanceAdd }) => (
  <div className='mid-gray tracked-tight f1-ns f2 pa4-ns pa3'>
    {formatMoney(balance, '₩ ', 0)}
    <button className='fr' onClick={balanceAdd(500)}>
      Add 500
    </button>
  </div>
)

Balance.propTypes = {
  balance: PropTypes.number,
  balanceAdd: PropTypes.func
}

export default Balance
