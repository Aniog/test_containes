import React, { useEffect, useState } from 'react';
import { fetchProducts } from '@/api/products';
import ProductCard from '@/components/common/ProductCard';

const Bestsellers = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts({ featured: true });
        setProducts(data);
      } catch (error) {
        console.error('Error fetching bestsellers:', error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  if (loading) return null;

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl tracking-wider font-serif">The Bestsellers</h2>
          <p className="text-muted-foreground tracking-[0.2em] text-[10px] uppercase">
            Curated must-haves for your daily collection
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
          {products.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
