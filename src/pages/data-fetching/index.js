import React from 'react'
import { CardLink } from '../../components/CardLink'
import styles from '../../styles/Layout.module.css'

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
    }
  ]

  return (
    <section className={styles.grid}>
      {pages.map(page => <CardLink key={page.route} {...page}/>)}
    </section>
  )
}

export default DataFetching
