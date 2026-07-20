import { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export default function Categories() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-gold font-medium mb-3">Explore</p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <CategoryTile key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryTile({ category }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={`/shop?category=${category.id}`}
      className="relative aspect-[4/5] overflow-hidden group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={category.image}
        alt={category.name}
        className={`w-full h-full object-cover transition-transform duration-700 ${hovered ? 'scale-105' : 'scale-100'}`}
      />
      <div className={`absolute inset-0 transition-colors duration-400 ${hovered ? 'bg-charcoal/30' : 'bg-charcoal/15'}`} />
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className={`font-serif text-2xl md:text-3xl text-white tracking-widest uppercase transition-all duration-400 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-90'}`}>
          {category.name}
        </h3>
      </div>
    </Link>
  );
}