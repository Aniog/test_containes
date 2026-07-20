import { useState, useEffect, useRef } from 'react';
import { DataClient, ImageHelper } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { SEED_PRODUCTS } from '../constants/products';
import strkImgConfig from '../strk-img-config.json';
import HomeHero from '../components/home/HomeHero';
import Bestsellers from '../components/home/Bestsellers';
import UGCReel from '../components/home/UGCReel';
import CategoryTiles from '../components/home/CategoryTiles';
import BrandStory from '../components/home/BrandStory';
import Testimonials from '../components/home/Testimonials';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Home = () => {
  const [bestsellers, setBestsellers] = useState(SEED_PRODUCTS);
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [bestsellers]);

  useEffect(() => {
    const fetchBestsellers = async () => {
      try {
        const { data, error } = await client
          .from('Products')
          .select('*')
          .eq('isBestseller', true)
          .limit(5);

        if (!error && data?.success && data?.data?.list?.length > 0) {
          setBestsellers(data.data.list);
        }
      } catch (err) {
        console.error('Error fetching bestsellers, using seed data:', err);
      }
    };
    fetchBestsellers();
  }, []);

  return (
    <div ref={containerRef} className="animate-in fade-in duration-1000">
      <HomeHero />
      <Bestsellers products={bestsellers} />
      <UGCReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      
      {/* Newsletter Accent Block */}
      <section className="py-24 px-6 md:px-12 bg-accent/5">
        <div className="max-w-3xl mx-auto text-center space-y-8 p-12 md:p-20 border border-accent/20 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-accent/40" />
           <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-accent/40" />
           
           <h2 className="font-serif text-4xl md:text-5xl">Join the <span className="italic">Inner Circle</span></h2>
           <p className="font-sans text-muted text-sm uppercase tracking-widest leading-relaxed px-8">
             Be the first to explore new collections and editorial journals. Receive 10% off your first acquisition.
           </p>
           
           <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
             <input 
               type="email" 
               placeholder="EMAIL ADDRESS" 
               className="flex-1 bg-white border border-border px-6 py-4 text-[10px] tracking-widest focus:outline-none focus:border-accent transition-colors"
             />
             <button className="bg-foreground text-background px-10 py-4 uppercase text-[10px] tracking-widest font-bold hover:bg-accent transition-colors duration-500">
               Subscribe
             </button>
           </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
