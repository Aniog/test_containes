import { ArrowRight, Gem, Globe, HeartHandshake, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/product/ProductCard'
import { categories, products, testimonials, ugcMoments } from '../data/products'

const trustItems = [
  { label: 'Free Worldwide Shipping', icon: Globe },
  { label: '30-Day Returns', icon: HeartHandshake },
  { label: '18K Gold Plated', icon: Gem },
  { label: 'Hypoallergenic', icon: ShieldCheck },
]

const HomePage = ({ onAddToCart }) => {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-surface)]">
      <section className="relative isolate overflow-hidden">
        <p id="hero-image-prompt" className="sr-only">
          Warm-lit close-up of gold jewelry on a woman model, quiet luxury editorial portrait, premium demi-fine jewelry styling
        </p>
        <div
          className="absolute inset-0"
          data-strk-bg-id="velmora-hero-bg-4b8d1f"
          data-strk-bg="[hero-image-prompt] [hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,12,10,0.88)_0%,rgba(16,12,10,0.56)_44%,rgba(16,12,10,0.2)_100%)]" />
        <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[88rem] items-end px-5 pb-16 pt-28 sm:px-8 md:pb-24 lg:px-12 lg:pt-36">
          <div className="max-w-2xl space-y-8">
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-surface)]/80">
              Velmora Fine Jewelry
            </p>
            <div className="space-y-5">
              <h1 id="hero-title" className="font-display text-5xl leading-none text-[var(--color-surface)] sm:text-6xl lg:text-8xl">
                Crafted to be Treasured
              </h1>
              <p id="hero-subtitle" className="max-w-xl text-base leading-8 text-[var(--color-surface)]/78 sm:text-lg">
                Quietly luxurious demi-fine jewelry for everyday polish, gifting rituals, and golden-hour confidence.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link to="/shop" className="btn-primary justify-center sm:justify-start">
                Shop the Collection
              </Link>
              <Link to="/#story" className="btn-secondary justify-center sm:justify-start text-[var(--color-surface)] border-white/20 bg-white/5 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]">
                Discover Velmora
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[color:var(--color-border-soft)] bg-[rgba(248,243,236,0.08)]">
        <div className="mx-auto grid w-full max-w-[88rem] gap-4 px-5 py-4 text-[var(--color-surface)]/88 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-12">
          {trustItems.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="flex items-center gap-3 text-sm uppercase tracking-[0.22em]">
                <Icon className="h-4 w-4 text-[var(--color-accent)]" />
                <span>{item.label}</span>
              </div>
            )
          })}
        </div>
      </section>

      <section className="bg-[var(--color-surface)] text-[var(--color-foreground)] section-space">
        <div className="section-shell space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="eyebrow">Curated favorites</p>
              <h2 id="shop-section-title" className="font-display text-4xl sm:text-5xl">Bestsellers</h2>
              <p className="max-w-2xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                Everyday signatures and gift-ready pieces, chosen for their sculptural warmth and easy styling.
              </p>
            </div>
            <Link to="/shop" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.24em] text-[var(--color-foreground)] transition hover:text-[var(--color-accent)]">
              Shop all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} priority={index < 2} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-background)] py-4 md:py-8">
        <div className="section-shell space-y-8 px-0">
          <div className="flex flex-col gap-3 px-5 sm:px-8 lg:px-12">
            <p className="eyebrow text-[var(--color-surface)]/70">Styled by the Velmora circle</p>
            <h2 className="font-display text-4xl text-[var(--color-surface)] sm:text-5xl">A reel of golden moments</h2>
          </div>
          <div className="hide-scrollbar flex snap-x gap-4 overflow-x-auto px-5 pb-2 sm:px-8 lg:px-12">
            {ugcMoments.map((moment) => (
              <article
                key={moment.id}
                className="group relative min-w-[15.5rem] snap-start overflow-hidden rounded-[2rem] border border-white/10 bg-[var(--color-surface-strong)] shadow-[0_18px_44px_rgba(0,0,0,0.24)] sm:min-w-[17rem]"
              >
                <img
                  alt={moment.title}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  data-strk-img-id={moment.imgId}
                  data-strk-img={`[${moment.descId}] [${moment.titleId}] jewelry worn on model editorial vertical`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="900"
                  className="aspect-[9/16] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,12,10,0)_20%,rgba(16,12,10,0.82)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-[var(--color-surface)]">
                  <h3 id={moment.titleId} className="font-display text-3xl leading-none">
                    {moment.title}
                  </h3>
                  <p id={moment.descId} className="mt-3 text-sm leading-6 text-[var(--color-surface)]/76">
                    {moment.subtitle}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface)] text-[var(--color-foreground)] section-space">
        <div className="section-shell space-y-10">
          <div className="space-y-3">
            <p className="eyebrow">Explore by category</p>
            <h2 className="font-display text-4xl sm:text-5xl">Shop the edit</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/shop?category=${category.name}`}
                className="group relative overflow-hidden rounded-[2rem] bg-[var(--color-surface-strong)]"
              >
                <img
                  alt={category.name}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  data-strk-img-id={category.imgId}
                  data-strk-img={`[${category.descId}] [${category.titleId}] warm gold jewelry still life category image`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="900"
                  className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,12,10,0.05)_26%,rgba(16,12,10,0.8)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-[var(--color-surface)]">
                  <h3 id={category.titleId} className="font-display text-4xl">{category.name}</h3>
                  <p id={category.descId} className="mt-3 max-w-xs text-sm leading-6 text-[var(--color-surface)]/76 opacity-0 transition duration-300 group-hover:opacity-100">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="story" className="bg-[var(--color-background)] text-[var(--color-surface)] section-space">
        <div className="section-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-[var(--color-surface-strong)] shadow-[0_20px_50px_rgba(0,0,0,0.28)]">
            <img
              alt="Velmora brand story"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              data-strk-img-id="velmora-story-image-0ca4df"
              data-strk-img="[story-copy] [story-title] [story-label]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1200"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="space-y-6 lg:pl-10">
            <p id="story-label" className="eyebrow text-[var(--color-surface)]/68">Our world</p>
            <h2 id="story-title" className="font-display text-4xl sm:text-5xl lg:text-6xl">
              Quiet luxury, made for daily rituals
            </h2>
            <p id="story-copy" className="max-w-xl text-base leading-8 text-[var(--color-surface)]/78">
              Velmora was created for the woman who wants her jewelry to feel polished, personal, and easy to live in. Every piece is chosen to hold its glow from weekday meetings to evening gifting moments.
            </p>
            <Link to="/shop" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.26em] text-[var(--color-accent)] transition hover:text-[var(--color-surface)]">
              Our Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface)] text-[var(--color-foreground)] section-space">
        <div className="section-shell space-y-10">
          <div className="space-y-3 text-center">
            <p className="eyebrow">Loved by customers</p>
            <h2 className="font-display text-4xl sm:text-5xl">What they’re saying</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.id}
                className="rounded-[2rem] border border-[color:var(--color-border)] bg-[var(--color-surface-subtle)] p-8 shadow-[0_14px_35px_rgba(18,12,10,0.05)]"
              >
                <div className="mb-6 flex gap-1 text-[var(--color-accent)]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index}>★</span>
                  ))}
                </div>
                <p className="text-base leading-8 text-[var(--color-foreground)]">“{testimonial.quote}”</p>
                <p className="mt-6 text-sm uppercase tracking-[0.24em] text-[var(--color-muted)]">{testimonial.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="journal" className="bg-[var(--color-surface)] text-[var(--color-foreground)] section-space">
        <div className="section-shell grid gap-5 lg:grid-cols-3">
          {[
            {
              id: 'journal-1',
              label: 'Styling notes',
              title: 'How to layer delicate necklaces without losing the quiet-luxury feel',
            },
            {
              id: 'journal-2',
              label: 'Gift edit',
              title: 'Five polished pieces that feel personal for birthdays, bridesmaids, and self-gifting',
            },
            {
              id: 'journal-3',
              label: 'Care ritual',
              title: 'The five-minute jewelry care routine that keeps your gold finish luminous',
            },
          ].map((entry) => (
            <article
              key={entry.id}
              className="rounded-[2rem] border border-[color:var(--color-border)] bg-[var(--color-surface-subtle)] p-8 shadow-[0_14px_35px_rgba(18,12,10,0.05)]"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">{entry.label}</p>
              <h3 className="mt-5 font-display text-3xl leading-tight text-[var(--color-foreground)]">
                {entry.title}
              </h3>
              <Link
                to="/shop"
                className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[var(--color-foreground)] transition hover:text-[var(--color-accent)]"
              >
                Read more
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section id="newsletter" className="bg-[var(--color-background)] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid w-full max-w-[88rem] gap-8 rounded-[2.4rem] border border-[color:var(--color-border-soft)] bg-[var(--color-accent)] px-6 py-10 text-[var(--color-accent-foreground)] shadow-[0_24px_60px_rgba(18,12,10,0.18)] md:grid-cols-[1fr_auto] md:items-center md:px-10 lg:px-14 lg:py-12">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-foreground)]/70">Private access</p>
            <h2 className="font-display text-4xl sm:text-5xl">Join for 10% off your first order</h2>
            <p className="max-w-2xl text-sm leading-7 text-[var(--color-accent-foreground)]/78 sm:text-base">
              Receive first access to new drops, gifting edits, and styling notes from the Velmora journal.
            </p>
          </div>
          <form className="grid gap-3 md:min-w-[25rem] md:grid-cols-[1fr_auto]">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email"
              className="rounded-full border border-[var(--color-accent-foreground)]/18 bg-[rgba(248,243,236,0.68)] px-5 py-4 text-sm text-[var(--color-accent-foreground)] placeholder:text-[var(--color-accent-foreground)]/52 focus:border-[var(--color-accent-foreground)] focus:outline-none"
            />
            <button type="submit" className="inline-flex items-center justify-center rounded-full bg-[var(--color-surface-strong)] px-6 py-4 text-sm uppercase tracking-[0.24em] text-[var(--color-surface)] transition hover:bg-[var(--color-background)]">
              Join now
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default HomePage
