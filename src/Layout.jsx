import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Layout = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])

  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink font-sans">
      <Navbar />
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
