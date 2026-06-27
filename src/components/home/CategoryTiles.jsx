import React from 'react';
import { Link } from 'react-router-dom';

const tiles = [
  { id: 'earrings', name: 'Earrings', slug: 'earrings', imgId: 'cat-earrings' },
  { id: 'necklaces', name: 'Necklaces', slug: 'necklaces', imgId: 'cat-necklaces' },
  { id: 'huggies', name: 'Huggies', slug: 'huggies', imgId: 'cat-huggies' },
];

export default function CategoryTiles() {
  return (
    <section className="py-20 lg:py-28 bg-velmora-warm-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <h2 className="font-serif text-2xl lg:text-3xl tracking-[0.06em] text-velmora-charcoal">
            Shop by Category
          </h2>
          <hr className="hr-hairline mt-6 max-w-[200px] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {tiles.map((tile) => (
            <Link
              key={tile.id}
              to={`/shop?category=${tile.slug}`}
              className="group relative aspect-[4/3] bg-velmora-sand/10 overflow-hidden"
            >
              <img
                alt={tile.name}
                data-strk-img-id={`cat-tile-${tile.imgId}`}
                data-strk-img={`[cat-label-${tile.id}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-velmora-charcoal/30 group-hover:bg-velmora-charcoal/50 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  id={`cat-label-${tile.id}`}
                  className="font-serif text-2xl lg:text-3xl text-white tracking-[0.08em]"
                >
                  {tile.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}