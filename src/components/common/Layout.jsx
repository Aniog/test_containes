import { Outlet, useLocation } from 'react-router-dom'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import CartDrawer from '@/components/common/CartDrawer'
import SearchPanel from '@/components/common/SearchPanel'
import { useStore } from '@/context/StoreContext'
import { useStrkImages } from '@/hooks/useStrkImages'

const Layout = () => {
  const location = useLocation()
  const { cartItems, cartOpen, mobileNavOpen, searchOpen } = useStore()
  const containerRef = useStrkImages([
    location.pathname,
    location.search,
    location.hash,
    cartItems.length,
    cartOpen,
    searchOpen,
    mobileNavOpen,
  ])

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-ivory text-velmora-ink">
      <Header />
      <CartDrawer />
      <SearchPanel />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
