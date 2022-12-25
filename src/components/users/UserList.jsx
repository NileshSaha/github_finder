import React from 'react'
import { useEffect, useState } from 'react'
import User from './User'
import Spinner from '../layout/Spinner'

function UserList() {
  const [userList, setUserList] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
   fetchUsers()
  }, [])

  const fetchUsers = async () => {
    setLoading(true)
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization:`token ${process.env.REACT_APP_GITHUB_TOKEN}`
      }
    })
    const data = await response.json()
    setUserList(data)
    setLoading(false)
  }

  if (loading) {
    return <Spinner />
  }
  
  return (
    <>
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {userList.map((user) => {
          return <User user={user}/>
        })}
      </div>
    </>
  )
}

export default UserList