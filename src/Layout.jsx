import React from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'
import ScrollToTop from '@/components/layout/ScrollToTop'
import { Toaster } from '@/components/ui/sonner'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <CartDrawer />
      <ScrollToTop />
      <Toaster position="top-right" richColors />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
