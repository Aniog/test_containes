import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/cart/CartDrawer'

export default function About() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="pt-28 pb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-serif text-4xl md:text-5xl text-espresso mb-6">
          About Velmora
        </h1>
        <p className="text-stone leading-relaxed">
          Velmora Fine Jewelry is a demi-fine jewelry brand dedicated to quiet
          luxury and modern romance. Each piece is designed to be worn, layered,
          and treasured — at a price point that feels accessible without ever
          compromising on quality or craft.
        </p>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
