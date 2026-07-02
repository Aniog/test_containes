import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { categories } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function CollectionsPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  const collections = [
    ...categories.map((c) => ({
      ...c,
      description: `Discover our curated ${c.name.toLowerCase()} collection, each piece crafted with intention.`,
    })),
    {
      id: 'all',
      name: 'All Jewelry',
      count: 5,
      description: 'Explore our complete collection of demi-fine gold jewelry.',
    },
  ];

  return (
    <main ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto container-px section-padding">
        <div className="text-center mb-14">
          <p className="text-overline mb-3">Collections</p>
          <h1 className="font-serif text-display-sm md:text-[3.5rem] text-charcoal">Our Collections</h1>
          <p className="font-sans text-body text-warm-gray mt-3 max-w-md mx-auto">
            Curated groups of pieces designed to complement each other and your personal style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((col) => (
            <Link
              key={col.id}
              to={col.id === 'all' ? '/shop' : `/shop?category=${col.id}`}
              className="group relative aspect-[4/5] rounded-lg overflow-hidden"
            >
              <img
                data-strk-img-id={`collection-${col.id}-img`}
                data-strk-img={`[collection-desc-${col.id}] [collection-name-${col.id}] elegant gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={col.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p id={`collection-name-${col.id}`} className="font-serif text-heading-lg md:text-display-sm text-white">
                  {col.name}
                </p>
                <p id={`collection-desc-${col.id}`} className="font-sans text-body text-white/70 mt-2 max-w-xs">
                  {col.description}
                </p>
                <span className="inline-block mt-3 font-sans text-[11px] uppercase tracking-[0.12em] text-gold-pale border-b border-gold-pale/40 pb-0.5 group-hover:border-gold-pale transition-colors">
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
