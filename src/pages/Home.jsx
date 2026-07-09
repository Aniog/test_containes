import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../api/products';
import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import Bestsellers from '../components/home/Bestsellers';
import UGCReels from '../components/home/UGCReels';
import CategoryTiles from '../components/home/CategoryTiles';
import BrandStory from '../components/home/BrandStory';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';

const Home = () => {
  const [bestsellers, setBestsellers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBestsellers = async () => {
      try {
        const data = await fetchProducts({ isBestseller: true });
        setBestsellers(data);
      } catch (error) {
        console.error('Error loading bestsellers:', error);
      } finally {
        setLoading(false);
      }
    };
    loadBestsellers();
  }, []);

  return (
    <div className="space-y-0">
      <Hero />
      <TrustBar />
      <Bestsellers products={bestsellers} loading={loading} />
      <CategoryTiles />
      <UGCReels />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
