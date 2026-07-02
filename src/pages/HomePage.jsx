import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Truck, RotateCcw, Shield, Heart } from 'lucide-react'
import { products, testimonials, ugcPosts, categories } from '@/lib/products'
import { useCart } from '@/lib/cart-context'
import { Star } from 'lucide-react'

function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&h=900&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto animate-slide-up">
        <p className="text-sm tracking-[0.3em] uppercase mb-4 text-white/80">Demi-Fine Gold Jewelry</p>
        <h1 className="serif-heading text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto font-light">
          Everyday luxury pieces designed for the modern woman. 18K gold plated, hypoallergenic, and made to last.
        </p>
        <Link to="/shop" className="inline-block bg-[var(--color-velmora-accent)] text-white px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:bg-[var(--color-velmora-accent-hover)] hover:scale-105">
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}

function TrustBar() {
  const benefits = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Shield, text: '18K Gold Plated' },
    { icon: Heart, text: 'Hypoallergenic' },
  ]

  return (
    <div className="bg-[var(--color-velmora-dark)] text-white py-4">
      <div className="container-padding">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <benefit.icon className="w-4 h-4 text-[var(--color-velmora-gold)]" />
              <span className="tracking-wide">{benefit.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ProductCard({ product, onCartOpen }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.variants[0])
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
    onCartOpen?.()
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded mb-4 bg-[var(--color-velmora-bg-alt)]">
        <img
          src={isHovered ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button
            onClick={handleAddToCart}
            className="w-full bg-white/95 text-[var(--color-velmora-text)] py-3 text-sm tracking-widest uppercase hover:bg-[var(--color-velmora-accent)] hover:text-white transition-colors"
          >
            {added ? 'Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>
      <h3 className="product-name text-sm mb-1 group-hover:text-[var(--color-velmora-accent)] transition-colors">
        {product.name}
      </h3>
      <p className="text-xs text-[var(--color-velmora-text-muted)] mb-2">{product.description}</p>
      <p className="text-sm font-medium">${product.price}</p>
    </Link>
  )
}

function Bestsellers({ onCartOpen }) {
  return (
    <section className="section-padding bg-[var(--color-velmora-bg)]">
      <div className="container-padding">
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.2em] uppercase text-[var(--color-velmora-text-muted)] mb-2">Most Loved</p>
          <h2 className="serif-heading text-4xl md:text-5xl">Bestsellers</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onCartOpen={onCartOpen} />
          ))}
        </div>
      </div>
    </section>
  )
}

function UGCRow() {
  return (
    <section className="py-16 bg-[var(--color-velmora-bg-alt)] overflow-hidden">
      <div className="container-padding mb-8">
        <p className="text-sm tracking-[0.2em] uppercase text-[var(--color-velmora-text-muted)] text-center mb-2">@velmorajewelry</p>
        <h2 className="serif-heading text-3xl md:text-4xl text-center">As Worn By You</h2>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-4 px-4 md:px-8 lg:px-16 scrollbar-hide snap-x snap-mandatory">
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="flex-shrink-0 w-48 md:w-56 snap-start"
          >
            <div className="relative aspect-[9/16] rounded overflow-hidden">
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-white serif-heading text-lg italic">
                {post.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function CategoryTiles() {
  return (
    <section className="section-padding bg-[var(--color-velmora-bg)]">
      <div className="container-padding">
        <div className="text-center mb-12">
          <h2 className="serif-heading text-4xl md:text-5xl">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden rounded"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white serif-heading text-3xl md:text-4xl tracking-wider group-hover:scale-105 transition-transform duration-300">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function BrandStory() {
  return (
    <section className="section-padding bg-[var(--color-velmora-cream)]">
      <div className="container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="aspect-[4/5] rounded overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&h=1000&fit=crop"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:pl-8">
            <p className="text-sm tracking-[0.2em] uppercase text-[var(--color-velmora-text-muted)] mb-4">Our Story</p>
            <h2 className="serif-heading text-4xl md:text-5xl mb-6">Where Elegance Meets Everyday</h2>
            <p className="text-[var(--color-velmora-text-muted)] leading-relaxed mb-6">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't be reserved for special occasions. 
              We create demi-fine pieces that transition seamlessly from morning meetings to evening gatherings — 
              crafted with care, priced with intention.
            </p>
            <p className="text-[var(--color-velmora-text-muted)] leading-relaxed mb-8">
              Each piece is 18K gold plated over recycled brass, hypoallergenic, and designed to be worn and loved every day.
            </p>
            <Link to="/about" className="btn-outline inline-block">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="section-padding bg-[var(--color-velmora-bg)]">
      <div className="container-padding">
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.2em] uppercase text-[var(--color-velmora-text-muted)] mb-2">Reviews</p>
          <h2 className="serif-heading text-4xl md:text-5xl">What Our Customers Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="text-center p-8 border border-[var(--color-velmora-border)] rounded"
            >
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[var(--color-velmora-gold)] text-[var(--color-velmora-gold)]" />
                ))}
              </div>
              <p className="serif-heading text-xl italic mb-6 leading-relaxed">"{testimonial.text}"</p>
              <p className="text-sm text-[var(--color-velmora-text-muted)]">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

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
    <section className="py-16 bg-[var(--color-velmora-dark)] text-white">
      <div className="container-padding text-center max-w-2xl mx-auto">
        <h2 className="serif-heading text-4xl md:text-5xl mb-4">Join for 10% Off</h2>
        <p className="text-white/70 mb-8">
          Be the first to know about new collections, exclusive offers, and styling tips.
        </p>
        {submitted ? (
          <p className="serif-heading text-2xl text-[var(--color-velmora-gold)]">
            Welcome to Velmora! Check your inbox for your discount.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 rounded focus:outline-none focus:border-[var(--color-velmora-gold)]"
              required
            />
            <button type="submit" className="bg-[var(--color-velmora-accent)] text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-[var(--color-velmora-accent-hover)] transition-colors rounded">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default function HomePage({ onCartOpen }) {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <Bestsellers onCartOpen={onCartOpen} />
      <UGCRow />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  )
}
