import { useEffect, useRef, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import CartDrawer from './components/layout/CartDrawer.jsx'
import SearchDrawer from './components/layout/SearchDrawer.jsx'
import SiteFooter from './components/layout/SiteFooter.jsx'
import SiteHeader from './components/layout/SiteHeader.jsx'
import strkImgConfig from './strk-img-config.json'

function Layout() {
  const appRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (to, options = {}) => {
      navigate(to, options)
    }

    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  useEffect(() => {
    let cancelled = false
    let cleanup = null

    const frameId = window.requestAnimationFrame(() => {
      if (!appRef.current) {
        return
      }

      import('@strikingly/sdk')
        .then(({ ImageHelper }) => {
          if (cancelled || !appRef.current || typeof ImageHelper?.loadImages !== 'function') {
            return
          }

          const maybeCleanup = ImageHelper.loadImages(strkImgConfig, appRef.current)
          cleanup = typeof maybeCleanup === 'function' ? maybeCleanup : null
        })
        .catch((error) => {
          console.error('Velmora image hydration skipped', error)
        })
    })

    return () => {
      cancelled = true
      window.cancelAnimationFrame(frameId)

      if (typeof cleanup === 'function') {
        cleanup()
      }
    }
  }, [location.pathname])

  useEffect(() => {
    setIsSearchOpen(false)
    setIsCartOpen(false)
  }, [location.pathname])

  return (
    <div ref={appRef} className="min-h-screen bg-velmora-pearl text-velmora-ink">
      <SiteHeader
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />
      <SearchDrawer open={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}

export default Layout
