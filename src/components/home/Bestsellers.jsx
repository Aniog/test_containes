import { Link } from 'react-router-dom';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/data/products';

export default function Bestsellers() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[11px] tracking-[0.3em] uppercase text-velmora-gold font-medium mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-velmora-charcoal">
            Bestsellers
          </h2>
          <div className="w-16 h-[1px] bg-velmora-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-12">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <Link
            to="/shop"
            className="inline-block px-10 py-3.5 border border-velmora-charcoal text-velmora-charcoal text-xs tracking-[0.2em] uppercase font-medium hover:bg-velmora-charcoal hover:text-white transition-all duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
