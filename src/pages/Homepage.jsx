import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Truck, Shield, Sparkles, RefreshCw, Star, ArrowRight, Mail } from 'lucide-react';
import products from '../data/products';

export default function Homepage() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="font-serif text-5xl md:text-7xl mb-6 tracking-wide">
            CRAFTED TO BE TREASURED
          </h1>
          <p className="text-lg md:text-xl mb-10 font-light">
            Timeless pieces for life's most meaningful moments
          </p>
          <Link
            to="/shop"
            className="inline-block bg-yellow-600 text-white px-10 py-4 text-sm tracking-wider uppercase hover:bg-yellow-700 transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-gray-50 py-6 border-b">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8 text-sm text-gray-600">
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
      </section>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="font-serif text-4xl text-center mb-4">Bestsellers</h2>
        <p className="text-center text-gray-600 mb-12">Our most loved pieces</p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map(product => (
            <Link key={product.id} to={`/product/${product.id}`} className="group">
              <div className="relative overflow-hidden bg-gray-100 aspect-square mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-gray-900 px-6 py-2 text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Quick Add
                </button>
              </div>
              <h3 className="font-serif text-sm tracking-wider uppercase mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-1">{product.description}</p>
              <p className="font-medium">${product.price}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="font-serif text-4xl text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Earrings', 'Necklaces', 'Huggies'].map(category => (
            <Link
              key={category}
              to={`/shop?category=${category}`}
              className="relative h-80 bg-gray-100 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="font-serif text-3xl text-gray-900 group-hover:text-yellow-600 transition-colors">
                  {category}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-200 aspect-square" />
          <div>
            <h2 className="font-serif text-4xl mb-6">Our Story</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              At Velmora, we believe jewelry should be as unique as the moments it celebrates.
              Each piece is thoughtfully designed and crafted with the finest materials,
              creating timeless treasures that transcend trends and become part of your story.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 font-medium"
            >
              Learn More <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="font-serif text-4xl text-center mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Sarah', initial: 'S', text: 'Absolutely love my necklace! The quality is exceptional and it\'s become my everyday piece.', rating: 5 },
            { name: 'Emily', initial: 'E', text: 'Beautiful craftsmanship. The earrings are even more stunning in person.', rating: 5 },
            { name: 'Jessica', initial: 'J', text: 'Perfect gift for my sister. The packaging was luxurious and she teared up!', rating: 5 }
          ].map((review, idx) => (
            <div key={idx} className="bg-white p-8 border border-gray-200">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-600 text-white rounded-full flex items-center justify-center font-medium">
                  {review.initial}
                </div>
                <span className="font-medium">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-yellow-600 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="font-serif text-4xl mb-4">Join for 10% Off Your First Order</h2>
          <p className="mb-8 text-yellow-100">Subscribe to our newsletter for exclusive offers and new arrivals</p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 text-gray-900 placeholder-gray-500 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-white text-yellow-600 px-8 py-3 font-medium tracking-wider uppercase hover:bg-yellow-50 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
