import React from 'react'
import PropTypes from 'prop-types'
function RepoItem({repo: {name}}) {
  return (
    <div>{name}</div>
  )
}

RepoItem.propTypes = {
  repo: PropTypes.object
}



export default RepoItem