import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-cream)]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)] mb-3">
            Explore
          </p>
          <h2 
            className="font-serif text-3xl md:text-4xl text-[var(--color-charcoal)]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Shop by Category
          </h2>
          <hr className="w-16 mx-auto mt-4 border-[var(--color-gold)]" />
        </div>
        
        {/* Category Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] rounded overflow-hidden"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-rich-black)]/70 via-[var(--color-rich-black)]/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <h3 
                  className="font-serif text-2xl md:text-3xl text-white mb-2 translate-y-0 group-hover:-translate-y-1 transition-transform duration-300"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {category.name}
                </h3>
                <p className="text-sm text-white/70 mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                  {category.description}
                </p>
                <div className="flex items-center gap-2 text-white text-xs uppercase tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                  <span>Shop Now</span>
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
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
