import { ArrowRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/storefront/ProductCard.jsx'
import { categories, products, ugcPosts } from '../data/products.js'

const placeholder = '/velmora-placeholder.svg'

const testimonials = [
  { name: 'Maya R.', text: 'The Golden Sphere Huggies look far more expensive than they are. I wear them almost every day.' },
  { name: 'Elena B.', text: 'Beautiful packaging, warm gold tone, and no irritation. It felt like gifting myself something special.' },
  { name: 'Claire S.', text: 'The necklace catches the light so softly. Understated, elegant, and perfect for layering.' },
]

function Home({ onAddToCart }) {
  return (
    <div className="bg-porcelain text-espresso">
      <section className="relative min-h-[92vh] overflow-hidden bg-porcelain text-espresso">
        <div
          className="absolute inset-0 opacity-95"
          data-strk-bg-id="home-hero-bg-a93f70"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/25 to-transparent" />
        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-end px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-champagne-dark">Demi-fine gold jewelry</p>
            <h1 id="hero-title" className="font-serif text-6xl font-medium leading-[0.95] text-espresso sm:text-7xl lg:text-8xl">Crafted to be Treasured</h1>
            <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-mocha sm:text-lg">Warm, luminous essentials for the moments you mark and the rituals you keep. Designed in gold tones that feel intimate, modern, and lasting.</p>
            <Link to="/shop" className="mt-9 inline-flex items-center gap-3 bg-champagne px-7 py-4 text-xs font-bold uppercase tracking-[0.22em] text-pearl transition duration-300 hover:-translate-y-0.5 hover:bg-champagne-dark">
              Shop the Collection <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-mist bg-pearl text-espresso">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-3 px-4 py-4 text-center text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-mocha sm:px-6 md:grid-cols-4 lg:px-8">
          {['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section id="bestsellers" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne-dark">Bestsellers</p>
            <h2 className="mt-3 font-serif text-5xl leading-tight text-espresso sm:text-6xl">Loved in warm light</h2>
          </div>
          <Link to="/shop" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-espresso transition hover:text-champagne-dark">View all pieces <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />)}
        </div>
      </section>

      <section className="overflow-hidden bg-espresso py-16 text-pearl lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne">On you</p>
              <h2 className="mt-3 font-serif text-4xl text-pearl sm:text-5xl">Velmora in motion</h2>
            </div>
            <p className="hidden max-w-xs text-sm leading-6 text-pearl/70 md:block">A reel-style glimpse of everyday gold: close, soft, never overdone.</p>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 [scrollbar-width:none]">
            {ugcPosts.map((post) => (
              <article key={post.id} className="group relative h-[440px] min-w-[245px] overflow-hidden bg-blush shadow-soft sm:min-w-[275px]">
                <img
                  alt={post.caption}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.titleId}] [ugc-section-title]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="500"
                  src={placeholder}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
                <p id={post.titleId} className="absolute bottom-5 left-5 right-5 font-serif text-2xl leading-tight text-pearl">{post.caption}</p>
              </article>
            ))}
          </div>
          <span id="ugc-section-title" className="sr-only">women wearing warm gold jewelry earrings necklaces huggies close up editorial</span>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-9 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne-dark">Shop by category</p>
          <h2 className="mt-3 font-serif text-5xl text-espresso sm:text-6xl">Your daily signature</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link to={`/shop?category=${category.label}`} key={category.id} className="group relative block aspect-[4/5] overflow-hidden bg-blush">
              <img
                alt={category.label}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                data-strk-img-id={category.imgId}
                data-strk-img={`[${category.descId}] [${category.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src={placeholder}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 translate-y-2 transition duration-300 group-hover:translate-y-0">
                <h3 id={category.titleId} className="font-serif text-4xl text-pearl">{category.label}</h3>
                <p id={category.descId} className="mt-2 max-w-xs text-sm leading-6 text-pearl/85 opacity-90 transition group-hover:opacity-100">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="story" className="bg-pearl py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="relative aspect-[4/5] overflow-hidden bg-blush lg:aspect-[5/4]">
            <img
              alt="Velmora jewelry atelier"
              className="h-full w-full object-cover"
              data-strk-img-id="brand-story-img-c81a20"
              data-strk-img="[story-body] [story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1000"
              src={placeholder}
            />
          </div>
          <div className="mx-auto max-w-xl text-espresso lg:pl-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne-dark">Our point of view</p>
            <h2 id="story-title" className="mt-4 font-serif text-5xl leading-tight text-espresso sm:text-6xl">Jewelry for the rituals between milestones.</h2>
            <p id="story-body" className="mt-6 text-base leading-8 text-mocha">Velmora was created for women who buy flowers for the table, wrap gifts with intention, and choose pieces that become part of their rhythm. We craft demi-fine gold jewelry with the polish of luxury and the ease of every day.</p>
            <a href="#" className="mt-8 inline-flex items-center gap-3 border-b border-champagne pb-2 text-xs font-bold uppercase tracking-[0.22em] text-espresso transition hover:text-champagne-dark">Our Story <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((review) => (
            <article key={review.name} className="border border-mist bg-pearl p-7 text-espresso">
              <div className="flex gap-1 text-champagne-dark" aria-label="5 star rating">
                {[...Array(5)].map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-6 font-serif text-2xl leading-8 text-espresso">“{review.text}”</p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-mocha">{review.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="journal" className="bg-blush px-4 py-14 text-espresso sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne-dark">Private list</p>
            <h2 className="mt-3 font-serif text-5xl leading-tight text-espresso sm:text-6xl">Join for 10% off your first order</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-mocha">Receive new drops, gifting edits, and care rituals from the Velmora studio.</p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input id="newsletter-email" type="email" placeholder="Email address" className="min-h-[3.25rem] flex-1 border border-mist bg-pearl px-5 py-4 text-sm text-espresso placeholder:text-mocha/70 outline-none transition focus:border-champagne" />
            <button type="submit" className="bg-espresso px-7 py-4 text-xs font-bold uppercase tracking-[0.22em] text-pearl transition hover:bg-champagne-dark">Join</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Home
