import React from 'react'
import PropTypes from 'prop-types'

const IsgBasic = ({ posts }) => {
  return (
    <div>
      <p>ISG Basic page</p>
      {posts && posts.id}
    </div>
  )
}

export async function getStaticProps () {
  const response = await fetch(`${process.env.BASE_URL_CMS}/v2/entries/type/navBar/search?language=fr-BE`)
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