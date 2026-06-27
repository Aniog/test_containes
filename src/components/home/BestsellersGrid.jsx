import React, { useState, useEffect, useRef } from 'react';
import { fetchProducts } from '@/api/products';
import ProductCard from '@/components/shop/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BestsellersGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchProducts({ isBestseller: true });
        setProducts(data.slice(0, 5));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  useEffect(() => {
    if (!loading) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [loading, products]);

  return (
    <section ref={containerRef} className="py-24 bg-primary-bg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
          <div className="space-y-2">
            <h2 className="text-4xl font-serif">The Bestsellers</h2>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Loved by our community</p>
          </div>
          <a href="/shop" className="text-xs uppercase tracking-[0.2em] underline underline-offset-8 transition-opacity hover:opacity-70">
            View All Jewelry
          </a>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="space-y-4 animate-pulse">
                <div className="aspect-[4/5] bg-stone/20" />
                <div className="h-4 bg-stone/20 w-3/4 mx-auto" />
                <div className="h-4 bg-stone/20 w-1/4 mx-auto" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-12">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BestsellersGrid;
