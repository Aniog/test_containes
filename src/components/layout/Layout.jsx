import Navbar from './Navbar'
import CartDrawer from './CartDrawer'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <CartDrawer />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  )
}
