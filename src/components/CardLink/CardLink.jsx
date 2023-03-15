import React from 'react'
import Link from 'next/link'
import cardStyles from '../../styles/Card.module.css'
import PropTypes from 'prop-types'

const CardLink = ({ title = '', route = '/', description = '' }) => {
  return (
    <Link key={route} href={route} className={cardStyles.card}>
      <h3>{title} &rarr;</h3>
      <p>{description}</p>
    </Link>
  )
}

CardLink.propTypes = {
  title: PropTypes.string,
  route: PropTypes.string,
  description: PropTypes.string
}

export default CardLink
