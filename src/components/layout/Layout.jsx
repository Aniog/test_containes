import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, cartItemsCount, onSearchChange, searchQuery }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header 
        cartItemsCount={cartItemsCount}
        onSearchChange={onSearchChange}
        searchQuery={searchQuery}
      />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout