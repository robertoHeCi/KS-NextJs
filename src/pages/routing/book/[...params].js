import React from 'react'
import { useRouter } from 'next/router'

const Book = () => {
  const router = useRouter()
  const { params } = router.query
  return (
    <>
      <h1>Params: {params?.join('/')}</h1>
      <h1>Params: {encodeURIComponent(params?.join('/'))}</h1>
    </>)
}
export default Book
