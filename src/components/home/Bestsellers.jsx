import React, { useEffect, useState, useRef } from 'react';
import { DataClient, ImageHelper } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import ProductCard from '@/components/ui/ProductCard';
import strkImgConfig from '@/strk-img-config.json';

const Bestsellers = () => {
  const [products, setProducts] = useState([]);
  const containerRef = useRef(null);
  const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

  useEffect(() => {
    const fetchBestsellers = async () => {
      const { data: response } = await client
        .from('JewelryProduct')
        .select('*')
        .eq('isBestseller', true)
        .limit(5);
      
      if (response?.data?.list) {
        setProducts(response.data.list.map(item => ({ id: item.id, ...item.data })));
      }
    };
    fetchBestsellers();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [products]);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-xs font-sans uppercase tracking-[0.3em] text-[#9D8C70] mb-4 block">Most Loved</span>
            <h2 className="text-4xl md:text-5xl font-serif">Bestselling Pieces</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-xs uppercase tracking-luxury border-b border-[#1A1A1A] pb-1 hover:opacity-70 transition-opacity">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
           <Link to="/shop" className="text-xs uppercase tracking-luxury border-b border-[#1A1A1A] pb-1">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

import { Link } from 'react-router-dom';
export default Bestsellers;
