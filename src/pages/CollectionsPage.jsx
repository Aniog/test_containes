import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

export default function CollectionsPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const collections = [
    { name: 'Signature Gold', desc: 'Everyday classics in warm 18K gold plating.', count: 8 },
    { name: 'Luminara', desc: 'Crystal-accented pieces that catch the light.', count: 6 },
    { name: 'Heritage', desc: 'Heirloom-inspired designs for life\'s milestones.', count: 4 },
    { name: 'Minimalist', desc: 'Clean lines and understated elegance.', count: 5 },
  ];

  return (
    <section className="py-8 md:py-16" ref={containerRef}>
      <div className="max-w-content mx-auto px-4 md:px-8">
        <h1 className="font-serif text-3xl md:text-4xl mb-2">Collections</h1>
        <p className="text-text-secondary font-sans text-sm mb-12">Curated stories in gold.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {collections.map((col, i) => (
            <Link
              key={i}
              to="/shop"
              className="group block"
            >
              <div className="aspect-[16/9] bg-cream-dark rounded overflow-hidden mb-4">
                <img
                  data-strk-img-id={`collection-${i}`}
                  data-strk-img={`[collection-name-${i}] [collection-desc-${i}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={col.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h2 id={`collection-name-${i}`} className="font-serif text-xl uppercase tracking-widest mb-1">{col.name}</h2>
              <p id={`collection-desc-${i}`} className="text-text-secondary font-sans text-sm">{col.desc}</p>
              <p className="text-xs text-text-secondary font-sans mt-1">{col.count} pieces</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
