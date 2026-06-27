import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Star, ChevronRight } from "lucide-react"
import products, { categories, testimonials, ugcPosts } from "@/data/products"
import ProductCard from "@/components/ProductCard"
import { useCart } from "@/context/CartContext"

function TrustBar() {
  const items = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic",
  ]
  return (
    <div className="border-y border-border bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-x-8 gap-y-2 py-3 text-xs uppercase tracking-[0.1em] text-muted">
          {items.map((item) => (
            <span key={item} className="font-medium">{item}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1515562141589-47e730e5d3ca?w=1600&h=1000&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
          <div className="max-w-lg animate-fade-in-up">
            <p className="text-white/70 text-xs uppercase tracking-[0.2em] mb-4 font-medium">
              Velmora Fine Jewelry
            </p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-light leading-tight">
              Crafted to be
              <br />
              <span className="font-semibold">Treasured</span>
            </h1>
            <p className="text-white/70 text-sm md:text-base mt-5 leading-relaxed max-w-md">
              Demi-fine gold pieces designed for the woman who values quiet luxury. Each creation, an heirloom in the making.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 mt-8 bg-gold text-white uppercase tracking-widest text-xs font-medium px-8 py-3 hover:bg-gold-hover transition-colors"
            >
              Shop the Collection
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function BestsellersSection() {
  const bestsellers = products.slice(0, 5)

  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-light font-medium">Curated for you</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-3 font-light">
            Bestsellers
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-medium text-gold hover:text-gold-hover transition-colors"
          >
            View All
            <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function UGCSection() {
  return (
    <section className="py-16 md:py-20 bg-espresso text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium">As seen on</p>
            <h2 className="font-serif text-2xl md:text-3xl mt-2 font-light">
              Worn by you
            </h2>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-1 text-xs uppercase tracking-[0.12em] text-gold hover:text-gold-hover transition-colors">
            Follow @velmora
            <ChevronRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-4 px-6 md:px-8 pb-4" style={{ minWidth: "max-content" }}>
          {ugcPosts.map((post) => (
            <div
              key={post.id}
              className="relative flex-shrink-0 w-48 md:w-56 aspect-[9/16] overflow-hidden group cursor-pointer"
            >
              <img
                src={post.image}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-3 right-3 text-xs text-white/90 font-serif italic leading-relaxed">
                "{post.caption}"
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-6 md:hidden">
        <a href="#" className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.12em] text-gold">
          Follow @velmora
          <ChevronRight className="w-3 h-3" />
        </a>
      </div>
    </section>
  )
}

function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-light font-medium">Browse by</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-3 font-light">
            Categories
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-end p-6 md:p-8">
                <h3 className="font-serif text-2xl md:text-3xl text-white font-semibold tracking-[0.08em] uppercase">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function BrandStorySection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop"
              alt="Crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-md">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-light font-medium">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-3 font-light leading-tight">
              Designed in New York,
              <br />
              <span className="font-semibold">crafted for the world</span>
            </h2>
            <div className="w-12 h-0.5 bg-gold mt-6 mb-6" />
            <p className="text-sm text-muted leading-relaxed">
              Velmora was born from a simple belief: exceptional jewelry should not be a luxury reserved for rare occasions. We source the finest materials and work with master craftspeople to create demi-fine pieces that feel as beautiful as they look — at a price that honors both quality and accessibility.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-xs uppercase tracking-[0.15em] font-medium text-gold hover:text-gold-hover transition-colors"
            >
              Read Our Story
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-light font-medium">Kind words</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-3 font-light">
            Loved by thousands
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="p-8 bg-white border border-border/50">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-light text-gold-light" />
                ))}
              </div>
              <p className="text-sm text-muted leading-relaxed italic">"{t.text}"</p>
              <p className="text-xs uppercase tracking-[0.12em] font-medium mt-4">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function NewsletterSection() {
  return (
    <section className="bg-espresso-light text-white">
      <div className="max-w-3xl mx-auto px-6 md:px-8 py-16 md:py-24 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium">Stay connected</p>
        <h2 className="font-serif text-3xl md:text-4xl mt-3 font-light">
          Join for <span className="font-semibold">10% off</span> your first order
        </h2>
        <p className="text-sm text-white/60 mt-4 max-w-sm mx-auto">
          Be the first to know about new collections, exclusive previews, and member-only offers.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-8"
        >
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 px-5 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-gold transition-colors"
          />
          <button
            type="submit"
            className="bg-gold text-white uppercase tracking-widest text-xs font-medium px-8 py-3 hover:bg-gold-hover transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UGCSection />
      <CategoryTiles />
      <BrandStorySection />
      <TestimonialsSection />
      <NewsletterSection />
    </main>
  )
}