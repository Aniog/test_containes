import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'
import { products, categories, testimonials } from '@/data/products'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const Home = () => {
  const bestsellers = products.slice(0, 5)

  return (
    <div className="bg-brand-bg">
      {/* Hero */}
      <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
        <img
          src="https://picsum.photos/seed/velmora-hero/1600/1000"
          alt="Velmora hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl text-white">
            <h1 className="font-serif text-5xl font-semibold leading-tight tracking-wide md:text-6xl">
              Crafted to be Treasured
            </h1>
            <p className="mt-4 text-base text-white/80 md:text-lg">
              Demi-fine gold jewelry designed for quiet luxury and everyday elegance.
            </p>
            <div className="mt-8">
              <Button asChild variant="accent" size="lg">
                <Link to="/shop" className="inline-flex items-center gap-2">
                  Shop the Collection <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="border-b border-brand-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs font-medium uppercase tracking-widest text-brand-muted">
            <span>Free Worldwide Shipping</span>
            <span className="hidden h-3 w-px bg-brand-line sm:block" />
            <span>30-Day Returns</span>
            <span className="hidden h-3 w-px bg-brand-line sm:block" />
            <span>18K Gold Plated</span>
            <span className="hidden h-3 w-px bg-brand-line sm:block" />
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-brand-ink">Bestsellers</h2>
            <p className="mt-1 text-sm text-brand-muted">Our most loved pieces, chosen by you.</p>
          </div>
          <Link to="/shop" className="text-sm font-medium text-brand-accent hover:text-brand-accentHover">
            View all
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {bestsellers.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group">
              <div className="relative overflow-hidden rounded-2xl bg-brand-warm">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 hidden items-center justify-center bg-black/20 p-3 backdrop-blur-sm group-hover:flex">
                  <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-brand-ink">
                    Quick Add
                  </span>
                </div>
              </div>
              <div className="mt-3">
                <h3 className="font-serif text-base font-medium uppercase tracking-wide text-brand-ink">{product.name}</h3>
                <p className="mt-1 text-sm text-brand-muted">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* UGC Reel-style row */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-ink">Worn by you</h2>
          <p className="mt-1 text-sm text-brand-muted">Tag @velmora to be featured.</p>
          <div className="mt-6 flex gap-4 overflow-x-auto pb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="relative h-80 w-48 flex-shrink-0 overflow-hidden rounded-2xl bg-brand-warm">
                <img
                  src={`https://picsum.photos/seed/velmora-ugc-${i}/600/800`}
                  alt="UGC"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-3">
                  <p className="font-serif text-sm text-white">Real moments, real style.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-semibold text-brand-ink">Shop by category</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {categories.map((cat) => (
            <Link key={cat.id} to={`/shop?category=${cat.id}`} className="group relative h-72 overflow-hidden rounded-2xl">
              <img src={cat.image} alt={cat.label} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="font-serif text-xl font-medium text-white">{cat.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand story */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl grid grid-cols-1 gap-8 px-4 py-16 sm:px-6 lg:px-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://picsum.photos/seed/velmora-story/900/700"
              alt="Brand story"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="font-serif text-3xl font-semibold text-brand-ink">Our Story</h2>
            <p className="mt-4 text-sm leading-relaxed text-brand-muted">
              Velmora was born from a simple belief: fine jewelry should feel attainable, intentional, and timeless. Every piece is designed in-house and crafted with care, using quality materials that are meant to be worn every day.
            </p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-accent hover:text-brand-accentHover">
              Read more <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-semibold text-brand-ink">What our customers say</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.id} className="rounded-2xl border border-brand-line bg-white p-6">
              <div className="flex items-center gap-1 text-brand-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm text-brand-ink">“{t.text}”</p>
              <p className="mt-3 text-xs font-medium uppercase tracking-widest text-brand-muted">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-brand-ink">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <h2 className="font-serif text-3xl font-semibold text-white">Join for 10% off your first order</h2>
            <p className="mt-2 text-sm text-white/70">Be the first to know about new releases and exclusive offers.</p>
            <form className="mt-6 flex w-full max-w-md gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="h-11 flex-1 rounded-full border border-white/20 bg-white/10 px-4 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-brand-accent/60"
              />
              <Button variant="accent">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
