import React from 'react'
import createStore from './store'
import { Provider } from 'react-redux'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Wrapper from './components/Wrapper'
import AppMenu from './components/AppMenu'
import Main from './components/Main'
import Header from './components/Header'
import { ToastContainer } from 'react-toastify'

import { Switch, Router, Route } from 'react-router'

import { createHashHistory } from 'history'

import MapContainer from './containers/MapContainer'
import ChartContainer from './containers/ChartContainer'

const history = createHashHistory()

const store = createStore()
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: 'rgb(39,49,66)'
    },
    secondary: {
      main: 'rgb(197,208,222)'
    },
    background: {
      main: 'rgb(226,231,238)'
    }
  }
})

const App = props => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <Wrapper>
        <Header />
        <div className='layout-menu'>
          <Router history={history}>
            <AppMenu />
            <Switch>
              <Route path='/map' component={MapContainer} />
              <Route path='/chart' component={ChartContainer} />
              <Route path='/' component={Main} />
            </Switch>
          </Router>
        </div>
        <ToastContainer />
      </Wrapper>
    </Provider>
  </MuiThemeProvider>
)

export default App
