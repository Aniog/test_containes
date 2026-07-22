import { Link } from 'react-router-dom'
import { ArrowRight, Check, Star } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import ProductImage from '@/components/ProductImage'
import SectionHeading from '@/components/SectionHeading'

const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

const ugcCards = [
  { id: 'golden-hour-stack', caption: 'Golden-hour ear stacks', detail: 'warm gold huggie earrings worn on ear model' },
  { id: 'neckline-layering', caption: 'Soft neckline layering', detail: 'delicate gold necklace on model editorial close up' },
  { id: 'gift-unboxing', caption: 'The gift she keeps', detail: 'luxury jewelry gift box gold necklace earrings' },
  { id: 'dinner-light', caption: 'Dinner light shimmer', detail: 'gold drop earrings worn by woman evening light' },
  { id: 'everyday-cuff', caption: 'The everyday cuff', detail: 'gold ear cuff crystal accent close up' },
]

const categories = [
  { id: 'earrings', title: 'Earrings', desc: 'Face-framing pieces with a quiet glint.' },
  { id: 'necklaces', title: 'Necklaces', desc: 'Fine chains and pendants for daily layering.' },
  { id: 'huggies', title: 'Huggies', desc: 'Small hoops with a sculptural, polished feel.' },
]

const testimonials = [
  { name: 'Maya R.', text: 'The huggies look far more expensive than they are. I wear them every single day.' },
  { name: 'Elise K.', text: 'Bought the necklace as a gift and kept borrowing it before wrapping. So luminous.' },
  { name: 'Nora S.', text: 'Beautiful packaging, no irritation, and the gold tone is warm without being yellow.' },
]

