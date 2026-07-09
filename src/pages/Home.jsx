import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Star, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products, testimonials } from '../data/products'
import { formatPrice } from '../lib/utils'

/* ─── Hero Section ─── */
function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-amber-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(196,154,92,0.15)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(196,154,92,0.1)_0%,_transparent_50%)]" />
      </div>

      <div className="container-wide relative z-10 px-4 md:px-8 py-20 md:py-0">
        <div className="max-w-2xl">
          <p className="text-accent/80 text-xs tracking-[0.3em] uppercase font-medium mb-6">
            New Collection 2026
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] mb-6">
            Crafted to be
            <br />
            <span className="italic text-accent">Treasured</span>
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-md mb-10 leading-relaxed">
            Premium demi-fine jewelry in 18K gold. Designed for the modern woman who appreciates
            timeless elegance.
          </p>
          <Link to="/collection" className="btn-primary inline-flex items-center gap-2">
            Shop the Collection
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Decorative gold ring */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border border-accent/10 hidden lg:block" />
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full border border-accent/5 hidden lg:block" />
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
    <div className="bg-foreground text-background/70 py-3.5 overflow-hidden">
      <div className="flex items-center justify-center gap-8 md:gap-16 px-4">
        {items.map((item, i) => (
          <span key={i} className="text-[11px] tracking-[0.15em] uppercase whitespace-nowrap font-medium">
            {item}
            {i < items.length - 1 && (
              <span className="ml-8 md:ml-16 text-background/20">·</span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ─── Bestsellers Section ─── */
function Bestsellers() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide uppercase mb-3">
            Bestsellers
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Our most loved pieces, chosen by women who know what they want.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/collection" className="btn-outline inline-flex items-center gap-2">
            View All Jewelry
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── UGC Reel Section ─── */
function UGCReel() {
  const scrollRef = useRef(null)

  const slides = [
    { id: 1, caption: 'Morning light, golden glow', color: 'from-amber-800 to-stone-700' },
    { id: 2, caption: 'Stacked & styled', color: 'from-stone-700 to-amber-900' },
    { id: 3, caption: 'Everyday elegance', color: 'from-amber-900 to-stone-800' },
    { id: 4, caption: 'The perfect huggie', color: 'from-stone-800 to-amber-800' },
    { id: 5, caption: 'Date night ready', color: 'from-amber-800 to-stone-900' },
    { id: 6, caption: 'Golden hour vibes', color: 'from-stone-700 to-amber-700' },
  ]

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 280, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container-wide px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl tracking-wide uppercase mb-2">
              As Seen On You
            </h2>
            <p className="text-muted-foreground text-sm">@velmora on Instagram</p>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll(-1)}
              className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 px-4 md:px-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
        style={{ scrollbarWidth: 'none' }}
      >
        {slides.map(slide => (
          <div
            key={slide.id}
            className="flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] rounded-sm overflow-hidden snap-start relative group"
          >
            <div className={`absolute inset-0 bg-gradient-to-b ${slide.color}`}>
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border border-accent/30 flex items-center justify-center">
                  <span className="font-serif text-accent/60 text-sm">V</span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
              <p className="font-serif text-white/90 text-sm italic">
                {slide.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── Shop by Category ─── */
function ShopByCategory() {
  const cats = [
    { name: 'Earrings', to: '/collection?category=earrings', gradient: 'from-amber-100 to-stone-200' },
    { name: 'Necklaces', to: '/collection?category=necklaces', gradient: 'from-stone-200 to-amber-100' },
    { name: 'Huggies', to: '/collection?category=huggies', gradient: 'from-amber-50 to-stone-100' },
  ]

  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide uppercase text-center mb-12">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {cats.map(cat => (
            <Link
              key={cat.name}
              to={cat.to}
              className="group relative aspect-[4/5] md:aspect-[3/4] rounded-sm overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} transition-transform duration-700 group-hover:scale-105`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border-2 border-accent/20 flex items-center justify-center">
                    <span className="font-serif text-accent text-xl">V</span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <span className="font-serif text-xl md:text-2xl tracking-product uppercase text-foreground bg-card/80 backdrop-blur-sm px-6 py-2 rounded-sm">
                  {cat.name}
                </span>
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
    <section id="about" className="section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-gradient-to-br from-stone-200 via-amber-50 to-stone-300 rounded-sm flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(196,154,92,0.12)_0%,_transparent_70%)]" />
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full border-2 border-accent/20 flex items-center justify-center">
                <span className="font-serif text-accent text-3xl">V</span>
              </div>
              <span className="text-sm text-muted-foreground/50 tracking-[0.2em] uppercase">Est. 2024</span>
            </div>
          </div>

          {/* Text */}
          <div className="lg:py-8">
            <p className="text-accent text-xs tracking-[0.2em] uppercase font-medium mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
              Jewelry That Tells
              <br />
              <span className="italic">Your Story</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Velmora was born from a simple belief: every woman deserves jewelry that feels
                luxurious without the luxury markup. We create demi-fine pieces in 18K gold that
                you can wear every day — to the office, to dinner, to bed.
              </p>
              <p>
                Each piece is designed in our studio and crafted by skilled artisans using
                responsibly sourced materials. We skip the middleman and bring directly to you,
                so you get premium quality at accessible prices.
              </p>
            </div>
            <Link
              to="#"
              className="inline-flex items-center gap-2 text-sm text-accent font-medium tracking-nav uppercase mt-8 hover:gap-3 transition-all"
            >
              Read Our Story
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Testimonials ─── */
function Testimonials() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide uppercase text-center mb-12">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="bg-card p-8 rounded-sm">
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6 text-sm">
                "{t.text}"
              </p>
              <p className="text-xs tracking-nav uppercase text-muted-foreground font-medium">
                — {t.name}
              </p>
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
    <section className="section-padding">
      <div className="container-wide">
        <div className="bg-foreground rounded-sm px-6 py-14 md:px-16 md:py-20 text-center">
          <p className="text-accent text-xs tracking-[0.2em] uppercase font-medium mb-3">
            Join the Velmora Circle
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white tracking-wide mb-3">
            10% Off Your First Order
          </h2>
          <p className="text-white/50 text-sm max-w-md mx-auto mb-8">
            Subscribe for exclusive access to new arrivals, styling tips, and special offers.
          </p>

          {submitted ? (
            <p className="text-accent font-serif text-lg italic">
              Thank you — welcome to Velmora.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-white/10 border border-white/15 text-white placeholder-white/30 px-5 py-3 rounded-sm text-sm focus:outline-none focus:border-accent/50 transition-colors"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

/* ─── Home Page ─── */
export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCReel />
      <ShopByCategory />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </>
  )
}
