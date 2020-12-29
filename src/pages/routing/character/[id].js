import React from 'react'
import { useRouter } from 'next/router'

const Character = () => {
  const router = useRouter()
  const { id } = router.query

  return <p> Character: {id}</p>
}

export default Character
