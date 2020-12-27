import React from 'react';
import Link from "next/link";

const DataFetching = () => {

  return (
    <nav>
      <ul>
        <li><Link href="/data-fetching/server-side-rendering"><a> SSR</a></Link></li>
        <li><Link href="/data-fetching/incremental-static-generation"><a>ISG</a></Link></li>
        <li><Link href="/data-fetching/single-page-application"><a>SPA</a></Link></li>
        <li><Link href="/data-fetching/static-generation"><a>Static generation</a></Link></li>
      </ul>
    </nav>
  )

}

export default DataFetching
