import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard'
import { categories, products, ugcMoments } from '@/data/products'
import { getImageUrl, useStrkImages } from '@/lib/useStrkImages'

const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']
const testimonials = [
  { name: 'Maya R.', quote: 'The huggies feel substantial but never heavy. They look far more expensive than they are.' },
  { name: 'Claire S.', quote: 'I bought the necklace as a gift and kept thinking about it until I ordered one for myself.' },
  { name: 'Nina L.', quote: 'Beautiful packaging, warm gold tone, and no irritation after wearing them all day.' },
]

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="mx-auto max-w-2xl text-center text-velmora-espresso">
      <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-velmora-brass">{eyebrow}</p>
      <h2 className="mt-3 font-serifDisplay text-4xl font-semibold leading-tight md:text-6xl">{title}</h2>
      {copy && <p className="mt-4 text-sm leading-7 text-velmora-ink/76 md:text-base">{copy}</p>}
    </div>
  )
}

function Home({ onAddToCart }) {
  const containerRef = useStrkImages([])

  return (
    <main ref={containerRef} className="bg-velmora-parchment text-velmora-espresso">
      <section className="relative min-h-[92vh] overflow-hidden bg-velmora-espresso text-velmora-ivory">
        <div
          className="absolute inset-0 opacity-70"
          data-strk-bg-id="velmora-hero-warm-gold-model-c4f8a2"
          data-strk-bg="[hero-kicker] [hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-espresso/25 via-velmora-espresso/35 to-velmora-espresso/82" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24">
          <div className="max-w-3xl animate-[fadeIn_900ms_ease-out]">
            <p id="hero-kicker" className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-velmora-champagne">Warm-lit gold jewelry on model</p>
            <h1 id="hero-title" className="font-serifDisplay text-6xl font-semibold leading-[0.9] text-velmora-ivory md:text-8xl lg:text-9xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-velmora-ivory/82 md:text-lg">
              Warm demi-fine gold essentials on the skin for gifting, self-purchase, and everyday rituals — designed with quiet luxury and accessible intention.
            </p>
            <Link to="/shop" className="mt-8 inline-flex items-center gap-3 bg-velmora-champagne px-7 py-4 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-espresso transition hover:bg-velmora-ivory focus:outline-none focus:ring-2 focus:ring-velmora-champagne focus:ring-offset-2 focus:ring-offset-velmora-espresso">
              Shop the Collection <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-velmora-mist/70 bg-velmora-ivory text-velmora-espresso">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 py-4 text-center text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-velmora-ink sm:px-6 md:grid-cols-4 lg:px-8">
          {trustItems.map((item) => <p key={item}>{item}</p>)}
        </div>
      </section>

      <section id="bestsellers" className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <SectionHeading eyebrow="Bestsellers" title="The everyday pieces our customers keep close." copy="Refined proportions, luminous gold finishes, and thoughtful details made for daily wear." />
        <div className="mx-auto mt-12 grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} compact />)}
        </div>
      </section>

      <section id="journal" className="overflow-hidden bg-velmora-espresso py-16 text-velmora-ivory md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-velmora-champagne">As worn</p>
              <h2 className="mt-3 font-serifDisplay text-4xl font-semibold md:text-6xl">Quiet moments in gold.</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-velmora-ivory/72">A reel-style glance at Velmora layered for coffee runs, celebrations, and everything between.</p>
          </div>
        </div>
        <div className="no-scrollbar mt-10 flex gap-4 overflow-x-auto px-4 pb-2 sm:px-6 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]">
          {ugcMoments.map((moment) => (
            <article key={moment.id} className="group relative aspect-[9/16] w-56 flex-none overflow-hidden bg-velmora-ink shadow-soft md:w-72">
              <img
                alt={moment.caption}
                className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-95"
                data-strk-img-id={moment.imgId}
                data-strk-img={`[${moment.captionId}] [hero-subtitle]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src={getImageUrl(moment.imgId)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/80 via-transparent to-transparent" />
              <p id={moment.captionId} className="absolute bottom-5 left-5 right-5 font-serifDisplay text-2xl font-semibold leading-tight text-velmora-ivory">
                {moment.caption}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <SectionHeading eyebrow="Shop by category" title="Find your signature glow." />
        <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} to="/shop" className="group relative aspect-[4/5] overflow-hidden bg-velmora-ivory shadow-soft" aria-label={`Shop ${category.label}`}>
              <img
                alt={category.label}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                data-strk-img-id={category.imgId}
                data-strk-img={`[${category.descId}] [${category.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src={getImageUrl(category.imgId)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/78 via-velmora-espresso/18 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 translate-y-2 text-velmora-ivory transition duration-300 group-hover:translate-y-0">
                <h3 id={category.titleId} className="font-serifDisplay text-4xl font-semibold">{category.label}</h3>
                <p id={category.descId} className="mt-2 text-sm leading-6 text-velmora-ivory/80">{category.description}</p>
                <span className="mt-5 inline-flex border-b border-velmora-champagne pb-1 text-xs font-bold uppercase tracking-[0.24em] text-velmora-champagne opacity-0 transition group-hover:opacity-100">Shop now</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="story" className="bg-velmora-ivory py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="relative aspect-[4/5] overflow-hidden bg-velmora-blush shadow-soft lg:aspect-[5/6]">
            <img
              alt="Velmora jewelry atelier detail"
              className="h-full w-full object-cover"
              data-strk-img-id="brand-story-atelier-gold-jewelry-e8c2b1"
              data-strk-img="[story-copy] [story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1000"
              src={getImageUrl('brand-story-atelier-gold-jewelry-e8c2b1')}
            />
          </div>
          <div className="text-velmora-espresso lg:pl-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-velmora-brass">Our Story</p>
            <h2 id="story-title" className="mt-4 font-serifDisplay text-5xl font-semibold leading-tight md:text-7xl">Jewelry for the light you live in.</h2>
            <p id="story-copy" className="mt-6 text-base leading-8 text-velmora-ink/78">
              Velmora was created for women who want heirloom feeling without the traditional markup. Each piece balances sculptural polish, skin-friendly materials, and warm gold finishes that feel intimate from the first wear.
            </p>
            <Link to="/shop" className="mt-8 inline-flex items-center gap-3 border-b border-velmora-brass pb-1 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-brass transition hover:text-velmora-espresso">
              Our Story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <SectionHeading eyebrow="Reviews" title="Loved for gifting. Kept for everyday." />
        <div className="mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-3">
          {testimonials.map((review) => (
            <article key={review.name} className="border border-velmora-mist/70 bg-velmora-ivory p-7 text-velmora-espresso shadow-soft">
              <div className="flex gap-1 text-velmora-champagne" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-5 font-serifDisplay text-2xl font-medium leading-8 text-velmora-espresso">“{review.quote}”</p>
              <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.22em] text-velmora-brass">{review.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 md:pb-24 lg:px-8">
        <div className="mx-auto max-w-6xl bg-velmora-blush px-6 py-12 text-center text-velmora-espresso shadow-soft md:px-12 md:py-16">
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-velmora-brass">Velmora Notes</p>
          <h2 className="mt-3 font-serifDisplay text-4xl font-semibold md:text-6xl">Join for 10% off your first order.</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-velmora-ink/78">Receive new drops, care notes, and gift edits — quietly, occasionally, beautifully.</p>
          <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <input type="email" placeholder="Email address" className="min-h-14 flex-1 border border-velmora-mist bg-velmora-ivory px-4 text-sm text-velmora-espresso placeholder:text-velmora-ink/55 focus:border-velmora-brass focus:outline-none focus:ring-2 focus:ring-velmora-champagne/50" aria-label="Email address" />
            <button type="submit" className="min-h-14 bg-velmora-espresso px-7 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-ivory transition hover:bg-velmora-ink focus:outline-none focus:ring-2 focus:ring-velmora-champagne">
              Join
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Home
