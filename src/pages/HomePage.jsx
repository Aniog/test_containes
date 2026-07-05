import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'
import ProductCard from '../components/ProductCard.jsx'
import { StockBackground, StockImage } from '../components/StockImage.jsx'
import { categories, products, ugcMoments } from '../data/products.js'

const testimonials = [
  { name: 'Maya R.', text: 'The huggies feel expensive without being precious. I wear them almost every day.' },
  { name: 'Elena S.', text: 'Beautiful packaging, warm gold tone, and exactly the right amount of sparkle.' },
  { name: 'Nora L.', text: 'Gifted the necklace to my sister and she thought it was from a fine jewelry boutique.' },
]

export default function HomePage({ onAddToCart }) {
  return (
    <main className="bg-velmora-ivory text-velmora-obsidian">
      <section className="relative min-h-[92vh] overflow-hidden bg-velmora-obsidian text-white">
        <span id="hero-image-context" className="sr-only">warm-lit close-up of gold jewelry on a model wearing demi-fine earrings and necklace</span>
        <StockBackground
          id="velmora-hero-bg-model-gold-e91a3b"
          query="[hero-image-context] [hero-subtitle] [hero-title]"
          ratio="16x9"
          width="1800"
          className="absolute inset-0 bg-cover bg-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-velmora-obsidian via-velmora-obsidian/55 to-velmora-obsidian/30" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-5 pb-20 pt-32 sm:px-8 lg:px-10">
          <div className="max-w-3xl animate-fade-up">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-velmora-champagne">Demi-fine gold jewelry</p>
            <h1 id="hero-title" className="font-serif text-6xl font-semibold leading-[0.92] tracking-[-0.03em] text-white sm:text-7xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="mt-7 max-w-xl text-base leading-8 text-white/82 sm:text-lg">
              Warm gold essentials, sculptural huggies, and luminous crystal accents made for self-purchase, gifting, and the rituals in between.
            </p>
            <Link to="/shop" className="mt-9 inline-flex items-center gap-3 rounded-full bg-velmora-champagne px-7 py-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-obsidian shadow-[0_18px_50px_rgba(208,168,104,0.28)] transition hover:-translate-y-0.5 hover:bg-velmora-champagneDark">
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-velmora-champagne/25 bg-velmora-pearl text-velmora-obsidian">
        <div className="mx-auto grid max-w-7xl gap-3 px-5 py-4 text-center text-[11px] font-bold uppercase tracking-[0.22em] text-velmora-ink/75 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-10">
          <span>Free Worldwide Shipping</span>
          <span>30-Day Returns</span>
          <span>18K Gold Plated</span>
          <span>Hypoallergenic</span>
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-champagneDark">Most loved</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold text-velmora-obsidian sm:text-6xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-velmora-obsidian transition hover:text-velmora-champagneDark">
            View all pieces <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

      <section className="overflow-hidden bg-velmora-obsidian py-20 text-velmora-ivory lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-champagne">Worn softly</p>
              <h2 className="mt-3 font-serif text-5xl text-velmora-ivory">Reel Moments</h2>
            </div>
            <p className="hidden max-w-sm text-sm leading-7 text-velmora-ivory/70 md:block">A warm, editorial strip of jewelry in motion — made to feel like a saved folder of styling inspiration.</p>
          </div>
          <div className="flex snap-x gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {ugcMoments.map((moment) => (
              <article key={moment.id} className="relative h-[28rem] w-64 shrink-0 snap-start overflow-hidden rounded-[2rem] bg-velmora-ink shadow-[0_22px_70px_rgba(0,0,0,0.28)]">
                <StockImage
                  id={moment.imageId}
                  query={`[${moment.titleId}] [reel-section-title]`}
                  ratio="9x16"
                  width="500"
                  alt={moment.caption}
                  className="h-full w-full object-cover opacity-90 transition duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian via-transparent to-transparent" />
                <h3 id={moment.titleId} className="absolute bottom-6 left-5 right-5 font-serif text-2xl leading-7 text-white">{moment.caption}</h3>
              </article>
            ))}
          </div>
          <span id="reel-section-title" className="sr-only">Velmora fine jewelry worn on ear and neck</span>
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-champagneDark">Shop by category</p>
          <h2 className="mt-3 font-serif text-5xl text-velmora-obsidian sm:text-6xl">The Gold Edit</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.name} to={`/shop?category=${category.name}`} className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-velmora-obsidian text-white shadow-[0_20px_70px_rgba(32,25,19,0.1)]">
              <StockImage
                id={category.imageId}
                query={`[${category.descId}] [${category.titleId}]`}
                ratio="3x4"
                width="700"
                alt={category.name}
                className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian via-velmora-obsidian/20 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 translate-y-2 transition duration-300 group-hover:translate-y-0">
                <h3 id={category.titleId} className="font-serif text-4xl text-white">{category.name}</h3>
                <p id={category.descId} className="mt-2 text-sm leading-6 text-white/78 opacity-0 transition duration-300 group-hover:opacity-100">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="about" className="border-y border-velmora-champagne/25 bg-velmora-pearl">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-28">
          <div className="overflow-hidden rounded-[2.5rem] bg-velmora-obsidian shadow-[0_25px_80px_rgba(32,25,19,0.12)]">
            <StockImage
              id="velmora-story-image-a63b2d"
              query="[story-subtitle] [story-title]"
              ratio="4x3"
              width="1000"
              alt="Velmora gold jewelry editorial still life"
              className="h-full min-h-[26rem] w-full object-cover opacity-90"
            />
          </div>
          <div className="flex items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-champagneDark">Our story</p>
              <h2 id="story-title" className="mt-4 font-serif text-5xl leading-tight text-velmora-obsidian sm:text-6xl">Jewelry for the intimate everyday.</h2>
              <p id="story-subtitle" className="mt-6 text-base leading-8 text-velmora-ink/78">
                Velmora creates demi-fine pieces that sit between keepsake and habit: warm 18K gold plating, thoughtful forms, and gift-ready details without the fine-jewelry markup.
              </p>
              <a href="#" className="mt-8 inline-flex items-center gap-3 border-b border-velmora-champagneDark pb-2 text-xs font-bold uppercase tracking-[0.24em] text-velmora-obsidian transition hover:text-velmora-champagneDark">
                Our Story <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((review) => (
            <article key={review.name} className="rounded-[2rem] border border-velmora-champagne/20 bg-velmora-pearl p-7 text-velmora-obsidian shadow-[0_18px_60px_rgba(32,25,19,0.06)]">
              <div className="flex gap-1 text-velmora-champagneDark" aria-label="5 star review">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-5 text-base leading-8 text-velmora-ink/78">“{review.text}”</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-velmora-taupe">{review.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="journal" className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
        <div className="overflow-hidden rounded-[2.5rem] bg-velmora-rose text-velmora-obsidian shadow-[0_24px_80px_rgba(32,25,19,0.08)]">
          <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:p-14">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-champagneDark">Velmora letters</p>
              <h2 className="mt-3 font-serif text-5xl leading-tight text-velmora-obsidian">Join for 10% off your first order</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-ink/78">Receive styling notes, care rituals, and first access to new gold pieces.</p>
            </div>
            <form className="flex flex-col justify-center gap-3 sm:flex-row lg:flex-col xl:flex-row" onSubmit={(event) => event.preventDefault()}>
              <label className="sr-only" htmlFor="newsletter-email">Email address</label>
              <input id="newsletter-email" type="email" placeholder="Email address" className="min-h-14 flex-1 rounded-full border border-velmora-champagne/30 bg-velmora-ivory px-5 text-sm text-velmora-obsidian placeholder:text-velmora-taupe outline-none transition focus:border-velmora-champagneDark focus:ring-4 focus:ring-velmora-champagne/20" />
              <button type="submit" className="min-h-14 rounded-full bg-velmora-obsidian px-7 text-xs font-bold uppercase tracking-[0.24em] text-velmora-ivory transition hover:bg-velmora-champagneDark hover:text-velmora-obsidian">Join</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
