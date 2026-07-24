import { ArrowRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProductCard from '@/components/product/ProductCard.jsx?velmora=20260724'
import { categories, products, testimonials, ugcStories } from '@/data/products'
import { getStrkBackgroundStyle, getStrkImageUrl } from '@/lib/strkImages'

const heroBackgroundId = 'velmora-hero-bg-f90a62'
const brandStoryImageId = 'brand-story-image-a17c58'

function HomePage({ onAddToCart }) {
  return (
    <>
      <section id="top" className="relative min-h-[92vh] overflow-hidden bg-velmora-espresso text-velmora-ivory">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={getStrkBackgroundStyle(heroBackgroundId)}
          data-strk-bg-id={heroBackgroundId}
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-espresso/55 via-velmora-espresso/40 to-velmora-espresso/86 lg:bg-gradient-to-r lg:from-velmora-espresso/82 lg:via-velmora-espresso/48 lg:to-velmora-espresso/18" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24">
          <div className="max-w-3xl animate-[fadeUp_900ms_ease-out_both]">
            <p className="mb-5 text-[0.72rem] font-bold uppercase tracking-[0.34em] text-velmora-softgold">
              Demi-fine gold jewelry, direct to you
            </p>
            <h1 id="hero-title" className="font-serif text-6xl font-medium leading-[0.92] text-velmora-ivory sm:text-7xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="mt-6 max-w-xl text-base font-medium leading-8 text-velmora-ivory sm:text-lg lg:text-velmora-ivory/92">
              Quietly luminous earrings, necklaces, and huggies made for gifting, self-purchase, and every golden hour between.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-velmora-gold px-7 py-4 text-sm font-extrabold uppercase tracking-[0.24em] text-velmora-espresso transition hover:bg-velmora-softgold"
              >
                Shop the Collection <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#bestsellers"
                className="inline-flex items-center justify-center rounded-full border border-velmora-ivory/30 px-7 py-4 text-sm font-bold uppercase tracking-[0.24em] text-velmora-ivory transition hover:border-velmora-gold hover:text-velmora-gold"
              >
                Explore Bestsellers
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-velmora-cocoa/10 bg-velmora-porcelain text-velmora-espresso">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 py-4 text-center text-[0.66rem] font-extrabold uppercase tracking-[0.22em] text-velmora-cocoa sm:grid-cols-4 sm:px-6 lg:px-8">
          {['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map((item) => (
            <div key={item} className="py-2">{item}</div>
          ))}
        </div>
      </section>

      <section id="bestsellers" className="bg-velmora-porcelain px-4 py-20 text-velmora-espresso sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.32em] text-velmora-gold">Bestsellers</p>
              <h2 id="bestsellers-title" className="mt-3 font-serif text-5xl leading-tight text-velmora-espresso sm:text-6xl">
                Most adored, most gifted.
              </h2>
            </div>
            <Link to="/shop" className="text-sm font-extrabold uppercase tracking-[0.24em] text-velmora-cocoa underline decoration-velmora-gold/45 underline-offset-8 transition hover:text-velmora-gold">
              View all jewelry
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </section>

      <section id="journal" className="overflow-hidden bg-velmora-espresso py-20 text-velmora-ivory lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-9 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.32em] text-velmora-softgold">Seen on you</p>
              <h2 id="ugc-title" className="mt-3 font-serif text-5xl text-velmora-ivory">Golden, in motion.</h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-velmora-ivory/70">
              A reel-style strip of everyday shine, from soft layers to statement drops.
            </p>
          </div>
          <div className="flex snap-x gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {ugcStories.map((story) => {
              const captionId = `ugc-${story.id}-caption`
              return (
                <article key={story.id} className="group relative aspect-[9/16] w-[68vw] shrink-0 snap-start overflow-hidden rounded-[2rem] bg-velmora-cocoa shadow-2xl shadow-black/25 sm:w-64 lg:w-72">
                  <img
                    data-strk-img-id={story.imageId}
                    data-strk-img={`[${captionId}] [ugc-title]`}
                    data-strk-img-ratio="9x16"
                    data-strk-img-width="600"
                    src={getStrkImageUrl(story.imageId)}
                    alt={story.caption}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velmora-espresso/88 to-transparent p-5 pt-16">
                    <p id={captionId} className="font-serif text-2xl leading-tight text-velmora-ivory">
                      {story.caption}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-velmora-porcelain px-4 py-20 text-velmora-espresso sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.32em] text-velmora-gold">Shop by category</p>
            <h2 id="category-title" className="mt-3 font-serif text-5xl text-velmora-espresso">Find your signature glimmer.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {categories.map((category) => {
              const titleId = `category-${category.id}-title`
              const descId = `category-${category.id}-desc`
              return (
                <Link key={category.id} to={`/shop?category=${category.label}`} className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-velmora-champagne text-velmora-ivory shadow-[0_24px_70px_rgba(33,23,19,0.09)]">
                  <img
                    data-strk-img-id={category.imageId}
                    data-strk-img={`[${descId}] [${titleId}] [category-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="900"
                    src={getStrkImageUrl(category.imageId)}
                    alt={category.label}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/78 via-velmora-espresso/12 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7 transition duration-500 group-hover:translate-y-[-0.35rem]">
                    <h3 id={titleId} className="font-serif text-4xl text-velmora-ivory">{category.label}</h3>
                    <p id={descId} className="mt-2 max-w-xs text-sm leading-6 text-velmora-ivory/78">{category.description}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section id="about" className="bg-velmora-champagne px-4 py-20 text-velmora-espresso sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-velmora-sand shadow-[0_30px_80px_rgba(33,23,19,0.13)]">
            <img
              data-strk-img-id={brandStoryImageId}
              data-strk-img="[story-copy] [story-title]"
              data-strk-img-ratio="3x2"
              data-strk-img-width="1000"
              src={getStrkImageUrl(brandStoryImageId)}
              alt="Velmora jewelry atelier"
              className="aspect-[4/5] w-full object-cover lg:aspect-[5/6]"
            />
          </div>
          <div className="lg:pl-10">
            <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.32em] text-velmora-gold">Our story</p>
            <h2 id="story-title" className="mt-4 font-serif text-5xl leading-tight text-velmora-espresso sm:text-6xl">
              Jewelry for the rituals you keep close.
            </h2>
            <p id="story-copy" className="mt-6 max-w-xl text-base leading-8 text-velmora-cocoa">
              Velmora is designed for the woman who wants everyday pieces with heirloom energy. We work with warm gold finishes, skin-friendly materials, and refined silhouettes so every piece feels considered from first wear.
            </p>
            <Link to="/shop" className="mt-8 inline-flex items-center gap-3 text-sm font-extrabold uppercase tracking-[0.24em] text-velmora-cocoa underline decoration-velmora-gold/45 underline-offset-8 transition hover:text-velmora-gold">
              Our Story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-velmora-porcelain px-4 py-20 text-velmora-espresso sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.32em] text-velmora-gold">Reviews</p>
            <h2 className="mt-3 font-serif text-5xl text-velmora-espresso">Soft sparkle, strong praise.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((review) => (
              <article key={review.name} className="rounded-[2rem] border border-velmora-cocoa/10 bg-velmora-ivory p-7 text-velmora-espresso shadow-[0_20px_60px_rgba(33,23,19,0.06)]">
                <div className="mb-5 flex text-velmora-gold" aria-label="5 stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="font-serif text-2xl leading-snug text-velmora-espresso">“{review.text}”</p>
                <p className="mt-5 text-sm font-bold uppercase tracking-[0.22em] text-velmora-cocoa/70">{review.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-velmora-porcelain px-4 pb-20 text-velmora-espresso sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-velmora-espresso text-velmora-ivory shadow-[0_30px_90px_rgba(33,23,19,0.18)]">
          <div className="grid gap-8 px-6 py-12 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-14 lg:py-16">
            <div>
              <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.32em] text-velmora-softgold">Velmora letters</p>
              <h2 className="mt-3 font-serif text-5xl leading-tight text-velmora-ivory">Join for 10% off your first order.</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-ivory/72">
                Receive styling notes, early collection access, and quiet gifting reminders.
              </p>
            </div>
            <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Email address"
                className="min-h-14 flex-1 rounded-full border border-velmora-ivory/15 bg-velmora-ivory px-5 text-sm text-velmora-espresso outline-none transition placeholder:text-velmora-cocoa/55 focus:border-velmora-gold"
              />
              <button type="submit" className="min-h-14 rounded-full bg-velmora-gold px-7 text-sm font-extrabold uppercase tracking-[0.22em] text-velmora-espresso transition hover:bg-velmora-softgold">
                Join
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
