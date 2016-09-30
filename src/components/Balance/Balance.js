import React, { PropTypes } from 'react'
import { formatMoney } from 'accounting'
import { Motion, spring } from 'react-motion'

export const Balance = ({ balance, balanceAdd }) => (
  <div className='mid-gray tracked-tight f1-ns f2 pa4-ns pa3'>
    <button className='fr' onClick={balanceAdd(500)}>
      Add 500
    </button>
    <Motion className='fl' defaultStyle={{ x: 0 }} style={{ x: spring(balance, { stiffneess: 210, damping: 30 }) }}>
      {
        val => <div key='balance'><span>₩ </span>{formatMoney(val.x, '', 0)}</div>
      }
    </Motion>

  </div>
)

Balance.propTypes = {
  balance: PropTypes.number,
  balanceAdd: PropTypes.func
}

export default Balance
