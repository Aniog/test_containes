import Navigation from './Navigation'
import Footer from './Footer'
import CartDrawer from '@/components/layout/CartDrawer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
