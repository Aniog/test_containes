import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/cart/CartDrawer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-velmora-ivory text-velmora-ink">
      <Header />
      {children}
      <Footer />
      <CartDrawer />
    </div>
  )
}
