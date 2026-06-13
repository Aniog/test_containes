import { Toaster } from 'sonner'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import SiteFooter from './components/shared/SiteFooter.jsx'
import SiteHeader from './components/shared/SiteHeader.jsx'
import SeoUpdater from './components/shared/SeoUpdater.jsx'
import { useStrkImages } from './hooks/useStrkImages.js'

const ScrollToTop = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname])

  return null
}

const PreviewRouteBridge = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
      navigate(path, options)
    }

    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  return null
}

const Layout = () => {
  const containerRef = useStrkImages()

  return (
    <div ref={containerRef} className="min-h-screen bg-surface-canvas text-brand-navy">
      <SeoUpdater />
      <ScrollToTop />
      <PreviewRouteBridge />
      <SiteHeader />
      <Outlet />
      <SiteFooter />
      <Toaster position="top-right" richColors />
    </div>
  )
}

export default Layout
