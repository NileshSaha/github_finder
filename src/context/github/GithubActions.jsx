const GITHUB_URL = `${process.env.REACT_APP_GITHUB_URL}`
const GITHUB_TOKEN = `${process.env.REACT_APP_GITHUB_TOKEN}`

export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text
  })
  const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    headers: {
      Authorization:`token ${GITHUB_TOKEN}`
    }
  })
  const {items} = await response.json()
  return items
}

export const getUser = async (login) => {
  const response = await fetch(`${GITHUB_URL}/users/${login}`, {
    headers: {
      Authorization:`token ${GITHUB_TOKEN}`
    }
  })
  if (response.status === 404) {
    return {status:false, data:{}}
  } else {
    const data = await response.json()
    return {status:true, data}
    // dispatch({
    //   type: 'GET_USER',
    //   payload: data
    // })
  }
}

export const getUserRepos = async (login) => {
  const params = new URLSearchParams({
    q: 'created',
    per_page:10
  })
  const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
    headers: {
      Authorization:`token ${GITHUB_TOKEN}`
    }
  })
  const data = await response.json()
  return data
  // dispatch({
  //   type: 'GET_USER_REPOS',
  //   payload: data
  // })
}