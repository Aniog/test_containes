import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Mail } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'VIVID AURA JEWELS',
    price: 42,
    description: 'Gold ear cuff with crystal accent',
    image: '/api/placeholder/400/400',
    category: 'earrings',
    bestseller: true
  },
  {
    id: 2,
    name: 'MAJESTIC FLORA NECTAR',
    price: 68,
    description: 'Multicolor floral crystal necklace',
    image: '/api/placeholder/400/400',
    category: 'necklaces',
    bestseller: true
  },
  {
    id: 3,
    name: 'GOLDEN SPHERE HUGGIES',
    price: 38,
    description: 'Chunky gold dome huggie earrings',
    image: '/api/placeholder/400/400',
    category: 'huggies',
    bestseller: true
  },
  {
    id: 4,
    name: 'AMBER LACE EARRINGS',
    price: 54,
    description: 'Textured gold filigree drop earrings',
    image: '/api/placeholder/400/400',
    category: 'earrings',
    bestseller: true
  },
  {
    id: 5,
    name: 'ROYAL HEIRLOOM SET',
    price: 95,
    description: 'Gift-boxed earring + necklace set',
    image: '/api/placeholder/400/400',
    category: 'sets',
    bestseller: true
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'Absolutely love my Velmora pieces. The quality is exceptional and they look so elegant.',
    initial: 'S'
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'Perfect for everyday wear. I get compliments every time I wear my necklace.',
    initial: 'E'
  },
  {
    id: 3,
    name: 'Jessica L.',
    rating: 5,
    text: 'The gold plating is beautiful and hasn\'t faded at all. Highly recommend!',
    initial: 'J'
  }
];

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 
            className="text-5xl md:text-7xl font-light mb-6"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Crafted to be Treasured
          </h1>
          <p className="text-lg md:text-xl mb-8 font-light">
            Demi-fine gold jewelry for the modern woman
          </p>
          <Link
            to="/shop"
            className="inline-block bg-amber-600 text-white px-10 py-4 text-sm tracking-wider uppercase hover:bg-amber-700 transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-gray-50 py-6 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <span className="font-semibold">✓</span>
              <span>Free Worldwide Shipping</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold">✓</span>
              <span>30-Day Returns</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold">✓</span>
              <span>18K Gold Plated</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold">✓</span>
              <span>Hypoallergenic</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 
          className="text-3xl md:text-4xl font-light text-center mb-12"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          Bestsellers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-gray-100 aspect-square mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 px-6 py-2 text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-900 hover:text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    // Add to cart logic here
                  }}
                >
                  Add to Cart
                </button>
              </div>
              <h3 className="text-sm tracking-wider uppercase mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-1">{product.description}</p>
              <p className="text-gray-900 font-semibold">${product.price}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 
          className="text-3xl md:text-4xl font-light text-center mb-12"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Earrings', 'Necklaces', 'Huggies'].map((category) => (
            <Link
              key={category}
              to={`/shop?category=${category.toLowerCase()}`}
              className="relative group overflow-hidden bg-gray-100 aspect-[4/5] flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <h3 
                className="text-2xl font-light text-gray-900 group-hover:text-amber-600 transition-colors"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {category}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-3xl md:text-4xl font-light text-center mb-12"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-amber-600 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    {testimonial.initial}
                  </div>
                  <span className="text-sm font-medium text-gray-900">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-amber-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail size={48} className="text-white mx-auto mb-6" />
          <h2 
            className="text-3xl md:text-4xl font-light text-white mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Join for 10% Off Your First Order
          </h2>
          <p className="text-white text-lg mb-8 font-light">
            Subscribe to our newsletter for exclusive offers and new arrivals
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="bg-white text-amber-600 px-8 py-3 text-sm tracking-wider uppercase hover:bg-gray-100 transition-colors"
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
