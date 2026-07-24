import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useCart } from '@/context/CartContext.jsx'
import CartDrawer from './components/cart/CartDrawer.jsx'
import SearchDrawer from './components/search/SearchDrawer.jsx'
import SiteFooter from './components/layout/SiteFooter.jsx'
import SiteHeader from './components/layout/SiteHeader.jsx'
import strkImgConfig from './strk-img-config.json'

export default function Layout() {
  const appRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()
  const { items, isCartOpen } = useCart()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [query, setQuery] = useState('')

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
    setQuery('')
  }, [location.pathname])

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const frameId = window.requestAnimationFrame(() => {
      const target = document.getElementById(location.hash.replace('#', ''))
      if (!target) return
      const top = target.getBoundingClientRect().top + window.scrollY - 104
      window.scrollTo({ top, behavior: 'smooth' })
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname, location.hash])

  useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, appRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [location.pathname, location.search, location.hash, isSearchOpen, query, isCartOpen, items])

  return (
    <div ref={appRef} className="min-h-screen bg-velmora-ivory text-velmora-espresso">
      <SiteHeader onOpenSearch={() => setIsSearchOpen(true)} />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
      <CartDrawer />
      <SearchDrawer
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        query={query}
        onQueryChange={setQuery}
      />
    </div>
  )
}
