import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Star, ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ProductCard } from '@/components/ProductCard'
import { Newsletter } from '@/components/Newsletter'
import { getBestsellers } from '@/data/products'

const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

const ugcItems = [
  { id: 'ugc-1', caption: 'Golden hour essentials' },
  { id: 'ugc-2', caption: 'Layered for brunch' },
  { id: 'ugc-3', caption: 'Wedding guest ready' },
  { id: 'ugc-4', caption: 'Everyday sparkle' },
  { id: 'ugc-5', caption: 'Gift made simple' },
]

const categoryTiles = [
  { id: 'earrings', name: 'Earrings', query: 'gold earrings demi fine jewelry' },
  { id: 'necklaces', name: 'Necklaces', query: 'gold necklace pendant jewelry' },
  { id: 'huggies', name: 'Huggies', query: 'gold huggie hoop earrings' },
]

const testimonials = [
  { id: 't1', name: 'Sofia M.', text: 'The quality is unreal for the price. I wear my huggies every single day.' },
  { id: 't2', name: 'Elena R.', text: 'Bought the heirloom set for my sister — the packaging alone made her cry.' },
  { id: 't3', name: 'Naomi K.', text: 'Quiet luxury exactly as described. Already planning my next purchase.' },
]

export default function HomePage() {
  const bestsellers = getBestsellers(5)
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return undefined
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="flex min-h-screen flex-col bg-cream-100">
      {/* Hero */}
      <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-espresso-800"
          data-strk-bg-id="hero-bg"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso-900/60 via-espresso-900/30 to-espresso-900/70" />
        <div className="container-velmora relative z-10 flex h-full flex-col items-center justify-center text-center text-cream-100">
          <span className="section-label mb-4 text-gold-light">Demi-Fine Gold Jewelry</span>
          <h1 id="hero-title" className="max-w-3xl font-display text-5xl font-medium leading-[1.1] md:text-7xl lg:text-8xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-md font-sans text-base font-light leading-relaxed text-cream-100/90 md:text-lg">
            Timeless pieces designed for everyday luxury — made to layer, gift, and keep forever.
          </p>
          <Link to="/shop" className="btn-primary mt-10">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust bar */}
      <div className="border-b border-warmgray-200 bg-cream-100">
        <div className="container-velmora">
          <div className="grid grid-cols-2 gap-px md:grid-cols-4">
            {trustItems.map((item) => (
              <div
                key={item}
                className="flex items-center justify-center py-4 text-center font-sans text-[11px] font-medium uppercase tracking-widest text-warmgray-600 md:py-5"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="py-16 md:py-24">
        <div className="container-velmora">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="section-label">Most Loved</span>
              <h2 id="bestsellers-title" className="mt-2 font-display text-3xl md:text-4xl">Bestsellers</h2>
            </div>
            <Link to="/shop" className="group inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest text-espresso-900 transition-colors hover:text-gold-dark">
              View All
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} contextId="bestsellers-title" />
            ))}
          </div>
        </div>
      </section>

      {/* UGC Reel */}
      <section className="border-t border-warmgray-200 bg-cream-100 py-12 md:py-16">
        <div className="container-velmora mb-6 flex items-center justify-between">
          <h2 id="ugc-section-title" className="font-display text-2xl md:text-3xl">#VelmoraWomen</h2>
          <Link to="/shop" className="font-sans text-xs font-semibold uppercase tracking-widest text-warmgray-500 hover:text-espresso-900">
            Follow @velmora
          </Link>
        </div>
        <div className="flex gap-4 overflow-x-auto px-5 pb-4 md:px-8 lg:px-12 scrollbar-hide">
          {ugcItems.map((item) => (
            <div key={item.id} className="relative w-[170px] flex-shrink-0 md:w-[220px]">
              <div className="aspect-[9/16] overflow-hidden bg-warmgray-100">
                <img
                  data-strk-img-id={item.id}
                  data-strk-img={`[${item.id}-caption] [ugc-section-title]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso-900/70 via-transparent to-transparent" />
              <p id={`${item.id}-caption`} className="absolute bottom-4 left-4 right-4 font-serif text-sm italic text-cream-100">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Category tiles */}
      <section className="py-16 md:py-24">
        <div className="container-velmora">
          <div className="mb-10 text-center">
            <span className="section-label">Shop by Category</span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl">Find Your Finish</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {categoryTiles.map((tile) => (
              <Link
                key={tile.id}
                to={`/shop?category=${tile.id}`}
                className="group relative aspect-[3/4] overflow-hidden bg-warmgray-100 md:aspect-[4/5]"
              >
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  data-strk-bg-id={`category-${tile.id}`}
                  data-strk-bg={`[category-${tile.id}-label]`}
                  data-strk-bg-ratio="3x4"
                  data-strk-bg-width="800"
                />
                <div className="absolute inset-0 bg-espresso-900/20 transition-colors group-hover:bg-espresso-900/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 id={`category-${tile.id}-label`} className="font-serif text-2xl font-medium uppercase tracking-widest-xl text-cream-100 md:text-3xl">
                    {tile.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand story */}
      <section className="border-t border-warmgray-200 bg-cream-100 py-16 md:py-24">
        <div className="container-velmora">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="aspect-[4/5] overflow-hidden bg-warmgray-100 md:aspect-[3/4]">
              <img
                data-strk-img-id="brand-story-img"
                data-strk-img="[brand-story-title] [brand-story-text]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Velmora artisan crafting gold jewelry"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="section-label">Our World</span>
              <h2 id="brand-story-title" className="mt-3 font-display text-3xl font-medium md:text-5xl">
                Designed for the Modern Muse
              </h2>
              <p id="brand-story-text" className="mt-6 max-w-md font-sans text-base leading-relaxed text-warmgray-600">
                Velmora was born from a belief that fine jewelry should feel accessible without ever feeling ordinary. Every piece is 18K gold plated, hypoallergenic, and made to move with you from morning coffee to midnight toasts.
              </p>
              <Link to="/about" className="btn-secondary mt-8">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-cream-50 py-16 md:py-24">
        <div className="container-velmora">
          <div className="mb-10 text-center">
            <span className="section-label">From Our Customers</span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl">Loved By Many</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.id} className="border border-warmgray-200 bg-cream-100 p-8 text-center transition-shadow hover:shadow-sm">
                <div className="flex justify-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-gold text-gold" strokeWidth={1.5} />
                  ))}
                </div>
                <p className="mt-5 font-serif text-lg italic leading-relaxed text-espresso-900">
                  “{t.text}”
                </p>
                <p className="mt-5 font-sans text-xs font-semibold uppercase tracking-widest text-warmgray-500">
                  {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  )
}
