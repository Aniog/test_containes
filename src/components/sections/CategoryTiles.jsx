import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export function CategoryTiles() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-gold text-sm tracking-ultra-wide uppercase mb-3">Curated Collections</p>
          <h2 className="section-title">Shop by Category</h2>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm"
            >
              {/* Background image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/30 to-transparent" />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/20 transition-colors duration-300" />
              
              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-8 text-center">
                <h3 className="font-serif text-2xl md:text-3xl text-ivory mb-2">
                  {category.name}
                </h3>
                <p className="text-ivory/70 text-sm mb-4">
                  {category.description}
                </p>
                <span className="inline-flex items-center gap-2 text-gold text-sm font-medium tracking-wide opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Shop Now
                  <span className="w-4 h-px bg-gold" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
