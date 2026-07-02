import { ArrowRight, ChevronRight, Sparkles, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProductCard from '@/components/storefront/ProductCard'
import { categories, products, testimonials, ugcStories } from '@/data/products'

const placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"/%3E'

export default function Home({ onAddToCart }) {
  return (
    <>
      <section className="relative min-h-[92vh] overflow-hidden bg-velmora-night text-velmora-espresso">
        <p id="hero-image-context" className="sr-only">Warm-lit close-up of gold earrings, huggies, and necklaces worn on a model</p>
        <div className="absolute inset-0 opacity-80" data-strk-bg-id="hero-warm-gold-model-closeup-5k9m1v" data-strk-bg="[hero-image-context] [hero-subtitle] [hero-title]" data-strk-bg-ratio="16x9" data-strk-bg-width="1800" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-velmora-ivory/90 via-velmora-ivory/60 to-transparent" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-5 pb-16 pt-32 lg:px-10 lg:pb-24">
          <div className="max-w-3xl animate-fade-up border border-velmora-line bg-velmora-ivory p-6 shadow-editorial backdrop-blur-md md:p-10">
            <p className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.26em] text-velmora-bronze"><Sparkles className="h-4 w-4" />Demi-fine jewelry, direct to you</p>
            <h1 id="hero-title" className="font-serif text-5xl font-semibold leading-[0.95] text-velmora-espresso md:text-7xl lg:text-8xl">Crafted to be Treasured</h1>
            <p id="hero-subtitle" className="mt-6 max-w-2xl text-base leading-8 text-velmora-espresso/80 md:text-xl">Warm gold essentials, sculptural huggies, and delicate crystal pieces designed for gifting, rituals, and every day in between.</p>
            <Link to="/shop" className="mt-9 inline-flex items-center gap-3 bg-velmora-gold px-7 py-4 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-espresso transition hover:bg-velmora-night hover:text-velmora-ivory">Shop the Collection<ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="border-b border-velmora-line bg-velmora-ivory text-velmora-espresso" aria-label="Store promises">
        <div className="mx-auto flex max-w-7xl snap-x gap-6 overflow-x-auto px-5 py-4 text-xs font-bold uppercase tracking-[0.22em] text-velmora-taupe lg:justify-center lg:px-10">
          {['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map((item) => <span key={item} className="shrink-0 after:ml-6 after:text-velmora-line after:content-['·'] last:after:hidden">{item}</span>)}
        </div>
      </section>

      <section id="bestsellers" className="bg-velmora-pearl px-5 py-16 text-velmora-espresso md:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div><p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-bronze">Bestsellers</p><h2 className="mt-3 font-serif text-4xl font-semibold text-velmora-espresso md:text-6xl">The everyday gold edit</h2></div>
            <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-velmora-espresso transition hover:text-velmora-bronze">View all pieces <ChevronRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">{products.map((product) => <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} compact />)}</div>
        </div>
      </section>

      <section className="overflow-hidden bg-velmora-ivory py-16 text-velmora-espresso md:py-24">
        <div className="mx-auto mb-8 max-w-7xl px-5 lg:px-10"><p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-bronze">Seen on you</p><h2 className="mt-3 font-serif text-4xl font-semibold md:text-6xl">Reel-worthy glow</h2></div>
        <div className="flex snap-x gap-4 overflow-x-auto px-5 pb-4 lg:px-10">
          {ugcStories.map((story) => (
            <article key={story.id} className="group relative h-[420px] w-[236px] shrink-0 snap-start overflow-hidden bg-velmora-blush shadow-soft md:h-[520px] md:w-[292px]">
              <img alt={story.caption} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" data-strk-img-id={story.imgId} data-strk-img={`[${story.descId}] [${story.titleId}]`} data-strk-img-ratio="9x16" data-strk-img-width="520" src={placeholder} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-velmora-night/75" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-velmora-ivory"><h3 id={story.titleId} className="font-serif text-2xl leading-tight">{story.caption}</h3><p id={story.descId} className="mt-2 text-sm leading-6 text-velmora-ivory/80">{story.detail}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-velmora-pearl px-5 py-16 text-velmora-espresso md:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center"><p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-bronze">Shop by category</p><h2 className="mt-3 font-serif text-4xl font-semibold md:text-6xl">Find your signature</h2></div>
          <div className="grid gap-5 md:grid-cols-3">
            {categories.map((category) => (
              <Link key={category.id} to={`/shop?category=${category.label}`} className="group relative aspect-[4/5] overflow-hidden bg-velmora-blush text-velmora-ivory shadow-soft">
                <img alt={category.label} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" data-strk-img-id={category.imgId} data-strk-img={`[${category.descId}] [${category.titleId}]`} data-strk-img-ratio="4x3" data-strk-img-width="850" src={placeholder} />
                <div className="absolute inset-0 bg-gradient-to-b from-velmora-night/10 via-velmora-night/10 to-velmora-night/75" />
                <div className="absolute inset-x-0 bottom-0 p-6 transition duration-300 md:translate-y-6 md:group-hover:translate-y-0"><h3 id={category.titleId} className="font-serif text-4xl font-semibold">{category.label}</h3><p id={category.descId} className="mt-3 max-w-sm text-sm leading-6 text-velmora-ivory/80 opacity-100 md:opacity-0 md:transition md:group-hover:opacity-100">{category.description}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="story" className="bg-velmora-ivory px-5 py-16 text-velmora-espresso md:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[480px] overflow-hidden bg-velmora-blush shadow-editorial"><img alt="Velmora gold jewelry artisan story" className="h-full min-h-[480px] w-full object-cover" data-strk-img-id="brand-story-artisan-gold-jewelry-7v4q2c" data-strk-img="[story-copy] [story-title]" data-strk-img-ratio="3x2" data-strk-img-width="1000" src={placeholder} /></div>
          <div className="lg:pl-12"><p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-bronze">Velmora Notes</p><h2 id="story-title" className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-6xl">Quiet pieces with lasting presence.</h2><p id="story-copy" className="mt-6 text-base leading-8 text-velmora-taupe md:text-lg">We design demi-fine jewelry in small, intentional edits: warm gold plating, skin-friendly finishes, giftable packaging, and silhouettes that feel special without waiting for a special occasion.</p><Link to="/shop" className="mt-8 inline-flex items-center gap-3 border border-velmora-espresso px-6 py-3 text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso transition hover:bg-velmora-espresso hover:text-velmora-ivory">Our Story <ArrowRight className="h-4 w-4" /></Link></div>
        </div>
      </section>

      <section className="bg-velmora-pearl px-5 py-16 text-velmora-espresso md:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl"><div className="grid gap-5 md:grid-cols-3">{testimonials.map((testimonial) => <figure key={testimonial.name} className="border border-velmora-line bg-velmora-ivory p-7 shadow-soft"><div className="mb-5 flex gap-1 text-velmora-gold" aria-label="5 star rating">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}</div><blockquote className="font-serif text-2xl leading-snug text-velmora-espresso">“{testimonial.quote}”</blockquote><figcaption className="mt-6 text-sm font-bold uppercase tracking-[0.22em] text-velmora-taupe">{testimonial.name}</figcaption></figure>)}</div></div>
      </section>

      <section id="journal" className="bg-velmora-night px-5 py-16 text-velmora-ivory md:py-24 lg:px-10">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div><p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">The first-glow list</p><h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-6xl">Join for 10% off your first order.</h2><p className="mt-5 text-base leading-8 text-velmora-ivory/75">Receive styling notes, gift reminders, and early access to new demi-fine drops.</p></div>
          <form className="border border-velmora-ivory/20 bg-velmora-ivory/10 p-4 backdrop-blur-md" onSubmit={(event) => event.preventDefault()}><label htmlFor="newsletter-email" className="sr-only">Email address</label><div className="flex flex-col gap-3 sm:flex-row"><input id="newsletter-email" type="email" placeholder="you@example.com" className="min-h-14 flex-1 border border-velmora-ivory/20 bg-velmora-ivory px-4 text-sm text-velmora-espresso placeholder:text-velmora-taupe focus:outline-none focus:ring-2 focus:ring-velmora-gold" /><button type="submit" className="min-h-14 bg-velmora-gold px-6 text-xs font-extrabold uppercase tracking-[0.22em] text-velmora-espresso transition hover:bg-velmora-ivory">Join</button></div></form>
        </div>
      </section>
    </>
  )
}
