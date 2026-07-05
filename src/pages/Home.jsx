import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Quote, Star } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard'
import { subscribeToNewsletter } from '@/api/newsletter'
import { categories, products } from '@/data/products'

const placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"/%3E'

const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

const ugcItems = [
  { id: 'morning-stack', caption: 'The morning stack', titleId: 'ugc-morning-stack-title', imageId: 'ugc-morning-stack-2p8a' },
  { id: 'golden-hour', caption: 'Golden hour huggies', titleId: 'ugc-golden-hour-title', imageId: 'ugc-golden-hour-7s1c' },
  { id: 'soft-gifting', caption: 'A softer way to gift', titleId: 'ugc-soft-gifting-title', imageId: 'ugc-soft-gifting-4k6n' },
  { id: 'neckline', caption: 'Layered at the neckline', titleId: 'ugc-neckline-title', imageId: 'ugc-neckline-9b2x' },
  { id: 'dinner', caption: 'Dinner light, quietly', titleId: 'ugc-dinner-title', imageId: 'ugc-dinner-5m0v' },
]

const testimonials = [
  { name: 'Maya R.', text: 'The huggies look expensive, feel weightless, and arrived in the prettiest box.' },
  { name: 'Claire T.', text: 'I bought one necklace as a gift and came back for earrings for myself.' },
  { name: 'Nina S.', text: 'Warm gold tone, no irritation, and the pieces make every outfit feel finished.' },
]

