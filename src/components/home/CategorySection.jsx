import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

export default function CategorySection() {
  return (
    <section className="section bg-bg">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-xs font-medium tracking-extra-wide uppercase text-accent mb-2 block">
            Curated Collections
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-text">
            Shop by Category
          </h2>
        </div>

        {/* Category Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
              
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="px-6 py-3 bg-white/95 backdrop-blur-sm text-text text-sm font-medium tracking-extra-wide uppercase transition-all duration-300 group-hover:bg-accent group-hover:text-white">
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
