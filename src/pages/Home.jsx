import React, { useState, useEffect } from 'react';
import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import ProductCard from '@/components/products/ProductCard';
import UGCReel from '@/components/home/UGCReel';
import CategoryTiles from '@/components/home/CategoryTiles';
import BrandStory from '@/components/home/BrandStory';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Home = () => {
  const [bestsellers, setBestsellers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBestsellers = async () => {
      try {
        const { data: response } = await client
          .from('Product')
          .select('*')
          .eq('is_bestseller', true)
          .limit(5);
        
        setBestsellers(response?.data?.list || []);
      } catch (err) {
        console.error('Failed to fetch bestsellers:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchBestsellers();
  }, []);

  return (
    <div className="bg-white">
      <Hero />
      <TrustBar />

      {/* Bestsellers Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="space-y-4">
            <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-velmora-gold">Curated Favorites</span>
            <h2 className="text-4xl md:text-5xl font-serif">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-velmora-charcoal border-b border-velmora-charcoal pb-1 uppercase tracking-widest text-xs font-bold hover:text-velmora-gold hover:border-velmora-gold transition-all duration-300">
            View All Jewelry
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-6 md:gap-x-10">
          {loading ? (
             [...Array(5)].map((_, i) => (
               <div key={i} className="space-y-4 animate-pulse">
                 <div className="aspect-[4/5] bg-velmora-cream rounded-sm" />
                 <div className="h-4 bg-velmora-cream w-2/3 mx-auto" />
                 <div className="h-4 bg-velmora-cream w-1/3 mx-auto" />
               </div>
             ))
          ) : (
            bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </section>

      <UGCReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

// Import needed for Link in Section Header
import { Link } from 'react-router-dom';

export default Home;
