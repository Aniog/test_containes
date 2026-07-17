import Navbar from './Navbar'
import Footer from './Footer'
import CartDrawer from '@/components/cart/CartDrawer'
import { Toaster } from 'sonner'

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-velmora-surface">
      <Navbar />
      <CartDrawer />
      <main className="flex-1">{children}</main>
      <Footer />
      <Toaster position="bottom-center" toastOptions={{ className: 'font-sans text-sm' }} />
    </div>
  )
}
