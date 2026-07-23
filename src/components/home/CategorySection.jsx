import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Studs, drops & statement pieces',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
    count: 2,
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Chains, pendants & layering',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    count: 1,
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Everyday elegance',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80',
    count: 1,
  },
];

const CategoryCard = ({ category }) => {
  return (
    <Link
      to={`/shop?category=${category.id}`}
      className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={category.image}
        alt={category.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/40 transition-colors duration-300" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
        <h3 className="font-serif text-2xl md:text-3xl text-ivory mb-2">
          {category.name}
        </h3>
        <p className="text-xs text-ivory/80 tracking-wide mb-4">
          {category.description}
        </p>
        
        {/* Hover Arrow */}
        <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <span className="inline-flex items-center gap-1 text-xs text-gold tracking-[0.2em] uppercase font-medium">
            Shop Now
            <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>

      {/* Count Badge */}
      <div className="absolute top-4 right-4">
        <span className="px-2 py-1 bg-ivory/10 backdrop-blur-sm text-[10px] text-ivory tracking-wide">
          {category.count} {category.count === 1 ? 'Piece' : 'Pieces'}
        </span>
      </div>
    </Link>
  );
};

const CategorySection = () => {
  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gold text-xs font-medium tracking-[0.3em] uppercase mb-3">
            Explore Our Collection
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal">
            Shop by Category
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
