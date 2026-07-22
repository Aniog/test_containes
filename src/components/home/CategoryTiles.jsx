import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

export default function CategoryTiles() {
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block font-sans text-xs tracking-ultra-wide text-accent mb-4 uppercase">
            Shop by Category
          </span>
          <h2 className="heading-serif text-3xl md:text-4xl">
            Find Your Style
          </h2>
        </div>

        {/* Category Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden rounded-xl"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent 
                              group-hover:from-espresso/90 group-hover:via-espresso/30 transition-all duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <span
                  className="font-serif text-2xl md:text-3xl text-ivory-100 transition-all duration-300
                             group-hover:scale-110"
                  style={{ letterSpacing: '0.15em' }}
                >
                  {category.name}
                </span>
              </div>

              {/* Hover border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-ivory-100/30 
                              rounded-xl transition-all duration-300 m-3" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
