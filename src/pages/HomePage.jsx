import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronRight, ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories, testimonials, ugcContent } from '../data/products';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState({});
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const bestsellers = products.slice(0, 5);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen min-h-[600px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&h=1080&fit=crop"
            alt="Gold jewelry on model"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/50 via-charcoal/30 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-xl">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-cream leading-tight animate-slide-up">
                Crafted to be Treasured
              </h1>
              <p className="mt-6 text-lg text-cream/80 animate-slide-up delay-200">
                Premium demi-fine jewelry for the modern woman. 
                Timeless elegance, accessible luxury.
              </p>
              <Link
                to="/shop"
                className="inline-block mt-8 bg-cream text-charcoal px-8 py-4 text-sm tracking-widest hover:bg-gold-light transition-all duration-300 animate-slide-up delay-300"
              >
                SHOP THE COLLECTION
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-charcoal text-cream py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-xs tracking-widest text-cream/70">
            <span>FREE WORLDWIDE SHIPPING</span>
            <span className="hidden sm:inline">·</span>
            <span>30-DAY RETURNS</span>
            <span className="hidden sm:inline">·</span>
            <span>18K GOLD PLATED</span>
            <span className="hidden sm:inline">·</span>
            <span>HYPOALLERGENIC</span>
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section id="bestsellers" className="py-20 bg-cream animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Bestsellers</h2>
            <Link 
              to="/shop" 
              className="flex items-center gap-2 text-sm text-warm-gray hover:text-charcoal transition-colors"
            >
              View All <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {bestsellers.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* UGC Reel Strip */}
      <section className="py-16 bg-ivory overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <h2 className="font-serif text-2xl text-center text-charcoal">As Seen On You</h2>
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-4 px-4 snap-x snap-mandatory scrollbar-hide">
          {ugcContent.map((item) => (
            <div 
              key={item.id} 
              className="flex-shrink-0 w-40 md:w-48 snap-center"
            >
              <div className="relative aspect-[9/16] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 font-serif text-sm text-cream italic">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-center text-charcoal mb-12">
            Shop by Category
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group relative aspect-[3/4] overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-2xl md:text-3xl text-cream tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {category.name.toUpperCase()}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
                alt="Artisan crafting jewelry"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <span className="text-xs tracking-widest text-gold uppercase">Our Story</span>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal mt-4 mb-6">
                Crafted with Intention, Worn with Joy
              </h2>
              <p className="text-warm-gray leading-relaxed mb-6">
                At Velmora, we believe jewelry should be more than an accessory—it should be a cherished part of your story. Each piece is thoughtfully designed with premium materials and meticulous attention to detail.
              </p>
              <p className="text-warm-gray leading-relaxed mb-8">
                Our demi-fine collection bridges the gap between fine jewelry and fashion pieces, offering you accessible luxury that stands the test of time.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center gap-2 text-sm tracking-widest text-charcoal border-b border-charcoal pb-1 hover:text-gold hover:border-gold transition-colors"
              >
                LEARN MORE <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-center text-charcoal mb-12">
            What Our Customers Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="bg-ivory p-8 border border-divider animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-warm-gray leading-relaxed mb-6">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold-light rounded-full flex items-center justify-center">
                    <span className="font-serif text-sm text-charcoal">{testimonial.initial}</span>
                  </div>
                  <span className="text-sm text-charcoal">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-cream mb-4">
              Join the Velmora Circle
            </h2>
            <p className="text-cream/70 mb-8">
              Subscribe and receive 10% off your first order, plus early access to new collections and exclusive offers.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-transparent border border-cream/30 text-cream placeholder:text-cream/50 focus:border-gold focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gold text-charcoal text-sm tracking-widest hover:bg-gold-light transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;