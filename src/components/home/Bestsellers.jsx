import { Link } from 'react-router-dom';
import ProductCard from '@/components/product/ProductCard';
import { products, getBestsellers } from '@/data/products';

const Bestsellers = () => {
  const bestsellers = products.slice(0, 5);
  
  return (
    <section className="section bg-[var(--color-bg-primary)]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--color-gold)] mb-3 block">
            Customer Favorites
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)]">
            Our Bestsellers
          </h2>
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* View All Link */}
        <div className="text-center mt-12">
          <Link 
            to="/collection"
            className="inline-flex items-center gap-2 text-sm tracking-wider uppercase text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] transition-colors group"
          >
            View All Pieces
            <svg 
              className="w-4 h-4 transition-transform group-hover:translate-x-1" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5"
            >
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
