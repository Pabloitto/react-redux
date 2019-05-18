import { take, put, fork, cancel } from 'redux-saga/effects'

import { findDroneLocation } from '../api/findDroneLocation'

const sleep = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time)
  })
}

function * onDroneResolved () {
  while (true) {
    console.log('Looking for drone locations...')
    const locations = yield findDroneLocation()
    yield put({
      type: 'LOCATIONS_RESOLVED',
      locations
    })
    yield sleep(3000)
  }
}

function * watchDroneLocation () {
  while (yield take('FETCH_DRONE_LOCATIONS')) {
    const bgSyncTask = yield fork(onDroneResolved)
    yield take('LEAVE_DRONE_INFO')
    yield cancel(bgSyncTask)
  }
}

export default [watchDroneLocation]
