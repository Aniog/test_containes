import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import CartDrawer from '@/components/layout/CartDrawer'

function PreviewRouteBridge() {
  const navigate = useNavigate()
  const location = useLocation()

  React.useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
      navigate(path, options)
    }

    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return null
}

export default function Layout() {
  return (
    <div className="min-h-screen bg-stone-100 text-stone-900">
      <PreviewRouteBridge />
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
      <CartDrawer />
    </div>
  )
}
