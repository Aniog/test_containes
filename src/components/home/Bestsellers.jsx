import { ProductCard } from '@/components/ProductCard';
import { getBestsellers } from '@/data/products';
import { Link } from 'react-router-dom';

export function Bestsellers() {
  const bestsellers = getBestsellers();

  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p
            id="section-subtitle-bestsellers"
            className="text-velmora-stone uppercase tracking-[0.2em] text-sm mb-3"
          >
            Curated for You
          </p>
          <h2
            id="section-title-bestsellers"
            className="font-serif text-3xl md:text-5xl text-velmora-espresso"
          >
            Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <div key={product.id}>
              <span id={`product-title-${product.id}`} className="sr-only">
                {product.name}
              </span>
              <span id={`product-search-${product.id}`} className="sr-only">
                {product.searchTerms}
              </span>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/shop"
            className="inline-block px-8 py-3 border border-velmora-espresso text-velmora-espresso text-sm uppercase tracking-[0.14em] hover:bg-velmora-espresso hover:text-velmora-cream transition-colors duration-300"
          >
            Shop All Bestsellers
          </Link>
        </div>
      </div>
    </section>
  );
}
