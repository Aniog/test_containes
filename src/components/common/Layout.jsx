import { Outlet } from 'react-router-dom'
import CartDrawer from './CartDrawer.jsx'
import Footer from './Footer.jsx'
import NavBar from './NavBar.jsx'

export default function Layout() {
  return (
    <div className="min-h-screen bg-velmora-cream text-velmora-ink">
      <NavBar />
      <Outlet />
      <Footer />
      <CartDrawer />
    </div>
  )
}
