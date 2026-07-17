import { ArrowRight, Quote, Star } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { subscribeToNewsletter } from '@/api/newsletterSubscriptions'
import ProductCard from '@/components/product/ProductCard'
import { categories, products } from '@/data/products'
import { getStrkImageUrl } from '@/lib/strkImages'

const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

const ugcCards = [
  { id: 'morning-stack', caption: 'Morning gold stacks', text: 'Golden Sphere Huggies worn on ear' },
  { id: 'soft-neckline', caption: 'Soft neckline glow', text: 'Majestic Flora Nectar necklace on model' },
  { id: 'date-night', caption: 'Date-night shimmer', text: 'Amber Lace Earrings warm evening look' },
  { id: 'gift-ready', caption: 'Gift-ready rituals', text: 'Royal Heirloom Set in velvet gift box' },
]

const testimonials = [
  { name: 'Maya R.', text: 'The huggies feel substantial without being heavy. They look far more expensive than they are.' },
  { name: 'Leah S.', text: 'I bought the floral necklace as a gift and ended up ordering one for myself the same week.' },
  { name: 'Nina K.', text: 'Beautiful packaging, warm gold tone, and no irritation on sensitive ears.' },
]

export default function HomePage({ onAddToCart }) {
  const [email, setEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState('idle')
  const [newsletterMessage, setNewsletterMessage] = useState('')

  const handleNewsletterSubmit = (event) => {
    event.preventDefault()
    const cleanEmail = email.trim()

    if (!/^\S+@\S+\.\S+$/.test(cleanEmail)) {
      setNewsletterStatus('error')
      setNewsletterMessage('Please enter a valid email address.')
      return
    }

    setNewsletterStatus('submitting')
    setNewsletterMessage('')

    subscribeToNewsletter(cleanEmail)
      .then(() => {
        setNewsletterStatus('success')
        setNewsletterMessage('Welcome to the private list. Your 10% code is on its way.')
        setEmail('')
      })
      .catch((error) => {
        setNewsletterStatus('error')
        setNewsletterMessage(error.message || 'Unable to join right now. Please try again.')
      })
  }

  return (
    <main className="bg-velmora-ivory text-velmora-ink">
      <section className="relative min-h-screen overflow-hidden bg-velmora-cocoa text-velmora-ivory">
        <div
          className="absolute inset-0 opacity-70"
          data-strk-bg-id="velmora-hero-bg-quiet-luxury"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/45 via-velmora-cocoa/45 to-velmora-cocoa/80" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-28">
          <div className="max-w-3xl animate-fade-up">
            <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.32em] text-velmora-champagne">Demi-fine gold jewelry</p>
            <h1 id="hero-title" className="font-serifDisplay text-6xl font-medium leading-[0.95] text-velmora-ivory sm:text-7xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="mt-7 max-w-xl font-sans text-base leading-8 text-velmora-oat sm:text-lg">
              Warm, luminous pieces for everyday rituals, thoughtful gifting, and the quiet confidence of self-purchase.
            </p>
            <Link to="/shop" className="mt-9 inline-flex items-center gap-3 rounded-full bg-velmora-gold px-8 py-4 font-sans text-xs font-bold uppercase tracking-[0.24em] text-velmora-ink shadow-glow transition hover:bg-velmora-champagne">
              Shop the Collection <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <div className="border-y border-velmora-oat bg-velmora-pearl text-velmora-cocoa">
        <div className="mx-auto grid max-w-7xl gap-3 px-5 py-4 text-center font-sans text-[11px] font-semibold uppercase tracking-[0.22em] sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-12">
          {trustItems.map((item) => <span key={item}>{item}</span>)}
        </div>
      </div>

      <section id="shop" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-12">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-velmora-gold">Most loved</p>
            <h2 className="mt-3 font-serifDisplay text-5xl text-velmora-cocoa">Bestsellers</h2>
          </div>
          <Link to="/shop" className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.24em] text-velmora-cocoa transition hover:text-velmora-gold">
            View all pieces <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} contextLabel="Velmora bestselling demi-fine gold jewelry" />)}
        </div>
      </section>

      <section className="overflow-hidden bg-velmora-cocoa py-16 text-velmora-ivory md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-velmora-champagne">Seen on you</p>
              <h2 id="ugc-title" className="mt-3 font-serifDisplay text-5xl">Styled in Motion</h2>
            </div>
            <p className="hidden max-w-xs font-sans text-sm leading-6 text-velmora-oat sm:block">A reel-inspired glance at everyday gold, softly worn and naturally lit.</p>
          </div>
          <div className="flex snap-x gap-5 overflow-x-auto pb-3">
            {ugcCards.map((card) => {
              const textId = `ugc-${card.id}-text`
              const captionId = `ugc-${card.id}-caption`
              const imageId = `ugc-${card.id}-velmora`
              return (
                <article key={card.id} className="relative h-[420px] w-64 shrink-0 snap-start overflow-hidden rounded-[2rem] bg-velmora-espresso shadow-editorial sm:w-72">
                  <img
                    alt={card.caption}
                    className="h-full w-full object-cover opacity-80 transition duration-700 hover:scale-105"
                    data-strk-img-id={imageId}
                    data-strk-img={`[${textId}] [${captionId}] [ugc-title]`}
                    data-strk-img-ratio="9x16"
                    data-strk-img-width="500"
                    src={getStrkImageUrl(imageId)}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velmora-ink/80 to-transparent p-6">
                    <p id={captionId} className="font-serifDisplay text-2xl text-velmora-ivory">{card.caption}</p>
                    <p id={textId} className="sr-only">{card.text}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-12">
        <div className="mb-9 text-center">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-velmora-gold">Find your signature</p>
          <h2 id="category-section-title" className="mt-3 font-serifDisplay text-5xl text-velmora-cocoa">Shop by Category</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category) => {
            const titleId = `category-${category.id}-title`
            const descId = `category-${category.id}-desc`
            const imageId = `category-${category.id}-velmora`
            return (
              <Link key={category.id} to="/shop" className="group relative block aspect-[4/5] overflow-hidden rounded-[2rem] bg-velmora-oat shadow-editorial">
                <img
                  alt={category.label}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  data-strk-img-id={imageId}
                  data-strk-img={`[${descId}] [${titleId}] [category-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src={getStrkImageUrl(imageId)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/70 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-7 text-velmora-ivory transition duration-300 group-hover:translate-y-0">
                  <h3 id={titleId} className="font-serifDisplay text-4xl">{category.label}</h3>
                  <p id={descId} className="mt-2 max-w-sm font-sans text-sm leading-6 text-velmora-oat opacity-0 transition duration-300 group-hover:opacity-100">{category.description}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section id="story" className="bg-velmora-pearl py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
          <div className="overflow-hidden rounded-[2.25rem] bg-velmora-oat shadow-editorial">
            <img
              alt="Velmora jewelry atelier"
              className="h-full min-h-[420px] w-full object-cover"
              data-strk-img-id="brand-story-atelier-velmora"
              data-strk-img="[story-copy] [story-title]"
              data-strk-img-ratio="3x2"
              data-strk-img-width="1000"
              src={getStrkImageUrl('brand-story-atelier-velmora')}
            />
          </div>
          <div className="flex items-center">
            <div className="max-w-xl text-velmora-cocoa">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-velmora-gold">Our point of view</p>
              <h2 id="story-title" className="mt-4 font-serifDisplay text-5xl leading-tight md:text-6xl">Gold pieces with a sense of permanence.</h2>
              <p id="story-copy" className="mt-6 font-sans text-base leading-8 text-velmora-taupe">
                Velmora was created for women who want jewelry that feels considered, personal, and easy to wear. We pair refined shapes with accessible demi-fine materials so each piece feels special long after the box is opened.
              </p>
              <a href="#" className="mt-8 inline-flex items-center gap-3 font-sans text-xs font-bold uppercase tracking-[0.24em] text-velmora-cocoa transition hover:text-velmora-gold">Our Story <ArrowRight className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </section>

      <section id="journal" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-12">
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((review) => (
            <article key={review.name} className="rounded-[1.75rem] border border-velmora-oat bg-velmora-pearl p-7 text-velmora-cocoa shadow-sm">
              <Quote className="mb-5 h-6 w-6 text-velmora-gold" />
              <div className="mb-4 flex gap-1 text-velmora-gold">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}</div>
              <p className="font-sans text-sm leading-7 text-velmora-taupe">“{review.text}”</p>
              <p className="mt-5 font-serifDisplay text-xl text-velmora-cocoa">{review.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 md:pb-24 lg:px-12">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-velmora-rose p-8 text-center text-velmora-ink shadow-editorial md:p-12">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-velmora-cocoa">Velmora private list</p>
          <h2 className="mt-3 font-serifDisplay text-5xl text-velmora-cocoa">Join for 10% off your first order</h2>
          <p className="mx-auto mt-4 max-w-xl font-sans text-sm leading-7 text-velmora-cocoa/80">Receive quiet-luxury styling notes, early collection previews, and a welcome code.</p>
          <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row" onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email address"
              className="min-h-12 flex-1 rounded-full border border-velmora-cocoa/20 bg-velmora-pearl px-5 font-sans text-sm text-velmora-cocoa placeholder:text-velmora-taupe focus:border-velmora-gold focus:outline-none focus:ring-2 focus:ring-velmora-gold/30"
            />
            <button
              type="submit"
              disabled={newsletterStatus === 'submitting'}
              className="rounded-full bg-velmora-cocoa px-7 py-3 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-velmora-ivory transition hover:bg-velmora-espresso disabled:cursor-not-allowed disabled:opacity-70"
            >
              {newsletterStatus === 'submitting' ? 'Joining…' : 'Join'}
            </button>
          </form>
          {newsletterMessage && (
            <p className={`mx-auto mt-4 max-w-xl font-sans text-sm font-medium ${newsletterStatus === 'error' ? 'text-velmora-ink' : 'text-velmora-cocoa'}`} role={newsletterStatus === 'error' ? 'alert' : 'status'}>
              {newsletterMessage}
            </p>
          )}
        </div>
      </section>
    </main>
  )
}
