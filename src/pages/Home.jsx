import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import TrustBar from '../components/home/TrustBar';
import ProductCard from '../components/ui/ProductCard';
import UGCRow from '../components/home/UGCRow';
import CategoryTiles from '../components/home/CategoryTiles';
import BrandStory from '../components/home/BrandStory';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';
import { products } from '../data/products';

const Home = () => {
  // Show 5 bestsellers (all products for now)
  const bestsellers = products.slice(0, 5);

  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[100dvh] min-h-[620px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[#1C1917]">
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=2000&q=85"
            alt="Velmora fine jewelry on model"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="heading-xl text-white mb-4 tracking-[-0.02em]">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-md mx-auto mb-8">
            Demi-fine jewelry for the modern woman. Timeless pieces, thoughtfully made.
          </p>
          <Link to="/shop" className="btn btn-gold inline-block">
            SHOP THE COLLECTION
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
          <div className="w-px h-12 bg-white/40" />
        </div>
      </section>

      <TrustBar />

      {/* Bestsellers */}
      <section className="py-16 bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-xs tracking-[0.15em] text-[#B8976A]">CURATED FOR YOU</span>
              <h2 className="heading-lg mt-1">Bestsellers</h2>
            </div>
            <Link to="/shop" className="hidden md:block text-sm tracking-widest hover:text-[#B8976A]">
              VIEW ALL →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link to="/shop" className="text-sm tracking-widest hover:text-[#B8976A]">
              VIEW ALL →
            </Link>
          </div>
        </div>
      </section>

      <UGCRow />

      <CategoryTiles />

      <BrandStory />

      <Testimonials />

      <Newsletter />

      <Footer />
    </div>
  );
};

export default Home;