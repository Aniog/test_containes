import Header from '@/components/navigation/Header'
import Footer from '@/components/navigation/Footer'
import CartDrawer from '@/components/cart/CartDrawer'

const Layout = ({ children }) => (
  <div className="min-h-screen bg-velmora-ivory text-velmora-ink">
    <Header />
    {children}
    <Footer />
    <CartDrawer />
  </div>
)

export default Layout
