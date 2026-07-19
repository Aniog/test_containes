import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const products = [
    { name: 'Vivid Aura Jewels', price: 42 },
    { name: 'Majestic Flora Nectar', price: 68 },
    { name: 'Golden Sphere Huggies', price: 38 },
    { name: 'Amber Lace Earrings', price: 54 },
    { name: 'Royal Heirloom Set', price: 95 }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-7xl mb-6">Crafted to be Treasured</h1>
          <p className="text-xl md:text-2xl mb-10 font-light">Demi-fine gold jewelry for everyday elegance</p>
          <Link
            to="/shop"
            className="inline-block bg-yellow-600 text-white px-10 py-4 text-sm tracking-widest hover:bg-yellow-500 transition-colors"
          >
            SHOP THE COLLECTION
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-gray-100 py-5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <span>✓ Free Worldwide Shipping</span>
            <span>✓ 30-Day Returns</span>
            <span>✓ 18K Gold Plated</span>
            <span>✓ Hypoallergenic</span>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="font-serif text-4xl mb-8">Bestsellers</h2>
        <p className="text-gray-600 mb-12">Our most loved pieces</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <div key={index} className="border p-4">
              <div className="bg-gray-200 h-48 mb-4 flex items-center justify-center">
                <span className="text-gray-400">{product.name}</span>
              </div>
              <h3 className="font-serif text-sm uppercase">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl mb-6">Join for 10% Off</h2>
          <p className="mb-8 text-gray-300">Subscribe to get exclusive offers and updates</p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
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
