import React from 'react'
import { CardLink } from '../../components/CardLink'
import layoutStyle from '../../styles/Layout.module.css'
const DataFetching = () => {
  const pages = [
    {
      title: 'Book with params',
      route: '/routing/book',
      description: 'Server side rendering example'
    },
    {
      title: 'Movie Root',
      route: '/routing/movie',
      description: 'Movie Index route'
    },
    {
      title: 'Movie with params',
      route: '/routing/movie/1/2',
      description: 'Movie Index route'
    },
    {
      title: 'Post',
      route: '/routing/post/2/1',
      description: 'Post route using a folder as a category and dynamic route '
    },
    {
      title: 'Character',
      route: '/routing/character/1',
      description: 'Character dinamyc route'
    }
  ]

  return (
    <section className={layoutStyle.grid}>
      {pages.map(page => (
        <CardLink key={page.route} {...page}/>
      ))}
    </section>
  )
}

export default DataFetching
