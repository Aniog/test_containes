import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from './ProductCard';

export default function BestsellersSection() {
  const bestsellers = products.slice(0, 5);

  return (
    <section className="section-padding bg-stone-50">
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="text-amber-700 text-sm tracking-[0.3em] uppercase mb-3">Most Loved</p>
          <h2 className="serif-heading text-4xl md:text-5xl text-stone-900">Bestsellers</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline inline-flex items-center gap-2">
            View All Pieces
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
