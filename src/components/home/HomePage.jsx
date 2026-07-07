import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Instagram, Mail, ShieldCheck, Sparkles, Star } from 'lucide-react'
import { products, categories, ugcMoments, testimonials } from '@/data/products'
import { subscribeToNewsletter } from '@/api/newsletter'
import { useImageLoader } from '@/lib/useImageLoader'
import ProductCard from '@/components/product/ProductCard'

const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function HomePage({ onAddToCart }) {
  const [email, setEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState('idle')
  const [newsletterMessage, setNewsletterMessage] = useState('')
  const containerRef = useImageLoader([newsletterStatus])
  const bestsellers = useMemo(() => products.slice(0, 5), [])

  const handleNewsletterSubmit = async (event) => {
    event.preventDefault()
    setNewsletterMessage('')

    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      setNewsletterStatus('error')
      setNewsletterMessage('Please enter a valid email address.')
      return
    }

    setNewsletterStatus('submitting')
    try {
      await subscribeToNewsletter(email)
      setNewsletterStatus('success')
      setNewsletterMessage('Welcome to Velmora. Your 10% code is on its way.')
      setEmail('')
    } catch (error) {
      setNewsletterStatus('error')
      setNewsletterMessage(error.message || 'We could not save your email. Please try again.')
    }
  }

  return (
    <main ref={containerRef} className="bg-velmora-ivory text-velmora-espresso">
      <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-velmora-espresso text-velmora-mist">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-75"
          data-strk-bg-id="velmora-hero-bg-2b9f61"
          data-strk-bg="[hero-subhead] [hero-title] gold jewelry on model close-up warm editorial light"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso via-velmora-espresso/45 to-velmora-espresso/15" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 md:pb-24 lg:px-8">
          <div className="max-w-3xl animate-fadeUp">
            <p className="mb-5 inline-flex items-center gap-2 border-b border-velmora-champagne/70 pb-2 text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">
              Demi-fine gold jewelry
            </p>
            <h1 id="hero-title" className="font-serifDisplay text-6xl font-semibold leading-[0.9] text-velmora-mist sm:text-7xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subhead" className="mt-6 max-w-xl text-base leading-8 text-velmora-mist/85 sm:text-lg">
              Warm gold, refined silhouettes, and gift-ready pieces designed for everyday rituals and unforgettable evenings.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center rounded-full bg-velmora-champagne px-7 py-4 text-sm font-bold uppercase tracking-[0.22em] text-velmora-espresso transition hover:-translate-y-0.5 hover:bg-velmora-mist"
              >
                Shop the Collection
              </Link>
              <a
                href="#bestsellers"
                className="inline-flex items-center justify-center rounded-full border border-velmora-mist/50 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em] text-velmora-mist transition hover:border-velmora-champagne hover:text-velmora-champagne"
              >
                View bestsellers
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-velmora-linen bg-velmora-mist text-velmora-cocoa">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 py-4 text-center text-[11px] font-bold uppercase tracking-[0.18em] sm:px-6 md:grid-cols-4 lg:px-8">
          {trustItems.map((item) => (
            <div key={item} className="px-3 py-2 text-velmora-cocoa">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="bestsellers" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 border-b border-velmora-linen pb-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-bronze">Bestsellers</p>
            <h2 className="mt-3 font-serifDisplay text-5xl font-semibold text-velmora-espresso md:text-6xl">Most treasured now</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-velmora-cocoa">
            Five customer-loved pieces with warm polish, sensitive-skin comfort, and the kind of packaging that makes every order feel like a gift.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

      <section id="journal" className="overflow-hidden bg-velmora-espresso py-16 text-velmora-mist md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-9 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">Seen on you</p>
              <h2 className="mt-3 font-serifDisplay text-5xl font-semibold text-velmora-mist">Reel-worthy glow</h2>
            </div>
            <Instagram className="hidden h-8 w-8 text-velmora-champagne sm:block" />
          </div>
          <div className="flex gap-4 overflow-x-auto pb-5 [scrollbar-width:thin]">
            {ugcMoments.map((moment) => (
              <article key={moment.id} className="group relative h-[420px] min-w-[238px] overflow-hidden rounded-[2rem] bg-velmora-cocoa shadow-soft sm:h-[480px] sm:min-w-[270px]">
                <img
                  alt={moment.caption}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  data-strk-img-id={`ugc-${moment.id}`}
                  data-strk-img={`[ugc-caption-${moment.id}] jewelry worn on woman vertical reel warm luxury`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/80 via-transparent to-transparent" />
                <p id={`ugc-caption-${moment.id}`} className="absolute inset-x-5 bottom-5 font-serifDisplay text-2xl leading-7 text-velmora-mist">
                  {moment.caption}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mb-9 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-bronze">Shop by category</p>
          <h2 className="mt-3 font-serifDisplay text-5xl font-semibold text-velmora-espresso">Curated for your ritual</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} to={`/shop?category=${category.label}`} className="group relative min-h-[420px] overflow-hidden rounded-[2rem] bg-velmora-cream text-velmora-mist shadow-soft">
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                data-strk-bg-id={`category-${category.id}`}
                data-strk-bg={`[category-copy-${category.id}] [category-title-${category.id}] gold jewelry category editorial`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/80 via-velmora-espresso/20 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 translate-y-3 transition duration-500 group-hover:translate-y-0">
                <h3 id={`category-title-${category.id}`} className="font-serifDisplay text-5xl font-semibold text-velmora-mist">{category.label}</h3>
                <p id={`category-copy-${category.id}`} className="mt-3 max-w-xs text-sm leading-6 text-velmora-mist/85 opacity-0 transition duration-500 group-hover:opacity-100">
                  {category.headline}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="about" className="bg-velmora-cream py-16 text-velmora-espresso md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:items-center lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-velmora-linen shadow-soft">
            <img
              alt="Velmora artisan jewelry details"
              className="aspect-[4/5] w-full object-cover"
              data-strk-img-id="brand-story-artisan-5c8d10"
              data-strk-img="[story-copy] [story-title] gold jewelry atelier hands warm editorial"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div className="md:pl-8">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-bronze">Velmora philosophy</p>
            <h2 id="story-title" className="mt-4 font-serifDisplay text-5xl font-semibold leading-tight text-velmora-espresso md:text-6xl">
              Fine-feeling jewelry, without the old luxury markup.
            </h2>
            <p id="story-copy" className="mt-6 text-base leading-8 text-velmora-cocoa">
              We design demi-fine gold pieces in small, considered edits: warm enough for everyday wear, polished enough for gifting, and made with skin-friendly finishes that fit beautifully into real life.
            </p>
            <Link to="/shop" className="mt-8 inline-flex items-center gap-2 border-b border-velmora-bronze pb-2 text-sm font-bold uppercase tracking-[0.22em] text-velmora-bronze transition hover:text-velmora-espresso">
              Our Story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((review) => (
            <article key={review.name} className="rounded-[2rem] border border-velmora-linen bg-velmora-mist p-7 text-velmora-espresso shadow-soft">
              <div className="flex gap-1 text-velmora-bronze" aria-label="5 star review">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 font-serifDisplay text-2xl leading-8 text-velmora-espresso">“{review.quote}”</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-velmora-cocoa">{review.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 md:pb-24 lg:px-8">
        <div className="overflow-hidden rounded-[2.5rem] bg-velmora-cocoa text-velmora-mist shadow-soft">
          <div className="grid gap-8 px-6 py-10 md:grid-cols-[1fr_0.8fr] md:items-center md:px-12 md:py-14">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-velmora-champagne/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-velmora-champagne">
                <Sparkles className="h-4 w-4" /> Private list
              </div>
              <h2 className="font-serifDisplay text-5xl font-semibold leading-tight text-velmora-mist">Join for 10% off your first order.</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-mist/80">
                Receive early access to new drops, gift edits, and warm styling notes from Velmora.
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="rounded-[2rem] bg-velmora-mist p-3 text-velmora-espresso shadow-soft">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-velmora-bronze" />
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Email address"
                    className="w-full rounded-full border border-velmora-linen bg-velmora-ivory py-4 pl-12 pr-4 text-sm text-velmora-espresso outline-none transition placeholder:text-velmora-cocoa/65 focus:border-velmora-bronze"
                    disabled={newsletterStatus === 'submitting'}
                  />
                </div>
                <button
                  type="submit"
                  disabled={newsletterStatus === 'submitting'}
                  className="rounded-full bg-velmora-espresso px-7 py-4 text-sm font-bold uppercase tracking-[0.22em] text-velmora-mist transition hover:bg-velmora-bronze disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {newsletterStatus === 'submitting' ? 'Joining' : 'Join'}
                </button>
              </div>
              {newsletterMessage && (
                <p className={`mt-3 flex items-center gap-2 px-2 text-sm ${newsletterStatus === 'error' ? 'text-red-700' : 'text-velmora-cocoa'}`} role={newsletterStatus === 'error' ? 'alert' : 'status'}>
                  <ShieldCheck className="h-4 w-4" />
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
