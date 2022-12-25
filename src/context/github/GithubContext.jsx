import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()
const GITHUB_URL = `${process.env.REACT_APP_GITHUB_URL}`
const GITHUB_TOKEN = `${process.env.REACT_APP_GITHUB_TOKEN}`

export const GithubProvider = ({children}) => {
  const initialState = {
    users: [],
    loading:true
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  const fetchUsers = async () => {
    setLoading(true)
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization:`token ${GITHUB_TOKEN}`
      }
    })
    const data = await response.json()
    dispatch({
      type: 'GET_USERS',
      payload: data
    })
  }

  const setLoading = (loading) => dispatch({
    type:'SET_LOADING',
    payload: loading
  })

  return (
    <GithubContext.Provider
      value={{
        userList:state.users,
        loading:state.loading,
        fetchUsers
      }}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext