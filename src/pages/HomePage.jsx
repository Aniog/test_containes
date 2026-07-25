import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { ArrowRight } from 'lucide-react'
import ProductCard from '../components/storefront/ProductCard'
import SectionHeader from '../components/storefront/SectionHeader'
import Stars from '../components/storefront/Stars'
import StrkImage from '../components/storefront/StrkImage'
import {
  categoryTiles,
  journalEntries,
  products,
  testimonials,
  ugcMoments,
} from '../data/storefront'
import strkImgConfig from '../strk-img-config.json'

function HomePage() {
  const containerRef = useRef(null)
  const bestsellers = useMemo(() => products, [])
  const [email, setEmail] = useState('')
  const [newsletterState, setNewsletterState] = useState('idle')

  useEffect(() => {
    let cleanup = () => {}

    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [])

  const handleNewsletterSubmit = (event) => {
    event.preventDefault()

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setNewsletterState('error')
      return
    }

    setNewsletterState('success')
    setEmail('')
  }

  return (
    <div ref={containerRef} className="bg-ivory text-ink">
      <section className="relative isolate min-h-screen overflow-hidden">
        <StrkImage
          alt="Velmora hero jewelry campaign"
          className="absolute inset-0 h-full w-full object-cover"
          slotId="velmora-home-hero"
          query="[hero-subtitle] [hero-title]"
          ratio="16x9"
          width="1800"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-ink/10" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-4 pb-16 pt-36 sm:px-6 sm:pb-24 lg:px-10">
          <div className="max-w-2xl text-ivory">
            <p className="text-xs uppercase tracking-editorial text-shell">Velmora Fine Jewelry</p>
            <h1 id="hero-title" className="mt-5 font-display text-5xl leading-none sm:text-7xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="mt-6 max-w-xl text-sm leading-7 text-shell sm:text-base">
              Modern demi-fine gold jewelry designed for effortless gifting, quiet confidence, and everyday ritual.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="rounded-full bg-champagne px-7 py-4 text-sm uppercase tracking-editorial text-ink transition-colors duration-300 ease-editorial hover:bg-brass hover:text-ivory"
              >
                Shop the Collection
              </Link>
              <Link
                to="/#story"
                className="rounded-full border border-shell/40 px-7 py-4 text-sm uppercase tracking-editorial text-ivory transition-colors duration-300 ease-editorial hover:bg-ivory/10"
              >
                Discover the Brand
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="border-y border-mist bg-glow px-4 py-4 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-3 text-center text-xs uppercase tracking-editorial text-truffle sm:grid-cols-2 lg:grid-cols-4">
          {['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <section className="px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Bestsellers"
            id="bestsellers-heading"
            title="Pieces our customers wear on repeat"
            description="Five signature styles chosen for gifting, layering, and effortless day-to-night polish."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-5">
            {bestsellers.map((product) => (
              <ProductCard key={product.slug} product={product} sectionTitleId="bestsellers-heading" compact />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-mist bg-shell px-4 py-20 sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Seen on You"
            id="ugc-heading"
            title="A reels-inspired edit of real-life shine"
            description="Ear stacks, collarbone layers, and gift-ready moments captured in warm, effortless light."
          />
          <div className="mt-10 flex gap-5 overflow-x-auto pb-3">
            {ugcMoments.map((moment) => (
              <article
                key={moment.slotId}
                className="relative w-52 shrink-0 overflow-hidden rounded-[2rem] bg-ink shadow-whisper"
              >
                <StrkImage
                  alt={moment.title}
                  className="aspect-portrait w-full object-cover opacity-90"
                  slotId={moment.slotId}
                  query={`[${moment.captionId}] [${moment.titleId}] [ugc-heading]`}
                  ratio="9x16"
                  width="420"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/60 to-transparent px-5 pb-5 pt-16 text-ivory">
                  <h3 id={moment.titleId} className="font-display text-2xl">
                    {moment.title}
                  </h3>
                  <p id={moment.captionId} className="mt-2 text-sm leading-6 text-shell">
                    {moment.caption}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="collections" className="px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Shop by Category"
            id="categories-heading"
            title="Curated by how you wear it"
            description="Choose your signature from sculptural earrings, delicate necklaces, and everyday huggies."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {categoryTiles.map((category) => (
              <Link
                key={category.name}
                to={category.href}
                className="group relative overflow-hidden rounded-[2rem] bg-ink shadow-whisper"
              >
                <StrkImage
                  alt={category.name}
                  className="aspect-editorial w-full object-cover transition-transform duration-500 ease-editorial group-hover:scale-105"
                  slotId={category.slotId}
                  query={`[${category.descId}] [${category.titleId}] [categories-heading]`}
                  ratio="3x2"
                  width="900"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 px-6 pb-6 text-ivory">
                  <h3 id={category.titleId} className="font-display text-4xl">
                    {category.name}
                  </h3>
                  <p id={category.descId} className="mt-2 max-w-xs text-sm leading-7 text-shell opacity-0 transition-opacity duration-300 ease-editorial group-hover:opacity-100">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="story" className="border-y border-mist bg-glow px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] bg-shell p-4 shadow-velvet">
            <StrkImage
              alt="Velmora brand story"
              className="aspect-editorial w-full rounded-[1.5rem] object-cover"
              slotId="velmora-story-image"
              query="[story-copy] [story-heading]"
              ratio="3x2"
              width="1200"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-editorial text-truffle">Our Story</p>
            <h2 id="story-heading" className="mt-4 font-display text-5xl text-ink sm:text-6xl">
              Jewelry that feels intimate, polished, and easy to live in.
            </h2>
            <p id="story-copy" className="mt-6 max-w-xl text-sm leading-8 text-truffle sm:text-base">
              Velmora was created for women who want the feeling of fine jewelry in pieces they can wear every day. Our collections balance warm metallic finishes, thoughtful proportions, and premium presentation so each order feels considered from first glance to final clasp.
            </p>
            <Link
              to="/collections"
              className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-editorial text-ink transition-colors duration-300 ease-editorial hover:text-champagne"
            >
              Our Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Loved by Customers"
            id="testimonials-heading"
            title="Premium feel, thoughtful price point"
            description="What customers are saying about Velmora quality, gifting, and everyday wear."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="rounded-[2rem] border border-mist bg-glow p-7 shadow-whisper">
                <Stars rating="5.0" />
                <p className="mt-6 text-base leading-8 text-truffle">“{testimonial.quote}”</p>
                <p className="mt-6 text-xs uppercase tracking-editorial text-ink">{testimonial.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="journal" className="border-y border-mist bg-shell px-4 py-20 sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Journal"
            id="journal-heading"
            title="Editorial notes on gifting, layering, and personal style"
            description="A soft-spoken edit of jewelry rituals and styling ideas for the modern collector."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {journalEntries.map((entry) => (
              <article key={entry.slotId} className="overflow-hidden rounded-[2rem] bg-glow shadow-whisper">
                <StrkImage
                  alt={entry.title}
                  className="aspect-editorial w-full object-cover"
                  slotId={entry.slotId}
                  query={`[${entry.excerptId}] [${entry.titleId}] [journal-heading]`}
                  ratio="3x2"
                  width="900"
                />
                <div className="p-7">
                  <h3 id={entry.titleId} className="font-display text-4xl text-ink">
                    {entry.title}
                  </h3>
                  <p id={entry.excerptId} className="mt-4 text-sm leading-7 text-truffle">
                    {entry.excerpt}
                  </p>
                  <Link
                    to="/collections"
                    className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-editorial text-ink transition-colors duration-300 ease-editorial hover:text-champagne"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="newsletter" className="px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-espresso px-6 py-12 text-ivory shadow-velvet sm:px-10 lg:px-14">
          <p className="text-xs uppercase tracking-editorial text-shell">A welcome offer</p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="font-display text-5xl leading-none sm:text-6xl">
                Join for 10% off your first order
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-shell sm:text-base">
                Receive early access to launches, gifting edits, and styling notes from the Velmora studio.
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email address"
                className="min-w-0 rounded-full border border-shell/40 bg-ivory/10 px-5 py-4 text-sm text-ivory outline-none placeholder:text-shell focus:border-champagne sm:min-w-72"
              />
              <button
                type="submit"
                className="rounded-full bg-champagne px-6 py-4 text-sm uppercase tracking-editorial text-ink transition-colors duration-300 ease-editorial hover:bg-brass hover:text-ivory"
              >
                Join Now
              </button>
            </form>
          </div>
          {newsletterState === 'success' ? (
            <p className="mt-4 text-sm text-shell">You&apos;re in. Your welcome offer is on its way.</p>
          ) : null}
          {newsletterState === 'error' ? (
            <p className="mt-4 text-sm text-shell">Please enter a valid email address.</p>
          ) : null}
        </div>
      </section>
    </div>
  )
}

export default HomePage
