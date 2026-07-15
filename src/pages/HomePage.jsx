import { ArrowRight, Instagram, Mail, Star } from 'lucide-react'
import { categories, products, reels, testimonials } from '@/data/products'
import ProductCard from '@/components/store/ProductCard'
import { StockBackground, StockImage } from '@/components/store/StockImage'

export default function HomePage({ onAddToCart, onOpenProduct, onOpenCollection }) {
  return (
    <>
      <section id="home" className="relative min-h-screen overflow-hidden bg-velmora-cocoa text-velmora-ivory">
        <StockBackground
          id="hero-bg-velmora-gold-model-9f3"
          query="[hero-image-context] [hero-subhead] [hero-title]"
          ratio="16x9"
          width="1800"
          className="absolute inset-0 bg-cover bg-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-velmora-espresso/85 via-velmora-cocoa/45 to-velmora-espresso/10" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-16 pt-28 md:px-8">
          <p id="hero-image-context" className="sr-only">Warm lit close-up of gold jewelry on a model</p>
          <div className="max-w-3xl animate-fade-up">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.32em] text-velmora-champagne">Demi-fine essentials, direct to you</p>
            <h1 id="hero-title" className="font-serif text-5xl font-semibold leading-[0.95] tracking-tight text-velmora-ivory md:text-7xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subhead" className="mt-7 max-w-2xl text-base leading-8 text-velmora-ivory/85 md:text-lg">
              Warm gold, crystal accents, and keepsake silhouettes made for everyday rituals, meaningful gifts, and the quiet luxury of self-purchase.
            </p>
            <button
              type="button"
              onClick={onOpenCollection}
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-velmora-champagne px-8 py-4 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-espresso transition duration-300 hover:bg-velmora-ivory focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <section className="border-b border-velmora-taupe/25 bg-velmora-ivory text-velmora-espresso">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 py-4 text-center text-[0.68rem] font-bold uppercase tracking-[0.18em] md:grid-cols-4 md:px-8">
          {['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map((item) => (
            <p key={item} className="px-2 py-2 text-velmora-cocoa/85">{item}</p>
          ))}
        </div>
      </section>

      <section id="shop" className="bg-velmora-ivory px-5 py-16 text-velmora-espresso md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 border-b border-velmora-taupe/25 pb-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">Bestsellers</p>
              <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-velmora-espresso md:text-6xl">Golden pieces on repeat</h2>
            </div>
            <button
              type="button"
              onClick={onOpenCollection}
              className="w-fit rounded-full border border-velmora-espresso px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso transition hover:bg-velmora-espresso hover:text-velmora-ivory focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
            >
              View all jewelry
            </button>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onAdd={onAddToCart} onOpen={onOpenProduct} />
            ))}
          </div>
        </div>
      </section>

      <section id="journal" className="bg-velmora-cocoa py-16 text-velmora-ivory md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">As worn</p>
              <h2 className="mt-3 font-serif text-4xl text-velmora-ivory md:text-5xl">Velmora in motion</h2>
            </div>
            <Instagram className="hidden h-7 w-7 text-velmora-champagne md:block" />
          </div>
          <div className="flex gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {reels.map((reel) => (
              <article key={reel.id} className="group relative h-[26rem] w-56 flex-none overflow-hidden bg-velmora-espresso shadow-editorial md:h-[34rem] md:w-72">
                <p id={`reel-${reel.id}-caption`} className="sr-only">{reel.caption}</p>
                <p id={`reel-${reel.id}-context`} className="sr-only">{reel.context}</p>
                <StockImage
                  id={`reel-img-${reel.id}-c44`}
                  query={`[reel-${reel.id}-context] [reel-${reel.id}-caption]`}
                  ratio="9x16"
                  width="700"
                  alt={reel.caption}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/80 via-transparent to-transparent" />
                <p className="absolute bottom-5 left-5 right-5 font-serif text-2xl leading-tight text-velmora-ivory">{reel.caption}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="collections" className="bg-velmora-ivory px-5 py-16 text-velmora-espresso md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">Shop by category</p>
            <h2 className="mt-3 font-serif text-4xl text-velmora-espresso md:text-6xl">Find your golden signature</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={onOpenCollection}
                className="group relative aspect-[4/5] overflow-hidden bg-velmora-cocoa p-0 text-left focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
              >
                <p id={`category-${category.id}-title`} className="sr-only">{category.name}</p>
                <p id={`category-${category.id}-desc`} className="sr-only">{category.description}</p>
                <p id={`category-${category.id}-context`} className="sr-only">Editorial demi-fine gold jewelry category styling</p>
                <StockImage
                  id={`category-img-${category.id}-d19`}
                  query={`[category-${category.id}-desc] [category-${category.id}-title] [category-${category.id}-context]`}
                  ratio="4x3"
                  width="1000"
                  alt={category.name}
                  className="h-full w-full object-cover opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/75 via-velmora-espresso/5 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 translate-y-2 transition duration-300 group-hover:translate-y-0">
                  <h3 className="font-serif text-4xl text-velmora-ivory">{category.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-velmora-ivory/85 opacity-0 transition duration-300 group-hover:opacity-100">{category.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-velmora-porcelain px-5 py-16 text-velmora-espresso md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div className="relative overflow-hidden bg-velmora-cocoa">
            <p id="story-image-context" className="sr-only">warm atelier close up of demi fine gold jewelry, hands, velvet tray</p>
            <StockImage
              id="brand-story-atelier-f68"
              query="[story-image-context] [story-title]"
              ratio="3x2"
              width="1200"
              alt="Velmora jewelry atelier"
              className="aspect-[4/5] w-full object-cover md:aspect-[5/6]"
            />
          </div>
          <div className="md:pl-10">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">Our Story</p>
            <h2 id="story-title" className="mt-4 font-serif text-4xl leading-tight text-velmora-espresso md:text-6xl">
              Jewelry for the moments that become your signature.
            </h2>
            <p className="mt-6 text-base leading-8 text-velmora-cocoa/80">
              Velmora was created for women who want the glow of fine jewelry without the traditional markup. Every piece is designed in small, considered collections, balancing warm 18K gold plating, skin-friendly finishes, and timeless silhouettes.
            </p>
            <a href="#about" className="mt-8 inline-flex items-center gap-3 border-b border-velmora-gold pb-2 text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso hover:text-velmora-gold focus:outline-none focus:ring-2 focus:ring-velmora-champagne">
              Our Story
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-velmora-ivory px-5 py-16 text-velmora-espresso md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="border border-velmora-taupe/25 bg-velmora-porcelain p-8 text-velmora-espresso shadow-soft">
                <div className="mb-5 flex gap-1 text-velmora-champagne" aria-label="5 star review">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="font-serif text-2xl leading-9 text-velmora-espresso">“{testimonial.quote}”</p>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-velmora-gold">{testimonial.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-velmora-ivory px-5 pb-16 text-velmora-espresso md:px-8 md:pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-8 bg-velmora-clay px-6 py-10 text-velmora-espresso shadow-editorial md:grid-cols-[1fr_0.9fr] md:px-12 md:py-14">
          <div>
            <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-velmora-espresso"><Mail className="h-4 w-4" /> Private List</p>
            <h2 className="font-serif text-4xl text-velmora-espresso md:text-5xl">Join for 10% off your first order.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-espresso/80">Receive styling notes, early collection access, and gifting edits curated with Velmora restraint.</p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Email address"
              className="min-h-14 flex-1 border border-velmora-espresso/25 bg-velmora-porcelain px-5 text-sm text-velmora-espresso placeholder:text-velmora-cocoa/55 focus:outline-none focus:ring-2 focus:ring-velmora-espresso"
            />
            <button type="submit" className="min-h-14 rounded-full bg-velmora-espresso px-7 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ivory transition hover:bg-velmora-cocoa focus:outline-none focus:ring-2 focus:ring-velmora-espresso">
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
