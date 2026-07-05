import React from 'react';
import Hero from '@/components/home/hero';
import TrustBar from '@/components/home/trust-bar';
import ProductCard from '@/components/home/product-card';
import { products } from '@/data/products';
import UGCRow from '@/components/home/ugc-row';
import CategoryTiles from '@/components/home/category-tiles';
import BrandStory from '@/components/home/brand-story';
import Testimonials from '@/components/home/testimonials';
import Newsletter from '@/components/home/newsletter';
import Footer from '@/components/layout/footer';

const Homepage = () => {
  const bestsellers = products.filter((p) => p.badge === 'Bestseller' || p.reviewCount > 100).slice(0, 5);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-ink">
      <Hero />
      <TrustBar />

      <section className="bg-brand-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-serif text-3xl text-brand-ink">Bestsellers</h2>
              <p className="mt-2 text-sm text-brand-muted">Our most-loved pieces, chosen by you.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
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

export default Homepage;
