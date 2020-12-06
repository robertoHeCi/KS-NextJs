import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { example, id } = router.query

  return <p> Post: {example} {id}</p>
}

export default Post
