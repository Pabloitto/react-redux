import React from 'react'

import Icon from '@material-ui/core/Icon'

import List from '@material-ui/core/List'

import ListItem from '@material-ui/core/ListItem'

import ListItemText from '@material-ui/core/ListItemText'

import { withStyles } from '@material-ui/core/styles'

import { Link } from 'react-router-dom'

const styles = theme => ({
  toolbar: theme.mixins.toolbar
})

const menu = [
  {
    icon: 'home',
    text: 'Home',
    to: 'home'
  },
  {
    icon: 'place',
    text: 'Map Visualization',
    to: 'map'
  },
  {
    icon: 'show_chart',
    text: 'Chart Visualization',
    to: 'chart'
  }
]

const CustomMenu = (props) => {
  const { classes } = props
  return (
    <div className={classes.toolbar}>
      <List>
        {menu.map(({
          text, icon, to
        }) => (
          <ListItem className='menu-item' component={(props) => <Link to={to} {...props} />} button key={text}>
            <Icon>{icon}</Icon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}

const Wrapper = props => {
  return <CustomMenu {...props} />
}

export default withStyles(styles, { withTheme: true })(Wrapper)
