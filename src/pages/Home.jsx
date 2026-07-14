import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'
import { categories, products, ugcMoments } from '../data/products'
import ProductCard from '../components/storefront/ProductCard'
import { useStrikinglyImages } from '../lib/useStrikinglyImages'

const placeholder = '/velmora-jewelry-fallback.svg'

export default function Home({ onAddToCart }) {
  const containerRef = useStrikinglyImages([])

  return (
    <main ref={containerRef} className="bg-velmora-parchment text-velmora-espresso">
      <section className="relative min-h-[92vh] overflow-hidden bg-velmora-espresso text-velmora-ivory">
        <p id="hero-image-context" className="sr-only">Warm-lit close-up of gold jewelry worn on a model, quiet luxury editorial campaign image</p>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-75"
          data-strk-bg-id="velmora-hero-bg-gold-jewelry-v2"
          data-strk-bg="[hero-image-context] [hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-velmora-espresso via-velmora-espresso/55 to-transparent" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-5 pb-20 pt-32 md:px-8">
          <div className="max-w-2xl animate-[fadeUp_900ms_ease-out_both]">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-velmora-champagne">Demi-fine gold jewelry</p>
            <h1 id="hero-title" className="font-serif text-6xl leading-[0.9] tracking-tight text-velmora-ivory md:text-8xl lg:text-9xl">Crafted to be Treasured</h1>
            <p id="hero-subtitle" className="mt-7 max-w-xl text-base leading-8 text-velmora-ivory/80 md:text-lg">Quietly luminous essentials for gifting, self-purchase, and every golden ritual in between.</p>
            <Link to="/shop" className="mt-10 inline-flex items-center gap-3 bg-velmora-bronze px-7 py-4 text-xs font-bold uppercase tracking-[0.28em] text-velmora-ivory shadow-[0_18px_45px_rgba(167,117,59,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-velmora-champagne hover:text-velmora-espresso">
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-velmora-sand bg-velmora-ivory px-5 py-4 text-velmora-espresso md:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-velmora-ink/75">
          {['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-velmora-bronze">Bestsellers</p>
            <h2 className="mt-3 font-serif text-5xl leading-none text-velmora-espresso md:text-7xl">Most Treasured</h2>
          </div>
          <Link to="/shop" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.26em] text-velmora-espresso transition hover:text-velmora-bronze">
            View all jewelry <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />)}
        </div>
      </section>

      <section id="journal" className="overflow-hidden bg-velmora-espresso py-20 text-velmora-ivory lg:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-velmora-champagne">Seen in soft focus</p>
              <h2 className="mt-3 font-serif text-5xl leading-none md:text-7xl">Velmora on You</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-velmora-ivory/70">A reel-inspired strip of warm-lit moments, close details, and pieces worn in real life.</p>
          </div>
        </div>
        <p id="ugc-row-context" className="sr-only">Vertical reel style warm gold jewelry worn on ear and neck, premium demi-fine styling</p>
        <div className="flex gap-5 overflow-x-auto px-5 pb-4 md:px-8 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]">
          {ugcMoments.map((moment) => (
            <article key={moment.id} className="group relative h-[28rem] w-64 flex-none overflow-hidden rounded-t-full bg-velmora-sand/10 shadow-[0_24px_70px_rgba(0,0,0,0.25)]">
              <img alt={moment.caption} className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105" data-strk-img-id={`${moment.imgId}-jewelry-v2`} data-strk-img={`[${moment.titleId}] [ugc-row-context]`} data-strk-img-ratio="9x16" data-strk-img-width="520" src={placeholder} />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/80 via-transparent to-transparent" />
              <h3 id={moment.titleId} className="absolute bottom-6 left-5 right-5 font-serif text-2xl leading-tight text-velmora-ivory">{moment.caption}</h3>
            </article>
          ))}
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-velmora-bronze">Shop by category</p>
          <h2 className="mt-3 font-serif text-5xl leading-none text-velmora-espresso md:text-7xl">Golden Signatures</h2>
        </div>
        <p id="category-image-context" className="sr-only">Gold jewelry category editorial photography on warm neutral background</p>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.name} to={category.href} className="group relative block overflow-hidden bg-velmora-espresso text-velmora-ivory">
              <img alt={category.name} className="aspect-[3/4] w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-95" data-strk-img-id={`${category.imgId}-gold-v2`} data-strk-img={`[${category.descId}] [${category.titleId}] [category-image-context]`} data-strk-img-ratio="3x4" data-strk-img-width="760" src={placeholder} />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/90 via-velmora-espresso/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-7 transition duration-500 group-hover:translate-y-0">
                <h3 id={category.titleId} className="font-serif text-4xl text-velmora-ivory">{category.name}</h3>
                <p id={category.descId} className="mt-3 max-w-xs text-sm leading-6 text-velmora-ivory/0 transition duration-500 group-hover:text-velmora-ivory/80">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="about" className="bg-velmora-ivory py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 md:items-center md:px-8">
          <div className="relative">
            <p id="story-image-context" className="sr-only">Gold jewelry atelier hands arranging demi-fine pieces in warm editorial light</p>
            <div className="absolute -left-4 -top-4 h-full w-full border border-velmora-champagne/70" />
            <img alt="Velmora jewelry atelier" className="relative aspect-[4/5] w-full object-cover shadow-[0_30px_80px_rgba(31,23,18,0.12)]" data-strk-img-id="velmora-story-atelier-gold-v2" data-strk-img="[story-image-context] [story-copy] [story-title]" data-strk-img-ratio="4x3" data-strk-img-width="900" src={placeholder} />
          </div>
          <div className="md:pl-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-velmora-bronze">Our Story</p>
            <h2 id="story-title" className="mt-4 font-serif text-5xl leading-none text-velmora-espresso md:text-7xl">Made for the pieces you keep reaching for.</h2>
            <p id="story-copy" className="mt-7 text-base leading-8 text-velmora-ink/75">Velmora Fine Jewelry creates demi-fine essentials with a warm editorial eye: refined shapes, flattering gold tones, and thoughtful details at a premium-but-accessible price.</p>
            <Link to="/#about" className="mt-8 inline-flex items-center gap-3 border border-velmora-espresso px-6 py-3 text-xs font-bold uppercase tracking-[0.26em] text-velmora-espresso transition hover:border-velmora-bronze hover:bg-velmora-bronze hover:text-velmora-ivory">
              Our Story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ['Beautifully packaged and the gold tone is so flattering.', 'Mara L.'],
            ['My huggies feel special but still easy enough for every day.', 'Simone R.'],
            ['The necklace was the perfect birthday gift — refined, not flashy.', 'Elena K.'],
          ].map(([quote, name]) => (
            <article key={name} className="border border-velmora-sand bg-velmora-ivory p-7 text-velmora-espresso shadow-[0_18px_50px_rgba(31,23,18,0.06)]">
              <div className="flex gap-1 text-velmora-champagne" aria-label="5 star rating">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}</div>
              <p className="mt-6 font-serif text-2xl leading-snug text-velmora-espresso">“{quote}”</p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.26em] text-velmora-bronze">{name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-20 md:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden bg-velmora-rose text-velmora-espresso shadow-[0_26px_80px_rgba(31,23,18,0.1)]">
          <div className="grid gap-8 p-8 md:grid-cols-[1.2fr_1fr] md:items-center md:p-12 lg:p-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-velmora-espresso/70">Private list</p>
              <h2 className="mt-3 font-serif text-5xl leading-none md:text-6xl">Join for 10% off your first order.</h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-velmora-espresso/75">Receive early access to new drops, care rituals, and refined gifting notes.</p>
            </div>
            <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
              <input type="email" required placeholder="Email address" className="min-h-14 flex-1 border border-velmora-espresso/25 bg-velmora-ivory px-4 text-sm text-velmora-espresso placeholder:text-velmora-ink/45 outline-none transition focus:border-velmora-espresso" />
              <button type="submit" className="min-h-14 bg-velmora-espresso px-6 text-xs font-bold uppercase tracking-[0.26em] text-velmora-ivory transition hover:bg-velmora-bronze">Join</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
