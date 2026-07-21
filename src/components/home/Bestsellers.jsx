import { Link } from 'react-router-dom';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/data/products';

export default function Bestsellers() {
  const bestsellers = products.filter((p) => p.tags.includes('bestseller')).slice(0, 5);

  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-14 gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest-xl text-velmora-gold mb-3">
              Most Loved
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-espresso">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-xs uppercase tracking-widest font-medium text-velmora-coffee hover:text-velmora-gold transition-colors border-b border-current pb-1 self-start md:self-auto"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {bestsellers.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
