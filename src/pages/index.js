import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import layoutStyles from '../styles/Layout.module.css'
import { CardLink } from '../components/CardLink'

export default function Routing () {
  const pages = [
    {
      title: 'Data fetching',
      route: '/data-fetching',
      description: 'In NextJS, there are tree forms to pre-rendering'
    },
    {
      title: 'Routing',
      route: '/routing',
      description: 'Different ways to use the Next router'
    }
  ]

  return (
    <div className={layoutStyles.container}>
      <Head>
        <meta name="description"> NextJS app with routing and data fetching examples</meta>
        <title>Create Next App</title>
        <link rel="icon" href="../../public/favicon.ico" />
      </Head>

      <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <p className={styles.description}>
          Get started by editing{' '}
        <code className={styles.code}>pages/index.js</code>
      </p>

      <div className={layoutStyles.grid}>

        {pages.map((page) => (
          <CardLink key={page.route}{...page}/>
        ))}

      </div>
    </div>
  )
}
