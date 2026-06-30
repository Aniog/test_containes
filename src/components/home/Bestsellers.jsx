import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';
import { getBestsellers } from '@/data/products';

export default function Bestsellers() {
  const products = getBestsellers().slice(0, 5);

  return (
    <section className="section-padding bg-ivory">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest text-gold mb-3">CUSTOMER FAVORITES</p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Bestsellers</h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link 
            to="/shop"
            className="inline-flex items-center gap-2 text-charcoal hover:text-gold transition-colors group"
          >
            <span className="text-sm font-medium tracking-wide">View All Products</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
