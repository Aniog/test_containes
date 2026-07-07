import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import BestsellersGrid from '@/components/home/BestsellersGrid';
import UGCReels from '@/components/home/UGCReels';
import CategoryTiles from '@/components/home/CategoryTiles';
import BrandStory from '@/components/home/BrandStory';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';
import { useProducts } from '@/hooks/useProducts';

export default function Home() {
  const { products, loading } = useProducts();
  const bestsellers = products.filter((p) => p.bestseller);

  return (
    <div>
      <HeroSection />
      <TrustBar />
      {loading ? (
        <div className="py-24 text-center">
          <div className="w-8 h-8 border-2 border-charcoal-200 border-t-gold-600 rounded-full animate-spin mx-auto" />
        </div>
      ) : (
        <BestsellersGrid products={bestsellers.length ? bestsellers : products.slice(0, 5)} />
      )}
      <UGCReels />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
