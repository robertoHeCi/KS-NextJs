import React from 'react'
import PropTypes from 'prop-types'

const Ssr = ({ posts }) => {
  return (<div>
    <p>Ssr page</p>
    {posts && posts.map(({ id, name }) => <p key={id}>{id}:{name}</p>)}
  </div>)
}

export async function getServerSideProps () {
  const response = await fetch('http://localhost:3000/api/hello')
  const posts = await response.json()
  return {
    props: {
      posts
    }
  }
}

export default Ssr

Ssr.propTypes = {
  posts: PropTypes.array
}
