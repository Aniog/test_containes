import { ArrowRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { categories, products, testimonials, ugcPosts } from '@/data/products'
import { brandStoryImage, categoryImageAssets, ugcImageAssets } from '@/data/imageAssets'
import ProductGrid from '@/components/products/ProductGrid'

const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function HomePage({ onAddToCart }) {
  return (
    <main className="bg-velmora-ivory text-velmora-espresso">
      <section className="velmora-hero relative flex min-h-screen items-end overflow-hidden bg-velmora-espresso text-velmora-ivory">
        <div className="velmora-hero-bg absolute inset-0" />
        <div className="absolute right-[-9rem] top-20 hidden aspect-square w-[34rem] rounded-full border border-velmora-softGold/30 opacity-70 md:block" />
        <div className="absolute right-10 top-36 hidden aspect-square w-64 rounded-full border border-velmora-softGold/20 opacity-80 lg:block" />
        <div className="absolute bottom-20 right-6 hidden h-72 w-44 rounded-full border border-velmora-gold/35 bg-velmora-gold/10 shadow-glow md:block" />
        <div className="velmora-hero-overlay absolute inset-0" />
        <div className="relative mx-auto grid w-full max-w-7xl items-end gap-10 px-5 pb-20 pt-36 sm:px-8 md:pb-28 lg:grid-cols-[1fr_0.78fr] lg:px-10">
          <div className="max-w-3xl">
            <p id="hero-kicker" className="velmora-hero-kicker mb-5 text-xs font-bold uppercase tracking-luxe text-velmora-softGold">Demi-fine gold jewelry</p>
            <h1 id="hero-title" className="velmora-hero-heading font-serifDisplay text-6xl font-semibold leading-none text-velmora-ivory sm:text-7xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="velmora-hero-subhead mt-7 max-w-xl text-base leading-8 text-velmora-parchment sm:text-lg">
              Warm, luminous pieces made for everyday rituals, milestone gifts, and quiet moments of self-celebration.
            </p>
            <Link
              to="/shop"
              className="velmora-hero-cta mt-10 inline-flex items-center gap-3 bg-velmora-gold px-7 py-4 text-sm font-bold uppercase tracking-luxe text-velmora-espresso transition hover:bg-velmora-softGold"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative hidden min-h-[27rem] lg:block" aria-hidden="true">
            <div className="absolute right-8 top-0 h-80 w-80 rounded-full border border-velmora-softGold/40" />
            <div className="absolute bottom-0 right-16 h-64 w-44 rounded-full bg-velmora-softGold/15 shadow-glow" />
            <div className="absolute bottom-12 right-40 h-44 w-44 rounded-full border border-velmora-gold/40" />
            <div className="absolute bottom-24 right-28 h-24 w-24 rounded-full bg-velmora-gold/30 blur-2xl" />
          </div>
        </div>
      </section>

      <section className="border-y border-velmora-line bg-velmora-pearl text-velmora-espresso">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-velmora-line px-5 text-center sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4 lg:px-10">
          {trustItems.map((item) => (
            <p key={item} className="py-4 text-xs font-bold uppercase tracking-luxe text-velmora-taupe">{item}</p>
          ))}
        </div>
      </section>

      <section id="bestsellers" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-10">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-luxe text-velmora-gold">Most loved</p>
            <h2 className="mt-3 font-serifDisplay text-5xl font-semibold text-velmora-espresso md:text-6xl">Bestsellers</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-velmora-taupe">
            Five luminous signatures, designed to look editorial and feel effortless from morning coffee to evening plans.
          </p>
        </div>
        <ProductGrid products={products} onAddToCart={onAddToCart} imageScope="home-bestseller" />
      </section>

      <section id="journal" className="overflow-hidden bg-velmora-parchment py-16 text-velmora-espresso md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-luxe text-velmora-gold">Seen on you</p>
              <h2 className="mt-3 font-serifDisplay text-5xl font-semibold md:text-6xl">Velmora in Motion</h2>
            </div>
            <p className="hidden max-w-xs text-sm leading-7 text-velmora-taupe md:block">A reel-inspired strip of soft shine, real styling, and gifting moments.</p>
          </div>
        </div>
        <div className="flex snap-x gap-5 overflow-x-auto px-5 pb-4 sm:px-8 lg:px-10">
          {ugcPosts.map((post) => (
            <article key={post.id} className="group relative aspect-[9/16] w-64 shrink-0 snap-start overflow-hidden bg-velmora-espresso shadow-soft sm:w-72">
              <img
                src={ugcImageAssets[post.id]}
                alt={post.caption}
                loading="lazy"
                className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/80 via-transparent to-transparent" />
              <p id={`ugc-${post.id}-caption`} className="absolute inset-x-5 bottom-5 font-serifDisplay text-2xl font-semibold leading-tight text-velmora-ivory">
                {post.caption}
              </p>
            </article>
          ))}
        </div>
        <h2 id="ugc-section-title" className="sr-only">Reel-style warm gold jewelry worn on ear and neck</h2>
      </section>

      <section id="collections" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-10">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-luxe text-velmora-gold">Shop by category</p>
          <h2 className="mt-3 font-serifDisplay text-5xl font-semibold text-velmora-espresso md:text-6xl">A Piece for Every Ritual</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.name} to={`/shop?category=${category.name}`} className="group relative aspect-square overflow-hidden bg-velmora-espresso shadow-soft">
              <img
                src={categoryImageAssets[category.name]}
                alt={category.name}
                loading="lazy"
                className="h-full w-full object-cover opacity-85 transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/85 via-velmora-espresso/20 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 translate-y-3 transition duration-300 group-hover:translate-y-0">
                <h3 id={`category-${category.name}-title`} className="font-serifDisplay text-4xl font-semibold text-velmora-ivory">{category.name}</h3>
                <p id={`category-${category.name}-desc`} className="mt-2 text-sm leading-6 text-velmora-parchment opacity-0 transition duration-300 group-hover:opacity-100">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="about" className="bg-velmora-espresso text-velmora-ivory">
        <div className="mx-auto grid max-w-7xl gap-0 lg:grid-cols-2">
          <div className="min-h-[34rem] bg-cover bg-center" style={{ backgroundImage: `url(${brandStoryImage})` }} />
          <div className="flex items-center px-5 py-16 sm:px-8 md:py-24 lg:px-16">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-luxe text-velmora-softGold">Our story</p>
              <h2 id="story-title" className="mt-4 font-serifDisplay text-5xl font-semibold leading-tight text-velmora-ivory md:text-6xl">
                Made close to the skin, designed to stay close to the heart.
              </h2>
              <p id="story-copy" className="mt-7 text-base leading-8 text-velmora-sand">
                Velmora creates premium-but-accessible demi-fine jewelry with considered proportions, warm gold finishes, and gift-ready presentation. Every piece is selected for the rituals women repeat: dressing, gifting, celebrating, remembering.
              </p>
              <a href="#" className="mt-9 inline-flex items-center gap-3 border-b border-velmora-softGold pb-2 text-sm font-bold uppercase tracking-luxe text-velmora-softGold transition hover:text-velmora-ivory">
                Our Story
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-10">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-luxe text-velmora-gold">Love notes</p>
          <h2 className="mt-3 font-serifDisplay text-5xl font-semibold text-velmora-espresso md:text-6xl">Quietly adored</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((review) => (
            <article key={review.name} className="border border-velmora-line bg-velmora-pearl p-7 text-velmora-espresso shadow-soft">
              <div className="flex gap-1 text-velmora-gold" aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-6 font-serifDisplay text-2xl leading-8 text-velmora-espresso">“{review.quote}”</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-luxe text-velmora-taupe">{review.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 md:pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl bg-velmora-gold px-6 py-12 text-velmora-espresso shadow-glow sm:px-10 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-luxe">Velmora list</p>
              <h2 className="mt-3 font-serifDisplay text-5xl font-semibold md:text-6xl">Join for 10% off your first order</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-cacao">Receive early access to new drops, gift edits, and styling notes from the Velmora journal.</p>
            </div>
            <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input id="newsletter-email" type="email" required placeholder="you@example.com" className="min-h-14 flex-1 border border-velmora-espresso/25 bg-velmora-ivory px-5 text-sm text-velmora-espresso placeholder:text-velmora-taupe focus:border-velmora-espresso focus:outline-none" />
              <button type="submit" className="min-h-14 bg-velmora-espresso px-7 text-sm font-bold uppercase tracking-luxe text-velmora-ivory transition hover:bg-velmora-cacao">Join</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
