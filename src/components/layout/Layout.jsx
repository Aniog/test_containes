import Navbar from './Navbar'
import CartDrawer from './CartDrawer'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#F6F3EF] text-[#1A1512]">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
