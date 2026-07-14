import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

export default function CategoryTiles() {
  return (
    <section className="py-20 lg:py-32 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-ultra uppercase text-velmora-taupe">Browse By</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3 text-velmora-charcoal">Category</h2>
          <div className="w-16 h-px bg-velmora-gold mx-auto mt-6" />
        </div>

        {/* Category Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-velmora-sand"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-velmora-charcoal/20 group-hover:bg-velmora-charcoal/40 transition-colors duration-300" />
              
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="px-8 py-3 border border-velmora-cream text-velmora-cream text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {category.name}
                </span>
              </div>
              
              {/* Always visible label for mobile */}
              <span className="absolute bottom-6 left-1/2 -translate-x-1/2 md:hidden font-serif text-xl text-velmora-cream">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}