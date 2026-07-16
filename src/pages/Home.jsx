import { Link } from 'react-router-dom'
import { ArrowRight, Star, ChevronRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { products, categories, testimonials } from '@/data/products'
import { useCart } from '@/context/CartContext'

/* ============== Hero Section ============== */
function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=1600&q=85"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-content mx-auto px-4 md:px-8 w-full">
          <div className="max-w-lg">
            <p className="text-[#C9A96E] text-xs uppercase tracking-[0.2em] font-sans font-medium mb-4">
              New Collection
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-7xl text-white font-serif font-bold leading-tight">
              Crafted to be<br />Treasured
            </h1>
            <p className="mt-4 text-white/80 font-sans text-sm md:text-base max-w-md leading-relaxed">
              Demi-fine gold jewelry designed for life&apos;s everyday moments and extraordinary occasions alike.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/shop" className="btn-primary text-center">
                Shop the Collection
              </Link>
              <Link to="/collections" className="btn-outline border-white/40 text-white hover:bg-white hover:text-charcoal text-center">
                Explore
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  )
}

/* ============== Trust Bar ============== */
function TrustBar() {
  const items = [
    { label: 'Free Worldwide Shipping' },
    { label: '30-Day Returns' },
    { label: '18K Gold Plated' },
    { label: 'Hypoallergenic' },
  ]

  return (
    <div className="bg-charcoal text-cream">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-x-8 gap-y-3 py-4 text-xs uppercase tracking-[0.12em] font-sans">
          {items.map((item, i) => (
            <span key={i} className="text-cream/80 flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#C9A96E]" />
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ============== Bestsellers ============== */
function Bestsellers() {
  const { addItem } = useCart()

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[#C9A96E] text-xs uppercase tracking-[0.2em] font-sans font-medium mb-2">Bestsellers</p>
            <h2 className="section-heading">Most Loved Pieces</h2>
          </div>
          <Link to="/shop" className="hidden md:flex items-center gap-1 text-sm font-sans text-charcoal hover:text-[#C9A96E] transition-colors uppercase tracking-[0.12em]">
            View All <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} addItem={addItem} />
          ))}
        </div>

        <Link to="/shop" className="md:hidden flex items-center justify-center gap-1 mt-8 text-sm font-sans text-charcoal uppercase tracking-[0.12em]">
          View All Products <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  )
}

function ProductCard({ product, addItem }) {
  const [hovered, setHovered] = useState(false)
  const [imgLoaded, setImgLoaded] = useState(false)

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-warm-beige/20 rounded-sm">
          {!imgLoaded && (
            <div className="absolute inset-0 bg-warm-beige/10 animate-pulse" />
          )}
          <img
            src={hovered ? product.images[1] : product.images[0]}
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-500 ${
              hovered ? 'scale-105' : 'scale-100'
            } ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImgLoaded(true)}
          />
        </div>
      </Link>

      {/* Quick add button on hover */}
      <button
        onClick={() => addItem(product)}
        className={`absolute bottom-3 left-3 right-3 bg-charcoal/90 text-white text-xs font-sans uppercase tracking-[0.12em] py-2.5 transition-all duration-300 rounded-sm hover:bg-charcoal ${
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        Quick Add
      </button>

      <div className="mt-3 text-center">
        <h3 className="product-name">{product.name}</h3>
        <p className="text-sm font-sans text-warm-gray mt-1">${product.price}</p>
      </div>
    </div>
  )
}

/* ============== UGC Reel Row ============== */
function UGCReelRow() {
  const scrollRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  const ugcItems = [
    { id: 1, caption: 'Everyday elegance', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&q=80' },
    { id: 2, caption: 'Golden hour glow', image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=500&q=80' },
    { id: 3, caption: 'Minimal luxe', image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=500&q=80' },
    { id: 4, caption: 'Stack & style', image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=500&q=80' },
    { id: 5, caption: 'Gift worthy', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&q=80' },
    { id: 6, caption: 'Signature shine', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=500&q=80' },
    { id: 7, caption: 'Date night ready', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&q=80' },
    { id: 8, caption: 'Quiet confidence', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&q=80' },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-content mx-auto px-4 md:px-8 mb-10">
        <p className="text-[#C9A96E] text-xs uppercase tracking-[0.2em] font-sans font-medium mb-2">As Seen On You</p>
        <h2 className="section-heading">Styled by Our Community</h2>
      </div>

      <div
        ref={scrollRef}
        className="overflow-x-auto pb-4 hide-scrollbar"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex gap-4 px-4 md:px-8" style={{ width: 'max-content' }}>
          {ugcItems.map(item => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] rounded-sm overflow-hidden group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-white font-serif text-sm italic">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============== Shop by Category ============== */
function ShopByCategory() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-content mx-auto px-4 md:px-8 mb-10">
        <p className="text-[#C9A96E] text-xs uppercase tracking-[0.2em] font-sans font-medium mb-2">Shop by</p>
        <h2 className="section-heading">Category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-content mx-auto px-4 md:px-8">
        {categories.map(cat => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.id}`}
            className="group relative aspect-[4/5] overflow-hidden rounded-sm"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-serif text-2xl md:text-3xl tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {cat.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

/* ============== Brand Story ============== */
function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=85"
              alt="Craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-[#C9A96E] text-xs uppercase tracking-[0.2em] font-sans font-medium mb-3">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-6">
              Jewelry That Speaks<br />Without Words
            </h2>
            <p className="text-warm-gray font-sans text-sm md:text-base leading-relaxed mb-6">
              At Velmora, we believe fine jewelry should be accessible without compromise. Every piece is crafted with 18K gold plating, premium materials, and a dedication to detail that honors the artistry of traditional jewelry-making.
            </p>
            <p className="text-warm-gray font-sans text-sm md:text-base leading-relaxed mb-8">
              From our workshop to your doorstep, each design is thoughtfully created to become a cherished part of your story.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-sm font-sans text-charcoal hover:text-[#C9A96E] transition-colors uppercase tracking-[0.12em] font-medium">
              Read Our Story <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============== Testimonials ============== */
function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <p className="text-[#C9A96E] text-xs uppercase tracking-[0.2em] font-sans font-medium mb-2 text-center">Testimonials</p>
        <h2 className="section-heading text-center mb-12">Loved by Our Customers</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="text-center p-6">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4A84B] text-[#D4A84B]" />
                ))}
              </div>
              <p className="text-warm-gray font-sans text-sm leading-relaxed mb-4 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="font-serif text-sm text-charcoal">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============== Newsletter ============== */
function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="py-16 md:py-24 bg-[#F5F0E8]">
      <div className="max-w-content mx-auto px-4 md:px-8 text-center">
        <p className="text-[#C9A96E] text-xs uppercase tracking-[0.2em] font-sans font-medium mb-3">Join Us</p>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-3">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-warm-gray font-sans text-sm max-w-md mx-auto mb-8">
          Be the first to know about new collections, exclusive launches, and receive 10% off your first purchase.
        </p>

        {submitted ? (
          <p className="text-[#C9A96E] font-serif text-lg">Thank you for subscribing!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3 bg-white border border-warm-beige text-charcoal text-sm font-sans placeholder:text-warm-gray/50 focus:outline-none focus:ring-1 focus:ring-[#C9A96E]"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

/* ============== Main Homepage ============== */
export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <Bestsellers />
      <UGCReelRow />
      <ShopByCategory />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </>
  )
}