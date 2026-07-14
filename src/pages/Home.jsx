import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Truck, RotateCcw, Shield } from 'lucide-react'
import { products, categories, testimonials } from '@/data/products'
import { Button } from '@/components/ui/button'

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i < Math.floor(rating) ? 'fill-brand-accent text-brand-accent' : 'text-brand-line'}`}
        />
      ))}
    </div>
  )
}

export default function Home() {
  const bestsellers = products.slice(0, 5)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight animate-fade-in">
            Crafted to be Treasured
          </h1>
          <p className="text-base md:text-lg text-white/80 mb-8 max-w-xl mx-auto animate-slide-up">
            Demi-fine jewelry designed for the modern woman. Warm gold, timeless silhouettes, and quiet luxury.
          </p>
          <Link to="/shop">
            <Button className="btn-accent text-sm uppercase tracking-widest">
              Shop the Collection <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-white border-b border-brand-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-brand-line">
            {[
              { icon: Truck, text: 'Free Worldwide Shipping' },
              { icon: RotateCcw, text: '30-Day Returns' },
              { icon: Shield, text: '18K Gold Plated' },
              { icon: Shield, text: 'Hypoallergenic' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-2 py-3 md:py-4">
                <item.icon className="w-4 h-4 text-brand-accent" />
                <span className="text-[11px] md:text-xs uppercase tracking-widest text-brand-muted">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="py-16 md:py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title mb-3">Bestsellers</h2>
            <p className="text-brand-muted text-sm">The pieces our community loves most.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {bestsellers.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-glow transition-all duration-300"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-brand-warm">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <Button className="w-full btn-accent text-xs py-2">Add to Cart</Button>
                  </div>
                </div>
                <div className="p-3 md:p-4">
                  <h3 className="product-name text-xs md:text-sm mb-1">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-1">
                    <StarRating rating={product.rating} />
                    <span className="text-[10px] text-brand-subtle">({product.reviews})</span>
                  </div>
                  <p className="text-sm font-medium text-brand-ink">${product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="py-12 bg-white border-y border-brand-line overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <h2 className="section-title text-center">As Seen On</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 px-4 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-40 h-72 md:w-48 md:h-80 rounded-2xl overflow-hidden bg-brand-warm"
            >
              <img
                src={`https://images.unsplash.com/photo-${i % 2 === 0 ? '1611591437281-460bfbe1220a' : '1535632066927-ab7c11ab9f6a'}?w=400&q=80`}
                alt={`UGC ${i}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-white text-xs font-serif italic">
                Worn by our community
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title mb-3">Shop by Category</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.id}`}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-brand-warm"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-serif text-2xl md:text-3xl tracking-widest uppercase">
                    {cat.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-brand-warm">
              <img
                src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&q=80"
                alt="Velmora brand story"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="section-title mb-6">Our Story</h2>
              <p className="text-brand-muted leading-relaxed mb-6">
                Velmora was born from a belief that fine jewelry should feel accessible, personal, and enduring. 
                Each piece is thoughtfully designed in our London studio, using 18K gold-plated brass and ethically 
                sourced crystals. We create jewelry that moves with you — from morning meetings to evening celebrations.
              </p>
              <Link to="/about">
                <Button className="btn-outline">Read Our Story</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title mb-3">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-white rounded-2xl p-6 md:p-8 shadow-soft">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-accent text-brand-accent" />
                  ))}
                </div>
                <p className="text-brand-ink leading-relaxed mb-6 italic font-serif text-lg">"{t.text}"</p>
                <p className="text-sm font-medium text-brand-ink">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-brand-ink text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Join for 10% off your first order</h2>
          <p className="text-white/70 mb-8 text-sm">
            Be the first to know about new collections, exclusive offers, and styling inspiration.
          </p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-brand-accent"
            />
            <Button className="btn-accent whitespace-nowrap">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  )
}
