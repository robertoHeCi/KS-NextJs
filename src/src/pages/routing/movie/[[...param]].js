import React from 'react';
import { useRouter } from 'next/router'

const Movie = () => {
  const router = useRouter()
  const { param } = router.query
  return(
    <>
      <h1>Params: {param?.join('/')}</h1>
    </>)
}
export default Movie
