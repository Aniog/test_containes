import { useEffect, useState } from 'react';
import { fetchBestsellers } from '../../api/products';
import ProductCard from '../ProductCard';

export default function Bestsellers() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBestsellers(5)
      .then((rows) => {
        setProducts(rows);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-velmora-stone mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide">
            Bestsellers
          </h2>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[3/4] bg-velmora-sand rounded mb-4" />
                <div className="h-4 bg-velmora-sand rounded w-3/4 mx-auto mb-2" />
                <div className="h-3 bg-velmora-sand rounded w-1/3 mx-auto" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
