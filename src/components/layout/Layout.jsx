import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { CartDrawer } from '../ui/CartDrawer'
import { useCart } from '@/context/CartContext'

export function Layout({ children }) {
  const { pathname } = useLocation()
  const { closeCart } = useCart()

  useEffect(() => {
    closeCart()
  }, [pathname, closeCart])

  return (
    <div className="flex min-h-screen flex-col bg-velmora-light">
      <Navbar />
      <CartDrawer />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
