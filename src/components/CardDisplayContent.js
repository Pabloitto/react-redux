import React from 'react'

import Card from '@material-ui/core/Card'

import CardHeaderRaw from '@material-ui/core/CardHeader'

import CardContent from '@material-ui/core/CardContent'

import { withStyles } from '@material-ui/core/styles'

const styles = {
  card: {
    margin: '10px 30px 0px 10px'
  }
}

const cardStyles = theme => ({
  root: {
    background: theme.palette.primary.main
  },
  title: {
    color: 'white'
  }
})

const CardHeader = withStyles(cardStyles)(CardHeaderRaw)

const CardDisplayContent = ({
  children,
  title,
  classes
}) => {
  return (
    <div className='display-content'>
      <Card className={classes.card}>
        <CardHeader title={title} />
        <CardContent>
          <div style={{ height: '400px' }}>
            {children}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default withStyles(styles)(CardDisplayContent)
