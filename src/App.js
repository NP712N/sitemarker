import React, { Component } from 'react'
import Layout from './hoc/Layout'
import Login from './components/Login'
import { Route, Switch } from 'react-router-dom'
import SiteMarker from './containers/siteMakers'

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path='/' exact>
            <SiteMarker />
          </Route>
          <Route path='/login' component={Login}></Route>
        </Switch>
      </Layout>
    )
  }
}
export default App
