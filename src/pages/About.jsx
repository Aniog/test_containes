import React from 'react';

const About = () => {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-6 uppercase tracking-widest leading-tight">The Velmora Narrative</h1>
          <p className="text-xs uppercase tracking-[0.3em] text-velmora-muted mb-12">Crafted with intention, worn with soul</p>
        </div>

        <div className="aspect-[16/9] bg-velmora-border overflow-hidden mb-20">
          <img 
            data-strk-img-id="about-hero"
            data-strk-img="jewelry craftsmanship studio aesthetic gold detail hands"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-full object-cover"
            alt="Velmora Studio"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-2xl font-serif mb-6 italic leading-relaxed">
              &ldquo;We wanted to bridge the gap between costume jewelry that fades and fine jewelry that feels inaccessible.&rdquo;
            </h2>
          </div>
          <div className="space-y-6 text-sm text-velmora-muted leading-loose font-light">
            <p>
              Founded in 2024, Velmora was born from a singular vision: to create demi-fine jewelry that celebrates the beauty of daily life. We believe that jewelry is more than just an accessory—it's a reflection of your journey, a quiet companion to your most treasured moments.
            </p>
            <p>
              Our pieces are crafted using 18K gold plating over durable sterling silver or brass bases, ensuring that each piece has a rich, warm glow and lasting quality. We work closely with our artisans to ensure every curve, texture, and crystal is positioned with absolute precision.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center py-20 border-y border-velmora-border">
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-4">Quality</h3>
            <p className="text-xs text-velmora-muted leading-loose font-light uppercase tracking-widest">Premium 18K gold and hypoallergenic metals for sensitive skin.</p>
          </div>
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-4">Design</h3>
            <p className="text-xs text-velmora-muted leading-loose font-light uppercase tracking-widest">Thoughtfully curated collections inspired by vintage heirlooms.</p>
          </div>
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-4">Ethics</h3>
            <p className="text-xs text-velmora-muted leading-loose font-light uppercase tracking-widest">Sustainably sourced materials and fair working conditions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
