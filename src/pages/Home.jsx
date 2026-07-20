import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, ChevronLeft, ChevronRight, Truck, RotateCcw, Shield, Sparkles } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Shield, label: '18K Gold Plated' },
  { icon: Sparkles, label: 'Hypoallergenic' },
]

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=750&fit=crop',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=750&fit=crop',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    image: 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=600&h=750&fit=crop',
  },
]

const ugcItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=700&fit=crop',
    caption: 'Golden hour glow',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&h=700&fit=crop',
    caption: 'Stack & shine',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=700&fit=crop',
    caption: 'Effortless elegance',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=700&fit=crop',
    caption: 'Everyday luxury',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=400&h=700&fit=crop',
    caption: 'Self-care sparkle',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=700&fit=crop',
    caption: 'Gift of gold',
  },
]

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is incredible for the price. My Golden Sphere Huggies have become my everyday go-to. So many compliments!',
  },
  {
    id: 2,
    name: 'Jessica L.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a gift for my sister. The packaging was beautiful and she absolutely loved it.',
  },
  {
    id: 3,
    name: 'Amanda K.',
    rating: 5,
    text: 'Finally found jewelry that looks expensive without the price tag. The Amber Lace Earrings are stunning in person.',
  },
]

export default function Home() {
  const ugcScrollRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const scrollUgc = (direction) => {
    if (ugcScrollRef.current) {
      const scrollAmount = 280
      ugcScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <main ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[85vh] md:h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <div
            data-strk-bg-id="hero-bg-velmora-a1b2c3"
            data-strk-bg="luxury gold jewelry close-up warm lighting editorial photography"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
            className="absolute inset-0 bg-cover bg-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/70 via-charcoal-900/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto section-padding w-full">
          <div className="max-w-xl">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold-300 mb-4 animate-fade-in">
              Demi-Fine Jewelry
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-display text-ivory-50 mb-6 animate-fade-up text-balance">
              Crafted to be Treasured
            </h1>
            <p className="text-ivory-100/80 text-sm md:text-base leading-relaxed mb-8 max-w-md animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Premium 18K gold-plated jewelry designed for the modern woman. Everyday luxury that lasts, at prices that make sense.
            </p>
            <Link
              to="/shop"
              className="btn-accent inline-flex items-center gap-2 animate-fade-up"
              style={{ animationDelay: '0.4s' }}
            >
              Shop the Collection
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-ivory-50 border-y border-charcoal-100">
        <div className="max-w-[1400px] mx-auto section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-5">
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center justify-center gap-2.5">
                <item.icon className="w-4 h-4 text-gold-500" />
                <span className="text-[11px] md:text-xs text-charcoal-500 tracking-wide">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto section-padding">
          {/* Section header */}
          <div className="text-center mb-12 md:mb-16">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold-500 mb-3">
              Curated Selection
            </p>
            <h2 className="font-serif text-3xl md:text-heading-lg text-charcoal-800">
              Our Bestsellers
            </h2>
            <div className="w-12 h-px bg-gold-400 mx-auto mt-5" />
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* View all link */}
          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="btn-outline text-xs inline-flex items-center gap-2"
            >
              View All Jewelry
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* UGC Reel Strip */}
      <section className="py-12 md:py-16 bg-charcoal-800" id="journal">
        <div className="max-w-[1400px] mx-auto">
          <div className="section-padding mb-8 flex items-end justify-between">
            <div>
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold-400 mb-2">
                @VelmoraJewelry
              </p>
              <h2 className="font-serif text-2xl md:text-heading-md text-ivory-50">
                Styled by You
              </h2>
            </div>
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => scrollUgc('left')}
                className="w-10 h-10 border border-charcoal-600 flex items-center justify-center text-ivory-200/60 hover:border-gold-500 hover:text-gold-400 transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollUgc('right')}
                className="w-10 h-10 border border-charcoal-600 flex items-center justify-center text-ivory-200/60 hover:border-gold-500 hover:text-gold-400 transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Horizontal scroll */}
          <div
            ref={ugcScrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide section-padding pb-4"
          >
            {ugcItems.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-48 md:w-56 aspect-[9/16] relative overflow-hidden group"
              >
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 font-serif text-sm text-ivory-50 italic">
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto section-padding">
          <div className="text-center mb-12">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold-500 mb-3">
              Explore
            </p>
            <h2 className="font-serif text-3xl md:text-heading-lg text-charcoal-800">
              Shop by Category
            </h2>
            <div className="w-12 h-px bg-gold-400 mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group relative aspect-[3/4] md:aspect-[4/5] overflow-hidden"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal-900/20 group-hover:bg-charcoal-900/40 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-end p-6 md:p-8">
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl text-ivory-50 mb-2">
                      {category.name}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-xs text-ivory-100 tracking-[0.15em] uppercase opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      Shop Now
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 md:py-24 bg-ivory-100" id="about">
        <div className="max-w-[1400px] mx-auto section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                data-strk-img-id="brand-story-img-x7y8z9"
                data-strk-img="artisan hands crafting gold jewelry workshop warm lighting"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Artisan hands crafting gold jewelry"
                className="w-full h-full object-cover bg-charcoal-100"
              />
            </div>

            {/* Text */}
            <div className="lg:pl-8">
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold-500 mb-4">
                Our Story
              </p>
              <h2 className="font-serif text-3xl md:text-heading-lg text-charcoal-800 mb-6 text-balance">
                Jewelry That Tells Your Story
              </h2>
              <div className="w-12 h-px bg-gold-400 mb-6" />
              <p className="text-charcoal-500 leading-relaxed mb-4">
                Velmora was born from a simple belief: every woman deserves jewelry that feels
                special without the luxury markup. We work directly with skilled artisans to
                create demi-fine pieces using 18K gold plating over premium base metals.
              </p>
              <p className="text-charcoal-500 leading-relaxed mb-8">
                Each piece is designed to be worn every day — through coffee runs, board meetings,
                and dinner dates. Because treasured jewelry shouldn&apos;t live in a box.
              </p>
              <Link
                to="/shop"
                className="btn-outline text-xs inline-flex items-center gap-2"
              >
                Discover More
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto section-padding">
          <div className="text-center mb-12 md:mb-16">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold-500 mb-3">
              Loved by Thousands
            </p>
            <h2 className="font-serif text-3xl md:text-heading-lg text-charcoal-800">
              What Our Customers Say
            </h2>
            <div className="w-12 h-px bg-gold-400 mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-ivory-50 border border-charcoal-100 p-8 text-center"
              >
                {/* Stars */}
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-gold-400 text-gold-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-charcoal-600 leading-relaxed mb-6 text-sm">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Name */}
                <p className="font-sans text-xs tracking-[0.15em] uppercase text-charcoal-400">
                  — {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-20 bg-gold-500">
        <div className="max-w-[1400px] mx-auto section-padding text-center">
          <h2 className="font-serif text-2xl md:text-heading-md text-white mb-3">
            Join for 10% Off Your First Order
          </h2>
          <p className="text-white/80 text-sm mb-8 max-w-md mx-auto">
            Subscribe to receive exclusive offers, early access to new collections, and styling inspiration.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3.5 bg-white/15 border border-white/30 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-white/60 transition-colors"
            />
            <button className="px-8 py-3.5 bg-charcoal-800 text-ivory-50 text-xs font-medium tracking-[0.15em] uppercase hover:bg-charcoal-900 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
