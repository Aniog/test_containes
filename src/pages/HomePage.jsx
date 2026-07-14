import { ArrowRight, Mail, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import Footer from '@/components/Footer'
import ImageLoader from '@/components/ImageLoader'
import ProductCard from '@/components/ProductCard'
import { categories, products, ugcItems } from '@/data/products'

const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

const testimonials = [
  { name: 'Maya R.', text: 'The glow is so refined. My huggies look expensive but feel easy enough for every day.' },
  { name: 'Claire B.', text: 'Beautiful packaging and the necklace layers perfectly with pieces I already own.' },
  { name: 'Nina L.', text: 'I bought a pair as a gift and immediately came back for my own.' },
]

export default function HomePage({ onAddToCart }) {
  return (
    <ImageLoader className="bg-velmora-cream text-velmora-ink">
      <main>
        <section className="relative min-h-screen overflow-hidden bg-velmora-ink text-velmora-cream">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-70"
            data-strk-bg-id="home-hero-gold-jewelry-model-8a6f2c"
            data-strk-bg="[hero-subhead] [hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1800"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/45 via-velmora-ink/25 to-velmora-ink/75" />
          <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28">
            <div className="max-w-3xl animate-fadeUp">
              <p className="mb-5 text-xs font-bold uppercase tracking-luxury text-velmora-champagne">Demi-fine gold jewelry</p>
              <h1 id="hero-title" className="font-serif text-6xl leading-none text-velmora-cream sm:text-7xl lg:text-8xl">Crafted to be Treasured</h1>
              <p id="hero-subhead" className="mt-6 max-w-xl text-base leading-8 text-velmora-cream/86 sm:text-lg">Warm, luminous pieces designed for everyday ritual, meaningful gifting, and the quiet confidence of gold.</p>
              <Link to="/shop" className="mt-9 inline-flex items-center gap-3 bg-velmora-champagne px-7 py-4 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink transition hover:bg-velmora-cream">
                Shop the Collection <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="border-y border-velmora-mist bg-velmora-parchment text-velmora-ink" aria-label="Store promises">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 text-center sm:px-6 lg:grid-cols-4 lg:px-8">
            {trustItems.map((item) => (
              <p key={item} className="py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-velmora-ink/78">{item}</p>
            ))}
          </div>
        </section>

        <section id="shop" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-10 flex flex-col gap-5 border-b border-velmora-mist pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-luxury text-velmora-bronze">Bestsellers</p>
              <h2 className="mt-3 font-serif text-5xl leading-none text-velmora-ink sm:text-6xl">Most Treasured</h2>
            </div>
            <Link to="/shop" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-velmora-ink transition hover:text-velmora-bronze">
              View all pieces <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        </section>

        <section id="journal" className="overflow-hidden bg-velmora-ink py-16 text-velmora-cream lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-luxury text-velmora-champagne">Seen in the everyday</p>
                <h2 className="mt-3 font-serif text-5xl leading-none text-velmora-cream">Velmora, Worn Softly</h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-velmora-cream/72">A reel-style strip of intimate styling moments: ear stacks, silk necklines, gift boxes, and golden hour shine.</p>
            </div>
            <div className="flex snap-x gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {ugcItems.map((item) => (
                <article key={item.id} className="group relative h-[430px] w-[245px] flex-none snap-start overflow-hidden bg-velmora-parchment shadow-editorial sm:h-[520px] sm:w-[292px]">
                  <img
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    data-strk-img-id={item.imgId}
                    data-strk-img={`[${item.titleId}]`}
                    data-strk-img-ratio="9x16"
                    data-strk-img-width="620"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/75 via-transparent to-transparent" />
                  <h3 id={item.titleId} className="absolute bottom-5 left-5 right-5 font-serif text-2xl leading-7 text-velmora-cream">{item.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-luxury text-velmora-bronze">Shop by category</p>
            <h2 className="mt-3 font-serif text-5xl text-velmora-ink">Choose Your Glow</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {categories.map((category) => (
              <Link key={category.id} to={`/shop?category=${category.label}`} className="group relative block aspect-[4/5] overflow-hidden bg-velmora-parchment shadow-soft">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  data-strk-bg-id={category.imageId}
                  data-strk-bg={`[${category.descId}] [${category.titleId}]`}
                  data-strk-bg-ratio="3x4"
                  data-strk-bg-width="900"
                />
                <div className="absolute inset-0 bg-velmora-ink/25 transition group-hover:bg-velmora-ink/50" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-velmora-cream">
                  <h3 id={category.titleId} className="font-serif text-4xl">{category.label}</h3>
                  <p id={category.descId} className="mt-2 max-w-xs text-sm leading-6 text-velmora-cream/82 opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="about" className="bg-velmora-parchment py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
            <div className="relative overflow-hidden bg-velmora-ink shadow-editorial">
              <img
                alt="Velmora jewelry studio detail"
                className="aspect-[4/5] w-full object-cover opacity-90"
                data-strk-img-id="brand-story-studio-gold-jewelry-35bd29"
                data-strk-img="[story-copy] [story-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="1100"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="lg:pl-12">
              <p className="text-xs font-bold uppercase tracking-luxury text-velmora-bronze">Brand story</p>
              <h2 id="story-title" className="mt-4 font-serif text-5xl leading-tight text-velmora-ink sm:text-6xl">Jewelry for a softer kind of statement.</h2>
              <p id="story-copy" className="mt-6 max-w-xl text-base leading-8 text-velmora-ink/76">Velmora Fine Jewelry creates demi-fine pieces that feel considered, personal, and enduring. Every cuff, huggie, chain, and gift set is designed to bring the warmth of gold into everyday life without excess.</p>
              <a href="#journal" className="mt-8 inline-flex items-center gap-3 border-b border-velmora-champagne pb-2 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink transition hover:text-velmora-bronze">
                Our Story <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="border border-velmora-mist bg-velmora-cream p-7 text-velmora-ink shadow-soft">
                <div className="mb-5 flex gap-1 text-velmora-champagne">
                  {[0, 1, 2, 3, 4].map((star) => <Star key={star} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="font-serif text-2xl leading-9 text-velmora-ink">“{testimonial.text}”</p>
                <p className="mt-6 text-xs font-bold uppercase tracking-luxury text-velmora-bronze">{testimonial.name}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
          <div className="mx-auto max-w-7xl bg-velmora-champagne p-8 text-velmora-ink shadow-editorial sm:p-12 lg:p-16">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-luxury text-velmora-ink/72">Private list</p>
                <h2 className="mt-3 font-serif text-5xl leading-tight text-velmora-ink">Join for 10% off your first order</h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-ink/78">Receive new drops, care rituals, and gifting edits from Velmora.</p>
              </div>
              <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
                <label className="sr-only" htmlFor="newsletter-email">Email address</label>
                <input id="newsletter-email" type="email" required placeholder="Email address" className="min-h-14 flex-1 border border-velmora-ink/25 bg-velmora-cream px-5 text-sm text-velmora-ink placeholder:text-velmora-ink/55 outline-none transition focus:border-velmora-ink" />
                <button type="submit" className="inline-flex min-h-14 items-center justify-center gap-2 bg-velmora-ink px-6 text-xs font-bold uppercase tracking-[0.2em] text-velmora-cream transition hover:bg-velmora-bronze">
                  <Mail className="h-4 w-4" /> Join
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </ImageLoader>
  )
}
