import React, { useEffect, useState } from 'react';
import ProductCard from '../products/ProductCard';
import { fetchBestsellers } from '../../api/products';
import { Link } from 'react-router-dom';

const Bestsellers = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchBestsellers();
        setProducts(data);
      } catch (err) {
        console.error('Failed to load bestsellers', err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-accent mb-4 block">Selected for you</span>
            <h2 className="text-4xl font-serif tracking-tight" id="bestsellers-title">The Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-xs uppercase tracking-widest border-b border-primary pb-1 hover:text-accent hover:border-accent transition-all">
            View All Jewelry
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 animate-pulse">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex flex-col">
                <div className="aspect-[3/4] bg-zinc-100 mb-4" />
                <div className="h-4 bg-zinc-100 w-2/3 mb-2" />
                <div className="h-4 bg-zinc-100 w-1/3" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-12">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Bestsellers;
