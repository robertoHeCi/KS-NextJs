import React from 'react';
import { useRouter } from 'next/router'

const Book = () => {
  const router = useRouter()
  const { param } = router.query
  return(
    <>
      <h1>Params: {param?.join('/')}</h1>
      <h1>Params: {encodeURIComponent(param?.join('/'))}</h1>
    </>)
}
export default Book
