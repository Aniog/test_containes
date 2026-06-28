import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';

const Bestsellers = () => {
  const list = products.filter((p) => p.bestseller).slice(0, 5);

  return (
    <section className="bg-velmora-cream">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-velmora-gold mb-4">
              Loved by Velmora
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-velmora-ink leading-tight">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-xs uppercase tracking-[0.3em] text-velmora-ink border-b border-velmora-ink pb-1 self-start hover:text-velmora-gold hover:border-velmora-gold transition-colors"
          >
            Shop All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10 md:gap-x-6 md:gap-y-12">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
