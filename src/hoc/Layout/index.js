import React, { Component } from 'react'
import Aux from '../Auxiliary'
import './index.css'
import Toolbar from '../../components/Navigation/Toolbar'

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Toolbar />
        <main>{this.props.children}</main>
      </Aux>
    )
  }
}
export default Layout
