import { ArrowRight, Instagram, Mail, Star } from 'lucide-react'
import ProductCard from '@/components/commerce/ProductCard'
import { categories, products, testimonials, ugcPosts } from '@/data/products'

const placeholder = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1 1\'/%3E'

export default function HomePage({ onAddToCart, onViewProduct, onNavigate }) {
  return (
    <>
      <section id="home" className="relative min-h-screen overflow-hidden bg-velmora-espresso text-velmora-pearl">
        <div className="absolute inset-0 bg-velmora-espresso" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(200,161,90,0.26),transparent_30%),linear-gradient(135deg,#17110E_0%,#2C211B_44%,#5B432F_100%)]" />
        <div className="absolute right-[-18%] top-[-10%] h-[62vh] w-[62vh] rounded-full border border-velmora-gold/25 opacity-70 md:right-[5%] md:h-[78vh] md:w-[78vh]" />
        <div className="absolute right-[8%] top-[18%] hidden h-72 w-72 rounded-full border border-velmora-gold/20 md:block" />
        <div
          className="absolute inset-y-0 right-0 hidden w-[58%] opacity-80 md:block"
          data-strk-bg-id="velmora-hero-bg-s47d90"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-velmora-espresso via-velmora-espresso/88 to-velmora-espresso/35" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-velmora-espresso to-transparent" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-5 pb-20 pt-32 md:px-10 md:pb-28">
          <div className="max-w-3xl animate-velmora-fade-up rounded-[2rem] border border-velmora-pearl/10 bg-velmora-espresso/42 p-6 shadow-editorial backdrop-blur-sm md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-0">
            <p className="mb-5 text-xs font-bold uppercase tracking-luxury text-velmora-gold">Demi-fine gold jewelry</p>
            <h1 id="hero-title" className="font-serif text-5xl font-semibold leading-[0.95] text-velmora-pearl md:text-7xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-velmora-pearl/86 md:text-lg">
              Warm, luminous pieces for gifting, self-purchase, and the everyday rituals that deserve a little gold.
            </p>
            <button
              type="button"
              onClick={() => onNavigate('#shop')}
              className="mt-9 inline-flex items-center gap-3 bg-velmora-gold px-7 py-4 text-xs font-bold uppercase tracking-luxury text-velmora-espresso transition duration-300 hover:bg-velmora-pearl"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <section className="border-y border-velmora-taupe/30 bg-velmora-pearl text-velmora-espresso">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 py-4 text-center text-[0.68rem] font-bold uppercase tracking-luxury md:grid-cols-4 md:px-10">
          {['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map((item) => (
            <p key={item} className="py-2 text-velmora-espresso/78">{item}</p>
          ))}
        </div>
      </section>

      <section id="shop" className="bg-velmora-ivory px-5 py-16 text-velmora-espresso md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 border-b border-velmora-taupe/30 pb-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-luxury text-velmora-burnished">The pieces customers keep reaching for</p>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl">Bestsellers</h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('shop')}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-luxury text-velmora-espresso transition hover:text-velmora-burnished"
            >
              View all pieces <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onViewProduct={onViewProduct}
                imageContext="home"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="journal" className="bg-velmora-espresso py-16 text-velmora-pearl md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-luxury text-velmora-gold">
                <Instagram className="h-4 w-4" /> Worn in the wild
              </p>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl">Velmora Reels</h2>
            </div>
            <p className="hidden max-w-sm text-sm leading-6 text-velmora-pearl/70 md:block">
              A soft-scroll strip of real-life styling moments: ear stacks, neckline glimmers, and gift-ready gold.
            </p>
          </div>
          <div className="velmora-scrollbar flex gap-4 overflow-x-auto pb-4">
            {ugcPosts.map((post) => (
              <article key={post.id} className="group relative h-[420px] w-[236px] shrink-0 overflow-hidden bg-velmora-ivory shadow-soft md:h-[520px] md:w-[292px]">
                <img
                  alt={post.caption}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  data-strk-img-id={post.imageId}
                  data-strk-img={`[${post.titleId}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="700"
                  src={placeholder}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/82 via-transparent to-transparent" />
                <p id={post.titleId} className="absolute bottom-5 left-5 right-5 font-serif text-2xl leading-tight text-velmora-pearl">
                  {post.caption}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="collections" className="bg-velmora-ivory px-5 py-16 text-velmora-espresso md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-luxury text-velmora-burnished">Shop by category</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Find Your Signature</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => onNavigate('shop')}
                className="group relative min-h-[420px] overflow-hidden bg-velmora-espresso text-left text-velmora-pearl shadow-soft"
              >
                <img
                  alt={category.name}
                  className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-65"
                  data-strk-img-id={category.imageId}
                  data-strk-img={`[${category.descId}] [${category.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="900"
                  src={placeholder}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/90 via-velmora-espresso/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <p id={category.descId} className="mb-3 translate-y-3 text-xs font-bold uppercase tracking-luxury text-velmora-gold opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {category.caption}
                  </p>
                  <h3 id={category.titleId} className="font-serif text-4xl text-velmora-pearl">{category.name}</h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-velmora-pearl px-5 py-16 text-velmora-espresso md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div className="relative overflow-hidden bg-velmora-ivory shadow-editorial">
            <img
              alt="Velmora jewelry atelier detail"
              className="aspect-[4/5] w-full object-cover"
              data-strk-img-id="brand-story-atelier-v12d8e"
              data-strk-img="[brand-story-body] [brand-story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1200"
              src={placeholder}
            />
          </div>
          <div className="md:pl-10">
            <p className="text-xs font-bold uppercase tracking-luxury text-velmora-burnished">Designed close to the skin</p>
            <h2 id="brand-story-title" className="mt-4 font-serif text-4xl leading-tight md:text-6xl">
              Quiet pieces, lasting rituals.
            </h2>
            <p id="brand-story-body" className="mt-6 text-base leading-8 text-velmora-espresso/76 md:text-lg">
              Velmora Fine Jewelry creates premium demi-fine gold essentials with an editorial sensibility: warm light, sculptural lines, and details that make the everyday feel considered.
            </p>
            <button
              type="button"
              className="mt-8 inline-flex items-center gap-3 border border-velmora-gold px-6 py-3 text-xs font-bold uppercase tracking-luxury text-velmora-espresso transition hover:bg-velmora-gold"
            >
              Our Story <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-velmora-ivory px-5 py-16 text-velmora-espresso md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-luxury text-velmora-burnished">Words from our customers</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Soft gold, strong reviews</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="border border-velmora-taupe/30 bg-velmora-pearl p-7 shadow-soft">
                <div className="mb-5 flex gap-1 text-velmora-gold" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-base leading-7 text-velmora-espresso/78">“{testimonial.quote}”</p>
                <p className="mt-6 text-xs font-bold uppercase tracking-luxury text-velmora-espresso">{testimonial.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-velmora-pearl px-5 py-16 text-velmora-espresso md:px-10 md:py-24">
        <div className="mx-auto max-w-5xl border border-velmora-gold/50 bg-velmora-gold px-6 py-10 text-center shadow-editorial md:px-14 md:py-14">
          <Mail className="mx-auto mb-5 h-8 w-8 text-velmora-espresso" />
          <h2 className="font-serif text-4xl md:text-5xl">Join for 10% off your first order</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-velmora-espresso/78">
            Receive early access to new drops, gift edits, and quiet styling notes from Velmora.
          </p>
          <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Email address"
              className="min-h-12 flex-1 border border-velmora-espresso/25 bg-velmora-pearl px-4 text-sm text-velmora-espresso placeholder:text-velmora-espresso/50 outline-none transition focus:border-velmora-espresso"
            />
            <button type="submit" className="min-h-12 bg-velmora-espresso px-6 text-xs font-bold uppercase tracking-luxury text-velmora-pearl transition hover:bg-velmora-pearl hover:text-velmora-espresso">
              Sign up
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
