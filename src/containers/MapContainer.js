import SharedContainer from './SharedContainer'

import DroneMap from '../components/DroneMap'

const mapStateToProps = ({
  drone
}) => {
  const { locations } = drone
  const len = locations.length
  const lastLocation = locations[len - 1]
  if (!lastLocation) {
    return {}
  }
  return {
    lat: lastLocation.latitude,
    lon: lastLocation.longitude
  }
}

export default SharedContainer(DroneMap, mapStateToProps)
