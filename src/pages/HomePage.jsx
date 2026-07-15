import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { products, categories, testimonials, ugcContent } from '../data/products';
import { useCart } from '../context/CartContext';

const HomePage = () => {
  const { addToCart } = useCart();
  const [activeImageIndex, setActiveImageIndex] = useState({});
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const ugcScrollRef = useRef(null);

  // Handle horizontal scroll for UGC section
  const scrollUGC = (direction) => {
    if (ugcScrollRef.current) {
      const scrollAmount = 300;
      ugcScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&h=1080&fit=crop)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-velmora-cream tracking-wide animate-slide-up">
            Crafted to be Treasured
          </h1>
          <p className="mt-6 text-lg md:text-xl text-velmora-cream/90 max-w-xl animate-slide-up delay-200">
            Premium demi-fine jewelry designed for the modern woman. 
            Elegant pieces that elevate every moment.
          </p>
          <Link 
            to="/shop" 
            className="mt-10 btn-accent animate-slide-up delay-300"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-velmora-charcoal text-velmora-cream py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-xs md:text-sm uppercase tracking-[0.15em]">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline text-velmora-sand/40">·</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline text-velmora-sand/40">·</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline text-velmora-sand/40">·</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-20 md:py-28 bg-velmora-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl tracking-wide">Bestsellers</h2>
              <p className="mt-3 text-velmora-taupe">Our most loved pieces</p>
            </div>
            <Link 
              to="/shop" 
              className="hidden md:flex items-center gap-2 text-sm uppercase tracking-[0.15em] hover:text-velmora-gold transition-colors"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {products.map((product, index) => (
              <div 
                key={product.id}
                className="group"
                onMouseEnter={() => {
                  setHoveredProduct(product.id);
                  setActiveImageIndex(prev => ({ ...prev, [product.id]: 1 }));
                }}
                onMouseLeave={() => {
                  setHoveredProduct(null);
                  setActiveImageIndex(prev => ({ ...prev, [product.id]: 0 }));
                }}
              >
                {/* Product Card */}
                <div className="relative aspect-[3/4] bg-velmora-sand/20 overflow-hidden">
                  <img 
                    src={product.images[activeImageIndex[product.id] || 0]} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Quick Add Overlay */}
                  <div className={`absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'}`}>
                    <button 
                      onClick={() => addToCart(product)}
                      className="w-full bg-velmora-cream text-velmora-charcoal py-3 text-sm uppercase tracking-[0.15em] hover:bg-velmora-gold hover:text-white transition-colors"
                    >
                      Quick Add
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="mt-4 text-center">
                  <h3 className="font-serif text-sm tracking-[0.15em]">{product.shortName}</h3>
                  <p className="mt-1 text-velmora-gold font-medium">${product.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View All */}
          <div className="mt-8 md:hidden text-center">
            <Link to="/shop" className="btn-secondary inline-block">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* UGC Reel Strip */}
      <section className="py-16 bg-velmora-sand/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-8">
          <h2 className="font-serif text-3xl md:text-4xl text-center tracking-wide">
            Styled by You
          </h2>
        </div>

        {/* Scroll Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={() => scrollUGC('left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-velmora-cream shadow-lg flex items-center justify-center hover:bg-velmora-gold hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => scrollUGC('right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-velmora-cream shadow-lg flex items-center justify-center hover:bg-velmora-gold hover:text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Horizontal Scroll */}
          <div 
            ref={ugcScrollRef}
            className="flex gap-4 overflow-x-auto hide-scrollbar px-8"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {ugcContent.map((item) => (
              <div 
                key={item.id}
                className="flex-shrink-0 w-48 md:w-56"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="relative aspect-[9/16] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.caption}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <p className="absolute bottom-4 left-4 right-4 font-serif text-lg text-velmora-cream italic">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-20 md:py-28 bg-velmora-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl md:text-5xl text-center tracking-wide mb-12">
            Shop by Category
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map((category) => (
              <Link 
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group relative aspect-[4/5] overflow-hidden"
              >
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-3xl md:text-4xl text-velmora-cream tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {category.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 md:py-28 bg-velmora-sand/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&h=1000&fit=crop"
                alt="Our Story"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <span className="text-sm uppercase tracking-[0.2em] text-velmora-taupe">Our Story</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-4 tracking-wide">
                Crafted with Intention
              </h2>
              <p className="mt-6 text-velmora-taupe leading-relaxed">
                At Velmora, we believe jewelry should be more than an accessory—it should be a cherished part of your story. 
                Each piece is thoughtfully designed with premium materials, crafted to last and meant to be worn every day.
              </p>
              <p className="mt-4 text-velmora-taupe leading-relaxed">
                Our demi-fine collection bridges the gap between luxury and accessibility, 
                bringing you timeless designs that feel special without the exclusive price tag.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center gap-2 mt-8 text-sm uppercase tracking-[0.15em] hover:text-velmora-gold transition-colors group"
              >
                Learn More 
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-velmora-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl md:text-5xl text-center tracking-wide mb-12">
            What Our Clients Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="text-center p-8 bg-velmora-sand/10"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-velmora-taupe italic mb-6">"{testimonial.text}"</p>
                
                {/* Author */}
                <p className="font-medium">{testimonial.initials}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 md:py-28 bg-velmora-gold text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl tracking-wide">
            Join the Velmora Circle
          </h2>
          <p className="mt-4 text-white/80 max-w-md mx-auto">
            Subscribe for 10% off your first order and exclusive access to new collections.
          </p>
          
          <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white"
            />
            <button 
              type="submit"
              className="px-8 py-3 bg-velmora-charcoal text-white uppercase tracking-[0.15em] hover:bg-velmora-cream hover:text-velmora-charcoal transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;