import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Truck, RefreshCw, Shield, Sparkles } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { products, testimonials, ugcPosts } from '../data/products'

export default function HomePage() {
  const [isVisible, setIsVisible] = useState({})
  const heroRef = useRef(null)
  const { addToCart } = useCart()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-velmora-ivory">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
        id="hero"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1617038260805-41e27b2f7b4d?w=1920&h=1080&fit=crop"
            alt="Gold jewelry on model"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl mb-6 animate-fade-in">
            Crafted to be<br />Treasured
          </h1>
          <p className="font-sans text-lg md:text-xl mb-8 opacity-90">
            Demi-fine jewelry for life's most cherished moments
          </p>
          <Link
            to="/shop"
            className="inline-block bg-white text-velmora-charcoal px-10 py-4 font-sans text-sm uppercase tracking-wider hover:bg-velmora-gold hover:text-white transition-all duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-velmora-cream py-4 border-y border-velmora-taupe">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[
              { icon: Truck, text: 'Free Worldwide Shipping' },
              { icon: RefreshCw, text: '30-Day Returns' },
              { icon: Sparkles, text: '18K Gold Plated' },
              { icon: Shield, text: 'Hypoallergenic' },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <item.icon className="w-4 h-4 text-velmora-gold" />
                <span className="font-sans text-xs uppercase tracking-wider text-velmora-charcoal">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div
          id="bestsellers"
          data-animate
          className={`transition-all duration-700 ${isVisible['bestsellers'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-4">Bestsellers</h2>
          <p className="font-sans text-sm text-center text-gray-500 mb-12 uppercase tracking-wider">
            Our most loved pieces
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              id={`product-${product.id}`}
              data-animate
              className={`group cursor-pointer transition-all duration-700 delay-${index * 100} ${
                isVisible[`product-${product.id}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <Link to={`/product/${product.id}`}>
                <div className="relative overflow-hidden bg-velmora-cream aspect-square mb-4">
                  <img
                    src={`https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop`}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                  />

                  {/* Quick Add Button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      addToCart(product)
                    }}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-velmora-charcoal px-6 py-2 font-sans text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-velmora-charcoal hover:text-white"
                  >
                    Add to Cart
                  </button>
                </div>

                <h3 className="font-serif text-sm uppercase tracking-wider mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="font-sans text-xs text-gray-500">({product.reviews})</span>
                </div>
                <p className="font-serif text-lg">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* UGC Reel-style Row */}
      <section className="py-20 bg-velmora-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-12">Worn by You</h2>

          <div className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory hide-scrollbar">
            {ugcPosts.map((post) => (
              <div
                key={post.id}
                className="flex-shrink-0 w-64 md:w-72 snap-center"
              >
                <div className="relative aspect-[9/16] bg-velmora-cream overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-1516975080664-ed2bb8fa9c65?w=400&h=711&fit=crop`}
                    alt={post.caption}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="font-serif text-white text-sm italic">"{post.caption}"</p>
                    <p className="font-sans text-xs text-white/80 mt-1">{post.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-12">Shop by Category</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop' },
            { name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop' },
            { name: 'Huggies', image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=800&fit=crop' },
          ].map((category) => (
            <Link
              key={category.name}
              to="/shop"
              className="relative group overflow-hidden aspect-[4/5] bg-velmora-cream"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-3xl text-white uppercase tracking-widest">
                  {category.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square bg-velmora-cream overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&h=800&fit=crop"
                alt="Velmora jewelry craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="font-serif text-4xl md:text-5xl mb-6">Our Story</h2>
              <p className="font-sans text-base text-gray-600 mb-4 leading-relaxed">
                At Velmora, we believe that fine jewelry should be accessible without compromising on quality. Each piece is thoughtfully designed and crafted with 18K gold plating, ensuring lasting beauty at a price point that allows you to build a collection you truly love.
              </p>
              <p className="font-sans text-base text-gray-600 mb-8 leading-relaxed">
                From our studio to your jewelry box, every detail is considered. We're committed to sustainable practices and hypoallergenic materials, because jewelry should feel as good as it looks.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center font-sans text-sm uppercase tracking-wider text-velmora-charcoal border-b-2 border-velmora-gold pb-1 hover:text-velmora-gold transition-colors"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-velmora-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-12">What Our Customers Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-velmora-gold fill-velmora-gold" />
                  ))}
                </div>
                <p className="font-sans text-sm text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-velmora-gold flex items-center justify-center text-white font-serif">
                    {testimonial.initial}
                  </div>
                  <span className="font-sans text-sm font-medium">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-velmora-charcoal text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Join the Family</h2>
          <p className="font-sans text-sm uppercase tracking-wider mb-8 text-gray-300">
            Get 10% off your first order
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 font-sans text-sm bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-velmora-gold"
            />
            <button
              type="submit"
              className="bg-velmora-gold text-white px-8 py-3 font-sans text-sm uppercase tracking-wider hover:bg-velmora-gold-light transition-colors"
            >
              Subscribe
            </button>
          </form>

          <p className="font-sans text-xs text-gray-400 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from Velmora.
          </p>
        </div>
      </section>
    </div>
  )
}
