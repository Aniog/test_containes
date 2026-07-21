import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { categories } from '../data/products';

const collections = [
  {
    id: 'summer-glow',
    name: 'Summer Glow',
    description: 'Sun-kissed pieces for warm days and golden evenings',
    query: 'gold jewelry summer beach warm light collection',
  },
  {
    id: 'everyday-luxe',
    name: 'Everyday Luxe',
    description: 'Subtle elegance for your daily rotation',
    query: 'minimalist gold jewelry everyday wear elegant',
  },
  {
    id: 'gift-worthy',
    name: 'Gift-Worthy',
    description: 'Curated sets and standout pieces, ready to give',
    query: 'luxury jewelry gift box elegant packaging gold',
  },
];

export default function CollectionsPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <main ref={containerRef} className="pt-20 md:pt-24 min-h-screen">
      {/* Header */}
      <div className="bg-cream-100 py-12 md:py-16">
        <div className="container-wide text-center">
          <h1 className="font-serif text-heading-xl md:text-display text-charcoal-800">
            Collections
          </h1>
          <p className="font-sans text-charcoal-500 mt-3">
            Curated selections for every occasion
          </p>
        </div>
      </div>

      <div className="container-wide py-12 md:py-20">
        {/* Featured Collections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {collections.map(collection => (
            <Link
              key={collection.id}
              to="/shop"
              className="group relative aspect-[4/5] overflow-hidden bg-charcoal-200"
            >
              <img
                data-strk-img-id={`col-${collection.id}`}
                data-strk-img={collection.query}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={collection.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-heading-md text-cream-50 uppercase tracking-[0.1em]">
                  {collection.name}
                </h3>
                <p className="font-sans text-sm text-cream-200 mt-2">
                  {collection.description}
                </p>
                <div className="flex items-center gap-2 mt-4 text-gold-300 text-xs tracking-[0.15em] uppercase font-sans group-hover:text-gold-200 transition-colors">
                  Shop Now
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Shop by Category */}
        <div>
          <h2 className="font-serif text-heading-lg text-charcoal-800 text-center mb-12">
            By Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map(category => (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group p-8 border border-charcoal-100 hover:border-gold-400 transition-all duration-300 text-center"
              >
                <h3 className="font-serif text-heading-sm uppercase tracking-[0.15em] text-charcoal-800 group-hover:text-gold-700 transition-colors">
                  {category.name}
                </h3>
                <p className="font-sans text-sm text-charcoal-500 mt-2">
                  {category.description}
                </p>
                <div className="w-8 h-[1px] bg-gold-400 mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
