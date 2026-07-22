import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import UGCReel from '../components/UGCReel';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import { products } from '../data/products';

function Home() {
  const bestsellers = products.filter(p => p.bestseller);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center px-4">
          <h1 className="font-serif text-5xl md:text-7xl tracking-wider uppercase mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Discover our collection of demi-fine gold jewelry, designed for everyday elegance.
          </p>
          <Link 
            to="/shop"
            className="inline-block bg-gray-900 text-white px-8 py-4 text-sm tracking-wider uppercase hover:bg-gray-800 transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm tracking-wider uppercase text-gray-600">
            <div className="flex items-center space-x-2">
              <span>Free Worldwide Shipping</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <span>30-Day Returns</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <span>18K Gold Plated</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <span>Hypoallergenic</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="font-serif text-3xl tracking-wider uppercase text-center mb-12">
          Bestsellers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="font-serif text-3xl tracking-wider uppercase text-center mb-12">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Earrings', 'Necklaces', 'Huggies'].map((category, index) => (
            <Link
              key={category}
              to={`/shop?category=${category}`}
              className="relative h-80 overflow-hidden group cursor-pointer block"
            >
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Category Image</span>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white font-serif text-2xl tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {category}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* UGC Reel */}
      <UGCReel />

      {/* Brand Story Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">Brand Image</span>
            </div>
            <div>
              <h2 className="font-serif text-4xl tracking-wider uppercase mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Velmora, we believe that fine jewelry should be accessible without compromising on quality. 
                Each piece in our collection is thoughtfully designed and crafted with care, using 18K gold 
                plating over high-quality base metals. Our demi-fine approach means you can build a 
                treasured jewelry collection at a price point that feels approachable.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From everyday essentials to special occasion pieces, Velmora is designed for the modern 
                woman who values quiet luxury and timeless elegance.
              </p>
              <Link
                to="/about"
                className="inline-block border border-gray-900 text-gray-900 px-8 py-3 text-sm tracking-wider uppercase hover:bg-gray-900 hover:text-white transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl tracking-wider uppercase mb-4">
            Join for 10% off your first order
          </h2>
          <p className="mb-8 max-w-md mx-auto text-gray-600">
            Subscribe to our newsletter for exclusive offers and new arrivals.
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900"
            />
            <button className="bg-gray-900 text-white px-6 py-3 text-sm tracking-wider uppercase hover:bg-gray-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
