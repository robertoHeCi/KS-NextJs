import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { category, id } = router.query

  return <p> Post: {category} {id}</p>
}

export default Post
