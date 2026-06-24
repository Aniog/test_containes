import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './microcosmos/Navbar'
import Footer from './microcosmos/Footer'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <div className="min-h-screen bg-parchment text-charcoal">
      <Navbar />
      <main className="pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
