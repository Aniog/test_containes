import { ArrowRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProductCard from '@/components/store/ProductCard'
import { useStore } from '@/components/store/StoreContext'
import {
  categoryTiles,
  featuredProducts,
  journalEntries,
  testimonials,
  trustItems,
  ugcStories,
} from '@/data/storefront'

const HomePage = () => {
  const { addToCart } = useStore()

  return (
    <main className="bg-velmora-paper text-velmora-ink">
      <section className="relative isolate min-h-screen overflow-hidden bg-velmora-ink text-velmora-paper">
        <div
          className="absolute inset-0"
          data-strk-bg-id="hero-bg-velmora-8f2a9c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(29,23,21,0.92)_0%,rgba(29,23,21,0.72)_42%,rgba(29,23,21,0.42)_100%)]" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-4 pb-20 pt-32 sm:px-6 md:pb-24 lg:px-8">
          <div className="max-w-2xl">
            <p
              id="hero-subtitle"
              className="text-xs font-semibold uppercase tracking-[0.32em] text-white/85 [text-shadow:0_2px_18px_rgba(0,0,0,0.45)]"
            >
              Demi-fine gold jewelry for everyday rituals
            </p>
            <h1
              id="hero-title"
              className="mt-6 font-display text-6xl leading-none text-white [text-shadow:0_8px_30px_rgba(0,0,0,0.42)] sm:text-7xl lg:text-8xl"
            >
              Crafted to be Treasured
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/90 [text-shadow:0_2px_20px_rgba(0,0,0,0.34)] sm:text-lg">
              Warm-toned earrings, necklaces, and huggies designed to feel quietly
              luxurious from first wear to forever favorite.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center rounded-full bg-velmora-gold px-7 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-velmora-paper transition hover:bg-velmora-gold-deep"
              >
                Shop the Collection
              </Link>
              <Link
                to="/#story"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-velmora-paper/30 px-7 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-velmora-paper transition hover:bg-velmora-paper/10"
              >
                Our Story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-velmora-mist/60 bg-velmora-shell text-velmora-ink">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-4 text-center sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {trustItems.map((item) => (
            <p key={item} className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-taupe">
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-4 border-b border-velmora-mist/60 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-taupe">
              Bestsellers
            </p>
            <h2 className="mt-3 font-display text-5xl text-velmora-ink sm:text-6xl">
              The edit our customers return to
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-gold transition hover:text-velmora-gold-deep"
          >
            View all pieces
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
              sectionId="bestsellers"
              onQuickAdd={(selectedProduct) => addToCart(selectedProduct, 'Gold Tone', 1)}
            />
          ))}
        </div>
      </section>

      <section className="border-y border-velmora-mist/60 bg-velmora-shell/80 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-taupe">
                Worn by our community
              </p>
              <h2 className="mt-3 font-display text-5xl text-velmora-ink sm:text-6xl">
                A reel-style glimpse into the glow
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-velmora-taupe">
              Editorial warmth meets real-life styling moments — built for gifting,
              everyday wear, and everything in between.
            </p>
          </div>

          <div className="mt-10 flex snap-x gap-5 overflow-x-auto pb-2">
            {ugcStories.map((story) => {
              const titleId = `${story.id}-title`
              const captionId = `${story.id}-caption`
              const promptId = `${story.id}-prompt`

              return (
                <article
                  key={story.id}
                  className="group relative min-w-[240px] max-w-[240px] snap-start overflow-hidden rounded-[2rem] bg-velmora-ink text-velmora-paper shadow-velmora"
                >
                  <span id={promptId} className="sr-only">
                    vertical editorial portrait of woman wearing warm gold jewelry for social-style content
                  </span>
                  <div className="relative aspect-[9/16]">
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={story.title}
                      data-strk-img-id={`${story.id}-image-card`}
                      data-strk-img={`[${promptId}] [${captionId}] [${titleId}]`}
                      data-strk-img-ratio="9x16"
                      data-strk-img-width="700"
                      className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(29,23,21,0.06)_20%,rgba(29,23,21,0.72)_100%)]" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <h3 id={titleId} className="font-display text-3xl leading-none text-velmora-paper">
                        {story.title}
                      </h3>
                      <p id={captionId} className="mt-3 text-sm leading-6 text-velmora-paper/80">
                        {story.caption}
                      </p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-taupe">
            Shop by category
          </p>
          <h2 className="mt-3 font-display text-5xl text-velmora-ink sm:text-6xl">
            A refined wardrobe of gold tones
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {categoryTiles.map((tile) => {
            const titleId = `${tile.slug}-tile-title`
            const descriptionId = `${tile.slug}-tile-description`
            const promptId = `${tile.slug}-tile-prompt`

            return (
              <Link
                key={tile.slug}
                to={`/shop?category=${tile.slug}`}
                className="group relative overflow-hidden rounded-[2rem] bg-velmora-ink text-velmora-paper shadow-velmora"
              >
                <span id={promptId} className="sr-only">
                  warm editorial jewelry category image featuring {tile.name.toLowerCase()}
                </span>
                <div className="relative aspect-[4/5]">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={tile.name}
                    data-strk-img-id={`${tile.slug}-category-image-velmora`}
                    data-strk-img={`[${promptId}] [${descriptionId}] [${titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="900"
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(29,23,21,0.12)_25%,rgba(29,23,21,0.82)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                    <div>
                      <h3 id={titleId} className="font-display text-4xl text-velmora-paper">
                        {tile.name}
                      </h3>
                      <p id={descriptionId} className="mt-3 max-w-xs text-sm leading-6 text-velmora-paper/80">
                        {tile.description}
                      </p>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-paper/80 transition group-hover:text-velmora-gold">
                      Explore
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section id="story" className="bg-velmora-shell/70 py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
          <div className="overflow-hidden rounded-[2rem] shadow-velmora">
            <div className="relative aspect-[4/5] bg-velmora-ink">
              <span id="story-image-prompt" className="sr-only">
                editorial portrait of woman arranging fine gold jewelry on linen in warm soft light
              </span>
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Velmora brand story"
                data-strk-img-id="velmora-story-image-a3f211"
                data-strk-img="[story-image-prompt] [story-description] [story-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="1000"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-taupe">
              Brand Story
            </p>
            <h2 id="story-title" className="mt-3 font-display text-5xl text-velmora-ink sm:text-6xl">
              Jewelry made for the pause before the day begins
            </h2>
            <p id="story-description" className="mt-6 text-base leading-8 text-velmora-taupe">
              Velmora Fine Jewelry was imagined as an intimate direct-to-consumer
              house where warm gold tones, tactile textures, and accessible pricing
              can live in the same conversation. Each piece is designed to feel
              effortless on weekdays and still meaningful enough to give.
            </p>
            <Link
              to="/shop"
              className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-velmora-gold transition hover:text-velmora-gold-deep"
            >
              Our Story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-taupe">
            Testimonials
          </p>
          <h2 className="mt-3 font-display text-5xl text-velmora-ink sm:text-6xl">
            Loved for gifting and self-purchase alike
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-[2rem] border border-velmora-mist/60 bg-velmora-paper px-6 py-8 shadow-soft"
            >
              <div className="flex items-center gap-1 text-velmora-gold">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={`${testimonial.name}-${index}`} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 text-base leading-8 text-velmora-taupe">“{testimonial.quote}”</p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-velmora-ink">
                {testimonial.name}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="journal" className="border-y border-velmora-mist/60 bg-velmora-shell/70 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-taupe">
                Journal
              </p>
              <h2 className="mt-3 font-display text-5xl text-velmora-ink sm:text-6xl">
                Notes on gifting, layering, and everyday shine
              </h2>
            </div>
            <Link
              to="/shop"
              className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-gold transition hover:text-velmora-gold-deep"
            >
              Explore the collection
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {journalEntries.map((entry) => (
              <article
                key={entry.id}
                className="rounded-[2rem] border border-velmora-mist/60 bg-velmora-paper px-6 py-8 shadow-soft"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-taupe">
                  {entry.eyebrow}
                </p>
                <h3 className="mt-4 font-display text-4xl text-velmora-ink">{entry.title}</h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-taupe">
                  {entry.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="newsletter" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-velmora-gold px-6 py-12 text-velmora-paper shadow-velmora sm:px-10 lg:px-14">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-paper/80">
                Join the list
              </p>
              <h2 className="mt-3 font-display text-5xl sm:text-6xl">
                Join for 10% off your first order
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-paper/80">
                Receive early access to limited drops, care notes, and thoughtful gift edits.
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
                className="h-14 rounded-full border border-velmora-paper/30 bg-velmora-paper/10 px-5 text-sm text-velmora-paper placeholder:text-velmora-paper/65 focus:border-velmora-paper focus:outline-none"
              />
              <button
                type="submit"
                className="h-14 rounded-full bg-velmora-paper px-6 text-sm font-semibold uppercase tracking-[0.28em] text-velmora-ink transition hover:bg-velmora-shell"
              >
                Join now
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage
