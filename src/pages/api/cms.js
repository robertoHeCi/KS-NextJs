// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import getConfig from 'next/config'
const { serverRuntimeConfig } = getConfig()

export default async (req, res) => {
  const requestConfig = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const response = await fetch(`${serverRuntimeConfig.BASE_URL_CMS}/v2/entries/type/navBar/search?language=fr-BE`, requestConfig)
  res.status(response.status)
  res.json(response.body)
}
