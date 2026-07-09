import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import CartDrawer from '@/components/layout/CartDrawer.jsx'
import PreviewRouteBridge from '@/components/layout/PreviewRouteBridge.jsx'
import SearchDrawer from '@/components/layout/SearchDrawer.jsx'
import SiteFooter from '@/components/layout/SiteFooter.jsx'
import SiteHeader from '@/components/layout/SiteHeader.jsx'
import { useCart } from '@/context/CartContext.jsx'

const Layout = () => {
  const location = useLocation()
  const { closeCart, isOpen: isCartOpen } = useCart()
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    setIsSearchOpen(false)
  }, [location.pathname, location.search, location.hash])

  useEffect(() => {
    if (isCartOpen) {
      setIsSearchOpen(false)
    }
  }, [isCartOpen])

  const handleOpenSearch = () => {
    closeCart()
    setIsSearchOpen(true)
  }

  return (
    <div className="min-h-screen bg-porcelain text-velvet">
      <PreviewRouteBridge />
      <SiteHeader onOpenSearch={handleOpenSearch} />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <SiteFooter />
      <SearchDrawer
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
      <CartDrawer />
    </div>
  )
}

export default Layout
