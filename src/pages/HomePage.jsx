import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-light mb-6">
            Crafted to be<br />
            <span className="font-semibold">Treasured</span>
          </h1>
          <p className="text-lg mb-10 font-light">
            Demi-fine gold jewelry for everyday elegance
          </p>
          <a 
            href="/shop"
            className="inline-block bg-accent text-white px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-accent-hover transition-colors"
          >
            Shop the Collection
          </a>
        </div>
      </section>
      
      {/* Trust Bar */}
      <section className="bg-cream py-4 border-y">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 text-sm">
          <span>Free Worldwide Shipping</span>
          <span>30-Day Returns</span>
          <span>18K Gold Plated</span>
          <span>Hypoallergenic</span>
        </div>
      </section>
      
      {/* Simple Product Grid */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl text-center mb-12">Bestsellers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="text-center">
              <div className="bg-cream aspect-square mb-4 flex items-center justify-center">
                <span className="text-gray-400">Product Image {item}</span>
              </div>
              <h3 className="font-serif text-lg">Jewelry Piece {item}</h3>
              <p className="text-gray-600">$45.00</p>
            </div>
          ))}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HomePage;
