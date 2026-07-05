import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import CartDrawer from './CartDrawer'
import { Toaster } from '@/components/ui/sonner'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-velmora-cream">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#1c1917',
            color: '#f7f3ed',
            border: '1px solid #3e3630',
          },
        }}
      />
    </div>
  )
}
