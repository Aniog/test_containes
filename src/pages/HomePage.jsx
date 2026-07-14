import { ArrowRight, ChevronRight, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { categories, products, ugcCards } from '../data/products'
import { getStrkImageUrl } from '../lib/strkImageUrl'
import { useStrkImages } from '../lib/useStrkImages'
import ProductCard from '../components/store/ProductCard'
import SectionHeader from '../components/store/SectionHeader'

const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

const reviews = [
  { name: 'Maya R.', text: 'The huggies look expensive without feeling precious. I wear them almost every day.' },
  { name: 'Alina S.', text: 'Beautiful packaging and a warm gold tone. It made the perfect birthday gift.' },
  { name: 'Claire M.', text: 'Quiet, polished, and easy to layer. Velmora feels like a boutique discovery.' },
]

const HomePage = ({ onAddToCart }) => {
  const imageRef = useStrkImages([])

  return (
    <main ref={imageRef} className="bg-velmora-ivory text-velmora-ink">
      <section className="relative min-h-screen overflow-hidden bg-velmora-espresso text-velmora-pearl">
        <div
          className="absolute inset-0 opacity-80"
          data-strk-bg-id="velmora-hero-bg-jewelry-c92f1d"
          data-strk-bg="[hero-eyebrow] [hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-espresso/25 via-velmora-espresso/35 to-velmora-espresso/80" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-5 pb-20 pt-36 md:px-8 lg:pb-28">
          <div className="max-w-3xl animate-fadeUp">
            <p id="hero-eyebrow" className="mb-5 text-xs font-bold uppercase tracking-widestLuxury text-velmora-mauve">Demi-fine gold jewelry</p>
            <h1 id="hero-title" className="font-serif text-6xl font-medium leading-[0.95] text-velmora-pearl md:text-8xl lg:text-9xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="mt-6 max-w-2xl text-lg leading-8 text-velmora-pearl/85 md:text-xl">
              Warm, luminous essentials designed for gifting, self-purchase, and everyday rituals that feel quietly special.
            </p>
            <Link
              to="/shop"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-velmora-brass px-7 py-4 text-sm font-bold uppercase tracking-widest text-velmora-pearl shadow-glow transition hover:-translate-y-0.5 hover:bg-velmora-linen hover:text-velmora-espresso"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-velmora-hairline bg-velmora-pearl px-5 py-4 text-velmora-ink">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-center text-[11px] font-bold uppercase tracking-widest text-velmora-smoke md:justify-between">
          {trustItems.map((item, index) => (
            <span key={item} className="flex items-center gap-5">
              {item}
              {index < trustItems.length - 1 && <span className="hidden h-1 w-1 rounded-full bg-velmora-brass md:block" />}
            </span>
          ))}
        </div>
      </section>

      <section id="bestsellers" className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
        <SectionHeader
          eyebrow="Bestsellers"
          title="Beloved pieces, made luminous."
          copy="Five customer favorites with warm gold tones, delicate detail, and giftable polish."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} compact />
          ))}
        </div>
      </section>

      <section id="journal" className="overflow-hidden bg-velmora-espresso py-20 text-velmora-pearl lg:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-9 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widestLuxury text-velmora-brass">Worn by Velmora</p>
              <h2 className="mt-3 font-serif text-4xl font-medium md:text-6xl">Golden moments in motion.</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-velmora-pearl/75">
              A reel-style strip of soft shimmer, close-up details, and everyday styling inspiration.
            </p>
          </div>
          <div className="flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:thin]">
            {ugcCards.map((card) => (
              <article key={card.id} className="group relative h-[480px] min-w-[260px] snap-start overflow-hidden rounded-[2rem] bg-velmora-linen shadow-soft md:min-w-[300px]">
                <img
                  src={getStrkImageUrl(card.imageId)}
                  alt={card.caption}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/70 via-transparent to-transparent" />
                <h3 id={card.titleId} className="absolute bottom-6 left-6 right-6 font-serif text-3xl font-medium text-velmora-pearl">
                  {card.caption}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
        <SectionHeader
          eyebrow="Shop by Category"
          title="A focused wardrobe of shine."
          copy="Explore earrings, necklaces, and huggies designed to layer beautifully together."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.name} to={`/shop?category=${category.name}`} className="group relative min-h-[420px] overflow-hidden rounded-[2rem] bg-velmora-linen shadow-soft">
              <img
                src={getStrkImageUrl(category.imageId)}
                alt={category.name}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/75 via-velmora-espresso/20 to-transparent opacity-80 transition group-hover:opacity-95" />
              <div className="absolute inset-x-0 bottom-0 translate-y-4 p-7 text-velmora-pearl transition duration-500 group-hover:translate-y-0">
                <h3 id={category.titleId} className="font-serif text-4xl font-semibold">{category.name}</h3>
                <p id={category.descId} className="mt-3 max-w-xs text-sm leading-6 text-velmora-pearl/80 opacity-0 transition duration-500 group-hover:opacity-100">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="about" className="bg-velmora-pearl py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 md:items-center md:px-8">
          <div className="relative min-h-[520px] overflow-hidden rounded-[2.5rem] bg-velmora-linen shadow-soft">
            <div
              className="absolute inset-0"
              data-strk-bg-id="story-bg-c31d7a"
              data-strk-bg="[story-copy] [story-title]"
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="900"
            />
          </div>
          <div className="md:pl-10">
            <p className="text-xs font-bold uppercase tracking-widestLuxury text-velmora-brass">Our Story</p>
            <h2 id="story-title" className="mt-4 font-serif text-5xl font-medium leading-tight text-velmora-ink md:text-7xl">
              Fine feeling, without the fine-jewelry markup.
            </h2>
            <p id="story-copy" className="mt-6 text-lg leading-8 text-velmora-smoke">
              Velmora creates demi-fine pieces in small, intentional drops. Each design is made to flatter gold against skin, arrive beautifully packaged, and become part of the everyday rituals you keep returning to.
            </p>
            <Link to="/#about" className="mt-8 inline-flex items-center gap-2 border-b border-velmora-brass pb-2 text-sm font-bold uppercase tracking-widest text-velmora-ink transition hover:text-velmora-brass">
              Our Story <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
        <SectionHeader eyebrow="Reviews" title="Quiet praise, beautifully worn." />
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <figure key={review.name} className="rounded-[2rem] border border-velmora-hairline bg-velmora-pearl p-7 text-velmora-ink shadow-soft">
              <div className="mb-5 text-lg tracking-[0.15em] text-velmora-brass">★★★★★</div>
              <blockquote className="font-serif text-2xl leading-8 text-velmora-ink">“{review.text}”</blockquote>
              <figcaption className="mt-6 text-sm font-bold uppercase tracking-widest text-velmora-smoke">{review.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="px-5 pb-20 md:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.5rem] bg-velmora-clay p-8 text-velmora-pearl shadow-soft md:grid-cols-[1.1fr_0.9fr] md:items-center md:p-12 lg:p-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-widestLuxury text-velmora-espresso">Velmora Letters</p>
            <h2 className="mt-4 font-serif text-5xl font-medium leading-tight md:text-7xl">Join for 10% off your first order.</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-velmora-pearl/85">
              Receive refined styling notes, gift edits, and early access to limited demi-fine drops.
            </p>
          </div>
          <form className="rounded-[2rem] bg-velmora-pearl p-3 text-velmora-ink shadow-soft sm:flex" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Email address"
              className="min-h-14 flex-1 rounded-full bg-transparent px-5 text-sm text-velmora-ink placeholder:text-velmora-smoke focus:outline-none"
            />
            <button type="submit" className="mt-3 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-velmora-espresso px-6 text-sm font-bold uppercase tracking-widest text-velmora-pearl transition hover:bg-velmora-brass sm:mt-0 sm:w-auto">
              Join <Mail className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default HomePage
