import React from 'react'
import PropTypes from 'prop-types'

const IsgDynamic = ({ posts }) => {
  return (
    <div>
      <p>ISG Dynamic page</p>
      {posts && posts.map(({ id, name }) => <p key={id}>{id}:{name}</p>)}
    </div>
  )
}

export async function getStaticPaths () {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } }
    ],
    fallback: false // Options: true/false/blocking
  }
}

export async function getStaticProps () {
  const response = await fetch(`${process.env.BASE_URL}/api/posts`)
  const posts = await response.json()
  return {
    props: {
      posts
    },
    revalidate: 30
  }
}

export default IsgDynamic

IsgDynamic.propTypes = {
  posts: PropTypes.array
}
