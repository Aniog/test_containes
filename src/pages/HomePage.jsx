import React from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import ProductCard from '../components/ProductCard';
import UGCReelRow from '../components/UGCReelRow';
import CategoryTiles from '../components/CategoryTiles';
import BrandStory from '../components/BrandStory';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import products from '../data/products';

export default function HomePage() {
  const bestsellers = products.filter(p => p.featured).slice(0, 5);

  return (
    <div>
      <Hero />
      <TrustBar />
      
      {/* Bestsellers Section */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl text-center mb-4">Bestsellers</h2>
          <p className="text-center text-[#9A9590] mb-12 tracking-wide">Our most loved pieces</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {bestsellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <UGCReelRow />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
