import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Navbar from '@/components/storefront/Navbar'
import Footer from '@/components/storefront/Footer'
import CartDrawer from '@/components/storefront/CartDrawer'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function Layout() {
  const location = useLocation()
  const navigate = useNavigate()
  const containerRef = useStrkImages([location.pathname, location.search])

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options) => navigate(path, options)

    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-sand text-velmora-ink">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
