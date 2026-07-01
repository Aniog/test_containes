import { Link } from 'react-router-dom';
import { categories } from '../data/products';

export default function CategoryTiles() {
  return (
    <section className="py-section-mobile md:py-section bg-velmora-bg-primary">
      <div className="max-w-container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-text-primary mb-4">
            Shop by Category
          </h2>
          <div className="w-16 h-px bg-velmora-accent mx-auto" />
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-velmora-bg-secondary"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-velmora-bg-primary/40 group-hover:bg-velmora-bg-primary/20 transition-colors duration-300" />
              
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-2xl md:text-3xl text-velmora-text-primary tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {category.name}
                </span>
              </div>
              
              {/* Border on hover */}
              <div className="absolute inset-4 border border-velmora-text-primary/0 group-hover:border-velmora-text-primary/30 transition-colors duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}