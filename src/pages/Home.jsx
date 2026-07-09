import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { getImageUrl } from '@/lib/images'
import { products, categories } from '@/data/products'
import { ProductCard } from '@/components/ProductCard'
import { StarRating } from '@/components/StarRating'

const bestsellers = products.slice(0, 5)

const ugcPosts = [
  { id: 'ugc-0', caption: 'Everyday gold', user: '@lena.m' },
  { id: 'ugc-1', caption: 'Date night layers', user: '@sophiewears' },
  { id: 'ugc-2', caption: 'Minimal magic', user: '@theaurajournal' },
  { id: 'ugc-3', caption: 'Gift to self', user: '@nina.gold' },
  { id: 'ugc-4', caption: 'Soft glam', user: '@demi.fine' },
  { id: 'ugc-5', caption: 'Treasured', user: '@velmoragirls' },
]

const testimonials = [
  { id: 1, name: 'Ella K.', text: 'The finish still looks brand new after months of daily wear. Quiet luxury at its best.' },
  { id: 2, name: 'Maya J.', text: 'I bought the Heirloom Set as a gift and ended up keeping one for myself. Stunning packaging.' },
  { id: 3, name: 'Sofia R.', text: 'Finally demi-fine jewelry that feels expensive without the markup. Fast shipping too.' },
]

function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[620px] w-full overflow-hidden">
      <div
        className="absolute inset-0"
        data-strk-bg-id="velmora-hero-bg"
        data-strk-bg="[hero-title] [hero-subtitle] gold jewelry editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-velmora-text/30" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
        <p className="mb-4 text-xs font-sans uppercase tracking-[0.3em] text-white/90">Demi-Fine Gold Jewelry</p>
        <h1 id="hero-title" className="max-w-3xl font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] mb-6">
          Crafted to be Treasured
        </h1>
        <p id="hero-subtitle" className="max-w-md font-sans text-base md:text-lg text-white/90 mb-10">
          Elevated essentials for everyday rituals and moments worth remembering.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 bg-velmora-accent px-8 py-4 font-sans text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-velmora-accent-hover"
        >
          Shop the Collection <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  )
}

