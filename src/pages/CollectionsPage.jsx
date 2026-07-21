import React from 'react';
import { Link } from 'react-router-dom';

const CollectionsPage = () => {
  const collections = [
    {
      id: 'everyday-luxury',
      name: 'Everyday Luxury',
      description: 'Timeless pieces designed for daily wear. Subtle elegance that elevates any outfit.',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=600&fit=crop',
      count: 12,
    },
    {
      id: 'statement-pieces',
      name: 'Statement Pieces',
      description: 'Bold designs that command attention. For moments when you want to shine.',
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=600&fit=crop',
      count: 8,
    },
    {
      id: 'bridal-collection',
      name: 'Bridal Collection',
      description: 'Delicate pieces for your special day. Something borrowed, something gold.',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop',
      count: 15,
    },
    {
      id: 'gift-sets',
      name: 'Gift Sets',
      description: 'Curated combinations presented in our signature packaging. Ready to give.',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=600&fit=crop',
      count: 6,
    },
  ];

  return (
    <main className="pt-20 sm:pt-24">
      <div className="bg-[#f3f0eb] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#b8860b] mb-3">Curated</p>
          <h1 className="velmora-heading text-3xl sm:text-4xl md:text-5xl tracking-[0.1em]">
            Collections
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {collections.map(collection => (
            <Link
              key={collection.id}
              to="/shop"
              className="group relative aspect-[4/3] overflow-hidden"
            >
              <img
                src={collection.image}
                alt={collection.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                <h2 className="velmora-heading text-2xl sm:text-3xl tracking-[0.1em] mb-2">
                  {collection.name}
                </h2>
                <p className="text-sm text-white/80 mb-3 max-w-md">{collection.description}</p>
                <span className="text-xs tracking-[0.15em] uppercase border-b border-white/50 pb-1">
                  {collection.count} Pieces
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CollectionsPage;
