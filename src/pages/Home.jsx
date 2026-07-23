import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import { products, categories, testimonials, ugcCards } from '../data/products'
import ProductCard from '../components/ProductCard'

/* ───────────────────────────── Hero ───────────────────────────── */

function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-deep-black"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="luxury gold jewelry on dark velvet editorial close-up warm lighting"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto animate-fade-in">
        <p className="font-sans text-xs uppercase tracking-widest-xl text-gold-light mb-6">
          Demi-Fine Gold Jewelry
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 leading-[1.1]">
          Crafted to be
          <br />
          <em className="italic">Treasured</em>
        </h1>
        <p className="font-sans text-base md:text-lg text-gray-300 mb-10 max-w-lg mx-auto leading-relaxed">
          18K gold-plated jewelry designed for everyday luxury. Handcrafted with intention,
          priced with accessibility.
        </p>
        <Link
          to="/collection"
          className="btn-primary inline-block text-center"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-10 bg-white/40 mx-auto" />
      </div>
    </section>
  )
}

/* ─────────────────────────── Trust Bar ─────────────────────────── */

function TrustBar() {
  const trustItems = [
    { icon: Truck, label: 'Free Worldwide Shipping' },
    { icon: RotateCcw, label: '30-Day Returns' },
    { icon: Gem, label: '18K Gold Plated' },
    { icon: ShieldCheck, label: 'Hypoallergenic' },
  ]

  return (
    <section className="bg-white border-y border-sand py-4">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {trustItems.map(item => (
            <div key={item.label} className="flex items-center gap-2.5">
              <item.icon size={16} className="text-gold" strokeWidth={1.5} />
              <span className="font-sans text-xs uppercase tracking-widest text-graphite">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────── Bestsellers Grid ─────────────────────── */

function Bestsellers() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-wide">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs uppercase tracking-widest-xl text-gold mb-4">
            Most Loved
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal">
            Bestsellers
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────── UGC Reel Strip ──────────────────────── */

function UGCReel() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 mb-8 md:mb-12">
        <p className="font-sans text-xs uppercase tracking-widest-xl text-gold mb-3">
          #WornByVelmora
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
          Styled by You
        </h2>
      </div>

      <div className="overflow-x-auto hide-scrollbar px-4 md:px-8 lg:px-16">
        <div className="flex gap-4 md:gap-5" style={{ width: 'max-content' }}>
          {ugcCards.map(card => (
            <div
              key={card.id}
              className="relative w-[180px] md:w-[220px] h-[320px] md:h-[380px] flex-shrink-0 overflow-hidden rounded-lg"
            >
              <div
                className="absolute inset-0 bg-warm-gray"
                data-strk-bg={`[ugc-caption-${card.id}] gold jewelry styling`}
                data-strk-bg-id={`ugc-card-${card.id}`}
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="400"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <p
                className="absolute bottom-4 left-4 right-4 font-serif text-base md:text-lg text-white italic"
                id={`ugc-caption-${card.id}`}
              >
                {card.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ────────────────────── Shop by Category ──────────────────────── */

function CategoryTiles() {
  const categoryImages = {
    earrings: { query: 'elegant gold earrings collection editorial display', ratio: '3x4', width: '600' },
    necklaces: { query: 'gold necklaces collection editorial styling', ratio: '3x4', width: '600' },
    huggies: { query: 'gold huggie earrings collection warm styling', ratio: '3x4', width: '600' },
  }

  return (
    <section className="section-padding bg-ivory">
      <div className="container-wide">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs uppercase tracking-widest-xl text-gold mb-4">
            Discover
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(category => {
            const img = categoryImages[category.id]
            return (
              <Link
                key={category.id}
                to={`/collection?category=${category.slug}`}
                className="group relative aspect-[3/4] md:aspect-[3/4] overflow-hidden rounded-lg"
              >
                <div
                  className="absolute inset-0 bg-warm-gray transition-transform duration-700 group-hover:scale-105"
                  data-strk-bg={`[category-label-${category.id}] ${img.query}`}
                  data-strk-bg-id={`category-tile-${category.id}`}
                  data-strk-bg-ratio={img.ratio}
                  data-strk-bg-width={img.width}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-end justify-center pb-8 md:pb-12">
                  <div className="text-center">
                    <span
                      className="font-serif text-3xl md:text-4xl text-white tracking-wide"
                      id={`category-label-${category.id}`}
                    >
                      {category.name}
                    </span>
                    <div className="w-8 h-[1px] bg-gold mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

/* ──────────────────────── Brand Story ─────────────────────────── */

function BrandStory() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div
            className="aspect-[4/5] bg-warm-gray rounded-lg overflow-hidden"
            data-strk-bg-id="brand-story-img"
            data-strk-bg="artisan hands crafting gold jewelry workshop warm lighting"
            data-strk-bg-ratio="3x4"
            data-strk-bg-width="800"
          />

          {/* Text */}
          <div className="lg:pl-8">
            <p className="font-sans text-xs uppercase tracking-widest-xl text-gold mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6 leading-tight">
              Jewelry That Feels Like
              <br />
              <em className="italic">Home</em>
            </h2>
            <div className="w-12 h-[1px] bg-gold mb-8" />
            <p className="font-sans text-base text-graphite leading-relaxed mb-6">
              Velmora was born from a simple belief: fine jewelry should be an everyday
              luxury, not a special-occasion splurge. We craft each piece from 18K
              gold-plated surgical steel — ensuring it's hypoallergenic, durable, and
              beautiful enough to become part of your daily ritual.
            </p>
            <p className="font-sans text-base text-graphite leading-relaxed mb-8">
              From our studio to your jewelry box, every Velmora piece is designed with
              intention, packaged with care, and priced with accessibility in mind.
              Because you deserve to feel treasured — every single day.
            </p>
            <Link
              to="#"
              className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-gold hover:text-gold-dark transition-colors group"
            >
              Read Our Full Story
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────── Testimonials ────────────────────────── */

function Testimonials() {
  return (
    <section className="section-padding bg-warm-gray">
      <div className="container-wide">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs uppercase tracking-widest-xl text-gold mb-4">
            Customer Love
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((review, index) => (
            <div
              key={index}
              className="bg-white p-8 md:p-10 rounded-lg shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="font-sans text-base text-graphite leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              <div className="border-t border-sand pt-4">
                <p className="font-sans text-sm font-medium text-charcoal">
                  {review.name}
                </p>
                <p className="font-sans text-xs text-graphite mt-0.5">
                  Purchased: {review.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────── Newsletter ──────────────────────────── */

function Newsletter() {
  return (
    <section className="bg-charcoal section-padding">
      <div className="container-wide text-center">
        <div className="max-w-xl mx-auto">
          <p className="font-sans text-xs uppercase tracking-widest-xl text-gold mb-4">
            Stay Connected
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Join for 10% Off Your First Order
          </h2>
          <p className="font-sans text-sm text-gray-400 mb-8 leading-relaxed">
            Be the first to discover new collections, exclusive offers, and jewelry
            styling tips. No spam — just sparkle.
          </p>

          <form onSubmit={e => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-500 font-sans text-sm py-3 px-0 focus:outline-none focus:border-gold transition-colors"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>

          <p className="font-sans text-[11px] text-gray-500 mt-4">
            By subscribing, you agree to our privacy policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────── Home Page ──────────────────────────── */

export default function Home() {
  const pageRef = useRef(null)

  useEffect(() => {
    const container = pageRef.current
    if (!container) return
    return ImageHelper.loadImages(strkImgConfig, container)
  }, [])

  return (
    <div ref={pageRef}>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  )
}
