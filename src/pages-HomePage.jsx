import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Star, ArrowRight, ChevronLeft, ChevronRight, Heart, ShoppingBag } from 'lucide-react'
import { products, testimonials, getBestsellers } from './lib-products'
import { useCart } from './context-CartContext'

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UGCSection />
      <CategoryTiles />
      <BrandStory />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center bg-charcoal overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/40 to-espresso/80 z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/20 via-transparent to-transparent opacity-40 z-10" />
      <div className="relative z-20 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 w-full">
        <div className="max-w-[600px]">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-cream leading-[1.05] mb-6 tracking-tight">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-cream/70 text-base md:text-lg font-light leading-relaxed mb-10 max-w-[440px]">
            Demi-fine gold jewelry for the modern woman. Each piece designed with intention, plated in 18K gold, and made to be worn — every single day.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-cream px-8 py-3.5 text-xs tracking-wider uppercase font-medium transition-all duration-300 no-underline"
          >
            Shop the Collection
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}

function TrustBar() {
  const items = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']
  return (
    <div className="bg-espresso">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-3 flex flex-wrap justify-center gap-6 md:gap-12">
        {items.map((text) => (
          <span key={text} className="text-[11px] tracking-wider text-cream/60 uppercase">
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}

function BestsellersSection() {
  const bestsellers = getBestsellers()
  const { addItem } = useCart()
  const [hovered, setHovered] = useState(null)

  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
      <div className="text-center mb-14">
        <h2 className="text-2xl md:text-4xl font-serif text-espresso mb-3">Bestsellers</h2>
        <p className="text-warm-muted text-sm tracking-wide max-w-[400px] mx-auto">
          The pieces our customers reach for first
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {bestsellers.map((product) => (
          <div
            key={product.id}
            className="group cursor-pointer"
            onMouseEnter={() => setHovered(product.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <Link to={`/product/${product.id}`} className="block no-underline">
              <div className="relative aspect-[3/4] bg-stone mb-4 overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-warm-muted/30">
                  <div className="w-20 h-20 rounded-full bg-gold/10 mb-2" />
                  <span className="text-[9px] tracking-wider uppercase">{product.subcategory}</span>
                </div>

                {/* Hover overlay */}
                <div className={`absolute inset-0 bg-espresso/5 flex items-center justify-center transition-opacity duration-300 ${hovered === product.id ? 'opacity-100' : 'opacity-0'}`}>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      addItem(product)
                    }}
                    className="bg-cream/95 text-espresso px-5 py-2.5 text-[11px] tracking-wider uppercase font-medium shadow-lg hover:bg-gold hover:text-cream transition-all duration-300 flex items-center gap-2"
                  >
                    <ShoppingBag size={13} />
                    Add to Cart
                  </button>
                </div>
              </div>

              <div className="px-1">
                <p className="text-[11px] tracking-wider font-medium text-espresso leading-tight mb-1">
                  {product.name}
                </p>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} fill={i < Math.floor(product.rating) ? '#b8863a' : 'none'} stroke="#b8863a" />
                  ))}
                  <span className="text-[10px] text-warm-muted ml-1">({product.reviewCount})</span>
                </div>
                <p className="text-sm font-medium text-espresso">${product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/shop" className="inline-flex items-center gap-2 text-xs tracking-wider uppercase text-warm-gray hover:text-gold transition-colors no-underline">
          View All
          <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  )
}

function UGCSection() {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    checkScroll()
    el.addEventListener('scroll', checkScroll, { passive: true })
    return () => el.removeEventListener('scroll', checkScroll)
  }, [])

  const scroll = (dir) => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir * 320, behavior: 'smooth' })
  }

  const ugcItems = [
    { id: 1, caption: 'Morning light with Golden Spheres ✨', product: 'Golden Sphere Huggies', productId: 'golden-sphere-huggies' },
    { id: 2, caption: 'Date night layers — all Velmora', product: 'Majestic Flora Nectar', productId: 'majestic-flora-nectar' },
    { id: 3, caption: 'Stacked and ready 🤍', product: 'Vivid Aura Jewels', productId: 'vivid-aura-jewels' },
    { id: 4, caption: 'The heirloom set in action', product: 'Royal Heirloom Set', productId: 'royal-heirloom-set' },
    { id: 5, caption: 'Everyday elegance never looked so good', product: 'Amber Lace Earrings', productId: 'amber-lace-earrings' },
    { id: 6, caption: 'New favorites just dropped', product: 'Celestial Drop Necklace', productId: 'celestial-drop-necklace' },
  ]

  return (
    <section className="bg-stone py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-2xl md:text-4xl font-serif text-espresso mb-3">Styled by You</h2>
            <p className="text-warm-muted text-sm tracking-wide">Real women, real moments, real gold</p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll(-1)}
              disabled={!canScrollLeft}
              className="p-2 border border-warm-border rounded-full disabled:opacity-30 hover:border-espresso transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll(1)}
              disabled={!canScrollRight}
              className="p-2 border border-warm-border rounded-full disabled:opacity-30 hover:border-espresso transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ugcItems.map((item) => (
            <Link
              key={item.id}
              to={`/product/${item.productId}`}
              className="flex-shrink-0 w-[200px] md:w-[260px] snap-start group no-underline"
            >
              <div className="aspect-[9/16] bg-warm-border rounded-sm mb-3 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-cream/20">
                  <Heart size={32} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-cream/90 text-xs font-serif italic leading-snug">
                    "{item.caption}"
                  </p>
                </div>
              </div>
              <p className="text-[10px] tracking-wider text-warm-muted uppercase">{item.product}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function CategoryTiles() {
  const categories = [
    { name: 'Earrings', slug: 'earrings', color: 'from-stone to-cream', desc: 'Studs, drops & cuffs' },
    { name: 'Necklaces', slug: 'necklaces', color: 'from-warm-border to-stone', desc: 'Pendants & chains' },
    { name: 'Huggies', slug: 'huggies', color: 'from-stone to-warm-border', desc: 'Everyday essentials' },
  ]

  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to="/shop"
            className="group relative aspect-[4/3] overflow-hidden no-underline block"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} flex items-center justify-center`}>
              <div className="w-16 h-16 rounded-full bg-gold/10 mb-4" />
            </div>
            <div className="absolute inset-0 bg-espresso/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
              <h3 className="text-2xl md:text-3xl font-serif text-cream tracking-wide mb-2">{cat.name}</h3>
              <p className="text-cream/70 text-sm">{cat.desc}</p>
              <span className="mt-4 text-xs tracking-wider uppercase text-gold-light inline-flex items-center gap-1">
                Explore <ArrowRight size={12} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

function BrandStory() {
  return (
    <section className="bg-espresso">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="aspect-[4/5] md:aspect-auto bg-charcoal flex items-center justify-center">
          <div className="text-cream/10 font-serif text-6xl">V</div>
        </div>
        <div className="flex items-center px-8 md:px-16 lg:px-24 py-16 md:py-20">
          <div className="max-w-[460px]">
            <p className="text-[11px] tracking-wider text-gold-light uppercase mb-6">Our Story</p>
            <h2 className="text-3xl md:text-4xl font-serif text-cream mb-6 leading-tight">
              Jewelry That Lives<br />With You
            </h2>
            <p className="text-cream/60 leading-relaxed text-sm mb-8">
              Velmora was born from the belief that fine jewelry shouldn't be reserved for special occasions. We craft each piece in 18K gold plate with meticulous attention to detail — because the everyday deserves to be extraordinary.
            </p>
            <p className="text-cream/60 leading-relaxed text-sm mb-8">
              From our responsibly sourced materials to our velvet-lined packaging, every choice reflects our commitment to quiet luxury that lasts.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-xs tracking-wider uppercase text-gold-light hover:text-gold transition-colors no-underline">
              Read Our Story
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
      <h2 className="text-2xl md:text-4xl font-serif text-espresso text-center mb-14">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {testimonials.map((t) => (
          <div key={t.name} className="text-center">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="#b8863a" stroke="#b8863a" />
              ))}
            </div>
            <p className="text-warm-gray text-sm leading-relaxed italic mb-5">"{t.text}"</p>
            <p className="text-xs tracking-wider text-espresso font-medium">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function NewsletterSection() {
  return (
    <section className="bg-charcoal">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-24 text-center">
        <h2 className="text-2xl md:text-4xl font-serif text-cream mb-3">Join for 10% Off</h2>
        <p className="text-cream/50 text-sm mb-8 max-w-[360px] mx-auto">
          Your first order, and a front-row seat to new collections, exclusive offers, and styling inspiration.
        </p>
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-[420px] mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-transparent border border-cream/20 text-cream text-sm px-4 py-3 placeholder:text-cream/30 focus:outline-none focus:border-gold transition-colors"
          />
          <button className="bg-gold hover:bg-gold-light text-cream px-8 py-3 text-xs tracking-wider uppercase font-medium transition-colors">
            Sign Up
          </button>
        </form>
      </div>
    </section>
  )
}
