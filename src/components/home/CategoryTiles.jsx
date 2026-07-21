import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Earrings', slug: 'earrings', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800&auto=format&fit=crop' },
  { name: 'Necklaces', slug: 'necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop' },
  { name: 'Huggies', slug: 'huggies', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop' },
];

export default function CategoryTiles() {
  return (
    <section className="section-padding py-16 md:py-24">
      <div className="text-center mb-12 md:mb-16">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-3">
          Discover More
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light">
          Shop by Category
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            to={`/shop?category=${cat.slug}`}
            className="group relative aspect-[4/5] bg-charcoal overflow-hidden"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-charcoal/50 group-hover:bg-charcoal/30 transition-all duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="font-serif text-2xl md:text-3xl text-cream tracking-widest uppercase opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                {cat.name}
              </h3>
            </div>
            <div className="absolute bottom-6 left-0 right-0 text-center md:opacity-100 md:group-hover:opacity-0 transition-opacity duration-300">
              <span className="font-sans text-xs tracking-[0.2em] uppercase text-cream/80">
                {cat.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
