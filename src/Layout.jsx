import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import CartDrawer from '@/components/storefront/CartDrawer.jsx'
import SiteFooter from '@/components/storefront/SiteFooter.jsx'
import SiteHeader from '@/components/storefront/SiteHeader.jsx'

const scrollToHash = (hash) => {
  if (!hash) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }

  const id = hash.replace('#', '')
  window.requestAnimationFrame(() => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}

export default function Layout() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
      navigate(path, options)
    }

    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  useEffect(() => {
    scrollToHash(location.hash)
  }, [location.hash, location.pathname])

  return (
    <div className="min-h-screen bg-velmora-ivory text-velmora-ink">
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
      <CartDrawer />
    </div>
  )
}
