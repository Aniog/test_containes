import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

const CategorySection = () => {
  return (
    <section className="py-20 lg:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl text-velmora-charcoal mb-4">
            Shop by Category
          </h2>
          <div className="hairline max-w-16 mx-auto" />
        </div>

        {/* Category Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <Link 
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-velmora-sand"
            >
              {/* Background Image */}
              <img 
                src={category.image} 
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-velmora-charcoal/30 group-hover:bg-velmora-charcoal/40 transition-colors duration-300" />
              
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-serif text-3xl lg:text-4xl text-velmora-cream mb-2">
                    {category.name}
                  </h3>
                  <span className="inline-block text-xs uppercase tracking-widest text-velmora-cream/80 border border-velmora-cream/50 px-4 py-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
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
};

export default CategorySection;