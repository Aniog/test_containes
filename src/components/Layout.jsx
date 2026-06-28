import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import CartDrawer from '@/components/CartDrawer'
import SiteFooter from '@/components/SiteFooter'
import SiteHeader from '@/components/SiteHeader'
import strkImgConfig from '@/strk-img-config.json'

function Layout() {
  const location = useLocation()
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname, location.search, location.hash])

  return (
    <div ref={containerRef} className="min-h-screen bg-pearl text-ink">
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
      <CartDrawer />
    </div>
  )
}

export default Layout
