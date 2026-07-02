import React, { useEffect, useState, useRef } from 'react';
import { DataClient, ImageHelper } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from '@/components/product/ProductCard';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Bestsellers = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await client
          .from('VelmoraProduct')
          .select('*')
          .limit(5);

        if (error) throw error;
        setProducts(data?.list || []);
      } catch (err) {
        console.error('Error fetching bestsellers:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (!loading && products.length > 0) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [loading, products]);

  if (loading) return (
    <div className="py-24 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-velmora-gold border-t-transparent rounded-full animate-spin" />
    </div>
  );

  return (
    <section className="py-24 bg-velmora-bg" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Our Bestsellers</h2>
            <p className="text-velmora-grey tracking-wide">
              The foundational pieces of the Velmora woman. Versatile, elegant, and crafted to last a lifetime.
            </p>
          </div>
          <a href="/shop" className="text-sm uppercase tracking-ultra-wide border-b border-velmora-charcoal pb-1 font-medium hover:text-velmora-gold hover:border-velmora-gold transition-all duration-300">
            View All Jewelry
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
          {products.map((product, idx) => (
            <div key={product.id}>
              <ProductCard product={product.data ? { ...product.data, id: product.id } : product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
