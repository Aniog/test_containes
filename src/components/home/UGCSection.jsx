import React from 'react';
import { ugcContent } from '../../data/products';

const UGCCard = ({ item }) => {
  return (
    <div className="flex-shrink-0 w-[160px] sm:w-[200px] md:w-[240px] relative group cursor-pointer">
      {/* Vertical Image Container */}
      <div className="aspect-[9/16] bg-sand/30 overflow-hidden">
        <img
          src={item.image}
          alt={item.caption}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="font-serif text-sm text-ivory italic leading-relaxed transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          {item.caption}
        </p>
      </div>

      {/* Play Icon */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-8 h-8 bg-ivory/20 backdrop-blur-sm rounded-full flex items-center justify-center">
          <svg
            className="w-3 h-3 text-ivory ml-0.5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const UGCSection = () => {
  return (
    <section className="py-12 md:py-16 bg-sand/30 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <p className="text-gold text-xs font-medium tracking-[0.3em] uppercase mb-3">
            Real Moments
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal">
            Styled by You
          </h2>
        </div>
      </div>

      {/* Scrollable Container */}
      <div className="overflow-x-auto scrollbar-hide pb-4">
        <div className="flex gap-3 md:gap-4 px-4 md:px-8 min-w-max">
          {ugcContent.map((item) => (
            <UGCCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Scroll Hint - Mobile */}
      <div className="flex justify-center mt-4 md:hidden">
        <p className="text-xs text-warm-gray tracking-wide">
          Swipe to see more →
        </p>
      </div>

      {/* Instagram CTA */}
      <div className="text-center mt-8">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.15em] uppercase text-warm-gray hover:text-charcoal transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          Follow us @velmorajewelry
        </a>
      </div>
    </section>
  );
};

export default UGCSection;
