import Navbar from './Navbar'
import Footer from './Footer'
import CartDrawer from './CartDrawer'

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
