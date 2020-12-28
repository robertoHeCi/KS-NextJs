// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const posts = [
  {
    id: 1,
    name: 'Nextjs is awesome 2'
  },
  {
    id: 2,
    name: 'Using TypeScript with Nextjs'
  },
  {
    id: 3,
    name: 'GraphQL Vs REST'
  },
  {
    id: 4,
    name: 'Bridging in React Native'
  }
]

export default async (req, res) => {
  res.json(posts)
}

// Real request calling an api endpoint
// export default async (req, res) => {
//   const response = await fetch("http://localhost:9000/api/v1/phones")
//   res.statusCode = response.status
//   res.json(response.body)
// }
