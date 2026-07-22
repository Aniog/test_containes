import CartDrawer from '@/components/layout/CartDrawer.jsx'
import Header from '@/components/layout/Header.jsx'
import Footer from '@/components/layout/Footer.jsx'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-velmora-cream text-velmora-ink">
      <Header />
      {children}
      <Footer />
      <CartDrawer />
    </div>
  )
}
