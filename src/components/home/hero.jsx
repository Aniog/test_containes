import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80"
          alt="Gold jewelry editorial"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl text-white animate-slideUp">
          <p className="text-xs font-sans font-medium tracking-widest uppercase text-brand-goldLight mb-4">Demi-fine · 18K Gold Plated</p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05]">Crafted to be Treasured</h1>
          <p className="mt-5 text-base sm:text-lg text-white/80 max-w-lg">Quiet luxury for everyday rituals. Designed in warm gold, made to feel as good as it looks.</p>
          <div className="mt-8">
            <Link to="/shop">
              <Button size="lg" className="bg-white text-brand-ink hover:bg-brand-warm">Shop the Collection</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
