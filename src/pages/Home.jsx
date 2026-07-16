import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Sparkles, Star } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import { categories, products, testimonials, ugcStories } from '@/data/products'
import { createNewsletterSignup } from '@/api/newsletter'
import { getVelmoraImage } from '@/data/imageAssets'
import { loadStrikinglyImages } from '@/lib/imageLoader'

const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function Home({ onAddToCart }) {
  const pageRef = useRef(null)
  const [email, setEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState('idle')
  const [newsletterMessage, setNewsletterMessage] = useState('')

  useEffect(() => loadStrikinglyImages(pageRef.current), [])

  const handleNewsletterSubmit = async (event) => {
    event.preventDefault()
    const trimmedEmail = email.trim()

    if (!/^\S+@\S+\.\S+$/.test(trimmedEmail)) {
      setNewsletterStatus('error')
      setNewsletterMessage('Please enter a valid email address.')
      return
    }

    setNewsletterStatus('submitting')
    setNewsletterMessage('')

    try {
      const created = await createNewsletterSignup(trimmedEmail)
      console.log('Newsletter signup saved', created)
      setEmail('')
      setNewsletterStatus('success')
      setNewsletterMessage('Welcome to Velmora. Your 10% code is on its way.')
    } catch (error) {
      console.error('Newsletter signup failed', error)
      setNewsletterStatus('error')
      setNewsletterMessage(error.message || 'Unable to save your email. Please try again.')
    }
  }

  return (
    <main ref={pageRef} className="bg-velmora-ivory text-velmora-ink">
      <section className="relative min-h-[92vh] overflow-hidden bg-velmora-ink text-velmora-ivory">
        <div
          className="absolute inset-0 bg-velmora-espresso"
          data-strk-bg-id="velmora-hero-bg-quiet-luxury"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-velmora-ink/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-velmora-ink via-velmora-ink/75 to-velmora-ink/30" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-velmora-ink/80 to-transparent" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-5 pb-16 pt-32 sm:px-8 md:pb-24">
          <div className="max-w-3xl animate-[velmoraRise_900ms_ease-out_both]">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-velmora-ivory/25 bg-velmora-ivory/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-velmora-champagne backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Demi-fine gold jewelry
            </p>
            <h1 id="hero-title" className="font-serif text-6xl leading-[0.9] tracking-[-0.035em] text-velmora-ivory sm:text-7xl md:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="mt-6 max-w-2xl text-base leading-8 text-velmora-ivory/80 sm:text-lg">
              Warm-lit essentials in 18K gold plating, made for everyday rituals, thoughtful gifts, and the quiet glow of self-purchase.
            </p>
            <Link
              to="/shop"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-velmora-champagne px-7 py-4 text-sm font-bold uppercase tracking-[0.24em] text-velmora-ink shadow-[0_18px_55px_rgba(185,145,91,0.25)] transition-all duration-300 hover:bg-velmora-ivory hover:translate-x-1"
            >
              Shop the Collection <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-velmora-sand/60 bg-velmora-espresso text-velmora-ivory">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-5 py-4 text-center text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-velmora-ivory/80 sm:px-8">
          {trustItems.map((item, index) => (
            <span key={item} className="flex items-center gap-6">
              {item}
              {index < trustItems.length - 1 && <span className="hidden h-1 w-1 rounded-full bg-velmora-champagne sm:block" />}
            </span>
          ))}
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
        <div className="mb-10 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-bronze">Most loved</p>
            <h2 id="bestsellers-title" className="mt-3 font-serif text-5xl leading-none text-velmora-ink md:text-6xl">Bestsellers</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-velmora-espresso/70">
            Five signature pieces with luminous gold finishes, comfortable silhouettes, and gift-ready polish.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

      <section id="journal" className="overflow-hidden bg-velmora-parchment py-16 text-velmora-ink md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-bronze">Seen in warm light</p>
              <h2 className="mt-3 font-serif text-5xl leading-none text-velmora-ink md:text-6xl" id="ugc-title">Velmora Reels</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-velmora-espresso/70">
              A scrollable strip of everyday styling moments: gifting, layering, and golden-hour shine.
            </p>
          </div>
          <div className="flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:thin]">
            {ugcStories.map((story) => {
              const captionId = `ugc-${story.id}-caption`
              const detailId = `ugc-${story.id}-detail`
              return (
                <article key={story.id} className="group relative h-[28rem] min-w-[15.5rem] snap-start overflow-hidden rounded-[2rem] bg-velmora-espresso shadow-[0_28px_70px_rgba(42,31,26,0.18)] sm:min-w-[18rem]">
                  <img
                    src={getVelmoraImage(`ugc-${story.id}-velmora`)}
                    alt={`${story.caption} jewelry styling reel`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/80 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-velmora-ivory">
                    <p id={captionId} className="font-serif text-2xl leading-tight text-velmora-ivory">{story.caption}</p>
                    <p id={detailId} className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-velmora-champagne">{story.detail}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-bronze">Find your ritual</p>
          <h2 id="category-title" className="mt-3 font-serif text-5xl leading-none text-velmora-ink md:text-6xl">Shop by Category</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => {
            const titleId = `category-${category.id}-title`
            const descId = `category-${category.id}-desc`
            return (
              <Link key={category.id} to={`/shop?category=${category.name}`} className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-velmora-espresso text-velmora-ivory">
                <img
                  src={getVelmoraImage(`category-${category.id}-velmora`)}
                  alt={`${category.name} gold jewelry category`}
                  className="h-full w-full object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/80 via-velmora-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h3 id={titleId} className="font-serif text-4xl text-velmora-ivory">{category.name}</h3>
                  <p id={descId} className="mt-2 translate-y-3 text-sm leading-6 text-velmora-ivory/75 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {category.description}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section id="story" className="bg-velmora-espresso text-velmora-ivory">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 md:items-center md:py-24">
          <div className="relative overflow-hidden rounded-[2rem] bg-velmora-parchment md:min-h-[36rem]">
            <img
              src={getVelmoraImage('story-artisan-velmora')}
              alt="Velmora gold jewelry editorial craft story"
              className="h-full min-h-[24rem] w-full object-cover"
            />
          </div>
          <div className="md:pl-8">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">Our point of view</p>
            <h2 id="story-title" className="mt-4 font-serif text-5xl leading-none text-velmora-ivory md:text-7xl">Jewelry for the close-up moments.</h2>
            <p id="story-copy" className="mt-6 max-w-xl text-base leading-8 text-velmora-ivory/75">
              Velmora designs premium-but-accessible demi-fine pieces that feel personal: soft gold, tactile curves, luminous crystals, and packaging made for the pause before opening.
            </p>
            <a href="#" className="mt-8 inline-flex items-center gap-3 border-b border-velmora-champagne pb-2 text-xs font-bold uppercase tracking-[0.24em] text-velmora-champagne transition-colors hover:text-velmora-ivory">
              Our Story <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((review) => (
            <article key={review.name} className="rounded-[1.75rem] border border-velmora-sand/60 bg-white/55 p-7 text-velmora-ink shadow-[0_20px_70px_rgba(42,31,26,0.06)]">
              <div className="flex gap-1 text-velmora-champagne" aria-label="5 star review">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 text-base leading-8 text-velmora-espresso/75">“{review.text}”</p>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.24em] text-velmora-bronze">{review.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 md:pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-velmora-blush text-velmora-ink shadow-[0_30px_90px_rgba(42,31,26,0.12)]">
          <div className="grid gap-8 p-7 md:grid-cols-[1fr_0.9fr] md:items-center md:p-12">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-velmora-bronze">
                <Mail className="h-4 w-4" /> Private list
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-none text-velmora-ink md:text-6xl">Join for 10% off your first order</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-espresso/70">
                Receive early access to new drops, gift edits, and jewelry care notes — never loud, always considered.
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="rounded-[1.5rem] border border-velmora-sand/70 bg-velmora-ivory p-4 text-velmora-ink" aria-busy={newsletterStatus === 'submitting'}>
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  className="min-h-12 flex-1 rounded-full border border-velmora-sand bg-white px-5 text-sm text-velmora-ink placeholder:text-velmora-espresso/45 focus:border-velmora-champagne focus:outline-none focus:ring-2 focus:ring-velmora-champagne/30"
                />
                <button
                  type="submit"
                  disabled={newsletterStatus === 'submitting'}
                  className="rounded-full bg-velmora-ink px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ivory transition-colors hover:bg-velmora-champagne hover:text-velmora-ink disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {newsletterStatus === 'submitting' ? 'Joining' : 'Join'}
                </button>
              </div>
              {newsletterMessage && (
                <p role={newsletterStatus === 'error' ? 'alert' : 'status'} className={`mt-3 text-sm ${newsletterStatus === 'error' ? 'text-red-700' : 'text-velmora-bronze'}`}>
                  {newsletterMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
