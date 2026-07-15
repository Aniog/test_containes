import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import CartDrawer from './CartDrawer'

const Layout = ({ children }) => {
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(false)
    const timer = setTimeout(() => setVisible(true), 50)
    window.scrollTo({ top: 0 })
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <>
      <Navbar />
      <CartDrawer />
      <main className={`transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
