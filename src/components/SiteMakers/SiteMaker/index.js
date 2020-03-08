import React from 'react'
import './index.css'

const goToWebSite = link => {
  return () => window.open('http://www.' + link)
}

const siteMaker = props => (
  <div className='SiteMaker' onClick={goToWebSite(props.marker.link)}>
    <img
      src='https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.15752-9/89209560_278926843076718_3416930097838424064_n.jpg?_nc_cat=103&_nc_sid=b96e70&_nc_ohc=kUHBPKT0jV0AX8Wr6ur&_nc_ht=scontent.fsgn4-1.fna&oh=75564bf8680228cb7a4b8a3001e02acb&oe=5E8F897E'
      alt={props.name}
    />
    <div className='Detail'>
      <h2>{props.marker.title}</h2>
      <h5>{props.marker.link}</h5>
      <p>{props.marker.description}</p>
    </div>
  </div>
)
export default siteMaker
