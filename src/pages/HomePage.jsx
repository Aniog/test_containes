import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Star, ChevronRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, testimonials, ugcItems, categories } from '@/data/products'
import ProductCard from '@/components/ProductCard'

function HeroSection() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="[hero-headline] [hero-subhead]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-velmora-ink/40" />
      </div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 text-[11px] uppercase tracking-[0.3em] text-white/80"
        >
          Demi-Fine Gold Jewelry
        </motion.p>
        <motion.h1
          id="hero-headline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] max-w-3xl"
        >
          Crafted to be Treasured
        </motion.h1>
        <motion.p
          id="hero-subhead"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 max-w-md text-sm md:text-base leading-relaxed text-white/80 font-light"
        >
          Elevated essentials for the modern woman — designed in 18K gold plate, made to last.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10"
        >
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 border border-white/60 px-8 py-4 text-xs uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white hover:text-velmora-ink"
          >
            Shop the Collection
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ]
  return (
    <div className="border-b border-velmora-stone/30 bg-velmora-cream">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 py-4">
        {items.map((item) => (
          <span
            key={item}
            className="text-[11px] uppercase tracking-widest text-velmora-warmgray"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

function BestsellersSection() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8 py-20 md:py-28">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <p className="mb-2 text-[11px] uppercase tracking-[0.3em] text-velmora-gold">
            Most Loved
          </p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide">
            Bestsellers
          </h2>
        </div>
        <Link
          to="/shop"
          className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-widest text-velmora-warmgray transition-colors hover:text-velmora-ink"
        >
          View All <ArrowRight size={14} />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-5 md:gap-x-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="mt-10 text-center md:hidden">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-velmora-warmgray transition-colors hover:text-velmora-ink"
        >
          View All <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  )
}

function UGCSection() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="bg-velmora-ink py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-10">
        <p className="mb-2 text-[11px] uppercase tracking-[0.3em] text-velmora-gold">
          @velmorajewelry
        </p>
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-white">
          Styled by You
        </h2>
      </div>
      <div className="flex gap-4 overflow-x-auto px-6 lg:px-8 pb-4 scrollbar-hide">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-[220px] md:w-[280px] aspect-[9/16] overflow-hidden group"
          >
            <img
              data-strk-img-id={item.id}
              data-strk-img={`[${item.id}-caption]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="h-full w-full object-cover transition-transform duration-700 ease-velmora group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-velmora-ink/20" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p
                id={`${item.id}-caption`}
                className="font-serif text-lg text-white italic"
              >
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function CategoriesSection() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8 py-20 md:py-28">
      <div className="mb-12 text-center">
        <p className="mb-2 text-[11px] uppercase tracking-[0.3em] text-velmora-gold">
          Shop by Category
        </p>
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide">
          Find Your Perfect Piece
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.id}`}
            className="group relative aspect-[4/5] overflow-hidden bg-velmora-sand"
          >
            <img
              data-strk-img-id={`cat-${cat.id}`}
              data-strk-img={`[cat-label-${cat.id}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={cat.name}
              className="h-full w-full object-cover transition-transform duration-700 ease-velmora group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-velmora-ink/30 transition-opacity duration-500 group-hover:bg-velmora-ink/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                id={`cat-label-${cat.id}`}
                className="text-xs uppercase tracking-[0.3em] text-white font-medium"
              >
                {cat.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

function BrandStorySection() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="bg-velmora-sand">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="aspect-square md:aspect-auto overflow-hidden">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-title] [brand-story-text]"
              data-strk-img-ratio="1x1"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-8 py-16 md:px-16 md:py-20">
            <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-velmora-gold">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl tracking-wide mb-6"
            >
              Designed for the Woman Who Knows
            </h2>
            <p
              id="brand-story-text"
              className="text-sm leading-relaxed text-velmora-warmgray mb-8 max-w-md"
            >
              Velmora was born from a belief that luxury should feel effortless. Every piece is designed in-house, crafted in 18K gold plate, and made to be worn — not saved for special occasions. Because the best jewelry is the kind you never want to take off.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-velmora-ink transition-colors hover:text-velmora-gold"
            >
              Read Our Story <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 py-20 md:py-28">
      <div className="mb-12 text-center">
        <p className="mb-2 text-[11px] uppercase tracking-[0.3em] text-velmora-gold">
          Reviews
        </p>
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide">
          Loved by Thousands
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="border border-velmora-stone/40 p-8 md:p-10 text-center transition-shadow duration-300 hover:shadow-lg"
          >
            <div className="mb-4 flex justify-center">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-velmora-gold text-velmora-gold"
                  />
                ))}
              </div>
            </div>
            <p className="text-sm leading-relaxed text-velmora-warmgray mb-6 italic">
              &ldquo;{t.text}&rdquo;
            </p>
            <p className="text-xs uppercase tracking-widest text-velmora-ink font-medium">
              {t.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

function NewsletterSection() {
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
    <section className="bg-velmora-gold">
      <div className="mx-auto max-w-2xl px-6 py-20 md:py-28 text-center">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-white mb-4">
          Join the Inner Circle
        </h2>
        <p className="text-sm text-white/80 mb-8">
          Subscribe for early access to new collections, styling tips, and 10% off your first order.
        </p>
        {submitted ? (
          <p className="text-white font-medium">Welcome to Velmora. Check your inbox.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/20 border border-white/30 px-5 py-4 text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-white/60"
            />
            <button
              type="submit"
              className="bg-white px-8 py-4 text-xs uppercase tracking-widest text-velmora-ink font-medium transition-colors hover:bg-velmora-cream"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UGCSection />
      <CategoriesSection />
      <BrandStorySection />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  )
}
