import { ArrowRight, Mail, Quote, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProductCard from '@/components/product/ProductCard'
import { categories, products, ugcStories } from '@/data/products'

const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

const testimonials = [
  {
    name: 'Amelia R.',
    text: 'The huggies look far more expensive than they are. I wear them nearly every day.',
  },
  {
    name: 'Nina L.',
    text: 'Beautiful packaging and the necklace has that soft glow I wanted for gifting.',
  },
  {
    name: 'Claire M.',
    text: 'Quiet, polished, and comfortable. Velmora has become my go-to for gold pieces.',
  },
]

export default function HomePage() {
  return (
    <div id="top" className="bg-velmora-cream text-velmora-espresso">
      <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-velmora-espresso text-velmora-porcelain">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-75"
          data-strk-bg-id="velmora-hero-bg-a1"
          data-strk-bg="[hero-image-context] [hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-velmora-espresso/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso via-velmora-espresso/60 to-velmora-espresso/45" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-40 md:px-8 lg:pb-24">
          <p id="hero-image-context" className="sr-only">
            Warm-lit close-up of demi-fine gold jewelry worn on a woman model, quiet luxury editorial portrait, neutral background.
          </p>
          <div className="max-w-2xl animate-fade-up text-velmora-porcelain [text-shadow:0_2px_18px_rgba(31,23,19,0.65)]">
            <p className="mb-5 inline-flex items-center gap-2 border border-velmora-champagne/55 bg-velmora-espresso/55 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-velmora-champagne backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Demi-fine essentials
            </p>
            <h1 id="hero-title" className="font-serif text-6xl font-semibold leading-[0.9] tracking-tight text-velmora-porcelain md:text-8xl lg:text-9xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-velmora-linen md:text-lg">
              Warm gold jewelry for everyday rituals, giftable moments, and the kind of glow that never asks for attention.
            </p>
            <Link
              to="/shop"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-velmora-champagne px-7 py-4 text-sm font-extrabold uppercase tracking-[0.22em] text-velmora-espresso shadow-glow transition hover:bg-velmora-porcelain"
            >
              Shop the Collection <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-velmora-linen bg-velmora-porcelain text-velmora-espresso">
        <div className="mx-auto flex max-w-7xl snap-x gap-6 overflow-x-auto px-5 py-4 text-xs font-bold uppercase tracking-[0.22em] text-velmora-sage no-scrollbar md:justify-between md:px-8">
          {trustItems.map((item) => (
            <div key={item} className="flex shrink-0 items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-velmora-champagne" />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-24">
        <div className="mb-9 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-velmora-antique">Bestsellers</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold leading-none text-velmora-espresso md:text-6xl">
              The pieces everyone reaches for
            </h2>
          </div>
          <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-velmora-antique transition hover:text-velmora-espresso">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section id="journal" className="border-y border-velmora-linen bg-velmora-espresso py-16 text-velmora-porcelain lg:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-velmora-champagne">Seen on you</p>
              <h2 className="mt-3 font-serif text-5xl font-semibold leading-none md:text-6xl">Reel-worthy rituals</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-velmora-linen">
              A horizontal strip of real-life styling moments, from soft morning stacks to candlelit gifts.
            </p>
          </div>
          <div className="flex snap-x gap-4 overflow-x-auto pb-2 no-scrollbar">
            {ugcStories.map((story) => (
              <article key={story.id} className="relative aspect-[9/16] w-[70vw] max-w-[270px] shrink-0 snap-start overflow-hidden border border-velmora-porcelain/15 bg-velmora-ink shadow-soft md:w-[230px]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 hover:scale-105"
                  data-strk-bg-id={`ugc-${story.id}`}
                  data-strk-bg={`[ugc-caption-${story.id}] [ugc-title-${story.id}]`}
                  data-strk-bg-ratio="9x16"
                  data-strk-bg-width="500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/85 via-velmora-espresso/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-velmora-porcelain">
                  <p id={`ugc-title-${story.id}`} className="font-serif text-3xl font-semibold leading-none">
                    {story.title}
                  </p>
                  <p id={`ugc-caption-${story.id}`} className="mt-2 text-sm leading-6 text-velmora-linen">
                    {story.caption}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-24">
        <div className="mb-9 text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-velmora-antique">Shop by category</p>
          <h2 className="mt-3 font-serif text-5xl font-semibold text-velmora-espresso md:text-6xl">
            Find your signature glow
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${encodeURIComponent(category.name)}`}
              className="group relative min-h-[420px] overflow-hidden border border-velmora-linen bg-velmora-espresso text-velmora-porcelain shadow-sm"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-95"
                data-strk-bg-id={`category-${category.id}`}
                data-strk-bg={`[category-desc-${category.id}] [category-title-${category.id}]`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/90 via-velmora-espresso/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 id={`category-title-${category.id}`} className="font-serif text-5xl font-semibold">
                  {category.name}
                </h3>
                <p id={`category-desc-${category.id}`} className="mt-3 max-w-xs text-sm leading-7 text-velmora-linen opacity-0 transition duration-500 group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="story" className="bg-velmora-porcelain py-16 text-velmora-espresso lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[480px] overflow-hidden border border-velmora-linen bg-velmora-linen/50 shadow-soft">
            <div
              className="absolute inset-0 bg-cover bg-center"
              data-strk-bg-id="story-editorial-bg"
              data-strk-bg="[story-copy] [story-heading]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="1000"
            />
          </div>
          <div className="lg:pl-12">
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-velmora-antique">Our Story</p>
            <h2 id="story-heading" className="mt-4 font-serif text-5xl font-semibold leading-tight md:text-7xl">
              Fine-feeling jewelry, direct from our atelier to your everyday.
            </h2>
            <p id="story-copy" className="mt-6 max-w-xl text-base leading-8 text-velmora-ink/80">
              Velmora was created for women who want the warmth of gold, the confidence of hypoallergenic materials, and the ease of direct-to-consumer pricing. Every piece is designed to feel considered, giftable, and quietly luminous.
            </p>
            <Link to="/shop" className="mt-8 inline-flex items-center gap-3 border-b border-velmora-champagne pb-2 text-sm font-bold uppercase tracking-[0.22em] text-velmora-antique transition hover:text-velmora-espresso">
              Our Story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-24">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="border border-velmora-linen bg-velmora-porcelain p-6 text-velmora-espresso shadow-sm">
              <Quote className="mb-5 h-6 w-6 text-velmora-champagne" />
              <div className="mb-4 text-sm font-bold tracking-[0.2em] text-velmora-champagne">★★★★★</div>
              <p className="text-base leading-8 text-velmora-ink/85">“{testimonial.text}”</p>
              <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-sage">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8 lg:pb-24">
        <div className="grid overflow-hidden border border-velmora-champagne/40 bg-velmora-blush text-velmora-espresso shadow-soft lg:grid-cols-[1fr_0.85fr]">
          <div className="p-8 md:p-12">
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-velmora-antique">The Velmora Letter</p>
            <h2 className="mt-4 font-serif text-5xl font-semibold leading-none md:text-6xl">
              Join for 10% off your first order
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-velmora-ink/80">
              Receive quiet styling notes, gifting reminders, and early access to limited gold drops.
            </p>
          </div>
          <form className="flex flex-col justify-center gap-3 border-t border-velmora-espresso/10 p-8 md:p-12 lg:border-l lg:border-t-0">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-velmora-antique" />
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-full border border-velmora-espresso/15 bg-velmora-porcelain px-11 py-4 text-sm text-velmora-espresso placeholder:text-velmora-sage focus:border-velmora-antique focus:outline-none"
                />
              </div>
              <button type="submit" className="rounded-full bg-velmora-espresso px-7 py-4 text-sm font-extrabold uppercase tracking-[0.2em] text-velmora-porcelain transition hover:bg-velmora-antique">
                Join
              </button>
            </div>
            <p className="text-xs leading-5 text-velmora-ink/70">No spam. Just polished notes and the occasional private offer.</p>
          </form>
        </div>
      </section>
    </div>
  )
}
