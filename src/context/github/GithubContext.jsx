import { createContext, useState } from "react";

const GithubContext = createContext()
const GITHUB_URL = `${process.env.REACT_APP_GITHUB_URL}`
const GITHUB_TOKEN = `${process.env.REACT_APP_GITHUB_TOKEN}`

export const GithubProvider = ({children}) => {
  const [userList, setUserList] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchUsers = async () => {
    setLoading(true)
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization:`token ${GITHUB_TOKEN}`
      }
    })
    const data = await response.json()
    setUserList(data)
    setLoading(false)
  }

  return (
    <GithubContext.Provider
      value={{
        userList,
        loading,
        fetchUsers
      }}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext