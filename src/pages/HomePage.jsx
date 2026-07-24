import { ArrowRight, Instagram, Mail, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import ImageLoader from '@/components/storefront/ImageLoader'
import ProductCard from '@/components/storefront/ProductCard'
import { categories, products, testimonials, ugcCards } from '@/data/products'
import { getStrkImageUrl } from '@/lib/strk-images'

const HomePage = ({ onAddToCart }) => {
  return (
    <ImageLoader className="bg-velmora-cream text-velmora-ink">
      <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-velmora-ink text-velmora-porcelain">
        <div
          className="absolute inset-0 bg-velmora-espresso"
          data-strk-bg-id="velmora-hero-bg-d4ac9e"
          data-strk-bg="[hero-subhead] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink via-velmora-ink/55 to-velmora-ink/20" />
        <div className="velmora-container relative z-10 pb-16 pt-32 sm:pb-20 lg:pb-24">
          <div className="max-w-3xl animate-fade-up">
            <p className="mb-5 text-xs font-bold uppercase tracking-luxury text-velmora-gold">
              Demi-fine gold jewelry for rituals, gifts, and golden hours
            </p>
            <h1 id="hero-title" className="font-serifDisplay text-6xl font-semibold leading-[0.9] text-velmora-porcelain sm:text-7xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subhead" className="mt-6 max-w-xl text-base leading-8 text-velmora-cream/90 sm:text-lg">
              Warm 18K gold-plated silhouettes, crystal accents, and easy heirloom polish designed for everyday glow.
            </p>
            <Link to="/shop" className="premium-button mt-8">
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-velmora-linen bg-velmora-porcelain text-velmora-ink">
        <div className="velmora-container grid gap-3 py-4 text-center text-[0.68rem] font-bold uppercase tracking-luxury text-velmora-goldDark sm:grid-cols-4">
          <span>Free Worldwide Shipping</span>
          <span>30-Day Returns</span>
          <span>18K Gold Plated</span>
          <span>Hypoallergenic</span>
        </div>
      </section>

      <section id="shop" className="velmora-container py-20 sm:py-24">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-luxury text-velmora-goldDark">Most loved</p>
            <h2 className="mt-3 font-serifDisplay text-5xl font-semibold text-velmora-ink sm:text-6xl">
              Bestsellers
            </h2>
          </div>
          <Link to="/shop" className="outline-button self-start sm:self-auto">
            View all pieces
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} context="home" />
          ))}
        </div>
      </section>

      <section className="border-y border-velmora-linen bg-velmora-ink py-16 text-velmora-porcelain sm:py-20">
        <div className="velmora-container">
          <div className="mb-8 flex items-end justify-between gap-5">
            <div>
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-luxury text-velmora-gold">
                <Instagram className="h-4 w-4" /> Worn by Velmora women
              </p>
              <h2 className="mt-3 font-serifDisplay text-4xl font-semibold sm:text-5xl">
                Golden-hour reels
              </h2>
            </div>
          </div>
          <div className="flex snap-x gap-4 overflow-x-auto pb-4 [scrollbar-width:none]">
            {ugcCards.map((card) => (
              <article key={card.id} className="relative aspect-[9/16] min-w-[230px] snap-start overflow-hidden rounded-[1.75rem] bg-velmora-espresso shadow-velvet sm:min-w-[270px]">
                <img
                  alt={`${card.caption} jewelry styling`}
                  className="h-full w-full object-cover opacity-90 transition duration-700 hover:scale-105"
                  data-strk-img-id={card.imgId}
                  data-strk-img={`[${card.titleId}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="540"
                  src={getStrkImageUrl(card.imgId)}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velmora-ink via-velmora-ink/70 to-transparent p-5 pt-20">
                  <p id={card.titleId} className="font-serifDisplay text-2xl font-semibold leading-7 text-velmora-porcelain">
                    {card.caption}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="velmora-container py-20 sm:py-24">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-luxury text-velmora-goldDark">Shop by category</p>
          <h2 className="mt-3 font-serifDisplay text-5xl font-semibold text-velmora-ink sm:text-6xl">
            Find your signature
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${encodeURIComponent(category.label)}`}
              className="group relative aspect-[4/5] overflow-hidden bg-velmora-linen text-velmora-porcelain shadow-soft"
            >
              <img
                alt={`${category.label} gold jewelry category`}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                data-strk-img-id={category.imgId}
                data-strk-img={`[${category.descId}] [${category.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src={getStrkImageUrl(category.imgId)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/80 via-velmora-ink/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p id={category.descId} className="mb-3 translate-y-3 text-sm leading-6 text-velmora-cream/90 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {category.desc}
                </p>
                <h3 id={category.titleId} className="font-serifDisplay text-4xl font-semibold text-velmora-porcelain">
                  {category.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="about" className="border-y border-velmora-linen bg-velmora-porcelain py-20 sm:py-24">
        <div className="velmora-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-velmora-linen shadow-velvet">
            <img
              alt="Velmora artisan arranging gold jewelry in soft editorial light"
              className="h-full w-full object-cover"
              data-strk-img-id="brand-story-atelier-b8c51d"
              data-strk-img="[story-body] [story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1000"
              src={getStrkImageUrl('brand-story-atelier-b8c51d')}
            />
          </div>
          <div className="mx-auto max-w-2xl text-velmora-ink lg:pl-10">
            <p className="text-xs font-bold uppercase tracking-luxury text-velmora-goldDark">About Velmora</p>
            <h2 id="story-title" className="mt-4 font-serifDisplay text-5xl font-semibold leading-tight sm:text-6xl">
              Demi-fine jewelry with the quiet confidence of heirlooms.
            </h2>
            <p id="story-body" className="mt-6 text-base leading-8 text-velmora-mauve sm:text-lg">
              Velmora designs luminous pieces for women who choose jewelry as a daily ritual. Each style is refined, giftable, and accessible, made to layer beautifully and last beyond a season.
            </p>
            <Link to="/#about" className="outline-button mt-8">
              Our Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="velmora-container py-20 sm:py-24">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="border border-velmora-linen bg-velmora-porcelain p-7 text-velmora-ink shadow-soft">
              <div className="mb-5 flex gap-1 text-velmora-goldDark" aria-label="5 star review">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="font-serifDisplay text-2xl font-semibold leading-8 text-velmora-ink">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm font-bold uppercase tracking-luxury text-velmora-goldDark">
                {testimonial.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="journal" className="bg-velmora-espresso py-16 text-velmora-porcelain sm:py-20">
        <div className="velmora-container grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-luxury text-velmora-gold">The first-glow edit</p>
            <h2 className="mt-4 font-serifDisplay text-5xl font-semibold leading-tight sm:text-6xl">
              Join for 10% off your first order
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-velmora-cream/85">
              Receive styling notes, limited drops, and early gifting edits from Velmora.
            </p>
          </div>
          <form className="rounded-[2rem] border border-velmora-porcelain/15 bg-velmora-ink/35 p-4 shadow-velvet sm:flex sm:items-center sm:gap-3" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <div className="flex flex-1 items-center gap-3 rounded-full bg-velmora-porcelain px-5 py-4 text-velmora-ink">
              <Mail className="h-4 w-4 text-velmora-goldDark" />
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Email address"
                className="w-full bg-transparent text-sm text-velmora-ink placeholder:text-velmora-mauve focus:outline-none"
              />
            </div>
            <button type="submit" className="premium-button mt-3 w-full sm:mt-0 sm:w-auto">
              Join
            </button>
          </form>
        </div>
      </section>
    </ImageLoader>
  )
}

export default HomePage
