import React from 'react'
import Header from '../../components/Header'
import BalanceContainer from '../../containers/BalanceContainer'
import CartContainer from '../../containers/CartContainer'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div>
    <Header />
    <BalanceContainer />
    <div className='core-layout__viewport'>
      {children}
    </div>
    <CartContainer />
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
