import { Link } from 'react-router-dom';
import ProductCard from '../common/ProductCard';

const Bestsellers = ({ products }) => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <h2 className="font-serif text-4xl md:text-5xl">The Bestsellers</h2>
        <p className="font-sans text-muted uppercase tracking-[0.2em] text-[11px] font-semibold">Treasured pieces loved by you</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link to="/shop" className="border-b-2 border-accent pb-1 text-[11px] uppercase tracking-widest font-bold hover:text-accent transition-colors">
          View All Jewelry
        </Link>
      </div>
    </section>
  );
};
export default Bestsellers;

