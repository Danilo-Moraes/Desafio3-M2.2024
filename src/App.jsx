import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { GlobalStyle } from './components/styled'

export default function App() {
  return (
    <>
    <GlobalStyle/>
    <Header/>
    <Main/>
    <Footer/>
    </>
  )
}
