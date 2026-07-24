import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, ChevronRight } from 'lucide-react';
import { products, testimonials, categories, ugcItems, trustItems } from '../data/products';
import ProductCard from '../components/ProductCard';

function TrustBar() {
  return (
    <div className="border-y border-divider bg-white/80 backdrop-blur-sm">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 lg:gap-12">
          {trustItems.map((item, index) => (
            <div key={item} className="flex items-center gap-2">
              {index > 0 && (
                <span className="hidden sm:block w-1 h-1 rounded-full bg-gold" />
              )}
              <span className="text-xs sm:text-sm text-text-secondary uppercase tracking-wider">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BestsellersSection() {
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <h2
            className="font-serif text-2xl sm:text-3xl lg:text-4xl text-text-primary mb-3"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
          >
            Our Bestsellers
          </h2>
          <p className="text-text-secondary">Discover the pieces our community loves most</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-14">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-text-primary hover:text-gold transition-colors duration-200"
          >
            View All
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function UGCSection() {
  const containerRef = useRef(null);

  return (
    <section className="py-12 sm:py-16 bg-text-primary overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2
          className="font-serif text-2xl sm:text-3xl text-white text-center"
          style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
        >
          Styled by You
        </h2>
      </div>

      <div ref={containerRef} className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 px-4 sm:px-6 lg:px-8 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-40 sm:w-48 aspect-[9/16] relative overflow-hidden rounded-sm"
          >
            <img
              src={item.image}
              alt={item.caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-serif text-white text-sm italic mb-1">{item.caption}</p>
              <p className="text-white/60 text-xs">{item.handle}</p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

function CategoryTile({ category }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={`/shop?category=${category.id}`}
      className="group relative overflow-hidden aspect-[4/5] block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h3
          className="font-serif text-xl sm:text-2xl lg:text-3xl mb-2 transition-transform duration-300 group-hover:translate-y-[-4px]"
          style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
        >
          {category.name}
        </h3>
        <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {category.description}
        </p>
        <div className="mt-4 flex items-center gap-1 text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <span>Shop</span>
          <ChevronRight size={14} />
        </div>
      </div>
    </Link>
  );
}

function ShopByCategorySection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <h2
            className="font-serif text-2xl sm:text-3xl lg:text-4xl text-text-primary mb-3"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
          >
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((category) => (
            <CategoryTile key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandStorySection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="py-8 lg:py-12">
            <span className="text-xs uppercase tracking-wider text-gold mb-4 block">Our Story</span>
            <h2
              className="font-serif text-2xl sm:text-3xl lg:text-4xl text-text-primary mb-6 leading-tight"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
            >
              Crafted with Intention,<br />Worn with Joy
            </h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              Velmora was born from a simple belief: beautiful jewelry shouldn't require a lifetime commitment. 
              We create demi-fine pieces that combine quality craftsmanship with accessible luxury — 
              designed for women who appreciate refined style without the premium price tag.
            </p>
            <p className="text-text-secondary leading-relaxed mb-8">
              Each piece is thoughtfully designed and crafted with 18K gold plating over hypoallergenic metals, 
              ensuring lasting beauty and comfort. Because when you put on your Velmora piece, 
              you should feel nothing but confidence.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-text-primary hover:text-gold transition-colors duration-200"
            >
              Learn More About Us
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <h2
            className="font-serif text-2xl sm:text-3xl lg:text-4xl text-text-primary mb-3"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
          >
            What Our Community Says
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 lg:p-8 text-center"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              
              <p className="text-text-secondary italic leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <p className="text-sm font-medium text-text-primary">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gold">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2
            className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white mb-4"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
          >
            Join the Velmora Community
          </h2>
          <p className="text-white/80 mb-8">
            Be the first to know about new collections, exclusive offers, and styling inspiration.
          </p>

          {submitted ? (
            <div className="text-white">
              <p className="text-lg mb-2">Welcome to the community!</p>
              <p className="text-white/80">Check your inbox for your 10% off code.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-white/10 border border-white/30 text-white placeholder-white/60 rounded-none focus:outline-none focus:border-white"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-gold text-sm uppercase tracking-wider hover:bg-cream transition-colors duration-200"
              >
                Get 10% Off
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default function Homepage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80"
            alt="Velmora jewelry"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-left w-full">
          <div className="max-w-2xl">
            <h1
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 leading-tight"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 400 }}
            >
              Crafted to be Treasured
            </h1>
            <p className="text-white/90 text-lg sm:text-xl mb-8 max-w-lg">
              Demi-fine jewelry that brings luxury within reach. 
              Timeless designs for everyday moments and special occasions.
            </p>
            <Link
              to="/shop"
              className="inline-block px-10 py-4 bg-gold text-white text-sm uppercase tracking-wider hover:bg-gold-dark transition-colors duration-200"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </section>

      <TrustBar />
      <BestsellersSection />
      <UGCSection />
      <ShopByCategorySection />
      <BrandStorySection />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  );
}
