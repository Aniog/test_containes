import { Outlet } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CartDrawer from './components/layout/CartDrawer'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans">
      <Navbar />
      <CartDrawer />
      <main className="flex-grow pt-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
