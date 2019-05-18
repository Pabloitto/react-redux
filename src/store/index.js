import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'
import weatherReducer from './reducers/Weather'
import droneReducer from './reducers/DroneLocation'

export default () => {
  const rootReducer = combineReducers({
    weather: weatherReducer,
    drone: droneReducer
  })

  const composeEnhancers = composeWithDevTools({})
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = applyMiddleware(sagaMiddleware)
  const store = createStore(rootReducer, composeEnhancers(middlewares))

  sagas.forEach(sagaMiddleware.run)

  return store
}