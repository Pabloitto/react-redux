import moment from 'moment'

export const getLastNMinutes = (data, minutes = 30) => {
  return data.reduce((acc, {
    metric, timestamp
  }) => {
    const todayTime = moment()
    const startTime = todayTime.clone().add(-minutes, 'minutes')
    const metricTime = moment(timestamp)
    if (metricTime.valueOf() >= startTime.valueOf() && metricTime.valueOf() <= todayTime.valueOf()) {
      acc.push([metricTime.toDate(), metric])
    }
    return acc
  }, [])
}

export const getTodayInFormat = (format = 'MMMM DD, YYYY') => {
  return moment().format(format)
}
