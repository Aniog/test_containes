import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { getBestsellers, testimonials, ugcContent, categories } from '../data/products';

export default function Homepage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const ugcScrollRef = useRef(null);
  const bestsellers = getBestsellers();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollUgC = (direction) => {
    if (ugcScrollRef.current) {
      const scrollAmount = 280;
      ugcScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1920&h=1080&fit=crop"
            alt="Elegant gold jewelry"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-xl animate-fade-in">
              <p className="text-[#C9A962] text-sm uppercase tracking-[0.3em] mb-4">
                Demi-Fine Jewelry
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                Crafted to be Treasured
              </h1>
              <p className="text-white/80 text-lg mb-8 max-w-md">
                Delicate 18K gold plated pieces designed for the modern woman. 
                Timeless elegance at accessible prices.
              </p>
              <Link to="/shop" className="btn-primary inline-block">
                Shop the Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="trust-bar py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm">
            <span className="text-[#8B7E74]">Free Worldwide Shipping</span>
            <span className="hidden md:block text-[#3D3936]">·</span>
            <span className="text-[#8B7E74]">30-Day Returns</span>
            <span className="hidden md:block text-[#3D3936]">·</span>
            <span className="text-[#8B7E74]">18K Gold Plated</span>
            <span className="hidden md:block text-[#3D3936]">·</span>
            <span className="text-[#8B7E74]">Hypoallergenic</span>
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="section-padding bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-3">Our Bestsellers</h2>
            <p className="text-[#8B7E74]">Most-loved pieces from our collection</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 stagger-children">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* UGC Reel-style Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl mb-1">Styled by You</h2>
              <p className="text-[#8B7E74] text-sm">Real women, real jewelry moments</p>
            </div>
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => scrollUgC('left')}
                className="p-3 border border-[#E8E4E0] hover:border-[#C9A962] hover:text-[#C9A962] transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scrollUgC('right')}
                className="p-3 border border-[#E8E4E0] hover:border-[#C9A962] hover:text-[#C9A962] transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div
            ref={ugcScrollRef}
            className="flex gap-4 overflow-x-auto scroll-container pb-4 -mx-4 px-4"
          >
            {ugcContent.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-48 md:w-56 relative overflow-hidden group"
              >
                <div className="aspect-[9/16] bg-[#F5EBE0]">
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 font-serif text-white text-sm italic">
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="section-padding bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-3">Shop by Category</h2>
            <p className="text-[#8B7E74]">Find your perfect piece</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { 
                name: 'Earrings', 
                image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop',
                category: 'earrings'
              },
              { 
                name: 'Necklaces', 
                image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop',
                category: 'necklaces'
              },
              { 
                name: 'Huggies', 
                image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=800&fit=crop',
                category: 'huggies'
              }
            ].map((cat) => (
              <Link
                key={cat.name}
                to={`/shop?category=${cat.category}`}
                className="group relative overflow-hidden aspect-[3/4]"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-2xl md:text-3xl text-white uppercase tracking-wider">
                    {cat.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop"
                alt="Velmora craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="py-8 md:py-0">
              <p className="text-[#C9A962] text-sm uppercase tracking-[0.2em] mb-4">
                Our Story
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mb-6 leading-tight">
                Where Craftsmanship Meets Accessibility
              </h2>
              <p className="text-[#8B7E74] mb-6 leading-relaxed">
                Founded with a simple belief: every woman deserves to feel luxurious. 
                We create demi-fine jewelry that bridges the gap between fashion jewelry 
                and fine jewelry — elevated designs with premium materials at prices 
                that invite self-gifting.
              </p>
              <p className="text-[#8B7E74] mb-8 leading-relaxed">
                Each piece is thoughtfully designed and crafted with 18K gold plating, 
                ensuring you can layer, stack, and treasure your jewelry for years to come.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-[#C9A962] hover:gap-4 transition-all"
              >
                Discover Our Journey
                <span className="border-b border-[#C9A962] pb-0.5">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-[#F5EBE0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-3">What Our Clients Say</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative min-h-[200px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentTestimonial ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="text-center">
                    <div className="flex justify-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          fill="#C9A962"
                          stroke="#C9A962"
                          strokeWidth={1}
                        />
                      ))}
                    </div>
                    <p className="font-serif text-xl md:text-2xl italic text-[#2D2926] mb-6 leading-relaxed">
                      "{testimonial.review}"
                    </p>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-[#8B7E74]">
                      Purchased: {testimonial.product}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-[#C9A962]' : 'bg-[#E8E4E0]'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
              Join the Velmora World
            </h2>
            <p className="text-[#8B7E74] mb-8">
              Subscribe for 10% off your first order and be the first to know about new collections.
            </p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-[#C9A962]"
                required
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
            <p className="text-xs text-[#8B7E74] mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
