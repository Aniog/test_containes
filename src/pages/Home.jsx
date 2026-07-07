import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import Navigation from '../components/ui/Navigation';
import Footer from '../components/ui/Footer';
import CartDrawer from '../components/ui/CartDrawer';
import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import ProductCard from '../components/ui/ProductCard';
import UGCRow from '../components/home/UGCRow';
import CategoryTiles from '../components/home/CategoryTiles';
import BrandStory from '../components/home/BrandStory';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';

const Home = () => {
  const bestsellers = products.slice(0, 5);

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#2C2522]">
      <Navigation />
      
      <Hero />
      <TrustBar />

      {/* Bestsellers */}
      <section className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="font-serif text-3xl tracking-[1px]">Bestsellers</div>
            <p className="text-sm text-[#8B7355] mt-1 tracking-wide">Our most-loved pieces</p>
          </div>
          <Link to="/shop" className="text-sm tracking-[1.5px] text-[#8B7355] hover:text-[#2C2522] hidden md:block">
            VIEW ALL →
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-10 md:hidden">
          <Link to="/shop" className="text-sm tracking-[1.5px] text-[#8B7355]">VIEW ALL →</Link>
        </div>
      </section>

      <UGCRow />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
      
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Home;
