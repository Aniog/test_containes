import React, { useEffect, useRef, useState } from 'react';
import { DataClient, ImageHelper } from '@strikingly/sdk';
import { Link } from 'react-router-dom';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../../config.jsx';
import ProductCard from '../shop/ProductCard';
import strkImgConfig from '@/strk-img-config.json';

const Bestsellers = () => {
  const [products, setProducts] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);
      const { data: response } = await client.from('Products').select('*').limit(5);
      if (response?.data?.list) {
        setProducts(response.data.list);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [products]);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 id="bestsellers-title" className="text-3xl md:text-4xl font-serif">The Bestsellers</h2>
            <p className="text-muted-foreground uppercase tracking-widest text-xs">Curated pieces loved by our jewelry connoisseurs.</p>
          </div>
          <Link to="/shop" className="text-xs uppercase tracking-[0.2em] font-semibold border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-all">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-6">
          {products.map((item) => (
            <ProductCard key={item.id} product={item.data ? { ...item.data, id: item.id } : item} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Removed local Link helper to use react-router-dom Link

export default Bestsellers;
