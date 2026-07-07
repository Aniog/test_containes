import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/cart/CartDrawer'
import { useStrkImages } from '@/lib/useStrkImages'

function Layout() {
  const location = useLocation()
  const containerRef = useRef(null)

  useStrkImages(containerRef, [location.pathname, location.search, location.hash])

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const targetId = location.hash.replace('#', '')
    const target = document.getElementById(targetId)
    if (target) {
      window.requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }, [location.hash, location.pathname])

  return (
    <div ref={containerRef} className="min-h-screen bg-stone-50 text-stone-900">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}

export default Layout
