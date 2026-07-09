import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import CartDrawer from './CartDrawer'
import { Toaster } from 'sonner'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <CartDrawer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#1A1613',
            color: '#FAF6F1',
            border: 'none',
            fontSize: '13px',
          },
        }}
      />
    </div>
  )
}
