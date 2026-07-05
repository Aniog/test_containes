import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 'earrings', name: 'Earrings', query: 'gold earrings collection editorial display dark background' },
  { id: 'necklaces', name: 'Necklaces', query: 'gold necklaces elegant display warm lighting' },
  { id: 'huggies', name: 'Huggies', query: 'gold huggie hoop earrings close-up collection' },
];

export default function CategoryTilesSection() {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28">
      <div className="text-center mb-12">
        <h2
          className="text-3xl md:text-4xl text-[#2C2622] mb-3"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Shop by Category
        </h2>
        <div className="w-12 h-px bg-[#C9A84C] mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.id}`}
            className="group relative aspect-[4/5] rounded-xl overflow-hidden"
          >
            <img
              data-strk-img-id={`cat-tile-${cat.id}`}
              data-strk-img={cat.query}
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#2C2622]/30 group-hover:bg-[#2C2622]/50 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h3
                  className="text-2xl md:text-3xl text-[#FAF7F2] mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {cat.name}
                </h3>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#C9A84C] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Shop Now
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
