import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

const BrandStory = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="w-full md:w-1/2 relative aspect-[4/5] md:aspect-square">
            <img
               data-strk-img-id="brand-story-img"
               data-strk-img="jewelry artisan workshop tools hands goldsmith editorial aesthetic"
               data-strk-img-ratio="1x1"
               data-strk-img-width="1000"
               className="w-full h-full object-cover"
               alt="Our Story"
            />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-velmora-bg hidden md:block" />
          </div>

          <div className="w-full md:w-1/2 space-y-8">
            <span className="text-[10px] uppercase tracking-[0.4em] text-velmora-grey">The Velmora Ethos</span>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">Jewelry that tells your <span className="italic">silent story.</span></h2>
            <p className="text-velmora-grey font-light leading-relaxed text-lg">
              Founded in 2024, Velmora was born from a desire for demi-fine jewelry that balances modern aesthetics with heirloom quality. 
              We believe in the beauty of the everyday—the subtle sparkle that catches the light and the quiet luxury of fine materials.
            </p>
            <p className="text-velmora-grey font-light leading-relaxed text-lg pb-4">
              Our pieces are crafted using 100% recycled 18k gold over sterling silver, ensuring that your treasure is as kind to the earth as it is beautiful on you.
            </p>
            <Link to="/about">
              <Button variant="outline" className="px-10 h-14">Our Story</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
