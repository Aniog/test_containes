import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { products, testimonials } from '../data/products';
import { ShoppingBag, Star, Truck, RefreshCw, Sparkles, Shield } from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState({});
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* 1. Full-Bleed Hero */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80"
            alt="Gold jewelry on model"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1
            className="font-serif text-5xl md:text-7xl mb-6 animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            Crafted to be Treasured
          </h1>
          <p
            className="text-lg md:text-xl mb-8 font-light max-w-2xl mx-auto"
            style={{ animationDelay: '0.6s' }}
          >
            Demi-fine jewelry designed for everyday elegance. Each piece tells a story of craftsmanship and beauty.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-white text-velmora-charcoal px-10 py-4 uppercase tracking-ultra-wide text-sm font-light hover:bg-velmora-gold hover:text-white transition-all duration-300"
            style={{ animationDelay: '0.9s' }}
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="bg-velmora-cream py-6 border-b border-gray-200">
        <div className="container-responsive">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm uppercase tracking-wider font-light">
            {[
              { icon: Truck, text: 'Free Worldwide Shipping' },
              { icon: RefreshCw, text: '30-Day Returns' },
              { icon: Sparkles, text: '18K Gold Plated' },
              { icon: Shield, text: 'Hypoallergenic' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <Icon size={16} className="text-velmora-gold" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Bestsellers Product Grid */}
      <section className="py-20 px-4">
        <div className="container-responsive">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-4">Bestsellers</h2>
          <div className="elegant-divider mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {products.map((product, index) => (
              <div
                key={product.id}
                id={`bestseller-${product.id}`}
                data-animate
                className={`product-card group cursor-pointer ${isVisible[`bestseller-${product.id}`] ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link to={`/product/${product.id}`}>
                  <div className="relative overflow-hidden mb-4">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-600"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          // Add to cart logic here
                        }}
                        className="opacity-0 group-hover:opacity-100 bg-white text-velmora-charcoal px-6 py-2 uppercase tracking-wider text-xs font-light transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                  <h3 className="product-name mb-2">{product.name}</h3>
                  <p className="text-sm font-light">${product.price}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. UGC Reel-Style Row */}
      <section className="py-20 bg-velmora-warm">
        <div className="container-responsive">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-4">Styled by You</h2>
          <div className="elegant-divider mb-12" />
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {[
              'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80',
              'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80',
              'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
              'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80',
              'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80'
            ].map((imageUrl, index) => (
              <div key={index} className="flex-shrink-0 w-64 md:w-80 relative group cursor-pointer">
                <div className="aspect-[9/16] bg-gradient-to-b from-velmora-cream to-velmora-warm flex items-center justify-center">
                  <img
                    src={imageUrl}
                    alt="Jewelry styled"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-serif italic text-lg">Elegance in every detail</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Shop by Category Tiles */}
      <section className="py-20 px-4">
        <div className="container-responsive">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-4">Shop by Category</h2>
          <div className="elegant-divider mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
              { name: 'Necklaces', image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80' },
              { name: 'Huggies', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
            ].map((category) => (
              <Link
                key={category.name}
                to="/shop"
                className="category-tile group relative h-96 overflow-hidden"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                />
                <div className="category-tile-overlay" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white font-serif text-3xl uppercase tracking-ultra-wide">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Brand Story Split Section */}
      <section className="py-20 bg-white">
        <div className="container-responsive">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
                alt="Velmora jewelry"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-4xl md:text-5xl mb-6">Our Story</h2>
              <div className="elegant-divider mb-8 ml-0" />
              <p className="text-gray-600 font-light leading-relaxed mb-8">
                At Velmora, we believe that jewelry should be as unique as the person wearing it.
                Our pieces are crafted with intention, using only the finest materials and time-honored
                techniques. Each design tells a story of elegance, sustainability, and timeless beauty.
              </p>
              <p className="text-gray-600 font-light leading-relaxed mb-8">
                From our studio to your jewelry box, every piece is created with love and attention
                to detail, ensuring that you receive nothing but the very best in demi-fine jewelry.
              </p>
              <Link
                to="/about"
                className="btn-secondary inline-block"
              >
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-20 bg-velmora-cream">
        <div className="container-responsive">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-4">What Our Customers Say</h2>
          <div className="elegant-divider mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-velmora-gold fill-velmora-gold" />
                  ))}
                </div>
                <p className="text-gray-600 font-light italic mb-6">"{testimonial.text}"</p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-velmora-gold text-white flex items-center justify-center font-serif">
                    {testimonial.initial}
                  </div>
                  <span className="font-light">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Newsletter Capture */}
      <section className="py-20 bg-velmora-charcoal text-white">
        <div className="container-responsive text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Join the Velmora Family</h2>
          <p className="font-light mb-2">Get 10% off your first order</p>
          <div className="elegant-divider mb-8" />
          <div className="newsletter-input max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-velmora-gold"
            />
            <button className="bg-velmora-gold text-white px-8 py-4 uppercase tracking-ultra-wide text-sm font-light hover:bg-velmora-gold-dark transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
