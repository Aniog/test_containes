import { useRef } from "react"
import { Link } from "react-router-dom"
import { Star, ArrowRight, Truck, RotateCcw, Gem, ShieldCheck, Instagram } from "lucide-react"
import { products, categories, reels, testimonials } from "@/data/products"
import ProductCard from "@/components/ProductCard"
import { StrkImage, StrkBg, useStrkImages, PLACEHOLDER } from "@/components/ui/StrkImage"

const trustItems = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
]

export default function Home() {
  const containerRef = useRef(null)
  useStrkImages(containerRef, [])

  return (
    <div ref={containerRef}>
      {/* 1. Hero */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <StrkBg
          bgId="hero-bg-velmora-1a2b3c"
          query="[hero-subtitle] [hero-title]"
          ratio="9x16"
          width={1600}
          className="absolute inset-0 w-full h-full bg-ink-800"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/40 via-ink-900/20 to-ink-900/60" />

        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <h1
            id="hero-title"
            className="font-serif text-cream-50 text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] max-w-4xl animate-fade-up"
          >
            Crafted to be
            <br />
            <span className="italic">Treasured</span>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-cream-100/90 text-base md:text-lg max-w-xl leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            Demi-fine gold jewelry, designed in studio and made to be worn every
            single day.
          </p>
          <Link
            to="/shop"
            className="mt-9 inline-block bg-gold-500 text-cream-50 text-xs uppercase tracking-widest2 font-medium px-10 py-4 hover:bg-gold-600 transition-colors animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Shop the Collection
          </Link>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream-50/60 text-[10px] uppercase tracking-widest3 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          Scroll
        </div>
      </section>

      {/* 3. Trust bar */}
      <section className="bg-ink-900 text-cream-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-ink-700/60">
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 py-5 px-3 text-center"
              >
                <item.icon className="w-4 h-4 text-gold-400 shrink-0" strokeWidth={1.5} />
                <span className="text-[11px] md:text-xs uppercase tracking-widest2 text-cream-100/90">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bestsellers */}
      <section className="py-20 md:py-28 bg-cream-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-xs uppercase tracking-widest3 text-gold-600 mb-3">
              Most Loved
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink-900 font-light">
              Bestsellers
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10 md:gap-x-6">
            {products.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
          <div className="text-center mt-14">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest2 font-medium text-ink-800 border-b border-gold-500 pb-1 hover:text-gold-600 transition-colors"
            >
              View All Products
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Reel-style UGC row */}
      <section className="py-20 md:py-28 bg-ink-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 mb-10">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest3 text-gold-400 mb-3">
                #VelmoraMoments
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-cream-50 font-light">
                Worn by You
              </h2>
            </div>
            <a
              href="#"
              className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-widest2 text-cream-100/80 hover:text-gold-400 transition-colors"
            >
              <Instagram className="w-4 h-4" />
              @velmora
            </a>
          </div>
        </div>
        <div className="no-scrollbar overflow-x-auto pb-4">
          <div className="flex gap-4 md:gap-6 px-6 md:px-10">
            {reels.map((reel) => (
              <div
                key={reel.id}
                className="relative shrink-0 w-[220px] md:w-[260px] aspect-[9/16] overflow-hidden bg-ink-800 group"
              >
                <StrkImage
                  imgId={reel.imgId}
                  query={`[reel-cap-${reel.id}] gold jewelry worn`}
                  ratio="9x16"
                  width={520}
                  alt={reel.caption}
                  src={PLACEHOLDER}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent" />
                <p
                  id={`reel-cap-${reel.id}`}
                  className="absolute bottom-5 left-5 right-5 font-serif text-cream-50 text-lg italic leading-snug"
                >
                  {reel.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Shop by category */}
      <section className="py-20 md:py-28 bg-cream-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-xs uppercase tracking-widest3 text-gold-600 mb-3">
              Explore
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink-900 font-light">
              Shop by Category
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.name}`}
                className="group relative overflow-hidden aspect-[4/5] bg-cream-200"
              >
                <StrkImage
                  imgId={cat.imgId}
                  query={`[cat-desc-${cat.id}] [cat-name-${cat.id}]`}
                  ratio="4x5"
                  width={700}
                  alt={cat.name}
                  src={PLACEHOLDER}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink-900/30 group-hover:bg-ink-900/45 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                  <h3
                    id={`cat-name-${cat.id}`}
                    className="font-serif text-3xl md:text-4xl text-cream-50 uppercase tracking-widest2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
                  >
                    {cat.name}
                  </h3>
                  <p
                    id={`cat-desc-${cat.id}`}
                    className="text-xs text-cream-100/0 group-hover:text-cream-100/90 mt-2 transition-all duration-500 uppercase tracking-widest2"
                  >
                    {cat.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Brand story split */}
      <section className="py-20 md:py-28 bg-cream-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="relative aspect-[4/5] overflow-hidden bg-cream-200">
              <StrkImage
                imgId="story-img-velmora-4d5e6f"
                query="[story-text] [story-heading]"
                ratio="4x5"
                width={800}
                alt="Velmora jewelry craftsmanship"
                src={PLACEHOLDER}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="md:pl-6">
              <p className="text-xs uppercase tracking-widest3 text-gold-600 mb-4">
                Our Story
              </p>
              <h2
                id="story-heading"
                className="font-serif text-4xl md:text-5xl text-ink-900 font-light leading-tight"
              >
                Jewelry made to be lived in.
              </h2>
              <p id="story-text" className="mt-6 text-ink-600 leading-relaxed">
                Velmora began with a simple belief: that fine craftsmanship
                shouldn't be reserved for special occasions. We design
                demi-fine gold jewelry in our studio — pieces with the weight,
                warmth, and detail of heirlooms, made to be worn every day.
              </p>
              <p className="mt-4 text-ink-600 leading-relaxed">
                Every piece is 18K gold plated over sterling silver,
                hypoallergenic, and finished by hand. No middlemen, no
                markups — just considered design, direct to you.
              </p>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest2 font-medium text-ink-800 border-b border-gold-500 pb-1 hover:text-gold-600 transition-colors"
              >
                Read Our Story
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="py-20 md:py-28 bg-cream-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-xs uppercase tracking-widest3 text-gold-600 mb-3">
              Loved by Thousands
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink-900 font-light">
              What They Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="text-center px-4 md:px-6"
              >
                <div className="flex items-center justify-center gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <blockquote className="font-serif text-xl md:text-2xl text-ink-800 italic leading-relaxed">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-5 text-xs uppercase tracking-widest2 text-ink-500">
                  {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Newsletter */}
      <section className="py-20 md:py-28 bg-ink-900">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <p className="text-xs uppercase tracking-widest3 text-gold-400 mb-4">
            Join the List
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream-50 font-light leading-tight">
            Enjoy 10% off your first order
          </h2>
          <p className="mt-4 text-cream-100/80 leading-relaxed">
            Be the first to know about new collections, private sales, and
            styling notes. Plus, a welcome gift just for you.
          </p>
          <form
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-ink-600 text-cream-50 placeholder-ink-400 px-4 py-3.5 text-sm focus:outline-none focus:border-gold-400 transition-colors"
            />
            <button
              type="submit"
              className="bg-gold-500 text-cream-50 text-xs uppercase tracking-widest2 font-medium px-8 py-3.5 hover:bg-gold-600 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-[11px] text-ink-400">
            By subscribing you agree to our Privacy Policy.
          </p>
        </div>
      </section>
    </div>
  )
}
