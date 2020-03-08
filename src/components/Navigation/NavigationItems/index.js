import React from 'react'
import './index.css'
import NavigationItem from './NavigationItem'

const navigationItems = props => (
  <ul className='NavigationItems'>
    <NavigationItem link='/sitemarker'>Home</NavigationItem>
    <NavigationItem link='/login'>Login</NavigationItem>
  </ul>
)
export default navigationItems
