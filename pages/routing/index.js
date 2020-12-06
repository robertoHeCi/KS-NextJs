import Link from 'next/link'

const IndexRouting = () => {
  return (
    <div>
      <Link href={"/routing/post/2/1"} >
        <a> Post Link </a>
      </Link>
    </div>
  )
}
export default IndexRouting
