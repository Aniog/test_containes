import React, { useRef, useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Star, ChevronRight, ArrowRight, Heart } from 'lucide-react'
import { products, categories, testimonials } from '@/data/products'
import { useCart } from '@/context/CartContext'

/* ─── Star Rating ─── */
function Stars({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={12}
          className={i < Math.floor(rating) ? 'fill-gold text-gold' : 'fill-warm-beige text-warm-beige'}
        />
      ))}
    </div>
  )
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative h-[90vh] md:h-[88vh] min-h-[600px] -mt-[72px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=1600&auto=format"
          alt="Gold jewelry editorial"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>
      <div className="relative z-10 h-full flex items-center px-6 md:px-12 lg:px-16">
        <div className="max-w-xl">
          <p className="text-gold text-xs tracking-[0.2em] uppercase mb-4 font-sans font-medium">
            New Collection
          </p>
          <h1 className="text-white text-5xl md:text-7xl lg:text-[5.5rem] font-serif leading-[1.05] tracking-tight">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-white/70 text-base md:text-lg mt-6 max-w-md leading-relaxed">
            Demi-fine jewelry designed for life's every moment. 18K gold plated, made to last.
          </p>
          <Link to="/shop" className="inline-block btn-primary mt-8">
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Trust Bar ─── */
function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ]
  return (
    <div className="border-y border-warm-beige bg-cream">
      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-warm-beige">
          {items.map((item) => (
            <div key={item} className="py-3.5 text-center">
              <span className="text-[11px] md:text-xs tracking-[0.12em] uppercase text-taupe font-medium">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── Bestsellers ─── */
function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, 'gold')
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[4/5] bg-warm-beige/30 overflow-hidden mb-4">
        <img
          src={hovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.03]"
        />
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-gold text-white text-[10px] tracking-[0.12em] uppercase px-3 py-1 font-sans">
            New
          </span>
        )}
        <button
          onClick={handleAdd}
          className={`absolute bottom-0 left-0 right-0 py-3 text-center text-xs tracking-widest uppercase font-medium transition-all duration-300 ${
            added
              ? 'bg-sage text-white'
              : 'bg-white/90 text-deep-charcoal opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0'
          }`}
        >
          {added ? 'Added ✓' : 'Quick Add'}
        </button>
      </div>
      <h3 className="font-serif text-sm uppercase tracking-widest text-deep-charcoal">
        {product.name}
      </h3>
      <div className="flex items-center gap-2 mt-1">
        <Stars rating={product.rating} />
        <span className="text-[11px] text-taupe">{product.rating}</span>
      </div>
      <p className="font-serif text-base font-medium mt-1.5">${product.price}</p>
    </Link>
  )
}

