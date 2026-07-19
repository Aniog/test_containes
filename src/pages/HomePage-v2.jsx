import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-7xl mb-6">Crafted to be Treasured</h1>
          <p className="text-xl md:text-2xl mb-8 font-light">Demi-fine gold jewelry for everyday elegance</p>
          <Link
            to="/shop"
            className="inline-block bg-yellow-600 text-white px-8 py-4 text-sm tracking-widest hover:bg-yellow-500 transition-colors"
          >
            SHOP THE COLLECTION
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 text-sm">
          <span>Free Worldwide Shipping</span>
          <span className="hidden md:inline">|</span>
          <span>30-Day Returns</span>
          <span className="hidden md:inline">|</span>
          <span>18K Gold Plated</span>
          <span className="hidden md:inline">|</span>
          <span>Hypoallergenic</span>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="font-serif text-4xl text-center mb-4">Bestsellers</h2>
        <p className="text-center text-gray-600 mb-12">Our most loved pieces</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Product Card 1 */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden bg-gray-200 aspect-square mb-4">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <span>Product Image</span>
              </div>
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 px-6 py-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Add to Cart
              </button>
            </div>
            <h3 className="font-serif text-sm tracking-wide uppercase mb-1">Vivid Aura Jewels</h3>
            <p className="text-gray-600 text-sm">$42</p>
          </div>

          {/* Product Card 2 */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden bg-gray-200 aspect-square mb-4">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <span>Product Image</span>
              </div>
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 px-6 py-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Add to Cart
              </button>
            </div>
            <h3 className="font-serif text-sm tracking-wide uppercase mb-1">Majestic Flora Nectar</h3>
            <p className="text-gray-600 text-sm">$68</p>
          </div>

          {/* Product Card 3 */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden bg-gray-200 aspect-square mb-4">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <span>Product Image</span>
              </div>
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 px-6 py-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Add to Cart
              </button>
            </div>
            <h3 className="font-serif text-sm tracking-wide uppercase mb-1">Golden Sphere Huggies</h3>
            <p className="text-gray-600 text-sm">$38</p>
          </div>

          {/* Product Card 4 */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden bg-gray-200 aspect-square mb-4">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <span>Product Image</span>
              </div>
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 px-6 py-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Add to Cart
              </button>
            </div>
            <h3 className="font-serif text-sm tracking-wide uppercase mb-1">Amber Lace Earrings</h3>
            <p className="text-gray-600 text-sm">$54</p>
          </div>

          {/* Product Card 5 */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden bg-gray-200 aspect-square mb-4">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <span>Product Image</span>
              </div>
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 px-6 py-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Add to Cart
              </button>
            </div>
            <h3 className="font-serif text-sm tracking-wide uppercase mb-1">Royal Heirloom Set</h3>
            <p className="text-gray-600 text-sm">$95</p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl mb-6">Join for 10% Off</h2>
          <p className="mb-8 text-gray-300">Subscribe to get exclusive offers and updates</p>
          <div className="flex max-w-md mx-auto flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 text-gray-900"
            />
            <button className="bg-yellow-600 text-white px-6 py-3 font-medium hover:bg-yellow-500 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
