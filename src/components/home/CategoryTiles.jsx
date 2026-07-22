import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Earrings', href: '/shop?category=Earrings', aspect: 'aspect-[4/5]', bgId: 'cat-tile-earrings-d34f56' },
  { name: 'Necklaces', href: '/shop?category=Necklaces', aspect: 'aspect-[4/5]', bgId: 'cat-tile-necklaces-e78a90' },
  { name: 'Huggies', href: '/shop?category=Huggies', aspect: 'aspect-[4/5]', bgId: 'cat-tile-huggies-f12b34' },
];

export default function CategoryTiles() {
  return (
    <section className="container-wide section-padding py-16 md:py-24">
      <div className="text-center mb-12 md:mb-16">
        <p id="cat-section-label" className="font-sans text-[10px] tracking-superwide uppercase text-velmora-taupe mb-3">
          Explore
        </p>
        <h2 id="cat-section-title" className="font-serif text-3xl md:text-4xl tracking-wider text-velmora-charcoal">
          Shop by Category
        </h2>
        <hr className="hairline-divider w-12 mx-auto mt-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to={cat.href}
            className={`group relative ${cat.aspect} overflow-hidden`}
          >
            {/* Background via strk */}
            <div
              className="absolute inset-0"
              data-strk-bg-id={cat.bgId}
              data-strk-bg={`[cat-tile-label-${cat.name.toLowerCase()}] [cat-section-title]`}
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="800"
            />

            {/* Label overlay on hover */}
            <div className="absolute inset-0 bg-velmora-charcoal/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
              <span
                id={`cat-tile-label-${cat.name.toLowerCase()}`}
                className="font-serif text-2xl md:text-3xl tracking-widest text-white uppercase transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
              >
                {cat.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
