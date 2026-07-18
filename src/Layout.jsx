import { Outlet } from 'react-router-dom'
import CartDrawer from './components/layout/CartDrawer.jsx'
import Footer from './components/layout/Footer.jsx?velmora=2'
import Navbar from './components/layout/Navbar.jsx'

function Layout() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <Navbar />
      <main className="overflow-hidden">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}

export default Layout
