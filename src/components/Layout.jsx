import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CartDrawer from '@/components/CartDrawer'
import ImageLoader from '@/components/ImageLoader'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <ScrollToTop />
      <Navbar />
      <ImageLoader className="flex-1">{children}</ImageLoader>
      <Footer />
      <CartDrawer />
    </div>
  )
}
