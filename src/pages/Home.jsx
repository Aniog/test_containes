import { ImageHelper } from '@strikingly/sdk'
import { ArrowRight, Quote, Star } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '@/components/products/ProductCard.jsx'
import { products } from '@/data/products.js'
import strkImgConfig from '@/strk-img-config.json'

const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

const ugcCards = [
  { id: 'ear-stack', title: 'The softest ear stack', caption: 'Huggies layered with a gold cuff for everyday glow.' },
  { id: 'neckline', title: 'Golden hour neckline', caption: 'A floral crystal necklace catching warm evening light.' },
  { id: 'gifted', title: 'Wrapped to remember', caption: 'Gift-ready pieces for birthdays, bridesmaids, and just because.' },
  { id: 'minimal', title: 'Quiet sparkle', caption: 'Small details that feel polished from morning to dinner.' },
  { id: 'portrait', title: 'Face-framing gold', caption: 'Drop earrings with movement and soft heirloom texture.' },
]

const categories = [
  { id: 'earrings', label: 'Earrings', copy: 'Face-framing shine, from cuffs to drops.' },
  { id: 'necklaces', label: 'Necklaces', copy: 'Delicate layers and meaningful centerpieces.' },
  { id: 'huggies', label: 'Huggies', copy: 'Close-to-lobe silhouettes made for daily wear.' },
]

const testimonials = [
  { name: 'Maya R.', text: 'The huggies feel substantial without being heavy. They look far more expensive than they are.' },
  { name: 'Elena B.', text: 'I bought the necklace as a gift and kept coming back for one for myself. Beautiful packaging.' },
  { name: 'Claire T.', text: 'Warm gold, no irritation, and the kind of polish that makes a white tee look styled.' },
]

function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-velmora-espresso text-velmora-ivory">
      <span id="hero-image-context" className="sr-only">Warm-lit close-up of gold jewelry on a model</span>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-75"
        data-strk-bg-id="velmora-hero-bg-model-41a9df"
        data-strk-bg="[hero-image-context] [hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-velmora-espresso via-velmora-espresso/55 to-velmora-espresso/10" />
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-4 pb-20 pt-36 sm:px-6 lg:px-8 lg:pb-28">
        <div className="max-w-3xl animate-fadeUp">
          <p className="mb-5 text-xs font-bold uppercase tracking-wideLuxury text-velmora-champagne">Demi-fine gold jewelry for everyday rituals</p>
          <h1 id="hero-title" className="font-serif text-6xl font-semibold leading-[0.9] text-velmora-ivory sm:text-7xl lg:text-8xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-7 max-w-xl text-base leading-8 text-velmora-champagne sm:text-lg">
            Warm, hypoallergenic pieces made for gifting, self-purchase, and the quiet luxury of feeling finished.
          </p>
          <Link
            to="/shop"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-velmora-gold px-8 py-4 text-sm font-bold uppercase tracking-velmora text-velmora-espresso transition duration-300 hover:-translate-y-0.5 hover:bg-velmora-champagne"
          >
            Shop the Collection
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function TrustBar() {
  return (
    <section className="border-y border-velmora-taupe/30 bg-velmora-porcelain text-velmora-espresso">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-velmora-taupe/20 px-4 text-center sm:px-6 md:grid-cols-4 md:divide-y-0 lg:px-8">
        {trustItems.map((item) => (
          <p key={item} className="py-4 text-[0.68rem] font-bold uppercase tracking-wideLuxury text-velmora-umber">
            {item}
          </p>
        ))}
      </div>
    </section>
  )
}

function Bestsellers() {
  return (
    <section id="journal" className="bg-velmora-ivory py-16 text-velmora-espresso sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 border-b border-velmora-taupe/30 pb-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-wideLuxury text-velmora-gold">Bestsellers</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold text-velmora-espresso sm:text-6xl">Loved in Gold</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-velmora-umber">
            Five refined signatures designed to layer easily, gift beautifully, and elevate the everyday.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} compact />
          ))}
        </div>
      </div>
    </section>
  )
}

