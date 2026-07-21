import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-24 bg-[#F9F7F5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        <div className="relative aspect-[4/5] bg-muted overflow-hidden order-2 md:order-1">
          <img 
            data-strk-img-id="brand-story-img-9f8e"
            data-strk-img="minimalist jewelry studio or artistic model portrait luxury warm"
            data-strk-img-ratio="4x5"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
            alt="Velmora Jewelry Craftmanship"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="space-y-8 order-1 md:order-2">
          <div className="space-y-4">
            <h2 id="story-title" className="text-4xl md:text-5xl font-serif tracking-tight text-primary leading-tight">
              Honoring the Art of Self-Adornment
            </h2>
            <div className="w-12 h-[1px] bg-accent" />
          </div>
          
          <div id="story-text" className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg font-light italic font-serif">
              "We believe jewelry is more than an accessory—it's a celebration of moments, a fragment of memory, and a silent expression of strength."
            </p>
            <p>
              Born from a passion for timeless design and ethical craftsmanship, Velmora creates fine jewelry that bridges the gap between luxury and longevity. Each piece is meticulously designed in our studio, using 18K gold vermeil and ethically sourced stones.
            </p>
            <p>
              Our mission is to create 'quiet luxury' — pieces that don't shout for attention, but rather enhance the natural radiance of the woman who wears them.
            </p>
          </div>
          
          <div className="pt-4">
            <Link to="/about">
              <Button variant="link" className="p-0 h-auto text-[10px] tracking-[0.3em] font-bold uppercase hover:text-accent transition-colors">
                READ OUR STORY —
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
