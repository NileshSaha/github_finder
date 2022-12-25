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
    default:
      return state
  }
}

export default githubReducer