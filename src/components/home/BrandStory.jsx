import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-muted/20">
      <div className="container-padding">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[3/4] bg-muted overflow-hidden">
            <div
              data-strk-bg-id="brand-story-bg"
              data-strk-bg="[brand-story-title] [brand-story-subtitle]"
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="800"
              className="w-full h-full"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="text-xs tracking-widest uppercase text-primary mb-4">Our Story</p>
            <h2 id="brand-story-title" className="serif-heading text-3xl md:text-4xl lg:text-5xl mb-6">
              Jewelry That Tells Your Story
            </h2>
            <p id="brand-story-subtitle" className="text-muted-foreground leading-relaxed mb-4">
              Velmora was born from a simple belief: that luxury should be accessible, not exclusive. 
              We create demi-fine jewelry that bridges the gap between everyday pieces and heirloom treasures.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Each piece is crafted with 18K gold plating over quality brass, designed to be worn 
              daily and treasured always. Because the best jewelry isn't kept in a box — it's lived in.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-sm tracking-widest uppercase hover:text-primary transition-colors group">
              <span>Read Our Story</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
