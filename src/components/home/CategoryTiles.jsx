import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '../../data/products';

const catGradients = {
  earrings: 'from-velmora-warm via-velmora-sand to-velmora-cream',
  necklaces: 'from-velmora-cream via-velmora-warm to-velmora-sand',
  huggies: 'from-velmora-sand via-velmora-cream to-velmora-warm',
};

export default function CategoryTiles() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-24">
      {/* Heading */}
      <div className="text-center mb-14">
        <p className="text-velmora-gold text-xs tracking-super uppercase mb-4">Curated For You</p>
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-dark">Shop by Category</h2>
        <div className="w-12 h-px bg-velmora-gold/30 mx-auto mt-6" />
      </div>

      {/* Tiles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.name}`}
            className="group relative aspect-[4/5] overflow-hidden rounded-sm"
          >
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${catGradients[cat.id]} transition-transform duration-700 group-hover:scale-105`} />

            {/* Jewelry silhouette */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2/3 h-2/3 rounded-full bg-velmora-gold/5 blur-xl group-hover:bg-velmora-gold/10 transition-colors duration-500" />
            </div>

            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <h3 className="font-serif text-2xl md:text-3xl text-velmora-dark mb-2 group-hover:-translate-y-1 transition-transform duration-500">
                {cat.name}
              </h3>
              <p className="text-sm text-velmora-taupe opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-1 group-hover:translate-y-0 mb-4">
                {cat.description}
              </p>
              <span className="inline-flex items-center gap-1 text-[10px] tracking-widest uppercase text-velmora-gold opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                Explore <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
