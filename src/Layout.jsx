import { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import CartDrawer from '@/components/layout/CartDrawer'
import SearchPanel from '@/components/layout/SearchPanel'
import SiteFooter from '@/components/layout/SiteFooter'
import SiteHeader from '@/components/layout/SiteHeader'

const Layout = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const previewNavigate = (to, options = {}) => {
      navigate(to, options)
    }

    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = previewNavigate

    return () => {
      if (window.__STRIKINGLY_PREVIEW_NAVIGATE__ === previewNavigate) {
        window.__STRIKINGLY_PREVIEW_NAVIGATE__ = undefined
      }
    }
  }, [navigate])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (location.hash) {
        const target = document.querySelector(location.hash)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }
      }

      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [location.hash, location.pathname])

  return (
    <div className="relative min-h-screen bg-velmora-pearl text-velmora-ink">
      <SiteHeader onOpenSearch={() => setIsSearchOpen(true)} />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
      <CartDrawer />
      <SearchPanel
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </div>
  )
}

export default Layout
