import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight, Star } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard'
import { categories, placeholderSvg, products, ugcStories } from '@/data/products'
import { useVelmoraImages } from '@/lib/useVelmoraImages'

const testimonials = [
  { name: 'Maya R.', text: 'The huggies look far more expensive than they are. I have worn them every day this month.' },
  { name: 'Elena S.', text: 'Gift packaging was gorgeous and the necklace felt personal, not mass-market.' },
  { name: 'Priya K.', text: 'Subtle sparkle, no irritation, and the gold tone is exactly right.' },
]

const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function Home({ onAddToCart }) {
  const imageRef = useVelmoraImages([])

  return (
    <main ref={imageRef} className="bg-velmora-ivory text-velmora-ink">
      <section className="relative min-h-[92vh] overflow-hidden bg-velmora-ink text-velmora-ivory">
        <div
          className="absolute inset-0"
          data-strk-bg-id="home-hero-bg-velmora-3f9a1b"
          data-strk-bg="[hero-image-context] [hero-subhead] [hero-headline]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/45 via-velmora-ink/28 to-velmora-ink/75" />
        <div className="luxury-container relative flex min-h-[92vh] items-end pb-16 pt-32 sm:pb-20 lg:items-center lg:pb-0">
          <div className="max-w-3xl animate-fadeUp">
            <p className="text-xs font-bold uppercase tracking-luxury-wide text-velmora-champagne">Demi-fine gold jewelry, direct to you</p>
            <h1 id="hero-headline" className="mt-5 font-serif text-6xl font-semibold leading-[0.92] text-velmora-ivory sm:text-7xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subhead" className="mt-6 max-w-xl text-base leading-8 text-velmora-ivory/82 sm:text-lg">
              Warm 18K gold-plated pieces for everyday rituals, meaningful gifts, and the glow you keep for yourself.
            </p>
            <p id="hero-image-context" className="sr-only">Warm-lit close-up of gold jewelry on a model.</p>
            <Link to="/shop" className="premium-focus mt-9 inline-flex items-center gap-3 bg-velmora-champagne px-7 py-4 text-xs font-bold uppercase tracking-luxury text-velmora-ink transition duration-300 hover:bg-velmora-ivory">
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-velmora-mist bg-velmora-parchment text-velmora-ink">
        <div className="luxury-container grid divide-y divide-velmora-mist py-4 text-center text-[0.68rem] font-bold uppercase tracking-luxury sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {trustItems.map((item) => (
            <p key={item} className="py-3 text-velmora-espresso/82">{item}</p>
          ))}
        </div>
      </section>

      <section id="shop" className="luxury-container py-16 sm:py-24">
        <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-luxury text-velmora-antique">Most loved</p>
            <h2 id="bestsellers-heading" className="mt-2 font-serif text-4xl font-semibold text-velmora-ink sm:text-5xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="premium-focus inline-flex items-center gap-2 text-xs font-bold uppercase tracking-luxury text-velmora-antique transition hover:text-velmora-ink">
            View all jewelry <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

      <section id="journal" className="overflow-hidden bg-velmora-espresso py-16 text-velmora-ivory sm:py-24">
        <div className="luxury-container">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-luxury text-velmora-champagne">Velmora in motion</p>
            <h2 className="mt-2 font-serif text-4xl font-semibold sm:text-5xl">Styled by our circle</h2>
          </div>
        </div>
        <div className="flex snap-x gap-4 overflow-x-auto px-5 pb-2 sm:px-8 lg:px-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))]">
          {ugcStories.map((story) => (
            <article key={story.id} className="group relative aspect-reel w-[68vw] max-w-[260px] shrink-0 snap-start overflow-hidden bg-velmora-ink sm:w-[260px]">
              <img
                className="editorial-image group-hover:scale-105"
                data-strk-img-id={`ugc-${story.id}`}
                data-strk-img={`[${story.descId}] [${story.titleId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="520"
                src={placeholderSvg}
                alt={story.caption}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-velmora-ink/82" />
              <p id={story.descId} className="sr-only">{story.description}</p>
              <p id={story.titleId} className="absolute bottom-5 left-5 right-5 font-serif text-2xl leading-7 text-velmora-ivory">{story.caption}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="luxury-container py-16 sm:py-24">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-luxury text-velmora-antique">Shop the edit</p>
            <h2 className="mt-2 font-serif text-4xl font-semibold text-velmora-ink sm:text-5xl">By category</h2>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.name} to={category.path} className="group premium-focus relative aspect-editorial overflow-hidden bg-velmora-parchment text-velmora-ivory">
              <img
                className="editorial-image group-hover:scale-105"
                data-strk-img-id={`category-${category.name.toLowerCase()}`}
                data-strk-img={`[${category.descId}] [${category.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src={placeholderSvg}
                alt={`${category.name} jewelry`}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/10 via-velmora-ink/20 to-velmora-ink/75" />
              <div className="absolute inset-x-0 bottom-0 translate-y-5 p-6 transition duration-500 group-hover:translate-y-0 sm:p-8">
                <h3 id={category.titleId} className="font-serif text-4xl font-semibold text-velmora-ivory">{category.name}</h3>
                <p id={category.descId} className="mt-3 max-w-xs text-sm leading-6 text-velmora-ivory/78 opacity-0 transition duration-500 group-hover:opacity-100">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="story" className="bg-velmora-parchment py-16 sm:py-24">
        <div className="luxury-container grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="aspect-editorial overflow-hidden bg-velmora-espresso shadow-luxury">
            <img
              className="editorial-image"
              data-strk-img-id="brand-story-portrait-4bf72a"
              data-strk-img="[brand-story-copy] [brand-story-heading]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1000"
              src={placeholderSvg}
              alt="Velmora gold jewelry editorial portrait"
            />
          </div>
          <div className="lg:pl-10">
            <p className="text-xs font-bold uppercase tracking-luxury text-velmora-antique">Our Story</p>
            <h2 id="brand-story-heading" className="mt-3 font-serif text-5xl font-semibold leading-tight text-velmora-ink sm:text-6xl">
              Jewelry for the rituals between ordinary and unforgettable.
            </h2>
            <p id="brand-story-copy" className="mt-6 max-w-xl text-base leading-8 text-velmora-espresso/76">
              Velmora creates premium demi-fine pieces without traditional retail markups. Each design is made to feel considered, giftable, and lasting — from first layer to final clasp.
            </p>
            <Link to="/shop" className="premium-focus mt-8 inline-flex items-center gap-3 border border-velmora-antique px-6 py-3 text-xs font-bold uppercase tracking-luxury text-velmora-antique transition hover:bg-velmora-antique hover:text-velmora-ivory">
              Our Story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="luxury-container py-16 sm:py-24">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((review) => (
            <figure key={review.name} className="border border-velmora-mist bg-velmora-ivory p-7 text-velmora-ink shadow-sm">
              <div className="flex gap-1 text-velmora-antique" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 font-serif text-2xl leading-8 text-velmora-ink">“{review.text}”</blockquote>
              <figcaption className="mt-5 text-xs font-bold uppercase tracking-luxury text-velmora-espresso/68">{review.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="luxury-container pb-16 sm:pb-24">
        <div className="grid gap-8 bg-velmora-ink p-7 text-velmora-ivory sm:p-10 lg:grid-cols-[1fr_0.9fr] lg:p-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-luxury text-velmora-champagne">A polished first order</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Join for 10% off your first order.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-ivory/74">Early access to new drops, gift edits, and private styling notes from Velmora.</p>
          </div>
          <form className="flex flex-col gap-3 self-end sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input id="newsletter-email" type="email" required placeholder="Email address" className="premium-focus min-h-14 flex-1 border border-velmora-mist/35 bg-velmora-ivory px-4 text-sm text-velmora-ink placeholder:text-velmora-espresso/55" />
            <button type="submit" className="premium-focus min-h-14 bg-velmora-champagne px-6 text-xs font-bold uppercase tracking-luxury text-velmora-ink transition hover:bg-velmora-ivory">
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
