import { Outlet } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import CartDrawer from './components/cart/CartDrawer'
import Footer from './components/home/Footer'

export default function Layout() {
  return (
    <div className="min-h-screen bg-warm-cream font-sans">
      <Navbar />
      <CartDrawer />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
