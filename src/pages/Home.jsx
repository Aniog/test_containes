import { ArrowRight, Instagram, Mail, Star } from 'lucide-react'
import { useState } from 'react'
import ProductCard from '../components/storefront/ProductCard'
import { categories, products, testimonials, ugcPosts } from '../data/products'
import { subscribeToNewsletter } from '../api/newsletter'

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function Home({ onAddToCart, onViewProduct, onNavigate }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const submitNewsletter = async (event) => {
    event.preventDefault()
    const normalizedEmail = email.trim()
    if (!/^\S+@\S+\.\S+$/.test(normalizedEmail)) {
      setStatus('error')
      setMessage('Please enter a valid email address.')
      return
    }

    setStatus('submitting')
    setMessage('')
    try {
      await subscribeToNewsletter(normalizedEmail)
      setEmail('')
      setStatus('success')
      setMessage('Welcome to Velmora. Your private code is on its way.')
    } catch (error) {
      setStatus('error')
      setMessage(error.message || 'Newsletter signup failed. Please try again.')
    }
  }

  return (
    <main className="bg-velmora-ivory text-velmora-espresso">
      <section id="home" className="relative min-h-screen overflow-hidden bg-velmora-noir text-velmora-ivory">
        <div
          className="absolute inset-0 opacity-80"
          data-strk-bg-id="hero-jewelry-model-7ad63e"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="editorial-gradient absolute inset-0" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-5 pb-20 pt-32 sm:px-8 lg:px-10 lg:pb-28">
          <div className="max-w-3xl animate-fadeUp">
            <p className="mb-5 text-xs font-bold uppercase tracking-luxury text-velmora-champagne">
              Demi-fine gold jewelry for daily rituals
            </p>
            <h1 id="hero-title" className="font-serif text-6xl font-semibold leading-[0.95] text-velmora-ivory sm:text-7xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-velmora-mist sm:text-lg">
              Warm, luminous pieces designed for self-purchase, meaningful gifting, and the quiet confidence of everyday gold.
            </p>
            <button
              type="button"
              onClick={() => onNavigate('shop')}
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-velmora-gold px-7 py-4 text-xs font-extrabold uppercase tracking-luxury text-velmora-espresso shadow-glow transition hover:-translate-y-0.5 hover:bg-velmora-champagne"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <section className="border-b border-velmora-line bg-velmora-pearl text-velmora-espresso">
        <div className="mx-auto grid max-w-7xl gap-3 px-5 py-4 text-center text-[0.68rem] font-bold uppercase tracking-luxury sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-10">
          {['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-luxury text-velmora-bronze">Customer favorites</p>
            <h2 id="bestsellers-title" className="mt-3 font-serif text-5xl font-semibold text-velmora-espresso sm:text-6xl">Bestsellers</h2>
            <p id="bestsellers-subtitle" className="mt-4 max-w-xl text-sm leading-7 text-velmora-taupe">
              Five luminous signatures priced for effortless gifting and everyday wear.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('shop')}
            className="w-fit rounded-full border border-velmora-espresso px-6 py-3 text-xs font-bold uppercase tracking-luxury text-velmora-espresso transition hover:bg-velmora-espresso hover:text-velmora-ivory"
          >
            View all
          </button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} onViewProduct={onViewProduct} />
          ))}
        </div>
      </section>

      <section id="journal" className="overflow-hidden bg-velmora-noir py-16 text-velmora-ivory lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-luxury text-velmora-gold">
                <Instagram className="h-4 w-4" /> Worn by Velmora
              </p>
              <h2 id="journal-title" className="mt-3 font-serif text-4xl text-velmora-ivory sm:text-5xl">Reel-worthy radiance</h2>
            </div>
          </div>
          <div className="luxury-scrollbar flex gap-4 overflow-x-auto pb-4">
            {ugcPosts.map((post) => (
              <article key={post.id} className="group relative aspect-[9/16] w-56 shrink-0 overflow-hidden rounded-full bg-velmora-espresso sm:w-64">
                <img
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.captionId}] [journal-title]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="480"
                  src={placeholder}
                  alt={post.caption}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-noir/80 via-transparent to-transparent" />
                <p id={post.captionId} className="absolute inset-x-6 bottom-8 text-center font-serif text-2xl leading-7 text-velmora-ivory">
                  {post.caption}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-luxury text-velmora-bronze">Shop by category</p>
          <h2 className="mt-3 font-serif text-5xl text-velmora-espresso sm:text-6xl">The Velmora edit</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => onNavigate('shop')}
              className="group relative aspect-[4/5] overflow-hidden bg-velmora-noir text-left text-velmora-ivory"
            >
              <img
                data-strk-img-id={category.imgId}
                data-strk-img={`[${category.descId}] [${category.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src={placeholder}
                alt={category.label}
                className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-noir/80 via-velmora-noir/10 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 translate-y-2 transition duration-300 group-hover:translate-y-0">
                <h3 id={category.titleId} className="font-serif text-4xl text-velmora-ivory">{category.label}</h3>
                <p id={category.descId} className="mt-2 text-sm leading-6 text-velmora-mist opacity-0 transition duration-300 group-hover:opacity-100">
                  {category.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section id="about" className="bg-velmora-blush py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
          <div className="relative overflow-hidden rounded-t-full bg-velmora-pearl">
            <img
              data-strk-img-id="brand-story-workbench-2f89aa"
              data-strk-img="[brand-story-copy] [brand-story-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              src={placeholder}
              alt="Velmora jewelry details on a warm editorial workbench"
              className="aspect-[3/4] h-full w-full object-cover"
            />
          </div>
          <div className="text-velmora-espresso lg:pl-10">
            <p className="text-xs font-bold uppercase tracking-luxury text-velmora-bronze">Our story</p>
            <h2 id="brand-story-title" className="mt-4 font-serif text-5xl leading-tight sm:text-6xl">Jewelry that lives with you.</h2>
            <p id="brand-story-copy" className="mt-6 max-w-xl text-base leading-8 text-velmora-taupe">
              Velmora was created for women who want the intimacy of fine jewelry without saving it for special occasions. Each piece is designed in small, considered collections with warm gold tones, comfortable proportions, and keepsake packaging.
            </p>
            <button
              type="button"
              className="mt-8 inline-flex items-center gap-3 border-b border-velmora-espresso pb-2 text-xs font-bold uppercase tracking-luxury text-velmora-espresso transition hover:text-velmora-bronze"
            >
              Our Story <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((review) => (
            <article key={review.name} className="border border-velmora-line bg-velmora-pearl p-7 text-velmora-espresso shadow-sm">
              <div className="flex gap-1 text-velmora-gold" aria-label="Five star review">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-6 font-serif text-2xl leading-8 text-velmora-espresso">“{review.quote}”</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-luxury text-velmora-taupe">{review.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-velmora-gold px-5 py-16 text-velmora-espresso sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-luxury">Private list</p>
            <h2 className="mt-3 font-serif text-5xl leading-tight sm:text-6xl">Join for 10% off your first order.</h2>
          </div>
          <form onSubmit={submitNewsletter} className="space-y-3" aria-busy={status === 'submitting'}>
            <div className="flex flex-col gap-3 rounded-full bg-velmora-ivory p-2 shadow-glow sm:flex-row">
              <label className="sr-only" htmlFor="newsletter-email">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                className="min-h-12 flex-1 rounded-full bg-transparent px-5 text-sm text-velmora-espresso placeholder:text-velmora-taupe focus:outline-none"
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="rounded-full bg-velmora-noir px-6 py-4 text-xs font-bold uppercase tracking-luxury text-velmora-ivory transition hover:bg-velmora-espresso disabled:opacity-60"
              >
                {status === 'submitting' ? 'Joining…' : 'Join'}
              </button>
            </div>
            {message && (
              <p className={`flex items-center gap-2 text-sm font-semibold ${status === 'error' ? 'text-velmora-noir' : 'text-velmora-espresso'}`} role={status === 'error' ? 'alert' : 'status'}>
                <Mail className="h-4 w-4" /> {message}
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  )
}
