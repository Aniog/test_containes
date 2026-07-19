import { products } from '@/lib/data';
import ProductCard from '@/components/ui/ProductCard';
import { Link } from 'react-router-dom';

const Bestsellers = () => {
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="serif-heading text-3xl lg:text-4xl mb-2">Bestsellers</h2>
            <p className="text-velmora-taupe italic text-sm font-serif">Most loved pieces by our community</p>
          </div>
          <Link to="/shop" className="text-xs uppercase tracking-widestest border-b border-velmora-charcoal pb-1 hover:text-velmora-gold hover:border-velmora-gold transition-colors">
            Shop All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-12">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
