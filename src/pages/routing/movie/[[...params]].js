import React from 'react'
import { useRouter } from 'next/router'

const Movie = () => {
  const router = useRouter()
  const { params } = router.query
  return (
    <>
      <h1>Params: {params?.join('/')}</h1>
    </>)
}
export default Movie
