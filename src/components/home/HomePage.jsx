import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Star, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products, testimonials, ugcContent, categories } from '@/data/products';

// Hero Section
export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-warmstone-900/70 via-warmstone-900/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-xl">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream-50 leading-tight">
            Crafted to be Treasured
          </h1>
          <p className="mt-6 text-lg text-cream-200/90 leading-relaxed">
            Discover our collection of demi-fine jewelry, designed for the modern woman who appreciates everyday elegance.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center px-8 py-4 bg-cream-50 text-warmstone-900 font-medium tracking-wide hover:bg-cream-100 transition-colors"
            >
              Shop the Collection
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-8 py-4 border border-cream-200 text-cream-50 font-medium tracking-wide hover:bg-cream-50/10 transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream-200/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-cream-200/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

// Trust Bar
export const TrustBar = () => {
  const features = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <section className="bg-warmstone-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {features.map((feature, index) => (
            <div key={feature} className="flex items-center gap-3">
              {index > 0 && (
                <span className="hidden md:block w-1 h-1 rounded-full bg-warmstone-500" />
              )}
              <span className="text-xs sm:text-sm font-sans font-medium tracking-wide text-cream-200 uppercase">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Bestsellers Section
export const BestsellersSection = () => {
  const { addToCart } = useCart();
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-20 md:py-28 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-sans font-medium uppercase tracking-extra-wide text-gold-600">
            Customer Favorites
          </span>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-warmstone-900">
            Our Bestsellers
          </h2>
          <div className="divider w-16 mx-auto mt-4" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
              index={index}
            />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm font-medium text-warmstone-700 hover:text-warmstone-900 transition-colors group"
          >
            View All Products
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

// Product Card Component
const ProductCard = ({ product, onAddToCart, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <Link to={`/product/${product.id}`}>
        {/* Image Container */}
        <div className="relative aspect-[3/4] bg-warmstone-100 overflow-hidden mb-4">
          {/* Default Image */}
          <img
            src={product.images[0]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered && product.hoverImage ? 'opacity-0' : 'opacity-100'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Hover Image */}
          {product.hoverImage && (
            <img
              src={product.hoverImage}
              alt={`${product.name} alternate view`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 px-2 py-1 bg-warmstone-900 text-cream-50 text-xs font-medium uppercase tracking-wide">
              {product.badge}
            </span>
          )}

          {/* Quick Add Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              onAddToCart(product);
            }}
            className={`absolute bottom-0 left-0 right-0 py-3 bg-warmstone-900/90 text-cream-50 text-sm font-medium tracking-wide transform transition-all duration-300 ${
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
          >
            Quick Add
          </button>
        </div>
      </Link>

      {/* Product Info */}
      <div className="text-center">
        <h3 className="product-name text-sm text-warmstone-900">
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-1 mt-1">
          <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
          <span className="text-xs text-warmstone-500">
            {product.rating} ({product.reviews})
          </span>
        </div>
        <p className="mt-1 font-serif text-warmstone-700">
          ${product.price}
        </p>
      </div>
    </div>
  );
};

// UGC Section (Reels-style horizontal scroll)
export const UGCSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = { current: null };

  const scroll = (direction) => {
    const container = document.getElementById('ugc-scroll');
    if (!container) return;
    
    const scrollAmount = direction === 'left' ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-warmstone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-sans font-medium uppercase tracking-extra-wide text-gold-600">
              As Seen On You
            </span>
            <h2 className="mt-2 font-serif text-2xl md:text-3xl text-warmstone-900">
              Share Your Style
            </h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 border border-warmstone-300 rounded-full hover:bg-warmstone-100 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-warmstone-600" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 border border-warmstone-300 rounded-full hover:bg-warmstone-100 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-warmstone-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll */}
      <div
        id="ugc-scroll"
        className="flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-4 snap-x snap-mandatory"
      >
        {ugcContent.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-56 md:w-72 aspect-[9/16] relative overflow-hidden rounded-lg snap-start"
          >
            <img
              src={item.image}
              alt={item.caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-warmstone-900/70 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 font-serif text-lg text-cream-50 italic">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Shop by Category
export const CategorySection = () => {
  const categoryImages = {
    earrings: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    necklaces: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80',
    huggies: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80',
  };

  return (
    <section className="py-20 md:py-28 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-sans font-medium uppercase tracking-extra-wide text-gold-600">
            Curated Collections
          </span>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-warmstone-900">
            Shop by Category
          </h2>
          <div className="divider w-16 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <img
                src={categoryImages[category.id]}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warmstone-900/60 via-transparent to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 group-hover:pb-12 transition-all duration-300">
                <h3 className="font-serif text-2xl md:text-3xl text-cream-50">
                  {category.name}
                </h3>
                <span className="mt-2 text-sm text-cream-200/80 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {category.count} {category.count === 1 ? 'piece' : 'pieces'}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

// Brand Story Section
export const BrandStorySection = () => {
  return (
    <section className="py-20 md:py-28 bg-warmstone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-warmstone-800/30" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-xs font-sans font-medium uppercase tracking-extra-wide text-gold-400">
              Our Story
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl text-cream-50 leading-tight">
              Jewelry that tells your story
            </h2>
            <div className="divider w-16 mt-6" style={{ background: 'linear-gradient(90deg, #E8B03A, transparent)' }} />
            <p className="mt-8 text-cream-200/80 leading-relaxed">
              At Velmora, we believe every woman deserves to feel special. Our journey began with a simple vision: to create beautiful, high-quality jewelry that celebrates life's precious moments without the luxury price tag.
            </p>
            <p className="mt-4 text-cream-200/80 leading-relaxed">
              Each piece in our collection is thoughtfully designed and crafted with care, featuring premium 18K gold plating that's built to last. From everyday elegance to special occasions, Velmora jewelry becomes a cherished part of your personal story.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-gold-400 hover:text-gold-300 transition-colors group"
            >
              Discover Our Journey
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
export const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-sans font-medium uppercase tracking-extra-wide text-gold-600">
            What They Say
          </span>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-warmstone-900">
            Loved by Thousands
          </h2>
          <div className="divider w-16 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 shadow-sm border border-warmstone-100"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-lg text-warmstone-700 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="mt-6 pt-4 border-t border-warmstone-100">
                <p className="font-sans text-sm font-medium text-warmstone-900">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Newsletter Section
export const NewsletterSection = () => {
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
    <section className="py-20 bg-warmstone-900">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-cream-50">
          Join the Velmora World
        </h2>
        <p className="mt-4 text-cream-200/80">
          Be the first to know about new collections, exclusive offers, and styling inspiration. Get 10% off your first order.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-4 bg-warmstone-800 border border-warmstone-700 text-cream-50 placeholder:text-warmstone-400 focus:outline-none focus:border-gold-500 transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gold-500 text-warmstone-900 font-medium tracking-wide hover:bg-gold-400 transition-colors"
              >
                Subscribe
              </button>
            </div>
            <p className="mt-4 text-xs text-cream-300/60">
              By subscribing, you agree to receive marketing emails from Velmora.
            </p>
          </form>
        ) : (
          <div className="mt-8 p-6 bg-warmstone-800 rounded-lg max-w-md mx-auto">
            <p className="text-gold-400 font-serif text-lg">
              Welcome to Velmora!
            </p>
            <p className="mt-2 text-cream-200/80 text-sm">
              Check your inbox for your 10% discount code.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomePage;
