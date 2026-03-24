import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, onNavigate, currentPage }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header onNavigate={onNavigate} currentPage={currentPage} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout