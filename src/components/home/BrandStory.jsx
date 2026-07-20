import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="about" className="section-padding py-20 lg:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <div className="aspect-[4/5] bg-secondary rounded-sm overflow-hidden">
          <div
            data-strk-bg-id="brand-story-bg-d4e5f6"
            data-strk-bg="[brand-story-title] [brand-story-subtitle]"
            data-strk-bg-ratio="4x5"
            data-strk-bg-width="1000"
            className="w-full h-full"
          />
        </div>

        {/* Text */}
        <div className="lg:pl-8">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Our Story</p>
          <h2 id="brand-story-title" className="serif-heading text-4xl lg:text-5xl mb-6 leading-tight">
            Jewelry That Tells<br />Your Story
          </h2>
          <p id="brand-story-subtitle" className="text-muted-foreground leading-relaxed mb-6">
            Velmora was born from a simple belief: luxury shouldn't be locked behind a price tag. We create demi-fine pieces in 18K gold plating that feel as beautiful as they look — designed for everyday wear, crafted to last.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Every piece is hypoallergenic, thoughtfully designed, and finished with the kind of detail that makes you pause and admire your reflection.
          </p>
          <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-widest uppercase group">
            Discover More
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
