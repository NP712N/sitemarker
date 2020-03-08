import React, { Component } from 'react'
import SiteMakers from '../../components/SiteMakers'
import { connect } from 'react-redux'

class SiteMarker extends Component {
  render() {
    return <SiteMakers listmarker={this.props.listmarker} />
  }
}

const mapStateToProps = state => {
  return {
    useraccount: state.account.username,
    userpassword: state.account.password,
    listmarker: state.account.markers
  }
}

export default connect(mapStateToProps)(SiteMarker)
