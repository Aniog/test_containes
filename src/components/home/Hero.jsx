import React from 'react';
import Button from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-premium hover:scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
        <div className="max-w-2xl text-surface">
          <p className="text-xs tracking-widest uppercase text-accent mb-4">New Collection</p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-sm md:text-base text-surface/80 leading-relaxed max-w-lg mb-8">
            Demi-fine jewelry designed for the modern woman. Warm gold, quiet luxury, and pieces meant to be worn every day.
          </p>
          <Button variant="accent" size="lg" asChild>
            <a href="#bestsellers">Shop the Collection</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
