import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories, testimonials, ugcContent, formatPrice } from '../data/products';

const HomePage = () => {
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setNewsletterStatus('success');
      setEmail('');
      setTimeout(() => setNewsletterStatus(''), 3000);
    }
  };

  const bestsellers = products.slice(0, 5);

  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%), url(https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container text-center text-white">
          <h1
            className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 animate-fade-in"
            style={{ letterSpacing: '0.05em' }}
          >
            Crafted to be Treasured
          </h1>
          <p
            className="text-lg md:text-xl mb-8 max-w-xl mx-auto animate-fade-in delay-200"
            style={{ opacity: 0.9 }}
          >
            Demi-fine jewelry designed for the modern woman. Elegant pieces that transition from day to night.
          </p>
          <Link
            to="/shop"
            className="btn-primary animate-fade-in delay-300"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section
        className="py-4 text-center"
        style={{ backgroundColor: 'var(--color-ivory)' }}
      >
        <div className="container">
          <div className="trust-bar flex flex-wrap justify-center gap-y-2">
            <span>Free Worldwide Shipping</span>
            <span>30-Day Returns</span>
            <span>18K Gold Plated</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2
              className="font-serif text-3xl md:text-4xl mb-4"
              style={{ letterSpacing: '0.05em' }}
            >
              Bestsellers
            </h2>
            <p style={{ color: 'var(--color-stone)' }}>
              Our most loved pieces
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {bestsellers.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* UGC Scroll */}
      <section
        className="section py-8"
        style={{ backgroundColor: 'var(--color-ivory)' }}
      >
        <div className="container">
          <div className="flex overflow-x-auto hide-scrollbar gap-4 md:gap-6 pb-4">
            {ugcContent.map((item) => (
              <div
                key={item.id}
                className="ugc-card relative group"
              >
                <div className="aspect-9-16 rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                <p
                  className="absolute bottom-4 left-4 right-4 font-serif text-white text-sm italic"
                  style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
                >
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2
              className="font-serif text-3xl md:text-4xl mb-4"
              style={{ letterSpacing: '0.05em' }}
            >
              Shop by Category
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="category-tile group block"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="category-tile-label">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="aspect-3-4 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&h=1000&fit=crop"
                alt="Our Story"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h2
                className="font-serif text-3xl md:text-4xl mb-6"
                style={{ letterSpacing: '0.05em' }}
              >
                Our Story
              </h2>
              <p
                className="mb-6"
                style={{ color: 'var(--color-stone)', lineHeight: 1.8 }}
              >
                Founded with a passion for creating jewelry that feels like a natural extension of the woman who wears it, Velmora represents the intersection of timeless elegance and modern sensibility.
              </p>
              <p
                className="mb-8"
                style={{ color: 'var(--color-stone)', lineHeight: 1.8 }}
              >
                Each piece is thoughtfully designed using premium materials, including 18K gold plating and ethically sourced crystals. We believe that beautiful jewelry should be accessible without compromising on quality or conscience.
              </p>
              <Link
                to="/about"
                className="btn-outline"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="section"
        style={{ backgroundColor: 'var(--color-ivory)' }}
      >
        <div className="container">
          <div className="text-center mb-12">
            <h2
              className="font-serif text-3xl md:text-4xl"
              style={{ letterSpacing: '0.05em' }}
            >
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <p className="testimonial-author">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-block">
        <div className="container">
          <div className="max-w-xl mx-auto">
            <h2
              className="font-serif text-2xl md:text-3xl mb-3"
              style={{ letterSpacing: '0.05em' }}
            >
              Join for 10% Off
            </h2>
            <p
              className="mb-6"
              style={{ opacity: 0.8 }}
            >
              Subscribe to our newsletter and receive 10% off your first order.
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="newsletter-input"
                required
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap"
                style={{ backgroundColor: 'var(--color-gold)', color: 'var(--color-charcoal)' }}
              >
                Subscribe
              </button>
            </form>
            {newsletterStatus === 'success' && (
              <p className="mt-3 text-sm" style={{ color: 'var(--color-gold)' }}>
                Thank you for subscribing!
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;