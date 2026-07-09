import React, { useState } from 'react';
import { products, categories, testimonials, ugcPosts } from '../data/products';
import { useCart } from '../context/CartContext';
import { ArrowRight, Star, ChevronRight, Mail } from 'lucide-react';

export default function HomePage() {
  const { addToCart } = useCart();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing! Check your email for 10% off your first order.');
    setEmail('');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80"
            alt="Gold jewelry on model"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <h1
            className="text-5xl md:text-7xl font-light mb-6 animate-fade-in-up"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Crafted to be<br />Treasured
          </h1>
          <p className="text-lg md:text-xl font-light mb-10 tracking-wide animate-fade-in-up opacity-90">
            Demi-fine gold jewelry for life's most meaningful moments
          </p>
          <a href="/shop" className="btn-gold inline-block">
            Shop the Collection
          </a>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-charcoal text-white py-4">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm tracking-wider uppercase">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline">·</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline">·</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline">·</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-light mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Bestsellers
            </h2>
            <div className="w-16 h-px bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {products.map((product) => (
              <div key={product.id} className="product-card group">
                <a href={`/product/${product.id}`} className="block">
                  <div className="product-card-image">
                    {product.badge && (
                      <span className="badge">{product.badge}</span>
                    )}
                    <img src={product.image} alt={product.name} />
                    <img src={product.imageHover} alt={product.name} />
                  </div>

                  <div className="p-4">
                    <h3 className="product-name text-sm mb-2">{product.name}</h3>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-gray-300'}
                        />
                      ))}
                      <span className="text-xs text-gray-600 ml-1">({product.reviews})</span>
                    </div>
                    <p className="text-lg" style={{ fontFamily: 'var(--font-serif)' }}>${product.price}</p>
                  </div>
                </a>

                <button
                  onClick={() => addToCart(product)}
                  className="quick-add"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UGC Reel-style Row */}
      <section className="section-padding bg-warm-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-light mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Worn by You
            </h2>
            <p className="text-gray-600">Join the Velmora community</p>
          </div>

          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
            {ugcPosts.map((post) => (
              <div
                key={post.id}
                className="flex-shrink-0 w-64 md:w-80 relative group cursor-pointer"
              >
                <div className="aspect-[9/16] overflow-hidden bg-cream">
                  <img
                    src={post.image}
                    alt={post.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white text-sm italic" style={{ fontFamily: 'var(--font-serif)' }}>
                    "{post.caption}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-light mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Shop by Category
            </h2>
            <div className="w-16 h-px bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <a
                key={category.name}
                href="/shop"
                className="group relative overflow-hidden aspect-[4/5] bg-cream"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="text-white text-2xl tracking-widest uppercase"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {category.name}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-padding bg-warm-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
                alt="Velmora jewelry craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="max-w-lg">
              <h2
                className="text-4xl md:text-5xl font-light mb-8"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Our Story
              </h2>
              <div className="w-16 h-px bg-gold mb-8" />

              <p className="text-gray-700 mb-6 leading-relaxed">
                At Velmora, we believe that fine jewelry should be both accessible and exceptional.
                Each piece is thoughtfully designed and crafted with demi-fine materials,
                ensuring that every woman can treasure her own collection of meaningful,
                beautiful pieces.
              </p>
              <p className="text-gray-700 mb-10 leading-relaxed">
                From everyday elegance to special occasion sparkle, our collections are
                created to celebrate life's moments — both big and small.
              </p>

              <a href="/about" className="btn-secondary inline-flex items-center gap-2">
                Discover More <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-light mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Loved by Our Customers
            </h2>
            <div className="w-16 h-px bg-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 md:p-10 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-gold text-gold" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                    <span className="text-gold font-medium">{testimonial.initial}</span>
                  </div>
                  <span className="text-sm tracking-wider uppercase">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-charcoal text-white">
        <div className="container max-w-2xl text-center">
          <Mail size={48} className="mx-auto mb-6 text-gold" />
          <h2
            className="text-4xl font-light mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Join for 10% Off
          </h2>
          <p className="text-gray-300 mb-10">
            Subscribe to receive exclusive offers, new arrivals, and jewelry care tips.
          </p>

          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-6 py-4 bg-transparent border border-gray-600 text-white placeholder-gray-500 focus:border-gold focus:outline-none"
            />
            <button type="submit" className="btn-gold whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
