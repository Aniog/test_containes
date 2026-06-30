import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard';
import { fetchBestsellers } from '../../api/products';

export default function BestsellersSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBestsellers()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-base mb-3">
            Bestsellers
          </h2>
          <p className="font-sans text-sm text-text-secondary max-w-md mx-auto">
            Our most-loved pieces, chosen by women who know that the right
            jewelry transforms everything.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[3/4] bg-hairline mb-4" />
                <div className="h-3 bg-hairline w-2/3 mx-auto mb-2" />
                <div className="h-3 bg-hairline w-1/3 mx-auto" />
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                to="/shop"
                className="inline-block border border-base text-base font-sans text-xs uppercase tracking-widest font-medium px-10 py-4 hover:bg-base hover:text-surface transition-colors duration-300"
              >
                View All
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
