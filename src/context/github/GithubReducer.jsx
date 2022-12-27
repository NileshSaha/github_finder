const githubReducer = (state, action) => {
  switch(action.type) {
    case 'INITIAL':
      return {
        ...state,
        userList: [],
        loading:false
      }
    case 'GET_USERS':
      return {
        ...state,
        userList:action.payload,
        loading:false,
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading:action.payload
      }
    case'GET_USER':
      return {
        ...state,
        user:action.payload,
        loading:false
      }
    case 'GET_USER_REPOS':
      return {
        ...state,
        repos:action.payload,
        loading:false
      }
    default:
      return state
  }
}

export default githubReducer