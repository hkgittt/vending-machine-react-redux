import { connect } from 'react-redux'
import Machine from '../components/Machine'
import { getItemsWithAffordability } from '../selectors/machineSelector'
import { balanceSubtract } from '../../../modules/balanceReducer'

const mapStateToProps = state => (
  {
    items: getItemsWithAffordability(state)
  }
)

const mapDispatchToProps = dispatch => (
  {
    onItemPress: amount => () => dispatch(balanceSubtract(amount))
  }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Machine)
