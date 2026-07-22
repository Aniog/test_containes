import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  return (
    <section className="section-padding bg-brand-bg-secondary">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="serif-heading text-3xl md:text-4xl text-brand-text-primary">
            Shop by Category
          </h2>
        </div>

        {/* Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/collection?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden rounded-sm"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
                <h3 className="font-serif text-2xl md:text-3xl text-brand-text-primary mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {category.name}
                </h3>
                <p className="text-sm text-brand-text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {category.description}
                </p>
                <span className="mt-4 text-xs font-medium uppercase tracking-wider text-brand-gold border border-brand-gold px-4 py-2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-150 -translate-y-4 group-hover:translate-y-0">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
