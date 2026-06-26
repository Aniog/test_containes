import React from 'react'
import Navbar from './components/home/Navbar.jsx'
import Footer from './components/home/Footer.jsx'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}