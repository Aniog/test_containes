import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Earrings', image: 'gold earrings collection flatlay dark background luxury jewelry photography', filter: 'earrings' },
  { name: 'Necklaces', image: 'gold necklaces layered on model neck editorial jewelry photography', filter: 'necklaces' },
  { name: 'Huggies', image: 'gold huggie earrings worn on ear closeup luxury jewelry photography', filter: 'huggies' },
];

export default function ShopByCategory() {
  return (
    <section className="py-16 md:py-24 bg-[var(--cream)] border-t border-[var(--divider)]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] font-medium mb-3">Explore</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={`/shop?category=${cat.filter}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <img
                src={`https://image.pollinations.ai/prompt/${encodeURIComponent(cat.image)}?width=600&height=750&nologo=true`}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-serif-upper text-lg md:text-xl tracking-widest-xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  {cat.name}
                </span>
              </div>
              {/* Mobile always visible label */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:hidden bg-gradient-to-t from-black/60 to-transparent">
                <span className="text-white font-serif-upper text-sm tracking-widest-xl">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
