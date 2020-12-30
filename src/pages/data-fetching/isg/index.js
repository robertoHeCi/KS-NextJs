import React from 'react'
import PropTypes from 'prop-types'

const IsgBasic = ({ posts }) => {
  return (
    <div>
      <p>ISG Basic page</p>
      {posts && posts.url}
      {posts && posts.slug}
    </div>
  )
}

export async function getStaticProps () {
  const response = await fetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
  const posts = await response.json()
  return {
    props: {
      posts
    },
    revalidate: 30
  }
}

export default IsgBasic

IsgBasic.propTypes = {
  posts: PropTypes.object
}
