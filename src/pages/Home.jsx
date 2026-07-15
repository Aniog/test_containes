import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Quote, Star } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import ProductCard from '@/components/velmora/ProductCard'
import { categories, products, ugcCards } from '@/data/products'
import { getStrkImageUrl } from '@/lib/strkImages'

const testimonials = [
  { name: 'Mara L.', text: 'The huggies feel substantial without being heavy. The packaging was beautiful enough to gift as-is.' },
  { name: 'Nina R.', text: 'Warm, elegant shine at a price that still feels accessible. I wear my necklace almost every day.' },
  { name: 'Elise C.', text: 'Quiet luxury is exactly right. Nothing feels trendy or loud, just beautifully considered.' },
]

export default function Home({ onAdd }) {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <main ref={containerRef} className="bg-velmora-parchment text-velmora-espresso">
      <section className="relative min-h-screen overflow-hidden bg-velmora-espresso text-velmora-ivory">
        <div
          className="absolute inset-0 opacity-70"
          data-strk-bg-id="velmora-hero-bg-907fc2"
          data-strk-bg="[hero-image-context] [hero-subhead] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-espresso/25 via-velmora-espresso/30 to-velmora-espresso/90" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-28">
          <div className="max-w-3xl animate-fade-up">
            <p id="hero-image-context" className="sr-only">Warm-lit close-up of gold jewelry worn on a model's ear and neckline.</p>
            <p className="mb-5 text-xs font-bold uppercase tracking-manifesto text-velmora-champagne">Velmora Fine Jewelry</p>
            <h1 id="hero-title" className="font-serif text-5xl font-semibold leading-none text-velmora-ivory sm:text-7xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subhead" className="mt-6 max-w-xl text-base leading-8 text-velmora-ivory/82 sm:text-lg">
              Demi-fine gold jewelry with an editorial glow — polished earrings, luminous necklaces, and everyday huggies made for gifting and self-celebration.
            </p>
            <Link to="/shop" className="mt-9 inline-flex items-center gap-3 border border-velmora-champagne bg-velmora-champagne px-7 py-4 text-xs font-bold uppercase tracking-refined text-velmora-espresso transition duration-300 hover:-translate-y-px hover:bg-velmora-ivory">
              Shop the Collection <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-velmora-espresso/10 bg-velmora-ivory text-velmora-espresso">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 py-4 text-center text-xs font-bold uppercase tracking-luxury text-velmora-cocoa sm:px-8 md:grid-cols-4 lg:px-12">
          {['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map((item) => (
            <p key={item} className="px-2 py-2">{item}</p>
          ))}
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-12">
        <div className="mb-10 flex flex-col gap-4 border-b border-velmora-espresso/10 pb-7 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-atelier text-velmora-gold">Bestsellers</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-velmora-espresso md:text-6xl">Most Gifted, Most Worn</h2>
          </div>
          <Link to="/shop" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-luxury text-velmora-espresso hover:text-velmora-gold">View all pieces <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => <ProductCard key={product.id} product={product} onAdd={onAdd} context="home-bestsellers" />)}
        </div>
      </section>

      <section className="overflow-hidden bg-velmora-cocoa py-16 text-velmora-ivory md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-atelier text-velmora-champagne">Seen in the wild</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-velmora-ivory md:text-6xl">Real rituals, reel-worthy shine</h2>
          </div>
          <div className="flex snap-x gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {ugcCards.map((card) => (
              <article key={card.id} className="group relative aspect-[9/16] w-56 shrink-0 snap-start overflow-hidden border border-velmora-champagne/25 bg-velmora-espresso shadow-reel sm:w-64">
                <img
                  alt={card.caption}
                  className="h-full w-full object-cover opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                  data-strk-img-id={card.imgId}
                  data-strk-img={`[${card.descId}] [${card.titleId}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="520"
                  src={getStrkImageUrl(card.imgId)}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velmora-espresso via-velmora-espresso/65 to-transparent p-5 pt-16">
                  <p id={card.titleId} className="font-serif text-2xl leading-tight text-velmora-ivory">{card.caption}</p>
                  <p id={card.descId} className="mt-2 text-xs leading-5 text-velmora-ivory/72">{card.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-12">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-atelier text-velmora-gold">Shop by category</p>
          <h2 className="mt-3 font-serif text-4xl text-velmora-espresso md:text-6xl">Choose your glow</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} to="/shop" className="group relative aspect-[4/5] overflow-hidden border border-velmora-espresso/10 bg-velmora-ivory text-velmora-ivory">
              <img
                alt={category.label}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                data-strk-img-id={category.imgId}
                data-strk-img={`[${category.descId}] [${category.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src={getStrkImageUrl(category.imgId)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/75 via-velmora-espresso/18 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 translate-y-3 p-7 transition duration-500 group-hover:translate-y-0">
                <h3 id={category.titleId} className="font-serif text-4xl text-velmora-ivory">{category.label}</h3>
                <p id={category.descId} className="mt-2 max-w-xs text-sm leading-6 text-velmora-ivory/78 opacity-0 transition duration-500 group-hover:opacity-100">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="about" className="bg-velmora-ivory py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-12">
          <div className="relative aspect-[4/5] overflow-hidden border border-velmora-espresso/10 bg-velmora-parchment lg:aspect-[5/6]">
            <img
              alt="Velmora atelier gold jewelry"
              className="h-full w-full object-cover"
              data-strk-img-id="velmora-story-image-b162af"
              data-strk-img="[story-copy] [story-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              src={getStrkImageUrl('velmora-story-image-b162af')}
            />
          </div>
          <div className="lg:pl-12">
            <p className="text-xs font-bold uppercase tracking-atelier text-velmora-gold">Our philosophy</p>
            <h2 id="story-title" className="mt-4 font-serif text-5xl leading-tight text-velmora-espresso md:text-7xl">Jewelry for the everyday heirloom.</h2>
            <p id="story-copy" className="mt-6 max-w-xl text-base leading-8 text-velmora-taupe">
              Velmora is designed for the woman who buys herself flowers, writes thoughtful notes, and knows a small ritual can transform a day. We pair demi-fine materials with timeless silhouettes, so every piece feels personal, polished, and endlessly wearable.
            </p>
            <Link to="/shop" className="mt-8 inline-flex items-center gap-3 border border-velmora-espresso px-7 py-4 text-xs font-bold uppercase tracking-refined text-velmora-espresso transition hover:bg-velmora-espresso hover:text-velmora-ivory">
              Our Story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="journal" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-12">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-atelier text-velmora-gold">Love notes</p>
          <h2 className="mt-3 font-serif text-4xl text-velmora-espresso md:text-6xl">What she says after unboxing</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((review) => (
            <article key={review.name} className="border border-velmora-espresso/10 bg-velmora-ivory p-7 text-velmora-espresso">
              <Quote className="h-7 w-7 text-velmora-champagne" />
              <div className="mt-5 flex gap-1 text-velmora-gold" aria-label="5 star review">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-5 min-h-24 text-base leading-7 text-velmora-cocoa">“{review.text}”</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-refined text-velmora-taupe">{review.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-velmora-blush text-velmora-espresso">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 md:grid-cols-[1.1fr_0.9fr] md:items-center lg:px-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-atelier text-velmora-cocoa">Private list</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight md:text-6xl">Join for 10% off your first order</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-cocoa">Receive early access to new drops, gifting edits, and quiet styling notes from the Velmora studio.</p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input id="newsletter-email" type="email" placeholder="Email address" className="min-h-14 flex-1 border border-velmora-espresso/20 bg-velmora-ivory px-5 text-sm text-velmora-espresso placeholder:text-velmora-taupe focus:border-velmora-gold focus:outline-none focus:ring-2 focus:ring-velmora-champagne/45" />
            <button type="submit" className="min-h-14 border border-velmora-espresso bg-velmora-espresso px-6 text-xs font-bold uppercase tracking-luxury text-velmora-ivory transition hover:bg-velmora-cocoa">Sign Up</button>
          </form>
        </div>
      </section>
    </main>
  )
}
