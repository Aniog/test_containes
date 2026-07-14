import React, { useState, useEffect } from 'react';
import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import ProductCard from '@/components/ProductCard';
import UGCSection from '@/components/home/UGCSection';
import CategoryTiles from '@/components/home/CategoryTiles';
import BrandStory from '@/components/home/BrandStory';
import Testimonials from '@/components/home/Testimonials';
import { getProducts } from '@/api/products';

const Home = () => {
  const [bestsellers, setBestsellers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBestsellers = async () => {
      try {
        const data = await getProducts();
        setBestsellers(data.filter(p => p.data.isBestseller).slice(0, 5));
      } catch (err) {
        console.error('Error fetching bestsellers:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchBestsellers();
  }, []);

  return (
    <div className="flex flex-col">
      <Hero />
      <TrustBar />
      
      {/* Bestsellers Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
               <span className="text-xs uppercase tracking-[0.3em] text-accent font-sans">Curated Styles</span>
               <h2 className="text-4xl md:text-5xl font-serif">The Bestsellers</h2>
            </div>
            <a href="/shop" className="text-xs uppercase tracking-[0.3em] font-medium border-b border-foreground pb-1 hover:text-accent transition-colors">
              View All Jewelry
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-10">
            {loading ? (
              [...Array(5)].map((_, i) => (
                <div key={i} className="space-y-4 animate-pulse">
                  <div className="aspect-[3/4] bg-stone-100" />
                  <div className="h-4 bg-stone-100 w-3/4 mx-auto" />
                  <div className="h-4 bg-stone-100 w-1/2 mx-auto" />
                </div>
              ))
            ) : (
              bestsellers.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </div>
        </div>
      </section>

      <CategoryTiles />
      <UGCSection />
      <BrandStory />
      <Testimonials />

      {/* Newsletter Section */}
      <section className="py-24 px-6 bg-accent text-white flex flex-col items-center text-center">
        <div className="max-w-2xl space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif">Join for 10% off your first order</h2>
          <p className="text-white/80 uppercase tracking-widest text-xs font-sans">
            BE THE FIRST TO KNOW ABOUT NEW RELEASES AND EXCLUSIVE OFFERS.
          </p>
          <form className="flex flex-col md:flex-row w-full gap-4 pt-4">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="flex-grow bg-white/10 border border-white/20 px-6 py-4 text-xs tracking-widest outline-none focus:border-white transition-colors placeholder:text-white/40 font-serif"
            />
            <button className="bg-white text-foreground px-10 py-4 text-xs font-medium uppercase tracking-[0.2em] hover:bg-stone-100 transition-colors duration-300">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
