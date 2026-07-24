import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, ChevronLeft, ChevronRight, Truck, RotateCcw, Shield, Heart } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import ProductCard from '@/components/ProductCard'
import { products, testimonials } from '@/data/products'

const ugcItems = [
  { id: 1, caption: 'Golden hour glow', imgId: 'ugc-1' },
  { id: 2, caption: 'Stacked & styled', imgId: 'ugc-2' },
  { id: 3, caption: 'Everyday luxury', imgId: 'ugc-3' },
  { id: 4, caption: 'Ear candy', imgId: 'ugc-4' },
  { id: 5, caption: 'Gift-worthy', imgId: 'ugc-5' },
  { id: 6, caption: 'Layered look', imgId: 'ugc-6' },
]

const categories = [
  { id: 'earrings', name: 'Earrings', imgId: 'cat-earrings', descId: 'cat-earrings-desc' },
  { id: 'necklaces', name: 'Necklaces', imgId: 'cat-necklaces', descId: 'cat-necklaces-desc' },
  { id: 'huggies', name: 'Huggies', imgId: 'cat-huggies', descId: 'cat-huggies-desc' },
]

export default function Home() {
  const containerRef = useRef(null)
  const ugcRef = useRef(null)
  const [ugcScroll, setUgcScroll] = useState(0)

  const bestsellers = products.filter(p => p.bestseller).slice(0, 5)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  const scrollUgc = (direction) => {
    if (ugcRef.current) {
      const scrollAmount = 280
      ugcRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center">
        <div
          className="absolute inset-0"
          data-strk-bg-id="hero-bg"
          data-strk-bg="[hero-subtext] [hero-title] luxury gold jewelry on model warm lighting"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
          <p id="hero-subtext" className="nav-link text-white/80 mb-4 tracking-widest">
            Velmora Fine Jewelry
          </p>
          <h1 id="hero-title" className="heading-1 text-white mb-6 text-balance">
            Crafted to be Treasured
          </h1>
          <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto font-light">
            Premium demi-fine jewelry designed for the modern woman. 18K gold plated, hypoallergenic, and made to last.
          </p>
          <Link to="/collection" className="btn-primary inline-flex">
            Shop the Collection
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-velmora-surface border-y border-velmora-border">
        <div className="container-velmora py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Truck, label: 'Free Worldwide Shipping' },
              { icon: RotateCcw, label: '30-Day Returns' },
              { icon: Shield, label: '18K Gold Plated' },
              { icon: Heart, label: 'Hypoallergenic' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center justify-center gap-2 py-2">
                <Icon size={16} className="text-velmora-gold" />
                <span className="text-xs font-medium text-velmora-text-secondary tracking-wide">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-section-mobile md:py-section">
        <div className="container-velmora">
          <div className="text-center mb-12">
            <p className="nav-link text-velmora-gold mb-3">Curated for You</p>
            <h2 className="heading-2 text-velmora-text">Bestsellers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {bestsellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/collection" className="btn-secondary">
              View All Jewelry
              <ArrowRight size={14} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-velmora"><div className="divider" /></div>

      {/* UGC Reel Strip */}
      <section className="py-section-mobile md:py-section">
        <div className="container-velmora mb-8">
          <div className="flex items-end justify-between">
            <div>
              <p className="nav-link text-velmora-gold mb-3">Styled by You</p>
              <h2 className="heading-2 text-velmora-text">#VelmoraStyle</h2>
            </div>
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => scrollUgc('left')}
                className="w-10 h-10 border border-velmora-border flex items-center justify-center hover:border-velmora-gold transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scrollUgc('right')}
                className="w-10 h-10 border border-velmora-border flex items-center justify-center hover:border-velmora-gold transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
        <div
          ref={ugcRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-6 md:px-[calc((100vw-1280px)/2+24px)]"
        >
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[220px] md:w-[260px] relative aspect-[9/16] overflow-hidden group"
            >
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[ugc-caption-${item.id}] woman wearing gold jewelry closeup`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p
                id={`ugc-caption-${item.id}`}
                className="absolute bottom-4 left-4 right-4 font-serif text-white text-lg italic"
              >
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="container-velmora"><div className="divider" /></div>

      {/* Shop by Category */}
      <section className="py-section-mobile md:py-section">
        <div className="container-velmora">
          <div className="text-center mb-12">
            <p className="nav-link text-velmora-gold mb-3">Browse</p>
            <h2 className="heading-2 text-velmora-text">Shop by Category</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/collection?category=${cat.id}`}
                className="group relative aspect-[4/5] overflow-hidden"
              >
                <img
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[cat-label-${cat.id}] [cat-desc-${cat.id}] gold jewelry collection`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <p id={`cat-desc-${cat.id}`} className="text-sm text-white/70 mb-2 hidden">
                    Premium gold {cat.name.toLowerCase()} collection
                  </p>
                  <h3 id={`cat-label-${cat.id}`} className="heading-2 text-white mb-2">
                    {cat.name}
                  </h3>
                  <span className="nav-link text-white/80 border-b border-white/40 pb-1 group-hover:border-white transition-colors">
                    Shop Now
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-velmora"><div className="divider" /></div>

      {/* Brand Story */}
      <section className="py-section-mobile md:py-section">
        <div className="container-velmora">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                data-strk-img-id="brand-story"
                data-strk-img="[brand-story-text] [brand-story-title] artisan crafting gold jewelry workshop"
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Velmora artisan crafting jewelry"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:pl-8">
              <p className="nav-link text-velmora-gold mb-4">Our Story</p>
              <h2 id="brand-story-title" className="heading-2 text-velmora-text mb-6">
                Jewelry That Tells Your Story
              </h2>
              <p id="brand-story-text" className="text-velmora-text-secondary leading-relaxed mb-4">
                Velmora was born from a simple belief: every woman deserves to wear jewelry that makes her feel extraordinary. We create demi-fine pieces that bridge the gap between costume jewelry and fine jewelry — premium quality without the premium price tag.
              </p>
              <p className="text-velmora-text-secondary leading-relaxed mb-8">
                Each piece is crafted with 18K gold plating over sterling silver, designed to be hypoallergenic and tarnish-resistant. We work directly with skilled artisans, cutting out the middleman to bring you luxury that&apos;s accessible.
              </p>
              <Link to="/about" className="btn-secondary inline-flex">
                Read Our Story
                <ArrowRight size={14} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-velmora"><div className="divider" /></div>

      {/* Testimonials */}
      <section className="py-section-mobile md:py-section bg-velmora-surface">
        <div className="container-velmora">
          <div className="text-center mb-12">
            <p className="nav-link text-velmora-gold mb-3">Reviews</p>
            <h2 className="heading-2 text-velmora-text">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((review) => (
              <div
                key={review.id}
                className="bg-velmora-bg p-8 border border-velmora-border"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < review.rating ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-border'}
                    />
                  ))}
                </div>
                <p className="text-velmora-text-secondary leading-relaxed mb-4 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm text-velmora-text">{review.name}</span>
                  <span className="text-xs text-velmora-text-light">{review.product}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-section-mobile md:py-section bg-velmora-gold-muted">
        <div className="container-velmora text-center max-w-xl mx-auto">
          <h2 className="heading-2 text-velmora-text mb-4">
            Join the Velmora Circle
          </h2>
          <p className="text-velmora-text-secondary mb-2">
            Subscribe for 10% off your first order, plus exclusive access to new arrivals and styling tips.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 mt-8"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-velmora-surface border border-velmora-border text-velmora-text placeholder:text-velmora-text-light text-sm focus:border-velmora-gold transition-colors"
              required
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="text-xs text-velmora-text-light mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  )
}
