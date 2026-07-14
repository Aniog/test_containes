import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
    count: 24,
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80',
    count: 18,
  },
  {
    id: 'huggies',
    name: 'Huggies',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80',
    count: 12,
  },
];

function CategorySection() {
  return (
    <section className="py-20 md:py-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
            Shop by Category
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Find your perfect piece across our carefully curated collections
          </p>
        </div>
        
        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/collections/${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">
                  {category.name}
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  {category.count} pieces
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-white border border-white/30 px-5 py-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
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

export default CategorySection;
