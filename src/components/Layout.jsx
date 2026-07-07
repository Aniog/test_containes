import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { CartDrawer } from './CartDrawer'

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#F9F7F2]">
      <Navbar />
      <CartDrawer />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
