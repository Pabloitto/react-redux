import WeatherSagas from './Weather'
import ApiErrors from './ApiErrors'
import DroneLocation from './DroneLocation'

export default [...ApiErrors, ...WeatherSagas, ...DroneLocation]
