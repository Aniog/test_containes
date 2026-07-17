import CartDrawer from './CartDrawer'
import Footer from './Footer'
import Navbar from './Navbar'

function StorefrontLayout({ children }) {
  return (
    <div className="min-h-screen bg-ivory text-umber">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  )
}

export default StorefrontLayout
