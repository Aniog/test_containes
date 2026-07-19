import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
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

      <section className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 text-sm">
          <span>Free Worldwide Shipping</span>
          <span>30-Day Returns</span>
          <span>18K Gold Plated</span>
          <span>Hypoallergenic</span>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="font-serif text-4xl mb-8">Our Bestsellers</h2>
        <p className="text-gray-600">Discover our most loved pieces</p>
      </section>
    </div>
  );
};

export default HomePage;
