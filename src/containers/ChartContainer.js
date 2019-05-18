import ChartWrapper from '../components/Chart'

import SharedContainer from './SharedContainer'

const mapStateToProps = ({ drone }) => ({
  locations: drone.locations
})

export default SharedContainer(ChartWrapper, mapStateToProps)
