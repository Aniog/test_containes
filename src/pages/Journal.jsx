import React, { useEffect, useRef } from 'react';
import SectionHeader from '@/components/SectionHeader';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Journal = () => {
  const containerRef = useRef(null);
  const posts = [
    { id: 1, title: 'How to Layer Your Gold Jewelry', date: 'July 15, 2024', category: 'Styling', query: 'woman layering gold necklaces and earrings minimalist outfit' },
    { id: 2, title: 'The Art of Gift Giving', date: 'June 28, 2024', category: 'Curation', query: 'luxury gift box with ribbon and gold jewelry editorial' },
    { id: 3, title: 'Behind the Design: The Aura Collection', date: 'June 10, 2024', category: 'Studio', query: 'jewelry designer studio with sketches and gold tools editorial' }
  ];

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="pt-32 pb-20 md:pb-32 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <SectionHeader 
          title="The Journal" 
          subtitle="Thoughts on Design, Styling, and Life" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[4/5] bg-neutral-100 overflow-hidden mb-8 relative">
                <img 
                  data-strk-img-id={`journal-post-${post.id}`}
                  data-strk-img={post.query}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="800"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                  alt={post.title}
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-1 text-[8px] uppercase tracking-[0.3em] font-bold">
                  {post.category}
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold">{post.date}</p>
                <h3 className="text-xl font-serif uppercase tracking-widest text-brand-charcoal group-hover:text-brand-gold transition-colors">{post.title}</h3>
                <button className="text-[10px] uppercase tracking-widest font-bold border-b border-black pb-1 hover:text-brand-gold hover:border-brand-gold transition-all">Read More</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journal;
