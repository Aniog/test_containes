import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

export default function CategoryTiles() {
  return (
    <section className="py-20 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="font-serif text-4xl md:text-5xl text-velmora-charcoal">Shop by Category</h2>
          <p className="font-sans text-sm text-velmora-taupe mt-3 tracking-wide">
            Find your perfect piece
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link 
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden animate-slide-up opacity-0"
              style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
            >
              <img 
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-velmora-charcoal/30 group-hover:bg-velmora-charcoal/40 transition-colors duration-300" />
              
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-serif text-3xl md:text-4xl text-velmora-cream tracking-widest">
                    {category.name}
                  </h3>
                  <span className="inline-block mt-3 font-sans text-xs text-velmora-cream/80 tracking-widest uppercase opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
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