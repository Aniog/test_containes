import { products } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';

const Bestsellers = () => {
  const bestsellers = products.filter(p => p.badge === 'Bestseller').slice(0, 5);
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-wide text-brand-ink">Bestsellers</h2>
          <p className="mt-2 text-sm text-brand-muted">The pieces our community wears most.</p>
        </div>
        <a href="/shop" className="hidden md:inline-flex text-sm font-medium text-brand-accent hover:text-brand-accentDark transition-colors">
          View all
        </a>
      </div>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {bestsellers.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="mt-8 text-center md:hidden">
        <a href="/shop" className="inline-flex text-sm font-medium text-brand-accent hover:text-brand-accentDark transition-colors">
          View all
        </a>
      </div>
    </section>
  );
};

export default Bestsellers;
