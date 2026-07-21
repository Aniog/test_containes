import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Truck, ShieldCheck, Sparkles, Heart, Star, ChevronRight } from 'lucide-react';
import { getFeaturedProducts } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    setFeaturedProducts(getFeaturedProducts());
  }, []);

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

  const testimonials = [
    { name: 'Sarah', initial: 'S', rating: 5, text: 'Absolutely love my Velmora pieces. The quality is outstanding and I get compliments every time I wear them.' },
    { name: 'Emily', initial: 'E', rating: 5, text: 'The perfect gift for myself. Elegant, timeless, and the gold plating hasnt faded after months of wear.' },
    { name: 'Jessica', initial: 'J', rating: 5, text: 'Velmora has become my go-to for jewelry. The attention to detail and customer service is unmatched.' }
  ];

  const categories = [
    { name: 'Earrings', image: 'https://picsum.photos/600/600?random=earrings', link: '/shop?category=earrings' },
    { name: 'Necklaces', image: 'https://picsum.photos/600/600?random=necklaces', link: '/shop?category=necklaces' },
    { name: 'Huggies', image: 'https://picsum.photos/600/600?random=huggies', link: '/shop?category=huggies' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/1920/1080?random=hero"
            alt="Velmora Fine Jewelry"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-velmora-black bg-opacity-30" />
        </div>
        
        <div className="relative z-10 text-center text-velmora-white px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl mb-6 animate-fade-in">
            Crafted to be<br />Treasure
          </h1>
          <p className="font-sans text-lg md:text-xl mb-8 text-velmora-cream">
            Demi-fine jewelry for life's most precious moments
          </p>
          <Link
            to="/shop"
            className="inline-block bg-velmora-gold text-white px-10 py-4 font-sans text-sm tracking-widest uppercase hover:bg-velmora-gold-dark transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-velmora-cream py-4 border-b border-velmora-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-sm text-velmora-charcoal">
            {[
              { icon: Truck, text: 'Free Worldwide Shipping' },
              { icon: ShieldCheck, text: '30-Day Returns' },
              { icon: Sparkles, text: '18K Gold Plated' },
              { icon: Heart, text: 'Hypoallergenic' }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <item.icon size={18} className="text-velmora-gold" />
                <span className="font-sans">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section 
        id="bestsellers"
        data-animate
        className={`py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-opacity duration-600 ${
          isVisible['bestsellers'] ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Bestsellers</h2>
          <p className="font-sans text-velmora-gray max-w-2xl mx-auto">
            Our most loved pieces, crafted with intention and designed to be treasured
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* UGC Reel-style Row */}
      <section 
        id="ugc-reel"
        data-animate
        className={`py-20 bg-velmora-cream transition-opacity duration-600 ${
          isVisible['ugc-reel'] ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl mb-8 text-center">Worn by You</h2>
          <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex-shrink-0 w-64 md:w-80 relative group cursor-pointer">
                <div className="aspect-[9/16] bg-velmora-beige rounded-lg overflow-hidden">
                  <img
                    src={`https://picsum.photos/400/711?random=${item + 20}`}
                    alt={`UGC ${item}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-velmora-black to-transparent">
                  <p className="font-serif text-velmora-white text-sm italic">
                    "Absolutely love this piece ✨"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section 
        id="categories"
        data-animate
        className={`py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-opacity duration-600 ${
          isVisible['categories'] ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h2 className="font-serif text-3xl md:text-4xl mb-12 text-center">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.link}
              className="relative group overflow-hidden rounded-lg aspect-square"
            >
              <img
                src={`https://picsum.photos/600/600?random=${category.name}`}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-velmora-black bg-opacity-30 group-hover:bg-opacity-40 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="font-serif text-3xl text-velmora-white uppercase tracking-widest">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section 
        id="brand-story"
        data-animate
        className={`py-20 bg-velmora-cream transition-opacity duration-600 ${
          isVisible['brand-story'] ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <img
                src="https://picsum.photos/800/800?random=brand"
                alt="Velmora Brand Story"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-serif text-4xl md:text-5xl">Our Story</h2>
              <p className="font-sans text-velmora-gray leading-relaxed">
                At Velmora, we believe that jewelry should be as unique as the moments it celebrates. 
                Founded with a passion for demi-fine craftsmanship, we create pieces that bridge the gap 
                between everyday elegance and special occasion luxury.
              </p>
              <p className="font-sans text-velmora-gray leading-relaxed">
                Each piece is crafted with 18K gold plating, ensuring that your treasured jewelry 
                maintains its beauty for years to come. We're committed to sustainable practices 
                and hypoallergenic materials, because beauty should never compromise comfort.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-velmora-gold hover:text-velmora-gold-dark font-sans text-sm tracking-wide uppercase group"
              >
                Discover Our Journey
                <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section 
        id="testimonials"
        data-animate
        className={`py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-opacity duration-600 ${
          isVisible['testimonials'] ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h2 className="font-serif text-3xl md:text-4xl mb-12 text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-velmora-cream p-8 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-velmora-gold fill-current" />
                ))}
              </div>
              <p className="font-sans text-velmora-charcoal mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-velmora-gold text-white flex items-center justify-center font-serif">
                  {testimonial.initial}
                </div>
                <span className="font-sans text-sm font-medium">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-velmora-charcoal text-velmora-white py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Join for 10% Off
          </h2>
          <p className="font-sans text-velmora-gray-light mb-8">
            Subscribe to our newsletter and receive exclusive offers, early access to new collections, and jewelry care tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-3 bg-velmora-black border border-velmora-charcoal text-velmora-white placeholder-velmora-gray-light focus:outline-none focus:border-velmora-gold font-sans text-sm"
              required
            />
            <button
              type="submit"
              className="bg-velmora-gold text-white px-8 py-3 font-sans text-sm tracking-wide uppercase hover:bg-velmora-gold-dark transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
