import { Link } from 'react-router-dom'
import { categories, products, testimonials, ugcMoments } from '../data/products'
import { useCart } from '../components/store/CartContext'
import ProductCard from '../components/store/ProductCard'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import { StrkBackground, StrkImage } from '../components/ui/StockImage'
import { useRef } from 'react'
import { useStrkImages } from '../lib/useStrkImages'

const trustPoints = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function HomePage() {
  const { addItem } = useCart()
  const containerRef = useRef(null)

  useStrkImages(containerRef)

  return (
    <div ref={containerRef} className="bg-shell text-ink">
      <section className="relative min-h-[100svh] overflow-hidden bg-obsidian text-shell">
        <StrkBackground
          id="hero-bg-velmora-71a"
          queryIds={['hero-subtitle', 'hero-title']}
          ratio="16x9"
          width="1800"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/85 via-obsidian/55 to-obsidian/35" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl items-end px-4 pb-20 pt-32 md:px-8 md:pb-24">
          <div className="max-w-2xl space-y-8">
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">
              Velmora Fine Jewelry
            </p>
            <div className="space-y-5">
              <h1 id="hero-title" className="font-serif text-6xl leading-[0.9] md:text-8xl">
                Crafted to be Treasured
              </h1>
              <p id="hero-subtitle" className="max-w-xl text-base leading-7 text-shell/80 md:text-lg">
                Quietly luxurious demi-fine jewelry designed for self-purchase, gifting,
                and all the little rituals that deserve a golden finish.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link to="/shop">
                <Button size="lg">Shop the Collection</Button>
              </Link>
              <Link to="/shop?category=Gift%20Sets">
                <Button variant="outline" size="lg" className="border-shell/30 text-shell hover:border-champagne hover:text-champagne">
                  Explore Gift Sets
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="border-y border-parchment bg-mist">
        <div className="mx-auto grid max-w-7xl gap-3 px-4 py-4 text-center text-[11px] uppercase tracking-[0.24em] text-stone md:grid-cols-4 md:px-8">
          {trustPoints.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <SectionHeading
          eyebrow="Bestsellers"
          title="Pieces loved for every day and every gifting list"
          description="Our bestselling ear cuffs, necklaces, huggies, and gift sets are designed to feel elevated from first wear to final reveal."
        />
        <div className="mt-12 grid gap-10 md:grid-cols-2 xl:grid-cols-5">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              priority={index === 0}
              onAddToCart={(item) => addItem(item, item.tones[0], 1)}
            />
          ))}
        </div>
      </section>

      <section className="border-y border-parchment bg-obsidian py-20 text-shell md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading
            eyebrow="Styled in Real Life"
            title="A reel-style look at how Velmora is worn"
            description="Soft layers, polished ear stacks, and gifting moments captured in a warm editorial mood."
            className="text-shell [&_h2]:text-shell [&_p]:text-shell/75"
          />
          <div className="mt-10 flex gap-4 overflow-x-auto pb-2">
            {ugcMoments.map((moment, index) => {
              const titleId = `ugc-${moment.id}-title`
              const descId = `ugc-${moment.id}-desc`

              return (
                <article
                  key={moment.id}
                  className="group relative h-[420px] min-w-[240px] overflow-hidden rounded-[32px] border border-shell/10 bg-shell/5 shadow-card md:h-[520px] md:min-w-[280px]"
                >
                  <StrkImage
                    id={`ugc-card-${moment.id}-${index}`}
                    alt={moment.caption}
                    queryIds={[descId, titleId]}
                    ratio="9x16"
                    width="700"
                    className="transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent px-6 pb-6 pt-20">
                    <p id={titleId} className="font-serif text-3xl text-shell">
                      {moment.caption}
                    </p>
                    <p id={descId} className="mt-2 text-sm leading-6 text-shell/75">
                      {moment.description}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <SectionHeading
          eyebrow="Shop by Category"
          title="Edit your jewelry wardrobe by silhouette"
          description="From sculptural drops to delicate layering pieces, find the category that fits the moment."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {categories.map((category, index) => {
            const titleId = `category-${category.id}-title`
            const descId = `category-${category.id}-desc`

            return (
              <Link
                key={category.id}
                to={`/shop?category=${encodeURIComponent(category.name)}`}
                className="group relative overflow-hidden rounded-[34px] bg-mist shadow-card"
              >
                <div className="aspect-[4/5]">
                  <StrkImage
                    id={`category-${category.id}-img-${index}`}
                    alt={category.name}
                    queryIds={[descId, titleId]}
                    ratio="4x3"
                    width="900"
                    className="transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent opacity-80 transition duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 px-6 pb-6 pt-16 text-shell">
                  <p id={titleId} className="font-serif text-4xl">
                    {category.name}
                  </p>
                  <p id={descId} className="mt-2 max-w-xs text-sm leading-6 text-shell/80 opacity-0 transition duration-300 group-hover:opacity-100">
                    {category.description}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section id="story" className="bg-blush py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:px-8 md:items-center">
          <div className="overflow-hidden rounded-[34px] bg-mist shadow-velvet">
            <div className="aspect-[4/5]">
              <StrkImage
                id="brand-story-img-31f"
                alt="Velmora brand story"
                queryIds={['story-copy', 'story-title']}
                ratio="4x3"
                width="1200"
              />
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.28em] text-bronze">The Brand Story</p>
            <h2 id="story-title" className="font-serif text-5xl leading-none text-ink md:text-6xl">
              Jewelry that feels inherited, even when it is newly yours.
            </h2>
            <p id="story-copy" className="max-w-xl text-base leading-8 text-stone md:text-lg">
              Velmora was created for women who want a polished finishing touch without waiting
              for a special occasion. Our pieces balance warmth, softness, and heirloom-inspired
              detail so they layer easily into daily rituals and gift beautifully.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center text-xs uppercase tracking-[0.24em] text-ink transition hover:text-bronze"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <SectionHeading
          eyebrow="Testimonials"
          title="What customers are saying"
          description="Short notes from women wearing Velmora for self-purchase, occasion dressing, and thoughtful gifting."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-[30px] border border-parchment bg-mist p-8 shadow-card">
              <p className="text-champagne">★★★★★</p>
              <p className="mt-5 text-base leading-8 text-stone">“{testimonial.quote}”</p>
              <p className="mt-6 text-xs uppercase tracking-[0.24em] text-ink">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="journal" className="px-4 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto max-w-5xl rounded-[36px] bg-obsidian px-6 py-12 text-shell shadow-velvet md:px-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.28em] text-champagne">Newsletter</p>
              <h2 className="font-serif text-5xl leading-none md:text-6xl">
                Join for 10% off your first order
              </h2>
              <p className="max-w-xl text-base leading-7 text-shell/75">
                Early access to launches, gifting edits, and styling notes that feel more editorial than promotional.
              </p>
            </div>
            <form className="grid gap-3 md:grid-cols-[1fr_auto]">
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Email address"
                className="h-14 rounded-full border border-shell/15 bg-shell/10 px-5 text-sm text-shell placeholder:text-shell/45 focus:outline-none focus:ring-2 focus:ring-champagne/60"
              />
              <Button size="lg">Join</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
