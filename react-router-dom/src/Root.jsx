import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Componants/Header/Header.jsx'
import Footer from './Componants/Footer/Footer.jsx'


function Root() {
  return (
    <>
    <Header />
    <Outlet/>
    <Footer />
    </>

  )
}

export default Root