import { useState, useCallback } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import CartDrawer from './CartDrawer'

export default function Layout() {
  const [cartOpen, setCartOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  const toggleCart = useCallback(() => setCartOpen((v) => !v), [])
  const toggleSearch = useCallback(() => setSearchOpen((v) => !v), [])

  return (
    <div style={{minHeight: '100vh', background: '#fff'}}>
      <Navbar onCartOpen={toggleCart} onSearchOpen={toggleSearch} />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  )
}