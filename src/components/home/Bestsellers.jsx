import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../product/ProductCard';
import { products } from '../../data/products';

function Bestsellers() {
  const bestsellerProducts = products.slice(0, 5);

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-primary">Bestsellers</h2>
            <p className="mt-2 text-secondary">Our most loved pieces</p>
          </div>
          <Link 
            to="/shop" 
            className="hidden md:flex items-center gap-2 text-sm tracking-wide hover:text-accent transition-colors group"
          >
            View All
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {bestsellerProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-8 md:hidden">
          <Link 
            to="/shop" 
            className="flex items-center justify-center gap-2 w-full py-3 border border-primary text-primary hover:bg-primary hover:text-text-light transition-colors"
          >
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Bestsellers;