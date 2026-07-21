import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const BrandStory = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden group">
            <img 
              data-strk-img-id="brand-story-img"
              data-strk-img="jewelry artisan workshop tools gold texture editorial photography"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              alt="Our Craftsmanship"
              className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
            />
          </div>
          <div className="space-y-8 lg:pr-12">
            <p className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">The Heritage</p>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight text-velmora-charcoal">
              Modern heirlooms, <br className="hidden md:block" /> 
              <span className="italic">soulfully</span> crafted.
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed font-sans text-[15px]">
              <p>
                Founded on the belief that luxury should be felt every day, Velmora bridges the gap between fast fashion and fine jewelry. We specialize in 18k gold plated demi-fine pieces that carry the weight of tradition and the sparkle of modernity.
              </p>
              <p>
                Each collection is a curated journey—inspired by architectural lines, floral whispers, and the quiet luxury of the natural world. Our materials are ethically sourced and hypoallergenic, ensuring that your treasure lasts as long as your memories.
              </p>
            </div>
            <div className="pt-6">
               <Link 
                to="/#about" 
                className="text-[12px] uppercase tracking-[0.3em] font-bold border-b-2 border-accent pb-2 hover:text-accent transition-colors duration-300"
               >
                 Explore Our Story
               </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
