import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[3/4] bg-secondary overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-x1y2z3"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <span className="text-xs tracking-widest uppercase text-accent mb-4 block">Our Story</span>
            <h2 id="brand-story-title" className="serif-heading text-4xl md:text-5xl mb-6">
              Where Craft<br />Meets Intention
            </h2>
            <p id="brand-story-desc" className="text-muted-foreground leading-relaxed mb-6">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury budget. 
              Each piece is designed in our studio and crafted with 18K gold plating over recycled brass — 
              because looking after the earth and looking beautiful should go hand in hand.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From the first sketch to the final polish, we obsess over every detail so you can wear 
              your Velmora pieces with confidence, day after day.
            </p>
            <Link to="/about" className="btn-outline inline-block">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
