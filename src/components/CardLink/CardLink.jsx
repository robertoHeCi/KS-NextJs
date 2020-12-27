import React from 'react';
import Link from "next/link";
import cardStyles from "../../styles/Card.module.css";


export const CardLink = ({title = '', route = '/', description= ''}) => {
  return (
    <Link key={route} href={route}>
      <a className={cardStyles.card}>
        <h3>{title} &rarr;</h3>
        <p>{description}</p>
      </a>
    </Link>
  )
}
