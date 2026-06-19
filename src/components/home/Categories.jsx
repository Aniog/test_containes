import { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

function CategoryTile({ category }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to="/shop"
      className="relative aspect-[4/5] overflow-hidden rounded-sm group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={category.image}
        alt={category.name}
        className={`h-full w-full object-cover transition-transform duration-700 ease-luxury ${
          hovered ? 'scale-105' : 'scale-100'
        }`}
        loading="lazy"
      />
      <div
        className={`absolute inset-0 bg-ink-900/30 transition-opacity duration-500 ${
          hovered ? 'opacity-50' : 'opacity-30'
        }`}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={`font-serif text-xl sm:text-2xl text-cream-50 tracking-widest uppercase transition-all duration-500 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-90 translate-y-0'
          }`}
        >
          {category.name}
        </span>
      </div>
      <div
        className={`absolute bottom-6 left-0 right-0 flex justify-center transition-all duration-500 ${
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <span className="text-xs tracking-widest uppercase text-cream-100 border-b border-cream-100 pb-0.5">
          Shop Now
        </span>
      </div>
    </Link>
  );
}

export default function Categories() {
  return (
    <section className="bg-cream-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.35em] uppercase text-gold-600 font-medium mb-3">
            Explore
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink-900">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <CategoryTile key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
