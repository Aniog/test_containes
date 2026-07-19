import { useState, useEffect } from 'react'
import Navbar from '@/components/nav/Navbar'
import Footer from '@/components/home/Footer'
import CartDrawer from '@/components/cart/CartDrawer'

export default function Layout({ children }) {
  const [cartOpen, setCartOpen] = useState(false)

  useEffect(() => {
    if (cartOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [cartOpen])

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <Navbar
        onCartClick={() => setCartOpen(true)}
        onSearchClick={() => {}}
      />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  )
}
