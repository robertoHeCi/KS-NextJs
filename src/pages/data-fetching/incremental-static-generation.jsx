import React from 'react';

const Isg = ({posts}) => {
  return (
    <div>
      <p>ISG page</p>
      {posts && posts.map(({id, name})=> <p key={id}>{id}:{name}</p>)}
    </div>
  )
}

export function getStaticPaths() {
  return {
    paths: {},
    fallback: 'unstable_blocking'
  }
}


export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/hello")
  const posts = await response.json()
  return {
    props: {
      posts
    },
    revalidate: 30
  }
}

export default Isg

