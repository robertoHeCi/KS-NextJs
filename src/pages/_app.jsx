import { Container } from 'next/app'
import React from 'react'
import '../styles/globals.css'
import {Footer} from "../components/Footer";

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Component {...pageProps} />
      <Footer/>
    </Container>
  )


}

export default MyApp
