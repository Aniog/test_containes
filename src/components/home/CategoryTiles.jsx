import { Link } from 'react-router-dom';
import { categoryTiles } from '../../data/products';

export default function CategoryTiles() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1C1917] mb-4">
            Shop by Category
          </h2>
          <p className="text-[#57534E]">
            Find your perfect piece
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categoryTiles.map((category, index) => (
            <Link
              key={category.id}
              to={category.href}
              className="group relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-lg"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-300" />
              
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center transform transition-transform duration-300 group-hover:-translate-y-2">
                  <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">
                    {category.name}
                  </h3>
                  <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-white/80 border-b border-white/40 pb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
