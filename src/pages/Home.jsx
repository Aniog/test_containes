import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import ProductCard from '@/components/product/ProductCard';
import UGCStrip from '@/components/home/UGCStrip';
import CategoryTiles from '@/components/home/CategoryTiles';
import BrandStory from '@/components/home/BrandStory';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';
import products, { bestsellerIds } from '@/data/products';

export default function Home() {
  const containerRef = useRef(null);
  const bestsellers = bestsellerIds.map((id) => products.find((p) => p.id === id)).filter(Boolean);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      <Hero />
      <TrustBar />

      {/* Bestsellers */}
      <section className="py-20 md:py-24 bg-ivory">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <h2 className="font-serif text-2xl md:text-3xl text-center mb-2 text-[#1A1A1A] tracking-wide">
            Bestsellers
          </h2>
          <p className="text-sm text-[#6B6560] text-center mb-10 md:mb-14 font-light">
            The pieces our community loves most
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <UGCStrip />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
