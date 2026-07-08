import React, { useEffect, useState } from 'react';
import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import Bestsellers from '@/components/home/Bestsellers';
import UGCRow from '@/components/home/UGCRow';
import CategoryTiles from '@/components/home/CategoryTiles';
import BrandStory from '@/components/home/BrandStory';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';
import { fetchProducts } from '@/api/products';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then((rows) => {
        setProducts(rows);
      })
      .catch((err) => {
        console.error('Failed to load products:', err);
      })
      .finally(() => setLoading(false));
  }, []);

  const bestsellers = products
    .filter((p) => {
      const d = p.data || p;
      return d.is_bestseller;
    })
    .slice(0, 5);

  return (
    <main>
      <HeroSection />
      <TrustBar />
      {loading ? (
        <div className="py-20 text-center text-taupe text-sm uppercase tracking-widest">
          Loading...
        </div>
      ) : (
        <Bestsellers products={bestsellers.length ? bestsellers : products.slice(0, 5)} />
      )}
      <UGCRow />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
