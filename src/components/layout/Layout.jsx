import Navbar from './Navbar'
import Footer from './Footer'
import CartDrawer from './CartDrawer'
import ScrollToTop from './ScrollToTop'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-cream text-ink">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
