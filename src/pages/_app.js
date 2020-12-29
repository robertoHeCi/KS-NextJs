import React from 'react'
import '../styles/globals.css'
import layoutStyles from '../styles/Layout.module.css'
import { Footer } from '../components/Footer'

// eslint-disable-next-line react/prop-types
function MyApp ({ Component, pageProps }) {
  return (
    <main className={layoutStyles.main}>
      <Component {...pageProps} />
      <Footer/>
    </main>
  )
}

export default MyApp
