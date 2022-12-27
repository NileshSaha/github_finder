import { createContext, useReducer } from "react";
// import { redirect } from "react-router-dom";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()
// const GITHUB_URL = `${process.env.REACT_APP_GITHUB_URL}`
// const GITHUB_TOKEN = `${process.env.REACT_APP_GITHUB_TOKEN}`

export const GithubProvider = ({children}) => {
  const initialState = {
    userList: [],
    loading:false,
    repos: [],
    user: {}
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  // const fetchUsers = async () => {
  //   setLoading(true)
  //   const response = await fetch(`${GITHUB_URL}/users`, {
  //     headers: {
  //       Authorization:`token ${GITHUB_TOKEN}`
  //     }
  //   })
  //   const data = await response.json()
  //   dispatch({
  //     type: 'GET_USERS',
  //     payload: data
  //   })
  // }

  // const searchUsers = async (text) => {
  //   setLoading(true)
  //   const params = new URLSearchParams({
  //     q: text
  //   })
  //   const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
  //     headers: {
  //       Authorization:`token ${GITHUB_TOKEN}`
  //     }
  //   })
  //   const data = await response.json()
  //   dispatch({
  //     type: 'GET_USERS',
  //     payload: data.items
  //   })
  // }
  
  // const getUser = async (login) => {
  //   setLoading(true)
  //   const response = await fetch(`${GITHUB_URL}/users/${login}`, {
  //     headers: {
  //       Authorization:`token ${GITHUB_TOKEN}`
  //     }
  //   })
  //   if (response.status === 404) {
  //     return redirect("/notfound");
  //   } else {
  //     const data = await response.json()
      // dispatch({
      //   type: 'GET_USER',
      //   payload: data
      // })
  //   }
  // }

  // const getUserRepos = async (login) => {
  //   setLoading(true)
  //   const params = new URLSearchParams({
  //     q: 'created',
  //     per_page:10
  //   })
  //   const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
  //     headers: {
  //       Authorization:`token ${GITHUB_TOKEN}`
  //     }
  //   })
  //   const data = await response.json()
  //   dispatch({
  //     type: 'GET_USER_REPOS',
  //     payload: data
  //   })
  // }

  // const clearUsers = () => {
  //   dispatch({
  //     type:'INITIAL'
  //   })
  // }

  // const setLoading = (loading) => dispatch({
  //   type:'SET_LOADING',
  //   payload: loading
  // })

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext