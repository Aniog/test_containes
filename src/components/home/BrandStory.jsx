import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.ImageHelper && containerRef.current) {
      import('@/strk-img-config.json').then(config => {
        window.ImageHelper.loadImages(config.default || config, containerRef.current);
      }).catch(() => {});
    }
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              <img 
                src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Jewelry artisan at work" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute -inset-4 border border-foreground/10 -z-10 hidden md:block translate-y-8 -translate-x-8" />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="font-serif text-3xl md:text-5xl mb-8 leading-tight">
              Quiet luxury,<br />crafted for the everyday.
            </h2>
            
            <div className="space-y-6 text-foreground/80 font-light leading-relaxed mb-10 w-full max-w-lg">
              <p>
                Velmora was born from a simple belief: fine jewelry shouldn't be reserved for special occasions. We design demi-fine pieces intended to be lived in, loved, and layered.
              </p>
              <p>
                Each piece in our collection is thoughtfully crafted using premium 18k gold vermeil over sterling silver, ensuring the rich warmth of solid gold without the traditional markup. 
              </p>
            </div>
            
            <div>
              <Link 
                to="/about" 
                className="inline-block border-b border-foreground pb-1 text-sm font-medium tracking-widest uppercase hover:text-primary hover:border-primary transition-colors"
              >
                Discover Our Story
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
