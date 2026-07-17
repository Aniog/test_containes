import { Link } from 'react-router-dom';
import { ProductCard } from '@/components/product/ProductCard';
import { getBestsellers } from '@/data/products';

export function Bestsellers() {
  const bestsellers = getBestsellers();

  return (
    <section className="bg-velmora-bg py-16 md:py-24">
      <div className="px-5 md:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-14">
          <div>
            <span className="block mb-3 font-sans text-xs uppercase tracking-[0.25em] text-velmora-accent">
              Curated Favorites
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-text">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="mt-4 md:mt-0 font-sans text-xs uppercase tracking-widest text-velmora-muted hover:text-velmora-accent transition-colors underline underline-offset-4"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
