import { ArrowRight, Mail, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProductCard from '@/components/product/ProductCard.jsx'
import { categories, products, ugcCards } from '@/data/products.js'

const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']
const reviews = [
  { name: 'Maya R.', text: 'The huggies feel substantial without being heavy. They look far more expensive than they are.' },
  { name: 'Elise T.', text: 'I bought the necklace as a gift and kept coming back for one for myself. Beautiful packaging.' },
  { name: 'Nora L.', text: 'Soft, elegant, and easy to wear daily. The gold tone is warm rather than yellow.' },
]

export default function Home({ onAddToCart }) {
  return (
    <main className="bg-velmora-ivory text-velmora-ink">
      <section className="relative flex min-h-[92svh] items-end overflow-hidden bg-velmora-umber text-white">
        <div
          className="absolute inset-0 opacity-80"
          data-strk-bg-id="home-hero-bg-24fa81"
          data-strk-bg="[hero-subtitle] [hero-title] gold jewelry on model warm close up editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink via-velmora-ink/35 to-velmora-ink/10" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-24">
          <div className="max-w-3xl animate-fade-up">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-velmora-soft-gold">Demi-fine gold jewelry</p>
            <h1 id="hero-title" className="font-serif text-6xl font-semibold leading-[0.95] text-white sm:text-7xl lg:text-8xl">Crafted to be Treasured</h1>
            <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-white/86 sm:text-lg">Warm 18K gold-plated pieces designed for quiet rituals, thoughtful gifting, and the everyday glow you keep for yourself.</p>
            <Link to="/shop" className="mt-9 inline-flex items-center gap-3 rounded-full bg-velmora-gold px-7 py-4 text-sm font-extrabold uppercase tracking-[0.2em] text-velmora-ink shadow-glow transition hover:-translate-y-0.5 hover:bg-velmora-soft-gold">
              Shop the Collection <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-velmora-gold/25 bg-velmora-porcelain text-velmora-ink">
        <div className="mx-auto flex max-w-7xl snap-x gap-6 overflow-x-auto px-4 py-4 text-xs font-bold uppercase tracking-[0.2em] text-velmora-taupe no-scrollbar sm:px-6 lg:grid lg:grid-cols-4 lg:px-8">
          {trustItems.map((item) => <p key={item} className="min-w-max text-center">{item}</p>)}
        </div>
      </section>

      <section id="bestsellers" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-gold">The edit</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold text-velmora-ink sm:text-6xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-velmora-ink transition hover:text-velmora-gold">View all <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {products.map((product) => <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} compact />)}
        </div>
      </section>

      <section id="journal" className="bg-velmora-umber py-16 text-velmora-ivory lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-9 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-soft-gold">Seen in warm light</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold text-velmora-ivory sm:text-6xl">Velmora moments</h2>
          </div>
          <div className="flex snap-x gap-4 overflow-x-auto pb-3 no-scrollbar lg:grid lg:grid-cols-5">
            {ugcCards.map((card) => (
              <article key={card.id} className="group relative aspect-[9/16] min-w-[72vw] snap-center overflow-hidden bg-velmora-parchment shadow-soft sm:min-w-[320px] lg:min-w-0">
                <img
                  alt={card.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  data-strk-img-id={card.imageId}
                  data-strk-img={`[${card.contextId}] [${card.titleId}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="520"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/85 via-transparent to-transparent" />
                <p id={card.contextId} className="sr-only">{card.context}</p>
                <h3 id={card.titleId} className="absolute inset-x-5 bottom-5 font-serif text-2xl leading-tight text-white">{card.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-gold">Curated by shape</p>
          <h2 className="mt-3 font-serif text-5xl font-semibold text-velmora-ink sm:text-6xl">Shop by category</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.slug} to={`/shop?category=${category.name}`} className="group relative aspect-[4/5] overflow-hidden bg-velmora-parchment shadow-soft">
              <div
                className="absolute inset-0 transition duration-700 group-hover:scale-105"
                data-strk-bg-id={category.imageId}
                data-strk-bg={`[${category.descId}] [${category.titleId}]`}
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="900"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/85 via-velmora-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p id={category.descId} className="mb-3 text-sm text-white/75">{category.desc}</p>
                <h3 id={category.titleId} className="font-serif text-4xl font-semibold text-white">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="story" className="bg-velmora-parchment py-16 text-velmora-ink lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="relative aspect-[4/5] overflow-hidden bg-velmora-umber shadow-soft">
            <img
              alt="Velmora atelier details"
              className="h-full w-full object-cover"
              data-strk-img-id="brand-story-image-f2b710"
              data-strk-img="[story-copy] [story-title] gold jewelry atelier warm editorial"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div className="lg:pl-12">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-gold">Our story</p>
            <h2 id="story-title" className="mt-4 font-serif text-5xl font-semibold leading-tight text-velmora-ink sm:text-6xl">Quiet pieces, made to become personal.</h2>
            <p id="story-copy" className="mt-6 max-w-xl text-base leading-8 text-velmora-taupe">Velmora was created for women who want jewelry with the softness of an heirloom and the ease of everyday wear. Each piece is designed to flatter skin, layer effortlessly, and arrive beautifully without the traditional markup.</p>
            <Link to="/shop" className="mt-8 inline-flex items-center gap-3 border-b border-velmora-gold pb-2 text-sm font-bold uppercase tracking-[0.2em] text-velmora-ink transition hover:text-velmora-gold">Our Story <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="border border-velmora-gold/25 bg-velmora-porcelain p-7 text-velmora-ink shadow-soft">
              <div className="mb-5 flex gap-1 text-velmora-gold">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}</div>
              <p className="font-serif text-2xl leading-snug text-velmora-ink">“{review.text}”</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-velmora-taupe">{review.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden bg-velmora-clay text-white shadow-soft">
          <div className="grid gap-8 px-6 py-12 sm:px-10 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-14 lg:py-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/78">A private note</p>
              <h2 className="mt-3 font-serif text-5xl font-semibold text-white">Join for 10% off your first order</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/82">Receive styling notes, early access to limited edits, and a welcome offer for your first Velmora piece.</p>
            </div>
            <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
              <label className="sr-only" htmlFor="newsletter-email">Email address</label>
              <div className="relative flex-1">
                <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-velmora-ink/55" />
                <input id="newsletter-email" type="email" placeholder="Email address" className="h-14 w-full rounded-full border border-white/30 bg-velmora-porcelain px-11 text-sm font-semibold text-velmora-ink placeholder:text-velmora-taupe focus:border-velmora-soft-gold focus:outline-none" />
              </div>
              <button type="submit" className="h-14 rounded-full bg-velmora-ink px-7 text-sm font-extrabold uppercase tracking-[0.18em] text-white transition hover:bg-velmora-gold hover:text-velmora-ink">Join</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
