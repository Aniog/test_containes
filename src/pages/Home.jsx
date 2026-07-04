import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard.jsx'
import Stars from '@/components/product/Stars.jsx'
import { categories, products } from '@/data/products.js'
import { imagePlaceholder, loadStrikinglyImages } from '@/lib/imageHelpers.js'

const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

const ugcCards = [
  { id: 'morning-glow', caption: 'A little gold for morning light.' },
  { id: 'date-night', caption: 'Huggies that stay through dinner.' },
  { id: 'gift-unboxed', caption: 'Gift-boxed, ribboned, remembered.' },
  { id: 'layered-neck', caption: 'Soft layers, never too much.' },
  { id: 'ear-stack', caption: 'The ear stack feels effortless.' },
]

const testimonials = [
  { name: 'Maya R.', text: 'The huggies look far more expensive than they are. I wear them almost every day.' },
  { name: 'Elise K.', text: 'Beautiful packaging and the necklace has the prettiest warm shimmer in photos.' },
  { name: 'Nora S.', text: 'Finally jewelry that feels special enough to gift but easy enough for daily wear.' },
]

export default function Home() {
  const containerRef = useRef(null)
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    return loadStrikinglyImages(containerRef.current)
  }, [])

  const handleNewsletter = (event) => {
    event.preventDefault()
    setMessage(email.trim() ? 'Welcome to Velmora. Your first-order note is on its way.' : 'Please enter your email to join.')
    if (email.trim()) setEmail('')
  }

  return (
    <main ref={containerRef} id="top" className="bg-velmora-ivory text-velmora-espresso">
      <section className="relative min-h-[92vh] overflow-hidden bg-velmora-espresso text-velmora-cream">
        <img
          alt="Warm-lit gold jewelry close-up on a model"
          className="absolute inset-0 h-full w-full object-cover opacity-80"
          data-strk-img-id="velmora-hero-image-d71f4"
          data-strk-img="[hero-image-context] [hero-subtitle] [hero-title]"
          data-strk-img-ratio="16x9"
          data-strk-img-width="1800"
          src={imagePlaceholder}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-espresso/45 via-velmora-espresso/40 to-velmora-espresso/75" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-5 pb-20 pt-32 sm:px-8 lg:px-10 lg:pb-24">
          <div className="max-w-2xl">
            <p id="hero-image-context" className="sr-only">Warm-lit close-up of gold jewelry worn on a model</p>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-velmora-champagne">
              Demi-fine gold jewelry
            </p>
            <h1 id="hero-title" className="font-serif text-6xl font-medium leading-[0.95] text-velmora-cream sm:text-7xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-velmora-champagne sm:text-lg">
              Warm, luminous pieces for everyday rituals, thoughtful gifting, and the moments that become keepsakes.
            </p>
            <Link
              to="/shop"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-velmora-gold px-7 py-4 text-xs font-bold uppercase tracking-[0.26em] text-velmora-cream transition hover:bg-velmora-cream hover:text-velmora-espresso"
            >
              Shop the Collection <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-velmora-espresso/10 bg-velmora-champagne text-velmora-espresso">
        <div className="mx-auto grid max-w-7xl gap-3 px-5 py-4 text-center text-[11px] font-bold uppercase tracking-[0.24em] sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-10">
          {trustItems.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-10">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-gold">Bestsellers</p>
            <h2 className="mt-3 font-serif text-5xl text-velmora-espresso md:text-6xl">Softly luminous, always reached for.</h2>
          </div>
          <Link to="/shop" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso transition hover:text-velmora-gold">
            Shop all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} priority={index === 0} />
          ))}
        </div>
      </section>

      <section id="journal" className="overflow-hidden bg-velmora-espresso py-16 text-velmora-cream md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-8 flex items-end justify-between gap-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-gold">Velmora on you</p>
              <h2 className="mt-3 font-serif text-5xl text-velmora-cream">Reel-worthy rituals.</h2>
            </div>
            <p className="hidden max-w-sm text-sm leading-6 text-velmora-champagne md:block">
              A horizontal strip of warm-lit styling notes: ear stacks, necklace layers, and quiet gifting moments.
            </p>
          </div>
          <div className="no-scrollbar flex gap-4 overflow-x-auto pb-3">
            {ugcCards.map((card) => (
              <article key={card.id} className="group relative h-[420px] w-[236px] flex-none overflow-hidden rounded-[1.75rem] bg-velmora-mocha shadow-soft">
                <img
                  alt={card.caption}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  data-strk-img-id={`ugc-${card.id}-3e7a`}
                  data-strk-img={`[ugc-caption-${card.id}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="500"
                  src={imagePlaceholder}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/75 via-transparent to-transparent" />
                <p id={`ugc-caption-${card.id}`} className="absolute bottom-5 left-5 right-5 font-serif text-2xl leading-7 text-velmora-cream">
                  {card.caption}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-10">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-gold">Shop by category</p>
          <h2 className="mt-3 font-serif text-5xl text-velmora-espresso">Find your signature glow.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} to="/shop" className="group relative min-h-[420px] overflow-hidden bg-velmora-champagne text-velmora-cream">
              <img
                alt={category.label}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                data-strk-img-id={`category-${category.id}-7ab8`}
                data-strk-img={`[category-${category.id}-desc] [category-${category.id}-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src={imagePlaceholder}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/80 via-velmora-espresso/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 transition duration-300 md:translate-y-10 md:group-hover:translate-y-0">
                <h3 id={`category-${category.id}-title`} className="font-serif text-5xl text-velmora-cream">
                  {category.label}
                </h3>
                <p id={`category-${category.id}-desc`} className="mt-3 text-sm leading-6 text-velmora-champagne opacity-100 md:opacity-0 md:transition md:group-hover:opacity-100">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="story" className="bg-velmora-cream py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
          <div className="relative min-h-[520px] overflow-hidden bg-velmora-champagne">
            <img
              alt="Velmora jewelry studio details"
              className="absolute inset-0 h-full w-full object-cover"
              data-strk-img-id="story-atelier-b41d"
              data-strk-img="[story-copy] [story-heading]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              src={imagePlaceholder}
            />
          </div>
          <div className="text-velmora-espresso lg:pl-12">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-gold">Brand story</p>
            <h2 id="story-heading" className="mt-4 font-serif text-5xl leading-tight md:text-6xl">
              Designed like heirlooms, priced for the present.
            </h2>
            <p id="story-copy" className="mt-6 text-base leading-8 text-velmora-mocha">
              Velmora began with a simple belief: the jewelry you reach for every morning should feel as considered as the pieces saved for special occasions. Each design pairs warm 18K gold plating with thoughtful proportions, comfortable wear, and quietly memorable detail.
            </p>
            <Link to="/shop" className="mt-8 inline-flex items-center gap-3 border-b border-velmora-gold pb-2 text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso transition hover:text-velmora-gold">
              Our Story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-10">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((review) => (
            <article key={review.name} className="border border-velmora-espresso/10 bg-velmora-cream p-7 text-velmora-espresso shadow-sm">
              <Stars dark />
              <p className="mt-6 font-serif text-2xl leading-8 text-velmora-espresso">“{review.text}”</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-velmora-gold">{review.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 md:pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden bg-velmora-gold text-velmora-cream shadow-editorial">
          <div className="grid gap-8 p-7 md:grid-cols-[1.1fr_0.9fr] md:p-12 lg:p-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-cream/80">Private list</p>
              <h2 className="mt-3 font-serif text-5xl leading-tight text-velmora-cream md:text-6xl">Join for 10% off your first order.</h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-velmora-ivory">
                Receive styling notes, early access to small drops, and considered gifting reminders.
              </p>
            </div>
            <form onSubmit={handleNewsletter} className="self-end">
              <div className="flex flex-col gap-3 rounded-full bg-velmora-cream p-2 sm:flex-row">
                <label className="sr-only" htmlFor="newsletter-email">Email address</label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  className="min-h-12 flex-1 rounded-full bg-transparent px-5 text-sm text-velmora-espresso outline-none placeholder:text-velmora-mocha"
                />
                <button className="rounded-full bg-velmora-espresso px-6 py-3 text-xs font-bold uppercase tracking-[0.24em] text-velmora-cream transition hover:bg-velmora-mocha" type="submit">
                  Join
                </button>
              </div>
              {message ? <p className="mt-4 text-sm text-velmora-cream" role="status">{message}</p> : null}
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
