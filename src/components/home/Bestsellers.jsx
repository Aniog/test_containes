import { Link } from 'react-router-dom';
import products from '../../data/products';
import ProductCard from '../shop/ProductCard';

export default function Bestsellers() {
  return (
    <section className="bg-velmora-bg py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-velmora-gold mb-3">
            Curated Selection
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-text font-light">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12 md:mt-16">
          <Link
            to="/shop"
            className="inline-block border border-velmora-gold text-velmora-gold px-8 py-3 text-[11px] font-medium tracking-[0.18em] uppercase hover:bg-velmora-gold hover:text-velmora-bg transition-all duration-300"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
