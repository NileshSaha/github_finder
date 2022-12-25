import React from 'react'
import { useContext } from 'react'
import User from './User'
import Spinner from '../layout/Spinner'
import GithubContext from '../../context/github/GithubContext'

function UserList() {
  const {userList, loading} = useContext(GithubContext)
  
  if (loading) {
    return <Spinner />
  }
  
  return (
    <>
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {userList.map((user) => {
          return <User user={user} key={user.id}/>
        })}
      </div>
    </>
  )
}

export default UserList