import { Outlet } from 'react-router-dom'
import Footer from '@/components/velmora/Footer'
import NavBar from '@/components/velmora/NavBar'

export default function Layout({ cartCount, onCartOpen }) {
  return (
    <div className="min-h-screen bg-velmora-parchment text-velmora-espresso">
      <NavBar cartCount={cartCount} onCartOpen={onCartOpen} />
      <Outlet />
      <Footer />
    </div>
  )
}
