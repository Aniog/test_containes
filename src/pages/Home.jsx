import { FALLBACK_PRODUCTS } from '@/lib/constants';
import React, { useState, useEffect } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import BestsellersGrid from '@/components/home/BestsellersGrid';
import UGCReel from '@/components/home/UGCReel';
import CategoryTiles from '@/components/home/CategoryTiles';
import BrandStory from '@/components/home/BrandStory';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data: response, error } = await client
          .from('JewelryProduct')
          .select('*');

        if (error) throw error;
        setProducts(response?.data?.list?.length ? response.data.list : FALLBACK_PRODUCTS);
      } catch (err) {
        console.error('Failed to fetch products:', err);
        setProducts(FALLBACK_PRODUCTS);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="pt-0">
      <Hero />
      <TrustBar />
      <BestsellersGrid products={products} />
      <CategoryTiles />
      <UGCReel />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
