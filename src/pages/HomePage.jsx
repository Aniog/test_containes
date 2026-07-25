import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Star } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import ProductCard from '../components/product/ProductCard.jsx'
import strkImgConfig from '../strk-img-config.json'
import { categories, products, ugcStories } from '../data/products.js'

const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

const testimonials = [
  { name: 'Maya R.', text: 'The huggies look far more expensive than they are. Beautiful weight, beautiful shine.' },
  { name: 'Elise K.', text: 'I bought the necklace as a gift and kept thinking about it, so I ordered one for myself.' },
  { name: 'Nora T.', text: 'Quiet, elegant pieces that make a white tee feel intentional. The packaging is lovely too.' },
]

export default function HomePage({ onAddToCart }) {
  const pageRef = useRef(null)
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [])

  const handleNewsletter = (event) => {
    event.preventDefault()
    if (!email.trim()) return
    setJoined(true)
    setEmail('')
  }

  return (
    <main ref={pageRef} className="bg-velmora-ivory text-velmora-espresso">
      <section className="relative min-h-[92vh] overflow-hidden bg-velmora-espresso text-white">
        <div
          className="absolute inset-0 opacity-70"
          data-strk-bg-id="velmora-hero-bg-9a18c2"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-velmora-espresso via-velmora-espresso/55 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-velmora-espresso/70 to-transparent" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24">
          <div className="max-w-2xl animate-fade-up">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-velmora-gold">Demi-fine gold jewelry</p>
            <h1 id="hero-title" className="font-serif text-6xl leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">Crafted to be Treasured</h1>
            <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-white/82 sm:text-lg">Warm 18K gold-plated pieces designed for self-purchase, meaningful gifting, and every luminous day in between.</p>
            <Link to="/shop" className="mt-9 inline-flex items-center gap-3 bg-velmora-gold px-7 py-4 text-xs font-bold uppercase tracking-[0.26em] text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-velmora-goldDeep">
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-velmora-line bg-velmora-porcelain text-velmora-espresso">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-7 gap-y-3 px-4 py-4 text-center text-[0.68rem] font-semibold uppercase tracking-[0.22em] sm:px-6 lg:px-8">
          {trustItems.map((item, index) => (
            <span key={item} className="flex items-center gap-7 text-velmora-espresso/85">
              {item}
              {index < trustItems.length - 1 && <span className="hidden h-1 w-1 rounded-full bg-velmora-gold sm:inline-block" />}
            </span>
          ))}
        </div>
      </section>

      <section id="bestsellers" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-goldDeep">Bestsellers</p>
            <h2 className="mt-3 font-serif text-5xl leading-none sm:text-6xl">Most Treasured</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-velmora-taupe">Five signature pieces under $120, selected for gifting, stacking, and everyday gold rituals.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} scope="home-bestseller" />
          ))}
        </div>
      </section>

      <section id="journal" className="border-y border-velmora-line bg-velmora-espresso py-16 text-white lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-gold">Worn by Velmora</p>
              <h2 className="mt-3 font-serif text-5xl leading-none">Reel-worthy shine</h2>
            </div>
            <p className="hidden max-w-sm text-sm leading-7 text-white/65 md:block">A horizontal strip inspired by the soft, lived-in glow of customer styling moments.</p>
          </div>
          <div className="flex snap-x gap-4 overflow-x-auto pb-4 [scrollbar-width:thin]">
            {ugcStories.map((story) => (
              <article key={story.id} className="relative h-[420px] w-[236px] shrink-0 snap-start overflow-hidden bg-velmora-sand shadow-soft">
                <span id={`ugc-${story.id}-context`} className="sr-only" aria-hidden="true">{story.context}</span>
                <span id={`ugc-${story.id}-caption`} className="sr-only" aria-hidden="true">{story.caption}</span>
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={story.caption}
                  data-strk-img-id={`ugc-${story.id}-vertical`}
                  data-strk-img={`[ugc-${story.id}-context] [ugc-${story.id}-caption]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="500"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velmora-espresso/85 to-transparent p-5 pt-20">
                  <p className="font-serif text-2xl leading-tight text-white">{story.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-9 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-goldDeep">Shop by category</p>
          <h2 className="mt-3 font-serif text-5xl leading-none sm:text-6xl">Find your gold mood</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} to={`/shop?category=${category.name}`} className="group relative min-h-[420px] overflow-hidden bg-velmora-espresso text-white shadow-soft">
              <span id={`category-${category.id}-title`} className="sr-only" aria-hidden="true">{category.name}</span>
              <span id={`category-${category.id}-desc`} className="sr-only" aria-hidden="true">{category.description}</span>
              <div
                className="absolute inset-0 opacity-78 transition duration-700 group-hover:scale-105 group-hover:opacity-90"
                data-strk-bg-id={`category-${category.id}-bg-7c4d1`}
                data-strk-bg={`[category-${category.id}-desc] [category-${category.id}-title]`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-7 transition duration-300 group-hover:translate-y-0">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">Shop</p>
                <h3 className="mt-2 font-serif text-5xl">{category.name}</h3>
                <p className="mt-3 max-w-xs text-sm leading-6 text-white/72 opacity-0 transition duration-300 group-hover:opacity-100">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="story" className="bg-velmora-porcelain py-16 text-velmora-espresso lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="relative min-h-[520px] overflow-hidden bg-velmora-sand shadow-soft">
            <span id="story-title" className="sr-only" aria-hidden="true">Velmora Fine Jewelry story</span>
            <span id="story-desc" className="sr-only" aria-hidden="true">warm gold jewelry made for modern women quiet luxury editorial craftsmanship</span>
            <div
              className="absolute inset-0"
              data-strk-bg-id="brand-story-bg-f03d21"
              data-strk-bg="[story-desc] [story-title]"
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="1000"
            />
          </div>
          <div className="mx-auto max-w-xl lg:pl-10">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-goldDeep">Our Story</p>
            <h2 className="mt-4 font-serif text-5xl leading-tight sm:text-6xl">Jewelry for the everyday heirloom.</h2>
            <p className="mt-6 text-base leading-8 text-velmora-taupe">Velmora was created for women who want premium shine without the traditional fine-jewelry markup. Each piece is designed in small, considered silhouettes: warm, polished, hypoallergenic, and easy to wear from morning meetings to candlelit dinners.</p>
            <Link to="/shop" className="mt-8 inline-flex items-center gap-3 border-b border-velmora-gold pb-2 text-xs font-bold uppercase tracking-[0.28em] text-velmora-goldDeep transition hover:text-velmora-espresso">
              Our Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((review) => (
            <article key={review.name} className="border border-velmora-line bg-velmora-porcelain p-7 text-velmora-espresso shadow-soft">
              <div className="flex gap-1 text-velmora-gold" aria-label="5 star review">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-6 font-serif text-2xl leading-8">“{review.text}”</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-velmora-taupe">{review.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-5xl border border-velmora-gold/35 bg-velmora-espresso px-6 py-12 text-center text-white shadow-luxe sm:px-10 lg:px-16">
          <Mail className="mx-auto h-7 w-7 text-velmora-gold" />
          <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-6xl">Join for 10% off your first order</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/72">Receive quiet styling notes, early collection access, and first-order savings.</p>
          <form onSubmit={handleNewsletter} className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              placeholder="Email address"
              className="min-h-14 flex-1 border border-white/20 bg-white px-4 text-sm text-velmora-espresso outline-none transition placeholder:text-velmora-taupe focus:border-velmora-gold"
            />
            <button type="submit" className="min-h-14 bg-velmora-gold px-7 text-xs font-bold uppercase tracking-[0.24em] text-white transition hover:bg-velmora-goldDeep">Join</button>
          </form>
          {joined && <p className="mt-4 text-sm text-velmora-gold" role="status">You’re in. Your first-order code is VELMORA10.</p>}
        </div>
      </section>
    </main>
  )
}
