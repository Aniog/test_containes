import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import ProductCard from '../product/ProductCard';

const bestsellers = products.filter(p => p.tags.includes('bestseller'));

export default function Bestsellers() {
  return (
    <section className="bg-parchment py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink mb-4">Bestsellers</h2>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-gold text-gold font-sans text-xs font-semibold uppercase tracking-widest px-10 py-3.5 hover:bg-gold hover:text-obsidian transition-all duration-300"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
