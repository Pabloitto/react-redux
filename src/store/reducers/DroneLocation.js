const initialState = {
  locations: []
}

const droneLocation = (state = initialState, action) => {
  const newState = { ...state }
  switch (action.type) {
    case 'LOCATIONS_RESOLVED': {
      newState.locations = action.locations
      return newState
    }
    default:
      return state
  }
}

export default droneLocation
