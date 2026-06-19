import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

export default function CategoryTiles() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl mb-4" style={{ color: 'var(--color-warm-black)' }}>
            Shop by Category
          </h2>
          <div className="hairline max-w-20 mx-auto" />
        </div>

        {/* Category Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="font-serif text-2xl md:text-3xl tracking-widest uppercase text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                >
                  {category.name}
                </span>
              </div>
              
              {/* Always visible label on mobile */}
              <div className="absolute bottom-6 left-6 md:hidden">
                <span
                  className="font-serif text-xl tracking-widest uppercase text-white"
                >
                  {category.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}