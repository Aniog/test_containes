import React, { useEffect, useRef } from 'react';
import SectionHeader from '@/components/SectionHeader';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

const Collections = () => {
  const containerRef = useRef(null);
  const collections = [
    { id: 'golden-hour', title: 'The Golden Hour', desc: 'Inspired by the soft warmth of a Mediterranean sunset.', query: 'woman wearing gold jewelry sunset warm golden hour editorial' },
    { id: 'sculptural', title: 'Sculptural Forms', desc: 'Minimalist shapes that play with light and shadow.', query: 'sculptural gold earrings on white background minimalist editorial' },
    { id: 'heirloom', title: 'Modern Heirlooms', desc: 'Foundational pieces designed to be treasured forever.', query: 'gold jewelry box with elegant velvet interior and necklace editorial' }
  ];

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="pt-32 pb-20 md:pb-32 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <SectionHeader 
          title="Our Collections" 
          subtitle="Curated by Velmora" 
        />
        
        <div className="space-y-32">
          {collections.map((collection, i) => (
            <div key={collection.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`aspect-video md:aspect-[16/9] bg-neutral-100 overflow-hidden ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <img 
                  data-strk-img-id={`collection-${collection.id}`}
                  data-strk-img={collection.query}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="1200"
                  className="w-full h-full object-cover"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={collection.title}
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl font-serif uppercase tracking-widest text-brand-charcoal">{collection.title}</h3>
                <p className="text-neutral-500 leading-relaxed italic">{collection.desc}</p>
                <div className="pt-4">
                   <Link to="/shop" className="btn-premium inline-block text-center">Shop Collection</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
