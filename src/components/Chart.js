import React from 'react'

import { Chart } from 'react-google-charts'

import { getTodayInFormat, getLastNMinutes } from '../utils'

import DroneSharedInfoHOC from './DroneSharedInfoHOC'

const createChartData = (locations) => {
  const data = getLastNMinutes(locations)
  return [
    [
      { type: 'date', label: getTodayInFormat() },
      { type: 'number', label: 'temperature' }
    ],
    ...data
  ]
}

const chartOptions = {
  chart: { title: 'Drone Temperatures' },
  curveType: 'function',
  width: '100%',
  height: '400',
  legend: { position: 'none' }
}

const ChartContent = ({ locations = [] }) => {
  return (
    <Chart
      width='100%'
      height='500'
      chartType='LineChart'
      data={createChartData(locations)}
      options={chartOptions}
    />
  )
}

const ChartDroneTemperature = DroneSharedInfoHOC(ChartContent, 'Drone Graph Visualization')

export default ChartDroneTemperature
