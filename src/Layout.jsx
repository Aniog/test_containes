import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import CartDrawer from '@/components/layout/CartDrawer.jsx'
import PreviewRouteBridge from '@/components/layout/PreviewRouteBridge.jsx'
import SearchDrawer from '@/components/layout/SearchDrawer.jsx'
import SiteFooter from '@/components/layout/SiteFooter.jsx'
import SiteHeader from '@/components/layout/SiteHeader.jsx'

const Layout = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <div className="min-h-screen bg-porcelain text-velvet">
      <PreviewRouteBridge />
      <SiteHeader onOpenSearch={() => setIsSearchOpen(true)} />
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
