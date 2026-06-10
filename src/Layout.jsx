import React from 'react'
import Navbar from './components/home/Navbar'
import Footer from './components/home/Footer'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
