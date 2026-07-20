import React from 'react';
import { Link } from 'react-router-dom';
import { products, testimonials } from '../data/products';
import { Star, Truck, RefreshCw, Shield, ChevronRight, Plus } from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section - Full Bleed */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1600&q=80"
            alt="Velmora Fine Jewelry"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light mb-6 animate-fade-in-up">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-lg md:text-xl font-light mb-12 opacity-90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Timeless pieces for life's most precious moments
          </p>
          <Link
            to="/shop"
            className="inline-block bg-transparent border-2 border-white text-white px-12 py-4 text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-[#2C2C2C] transition-all duration-500 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#F5F0E8] py-6 lg:py-8">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 text-sm">
            {[
              { icon: Truck, text: 'Free Worldwide Shipping' },
              { icon: RefreshCw, text: '30-Day Returns' },
              { icon: Shield, text: '18K Gold Plated' },
              { icon: Shield, text: 'Hypoallergenic' }
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center space-x-3">
                <Icon size={18} className="text-[#C9A96E]" />
                <span className="tracking-wide">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-20 lg:py-[120px] px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-4">
            Bestsellers
          </h2>
          <div className="hairline w-24 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* UGC Reel-style Row */}
      <section className="py-20 lg:py-[120px] bg-[#F5F0E8] overflow-hidden">
        <div className="px-6 lg:px-12 mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-center">
            Worn by You
          </h2>
        </div>
        
        <div className="flex space-x-6 overflow-x-auto px-6 lg:px-12 pb-8 scrollbar-hide">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="flex-shrink-0 w-72 md:w-80 h-[500px] md:h-[600px] relative group cursor-pointer"
            >
              <img
                src={`https://images.unsplash.com/photo-${1535632066927 + item * 1000}?w=400&q=80`}
                alt="UGC Content"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <p className="text-white font-serif text-xl italic">
                  "Absolutely love my new pieces ✨"
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-20 lg:py-[120px] px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-4">
            Shop by Category
          </h2>
          <div className="hairline w-24 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Earrings', 'Necklaces', 'Huggies'].map((category) => (
            <Link
              key={category}
              to="/shop"
              className="relative h-96 overflow-hidden group cursor-pointer block"
            >
              <img
                src={`https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80`}
                alt={category}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h3 className="text-white font-serif text-3xl tracking-[0.15em] uppercase">
                  {category}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story Split Section */}
      <section className="py-20 lg:py-[120px] px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative h-[600px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
              alt="Velmora Story"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light">
              Our Story
            </h2>
            <div className="hairline w-16" />
            <p className="text-lg leading-relaxed opacity-80">
              At Velmora, we believe that fine jewelry should be accessible without compromising on quality. 
              Each piece in our collection is thoughtfully designed and crafted with the finest materials, 
              ensuring that every item tells a story and becomes a cherished part of your personal collection.
            </p>
            <p className="text-lg leading-relaxed opacity-80">
              From our studio to your jewelry box, we pour our hearts into creating pieces that celebrate 
              life's special moments and everyday elegance.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center space-x-2 text-[#C9A96E] hover:opacity-70 transition-opacity group"
            >
              <span className="text-sm tracking-[0.15em] uppercase">Discover Our Journey</span>
              <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-[120px] bg-[#F5F0E8] px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-4">
              Loved by Our Customers
            </h2>
            <div className="hairline w-24 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 lg:p-12 space-y-6">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-[#C9A96E] text-[#C9A96E]" />
                  ))}
                </div>
                <p className="text-lg leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#E8DDD0] rounded-full flex items-center justify-center">
                    <span className="text-[#C9A96E] font-serif text-xl">
                      {testimonial.initial}
                    </span>
                  </div>
                  <span className="font-medium">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Capture */}
      <section className="py-20 lg:py-[120px] px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto bg-[#2C2C2C] text-[#FAF7F2] p-12 lg:p-20 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">
            Join for 10% Off
          </h2>
          <p className="text-lg mb-12 opacity-80 max-w-2xl mx-auto">
            Subscribe to our newsletter and receive exclusive offers, early access to new collections, 
            and jewelry care tips.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 bg-transparent border border-[#FAF7F2]/30 text-[#FAF7F2] placeholder-[#FAF7F2]/50 focus:outline-none focus:border-[#C9A96E] transition-colors"
            />
            <button className="bg-[#C9A96E] text-[#2C2C2C] px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-[#D4B87A] transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// Product Card Component
function ProductCard({ product }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const { addToCart } = useCart();

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden mb-6 bg-[#F5F0E8]">
          <img
            src={isHovered ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-[#2C2C2C] px-8 py-3 text-sm tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-[#2C2C2C] hover:text-white"
          >
            <Plus size={16} className="inline mr-2" />
            Add to Cart
          </button>
        </div>
      </Link>
      
      <div className="space-y-2">
        <h3 className="product-name text-sm">{product.name}</h3>
        <p className="text-sm opacity-70">{product.description}</p>
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < Math.floor(product.rating) ? 'fill-[#C9A96E] text-[#C9A96E]' : 'text-[#E8DDD0]'}
              />
            ))}
          </div>
          <span className="text-sm opacity-70">({product.reviews})</span>
        </div>
        <p className="text-lg font-medium">${product.price}</p>
      </div>
    </div>
  );
}
