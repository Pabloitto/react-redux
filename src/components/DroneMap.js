import React from 'react'

import { GoogleApiWrapper, Map, Marker } from 'google-maps-react'

import DroneSharedInfoHOC from './DroneSharedInfoHOC'

export const DroneMap = ({
  lat, lon, google
}) => {
  const position = { lat: lat, lng: lon }
  return (
    <div style={{ height: '400px' }}>
      <Map
        google={google}
        className='map'
        center={position}
        zoom={14}>
        <Marker position={position}
          title='Drone'
        />
      </Map>
    </div>
  )
}

const DroneMapWrapper = DroneSharedInfoHOC(DroneMap, 'Drone Map Visualization')

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(DroneMapWrapper)
