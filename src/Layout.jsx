import React from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-brand-ivory">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
