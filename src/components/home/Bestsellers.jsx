import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../products/ProductCard';
import { products } from '../../data/products';

export default function Bestsellers() {
  const bestsellers = products.slice(0, 5);

  return (
    <section className="section bg-[#faf8f5]">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-12">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl mb-2">Bestsellers</h2>
            <p className="text-[#6b6b6b]">Our most loved pieces</p>
          </div>
          <Link
            to="/shop"
            className="hidden md:flex items-center gap-2 text-sm tracking-wider hover:text-[#c9a962] transition-colors mt-4 md:mt-0"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-8 md:hidden text-center">
          <Link to="/shop" className="btn-outline text-sm">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
