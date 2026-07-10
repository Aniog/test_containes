import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Star } from 'lucide-react';
import { products, testimonials, ugcItems, categories } from '../../data/products';
import ProductCard from '../ui/ProductCard';
import { useCart } from '../../context/CartContext';

// Fade-in on scroll hook
function useFadeInOnScroll() {
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    const elements = ref.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}

// Newsletter Form Component
function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20" style={{ backgroundColor: 'var(--espresso-mid)' }}>
      <div className="container">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--gold-light)' }}>
            Join the velmora world
          </p>
          <h2 className="font-serif text-3xl md:text-4xl mb-4" style={{ color: 'var(--cream)' }}>
            Join for 10% off your first order
          </h2>
          <p className="text-sm mb-8" style={{ color: 'var(--stone)' }}>
            Be the first to know about new collections, exclusive offers, and styling inspiration.
          </p>
          
          {submitted ? (
            <p className="text-lg" style={{ color: 'var(--gold-light)' }}>
              Thank you for subscribing!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 text-sm"
                style={{ 
                  backgroundColor: 'var(--cream)',
                  color: 'var(--espresso)',
                  border: 'none'
                }}
                required
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// Trust Bar Component
function TrustBar() {
  const trustItems = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div 
      className="py-4"
      style={{ backgroundColor: 'var(--cream-dark)', borderBottom: '1px solid rgba(200, 185, 154, 0.2)' }}
    >
      <div className="container">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <div key={item} className="flex items-center gap-2">
              {index > 0 && (
                <span className="hidden md:block w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--stone)' }} />
              )}
              <span className="text-xs tracking-wider uppercase" style={{ color: 'var(--espresso-light)' }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center" style={{ backgroundColor: 'var(--espresso)' }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80"
          alt="Velmora jewelry"
          className="w-full h-full object-cover opacity-60"
        />
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(28, 21, 16, 0.9) 0%, rgba(28, 21, 16, 0.4) 100%)' }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--gold-light)' }}>
            Demi-Fine Jewelry
          </p>
          <h1 
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight"
            style={{ color: 'var(--cream)', fontStyle: 'italic' }}
          >
            Crafted to be Treasured
          </h1>
          <p className="text-lg mb-8 max-w-md" style={{ color: 'var(--stone)' }}>
            Timeless pieces designed for the modern woman. 18K gold plated, hypoallergenic, and made to last.
          </p>
          <Link to="/shop" className="btn-primary">
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} style={{ color: 'var(--stone)' }} />
      </div>
    </section>
  );
}

// Bestsellers Section
function BestsellersSection() {
  const sectionRef = useFadeInOnScroll();
  const bestsellers = products.filter(p => p.bestseller).slice(0, 5);

  return (
    <section ref={sectionRef} className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-12 fade-in">
          <p className="section-subheading">Customer Favorites</p>
          <h2 className="section-heading">Our Bestsellers</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {bestsellers.map((product, index) => (
            <div key={product.id} className="fade-in" style={{ transitionDelay: `${index * 100}ms` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in">
          <Link to="/shop" className="btn-secondary">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}

// UGC Reels Section
function UGCSection() {
  return (
    <section className="py-16" style={{ backgroundColor: 'var(--cream-dark)' }}>
      <div className="container">
        <div className="text-center mb-10">
          <p className="section-subheading">@velmorajewelry</p>
          <h2 className="section-heading">Seen on You</h2>
        </div>
      </div>
      
      <div className="flex gap-4 overflow-x-auto pb-4 px-4 md:px-0 md:justify-center md:overflow-visible snap-x snap-mandatory">
        {ugcItems.map((item) => (
          <div 
            key={item.id}
            className="flex-shrink-0 w-40 md:w-56 snap-center"
          >
            <div 
              className="relative overflow-hidden rounded"
              style={{ aspectRatio: '9 / 16' }}
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              <div 
                className="absolute inset-0 flex items-end p-4"
                style={{ background: 'linear-gradient(to top, rgba(28, 21, 16, 0.6) 0%, transparent 50%)' }}
              >
                <p 
                  className="font-serif text-sm italic"
                  style={{ color: 'var(--cream)' }}
                >
                  {item.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Category Tiles Section
function CategorySection() {
  const sectionRef = useFadeInOnScroll();
  
  const categoryImages = {
    earrings: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    necklaces: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    huggies: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80'
  };

  return (
    <section ref={sectionRef} className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-12 fade-in">
          <p className="section-subheading">Shop By Category</p>
          <h2 className="section-heading">Find Your Perfect Piece</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative overflow-hidden rounded fade-in"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div 
                className="aspect-[3/4] md:aspect-[4/5]"
                style={{ backgroundColor: 'var(--cream-dark)' }}
              >
                <img
                  src={categoryImages[category.id]}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div 
                className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300"
                style={{ backgroundColor: 'rgba(28, 21, 16, 0.4)' }}
              >
                <h3 
                  className="font-serif text-2xl md:text-3xl mb-2 tracking-wider"
                  style={{ color: 'var(--cream)' }}
                >
                  {category.name}
                </h3>
                <p className="text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: 'var(--gold-light)' }}>
                  Shop Now
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Brand Story Section
function BrandStorySection() {
  const sectionRef = useFadeInOnScroll();

  return (
    <section ref={sectionRef} className="py-20 md:py-28" style={{ backgroundColor: 'var(--cream-dark)' }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="fade-in">
            <div 
              className="aspect-[4/5] rounded overflow-hidden"
              style={{ backgroundColor: 'var(--stone)' }}
            >
              <img
                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80"
                alt="Velmora craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="fade-in" style={{ transitionDelay: '200ms' }}>
            <p className="section-subheading">Our Story</p>
            <h2 className="section-heading mb-6">
              Jewelry that tells your story
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--espresso-light)' }}>
              At Velmora, we believe every woman deserves to feel special. Our jewelry is designed with intention, crafted with care, and priced to be accessible. Each piece is a celebration of the moments that matter.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--espresso-light)' }}>
              Born from a passion for timeless design and modern sensibility, we create demi-fine jewelry that bridges the gap between fashion and fine jewelry.
            </p>
            <Link 
              to="/about" 
              className="inline-flex items-center gap-2 text-sm tracking-wider uppercase transition-colors hover:text-[var(--gold)]"
              style={{ color: 'var(--espresso-mid)' }}
            >
              Learn More About Us
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const sectionRef = useFadeInOnScroll();

  return (
    <section ref={sectionRef} className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-12 fade-in">
          <p className="section-subheading">What Our Customers Say</p>
          <h2 className="section-heading">Love Letters</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="p-8 rounded fade-in"
              style={{ 
                backgroundColor: 'var(--white)',
                border: '1px solid rgba(200, 185, 154, 0.2)',
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill="var(--gold)"
                    stroke="var(--gold)"
                  />
                ))}
              </div>
              <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--espresso-light)' }}>
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-medium" style={{ color: 'var(--espresso-mid)' }}>
                  {testimonial.name}
                </p>
                <p className="text-xs" style={{ color: 'var(--stone-dark)' }}>
                  Purchased: {testimonial.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Main HomePage Component
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
  );
}
