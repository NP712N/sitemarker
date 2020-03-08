import React from 'react'

import './index.css'

const validatedForm = props => (
  <div className='ValidatedForm'>
    <img src={props.icon} alt='UserIcon' />
    <input
      autoFocus={props.focused ? true : false}
      type={props.type}
      placeholder={props.placeHolder}
      autoComplete={props.autocompleted}
    ></input>
  </div>
)
export default validatedForm
