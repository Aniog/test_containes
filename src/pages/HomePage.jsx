import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Truck, RefreshCw, Shield, Sparkles, Play } from 'lucide-react';
import products from '../data/products';

export default function HomePage({ addToCart }) {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const testimonials = [
    { name: 'Sarah M.', initial: 'S', text: 'Absolutely love my Golden Sphere Huggies! The quality is incredible for the price. I wear them every day.' },
    { name: 'Emily R.', initial: 'E', text: 'The Majestic Flora necklace is even more beautiful in person. Packaging was gorgeous too — perfect gift.' },
    { name: 'Jessica L.', initial: 'J', text: 'Finally, gold-plated jewelry that doesn\'t irritate my skin. Velmora has become my go-to brand.' },
  ];

  const ugcItems = [
    { id: 1, image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80', caption: 'Everyday elegance' },
    { id: 2, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60939?w=400&q=80', caption: 'Stacked & styled' },
    { id: 3, image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80', caption: 'Golden hour glow' },
    { id: 4, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60939?w=400&q=80', caption: 'Minimalist vibes' },
    { id: 5, image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80', caption: 'Date night ready' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-velmora-black">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl mb-6 tracking-wide">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300 font-light">
            Demi-fine jewelry for the modern romantic
          </p>
          <Link
            to="/collection"
            className="inline-block bg-velmora-gold text-white px-8 py-4 hover:bg-velmora-goldDark transition-colors tracking-wider"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-velmora-cream border-y border-velmora-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
            <div className="flex items-center space-x-2">
              <Truck size={16} className="text-velmora-gold" />
              <span>Free Worldwide Shipping</span>
            </div>
            <div className="flex items-center space-x-2">
              <RefreshCw size={16} className="text-velmora-gold" />
              <span>30-Day Returns</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles size={16} className="text-velmora-gold" />
              <span>18K Gold Plated</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield size={16} className="text-velmora-gold" />
              <span>Hypoallergenic</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-serif text-4xl text-center mb-4">Bestsellers</h2>
        <p className="text-center text-gray-600 mb-12">Our most loved pieces</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <Link to={`/product/${product.id}`}>
                <div className="relative overflow-hidden mb-4 bg-velmora-lightGray">
                  <img
                    src={hoveredProduct === product.id ? product.images[1] : product.images[0]}
                    alt={product.name}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product);
                    }}
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-velmora-black px-6 py-2 text-sm tracking-wider hover:bg-velmora-gold hover:text-white transition-all opacity-0 group-hover:opacity-100"
                  >
                    Add to Cart
                  </button>
                </div>
                <h3 className="text-sm tracking-widest mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">${product.price}</p>
                <div className="flex items-center space-x-1">
                  <Star size={14} className="fill-velmora-gold text-velmora-gold" />
                  <span className="text-sm text-gray-600">{product.rating}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* UGC Reel Section */}
      <section className="bg-velmora-light-gray py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <h2 className="font-serif text-4xl text-center mb-4">Styled by You</h2>
          <p className="text-center text-gray-600">Join the Velmora community</p>
        </div>
        <div className="flex space-x-4 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 scrollbar-hide">
          {ugcItems.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-64 h-80 relative group cursor-pointer">
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity" />
              <div className="w-full h-full bg-velmora-lightGray flex items-center justify-center">
                <span className="text-gray-400 text-sm">UGC Image {item.id}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                <p className="font-serif text-lg">{item.caption}</p>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Play size={24} className="text-white" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-serif text-4xl text-center mb-12">Shop by Category</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Earrings', 'Necklaces', 'Huggies'].map((category) => (
            <Link
              key={category}
              to="/collection"
              className="relative group overflow-hidden bg-velmora-charcoal h-96 flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 transition-opacity" />
              <h3 className="relative text-white font-serif text-3xl tracking-widest group-hover:text-velmora-gold transition-colors">
                {category}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-velmora-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square bg-velmora-lightGray flex items-center justify-center">
              <span className="text-gray-400">Brand Image</span>
            </div>
            <div>
              <h2 className="font-serif text-4xl mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Velmora was born from a simple belief: luxury should be accessible. We create demi-fine jewelry
                that bridges the gap between precious and fashion — using 18K gold plating, ethically sourced materials,
                and timeless design to create pieces that become part of your daily ritual.
              </p>
              <Link
                to="/"
                className="inline-flex items-center text-velmora-gold hover:text-velmora-goldDark transition-colors tracking-wider"
              >
                Learn More <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-serif text-4xl text-center mb-12">What Our Customers Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 border border-velmora-border">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-velmora-gold text-velmora-gold" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-velmora-gold rounded-full flex items-center justify-center text-white font-serif">
                  {testimonial.initial}
                </div>
                <span className="font-serif">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-velmora-black text-white py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl mb-4">Join the Velmora Family</h2>
          <p className="text-gray-300 mb-8">
            Subscribe for 10% off your first order, plus exclusive access to new collections and styling tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-3 bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-velmora-gold"
            />
            <button
              type="submit"
              className="bg-velmora-gold text-white px-8 py-3 hover:bg-velmora-goldDark transition-colors tracking-wider"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
