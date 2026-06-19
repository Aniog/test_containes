import React, { useState, useEffect } from 'react';
import { Hero } from '@/components/home/Hero';
import { TrustBar } from '@/components/home/TrustBar';
import { Bestsellers } from '@/components/home/Bestsellers';
import { CategoryGrid } from '@/components/home/CategoryGrid';
import { ReelsFeed } from '@/components/home/ReelsFeed';
import { BrandStory } from '@/components/home/BrandStory';
import { Testimonials } from '@/components/home/Testimonials';
import { Newsletter } from '@/components/home/Newsletter';
import { fetchProducts } from '@/api/products';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div className="pt-0">
      <Hero />
      <TrustBar />
      {!loading && <Bestsellers products={products} />}
      <CategoryGrid />
      <ReelsFeed />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
