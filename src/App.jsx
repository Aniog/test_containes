import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext'
import { Toaster } from 'sonner'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'
import HomePage from '@/pages/HomePage'
import CollectionPage from '@/pages/CollectionPage'
import ProductPage from '@/pages/ProductPage'
import './App.css'

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen bg-white flex flex-col">
          <Header />
          <CartDrawer />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<CollectionPage />} />
            <Route path="/product/:slug" element={<ProductPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/journal" element={<JournalPage />} />
          </Routes>
          <Footer />
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '14px',
                background: '#1a1a1a',
                color: '#fff',
                border: 'none',
              },
            }}
          />
        </div>
      </CartProvider>
    </Router>
  )
}

function AboutPage() {
  return (
    <main className="pt-20 md:pt-24 flex-1">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <p className="text-xs tracking-widest-xl uppercase text-gold-600 mb-4 font-sans">Our Story</p>
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal-900 font-light mb-8">
          The Art of Quiet Luxury
        </h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-charcoal-600 font-sans font-light leading-relaxed mb-6">
            Velmora was founded on a simple yet powerful idea: that beautiful jewelry should be accessible without compromising on quality or ethics. Our name draws from the Latin "velum" — meaning veil — reflecting our belief that jewelry should enhance, never overpower, the woman who wears it.
          </p>
          <p className="text-charcoal-600 font-sans font-light leading-relaxed mb-6">
            Each piece in our collection is designed in-house and crafted using 18K gold plating over recycled brass. We work with a small team of skilled artisans who share our commitment to sustainable, ethical production. Every earring, every necklace, every huggie is made to be worn daily — and to last.
          </p>
          <p className="text-charcoal-600 font-sans font-light leading-relaxed">
            We believe in quiet luxury: the kind that doesn't shout, but whispers. The kind that makes you feel beautiful not because of what others see, but because of what you feel. That's the Velmora promise.
          </p>
        </div>
      </div>
    </main>
  )
}

function JournalPage() {
  return (
    <main className="pt-20 md:pt-24 flex-1">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <p className="text-xs tracking-widest-xl uppercase text-gold-600 mb-4 font-sans">Journal</p>
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal-900 font-light mb-12">
          Stories & Styling
        </h1>
        <div className="grid gap-12">
          {[
            {
              title: 'How to Layer Necklaces Like a Pro',
              excerpt: 'Master the art of the layered look with our simple guide to mixing lengths, textures, and metals.',
              date: 'July 15, 2026',
              image: 'https://images.unsplash.com/photo-1599643478388-4e683c67ddb0?w=800&h=500&fit=crop',
            },
            {
              title: 'The Perfect Gift: A Velmora Guide',
              excerpt: 'Not sure what to get? Our curated gift guide makes choosing the right piece effortless.',
              date: 'July 8, 2026',
              image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=500&fit=crop',
            },
            {
              title: 'Caring for Your Gold-Plated Jewelry',
              excerpt: 'Simple tips to keep your Velmora pieces looking as beautiful as the day you got them.',
              date: 'June 28, 2026',
              image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=500&fit=crop',
            },
          ].map((post, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="aspect-[16/9] overflow-hidden bg-charcoal-100 mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-xs text-charcoal-400 font-sans mb-2">{post.date}</p>
              <h2 className="font-serif text-2xl text-charcoal-900 group-hover:text-gold-600 transition-colors mb-2">
                {post.title}
              </h2>
              <p className="text-charcoal-600 font-sans font-light">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
