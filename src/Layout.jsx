import CartDrawer from '@/components/cart/CartDrawer'
import Footer from '@/components/layout/Footer'
import SiteHeader from '@/components/layout/SiteHeader'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-velmora-porcelain text-velmora-ink">
      <SiteHeader />
      {children}
      <Footer />
      <CartDrawer />
    </div>
  )
}
