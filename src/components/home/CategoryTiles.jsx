import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-32 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-widest text-velmora-taupe uppercase">Curated For You</span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-velmora-charcoal">Shop by Category</h2>
          <div className="w-16 h-px bg-velmora-gold mx-auto mt-6" />
        </div>

        {/* Category Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-velmora-charcoal/30 group-hover:bg-velmora-charcoal/40 transition-colors duration-300" />
              
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center transform transition-transform duration-300 group-hover:scale-110">
                  <h3 className="font-serif text-3xl md:text-4xl text-velmora-cream tracking-wide">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-sm text-velmora-cream/70 tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    SHOP NOW
                  </p>
                </div>
              </div>
              
              {/* Border */}
              <div className="absolute inset-4 border border-velmora-cream/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}