function TrustBar() {
  const items = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']
  return (
    <div className="border-b border-velmora-border bg-velmora-bg">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-3">
          {items.map((item) => (
            <span key={item} className="text-[10px] md:text-xs font-sans uppercase tracking-widest text-velmora-muted">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function Bestsellers() {
  return (
    <section className="bg-velmora-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="mb-10 md:mb-14 text-center">
          <p className="text-[10px] font-sans uppercase tracking-[0.25em] text-velmora-accent mb-3">Most Loved</p>
          <h2 id="bestsellers-title" className="font-serif text-3xl md:text-5xl text-velmora-text">
            Bestsellers
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 md:gap-x-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} contextLabel="bestsellers-title" />
          ))}
        </div>
      </div>
    </section>
  )
}

function UGCReels() {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'left' ? -280 : 280, behavior: 'smooth' })
    }
  }

  return (
    <section className="bg-velmora-bg-warm py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12 mb-8 flex items-end justify-between">
        <div>
          <p className="text-[10px] font-sans uppercase tracking-[0.25em] text-velmora-accent mb-3">@velmora</p>
          <h2 id="ugc-title" className="font-serif text-3xl md:text-5xl text-velmora-text">Styled by You</h2>
        </div>
        <div className="hidden md:flex gap-2">
          <button onClick={() => scroll('left')} className="p-2 border border-velmora-border hover:bg-white transition-colors" aria-label="Scroll left">
            <ChevronLeft size={18} />
          </button>
          <button onClick={() => scroll('right')} className="p-2 border border-velmora-border hover:bg-white transition-colors" aria-label="Scroll right">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-5 md:px-8 lg:px-12 pb-4 scrollbar-hide"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {ugcPosts.map((post, idx) => (
          <div
            key={post.id}
            className="relative flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] overflow-hidden group"
            style={{ scrollSnapAlign: 'start' }}
          >
            <img
              alt={post.caption}
              src={getImageUrl(`velmora-ugc-${idx}`)}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-text/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p id={`ugc-caption-${idx}`} className="font-serif text-lg md:text-xl italic text-white leading-tight mb-1">
                {post.caption}
              </p>
              <p className="text-[10px] font-sans uppercase tracking-widest text-white/80">{post.user}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function CategoryTiles() {
  return (
    <section className="bg-velmora-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="mb-10 md:mb-14 text-center">
          <p className="text-[10px] font-sans uppercase tracking-[0.25em] text-velmora-accent mb-3">Explore</p>
          <h2 id="categories-title" className="font-serif text-3xl md:text-5xl text-velmora-text">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-velmora-bg-warm"
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={`velmora-cat-${cat.id}`}
                data-strk-bg={`[cat-label-${cat.id}] [categories-title] gold ${cat.label} jewelry`}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-velmora-text/20 group-hover:bg-velmora-text/30 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`cat-label-${cat.id}`}
                  className="font-serif text-2xl md:text-3xl uppercase tracking-widest-plus text-white border-b border-transparent group-hover:border-white pb-1 transition-all"
                >
                  {cat.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function BrandStory() {
  return (
    <section id="story" className="bg-velmora-bg">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square md:aspect-auto md:min-h-[600px]">
            <img
              alt="Velmora atelier"
              src={getImageUrl('velmora-story-img')}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-8 py-16 md:px-16 lg:px-24 bg-velmora-bg-warm">
            <p className="text-[10px] font-sans uppercase tracking-[0.25em] text-velmora-accent mb-4">Our Story</p>
            <h2 id="story-title" className="font-serif text-3xl md:text-5xl text-velmora-text mb-6">
              Designed for Modern Heirlooms
            </h2>
            <p id="story-subtitle" className="font-sans text-velmora-muted leading-relaxed mb-6">
              Velmora was born from a simple belief: fine moments deserve fine jewelry — without the traditional markup.
              Every piece is designed in-house, plated in 18K gold, and finished by hand for a warmth that lasts.
            </p>
            <p className="font-sans text-velmora-muted leading-relaxed mb-8">
              We create for the woman who buys herself flowers, who gifts with intention, and who knows that quiet
              luxury speaks louder than logos.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-velmora-text hover:text-velmora-accent transition-colors"
            >
              Read Our Story <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="bg-velmora-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="mb-10 md:mb-14 text-center">
          <p className="text-[10px] font-sans uppercase tracking-[0.25em] text-velmora-accent mb-3">Reviews</p>
          <h2 className="font-serif text-3xl md:text-5xl text-velmora-text">What Our Customers Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white border border-velmora-border p-8 md:p-10 text-center shadow-soft">
              <div className="flex justify-center mb-4">
                <StarRating rating={5} size={14} />
              </div>
              <p className="font-serif text-lg md:text-xl italic text-velmora-text mb-6 leading-relaxed">"{t.text}"</p>
              <p className="font-sans text-xs uppercase tracking-widest text-velmora-muted">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const submit = (e) => {
    e.preventDefault()
    if (!email) return
    setStatus('success')
    setEmail('')
  }

  return (
    <section className="bg-velmora-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="bg-velmora-dark px-6 py-14 md:py-20 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            data-strk-bg-id="velmora-newsletter-bg"
            data-strk-bg="[newsletter-title] gold jewelry flatlay"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1400"
          />
          <div className="relative z-10">
            <p className="text-[10px] font-sans uppercase tracking-[0.25em] text-velmora-dark-text/70 mb-3">The List</p>
            <h2 id="newsletter-title" className="font-serif text-3xl md:text-5xl text-velmora-dark-text mb-4">
              Join for 10% Off
            </h2>
            <p className="font-sans text-velmora-dark-text/80 mb-8 max-w-md mx-auto">
              Be the first to know about new drops, styling notes, and subscriber-only rituals.
            </p>
            {status === 'success' ? (
              <p className="font-serif text-xl text-velmora-dark-text">Welcome. Check your inbox for your code.</p>
            ) : (
              <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 border border-white/20 px-5 py-3.5 font-sans text-sm text-velmora-dark-text placeholder:text-white/50 outline-none focus:border-white/50"
                />
                <button
                  type="submit"
                  className="bg-velmora-accent px-8 py-3.5 font-sans text-xs font-medium uppercase tracking-widest text-white hover:bg-velmora-accent-hover transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCReels />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  )
}