function Home() {
  const heroVisualLabel = 'Warm editorial close-up of gold jewelry on a model'

  return (
    <main className="bg-velmora-ivory text-velmora-umber">
      <section className="relative min-h-[92vh] overflow-hidden bg-velmora-obsidian text-velmora-ivory">
        <div className="absolute inset-0 opacity-80">
          <ProductImage
            alt={heroVisualLabel}
            imgId="velmora-hero-controlled"
            query="warm hero model gold jewelry"
            className="h-full w-full"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-obsidian/35 via-velmora-obsidian/25 to-velmora-obsidian/70" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-5 pb-16 pt-32 md:px-8 md:pb-24">
          <div className="max-w-3xl animate-velmora-fade-up">
            <p className="mb-5 text-xs font-semibold uppercase tracking-luxe text-velmora-champagne">Demi-fine gold jewelry</p>
            <h1 id="hero-title" className="font-serif text-6xl font-medium leading-[0.92] text-velmora-ivory md:text-8xl lg:text-9xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="mt-7 max-w-xl text-base leading-8 text-velmora-pearl md:text-xl md:leading-9">
              Warm, wearable heirlooms for everyday rituals, self-gifting, and moments worth remembering.
            </p>
            <span id="hero-image-context" className="sr-only">warm lit close up gold jewelry worn on model editorial quiet luxury</span>
            <Link
              to="/shop"
              className="mt-9 inline-flex items-center gap-3 bg-velmora-champagne px-7 py-4 text-sm font-bold uppercase tracking-luxe text-velmora-obsidian shadow-glow transition duration-300 hover:bg-velmora-ivory hover:text-velmora-obsidian"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-velmora-linen bg-velmora-pearl text-velmora-umber">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-velmora-linen px-5 text-center md:grid-cols-4 md:divide-x md:divide-y-0 md:px-8">
          {trustItems.map((item) => (
            <div key={item} className="flex items-center justify-center gap-2 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-velmora-cocoa">
              <Check className="h-4 w-4 text-velmora-antique" />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="bestsellers" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="Bestsellers"
          title="The pieces everyone asks about"
          body="Five refined demi-fine designs made to catch light softly, layer effortlessly, and gift beautifully."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} scope="home-bestseller" />
          ))}
        </div>
      </section>

      <section className="overflow-hidden border-y border-velmora-linen bg-velmora-obsidian py-16 text-velmora-ivory md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionHeading
              align="left"
              eyebrow="Worn by you"
              title="Quiet moments, caught on camera"
              body="A reel-inspired strip of golden-hour styling, intimate details, and pieces in motion."
            />
            <p className="text-sm uppercase tracking-luxe text-velmora-champagne">Swipe to browse</p>
          </div>
          <div className="no-scrollbar mt-10 flex gap-4 overflow-x-auto pb-2">
            {ugcCards.map((card) => {
              const captionId = `ugc-${card.id}-caption`
              const detailId = `ugc-${card.id}-detail`
              return (
                <article key={card.id} className="group relative h-[420px] w-[236px] flex-none overflow-hidden bg-velmora-cocoa md:h-[520px] md:w-[292px]">
                  <ProductImage
                    alt={card.caption}
                    imgId={`ugc-${card.id}-img`}
                    query={`[${detailId}] [${captionId}]`}
                    ratio="9x16"
                    width="520"
                    className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian/80 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p id={captionId} className="font-serif text-2xl text-velmora-ivory">{card.caption}</p>
                    <p id={detailId} className="sr-only">{card.detail}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading eyebrow="Shop by category" title="Start with the silhouette" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {categories.map((category) => {
            const titleId = `category-${category.id}-title`
            const descId = `category-${category.id}-desc`
            return (
              <Link key={category.id} to={`/shop?category=${category.title}`} className="group relative min-h-[420px] overflow-hidden bg-velmora-obsidian text-velmora-ivory">
                <ProductImage
                  alt={`${category.title} jewelry category`}
                  imgId={`category-${category.id}-img`}
                  query={`[${descId}] [${titleId}]`}
                  ratio="3x4"
                  width="800"
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian/85 via-velmora-obsidian/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 translate-y-6 p-7 transition duration-300 group-hover:translate-y-0">
                  <h3 id={titleId} className="font-serif text-5xl text-velmora-ivory">{category.title}</h3>
                  <p id={descId} className="mt-3 max-w-xs text-sm leading-7 text-velmora-pearl opacity-0 transition duration-300 group-hover:opacity-100">{category.desc}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section id="story" className="border-y border-velmora-linen bg-velmora-pearl">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div className="relative min-h-[440px] overflow-hidden bg-velmora-cocoa">
            <ProductImage
              alt="Velmora jewelry atelier story"
              imgId="story-atelier-img-f44b91"
              query="[story-body] [story-title]"
              ratio="3x4"
              width="900"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex items-center">
            <div className="max-w-xl md:pl-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-luxe text-velmora-antique">Our Story</p>
              <h2 id="story-title" className="font-serif text-5xl font-medium leading-tight text-velmora-umber md:text-7xl">
                Luxury should feel close, not out of reach.
              </h2>
              <p id="story-body" className="mt-7 text-base leading-8 text-velmora-cocoa md:text-lg md:leading-9">
                Velmora creates demi-fine gold jewelry with the intimacy of heirloom pieces and the ease of everyday wear. Each design is edited for warmth, comfort, and quiet radiance.
              </p>
              <Link to="/#story" className="mt-8 inline-flex items-center gap-3 border-b border-velmora-antique pb-2 text-sm font-bold uppercase tracking-luxe text-velmora-antique transition hover:text-velmora-obsidian">
                Our Story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading eyebrow="Reviews" title="Notes from the jewelry box" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((review) => (
            <article key={review.name} className="border border-velmora-linen bg-velmora-ivory p-7 text-velmora-umber shadow-sm">
              <div className="flex gap-1 text-velmora-champagne" aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-6 font-serif text-2xl leading-8 text-velmora-umber">“{review.text}”</p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-luxe text-velmora-antique">{review.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="journal" className="px-5 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto max-w-7xl bg-velmora-champagne px-6 py-12 text-velmora-obsidian shadow-glow md:px-14 md:py-16">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-luxe">First access</p>
              <h2 className="mt-3 font-serif text-5xl font-medium leading-tight md:text-7xl">Join for 10% off your first order</h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-velmora-obsidian/80">Receive styling notes, gifting edits, and early access to limited drops.</p>
            </div>
            <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
              <label className="sr-only" htmlFor="newsletter-email">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Email address"
                className="min-h-14 flex-1 border border-velmora-obsidian/25 bg-velmora-ivory px-5 text-sm text-velmora-umber placeholder:text-velmora-cocoa focus:border-velmora-obsidian"
              />
              <button className="min-h-14 bg-velmora-obsidian px-7 text-sm font-bold uppercase tracking-luxe text-velmora-ivory transition hover:bg-velmora-umber">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
