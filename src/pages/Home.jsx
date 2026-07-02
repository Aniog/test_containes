import { ArrowRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProductCard from '@/components/storefront/ProductCard.jsx'
import ProductImage from '@/components/storefront/ProductImage.jsx'
import { categories, products, ugcCards } from '@/data/products.js'
import { useStrkImages } from '@/hooks/useStrkImages.js'
import { getStrkImageUrl } from '@/lib/strkImages.js'

const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']
const reviews = [
  { name: 'Maya R.', text: 'The huggies feel substantial without being heavy. They look far more expensive than they are.' },
  { name: 'Clara W.', text: 'Gift packaging was beautiful, and my sister wears the necklace almost every day.' },
  { name: 'Nina S.', text: 'Warm gold tone, no irritation, and the details are so refined in person.' },
]

export default function Home({ onAddToCart }) {
  const imageContainerRef = useStrkImages([])
  const heroImageUrl = getStrkImageUrl('home-hero-gold-jewelry-model-61d4aa')

  return (
    <main ref={imageContainerRef} className="bg-velmora-cream text-velmora-ink">
      <section className="relative min-h-screen overflow-hidden bg-velmora-espresso text-velmora-cream">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          data-strk-bg-id="home-hero-gold-jewelry-model-61d4aa"
          data-strk-bg="[home-hero-subtitle] [home-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
          style={heroImageUrl ? { backgroundImage: `url(${heroImageUrl})` } : undefined}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/45 via-velmora-espresso/45 to-velmora-espresso/85" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-5 pb-20 pt-32 md:px-8 lg:pb-28">
          <div className="max-w-3xl">
            <p className="font-sans text-xs font-semibold uppercase tracking-jewel text-velmora-gold">
              Demi-fine gold jewelry
            </p>
            <h1 id="home-hero-title" className="mt-5 font-serif text-6xl leading-none text-velmora-cream md:text-8xl lg:text-9xl">
              Crafted to be Treasured
            </h1>
            <p id="home-hero-subtitle" className="mt-6 max-w-xl font-sans text-base leading-8 text-velmora-linen md:text-lg">
              Warm, luminous pieces for the everyday rituals, quiet milestones, and gifted moments that deserve to last.
            </p>
            <Link to="/shop" className="mt-9 inline-flex items-center gap-3 bg-velmora-gold px-7 py-4 font-sans text-xs font-bold uppercase tracking-jewel text-velmora-ink transition-colors hover:bg-velmora-cream">
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-velmora-mist bg-velmora-parchment text-velmora-ink">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 py-4 font-sans text-center text-trust font-semibold uppercase tracking-luxe md:grid-cols-4 md:px-8">
          {trustItems.map((item) => (
            <div key={item} className="px-2 py-2 text-velmora-bronze">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-jewel text-velmora-bronze">Bestsellers</p>
            <h2 className="mt-3 font-serif text-5xl text-velmora-ink md:text-6xl">Polished by popular demand</h2>
          </div>
          <Link to="/shop" className="group inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-jewel text-velmora-bronze">
            View all jewelry
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

      <section id="reels" className="overflow-hidden bg-velmora-espresso py-18 text-velmora-cream lg:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-jewel text-velmora-gold">Seen in warm light</p>
              <h2 className="mt-3 font-serif text-5xl text-velmora-cream md:text-6xl">Styled by the Velmora circle</h2>
            </div>
          </div>
          <div className="-mx-5 flex snap-x gap-4 overflow-x-auto px-5 pb-3 md:-mx-8 md:px-8">
            {ugcCards.map((card) => (
              <article key={card.id} className="group relative aspect-reel w-56 shrink-0 snap-start overflow-hidden rounded-t-full border border-velmora-gold/30 bg-velmora-linen shadow-velvet md:w-72">
                <ProductImage
                  alt={`${card.label} jewelry styling`}
                  imageId={card.imageId}
                  query={`[${card.titleId}] [home-hero-subtitle]`}
                  ratio="9x16"
                  width="500"
                  className="transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/75 via-transparent to-transparent" />
                <p id={card.titleId} className="absolute inset-x-5 bottom-5 font-serif text-2xl leading-tight text-velmora-cream">
                  {card.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
        <div className="mb-10 text-center">
          <p className="font-sans text-xs font-semibold uppercase tracking-jewel text-velmora-bronze">Shop by category</p>
          <h2 className="mt-3 font-serif text-5xl text-velmora-ink md:text-6xl">Choose your glow</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} to={`/shop?category=${category.label}`} className="group relative aspect-editorial overflow-hidden bg-velmora-linen shadow-jewel">
              <ProductImage
                alt={`${category.label} collection`}
                imageId={category.imageId}
                query={`[${category.descId}] [${category.titleId}]`}
                ratio="4x3"
                width="900"
                className="transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/70 via-velmora-ink/5 to-transparent transition-opacity group-hover:opacity-90" />
              <div className="absolute inset-x-6 bottom-6 text-velmora-cream">
                <p id={category.descId} className="font-sans text-xs uppercase tracking-luxe text-velmora-linen">{category.description}</p>
                <h3 id={category.titleId} className="mt-2 font-serif text-4xl text-velmora-cream">{category.label}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="story" className="bg-velmora-linen py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
          <div className="aspect-editorial overflow-hidden rounded-t-full bg-velmora-parchment shadow-velvet">
            <ProductImage
              alt="Velmora jewelry atelier details"
              imageId="brand-story-atelier-gold-jewelry-c8d114"
              query="[brand-story-copy] [brand-story-title]"
              ratio="3x4"
              width="900"
            />
          </div>
          <div className="lg:pl-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-jewel text-velmora-bronze">Our Story</p>
            <h2 id="brand-story-title" className="mt-4 font-serif text-5xl leading-tight text-velmora-ink md:text-7xl">
              Designed for the pieces you reach for most.
            </h2>
            <p id="brand-story-copy" className="mt-6 font-sans text-base leading-8 text-velmora-espresso md:text-lg">
              Velmora creates demi-fine gold jewelry with the polish of heirlooms and the ease of everyday wear. Each piece is made to layer, gift, and keep close.
            </p>
            <Link to="/#journal" className="mt-8 inline-flex items-center gap-3 border border-velmora-bronze px-6 py-3 font-sans text-xs font-bold uppercase tracking-jewel text-velmora-bronze transition-colors hover:bg-velmora-bronze hover:text-velmora-cream">
              Our Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="border border-velmora-mist bg-velmora-parchment p-7 text-velmora-ink shadow-jewel">
              <div className="flex gap-1 text-velmora-gold" aria-label="5 star review">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-6 font-serif text-2xl leading-8 text-velmora-ink">“{review.text}”</p>
              <p className="mt-6 font-sans text-xs font-semibold uppercase tracking-luxe text-velmora-bronze">{review.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="journal" className="bg-velmora-gold text-velmora-ink">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 md:px-8 lg:grid-cols-newsletter lg:items-center">
          <div>
            <p className="font-sans text-xs font-bold uppercase tracking-jewel text-velmora-espresso">Private list</p>
            <h2 className="mt-3 font-serif text-5xl leading-tight text-velmora-ink md:text-6xl">Join for 10% off your first order</h2>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input id="newsletter-email" type="email" required placeholder="Email address" className="min-h-14 flex-1 border border-velmora-ink/20 bg-velmora-parchment px-5 font-sans text-sm text-velmora-ink placeholder:text-velmora-bronze focus:border-velmora-ink focus:outline-none" />
            <button type="submit" className="min-h-14 bg-velmora-ink px-7 font-sans text-xs font-bold uppercase tracking-jewel text-velmora-cream transition-colors hover:bg-velmora-espresso">
              Join
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
