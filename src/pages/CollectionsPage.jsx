import React from 'react';
import { Link } from 'react-router-dom';
import { products, categories } from '@/data/products';
import Footer from '@/components/layout/Footer';
import { useScrollAnimation } from '@/lib/useScrollAnimation';

export default function CollectionsPage() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const collections = [
    {
      id: 'everyday-gold',
      name: 'Everyday Gold',
      description: 'Pieces designed to be worn daily — effortless elegance from morning to midnight.',
      query: 'gold jewelry everyday minimal warm light',
      count: products.length,
    },
    {
      id: 'statement-pieces',
      name: 'Statement Pieces',
      description: 'Bold designs for when you want to be noticed. Perfect for special occasions.',
      query: 'statement gold jewelry editorial dark background',
      count: 2,
    },
    {
      id: 'gift-sets',
      name: 'Gift Sets',
      description: 'Beautifully boxed sets ready to give. Because some moments deserve something special.',
      query: 'luxury jewelry gift box set gold',
      count: 1,
    },
  ];

  return (
    <main>
      <div className="pt-24 lg:pt-32 pb-8 section-padding">
        <div className="text-center mb-16">
          <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-brand-gold mb-3">Curated</p>
          <h1 className="font-serif text-4xl lg:text-5xl text-brand-charcoal">Collections</h1>
          <div className="hairline-divider max-w-[60px] mx-auto mt-5" />
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pb-16 lg:pb-24">
          {collections.map((col, i) => (
            <Link
              key={col.id}
              to="/shop"
              className={`group relative aspect-[3/4] overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div
                className="absolute inset-0 bg-brand-sand transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={`collection-${col.id}`}
                data-strk-bg={col.query}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-brand-charcoal/40 group-hover:bg-brand-charcoal/60 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center">
                <h2 className="font-serif text-2xl lg:text-3xl text-brand-cream mb-2">{col.name}</h2>
                <p className="text-xs text-brand-warmgray/80 mb-4 max-w-[240px]">{col.description}</p>
                <span className="inline-block text-[11px] tracking-[0.2em] uppercase text-brand-gold-light opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Explore Collection
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
