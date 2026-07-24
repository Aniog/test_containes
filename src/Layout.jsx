import Navbar from '@/components/home/Navbar'
import Footer from '@/components/home/Footer'
import CartDrawer from '@/components/cart/CartDrawer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <CartDrawer />
      <main>{children}</main>
      <Footer />
    </>
  )
}
