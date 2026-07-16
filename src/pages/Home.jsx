import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, ChevronRight } from 'lucide-react'
import { products, categories, testimonials, ugcReels } from '../data/products'
import { useCart } from '../context/CartContext'

/* ------------------------------------------------------------------ */
/*  Hero                                                                */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-ink-950">
        <img
          src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=1800&q=85"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/70 via-ink-950/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <p className="text-gold-400 text-xs tracking-extra-wide uppercase font-sans mb-4 animate-fade-in">
              Velmora Fine Jewelry
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream-50 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Crafted to be
              <br />
              <span className="italic">Treasured</span>
            </h1>
            <p className="text-cream-200 text-sm sm:text-base font-sans mt-6 max-w-md leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Discover demi-fine gold jewelry designed for the modern woman. 
              Every piece is handcrafted to become part of your story.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Link to="/shop" className="btn-accent text-xs text-center">
                Shop the Collection
              </Link>
              <Link to="/collections" className="btn-outline text-xs text-center border-cream-700 text-cream-200 hover:border-cream-50 hover:text-cream-50">
                View Collections
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-px h-10 bg-cream-500/50" />
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Trust Bar                                                           */
/* ------------------------------------------------------------------ */
function TrustBar() {
  const trusts = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ]
  return (
    <div className="border-t border-b border-ink-100 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2 py-3 md:py-4">
          {trusts.map((item) => (
            <span
              key={item}
              className="text-[11px] md:text-xs text-ink-500 tracking-wider uppercase font-sans"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Bestsellers                                                         */
/* ------------------------------------------------------------------ */
function Bestsellers() {
  const { addItem } = useCart()

  return (
    <section className="py-16 md:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gold-600 text-xs tracking-extra-wide uppercase font-sans mb-3">
            Best Sellers
          </p>
          <h2 className="section-heading">Our Most Treasured Pieces</h2>
          <p className="section-subheading mt-3 max-w-lg mx-auto">
            Handpicked favorites that our customers return for again and again.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="group"
            >
              <div className="product-card-image-wrapper bg-ink-100 aspect-[3/4] rounded-sm overflow-hidden relative">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="product-main-img w-full h-full object-cover transition-all duration-500 ease-out"
                />
                <img
                  src={product.hoverImage}
                  alt={`${product.name} alternate view`}
                  className="product-hover-img absolute inset-0 w-full h-full object-cover"
                />
                {/* Quick add overlay */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-ink-950/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    addItem(product, 1, product.variant || 'gold')
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault()
                      addItem(product, 1, product.variant || 'gold')
                    }
                  }}
                >
                  <span className="text-cream-50 text-[11px] tracking-widest uppercase font-sans block text-center">
                    Quick Add
                  </span>
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <h3 className="product-name truncate">{product.name}</h3>
                <p className="product-price">${product.price}</p>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < Math.floor(product.rating)
                          ? 'text-gold-500 fill-gold-500'
                          : 'text-ink-200'
                      }`}
                    />
                  ))}
                  <span className="text-[10px] text-ink-400 ml-1 font-sans">
                    ({product.reviewCount})
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline text-xs">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  UGC Reel Row                                                        */
/* ------------------------------------------------------------------ */
function UgcReel() {
  const scrollRef = useRef(null)

  return (
    <section className="py-16 md:py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-gold-600 text-xs tracking-extra-wide uppercase font-sans mb-3">
            As Seen On You
          </p>
          <h2 className="section-heading">Styled by Our Community</h2>
          <p className="section-subheading mt-3">
            Tag <span className="text-ink-950 font-medium">@velmorajewelry</span> to be featured.
          </p>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 hide-scrollbar"
      >
        {ugcReels.map((reel, i) => (
          <div
            key={reel.id}
            className="flex-shrink-0 w-48 md:w-56 aspect-[9/16] bg-ink-200 rounded-sm overflow-hidden relative group cursor-pointer"
          >
            <img
              src={reel.image}
              alt={reel.caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-cream-50 text-xs font-serif italic leading-relaxed">
                &ldquo;{reel.caption}&rdquo;
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Shop by Category                                                     */
/* ------------------------------------------------------------------ */
function CategoryTiles() {
  const tileImages = {
    earrings: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    necklaces: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    huggies: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=800&q=80',
  }

  return (
    <section className="py-16 md:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold-600 text-xs tracking-extra-wide uppercase font-sans mb-3">
            Categories
          </p>
          <h2 className="section-heading">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {['earrings', 'necklaces', 'huggies'].map((cat) => {
            const catData = categories.find((c) => c.slug === cat)
            return (
              <Link
                key={cat}
                to={`/shop?category=${cat}`}
                className="group relative aspect-[4/3] md:aspect-[3/4] bg-ink-900 overflow-hidden rounded-sm"
              >
                <img
                  src={tileImages[cat]}
                  alt={catData?.name || cat}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink-950/30 group-hover:bg-ink-950/50 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center transform group-hover:translate-y-0 translate-y-2 transition-transform duration-400">
                    <h3 className="font-serif text-2xl md:text-3xl text-cream-50">
                      {catData?.name || cat}
                    </h3>
                    <p className="text-cream-300 text-sm mt-2 font-sans tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                      {catData?.count} {catData?.count === 1 ? 'piece' : 'pieces'}
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Brand Story                                                         */
/* ------------------------------------------------------------------ */
function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="aspect-[4/5] bg-ink-200 rounded-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&q=80"
              alt="Artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-md">
            <p className="text-gold-600 text-xs tracking-extra-wide uppercase font-sans mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink-950 leading-tight">
              Made to Be Worn,
              <br />
              <span className="italic">Every Day</span>
            </h2>
            <div className="w-12 h-px bg-gold-500 my-6" />
            <p className="text-ink-600 font-sans text-sm md:text-base leading-relaxed">
              Velmora was born from a simple belief: luxury shouldn&rsquo;t be reserved for 
              special occasions. We craft demi-fine gold jewelry that transitions 
              seamlessly from your morning coffee to an evening gala — pieces that 
              become part of who you are.
            </p>
            <p className="text-ink-600 font-sans text-sm md:text-base leading-relaxed mt-4">
              Every piece is 18K gold-plated, hypoallergenic, and designed with 
              the kind of care that makes it worthy of being handed down.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-xs tracking-widest uppercase font-sans text-ink-950 border-b border-ink-950 pb-0.5 hover:text-gold-600 hover:border-gold-600 transition-colors"
            >
              Read Our Story
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Testimonials                                                        */
/* ------------------------------------------------------------------ */
function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold-600 text-xs tracking-extra-wide uppercase font-sans mb-3">
            Testimonials
          </p>
          <h2 className="section-heading">Loved by Thousands</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-cream-50 p-8 rounded-sm border border-ink-100">
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-gold-500 fill-gold-500"
                  />
                ))}
              </div>
              <p className="text-ink-700 font-sans text-sm leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-xs tracking-widest uppercase font-sans text-ink-500">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Newsletter                                                          */
/* ------------------------------------------------------------------ */
function Newsletter() {
  const [email, setEmail] = React.useState('')
  const [submitted, setSubmitted] = React.useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section className="py-16 md:py-24 bg-ink-950">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gold-400 text-xs tracking-extra-wide uppercase font-sans mb-4">
            Newsletter
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-cream-50 leading-tight">
            Join for 10% Off
            <br />
            <span className="italic text-cream-300">Your First Order</span>
          </h2>
          <p className="text-cream-400 font-sans text-sm mt-4 max-w-sm mx-auto">
            Be the first to know about new collections, exclusive drops, and behind-the-scenes stories.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3.5 bg-cream-900/20 border border-cream-800/40 text-cream-50 placeholder:text-cream-600 font-sans text-sm rounded-none focus:outline-none focus:border-gold-500 transition-colors"
              />
              <button
                type="submit"
                className="btn-accent text-xs px-6 flex-shrink-0"
              >
                Subscribe
              </button>
            </div>
          </form>
          {submitted && (
            <p className="text-gold-400 text-xs font-sans mt-4 animate-fade-in">
              Thank you! Check your inbox for your discount code.
            </p>
          )}
          <p className="text-cream-600 text-[11px] font-sans mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Home Page export                                                    */
/* ------------------------------------------------------------------ */
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UgcReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </>
  )
}