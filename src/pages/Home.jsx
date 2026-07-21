import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ChevronRight } from 'lucide-react';
import Button from '../components/ui/button';
import { products, categories, testimonials } from '../data/products';

const Home = ({ onAddToCart }) => {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    setHeroLoaded(true);
  }, []);

  const bestsellers = products.filter((p) => p.bestseller);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] ease-out"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1600&q=80)',
            transform: heroLoaded ? 'scale(1)' : 'scale(1.1)',
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Crafted to be Treasured
          </h1>
          <p className="text-sm md:text-base tracking-widest uppercase mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Demi-fine jewelry for the modern woman
          </p>
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <Link to="/shop">
              <Button size="lg" className="bg-white text-[#1A1A1A] hover:bg-[#C9A96E] hover:text-white">
                Shop the Collection
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-[#F9F7F4] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-xs tracking-widest uppercase text-gray-600">
            {['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="w-1 h-1 bg-[#C9A96E] rounded-full" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Bestsellers</h2>
            <p className="text-gray-500 text-sm tracking-wide">Our most loved pieces</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/shop">
              <Button variant="outline">View All Products</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="py-16 bg-[#F9F7F4] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <h2 className="font-serif text-2xl md:text-3xl text-center">As Seen On</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 px-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex-shrink-0 w-64 h-[420px] relative rounded-sm overflow-hidden group">
              <img
                src={`https://images.unsplash.com/photo-${i % 2 === 0 ? '1611591437281-460bfbe1220a' : '1535632066927-ab7c9ab60908'}?w=400&q=80`}
                alt={`UGC ${i}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs tracking-widest uppercase opacity-80">@velmora_love</p>
                <p className="font-serif text-sm mt-1">Everyday elegance</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Shop by Category</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group relative h-80 md:h-96 overflow-hidden rounded-sm"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-serif text-2xl tracking-widest border-b border-white/50 pb-1 group-hover:border-white transition-colors">
                    {category.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 md:py-32 bg-[#F9F7F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80"
                alt="Our Story"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="max-w-lg">
              <h2 className="font-serif text-3xl md:text-4xl mb-6">Our Story</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Velmora was born from a belief that fine jewelry should be accessible, ethical, and effortlessly elegant. 
                Each piece is designed in our London studio and crafted with 18K gold plating over hypoallergenic brass, 
                ensuring lasting beauty without the luxury markup.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                From our family to yours — every Velmora piece arrives in recyclable packaging, ready to be treasured 
                or gifted.
              </p>
              <Link to="/about">
                <Button variant="outline" className="group">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="text-center p-8 bg-[#F9F7F4] rounded-sm">
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C9A96E] text-[#C9A96E]" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="w-10 h-10 rounded-full bg-[#C9A96E] text-white flex items-center justify-center mx-auto mb-2 font-serif">
                  {testimonial.initial}
                </div>
                <p className="text-sm font-medium">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 md:py-32 bg-[#1A1A1A] text-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Join for 10% Off</h2>
          <p className="text-gray-400 mb-8">Be the first to know about new collections and exclusive offers.</p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-3 bg-transparent border border-gray-700 text-white placeholder-gray-500 focus:border-[#C9A96E] focus:outline-none text-sm tracking-wide"
            />
            <Button type="submit" className="bg-[#C9A96E] hover:bg-[#B8944F] text-white">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

const ProductCard = ({ product, onAddToCart }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden rounded-sm bg-gray-100">
        <img
          src={hovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300`} />
        <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <button
            onClick={(e) => {
              e.preventDefault();
              onAddToCart(product);
            }}
            className="w-full bg-white text-[#1A1A1A] py-3 text-xs tracking-widest uppercase hover:bg-[#C9A96E] hover:text-white transition-colors"
          >
            Add to Bag
          </button>
        </div>
      </Link>
      <div className="mt-4">
        <h3 className="font-serif text-sm tracking-wide mb-1 group-hover:text-[#C9A96E] transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600">${product.price}</p>
      </div>
    </div>
  );
};

export default Home;
