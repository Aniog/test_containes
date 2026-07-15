import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] bg-[#E8E2DA] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-d4e5f6"
              data-strk-img="[brand-story-text] [our-story-title]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4 font-medium">
              Our Story
            </p>
            <h2
              id="our-story-title"
              className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight mb-6"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Where Craft<br />Meets Care
            </h2>
            <div className="hairline mb-6" />
            <p id="brand-story-text" className="text-muted-foreground text-sm leading-relaxed mb-6">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury budget. 
              Each piece is thoughtfully designed and crafted with 18K gold plating over quality brass, 
              creating demi-fine jewelry that looks and feels extraordinary — without the extraordinary price tag.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              We work with skilled artisans who share our commitment to quality and sustainability, 
              ensuring every piece is made with care for both the wearer and the world.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-foreground hover:text-primary transition-colors group"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
