import React, { useState, useEffect } from 'react';
import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import Bestsellers from '@/components/home/Bestsellers';
import UGCReels from '@/components/home/UGCReels';
import CategoryTiles from '@/components/home/CategoryTiles';
import BrandStory from '@/components/home/BrandStory';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Home = () => {
  const [bestsellers, setBestsellers] = useState([]);

  useEffect(() => {
    const fetchBestsellers = async () => {
      try {
        const { data: response } = await client
          .from('Products')
          .select('*')
          .eq('isBestseller', true)
          .limit(5);
        
        if (response?.success) {
          setBestsellers(response.data.list);
        }
      } catch (error) {
        console.error('Error fetching bestsellers:', error);
      }
    };
    fetchBestsellers();
  }, []);

  return (
    <main className="pt-0">
      <Hero />
      <TrustBar />
      <Bestsellers products={bestsellers} />
      <UGCReels />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  );
};

export default Home;
