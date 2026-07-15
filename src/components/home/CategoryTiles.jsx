import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block font-sans text-sm tracking-widest text-gold uppercase mb-3">
            Explore
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
            Shop by Category
          </h2>
        </div>

        {/* Category tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] rounded-xl overflow-hidden"
            >
              {/* Background image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
                <h3 className="font-serif text-2xl md:text-3xl text-ivory mb-2 transition-transform duration-300 group-hover:-translate-y-2">
                  {category.name}
                </h3>
                <p className="font-sans text-sm text-ivory/70 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {category.description}
                </p>
                <div className="mt-4 w-8 h-px bg-gold opacity-0 translate-y-2 transition-all duration-300 delay-100 group-hover:opacity-100 group-hover:translate-y-0" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
