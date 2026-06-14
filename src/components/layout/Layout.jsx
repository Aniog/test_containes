import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { PAGE_SEO, SITE } from '@/lib/seo'

const Layout = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [location.pathname])

  useEffect(() => {
    const key = location.pathname.startsWith('/') ? location.pathname.slice(1).split('/')[0] || 'home' : 'home'
    const seo = PAGE_SEO[key] || { title: SITE.defaultTitle, description: SITE.description }
    document.title = seo.title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', seo.description)
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
