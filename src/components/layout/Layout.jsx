import Navbar from './Navbar'
import Footer from './Footer'
import CartDrawer from './CartDrawer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-velvet-950">
      <Navbar />
      <CartDrawer />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}