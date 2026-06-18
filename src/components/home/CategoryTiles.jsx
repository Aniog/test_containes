import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import JewelryImage from '@/components/ui/JewelryImage';
import { CATEGORIES } from '@/data/products';
import { useStrkImages } from '@/lib/useStrkImages';

const KIND = {
  earrings: 'earring',
  necklaces: 'necklace',
  huggies: 'huggie',
};

export default function CategoryTiles() {
  const ref = useRef(null);
  useStrkImages(ref, []);

  return (
    <section ref={ref} className="bg-porcelain py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-mute font-sans">
            The Edit
          </p>
          <h2 className="mt-3 font-serif font-light text-espresso text-4xl md:text-5xl lg:text-6xl">
            Shop by category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {CATEGORIES.map((cat, i) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative block aspect-[3/4] overflow-hidden bg-espresso"
            >
              <JewelryImage
                imgId={cat.imgId}
                query={`[cat-${cat.id}-desc] [cat-${cat.id}-label]`}
                fallbackQuery={cat.imgQuery}
                ratio="3x4"
                width={900}
                kind={KIND[cat.id] || 'earring'}
                theme={i % 2 === 0 ? 'warm' : 'linen'}
                alt={cat.label}
                className="absolute inset-0 w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(31,26,20,0.0) 40%, rgba(31,26,20,0.75) 100%)',
                }}
              />
              {/* Label */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-cream">
                <p
                  id={`cat-${cat.id}-desc`}
                  className="text-[11px] uppercase tracking-[0.25em] text-cream/80 font-sans mb-2 opacity-90 transition-opacity"
                >
                  {cat.description}
                </p>
                <h3
                  id={`cat-${cat.id}-label`}
                  className="font-serif text-3xl md:text-4xl text-cream"
                >
                  {cat.label}
                </h3>
                <span className="inline-block mt-4 text-[10px] uppercase tracking-[0.3em] text-gold-soft font-sans border-b border-gold-soft pb-1 group-hover:text-cream group-hover:border-cream transition-colors">
                  Discover
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
