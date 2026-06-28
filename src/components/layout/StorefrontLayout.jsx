import CartDrawer from './CartDrawer.jsx'
import Footer from './Footer.jsx'
import NavBar from './NavBar.jsx'
import ScrollToTop from './ScrollToTop.jsx'

export default function StorefrontLayout({ children }) {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <ScrollToTop />
      <NavBar />
      <main>{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
