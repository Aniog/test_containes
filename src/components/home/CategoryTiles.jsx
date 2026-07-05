import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-content mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl mb-3">
            Shop by Category
          </h2>
          <p className="text-text-secondary font-sans">
            Find your perfect piece
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/collection?category=${category.id}`}
              className="group relative aspect-[3/4] md:aspect-[3/4] overflow-hidden rounded-lg"
            >
              {/* Background Image */}
              <img
                src={`https://picsum.photos/seed/${category.imageId}/600/800`}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/80" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-1">
                  {category.name}
                </h3>
                <p className="font-sans text-sm text-white/80 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {category.description}
                </p>
                <div className="mt-3 flex items-center gap-2 opacity-0 translate-y-4 transition-all duration-300 delay-75 group-hover:opacity-100 group-hover:translate-y-0">
                  <span className="font-sans text-xs text-white tracking-widest uppercase">
                    Shop Now
                  </span>
                  <span className="w-8 h-px bg-accent" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