function Bestsellers() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between mb-10 md:mb-14">
          <div>
            <span className="text-xs tracking-[0.2em] uppercase text-gold font-sans font-medium">
              Curated for You
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-charcoal mt-2">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden md:flex items-center gap-2 text-xs tracking-widest uppercase text-taupe hover:text-deep-charcoal transition-colors"
          >
            View All <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link to="/shop" className="btn-outline text-xs px-8 py-3">
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── UGC Reel ─── */
function UGCReel() {
  const scrollRef = useRef(null)
  const items = [
    { caption: 'The everyday essential', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&auto=format' },
    { caption: 'Gold on gold', img: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400&auto=format' },
    { caption: 'Stacked and styled', img: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400&auto=format' },
    { caption: 'Minimal elegance', img: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&auto=format' },
    { caption: 'Gift-ready', img: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&auto=format' },
    { caption: 'Dazzle in gold', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&auto=format' },
    { caption: 'Your new staple', img: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=400&auto=format' },
    { caption: 'Wearable art', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&auto=format' },
  ]

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mb-8 md:mb-12 px-6 md:px-12 lg:px-16 max-w-content mx-auto">
        <span className="text-xs tracking-[0.2em] uppercase text-gold font-sans font-medium">
          As Seen On You
        </span>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-charcoal mt-2">
          #VelmoraStories
        </h2>
      </div>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 px-6 md:px-12 lg:px-16 pb-4 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[180px] md:w-[220px] snap-start group cursor-pointer relative overflow-hidden"
          >
            <div className="aspect-[9/16] bg-warm-beige/30 overflow-hidden rounded-sm">
              <img
                src={item.img}
                alt=""
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 pt-10">
              <p className="text-white text-xs md:text-sm font-serif italic leading-snug">
                "{item.caption}"
              </p>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  )
}

/* ─── Category Tiles ─── */
function CategoryTiles() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-10 md:mb-14">
          <span className="text-xs tracking-[0.2em] uppercase text-gold font-sans font-medium">
            Find Your Style
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-charcoal mt-2">
            Shop by Category
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/3] md:aspect-[3/4] overflow-hidden bg-warm-beige/30"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm px-8 py-3 md:px-10 md:py-4 transition-all duration-300 group-hover:bg-white">
                  <span className="font-serif text-lg md:text-xl tracking-wider text-deep-charcoal">
                    {cat.name}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Brand Story ─── */
function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="aspect-[4/5] bg-warm-beige/30 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&auto=format"
              alt="Artisan jewelry crafting"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-md">
            <span className="text-xs tracking-[0.2em] uppercase text-gold font-sans font-medium">
              About Velmora
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-charcoal mt-3 leading-[1.1]">
              Designed with Intention
            </h2>
            <div className="w-12 h-0.5 bg-gold my-6" />
            <p className="text-taupe text-sm md:text-base leading-relaxed">
              Every piece at Velmora is crafted with care — 18K gold plated over sterling silver,
              designed to be both heirloom-quality and everyday wearable. We believe fine jewelry
              shouldn't be reserved for special occasions.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-6 text-xs tracking-widest uppercase text-deep-charcoal hover:text-gold transition-colors font-medium"
            >
              Our Story <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Testimonials ─── */
function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-10 md:mb-14">
          <span className="text-xs tracking-[0.2em] uppercase text-gold font-sans font-medium">
            Real Voices
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-charcoal mt-2">
            What Our Customers Say
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 md:p-10 border border-warm-beige">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-taupe text-sm md:text-base leading-relaxed italic font-serif">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-xs font-serif text-gold font-medium">{t.name.charAt(0)}</span>
                </div>
                <span className="text-xs tracking-widest uppercase text-deep-charcoal font-medium">
                  {t.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Newsletter ─── */
function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
      setEmail('')
      setTimeout(() => setStatus('idle'), 3000)
    }, 800)
  }

  return (
    <section className="py-16 md:py-24 bg-deep-charcoal">
      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16 text-center">
        <span className="text-xs tracking-[0.2em] uppercase text-gold font-sans font-medium">
          Get 10% Off
        </span>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mt-3">
          Join the Inner Circle
        </h2>
        <p className="text-taupe text-sm md:text-base mt-4 max-w-md mx-auto leading-relaxed">
          Be the first to discover new collections, receive exclusive offers, and enjoy 10% off your first order.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto flex gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 bg-white/10 border border-white/20 px-5 py-3.5 text-sm text-white placeholder:text-taupe/60 focus:outline-none focus:border-gold transition-colors"
          />
          <button type="submit" className="btn-primary !px-8 flex-shrink-0">
            {status === 'submitting' ? 'Sending...' : 'Subscribe'}
          </button>
        </form>
        {status === 'success' && (
          <p className="text-sage text-sm mt-4">You're in! Check your inbox for 10% off.</p>
        )}
      </div>
    </section>
  )
}

/* ─── Home Page ─── */
export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCReel />
      <CategoryTiles />
      <BrandStory />
      <TestimonialsSection />
      <Newsletter />
    </main>
  )
}
