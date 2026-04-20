import Navbar from './Navbar'
import Footer from './Footer'
import CartDrawer from './CartDrawer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      <Navbar />
      <CartDrawer />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
