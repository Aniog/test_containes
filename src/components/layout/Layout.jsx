import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import CartDrawer from './CartDrawer'
import SearchDialog from './SearchDialog'
import { useCart } from '@/context/CartContext'

export default function Layout() {
  const { isCartOpen, isSearchOpen } = useCart()

  useEffect(() => {
    document.body.classList.toggle('drawer-open', isCartOpen || isSearchOpen)

    return () => {
      document.body.classList.remove('drawer-open')
    }
  }, [isCartOpen, isSearchOpen])

  return (
    <div className="app-shell">
      <Header />
      <main className="relative min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <SearchDialog />
    </div>
  )
}
