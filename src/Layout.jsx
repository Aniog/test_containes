import { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import CartDrawer from './components/storefront/CartDrawer'
import SearchDialog from './components/storefront/SearchDialog'
import SiteFooter from './components/storefront/SiteFooter'
import SiteHeader from './components/storefront/SiteHeader'
import { useCart } from './context/CartContext'

function Layout() {
  const location = useLocation()
  const navigate = useNavigate()
  const { isCartOpen } = useCart()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
      navigate(path, options)
    }

    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  useEffect(() => {
    setIsSearchOpen(false)
    setIsMobileMenuOpen(false)

    if (location.hash) {
      const frameId = window.requestAnimationFrame(() => {
        const target = document.getElementById(location.hash.replace('#', ''))
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })

      return () => window.cancelAnimationFrame(frameId)
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname, location.hash])

  useEffect(() => {
    const shouldLockScroll = isCartOpen || isSearchOpen || isMobileMenuOpen
    document.body.style.overflow = shouldLockScroll ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isCartOpen, isSearchOpen, isMobileMenuOpen])

  return (
    <div className="min-h-screen bg-ivory text-ink">
      <SiteHeader
        isMobileMenuOpen={isMobileMenuOpen}
        onSearchOpen={() => setIsSearchOpen(true)}
        onMobileMenuToggle={() => setIsMobileMenuOpen((current) => !current)}
        onMobileMenuClose={() => setIsMobileMenuOpen(false)}
      />
      <SearchDialog open={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <CartDrawer />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}

export default Layout
