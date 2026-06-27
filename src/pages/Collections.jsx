import React from 'react';
import { Link } from 'react-router-dom';

const Collections = () => {
  const collections = [
    {
      id: 'signature-gold',
      name: 'Signature Gold',
      description: 'Timeless pieces in warm 18K gold plating',
    },
    {
      id: 'crystal-luxe',
      name: 'Crystal Luxe',
      description: 'Elevated designs with crystal accents',
    },
    {
      id: 'gift-sets',
      name: 'Gift Sets',
      description: 'Curated sets, beautifully boxed',
    },
  ];

  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl tracking-wide text-velmora-text">
            Collections
          </h1>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-6 mb-4" />
          <p className="text-sm text-velmora-muted max-w-md mx-auto">
            Each collection tells a story. Discover curated edits designed for every mood, moment, and milestone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((col) => (
            <Link
              key={col.id}
              to="/shop"
              className="group text-center p-8 border border-velmora-border hover:border-velmora-gold transition-colors duration-300"
            >
              <h2 className="font-serif text-xl tracking-[0.12em] uppercase text-velmora-text group-hover:text-velmora-gold transition-colors">
                {col.name}
              </h2>
              <p className="text-sm text-velmora-muted mt-3">{col.description}</p>
              <span className="inline-block mt-5 text-[11px] tracking-[0.2em] uppercase text-velmora-gold border-b border-velmora-gold/50 pb-0.5 group-hover:border-velmora-gold transition-colors">
                Explore
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
