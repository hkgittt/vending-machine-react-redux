import { connect } from 'react-redux'
import Machine from '../components/Machine'
import { getItemsWithAffordability } from '../selectors/machineSelector'
import { balanceSubtract } from '../../../modules/balanceReducer'
import { quantitySubtract } from '../../../modules/machineReducer'
import { cartAdd } from '../../../modules/cartReducer'

const mapStateToProps = state => (
  {
    items: getItemsWithAffordability(state)
  }
)

const mapDispatchToProps = dispatch => (
  {
    onItemPress: (amount, itemName) => () => {
      dispatch(balanceSubtract(amount))
      dispatch(quantitySubtract(itemName))
      dispatch(cartAdd(itemName))
    }
  }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Machine)
