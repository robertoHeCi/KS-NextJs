import React from 'react'
import PropTypes from 'prop-types'

const Isg = ({ posts }) => {
  return (
    <div>
      <p>ISG page</p>
      {posts && posts.map(({ id, name }) => <p key={id}>{id}:{name}</p>)}
    </div>
  )
}

export async function getStaticProps () {
  const response = await fetch(`${process.env.BASE_URL}/api/hello`)
  const posts = await response.json()
  return {
    props: {
      posts
    },
    revalidate: 30
  }
}

export default Isg

Isg.propTypes = {
  posts: PropTypes.array
}
