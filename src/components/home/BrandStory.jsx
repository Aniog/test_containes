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
    <section ref={containerRef} className="section-padding bg-background">
      <div className="container-padding">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded overflow-hidden bg-stone-100">
            <div
              className="absolute inset-0"
              data-strk-bg-id="brand-story-img-d4e5f6"
              data-strk-bg="[brand-story-text] [our-story-title]"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="text-xs uppercase tracking-widest text-primary mb-3">Our Story</p>
            <h2 id="our-story-title" className="serif-heading text-3xl md:text-4xl lg:text-5xl text-stone-800 mb-6">
              Where Craft Meets Consciousness
            </h2>
            <div className="w-12 h-px bg-primary mb-6" />
            <p id="brand-story-text" className="text-stone-600 leading-relaxed mb-4">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't come at the cost of the earth or your wallet. Our demi-fine pieces are crafted with 18K gold plating over responsibly sourced brass, designed to be worn every day and treasured for years.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              Each piece is thoughtfully designed in our studio, balancing timeless elegance with contemporary style. We believe in quiet luxury — jewelry that speaks softly but leaves a lasting impression.
            </p>
            <Link to="/about" className="btn-secondary inline-block">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
