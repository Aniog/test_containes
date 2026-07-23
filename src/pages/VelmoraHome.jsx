import { ArrowRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/product/ProductCard.jsx'
import { categories, products, testimonials, ugcPosts } from '../data/products.js'
import { getStrkImageUrl } from '../lib/strk-images.js'

function SectionIntro({ eyebrow, title, copy, align = 'center' }) {
  return (
    <div className={`mx-auto mb-10 max-w-2xl ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <p className="text-xs font-bold uppercase tracking-luxury text-velmora-gold">{eyebrow}</p>
      <h2 className="mt-3 font-serifDisplay text-4xl leading-tight text-velmora-ink md:text-5xl">{title}</h2>
      {copy && <p className="mt-4 text-sm leading-7 text-velmora-clay md:text-base">{copy}</p>}
    </div>
  )
}

export default function Home({ onAddToCart }) {
  return (
    <main className="bg-velmora-cream text-velmora-ink">
      <section className="relative min-h-screen overflow-hidden bg-velmora-ink text-velmora-linen">
        <div className="absolute inset-0 velmora-hero-backdrop" />
        <div className="relative mx-auto grid min-h-screen w-full max-w-7xl items-end gap-10 px-4 pb-16 pt-32 md:grid-cols-[1.02fr_0.98fr] md:px-8 md:pb-24 md:pt-40">
          <div className="max-w-3xl animate-fade-up pb-4">
            <p className="mb-5 text-xs font-bold uppercase tracking-luxury text-velmora-brass">Demi-fine gold jewelry</p>
            <h1 id="hero-title" className="font-serifDisplay text-5xl leading-none text-velmora-linen md:text-7xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subhead" className="mt-6 max-w-xl text-base leading-8 text-velmora-parchment md:text-lg">
              Warm gold earrings, huggies, and necklaces designed for everyday rituals, heartfelt gifting, and a quietly luminous kind of luxury.
            </p>
            <Link
              to="/shop"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-velmora-gold px-7 py-4 text-xs font-bold uppercase tracking-luxury text-velmora-ink shadow-softGold transition hover:bg-velmora-brass"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative order-first mx-auto w-full max-w-md animate-soft-reveal md:order-none md:max-w-none md:pb-4">
            <span id="hero-image-brief" className="sr-only">minimal warm gold earrings and delicate gold necklace worn on a woman, close-up skin detail, quiet luxury demi-fine jewelry campaign</span>
            <div className="absolute -inset-4 border border-velmora-gold/60 opacity-60" />
            <div className="relative aspect-[4/5] overflow-hidden bg-velmora-espresso shadow-editorial">
              <img
                alt="Velmora gold jewelry worn in warm editorial light"
                className="h-full w-full object-cover opacity-90"
                data-strk-img-id="velmora-home-hero-panel-gold-b1d9e4"
                data-strk-img="[hero-image-brief] [hero-subhead] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src={getStrkImageUrl('velmora-home-hero-panel-gold-b1d9e4')}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/45 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-velmora-border bg-velmora-linen text-velmora-ink">
        <div className="mx-auto grid max-w-7xl gap-3 px-4 py-4 text-center text-[11px] font-bold uppercase tracking-luxury text-velmora-clay md:grid-cols-4 md:px-8">
          <span>Free Worldwide Shipping</span>
          <span>30-Day Returns</span>
          <span>18K Gold Plated</span>
          <span>Hypoallergenic</span>
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <SectionIntro
          eyebrow="Bestsellers"
          title="Pieces with a devoted following"
          copy="Our most-loved gold accents, selected for gifting ease, everyday polish, and that unmistakable Velmora glow."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} context="bestseller" />
          ))}
        </div>
      </section>

      <section id="journal" className="overflow-hidden border-y border-velmora-border bg-velmora-parchment py-16 text-velmora-ink md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionIntro
              eyebrow="Seen in the ritual"
              title="A reel of warm gold moments"
              copy="Softly styled by women who wear their favorite pieces from coffee to candlelight."
              align="left"
            />
            <Link to="/shop" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-luxury text-velmora-ink transition hover:text-velmora-gold">
              Explore worn styles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="flex snap-x gap-4 overflow-x-auto pb-4 [scrollbar-width:none]">
            {ugcPosts.map((post) => (
              <article key={post.id} className="group relative aspect-[9/16] min-w-[210px] snap-start overflow-hidden bg-velmora-espresso shadow-softGold md:min-w-[260px]">
                <img
                  alt={post.caption}
                  className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105"
                  data-strk-img-id={post.imageId}
                  data-strk-img={`[${post.titleId}] [ugc-section-title]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="520"
                  src={getStrkImageUrl(post.imageId)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/75 via-transparent to-transparent" />
                <p id={post.titleId} className="absolute inset-x-4 bottom-4 font-serifDisplay text-xl leading-tight text-velmora-linen">
                  {post.caption}
                </p>
              </article>
            ))}
          </div>
          <span id="ugc-section-title" className="sr-only">Velmora fine gold jewelry worn on ear and neck</span>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <SectionIntro
          eyebrow="Shop by category"
          title="Find your golden signature"
          copy="Choose the silhouette she reaches for most: softly sculpted earrings, delicate necklaces, or polished huggies."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} to={`/shop?category=${category.name}`} className="group relative aspect-[4/5] overflow-hidden bg-velmora-espresso text-velmora-linen shadow-softGold">
              <img
                alt={`${category.name} jewelry category`}
                className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-95"
                data-strk-img-id={category.imageId}
                data-strk-img={`[${category.descId}] [${category.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="760"
                src={getStrkImageUrl(category.imageId)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/75 via-velmora-ink/10 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 translate-y-2 transition duration-500 group-hover:translate-y-0">
                <p id={category.descId} className="mb-3 text-sm leading-6 text-velmora-parchment opacity-0 transition duration-500 group-hover:opacity-100">
                  {category.desc}
                </p>
                <h3 id={category.titleId} className="font-serifDisplay text-4xl text-velmora-linen">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="story" className="border-y border-velmora-border bg-velmora-linen text-velmora-ink">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div className="relative min-h-[420px] overflow-hidden bg-velmora-parchment shadow-softGold">
            <img
              alt="Velmora jewelry studio with warm gold details"
              className="h-full w-full object-cover"
              data-strk-img-id="brand-story-studio-f0d5aa"
              data-strk-img="[story-copy] [story-title]"
              data-strk-img-ratio="3x2"
              data-strk-img-width="1000"
              src={getStrkImageUrl('brand-story-studio-f0d5aa')}
            />
          </div>
          <div className="flex flex-col justify-center text-velmora-ink">
            <p className="text-xs font-bold uppercase tracking-luxury text-velmora-gold">Our Story</p>
            <h2 id="story-title" className="mt-4 font-serifDisplay text-4xl leading-tight text-velmora-ink md:text-6xl">
              Jewelry for the moments between occasion and everyday.
            </h2>
            <p id="story-copy" className="mt-6 text-base leading-8 text-velmora-clay">
              Velmora was created for women who want pieces that feel considered without feeling precious. We design demi-fine gold jewelry with refined proportions, skin-warming tones, and gift-worthy presentation, sold directly so premium materials stay accessible.
            </p>
            <Link to="/shop" className="mt-8 inline-flex w-fit items-center gap-3 border-b border-velmora-gold pb-2 text-xs font-bold uppercase tracking-luxury text-velmora-ink transition hover:text-velmora-gold">
              Our Story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <SectionIntro eyebrow="Love notes" title="Quiet praise, beautifully worn" />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((review) => (
            <article key={review.name} className="border border-velmora-border bg-velmora-linen p-7 text-velmora-ink shadow-softGold">
              <div className="mb-5 flex gap-1 text-velmora-gold">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="font-serifDisplay text-2xl leading-snug text-velmora-ink">“{review.text}”</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-luxury text-velmora-clay">{review.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden bg-velmora-espresso text-velmora-linen shadow-editorial">
          <div className="grid gap-8 px-6 py-12 md:grid-cols-[1.1fr_0.9fr] md:px-12 md:py-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-luxury text-velmora-brass">Velmora List</p>
              <h2 className="mt-3 font-serifDisplay text-4xl leading-tight text-velmora-linen md:text-5xl">Join for 10% off your first order</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-parchment">
                Receive styling notes, early collection access, and quiet gifting reminders before the moment arrives.
              </p>
            </div>
            <form className="flex flex-col justify-center gap-3 sm:flex-row md:flex-col lg:flex-row">
              <label className="sr-only" htmlFor="newsletter-email">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Email address"
                className="min-h-14 flex-1 border border-velmora-clay bg-velmora-linen px-5 text-sm text-velmora-ink placeholder:text-velmora-clay focus:border-velmora-gold focus:outline-none"
              />
              <button type="button" className="min-h-14 rounded-full bg-velmora-gold px-7 text-xs font-bold uppercase tracking-luxury text-velmora-ink transition hover:bg-velmora-brass">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
