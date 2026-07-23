import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { CartDrawer } from "./CartDrawer"

export function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-velmora-cream">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
