import Nav from './Nav'
import Footer from './Footer'
import CartDrawer from './CartDrawer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-parchment">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
