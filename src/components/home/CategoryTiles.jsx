import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const categories = [
  { id: 'earrings', name: 'Earrings', slug: '/shop/earrings', label: 'Gold earrings on dark background' },
  { id: 'necklaces', name: 'Necklaces', slug: '/shop/necklaces', label: 'Gold necklace on dark background' },
  { id: 'huggies', name: 'Huggies', slug: '/shop/huggies', label: 'Gold huggie earrings on dark background' },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-ink">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.slug}
              className="group relative aspect-[4/5] bg-ink overflow-hidden"
            >
              <div
                data-strk-bg-id={`category-bg-${cat.id}`}
                data-strk-bg={`[category-title-${cat.id}] gold jewelry`}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/30 group-hover:bg-ink/20 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center transform transition-transform duration-500 group-hover:translate-y-[-4px]">
                  <h3 id={`category-title-${cat.id}`} className="font-serif text-2xl md:text-3xl text-white tracking-wide">
                    {cat.name}
                  </h3>
                  <div className="mt-3 inline-flex items-center gap-2 text-white/80 text-[10px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span>Shop Now</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}