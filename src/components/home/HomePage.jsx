import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Truck, RotateCcw, Shield, Heart, Star } from 'lucide-react'
import { products, testimonials, ugcPosts, categories } from '@/data/products'
import { useCart } from '@/context/CartContext'

function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1600&h=900&fit=crop"
          alt="Velmora Fine Jewelry - Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <p className="text-sm tracking-[0.3em] uppercase mb-4 text-white/80">
          Demi-Fine Gold Jewelry
        </p>
        <h1 className="serif-heading text-5xl md:text-7xl lg:text-8xl font-light mb-6 leading-tight">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl mx-auto font-light">
          Timeless pieces designed for everyday elegance. 18K gold plated,
          hypoallergenic, made to last.
        </p>
        <Link to="/shop" className="btn-primary inline-block">
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}

function TrustBar() {
  const trustItems = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Shield, text: '18K Gold Plated' },
    { icon: Heart, text: 'Hypoallergenic' },
  ]

  return (
    <div className="bg-[#1a1a1a] text-white py-4">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm">
              <item.icon className="w-4 h-4 text-[#b8956a]" />
              <span className="tracking-wide">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addToCart } = useCart()

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[#f5f2ed] mb-4">
        <img
          src={product.images[0]}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        <img
          src={product.images[1]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        {/* Quick Add */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
            isHovered
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={(e) => {
              e.stopPropagation()
              addToCart(product, product.variants[0])
            }}
            className="w-full bg-white/95 backdrop-blur-sm text-[#1a1a1a] py-3 text-sm tracking-widest uppercase hover:bg-[#b8956a] hover:text-white transition-colors"
          >
            Add to Cart
          </button>
        </div>

        {product.bestseller && (
          <span className="absolute top-3 left-3 bg-[#b8956a] text-white text-xs px-2 py-1 tracking-wider uppercase">
            Bestseller
          </span>
        )}
      </div>

      <h3 className="product-name text-sm md:text-base mb-1">{product.name}</h3>
      <div className="flex items-center gap-1 mb-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-3 h-3 ${
              i < Math.floor(product.rating)
                ? 'text-[#b8956a] fill-[#b8956a]'
                : 'text-[#e8e2d9]'
            }`}
          />
        ))}
        <span className="text-xs text-[#6b6560] ml-1">({product.reviews})</span>
      </div>
      <p className="text-sm font-medium">${product.price}</p>
    </div>
  )
}

function BestsellersSection() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.3em] uppercase text-[#b8956a] mb-2">
            Most Loved
          </p>
          <h2 className="serif-heading text-4xl md:text-5xl">Bestsellers</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline inline-block">
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}

function UGCSection() {
  return (
    <section className="py-16 bg-[#f5f2ed]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 mb-8">
        <p className="text-sm tracking-[0.3em] uppercase text-[#b8956a] mb-2">
          @velmorajewelry
        </p>
        <h2 className="serif-heading text-4xl md:text-5xl">As Worn By You</h2>
      </div>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 lg:px-16 pb-4">
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="relative flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] overflow-hidden group"
          >
            <img
              src={post.image}
              alt={post.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 text-white serif-heading text-lg italic">
              {post.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

function CategorySection() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.3em] uppercase text-[#b8956a] mb-2">
            Browse By
          </p>
          <h2 className="serif-heading text-4xl md:text-5xl">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="relative aspect-[4/5] overflow-hidden group"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="serif-heading text-3xl md:text-4xl mb-2">
                    {cat.name}
                  </h3>
                  <span className="text-sm tracking-widest uppercase border-b border-white/60 pb-1 group-hover:border-white transition-colors">
                    Shop Now
                  </span>
                </div>
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
    <section className="section-padding bg-[#f5f2ed]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=1000&fit=crop"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:pl-8">
            <p className="text-sm tracking-[0.3em] uppercase text-[#b8956a] mb-4">
              Our Story
            </p>
            <h2 className="serif-heading text-4xl md:text-5xl mb-6">
              Where Elegance<br />Meets Everyday
            </h2>
            <div className="h-px bg-[#e8e2d9] w-16 mb-6" />
            <p className="text-[#6b6560] leading-relaxed mb-4">
              Velmora was born from a simple belief: that beautiful jewelry
              shouldn't require a luxury budget. Each piece is thoughtfully
              designed and crafted with 18K gold plating over premium brass,
              creating demi-fine jewelry that looks and feels extraordinary.
            </p>
            <p className="text-[#6b6560] leading-relaxed mb-8">
              From our studio to your jewelry box, we pour care into every
              detail — because the pieces you wear every day deserve to be
              treasured.
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

function TestimonialsSection() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.3em] uppercase text-[#b8956a] mb-2">
            Customer Love
          </p>
          <h2 className="serif-heading text-4xl md:text-5xl">What They Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="text-center p-8 border border-[#e8e2d9]"
            >
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-[#b8956a] fill-[#b8956a]"
                  />
                ))}
              </div>
              <p className="serif-heading text-xl italic text-[#1a1a1a] mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <p className="text-sm tracking-widest uppercase text-[#6b6560]">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function NewsletterSection() {
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
    <section className="bg-[#1a1a1a] text-white section-padding">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="serif-heading text-4xl md:text-5xl mb-4">
          Join for 10% Off
        </h2>
        <p className="text-white/60 mb-8">
          Subscribe to receive exclusive offers, early access to new collections,
          and styling inspiration.
        </p>

        {submitted ? (
          <div className="text-[#b8956a] serif-heading text-2xl">
            Welcome to Velmora ✨
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#b8956a] transition-colors"
              required
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

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UGCSection />
      <CategorySection />
      <BrandStorySection />
      <TestimonialsSection />
      <NewsletterSection />
    </main>
  )
}
