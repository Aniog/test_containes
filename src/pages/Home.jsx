import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ProductCard from '@/components/storefront/ProductCard'
import { categories, products, testimonials, trustPoints, ugcMoments } from '@/data/products'
import { useStrkImages } from '@/lib/useStrkImages'
import { imagePlaceholder } from '@/lib/storefront'

const Home = ({ onAddToCart }) => {
  const containerRef = useStrkImages([])
  const bestsellers = products
  const featuredStory = products[4]

  return (
    <div ref={containerRef} className="bg-parchment text-obsidian">
      <section className="relative min-h-[100svh] overflow-hidden bg-obsidian text-ivory">
        <div
          className="absolute inset-0"
          data-strk-bg-id="velmora-hero-bg-6e4a2d"
          data-strk-bg="[hero-subhead] [hero-headline]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(33,24,22,0.84)_0%,rgba(33,24,22,0.58)_48%,rgba(33,24,22,0.28)_100%)]" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl items-end px-4 pb-16 pt-32 sm:px-6 md:pb-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs uppercase tracking-[0.34em] text-ivory/72">
              Fine-feeling demi-fine jewelry for everyday rituals
            </p>
            <h1 id="hero-headline" className="max-w-xl font-serif text-5xl leading-[0.92] text-ivory sm:text-6xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subhead" className="mt-6 max-w-lg text-base leading-8 text-ivory/78 sm:text-lg">
              Warm gold jewelry designed for self-gifting, effortless layering, and the moments that deserve to last a little longer.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center rounded-full bg-champagne px-7 py-4 text-xs uppercase tracking-[0.3em] text-obsidian transition duration-300 hover:bg-ivory"
              >
                Shop the Collection
              </Link>
              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-xs uppercase tracking-[0.3em] text-ivory transition duration-300 hover:border-champagne hover:text-champagne"
              >
                Explore Bestsellers
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="border-y border-sand/70 bg-ivory/70">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-4 text-center text-[0.68rem] uppercase tracking-[0.28em] text-taupe sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {trustPoints.map((point) => (
            <p key={point}>{point}</p>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-taupe">Bestsellers</p>
            <h2 className="mt-3 font-serif text-4xl text-obsidian sm:text-5xl">An edit of modern keepsakes</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-taupe">
            Premium-but-accessible pieces designed to feel polished now and collectible later.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {bestsellers.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              priority={index < 2}
            />
          ))}
        </div>
      </section>

      <section className="border-y border-sand/70 bg-rose/35 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-taupe">Seen on you</p>
              <h2 className="mt-3 font-serif text-4xl text-obsidian sm:text-5xl">A reel of softly glowing moments</h2>
            </div>
          </div>
          <div className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            {ugcMoments.map((moment) => (
              <article
                key={moment.id}
                className="group relative min-w-[72%] snap-start overflow-hidden rounded-[2rem] bg-obsidian shadow-[0_20px_60px_rgba(33,24,22,0.16)] sm:min-w-[320px]"
              >
                <img
                  src={imagePlaceholder}
                  alt={moment.title}
                  data-strk-img-id={moment.imgId}
                  data-strk-img={`[${moment.captionId}] [${moment.titleId}] [hero-subhead] [hero-headline]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="900"
                  className="aspect-[9/16] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-ivory">
                  <p id={moment.titleId} className="font-serif text-2xl">
                    {moment.title}
                  </p>
                  <p id={moment.captionId} className="mt-2 max-w-[16rem] text-sm leading-6 text-ivory/78">
                    {moment.caption}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-taupe">Shop by category</p>
            <h2 className="mt-3 font-serif text-4xl text-obsidian sm:text-5xl">Refined essentials, by mood</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.href}
              className="group relative overflow-hidden rounded-[2rem] bg-obsidian"
            >
              <img
                src={imagePlaceholder}
                alt={category.name}
                data-strk-img-id={category.imgId}
                data-strk-img={`[${category.descId}] [${category.titleId}] [hero-subhead] [hero-headline]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.05]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-ivory transition duration-300 group-hover:-translate-y-1">
                <p id={category.titleId} className="font-serif text-3xl">
                  {category.name}
                </p>
                <p id={category.descId} className="mt-2 max-w-xs text-sm leading-6 text-ivory/78">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="about" className="bg-ivory py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="overflow-hidden rounded-[2rem] bg-obsidian shadow-[0_20px_60px_rgba(33,24,22,0.12)]">
            <img
              src={imagePlaceholder}
              alt={featuredStory.name}
              data-strk-img-id="brand-story-hero-4f8a1d"
              data-strk-img={`[story-copy] [story-title] [${featuredStory.heroDescId}] [${featuredStory.heroTitleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="1200"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.3em] text-taupe">Brand story</p>
            <h2 id="story-title" className="mt-4 font-serif text-4xl text-obsidian sm:text-5xl">
              Jewelry with the warmth of an heirloom and the ease of now.
            </h2>
            <p id="story-copy" className="mt-6 max-w-xl text-base leading-8 text-taupe">
              Velmora was created for women who want their jewelry to feel intimate, elevated, and wearable every day. Each piece is designed to move between self-purchase and gifting with signature packaging, thoughtful details, and a warm golden finish.
            </p>
            <Link
              to="/shop"
              className="mt-8 inline-flex w-fit items-center gap-2 text-xs uppercase tracking-[0.3em] text-obsidian transition hover:text-champagne"
            >
              Our Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="journal" className="border-y border-sand/70 bg-rose/18 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-taupe">Journal</p>
              <h2 className="mt-3 font-serif text-4xl text-obsidian sm:text-5xl">Editorial notes for gifting and layering</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-taupe">
              A quieter perspective on styling, occasion gifting, and caring for the pieces you wear most.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-[2rem] border border-sand/70 bg-ivory p-8 shadow-[0_20px_60px_rgba(33,24,22,0.08)]">
              <p className="text-xs uppercase tracking-[0.26em] text-taupe">Layering Notes</p>
              <h3 className="mt-4 font-serif text-3xl text-obsidian">How to build a jewelry wardrobe that still feels effortless</h3>
              <p className="mt-4 text-sm leading-7 text-taupe">
                Start with one sculptural huggie, one soft pendant, and one polished statement piece. The result is curated, never crowded.
              </p>
            </article>
            <article className="rounded-[2rem] border border-sand/70 bg-ivory p-8 shadow-[0_20px_60px_rgba(33,24,22,0.08)]">
              <p className="text-xs uppercase tracking-[0.26em] text-taupe">Gift Guide</p>
              <h3 className="mt-4 font-serif text-3xl text-obsidian">A refined under-$100 edit for birthdays, bridesmaids, and self-purchase</h3>
              <p className="mt-4 text-sm leading-7 text-taupe">
                Choose gift-boxed sets for milestone moments, crystal accents for evening polish, and dome huggies for the everyday collector.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-taupe">Testimonials</p>
          <h2 className="mt-3 font-serif text-4xl text-obsidian sm:text-5xl">Loved by women who collect thoughtfully</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className="rounded-[2rem] border border-sand/70 bg-ivory p-8 shadow-[0_20px_60px_rgba(33,24,22,0.08)]">
              <p className="text-champagne">★★★★★</p>
              <p className="mt-5 text-base leading-8 text-obsidian">“{testimonial.quote}”</p>
              <p className="mt-8 text-xs uppercase tracking-[0.28em] text-taupe">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 md:pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] bg-obsidian px-6 py-10 text-ivory sm:px-10 lg:px-14 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-ivory/64">A softer welcome</p>
              <h2 className="mt-3 font-serif text-4xl text-ivory sm:text-5xl">Join for 10% off your first order</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-ivory/76">
                Receive new collection previews, gifting edits, and styling notes from the Velmora journal.
              </p>
            </div>
            <form className="grid gap-3 sm:grid-cols-[1fr_auto]">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Email address"
                className="h-14 rounded-full border border-white/15 bg-white/8 px-5 text-sm text-ivory placeholder:text-ivory/45 focus:border-champagne focus:outline-none"
              />
              <button
                type="submit"
                className="h-14 rounded-full bg-champagne px-6 text-xs uppercase tracking-[0.28em] text-obsidian transition hover:bg-ivory"
              >
                Join Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
