import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Truck, RotateCcw, Sparkles, Shield } from 'lucide-react'
import { products, ugcReels, testimonials, categories } from '../data/products'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/product/ProductCard'

export default function HomePage() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const { addToCart } = useCart()

  const bestsellers = products.filter(p => p.bestseller).length > 0
    ? products.filter(p => p.bestseller)
    : products.slice(0, 5)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) setSubscribed(true)
  }

  return (
    <div>
      {/* Hero Section - Full Bleed */}
      <section className="relative h-[90vh] min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden bg-velmora-deep">
        {/* Background image placeholder */}
        <div className="absolute inset-0 bg-[#2A2520]">
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: 'url(/images/hero/hero-main.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          <p className="text-velmora-gold text-sm tracking-widest uppercase mb-4 font-medium">
            Demi-Fine Gold Jewelry
          </p>
          <h1
            className="font-serif text-velmora-cream text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, letterSpacing: '0.02em' }}
          >
            Crafted to be<br />Treasured
          </h1>
          <p className="text-velmora-cream/70 text-base md:text-lg mb-10 max-w-md mx-auto leading-relaxed">
            Quiet luxury for everyday moments. Each piece designed to be worn, loved, and passed down.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-velmora-gold hover:bg-velmora-goldDark text-velmora-deep px-10 py-4 text-sm uppercase tracking-wider font-medium transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-velmora-warm border-y border-velmora-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 lg:gap-x-12">
            {[
              { icon: Truck, text: 'Free Worldwide Shipping' },
              { icon: RotateCcw, text: '30-Day Returns' },
              { icon: Sparkles, text: '18K Gold Plated' },
              { icon: Shield, text: 'Hypoallergenic' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-velmora-textMuted">
                <Icon size={16} className="text-velmora-gold" />
                <span className="tracking-wide">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="text-center mb-16">
          <p className="text-velmora-gold text-sm tracking-widest uppercase mb-3 font-medium">Curated for You</p>
          <h2
            className="font-serif text-3xl md:text-4xl text-velmora-text"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
          >
            Bestsellers
          </h2>
          <div className="w-16 h-[1px] bg-velmora-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {bestsellers.map((product, i) => (
            <div
              key={product.id}
              style={{ animationDelay: `${i * 0.1}s` }}
              className="animate-smooth-appear opacity-0"
            >
              <ProductCard product={product} onAddToCart={addToCart} />
            </div>
          ))}
        </div>
      </section>

      {/* UGC Reel-style Row */}
      <section className="py-20 lg:py-28 bg-velmora-warm overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-12">
          <p className="text-velmora-gold text-sm tracking-widest uppercase mb-3 font-medium text-center">@velmora</p>
          <h2
            className="font-serif text-3xl text-velmora-text text-center"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
          >
            Worn by You
          </h2>
        </div>
        <div className="flex gap-5 px-6 lg:px-12 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
          {ugcReels.map((reel) => (
            <div
              key={reel.id}
              className="flex-shrink-0 w-[280px] sm:w-[320px] aspect-[9/16] max-h-[500px] rounded-lg overflow-hidden relative snap-center cursor-pointer group"
            >
              <div
                className="absolute inset-0 bg-velmora-deep/80 group-hover:bg-velmora-deep/60 transition-colors duration-500"
                style={{
                  backgroundImage: `url(${reel.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-deep/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-velmora-cream font-serif text-lg italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  "{reel.caption}"
                </p>
                <p className="text-velmora-gold/80 text-sm mt-2">{reel.author}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category Tiles */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="text-center mb-16">
          <p className="text-velmora-gold text-sm tracking-widest uppercase mb-3 font-medium">Explore</p>
          <h2
            className="font-serif text-3xl md:text-4xl text-velmora-text"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
          >
            Shop by Category
          </h2>
          <div className="w-16 h-[1px] bg-velmora-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg"
            >
              <div
                className="absolute inset-0 bg-velmora-deep/70 group-hover:bg-velmora-deep/50 transition-colors duration-500"
                style={{
                  backgroundImage: `url(${cat.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3
                    className="font-serif text-velmora-cream text-2xl lg:text-3xl tracking-wide group-hover:text-velmora-goldLight transition-colors duration-300"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, letterSpacing: '0.15em' }}
                  >
                    {cat.name}
                  </h3>
                  <div className="w-12 h-[1px] bg-velmora-gold mx-auto mt-4 group-hover:w-20 transition-all duration-500" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story Split Section */}
      <section className="py-20 lg:py-28 bg-velmora-warm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image side */}
            <div className="aspect-[4/5] bg-velmora-deep/10 rounded-lg overflow-hidden">
              <div
                className="w-full h-full bg-velmora-deep/20"
                style={{
                  backgroundImage: 'url(/images/brand/our-story.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
            {/* Text side */}
            <div className="max-w-lg">
              <p className="text-velmora-gold text-sm tracking-widest uppercase mb-4 font-medium">Our Story</p>
              <h2
                className="font-serif text-3xl md:text-4xl text-velmora-text mb-8"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, lineHeight: 1.2 }}
              >
                Quiet Luxury,<br />Crafted with Intention
              </h2>
              <div className="w-16 h-[1px] bg-velmora-gold mb-8" />
              <p className="text-velmora-textMuted leading-relaxed mb-6">
                Velmora was born from a simple belief: jewelry should feel personal, not performative. We create demi-fine pieces using 18K gold plating and hypoallergenic materials — designed to be worn every day, not saved for special occasions.
              </p>
              <p className="text-velmora-textMuted leading-relaxed mb-10">
                Each piece is thoughtfully designed and meticulously crafted, bridging the gap between precious and accessible.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 text-sm uppercase tracking-wider text-velmora-gold hover:text-velmora-goldDark transition-colors group"
              >
                Our Story
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="text-center mb-16">
          <p className="text-velmora-gold text-sm tracking-widest uppercase mb-3 font-medium">Testimonials</p>
          <h2
            className="font-serif text-3xl md:text-4xl text-velmora-text"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
          >
            Loved by Our Customers
          </h2>
          <div className="w-16 h-[1px] bg-velmora-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-velmora-cream border border-velmora-border rounded-lg p-8 text-center hover:shadow-premium transition-shadow duration-500">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Sparkles key={i} size={16} className="text-velmora-gold" fill="#C9A96E" />
                ))}
              </div>
              <p className="text-velmora-textMuted italic leading-relaxed mb-8 text-base">
                "{t.text}"
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-velmora-gold/20 flex items-center justify-center text-velmora-gold font-medium text-sm">
                  {t.initial}
                </div>
                <span className="text-sm font-medium text-velmora-text">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-velmora-deep py-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2
            className="font-serif text-velmora-cream text-3xl md:text-4xl mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
          >
            Join for 10% Off
          </h2>
          <p className="text-velmora-cream/60 mb-10 max-w-md mx-auto">
            Subscribe to receive exclusive offers, early access to new collections, and jewelry care tips.
          </p>
          {subscribed ? (
            <p className="text-velmora-gold text-lg font-medium">Thank you for subscribing!</p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-6 py-4 bg-velmora-deep/50 border border-velmora-cream/20 text-velmora-cream placeholder:text-velmora-cream/30 focus:border-velmora-gold outline-none transition-colors text-sm"
              />
              <button
                type="submit"
                className="bg-velmora-gold hover:bg-velmora-goldDark text-velmora-deep px-8 py-4 text-sm uppercase tracking-wider font-medium transition-colors duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
