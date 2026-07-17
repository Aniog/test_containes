import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import ProductGrid from '../components/home/ProductGrid';
import ReelsRow from '../components/home/ReelsRow';
import CategoryTiles from '../components/home/CategoryTiles';
import BrandStory from '../components/home/BrandStory';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';
import { fetchProducts } from '../api/products';
import { products as fallbackProducts } from '../lib/data';

const Home = () => {
  const containerRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data.length > 0 ? data : fallbackProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setProducts(fallbackProducts);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && containerRef.current && !loading) {
        return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [loading]);

  return (
    <div ref={containerRef} className="overflow-hidden">
      <Hero />
      <TrustBar />
      
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-[#C5A059] uppercase tracking-widest text-[10px] font-bold mb-2">Curated for you</p>
              <h2 className="text-3xl md:text-4xl font-serif">Bestsellers</h2>
            </div>
            <Link to="/shop" className="text-xs uppercase tracking-widest font-bold flex items-center group">
              View All <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          {loading ? (
            <div className="h-64 flex items-center justify-center font-serif text-neutral-400">Loading collection...</div>
          ) : (
            <ProductGrid products={products.slice(0, 5)} />
          )}
        </div>
      </section>

      <ReelsRow />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
