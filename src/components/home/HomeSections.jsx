import { Link } from "react-router-dom"
import { ArrowRight, Gem, Globe, Leaf, RefreshCcw } from "lucide-react"
import ProductCard from "@/components/ProductCard"
import StrkImage from "@/components/StrkImage"
import { Eyebrow, RatingStars, Reveal } from "@/components/ui"
import { categories, products } from "@/data/products"

const trustItems = [
  { icon: Globe, label: "Free Worldwide Shipping" },
  { icon: RefreshCcw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: Leaf, label: "Hypoallergenic" },
]

export function TrustBar() {
  return (
    <section className="border-b border-hairline bg-ivory">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-4 px-4 py-6 md:grid-cols-4 md:px-8">
        {trustItems.map((item) => (
          <div key={item.label} className="flex items-center justify-center gap-2.5">
            <item.icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-noir md:text-[11px]">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Bestsellers() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>The Icons</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-light text-noir md:text-5xl">
              Bestsellers, <em className="italic text-gold-deep">adored</em> daily
            </h2>
          </div>
          <Link
            to="/shop"
            className="group inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-noir transition-colors hover:text-gold-deep"
          >
            View all pieces
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 md:mt-16 md:grid-cols-3 md:gap-x-6 lg:grid-cols-5">
          {products.map((product, i) => (
            <Reveal key={product.id} delay={i * 60}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

const reels = [
  { id: "reel-1", imgId: "reel-img-1-a4f2c8", caption: "Golden hour, golden ears", tag: "Vivid Aura Jewels" },
  { id: "reel-2", imgId: "reel-img-2-b7d3e1", caption: "Layers that speak softly", tag: "Majestic Flora Nectar" },
  { id: "reel-3", imgId: "reel-img-3-c2e5f4", caption: "The everyday dome", tag: "Golden Sphere Huggies" },
  { id: "reel-4", imgId: "reel-img-4-d8a1b6", caption: "Lace, but make it gold", tag: "Amber Lace Earrings" },
  { id: "reel-5", imgId: "reel-img-5-e3c9a2", caption: "Boxed and beloved", tag: "Royal Heirloom Set" },
]

export function ReelsRow() {
  return (
    <section className="bg-noir py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="flex items-end justify-between gap-6">
          <div>
            <Eyebrow className="text-gold-light">@velmora.jewelry</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-light text-ivory md:text-5xl">
              Worn by <em className="italic text-gold-light">you</em>
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-xs leading-relaxed text-muted-dark md:block">
            Tag @velmora.jewelry to be featured in our community edit.
          </p>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <div className="no-scrollbar mt-12 flex gap-4 overflow-x-auto px-4 pb-2 md:px-8 lg:gap-6">
          {reels.map((reel) => (
            <figure
              key={reel.id}
              className="group relative aspect-[9/16] w-[200px] shrink-0 overflow-hidden bg-noir-soft md:w-[240px]"
            >
              <StrkImage
                imgId={reel.imgId}
                query={`[reel-caption-${reel.id}] ${reel.tag} gold jewelry worn on ear and neck, editorial close-up`}
                ratio="9x16"
                width="480"
                alt={reel.caption}
                className="h-full w-full transition-transform duration-700 ease-luxe group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4">
                <p id={`reel-caption-${reel.id}`} className="font-serif text-lg italic leading-snug text-ivory">
                  “{reel.caption}”
                </p>
                <p className="mt-1.5 text-[9px] uppercase tracking-[0.22em] text-gold-light">{reel.tag}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

export function CategoryTiles() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="text-center">
          <Eyebrow>Curated for you</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl font-light text-noir md:text-5xl">Shop by Category</h2>
        </Reveal>

        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-3 md:gap-6">
          {categories.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 80}>
              <Link
                to={`/shop?category=${cat.id}`}
                className="group relative block aspect-[3/4] overflow-hidden bg-noir"
              >
                <img
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}] elegant gold jewelry editorial photography, warm tones`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.id}
                  loading="lazy"
                  draggable={false}
                  className="h-full w-full object-cover opacity-90 transition-all duration-700 ease-luxe group-hover:scale-105 group-hover:opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir/70 via-noir/10 to-transparent" />
                <span className="sr-only" id={cat.descId}>{cat.description}</span>
                <div className="absolute inset-x-0 bottom-0 flex flex-col items-center p-6 text-center">
                  <span
                    id={cat.titleId}
                    className="font-serif text-2xl font-light uppercase tracking-[0.25em] text-ivory"
                  >
                    {cat.id}
                  </span>
                  <span className="mt-3 inline-flex translate-y-2 items-center gap-2 text-[10px] font-medium uppercase tracking-[0.25em] text-gold-light opacity-0 transition-all duration-500 ease-luxe group-hover:translate-y-0 group-hover:opacity-100">
                    Discover <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function BrandStory() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2 md:gap-16 md:px-8">
        <Reveal>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden bg-cream">
              <StrkImage
                imgId="story-atelier-img-9f2b6d"
                query="[story-heading] [story-body] jewelry atelier, artisan hands crafting gold jewelry, warm window light"
                ratio="4x3"
                width="900"
                alt="The Velmora atelier"
                className="h-full w-full"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 hidden h-24 w-24 items-center justify-center border border-gold/40 md:flex">
              <span className="text-center font-serif text-xs italic leading-tight text-gold-deep">
                since<br />2019
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <Eyebrow>Our Story</Eyebrow>
          <h2 id="story-heading" className="mt-4 font-serif text-4xl font-light leading-tight text-noir md:text-5xl">
            Heirloom feeling,<br />
            <em className="italic text-gold-deep">everyday</em> price
          </h2>
          <p id="story-body" className="mt-6 text-[15px] font-light leading-relaxed text-muted">
            Velmora began at a single workbench with one belief: the pieces you wear
            every day should feel like heirlooms. We plate recycled brass in a
            generous layer of 18k gold, set every crystal by hand, and finish each
            piece with a tarnish-resistant coat — so your jewelry keeps its warmth
            long after the moment you bought it for.
          </p>
          <p className="mt-4 text-[15px] font-light leading-relaxed text-muted">
            Small batches. Honest pricing. Jewelry made to be lived in, gifted,
            and passed along.
          </p>
          <Link
            to="/about"
            className="group mt-8 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.25em] text-noir transition-colors hover:text-gold-deep"
          >
            Read our story
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

const testimonials = [
  {
    quote: "The huggies haven't left my ears since they arrived. They look triple the price — my jeweler asked where they were from.",
    name: "Amelia R.",
  },
  {
    quote: "Bought the Heirloom Set for my sister's birthday. The box, the ribbon, the pieces themselves — she thought I spent hundreds.",
    name: "Sofia M.",
  },
  {
    quote: "I have sensitive skin and these are the first 'affordable' earrings that don't react. Six months of daily wear, still perfectly gold.",
    name: "Priya K.",
  },
]

export function Testimonials() {
  return (
    <section className="border-t border-hairline bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="text-center">
          <Eyebrow>Kind Words</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl font-light text-noir md:text-5xl">
            Treasured by <em className="italic text-gold-deep">thousands</em>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <blockquote className="flex h-full flex-col border border-hairline bg-ivory p-8 text-center">
                <RatingStars rating={5} className="justify-center" />
                <p className="mt-5 flex-1 font-serif text-lg font-light italic leading-relaxed text-noir">
                  “{t.quote}”
                </p>
                <footer className="mt-6 text-[10px] font-medium uppercase tracking-[0.25em] text-muted">
                  {t.name} · Verified Buyer
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Newsletter() {
  const onSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    form.reset()
    form.querySelector("[data-newsletter-note]").textContent =
      "Welcome to Velmora — your 10% code is on its way."
  }

  return (
    <section className="bg-noir py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
        <Reveal>
          <Eyebrow className="text-gold-light">The Inner Circle</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl font-light text-ivory md:text-5xl">
            Join for <em className="italic text-gold-light">10% off</em> your first order
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm font-light leading-relaxed text-muted-dark">
            Early access to small-batch drops, styling notes, and a welcome gift
            in your inbox. No noise — just the good things.
          </p>
          <form onSubmit={onSubmit} className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="Your email address"
              aria-label="Email address"
              className="w-full flex-1 border border-hairline-dark bg-transparent px-5 py-4 text-sm text-ivory placeholder:text-muted-dark focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gold px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-noir transition-colors hover:bg-gold-light"
            >
              Subscribe
            </button>
          </form>
          <p data-newsletter-note className="mt-4 h-4 text-[11px] uppercase tracking-[0.2em] text-gold-light" />
        </Reveal>
      </div>
    </section>
  )
}
