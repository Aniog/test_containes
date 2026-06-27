import { ArrowRight, Instagram, Mail, Star } from 'lucide-react'
import JewelryArt from '@/components/common/VelmoraJewelView.jsx?velmora=202606270704'
import ProductCard from '@/components/product/VelmoraProductCard.jsx?velmora=202606270704'
import { categories, products, testimonials, ugcStories } from '@/data/products'

const HomePage = ({ onAddToCart, onSelectProduct, onNavigate }) => {
  return (
    <>
      <section className="velmora-hero-section relative min-h-[92svh] overflow-hidden bg-espresso text-ivory">
        <div className="absolute inset-y-0 right-0 hidden w-[58%] lg:block">
          <div className="velmora-hero-ring absolute left-[16%] top-[16%] h-[54%] w-[58%] rotate-[-9deg] rounded-[46%] border border-gold/40 shadow-[0_34px_90px_rgba(0,0,0,0.28)]" />
          <div className="velmora-hero-pearl absolute left-[48%] top-[30%] h-[38%] w-[27%] rotate-[12deg] rounded-full border border-gold/45 shadow-[0_24px_70px_rgba(0,0,0,0.26)]" />
          <div className="velmora-hero-arch absolute bottom-[10%] right-[10%] h-[42%] w-[58%] rounded-t-full backdrop-blur-[1px]" />
          <div className="absolute bottom-[18%] right-[18%] h-px w-[52%] rotate-[-18deg] bg-gold/50" />
          <div className="absolute bottom-[25%] right-[24%] h-px w-[38%] rotate-[-18deg] bg-ivory/35" />
          <div className="absolute right-[30%] top-[18%] h-3 w-3 rounded-full bg-ivory shadow-[0_0_34px_rgba(242,222,180,0.9)]" />
          <div className="absolute right-[22%] top-[45%] h-2 w-2 rounded-full bg-gold shadow-[0_0_28px_rgba(202,151,73,0.86)]" />
        </div>
        <div className="velmora-hero-veil absolute inset-0" />
        <div className="relative mx-auto flex min-h-[92svh] max-w-7xl items-center px-4 pb-16 pt-28 sm:px-6 lg:px-8">
          <div className="max-w-2xl animate-fade-up">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-gold">Demi-fine jewelry for everyday heirlooms</p>
            <h1 id="hero-title" className="font-serif text-6xl leading-[0.9] tracking-tight text-ivory sm:text-7xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-ivory/86 sm:text-lg">
              Warm gold essentials, sculptural huggies, and crystal-lit keepsakes designed for gifting, self-purchase, and every quiet ritual in between.
            </p>
            <button
              type="button"
              onClick={() => onNavigate('shop')}
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-gold px-7 py-4 text-xs font-bold uppercase tracking-[0.24em] text-espresso shadow-soft transition hover:-translate-y-0.5 hover:bg-goldDeep"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <section className="border-y border-champagne/30 bg-ivory text-espresso">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 py-4 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-cocoa sm:grid-cols-4 sm:px-6 lg:px-8">
          {['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map((item) => (
            <p key={item} className="px-2 py-2">{item}</p>
          ))}
        </div>
      </section>

      <section id="bestsellers" className="bg-ivory px-4 py-20 text-espresso sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 border-b border-champagne/35 pb-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cocoa">Bestsellers</p>
              <h2 className="mt-3 font-serif text-5xl leading-none sm:text-6xl">Most Treasured</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-taupe">
              The pieces our customers reach for first: polished huggies, luminous crystal accents, and gift-ready sets.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onAdd={onAddToCart} onSelect={onSelectProduct} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-espresso py-20 text-ivory lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-9 flex items-end justify-between gap-6">
            <div>
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-gold">
                <Instagram className="h-4 w-4" /> Worn by Velmora
              </p>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Quiet moments, caught in gold.</h2>
            </div>
            <p className="hidden max-w-sm text-sm leading-7 text-ivory/70 md:block">
              A reel-style look at the ear stacks, necklines, and gift rituals inspiring our community.
            </p>
          </div>
          <div className="no-scrollbar flex gap-4 overflow-x-auto pb-2 snap-x">
            {ugcStories.map((story) => {
              const titleId = `ugc-${story.id}-caption`
              const descId = `ugc-${story.id}-detail`
              return (
                <article key={story.id} className="relative aspect-[9/16] w-[72vw] max-w-[270px] shrink-0 overflow-hidden rounded-t-full rounded-b-[2rem] bg-cocoa snap-start sm:w-[260px]">
                  <JewelryArt
                    id={story.id}
                    label={story.caption}
                    variant="reel"
                    className="transition duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/88 via-espresso/36 to-transparent p-5 text-ivory">
                    <h3 id={titleId} className="font-serif text-2xl leading-none">{story.caption}</h3>
                    <p id={descId} className="mt-2 text-xs leading-5 text-ivory/78">{story.detail}</p>
                  </div>
                </article>
              )
            })}
          </div>
          <p id="ugc-section-title" className="sr-only">Gold jewelry worn on ear and neck in warm editorial video style</p>
        </div>
      </section>

      <section className="bg-pearl px-4 py-20 text-espresso sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cocoa">Shop by category</p>
            <h2 className="mt-3 font-serif text-5xl sm:text-6xl">Choose Your Ritual</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {categories.map((category) => {
              const titleId = `category-${category.id}-title`
              const descId = `category-${category.id}-copy`
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => onNavigate('shop')}
                  className="group relative aspect-[4/5] overflow-hidden bg-espresso text-left text-ivory"
                >
                  <JewelryArt
                    id={category.id}
                    label={category.label}
                    variant="category"
                    className="transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/86 via-espresso/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-7 p-7 transition duration-500 group-hover:translate-y-0">
                    <h3 id={titleId} className="font-serif text-4xl">{category.label}</h3>
                    <p id={descId} className="mt-3 max-w-sm text-sm leading-6 text-ivory/78 opacity-0 transition duration-500 group-hover:opacity-100">
                      {category.copy}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-ivory px-4 py-20 text-espresso sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative min-h-[420px] overflow-hidden rounded-t-full bg-stone lg:min-h-[620px]">
            <JewelryArt
              id="brand-story"
              label="Velmora jewelry atelier"
              variant="story"
            />
          </div>
          <div className="lg:pl-12">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cocoa">The Velmora standard</p>
            <h2 id="brand-story-title" className="mt-4 font-serif text-5xl leading-[0.95] sm:text-6xl">
              Fine-feeling jewelry without the traditional markup.
            </h2>
            <p id="brand-story-copy" className="mt-7 text-base leading-8 text-taupe">
              We design demi-fine pieces in warm 18K gold plating with skin-friendly finishes, considered proportions, and packaging that makes every delivery feel like a private appointment.
            </p>
            <button type="button" className="mt-8 inline-flex items-center gap-3 border-b border-gold pb-2 text-xs font-bold uppercase tracking-[0.24em] text-espresso transition hover:text-cocoa">
              Our Story <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-pearl px-4 py-20 text-espresso sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((review) => (
              <article key={review.name} className="border border-champagne/30 bg-ivory p-7 shadow-soft">
                <div className="flex gap-1 text-goldDeep" aria-label="5 star review">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-gold" />
                  ))}
                </div>
                <p className="mt-6 font-serif text-2xl leading-8 text-espresso">“{review.text}”</p>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-cocoa">{review.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-espresso px-4 py-16 text-ivory sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 border border-gold/25 p-6 sm:p-9 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-gold"><Mail className="h-4 w-4" /> Private list</p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Join for 10% off your first order.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-ivory/72">Receive early access to limited drops, care notes, and gifting edits from Velmora.</p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Email address"
              className="min-h-14 flex-1 border border-ivory/25 bg-ivory px-5 text-sm text-espresso placeholder:text-taupe outline-none transition focus:border-gold"
            />
            <button type="submit" className="min-h-14 bg-gold px-7 text-xs font-bold uppercase tracking-[0.24em] text-espresso transition hover:bg-goldDeep">
              Join
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default HomePage
