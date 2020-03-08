import * as actionTypes from './action'
const initialState = {
  account: {
    username: 'admin',
    password: 'admin',
    markers: [
      {
        foldername: 'Relax',
        list: [
          {
            title: 'Focus',
            link: 'bit.ly/ChillwithMe',
            description: 'lofi hip hop radio - beats to relax/study to'
          },
          {
            title: 'My Profile',
            link: 'fb.com/ILMinionFV',
            description: 'Contact with me!!'
          }
        ]
      },
      {
        title: 'Linkedin',
        link: 'bit.ly/NPNProfile',
        description: 'Contact for more'
      }
    ]
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        account: {
          username: state.account.username,
          password: state.account.password
        }
      }
    default:
      return state
  }
}
export default reducer
