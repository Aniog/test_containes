import { ArrowRight, Star } from 'lucide-react'
import { categories, placeholderSvg, products, testimonials, ugcPosts } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

export default function HomePage({ onAddToCart, onProductSelect }) {
  return (
    <>
      <section id="home" className="relative min-h-screen overflow-hidden bg-velmora-espresso text-velmora-ivory">
        <div
          className="absolute inset-0"
          data-strk-bg-id="velmora-hero-bg-84f2a1"
          data-strk-bg="[hero-subhead] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-velmora-espresso via-velmora-espresso/72 to-velmora-espresso/24" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(199,154,85,0.18),transparent_34%)]" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 pb-20 pt-28 sm:px-6 lg:px-8">
          <div className="max-w-2xl animate-fade-up">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-velmora-softgold">Demi-fine gold jewelry</p>
            <h1 id="hero-title" className="font-serif text-6xl font-semibold leading-[0.92] text-velmora-ivory sm:text-7xl lg:text-8xl">Crafted to be Treasured</h1>
            <p id="hero-subhead" className="mt-7 max-w-xl text-base leading-8 text-velmora-ivory/78 sm:text-lg">Warm gold essentials with an heirloom sensibility — earrings, necklaces, and huggies made for everyday ritual and unforgettable gifting.</p>
            <a href="#shop" className="mt-9 inline-flex items-center gap-3 rounded-full bg-velmora-champagne px-7 py-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso shadow-[0_18px_45px_rgba(199,154,85,0.28)] transition hover:bg-velmora-softgold">
              Shop the Collection
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-velmora-espresso/10 bg-velmora-ivory text-velmora-espresso">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 py-4 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-velmora-mink sm:px-6 md:grid-cols-4 lg:px-8">
          {['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map((item) => (
            <p key={item} className="py-2">{item}</p>
          ))}
        </div>
      </section>

      <section id="shop" className="bg-velmora-ivory py-16 text-velmora-espresso md:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">Bestsellers</p>
              <h2 className="mt-3 font-serif text-5xl font-semibold text-velmora-espresso md:text-6xl">Pieces in constant rotation</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-velmora-mink">Five luminous signatures chosen for everyday styling, thoughtful gifting, and quiet statement-making.</p>
          </div>
          <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} onSelect={onProductSelect} imageContext="home-best" />
            ))}
          </div>
        </div>
      </section>

      <section id="journal" className="overflow-hidden bg-velmora-espresso py-16 text-velmora-ivory md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-9 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">Seen on Velmora</p>
              <h2 className="mt-3 font-serif text-5xl font-semibold text-velmora-ivory">From the reel</h2>
            </div>
            <p className="hidden max-w-sm text-sm leading-7 text-velmora-ivory/68 md:block">Editorial moments that feel personal: a glint at the ear, a chain at the collarbone, a box opened slowly.</p>
          </div>
          <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory">
            {ugcPosts.map((post) => (
              <article key={post.id} className="group relative h-[430px] min-w-[240px] snap-start overflow-hidden rounded-[9rem] bg-velmora-cocoa sm:min-w-[290px]">
                <img
                  alt={post.caption}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  data-strk-img-id={`ugc-${post.id}`}
                  data-strk-img={`[ugc-desc-${post.id}] [ugc-caption-${post.id}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="520"
                  src={placeholderSvg}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/78 via-transparent to-transparent" />
                <div className="absolute inset-x-7 bottom-10 text-center">
                  <p id={`ugc-caption-${post.id}`} className="font-serif text-2xl text-velmora-ivory">{post.caption}</p>
                  <p id={`ugc-desc-${post.id}`} className="sr-only">{post.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="collections" className="bg-velmora-parchment py-16 text-velmora-espresso md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">Shop by category</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold text-velmora-espresso md:text-6xl">Find your signature</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {categories.map((category) => (
              <a key={category.id} href="#collection" className="group relative overflow-hidden rounded-t-full bg-velmora-espresso text-velmora-ivory shadow-[0_20px_50px_rgba(32,24,20,0.08)]">
                <img
                  alt={category.name}
                  className="aspect-[3/4] w-full object-cover opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                  data-strk-img-id={`category-${category.id}`}
                  data-strk-img={`[category-desc-${category.id}] [category-title-${category.id}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="760"
                  src={placeholderSvg}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/76 via-velmora-espresso/12 to-transparent" />
                <div className="absolute inset-x-6 bottom-8 text-center transition duration-300 group-hover:-translate-y-2">
                  <h3 id={`category-title-${category.id}`} className="font-serif text-4xl text-velmora-ivory">{category.name}</h3>
                  <p id={`category-desc-${category.id}`} className="mt-2 text-sm text-velmora-ivory/72">{category.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-velmora-ivory py-16 text-velmora-espresso md:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="relative overflow-hidden rounded-t-full bg-velmora-parchment">
            <img
              alt="Velmora studio story"
              className="aspect-[4/5] w-full object-cover"
              data-strk-img-id="brand-story-portrait-b4e821"
              data-strk-img="[story-body] [story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src={placeholderSvg}
            />
          </div>
          <div className="lg:pl-8">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">Our point of view</p>
            <h2 id="story-title" className="mt-4 font-serif text-5xl font-semibold leading-tight text-velmora-espresso md:text-6xl">Jewelry for the pause before the compliment.</h2>
            <p id="story-body" className="mt-6 text-base leading-8 text-velmora-mink">Velmora creates demi-fine gold jewelry for women who want beauty without performance. Each piece is selected for warmth, wearability, and the kind of subtle detail that becomes personal over time.</p>
            <a href="#home" className="mt-8 inline-flex items-center gap-3 border-b border-velmora-champagne pb-2 text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso transition hover:text-velmora-champagne">
              Our Story
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-velmora-espresso/10 bg-velmora-ivory py-16 text-velmora-espresso md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="bg-velmora-parchment/75 p-8 text-velmora-espresso shadow-[0_18px_45px_rgba(32,24,20,0.04)]">
                <div className="mb-5 flex text-velmora-champagne">
                  {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" strokeWidth={1.2} />)}
                </div>
                <p className="font-serif text-2xl leading-8 text-velmora-espresso">“{testimonial.quote}”</p>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-velmora-mink">{testimonial.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-velmora-ivory px-4 py-16 text-velmora-espresso sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden bg-velmora-blush text-velmora-espresso shadow-[0_30px_80px_rgba(32,24,20,0.1)]">
          <div className="grid items-center gap-8 p-8 md:grid-cols-[1.2fr_1fr] md:p-12 lg:p-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-espresso/70">Private list</p>
              <h2 className="mt-3 font-serif text-5xl font-semibold text-velmora-espresso">Join for 10% off your first order</h2>
              <p className="mt-4 text-sm leading-7 text-velmora-espresso/72">Receive styling notes, early access to new drops, and quietly generous welcome savings.</p>
            </div>
            <form className="space-y-3" onSubmit={(event) => event.preventDefault()}>
              <label className="sr-only" htmlFor="newsletter-email">Email address</label>
              <input id="newsletter-email" type="email" required placeholder="you@example.com" className="w-full rounded-full border border-velmora-espresso/15 bg-velmora-ivory px-5 py-4 text-sm text-velmora-espresso placeholder:text-velmora-mink focus:border-velmora-champagne focus:outline-none focus:ring-2 focus:ring-velmora-champagne/30" />
              <button type="submit" className="w-full rounded-full bg-velmora-espresso px-6 py-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-ivory transition hover:bg-velmora-cocoa">Join the list</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
