import React, { useEffect, useRef } from 'react';
import SectionHeader from '@/components/SectionHeader';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="pt-32 pb-20 md:pb-32 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <SectionHeader 
          title="Our Story" 
          subtitle="Quiet Luxury, Consciously Created" 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="aspect-[4/5] bg-neutral-100 overflow-hidden">
            <img 
              data-strk-img-id="about-founder-8f2a"
              data-strk-img="Founder of Velmora jewelry in a minimalist studio setting editorial"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1000"
              className="w-full h-full object-cover"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              alt="Our Story"
            />
          </div>
          <div className="space-y-8">
            <h3 className="text-2xl font-serif uppercase tracking-widest text-brand-charcoal">The Velmora Ethos</h3>
            <p className="text-neutral-600 leading-relaxed italic">
              "We believe that jewelry should be more than an accessory – it should be a quiet statement of identity, 
              a treasure that lasts beyond the seasons."
            </p>
            <p className="text-neutral-500 leading-relaxed text-sm">
              Founded in 2024, Velmora was born from a desire for premium, demi-fine jewelry that bridges the gap 
              between mass-market fast fashion and unattainable fine jewelry. Our pieces are designed for the 
              discerning woman who values sculptural forms, warm gold tones, and the enduring quality of 18K plating.
            </p>
            <p className="text-neutral-500 leading-relaxed text-sm">
              Every piece in our collection is crafted with intention. From our signature huggies to our 
              statement necklaces, we use recycled brass bases and thick gold plating to ensure your 
              jewels remain as vivid as the day you first wore them.
            </p>
            <div className="pt-8">
               <button className="btn-premium">View the Collection</button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Craftsmanship', desc: 'Each piece is hand-finished by master artisans with decades of experience in demi-fine jewelry.' },
              { title: 'Materials', desc: 'We utilize recycled metals and conflict-free crystals to create jewelry that feels as good as it looks.' },
              { title: 'Vision', desc: 'To create the modern heirloom: jewelry that is passed down, not discarded.' }
            ].map((pillar, i) => (
              <div key={i} className="text-center p-8 border border-neutral-100">
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-4">{pillar.title}</h4>
                <p className="text-sm text-neutral-500 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default About;
