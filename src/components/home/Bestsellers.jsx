import { Link } from 'react-router-dom';
import ProductCard from '@/components/product/ProductCard';
import { getBestsellers } from '@/data/products';

export default function Bestsellers() {
  const bestsellers = getBestsellers();
  
  return (
    <section className="py-16 md:py-24 bg-[var(--color-cream)]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)] mb-3">
            Customer Favorites
          </p>
          <h2 
            className="font-serif text-3xl md:text-4xl text-[var(--color-charcoal)]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Our Bestsellers
          </h2>
          <hr className="w-16 mx-auto mt-4 border-[var(--color-gold)]" />
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              index={index}
            />
          ))}
        </div>
        
        {/* View All Link */}
        <div className="text-center mt-12">
          <Link 
            to="/shop"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-charcoal)] hover:text-[var(--color-gold)] transition-colors group"
          >
            <span className="uppercase tracking-[0.1em]">View All</span>
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
