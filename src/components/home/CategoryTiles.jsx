import { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-ink">Shop by Category</h2>
          <p className="mt-3 text-sm text-warm-500 font-sans">
            Find your perfect piece.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ category }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={`/shop?category=${category.slug}`}
      className="relative aspect-[4/5] overflow-hidden rounded-sm group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <div
        className={`absolute bottom-0 left-0 right-0 p-6 md:p-8 transition-all duration-500 ${
          hovered ? 'translate-y-0' : 'translate-y-4'
        }`}
      >
        <h3 className="font-serif text-2xl md:text-3xl text-white">{category.name}</h3>
        <p
          className={`text-xs tracking-wide-xl uppercase font-sans text-gold-300 mt-2 transition-all duration-500 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          Shop Now
        </p>
      </div>
    </Link>
  );
}