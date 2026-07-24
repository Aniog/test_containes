import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import CartDrawer from './CartDrawer'

const isHomeRoute = (pathname) => pathname === '/'

export default function AppShell() {
  const location = useLocation()
  const home = isHomeRoute(location.pathname)

  React.useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''))
      if (element) {
        window.requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
        return
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname, location.hash])

  return (
    <div className="min-h-screen bg-noir text-cream">
      <SiteHeader transparent={home} />
      <main className={`min-h-screen ${home ? '' : 'pt-[76px] md:pt-[84px]'}`}>
        <Outlet />
      </main>
      <SiteFooter />
      <CartDrawer />
    </div>
  )
}
