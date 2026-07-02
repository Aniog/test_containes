import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/lib/cart-context'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'
import HomePage from '@/pages/HomePage'
import CollectionPage from '@/pages/CollectionPage'
import ProductPage from '@/pages/ProductPage'
import CartPage from '@/pages/CartPage'
import { useState } from 'react'

function AboutPage() {
  return (
    <main className="pt-20 md:pt-24">
      <div className="container-padding py-16 md:py-24 max-w-3xl mx-auto text-center">
        <p className="text-sm tracking-[0.2em] uppercase text-[var(--color-velmora-text-muted)] mb-4">Our Story</p>
        <h1 className="serif-heading text-4xl md:text-6xl mb-8">Where Elegance Meets Everyday</h1>
        <div className="aspect-[16/9] rounded overflow-hidden mb-12">
          <img
            src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=1200&h=675&fit=crop"
            alt="Velmora craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-6 text-[var(--color-velmora-text-muted)] leading-relaxed text-left">
          <p>
            Velmora was born from a simple belief: that beautiful jewelry shouldn't be reserved for special occasions. 
            We create demi-fine pieces that transition seamlessly from morning meetings to evening gatherings — 
            crafted with care, priced with intention.
          </p>
          <p>
            Each piece is 18K gold plated over recycled brass, hypoallergenic, and designed to be worn and loved every day. 
            We source our materials responsibly and work with artisans who share our commitment to quality and sustainability.
          </p>
          <p>
            Our name, Velmora, evokes the velvety warmth of gold against skin — a reminder that luxury should feel 
            as good as it looks. We believe in jewelry that tells a story, that becomes part of your daily ritual, 
            that you reach for without thinking because it simply feels right.
          </p>
        </div>
      </div>
    </main>
  )
}

function JournalPage() {
  const posts = [
    {
      id: 1,
      title: 'How to Layer Necklaces Like a Pro',
      excerpt: 'Master the art of necklace layering with our simple guide to mixing lengths, textures, and metals.',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=500&fit=crop',
      date: 'June 15, 2026',
    },
    {
      id: 2,
      title: 'The Care Guide: Keeping Your Gold Jewelry Beautiful',
      excerpt: 'Simple tips to maintain the luster of your demi-fine pieces for years to come.',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=500&fit=crop',
      date: 'June 8, 2026',
    },
    {
      id: 3,
      title: 'Gift Guide: Jewelry for Every Occasion',
      excerpt: 'From birthdays to anniversaries, find the perfect piece for the women in your life.',
      image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&h=500&fit=crop',
      date: 'June 1, 2026',
    },
  ]

  return (
    <main className="pt-20 md:pt-24">
      <div className="container-padding py-16 md:py-24">
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.2em] uppercase text-[var(--color-velmora-text-muted)] mb-4">The Journal</p>
          <h1 className="serif-heading text-4xl md:text-6xl">Style & Stories</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[16/10] rounded overflow-hidden mb-4 bg-[var(--color-velmora-bg-alt)]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-xs text-[var(--color-velmora-text-muted)] mb-2">{post.date}</p>
              <h2 className="serif-heading text-xl mb-2 group-hover:text-[var(--color-velmora-accent)] transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-[var(--color-velmora-text-muted)] leading-relaxed">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}

function App() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar onCartOpen={() => setCartOpen(true)} />
          <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage onCartOpen={() => setCartOpen(true)} />} />
              <Route path="/shop" element={<CollectionPage onCartOpen={() => setCartOpen(true)} />} />
              <Route path="/product/:id" element={<ProductPage onCartOpen={() => setCartOpen(true)} />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/journal" element={<JournalPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  )
}

export default App
