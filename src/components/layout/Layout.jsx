import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer.jsx?velmora=20260707'
import SearchPanel from '@/components/layout/SearchPanel.jsx?velmora=20260707'

export default function Layout({ children }) {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-velmora-parchment text-velmora-noir">
      <Header onOpenSearch={() => setSearchOpen(true)} />
      <main>{children}</main>
      <Footer />
      <SearchPanel open={searchOpen} onClose={() => setSearchOpen(false)} />
      <CartDrawer />
    </div>
  )
}
