const githubReducer = (state, action) => {
  switch(action.type) {
    case 'INITIAL':
      return {
        ...state,
        users: [],
        loading:false
      }
    case 'GET_USERS':
      return {
        ...state,
        users:action.payload,
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
    default:
      return state
  }
}

export default githubReducer