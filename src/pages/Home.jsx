import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard.jsx'
import { categories, products, ugcItems } from '@/data/products.js'
import { useStrikingImages } from '@/hooks/useStrikingImages.js'

const placeholder = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1 1%22/%3E'

const testimonials = [
  { name: 'Maya R.', copy: 'The huggies feel substantial without being heavy. They look far more expensive than they are.' },
  { name: 'Claire S.', copy: 'Beautiful packaging and the necklace catches light in the most delicate way.' },
  { name: 'Nina L.', copy: 'My new daily earrings. No irritation, no fuss, just polished and pretty.' },
]

export default function Home({ onAdd }) {
  const containerRef = useStrikingImages([])

  return (
    <main ref={containerRef} className="bg-velmora-ivory text-velmora-espresso">
      <section className="relative min-h-[92vh] overflow-hidden bg-velmora-espresso text-velmora-ivory">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          data-strk-bg-id="velmora-hero-bg-e6c1b4"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-espresso/30 via-velmora-espresso/30 to-velmora-espresso/80" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-5 pb-20 pt-32 md:px-8 md:pb-28">
          <div className="max-w-3xl animate-[fadeUp_900ms_ease-out]">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-velmora-champagne">Demi-fine jewelry, direct to you</p>
            <h1 id="hero-title" className="font-serif text-6xl leading-[0.92] tracking-tight text-velmora-ivory md:text-8xl lg:text-9xl">Crafted to be Treasured</h1>
            <p id="hero-subtitle" className="mt-7 max-w-xl text-base leading-8 text-velmora-cream md:text-lg">
              Warm gold essentials, luminous crystals, and heirloom-inspired silhouettes designed for every day and every gift-worthy moment.
            </p>
            <Link to="/shop" className="mt-9 inline-flex items-center gap-3 bg-velmora-champagne px-7 py-4 text-sm font-bold uppercase tracking-[0.22em] text-velmora-espresso shadow-glow transition hover:bg-velmora-cream">
              Shop the Collection <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-velmora-champagne/25 bg-velmora-linen text-velmora-cacao">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-0 divide-x divide-y divide-velmora-champagne/20 px-5 text-center text-[11px] font-bold uppercase tracking-[0.2em] md:grid-cols-4 md:divide-y-0 md:px-8">
          {['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map((item) => (
            <div key={item} className="py-4">{item}</div>
          ))}
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-bronze">Bestsellers</p>
            <h2 className="mt-3 font-serif text-5xl text-velmora-espresso md:text-7xl">Loved in Gold</h2>
          </div>
          <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-velmora-bronze transition hover:text-velmora-espresso">
            View all pieces <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => <ProductCard key={product.id} product={product} onAdd={onAdd} />)}
        </div>
      </section>

      <section id="journal" className="bg-velmora-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-bronze">Worn by Velmora</p>
            <h2 className="mt-3 font-serif text-5xl md:text-7xl">Soft-focus moments</h2>
          </div>
          <div className="flex snap-x gap-4 overflow-x-auto pb-4">
            {ugcItems.map((item) => {
              const titleId = `ugc-${item.id}-title`
              const captionId = `ugc-${item.id}-caption`
              return (
                <article key={item.id} className="relative h-[430px] min-w-[250px] snap-start overflow-hidden bg-velmora-espresso text-velmora-ivory shadow-soft md:min-w-[300px]">
                  <img
                    alt={item.title}
                    className="h-full w-full object-cover opacity-80 transition duration-700 hover:scale-105"
                    data-strk-img-id={`ugc-${item.id}-img-c2a1`}
                    data-strk-img={`[${captionId}] [${titleId}]`}
                    data-strk-img-ratio="9x16"
                    data-strk-img-width="500"
                    src={placeholder}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velmora-espresso via-velmora-espresso/65 to-transparent p-5">
                    <h3 id={titleId} className="font-serif text-3xl">{item.title}</h3>
                    <p id={captionId} className="mt-2 text-sm text-velmora-cream">{item.caption}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => {
            const titleId = `category-${category.id}-title`
            const descId = `category-${category.id}-desc`
            return (
              <Link key={category.id} to={`/shop?category=${category.name}`} className="group relative min-h-[420px] overflow-hidden bg-velmora-espresso text-velmora-ivory shadow-soft">
                <img
                  alt={`${category.name} jewelry`}
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-55"
                  data-strk-img-id={`category-${category.id}-img-d7f1`}
                  data-strk-img={`[${descId}] [${titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="700"
                  src={placeholder}
                />
                <div className="absolute inset-0 flex items-end p-7">
                  <div className="translate-y-7 transition duration-500 group-hover:translate-y-0">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">Shop by category</p>
                    <h3 id={titleId} className="font-serif text-5xl">{category.name}</h3>
                    <p id={descId} className="mt-3 max-w-xs text-sm leading-6 text-velmora-cream opacity-0 transition group-hover:opacity-100">{category.description}</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section id="story" className="bg-velmora-espresso text-velmora-ivory">
        <div className="mx-auto grid max-w-7xl gap-0 md:grid-cols-2">
          <div className="min-h-[520px] bg-velmora-cacao">
            <img
              alt="Velmora jewelry atelier and warm gold details"
              className="h-full w-full object-cover"
              data-strk-img-id="story-atelier-img-e91b"
              data-strk-img="[story-copy] [story-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              src={placeholder}
            />
          </div>
          <div className="flex items-center px-5 py-16 md:px-14 md:py-24">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-champagne">Our Story</p>
              <h2 id="story-title" className="mt-4 font-serif text-5xl leading-tight md:text-7xl">Jewelry for the private rituals of getting ready.</h2>
              <p id="story-copy" className="mt-7 text-base leading-8 text-velmora-cream">
                Velmora was created for women who want beauty without excess: considered silhouettes, warm gold finishes, and pieces that feel special enough to gift yet effortless enough to wear daily.
              </p>
              <Link to="/shop" className="mt-9 inline-flex items-center gap-3 border border-velmora-champagne px-7 py-4 text-sm font-bold uppercase tracking-[0.22em] text-velmora-champagne transition hover:bg-velmora-champagne hover:text-velmora-espresso">
                Our Story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((review) => (
            <article key={review.name} className="border border-velmora-champagne/20 bg-velmora-linen p-7 text-velmora-espresso shadow-soft">
              <div className="mb-5 flex gap-1 text-velmora-champagne" aria-label="5 stars">
                {[...Array(5)].map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="font-serif text-2xl leading-8">“{review.copy}”</p>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.24em] text-velmora-bronze">{review.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto max-w-7xl bg-velmora-champagne p-8 text-velmora-espresso md:p-14">
          <div className="grid gap-8 md:grid-cols-[1fr_0.9fr] md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em]">Private List</p>
              <h2 className="mt-3 font-serif text-5xl md:text-7xl">Join for 10% off your first order</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-cacao">Receive styling notes, early collection access, and gifting reminders.</p>
            </div>
            <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
              <input type="email" required placeholder="Email address" className="min-h-14 flex-1 border border-velmora-espresso/20 bg-velmora-linen px-5 text-velmora-espresso placeholder:text-velmora-cacao focus:outline-none focus:ring-2 focus:ring-velmora-espresso" />
              <button type="submit" className="min-h-14 bg-velmora-espresso px-7 text-sm font-bold uppercase tracking-[0.22em] text-velmora-ivory transition hover:bg-velmora-cacao">Join</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
