import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
        <div className="w-full md:w-1/2 aspect-[3/4] overflow-hidden relative shadow-2xl">
          <div 
            className="absolute inset-0 bg-neutral-100"
            data-strk-bg-id="brand-story-img"
            data-strk-bg="woman designer sketching jewelry elegant studio warm light"
            data-strk-bg-ratio="3x4"
            data-strk-bg-width="1000"
          />
        </div>
        
        <div className="w-full md:w-1/2 space-y-8">
          <p className="text-[#C5A059] uppercase tracking-widest text-xs font-bold font-sans">Our Heritage</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 leading-tight">
            Elevating the <br /> Everyday
          </h2>
          <div className="space-y-6 text-neutral-600 leading-relaxed font-light">
            <p>
              Velmora was born from a simple belief: that fine jewelry shouldn't be reserved only for special occasions. We craft pieces that bridge the gap between costume jewelry and luxury heirlooms.
            </p>
            <p>
              Each design is meticulously detailed, using high-quality 18K gold plating over durable sterling silver or brass, resulting in jewelry that feels substantial, looks premium, and stands the test of time.
            </p>
          </div>
          <Link 
            to="/about" 
            className="inline-block border-b border-neutral-300 pb-2 text-sm uppercase tracking-widest font-bold hover:border-[#C5A059] transition-colors"
          >
            Meet the Designer
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
