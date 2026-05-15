import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

export default function Layout() {
  const location = useLocation()
  console.log('Layout render, path:', location.pathname)

  return (
    <div className="min-h-screen flex flex-col bg-white text-brand-dark">
      <Navbar />
      <main className="flex-1 pt-[88px] md:pt-[112px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
