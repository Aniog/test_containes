import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

export default function CategoryTiles() {
  return (
    <section className="section-padding bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-sans text-xs tracking-widest uppercase text-gold-600 mb-2 block">
            Explore
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-800">
            Shop by Category
          </h2>
          <div className="w-16 h-px bg-gold-500 mx-auto mt-4" />
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/collection?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal-900/30 group-hover:bg-charcoal-900/40 transition-colors duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="font-serif text-2xl sm:text-3xl text-cream-50 mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {category.name}
                </h3>
                <p className="font-sans text-xs tracking-widest uppercase text-cream-200/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                  {category.description}
                </p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                  <span className="inline-block border border-cream-50 text-cream-50 px-6 py-2 font-sans text-xs tracking-widest uppercase">
                    Shop Now
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
