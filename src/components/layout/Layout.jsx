import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import CartDrawer from '@/components/ui/CartDrawer'
import { Toaster } from 'sonner'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#F5F2ED] text-[#1A1816]">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <CartDrawer />
      <Toaster position="top-center" richColors closeButton />
    </div>
  )
}
