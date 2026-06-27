import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/cart/CartDrawer'

export default function Journal() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="pt-28 pb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-serif text-4xl md:text-5xl text-espresso mb-6">
          Journal
        </h1>
        <p className="text-stone leading-relaxed">
          Styling stories, care guides, and behind-the-scenes looks at how we
          design each collection. Coming soon.
        </p>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