function UGCStrip() {
  return (
    <section className="overflow-hidden bg-velmora-espresso py-16 text-velmora-ivory sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-wideLuxury text-velmora-gold">As worn by you</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold text-velmora-ivory">Reel Moments</h2>
          </div>
          <p className="hidden max-w-xs text-sm leading-7 text-velmora-champagne md:block">A swipeable strip of gold in motion: ear stacks, neckline layers, and gift-ready shine.</p>
        </div>
        <div className="flex gap-5 overflow-x-auto pb-4 [scrollbar-width:thin]">
          {ugcCards.map((card) => {
            const titleId = `ugc-title-${card.id}`
            const captionId = `ugc-caption-${card.id}`
            return (
              <article key={card.id} className="group relative aspect-[9/16] w-64 shrink-0 overflow-hidden rounded-t-full bg-velmora-umber shadow-velmora">
                <img
                  alt={card.title}
                  className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105"
                  data-strk-img-id={`ugc-${card.id}-54e5be`}
                  data-strk-img={`[${captionId}] [${titleId}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velmora-espresso via-velmora-espresso/75 to-transparent p-5 pt-20">
                  <h3 id={titleId} className="font-serif text-2xl text-velmora-ivory">{card.title}</h3>
                  <p id={captionId} className="mt-2 text-sm leading-6 text-velmora-champagne">{card.caption}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function CategoryTiles() {
  return (
    <section className="bg-velmora-ivory py-16 text-velmora-espresso sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-wideLuxury text-velmora-gold">Shop by category</p>
          <h2 className="mt-3 font-serif text-5xl font-semibold text-velmora-espresso">Find Your Signature</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => {
            const titleId = `category-title-${category.id}`
            const copyId = `category-copy-${category.id}`
            return (
              <Link key={category.id} to="/shop" className="group relative aspect-[4/5] overflow-hidden bg-velmora-espresso shadow-soft">
                <img
                  alt={category.label}
                  className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-95"
                  data-strk-img-id={`category-${category.id}-12ab9f`}
                  data-strk-img={`[${copyId}] [${titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/85 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-velmora-ivory transition duration-500 group-hover:translate-y-0 md:translate-y-8">
                  <h3 id={titleId} className="font-serif text-4xl font-semibold">{category.label}</h3>
                  <p id={copyId} className="mt-2 text-sm leading-6 text-velmora-champagne opacity-100 md:opacity-0 md:transition md:duration-500 md:group-hover:opacity-100">
                    {category.copy}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function BrandStory() {
  return (
    <section id="story" className="bg-velmora-porcelain py-16 text-velmora-espresso sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="relative min-h-[34rem] overflow-hidden bg-velmora-espresso shadow-velmora">
          <img
            alt="Velmora jewelry craftsmanship"
            className="h-full min-h-[34rem] w-full object-cover opacity-90"
            data-strk-img-id="brand-story-craft-70d5bc"
            data-strk-img="[brand-story-copy] [brand-story-title]"
            data-strk-img-ratio="3x4"
            data-strk-img-width="1000"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
        <div className="lg:px-10">
          <p className="text-xs font-bold uppercase tracking-wideLuxury text-velmora-gold">Velmora Notes</p>
          <h2 id="brand-story-title" className="mt-4 font-serif text-5xl font-semibold leading-tight text-velmora-espresso sm:text-6xl">
            Fine-feeling jewelry, without the fine jewelry markup.
          </h2>
          <p id="brand-story-copy" className="mt-6 text-base leading-8 text-velmora-umber">
            We design demi-fine pieces in warm 18K gold plating, using hypoallergenic finishes and considered silhouettes. Each piece is made to feel editorial, giftable, and easy to wear on repeat.
          </p>
          <Link to="/shop" className="mt-8 inline-flex items-center gap-3 border-b border-velmora-gold pb-1 text-sm font-bold uppercase tracking-velmora text-velmora-espresso transition hover:text-velmora-gold">
            Our Story
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="bg-velmora-ivory py-16 text-velmora-espresso sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((review) => (
            <article key={review.name} className="border border-velmora-taupe/30 bg-velmora-porcelain p-8 shadow-soft">
              <Quote className="h-8 w-8 text-velmora-gold" />
              <div className="mt-5 flex gap-1 text-velmora-gold">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-5 text-base leading-8 text-velmora-umber">“{review.text}”</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-wideLuxury text-velmora-espresso">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Newsletter() {
  return (
    <section className="bg-velmora-ivory px-4 pb-16 text-velmora-espresso sm:px-6 sm:pb-24 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden bg-velmora-clay shadow-velmora">
        <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="p-8 text-velmora-ivory sm:p-12 lg:p-16">
            <p className="text-xs font-bold uppercase tracking-wideLuxury text-velmora-champagne">First access</p>
            <h2 className="mt-4 font-serif text-5xl font-semibold leading-tight text-velmora-ivory">Join for 10% off your first order</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-champagne">Receive styling notes, gift edits, and early access to limited drops.</p>
            <form className="mt-8 flex flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="newsletter-email">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Email address"
                className="min-h-14 flex-1 rounded-full border border-velmora-champagne/50 bg-velmora-porcelain px-6 text-sm text-velmora-espresso placeholder:text-velmora-umber focus:border-velmora-gold focus:outline-none"
              />
              <button type="submit" className="rounded-full bg-velmora-espresso px-8 py-4 text-sm font-bold uppercase tracking-velmora text-velmora-ivory transition hover:-translate-y-0.5 hover:bg-velmora-gold hover:text-velmora-espresso">
                Join
              </button>
            </form>
          </div>
          <div
            id="newsletter-bg-title"
            className="sr-only"
          >
            Join for 10% off your first order
          </div>
          <div
            id="newsletter-bg-copy"
            className="sr-only"
          >
            Velmora gift box with demi-fine gold jewelry
          </div>
          <div
            className="min-h-72 bg-cover bg-center"
            data-strk-bg-id="newsletter-jewelry-box-e6c0a9"
            data-strk-bg="[newsletter-bg-copy] [newsletter-bg-title]"
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="900"
          />
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const pageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [])

  return (
    <main ref={pageRef} className="bg-velmora-ivory">
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCStrip />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  )
}
