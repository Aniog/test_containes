import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Studs, drops & ear cuffs',
    query: 'gold earrings collection on dark velvet display',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Pendants, chains & layers',
    query: 'gold necklaces collection on dark background elegant',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Chunky, dome & mini huggies',
    query: 'gold huggie earrings collection on dark background',
  },
];

export default function ShopByCategory() {
  return (
    <section className="py-20 lg:py-28 bg-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-gold/70 mb-3">
            Browse
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-ivory tracking-wide">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-gold/40 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/3] bg-charcoal/20 border border-charcoal/30 overflow-hidden"
            >
              {/* Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs text-muted/20 tracking-widest uppercase">{cat.name}</span>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/20 to-transparent group-hover:from-obsidian/90 transition-all duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 flex items-end justify-between">
                <div>
                  <h3 className="font-heading text-xl lg:text-2xl text-ivory tracking-wider mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-muted/60 tracking-wider">{cat.description}</p>
                </div>
                <div className="w-10 h-10 border border-gold/30 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300">
                  <ArrowUpRight size={16} className="text-gold/60 group-hover:text-gold transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
