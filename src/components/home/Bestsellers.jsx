import { Link } from 'react-router-dom';
import ProductCard from '../product/ProductCard';
import { getBestsellers } from '../../data/products';

export default function Bestsellers() {
  const bestsellers = getBestsellers().slice(0, 5);

  return (
    <section className="section bg-[#FAFAF8]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1C1917] mb-4">
            Our Bestsellers
          </h2>
          <p className="text-[#57534E] max-w-md mx-auto">
            Discover the pieces our community can't stop wearing
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link 
            to="/shop"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.1em] uppercase text-[#1C1917] hover:text-[#C4A962] transition-colors group"
          >
            View All Pieces
            <span className="w-8 h-px bg-current transform transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
