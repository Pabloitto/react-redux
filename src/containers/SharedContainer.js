import { bindActionCreators } from 'redux'

import { connect } from 'react-redux'

const fetchDroneLocations = () => ({
  type: 'FETCH_DRONE_LOCATIONS'
})

const leaveDroneInfo = () => ({
  type: 'LEAVE_DRONE_INFO'
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchDroneLocations,
  leaveDroneInfo
}, dispatch)

const SharedContainer = (ChildComponent, mapStateToProps) => {
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(ChildComponent)
}

export default SharedContainer
