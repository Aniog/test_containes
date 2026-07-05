import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/products';

const featuredCollections = [
  {
    id: 'new-arrivals',
    name: 'New Arrivals',
    description: 'The latest additions to our collection',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80'
  },
  {
    id: 'gift-sets',
    name: 'Gift Sets',
    description: 'Beautifully packaged jewelry gifts',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80'
  },
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Studs, drops, and ear cuffs',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80'
  }
];

export default function Collections() {
  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* Header */}
      <div className="bg-[var(--color-bg-secondary)] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.3em] text-[var(--color-gold-primary)] mb-3">
            EXPLORE
          </p>
          <h1 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)] mb-2">
            Our Collections
          </h1>
          <p className="text-[var(--color-text-muted)] max-w-xl mx-auto">
            Curated selections of our finest pieces, organized to help you find exactly what you're looking for.
          </p>
        </div>
      </div>

      {/* Featured Collections */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCollections.map((collection) => (
              <Link
                key={collection.id}
                to={`/shop?category=${collection.id}`}
                className="group relative aspect-[3/4] overflow-hidden"
              >
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-serif text-2xl mb-1">{collection.name}</h3>
                  <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                    {collection.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Categories */}
      <section className="py-16 bg-[var(--color-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group flex items-center gap-4 p-6 bg-white hover:shadow-lg transition-shadow"
              >
                <div className="w-20 h-20 overflow-hidden flex-shrink-0">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[var(--color-text-primary)] group-hover:text-[var(--color-gold-primary)] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
