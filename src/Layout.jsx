import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import AppHeader from '@/components/storefront/AppHeader'
import CartDrawer from '@/components/storefront/CartDrawer'
import SiteFooter from '@/components/storefront/SiteFooter'
import { useStrikinglyImages } from '@/hooks/useStrikinglyImages'

const Layout = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const containerRef = useStrikinglyImages([location.pathname, location.hash, location.search])

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
      navigate(path, options)
    }

    return () => {
      window.__STRIKINGLY_PREVIEW_NAVIGATE__ = undefined
    }
  }, [navigate])

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '')
      window.requestAnimationFrame(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
      })
      return
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.hash, location.pathname])

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-ivory text-velmora-ink">
      <AppHeader />
      <CartDrawer />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}

export default Layout
