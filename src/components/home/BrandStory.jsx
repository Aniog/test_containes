import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] relative overflow-hidden">
            <div
              data-strk-bg-id="brand-story-bg-d4e5f6"
              data-strk-bg="[brand-story-title] [brand-story-subtitle]"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
              className="absolute inset-0"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8 lg:pl-16">
            <p className="text-xs tracking-widest uppercase text-accent mb-4">Our Story</p>
            <h2 id="brand-story-title" className="serif-heading text-3xl md:text-4xl lg:text-5xl mb-6">
              Where Craft Meets Conscience
            </h2>
            <p id="brand-story-subtitle" className="text-muted-foreground mb-6 leading-relaxed">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't cost the earth. 
              Each piece is thoughtfully designed in our studio, crafted with 18K gold plating over 
              recycled brass, and finished with the kind of care that turns accessories into heirlooms.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We work with small ateliers who share our commitment to ethical production and 
              exceptional quality. The result is demi-fine jewelry that feels luxurious, wears 
              beautifully, and respects both you and the planet.
            </p>
            <Link to="/" className="inline-block border border-primary text-primary px-8 py-3 text-sm tracking-widest uppercase transition-all duration-300 hover:bg-primary hover:text-primary-foreground">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
