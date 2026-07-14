import CartDrawer from '@/components/cart/CartDrawer.jsx'
import Footer from '@/components/layout/Footer.jsx'
import Header from '@/components/layout/Header.jsx'

const Layout = ({ children }) => (
  <div className="min-h-screen bg-velmora-cream text-velmora-ink">
    <Header />
    {children}
    <Footer />
    <CartDrawer />
  </div>
)

export default Layout
