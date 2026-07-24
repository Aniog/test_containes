import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail, ShieldCheck, Star } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import ProductCard from '@/components/product/ProductCard.jsx'
import { categories, products, reviews, ugcMoments } from '@/data/products.js'
import strkImgConfig from '@/strk-img-config.json'

const imageSrc = (imageId) => strkImgConfig[imageId]?.results?.[0]?.url

const SectionIntro = ({ eyebrow, title, children, align = 'center' }) => (
  <div className={`mx-auto max-w-3xl ${align === 'center' ? 'text-center' : 'text-left'} text-velmora-ink`}>
    <p className="text-[0.7rem] font-bold uppercase tracking-nav text-velmora-clay">{eyebrow}</p>
    <h2 className="mt-3 font-serif text-4xl leading-tight text-velmora-ink sm:text-5xl md:text-6xl">{title}</h2>
    {children && <p className="mt-5 text-sm leading-7 text-velmora-clay sm:text-base">{children}</p>}
  </div>
)

const HomePage = () => {
  const pageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [])

  return (
    <main ref={pageRef} className="bg-velmora-porcelain text-velmora-ink">
      <section className="relative min-h-screen overflow-hidden bg-velmora-ink text-velmora-pearl">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          data-strk-bg-id="velmora-hero-bg-3d8a71"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/35 via-velmora-ink/35 to-velmora-ink/80" />
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-end px-4 pb-16 pt-32 sm:px-6 md:pb-24 lg:px-8">
          <div className="max-w-3xl animate-[fadeUp_800ms_ease-out_both]">
            <p className="mb-5 inline-flex border border-velmora-champagne/50 bg-velmora-ink/25 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-nav text-velmora-sand backdrop-blur">
              Demi-fine gold jewelry
            </p>
            <h1 id="hero-title" className="font-serif text-6xl leading-[0.95] text-velmora-pearl sm:text-7xl md:text-8xl lg:text-9xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-velmora-sand sm:text-lg">
              Warm, luminous pieces for daily rituals, meaningful gifts, and the quiet luxury of choosing yourself.
            </p>
            <Link
              to="/shop"
              className="mt-9 inline-flex items-center gap-3 bg-velmora-champagne px-7 py-4 text-xs font-bold uppercase tracking-nav text-velmora-ink transition duration-300 hover:bg-velmora-pearl"
            >
              Shop the Collection <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-velmora-sand bg-velmora-pearl text-velmora-ink">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 py-4 text-center text-[0.65rem] font-bold uppercase tracking-nav text-velmora-clay sm:px-6 md:grid-cols-4 lg:px-8">
          {['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map((item) => (
            <div key={item} className="flex items-center justify-center gap-2 py-2">
              <ShieldCheck className="h-3.5 w-3.5 text-velmora-champagne" />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="bestsellers" className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="Most loved" title="Bestsellers in a softer light">
            Customer-favorite pieces made for layering, gifting, and everyday gold warmth.
          </SectionIntro>
          <div className="mt-12 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section id="journal" className="overflow-hidden bg-velmora-espresso py-16 text-velmora-pearl md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[0.7rem] font-bold uppercase tracking-nav text-velmora-champagne">Seen on you</p>
              <h2 className="mt-3 font-serif text-4xl leading-tight text-velmora-pearl sm:text-6xl">Real moments, reel-worthy glow</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-velmora-sand">A horizontal edit of everyday styling, evening shine, and gift-ready details from the Velmora world.</p>
          </div>
          <div className="mt-10 flex gap-4 overflow-x-auto pb-4 [scrollbar-width:none]">
            {ugcMoments.map((moment) => (
              <article key={moment.id} className="group relative aspect-[9/16] min-w-[210px] overflow-hidden bg-velmora-ink shadow-jewel sm:min-w-[250px]">
                <img
                  alt={moment.caption}
                  className="h-full w-full object-cover opacity-88 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                  data-strk-img-id={moment.imgId}
                  data-strk-img={`[${moment.descId}] [${moment.titleId}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="500"
                  src={imageSrc(moment.imgId)}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velmora-ink via-velmora-ink/70 to-transparent p-5 text-velmora-pearl">
                  <h3 id={moment.titleId} className="font-serif text-2xl leading-7 text-velmora-pearl">{moment.caption}</h3>
                  <p id={moment.descId} className="mt-2 text-xs leading-5 text-velmora-sand">{moment.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="categories" className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="Shop by category" title="Find your signature shine" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {categories.map((category) => (
              <Link key={category.id} to="/shop" className="group relative block aspect-[4/5] overflow-hidden bg-velmora-sand shadow-sm">
                <img
                  alt={category.label}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  data-strk-img-id={category.imgId}
                  data-strk-img={`[${category.descId}] [${category.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src={imageSrc(category.imgId)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/75 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 translate-y-3 p-6 text-velmora-pearl transition duration-300 group-hover:translate-y-0">
                  <h3 id={category.titleId} className="font-serif text-4xl text-velmora-pearl">{category.label}</h3>
                  <p id={category.descId} className="mt-2 max-w-xs text-sm leading-6 text-velmora-sand opacity-0 transition group-hover:opacity-100">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="story" className="bg-velmora-pearl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-velmora-sand shadow-velmora">
            <img
              alt="Velmora jewelry styling"
              className="h-full w-full object-cover"
              data-strk-img-id="velmora-story-image-6174ca"
              data-strk-img="[story-copy] [story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1000"
              src={imageSrc('velmora-story-image-6174ca')}
            />
          </div>
          <div className="text-velmora-ink lg:pl-12">
            <p className="text-[0.7rem] font-bold uppercase tracking-nav text-velmora-clay">Our story</p>
            <h2 id="story-title" className="mt-4 font-serif text-5xl leading-tight text-velmora-ink sm:text-7xl">Premium jewelry, without the old-world markup.</h2>
            <p id="story-copy" className="mt-6 text-base leading-8 text-velmora-clay">
              Velmora creates demi-fine gold pieces in small, considered edits: hypoallergenic finishes, gift-worthy packaging, and silhouettes that feel polished without trying too hard.
            </p>
            <Link to="/#story" className="mt-8 inline-flex items-center gap-3 border-b border-velmora-champagne pb-2 text-xs font-bold uppercase tracking-nav text-velmora-ink transition hover:text-velmora-clay">
              Our Story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="Notes from customers" title="The kind of compliments that linger" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {reviews.map((review) => (
              <article key={review.name} className="border border-velmora-sand bg-velmora-pearl p-7 text-velmora-ink shadow-sm">
                <div className="flex gap-1 text-velmora-champagne" aria-label="5 stars">
                  {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-6 text-base leading-8 text-velmora-ink">“{review.quote}”</p>
                <p className="mt-6 text-xs font-bold uppercase tracking-nav text-velmora-clay">{review.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 md:pb-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 bg-velmora-espresso px-6 py-12 text-velmora-pearl shadow-jewel sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-14">
          <div>
            <p className="flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-nav text-velmora-champagne"><Mail className="h-4 w-4" /> Private list</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-velmora-pearl sm:text-6xl">Join for 10% off your first order</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-sand">Receive early access to new drops, gifting edits, and care notes for pieces made to last.</p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Email address"
              className="min-h-12 flex-1 border border-velmora-champagne/40 bg-velmora-pearl px-4 text-sm text-velmora-ink placeholder:text-velmora-clay focus:border-velmora-champagne focus:outline-none"
            />
            <button type="submit" className="min-h-12 bg-velmora-champagne px-6 text-xs font-bold uppercase tracking-nav text-velmora-ink transition hover:bg-velmora-pearl">
              Join
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default HomePage
