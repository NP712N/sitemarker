import React from 'react'
import './index.css'
import NavigationItems from '../NavigationItems'

const toolbar = prop => (
  <header className='Toolbar'>
    <nav>
      <h4>Site Marker</h4>
      <NavigationItems />
    </nav>
  </header>
)
export default toolbar
