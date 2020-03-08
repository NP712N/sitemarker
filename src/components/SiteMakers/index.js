import React from 'react'
import SiteMaker from './SiteMaker'
import './index.css'

const siteMakers = props => (
  <ul className='ListMakers'>
    {props.listmarker.map((marker, key) =>
      marker.foldername !== undefined ? (
        <div className='Folder' key={key}>
          <h3>{marker.foldername}</h3>
          {marker.list.map((markerchildren, keychildren) => (
            <SiteMaker marker={markerchildren} key={keychildren} />
          ))}
        </div>
      ) : (
        <SiteMaker key={key} marker={marker} />
      )
    )}
  </ul>
)
export default siteMakers
