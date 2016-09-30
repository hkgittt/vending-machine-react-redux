import React, { PropTypes } from 'react'
import MachineItem from './MachineItem'

const Machine = ({ items, onItemPress }) => (
  <div className='bt b--silver'>
    { items.map(
        item =>
          <div key={item.name} className='fl w-100 w-third-ns pa4-ns pa3 bg-washed-yellow h5'>
            <MachineItem onButtonPress={onItemPress} item={item} />
          </div>
    )}
  </div>
)

Machine.propTypes = {
  items: PropTypes.array,
  onItemPress: PropTypes.func
}

export default Machine
