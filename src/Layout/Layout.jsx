import React from 'react'
import Header from '../components/Home/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Home/Footer'

const Layout = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout