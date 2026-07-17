import React, { useEffect, useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import ProductCard from '@/components/ui/ProductCard';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export default function Bestsellers() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data, error } = await client
          .from('Product')
          .select('*')
          .limit(5);

        if (error) throw error;
        setProducts(data?.data?.list || []);
      } catch (err) {
        console.error('Error fetching bestsellers:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-sm tracking-[0.3em] uppercase text-primary font-medium mb-4">Curated Classics</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-light text-center">The Bestsellers</h3>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[3/4] bg-gray-100 mb-4" />
                <div className="h-4 bg-gray-100 w-2/3 mx-auto mb-2" />
                <div className="h-4 bg-gray-100 w-1/3 mx-auto" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        <div className="mt-16 text-center">
          <Link 
            to="/shop" 
            className="text-[10px] tracking-[0.3em] uppercase font-bold text-gray-400 hover:text-primary transition-colors pb-1 border-b border-gray-200 hover:border-primary"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}

// Fixed import for Link
import { Link } from 'react-router-dom';
