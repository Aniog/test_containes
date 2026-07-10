import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/common/ProductCard';

export default function BestsellersSection() {
  const bestsellers = products.filter(p => p.tags?.includes('bestseller'));

  return (
    <section className="py-20 lg:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="font-manrope text-xs tracking-[0.2em] uppercase text-champagne mb-3">Our Favourites</p>
            <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-obsidian">Bestsellers</h2>
          </div>
          <Link
            to="/shop"
            className="flex items-center gap-2 font-manrope text-xs tracking-wider uppercase text-stone-600 hover:text-obsidian transition-colors group"
          >
            View All
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
