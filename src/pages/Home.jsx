import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import { categories, placeholderSvg, products, ugcCards } from '@/data/products'

const testimonials = [
  { name: 'Maya L.', text: 'The huggies feel expensive but easy enough for everyday. I have not taken them off.' },
  { name: 'Elena R.', text: 'The packaging was beautiful, and the necklace looked even warmer in person.' },
  { name: 'Claire W.', text: 'Gifted the set to my sister and immediately ordered a pair for myself.' },
]

export default function Home({ onAddToCart }) {
  return (
    <main className="bg-[var(--color-ivory)] text-[var(--color-espresso)]">
      <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-[var(--color-espresso)] px-4 pb-16 pt-28 text-[var(--color-ivory)] sm:px-6 lg:min-h-screen lg:px-8 lg:pb-24">
        <div className="velmora-hero-art absolute inset-0 opacity-100" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(33,24,18,0.82),rgba(33,24,18,0.36),rgba(33,24,18,0.14))]" />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-[var(--color-gold)]">Demi-fine jewelry, direct to you</p>
          <h1 id="hero-title" className="max-w-4xl font-[var(--font-heading)] text-6xl leading-[0.92] tracking-[-0.04em] text-[var(--color-ivory)] sm:text-7xl lg:text-8xl">Crafted to be Treasured</h1>
          <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-[rgba(251,246,238,0.82)] sm:text-lg">Warm 18K gold-plated essentials, crystal accents, and gift-ready silhouettes made for everyday rituals and lasting meaning.</p>
          <Link to="/shop" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[var(--color-gold)] px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-espresso)] shadow-[0_24px_60px_rgba(197,154,82,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[var(--color-gold-dark)]">Shop the Collection <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      <section className="border-b border-[color:var(--color-hairline)] bg-[var(--color-alabaster)] px-4 py-4 text-[var(--color-espresso)] sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 text-center text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--color-muted)]">
          <span>Free Worldwide Shipping</span><span className="text-[var(--color-gold)]">·</span><span>30-Day Returns</span><span className="text-[var(--color-gold)]">·</span><span>18K Gold Plated</span><span className="text-[var(--color-gold)]">·</span><span>Hypoallergenic</span>
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div><p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--color-gold-dark)]">Most loved</p><h2 id="bestsellers-title" className="mt-3 font-[var(--font-heading)] text-4xl tracking-[-0.03em] text-[var(--color-espresso)] sm:text-5xl">Bestsellers</h2></div>
          <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-espresso)] transition hover:text-[var(--color-gold-dark)]">Shop all <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">{products.map((product) => <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} compact />)}</div>
      </section>

      <section id="journal" className="overflow-hidden border-y border-[color:var(--color-hairline)] bg-[var(--color-espresso)] py-16 text-[var(--color-ivory)] md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-6"><div><p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--color-gold)]">Seen in the wild</p><h2 id="ugc-title" className="mt-3 font-[var(--font-heading)] text-4xl tracking-[-0.03em]">Reel-worthy shine</h2></div><p className="hidden max-w-sm text-sm leading-7 text-[rgba(251,246,238,0.72)] md:block">A horizontal strip of warm, vertical moments inspired by the pieces our customers wear on repeat.</p></div>
          <div className="flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:none]">
            {ugcCards.map((card) => (
              <article key={card.id} className="group relative aspect-[9/16] w-[72vw] shrink-0 snap-start overflow-hidden rounded-[2rem] bg-[var(--color-cocoa)] shadow-2xl sm:w-72">
                <img alt={card.title} className="h-full w-full object-cover opacity-88 transition duration-700 group-hover:scale-105" src={placeholderSvg} />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(33,24,18,0.72))]" />
                <p id={card.titleId} className="absolute inset-x-5 bottom-5 font-[var(--font-heading)] text-2xl leading-7 text-[var(--color-ivory)]">{card.title}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mb-10 text-center"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--color-gold-dark)]">Curated edits</p><h2 className="mt-3 font-[var(--font-heading)] text-4xl tracking-[-0.03em] text-[var(--color-espresso)] sm:text-5xl">Shop by Category</h2></div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.slug} to={`/shop?category=${category.slug}`} className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[var(--color-espresso)] text-[var(--color-ivory)] shadow-[0_24px_70px_rgba(33,24,18,0.12)]">
              <img alt={`${category.name} jewelry category`} className="h-full w-full object-cover opacity-78 transition duration-700 group-hover:scale-105 group-hover:opacity-55" src={placeholderSvg} />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(33,24,18,0.68))]" />
              <div className="absolute inset-x-6 bottom-6 translate-y-3 transition duration-500 group-hover:translate-y-0"><h3 id={category.titleId} className="font-[var(--font-heading)] text-4xl text-[var(--color-ivory)]">{category.name}</h3><p id={category.descId} className="mt-2 max-w-xs text-sm leading-6 text-[rgba(251,246,238,0.8)] opacity-0 transition duration-500 group-hover:opacity-100">{category.description}</p></div>
            </Link>
          ))}
        </div>
      </section>

      <section id="story" className="bg-[var(--color-blush)] px-4 py-16 text-[var(--color-espresso)] sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-[2rem] bg-[var(--color-espresso)] shadow-[0_28px_80px_rgba(33,24,18,0.18)]"><img alt="Velmora warm editorial jewelry workshop and gold pieces" className="aspect-[4/5] h-full w-full object-cover opacity-90" src={placeholderSvg} /></div>
          <div className="lg:pl-12"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--color-gold-dark)]">Our point of view</p><h2 id="story-title" className="mt-4 font-[var(--font-heading)] text-5xl leading-tight tracking-[-0.04em] sm:text-6xl">Gold that belongs to the everyday.</h2><p id="story-copy" className="mt-6 max-w-xl text-base leading-8 text-[var(--color-espresso)]">Velmora creates demi-fine jewelry with the restraint of heirlooms and the ease of modern direct-to-consumer pricing. Every piece is selected for warmth, comfort, and the quiet confidence of being worn often.</p><Link to="/shop" className="mt-8 inline-flex items-center gap-2 border-b border-[var(--color-gold-dark)] pb-2 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-espresso)] hover:text-[var(--color-gold-dark)]">Our Story <ArrowRight className="h-4 w-4" /></Link></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8"><div className="grid gap-5 md:grid-cols-3">{testimonials.map((review) => <figure key={review.name} className="rounded-[1.75rem] border border-[color:var(--color-hairline)] bg-[var(--color-alabaster)] p-7 text-[var(--color-espresso)] shadow-[0_18px_50px_rgba(33,24,18,0.06)]"><div className="mb-5 flex gap-1 text-[var(--color-gold-dark)]" aria-label="5 star review">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}</div><blockquote className="font-[var(--font-heading)] text-2xl leading-8">“{review.text}”</blockquote><figcaption className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-muted)]">{review.name}</figcaption></figure>)}</div></section>

      <section className="px-4 pb-16 sm:px-6 md:pb-24 lg:px-8"><div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[var(--color-espresso)] p-8 text-[var(--color-ivory)] shadow-[0_30px_90px_rgba(33,24,18,0.18)] md:p-12 lg:p-16"><div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--color-gold)]">Private list</p><h2 className="mt-4 font-[var(--font-heading)] text-4xl tracking-[-0.03em] sm:text-5xl">Join for 10% off your first order</h2><p className="mt-4 max-w-xl text-sm leading-7 text-[rgba(251,246,238,0.75)]">Receive early access to new drops, gifting edits, and care rituals for keeping your gold bright.</p></div><form className="flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}><label htmlFor="newsletter-email" className="sr-only">Email address</label><input id="newsletter-email" type="email" required placeholder="you@example.com" className="min-h-14 flex-1 rounded-full border border-white/15 bg-[rgba(255,250,243,0.08)] px-5 text-sm text-[var(--color-ivory)] outline-none placeholder:text-[rgba(251,246,238,0.54)] focus:border-[var(--color-gold)]" /><button type="submit" className="rounded-full bg-[var(--color-gold)] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-espresso)] transition hover:bg-[var(--color-gold-dark)]">Join</button></form></div></div></section>
    </main>
  )
}
