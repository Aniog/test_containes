import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts } from '@/api/product';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from '@/components/common/ProductCard';

const Bestsellers = () => {
  const [products, setProducts] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts({ isBestseller: true });
      setProducts(data);
    };
    loadProducts();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [products]);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-serif">The Bestsellers</h2>
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Most Loved Pieces</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-20 text-center">
        <Link
          to="/shop"
          className="text-sm uppercase tracking-widest border-b border-foreground pb-1 hover:border-primary hover:text-primary transition-all duration-300"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
};

export default Bestsellers;
