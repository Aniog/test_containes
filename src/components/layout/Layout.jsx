import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { CartDrawer } from './CartDrawer'

export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <CartDrawer />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  )
}