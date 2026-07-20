import React, { useState } from 'react';
import { products, categories, testimonials } from '../data/products';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Truck, RefreshCw, Shield, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gray-900">
          <img 
            src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80" 
            alt="Hero" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide" style={{ fontFamily: 'var(--font-serif)' }}>
            Crafted to be Treasured
          </h1>
          <p className="text-lg md:text-xl mb-12 font-light">
            Demi-fine jewelry for life's most meaningful moments
          </p>
          <Link
            to="/collection"
            className="inline-block bg-white text-gray-900 px-10 py-4 tracking-wider uppercase text-sm hover:bg-gray-100 transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-gray-50 py-6 border-y border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Truck size={18} />
              <span>Free Worldwide Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <RefreshCw size={18} />
              <span>30-Day Returns</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles size={18} />
              <span>18K Gold Plated</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={18} />
              <span>Hypoallergenic</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl text-center mb-12 font-light" style={{ fontFamily: 'var(--font-serif)' }}>
            Bestsellers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.filter(p => p.bestseller).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl text-center mb-12 font-light" style={{ fontFamily: 'var(--font-serif)' }}>
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map(category => (
              <Link
                key={category.id}
                to="/collection"
                className="relative h-80 overflow-hidden group cursor-pointer block"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h3 className="text-white text-3xl tracking-wider uppercase font-light" style={{ fontFamily: 'var(--font-serif)' }}>
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
                alt="Velmora jewelry"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl mb-6 font-light" style={{ fontFamily: 'var(--font-serif)' }}>
                Our Story
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Velmora, we believe that jewelry should be as unique as the moments it marks.
                Founded with a passion for accessible luxury, we create demi-fine pieces that blend
                timeless elegance with contemporary design.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm tracking-wider uppercase hover:gap-4 transition-all"
              >
                Discover More
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl text-center mb-12 font-light" style={{ fontFamily: 'var(--font-serif)' }}>
            Loved by Our Customers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="text-center p-8 bg-white rounded-lg">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm">
                    {testimonial.initial}
                  </div>
                  <span className="text-sm font-medium">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-4xl md:text-5xl mb-4 font-light" style={{ fontFamily: 'var(--font-serif)' }}>
            Join the Family
          </h2>
          <p className="text-gray-400 mb-8">
            Subscribe for 10% off your first order, plus exclusive access to new collections and private sales.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-6 py-3 bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-gray-600"
            />
            <button
              type="submit"
              className="bg-white text-gray-900 px-8 py-3 tracking-wider uppercase text-sm hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden mb-4 bg-gray-100">
          <img
            src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-gray-900 px-6 py-2 text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            Add to Cart
          </button>
        </div>
      </Link>
      <div>
        <h3 className="text-sm tracking-wider uppercase mb-1" style={{ fontFamily: 'var(--font-serif)' }}>
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mb-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < Math.floor(product.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>
        <p className="text-gray-900">${product.price}</p>
      </div>
    </div>
  );
};

export default Home;
