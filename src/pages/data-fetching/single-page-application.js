import React from 'react'
import getConfig from 'next/config'

// Only holds serverRuntimeConfig and publicRuntimeConfig
const { publicRuntimeConfig } = getConfig()

const Spa = () => {
  const [posts, setPosts] = React.useState([])
  React.useEffect(() => {
    fetch(`${publicRuntimeConfig.BASE_URL}/api/hello`)
      .then(response => response.json())
      .then(setPosts)
  }, [])

  return (
    <div>
      <h1>Spa</h1>
      {posts &&
      <div>
        { posts.map(({ id, name }) => <p key={id}>{id}:{name}</p>)}
      </div>
      }
    </div>)
}

export default Spa
