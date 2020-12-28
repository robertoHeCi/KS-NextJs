import React from 'react'
import { CardLink } from '../../components/CardLink'

const DataFetching = () => {
  const pages = [
    {
      title: 'SSR',
      route: '/data-fetching/server-side-rendering',
      description: 'Server side rendering example'
    },
    {
      title: 'ISG',
      route: '/data-fetching/incremental-static-generation',
      description: 'Incremental static generation'
    },
    {
      title: 'SPA',
      route: '/data-fetching/single-page-application',
      description: 'Single Page application example'
    },
    {
      title: '',
      route: '/data-fetching/static-generation',
      description: 'Static generation example'
    }
  ]

  return (
    <nav>
      <ul>
        {pages.map(page => <li key={page.route}> <CardLink {...page}/></li>)}
      </ul>
    </nav>
  )
}

export default DataFetching
