import React from 'react';
import ProductCard from '@/components/ProductCard';
import {
  VividAuraImage,
  MajesticFloraImage,
  GoldenSphereImage,
  AmberLaceImage,
  RoyalHeirloomImage,
} from '@/components/ProductImages';
import { products } from '@/data/products';
import { useImageLoader } from '@/hooks/useImageLoader';

export default function Bestsellers() {
  const containerRef = useImageLoader();

  return (
    <section className="bg-ivory py-16 md:py-24" ref={containerRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center md:mb-14">
          <h2 className="font-serif text-3xl font-medium text-espresso md:text-4xl">
            Bestsellers
          </h2>
          <p className="mx-auto mt-3 max-w-md font-sans text-sm text-taupe">
            The pieces our community reaches for again and again.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-5">
          <ProductCard product={products[0]} image={<VividAuraImage />} />
          <ProductCard product={products[1]} image={<MajesticFloraImage />} />
          <ProductCard product={products[2]} image={<GoldenSphereImage />} />
          <ProductCard product={products[3]} image={<AmberLaceImage />} />
          <ProductCard product={products[4]} image={<RoyalHeirloomImage />} />
        </div>
      </div>
    </section>
  );
}
