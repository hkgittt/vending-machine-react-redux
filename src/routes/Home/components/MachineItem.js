import React, { PropTypes } from 'react'
import { formatMoney } from 'accounting'

const MachineItem = ({ item, onButtonPress }) => (
  <div className='h4'>
    <h1 className='f2 mid-gray avenir tracked-tight fw6'>
      {item.name}
    </h1>
    <hr />
    <div className='f4 mid-gray avenir cf mv1'>
      <div className='fl'>Price</div>
      <div className='fr'>{formatMoney(item.price, '₩', 0)}</div>
    </div>
    { item.size !== 'NA'
      ? <div className='f4 mid-gray avenir cf mv1'>
        <div className='fl'>Size</div>
        <div className='fr'>{item.size}</div>
      </div>
      : null
    }
    <div className='f4 mid-gray avenir cf mv1'>
      <div className='fl'>Quantity</div>
      <div className='fr'>{item.quantity}</div>
    </div>
    <button className='' disabled={!item.currentlyAffordable} onClick={onButtonPress(item.price)}>
      Get
    </button>
  </div>
)

MachineItem.propTypes = {
  item: PropTypes.object,
  onButtonPress: PropTypes.func
}

export default MachineItem
