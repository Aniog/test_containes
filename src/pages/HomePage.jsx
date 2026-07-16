import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeader from '../components/common/SectionHeader.jsx'
import StarRating from '../components/common/StarRating.jsx'
import ProductCard from '../components/product/ProductCard.jsx'
import { getImageSource } from '../data/imageSources.js'
import { categories, products, testimonials, ugcCards } from '../data/products.js'

const heroImageStyle = {
  backgroundImage: `url('${getImageSource('home-hero-bg-jewelry-4f91c7')}')`,
}

const HomePage = ({ onAddToCart }) => (
  <>
    <section className="relative min-h-[88vh] overflow-hidden bg-velmora-espresso text-velmora-ivory">
      <span id="hero-image-context" className="sr-only">
        Warm-lit close-up of gold jewelry on a woman model, quiet luxury demi-fine earrings and necklace editorial
      </span>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={heroImageStyle}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-velmora-espresso via-velmora-espresso/60 to-velmora-espresso/10" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-velmora-espresso to-transparent" />
      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-center px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <div className="max-w-2xl animate-fade-up">
          <p className="mb-5 text-xs font-bold uppercase tracking-nav text-velmora-champagne">Demi-fine gold jewelry</p>
          <h1 id="hero-title" className="font-serif text-6xl font-semibold leading-[0.95] text-velmora-ivory md:text-8xl lg:text-9xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-7 max-w-xl text-lg leading-8 text-velmora-stone md:text-xl">
            Warm, luminous pieces for everyday rituals, thoughtful gifting, and the quiet confidence of self-purchase.
          </p>
          <Link
            to="/shop"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-velmora-champagne px-7 py-4 text-sm font-bold uppercase tracking-nav text-velmora-espresso shadow-glow transition hover:bg-velmora-ivory focus:outline-none focus:ring-2 focus:ring-velmora-champagne focus:ring-offset-2 focus:ring-offset-velmora-espresso"
          >
            Shop the Collection <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>

    <section className="border-y border-velmora-stone bg-velmora-porcelain text-velmora-espresso">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 py-4 text-center text-[0.68rem] font-bold uppercase tracking-nav text-velmora-muted sm:px-6 md:grid-cols-4 lg:px-8">
        {['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map((item) => (
          <p key={item} className="px-3 py-2 text-velmora-espresso">{item}</p>
        ))}
      </div>
    </section>

    <section id="bestsellers" className="bg-velmora-ivory py-16 text-velmora-espresso md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Bestsellers"
          title="The pieces everyone reaches for first"
          description="Five luminous essentials, designed to layer easily and feel elevated from morning coffee to candlelit dinner."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>

    <section id="journal" className="overflow-hidden bg-velmora-espresso py-16 text-velmora-ivory md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            align="left"
            eyebrow="Seen in motion"
            title="A reel of golden moments"
            description="A warm, social-first strip inspired by the way Velmora is worn: close, personal, and effortlessly editorial."
          />
          <p className="text-sm uppercase tracking-nav text-velmora-champagne">Swipe the edit</p>
        </div>
        <div className="mt-10 flex snap-x gap-4 overflow-x-auto pb-4 [scrollbar-width:thin]">
          {ugcCards.map((card) => (
            <article key={card.id} className="group relative h-[28rem] w-64 shrink-0 snap-start overflow-hidden rounded-[2rem] bg-velmora-ink shadow-soft md:h-[34rem] md:w-80">
              <span id={`ugc-context-${card.id}`} className="sr-only">Velmora gold jewelry worn on ear and neck in warm editorial light</span>
              <img
                alt={card.caption}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                src={getImageSource(card.imageId)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/80 via-transparent to-transparent" />
              <p id={card.titleId} className="absolute inset-x-6 bottom-6 font-serif text-3xl font-semibold text-velmora-ivory">
                {card.caption}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-velmora-ivory py-16 text-velmora-espresso md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Shop by category" title="Curate your golden signature" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} to={`/shop?category=${category.id}`} className="group relative block aspect-[4/5] overflow-hidden bg-velmora-blush shadow-sm">
              <img
                alt={`${category.label} category`}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                src={getImageSource(category.imageId)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/75 via-velmora-espresso/10 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 translate-y-3 transition duration-500 group-hover:translate-y-0">
                <p id={category.descId} className="mb-2 text-sm leading-6 text-velmora-stone opacity-0 transition duration-500 group-hover:opacity-100">
                  {category.description}
                </p>
                <h3 id={category.titleId} className="font-serif text-5xl font-semibold text-velmora-ivory">
                  {category.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section id="story" className="bg-velmora-porcelain py-16 text-velmora-espresso md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-blush shadow-soft">
          <img
            alt="Velmora artisan arranging gold jewelry"
            className="h-full w-full object-cover"
            src={getImageSource('brand-story-editorial-73e21a')}
          />
        </div>
        <div className="lg:pl-12">
          <p className="mb-4 text-xs font-bold uppercase tracking-nav text-velmora-bronze">Velmora method</p>
          <h2 id="story-title" className="font-serif text-5xl font-semibold leading-tight text-velmora-espresso md:text-7xl">
            Fine feeling, without the fine jewelry markup.
          </h2>
          <p id="story-copy" className="mt-6 text-lg leading-8 text-velmora-muted">
            We design close-to-skin pieces in warm gold finishes, balancing sculptural silhouettes with everyday comfort. Each piece is made to arrive gift-ready and stay in your rotation season after season.
          </p>
          <Link to="/shop" className="mt-8 inline-flex items-center gap-3 border-b border-velmora-champagne pb-2 text-sm font-bold uppercase tracking-nav text-velmora-espresso transition hover:text-velmora-bronze">
            Our Story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>

    <section className="bg-velmora-ivory py-16 text-velmora-espresso md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Reviews" title="Notes from the Velmora circle" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className="border border-velmora-stone bg-velmora-porcelain p-8 text-velmora-espresso shadow-sm">
              <StarRating compact />
              <p className="mt-6 font-serif text-3xl leading-9 text-velmora-espresso">“{testimonial.quote}”</p>
              <p className="mt-6 text-sm font-bold uppercase tracking-nav text-velmora-bronze">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section id="newsletter" className="bg-velmora-ivory px-4 pb-16 text-velmora-espresso sm:px-6 md:pb-24 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-velmora-blush shadow-soft md:rounded-[3rem]">
        <div className="grid gap-8 p-7 md:grid-cols-[1.2fr_0.8fr] md:p-12 lg:p-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-nav text-velmora-bronze">Private list</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold leading-tight text-velmora-espresso md:text-7xl">
              Join for 10% off your first order
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-velmora-muted">
              Receive early access to new drops, gifting edits, and care notes for keeping gold luminous.
            </p>
          </div>
          <form className="flex flex-col justify-end gap-3" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Email address"
              className="h-14 rounded-full border border-velmora-stone bg-velmora-porcelain px-5 text-velmora-espresso placeholder:text-velmora-muted focus:border-velmora-champagne focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
            />
            <button
              type="submit"
              className="h-14 rounded-full bg-velmora-espresso px-6 text-sm font-bold uppercase tracking-nav text-velmora-ivory transition hover:bg-velmora-champagne hover:text-velmora-espresso focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
            >
              Join the list
            </button>
          </form>
        </div>
      </div>
    </section>
  </>
)

export default HomePage
