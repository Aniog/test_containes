import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, RotateCcw, Sparkles, Shield } from 'lucide-react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import HeroSection from '../components/home/HeroSection';
import TrustBar from '../components/home/TrustBar';
import UGCReelSection from '../components/home/UGCReelSection';
import CategoryTiles from '../components/home/CategoryTiles';
import BrandStorySection from '../components/home/BrandStorySection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import NewsletterSection from '../components/home/NewsletterSection';

export default function HomePage() {
  const bestsellers = products.filter(p => p.badge === 'Bestseller' || p.rating >= 4.8);

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Trust Bar */}
      <TrustBar />

      {/* Bestsellers Section */}
      <section className="container-premium py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Bestsellers</h2>
          <div className="hairline w-16 mx-auto mb-6"></div>
          <p className="text-charcoal-light text-sm md:text-base max-w-2xl mx-auto">
            Our most loved pieces, cherished by customers worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="btn-secondary inline-flex items-center gap-2"
          >
            View All Collections
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* UGC Reel Section */}
      <UGCReelSection />

      {/* Shop by Category */}
      <CategoryTiles />

      {/* Brand Story Section */}
      <BrandStorySection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
}