export default function Home({ onAddToCart }) {
  const [email, setEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState('idle')
  const [newsletterMessage, setNewsletterMessage] = useState('')

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
      await subscribeToNewsletter(trimmedEmail)
      setNewsletterStatus('success')
      setNewsletterMessage('You are on the list. Your first-order note is on its way.')
      setEmail('')
    } catch (error) {
      setNewsletterStatus('error')
      setNewsletterMessage(error.message || 'Newsletter signup failed. Please try again.')
    }
  }

  return (
    <main className="bg-velmora-cream text-velmora-cocoa">
      <section className="relative min-h-[92vh] overflow-hidden bg-velmora-ink text-velmora-pearl">
        <div
          className="absolute inset-0 velmora-image"
          data-strk-bg-id="hero-jewelry-model-bg-8g4p"
          data-strk-bg="[hero-image-brief] [hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-velmora-ink/86 via-velmora-ink/58 to-velmora-ink/24" />
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/28 via-transparent to-velmora-ink/82" />
        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-end px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24">
          <div className="max-w-3xl animate-rise">
            <span id="hero-image-brief" className="sr-only">Warm-lit close-up of demi-fine gold jewelry on a woman model, editorial quiet luxury</span>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-velmora-champagne">Demi-fine gold jewelry</p>
            <h1 id="hero-title" className="font-serif text-6xl font-semibold leading-[0.92] tracking-tight text-velmora-pearl sm:text-7xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="mt-7 max-w-2xl text-base leading-8 text-velmora-pearl/82 sm:text-lg">
              Warm gold essentials, crystal-lit details, and modern heirlooms made for every quiet ritual of getting dressed.
            </p>
            <Link to="/shop" className="mt-9 inline-flex items-center gap-3 border border-velmora-champagne bg-velmora-champagne px-7 py-4 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-ink shadow-glow transition hover:bg-velmora-pearl">
              Shop the Collection <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-velmora-mist bg-velmora-pearl text-velmora-ink">
        <div className="mx-auto flex max-w-7xl snap-x gap-8 overflow-x-auto px-4 py-4 text-xs font-bold uppercase tracking-[0.22em] scrollbar-hide sm:px-6 lg:justify-center lg:px-8">
          {trustItems.map((item) => (
            <span key={item} className="shrink-0 whitespace-nowrap">{item}</span>
          ))}
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-antique">Bestsellers</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold leading-none text-velmora-ink sm:text-6xl">Quiet icons, daily worn.</h2>
          </div>
          <Link to="/shop" className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-ink transition hover:text-velmora-antique">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={onAddToCart} context="home-best" compact />
          ))}
        </div>
      </section>

      <section id="journal" className="border-y border-velmora-mist bg-velmora-ink py-16 text-velmora-pearl lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">From the feed</p>
              <h2 className="mt-3 font-serif text-5xl font-semibold leading-none">Seen in soft light.</h2>
            </div>
            <p className="hidden max-w-sm text-sm leading-7 text-velmora-pearl/70 md:block">A reel-style glimpse of gold cuffs, huggies, and necklaces in motion.</p>
          </div>
          <div className="flex snap-x gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {ugcItems.map((item) => (
              <article key={item.id} className="relative h-[420px] w-[236px] shrink-0 snap-start overflow-hidden bg-velmora-espresso velmora-image shadow-glow sm:h-[500px] sm:w-[282px]">
                <img
                  alt={item.caption}
                  className="h-full w-full object-cover opacity-90 transition duration-700 hover:scale-105"
                  data-strk-img-id={item.imageId}
                  data-strk-img={`[${item.titleId}] [journal-title]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="520"
                  src={placeholder}
                />
                <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-velmora-ink via-velmora-ink/60 to-transparent p-5">
                  <h3 id={item.titleId} className="font-serif text-3xl font-semibold text-velmora-pearl">{item.caption}</h3>
                </div>
              </article>
            ))}
          </div>
          <span id="journal-title" className="sr-only">Velmora jewelry worn in warm editorial reels</span>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-antique">Shop by category</p>
          <h2 className="mt-3 font-serif text-5xl font-semibold leading-none text-velmora-ink sm:text-6xl">Find your signature glow.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} to={`/shop?category=${category.name}`} className="group relative min-h-[420px] overflow-hidden bg-velmora-espresso text-velmora-pearl velmora-image">
              <img
                alt={category.name}
                className="absolute inset-0 h-full w-full object-cover opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-95"
                data-strk-img-id={category.imageId}
                data-strk-img={`[${category.descId}] [${category.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="760"
                src={placeholder}
              />
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-velmora-ink/82 via-velmora-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 z-20 p-7 transition duration-500 md:translate-y-8 md:group-hover:translate-y-0">
                <h3 id={category.titleId} className="font-serif text-5xl font-semibold">{category.name}</h3>
                <p id={category.descId} className="mt-3 max-w-xs text-sm leading-6 text-velmora-pearl/78 opacity-100 md:opacity-0 md:transition md:duration-500 md:group-hover:opacity-100">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="about" className="bg-velmora-pearl py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative min-h-[460px] overflow-hidden bg-velmora-espresso velmora-image">
            <img
              alt="Velmora artisan jewelry details"
              className="h-full w-full object-cover"
              data-strk-img-id="story-artisan-jewelry-0f7q"
              data-strk-img="[story-body] [story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1000"
              src={placeholder}
            />
          </div>
          <div className="flex items-center">
            <div className="max-w-xl lg:pl-10">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-antique">Our Story</p>
              <h2 id="story-title" className="mt-4 font-serif text-5xl font-semibold leading-none text-velmora-ink sm:text-6xl">Fine feeling, accessible ritual.</h2>
              <p id="story-body" className="mt-6 text-base leading-8 text-velmora-cocoa/82">
                Velmora was created for women who want the intimacy of fine jewelry without the ceremony of saving it for later. Each piece is shaped to feel collected, luminous, and easy to wear from morning coffee to candlelit plans.
              </p>
              <Link to="/shop" className="mt-8 inline-flex items-center gap-3 border-b border-velmora-champagne pb-2 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-ink transition hover:text-velmora-antique">
                Our Story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="bg-velmora-pearl p-7 text-velmora-cocoa shadow-sm">
              <Quote className="mb-5 h-7 w-7 text-velmora-champagne" />
              <div className="mb-5 flex gap-1 text-velmora-champagne">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-base leading-8 text-velmora-cocoa/82">“{testimonial.text}”</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-velmora-espresso px-4 py-16 text-velmora-pearl sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-5xl gap-8 text-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">Private list</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold leading-none sm:text-6xl">Join for 10% off your first order.</h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-velmora-pearl/76">Receive thoughtful launches, styling notes, and warm gold moments in your inbox.</p>
          </div>
          <form onSubmit={handleNewsletterSubmit} className="mx-auto flex w-full max-w-2xl flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="min-h-14 flex-1 border border-white/15 bg-white/10 px-5 text-velmora-pearl placeholder:text-velmora-pearl/52 outline-none transition focus:border-velmora-champagne"
              aria-describedby="newsletter-status"
            />
            <button
              type="submit"
              disabled={newsletterStatus === 'submitting'}
              className="min-h-14 border border-velmora-champagne bg-velmora-champagne px-7 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-ink transition hover:bg-velmora-pearl disabled:cursor-not-allowed disabled:opacity-70"
            >
              {newsletterStatus === 'submitting' ? 'Joining' : 'Join'}
            </button>
          </form>
          {newsletterMessage && (
            <p
              id="newsletter-status"
              role={newsletterStatus === 'error' ? 'alert' : 'status'}
              className={`mx-auto max-w-2xl text-sm leading-6 ${newsletterStatus === 'error' ? 'text-velmora-pearl' : 'text-velmora-champagne'}`}
            >
              {newsletterMessage}
            </p>
          )}
        </div>
      </section>
    </main>
  )
}
