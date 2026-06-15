import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Toaster } from 'sonner'

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  )
}

export default Layout
