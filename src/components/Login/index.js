import React from 'react'
import ValidatedForm from '../ValidatedForm'
import './index.css'
import AccountIcon from '../../assets/icons/account.png'
import PasswordIcon from '../../assets/icons/password.png'

const login = props => (
  <div className='input-f'>
    <form className='Login'>
      <ValidatedForm
        icon={AccountIcon}
        focused='true'
        placeHolder='User name or email'
        type='text'
        autocompleted='username'
      />
      <ValidatedForm
        type='password'
        icon={PasswordIcon}
        placeHolder='Password'
        autocompleted='current-password'
      />
      <input className='btn' type='submit' value='Login'></input>
    </form>
  </div>
)
export default login
