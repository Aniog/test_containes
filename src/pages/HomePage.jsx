import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { ArrowRight } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import { BrandStory, CategoryTiles, Newsletter, Testimonials, TrustBar, UgcStrip } from '@/components/home/HomeSections'
import strkImgConfig from '@/strk-img-config.json'

function HomePage({ onAddToCart }) {
  const pageRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <main ref={pageRef} id="top" className="bg-velmora-ivory text-velmora-ink">
      <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-velmora-ink pt-28 text-velmora-ivory">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          data-strk-bg-id="velmora-hero-bg-2f6d"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink via-velmora-ink/45 to-velmora-ink/20" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-5 font-sans text-xs font-bold uppercase tracking-[0.42em] text-velmora-champagne">
              Demi-fine gold jewelry
            </p>
            <h1 id="hero-title" className="font-serif text-6xl leading-none tracking-tight sm:text-7xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="mt-6 max-w-xl font-sans text-base leading-8 text-velmora-sand sm:text-lg">
              Warm, quietly luminous pieces designed for everyday rituals, meaningful gifting, and the golden moments in between.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-3 bg-velmora-champagne px-7 py-4 font-sans text-xs font-bold uppercase tracking-[0.28em] text-velmora-ink transition hover:bg-velmora-gold hover:text-velmora-porcelain focus:outline-none focus:ring-2 focus:ring-velmora-champagne focus:ring-offset-2 focus:ring-offset-velmora-ink"
              >
                Shop the Collection <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/shop?category=Gift Sets"
                className="inline-flex items-center justify-center border border-velmora-sand/50 px-7 py-4 font-sans text-xs font-bold uppercase tracking-[0.28em] text-velmora-ivory transition hover:border-velmora-champagne hover:text-velmora-champagne focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
              >
                Gift Edit
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.35em] text-velmora-gold">Bestsellers</p>
              <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">Beloved, polished, giftable.</h2>
            </div>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 self-start border-b border-velmora-gold pb-2 font-sans text-xs font-bold uppercase tracking-[0.25em] text-velmora-ink transition hover:text-velmora-gold"
            >
              View all pieces <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} contextKey="home-bestseller" />
            ))}
          </div>
        </div>
      </section>

      <UgcStrip />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  )
}

export default HomePage
