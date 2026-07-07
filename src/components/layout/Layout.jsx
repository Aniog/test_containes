import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { CartDrawer } from './CartDrawer'
import { useImageLoader } from '@/hooks/useImageLoader'

export function Layout() {
  const location = useLocation()
  const containerRef = useImageLoader([location.pathname, location.search])

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col bg-velmora-cream">
      <Navbar />
      <CartDrawer />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
