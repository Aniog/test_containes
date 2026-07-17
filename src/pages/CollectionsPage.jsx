import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// import { ImageHelper } from '@strikingly/sdk';
// import strkImgConfig from '@/strk-img-config.json';

const collections = [
  {
    id: 'essentials',
    name: 'The Essentials',
    description: 'Everyday gold staples designed to be worn from morning to moonlight.',
    query: 'minimal gold jewelry essentials everyday wear',
  },
  {
    id: 'statement',
    name: 'Statement Makers',
    description: 'Bold silhouettes and crystal accents for when you want all eyes on you.',
    query: 'statement gold jewelry crystal bold design',
  },
  {
    id: 'gift',
    name: 'The Gift Edit',
    description: 'Beautifully boxed, ready to give. Pieces that feel personal and precious.',
    query: 'luxury gift boxed gold jewelry set',
  },
];

export default function CollectionsPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return // ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-20">
      <div className="section-padding">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-widest uppercase text-taupe mb-4">Curated</p>
          <h1 className="font-serif text-3xl md:text-5xl text-espresso">Collections</h1>
          <div className="w-12 h-px bg-gold mx-auto mt-6" />
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {collections.map((col, i) => (
            <Link
              key={col.id}
              to="/shop"
              className={`group grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                i % 2 === 1 ? 'md:[direction:rtl]' : ''
              }`}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-sm">
                <img
                  data-strk-img-id={`collection-${col.id}`}
                  data-strk-img={col.query}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={col.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className={i % 2 === 1 ? 'md:text-right md:[direction:ltr]' : ''}>
                <h2 className="font-serif text-2xl md:text-3xl text-espresso mb-3 group-hover:text-gold transition-colors">
                  {col.name}
                </h2>
                <p className="font-sans text-sm text-taupe leading-relaxed mb-5">{col.description}</p>
                <span className="font-sans text-xs tracking-widest uppercase text-gold font-medium">
                  Explore Collection
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
