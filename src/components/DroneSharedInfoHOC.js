import React, { Component } from 'react'

import CardDisplayContent from './CardDisplayContent'

export default (ChildComponent, title) => {
  return class DroneSharedInfoHOC extends Component {
    componentDidMount () {
      console.log('Start to looking drone info...')
      this.props.fetchDroneLocations()
    }
    componentWillUnmount () {
      console.log('Stop to looking drone info...')
      this.props.leaveDroneInfo()
    }
    render () {
      return (
        <CardDisplayContent title={title}>
          <ChildComponent {...this.props} />
        </CardDisplayContent>
      )
    }
  }
}
