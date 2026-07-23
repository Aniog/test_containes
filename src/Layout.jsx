import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SiteHeader from '@/components/layout/SiteHeader.jsx'
import SiteFooter from '@/components/layout/SiteFooter.jsx'
import CartDrawer from '@/components/store/CartDrawer.jsx'
import { useCart } from '@/context/CartContext.jsx'
import usePreviewNavigation from '@/hooks/usePreviewNavigation.jsx'

const Layout = () => {
  const location = useLocation()
  const containerRef = useRef(null)
  const { isCartOpen, items } = useCart()

  usePreviewNavigation()

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const frameId = window.requestAnimationFrame(() => {
      const target = document.querySelector(location.hash)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname, location.search, location.hash])

  useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [location.pathname, location.search, location.hash, isCartOpen, items.length])

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-ivory text-velmora-ink">
      <SiteHeader />
      <Outlet />
      <SiteFooter />
      <CartDrawer />
    </div>
  )
}

export default Layout
