import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const collectionDetails = {
  earrings: { tagline: 'Studs, drops & statement pieces', description: 'From everyday studs to show-stopping drops, our earring collection has something for every mood and moment.' },
  necklaces: { tagline: 'Pendants, chains & layered looks', description: 'Delicate pendants and bold chains designed to layer beautifully or stand alone as a statement.' },
  huggies: { tagline: 'Everyday hoops that hug the ear', description: 'The perfect everyday earring. Chunky, polished, and designed to hug your earlobe with effortless style.' },
};

export default function Collections() {
  return (
    <main className="pt-20 lg:pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-xs tracking-widest-2xl uppercase text-gold mb-3">Discover</p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-text-primary font-light">
            Collections
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group bg-surface border border-border rounded-lg p-8 sm:p-10 hover:border-gold/40 transition-all duration-500 text-center"
            >
              <h2 className="font-serif text-2xl text-text-primary font-light mb-2 group-hover:text-gold transition-colors duration-300">
                {cat.name}
              </h2>
              <p className="text-xs tracking-wider uppercase text-gold mb-4">
                {collectionDetails[cat.id]?.tagline}
              </p>
              <p className="text-sm text-text-muted leading-relaxed mb-6">
                {collectionDetails[cat.id]?.description}
              </p>
              <span className="inline-block text-xs tracking-widest-xl uppercase text-gold border-b border-gold/40 pb-0.5 group-hover:border-gold transition-colors duration-300">
                Explore
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
