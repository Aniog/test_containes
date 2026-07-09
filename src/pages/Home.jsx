import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, ChevronRight, ChevronLeft, Truck, RotateCcw, Shield, Sparkles } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import { products, testimonials, ugcItems, categories } from '../data/products'
import ProductCard from '../components/ProductCard'

/* ─── Hero Section ─── */
function HeroSection() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="gold jewelry luxury editorial warm light"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-obsidian/40 to-obsidian/70" />

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-gold-light mb-4 font-medium">
          18K Gold Plated · Hypoallergenic
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-cream tracking-wide leading-tight">
          Crafted to be<br />Treasured
        </h1>
        <p className="mt-6 text-cream-muted text-base md:text-lg max-w-lg mx-auto leading-relaxed">
          Premium demi-fine jewelry designed for the modern woman. Accessible luxury that shines as brightly as you do.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/shop"
            className="px-10 py-3.5 bg-gold text-obsidian text-xs uppercase tracking-[0.2em] font-semibold hover:bg-gold-dark transition-colors duration-300"
          >
            Shop the Collection
          </Link>
          <Link
            to="/about"
            className="px-10 py-3.5 border border-cream/40 text-cream text-xs uppercase tracking-[0.2em] font-medium hover:bg-cream/10 transition-colors duration-300"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Trust Bar ─── */
function TrustBar() {
  const items = [
    { icon: Truck, label: 'Free Worldwide Shipping' },
    { icon: RotateCcw, label: '30-Day Returns' },
    { icon: Shield, label: '18K Gold Plated' },
    { icon: Sparkles, label: 'Hypoallergenic' },
  ]

  return (
    <section className="border-y border-stone-200 bg-stone-50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center justify-center gap-2.5 py-2">
              <Icon className="w-4 h-4 text-gold" />
              <span className="text-xs text-ink-muted uppercase tracking-wider">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Bestsellers Grid ─── */
function Bestsellers() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3 font-medium">Curated for You</p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-ink tracking-wide">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product}>
              <img
                data-strk-img-id={`product-card-${product.id}`}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </ProductCard>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-ink hover:text-gold transition-colors"
          >
            View All Jewelry
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── UGC Reel ─── */
function UGCReel() {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 300, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-16 md:py-24 bg-obsidian">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between px-6 md:px-12 mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2 font-medium">As Seen On</p>
            <h2 className="font-serif text-2xl md:text-4xl font-light text-cream tracking-wide">
              #VelmoraStyle
            </h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll(-1)}
              className="w-10 h-10 border border-cream/20 flex items-center justify-center hover:border-gold hover:text-gold text-cream-muted transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-10 h-10 border border-cream/20 flex items-center justify-center hover:border-gold hover:text-gold text-cream-muted transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 px-6 md:px-12 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ugcItems.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-48 md:w-56">
              <div className="relative aspect-[9/16] bg-charcoal overflow-hidden group">
                <img
                  data-strk-img-id={item.id}
                  data-strk-img={item.query}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 font-serif text-sm italic text-cream/90 tracking-wide">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Shop by Category ─── */
function ShopByCategory() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3 font-medium">Browse</p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-ink tracking-wide">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <img
                data-strk-img-id={`category-${cat.id}`}
                data-strk-img={`${cat.name} gold jewelry collection editorial`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-obsidian/10 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
                <h3 className="font-serif text-2xl md:text-3xl text-cream tracking-wide">{cat.name}</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-cream/70 mt-2 group-hover:text-gold transition-colors">
                  Explore Collection
                </p>
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
    <section className="py-20 md:py-32 px-6 md:px-12 bg-stone-100">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-main"
              data-strk-img="artisan jewelry making gold hands crafting warm studio"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-medium">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-ink tracking-wide leading-snug">
              Jewelry That Feels Like You
            </h2>
            <div className="w-12 h-px bg-gold mt-6 mb-8" />
            <p className="text-ink-light leading-relaxed mb-6">
              Velmora was born from a simple belief: every woman deserves jewelry that feels luxurious without the luxury markup. We design pieces that transition seamlessly from morning coffee to evening cocktails — crafted in 18K gold-plated sterling silver that lasts.
            </p>
            <p className="text-ink-light leading-relaxed mb-8">
              Every piece is hypoallergenic, nickel-free, and designed to be worn, loved, and treasured for years to come. Because we believe the best jewelry is the kind you never want to take off.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-ink hover:text-gold transition-colors"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4" />
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
    <section className="py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3 font-medium">Reviews</p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-ink tracking-wide">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((review) => (
            <div key={review.id} className="bg-stone-100 p-8 md:p-10">
              <div className="flex gap-0.5 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-ink-light leading-relaxed mb-6 text-sm">"{review.text}"</p>
              <div>
                <p className="font-serif text-sm tracking-wide text-ink">{review.name}</p>
                <p className="text-xs text-ink-muted mt-0.5">Purchased: {review.product}</p>
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
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-obsidian">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-medium">Stay Connected</p>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-cream tracking-wide">
          Join for 10% Off Your First Order
        </h2>
        <p className="mt-4 text-cream-muted text-sm leading-relaxed">
          Be the first to discover new collections, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="mt-8 p-4 border border-gold/30">
            <p className="text-gold text-sm">Thank you! Check your inbox for your discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 bg-charcoal border border-white/10 text-cream placeholder:text-cream-muted/50 text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-gold text-obsidian text-xs uppercase tracking-[0.15em] font-semibold hover:bg-gold-dark transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
        <p className="mt-4 text-xs text-cream-muted/50">
          Unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </section>
  )
}

/* ─── Homepage ─── */
export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      <HeroSection />
      <TrustBar />
      <Bestsellers />
      <UGCReel />
      <ShopByCategory />
      <BrandStory />
      <TestimonialsSection />
      <Newsletter />
    </div>
  )
}
