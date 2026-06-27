import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, RefreshCw, Sparkles, Shield } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, ugcContent, testimonials } from '../data/products';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img
            src="https://images.unsplash.com/photo-1515372039744-b8c5d84b6ade?w=1600&q=80"
            alt="Velmora Fine Jewelry"
            className="hero-image"
          />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Crafted to be Treasured</h1>
          <p className="hero-subtitle">
            Demi-fine jewelry designed for everyday elegance
          </p>
          <Link to="/shop" className="hero-cta">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="trust-bar">
        <div className="trust-bar-inner">
          {[
            { icon: Truck, text: 'Free Worldwide Shipping' },
            { icon: RefreshCw, text: '30-Day Returns' },
            { icon: Sparkles, text: '18K Gold Plated' },
            { icon: Shield, text: 'Hypoallergenic' }
          ].map((item, index) => (
            <div key={index} className="trust-badge">
              <item.icon size={18} strokeWidth={1.5} />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="bestsellers-section">
        <div className="container">
          <h2 className="section-title">Bestsellers</h2>
          <p className="section-subtitle">Our most loved pieces</p>
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="section-cta">
            <Link to="/shop" className="btn-secondary">
              View All Collections
            </Link>
          </div>
        </div>
      </section>

      {/* UGC Reel-style Row */}
      <section className="ugc-section">
        <div className="container">
          <h2 className="section-title">Worn by You</h2>
          <p className="section-subtitle">Join the Velmora community</p>
        </div>
        <div className="ugc-scroll">
          {ugcContent.concat(ugcContent).map((item, index) => (
            <div key={index} className="ugc-card">
              <img src={item.image} alt="" className="ugc-image" />
              <div className="ugc-caption">
                <p>{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="categories-section">
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
          <p className="section-subtitle">Find your perfect piece</p>
          <div className="categories-grid">
            {[
              { name: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
              { name: 'Necklaces', image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80' },
              { name: 'Huggies', image: 'https://images.unsplash.com/photo-1630019852942-fd0ef8cef6c4?w=800&q=80' }
            ].map((category) => (
              <Link
                key={category.name}
                to={`/collections/${category.name.toLowerCase()}`}
                className="category-tile"
              >
                <img src={category.image} alt={category.name} className="category-image" />
                <div className="category-tile-overlay">
                  <h3 className="category-name">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="brand-story-section">
        <div className="container">
          <div className="brand-story-grid">
            <div className="brand-story-image">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                alt="Velmora Brand Story"
                className="brand-image"
              />
            </div>
            <div className="brand-story-content">
              <h2 className="brand-story-title">Our Story</h2>
              <p className="brand-story-text">
                Velmora was born from a simple belief: that beautiful jewelry shouldn't be 
                reserved for special occasions. Every piece we create is designed to be worn, 
                loved, and lived in.
              </p>
              <p className="brand-story-text">
                Using 18K gold plating and carefully selected materials, we craft demi-fine 
                jewelry that bridges the gap between costume and fine — offering accessible luxury 
                without compromise.
              </p>
              <Link to="/about" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">Real reviews from real customers</p>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.initial}</div>
                  <span className="author-name">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="container">
          <h2 className="newsletter-title">Join the Velmora Family</h2>
          <p className="newsletter-subtitle">
            Get 10% off your first order plus exclusive access to new collections
          </p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
              required
            />
            <button type="submit" className="newsletter-btn">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default HomePage;