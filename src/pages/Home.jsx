import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Mail, Play } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import { useCart } from '@/context/CartContext'
import ProductCard from '@/components/ProductCard'
import SectionHeader from '@/components/SectionHeader'
import TrustBar from '@/components/TrustBar'
import ProductImage from '@/components/ProductImage'
import ImageBackground from '@/components/ImageBackground'

const testimonials = [
  {
    name: 'Sophia M.',
    text: 'The quality is unreal for the price. I wear my huggies every single day and they still look brand new.',
    rating: 5,
  },
  {
    name: 'Emma L.',
    text: 'Bought the Royal Heirloom Set as a gift and ended up keeping it for myself. Absolutely stunning packaging.',
    rating: 5,
  },
  {
    name: 'Olivia R.',
    text: 'Quiet luxury at its finest. The earrings are delicate but feel substantial. My new everyday pieces.',
    rating: 5,
  },
]

const ugcReels = [
  { id: 'ugc-1', caption: 'Everyday gold', query: '[ugc-caption-1]' },
  { id: 'ugc-2', caption: 'Stacked huggies', query: '[ugc-caption-2]' },
  { id: 'ugc-3', caption: 'Date night shine', query: '[ugc-caption-3]' },
  { id: 'ugc-4', caption: 'Minimal elegance', query: '[ugc-caption-4]' },
  { id: 'ugc-5', caption: 'Gift-worthy', query: '[ugc-caption-5]' },
  { id: 'ugc-6', caption: 'Soft gold glow', query: '[ugc-caption-6]' },
]

export default function Home() {
  const { addItem } = useCart()
  const homeRef = useRef(null)
  const reelsRef = useRef(null)

  const scrollReels = (direction) => {
    if (reelsRef.current) {
      reelsRef.current.scrollBy({
        left: direction === 'left' ? -280 : 280,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, homeRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={homeRef}>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center">
        <ImageBackground
          bgId="hero-velmora-main"
          query="[hero-title] [hero-subtitle]"
          ratio="16x9"
          width="1920"
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-espresso/30" />
        </ImageBackground>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl text-white animate-fade-in-up">
            <p className="text-xs uppercase tracking-widest mb-4 text-white/80">
              New Collection
            </p>
            <h1
              id="hero-title"
              className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6"
            >
              Crafted to be Treasured
            </h1>
            <p
              id="hero-subtitle"
              className="text-base md:text-lg text-white/85 mb-8 max-w-md leading-relaxed"
            >
              Demi-fine gold jewelry for the moments that matter. Designed in New York, worn everywhere.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 bg-clay text-white text-xs uppercase tracking-widest px-8 py-4 hover:bg-clay-dark transition-colors btn-luxury"
            >
              Shop the Collection
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Bestsellers */}
      <section className="py-16 md:py-24 bg-soft-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Bestsellers" subtitle="Most Loved" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 border-b border-espresso pb-1 text-sm uppercase tracking-widest hover:text-clay hover:border-clay transition-colors"
            >
              View All Pieces
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* UGC Reels */}
      <section className="py-16 md:py-24 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-warm-gray mb-2">#VelmoraWomen</p>
            <h2 className="font-serif text-3xl md:text-4xl text-espresso">Styled by You</h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scrollReels('left')}
              className="w-10 h-10 border border-hairline-dark flex items-center justify-center hover:border-espresso transition-colors"
              aria-label="Scroll left"
            >
              <ArrowRight size={16} className="rotate-180" />
            </button>
            <button
              onClick={() => scrollReels('right')}
              className="w-10 h-10 border border-hairline-dark flex items-center justify-center hover:border-espresso transition-colors"
              aria-label="Scroll right"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div
          ref={reelsRef}
          className="flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-4"
        >
          {ugcReels.map((reel) => (
            <div
              key={reel.id}
              className="relative flex-shrink-0 w-[220px] md:w-[260px] aspect-[9/16] overflow-hidden group"
            >
              <img
                data-strk-img-id={reel.id}
                data-strk-img={reel.query}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Play size={20} className="text-white fill-white ml-0.5" />
                </div>
              </div>
              <p
                id={reel.query.replace(/\[|\]/g, '')}
                className="absolute bottom-4 left-4 right-4 font-serif text-lg md:text-xl text-white italic"
              >
                {reel.caption}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-16 md:py-24 bg-soft-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Shop by Category" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-cream-dark"
              >
                <img
                  data-strk-img-id={`category-${category.id}`}
                  data-strk-img={`[category-title-${category.id}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-espresso/20 group-hover:bg-espresso/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3
                    id={`category-title-${category.id}`}
                    className="font-serif text-2xl md:text-3xl text-white uppercase tracking-widest border-b border-transparent group-hover:border-white pb-1 transition-all"
                  >
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="aspect-[4/5] md:aspect-square overflow-hidden bg-cream-dark">
              <img
                data-strk-img-id="brand-story-velmora"
                data-strk-img="[story-title] [story-text]"
                data-strk-img-ratio="1x1"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Velmora craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:py-8">
              <p className="text-xs uppercase tracking-widest text-warm-gray mb-4">Our Story</p>
              <h2
                id="story-title"
                className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso mb-6"
              >
                Jewelry Made for Real Life
              </h2>
              <p
                id="story-text"
                className="text-warm-gray leading-relaxed mb-6"
              >
                Velmora was founded on a simple belief: fine jewelry should feel accessible, wearable, and meaningful. Each piece is thoughtfully designed in New York and finished with 18k gold plating, so you can build a collection that moves with you from morning coffee to midnight celebrations.
              </p>
              <p className="text-warm-gray leading-relaxed mb-8">
                We work with small, family-owned workshops and prioritize nickel-free, hypoallergenic materials — because luxury should never come at the cost of comfort.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-widest border-b border-espresso pb-1 hover:text-clay hover:border-clay transition-colors"
              >
                Read Our Story
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-soft-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="What Our Customers Say" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="text-center md:text-left p-6 md:p-8 border border-hairline bg-cream"
              >
                <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-champagne text-champagne"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>
                <p className="font-serif text-xl md:text-2xl text-espresso italic leading-snug mb-6">
                  "{testimonial.text}"
                </p>
                <p className="text-xs uppercase tracking-widest text-warm-gray">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-20 bg-clay">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail size={28} className="mx-auto text-white/80 mb-4" strokeWidth={1.5} />
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">
            Join for 10% Off Your First Order
          </h2>
          <p className="text-white/80 mb-8">
            Be the first to know about new arrivals, styling notes, and member-only exclusives.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border border-white/30 text-white placeholder-white/60 px-5 py-3.5 text-sm focus:outline-none focus:border-white"
              required
            />
            <button
              type="submit"
              className="bg-espresso text-white text-xs uppercase tracking-widest px-8 py-3.5 hover:bg-espresso/90 transition-colors btn-luxury"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
